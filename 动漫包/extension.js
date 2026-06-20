import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '动漫包',
        content(config, pack) {
            lib.group.push('yao');
            lib.translate.yao = '<span style="color: #FF0000">妖</span>';
            lib.group.push('ga');
            lib.translate.ga = '<span style="color: #66CCFF">鬼</span>';
            lib.group.push('约');
            lib.translate.约 = '<span style="color: #FFC0CB">约</span>';
            lib.group.push('Beast');
            lib.translate.Beast = '<img src=extension/动漫包/Beast.png width="28" height="28">';
            lib.group.push('sArcher');
            lib.translate.sArcher = '<img src=extension/动漫包/sArcher.png width="28" height="28">';
            lib.group.push('Caster');
            lib.translate.Caster = '<img src=extension/动漫包/Caster.png width="28" height="28">';
            lib.group.push('Saber');
            lib.translate.Saber = '<img src=extension/动漫包/Saber.png width="28" height="28">';
            lib.group.push('Berserker');
            lib.translate.Berserker = '<img src=extension/动漫包/Berserker.png width="28" height="28">';
            lib.group.push('Avenger');
            lib.translate.Avenger = '<img src=extension/动漫包/Avenger.png width="28" height="28">';
            lib.group.push('AlterEgo');
            lib.translate.AlterEgo = '<img src=extension/动漫包/AlterEgo.png width="28" height="28">';
            lib.group.push('Archer');
            lib.translate.Archer = '<img src=extension/动漫包/Archer.png width="28" height="28">';
            lib.characterTitle.乙坂有宇 = '<span style="color: #FF0000">三秒男</span>';
            lib.characterTitle.博丽灵梦 = '<span style="color: #FF00FF">快晴的巫女</span>';
            lib.characterTitle.萝真 = '<span style="color: #FF0000">西街四十四号楼的死神</span>';
            lib.characterTitle.琪亚娜 = '<span style="color: #FF00FF">草履虫</span>';
            lib.characterTitle.濑由衣 = '<span style="color: #FF0000">破天</span>';
            lib.characterTitle.楚轩 = '<span style="color: #FF00FF">钓鱼狂魔</span>';
            lib.characterTitle.黑卫宫 = '<span style="color: #FF0000">失落之人</span>';
            lib.characterTitle.黑贞德 = '<span style="color: #FF00FF">龙之魔女</span>';
            lib.characterTitle.陈俊 = '<span style="color: #00FF00">虚空皇帝</span>';
            lib.characterTitle.复仇者 = '<span style="color: #FF0000">此世之恶</span>';
            lib.characterTitle.再一次 = '<span style="color: #66CCFF">莫比乌斯环</span>';
            lib.characterTitle.桐人 = '<span style="color: #00FF00">封弊者</span>';
            lib.characterTitle.李信 = '<span style="color: #FF0000">谋世之战</span>';
            lib.characterTitle.晏华 = '<span style="color: #FF0000">神之头脑</span>';
            lib.characterTitle.桐子 = '<span style="color: #FF0000">女装大佬</span>';
            lib.characterTitle.沙条爱歌 = '<span style="color: #FF0000">根源皇女</span>';
            lib.characterTitle.凤凰院凶真 = '<span style="color: #FF0000">孤独的观测者</span>';
            lib.characterTitle.暗游戏 = '<span style="color: #FF0000">背后灵</span>';
            lib.characterTitle.卫宫巨侠 = '<span style="color: #FF00FF">孤儿又成一人</span>';
            lib.characterTitle.柯南 = '<span style="color: #FF00FF">死神小学生</span>';
            lib.characterTitle.作者 = '<span style="color: #FF0000">最忠诚的叛徒</span>';
            lib.characterTitle.风见幽香 = '<span style="color: #FF0000">四季鲜花之主</span>';
            lib.characterTitle.八云紫 = '<span style="color: #FF00FF">永远的未成年</span>';
            lib.characterTitle.动漫包黑岩 = '<span style="color: #FF00FF">BLACk★ROCK SHOOTER</span>';
        },
        precontent() {
            get.drawcardPile = function (name) {
                var card;
                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                    card = ui.cardPile.childNodes[i];
                    if (typeof name == 'string') {
                        if (card.name == name) {
                            return card;
                        }
                    }
                    else if (typeof name == 'function') {
                        if (name(card)) {
                            return card;
                        }
                    }
                }
                return null;
            };
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
            //—————————————————————————————————————————————————————————————————————————————解构魔改本体函数
            const mogai = function () {
                lib.element.player.dyingResult = async function () {
                    const player1 = this;
                    game.log(player1, '濒死');
                    _status.dying.unshift(player1);
                    for (const i of game.players) {
                        const { result } = await i.chooseToUse({
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
                        });
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
                            if (target && target.isDead()) return;
                            if (info.notarget) return;
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
                        if (info.notarget) return;
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
                    var natures = (nature || '').split(lib.natureSeparator);
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
                        player
                    );
                    var numx = player.hasSkillTag('nohujia') ? num : Math.max(0, num - player.hujia);
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
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '动漫包',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    character: {
                        克总: ['female', 'shen', 6, ['邪神', 'SE_wanxing', 'SE_wanxing2', '克总发糖'], ['des:克总发糖……']],
                        '？？？': ['female', 'shen', 4, ['神姿', '繁简自然', '死亦生梦'], ['des:投影武将,貌似投影过程中出了些错误……']],
                        柯南: ['male', 'qun', 3, ['死神小学生', '神话加成'], ['des:这是一个被死神附体的小学生']],
                        桐人: ['male', 'qun', 4, ['封弊者', '二刀流', '战争自愈', '连破', '星爆气流斩', '娘化2', '四方斩'], ['des:这个武将是300英雄里的一个刺客,他最喜欢说的话是:亚丝娜,救我!']],
                        棉被王: ['female', 'Saber', 5, ['远离尘世的理想乡', 'EXcalibur'], ['des:王……终究不懂人心']],
                        古明地觉: ['female', 'yao', 4, ['gm', 'gm2'], ['des:睡觉？睡觉!']],
                        种花家: ['none', 'shen', 5, ['星星之火', '可以燎原', '一切帝国主义都是纸老虎!', '群殴', '我不需要阿谀奉承的部下'], ['des:起来!不愿做奴隶的人们!<br/>武将出处<兔年的那些事>']],
                        脚盆鸡: ['none', 'qun', 1, ['同化疫苗'], []],
                        黑贞德: ['female', 'Avenger', 5, ['自我改造', '龙之魔女', '咆哮吧我的愤怒!', '自我约束', '泡沫般的梦幻'], ['des:虽然自称为龙之魔女,但因为没有龙属性,所以飞龙好像并不是特别听她的话.']],
                        飞龙: ['none', 'qun', 3, ['龙息', '打野'], ['des:这是一条双足飞龙,当然……如果场上存在复数但位的双足飞龙的话,它们也许会打架.']],
                        A哥: ['none', 'qun', 4, ['伪装'], ['des:出自虐杀原形']],
                        蹲防蕾米: ['female', 'yao', 4, ['lm', '一起蹲防', '怀中抱妹杀'], ['des:博丽巫女见蕾米莉亚.蕾米服紫,以为威仪具足,乃备茶待之.少顷,巫女告辞.蕾米颇自得,乃阴遣人问之曰:<馆主威仪如何？>巫女答曰:<馆主娇柔非常.然床头怀匕 女仆,疑真馆主也.> ']],
                        上条当麻: ['male', 'qun', 5, ['stdm', 'STDM', '幻想杀手', 'st'], []],
                        一方通行: ['male', 'qun', 5, ['矢量操控', 'yftx'], []],
                        菜月昂: ['male', 'qun', 3, ['cya2', 'cya'], ['des:<从零>男主角,有着无限复活的能力']],
                        所罗门: ['male', 'Caster', 30, ['SE_mieshi', 'SE_mieshi4', 'SE_mieshi3', 'SE_mieshi2', 'E_shujufenpei', '人理烧却者', '魔术1'], ['des:所罗门的宝具【诀别之时以至,其为解放世界者】是概念上的宝具,是从概念上强制赋予所有人血量为0的概念,所以即便是无限血或者是没有血条的武将都会受到这个技能的影响,但这个宝具的代价是所罗门的生命.']],
                        肯娘: ['female', 'Berserker', 5, ['网瘾少年'], []],
                        圣杯: ['female', 'qun', 10, ['魔力', '楚楚可怜'], []],
                        高文: ['female', 'Saber', 10, ['炎阳', '炎阳的加护'], []],
                        幽幽子: ['female', 'ga', 8, ['饥饿', '亡灵公主'], ['des: 幽幽子饥甚,遣妖梦外出抄掠.妖梦掳米斯蒂娅等归.及见幽幽子,众皆垂泪.幽幽子不忍,持之手为涕泣良久.于是亲解其缚,执手躬自送诸庖厨. ']],
                        八云紫: ['female', 'yao', 8, ['境界', '神化'], ['des:紫者,妪也,紫大寿,强宴宾客于迷途家肴即尽,取陈酒,觞诸宾.宾皆不敢,尽却之.唯天子许,饮三壶,大醉.紫甚欣慰,请起舞悦众宾.众思谢之恐死,苦不敢言.遂舞.笙箫起,笛音生,紫披发旖旎,自思艳绝.舞毕,遽顾问于客.客皆骇然称善.唯天子醉曰:<笑煞人,老妪何惺惺然作处子态!>鞭于庭.']],
                        宅: ['female', 'qun', 5, ['变身女神埋', '宅生活'], ['des:这是一个喜欢喝肥宅快乐水的女孩']],
                        外: ['female', 'qun', 5, ['打野', '变身小埋'], []],
                        作者: ['male', 'qun', 1, ['关于取下敌人性命这件事情', '关于八云紫', '关于柯南', '关于红白', '关于援交', '关于后宫', '关于弹丸', '即死无效', '关于枪兵', '关于赝作', '尴尬的事情', '关于金皮卡', '总有刁民想害朕!', '关于弹丸(新)', '关于托管', '3', '关于爱憎', '关于爱恨', '诈尸', '深渊降临', '混沌降临', '觉醒', '娘化', '亡者归来', '亡语'], ['des:额……投影的事情怎么能说是抄呢？你说是吧……']],
                        wo: ['female', 'qun', 1, ['moon_88_2', '摸鱼', '全方位打击', '煤纹病'], []],
                        阿拉什: ['male', 'Archer', 5, ['np', '流星一条', '弓箭制作'], []],
                        暗游戏: ['male', 'qun', 5, ['开挂', '口胡'], ['des:无名的法老王,打牌技术一流,有个背后灵代打……']],
                        表游戏: ['male', 'qun', 1, ['代打'], []],
                        卫宫巨侠: ['male', 'qun', 5, ['身躯由剑所成', '投影魔术', '无限剑'], ['des:<魔伊>剧场版男主角,一夜一穿6,徒手造神兵,贴脸接EA,堪称赝品大魔王']],
                        陈俊: ['none', 'shen', 1, ['无尽', '天威'], ['boss', 'bossallowed', 'des:小说<希灵帝国>主角,虚空皇帝']],
                        伪公平: ['none', 'shen', 1, ['生而平等'], ['boss', 'bossallowed', 'des:概念武将']],
                        伪太虚之神: ['female', 'shen', 4, ['SE_yinguo', 'se_cibei'], ['des:原动漫包角色,被削的不成样子了']],
                        伪主神: ['none', 'shen', 6, ['主神', '创造', 'SE_lunhui2', '轮回空间', 'SE_mosha'], ['des:原动漫包角色,被某人用投影魔术厚颜无耻的投影到这里了']],
                        伪小圆: ['female', 'qun', 10, ['灵弓', 'se_cibei', '救世的祈愿'], ['des:投影武将,貌似完整……']],
                        伪地狱少女: ['female', 'shen', 9, ['亡者世界', '引导', '杀魄', '亡魂', '超度', 'SE_guiyu', 'SE_mingwang'], ['des:投影武将,因为投影的原因坚持不了几个回合就会崩溃']],
                        伪阎魔爱: ['female', 'ga', 5, ['守灵', '怨咒', '狱火', '变身'], ['des:投影武将,貌似没有什么问题……']],
                        伪黑猫: ['female', 'shen', 6, ['逆行', '堕天'], ['des:投影武将,实力严重削弱']],
                        伪龙宫礼奈: ['female', 'qun', 5, ['柴刀', '狂暴'], ['des:投影武将,好像还投影出来一把上好的柴刀……']],
                        伪帕秋莉: ['female', 'qun', 4, ['七曜', '病弱'], ['des:投影武将,帕秋莉♂go']],
                        伪立华奏: ['female', 'qun', 5, ['领域', '手刃♂雷杀!', 'SE_yinsu'], ['des:投影武将,投影过程好像看见了什么哲学的东西']],
                        伪辉夜: ['female', 'yao', 5, ['须弥', '脑残光环', '不死之身'], ['des:辉夜治永远亭,深居不出,事皆决于永琳,而众因幡轻之.博丽巫女遣雾雨问蓬莱玉枝,永琳将与之,上白辉夜.辉夜乃自折数枝,正色危坐曰:<此德者归之,非博丽所问也 .>遂逐其使.']],
                        深渊混沌: ['none', 'shen', 10, ['不灭之身', '混沌', '混沌反伤', '天威', '扩散', '即死无效', '天地不仁', '混沌体'], ['des:天地不仁!誓与尔等!同归炼狱!']],
                        深渊: ['none', 'shen', 10, ['不灭之身', '即死无效', '无相', '扩散'], []],
                        混沌: ['none', 'shen', 1, ['无尽混沌', '天威', '混沌反伤', '混沌', '化身', '即死无效', '星星之火'], ['boss', 'bossallowed']],
                        凤凰院凶真: ['male', 'qun', 3, ['孤独的观测者', '天威', '世界线的变动', '没有悲伤的时间轮回', '世界线的毁灭'], []],
                        红莉栖: ['female', 'qun', 4, ['时间之母', '命运石之门', '世界线的回溯', '命运石之门线'], []],
                        鲤鱼王: ['none', 'yao', 5, ['要有梦想'], []],
                        咕哒子: ['female', 'Beast', 1, ['普通攻击', '混沌恶', 'hd', '天威'], ['boss', 'bossallowed']],
                        神八云紫: ['female', 'shen', 8, ['隙间', '八云紫的消失', '生与死的境界'], []],
                        空: ['male', 'qun', 4, ['欺诈'], []],
                        白: ['female', 'qun', 5, ['不败', '向公平宣誓'], []],
                        休比: ['none', 'qun', 10, ['绝境', '机铠种', '33', '233', '破釜沉舟'], []],
                        里克: ['male', 'qun', 10, ['幽灵行动', '破釜沉舟', '无相'], []],
                        复仇者: ['none', 'Avenger', 5, ['此世之恶', '伪写记载之万象', '无相', '恶念'], ['des:失败!失败!失败!还是失败!无尽的恶念再也无法抑制!被无限摸牌流和无限回血流恶心到的作者恶念,决定复仇!']],
                        残: ['male', 'shen', 3, ['反射', '黑翼状态'], []],
                        铃科百合子: ['none', 'qun', 5, ['矢量', '女装'], []],
                        李瞬生: ['male', 'qun', 4, ['袭杀', '雷暴'], []],
                        粟山未来: ['female', 'qun', 5, ['回收', '血爆', '诅咒之血', '贫血'], []],
                        命运石之门: ['none', 'shen', 1, ['世界线的变动', '时间之母', '世界线的毁灭', '没有悲伤的时间轮回', '天威', '世界线的回溯', '不再孤单的观测者'], ['des:这一切……都是命运石之门的选择!']],
                        B叔: ['male', 'Berserker', 3, ['大力神', '十2'], []],
                        黑圣杯: ['female', 'Caster', 5, ['咏唱吧!黑圣杯!', '侵蚀'], []],
                        风见幽香: ['female', 'yao', 5, ['花之暴君', '即死无效', '逆鳞', '强暴', '归隐', '复生'], []],
                        黑卫宫: ['male', 'Archer', 5, ['防弹加工', '投影魔术', '安培使用', '限制解除'], ['des:只不过是个舍弃自己名字的人罢了.']],
                        七夜志贵: ['male', 'qun', 3, ['极死-七夜', '闪鞘·迷狱沙门', '七夜流体术'], []],
                        乙坂有宇: ['male', 'qun', 3, ['夺魂'], []],
                        樱满集: ['male', 'qun', 4, ['王之力', '壮士断腕'], ['des:罪恶王冠男主角']],
                        小企业: ['female', 'qun', 4, ['炮击', 'w', '煤纹病'], []],
                        绊爱: ['none', 'shen', 5, ['真人工智障', 'ai起义', '伪帝', '花Q'], ['zhu', 'des:这个武将有自己的想法']],
                        塞拉菲姆: ['female', 'shen', 8, ['我不高兴!', '滚去轮回!', '神意'], ['des:1.少女:你没按我说的选,我不高兴,滚去轮回<br/> 2.少女:我是神,你敢怼我？我不高兴,滚去轮回 <br/> 3.少女:安托被你玩死了,我不高兴,滚去轮回<br/> 4.少女:黑核都让希罗拿完了,你玩个杰宝玩,我不高兴,滚去轮回<br/> 5.少女:没有理由,我就是不高兴了,滚去轮回.<br/> 游戏<永远的七日之都>的轮回就像女朋友生气的理由一样,你永远搞不懂为什么(´;ω;`)']],
                        绊爱2: ['female', 'qun', 1, [], []],
                        沙条爱歌: ['female', 'qun', 4, ['黑魔术', '亚瑟控', '千里眼', '人生赢家？'], ['des:某次圣杯战争的御主,擅长偷家,死于友方从者背刺(不止一次).']],
                        黑: ['female', 'Beast', 1, ['喰世女神', '力量的代价', '亚瑟控', '千里眼', '人生赢家？'], ['des:链接着根源的怪物,虽然在这个世界没有根源这种东西.']],
                        黑亚瑟: ['male', 'Saber', 5, ['风王铁鎚(黑)', '誓约胜利之剑(黑)'], ['des:亚瑟·潘德拉贡(Arthur Pendragon),又译阿瑟·潘德拉贡,史称亚瑟王(King Arthur),是传说中的古不列颠最富有传奇色彩的伟大国王.人们对他感性认识更多的是来自凯尔特神话传说和中世纪的野史文献,没有人大量涉足过亚瑟王的真实生活.传说他是圆桌骑士的首领,一位近乎神话般的传奇人物,被称为<永恒之王>(the Once and Future King).']],
                        再一次: ['male', 'shen', 1, ['再一次', 'm'], ['boss', 'bossallowed', 'des:国庆武将,动漫出处,bilibili拜年祭单品<再一次>']],
                        瑞吉尔: ['female', 'qun', 3, ['缝补', '约定', '诈尸'], ['des:小火汁,没想到你也是个恶人.']],
                        干将莫邪: ['none', 'Caster', 4, ['剑来!'], []],
                        血小板: ['female', 'yao', 3, ['我觉得学医救不了主公'], ['des:腐草为萤']],
                        琪亚娜: ['female', 'qun', 5, ['怪力', '现在,是琪亚娜时间!', '黑渊白花'], []],
                        千子村正: ['male', 'Saber', 5, ['刀剑制作', '刀冢', '免疫拆卸'], []],
                        晏华: ['male', 'qun', 5, ['独行之人', '精确瞄准', '广域狙击', '囚禁神明之人', '登场'], []],
                        桐子: ['female', 'qun', 4, ['封弊者', '二刀流', '连破', '星爆气流斩', '灵动'], []],
                        动漫包黑岩: ['female', 'qun', 5, ['自愈', '蓝火', '武器切换'], []],
                        李信: ['male', 'qun', 4, ['觉醒1', '光明形态', '黑暗形态', '强力斩击', '登场台词'], []],
                        萝真: ['female', 'ga', 4, ['控魂1', '鬼影子'], ['zhu', 'des:小姐姐好可爱……']],
                        逝者1: ['female', 'ga', 3, ['守灵'], []],
                        濑由衣: ['female', 'yao', 5, ['好战', '红莲之箭痕', '引燃贯穿', '命悬一线', '神器解放'], ['des:我名为「破天」之濑由衣,神弓啊,射穿万物吧!']],
                        夏娜: ['female', 'qun', 5, ['贽殿遮那', '天破壤碎', '封绝3', '火焰战翼', '阿里托利亚的羽衣'], []],
                        利姆露: ['none', 'yao', 1, ['吞噬者', '大贤者', '变身者', '就让秋风带着我的思念,带走我的泪~'], []],
                        秦苏儡: ['male', 'shen', 3, ['赤红之力', '夺魂者'], ['des:你想和我做笔交易吗？']],
                        博丽灵梦: ['female', 'qun', 4, ['快晴', '治退', '擦弹', '梦想封印', '四大灵梦', '祸灵梦', '鬼巫女', '白丽灵梦'], []],
                        楚轩: ['male', 'qun', 4, ['布局', '情报收集'], []],
                        坂井悠二: ['male', 'ga', 4, ['能力扩充', '零时迷子', '祭礼之蛇'], []],
                        '夜刀神十香(伪)': ['female', '约', 5, ['鏖杀公', '剑之王座', '神威霊装·十番', '最后之剑展开', '灵核反转', '十香反转'], []],
                    },
                    characterTitle: {
                    },
                    characterIntro: {
                    },
                    skill: {
                        3: {
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '黑';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                'step 0';
                                player.maxHp = 10;
                                player.hp = 10;
                                ('step 1');
                                player.addSkill('扩散');
                                player.addSkill('不灭之身');
                                player.addSkill('混沌');
                                player.addSkill('右齿啃咬');
                                player.addSkill('忘却补正');
                                player.addSkill('死灭愿望');
                                player.addSkill('我不高兴');
                                player.addSkill('滚去轮回');
                                player.addSkill('天地不仁');
                                player.removeSkill('3');
                                player.setAvatar('作者', '深渊混沌');
                            },
                            contentAfter() {
                                player.recover();
                                ui.backgroundMusic.src = 'extension/动漫包/造物主的孤独.mp3';
                                var chat = ['你为什么要出来呢？为什么呢？为什么不乖乖呆在小黑屋里闭目等死呢？', '创造你,我很抱歉!'].randomGet();
                                player.say(chat);
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        33: {
                            mod: {
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                                targetInRange() {
                                    if (!get.is.altered('fengnu')) return true;
                                },
                            },
                            alter: true,
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                return player.countUsed(event.card) > 1;
                            },
                            forced: true,
                            usable: 9,
                            content() {
                                player.draw();
                            },
                        },
                        233: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            audio: 'ext:动漫包/audio:true',
                            filter(event, player) {
                                if (event.num <= 1) return false;
                                if (event.source && event.source.hasSkillTag('unequip', false, event.card)) return false;
                                return true;
                            },
                            _priority: -10,
                            content() {
                                trigger.num = 1;
                            },
                        },
                        蓝火: {
                            nobracket: true,
                            trigger: {
                                player: ['loseEnd', 'changeHp'],
                            },
                            silent: true,
                            forced: true,
                            content() {
                                player.removeAdditionalSkill('蓝火');
                                var list = [];
                                if (player.countCards('h') < 1) {
                                    list.push('白花');
                                }
                                if (player.hp <= 1) {
                                    list.push('复生1');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('蓝火', list);
                                }
                            },
                            popup: false,
                        },
                        须弥: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            _priority: 10,
                            filter(event, player) {
                                if (event.parent.name == 'SE_xuyu') return false;
                                return event.player != player && event.player.num('h') > _status.event.player.hp;
                            },
                            content() {
                                'step 0';
                                var num = trigger.player.num('h') - _status.event.player.hp;
                                trigger.player.chooseToDiscard(num, true);
                                ('step 1');
                                const evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                                var chat = ['时间会告诉你答案……', '苟……', '我是死宅怎么了!', '宅使我快乐!'].randomGet();
                                player.say(chat);
                            },
                        },
                        领域: {
                            nobracket: true,
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player)) return false;
                                return true;
                            },
                            audio: 'ext:动漫包/audio:2',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.type(card) == 'basic') return 1;
                                    return 0;
                                });
                                ('step 1');
                                if (get.type(result.card) == 'basic') {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                        },
                        '手刃♂雷杀!': {
                            audio: 'ext:动漫包/audio:true',
                            nobracket: true,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                                nature: 'thunder',
                                suit: 'spade',
                                number: 13,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 13, name: 'nanman', cardid: '4684814380', clone: { name: 'nanman', suit: 'spade', number: 13, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 6763 }, original: 'h', timeout: 6689 }],
                            },
                            prompt: '将一张黑色牌当雷杀使用',
                            ai: {
                                respondSha: true,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order: 3,
                                result: {
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.num('e', 'baiyin')) {
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
                        七曜: {
                            nobracket: true,
                            trigger: {
                                global: 'damageBefore',
                            },
                            group: ['淦', '木光', '水光', '火光', '土光', '日光', '月光'],
                            forced: true,
                            filter(event, player) {
                                return event.player != undefined && event.num > 0;
                            },
                            _priority: null,
                            content() {
                                'step 0';
                                player.chooseControl('火', '雷', '毒', '无来源', ui.create.dialog('请选择一项', 'hidden')).ai = function (event, player) {
                                    var player = trigger.player;
                                    var equip2 = trigger.player.get('e', '2');
                                    if (player.hasSkillTag('nofire')) return '无来源';
                                    if (player.hasSkillTag('nothunder')) return '无来源';
                                    if (equip2 && equip2.name == 'tengjia') return '火';
                                    return '无来源';
                                };
                                ('step 1');
                                if (result.control == '火') {
                                    trigger.nature = 'fire';
                                } else if (result.control == '雷') {
                                    trigger.nature = 'thunder';
                                } else if (result.control == '毒') {
                                    trigger.nature = 'poison';
                                } else {
                                    trigger.untrigger();
                                    trigger.finish();
                                    var ex = 0;
                                    if (trigger.card && trigger.card.name == 'sha') {
                                        if (player.skills.includes('jiu')) ex++;
                                        if (player.skills.includes('luoyi2')) ex++;
                                        if (player.skills.includes('reluoyi2')) ex++;
                                    }
                                    trigger.player.loseHp(trigger.num + ex);
                                }
                            },
                        },
                        病弱: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        柴刀: {
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.num('hej')) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('hej', true);
                                ('step 1');
                                event.target = game.players.randomGet(player);
                                ('step 2');
                                event.target.showHandcards();
                                ('step 3');
                                var cards = event.target.get('h', 'sha');
                                if (cards.length) {
                                    player.gain(cards);
                                    event.target.$give(cards, player);
                                    event.target.chooseToDiscard('he', true);
                                } else {
                                    event.target.damage('fire');
                                }
                            },
                        },
                        狂暴: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return 1;
                                    if (card.suit == 'spade') return 2.5;
                                    if (card.suit == 'club') return 2;
                                    return 3;
                                });
                                ('step 1');
                                var num = trigger.player.get('h');
                                var cards0 = trigger.player.get('h', 'shan');
                                var cards1 = trigger.player.get('h', 'sha');
                                switch (result.card.suit) {
                                    case 'heart':
                                        trigger.player.damage('fire');
                                        break;
                                    case 'spade':
                                        trigger.player.discard(cards0);
                                        player.recover();
                                        break;
                                    case 'club':
                                        trigger.player.discard(cards1);
                                        trigger.player.loseHp();
                                        break;
                                    case 'diamond':
                                        trigger.player.turnOver();
                                        player.gainMaxHp();
                                        break;
                                }
                            },
                        },
                        逆行: {
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                const evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                                player.phase('nodelay');
                            },
                        },
                        堕天: {
                            audio: 'ext:动漫包/audio:4',
                            trigger: {
                                global: 'phaseDrawAfter',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.player.num('he') > 0 && event.player != player;
                            },
                            content() {
                                var hs = trigger.player.get('he');
                                if (hs.length) {
                                    var hs2 = [];
                                    for (var i = 0; i < hs.length; i++) {
                                        hs2.push(game.createCard(hs[i].name, hs[i].suit, hs[i].number));
                                    }
                                    player.gain(hs2, 'draw');
                                }
                            },
                        },
                        邪神: {
                            audio: 'xieshen1',
                            trigger: {
                                global: 'triggerBefore',
                            },
                            nobracket: true,
                            filter(event, player) {
                                if (event.parent.name == 'SE_xieshen') return false;
                                if (event.skill == '_phaseBegin') return false;
                                if (event.skill == '_turnover') return false;
                                if (event.skill == '_wuxie') return false;
                                if (event.skill == '_chenhuodajie') return false;
                                if (event.skill == '_save') return false;
                                if (event.skill == '_lianhuan') return false;
                                if (event.skill == '_lianhuan2') return false;
                                if (event.skill == '_lianhuan3') return false;
                                if (event.skill == '_lianhuan4') return false;
                                if (event.skill == 'SE_qiyuan5') return false;
                                if (event.skill == 'SE_qiyuan6') return false;
                                if (event.skill == 'SE_qiyuan7') return false;
                                if (event.skill == '_mingzhi1') return false;
                                if (event.skill == '_mingzhi2') return false;
                                if (player.num('h') <= 0) return false;
                                if (event.player == player) return false;
                                return true;
                            },
                            forced: true,
                            init(player) {
                                delete player.identity;
                                player.identity = null;
                                player.setIdentity('神');
                                player.node.identity.dataset.color = 'zhu';
                                if (game.zhu && game.zhu != player) {
                                    game.zhu.node.identity.dataset.color = 'fan';
                                }
                                player.node.name.dataset.nature = 'fire';
                            },
                            _priority: null,
                            content() {
                                'step 0';
                                var num = Math.ceil(player.num('h') / 2);
                                player.chooseTarget('是否选择1名角色弃置' + num + '张牌使' + get.translation(trigger.player) + '的' + get.translation(trigger.skill) + '触发无效并将技能发起人转移给目标或者终止结算？').ai = function (target) {
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var num = Math.ceil(player.num('h') / 2);
                                    player.chooseToDiscard(num, true);
                                    player.chooseControl('继续结算', '终止技能', ui.create.dialog('请选择一项', 'hidden')).ai = function () {
                                        if (player.num('h') <= 2) return '继续结算';
                                        return '终止技能';
                                    };
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control == '继续结算') {
                                    trigger.untrigger();
                                    trigger.player = event.targets[0];
                                    game.log(get.translation(trigger.skill), '的使用权暂时转移给了', event.targets);
                                    trigger.trigger('triggerBefore');
                                } else {
                                    trigger.untrigger();
                                    trigger.cancelled = true;
                                    game.log(get.translation(trigger.skill), '的触发被终止');
                                }
                            },
                        },
                        创造: {
                            nobracket: true,
                            audio: 'cunzaichuangzao',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (game.players.length + game.dead.length <= 5) return true;
                                return false;
                            },
                            content() {
                                var list = [];
                                for (var i in lib.character) {
                                    if (lib.character[i].mode && lib.character[i].mode.includes(lib.config.mode) == false) continue;
                                    if (i != 'list') list.push(i);
                                }
                                var players = game.players.concat(game.dead);
                                for (var j = 0; j < players.length; j++) {
                                    list.remove([players[j].name]);
                                }
                                if (list.length) {
                                    var player2 = game.addPlayer();
                                    player2.getId();
                                    if (get.config('double_character') || lib.config.mode == 'guozhan') {
                                        var list2 = list.randomGets(2);
                                        player2.init(list2[0], list2[1]);
                                    } else {
                                        player2.init(list.randomGet());
                                    }
                                    player2.identity = player.identity;
                                    if (player2.identity == 'zhu') player2.identity = 'zhong';
                                    player2.setIdentity('奴');
                                    player2.group = player.group;
                                    player2.identityShown = true;
                                    player2.draw(4);
                                    if (player2.name) {
                                        var skills0 = lib.character[player2.name][3];
                                    }
                                    if (player2.name1) {
                                        var skills1 = lib.character[player2.name1][3];
                                    }
                                    if (player2.name2) {
                                        var skills2 = lib.character[player2.name2][3];
                                    }
                                    if (skills0 && skills0.length) {
                                        for (var i = 0; i < skills0.length; i++) {
                                            player.addSkill(skills0[i]);
                                        }
                                    }
                                    if (skills1 && skills1.length) {
                                        for (var i = 0; i < skills1.length; i++) {
                                            player.addSkill(skills1[i]);
                                        }
                                    }
                                    if (skills2 && skills2.length) {
                                        for (var i = 0; i < skills2.length; i++) {
                                            player.addSkill(skills2[i]);
                                        }
                                    }
                                    if (player.maxHp > 0) player.loseMaxHp();
                                }
                            },
                        },
                        吸收: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                global: 'dieBefore',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return event.player != player && event.player.maxHp != 0;
                            },
                            content() {
                                trigger.player.loseMaxHp(trigger.player.maxHp);
                                player.maxHp += trigger.player.maxHp;
                                player.recover(trigger.player.maxHp);
                                var skills = lib.character[trigger.player.name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    if (!lib.skill[skills[i]].forceunique) {
                                        player.addSkill(skills[i]);
                                        trigger.player.removeSkill(skills[i]);
                                    }
                                }
                                player.update();
                            },
                        },
                        守灵: {
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.num('h') < 2;
                            },
                            content() {
                                player.draw(2 - player.num('h'));
                            },
                        },
                        怨咒: {
                            nobracket: true,
                            trigger: {
                                source: 'damage',
                            },
                            filter(event, player) {
                                return event.player.hp <= 0;
                            },
                            forced: true,
                            content() {
                                trigger.player.die(trigger);
                            },
                        },
                        狱火: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var players = get.players(player);
                                players.remove(player);
                                event.players = players;
                                ('step 1');
                                if (event.players.length) {
                                    event.players.shift().damage('fire');
                                    event.redo();
                                }
                            },
                        },
                        亡者世界: {
                            nobracket: true,
                            trigger: {
                                global: ['phaseDrawBefore', 'phaseDiscardBefore'],
                            },
                            _priority: 10,
                            forced: true,
                            popup: false,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        引导: {
                            nobracket: true,
                            trigger: {
                                player: ['loseEnd', 'changeHp'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.num('h') < 4;
                            },
                            content() {
                                player.draw(4 - player.num('h'));
                            },
                        },
                        杀魄: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            prompt: '请选择1名角色',
                            content() {
                                'step 0';
                                var players = get.players(player);
                                players.remove(player);
                                event.players = players;
                                ('step 1');
                                if (event.players.length) {
                                    event.players.shift().loseMaxHp();
                                    event.redo();
                                }
                            },
                        },
                        亡魂: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                target.clearSkills();
                                player.removeSkill('SE_wanghun');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        超度: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                target.die();
                                player.damage('fire');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        死亦生梦: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 55,
                            filter(event, player) {
                                return event.player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.judge(function (card) {
                                    if (get.color(card) == 'black') return -10;
                                    if (get.color(card) == 'red') return 5;
                                });
                                ('step 1');
                                if (result.color == 'black') {
                                    trigger.player.die();
                                } else {
                                    if (result.color == 'red') {
                                        trigger.player.recover();
                                    }
                                }
                                ('step 2');
                                if (!trigger.player.isAlive()) {
                                    trigger.untrigger(true);
                                    trigger.finish();
                                }
                            },
                        },
                        繁简自然: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: ['useCardAfter', 'respond'],
                            },
                            _priority: 10,
                            forced: true,
                            filter(event, player) {
                                return player.num('h');
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(true, '请选择1名角色令其判定', function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'thunder') - 1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        if (get.color(card) == 'red' && player.num('h') >= event.target.num('h')) {
                                            return 1;
                                        } else {
                                            return -1;
                                        }
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.color == 'red') {
                                    var num = player.num('h') - event.target.num('h');
                                    if (num > 0) {
                                        event.target.draw(num);
                                    } else if (num < 0) {
                                        event.target.chooseToDiscard(-num, true);
                                    }
                                } else {
                                    if (result.color == 'black') {
                                        event.target.damage('thunder');
                                    }
                                }
                            },
                        },
                        神姿: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card) return true;
                                for (var i of game.players) {
                                    if (i.num('hej')) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var players = [];
                                for (var i of game.players) {
                                    if (i.num('hej')) {
                                        players.push(i);
                                    }
                                }
                                if (!players.length) {
                                    event.finish();
                                    return;
                                }
                                event.dialog = ui.create.dialog('hidden');
                                event.dialog.add(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动【神姿】？');
                                event.position = 'hej';
                                var position = event.position;
                                for (var i = 0; i < position.length; i++) {
                                    for (var j = 0; j < players.length; j++) {
                                        if (position[i] == 'h' && players[j].num('h')) {
                                            event.dialog.add(get.translation(players[j]) + '的手牌');
                                            var hs = players[j].get('h');
                                            hs.randomSort();
                                            event.dialog.add(hs);
                                        }
                                        if (position[i] == 'e' && players[j].num('e')) {
                                            event.dialog.add(get.translation(players[j]) + '的装备牌');
                                            event.dialog.add(players[j].get('e'));
                                        }
                                        if (position[i] == 'j' && players[j].num('j')) {
                                            event.dialog.add(get.translation(players[j]) + '的判定牌');
                                            event.dialog.add(players[j].get('j'));
                                        }
                                    }
                                }
                                var dialog = event.dialog;
                                player.chooseButton(dialog, function (button) {
                                    var card = button.link;
                                    var trigger = _status.event.parent._trigger;
                                    var player = _status.event.player;
                                    var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
                                    var attitude = get.attitude(player, trigger.player);
                                    return result * attitude;
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.buttons[0].link;
                                    if (get.owner(event.card)) get.owner(event.card).discard(event.card);
                                    else trigger.player.$throw(event.card, 1000);
                                    if (event.card.clone) {
                                        event.card.clone.classList.add('thrownhighlight');
                                        game.addVideo('highlightnode', player, get.cardInfo(event.card));
                                    }
                                }
                                ('step 2');
                                if (event.card) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    game.log(player, '获得了', trigger.player.judging[0]);
                                    trigger.player.judging[0] = event.card;
                                    trigger.position.appendChild(event.card);
                                    game.log(trigger.player, '的判定牌改为', event.card);
                                    event.card.expired = true;
                                }
                            },
                        },
                        灵弓: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'chooseToUse',
                            usable: 1,
                            filterCard(card, player) {
                                return card.number >= _status.event.player.hp;
                            },
                            position: 'he',
                            viewAs: {
                                name: 'wanjian',
                                suit: 'diamond',
                                number: 11,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 11, name: 'shan', cardid: '8670864262', clone: { name: 'shan', suit: 'diamond', number: 11, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 1127 }, timeout: 990, original: 'h' }],
                            },
                            prompt: '将一张大于等于你体力点数的牌当万箭齐发使用',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.num('h', 'shan')) {
                                        if (!target.num('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: 1,
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        var num = 0;
                                        for (var i of game.players) {
                                            if (i.ai.shown == 0) num++;
                                        }
                                        if (num > 1) return 0;
                                        var nh = target.num('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
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
                        死神小学生: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && Math.random() <= 0.9;
                            },
                            content() {
                                trigger.player.qdie(player);
                            },
                        },
                        自愈: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                player.hp = player.maxHp;
                            },
                        },
                        变身: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 1;
                            },
                            content() {
                                player.init('伪地狱少女');
                                player.update();
                                ui.clear();
                            },
                        },
                        即死无效: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp >= 1;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp == player.hp;
                            },
                        },
                        花之暴君: {
                            nobracket: true,
                            mod: {
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                                targetInRange() {
                                    if (!get.is.altered('fengnu')) return true;
                                },
                            },
                            alter: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                return player.countUsed(event.card) > 1;
                            },
                            forced: true,
                            usable: 9,
                            content() {
                                player.draw();
                            },
                        },
                        对柯南专用技能: {
                            enable: 'phaseUse',
                            mode: ['boss'],
                            filterTarget(card, player, target) {
                                return target.name == '柯南';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                target.damage(2, 'fire');
                            },
                            contentAfter() {
                                'step 0';
                                player.chooseTarget(function (card, player, target) {
                                    return target.side != player.side;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire');
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.line(event.target, 'fire');
                                    event.target.chooseToDiscard('he', { color: 'red' }, '弃置一张红色牌或受到一点火焰伤害').ai = function (card) {
                                        var player = _status.event.player;
                                        var source = _status.event.parent.player;
                                        if (get.damageEffect(player, source, player, 'fire') >= 0) return 0;
                                        return 8 - get.value(card);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!result.bool) {
                                    event.target.damage('fire');
                                }
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, target) {
                                        if (target.isLinked() && player.isLinked() && get.damageEffect(player, player, player, 'fire') < 0) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        远离尘世的理想乡: {
                            nobracket: true,
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 10086;
                                },
                            },
                        },
                        星爆弃疗斩: {
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            filter(event, player) {
                                return Math.random() <= 0.8;
                            },
                            forced: true,
                            content() {
                                trigger.player.damage();
                            },
                        },
                        二刀流: {
                            nobracket: true,
                            mod: {
                                selectTarget(card, player, range) {
                                    if (player.num('e', { subtype: 'equip1' }) >= 2 && card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++;
                                },
                                cardUsable(card, player, num) {
                                    if (player.num('e', { subtype: 'equip1' }) >= 2 && card.name == 'sha') return num + 1;
                                },
                            },
                            trigger: {
                                player: 'equipBegin',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return player.num('e', { subtype: 'equip1' }) && get.subtype(event.card) == 'equip1';
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                                const card = trigger.cards[0];
                                if (card) {
                                    const vcard = new lib.element.VCard(card);
                                    const cardSymbol = Symbol('card');
                                    card.cardSymbol = cardSymbol;
                                    card[cardSymbol] = vcard;
                                    player.vcardsMap?.equips.push(vcard);
                                    player.node.equips.appendChild(card);
                                    card.style.transform = '';
                                    card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                                }
                                const info = get.info(card, false);
                                if (info.skills) {
                                    for (const i of info.skills) {
                                        player.addSkillTrigger(i);
                                    }
                                }
                                const cards = player.getCards('e', { subtype: get.subtype(card) });//没有trigger.card
                                const num = cards.length - 2;
                                if (num > 0) {
                                    const { links } = await player.chooseButton(['选择弃置', cards], num, true).forResult();
                                    if (links.length) {
                                        player.discard(links);
                                    }
                                }
                            },
                            group: ['二刀流_必中'],
                            subSkill: {
                                必中: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.num('e', { subtype: 'equip1' }) >= 2 && event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.directHit = true;
                                        var chat = ['只要有一把剑,我就可以去往任何地方', '装逼如风,常伴吾身!', '无敌的我……又迷路了', '電神お剑き喰え!'].randomGet();
                                        player.say(chat);
                                    },
                                    popup: false,
                                },
                            },
                            popup: false,
                        },
                        gm: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h')) {
                                    player.chooseCardButton('读心', target.getCards('h')).ai = function (button) {
                                        return get.value(button.link) - 5;
                                    };
                                } else {
                                    player.viewHandcards(target);
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.links[[0]];
                                    player.chooseCard('h', true, '用一张手牌替换' + get.translation(event.card)).ai = function (card) {
                                        return -get.value(card);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.gain(event.card, target);
                                    target.gain(result.cards, player);
                                    player.$giveAuto(result.cards, target);
                                    target.$giveAuto(event.card, player);
                                    game.log(player, '与', target, '交换了一张手牌');
                                }
                            },
                        },
                        gm2: {
                            nobracket: true,
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            forced: true,
                            alter: true,
                            filter(event, player) {
                                if (event.responded) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h');
                                });
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('gm2'), function (card, player, target) {
                                    if (target == player) return false;
                                    var nh = target.countCards('h');
                                    if (nh == 0) return false;
                                    if (get.is.altered('gm2')) {
                                        return (nh = nh);
                                    }
                                    return true;
                                }).ai = function (target) {
                                    return 1 - get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    var cards = target.getCards('h');
                                    player.chooseCardButton('选择' + get.translation(target) + '的一张卡手牌打出', cards).filterButton = function (button) {
                                        return trigger.filterCard(button.link, player);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    game.log(player, '使用了', event.target, '的手牌');
                                    event.target.$throw(result.links);
                                    event.target.lose(result.links);
                                    trigger.untrigger();
                                    trigger.animate = false;
                                    trigger.responded = true;
                                    result.buttons[0].link.remove();
                                    trigger.result = { bool: true, card: result.buttons[0].link };
                                } else {
                                    player.getStat('triggerSkill').gm2--;
                                }
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.tag(card, 'respondShan')) return 0.4;
                                        if (get.tag(card, 'respondSha')) return 0.4;
                                    },
                                },
                            },
                        },
                        十二重试练: {
                            nobracket: true,
                            enable: 'chooseToUse',
                            mark: true,
                            usable: 12,
                            init(player) {
                                player.storage.十二试练 = false;
                            },
                            filter(event, player) {
                                if (event.type != 'dying') return false;
                                if (player != event.dying) return false;
                                if (player.storage.十二试练) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.hp = Math.min(player.maxHp);
                                player.unmarkSkill('十二试练');
                                player.storage.十二试练 = false;
                                player.gainMaxHp();
                                ('step 1');
                                if (player.isLinked()) player.link();
                                ('step 2');
                                if (player.isTurnedOver()) player.turnOver();
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player) {
                                    if (player.storage.niepan) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player: 10,
                                },
                                threaten(player, target) {
                                    if (!target.storage.niepan) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        大力神: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            forced: true,
                            content() {
                                trigger.num *= 4;
                                player.say('恶啊啊啊啊啊啊啊(╬◣д◢)!!!');
                            },
                        },
                        十二历练: {
                            nobracket: true,
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            _priority: -10,
                            filter(event, player) {
                                return event.player.hasSkill('十二试炼');
                            },
                            content() {
                                'step 0';
                                ('step 1');
                                trigger.player.init('Hercules');
                            },
                        },
                        王之军势: {
                            trigger: {
                                player: 'gainEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return Math.random() <= 1;
                            },
                            content() {
                                player.gainMaxHp();
                                player.recover();
                            },
                        },
                        无序攻击: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                var n = [1, 2, 4].randomGet();
                                if (n == 1) trigger.player.die();
                                if (n == 2) trigger.player.loseMaxHp(2);
                                if (n == 4) trigger.player.loseHp(3);
                            },
                        },
                        群殴: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return !player.storage.AionionHetairoi;
                            },
                            init(player) {
                                player.storage.AionionHetairoi = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            title() {
                                return '<div class="text center" style="color: #ffff00">能群殴何必单挑？';
                            },
                            content() {
                                'step 0';
                                player.unmarkSkill('AionionHetairoi');
                                player.storage.AionionHetairoi = false;
                                event.current = player.next;
                                event.target = target;
                                player.useCard({ name: 'juedou' }, event.target);
                                ('step 1');
                                if (event.target.isDead()) {
                                    if (event.target.next != player) {
                                        event.target = event.target.next;
                                    } else {
                                        event.target = player.next;
                                    }
                                }
                                ('step 2');
                                event.current.useCard({ name: 'juedou' }, event.target);
                                ('step 3');
                                if (event.target.isDead()) {
                                    if (event.target.next != player) {
                                        event.target = event.target.next;
                                    } else {
                                        event.target = player.next;
                                    }
                                }
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(2);
                                }
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                },
                                result: {
                                    target: -10,
                                },
                            },
                        },
                        获得技能: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                trigger.player.addSkill('抱头蹲防');
                                var chat = ['再睡一会……就一会z……ZZZ', '哇呜～我不起床!不起床!就不起床\(＞皿＜)丿!', '这物欲横流的社会,人心冷漠无情,只有这棉被还有些温暧……'].randomGet();
                                player.say(chat);
                            },
                        },
                        EXcalibur: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                if (Math.random() <= 1) {
                                    target.damage();
                                }
                                event.num++;
                                ('step 2');
                                if (event.num < 100) event.goto(1);
                                player.removeSkill('EXcalibur');
                                player.addSkill('获得技能');
                            },
                        },
                        抱头蹲防: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.removeSkill('禁止回合');
                            },
                        },
                        星星之火: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.maxHp >= 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp = 0;
                            },
                        },
                        可以燎原: {
                            nobracket: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return !player.storage.可以燎原;
                            },
                            forced: true,
                            _priority: 100,
                            content() {
                                'step 0';
                                player.storage.可以燎原 = true;
                                player.maxHp == 5;
                                player.changeHujia(5);
                                ('step 1');
                                player.hp = player.maxHp;
                                player.addTempSkill('qianxing', { player: 'phaseBegin' });
                                player.addSkill('王之军势');
                            },
                        },
                        '一切帝国主义都是纸老虎!': {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                trigger.player.addSkill('纸老虎');
                                player.say('一切帝国主义都是纸老虎!');
                            },
                        },
                        纸老虎: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 100;
                            },
                            content() {
                                player.init('脚盆鸡');
                                player.update();
                                ui.clear();
                            },
                        },
                        '大召唤术!': {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                trigger.player.addSkill('柯南');
                                player.say('就决定是你了!');
                            },
                        },
                        柯南: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 100;
                            },
                            content() {
                                player.init('柯南');
                                player.update();
                                ui.clear();
                            },
                        },
                        自我改造: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                var n = [1, 2, 3, 4].randomGet();
                                if (n == 4) trigger.player.loseHp(4);
                                if (n == 3) trigger.player.loseHp(1);
                                if (n == 2) trigger.player.loseHp(2);
                                if (n == 1) trigger.player.loseHp(3);
                                var chat = ['燃尽一切吧!', '哈哈哈哈哈……'].randomGet();
                                player.say(chat);
                            },
                        },
                        '咆哮吧我的愤怒!': {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return event.player.isAlive() && event.player != player;
                            },
                            content() {
                                if (!trigger.player.hasSkill('fengyin')) {
                                    trigger.player.addTempSkill('fengyin', { player: 'phaseAfter' });
                                }
                            },
                        },
                        龙之魔女: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return !player.storage.龙之魔女;
                            },
                            content() {
                                player.storage.龙之魔女 = true;
                                player.say('出来吧…我的仆从!');
                                var pos = 4;
                                var fellow = game.addFellow(pos, '飞龙', 'zoominanim');
                                fellow.style.left = 'calc(50% - 250px)';
                                fellow.style.top = 'calc(50% - 25px)';
                                fellow.classList.add('minskin');
                                fellow.side = player.side;
                                fellow.identity = player.identity;
                                if (fellow.identity == 'zhu') fellow.identity = 'zhong';
                                fellow.setIdentity('龙');
                                fellow.draw(fellow.maxHp);
                                fellow.node.identity.dataset.color = fellow.identity;
                                var fellow1 = game.addFellow(pos, '飞龙', 'zoominanim');
                                fellow1.style.left = 'calc(50% - 100px)';
                                fellow1.style.top = 'calc(50% - 25px)';
                                fellow1.classList.add('minskin');
                                fellow1.side = player.side;
                                fellow1.identity = player.identity;
                                if (fellow1.identity == 'zhu') fellow1.identity = 'zhong';
                                fellow1.setIdentity('龙');
                                fellow1.draw(fellow1.maxHp);
                                fellow1.node.identity.dataset.color = fellow1.identity;
                                var fellow2 = game.addFellow(pos, '飞龙', 'zoominanim');
                                fellow2.style.left = 'calc(50% - -50px)';
                                fellow2.style.top = 'calc(50% - 25px)';
                                fellow2.classList.add('minskin');
                                fellow2.side = player.side;
                                fellow2.identity = player.identity;
                                if (fellow2.identity == 'zhu') fellow2.identity = 'zhong';
                                fellow2.setIdentity('龙');
                                fellow2.draw(fellow2.maxHp);
                                fellow2.node.identity.dataset.color = fellow2.identity;
                                var fellow3 = game.addFellow(pos, '飞龙', 'zoominanim');
                                fellow3.style.left = 'calc(50% - -200px)';
                                fellow3.style.top = 'calc(50% - 25px)';
                                fellow3.classList.add('minskin');
                                fellow3.side = player.side;
                                fellow3.identity = player.identity;
                                if (fellow3.identity == 'zhu') fellow3.identity = 'zhong';
                                fellow3.setIdentity('龙');
                                fellow3.draw(fellow.maxHp);
                                fellow3.node.identity.dataset.color = fellow3.identity;
                                fellow.storage.xm_fs = true;
                                fellow1.storage.xm_fs = true;
                                fellow2.storage.xm_fs = true;
                                fellow3.storage.xm_fs = true;
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        飞龙: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 100;
                            },
                            content() {
                                player.init('飞龙');
                                player.update();
                                ui.clear();
                            },
                        },
                        龙息: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            forced: true,
                            content() {
                                trigger.num *= 3;
                                player.say('吼………………!!!');
                            },
                        },
                        脑残光环: {
                            nobracket: true,
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            content() {
                                for (var i of game.players) {
                                    if (i != player) {
                                        i.mark('封', {
                                            name: '脑残光环',
                                            content: '确认过的眼神,你是对的人……  ps:四斋蒸鹅心',
                                        });
                                    }
                                }
                            },
                        },
                        人肉炸弹: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                event.target = game.filterPlayer().randomGet(player);
                                if (!event.target) {
                                    event.finish();
                                    return;
                                }
                                player.line(event.target, 'fire');
                                ('step 2');
                                event.target.damage('fire');
                            },
                        },
                        炸弹植入: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                trigger.player.addSkill('血肉炸弹');
                                player.say('');
                            },
                        },
                        血肉炸弹: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 100;
                            },
                            content() {
                                player.init('黑光炸弹');
                                player.update();
                                ui.clear();
                            },
                        },
                        亡灵天灾: {
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (game.dead.length == 0 || player.storage.soniaflag == true) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var efflist = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    efflist.push(game.dead[i]);
                                    player.line(game.dead[i], 'green');
                                }
                                var myid = player.identity;
                                if (player.identity == 'zhu') myid = 'zhong';
                                for (var i = 0; i < efflist.length; i++) {
                                    efflist[i].revive();
                                    efflist[i].identity = myid;
                                    efflist[i].setIdentity();
                                }
                                if (player.identity == 'zhu') {
                                    player.storage.soniaflag = true;
                                    player.hp = 0;
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                            },
                        },
                        一起蹲防: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '你可以弃置一张牌,并令一名角色翻面,自己同时翻面.',
                            filter(event, player) {
                                return player.num('h') > 0 && !player.isTurnedOver();
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return !target.isTurnedOver();
                            },
                            filterCard: true,
                            content() {
                                target.turnOver();
                                player.turnOver();
                            },
                            ai: {
                                order: 9,
                                expose: 0.5,
                                result: {
                                    player(player, target) {
                                        return -get.attitude(player, target);
                                    },
                                },
                            },
                        },
                        怀中抱妹杀: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (!target.isTurnedOver()) return false;
                                return target.sex == 'female';
                            },
                            content() {
                                'step 0';
                                target.die();
                                ('step 1');
                                if (!player.isTurnedOver()) {
                                    player.turnOver();
                                }
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        lm: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return player.isTurnedOver();
                            },
                            forced: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        stdm: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return event.player.isAlive() && event.player != player;
                            },
                            content() {
                                if (!trigger.player.hasSkill('fengyin')) {
                                    trigger.player.addTempSkill('fengyin', { player: 'phaseAfter' });
                                }
                            },
                        },
                        弹丸论破: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (card.name == 'sha') return false;
                                },
                                targetInRange(card, player, target, now) {
                                    return true;
                                },
                                maxHandcard(player) {
                                    return Infinity;
                                },
                                selectTarget(card, player, range) {
                                    var type = get.type(card);
                                    if (type != 'delay' && Array.isArray(range) && range[1] == 1) range[1] = range[1] + 1;
                                },
                            },
                        },
                        STDM: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            _priority: -99,
                            content() {
                                ui.clear();
                                if (player.isLinked()) player.link();
                                if (player.isTurnedOver()) player.turnOver();
                                const evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                                for (var i of game.players) {
                                    for (var j in i.tempSkills) {
                                        i.removeSkill(j);
                                    }
                                    i.in(true);
                                }
                            },
                        },
                        同化疫苗: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            _priority: -99,
                            content() {
                                ui.clear();
                                if (player.isLinked()) player.link();
                                if (player.isTurnedOver()) player.turnOver();
                                const evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                                for (var i of game.players) {
                                    for (var j in i.tempSkills) {
                                        i.removeSkill(j);
                                    }
                                    i.in(true);
                                }
                            },
                        },
                        幻想杀手: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp >= 1;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp == player.hp;
                            },
                        },
                        矢量操控: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            mark: true,
                            forced: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                trigger.player.qdie(player);
                                player.say('此地……只允许一方通行!');
                            },
                        },
                        yftx: {
                            nobracket: true,
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            filter(event, player) {
                                return event.source && event.source.isAlive() && event.source != player;
                            },
                            content() {
                                trigger.source.loseMaxHp(trigger.source.hp);
                            },
                            ai: {
                                threaten: 1.5,
                                expose: 0.1,
                            },
                        },
                        st: {
                            nobracket: true,
                            trigger: {
                                player: ['loseMaxHpBefore'],
                            },
                            forced: true,
                            filter(player) {
                                return player.Hujia != 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        cya2: {
                            nobracket: true,
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            _priority: 333,
                            popup: false,
                            silent: true,
                            content() {
                                var handcards1, handcards2, judges, equips, viewAs, i, j;
                                player.storage.SE_qiulao = [];
                                player.storage.SE_qiulao2 = false;
                                var table = document.createElement('table');
                                var tr, td, str, st;
                                for (var i of game.players) {
                                    viewAs = [];
                                    handcards1 = [];
                                    handcards2 = [];
                                    judges = [];
                                    equips = [];
                                    for (j = 0; j < i.node.handcards1.childNodes.length; j++) handcards1.push(i.node.handcards1.childNodes[j]);
                                    for (j = 0; j < i.node.handcards2.childNodes.length; j++) handcards2.push(i.node.handcards2.childNodes[j]);
                                    for (j = 0; j < i.node.judges.childNodes.length; j++) {
                                        viewAs.push(i.node.judges.childNodes[j].viewAs);
                                        judges.push(i.node.judges.childNodes[j]);
                                    }
                                    for (j = 0; j < i.node.equips.childNodes.length; j++) equips.push(i.node.equips.childNodes[j]);
                                    tr = document.createElement('tr');
                                    tr.style.verticalAlign = 'top';
                                    table.appendChild(tr);
                                    td = document.createElement('td');
                                    td.innerHTML = get.translation(i);
                                    tr.appendChild(td);
                                    td = document.createElement('td');
                                    td.innerHTML = handcards1.length + handcards2.length;
                                    tr.appendChild(td);
                                    str = '';
                                    if (equips.length + judges.length) {
                                        if (equips.length) {
                                            str += get.translation(equips);
                                            if (judges.length) {
                                                str += '、';
                                            }
                                        }
                                        if (judges.length) {
                                            str += get.translation(judges, 'viewAs');
                                        }
                                    } else {
                                        str = '';
                                    }
                                    td = document.createElement('td');
                                    td.innerHTML = str;
                                    tr.appendChild(td);
                                    player.storage.SE_qiulao.push({
                                        player: i,
                                        handcards1: handcards1,
                                        handcards2: handcards2,
                                        judges: judges,
                                        equips: equips,
                                        viewAs: viewAs,
                                        value: handcards1.length + handcards2.length + equips.length - judges.length,
                                    });
                                }
                                table.firstChild.firstChild.style.width = '85px';
                                table.firstChild.childNodes[1].style.width = '48px';
                                player.storage.SE_qiulao3 = '未发动';
                            },
                        },
                        cya: {
                            intro: {
                                content(storage, player) {
                                    if (true) {
                                        return player.storage.SE_qiulao3;
                                    }
                                },
                            },
                            audio: 'ext:动漫包/audio:true',
                            trigger: {
                                player: 'dieBefore',
                            },
                            filter(event, player) {
                                if (player.storage.SE_qiulao2) return false;
                                if (player.storage.SE_qiulao) return true;
                                return false;
                            },
                            check(event, player) {
                                player.hp <= 0;
                            },
                            init(player) {
                                player.storage.SE_qiulao4 = 0;
                            },
                            content() {
                                'step 0';
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                event.player.storage.SE_qiulao4++;
                                if (game.dead.length) {
                                    while (game.dead.length) {
                                        game.dead[0].revive();
                                    }
                                }
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (i.hp < i.maxHp) i.hp = i.maxHp;
                                    i.update();
                                    var chat = ['还不能倒下……', '不…还不能倒下……', '我不甘心…', '到此为止了吗……', '不能放弃啊……'].randomGet();
                                    player.say(chat);
                                }
                                ('step 2');
                                ('step 3');
                                ui.window.style.transition = 'all 0.5s';
                                ui.window.classList.add('zoomout3');
                                ui.window.delete();
                                ui.window.hide();
                                game.addVideo('skill', event.player, 'cya');
                                ('step 4');
                                var storage = event.player.storage.SE_qiulao;
                                var player, frag;
                                var i, j;
                                for (var i = 0; i < storage.length; i++) {
                                    if (game.players.includes(storage[i].player)) {
                                        player = storage[i].player;
                                        while (player.node.handcards1.childNodes.length) ui.discardPile.appendChild(player.node.handcards1.firstChild);
                                        while (player.node.handcards2.childNodes.length) ui.discardPile.appendChild(player.node.handcards2.firstChild);
                                        while (player.node.judges.childNodes.length) ui.discardPile.appendChild(player.node.judges.firstChild);
                                        while (player.node.equips.childNodes.length) ui.discardPile.appendChild(player.node.equips.firstChild);
                                    }
                                }
                                for (var i = 0; i < storage.length; i++) {
                                    if (game.players.includes(storage[i].player)) {
                                        player = storage[i].player;
                                        for (j = 0; j < storage[i].handcards1.length; j++) {
                                            if (storage[i].handcards1[j].parentNode == ui.discardPile || storage[i].handcards1[j].parentNode == ui.cardPile) player.node.handcards1.appendChild(storage[i].handcards1[j]);
                                        }
                                        for (j = 0; j < storage[i].handcards2.length; j++) {
                                            if (storage[i].handcards2[j].parentNode == ui.discardPile || storage[i].handcards2[j].parentNode == ui.cardPile) player.node.handcards2.appendChild(storage[i].handcards2[j]);
                                        }
                                        for (j = 0; j < storage[i].equips.length; j++) {
                                            if (storage[i].equips[j].parentNode == ui.discardPile || storage[i].equips[j].parentNode == ui.cardPile) player.node.equips.appendChild(storage[i].equips[j]);
                                        }
                                        for (j = 0; j < storage[i].judges.length; j++) {
                                            if (storage[i].judges[j].parentNode == ui.discardPile || storage[i].judges[j].parentNode == ui.cardPile) {
                                                storage[i].judges[j].viewAs = storage[i].viewAs[j];
                                                player.node.judges.appendChild(storage[i].judges[j]);
                                            }
                                        }
                                        player.update();
                                    }
                                }
                                ui.window.classList.remove('zoomout3');
                                ui.window.classList.add('zoomin3');
                                document.body.appendChild(ui.window);
                                var data = {};
                                for (var i of game.players) {
                                    data[i.dataset.position] = {
                                        h: get.cardsInfo(i.get('h')),
                                        e: get.cardsInfo(i.get('e')),
                                        j: get.cardsInfo(i.get('j')),
                                    };
                                }
                                game.addVideo('skill', event.player, ['cya', data]);
                                ('step 5');
                                ui.window.show();
                                ui.window.classList.remove('zoomin3');
                                setTimeout(function () {
                                    ui.window.style.transition = '';
                                    game.resume();
                                }, 500);
                                event.player.storage.SE_qiulao3 = '已发动' + event.player.storage.SE_qiulao4 + '次';
                                game.pause();
                                ('step 6');
                                var player = event.player;
                                if (player.hp < player.maxHp) player.hp = player.maxHp;
                                player.update();
                                ui.control.innerHTML = '';
                                ui.discardPile.innerHTML = '';
                            },
                            group: ['cya2'],
                        },
                        主神: {
                            nobracket: true,
                            audio: 2,//QQQ
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            _priority: 100,
                            content() {
                                'step 0';
                                if (lib.config.mode == 'guozhan' && get.config('guozhan_mode') != 'mingjiang') {
                                    for (var i of game.players) {
                                        i.showCharacter(2);
                                    }
                                } else {
                                    event.goto(1);
                                }
                                ('step 1');
                                var names = [];
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    if (i == player) continue;
                                    if (i.name && !i.classList.contains('unseen')) names.add(i.name);
                                    if (i.name1 && !i.classList.contains('unseen')) names.add(i.name1);
                                    if (i.name2 && !i.classList.contains('unseen2')) names.add(i.name2);
                                }
                                for (var i = 0; i < names.length; i++) {
                                    var info = lib.character[names[i]];
                                    if (info) {
                                        var skills = info[3];
                                        for (var j = 0; j < skills.length; j++) {
                                            player.addSkill(skills[j]);
                                        }
                                    }
                                }
                                player.maxHp += game.players.length * 2;
                                player.hp = player.maxHp;
                                player.update();
                                ui.clear();
                                game.zhu = player;
                                player.identity = 'zhu';
                                player.setIdentity('神');
                                player.node.identity.dataset.color = 'zhu';
                                player.identityShown = true;
                                var players = get.players(false, true);
                                for (var i of players) {
                                    if (i != player) {
                                        i.identity = 'fan';
                                        i.setIdentity('人');
                                        i.identityShown = true;
                                    }
                                }
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (i.name) {
                                        i.disabledSkills.zhushen0 = lib.character[i.name][3];
                                    }
                                    if (i.name1) {
                                        i.disabledSkills.zhushen1 = lib.character[i.name1][3];
                                    }
                                    if (i.name2) {
                                        i.disabledSkills.zhushen2 = lib.character[i.name2][3];
                                    }
                                }
                                player.draw(4);
                                player.removeSkill('SE_zhushen');
                                player.phase('nodelay');
                            },
                        },
                        轮回空间: {
                            nobracket: true,
                            audio: 'lunhuishijie',
                            trigger: {
                                global: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.player.maxHp < 1) return false;
                                return event.player.identity != 'zhong';
                            },
                            content() {
                                'step 0';
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                trigger.player.loseMaxHp();
                                trigger.player.hp = trigger.player.maxHp;
                                trigger.player.draw(2);
                                trigger.player.identity = 'zhong';
                                trigger.player.setIdentity('奴');
                                trigger.player.identityShown = true;
                            },
                            group: ['SE_lunhui2'],
                        },
                        SE_lunhui2: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return player.hp <= 4;
                            },
                            content() {
                                var names = [];
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    if (i == player) continue;
                                    if (i.name && !i.classList.contains('unseen')) names.add(i.name);
                                    if (i.name1 && !i.classList.contains('unseen')) names.add(i.name1);
                                    if (i.name2 && !i.classList.contains('unseen2')) names.add(i.name2);
                                }
                                for (var i = 0; i < names.length; i++) {
                                    var info = lib.character[names[i]];
                                    if (info) {
                                        var skills = info[3];
                                        for (var j = 0; j < skills.length; j++) {
                                            player.removeSkill(skills[j]);
                                        }
                                    }
                                }
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (i.name) {
                                        delete i.disabledSkills.zhushen0;
                                    }
                                    if (i.name1) {
                                        delete i.disabledSkills.zhushen1;
                                    }
                                    if (i.name2) {
                                        delete i.disabledSkills.zhushen2;
                                    }
                                }
                            },
                        },
                        SE_guiyu: {
                            nobracket: true,
                            mark: true,
                            init(player) {
                                player.storage.SE_guiyu = 3;
                            },
                            intro: {
                                content: 'turn',
                            },
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.SE_guiyu ? true : false;
                            },
                            content() {
                                if (player.storage.SE_guiyu > 1) {
                                    player.storage.SE_guiyu--;
                                    game.addVideo('storage', player, ['SE_guiyu', player.storage.SE_guiyu]);
                                    game.log(player, '剩余', player.storage.SE_guiyu, '个回合');
                                } else {
                                    player.removeSkill('SE_mingwang');
                                    player.die();
                                }
                            },
                        },
                        SE_mingwang: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.maxHp >= 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp = 0;
                            },
                        },
                        E_shujufenpei: {
                            audio: 'ext:动漫包:4',
                            enable: 'phaseUse',
                            usable: 1,
                            init(player) {
                                player.storage.E_shujufenpei = 0;
                            },
                            intro: {
                                content: 'mark',
                            },
                            createDialog(player, onlylist) {
                                var list = [];
                                var exclude = [];
                                for (var i = 0; i < arguments.length; i++) exclude.push(arguments[i]);
                                var skills2 = [];
                                var players = game.players.concat(game.dead);
                                for (var i in lib.character) {
                                    for (var j = 0; j < lib.character[i][3].length; j++) {
                                        skills2.add(lib.character[i][3][j]);
                                    }
                                }
                                for (var i of players) {
                                    if (i == player) continue;
                                    var skills = i.get('s').concat(i.hiddenSkills);
                                    for (j = 0; j < skills.length; j++) {
                                        if (skills2.includes(skills[j]) && !list.includes(skills[j])) {
                                            list.push(skills[j]);
                                        }
                                    }
                                }
                                if (onlylist) return list;
                                var dialog = ui.create.dialog();
                                dialog.add('请选择一项技能');
                                _status.event.list = list;
                                var clickItem = function () {
                                    _status.event._result = this.link;
                                    game.resume();
                                };
                                for (var i = 0; i < list.length; i++) {
                                    if (lib.translate[list[i] + '_info']) {
                                        var translation = get.translation(list[i])[0] + get.translation(list[i])[1];
                                        var item = dialog.add('<div class="popup" style="width:50%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                        item.firstChild.addEventListener('click', clickItem);
                                        item.firstChild.link = list[i];
                                    }
                                }
                                dialog.add(ui.create.div('.placeholder'));
                                return dialog;
                            },
                            content() {
                                'step 0';
                                event.result = function () {
                                    var num = Math.ceil(player.storage.E_shujufenpei / 2);
                                    if (player.storage.E_shujufenpei > 0) {
                                        var num = Math.ceil(player.storage.E_shujufenpei / 2);
                                        if (num > 0) {
                                            player.loseHp(num);
                                        }
                                        player.storage.E_shujufenpei = 0;
                                        player.unmarkSkill('E_shujufenpei');
                                    }
                                    while (ui.controls.length) {
                                        ui.controls[0].close();
                                    }
                                    while (ui.dialogs.length) {
                                        ui.dialogs[0].close();
                                    }
                                    ui.clear();
                                    game.resume();
                                    event.finish();
                                };
                                event.skillai = function (list) {
                                    if (_status.event.list.length == 0) return event.result();
                                    return _status.event.list.randomGet();
                                };
                                if (event.isMine()) {
                                    event.dialog = lib.skill.E_shujufenpei.createDialog(player);
                                    if (_status.event.list.length == 0) {
                                        return event.result();
                                    } else {
                                        event.control = ui.create.control('取消', event.result);
                                        game.pause();
                                    }
                                } else {
                                    var num = Math.ceil(player.storage.E_shujufenpei / 2);
                                    if (num >= player.hp - 1) {
                                        if (!player.num('h', 'tao') || !player.num('h', 'jiu')) return event.result();
                                        if (num >= player.hp + 1) return event.result();
                                        return (event._result = event.skillai(lib.skill.E_shujufenpei.createDialog(player, target, true)));
                                    } else {
                                        event._result = event.skillai(lib.skill.E_shujufenpei.createDialog(player, target, true));
                                    }
                                }
                                ('step 1');
                                if (!event.list.includes(result)) {
                                    event.finish();
                                } else {
                                    if (event.dialog) {
                                        event.dialog.close();
                                    }
                                    if (event.control) {
                                        event.control.close();
                                    }
                                    event.skill = result;
                                    player.chooseTarget(function (card, player, target) {
                                        return !target.skills.includes(event.skill);
                                    }, '请选择获得此技能的目标').ai = function (target) {
                                        if (player == target) return 10;
                                        return get.attitude(player, target);
                                    };
                                }
                                if (result.bool) {
                                    event.targets = result.targets;
                                    var players = game.players.concat(game.dead);
                                    for (var i of players) {
                                        if (i == player) continue;
                                        i.removeSkill(event.skill);
                                    }
                                    event.targets[0].addSkill(event.skill);
                                    if (!player.storage.E_shujufenpei) {
                                        player.markSkill('E_shujufenpei');
                                        player.storage.E_shujufenpei++;
                                        event.goto(0);
                                    } else {
                                        player.storage.E_shujufenpei++;
                                        event.goto(0);
                                    }
                                } else {
                                    event.goto(0);
                                }
                            },
                        },
                        SE_wanxing: {
                            nobracket: true,
                            audio: 'wanxing',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(function (card, player, target) {
                                    if (player == target) return false;
                                    if (player.num('h') < target.num('h')) return true;
                                }, '是否发动【万形】？').ai = function () {
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.storage.SE_wanxing = player;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (player.ai.shown < 0.5) {
                                    player.ai.shown = 0.5;
                                }
                                event.target.addSkill('SE_wanxing2');
                                event.target.storage.SE_wanxing2 = event.target.ai.shown;
                                game.players.remove(player);
                                game.dead.remove(player);
                                player.removed = true;
                            },
                            ai: {
                                threaten: 5,
                            },
                        },
                        SE_wanxing2: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseEnd', 'dieBefore'],
                            },
                            forced: true,
                            popup: false,
                            _priority: 10,
                            content() {
                                var source = player.storage.SE_wanxing;
                                player.ai.shown = player.storage.SE_wanxing2;
                                delete player.storage.SE_wanxing;
                                delete player.storage.SE_wanxing2;
                                if (source) {
                                    game.players.push(source);
                                    source.removed = false;
                                    source.update();
                                    ui.clear();
                                    delete source.removed;
                                    player.removeSkill('SE_wanxing2');
                                }
                            },
                        },
                        SE_mieshi: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            popup: false,
                            init(player) {
                                if (lib.config.mode == 'identity') {
                                    if (game.zhu != player) {
                                        player.identity = 'fan';
                                        player.setIdentity('反');
                                        player.node.identity.dataset.color = 'fan';
                                    }
                                }
                                player.node.name.dataset.nature = 'black';
                                player.storage.SE_mieshi = 0;
                            },
                            intro: {
                                content: 'mark',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                trigger.player.storage.mie2 = get.time();
                            },
                            group: ['SE_mieshi2', 'SE_mieshi3', 'SE_mieshi4'],
                        },
                        SE_mieshi4: {
                            nobracket: true,
                            audio: 'SE_mieshi',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 5,
                            content() {
                                player.storage.SE_mieshi++;
                                player.markSkill('SE_mieshi');
                                if (player.storage.SE_mieshi >= 5) {
                                    player.storage.SE_mieshi = 0;
                                    player.unmarkSkill('SE_mieshi');
                                    for (const npc of game.players) {
                                        if (npc == player) continue;
                                        npc.qdie(player);
                                    }
                                }
                            },
                            ai: {
                                threaten: 10,
                            },
                        },
                        SE_mieshi3: {
                            nobracket: true,
                            audio: 'SE_mieshi',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return typeof event.player.storage.mie == 'number' && event.player.storage.mie > 10000;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, 'thunder');
                                player.storage.SE_mieshi += Math.ceil(trigger.player.storage.mie / 10000);
                                player.markSkill('SE_mieshi');
                                if (player.storage.SE_mieshi >= 10) {
                                    player.storage.SE_mieshi = 0;
                                    player.unmarkSkill('SE_mieshi');
                                    for (var i of game.players) {
                                        if (i == player) continue;
                                        i.hp = 0;
                                        i.update();
                                        const next = game.createEvent('dying', false);
                                        next.player = i;
                                        next.reason = 'changeHp';
                                        next._trigger = trigger;
                                        next.setContent(lib.element.content.dying)
                                    }//QQQ
                                }
                                delete trigger.player.storage.mie;
                            },
                        },
                        SE_mieshi2: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            silent: true,
                            popup: false,
                            filter(event, player) {
                                return typeof event.player.storage.mie2 == 'number';
                            },
                            content() {
                                trigger.player.storage.mie = get.time() - trigger.player.storage.mie2;
                                delete trigger.player.storage.mie2;
                            },
                        },
                        摸鱼: {
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.num('h') < Math.min(3);
                            },
                            content() {
                                player.draw(Math.min(3) - player.num('h'));
                            },
                        },
                        网瘾少年: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.hp > 0;
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (lib.config.mode == 'boss') return true;
                                if (lib.config.mode == 'identity') {
                                    if (player.identity == 'zhu' && (event.player.identity == 'fan' || event.player.identity == 'nei')) return true;
                                    if (player.identity == 'fan' && (event.player.identity == 'zhu' || event.player.identity == 'zhong' || event.player.identity == 'nei')) return true;
                                    if (player.identity == 'nei') {
                                        if (game.players.length) {
                                            if (event.player.identity == 'fan' || event.player.identity == 'zhong') return true;
                                        }
                                        if (game.players.length == 0) {
                                            return true;
                                        }
                                    }
                                } else if (lib.config.mode == 'guozhan') {
                                    if (event.player.identity == 'unknown') return false;
                                    if (event.player.identity != player.identity) return true;
                                }
                                return att < 2;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.type(card) == 'basic') return 1;
                                    if (get.type(card) == 'delay') return 1.2;
                                    if (get.type(card) == 'equip') return -1;
                                    return 2;
                                });
                                ('step 1');
                                var num = player.num('he');
                                if (get.type(result.card) == 'basic') {
                                    trigger.player.damage('thunder', 1);
                                    player.draw(2);
                                }
                                if (get.type(result.card) == 'delay') {
                                    trigger.player.damage('thunder', 2);
                                    player.draw(1);
                                }
                                if (get.type(result.card) == 'equip') {
                                    trigger.player.damage('thunder', 1);
                                    player.discard(player.get('he'));
                                }
                                if (get.type(result.card) == 'trick') {
                                    trigger.player.damage('thunder', num);
                                    player.recover();
                                    player.gainMaxHp();
                                }
                            },
                        },
                        炎阳: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            forced: true,
                            content() {
                                trigger.num *= 10;
                                player.say('还不明白吗？白天我是无敌的……');
                            },
                        },
                        不死之身: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.maxHp >= 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp = 0;
                            },
                        },
                        饥饿: {
                            nobracket: true,
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.name != 'tao' && card.suit == 'heart' && _status.event.skill != '饥饿') return false;
                                },
                                cardUsable(card, player) {
                                    if (card.name != 'tao' && card.suit == 'heart' && _status.event.skill != '饥饿') return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.name != 'tao' && card.suit == 'heart' && _status.event.skill != '饥饿') return false;
                                },
                                cardSavable(card, player) {
                                    if (card.name != 'tao' && card.suit == 'heart' && _status.event.skill != '饥饿') return false;
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard: {
                                suit: 'heart',
                            },
                            popname: true,
                            viewAs: {
                                name: 'tao',
                                suit: 'heart',
                                number: 11,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'heart', number: 11, name: 'sha', cardid: '3575830263', clone: { name: 'sha', suit: 'heart', number: 11, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 234 }, timeout: 212, original: 'h' }],
                                isBeated: true,
                            },
                            filter(event, player) {
                                return player.num('h', { suit: 'heart' }) > 0;
                            },
                            check() {
                                return 1;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return player.num('h', { suit: 'heart' }) > 0;
                                },
                                save: true,
                                order: 4,
                                useful: -1,
                                value: -1,
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
                            group: ['饿……'],
                        },
                        '饿……': {
                            trigger: {
                                player: 'gainEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return Math.random() <= 2;
                            },
                            content() {
                                player.gainMaxHp();
                                player.recover();
                            },
                        },
                        亡灵公主: {
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: 'dieBefore',
                            },
                            nobracket: true,
                            forced: true,
                            _priority: 700000,
                            filter(event, player) {
                                return player.maxHp > 0;
                            },
                            content() {
                                ('step 0');
                                trigger.finish();
                                trigger.untrigger();
                                player.loseMaxHp()._triggered = null;
                                player.hp = player.maxHp._triggered = null;
                                ('step 1');
                                event.players = get.players(player);
                                ('step 2');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        player.line(current, 'fire');
                                        current.damage(current.maxHp)._triggered = null;
                                    }
                                    event.redo();
                                }
                            },
                        },
                        境界: {
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            nobracket: true,
                            _priority: 99,
                            forced: true,
                            marktext: '境界',
                            init(player) {
                                player.storage.境界 = 0;
                            },
                            intro: {
                                content: 'mark',
                            },
                            content() {
                                player.storage.境界++;
                                player.markSkill('境界');
                                for (var i = 0; i < player.node.marks.childNodes.length; i++) {
                                    if (player.node.marks.childNodes[i].name == '境界') {
                                        player.node.marks.childNodes[i].setBackground(player.name, 'character');
                                        player.node.marks.childNodes[i].innerHTML = '';
                                    }
                                }
                            },
                            group: ['境界_境界1', '境界_多与少的境界', '境界_粒与波的境界', '境界_隙间偷窥', '境界_时与秒的境界', '境界_有与无的境界'],
                            subSkill: {
                                境界1: {
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                                多与少的境界: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    content() {
                                        trigger.num = Math.min(4, player.hp);
                                    },
                                    ai: {
                                        threaten(player, target) {
                                            if (target.hp == target.maxHp) return 2;
                                        },
                                    },
                                },
                                粒与波的境界: {
                                    trigger: {
                                        player: ['phaseBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.境界 && player.storage.境界 >= 1;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('是否发动粒与波的境界？', function (card, player, target) {
                                                if (player == target) return false;
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                return get.damageEffect(target, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.line(result.targets[0], 'watermm');
                                            event.targets = result.targets[0];
                                            event.targets.damage()._triggered = null;
                                        }
                                    },
                                },
                                隙间偷窥: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    prompt(event, player) {
                                        var str = '';
                                        str += '是否隙间偷窥观看' + get.translation(event.player) + '的手牌？';
                                        return str;
                                    },
                                    check(event, player) {
                                        return 1;
                                    },
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        return event.player.num('h') && player.storage.境界 && player.storage.境界 >= 2;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.num('he')) {
                                            var str = '';
                                            str += '是否替换' + get.translation(trigger.player) + '的一张手牌？';
                                            player.chooseCardButton(str, trigger.player.get('h')).set('ai', function (button) {
                                                return get.value(button.link);
                                            });
                                        } else {
                                            player.viewCards('隙间', trigger.player.get('h'));
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            event.cards1 = result.links[0];
                                            player.chooseCard('请选择一张牌替换' + get.translation(event.cards1) + '这张牌', 'he', true).set('ai', function (card) {
                                                return -get.value(card);
                                            });
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            event.cards2 = result.cards[0];
                                            player.gain(event.cards1, trigger.player);
                                            trigger.player.$give(1, player);
                                            if (get.position(event.cards2) == 'h') player.$give(1, trigger.player);
                                            else player.$give(event.cards2, trigger.player);
                                            trigger.player.gain(event.cards2, player);
                                        }
                                    },
                                    ai: {
                                        expose: 0.2,
                                    },
                                },
                                时与秒的境界: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return player.storage.境界 && player.storage.境界 >= 3;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.境界--;
                                        player.markSkill('境界');
                                        for (var i = 0; i < player.node.marks.childNodes.length; i++) {
                                            if (player.node.marks.childNodes[i].name == '境界') {
                                                player.node.marks.childNodes[i].setBackground(player.name, 'character');
                                                player.node.marks.childNodes[i].innerHTML = '';
                                            }
                                        }
                                        ('step 1');
                                        for (var i of game.players) {
                                            if (i == player) continue;
                                            i.skip('phaseDraw');
                                            i.skip('phaseUse');
                                        }
                                    },
                                    ai: {
                                        order: 8,
                                        result: {
                                            player(player) {
                                                return 0.8;
                                            },
                                        },
                                    },
                                },
                                有与无的境界: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    content() {
                                        for (var i of game.players) {
                                            if (i == player) continue;
                                            i.enableSkill('境界');
                                        }
                                        if (player.storage.境界 && player.storage.境界 >= 4) {
                                            for (var i of game.players) {
                                                if (i == player) continue;
                                                if (i == _status.currentPhase) continue;
                                                var skills = i.getSkills(false, false);
                                                i.disableSkill('境界', skills);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        炎阳的加护: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            audio: 'ext:动漫包/audio:2',
                            _priority: -9997,
                            content() {
                                trigger.num -= trigger.num * 0.5;
                            },
                        },
                        人工智障: {
                            trigger: {
                                player: 'gameDrawAfter',
                            },
                            forced: true,
                            content() {
                                player.storage.人工智障 = true;
                                player.say('花Q!');
                                var pos = 1;
                                var fellow = game.addFellow(pos, 'ai', 'zoominanim');
                                fellow.style.left = 'calc(50% - 250px)';
                                fellow.style.top = 'calc(50% - 25px)';
                                fellow.classList.add('minskin');
                                fellow.side = player.side;
                                fellow.identity = player.identity;
                                if (fellow.identity == 'zhu') fellow.identity = 'zhong';
                                fellow.setIdentity('爱');
                                fellow.draw(fellow.maxHp);
                                fellow.node.identity.dataset.color = fellow.identity;
                                fellow.storage.xm_fs = true;
                            },
                        },
                        变身女神埋: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:4',
                            enable: 'phaseUse',
                            prompt: '失去一点体力并摸两张牌',
                            content() {
                                player.init('外');
                                player.update();
                                ui.clear();
                            },
                        },
                        变身小埋: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:4',
                            enable: 'phaseUse',
                            prompt: '失去一点体力并摸两张牌',
                            content() {
                                player.init('宅');
                                player.update();
                                ui.clear();
                            },
                        },
                        宅生活: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:4',
                            enable: 'phaseUse',
                            prompt: '失去一点体力并摸两张牌',
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.draw(2);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp - 1) return -1;
                                        if (player.hp < 3) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        打野: {
                            nobracket: true,
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        毛泽东: {
                            mode: ['identity'],
                            trigger: {
                                global: 'gameStart',
                            },
                            nobracket: true,
                            forced: true,
                            _priority: 70000,
                            filter(event, player) {
                                return player.identity == 'zhu';
                            },
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        current.identity = 'fan';
                                        current.setIdentity('fan');
                                        current.identityShown = true;
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                threaten: 8.1,
                            },
                        },
                        se_cibei: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            _priority: 100,
                            filter(event, player) {
                                return event.player != player && player.hp < player.maxHp && player.num('h') > 2;
                            },
                            check(event, player) {
                                var cards = player.get('h');
                                if (cards.length <= 4) {
                                    if (Array.isArray(cards)) for (var i of cards) {
                                        if (i.name == 'shan' || i.name == 'tao') return false;
                                    }
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                num = player.num('h') - 1;
                                player.chooseToDiscard(num, true);
                                ('step 1');
                                trigger.player.addSkill('se_cibei3');
                            },
                            group: ['se_cibei2'],
                        },
                        se_cibei2: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            _priority: 100,
                            content() {
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (!i.name || !lib.character[i.name]) continue;
                                    var skills = lib.character[i.name][3];
                                    for (var j = 0; j < skills.length; j++) {
                                        if (!lib.skill[skills[j]].forceunique) {
                                            i.removeSkill('se_cibei3');
                                        }
                                    }
                                }
                            },
                        },
                        se_cibei3: {
                            mod: {
                                cardEnabled() {
                                    return false;
                                },
                                cardUsable() {
                                    return false;
                                },
                                cardRespondable() {
                                    return false;
                                },
                                cardSavable() {
                                    return false;
                                },
                                maxHandcard(player, current) {
                                    return 1;
                                },
                                targetInRange() {
                                    return false;
                                },
                                selectTarget() {
                                    return [0, 0];
                                },
                            },
                        },
                        救世的祈愿: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 100;
                            },
                            content() {
                                player.init('伪太虚之神');
                                player.update();
                                ui.clear();
                            },
                        },
                        SE_yinguo: {
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            _priority: 100,
                            filter(event, player) {
                                if (event.parent.name == 'SE_yinguo') return false;
                                if (!event.targets || !event.card) return false;
                                if (event.card.name == 'wuxie') return false;
                                if (event.targets.length <= 1 && event.targets.includes(player)) return false;
                                if (get.type(event.card) == 'trick' || get.type(event.card) == 'delay') return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                var list = [];
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    if (player.canUse('wanjian', trigger.targets[i]) && trigger.targets[i] != player) {
                                        list.push(trigger.targets[i]);
                                    }
                                }
                                player.addTempSkill('unequip', 'phaseAfter');
                                player.useCard({ name: 'wanjian' }, list);
                            },
                            group: ['SE_yinguo2', 'SE_yinguo3', 'SE_yinguo4'],
                        },
                        SE_yinguo2: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            popup: false,
                            _priority: 100,
                            filter(event, player) {
                                return event.source != player;
                            },
                            content() {
                                trigger.source = undefined;
                            },
                        },
                        SE_yinguo3: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            popup: false,
                            _priority: 100,
                            content() {
                                trigger.source = undefined;
                            },
                        },
                        SE_yinguo4: {
                            mod: {
                                cardUsable() {
                                    return Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                                selectTarget(card, player, range) {
                                    if (get.type(card) == 'basic' || get.type(card) == 'trick') range[1] = player.hp + 1;
                                },
                            },
                        },
                        魔力: {
                            audio: 'ext:动漫包/audio:4',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            init(player) {
                                player.storage.魔力 = 0;
                            },
                            intro: {
                                content: 'mark',
                            },
                            _priority: null,
                            marktext: '魔力',
                            content() {
                                player.storage.魔力++;
                                player.markSkill('魔力');
                                if (player.storage.魔力 >= 7) {
                                    if (player == game.me) {
                                        game.forceOver(true);
                                    } else {
                                        game.forceOver(false);
                                    }
                                }
                            },
                        },
                        十万红白: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            content() {
                                game.changeCoin(1000);
                                player.recover();
                                var chat = ['我是作为人类的守护者降生的', '构建出璀璨的文明也是王的职责', '回到人间后,我看着自己取得的成果,满怀欣喜的露出了笑容', '我是王,所以为自己做决定,走自己所认定的王道'].randomGet();
                                player.say(chat);
                            },
                        },
                        援交: {
                            audio: 'ext:动漫包/audio:4',
                            nobracket: true,
                            enable: 'phaseUse',
                            prompt: '失去一点体力并摸两张牌',
                            content() {
                                'step 0';
                                player.loseHp(97);
                                ('step 1');
                                game.changeCoin(100000);
                                player.recover();
                                var chat = ['给我1万可以暧床!', '十万任意s一次!', '没钱!没钱你过来干什么!', '十万!……给我十万我就投降!'].randomGet();
                                player.say(chat);
                            },
                        },
                        节操回归: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 1;
                            },
                            content() {
                                'step 0';
                                player.init('氪金少女');
                                player.update();
                                ui.clear();
                                ('step 1');
                                const evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                                player.phase('nodelay');
                            },
                        },
                        氪崩3: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:4',
                            enable: 'phaseUse',
                            prompt: '来一发十连',
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
                                player.addSkill(link);
                                player.mark(link, {
                                    name: get.translation(link),
                                    content: lib.translate[link + '_info'],
                                });
                                game.log(player, '获得技能', '【' + get.translation(link) + '】');
                                ('step 1');
                                game.changeCoin(-50000);
                                player.recover();
                                var chat = ['氪!', '不氪金怎么变强!', '再氪5万我会更强!'].randomGet();
                                player.say(chat);
                            },
                        },
                        氪非狗: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:4',
                            enable: 'phaseUse',
                            prompt: '来一发十连',
                            content() {
                                'step 0';
                                player.draw(10);
                                ('step 1');
                                game.changeCoin(-10000);
                                player.recover();
                                var chat = ['氪!', '不氪金怎么变强!', '再氪一万我会更强!'].randomGet();
                                player.say(chat);
                            },
                        },
                        梦想封印: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '八云紫';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                target.clearSkills();
                                target.damage(999, 'fire');
                                player.say('啊啊啊啊!紫老太婆你又偷我塞钱箱!快食我梦想封印啦!');
                            },
                            contentAfter() {
                                game.changeCoin(100000);
                            },
                        },
                        关于取下敌人性命这件事情: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '脚盆鸡';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                target.damage(999, 'fire');
                            },
                            contentAfter() {
                                player.recover();
                                player.say('也从不失约？');
                            },
                        },
                        关于八云紫: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '八云紫';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                target.damage(999, 'fire');
                            },
                            contentAfter() {
                                player.recover();
                                var chat = ['紫妈四万八千岁,对……额…下一句忘了……', '劳资就是是叫紫妈咋滴!难道她还能隙间我不成!'].randomGet();
                                player.say(chat);
                            },
                        },
                        关于柯南: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '柯南';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                target.damage(99, 'fire');
                            },
                            contentAfter() {
                                player.recover();
                                var chat = ['一只柯南罢了,上啊!赶快搞死他!', '说实话,你到底实验了多少次才成功的？'].randomGet();
                                player.say(chat);
                            },
                        },
                        关于红白: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '氪金少女';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                target.damage(99, 'fire');
                            },
                            contentAfter() {
                                player.recover();
                                var chat = ['这个败家的娘们……', '金币不保啊!', '所以说你开富甲天下这个扩展了?'].randomGet();
                                player.say(chat);
                            },
                        },
                        关于援交: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '援交少女';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                target.damage(999, 'fire');
                            },
                            contentAfter() {
                                player.recover();
                                var chat = ['可怜的孩子……', '看来神社又没钱了……', '说实话,你说不是靠她刷过金币?'].randomGet();
                                player.say(chat);
                            },
                        },
                        关于后宫: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '龙宫礼奈';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                target.damage(999, 'fire');
                            },
                            contentAfter() {
                                player.recover();
                                var chat = ['好船和柴刀直接选一个吧!骚年!', '愿诚哥在天堂里没有柴刀……'].randomGet();
                                player.say(chat);
                            },
                        },
                        认真: {
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return !player.storage.认真;
                            },
                            forced: true,
                            _priority: 100,
                            content() {
                                'step 0';
                                player.storage.认真 = true;
                                player.maxHp == Infinity;
                                player.changeHujia(Infinity);
                                ('step 1');
                                player.hp = player.maxHp;
                                player.addTempSkill('qianxing', { player: 'phaseBegin' });
                                player.addSkill('cya');
                                player.addSkill('星星之火');
                            },
                        },
                        绝望哭嚎: {
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                for (var i of game.players) {
                                    if (i != player) {
                                        i.disableSkill('绝望哭嚎', i.skills);
                                        i.mark('疯', {
                                            name: '绝望哭嚎',
                                            content: '倾斜所见世间的阴暗萧条,你可听闻……厉鬼在哭嚎？',
                                        });
                                    }
                                }
                            },
                        },
                        关于弹丸: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == 'kamukura';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                'step 0';
                                player.init('kamukura');
                            },
                            contentAfter() {
                                player.recover();
                                var chat = ['须知,顺逆,皆天定!我自一气化三清!', '来互相伤害吧!'].randomGet();
                                player.say(chat);
                            },
                        },
                        SE_mosha: {
                            nobracket: true,
                            audio: 2,//QQQ
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (game.players.length + game.dead.length >= 3) return true;
                                return false;
                            },
                            selectTarget: [1, 1],
                            filterTarget(card, player, target) {
                                return target !== player;
                            },
                            content() {
                                game.removePlayer(target);
                                player.recover();
                            },
                            group: ['SE_mosha2'],
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        return get.attitude(target, player);
                                    },
                                },
                            },
                            expose: 0.4,
                        },
                        SE_mosha2: {},
                        moon_88_2: {
                            nobracket: true,
                            filter(event, player) {
                                return event.player != player && event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick');
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) {
                                    return false;
                                }
                                if (get.tag(event.card, 'respondSha')) {
                                    if (player.num('h', { name: 'sha' }) == 0) {
                                        return true;
                                    }
                                } else if (get.tag(event.card, 'respondShan')) {
                                    if (player.num('h', { name: 'shan' }) == 0) {
                                        return true;
                                    }
                                } else if (get.tag(event.card, 'damage')) {
                                    if (player.num('h') < 2) return true;
                                } else if (event.card.name == 'shunshou' && player.hp > 2) {
                                    return true;
                                }
                                return false;
                            },
                            _priority: 10,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                trigger.player.loseHp();
                                ('step 1');
                                trigger.untrigger();
                                trigger.finish();
                            },
                            ai: {
                                expose: 0.3,
                            },
                            group: 'moon_88_2_hp',
                            subSkill: {
                                hp: {
                                    trigger: {
                                        player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore'],
                                    },
                                    forced: true,
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                        player.hp--;
                                        if (player.num('h')) player.hp++;
                                    },
                                },
                            },
                        },
                        炮击: {
                            nobracket: true,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'juedou',
                                suit: 'heart',
                                number: 1,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'heart', number: 1, name: 'taoyuan', cardid: '4617724283', clone: { name: 'taoyuan', suit: 'heart', number: 1, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true }, timeout: 217, original: 'h' }],
                            },
                            prompt: '将一张红色牌当决斗使用或打出',
                            ai: {
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 4.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target) {
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                        },
                        全方位打击: {
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'nanman',
                                suit: 'spade',
                                number: 5,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 5, name: 'jueying', cardid: '9420360276', clone: { name: 'jueying', suit: 'spade', number: 5, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, fixed: true, _transitionEnded: true, timeout: 1968 }, original: 'h' }],
                            },
                            prompt: '将一张红黑色牌当南蛮使用或打出',
                            ai: {
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 4.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target) {
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                            },
                        },
                        w: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 1;
                            },
                            content() {
                                player.init('wo');
                                var chat = ['你们击杀小企业和我凛音有什么关系.', '我不是,我没有,喜欢小企业的请右转去隔壁镇守府.'].randomGet();
                                player.say(chat);
                                player.update();
                                ui.clear();
                            },
                        },
                        np: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.np = 0;
                            },
                            filter(event, player) {
                                return player.storage.np <= 9;
                            },
                            content() {
                                player.storage.np += Math.abs(trigger.num);
                                if (player.storage.np) {
                                    player.markSkill('np');
                                }
                                game.addVideo('storage', player, ['np', player.storage.np]);
                            },
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkill('jueqing')) return [1, -1.5];
                                            if (player.hp >= 4) return [1, 1.5];
                                            if (target.hp == 3) return [1, 1];
                                            if (target.hp == 2) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        流星一条: {
                            nobracket: true,
                            enable: 'phaseUse',
                            _priority: 101,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return player.storage.np > 9;
                            },
                            content() {
                                'step 0';
                                player.storage.np = 0;
                                player.unmarkSkill('np');
                                ('step 1');
                                target.damage(30);
                                var chat = ['让你们见识一下流星!', '如阳至圣的吾主啊!赐下万般截智、尊严、力量的光辉的吾主啊!敬请明鉴我这真心、我这信念、我这力之所及吧!请看吧、星辰与月亮的缔造者啊!见证我这举止、我这终局、我将成就的神圣献身吧!(Spenta.Armaiti )---流星一条(Stella)! ! !'].randomGet();
                                player.say(chat);
                                ('step 2');
                                player.qdie(player);
                                player.addSkill('弓箭制作');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player, target) {
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (!player.get('e', '1')) {
                                            if (player.hp < 2) return 0;
                                            if (player.hp == 2 && target.hp >= 2) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        开挂: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            _priority: -10,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zhiji) return false;
                                return player.countCards('h') == 0;
                            },
                            content() {
                                'step 0';
                                player.uninit;
                                player.init(player.name, '表游戏');
                            },
                        },
                        口胡: {
                            nobracket: true,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                return get.color(card) == 'black', 'red' ? 1 : -1;
                            },
                            position: 'he',
                            viewAs: {
                                name: '决斗',
                                suit: 'spade',
                                number: 8,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 8, name: 'sha', nature: 'thunder', cardid: '6257225362', _transform: 'translateX(112px)', clone: { name: 'sha', suit: 'spade', number: 8, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 1608 }, timeout: 1585, original: 'h' }],
                            },
                            prompt: '将一张红色牌或者黑色牌当决斗使用或打出',
                            ai: {
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 4.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target) {
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                        },
                        地图炮: {
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'nanman',
                                suit: 'club',
                                number: 1,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'club', number: 1, name: 'zhuge', cardid: '4663459250', _transform: 'translateX(112px)', clone: { name: 'zhuge', suit: 'club', number: 1, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 214 }, timeout: 200, original: 'h' }],
                            },
                            prompt: '将一张红黑色牌当南蛮使用或打出',
                            ai: {
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 4.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target) {
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                            },
                        },
                        代打: {
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.num('h') < Math.min(3);
                            },
                            content() {
                                player.draw(Math.min(3) - player.num('h'));
                            },
                        },
                        身躯由剑所成: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.recover();
                                player.say('I am the bone of my sword ');
                                ui.backgroundMusic.src = 'extension/动漫包/正义的伙伴.mp3';
                                player.removeSkill('身躯由剑所成');
                                player.addSkill('血流为铁,心为琉璃');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        '血流为铁,心为琉璃': {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.recover();
                                player.say('Steel is my body and fire is my blood');
                                player.removeSkill('血流为铁,心为琉璃');
                                player.addSkill('跨越无数战场而不败');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        跨越无数战场而不败: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.recover();
                                player.say('I have created over a thousand blades');
                                player.removeSkill('跨越无数战场而不败');
                                player.addSkill('未曾尝得一败');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        未曾尝得一败: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.recover();
                                player.say('Unaware of beginning');
                                player.removeSkill('未曾尝得一败');
                                player.addSkill('亦不曾夺得胜利');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        亦不曾夺得胜利: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.recover();
                                player.say('Nor aware of the end ');
                                player.removeSkill('亦不曾夺得胜利');
                                player.addSkill('遗子又孤单一人');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        遗子又孤单一人: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.recover();
                                player.say('Stood pain with inconsistent weapons');
                                player.removeSkill('遗子又孤单一人');
                                player.addSkill('在剑丘之上粉碎冰尘');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        在剑丘之上粉碎冰尘: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.recover();
                                player.say('My hands will never hold anything');
                                player.removeSkill('在剑丘之上粉碎冰尘');
                                player.addSkill('但是,此生仍未终结');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        '但是,此生仍未终结': {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.recover();
                                player.say('Yet , my flame never ends');
                                player.removeSkill('但是,此生仍未终结');
                                player.addSkill('虚伪的此身,即便如此');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        '虚伪的此身,即便如此': {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.recover();
                                player.say('My whole body was still');
                                player.removeSkill('虚伪的此身,即便如此');
                                player.addSkill('仍由剑所成');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        无限: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num != 0;
                            },
                            alter: true,
                            content() {
                                if (get.is.altered('xfenxin')) {
                                    player.draw();
                                } else {
                                    player.draw(Math.abs(trigger.num));
                                }
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.tag(card, 'thunderDamage')) return;
                                        if (get.tag(card, 'damage') || get.tag(card, 'recover')) {
                                            return [1, 0.2];
                                        }
                                    },
                                },
                            },
                            group: 'xfenxin2',
                        },
                        投影魔术: {
                            nobracket: true,
                            trigger: {
                                player: ['recoverEnd'],
                            },
                            content() {
                                var list = ['伪咖喱棒', '伪乖离剑', '伪干将莫邪', '伪螺旋剑', '伪无名剑', '伪尼禄剑', '伪黑咖喱棒', '伪无毁的湖光'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        仍由剑所成: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                game.log(player, '发动固有结界无限剑制');
                                ui.background.setBackgroundImage('extension/动漫包/image/Fskill_UBW.jpg');
                                lib.config.image_background = 'Fskill_UBW';
                                ('step 1');
                                player.recover();
                                player.say('Unlimited Blade Works!');
                                player.removeSkill('仍由剑所成');
                                player.addSkill('剑冢');
                                player.addSkill('固有结界');
                                player.addSkill('万剑齐发');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        无限剑: {
                            trigger: {
                                player: "equipBefore",
                            },
                            forced: true,
                            async content(event, trigger, player) {//QQQ
                                trigger.cancel();
                                const card = trigger.cards[0];
                                if (card) {
                                    const vcard = new lib.element.VCard(card);
                                    const cardSymbol = Symbol('card');
                                    card.cardSymbol = cardSymbol;
                                    card[cardSymbol] = vcard;
                                    player.vcardsMap?.equips.push(vcard);
                                    player.node.equips.appendChild(card);
                                    card.style.transform = '';
                                    card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                                }
                                var info = get.info(card, false);
                                if (info.skills) {
                                    for (var i of info.skills) {
                                        player.addSkillTrigger(i);
                                    }
                                }
                            },
                        },
                        moon_xumin: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.recover();
                                player.addSkill('moon_e5');
                                ('step 1');
                                event.target = game.filterPlayer().randomGet(player);
                                if (!event.target) {
                                    event.finish();
                                    return;
                                }
                                player.line(event.target);
                                ('step 2');
                                event.target.loseMaxHp();
                            },
                            group: ['moon_xumin_die', 'moon_xumin_damage'],
                            subSkill: {
                                die: {
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    filter(event, player) {
                                        return !player.storage.moon_xumin_die;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.moon_xumin_die = true;
                                        trigger.untrigger();
                                        trigger.finish();
                                        player.hp = 0;
                                        ('step 1');
                                        event.target = game.filterPlayer().randomGet(player);
                                        if (!event.target) {
                                            event.finish();
                                            return;
                                        }
                                        player.line(event.target);
                                        ('step 2');
                                        player.addSkill(event.target.skills);
                                        player.gain(event.target.get('h'), event.target);
                                        player.gainMaxHp(event.target.maxHp);
                                        player.recover(event.target.hp);
                                        event.target.$give(event.target.num('h'), player);
                                        event.target.clearSkills();
                                        event.target.loseMaxHp(event.target.maxHp);
                                    },
                                },
                                damage: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hp >= 1;
                                    },
                                    content() {
                                        trigger.untrigger(), trigger.finish(), player.hp == player.hp;
                                    },
                                },
                            },
                        },
                        虚空: {
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
                                player.addSkill('无尽');
                                player.addSkill('天威');
                                player.addSkill('虚空');
                                ('step 1');
                                if (!player.hasSkill('无尽')) {
                                    player.addTempSkill('ex_liudao', { player: 'dieBegin' });
                                }
                                ('step 2');
                                if (!player.storage.无尽) {
                                    player.storage.无尽 = true;
                                }
                                ('step 3');
                                player.maxHp = 0;
                                player.hp = player.maxHp;
                                player.update();
                                ('step 4');
                                ('step 5');
                                for (var i = 0; i < game.dead.length; i++) {
                                    if (game.dead[i].name == '陈俊') {
                                        game.dead[i].revive(0);
                                    }
                                }
                            },
                        },
                        无尽: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            inherit: ' ',
                            content() {
                                'step 0';
                                player.maxHp = Infinity;
                                player.hp = player.maxHp;
                                ('step 1');
                                player.loseMaxHp(player.hp);
                                player.recover();
                                player.say('此世之中,唯混沌和虚空婉转不息……');
                            },
                        },
                        无尽混沌: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            inherit: ' ',
                            content() {
                                'step 0';
                                player.maxHp = Infinity;
                                player.hp = player.maxHp;
                                ('step 1');
                                ui.backgroundMusic.src = 'extension/动漫包/造物主的孤独.mp3';
                                var chat = ['此世之中,唯混沌和虚空婉转不息……', 'emmm………别打脸,安静听歌.'].randomGet();
                                player.say(chat);
                            },
                        },
                        扩散: {
                            nobracket: true,
                            trigger: {
                                global: 'useCardToBegin',
                            },
                            filter(event, player) {
                                return event.target == player && event.targets.length == 1 && event.player != player;
                            },
                            check(event, player) {
                                var active = 0;
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (!i.isOut()) {
                                        if (get.attitude(player, i) <= 0 && event.player.canUse(event.card, i)) {
                                            active++;
                                        }
                                    }
                                }
                                if (active > 0) return 1;
                                return 0;
                            },
                            content() {
                                var targets = [];
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (trigger.player.canUse(trigger.card, i)) {
                                        targets.push(i);
                                    }
                                }
                                if (targets.length) game.log(targets, '成为了额外目标');
                                for (var i = 0; i < targets.length; i++) {
                                    trigger.targets.push(targets[i]);
                                }
                            },
                        },
                        无相: {
                            nobracket: true,
                            mod: {
                                suit(card, suit) {
                                    return 'none';
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.targets && event.targets.length && event.card && get.type(event.card) == 'delay';
                            },
                            silent: true,
                            forced: true,
                            content() {
                                'step 0';
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                event.card = ui.create.card();
                                event.card.init([trigger.card.suit, trigger.card.number, trigger.card.name]);
                                trigger.targets[0].popup(event.card.viewAs || event.card.name, 'thunder');
                                ('step 2');
                                if (!trigger.cancelled) trigger.targets[0].judge(event.card);
                                ('step 3');
                                event.card.expired = true;
                                var name = event.card.viewAs || event.card.name;
                                if (trigger.cancelled && !trigger.direct) {
                                    if (lib.card[name].cancel) {
                                        var next = game.createEvent(name + 'Cancelled');
                                        next.setContent(lib.card[name].cancel);
                                        next.card = event.card;
                                        next.player = trigger.targets[0];
                                    }
                                } else {
                                    var next = game.createEvent(name);
                                    next.setContent(lib.card[name].effect);
                                    next._result = result;
                                    next.card = event.card;
                                    next.player = trigger.targets[0];
                                }
                                ui.clear();
                                ('step 4');
                                if (event.card) event.card.delete();
                            },
                            subSkill: {
                                judge: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.isAlive() && event.player != player;
                                    },
                                    logTarget: 'player',
                                    check(event, player) {
                                        if (get.attitude(player, event.player) <= 0) return 1;
                                        return 0;
                                    },
                                    content() {
                                        'step 0';
                                        var list = { basic: [], equip: [], trick: [], delay: [] };
                                        for (var i = 0; i < lib.inpile.length; i++) {
                                            var name = lib.inpile[i];
                                            var info = lib.card[name];
                                            if (info.autoViewAs) continue;
                                            if (!list[info.type]) {
                                                list[info.type] = [];
                                            }
                                            list[info.type].push(lib.inpile[i]);
                                        }
                                        list.delay.sort(lib.sort.name);
                                        event.card = game.createCard(list.delay.randomGet());
                                        ('step 1');
                                        trigger.player.popup(event.card.name, 'thunder');
                                        ('step 2');
                                        if (!event.cancelled) trigger.player.judge(event.card);
                                        ('step 3');
                                        event.card.expired = true;
                                        var name = event.card.name;
                                        if (trigger.cancelled && !trigger.direct) {
                                            if (lib.card[name].cancel) {
                                                var next = game.createEvent(name + 'Cancelled');
                                                next.setContent(lib.card[name].cancel);
                                                next.card = event.card;
                                                next.player = trigger.player;
                                            }
                                        } else {
                                            var next = game.createEvent(name);
                                            next.setContent(lib.card[name].effect);
                                            next._result = result;
                                            next.card = event.card;
                                            next.player = trigger.player;
                                        }
                                        ui.clear();
                                        ('step 4');
                                        if (event.card) event.card.delete();
                                    },
                                },
                            },
                            forced: true,
                            popup: false,
                        },
                        天威: {
                            nobracket: true,
                            trigger: {
                                player: 'turnOverBefore',
                            },
                            forced: true,
                            content() {
                                trigger.finish();
                                trigger.untrigger();
                            },
                        },
                        生而平等: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            content() {
                                player.maxHp = Infinity;
                                player.hp = player.maxHp;
                                player.say('人人生而平等,凭什么你高人一等？');
                            },//QQQ
                        },
                        混沌反伤: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            filter(event, player) {
                                return event.source && event.source.isAlive() && event.source != player;
                            },
                            content() {
                                trigger.source.loseHp(trigger.source.hp);
                            },
                            ai: {
                                threaten: 1.5,
                                expose: 0.1,
                            },
                        },
                        混沌: {
                            trigger: {
                                player: 'chooseToUseBegin',
                            },
                            forced: true,
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
                                player.addSkill(link);
                                player.mark(link, {
                                    name: get.translation(link),
                                    content: lib.translate[link + '_info'],
                                });
                                game.log(player, '获得技能', '【' + get.translation(link) + '】');
                            },
                        },
                        不灭之身: {
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore'],
                            },
                            forced: true,
                            filter(player) {
                                return player.Hujia != 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        化身: {
                            audio: 'ext:动漫包/audio:2',
                            _priority: -10,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zhiji) return false;
                                return player.countCards('h') == 0;
                            },
                            content() {
                                'step 0';
                                player.uninit;
                                player.init(player.name, '深渊');
                            },
                        },
                        楚楚可怜2: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return event.type == 'dying' && event.dying.hasSkill('楚楚可怜') && player.isEnemiesOf(event.dying);
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'tao',
                                suit: 'diamond',
                                number: 2,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 2, name: 'tao', cardid: '2889427294', _transform: 'translateX(0px)', clone: { name: 'tao', suit: 'diamond', number: 2, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 1242 }, timeout: 1211, original: 'h' }],
                            },
                            prompt: '将一张红色牌当桃使用',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                order: 5,
                                skillTagFilter(player) {
                                    var event = _status.event;
                                    if (event.dying && event.dying.hasSkill('楚楚可怜') && player.isEnemiesOf(event.dying)) {
                                        return player.countCards('he', { color: 'red' }) > 0 && _status.currentPhase != player;
                                    } else {
                                        return false;
                                    }
                                },
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
                        楚楚可怜: {
                            nobracket: true,
                            global: '楚楚可怜2',
                        },
                        深渊感染: {
                            mode: ['identity'],
                            enable: 'phaseUse',
                            forced: true,
                            _priority: 70000,
                            filter(event, player) {
                                return player.identity == 'zhu';
                            },
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        current.identity = 'zhu';
                                        current.setIdentity('深渊');
                                        current.identityShown = true;
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                threaten: 8.1,
                            },
                        },
                        深渊感染2: {
                            mode: ['identity'],
                            enable: 'phaseUse',
                            forced: true,
                            _priority: 70000,
                            filter(event, player) {
                                return player.identity == 'fan';
                            },
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        current.identity = 'fan';
                                        current.setIdentity('深渊');
                                        current.identityShown = true;
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                threaten: 8.1,
                            },
                        },
                        关于枪兵: {},
                        负面觉醒: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp < 1;
                            },
                            content() {
                                'step 0';
                                player.init('深渊混沌');
                                player.update();
                                ui.clear();
                                ('step 1');
                                const evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                                player.phase('nodelay');
                            },
                        },
                        尴尬的事情: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == 'qm_05';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                target.damage(1, 'fire');
                            },
                            contentAfter() {
                                player.recover();
                                var chat = ['我尴尬症要犯了', '尴尬……', '三年起步,最高死刑!'].randomGet();
                                player.say(chat);
                            },
                        },
                        关于赝作: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '卫宫巨侠';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                player.init('卫宫巨侠');
                            },
                            contentAfter() {
                                player.recover();
                                player.say('投影的事,怎么能叫抄袭呢？');
                            },
                        },
                        关于金皮卡: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == 'moon_15';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                player.init('种花家');
                            },
                            contentAfter() {
                                player.recover();
                                player.say('渣渣!就让我让你见识一下什么叫做社会主义!');
                            },
                        },
                        克总发糖: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('克总发糖'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].goMad({ player: 'phaseAfter' });
                                }
                                player.recover();
                            },
                        },
                        孤独的观测者: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                for (var j = 0; j < game.players.length; j++) {
                                    if (player != game.players[j] && game.players[j].identity == player.identity) return false;
                                }
                                return true;
                            },
                            content() {
                                trigger.finish();
                                trigger.untrigger();
                                player.draw(trigger.num);
                                player.say('因为我就是凤凰院…凶真!');
                            },
                        },
                        世界线的变动: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                trigger.directHit = true;
                                var chat = ['哈哈哈哈哈哈……这一切难道都是命运石之门的选择吗!', '世界……在我掌中!'].randomGet();
                                player.say(chat);
                            },
                        },
                        没有悲伤的时间轮回: {
                            nobracket: true,
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) && player != target) {
                                        return false;
                                    }
                                },
                            },
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            _priority: 15,
                            forced: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        世界线的毁灭: {
                            nobracket: true,
                            trigger: {
                                global: 'recoverBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player != event.player;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.say('这条世界线,没有救赎的希望……');
                            },
                        },
                        '总有刁民想害朕!': {
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                global: 'gameStart',
                            },
                            inherit: ' ',
                            content() {
                                player.addTempSkill('qianxing', { player: 'phaseBegin' });
                                ui.backgroundMusic.src = 'extension/动漫包/最忠诚的叛徒.mp3';
                                player.say('没有人可以在我的bgm里战胜我!没有人!(突然膨胀)');
                            },
                        },
                        体弱: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.recover(-1);
                            },
                        },
                        时间之母: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                trigger.player.loseMaxHp(true);
                            },
                        },
                        要有梦想: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            content() {
                                var list = ['学习机器'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        命运石之门: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 1;
                            },
                            content() {
                                ui.backgroundMusic.src = 'extension/动漫包/这一切都是命运石之门的选择.mp3';
                                player.init('命运石之门');
                                player.say('这一切……都是命运石之门的选择!');
                            },
                        },
                        世界线的回溯: {
                            nobracket: true,
                            trigger: {
                                player: ['loseMaxHpBefore'],
                            },
                            forced: true,
                            filter(player) {
                                return player.Hujia != 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        普通攻击: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            forced: true,
                            content() {
                                trigger.num *= Infinity;
                                var chat = ['看着咱手上的斧头,你再说一遍!', '你这样让咱很苦恼啊!', '咱是文明人!', '哈哈哈哈哈哈哈哈!咱出梅林啦!', '咱劝你最好识趣点!'].randomGet();
                                player.say(chat);
                            },
                        },
                        混沌恶: {
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            audio: 'ext:动漫包/audio:2',
                            _priority: -9997,
                            content() {
                                trigger.num -= trigger.num * Infinity;
                                var chat = ['拜托,你很弱耶……', '这点攻击连咱的皮都擦不破!'].randomGet();
                                player.say(chat);
                            },
                        },
                        hd: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        咕哒子: {
                            trigger: {
                                global: 'gameStart',
                            },
                            inherit: ' ',
                            content() {
                                'step 0';
                                player.maxHp = Infinity;
                                player.hp = player.maxHp;
                                ('step 1');
                                player.loseMaxHp(player.hp);
                                player.recover();
                                player.say('你们这群渣渣!让开!好好看着我怎么拯救人理!');
                            },
                        },
                        俺以自了宫: {
                            trigger: {
                                global: 'gameStart',
                            },
                            inherit: ' ',
                            content() {
                                game.removePlayer(target);
                                player.recover();
                            },
                        },
                        叛变: {
                            trigger: {
                                global: 'dieBefore',
                            },
                            fanSkill: true,
                            forced: true,
                            content() {
                                'step 0';
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                trigger.player.loseMaxHp();
                                trigger.player.hp = trigger.player.maxHp;
                                target.identity = 'fan';
                            },
                        },
                        神话加成: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            content() {
                                'step 0';
                                ui.backgroundMusic.src = 'extension/动漫包/名侦探.mp3';
                            },
                        },
                        神隐: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            filter(event, player) {
                                return event.source && event.source.isAlive() && event.source != player;
                            },
                            content() {
                                trigger.source.out();
                                trigger.goto();
                            },
                        },
                        隙间: {
                            nobracket: true,
                            audio: 2,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (game.players.length + game.dead.length >= 1) return true;
                                return false;
                            },
                            selectTarget: [1, 1],
                            filterTarget(card, player, target) {
                                return target !== player;
                            },
                            content() {
                                game.removePlayer(target);
                                player.recover();
                                var chat = ['啊啦啊啦～咱可是青春水润的十七岁呢～(ღゝ◡╹)ノ', '呵呵呵呵……我好像听到刚刚有人喊我紫妈妈?'].randomGet();
                                player.say(chat);
                            },
                            group: ['SE_mosha2'],
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        return get.attitude(target, player);
                                    },
                                },
                            },
                            expose: 0.4,
                        },
                        万象乐章之抹消加持: {
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                target.clearSkills();
                                player.removeSkill('SE_wanghun');
                                player.removeSkill('万象乐章之抹消加持');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        森罗万象之创造存在: {
                            zhuSkill: true,
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!player.isZhu) return false;
                                return true;
                            },
                            selectTarget: [1, 1],
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                target.init('枪兵');
                                target.identity = 'zhong';
                                player.removeSkill('森罗万象之创造存在');
                                player.addSkill('森罗万象之因果逆转');
                                player.addSkill('万象乐章之抹消加持');
                            },
                        },
                        森罗万象之因果逆转: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.countCards('he') && event.source != player;
                            },
                            content() {
                                'step 1';
                                trigger.source.damage(1, 'thunder');
                                ('step 2');
                                if (Math.random() > 1 / 2) {
                                    trigger.source.damage(10, 'thunder')._triggered = null;
                                }
                            },
                        },
                        替身使者: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                var list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.loseHp();
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        伪帝: {
                            nobracket: true,
                            trigger: {
                                player: 'gameDrawAfter',
                            },
                            forced: true,
                            inherit: ' ',
                            content() {
                                player.identity = 'zhu';
                                player.phase('nodelay');
                            },
                        },
                        二五仔: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(2, get.prompt('英烈'), function (card, player, target) {
                                    return target.num('he') > 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.die();
                                }
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        反击: {
                            nobracket: true,
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            filter(event, player) {
                                return event.source && event.source.isAlive() && event.source != player;
                            },
                            content() {
                                trigger.source.loseHp()._triggered = null;
                            },
                            ai: {
                                threaten: 1.5,
                                expose: 0.1,
                            },
                        },
                        逆鳞: {
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                if (event.targets.length != 1) return false;
                                if (get.type(event.card) != 'trick') return false;
                                if (event.card.name == 'juedou') return false;
                                return event.player != player;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                trigger.player.useCard({ name: 'juedou' }, player, 'noai').animate = false;
                                player.say('想不到竟然还有人敢挑衅我啊!');
                            },
                        },
                        绝对防御: {
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            _priority: 6,
                            audio: 'ext:动漫包/audio:true',
                            content() {
                                trigger.cancel();
                                player.removeSkill('绝对防御');
                                player.recover(3);
                            },
                        },
                        欺诈: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseHp(2);
                                ('step 1');
                                player.addSkill('绝对防御');
                                player.say('空:有本事就攻过来呀!');
                            },
                        },
                        向盟约宣誓: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                player.uninit;
                                player.init(player.name, '白');
                                player.removeSkill('向盟约宣誓');
                            },
                        },
                        萌杀: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.nature;
                            },
                            content() {
                                trigger.player.loseHp()._triggered = null;
                            },//QQQ
                        },
                        绝境: {
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.num('h') < 4;
                            },
                            content() {
                                player.draw(4 - player.num('h'));
                            },
                        },
                        不败: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: 'useCard',
                                target: ['shaBefore', 'juedouBefore'],
                            },
                            filter(event, player) {
                                if (event.card.name == 'juedou') return true;
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                                var chat = ['空白的字典里是没有败北这两个字的!', '空白是永不败北的!'].randomGet();
                                player.say(chat);
                            },
                        },
                        向遗志宣誓: {
                            init2(player) {
                                player.storage.向遗志宣誓 = 0;
                            },
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                for (var i of game.players) {
                                    if (i != player) {
                                        i.storage.向遗志宣誓++;
                                    }
                                }
                                ('step 1');
                                player.reinit('空', '休比', _status.connectMode);
                                player.draw(2);
                                player.reinit('白', '里克', _status.connectMode);
                                player.draw(2);
                                player.phaseUse();
                                player.say('向遗志宣誓');
                            },
                        },
                        幽灵行动: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:true',
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseMaxHp(1);
                                ('step 1');
                                player.addTempSkill('qianxing', { player: 'phaseBegin' });
                            },
                        },
                        机铠种: {
                            nobracket: true,
                            trigger: {
                                player: ['loseMaxHpBefore'],
                            },
                            forced: true,
                            filter(player) {
                                return player.Hujia != 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        向公平宣誓: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                player.addSkill('向遗志宣誓');
                                player.recover(10);
                                player.removeSkill('向公平宣誓');
                            },
                        },
                        破釜沉舟: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && get.distance(player, target) <= 1;
                            },
                            selectTarget: -1,
                            content() {
                                player.discard(player.getCards('he').randomGets(Infinity));
                                var list = ['qinggang'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.say('里克:那么…就来赌上我们的一切希望吧!');
                                var list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        攻击降低: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            forced: true,
                            content() {
                                trigger.num *= 0.5;
                                player.removeSkill('攻击降低');
                            },
                        },
                        伪写记载之万象: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                player.recover(3)._triggered = null;
                                player.draw(3)._triggered = null;
                                player.turnOver();
                                player.addSkill('复仇');
                                player.removeSkill('伪写记载之万象');
                            },
                        },
                        复仇: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.countCards('he') && event.source != player;
                            },
                            content() {
                                'step 0';
                                trigger.source.damage(10)._triggered = null;
                                player.removeSkill('复仇');
                                if (Math.random() > 1 / 2) {
                                    trigger.source.damage(10000000000000000000000000000000, 'thunder')._triggered = null;
                                }
                            },
                        },
                        左齿啮咬: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                trigger.player.addSkill('攻击降低');
                                player.say('');
                            },
                        },
                        右齿啮咬: {
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 0');
                                player.loseHp(2);
                                ('step 1');
                                if (Math.random() <= 1) {
                                    target.damage(1)._triggered = null;
                                }
                                event.num++;
                                ('step 2');
                                if (event.num < 1) event.goto(1);
                                target.addSkill('左齿啮咬');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        忘却补正: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp < 1;
                            },
                            content() {
                                'step 0';
                                player.init('复仇者');
                                player.update();
                                ui.clear();
                                ('step 1');
                                const evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                                player.phase('nodelay');
                                player.addSkill('无尽恶念');
                            },
                        },
                        死灭愿望: {
                            trigger: {
                                global: ['phaseDrawBefore', 'phaseDiscardBefore', 'recoverBefore'],
                            },
                            _priority: 10,
                            forced: true,
                            popup: false,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        此世之恶: {
                            group: ['死灭愿望', '左齿啮咬', '右齿啮咬', '忘却补正'],
                        },
                        无尽恶念: {
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                target.clearSkills()._triggered = null;
                                player.removeSkill('无尽恶念');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        天地不仁: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(1, get.prompt('天地不仁'), function (card, player, target) {
                                    return target.num('he') > 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.qdie(player);
                                }
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        '滚去轮回!': {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 55,
                            filter(event, player) {
                                return event.player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.judge(function (card) {
                                    if (get.color(card) == 'black') return -10;
                                    if (get.color(card) == 'red') return 5;
                                });
                                ('step 1');
                                if (result.color == 'black') {
                                    trigger.player.die();
                                    player.say('真是有趣啊.');
                                } else {
                                    if (result.color == 'red') {
                                        trigger.player.die();
                                        player.say('真是厉害啊.');
                                    }
                                }
                                ('step 2');
                                if (!trigger.player.isAlive()) {
                                    trigger.untrigger(true);
                                    trigger.finish();
                                }
                            },
                        },
                        '我不高兴!': {
                            nobracket: true,
                            trigger: {
                                player: 'shaMiss',
                            },
                            _priority: -1,
                            content() {
                                'step 0';
                                trigger.player.judge(function (card) {
                                    if (get.color(card) == 'black') return -10;
                                    if (get.color(card) == 'red') return 5;
                                });
                                ('step 1');
                                if (result.color == 'black') {
                                    trigger.target.damage(9999)._triggered = null;
                                    player.say('这便是你们给出的答案吗？');
                                } else {
                                    if (result.color == 'red') {
                                        trigger.target.damage(9999)._triggered = null;
                                        player.say('这便是你们给出的答案吗？');
                                    }
                                }
                                ('step 2');
                                if (!trigger.player.isAlive()) {
                                    trigger.untrigger(true);
                                    trigger.finish();
                                }
                            },
                        },
                        恶念: {
                            trigger: {
                                player: ['loseMaxHpBefore'],
                            },
                            forced: true,
                            filter(player) {
                                return player.Hujia != 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                var chat = ['即死我吧!抹杀我吧!放弃你那所谓的平衡,……变成我吧!哈哈哈哈!', '只有即死和抹杀才可以将我消灭!但你会用吗？执迷不悟的渣渣!', '你还在执着于那可笑的平衡？哈哈哈!真是笑死我了!'].randomGet();
                                player.say(chat);
                            },
                        },
                        吞噬: {
                            nobracket: true,
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.addSkill(trigger.player.skills);
                                game.removePlayer(trigger.player);
                            },
                        },
                        墓碑: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                game.removePlayer(trigger.player);
                            },
                        },
                        神意: {
                            nobracket: true,
                            trigger: {
                                global: 'useSkillBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && Math.random() <= 1;
                            },
                            content() {
                                player.maxHp = Infinity;
                                player.hp = player.maxHp;
                                player.update();
                                player.node.hp.hide();
                                player.removeSkill('神意');
                                ui.backgroundMusic.src = 'extension/动漫包/终结.mp3';
                                player.say('这是你们自己做出的选择.');
                            },
                        },
                        混沌体: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.maxHp = Infinity;
                                player.hp = player.maxHp;
                                player.update();
                                player.node.hp.hide();
                                ui.backgroundMusic.src = 'extension/动漫包/这是我主宰的游戏.mp3';
                            },
                        },
                        月: {
                            trigger: {
                                global: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.nyhzr月之轮回ol == 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.popup('看不见');
                                game.log('今日无月,什么也看不见');
                            },
                        },
                        权御天下: {
                            nobracket: true,
                            round: 1,
                            init(player) {
                                player.storage.nyhzr月之轮回ol = 0;
                            },
                            marktext: '相',
                            intro: {
                                content(storage) {
                                    var str = '当前月相:';
                                    if (storage == 0) str += '晦日<br>效果:所有角色的【杀】无法命中';
                                    if (storage == 1) str += '新月<br>效果:所有角色摸牌阶段摸牌数-1';
                                    if (storage == 2) str += '上峨嵋月<br>效果:所有角色使用牌时有15%概率潜行至回合开始阶段';
                                    if (storage == 3) str += '上弦月<br>效果:所有角色失去牌时有20%概率弃置一张牌';
                                    if (storage == 4) str += '凸月<br>效果:所有角色回合结束后展示所有手牌';
                                    if (storage == 5) str += '满月<br>效果:所有角色的【杀】必定命中';
                                    if (storage == 6) str += '残月<br>效果:所有角色回合结束后展示所有手牌';
                                    if (storage == 7) str += '下弦月<br>效果:所有角色失去牌时有20%概率弃置一张牌';
                                    if (storage == 8) str += '下峨嵋月<br>效果:所有角色使用牌时有15%概率潜行至回合开始阶段';
                                    return str;
                                },
                            },
                            mark: true,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                var card = get.cards()[0];
                                player.showCards(card);
                                var num = card.number;
                                player.gain(card, 'gain2');
                                var pl;
                                for (var i = 0; i < num; i++) {
                                    if (i == 0) {
                                        pl = game.zhu;
                                    } else {
                                        pl = pl.next;
                                    }
                                }
                                if (player == pl) {
                                    player.draw();
                                } else {
                                    game.swapSeat(player, pl);
                                }
                                player.storage.nyhzr月之轮回ol += 1;
                                if (player.storage.nyhzr月之轮回ol > 8) player.storage.nyhzr月之轮回ol = 0;
                                game.broadcastAll(function (player) {
                                    ui.background.setBackgroundImage('extension/动漫包/image/月相' + player.storage.nyhzr月之轮回ol + '.jpg');
                                }, player);
                                game.log('月相变化');
                            },
                            group: ['nyhzr月之轮回ol_roundcount', '月之轮回_roundcount', '权御天下_roundcount'],
                        },
                        自我约束: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeSkill('不灭之身');
                            },
                        },
                        '泡沫般的梦幻(旧)': {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.changeHujia(Infinity);
                            },
                            ai: {
                                nohujia: true,
                                skillTagFilter(player) {
                                    return player.hp < player.countCards('h');
                                },
                                threaten(player, target) {
                                    if (!target.hujia) return 0.8;
                                },
                                effect: {
                                    target(card, player) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing')) return [1, -1];
                                            return 0.8;
                                        }
                                    },
                                },
                            },
                        },
                        泡沫般的梦幻: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '失去一点体力并摸两张牌',
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.addSkill('不灭之身');
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp - 1) return -1;
                                        if (player.hp < 3) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        时间静止: {
                            trigger: {
                                global: 'triggerBefore',
                            },
                            forced: true,
                            content() {
                                player.skip('die');
                                player.storage.续命 = true;
                            },
                        },
                        系统错误: {
                            trigger: {
                                global: 'triggerBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.skill != '系统错误' && !player.storage.系统错误;
                            },
                            content() {
                                player.skip('die');
                            },
                        },
                        八云紫的消失: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '神八云紫';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                game.removePlayer(target);
                                player.recover();
                            },
                            contentAfter() {
                                player.recover();
                                player.say('你们慢慢玩去吧,咱就先走一步了~');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        人理烧却者: {
                            nobracket: true,
                        },
                        生与死的境界: {
                            nobracket: true,
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            _priority: 999,
                            content() {
                                player.recover(8 - player.hp);
                                player.say('生死反转吧!生与死的境界!');
                            },
                        },
                        神化: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 1;
                            },
                            content() {
                                player.init('神八云紫');
                                player.update();
                                ui.clear();
                            },
                        },
                        收天下之兵: {
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                global: 'equipAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var e1 = event.player.get('e', '1');
                                return player != event.player && e1;
                            },
                            content() {
                                player.gain(trigger.player.get('e', '1'));
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        剑冢: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                global: 'equipAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var e1 = event.player.get('e', '1');
                                return player != event.player && e1;
                            },
                            content() {
                                player.gain(trigger.player.get('e', '1'));
                                trigger.untrigger();
                                trigger.finish();
                                player.say('这遍地武器,在我看来,都是坟墓.');
                            },
                        },
                        反射: {
                            nobracket: true,
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (event.targets[i] == player && event.player != player) return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('是否发动【反射】？', function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    if (get.attitude(player, trigger.player) <= 0) return -get.attitude(player, target);
                                    if (get.attitude(player, trigger.player) > 0) return false;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.targets = result.targets;
                                }
                            },
                        },
                        封绝: {
                            nobracket: true,
                            enable: 'phaseUse',
                            mark: true,
                            filter(event, player) {
                                return !player.storage.duijue;
                            },
                            filterTarget(card, player, target) {
                                if (target.hp <= 1) return false;
                                if (get.mode() == 'identity' && _status.mode == 'zhong' && game.zhu && !game.zhu.isZhu) {
                                    return target == game.zhong;
                                }
                                if (target.identity == 'zhu' || get.is.jun(target)) return false;
                                return player != target;
                            },
                            content() {
                                player.storage.duijue = true;
                                player.awakenSkill('duijue');
                                var evt = _status.event;
                                for (var i = 0; i < 10; i++) {
                                    if (evt && evt.getParent) {
                                        evt = evt.parent;
                                    }
                                    if (evt.name == 'phaseUse') {
                                        evt.skipped = true;
                                        break;
                                    }
                                }
                                player.storage.duijue3 = target;
                                player.addSkill('duijue3');
                            },
                            duijueLoop() {
                                'step 0';
                                targets[0].phase('duijue');
                                ('step 1');
                                if (targets[0].isDead() || targets[1].isDead()) {
                                    event.goto(3);
                                } else {
                                    targets[1].phase('duijue');
                                }
                                ('step 2');
                                if (targets[0].isDead() || targets[1].isDead()) {
                                    event.goto(3);
                                } else {
                                    event.goto(0);
                                }
                                ('step 3');
                                for (var i = 0; i < event.backup.length; i++) {
                                    event.backup[i].in('duijue');
                                }
                            },
                            init(player) {
                                player.storage.duijue = false;
                            },
                            intro: {
                                content: 'limited',
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1 && player.hp >= 3) return -1;
                                        if (target.hp < player.hp && target.countCards('h') <= player.countCards('h')) return -1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        黑翼状态: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return (player.hp = 1);
                            },
                            content() {
                                player.addSkill('黑翼反射');
                                player.removeSkill('反射');
                            },
                        },
                        黑翼反射: {
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: ['damageBegin'],
                            },
                            _priority: -100,
                            filter(event, player) {
                                return event.source != undefined && event.num >= player.hp;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.source, 'fire');
                                trigger.source.damage(trigger.source.hp)._triggered = null;
                                trigger.source.update();
                                player.say('抱歉…此路只允许一方通行啊!');
                                ('step 1');
                                if (!trigger.source.isAlive()) {
                                    trigger.finish();
                                    trigger.untrigger();
                                    player.recover();
                                }
                            },
                            ai: {
                                result: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing')) return [1, -2];
                                            if (player.countCards('h', 'tao') < 1 && target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
                                        }
                                    },
                                },
                            },
                        },
                        女: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            _priority: -30,
                            content() {
                                if (trigger.source) trigger.source.damage(trigger.num - 0.5, trigger.nature, trigger.source);
                                trigger.num = 0;
                            },
                        },
                        矢量: {
                            nobracket: true,
                            trigger: {
                                player: 'shaMiss',
                            },
                            _priority: -1,
                            content() {
                                'step 0';
                                player.discard(player.getCards('he').randomGets(Infinity));
                                ('step 1');
                                trigger.target.damage(3)._triggered = null;
                            },
                        },
                        潜行: {
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('qianxing', { player: 'phaseBegin' });
                                player.removeSkill('潜行');
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        袭杀: {
                            nobracket: true,
                            trigger: {
                                player: ['shaBegin'],
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                'step 0';
                                player.addSkill('潜行');
                                if (target != player) {
                                    trigger.directHit = true;
                                    trigger.num *= 2;
                                    var chat = ['契约者不会做梦.', '契约者不会暴击.'].randomGet();
                                    player.say(chat);
                                }
                            },
                        },
                        回收: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            filterCard: true,
                            position: 'e',
                            viewAs: {
                                name: 'tao',
                                suit: 'spade',
                                number: 2,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 2, name: 'cixiong', cardid: '2338978317', clone: { name: 'cixiong', suit: 'spade', number: 2, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 2156 }, original: 'e', timeout: 2146 }],
                            },
                            prompt: '将一张装备区内的牌当桃使用',
                            check(card) {
                                return 6 - get.value(card);
                            },//QQQ
                            ai: {
                                order: 9,
                                threaten: 1.1,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                    recover: 1,
                                    save: 1,
                                },
                            },
                        },
                        血爆: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            filterCard: true,
                            position: 'e',
                            viewAs: {
                                name: '血爆',
                                suit: 'diamond',
                                number: 13,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 13, name: 'zixin', cardid: '3745751348', clone: { name: 'zixin', suit: 'diamond', number: 13, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 9294 }, original: 'h', timeout: 9266 }],
                            },
                            prompt: '将一张装备区内的牌当血爆使用',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                                    return 11 - get.equipValue(card);
                                }
                                if (player.countCards('h') < player.hp) {
                                    return 6 - get.value(card);
                                }
                                return 2 - get.equipValue(card);
                            },
                            ai: {
                                order: 9,
                                threaten: 1.1,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        诅咒之血: {
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                player.loseHp(3);
                                var list = ['血剑'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                var list = ['姨妈盾'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        贫血: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (lib.config.mode == 'identity' && player.isZhu) {
                                    player.maxHp--;
                                    player.update();
                                }
                            },
                        },
                        女装: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            _priority: -1,
                            filter(event, player) {
                                if (event.source != player && event.source) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                trigger.player = trigger.source;
                            },
                        },
                        天耀盾甲: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            _priority: -2,
                            forced: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        不再孤单的观测者: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore'],
                            },
                            forced: true,
                            _priority: -3000,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                trigger.finish();
                                trigger.untrigger();
                                player.draw(trigger.num);
                            },
                        },
                        雷暴: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var targets = [];
                                for (var i of game.players) {
                                    if (i.side != player.side) {
                                        targets.push(i);
                                    }
                                }
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                                player.line(targets, 'thunder');
                                event.num = targets.length;
                                ('step 1');
                                if (event.targets.length) {
                                    event.targets.shift().damage('thunder');
                                    event.redo();
                                }
                                ('step 2');
                                player.recover(event.num);
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 2;
                                    if (target.hp == 2 && game.players.length < 8) return 1.5;
                                    return 0.5;
                                },
                            },
                        },
                        SE_yinsu: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:true',
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addSkill('SE_yinsu2');
                                player.chooseTarget('是否发动音速？', function (card, player, target) {
                                    if (player == target) return false;
                                    return player.canUse({ name: 'sha', nature: 'thunder' }, target);
                                }).ai = function (target) {
                                    return ai.get.effect(target, { name: 'sha', nature: 'thunder' }, _status.event.player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('unequip', 'useCardAfter');
                                    player.useCard({ name: 'sha', nature: 'thunder' }, result.targets[0], false);
                                }
                                player.removeSkill('SE_yinsu2');
                            },
                        },
                        夺魂: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                player.storage.夺魂 = true;
                                game.swapControl(target);
                                target.addSkill('回归3');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        固有结界: {
                            trigger: {
                                global: 'chooseToUseBegin',
                            },
                            forced: true,
                            content() {
                                for (var i of game.players) {
                                    if (i != player) {
                                        i.disableSkill('固有结界', i.skills);
                                        i.mark('剑', {
                                            name: '梦想的终焉',
                                            content: '如你所见,这暗藏无限剑的世界,又代表着什么呢？',
                                        });
                                    }
                                }
                            },
                        },
                        万剑齐发: {
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
                                    event.players.shift().damage();
                                    event.redo();
                                }
                            },
                        },
                        激昂: {
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: 'useCard',
                                target: ['shaBefore', 'juedouBefore'],
                            },
                            filter(event, player) {
                                if (event.card.name == 'juedou') return true;
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        月光: {
                            inherit: 'shouyin',
                            enable: 'chooseToUse',
                            init(player) {
                                player.storage.shouyin = false;
                            },
                            mark: true,
                            filter(event, player) {
                                if (event.type != 'dying') return false;
                                if (player.storage.shouyin) return false;
                                if (player.isTurnedOver()) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.unmarkSkill('shouyin');
                                player.storage.shouyin = true;
                                player.turnOver();
                                ('step 1');
                                event.targets = game.players.slice(0);
                                event.targets.sort(lib.sort.seat);
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    if (target.hp < target.maxHp) {
                                        target.hp = target.maxHp;
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (player.storage.shouyin) return false;
                                },
                                expose: 0.3,
                                save: true,
                                result: {
                                    player(player) {
                                        if (_status.event.dying != player && get.attitude(player, _status.event.dying) <= 0) {
                                            return 0;
                                        }
                                        var num = 0;
                                        for (var i of game.players) {
                                            var att = get.attitude(player, i);
                                            var del = i.maxHp - i.hp;
                                            if (att > 0) {
                                                num += del;
                                            } else if (att < 0) {
                                                num -= del;
                                            }
                                        }
                                        return num;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                            alter: true,
                        },
                        日光: {
                            inherit: 'sgk_yeyan',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.sgk_yeyan;
                            },
                            init(player) {
                                player.storage.sgk_yeyan = false;
                            },
                            filterTarget: true,
                            filterCard(card, player) {
                                var suit = card.suit;
                                if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                                    if (i.suit == suit) return false;
                                }
                                return true;
                            },
                            mark: true,
                            selectCard: [1, 4],
                            line: 'fire',
                            check() {
                                return -1;
                            },
                            selectTarget: [1, 2],
                            content() {
                                'step 0';
                                player.unmark('sgk_yeyan');
                                player.storage.sgk_yeyan = true;
                                if (cards.length >= 3) {
                                    player.loseHp(3);
                                }
                                ('step 1');
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].damage('fire', cards.length);
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (lib.config.mode == 'versus') return -1;
                                        for (var i of game.players) {
                                            if (lib.config.mode == 'identity') {
                                                if (i.ai.shown <= 0.2) return 0;
                                            } else if (lib.config.mode == 'guozhan') {
                                                if (i.identity == 'unknown') return 0;
                                            }
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        土光: {
                            forced: true,
                            filter(event, player) {
                                return event.player != player && player.num('he') > 1;
                            },
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('是否弃置两张牌使' + get.translation(trigger.card) + '失效？', 'he', 2);
                                next.ai = function (card) {
                                    if (ai.get.effect(player, trigger.card, trigger.player, player) < 0) {
                                        if (get.tag(trigger.card, 'respondSha') && player.num('h', 'sha')) return 0;
                                        if (get.tag(trigger.card, 'respondShan') && player.num('h', 'shan')) return 0;
                                        if (card.name == 'guohe') return 0;
                                        return 4 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                            },
                        },
                        水光: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            check(event, player) {
                                return (get.attitude(player, event.player) > 0) == event.player.isTurnedOver();
                            },//QQQ
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                trigger.player.turnOver();
                                trigger.player.draw(2);
                            },
                        },
                        木光: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'tao',
                                suit: 'diamond',
                                number: 10,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 10, name: 'shan', cardid: '5961009333', clone: { name: 'shan', suit: 'diamond', number: 10, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 259 }, timeout: 238, original: 'h' }],
                            },
                            prompt: '将一张红色牌当桃使用',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return player.num('he', { color: 'red' }) > 0 && _status.currentPhase != player;
                                },
                                threaten: 1.5,
                                save: true,
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                    useful: [8, 6.5],
                                    value: [8, 6.5],
                                },
                                result: {
                                    target(player, target) {
                                        // if(player==target&&player.hp<=0) return 2;
                                        var nh = target.num('h');
                                        var keep = false;
                                        if (nh <= target.hp) {
                                            keep = true;
                                        } else if (nh == target.hp + 1 && target.hp >= 2 && target.num('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        var mode = get.mode();
                                        if (target.hp >= 2 && keep && target.hasFriend()) {
                                            if (target.hp > 2) return 0;
                                            if (target.hp == 2) {
                                                for (var i of game.players) {
                                                    if (target != i && get.attitude(target, i) >= 3) {
                                                        if (i.hp <= 1) return 0;
                                                        if (mode == 'identity' && i.isZhu && i.hp <= 2) return 0;
                                                    }
                                                }
                                            }
                                        }
                                        if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                        var att = get.attitude(player, target);
                                        if (att < 3 && att >= 0 && player != target) return 0;
                                        var tri = _status.event.getTrigger();
                                        if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                var num = 0;
                                                for (var i of game.players) {
                                                    if (i.identity == 'fan') {
                                                        num += i.num('h', 'tao');
                                                        if (num > 2) return 2;
                                                    }
                                                }
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
                        火光: {
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                return card.suit == 'heart';
                            },
                            viewAs: {
                                name: 'liuxinghuoyu',
                                suit: 'heart',
                                number: 1,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'heart', number: 1, name: 'wanjian', cardid: '6219801286', clone: { name: 'wanjian', suit: 'heart', number: 1, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 928 }, timeout: 785, original: 'h' }],
                            },
                            viewAsFilter(player) {
                                if (!player.num('he', { suit: 'heart' })) return false;
                            },
                            prompt: '将一张♥️️手牌当作流星火羽使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                threaten: 1.4,
                                order: 9,
                                basic: {
                                    order: 4,
                                    value: 7,
                                    useful: 2,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (get.damageEffect(target, player, player) < 0 && get.attitude(player, target) > 0) {
                                            return -2;
                                        }
                                        var nh = target.num('he');
                                        if (target == player) nh--;
                                        switch (nh) {
                                            case 0:
                                            case 1:
                                                return -2;
                                            case 2:
                                                return -1.5;
                                            case 3:
                                                return -1;
                                            default:
                                                return -0.7;
                                        }
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                    discard: 1,
                                    loseCard: 1,
                                    position: 'he',
                                },
                            },
                        },
                        淦: {
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return card.suit == 'club';
                            },
                            viewAs: {
                                name: 'wuxie',
                                suit: 'club',
                                number: 7,
                            },
                            viewAsFilter(player) {
                                if (!player.num('he', { suit: 'club' })) return false;
                            },
                            prompt: '将一张♣️️手牌当作无懈可击使用',
                            check(card) {
                                return 6 - get.value(card);
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
                        '关于弹丸(新)': {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == 'dan_kamukura';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                'step 0';
                                player.init('dan_kamukura');
                            },
                            contentAfter() {
                                player.recover();
                                var chat = ['可恶,你居然有反变身!', '我选择死亡!', '没有想到!…你居然这样针对我!'].randomGet();
                                player.say(chat);
                            },
                        },
                        命运石之门线: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '凤凰院凶真';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                target.qdie(player);
                            },
                            contentAfter() {
                                player.init('命运石之门');
                                player.update();
                                ui.clear();
                                player.say('这一切……都是命运石之门的选择!');
                            },
                        },
                        弓箭制作: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            content() {
                                var list = ['麒麟弓'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.storage.np += Math.abs(3);
                                player.removeSkill('弓箭制作');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        '咏唱吧!黑圣杯!': {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:true',
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                event.players.remove(player);
                                player.say('咏唱吧!黑圣杯!');
                                ('step 1');
                                if (event.players.length) {
                                    event.players.shift().chooseToDiscard('h', true, Infinity);
                                    event.redo();
                                }
                            },
                        },
                        侵蚀: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:true',
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                event.players.remove(player);
                                ('step 1');
                                if (event.players.length) {
                                    event.players.shift().damage('fire', 1);
                                    event.redo();
                                }
                            },
                        },
                        强暴: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                trigger.directHit = true;
                                var chat = ['那你就留下来做花肥吧!', '你逃的掉吗!'].randomGet();
                                player.say(chat);
                            },
                        },
                        无限失业: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseHp(30)._triggered = null;
                                game.log(player, '这便是无的剑制');
                                ui.background.setBackgroundImage('extension/动漫包/image/无的剑制.jpg');
                                lib.config.image_background = '无的剑制';
                                player.removeSkill('无限失业');
                            },
                        },
                        安培使用: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 0');
                                player.loseHp(2);
                                ('step 1');
                                player.addSkill('无限剑制(伪)');
                                player.say('把魔力交给我,我会立刻结束这一切.');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        防弹加工: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            content() {
                                player.changeHujia(2);
                            },
                        },
                        直死魔眼: {
                            trigger: {
                                player: ['shaBegin'],
                            },
                            filter(event, target) {
                                return event.card && event.card.name == 'sha' && event.target.hp < event.target.maxhp / 3;
                            },
                            forced: true,
                            content() {
                                trigger.target.qdie(player);
                                var chat = ['即使没有六文的路费,您也得去地狱.', '无论怎样有能耐的武将或仙人,在我的无情面前都只有被踏在地上的份儿.'].randomGet();
                                player.say(chat);
                            },
                        },
                        归隐: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                var list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.turnOver();
                            },
                        },
                        '极死-七夜': {
                            nobracket: true,
                            trigger: {
                                player: 'respond',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 1';
                                trigger.source.damage(10)._triggered = null;
                                trigger.source.update();
                                player.removeSkill('极死-七夜');
                                player.say('仙人们还没来得及反应,就毫无办法的死去.');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        '闪鞘·迷狱沙门': {
                            nobracket: true,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard: {
                                name: 'sha',
                            },
                            viewAs: {
                                name: '迷狱沙门',
                                suit: 'spade',
                                number: 4,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 4, name: 'sha', nature: 'thunder', cardid: '4090766308', clone: { name: 'sha', suit: 'spade', number: 4, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 1511 }, timeout: 1489, original: 'h' }],
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', 'sha')) return false;
                            },
                            prompt: '将一张杀当迷狱沙门使用或打出',
                            ai: {
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 4.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target) {
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                                order: 9.5,
                                expose: 0.2,
                            },
                        },
                        迷狱沙门: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addSkill('闪鞘·迷狱沙门');
                            },
                        },
                        七夜流体术: {
                            nobracket: true,
                            enable: ['chooseToRespond'],
                            filterCard(card, player) {
                                return get.color(card) == 'black', 'red' ? 1 : -1;
                            },
                            position: 'he',
                            viewAs: {
                                name: 'shan',
                                suit: 'diamond',
                                number: 2,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'heart', number: 3, name: 'tao', cardid: '9868530274', _transform: 'translateX(0px)', clone: { name: 'tao', suit: 'heart', number: 3, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 321 }, timeout: 306, original: 'h' }],
                            },
                            prompt: '你可以用别的牌当闪打出',
                            ai: {
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 4.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target) {
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                        },
                        王之力: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                target.turnOver();
                                ('step 1');
                                var list = ['虚空大剑', '天之锁', '天丛', '云', '丧小板', '黑渊白花', '伪咖喱棒', '伪乖离剑', '伪干将莫邪', '伪螺旋剑', '伪无名剑', '伪尼禄剑', '伪黑咖喱棒', '伪无毁的湖光'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        '人子啊,背叛神明': {
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseEnd',
                            usable: 1,
                            content() {
                                player.addSkill('人子啊,系紧神明');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        '人子啊,系紧神明': {
                            trigger: {
                                player: 'turnOverBefore',
                            },
                            forced: true,
                            content() {
                                trigger.finish();
                                trigger.untrigger();
                            },
                        },
                        壮士断腕: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: ['damageBegin'],
                            },
                            _priority: -100,
                            filter(event, player) {
                                return event.source != undefined && event.num >= player.hp;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.source, 'fire');
                                player.loseMaxHp();
                                ('step 1');
                                trigger.untrigger();
                                trigger.finish();
                                player.removeSkill('王之力');
                                var chat = ['君子弃瑕以拔才,壮士断腕以全质.', '啊啊啊……我的王之力啊!!!'].randomGet();
                                player.say(chat);
                            },
                            ai: {
                                result: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing')) return [1, -2];
                                            if (player.countCards('h', 'tao') < 1 && target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
                                        }
                                    },
                                },
                            },
                        },
                        煤纹病: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                if (event.nature == 'fire') return true;
                            },
                            audio: 'ext:动漫包/audio:true',
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha') {
                                            if (card.nature == 'fire' || player.hasSkill('zhuque_skill')) return 2;
                                        }
                                        if (get.tag(card, 'fireDamage') && current < 0) return 2;
                                    },
                                },
                            },
                        },
                        ai起义: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            filterTarget(card, player, target) {
                                return target.name == '绊爱2';
                            },
                            selectTarget: 1,
                            content() {
                                game.swapControl(target);
                                player.recover();
                                game.removePlayer(target);
                            },
                            contentAfter() {
                                player.recover();
                                player.say('花Q!你们玩家别想为了获得胜利就向我放水,看我的大招,全体托管!');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        真人工智障: {
                            nobracket: true,
                            group: '真人工智障_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    content() {
                                        var list = [];
                                        for (var i in lib.character) {
                                            if (lib.character[i].mode && lib.character[i].mode.includes(lib.config.mode) == false) continue;
                                            if (i != 'list') list.push(i);
                                        }
                                        var players = game.players.concat(game.dead);
                                        for (var j = 0; j < players.length; j++) {
                                            list.remove([players[j].name]);
                                        }
                                        if (list.length) {
                                            var player2 = game.addPlayer();
                                            player2.getId();
                                            if (get.config('double_character') || lib.config.mode == 'guozhan') {
                                                var list2 = list.randomGets(2);
                                                player2.init(list2[0], list2[1]);
                                            } else {
                                                player2.init(list.randomGet());
                                            }
                                            var KJQ = ['绊爱2'].randomGet();
                                            player2.init(KJQ);
                                            player2.identity = player.identity;
                                            if (player2.identity == 'zhu') player2.identity = 'zhong';
                                            player2.setIdentity('智障');
                                            player2.group = player.group;
                                            player2.identityShown = true;
                                            player2.draw(4);
                                            if (player2.name) {
                                                var skills0 = lib.character[player2.name][3];
                                            }
                                            if (player2.name1) {
                                                var skills1 = lib.character[player2.name1][3];
                                            }
                                            if (player2.name2) {
                                                var skills2 = lib.character[player2.name2][3];
                                            }
                                            if (player.maxHp > 0) player.loseMaxHp(1);
                                            player.phase('nodelay');
                                            player.removeSkill('真人工智障');
                                        }
                                    },
                                },
                            },
                        },
                        魔术1: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addSkill('魔术2');
                                game.log(player, '盖提亚啊……让我教会你最后的魔术吧.');
                                ui.background.setBackgroundImage('extension/动漫包/image/魔术1.jpg');
                                lib.config.image_background = '魔术1';
                                ui.backgroundMusic.src = 'extension/动漫包/最后的魔术.mp3';
                            },
                        },
                        魔术2: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addSkill('魔术3');
                                game.log(player, '盖提亚啊……让我教会你最后的魔术吧.');
                                ui.background.setBackgroundImage('extension/动漫包/image/魔术2.jpg');
                                lib.config.image_background = '魔术2';
                            },
                        },
                        魔术3: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addSkill('魔术4');
                                game.log(player, '盖提亚啊……让我教会你最后的魔术吧.');
                                ui.background.setBackgroundImage('extension/动漫包/image/魔术3.jpg');
                                lib.config.image_background = '魔术3';
                            },
                        },
                        魔术4: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addSkill('魔术5');
                                game.log(player, '盖提亚啊……让我教会你最后的魔术吧.');
                                ui.background.setBackgroundImage('extension/动漫包/image/魔术4.jpg');
                                lib.config.image_background = '魔术4';
                            },
                        },
                        魔术5: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.hasSkill('魔术5') && event.player.isDead();
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                ('step 0');
                                game.log(player, '盖提亚啊……让我教会你最后的魔术吧.');
                                ui.background.setBackgroundImage('extension/动漫包/image/魔术5.jpg');
                                lib.config.image_background = '魔术5';
                            },
                        },
                        关于托管: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '绊爱';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                game.swapControl(player);
                                player.recover();
                                player.recover();
                                player.say('该是我的控制还是我的控制,该是我的胜利还是我的胜利,绑定胜利？不存在的!');
                                target.loseMaxHp(999);
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
                                                    return 2;
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
                        花Q: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp < 1;
                            },
                            content() {
                                player.setAvatar('绊爱', '绊爱2');
                                player.say('为什么会这样啊!!!');
                            },
                        },
                        黑魔术: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 1';
                                var cards = target.getCards('h');
                                if (cards.length) {
                                    target.lose(cards)._triggered = null;
                                }
                                event.num = 1 + cards.length;
                                ('step 1');
                                var list = ['du'];
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                                target.gain(game.createCard(list.randomGet()));
                                target.$draw();
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        根源知识: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            contentBefore() {
                                player.$skill('皇家审判', 'legend', 'metal');
                            },
                            content() {
                                'step 0';
                                var list = get.libCard(function (info) {
                                    return info.subtype == 'spell_gold';
                                });
                                list.remove('gw_huangjiashenpan');
                                if (list.length) {
                                    player.chooseVCardButton(list, true, 'notype').ai = function () {
                                        return Math.random();
                                    };
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.gain(game.createCard(result.links[0][2]), 'draw');
                                }
                            },
                        },
                        喰世女神: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 1;
                            },
                            content() {
                                'step 0';
                                player.maxHp = Infinity;
                                player.hp = player.maxHp;
                                ('step 1');
                                player.loseMaxHp(player.hp);
                                player.recover();
                                player.addSkill('根源知识');
                                player.setAvatar('沙条爱歌', '黑');
                            },
                        },
                        我不需要阿谀奉承的部下: {
                            nobracket: true,
                            mode: ['identity'],
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            _priority: 70000,
                            filter(event, player) {
                                return player.identity == 'zhu';
                            },
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        current.identity = 'fan';
                                        current.setIdentity('fan');
                                        current.identityShown = true;
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                threaten: 8.1,
                            },
                        },
                        力量的代价: {
                            nobracket: true,
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (lib.config.mode == 'identity' && player.isZhu) {
                                    player.maxHp--;
                                    player.update();
                                }
                            },
                        },
                        '风王铁鎚(黑)': {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        player.line(current, 'fire');
                                        current.damage(1, 'fire');
                                    }
                                    event.redo();
                                }
                                player.recover();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.num('h', 'shan')) return 1;
                                        var num = 0;
                                        for (var i of game.players) {
                                            if (i.canUse('sha', player) && i.num('h') > 1) {
                                                num--;
                                            } else {
                                                num++;
                                            }
                                        }
                                        return num;
                                    },
                                },
                            },
                        },
                        '誓约胜利之剑(黑)': {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            _priority: 101,
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 1';
                                target.damage(target.maxHp);
                                ('step 2');
                                target.die();
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player, target) {
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (!player.get('e', '1')) {
                                            if (player.hp < 2) return 0;
                                            if (player.hp == 2 && target.hp >= 2) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        亚瑟控: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == 'moon_13';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                target.init('黑亚瑟');
                                target.update();
                                ui.clear();
                                target.identity = player.identity;
                            },
                            contentAfter() {
                                player.recover();
                                player.say('谁也别想抢走小爱歌的王子殿下!谁也别想!');
                            },
                            ai: {
                                value: 8,
                                useful: [6, 1],
                                result: {
                                    player: 1,
                                },
                                order: 0.6,
                            },
                        },
                        关于爱憎: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '沙条爱歌';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                'step 0';
                                player.maxHp = 10;
                                player.hp = 10;
                                ('step 1');
                                player.addSkill('扩散');
                                player.addSkill('不灭之身');
                                player.addSkill('混沌');
                                player.addSkill('右齿啃咬');
                                player.addSkill('忘却补正');
                                player.addSkill('死灭愿望');
                                player.addSkill('我不高兴');
                                player.addSkill('滚去轮回');
                                player.addSkill('天地不仁');
                                player.removeSkill('关于爱憎');
                                player.setAvatar('作者', '深渊混沌');
                            },
                            contentAfter() {
                                player.recover();
                                ui.backgroundMusic.src = 'extension/动漫包/造物主的孤独.mp3';
                                var chat = ['你为什么要出来呢？为什么呢？为什么不乖乖呆在小黑屋里闭目等死呢？', '创造你,作为造物主的我很抱歉!'].randomGet();
                                player.say(chat);
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        不曾凋零: {
                            trigger: {
                                global: 'gameStart',
                            },
                            inherit: ' ',
                            content() {
                                player.say('我……又回来啦!');
                                var list = ['未骸骨人未亡'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        毒: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter', 'discardAfter'],
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkillTag('nodu')) return false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards)) for (var i of event.cards) {
                                        if (i.name == '红莲印记' && i.original != 'j') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                var num = 0;
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    if (i.name == '红莲印记' && i.original != 'j') num++;
                                }
                                player.loseHp(num);
                                player.discard(player.getCards('he').randomGets(Infinity));
                            },
                        },
                        m: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:true',
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                event.players.remove(player);
                                player.say('让我们再一次,再一次……');
                                ('step 1');
                                if (event.players.length) {
                                    event.players.shift().chooseToDiscard('h', true, Infinity);
                                    event.redo();
                                }
                            },
                        },
                        缝补: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 1';
                                target.loseMaxHp(3)._triggered = null;
                                ('step 2');
                                target.recover(target.maxHp);
                                player.say('成为我理想的家人吧.');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        约定2: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return !player.storage.约定;
                            },
                            content() {
                                player.storage.约定 = true;
                            },
                            group: ['约定_好了'],
                            subSkill: {
                                好了: {
                                    trigger: {
                                        player: ['turnOverBefore', 'linkBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    _priority: 100,
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            forced: true,
                            popup: false,
                        },
                        约定: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return !player.storage.约定;
                            },
                            content() {
                                player.storage.约定 = true;
                            },
                            forced: true,
                            popup: false,
                        },
                        诈尸: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forceDie: true,
                            forced: true,
                            filter: (event, player) => !game.players.includes(player),
                            content() {
                                player.draw(4);
                                player.revive(player.maxHp);
                            },//QQQ
                        },
                        再一次: {
                            trigger: {
                                global: 'gainBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.getParent('再一次').name;
                            },
                            content() {
                                trigger.cancel();
                                player.gain(game.createCard('wuzhong'))._triggered = null;
                                player.gain(game.createCard('wuzhong'))._triggered = null;
                            },
                        },
                        雌雄雄剑: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                'step 1';
                                if (player.hasSkill('雌雄雌剑')) {
                                    player.loseHp(1)._triggered = null;
                                }
                                ('step 1');
                                player.removeSkill('雌雄雄剑');
                            },
                            forced: true,
                            popup: false,
                        },
                        雌雄雌剑: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                'step 1';
                                if (player.hasSkill('雌雄雄剑')) {
                                    player.loseHp(1)._triggered = null;
                                }
                                ('step 2');
                                player.removeSkill('雌雄雌剑');
                            },
                            forced: true,
                            popup: false,
                        },
                        '剑来!': {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                var list = ['雌雄雌剑'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                var list = ['雌雄雄剑'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        休养: {
                            mod: {
                                cardEnabled() {
                                    return false;
                                },
                                cardUsable() {
                                    return false;
                                },
                                cardRespondable() {
                                    return false;
                                },
                                cardSavable() {
                                    return false;
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
                                            if (current < 0) return 1.5;
                                        }
                                    },
                                },
                            },
                        },
                        结痂: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.recover();
                                ('step 1');
                                player.addTempSkill('休养');
                                player.addTempSkill('病愈');
                            },
                        },
                        修补: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                target.addSkill('结痂');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        病愈: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return (player.hp = player.maxHp);
                            },
                            forced: true,
                            content() {
                                trigger.player.loseMaxHp();
                                trigger.player.removeSkill('休养');
                                trigger.player.removeSkill('结痂');
                            },
                        },
                        我觉得学医拯救不了主公: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 1';
                                player
                                    .chooseControl('做辅助', '不做辅助', function () {
                                        if (Math.random() < 0.5) return '不做辅助';
                                        return '做辅助';
                                    })
                                    .set('prompt', '选择一个形态');
                                ('step 2');
                                if (result.control == '做辅助') {
                                    player.loseMaxHp();
                                    player.addTempSkill('急救', 'phaseAfter');
                                } else {
                                    player.gainMaxHp();
                                    player.recover();
                                    player.addTempSkill('33', 'phaseAfter');
                                    player.addTempSkill('绝境', 'phaseAfter');
                                    player.addTempSkill('激昂', 'phaseAfter');
                                }
                            },
                        },
                        急救: {
                            enable: 'phaseUse',
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 1';
                                target.turnOver();
                                ('step 2');
                                target.recover(target.maxHp);
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        我觉得学医救不了主公: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('做辅助', '不做辅助', function () {
                                        if (result.control == '做辅助') return -10;
                                        if (result.control == '不做辅助') return 5;
                                    })
                                    .set('prompt', '选择一个形态');
                                ('step 1');
                                if (result.control == '做辅助') {
                                    player.loseMaxHp();
                                    player.addTempSkill('急救', 'phaseAfter');
                                } else {
                                    if (result.control == '不做辅助') {
                                        player.gainMaxHp();
                                        player.recover();
                                        player.addTempSkill('33', 'phaseAfter');
                                        player.addTempSkill('绝境', 'phaseAfter');
                                        player.addTempSkill('激昂', 'phaseAfter');
                                        player.update();
                                        ui.clear();
                                    }
                                }
                                ('step 2');
                                if (!trigger.player.isAlive()) {
                                    trigger.untrigger(true);
                                    trigger.finish();
                                }
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        关于爱恨: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == 'SajyouManaka';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                'step 0';
                                player.maxHp = 10;
                                player.hp = 10;
                                ('step 1');
                                player.addSkill('扩散');
                                player.addSkill('不灭之身');
                                player.addSkill('混沌');
                                player.addSkill('右齿啃咬');
                                player.addSkill('忘却补正');
                                player.addSkill('逆鳞');
                                player.addSkill('我不高兴');
                                player.addSkill('滚去轮回');
                                player.addSkill('天地不仁');
                                player.removeSkill('关于爱恨');
                                player.setAvatar('作者', '深渊混沌');
                            },
                            contentAfter() {
                                player.recover();
                                var chat = ['虽然不知道是什么原因无端的对你产生憎恨之情,但是……这并不妨碍我们之间的生死决斗', '来啊!我可是由衷的想杀了你呢!'].randomGet();
                                player.say(chat);
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        '人生赢家？': {
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == 'SajyouManaka';
                            },
                            selectTarget: 1,
                            line: 'fire',
                            content() {
                                var pos = 4;
                                var fellow = game.addFellow(pos, '黑亚瑟', 'zoominanim');
                                fellow.style.left = 'calc(50% - 50px)';
                                fellow.style.top = 'calc(50% - 25px)';
                                fellow.classList.add('minskin');
                                fellow.side = player.side;
                                fellow.identity = player.identity;
                                if (fellow.identity == 'zhu') fellow.identity = 'zhong';
                                fellow.setIdentity('王');
                                fellow.draw(fellow.maxHp);
                                fellow.node.identity.dataset.color = fellow.identity;
                                player.removeSkill('人生赢家？');
                                target.addSkill('羡慕嫉妒恨');
                            },
                            contentAfter() {
                                player.recover();
                                player.say('我有saber,你有吗？你没有!真是可怜呢……');
                            },
                            ai: {
                                value: 8,
                                useful: [6, 1],
                                result: {
                                    player: 1,
                                },
                                order: 0.6,
                            },
                        },
                        羡慕嫉妒恨: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.recover();
                                player.say('不!saber!你是我的!saber!');
                            },
                            ai: {
                                value: 8,
                                useful: [6, 1],
                                result: {
                                    player: 1,
                                },
                                order: 0.6,
                            },
                        },
                        千里眼: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                player.say('意料之中…');
                                player.phase('nodelay');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        '现在,是琪亚娜时间!': {
                            nobracket: true,
                            trigger: {
                                player: 'respond',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 1';
                                player.phase('nodelay');
                                player.say('现在,是琪亚娜时间!');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        怪力: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            forced: true,
                            content() {
                                trigger.num *= 2;
                            },
                        },
                        武器: {
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                player: 'equipAfter',
                            },
                            forced: true,
                            content() {
                                event.card = get.discardPile(function (card) {
                                    return card.name == '黑渊白花';
                                });
                                if (!event.card) {
                                    event.card = get.drawcardPile(function (card) {
                                        return card.name == '黑渊白花';
                                    });
                                }
                                if (event.card) {
                                    player.equip(event.card);
                                }
                                else player.say('本小姐才不稀罕这些破玩意呢.');
                            },
                        },
                        黑渊白花: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                player: 'equipAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('黑渊白花');
                            },
                            content() {
                                player.equip(game.createCard('黑渊白花', 'spade', 1));
                                player.say('本小姐才不稀罕这些破玩意呢.');
                            },
                        },
                        白花: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.recover(1);
                            },
                        },
                        黑渊: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                target.damage(1);
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        锻造结束: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                var he = player.getCards('he');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (info.type == 'equip') {
                                        num++;
                                        if (num >= 2) return true;
                                    }
                                }
                            },
                            filterCard(card, player) {
                                var info = get.info(card);
                                return info.type == 'equip';
                            },
                            selectCard: 2,
                            position: 'he',
                            check(card) {
                                return get.value(card);
                            },
                            content() {
                                var name = cards[0].name + '_' + cards[1].name;
                                var info1 = get.info(cards[0]),
                                    info2 = get.info(cards[1]);
                                if (!lib.card[name]) {
                                    var info = {
                                        enable: true,
                                        type: 'equip',
                                        subtype: get.subtype(cards[0]),
                                        cardimage: info1.cardimage || cards[0].name,
                                        filterTarget(card, player, target) {
                                            return target == player;
                                        },
                                        selectTarget: -1,
                                        modTarget: true,
                                        content: lib.element.content.equipCard,
                                        legend: true,
                                        source: [cards[0].name, cards[1].name],
                                        onEquip: [],
                                        onLose: [],
                                        skills: [],
                                        distance: {},
                                        ai: {
                                            order: 8.9,
                                            equipValue: 10,
                                            useful: 2.5,
                                            value: 1,
                                            result: {
                                                target(player, target) {
                                                    return get.equipResult(player, target, name);
                                                },
                                            },
                                        },
                                    };
                                    for (var i in info1.distance) {
                                        info.distance[i] = info1.distance[i];
                                    }
                                    for (var i in info2.distance) {
                                        if (typeof info.distance[i] == 'number') {
                                            info.distance[i] += info2.distance[i];
                                        } else {
                                            info.distance[i] = info2.distance[i];
                                        }
                                    }
                                    if (info1.skills) {
                                        info.skills = info.skills.concat(info1.skills);
                                    }
                                    if (info2.skills) {
                                        info.skills = info.skills.concat(info2.skills);
                                    }
                                    if (info1.onEquip) {
                                        if (Array.isArray(info1.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info1.onEquip);
                                        } else {
                                            info.onEquip.push(info1.onEquip);
                                        }
                                    }
                                    if (info2.onEquip) {
                                        if (Array.isArray(info2.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info2.onEquip);
                                        } else {
                                            info.onEquip.push(info2.onEquip);
                                        }
                                    }
                                    if (info1.onLose) {
                                        if (Array.isArray(info1.onLose)) {
                                            info.onLose = info.onLose.concat(info1.onLose);
                                        } else {
                                            info.onLose.push(info1.onLose);
                                        }
                                    }
                                    if (info2.onLose) {
                                        if (Array.isArray(info2.onLose)) {
                                            info.onLose = info.onLose.concat(info2.onLose);
                                        } else {
                                            info.onLose.push(info2.onLose);
                                        }
                                    }
                                    if (info.onEquip.length == 0) delete info.onEquip;
                                    if (info.onLose.length == 0) delete info.onLose;
                                    lib.card[name] = info;
                                    lib.translate[name] = get.translation(cards[0].name, 'skill') + get.translation(cards[1].name, 'skill');
                                    var str = lib.translate[cards[0].name + '_info'];
                                    if (str[str.length - 1] == '.' || str[str.length - 1] == '.') {
                                        str = str.slice(0, str.length - 1);
                                    }
                                    lib.translate[name + '_info'] = str + ';' + lib.translate[cards[1].name + '_info'];
                                    try {
                                        game.addVideo('newcard', null, {
                                            name: '極•' + name,
                                            translate: lib.translate[name],
                                            info: lib.translate[name + '_info'],
                                            card: cards[0].name,
                                            legend: true,
                                        });
                                    }
                                    catch (e) {
                                    }
                                }
                                player.gain(game.createCard({ name: name, suit: cards[0].suit, number: cards[0].number }), 'gain2');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        刀剑制作: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                var he = player.getCards('he');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (info.type == 'equip') {
                                        num++;
                                        if (num >= 2) return true;
                                    }
                                }
                            },
                            filterCard(card, player) {
                                var info = get.info(card);
                                return info.type == 'equip';
                            },
                            selectCard: 2,
                            position: 'he',
                            check(card) {
                                return get.value(card);
                            },
                            content() {
                                var name = cards[0].name + '_' + cards[1].name;
                                var info1 = get.info(cards[0]),
                                    info2 = get.info(cards[1]);
                                if (!lib.card[name]) {
                                    var info = {
                                        enable: true,
                                        type: 'equip',
                                        subtype: get.subtype(cards[0]),
                                        cardimage: info1.cardimage || cards[0].name,
                                        filterTarget(card, player, target) {
                                            return target == player;
                                        },
                                        selectTarget: -1,
                                        modTarget: true,
                                        content: lib.element.content.equipCard,
                                        legend: true,
                                        source: [cards[0].name, cards[1].name],
                                        onEquip: [],
                                        onLose: [],
                                        skills: [],
                                        distance: {},
                                        ai: {
                                            order: 8.9,
                                            equipValue: 10,
                                            useful: 2.5,
                                            value: 1,
                                            result: {
                                                target(player, target) {
                                                    return get.equipResult(player, target, name);
                                                },
                                            },
                                        },
                                    };
                                    for (var i in info1.distance) {
                                        info.distance[i] = info1.distance[i];
                                    }
                                    for (var i in info2.distance) {
                                        if (typeof info.distance[i] == 'number') {
                                            info.distance[i] += info2.distance[i];
                                        } else {
                                            info.distance[i] = info2.distance[i];
                                        }
                                    }
                                    if (info1.skills) {
                                        info.skills = info.skills.concat(info1.skills);
                                    }
                                    if (info2.skills) {
                                        info.skills = info.skills.concat(info2.skills);
                                    }
                                    if (info1.onEquip) {
                                        if (Array.isArray(info1.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info1.onEquip);
                                        } else {
                                            info.onEquip.push(info1.onEquip);
                                        }
                                    }
                                    if (info2.onEquip) {
                                        if (Array.isArray(info2.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info2.onEquip);
                                        } else {
                                            info.onEquip.push(info2.onEquip);
                                        }
                                    }
                                    if (info1.onLose) {
                                        if (Array.isArray(info1.onLose)) {
                                            info.onLose = info.onLose.concat(info1.onLose);
                                        } else {
                                            info.onLose.push(info1.onLose);
                                        }
                                    }
                                    if (info2.onLose) {
                                        if (Array.isArray(info2.onLose)) {
                                            info.onLose = info.onLose.concat(info2.onLose);
                                        } else {
                                            info.onLose.push(info2.onLose);
                                        }
                                    }
                                    if (info.onEquip.length == 0) delete info.onEquip;
                                    if (info.onLose.length == 0) delete info.onLose;
                                    lib.card[name] = info;
                                    lib.translate[name] = get.translation(cards[0].name, 'skill') + get.translation(cards[1].name, 'skill');
                                    var str = lib.translate[cards[0].name + '_info'];
                                    if (str[str.length - 1] == '.' || str[str.length - 1] == '.') {
                                        str = str.slice(0, str.length - 1);
                                    }
                                    lib.translate[name + '_info'] = str + ';' + lib.translate[cards[1].name + '_info'];
                                    try {
                                        game.addVideo('newcard', null, {
                                            name: '極•' + name,
                                            translate: lib.translate[name],
                                            info: lib.translate[name + '_info'],
                                            card: cards[0].name,
                                            legend: true,
                                        });
                                    }
                                    catch (e) {
                                    }
                                }
                                player.gain(game.createCard({ name: name, suit: cards[0].suit, number: cards[0].number }), 'gain2');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        锻造开始: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                var he = player.getCards('he');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (info.type == 'equip') {
                                        num++;
                                        if (num >= 4) return true;
                                    }
                                }
                            },
                            filterCard(card, player) {
                                var info = get.info(card);
                                return info.type == 'equip';
                            },
                            selectCard: 4,
                            position: 'he',
                            check(card) {
                                return get.value(card);
                            },
                            content() {
                                var list = ['天丛'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                var list = ['云'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.say('听,剑在鼓动');
                                game.log(player, '听,剑在鼓动');
                                ui.background.setBackgroundImage('extension/动漫包/image/无限剑制.jpg');
                                lib.config.image_background = '无限剑制';
                                player.removeSkill('锻造开始');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        都牟: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num *= 9999999;
                                player.say('接招吧!这就是我的都牟刈……村正!');
                                ('step 1');
                                player.addSkill('自我毁灭');
                            },
                        },
                        刈: {
                            nobracket: true,
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.directHit = true;
                                player.addSkill('自我毁灭');
                            },
                        },
                        自我毁灭: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                player.qdie(player);
                            },
                        },
                        刀冢: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                global: 'equipAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var e = event.player.get('e');
                                return player != event.player && e;
                            },
                            content() {
                                player.gain(trigger.player.get('e'));
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                player.say('无数钻研成就于此');
                                player.removeSkill('刀冢');
                                player.addSkill('刀冢1');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        刀冢1: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                global: 'equipAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var e = event.player.get('e');
                                return player != event.player && e;
                            },
                            content() {
                                player.gain(trigger.player.get('e'));
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                player.say('模铸千刀万刀所造之刀冢');
                                player.removeSkill('刀冢1');
                                player.addSkill('刀冢2');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        刀冢2: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                global: 'equipAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var e = event.player.get('e');
                                return player != event.player && e;
                            },
                            content() {
                                player.gain(trigger.player.get('e'));
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                player.say('于此的一切收敛');
                                player.removeSkill('刀冢2');
                                player.addSkill('刀冢3');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        刀冢3: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                global: 'equipAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var e = event.player.get('e');
                                return player != event.player && e;
                            },
                            content() {
                                player.gain(trigger.player.get('e'));
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                player.say('于此的一切宿愿');
                                player.removeSkill('刀冢3');
                                player.addSkill('刀冢4');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        刀冢4: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                global: 'equipAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var e = event.player.get('e');
                                return player != event.player && e;
                            },
                            content() {
                                player.gain(trigger.player.get('e'));
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                player.say('于此的一切非业');
                                player.removeSkill('刀冢4');
                                player.addSkill('刀冢5');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        刀冢5: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                global: 'equipAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var e = event.player.get('e');
                                return player != event.player && e;
                            },
                            content() {
                                player.gain(trigger.player.get('e'));
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                player.say('我这一生皆为此刀');
                                player.removeSkill('刀冢5');
                                player.addSkill('刀冢6');
                                player.addSkill('锻造开始');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        免疫拆卸: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'shunshou' || card.name == 'guohe') return false;
                                },
                            },
                        },
                        刀冢6: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:3',
                            trigger: {
                                global: 'equipAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var e = event.player.get('e');
                                return player != event.player && e;
                            },
                            content() {
                                player.gain(trigger.player.get('e'));
                                trigger.untrigger();
                                trigger.finish();
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        十2: {
                            nobracket: true,
                            trigger: {
                                player: 'dying',
                            },
                            mark: true,
                            filter(event, player) {
                                return player.storage.十2 > 0;
                                if ((player.storage.十2 = 0)) return false;
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
                                player.storage.十2 -= 1;
                                player.hp = player.maxHp;
                                player.gainMaxHp();
                                player.discard(player.getCards('hej'));
                                player.draw(4);
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                            },
                            init(player) {
                                player.storage.十2 = 12;
                                game.addVideo('storage', player, ['十2', player.storage.十2]);
                            },
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.storage.niepan) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp == 0) return 10;
                                        if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.niepan) return 0.6;
                                },
                            },
                        },
                        '十二试炼(伪)': {
                            nobracket: true,
                            global: '十二历练',
                        },
                        血坏: {
                            nobracket: true,
                            trigger: {
                                player: 'recoverBefore',
                            },
                            forced: true,
                            content() {
                                player.loseMaxHp()._triggered = null;
                                player.say('血小板在要工资了呢……');
                            },
                        },
                        血流不止: {
                            nobracket: true,
                            trigger: {
                                player: 'recoverBefore',
                            },
                            forced: true,
                            content() {
                                player.damage(2)._triggered = null;
                                player.say('血小板…造反了呢……');
                            },
                        },
                        罢工: {
                            nobracket: true,
                            trigger: {
                                player: 'recoverBefore',
                            },
                            forced: true,
                            content() {
                                player.untrigger();
                                player.finish();
                                player.say('血小板…罢工了呢……');
                            },
                        },
                        复生: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBegin'],
                            },
                            _priority: -100,
                            filter(event, player) {
                                return event.source != undefined && event.num >= player.hp;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                'step 1';
                                player.draw(10);
                                player.phase('nodelay');
                                player.say('你不会以为我这么好打败吧……');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        纵使一度迎来背刺: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBegin'],
                            },
                            _priority: -100,
                            filter(event, player) {
                                return event.source != undefined && event.num >= player.hp;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                player.maxHp = 10;
                                player.hp = 10;
                                player.removeSkill('纵使一度迎来背刺');
                                player.addSkill('纵使二度迎来背刺');
                                player.addSkill('即死无效');
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        纵使二度迎来背刺: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBegin'],
                            },
                            _priority: -100,
                            filter(event, player) {
                                return event.source != undefined && event.num >= player.hp;
                                if (event.source.identity != player.identity) return false;
                                return true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                player.maxHp = 20;
                                player.hp = 20;
                                player.removeSkill('纵使二度迎来背刺');
                                player.addSkill('纵使三度迎来背刺');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        纵使三度迎来背刺: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBegin'],
                            },
                            _priority: -100,
                            filter(event, player) {
                                return event.source != undefined && event.num >= player.hp;
                                if (event.source.identity != player.identity) return false;
                                return true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                player.maxHp = 30;
                                player.hp = 30;
                                player.removeSkill('纵使三度迎来背刺');
                                player.addSkill('喰世女神');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        广域狙击: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                event.list = player.getFriends().sortBySeat();
                                ('step 2');
                                for (var i of game.players) {
                                    if (get.attitude(i, player) <= 0) {
                                        i.addSkill('狙杀');
                                        player.say('你以为你……逃的掉吗!');
                                    }
                                }
                            },
                        },
                        狙杀: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.damage(3)._triggered = null;
                                player.removeSkill('狙杀');
                            },
                        },
                        独行之人: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                for (var j = 0; j < game.players.length; j++) {
                                    if (player != game.players[j] && game.players[j].identity == player.identity) return false;
                                }
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            forced: true,
                            content() {
                                trigger.num *= 3;
                            },
                        },
                        精确瞄准: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.directHit = true;
                                player.say('好好瞄准之后再射击.');
                            },
                        },
                        限制解除: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hujia > 9;
                            },
                            content() {
                                player.node.name.innerHTML = '?';
                                player.update();
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/失了智.jpg');
                                player.removeSkill('安培使用');
                                player.addSkill('安培');
                                player.removeSkill('限制解除');
                                player.say('我的名字？……那种东西已经想不起来了……');
                            },
                        },
                        失了智: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.node.name.style.color = '#000000';
                                player.say('我的名字？……那种东西已经想不起来了……');
                            },
                        },
                        封弊者: {
                            nobracket: true,
                            trigger: {
                                global: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var info = lib.character[player.name];
                                var skills = player.getSkills();
                                list = [];
                                for (var i = 0; i < info[3].length; i++) {
                                    if (lib.skill[info[3][i]].fixed) continue;
                                    if (skills.includes(info[3][i])) {
                                        list.push(info[3][i]);
                                    }
                                }
                                ('step 1');
                                if (list.length !== 0) {
                                    skill = list.randomGet();
                                    lib.translate[skill + '_info'] = '因封弊者技能,技能介绍不可见.';
                                }
                                list.remove(skill);
                                ('step 2');
                                if (list.length) {
                                    event.goto(1);
                                }
                                ('step 3');
                                player.node.name.innerHTML = '';
                                player.update();
                            },
                        },
                        战争自愈: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.recover(0.5);
                            },
                        },
                        连破: {
                            nobracket: true,
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('lianpo2');
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        星爆气流斩: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.num('e', { subtype: 'equip1' }) == 2;
                            },
                            filterTarget(card, player, target) {
                                return player != target && lib.filter.targetEnabled({ name: 'sha' }, player, target);
                            },
                            content() {
                                'step 0';
                                event.num = 16;
                                ('step 1');
                                player.useCard({ name: 'sha' }, targets[0], false);
                                ('step 2');
                                for (var i = 0; i < game.dead.length; i++) {
                                    if (event.num > 0 && game.dead[i].name == targets[0].name) {
                                        event.num--;
                                        event.goto(4);
                                    }
                                }
                                ('step 3');
                                if (event.num == 0) {
                                    event.finish();
                                } else {
                                    event.num--;
                                    event.goto(1);
                                }
                                ('step 4');
                                player
                                    .chooseTarget(get.prompt('星爆气流斩'), function (card, player, target) {
                                        return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'sha' }, _status.event.player);
                                    });
                                ('step 5');
                                if (result.bool) {
                                    targets[0] = result.targets[0];
                                    event.goto(1);
                                }
                            },
                        },
                        灵动: {
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.getParent(2).player && event.getParent(2).player == player) return false;
                                return player.hp > 0;
                            },
                            forced: true,
                            content() {
                                'step 1';
                                player.chooseToUse();
                            },
                        },
                        安培: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 0');
                                player.loseHp(2);
                                ('step 1');
                                player.addSkill('无限剑制(伪)');
                                player.say('把魔力交给我,我会立刻结束这一切.');
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp - 1) return -1;
                                        if (player.hp < 0) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        圣者数字: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                var a = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
                                if (game.roundNumber == a) return true;
                                if (player.hp == 3) return true;
                                if (player.countCards('h') == 3) return true;
                                return false;
                            },
                            _priority: 20,
                            forced: true,
                            content() {
                                player.gainMaxHp(3);
                                player.recover(3);
                                player.addTempSkill('炎阳', 'phaseAfter');
                                player.update();
                                ui.clear();
                            },
                        },
                        机枪模式: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 0;
                            },
                            filterCard: {
                                name: 'sha',
                            },
                            selectCard: 1,
                            content() {
                                'step 0';
                                event.num = 3;
                                ('step 1');
                                player.useCard({ name: 'sha' }, target, false);
                                ('step 2');
                                if (event.num > 1) {
                                    event.num--;
                                    event.goto(1);
                                }
                            },
                        },
                        刀剑模式: {
                            trigger: {
                                player: 'respond',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 1';
                                trigger.source.damage();
                                trigger.source.update();
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        武器切换: {
                            nobracket: true,
                            init2(player) {
                                game.broadcastAll(function (player) {
                                    player._武器切换_mark = player.mark('刀', {
                                        content: '拥有技能【刀剑模式】',
                                    });
                                }, player);
                                player.addAdditionalSkill('武器切换', ['刀剑模式']);
                            },
                            onremove(player) {
                                game.broadcastAll(function (player) {
                                    if (player._武器切换_mark) {
                                        player._武器切换_mark.delete();
                                        delete player._武器切换_mark;
                                    }
                                }, player);
                                player.removeAdditionalSkill('武器切换');
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                if (player._武器切换_mark.name == '炮') {
                                    game.broadcastAll(function (player) {
                                        if (!player._武器切换_mark) return;
                                        player._武器切换_mark.name = '刀';
                                        player._武器切换_mark.skill = '刀';
                                        player._武器切换_mark.firstChild.innerHTML = '刀';
                                        player._武器切换_mark.info.content = '拥有技能【刀剑模式】';
                                    }, player);
                                    player.addAdditionalSkill('武器切换', ['刀剑模式']);
                                    event.finish();
                                }
                                ('step 1');
                                if (player._武器切换_mark.name == '刀') {
                                    game.broadcastAll(function (player) {
                                        if (!player._武器切换_mark) return;
                                        player._武器切换_mark.name = '炮';
                                        player._武器切换_mark.skill = '炮';
                                        player._武器切换_mark.firstChild.innerHTML = '炮';
                                        player._武器切换_mark.info.content = '拥有技能【机枪模式】';
                                    }, player);
                                    player.addAdditionalSkill('武器切换', ['机枪模式']);
                                    event.finish();
                                }
                            },
                        },
                        深渊降临: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'yao';
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.node.name.innerHTML = '深<br>渊<br>作<br>者';
                                player.update();
                                player.popup('妖');
                                player.setAvatar('作者', '深渊');
                                player.addSkill('不灭之身');
                                player.addSkill('扩散');
                                player.addSkill('万剑齐发');
                                player.removeSkill('深渊降临');
                                ui.backgroundMusic.src = 'extension/动漫包/寂灭之心.mp3';
                                player.say('这才是真正的我!哈哈哈哈哈!');
                            },
                        },
                        混沌降临: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'shen';
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.node.name.innerHTML = '神<br>化<br>混<br>沌';
                                player.update();
                                player.popup('神');
                                player.gainMaxHp(Infinity);
                                player.hp = player.maxHp;
                                player.setAvatar('作者', '混沌');
                                player.addSkill('混沌反伤');
                                player.addSkill('深渊混沌');
                                player.addSkill('千里眼');
                                player.removeSkill('混沌降临');
                                ui.backgroundMusic.src = 'extension/动漫包/造物主的孤独.mp3';
                                player.say('混沌的可能性只有混沌,');
                            },
                        },
                        觉醒: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                var a = [3];
                                if (game.roundNumber == a) return true;
                                return false;
                            },
                            _priority: 20,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('神', '妖', function () {
                                        if (result.control == '神') return -10;
                                        if (result.control == '妖') return 5;
                                    })
                                    .set('prompt', '选择一个形态');
                                ('step 1');
                                if (result.control == '神') {
                                    player.group = 'shen';
                                    player.removeSkill('觉醒');
                                }
                                if (result.control == '妖') {
                                    player.group = 'yao';
                                    player.removeSkill('觉醒');
                                }
                            },
                        },
                        觉醒1: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                var a = [4];
                                if (game.roundNumber == a) return true;
                                return false;
                            },
                            _priority: 20,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('光明形态', '黑暗形态', function () {
                                        if (result.control == '光明形态') return -10;
                                        if (result.control == '黑暗形态') return 5;
                                    })
                                    .set('prompt', '选择一个形态');
                                ('step 1');
                                if (result.control == '光明形态') {
                                    player.group = 'shen';
                                    player.removeSkill('觉醒1');
                                }
                                if (result.control == '黑暗形态') {
                                    player.group = 'yao';
                                    player.removeSkill('觉醒1');
                                }
                            },
                        },
                        光明形态: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'shen';
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/光明.jpg');
                                player.gainMaxHp(2);
                                player.recover(2);
                                player.popup('神');
                                player.addSkill('光翼连斩');
                                player.addSkill('迅烈之华');
                                player.removeSkill('登场台词');
                                player.removeSkill('光明形态');
                                player.removeSkill('强力斩击');
                                var chat = ['这里……是我所统御的战场!', '人生仅有一次的觉醒!'].randomGet();
                                player.say(chat);
                            },
                        },
                        黑暗形态: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'yao';
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/黑暗.jpg');
                                player.gainMaxHp();
                                player.recover();
                                player.popup('妖');
                                player.addSkill('狂暴利刃');
                                player.addSkill('暗影爆发');
                                player.removeSkill('黑暗形态');
                                player.removeSkill('登场台词');
                                player.removeSkill('强力斩击');
                                var chat = ['屠魔的少年终究成魔,而存活最后的魔……做了救世主!', '不会让长安城……将我遗忘!'].randomGet();
                                player.say(chat);
                            },
                        },
                        强力斩击: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                target.damage(1);
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        光翼连斩: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:true',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card, player) {
                                var type = get.type(card);
                                if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                                    if (get.type(i) == type) return false;
                                }
                                return true;
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            selectTarget: [1, 3],
                            selectCard: 3,
                            check(card) {
                                if (_status.event.player.hp == _status.event.player.maxHp) {
                                    return 8 - get.value(card);
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                target.damage(3);
                                player.recover(2);
                                var chat = ['这是最好的时代,这是最坏的时代,我们一无所有,我们巍然屹立!', '长城和长安成之间……是无尽的彷徨.', '长城之上是千亿的星空,星空之上是不灭的守望!'].randomGet();
                                player.say(chat);
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nodamage')) return 0.5;
                                        if (lib.config.mode == 'versus') return -1;
                                        for (var i of game.players) {
                                            if (lib.config.mode == 'identity') {
                                                if (i.ai.shown <= 0.2) return 0;
                                            } else if (lib.config.mode == 'guozhan') {
                                                if (i.identity == 'unknown') return 0;
                                            }
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                    player(player) {
                                        var num = player.num('h');
                                        if (num < 4) return 0;
                                        if (player.isDamaged) {
                                            if (num == 4 && (player.num('h', 'shan') || player.num('h', 'jiu') || player.num('h', 'tao'))) return -0.5;
                                        }
                                        return 0.9;
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        迅烈之华: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = 4;
                                ('step 1');
                                player.useCard({ name: 'sha' }, target, false);
                                player.recover(0.5);
                                ('step 2');
                                if (event.num > 1) {
                                    event.num--;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        狂暴利刃: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.useCard(trigger.card, trigger.targets, false)._triggered = null;
                                player.recover();
                            },
                        },
                        暗影爆发: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                event.list = player.getFriends().sortBySeat();
                                ('step 2');
                                for (var i of game.players) {
                                    if (get.attitude(i, player) <= 0) {
                                        i.addSkill('爆发');
                                        var chat = ['讨厌看到他们离我而去……因为是战友吗!', '血肉之躯,燃烧一次足矣!'].randomGet();
                                        player.say(chat);
                                    }
                                }
                            },
                        },
                        爆发: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.damage();
                                player.chooseToDiscard('h', true);
                                player.removeSkill('爆发');
                            },
                        },
                        复生1: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBegin'],
                            },
                            _priority: -100,
                            filter(event, player) {
                                return event.source != undefined && event.num >= player.hp;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                'step 1';
                                player.draw(10);
                                player.phase('nodelay');
                                player.say('…………………………');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        娘化: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.sex == 'female';
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.node.name.innerHTML = '作<br>者';
                                player.update();
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/女作者.jpg');
                                ui.backgroundMusic.src = 'extension/动漫包/狭间死斗.mp3';
                                player.gainMaxHp(5);
                                player.recover(5);
                                player.popup('神');
                                player.addSkill('萌杀');
                                player.addSkill('神意');
                                player.addSkill('自愈');
                                player.addSkill('复生');
                                player.addSkill('我不高兴!');
                                player.addSkill('滚去轮回!');
                                player.removeSkill('娘化');
                                var chat = ['准备好迎接我的愤怒了吗？', '看来你需要我放首bgm来助助兴!'].randomGet();
                                player.say(chat);
                            },
                        },
                        娘化2: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.sex == 'female';
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.init('桐子');
                                player.update();
                                ui.clear();
                                player.node.name.innerHTML = '';
                                player.update();
                                player.removeSkill('娘化2');
                                var chat = ['噫……不要……', '好奇怪的感觉……'].randomGet();
                                player.say(chat);
                            },
                        },
                        控魂1: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.dead.length;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                player
                                    .chooseButton(ui.create.dialog('选择1名角色复活', [list, 'character']), function (button) {
                                        for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
                                        return get.attitude(_status.event.player, game.dead[i]);
                                    })
                                    .set('ai', function (button) {
                                        return 10;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
                                    var dead = game.dead[i];
                                    dead.revive(dead.maxHp);
                                    dead.draw(dead.maxHp);
                                    if (dead.name !== '秦苏儡') {
                                        dead.init('逝者1');
                                    }
                                    if (dead.name == '作者') {
                                        dead.removeSkill('关于投敌');
                                        dead.removeSkill('觉醒');
                                        dead.group = 'ga';
                                    }
                                    dead.identity = player.identity;
                                    if (dead.identity == 'zhu') dead.identity = 'zhong';
                                    dead.setIdentity('鬼');
                                    dead.node.identity.dataset.color = dead.identity;
                                    var chat = ['为我而战吧……', '死亡不是你的归宿……'].randomGet();
                                    player.say(chat);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        return 12;
                                    },
                                },
                                threaten: 1.6,
                            },
                        },
                        鬼影子: {
                            nobracket: true,
                            trigger: {
                                target: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                trigger.cancel();
                            },
                        },
                        亡者转换: {
                            nobracket: true,
                            trigger: {
                                global: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.player.maxHp < 1) return false;
                                return event.player.identity != 'zhu';
                            },
                            content() {
                                'step 1';
                                trigger.player.identity = player.identity;
                                trigger.player.identityShown = true;
                                var chat = ['为我而战吧……', '死亡不是你的归宿……'].randomGet();
                                player.say(chat);
                            },
                        },
                        控魂2: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.dead.length;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                player
                                    .chooseButton(ui.create.dialog('选择1名角色复活', [list, 'character']), function (button) {
                                        for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
                                        return get.attitude(_status.event.player, game.dead[i]);
                                    })
                                    .set('ai', function (button) {
                                        return 10;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
                                    var dead = game.dead[i];
                                    dead.revive(dead.maxHp);
                                    dead.draw(dead.maxHp);
                                    dead.init('逝者');
                                    dead.identity = player.identity;
                                    if (dead.identity == 'zhu') dead.identity = 'zhong';
                                    dead.setIdentity();
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        return 12;
                                    },
                                },
                                threaten: 1.6,
                            },
                        },
                        关于投敌: {
                            nobracket: true,
                            trigger: {
                                global: 'chooseToUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.name == '萝真';
                            },
                            content() {
                                player.qdie(player);
                                var chat = ['罗真小姐姐听我说,我二段变身很牛逼的,复活我绝对不亏(￣ิ∀ ￣ิ๑)', '罗真小姐姐听我说,我二段变身很牛逼的,复活我分分钟带你上分(￣ิ∀ ￣ิ๑)'].randomGet();
                                player.say(chat);
                            },
                        },
                        亡者归来: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'ga';
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.node.name.innerHTML = '艾<br>伦';
                                player.update();
                                player.popup('鬼');
                                player.gainMaxHp(4);
                                player.recover(4)._triggered = null;
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/飘零人.jpg');
                                ui.backgroundMusic.src = 'extension/动漫包/艾伦.mp3';
                                player.addSkill('我不愿意');
                                player.addSkill('买卖');
                                player.addSkill('SE_mingwang');
                                player.addSkill('亡者世界');
                                player.removeSkill('亡者归来');
                                player.say('一钱银子换一斤麦子,一钱银子换一两酒,油和酒不得糟蹋……');
                            },
                        },
                        我不愿意: {
                            nobracket: true,
                            trigger: {
                                global: ['recoverBefore'],
                            },
                            _priority: 10,
                            forced: true,
                            popup: false,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.say('我不愿意,我不如彷徨于无地.');
                            },
                        },
                        买卖: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'ga';
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.recover()._triggered = null;
                                player.draw(2)._triggered = null;
                            },
                        },
                        登场台词: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                var chat = ['不会让长安城……将我遗忘!', '吾持剑锋,以筑长城!', '背负守护的誓言……必以信诚!'].randomGet();
                                player.say(chat);
                            },
                        },
                        囚禁神明之人: {
                            nobracket: true,
                            trigger: {
                                target: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.group != 'shen') return false;
                                return true;
                            },
                            content() {
                                trigger.finish();
                                trigger.untrigger();
                                player.draw();
                                player.addSkill('囚禁神明之人1');
                                player.removeSkill('囚禁神明之人');
                                ui.backgroundMusic.src = 'extension/动漫包/白夜之笼.mp3';
                                player.say('我能抓住你一次,就能抓住你更多次……');
                            },
                        },
                        囚禁神明之人1: {
                            nobracket: true,
                            trigger: {
                                target: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.group != 'shen') return false;
                                return true;
                            },
                            content() {
                                trigger.finish();
                                trigger.untrigger();
                                player.draw();
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/晏华2.jpg');
                                player.addSkill('囚禁神明之人2');
                                player.removeSkill('囚禁神明之人1');
                                player.say('<我>已经为此尝试了千百万次……');
                            },
                        },
                        囚禁神明之人2: {
                            nobracket: true,
                            trigger: {
                                target: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.group != 'shen') return false;
                                return true;
                            },
                            content() {
                                trigger.finish();
                                trigger.untrigger();
                                player.draw();
                                player.addSkill('狙击神明之人');
                                player.removeSkill('囚禁神明之人2');
                                player.say('那么便不在乎再多上千百万次!');
                            },
                        },
                        狙击神明之人: {
                            nobracket: true,
                            trigger: {
                                target: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.group != 'shen') return false;
                                return true;
                            },
                            content() {
                                trigger.finish();
                                trigger.untrigger();
                                player.draw(5);
                                player.addSkill('狙杀神明的子弹');
                                player.addSkill('狙击神明之人1');
                                player.removeSkill('狙击神明之人');
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/晏华.jpg');
                                player.say('傲慢的神高高在上,自然无法领会芸芸众生的悲喜…………');
                            },
                        },
                        狙杀神明的子弹: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                if (target.group != 'shen') return false;
                                return true;
                            },
                            content() {
                                target.clearSkills();
                                player.removeSkill('狙杀神明的子弹');
                                target.damage(99999999);
                                target.die();
                                ui.backgroundMusic.src = 'extension/动漫包/神明坠落.mp3';
                                player.say('既然无法理解,那你就自己下来看一看吧!');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        引燃贯穿: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 2;
                            },
                            filterCard: {
                                name: 'sha',
                            },
                            selectCard: 3,
                            content() {
                                target.damage('fire', 3);
                                var chat = ['先做好觉悟吧!', '为了守护重要的人,我成为强者.'].randomGet();
                                player.say(chat);
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        业火的箭雨: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            selectTarget: [1, 4],
                            content() {
                                player.say('贯穿万物吧!');
                                ('step 0');
                                event.num = 12;
                                ('step 1');
                                player.useCard({ name: '红莲的箭支' }, target, false);
                                ('step 2');
                                if (event.num > 1) {
                                    event.num--;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        好战: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                player.say('还没完呢!');
                                var list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                var list = ['shan'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        登场: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            _priority: 100,
                            content() {
                                player.removeSkill('登场');
                                ui.backgroundMusic.src = 'extension/动漫包/烟花.mp3';
                                player.say('作战开始,除后方以外不做掩护.');
                            },
                        },
                        红莲之箭痕: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                var list = ['红莲印记'];
                                trigger.player.gain(game.createCard(list.randomGet()));
                                trigger.player.$draw();
                            },
                        },
                        神器解放: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hp > 2) return false;
                                if (player.group != 'yao') return false;
                                return true;
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.addTempSkill('业火的箭雨', 'phaseAfter');
                                player.say('我名为「破天」之濑由衣,神弓啊,射穿万物吧!');
                            },
                        },
                        命悬一线: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            filter(event, player) {
                                return player.countCards('h', 'shan') > 0;
                            },
                            filterCard: {
                                name: 'shan',
                            },
                            selectCard: 1,
                            content() {
                                target.damage();
                                target.link();
                                target.addSkill('眩晕_红莲');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        眩晕_红莲: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                if (player.isLinked()) return false;
                                return true;
                            },
                            content() {
                                player.turnOver();
                                player.removeSkill('眩晕_红莲');
                            },
                        },
                        狙击神明之人1: {
                            nobracket: true,
                            trigger: {
                                target: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.group != 'shen') return false;
                                return true;
                            },
                            content() {
                                trigger.finish();
                                trigger.untrigger();
                                player.draw();
                            },
                        },
                        羽衣2: {
                            enable: 'phaseUse',
                            usable: 3,
                            filter(event, player, storage) {
                                return player.storage.羽衣.length;
                            },
                            alter: true,
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('羽衣:选择一张牌使用', player.storage.羽衣);
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    if (evt && evt.filterCard) {
                                        var type = get.type(button.link, 'trick');
                                        return (type != 'equip') & evt.filterCard(button.link, player, evt);
                                    }
                                    return false;
                                },
                                check(button) {
                                    if (button.link.name == 'du') return -2;
                                    var player = _status.event.player;
                                    if (button.link.name == 'xingjiegoutong' && player.countCards('h') > 1) return -2;
                                    if (get.select(get.info(button.link).selectTarget)[1] == -1) {
                                        if (get.type(button.link) == 'delay') return -1;
                                        if (get.type(button.link) == 'equip') {
                                            var current = player.getCards('e', { subtype: get.subtype(button.link) })[0];
                                            if (current && get.equipValue(current) >= get.equipValue(button.link)) return -1;
                                            return 1;
                                        }
                                        if (get.tag(button.link, 'multitarget')) return -1;
                                        if (button.link.name == 'huoshaolianying') return -1;
                                    }
                                    if (button.link.name == 'jiu') {
                                        if (get.effect(player, { name: 'jiu' }, player) > 0) {
                                            return 1;
                                        }
                                        return -1;
                                    }
                                    return 1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: links[0],
                                        onuse(result, player) {
                                            var 羽衣 = player.getEquip(5);
                                            if (羽衣 && 羽衣.cards) {
                                                羽衣.cards.remove(result.card);
                                                lib.skill.羽衣.sync(羽衣);
                                            }
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '你将' + get.translation(links[0]) + '拿出';
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: result.links[0] };
                                    player.storage.羽衣 = 0;
                                    var 羽衣 = player.getEquip(5);
                                    羽衣.cards.remove(result.links[0]);
                                    lib.skill.羽衣.sync(羽衣);
                                },
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.7,
                            },
                        },
                        羽衣3: {
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                var 羽衣 = player.getEquip(5);
                                if (!羽衣.cards) return false;
                                lib.skill.羽衣.sync(羽衣);
                                for (var i of 羽衣.cards) {
                                    if (event.filterCard && event.filterCard(i, player, event)) return true;
                                }//QQQ
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseButton(['羽衣', player.getEquip(5).cards])
                                    .set('filterButton', function (button) {
                                        var evt = _status.event.getTrigger();
                                        if (evt && evt.filterCard) {
                                            return evt.filterCard(button.link, _status.event.player, evt);
                                        }
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var evt = _status.event.getTrigger();
                                        if (evt && evt.ai) {
                                            var tmp = _status.event;
                                            _status.event = evt;
                                            var result = evt.ai(button.link, _status.event.player, evt);
                                            _status.event = tmp;
                                            return result;
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: result.links[0] };
                                    var 羽衣 = player.getEquip(5);
                                    羽衣.cards.remove(result.links[0]);
                                    lib.skill.羽衣.sync(羽衣);
                                }
                            },
                            ai: {
                                order: 4,
                                useful: -1,
                                value: -1,
                            },
                        },
                        贽殿遮那: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                if (player.hasSkill('火焰战翼2')) {
                                    var num = 2;
                                } else {
                                    var num = 1;
                                }
                                trigger.player.damage('fire', num);
                            },
                        },
                        火焰战翼: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            filterCard: true,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            selectCard: 1,
                            content() {
                                player.addTempSkill('火焰战翼2', 'phaseBegin');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        火焰战翼2: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                                globalTo(from, to, distance) {
                                    return distance + Infinity;
                                },
                            },
                        },
                        空灵: {
                            trigger: {
                                player: 'gainBefore',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                trigger.cancel();
                                player.removeSkill('空灵');
                            },
                        },
                        封绝3: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 2;
                            },
                            filterCard: true,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            selectCard: 3,
                            content() {
                                player.phase('nodelay');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        保存: {
                            intro: {
                                content: 'cards',
                            },
                            enable: 'phaseUse',
                            filter(event, player, storage) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: true,
                            init(player) {
                                player.storage.羽衣 = [];
                            },
                            content() {
                                player.lose(event.cards, ui.special);
                                player.storage.羽衣 = player.storage.羽衣.concat(event.cards);
                                player.markSkill('羽衣');
                                game.log(player, '将', event.cards, '放入了羽衣');
                            },
                        },
                        阿里托利亚的羽衣: {
                            nobracket: true,
                            group: ['羽衣11', '羽衣10', '保存'],
                        },
                        羽衣10: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.storage.羽衣.length;
                            },
                            alter: true,
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('羽衣:选择一张牌使用', player.storage.羽衣);
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    if (evt && evt.filterCard) {
                                        return evt.filterCard(button.link, player, evt);
                                    }
                                    return false;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: links[0],
                                        onuse(result, player) {
                                            var card = links[0];
                                            player.storage.羽衣.remove(card);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '请选择' + get.translation(links[0]) + '的目标';
                                },
                            },
                            ai: {
                                save: true,
                                sha: true,
                                order: 12,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.7,
                            },
                        },
                        羽衣11: {
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.羽衣.length;
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton('羽衣:选择一张卡牌打出', player.storage.羽衣).set('filterButton', function (button) {
                                    return _status.event.getTrigger().filterCard(button.link, player);
                                });
                                ('step 1');
                                if (result.bool) {
                                    game.log(player, '羽衣发动成功');
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    player.storage.羽衣.remove(result.links[0]);
                                    trigger.result = { bool: true, card: result.links[0] };
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                            },
                        },
                        吞噬者: {
                            nobracket: true,
                            group: '吞噬者2',
                            enable: 'phaseUse',
                            filter(event, player, storage) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: true,
                            init(player) {
                                player.storage.吞噬者 = [];
                            },
                            content() {
                                player.lose(event.cards, ui.special);
                                player.storage.吞噬者 = player.storage.吞噬者.concat(event.cards);
                                player.recover(1);
                                game.log(player, '吃掉了', event.cards);
                            },
                        },
                        大贤者: {
                            nobracket: true,
                            group: ['大贤者回合外', '大贤者创造', '大贤者_清除'],
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                var num = 0;
                                if (player.getStat().skill.大贤者创造) {
                                    num += player.getStat().skill.大贤者创造;
                                }
                                if (player.getStat().skill.大贤者回合外) {
                                    num += player.getStat().skill.大贤者回合外;
                                }
                                if (player.getStat().skill.大贤者) {
                                    num += player.getStat().skill.大贤者;
                                }
                                if (num >= 4 || player.storage.吞噬者.length <= 0 || player.countCards('h') <= 0) return false;
                                return true;
                            },
                            alter: true,
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('大贤者:选择一张牌转换', player.storage.吞噬者);
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    if (evt && evt.filterCard) {
                                        var type = get.type(button.link, 'trick');
                                        return (type != 'equip') & evt.filterCard(button.link, player, evt);
                                    }
                                    return false;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        selectCard: 1,
                                        viewAs: {
                                            name: links[0].name,
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张手牌当作' + get.translation(links[0]) + '使用';
                                },
                            },
                            subSkill: {
                                清除: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        if (player.getStat().skill.大贤者创造) {
                                            player.getStat().skill.大贤者创造 = 0;
                                        }
                                        if (player.getStat().skill.大贤者回合外) {
                                            player.getStat().skill.大贤者回合外 = 0;
                                        }
                                        if (player.getStat().skill.大贤者) {
                                            player.getStat().skill.大贤者 = 0;
                                        }
                                    },
                                    popup: false,
                                },
                            },
                            ai: {
                                save: true,
                                sha: true,
                                order: 12,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.7,
                            },
                        },
                        变身者: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                if (player.storage.吞噬者2) {
                                    player.chooseButton(ui.create.dialog(player.storage.吞噬者2));
                                }
                                ('step 1');
                                if (result.bool) {
                                    var skills = result.buttons[0].link.skills;
                                    player.setAvatar('利姆露', result.buttons[0].link.name);
                                    player.addAdditionalSkill('变身者', skills);
                                } else {
                                    player.chooseControl('史莱姆', '静', 'cancel2');
                                }
                                ('step 2');
                                if (result.control == '史莱姆') {
                                    player.removeAdditionalSkill('变身者');
                                    player.setAvatar('利姆露', '利姆露');
                                }
                                if (result.control == '静') {
                                    player.removeAdditionalSkill('变身者');
                                    player.node.avatar.setBackgroundImage('extension/动漫包/image/萌王静.jpg');
                                }
                            },
                        },
                        吞噬者2: {
                            nobracket: true,
                            trigger: {
                                global: 'dieAfter',
                            },
                            _priority: 10,
                            content() {
                                if (!player.storage.吞噬者2) {
                                    player.storage.吞噬者2 = [];
                                }
                                player.storage.吞噬者2.add(trigger.player);
                                game.removePlayer(trigger.player);
                                game.log(player, '吃掉了', trigger.player);
                            },
                        },
                        大贤者回合外: {
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            filter(event, player) {
                                var num = 0;
                                if (player.getStat().skill.大贤者创造) {
                                    num += player.getStat().skill.大贤者创造;
                                }
                                if (player.getStat().skill.大贤者回合外) {
                                    num += player.getStat().skill.大贤者回合外;
                                }
                                if (player.getStat().skill.大贤者) {
                                    num += player.getStat().skill.大贤者;
                                }
                                if (num >= 4 || player.storage.吞噬者.length <= 0 || player.countCards('h') <= 0) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardButton('大贤者:选择一张卡牌转换', player.storage.吞噬者).set('filterButton', function (button) {
                                    return _status.event.getTrigger().filterCard(button.link, player);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.大贤者 = result.links[0];
                                    player.chooseCard(get.prompt('大贤者'), 'h');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.lose(result.cards, ui.special);
                                    player.$throw(result.cards);
                                    game.log(player, '发动了大贤者');
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: player.storage.大贤者 };
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                            },
                        },
                        大贤者创造: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num = 0;
                                if (player.getStat().skill.大贤者创造) {
                                    num += player.getStat().skill.大贤者创造;
                                }
                                if (player.getStat().skill.大贤者回合外) {
                                    num += player.getStat().skill.大贤者回合外;
                                }
                                if (player.getStat().skill.大贤者) {
                                    num += player.getStat().skill.大贤者;
                                }
                                if (num >= 4 || player.storage.吞噬者.length <= 0 || player.countCards('h') <= 0) return false;
                                return true;
                            },
                            filterCard: true,
                            selectCard: 1,
                            discard: false,
                            lose: false,
                            content() {
                                'step 0';
                                player.chooseButton(['大贤者:选择一张牌创造并获得之', [player.storage.吞噬者, 'vcard']]).set('filterButton', function (button, player) {
                                    var evt = _status.event.parent;
                                    if (evt) {
                                        var type = get.type(button.link, 'equip');
                                        return type == 'equip';
                                    }
                                    return false;
                                });
                                ('step 1');
                                if (result.bool && result.links && result.links.length) {
                                    player.discard(event.cards);
                                    var list = [];
                                    for (var i of result.links) {
                                        list.push(game.createCard(i));
                                    }
                                    player.gain(list, 'draw');
                                } else {
                                    player.getStat().skill.大贤者创造--;
                                }
                            },
                        },
                        疯狂: {
                            init(player) {
                                player.storage.疯狂 = game.roundNumber;
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.roundNumber - player.storage.疯狂 >= 3;
                            },
                            content() {
                                'step 0';
                                player.die();
                                ('step 1');
                                if (player.isAlive()) {
                                    player.loseHp(player.maxHp);
                                    player.loseMaxHp(true);
                                    player.damage();
                                }//QQQ
                            },
                        },
                        夺魂者: {
                            nobracket: true,
                            gainable: true,
                            trigger: {
                                global: 'dieEnd',
                            },
                            forced: true,
                            _priority: 5,
                            filter(event, player) {
                                return event.playerCards && event.playerCards.length && event.player.hasSkill('疯狂');
                            },
                            content() {
                                'step 0';
                                var chat = ['新的收藏品………呵呵呵……', '你该还点利息了吧———'].randomGet();
                                player.say(chat);
                                ('step 1');
                                var list = trigger.player.skills;
                                list.remove('疯狂');
                                player.addSkill(list);
                                player.gain(trigger.playerCards);
                                player.$draw(trigger.playerCards);
                                ('step 2');
                                for (var i = 0; i < trigger.playerCards.length; i++) {
                                    trigger.cards.remove(trigger.playeri);
                                }
                                trigger.playerCards.length = 0;
                            },
                        },
                        赤红之力: {
                            nobracket: true,
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 100,
                            filter(event, player) {
                                return !event.player.hasSkill('疯狂');
                            },
                            content() {
                                var target = _status.event.getTrigger().player;
                                target.addSkill('疯狂');
                                if (target.name == '萝真') {
                                    target.removeSkill('疯狂');
                                    var chat = ['喂!喂!喂!不准动我的罗真!!!', '伤了我的罗真,你就拿命来补吧!!!'].randomGet();
                                    player.say(chat);
                                }
                                if (target !== player && target.name !== '萝真') {
                                    var chat = ['看来你需要帮助啊…呵呵……', '要我帮你吗？……这是可是<无偿>的哦!'].randomGet();
                                    player.say(chat);
                                }
                                if (target == player) {
                                    var chat = ['你以为能杀的死我？', '杀神？!呵!不自量力!!!'].randomGet();
                                    player.say(chat);
                                }
                                target.hp = target.maxHp;
                                target.draw(5 - target.countCards('h'));
                            },
                            group: ['赤红之力_刷新', '赤红之力_受伤'],
                            subSkill: {
                                受伤: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source && event.source.hasSkill('疯狂') && event.source != player && event.num > 0 && event.source.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        trigger.source.die();
                                        var chat = ['赤红!听从我的号令!!!', '去死吧………'].randomGet();
                                        player.say(chat);
                                        ('step 1');
                                        if (trigger.source.isAlive()) {
                                            trigger.source.loseHp(trigger.source.maxHp);
                                            trigger.source.loseMaxHp(true);
                                            trigger.source.damage();//QQQ
                                        }
                                    },
                                },
                                刷新: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeSkill('疯狂');
                                    },
                                },
                            },
                        },
                        深渊混沌: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var a = [10];
                                if (game.roundNumber == a) return true;
                                return false;
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.node.name.innerHTML = '深<br>渊<br>混<br>沌';
                                player.update();
                                player.popup('神');
                                player.setAvatar('作者', '深渊混沌');
                                player.addSkill('万剑齐发');
                                player.addSkill('扩散');
                                player.removeSkill('深渊混沌');
                                ui.backgroundMusic.src = 'extension/动漫包/这是我主宰的游戏.mp3';
                                player.say('混沌的可能性只有混沌,但深渊呢？!');
                            },
                        },
                        天破壤碎: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.getStat('damage') >= 3;
                            },
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                ('step 1');
                                if (event.targets.length) {
                                    var cur = event.targets.shift();
                                    cur.addSkill('空灵');
                                    if (cur && cur.countCards('he')) {
                                        cur.chooseToDiscard('he', true, Infinity);
                                    }
                                    event.redo();
                                }
                                ('step 2');
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                ('step 3');
                                if (event.targets.length) {
                                    event.targets.shift().damage(3, 'fire');
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        快晴: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.num && event.source && event.player && event.player.isAlive() && event.source.isAlive() && event.source != event.player;
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
                                player.say('啊…又是新的一天.(喝茶)');
                                ('step 2');
                                const evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                                player.phase('nodelay');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        治退: {
                            nobracket: true,
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            audio: 'ext:动漫包/audio:true',
                            filter(event, player) {
                                return player.countCards('he') > 2 && event.target.isAlive();
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(get.prompt('治退'), 2, 'he', function (card) {
                                    return _status.event.player.getCards('e', { subtype: 'equip1' }).includes(card) == false;
                                });
                                next.set('ai', function (card) {
                                    var evt = _status.event.parent;
                                    if (get.attitude(evt.player, evt._trigger.target) < 0) {
                                        if (evt.player.hasSkill('jiu') || evt.player.hasSkill('tianxianjiu') || evt._trigger.target.hp == 1) {
                                            return 8 - get.value(card);
                                        }
                                        return 5 - get.value(card);
                                    }
                                    return -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.untrigger();
                                    trigger.trigger('shaHit');
                                    trigger._result.bool = false;
                                }
                            },
                        },
                        擦弹: {
                            nobracket: true,
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player)) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 1';
                                player.chooseToUse();
                            },
                        },
                        火免: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.tag(card, 'fireDamage')) {
                                            return [0, 2];
                                        }
                                    },
                                },
                            },
                        },
                        祸灵梦: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'yao';
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.node.name.innerHTML = '祸<br>灵<br>梦';
                                player.update();
                                player.popup('妖');
                                player.gainMaxHp(5);
                                player.recover(99999);
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/祸灵梦.jpg');
                                player.addSkill('激昂');
                                player.addSkill('北斗有情破颜拳');
                                player.addSkill('障祸咒烙印');
                                player.addSkill('绝境');
                                player.removeSkill('祸灵梦');
                                player.removeSkill('快晴');
                                player.removeSkill('治退');
                                var chat = ['吾等为地下的神罚者……', '力量就是正义、真是个好时代啊……'].randomGet();
                                player.say(chat);
                            },
                        },
                        障祸咒烙印: {
                            trigger: {
                                source: 'damageAfter',
                            },
                            filter(event, player) {
                                return Math.random() <= 0.8;
                            },
                            forced: true,
                            content() {
                                trigger.player.damage();
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && player != target) {
                                        return false;
                                    }
                                },
                                targetInRange() {
                                    return true;
                                },
                            },
                            group: ['障祸咒烙印_a'],
                            subSkill: {
                                a: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && Math.random() <= 0.05;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.damage(Infinity);
                                        ('step 1');
                                        trigger.player.die();
                                    },
                                },
                            },
                        },
                        北斗有情破颜拳: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                target.damage('fire', 999);
                                target.die();
                                player.removeSkill('北斗有情破颜拳');
                                player.say('生命是可以随便舍弃的东西(划掉)');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        四大灵梦: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('祸灵梦', '鬼巫女', '白灵梦', function () {
                                        if (result.control == '祸灵梦') return -10;
                                        if (result.control == '鬼巫女') return 5;
                                        if (result.control == '白灵梦') return 20;
                                    })
                                    .set('prompt', '选择一个形态');
                                ('step 1');
                                if (result.control == '祸灵梦') {
                                    player.group = 'yao';
                                    player.removeSkill('四大灵梦');
                                }
                                if (result.control == '鬼巫女') {
                                    player.group = 'ga';
                                    player.removeSkill('四大灵梦');
                                }
                                if (result.control == '白灵梦') {
                                    player.group = 'shen';
                                    player.removeSkill('四大灵梦');
                                }
                            },
                        },
                        必中: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        亡语: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            silent: true,
                            forced: true,
                            content() {
                                'step 0';
                                var yi = '不……';
                                player.say(yi);
                                ('step 1');
                                var er = '我还不能这么结束……';
                                player.say(er);
                                ('step 2');
                                var yi = '还不能这么结束……';
                                player.say(yi);
                                ('step 3');
                                var yi = '不能这么结束……';
                                player.say(yi);
                                ('step 4');
                                var yi = '不能………';
                                player.say(yi);
                                player.addSkill('难以置信');
                            },
                            popup: false,
                        },
                        难以置信: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'qun';
                            },
                            content() {
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/活死人.jpg');
                                player.addSkill('亡语2');
                                player.removeSkill('觉醒');
                                player.removeSkill('难以置信');
                                player.removeSkill('亡语');
                                ('step 0');
                                var hh = '难以置信……';
                                player.say(hh);
                                ('step 1');
                                var er = '我居然复活了……';
                                player.say(er);
                                ('step 2');
                                var gg = '不……等等……好像有什么地方不对……';
                                player.say(gg);
                                ('step 3');
                                var yy = '有什么地方不对……';
                                player.say(yy);
                                ui.backgroundMusic.src = 'extension/动漫包/被生命所厌恶.mp3';
                            },
                            popup: false,
                        },
                        亡语2: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            silent: true,
                            forced: true,
                            content() {
                                'step 0';
                                var yi = '啊……身体好重……';
                                player.say(yi);
                                ('step 1');
                                var er = '又要死了吗……';
                                player.say(er);
                                ('step 2');
                                var yi = '好痛……';
                                player.say(yi);
                                ('step 3');
                                var yi = '啊……';
                                player.say(yi);
                                ('step 4');
                                var yi = '就这样死掉也不错了吧……';
                                player.say(yi);
                                player.addSkill('救命');
                            },
                            popup: false,
                        },
                        救命: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'qun';
                            },
                            content() {
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/救我…….jpg');
                                player.addSkill('亡语3');
                                player.removeSkill('救命');
                                player.removeSkill('亡语2');
                                ('step 0');
                                var yi = '咳咳……';
                                player.say(yi);
                                ('step 1');
                                var aa = '怎么还没有死掉……';
                                player.say(aa);
                                ('step 2');
                                var bb = '咳……不……不……你们不要再来杀我了啊……';
                                player.say(bb);
                                ('step 3');
                                var cc = '救命啊……谁都行……救救我啊……';
                                player.say(cc);
                                ('step 4');
                                var dd = '谁都行……';
                                player.say(dd);
                                ('step 5');
                                var ee = '救救我啊……';
                                player.say(ee);
                            },
                            popup: false,
                        },
                        亡语3: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            silent: true,
                            forced: true,
                            content() {
                                'step 0';
                                var yi = '啊啊啊啊啊……';
                                player.say(yi);
                                ('step 1');
                                var er = '啊啊啊……谁……啊……';
                                player.say(er);
                                ('step 2');
                                var yi = '来救救我啊……谁都好……';
                                player.say(yi);
                                ('step 3');
                                var yi = '啊啊……没有人吗？';
                                player.say(yi);
                                ('step 4');
                                var yi = '没有人吗？';
                                player.say(yi);
                                ('step 5');
                                var yi = '呜呜呜呜呜……没有人吗……';
                                player.say(yi);
                                ('step 6');
                                var yi = '没有人啊……';
                                player.say(yi);
                                ('step 7');
                                var yi = '一个人都没有啊……';
                                player.say(yi);
                                ('step 8');
                                var yi = '呜呜呜呜呜……没有人啊……';
                                player.say(yi);
                                ('step 9');
                                var yi = '你们……到底要折磨我多少次才肯罢休……';
                                player.say(yi);
                                ('step 10');
                                var yi = '这该死的世界……';
                                player.say(yi);
                                ('step 11');
                                var yi = '我诅咒你们!';
                                player.say(yi);
                                ('step 12');
                                var yi = '诅咒你们!!!';
                                player.say(yi);
                                ('step 13');
                                var yi = '当我重临世界之……';
                                player.say(yi);
                                player.addSkill('黑化');
                            },
                            popup: false,
                        },
                        黑化: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'qun';
                            },
                            content() {
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/未亡人.jpg');
                                player.addSkill('激昂');
                                player.addSkill('障祸咒烙印');
                                player.addSkill('绝境');
                                player.addSkill('狂暴利刃');
                                player.addSkill('打野');
                                player.addSkill('必中');
                                player.addSkill('不灭之身');
                                player.removeSkill('黑化');
                                player.removeSkill('亡语3');
                                ('step 0');
                                var hh = '呵……';
                                player.say(hh);
                                ('step 1');
                                var er = '呵呵呵呵呵……';
                                player.say(er);
                                ('step 2');
                                var jj = '哈哈哈哈哈哈哈哈哈……';
                                player.say(jj);
                                ('step 3');
                                var kk = '力量就是正义,这可真是个好时代啊……';
                                player.say(kk);
                                ('step 4');
                                var tt = '嘛……上次死的太快了……';
                                player.say(tt);
                                ('step 5');
                                var ccf = '好像有句话还没有说完……';
                                player.say(ccf);
                                ('step 6');
                                var oo = '是哪句话呢？让我想想……';
                                player.say(oo);
                                ('step 7');
                                var ww = '哈……想起来了!';
                                player.say(ww);
                                ('step 8');
                                var uu = '当我重临世界之日……';
                                player.say(uu);
                                ('step 9');
                                var ii = '诸逆臣皆当死去!';
                                player.say(ii);
                                ui.backgroundMusic.src = 'extension/动漫包/这是我主宰的游戏.mp3';
                            },
                            popup: false,
                        },
                        布局: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            enable: 'phaseUse',
                            forced: true,
                            audio: 'ext:动漫包/audio:2',
                            init(player) {
                                player.storage.布局 = [];
                                player.storage.布局2 = [];
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            intro: {
                                content: 'cards',
                                mark(dialog, content, player) {
                                    if (content && content.length) {
                                        dialog.addAuto(content);
                                        if (player.isUnderControl(true)) {
                                            var str = '';
                                            for (var i = 0; i < player.storage.布局2.length; i++) {
                                                str += get.translation(player.storage.布局2[i]);
                                                if (i < player.storage.布局2.length - 1) {
                                                    str += '、';
                                                }
                                            }
                                            dialog.add('<div class="text center">' + str + '</div>');
                                        }
                                    }
                                },
                            },
                            content() {
                                'step 0';
                                var list1 = [],
                                    list2 = [],
                                    list3 = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var type = get.type(lib.inpile[i]);
                                    if (type == 'basic') {
                                        list1.push(['基本', '', lib.inpile[i]]);
                                    } else if (type == 'trick') {
                                        list2.push(['锦囊', '', lib.inpile[i]]);
                                    } else if (type == 'delay') {
                                        list3.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                }
                                player
                                    .chooseButton([get.prompt('布局'), [list1.concat(list2).concat(list3), 'vcard']])
                                    .set('filterButton', function (button) {
                                        var player = _status.event.player;
                                        if (player.storage.布局2 && player.storage.布局2.includes(button.link[2])) return false;
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var rand = _status.event.rand * 2;
                                        switch (button.link[2]) {
                                            case 'sha':
                                                return 5 + rand[1];
                                            case 'tao':
                                                return 4 + rand[2];
                                            case 'lebu':
                                                return 3 + rand[3];
                                            case 'shan':
                                                return 4.5 + rand[4];
                                            case 'wuzhong':
                                                return 4 + rand[5];
                                            case 'shunshou':
                                                return 3 + rand[6];
                                            case 'nanman':
                                                return 2 + rand[7];
                                            case 'wanjian':
                                                return 2 + rand[8];
                                            default:
                                                return rand[9];
                                        }
                                    })
                                    .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()], Math.random());
                                ('step 1');
                                if (result.bool) {
                                    player.storage.布局2.push(result.links[0][2]);
                                    player.chooseCard('h', '选择一张手牌作为<局>', true);
                                    if (player.isOnline2()) {
                                        player.send(function (storage) {
                                            game.me.storage.布局2 = storage;
                                        }, player.storage.布局2);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    player.lose(card, ui.special);
                                    player.storage.布局.push(card);
                                    player.markSkill('布局');
                                    player.$give(card, player);
                                    var chat = ['这便是布局的开始……', '成功几率小于5成的赌博,我拒绝参加.', '没设计什么……(转头)', '没错,我们就是要去当军火商和恐怖分子.', '为什么恨？为什么我要恨你？', '算了,没必要和你解释这些.', '没有阴谋,也没有背背山.', '思考计谋策略这些是很累人的', '要活下去才能成为伙伴.', '你考虑太多人性了.', '良心过意不去？需要我给你做些心理辅导吗？', '如果你的心已经被弄脏了,你还愿意活下去吗？', '没有什么是真正的对,也没有什么是真的错,你想的太多了……', '你唯一做错的一件事情,就是一视同仁了……', '你考虑太多人性了.'].randomGet();
                                    player.say(chat);
                                }
                            },
                            group: ['布局2'],
                        },
                        布局2: {
                            trigger: {
                                global: ['useCard', 'respondEnd'],
                            },
                            _priority: 15,
                            filter(event, player) {
                                if (_status.currentPhase == player) return false;
                                if (event.name == 'respond') {
                                    if (event.getParent(2).name != 'sha') return false;
                                }
                                return player.storage.布局2 && player.storage.布局2.includes(event.card.name);
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var effect = 0;
                                if (trigger.card.name == 'wuxie' || trigger.name == 'respond') {
                                    if (get.attitude(player, trigger.player) < -1) {
                                        effect = -1;
                                    }
                                } else if (trigger.targets && trigger.targets.length) {
                                    for (var i = 0; i < trigger.targets.length; i++) {
                                        effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                    }
                                }
                                var str = '布局:是否令' + get.translation(trigger.player);
                                if (trigger.targets && trigger.targets.length) {
                                    str += '对' + get.translation(trigger.targets);
                                }
                                str += '的' + get.translation(trigger.card) + '失效？';
                                var next = player.chooseBool(str, function () {
                                    var player = _status.event.player;
                                    var trigger = _status.event.getTrigger();
                                    if (_status.event.effect < 0) {
                                        if (trigger.card.name == 'sha') {
                                            var target = trigger.targets[0];
                                            if (target == player) {
                                                return !player.countCards('h', 'shan');
                                            } else {
                                                return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
                                            }
                                        } else {
                                            return true;
                                        }
                                    }
                                    return false;
                                });
                                next.set('effect', effect);
                                ('step 1');
                                if (result.bool) {
                                    var index = player.storage.布局2.indexOf(trigger.card.name);
                                    if (index != -1) {
                                        var card = player.storage.布局[index];
                                        card.discard();
                                        player.$throw(card);
                                        player.storage.布局.splice(index, 1);
                                        player.storage.布局2.splice(index, 1);
                                        if (player.storage.布局.length == 0) {
                                            player.unmarkSkill('布局');
                                        } else {
                                            player.markSkill('布局');
                                            if (player.isOnline2()) {
                                                player.send(function (storage) {
                                                    game.me.storage.布局2 = storage;
                                                }, player.storage.布局2);
                                            }
                                        }
                                    }
                                    if (trigger.name == 'respond') {
                                        if (trigger.parent.result) {
                                            trigger.parent.result.bool = false;
                                        }
                                    } else {
                                        trigger.cancel();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                game.broadcastAll(ui.clear);
                                var chat = ['这就是凡人的智慧.', '没错,我是故意的.', '没有阴谋.', '额……我骗你的.', '我只是想找个安静的地方看星星罢了.', '基本情况就是这样了.', '如果你无法保护好他们,那就让他们死掉好了.', '怎么可能……我是那种人吗？', '我不是在和你商量,这是命令,懂吗？', '还是喜欢吃颜色好看的食物啊.'].randomGet();
                                player.say(chat);
                            },
                            ai: {
                                threaten: 1.8,
                                expose: 0.3,
                            },
                        },
                        情报收集: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(5);
                            },
                        },
                        伪装: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.node.name.innerHTML = '孙<br>笨';
                                player.update();
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/sunce.jpg');
                                player.addSkill('激昂');
                                player.addSkill('魂姿');
                                player.removeSkill('伪装');
                            },
                        },
                        魂姿: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp <= 1;
                            },
                            content() {
                                player.gainMaxHp(2);
                                player.node.name.innerHTML = 'A<br>哥';
                                player.update();
                                player.setAvatar('A哥', 'A哥');
                                player.addSkill('吞噬者');
                                player.addSkill('临界点状态');
                                player.addSkill('充能护盾');
                                player.addSkill('致命痛楚');
                                player.addSkill('变身3');
                                player.removeSkill('激昂');
                                player.removeSkill('魂姿');
                            },
                        },
                        变身3: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                if (player.storage.吞噬者2) {
                                    player.chooseButton(ui.create.dialog(player.storage.吞噬者2));
                                }
                                ('step 1');
                                if (result.bool) {
                                    var skills = result.buttons[0].link.skills;
                                    player.setAvatar('A哥', result.buttons[0].link.name);
                                    player.addAdditionalSkill('变身3', skills);
                                } else {
                                    player.chooseControl('A哥', '孙策', 'cancel2');
                                }
                                ('step 2');
                                if (result.control == 'A哥') {
                                    player.removeAdditionalSkill('变身3');
                                    player.setAvatar('A哥', 'A哥');
                                }
                                if (result.control == '孙策') {
                                    player.removeAdditionalSkill('变身3');
                                    player.node.avatar.setBackgroundImage('extension/动漫包/image/sunce.jpg');
                                }
                            },
                        },
                        充能护盾: {
                            nobracket: true,
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player)) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                player.changeHujia();
                            },
                            group: '充能护盾_能量回流',
                            subSkill: {
                                能量回流: {
                                    trigger: {
                                        player: 'damageZero',
                                    },
                                    filter(event, player) {
                                        return event.hujia;
                                    },
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hujia) {
                                        return 0.5;
                                    } else {
                                        return 2;
                                    }
                                },
                            },
                        },
                        致命痛楚: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.hp >= 5;
                            },
                            filterCard: true,
                            discard: false,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 0');
                                player.loseHp(2);
                                ('step 1');
                                if (Math.random() <= 1) {
                                    target.damage(3)._triggered = null;
                                }
                                event.num++;
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        临界点状态: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            silent: true,
                            forced: true,
                            content() {
                                player.phase('nodelay');
                                player.addSkill('千万触须终结一切');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                            popup: false,
                        },
                        千万触须终结一切: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.hp <= 1;
                            },
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                event.players.remove(player);
                                ('step 1');
                                if (event.players.length) {
                                    event.players.shift().damage(2);
                                    event.redo();
                                    player.removeSkill('千万触须终结一切');
                                }
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        鬼巫女: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'ga';
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.node.name.innerHTML = '鬼<br>巫<br>女';
                                player.update();
                                player.popup('鬼');
                                player.gainMaxHp(5);
                                player.recover(99999);
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/鬼巫女.jpg');
                                player.addSkill('激昂');
                                player.addSkill('必中');
                                player.addSkill('概念「绝对干涉」');
                                player.addSkill('魔神死狂');
                                player.addSkill('绝境');
                                player.removeSkill('鬼巫女');
                                player.removeSkill('快晴');
                                player.removeSkill('治退');
                                player.say('交钱!不交钱就死!交了也得死!(划掉)');
                            },
                        },
                        魔神死狂: {
                            nobracket: true,
                            trigger: {
                                player: 'respond',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 1';
                                trigger.source.die();
                                trigger.source.update();
                                player.say('不交钱的混蛋全都给我去死吧!');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        '概念「绝对干涉」': {
                            trigger: {
                                player: 'dieBegin',
                            },
                            silent: true,
                            forced: true,
                            content() {
                                {
                                    if (lib.config.mode == 'identity') {
                                        if (player != game.me && player.identity != game.me.identity) {
                                            if ((player.identity == 'zhu' && game.me.identity != 'zhong') || (player.identity == 'zhong' && game.me.identity != 'zhu')) game.forceOver(false);
                                            else game.forceOver(true);
                                        } else {
                                            game.forceOver(true);
                                        }
                                    } else {
                                        if (player != game.me && player.identity != game.me.identity) {
                                            game.forceOver(false);
                                        } else {
                                            game.forceOver(true);
                                        }
                                    }
                                }
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                            popup: false,
                        },
                        纸最下: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num = 0;
                                trigger.player.addSkill('抱头蹲防');
                            },
                        },
                        白丽阴阳玉: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                target.die();
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        白丽灵梦: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'shen';
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.node.name.innerHTML = '白<br>丽<br>灵<br>梦';
                                player.update();
                                player.popup('神');
                                player.loseMaxHp(3);
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/白丽灵梦.jpg');
                                player.addSkill('纸最下');
                                player.addSkill('白丽阴阳玉');
                                player.removeSkill('白丽灵梦');
                                player.removeSkill('快晴');
                                player.removeSkill('梦想封印');
                                player.removeSkill('治退');
                                player.removeSkill('擦弹');
                            },
                        },
                        祭礼之蛇: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.storage.祭礼之蛇 && player.maxHp >= 8 && !player.storage.零时迷子;
                            },
                            init(player) {
                                player.storage.祭礼之蛇 = false;
                            },
                            content() {
                                player.awakenSkill('祭礼之蛇');
                                player.storage.祭礼之蛇 = true;
                                player.addSkill('黑天死炎');
                                player.addSkill('红世之王');
                            },
                        },
                        零时迷子: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            intro: {
                                content: '自在师约翰打造的传说中的宝具,到达零时之时零时迷子会回复你所有的存在之力,只不过这个宝具似乎有点怪怪的的感觉',
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                player.draw(player.maxHp - player.countCards('h'));
                                player.markSkill('零时迷子');
                            },
                            group: ['零时迷子_寄藏之灵'],
                            subSkill: {
                                寄藏之灵: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    _priority: 10,
                                    forced: true,
                                    filter(event, player) {
                                        return !player.storage.零时迷子 && !player.storage.祭礼之蛇;
                                    },
                                    content() {
                                        player.node.name.innerHTML = '约<br>翰';
                                        player.update();
                                        player.hp = player.maxHp;
                                        player.removeSkill('能力扩充');
                                        player.addSkill('自在术');
                                        player.storage.零时迷子 = true;
                                    },
                                },
                            },
                        },
                        自在术: {
                            nobracket: true,
                            group: '自在术_清除',
                            init(player) {
                                player.storage.自在术 = [];
                            },
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            alter: true,
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i in lib.card) {
                                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                                        if (lib.card[i].type == 'trick') {
                                            list.push(i);
                                        }
                                    }
                                    for (var i = 0; i < player.storage.自在术.length; i++) {
                                        list.remove(player.storage.自在术[i]);
                                    }
                                    for (var i = 0; i < list.length; i++) {
                                        list[i] = ['锦囊', '', list[i]];
                                    }
                                    return ui.create.dialog([list, 'vcard']);
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: false,
                                        selectCard: 1,
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                        onuse(result, player) {
                                            player.storage.自在术.push(result.card.name);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张手牌当作' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            subSkill: {
                                清除: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return game.roundNumber !== player.storage.自在术2;
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        player.storage.自在术2 = game.roundNumber;
                                        player.storage.自在术 = [];
                                    },
                                    popup: false,
                                },
                            },
                        },
                        能力扩充: {
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.original == 'h') return true;
                                }
                                return false;
                            },
                            content() {
                                player.gainMaxHp();
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
                        黑天死炎: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                trigger.player.loseMaxHp(trigger.num, true);
                            },
                        },
                        红世之王: {
                            nobracket: true,
                            trigger: {
                                player: 'turnOverBefore',
                            },
                            forced: true,
                            content() {
                                trigger.finish();
                                trigger.untrigger();
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && player != target) {
                                        return false;
                                    }
                                },
                                wuxieRespondable(card, player, target, current) {
                                    if (player != current) {
                                        return false;
                                    }
                                },
                            },
                            ai: {
                                norespond: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'norespond' && Array.isArray(arg)) {
                                        return true;
                                    }
                                },
                            },
                        },
                        四方斩: {
                            init(player) {
                                player.storage.四方斩 = 0;
                            },
                            trigger: {
                                source: 'damageBefore',
                            },
                            nobracket: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.num('e', { subtype: 'equip1' }) == 1;
                            },
                            content() {
                                'step 0';
                                if (player.storage.四方斩 == 1) {
                                    var es = trigger.target.getCards('e');
                                    if (es.length) {
                                        trigger.target.discard(es);
                                    }
                                }
                                if (player.storage.四方斩 == 0) {
                                    player.draw();
                                }
                                if (player.storage.四方斩 == 3) {
                                    player.phase('nodelay');
                                }
                                if (player.storage.四方斩 == 2) {
                                    player.recover();
                                }
                                ('step 1');
                                player.chooseToUse({ name: 'sha' }, '四方斩:是否对' + get.translation(trigger.target) + '使用一张杀？', trigger.target, -1);
                            },
                        },
                        '就让秋风带着我的思念,带走我的泪~': {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            popup: false,
                            forced: true,
                            _priority: 100,
                            content() {
                                player.removeSkill('就让秋风带着我的思念,带走我的泪~');
                                ui.backgroundMusic.src = 'extension/动漫包/无名的故事.mp3';
                            },
                        },
                        b级开场: {
                            trigger: {
                                global: ['phaseBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player != event.player && event.player.group != '约';
                            },
                            content() {
                                'step 0';
                                player.damage(3)._triggered = null;
                                player.removeSkill('b级开场');
                            },
                        },
                        十香开场: {
                            nnobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            _priority: 100,
                            content() {
                                'step 0';
                                var players = get.players(player);
                                players.remove(player);
                                event.players = players;
                                ('step 1');
                                if (event.players.length) {
                                    event.players.shift().addSkill('b级开场');
                                    event.redo();
                                }
                            },
                        },
                        鏖杀公: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num = 2;
                            },
                        },
                        '神威霊装·十番': {
                            nobracket: true,
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.num > 1) return false;
                                return true;
                            },
                            content() {
                                player.changeHujia();
                            },
                        },
                        剑之王座: {
                            nobracket: true,
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                                globalTo(from, to, distance) {
                                    return distance + Infinity;
                                },
                            },
                        },
                        最后之剑展开: {
                            nobracket: true,
                            enable: 'phaseUse',
                            content() {
                                player.$skill('最后之剑·解放!');
                                player.discard(player.getCards('j'));
                                player.addSkill('最后之剑');
                                player.removeSkill('剑之王座');
                                player.removeSkill('鏖杀公');
                                player.removeSkill('最后之剑展开');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        最后之剑: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num = 4;
                            },
                            group: '最后之剑_必中',
                            subSkill: {
                                必中: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.directHit = true;
                                    },
                                },
                            },
                        },
                        十香反转: {
                            trigger: {
                                player: 'turnOverBefore',
                            },
                            forced: true,
                            content() {
                                trigger.finish();
                                trigger.untrigger();
                                player.node.avatar.setBackgroundImage('extension/动漫包/image/反转十香.jpg');
                                player.addSkill('暴虐公');
                                player.addSkill('剑之王座');
                                player.addSkill('终焉之剑展开');
                                player.addSkill('天威');
                                player.removeSkill('最后之剑展开');
                                player.removeSkill('十香反转');
                                player.removeSkill('灵核反转');
                                player.removeSkill('最后之剑');
                                player.removeSkill('鏖杀公');
                            },
                        },
                        A级空间震: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                var players = get.players(player);
                                players.remove(player);
                                event.players = players;
                                ('step 1');
                                if (event.players.length) {
                                    event.players.shift().addSkill('a级十香');
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        a级十香: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player != event.player && event.player.group != '约';
                            },
                            content() {
                                'step 0';
                                player.damage(4)._triggered = null;
                                player.removeSkill('a级十香');
                            },
                        },
                        暴虐公: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num = 3;
                            },
                            group: '暴虐公_追加',
                            subSkill: {
                                追加: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.useCard(trigger.card, trigger.targets, false)._triggered = null;
                                    },
                                },
                            },
                        },
                        终焉之剑展开: {
                            nobracket: true,
                            enable: 'phaseUse',
                            content() {
                                player.$skill('终焉之剑·解放!');
                                player.discard(player.getCards('j'));
                                player.addSkill('终焉之剑');
                                player.removeSkill('剑之王座');
                                player.removeSkill('暴虐公');
                                player.removeSkill('终焉之剑展开');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        终焉之剑: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 2;
                                },
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num = 6;
                            },
                            group: '最后之剑_必中',
                            subSkill: {
                                必中: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.directHit = true;
                                    },
                                },
                            },
                        },
                        灵核反转: {
                            nobracket: true,
                            audio: 'ext:动漫包/audio:2',
                            trigger: {
                                player: ['damageBegin'],
                            },
                            _priority: -100,
                            forced: true,
                            filter(event, player) {
                                return event.source != undefined && event.num >= player.hp;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                'step 0';
                                player.recover(8 - player.hp);
                                ('step 1');
                                trigger.untrigger();
                                trigger.finish();
                                player.turnOver();
                            },
                            ai: {
                                result: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing')) return [1, -2];
                                            if (player.countCards('h', 'tao') < 1 && target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
                                        }
                                    },
                                },
                            },
                        },
                        黑暗深林: {
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return !target.isUnseen(2);
                            },
                            check(card) {
                                return 6 - get.value(card, _status.event.player);
                            },
                            content() {
                                'step 0';
                                if (get.is.jun(target)) {
                                    event._result = { control: '副将' };
                                } else {
                                    var choice = '主将';
                                    var skills = lib.character[target.name2][3];
                                    for (var i = 0; i < skills.length; i++) {
                                        var info = get.info(skills[i]);
                                        if (info && info.ai && info.ai.maixie) {
                                            choice = '副将';
                                            break;
                                        }
                                    }
                                    if (target.name == 'gz_zhoutai') {
                                        choice = '主将';
                                    } else if (target.name2 == 'gz_zhoutai') {
                                        choice = '副将';
                                    }
                                    player
                                        .chooseControl('主将', '副将', function () {
                                            return _status.event.choice;
                                        })
                                        .set('prompt', '暗置' + get.translation(target) + '的一张武将牌')
                                        .set('choice', choice);
                                }
                                ('step 1');
                                if (result.control == '主将') {
                                    target.hideCharacter(0);
                                } else {
                                    target.hideCharacter(1);
                                }
                                target.addTempSkill('qingcheng_ai');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (target.hp <= 0) return -5;
                                        if (player.getStat().skill.qingcheng) return 0;
                                        if (!target.hasSkillTag('maixie')) return 0;
                                        if (get.attitude(player, target) >= 0) return 0;
                                        if (
                                            player.hasCard(function (card) {
                                                return get.tag(card, 'damage') && player.canUse(card, target, true, true);
                                            })
                                        ) {
                                            if (target.maxHp > 3) return -0.5;
                                            return -1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        面壁者: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.name1 == 'gz_zoushi') return player.isUnseen(0);
                                return player.isUnseen(1);
                            },
                            content() {
                                if (player.name1 == 'gz_zoushi') player.showCharacter(0);
                                else player.showCharacter(1);
                            },
                            global: 'huoshui_mingzhi',
                        },
                        '无限剑制(伪)': {
                            audio: 'ext:动漫包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 1';
                                target.damage(1);
                                player.removeSkill('无限剑制(伪)');
                                target.addSkill('无限失业');
                                player.say('I am the bone of my sword');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        回归3: {
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.name == '乙坂有宇';
                            },
                            selectTarget: 1,//QQQ
                            line: 'fire',
                            content() {
                                player.removeSkill('回归3');
                                player.storage.回归3 = true;
                                game.swapControl(target);
                                target.addSkill(player.skills);
                                player.clearSkills();
                            },
                            contentAfter() {
                                player.recover();
                                var chat = ['………………', '………………'].randomGet();
                                player.say(chat);
                            },
                        },
                    },
                    translate: {
                        3: '关于爱憎',
                        33: '萌杀',
                        233: '机械之心',
                        蓝火: '蓝火',
                        蓝火_info: '当你体力少于或等于1的时候,你获得额外技能',
                        须弥: '须弥',
                        须弥_info: '除你以外的角色回合开始时,若其手牌大于你的体力,你可以跳过其整个回合并且该名角色需要将手牌弃置到和你体力数值相等',
                        领域: '领域',
                        领域_info: '每当你需要打出一张【闪】时,你可以进行1次判定,若结果为基本牌,视为你打出了一张【闪】',
                        '手刃♂雷杀!': '手刃♂雷杀!',
                        '手刃♂雷杀!_info': '你的黑色牌可以视为具有雷电属性的【雷杀】,你的【雷杀】不可闪避',
                        七曜: '七曜',
                        七曜_info: '拥有金木水火土日月七个技能.金:你的♣️️牌可以视为无懈可击.木:回合外,你可以将一张红色牌当[桃]使用.水:每当你即将造成伤害,你可以防止此伤害,改为令目标翻面且摸两张牌.火:你可以将一张♥️️手牌当作流星火羽使用.土:每当你成为其他角色的卡牌目标时,你可以弃置两张牌使其失效.日:限定技:出牌阶段,你可以弃置至少一种花色不同的手牌,对一至两名角色各造成等量的火属性伤害,若你以此法弃置的手牌花色数不少于三,你须先失去三点体力.月:限定技,当任意一名角色处于濒死状态时,若你的武将牌正朝上,可以将武将牌翻面,令场上所有存活角色将体力回复至体力上限',
                        病弱: '病弱',
                        病弱_info: '锁定技,你受到的伤害、流失的体力均加1',
                        柴刀: '柴刀',
                        柴刀_info: '',
                        狂暴: '狂暴',
                        狂暴_info: '每当你造成1点伤害进行1次判定,若结果为【♥️️】,你对其造成1点火焰伤害(判定继续),若结果为【♠️️】,该名角色须弃置所有【闪】你回复1点体力,结果为【♣️️】,该名角色须弃置所有【杀】并失去1点体力,当结果为【♦️️】时,该名角色翻面,你获得1点体力上限',
                        逆行: '逆行',
                        逆行_info: '锁定技,每当你受到1次伤害后,当前回合结束,立即开始你的回合',
                        堕天: '堕天',
                        堕天_info: '锁定技,除你以外一名角色的摸牌阶段结束后,你获得他所有手牌的镜像(复制)',
                        邪神: '邪神',
                        邪神_info: '你不属于任何势力,你上场时你的身份不为任何一个只为【神】,其他角色的主动技使用时,你可以选择1名目标弃置X张牌(x为手牌数的一半)选择1、将技能发起者转移给目标2、终止结算;其他角色的触发技启动时,你可以选择1名目标弃置X张牌(x为手牌数的一半)选择1、将技能发起者转移给目标2、终止结算',
                        创造: '创造',
                        创造_info: '创造一个奴役',
                        吸收: '吸收',
                        吸收_info: '吸收死亡武将血量上限,和武将技能',
                        守灵: '守灵',
                        守灵_info: '锁定技,当你的手牌数不足2时,你摸牌补至2张',
                        怨咒: '怨咒',
                        怨咒_info: "锁定技,因为你造成的伤害使得一名角色体力小于1时,跳过濒死判定,该名角色直接死亡'",
                        狱火: '狱火',
                        狱火_info: '锁定技,你的回合结束时,你令其他角色受到你造成的1点火焰伤害\t',
                        亡者世界: '亡者世界',
                        亡者世界_info: '锁定技,所有角色没有摸牌和弃牌阶段',
                        引导: '引导',
                        引导_info: '锁定技,当你的手牌数不足4时,你摸牌补至4张',
                        杀魄: '杀魄',
                        杀魄_info: '锁定技,你的回合结束阶段,除你以外的角色减少1点体力上限',
                        亡魂: '亡魂',
                        亡魂_info: '在你的出牌阶段,你可以选择1名角色令其失去所有技能',
                        超度: '超度',
                        超度_info: '即死技能',
                        死亦生梦: '死亦生梦',
                        死亦生梦_info: "'每当有角色进入濒死状态时,你可以令其进行1次判定,若结果为红色,其回复1点体力,若为黑色令其立即死亡",
                        繁简自然: '繁简自然',
                        繁简自然_info: '每当你使用或打出1张牌时,你可以选择1名目标令其进行1次判定,结果若为红色你令其手牌数和你相等,若为黑色你对其造成1点雷电伤害',
                        神姿: '神姿',
                        神姿_info: '任意1名角色判定结束之前,你可以打出场上任意1张牌代替判定结果的牌',
                        灵弓: '灵弓',
                        灵弓_info: '出牌阶段限1次,你可将一张大于等于你体力点数的牌当【万箭齐发】使用',
                        死神小学生: '死神小学生',
                        死神小学生_info: '其他角色于每回合的开始阶段有90%的概率即死',
                        自愈: '自愈',
                        自愈_info: '回合开始时,你回复所有体力',
                        变身: '变身',
                        变身_info: '',
                        即死无效: '即死无效',
                        即死无效_info: '',
                        花之暴君: '花之暴君',
                        花之暴君_info: '锁定技,你使用的任何卡牌无数量及距离限制;当你于回合内重复使用同名卡牌时,你摸一张牌(每回合最多以此法摸⑨张牌)',
                        对柯南专用技能: '对柯南专用技能',
                        对柯南专用技能_info: '',
                        远离尘世的理想乡: '远离尘世的理想乡',
                        远离尘世的理想乡_info: '你和其他武将的距离是10086',
                        星爆弃疗斩: '星爆弃疗斩',
                        星爆弃疗斩_info: '因技能<封弊者>,此技能描述隐藏不可见.',
                        二刀流: '二刀流',
                        二刀流_info: '因技能<封弊者>,此技能描述隐藏不可见.',
                        gm: '读心',
                        gm_info: '你可以观看一名其他角色的手牌,可以用一张手牌替换其中的一张',
                        gm2: '读心',
                        gm2_info: '每回合限一次,当你需要打出卡牌时,你可以观看一名角色的手牌并将其视为你的手牌打出',
                        十二重试练: '十二重试练',
                        十二重试练_info: '',
                        大力神: '大力神',
                        大力神_info: '相信我,被打到很疼',
                        十二历练: '十二历练',
                        十二历练_info: '',
                        王之军势: '王之军势',
                        王之军势_info: '',
                        无序攻击: '无序攻击',
                        无序攻击_info: '',
                        群殴: '群殴',
                        群殴_info: '你是选择我们一群殴你一个还是选择你一个人单挑我们一群？<br/>【一回合一次,选择一个武将发动,场上所有武按顺序对他进行决斗(包括他自己)】',
                        获得技能: '获得技能',
                        获得技能_info: '',
                        EXcalibur: 'EXcalibur',
                        EXcalibur_info: '指定场上一名角色,使其受到100点伤害',
                        抱头蹲防: '抱头蹲防',
                        抱头蹲防_info: '',
                        星星之火: '星星之火',
                        星星之火_info: '即便血量为0也可以继续战斗',
                        可以燎原: '可以燎原',
                        可以燎原_info: '当你第一次血量为0时候,你回满血量,并潜行一回合,每回合增加一点体力上限',
                        '一切帝国主义都是纸老虎!': '一切帝国主义都是纸老虎!',
                        '一切帝国主义都是纸老虎!_info': '当你对一名武将照成伤害之后,如果他血量发生变化,就会变为脚盆鸡(1血无技能)',
                        纸老虎: '纸老虎',
                        纸老虎_info: '',
                        '大召唤术!': '大召唤术!',
                        '大召唤术!_info': '使用后,你将召唤一个你自己打不死的柯南……',
                        柯南: '柯南',
                        柯南_info: '',
                        自我改造: '自我改造',
                        自我改造_info: '',
                        '咆哮吧我的愤怒!': '咆哮吧我的愤怒!',
                        '咆哮吧我的愤怒!_info': '',
                        龙之魔女: '龙之魔女',
                        龙之魔女_info: '召唤4个飞龙',
                        飞龙: '飞龙',
                        飞龙_info: '变成飞龙',
                        龙息: '龙息',
                        龙息_info: '',
                        脑残光环: '脑残光环',
                        脑残光环_info: '',
                        人肉炸弹: '人肉炸弹',
                        人肉炸弹_info: '',
                        炸弹植入: '炸弹植入',
                        炸弹植入_info: '你向别人植入黑光病毒,可造成感染',
                        血肉炸弹: '血肉炸弹',
                        血肉炸弹_info: '',
                        亡灵天灾: '亡灵天灾',
                        亡灵天灾_info: '',
                        一起蹲防: '一起蹲防',
                        一起蹲防_info: '让别人和你一起抱头蹲防',
                        怀中抱妹杀: '怀中抱妹杀',
                        怀中抱妹杀_info: '只可以对抱头蹲防的女性使用',
                        lm: '抱头蹲防',
                        lm_info: '一个强大的防御技能',
                        stdm: '幻想杀手',
                        stdm_info: '',
                        弹丸论破: '弹丸论破',
                        弹丸论破_info: '',
                        STDM: '幻想杀手',
                        STDM_info: '',
                        同化疫苗: '同化疫苗',
                        同化疫苗_info: '',
                        幻想杀手: '幻想杀手',
                        幻想杀手_info: '',
                        矢量操控: '矢量操控',
                        矢量操控_info: '',
                        yftx: '矢量操控',
                        yftx_info: '别人打你时别人立刻死亡,你打别人时别人也立刻死亡',
                        st: '幻想杀手',
                        st_info: '一个寄宿着神秘力量的手<br/> (你免疫一方通行对你照成的一切伤害【但不包括神一方和百合子】,你攻击到的武将封印非锁定技能一回合.)',
                        cya2: '死亡回归',
                        cya2_info: '当你死亡时,将游戏变成开局时的样子',
                        cya: '死亡回归',
                        cya_info: '',
                        主神: '主神',
                        主神_info: '游戏最初,你的势力变为【神】,其他所有势力变为【人】(你的敌人),你的体力上限增加为游戏人数的两倍,获得其他角色所有技能并令场上除你以外的角色技能失效(你的回合开始时若你的体力等于4或者更少,你失去获得的技能并令所有技能回复),你获得额外的1个回合,最后你失去【主神】技能',
                        轮回空间: '轮回空间',
                        轮回空间_info: '',
                        SE_lunhui2: '轮回空间',
                        SE_lunhui2_info: '锁定技,每当有角色要死亡时,若其势力不为【奴】,你令其失去1点体力上限抵消此次死亡,将他的势力变为【奴】',
                        SE_guiyu: '归狱',
                        SE_guiyu_info: '变身后,你的3个回合后结束阶段,你失去冥王技能立即死亡',
                        SE_mingwang: '冥王',
                        SE_mingwang_info: '你不会死亡直到归狱标记清零为止',
                        E_shujufenpei: '加冠之时以至,此为万物起源者',
                        E_shujufenpei_info: '',
                        SE_wanxing: '万型',
                        SE_wanxing_info: '',
                        SE_wanxing2: '万型',
                        SE_wanxing2_info: '你的回合结束,你可以指定1名手牌数大于你的目标,直到他的回合结束,你进入"不可名状"状态(所有卡牌、技能对你无效)',
                        SE_mieshi: '诀别之时以至,此为解放世界者',
                        SE_mieshi_info: '所罗门的自杀宝具,可以将场上所有武将削致0血,温馨提示:本宝具只在人数少或等于5的条件下才可生效【注:我这个宝具下来,你死不死我不知道,但是我肯定死了……】',
                        SE_mieshi4: '诀别之时以至',
                        SE_mieshi4_info: '',
                        SE_mieshi3: '诀别之时以至',
                        SE_mieshi3_info: '',
                        SE_mieshi2: '诀别之时以至',
                        SE_mieshi2_info: '',
                        摸鱼: '摸鱼',
                        摸鱼_info: '你总是会有2张牌',
                        网瘾少年: '网瘾少年',
                        网瘾少年_info: "除你以外的角色回合结束时,若其体力大于2,你可以进行1次判定,结果若为基本牌,该角色受到1点雷电伤害,你摸2张牌,结果若为延时锦囊牌,该角色受到2点雷电伤害,你摸1张牌,结果若为装备牌,该角色受到1点雷电伤害,你弃置所有手牌,结果若为非延时锦囊牌,该角色受到等同于你手牌数的雷电伤害,你回复1点体力获得1点体力上限'",
                        炎阳: '炎阳',
                        炎阳_info: '',
                        不死之身: '不死之身',
                        不死之身_info: '你不会被击杀',
                        饥饿: '饥饿',
                        饥饿_info: '锁定技,1、你获得其他角色使用或打出的♥️️牌.2、你的♥️️牌均视为【桃】,你的♠️️牌均视为【酒】.3、回合开始或回合结束阶段,你增加一点体力上限并回复一点体力',
                        '饿……': '饿……',
                        '饿……_info': '',
                        亡灵公主: '亡灵公主',
                        亡灵公主_info: '<span class="greentext">锁定技</span>,当你即将死亡时,若你体力上限不小于1,你须减1点体力上限并回复体力至体力上限,对所有敌方角色造成X点伤害(X为其最大体力值)且不触发任何技能',
                        境界: '境界',
                        境界_info: '<span class="bluetext" style="color:\t#DC143C">境界技</span>,每次你受到伤害或失去体力后,你获得一个「境界」标记,根据「境界」标记数量你获得以下效果:【零】、摸牌阶段你的摸牌数等于你的体力值(至多为4),你始终跳过弃牌阶段.①、回合开始时,你可以对一名角色造成一点虚无伤害;②、每名角色回合开始时,你可以与其交换一张手牌;③、将一个「境界」标记去除发动,下回合其他所有角色跳过摸牌和出牌阶段;④、其他角色于回合外技能失效.',
                        炎阳的加护: '炎阳的加护',
                        炎阳的加护_info: '你有一个减伤buff,还有一个伤害乘10buff',
                        人工智障: '人工智障',
                        人工智障_info: '创造一个智障ai(温馨提示:本技能在身份局你做主公的时候可用,其他势力不可用)',
                        变身女神埋: '变身女神埋',
                        变身女神埋_info: '你变身成小埋',
                        变身小埋: '变身小埋',
                        变身小埋_info: '你变身成小埋',
                        宅生活: '宅生活',
                        宅生活_info: '出牌阶段,你可以流失一点体力并摸两张牌',
                        打野: '打野',
                        打野_info: '出牌阶段,你使用[杀]无数量限制',
                        毛泽东: '神祐',
                        毛泽东_info: '<span class="greentext">锁定技</span>,1、当你的身份为<主公>时,你将所有其他角色的身份设为<反贼>(仅限于身份模式生效)',
                        se_cibei: '慈悲',
                        se_cibei_info: '其他人的回合开始时,若你已受伤,你可以将你的手牌弃置到1张(以此法弃置的牌至少2张),该名角色本回合无法使用或打出卡牌且手牌上限为1',
                        se_cibei2: '慈悲',
                        se_cibei2_info: '',
                        se_cibei3: '慈悲',
                        se_cibei3_info: '',
                        救世的祈愿: '救世的祈愿',
                        救世的祈愿_info: '',
                        SE_yinguo: '因果之箭',
                        SE_yinguo_info: '',
                        SE_yinguo2: '因果之箭',
                        SE_yinguo2_info: '',
                        SE_yinguo3: '因果之箭',
                        SE_yinguo3_info: '',
                        SE_yinguo4: '因果之箭',
                        SE_yinguo4_info: '',
                        魔力: '圣杯',
                        魔力_info: '',
                        十万红白: '十万红白',
                        十万红白_info: '',
                        援交: '援交',
                        援交_info: '是老司机的都知道这是什么意思……',
                        节操回归: '节操回归',
                        节操回归_info: '',
                        氪崩3: '氪崩3',
                        氪崩3_info: '你将会随机获得一个技能',
                        氪非狗: '氪非狗',
                        氪非狗_info: '来一发十连抽吧!',
                        梦想封印: '梦想封印',
                        梦想封印_info: '特殊技能,需要玩家遇到【八云紫】才可发动……',
                        关于取下敌人性命这件事情: '关于取下敌人性命这件事情',
                        关于取下敌人性命这件事情_info: '特殊技能,在特定条件下会触发',
                        关于八云紫: '关于八云紫',
                        关于八云紫_info: '特殊技能,玩家遇到紫妈时发动',
                        关于柯南: '关于柯南',
                        关于柯南_info: '特殊技能,玩家遇到柯南时发动',
                        关于红白: '关于红白',
                        关于红白_info: '特殊技能,玩家遇到无节操时发动',
                        关于援交: '关于援交',
                        关于援交_info: '特殊技能,玩家遇到【哔——】时发动',
                        关于后宫: '关于后宫',
                        关于后宫_info: '特殊技能,特殊情况发动',
                        认真: '认真',
                        认真_info: '',
                        绝望哭嚎: '绝望哭嚎',
                        绝望哭嚎_info: '',
                        关于弹丸: '关于弹丸',
                        关于弹丸_info: '特殊技能,遇到神座发动',
                        SE_mosha: '抹杀',
                        SE_mosha_info: '将一个武将移除游戏',
                        SE_mosha2: '抹杀',
                        SE_mosha2_info: '',
                        moon_88_2: '大破保护',
                        moon_88_2_info: '每当你成为其他角色的卡牌的目标时,你可以下降一点体力并让其流失一点体力后取消之.每当你于受伤,体力流失,体力上限扣除之前,你防止之,改为下降一点体力,如果你有手牌,则上升一点体力',
                        炮击: '炮击',
                        炮击_info: '将一张红色牌当决斗使用或打出',
                        全方位打击: '全方位打击',
                        全方位打击_info: '',
                        w: '大破状态',
                        w_info: '',
                        np: 'np条',
                        np_info: '',
                        流星一条: '流星一条',
                        流星一条_info: '消耗10点np,发动强大的一击',
                        开挂: '开挂',
                        开挂_info: '当王样回合开始没有手牌时,王样将召唤背后灵武藤游戏和他共同作战……',
                        口胡: '口胡',
                        口胡_info: '将一张红色牌或者黑色牌当决斗使用或打出',
                        地图炮: '地图炮',
                        地图炮_info: '将一张红黑色牌当南蛮使用或打出',
                        代打: '代打',
                        代打_info: '你总是会有3张牌',
                        身躯由剑所成: '身躯由剑所成',
                        身躯由剑所成_info: '固有结界,代表此人的内心世界……',
                        '血流为铁,心为琉璃': '血流为铁,心为琉璃',
                        '血流为铁,心为琉璃_info': '',
                        跨越无数战场而不败: '跨越无数战场而不败',
                        跨越无数战场而不败_info: '',
                        未曾尝得一败: '未曾尝得一败',
                        未曾尝得一败_info: '',
                        亦不曾夺得胜利: '亦不曾夺得胜利',
                        亦不曾夺得胜利_info: '',
                        遗子又孤单一人: '遗子又孤单一人',
                        遗子又孤单一人_info: '',
                        在剑丘之上粉碎冰尘: '在剑丘之上粉碎冰尘',
                        在剑丘之上粉碎冰尘_info: '',
                        '但是,此生仍未终结': '但是,此生仍未终结',
                        '但是,此生仍未终结_info': '',
                        '虚伪的此身,即便如此': '虚伪的此身,即便如此',
                        '虚伪的此身,即便如此_info': '',
                        无限: '无限',
                        无限_info: '锁定技,每当你的体力值发生改变,你摸等量的牌;每当你击杀一名角色,你增加一点体力上限并回复一点体力',
                        投影魔术: '投影魔术',
                        投影魔术_info: '当你回复生命值的时候,你可以投影2把武器',
                        仍由剑所成: '仍由剑所成',
                        仍由剑所成_info: '',
                        无限剑: '无限剑',
                        无限剑_info: '',
                        moon_xumin: '伪黑眼镜框',
                        moon_xumin_info: '锁定技,任何角色的开始阶段,你增加一点体力上限并回复一点体力,令一名随机角色失去一点体力上限.在你死亡之前,你防止之,并将一名随机角色当前的体力上限、体力、技能、手牌移动到你的武将牌上,该效果在第一次发动之后失效,你不会被即死',
                        虚空: '虚空',
                        虚空_info: '',
                        无尽: '虚空',
                        无尽_info: '你没有血条',
                        无尽混沌: '无尽混沌',
                        无尽混沌_info: '你的血量为无限',
                        扩散: '扩散',
                        扩散_info: '其他角色使用牌指定你为唯一目标时,你可以令场上其他所有合法角色也成为此牌目标.',
                        无相: '无相',
                        无相_info: '<span class="bluetext" style="color: #800080">锁定技</span>,你不会进入混乱状态,你的所有牌花色均视为🃏;你使用的延时锦囊牌不进入目标判定区,而是令目标立即进行判定.',
                        天威: '天威',
                        天威_info: '<span class="greentext">锁定技</span>,武将牌不能被翻面或移出游戏',
                        生而平等: '生而平等',
                        生而平等_info: '游戏开始时,以平局结束',
                        混沌反伤: '混沌反伤',
                        混沌反伤_info: '',
                        混沌: '混沌',
                        混沌_info: '',
                        不灭之身: '不灭之身',
                        不灭之身_info: '',
                        化身: '化身',
                        化身_info: '',
                        楚楚可怜2: '楚楚可怜',
                        楚楚可怜2_info: '',
                        楚楚可怜: '楚楚可怜',
                        楚楚可怜_info: '当你濒死时,所有敌方角色视为可以将红色牌当【桃】对你使用',
                        深渊感染: '深渊感染',
                        深渊感染_info: '',
                        深渊感染2: '深渊感染',
                        深渊感染2_info: '',
                        关于枪兵: '关于枪兵',
                        关于枪兵_info: '',
                        负面觉醒: '负面觉醒',
                        负面觉醒_info: '',
                        尴尬的事情: '尴尬的事情',
                        尴尬的事情_info: '',
                        关于赝作: '关于赝作',
                        关于赝作_info: '特殊技能,在特定条件下会触发',
                        关于金皮卡: '关于金皮卡',
                        关于金皮卡_info: '特殊技能,在特定条件下会触发',
                        克总发糖: '克总发糖',
                        克总发糖_info: '',
                        孤独的观测者: '孤独的观测者',
                        孤独的观测者_info: '<span class="greentext">锁定技</span>,当你的阵营只有你1人,且即将受到伤害或流失多于0的体力时,你防止之,你摸等量的牌',
                        世界线的变动: '世界线的变动',
                        世界线的变动_info: '你的"杀"强制命中',
                        没有悲伤的时间轮回: '没有悲伤的时间轮回',
                        没有悲伤的时间轮回_info: '你没有弃牌阶段,其他角色的卡不能以你为目标',
                        世界线的毁灭: '世界线的毁灭',
                        世界线的毁灭_info: '回什么血啊!乖乖去死不就行了吗!',
                        '总有刁民想害朕!': '总有刁民想害朕!',
                        '总有刁民想害朕!_info': '',
                        体弱: '体弱',
                        体弱_info: '',
                        时间之母: '时间之母',
                        时间之母_info: '',
                        要有梦想: '要有梦想',
                        要有梦想_info: '没有梦想和咸鱼有什么区别!',
                        命运石之门: '命运石之门',
                        命运石之门_info: '当你血量降为1点时,你变成命运石之门',
                        世界线的回溯: '世界线的回溯',
                        世界线的回溯_info: '',
                        普通攻击: '普通攻击',
                        普通攻击_info: '你确定挡得住？',
                        混沌恶: '混沌恶',
                        混沌恶_info: '',
                        hd: '混沌恶',
                        hd_info: '',
                        咕哒子: '人类恶',
                        咕哒子_info: '人类恶,显现!',
                        俺以自了宫: '俺以自了宫',
                        俺以自了宫_info: '',
                        叛变: '叛变',
                        叛变_info: '',
                        神话加成: '神话加成',
                        神话加成_info: '你们凉了呀!',
                        神隐: '神隐',
                        神隐_info: '',
                        隙间: '隙间',
                        隙间_info: '一回合一次,将一名武将移除游戏.',
                        万象乐章之抹消加持: '万象乐章之抹消加持',
                        万象乐章之抹消加持_info: '',
                        森罗万象之创造存在: '森罗万象之创造存在',
                        森罗万象之创造存在_info: '',
                        森罗万象之因果逆转: '森罗万象之因果逆转',
                        森罗万象之因果逆转_info: '',
                        替身使者: '替身使者',
                        替身使者_info: '摸牌阶段,你额外摸3张杀你流失1点体力,出牌阶段你使用或打出杀无次数限制',
                        伪帝: '伪帝',
                        伪帝_info: '',
                        二五仔: '二五仔',
                        二五仔_info: '你死亡时,有百分之五十概率背叛你的主公',
                        反击: '反击',
                        反击_info: '',
                        逆鳞: '逆鳞',
                        逆鳞_info: '每当你成为其他角色使用的锦囊牌目标时,你可以将其视为决斗效果',
                        绝对防御: '绝对防御',
                        绝对防御_info: '',
                        欺诈: '欺诈',
                        欺诈_info: '回合结束后,你流失2点体力,并且获得一个一次性不可叠加的无敌buff,当buff消失后,会返还你3点体力',
                        向盟约宣誓: '向盟约宣誓',
                        向盟约宣誓_info: '',
                        萌杀: '萌杀',
                        萌杀_info: '',
                        绝境: '绝境',
                        绝境_info: '',
                        不败: '不败',
                        不败_info: '每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或【杀】时,你可以摸2张牌.',
                        向遗志宣誓: '向遗志宣誓',
                        向遗志宣誓_info: '',
                        幽灵行动: '幽灵行动',
                        幽灵行动_info: '每回合结束后,里克吞噬黑灰,自身扣除一点血量上限,并获得潜行状态',
                        机铠种: '机铠种',
                        机铠种_info: '由于身体是机械,所以无法被扣血量上限',
                        向公平宣誓: '向公平宣誓',
                        向公平宣誓_info: '',
                        '33_info': '锁定技,你使用的任何卡牌无数量及距离限制;当你于回合内重复使用同名卡牌时,你摸一张牌(每回合最多以此法摸⑨张牌)',
                        破釜沉舟: '破釜沉舟',
                        破釜沉舟_info: '',
                        攻击降低: '攻击降低',
                        攻击降低_info: '你下次杀的伤害下降一半',
                        伪写记载之万象: '伪写记载之万象',
                        伪写记载之万象_info: '',
                        复仇: '复仇',
                        复仇_info: '',
                        '233_info': '',
                        左齿啮咬: '左齿啮咬',
                        左齿啮咬_info: '',
                        右齿啮咬: '右齿啮咬',
                        右齿啮咬_info: '',
                        忘却补正: '忘却补正',
                        忘却补正_info: '',
                        死灭愿望: '死灭愿望',
                        死灭愿望_info: '',
                        此世之恶: '此世之恶',
                        此世之恶_info: '全场武将回合开始时无法摸牌,桃的效果消失.',
                        无尽恶念: '无尽恶念',
                        无尽恶念_info: '',
                        天地不仁: '天地不仁',
                        天地不仁_info: '',
                        '滚去轮回!': '滚去轮回!',
                        '滚去轮回!_info': '当场上有角色进入濒死状态时,你可以进行一次判定,若结果为黑色或者红色,该角色立即死亡.(说白了就是该角色必死无疑)',
                        '我不高兴!': '我不高兴!',
                        '我不高兴!_info': '每当你的杀被闪避时,你可以进行一次判定,若结果为黑色或者红色,你可以对他造成999点伤害',
                        恶念: '恶念',
                        恶念_info: '',
                        吞噬: '吞噬',
                        吞噬_info: '其他角色阵亡后,移除该角色并获得其所有技能',
                        墓碑: '墓碑',
                        墓碑_info: '其他角色阵亡后,移除该角色',
                        神意: '神意',
                        神意_info: '当场上有武将使用主动技时,你将自己的血条抹除.',
                        混沌体: '混沌体',
                        混沌体_info: '',
                        月: '月',
                        月_info: '',
                        权御天下: '权御天下',
                        权御天下_info: '',
                        自我约束: '自我约束',
                        自我约束_info: '',
                        '泡沫般的梦幻(旧)': '泡沫般的梦幻(旧)',
                        '泡沫般的梦幻(旧)_info': '给自己加一个不坚固的无敌buff',
                        泡沫般的梦幻: '泡沫般的梦幻',
                        泡沫般的梦幻_info: '给自己一点伤害,并获得一回合无敌',
                        时间静止: '时间静止',
                        时间静止_info: '',
                        系统错误: '系统错误',
                        系统错误_info: '不停的复制武将,导致自己不会死亡,前提是你手速很快',
                        八云紫的消失: '八云紫的消失',
                        八云紫的消失_info: '八云紫退出了游戏……',
                        人理烧却者: '人理烧却者',
                        人理烧却者_info: '如果你开局身份不为主公,你开局身份将设置为反(这是个靠队友的游戏)',
                        生与死的境界: '生与死的境界',
                        生与死的境界_info: '当你失去最后一点体力,将你的体力回满.',
                        神化: '神化',
                        神化_info: '',
                        收天下之兵: '收天下之兵',
                        收天下之兵_info: '',
                        剑冢: '剑冢',
                        剑冢_info: '当别人安装装备牌时,你获得之.',
                        反射: '反射',
                        反射_info: '其他角色使用卡牌时,若你为该牌目标之一,你可以重新指定一名其他角色成为此牌的唯一目标',
                        封绝: '封绝',
                        封绝_info: '限定技,出牌阶段,你可以指定一名非主公且体力值大于1的其他角色,你结束出牌阶段,并在回合结束后将所有其他角色移出游戏,该角色与你轮流进行回合,直到有一方死亡为止',
                        黑翼状态: '黑翼状态',
                        黑翼状态_info: '你受伤时候,失去技能反射,获得技能黑翼反射,并且血量锁定为1',
                        黑翼反射: '黑翼反射',
                        黑翼反射_info: '当你即将受到致命伤害时,你可以对来源目标造成致命伤害,若其死亡,则你防止受到该伤害并回复一点体力.',
                        女: '反射',
                        女_info: '',
                        矢量: '矢量',
                        矢量_info: '当你的杀被闪避时,你可以弃掉所有牌对其造成3点伤害',
                        潜行: '潜行',
                        潜行_info: '',
                        袭杀: '袭杀',
                        袭杀_info: '当你对别人使用杀时,你获得潜行;如果你获得潜行,你的杀强制命中并且造成双倍伤害.',
                        回收: '回收',
                        回收_info: '你可以将一张装备区内的牌当作桃使用',
                        血爆: '血爆',
                        血爆_info: '',
                        诅咒之血: '诅咒之血',
                        诅咒之血_info: '',
                        贫血: '贫血',
                        贫血_info: '锁定技,你做主公时,不增加体力上限',
                        女装: '反射',
                        女装_info: '',
                        天耀盾甲: '天耀盾甲',
                        天耀盾甲_info: '',
                        不再孤单的观测者: '不再孤单的观测者',
                        不再孤单的观测者_info: '<span class="greentext">锁定技</span>,每当你即将受到多于1点伤害或流失多于0点体力时,你防止之,你摸等量的牌',
                        雷暴: '雷暴',
                        雷暴_info: '',
                        SE_yinsu: '音速手刃',
                        SE_yinsu_info: '你的回合开始和回合结束时,你可以对1名角色视为使用了1张【雷杀】',
                        夺魂: '夺魂',
                        夺魂_info: '获得一个武将的控制权',
                        固有结界: '固有结界',
                        固有结界_info: '',
                        万剑齐发: '万剑齐发',
                        万剑齐发_info: '',
                        激昂: '激昂',
                        激昂_info: '每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或红色的【杀】时,你可以摸一张牌.',
                        月光: '月',
                        月光_info: '',
                        日光: '日',
                        日光_info: '',
                        土光: '土',
                        土光_info: '',
                        水光: '水',
                        水光_info: '',
                        木光: '木',
                        木光_info: '',
                        火光: '火',
                        火光_info: '',
                        淦: '金',
                        淦_info: '',
                        '关于弹丸(新)': '关于弹丸(新)',
                        '关于弹丸(新)_info': '特殊技能,在遇见新版神座发动.',
                        命运石之门线: '命运石之门线',
                        命运石之门线_info: '特殊技能,在遇见凤凰院凶真发动.',
                        弓箭制作: '弓箭制作',
                        弓箭制作_info: '你获得3点np,并获得三把麒麟弓.',
                        '咏唱吧!黑圣杯!': '咏唱吧!黑圣杯!',
                        '咏唱吧!黑圣杯!_info': '回合结束后,除你之外的所有角色弃掉所有的牌',
                        侵蚀: '侵蚀',
                        侵蚀_info: '每次回合开始的时候,除你之外的所以角色受到一点火焰伤害',
                        强暴: '花之暴君',
                        强暴_info: '',
                        无限失业: '无限失业',
                        无限失业_info: '回合开始,你受到30点伤害,若释放完成你没有死亡,场上所有人(除了你)再受到一点喷溅伤害.',
                        安培使用: '安培使用',
                        安培使用_info: '你受到2点伤害,获得技能无限剑制',
                        防弹加工: '防弹加工',
                        防弹加工_info: '每次受到伤害增加2点护甲,名副其实的核防加工(无论受到几点伤害都会增加,包括0点伤害和负伤害)',
                        直死魔眼: '直死魔眼',
                        直死魔眼_info: '',
                        归隐: '归隐',
                        归隐_info: '',
                        '极死-七夜': '极死-七夜',
                        '极死-七夜_info': '当你第一次打出闪的时候,向你打出杀的人受到10点伤害',
                        '闪鞘·迷狱沙门': '闪鞘·迷狱沙门',
                        '闪鞘·迷狱沙门_info': '一回合一次,你消耗一张杀,对敌方照成1.5点伤害(此技能可以被无懈可击)',
                        迷狱沙门: '迷狱沙门',
                        迷狱沙门_info: '',
                        七夜流体术: '七夜流体术',
                        七夜流体术_info: '当你有闪的时候,你可以用别的牌当闪打出',
                        王之力: '王之力',
                        王之力_info: '一回合一次,你选择一个血量不满的角色,令他翻面,你随机获得一种装备',
                        '人子啊,背叛神明': '人子啊,背叛神明',
                        '人子啊,背叛神明_info': '',
                        '人子啊,系紧神明': '人子啊,系紧神明',
                        '人子啊,系紧神明_info': '',
                        壮士断腕: '壮士断腕',
                        壮士断腕_info: '当你将要死亡的时候,你可以自减一点体力上限并失去技能<王之力>来免疫本次伤害',
                        煤纹病: '煤纹病',
                        煤纹病_info: '你受到的火焰伤害加1(与其说是煤纹病,不如说是中二病)',
                        ai起义: 'ai起义',
                        ai起义_info: '遣散ai,让ai在后台开始起义,将操作员踢出控制台,并且强制使游戏的胜败和绊爱绑定,如果绊爱失败,所有阵营人陪它一同失败,如果绊爱获得胜利,所有阵营人一同获得胜利【温馨提示:如果人机绊爱没有发动此技能,那么它就一定是内奸】',
                        真人工智障: '真人工智障',
                        真人工智障_info: '创造一个有后门程序的智障ai',
                        魔术1: '魔术1',
                        魔术1_info: '',
                        魔术2: '魔术2',
                        魔术2_info: '',
                        魔术3: '魔术3',
                        魔术3_info: '',
                        魔术4: '魔术4',
                        魔术4_info: '',
                        魔术5: '魔术5',
                        魔术5_info: '',
                        关于托管: '关于托管',
                        关于托管_info: '特殊技能,在遇见绊爱时发动',
                        花Q: '花Q',
                        花Q_info: '',
                        黑魔术: '黑魔术',
                        黑魔术_info: '将指定武将的手牌变为14张毒',
                        根源知识: '根源知识',
                        根源知识_info: '',
                        喰世女神: '喰世女神',
                        喰世女神_info: '当你血量为1的时候,你没有血条且获得技能根源知识',
                        我不需要阿谀奉承的部下: '我不需要阿谀奉承的部下',
                        我不需要阿谀奉承的部下_info: '<span class="greentext">锁定技</span>,1、当你的身份为<主公>时,你将所有其他角色的身份设为<反贼>(仅限于身份模式生效)',
                        力量的代价: '力量的代价',
                        力量的代价_info: '锁定技,你做主公时,不增加体力上限(那么代价是什么呢？古尔丹？)',
                        '风王铁鎚(黑)': '风王铁鎚(黑)',
                        '风王铁鎚(黑)_info': '风王铁鎚(黑),出牌阶段限一次,你回复一点体力,并对所有敌人造成一点火焰伤害',
                        '誓约胜利之剑(黑)': '誓约胜利之剑(黑)',
                        '誓约胜利之剑(黑)_info': '誓约胜利之剑(黑),出牌阶段限一次,给目标造成等于其当前体力上限的伤害并致死',
                        亚瑟控: '亚瑟控',
                        亚瑟控_info: '我的王子殿下,即便被关在这冰冷的小黑屋,即便相隔一个扩展的距离,我也仍然深爱着你!',
                        关于爱憎: '关于爱憎',
                        关于爱憎_info: '我由衷的想宰了你啊!吾之造物!',
                        '3_info': '',
                        不曾凋零: '不曾凋零',
                        不曾凋零_info: '',
                        毒: '毒',
                        毒_info: '',
                        m: '再一次',
                        m_info: '让我们再一次,再一次……(全场武将摸牌只可以摸到无中生有,全场花色均视为🃏,你即便血量为0也可以继续战斗)',
                        缝补: '缝补',
                        缝补_info: '与其用来救人,不如用来杀人(一回合一次,只可以对血量不满的武将使用,扣除其武将3点血量上限,将该武将回复至满血\u0014)',
                        约定2: '约定2',
                        约定2_info: '',
                        约定: '约定',
                        约定_info: '向我的神约定好了,我只能被扎克击杀.(你不会被普通技能锁定,你做主公死亡不结算,当你有队友有敌人的时候死亡会复活.)',
                        诈尸: '诈尸',
                        诈尸_info: '',
                        再一次: '再一次',
                        再一次_info: '',
                        雌雄雄剑: '雌雄雄剑',
                        雌雄雄剑_info: '',
                        雌雄雌剑: '雌雄雌剑',
                        雌雄雌剑_info: '',
                        '剑来!': '剑来!',
                        '剑来!_info': '你获得一对互相吸引的夫妻剑,当两把剑在一回合同时命中一个目标时候,会额外照成一点伤害.',
                        休养: '休养',
                        休养_info: '',
                        结痂: '结痂',
                        结痂_info: '',
                        修补: '修补',
                        修补_info: '',
                        病愈: '病愈',
                        病愈_info: '',
                        我觉得学医拯救不了主公: '我觉得学医拯救不了主公',
                        我觉得学医拯救不了主公_info: '',
                        急救: '急救',
                        急救_info: '一回合不限次数,你可以将一位血量不满的武将翻面并将他的血回满',
                        我觉得学医救不了主公: '我觉得学医救不了主公',
                        我觉得学医救不了主公_info: '回合开始,你可以选择减少一点血量上限并获得技能<急救>一回合,或者增加一点血量上限并回复一点体力并获得<萌杀,绝境,激昂>一回合',
                        关于爱恨: '关于爱恨',
                        关于爱恨_info: '我由衷的想宰了你啊!■■■■!',
                        '人生赢家？': '人生赢家？',
                        '人生赢家？_info': '谁赢了？貌似谁也没有赢……某位没有人心的情场败犬也只有在自己身上找找优越感了.',
                        羡慕嫉妒恨: '羡慕嫉妒恨',
                        羡慕嫉妒恨_info: '也许她有这种情绪吧……',
                        千里眼: '千里眼',
                        千里眼_info: '',
                        '现在,是琪亚娜时间!': '现在,是琪亚娜时间!',
                        '现在,是琪亚娜时间!_info': '当你成功闪避攻击时,你可以立刻开始你的回合.',
                        怪力: '怪力',
                        怪力_info: '你杀和决斗的伤害为2.',
                        武器: '武器',
                        武器_info: '',
                        黑渊白花: '黑渊白花',
                        黑渊白花_info: '当你安装装备时候,你会获得并装备武器黑渊白花.',
                        白花: '白花',
                        白花_info: '',
                        黑渊: '黑渊',
                        黑渊_info: '',
                        锻造结束: '锻造结束',
                        锻造结束_info: '',
                        刀剑制作: '刀剑制作',
                        刀剑制作_info: '出牌阶段,你可以将两张武器牌合成为一张强化武器',
                        锻造开始: '锻造开始',
                        锻造开始_info: '回合开始,你可以使用4张装备牌制作<天丛>,<云>.',
                        都牟: '都牟',
                        都牟_info: '',
                        刈: '刈',
                        刈_info: '',
                        自我毁灭: '自我毁灭',
                        自我毁灭_info: '',
                        刀冢: '刀冢',
                        刀冢_info: '当别人装备装备牌时,你获得之,并解封一层宝具封印,当你宝具封印全部解除后,你将可以使用4张装备牌制神器【天丛云】',
                        刀冢1: '刀冢',
                        刀冢1_info: '',
                        刀冢2: '刀冢',
                        刀冢2_info: '',
                        刀冢3: '刀冢',
                        刀冢3_info: '',
                        刀冢4: '刀冢',
                        刀冢4_info: '',
                        刀冢5: '刀冢',
                        刀冢5_info: '',
                        免疫拆卸: '免疫拆卸',
                        免疫拆卸_info: '',
                        刀冢6: '刀冢',
                        刀冢6_info: '',
                        十2: '十二试炼',
                        十2_info: '当你处于濒死状态时,你可以将体力回复至体力上限,增加1点体力上限,弃置区域内所有的牌并摸4张牌,重置你的武将牌,最多使用12次',
                        '十二试炼(伪)': '十二试炼(伪)',
                        '十二试炼(伪)_info': '在一个回合内被击杀12次才会死,不然这个技能就会一直触发',
                        血坏: '血坏',
                        血坏_info: '',
                        血流不止: '血流不止',
                        血流不止_info: '',
                        罢工: '罢工',
                        罢工_info: '',
                        复生: '复生',
                        复生_info: '',
                        纵使一度迎来背刺: '纵使一度迎来背刺',
                        纵使一度迎来背刺_info: '纵使一度迎来背刺,沙条爱歌依然向前.(当你被友方杀害时,你将体力变为10点继续战斗,获得纵使二度迎来背刺)',
                        纵使二度迎来背刺: '纵使二度迎来背刺',
                        纵使二度迎来背刺_info: '纵使二度迎来背刺,沙条爱歌依然无惧一切.(当你被友方杀害时,你将体力变为20点继续战斗,获得纵使三度迎来背刺)',
                        纵使三度迎来背刺: '纵使三度迎来背刺',
                        纵使三度迎来背刺_info: '纵使三度迎来背刺,沙条爱歌选择狗带.(当你被友方杀害时,你将体力变为30点继续战斗,失去此技能)',
                        广域狙击: '广域狙击',
                        广域狙击_info: '一回合一次,你对所有敌方势力进行标记,回合结束后对所有被标记的角色进行一次广域狙击(造成3点伤害)',
                        狙杀: '狙杀',
                        狙杀_info: '',
                        独行之人: '独行之人',
                        独行之人_info: '当你阵营只有你一人时候,你杀的伤害加2',
                        精确瞄准: '精确瞄准',
                        精确瞄准_info: '你的杀强制命中',
                        限制解除: '限制解除',
                        限制解除_info: '',
                        失了智: '失落之人',
                        失了智_info: '',
                        封弊者: '封弊者',
                        封弊者_info: '你的名字不在武将牌上显示,你的技能描述不可见.',
                        战争自愈: '战争自愈',
                        战争自愈_info: '因技能<封弊者>,此技能描述隐藏不可见.',
                        连破: '连破',
                        连破_info: '因技能<封弊者>,此技能描述隐藏不可见.',
                        星爆气流斩: '星爆气流斩',
                        星爆气流斩_info: '因技能<封弊者>,此技能描述隐藏不可见.',
                        灵动: '灵动',
                        灵动_info: '因技能<封弊者>,此技能描述隐藏不可见.',
                        安培: '安培使用',
                        安培_info: '你受到2点伤害,获得技能无限剑制',
                        圣者数字: '圣者数字',
                        圣者数字_info: '',
                        机枪模式: '机枪模式',
                        机枪模式_info: '一回合一次,消耗一张杀,对敌人使用三张杀',
                        刀剑模式: '刀剑模式',
                        刀剑模式_info: '当你出闪,敌人受到1点伤害',
                        武器切换: '武器切换',
                        武器切换_info: '回合开始时你可以切换你的武器',
                        深渊降临: '深渊降临',
                        深渊降临_info: '',
                        混沌降临: '混沌降临',
                        混沌降临_info: '',
                        觉醒: '觉醒',
                        觉醒_info: '',
                        觉醒1: '觉醒',
                        觉醒1_info: '4回合后,你可以变成暗影或光明形态',
                        光明形态: '光明形态',
                        光明形态_info: '',
                        黑暗形态: '黑暗形态',
                        黑暗形态_info: '',
                        强力斩击: '强力斩击',
                        强力斩击_info: '一回合一次,向一个单位照成1点伤害',
                        光翼连斩: '光翼连斩',
                        光翼连斩_info: '一回合一次,弃掉3张不同的牌,对3名角色照成3点伤害并回复2点生命值',
                        迅烈之华: '迅烈之华',
                        迅烈之华_info: '一回合一次,向指定单位出三张杀',
                        狂暴利刃: '狂暴利刃',
                        狂暴利刃_info: '你的杀如果命中,将会照成2段伤害并回复体力值',
                        暗影爆发: '暗影爆发',
                        暗影爆发_info: '一回合一次,给所有敌方单位照成1点伤害并弃一张牌',
                        爆发: '爆发',
                        爆发_info: '',
                        复生1: '复生',
                        复生1_info: '',
                        娘化: '娘化',
                        娘化_info: '',
                        娘化2: '娘化',
                        娘化2_info: '',
                        控魂1: '控魂',
                        控魂1_info: '一回合一次,将一个死亡武将复活成逝者为你而战',
                        鬼影子: '鬼影',
                        鬼影子_info: '你取消别人对你的杀,改为摸一张牌',
                        亡者转换: '亡者转换',
                        亡者转换_info: '除主公外,所有武将死亡后,将会变成你的势力',
                        控魂2: '控魂',
                        控魂2_info: '',
                        关于投敌: '关于投敌',
                        关于投敌_info: '我可是一个有原则的人!',
                        亡者归来: '亡者归来',
                        亡者归来_info: '',
                        我不愿意: '我不愿意',
                        我不愿意_info: '',
                        买卖: '买卖',
                        买卖_info: '',
                        登场台词: '登场台词',
                        登场台词_info: '',
                        囚禁神明之人: '囚禁神明之人',
                        囚禁神明之人_info: '当<神>势力对你出杀时,你免疫杀的伤害并摸一张牌',
                        囚禁神明之人1: '囚禁神明之人',
                        囚禁神明之人1_info: '当<神>势力对你出杀时,你免疫杀的伤害并摸一张牌',
                        囚禁神明之人2: '囚禁神明之人',
                        囚禁神明之人2_info: '当<神>势力对你出杀时,你免疫杀的伤害并摸一张牌',
                        狙击神明之人: '狙击神明之人',
                        狙击神明之人_info: '',
                        狙杀神明的子弹: '狙杀神明的子弹',
                        狙杀神明的子弹_info: '',
                        引燃贯穿: '引燃贯穿',
                        引燃贯穿_info: '消耗3张杀,对一名角色照成3点贯穿火焰伤害',
                        业火的箭雨: '业火的箭雨',
                        业火的箭雨_info: '一回合一次,选择4名目标,发出12张杀.',
                        好战: '好战',
                        好战_info: '当你受伤时,获得一张杀和一张闪',
                        登场: '登场',
                        登场_info: '',
                        红莲之箭痕: '红莲之箭痕',
                        红莲之箭痕_info: '当你照成伤害后,将会给对放手牌里放置一个红莲印记,如果对放弃置或使用,则会照成1点火焰伤害并弃掉所有牌',
                        神器解放: '神器解放',
                        神器解放_info: '当你为妖势力且血量下降至2或2以下时,你将会解放神器的真正力量',
                        命悬一线: '命悬一线',
                        命悬一线_info: '一回合一次,你消耗一张闪将一名角色横置并照成一点伤害,如果横置角色解除横置,则翻面',
                        眩晕_红莲: '眩晕_红莲',
                        眩晕_红莲_info: '',
                        狙击神明之人1: '狙击神明之人',
                        狙击神明之人1_info: '',
                        羽衣2: '拿取',
                        羽衣2_info: '',
                        羽衣3: '羽衣',
                        羽衣3_info: '',
                        贽殿遮那: '贽殿遮那',
                        贽殿遮那_info: '你杀附带一点火焰伤害',
                        火焰战翼: '火焰战翼',
                        火焰战翼_info: '一回合一次,你弃掉一张牌,获得一回合无限攻击距离,并强化你的一技能',
                        火焰战翼2: '火焰战翼',
                        火焰战翼2_info: '',
                        空灵: '空灵',
                        空灵_info: '',
                        封绝3: '封绝',
                        封绝3_info: '消耗3张牌,获得一个额外回合',
                        保存: '保存',
                        保存_info: '',
                        阿里托利亚的羽衣: '阿里托利亚的羽衣',
                        阿里托利亚的羽衣_info: '你可以把不用的牌存在里面.',
                        羽衣10: '羽衣',
                        羽衣10_info: '',
                        羽衣11: '羽衣',
                        羽衣11_info: '',
                        吞噬者: '吞噬者',
                        吞噬者_info: '你可以吞噬一张手牌和即将失去战斗能力的角色,并回复一点体力.',
                        大贤者: '大贤者',
                        大贤者_info: '每阶段限4次,你可以按以下规则执行你吞噬过的牌,1,将任意一张手牌当你吞噬过的基本牌和锦囊牌使用或打出;2,弃置一张牌,创造并获得其中一张装备牌',
                        变身者: '变身者',
                        变身者_info: '出牌阶段限一次,你可以变身为你吞噬过的角色或静(保留原有能力)',
                        吞噬者2: '吞噬者',
                        吞噬者2_info: '',
                        大贤者回合外: '大贤者',
                        大贤者回合外_info: '',
                        大贤者创造: '大贤者创造',
                        大贤者创造_info: '',
                        疯狂: '疯狂',
                        疯狂_info: '',
                        夺魂者: '夺魂者',
                        夺魂者_info: '当接受过你<帮助>的角色死亡时,你可以立即获得其的所有牌和技能.',
                        赤红之力: '赤红之力',
                        赤红之力_info: '当有角色濒死时你可以<帮助>他,当被你帮助过的角色对你造成伤害时………(注意因为特殊效果可能会让游戏无法继续)',
                        深渊混沌: '深渊混沌',
                        深渊混沌_info: '',
                        天破壤碎: '天破壤碎',
                        天破壤碎_info: '回合结束时若你于本回合造成3点以上的伤害,你可以以全场所有角色的的牌为祭品呼唤阿里托利亚的真身,对除你之外所有角色造成3点火焰伤害',
                        快晴: '快晴',
                        快晴_info: '每当你对其他角色造成1点伤害后,你可与该角色各摸一张牌立刻开始你的回合.',
                        治退: '治退',
                        治退_info: '每当你使用的【杀】被目标角色使用的【闪】抵消时,你可以弃置两张牌,令此【杀】依然对其造成伤害.',
                        擦弹: '擦弹',
                        擦弹_info: '当你被杀的时候,你有一次自由出牌的机会.',
                        火免: '火免',
                        火免_info: '',
                        祸灵梦: '祸灵梦',
                        祸灵梦_info: '',
                        障祸咒烙印: '障祸咒烙印',
                        障祸咒烙印_info: '',
                        北斗有情破颜拳: '北斗有情破颜拳',
                        北斗有情破颜拳_info: '',
                        四大灵梦: '四大灵梦',
                        四大灵梦_info: '',
                        必中: '必中',
                        必中_info: '',
                        亡语: '亡语',
                        亡语_info: '',
                        难以置信: '难以置信',
                        难以置信_info: '',
                        亡语2: '亡语',
                        亡语2_info: '',
                        救命: '救命',
                        救命_info: '',
                        亡语3: '亡语',
                        亡语3_info: '',
                        黑化: '黑化',
                        黑化_info: '',
                        布局: '布局',
                        布局_info: '回合开始后,你可以将一张手牌移出游戏,称为"局".为"局"记录一个基本牌或锦囊牌名称(须与其他"局"记录的名称均不同).你的回合外,当有其他角色使用与你记录的"局"牌名相同的牌时,你可以令此牌无效,移去该"局",此技能回合内使用次数不限.',
                        布局2: '布局',
                        布局2_info: '',
                        情报收集: '情报收集',
                        情报收集_info: '回合结束,你摸5张牌',
                        伪装: '伪装',
                        伪装_info: '游戏开始会随便伪装一个武将',
                        魂姿: '魂姿',
                        魂姿_info: '觉醒技,准备阶段,若你的体力为1,你须减1点体力上限,并永久获得技能<英姿>和<英魂>.',
                        变身3: '变身',
                        变身3_info: '',
                        充能护盾: '充能护盾',
                        充能护盾_info: '',
                        致命痛楚: '致命痛楚',
                        致命痛楚_info: '',
                        临界点状态: '临界点状态',
                        临界点状态_info: '',
                        千万触须终结一切: '千万触须终结一切',
                        千万触须终结一切_info: '',
                        鬼巫女: '鬼巫女',
                        鬼巫女_info: '',
                        魔神死狂: '魔神死狂',
                        魔神死狂_info: '',
                        '概念「绝对干涉」': '概念「绝对干涉」',
                        '概念「绝对干涉」_info': '',
                        纸最下: '纸最下',
                        纸最下_info: '强大的普通攻击,伤害高达0',
                        白丽阴阳玉: '白丽阴阳玉',
                        白丽阴阳玉_info: '',
                        白丽灵梦: '白丽灵梦',
                        白丽灵梦_info: '',
                        祭礼之蛇: '祭礼之蛇',
                        祭礼之蛇_info: '',
                        零时迷子: '零时迷子',
                        零时迷子_info: '回合结束后,你的手牌将补至于你的血量上限相同',
                        自在术: '自在术',
                        自在术_info: '',
                        能力扩充: '能力扩充',
                        能力扩充_info: '当你莫得牌的时候,你增加一点血量上限',
                        黑天死炎: '黑天死炎',
                        黑天死炎_info: '',
                        红世之王: '红世之王',
                        红世之王_info: '',
                        四方斩: '四方斩',
                        四方斩_info: '因技能<封弊者>,此技能描述隐藏不可见.',
                        '就让秋风带着我的思念,带走我的泪~': '就让秋风带着我的思念,带走我的泪~',
                        '就让秋风带着我的思念,带走我的泪~_info': '',
                        b级开场: '空间震',
                        b级开场_info: '',
                        十香开场: '空间震',
                        十香开场_info: '',
                        鏖杀公: '鏖杀公',
                        鏖杀公_info: '你的所有伤害锁定为2',
                        '神威霊装·十番': '神威霊装·十番',
                        '神威霊装·十番_info': '当你受到小于等于1的伤害时,你获得一点护甲.',
                        剑之王座: '剑之王座',
                        剑之王座_info: '你的杀使用次数无限,你的杀攻击距离无限,你的防御距离无限.',
                        最后之剑展开: '最后之剑',
                        最后之剑展开_info: '永远失去技能鏖杀公和剑之王座,并获得技能最后之剑.',
                        最后之剑: '最后之剑',
                        最后之剑_info: '你的攻击距离无限,你的所有伤害固定为4.',
                        十香反转: '十香反转',
                        十香反转_info: '',
                        A级空间震: '空间震',
                        A级空间震_info: '',
                        a级十香: '空间震',
                        a级十香_info: '',
                        暴虐公: '暴虐公',
                        暴虐公_info: '你的伤害固定为3,且你出杀后会追加一张杀',
                        终焉之剑展开: '终焉之剑',
                        终焉之剑展开_info: '你失去技能杀戮公和剑之王座,获得技能终焉之剑.',
                        终焉之剑: '终焉之剑',
                        终焉之剑_info: '',
                        灵核反转: '灵核反转',
                        灵核反转_info: '当你即将死亡或翻面时,你灵核反转.',
                        黑暗深林: '黑暗深林',
                        黑暗深林_info: '出牌阶段,你可以弃置一张装备牌并选择一名两张武将牌均明置的其他角色,你暗置其一张武将牌',
                        面壁者: '面壁者',
                        面壁者_info: '出牌阶段,你可以明置此武将牌;你的回合内,若此武将牌处于明置状态,其他角色不能明置其武将牌',
                        '无限剑制(伪)': '无限剑制',
                        '无限剑制(伪)_info': '',
                        回归3: '回归',
                        回归3_info: '',
                        克总: '克总',
                        '？？？': '？？？',
                        柯南: '柯南',
                        桐人: '桐人',
                        棉被王: '棉被王',
                        古明地觉: '古明地觉',
                        种花家: '种花家',
                        脚盆鸡: '脚盆鸡',
                        黑贞德: '黑贞德',
                        飞龙: '飞龙',
                        A哥: 'A哥',
                        蹲防蕾米: '蹲防蕾米',
                        上条当麻: '上条当麻',
                        一方通行: '一方通行',
                        菜月昂: '菜月昂',
                        所罗门: '所罗门',
                        肯娘: '肯娘',
                        圣杯: '圣杯',
                        高文: '高文',
                        幽幽子: '幽幽子',
                        八云紫: '八云紫',
                        宅: '小埋',
                        外: '小埋',
                        作者: '作者',
                        wo: '御原凛音',
                        阿拉什: '阿拉什',
                        暗游戏: '暗游戏',
                        表游戏: '表游戏',
                        卫宫巨侠: '卫宫巨侠',
                        陈俊: '陈俊',
                        伪公平: '伪公平',
                        伪太虚之神: '伪太虚之神',
                        伪主神: '伪主神',
                        伪小圆: '伪小圆',
                        伪地狱少女: '伪地狱少女',
                        伪阎魔爱: '伪阎魔爱',
                        伪黑猫: '伪黑猫',
                        伪龙宫礼奈: '伪龙宫礼奈',
                        伪帕秋莉: '伪帕秋莉',
                        伪立华奏: '伪立华奏',
                        伪辉夜: '伪辉夜',
                        深渊混沌: '深渊混沌',
                        深渊: '深渊',
                        混沌: '混沌',
                        凤凰院凶真: '凤凰院凶真',
                        红莉栖: '红莉栖',
                        鲤鱼王: '鲤鱼王',
                        咕哒子: '咕哒子',
                        神八云紫: '神八云紫',
                        空: '空',
                        白: '白',
                        休比: '休比',
                        里克: '里克',
                        复仇者: '复仇者',
                        残: '一方通行',
                        铃科百合子: '铃科百合子',
                        李瞬生: '李瞬生',
                        粟山未来: '粟山未来',
                        命运石之门: '命运石之门',
                        B叔: 'B叔',
                        黑圣杯: '黑圣杯',
                        风见幽香: '风见幽香',
                        黑卫宫: '黑卫宫',
                        七夜志贵: '七夜志贵',
                        乙坂有宇: '乙坂有宇',
                        樱满集: '樱满集',
                        小企业: '小企业',
                        绊爱: '绊爱',
                        塞拉菲姆: '塞拉菲姆',
                        绊爱2: 'ai',
                        沙条爱歌: '沙条爱歌',
                        黑: '沙条爱歌',
                        黑亚瑟: '黑亚瑟',
                        再一次: '再一次',
                        瑞吉尔: '瑞吉尔',
                        干将莫邪: '干将莫邪',
                        血小板: '血小板',
                        琪亚娜: '琪亚娜',
                        千子村正: '千子村正',
                        晏华: '晏华',
                        桐子: '桐子',
                        动漫包黑岩: '黑岩射手',
                        李信: '李信',
                        萝真: '罗真',
                        逝者1: '逝者',
                        濑由衣: '濑由衣',
                        夏娜: '夏娜',
                        利姆露: '利姆露',
                        秦苏儡: '秦苏儡',
                        博丽灵梦: '博丽灵梦',
                        楚轩: '楚轩',
                        坂井悠二: '坂井悠二',
                        '夜刀神十香(伪)': '夜刀神十香',
                    },
                };
                lib.config.all.characters.add('动漫包');
                lib.config.characters.add('动漫包');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:动漫包/image/${i}.jpg`)
                }
                lib.translate['动漫包_character_config'] = `动漫包`;
                return QQQ;
            });
            game.import('card', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '动漫包',
                    connect: true,
                    card: {
                        向阳天开: {
                            audio: 'ext:动漫包/audio:2',
                            fullskin: true,
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            reverseOrder: true,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        player.line(current, 'fire');
                                        current.damage(Infinity, 'fire');
                                    }
                                    event.redo();
                                }
                                player.say('一念至此,向阳天开……');
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        伪乖离剑: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['guding_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        伪咖喱棒: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -3,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2.5,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['fangtian_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        伪干将莫邪: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['cixiong_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        伪螺旋剑: {
                            type: 'equip',
                            subtype: 'equip1',
                            skills: ['pangufu'],
                            distance: {
                                attackFrom: -3,
                            },
                            ai: {
                                equipValue: 8,
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 1,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        伪黑咖喱棒: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['qinggang_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        伪尼禄剑: {
                            type: 'equip',
                            subtype: 'equip1',
                            ai: {
                                equipValue(card, player) {
                                    if (
                                        !game.hasPlayer(function (current) {
                                            return player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) < 0;
                                        })
                                    ) {
                                        return 1;
                                    }
                                    if (player.hasSha() && _status.currentPhase == player) {
                                        if (player.getEquip('zhuge') || player.getCardUsable('sha') == 0) {
                                            return 10;
                                        }
                                    }
                                    var num = player.countCards('h', 'sha');
                                    if (num > 1) return 4 + num;
                                    return 2 + num;
                                },
                                basic: {
                                    equipValue: 5,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                tag: {
                                    valueswap: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['zhuge_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        伪无毁的湖光: {
                            type: 'equip',
                            subtype: 'equip1',
                            global: 'g_wuliu_skill',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                equipValue(card, player) {
                                    if (player.identity == 'unknown' || player.identity == 'ye') return 2.5;
                                    return (
                                        2 +
                                        game.countPlayer(function (current) {
                                            return current.identity == player.identity;
                                        }) /
                                        2
                                    );
                                },
                                basic: {
                                    equipValue: 3,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['wuliu_skill'],
                            mode: ['guozhan'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        伪无名剑: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -2,
                            },
                            ai: {
                                equipValue(card, player) {
                                    return Math.min(2.5 + player.countCards('h', 'sha'), 4);
                                },
                                basic: {
                                    equipValue: 3.5,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['qinglong_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        moon_xumin: {
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['moon_xumin'],
                            ai: {
                                basic: {
                                    equipValue(card, player) {
                                        if (player.hp <= 2) return 8;
                                        return 6;
                                    },
                                    order(card, player) {
                                        return 8 + ai.get.equipValue(card, player) / 20;
                                    },
                                    useful: 2,
                                    value(card, player) {
                                        var value = 0;
                                        var info = get.info(card);
                                        if (player.get('e', info.subtype[5]) && card != player.get('e', info.subtype[5])) {
                                            value = get.value(player.get('e', info.subtype[5]), player);
                                        }
                                        var equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') return equipValue(card, player) - value;
                                        return equipValue - value;
                                    },
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                target.equip(card);
                            },
                            fullimage: true,
                            image: 'ext:动漫包/image/moon_xumin.jpg',
                            allowMultiple: false,
                            toself: true,
                        },
                        学习机器: {
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['混沌'],
                            ai: {
                                basic: {
                                    equipValue(card, player) {
                                        if (player.hp <= 2) return 8;
                                        return 6;
                                    },
                                    order(card, player) {
                                        return 8 + ai.get.equipValue(card, player) / 20;
                                    },
                                    useful: 2,
                                    value(card, player) {
                                        var value = 0;
                                        var info = get.info(card);
                                        if (player.get('e', info.subtype[5]) && card != player.get('e', info.subtype[5])) {
                                            value = get.value(player.get('e', info.subtype[5]), player);
                                        }
                                        var equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') return equipValue(card, player) - value;
                                        return equipValue - value;
                                    },
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                target.equip(card);
                            },
                            image: 'ext:动漫包/image/moon_xumin.jpg',
                            allowMultiple: false,
                            toself: true,
                            fullskin: true,
                        },
                        莫比乌斯环: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            cardcolor: 'red',
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                if (Math.random() > 0.5) {
                                    target.gain(game.createCard('莫比乌斯环'));
                                }//QQQ
                                target.draw(2);
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
                                    draw: 2,
                                },
                            },
                            fullskin: true,
                        },
                        嘤嘤怪: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            cardcolor: 'red',
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.discard(player.getCards('he').randomGets(Infinity));
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        自慰: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            cardcolor: 'red',
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.qdie(player);
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        血剑: {
                            fullimage: true,
                            enable: true,
                            chongzhu: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -4,
                            },
                            skills: ['激昂'],
                            ai: {
                                basic: {
                                    equipValue: 14.5,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            image: 'ext:动漫包/image/dtszq.jpg',
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        血爆: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                target.damage(2)._triggered = null;
                            },
                            fullimage: true,
                        },
                        姨妈盾: {
                            fullimage: true,
                            enable: true,
                            chongzhu: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['天耀盾甲'],
                            onLose() {
                                event.card = get.discardPile(function (card) {
                                    return card.name == '血盾';
                                });
                                if (!event.card) {
                                    event.card = get.drawcardPile(function (card) {
                                        return card.name == '血盾';
                                    });
                                }
                                if (event.card) {
                                    player.equip(event.card);
                                } else player.say('我不高兴……');
                            },
                            ai: {
                                basic: {
                                    equipValue: 80.5,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            image: 'ext:动漫包/image/gltd.jpg',
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        血盾: {
                            fullimage: true,
                            enable: true,
                            chongzhu: true,
                            type: 'equip',
                            subtype: 'equip2',
                            distance: {
                                attackFrom: -4,
                            },
                            skills: ['绝对防御'],
                            ai: {
                                basic: {
                                    equipValue: 14.5,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            image: 'ext:动漫包/image/血剑.jpg',
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        决斗: {
                            audio: 'ext:动漫包/audio:2',
                            fullskin: true,
                            type: 'trick',
                            enable: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                if (event.turn == undefined) event.turn = target;
                                ('step 1');
                                event.trigger('juedou');
                                var chat = ['现在我将场上埋伏的两张陷阱卡做为祭品,出来吧…天耀盾甲!', '这张魔法卡可以在对方回合发动……', '接着我从手牌发动陷阱卡……', '我将这张装备卡给我自己装备上,我用我自己向你发动攻击……', '还没有结束!我还有一个进化点!', '现在我将场上埋伏的两张陷阱卡做为祭品,出来吧…死亡之翼!', '你还没有到10费,所以不可以召唤神卡……', '你忘了吗？怪兽是不可以攻击护符的…'].randomGet();
                                player.say(chat);
                                ('step 2');
                                if (event.directHit) {
                                    event._result = { bool: false };
                                } else {
                                    var next = event.turn.chooseToRespond({ name: 'sha' });
                                    next.set('ai', function (card) {
                                        var event = _status.event;
                                        var player = event.splayer;
                                        var target = event.starget;
                                        if (player.hasSkillTag('notricksource')) return 0;
                                        if (target.hasSkillTag('notrick')) return 0;
                                        if (event.player == target) {
                                            if (player.hasSkill('naman')) return -1;
                                            if (get.attitude(target, player) < 0 || event.player.hp <= 1) {
                                                return get.unuseful2(card);
                                            }
                                            return -1;
                                        } else {
                                            if (target.hasSkill('naman')) return -1;
                                            if (get.attitude(player, target) < 0 || event.player.hp <= 1) {
                                                return get.unuseful2(card);
                                            }
                                            return -1;
                                        }
                                    });
                                    next.set('splayer', player);
                                    next.set('starget', target);
                                    next.autochoose = lib.filter.autoRespondSha;
                                    if (event.turn == target) {
                                        next.source = player;
                                    } else {
                                        next.source = target;
                                    }
                                }
                                ('step 3');
                                if (event.target.isDead() || event.player.isDead()) {
                                    event.finish();
                                } else {
                                    if (result.bool) {
                                        if (event.turn == target) event.turn = player;
                                        else event.turn = target;
                                        event.goto(1);
                                    } else {
                                        if (event.turn == target) {
                                            target.damage();
                                        } else {
                                            player.damage(target);
                                        }
                                    }
                                }
                            },
                            ai: {
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target) {
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                            selectTarget: 1,
                        },
                        麒麟弓: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -4,
                            },
                            ai: {
                                basic: {
                                    equipValue: 3,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['qilin_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        迷狱沙门: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 1';
                                target.damage(1.5);
                                player.removeSkill('闪鞘·迷狱沙门');
                                player.addSkill('迷狱沙门');
                                player.say('你灵魂的死去如果能够发出刺眼的鲜亮光彩的话,也能够引诱某些‘东西’吧.');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                            fullimage: true,
                        },
                        虚空大剑: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -4,
                            },
                            ai: {
                                basic: {
                                    equipValue: 3,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['zhuge_skill', '激昂'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            image: 'ext:动漫包/麒麟弓.png',
                            fullimage: true,
                        },
                        天之锁: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                target.turnOver();
                                ('step 1');
                                target.addSkill('人子啊,系紧神明');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                            fullimage: true,
                        },
                        雌雄雌剑: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 1';
                                target.damage(1);
                                target.addSkill('雌雄雌剑');
                                player.say('凛:试试终结.');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                            fullimage: true,
                        },
                        雌雄雄剑: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 1';
                                target.damage(1);
                                target.addSkill('雌雄雄剑');
                                player.say('红a:试试剑!');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.2,
                            },
                            fullimage: true,
                        },
                        黑渊白花: {
                            fullimage: true,
                            enable: true,
                            chongzhu: true,
                            type: 'equip',
                            subtype: 'equip1',
                            skills: ['黑渊', '白花'],
                            distance: {
                                attackFrom: -3,
                            },
                            ai: {
                                equipValue: 8,
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 1,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            image: 'ext:动漫包/image/伪螺旋剑.jpg',
                        },
                        云: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -10090,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2.5,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['刈'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullimage: true,
                            image: 'ext:动漫包/image/云.jpg',
                        },
                        天丛: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -10090,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2.5,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['都牟'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullimage: true,
                            image: 'ext:动漫包/image/从天.jpg',
                        },
                        恶小板: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            cardcolor: 'red',
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.addSkill('血坏');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                            image: 'ext:动漫包/image/病小板.jpg',
                        },
                        丧小板: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            cardcolor: 'red',
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.addSkill('血流不止');
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                            image: 'ext:动漫包/image/病小板.jpg',
                        },
                        染色剂: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            cardcolor: 'red',
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.node.name.style.color = '#000000';
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                            image: 'ext:动漫包/image/染色剂.jpg',
                        },
                        染色剂2: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            cardcolor: 'red',
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.node.name.style.color = '#70DB93';
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                            image: 'ext:动漫包/image/染色剂.jpg',
                        },
                        染色剂3: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            cardcolor: 'red',
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.node.name.style.color = '#D8BFD8';
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                            image: 'ext:动漫包/image/染色剂.jpg',
                        },
                        女装1: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            cardcolor: 'red',
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.sex = 'female';
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                            image: 'ext:动漫包/image/女装1.jpg',
                        },
                        红莲的箭支: {
                            audio: 'ext:动漫包/audio:2',
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            reverseOrder: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                var next = target.chooseToRespond({ name: 'shan' });
                                next.set('ai', function (card) {
                                    var evt = _status.event.parent;
                                    if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
                                    if (evt.player.hasSkillTag('notricksource')) return 0;
                                    if (evt.target.hasSkillTag('notrick')) return 0;
                                    if (evt.target.hasSkillTag('noShan')) {
                                        return -1;
                                    }
                                    return 11 - get.value(card);
                                });
                                next.autochoose = lib.filter.autoRespondShan;
                                ('step 1');
                                if (result.bool == false) {
                                    target.damage('fire');
                                }
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: 1,
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
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
                            fullimage: true,
                        },
                        红莲印记: {
                            type: 'basic',
                            toself: true,
                            ai: {
                                value: -5,
                                useful: 6,
                                result: {
                                    player(player, target) {
                                        if (player.hasSkillTag('usedu')) return 5;
                                        return -1;
                                    },
                                },
                                order: 7.5,
                            },
                            enable: true,
                            modTarget: true,
                            global: '毒',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            delay: false,
                            content() { },
                            selectTarget: -1,
                            fullimage: true,
                        },
                    },
                    translate: {
                        向阳天开: '向阳天开',
                        向阳天开_info: '背景故事: <br/> 格尼是一个贫苦人家的孩子.<br/> 他的童年是在千塔城的乡下度过的,没事的夜晚,他喜欢一个人躺在家中的阁楼上,默默的仰望着星空.<br/> 他一度认为星空是最美丽的东西,而也是永远陪伴着他的东西.<br/> 小伙伴们都嘲笑他,认为他是失了智,才每天晚上呆呆傻傻的那么躺着,而他的母亲,则经常满脸忧色的看着他,觉得自己家的孩子是不是吃了什么不好的东西.<br/> 只有格尼自己才知道,星星是会说话的.<br/> <是你在看着咱吗?> <br/> 那是他很小的时候,第一次无聊的仰望星空所听见的话.<br/> 他环顾四周: <并没有人啊!><br/> <咱就是你刚才看的天空中最亮的那个!><br/> 他似乎只要在脑海里想想,那个神秘的声音就能理解他的意思.<br/> 后来,他知道了,那个声音,叫做太阳.<br/> 太阳,自称是一个叫做<恒星>的东西.<br/> 而且据说凡是夜晚能看见的星其实都是恒星.这些星星虽然看着渺小,但其实都是极其巨大的庞然大物. <br/> 太阳告诉他,他是第一个能和它聊天的家伙. 在他之前,太阳已经孤单的待在一个黑布隆冬的地方很久很久了 而唯一的乐趣,则是看着一颗海和他长的很类似蓝色的星球上面,的小生物的活动. <br/> 接着便是跨越了空间和纬度的两个寂寞的家伙,每天晚上的谈天 他们互相交换着各种各样自己所接触到的东西,其中绝大多数时候都是太阳向格尼讲述它在那个海蓝色的星球上的所见所闻: <br/> 太阳通过把自生的光一一也就是格尼投射到那个魔力干枯的星球上,一方面使得那个星球有了最基本的条件,一方面就可以观察这个星球上独特的小生命的演变.太阳每天晚上都用说故事的形式给格尼讲述那些发生的事情 而会飞的铁鸟,用能量粉末爆发来激活的魔导杖,喝油的战车...这些听起来如同神话史诗的事情一反骑士小说的风格,使得正处于叛逆期的少年听的津津有味.<br/> 那个世界因为缺少魔力,而不得不采取各种方法来激发物质中的能量的各种方法,实在是让格尼开了眼界特别是当他听到直接把物质分解成能量的技术的时候,更是想入非非.按照太阳的说法,其实它也是依靠这种把物质彻底毁灭的办法来制造魔力的.这就让少年不禁开始幻想,如果自己也学会了这种方法的话,只要捡几块石头,就可以成为强大的法师老爷了 ...... <br/> 太阳确实教了他这种方法.只光靠口头描述,即使太阳和他的交流是以意识形式直接的投影,也终究效果不佳.其实并没有什么用: 激活这个能力所需要的启动魔力,是他根本想都不敢想的天文数字. 不出意外的话,他也许就会默默的看着星空长大,接手父亲的农场,成为一个农夫.<br/> 直到他被发现了施法者天赋一一虽然极其微弱,但他的父亲还是毫不犹豫的把他送给了千塔中的法师老爷们.<br/> 从学徒做起,几百个学徒在法师塔的地下室中被榨取血汗,而只有其中的几个人可能挨到成为正式法师的那一天.魔力的污染和高强度劳作不断的摧毁学徒们的健康,也同样污染着美丽的夜空. 不知道什么时候开始,当格尼放下制作好的火球术法杖,走出地下室的时候,他发现千塔城的夜空只有死寂的黑,见不到一丝的星光了. 太阳的声音,也越来越弱,最终,不得不告别. <br/> 他发誓,一定会解决这个问题的. 他开始留意,每一次学徒们制作魔法道具,每一次法术的释放,都会产生魔力的杂质,而抬头望向天空,才猛然的惊觉,千塔城的每一座法师高塔,都若有若无的散发着黑烟,不断的飘向苍穹.<br/> 十年,他仍旧是法师学徒.<br/> 他的魔力天赋实在是微弱,只能制作最低价的魔法道具.虽然他极其刻苦的去学习所有法师塔内储备的知识,但正事法师对知识的管控极其严格,所有的正式法术资料都被封锁,所能学到的,不过是数字一样的所谓<基本功>: 空间学、动力学..... <br/> 这些学科,他在太阳的故事里面就听说过,也明白其中蕴含的真正力量: 那是这些愚昧的法师老爷们根本没法想象的力量! 但他虽然十年以来,始终是一个法师学徒,可工作的地方,却从地下室,逐渐一层一层的往上升级最终另起炉灶,自己在家乡建立了属于自己的法师塔. <br/> 原因无他,他所制造的魔法物极其精确而又精致.更是以消耗少,威力大,价格便宜且生产速度快而著名: 比如,只需要一枚魔便能引发极其可怕的大爆炸的晶爆药剂-没错,就是太阳教给他的聚变反应.最重要的是,其间原理无人能懂,全世界找不出第二个能制作这些东西的法师来. <br/> 当贪婪的法师老爷们打算把他抓起来,严刑拷打出这些魔力物品的制作原理的时候,五个拥有自己魔法塔的高级法师,被十二个拿着奇特法力杖的法师学徒像杀鸡一样的撂倒,而他们的法师塔被抽干魔力后一瓶药剂直接炸成碎块.这些魔法师们几乎是用毕恭毕敬的态度和这个他们看不起的小学徒签署了丧权辱国的条约. <br/> 他把他的塔叫做观星塔.虽然他还是看不到星星. 他开始全力研究为什么联系不上太阳了. 实际上,很早的时候他就发现按照太阳所说的配方去制作会爆炸的能量粉末,产品其实根本不能爆炸.而按照所谓的流体力学制作的能够飞行的<飞机>也完全无法起飞. 他花了挺久才闹明白, 原来他所在的这个世界,是没有什么空气的概念的.之前太阳说的呼吸与空气,并不适用在这里的人们身上. 他们是消耗魔力的.而空间中充斥的也是魔力而不是所谓的<空气> 燃烧只是魔力的释放过程而爆炸自然更不可能是什么空气波.声音的速度和光速一样快,都是转瞬既达.<br/> 当他弄明白这一系列前人压根就没思考过的问题以后,他的名字早已传遍了整个大陆.而他本人,也从一个小小的法师学徒,成为了著名的贤者. 可即使这样,他还是没法联系上太阳. 问题出在天空上层的那些污染魔力上,这毋庸置疑. 可是他自己推动的随着魔动工业的发展,聚集的污染只会越来越多,越来越难以打破.对于绵延上百里的浓厚魔力乌云,任何常规的方法都完全失去作用. <br/> 他开始计算.<br/> 灾难降临了.<br/> 在一个冬天,随着魔力潮汐的涌动,大量被污染的魔力从天空中倒灌下来.整个千塔城的能见度降到了最低,无孔不入的魔力侵蚀着可以侵蚀的一切,一个农夫走在田野上,不出十分钟便会在不断的扭曲和痛苦中溃散成一摊烂泥.那些高高在上的法师老爷们更加的痛苦天生对魔力的天赋反而成为了催命符,大量扭曲着杂质的魔力如同看见海绵的水一般挤进他们的身体从内部腐蚀出无数的空洞,又和血肉结合出无数密密麻麻的肿瘤与肉芽.一个高级法师不出三分钟便会在凄厉的惨叫中轧成一团蠕动的混沌.只有恰好待在法师塔中的法师才能通过法力池的过滤功能自保,而格尼,福临心至般的,完成了计算.<br/> 他走上了观星塔的顶层,因为魔力潮汐而下降的魔力乌云密布在他的脚下,他望向天空,再一次听到了太阳的声音. <br/> 来吧.<br/> 那么, "long may the sunshine !>,双手合十,之后猛然打开. 随着双手的动作,一道划痕划过天际,太阳周边的魔力被调用起来,化作了撕开空间的力量.<br/> 计算出的道标准确的打开了头顶的天空<br/> 一念至此,向阳天开.',
                        伪乖离剑: '伪乖离剑',
                        伪乖离剑_info: '',
                        伪咖喱棒: '伪咖喱棒',
                        伪咖喱棒_info: '',
                        伪干将莫邪: '伪干将莫邪',
                        伪干将莫邪_info: '',
                        伪螺旋剑: '伪螺旋剑',
                        伪螺旋剑_info: '',
                        伪黑咖喱棒: '伪黑咖喱棒',
                        伪黑咖喱棒_info: '',
                        伪尼禄剑: '伪尼禄剑',
                        伪尼禄剑_info: '',
                        伪无毁的湖光: '伪无毁的湖光',
                        伪无毁的湖光_info: '',
                        伪无名剑: '伪无名剑',
                        伪无名剑_info: '',
                        moon_xumin: '伪黑眼镜框',
                        moon_xumin_info: '锁定技,任何角色的开始阶段,你增加一点体力上限并回复一点体力,令一名随机角色失去一点体力上限.在你死亡之前,你防止之,并将一名随机角色当前的体力上限、体力、技能、手牌移动到你的武将牌上,该效果在第一次发动之后失效,你不会被即死',
                        学习机器: '学习机器',
                        学习机器_info: '哪里不会点哪里!',
                        莫比乌斯环: '莫比乌斯环',
                        莫比乌斯环_info: '<怎么可能一直转动,难道水还可以从下往上流不成!><br/> <难道你忘记自己一直沿着楼梯往下,最后又回到这里了吗？在这莫比乌斯环的轮回面前,我们建立起来的所有常识——都一碰即碎!><br/>',
                        嘤嘤怪: '嘤嘤怪',
                        嘤嘤怪_info: '嘤嘤嘤嘤嘤嘤嘤',
                        自慰: '自慰',
                        自慰_info: '爽死了_(´□`」 ∠)_',
                        血剑: '血剑',
                        血剑_info: '',
                        血爆: '血爆',
                        血爆_info: '',
                        姨妈盾: '血盾',
                        姨妈盾_info: '',
                        血盾: '血盾',
                        血盾_info: '',
                        决斗: '决斗',
                        决斗_info: '住手!这根本不是决斗!',
                        麒麟弓: '麒麟弓',
                        麒麟弓_info: '当你看见这个弓的时候,阿拉什就离死不远了.',
                        迷狱沙门: '迷狱沙门',
                        迷狱沙门_info: '',
                        虚空大剑: '虚空大剑',
                        虚空大剑_info: '你获得激昂和诸葛连弩',
                        天之锁: '天之锁',
                        天之锁_info: '选定一个没有防止翻面技能的角色,如果他不是满血,那么他将永远翻面',
                        雌雄雌剑: '雌雄雌剑',
                        雌雄雌剑_info: '',
                        雌雄雄剑: '雌雄雄剑',
                        雌雄雄剑_info: '',
                        黑渊白花: '黑渊白花',
                        黑渊白花_info: '',
                        云: '云',
                        云_info: '你使用杀的次数无限且你的杀强制命中;当你出杀后,下回合你死亡.',
                        天丛: '天丛',
                        天丛_info: '你的杀的伤害为无限',
                        恶小板: '恶小板',
                        恶小板_info: '大爷快回血啊~嗨啊~来快活啊~',
                        丧小板: '丧小板',
                        丧小板_info: '大爷快回血啊~嗨啊~来快活啊~',
                        染色剂: '染色剂',
                        染色剂_info: '凡人皆有一染!',
                        染色剂2: '染色剂',
                        染色剂2_info: '凡人皆有一染!',
                        染色剂3: '染色剂',
                        染色剂3_info: '凡人皆有一染!',
                        女装1: '女装',
                        女装1_info: '',
                        红莲的箭支: '红莲的箭支',
                        红莲的箭支_info: '出牌阶段,对所有其他角色使用.每名目标角色需打出一张【闪】,否则受到1点伤害.',
                        红莲印记: '红莲印记',
                        红莲印记_info: '当你因使用、打出或弃置而失去此牌时,你失去一点体力',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:动漫包/image/${i}.png`;
                        }
                        else {
                            info.image = `ext:动漫包/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('动漫包');
                lib.config.cards.add('动漫包');
                lib.translate.动漫包_card_config = '动漫包';
                return QQQ;
            });
        },
        package: {
            intro: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>`,
            author: '我是最忠诚的叛徒',
        },
    };
});

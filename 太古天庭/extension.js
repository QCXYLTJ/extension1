import { TaiguPack } from './taigu/taigu.js';
import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/太古天庭/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    const EXT_TGTT_PATH = 'extension/太古天庭/';
    return {
        name: '太古天庭',
        content(config, pack) {
            game.center = function () {
                var list = [];
                game.countPlayer2(function (current) {
                    current.getHistory('lose', function (evt) {
                        if (evt.position == ui.discardPile) list.addArray(evt.cards);
                    });
                });
                game.getGlobalHistory('cardMove', function (evt) {
                    if (evt.name == 'cardsDiscard') list.addArray(evt.cards);
                });
                return list;
            }; //获取本回合进入弃牌堆的牌
            //来自拓展格林笔记的代码,感谢作者尼斯湖水怪的帮助
            TaiguPack(lib, game, ui, get, ai, _status, this[0]);
            //存在力
            if (config.extTgtt_Cunzaili) {
                lib.skill._tgttopencunzaili = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    silent: true,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        return player == game.me;
                    },
                    content() {
                        game.log('<font color=red>真理之门打开了,卡巴拉生命之树已经呈现在眼前,魔轮开启,吸收计时启动,生存还是死亡,你别无选择!</font>');
                        player.update();
                    },
                };
                lib.tgtt_initEp = 100;
                lib.tgtt_custom.ep.push(function (player) {
                    if (player.name == 'tgtt_srgod') {
                        return { type: 'cunzaili', color: 'linear-gradient(#CD7F32,#D9D919)', pop: 'light' };
                    }
                });
                lib.translate.cunzaili = '存在力';
            }
            //新属性
            if (game.addNature) {
                game.addNature('tgtt_wind', '<font color=green>风</font>', {
                    audio: undefined,
                    linked: true,
                    order: 63,
                    background: 'extension/太古天庭/image/card/tgtt_wind.png',
                    lineColor: '#0aba0a', //绿净化
                    color: 'green',
                });
                game.addNature('tgtt_quantum', '<font color=#500080>量子</font>', {
                    audio: undefined,
                    linked: true,
                    order: 62,
                    background: 'extension/太古天庭/image/card/tgtt_quantum.png',
                    lineColor: '#07a6f0',
                    color: 'blue',
                });
                game.addNature('tgtt_imaginary', '<font color=yellow>虚数</font>', {
                    audio: undefined,
                    linked: true,
                    order: 61,
                    background: 'extension/太古天庭/image/card/tgtt_imaginary.png',
                    lineColor: '#ffee00',
                    color: 'yellow',
                });
                lib.skill._tgtt_wind = {
                    trigger: {
                        player: 'damageBegin4',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        return player.countCards('he') > 0 && event.hasNature('tgtt_wind');
                    },
                    async content(event, trigger, player) {
                        const { cards } = await player
                            .chooseToDiscard(`风蚀`, `弃置至少一张牌;每多弃置一张,防止1点伤害`, 'he', [1, trigger.num + 1], true)
                            .set('ai', function (card) {
                                var num = _status.event.numx;
                                if (num >= 0) return true;
                                if (player.hp < 2) return true;
                                return 10 - get.value(card);
                            })
                            .set('numx', trigger.num - player.hp).forResult();
                        if (cards) {
                            var count = cards.length;
                            if (count - 1 > 0) {
                                game.log('<font color=green>⌈风⌋</font>', player, '减少了', count - 1, '点风伤害');
                                trigger.num -= count - 1;
                            }
                        }
                    },
                };
                lib.skill._tgtt_quantum = {
                    trigger: {
                        player: 'useCardToPlayered',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        return player.countCards('h', (card) => player.canRecast(card)) && event.card.name == 'sha' && game.hasNature(event.card, 'tgtt_quantum');
                    },
                    async content(event, trigger, player) {
                        const { cards } = await player
                            .chooseCard(`纠缠`, `你可以重铸一张牌,${get.translation(trigger.target)}将随机重铸一张同类型的牌`, function (card) {
                                return _status.event.player.canRecast(card);
                            })
                            .set('ai', (card) => 8 - get.value(card)).forResult();
                        if (cards) {
                            player.recast(cards);
                            const loses = trigger.target.getCards('he', (card) => {
                                return get.type2(card) == get.type2(cards[0]) && _status.event.player.canRecast(card);
                            });
                            if (loses.length) {
                                trigger.target.recast(loses.randomGet());
                                game.log('<font color=#500080>⌈量子⌋</font>', trigger.target, '被', player, '纠缠了');
                            } else {
                                game.log('<font color=#500080>⌈量子⌋</font>', player, '自我纠缠ing');
                            }
                        }
                    },
                };
                lib.skill._tgtt_imaginary = {
                    trigger: {
                        player: 'damageBegin4',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        return event.hasNature('tgtt_imaginary');
                    },
                    async content(event, trigger, player) {
                        player.addTempSkill('tgtt_imaginary_buff');
                        game.log('<font color=yellow>⌈虚数⌋</font>', player, '本回合护甲和防具失效');
                    },
                };
                lib.skill.tgtt_imaginary_buff = {
                    charlotte: true,
                    TaiguSkill: true,
                    mark: true,
                    marktext: '※',
                    intro: {
                        name: '<font color=yellow>虚数</font>',
                        content: '本回合防具和护甲失效',
                    },
                    ai: {
                        nohujia: true,
                        unequip2: true,
                    },
                };
            }
            //属性BUFF
            if (lib.config.extension_太古天庭_extTgtt_NatureBuff) {
                //物理裂伤
                lib.skill._tgttwuliDamage = {
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        var x = Math.floor(Math.random() * 99) + 1;
                        var y = Math.floor(Math.random() * 100);
                        return !event.nature && y <= x && event.player == player && event.source && event.source.isAlive();
                    },
                    content() {
                        player.addTgttBuff('lieshang', 1);
                        game.log(player, '受到「<font color=white>裂伤</font>」影响');
                    },
                };
                //风蚀风化
                lib.skill._tgttwindDamage = {
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        var x = Math.floor(Math.random() * 99) + 1;
                        var y = Math.floor(Math.random() * 100);
                        return (event.nature == 'tgtt_wind' || event.nature == 'hyyz_wind') && y <= x && event.player == player && event.source && event.source.isAlive();
                    },
                    content() {
                        player.addTgttBuff('fenghua', 1);
                        game.log(player, '受到「<font color=green>风化</font>」影响');
                    },
                };
                //雷电触电
                lib.skill._tgttthunderDamage = {
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        var x = Math.floor(Math.random() * 99) + 1;
                        var y = Math.floor(Math.random() * 100);
                        return event.nature == 'thunder' && y <= x && event.player == player && event.source && event.source.isAlive();
                    },
                    content() {
                        player.addTgttBuff('chudian', 1);
                        game.log(player, '受到「<font color=purple>触电</font>」影响');
                    },
                };
                //火焰灼烧
                lib.skill._tgttfireDamage = {
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        var x = Math.floor(Math.random() * 99) + 1;
                        var y = Math.floor(Math.random() * 100);
                        return event.nature == 'fire' && y <= x && event.player == player && event.source && event.source.isAlive();
                    },
                    content() {
                        player.addTgttBuff('zhuoshao', 1);
                        game.log(player, '受到「<font color=red>灼烧</font>」影响');
                    },
                };
                //寒冰冻结
                lib.skill._tgtticeDamage = {
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        var x = Math.floor(Math.random() * 99) + 1;
                        var y = Math.floor(Math.random() * 100);
                        return event.nature == 'ice' && y <= x && event.player == player && !player.hasTgttBuff('dongjie') && event.source && event.source.isAlive();
                    },
                    content() {
                        player.addTgttBuff('dongjie', 1);
                        game.log(player, '受到「<font color=blue>冻结</font>」影响');
                    },
                };
                //量子纠缠
                lib.skill._tgttquantumDamage = {
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        var x = Math.floor(Math.random() * 99) + 1;
                        var y = Math.floor(Math.random() * 100);
                        return (event.nature == 'tgtt_quantum' || event.nature == 'hyyz_quantum') && y <= x && event.player == player && !player.hasTgttBuff('jiuchan') && event.source && event.source.isAlive();
                    },
                    content() {
                        player.addTgttBuff('jiuchan', 1);
                        game.log(player, '进入「<font color=#500080>纠缠</font>」状态');
                    },
                };
                //虚数禁锢
                lib.skill._tgttimaginaryDamage = {
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        var x = Math.floor(Math.random() * 99) + 1;
                        var y = Math.floor(Math.random() * 100);
                        return (event.nature == 'tgtt_imaginary' || event.nature == 'hyyz_imaginary') && y <= x && event.player == player && !player.hasTgttBuff('jingu') && event.source && event.source.isAlive();
                    },
                    content() {
                        player.addTgttBuff('jingu', 1);
                        game.log(player, '被「<font color=yellow>禁锢</font>」了');
                    },
                };
            }
            // ---------------------------------------击碎勾玉------------------------------------------//
            lib.element.player.Tgttbroken = function () {
                var next = game.createEvent('Tgttbroken');
                next.player = this;
                for (var i = 0; i < arguments.length; i++) {
                    if (typeof arguments[i] == 'number') next.num = arguments[i];
                }
                if (next.num == undefined) next.num = 1;
                if (next.num > this.maxHp - this.countMark('_tgtt_Broken')) next.num = this.maxHp - this.countMark('_tgtt_Broken');
                if (next.num <= 0) _status.event.next.remove(next);
                next.setContent(function () {
                    player.loseMaxHp(num);
                    player.addMark('_tgtt_Broken', num, false);
                    game.log(player, '被击碎了', get.translation(num), '个', '#g勾玉');
                });
                return next;
            };
            lib.element.player.Tgttunbroken = function () {
                var next = game.createEvent('Tgttunbroken');
                next.player = this;
                for (var i = 0; i < arguments.length; i++) {
                    if (typeof arguments[i] == 'number') next.num = arguments[i];
                }
                if (next.num == undefined) next.num = 1;
                if (next.num > this.countMark('_tgtt_Broken')) next.num = this.countMark('_tgtt_Broken');
                if (next.num <= 0) _status.event.next.remove(next);
                next.setContent(function () {
                    player.gainMaxHp(num);
                    player.recover(num);
                    player.removeMark('_tgtt_Broken', num, false);
                    game.log(player, '修复了', get.translation(num), '个', '#g碎玉');
                });
                return next;
            };
            //-----------------破碎勾玉----------------------//
            lib.translate['_tgtt_Broken'] = '碎玉';
            lib.skill._tgtt_Broken = {
                trigger: {
                    player: 'damageBegin4',
                },
                firstDo: true,
                forced: true,
                charlotte: true,
                TaiguSkill: true,
                filter(event, player) {
                    return player.countMark('_tgtt_Broken') > 0 && event.num > 0;
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + player.countMark('_tgtt_Broken') || 0;
                    },
                },
                content() {
                    'step 0';
                    var num = Math.min(player.countMark('_tgtt_Broken'), trigger.num);
                    trigger.num -= num;
                    player.removeMark('_tgtt_Broken', num, false);
                    game.log(player, '失去了', get.translation(num), '个', '#g碎玉');
                },
                markimage: 'extension/太古天庭/image/others/BrokenHp.png',
                intro: {
                    name: '碎玉',
                    content: '碎玉数:#',
                },
            };
            lib.skill._tgtt_unBroken = {
                enable: 'phaseUse',
                firstDo: true,
                charlotte: true,
                TaiguSkill: true,
                filter(event, player) {
                    return player.countMark('_tgtt_Broken') > 0;
                },
                usable: 1,
                check(card) {
                    return 7 - get.value(card);
                },
                filterCard: true,
                selectCard() {
                    var player = _status.event.player;
                    return [1, player.countMark('_tgtt_Broken')];
                },
                position: 'he',
                content() {
                    'step 0';
                    var num = cards.length;
                    player.Tgttunbroken(num);
                },
            };
            lib.translate['_tgtt_unBroken'] = '补玉';
            lib.translate['_tgtt_unBroken_info'] = '出牌阶段限一次,你可以弃置至多X张牌(X为你的碎玉数),' + get.tgttIntroduce('xiubu') + 'X个碎玉.';
            //全局技能
            if (config.extTgtt_huaxialongyou) {
                lib.skill._tgtthuaxialongyou = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    silent: true,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        return player == game.me;
                    },
                    content() {
                        game.countPlayer(function (current) {
                            current.addSkills('tgtt_huaxialongyou');
                        });
                        player.update();
                    },
                };
            }
            if (config.extTgtt_PlayerMingtu) {
                lib.skill._tgttplayermingtu = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    silent: true,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        return player == game.me;
                    },
                    content() {
                        player.addSkills('tgtt_mtxuanze');
                        player.update();
                    },
                };
            }
            if (config.extTgtt_AllPlayerMingtu) {
                lib.skill._tgttallplayermingtu = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    silent: true,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        return player == game.me;
                    },
                    content() {
                        game.countPlayer(function (current) {
                            current.addSkills('tgtt_mtxuanze');
                        });
                        player.update();
                    },
                };
            }
            game.tgttShowNewPack = function () {
                //更新告示,来自活动武将
                var Taigutianting_update = ['/setPlayer/', 'bugfix', '<font color=red>1.本拓展跟随无名杀本体1.10.8版本,对部分函数进行优化,故不再适配1.10.8以下版本,也不要使用β版</font>', '2.拓展界面优化,添加大量功能按钮,具体请看介绍', '3.新增Buff系统,感谢福瑞拓展以及作者钫酸酱提供的帮助', '4.新增命途机制,感谢忽悠宇宙及作者紫灵谷的骊歌提供的帮助', '5.新增约会系统(尚未完善),感谢后宫拓展及作者提供的帮助,由于本人能力问题,约会系统与后宫拓展冲突,望悉知', '6.添加版本及版本号识别,防止出现不必要的BUG', '7.为本拓展封神系列武将更新了皮肤,技能语言和死亡语言,修改了天帝九御,添加了皮肤', '8.将潜替换回GOD,为了后续准备,新增风蚀,量子,虚数三种属性及对应属性【杀】加入游戏', '9.新增联动:开启拓展忽悠宇宙时,该拓展名下的属性【杀】也会触发本拓展名下的对应BUFF', '10.修复部分BUG,可能增加了新BUG', 'To be continued...'];
                //更新武将
                var Taigutianting_players = ['tgtt_srgod'];
                //加载
                var dialog = ui.create.dialog('<span class="text center">' + '新人制作扩展,希望大家支持<br>新人技术不足,希望大家包涵<br>感谢活动武将提供的更新公告代码,感谢萌佬' + '<br>' + '太古天庭 ' + lib.extensionPack.太古天庭.version + ' 更新内容' + '</span>', 'hidden');
                for (var i = 0; i < Taigutianting_update.length; i++) {
                    if (Taigutianting_update[i] == '/setPlayer/') {
                        if (Taigutianting_players.length) dialog.addSmall([Taigutianting_players, 'character']);
                    } else {
                        var li = document.createElement('li');
                        li.innerHTML = Taigutianting_update[i];
                        li.style.textAlign = 'left';
                        dialog.content.appendChild(li);
                    }
                }
                dialog.open();
                var hidden = false;
                if (!ui.auto.classList.contains('hidden')) {
                    ui.auto.hide();
                    hidden = true;
                }
                game.pause();
                var control = ui.create.control('确定', function () {
                    dialog.close();
                    control.close();
                    if (hidden) ui.auto.show();
                    game.resume();
                });
            };
            var version = lib.config.extension_太古天庭_TGTTversion;
            if (!version || version != lib.extensionPack.太古天庭.version) {
                lib.game.showChangeLog = function () {
                    game.saveConfig('extension_太古天庭_TGTTversion', lib.extensionPack.太古天庭.version);
                    game.tgttShowNewPack();
                    lib.init.onfree();
                };
            }
            //转韵(来自活动武将)
            lib.element.player.tgttZhuanYun = function (skill) {
                this[skill] = this[skill] && this[skill] == '平' ? '仄' : '平';
                if (this.getStat('skill')[skill]) delete this.getStat('skill')[skill];
                game.log(this, '转换了了', '#g' + get.translation(skill), '的韵律');
                game.broadcastAll(
                    function (player, skill) {
                        player.$tgttZhuanYun(skill);
                    },
                    this,
                    skill
                );
            };
            lib.element.player.$tgttZhuanYun = function (skill) {
                var mark = this.marks[skill];
                if (mark) {
                    if (mark.firstChild.reversed) {
                        mark.firstChild.reversed = false;
                        mark.firstChild.style.transform = 'none';
                    } else {
                        mark.firstChild.reversed = true;
                        mark.firstChild.style.transform = 'rotate(180deg)';
                    }
                }
            };
            lib.skill._tgtttianyou2 = {
                trigger: {
                    player: 'phaseBefore',
                },
                forced: true,
                charlotte: true,
                TaiguSkill: true,
                popup: false,
                filter(event, player) {
                    return player.storage._tgtttianyou > 0;
                },
                content() {
                    player.removeMark('_tgtttianyou', player.countMark('_tgtttianyou'));
                },
            };
            //大写数字-来自天牢令
            get.tgttCnCapNumber = function (str) {
                return str.replace('一', '壹').replace('二', '贰').replace('三', '叁').replace('四', '肆').replace('五', '伍').replace('六', '陆').replace('七', '柒').replace('八', '捌').replace('九', '玖').replace('十', '拾').replace('百', '佰').replace('千', '仟');
            };
            game.changeStorage = function (players) {
                players.forEach((p) => {
                    p.getSkills().forEach((s) => {
                        let lastValue = p.storage[s];
                        Reflect.defineProperty(p.storage, s, {
                            get() {
                                return lastValue;
                            },
                            set(newValue) {
                                let next = game.createEvent('changeStorage');
                                next.setContent('emptyEvent');
                                next.player = p;
                                lastValue = newValue;
                            },
                        });
                    });
                });
            };
            //-----改函数-----//
            //作弊摸牌
            lib.skill._tgtthuiwan = {
                trigger: {
                    player: 'drawBegin',
                },
                filter(event, player) {
                    if (lib.config.extension_太古天庭_extTgtt_huiwanplayer && game.me == player) return true;
                    if (lib.config.extension_太古天庭_extTgtt_huiwanai && game.me != player) return true;
                    return false;
                },
                charlotte: true,
                TaiguSkill: true,
                forced: true,
                content() {
                    trigger.setContent(lib.skill._tgtthuiwan.drawContent);
                },
                drawContent() {
                    'step 0';
                    if (typeof event.minnum == 'number' && num < event.minnum) num = event.minnum;
                    if (event.drawDeck) {
                        if (event.drawDeck > num) event.drawDeck = num;
                        num -= event.drawDeck;
                    }
                    event.cards = [];
                    if (num > 0) {
                        get.cards(num);
                        var cards = Array.from(ui.cardPile.childNodes);
                        cards
                            .sort(function (b, a) {
                                if (a.name != b.name) return lib.sort.card(a.name, b.name);
                                else if (a.suit != b.suit) return lib.suit.indexOf(a) - lib.suit.indexOf(b);
                                else return a.number - b.number;
                            })
                            .reverse();
                        var next = game.createEvent('chooseButton', false);
                        next.player = player;
                        next.forced = true;
                        next.filterButton = lib.filter.filterButton;
                        next.selectButton = [num, num];
                        next.createDialog = ['作弊:请选择你最想要的' + get.cnNumber(num) + '张牌', cards, 'hidden'];
                        next.ai = (button) => _status.event.player.getUseValue(button.link);
                        next.forceDie = true;
                        if (next.isMine() == false && next.dialog) next.dialog.style.display = 'none';
                        if (next.ai == undefined)
                            next.ai = function () {
                                return 1;
                            };
                        next.setContent('chooseButton');
                    }
                    ('step 1');
                    if (result.links?.length) event.cards = result.links;
                    if (event.drawDeck) {
                        event.cards = event.cards.concat(player.getDeckCards(event.drawDeck));
                    }
                    if (event.log != false) {
                        if (num > 0) {
                            if (event.bottom) game.log(player, '从牌堆底摸了' + get.cnNumber(num) + '张牌');
                            else game.log(player, '摸了' + get.cnNumber(num) + '张牌');
                        }
                        if (event.drawDeck) {
                            game.log(player, '从牌库中获得了' + get.cnNumber(event.drawDeck) + '张牌');
                        }
                    }
                    if (event.animate != false) {
                        if (event.visible) {
                            var next = player.gain(event.cards, 'gain2');
                            if (event.bottom) game.log(player, '从牌堆底摸了' + get.cnNumber(num) + '张牌(', event.cards, ')');
                            else game.log(player, '摸了' + get.cnNumber(num) + '张牌(', event.cards, ')');
                        } else {
                            var next = player.gain(event.cards, 'draw');
                        }
                    } else {
                        var next = player.gain(event.cards);
                        if (event.$draw) player.$draw(event.cards.length);
                    }
                    if (event.gaintag) next.gaintag.addArray(event.gaintag);
                    event.result = event.cards;
                },
                ai: {
                    viewHandcard: true,
                    skillTagFilter(player, tag, arg) {
                        if (player == arg) return false;
                        if (lib.config.extension_太古天庭_player && game.me == player) return true;
                        if (lib.config.extension_太古天庭_ai && game.me != player) return true;
                        return false;
                    },
                },
            };
            lib.translate._tgtthuiwan = '作弊';
            lib.translate._tgtthuiwan_info = '你可以指定你摸到的牌!';
            //---------------------------------------设置:显示手牌上限------------------------------------------//
            if (lib.config.extension_太古天庭_extTgtt_ShowmaxHandcard) {
                lib.skill._tgttShowmaxHandcard = {
                    trigger: {
                        global: ['gameStart', 'roundStart'],
                    },
                    forced: true,
                    popup: false,
                    silent: true,
                    charlotte: true,
                    TaiguSkill: true,
                    content() {
                        var interval = setInterval(() => {
                            if (!game.players.includes(player)) return clearInterval(interval);
                            var numh = player.countCards('h');
                            var nummh = player.getHandcardLimit();
                            if (nummh == Infinity) nummh = '∞';
                            player.node.count.innerHTML = numh + '/' + nummh;
                        }, 100);
                    },
                };
            }
            //---------------------------------------设置:替换武将--来自搬运自用拓展------------------------------------------//
            // 重新选将功能的换将dialog框函数,搬运自真火无敌扩展,可在非托管状态下通过控制台执行重新选将功能
            // 魔改自本体不同模式的选将函数chooseCharacter:function(){
            game.tgttchoosePlayer = {
                // 根据模式走不同的方法
                chooseCharacter(target) {
                    var mode = lib.config.mode;
                    if (mode === 'identity' || mode === 'doudizhu') return game.tgttchoosePlayer.chooseCharacterShenFen.call(target);
                    else if (mode === 'guozhan') return game.tgttchoosePlayer.chooseCharacterGuoZhan.call(target);
                },
                // 身份模式
                chooseCharacterShenFen() {
                    /*if (_status.mode == 'purple') {
                        game.chooseCharacterPurple();
                        return;
                    }*/
                    // 斗地主判断
                    /*if (_status.mode == 'online') {
                        game.chooseCharacterZhidou();
                        return;
                    }
                    if (_status.mode == 'kaihei') {
                        game.chooseCharacterKaihei();
                        return;
                    }
                    if (_status.mode == 'huanle') {
                        game.chooseCharacterHuanle();
                        return;
                    }
                    if (_status.mode == 'binglin') {
                        game.chooseCharacterBinglin();
                        return;
                    }*/
                    var next = game.createEvent('chooseCharacter', false);
                    next.target = this;
                    next.player = game.me;
                    next.filter = function (name) {
                        //if (lib.character[name][1] === 'key' || name.indexOf("key") === 0) return false;
                        return true;
                    };
                    next.showConfig = true;
                    next.addPlayer = function (player) {
                        var list = lib.config.mode_config.identity.identity[game.players.length - 3].slice(0);
                        var list2 = lib.config.mode_config.identity.identity[game.players.length - 2].slice(0);
                        for (var i = 0; i < list.length; i++) list2.remove(list[i]);
                        player.identity = list2[0];
                        player.setIdentity('cai');
                    };
                    next.removePlayer = function () {
                        return game.players.randomGet(target, game.zhu);
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
                        if (_status.mode === 'zhong') {
                            event.zhongmode = true;
                            identityList = ['zhu', 'zhong', 'mingzhong', 'nei', 'fan', 'fan', 'fan', 'fan'];
                        } else {
                            identityList = lib.config.mode_config.identity.identity[game.players.length - 2].slice(0);
                            if (get.config('double_nei')) {
                                switch (get.playerNumber()) {
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
                        }
                        var addSetting = function (dialog) {
                            dialog.add('选择身份').classList.add('add-setting');
                            var table = document.createElement('div');
                            table.classList.add('add-setting');
                            table.style.margin = '0';
                            table.style.width = '100%';
                            table.style.position = 'relative';
                            var listi;
                            if (event.zhongmode) {
                                listi = ['random', 'zhu', 'mingzhong', 'zhong', 'nei', 'fan'];
                            } else {
                                listi = ['random', 'zhu', 'zhong', 'nei', 'fan'];
                            }
                            for (var i = 0; i < listi.length; i++) {
                                var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                td.link = listi[i];
                                if (td.link === target.identity) {
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
                                    if (game.zhu.name) {
                                        if (link != 'random') {
                                            _status.event.parent.fixedseat = get.distance(target, game.zhu, 'absolute');
                                        }
                                        game.zhu.uninit();
                                        delete game.zhu.isZhu;
                                        delete game.zhu.identityShown;
                                    }
                                    var current = this.parentNode.querySelector('.bluebg');
                                    if (current) {
                                        current.classList.remove('bluebg');
                                    }
                                    current = seats.querySelector('.bluebg');
                                    if (current) {
                                        current.classList.remove('bluebg');
                                    }
                                    if (link == 'random') {
                                        if (event.zhongmode) {
                                            link = ['zhu', 'zhong', 'nei', 'fan', 'mingzhong'].randomGet();
                                        } else {
                                            link = ['zhu', 'zhong', 'nei', 'fan'].randomGet();
                                        }
                                        for (var i = 0; i < this.parentNode.childElementCount; i++) {
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
                                        for (var i = 0; i < seats.childElementCount; i++) {
                                            if (get.distance(game.zhu, target, 'absolute') === seats.childNodes[i].link) {
                                                seats.childNodes[i].classList.add('bluebg');
                                            }
                                        }
                                    };
                                    _status.event = _status.event.parent;
                                    _status.event.step = 0;
                                    _status.event.identity = link;
                                    if (link != (event.zhongmode ? 'mingzhong' : 'zhu')) {
                                        seats.previousSibling.style.display = '';
                                        seats.style.display = '';
                                    } else {
                                        seats.previousSibling.style.display = 'none';
                                        seats.style.display = 'none';
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
                            for (var i = 2; i <= game.players.length; i++) {
                                var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                td.innerHTML = get.cnNumber(i, true);
                                td.link = i - 1;
                                seats.appendChild(td);
                                if (get.distance(game.zhu, target, 'absolute') === i - 1) {
                                    td.classList.add('bluebg');
                                }
                                td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                    if (_status.dragged) return;
                                    if (_status.justdragged) return;
                                    if (get.distance(game.zhu, target, 'absolute') == this.link) return;
                                    var current = this.parentNode.querySelector('.bluebg');
                                    if (current) {
                                        current.classList.remove('bluebg');
                                    }
                                    this.classList.add('bluebg');
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (get.distance(game.players[i], target, 'absolute') == this.link) {
                                            game.swapSeat(game.zhu, game.players[i], false);
                                            return;
                                        }
                                    }
                                });
                            }
                            dialog.content.appendChild(seats);
                            if (target == game.zhu) {
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
                                for (var i = 0; i < ban_identity.length; i++) {
                                    while (identityList2.remove(ban_identity[i]));
                                }
                                ban_identity = identityList2.randomGet();
                                identityList.remove(ban_identity);
                                identityList.splice(game.players.indexOf(target), 0, ban_identity);
                            }
                        }
                        if (get.config('special_identity') && !event.zhongmode && game.players.length == 8) {
                            for (var i = 0; i < game.players.length; i++) {
                                delete game.players[i].special_identity;
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
                        if (!game.zhu) game.zhu = target;
                        else {
                            game.zhu.setIdentity();
                            game.zhu.identityShown = true;
                            game.zhu.isZhu = game.zhu.identity == 'zhu';
                            game.zhu.node.identity.classList.remove('guessing');
                            /*target.setIdentity();
                            target.node.identity.classList.remove('guessing');*/
                        }
                        //选将框分配
                        for (var i in lib.characterReplace) {
                            var ix = lib.characterReplace[i];
                            for (var j = 0; j < ix.length; j++) {
                                if (chosen.includes(ix[j]) || lib.filter.characterDisabled(ix[j])) ix.splice(j--, 1);
                            }
                            if (ix.length) {
                                event.list.push(i);
                                list4.addArray(ix);
                                var bool = false;
                                for (var j of ix) {
                                    if (lib.character[j][4] && lib.character[j][4].includes('zhu')) {
                                        bool = true;
                                        break;
                                    }
                                }
                                (bool ? list2 : list3).push(i);
                            }
                        }
                        for (var i in lib.character) {
                            if (list4.includes(i)) continue;
                            if (chosen.includes(i)) continue;
                            if (lib.filter.characterDisabled(i)) continue;
                            if (typeof event.filter === 'function' && event.filter(i) === false) continue;
                            event.list.push(i);
                            list4.push(i);
                            if (lib.character[i][4] && lib.character[i][4].includes('zhu')) {
                                list2.push(i);
                            } else {
                                list3.push(i);
                            }
                        }
                        list2.sort(lib.sort.character);
                        event.list.randomSort();
                        _status.characterlist = list4.slice(0).randomSort();
                        list3.randomSort();
                        if (_status.brawl && _status.brawl.chooseCharacterFilter) {
                            _status.brawl.chooseCharacterFilter(event.list, list2, list3);
                        }
                        var num = get.config('choice_' + target.identity);
                        if (event.zhongmode) {
                            num = 6;
                            if (target.identity == 'zhu' || target.identity == 'nei' || target.identity == 'mingzhong') {
                                num = 8;
                            }
                        }
                        if (target === game.zhu && lib.config.mode !== 'doudizhu') {
                            list = list2.concat(list3.slice(0, num));
                        } else {
                            list = list3.slice(0, 8);
                        }
                        // }
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
                            /*if(!_status.brawl||!_status.brawl.noAddSetting){
                                if(get.config('change_identity')){
                                    addSetting(dialog);
                                }
                            }*/
                        }
                        if (target.special_identity) {
                            dialog.setCaption('选择角色(' + get.translation(target.special_identity) + ')');
                            target.node.identity.firstChild.innerHTML = get.translation(target.special_identity + '_bg');
                        } else {
                            dialog.setCaption('选择角色');
                            //target.setIdentity();
                        }
                        if (lib.onfree) {
                            lib.onfree.push(function () {
                                event.dialogxx = ui.create.characterDialog('heightset', target);
                            });
                        } else {
                            event.dialogxx = ui.create.characterDialog('heightset', target);
                        }
                        var charactersKey = Object.keys(lib.character)
                            .removeArray(event.dialogxx.buttons.map((value) => value.link))
                            .filter((value) => {
                                var character = lib.character[value];
                                if (!character || !character[4]) return false;
                                return true;
                            });
                        if (!event.chosen.length) {
                            game.me.chooseButton(event.dialogxx, true).set('onfree', true).selectButton = function () {
                                if ((_status.brawl && _status.brawl.doubleCharacter) || (target == game.zhu && _status.mode == 'online')) return 2;
                                return get.config('double_character') ? 2 : 1;
                            };
                        } else {
                            lib.init.onfree();
                        }
                        var buttons1 = ui.create.buttons(charactersKey, 'character', event.dialogxx.querySelector('.buttons'));
                        event.dialogxx.buttons = event.dialogxx.buttons.concat(buttons1);
                        const getCapt = function (str) {
                            var capt;
                            if (str.indexOf('_') == -1) {
                                capt = str[0];
                            } else {
                                capt = str[str.lastIndexOf('_') + 1];
                            }
                            capt = capt.toLowerCase();
                            if (!/[a-z]/i.test(capt)) {
                                capt = '自定义';
                            }
                            return capt;
                        };
                        buttons1.forEach((item) => {
                            item.group = lib.character[item.link][1];
                            item.capt = getCapt(item.link);
                            item.classList.add('nodisplay');
                        });
                        ('step 1');
                        if (_status.mode == 'online') event.cardPile = target.storage.doudizhu_cardPile;
                        if (ui.cheat) {
                            ui.cheat.close();
                            delete ui.cheat;
                        }
                        if (ui.cheat2) {
                            ui.cheat2.close();
                            delete ui.cheat2;
                        }
                        var chooseGroup = false;
                        if (event.chosen.length) {
                            if (lib.character[event.chosen[0]][1] == 'shen' && !lib.character[event.chosen[0]][4].includes('hiddenSkill')) {
                                chooseGroup = true;
                            }
                        } else if (event.modchosen) {
                            if (event.modchosen[0] == 'random') event.modchosen[0] = result.buttons[0].link;
                            else event.modchosen[1] = result.buttons[0].link;
                        } else if (result.buttons.length == 2) {
                            event.choosed = [result.buttons[0].link, result.buttons[1].link];
                            game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
                            if (lib.character[event.choosed[0]][1] == 'shen' && !lib.character[event.choosed[0]][4].includes('hiddenSkill')) {
                                chooseGroup = true;
                            }
                        } else {
                            event.choosed = [result.buttons[0].link];
                            if (lib.character[event.choosed[0]][1] == 'shen' && !lib.character[event.choosed[0]][4].includes('hiddenSkill')) {
                                chooseGroup = true;
                            }
                            game.addRecentCharacter(result.buttons[0].link);
                        }
                        if (get.config('choose_group') && chooseGroup) {
                            var list = lib.group.slice(0);
                            list.remove('shen');
                            game.me.chooseControl(list).prompt = '请选择神武将的势力';
                        }
                        ('step 2');
                        event.group = result.control || false;
                        if (event.chosen.length) {
                            lib.element.player.uninit.call(target);
                            lib.element.player.init.call(target, event.chosen[0], event.chosen[1]);
                        } else if (event.modchosen) {
                            lib.element.player.uninit.call(target);
                            lib.element.player.init.call(target, event.modchosen[0], event.modchosen[1]);
                        } else if (event.choosed.length == 2) {
                            lib.element.player.uninit.call(target);
                            lib.element.player.init.call(target, event.choosed[0], event.choosed[1]);
                        } else {
                            lib.element.player.uninit.call(target);
                            lib.element.player.init.call(target, event.choosed[0]);
                        }
                        event.list.remove(get.sourceCharacter(target.name1));
                        event.list.remove(get.sourceCharacter(target.name2));
                        if (target == game.zhu && _status.mode != 'purple') {
                            if (game.players.length > 4 || get.mode() == 'doudizhu') {
                                target.hp++;
                                target.maxHp++;
                                target.update();
                            }
                            if (get.mode() == 'identity') {
                                var enhance_zhu = false;
                                if (_status.connectMode) {
                                    enhance_zhu = _status.mode != 'zhong' && _status.mode != 'purple' && lib.configOL.enhance_zhu && get.population('fan') >= 3;
                                } else {
                                    enhance_zhu = _status.mode != 'zhong' && _status.mode != 'purple' && get.config('enhance_zhu') && get.population('fan') >= 3;
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
                                        case 'liushan':
                                            skill = 'shengxi';
                                            break;
                                        case 'sunce':
                                            skill = 'ciqiu';
                                            break;
                                        case 're_sunben':
                                            skill = 'ciqiu';
                                            break;
                                        case 'yuanshao':
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
                                            target.addSkill(skill);
                                            target.storage.enhance_zhu = skill;
                                        },
                                        game.zhu,
                                        skill
                                    );
                                }
                            }
                            if (get.mode() == 'doudizhu') {
                                if (['normal', 'huanle', 'kaihei'].includes(_status.mode)) {
                                    var skill = ['feiyang', 'bahu'];
                                    game.broadcastAll(
                                        function (player, skill) {
                                            target.addSkill(skill);
                                        },
                                        game.zhu,
                                        skill
                                    );
                                }
                                if (_status.mode == 'binglin') {
                                    var skill = game.zhuSkill;
                                    game.broadcastAll(
                                        function (player, skill) {
                                            target.addSkill(skill);
                                        },
                                        game.zhu,
                                        skill
                                    );
                                }
                            }
                        } else {
                            if (_status.mode == 'binglin') {
                                var skill = ['binglin_shaxue', 'binglin_neihong'];
                                game.broadcastAll(
                                    function (player, skill) {
                                        target.addSkill(skill);
                                    },
                                    target,
                                    skill
                                );
                            }
                        }
                        if (_status.mode == 'online') {
                            game.zhu.hp = 4;
                            game.zhu.maxHp = 4;
                            game.zhu.update();
                            target.storage.doudizhu_cardPile = event.cardPile;
                            target.markSkill('doudizhu_cardPile');
                        }
                        if (_status.mode == 'purple') {
                            if (target == game.rZhu || target == game.bZhu) {
                                target.hp++;
                                target.maxHp++;
                                target.update();
                            }
                        }
                        /*for(var i=0;i<game.players.length;i++){
                            if(game.players[i]!=game.zhu&&game.players[i]!=target){
                                event.list.randomSort();
                                event.ai(game.players[i],event.list.splice(0,get.config('choice_'+game.players[i].identity)),null,event.list)
                            }
                        }*/
                        ('step 3');
                        if (event.group) {
                            target.group = event.group;
                            target.node.name.dataset.nature = get.groupnature(target.group);
                            target.update();
                        }
                        for (var i = 0; i < game.players.length; i++) {
                            _status.characterlist.remove(game.players[i].name);
                            _status.characterlist.remove(game.players[i].name1);
                            _status.characterlist.remove(game.players[i].name2);
                        }
                        ('step 4');
                        setTimeout(function () {
                            ui.arena.classList.remove('choose-character');
                        }, 500);
                        if (event.special_identity) {
                            for (var i = 0; i < event.special_identity.length; i++) {
                                game.zhu.addSkill(event.special_identity[i]);
                            }
                        }
                    });
                },
                // 国战
                chooseCharacterGuoZhan() {
                    var next = game.createEvent('chooseCharacter', false);
                    next.showConfig = true;
                    next.addPlayer = true;
                    next.target = this;
                    next.player = game.me;
                    next.ai = function (player, list, back) {
                        if (_status.brawl && _status.brawl.chooseCharacterAi) {
                            if (_status.brawl.chooseCharacterAi(player, list, back) !== false) {
                                return;
                            }
                        }
                        var filterChoice = function (name1, name2) {
                            if (get.is.double(name1)) return false;
                            var group1 = lib.character[name1][1];
                            var group2 = lib.character[name2][1];
                            if (group1 == 'ye') return group2 != 'ye';
                            var double = get.is.double(name2, true);
                            if (double) return double.includes(group1);
                            return group1 == group2;
                        };
                        for (var i = 0; i < list.length - 1; i++) {
                            for (var j = i + 1; j < list.length; j++) {
                                if (filterChoice(list[i], list[j]) || filterChoice(list[j], list[i])) {
                                    var mainx = list[i];
                                    var vicex = list[j];
                                    if (!filterChoice(mainx, vicex) || (filterChoice(vicex, mainx) && get.guozhanReverse(mainx, vicex))) {
                                        mainx = list[j];
                                        vicex = list[i];
                                    }
                                    player.init(mainx, vicex, false);
                                    if (back) {
                                        list.remove(player.name1);
                                        list.remove(player.name2);
                                        for (var i = 0; i < list.length; i++) {
                                            back.push(list[i]);
                                        }
                                    }
                                    return;
                                }
                            }
                        }
                    };
                    next.setContent(function () {
                        'step 0';
                        ui.arena.classList.add('choose-character');
                        var addSetting = function (dialog) {
                            dialog.add('选择座位').classList.add('add-setting');
                            var seats = document.createElement('table');
                            seats.classList.add('add-setting');
                            seats.style.margin = '0';
                            seats.style.width = '100%';
                            seats.style.position = 'relative';
                            for (var i = 1; i <= game.players.length; i++) {
                                var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                td.innerHTML = '<span>' + get.cnNumber(i, true) + '</span>';
                                td.link = i - 1;
                                seats.appendChild(td);
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
                                    this.classList.add('bluebg');
                                    _status.cheat_seat = this;
                                });
                            }
                            dialog.content.appendChild(seats);
                            if (game.me == game.zhu) {
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
                        var chosen = lib.config.continue_name || [];
                        game.saveConfig('continue_name');
                        event.chosen = chosen;
                        var i;
                        event.list = [];
                        for (var i in lib.character) {
                            if (i.indexOf('gz_shibing') == 0) continue;
                            //if (i.indexOf('key') === 0) continue;
                            //if (lib.character[i][1] === 'key') continue;
                            if (chosen.includes(i)) continue;
                            if (lib.filter.characterDisabled(i)) continue;
                            if (get.config('onlyguozhan')) {
                                if (!lib.characterPack.mode_guozhan[i]) continue;
                                if (get.is.jun(i)) continue;
                            }
                            if (lib.character[i][4].includes('hiddenSkill')) continue;
                            if (lib.character[i][2] == 3 || lib.character[i][2] == 4 || lib.character[i][2] == 5) event.list.push(i);
                        }
                        _status.characterlist = event.list.slice(0);
                        _status.yeidentity = [];
                        if (_status.brawl && _status.brawl.chooseCharacterFilter) {
                            event.list = _status.brawl.chooseCharacterFilter(event.list);
                        }
                        event.list.randomSort();
                        // var list=event.list.splice(0,parseInt(get.config('choice_num')));
                        var list;
                        if (_status.brawl && _status.brawl.chooseCharacter) {
                            list = _status.brawl.chooseCharacter(event.list, game.me);
                        } else {
                            list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
                        }
                        if (_status.auto) {
                            event.ai(target, list);
                            lib.init.onfree();
                        } else if (chosen.length) {
                            game.me.init(chosen[0], chosen[1], false);
                            lib.init.onfree();
                        } else {
                            event.dialogxx = ui.create.characterDialog(
                                'heightset',
                                function (i) {
                                    if (i.indexOf('gz_shibing') == 0) return true;
                                    if (get.config('onlyguozhan')) {
                                        if (!lib.characterPack.mode_guozhan[i]) return true;
                                        if (get.is.jun(i)) return true;
                                    }
                                },
                                get.config('onlyguozhanexpand') ? 'expandall' : undefined,
                                get.config('onlyguozhan') ? 'onlypack:mode_guozhan' : undefined,
                                target
                            );
                            var dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
                            if (!_status.brawl || !_status.brawl.noAddSetting) {
                                if (get.config('change_identity')) {
                                    addSetting(dialog);
                                }
                            }
                            var next = game.me.chooseButton(event.dialogxx, true, 2).set('onfree', true);
                            next.filterButton = function (button) {
                                if (ui.dialog.buttons.length <= 10) {
                                    for (var i = 0; i < ui.dialog.buttons.length; i++) {
                                        if (ui.dialog.buttons[i] != button) {
                                            if (
                                                lib.element.player.perfectPair.call({
                                                    name1: button.link,
                                                    name2: ui.dialog.buttons[i].link,
                                                })
                                            ) {
                                                button.classList.add('glow2');
                                            }
                                        }
                                    }
                                }
                                if (lib.character[button.link][4].includes('hiddenSkill')) return false;
                                if (ui.selected.buttons.length == 0) {
                                    if (get.is.double(button.link)) return false;
                                    if (lib.character[button.link][1] == 'ye') return true;
                                    for (var i = 0; i < ui.dialog.buttons.length; i++) {
                                        var double = get.is.double(ui.dialog.buttons[i].link, true);
                                        if (ui.dialog.buttons[i] != button && (lib.character[button.link][1] == lib.character[ui.dialog.buttons[i].link][1] || (double && double.includes(lib.character[button.link][1])))) {
                                            return true;
                                        }
                                    }
                                    return false;
                                }
                                if (!lib.character[button.link] || lib.character[button.link][1] == 'ye') return false;
                                if (get.is.double(ui.selected.buttons[0].link)) return false;
                                if (lib.character[ui.selected.buttons[0].link][1] == 'ye') return true;
                                if (get.is.double(button.link)) return get.is.double(button.link, true).includes(lib.character[ui.selected.buttons[0].link][1]);
                                return lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1];
                            };
                            next.switchToAuto = function () {
                                event.ai(target, list);
                                ui.arena.classList.remove('selecting');
                            };
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
                        if (result.buttons) {
                            //lib.element.player.uninit.call(target);
                            lib.element.player.init.call(target, result.buttons[0].link, result.buttons[1].link, false);
                            game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
                        }
                        target.setIdentity(target.group);
                        /*event.list.remove(game.me.name1);
                        event.list.remove(game.me.name2);
                        for(var i=0;i<game.players.length;i++){
                            if(game.players[i]!=game.me){
                                event.ai(game.players[i],game.getCharacterChoice(event.list,parseInt(get.config('choice_num'))),event.list);
                            }
                        }*/
                        target.classList.add('unseen');
                        target.classList.add('unseen2');
                        if (target != game.me) {
                            target.node.identity.firstChild.innerHTML = '猜';
                            target.node.identity.dataset.color = 'unknown';
                            target.node.identity.classList.add('guessing');
                        }
                        target.hiddenSkills = lib.character[target.name1][3].slice(0);
                        var hiddenSkills2 = lib.character[target.name2][3];
                        for (var j = 0; j < hiddenSkills2.length; j++) {
                            target.hiddenSkills.add(hiddenSkills2[j]);
                        }
                        for (var j = 0; j < target.hiddenSkills.length; j++) {
                            if (!lib.skill[target.hiddenSkills[j]]) {
                                target.hiddenSkills.splice(j--, 1);
                            }
                        }
                        target.group = 'unknown';
                        target.sex = 'unknown';
                        target.name1 = target.name;
                        target.name = 'unknown';
                        target.identity = 'unknown';
                        target.node.name.show();
                        target.node.name2.show();
                        target._group = lib.character[target.name1][1];
                        for (var j = 0; j < target.hiddenSkills.length; j++) {
                            target.addSkillTrigger(target.hiddenSkills[j], true);
                        }
                        setTimeout(function () {
                            ui.arena.classList.remove('choose-character');
                        }, 500);
                    });
                },
            };
            if (lib.config.extension_太古天庭_extTgtt_AIchooseCharacter) {
                lib.skill._tgtt_AIxuanjiang = {
                    trigger: {
                        global: 'gameStart',
                        player: 'enterGame',
                    },
                    forced: true,
                    popup: false,
                    silent: true,
                    _priority: 523,
                    firstDo: true,
                    charlotte: true,
                    TaiguSkill: true,
                    filter(event, player) {
                        return player === game.me && ['identity', 'guozhan', 'doudizhu'].includes(lib.config.mode);
                    },
                    content() {
                        'step 0';
                        player.chooseTarget([1, 1], get.prompt('重新选将'), '请选择一名角色并替换其武将牌', lib.filter.all).set('ai', function (target) {
                            return 0;
                        });
                        ('step 1');
                        if (result.targets?.length) {
                            event.target = result.targets[0];
                            game.tgttchoosePlayer.chooseCharacter(event.target);
                        } else event.finish();
                        ('step 2');
                        event.goto(0);
                    },
                };
            }
            //天帝模式(沐如风晨自用)--来自搬运自用的作弊工具--
            if (lib.config.extension_太古天庭_extTgtt_Diycharacter) {
                lib.skill._tgttdiycharacterskill = {
                    //priority:1000,
                    _priority: 999,
                    trigger: {
                        player: ['enterGame'],
                        global: 'gameDrawEnd',
                    },
                    //enable:'phaseUse',
                    silent: true,
                    forced: true,
                    filter(event, player) {
                        return player == game.me;
                    },
                    content() {
                        'step 0';
                        event.item = '[自定义全场角色]<li>此功能支持所有武将的更换<li>此功能支持武将包分类选择';
                        event.tool = '[自定义全场角色]<li>此工具支持观看武将的身份<li>此工具支持武将的位置更换<li>此工具支持更换武将的手牌<li>目前可能存在漏洞慎重操作';
                        event.back = false;
                        player
                            .chooseControl('选择角色', '工具', '结束', function () {
                                return '结束';
                            })
                            .set('prompt', event.item + '<br><br>⊙是否选择角色以更换？');
                        ('step 1');
                        event.back = false;
                        if (result.control == '结束') {
                            event.finish();
                        } else {
                            if (result.control == '选择角色') {
                                player
                                    .chooseTarget(1, '⊙请选择更换武将牌的角色', function (card, player, target) {
                                        return true;
                                    })
                                    .set('prompt2', event.item);
                                event.goto(2);
                            } else {
                                player
                                    .chooseControl('显示身份', '交换位置', '更换手牌', '返回', function () {
                                        return '返回';
                                    })
                                    .set('prompt', event.tool + '<br><br>⊙请选择工具功能');
                                event.goto(5);
                            }
                        }
                        ('step 2');
                        //选择角色
                        if (result.targets?.length) {
                            if (!event.back) event.targets = result.targets[0];
                            event.back = false;
                            var list = [];
                            var ranlist = [];
                            for (var a in lib.characterPack) {
                                list.push([lib.translate[a + '_character_config'], '', lib.translate[a + '_character_config']]);
                                ranlist.push(a);
                                var finish = 0;
                                var shift = [];
                                for (var c in lib.characterPack[a]) {
                                    shift.push(c);
                                }
                                var b = shift.randomGet();
                                if (a == 'mode_extension_boss') {
                                    lib.card[lib.translate[a + '_character_config']] = {
                                        enable: true,
                                        type: a,
                                        image: 'mode/boss/character/' + b,
                                        color: 'white',
                                        opacity: 1,
                                        textShadow: 'black 0 0 2px',
                                        chongzhu: true,
                                    };
                                } else if (a == 'mode_extension_jiange') {
                                    lib.card[lib.translate[a + '_character_config']] = {
                                        enable: true,
                                        type: a,
                                        image: 'mode/versus/character/' + b,
                                        color: 'white',
                                        opacity: 1,
                                        textShadow: 'black 0 0 2px',
                                        chongzhu: true,
                                    };
                                } else if (a.includes('mode_')) {
                                    lib.card[lib.translate[a + '_character_config']] = {
                                        enable: true,
                                        type: a,
                                        image: 'ext:' + lib.translate[a + '_character_config'] + '/' + b + '.jpg',
                                        color: 'white',
                                        opacity: 1,
                                        textShadow: 'black 0 0 2px',
                                        chongzhu: true,
                                    };
                                } else {
                                    lib.card[lib.translate[a + '_character_config']] = {
                                        enable: true,
                                        type: a,
                                        image: 'character/' + b,
                                        color: 'white',
                                        opacity: 1,
                                        textShadow: 'black 0 0 2px',
                                        chongzhu: true,
                                    };
                                }
                            }
                            if (list.length) {
                                player.chooseButton(['⊙请选择来源武将包<br>[已指定:' + get.translation(event.targets) + ']', [list, 'vcard']]).set('ai', function (button) {
                                    return -1;
                                });
                                event.goto(3);
                            } else {
                                event.goto(0);
                            }
                        } else {
                            event.goto(0);
                        }
                        ('step 3');
                        //选择了来源武将包
                        if (result.links?.length) {
                            var a = get.type(result.links[0][2]);
                            event.pack = lib.characterPack[a];
                            packname = lib.translate[a + '_character_config'];
                            var list = [];
                            var ranlist = [];
                            //var group=['shen','wei','shu','wu','qun','jin'];
                            var group = lib.group;
                            for (var i = 0; i < group.length; i++) {
                                for (var b in event.pack) {
                                    var role = event.pack[b];
                                    if (role[1] == group[i]) {
                                        lib.character[b] = role;
                                        var describe = get.translation(role[1]) + role[2];
                                        //var describe='武将';
                                        list.push(['🃏' + describe, '', b]);
                                        ranlist.push(b);
                                        if (a == 'mode_extension_boss') {
                                            lib.card[b] = {
                                                enable: true,
                                                type: 'character',
                                                image: 'mode/boss/character/' + b,
                                                color: 'white',
                                                opacity: 1,
                                                //borderRadius: '20px',
                                                textShadow: 'black 0 0 2px',
                                                chongzhu: true,
                                            };
                                        } else if (a == 'mode_extension_jiange') {
                                            lib.card[b] = {
                                                enable: true,
                                                type: 'character',
                                                image: 'mode/versus/character/' + b,
                                                color: 'white',
                                                opacity: 1,
                                                //borderRadius: '20px',
                                                textShadow: 'black 0 0 2px',
                                                chongzhu: true,
                                            };
                                        } else if (a.includes('mode_')) {
                                            lib.card[b] = {
                                                enable: true,
                                                type: 'character',
                                                image: 'ext:' + lib.translate[a + '_character_config'] + '/' + b + '.jpg',
                                                color: 'white',
                                                opacity: 1,
                                                //borderRadius: '20px',
                                                textShadow: 'black 0 0 2px',
                                                chongzhu: true,
                                            };
                                        } else {
                                            lib.card[b] = {
                                                enable: true,
                                                type: 'character',
                                                image: 'character/' + b,
                                                color: 'white',
                                                opacity: 1,
                                                //borderRadius: '20px',
                                                textShadow: 'black 0 0 2px',
                                                chongzhu: true,
                                            };
                                        }
                                    }
                                }
                            }
                            var choose = ranlist.randomGet();
                            player.chooseButton(['⊙请选择更换的武将<br>[已选择:' + lib.translate[a + '_character_config'] + ']', [list, 'vcard']]).ai = function (button) {
                                var name = button.link[2];
                                return name == choose;
                            };
                            event.goto(4);
                        } else {
                            //event.back=true;
                            //result.bool=true;
                            event.goto(0);
                        }
                        ('step 4');
                        //选择了更换的武将
                        if (result.links?.length) {
                            event.back = false;
                            if (event.targets.name2) {
                                event.changejiang = result.links[0][2];
                                player
                                    .chooseControl('更换主将', '更换副将', function () {
                                        return '更换主将';
                                    })
                                    .set('prompt', '⊙请选择更换主将或副将');
                                event.goto(9);
                            } else {
                                event.targets.init(result.links[0][2]);
                                if (event.targets.identity == 'zhu') {
                                    event.targets.maxHp++;
                                    event.targets.hp++;
                                    event.targets.update();
                                }
                                event.goto(0);
                            }
                        } else {
                            event.back = true;
                            result.bool = true;
                            event.goto(2);
                        }
                        ('step 5');
                        //工具
                        if (result.control == '显示身份') {
                            for (var i = 0; i < game.players.length; i++) {
                                game.players[i].setIdentity(get.translation(game.players[i].identity));
                                game.players[i].say(get.translation(game.players[i].identity));
                                //game.players[i].say(get.translation(game.players[i].identity));
                            }
                            result.control = '工具';
                            event.back = true;
                            event.goto(1);
                        } else if (result.control == '交换位置') {
                            player
                                .chooseTarget('⊙请选择交换位置的两名角色', 2, function (card, player, target) {
                                    return true;
                                })
                                .set('prompt2', event.item);
                            event.goto(6);
                        } else if (result.control == '更换手牌') {
                            player
                                .chooseTarget('⊙请选择更换手牌的角色', 1, function (card, player, target) {
                                    return true;
                                })
                                .set('prompt2', event.item);
                            event.goto(7);
                        } else event.goto(0);
                        ('step 6');
                        //交换位置
                        if (result.targets?.length) {
                            event.targets = result.targets;
                            game.swapSeat(event.targets[0], event.targets[1], false);
                            result.control = '工具';
                            event.back = true;
                            event.goto(1);
                        } else {
                            result.control = '工具';
                            event.back = true;
                            event.goto(1);
                        }
                        ('step 7');
                        //更换手牌
                        if (result.targets?.length) {
                            if (!event.back) event.target = result.targets[0];
                            event.back = false;
                            var content = [get.translation(event.target) + '的手牌<br>⊙是否更换其手牌？', event.target.getCards('h')];
                            player
                                .chooseControl('替换', '随机', '取消', function () {
                                    return '取消';
                                })
                                .set('dialog', content);
                            event.goto(8);
                        } else {
                            result.control = '工具';
                            event.back = true;
                            event.goto(1);
                        }
                        ('step 8');
                        //选择了更换
                        if (result.control == '替换') {
                            event.back = false;
                            event.goto(10);
                        } else if (result.control == '随机') {
                            var hs = event.target.getCards('h');
                            game.addVideo('lose', event.target, [get.cardsInfo(hs), [], [], []]);
                            for (var i = 0; i < hs.length; i++) {
                                hs[i].discard(false);
                            }
                            event.target.directgain(get.cards(hs.length));
                            event.back = true;
                            result.bool = true;
                            event.goto(7);
                        } else {
                            //if(event.dialog) event.dialog.close();
                            result.control = '工具';
                            event.back = true;
                            event.goto(1);
                        }
                        ('step 9');
                        //主将副将
                        var hp = event.targets.hp;
                        var maxhp = event.targets.maxHp;
                        if (result.control == '更换主将') {
                            event.targets.init(event.changejiang, event.targets.name2);
                        } else {
                            if (event.targets.name.indexOf('unknown') == -1) {
                                var name = 'name';
                            } else {
                                var name = 'name1';
                            }
                            event.targets.init(event.targets.name, event.changejiang);
                        }
                        event.targets.update();
                        event.targets.maxHp = Math.ceil((event.targets.maxHp + maxhp) / 2);
                        event.targets.hp = Math.ceil((event.targets.hp + hp) / 2);
                        if (event.targets.identity == 'zhu') {
                            event.targets.maxHp++;
                            event.targets.hp++;
                        }
                        event.targets.update();
                        event.back = true;
                        event.goto(0);
                        ('step 10');
                        //替换手牌
                        result.bool = false;
                        event.videoId = lib.status.videoId++;
                        var cards = event.target.getCards('h');
                        event.dialogs = ui.create.dialog(get.translation(event.target) + '的手牌<br>⊙请选择要替换的牌', cards);
                        event.dialogs.videoId = event.videoId;
                        if (!event.isMine()) {
                            event.dialogs.style.display = 'none';
                        }
                        player
                            .chooseButton(1, function (card, player) {
                                return false;
                            })
                            .set('dialog', event.videoId);
                        ('step 11');
                        //展开替换列表
                        event.dialogs.close();
                        if (result.bool) {
                            result.bool = false;
                            event.changecard = result.links[0];
                            event.cardlist = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                var info = lib.card[name];
                                if (!event.cardlist[info.type]) {
                                    event.cardlist[info.type] = [];
                                }
                                if (name == 'sha') {
                                    event.cardlist.push([get.translation(lib.card[name].type), '', 'sha', '']);
                                    event.cardlist.push([get.translation(lib.card[name].type), '', 'sha', 'fire']);
                                    event.cardlist.push([get.translation(lib.card[name].type), '', 'sha', 'thunder']);
                                    event.cardlist.push([get.translation(lib.card[name].type), '', 'sha', 'ice']);
                                    event.cardlist.push([get.translation(lib.card[name].type), '', 'sha', 'stab']);
                                } else event.cardlist.push([get.translation(lib.card[name].type), '', name, '']);
                            }
                            event.dialog = ui.create.dialog('⊙请选择要替换成的牌', [event.cardlist, 'vcard']);
                            player.chooseButton(event.dialog).ai = function (button) {
                                return false;
                            };
                            event.goto(12);
                        } else {
                            event.back = true;
                            result.bool = true;
                            event.goto(7);
                        }
                        ('step 12');
                        //替换完成
                        if (result.bool) {
                            event.changecard.discard(false);
                            event.target.gain(game.createCard({ name: result.links[0][2], nature: result.links[0][3] }));
                        }
                        event.back = true;
                        result.bool = true;
                        if (event.dialog) event.dialog.close();
                        event.goto(10);
                        ('step 13');
                        event.goto(0);
                    },
                };
            }
            lib.element.player.TaiguGetName = function () {
                if (this.name.lastIndexOf('_') == -1) {
                    return this.name;
                }
                return this.name.slice(this.name.lastIndexOf('_') + 1);
            };
            //------------------------------------------载入css------------------------------------------//
            lib.init.css('extension/太古天庭/css', 'extension');
            //定义势力
            /************太古************/
            lib.group.addArray(['taigu']);
            lib.translate.taigu = '古';
            lib.translate.taigu2 = '古';
            lib.groupnature.taigu = 'taigu';
            lib.translate.taiguColor = '#ffd700';
            /*武将评级*/
            if (lib.rank) {
                lib.rank.rarity.rare.addArray(['tgtt_fsliuyan', 'tgtt_fssunqian', 'tgtt_fszhangyì', 'tgtt_fswangping', 'tgtt_fsfuqian', 'tgtt_fsmazhong', 'tgtt_fszhangyi', 'tgtt_fszhangnan', 'tgtt_fsfengxí', 'tgtt_fsjianyong', 'tgtt_fslvkai', 'tgtt_fsfurong', 'tgtt_fsfeiyi', 'tgtt_fsdonghe', 'tgtt_fsdengzhi', 'tgtt_fschenzhen', 'tgtt_fsjiangwan', 'tgtt_fsdongyun', 'tgtt_fsqinmi', 'tgtt_fsyanghong', 'tgtt_fsmaliang', 'tgtt_fschengji', 'tgtt_fsfazheng', 'tgtt_fsxushu', 'tgtt_fswuyi', 'tgtt_fsliuchen', 'tgtt_fsxujing', 'tgtt_fsliuba', 'tgtt_fsmizhu', 'tgtt_fspuyuan', 'tgtt_fshuojun', 'tgtt_fszhouqun', 'tgtt_fschendao', 'tgtt_fsmayunlu', 'tgtt_fspangtong', 'tgtt_fszhaoxiang', 'tgtt_fsyanyan', 'tgtt_fsmenghuo', 'tgtt_fszhurong', 'tgtt_fsxiahoujuan', 'tgtt_fshujinding', 'tgtt_fszhugeliang', 'tgtt_fshuangyueying', 'tgtt_fsxiahouba', 'tgtt_fsmengjie', 'tgtt_fszongyu', 'tgtt_fsliuzhaolie', 'tgtt_fsganfuren', 'tgtt_fsmifuren', 'tgtt_fswufuren', 'tgtt_fscaoang']);
                lib.rank.rarity.epic.addArray(['tgtt_xsnanuke', 'tgtt_xslan', 'tgtt_xsboshizun', 'tgtt_xsyaoshi', 'tgtt_xstayiziyuluosi', 'tgtt_xsfuli', 'tgtt_xskelibo', 'tgtt_xsaha', 'tgtt_xsix', 'tgtt_fszhangjiao', 'tgtt_fsliubei', 'tgtt_fsguanyu', 'tgtt_fszhangfei', 'tgtt_fshuangzhong', 'tgtt_fsmachao', 'tgtt_fszhaoyun', 'tgtt_fsjiangwei', 'tgtt_fsliaohua', 'tgtt_fsxiangchong', 'tgtt_fsweiyan', 'tgtt_fsxusheng', 'tgtt_fshuanggai', 'tgtt_fschengpu', 'tgtt_fshandang']);
                lib.rank.rarity.legend.addArray(['tgtt_zzfssongrui', 'tgtt_jlnhtusu', 'tgtt_tgdssongrui', 'tgtt_tgxstusu', 'tgtt_tgnssongxiang', 'tgtt_tgbstuyun', 'tgtt_dychuyinweilai', 'tgtt_dyningguang', 'tgtt_dyyubanmeiqin', 'tgtt_dyleimu', 'tgtt_dytushansusu', 'tgtt_dyluotianyi', 'tgtt_dyxiaoniaoyouliuhua', 'tgtt_dykekeluo']);
            }
        },
        precontent(Taigutianting) {
            lib.init.js(EXT_TGTT_PATH + 'asset/buff.js');
            lib.init.js(EXT_TGTT_PATH + 'asset/mingtu.js');
            window.tgtt_import = function (func) {
                func(lib, game, ui, get, ai, _status);
            };
            //---------------------------------------自动开启武将------------------------------------------//
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
            //前缀
            lib.namePrefix.set('太古', { color: 'yellow', nature: 'yellow', showName: '太古' });
            lib.namePrefix.set('紫薇', { color: 'purple', nature: 'pink', showName: '紫薇' });
            lib.namePrefix.set('帝御', { color: 'cyan', nature: 'white', showName: '帝御' });
            lib.namePrefix.set('四圣', { color: 'red', nature: 'orange', showName: '四圣' });
            lib.namePrefix.set('封神', { color: 'orange', nature: 'red', showName: '封神' });
            lib.namePrefix.set('星神', { color: 'pink', nature: 'blue', showName: '星神' });
            //动态翻译
            lib.dynamicTranslate.tgtt_fszglzhaoce = function (player) {
                if (!player.storage.tgtt_fszglzhaoce) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>出牌阶段开始时,你摸两张牌,<br><li><font color=yellow>阴:获得技能【观星】和【空城】直到下个出牌阶段开始前;</font><br><li>阳:你获得技能【看破】和【火计】直到下个出牌阶段开始前';
                return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>出牌阶段开始时,你摸两张牌,<br><li>阴:获得技能【观星】和【空城】直到下个出牌阶段开始前;<br><li><font color=yellow>阳:你获得技能【看破】和【火计】直到下个出牌阶段开始前.</font>';
            };
            lib.dynamicTranslate.tgtt_dylmmofa = function (player) {
                if (!player.storage.tgtt_dylmmofa) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>出牌阶段开始时,你摸两张牌并获得两张【影】,<br><li><font color=yellow>阴:你获得技能【通灵】和【融合】直到下个出牌阶段开始前;</font><br><li>阳:你获得技能【启灵】和【幻化】直到下个出牌阶段开始前';
                return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>出牌阶段开始时,你摸两张牌并获得两张【影】,<br><li>阴:你获得技能【通灵】和【融合】直到下个出牌阶段开始前;<br><li><font color=yellow>阳:你获得技能【启灵】和【幻化】直到下个出牌阶段开始前.</font>';
            };
            lib.dynamicTranslate.tgtt_fslblongnu = function (player) {
                if (!player.storage.tgtt_fslblongnu) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>回合开始时,<br><font color=yellow>1.阴:你摸两张牌并增加1点体力上限,你获得如下效果直至回合结束:<br><li>①你的黑色手牌均视为雷杀且无距离和次数限制;<br><li>②防止你受到的雷电伤害且每当一名其他角色受到1点雷电伤害,你摸一张牌并增加1点体力上限;</font><br>2.阳:你摸两张牌并回复1点体力,你获得如下效果直至回合结束:<br><li>①你的红色手牌均视为火杀且无距离和次数限制;<br><li>②防止你受到的火焰伤害且每当一名其他角色受到1点火焰伤害,你摸一张牌并回复1点体力';
                return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>回合开始时,<br>1.阴:你摸两张牌并增加1点体力上限,你获得如下效果直至回合结束:<br><li>①你的黑色手牌均视为雷杀且无距离和次数限制;<br><li>②防止你受到的雷电伤害且每当一名其他角色受到1点雷电伤害,你摸一张牌并增加1点体力上限;<br><font color=yellow>2.阳:你摸两张牌并回复1点体力,你获得如下效果直至回合结束:<br><li>①你的红色手牌均视为火杀且无距离和次数限制;<br><li>②防止你受到的火焰伤害且每当一名其他角色受到1点火焰伤害,你摸一张牌并回复1点体力.</font>';
            };
            lib.dynamicTranslate.tgtt_fszxxiying = function (player) {
                if (!player.storage.tgtt_fszxxiying) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>回合开始时,<br><li><font color=yellow>阴:你获得一张红色牌,摸两张牌并获得1点护甲,视为拥有【龙魂】且受到伤害后摸两倍的牌直至你下回合开始;</font><br><li>阳:你获得一张带<伤害>标签的牌,摸两张牌并回复1点体力,视为拥有【凤魄】且造成伤害后摸两倍的牌直至你下回合开始';
                return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>回合开始时,<br><li>阴:你获得一张红色牌,摸两张牌并获得1点护甲,视为拥有【龙魂】且受到伤害后摸两倍的牌直至你下回合开始;<br><li><font color=yellow>阳:你获得一张带<伤害>标签的牌,摸两张牌并回复1点体力,视为拥有【凤魄】且造成伤害后摸两倍的牌直至你下回合开始.</font>';
            };
            lib.dynamicTranslate.tgtt_fsmjmanhun = function (player) {
                if (!player.storage.tgtt_fsmjmanhun) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>出牌阶段开始时,你摸两张牌,<br><li><font color=yellow>阴:你获得技能【蛮王】和【悍勇】直到下个出牌阶段开始前;</font><br><li>阳:你获得技能【恶泉】和【蛮智】直到下个出牌阶段开始前';
                return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>出牌阶段开始时,你摸两张牌,<br><li>阴:你获得技能【蛮王】和【悍勇】直到下个出牌阶段开始前;<br><li><font color=yellow>阳:你获得技能【恶泉】和【蛮智】直到下个出牌阶段开始前.</font>';
            };
            lib.dynamicTranslate.tgtt_fslzlqingyi = function (player) {
                if (player.storage.tgtt_fslzlqingyi == 1) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>出牌阶段开始时,<br><li>阴:你回复1点体力并获得技能【淑慎】,【神智】和【皇思】直到下个出牌阶段开始前;<br><li>中:你摸两张牌并获得技能【闺秀】,【清玉】和【存嗣】直到下个出牌阶段开始前;<br><li><font color=yellow>阳:你获得3点护甲并获得技能【福绵】,【怠宴】和【贵相】直到下个出牌阶段开始前.</font>';
                else if (player.storage.tgtt_fslzlqingyi == 2) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>出牌阶段开始时,<br><li><font color=yellow>阴:你回复1点体力并获得技能【淑慎】,【神智】和【皇思】直到下个出牌阶段开始前;</font><br><li>中:你摸两张牌并获得技能【闺秀】,【清玉】和【存嗣】直到下个出牌阶段开始前;<br><li>阳:你获得3点护甲并获得技能【福绵】,【怠宴】和【贵相】直到下个出牌阶段开始前';
                else if (player.storage.tgtt_fslzlqingyi == 3) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>出牌阶段开始时,<br><li>阴:你回复1点体力并获得技能【淑慎】,【神智】和【皇思】直到下个出牌阶段开始前;<br><li><font color=yellow>中:你摸两张牌并获得技能【闺秀】,【清玉】和【存嗣】直到下个出牌阶段开始前;</font><br><li>阳:你获得3点护甲并获得技能【福绵】,【怠宴】和【贵相】直到下个出牌阶段开始前';
            };
            lib.dynamicTranslate.tgtt_dynvwashi2 = function (player) {
                if (player.storage.tgtt_dynvwashi2) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>当你减少体力上限/失去体力/受到伤害后,<br><li><font color=yellow>阴:你摸两张牌并增加1点体力上限;</font><br><li>阳:回复1点体力并获得1点护甲';
                return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>当你减少体力上限/失去体力/受到伤害后,<br><li>阴:你摸两张牌并增加1点体力上限;<br><li><font color=yellow>阳:回复1点体力并获得1点护甲.</font>';
            };
            lib.dynamicTranslate.tgtt_dytsssyangyan = function (player) {
                if (player.countMark('tgtt_dytsssxuyuan') >= 5) return '<font color=orange>' + get.tgttIntroduce('Shengtiweijuexing') + ':</font><br>1.每当你使用或打出一张【杀】或【火攻】时,你可以进行一次判定;<br>2.每当你于出牌阶段外失去红色牌时,你可以进行一次判定;<br>3.每当你的判定牌生效时:<br><li>①若为<font color=#f00>♥️️</font>,你选择一名其他角色,对其造成3点火焰伤害;<br><li>②若为<font color=#f00>♦️️</font>,你选择一名其他角色,你对其造成2点火焰伤害,你回复1点体力并摸一张牌;<br><font color=orange>' + get.tgttIntroduce('Shengtiyijuexing') + ':</font><br><font color=yellow>每当你使用或打出一张【杀】/【火攻】或每当你于出牌阶段外失去红色牌时,你可以对一名其他角色造成3点火焰伤害且你摸两张牌,增加1点体力上限并获得3点护甲,移除3个<缘>印记.</font>';
                return '<font color=orange>' + get.tgttIntroduce('Shengtiweijuexing') + ':</font><br><font color=yellow>1.每当你使用或打出一张【杀】或【火攻】时,你可以进行一次判定;<br>2.每当你于出牌阶段外失去红色牌时,你可以进行一次判定;<br>3.每当你的判定牌生效时:<br><li>①若为<font color=#f00>♥️️</font>,你选择一名其他角色,对其造成3点火焰伤害;<br><li>②若为<font color=#f00>♦️️</font>,你选择一名其他角色,你对其造成2点火焰伤害,你回复1点体力并摸一张牌;</font><br><font color=orange>' + get.tgttIntroduce('Shengtiyijuexing') + ':</font><br>每当你使用或打出一张【杀】/【火攻】或每当你于出牌阶段外失去红色牌时,你可以对一名其他角色造成3点火焰伤害且你摸两张牌,增加1点体力上限并获得3点护甲,移除3个<缘>印记';
            };
            lib.dynamicTranslate.tgtt_dytsssnianshu = function (player) {
                if (player.countMark('tgtt_dytsssxuyuan') >= 5) return '<font color=orange>' + get.tgttIntroduce('Shengtiweijuexing') + ':</font><br>出牌阶段限一次,你可以摸两张牌并获得1点护甲,你翻面并跳过本回合的弃牌阶段且选择一名其他角色,该角色的下回合改为由你操控.每名角色的回合结束时,若你的武将牌背面向上,你摸一张牌;<br><font color=orange>' + get.tgttIntroduce('Shengtiyijuexing') + ':</font><br><font color=yellow>出牌阶段限一次,你可以移除3个<缘>印记,摸三张牌,增加1点体力上限并获得2点护甲,你翻面并跳过本回合的弃牌阶段且选择一名其他角色,该角色的下回合改为由你操控且每名角色的回合结束时,若你的武将牌背面向上,你移除1个<缘>印记,摸两张牌,增加1点体力上限并回复1点体力.</font>';
                return '<font color=orange>' + get.tgttIntroduce('Shengtiweijuexing') + ':</font><br><font color=yellow>出牌阶段限一次,你可以摸两张牌并获得1点护甲,你翻面并跳过本回合的弃牌阶段且选择一名其他角色,该角色的下回合改为由你操控.每名角色的回合结束时,若你的武将牌背面向上,你摸一张牌;</font><br><font color=orange>' + get.tgttIntroduce('Shengtiyijuexing') + ':</font><br>出牌阶段限一次,你可以移除3个<缘>印记,摸三张牌,增加1点体力上限并获得2点护甲,你翻面并跳过本回合的弃牌阶段且选择一名其他角色,该角色的下回合改为由你操控且每名角色的回合结束时,若你的武将牌背面向上,你移除1个<缘>印记,摸两张牌,增加1点体力上限并回复1点体力';
            };
            lib.dynamicTranslate.tgtt_fsptlianhuan = function (player) {
                if (player.storage.tgtt_fsptlianhuan) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①出牌阶段,你可以重铸一张♣️️牌或♦️️牌;<br><li>②出牌阶段,你可以将一张♣️️牌或♦️️牌当【铁索连环】使用;<br><li>③当你使用【铁索连环】时,你可以失去1点体力,当此牌指定第一个目标后,你随机弃置每名不处于连环状态的目标角色一张牌;<br><li>④每当你使用【铁索连环】时,可以额外指定任意名角色为目标';
                return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①出牌阶段,你可以重铸一张♣️️牌或♦️️牌;<br><li>②出牌阶段,你可以将一张♣️️牌或♦️️牌当【铁索连环】使用;<br><li>③当你使用【铁索连环】时,你可以失去1点体力,当此牌指定第一个目标后,你随机弃置每名不处于连环状态的目标角色一张牌';
            };
            lib.dynamicTranslate.tgtt_dynghoutu = function (player) {
                if (player.storage.tgtt_dyngshanbeng) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>回合结束时,你获得1点护甲,增加1点体力上限,摸两张牌并回复1点体力,可以令一名角色获得技能【万化】(其结束阶段开始时失去技能【万化】),你可以令一名其他角色获得<后土>标记,拥有<后土>标记的角色回合结束,你获得其所有手牌';
                return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>回合结束时,你摸两张牌并回复一点体力,可以令一名其他角色获得技能【万化】,其结束阶段开始时失去技能【万化】且回合结束时你可以获得其所有手牌';
            };
            var tgttIntroduce = {
                //------------------------------------------感谢钫酸酱大佬写的技能注释代码------------------------------------------//
                Taiguji: {
                    name: '太古技',
                    info: '<li>太古技是一种特殊的专属技能标签,是太古天庭的专属技能,太古技一般不可以被移除,失效或封印,只有太古天庭的角色才能发动,其他角色获得时会失效,作为渎神的惩罚,太古的恶意会在非太古天庭角色获得太古技时,令其所有技能失效(无法失效的技能除外)直到游戏结束.',
                },
                Taigutiantingjineng: {
                    name: '太古天庭技能',
                    info: '<li>太古天庭技能是一种特殊的专属技能,是太古天庭的专属技能,只有太古天庭的角色才能发动,其他角色获得时会失效.',
                },
                Buff: {
                    name: 'Buff系统',
                    info: `
            <li>Buff系统是一种特殊系统.
            <li>自然衰减:回合结束时,含有自然衰减的所有Buff会移去1层.
            <li>衰减:指的是以自然衰减的方式减少buff,如:你衰减5层某buff指你的某buff以自然衰减的方式依次减少5层(每次减少1层,减少5次).
            <li>当你的描述为你减少5层Buff并视为自然衰减时,指直接移除5层Buff并视为自然衰减移除的(只触发1次自然衰减的技能)
            <li>附加:当你的某种Buff层数从0变为1及以上时,称为附加某种Buff
            <li>消解:当你的某种Buff层数减为0时,称为消解某种Buff
            <li>增加(获得)/减少(移除):当你增加或减少某种Buff时,你的Buff层数+1/-1
            <li>调整至/增至/降至:指你将某种Buff层数改为/+/-至指定值
            <li>在Buff描述中的X,若未特殊说明均指Buff层数
            <li>上限:当你的Buff达到上限时,不会再继续增加,没有特殊说明的Buff为无上限
            <li>清除:指的是将你的Buff层数减为0(触发含有消解描述的技能)
            <li>增益/减益/中立:指的是Buff在一般情况下是获得收益还是获得损害
            `,
                },
                peizhi: {
                    name: '配置',
                    info: `你弃置的所有牌中,
            <br>根据其中的牌名,获得对应的效果或buff
            <li>桃:回生,
            <li>杀:流血,
            <li>闪:迅捷,
            <li>酒:令本次配置所有buff层数+1;</li>
            除以上固定配方以外
            <br>每有一张红色牌,获得一个随机增益buff,
            <br>每有一张黑色牌,获得一个随机减益buff;`,
                },
                suiyu: {
                    name: '碎玉',
                    info: '<li>①角色的勾玉可以被击碎,当其勾玉被击碎时,其获得碎玉并失去等量体力上限,碎玉依然提供手牌上限;<br><li>②一名角色受到伤害时,若其有碎玉,令此次伤害减少X(X为其碎玉数与此次伤害中最小值),其移除X个碎玉;<br><li>③一名角色的出牌阶段限一次,若其有碎玉,其可以弃置至多Y张牌(Y为其碎玉数),修补(移除碎玉,增加等量的体力上限并回复等量体力值)Y点碎玉.',
                },
                xiubu: {
                    name: '修补',
                    info: '<li>若角色有碎玉,其可以移去一定量的碎玉,获得等量的体力上限并回复等量体力值.',
                },
                Zhinang: {
                    name: '智囊',
                    info: '<li>智囊:一些武将的技能允许他们以一些方式获得专属锦囊,同时还会允许他们做出第二选择——智囊.<li>智囊为固定的三种通常牌库里有的普通锦囊.这些武将在获得专属锦囊时可以选择获取专属锦囊,或者获取智囊中的锦囊之一.<li>线下可由面杀玩家自行约定选取的三张锦囊,线上暂定为过河拆桥、无懈可击、无中生有.',
                },
                Suodingji: {
                    name: '锁定技',
                    info: '<li>锁定技是一种特殊的技能标签,锁定技现在的用处不是必须强制发动的了,而是用来防止某些令非锁定技失效的武将的,你说是吧,马超.',
                },
                Zhuanhuanji: {
                    name: '转换技',
                    info: '<li>转换技是一种特殊的技能标签,一般只有<阴>和<阳>两种形态,游戏开始时,转换技一般处于<阴>状态(不排除有特殊的),当你满足技能的相关条件时,可以发动转换技,发动后技能会转换形态,变成其他条件/效果.',
                },
                Juexingji: {
                    name: '觉醒技',
                    info: '<li>觉醒技是一种特殊的技能标签,在达到某种条件时必须发动且通常每局游戏只能发动一次,一般的觉醒技多是失去一种东西,获得另外一种东西,多为减少1点体力上限并获得1个技能,但是刘禅是个例外.',
                },
                Xiandingji: {
                    name: '限定技',
                    info: '<li>限定技是一种特殊的技能标签,在达到某种条件时可以发动且通常每局游戏只能发动一次,一般的限定技多是获得强大的加成',
                },
                Shimingji: {
                    name: '使命技',
                    info: '<li>使命技是一种特殊的觉醒技,在达到某种条件时必须发动且通常每局游戏只能发动一次,但使命技区别于觉醒技,使命技一般拥有<成功(使命)>和<失败>两种情况,但不管是哪种情况,达成后必须发动对应效果且无法发动另一个效果,使命结束,但有一位武将特殊,谋孙尚香,只有失败.',
                },
                Yunlvji: {
                    name: '韵律技',
                    info: '<li>韵律技是一种特殊的转化技,分为<平>和<仄>两种状态.游戏开始时,韵律技均处于<平>状态;满足<转韵>条件后,韵律技会转换到另一个状态,且重置技能发动次数',
                },
                Angyangji: {
                    name: '昂扬技',
                    info: '<li>昂扬技是一种特殊的限定技,发动次数为1,在达到某种条件时可以发动失效并获得<激昂>.',
                },
                Jiang: {
                    name: '激昂',
                    info: '<li>昂扬技失效时获得并产生回复条件,在达成条件时触发并移除<激昂>,回复昂扬技发动次数.',
                },
                Linghunshoulie: {
                    name: '灵魂狩猎',
                    info: '<li>灵魂狩猎是一种特殊的技能标签,产生<灵魂>,当目标角色拥有<灵魂>:<br><li>①每有一层<灵魂>被狩猎时,目标角色失去1点体力,弃置两张牌并失去1点护甲,你回复1点体力,摸两张牌并获得1点护甲且目标角色有1%~10%的概率神圣死亡;<br><li>②当<灵魂>被狩猎至零或更低时,目标角色立即神圣死亡;<br><li>③<灵魂>的上限为9,通过技能效果或机制获得/狩猎灵魂;<br><li>④拥有<灵魂>的角色回合结束时,被狩猎一层<灵魂>,弃置一张牌',
                },
                Linghun: {
                    name: '灵魂',
                    info: '<li>灵魂狩猎的专属名词,<灵魂>的层数取决于目标角色的体力上限但至多为9.',
                },
                Mingyunzhuzai: {
                    name: '命运主宰',
                    info: '<li>命运主宰是一种特殊的技能标签,拥有此技能的角色非命运回合结束时会获得一个额外的命运回合,此命运回合内:<br><li>①自身某些技能可以启用并且发生特殊变化且使用带<伤害>标签的牌指定敌方全体为目标;<br><li>②我方所有角色体力值及体力上限不能发生负向变动且不能成为其他角色使用牌的目标;<br><li>③敌方所有角色非太古技/防具/护甲失效且不能使用或打出牌',
                },
                Chaoweibaoji: {
                    name: '超维暴击',
                    info: '<li>超维暴击是一种特殊的技能标签,拥有此技能的角色:<br><li>①基础暴击率增加50%,基础暴击伤害增加100%;<br><li>②受到的非暴击伤害减少50%(向上取整),受到的暴击伤害增加50%(向下取整至少为1);<br><li>③受到的无来源伤害无效并改为回复等量体力,摸一张牌并获得1点护甲;<br><li>④你不能成为其他角色非伤害牌的目标',
                },
                Baojilv: {
                    name: '暴击率',
                    info: '<li>超维暴击的专属名词,意为在攻击的总次数中,产生暴击的概率',
                },
                Baojishanghai: {
                    name: '暴击伤害',
                    info: '<li>超维暴击的专属名词,意为暴击造成的伤害,取决于普通伤害与暴击伤害百分比加成',
                },
                Chaoyuanpojun: {
                    name: '超元破军',
                    info: '<li>超元破军是一种特殊的技能标签,拥有此技能的角色:<br><li>①每轮游戏/每名角色回合开始时,若该角色拥有的【影】数量未到9,则你/该角色将X张【影】加入手牌(X为你/该角色的体力上限且至多令你/该角色拥有的【影】的数量达到9);<br><li>②回合结束时,你选择一名其他角色并弃置Y张【影】,对该角色造成1点随机属性伤害并令其非太古技失效且不能使用或打出牌,直到其下回合开始,你回复1点体力,摸一张牌并获得1点护甲(Y为该角色的体力值且至多为你拥有的【影】的数量);<br><li>③我方所有角色的【影】不计入手牌上限,敌方所有角色不能使用,打出或弃置【影】;<br><li>④我方所有角色可以将其的一张【影】当做一张基本牌或普通锦囊牌使用或打出且敌方所有角色弃牌阶段开始时,若其拥有的【影】的数量大于其手牌上限,则其弃置所有牌;<br><li>⑤自身在场则所有角色获得【影】时,将影的花色和点数随机更改(点数限制为A～K,花色限制为<font color=red>♥️️️</font>,<font color=red>♦️️️</font>,<font color=black>♠️️️</font>,<font color=black>♣️️️</font>,<font color=white>🃏</font>)',
                },
                Yingxiongshenhua: {
                    name: '英雄神化',
                    info: '<li>英雄神化是一种特殊的技能标签,拥有此技能的角色:<br><li>①获得专属的神化技,满足条件后可以发动神化技能进入<英雄神化>状态X回合,此状态下体力上限,体力值,攻击范围,手牌上限,进攻距离,防御距离,摸牌阶段摸牌数,造成伤害,回复体力,获得护甲,增加体力上限等数值增加X(X为你记录的<英雄神化>的进度且至多为9);<br><li>②获得专属的英雄技,发动英雄技需满足条件,进入<英雄神化>状态后,发动英雄技无需满足条件/无次数限制,但是每发动一次,<英雄神化>状态持续时间便会减少1回合;<br><li>③你的回合结束时,若已处于<英雄神化>状态下,则持续时间减少1回合;<br><li>④<英雄神化>状态结束时,将<英雄神化>状态增幅清空且有1%～100%的概率再次进入<英雄神化>状态;<br><li>⑤当你解除<英雄神化>状态后,你无法于此回合内不因【英雄神化④】再次进入<英雄神化>状态',
                },
                Shenhuaji: {
                    name: '神化技',
                    info: '<li>英雄神化的专属技能,进入<英雄神化>状态的前置要求,满足条件即可进入<英雄神化>状态',
                },
                Yingxiongji: {
                    name: '英雄技',
                    info: '<li>英雄神化的专属技能,处于未进入<英雄神化>状态时,发动需要满足条件或有次数限制,处于<英雄神化>状态时,发动无需满足条件或无次数限制,但是每次发动会减少<英雄神化>状态持续时间1回合',
                },
                Yingxiongshenhuazhuangtai: {
                    name: '<英雄神化>状态',
                    info: '<li>英雄神化的专属名词,此状态下体力上限,体力值,攻击范围,手牌上限,进攻距离,防御距离,摸牌阶段摸牌数,造成伤害,回复体力,获得护甲,增加体力上限等数值增加X(X为你记录的<英雄神化>进度且至多为9)且发动英雄技无需满足条件/无次数限制,但是每发动一次,<英雄神化>状态持续时间便会减少1回合',
                },
                Yingxiongshenhuajindu: {
                    name: '<英雄神化>进度',
                    info: '<li>英雄神化的专属名词,距离进入<英雄神化>状态的时间,也就是进度条',
                },
                Shengtiji: {
                    name: '圣体技',
                    info: '<li>圣体技是一种特殊的技能标签,分为<圣体已觉醒>和<圣体未觉醒>两种状态',
                },
                Shengtiyijuexing: {
                    name: '圣体已觉醒',
                    info: '<li>当角色满足条件后,圣体觉醒,此时处于<圣体已觉醒>状态,角色的技能和外观均会发生变化',
                },
                Shengtiweijuexing: {
                    name: '圣体未觉醒',
                    info: '<li>游戏开始时,角色处于<圣体未觉醒>,此状态下技能为正常技能;当角色的条件不满足时,从觉醒状态变回未觉醒状态,外观和技能复原',
                },
                Shiwuji: {
                    name: '食物技',
                    info: '<li>食物技是一种特殊的技能标签,主要是由食物牌获得的效果',
                },
                Pohengji: {
                    name: '破衡技',
                    info: '<li>破衡技是一种特殊的技能标签,发动技能指定目标,双方(你与目标角色)体力上限,体力值,护甲值,手牌数,装备区内装备数至少一项相同时,即为对应项【平衡效果】,此时可以选择一项【破衡选项】来发动对应【破衡效果】打破对应【平衡效果】',
                },
                Pinghengxiaoguo: {
                    name: '平衡效果',
                    info: '<li>平衡效果(你与目标角色):<br><li>①体力上限相同;<br><li>②体力值相同;<br><li>③护甲值相同;<br><li>④手牌区牌数相同;<br><li>⑤装备区牌数相同',
                },
                Pohengxuanxiang: {
                    name: '破衡选项',
                    info: '<li>破衡选项:<br><li>①减少1点体力上限;<br><li>②失去1点体力;<br><li>③失去1点护甲;<br><li>④弃置一张手牌;<br><li>⑤弃置一张装备牌',
                },
                Pohengxiaoguo: {
                    name: '破衡效果',
                    info: '<li>破衡效果:<br><li>①体力上限相同,减少1点体力上限;<br><li>②体力值相同,失去1点体力;<br><li>③护甲值相同,失去1点护甲;<br><li>④手牌区牌数相同,弃置一张手牌;<br><li>⑤装备区牌数相同,弃置一张装备牌',
                },
                Center: {
                    name: '中央区',
                    info: '<li>中央区:当前回合本应进入弃牌堆的牌(例如使用的牌结算后,被弃置的牌等)首先均置于桌面中间,该区域称之为中央区.在每个回合结束时,统一再将中央区所有牌一起置入弃牌堆,简单来说,中央区的牌即本回合进入弃牌堆的牌. ',
                },
                Cuijian: {
                    name: '摧坚',
                    info: '<li>摧坚:拥有此标签的技能每回合限发动一次,触发时机为使用伤害类卡牌时,X为目标技能数量',
                },
                Faxian: {
                    name: '发现',
                    info: '<li>发现:指观看三张牌,选择一张获得之,后续效果因技能而异',
                },
                Hecheng: {
                    name: '合成',
                    info: '<li>合成:指的是将两件装备变为一件,效果为二者的叠加;<br><li>合成后的装备类型取决于合成中你先选择的装备;<br><li>牌名为你选择的两件装备的前两个字组合,先选择的装备的字在前.',
                },
                Youji: {
                    name: '游击',
                    info: '<li>游击与搏击一样,是你与目标角色的距离关系,即:<br><li>目标角色在你的攻击范围内,而你不在目标角色的攻击范围内.',
                },
                Boji: {
                    name: '搏击',
                    info: '<li>搏击与游击一样,是你与目标角色的距离关系,即:<br><li>目标角色在你的攻击范围内,且你也在目标角色的攻击范围内.',
                },
                Mouyi: {
                    name: '谋弈',
                    info: '<li>谋弈是指双方有两个选择,各自选择一项同时公布,通过最终的结果判定成败;<br><li>谋弈补充:若选项后面的<()>中有内容,对方阻止这个选项的方式为执行对应操作(类似【奇正相生】)',
                },
                Jishi: {
                    name: '即时牌',
                    info: '<li>即时牌:一般指基本牌和普通锦囊牌',
                },
                LtyFood: {
                    name: '天依牌',
                    info: '<li>天依牌:太古天庭拓展名下类型为食物的牌,这种牌一般不直接加入牌堆,主要通过技能获得,此类卡牌经由洛天依制造/升级而成,故名为天依牌',
                },
                PsBuff: {
                    name: 'PsBuff',
                    info: '<li>太古天庭拓展名下Buff类型为增益的Buff,通常产生好的效果',
                },
                NgBuff: {
                    name: 'NgBuff',
                    info: '<li>太古天庭拓展名下Buff类型为减益的Buff,通常产生坏的效果',
                },
                NtBuff: {
                    name: 'NtBuff',
                    info: '<li>太古天庭拓展名下Buff类型为中立的Buff,在产生好的效果的同时也伴随坏的效果',
                },
            };
            //------------------------------------------自定义函数------------------------------------------//
            window.taigutiantingIntroduce = function (name, type) {
                if (!type) {
                    window.tgttOpenDialog('概念解释:' + tgttIntroduce[name].name, null, tgttIntroduce[name].info);
                } else if ((type = 'buff')) {
                    window.tgttOpenDialog('Buff介绍:' + get.TgttBuffIntro(name).name, 'extension/太古天庭/image/Buff/' + name + '.png', get.TgttBuffIntro(name).content);
                }
            };
            window.tgttOpenDialog = function (title, icon, content) {
                if (!title) title = '';
                if (!content) content = '';
                if (!window.tgttCurrentDialogs) {
                    window.tgttCurrentDialogs = [];
                }
                // 创建覆盖层
                var overlay = ui.create.div('.tgtt-dialog-overlay', document.body);
                overlay.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function (e) {
                    e.stopPropagation(); // 阻止事件冒泡
                });
                overlay.style.zIndex = '98';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                var dialog = ui.create.div('.tgtt-dialog', document.body);
                dialog.style.zIndex = '99';
                window.tgttCurrentDialogs.push(dialog);
                var icondiv = ui.create.div('.tgtt-dialog-icon', dialog);
                if (icon) {
                    icondiv.setBackgroundImage(icon);
                } else {
                    icondiv.hide();
                }
                var text = ui.create.div('.tgtt-dialog-text', dialog);
                text.innerHTML = content;
                if (lib.config.touchscreen) {
                    lib.setScroll(text);
                }
                var titlediv = ui.create.div('.tgtt-dialog-title', dialog);
                titlediv.innerHTML = title;
                var close = ui.create.div('.tgtt-dialog-close', dialog);
                close.addEventListener('click', function () {
                    window.tgttCurrentDialogs.remove(dialog);
                    dialog.remove();
                    overlay.remove(); // 关闭对话框时同时移除覆盖层
                });
                return dialog;
            };
            get.tgttskillTips = function (tipname, id) {
                const tgtttip = ui.create.div('.tgtt-tips', document.body);
                var isPhone = /mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent);
                tgtttip.style.zIndex = 998;
                const skilltip = ui.create.div('.tgtt-skilltip', tgtttip);
                skilltip.innerHTML = tipname;
                var herf = document.getElementById(id);
                if (herf) {
                    var left = herf.getBoundingClientRect().left;
                    if (isPhone) left += herf.offsetParent.offsetLeft;
                    left += document.body.offsetWidth * 0.15;
                    skilltip.style.left = left + 'px';
                    skilltip.style.top = herf.getBoundingClientRect().top + 30 + 'px';
                }
                tgtttip.listen(function (e) {
                    e.stopPropagation();
                    this.remove();
                });
            };
            get.tgttdialogIntro = function (name) {
                let temp = (Math.random() * 9 + 1) * 100000;
                let link = "<a id='" + temp + "' style='color: #FF0000' href=\"javascript:taigutiantingIntroduce('" + name + "','buff');\">『" + get.TgttBuffIntro(name).name + '』</a>';
                return link;
            };
            //使用方法:把你需要注释的内容和名称写好,把需要替换的东西改为get.tgttskillTips('id'),比如:get.tgttskillTips('zhuyaojieduan')
            get.tgttIntroduce = function (name, str, type) {
                if (!type) {
                    var temp = (Math.random() * 9 + 1) * 100000;
                    if (!str) {
                        let str1 = tgttIntroduce[name].name;
                        let str2 = tgttIntroduce[name].info;
                        let link = "<a id='" + temp + "' style='color:unset' href=\"javascript:get.tgttskillTips('" + str2 + "','" + temp + '\');">' + str1 + '※</a>';
                        return link;
                    } else {
                        let link = "<a id='" + temp + "' style='color:unset' href=\"javascript:get.tgttskillTips('" + str + "','" + temp + '\');">' + name + '※</a>';
                        return link;
                    }
                } else if ((type = 'buff')) {
                    window.tgttOpenDialog('Buff介绍:' + get.TgttBuffIntro(name).name, 'extension/太古天庭/image/Buff/' + name + '.png', get.TgttBuffIntro(name).content);
                }
            };
            // 武将翻译
            lib.init.js('extension/太古天庭/asset/character.js', null);
            //卡牌翻译
            lib.init.js('extension/太古天庭/asset/cards.js', null);
        },
        config: {
            extTgtt_tuozhanjieshao: {
                name: '<b><font color=yellow>拓展介绍</font>',
                init: 'jieshao',
                unforced: true,
                item: {
                    jieshao: '<font color=yellow>点击查看</font>',
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.transform = 'translateY(-100px)';
                    node.parentNode.style.height = '300px';
                    node.parentNode.style.width = '300px';
                    switch (link) {
                        case 'jieshao':
                            node.innerHTML = `<li>欢迎游玩太古天庭拓展,
                    <br><li>①<font color=red>本拓展适配无名杀正版本体1.10.8版本及以上,旧版本以及β版暂不支持;</font>
                    <br><li>②<font color=orange>北极禁区太古天庭系列重置,本拓展包属于沐如风晨自用,里面各种阴间武将层出不穷,程度各不相同,不喜勿喷;</font>
                    <br><li>③<font color=blue>部分技能代码引用改编(希望大家多多支持这些优秀的拓展作品)自搬运自用,次元世界,天庭,云将,天牢令,耀武将,MA动漫包,神怒降世,命运线,阴包武将,活动武将,阳光包,金庸群侠传,玄武江湖,铝热反应,太古天庭,碧蓝航线,圣杯战争,格林拓展,后宫拓展等等,有些记不起来了,欢迎联系我补充QAQ;</font>
                    <br><li>④<font color=yellow>排名不分先后,本人非常感谢水乎,狂神,诗笺,苏婆玛丽奥,157,Rintim,呲牙哥!,辰午吁~,紫灵谷的骊歌,棘手怀念摧毁,柚子,铝宝,子琪,狗妈,鬼神易,白某,依依,钫酸酱,想在远方,萌新,大熊小猫,尼斯湖水怪,爱表白的无敌,小废龙等大佬的帮助和指点,非常感谢!</font>
                    <br><li>⑤<font color=cyan>当然了,我就不算什么大佬了,我也是个萌新,只会简单的搬运和缝合,有不好的地方请多担待,狗头保命!</font>
                    <br><li>⑥<font color=grey>部分原画来自网络,若侵犯你的权利,请联系作者删除.</font>
                    <br><li>⑦<font color=green>本扩展不做任何商业用途,如你通过任何方式购买获得本扩展,一切收益与责任均和作者无关.</font>
                    <br><li>⑧<font color=pink>欢迎更多设计、配音、美化的大佬加入,如有兴趣加入制作组请联系作者.</font>`;
                            break;
                    }
                },
            },
            extTgtt_changeLog: {
                name: '<b><font color=orange>更新日志</font>',
                clear: true,
                init: 'tgtt_gengxinrizhi',
                unforced: true,
                item: {
                    tgtt_gengxinrizhi: '<font color=orange>点击查看</font>',
                },
                onclick() {
                    let msg = '更新记录:' + '\n更多功能持续开发中……';
                    window.confirm(msg);
                },
            },
            extTgtt_CunzailishowIntro: {
                name: '<b><font color=yellow>存在力机制</font>',
                intro: '<font color=yellow>点击查看存在力机制介绍</font>',
                clear: true,
                init: 'tgtt_CunzailishowIntro',
                unforced: true,
                item: {
                    tgtt_CunzailishowIntro: '<font color=yellow>点击查看</font>',
                },
                onclick() {
                    var intro = '存在力机制' + '\n①存在力机制是太古天庭的专属机制' + '\n②当开启存在力加载后,进入游戏时所有角色会默认获得100点存在力(有特殊技能的角色除外),呈现蓝色进度条' + '\n③存在力是一个武将存在于世界上的证明,因此,当存在力为0或更低时,该武将立刻神圣死亡(不触发任何技能且被移除游戏)' + '\n④存在力一般情况下,当武将增加体力上限/回复体力/造成伤害后会增加等量存在力,当武将减少体力上限/失去体力/受到伤害后会减少等量存在力' + '\n⑤因为存在力而增加的狩猎阶段,位于准备阶段后,判定阶段前' + '\n⑥狩猎阶段开始后,武将会扣除十分之一的当前存在力(向上取整,部分角色于此可以发动技能)';
                    window.confirm(intro);
                },
            },
            extTgtt_Cunzaili: {
                name: '<b><font color=red>存在力加载</font>',
                intro: '<font color=red>关闭后对局将不再加载存在力以及配套的狩猎阶段,但是在游玩圣歼之战拓展的武将梦潜时会产生BUG,请谨慎选择是否关闭(重启后生效)!</font>',
                init: true,
            },
            extTgtt_MingtushowIntro: {
                name: '<b><font color=yellow>命途机制</font>',
                intro: '<font color=yellow>点击查看命途机制介绍</font>',
                clear: true,
                init: 'tgtt_MingtushowIntro',
                unforced: true,
                item: {
                    tgtt_MingtushowIntro: '<font color=yellow>点击查看</font>',
                },
                onclick() {
                    var intro = '命途机制' + '\n①命途机制是太古天庭的拓展机制' + '\n②当开启命途后,进入游戏时所有角色会默认获得技能【选择】' + '\n③命途机制来源于米哈游游戏崩坏——星穹铁道,代码参考忽悠宇宙,感谢作者紫灵谷的骊歌' + '\n④每个命途都拥有一个命途回响技能,会产生不同的效果,后续可能会添加其他技能' + '\n⑤后续太古天庭拓展下的角色会添加默认命途,证明该角色已踏入某种命途并获得专属的命途技能' + '\n⑥添加两个按钮,一个是为自己开启命途选择,另一个是场上为所有角色开启命途选择';
                    window.confirm(intro);
                },
            },
            extTgtt_PlayerMingtu: {
                name: '<b><font color=cyan>玩家命途选择</font>',
                intro: '<font color=cyan>开启后,玩家进入游戏时获得技能【选择】(重启后生效)!</font>',
                init: false,
            },
            extTgtt_AllPlayerMingtu: {
                name: '<b><font color=red>全场命途选择</font>',
                intro: '<font color=red>开启后,玩家进入游戏时全场角色获得技能【选择】(重启后生效)!</font>',
                init: false,
            },
            extTgtt_buffList: {
                name: '<b><font color=green>查看Buff列表</font>',
                clear: true,
                intro: '<font color=green>查看太古天庭拓展的Buff列表</font>',
                init: 'tgtt_buffList',
                unforced: true,
                item: {
                    tgtt_buffList: '<font color=green>点击查看</font>',
                },
                onclick() {
                    get.TgttBufflist();
                },
            },
            extTgtt_NatureBuff: {
                name: '<b><font color=grey>属性BUFF</font>',
                intro: '<font color=grey>开启后,局内角色受到有来源的伤害将会概率附加的太古天庭名下的BUFF(重启后生效)!</font>',
                init: true,
            },
            extTgtt_Diycharacter: {
                name: '<b><font color=yellow>天帝模式(沐如风晨自用)</font><b>',
                init: false,
                intro: '<font color=yellow><br><li>①说得那么好听,其实就是开启作弊模式嘛<br>┐(´-｀)┌<br>胡扯!无名杀玩家的事,能叫作弊吗？<br>╰_╯╬;<br><li>②编辑器能够自定义场上所有角色使用的武将、位置、手牌,以及能观看其身份;<br><li>③适用于各武将AI的测试以及拓展的制作;<br><li>④建议关闭手气卡使用,此工具内置手气卡功能也不要与搬运自用的作弊工具一起开启哦!</font>',
            },
            extTgtt_huaxialongyou: {
                name: '<b><font color=grey>作弊技能</font>',
                intro: '<font color=grey>获得华夏的龙气庇佑,开启后所有角色的非太古天庭技能将全部失效(重启后生效)!</font>',
                init: false,
            },
            extTgtt_huiwanplayer: {
                name: '<b><font color=yellow>玩家定向摸牌</font></b>',
                intro: '<font color=yellow>当你摸牌时,你可以指定你摸到的牌(重启后生效,感谢狂神dalao提供的代码).</font>',
                init: false,
            },
            extTgtt_huiwanai: {
                name: '<b><font color=grey>AI定向摸牌</font></b>',
                intro: '<font color=grey>当AI摸牌时,其可以指定其摸到的牌(重启后生效,感谢狂神dalao提供的代码).</font>',
                init: false,
            },
            extTgtt_ShowmaxHandcard: {
                name: '<b><font color=blue>手牌上限</font></b>',
                init: false,
                intro: '<font color=blue>将游戏内显示的手牌数改为显示手牌数与手牌上限(重启后生效,例:2/3,代表拥有2张牌,手牌上限为3).</font>',
            },
            extTgtt_AIchooseCharacter: {
                name: '<b><font color=green>AI选将</font></b>',
                init: false,
                intro: '<font color=green>游戏开始时可以修改场上武将(重启后生效)</font>',
            },
        },
        package: extensionInfo,
    };
});

import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '五河琴里',
        content(config, pack) {
            ///添加自定义函数开始
            //------------------------------------------------常规特效支持--------------------------------------------------//
            game.mp411 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/五河琴里/mp4/${Q}.mp4`;
                    video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
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
                    document.body.appendChild(video);
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
            game.playSa = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/五河琴里/audio', fn);
                }
            };
            if (!window.initGalgame) {
                var galgame = {
                    text: {},
                };
                lib.init.js('extension/五河琴里', 'galgame', function () {
                    window.initGalgame(lib, game, ui, get, ai, _status);
                });
                lib.init.css('extension/五河琴里', 'galgame');
            }
            game.cmpName = function (pl, name) {
                if (pl.name1 == name) return true;
                if (pl.name2 == name) return true;
                if (pl.name == name) return true;
                return false;
            };
            ///添加自定义函数结束
        },
        precontent(kotori) {
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
            lib.init.json('extension/五河琴里/galgame.json', function (text) {
                galgame.game = game;
                for (var i in text) {
                    galgame.text[i] = text[i];
                }
            });
            lib.我的galgame_fun库 = {
                五河琴里位置变亮(result) {
                    result.booth.五河琴里位置.classList.remove('darksome');
                    for (var i in result.booth) {
                        if (i != '五河琴里位置') {
                            result.booth[i].classList.add('darksome');
                        }
                    }
                },
                五河琴里位置0变亮(result) {
                    result.booth.五河琴里位置0.classList.remove('darksome');
                    for (var i in result.booth) {
                        if (i != '五河琴里位置0') {
                            result.booth[i].classList.add('darksome');
                        }
                    }
                },
                五河琴里位置1变亮(result) {
                    result.booth.五河琴里位置1.classList.remove('darksome');
                    for (var i in result.booth) {
                        if (i != '五河琴里位置1') {
                            result.booth[i].classList.add('darksome');
                        }
                    }
                },
                五河琴里位置2变亮(result) {
                    result.booth.五河琴里位置2.classList.remove('darksome');
                    for (var i in result.booth) {
                        if (i != '五河琴里位置2') {
                            result.booth[i].classList.add('darksome');
                        }
                    }
                },
                五河琴里位置3变亮(result) {
                    result.booth.五河琴里位置3.classList.remove('darksome');
                    for (var i in result.booth) {
                        if (i != '五河琴里位置3') {
                            result.booth[i].classList.add('darksome');
                        }
                    }
                },
                五河琴里位置4变亮(result) {
                    result.booth.五河琴里位置4.classList.remove('darksome');
                    for (var i in result.booth) {
                        if (i != '五河琴里位置4') {
                            result.booth[i].classList.add('darksome');
                        }
                    }
                },
            };
            lib.arenaReady.push(function () {
                lib.init.json('extension/五河琴里/galgame.json', function (text) {
                    galgame.game = game;
                    for (var i in text) {
                        galgame.text[i] = text[i];
                    }
                    lib.init.css('extension/五河琴里', 'galgame');
                    lib.init.js('extension/五河琴里', 'galgame');
                });
            });
            lib.skill._琴里本尊 = {
                _priority: 999,
                forced: true,
                silent: true,
                trigger: {
                    global: ['gameStart'],
                    player: ['enterGame', 'showCharacterAfter', 'swapPlayer'], //swapPlayer:更换角色后
                },
                filter(event, player) {
                    return ['whql_whql', 'whql_jlql'].includes(player.name) && !player.hasMark('琴里阶段');
                },
                content() {
                    if (['whql_whql', 'whql_xzzt'].includes(player.name))
                        if (!player.hasMark('琴里阶段')) {
                            //黑发带,白发带,限制状态
                            player.addMark('琴里阶段', 1);
                            var n = [1, 2, 3, 4].randomGet();
                            if (n == 1) {
                                game.playAudio('../extension/五河琴里/audio/撒~开始我们的约会(战争)吧1.mp3');
                            }
                            if (n == 2) {
                                game.playAudio('../extension/五河琴里/audio/撒~开始我们的约会(战争)吧2.mp3');
                            }
                            if (n == 3) {
                                game.playAudio('../extension/五河琴里/audio/撒~开始我们的约会(战争)吧3.mp3');
                            }
                            if (n == 4) {
                                game.playAudio('../extension/五河琴里/audio/撒~开始我们的约会(战争)吧4.mp3');
                            }
                            player.say('撒~开始我们的约会(战争)吧!');
                        }
                    if ('whql_jlql' == player.name) {
                        if (!player.hasMark('琴里阶段')) {
                            player.addMark('琴里阶段', 2);
                            var n = [1, 2, 3, 4].randomGet();
                            if (n == 1) {
                                game.playAudio('../extension/五河琴里/audio/来吧,爱的惩罚,开始了(神威领域31).mp3');
                                player.say('来吧,爱的惩罚开始了');
                            }
                            if (n == 2) {
                                game.playAudio('../extension/五河琴里/audio/那么,你们有能力当我的对手吗？(神威领域32).mp3');
                                player.say('那么,你们有能力当我的对手吗？');
                            }
                            if (n == 3) {
                                game.playAudio('../extension/五河琴里/audio/没礼貌的家伙,做好觉悟吧(神威领域33).mp3');
                                player.say('没礼貌的家伙,做好觉悟吧!');
                            }
                            if (n == 4) {
                                game.playAudio('../extension/五河琴里/audio/我不会手软的,小心了(神威领域34).mp3');
                                player.say('我不会手软的,小心了');
                            }
                        }
                    }
                },
            }; //开局没有【阶段标记】的话,增添阶段
            lib.skill._本尊亲临 = {
                trigger: {
                    global: ['roundStart'], //QQQ
                },
                forced: true,
                popup: false,
                silent: true,
                firstDo: true,
                filter: (event, player) => player.hasMark('琴里阶段'),
                content() {
                    game.log('<span class=\"firetext\">本尊亲临:新的一轮开始时,琴里执行一个额外回合</span>');
                    player.phase('nodelay');
                    if (player.countMark('琴里阶段') == 3) {
                        game.log('<span class=\"firetext\">领域效果适用中</span>');
                        game.神威领域 = true;
                    } else {
                        game.神威领域 = false;
                    }
                },
            }; //琴里不在场、非三阶段时,琴里以外有【阶段标记】的角色可以发动技能
            lib.skill._精灵化 = {
                //audio:"ext:五河琴里:3",//有视频不用语音
                forced: true,
                trigger: {
                    player: ['dieBefore', 'dieBegin'],
                },
                filter(trigger, player) {
                    return player.countMark('琴里阶段') == 1; //只有被玩家控制的琴里一阶段才能发动精灵化
                },
                content() {
                    game.mp411('琴里精灵化');
                    trigger.cancel();
                    event.player.addMark('琴里阶段', 1);
                    event.player.addMark('琴里怒气', Math.min(25 - player.countMark('琴里怒气'), 5)); //增加5层怒气,不超过25层
                    event.player.maxHp = event.player.countMark('琴里怒气');
                    event.player.hp = event.player.maxHp;
                    event.player.update();
                    event.player.phase('nodelay');
                },
            }; ///一阶段死亡前加入【阶段标记】和【怒气】
            lib.skill._灵枢·冉熠星辰 = {
                init(player) {
                    player.storage = new Proxy({}, {
                        get(u, i) {
                            return false;
                        },
                    });
                },
                forced: true,
                audio: 'ext:五河琴里:4',
                popup: false,
                firstDo: true,
                trigger: {
                    player: ['enterGame', 'showCharacterAfter', 'swapPlayer'],
                    source: ['damageEnd', 'dying'],
                    global: ['gameStart'],
                },
                content() {
                    setInterval(function () {
                        if (!player.hasMark('琴里阶段')) {
                            //1层:体力和体力上限增加的效果对你无效,你的护甲值始终为0
                            if (player.hasMark('噬身焚魂')) {
                                if (!player.storage.HP) player.storage.HP = 3;
                                if (!player.storage.MAXHP) player.storage.MAXHP = 3;
                                if (player.hp > player.storage.HP) player.hp = player.storage.HP;
                                if (player.hp <= player.storage.HP) player.storage.HP = player.hp;
                                if (player.maxHp > player.storage.MAXHP) player.maxHp = player.storage.MAXHP;
                                if (player.maxHp <= player.storage.MAXHP) player.storage.MAXHP = player.maxHp;
                                player.hujia = 0;
                                player.update();
                            }
                            //2层:你获得牌前,取消之,你不能拥有牌.
                            if (player.countMark('噬身焚魂') >= 2) {
                                player.draw = game.kongfunc;
                                player.createCard = game.kongfunc;
                                player.gain = game.kongfunc;
                                player.gainPlayerCard = game.kongfunc;
                                //销毁所有牌
                                var cards = player.getCards('hejsx');
                                game.cardsGotoOrdering(cards);
                                for (var card of cards) {
                                    card.fix();
                                    card.remove();
                                    card.destroyed = true;
                                }
                            }
                            //3层:清空所有技能和噬身焚魂以外的所有标记,你不能装备装备牌,你失去所有武将信息.
                            if (player.countMark('噬身焚魂') >= 3) {
                                delete player.name;
                                delete player.name1;
                                delete player.sex;
                                delete player.group;
                                player.skills = [];
                                player.initedSkills = [];
                                player.additionalSkills = {};
                                player.hiddenSkills = [];
                                player.awakenedSkills = [];
                                player.stat = [{ card: {}, skill: {} }];
                                player.tempSkills = {};
                                for (var i in player.storage) {
                                    if (i != '噬身焚魂' && i != '罪业') delete player.storage[i];
                                }
                                for (var i in player.marks) {
                                    if (i != '噬身焚魂' && i != '罪业') player.unmarkSkill(i);
                                }
                                player.disabledSlots = {
                                    equip1: 1,
                                    equip2: 1,
                                    equip3: 1,
                                    equip4: 1,
                                    equip5: 1
                                };
                            }
                            //4层:你跳过所有回合和所有出牌阶段,并进入混乱状态player.phaseSkipped=true;
                            if (player.countMark('噬身焚魂') >= 4) {
                                player.classList.add('mad');
                                player.classList.add('turnedover'); //翻面目标
                                player.skipList.add('phaseUse');
                            }
                            //5层及以上:立即死亡.
                            if (player.countMark('噬身焚魂') >= 5) {
                                const next = game.createEvent('diex', false);
                                next.source = player;
                                next.player = player;
                                next._triggered = null;
                                next.restMap = { type: null, count: null, audio: null };
                                next.excludeMark = [];
                                next.setContent('die');
                            }
                        } else {
                            player._trueMe = game.me;
                            if (!player.storage.MAXHP) player.storage.MAXHP = 3;
                            if (player.maxHp < player.storage.MAXHP) player.maxHp = player.storage.MAXHP;
                            if (player.maxHp > player.storage.MAXHP) player.storage.MAXHP = player.maxHp;
                            player.classList.remove('dead');
                            player.classList.remove('out');
                            player.classList.remove('turnedover');
                            for (var i in player.storage) {
                                if (i != '琴里阶段' && i != '火灵守护' && i != '狂暴' && i != '琴里怒气') delete player.storage[i];
                            }
                            for (var i in player.marks) {
                                if (i != '琴里阶段' && i != '火灵守护' && i != '狂暴' && i != '琴里怒气') player.unmarkSkill(i);
                            }
                            player.skipList = [];
                            player.skills = [];
                            player.initedSkills = [];
                            player.additionalSkills = {};
                            player.disabledSkills = {};
                            player.hiddenSkills = [];
                            player.awakenedSkills = [];
                            player.forbiddenSkills = {};
                            player.addSkill('火灵守护'); //自身非全局标记技能
                            player.addSkill('神威领域3'); //瞬发技,按下实现2阶段和三阶段切换,首次按下切换到二阶段,随后二三阶段切换
                            player.addSkill('whql_jl');
                            player.update();
                            if (player.countMark('琴里阶段') >= 2) {
                                player.skipList = [];
                                player.disabledSlots = {};
                                player.maxHp = player.countMark('琴里怒气');
                                player.update();
                                if (player.countMark('琴里怒气') > player.hp || player.countMark('琴里怒气') > player.maxHp) {
                                    game.log('<span class=\"firetext\">琴里的体力上限与怒气值保持一致,且每过1秒,琴里都会将体力调整至与体力上限相同</span>');
                                    ///额外出牌阶段
                                    player.maxHp = player.countMark('琴里怒气');
                                    player.hp = player.maxHp;
                                    player.update();
                                    ///琴里精灵化后(两个及以上标记),琴里的体力上限与怒气值保持一致,且每过1秒,琴里都会将体力调整至与体力上限相同
                                }
                            }
                            if (player.countMark('琴里阶段') >= 3) {
                                player.addSkill('神威领域2'); //_神威领域1是全局技能,神威领域2加全局技能了后被自身清除也无妨
                                player.classList.add('linked'); //如果琴里的本尊标记＞2,则琴里的卡图保持横置
                            }
                        }
                    }, 3000); //每1秒刷新一次
                },
            }; //定时清除不利状态(灵枢·冉熠星辰)并根据【噬身焚魂】削弱敌方
            lib.skill._琴里暴击 = {
                audio: 'ext:五河琴里:3',
                forced: true,
                trigger: {
                    player: 'damageBegin4',
                },
                filter(event, player) {
                    return player.countMark('琴里阶段') <= 0 && event.source && event.source.hasMark('琴里阶段');
                },
                content() {
                    if (trigger.source.countMark('琴里阶段') <= 2) {
                        var n = [1, 2, 3, 4, 5, 6, 7].randomGet();
                        if (n == 1) {
                            game.playAudio('../extension/五河琴里/audio/化为灰烬吧!灼烂歼鬼!(_琴里暴击).mp3');
                            trigger.source.say('化为灰烬吧!灼烂歼鬼!');
                        }
                        if (n == 2) {
                            game.playAudio('../extension/五河琴里/audio/你认为可以从我的手下逃走吗？(_琴里暴击).mp3');
                            trigger.source.say('你认为可以从我的手下逃走吗？');
                        }
                        if (n == 3) {
                            game.playAudio('../extension/五河琴里/audio/化为灰烬吧!(_琴里暴击).mp3');
                            trigger.source.say('化为灰烬吧!');
                        }
                        if (n == 4) {
                            game.playAudio('../extension/五河琴里/audio/灼烂歼鬼1(_琴里暴击3).mp3');
                            trigger.source.say('灼烂歼鬼!');
                        }
                        if (n == 5) {
                            game.playAudio('../extension/五河琴里/audio/灼烂歼鬼2(_琴里暴击4).mp3');
                            trigger.source.say('灼烂歼鬼!');
                        }
                        if (n == 6) {
                            game.playAudio('../extension/五河琴里/audio/斩裂一切吧!(_琴里暴击5).mp3');
                            trigger.source.say('斩裂一切!');
                        }
                        if (n == 7) {
                            game.playAudio('../extension/五河琴里/audio/燃烧吧!灼烂歼鬼.mp3');
                            trigger.source.say('燃烧吧!灼烂歼鬼!');
                        }
                    }
                    if (trigger.source.countMark('琴里阶段') == 3) {
                        var n = [1, 2, 3, 4, 5, 6, 7].randomGet();
                        if (n == 1) {
                            game.playAudio('../extension/五河琴里/audio/不要祈求我会有同情心(_琴里暴击).mp3');
                            trigger.source.say('不要祈求我会有同情心');
                        }
                        if (n == 2) {
                            game.playAudio('../extension/五河琴里/audio/你不值得我战斗(_琴里暴击).mp3');
                            trigger.source.say('你不值得我战斗');
                        }
                        if (n == 3) {
                            game.playAudio('../extension/五河琴里/audio/做好觉悟吧(_琴里暴击).mp3');
                            trigger.source.say('做好觉悟吧');
                        }
                        if (n == 4) {
                            game.playAudio('../extension/五河琴里/audio/来~让我们找点乐子吧(_琴里暴击).mp3');
                            trigger.source.say('来~让我们找点乐子吧!');
                        }
                        if (n == 5) {
                            game.playAudio('../extension/五河琴里/audio/噬身焚魂!(_琴里暴击).mp3');
                            trigger.source.say('噬身焚魂!');
                        }
                        if (n == 6) {
                            game.playAudio('../extension/五河琴里/audio/就是这样(_琴里暴击).mp3');
                            trigger.source.say('就是这样~');
                        }
                        if (n == 7) {
                            game.playAudio('../extension/五河琴里/audio/看啊,可爱的玩具(_琴里暴击).mp3');
                            trigger.source.say('看啊,可爱的玩具~');
                        }
                    }
                    var num = trigger.source.countMark('琴里怒气'); //怒气加的额外暴击率
                    var num2 = trigger.source.countMark('狂暴'); //易伤,每个狂暴加100％暴击伤害
                    var num3 = parseInt((num + num4 + 2) / 10); //这里用整除,这是暴击率的百位数字,易暴在[罪业]人身上
                    var num4 = player.countMark('罪业'); //易伤在[罪业]人身上
                    if (Math.random() < 0.2 + 0.1 * (num - 10 * num3)) {
                        //先结算不足100％暴击率的部分
                        trigger.num *= 2 + num2 + num4; //琴里初始20%暴击率,200％爆伤
                        player.say('唔…'); //最后一轮暴击,没有次幂
                        game.log('<span class=\"firetext\">会心一击!</span>');
                    }
                    if (num3 == 1) {
                        //如果暴击率超过100％,再结算暴击率超过100%的部分
                        trigger.num *= Math.pow(2 + num2 + num4, num3);
                        game.log('<span class=\"firetext\">暴击率溢出100%,伤害翻2倍!</span>');
                    }
                    if (num3 == 2) {
                        //如果暴击率超过200%,再结算暴击率超过200%的部分
                        trigger.num *= Math.pow(2 + num2 + num4, num3);
                        game.log('<span class=\"firetext\">暴击率溢出200%,伤害翻4倍!</span>');
                    }
                },
                popup: false,
            }; ///所有阶段暴击
            lib.skill._swlz_draw = {
                _priority: 202302251713,
                forced: true,
                trigger: {
                    player: 'drawBegin',
                },
                filter(event, player) {
                    return player.hasMark('琴里阶段');
                },
                content() {
                    var next = lib.skill[event.name].draw;
                    trigger.setContent(next);
                },
                draw() {
                    var washCards = function () {
                        if (ui.cardPile.hasChildNodes() == false) {
                            if (_status.maxShuffle != undefined) {
                                if (_status.maxShuffle == 0) {
                                    if (_status.maxShuffleCheck) game.over(_status.maxShuffleCheck());
                                    else game.over('平局');
                                }
                                _status.maxShuffle--;
                            }
                            game.shuffleNumber++;
                            var cards = [],
                                i;
                            for (var i = 0; i < lib.onwash.length; i++) {
                                if (lib.onwash[i]() == 'remove') lib.onwash.splice(i--, 1);
                            }
                            if (_status.discarded) _status.discarded.length = 0;
                            for (i = 0; i < ui.discardPile.childNodes.length; i++) {
                                var currentcard = ui.discardPile.childNodes[i];
                                currentcard.vanishtag.length = 0;
                                if (get.info(currentcard).vanish || currentcard.storage.vanish) {
                                    currentcard.remove();
                                    continue;
                                }
                                cards.push(currentcard);
                            }
                            cards.randomSort();
                            for (var i = 0; i < cards.length; i++) ui.cardPile.appendChild(cards[i]);
                        }
                        if (ui.cardPile.hasChildNodes() == false) game.over('平局');
                    };
                    if (typeof event.minnum == 'number' && num < event.minnum) {
                        num = event.minnum;
                    }
                    if (event.drawDeck) {
                        if (event.drawDeck > num) {
                            event.drawDeck = num;
                        }
                        num -= event.drawDeck;
                    }
                    var cards = [];
                    var getCards = function (botton) {
                        if (botton) {
                            if (typeof botton == 'string' && botton == 'd') {
                                for (var index = 0; index < ui.discardPile.childElementCount && cards.length < num; index++) {
                                    var card = ui.discardPile.childNodes[index];
                                    if (get.tag(card, 'damage') || (get.type(card) != 'basic' && get.type(card) != 'equip' && get.type(card) != 'delay')) {
                                        ui.discardPile.removeChild(card);
                                        index--;
                                        card.original = 'd';
                                        cards.push(card);
                                    }
                                }
                            } else {
                                for (var index = ui.cardPile.childElementCount - 1; index >= 0 && cards.length < num; index--) {
                                    var card = ui.cardPile.childNodes[index];
                                    if (get.tag(card, 'damage') || (get.type(card) != 'basic' && get.type(card) != 'equip' && get.type(card) != 'delay')) {
                                        ui.cardPile.removeChild(card);
                                        index++;
                                        card.original = 'c';
                                        cards.push(card);
                                    }
                                }
                            }
                        } else {
                            for (var index = 0; index < ui.cardPile.childElementCount && cards.length < num; index++) {
                                var card = ui.cardPile.childNodes[index];
                                if (get.tag(card, 'damage') || (get.type(card) != 'basic' && get.type(card) != 'equip' && get.type(card) != 'delay')) {
                                    ui.cardPile.removeChild(card);
                                    index--;
                                    card.original = 'c';
                                    cards.push(card);
                                }
                            }
                        }
                    };
                    if (num > 0) {
                        if (event.bottom) {
                            getCards(true);
                            if (cards.length < num) {
                                washCards();
                                getCards(true);
                                if (cards.length < num) {
                                    getCards('d');
                                }
                            }
                        } else {
                            getCards();
                            if (cards.length < num) {
                                washCards();
                                getCards();
                                if (cards.length < num) {
                                    getCards('d');
                                }
                            }
                        }
                    }
                    if (event.drawDeck) cards = cards.concat(player.getDeckCards(event.drawDeck));
                    if (cards.length) {
                        if (event.log != false) {
                            if (num > 0) {
                                if (event.bottom) game.log(player, '从牌堆底摸了' + get.cnNumber(cards.length) + '张牌');
                                else game.log(player, '摸了' + get.cnNumber(cards.length) + '张牌');
                            }
                            if (event.drawDeck) {
                                game.log(player, '从牌库中获得了' + get.cnNumber(event.drawDeck) + '张牌');
                            }
                        }
                        if (event.animate != false) {
                            if (event.visible) {
                                var next = player.gain(cards, 'gain2');
                                if (event.bottom) game.log(player, '从牌堆底摸了' + get.cnNumber(num) + '张牌(', cards, ')');
                                else game.log(player, '摸了' + get.cnNumber(num) + '张牌(', cards, ')');
                            } else {
                                var next = player.gain(cards, 'draw');
                            }
                        } else {
                            var next = player.gain(cards);
                            if (event.$draw) {
                                player.$draw(cards.length);
                            }
                        }
                        if (event.gaintag) next.gaintag.addArray(event.gaintag);
                        event.result = cards;
                    } else {
                        game.log('没有符合条件的牌');
                        event.result = [];
                    }
                },
            }; //所有阶段摸牌动作替换
            lib.skill._swlz_drawTo = {
                forced: true,
                _priority: 202302251714,
                trigger: {
                    player: ['loseAfter', 'gainAfter'],
                    global: 'gameDrawAfter',
                },
                filter(event, player) {
                    if (player.hasMark('琴里阶段')) {
                        if (['lose', 'gameDraw'].includes(event.name)) return player.countCards('h') < Math.min(25, player.countMark('琴里怒气'));
                        return player.countCards('h') > 25;
                    }
                    return false;
                },
                content() {
                    //加入琴里一阶段:一阶段琴里的手牌不少于3张
                    if (trigger.name == 'gain') {
                        player.chooseToDiscard(player.countCards('h') - 25, 'h', true);
                    } else {
                        if (player.countMark('琴里阶段') > 1) player.drawTo(Math.min(25, player.countMark('琴里怒气')));
                        if (player.countMark('琴里阶段') == 1) player.drawTo(3);
                    }
                },
                ai: {
                    noh: true,
                    skillTagFilter(player, tag) {
                        if (!player.hasMark('琴里阶段')) return false;
                        if (tag == 'noh' && player.countCards('h') > Math.min(25, player.countMark('琴里阶段'))) {
                            return false;
                        }
                    },
                },
            }; //所有阶段将手牌调整至【怒气】值
            lib.skill._swlz_nowuxie = {
                forced: true,
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return player.hasMark('琴里阶段') && event.card.name == 'wuxie';
                },
                content() {
                    trigger.nowuxie = true;
                },
            }; //所有阶段别人不能无懈你
            lib.skill._zljg_5 = {
                mod: {
                    cardUsable(card, player, num) {
                        if (player.hasMark('琴里阶段')) {
                            var marks = player.countMark('琴里怒气');
                            if (card.name == 'sha') return marks > 5 ? Infinity : num + marks;
                        }
                    },
                    selectTarget(card, player, range) {
                        if (player.hasMark('琴里阶段')) {
                            var marks = player.countMark('琴里怒气');
                            if (card.name == 'sha') marks > 5 ? (range[1] = Infinity) : (range[1] += marks);
                        }
                    },
                },
                forced: true,
                _priority: 20,
                trigger: {
                    player: ['useCard', 'useCardToPlayer'],
                },
                filter(event, player, name) {
                    if (player.hasMark('琴里阶段')) {
                        if (name == 'useCard') {
                            return player.countMark('琴里怒气') > 5 && event.card.name == 'sha';
                        }
                        return event.card.name == 'sha' && !event.parent.directHit.includes(event.target) && event.target != player && player.hasMark('琴里怒气') && player.countMark('琴里怒气') <= 5;
                    }
                    if (event.card.name == 'shan') {
                        var source = event.getParent(2).player;
                        if (!source.hasMark('琴里阶段')) return false;
                        return player != source && (get.is.converted(event) || event.cards.length != 1) && source.hasMark('琴里怒气');
                    }
                    return false;
                },
                content() {
                    if (player.hasMark('琴里阶段')) {
                        if (event.triggername == 'useCard') {
                            trigger.directHit.addArray(game.filterPlayer((target) => target != player));
                        } else {
                            var id = trigger.target.playerid;
                            var map = trigger.parent.customArgs;
                            if (!map[id]) map[id] = {};
                            if (typeof map[id].shanRequired == 'number') map[id].shanRequired += player.countMark('琴里怒气');
                            else map[id].shanRequired = player.countMark('琴里怒气') + 1;
                        }
                    } else {
                        var source = trigger.getParent(2).player;
                        trigger.all_excluded = true;
                    }
                },
            }; //所有阶段强命且加伤
            lib.skill._whql_qlgj = {
                forced: true,
                _priority: 202303102114,
                trigger: {
                    source: 'damageBefore',
                },
                filter(event, player) {
                    return player.hasMark('琴里阶段') && player.countMark('琴里阶段') < 3;
                    //如果是一阶段或者0怒气才触发(不然二三阶段语音重叠)
                },
                content() {
                    var n = [1, 2, 3, 4, 5].randomGet();
                    if (n == 1) {
                        game.playAudio('../extension/五河琴里/audio/普攻1(_whql_qlgj1).mp3');
                    }
                    if (n == 2) {
                        game.playAudio('../extension/五河琴里/audio/普攻2(_whql_qlgj2).mp3');
                    }
                    if (n == 3) {
                        game.playAudio('../extension/五河琴里/audio/普攻3(_whql_qlgj3).mp3');
                    }
                    if (n == 4) {
                        game.playAudio('../extension/五河琴里/audio/Fire!.mp3');
                        player.say('Fire!');
                    }
                    if (n == 5) {
                        game.playAudio('../extension/五河琴里/audio/惩罚确定!.mp3');
                        player.say('惩罚确定!');
                    }
                },
            }; //【琴里语音】琴里攻击二阶段及以下
            lib.skill._whql_qlqs = {
                forced: true,
                _priority: 202306102124,
                logSkill: false,
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return event.num - player.hujia <= 1 && event.player.hp > 0 && event.player.hasMark('琴里阶段') && event.player.countMark('琴里阶段') < 3; //如果是轻伤
                },
                content() {
                    var n = [1, 2, 3, 4].randomGet();
                    if (n == 1) {
                        game.playAudio('../extension/五河琴里/audio/轻伤1(qlqs1).mp3');
                    }
                    if (n == 2) {
                        game.playAudio('../extension/五河琴里/audio/轻伤2(qlqs2).mp3');
                    }
                    if (n == 3) {
                        game.playAudio('../extension/五河琴里/audio/轻伤3(qlqs3).mp3');
                    }
                    if (n == 4) {
                        game.playAudio('../extension/五河琴里/audio/轻伤4(qlqs4).mp3');
                    }
                },
            }; //【琴里语音】琴里受伤二阶段及以下
            lib.skill._whql_qlzs = {
                forced: true,
                _priority: 100,
                // audio:"ext:五河琴里:3",
                trigger: {
                    player: ['damageEnd'],
                },
                filter(event, player) {
                    return (event.num - player.hujia > 1 || event.player.hp <= 0) && event.player.hasMark('琴里阶段') && event.player.countMark('琴里阶段') < 3; //如果是重伤
                },
                content() {
                    var n = [1, 2, 3].randomGet();
                    if (n == 1) {
                        game.playAudio('../extension/五河琴里/audio/重伤1(qlzs1).mp3');
                    }
                    if (n == 2) {
                        game.playAudio('../extension/五河琴里/audio/重伤2(qlzs2).mp3');
                    }
                    if (n == 3) {
                        game.playAudio('../extension/五河琴里/audio/重伤3(qlzs3).mp3');
                    }
                },
            }; //【琴里语音】琴里重伤二阶段及以下
            //-----------------------------------------------------------二阶段【怒气】、【后发制人】、【神威灵装】、【灼烂歼鬼】、【神威灵装】
            lib.skill._swlz_5 = {
                mod: {
                    globalFrom(from, to, distance) {
                        if (from.hasMark('琴里阶段')) {
                            if (from.countMark('琴里怒气') <= 5) return distance - from.countMark('琴里怒气');
                            return -Infinity;
                        }
                    },
                    globalTo(from, to, distance) {
                        if (to.hasMark('琴里阶段')) {
                            if (to.countMark('琴里怒气') <= 5) return distance + to.countMark('琴里怒气');
                            return Infinity;
                        }
                    },
                },
            }; //当怒气小于5时,与其他角色计算距离加减怒气值,否则加减无限
            lib.skill._zljg_10 = {
                forced: true,
                _priority: 2,
                trigger: {
                    player: 'useCardToPlayer',
                    source: 'damageBegin1',
                },
                filter(event, player) {
                    if (player.hasMark('琴里阶段')) {
                        if (player.countMark('琴里怒气') <= 5) return false;
                        if (event.name == 'damage') return event.card && event.card.name == 'sha' && event.player != player;
                        return event.card && event.card.name == 'sha' && event.target != player;
                    }
                    return false;
                },
                content() {
                    game.log(trigger.name);
                    if (trigger.name == 'damage') {
                        game.log('<span class=\"firetext\">由于琴里的怒气≥6,琴里用【杀】对其他角色造成伤害时,目标增加一层"噬身焚魂"</span>');
                        trigger.player.addMark('噬身焚魂'); //增加一个噬身焚魂标记
                    } else {
                        trigger.target.hp -= Math.ceil(trigger.target.hp / 2);
                        trigger.target.update();
                        if (trigger.target.hp <= 0) {
                            trigger.target.dying();
                        }
                        game.log('<span class=\"firetext\">由于琴里的怒气≥6,琴里使用【杀】指定目标时,目标废除所有装备区,体力变成一半(向下取整)</span>');
                        trigger.target.disabledSlots = {
                            equip1: 1,
                            equip2: 1,
                            equip3: 1,
                            equip4: 1,
                            equip5: 1
                        }; //装备区全部废除,不显示但是效果一样
                        trigger.target.update();
                    }
                },
            }; //当怒气大于6时,用【杀】对其他角色造成伤害时,目标增加一个【噬身焚魂】标记.琴里使用【杀】指定目标时,目标废除所有装备区,体力变成一半.
            lib.skill._swlz_10 = {
                forced: true,
                lastDo: true,
                trigger: {
                    player: ['damageBegin4', 'damageEnd', 'phaseBegain'],
                },
                filter(event, player, name) {
                    if (player.hasMark('琴里阶段')) {
                        if (name == 'damageBegin4' && _status.nodamage) return true;
                        if (player.countMark('琴里怒气') >= 6) {
                            if (['damageEnd', 'phaseBefore'].includes(name)) return true;
                            return event.num > 5 / player.countMark('琴里怒气'); //修改为带小数的伤害上限保护
                        }
                    }
                    return false;
                },
                content() {
                    if (event.triggername == 'damageEnd') {
                        if (player.getStat('skill')._swlz_15) player.getStat('skill')._swlz_15 = -1;
                        if (!_status.nodamage) _status.nodamage = 0;
                        _status.nodamage = 1;
                    }
                    if (event.triggername == 'damageBegin4') {
                        if (_status.nodamage)
                            trigger.cancel(); //每回合只会受伤一次
                        else trigger.num = 5 / player.countMark('琴里怒气'); //带小数
                    }
                    if (event.triggername == 'phaseBegain') {
                        if (_status.nodamage) _status.nodamage--;
                    }
                },
            }; //当怒气大于6时,受伤上限为伤害值除以怒气值
            lib.skill._swlz_15 = {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (!player.hasMark('琴里阶段')) return false;
                    if (player.countMark('琴里怒气') < 11) return false;
                    for (var name of lib.inpile) {
                        if (['basic', 'trick'].includes(get.type(name)) && event.filterCard({ name: name }, player, event)) {
                            return (player.getStat('skill')._swlz_15 || 0) < player.countMark('琴里怒气');
                        }
                    }
                    return false;
                },
                hiddenCard(player, name) {
                    return player.countMark('琴里怒气') >= 11 && (player.getStat('skill')._swlz_15 || 0) < player.countMark('琴里怒气');
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var name of lib.inpile) {
                            var type = get.type(name);
                            var tName = get.translation(type);
                            if (['basic', 'trick'].includes(type) && event.filterCard({ name: name }, player, event)) {
                                list.push([tName, '', name]);
                                if (name == 'sha') {
                                    for (var nature of lib.inpile_nature) {
                                        if (event.filterCard({ name: name, nature: nature }, player, event)) {
                                            list.push([tName, '', name, nature]);
                                        }
                                    }
                                }
                            }
                        }
                        var dialog = ui.create.dialog('神威灵装③', 'hidden');
                        dialog.addText('本回合剩余:' + (player.countMark('琴里怒气') - (player.getStat('skill')._swlz_15 || 0)) + '次');
                        dialog.add([list, 'vcard']);
                        return dialog;
                    },
                    check(button) {
                        if (_status.event.parent.type != 'phase') return 1;
                        var player = _status.event.player;
                        if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                        return player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    },
                    backup(links, player) {
                        return {
                            popname: true,
                            filterCard: () => false,
                            selectCard: -1,
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                        };
                    },
                    prompt(links, player) {
                        return '选择' + (get.translation(links[0][3]) || '') + '【' + get.translation(links[0][2]) + '】的目标';
                    },
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            }; //当怒气大于11时,可以印牌
            lib.skill._zljg_15 = {
                mod: {
                    cardEnabled2(card, player) {
                        if (_status.disableList && _status.disableList[player.playerid]) return false;
                    },
                    cardSavable(card, player) {
                        if (_status.disableList && _status.disableList[player.playerid]) return false;
                    },
                },
                forced: true,
                firstDo: true,
                trigger: {
                    source: 'damageBefore',
                    player: ['useCardToPlayer', 'phaseUseBegin'],
                },
                filter(event, player) {
                    if (player.hasMark('琴里阶段')) {
                        if (player.countMark('琴里怒气') <= 10) return false;
                        if (event.name == 'damage') return event.player != player && event.card && event.card.name == 'sha';
                        return event.card && event.card.name == 'sha' && event.target != player;
                    }
                    return _status.disableList && _status.disableList[player.playerid];
                },
                content() {
                    if (!_status.disableList) _status.disableList = {};
                    if (trigger.name == 'phaseUse') {
                        var source = game.findPlayer((target) => target.hasMark('琴里阶段'));
                        if (!source || source.countMark('琴里怒气') < 25) {
                            for (var skill of _status.disableList[player.playerid]) player.enableSkill(skill);
                        }
                        delete _status.disableList[player.playerid];
                    } else {
                        if (trigger.name == 'damage') {
                            if (trigger.player.maxHp > 5) {
                                trigger.player.maxHp = 5;
                                trigger.player.update();
                            }
                            game.log('<span class=\"firetext\">由于琴里的怒气≥11,琴里使用【杀】对其他角色造成伤害前,若目标体力上限>5,调整至5</span>');
                        } else {
                            trigger.target.initedSkills = [];
                            trigger.target.additionalSkills = {};
                            trigger.target.hiddenSkills = []; //清除常驻技能以外的所有技能
                            game.log('<span class=\"firetext\">由于琴里的怒气≥11,琴里使用【杀】指定目标时,清除目标所有非常驻技能和【噬身焚魂】以外的所有标记,销毁目标所有牌</span>');
                            for (var i in trigger.target.storage) {
                                if (i != '噬身焚魂' && i != '罪业') delete trigger.target.storage[i];
                            }
                            for (var i in trigger.target.marks) {
                                if (i != '噬身焚魂' && i != '罪业') trigger.target.unmarkSkill(i);
                            }
                            ui.updatem(trigger.target);
                            //销毁所有牌
                            var cards = trigger.target.getCards('hejsx');
                            game.cardsGotoOrdering(cards);
                            for (var card of cards) {
                                card.fix();
                                card.remove();
                                card.destroyed = true;
                            }
                        }
                    }
                },
            }; //当怒气大于11时,使用【杀】对其他角色造成伤害前,若目标体力上限>5,调整至5.琴里使用【杀】指定目标时,清除目标所有非常驻技能和【噬身焚魂】以外的所有标记,销毁目标所有牌.
            lib.skill._zljg_16 = {
                forced: true,
                trigger: {
                    global: 'phaseAfter',
                },
                filter(event, player) {
                    return player.hasMark('琴里阶段');
                },
                content() {
                    game.countPlayer(function (current) {
                        //如果场上只剩下玩家同阵营,则琴里胜利,司令官琴里也适用
                        if (player.storage.count == undefined) player.storage.count = 0;
                        if (player.storage.alive == undefined) player.storage.alive = 0;
                        if (current.isAlive()) player.storage.alive += 1;
                        if (current.identity == player.identity) player.storage.count += 1;
                    });
                    if (player.storage.count == player.storage.alive) {
                        if (player.countMark('琴里阶段') < 3 && player.hasMark('琴里阶段')) {
                            game.playAudio('../extension/五河琴里/audio/胜利是理所当然的,所以夸夸我也是可以的哦~.mp3');
                            player.say('胜利是理所当然的,所以夸夸我也是可以的哦~');
                        }
                        if (player.countMark('琴里阶段') == 3) {
                            game.playAudio('../extension/五河琴里/audio/什么嘛~已经结束了？.mp3');
                            player.say('什么嘛~已经结束了？');
                        }
                        game.log('<span class=\"firetext\">由于场上只剩琴里的阵营,琴里的阵营获得游戏胜利</span>');
                        game.forceOver(true);
                    } else {
                        player.storage.count = 0;
                        player.storage.alive = 0;
                    }
                    ('step 0');
                    if (!_status.extraPhase) _status.extraPhase = 0;
                    _status.extraPhase += player.getStat('kill') || 0;
                    ('step 1');
                    if (_status.extraPhase && player.countMark('琴里怒气') > 15) {
                        game.log('<span class=\"firetext\">由于琴里的怒气≥16,若琴里在之前的回合内击杀了目标,琴里于该回合结束后连续执行等同于击杀数的额外回合</span>');
                        _status.extraPhase--;
                        player.phase('nodelay');
                        var n = [1, 2].randomGet();
                        if (n == 1) {
                            game.playAudio('../extension/五河琴里/audio/下一个轮到你了吗(琴里kill).mp3');
                            player.say('下一个轮到你了吗？');
                        }
                        if (n == 2) {
                            game.playAudio('../extension/五河琴里/audio/下一个是谁(琴里kill).mp3');
                            player.say('下一个是谁？');
                        }
                        game.log('<span class=\"firetext\">当前还剩</span>', _status.extraPhase, '<span class=\"firetext\">个额外回合待执行</span>');
                    }
                },
            }; //当【怒气】大于16时,若在之前的回合内击杀了目标,于该回合结束后连续执行等同于击杀数的额外回合//如果场上只剩下玩家同阵营,则胜利
            lib.skill._swlz_16 = {
                forced: true,
                trigger: {
                    player: 'damageBefore',
                },
                filter(event, player) {
                    if (player.hasMark('琴里阶段')) {
                        return player.countMark('琴里怒气') >= 16;
                    }
                    return false;
                },
                content() {
                    var next = player.phaseUse();
                    event.next.remove(next);
                    trigger.next.push(next);
                    game.log('<span class=\"firetext\">琴里受到伤害前,立即执行一个额外出牌阶段</span>');
                },
            }; //当【怒气】大于16时,受到伤害前立即执行一个额外出牌阶段
            //-----------------------------------------------------------二阶段【怒气】、【后发制人】、【神威灵装】、【灼烂歼鬼】、【神威灵装】
            lib.skill._琴里怒气 = {
                forced: true, //怒气自动发动
                trigger: {
                    player: ['damageEnd', 'phaseBegin'],
                    global: 'gameStart',
                },
                filter(event, player, name) {
                    if (player.countMark('琴里怒气') >= 25) return false;
                    return player.hasMark('琴里阶段');
                },
                content() {
                    if (event.triggername == 'gameStart' && player.countMark('琴里阶段') > 1) player.addMark('琴里怒气', Math.min(25 - player.countMark('琴里怒气'), 12));
                    if (event.triggername == 'gameStart' && player.countMark('琴里阶段') == 1) player.addMark('火灵守护', 5);
                    if (trigger.name == 'phase' && player.countMark('琴里阶段') > 1) player.addMark('琴里怒气', Math.min(25 - player.countMark('琴里怒气'), 3));
                    if (trigger.name == 'damage' && player.countMark('琴里阶段') > 1) player.addMark('琴里怒气', Math.min(25 - player.countMark('琴里怒气'), Math.ceil(trigger.num)));
                    event.player.update();
                    if (player.hasMark('琴里怒气')) {
                        event.player.maxHp = event.player.countMark('琴里怒气');
                        event.player.hp = event.player.maxHp;
                        event.player.update();
                        ///琴里的体力上限与怒气值保持一致,且琴里每次获得怒气时都会将体力调整至与体力上限相同
                    }
                },
            }; //二阶段及以上时,受伤后\准备阶段获得【怒气】
            lib.skill._swlz_disableEquip2 = {
                mod: {
                    cardEnabled(card, player) {
                        if (player.countMark('琴里阶段') >= 2) {
                            if (get.subtype(card) == 'equip2') return false;
                        }
                    },
                },
                forced: true,
                trigger: {
                    player: ['enterGame', 'equipBegin', 'swapPlayer'],
                },
                filter(event, player, name) {
                    if (player.countMark('琴里阶段') < 2) return false;
                    if (event.name == 'equip') return get.subtype(event.card) == 'equip2';
                    return player.getEquip(2);
                },
                content() {
                    trigger.cancel();
                    trigger.untrigger();
                    trigger.name == 'equip' ? game.cardsDiscard(trigger.card) : (player.discard(player.getEquip(2))._triggered = null);
                },
            }; //二阶段及以上时,防具废除
            lib.skill._swlz_wuxie = {
                enable: 'chooseToUse',
                filter(event, player) {
                    return player.countMark('琴里阶段') > 1;
                },
                filterCard: { color: 'black' },
                viewAsFilter(player) {
                    return player.countMark('琴里阶段') > 1 && player.countCards('hes', { color: 'black' });
                },
                viewAs: {
                    name: 'wuxie',
                },
                position: 'hes',
                prompt: '将一张黑色牌当作【无懈可击】使用',
                check(card) {
                    var trigger = _status.event.getTrigger();
                    if (trigger && trigger.card && trigger.card.name == 'chiling') return -1;
                    return 8 - get.value(card);
                },
                threaten: 1.2,
            }; //二阶段及以上时,将一张黑色牌当作【无懈可击】使用
            lib.skill._swlz_wuxieAfter = {
                forced: true,
                trigger: {
                    player: 'useCardAfter',
                },
                filter(event, player) {
                    if (player.countMark('琴里阶段') < 2) return false;
                    return event.card.name == 'wuxie' && event.respondTo && event.respondTo[0] != player && event.respondTo[0].isAlive() && event.respondTo[1] && !['delay', 'equip'].includes(get.type(event.respondTo[1].name));
                },
                content() {
                    'step 0';
                    event.bool = trigger.respondTo[0].getHistory('useCard', (evt) => evt.card == trigger.respondTo[1] && evt.targets.includes(player)).length == 0;
                    var prompt2 = '视为对' + (event.bool ? '自己' : get.translation(trigger.respondTo[0])) + '使用一张【' + get.translation(trigger.respondTo[1].name) + '】';
                    player.chooseBool(get.prompt(event.name), prompt2).set('ai', function () {
                        var card = { name: trigger.respondTo[1].name };
                        var target = event.bool ? player : trigger.respondTo[0];
                        return get.effect(target, card, player, player);
                    });
                    ('step 1');
                    if (result.bool) {
                        var card = { name: trigger.respondTo[1].name };
                        var target = event.bool ? player : trigger.respondTo[0];
                        player.line(target);
                        player.useCard(card, target, false);
                    }
                },
            }; //二阶段及以上时,别人不能无懈你
            lib.skill._zljg_disableEquip1 = {
                mod: {
                    cardEnabled(card, player) {
                        if (player.countMark('琴里阶段') >= 2) {
                            if (get.subtype(card) == 'equip1') return false;
                        }
                    },
                },
                forced: true,
                trigger: {
                    player: ['enterGame', 'equipBegin', 'swapPlayer'],
                },
                filter(event, player, name) {
                    if (player.countMark('琴里阶段') <= 1) return false; //有标记且被控制才不返回false往下执行
                    if (event.name == 'equip') return get.subtype(event.card) == 'equip1';
                    return player.getEquip(1);
                },
                content() {
                    trigger.cancel();
                    trigger.untrigger();
                    trigger.name == 'equip' ? game.cardsDiscard(trigger.card) : (player.discard(player.getEquip(1))._triggered = null);
                },
            }; //二阶段及以上时,废除武器栏
            lib.skill._zljg_chooseToUse = {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (!player.hasMark('琴里阶段')) return false;
                    if (player.hasMark('琴里阶段') && player.countMark('琴里阶段') > 1) return player.countCards('hes', { color: 'red' });
                },
                filterCard: { color: 'red' },
                selectCard: [1, Infinity],
                position: 'hes',
                complexCard: true,
                prompt: '将任意张红色牌当做伤害基数等同于转化牌数的【杀】使用或打出',
                check(card) {
                    var val = get.value(card);
                    if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                    return 5 - val;
                },
                viewAs: { name: 'sha' },
                precontent() {
                    event.parent.oncard = function () {
                        _status.event.baseDamage = event.result.cards.length;
                    };
                },
                ai: {
                    respondSha: true,
                    skillTagFilter(player) {
                        return player.countMark('琴里阶段') > 1 && player.countCards('hes', { color: 'red' });
                    },
                },
            }; //二阶段及以上时,将任意张红色牌当做伤害基数等同于转化牌数的【杀】使用或打出
            lib.skill._zljg_useCardToPlayered = {
                forced: true,
                trigger: {
                    player: 'useCardToPlayered',
                },
                filter(event, player) {
                    if (player.countMark('琴里阶段') < 2) return false;
                    return event.target != player && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.triggeredTargets3.length == 1;
                },
                content() {
                    'step 0';
                    player.chooseControlList(get.prompt(event.name), ['断魂:改为火属性伤害并清除目标所有常驻技能', '连击:对目标造成一次同等伤害基数的神圣伤害']).set('ai', function () {
                        if (get.damageEffect(trigger.target, player, player, 'fire')) return 0;
                        return 1;
                    });
                    ('step 1');
                    if (result.control && result.control != 'cancel2') {
                        if (player.countMark('琴里阶段') == 3) {
                            var n = [1, 2, 3, 5, 6, 7].randomGet();
                            if (n == 1) {
                                game.playAudio('../extension/五河琴里/audio/不要祈求我会有同情心(_琴里暴击).mp3');
                                player.say('不要祈求我会有同情心');
                            }
                            if (n == 2) {
                                game.playAudio('../extension/五河琴里/audio/你不值得我战斗(_琴里暴击).mp3');
                                player.say('你不值得我战斗');
                            }
                            if (n == 3) {
                                game.playAudio('../extension/五河琴里/audio/做好觉悟吧(_琴里暴击).mp3');
                                player.say('做好觉悟吧');
                            }
                            if (n == 5) {
                                game.playAudio('../extension/五河琴里/audio/噬身焚魂!(_琴里暴击).mp3');
                                player.say('噬身焚魂!');
                            }
                            if (n == 6) {
                                game.playAudio('../extension/五河琴里/audio/就是这样(_琴里暴击).mp3');
                                player.say('就是这样~');
                            }
                            if (n == 7) {
                                game.playAudio('../extension/五河琴里/audio/看啊,可爱的玩具(_琴里暴击).mp3');
                                player.say('看啊,可爱的玩具~');
                            }
                        }
                        switch (result.index) {
                            case 0: {
                                var nature = trigger.card.nature;
                                trigger.card.nature = 'fire';
                                trigger.target.skills = [];
                                var next = game.createEvent('natureclear');
                                next.card = trigger.card;
                                next.nature = nature;
                                event.next.remove(next);
                                trigger.parent.after.push(next);
                                next.setContent(function () {
                                    card.nature = event.nature;
                                });
                                break;
                            }
                            case 1: {
                                trigger.target.damage(player, Math.max(1, trigger.cards.length))._triggered = null;
                                break;
                            }
                        }
                    }
                },
            }; //二阶段及以上时,断魂,连击
            lib.skill._swlz_nodamage = {
                forced: true,
                trigger: {
                    player: 'damageBegin4',
                    target: 'useCardToPlayer',
                },
                filter(event, player) {
                    if (player.countMark('琴里阶段') < 2) return false;
                    if (event.name == 'damage') return !event.nature || event.nature == 'ice' || event.nature == 'fire' || !event.source;
                    return event.player != player && (event.cards.length != 1 || event.card.name != event.cards[0].name || !event.player || !event.player.isAlive());
                },
                content() {
                    game.log('<span class=\"firetext\">冰属性、火属性、无属性伤害对琴里无效,琴里免疫非实体卡牌和无来源卡牌的伤害</span>');
                    if (trigger.name == 'damage') {
                        trigger.cancel();
                    } else {
                        trigger.excluded.push(player);
                        trigger.untrigger();
                    }
                },
            }; //二阶段及以上时,冰属性、火属性、无属性伤害无效
            //-----------------------------------------------------------三阶段【以一当千】、【终焉】
            lib.skill._yydq_1 = {
                mod: {
                    //敌方效果:手牌不能超过体力,手牌中伤害标签牌替换为决斗和杀,手牌大于体力时随机弃置
                    cardname(card, player) {
                        if (game.hasPlayer((target) => target.countMark('琴里阶段') >= 3)) {
                            //QQQ
                            if (get.type(card.name) == 'trick' && get.tag({ name: card.name }, 'damage')) return 'juedou';
                            if (['tao', 'shan'].includes(card.name)) return 'sha';
                        }
                    },
                    maxHandcardFinal(player, num) {
                        if (game.hasPlayer((target) => target.countMark('琴里阶段') >= 3)) {
                            if (!player.hasMark('琴里阶段')) return player.hp;
                        }
                    },
                },
                forced: true,
                trigger: {
                    player: 'phaseAfter',
                },
                filter(event, player) {
                    if (player.hasMark('琴里阶段')) return false;
                    return game.findPlayer((Q) => Q.countMark('琴里阶段') >= 3) && player.countCards('h') > player.hp;
                },
                content() {
                    var num = player.countCards('he') - player.hp;
                    player.discard(player.getCards('he').randomGets(num)); //随机弃置手牌或装备牌至二者之和与体力相等
                },
            }; //三阶段时,敌方手牌不能超过体力,手牌中伤害标签牌替换为决斗和杀,手牌大于体力时随机弃置.回合结束时随机弃置
            lib.skill._yydq_juedou = {
                forced: true,
                trigger: {
                    global: ['loseAfter'],
                },
                filter(event, player) {
                    if (player.countMark('琴里阶段') >= 3) {
                        return event.player != player && event.cards && event.cards.some((card) => get.tag(card, 'damage'));
                    }
                    return false;
                },
                async content(event, trigger, player) {
                    //QQQ
                    var num = trigger.cards.filter((card) => get.tag(card, 'damage')).length;
                    while (num-- > 0) {
                        player.useCard({ name: 'sha' }, trigger.player);
                    }
                },
            }; //三阶段时,可以使用其他角色失去的伤害牌
            lib.skill._yydq_2 = {
                mod: {
                    playerEnabled(card, player, target) {
                        if (!player.hasMark('琴里阶段')) {
                            var source = game.findPlayer((target) => target.countMark('琴里阶段') >= 3);
                            if (!source) return;
                            if (target != source && get.tag(card, 'damage')) return false;
                        }
                    },
                    targetInRange(card, player, target) {
                        if (!player.hasMark('琴里阶段')) {
                            var source = game.findPlayer((target) => target.countMark('琴里阶段') >= 3);
                            if (!source) return;
                            if (target == source && get.tag(card, 'damage')) return true;
                        }
                    },
                    cardUsableTarget(card, player, target) {
                        if (!player.hasMark('琴里阶段')) {
                            var source = game.findPlayer((target) => target.countMark('琴里阶段') >= 3);
                            if (!source) return;
                            if (target == source && get.tag(card, 'damage')) return true;
                        }
                    },
                },
            }; //三阶段时,不能使用伤害牌以及距离无限？？？
            lib.skill._yydq_3 = {
                forced: true,
                trigger: {
                    player: ['useCard', 'respond'],
                },
                filter(event, player) {
                    return player.countMark('琴里阶段') >= 3 && ['sha', 'juedou'].includes(event.card.name);
                },
                content() {
                    'step 0';
                    event.bool = false;
                    event.targets = game.filterPlayer((target) => target != player);
                    ('step 1');
                    event.target = targets.shift();
                    var next = event.target.chooseToRespond('以一当千③:打出一张【杀】,否则受到一点伤害', { name: 'sha' });
                    next.set('ai', function (card) {
                        var evt = _status.event.parent;
                        if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
                        if (evt.player.hasSkillTag('notricksource')) return 0;
                        if (evt.target.hasSkillTag('notrick')) return 0;
                        return get.order(card);
                    });
                    next.autochoose = lib.filter.autoRespondSha;
                    ('step 2');
                    if (!result.bool) {
                        player.line(target);
                        target.damage('nocard');
                    } else if (!event.bool) event.bool = true;
                    ('step 3');
                    if (targets.length) event.goto(1); //如果还有未适用效果的目标,循环执行以上步骤
                    ('step 4');
                    if (event.bool) {
                        player
                            .chooseToUse('以一当千③:是否使用一张【杀】？', function (card, player, event) {
                                if (card.name != 'sha') return false;
                                return lib.filter.filterCard.apply(this, arguments);
                            })
                            .set('addCount', false);
                    } else event.finish();
                    ('step 5');
                    if (result.bool) {
                        target = result.targets[0];
                        target.damage('nocard', 'notrigger');
                        game.log('<span class=\"firetext\">琴里每因【以一当千】的效果使用了虚拟杀,其他所有角色清除所有标记,并额外受到其体力上限+【灼烂歼鬼·狂暴】层数的神圣伤害</span>');
                        game.countPlayer(function (current) {
                            if (!current.hasMark('琴里阶段')) {
                                current.addSkill('噬身焚魂');
                                current.addMark('噬身焚魂', 1);
                                for (var i in current.storage) {
                                    if (i != '噬身焚魂' && i != '罪业') delete current.storage[i];
                                }
                                for (var i in current.marks) {
                                    if (i != '噬身焚魂' && i != '罪业') current.unmarkSkill(i);
                                }
                                game.log('<span class=\"firetext\">由于琴里的怒气≥11,她的【杀】指定目标后会清除所有角色【噬身焚魂】以外的所有标记,并且销毁目标所有牌</span>');
                                var num = player.countMark('狂暴');
                                current.damage(current.maxHp + num, 'nocard', 'notrigger');
                            }
                        });
                        if (player.countMark('狂暴') >= 10) {
                            game.log('<span class=\"firetext\">琴里每因【以一当千】的效果使用了10次以上的虚拟杀,场上所有角色进行一次死亡结算</span>');
                            game.countPlayer(function (current) {
                                if (!current.hasMark('琴里阶段')) {
                                    delete game.fux2.dangan.kamukura;
                                    current.$die(); //死亡动画
                                    game.dead.push(current);
                                    current.classList.add('dead');
                                    current.classList.add('out');
                                    const next = game.createEvent('diex', false);
                                    next.source = player;
                                    next.player = current;
                                    next._triggered = null;
                                    next.restMap = { type: null, count: null, audio: null };
                                    next.excludeMark = [];
                                    next.setContent('die');
                                }
                            });
                            player.useCard({ name: 'sha' }, target); //注意:useCard会创建事件,usecard语句生效后,同一技能中的damage、die等函数会失效,但是不会报错
                        }
                        if (player.countMark('狂暴') >= 20) {
                            game.countPlayer(function (current) {
                                if (!current.hasMark('琴里阶段')) {
                                    current.addTempSkill('baiban');
                                    current.skills = [];
                                    current.initedSkills = [];
                                    current.additionalSkills = {};
                                    current.hiddenSkills = [];
                                    current.tempSkills = {};
                                    current.addSkill('噬身焚魂');
                                    current.addMark('噬身焚魂', 1);
                                    game.log('<span class=\"firetext\">琴里每因【以一当千】的效果使用了20次以上的虚拟杀,清除全场技能</span>');
                                }
                            });
                            player.useCard({ name: 'sha' }, target); //对目标使用一张虚拟【杀】
                        }
                        if (player.countMark('狂暴') >= 30) {
                            game.countPlayer(function (current) {
                                if (!current.hasMark('琴里阶段')) {
                                    current.name = '';
                                    current.name1 = '';
                                    current.name2 = '';
                                    for (var i in current.storage) {
                                        if (i != '噬身焚魂' && i != '罪业') delete current.storage[i];
                                    }
                                    for (var i in current.marks) {
                                        if (i != '噬身焚魂' && i != '罪业') current.unmarkSkill(i);
                                    }
                                    game.log('<span class=\"firetext\">琴里每因【以一当千】的效果使用了30次虚拟杀,清除全场角色的姓名和【噬身焚魂】以外的标记,重置【灼烂歼鬼·狂暴】的层数</span>');
                                }
                            });
                            player.useCard({ name: 'sha' }, target); //对目标使用一张虚拟【杀】
                            player.storage.狂暴 = 0;
                        }
                        if (player.countMark('狂暴') < 30) {
                            game.countPlayer(function (current) {
                                if (!current.hasMark('琴里阶段')) {
                                    player.useCard({ name: 'sha' }, current); //对目标使用一张虚拟【杀】
                                }
                            });
                            player.addMark('狂暴');
                            player.markSkill('狂暴');
                        }
                    } else event.finish();
                    ('step 5');
                    if (!result.bool) player.damage('nocard', 'nosource');
                },
            }; //三阶段使用杀和决斗后,所有其他角色选择打出一张【杀】,否则受到一点伤害,根据【狂暴】执行效果,添加【噬身焚魂】,添加【狂暴】
            lib.skill._whql_ymgj = {
                forced: true,
                _priority: 202303102114,
                trigger: {
                    source: 'damageBefore',
                },
                filter(event, player) {
                    return player.countMark('琴里阶段') == 3;
                    //如果是一阶段或者0怒气才触发(不然二三阶段语音重叠)
                },
                content() {
                    var n = [1, 2, 3, 4, 5, 6, 7, 8].randomGet();
                    if (n == 1) {
                        game.playAudio('../extension/五河琴里/audio/炎魔普攻1(_whql_ymgj1).mp3');
                    }
                    if (n == 2) {
                        game.playAudio('../extension/五河琴里/audio/炎魔普攻2(_whql_ymgj2).mp3');
                    }
                    if (n == 3) {
                        game.playAudio('../extension/五河琴里/audio/炎魔普攻3(_whql_ymgj3).mp3');
                    }
                    if (n == 4) {
                        game.playAudio('../extension/五河琴里/audio/炎魔普攻4(_whql_ymgj4).mp3');
                    }
                    if (n == 5) {
                        game.playAudio('../extension/五河琴里/audio/炎魔普攻5(_whql_ymgj5).mp3');
                    }
                    if (n == 6) {
                        game.playAudio('../extension/五河琴里/audio/炎魔普攻6(_whql_ymgj6).mp3');
                    }
                    if (n == 7) {
                        game.playAudio('../extension/五河琴里/audio/炎魔普攻7(_whql_ymgj7).mp3');
                    }
                    if (n == 8) {
                        game.playAudio('../extension/五河琴里/audio/炎魔普攻8(_whql_ymgj8).mp3');
                    }
                },
            }; //【琴里语音】炎魔攻击三阶段
            lib.skill._whql_ymss = {
                forced: true,
                // audio:"ext:五河琴里:3",
                trigger: {
                    player: ['damageEnd'],
                },
                filter(event, player) {
                    return event.num - player.hujia > 0 && event.player.countMark('琴里阶段') == 3; //如果是重伤
                },
                content() {
                    var n = [1, 2, 3, 4, 5, 6, 7].randomGet();
                    if (n == 1) {
                        game.playAudio('../extension/五河琴里/audio/真是碍事(_whql_ymss).mp3');
                        player.say('真是碍事!');
                    }
                    if (n == 2) {
                        game.playAudio('../extension/五河琴里/audio/看来是想惹我生气呢(_whql_ymss).mp3');
                        player.say('看来是想惹我生气呢~');
                    }
                    if (n == 3) {
                        game.playAudio('../extension/五河琴里/audio/不要烦我(_whql_ymss).mp3');
                        player.say('不要烦我!');
                    }
                    if (n == 4) {
                        game.playAudio('../extension/五河琴里/audio/狂笑1(_whql_ymss4).mp3');
                    }
                    if (n == 5) {
                        game.playAudio('../extension/五河琴里/audio/狂笑2(_whql_ymss5).mp3');
                    }
                    if (n == 6) {
                        game.playAudio('../extension/五河琴里/audio/不对我表示敬意是不对的(_whql_ymss6).mp3');
                        player.say('不向我献上敬意,反而攻击我吗？');
                    }
                    if (n == 7) {
                        game.playAudio('../extension/五河琴里/audio/必须拼死战斗的敌人,真是可怜呢(_whql_ymss7).mp3');
                        player.say('必须拼死战斗的敌人,真是可怜呢~');
                    }
                },
            }; ///【琴里语音】三阶段
            lib.skill._终焉 = {
                audio: 'ext:五河琴里:1',
                forced: true,
                enable: 'phaseUse',
                filter(event, player) {
                    if (player.countMark('琴里怒气') >= 1 && player.countMark('琴里阶段') >= 3) return true;
                    //怒气至少5,二阶段及以上,处于玩家控制下拥有琴里本尊标记才可发动
                },
                async content(event, trigger, player) {
                    //QQQ
                    game.playAudio('../extension/五河琴里/audio/死之命令(_终焉).mp3');
                    player.say('死の命令です');
                    game.mp411('歼鬼炮击处决特效');
                    for (var i of game.players) {
                        if (!i.hasMark('琴里阶段')) {
                            delete i.name;
                            delete i.name1;
                            delete i.name2;
                            delete i.sex;
                            delete i.group;
                            delete i.hp;
                            delete i.maxHp;
                            delete i.hujia;
                            i.node.identity.style.backgroundColor = '';
                            i.node.intro.innerHTML = '';
                            i.node.name.innerHTML = '';
                            i.node.hp.innerHTML = '';
                            i.node.count.innerHTML = '0';
                            i.skipList = [];
                            i.skills = [];
                            i.initedSkills = [];
                            i.additionalSkills = {};
                            i.disabledSkills = {};
                            i.hiddenSkills = [];
                            i.awakenedSkills = [];
                            i.forbiddenSkills = {};
                            i.stat = [{ card: {}, skill: {} }];
                            i.tempSkills = {};
                            i.storage = {};
                            i.marks = {};
                            var cards = i.getCards('hejsx'); //销毁所有牌
                            game.cardsGotoOrdering(cards);
                            for (var card of cards) {
                                card.fix();
                                card.remove();
                                card.destroyed = true;
                            }
                            const next = game.createEvent('diex', false);
                            next.source = player;
                            next.player = i;
                            next._triggered = null;
                            next.restMap = { type: null, count: null, audio: null };
                            next.excludeMark = [];
                            await next.setContent('die');
                        }
                    }
                },
            }; //三阶段歼鬼炮击,即死
            lib.translate._whql_ymss = '';
            lib.translate._灵枢·冉熠星辰 = '灵枢·冉熠星辰';
            lib.translate._whql_qlzs = '';
            lib.translate._whql_qlqs = '';
            lib.translate._whql_ymgj = '';
            lib.translate._whql_qlgj = '';
            lib.translate._终焉 = '终焉';
            lib.translate._终焉_info = 'Efreet在场时,可以发动;<br>获得对局胜利';
            lib.translate.琴里暴击 = '琴里暴击';
            lib.translate.琴里暴击_info = '琴里每次造成伤害时都有概率暴击(具体请查看狂暴标记的说明)';
            lib.translate.本尊亲临 = '本尊亲临';
            lib.translate.本尊亲临_info = '每一轮开始前时,琴里执行一个额外的回合.';
            lib.translate._whql_ssfh = '噬身焚魂';
            lib.translate.灵枢·冉熠星辰 = '灵枢·冉熠星辰';
            lib.translate.灵枢·冉熠星辰_info = '琴里始终保持在最佳状态,琴里的技能绝大多数情况下不会被无效';
            lib.translate.神威灵装 = '神威灵装·煌';
            lib.translate.神威灵装_info = '❶获得此技能后清空防具区,琴里不是防具牌的合法目标,装备防具时弃置之<br>❷新的一轮开始时,琴里执行一个额外回合<br>❸琴里的回合和回合内的各个阶段均不会被跳过,琴里区域内的牌不会被其他角色获得或弃置<br>❹琴里摸牌时只会摸到带伤害标签的牌和非基本非延时非装备的牌,琴里的手牌数至少为怒气层数,至多为25,『不足/超出』时『摸/弃』至『下限/上限』;<br>❺琴里可以将一张黑色的牌当做【无懈可击】使用或打出,琴里的【无懈可击】可响应的牌的类型由＂锦囊牌＂改为＂非基本牌＂,且不可被其他角色的牌响应.<br>琴里使用【无懈可击】响应其他角色的牌后,可视情形在以下两项中选择一项:<br>①若琴里为该牌的目标,琴里可视为对该牌的来源使用了一张相同的牌.<br>②若琴里不为该牌的目标,琴里可视为对自己使用了一张相同的牌(装备牌和延时锦囊牌除外).<br>❻琴里免疫冰属性、火属性、无属性和无来源的伤害,琴里不是非实体卡牌和无来源卡牌的合法目标.<br><br><span class=\"firetext\">根据怒气的层数,琴里获得以下额外效果(依次叠加):</span><br>★1～5层:<br>『琴里计算与其他角色的距离/其他角色计算与琴里的距离』『减少/增加』X(X=怒气的层数,层数>5层时X为∞).<br>★6～10层:<br>琴里每次受伤不会超过5/X点(X=怒气的层数),琴里受伤后,直到下个琴里的回合开始前,琴里不会受到任何伤害.<br>★11~15层:<br>琴里可以在合适的时机,视为使用或打出牌堆中的任意一张牌,每回合限X次(X=怒气的层数),且琴里受到伤害后会重置当前回合使用次数.<br>★16层及以上:<br>琴里受到伤害前(即便伤害值可能为0),立即执行一个额外的出牌阶段.';
            lib.translate.灼烂歼鬼 = '灼烂歼鬼';
            lib.translate.灼烂歼鬼_info = '❶获得此技能时清空武器区,琴里不是武器牌的合法目标,装备武器时弃置之.<br>❷琴里拥有20%的基础暴击率,200%的基础暴击伤害.<br>❸琴里每有一层"怒气",暴击率提升10%,每有一层"狂暴",暴击伤害提高100%.<br>❹当琴里的暴击率溢出100%时,将以溢出部分的暴击率再次进行暴击判定,循环判定直到暴击率无溢出.<br>❺琴里可以将X张红色的牌当做一张【杀】使用或打出,以此法打出的【杀】的基础伤害为X,琴里可以在使用【杀】或【决斗】指定目标后选择一项(若指定了多个目标只对首个目标生效):<br>①断魂:改为火属性伤害并清除目标所有常驻技能<br>②连击:对目标造成一次同等伤害基数的神圣伤害<br>❻琴里使用的【杀】或【决斗】的伤害使其他角色进入濒死状态或体力≤0时,可以发动:<br>①将目标移出游戏<br>②将目标以友好阵营满状态复活<br><br><span class=\"firetext\">根据怒气的层数,琴里获得以下额外效果(依次叠加):</span><br>★1～5层:<br>①出【杀】次数额外增加怒气的层数(＞5层时无出杀次数限制).<br>②【杀】的回闪量额外增加怒气的层数(＞5层时不可闪避),虚拟【闪】或转化【闪】无法抵消琴里的【杀】.<br>③使用【杀】指定目标时,可额外选择1～X个目标(X为怒气层数,X＞5时可选取目标的数量上限改为∞).<br>★6～10层:<br>①使用【杀】指定目标时,目标废除所有装备区,体力变成一半(向下取整).<br>②用【杀】对琴里以外的角色造成伤害时,为目标添加一层＂噬身焚魂＂.<br>★11～15层:<br>①使用【杀】对其他角色造成伤害前,若目标体力上限＞5,调整至5.<br>②使用【杀】指定目标时,清除目标所有非常驻技能和【噬身焚魂】以外的所有标记,销毁目标所有牌<br>★16层及以上:<br>若琴里在之前的回合内击杀了共X个目标,琴里于该回合结束后连续执行X个额外回合';
            lib.translate._whql_qlyj = '全力一击';
            lib.translate._精灵化 = '精灵化';
            lib.translate._琴里暴击 = '暴击';
            lib.translate._zljg_disableEquip1 = '灼烂歼鬼';
            lib.translate._zljg_chooseToUse = '灼烂歼鬼②';
            lib.translate._zljg_useCardToPlayered = '灼烂歼鬼②';
            lib.translate._zljg_dying = '灼烂歼鬼③';
            lib.translate._zljg_5 = '灼烂歼鬼③';
            lib.translate._zljg_10 = '灼烂歼鬼③';
            lib.translate._zljg_15 = '灼烂歼鬼③';
            lib.translate._zljg_16 = '灼烂歼鬼③';
            lib.translate._swlz_disableEquip2 = '神威灵装';
            lib.translate._swlz_draw = '神威灵装①';
            lib.translate._swlz_drawTo = '神威灵装①';
            lib.translate._swlz_wuxie = '神威灵装②';
            lib.translate._swlz_nowuxie = '神威灵装②';
            lib.translate._swlz_wuxieAfter = '神威灵装②';
            lib.translate._swlz_nodamage = '神威灵装③';
            lib.translate._swlz_5 = '神威灵装③';
            lib.translate._swlz_10 = '神威灵装③';
            lib.translate._swlz_15 = '神威灵装③';
            lib.translate._swlz_16 = '神威灵装③';
            lib.translate._ksfy = '后发制人';
            lib.translate._ksfy_info = '琴里成为牌A的目标时,可以立即对牌A的来源使用一张牌B,若牌B效果结算后目标体力变少,则取消牌A的效果.';
            lib.translate._hfzr = '后发制人';
            lib.translate._yydq_1 = '以一当千①';
            lib.translate._yydq_1_info = '每当琴里使用或打出实体或虚拟的【决斗】或【杀】时,场上其他角色均须打出一张【杀】,未如此做者受到琴里为来源的一点伤害;琴里以外的角色均结算完毕后,若本轮效果结算中至少1人打出了【杀】,则琴里可以使用一张【杀】,或受到一点无来源伤害;重复以上循环,直到琴里未使用【杀】或琴里的【决斗】或【杀】没有被任何其他角色用【杀】响应';
            lib.translate._yydq_juedou = '以一当千①';
            lib.translate._yydq_2 = '以一当千②';
            lib.translate._yydq_2_info = '琴里的【杀】改为指定场上所有其他角色为对象,其他角色使用带有伤害类标签的牌只能指定琴里为对象,且无使用距离和次数限制';
            lib.translate._yydq_3 = '以一当千③';
            lib.translate._yydq_3_info = '牌堆内所有带有伤害标签的锦囊牌视为【决斗】,【闪】和【桃】视为【杀】.①琴里以外角色的手牌上限不能超过其体力值,琴里以外角色的回合结束后,若其手牌超过体力值,须随机弃置手牌至二者相等;其他角色带有伤害标签的牌共X张进入弃牌堆时,视为其原本所有者对琴里使用了X次【决斗】(依次结算)';
            lib.translate._琴里本尊 = '琴里本尊';
            lib.translate._琴里怒气 = '怒气';
            var initCSS = function () {
                var url = 'extension/五河琴里';
                lib.init.css(url, 'extension');
            };
            initCSS();
            //瞬发技初始化//
            lib.element.player.whqlShunfajiInit = function (skillname) {
                var info = lib.skill[skillname];
                if (!info) return;
                if (info.clickable) {
                    var button = ui.create.div('.sksn-shunfaanniu', this);
                    button.innerHTML = get.translation(skillname);
                    var player = this;
                    button.listen(function () {
                        if (player.hasSkill(skillname, true, true, false)) {
                            if (info.clickable) {
                                if (!info.clickableFilter(player) || !player.hasSkill(skillname, false, true, true)) {
                                    alert('当前不可发动!');
                                    return;
                                }
                                info.clickable(player);
                            }
                        } else {
                            button.delete();
                        }
                    });
                }
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '五河琴里',
                    connect: true,
                    character: {
                        whql_jlql: ['none', 'qingyao_xian', 1000, [], []],
                        whql_whql: ['none', 'shen', 2, ['whql_jl', '神威领域3'], []],
                    },
                    translate: {
                        whql_jlql: '精灵琴里测试',
                        whql_whql: '五河琴里',
                        _神威领域1: '神威领域',
                        _神威领域1_info: '',
                        神威领域2: '神威领域',
                        神威领域2_info: '',
                        琴里阶段: '琴里本尊标记',
                        神威领域3: '<span class="firetext">神威领域</span>',
                        神威领域3_info: '<span class="firetext">本尊亲临</span>:每一轮开始前时,琴里执行一个额外的回合<br><span class="firetext">神威领域</span>: <br>★若琴里未精灵化,第一次发动此技能将精灵化,随后可在Efreet与五河琴里之间进行切换,切换后立即执行一个额外回合;<br>★若Efreet在场,其他角色发动的技能全部无效<br>怒气:<br>★琴里每受到x点伤害(包括护盾抵消),怒气标记便+x,怒气上限为25层<br>★若受到的伤害值非整数,则获得伤害值整数部分+1的怒气值<br>★以精灵琴里开始游戏时,获得12层怒气,精灵琴里在每回合开始时额外获得3层怒气<br>★琴里每次变身都会获得5层怒气<br><span class="firetext">快速反应·卡牌</span>:<br>★每回合限一次,当琴里成为一名其他角色使用的牌的对象时,琴里可以弃置一张牌,令该牌对琴里无效并获得之(如有实体卡牌)<br>★若琴里弃置的牌与该牌颜色相同,刷新本回合此技能使用次数<br>★否则,琴里观看并获得对方区域内的1-X张牌(X为当前轮数)<br>★琴里成为牌A的目标时,可以立即对牌A的来源使用一张牌B<br>★若牌B效果结算后目标体力变少,则取消牌A的效果<br> <span class="firetext">以一当千</span>:<br>★每当琴里使用或打出实体或虚拟的【决斗】或【杀】时,场上其他角色均须打出一张【杀】<br>★未如此做者,受到琴里为来源的一点伤害<br>★琴里以外的角色均结算完毕后,若本轮效果结算中至少1人打出了【杀】,则琴里可以使用一张【杀】,或受到一点无来源伤害<br>★重复以上循环,直到琴里未使用【杀】或琴里的【决斗】或【杀】没有被任何其他角色用【杀】响应<br>★琴里的【杀】改为指定场上所有其他角色为对象,其他角色使用带有伤害类标签的牌只能指定琴里为对象,且无使用距离和次数限制<br>★牌堆内所有带有伤害标签的锦囊牌视为【决斗】,【闪】和【桃】视为【杀】<br>★琴里以外角色的手牌上限不能超过其体力值<br>★琴里以外角色的回合结束后,若其手牌超过体力值,须随机弃置手牌至二者相等<br>★其他角色带有伤害标签的牌共X张进入弃牌堆时,视为其原本所有者对琴里使用了X次【决斗】(依次结算) <br>终焉:<br>★Efreet在场时,可以发动;获得对局胜利<br> <span class="firetext">快速反应·技能</span>:<br>★每轮限一次,其他角色使用技能前,琴里可立即对其使用一张牌.若目标角色的体力在该牌结算后减少,琴里打断该技能的发动,并获得一个额外的回合<br>★否则琴里对其造成1点神圣伤害,刷新本技能使用次数<br>★若未成功打断技能,重置此技能使用次数<br> <span class="firetext"> EFREET </span>:<br>★琴里的体力上限不会减少,且使用牌没有距离和次数限制',
                        琴里怒气: '怒气标记',
                        琴里怒气_info: '琴里每受到x点伤害(包括护盾抵消),怒气标记便+x,怒气上限为25层.<br>●若受到的伤害值非整数,则获得伤害值整数部分+1的怒气值.<br>①以精灵琴里开始游戏时,获得12层怒气,精灵琴里在每回合开始时额外获得3层怒气.<br>②琴里每次变身都会获得5层怒气.',
                        罪业: '罪业标记',
                        罪业_info: '',
                        whql_lxdjs: '流血倒计时标记',
                        whql_lxdjs_info: '',
                        琴里怒气_info: 'undefined',
                        噬身焚魂: '噬身焚魂标记',
                        火灵守护: '火灵守护标记',
                        火灵守护_info: '获得此技能后清空防具区,琴里不是防具牌的合法目标,装备防具时弃置之<br>★新的一轮开始时,琴里执行一个额外回合<br>★琴里的回合和回合内的各个阶段均不会被跳过,琴里区域内的牌不会被其他角色获得或弃置<br>★琴里摸牌时只会摸到带伤害标签的牌和非基本非延时非装备的牌<br>★琴里的手牌数至少为怒气层数,至多为25,『不足/超出』时『摸/弃』至『下限/上限』<br>★琴里可以将一张黑色的牌当做【无懈可击】使用或打出,琴里的【无懈可击】可响应的牌的类型由＂锦囊牌＂改为＂非基本牌＂,且不可被其他角色的牌响应<br>★琴里使用【无懈可击】响应其他角色的牌后,可视情形在以下两项中选择一项:<br>★若琴里为该牌的目标,琴里可视为对该牌的来源使用了一张相同的牌<br>★若琴里不为该牌的目标,琴里可视为对自己使用了一张相同的牌(装备牌和延时锦囊牌除外)<br>★琴里免疫冰属性、火属性、无属性和无来源的伤害,琴里不是非实体卡牌和无来源卡牌的合法目标<br><span class="firetext">根据怒气的层数,琴里获得以下额外效果(依次叠加):</span><br>★1～5层:<br>『琴里计算与其他角色的距离/其他角色计算与琴里的距离』『减少/增加』X(X=怒气的层数,层数>5层时X为∞)<br>★6～10层:<br>琴里每次受伤不会超过5/X点(X=怒气的层数),琴里受伤后,直到下个琴里的回合开始前,琴里不会受到任何伤害<br>★11~15层:<br>琴里可以在合适的时机,视为使用或打出牌堆中的任意一张牌,每回合限X次(X=怒气的层数),且琴里受到伤害后会重置当前回合使用次数<br>★16层及以上:<br>琴里受到伤害前(即便伤害值可能为0),立即执行一个额外的出牌阶段',
                        jncs_xiwu: '技能测试-习武',
                        jncs_xiwu_info: '',
                        jncs_dhk: '对话框',
                        jncs_dhk_info: '按下发动',
                        jncs_sfj: '格律·时空',
                        jncs_sfj_info: '立即获得一个额外的出牌阶段',
                        jncs_sfj2: '瞬发技快速反应',
                        jncs_sfj2_info: '',
                        噬身焚魂_info: '噬身焚魂',
                        狂暴: '灼烂歼鬼·狂暴',
                        whql_ksfy_card: '<span class="firetext">神威灵装·煌</span>',
                        whql_ksfy_card_info: '获得此技能后清空防具区,琴里不是防具牌的合法目标,装备防具时弃置之<br>★新的一轮开始时,琴里执行一个额外回合<br>★琴里的回合和回合内的各个阶段均不会被跳过,琴里区域内的牌不会被其他角色获得或弃置<br>★琴里摸牌时只会摸到带伤害标签的牌和非基本非延时非装备的牌<br>★琴里的手牌数至少为怒气层数,至多为25,『不足/超出』时『摸/弃』至『下限/上限』<br>★琴里可以将一张黑色的牌当做【无懈可击】使用或打出,琴里的【无懈可击】可响应的牌的类型由＂锦囊牌＂改为＂非基本牌＂,且不可被其他角色的牌响应<br>★琴里使用【无懈可击】响应其他角色的牌后,可视情形在以下两项中选择一项:<br>★若琴里为该牌的目标,琴里可视为对该牌的来源使用了一张相同的牌<br>★若琴里不为该牌的目标,琴里可视为对自己使用了一张相同的牌(装备牌和延时锦囊牌除外)<br>★琴里免疫冰属性、火属性、无属性和无来源的伤害,琴里不是非实体卡牌和无来源卡牌的合法目标<br><span class="firetext">根据怒气的层数,琴里获得以下额外效果(依次叠加):</span><br>★1～5层:<br>『琴里计算与其他角色的距离/其他角色计算与琴里的距离』『减少/增加』X(X=怒气的层数,层数>5层时X为∞)<br>★6～10层:<br>琴里每次受伤不会超过5/X点(X=怒气的层数),琴里受伤后,直到下个琴里的回合开始前,琴里不会受到任何伤害<br>★11~15层:<br>琴里可以在合适的时机,视为使用或打出牌堆中的任意一张牌,每回合限X次(X=怒气的层数),且琴里受到伤害后会重置当前回合使用次数<br>★16层及以上:<br>琴里受到伤害前(即便伤害值可能为0),立即执行一个额外的出牌阶段',
                        whql_ksfy_skill_old: '快速反应·技能',
                        whql_ksfy_skill_old_info: '',
                        whql_ksfy_skill2: '快速反应',
                        whql_ksfy_skill2_info: '',
                        whql_jl: '<span class="firetext">灼烂歼鬼</span>',
                        whql_jl_info: '获得此技能时清空武器区,琴里不是武器牌的合法目标,装备武器时弃置之<br>★琴里拥有20%的基础暴击率,200%的基础暴击伤害<br>★琴里每有一层<怒气>,暴击率提升10%,每有一层<狂暴>,暴击伤害提高100%<br>★当琴里的暴击率溢出100%时,将以溢出部分的暴击率再次进行暴击判定,循环判定直到暴击率无溢出<br>★琴里可以将X张红色的牌当做一张【杀】使用或打出,以此法打出的【杀】的基础伤害为X,琴里可以在使用【杀】或【决斗】指定目标后选择一项(若指定了多个目标只对首个目标生效):<br>★断魂:改为火属性伤害并清除目标所有常驻技能<br>★连击:对目标造成一次同等伤害基数的神圣伤害<br>★琴里使用的【杀】或【决斗】的伤害使其他角色进入濒死状态或体力≤0时,可以发动:<br>★将目标移出游戏<br>★将目标以友好阵营满状态复活<br><span class="firetext">根据怒气的层数,琴里获得以下额外效果(依次叠加):</span><br>★1～5层:<br>★出【杀】次数额外增加怒气的层数(＞5层时无出杀次数限制)<br>★【杀】的回闪量额外增加怒气的层数(＞5层时不可闪避),虚拟【闪】或转化【闪】无法抵消琴里的【杀】<br>★使用【杀】指定目标时,可额外选择1～X个目标(X为怒气层数,X＞5时可选取目标的数量上限改为∞)<br>★6～10层:<br>★使用【杀】指定目标时,目标废除所有装备区,体力变成一半(向下取整)<br>★用【杀】对琴里以外的角色造成伤害时,为目标添加一层＂噬身焚魂＂<br>★11～15层:<br>★使用【杀】对其他角色造成伤害前,若目标体力上限＞5,调整至5<br>★使用【杀】指定目标时,清除目标所有非常驻技能和【噬身焚魂】以外的所有标记,销毁目标所有牌<br>★16层及以上:<br>★若琴里在之前的回合内击杀了共X个目标,琴里于该回合结束后连续执行X个额外回合',
                    },
                    skill: {
                        琴里阶段: {
                            markimage: 'extension/五河琴里/image/琴里本尊.png',
                            intro: {
                                name: '<span class="firetext">琴里本尊</span>',
                                content: '当前#阶段',
                            },
                        },
                        神威领域3: {
                            popup: false,
                            _priority: 202306062150,
                            init(player) {
                                player.whqlShunfajiInit('神威领域3');
                            },
                            clickable(player) {
                                player.storage.琴里阶段 += 1;
                                player.phase('nodelay'); //瞬发技直接获得回合即可
                                player.addMark('琴里怒气', Math.min(25 - player.countMark('琴里怒气'), 5)); //增加5层怒气,不超过25层
                                if (player.countMark('琴里阶段') == 2) {
                                    game.mp411('琴里精灵化');
                                    player.maxHp = player.countMark('琴里怒气');
                                    player.hp = player.maxHp;
                                    player.update();
                                    var name_jlql = '<span style="color: #FF0000">五河琴里</span>'; //在十周年UI下不会变色,而会变成输出<span style=\"color: #f0d000\">神威领域</span>,以后再解决
                                    player.node.name.innerHTML = '五河琴里'; //名字显示为五河琴里
                                    player.name = 'whql_jlql';
                                    player.name1 = 'whql_jlql';
                                    player.name2 = 'whql_jlql';
                                    lib.translate[player.name] = name_jlql;
                                    player.setAvatar(player.name, 'whql_jlql');
                                    game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/五河琴里/image/whql_jlql.png');
                                }
                                if (player.countMark('琴里阶段') == 3) {
                                    if (player.storage.whql_sfj == 1) {
                                        var n = [1, 2, 3, 4].randomGet();
                                        if (n == 1) {
                                            game.playAudio('../extension/五河琴里/audio/只有这几个敌人吗(efreet出场).mp3');
                                            player.say('只有这几个敌人吗?');
                                        }
                                        if (n == 2) {
                                            game.playAudio('../extension/五河琴里/audio/我受够了躲起来的生活,这个世界应该知晓我的存在(efreet出场).mp3');
                                            player.say('我受够了躲起来的生活,这个世界应该知晓我的存在');
                                        }
                                        if (n == 3) {
                                            game.playAudio('../extension/五河琴里/audio/难道你以为你赢了？(efreet出场).mp3');
                                            player.say('难道你以为你赢了？');
                                        }
                                        if (n == 4) {
                                            game.playAudio('../extension/五河琴里/audio/来~让我们找点乐子吧(_琴里暴击).mp3');
                                            player.say('来~让我们找点乐子吧!');
                                        }
                                    }
                                    if (player.storage.whql_sfj == undefined) {
                                        player.storage.whql_sfj = 1;
                                        game.mp411('空中-掉护甲或失控');
                                    }
                                    game.神威领域 = true;
                                    player.node.name.innerHTML = ''; //置空名字显示
                                    player.name = 'whql_Efreet';
                                    player.name1 = 'whql_Efreet';
                                    player.name2 = 'whql_Efreet';
                                    var name_efreet = '<span style="color: #f0d000">Efreet</span>'; //在十周年UI下不会变色,而会变成输出<span style=\"color: #f0d000\">神威领域</span>,以后再解决
                                    lib.translate[player.name] = name_efreet;
                                    player.setAvatar(player.name, 'whql_Efreet');
                                    game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/五河琴里/image/Efreet.png'); //player.classList.add('linked');
                                }
                                if (player.countMark('琴里阶段') == 4) {
                                    game.神威领域 = false; //QQQ
                                    player.storage.琴里阶段 -= 2;
                                    var name_jlql = '<span style="color: #FF0000">五河琴里</span>'; //在十周年UI下不会变色,而会变成输出<span style=\"color: #f0d000\">神威领域</span>,以后再解决
                                    player.node.name.innerHTML = '五河琴里'; //名字显示为五河琴里
                                    player.name = 'whql_jlql';
                                    player.name1 = 'whql_jlql';
                                    player.name2 = 'whql_jlql';
                                    lib.translate[player.name] = name_jlql;
                                    player.setAvatar(player.name, 'whql_jlql');
                                    game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/五河琴里/image/whql_jlql.png');
                                    var n = [1, 2, 3].randomGet();
                                    if (n == 1) {
                                        game.playAudio('../extension/五河琴里/audio/跪下吧,爱的惩罚开始了呦~(瞬发技变为琴里).mp3');
                                        player.say('跪下吧,爱的惩罚开始了呦~');
                                    }
                                    if (n == 2) {
                                        game.playAudio('../extension/五河琴里/audio/你稍微有些做过头了呢(瞬发技变为琴里).mp3');
                                        player.say('你稍微有些做过头了呢……');
                                    }
                                    if (n == 3) {
                                        game.playAudio('../extension/五河琴里/audio/现在是惩罚时间!(瞬发技变为琴里).mp3');
                                        player.say('现在是惩罚时间!');
                                    }
                                }
                            },
                            clickableFilter(player) {
                                return player.hasMark('琴里阶段');
                            },
                            filter(event, player) {
                                //if (!player.countCards('h')) return false;
                                // if (player.countCards('h', {type: 'jiqi'})) return false;
                                return true;
                            },
                            discard: false,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                },
                                targetEnabled(card, player, target, now) {
                                    if (target.countCards('h') <= target.maxHp) {
                                        if (card.name == 'shunshou' || card.name == 'guohe') return false;
                                    } else if (target.countCards('h') >= target.hp) {
                                        if (card.name == 'lebu') return false;
                                    }
                                },
                            },
                            ai: {
                                order: 4,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        琴里怒气: {
                            marktext: '<span class="firetext">怒</span>',
                            intro: {
                                name: '<span class="firetext">怒气</span>',
                                content: '已有#层怒气',
                            },
                        },
                        狂暴: {
                            markimage: 'extension/五河琴里/image/狂暴标记.png',
                            intro: {
                                name: '<span class="firetext">灼烂歼鬼·狂暴</span>',
                                content: '当前有#枚狂暴',
                            },
                        },
                        噬身焚魂: {
                            markimage: 'extension/五河琴里/image/噬身焚魂标记.png',
                            intro: {
                                name: '<span class="firetext">噬身焚魂</span>',
                                content: '已是第#层噬身焚魂<br>根据噬身焚魂的层数,你得到以下叠加效果:<br>一层:你不能使用或打出牌,体力和体力上限增加的效果对你无效,你的护甲值始终为0.<br>二层:你获得牌前,取消之,你不能拥有牌.<br>三层:清空所有技能和噬身焚魂以外的所有标记,你不能装备装备牌,你失去所有武将信息.<br>四层:你跳过所有回合和所有出牌阶段,并进入混乱状态.<br>五层及以上:你立即死亡,视为进入已死状态.',
                            },
                        },
                        HP: {
                            marktext: '♥️️',
                            intro: {
                                name: '<span class="firetext">最大体力</span>',
                            },
                        },
                        MAXHP: {
                            marktext: '黄心',
                            intro: {
                                name: '<span class="firetext">最大体力上限</span>',
                            },
                        },
                        罪业: {
                            marktext: '<span class="firetext">罪</span>',
                            intro: {
                                name: '<span class="firetext">罪业</span>',
                                content: '被琴里暴击时,暴击伤害+#00%;<br>受伤后,每秒流失一点体力,持续#秒',
                            },
                        },
                        whql_lxdjs: {
                            intro: {
                                name: '倒计时',
                                content: '剩余<span class="firetext">#</span>秒',
                            },
                            marktext: '<span class="firetext">☠</span>',
                        },
                        火灵守护: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            marktext: '🔥',
                            intro: {
                                name: '<span class="firetext">火灵守护</span>',
                                content: '当前闪避率:#0%',
                            },
                            _priority: 2,
                            content() {
                                if (!player.countMark('火灵守护')) {
                                    trigger.cancel();
                                    player.addMark('火灵守护', 1);
                                    event.finish();
                                } else {
                                    var num = player.countMark('火灵守护');
                                    if (Math.random() < 0.1 * num) {
                                        //闪避成功去掉一个标记
                                        trigger.cancel();
                                        player.removeMark('火灵守护', 1);
                                        game.log('<span class=\"firetext\">火灵守护成功</span>');
                                    } else {
                                        //受伤获得n个标记
                                        player.addMark('火灵守护', trigger.num);
                                        if (trigger.source && trigger.source.countMark('琴里阶段') == 0) trigger.source.addMark('罪业', trigger.num);
                                        //如果伤害有来源且不是琴里本尊,伤害来源获得n个[罪业]标记
                                    }
                                }
                            },
                            ai: {
                                filterDamage: true,
                                skillTagFilter(player, tag, arg) {
                                    if (player.countMark('qlsbcs')) return false;
                                    if (arg && arg.player) {
                                        if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
                                    }
                                },
                            },
                            group: 'qlsbcs_deputy',
                            subSkill: {
                                deputy: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    filter(event, player) {
                                        return player.hasMark('qlsbcs') && !event.numFixed;
                                    },
                                    prompt2: '一名角色回合开始前,你可以令其获得技能【血债血偿】直到回合结束后,你弃置1枚<珠>',
                                    logTarget: 'player',
                                    content() {
                                        'step 0';
                                        var num1 = player.countMark('qlsbcs');
                                        //trigger.num+=num*3;
                                        event.player.addMark('whql_xzxcbj');
                                        event.player.addTempSkill('whql_xzxc', 'phaseAfter');
                                        ('step 1');
                                        player.removeMark('qlsbcs', 1);
                                    },
                                },
                            },
                        },
                        jncs_xiwu: {
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            content() {
                                var chat = ['MYjituo1', 'MYjituo2'].randomGet();
                                game.playAudio('../extension/秦时明月', chat);
                                var background = ui.create.div('.ceshi-background', document.body);
                                background.style.cssText = 'display: block;width: 100%;height: 100%;position: absolute;top:0;left: 0;background:rgba(0,0,0,0.6);z-index:100;';
                                var shijian = ui.create.div('.shijian');
                                shijian.innerText = -2;
                                shijian.style.cssText = 'position: absolute;top: 0;left: 0;font-size:80px;';
                                background.appendChild(shijian);
                                var wujiang = ui.create.div('.wujiang');
                                wujiang.innerText = '';
                                wujiang.style.cssText = 'position: absolute;top: 0;right: 0;width:400px;font-size:15px;';
                                background.appendChild(wujiang);
                                var node = this;
                                window.juziyandan = [];
                                var getList = function () {
                                    var list = Object.keys(lib.characterPack.秦时明月);
                                    list.randomSort();
                                    var list2 = [];
                                    for (var i = 0; i < list.length; i++) {
                                        list2 = list2.concat(list[i]);
                                    }
                                    node.list = list2;
                                };
                                var func = function () {
                                    if (shijian.innerText < 5) {
                                        shijian.innerText++;
                                    } else {
                                        clearInterval(node.showcaseinterval);
                                        background.remove();
                                    }
                                    if (!node.list.length) {
                                        getList();
                                    }
                                    var card = ui.create.player(null, true);
                                    card.init(node.list.shift());
                                    card.node.marks.remove();
                                    card.node.count.remove();
                                    card.node.hp.remove();
                                    node.nodes.push(card);
                                    card.style.position = 'absolute';
                                    var rand1 = Math.round(Math.random() * 100);
                                    var rand2 = Math.round(Math.random() * 100);
                                    var rand3 = Math.round(Math.random() * 40) - 20;
                                    card.style.left = 'calc(' + rand1 + '% - ' + rand1 * 1.5 + 'px)';
                                    card.style.top = 'calc(' + rand2 + '% - ' + rand2 * 1.8 + 'px)';
                                    card.style.transform = 'scale(1.2) rotate(' + rand3 + 'deg)';
                                    card.style.opacity = 0;
                                    ui.refresh(card);
                                    card.onclick = function () {
                                        wujiang.innerText += get.translation(this) + '————';
                                        var skills = lib.character[this.name][3];
                                        for (var j = 0; j < skills.length; j++) {
                                            if (!lib.skill[skills[j]].forceunique) {
                                                player.addSkill(skills[j]);
                                                window.juziyandan.push(skills[j]);
                                            }
                                        }
                                    };
                                    background.appendChild(card);
                                    ui.refresh(card);
                                    card.style.transform = 'scale(0.9) rotate(' + rand3 + 'deg)';
                                    card.style.opacity = 1;
                                    if (node.nodes.length > 4) {
                                        setTimeout(function () {
                                            while (node.nodes.length > 3) {
                                                node.nodes.shift().delete();
                                            }
                                        }, 500);
                                    }
                                };
                                node.list = [];
                                node.nodes = [];
                                for (var i = 0; i < 3; i++) {
                                    func();
                                }
                                node.showcaseinterval = setInterval(func, 1000);
                                background.appendChild(shijian);
                            },
                        },
                        jncs_dhk: {
                            group: 'jncs_dhk_use',
                            audio: 'ext:阳光包/audio:2',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                /* 创建dialog */
                                var dialog = ui.create.dialog(false);
                                /* dialog标题 */
                                dialog.add('请输入至多五个字符');
                                /* dialog.add方法只接受div,而不是input */
                                var div = document.createElement('div');
                                /* 创建input并添加到div里 */
                                var input = div.appendChild(document.createElement('input'));
                                /* 输入最多5个字符 */
                                input.setAttribute('maxlength', '5');
                                /* input内按键不继续冒泡*/
                                input.addEventListener('keydown', (e) => {
                                    e.stopPropagation();
                                });
                                input.addEventListener('keyup', (e) => {
                                    e.stopPropagation();
                                });
                                /* 输入前的提示 */
                                input.placeholder = '请输入武将名';
                                /* dialog添加div */
                                dialog.add(div);
                                /* 把dialog,input加入event,让下一步骤的技能可调用dialog */
                                event.dialog = dialog;
                                event.input = input;
                                ('step 1');
                                /* 获取上一步骤的dialog */
                                var dialog = event.dialog;
                                var input = event.input;
                                var clickFun = () => {
                                    /* 移除dialog */
                                    dialog.remove();
                                    /* value是输入框里的值 */
                                    var value = input.value;
                                    /* 保存到player.storage中 */
                                    player.storage.jncs_dhk = [...value].map((item, index) => value.charCodeAt(index));
                                    /* 判断隐藏效果 */
                                    switch (input.value) {
                                        case [39532, 24517, 23453].map((item) => String.fromCharCode(item)).reduce((accumulator, item) => accumulator + item):
                                            player.addSkill('qiaosi');
                                            player.addSkill('xinfu_jingxie1');
                                            break;
                                        case [23453, 24517, 26114].map((item) => String.fromCharCode(item)).reduce((accumulator, item) => accumulator + item):
                                            player.addSkill('kaikang');
                                            break;
                                        case [40657, 30333, 26080, 24120].map((item) => String.fromCharCode(item)).reduce((accumulator, item) => accumulator + item):
                                            player.addSkill('drlt_jieying');
                                            player.addSkill('drlt_poxi');
                                            break;
                                        case [20108, 39740, 25293, 38376].map((item) => String.fromCharCode(item)).reduce((accumulator, item) => accumulator + item):
                                            player.addSkill('reshuishi');
                                            player.addSkill('stianyi');
                                            player.addSkill('resghuishi');
                                            break;
                                        case [25805, 20316, 22411, 27494, 23558].map((item) => String.fromCharCode(item)).reduce((accumulator, item) => accumulator + item):
                                            player.addSkill('nzry_chenglve');
                                            player.addSkill('nzry_shicai');
                                            player.addSkill('nzry_cunmu');
                                            break;
                                        case [29359, 22823, 21556, 30086, 22303, 1].map((item) => String.fromCharCode(item)).reduce((accumulator, item) => accumulator + item):
                                            player.addSkill('spwuku');
                                            player.addSkill('spsanchen');
                                            break;
                                        case [38393, 22815, 20102, 27809, 26377].map((item) => String.fromCharCode(item)).reduce((accumulator, item) => accumulator + item):
                                            var name = ['guding', 'jiu', 'sha', 'tiesuo'];
                                            for (var cardName of name) {
                                                var card = get.cardPile((card) => {
                                                    if (cardName != 'sha') return card.name == cardName;
                                                    return card.name == cardName && card.nature == 'fire';
                                                }, 'field');
                                                if (card) {
                                                    player.gain(card, 'gain2', 'log');
                                                }
                                            }
                                            break;
                                    }
                                    /* 继续游戏 */
                                    game.resume();
                                };
                                /* 如果是ai */
                                if (!event.isMine()) {
                                    /* 给予ai透视 */
                                    var list = game.players.filter((item) => item.isEnemiesOf(player) && item != player).map((item) => (lib.translate[item.name] || '').replace(/[神,界,OL,手杀,sp]/g, ''));
                                    var str = list.reduce((accumulator, item) => {
                                        for (var i = 0; i < item.length; i++) {
                                            if (!accumulator.includes(item[i])) return accumulator + item[i];
                                        }
                                    }, '');
                                    /* 输入框赋值 */
                                    input.value = str.slice(0, 5);
                                    /* 执行Fun*/
                                    clickFun();
                                } else {
                                    /* 显示dialog */
                                    dialog.open();
                                    /* 暂停游戏 */
                                    game.pause();
                                    /* 输入结束后点击确定 */
                                    var button = ui.create.control('确定', () => {
                                        if (!input.value) {
                                            return alert('输入不能为空');
                                        }
                                        /*移除button */
                                        button.remove();
                                        clickFun();
                                    });
                                }
                            },
                            subSkill: {
                                use: {
                                    enable: 'phaseUse',
                                    filter(event, player, name) {
                                        var disCardNum = Math.ceil(player.storage.jncs_dhk.length / 2);
                                        return Array.isArray(player.storage.jncs_dhk) && player.countCards('he') >= disCardNum;
                                    },
                                    audio: 'jncs_dhk',
                                    content() {
                                        'step 0';
                                        var disCardNum = Math.ceil(player.storage.jncs_dhk.length / 2);
                                        player.chooseToDiscard(disCardNum);
                                        ('step 1');
                                        if (result.bool) {
                                            var strList = player.storage.jncs_dhk.map((item) => String.fromCharCode(item)).reduce((accumulator, item) => accumulator + item);
                                            game.countPlayer(function (current) {
                                                if (current == player) return;
                                                var name = lib.translate[current.name] || '';
                                                var name1 = lib.translate[current.name1] || '';
                                                var name2 = lib.translate[current.name2] || '';
                                                /* 数组去重 */
                                                var nameList = Array.from(new Set([...name, ...name1, ...name2]));
                                                if (
                                                    nameList.some((item) => {
                                                        return strList.includes(item);
                                                    })
                                                ) {
                                                    current.loseHp();
                                                    current.addTempSkill('baiban');
                                                }
                                            });
                                        }
                                    },
                                },
                            },
                        },
                        jncs_sfj: {
                            init(player) {
                                player.TLAoShunfajiInit('jncs_sfj');
                            },
                            forced: true,
                            clickable(player) {
                                player.useSkill('jncs_dhk');
                            },
                            clickableFilter(player) {
                                return player.countMark('琴里阶段') > 1;
                            },
                            content() {
                                'step 0';
                                var dialog = ui.create.TLAoCharacterDialog();
                                var next = player.chooseButton();
                                next.set('dialog', dialog);
                                next.set('filterButton', function (button) {
                                    if (lib.filter.characterDisabled2(button.link) || lib.filter.characterDisabled(button.link)) return false;
                                    var list = [];
                                    game.countPlayer(function (current) {
                                        if (current.name) list.add(current.name);
                                        if (current.name1) list.add(current.name1);
                                        if (current.name2) list.add(current.name2);
                                    });
                                    if (button.link == 'JX_zuoci') return false;
                                    if (player.storage.DIY_huashen && button.link == player.storage.DIY_huashen) return false;
                                    return !list.includes(button.link);
                                });
                                next.set('ai', function (button) {
                                    if (lib.rank.rarity.legend.includes(button.link)) return 2 * Math.random();
                                    if (lib.rank.rarity.epic.includes(button.link)) return Math.random();
                                    if (lib.rank.rarity.rare.includes(button.link)) return -Math.random();
                                    if (lib.rank.rarity.junk.includes(button.link)) return -2 * Math.random();
                                    return Math.random();
                                });
                                ('step 1');
                                game.broadcastAll('closeDialog', event.videoId);
                                if (result.bool && result.links && result.links.length) {
                                    var name = result.links[0];
                                    if (name && lib.character[name]) {
                                        var skills = lib.character[name][3];
                                        game.broadcastAll(
                                            function (name, player) {
                                                player.sex = lib.character[name][0];
                                                player.group = lib.character[name][1];
                                                player.node.name.dataset.nature = get.groupnature(player.group);
                                            },
                                            name,
                                            player
                                        );
                                        player.storage.DIY_huashen = name;
                                        player.addAdditionalSkill('DIY_huanhua', skills);
                                        for (var i = 0; i < skills.length; i++) {
                                            player.popup(skills[i]);
                                            game.log(player, '获得技能', '#g【' + get.translation(skills[i]) + '】');
                                        }
                                        player.flashAvatar('DIY_huanhua', name);
                                        game.playAudio('../extension/天牢令/image/audio/JX_zuoci_huanhua.mp3');
                                    }
                                }
                            },
                            group: 'DIY_huanhua_init',
                            subSkill: {
                                init: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: ['enterGame', 'showCharacterAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (get.mode() == 'guozhan') return event.name == 'showCharacter' && event.toShow;
                                        return event.name != 'showCharacter' && (event.name != 'phase' || game.phaseNumber == 0);
                                    },
                                    content() {
                                        player.useSkill('DIY_huanhua');
                                    },
                                },
                            },
                        },
                        jncs_sfj2: {
                            audio: 'ext:时空枢纽/audio/skill/character:2',
                            ai: {
                                expose: 0.1,
                            },
                            group: ['sksn_wenfeng_ai', 'sksn_wenfeng_sound'],
                            subSkill: {
                                on: {
                                    audio: 'sksn_wenfeng',
                                    _priority: 76,
                                    forced: true,
                                    trigger: {
                                        target: ['useCardToTarget'],
                                    },
                                    content() {
                                        'step 0';
                                        game.log(trigger.player, '使用的', trigger.card, '对', player, '无效');
                                        trigger.excluded.add(player);
                                    },
                                },
                                off: {
                                    charlotte: true,
                                },
                                ai: {
                                    trigger: {
                                        player: 'sksn_wenfeng_soundAfter',
                                    },
                                    filter(event, player) {
                                        return _status.auto && !player.hasSkill('sksn_wenfeng_off');
                                    },
                                    _priority: 76,
                                    popup: false,
                                    check(event, player) {
                                        return true;
                                    },
                                    content() {
                                        lib.skill.sksn_wenfeng.clickable(player);
                                    },
                                },
                                sound: {
                                    trigger: {
                                        global: 'useCardBefore',
                                    },
                                    filter(event, player) {
                                        return event.targets && event.targets.includes(player) && !player.hasSkill('sksn_wenfeng_off') && get.effect(player, event.card, event.player, player) < 0;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 76,
                                    content() {
                                        'step 0';
                                        if (event.isMine()) {
                                            //var name=['1','2'].randomGet();
                                            game.playAudio('../extension/时空枢纽/sksn_wenfeng_sound.mp3');
                                            var str = ['有危险!', '你被人盯上了'].randomGet();
                                            str = '【闻风】:' + str;
                                            event.dialog = ui.create.dialog(str);
                                            player.popup('!', 'fire');
                                        }
                                        ('step 1');
                                        if (event.dialog) event.dialog.close();
                                    },
                                },
                            },
                        },
                        whql_jl: {
                            forced: true,
                            fixed: true,
                            _priority: 202310162228,
                            mod: {
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                                aiOrder(player, card, num) {
                                    var name = card.name;
                                    if (name == 'tao') return num + 7 + Math.pow(player.getDamagedHp(), 2);
                                    if (name == 'sha') return num + 6;
                                },
                            },
                            trigger: {
                                player: 'loseAfter',
                            },
                            filter(event, player) {
                                return player.countCards('h') < player.maxHp;
                            },
                            content() {
                                player.draw(player.maxHp - player.countCards('h'));
                            },
                        },
                        whql_ksfy_skill: {
                            usable: 1,
                            trigger: {
                                global: ['logSkillBegin'],
                            },
                            popup: false,
                            filter(event, player) {
                                return event.player != player;
                            },
                            check: (event, player) => event.player.isEnemiesOf(player),
                            prompt(event, player) {
                                return `终止${get.translation(event.skill)}的发动`;
                            },
                            async content(event, trigger, player) {
                                const name = trigger.skill;
                                const info = lib.skill[name];
                                const arr = trigger.parent.next;
                                for (let i = arr.length - 1; i >= 0; i--) {
                                    if (arr[i].name === name) {
                                        arr.splice(i, 1);
                                    }
                                }
                                game.log(player, `终止${get.translation(name)}的发动`);
                                if (info.limited || info.juexingji) {
                                    trigger.player.awakenSkill(name);
                                }
                            },
                        },
                        _神威领域1: {
                            trigger: {
                                player: 'useSkillBefore',
                            },
                            _priority: 76945,
                            forced: true,
                            filter(trigger, player) {
                                return !trigger.player.hasMark('琴里阶段') && game.神威领域;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                //trigger.player.chooseToDiscard('h',true,game.roundNumber);//选择弃牌
                                trigger.player.damage(game.roundNumber)._triggered = null; //受到当前游戏轮数的神圣伤害
                                //跳过当前角色出牌阶段
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse') {
                                    evt.skipped = true;
                                }
                                //当前角色回合结束
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name == 'phase') {
                                    evt.finish();
                                }
                                var zi = '<span class=\"yellowtext\">神威领域</span>开启中,技能<span class=\"firetext\">【' + get.translation(trigger.name) + '】</span>的发动无效.';
                                game.log(zi);
                                game.countPlayer(function (current) {
                                    if (current.hasMark('琴里阶段')) {
                                        var n = [1, 2, 3].randomGet();
                                        if (n == 1) {
                                            current.say('刚才不是挺威风的吗？');
                                        }
                                        if (n == 2) {
                                            current.say('多尝试几次,说不定会成功哦~');
                                        }
                                        if (n == 3) {
                                            current.say('不能发动技能的感觉如何？');
                                        }
                                    }
                                });
                            },
                        },
                        神威领域2: {
                            hookTrigger: {
                                block(event, player, name, skill) {
                                    //if (skill.indexOf('_') == 0) return false;
                                    //if (!lib.translate[skill] || lib.translate[skill].length == 0) {
                                    //    return false;
                                    //}
                                    // if(!lib.skill[skill].sub){
                                    // if (!lib.translate[skill + '_info'] || lib.translate[skill + '_info'].length == 0) {
                                    // return false;
                                    // }
                                    // }
                                    game.removeGlobalSkill('神威领域2_trigger');
                                    var global = lib.skill.神威领域2_trigger.trigger.global;
                                    if (skill != 'jiu' && skill != 'icesha_skill' && skill != 'fangtian_skill' && skill != 'cixiong_skill' && skill != 'bagua_skill' && skill != 'zhuge_skill' && skill != 'renwang_skill' && skill != 'qinggang_skill' && skill != 'qinglong_guozhan' && skill != '神威领域2' && skill != '_神威领域1' && skill != '神威领域2_trigger' && skill != '_琴里暴击') {
                                        global.add(skill + 'Before');
                                    }
                                    game.addGlobalSkill('神威领域2_trigger');
                                    return false;
                                },
                            },
                            inits(player) {
                                if (!player._hookTrigger) {
                                    player._hookTrigger = [];
                                }
                                player._hookTrigger.add('神威领域2');
                            },
                            init() {
                                var global = [];
                                for (var i = 0; i < game.players.length; i++) {
                                    lib.skill.神威领域2.inits(game.players[i]);
                                }
                                if (!lib.element.player.inits) {
                                    lib.element.player.inits = [];
                                }
                                lib.element.player.inits.add(lib.skill.神威领域2.inits);
                            },
                            global: '神威领域2_trigger',
                            subSkill: {
                                trigger: {
                                    trigger: {
                                        global: ['xxxBefore'],
                                    },
                                    popup: false,
                                    forced: true,
                                    filter(trigger, player) {
                                        return !trigger.player.hasMark('琴里阶段') && game.神威领域; //QQQ
                                    },
                                    content() {
                                        var zi = '<span class=\"yellowtext\">神威领域</span>开启中,技能<span class=\"firetext\">【' + get.translation(trigger.name) + '】</span>的发动无效.';
                                        game.log(zi);
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                    },
                };
                lib.config.all.characters.add('五河琴里');
                lib.config.characters.add('五河琴里');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:五河琴里/image/${i}.jpg`);
                }
                lib.translate['五河琴里_character_config'] = `五河琴里`;
                return QQQ;
            });
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
            game.import('card', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '五河琴里',
                    connect: true,
                    card: {
                        whql_mzxg1: {
                            fullimage: true,
                        },
                        whql_mzxg2: {
                            fullimage: true,
                        },
                        whql_mzxg3: {
                            fullimage: true,
                        },
                        whql_le: {
                            fullskin: true,
                        },
                        whql_hmj: {
                            fullskin: true,
                        },
                        whql_zzjz: {
                            fullskin: true,
                        },
                        whql_fbpc: {
                            fullimage: true,
                        },
                        whql_fbpcdw: {
                            fullimage: true,
                        },
                        whql_bbt: {
                            fullimage: true,
                        },
                        whql_bsfb: {
                            fullimage: true,
                        },
                        whql_wei: {
                            fullskin: true,
                        },
                        whql_qiao: {
                            fullimage: true,
                        },
                    },
                    translate: {
                        whql_mzxg1: '猫爪雪糕',
                        whql_mzxg1_info: '琴里牌  出牌阶段,对一名角色使用:<br>回复1点体力,摸2张牌.<br>效果结算后你将此牌收回,使用3次后此牌将变换形态.',
                        whql_mzxg2: '猫爪雪糕',
                        whql_mzxg2_info: '琴里牌 其他角色使用牌指定你为目标时,对其使用:<br>该牌对你无效,效果结算后你获得一张同名牌<br>效果结算后你将此牌收回,使用2次后此牌将变换形态.',
                        whql_mzxg3: '猫爪雪糕',
                        whql_mzxg3_info: '琴里牌 出牌阶段或自己濒死时,对自己使用:<br>解除翻面、连锁、封印、白板,重置限定技,清除判定区,回复2点体力,摸5张牌.(回复溢出时将转换为体力上限).<br>效果结算后此牌将被销毁.',
                        whql_le: '乐',
                        whql_le_info: '出牌阶段,对所有人使用:<br>你摸2张牌,●效果持续到下个你的回合开始前.<br>●伤害事件发生时,受伤角色去除一个<乐>(没有则不去),其他角色获得一枚<乐>.< br >★乐极生悲: 下个你的回合开始时, 场上<乐>最多的角色随机弃置等同于<乐>数的牌, 其他角色摸等同于<乐>数的牌,效果结算完毕后清除所有<乐>.',
                        whql_hmj: '幻梦境',
                        whql_hmj_info: '★从牌库中选一张牌加入手牌.<br>★地图效果:当你使用或打出一张点数为5的牌后,将一张『幻梦境』以外的【琴里】牌加入手牌.',
                        whql_zzjz: '最终决战',
                        whql_zzjz_info: '出牌阶段,对所有角色使用:<br>同阵营角色先明置身份,各摸5张牌,最后按座次依次执行一个额外的回合,在该额外回合结束时,须弃置所有牌并翻面.<br>●效果持续到你下家的回合开始时.<br>●同阵营角色使用牌没有次数和距离限制,手牌<5时摸至5张.',
                        whql_fbpc: '粉白胖次',
                        whql_fbpc_info: '装备:宝物 可重铸 必可赠予 ★仅女性角色可装备 ①你的手牌『少/多』于5张时,『摸/弃』至5;<br>②一名角色的回合结束时,你回复一点体力,拥有此宝物时你不会死亡,且如果你的体力≤0,你不是其他角色使用卡牌或技能的合法目标;<br>③男性角色使用<目标仅包含你>的卡牌对你造成伤害前,其流失一点体力,伤害值变成与你当前的体力值相同,伤害结算后此牌销毁,伤害来源获得被玷污的『粉白胖次』;  琴里默认装备粉白胖次,且琴里的粉白胖次(胖次代码里写,如果玩家是琴里则)不会被获得或弃置,且胖次③技能不会触发.琴里二三阶段时,胖次的①技能失效,免得和神威灵装冲突  【仙姿佚貌】 ①琴里(2血)的体力上限不会低于2,琴里使用牌没有次数限制.(手牌锁定为5,效果在默认装备的粉白胖次上,二三阶段适用灵装的效果)  刷新函数每1秒刷新:若琴里的宝物为空则装备粉白胖次(若琴里装备粉白胖次,则胖次不占用宝物栏(可以同时装备胖次和另一个宝物))',
                        whql_fbpcdw: '粉白胖次',
                        whql_fbpcdw_info: '★仅男性角色可使用 可重铸 必可赠予 出牌阶段或濒死阶段,对自己使用:回复至满体力,摸5张牌.',
                        whql_bbt: '棒棒糖',
                        whql_bbt_info: '★该牌存在于手牌中时,回合结束时你回复一点体力,该效果发动5次后销毁此牌.',
                        whql_bsfb: '冰霜风暴',
                        whql_bsfb_info: '出牌阶段,对所有其他角色使用:<br>打出一张『酒』或火『杀』,否则其受到你为来源的一点冰属性伤害(或你弃之两张牌)',
                        whql_wei: '危',
                        whql_wei_info: '延时锦囊牌,不轮转;出牌阶段,对其他角色使用:<br>若判定结果不为【闪】,直到你的下个回合开始前,你受到的伤害翻倍.',
                        whql_qiao: '敲',
                        whql_qiao_info: '★出牌阶段,对自己使用:<br>你明视并弃置场上任意其他目标共X张牌(X=当前游戏轮数,且不超过5).<br>★重铸:获得一张『棒棒糖』.',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:五河琴里/image/${i}.png`;
                        }
                        else {
                            info.image = `ext:五河琴里/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('五河琴里');
                lib.config.cards.add('五河琴里');
                lib.translate.五河琴里_card_config = '五河琴里';
                return QQQ;
            });
        },
        package: {
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '无名玩家',
            version: '1.0',
        },
    };
});

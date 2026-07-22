import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '破剑茶寮',
        content(config, pack) {
            //------------------------------------------------特效支持--------------------------------------------------//
            game.mp414 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/破剑茶寮/mp4/${Q}.mp4`;
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
            /*武将评级*/
            if (lib.rank) {
                lib.rank.rarity.epic.addArray(['深红之渊', '薇拉·绯耀', '天道·超', '黑土', '漩涡面麻', '骨架佐助', '霸王紫龙', '萧台丞', '铠武', '破面带土']);
                lib.rank.rarity.legend.addArray(['比安卡·深痕', '深红囚影']);
            }
            game.playzsp = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/破剑茶寮/audio', fn);
                }
            };
            HTMLDivElement.prototype.zymt = function (bg, pos, time, func) {
                var that = this;
                game.broadcastAll(function (that) {
                    var img = document.createElement('div');
                    img.setBackgroundImage(bg + '?' + Math.random());
                    if (pos && typeof pos == 'object') {
                        for (var i in pos) {
                            img.style[i] = pos[i];
                        }
                    }
                    img.style.backgroundSize = 'cover';
                    that.appendChild(img);
                    setTimeout(function () {
                        if (func) func(img);
                        else img.delete();
                    }, time);
                }, that);
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '破剑茶寮',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    character: {
                        天道·超: ['male', 'shen', 4, ['聚气', '佩恩天道', 'shizaishitaimei'], ['des:你说得对,但是<火影忍者>手游是一款由魔方.....']],
                        漩涡面麻: ['male', 'shen', '4/9', ['九面苏婆诃', '血继', '螺旋轮虞'], ['des:黑化版鸣人,有手就行']],
                        破面带土: ['male', 'shen', 4, ['神威', '遁术', '天变地异'], ['des:神威难藏泪,入目皆是琳']],
                        小南: ['female', 'key', 4, ['shizhizhiwu', 'shizhi2', 'shizhi3', '天使之舞', 'nibeipianle'], ['des:白虎,本人火影里最喜欢的女角色,']],
                        黑土: ['female', 'shen', 4, ['重岩', '熔遁·灰封石之术', 'shizaishitaimei'], ['des:腿影,合理使用锦囊和装备将会影响战局']],
                        骨架佐助: ['male', 'key', 4, ['加具土命', 'gujia', '炎遁·须佐能乎加具土命'], ['des:骨架狗']],
                        天天: ['female', 'key', 4, ['renjudashi', '操具', '操具·极大铁球', 'nibeipianle'], ['des:疾风传忍具大师']],
                        仙人鸣人: ['male', 'shu', 4, ['影分身', 'xianshu', '仙术·螺旋手里剑', 'shizaishitaimei', 'nibeipianle'], ['des:仙鸣']],
                        博弈哥: ['male', 'jin', 4, ['月读', '须佐·鼬', '双须佐能乎降临'], ['des:喜欢跟我博弈吗']],
                        宗师宁次: ['male', 'wu', 4, ['封穴', '咏春', '一代宗师'], ['des:咏春·宁次']],
                        神威卡卡西: ['male', 'key', 4, ['拷贝', '神威·攻', '神威雷切'], ['des:卡卡西']],
                        比安卡·深痕: ['female', 'shen', 4, ['登场·比安卡', '三烛杖剑', '垂灯耀目', '剑痕刻渊'], ['des:魔女']],
                        罗塞塔: ['female', 'wei', 4, ['登场·罗塞塔', '冈格尼尔', '涤罪之枪'], ['des:高达']],
                        深红之渊: ['female', 'shu', 4, ['赤渊', '红刃', '渊裂', '登场·阿尔法'], ['des:阿尔法']],
                        薇拉·绯耀: ['female', 'shu', 4, ['绯连枪', '贯闪', '枪舞'], ['des:我所在的地方,即是战场']],
                        霸王紫龙: ['none', 'key', 4, ['霸道之力'], ['des:']],
                        黑崎一护: ['male', 'shu', 6, ['月牙', '卍解·天锁斩月'], ['des:一叽咕']],
                        碎蜂: ['female', 'wei', 3, ['瞬閧', '二击必杀', '雀蜂雷公鞭'], ['des:我老婆']],
                        卍解一护: ['male', 'wei', 4, ['月牙天冲', '天锁'], ['des:一叽咕']],
                        白一护: ['male', 'shen', 4, ['癫狂', '黑月牙'], ['des:白爷']],
                        露琪亚: ['female', 'wei', 3, ['cxliushi'], ['des:露露']],
                        深红囚影: ['female', 'key', 4, ['无我荒途', 'rensui', 'mly_qiuying'], ['des:V哥新女儿,技能代码为Mlynar大佬编写,感激不尽🤣🤣🤣<P><b>技能解析:<br><br><font color=#00FFFF>深红囚影</font>是具备多刀、AOE、过牌、防反、爆发能力的角色,【无我荒途】可以无效对你有威胁的伤害牌,二效果可以让你进行小<制衡>,同时积攒<无光值>为【万军取首】埋下伏笔,【刃碎纷缭】确保了你不会断【杀】和【闪】,积攒>无光值>为【万军取首】埋下伏笔.【囚影】,转换技,具有定点爆破和AOE能力,在能量足够的情况下甚至可以一回合带走七个人,衍生技【不灭殛华】,通过【囚影】转换获得,通过消耗前面积攒的无光值可以为你的杀增加伤害,让你体验【万军取首】的快感.<br><br>操作手法<br>回合内发动【无我荒途】来过牌,打出第一刀,随后发动【刃碎纷缭】获得剑气,打出第二刀,留下手中的【杀】确保回合外防御,尽量使用AOE卡牌积攒能量,通过【囚影】一口气收割全场']],
                        铠武: ['male', 'key', 5, ['zymchengkai', 'qiangren', 'nibeipianle'], ['des:比最终还帅的过渡']],
                        shouwangjing: ['male', 'key', 4, ['yuanguzhili', 'shouwangzhongqu', 'nibeipianle'], ['des:假面骑士大和']],
                        luosha: ['male', 'shu', 4, ['cidunshajin', 'cidunshajin2', 'cidunsjdz', 'shizaishitaimei'], ['des:四代风影']],
                        sqhuihui: ['female', 'shu', 3, ['huihuihuoyan', 'huihuihongmo', 'huihuibaoliemofa', 'nibeipianle'], ['des:为美好的世界献上祝福']],
                    },
                    characterTitle: {
                    },
                    characterIntro: {
                    },
                    skill: {
                        zym_np: {
                            init(player) {
                                player.storage.zym_np = 0;
                            },
                            trigger: {
                                global: ['gameStart'],
                            },
                            firstDo: true,
                            silent: true,
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                //能量定位
                                'step 0';
                                player.storage.zym_np2 += 1;
                                game.broadcastAll(function (player) {
                                    _status.zym_np = {};
                                    var np = ui.create.div('');
                                    np.style.width = 'calc(5%)';
                                    np.style.height = 'calc(42.5%)';
                                    np.style.left = 'calc(35%)';
                                    np.style.top = 'calc(-25%)';
                                    np.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
                                    np.style['box-shadow'] = 'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
                                    np.style.borderRadius = '9px';
                                    np.style.transform = 'rotate(-90deg)';
                                    player.appendChild(np);
                                    _status.zym_np.np = np;
                                    var np1 = ui.create.div('');
                                    np1.style.width = 'calc(100%)';
                                    setInterval(function () {
                                        var p = player.storage.zym_np;
                                        if (p > 100) p = 100;
                                        np1.style.height = 'calc(' + p + '%)';
                                    }, 500);
                                    np1.style.left = '0px';
                                    np1.style.top = '0px';
                                    np1.style.borderRadius = '8px';
                                    setInterval(function () {
                                        if (player.storage.zym_np < 70) {
                                            np1.setBackgroundImage('extension/破剑茶寮/image/np.jpg');
                                        }
                                        if (player.storage.zym_np > 70 && player.storage.zym_np < 100) {
                                            np1.setBackgroundImage('extension/破剑茶寮/image/np0.jpg');
                                        }
                                        if (player.storage.zym_np >= 100 && player.storage.zym_np < 140) {
                                            np1.setBackgroundImage('extension/破剑茶寮/image/np00.jpg');
                                        }
                                        if (player.storage.zym_np >= 140) {
                                            np1.setBackgroundImage('extension/破剑茶寮/image/np000.jpg');
                                        }
                                    }, 500);
                                    np1.style.backgroundSize = '100% 80px';
                                    np.appendChild(np1);
                                    _status.zym_np.np1 = np1;
                                    var np2 = ui.create.div('');
                                    np2.style.width = 'calc(100%)';
                                    np2.style.height = '8px';
                                    np2.style.left = '0px';
                                    np2.style.top = 'calc(50% - 4px)';
                                    np2.style['white-space'] = 'nowrap';
                                    np2.style['font-size'] = '10px';
                                    np2.style['text-align'] = 'center';
                                    np2.style['font-family'] = "'STXinwei','xinwei'";
                                    np2.style.transform = 'rotate(90deg)';
                                    np2.style.borderRadius = '8px';
                                    np.appendChild(np2);
                                    setInterval(function () {
                                        np2.innerHTML = player.storage.zym_np;
                                    }, 100);
                                    _status.zym_np.np2 = np2;
                                }, player);
                            },
                            popup: false,
                        },
                        聚气: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', '回气', '神の登场'],
                            content() {
                                'step 0';
                                player.chooseControl('摸1张牌且回复1点体力', '额外充能30点,失去1点体力').ai = function (event, player) {
                                    if (player.hp >= 2) return '额外充能30点,失去1点体力';
                                    return '摸1张牌且回复1点体力';
                                };
                                ('step 1');
                                if (result.control == '摸1张牌且回复1点体力') {
                                    player.chat('在我们面前你毫无胜算');
                                    player.draw();
                                    player.recover();
                                }
                                if (result.control == '额外充能30点,失去1点体力') {
                                    player.chat('不理解痛苦的人,就不会理解真正的和平');
                                    player.storage.zym_np += 30;
                                    player.loseHp();
                                }
                            },
                        },
                        超神罗天征: {
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 150;
                            },
                            content() {
                                'step 0';
                                player.storage.zym_np = 0;
                                player.storage.超神罗天征 = true;
                                player.chat('从现在开始,让世界感受痛楚');
                                player.awakenSkill('超神罗天征');
                                ('step 1');
                                game.playzsp(['超神罗天征'].randomGet());
                                game.mp414('超神罗天征');
                                event.list = player.getFriends().sortBySeat();
                                ('step 2');
                                for (var i = 0; i < game.players.length; i++) {
                                    if (player.getEnemies().includes(game.players[i])) {
                                        game.players[i].damage(3);
                                    }
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 2,
                                },
                                threaten: 1,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        神罗天征: {
                            audio: 'ext:破剑茶寮/audio:1',
                            trigger: {
                                target: 'useCardToBefore',
                                player: 'damageBefore',
                            },
                            usable: 1,
                            filter(event, player, onrewrite) {
                                if (onrewrite == 'damageBefore') {
                                    return player.storage.zym_np >= 20;
                                }
                                if (onrewrite == 'useCardToBefore') {
                                    return get.tag(event.card, 'damage') && player.storage.zym_np >= 20;
                                }
                            },
                            content() {
                                'step 0';
                                player.chat('挑战神这件事,本身就是无谋的');
                                ('step 1');
                                player.storage.zym_np -= 20;
                                trigger.cancel();
                                player.chooseUseTarget({ name: 'sha' }, false, 'nodistance');
                            },
                        },
                        万象天引: {
                            audio: 'ext:破剑茶寮/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            popup: false,
                            selectTarget: 1,
                            filterTarget: true,
                            content() {
                                'step 0';
                                player.say(['你不会觉得你能战胜我吧？可笑.', '王晓婷'].randomGet());
                                ('step 1');
                                player.gainPlayerCard(1, 'he', target, true);
                                player.chooseToDiscard(1, 'he', true);
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                            },//QQQ
                        },
                        地爆天星: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 150;
                            },
                            content() {
                                'step 0';
                                player._popup('地爆天星');
                                player.storage.zym_np = 0;
                                game.playzsp(['地爆天星'].randomGet());
                                game.mp414('地爆天星');
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                event.targets2 = event.targets.slice(0);
                                event.targets3 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets2.length) {
                                    event.targets2.shift().damage('nocard');
                                    event.redo();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                ('step 3');
                                if (event.targets.length) event.goto(1);
                                ('step 4');
                                if (event.targets3.length) {
                                    var target = event.targets3.shift();
                                    target.chooseToDiscard(4, 'h', true).delay = false;
                                }
                                ('step 5');
                                if (event.targets3.length) event.goto(4);
                            },
                        },
                        回气: {
                            audio: 'ext:破剑茶寮/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 10;
                                player.chat('已链接全球超哥大脑');
                            },
                        },
                        zym_np1: {
                            trigger: {
                                player: ['gainAfter', 'phaseDrawEnd'],
                            },
                            silent: true,
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player, name) {
                                if (name == 'phaseDrawEnd') {
                                    return player.storage.zym_np < 120;
                                } else {
                                    return _status.currentPhase != player && event.cards && event.cards.length;
                                }
                            },
                            content() {
                                if (event.triggername == 'phaseDrawEnd') {
                                    var num1 = trigger.num;
                                    player.storage.zym_np += num1 * 5;
                                    if (get.mode() == 'guozhan') {
                                        var num1 = trigger.num;
                                        player.storage.zym_np += num1 * 5;
                                    }
                                }
                                if (trigger.parent.parent.name != 'phaseDraw' && _status.currentPhase != player) {
                                    player.storage.zym_np += 5;
                                    if (get.mode() == 'guozhan') {
                                        player.storage.zym_np += 5;
                                    }
                                }
                            },
                            popup: false,
                        },
                        zym_np2: {
                            init(player) {
                                player.storage.zym_np2 = 10;
                            },
                            trigger: {
                                global: ['phaseBefore'],
                            },
                            firstDo: true,
                            silent: true,
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.zym_np2 <= 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zym_np2 <= 0 && !player.hasSkill('subplayer')) {
                                    player.storage.zym_np2 += 1;
                                    game.broadcastAll(function (player) {
                                        _status.zym_np = {};
                                        var np = ui.create.div('');
                                        np.style.width = 'calc(5%)';
                                        np.style.height = 'calc(42.5%)';
                                        np.style.left = 'calc(35%)';
                                        np.style.top = 'calc(-25%)';
                                        np.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
                                        np.style['box-shadow'] = 'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
                                        np.style.borderRadius = '9px';
                                        np.style.transform = 'rotate(-90deg)';
                                        player.appendChild(np);
                                        _status.zym_np.np = np;
                                        var np1 = ui.create.div('');
                                        np1.style.width = 'calc(100%)';
                                        setInterval(function () {
                                            var p = player.storage.zym_np;
                                            if (p > 100) p = 100;
                                            np1.style.height = 'calc(' + p + '%)';
                                        }, 500);
                                        np1.style.left = '0px';
                                        np1.style.top = '0px';
                                        np1.style.borderRadius = '8px';
                                        setInterval(function () {
                                            if (player.storage.zym_np < 70) {
                                                np1.setBackgroundImage('extension/破剑茶寮/image/np.jpg');
                                            }
                                            if (player.storage.zym_np > 70 && player.storage.zym_np < 100) {
                                                np1.setBackgroundImage('extension/破剑茶寮/image/np0.jpg');
                                            }
                                            if (player.storage.zym_np >= 100 && player.storage.zym_np < 140) {
                                                np1.setBackgroundImage('extension/破剑茶寮/image/np00.jpg');
                                            }
                                            if (player.storage.zym_np >= 140) {
                                                np1.setBackgroundImage('extension/破剑茶寮/image/np000.jpg');
                                            }
                                        }, 500);
                                        np1.style.backgroundSize = '100% 80px';
                                        np.appendChild(np1);
                                        _status.zym_np.np1 = np1;
                                        var np2 = ui.create.div('');
                                        np2.style.width = 'calc(100%)';
                                        np2.style.height = '8px';
                                        np2.style.left = '0px';
                                        np2.style.top = 'calc(50% - 4px)';
                                        np2.style['white-space'] = 'nowrap';
                                        np2.style['font-size'] = '10px';
                                        np2.style['text-align'] = 'center';
                                        np2.style['font-family'] = "'STXinwei','xinwei'";
                                        np2.style.transform = 'rotate(90deg)';
                                        np2.style.borderRadius = '8px';
                                        np.appendChild(np2);
                                        setInterval(function () {
                                            np2.innerHTML = player.storage.zym_np;
                                        }, 100);
                                        _status.zym_np.np2 = np2;
                                    }, player);
                                }
                            },
                            popup: false,
                        },
                        佩恩天道: {
                            trigger: {
                                player: 'phaseUse',
                            },
                            group: ['万象天引', '神罗天征', '超神罗天征', '地爆天星'],
                            content() {
                                player.getHandCardLimit();
                            },
                            derivation: ['万象天引', '神罗天征', '超神罗天征', '地爆天星'],
                        },
                        九面苏婆诃: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            init(player) {
                                player.storage.九面苏婆诃_shous = ['hu', 'diao', 'yuan', 'xiong', 'bao', 'nan', 'bei', 'san', 'yu'];
                            },
                            filter(event, player) {
                                return !player.storage.九面苏婆诃_inited;
                            },
                            group: ['九面苏婆诃_used', 'zym_np', 'zym_np1', 'zym_np2', '回气'],
                            content() {
                                'step 0';
                                player.storage.九面苏婆诃_inited = true;
                                var str = '请选择你的初始标记.';
                                player
                                    .chooseControl(['青', '白', '朱', '玄', '空', '南', '北', '三', '玉'])
                                    .set('prompt', str)
                                    .set('ai', function () {
                                        return ['白', '玄'].randomGet();
                                    });
                                ('step 1');
                                if (result && result.control) {
                                    var trans = {
                                        青: 'hu',
                                        白: 'diao',
                                        朱: 'yuan',
                                        玄: 'bao',
                                        空: 'xiong',
                                        南: 'nan',
                                        北: 'bei',
                                        三: 'san',
                                        玉: 'yu',
                                    };
                                    player.addSkill('九面苏婆诃_' + trans[result.control]);
                                    player.storage.九面苏婆诃_shous.remove(trans[result.control]);
                                }
                            },
                            subSkill: {
                                used: {
                                    forced: true,
                                    trigger: {
                                        player: 'xwjhMzAnimal2',
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('九面苏婆诃_' + trigger.animal);
                                        if (player.storage.九面苏婆诃_shous.length == 0) {
                                            player.storage.九面苏婆诃_shous = ['hu', 'diao', 'yuan', 'xiong', 'bao', 'nan', 'bei', 'san', 'yu'];
                                            if (player.hasSkill('九面苏婆诃_hu')) {
                                                player.storage.九面苏婆诃_shous.remove('hu');
                                            }
                                            if (player.hasSkill('九面苏婆诃_diao')) {
                                                player.storage.九面苏婆诃_shous.remove('diao');
                                            }
                                            if (player.hasSkill('九面苏婆诃_yuan')) {
                                                player.storage.九面苏婆诃_shous.remove('yuan');
                                            }
                                            if (player.hasSkill('九面苏婆诃_xiong')) {
                                                player.storage.九面苏婆诃_shous.remove('xiong');
                                            }
                                            if (player.hasSkill('九面苏婆诃_bao')) {
                                                player.storage.九面苏婆诃_shous.remove('bao');
                                            }
                                            if (player.hasSkill('九面苏婆诃_nan')) {
                                                player.storage.九面苏婆诃_shous.remove('nan');
                                            }
                                            if (player.hasSkill('九面苏婆诃_bei')) {
                                                player.storage.九面苏婆诃_shous.remove('bei');
                                            }
                                            if (player.hasSkill('九面苏婆诃_san')) {
                                                player.storage.九面苏婆诃_shous.remove('san');
                                            }
                                            if (player.hasSkill('九面苏婆诃_yu')) {
                                                player.storage.九面苏婆诃_shous.remove('yu');
                                            }
                                        }
                                        if (player.storage.九面苏婆诃_shous.length == 0) {
                                            event.finish();
                                            return;
                                        }
                                        event.transA = {
                                            hu: '青',
                                            diao: '白',
                                            yuan: '朱',
                                            bao: '玄',
                                            xiong: '空',
                                            nan: '南',
                                            bei: '北',
                                            san: '三',
                                            yu: '玉',
                                        };
                                        event.tranB = {
                                            青: 'hu',
                                            白: 'diao',
                                            朱: 'yuan',
                                            玄: 'bao',
                                            空: 'xiong',
                                            南: 'nan',
                                            北: 'bei',
                                            三: 'san',
                                            玉: 'yu',
                                        };
                                        event.clist = [];
                                        for (var i = 0; i < player.storage.九面苏婆诃_shous.length; i++) {
                                            event.clist.push(event.transA[player.storage.九面苏婆诃_shous[i]]);
                                        }
                                        var li0 = event.clist;
                                        player
                                            .chooseControl(event.clist)
                                            .set('ai', function () {
                                                if (li0.includes('白')) {
                                                    return '白';
                                                }
                                                if (li0.includes('玄')) {
                                                    return '玄';
                                                }
                                                if (li0.includes('青')) {
                                                    return '青';
                                                }
                                                if (li0.includes('空')) {
                                                    return '空';
                                                }
                                                if (li0.includes('南')) {
                                                    return '南';
                                                }
                                                if (li0.includes('北')) {
                                                    return '北';
                                                }
                                                if (li0.includes('三')) {
                                                    return '三';
                                                }
                                                if (li0.includes('玉')) {
                                                    return '玉';
                                                }
                                                return li0.randomGet();
                                            })
                                            .set('prompt', '请选择你需新获得的标记');
                                        ('step 1');
                                        if (result && result.control) {
                                            game.log(player, '获得了', result.control, '标记.');
                                            player.addSkill('九面苏婆诃_' + event.tranB[result.control]);
                                            player.storage.九面苏婆诃_shous.remove(event.tranB[result.control]);
                                        }
                                    },
                                },
                                hu: {
                                    forced: true,
                                    mark: true,
                                    marktext: '青',
                                    intro: {
                                        content(storage) {
                                            return '【九面苏婆诃·青】<b>锁定效果:</b>你造成的伤害加一';
                                        },
                                    },
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    _priority: 1023,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        game.log(player, '触发了青标记,造成的伤害+1.');
                                        trigger.num++;
                                        player.storage.zym_np += 10;
                                        event.animal = 'hu';
                                        event.trigger('xwjhMzAnimal1');
                                        event.trigger('xwjhMzAnimal2');
                                    },
                                    ai: {
                                        xwDamageIncreaseOne: true,
                                    },
                                },
                                diao: {
                                    mark: true,
                                    marktext: '白',
                                    prompt(event, player) {
                                        return get.translation(event.player) + '使用' + get.translation(event.card) + '指定了' + get.translation(event.target) + '为目标,是否取消该目标？';
                                    },
                                    intro: {
                                        content(storage) {
                                            return '【九面苏婆诃·白】<br>当一名角色使用普通锦囊牌、暗器牌或黑色的【杀】指定角色为目标时,你可以取消该目标';
                                        },
                                    },
                                    trigger: {
                                        global: 'useCardToPlayer',
                                    },
                                    _priority: 1027,
                                    filter(event, player) {
                                        return get.color(event.card) == 'black' && (event.card.name == 'sha' || get.type(event.card) == 'trick' || get.type(event.card) == 'xwjh_anqi');
                                    },
                                    check(event, player) {
                                        return get.effect(event.target, event.card, event.player, player) < 0;
                                    },
                                    content() {
                                        game.log(player, '对', trigger.player, '使用的', trigger.card, '发动了白标记,取消了', trigger.target, '为目标.');
                                        trigger.parent.targets.remove(trigger.target);
                                        event.animal = 'diao';
                                        event.trigger('xwjhMzAnimal1');
                                        event.trigger('xwjhMzAnimal2');
                                    },
                                },
                                yuan: {
                                    mark: true,
                                    marktext: '朱',
                                    prompt(event, player) {
                                        return '是否跳过出牌阶段,令最多三名角色各摸一张牌？';
                                    },
                                    intro: {
                                        content(storage) {
                                            return '【九面苏婆诃·朱】<br>【鼓舞】回合开始时,你可以跳过本回合出牌阶段,令至多三名角色各摸一张牌';
                                        },
                                    },
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    check(event, player) {
                                        return player.countCards('h') < player.hp;
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget([1, 3], true, '请选择摸牌的目标', function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            game.log(player, '发动了朱标记.');
                                            player.skip('phaseUse');
                                            // for(var i=0;i<result.targets.length;i++){
                                            //     result.targets[i].draw();
                                            // }
                                            game.asyncDraw(result.targets);
                                            event.animal = 'yuan';
                                            event.trigger('xwjhMzAnimal1');
                                            event.trigger('xwjhMzAnimal2');
                                        }
                                    },
                                },
                                xiong: {
                                    mark: true,
                                    marktext: '空',
                                    prompt(event, player) {
                                        return get.translation(event.player) + '即将受到伤害,是否防止之？';
                                    },
                                    intro: {
                                        content(storage) {
                                            return '【九面苏婆诃·空】<br>当与你距离不大于2的角色受到伤害时,你可以防止之';
                                        },
                                    },
                                    trigger: {
                                        global: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return get.distance(player, event.player) <= 2;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    content() {
                                        game.log(player, '发动了空标记,防止了', trigger.player, '受到的伤害.');
                                        trigger.cancel();
                                        event.animal = 'xiong';
                                        event.trigger('xwjhMzAnimal1');
                                        event.trigger('xwjhMzAnimal2');
                                    },
                                },
                                bao: {
                                    mark: true,
                                    marktext: '玄',
                                    prompt(event, player) {
                                        return get.translation(event.player) + '受到了你造成的伤害,是否令一名角色回复等量的体力？';
                                    },
                                    intro: {
                                        content(storage) {
                                            return '【九面苏婆诃·玄】<br>你造成伤害后,可以令一名已受伤的角色回复等量体力';
                                        },
                                    },
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.maxHp > current.hp;
                                        });
                                    },
                                    check(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.maxHp > current.hp;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(1, true, '请选择回复体力的目标', function (card, player, target) {
                                                return target.maxHp > target.hp;
                                            })
                                            .set('ai', function (target) {
                                                var base = target.maxHp - target.hp;
                                                if (base <= 1) base = 1;
                                                return get.attitude(player, target) * base;
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            game.log(player, '对', result.targets, '发动了玄标记.');
                                            result.targets[0].recover(trigger.num);
                                            player.line(result.targets, 'green');
                                        }
                                        event.animal = 'bao';
                                        event.trigger('xwjhMzAnimal1');
                                        event.trigger('xwjhMzAnimal2');
                                    },
                                },
                                nan: {
                                    mark: true,
                                    marktext: '南',
                                    prompt(event, player) {
                                        return get.translation(event.player) + '造成伤害,是否摸牌？';
                                    },
                                    intro: {
                                        content(storage) {
                                            return '【九面苏婆诃·南】<b>锁定效果:</b>你造成伤害后摸相当于你装备区牌总数的牌';
                                        },
                                    },
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return player.countCards('e');
                                    },
                                    forced: true,
                                    content() {
                                        var num = player.countCards('e');
                                        player.draw(num);
                                        event.animal = 'nan';
                                        event.trigger('xwjhMzAnimal1');
                                        event.trigger('xwjhMzAnimal2');
                                    },
                                },
                                bei: {
                                    mark: true,
                                    marktext: '北',
                                    prompt(event, player) {
                                        return get.translation(event.player) + '受到伤害,是否弃置伤害来源的所有红色牌？';
                                    },
                                    intro: {
                                        content(storage) {
                                            return '【九面苏婆诃·北】<br>你受到伤害后弃置伤害来源的所有红色牌';
                                        },
                                    },
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    filter(event, player) {
                                        return event.source && event.source != player && event.source.countCards('he', { color: 'red' }) > 0;
                                    },
                                    content() {
                                        trigger.source.discard(trigger.source.getCards('he', { color: 'red' }));
                                        event.animal = 'bei';
                                        event.trigger('xwjhMzAnimal1');
                                        event.trigger('xwjhMzAnimal2');
                                    },
                                    ai: {
                                        expose: 0.1,
                                        result: {
                                            threaten: 0.8,
                                            target(card, player, target) {
                                                if (get.tag(card, 'damage') && get.attitude(target, player) < 0) {
                                                    return [1, 0, 0, -player.countCards('he', { color: 'red' })];
                                                }
                                            },
                                        },
                                    },
                                },
                                san: {
                                    mark: true,
                                    marktext: '三',
                                    prompt(event, player) {
                                        return get.translation(event.player) + '受到了你造成的伤害,是否令一名角色回复等量的体力？';
                                    },
                                    intro: {
                                        content(storage) {
                                            return '【九面苏婆诃·三】<br>当其他角色使用锦囊牌时,你可将1张颜色相同的手牌当做同名牌使用;<br>&nbsp若你以此法使用的牌之点数大于该角色使用的牌,则你可令该角色使用的牌失效';
                                        },
                                    },
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.countCards('h', { color: get.color(event.card) })) return false;
                                        if (event.player == player) return false;
                                        if (get.type(event.card) != 'trick') return false;
                                        var info = get.info(event.card);
                                        if (event.targets && !info.multitarget) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    var card = { name: event.card.name, nature: event.card.nature };
                                                    return player.canUse(card, current, false);
                                                })
                                            ) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var next = player.chooseCardTarget({
                                            position: 'h',
                                            filterCard(card, player) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        var cardax = game.createCard(trigger.card.name, card.suit, card.number, trigger.card.nature);
                                                        return player.canUse(cardax, current, false) && get.color(card) == get.color(trigger.card);
                                                    })
                                                ) {
                                                    return true;
                                                }
                                                return false;
                                            },
                                            selectTarget(card, player, target) {
                                                var card = trigger.card;
                                                var info = get.info(card);
                                                return info.selectTarget;
                                            },
                                            filterTarget(card, player, target) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                var cardaa = ui.selected.cards[0];
                                                var cardax = game.createCard(trigger.card.name, cardaa.suit, cardaa.number, trigger.card.nature);
                                                return player.canUse(cardax, target, false); //lib.filter.filterTarget(cardax,player,target);
                                            },
                                            ai1(card) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                if (get.attitude(player, trigger.player) > 0 && trigger.card.name == 'tiesuo') return -1;
                                                if (trigger.card.name == 'jiedao') return -1;
                                                if (trigger.card.name == 'huogong' && player.countCards('h') <= 2) return -1;
                                                return 7 - get.value(card);
                                            },
                                            ai2(target) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                return get.effect(target, trigger.card, player, player);
                                            },
                                            prompt: '是否选择一张' + get.translation(get.color(trigger.card)) + '牌当' + get.translation(trigger.card) + '使用？',
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.flashAvatar(trigger.player);
                                            event.cardssss = result.cards;
                                            if (!event.isMine()) game.delayx();
                                            event.targets = result.targets;
                                            if (result.cards[0].number > trigger.card.number) {
                                                player
                                                    .chooseControl('是', '否', true, function () {
                                                        if (get.attitude(trigger.player, player) <= 0) return '是';
                                                        return '否';
                                                    })
                                                    .set('prompt', '是否取消' + get.translation(trigger.player) + '使用的' + get.translation(trigger.card) + '？');
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.control == '是') {
                                            game.log(player, '令,', trigger.player, '使用的', trigger.card, '失效');
                                            player.line(trigger.player);
                                            trigger.cancel();
                                        }
                                        if (event.targets) {
                                            var cardss = { name: trigger.card.name, nature: trigger.card.nature };
                                            player.useCard(cardss, event.targets, event.cardssss);
                                            event.finish();
                                        } else {
                                            event.finish();
                                        }
                                        event.animal = 'san';
                                        event.trigger('xwjhMzAnimal1');
                                        event.trigger('xwjhMzAnimal2');
                                    },
                                    ai: {
                                        threaten: 1,
                                    },
                                },
                                yu: {
                                    mark: true,
                                    marktext: '玉',
                                    prompt(event, player) {
                                        return get.translation(event.player) + '受到了你造成的伤害,是否令一名角色回复等量的体力？';
                                    },
                                    intro: {
                                        content(storage) {
                                            return '【九面苏婆诃·玉】<br>一名角色的结束阶段开始时,若你本回合内使用或打出过基本牌,则你选择一项:1.摸一张牌.2.视为使用一张本回合内使用或打出过的基本牌';
                                        },
                                    },
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            player.getHistory('useCard', function (card) {
                                                return get.type(card.card) == 'basic';
                                            }).length ||
                                            player.getHistory('respond', function (card) {
                                                return get.type(card.card) == 'basic';
                                            }).length
                                        );
                                    },
                                    content() {
                                        'step 0';
                                        var list = [];
                                        player.getHistory('useCard', function (evt) {
                                            if (get.type(evt.card) != 'basic') return;
                                            var name = evt.card.name;
                                            if (name == 'sha') {
                                                var nature = evt.card.nature;
                                                switch (nature) {
                                                    case 'fire':
                                                        name = 'huosha';
                                                        break;
                                                    case 'thunder':
                                                        name = 'leisha';
                                                        break;
                                                    case 'kami':
                                                        name = 'kamisha';
                                                        break;
                                                    case 'ice':
                                                        name = 'icesha';
                                                        break;
                                                    case 'stab':
                                                        name = 'cisha';
                                                        break;
                                                }
                                            }
                                            list.add(name);
                                        });
                                        player.getHistory('respond', function (evt) {
                                            if (get.type(evt.card) != 'basic') return;
                                            var name = evt.card.name;
                                            if (name == 'sha') {
                                                var nature = evt.card.nature;
                                                switch (nature) {
                                                    case 'fire':
                                                        name = 'huosha';
                                                        break;
                                                    case 'thunder':
                                                        name = 'leisha';
                                                        break;
                                                    case 'kami':
                                                        name = 'kamisha';
                                                        break;
                                                    case 'ice':
                                                        name = 'icesha';
                                                        break;
                                                    case 'stab':
                                                        name = 'cisha';
                                                        break;
                                                }
                                            }
                                            list.add(name);
                                        });
                                        player.chooseButton(
                                            [
                                                '选择要使用的牌,或点取消摸一张牌',
                                                [
                                                    list.map(function (name) {
                                                        return ['基本', '', name];
                                                    }),
                                                    'vcard',
                                                ],
                                            ],
                                            function (button) {
                                                return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                            },
                                            function (button) {
                                                return _status.event.player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
                                            }
                                        );
                                        ('step 1');
                                        if (!result.bool) player.draw();
                                        else player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] });
                                        event.animal = 'yu';
                                        event.trigger('xwjhMzAnimal1');
                                        event.trigger('xwjhMzAnimal2');
                                    },
                                },
                            },
                            prompt(event, player) {
                                var str = '';
                                if (info.selectCard) {
                                    if (get.objtype(info.selectCard) == 'array') {
                                        str += '请选择';
                                        if (info.selectCard[0] != -1) {
                                            if (info.selectCard[0] != info.selectCard[1]) {
                                                if (!isFinite(info.selectCard[1])) {
                                                    str += '至少';
                                                    str += get.cnNumber(info.selectCard[0]);
                                                    str += '张牌';
                                                } else {
                                                    str += get.cnNumber(info.selectCard[0]);
                                                    str += '至';
                                                    str += get.cnNumber(info.selectCard[1]);
                                                    str += '张牌';
                                                }
                                            } else {
                                                str += get.cnNumber(info.selectCard[0]);
                                                str += '张牌';
                                            }
                                        }
                                    } else if (typeof info.selectCard == 'number' && info.selectCard != -1) {
                                        str += '请选择';
                                        str += get.cnNumber(info.selectCard);
                                        str += '张牌';
                                    } else {
                                        str += '请选择技能要求的牌';
                                    }
                                }
                                if (info.selectTarget) {
                                    if (get.objtype(info.selectTarget) == 'array') {
                                        if (str.length == 0) {
                                            str += '请选择';
                                        } else {
                                            str += '和';
                                        }
                                        if (info.selectTarget[0] != -1) {
                                            if (info.selectTarget[0] == info.selectTarget[1]) {
                                                str += get.cnNumber(info.selectTarget[0]);
                                                str += '个目标';
                                            } else {
                                                if (!isFinite(info.selectTarget[1])) {
                                                    str += '至少';
                                                    str += get.cnNumber(info.selectTarget[0]);
                                                    str += '个目标';
                                                } else {
                                                    str += get.cnNumber(info.selectTarget[0]);
                                                    str += '至';
                                                    str += get.cnNumber(info.selectTarget[1]);
                                                    str += '个目标';
                                                }
                                            }
                                        }
                                    } else if (typeof info.selectTarget == 'number') {
                                        if (info.selectTarget == -1) {
                                            str += '';
                                        } else {
                                            if (str.length == 0) {
                                                str += '请选择';
                                            } else {
                                                str += '和';
                                            }
                                            str += get.cnNumber(info.selectTarget);
                                            str += '个目标';
                                        }
                                    } else {
                                        if (str.length == 0) {
                                            str += '请选择';
                                        } else {
                                            str += '和';
                                        }
                                        str += '目标';
                                    }
                                }
                                if (str.length == 0) {
                                    str += '';
                                } else {
                                    str = ',' + str + '';
                                }
                                if (info.enable) {
                                    if (get.objtype(info.enable) == 'array') {
                                        if (info.enable.includes('phaseUse') || info.enable.includes('chooseToRespond') || info.enable.includes('chooseToUse')) {
                                            return '你可以发动【' + get.translation(sk) + '】' + str;
                                        }
                                    } else if (['chooseToUse', 'chooseToRespond', 'phaseUse'].includes(info.enable)) {
                                        return '你可以发动【' + get.translation(sk) + '】' + str;
                                    }
                                }
                                return get.prompt(sk);
                            },
                        },
                        血继: {
                            forced: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                'step 0';
                                player.storage.九面苏婆诃_ok = true;
                                event.anlist = ['hu', 'diao', 'yuan', 'xiong', 'bao', 'nan', 'bei', 'san', 'yu'];
                                event.anlist.remove(trigger.animal);
                                event.tlist = [];
                                event.transA = {
                                    hu: '青',
                                    diao: '白',
                                    yuan: '朱',
                                    bao: '玄',
                                    xiong: '空',
                                    nan: '南',
                                    bei: '北',
                                    san: '三',
                                    yu: '玉',
                                };
                                event.tranB = {
                                    青: 'hu',
                                    白: 'diao',
                                    朱: 'yuan',
                                    玄: 'bao',
                                    空: 'xiong',
                                    南: 'nan',
                                    北: 'bei',
                                    三: 'san',
                                    玉: 'yu',
                                };
                                for (var i = 2; i < event.anlist.length; i++) {
                                    event.tlist.push(event.transA[event.anlist[i]]);
                                }
                                var li = event.tlist;
                                player
                                    .chooseControl(event.tlist)
                                    .set('ai', function () {
                                        return li.randomGet();
                                    })
                                    .set('prompt', '请选择一个标记获得');
                                ('step 1');
                                if (result && result.control) {
                                    game.log(player, '获得了', result.control, '标记.');
                                    player.addSkill('九面苏婆诃_' + event.tranB[result.control]);
                                }
                            },
                            prompt(event, player) {
                                var str = '';
                                if (info.selectCard) {
                                    if (get.objtype(info.selectCard) == 'array') {
                                        str += '请选择';
                                        if (info.selectCard[0] != -1) {
                                            if (info.selectCard[0] != info.selectCard[1]) {
                                                if (!isFinite(info.selectCard[1])) {
                                                    str += '至少';
                                                    str += get.cnNumber(info.selectCard[0]);
                                                    str += '张牌';
                                                } else {
                                                    str += get.cnNumber(info.selectCard[0]);
                                                    str += '至';
                                                    str += get.cnNumber(info.selectCard[1]);
                                                    str += '张牌';
                                                }
                                            } else {
                                                str += get.cnNumber(info.selectCard[0]);
                                                str += '张牌';
                                            }
                                        }
                                    } else if (typeof info.selectCard == 'number' && info.selectCard != -1) {
                                        str += '请选择';
                                        str += get.cnNumber(info.selectCard);
                                        str += '张牌';
                                    } else {
                                        str += '请选择技能要求的牌';
                                    }
                                }
                                if (info.selectTarget) {
                                    if (get.objtype(info.selectTarget) == 'array') {
                                        if (str.length == 0) {
                                            str += '请选择';
                                        } else {
                                            str += '和';
                                        }
                                        if (info.selectTarget[0] != -1) {
                                            if (info.selectTarget[0] == info.selectTarget[1]) {
                                                str += get.cnNumber(info.selectTarget[0]);
                                                str += '个目标';
                                            } else {
                                                if (!isFinite(info.selectTarget[1])) {
                                                    str += '至少';
                                                    str += get.cnNumber(info.selectTarget[0]);
                                                    str += '个目标';
                                                } else {
                                                    str += get.cnNumber(info.selectTarget[0]);
                                                    str += '至';
                                                    str += get.cnNumber(info.selectTarget[1]);
                                                    str += '个目标';
                                                }
                                            }
                                        }
                                    } else if (typeof info.selectTarget == 'number') {
                                        if (info.selectTarget == -1) {
                                            str += '';
                                        } else {
                                            if (str.length == 0) {
                                                str += '请选择';
                                            } else {
                                                str += '和';
                                            }
                                            str += get.cnNumber(info.selectTarget);
                                            str += '个目标';
                                        }
                                    } else {
                                        if (str.length == 0) {
                                            str += '请选择';
                                        } else {
                                            str += '和';
                                        }
                                        str += '目标';
                                    }
                                }
                                if (str.length == 0) {
                                    str += '';
                                } else {
                                    str = ',' + str + '';
                                }
                                if (info.enable) {
                                    if (get.objtype(info.enable) == 'array') {
                                        if (info.enable.includes('phaseUse') || info.enable.includes('chooseToRespond') || info.enable.includes('chooseToUse')) {
                                            return '你可以发动【' + get.translation(sk) + '】' + str;
                                        }
                                    } else if (['chooseToUse', 'chooseToRespond', 'phaseUse'].includes(info.enable)) {
                                        return '你可以发动【' + get.translation(sk) + '】' + str;
                                    }
                                }
                                return get.prompt(sk);
                            },
                        },
                        螺旋轮虞: {
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 100;
                            },
                            content() {
                                'step 0';
                                player.storage.zym_np -= 100;
                                player.storage.大螺旋轮虞 = true;
                                player.chat('这是饯别礼');
                                ('step 1');
                                game.playzsp(['大螺旋轮虞'].randomGet());
                                game.mp414('大螺旋轮虞');
                                event.list = player.getFriends().sortBySeat();
                                ('step 2');
                                for (var i = 0; i < game.players.length; i++) {
                                    if (player.getEnemies().includes(game.players[i])) {
                                        game.players[i].damage(3);
                                    }
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
                        遁术: {
                            audio: 'ext:破剑茶寮/audio:2',
                            trigger: {
                                player: 'phaseUse',
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', '回气', '木遁·扦插之术', '火遁·爆风乱舞', '回复'],
                            content() {
                                player.getHandCardLimit();
                            },
                        },
                        木遁·扦插之术: {
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 20;
                            },
                            content() {
                                'step 0';
                                player.storage.zym_np -= 20;
                                var num = Math.min(game.countPlayer() - 1, Math.max(1));
                                player.chooseTarget([1, num], get.prompt('扦插'), '令所选角色的非锁定技失效直到回合结束', lib.filter.notMe).set('ai', function (target) {
                                    var att = -get.attitude(_status.event.player, target);
                                    if (att <= 0) return 0;
                                    if (target.hasSkillTag('maixie') || target.hasSkill('maixie_hp') || target.hasSkill('maixie_defed')) att *= 3;
                                    return att / get.threaten(target);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var targets = result.targets.sortBySeat();
                                    for (var i of targets) i.addTempSkill('fengyin');
                                }
                            },
                        },
                        火遁·爆风乱舞: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 20;
                            },
                            filterTarget: true,
                            selectTarget() {
                                var player = _status.event.player;
                                return [2];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                player.storage.zym_np -= 20;
                                game.playzsp(['爆风乱舞'].randomGet());
                                game.mp414('爆风乱舞');
                                for (var i = 0; i < targets.length; i++) {
                                    if (!targets[i].isLinked()) {
                                        targets[i].link(true);
                                    }
                                }
                                ('step 1');
                                ('step 2');
                                targets[0].damage('fire', 'nocard');
                            },
                            ai: {
                                damage: true,
                                fireAttack: true,
                                threaten: 1.5,
                                order: 7,
                                result: {
                                    target(player, target) {
                                        var eff = get.damageEffect(target, player, target, 'fire');
                                        if (target.isLinked()) {
                                            return eff / 10;
                                        } else {
                                            return eff;
                                        }
                                    },
                                },
                            },
                        },
                        天变地异: {
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 180;
                            },
                            content() {
                                'step 0';
                                player.storage.zym_np = 0;
                                player.storage.天变地异 = true;
                                player.chat('感受绝望的滋味吧');
                                player.awakenSkill('天变地异');
                                ('step 1');
                                game.playzsp(['天变地异'].randomGet());
                                game.mp414('天变地异');
                                event.list = player.getFriends().sortBySeat();
                                ('step 2');
                                for (var i = 0; i < game.players.length; i++) {
                                    if (player.getEnemies().includes(game.players[i])) {
                                        game.players[i].damage(5);
                                    }
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 2,
                                },
                                threaten: 1,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        神威: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player && event.player != player && player.storage.zym_np >= 20 && event.card && ['basic', 'trick'].includes(get.type(event.card));
                            },
                            content() {
                                var str = '神威:是否令' + get.translation(trigger.card) + '无效';
                                if (_status.currentPhase != player) str += ',并摸一张';
                                player
                                    .chooseToDiscard(str, 1, 'he')
                                    .set('ai', function (card) {
                                        if (get.effect(_status.event.player, _status.event.card, _status.event.target, _status.event.player) > 0) return -1;
                                        else return 15 - get.value(card);
                                    })
                                    .set('card', trigger.card)
                                    .set('target', trigger.player);
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.cancel();
                                } else event.finish();
                                ('step 2');
                                if (_status.currentPhase != player) {
                                    player.chooseToUse('谲度:你可以使用一张牌');
                                    player.storage.zym_np -= 20;
                                    player.addTempSkill('神威_a');
                                    player.markSkill('神威_a');
                                }
                            },
                            ai: {
                                order: 3,
                                result: {
                                    player: 1,
                                    //      target:-1,
                                },
                            },
                            subSkill: {
                                a: {
                                    mark: true,
                                    marktext: '威',
                                    intro: {
                                        name: '神威',
                                        content: '不能成为牌的目标',
                                    },
                                    mod: {
                                        targetEnabled() {
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        回复: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 20;
                            },
                        },
                        轻重岩: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                player.markSkill('轻重岩');
                                player.draw();
                                player.removeSkill('驭岩·重');
                                player.removeSkill('加重破');
                                player.removeSkill('加重岩重踢');
                                player.addSkill('轻重岩连踢');
                                player.addSkill('驭岩·轻');
                                player.addSkill('驭岩·轻弃');
                            },
                        },
                        加重岩: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'equip') == 'equip';
                            },
                            content() {
                                'step 0';
                                player.changeHujia();
                                ('step 1');
                                player.removeSkill('轻重岩踢');
                                player.removeSkill('轻重岩连踢');
                                player.removeSkill('驭岩·轻');
                                player.removeSkill('驭岩·轻弃');
                                player.addSkill('加重岩重踢');
                                player.addSkill('加重破');
                                player.addSkill('驭岩·重');
                                player.markSkill('加重岩');
                            },
                        },
                        加重岩踢: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        加重岩重踢: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                if (trigger.name == 'useCard') trigger.directHit.addArray(game.players);
                                else trigger.directHit.add(player);
                            },
                        },
                        轻重岩连踢: {
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return get.type(event.card) != 'delay' && get.type(event.card) != 'equip' && event.card.name != 'shan' && event.card.name != 'wuxie' && (!player.countCards('e') || player.hp <= 2);
                            },
                            content() {
                                if (!player.countCards('e') && trigger.targets && trigger.card && trigger.card.name != 'wuxie' && trigger.card.name != 'shan' && get.type(trigger.card) != 'delay' && trigger.targets.length == trigger.parent.triggeredTargets4.length) {
                                    trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                    trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                                }
                            },
                        },
                        重岩: {
                            trigger: {
                                player: 'phaseUse',
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', '轻重岩', '加重岩', '回复'],
                            derivation: ['轻重岩', '加重岩'],
                            content() {
                                player.getHandCardLimit();
                            },
                        },
                        加重破: {
                            trigger: {
                                player: 'useCard',
                            },
                            check(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return player != current && get.attitude(player, current) == 0 && lib.filter.targetEnabled2(event.card, player, current);
                                    }) <= 1
                                );
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.isPhaseUsing(player);
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            content() {
                                'step 0';
                                player.storage.加重破 = true;
                                player.addTempSkill('加重破_zhu');
                                ('step 1');
                                var originTargets = trigger.targets;
                                if (!originTargets) {
                                    originTargets = [];
                                }
                                trigger.加重破 = true;
                                var p = player;
                                player
                                    .chooseTarget('请选择为此【杀】额外指定的目标', [0, Infinity], function (card, player, target) {
                                        return player != target && !originTargets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(p, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets, 'green');
                                    if (trigger.targets) {
                                        trigger.targets = trigger.targets.concat(result.targets);
                                    } else {
                                        trigger.targets = result.targets.slice(0);
                                    }
                                }
                                ('step 3');
                                //player.loseMaxHp();
                            },
                            ai: {
                                threaten: 2.5,
                            },
                            subSkill: {
                                noequip: {
                                    ai: {
                                        unequip2: true,
                                    },
                                    charlotte: true,
                                    mark: true,
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    skillBlocker(skill, player) {
                                        if (lib.skill[skill].charlotte) return false;
                                        if (player.getEquip(2)) {
                                            var info = get.info(player.getEquip(2));
                                            if (info && info.skills) {
                                                if (info.skills.includes(skill)) {
                                                    return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    intro: {
                                        name: '破甲',
                                        content: '防具无效',
                                    },
                                    marktext: '破甲',
                                },
                                zhu: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return event.card.name == 'sha' && event.parent.加重破;
                                    },
                                    popup: false,
                                    forced: true,
                                    content() {
                                        trigger.target.addTempSkill('加重破_noequip');
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.name == 'sha') return true;
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        驭岩·重: {
                            enable: ['chooseToUse'],
                            usable: 1,
                            selectCard: -1,
                            filterCard(card) {
                                return false;
                            },
                            filter(event, player) {
                                return player.storage.zym_np >= 20;
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                return _status.event.isPhaseUsing(player);
                            },
                            prompt: '视为使用一张<杀>',
                            check(card) {
                                return 10 - get.value(card);
                            },
                            content() {
                                player.storage.zym_np -= 20;
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
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
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
                                                        !target.mayHaveShan() ||
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
                                                        jiu: true,
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
                                        target.mayHaveShan() &&
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
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
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
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
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
                                            target.mayHaveShan() &&
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
                        驭岩·轻: {
                            usable: 1,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filter(event, player) {
                                return player.storage.zym_np >= 20;
                            },
                            filterCard(card) {
                                return card.name == 'sha';
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hs', { name: 'sha' })) {
                                    return false;
                                }
                                return true;
                            },
                            position: 'hs',
                            prompt: '将一张杀当闪使用或打出',
                            check(card) {
                                return true;
                            },
                            content() {
                                player.storage.zym_np -= 20;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('he')) return false;
                                },
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
                        驭岩·轻弃: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'useCard' || event.name == 'respond') {
                                    return event.card.name == 'shan';
                                }
                                return true;
                            },
                            content() {
                                var cards = player.getCards('e');
                                if (cards.length) player.discard(cards);
                                player.chooseToUse;
                                player.draw(cards.length);
                                player.chooseUseTarget({ name: 'sha' }, false, 'nodistance');
                            },
                        },
                        熔遁·灰封石之术: {
                            enable: 'phaseUse',
                            usable: 1,
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 120;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                player.storage.zym_np -= 120;
                                ui.backgroundMusic.src = 'extension/破剑茶寮/audio/高梨康治 - 形勢逆転.mp3';
                                game.playzsp(['熔遁·灰石封碎击'].randomGet());
                                game.mp414('熔遁·灰石封碎击');
                                target.addTempSkill('fengyin');
                                target.damage(2, 'fire');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        gujia: {
                            enable: 'phaseUse',
                            usable: 1,
                            derivation: ['复仇者'],
                            filter(event, player) {
                                return player.storage.zym_np >= 20;
                            },
                            content() {
                                player.storage.zym_np -= 20;
                                player.draw();
                                player.addMark('gujia', 2);
                                player.addSkill('gujia_mark');
                                player.addSkill('gujia_remove');
                            },
                            group: ['gujia_effect'],
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '骨架',
                                    intro: {
                                        name: '骨架',
                                        content: '防止你受到的一次伤害',
                                    },
                                    charlotte: true,
                                    ai: {
                                        filterDamage: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (!player.hasMark('gujia')) return false;
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    return current.hasSkill('gujia_effect');
                                                })
                                            )
                                                return false;
                                            if (arg && arg.player) {
                                                if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
                                            }
                                        },
                                    },
                                },
                                effect: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('gujia') && (event.name == 'damage' || !event.numFixed);
                                    },
                                    content() {
                                        trigger.cancel();
                                        trigger.player.removeMark('gujia', 1);
                                    },
                                },
                                remove: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    content() {
                                        player.removeMark('gujia', 3);
                                        player.removeSkill('gujia_mark');
                                    },
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        加具土命: {
                            enable: 'phaseUse',
                            usable: 1,
                            group: ['zym_np', 'zym_np1', 'zym_np2', '登场', '回复', '复仇者'],
                            filter(event, player) {
                                return player.storage.zym_np >= 20;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                player.storage.zym_np -= 20;
                                target.damage(1, 'fire');
                                var list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.addTempSkill('加具土命强化', 'phaseUseEnd');
                            },
                        },
                        加具土命强化: {
                            mod: {
                                cardUsable(card, player) {
                                    if (card.name == 'jiu') return Infinity;
                                },
                                cardnature(card, player) {
                                    if (card.name == 'sha') return 'fire';
                                },
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (event.card && get.nature(event.card) == 'fire') {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                trigger.player.loseHp();
                            },
                            ai: {
                                fireAttack: true,
                                threaten: 1.2,
                            },
                        },
                        登场: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 20;
                                ui.backgroundMusic.src = 'extension/破剑茶寮/audio/高梨康治 - 形勢逆転.mp3';
                            },
                        },
                        复仇者: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return (distance += to.getAttackRange() - 1);
                                },
                            },
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.player != player && get.distance(player, event.player, 'attack') <= 1 && event.player.isAlive();
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var att = get.attitude(trigger.player, player);
                                var bool = 0;
                                if (att < 0) {
                                    if (trigger.player.countCards('e') == 0 && trigger.player.countCards('h') > 2) bool = 1;
                                    else if (trigger.player.countCards('he') == 0) bool = 1;
                                } else if (att == 0 && trigger.player.countCards('he') == 0) {
                                    bool = 1;
                                }
                                trigger.player
                                    .chooseControl(function () {
                                        return _status.event.bool;
                                    })
                                    .set('prompt', '复仇者')
                                    .set('bool', bool)
                                    .set('choiceList', ['令' + get.translation(player) + '摸一张牌', '令' + get.translation(player) + '弃置你的一张牌']);
                                ('step 1');
                                if (result.control == '选项一') {
                                    player.draw();
                                    event.finish();
                                } else if (trigger.player.countCards('he')) {
                                    player.discardPlayerCard(trigger.player, true, 'he');
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1.8,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                            },
                        },
                        炎遁·须佐能乎加具土命: {
                            enable: 'phaseUse',
                            usable: 1,
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 120;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                player.storage.zym_np -= 120;
                                player.awakenSkill('炎遁·须佐能乎加具土命');
                                game.playzsp(['炎遁·须佐能乎加具土命'].randomGet());
                                game.mp414('炎遁·须佐能乎加具土命');
                                target.damage(3, 'fire');
                                target.addTempSkill('爆伤', 'phaseEnd');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        神の登场: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 10;
                                ui.backgroundMusic.src = 'extension/破剑茶寮/audio/Brownode - 儀礼 (Brownode Bootleg).mp3';
                            },
                        },
                        柱间细胞: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 30;
                            },
                        },
                        缚流星: {
                            enable: 'phaseUse',
                            usable: 1,
                            derivation: ['zmjingu'],
                            filter(event, player) {
                                return player.storage.zym_np >= 10;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.storage.zym_np -= 10;
                                target.damage(1);
                                target.addTempSkill('zmjingu', 'phaseEnd');
                                target.markSkill('zmjingu');
                            },
                        },
                        爆碎玉: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 10;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.storage.zym_np -= 10;
                                target.damage(1, 'fire');
                                target.addTempSkill('爆伤', 'phaseEnd');
                                target.markSkill('爆伤');
                            },
                        },
                        爆伤: {
                            intro: {
                                content(storage) {
                                    return '受到火焰伤害时有概率使伤害量+1且手牌上限-1.';
                                },
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (event.nature = 'fire' && Math.random() <= 0.4);
                            },
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 1;
                                },
                            },
                        },
                        zmjingu: {
                            marktext: '禁锢',
                            intro: {
                                content: '无法使用/打出/基本牌',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                                cardUsable(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                                cardRespondable(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                                cardzm3vable(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                            },
                        },
                        忍具大师5: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return get.type(event.card) == 'equip';
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        操具: {
                            trigger: {
                                player: 'phaseUse',
                            },
                            group: ['缚流星', '爆碎玉', 'zym_np', 'zym_np1', 'zym_np2'],
                            content() {
                                player.getHandCardLimit();
                            },
                        },
                        操具·极大铁球: {
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 50;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.awakenSkill('操具·极大铁球');
                                player.storage.zym_np -= 50;
                                game.playzsp(['操具·极大铁球'].randomGet());
                                game.mp414('操具·极大铁球');
                                target.damage();
                                player.draw();
                                player.chooseUseTarget({ name: 'sha' }, false, 'nodistance');
                                player.gain(game.createCard2('芭蕉扇', 'club', 6));
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        芭蕉扇_skill: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            popup: '芭蕉扇',
                            filter(event, player) {
                                return (
                                    event.parent.name == 'sha' &&
                                    game.hasPlayer(function (current) {
                                        return (current == event.player || (current != player && get.distance(current, event.player) <= 1)) && current.countDiscardableCards(player, 'he') > 0;
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                var list = [];
                                var choiceList = [];
                                if (trigger.player.countDiscardableCards(player, 'he') > 0) {
                                    list.push(true);
                                    choiceList.push('弃置' + get.translation(trigger.player) + '的两张牌');
                                }
                                if (
                                    game.hasPlayer(function (current) {
                                        return current != player && get.distance(current, trigger.player) <= 1;
                                    })
                                ) {
                                    list.push(false);
                                    choiceList.push('弃置所有至' + get.translation(trigger.player) + '距离为1的角色的各一张牌');
                                }
                                event.list = list;
                                if (list.length == 1) event._result = { index: 0 };
                                else {
                                    player
                                        .chooseControl()
                                        .set('choiceList', choiceList)
                                        .set('prompt', '芭蕉扇格拉迪尔特·改')
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            var source = _status.event.getTrigger().player;
                                            var num = game.countPlayer(function (current) {
                                                if (current != player && get.distance(current, source) <= 1 && current.countDiscardableCards(player, 'he') > 0) return -get.sgn(get.attitude(player, current));
                                            });
                                            if (num > Math.min(2, source.countDiscardableCards(player, 'he'))) return 1;
                                            return 0;
                                        });
                                }
                                ('step 1');
                                if (event.list[result.index]) {
                                    player.discardPlayerCard(trigger.player, 'he', 2, true);
                                    event.finish();
                                } else {
                                    event.targets = game
                                        .filterPlayer(function (current) {
                                            return current != player && get.distance(current, trigger.player) <= 1;
                                        })
                                        .sortBySeat();
                                }
                                ('step 2');
                                var target = targets.shift();
                                if (target.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(target, 'he', true);
                                if (targets.length) event.redo();
                            },
                        },
                        影分身: {
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 30 && player.getSubPlayers('影分身').length <= 2;
                            },
                            content() {
                                'step 0';
                                player.storage.zym_np -= 30;
                                player.draw();
                                var skills = lib.character[player.name][3].slice(0);
                                for (var i = 0; i < skills.length; i++) {
                                    if (lib.skill[skills[i]].nosub) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                player.addSubPlayer({
                                    name: player.name,
                                    skills: skills,
                                    maxHp: player.maxHp,
                                    hp: 1,
                                    hs: get.cards(0),
                                    intro: '你的回合结束时,切换为此随至你的回合开始.',
                                });
                            },
                            group: ['影分身_1', '影分身_exit'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: -60,
                                    filter(event, player) {
                                        return !player.hasSkill('subplayer') && player.getSubPlayers('影分身').length >= 1;
                                    },
                                    content() {
                                        'step 0';
                                        player.callSubPlayer().set('tag', '影分身');
                                        ('step 1');
                                        player.phase('nodelay');
                                        player.node.avatar.setBackgroundImage('extension/破剑茶寮/image/影分身.jpg');
                                    },
                                },
                                exit: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        // if(player.hasSkill('subplayer')) return false;
                                        return true;
                                    },
                                    content() {
                                        player.exitSubPlayer();
                                        player.storage.zym_np += 10;
                                    },
                                },
                            },
                        },
                        蛙组手: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            trigger: {
                                source: 'damageBegin1',
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', '仙鸣の登场', '自然能量'],
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                trigger.num += 1;
                            },
                            popup: false,
                        },
                        仙鸣の登场: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 10;
                                ui.backgroundMusic.src = 'extension/破剑茶寮/audio/FLOW - Sign.mp3';
                            },
                        },
                        自然能量: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 20;
                            },
                        },
                        仙术·螺旋手里剑: {
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 150;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.awakenSkill('仙术·螺旋手里剑');
                                player.storage.zym_np -= 150;
                                game.playzsp(['鸣人奥义'].randomGet());
                                game.playzsp(['螺旋手里剑'].randomGet());
                                game.mp414('螺旋手里剑');
                                target.damage(4);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        查克拉密卷: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 15;
                            },
                        },
                        月读: {
                            group: ['zym_np', 'zym_np1', 'zym_np2', '回复'],
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filter(event, player) {
                                if (player.storage.zym_np < 20) return false;
                                return player.countCards('he') > 0;
                            },
                            filterCard(card) {
                                var suit = card.suit;
                                for (var i = 0; i < ui.selected.cards.length; i++) {
                                    if (ui.selected.cards[i].suit == suit) return false;
                                }
                                return true;
                            },
                            complexCard: true,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            check(card) {
                                if (ui.selected.cards.length > 1) return 0;
                                return 7 - get.value(card);
                            },
                            selectCard: [1, 4],
                            content() {
                                'step 0';
                                player.storage.zym_np -= 20;
                                ('step 1');
                                var suits = [];
                                for (var i = 0; i < cards.length; i++) {
                                    suits.push(cards[i].suit);
                                }
                                var success = false;
                                for (var i = 0; i < suits.length; i++) {
                                    if (target.countCards('h', { suit: suits[i] })) {
                                        success = true;
                                        break;
                                    }
                                }
                                if (!success) {
                                    target.popup('未生效');
                                } else {
                                    game.playzsp('月读');
                                    game.mp414('月读');
                                    player.draw();
                                    target.turnOver();
                                    target.goMad({ player: 'phaseEnd' });
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        if (target.countCards('h') == 1 && player.hp > 1) return 0;
                                        return -num;
                                    },
                                },
                            },
                        },
                        双须佐能乎降临: {
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 150;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.awakenSkill('双须佐能乎降临');
                                player.storage.zym_np -= 150;
                                game.playzsp(['连携奥义'].randomGet());
                                game.mp414('连携奥义');
                                target.damage(4, 'fire');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        须佐·鼬: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 20;
                            },
                            content() {
                                player.storage.zym_np -= 20;
                                player.draw();
                                player.addMark('须佐·鼬', 3);
                                player.addSkill('须佐·鼬_mark');
                                player.addSkill('须佐·鼬_remove');
                            },
                            group: ['须佐·鼬_effect'],
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '骨架',
                                    intro: {
                                        name: '骨架',
                                        content: '防止你受到的一次伤害',
                                    },
                                    charlotte: true,
                                    ai: {
                                        filterDamage: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (!player.hasMark('须佐·鼬')) return false;
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    return current.hasSkill('须佐·鼬_effect');
                                                })
                                            )
                                                return false;
                                            if (arg && arg.player) {
                                                if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
                                            }
                                        },
                                    },
                                },
                                effect: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('须佐·鼬') && (event.name == 'damage' || !event.numFixed);
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.draw();
                                        trigger.player.removeMark('须佐·鼬', 1);
                                    },
                                },
                                remove: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    content() {
                                        player.removeMark('须佐·鼬', 3);
                                        player.removeSkill('须佐·鼬_mark');
                                    },
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        封穴: {
                            trigger: {
                                source: 'damageSource',
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', '回复'],
                            forced: true,
                            logTarget: 'target',
                            derivation: ['zmjingu'],
                            content() {
                                trigger.player.addTempSkill('zmjingu', 'phaseEnd');
                                trigger.player.markSkill('zmjingu');
                            },
                        },
                        咏春·弹反: {
                            trigger: {
                                target: 'useCardToBefore',
                                player: 'damageBefore',
                            },
                            filter(event, player, onrewrite) {
                                if (onrewrite == 'damageBefore') {
                                    return player.storage.zym_np >= 20;
                                }
                                if (onrewrite == 'useCardToBefore') {
                                    return get.tag(event.card, 'damage') && player.storage.zym_np >= 20;
                                }
                            },
                            content() {
                                'step 0';
                                player.storage.zym_np -= 20;
                                trigger.cancel();
                                ('step 1');
                                player.phase('nodelay');
                            },
                        },
                        连续普通拳: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                        },
                        咏春: {
                            trigger: {
                                player: 'phaseUse',
                            },
                            group: ['咏春·弹反', '连续普通拳'],
                            content() {
                                player.getHandCardLimit();
                            },
                        },
                        一代宗师: {
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 120;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.awakenSkill('一代宗师');
                                player.storage.zym_np -= 120;
                                game.playzsp(['一代宗师'].randomGet());
                                game.mp414('一代宗师');
                                target.damage(2);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        拷贝: {
                            forced: true,
                            _priority: 10,
                            trigger: {
                                player: ['phaseBefore', 'enterGame'],
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', '回复'],
                            content() {
                                var n = [1, 2, 3, 4, 5].randomGet();
                                if (n == 1) {
                                    player.addTempSkill('火遁·豪火球', { player: 'phaseBefore' });
                                    player.markSkill('火遁·豪火球', { player: 'phaseBefore' });
                                }
                                if (n == 2) {
                                    player.addTempSkill('水遁·水龙弹', { player: 'phaseBefore' });
                                    player.markSkill('水遁·水龙弹', { player: 'phaseBefore' });
                                }
                                if (n == 3) {
                                    player.addTempSkill('风遁·大突破', { player: 'phaseBefore' });
                                    player.markSkill('风遁·大突破', { player: 'phaseBefore' });
                                }
                                if (n == 4) {
                                    player.addTempSkill('土遁·土流弊', { player: 'phaseBefore' });
                                    player.markSkill('土遁·土流弊', { player: 'phaseBefore' });
                                }
                                if (n == 5) {
                                    player.addTempSkill('雷遁·雷切', { player: 'phaseBefore' });
                                    player.markSkill('雷遁·雷切', { player: 'phaseBefore' });
                                }
                            },
                        },
                        火遁·豪火球: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 10;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.storage.zym_np -= 10;
                                target.damage(1, 'fire');
                                target.addTempSkill('爆伤', 'phaseEnd');
                                target.markSkill('爆伤');
                            },
                        },
                        水遁·水龙弹: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 10;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.storage.zym_np -= 10;
                                target.damage(1, 'ice');
                                player.draw();
                            },
                        },
                        风遁·大突破: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 10;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.storage.zym_np -= 10;
                                target.damage(1);
                                target.addTempSkill('加重破_noequip');
                            },
                        },
                        土遁·土流弊: {
                            trigger: {
                                target: 'useCardToBefore',
                                player: 'damageBefore',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 20;
                            },
                            content() {
                                'step 0';
                                player.chat('土遁·土流弊');
                                ('step 1');
                                player.storage.zym_np -= 20;
                                trigger.cancel();
                                player.draw();
                            },
                        },
                        雷遁·雷切: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 10;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.storage.zym_np -= 10;
                                target.damage(1, 'thunder');
                                target.addTempSkill('zmjingu', 'phaseEnd');
                                target.markSkill('zmjingu');
                            },
                        },
                        顶上化佛: {
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 300;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.awakenSkill('顶上化佛');
                                player.storage.zym_np -= 300;
                                game.playzsp(['顶上化佛'].randomGet());
                                game.mp414('顶上化佛');
                                target.addTempSkill('fengyin');
                                target.damage(5);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        神威雷切: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zym_np >= 120;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.awakenSkill('神威雷切');
                                player.storage.zym_np -= 120;
                                game.playzsp(['神威雷切'].randomGet());
                                game.mp414('神威雷切');
                                target.addTempSkill('fengyin');
                                target.damage(3, 'thunder');
                            },
                        },
                        神威·攻: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 20;
                            },
                            content() {
                                'step 0';
                                player.storage.zym_np -= 20;
                                player
                                    .chooseTarget(get.prompt('神威·攻'), function (card, player, target) {
                                        if (trigger.target == target && trigger.target.getCards('he').length == 0) return false;
                                        return target != player && get.distance(trigger.target, target) <= 1;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.targets = result.targets[0];
                                    if (result.targets[0].getCards('he').length >= 1) {
                                        result.targets[0].chooseToDiscard(true, 'he');
                                    }
                                }
                            },
                        },
                        红刃: {
                            audio: 'ext:破剑茶寮/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            group: ['红刃·缭乱', '红刃·赤华', '红刃·碎光散', '红刃·回响'],
                            forced: true,
                            content() {
                                player.storage.zym_np += 10;
                            },
                        },
                        红刃·赤华: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: -1,
                            filterCard(card) {
                                return false;
                            },
                            filter(event, player) {
                                return player.storage.赤 > 0 && !player.hasSkill('红刃·缭乱3');
                            },
                            content() {
                                player.removeMark('赤', 1);
                                player.chooseUseTarget({ name: 'sha' }, false, 'nodistance');
                                player.addTempSkill('红刃·赤华2', 'phaseEnd');
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
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
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
                                                        !target.mayHaveShan() ||
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
                                                        jiu: true,
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
                                        target.mayHaveShan() &&
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
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
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
                                    player(player) {
                                        //QQQ
                                        return player.getUseValue({ name: 'sha' });
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
                        '红刃·赤华2': {
                            charlotte: true,
                        },
                        红刃·缭乱: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: -1,
                            filterCard(card) {
                                return false;
                            },
                            filter(event, player) {
                                return player.storage.赤 >= 3 && !player.hasSkill('红刃·赤华2');
                            },
                            content() {
                                player.removeMark('赤', 3);
                                player.addTempSkill('红刃·缭乱3', 'phaseEnd');
                                player.addTempSkill('冈格尼尔_zhu');
                                player.chooseUseTarget({ name: 'sha' }, false, 'nodistance');
                                player.chooseUseTarget({ name: 'sha' }, false, 'nodistance');
                                player.draw();
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
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
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
                                                        !target.mayHaveShan() ||
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
                                                        jiu: true,
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
                                        target.mayHaveShan() &&
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
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
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
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
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
                                            target.mayHaveShan() &&
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
                        '红刃·缭乱3': {
                            charlotte: true,
                        },
                        '红刃·缭乱2': {
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2'],
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                if (trigger.targets && trigger.card && trigger.card.name != 'wuxie' && trigger.card.name != 'shan' && get.type(trigger.card) != 'delay' && trigger.targets.length == trigger.parent.triggeredTargets4.length) {
                                    trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                    trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                                }
                            },
                        },
                        红刃·碎光散: {
                            audio: 'ext:破剑茶寮/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: -1,
                            filterCard(card) {
                                return false;
                            },
                            filter(event, player) {
                                return player.storage.渊 > 0;
                            },
                            content() {
                                player.removeMark('渊', 1);
                                player.chooseUseTarget({ name: 'jiu' }, false);
                            },
                        },
                        红刃·回响: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: -1,
                            filterCard(card) {
                                return false;
                            },
                            filter(event, player) {
                                return player.storage.渊 >= 3;
                            },
                            content() {
                                player.removeMark('渊', 3);
                                player.chooseUseTarget({ name: 'jiu' }, false);
                                player.chooseUseTarget({ name: 'jiu' }, false);
                                player.draw();
                            },
                        },
                        '红刃·回响2': {
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'jiu';
                            },
                            content() {
                                if (trigger.targets && trigger.card && trigger.card.name != 'wuxie' && trigger.card.name != 'shan' && get.type(trigger.card) != 'delay' && trigger.targets.length == trigger.parent.triggeredTargets4.length) {
                                    trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                    trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                                }
                            },
                        },
                        赤渊: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (player.storage.赤渊_card && typeof card == 'object') {
                                        var cardx = player.storage.赤渊_card[player.storage.赤渊_card.length - 1];
                                        if (get.color(cardx) != 'none' && get.color(card) != 'none' && get.color(cardx) != get.color(card)) {
                                            return num + 10;
                                        }
                                    }
                                },
                            },
                            derivation: ['剑气'],
                            group: ['赤渊_count', '赤渊·刀光意'],
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.card.bolliangyuan || !event.cards.length) return false;
                                var storage = player.storage.赤渊_card;
                                if (!storage || storage.length <= 1) return false;
                                var card = storage[storage.length - 1];
                                if (card == event.card) card = storage[storage.length - 2];
                                if (!card) return false;
                                var color1 = get.color(card),
                                    color2 = get.color(event.card);
                                return color1 && color2 && color1 != 'none' && color2 != 'none' && color1 != color2;
                            },
                            check(event, player) {
                                if (get.type(event.card) == 'delay' || get.position(event.card) == 'e') return false;
                                return game.hasPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && (current.hasSkill('bolqianmeng') || current.hasSkill('bolliangyuan'));
                                });
                            },
                            content() {
                                var cards = trigger.cards;
                                switch (get.color(cards[0])) {
                                    case 'black':
                                        player.addMark('渊');
                                    case 'red':
                                        player.addMark('赤');
                                        player.draw();
                                }
                            },
                            subSkill: {
                                card: {
                                    init(player) {
                                        if (!player.storage.赤渊_card) player.storage.赤渊_card = [];
                                    },
                                    charlotte: true,
                                },
                                count: {
                                    charlotte: true,
                                    trigger: {
                                        global: 'useCard1',
                                    },
                                    forced: true,
                                    _priority: 666,
                                    content() {
                                        player.addTempSkill('赤渊_card');
                                        player.storage.赤渊_card.push(trigger.card);
                                    },
                                },
                            },
                        },
                        赤: {
                            marktext: '赤',
                            intro: {
                                content: 'mark',
                            },
                        },
                        渊: {
                            marktext: '渊',
                            intro: {
                                content: 'mark',
                            },
                        },
                        赤渊·刀光意: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:破剑茶寮/audio:1',
                            filter(event, player) {
                                return player.storage.赤 && player.storage.渊 >= 3;
                            },
                            content() {
                                player.removeMark('赤', 3);
                                player.removeMark('渊', 3);
                                player.addTempSkill('剑气', 'phaseEnd');
                                player.addMark('剑', 8);
                                player.removeSkill('赤渊');
                                player.removeSkill('红刃');
                            },
                        },
                        剑: {
                            marktext: '剑气',
                            intro: {
                                content: 'mark',
                            },
                        },
                        剑气: {
                            enable: 'phaseUse',
                            group: ['剑气3'],
                            selectCard: -1,
                            filterCard(card) {
                                return false;
                            },
                            filter(event, player) {
                                return player.storage.剑 > 0;
                            },
                            content() {
                                player.removeMark('剑', 1);
                                player.chooseUseTarget({ name: 'sha' }, false, 'nodistance');
                            },
                        },
                        剑气3: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.addSkill('红刃');
                                player.addSkill('赤渊');
                            },
                        },
                        登场·阿尔法: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                game.playzsp(['登场·阿尔法'].randomGet());
                                game.mp414('登场·阿尔法');
                                ui.backgroundMusic.src = 'extension/破剑茶寮/audio/Bury the Light.mp3';
                                player.addMark('赤');
                                player.addMark('渊');
                                player.removeSkill('登场·阿尔法');
                            },
                        },
                        渊裂: {
                            audio: 'ext:破剑茶寮/audio:1',
                            enable: 'phaseUse',
                            group: ['zym_np', 'zym_np1', 'zym_np2'],
                            filter(event, player) {
                                return player.storage.zym_np >= 100;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.storage.zym_np -= 100;
                                game.mp414('大招');
                                ui.backgroundMusic.src = 'extension/破剑茶寮/audio/power.mp3';
                                target.damage(3);
                            },
                        },
                        绯连枪: {
                            audio: 'ext:破剑茶寮/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            group: ['旋枪截杀', '紫电连舞'],
                            forced: true,
                            content() {
                                player.storage.zym_np += 10;
                            },
                        },
                        耀枪贯闪: {
                            audio: 'ext:破剑茶寮/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                var num = 1;
                                if (!player.countCards('h')) {
                                    num = 2;
                                }
                                player.draw(num);
                            },
                        },
                        终阶解放: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                var list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.gain(game.createCard(list.randomGet()));
                                player.gain(game.createCard(list.randomGet()));
                                player.removeSkill('终阶解放');
                            },
                        },
                        垂灯耀目: {
                            audio: 'ext:破剑茶寮/audio:2',
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', 'gain'],
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'useCard' || event.name == 'respond') {
                                    return event.card.name == 'shan';
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzsp(['领域'].randomGet());
                                game.mp414('领域');
                                ui.background.setBackgroundImage('extension/破剑茶寮/image/领域.jpg');
                                player.draw();
                                player.tempHide();
                                ('step 1');
                                player.chooseToUse(); //QQQ
                            },
                        },
                        gain: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                var count = player.countCards('h', { name: 'sha' });
                                return count < 3;
                            },
                            content() {
                                'step 0';
                                //var shaCards = player.getCards('h',{name:'sha'});
                                var gainList = [];
                                if (player.storage.xwjh_suigu) {
                                    gainList.push(game.createCard('sha', 'heart', 3));
                                } else {
                                    gainList.push(game.createCard('sha', 'spade', 3));
                                    gainList.push(game.createCard('sha', 'diamond', 3));
                                }
                                player.gain(gainList, 'draw3');
                                //game.log(player,'复制了',gainList,'.');
                            },
                        },
                        垂灯耀目闪: {
                            usable: 1,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card) {
                                return card.name == 'sha';
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hs', { name: 'sha' })) {
                                    return false;
                                }
                                return true;
                            },
                            position: 'hs',
                            prompt: '将一张杀当闪使用或打出',
                            check(card) {
                                return true;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('he')) return false;
                                },
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
                        赫卡忒: {
                            type: 'equip',
                            xwBaibingpu: 12,
                            subtype: 'equip1',
                            xwSingle: true,
                            skills: ['赫卡忒_skill'],
                            distance: {
                                attackFrom: -2,
                            },
                            toself: true,
                            fullskin: true,
                            ai: {
                                basic: {
                                    equipValue: 7.5,
                                },
                            },
                        },
                        赫卡忒_skill: {
                            equipSkill: true,
                            trigger: {
                                player: 'respondAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.getParent('赫卡忒_skill', true)) return false;
                                if (!event.cards) return false;
                                if (event.cards.length != 1) return false;
                                if (event.cards[0].name != 'sha') return false;
                                if (get.position(event.cards[0]) != 'd') return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseUseTarget(trigger.cards[0]).set('prompt', get.prompt('赫卡忒_skill'))
                            },
                        },
                        三烛杖剑: {
                            trigger: {
                                player: ['useCard'],
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 10;
                            },
                        },
                        剑痕刻渊: {
                            enable: 'phaseUse',
                            usable: 1,
                            group: ['zym_np', 'zym_np1', 'zym_np2'],
                            filter(event, player) {
                                return player.storage.zym_np >= 60;
                            },
                            content() {
                                'step 0';
                                player.storage.zym_np -= 60;
                                ('step 1');
                                player.removeSkill('三烛杖剑');
                                player.removeSkill('剑痕刻渊');
                                player.addSkill('照渊');
                                player.removeSkill('垂灯耀目');
                                player.addSkill('灯影剑舞');
                                player.addSkill('残光剑影');
                                player.addSkill('残光');
                            },
                        },
                        照渊: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 90;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, '选择一名其他角色对其造成伤害', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playzsp(['必杀咖喱剑'].randomGet());
                                    game.mp414('必杀咖喱剑');
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                }
                                ('step 2');
                                if (result.bool && event.num2 < event.targets.length) {
                                    var num1 = Math.floor(player.storage.zym_np / 30);
                                    player.storage.zym_np = 0;
                                    event.targets[event.num2].damage(num1);
                                    event.num2++;
                                    event.redo();
                                }
                                ('step 3');
                                player.addSkill('剑痕刻渊');
                                player.addSkill('三烛杖剑');
                                player.addSkill('垂灯耀目');
                                player.removeSkill('照渊');
                                player.removeSkill('灯影剑舞');
                                player.removeSkill('残光剑影');
                                player.removeSkill('残光');
                            },
                        },
                        灯影剑舞: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 2;
                                },
                            },
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                if (trigger.targets && trigger.card && trigger.card.name != 'wuxie' && trigger.card.name != 'shan' && get.type(trigger.card) != 'delay' && trigger.targets.length == trigger.parent.triggeredTargets4.length) {
                                    trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                    trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                                }
                            },
                        },
                        残光剑影: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        登场·比安卡: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                game.playzsp(['入场'].randomGet());
                                game.mp414('入场');
                                ui.backgroundMusic.src = 'extension/破剑茶寮/audio/战歌.mp3';
                                player.removeSkill('登场·比安卡');
                            },
                        },
                        充能: {
                            audio: 'ext:破剑茶寮/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                var num = 1;
                                if (!player.countCards('h')) {
                                    num = 2;
                                }
                                player.draw(num);
                            },
                        },
                        涤罪之枪: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.countCards('h', 'sha');
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 120;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, '选择一名其他角色对其造成伤害', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playzsp(['涤罪之枪'].randomGet());
                                    game.mp414('涤罪之枪');
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                }
                                ('step 2');
                                if (result.bool && event.num2 < event.targets.length) {
                                    var num1 = Math.floor(player.storage.zym_np / 30);
                                    player.storage.zym_np = 0;
                                    event.targets[event.num2].damage(num1);
                                    player.changeHujia(num1);
                                    event.num2++;
                                    event.redo();
                                }
                            },
                            group: ['涤罪之枪_1', '涤罪之枪_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        if (player.countCards('h', 'sha') == 0) return false;
                                        return player.hasCard(function (card) {
                                            return card.number >= event.card.number && card.name == 'sha';
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        var tipstr = '是否对' + get.translation(trigger.player) + '使用一张点数不小于' + get.translation(trigger.card.number) + '的杀以取消此杀？';
                                        var next = player.chooseCard(tipstr, 'h', function (card) {
                                            return card.number >= trigger.card.number && card.name == 'sha';
                                        });
                                        next.set('ai', function () {
                                            var event = _status.event;
                                            var num = -get.attitude(player, trigger.player) + get.attitude(player, trigger.source);
                                            return num;
                                        });
                                        next.autochoose = lib.filter.autoRespondSha;
                                        next.source = trigger.player;
                                        ('step 1');
                                        if (result.bool) {
                                            game.playzm2(['zm xunlei', 'zm xunlei', 'zm xunlei3'].randomGet());
                                            game.mp414('zxunlei');
                                            player.useCard(result.card || result.cards[0], trigger.player);
                                            trigger.untrigger();
                                            trigger.finish();
                                            event.finish();
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        if (!player.storage.涤罪之枪) {
                                            player.storage.涤罪之枪 = [];
                                        }
                                        player.storage.涤罪之枪.add(trigger.player);
                                    },
                                    popup: false,
                                },
                            },
                        },
                        冈格尼尔: {
                            trigger: {
                                player: 'useCard',
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', '凛冽回复'],
                            check(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return player != current && get.attitude(player, current) == 0 && lib.filter.targetEnabled2(event.card, player, current);
                                    }) <= 1
                                );
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.isPhaseUsing(player);
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            content() {
                                'step 0';
                                player.storage.冈格尼尔 = true;
                                player.addTempSkill('冈格尼尔_zhu');
                                ('step 1');
                                var originTargets = trigger.targets;
                                if (!originTargets) {
                                    originTargets = [];
                                }
                                trigger.冈格尼尔 = true;
                                var p = player;
                                player
                                    .chooseTarget('请选择为此【杀】额外指定的目标', [0, Infinity], function (card, player, target) {
                                        return player != target && !originTargets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(p, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets, 'green');
                                    if (trigger.targets) {
                                        trigger.targets = trigger.targets.concat(result.targets);
                                    } else {
                                        trigger.targets = result.targets.slice(0);
                                    }
                                }
                                ('step 3');
                                //player.loseMaxHp();
                            },
                            ai: {
                                threaten: 2.5,
                            },
                            subSkill: {
                                noequip: {
                                    ai: {
                                        unequip2: true,
                                    },
                                    charlotte: true,
                                    mark: true,
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    skillBlocker(skill, player) {
                                        if (lib.skill[skill].charlotte) return false;
                                        if (player.getEquip(2)) {
                                            var info = get.info(player.getEquip(2));
                                            if (info && info.skills) {
                                                if (info.skills.includes(skill)) {
                                                    return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    intro: {
                                        name: '破甲',
                                        content: '防具无效',
                                    },
                                    marktext: '破甲',
                                },
                                zhu: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return event.card.name == 'sha' && event.parent.冈格尼尔;
                                    },
                                    popup: false,
                                    forced: true,
                                    content() {
                                        trigger.target.addTempSkill('冈格尼尔_noequip');
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.name == 'sha') return true;
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        登场·罗塞塔: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                game.playzsp(['进攻'].randomGet());
                                game.mp414('进攻');
                                ui.backgroundMusic.src = 'extension/破剑茶寮/audio/蓑部雄崇 - Z-ONE(ゾーン)のバトル.mp3';
                                player.changeHujia(3);
                                player.removeSkill('登场·罗塞塔');
                            },
                        },
                        凛冽之心: {
                            marktext: '凛冽',
                            trigger: {
                                source: 'damageSource',
                                player: 'enterGame',
                                global: 'phaseBefore',
                            },
                            group: ['凛冽回复', '凛冽杀'],
                            forced: true,
                            filter(event, player) {
                                return (event.name != 'damage' && (event.name != 'phase' || game.phaseNumber == 0)) || event.num > 0;
                            },
                            content() {
                                player.addMark('凛冽之心', trigger.name == 'damage' ? trigger.num : 3);
                            },
                            intro: {
                                name: '凛冽',
                                content: 'mark',
                            },
                        },
                        凛冽回复: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 30;
                            },
                        },
                        凛冽杀: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('凛冽之心') > 0;
                            },
                            content(links, player) {
                                player.removeMark('凛冽之心', 1);
                                player.addTempSkill('luoyi2', 'phaseEnd');
                            },
                        },
                        紫电连舞: {
                            mod: {
                                cardnature(card, player) {
                                    if (card.name == 'sha') return 'thunder';
                                },
                            },
                        },
                        雷霆迅突: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                player.chooseUseTarget({ name: 'sha' }, false, 'nodistance');
                            },
                        },
                        旋枪截杀: {
                            audio: 'ext:破剑茶寮/audio:2',
                            group: '旋枪截杀1',
                            init(player, skill) {
                                if (!player.storage.旋枪截杀) player.storage.旋枪截杀 = [];
                            },
                            intro: {
                                content: '已对$发动过技能',
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('是否发动〖旋枪截杀〗？选择一名角色', function (card, player, target) {
                                        return !player.storage.旋枪截杀.includes(target) && target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.storage.旋枪截杀.add(target);
                                    player.markSkill('旋枪截杀');
                                    var num = Math.max(1, Math.floor(target.countMark('旋枪截杀2') / 2));
                                    target.damage(num, 'thunder');
                                    if (target.countCards('he') > 0) {
                                        player.gainPlayerCard('he', true, target, Math.min(num, target.countCards('he')));
                                    }
                                }
                            },
                        },
                        旋枪截杀1: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('旋枪截杀2')) {
                                        current.addSkill('旋枪截杀2');
                                    }
                                });
                            },
                        },
                        旋枪截杀2: {
                            marktext: '劫',
                            intro: {
                                name: '劫',
                                content: '累计获得了#张牌',
                            },
                            trigger: {
                                player: 'gainAfter',
                            },
                            filter(event, player) {
                                return event.source != undefined && event.source.hasSkill('旋枪截杀');
                            },
                            content() {
                                player.addMark('旋枪截杀2', trigger.cards.length);
                            },
                        },
                        枪舞: {
                            audio: 'ext:破剑茶寮/audio:2',
                            group: '枪舞2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            usable: 2,
                            filter(event, player) {
                                var list = ['sha', 'juedou'];
                                for (var i = 0; i < list.length; i++) {
                                    if (event.filterCard && event.filterCard({ name: list[i] }, player)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = ['sha', 'juedou'];
                                    list[0] = ['基本', '', list[0]];
                                    list[1] = ['锦囊', '', list[1]];
                                    return ui.create.dialog('枪舞', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    return 10;
                                },
                                backup(links, player) {
                                    return {
                                        audio: '枪舞',
                                        filterCard(card, player) {
                                            return get.type(card) != 'basic';
                                        },
                                        position: 'hes',
                                        selectCard: 1,
                                        popname: true,
                                        ai(card) {
                                            return 8 - get.value(card);
                                        },
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张非基本牌当作' + get.translation(links[0][2]) + '使用或打出';
                                },
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player) {
                                        return 2;
                                    },
                                },
                                threaten: 1.6,
                            },
                        },
                        枪舞2: {
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            firstDo: true,
                            filter(event, player) {
                                return event.card && event.skill && (event.card.name == 'sha' || event.card.name == 'juedou') && get.color(event.card) == 'red' && event.cards && event.cards.length == 1 && get.type(event.cards[0]) != 'basic';
                            },
                            content() {
                                trigger.baseDamage++;
                            },
                        },
                        永战: {
                            trigger: {
                                source: 'damageSource',
                            },
                            audio: 'ext:破剑茶寮/audio:1',
                            forced: true,
                            content() {
                                player.storage.zym_np += 10;
                                player.addMark('电');
                            },
                        },
                        电: {
                            marktext: '电荷缠绕',
                            intro: {
                                content: 'mark',
                            },
                        },
                        降雷坠: {
                            audio: 'ext:破剑茶寮/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: -1,
                            filterCard(card) {
                                return false;
                            },
                            filter(event, player) {
                                return player.storage.电 >= 3;
                            },
                            content() {
                                player.removeMark('电', 3);
                                player.chooseUseTarget({ name: 'sha' }, false);
                                player.changeHujia(1);
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.7,
                            },
                        },
                        登场·薇拉: {
                            trigger: {
                                global: 'gameStart',
                            },
                            audio: 'ext:破剑茶寮/audio:1',
                            forced: true,
                            content() {
                                game.playzsp(['登场·薇拉'].randomGet());
                                game.mp414('登场·薇拉');
                                ui.backgroundMusic.src = 'extension/破剑茶寮/audio/Aimee Blackschleger - Layers.mp3';
                                player.removeSkill('登场·薇拉');
                            },
                        },
                        贯闪: {
                            audio: 'ext:破剑茶寮/audio:1',
                            group: ['zym_np', 'zym_np1', 'zym_np2', '永战', '降雷坠', '登场·薇拉'],
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 120 && player.storage.电 >= 3;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, '选择一名其他角色对其造成伤害', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.mp414('贯闪');
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                }
                                ('step 2');
                                if (result.bool && event.num2 < event.targets.length) {
                                    var num1 = Math.floor(player.storage.电 / 1);
                                    player.storage.zym_np = 0;
                                    event.targets[event.num2].damage(num1);
                                    player.changeHujia(num1);
                                    event.num2++;
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.7,
                            },
                        },
                        残光: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 15;
                            },
                        },
                        霸道之力: {
                            audio: 'ext:法王兽/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('霸道之力'), lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (player.isHealthy()) return 0;
                                    if (player.hp < 3 && player.getDamagedHp() < 2) return 0;
                                    var list = [];
                                    if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                                    if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                                    if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                                    list = list.filter(function (i) {
                                        return !player.hasSkill(i);
                                    });
                                    if (!list.length) return 0;
                                    return 1 + Math.random();
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    var list = [];
                                    if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                                    if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                                    if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                                    player.addSkill(list);
                                }
                            },
                        },
                        月牙: {
                            group: ['zym_np', 'zym_np1', 'zym_np2', '回复', '聚灵'],
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'black';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) return false;
                                } else {
                                    if (!player.countCards('hes', { color: 'black' })) return false;
                                }
                            },
                            prompt: '将一张黑色牌当杀使用或打出',
                            check(card) {
                                var val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                return 5 - val;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('hes')) return false;
                                    } else {
                                        if (!player.countCards('hes', { color: 'black' })) return false;
                                    }
                                },
                                respondSha: true,
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
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
                                                        !target.mayHaveShan() ||
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
                                                        jiu: true,
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
                                        target.mayHaveShan() &&
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
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
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
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
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
                                            target.mayHaveShan() &&
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
                        月牙天冲: {
                            group: ['月牙天冲_damage', '月牙天冲_qianghua'],
                            mod: {
                                targetInRange(card) {
                                    if (card.suit == 'spade' && card.name == 'sha') return true;
                                },
                            },
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card.suit == 'club';
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                qianghua: {
                                    shaRelated: true,
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.target) <= 0 && player.storage.zym_np > 0;
                                    },
                                    filter(event, player) {
                                        return event.card.name == 'sha';
                                    },
                                    logTarget: 'target',
                                    content() {
                                        'step 0';
                                        player.chat('月牙天冲!!');
                                        player.addTempSkill('强化月牙天冲');
                                        ('step 1');
                                        player.draw();
                                    },
                                },
                            },
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                } else {
                                    if (!player.countCards('he', { color: 'black' })) return false;
                                }
                            },
                            prompt: '将一张黑色牌当【杀】使用或打出',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('he')) return false;
                                    } else {
                                        if (!player.countCards('he', { color: 'black' })) return false;
                                    }
                                },
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
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
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
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
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
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
                                            target.mayHaveShan() &&
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
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
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
                                                        !target.mayHaveShan() ||
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
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
                            },
                        },
                        强化值: {
                            marktext: '强化值',
                            intro: {
                                content: 'mark',
                            },
                        },
                        强化月牙天冲: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            content() {
                                var num = player.storage.zym_np / 30;
                                player.storage.zym_np = 0;
                                game.playzsp(['月牙天冲'].randomGet());
                                game.mp414('月牙天冲');
                                trigger.num += num;
                                player.removeSkill('强化月牙天冲');
                            },
                            intro: {
                                content: '【杀】造成伤害时令伤害值+#',
                            },
                        },
                        瞬閧: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && player.isDisabled(1)) return num + 1;
                                },
                                globalFrom(from, to, distance) {
                                    if (from.isDisabled(4)) return distance - 1;
                                },
                                globalTo(from, to, distance) {
                                    if (to.isDisabled(3)) return distance + 1;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
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
                                player.draw(2);
                            },
                            group: ['瞬閧_sha', '瞬閧_shan'],
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        瞬閧_sha: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && player.isDisabled(1) && event.target.countCards('he') > 0;
                            },
                            logTarget: 'target',
                            content() {
                                trigger.target.chooseToDiscard('he', true);
                            },
                        },
                        瞬閧_shan: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            viewAs: {
                                name: 'shan',
                            },
                            filterCard: true,
                            position: 'hes',
                            prompt: '将一张牌当做闪使用或打出',
                            viewAsFilter(player) {
                                return player.isDisabled(2) && player.countCards('hes') > 0;
                            },
                            check(card) {
                                return 1 / Math.max(0.1, get.value(card));
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    return player.isDisabled(2) && player.countCards('he') > 0;
                                },
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
                        二击必杀: {
                            trigger: {
                                source: 'damageSource',
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', '回复'],
                            forced: true,
                            logTarget: 'target',
                            content() {
                                trigger.player.addMark('fenghuawen', 1);
                                trigger.player.addTempSkill('蜂华纹', { player: 'phaseBefore' });
                            },
                        },
                        fenghuawen: {
                            mark: true,
                            marktext: '蜂华纹',
                            intro: {
                                content: 'mark',
                            },
                        },
                        蜂华纹: {
                            charlotte: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return player.countMark('fenghuawen') > 1; //QQQ
                            },
                            forced: true,
                            content() {
                                player.removeMark('fenghuawen', 2);
                                player.loseHp(3);
                            },
                        },
                        雀蜂雷公鞭: {
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 120;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                player.awakenSkill('雀蜂雷公鞭');
                                player.storage.zym_np -= 120;
                                ui.backgroundMusic.src = 'extension/破剑茶寮/audio/power.mp3';
                                target.damage(4);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        卍解·天锁斩月: {
                            group: ['zym_np', 'zym_np1', 'zym_np2', '回复', '卍解·天锁斩月1'],
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zym_np >= 120;
                            },
                            content() {
                                player.storage.zym_np -= 120;
                                game.playzsp(['卍解斩月'].randomGet());
                                game.mp414('卍解斩月');
                                player.draw(3);
                                player.init('卍解一护');
                                if (!player.isDisabled(1) && !player.hasCard('tiansuozhanyue', 'e')) {
                                    player.equip(game.createCard('tiansuozhanyue', 'heart', 1));
                                }
                            },
                        },
                        '卍解·天锁斩月1': {
                            trigger: {
                                player: ['useCard'],
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 10;
                            },
                        },
                        癫狂: {
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'heart') return 'spade';
                                },
                            },
                        },
                        黑月牙: {
                            group: ['qinggang_skill', 'zym_np', 'zym_np1', 'zym_np2', '回复', 'tiansuozhanyue_skill', '黑月牙2', '聚灵'],
                            mod: {
                                targetInRange(card) {
                                    if (card.suit == 'spade' && card.name == 'sha') return true;
                                },
                            },
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                } else {
                                    if (!player.countCards('he', { color: 'black' })) return false;
                                }
                            },
                            prompt: '将一张黑色牌当【杀】使用或打出',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('he')) return false;
                                    } else {
                                        if (!player.countCards('he', { color: 'black' })) return false;
                                    }
                                },
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
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
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
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
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
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
                                            target.mayHaveShan() &&
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
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
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
                                                        !target.mayHaveShan() ||
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
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
                            },
                        },
                        黑月牙2: {
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0 && player.storage.zym_np > 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.chat('月牙天冲!');
                                player.addTempSkill('强化黑月牙', { player: 'phaseBefore' });
                                ('step 1');
                                player.draw();
                            },
                        },
                        强化黑月牙: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            content() {
                                var num1 = player.storage.zym_np / 30;
                                player.storage.zym_np = 0;
                                trigger.num += num1;
                            },
                            intro: {
                                content: '【杀】造成伤害时令伤害值+#',
                            },
                        },
                        天锁: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', '回复', '聚灵'],
                            forced: true,
                            filter(event, player) {
                                if (!player.isEmpty(1)) return false;
                                return true;
                            },
                            content() {
                                if (!player.isDisabled(1) && !player.hasCard('tiansuozhanyue', 'e')) {
                                    player.equip(game.createCard('tiansuozhanyue', 'heart', 1));
                                }
                            },
                        },
                        tiansuozhanyue_skill: {
                            trigger: {
                                player: ['phaseDrawBegin', 'phaseUseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('摸1张牌', '视为使用1张不计入次数的杀').ai = function (event, player) {
                                    if (player.hp >= 2) return '额外充能30点,失去1点体力';
                                    return '摸1张牌且回复1点体力';
                                };
                                ('step 1');
                                if (result.control == '摸1张牌') {
                                    player.draw();
                                }
                                if (result.control == '视为使用1张不计入次数的杀') {
                                    player.chooseUseTarget({ name: 'sha' }, false);
                                }
                            },
                        },
                        tiansuozhanyue2_skill: {
                            limited: true,
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (event.type != 'dying') return false;
                                if (player != event.dying) return false;
                                return true;
                            },
                            content() {
                                player.awakenSkill('tiansuozhanyue2_skill');
                                player.hp = player.maxHp;
                                player.init('白一护');
                            },
                            ai: {
                                order: 1,
                                save: true,
                                skillTagFilter(player, arg, target) {
                                    return player == target;
                                },
                                result: {
                                    player: 10,
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
                        聚灵: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 10;
                            },
                        },
                        无我荒途: {
                            audio: 'ext:破剑茶寮/audio:3',
                            trigger: {
                                target: 'useCardToPlayered',
                            },
                            forced: true,
                            group: ['wuwohuangtu2', 'qiuyingcankong', 'zym_np', 'zym_np1', 'zym_np2', '回复', '蚩龙渺渊'],
                            check(event, player) {
                                return get.effect(player, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                if (!get.tag(event.card, 'damage')) return false;
                                var card = get.color(event.card);
                                return player.countCards('he', { color: card });
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var card = get.color(trigger.card);
                                player.chooseToDiscard(1, 'he', { color: card });
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.excluded.add(player);
                                    var list = [];
                                    for (var i = 0; i < trigger.cards.length; i++) {
                                        if (trigger.cards[i].isInPile()) {
                                            list.push(trigger.cards[i]);
                                        }
                                    }
                                    player.chooseUseTarget({ name: 'sha' }, false, 'nodistance');
                                } else event.finish();
                            },
                        },
                        wuwohuangtu2: {
                            intro: {
                                content: '共有#点<无光>值',
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'h',
                            selectCard: [0, Infinity],
                            filterCard(card) {
                                return card.name == 'shan';
                            },
                            filter(event, player) {
                                return player.countCards('h', function (card) {
                                    return card.name == 'shan';
                                });
                            },
                            content() {
                                'step 0';
                                player.draw(cards.length);
                                player.chooseUseTarget('【无我】:视为使用一张【杀】', { name: 'sha' }, false);
                                ('step 1');
                                player.addMark('wuwohuangtu2', cards.length);
                                player.markSkill('wuwohuangtu2');
                            },
                        },
                        mly_jihua: {
                            audio: 'ext:阿尔法/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('wuwohuangtu2') >= 1;
                            },
                            content() {
                                'step 0';
                                event.num = player.countMark('wuwohuangtu2');
                                player.removeMark('wuwohuangtu2', player.countMark('wuwohuangtu2'));
                                player.unmarkSkill('wuwohuangtu2');
                                ('step 1');
                                var card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) player.gain(card, 'gain2');
                                ('step 3');
                                player.addSkill('mly_jihua_sha');
                                player.storage.mly_jihua_sha = event.num;
                                player.markSkill('mly_jihua_sha');
                                player.removeSkill('mly_jihua');
                            },
                        },
                        mly_jihua_sha: {
                            intro: {
                                content: '下一张【杀】增加',
                            },
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                return player.storage.mly_jihua_sha && player.storage.mly_jihua_sha > 0;
                            },
                            content() {
                                'step 0';
                                var evt = trigger.parent;
                                var num = Math.ceil(player.storage.mly_jihua_sha / 2);
                                if (num > 0) {
                                    if (typeof evt.baseDamage != 'number') evt.baseDamage = 1;
                                    evt.baseDamage += num;
                                }
                                ('step 1');
                                player.storage.mly_jihua_sha = 0;
                                player.removeSkill('mly_jihua_sha');
                                player.addSkill('mly_jihua');
                            },
                            ai: {
                                threaten: 0.5,
                            },
                        },
                        qiuyingcankong: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 5;
                            },
                        },
                        xiaotaidao: {
                            mod: {
                                attackFrom(from, to, num) {
                                    return num - Math.min(3, from.getDamagedHp() + 1);
                                },
                            },
                        },
                        mly_qiuying: {
                            group: '',
                            enable: 'phaseUse',
                            //usable: 4,//QQQ
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            filter(event, player) {
                                if (player.storage.mly_qiuying == true) {
                                    return player.storage.zym_np >= 20;
                                } else return player.storage.zym_np >= 70;
                            },
                            selectTarget(card, player) {
                                var player = _status.event.player;
                                if (player.storage.mly_qiuying == true) {
                                    return 1;
                                } else return [1, Infinity];
                            },
                            init(player) {
                                player.storage.mly_qiuying = true;
                            },
                            intro: {
                                content(storage, player, skill) {
                                    return player.storage.mly_qiuying ? '小太刀:出牌阶段,你可以消耗20点必杀能量,对1名其他角色造成1点雷电伤害,你视为拥有技能【不灭殛华】' : '大太刀:出牌阶段,你可以消耗70点必杀能量,对任意名其他角色造成2点雷电伤害,你移除技能【不灭殛华】';
                                },
                            },
                            content() {
                                'step 0';
                                if (player.storage.mly_qiuying == true) {
                                    if (targets.length == 1) {
                                        player.storage.zym_np -= 20;
                                        game.playzsp(['崩落的束缚'].randomGet());
                                        game.mp414('崩落的束缚');
                                        targets[0].damage(1, 'thunder');
                                        player.addSkill('mly_jihua');
                                    } else event.finish();
                                } else {
                                    if (targets.length >= 1) {
                                        player.storage.zym_np -= 70;
                                        game.playzsp(['宿命的囚笼'].randomGet());
                                        game.mp414('宿命的囚笼');
                                        for (var i = 0; i < targets.length; i++) {
                                            targets[i].damage(2, 'thunder');
                                            player.removeSkill('mly_jihua');
                                        }
                                    } else event.finish();
                                }
                                ('step 1');
                                player.changeZhuanhuanji('mly_qiuying');
                                event.finish();
                            },
                            ai: {
                                order: 2.7,
                                result: {
                                    target(player) {
                                        return -4;
                                    },
                                },
                            },
                            derivation: 'mly_jihua',
                        },
                        rensui1: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                var list = ['shan'];
                                player.gain(game.createCard(list.randomGet()));
                            },
                        },
                        rensui2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                var list = ['shan'];
                                player.gain(game.createCard(list.randomGet()));
                            },
                        },
                        rensui: {
                            audio: 'ext:破剑茶寮/audio:2',
                            group: ['rensui1', 'rensui2', 'rensui3'],
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'h',
                            selectCard: [1, 1],
                            filterCard(card) {
                                return card.name == 'shan';
                            },
                            filter(event, player) {
                                return player.countCards('h', function (card) {
                                    return card.name == 'shan';
                                });
                            },
                            content() {
                                'step 0';
                                var num = 3;
                                event.cards = get.cards(num);
                                player.showCards(event.cards);
                                ('step 1');
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.color(event.cards[i]) != 'red') {
                                        cards[i].discard();
                                        event.cards.splice(i--, 1);
                                    }
                                }
                                if (event.cards.length == 0) {
                                    event.finish();
                                } else {
                                    player.$gain2(event.cards);
                                }
                                ('step 2');
                                player.addToExpansion('gain2', event.cards).gaintag.add('rensui');
                            },
                            marktext: '剑气',
                            intro: {
                                name: '剑气',
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        rensui3: {
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'sha',
                            },
                            filter(event, player) {
                                return event.filterCard({ name: 'sha' }, player, event) && player.hasSkill('rensui') && player.getExpansions('rensui').length;
                            },
                            selectCard: -1,
                            filterCard() {
                                return false;
                            },
                            forced: true,
                            prompt: '移除一张【剑气】,视为使用一张【杀】',
                            delay: false,
                            log: false,
                            precontent() {
                                'step 0';
                                if (player.getExpansions('rensui').length == 1) {
                                    event.directresult = player.getExpansions('rensui').slice(0);
                                } else {
                                    player.chooseCardButton('移去一张<剑气>', 1, player.getExpansions('rensui'), true);
                                }
                                ('step 1');
                                if (event.directresult || result.bool) {
                                    var links = event.directresult || result.links;
                                    player.loseToDiscardpile(links);
                                }
                                ('step 2');
                                player.addMark('wuwohuangtu2', 1);
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
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
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
                                                        !target.mayHaveShan() ||
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
                                                        jiu: true,
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
                                        target.mayHaveShan() &&
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
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
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
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
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
                                            target.mayHaveShan() &&
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
                        蚩龙渺渊: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                game.playzsp(['蚩龙渺渊'].randomGet());
                                game.mp414('蚩龙渺渊');
                                ui.backgroundMusic.src = 'extension/破剑茶寮/audio/蓑部雄崇 - Z-ONE(ゾーン)のバトル.mp3';
                                player.removeSkill('蚩龙渺渊');
                            },
                        },
                        黑月: {
                            enable: 'phaseUse',
                            usable: 1,
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 120;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                player.storage.zym_np -= 120;
                                player.awakenSkill('黑月');
                                target.addTempSkill('fengyin');
                                target.damage(3);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        wuliangdashu: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                if (get.itemtype(event.cards) != 'cards') return false;
                                return player.countCards('he', { suit: event.cards.suit }) > 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player.storage.wuliangdashu = 0;
                                event.num = 0;
                                event.cards = [];
                                ('step 1');
                                var suit = trigger.cards.suit;
                                event.suit = suit;
                                player.chooseCard('he', get.prompt('wuliangdashu'), function (card, player) {
                                    return card.suit == suit && lib.filter.cardDiscardable(card, player);
                                }).ai = function (card) {
                                    if (get.attitude(player, trigger.target) >= 0) return 0;
                                    if (get.effect(trigger.target, { name: 'sha' }, player, player) > 0) {
                                        return 7 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 2');
                                if (result.bool) {
                                    if (event.num == 0) {
                                    }
                                    player.discard(result.cards);
                                    event.num++;
                                    if (player.countCards('he', { suit: event.suit }) > 1 && !get.is.altered('wuliangdashu')) {
                                        event.goto(1);
                                    }
                                }
                                ('step 3');
                                if (event.num) {
                                    var next = trigger.target.chooseToRespond({ name: 'shan' }, '请打出一张闪响应无量大数');
                                    next.ai = get.unuseful2;
                                    if (event.num > 1) next.set('prompt2', '共需额外打出' + event.num + '张闪');
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    event.num--;
                                    event.goto(3);
                                } else {
                                    trigger.untrigger();
                                    trigger.directHit = true;
                                    player.storage.wuliangdashu = event.num;
                                    game.playzsp(['无量大数'].randomGet());
                                    game.mp414('无量大数');
                                }
                            },
                            group: ['wuliangdashu2', 'wuliangdashu3'],
                        },
                        wuliangdashu2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.storage.wuliangdashu > 0 && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                trigger.num += player.storage.wuliangdashu;
                                player.storage.wuliangdashu = 0;
                            },
                        },
                        wuliangdashu3: {
                            trigger: {
                                player: 'shaEnd',
                            },
                            silent: true,
                            content() {
                                player.storage.wuliangdashu = 0;
                            },
                            forced: true,
                            popup: false,
                        },
                        qiangren1: {
                            derivation: 'wushuangdjian_skill',
                            mod: {
                                attackRange(player, num) {
                                    if (player.getEquip(1)) return;
                                    return num + 1;
                                },
                            },
                            audio: 'qinggang_skill',
                            inherit: 'qinggang_skill',
                            filter(event, player) {
                                if (player.getEquip(1)) return false;
                                return event.card.name == 'sha';
                            },
                            equipSkill: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                trigger.target.addSkill('qinggang2');
                                player.when('useCardAfter').then(() => game.players.forEach((Q) => Q.removeSkill('qinggang2')));
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        qiangren2: {
                            inherit: 'zhuge_skill',
                            filter(event, player) {
                                if (!lib.skill.tiansuozhanyue_skill.filter(event, player)) return false;
                                if (!player.isEmpty(1)) return false;
                                return true;
                            },
                            equipSkill: true,
                            audio: 'ext:破剑茶寮/audio:true',
                            firstDo: true,
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            content() {
                                trigger.audioed = true;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    var cardx = player.getEquip('zhuge');
                                    if (card.name == 'sha' && (!cardx || player.hasSkill('zhuge_skill', null, false) || (!_status.zhuge_temp && !ui.selected.cards.includes(cardx)))) {
                                        if (get.is.versus() || get.is.changban()) {
                                            return num + 3;
                                        }
                                        return Infinity;
                                    }
                                },
                                cardEnabled2(card, player) {
                                    if (!_status.event.addCount_extra || player.hasSkill('zhuge_skill', null, false)) return;
                                    if (card && card == player.getEquip('zhuge')) {
                                        try {
                                            var cardz = get.card();
                                        } catch (e) {
                                            return;
                                        }
                                        if (!cardz || cardz.name != 'sha') return;
                                        _status.zhuge_temp = true;
                                        var bool = lib.filter.cardUsable({ name: 'sha' }, player);
                                        delete _status.zhuge_temp;
                                        if (!bool) return false;
                                    }
                                },
                            },
                        },
                        qiangren: {
                            enable: 'phaseUse',
                            usable: 1,
                            group: ['qiangren1', 'DJ_skill', '即刻出阵'],
                            content() {
                                var list = ['火绳大剑'];
                                player.gain(game.createCard(list.randomGet()));
                                player.removeSkill('zhongpao');
                                player.removeSkill('zhuge_skill');
                            },
                            derivation: 'wushuangdjian_skill',
                        },
                        DJ_skill: {
                            enable: 'phaseUse',
                            usable: 2,
                            content() {
                                'step 0';
                                player.chooseControl('连发模式', '重炮模式');
                                ('step 1');
                                if (result.control == '连发模式') {
                                    player.draw();
                                    game.playzsp(['连发'].randomGet());
                                    game.mp414('连发');
                                    player.addSkill('zhuge_skill');
                                    player.addTempSkill('DJlianfa', 'phaseEnd');
                                    player.removeSkill('zhongpao');
                                    player.removeSkill('zhongpao2');
                                }
                                if (result.control == '重炮模式') {
                                    player.draw();
                                    game.playzsp(['重炮'].randomGet());
                                    game.mp414('重炮');
                                    player.addSkill('zhongpao');
                                    player.addSkill('zhongpao2');
                                    player.removeSkill('zhuge_skill');
                                    player.removeSkill('DJlianfa');
                                }
                            },
                        },
                        zhongpao: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                trigger.num += 1;
                            },
                            popup: false,
                        },
                        wushuangdajian_skill: {
                            equipSkill: true,
                            audio: 'ext:破剑茶寮/audio:true',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                trigger.target.addSkill('qinggang2');
                                player.when('useCardAfter').then(() => game.players.forEach((Q) => Q.removeSkill('qinggang2')));
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        zymchengkai: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') return false;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            group: 'zymchengkai2',
                            content() {
                                player.changeHujia(2);
                                player.draw(2);
                                player.addTempSkill('zymchengkai2', { player: 'phaseBegin' });
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                                order: 2.5,
                            },
                        },
                        zymchengkai2: {
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            mark: true,
                            intro: {
                                content: '其他角色对你使用杀时需要弃置一张基本牌,否则杀对你无效',
                            },
                            content() {
                                'step 0';
                                var eff;
                                if (player.hasSkill('woliu2')) {
                                    eff = -get.attitude(trigger.player, player);
                                } else {
                                    eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                                }
                                trigger.player
                                    .chooseToDiscard('橙铠:弃置一张基本牌,否则杀对' + get.translation(player) + '无效', function (card) {
                                        return get.type(card) == 'basic';
                                    })
                                    .set('ai', function (card) {
                                        if (_status.event.eff > 0) {
                                            return 10 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('eff', eff);
                                ('step 1');
                                if (result.bool == false) {
                                    trigger.cancel();
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha') {
                                            if (_status.event.name == 'zymchengkai2') return;
                                            if (get.attitude(player, target) > 0) return;
                                            var bs = player.getCards('h', { type: 'basic' });
                                            if (bs.length < 2) return 0;
                                            if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                                            if (bs.length <= 3 && player.countCards('h', 'sha') <= 1) {
                                                for (var i = 0; i < bs.length; i++) {
                                                    if (bs[i].name != 'sha' && get.value(bs[i]) < 7) {
                                                        return [1, 0, 1, -0.5];
                                                    }
                                                }
                                                return 0;
                                            }
                                            return [1, 0, 1, -0.5];
                                        }
                                    },
                                },
                            },
                        },
                        即刻出阵: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                game.playzsp(['即刻出阵'].randomGet());
                                game.mp414('即刻出阵');
                            },
                        },
                        DJlianfa: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && range[1] && range[1] != -1) range[1] = Infinity;
                                },
                            },
                        },
                        zhongpao2: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                        },
                        shizhizhiwu: {
                            audio: 'ext:破剑茶寮/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                var cards = player.getCards('h');
                                player.loseToSpecial(cards, 'shizhizhiwu').visible = true;
                                player.markSkill('shizhizhiwu');
                            },
                            marktext: '纸',
                            intro: {
                                mark(dialog, storage, player) {
                                    dialog.addAuto(
                                        player.getCards('s', function (card) {
                                            return card.hasGaintag('shizhizhiwu');
                                        })
                                    );
                                },
                                markcount(storage, player) {
                                    return player.getCards('s', function (card) {
                                        return card.hasGaintag('shizhizhiwu');
                                    }).length;
                                },
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        shizhi2: {
                            audio: 'ext:破剑茶寮/audio:2',
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHistory('lose', function (evt) {
                                    if (evt.parent != event) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('shizhizhiwu')) return true;
                                    }
                                    return false;
                                }).length;
                            },
                            content() {
                                if (!trigger.card.yingbian) {
                                    trigger.card.yingbian = true;
                                    var info = get.info(trigger.card);
                                    if (info && info.yingbian) info.yingbian(trigger);
                                    player.addTempSkill('yingbian_changeTarget');
                                }
                            },
                        },
                        shizhi3: {
                            trigger: {
                                player: ['useCard'],
                            },
                            filter(event, player) {
                                return player.storage.zym_np >= 10;
                            },
                            content() {
                                player.storage.zym_np -= 10;
                                var fake = game.createCard(trigger.card);
                                fake.shizhi3_link = true;
                                player.gain(fake, 'draw')._triggered = null;
                                fake.classList.add('glow');
                                fake._modUseful = function () {
                                    return 0.1;
                                };
                                fake._modValue = function () {
                                    return 0.1;
                                };
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        tianshifeiyi: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                        },
                        tianshidist: {
                            charlotte: true,
                            mod: {
                                targetInRange: () => true,
                            },
                        },
                        天使之舞: {
                            group: ['zym_np', 'zym_np1', 'zym_np2', '回复', 'tianshifeiyi', 'tianshidist'],
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 120;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                player.storage.zym_np -= 120;
                                player.awakenSkill('审判之舞');
                                game.playzsp(['审判之舞'].randomGet());
                                game.mp414('审判之舞');
                                target.damage(3, 'fire');
                            },
                            ai: {
                                order: 10,
                                threaten: 1,
                                result: {
                                    player: 1,
                                    target: -2,
                                },
                            },
                        },
                        xianshu1: {
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
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'tiesuo') return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        xianshu2: {
                            audio: 'xianshu',
                            trigger: {
                                player: 'turnOverBefore',
                            },
                            _priority: 20,
                            forced: true,
                            filter(event, player) {
                                return !player.isTurnedOver();
                            },
                            content() {
                                trigger.cancel();
                                game.log(player, '取消了翻面');
                            },
                            ai: {
                                noturn: true,
                            },
                        },
                        xianshu3: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') return false;
                                },
                            },
                        },
                        xianshu: {
                            shaRelated: true,
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            group: ['xianshu1', 'xianshu2', 'xianshu3', 'xianshu4', 'xianshu5', 'zym_np', 'zym_np1', 'zym_np2', '仙鸣の登场'],
                            filter(event, player) {
                                return event.target.countCards('he') > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player
                                    .chooseControl('造成伤害', '摸两张牌', function (event, player) {
                                        if (get.attitude(player, trigger.target) < 0 && player.countCards('he', 'xianshu') < 1) return '造成伤害';
                                        if (get.attitude(player, trigger.target) > 0) return '摸两张牌';
                                        return '摸两张牌';
                                    })
                                    .set('prompt', '蛙组手:造成一点伤害或摸张牌');
                                ('step 1');
                                if (result.control == '造成伤害') {
                                    trigger.target.damage();
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        xianshu4: {
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha'; //&&(get.color(event.card)!='red'||event.source&&event.source.isAlive());
                            },
                            forced: true,
                            content() {
                                if (get.color(trigger.card) == 'black') {
                                    trigger.num--;
                                    game.log(trigger.card, '对', player, '造成的伤害-1');
                                } else player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'black') return 'zerotarget';
                                    },
                                },
                            },
                        },
                        xianshu5: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        renjudashi: {
                            group: 'renjudashi2',
                            trigger: {
                                global: ['gameStart'],
                            },
                            forced: true,
                            limited: true,
                            forced: true,
                            content() {
                                var cards = [];
                                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                    var card = ui.cardPile.childNodes[i];
                                    if (get.subtype(card) == 'equip1') cards.push(card);
                                }
                                if (cards.length) player.loseToSpecial(cards, 'renjudashi');
                            },
                            marktext: '忍具卷轴',
                            intro: {
                                mark(dialog, storage, player) {
                                    dialog.addAuto(
                                        player.getCards('s', function (card) {
                                            return card.hasGaintag('renjudashi');
                                        })
                                    );
                                },
                                markcount(storage, player) {
                                    return player.getCards('s', function (card) {
                                        return card.hasGaintag('renjudashi');
                                    }).length;
                                },
                                content: 'limited',
                            },
                            mark: true,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        renjudashi2: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0 && lib.filter.cardEnabled({ name: 'sha' }, player);
                            },
                            usable: 2,
                            filterCard: {
                                type: 'equip',
                            },
                            position: 'he',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                                    return 11 - get.equipValue(card);
                                }
                                return 6 - get.equipValue(card);
                            },
                            discard: false,
                            prepare: 'throw',
                            delay: false,
                            filterTarget(card, player, target) {
                                return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                            },
                            content() {
                                'step 0';
                                player.addAdditionalSkill('renjudashi2', 'unequip');
                                player.draw();
                                player.useCard({ name: 'sha' }, cards, targets, false).animate = false;
                                player.line(targets, 'fire');
                                ('step 1');
                                player.removeAdditionalSkill('renjudashi2');
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 0.1;
                                },
                                result: {
                                    target(player, target) {
                                        player.addAdditionalSkill('renjudashi2_ai', 'unequip');
                                        var eff = get.effect(target, { name: 'sha' }, player, target);
                                        player.removeAdditionalSkill('renjudashi2_ai');
                                        return eff;
                                    },
                                },
                                effect: {
                                    player(card, player) {
                                        if (_status.currentPhase != player) return;
                                        if (get.type(card) == 'equip' && player.countCards('e', { subtype: get.subtype(card) }) && lib.filter.filterCard({ name: 'sha' }, player)) {
                                            return 0;
                                        }
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        yayuzhiren: {
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                var goon = false;
                                if (
                                    player.countCards('he', function (card) {
                                        return get.value(card) < 8 && get.color(card) == 'black';
                                    })
                                ) {
                                    goon = true;
                                } else if (
                                    game.hasPlayer(function (current) {
                                        return current.hp == 1 && player.canUse('sha', current, false) && get.attitude(player, current) < 0 && get.effect(current, { name: 'sha' }, player, player) > 0;
                                    })
                                ) {
                                    if (player.hp > 1 || !player.isTurnedOver()) {
                                        goon = true;
                                    }
                                }
                                player
                                    .chooseTarget(get.prompt('yayuzhiren'), function (card, player, target) {
                                        return player.canUse('sha', target, false);
                                    })
                                    .set('ai', function (target) {
                                        if (!_status.event.goon) return false;
                                        var player = _status.event.player;
                                        if (get.attitude(player, target) >= 0) return false;
                                        if (target.hp > 3) return false;
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    })
                                    .set('goon', goon);
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.target.isAlive() && player.countCards('he', { color: 'black' })) {
                                    player.chooseToDiscard('he', { color: 'black' }, '是否弃置一张黑色牌视为对' + get.translation(event.target) + '使用一张杀？').set('ai', function (card) {
                                        return 8 - get.value(card);
                                    });
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.useCard({ name: 'sha', nature: 'ice' }, event.target);
                                }
                                ('step 4');
                                if (event.target.isAlive()) {
                                    player.chooseBool('是否失去一点体力并视为对' + get.translation(event.target) + '使用一张杀？').set('choice', player.hp > event.target.hp && player.hp > 1 && event.target.hp > 0);
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    player.loseHp();
                                    player.useCard({ name: 'sha', nature: 'ice' }, event.target);
                                }
                                ('step 6');
                                if (event.target.isAlive() && !player.isTurnedOver()) {
                                    player.chooseBool('是将武将牌翻至背面并视为对' + get.translation(event.target) + '使用一张杀？').set('choice', event.target.hp == 1);
                                } else {
                                    event.finish();
                                }
                                ('step 7');
                                if (result.bool) {
                                    player.turnOver(true);
                                    player.useCard({ name: 'sha', nature: 'ice' }, event.target);
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        yuanguzhili2: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                trigger.num += 1;
                            },
                            popup: false,
                        },
                        yuanguzhili: {
                            trigger: {
                                player: ['useCard2', 'respond'],
                            },
                            group: ['yuanguzhili2', 'yuanguzhili6', 'yuanguzhili8', 'zym_np', 'zym_np1', 'zym_np2', '回复', 'yuanguzhili_roundcount'],
                            round: 1,
                            forced: true,
                            content() {
                                player.draw(trigger.card.number);
                            },
                        },
                        shouwangzhongqu: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zym_np >= 120;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget: 1,
                            content() {
                                'step 0';
                                player.storage.zym_np -= 120;
                                var card = get.cards()[0];
                                event.card = card;
                                player.showCards(card);
                                ('step 1');
                                var num0 = card.number;
                                event.num0 = num0;
                                player.chooseToDiscard(function (card) {
                                    return card.number == num0;
                                });
                                ('step 2');
                                if (result.bool) {
                                    game.playzsp(['兽王终曲'].randomGet());
                                    game.mp414('兽王终曲');
                                    target.damage(event.num0, 'nocard');
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        yuanguzhili6: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                game.playzsp(['王者中的王者'].randomGet());
                                game.mp414('王者中的王者');
                            },
                        },
                        cidunshajin: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                var cards = player.getCards('h');
                                player.loseToSpecial(cards, 'cidunshajin').visible = true;
                                player.markSkill('cidunshajin');
                            },
                            marktext: '砂金',
                            intro: {
                                mark(dialog, storage, player) {
                                    dialog.addAuto(
                                        player.getCards('s', function (card) {
                                            return card.hasGaintag('cidunshajin');
                                        })
                                    );
                                },
                                markcount(storage, player) {
                                    return player.getCards('s', function (card) {
                                        return card.hasGaintag('cidunshajin');
                                    }).length;
                                },
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        cidunshajin2: {
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHistory('lose', function (evt) {
                                    if (evt.parent != event) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('cidunshajin')) return true;
                                    }
                                    return false;
                                }).length;
                            },
                            content() {
                                player.draw();
                                player.changeHujia();
                            },
                        },
                        cidunsjdz: {
                            shaRelated: true,
                            audio: 'ext:破剑茶寮/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', '回复', 'cidunsjdz3'],
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0 && player.storage.zym_np >= 20;
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('cidunsjdz', trigger.target));
                                player.storage.zym_np -= 20;
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.cards?.length) {
                                    event.cards = result.cards;
                                    var target = trigger.target;
                                    target.addSkill('cidunsjdz2');
                                    target.addToExpansion(result.cards, 'giveAuto', target).gaintag.add('cidunsjdz2');
                                    game.playzsp(['砂金大葬'].randomGet());
                                    game.mp414('砂金大葬');
                                } else event.finish();
                                ('step 2');
                                var discard = false,
                                    draw = false;
                                for (var i of cards) {
                                    var type = get.type2(i);
                                    if (type == 'equip') discard = true;
                                    if (type == 'trick') draw = true;
                                }
                                if (discard) {
                                    event.equip = true;
                                    player
                                        .chooseButton(
                                            [
                                                '选择一张牌置入弃牌堆',
                                                cards.filter(function (card) {
                                                    return get.type(card) == 'equip';
                                                }),
                                            ],
                                            true
                                        )
                                        .set('ai', function (button) {
                                            return get.value(button.link, _status.event.getTrigger().target);
                                        });
                                }
                                if (draw) event.draw = true;
                                ('step 3');
                                if (event.equip && result.links && result.links.length) {
                                    trigger.target.loseToDiscardpile(result.links);
                                }
                                if (event.draw) player.draw();
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                        },
                        cidunsjdz2: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.getExpansions('cidunsjdz2').length;
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('cidunsjdz2');
                                player.gain(cards, 'draw');
                                game.log(player, '收回了' + get.cnNumber(cards.length) + '张<破军>牌');
                                ('step 1');
                                player.removeSkill('cidunsjdz2');
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('cidunsjdz2');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    else return '共有' + get.cnNumber(cards.length) + '张牌';
                                },
                            },
                        },
                        cidunsjdz3: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                var target = event.player;
                                return event.parent.name == 'sha' && player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e');
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        yuanguzhili8: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (card.number % 2 == 0) return num + 2;
                                },
                                targetInRange(card, player) {
                                    if (card.number % 2 == 0) return true;
                                },
                                cardUsable(card, player) {
                                    if (card.number % 2 != 0) return Infinity;
                                },
                            },
                        },
                        huihuihuoyan: {
                            group: ['huihuihuoyan_fire', 'huihuihuoyan2'],
                            preHidden: ['huihuihuoyan_fire'],
                            position: 'hes',
                            enable: 'chooseToUse',
                            filterCard: true,
                            viewAs: {
                                name: 'huogong',
                                nature: 'fire',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes')) return false;
                            },
                            prompt: '将一张牌当火攻使用',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('h') > player.hp) {
                                    return 6 - get.value(card);
                                }
                                return 4 - get.value(card);
                            },
                            ai: {
                                fireAttack: true,
                                basic: {
                                    order: 4,
                                    value: [3, 1],
                                    useful: 1,
                                },
                                wuxie(target, card, player, current, state) {
                                    if (get.attitude(current, player) >= 0 && state > 0) return false;
                                },
                                result: {
                                    player(player) {
                                        var nh = player.countCards('h');
                                        if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -10;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -10;
                                                if (viewAs && viewAs.name == 'huogong') return -10;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                                        if (player.countCards('h') <= 1) return 0;
                                        if (target == player) {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -1.5;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -1.5;
                                                if (viewAs && viewAs.name == 'huogong') return -1.5;
                                            }
                                            return 0;
                                        }
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                    norepeat: 1,
                                },
                            },
                            subSkill: {
                                fire: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.nature == 'fire' && (event.source == player || event.player == player);
                                    },
                                    content() {
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        huihuihuoyan2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return event.nature == 'fire' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        huihuihongmo: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'wuxie') return;
                                    var cards = player.getCards('hs', function (card) {
                                        return card.name == 'wuxie';
                                    });
                                    cards.sort(function (a, b) {
                                        return (b.name == 'wuxie' ? 1 : 2) - (a.name == 'wuxie' ? 1 : 2);
                                    });
                                    var geti = function () {
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    if (card.name == 'wuxie') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                    return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
                                },
                                aiUseful() {
                                    return lib.skill.huihuihongmo.mod.aiValue.apply(this, arguments);
                                },
                            },
                            group: ['zym_np', 'zym_np1', 'zym_np2', 'huihuihongmo2', 'huihuihongmo3'],
                            enable: 'chooseToUse',
                            filterCard: true,
                            viewAsFilter(player) {
                                return player.countCards('hs') > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            position: 'hs',
                            prompt: '将一张手牌当无懈可击使用',
                            check(card) {
                                var tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4, 3],
                                    value: [6, 4, 3],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                        },
                        huihuihongmo2: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num--;
                                ('step 1');
                                var list = get.inpile('trick');
                                list = list.randomGets(5);
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = ['锦囊', '', list[i]];
                                }
                                var dialog = ui.create.dialog('选择一张装备牌加入你的手牌', [list, 'vcard'], 'hidden');
                                player.chooseButton(dialog, true).set('ai', function (button) {
                                    var card = {
                                        name: button.link[2],
                                    };
                                    var value = get.value(card);
                                    return value;
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
                                }
                            },
                        },
                        huihuihongmo3: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.storage.zym_np += 20;
                            },
                        },
                        huihuibaoliemofa: {
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.storage.zym_np >= 150;
                            },
                            content() {
                                'step 0';
                                player.storage.zym_np = 0;
                                player.storage.huihuibaoliemofa = true;
                                player.awakenSkill('huihuibaoliemofa');
                                player.chooseControl('爆裂魔法1', '爆裂魔法2').ai = function (event, player) {
                                    if (player.hp >= 2) return '爆裂魔法1';
                                    return '爆裂魔法2';
                                };
                                ('step 1');
                                if (result.control == '爆裂魔法1') {
                                    event.list = player.getFriends().sortBySeat();
                                    game.playzsp(['爆裂魔法'].randomGet());
                                    game.mp414('爆裂魔法');
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (player.getEnemies().includes(game.players[i])) {
                                            game.players[i].damage(4, 'fire');
                                        }
                                    }
                                }
                                ('step 2');
                                if (result.control == '爆裂魔法2') {
                                    event.list = player.getFriends().sortBySeat();
                                    game.playzsp(['爆裂魔法2'].randomGet());
                                    game.mp414('爆裂魔法2');
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (player.getEnemies().includes(game.players[i])) {
                                            game.players[i].damage(4, 'fire');
                                        }
                                    }
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 2,
                                },
                                threaten: 1,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        shizaishitaimei: {
                            enable: 'phaseUse',
                            forced: true,
                            usable: 1,
                            content() {
                                game.playzsp(['实在太美'].randomGet());
                                game.mp414('实在太美');
                            },
                        },
                        nibeipianle: {
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            content() {
                                game.playzsp(['你被骗了'].randomGet());
                                game.mp414('你被骗了');
                            },
                        },
                    },
                    translate: {
                        天道·超: '天道·超',
                        漩涡面麻: '漩涡面麻',
                        破面带土: '破面带土',
                        小南: '小南',
                        黑土: '黑土',
                        骨架佐助: '骨架佐助',
                        天天: '天天',
                        仙人鸣人: '仙人鸣人',
                        博弈哥: '博弈哥',
                        宗师宁次: '宗师宁次',
                        神威卡卡西: '神威卡卡西',
                        比安卡·深痕: '比安卡·深痕',
                        罗塞塔: '罗塞塔',
                        深红之渊: '深红之渊',
                        薇拉·绯耀: '薇拉·绯耀',
                        霸王紫龙: '霸王紫龙',
                        黑崎一护: '黑崎一护',
                        碎蜂: '碎蜂',
                        白一护: '白一护',
                        露琪亚: '露琪亚',
                        深红囚影: '深红囚影',
                        铠武: '铠武',
                        shouwangjing: '兽王鲸',
                        luosha: '罗砂',
                        sqhuihui: '惠惠',
                        聚气: '聚气',
                        聚气_info: '出牌阶段开始时你可以选择:<br>①摸1张牌且回复1点体力<br>②额外充能30点,失去1点体力.;<li>你造成伤害时你额外充能10点',
                        超神罗天征: '超神罗天征',
                        超神罗天征_info: ' 限定技,<li>出牌阶段若你充能达到150点,你可查克拉对场上所有敌方角色各造成3点伤害',
                        神罗天征: '神罗天征',
                        神罗天征_info: '每回合1次,你即将受到伤害时,你可以消耗20点查克拉让那次伤害无效,之后你视为使用一张无视距离的杀',
                        万象天引: '万象天引',
                        万象天引_info: '<li>万象天引:出牌阶段限1次,你可以选择一名角色,获得其区域内的一张牌,之后你弃置一张牌',
                        地爆天星: '地爆天星',
                        地爆天星_info: '你消耗至少150点查克拉发动,你标记场上所有角色,这些角色各受到1点伤害,这些角色弃置装备区的牌,再弃置4张手牌',
                        回气: '回气',
                        回气_info: '结束阶段,你可以摸一张牌',
                        佩恩天道: '佩恩天道',
                        佩恩天道_info: '<li>万象天引:出牌阶段限1次,你可以选择一名角色,获得其区域内的一张牌,之后你弃置一张牌.<br><li>神罗天征:每回合1次,你即将受到伤害时,你可以消耗20点查克拉让那次伤害无效,之后你视为使用一张无视距离的杀.<li>超神罗天征<li>地爆天星',
                        九面苏婆诃: '九面苏婆诃',
                        九面苏婆诃_info: "锁定技<li>你拥有'青','白','朱','玄','空','南','北','三','玉'九个子狐.<li>游戏开始时,你需选择启用一个子狐(拥有其技能).<li>当你发动该子狐的技能时,禁用该子狐并重新选择一个子狐启用.<br>青:你造成的伤害加一<br>白:你可以取消一次黑色杀以及普通锦囊<br>朱:你可以跳过出牌阶段让至多三名角色摸一张<br>空:你可以防止一次伤害<br>玄:你造成伤害后让一名角色回复等量体力<br>南:你造成伤害后摸相当于装备区牌数量的牌<br>北:你受伤后弃置伤害来源的所有红色牌<br>三:你可以复制其他角色的锦囊,若复制牌点数大于该锦囊,取消之<br>玉:结束阶段你可以在打出一次你本回合使用过的基本牌,否则摸一张",
                        血继: '血继',
                        血继_info: '</b>锁定技,出牌阶段开始时,你选择启用一个子狐',
                        螺旋轮虞: '螺旋轮虞',
                        螺旋轮虞_info: '消耗至少100点能量才能发动,对全场敌方角色造成3点伤害',
                        遁术: '遁术',
                        遁术_info: '<li>你造成伤害后回复10点查克拉.<li>木遁·扦插之术:出牌阶段限一次,你可以消耗20点查克拉选择一名角色的非锁定技失效直到回合结束.<li>火遁·爆风乱舞:出牌阶段限一次,你可以消耗20点查克拉,选择至多2名角色,横置这2名角色并对其中一名角色造成1点火焰伤害.',
                        木遁·扦插之术: '木遁·扦插之术',
                        木遁·扦插之术_info: '出牌阶段限一次,你可以消耗20点查克拉选择一名角色的非锁定技失效直到回合结束',
                        火遁·爆风乱舞: '火遁·爆风乱舞',
                        火遁·爆风乱舞_info: '火遁·爆风乱舞:出牌阶段限一次,你可以消耗20点查克拉,选择至多X名角色,横置这些角色并对其中一名角色造成1点火焰伤害.(X为你已损失的体力值且至少为1)',
                        天变地异: '天变地异',
                        天变地异_info: '<li>出牌阶段若你充能达到180点,你可清空能量对场上所有敌方角色各造成5点伤害',
                        神威: '神威',
                        神威2: '神威',
                        神威_info: '锁定技,一名角色的回合开始时,你可以消耗20查克拉发动,你摸一张牌且进入神威状态(你不能成为其使用牌的目标,对其使用牌没有距离限制且不计入使用次数)直到你的下回合结束',
                        回复: '回复',
                        回复_info: '结束阶段,你回复20查克拉',
                        轻重岩: '轻重岩',
                        轻重岩连踢: '轻重岩',
                        轻重岩_info: '此形态下你使用基本牌或者普通锦囊牌时,若你装备区没有牌,则该牌会结算两次',
                        加重岩: '加重岩',
                        加重岩踢: '加重岩',
                        加重岩重踢: '加重岩',
                        加重破: '加重岩',
                        加重岩_info: '转化为加重岩形态时你获得1护甲,此形态下你的杀不可闪避,具有破甲效果并能额外指定任意名目标',
                        重岩: '重岩',
                        重岩_info: '<li>你使用锦囊牌后摸一张牌并进入轻重岩形态.<li>你使用装备牌后获得1点护甲并进入加重岩形态.<li>你在转化形态后会获得对应的技能,并且移除上一形态的技能',
                        驭岩·重: '驭岩·重',
                        驭岩·重_info: '<li>出牌阶段限一次,你可以消耗20查克拉视为打出一张杀',
                        驭岩·轻: '驭岩·轻',
                        驭岩·轻弃: '驭岩·轻',
                        驭岩·轻_info: '你可以消耗20查克拉把一张杀当作闪打出,视为使用一张无视距离的杀.<li>你打出闪后,你将你装备区的所有装备牌弃置并摸等量的牌',
                        熔遁·灰封石之术: '灼遁·灰石封碎击',
                        熔遁·灰封石之术_info: '出牌阶段,你可以消耗120查克拉对一名角色发动,该角色受到2点火焰伤害,非锁定技失效直至回合结束',
                        gujia: '须佐能乎',
                        登场: '须佐能乎',
                        gujia_info: '<li>出牌阶段限一次,你消耗20查克拉才能发动,你摸一张牌并获得2层须佐能乎骨架直到下次你的回合开始,你受到伤害时,防止此伤害并且移去一层骨架.<li>复仇者',
                        加具土命: '加具土命',
                        加具土命_info: '出牌阶段限1次,你消耗20查克拉,选择一名角色造成1点火焰伤害,之后你获得1张杀,本回合你的杀均视为火杀,再对其他角色造成火焰伤害后,其失去1点体力',
                        加具土命强化: '加具土命强化',
                        加具土命强化_info: '你被强化了,快上',
                        复仇者: '复仇者',
                        复仇者_info: '<li>你的防御距离始终等于你的攻击范围.<li>当你攻击范围内的其他角色受到伤害后,你可令其选择:<br>令你摸1张牌;<br>令你弃置其1张牌',
                        炎遁·须佐能乎加具土命: '炎遁·须佐能乎加具土命',
                        炎遁·须佐能乎加具土命_info: '限定技,出牌阶段你可以消耗120查克拉对一名角色发动,该角色受到3点火焰伤害并获得爆伤效果直至回合结束',
                        神の登场: '神の登场',
                        神の登场_info: '结束阶段,你可以摸一张牌,若你没有手牌,则改为摸两张牌',
                        柱间细胞: '柱间细胞',
                        柱间细胞_info: '结束阶段,你回复40查克拉',
                        缚流星: '缚流星',
                        缚流星_info: '出牌阶段限一次,你消耗10查克拉,选择一名角色造成1点伤害,并将其禁锢至回合结束',
                        爆碎玉: '爆碎玉',
                        爆碎玉_info: "出牌阶段限一次,你消耗10查克拉,选择一名角色造成1点伤害,并对其施加 '爆伤'  效果",
                        爆伤: '爆伤',
                        爆伤_info: '你受到火焰伤害时有概率使伤害量+1且手牌上限-1',
                        zmjingu: '禁锢',
                        zmjingu_info: '你不能使用或者打出闪/杀',
                        操具: '操具',
                        操具_info: "<li>缚流星:出牌阶段限一次,你消耗10查克拉,选择一名角色造成1点伤害,并将其禁锢至回合结束.<li>爆碎玉:出牌阶段限一次,你消耗10查克拉,选择一名角色造成1点伤害,并对其施加 '爆伤'  效果",
                        操具·极大铁球: '操具·极大铁球',
                        操具·极大铁球_info: '限定技,出牌阶段你可以消耗50查克拉选择一名角色造成1点伤害,之后你摸一张牌,并视为打出一张无视距离的杀,获得六道忍具:芭蕉扇',
                        芭蕉扇_skill: '芭蕉扇',
                        影分身: '影分身',
                        影分身_info: '<li>出牌阶段限一次,你可以消耗30仙术查克拉,你召唤出1个体力为1并且武将牌跟你相同的影分身并摸一张牌.<li>当你的回合结束时你切换至影分身,之后该影分身进行1个回合后留在场上直到死亡时切换回本体继续游戏',
                        蛙组手: '蛙组手',
                        蛙组手_info: '<li>你于回合开始时会吸收自然能量,之后转化为20点仙术查克拉.<li>你的杀没有距离限制,伤害与次数上限+1',
                        仙鸣の登场: '仙鸣の登场',
                        仙鸣の登场_info: '英雄登场',
                        自然能量: '自然能量',
                        自然能量_info: '自然能量',
                        仙术·螺旋手里剑: '仙术·螺旋手里剑',
                        仙术·螺旋手里剑_info: '限定技,出牌阶段,你消耗至少150点仙术查克拉才能发动,对一名其他角色造成4点伤害',
                        查克拉密卷: '查克拉密卷',
                        查克拉密卷_info: '查克拉密卷',
                        月读: '月读',
                        月读_info: '出牌阶段限一次 <br>你可消耗至少20点查克拉并弃置任意张花色不同的牌后指定一名有手牌的其他角色;<br>&nbsp若该角色的手牌中含有与你弃置的牌花色相同的牌,则你摸一张牌,其翻面并进入混乱状态(不能将牌打出)直到其回合结束',
                        双须佐能乎降临: '双须佐能乎降临',
                        双须佐能乎降临_info: '限定技,出牌阶段,你消耗至少150点查克拉才能发动,对一名敌方造成4点火焰伤害',
                        须佐·鼬: '须佐·鼬',
                        须佐·鼬_info: '<li>出牌阶段限一次,你消耗20查克拉才能发动,你摸一张牌并获得3层须佐能乎骨架直到下次你的回合开始,你受到伤害时,防止此伤害并摸一张牌,之后移去一层骨架',
                        封穴: '封穴',
                        封穴_info: '受到你伤害的角色会被禁锢至回合结束',
                        咏春·弹反: '咏春·弹反',
                        咏春·弹反_info: '咏春·弹反',
                        连续普通拳: '连续普通拳',
                        连续普通拳_info: '连续普通拳',
                        咏春: '咏春',
                        咏春_info: '<li>你的杀使用次数上限+1<li>每回合一次,你被带有伤害标签的牌指定时可以消耗20查克拉令其对你无效,之后你可以进行一个额外的回合',
                        一代宗师: '一代宗师',
                        一代宗师_info: '限定技,出牌阶段,你消耗至少120点查克拉才能发动,选择一名其他角色,该角色非锁定技失效至本回合结束,并受到2点伤害',
                        拷贝: '拷贝',
                        拷贝_info: '锁定技,游戏开始时/你的回合开始时,你随机获得技能【火遁·豪火球】【水遁·水龙弹】【风遁·大突破】【土遁·土流弊】【雷遁·雷切】其中一个技能至下次你的回合开始',
                        火遁·豪火球: '火遁·豪火球',
                        火遁·豪火球_info: '出牌阶段限一次,你消耗10查克拉指定一名角色造成1点火焰伤害,并对其施加爆伤效果',
                        水遁·水龙弹: '水遁·水龙弹',
                        水遁·水龙弹_info: '出牌阶段限一次,你消耗10查克拉指定一名角色造成1点冰伤',
                        风遁·大突破: '风遁·大突破',
                        风遁·大突破_info: '出牌阶段限一次,你消耗10查克拉指定一名角色造成1点伤害,并对其施加破甲效果',
                        土遁·土流弊: '土遁·土流弊',
                        土遁·土流弊_info: '每回合一次,你被指定为牌的对象时,你可以消耗10查克拉令此牌对你无效',
                        雷遁·雷切: '雷遁·雷切',
                        雷遁·雷切_info: '出牌阶段限一次,你消耗10查克拉指定一名角色造成1点雷电伤害',
                        神威雷切: '神威雷切',
                        神威雷切_info: '出牌阶段若你拥有至少120查克拉,你可以消耗120查克拉指定一名角色,该角色非锁定技失效至本回合结束,并受到3点雷电伤害',
                        神威·攻: '神威·攻',
                        神威·攻_info: '你使用杀指定目标时,可以消耗20查克拉令其弃置1张牌',
                        红刃: '红刃',
                        红刃·赤华: '红刃·赤华',
                        '红刃·赤华2': '红刃·赤华',
                        红刃·赤华_info: '出牌阶段限一次,你可以移除1枚赤 视为使用一张无视距离的的杀',
                        红刃·缭乱: '红刃·缭乱',
                        '红刃·缭乱3': '红刃·缭乱',
                        '红刃·缭乱2': '红刃·缭乱',
                        红刃·缭乱_info: '出牌阶段,你可以移除3枚「赤」视为使用一张无视距离的杀,',
                        红刃_info: "<span style='color: #FF7D40'>红刃·赤华:出牌阶段限一次,你可以移除1枚「赤」视为使用一张无视距离且不计入次数的杀</span><br><br><span style='color: #E3CF57'>红刃·缭乱:出牌阶段限一次,你可以移除3枚「赤」视为使用2张无视距离且不计入次数的杀并摸1张牌</span><br><br><span style='color: #9933FA'>红刃·碎光散:出牌阶段,你可以移除1枚「渊」视为使用一张酒</span><br><br>红刃·回响:出牌阶段限一次,你可以移除3枚「渊」视为使用2张酒并摸1张牌<br><br>【赤华】和【缭乱】你每回合只能选择发动其中一个",
                        红刃·碎光散: '红刃·碎光散',
                        红刃·碎光散_info: '红刃·碎光散',
                        红刃·回响: '红刃·回响',
                        '红刃·回响2': '红刃·回响',
                        红刃·回响_info: '红刃·回响',
                        赤渊: '赤渊',
                        赤渊·刀光意: '赤渊',
                        赤渊_info: "赤渊·居合意:当你使用手牌后,若此牌与本回合上一张使用的牌颜色不同,你根据牌的颜色获得对应标记并摸一张牌,红色牌为<span style='color: #FF7D40'>「赤」</span>,黑色牌为<span style='color: #9933FA'>「渊」</span>.<br><br>赤渊·刀光意:出牌阶段,你可以移去3枚「赤」以及3枚「渊」获得8枚剑气球并进入剑气模式.回合结束时你退出剑气模式",
                        赤: '赤',
                        赤_info: '赤',
                        渊: '渊',
                        渊_info: '渊',
                        剑气: '剑气',
                        剑气3: '剑气',
                        剑气_info: "出牌阶段,你可以消除一枚剑气球视为使用一张无视距离且不计入次数的<span style='color: #E3CF57'>杀",
                        登场·阿尔法: '登场·阿尔法',
                        登场·阿尔法_info: '阿尔法',
                        渊裂: '渊裂',
                        渊裂_info: "出牌阶段若你充能达到<span style='color: #9933FA'>100</span>,你可以清空能量对一名角色造成3点伤害",
                        绯连枪: '绯连枪',
                        绯连枪_info: "<永战>:你造成伤害后充能20点,并获得一层电荷缠绕<br><br><旋枪截杀>:<span style='color: #9933FA'>每名角色限一次</span>,出牌阶段限一次,你可以对一名其他角色造成X点雷电伤害并获得其区域内等量张牌(X为本局中其累计获得你牌数量的一半,向下取整且至少为1<br><br>紫电连舞:你的杀均视为<span style='color: #E3CF57'>雷杀",
                        耀枪贯闪: '耀枪贯闪',
                        耀枪贯闪_info: '结束阶段,你可以摸一张牌,若你没有手牌,则改为摸两张牌',
                        终阶解放: '终阶解放',
                        终阶解放_info: '结束阶段,你可以摸一张牌,若你没有手牌,则改为摸两张牌',
                        垂灯耀目: '垂灯耀目',
                        垂灯耀目闪: '垂灯耀目',
                        gain: '垂灯耀目',
                        垂灯耀目_info: '<li>你的回合开始时若你的杀不足3张,则你获得2张杀.<li>你打出闪后可以摸一张牌并且立即打出一张牌',
                        三烛杖剑: '三烛杖剑',
                        三烛杖剑_info: '<li>你登场时进入杖形态.<li>杖形态:你使用牌时获得10点必杀能量.<li>剑形态:通过剑痕刻渊激活,激活后获得‘灯影剑舞’以及‘残光剑影’,且造成伤害后会增加15点深痕剑意值',
                        剑痕刻渊: '剑痕刻渊',
                        照渊: '剑痕刻渊',
                        剑痕刻渊_info: '<li>明烛:出牌阶段,你消耗60点必杀能量才能发动,进入剑形态,失去技能‘垂灯耀目’<li>照渊:剑形态下,你的剑意若达到90,你可以在出牌阶段清空剑意值对一名角色造成伤害,你消耗的剑意值每有30,此伤害+1.释放结束后你切换回杖形态',
                        灯影剑舞: '灯影剑舞',
                        灯影剑舞_info: '你的杀使用次数上限+2,并能额外结算1次',
                        残光剑影: '残光剑影',
                        残光剑影_info: '你的杀伤害+1',
                        登场·比安卡: '终解·比安卡',
                        登场·比安卡_info: '登场时,你播放战歌',
                        充能: '充能',
                        充能_info: '结束阶段,你可以摸一张牌,若你没有手牌,则改为摸两张牌',
                        涤罪之枪: '涤罪之枪',
                        涤罪之枪_info: '<li>出牌阶段限一次,你可以消耗120点必杀能量对1名角色造成点伤害,你消耗的能量每有30点,此伤害+1,你获得1护甲',
                        冈格尼尔: '冈格尼尔',
                        冈格尼尔_info: '<li>洞察之枪:出牌阶段,你使用【杀】时,可以为此【杀】指定额外任意个目标,并令此【杀】具有破甲效果,你造成伤害后充能30点;<li>救赎之枪:当其他角色使用杀时,你可以对其使用一张点数不小于此杀的杀并取消此杀.<li>永恒之枪:你的杀不计入手牌上限',
                        登场·罗塞塔: '登场·罗塞塔',
                        登场·罗塞塔_info: '你登场后获得3点护甲',
                        凛冽之心: '凛冽之心',
                        凛冽之心_info: '游戏开始时你获得3枚凌烈之心标记',
                        凛冽回复: '凛冽回复',
                        凛冽回复_info: '结束阶段,你可以摸一张牌,若你没有手牌,则改为摸两张牌',
                        凛冽杀: '凛冽杀',
                        凛冽杀_info: '结束阶段,你可以摸一张牌,若你没有手牌,则改为摸两张牌',
                        紫电连舞: '紫电连舞',
                        紫电连舞_info: '紫电连舞',
                        雷霆迅突: '雷霆迅突',
                        雷霆迅突_info: '雷霆迅突',
                        旋枪截杀: '旋枪截杀',
                        旋枪截杀_info: '旋枪截杀',
                        枪舞: '枪舞',
                        枪舞_info: '每回合限2次,你可以将一张非基本牌当作【杀】或者【决斗】使用或者打出,你以此法使用红色转化牌的伤害值+1<br><br>降雷坠:你可以移除3层电荷缠绕视为使用1张杀并获得1点护甲',
                        永战: '永战',
                        永战_info: '你造成伤害后充能10点,并获得一层电荷缠绕',
                        电: '电',
                        电_info: '电',
                        降雷坠: '降雷坠',
                        降雷坠_info: '降雷坠',
                        贯闪: '耀枪贯闪',
                        贯闪_info: '出牌阶段你拥有至少120必杀能量时你可以消耗120必杀能量并清空电荷缠绕对一名角色造成X点雷电伤害(x为你移除的电荷缠绕层数)',
                        登场·薇拉: '登场·薇拉',
                        登场·薇拉_info: '登场·薇拉',
                        残光: '深痕剑意',
                        残光_info: '你造成伤害后获得15点深痕剑意',
                        霸道之力: '霸道之力',
                        霸道之力_info: '出牌阶段限一次,你可以选择一名其他角色,你获得其武将牌上的技能',
                        强化值: '强化值',
                        强化值_info: '强化值',
                        月牙天冲: '月牙天冲',
                        月牙天冲_info: '你可以把黑色的牌当作【杀】使用或者打出,你使用的♠️️【杀】伤害+1,♣️️【杀】没有距离限制,你使用杀指定一名角色时可以发动,你清空的灵压,以此法消耗的灵压每有30点,你的【杀】伤害+1',
                        强化月牙天冲: '强化月牙天冲',
                        强化月牙天冲_info: '强化月牙天冲',
                        月牙: '月牙',
                        月牙_info: '你可以把黑色的牌当作杀使用或打出',
                        瞬閧: '瞬閧',
                        瞬閧_sha: '瞬閧',
                        瞬閧_shan: '瞬閧',
                        瞬閧_info: '出牌阶段限一次,你可以消耗20点灵压废除一个装备栏并摸两张牌.若你的武器栏已废除,则你使用【杀】的次数上限+1,且当你使用【杀】指定目标后,目标角色弃置一张牌;若你的防具栏已废除,则你可以将一张牌当做【闪】使用或打出;若你的攻击/防御坐骑栏已废除,则你至其他角色的距离-1/其他角色至你的距离-1',
                        二击必杀: '二击必杀',
                        二击必杀_info: '受到你伤害的角色获得1个【蜂华纹】标记,直到本回合结束时,若其【蜂华纹】标记个数=2,则其清空所有【蜂华纹】标记并失去3点体力',
                        fenghuawen: '蜂华',
                        fenghuawen_info: '蜂华',
                        蜂华纹: '蜂华纹',
                        蜂华纹_info: '你受到伤害时若X>=2,你失去3点体力(X为你拥有的【蜂华纹】标记)',
                        雀蜂雷公鞭: '雀蜂雷公鞭',
                        雀蜂雷公鞭_info: "限定技,出牌阶段,你可以消耗<span style='color: #9933FA'>120</span>点灵压对一名角色造成4点伤害",
                        卍解·天锁斩月: '卍解·天锁斩月',
                        '卍解·天锁斩月1': '卍解·天锁斩月',
                        卍解·天锁斩月_info: '<li>你使用牌结算后获得10点灵压<br><li>出牌阶段,你可以消耗120点灵压发动,摸3张牌,将武将牌替换为【卍解一护】并装备【天锁斩月】',
                        癫狂: '你的♥️️牌视为♠️️牌,你拥有【天锁斩月】的技能',
                        黑月牙2: '黑月牙',
                        黑月牙: '黑月牙',
                        黑月牙_info: '<li><br>你的♥️️牌视为♠️️牌,你拥有【天锁斩月】的技能<br><li>你的【杀】无视防具,你可以把黑色牌当作杀使用或打出,你的♠️️杀无视距离,你使用杀指定一名角色时,你可以清空你的灵压,以此法消耗的灵压每有30点,你的【杀】伤害+1直到下次你的回合开始',
                        强化黑月牙: '强化黑月牙',
                        强化黑月牙_info: '强化黑月牙',
                        天锁: '天锁',
                        天锁_info: '锁定技,出牌阶段开始时,若你未装备武器牌,则你获得一张【天锁斩月】',
                        tiansuozhanyue_skill: '天锁斩月',
                        tiansuozhanyue2_skill: '开挂',
                        聚灵: '聚灵',
                        聚灵_info: '造成伤害时你获得10点灵压',
                        无我荒途: '无我荒途',
                        wuwohuangtu2: '无我荒途',
                        无我荒途_info: '<li>锁定技,你被指定为伤害类卡牌的目标后,你可以弃置一张与之颜色相同的牌,你将你从此牌的目标中移除,你可以视为使用一张【杀】<br><li>出牌阶段限一次,你可以弃置手牌中的任意张【闪】并摸等量牌 ,视为使用1张【杀】 ,以此法每弃置1张【闪】 便获得1点<无光>值',
                        mly_jihua: '不灭殛华',
                        mly_jihua_info: '出牌阶段,你可以清空你的<无光>值并获得1张【杀】,你以此法每消耗1点<无光>值,你的下一张【杀】伤害+X(X为你消耗的无光值/2,向上取整,至少为1)',
                        qiuyingcankong: '囚影残空',
                        xiaotaidao: 'xiaotaidao',
                        xiaotaidao_info: 'xiaotaidao',
                        dataidao_info: 'dataidao',
                        mly_qiuying: '囚影残空',
                        mly_qiuying_info: "你造成伤害后获得5点必杀能量.<br><br>转换技:小太刀:出牌阶段,你可以消耗20点必杀能量,对1名其他角色造成1点雷电伤害,获得技能【不灭殛华】】'<br>'大太刀:出牌阶段,你可以消耗70点必杀能量,对任意名其他角色造成2点雷电伤害,移除技能【不灭殛华】'",
                        rensui1: '刃碎纷缭',
                        rensui2: '刃碎纷缭',
                        rensui3: '刃碎纷缭',
                        rensui: '刃碎纷缭',
                        rensui_info: '<li>你的回合开始时、结束阶段开始时,你获得一张【闪】<br><li>出牌阶段限一次,你可以弃置手牌中一张【闪】,亮出牌堆顶3张牌,并将其中的红色牌称为【剑气】置于你的武将牌上<br><li>你可以把【剑气】当作杀使用,并获得1点无光值',
                        蚩龙渺渊: '蚩龙渺渊',
                        蚩龙渺渊_info: '蚩龙渺渊',
                        mly_jihua_sha: '呵呵,刀下亡魂',
                        mly_jihua_sha_info: '呵呵,刀下亡魂',
                        黑月: '黑月',
                        黑月_info: '限定技,出牌阶段,你可以消耗120点灵压指定一名角色,该角色非锁定技失效并受到3点伤害',
                        wuliangdashu: '无量大数',
                        wuliangdashu_info: '每回合限一次,你使用杀指定目标后,你可以摸1张牌,弃置任意张与此杀花色相同的牌,若如此做,目标需额外打出等量的闪,每少打出一张闪,此杀的伤害+1',
                        qiangren1: '枪刃',
                        qiangren2: '枪刃',
                        即刻出阵: '枪刃',
                        DJlianfa: '枪刃',
                        qiangren: '枪刃',
                        qiangren_info: '锁定技,若你的武器栏为空,你视为装备【无双军刀】(攻击:2,你的杀会令防具失效)<br>出牌阶段限2次,你可以选择切换模式并摸1张牌.<br>连发:你的杀没有次数限制并能指定任意目标<br>重炮:你的杀伤害+1且无视距离.<br>出牌阶段限一次,你获得一张【火绳大剑】',
                        DJ_skill: 'DJ',
                        DJ_skill_info: '出牌阶段,你可以切换模式',
                        zhongpao: '重炮模式',
                        zhongpao2: '重炮模式',
                        zhongpao_info: '你的杀伤害+1',
                        wushuangdajian: '无双',
                        wushuangdajian_info: '锁定技,当你使用【杀】指定一名目标角色后,你令其防具技能无效直到此【杀】被抵消或造成伤害',
                        zymchengkai1: '橙铠',
                        zymchengkai2: '橙铠',
                        zymchengkai: '橙铠',
                        zymchengkai_info: '出牌阶段限一次,你获得两点护甲并摸2张牌,若如此做,直到你的下个回合开始,其他角色对你使用杀时需要弃置一张基本牌,否则杀对你无效',
                        shizhizhiwu: '式纸之舞',
                        shizhi2: '式纸之舞',
                        shizhi3: '式纸之舞',
                        shizhizhiwu_info: '出牌阶段,你可以把你的所有手牌置于你的武将牌上,称为【纸】<br><li>你可以把【纸】如手牌般使用和打出,当你使用【纸】时,强制触发对应的应变效果<br><li>你使用牌时可以发动,你消耗10点查克拉,使用的牌结算后你获得一张对应的复制牌',
                        天使之舞: '天使之舞',
                        tianshifeiyi: '天使之舞',
                        tianshidist: '天使之舞',
                        天使之舞_info: '<li>其他角色计算与你的距离+1,你使用牌没有距离限制<br><li>出牌阶段,你消耗至少120点查克拉才能发动,选择一名角色,对其造成3点火焰伤害',
                        xianshu1: '仙术',
                        xianshu2: '仙术',
                        xianshu3: '仙术',
                        xianshu: '仙术',
                        xianshu4: '仙术',
                        xianshu5: '仙术',
                        xianshu_info: '锁定技,<li>你不能翻面或横置,且不能成为延时锦囊牌目标.<br><li>你的【杀】伤害+1,当你的【杀】被闪避后你可以对目标角色造成1点伤害或摸一张牌<br><li>当你受到【杀】造成的伤害时,若该牌为黑色,那次伤害-1,否则你摸一张牌',
                        renjudashi: '忍具大师',
                        renjudashi2: '忍具大师',
                        renjudashi_info: '<li>游戏开始时,你将牌堆中的所有武器牌置入【忍具卷轴】中,你可以把其中的牌如手牌般使用<br><li>出牌阶段限两次,你可以将一张装备牌当作【杀】使用,摸一张牌,以此法使用的【杀】无视距离和防具,不计入次数',
                        yuanguzhili12: '远古之力',
                        yuanguzhili: '远古之力',
                        yuanguzhili6: '远古之力',
                        yuanguzhili8: '远古之力',
                        yuanguzhili_info: '<li>你的【杀】以及【决斗】造成的伤害+1;<br><li>每轮限一次,当你使用或打出一张牌时,你摸X张牌(X为此牌点数)<br><li>你使用点数为奇数的牌没有次数限制,使用点数为偶数的牌没有距离限制',
                        shouwangzhongqu: '兽王终曲',
                        shouwangzhongqu_info: '出牌阶段,你消耗至少120点能量才能发动,你选择一名角色,你展示牌堆顶的一张牌,你弃置一张点数与其相同的手牌,对被你指定的角色造成等于此牌点数的伤害',
                        cidunshajin: '磁遁·砂金',
                        cidunshajin2: '磁遁·砂金',
                        cidunshajin_info: '出牌阶段限一次,你可以把你的所有手牌置于你的武将牌上,称为【砂金】,你可以把【砂金】如手牌般使用和打出,当你使用【砂金】时,你摸一张牌,获得1点护甲',
                        cidunsjdz: '磁遁·砂金大葬',
                        cidunsjdz2: '磁遁·砂金大葬',
                        cidunsjdz3: '磁遁·砂金大葬',
                        cidunsjdz_info: '当你使用【杀】指定目标后,若你有20点查克拉,你可以消耗20点查克拉,将其的至多X张牌置于其武将牌上(X为其体力值).若这些牌中:有装备牌,你将这些装备牌中的一张置于弃牌堆;有锦囊牌,你摸一张牌.其于回合结束时获得其武将牌上的这些牌.当你因执行【杀】的效果而对一名角色造成伤害时,若该角色的手牌数和装备区内的牌数均不大于你,则此伤害+1',
                        huihuihuoyan: '火炎',
                        huihuihuoyan2: '火炎',
                        huihuihuoyan_info: '锁定技<br><li>你可以把一张牌当作【火攻】使用,你造成或者受到火焰伤害后,你摸两张牌<br><li>你于回合内首次造成火焰伤害时,你令此伤害+1',
                        huihuihongmo: '红魔',
                        huihuihongmo2: '红魔',
                        huihuihongmo3: '红魔',
                        huihuihongmo_info: '锁定技<br><li>你造成伤害后充能20点<br><li>你可以把一张手牌当作无懈可击使用<br><li>摸牌阶段你少摸一张牌,改为从牌堆中获得一张锦囊牌',
                        huihuibaoliemofa: '爆裂魔法',
                        huihuibaoliemofa_info: '限定技,出牌阶段,你若有至少120点能量,你可以清空你的能量,对全场敌方角色造成4点火焰伤害',
                        shizaishitaimei: 'PASTIKUN',
                        shizaishitaimei_info: '钓鱼技,出牌阶段限一次,你发动此技能后,会看到一段神秘视频',
                        nibeipianle: '就好这一口',
                        nibeipianle_info: '钓鱼技,出牌阶段限一次,你发动此技能后,会看到好康的',
                    },
                };
                lib.config.all.characters.add('破剑茶寮');
                lib.config.characters.add('破剑茶寮');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:破剑茶寮/image/${i}.jpg`)
                }
                lib.translate['破剑茶寮_character_config'] = `破剑茶寮`;
                return QQQ;
            });
        },
        package: {
            card: {
                card: {
                    芭蕉扇: {
                        image: `ext:破剑茶寮/image/芭蕉扇.jpg`,
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        skills: ['芭蕉扇_skill'],
                        distance: {
                            attackFrom: -5,
                        },
                        ai: {
                            equipValue(card) {
                                return 7;
                            },
                            basic: {
                                equipValue: 7,
                            },
                        },
                    },
                    tiansuozhanyue: {
                        image: 'ext:破剑茶寮/image/tiansuozhanyue.jpg',
                        type: 'equip',
                        fullskin: true,
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -1,
                        },
                        skills: ['tiansuozhanyue_skill', 'tiansuozhanyue2_skill'],
                        ai: {
                            equipValue: 9,
                            basic: {
                                order: 1,
                                useful: 2,
                                equipValue: 1,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
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
                            if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                        },
                        toself: true,
                    },
                    wushuangdajian: {
                        image: `ext:破剑茶寮/image/wushuangdajian.jpg`,
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -1,
                        },
                        ai: {
                            basic: {
                                equipValue: 2,
                            },
                        },
                        skills: ['wushuangdajian_skill'],
                    },
                    火绳大剑: {
                        image: `ext:破剑茶寮/image/火绳大剑.jpg`,
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        skills: ['wuliangdashu'],
                        distance: {
                            attackFrom: -1,
                        },
                        ai: {
                            equipValue(card) {
                                return 7;
                            },
                            basic: {
                                equipValue: 7,
                            },
                        },
                    },
                },
                translate: {
                    芭蕉扇: '芭蕉扇',
                    芭蕉扇_info: '锁定技,当你因执行【杀】的效果而对目标角色造成伤害后,你弃置所有至目标角色距离为1的其他角色的一张牌或弃置其两张牌',
                    tiansuozhanyue: '天锁斩月',
                    tiansuozhanyue_info: '你在以下时机可以选择一项:<li>摸一张牌<li>视为使用一张不计入次数的杀<br><br>时机:<li>摸牌阶段开始时<li>出牌阶段开始时',
                    wushuangdajian: '无双大剑',
                    wushuangdajian_info: '你的杀无视防具',
                    火绳大剑: '火绳大剑',
                    火绳大剑_info: '锁定技,每回合限一次,你使用杀指定目标后,你可以摸1张牌,弃置任意张与此杀花色相同的牌,若如此做,目标需额外打出等量的闪,每少打出一张闪,此杀的伤害+1',
                },
            },
            intro: "<P><b>【前言】<br><br></b><span style='color: #E3CF57'>【破剑茶寮】</span>一词出现于电视剧<少年张三丰>中,因为这个名字听上去很有B格就拿来当拓展名了.<br>本拓展武将成分复杂,来源于游戏、动漫、小说或者特摄,属于大乱炖的类型,技能的话基本上是想到啥就设计成那样了,因此武将与武将之间的强度差异可能会比较暖心,部分代码借鉴了现有的模板<br>本拓展的能量条代码以及奥义代码借鉴了综漫季拓展作者的代码(已取得作者同意),部分奥义会更改游戏中的音乐,因此在体验此拓展时建议打开背景音乐,以此获得最佳体验效果.<br><P><b>【名词以及机制介绍】<br><br></b>【必杀能量】、【查克拉】、【灵压】都属于【能量】的一种,获得的时机分别是:自己的摸牌阶段结束后;回合外获得牌后、回合结束后.部分武将会通过造成伤害或者发动技能来充能<br><br>【能量】是让你发动【大招】并触发奥义的必要条件<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '大文豪',
            version: '1.2',
        },
    };
});

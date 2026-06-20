import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '超能勇士',
        content(config, pack) {
            lib.element.player.$hideCharacter = function () {
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
            }; //暗置角色
            lib.skill._cnysjxmzwpy = {
                trigger: { player: 'dieBegin' },
                _priority: 2,
                forced: true,
                filter(event, player) {
                    return player.name == 'wzry_jixiaoman';
                },
                content() {
                    game.playcnys(['jxmzwpy1', 'jxmzwpy2', 'jxmzwpy3', 'jxmzwpy4', 'jxmzwpy5'].randomGet());
                },
            };
            lib.skill._cnyszhengwangpeiyin = {
                trigger: { global: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/超能勇士/audio', trigger.player.name);
                },
            };
            lib.skill._dieyzbdaitu = {
                trigger: {
                    global: 'dieEnd',
                },
                forceDie: true,
                forced: true,
                filter(event, player) {
                    return player.name1 == 'daitu_waidaomoxiang' || player.name2 == 'daitu_waidaomoxiang';
                },
                content() {
                    if (trigger.player.name1 == 'huoyingyzb_daitu' || trigger.player.name2 == 'huoyingyzb_daitu') {
                        player.die();
                    }
                },
            };
            lib.skill._removewdmx = {
                trigger: {
                    player: 'die',
                },
                forceDie: true,
                forced: true,
                filter(event, player) {
                    return player.name1 == 'daitu_waidaomoxiang' || player.name2 == 'daitu_waidaomoxiang';
                },
                content() {
                    game.removePlayer(player);
                },
            };
            lib.skill._diewdmx = {
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return (current.name1 == 'daitu_waidaomoxiang' || current.name2 == 'daitu_waidaomoxiang') && player == current;
                    });
                },
                content() {
                    if ((player.name1 != 'daitu_waidaomoxiang' || player.name2 != 'daitu_waidaomoxiang') && !player.storage.removewdmx) {
                        player.storage.removewdmx = 0;
                    }
                    if (player.storage.removewdmx < 4) {
                        player.storage.removewdmx++;
                    } else {
                        player.die();
                    }
                },
            };
            lib.skill._jishentianhoubumie = {
                trigger: {
                    player: ['dying', 'dieBegin'],
                },
                silent: true,
                fixed: true,
                forced: true,
                filter(event, player) {
                    return player.name == 'tianhou_nvwushen';
                },
                content() {
                    trigger.cancel();
                    player.classList.remove('dead');
                    player.clearSkills();
                    if (!player.hp >= 0) {
                        player.hp = 0;
                        player.update();
                        if (!player.hasSkill('nvshenshenpan')) {
                            player.addSkill('nvshenshenpan');
                        }
                        if (!player.hasSkill('nvshenbumie')) {
                            player.addSkill('nvshenbumie');
                        }
                    }
                },
            };
            HTMLDivElement.prototype.cnysRtx = function (bg, pos, time, func) {
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
            if (config.wzdshuangjiheji) {
                lib.skill._shuangjiheji = {
                    trigger: {
                        global: 'gameStart',
                    },
                    firstDo: true,
                    silent: true,
                    forced: true,
                    fixed: true,
                    superCharlotte: true,
                    charlotte: true,
                    content() {
                        if (player.name1 == 'wzd_huoleiting' && !get.config('double_character')) {
                            player.init(player.name, 'wzd_jisufeng');
                        }
                        if (player.name1 == 'wzd_jisufeng' && !get.config('double_character')) {
                            player.init(player.name, 'wzd_huoleiting');
                        }
                    },
                };
            }
            lib.skill._kaijujinengtiaojian = {
                trigger: {
                    global: 'gameStart',
                },
                forced: true,
                _priority: 999,
                nobracket: true,
                content() {
                    if (player.name1 == 'wzd_huoleiting' || player.name2 == 'wzd_huoleiting') {
                        player.addSkill('wzd_yueshi');
                        player.addSkill('hlt_ltbyz3');
                    }
                    if (player.name1 == 'wzd_jisufeng' || player.name2 == 'wzd_jisufeng') {
                        player.addSkill('jsfjtlts');
                    }
                    if (player.name1 == 'tianhou_nvwushen' || player.name2 == 'tianhou_nvwushen') {
                        if (!player.hasSkill('nvshenshenpan')) {
                            player.addSkill('nvshenshenpan');
                        }
                        if (!player.hasSkill('nvshenbumie')) {
                            player.addSkill('nvshenbumie');
                        }
                    }
                },
            };
            lib.group.push('cnys_jichezu');
            lib.translate.cnys_jichezu = '⏱';
            lib.translate.tianhou_nvwushen_ab = '机神天后';
            lib.characterTitle.tianhou_nvwushen = '她是一位拥有未卜先知能力的预言者,知道一切未来即将发生的事,却从来不会泄露自己所知.';
            lib.translate.hyrs_yuzhiboyou_ab = '宇智波鼬';
            lib.characterTitle.hyrs_yuzhiboyou = '少年天才';
            lib.translate.wxgd_bulide_ab = '方舟驶员';
            lib.characterTitle.wxgd_bulide = '无限轨道部队';
            lib.translate.ygsw_dunyong_ab = '盾之勇者';
            lib.characterTitle.ygsw_dunyong = '异世界御宅族';
            lib.characterTitle.wotuixingyeai = '<img src=extension/超能勇士/wotui_xingyeai_jieshao.gif' + ' width="250" height="200">';
            lib.translate.huolongshaonvyo_ab = '火龙之主';
            lib.characterTitle.huolongshaonvyo = '战场火焰';
            lib.translate.xueling_ab = '护狼使';
            lib.characterTitle.xueling = '孤原公主';
            lib.translate.suifengke_ab = '随风客';
            lib.characterTitle.suifengke = '流浪将军';
            lib.translate.xiayeying_ab = '夏夜莺';
            lib.characterTitle.xiayeying = '潭花倒影';
            lib.translate.muguangnvshen_ab = '暮光女神';
            lib.characterTitle.muguangnvshen = '圣身修果';
            game.mp46 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/超能勇士/mp4/${Q}.mp4`;
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
            game.playcnys = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/超能勇士/audio', fn);
                }
            };
        },
        precontent() {
            lib.group.push('cnys_chun');
            lib.translate.cnys_chun = '春';
            lib.group.push('cnys_xia');
            lib.translate.cnys_xia = '夏';
            lib.group.push('cnys_qiu');
            lib.translate.cnys_qiu = '秋';
            lib.group.push('cnys_dong');
            lib.translate.cnys_dong = '冬';
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '超能勇士',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    character: {
                        muguangnvshen: ['female', 'cnys_chun', 5, ['✴️', 'yingcangji'], ['des:光明美丽的圣女,恪守心灵本真的善性,终于在某一天获得了暮光之力,得道成果.(暮光女神的专属牌无法指定其为目标)<li>本武将具有隐藏技.<font color=#FFFFFF>提示:先要觉醒星银光释再濒死达到隐藏技的开启条件并接着获得25层圣痕标记即可.']],
                        xiayeying: ['female', 'cnys_xia', 3, ['yyzhj', 'yyyhy', 'yyywq', 'yeyindyx'], ['des:灼灼夏夜风清水静,在一个尘封的深潭里埋葬了一个不为人知的秘密——小女孩.她美好的幻想代表着未完成的愿望,化成一只夜莺游荡在回忆的深潭边.']],
                        suifengke: ['male', 'cnys_qiu', 4, ['yelsqc', 'xiayixing', 'sfkyqz', 'sfkdeycj'], ['hiddenSkill', 'des:无敌的剑客又怎样呢？还不是守不住自己的家国.曾经我也拥有信赖的战友,如今仅剩空虚躯壳下那孤独灵魂的幻想——可是,即便收起无力的刀刃,也要尝试在挥出的那一刻回到巅峰!<li>本武将具有隐藏技.<font color=#FFFFFF>提示:拥有超过100个侠义行标记进入濒死状态.']],
                        xueling: ['female', 'cnys_dong', '2/6/1', ['piaohua', 'hanlin', 'dongyue'], ['zhu', 'des:后山的空地里有些陵,西川的河从前缓缓淌过,然而她悄然而至,却又于我们的匆匆观望中淡淡褪去,你只余下一抹清伤.']],
                        wotuixingyeai: ['female', 'cnys_chun', '1/2/1', ['beidaotongsile', 'xya_jnjs'], ['des:爱留着一头及腰的紫色长发,紫色的双眼中有着星星一样的图案.她身材娇小、美貌出众,但脸上挂着的不够真诚的笑容起初并不足以让粉丝放心地去推她,直到她看见自己的孩子为自己应援时,她才能够露出真正迷人的笑容,爱出身于一个单亲家庭,她曾遭受到母亲长期的家暴.当她的母亲在她还小的时候就因盗窃而被捕时,爱在对方入狱的那段时间里被暂时托管到了孤儿院.然而,即便后来母亲出狱了,对方也没有来将爱接回家.此后长期在孤儿院生活的爱也没有过爱他人或是被他人所爱的经历.(注意:爱死亡后若武将变换则技能无法生效.)']],
                        huolongshaonvyo: ['female', 'cnys_xia', 8, ['hlzz_longxian', 'hlzz_yanwei', 'hlzz_ffcylt', 'hlzz_ffcylt3', 'hlzz_ffcylt5', 'hlzz_ffcylt4'], ['des:莱彻女王磨下的异端者之一,长期与妮姬战斗的先锋大将.十分好战,且具有破坏倾向.']],
                        ygsw_dunyong: ['male', 'cnys_qiu', '0/Infinity', ['ygsw_dunzhiyongzhe', 'ygsw_nudun', 'ygsw_xindun', 'ygsw_mingdun'], ['zhu', 'des:身为盾之勇者,拥有着极高的防御能力,但拥有圣武器的人无法使用其他武器,因此持有盾的他缺乏常规攻击能力.平时的战术是自己压制住敌人,由同伴进行攻击.部分盾牌(怒盾、心盾等)拥有的反击能力也经常作为攻击手段.']],
                        wxgd_bulide: ['female', 'cnys_dong', 3, ['fzszjiayu', 'fzszjifa', 'fzszguiji', 'fzszwuxian'], ['zhu', 'des:工作狂、完美主义者,在无限轨道部队担任驾驶员.她的驾驶能力在方舟里显然是最高超的.']],
                        wzd_huoleiting: ['none', 'cnys_chun', 6, [], ['des:时光之城现任城主,洛洛操控战斗最多的机车战士,他善良,仁慈,正直,勇敢,成熟,遇到不公的事总会挺身而出,面对问题处变不惊,在危难时刻宁愿战死也绝不会丢下朋友独自逃命,多次对敌人出手相救,因此不但得到了机车族的认可,更是得到了敌人的尊重.是机车族的灵魂人物.']],
                        wzd_jisufeng: ['none', 'cnys_xia', 6, [], ['des:速度型机车战士,做事比较冲动,但为人很善良,正义勇敢,疾恶如仇,个性耿直,有保护弱者的精神,以儆恶除奸为己任,原月神殿第一大将,现任月神殿殿主.']],
                        hyrs_yuzhiboyou: ['male', 'cnys_qiu', 3, ['hyrsyouwuya', 'yzbyouwanhuatong'], ['des:火之国木叶隐村宇智波一族的天才忍者,宇智波佐助的哥哥.年幼时他与宇智波止水是挚友,实力强大,擅长使用幻术.为了保护村子免受战乱,同时为了宇智波一族的荣耀之名,被迫接受了木叶高层志村团藏下令的灭族任务,留下了弟弟佐助并刺激他向自己复仇,之后加入晓组织做卧底,代号朱(朱雀).']],
                        tianhou_nvwushen: ['none', 'cnys_jichezu', '1/99', [], ['des:她是一位拥有未卜先知能力的预言者,知道一切未来即将发生的事,却从来不会泄露自己所知.']],
                        huoyingyzb_daitu: ['male', 'cnys_dong', 1, ['daitushenwei', 'daitu_wdmxzhaohuan'], ['des:临死之际为宇智波一族前任首领宇智波斑所救,在他的阴谋设计下目睹了野原琳死亡后痛不欲生,认识到战争的残酷,从此堕入黑暗,认可了斑的思想.']],
                        daitu_waidaomoxiang: ['female', 'shen', Infinity, ['wdmxsuolian', 'wdmxwaidaoleidian', 'wdmxhuanlongjiufengjin'], ['des:它是被抽离了查克拉的十尾躯壳,外观为巨大的人形,有九只眼,颜色与身体宛如枯木,背后有十根柱状物突起.']],
                        bxjg_qingtiansheng: ['none', 'cnys_chun', 5, ['qtsyongshi', 'qtszhongquan', 'qtsbianxing'], ['des:猩猩队长在<变7>中难得表现出来的形态.']],
                        bxjg_qingtianshengerhao: ['none', 'cnys_chun', 5, ['qtshanzhan', 'qtsyushou', 'qtsbianxing'], ['des:擎天圣为阻止威震天<净化>塞伯坦而与威震天同归于尽,换来了塞伯坦有机体与科技体的和谐统一.']],
                        wzry_jixiaoman: ['female', 'cnys_xia', 4, ['jxmsuibianyishi', 'jxmsuibianershi'], ['des:小满脖子上的项链是母亲留下的遗物,小满一直细心珍藏.项链呈贝壳样式,里面隐隐浮现出一种奇怪的暗纹,似乎与海都有某种特殊联系.这也寄托了母亲最后的愿望,希望小满在成年后去往海都,破解项链上的秘密.而项链里也有小满的全家照.']],
                    },
                    characterTitle: {
                    },
                    characterIntro: {
                    },
                    skill: {
                        shbj: {
                            mark: true,
                            marktext: '⚜',
                            intro: {
                                content(storage, player, skill) {
                                    return '当前有' + storage + '层圣痕标记<li>【至少最后一层圣痕标记失去后获得一点护甲】';
                                },
                            },
                            onremove(player) {
                                player.changeHujia();
                            },
                        },
                        wzzm: {
                            hiddenSkill: true,
                            forced: true,
                            filter(event, player) {
                                return player.hp > 2;
                                return true;
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            usable: 2,
                            logTarget: () => game.filterPlayer().sortBySeat(_status.currentPhase),
                            content() {
                                'step 0';
                                event.targets = lib.skill.wzzm.logTarget();
                                ('step 1');
                                if (targets.length) {
                                    event.target = targets.shift();
                                    if (!event.target.isIn()) event.redo();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                const next = target.chooseToRespond(`无争之冕:打出一张杀,否则受到${get.translation(player)}造成的1点伤害`, { name: 'sha' });
                                next.set('ai', (card) => {
                                    const evt = _status.event.parent;
                                    if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
                                    if (evt.target.hasSkillTag('noSha')) return -1;
                                    return get.order(card);
                                });
                                next.autochoose = lib.filter.autoRespondSha;
                                ('step 3');
                                if (result.bool == false) target.damage('nocard');
                                event.goto(1);
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                                xueling: 'piaohua2',
                            },
                        },
                        xhsy: {
                            audio: 'ext:超能勇士/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            silent: true,
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player.isIn() && !event.player.hasSkill('shbj');
                            },
                            content() {
                                player.addMark('shbj', trigger.num);
                            },
                            popup: false,
                        },
                        xygs: {
                            derivation: 'zmxy',
                            juexingji: true,
                            forced: true,
                            trigger: {
                                global: ['phaseZhunbeiBegin', 'phaseAfter', 'recoverBegin', 'loseHpBegin'],
                            },
                            audio: 'ext:超能勇士/audio:2',
                            filter(event, player) {
                                return player.countMark('shbj') >= 12;
                            },
                            content() {
                                player.awakenSkill('xygs');
                                player.removeSkill('shbj');
                                player.removeSkill('xhsy');
                                player.gainMaxHp();
                                player.hp = player.maxHp;
                                player.addSkill('zmxy');
                                player.phase('nodelay');
                                player.gain(game.createCard('cardclpz', 'black'), 'gain2');
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        zmxy2: {
                            charlotte: true,
                            ai: {
                                unequip2: true,
                            },
                        },
                        zmxy: {
                            audio: 'ext:超能勇士/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            logTarget: 'target',
                            forced: true,
                            filter(event, player) {
                                if (event.target == player) return false;
                                if (event.target.hasSkill('baiban') && event.target.hasSkill('zmxy2')) return false;
                                return get.tag(event.card, 'damage');
                            },
                            content() {
                                trigger.target.addTempSkill('baiban');
                                trigger.target.addTempSkill('zmxy2');
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha') range[1] += 2;
                                },
                            },
                        },
                        chdy: {
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hujia;
                            },
                            content() {
                                trigger.cancel();
                                player.changeHujia();
                                player.update();
                            },
                        },
                        wmsx: {
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    player.hp >= 0 &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current.hp < 3;
                                    })
                                );
                            },
                            content() {
                                var list = game.filterPlayer(function (current) {
                                    return current != player && current.hp < 3;
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    player.line(target);
                                    var hp1 = player.hp;
                                    var hp2 = target.hp;
                                    player.hp = Math.min(player.maxHp, hp2);
                                    target.hp = Math.min(target.maxHp, hp1);
                                    player.update();
                                    target.update();
                                    game.log(player, '和', target, '交换了体力值');
                                }
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                                xueling: 'piaohua2',
                            },
                        },
                        ryhh: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter: (event) => !event.numFixed,
                            content() {
                                player.gain(game.createCard('cardnycx', 'red'), 'gain2');
                                trigger.num = Math.max(0, player.getHp() - player.countCards('h'));
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                                xueling: 'piaohua2',
                            },
                        },
                        '✴️': {
                            audio: 'ext:超能勇士/audio:2',
                            nobracket: true,
                            charlotte: true,
                            firstDo: true,
                            forced: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            content() {
                                player.addSkill('xhsy');
                            },
                            mod: {
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.name == 'sha') return false;
                                },
                            },
                            group: ['ryhh', 'wzzm', 'wmsx', 'bugepai', 'xygs'],
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        yingcangji: {
                            charlotte: true,
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                'step 1';
                                player.addSkill('xhsy');
                                player.hp = player.maxHp;
                                player.removeSkill('yingcangji');
                                player.addSkill('nvshenjiangling');
                                player.draw(3);
                                player.say(['尔等凡人竟敢触犯神明的法则!', '久违的神力又回来了～', '总忘归期,女神再临…'].randomGet());
                                game.log(player, '触发了隐藏技能【<font color=#cFF0000>女神降临</font>】的开启条件!(需已触发【星银光释】)');
                            },
                            ai: {
                                expose: 0.1,
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                                xueling: 'piaohua2',
                            },
                        },
                        nvshenjiangling: {
                            charlotte: true,
                            juexingji: true,
                            trigger: {
                                global: ['phaseZhunbeiBegin', 'phaseAfter', 'recoverBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            audio: 'ext:超能勇士/audio:2',
                            filter(event, player) {
                                return player.countMark('shbj') >= 25;
                            },
                            content() {
                                player.removeSkill('nvshenjiangling');
                                player.removeSkill('xhsy');
                                player.removeSkill('shbj');
                                player.removeMark('shbj', player.countMark('shbj'));
                                player.hp = 25;
                                player.maxHp = 25;
                                player.draw(10);
                                ui.background.setBackgroundImage('extension/超能勇士/muridexingxing.gif');
                                if (player.name1 == 'muguangnvshen') player.node.avatar.setBackgroundImage('extension/超能勇士/image/baifa_muguangnvshen.jpg');
                                if (player.name2 == 'muguangnvshen') player.node.avatar2.setBackgroundImage('extension/超能勇士/image/baifa_muguangnvshen.jpg');
                                player.say(['本女神现在才刚刚睡醒而已～', '封印解除吧～'].randomGet());
                            },
                        },
                        bugepai: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            cardSkill: true,
                            filter(event, player) {
                                if (event.type != 'discard') return false;
                                var evt = event.getl(player);
                                if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                for (var i of evt.cards2) {
                                    if (i.name == 'cardnycx') return true;
                                }
                                return false;
                            },
                            content() {
                                var num = 0,
                                    cards = trigger.getl(player).cards2;
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].name == 'cardnycx') num++;
                                }
                                if (Math.random() < 0.11 + num * 0.23) {
                                    player.draw(num);
                                }
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                                xueling: 'piaohua2',
                            },
                        },
                        yyyhy: {
                            nobracket: true,
                            group: ['yyyhy2', 'yyyhy3'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countDisabled() > 0 && game.roundNumber % 4 == 0;
                            },
                            content() {
                                var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                                for (var i = 0; i < list.length; i++) {
                                    if (!player.isDisabled(list[i])) list.splice(i--, 1);
                                    else player.enableEquip(list[i]);
                                }
                            },
                        },
                        yyywq: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                                player: ['loseEnd', 'changeHp', 'phaseDrawBegin1'],
                            },
                            forced: true,
                            audio: 'ext:超能勇士/audio:2',
                            filter(event, player) {
                                return player.countCards('e') <= 2;
                            },
                            content() {
                                var list = [];
                                for (var i = 1; i <= 5; i++) {
                                    if (!player.getEquip(i)) {
                                        var name = get.inpile('equip' + i).randomGet();
                                        if (name) {
                                            var card = game.createCard(name);
                                            list.push(card);
                                            player.equip(card);
                                        }
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'shunshou') return;
                                        if (card.name == 'guohe') {
                                            if (!target.countCards('h')) return [0, 1];
                                        } else if (get.tag(card, 'loseCard')) {
                                            return [0, 1];
                                        }
                                    },
                                },
                                noh: true,
                            },
                        },
                        yyzhj: {
                            audio: 'ext:超能勇士/audio:2',
                            nobracket: true,
                            firstDo: true,
                            silent: true,
                            forced: true,
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            content() {
                                player.addSkill('yyzhj_1') && player.removeSkill('yyzhj');
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:超能勇士/audio:2',
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard: true,
                                    viewAs: {
                                        name: 'shunshou',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('e')) return false;
                                    },
                                    prompt: '将一张装备区中的牌当顺手牵羊使用或打出',
                                    position: 'e',
                                    check() {
                                        return 1;
                                    },
                                    onuse: (skill, player) => [player.addSkill('yyzhj2') && player.removeSkill('yyzhj_1')],
                                    ai: {
                                        order: 0.9,
                                        skillTagFilter(player) {
                                            if (!player.countCards('e')) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (target.countCards('e') && get.tag(card, 'respondShunshou') && current < 0) return 0.6;
                                            },
                                        },
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [7, 5.1, 2],
                                            order: 7.5,
                                        },
                                        result: {
                                            player: 1,
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
                                        },
                                        wuxie(target, card, player, viewer) {
                                            if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                                                return 0;
                                            }
                                        },
                                        tag: {
                                            loseCard: 1,
                                            gain: 1,
                                        },
                                    },
                                },
                                3: {
                                    audio: 'ext:超能勇士/audio:2',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.player != player && !event.player.isTurnedOver() && event.player.isAlive();
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (trigger.player.countDisabled() < 5) {
                                            var list = [];
                                            for (var i = 1; i < 6; i++) {
                                                if (!trigger.player.isDisabled(i)) list.add(i == 3 || i == 4 ? 6 : i);
                                            }
                                            var num = list.randomGet();
                                            if (num != 6) trigger.player.disableEquip(num);
                                            else {
                                                trigger.player.disableEquip(3);
                                                trigger.player.disableEquip(4);
                                            }
                                        } else {
                                            trigger.player.turnOver();
                                        }
                                        ('step 1');
                                        player.addSkill('yyzhj_1') && player.removeSkill('yyzhj_3');
                                    },
                                },
                            },
                            popup: false,
                        },
                        yeyindyx2: {
                            silent: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return 0;
                                },
                            },
                            onremove(player) {
                                player.loseHp(player.hp);
                            },
                            forced: true,
                            popup: false,
                        },
                        yeyindyx: {
                            global: 'yeyindyx',
                            trigger: {
                                global: 'gameStart',
                            },
                            filter(event, player) {
                                return player.name !== 'xiayeying';
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.addTempSkill('yeyindyx2', { player: 'damageAfter' });
                            },
                        },
                        yyzhj2: {
                            silent: true,
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'sha',
                            },
                            filterCard: {
                                type: 'equip',
                            },
                            position: 'h',
                            viewAsFilter(player) {
                                return player.hasCard({ type: 'equip' }, 'h');
                            },
                            check: (card) => 5 - get.value(card),
                            mod: {
                                globalTo(from, to, current) {
                                    if (to.countCards('e') > 2) {
                                        return current + to.countCards('e');
                                    } else {
                                        return current + to.hp;
                                    }
                                },
                            },
                            onuse: (skill, player) => [player.addSkill('yyzhj_3') && player.removeSkill('yyzhj2')],
                            ai: {
                                basic: {
                                    useful(card, i) {
                                        if (_status.event.player.hp > 1) {
                                            if (i == 0) return 4;
                                            return 1;
                                        }
                                        if (i == 0) return 7.3;
                                        return 3;
                                    },
                                    value(card, player, i) {
                                        if (player.hp > 1) {
                                            if (i == 0) return 5;
                                            return 1;
                                        }
                                        if (i == 0) return 7.3;
                                        return 3;
                                    },
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 3;
                                },
                                result: {
                                    target(player, target) {
                                        if (target && target.isDying()) return 2;
                                        if (target && !target.isPhaseUsing()) return 0;
                                        if (lib.config.mode == 'stone' && !player.isMin()) {
                                            if (player.getActCount() + 1 >= player.actcount) return 0;
                                        }
                                        var shas = player.getCards('h', 'sha');
                                        if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('h', 'zhuge'))) {
                                            return 0;
                                        }
                                        shas.sort(function (a, b) {
                                            return get.order(b) - get.order(a);
                                        });
                                        var card;
                                        if (shas.length) {
                                            for (var i = 0; i < shas.length; i++) {
                                                if (lib.filter.filterCard(shas[i], target)) {
                                                    card = shas[i];
                                                    break;
                                                }
                                            }
                                        } else if (player.hasSha() && player.needsToDiscard()) {
                                            if (player.countCards('h', 'hufu') != 1) {
                                                card = { name: 'sha' };
                                            }
                                        }
                                        if (card) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return (
                                                        get.attitude(target, current) < 0 &&
                                                        target.canUse(card, current, null, true) &&
                                                        !current.hasSkillTag('filterDamage', null, {
                                                            player: player,
                                                            card: card,
                                                            jiu: true,
                                                        }) &&
                                                        get.effect(current, card, target) > 0
                                                    );
                                                })
                                            ) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    save: 1,
                                    recover: 0.1,
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
                            },
                            forced: true,
                            popup: false,
                        },
                        yyyhy2: {
                            trigger: {
                                player: ['loseMaxHpBegin', 'damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player, num) {
                                return player.countCards('e') > 0;
                            },
                            content() {
                                'step 0';
                                if (Math.random() < 1 - player.hp * player.hp * player.hp * player.hp * player.hp * player.hp * 0.01) {
                                    trigger.cancel();
                                    player.randomDiscard('e', trigger.num);
                                }
                            },
                        },
                        yyyhy3: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseDiscardEnd'],
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                return game.roundNumber % 4 == 0;
                            },
                            content() {
                                player.recover();
                                player.draw(2);
                            },
                        },
                        yelsqc: {
                            charlotte: true,
                            nobracket: true,
                            hiddenSkill: true,
                            audio: 'ext:超能勇士/audio:2',
                            trigger: {
                                player: ['showCharacterEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseUseTarget({ name: 'wugu' }, true);
                                player.addTempSkill('longtanyu', { player: 'phaseZhunbeiBegin' });
                                var num = Math.floor(Math.random() * 17 + 8);
                                if (num > 0) player.storage.xiayixing += num;
                                player.markSkill('xiayixing');
                            },
                        },
                        xiayixing: {
                            audio: 'ext:超能勇士/audio:1',
                            group: 'xiayixing2hao',
                            nobracket: true,
                            init(player) {
                                player.storage.xiayixing = 0;
                            },
                            intro: {
                                content: 'mark',
                            },
                            forced: true,
                            trigger: {
                                global: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.source && event.source.isEnemiesOf(player) && player.storage.xiayixing < 100;
                            },
                            content() {
                                var num = Math.floor(Math.random() * 13 + 7);
                                if (num > 0) player.storage.xiayixing += num;
                                player.markSkill('xiayixing');
                            },
                            ai: {
                                combo: 'fanpu',
                            },
                        },
                        yuqianzhan: {
                            audio: 'ext:超能勇士/audio:5',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.xiayixing >= 8;
                            },
                            content() {
                                player.storage.xiayixing -= 8;
                                trigger.num++;
                                player.addTempSkill('yuqianzhan2', { source: 'damageAfter' });
                            },
                        },
                        yuqianzhan2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.xiayixing >= 8;
                            },
                            content() {
                                if (Math.random() < 0.88) {
                                    player.storage.xiayixing -= 8;
                                    player.draw(2);
                                    player.addTempSkill('yuqianzhan3', { source: 'damageAfter' });
                                }
                            },
                        },
                        yuqianzhan3: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.xiayixing >= 8;
                            },
                            content() {
                                if (Math.random() < 0.78) {
                                    player.storage.xiayixing -= 8;
                                    player.changeHujia();
                                    player.addTempSkill('yuqianzhan4', { source: 'damageAfter' });
                                }
                            },
                        },
                        yuqianzhan4: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.xiayixing >= 8;
                            },
                            content() {
                                if (Math.random() < 0.68) {
                                    player.storage.xiayixing -= 8;
                                    player.gainMaxHp();
                                    player.recover();
                                    player.addTempSkill('yuqianzhan5', { source: 'damageAfter' });
                                }
                            },
                        },
                        yuqianzhan5: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.xiayixing >= 8;
                            },
                            content() {
                                if (Math.random() < 0.58) {
                                    player.storage.xiayixing -= 8;
                                    trigger.player.die();
                                }
                            },
                        },
                        longtanyu: {
                            nobracket: true,
                            onremove(player) {
                                player.addTempSkill('jiaoquetu', { player: 'phaseZhunbeiBegin' });
                            },
                            trigger: {
                                player: ['phaseEnd', 'damageEnd'],
                            },
                            filter(event, player) {
                                if (player.countCards('h', { type: 'basic' }) <= 2) return true;
                                if (player.countCards('h', { type: ['trick', 'delay'] }) <= 2) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h', { type: 'basic' }) <= 2) {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card) == 'basic';
                                    });
                                    if (card) {
                                        player.gain(card, 'draw');
                                    }
                                    event.basiccard = card;
                                }
                                ('step 1');
                                if (event.basiccard) {
                                    if (player.hasUseTarget(event.basiccard)) {
                                        var next = player.chooseToUse();
                                        next.filterCard = function (card) {
                                            return card == event.basiccard;
                                        };
                                        next.prompt = '是否使用' + get.translation(event.basiccard) + '？';
                                    }
                                }
                                ('step 2');
                                if (player.countCards('h', { type: ['trick', 'delay'] }) <= 2) {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card) == 'trick' || get.type(card) == 'delay';
                                    });
                                    if (card) {
                                        player.gain(card, 'draw');
                                    }
                                    event.trickcard = card;
                                }
                                ('step 3');
                                if (event.trickcard) {
                                    if (player.hasUseTarget(event.trickcard)) {
                                        var next = player.chooseToUse();
                                        next.filterCard = function (card) {
                                            return card == event.trickcard;
                                        };
                                        next.prompt = '是否使用' + get.translation(event.trickcard) + '？';
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.7,
                            },
                        },
                        sfkyqz: {
                            nobracket: true,
                            silent: true,
                            forced: true,
                            popup: false,
                            trigger: {
                                source: 'damageBegin',
                            },
                            content() {
                                if (trigger.player.name !== 'suifengke') {
                                    player.addTempSkill('yuqianzhan', { source: 'damageAfter' });
                                }
                            },
                        },
                        jiaoquetu: {
                            audio: 'ext:超能勇士/audio:2',
                            init(player) {
                                if (player.name1 == 'suifengke') player.node.avatar.setBackgroundImage('extension/超能勇士/image/fengying.jpg');
                                if (player.name2 == 'suifengke') player.node.avatar2.setBackgroundImage('extension/超能勇士/image/fengying.jpg');
                            },
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            onremove(player) {
                                if (player.name1 == 'suifengke') player.node.avatar.setBackgroundImage('extension/超能勇士/image/suifengke.jpg');
                                if (player.name2 == 'suifengke') player.node.avatar2.setBackgroundImage('extension/超能勇士/image/suifengke.jpg');
                                player.addTempSkill('fengtaiming', { player: 'phaseZhunbeiBegin' });
                            },
                        },
                        fengtaiming: {
                            audio: 'ext:超能勇士/audio:2',
                            forced: true,
                            onremove(player) {
                                player.addTempSkill('longtanyu', { player: 'phaseZhunbeiBegin' });
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return true;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return get.distance(player, arg.target) <= 886886;
                                },
                            },
                        },
                        xiayixing2hao: {
                            audio: 'ext:超能勇士/audio:2',
                            trigger: {
                                player: ['loseHpBegin', 'loseMaxHpBegin'],
                            },
                            forced: true,
                            charlotte: true,
                            content() {
                                trigger.cancel();
                                trigger.player.damage(trigger.num - 1);
                            },
                            ai: {
                                jueqing: true,
                            },
                        },
                        sfkdedazhao: {
                            audio: 'ext:超能勇士/audio:1',
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, Infinity],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                target.damage();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                        },
                        sfkdeycj: {
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            lastDo: true,
                            filter(event, player) {
                                return player.storage.xiayixing >= 100;
                            },
                            content() {
                                player.hp = player.maxHp;
                                player.say(['吾虽浪迹天涯,却从未迷失本心.', '这一次……依旧如此.', '这个世界总是充满了纷争……'].randomGet());
                                player.addSkill('sfkdedazhao');
                                player.phase('nodelay');
                                player.storage.xiayixing += 999;
                                player.markSkill('xiayixing');
                                player.removeSkill('sfkdeycj');
                            },
                        },
                        hanlin: {
                            group: 'hanlin2',
                            silent: true,
                            nobracket: true,
                            _priority: -100,
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return (event.card && event.card.name == 'sha' && player.maxHp > 1) || (event.nature == 'fire' && player.maxHp > 1);
                            },
                            forced: true,
                            content() {
                                if (player.isDamaged()) {
                                    trigger.cancel();
                                    player.loseMaxHp(trigger.num);
                                } else {
                                    trigger.num *= 2;
                                }
                            },
                            ai: {
                                order: -100,
                            },
                            popup: false,
                        },
                        hanlin2: {
                            silent: true,
                            nobracket: true,
                            trigger: {
                                player: 'loseMaxHpBegin',
                            },
                            filter(event, player) {
                                return event.num >= player.maxHp;
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                player.loseMaxHp(player.maxHp - 1);
                            },
                            popup: false,
                        },
                        xl_xuehuafazhen: {
                            trigger: {
                                player: ['damageBegin', 'recoverBegin'],
                            },
                            _priority: 100,
                            forced: true,
                            filter(event, player) {
                                if (
                                    event.source &&
                                    event.source.hasSkillTag('unequip', false, {
                                        name: event.card ? event.card.name : null,
                                        target: player,
                                        card: event.card,
                                    })
                                )
                                    return false;
                                if (Math.random() > 2 / 3) return false;
                                return true;
                            },
                            content() {
                                trigger.num--;
                                trigger.player.draw(2);
                            },
                            ai: {
                                order: 100,
                            },
                        },
                        dongyue: {
                            group: 'dongyue2',
                            audio: 'ext:超能勇士/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: false,
                            delay: 0,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                if (ui.selected.cards.length > 1) return 0;
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                var player = get.owner(card);
                                var num = 0;
                                var evt2 = _status.event.parent;
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.parent.skill == 'dongyue' && evt.getParent(3) == evt2) num += evt.cards.length;
                                });
                                if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
                                    if (ui.selected.cards.length) {
                                        return -1;
                                    }
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i.hasSkill('haoshi') && !i.isTurnedOver() && !i.hasJudge('lebu') && get.attitude(player, i) >= 3 && get.attitude(i, player) >= 3) {
                                            return 11 - get.value(card);
                                        }
                                    }
                                    if (player.countCards('h') > player.hp) return 10 - get.value(card);
                                    if (player.countCards('h') > 2) return 6 - get.value(card);
                                    return -1;
                                }
                                return 10 - get.value(card);
                            },
                            content() {
                                player.give(cards, target);
                                var evt2 = event.getParent(3);
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.getParent(2).name == 'dongyue' && evt.getParent(5) == evt2) num += evt.cards.length;
                                });
                                if (num < 2 && num + cards.length > 1) {
                                    player.recover();
                                }
                            },
                            ai: {
                                order(skill, player) {
                                    if (player.hp < player.maxHp && player.storage.dongyue < 2 && player.countCards('h') > 1) {
                                        return 54088;
                                    }
                                    return 54088;
                                },
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
                                        if (player.hp == player.maxHp || player.storage.rende < 0 || player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                        }
                                        return Math.max(1, 5 - nh);
                                    },
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.type(card) == 'equip') {
                                            if (player.countCards('e', { subtype: get.subtype(card) })) {
                                                var players = game.filterPlayer();
                                                for (var i of players) {
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
                        dongyue2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 5,
                            audio: 'ext:超能勇士/audio:2',
                            filter(event, player) {
                                return !player.getEquip('xuehuafazhen');
                            },
                            content() {
                                'step 0';
                                if (!lib.inpile.includes('xuehuafazhen')) {
                                    lib.inpile.push('xuehuafazhen');
                                    event.card = game.createCard2('xuehuafazhen', 'spade');
                                } else {
                                    event.card = get.cardPile(function (card) {
                                        return card.name == 'xuehuafazhen';
                                    });
                                }
                                if (!event.card) event.card = get.cardPile('xuehuafazhen', 'field');
                                if (event.card) player.gain(event.card, 'gain2');
                            },
                        },
                        piaohua: {
                            audio: 'ext:超能勇士/audio:1',
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            _priority: 6,
                            forced: true,
                            content() {
                                player.gain(game.createCard('xuehuafazhen', 'heart', 7), 'gain2');
                                player.gain(game.createCard('xuehuafazhen', 'spade', 8), 'gain2');
                                player.addTempSkill('piaohua2', { player: 'phaseEnd' });
                            },
                        },
                        piaohua2: {
                            audio: 'ext:超能勇士/audio:2',
                            trigger: {
                                player: ['damageEnd', 'recoverEnd', 'loseHpEnd'],
                            },
                            usable: 2,
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('piaohua2'), lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (player.isHealthy()) return 0;
                                    if (player.hp < 0 && player.getDamagedHp() > 0) return 0;
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
                                if (result.bool) {
                                    var target = result.targets[0];
                                    var list = [];
                                    if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                                    if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                                    if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                                    player.addSkill(list);
                                }
                            },
                            forced: true,
                            popup: false,
                        },
                        beidaotongsile: {
                            audio: 'ext:超能勇士/audio:1',
                            group: ['beidaotongsile_1', 'beidaotongsile_2', 'beidaotongsile2'],
                            trigger: {
                                player: 'dieBegin',
                            },
                            nobracket: true,
                            charlotte: true,
                            superCharlotte: true,
                            forced: true,
                            forceDie: true,
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source !== player;
                            },
                            content() {
                                player.init(trigger.source.name);
                                trigger.source.init('wotuixingyeai');
                            },
                            logTarget: 'source',
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 0.2;
                                    return 1.5;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.hasFriend()) return;
                                        if (target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        if (player.name1 == 'wotuixingyeai') player.node.avatar.setBackgroundImage('extension/超能勇士/image/wotuixingyeai2.jpg');
                                        if (player.name2 == 'wotuixingyeai') player.node.avatar2.setBackgroundImage('extension/超能勇士/image/wotuixingyeai2.jpg');
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        if (player.name1 == 'wotuixingyeai') player.node.avatar.setBackgroundImage('extension/超能勇士/image/wotuixingyeai.jpg');
                                        if (player.name2 == 'wotuixingyeai') player.node.avatar2.setBackgroundImage('extension/超能勇士/image/wotuixingyeai.jpg');
                                    },
                                },
                            },
                        },
                        beidaotongsile2: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source !== player && player.identity == 'zhu';
                            },
                            content() {
                                'step 0';
                                player.identity = '粉丝';
                                player.showIdentity();
                                player.update();
                                ('step 1');
                                trigger.source.identity = 'zhu';
                                trigger.source.showIdentity();
                                trigger.source.update();
                                game.zhu = trigger.source;
                            },
                            logTarget: 'source',
                            popup: false,
                        },
                        xya_jnjs: {
                            nobracket: true,
                        },
                        hlzz_longxian: {
                            group: ['hlzz_longxian2', 'hlzz_longxian3'],
                            trigger: {
                                global: 'damageBegin4',
                            },
                            nobracket: true,
                            forced: true,
                            popup: false,
                            _priority: null,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                trigger.source = player;
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hlzz_longxian2: {
                            audio: 'ext:超能勇士/audio:2',
                            forced: true,
                            popup: false,
                            _priority: null,
                            trigger: {
                                source: 'damageBegin2',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return lib.linked.includes(event.nature);
                            },
                            content() {
                                trigger.nature = 'fire';
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hlzz_longxian3: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            _priority: -12345,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                if (trigger.num > 0 && trigger.nature == 'fire') trigger.num = Math.floor(trigger.num / 2);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'huogong') return 'zeroplayertarget';
                                        if (get.tag(card, 'fireDamage')) return 'zeroplayertarget';
                                    },
                                },
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hlzz_yanwei: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            nobracket: true,
                            forced: true,
                            filter(event, player) {
                                return event.num > 0 && !event.nature;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('伤害基数减一', '伤害有效')
                                    .set('prompt', '焰威:令即将对' + get.translation(trigger.player) + '令造成的伤害基数减一并摸两张牌,或令伤害有效同时获得一张【火攻】并使其在造成伤害之前的出牌阶段横置且进攻距离和手牌上限-2.')
                                    .set('choice', get.attitude(player, trigger.player) >= 0 ? 0 : 1)
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    });
                                ('step 1');
                                if (result.control == '伤害有效') {
                                    trigger.player.addTempSkill('hlzz_yanwei2', { source: 'damageEnd' });
                                    player.gain(game.createCard('huogong', 'red'), 'gain2');
                                } else {
                                    trigger.num--;
                                    player.draw(2);
                                }
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.name == 'huogong') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.name == 'huogong') return false;
                                },
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (target && get.attitude(player, target) > 0 && get.tag(card, 'damage')) return 'zeroplayertarget';
                                    },
                                },
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hlzz_yanwei2: {
                            trigger: {
                                player: ['phaseBefore', 'phaseAfter'],
                            },
                            _priority: 10,
                            silent: true,
                            forced: true,
                            content() {
                                if (!player.isLinked()) {
                                    player.link();
                                }
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance + 2;
                                },
                                maxHandcard(player, num) {
                                    return (num -= 2);
                                },
                            },
                            ai: {
                                order: 10,
                            },
                            popup: false,
                        },
                        hlzz_ffcylt2: {
                            trigger: {
                                global: 'damageBegin3',
                            },
                            usable: 1,
                            forced: true,
                            silent: true,
                            forced: true,
                            _priority: -1234,
                            filter(event, player) {
                                return game.roundNumber % 2 == 0 && event.nature == 'fire';
                            },
                            content() {
                                trigger.num += trigger.num;
                            },
                            popup: false,
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hlzz_ffcylt: {
                            group: 'hlzz_ffcylt2',
                            nobracket: true,
                            init(player) {
                                player.storage.hlzz_ffcylt = 0;
                            },
                            intro: {
                                content: 'mark',
                            },
                            forced: true,
                            trigger: {
                                player: ['damageAfter', 'loseHpAfter'],
                            },
                            content() {
                                player.storage.hlzz_ffcylt += trigger.num;
                                if (player.countMark('hlzz_ffcylt') > 6) {
                                    player.removeMark('hlzz_ffcylt', player.countMark('hlzz_ffcylt') - 6);
                                }
                                player.markSkill('hlzz_ffcylt');
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hlzz_ffcylt4: {
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countMark('hlzz_ffcylt') >= 4;
                            },
                            content() {
                                'step 0';
                                target.damage();
                                if (!target.isDamaged()) {
                                    target.damage(2, 'fire');
                                }
                                if (target.isDamaged()) {
                                    target.damage(target.maxHp - target.hp, 'fire');
                                }
                                ('step 1');
                                player.awakenSkill('hlzz_ffcylt');
                                player.awakenSkill('hlzz_ffcylt3');
                                player.awakenSkill('hlzz_ffcylt4');
                                player.awakenSkill('hlzz_ffcylt5');
                                player.removeMark('hlzz_ffcylt', player.countMark('hlzz_ffcylt'));
                            },
                            ai: {
                                order: 20,
                                fireAttack: true,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hlzz_ffcylt5: {
                            enable: 'phaseUse',
                            filterTarget: true,
                            selectTarget: [1, 2],
                            contentAfter() {
                                player.awakenSkill('hlzz_ffcylt');
                                player.awakenSkill('hlzz_ffcylt3');
                                player.awakenSkill('hlzz_ffcylt4');
                                player.awakenSkill('hlzz_ffcylt5');
                                player.draw(Math.min(player.maxHp, 20));
                                player.hp = player.maxHp;
                                player.removeMark('hlzz_ffcylt', player.countMark('hlzz_ffcylt'));
                            },
                            filter(event, player) {
                                return player.countMark('hlzz_ffcylt') >= 6;
                            },
                            content() {
                                if (targets.length == 1) {
                                    target.damage(4, 'fire');
                                } else {
                                    target.damage(2, 'fire');
                                }
                            },
                            line: 'fire',
                            ai: {
                                order: 25,
                                expose: 0.2,
                                threaten: 1.5,
                                result: {
                                    target(player, target) {
                                        if (player.hp < 3) return 0;
                                        if (get.attitude(player, target) >= 0) return 0;
                                        if (target.hp > player.hp) return 0;
                                        var eff = get.damageEffect(target, player, target, 'fire');
                                        if (eff < 0) {
                                            if (ui.selected.targets.length && target.hp > 2 && ui.selected.targets[0].hp > 2) {
                                                return 0;
                                            }
                                            if (target.nodying) return eff / 10;
                                            return eff / Math.sqrt(target.hp);
                                        }
                                        return 0;
                                    },
                                },
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hlzz_ffcylt3: {
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: [1, Infinity],
                            contentAfter() {
                                player.awakenSkill('hlzz_ffcylt');
                                player.awakenSkill('hlzz_ffcylt3');
                                player.awakenSkill('hlzz_ffcylt4');
                                player.awakenSkill('hlzz_ffcylt5');
                                player.recover(player.maxHp - player.hp - 1);
                                player.removeMark('hlzz_ffcylt', player.countMark('hlzz_ffcylt'));
                            },
                            filter(event, player) {
                                return player.countMark('hlzz_ffcylt') >= 2;
                            },
                            content() {
                                target.recover();
                                target.changeHujia();
                                target.draw();
                            },
                            ai: {
                                order: 15,
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown()) return 0;
                                        var num = 0;
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            if (get.attitude(player, i) > 2 && get.recoverEffect(i, player, player) > 0) {
                                                if (i.hp == 1) {
                                                    if (player.hp < player.maxHp) {
                                                        return 1;
                                                    } else {
                                                        num += 2;
                                                    }
                                                } else if (i.hp <= 2) {
                                                    num++;
                                                }
                                            }
                                        }
                                        if (num >= 3) return 1;
                                        return 0;
                                    },
                                },
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        ygsw_dunzhiyongzhe: {
                            audio: 'ext:超能勇士/audio:2',
                            init(player) {
                                player.changeHujia(3);
                            },
                            group: ['ygsw_dunzhiyongzhe2', 'ygsw_dunzhiyongzhe3', 'ygsw_dunzhiyongzhe4', 'ygsw_dunzhiyongzhe5'],
                            firstDo: true,
                            charlotte: true,
                            superCharlotte: true,
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.hp = 1;
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return 0;
                                },
                                targetEnabled(card, player, target, now) {
                                    if (target.countCards('h') == 0) {
                                        if (card.number > 4 || get.color(card) == 'black') return false;
                                    }
                                },
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                        },
                        ygsw_dunzhiyongzhe2: {
                            _priority: -1000,
                            silent: true,
                            forced: true,
                            trigger: {
                                player: ['recoverBegin'],
                            },
                            content() {
                                player.changeHujia(trigger.num);
                                trigger.num -= trigger.num;
                            },
                            popup: false,
                        },
                        ygsw_dunzhiyongzhe3: {
                            _priority: -1000,
                            silent: true,
                            forced: true,
                            trigger: {
                                player: ['damageBegin4'],
                            },
                            content() {
                                player.changeHujia(-trigger.num);
                                trigger.num -= trigger.num;
                            },
                            popup: false,
                        },
                        ygsw_dunzhiyongzhe4: {
                            audio: 'ext:超能勇士/audio:2',
                            _priority: -5201314,
                            trigger: {
                                global: ['changeHujiaAfter', 'changeHp'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hujia <= 0;
                            },
                            content() {
                                player.die();
                            },
                        },
                        ygsw_dunzhiyongzhe5: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source == player;
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.damage(trigger.num, trigger.nature, 'nosource');
                            },
                        },
                        ygsw_nudun: {
                            nobracket: true,
                            audio: 'ext:超能勇士/audio:1',
                            trigger: {
                                player: ['linkBefore', 'turnOverBefore', 'loseHpBegin', 'loseMaxHpBegin'],
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCardTarget({
                                    position: 'he',
                                    selectCard: [1, 3],
                                    filterTarget(card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return target != player;
                                    },
                                    ai1(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai2(target, onrewrite) {
                                        var att = get.attitude(_status.event.player, target);
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        if (onrewrite == 'linkBefore') {
                                            if (player.isLinked() || target.isLinked()) {
                                                return false;
                                            } else {
                                                return get.effect(target, player) <= 0;
                                            }
                                        }
                                        if (onrewrite == 'turnOverAfter') {
                                            if (player.isTurnedOver() || target.isTurnedOver()) {
                                                return false;
                                            } else {
                                                return get.effect(target, player) < 0;
                                            }
                                        }
                                        return 1 - att;
                                    },
                                    prompt: get.prompt('ygsw_nudun'),
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.num = result.cards.length;
                                    var target = result.targets[0];
                                    if (!event.isMine()) game.delayx();
                                    player.discard(result.cards);
                                    var onrewrite = event.triggername;
                                    if (onrewrite == 'loseHpBegin' || onrewrite == 'loseMaxHpBegin') {
                                        trigger.cancel();
                                        var num = trigger.num;
                                        result.targets[0].damage(num);
                                    }
                                    if (onrewrite == 'turnOverBefore') {
                                        trigger.cancel();
                                        result.targets[0].turnOver();
                                    }
                                    if (onrewrite == 'linkBefore') {
                                        trigger.cancel();
                                        result.targets[0].link();
                                    }
                                    if (onrewrite == 'useCardToTarget') {
                                        player.draw();
                                    }
                                    result.targets[0].chooseToDiscard(event.num, 'he', true);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        ygsw_xindun: {
                            mark: true,
                            marktext: '🛡',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            nobracket: true,
                            trigger: {
                                player: 'discardAfter',
                            },
                            usable: 3,
                            filter(event, player) {
                                //    if(event.parent.parent.name=='phaseDiscard') return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        if (get.position(i) == 'd') {
                                            return true;
                                        }
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (get.position(trigger.cards[i]) == 'd') {
                                        cards.push(trigger.cards[i]);
                                        ui.special.appendChild(trigger.cards[i]);
                                    }
                                }
                                if (cards.length) {
                                    player.addToExpansion(cards, player, 'give').gaintag.add('ygsw_xindun');
                                    game.log(player, '将', cards, '置于武将牌上作为[心盾]');
                                }
                            },
                            group: ['ygsw_xindun_1', 'ygsw_xindun_2', 'ygsw_xindun_3', 'ygsw_xindun_4', 'ygsw_xindun_5'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['chooseToRespondBegin'],
                                    },
                                    filter(event, player) {
                                        if (3 <= player.countCards('h')) return false;
                                        if (player.getExpansions('ygsw_xindun').length == 0) return false;
                                        if (!event.filterCard || !event.filterCard({ name: 'sha' }, player)) return false;
                                        if (!lib.filter.cardRespondable({ name: 'juedou' }, player, event) && !lib.filter.cardRespondable({ name: 'nanman' }, player, event)) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.getExpansions('ygsw_xindun').length >= 1) {
                                            var num = 3 - player.countCards('h');
                                            if (player.getExpansions('ygsw_xindun').length <= num) {
                                                var cards = player.getExpansions('ygsw_xindun');
                                                player.gain(cards, 'draw');
                                                event.finish();
                                            } else {
                                                player.chooseCardButton('选择获得' + num + '张[心盾]牌', num, player.getExpansions('ygsw_xindun'), false).set('ai', get.buttonValue);
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            var links = result.links;
                                            player.gain(links, 'draw');
                                        }
                                    },
                                    ai: {
                                        threaten: 0.8,
                                        effect: {
                                            target(card) {
                                                if (card.name == 'sha' || card.name == 'wanjian') return 0.5;
                                            },
                                        },
                                        noh: true,
                                        skillTagFilter(player, tag) {
                                            if (tag == 'noh') {
                                                if (player.getExpansions('ygsw_xindun').length == 0) return false;
                                                var num = 3 - player.countCards('h');
                                                if (num != 0) return false;
                                            }
                                        },
                                    },
                                },
                                2: {
                                    audio: 1,
                                    trigger: {
                                        player: 'gainAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase == player) return false;
                                        if (!event.cards) return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                //QQ
                                                if (
                                                    player.countCards('h', function (card) {
                                                        return card == i;
                                                    }) &&
                                                    player.hasUseTarget(i)
                                                )
                                                    return true;
                                            }
                                    },
                                    content() {
                                        'step 0';
                                        var list = [];
                                        for (var i = 0; i < trigger.cards.length; i++) {
                                            if (
                                                player.countCards('h', function (card) {
                                                    return card == trigger.cards[i];
                                                }) &&
                                                player.hasUseTarget(trigger.cards[i])
                                            )
                                                list.push(trigger.cards[i]);
                                        }
                                        if (list.length) player.chooseCardButton('可选择其中一张立即使用', list, false);
                                        else event.finish();
                                        ('step 1');
                                        if (result.bool) {
                                            player.chooseUseTarget(result.links[0], false);
                                        }
                                        ('step 2');
                                        var list = [];
                                        for (var i = 0; i < trigger.cards.length; i++) {
                                            if (
                                                player.countCards('h', function (card) {
                                                    return card == trigger.cards[i];
                                                }) &&
                                                player.hasUseTarget(trigger.cards[i])
                                            )
                                                list.push(trigger.cards[i]);
                                        }
                                        if (list.length) player.chooseCardButton('可再选择其中一张立即使用', list, false);
                                        else event.finish();
                                        ('step 3');
                                        if (result.bool) {
                                            player.chooseUseTarget(result.links[0], false);
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                                    },
                                    filter(event, player) {
                                        if (3 <= player.countCards('h')) return false;
                                        if (player.getExpansions('ygsw_xindun').length == 0) return false;
                                        if (event.responded) return false;
                                        if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.getExpansions('ygsw_xindun').length >= 1) {
                                            var num = 3 - player.countCards('h');
                                            if (player.getExpansions('ygsw_xindun').length <= num) {
                                                var cards = player.getExpansions('ygsw_xindun');
                                                player.gain(cards, 'draw');
                                                event.finish();
                                            } else {
                                                player.chooseCardButton('选择获得' + num + '张[心盾]牌', num, player.getExpansions('ygsw_xindun'), false).set('ai', get.buttonValue);
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            var links = result.links;
                                            player.gain(links, 'draw');
                                        }
                                    },
                                    ai: {
                                        threaten: 0.8,
                                        effect: {
                                            target(card) {
                                                if (card.name == 'sha' || card.name == 'wanjian') return 0.5;
                                            },
                                        },
                                        noh: true,
                                        skillTagFilter(player, tag) {
                                            if (tag == 'noh') {
                                                if (player.getExpansions('ygsw_xindun').length == 0) return false;
                                                var num = 3 - player.countCards('h');
                                                if (num != 0) return false;
                                            }
                                        },
                                    },
                                },
                                4: {
                                    trigger: {
                                        player: 'phaseJudgeBegin',
                                    },
                                    filter(event, player) {
                                        return player.countCards('j') > 0;
                                        if (3 <= player.countCards('h')) return false;
                                        if (player.getExpansions('ygsw_xindun').length == 0) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.getExpansions('ygsw_xindun').length >= 1) {
                                            var num = 3 - player.countCards('h');
                                            if (player.getExpansions('ygsw_xindun').length <= num) {
                                                var cards = player.getExpansions('ygsw_xindun');
                                                player.gain(cards, 'draw');
                                                event.finish();
                                            } else {
                                                player.chooseCardButton('选择获得' + num + '张[心盾]牌', num, player.getExpansions('ygsw_xindun'), false).set('ai', get.buttonValue);
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            var links = result.links;
                                            player.gain(links, 'draw');
                                        }
                                    },
                                    ai: {
                                        threaten: 0.8,
                                        basic: {
                                            order(card, player) {
                                                if (player.hasSkillTag('pretao')) return 5;
                                                return 2;
                                            },
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (card.name == 'lebu' && card.name == 'bingliang') return 0.8;
                                            },
                                        },
                                        noh: true,
                                        skillTagFilter(player, tag) {
                                            if (tag == 'noh') {
                                                if (player.getExpansions('ygsw_xindun').length == 0) return false;
                                                var num = 3 - player.countCards('h');
                                                if (num != 0) return false;
                                            }
                                        },
                                    },
                                },
                                5: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    filter(event, player) {
                                        if (3 <= player.countCards('h')) return false;
                                        if (player.getExpansions('ygsw_xindun').length == 0) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.getExpansions('ygsw_xindun').length >= 1) {
                                            var num = 3 - player.countCards('h');
                                            if (player.getExpansions('ygsw_xindun').length <= num) {
                                                var cards = player.getExpansions('ygsw_xindun');
                                                player.gain(cards, 'draw');
                                                event.finish();
                                            } else {
                                                player.chooseCardButton('选择获得' + num + '张[心盾]牌', num, player.getExpansions('ygsw_xindun'), false).set('ai', get.buttonValue);
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            var links = result.links;
                                            player.gain(links, 'draw');
                                        }
                                    },
                                    ai: {
                                        threaten: 0.8,
                                        effect: {
                                            target(card) {
                                                if (card.name == 'tao') return 0.8;
                                            },
                                        },
                                        noh: true,
                                        skillTagFilter(player, tag) {
                                            if (tag == 'noh') {
                                                if (player.getExpansions('ygsw_xindun').length == 0) return false;
                                                var num = 3 - player.countCards('h');
                                                if (num != 0) return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        ygsw_mingdun: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.getEquip(2) ? true : false;
                            },
                            filterCard(card, player) {
                                return card == player.getEquip(2);
                            },
                            position: 'e',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectCard: -1,
                            selectTarget: -1,
                            content() {
                                player.awakenSkill('ygsw_mingdun');
                                if (player.hujia < 5) {
                                    player.changeHujia();
                                }
                                if (target.isFriendsOf(player)) {
                                    target.addTempSkill('ygsw_bianchengdage', { player: 'phaseEnd' });
                                }
                                if (target.isEnemiesOf(player)) {
                                    target.addTempSkill('ygsw_bianchengyifeiwu', { player: 'phaseEnd' });
                                }
                                if (target.isEnemiesOf(player) && target.isFriendsOf(player) && !player.isTurnedOver()) {
                                    target.turnOver();
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                        },
                        ygsw_bianchengdage: {
                            trigger: {
                                player: 'useCard1',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                player.draw();
                                trigger.directHit.addArray(game.players);
                            },
                            ai: {
                                directHit_ai: true,
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 2;
                                },
                            },
                        },
                        ygsw_bianchengyifeiwu: {
                            mod: {
                                cardEnabled(event, player) {
                                    return false;
                                },
                                cardUsable(event, player) {
                                    return false;
                                },
                                cardRespondable(event, player) {
                                    return false;
                                },
                                cardSavable(event, player) {
                                    return false;
                                },
                            },
                            init(player, skill) {
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    if (get.is.locked(skills[i]) || lib.skill[skills[i]].charlotte) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                player.disableSkill(skill, skills);
                            },
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                            charlotte: true,
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    let list = Object.keys(player.disabledSkills);
                                    if (list.length) {
                                        var str = '失效技能:';
                                        for (var i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) {
                                                str += get.translation(list[i]) + '、';
                                            }
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                },
                            },
                        },
                        aibuhuiguanpai: {
                            silent: true,
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (get.tag(card, 'damage')) return [0, 0, 0, 0];
                                    },
                                },
                            },
                            forced: true,
                            popup: false,
                        },
                        wzd_baiyue: {
                            charlotte: true,
                            mark: true,
                            group: 'hlt_ltbyz',
                            intro: {
                                content(content, player) {
                                    return '目前处于普通月圆状态';
                                },
                            },
                            markimage: 'extension/超能勇士/wzd_baiyue.png',
                        },
                        wzd_yueshi: {
                            silent: true,
                            charlotte: true,
                            nobracket: true,
                            group: 'wzd_yueshi2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.roundNumber % 2 == 0;
                            },
                            content() {
                                if (Math.random() < 0.777) {
                                    if (player.hasSkill('wzd_xueyue')) {
                                        player.removeSkill('wzd_xueyue');
                                    }
                                    if (!player.hasSkill('wzd_baiyue')) {
                                        player.addSkill('wzd_baiyue');
                                    }
                                } else {
                                    if (player.hasSkill('wzd_baiyue')) {
                                        player.removeSkill('wzd_baiyue');
                                    }
                                    if (!player.hasSkill('wzd_xueyue')) {
                                        player.addSkill('wzd_xueyue');
                                    }
                                }
                            },
                            popup: false,
                        },
                        wzd_xueyue: {
                            charlotte: true,
                            mark: true,
                            group: 'hlt_ltbyz6',
                            intro: {
                                content(content, player) {
                                    return '目前处于血色月圆状态';
                                },
                            },
                            markimage: 'extension/超能勇士/wzd_xueyue.png',
                        },
                        hlt_ltbyz: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.isDamaged() && event.player.hp < player.hp;
                            },
                            content() {
                                'step 0';
                                trigger.num += trigger.player.hp - trigger.num;
                                if (trigger.num >= trigger.player.hp) {
                                    trigger.player.addTempSkill('hlt_ltbyz2');
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.attitude(player, target) > 0) {
                                            return [1, -2];
                                        }
                                    },
                                },
                            },
                        },
                        hlt_ltbyz2: {
                            trigger: {
                                player: 'dyingBegin',
                            },
                            charlotte: true,
                            forced: true,
                            silent: true,
                            firstDo: true,
                            content() {
                                game.playcnys('wzd_hltdazhaopeiyin');
                                game.mp46('wzd_hltdazhao');
                                player.loseMaxHp(player.maxHp);
                                player.die();
                            },
                            popup: false,
                        },
                        wzd_yueshi2: {
                            silent: true,
                            charlotte: true,
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.roundNumber % 2 != 0;
                            },
                            content() {
                                if (player.hasSkill('wzd_xueyue')) {
                                    player.removeSkill('wzd_xueyue');
                                } else {
                                    if (player.hasSkill('wzd_baiyue')) {
                                        player.removeSkill('wzd_baiyue');
                                    }
                                }
                            },
                            popup: false,
                        },
                        hlt_ltbyz6: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                trigger.num += trigger.player.hp - trigger.num;
                                if (trigger.num >= trigger.player.hp) {
                                    trigger.player.addTempSkill('hlt_ltbyz2');
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.name == 'sha' && target.hp >= 1 && get.attitude(player, target) > 0) {
                                            return [1, -2];
                                        }
                                    },
                                },
                            },
                        },
                        fzszjiayu: {
                            silent: true,
                            group: ['fzszjiayu2', 'fzszjiayu3', 'fzszjiayu4', 'fzszjiayu5'],
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                for (var i of game.players) {
                                    //QQ
                                    if (i == player) continue;
                                    trigger.num += Math.min(50, i.hp);
                                    player.addTempSkill('fzszjiayu_1', { player: 'phaseUseEnd' });
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardname(card) {
                                            if (card.name == 'sha') return 'juedou';
                                            if (card.name == 'shan') return 'juedou';
                                            if (card.name == 'jiu') return 'juedou';
                                        },
                                    },
                                },
                            },
                            forced: true,
                            popup: false,
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        fzszjiayu2: {
                            audio: 'ext:超能勇士/audio:2',
                            usable: 30,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            logTarget: 'target',
                            forced: true,
                            filter(event, player) {
                                if (event.target == player) return false;
                                return player == _status.currentPhase && get.tag(event.card, 'damage');
                            },
                            content() {
                                var num = [1, 1, 1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 2, 2, 1, 2, 2, 2, 2, 1].randomGet();
                                if (num > 0) player.addMark('fzszjiayubiaoji', num);
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 2;
                                },
                                maxHandcard(player, num) {
                                    return num + 3;
                                },
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        fzszjiayubiaoji: {
                            mark: true,
                            marktext: '🚇',
                            intro: {
                                content(storage, player, skill) {
                                    return '当前有' + storage + '层驾驭标记';
                                },
                            },
                        },
                        fzszjiayu3: {
                            silent: true,
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('fzszjiayubiaoji') >= 10;
                            },
                            content() {
                                player.removeMark('fzszjiayubiaoji', player.countMark('fzszjiayubiaoji'));
                            },
                            forced: true,
                            popup: false,
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        fzszjiayu4: {
                            silent: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.type == 'card' && player == _status.currentPhase;
                            },
                            content() {
                                trigger.num--;
                            },
                            popup: false,
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        fzszjiayu5: {
                            silent: true,
                            usable: 1,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'nanman' || event.card.name == 'wanjian');
                            },
                            content() {
                                player.addTempSkill('aibuhuiguanpai', { player: 'phaseUseEnd' });
                            },
                            forced: true,
                            popup: false,
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        fzszjifa: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            filter(event, player) {
                                return player.countMark('fzszjiayubiaoji') >= 15;
                            },
                            content() {
                                'step 0';
                                var list = game.filterPlayer(function (current, current2) {
                                    return (
                                        current.isEnemiesOf(player) &&
                                        current2 != player &&
                                        current != player &&
                                        !game.hasPlayer(function (current2) {
                                            return current2.maxHp > current.maxHp;
                                        })
                                    );
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    player.line(target);
                                    target.damage(2).nature = lib.linked.randomGet();
                                } else {
                                    var players = game.filterPlayer(function (current) {
                                        return current != player && current.isEnemiesOf(player);
                                    });
                                    player.line(players);
                                    for (var i of players) {
                                        i.gainMaxHp();
                                        i.randomDiscard(3);
                                    }
                                    event.finish();
                                }
                                ('step 1');
                                var list = game.filterPlayer(function (current, current2) {
                                    return (
                                        current.isEnemiesOf(player) &&
                                        current2 != player &&
                                        current != player &&
                                        !game.hasPlayer(function (current2) {
                                            return current2.maxHp < current.maxHp;
                                        })
                                    );
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    player.line(target);
                                    target.damage(1, 'ice');
                                }
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'juedou' }) - 20;
                                    return get.order({ name: 'nanman' }) - 20;
                                    return get.order({ name: 'wanjian' }) - 20;
                                },
                                fireAttack: true,
                                thunderAttack: true,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (target.hasSkillTag('nothunder')) return 0;
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        fzszguiji: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            filter: (event, player) => lib.skill.fzszguiji.logTarget(event, player).length && player.countMark('fzszjiayubiaoji') >= 20,
                            logTarget: (event, player) => game.filterPlayer((current) => current.hp >= player.hp && current.isEnemiesOf(player)).sortBySeat(_status.currentPhase),
                            prompt2: (event, player) => `你可以令${get.translation(lib.skill.fzszguiji.logTarget(event, player))}选择一项:1. 令你获得其所有牌;2. 你对其造成一点伤害`,
                            check(event, player) {
                                let fin = 0;
                                lib.skill.fzszguiji.logTarget(event, player).forEach((target) => {
                                    if (get.attitude(player, target) > 0) {
                                        fin -= 0.5;
                                    } else {
                                        fin++;
                                    }
                                });
                                return fin > 0;
                            },
                            _priority: 20,
                            content() {
                                'step 0';
                                event.targets = lib.skill.fzszguiji.logTarget(trigger, player);
                                ('step 1');
                                if (targets.length) {
                                    const target = event.targets.shift();
                                    event.target = target;
                                    if (target.countCards('he')) {
                                        target.chooseBool(`轨迹:令${get.translation(player)}获得你所有牌,否则本回合${get.translation(player)}对你造成一点伤害`).set('ai', () => {
                                            const player = _status.event.player;
                                            const source = _status.event.getTrigger().player;
                                            if (get.attitude(source, player) >= 0) return false;
                                            const cardValues = player.getGainableCards(source, 'he').map((card) => get.value(card));
                                        });
                                    } else {
                                        target.damage();
                                        event.redo();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.gainPlayerCard(`轨迹:获得${get.translation(target)}所有牌`, target, true, 'he', target.countCards('he'));
                                } else {
                                    target.damage();
                                }
                                event.goto(1);
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        fzszwuxian: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            lastDo: true,
                            forced: true,
                            filter(event, player) {
                                return player.isMaxHandcard() && player.countMark('fzszjiayubiaoji') >= 25;
                            },
                            content() {
                                game.log(player, '额外进行一个回合');
                                player.addTempSkill('fzszwuxian_1', { player: 'phaseZhunbeiEnd' });
                                player.phase('nodelay');
                            },
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    content() {
                                        player.addMark('fzszjiayubiaoji', 15);
                                    },
                                },
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hlt_ltbyz3: {
                            enable: 'phaseUse',
                            charlotte: true,
                            nobracket: true,
                            filter(event, player) {
                                if (event.skill) return false;
                                return !player.storage.hlt_ltbyz3;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                player.storage.hlt_ltbyz3 = true;
                                var evt = _status.event;
                                for (var i = 0; i < 10; i++) {
                                    if (evt && evt.getParent) {
                                        evt = evt.parent;
                                    }
                                }
                                player.storage.hlt_ltbyz4 = target;
                                player.storage.hlt_ltbyz7 = target;
                                player.addSkill('hlt_ltbyz4');
                            },
                            ltbyzLoop() {
                                'step 0';
                                if (targets[0].isIn() && targets[0].isAlive()) {
                                    targets[0].addTempSkill('hlt_ltbyzbusi');
                                    targets[0].phase('hlt_ltbyz3');
                                }
                                ('step 1');
                                if (targets[0].isDead() || targets[1].isDead() || !targets[0].isIn() || !targets[1].isIn() || (targets[0].isDead() && targets[1].isDead()) || (!targets[0].isIn() && !targets[1].isIn())) {
                                    event.goto(3);
                                } else {
                                    if (targets[1].isIn() && targets[1].isAlive()) {
                                        targets[1].addTempSkill('hlt_ltbyzbusi');
                                        targets[1].phase('hlt_ltbyz3');
                                    }
                                }
                                ('step 2');
                                if (targets[0].isDead() || targets[1].isDead() || !targets[0].isIn() || !targets[1].isIn() || (targets[0].isDead() && targets[1].isDead()) || (!targets[0].isIn() && !targets[1].isIn())) {
                                    event.goto(3);
                                } else {
                                    event.goto(0);
                                }
                                ('step 3');
                                player.storage.hlt_ltbyz3 = false;
                                for (var i = 0; i < event.backup.length; i++) {
                                    event.backup[i].in('hlt_ltbyz3');
                                }
                                if (ui.ltbyzLoop) {
                                    ui.ltbyzLoop.remove();
                                    delete ui.ltbyzLoop;
                                }
                            },
                            init(player) {
                                player.storage.hlt_ltbyz3 = false;
                            },
                            intro: {
                                content: 'limited',
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if ((player.hp >= target.hp && game.roundNumber % 2 == 0) || player.isDamaged()) return -1;
                                        if (target.hp <= player.hp && target.countCards('h') <= player.countCards('h') && game.roundNumber % 2 == 0) return -1;
                                        return 0;
                                    },
                                },
                            },
                            popup: false,
                        },
                        hlt_ltbyz4: {
                            audio: 'ext:超能勇士/audio:1',
                            trigger: {
                                player: 'damageAfter',
                            },
                            charlotte: true,
                            forced: true,
                            _priority: -50,
                            onremove(player) {
                                player.addSkill('hlt_ltbyz5');
                                player.addTempSkill('hlt_ltbyzbusi');
                                player.draw(5 - player.countCards('h'));
                                player.recover(player.maxHp);
                            },
                            content() {
                                var target = player.storage.hlt_ltbyz4;
                                delete player.storage.hlt_ltbyz4;
                                player.removeSkill('hlt_ltbyz4');
                                if (!target.isAlive()) {
                                    player.removeSkill('hlt_ltbyz5');
                                    player.storage.hlt_ltbyz3 = false;
                                    player.phase('nodelay');
                                    event.finish();
                                    return;
                                }
                                var next = player.insertEvent('ltbyzLoop', lib.skill.hlt_ltbyz3.ltbyzLoop, {
                                    targets: [target, player],
                                    num: 0,
                                    backup: [],
                                    source: player,
                                });
                                next.forceDie = true;
                                for (var i of game.players) {
                                    //QQ
                                    if (i != player && i != target) {
                                        i.out('hlt_ltbyz3');
                                        next.backup.push(i);
                                    }
                                }
                                for (var i = 0; i < game.dead.length; i++) {
                                    if (game.dead[i] != player) {
                                        game.dead[i].out('hlt_ltbyz3');
                                        next.backup.push(game.dead[i]);
                                    }
                                }
                                if (!ui.ltbyzLoop) {
                                    ui.ltbyzLoop = ui.create.system('雷霆半月斩', null, true);
                                    lib.setPopped(
                                        ui.ltbyzLoop,
                                        function () {
                                            var uiintro = ui.create.dialog('hidden');
                                            uiintro.add('雷霆半月斩状态');
                                            uiintro.addText('<li>处于雷霆半月斩的效果中,需有一方角色死亡才能脱离状态.<li>单挑意志:双方不会于自己的回合内死亡,且回合结束时将空余体力值回复至1.');
                                            uiintro.add(ui.create.div('.placeholder.slim'));
                                            return uiintro;
                                        },
                                        180
                                    );
                                    ui.ltbyzLoop.round = Infinity;
                                }
                            },
                        },
                        hlt_ltbyz5: {
                            group: 'hlt_ltbyz7',
                            mod: {
                                cardname(card, player, name) {
                                    if (card.suit == 'diamond') return 'sha';
                                    if (card.suit == 'club') return 'sha';
                                },
                                cardnature(card, player) {
                                    if (card.suit == 'diamond') return 'fire';
                                    if (card.suit == 'club') return 'thunder';
                                },
                                targetInRange(card) {
                                    if (card.suit == 'diamond') return true;
                                    if (card.suit == 'club') return true;
                                },
                                cardUsable(card) {
                                    if (card.name == 'sha' && card.suit == 'diamond') return Infinity;
                                    if (card.name == 'sha' && card.suit == 'club') return Infinity;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            charlotte: true,
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return (event.card && event.card.name == 'sha' && event.card.suit == 'diamond') || (event.card.name == 'sha' && event.card.suit == 'club');
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                                if (trigger.addCount !== false) {
                                    trigger.addCount = false;
                                    if (player.stat[player.stat.length - 1].card.sha > 0) {
                                        player.stat[player.stat.length - 1].card.sha--;
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                    },
                                },
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return arg.card.name == 'sha' && arg.card.suit == 'diamond';
                                    return arg.card.name == 'sha' && arg.card.suit == 'club';
                                },
                            },
                            popup: false,
                        },
                        hlt_ltbyz7: {
                            trigger: {
                                global: 'phaseBefore',
                            },
                            charlotte: true,
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player != player.storage.hlt_ltbyz7;
                            },
                            content() {
                                player.removeSkill('hlt_ltbyz5');
                                delete player.storage.hlt_ltbyz7;
                            },
                            popup: false,
                        },
                        jsfjtlts: {
                            nobracket: true,
                            charlotte: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player.canUse('sha', target);
                            },
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 0 && lib.filter.cardUsable({ name: 'sha' }, player);
                            },
                            content() {
                                'step 0';
                                player.addSkill('jsfjtlts2');
                                player.storage.jsfjtlts2 = false;
                                event.num = 0;
                                ('step 1');
                                var card = player.getCards('h', 'sha')[0];
                                if (card) {
                                    player.draw();
                                    player.useCard(card, target);
                                } else {
                                    if (player.storage.jsfjtlts2) {
                                        var num = Math.floor(Math.random() * 3 + 3);
                                        var cards = [];
                                        for (var i = 0; i < num; i++) {
                                            cards.push(game.createCard('sha'));
                                        }
                                        player.gain(cards, 'gain2');
                                    }
                                    player.removeSkill('jsfjtlts2');
                                    event.finish();
                                }
                                ('step 2');
                                if (event.num++ < 8 && target.isAlive()) {
                                    event.goto(1);
                                } else {
                                    if (player.storage.jsfjtlts2) {
                                        game.playcnys('wzd_jsfdazhaopeiyin');
                                        game.mp46('wzd_jsfdazhao');
                                        player.draw(3);
                                        if (!player.hasSkill('jsfjisuxianfeng')) {
                                            player.addTempSkill('jsfjisuxianfeng', { player: 'damageAfter' });
                                        }
                                    }
                                    player.removeSkill('jsfjtlts2');
                                }
                            },
                            round: 2,
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 0.7;
                                },
                                result: {
                                    target(player, target) {
                                        return get.effect(target, { name: 'sha' }, player, target);
                                    },
                                },
                            },
                            group: ['jsfjtlts_roundcount', 'jsfjtlts3'],
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type(card) == 'basic') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type(card) == 'basic') return false;
                                },
                            },
                        },
                        jsfjtlts2: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            charlotte: true,
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !player.storage.jsfjtlts2;
                            },
                            content() {
                                player.hp = player.maxHp;
                                player.storage.jsfjtlts2 = true;
                            },
                        },
                        jsfjisuxianfeng: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuAfter'],
                            },
                            nobracket: true,
                            charlotte: true,
                            changeSeat: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('选择一个交换目标', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    game.swapSeat(player, target);
                                    if (result.bool) {
                                        var targets = player.getEnemies();
                                        if (targets.length) {
                                            var target = targets.randomGet();
                                            player.line(target, 'green');
                                            target.damage();
                                            target.randomDiscard();
                                        }
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player, target) {
                                        var att = get.attitude(player, target);
                                        if (target == player.previous && att > 0) return att;
                                        if (target == player.next && att < 0) return -att;
                                        var att2 = get.attitude(player, player.next);
                                        if (target == player.next.next && att < 0 && att2 < 0) return -att - att2;
                                        return 0;
                                    },
                                },
                            },
                        },
                        jsfjtlts3: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter: (event, player) => !player.getHistory('sourceDamage').length,
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.hasSkill('jsfjisuxianfeng')) {
                                    player.addTempSkill('jsfjisuxianfeng', { player: 'damageAfter' });
                                }
                                ('step 1');
                                player.chooseTarget(get.prompt('jsfjtlts3'), function (card, player, target) {
                                    return target.isEnemiesOf(player);
                                }).ai = function (target) {
                                    if (target.isIn()) {
                                        var att = get.attitude(player, target);
                                        if (target.isTurnedOver()) {
                                            if (att > 0) {
                                                return att + 5;
                                            }
                                            return -1;
                                        }
                                        if (player.isTurnedOver()) {
                                            return 5 - att;
                                        }
                                        return -att;
                                    }
                                };
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].turnOver();
                                }
                            },
                        },
                        hyrsyouwuya: {
                            audio: 'ext:超能勇士/audio:2',
                            group: ['hyrsyouwuya_use', 'hyrsyouwuya2', 'hyrsyouwuya3', 'hyrsyouwuya4', 'hyrsyouwuya5'],
                            trigger: {
                                player: 'loseAfter',
                                global: 'gameDrawAfter',
                            },
                            intro: {
                                content: '共有#只「乌鸦」',
                            },
                            marktext: '鸦',
                            charlotte: true,
                            nobracket: true,
                            forced: true,
                            filter(event, player) {
                                var num = player.hp;
                                if (player.countMark('hyrsyouwuya') >= num) return false;
                                if (event.name == 'lose') {
                                    var evt = event.parent;
                                    return evt.name != 'useCard';
                                } else return true;
                            },
                            content() {
                                player.addMark('hyrsyouwuya', trigger.num);
                                if (player.countMark('hyrsyouwuya') > player.hp) {
                                    player.removeMark('hyrsyouwuya', player.countMark('hyrsyouwuya') - player.hp);
                                }
                            },
                            subSkill: {
                                use: {
                                    enable: 'chooseToUse',
                                    audio: 1,
                                    filter(event, player) {
                                        if (!player.countMark('hyrsyouwuya')) return false;
                                        return event.filterCard({ name: 'tiesuo' }, player, event) || event.filterCard({ name: 'wuxie' }, player, event) || event.filterCard({ name: 'shan' }, player, event);
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            if (event.filterCard && event.filterCard({ name: 'tiesuo' }, player, event)) {
                                                list.push(['锦囊', '', 'tiesuo']);
                                            }
                                            if (event.filterCard && event.filterCard({ name: 'wuxie' }, player, event)) {
                                                list.push(['锦囊', '', 'wuxie']);
                                            }
                                            if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                                list.push(['基本', '', 'shan']);
                                            }
                                            return ui.create.dialog('乌鸦', [list, 'vcard'], 'hidden');
                                        },
                                        check(button) {
                                            var player = _status.event.player;
                                            var card = { name: button.link[2], nature: button.link[3] };
                                            if (card.name == 'tiesuo') {
                                                return 4.3;
                                            } else if (card.name == 'wuxie' || card.name == 'shan') {
                                                return 4;
                                            }
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard() {
                                                    return false;
                                                },
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                                audio: 2,
                                                selectCard: -1,
                                                popname: true,
                                                precontent() {
                                                    player.removeMark('hyrsyouwuya');
                                                    player.draw();
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '选择' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '的目标';
                                        },
                                    },
                                    hiddenCard(player, name) {
                                        return (name == 'tiesuo' || name == 'shan' || name == 'wuxie') && player.countMark('hyrsyouwuya') > 0;
                                    },
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            var event = _status.event;
                                            if ((event.filterCard && event.filterCard({ name: 'wuxie' }, player, event)) || event.filterCard({ name: 'shan' }, player, event)) {
                                                return 4;
                                            }
                                            if (event.filterCard && event.filterCard({ name: 'tiesuo' }, player, event)) {
                                                return 4.3;
                                            }
                                        },
                                        respondShan: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (!player.countMark('hyrsyouwuya')) return false;
                                            return true;
                                        },
                                        result: {
                                            player(player) {
                                                return 1;
                                            },
                                        },
                                    },
                                    audioname2: {
                                        xueling: 'piaohua2',
                                    },
                                },
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hyrsyouwuya2: {
                            forced: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter: (event) => (event.name != 'phase' || game.phaseNumber == 0) && !lib.inpile.includes('yoyashi'),
                            content() {
                                'step 0';
                                const cards = [];
                                for (var i = 1; i <= 3; i++) {
                                    const card = game.createCard2('youyashi', i % 2 ? 'club' : 'spade', i);
                                    cards.push(card);
                                    ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                    const card2 = game.createCard2('youyaduo', i % 2 ? 'club' : 'spade', i);
                                    cards.push(card2);
                                    ui.cardPile.insertBefore(card2, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                    const card3 = game.createCard2('youyasha', i % 2 ? 'heart' : 'diamond', i);
                                    cards.push(card3);
                                    ui.cardPile.insertBefore(card3, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                }
                                game.broadcastAll(() => lib.inpile.add('yoyashi'));
                                game.broadcastAll(() => lib.inpile.add('yoyaduo'));
                                game.broadcastAll(() => lib.inpile.add('yoyasha'));
                                game.updateRoundNumber();
                                player.$throw(cards);
                                ('step 1');
                                game.broadcastAll(ui.clear);
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hyrsyouwuya3: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && player.countUsed() == 3;
                            },
                            content() {
                                var name = ['youyashi', 'youyaduo', 'youyasha'].randomGet();
                                var type = get.type(trigger.card);
                                var card = get.cardPile2(function (card) {
                                    return card.name == name;
                                });
                                if (card) {
                                    player.gain(card, 'gain2', 'log');
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hyrsyouwuya4: {
                            audio: 'ext:超能勇士/audio:2',
                            trigger: {
                                player: 'damageAfter',
                            },
                            usable: 1,
                            filter(event, player) {
                                for (var card of ui.discardPile.childNodes) {
                                    if (card.name == 'youyashi' || card.name == 'youyaduo' || card.name == 'youyasha') return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var cards = Array.from(ui.discardPile.childNodes).filter((i) => i.name == 'youyashi' || i.name == 'youyaduo' || i.name == 'youyasha');
                                player.chooseButton(['乌鸦:选择一张鼬的专属牌', cards], cards.length).set('ai', get.buttonValue);
                                ('step 1');
                                if (result.bool) {
                                    var card = result.links[0];
                                    event.card = card;
                                    player.chooseTarget('选择一名角色获得' + get.translation(card), true).set('ai', (target) => get.attitude(_status.event.player, target));
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    target.gain(card, 'gain2');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        jnyouyaduo: {
                            mark: true,
                            nopop: true,
                            intro: {
                                content: '不能使用♥️️牌直到下一个出牌阶段结束,流失一点体力',
                            },
                            mod: {
                                cardEnabled(card) {
                                    if (card.suit == 'heart') return false;
                                },
                                cardRespondable(card) {
                                    if (card.suit == 'heart') return false;
                                },
                            },
                            group: 'jnyouyaduo_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseUseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        player.loseHp();
                                        player.removeSkill('jnyouyaduo');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        hyrsyouwuya5: {
                            trigger: {
                                global: 'useCard',
                            },
                            forceDie: true,
                            forced: true,
                            filter(event, player) {
                                if (event.player.name1 == 'hyrs_yuzhiboyou' || event.player.name2 == 'hyrs_yuzhiboyou') return false;
                                return event.card && (event.card.name == 'youyashi' || event.card.name == 'youyaduo' || event.card.name == 'youyasha');
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.draw();
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        yzbyouwanhuatong: {
                            derivation: ['hyrsyoutianzhao', 'hyrsyouyuedu', 'hyrsyouxznh'],
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.node.avatar.cnysRtx(
                                    'extension/超能勇士/yuzhiboyourwdh.gif',
                                    {
                                        width: '99%',
                                        height: '99%',
                                    },
                                    1234
                                );
                                if (!player.hasSkill('hyrsyoutianzhao') && !player.hasSkill('hyrsyouyuedu') && !player.hasSkill('hyrsyouxznh')) {
                                    event.prompt = '请选择获得一个技能';
                                    player.chooseButton(1, [event.prompt, [['hyrsyoutianzhao', 'hyrsyouyuedu', 'hyrsyouxznh'], 'vcard']], true, function (button) {
                                        return Math.random();
                                    });
                                } else {
                                    if (player.hasSkill('hyrsyoutianzhao') && !player.hasSkill('hyrsyouyuedu') && !player.hasSkill('hyrsyouxznh')) {
                                        event.prompt = '请选择获得一个技能';
                                        player.chooseButton(1, [event.prompt, [['hyrsyouyuedu', 'hyrsyouxznh'], 'vcard']], true, function (button) {
                                            return Math.random();
                                        });
                                    }
                                    if (player.hasSkill('hyrsyouyuedu') && !player.hasSkill('hyrsyoutianzhao') && !player.hasSkill('hyrsyouxznh')) {
                                        event.prompt = '请选择获得一个技能';
                                        player.chooseButton(1, [event.prompt, [['hyrsyoutianzhao', 'hyrsyouxznh'], 'vcard']], true, function (button) {
                                            return Math.random();
                                        });
                                    }
                                    if (player.hasSkill('hyrsyouxznh') && !player.hasSkill('hyrsyouyuedu') && !player.hasSkill('hyrsyoutianzhao')) {
                                        event.prompt = '请选择获得一个技能';
                                        player.chooseButton(1, [event.prompt, [['hyrsyouyuedu', 'hyrsyoutianzhao'], 'vcard']], true, function (button) {
                                            return Math.random();
                                        });
                                    }
                                    if (player.hasSkill('hyrsyoutianzhao') && player.hasSkill('hyrsyouyuedu') && !player.hasSkill('hyrsyouxznh')) {
                                        event.prompt = '请选择获得一个技能';
                                        player.chooseButton(1, [event.prompt, [['hyrsyouxznh'], 'vcard']], true, function (button) {
                                            return Math.random();
                                        });
                                    }
                                    if (player.hasSkill('hyrsyouyuedu') && !player.hasSkill('hyrsyoutianzhao') && player.hasSkill('hyrsyouxznh')) {
                                        event.prompt = '请选择获得一个技能';
                                        player.chooseButton(1, [event.prompt, [['hyrsyoutianzhao'], 'vcard']], true, function (button) {
                                            return Math.random();
                                        });
                                    }
                                    if (player.hasSkill('hyrsyouxznh') && !player.hasSkill('hyrsyouyuedu') && player.hasSkill('hyrsyoutianzhao')) {
                                        event.prompt = '请选择获得一个技能';
                                        player.chooseButton(1, [event.prompt, [['hyrsyouyuedu'], 'vcard']], true, function (button) {
                                            return Math.random();
                                        });
                                    }
                                    if (player.hasSkill('hyrsyouxznh') && player.hasSkill('hyrsyouyuedu') && player.hasSkill('hyrsyoutianzhao')) {
                                        if (player.hp < player.maxHp) {
                                            player.recover();
                                        } else player.draw();
                                        event.finish();
                                    }
                                }
                                ('step 1');
                                var skill1 = result.links[0];
                                player.addSkill(skill1);
                            },
                            audioname2: {
                                xueling: 'piaohua2',
                            },
                        },
                        hyrsyoutianzhao2: {
                            trigger: {
                                global: 'damageAfter',
                            },
                            usable: 3,
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('hyrsyoutianzhao2'), function (card, player, target) {
                                    return get.distance(trigger.player, target) <= 1 && trigger.player != target && player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire');
                                };
                                ('step 1');
                                if (result.bool) {
                                    var card = get.cards()[0];
                                    card.discard();
                                    player.showCards(card);
                                    event.bool = get.type(card) != 'delay';
                                    event.target = result.targets[0];
                                    trigger.player.line(event.target, 'fire');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.bool) {
                                    event.target.damage('fire', 'nosource');
                                }
                            },
                        },
                        hyrsyoutianzhao: {
                            group: 'hyrsyoutianzhao2',
                            audio: 'ext:超能勇士/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            nobracket: true,
                            charlotte: true,
                            usable: 1,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                game.playcnys('yzbyoutianzhaotxhpy');
                                game.mp46('yzbyoutianzhaotxh');
                                if (Math.random() < 0.789) {
                                    target.damage('fire');
                                } else target.damage(2, 'fire');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                            popup: false,
                        },
                        hyrsyouyuedu: {
                            usable: 1,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget: [1, 3],
                            filterCard: true,
                            nobracket: true,
                            charlotte: true,
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('h') > player.hp) {
                                    return 7 - get.value(card);
                                }
                                return 4 - get.value(card);
                            },
                            content() {
                                'step 0';
                                game.playcnys('yzbyouyuedutxhpy');
                                if (targets.length > 1) {
                                    game.mp46('yzbyouyuedutxh');
                                } else {
                                    game.mp46('hyrsyouyuedutexiao');
                                }
                                ('step 1');
                                var type = get.type(cards[0]);
                                target.judge(function (card) {
                                    return get.type(card) == type ? false : true;
                                });
                                ('step 2');
                                if (result.bool) {
                                    if (target.countCards('he') > 0) {
                                        player.discardPlayerCard(target, 'he', 2, true);
                                    } else {
                                        if (target.isHealthy()) {
                                            target.loseHp();
                                        } else {
                                            target.loseMaxHp();
                                        }
                                    }
                                }
                                ('step 3');
                                if (!target.isAlive() || !result.bool) {
                                    event.finish();
                                } else {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 10,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (
                                            get.damageEffect(target, player, target) < 0 &&
                                            player.hasCard(function (card) {
                                                return get.tag(card, 'damage') ? true : false;
                                            })
                                        ) {
                                            return -1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            popup: false,
                        },
                        hyrsyouxznh: {
                            audio: 'ext:超能勇士/audio:2',
                            group: 'hyrsyouxznh2',
                            forced: true,
                            nobracket: true,
                            charlotte: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player && get.distance(current, player) <= 1;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && get.distance(current, player) <= 1;
                                    })
                                );
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return get.distance(arg.target, player) <= 1;
                                },
                            },
                            popup: false,
                        },
                        hyrsyouxznh2: {
                            audio: 'ext:超能勇士/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            check(event, player) {
                                if (player.countCards('he') > 0 || player.hp > 0) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                game.playcnys('yzbyouxznhtxhpy');
                                game.mp46('yzbyouxznhtxh');
                                var players = game.filterPlayer(function (current) {
                                    return current != player;
                                });
                                player.line(players, 'yellow');
                                for (var i of players) {
                                    i.addTempSkill('hyrsyouxznh2_block');
                                }
                            },
                            subSkill: {
                                block: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        return !get.is.locked(skill) && !lib.skill[skill].charlotte;
                                    },
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            var str = '<li>本回合除锁定技以外的技能全部失效.';
                                            var list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill.hyrsyouxznh2_block.skillBlocker(i, player);
                                            });
                                            if (list.length) str += '<br><li>失效技能:' + get.translation(list);
                                            return str;
                                        },
                                    },
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.countCards('he') > 0) return 1;
                                        return 0;
                                    },
                                },
                            },
                            mark: true,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        nvshenbumie: {
                            superCharlotte: true,
                            charlotte: true,
                            nobracket: true,
                            audio: 'ext:超能勇士/audio:2',
                            trigger: {
                                player: ['dying', 'dieBegin'],
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                player.classList.remove('dead');
                                player.clearSkills();
                                if (!player.hp >= 0) {
                                    player.hp = 0;
                                    player.update();
                                }
                            },
                        },
                        nvshenshenpan: {
                            audio: 'ext:超能勇士/audio:2',
                            group: ['nvshenshenpan_1', 'nvshenshenpan_2'],
                            trigger: {
                                global: 'roundStart',
                            },
                            mark: true,
                            marktext: '⏳',
                            intro: {
                                content: '<li>已累计受到#次有来源的伤害<p><b>审判:(X为游戏轮数)每回合你摸X张牌,至多为8.你每次受到有来源的伤害后进行累计:【20次前】视为累计两次并使其来源摸X张牌,至多为4;【20次后】视为累计一次并使其来源翻面,弃置其所有手牌.当X不小于15时:若累计伤害数达到30次,你使之游戏结束;否则,非友方阵营失败.<p><q><b>不灭:防止你的死亡发生.',
                            },
                            superCharlotte: true,
                            charlotte: true,
                            nobracket: true,
                            forced: true,
                            content() {
                                var math = game.roundNumber;
                                game.log('游戏已进行', math, '个回合');
                                var num = Math.min(8, game.roundNumber);
                                player.draw(num);
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.nvshenshenpan = 0;
                                    },
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        return event.source;
                                    },
                                    content() {
                                        var num = Math.min(4, game.roundNumber);
                                        if (player.storage.nvshenshenpan < 20) {
                                            player.storage.nvshenshenpan += 2;
                                            trigger.source.draw(num);
                                        } else {
                                            if (player.storage.nvshenshenpan < 30) {
                                                player.storage.nvshenshenpan++;
                                            }
                                            trigger.source.turnOver();
                                            trigger.source.chooseToDiscard(true, trigger.source.countCards('h'));
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    lastDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        return game.roundNumber >= 15;
                                    }, //QQQ
                                    content() {
                                        if (player.storage.nvshenshenpan >= 30) {
                                            game.over(_status.event.player);
                                        } else {
                                            if (player != game.me || player.isEnemiesOf(game.me)) {
                                                game.over(false);
                                            } else game.over(true);
                                        }
                                    },
                                },
                            },
                            ai: {
                                order: 9.9,
                                threaten: 777,
                                expose: 0.6,
                            },
                        },
                        daitushenwei: {
                            audio: 'ext:超能勇士/audio:1',
                            nobracket: true,
                            charlotte: true,
                            usable: 2,
                            group: ['daitushenweitwo', 'daitushenweithree'],
                            init(player) {
                                player.storage.daitushenwei = player;
                                player.storage.daitushenweithree = 0;
                            },
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore'],
                            },
                            content() {
                                'step 0';
                                if (
                                    game.players.length >
                                    (game.hasPlayer(function (current) {
                                        return current.name1 == 'daitu_waidaomoxiang' || current.name2 == 'daitu_waidaomoxiang';
                                    })
                                        ? 3
                                        : 2)
                                ) {
                                    player.storage.daitushenwei.style.transform = 'rotate(-999deg) scale(' + 0 + ')';
                                }
                                ('step 1');
                                if (
                                    game.players.length >
                                    (game.hasPlayer(function (current) {
                                        return current.name1 == 'daitu_waidaomoxiang' || current.name2 == 'daitu_waidaomoxiang';
                                    })
                                        ? 3
                                        : 2)
                                ) {
                                    if (player.isZhu) {
                                        player.storage.daitushenwei.out(2);
                                    } else {
                                        player.storage.daitushenwei.out(1);
                                    }
                                } else {
                                    trigger.cancel();
                                    player.storage.daitushenweithree++;
                                    player.draw();
                                    player.chooseUseTarget({ name: 'sha' }, false, '###【神威】###选择【杀】的目标');
                                }
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    var num = Math.min(2, game.countPlayer());
                                    return distance - num;
                                },
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                        },
                        daitushenweitwo: {
                            audio: 'ext:超能勇士/audio:1',
                            nobracket: true,
                            forced: true,
                            silent: true,
                            trigger: {
                                global: ['roundStart', 'phaseBefore'],
                            },
                            filter(event, player) {
                                return player.storage.daitushenwei.style.transform == 'rotate(-999deg) scale(' + 0 + ')';
                            },
                            content() {
                                player.storage.daitushenwei.style.transform = 'rotate(0deg) scale(' + 1 + ')';
                                player.draw();
                                player.chooseUseTarget({ name: 'sha' }, false, '###【神威】###选择【杀】的目标');
                            },
                            popup: false,
                        },
                        daitushenweithree: {
                            nobracket: true,
                            trigger: {
                                player: ['daitushenweitwoAfter', 'daitushenweiAfter'],
                            },
                            forced: true,
                            content() {
                                if (event.triggername == 'daitushenweiAfter') {
                                    if (player.storage.daitushenweithree % 2 == 0) {
                                        player.draw();
                                        player.phaseUse();
                                        player.$hideCharacter(2);
                                    }
                                } else {
                                    player.storage.daitushenweithree++;
                                    if (player.storage.daitushenweithree % 2 == 0) {
                                        player.draw();
                                        player.phaseUse();
                                        player.$hideCharacter(2);
                                    }
                                }
                            },
                        },
                        wdmxsuolian: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: -1,
                            filterTarget: true,
                            selectTarget: [1, Infinity],
                            content() {
                                target.link();
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                order: 2,
                                result: {
                                    target(player, target) {
                                        if (target.isLinked()) return 1;
                                        return -1;
                                    },
                                },
                            },
                        },
                        wdmxwaidaoleidian: {
                            nobracket: true,
                            group: 'wdmxwaidaoleidian_mianyi',
                            _priority: 500,
                            trigger: {
                                global: 'damageBegin',
                            },
                            filter(event, player) {
                                return !player.hasSkill('wdmxwaidaoleidian_lose') && event.source && event.source.isIn() && (event.source.name1 == 'huoyingyzb_daitu' || event.source.name2 == 'huoyingyzb_daitu');
                            },
                            content() {
                                'step 0';
                                trigger.player.judge(function (card) {
                                    var color = get.color(card);
                                    if (color == 'red') return 2;
                                    return -2;
                                }).judge2 = function (result) {
                                    return result.bool == false ? true : false;
                                };
                                ('step 1');
                                if (result.color == 'red') {
                                    if (trigger.player.name1 != 'huoyingyzb_daitu' || trigger.player.name2 != 'huoyingyzb_daitu') {
                                        trigger.player.damage(1, 'thunder');
                                    }
                                    trigger.player.previous.damage(1, 'thunder');
                                    trigger.player.next.damage(1, 'thunder');
                                    player.addTempSkill('wdmxwaidaoleidian_lose');
                                } else {
                                    if (trigger.player.name1 != 'huoyingyzb_daitu' || trigger.player.name2 != 'huoyingyzb_daitu') {
                                        trigger.player.damage(2, 'thunder', 'nosource');
                                    }
                                    player.addTempSkill('wdmxwaidaoleidian_lose');
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                            subSkill: {
                                lose: {
                                    charlotte: true,
                                    forced: true,
                                },
                                mianyi: {
                                    forced: true,
                                    firstDo: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        if (event.player.name1 == 'huoyingyzb_daitu' || event.player.name2 == 'huoyingyzb_daitu') return true;
                                        return false;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        wdmxhuanlongjiufengjin: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            nobracket: true,
                            forced: true,
                            audio: 'ext:超能勇士/audio:2',
                            filter(event, player) {
                                return event.player.isIn() && (event.player.name1 == 'huoyingyzb_daitu' || event.player.name2 == 'huoyingyzb_daitu' || event.player.name1 == 'daitu_waidaomoxiang' || event.player.name2 == 'daitu_waidaomoxiang');
                            },
                            content() {
                                'step 0';
                                trigger.player.draw();
                                ('step 1');
                                player
                                    .chooseButton(true)
                                    .set('ai', function (button) {
                                        if (button.link.group == 'shen') return 10;
                                        return Math.random();
                                    })
                                    .set('createDialog', ['请选择一张武将牌', [Object.keys(lib.character).randomGets(9), 'character']]); //QQQ
                                ('step 2');
                                var link = result.links[0];
                                event.link = link;
                                ('step 3');
                                var list = [];
                                var listm = [];
                                listm = lib.character[event.link][3];
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    if (info.unique || info.limited || info.juexingji || info.charlotte || info.zhuSkill || info.hiddenSkill || info.dutySkill) return false;
                                    return true;
                                };
                                for (var i = 0; i < listm.length; i++) {
                                    if (func(listm[i])) list.add(listm[i]);
                                }
                                event.skills = list;
                                player.chooseControl(list).set('prompt', '请选择一个技能');
                                ('step 4');
                                var skill = result.control;
                                event.skill = skill;
                                player
                                    .chooseTarget('请选择要获得技能的角色', function (card, player, target) {
                                        if (target.name1 == 'daitu_waidaomoxiang' || target.name2 == 'daitu_waidaomoxiang' || target.name1 == 'huoyingyzb_daitu' || target.name2 == 'huoyingyzb_daitu') return true;
                                    })
                                    .set('ai', function (target) {
                                        if (target.name1 == 'huoyingyzb_daitu' || target.name2 == 'huoyingyzb_daitu') return 10;
                                        return get.attitude(player, target);
                                    });
                                ('step 5');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.line(target);
                                    target.addTempSkill(skill, { player: 'phaseAfter' });
                                } else event.finish();
                                ('step 6');
                                var weishou = Math.min(9, game.countPlayer());
                                var rand = Math.random();
                                player
                                    .chooseTarget(get.prompt2('wdmxhuanlongjiufengjin'), [1, weishou], function (card, player, target) {
                                        if (target.name1 == 'daitu_waidaomoxiang' || target.name2 == 'daitu_waidaomoxiang' || target.name1 == 'huoyingyzb_daitu' || target.name2 == 'huoyingyzb_daitu') return false;
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        if (get.attitude(player, target) < 0) {
                                            return rand;
                                        }
                                        return 0;
                                    });
                                ('step 7');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addTempSkill('huanlong_jfj');
                                    }
                                } else event.finish();
                            },
                        },
                        huanlong_jfj: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            huanlong: true,
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return !lib.skill[skill].huanlong;
                            },
                            mark: true,
                            marktext: '幻龙九封尽',
                            intro: {
                                content(storage, player, skill) {
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.huanlong_jfj.skillBlocker(i, player);
                                    });
                                    if (list.length) {
                                        return '封尽技能:' + get.translation(list);
                                    } else {
                                        return '无被封尽技能';
                                    }
                                },
                            },
                        },
                        daitu_wdmxzhaohuan: {
                            nobracket: true,
                            charlotte: true,
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageAfter',
                            },
                            prompt: '是否发动【通灵•外道魔像】？',
                            prompt2: '外道魔像可以帮助带土更好的痛恨世界<－⊂(`ω´∩)',
                            content() {
                                'step 0';
                                var dialog = ui.create.dialog(false);
                                dialog.add('【通灵•外道魔像】<br>输入[移动马桶]和带土一块儿痛苦︿(๑‾᷅꒳‾᷅๑) ');
                                var div = document.createElement('div');
                                var input = div.appendChild(document.createElement('input'));
                                input.type = 'text';
                                input.setAttribute('maxlength', '10');
                                input.addEventListener('keydown', (e) => {
                                    e.stopPropagation();
                                });
                                input.addEventListener('keyup', (e) => {
                                    e.stopPropagation();
                                });
                                input.placeholder = '输入[移动马桶]通灵外道魔像!';
                                dialog.add(div);
                                event.dialog = dialog;
                                event.input = input;
                                ('step 1');
                                var { dialog, input } = event;
                                var clickFun = () => {
                                    dialog.remove();
                                    var value = input.value;
                                    event.text = input.value;
                                    game.resume();
                                };
                                if (event.isMine()) {
                                    dialog.open();
                                    game.pause();
                                    var button = ui.create.control('确定', () => {
                                        if (!input.value) {
                                            return alert('赶紧说移动马桶口牙!');
                                            input.value = '';
                                        }
                                        button.remove();
                                        quxiao.remove();
                                        clickFun();
                                    });
                                    var quxiao = ui.create.control('取消', () => {
                                        button.remove();
                                        quxiao.remove();
                                        clickFun();
                                    });
                                } else if (event.isOnline()) {
                                    input.value = '移动马桶';
                                    clickFun();
                                } else {
                                    input.value = '移动马桶';
                                    clickFun();
                                }
                                ('step 2');
                                if (event.text == '移动马桶') {
                                    player.awakenSkill('daitu_wdmxzhaohuan');
                                    player.say('没人能逃离这个世界制造垃圾的轮回,所以我要重塑这个世界!');
                                    player.$fullscreenpop('通灵•外道魔像!', 'fire');
                                    lib.config.compatiblemode = true;
                                    var fellow = game.addPlayer(9, 'daitu_waidaomoxiang');
                                    fellow.getId(); //QQQ
                                    if (player.identity == 'nei') player.identity = 'fan';
                                    if (player.identity == 'fan') player.setIdentity('fan');
                                    var identityMap = {
                                        fan: { identity: 'fan' },
                                        zhong: { identity: 'zhong' },
                                        zhu: { identity: 'zhong' },
                                    };
                                    fellow.identity = identityMap[player.identity].identity;
                                    fellow.side = player.side;
                                    if (lib.config.mode === 'guozhan') {
                                        fellow._group = player.identity;
                                    }
                                    fellow.setIdentity(fellow.identity);
                                    fellow.draw(game.countPlayer());
                                    fellow.maxHp = Infinity;
                                    fellow.recover(Infinity);
                                    fellow.node.identity.dataset.color = fellow.identity;
                                } else {
                                    player.say(event.text);
                                    event.finish();
                                }
                            },
                        },
                        hlt_ltbyzbusi: {
                            charlotte: true,
                            nobracket: true,
                            audio: 'ext:超能勇士/audio:2',
                            onremove(player) {
                                if (player.hp <= 0) {
                                    player.recover(-player.hp + 1);
                                }
                            },
                            trigger: {
                                player: ['dying', 'dieBegin'],
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        reaixuexi: {
                            trigger: {
                                global: 'useSkillAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (lib.filter.skillDisabled(event.skill)) return false;
                                if (!game.expandSkills(event.player.getStockSkills()).includes(event.skill)) return false;
                                return event.player != player;
                            },
                            content() {
                                player.addSkill(trigger.skill);
                            },
                        },
                        qtsyongshi: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('qtsyongshi')) return num + 1;
                                },
                                cardname(card, player) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('qtsyongshi') && (card.suit == 'club' || card.suit == 'heart')) return 'sha';
                                },
                            },
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                if (get.itemtype(event.cards) != 'cards') return false;
                                if (get.position(event.cards[0], true) != 'o') return false;
                                return player.inRange(event.player);
                            },
                            forced: true,
                            content() {
                                if (player.getStat().damage > trigger.num) {
                                    player.draw();
                                } else {
                                    player.gain(trigger.cards, 'gain2').gaintag.add('qtsyongshi');
                                    player.addTempSkill('qtsyongshi2');
                                    setTimeout(function () {
                                        player.removeSkill('qtsyongshi2');
                                    }, 10000);
                                }
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        qtszhongquan: {
                            audio: 'ext:超能勇士/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            logTarget(trigger, player) {
                                return player == trigger.player ? trigger.target : trigger.player;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
                                var idt = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[idt]) map[idt] = {};
                                if (!map[idt].shaReq) map[idt].shaReq = {};
                                if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                                map[idt].shaReq[id] = trigger.player.hp;
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if ((arg && arg.card.name != 'sha') || Math.floor(arg.target.countCards('h', 'sha') / player.hp) > player.countCards('h', 'sha')) return false;
                                },
                            },
                        },
                        qtsyongshi2: {
                            mark: true,
                            intro: {
                                content: '目前还剩#秒',
                            },
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.inRange(event.player) && player.hasSkill('qtsyongshi2');
                            },
                            forced: true,
                            content() {
                                player.storage.qtsyongshi = 1;
                            },
                            init(player) {
                                player.storage.qtsyongshi = 0;
                                player.storage.qtsyongshi2 = 10;
                                var jishi = setInterval(function () {
                                    player.storage.qtsyongshi2--;
                                    if (player.storage.qtsyongshi2 <= 0) {
                                        clearInterval(jishi);
                                    }
                                }, 1000);
                            },
                            onremove(player) {
                                if (player.storage.qtsyongshi < 1 && _status.currentPhase == player) {
                                    player.draw(2);
                                }
                                player.storage.qtsyongshi2 = 0;
                                player.update();
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        qtshanzhan: {
                            init(player) {
                                lib.card.sha.content = lib.card.juedou.content;
                            },
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                if (trigger.name == 'useCard') player.addTempSkill('qtshanzhan2', { player: 'shaEnd' });
                                else trigger.player.addTempSkill('qtshanzhan2', { player: 'shaEnd' });
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return arg.card.name == 'sha';
                                },
                            },
                            popup: false,
                        },
                        qtshanzhan2: {
                            silent: true,
                            mod: {
                                cardname(card) {
                                    if (card.name == 'shan') return 'sha';
                                },
                            },
                            forced: true,
                            popup: false,
                        },
                        qtsyushou: {
                            mod: {
                                globalTo(from, to, current) {
                                    return current + (to.maxHp - to.hp) + current + to.countCards('hej');
                                },
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('qtsyongshi')) return num + 1;
                                },
                                cardname(card, player) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('qtsyongshi') && card.suit == 'spade' && !player.hasSkill('qtshanzhan2')) return 'shan';
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('qtsyongshi') && card.suit == 'diamond') return 'wuxie';
                                },
                            },
                            audio: 'ext:超能勇士/audio:2',
                            trigger: {
                                player: ['phaseJudgeBefore', 'phaseDiscardBefore'],
                            },
                            silent: true,
                            forced: true,
                            content() {
                                trigger.cancel();
                                if (player.countCards('h') < player.maxHp) {
                                    if (player.maxHp - player.hp > player.hp) {
                                        player.draw(player.maxHp - player.hp - player.hp, 'nodelay');
                                    }
                                }
                            },
                            ai: {
                                noh: true,
                            },
                            popup: false,
                        },
                        qtsbianxing: {
                            audio: 'ext:超能勇士/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                game.playcnys(['qtsbxyxyi', 'qtsbxyxer'].randomGet());
                                if (player.name1 == 'bxjg_qingtiansheng' || player.name2 == 'bxjg_qingtiansheng') {
                                    player.reinit('bxjg_qingtiansheng', 'bxjg_qingtianshengerhao');
                                    if (player.hujia > 0 && player.hp < player.maxHp) {
                                        player.changeHujia(-1);
                                        player.recover();
                                    }
                                } else {
                                    if (player.name1 == 'bxjg_qingtianshengerhao' || player.name2 == 'bxjg_qingtianshengerhao') {
                                        player.reinit('bxjg_qingtianshengerhao', 'bxjg_qingtiansheng');
                                        if (player.hujia < 2) {
                                            player.changeHujia();
                                        }
                                    }
                                }
                            },
                            ai: {
                                order(card, player) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return (current.name1 == 'bxjg_qingtianshengerhao' || current.name2 == 'bxjg_qingtianshengerhao') && player == current;
                                        })
                                    ) {
                                        return get.order({ name: 'sha' }) + 0.9;
                                    } else {
                                        return get.order({ name: 'sha' }) - 0.3;
                                    }
                                },
                                result: {
                                    player(card, player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return (current.name1 == 'bxjg_qingtianshengerhao' || current.name2 == 'bxjg_qingtianshengerhao') && player == current;
                                            })
                                        ) {
                                            return 1;
                                        } else {
                                            return Math.random() < 0.88 ? 1 : -1;
                                        }
                                    },
                                },
                            },
                        },
                        jxmyuqiangzeli: {
                            usable: 1,
                            trigger: {
                                global: 'shaMiss',
                            },
                            filter(event, player) {
                                return event.target.isAlive() && player == event.target && player.getStat('skill').jxmsuibianershi < 2;
                            },
                            content() {
                                game.playcnys(['jxmyqzl1', 'jxmyqzl2', 'jxmyqzl3'].randomGet());
                                player.getStat('skill').jxmsuibianershi++;
                                player.draw();
                                player.recover();
                                trigger.player.damage();
                                if (!trigger.player.hasSkill('jxmyuqiangzeli2')) {
                                    trigger.player.addTempSkill('jxmyuqiangzeli2', { source: 'damageEnd' });
                                }
                            },
                            popup: false,
                        },
                        jxmyuqiangzeli2: {
                            mark: true,
                            charlotte: true,
                            marktext: '_(:τ」∠)_',
                            intro: {
                                content: '与姬小满的距离增加当前体力数直至造成伤害',
                            },
                            mod: {
                                globalFrom(from, to, current) {
                                    if (to.name1 == 'wzry_jixiaoman' || to.name2 == 'wzry_jixiaoman') return current + from.hp;
                                },
                            },
                        },
                        jxmsuibianershi: {
                            nobracket: true,
                            audio: 'ext:超能勇士/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                return target.canUse({ name: 'sha' }, player) && target.countCards('he');
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('jxmyuqiangzeli')) {
                                    player.addTempSkill('jxmyuqiangzeli');
                                }
                                game.playcnys(['jxmsbes1', 'jxmsbes2', 'jxmsbes3'].randomGet());
                                target.chooseToUse({ name: 'sha' }, player, -1, '随变二式:对' + get.translation(player) + '使用一张杀并令其摸一张牌,或令其回复一点体力弃置你的一张牌').set('targetRequired', true);
                                ('step 1');
                                if (result.bool == false && target.countCards('he') > 0) {
                                    player.recover();
                                    player.discardPlayerCard(target, 'he', true);
                                } else {
                                    player.draw();
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 456,
                                expose: 0.2,
                                result: {
                                    target: -1,
                                    player(player, target) {
                                        if (player.countCards('h', 'shan') > 0) return 1000;
                                        if (target.countCards('h') == 0) return 0;
                                        if (target.countCards('h') >= 2) return -0.5;
                                        if (player.hp <= 2) return -2;
                                        return -0.1;
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        jxmsuibianyishi: {
                            enable: 'phaseUse',
                            usable: 2,
                            marktext: '✧(≖ ◡ ≖✿)',
                            nobracket: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                game.playcnys(['jxmsbys1', 'jxmsbys2', 'jxmsbys3', 'jxmsbys4', 'jxmsbys5'].randomGet());
                                if (!player.hasSkill('jxmyuruozejin')) {
                                    player.addTempSkill('jxmyuruozejin');
                                }
                                player.addTempSkill('jxmsuibianyishichupai');
                                player.addTempSkill('jxmsuibianyishi_juli');
                                player.storage.jxmsuibianyishi.add(target);
                                player.gainPlayerCard(target, 'he', true);
                                player.markSkill('jxmsuibianyishi');
                            },
                            intro: {
                                content(content, player) {
                                    return '你与' + get.translation(content) + '的距离视为1.';
                                },
                            },
                            ai: {
                                order(name, player) {
                                    return get.order({ name: 'sha' }) + 100 || get.order({ name: 'juedou' }) + 101 || get.order({ name: 'nanman' }) + 102 || get.order({ name: 'wanjian' }) + 103 || get.order({ name: 'huogong' }) + 104;
                                },
                                result: {
                                    target(player, target) {
                                        var eff = get.effect(target, { name: 'shunshou_copy2' }, player, target);
                                        if (target.countCards('e') > 0) eff += get.damageEffect(target, player, target);
                                        return eff;
                                    },
                                },
                            },
                        },
                        jxmsuibianyishi_juli: {
                            charlotte: true,
                            onremove(player) {
                                delete player.storage.jxmsuibianyishi_juli;
                                delete player.storage.jxmsuibianyishi;
                                player.unmarkSkill('jxmsuibianyishi');
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                                if (!player.storage.jxmsuibianyishi) player.storage.jxmsuibianyishi = [];
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (from.storage.jxmsuibianyishi && from.storage.jxmsuibianyishi.includes(to)) return -Infinity;
                                },
                            },
                        },
                        jxmsuibianyishichupai: {
                            audio: 'ext:超能勇士/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!get.tag(event.card, 'damage')) return false;
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                var index = player
                                    .getHistory('useCard', function (evtx) {
                                        return get.tag(evtx.card, 'damage') && evtx.getParent('phaseUse') == evt;
                                    })
                                    .indexOf(event);
                                return (
                                    (index == 0 || index == 1) &&
                                    game.hasPlayer(function (current) {
                                        return current.storage.jxmsuibianyishi;
                                    })
                                );
                            },
                            content() {
                                var evt = trigger.getParent('phaseUse');
                                var index = player
                                    .getHistory('useCard', function (evtx) {
                                        return get.tag(evtx.card, 'damage') && evtx.getParent('phaseUse') == evt;
                                    })
                                    .indexOf(trigger);
                                if (index == 0) {
                                    game.log(trigger.card, '不可被响应');
                                    trigger.directHit.addArray(game.players);
                                } else {
                                    player.chooseUseTarget('视为使用一张不计入次数的【杀】', { name: 'sha' }, false);
                                }
                            },
                            popup: false,
                        },
                        jxmyuruozejin: {
                            popup: false,
                            usable: 1,
                            trigger: {
                                player: 'jxmsuibianyishiAfter',
                            },
                            check: (event, player) => game.hasPlayer((current) => player.inRange(current) && get.damageEffect(current, player, player) > 0),
                            filter(event, player) {
                                return player.getStat('skill').jxmsuibianyishi < 2;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('he').set('ai', function (card) {
                                    return true;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseTarget('遇弱则进:选择一名攻击范围内的其他角色', (card, player, target) => player.inRange(target), true).set('ai', (target) => get.damageEffect(target, _status.event.player, _status.event.player));
                                } else event.finish();
                                ('step 2');
                                game.playcnys(['jxmyrzj1'].randomGet());
                                player.getStat('skill').jxmsuibianyishi++;
                                if (player.hujia < 1) {
                                    player.changeHujia();
                                }
                                if (result.targets && result.targets.length) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].damage(result.targets[0].isDamaged() ? 2 : 1, player, 'nocard');
                                }
                            },
                            ai: {
                                damage: true,
                            },
                        },
                        alwllwkwkwkwk: {
                            audio: 'ext:超能勇士/audio:1',
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, Infinity],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                player.getStat('skill').jxmsuibianyishi = 1;
                                player.getStat('skill').jxmsuibianershi = 1;
                                target.damage();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                        },
                    },
                    translate: {
                        muguangnvshen: '伊莎贝拉',
                        xiayeying: '伊莎贝尔',
                        suifengke: '绯村',
                        xueling: '雪零',
                        wotuixingyeai: '星野爱',
                        huolongshaonvyo: '尼希利斯塔',
                        ygsw_dunyong: '岩谷尚文',
                        wxgd_bulide: '布丽德',
                        wzd_huoleiting: '火雷霆',
                        wzd_jisufeng: '急速锋',
                        hyrs_yuzhiboyou: '鼬',
                        tianhou_nvwushen: '弗丽嘉',
                        huoyingyzb_daitu: '带土',
                        daitu_waidaomoxiang: '外道魔像',
                        bxjg_qingtiansheng: '擎天圣',
                        bxjg_qingtianshengerhao: '擎天圣',
                        wzry_jixiaoman: '姬小满',
                        shbj: '圣痕标记',
                        shbj_info: '',
                        wzzm: '无争之冕',
                        wzzm_info: '',
                        xhsy: '星恒神眷',
                        xhsy_info: '',
                        xygs: '星银光释',
                        xygs_info: '',
                        zmxy2: '真明新阳',
                        zmxy2_info: '',
                        zmxy: '真明新阳',
                        zmxy_info: '出牌阶段,你带有伤害的牌可以令指定角色的防具和技能失效.被动:你的进攻距离无限制且你的杀可以额外指定两名角色.',
                        chdy: '彩幻灯影',
                        chdy_info: '',
                        wmsx: '万芒生息',
                        wmsx_info: '',
                        ryhh: '荣耀辉煌',
                        ryhh_info: '',
                        '✴️': '✴️',
                        '✴️_info': '<li>荣耀辉煌/荣焕绽华:锁定技,摸牌阶段,你改为获得一张暖阳初曦并将手牌摸至X张(X为你的体力值),你弃置的暖阳初曦会有概率从牌堆里补为同量的卡牌,一次性数量越多概率越大,同时你无法弃置杀.<li>无争之冕:锁定技,当你受到伤害时,所有角色须打出一张杀,否则受到你造成的1点伤害,每回合上限两次(体力大于2时可发动).<li>星恒神眷/星银光释:觉醒技,你造成伤害或受到伤害(非击杀)后获得等量圣痕标记,当标记不小于12层时可以增加一点并回复至体力上限,此刻你获得技能【真明新阳】和额外的回合.<li>万芒生息:锁定技,当你濒死时与场上除你之外体力值最高且小于3的武将交换体力值.',
                        yingcangji: '女神降临',
                        yingcangji_info: '',
                        nvshenjiangling: '女神降临',
                        nvshenjiangling_info: '',
                        bugepai: '荣焕绽华',
                        bugepai_info: '',
                        yyyhy: '宴欢音',
                        yyyhy_info: '准备阶段,若游戏轮数为4的倍数你回复一点体力并摸两张牌,此时若你有被废除的装备栏,使之复原.被动:血量越低越可能使自己的体力上限损失和受到的伤害改为弃置装备栏的牌.',
                        yyywq: '圆舞律',
                        yyywq_info: '锁定技,若你的装备区不大于两张牌,你使之补充满之,装备栏被废除则补至手牌区.',
                        yyzhj: '大颂曲',
                        yyzhj_info: '<li>【限视/转换技】:首次摸牌阶段后隐藏.<li>一转:你可以将装备区的一张手牌当做顺手牵羊打出.<li>二转:你可以将一张手牌区的装备牌当做杀使用.若你的装备栏牌数大于两张,你的防御距离+X(X为你装备栏牌数),否则你的防御距离+Y(Y为你的当前体力).<li>三转:锁定技,当你对正面置上的角色造成伤害时,随机废除其一个装备栏,若其装备栏全被废除,则其翻面.',
                        yeyindyx2: '蹈悦戏',
                        yeyindyx2_info: '',
                        yeyindyx: '蹈悦戏',
                        yeyindyx_info: '游戏开始时,除夏夜莺以外的角色没有手牌上限,首次受到伤害同时失去所有体力,后者触发则失去所有效果.',
                        yyzhj2: '大颂曲',
                        yyzhj2_info: '',
                        yyyhy2: '宴欢音',
                        yyyhy2_info: '',
                        yyyhy3: '宴欢音',
                        yyyhy3_info: '',
                        yelsqc: '叶落散卿愁',
                        yelsqc_info: '<li>①准备阶段,你从【蛟雀图】→【凤台鸣】的效果、【凤台鸣】→【龙潭语】的效果、【龙潭语】更→【蛟雀图】的效果中依次更换.<li>蛟雀图:防止一切即将受到的伤害.凤台鸣:你使用的牌无法被其他角色响应.龙潭语:你的结束阶段和受到伤害之时,若你的手牌中的基本牌/锦囊牌不大于两张,你可以获得牌堆顶的一张基本牌/锦囊牌并立即使用.<li>②隐匿技,登场时视为使用一张【五谷丰登】,随机获得8～25个侠义行标记,开始执行【龙潭语】的效果并在准备阶段更换为【蛟雀图】的效果.',
                        xiayixing: '侠义行',
                        xiayixing_info: '①锁定技,每当一名敌方角色造成伤害,你随机获得7～20个侠义行标记(直至超过100的阈值).②你使自己的体力和体力上限流失改为对自己造成等量基数减1的伤害.',
                        yuqianzhan: '一连击',
                        yuqianzhan_info: '',
                        yuqianzhan2: '二连击',
                        yuqianzhan2_info: '',
                        yuqianzhan3: '三连击',
                        yuqianzhan3_info: '',
                        yuqianzhan4: '四连击',
                        yuqianzhan4_info: '',
                        yuqianzhan5: '五连击',
                        yuqianzhan5_info: '',
                        longtanyu: '龙潭语',
                        longtanyu_info: '',
                        sfkyqz: '御前斩',
                        sfkyqz_info: '<li>锁定技,你造成的伤害可能发生连击判定,进一步触发连击效果,若成功触发每次连击需消耗8个侠义行标记,否则不能成功触发.(连击对随风客无效,未触发的连击效果默认储存)<li>一连击:造成的伤害+1.<li>二连击:你摸两张牌.<li>三连击:你获得一点护甲.<li>四连击:你增加一点体力上限并回复一点体力.<li>五连击:使目标角色死亡.',
                        jiaoquetu: '蛟雀图',
                        jiaoquetu_info: '',
                        fengtaiming: '凤台鸣',
                        fengtaiming_info: '',
                        xiayixing2hao: '侠义行',
                        xiayixing2hao_info: '',
                        sfkdedazhao: '破乱天明线',
                        sfkdedazhao_info: '隐藏技:出牌阶段限一次,可以对任意名其他角色造成一点伤害.',
                        sfkdeycj: '叶落散卿愁？【隐藏技】',
                        sfkdeycj_info: '',
                        hanlin: '寒凛',
                        hanlin_info: '被动:你的体力上限至少为1.若你的体力上限大于1且已受伤,你受到【杀】(含火杀)造成的伤害或火属性伤害改为失去等量体力上限,否则伤害翻倍并且使你刷新【驱狼】的使用次数.',
                        hanlin2: '寒凛',
                        hanlin2_info: '',
                        xl_xuehuafazhen: '小白',
                        xl_xuehuafazhen_info: '',
                        dongyue: '冻月',
                        dongyue_info: '①出牌阶段限一次,你可以将任意张手牌交给其他角色.当你以此法于一回合内给出第二张牌时,你回复一点体力并刷新【驱狼】的使用次数.②回合开始时,若你没有装备【小白】,你可以从场上/牌堆/弃牌堆中获得【小白】.',
                        dongyue2: '冻月',
                        dongyue2_info: '',
                        piaohua: '飘花',
                        piaohua_info: '游戏开始时,你将两张【小白】加入手牌,首次回合开始时会通过【冻月】再获得一张【小白】,此后你前两次的体力变动(不含体力上限)可以让你获得场上其他角色武将的所有技能,直至你的首次出牌阶段结束.',
                        piaohua2: '飘花',
                        piaohua2_info: '',
                        beidaotongsile: '<font color=#F8F8FF><q><b><i><font color=#FF1493>谎<font color=#FF69B4>言<font color=#9932CC>即<font color=#6B238E>是<font color=#8A2BE2>爱</font></font></font></font></font></font></q></b></i>',
                        beidaotongsile_info: '',
                        beidaotongsile2: '<font color=#F8F8FF><q><b><i><font color=#FF1493>谎<font color=#FF69B4>言<font color=#9932CC>即<font color=#6B238E>是<font color=#8A2BE2>爱</font></font></font></font></font></font></q></b></i>',
                        beidaotongsile2_info: '',
                        xya_jnjs: '<p></p>',
                        xya_jnjs_info: '<p>㊀星野爱会与击杀她的武将角色对调(玩家托管状态时默认不操控).㊁星野爱为主身份时,对调时身份也会变成主公/主帅/地主,并把击杀她的角色身份变成粉丝.㊂以上效果均在主将为【星野爱】死亡后且有触发对象时生效.(当对调角色复活后)由星野爱执行其回合.【<i>对调会保留前身份且粉丝局无法胜利.</i>】</p>',
                        hlzz_longxian: '龙涎',
                        hlzz_longxian_info: '壹:你造成的属性伤害均为火属性.贰:你视为所有火属性伤害的来源.叁:你受到的火属性伤害向下取半.',
                        hlzz_longxian2: '龙涎',
                        hlzz_longxian2_info: '',
                        hlzz_longxian3: '龙涎',
                        hlzz_longxian3_info: '',
                        hlzz_yanwei: '焰威',
                        hlzz_yanwei_info: '锁定技,当你造成无属性伤害时,你选择一项1.令造成的伤害基数减一并摸两张牌.2.令伤害有效同时获得一张【火攻】并使其在造成伤害之前的出牌阶段横置且进攻距离和手牌上限-2.被动:【火攻】不计入你的手牌上限.',
                        hlzz_yanwei2: '焰威',
                        hlzz_yanwei2_info: '',
                        hlzz_ffcylt2: '燃原',
                        hlzz_ffcylt2_info: '',
                        hlzz_ffcylt: '燃原',
                        hlzz_ffcylt_info: '㈠每当你体力减少后可以获得等量【燃原】标记(上限六层),且当此标记数达到2/4/6时你可以失去所有【燃原】标记于出牌阶段使用对应限定技【焚风】/【炽炎】/【烈天】失去此技能.(所有限定技共享发动次数)㈡焚风:你可以将体力值回复至体力上限减一,并使任意名其他角色回复一点体力、增加一点护甲、摸一张牌.炽炎:你先对一名其他角色造成一点无属性伤害——若其未受伤,额外造成两点火焰伤害;若其已受伤,附带其当时已损失体力的火焰伤害.烈天:你将基数四点火焰伤害分配给1～2名角色,你体力回复至上限并摸等同于体力上限数的牌.㈢被动:当游戏回合为偶数时,全场首次受到的火焰伤害翻倍.',
                        hlzz_ffcylt4: '<font color=#BC1717>炽炎</font>',
                        hlzz_ffcylt4_info: '',
                        hlzz_ffcylt5: '<font color=#000FFF>烈天</font>',
                        hlzz_ffcylt5_info: '',
                        hlzz_ffcylt3: '<font color=#FF8040>焚风</font>',
                        hlzz_ffcylt3_info: '',
                        ygsw_dunzhiyongzhe: '盾之勇者',
                        ygsw_dunzhiyongzhe_info: '⒈游戏开始时,你的体力默认为1.⒉你回复/失去体力改为获得/失去等量护甲,没有护甲时你直接死亡.⒊你获得三点护甲,你的手牌上限为0,没有手牌时无法成为点数大于四或黑色牌的目标.⒋你造成的伤害没有来源.',
                        ygsw_dunzhiyongzhe2: '盾之勇者',
                        ygsw_dunzhiyongzhe2_info: '',
                        ygsw_dunzhiyongzhe3: '盾之勇者',
                        ygsw_dunzhiyongzhe3_info: '',
                        ygsw_dunzhiyongzhe4: '盾之勇者',
                        ygsw_dunzhiyongzhe4_info: '',
                        ygsw_dunzhiyongzhe5: '盾之勇者',
                        ygsw_dunzhiyongzhe5_info: '',
                        ygsw_nudun: '怒盾',
                        ygsw_nudun_info: '(当你的装备区/手牌区有牌)⒈你可以弃置1～3张牌使你的翻面/横置效果转移给其他角色,并使其弃置等量牌.⒉你可以弃置1～3张牌令你的体力上限/体力流失效果转化为伤害给其他角色,并使其弃置等量牌.⒊你成为卡牌的目标时可以弃置1～3张牌并摸一张牌指定一名其他角色,使其弃置等量牌.',
                        ygsw_xindun: '心盾',
                        ygsw_xindun_info: '⒈你可以将每回合前三次弃置的牌置于武将牌上.⒉当你进行判定前、需要【杀/闪】的打出与响应或有角色濒死时,若你的手牌少于三张,可以将[心盾]牌以此法补入手牌区至三张.⒊你可以将于回合外获得的两张牌立即依次使用之.',
                        ygsw_mingdun: '命盾',
                        ygsw_mingdun_info: '限定技,你可以弃置你的防具牌,获得等同于场上其他角色的护甲数直至5.使除你之外,中立角色背面置上,友方角色的杀无法被响应、使用次数+2、攻击距离无限且每使用一张杀摸一张牌,敌方角色非锁定技失效且无法使用、打出牌直到各自的出牌阶段结束.',
                        ygsw_bianchengdage: '命盾',
                        ygsw_bianchengdage_info: '',
                        ygsw_bianchengyifeiwu: '命盾',
                        ygsw_bianchengyifeiwu_info: '',
                        aibuhuiguanpai: '驾驭',
                        aibuhuiguanpai_info: '',
                        wzd_baiyue: '白月',
                        wzd_baiyue_info: '',
                        wzd_yueshi: '月时',
                        wzd_yueshi_info: '准备阶段,游戏偶数回合将随机出现一次月圆(含定格).',
                        wzd_xueyue: '血月',
                        wzd_xueyue_info: '',
                        hlt_ltbyz: '雷霆半月斩',
                        hlt_ltbyz_info: '',
                        hlt_ltbyz2: '雷霆半月斩',
                        hlt_ltbyz2_info: '',
                        wzd_yueshi2: '月时',
                        wzd_yueshi2_info: '',
                        hlt_ltbyz6: '雷霆半月斩',
                        hlt_ltbyz6_info: '',
                        fzszjiayu: '驾驭',
                        fzszjiayu_info: 'A:你多摸X张牌(X为场上其他角色体力之和且至多为50).你的出牌阶段【闪】、【杀】和【酒】视为【决斗】.回合内使用牌造成的伤害-1,且每次对一名其他角色使用带伤害标签的牌,随机获得1~3层标记(回合上限30次).出牌阶段结束时,你可以发动【击发】/【轨迹】/【无限】并于10层驾驭标记以上时清空所有标记.B:你的手牌上限+3、防御距离+2、进攻距离+1.',
                        fzszjiayu2: '驾驭',
                        fzszjiayu2_info: '',
                        fzszjiayubiaoji: '驾驭标记',
                        fzszjiayubiaoji_info: '',
                        fzszjiayu3: '驾驭',
                        fzszjiayu3_info: '',
                        fzszjiayu4: '驾驭',
                        fzszjiayu4_info: '',
                        fzszjiayu5: '驾驭',
                        fzszjiayu5_info: '',
                        fzszjifa: '击发',
                        fzszjifa_info: '(15层驾驭标记)A.若场上存在非友方角色体力上限最高(含并列),你可以随机对体力上限最多的一名角色造成两点随机属性伤害,再对体力上限最少的一名角色造成一点冰属性伤害.(含其他友方角色但不对其生效)B.若不存在,你改为增加所有非友方一点体力上限并随机弃置其三张牌.',
                        fzszguiji: '轨迹',
                        fzszguiji_info: '(20层驾驭标记)若场上存在非友方角色体力不小于你,你使这些角色选择一项⒈你获得其所有牌;⒉你对其造成一点伤害.',
                        fzszwuxian: '无限',
                        fzszwuxian_info: '(25层驾驭标记)若你的手牌数全场最多,之后获得15层驾驭标记并额外进行一个回合.',
                        hlt_ltbyz3: '雷霆半月斩',
                        hlt_ltbyz3_info: '⑴月圆状态下,当你使用【杀】造成伤害时,若你的体力值大于该目标且其处于受伤状态,你改为造成等同于其体力值的伤害.(若为血月,你直接改为造成等同于其体力值的伤害)⑵若你以此使其濒死,其失去所有体力上限并直接死亡.⑶出牌阶段你可以选择一名其他角色,当你受到伤害后,除非其已阵亡,你回复体力至上限并将手牌补至5张额外进行一回合;否则你回复体力至上限并将手牌摸至5张与该角色单独对战直至其中一人阵亡或离开游戏.⑷单独对战期间你的♦️️️和♣️️️手牌均视为杀且无距离和次数限制、不可被响应,其中♦️️️为火属性、♣️️️为雷属性.(注意:此期间内回合数定格)',
                        hlt_ltbyz4: '雷霆半月斩',
                        hlt_ltbyz4_info: '',
                        hlt_ltbyz5: '雷霆半月斩',
                        hlt_ltbyz5_info: '',
                        hlt_ltbyz7: '雷霆半月斩',
                        hlt_ltbyz7_info: '',
                        jsfjtlts: '惊天浪涛杀',
                        jsfjtlts_info: '⑴每两轮限一次,你可以指定一名攻击范围内的角色,依次将手牌中的至多9张杀对该角色使用,杀造成的伤害结算后你随机获得3~6张杀,且期间每使用一张杀前摸一张牌,首次造成伤害时回复已损失体力值.⑵若你以此法击杀了该角色或依次使用至9张杀,伤害结算后你改为摸三张牌并获得技能【先锋】直到受到伤害.⑶结束阶段,若你本回合未造成伤害,你获得技能【先锋】直到受到伤害,可以令一名其他角色翻面.⑷你的基本牌不计入手牌上限.',
                        jsfjtlts2: '惊天浪涛杀',
                        jsfjtlts2_info: '',
                        jsfjisuxianfeng: '先锋',
                        jsfjisuxianfeng_info: '你的准备和结束阶段可以与场上其他角色交换位置并对随机一名敌人造成一点伤害,弃置其一张牌.',
                        jsfjtlts3: '惊天浪涛杀',
                        jsfjtlts3_info: '',
                        hyrsyouwuya: '乌鸦',
                        hyrsyouwuya_info: '①游戏开始时你将【鸦食】、【鸦夺】、【鸦杀】各三张牌加入牌堆并获得一只【乌鸦】.②当你不因使用而失去牌后,你获得等量【乌鸦】,其上限为目前体力数.③每当你于回合内使用第三张牌时,你从牌堆中随机获得一张【鸦食】、【鸦夺】或【鸦杀】.④你的【乌鸦】可以作为【铁索连环】、【无懈可击】、【闪】使用,每次摸一张牌.⑤受到伤害后,你可以从弃牌堆中选择一张【鸦食】、【鸦夺】或【鸦杀】交给一名角色(每回合限一次).⑥当你在场时,除宇智波鼬外的角色使用【鸦食】、【鸦夺】或【鸦杀】改为摸一张牌.',
                        hyrsyouwuya2: '乌鸦',
                        hyrsyouwuya2_info: '',
                        hyrsyouwuya3: '乌鸦',
                        hyrsyouwuya3_info: '',
                        hyrsyouwuya4: '乌鸦',
                        hyrsyouwuya4_info: '',
                        jnyouyaduo: '鸦夺',
                        jnyouyaduo_info: '',
                        hyrsyouwuya5: '乌鸦',
                        hyrsyouwuya5_info: '',
                        yzbyouwanhuatong: '万花筒写轮眼',
                        yzbyouwanhuatong_info: '锁定技,每个回合你可以从未拥有的【天照】、【月读】、【须佐能乎】中选择一个技能获得之,否则你回复一点体力,未受伤时改为摸一张牌.',
                        hyrsyoutianzhao2: '天照',
                        hyrsyoutianzhao2_info: '',
                        hyrsyoutianzhao: '天照',
                        hyrsyoutianzhao_info: '①出牌阶段限一次,你可以弃置一张手牌对一名其他角色造成一点火焰伤害.(低概率造成两点火焰伤害)②每当一名角色受到了火焰伤害,你可指定其相邻的一名其他角色,亮出牌堆顶的一张牌并置入弃牌堆,若其不为延时锦囊牌,该角色受到一点无来源的火焰伤害.(每回合限三次)',
                        hyrsyouyuedu: '月读',
                        hyrsyouyuedu_info: '出牌阶段限一次,你可以弃置一张手牌并选择至多三名其他角色进行判定,若判定牌与你弃置的牌类别不同,这些角色按条件依次执行❶弃置两张牌(区域内有牌)❷流失一点体力(未受伤)❸失去一点体力上限(已受伤),重复此流程.',
                        hyrsyouxznh: '须佐能乎',
                        hyrsyouxznh_info: '①与你相邻的所有角色不能使用、打出牌响应你使用的牌.②你可以在出牌阶段前使所有其他角色的非锁定技失效.',
                        hyrsyouxznh2: '须佐能乎',
                        hyrsyouxznh2_info: '',
                        nvshenbumie: '不灭',
                        nvshenbumie_info: '',
                        nvshenshenpan: '审判',
                        nvshenshenpan_info: '',
                        daitushenwei: '神威',
                        daitushenwei_info: '每回合限两次,当你受到伤害、体力流失、减少体力上限前,你可以暂时进入时空间一回合,脱离之后你摸一张牌并可以选择一名其他角色视为使用一张不计入次数限制的【杀】;若场上角色不足三人(外道魔像不计入在内)则改为防止此次效果立即摸一张牌并可以选择一名其他角色视为使用一张不计入次数限制的【杀】.每当你使用此技能达到两次时额外摸一张牌并立即获得一个出牌阶段隐匿武将牌.你的进攻距离+X.(X为场上角色数且至多为2)',
                        daitushenweitwo: '神威',
                        daitushenweitwo_info: '',
                        daitushenweithree: '神威',
                        daitushenweithree_info: '',
                        wdmxsuolian: '查克拉锁链',
                        wdmxsuolian_info: '出牌阶段限一次,你可以弃置所有手牌将任意名角色横置.',
                        wdmxwaidaoleidian: '外道雷电',
                        wdmxwaidaoleidian_info: '当带土造成伤害前,你可以进行一次判定:若为红色,你对目标及其上下家各造成一点雷电伤害;否则目标受到2点无来源的雷电伤害.此技能失效至回合结束.',
                        wdmxhuanlongjiufengjin: '幻龙九封尽',
                        wdmxhuanlongjiufengjin_info: '锁定技,外道魔像和带土的准备阶段可以摸一张牌并从九名场外角色的技能中获得一项直到回合结束,选择至多九名其他角色封尽其技能.',
                        huanlong_jfj: '幻龙九封尽',
                        huanlong_jfj_info: '',
                        daitu_wdmxzhaohuan: '通灵•外道魔像',
                        daitu_wdmxzhaohuan_info: '限定技,带土不知是被打了还是打了人突然大喝一声:<移动马桶!>,噗的一声,外道魔像破土而出啦!(若此时带土身份为内奸则会变为反贼,外道魔像最多在场上额外存在四轮)',
                        hlt_ltbyzbusi: '单挑意志',
                        hlt_ltbyzbusi_info: '',
                        reaixuexi: '热爱学习',
                        reaixuexi_info: '',
                        qtsyongshi: '勇士',
                        qtsyongshi_info: '你使用实体牌对攻击范围内的角色造成伤害时,若为第一次,你可以获得这张牌并标记为【勇士】,同时十秒内你的【杀】无使用次数限制;否则摸一张牌.若此十秒内是你的回合且你的【杀】未对攻击范围内其他角色造成伤害,则摸两张牌.你花色为♣️️️和♥️️️的【勇士】牌视为杀.',
                        qtszhongquan: '重拳',
                        qtszhongquan_info: '你因【杀】而执行的【决斗】效果中,若你为:发起者,对方需响应你体力数的【杀】;接受者,对方需响应其体力数的【杀】.',
                        qtsyongshi2: '勇士',
                        qtsyongshi2_info: '',
                        qtshanzhan: '悍战',
                        qtshanzhan_info: '场上的【杀】始终执行【决斗】的效果.当(①你/②其他角色)对(①其他角色/②你)使用【杀】时,(①你/②该角色)的【闪】可视为【杀】来使用、响应.',
                        qtshanzhan2: '悍战',
                        qtshanzhan2_info: '',
                        qtsyushou: '御守',
                        qtsyushou_info: '你始终跳过判定阶段和弃牌阶段并于其阶段摸X张牌,直到你的手牌达到体力上限数.(X为你已损体力与体力数之差)你的防御距离+Y(Y为你的已损体力值+区域内牌数)且你花色为♦️️️的【勇士】牌视为【无懈可击】、花色为♠️️️的【勇士】牌视为【闪】.',
                        qtsbianxing: '变形',
                        qtsbianxing_info: '出牌阶段限一次,擎天圣可以进行形态切换.在野兽形态下切换可以额外获得一点护甲,上限两点;否则将一点护甲转化为体力值.',
                        jxmyuqiangzeli: '遇强则离',
                        jxmyuqiangzeli_info: '',
                        jxmyuqiangzeli2: '被踢了咩',
                        jxmyuqiangzeli2_info: '',
                        jxmsuibianershi: '随变二式',
                        jxmsuibianershi_info: '①随变二式:你可以指定一名能攻击到你的角色对你使用一张【杀】你摸一张牌,否则你回复一点体力并弃置其一张牌.发动时暂时可以使用技能【遇强则离】.②遇强则离:当你闪避了其他角色【杀】时,摸一张牌、回复一点体力并对该角色造成一点伤害.你计算与该角色的距离增加X(X为该角色的体力数).❸每回合内,①的默认使用次数为两次,你使用②会减少①的使用次数,你第二次使用①无法衔接②.',
                        jxmsuibianyishi: '随变一式',
                        jxmsuibianyishi_info: '①随变一式:出牌阶段,选择一名角色并获得其一张牌,你暂时与其距离视为1且你本回合自出牌阶段开始使用的带伤害标签的牌:第一张不可响应,第二张额外使用一张不计入次数限制的【杀】.②遇弱则进:当你发动技能【随变一式】时,可以衔接此技能.弃置一张牌获得恒定一点的护甲并对一名攻击范围内的其他角色造成一点伤害(若其已受伤增至两点).❸每回合内,①的默认使用次数为两次,你使用②会减少①的使用次数,你第二次使用①无法衔接②.',
                        jxmsuibianyishi_juli: '被拉了捏',
                        jxmsuibianyishi_juli_info: '',
                        jxmsuibianyishichupai: '随变一式',
                        jxmsuibianyishichupai_info: '',
                        jxmyuruozejin: '遇弱则进',
                        jxmyuruozejin_info: '',
                        alwllwkwkwkwk: 'alwllwkwkwkwk',
                        alwllwkwkwkwk_info: '',
                    },
                };
                lib.config.all.characters.add('超能勇士');
                lib.config.characters.add('超能勇士');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:超能勇士/image/${i}.jpg`)
                }
                lib.translate['超能勇士_character_config'] = `超能勇士`;
                return QQQ;
            });
        },
        config: {
            chaonengyongshihelp: {
                name: '<p>超能勇士</p><br><img style=width:200px src=extension/超能勇士/shuijiaodewo.gif>', //QQQ
                intro: '目前拓展版本:1.9.1',
                init: '1',
                item: {
                    1: '查看介绍',
                    2: '<li>本拓展虽武将精度不一,但已有相对把控.目前初版武将数量较少,需注意:包内武将强度无准,个别强度相差较大,有偏科型武将,但大部分较均衡,按不同定位各有优势.目前为测试版,有bug联系QQ:1797985586.',
                    3: '<li>目前拓展版本:1.9.1',
                },
            },
            meilidetupianer: {
                name: '<img style=width:160px src=extension/超能勇士/tangpingdewo.png>',
                clear: true,
            },
            BackgroundMusic: {
                name: '点歌台',
                intro: '可以搞点歌听听!',
                init: '1',
                item: {
                    1: '默认',
                    2: '武战道',
                    3: '火影忍者',
                    4: '堕',
                    5: '我推的孩子',
                    6: '希望永远存在',
                },
                onclick(item) {
                    switch (item) {
                        case '1':
                            ui.backgroundMusic.pause();
                            game.playBackgroundMusic();
                            break;
                        case '2':
                            ui.backgroundMusic.pause();
                            ui.backgroundMusic.src = 'extension/超能勇士/audio/武战道.mp3';
                            var bjyywuzhandao = setInterval(function () {
                                ui.backgroundMusic.src = 'extension/超能勇士/audio/武战道.mp3';
                            }, 237500);
                            ui.backgroundMusic.addEventListener('ended', function () {
                                ui.backgroundMusic.src = 'extension/超能勇士/audio/' + lib.config.武战道 + '.mp3';
                                ui.backgroundMusic.play();
                            });
                            break;
                        case '3':
                            ui.backgroundMusic.pause();
                            ui.backgroundMusic.src = 'extension/超能勇士/audio/火影忍者.mp3';
                            var bjyyhuoyingrenzhe = setInterval(function () {
                                ui.backgroundMusic.src = 'extension/超能勇士/audio/火影忍者.mp3';
                            }, 90500);
                            ui.backgroundMusic.addEventListener('ended', function () {
                                ui.backgroundMusic.src = 'extension/超能勇士/audio/' + lib.config.火影忍者 + '.mp3';
                                ui.backgroundMusic.play();
                            });
                            break;
                        case '4':
                            ui.backgroundMusic.pause();
                            ui.backgroundMusic.src = 'extension/超能勇士/audio/堕.mp3';
                            var bjyyduo = setInterval(function () {
                                ui.backgroundMusic.src = 'extension/超能勇士/audio/堕.mp3';
                            }, 180500);
                            ui.backgroundMusic.addEventListener('ended', function () {
                                ui.backgroundMusic.src = 'extension/超能勇士/audio/' + lib.config.堕 + '.mp3';
                                ui.backgroundMusic.play();
                            });
                            break;
                        case '5':
                            ui.backgroundMusic.pause();
                            ui.backgroundMusic.src = 'extension/超能勇士/audio/我推的孩子.mp3';
                            var bjyywotuidehaizi = setInterval(function () {
                                ui.backgroundMusic.src = 'extension/超能勇士/audio/我推的孩子.mp3';
                            }, 225500);
                            ui.backgroundMusic.addEventListener('ended', function () {
                                ui.backgroundMusic.src = 'extension/超能勇士/audio/' + lib.config.我推的孩子 + '.mp3';
                                ui.backgroundMusic.play();
                            });
                            break;
                        case '6':
                            ui.backgroundMusic.pause();
                            ui.backgroundMusic.src = 'extension/超能勇士/audio/希望永远存在.mp3';
                            var bjyyxiwangyongyuancunzai = setInterval(function () {
                                ui.backgroundMusic.src = 'extension/超能勇士/audio/希望永远存在.mp3';
                            }, 192500);
                            ui.backgroundMusic.addEventListener('ended', function () {
                                ui.backgroundMusic.src = 'extension/超能勇士/audio/' + lib.config.希望永远存在 + '.mp3';
                                ui.backgroundMusic.play();
                            });
                            break;
                    }
                },
            },
            diangetaijieshao: {
                name: '注意:由于点歌台是循环播放,每次进入游戏点歌时请只点一次,否则后续歌曲循环时将会自动相互切换,影响您的听歌体验.',
                clear: true,
            },
            wzdshuangjiheji: {
                name: '双机合技',
                init: false,
                intro: '重启生效:除双将模式外火雷霆与急速锋将同时出战',
            },
        },
        package: {
            card: {
                card: {
                    cardclpz: {
                        fullborder: 'bronze',
                        type: 'hsbaowu',
                        enable: true,
                        selectTarget: -1,
                        filterTarget(card, player, target) {
                            return target.isDamaged() && target.name !== 'muguangnvshen' && target.name !== 'baifa_muguangnvshen';
                        },
                        contentBefore() {
                            player.$skill('炽烈普照', 'legend', 'metal');
                        },
                        content() {
                            'step 0';
                            target.loseMaxHp(target.maxHp - target.hp);
                        },
                        ai: {
                            value: [4, 1],
                            useful: [3, 1],
                            result: {
                                target(player, target) {
                                    if (target.maxHp - target.hp == 1) {
                                        return -1 / target.maxHp;
                                    } else {
                                        return -1 / target.maxHp / 3;
                                    }
                                },
                            },
                            order: 2,
                        },
                        fullskin: true,
                    },
                    cardnycx: {
                        fullborder: 'gold',
                        type: 'trick',
                        enable(card, player) {
                            var enemies = player.getEnemies();
                            return game.hasPlayer(function (current) {
                                return current.hp >= 3 && enemies.includes(current) && current.name !== 'muguangnvshen' && current.name !== 'baifa_muguangnvshen';
                            });
                        },
                        notarget: true,
                        contentBefore() {
                            player.$skill('暖阳初曦', 'legend', 'metal');
                        },
                        content() {
                            var enemies = player.getEnemies();
                            var list = game.filterPlayer(function (current) {
                                return current.hp >= 3 && enemies.includes(current);
                            });
                            if (list.length) {
                                var target = list.randomGet();
                                player.line(target);
                                target.hp = target.maxHp;
                                target.loseMaxHp();
                                player.addTempSkill('chdy', { player: 'phaseBegin' });
                                player.skip('phaseDiscard');
                            }
                        },
                        contentAfter() {
                            var evt = _status.event.getParent('phaseUse');
                            if (evt && evt.name == 'phaseUse') {
                                evt.skipped = true;
                            }
                        },
                        ai: {
                            value: 8,
                            useful: [6, 1],
                            result: {
                                player: 1,
                            },
                            order: 0.6,
                        },
                        fullskin: true,
                    },
                    xuehuafazhen: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip5',
                        distance: {
                            globalFrom: 1,
                            globalTo: 2,
                        },
                        skills: ['xl_xuehuafazhen'],
                        ai: {
                            basic: {
                                equipValue: 6,
                                order: 1,
                                useful: 2,
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
                    youyaduo: {
                        type: 'basic',
                        enable: true,
                        usable: 1,
                        filterTarget(card, player, target) {
                            return !target.hasSkill('jnyouyaduo');
                        },
                        changeTarget(player, targets) {
                            game.filterPlayer(function (current) {
                                return get.distance(targets[0], current, 'pure') == 1;
                            }, targets);
                        },
                        content() {
                            if (target.name1 == 'hyrs_yuzhiboyou' || target.name2 == 'hyrs_yuzhiboyou') {
                                target.addMark('hyrsyouwuya', 1);
                            } else {
                                if (!target.hasSkill('jnyouyaduo')) {
                                    target.addSkill('jnyouyaduo');
                                }
                            }
                        },
                        ai: {
                            value: [8, 8],
                            useful: [9, 6],
                            result: {
                                player() {
                                    return Math.random() < 0.555 ? 1 : -1;
                                },
                            },
                            order: 1.2,
                        },
                        selectTarget: 1,
                        fullskin: true,
                    },
                    youyasha: {
                        fullskin: true,
                        type: 'delay',
                        filterTarget(card, player, target) {
                            return lib.filter.judge(card, player, target) && player != target;
                        },
                        judge(card) {
                            if (get.color(card) == 'black') return -3;
                            return 0;
                        },
                        effect() {
                            if (result.bool == false) {
                                player.loseHp();
                                player.randomDiscard();
                            } else {
                                if (player.isDamaged()) {
                                    player.loseMaxHp();
                                }
                            }
                        },
                        ai: {
                            basic: {
                                order: 1,
                                useful: 1,
                                value: 6,
                            },
                            result: {
                                target(player, target) {
                                    if (target.hasSkillTag('noturn')) return 0;
                                    return -3;
                                },
                            },
                        },
                    },
                    youyashi: {
                        type: 'basic',
                        enable: true,
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        content() {
                            'step 0';
                            target.chooseToDiscard('he', 2, true);
                            ('step 1');
                            target.draw();
                            ('step 2');
                            player.gainPlayerCard(target, 'he');
                        },
                        ai: {
                            value: 6,
                            useful: [3, 1],
                            result: {
                                target(player, target) {
                                    if (target.hasSkillTag('noh')) return 0.1;
                                    switch (target.countCards('he')) {
                                        case 0:
                                            return 0.5;
                                        case 1:
                                            return 0;
                                        case 2:
                                            return -1.5;
                                        default:
                                            return -1;
                                    }
                                },
                            },
                            order: 8,
                            tag: {
                                loseCard: 1,
                                discard: 1,
                            },
                        },
                        selectTarget: 1,
                        fullskin: true,
                    },
                    hyrsyoutianzhao: {
                        fullimage: true,
                    },
                    hyrsyouyuedu: {
                        fullimage: true,
                    },
                    hyrsyouxznh: {
                        fullimage: true,
                    },
                },
                translate: {
                    cardclpz: '炽烈普照',
                    cardclpz_info: '出牌阶段对所有已受伤角色使用,令其减少体力上限至当前体力.',
                    cardnycx: '暖阳初曦',
                    cardnycx_info: '令一名体力不小于3的随机敌方角色回复至体力上限并失去一点体力上限,结束出牌阶段并跳过弃牌阶段.暮光女神额外获得效果【彩幻灯影】:直到下回合准备阶段前若你失去体力时没有护盾,免疫此攻击并获得一层护盾.',
                    xuehuafazhen: '小白',
                    xuehuafazhen_info: '你的进攻距离-1,防御距离+2.每当你即将回复体力和受到伤害时,有三分之二的概率令其基数减一,摸两张牌.',
                    youyaduo: '鸦夺',
                    youyaduo_info: '①出牌阶段对一名角色及其相邻角色使用,目标不能使用♥️️牌直到下一个出牌阶段结束,目标流失一点体力.②对宇智波鼬无效且使之获得一只【乌鸦】.(每回合限一次)',
                    youyasha: '鸦杀',
                    youyasha_info: '出牌阶段,对一名其他角色使用.若判定结果为黑色,其失去一点体力并随机弃置一张牌,否则若其处于受伤状态,减少一点体力上限.',
                    youyashi: '鸦食',
                    youyashi_info: '令一名其他角色弃置两张牌并摸一张牌,你可以获得其一张牌.',
                    hyrsyoutianzhao: '天照',
                    hyrsyoutianzhao_info: '',
                    hyrsyouyuedu: '月读',
                    hyrsyouyuedu_info: '',
                    hyrsyouxznh: '须佐能乎',
                    hyrsyouxznh_info: '',
                },
            },
            intro: "通常能一兵战三神、伪boss级别的武将合集.<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: 'hyq<img style=width:26px src=extension/超能勇士/cnyszhenbaotu.png>',
            version: '1.9.1',
        },
    };
});

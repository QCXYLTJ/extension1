import { lib, game, ui, get, ai, _status } from '../../noname.js';
window.WM = {};
const extensionInfo = await lib.init.promises.json(`extension/完美世界/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '完美世界',
        content: function (config, pack) {
            //------------------------------------------------通用技能--------------------------------------------------//
            //------------------------------------------------全局技能--------------------------------------------------//
        },
        precontent: function () {
            game.mp4ZF = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/完美世界/mp4/${Q}.mp4`;
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
            //检测扩展是否安装和启动
            game.extcheck = function (str) {
                if (!str || typeof str != 'string') return false;
                if (lib.config && lib.config.extensions) {
                    for (var i of lib.config.extensions) {
                        if (i.indexOf(str) == 0) {
                            if (lib.config['extension_' + i + '_enable']) return true;
                        }
                    }
                }
                return false;
            };
            game.wmsj_zk = {
                set() {
                    return this;
                },
                get player() {
                    return game.me;
                },
                cards: [],
                result: {
                    cards: [],
                },
                gaintag: [],
                forResult() { },
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const wmsj_qsmx = {
                    name: '完美世界',
                    connect: false,
                    //武将信息
                    character: {
                        wmsj_征: {
                            sex: 'male',
                            hp: 8,
                            maxHp: 8,
                            hujia: 3,
                            group: 'shen',
                            skills: ['wmsj_天命加护', 'wmsj_乾坤扭转', 'wmsj_唯我独尊', 'wmsj_征战天下', 'wmsj_我自不凡'],
                        },
                        wmsj_服: {
                            sex: 'male',
                            hp: 8,
                            maxHp: 8,
                            hujia: 3,
                            group: 'shen',
                            skills: ['wmsj_天命加护', 'wmsj_命运无常', 'wmsj_并天而行', 'wmsj_极天剑影', 'wmsj_天命所归'],
                        },
                        wmsj_征服: {
                            sex: 'male',
                            hp: 25,
                            maxHp: 25,
                            hujia: 5,
                            group: 'shen',
                            skills: ['wmsj_天命加护', 'wmsj_乾坤扭转', 'wmsj_唯我独尊', 'wmsj_征战天下', 'wmsj_我自不凡', 'wmsj_命运无常', 'wmsj_并天而行', 'wmsj_极天剑影', 'wmsj_天命所归', 'wmsj_卯律', 'wmsj_巳农', 'wmsj_未建'],
                        },
                        wmsj_X: {
                            sex: 'male',
                            hp: 9,
                            maxHp: 10,
                            group: 'shen',
                            skills: ['wmsj_全知全能', 'wmsj_超越维度', 'wmsj_零维', 'wmsj_准点下班'],
                        },
                        wmsj_孙悟空: {
                            sex: 'male',
                            hp: 9,
                            maxHp: 9,
                            group: 'shen',
                            skills: ['wmsj_无我极境', 'wmsj_自在极意', 'wmsj_锻体', 'wmsj_仙豆', 'wmsj_瞬移', 'wmsj_武心', 'wmsj_聚元', 'wmsj_筋斗', 'wmsj_极意', 'wmsj_神之极境'],
                        },
                        wmsj_鲁路修: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 5,
                            group: 'shen',
                            skills: ['wmsj_王之力', 'wmsj_geass', 'wmsj_零之镇魂曲', 'wmsj_神谕执棋', 'wmsj_王子', 'wmsj_BGM'],
                        },
                        wmsj_CC: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            group: 'shen',
                            skills: ['wmsj_不死契约', 'wmsj_命运编织', 'wmsj_魅惑', 'wmsj_公主', 'wmsj_BGM'],
                        },
                        wmsj_奇迹与你: {
                            sex: 'male',
                            hp: 4,
                            maxHp: 4,
                            group: 'shen',
                            skills: ['wmsj_灾厄洪流', 'wmsj_灾厄降临', 'wmsj_灾厄回流'],
                        },
                        wmsj_超越天堂: {
                            sex: 'male',
                            hp: 7,
                            maxHp: 7,
                            group: 'shen',
                            skills: ['wmsj_超越', 'wmsj_超越世界', 'wmsj_无所不能'],
                        },
                        wmsj_天堂制造: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 5,
                            group: 'shen',
                            skills: ['wmsj_缓慢', 'wmsj_中速', 'wmsj_高速', 'wmsj_极速'],
                        },
                        wmsj_黄金体验: {
                            sex: 'male',
                            hp: 7,
                            maxHp: 7,
                            group: 'shen',
                            skills: ['wmsj_黄镇'],
                        },
                        wmsj_银色战车: {
                            sex: 'male',
                            hp: 3,
                            maxHp: 4,
                            group: 'shen',
                            skills: ['wmsj_银镇'],
                        },
                        wmsj_牙4: {
                            sex: 'male',
                            hp: 7,
                            maxHp: 8,
                            group: 'shen',
                            skills: ['wmsj_抓弹', 'wmsj_回旋'],
                        },
                        wmsj_软又湿: {
                            sex: 'male',
                            hp: 4,
                            maxHp: 5,
                            group: 'shen',
                            skills: ['wmsj_气泡', 'wmsj_世界弦'],
                        },
                        wmsj_女王: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            group: 'shen',
                            skills: ['wmsj_女王威严', 'wmsj_时滞领域', 'wmsj_制裁'],
                        },
                        wmsj_奈斯: {
                            sex: 'male',
                            hp: 4,
                            maxHp: 4,
                            group: 'shen',
                            skills: ['wmsj_完美英雄', 'wmsj_完美攻击', 'wmsj_完美防御'],
                        },
                        wmsj_崩坏之抹消者: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 6,
                            hujia: 2,
                            group: 'shen',
                            skills: ['wmsj_抹杀', 'wmsj_寂灭', 'wmsj_解除', 'wmsj_混沌'],
                        },
                        wmsj_雅格威尔: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 6,
                            hujia: 2,
                            group: 'shen',
                            skills: ['wmsj_焰欧', 'wmsj_天丛云', 'wmsj_死告', 'wmsj_陨落', 'wmsj_枯竭'],
                        },
                        wmsj_伊格尼斯: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 6,
                            hujia: 2,
                            group: 'shen',
                            skills: ['wmsj_无限', 'wmsj_宇宙', 'wmsj_利刃', 'wmsj_庇佑'],
                        },
                        wmsj_雅格威克: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 6,
                            hujia: 2,
                            group: 'shen',
                            skills: ['wmsj_毁灭', 'wmsj_地域星', 'wmsj_无间', 'wmsj_摩珂', 'wmsj_灰烬', 'wmsj_求道玉'],
                        },
                        wmsj_冥界草: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 6,
                            hujia: 2,
                            group: 'shen',
                            skills: ['wmsj_浩劫', 'wmsj_梦月', 'wmsj_天国', 'wmsj_恶鬼', 'wmsj_冥爆'],
                        },
                        wmsj_荒天帝: {
                            sex: 'male',
                            hp: 4,
                            maxHp: 5,
                            hujia: 1,
                            group: 'shen',
                            skills: ['wmsj_以身为种', 'wmsj_他化自在', 'wmsj_独断万古'],
                        },
                        wmsj_叶天帝: {
                            sex: 'male',
                            hp: 4,
                            maxHp: 4,
                            group: 'shen',
                            skills: ['wmsj_荒古圣体', 'wmsj_泯灭', 'wmsj_九秘'],
                        },
                        wmsj_狠人大帝: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            group: 'shen',
                            skills: ['wmsj_吞天魔功', 'wmsj_不灭天功'],
                        },
                        wmsj_尸骸仙帝: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 6,
                            group: 'shen',
                            skills: ['wmsj_黑暗动乱', 'wmsj_帝者俯视', 'wmsj_不灭元神', 'wmsj_化道寂灭'],
                        },
                        wmsj_十冠王: {
                            sex: 'male',
                            hp: 6,
                            maxHp: 6,
                            group: 'shen',
                            skills: ['wmsj_十世沉淀', 'wmsj_天子之法', 'wmsj_世界树', 'wmsj_冠绝当世'],
                        },
                        wmsj_叶倾仙: {
                            sex: 'female',
                            hp: 5,
                            maxHp: 5,
                            group: 'shen',
                            skills: ['wmsj_超然世外', 'wmsj_倾仙漫步', 'wmsj_红尘劫', 'wmsj_往生曲'],
                        },
                        wmsj_石毅: {
                            sex: 'male',
                            hp: 4,
                            maxHp: 4,
                            group: 'shen',
                            skills: ['wmsj_重瞳洞悉', 'wmsj_宝术掠夺', 'wmsj_至尊骨无畏', 'wmsj_重瞳开天'],
                        },
                        wmsj_无始大帝: {
                            sex: 'male',
                            hp: 6,
                            maxHp: 8,
                            group: 'shen',
                            skills: ['wmsj_无始亦无终', 'wmsj_大道宝瓶', 'wmsj_横推诸世敌', 'wmsj_无始钟镇'],
                        },
                        wmsj_柳神: {
                            sex: 'female',
                            hp: 5,
                            maxHp: 6,
                            group: 'shen',
                            skills: ['wmsj_祭灵之佑', 'wmsj_万法皆空', 'wmsj_涅槃重生', 'wmsj_雷帝裁决'],
                        },
                        wmsj_天道: {
                            sex: 'none',
                            hp: 1,
                            maxHp: 1,
                            group: 'shen',
                            skills: ['wmsj_天道判定', 'wmsj_天劫', 'wmsj_紫霄'],
                        },
                        wmsj_圣主: {
                            sex: 'male',
                            hp: 12,
                            maxHp: 12,
                            hujia: 12,
                            group: 'shen',
                            skills: ['wmsj_鼠', 'wmsj_牛', 'wmsj_虎', 'wmsj_兔', 'wmsj_龙', 'wmsj_蛇', 'wmsj_马', 'wmsj_羊', 'wmsj_猴', 'wmsj_鸡', 'wmsj_狗', 'wmsj_猪'],
                            isBoss: true,
                            isBossAllowed: true,
                        },
                        wmsj_岁相: {
                            sex: 'none',
                            hp: 12,
                            maxHp: 12,
                            hujia: 12,
                            group: 'shen',
                            skills: ['wmsj_子武', 'wmsj_丑谋', 'wmsj_寅诗', 'wmsj_卯律', 'wmsj_辰师', 'wmsj_巳农', 'wmsj_午商', 'wmsj_未建', 'wmsj_申铸', 'wmsj_酉疗', 'wmsj_戌绘', 'wmsj_亥食', 'wmsj_musical_sui'],
                            isBoss: true,
                            isBossAllowed: true,
                        },
                        wmsj_谱尼: {
                            sex: 'none',
                            hp: 7,
                            maxHp: 7,
                            group: 'shen',
                            skills: ['wmsj_虚无', 'wmsj_元素', 'wmsj_能量', 'wmsj_生命', 'wmsj_永恒', 'wmsj_轮回', 'wmsj_圣洁', 'wmsj_圣灵谱尼特性'],
                            isBoss: true,
                            isBossAllowed: true,
                        },
                        wmsj_咤克斯: {
                            sex: 'male',
                            hp: 10,
                            maxHp: 10,
                            group: 'shen',
                            groupBorder: 'jin',
                            skills: ['wmsj_天魔', 'wmsj_厉魇', 'wmsj_堕化', 'wmsj_魔王'],
                            isBoss: true,
                            isBossAllowed: true,
                        },
                    },
                    //武将简介
                    characterIntro: {
                        wmsj_荒天帝: '一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！',
                        wmsj_叶天帝: '一念花开，君临天下。',
                        wmsj_狠人大帝: '青丝有蓬勃生机，不在岁月中蒙尘，晶莹而自然披散，肌体莹白，修长仙躯上即便穿着因倾世一战而破烂的甲胄，她依旧空明无双，没有一丝的狼狈，而是更显风采，无尘无垢，超然古今之上。',
                        wmsj_十冠王: '万载岁月，我待你归来，伴你长大，候你重生，将你找到，护你周全。',
                        wmsj_叶倾仙: '逆时空之流，返乱古纪元，叶天帝之命，欲缔荒天帝石昊与后世之盟，共抗诡异祸乱。以因果重逾山岳，故寄神识于无终仙王仙钟之器灵（仙道神形），方得驻留此世，行使命事。',
                        wmsj_石毅: '幼年时夺取石昊的至尊骨，使其濒死；在虚神界与石昊大战落败后被重瞳女救走；进入上界后与石昊等人联手对抗强敌，在末法时代进入仙域；黑暗动乱爆发后，为助石昊恢复战力而献祭自己。',
                        wmsj_无始大帝: '仙路尽头谁为峰，一见无始道成空。',
                        wmsj_柳神: '最简单与朴素的道理皆蕴含在平凡的事物中。古树折断，也许会死，因为生机早竭。如那韭菜，初种下时发黄且细弱，可是一茬又一茬的割过，却会愈发浓绿，逐渐粗壮。也如那蚕，若困于茧中，自会憋死、灭亡，可若是破茧而出，就会化成蝶，鲜艳亮丽，这是一次涅槃，超脱过去。',
                        wmsj_尸骸仙帝: '古今未来，吾身为尊，万道成空，镇压当世敌。',
                        wmsj_天道: '大道五十，天衍四九，人遁其一。',
                        wmsj_圣主: '圣主，火之恶魔，曾经统治地球的八大恶魔之一，对应八卦中的“离”（☲）。',
                        wmsj_岁相: '岁兽阴影，古奥巍峨。它懒懒地看向人间，一眼已是千年，千年轻如一梦，说不清是愤怒抑或幽怨。',
                        wmsj_谱尼: '他是传奇的君王，不必戴上世间的王冠。他是不朽的奇迹，不必追逐宇宙的力量。在他的主导下，宇宙享受过漫长的和平。可是，宇宙从不会永远地享受安宁。宇宙之中，总会诞生黑暗的生灵。魔君从黑暗中缓缓出现。混沌的力量。混沌的教派。“新的秩序，新的力量，新的未来，新的主宰。”他们喊叫着。魔君和他的党徒们似乎已认定了胜利的到来。是这样么？谱尼筹备了许多事情后，终于降临到了混沌星域之中。圣灵之力是救赎而非毁灭。那么，救赎只是意味着一再地忍让么？谱尼的身上，圣灵之光缓缓浮动，犹如一件华服，闪耀着温暖的光泽。神灵的气息从光芒中诞生。诸神的时代已经结束。唯一的真神出现了。不朽与独一。他的名字叫做谱尼。',
                        wmsj_咤克斯: '上古时期便已现身的黑暗魔王，凭借“灵魂不灭”的特殊性和三大分身祸乱宇宙，曾多次被各方势力特别是光明势力讨伐；在上古之战时期，曾通过附身上古魔尊的方式试图转生，但阴谋被粉碎，后加入天魔组织再次入侵银河星域，被赫尔卡等守护者击败，灵魂被封印于赫鲁卡星；数千年后破除封印并扰乱银河星域、毁灭露希欧星生态，被龙族联合各方力量再次消灭；后通过虚无异界转生，成为大暗黑天长老，掌控克里奥星域，参与了对五古王、王之战联的战斗和秩序大战；在无光黑洞之战里被光火神君消灭肉身，被斯摩亚蒂的灵魂残片吸收，“夺舍”终焉·自由后企图通过终焉暗帝的躯壳复生，但失败；之后又试图侵占达克霍姆的躯体，同样被阻止。',
                        wmsj_X: '神秘莫测的最强英雄，拥有改变维度的力量，他的出现是否会使故事的结局发生改变？',
                    },
                    //武将名称
                    characterTitle: {
                        wmsj_征: '天命主宰',
                        wmsj_服: '天命主宰',
                        wmsj_征服: '天命主宰',
                        wmsj_X: '凸变英雄',
                        wmsj_荒天帝: '独断万古',
                        wmsj_叶天帝: '一叶遮天',
                        wmsj_狠人大帝: '吞天大帝',
                        wmsj_尸骸仙帝: '黑暗动乱',
                        wmsj_十冠王: '十世称尊',
                        wmsj_叶倾仙: '红尘谪仙',
                        wmsj_石毅: '重瞳至尊',
                        wmsj_无始大帝: '无始大帝',
                        wmsj_柳神: '柳神',
                        wmsj_天道: '无量量劫',
                        wmsj_岁相: '昔字如烟',
                        wmsj_谱尼: '圣光的神明',
                        wmsj_咤克斯: '湮灭之主',
                        wmsj_孙悟空: '自在极意',
                        wmsj_女王: '女王',
                        wmsj_奈斯: '完美英雄',
                    },
                    //武将分包
                    characterSort: {
                        完美世界: {
                            wmsj_完美世界: ['wmsj_征', 'wmsj_服', 'wmsj_征服', 'wmsj_荒天帝', 'wmsj_叶天帝', 'wmsj_狠人大帝', 'wmsj_尸骸仙帝', 'wmsj_十冠王', 'wmsj_叶倾仙', 'wmsj_石毅', 'wmsj_无始大帝', 'wmsj_柳神'],
                            wmsj_凸变英雄X: ['wmsj_X', 'wmsj_女王', 'wmsj_奈斯'],
                            wmsj_奇思妙想: ['wmsj_孙悟空', 'wmsj_天道', 'wmsj_圣主', 'wmsj_鲁路修', 'wmsj_CC'],
                            wmsj_赛尔Boss: ['wmsj_谱尼', 'wmsj_咤克斯'],
                            wmsj_界园志异: ['wmsj_岁相'],
                            wmsj_拳皇: ['wmsj_崩坏之抹消者', 'wmsj_雅格威尔', 'wmsj_伊格尼斯', 'wmsj_冥界草', 'wmsj_雅格威克'],
                            wmsj_JoJo: ['wmsj_奇迹与你', 'wmsj_超越天堂', 'wmsj_天堂制造', 'wmsj_黄金体验', 'wmsj_银色战车', 'wmsj_软又湿', 'wmsj_牙4'],
                        },
                    },
                    //卡牌
                    card: {},
                    skill: {
                        //子武：锁定技，你对其他角色造成伤害增加双方体力之差，其他角色进入濒死状态前你可令其立即死亡。
                        wmsj_子武: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                source: ['damageBefore'],
                            },
                            filter: function (event, player) {
                                return event.player != player;
                            },
                            content: function () {
                                Reflect.defineProperty(trigger, 'finished', {
                                    get() {
                                        return trigger.step > 5;
                                    },
                                    set() { },
                                });
                                let damage = trigger.num;
                                Reflect.defineProperty(trigger, 'num', {
                                    get() {
                                        return damage;
                                    },
                                    set(value) {
                                        if (value > damage) {
                                            damage = value;
                                        }
                                    },
                                    configurable: false,
                                });
                                const npc = trigger.player;
                                Reflect.defineProperty(trigger, 'player', {
                                    get() {
                                        return npc;
                                    },
                                    set() { },
                                });
                                let num = Math.abs(player.hp - trigger.player.hp);
                                trigger.num += num;
                                player.say('敬刻一道破勇力，入时者畏惧退避');
                            },
                            group: ['wmsj_子武_1'],
                            subSkill: {
                                1: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    juexingji: true,
                                    skillAnimation: true,
                                    animationColor: 'thunder',
                                    animationStr: '斩杀',
                                    trigger: {
                                        global: ['dyingBefore'],
                                    },
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    async content(event, trigger, player) {
                                        let npc = trigger.player;
                                        const result = await player
                                            .chooseBool(`是否斩杀${get.translation(npc)}？`)
                                            .set('ai', () => get.attitude(player, trigger.player) < 0)
                                            .forResult();
                                        if (result?.bool) {
                                            player.logSkill('wmsj_子武_1');
                                            player.say('敬刻一道破勇力，入时者畏惧退避');
                                            var next = npc.die();
                                            next.source = player;
                                            next._triggered = null;
                                        }
                                    },
                                },
                            },
                        },

                        //丑谋：锁定技，你不因使用或打出而失去手牌后，指定一名角色视为对其使用随机数量张不同牌名的伤害牌（至多8张）。
                        wmsj_丑谋: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter: function (event, player) {
                                if (event.getParent().name == 'useCard' || event.getParent().name == 'respond') {
                                    return false;
                                }
                                var evt = event.getl(player);
                                return evt && evt.hs && evt.hs.length;
                            },
                            content: function () {
                                'step 0';
                                player.chooseTarget(get.prompt('wmsj_丑谋'), '选择一个目标发动丑谋', function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    player.logSkill('wmsj_丑谋');
                                    player.say('敬刻二思算八方，入时者移步尽失');
                                    let npc = result.targets[0];
                                    numx = Math.floor(Math.random() * 8) + 1;
                                    list = ['sha', 'juedou', 'nanman', 'wanjian', 'qizhengxiangsheng', 'huoshaolianying', 'shuiyanqijunx', 'chuqibuyi'];
                                    while (numx--) {
                                        var name = list.randomGet();
                                        var card = game.createCard(name);
                                        list.remove(name);
                                        player.useCard(card, npc, false);
                                        game.cardsGotoSpecial(card);
                                    }
                                }
                            },
                        },

                        //寅诗：锁定技，你只能因非转化实体牌的伤害减少体力且因此减少体力后不会再因同名牌减少体力直到回合结束。
                        wmsj_寅诗: {
                            forced: true,
                            firstDo: true,
                            priority: Infinity,
                            charlotte: true,
                            silent: true,
                            init(player) {
                                const info = lib.character[player.name];
                                let qhp = info.hp;
                                Reflect.defineProperty(player, 'hp', {
                                    get() {
                                        return qhp;
                                    },
                                    set(value) {
                                        if (value > qhp) {
                                            qhp = value;
                                        } else {
                                            if (player.success) {
                                                qhp = value;
                                            }
                                        }
                                    },
                                    configurable: false,
                                });
                            },
                            trigger: {
                                player: 'changeHp',
                            },
                            filter: function (event, player) {
                                let evt = event.parent;
                                if (evt?.name == 'damage' && evt.card?.isCard && evt.cards.length) return false;
                                return event.num < 0;
                            },
                            content: function () {
                                let evt = trigger.parent;
                                bool = evt?.name == 'damage' && evt.card?.isCard && evt.cards.length;
                                if (!bool) {
                                    trigger.cancel();
                                    player.logSkill('wmsj_寅诗');
                                    player.say('敬刻三白日逍遥，入时者所思非人');
                                    event.finish();
                                } else if (player.getStorage('wmsj_寅诗_used').includes(evt.card.name)) {
                                    trigger.cancel();
                                    player.logSkill('wmsj_寅诗');
                                    player.say('敬刻三白日逍遥，入时者所思非人');
                                } else {
                                    player.addTempSkill('wmsj_寅诗_used', ['phaseAfter', 'phaseBefore']);
                                    player.markAuto('wmsj_寅诗_used', [evt.card.name]);
                                    if (player.hujia < 0) {
                                        player.success = true;
                                        player.hp--;
                                        player.update();
                                        player.success = false;
                                    }
                                }
                            },
                            subSkill: {
                                used: {
                                    charlotte: true,
                                    onremove(player) {
                                        player.storage.wmsj_寅诗_used = [];
                                    },
                                },
                            },
                        },

                        //卯律：锁定技，你的阶段和回合被跳过时或你出牌阶段外每受到两次伤害后，你执行一个额外的出牌阶段。
                        wmsj_卯律: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                player: ['phaseDiscardSkipped', 'phaseJudgeSkipped', 'phaseDrawSkipped', 'phaseUseSkipped', 'phaseZhunbeiSkipped', 'phaseJieshuSkipped', 'phaseSkipped', 'phaseCancelled', 'phaseDiscardCancelled', 'phaseJudgeCancelled', 'phaseDrawCancelled', 'phaseUseCancelled', 'phaseZhunbeiCancelled', 'phaseJieshuCancelled', 'damageAfter'],
                            },
                            filter: function (event, player) {
                                if (event.name == 'damage' && player.isPhaseUsing()) return false;
                                return true;
                            },
                            content: function () {
                                if (!player.卯律计数) player.卯律计数 = 0;
                                if (trigger.name == 'damage') {
                                    player.卯律计数++;
                                    if (player.卯律计数 % 2 != 0) event.finish();
                                }
                                player.logSkill('wmsj_卯律');
                                player.say('敬刻四天音传法，入时者难逾规矩');
                                player.phaseUse();
                            },
                        },

                        //辰师：锁定技，你使用的伤害牌额外结算一次。
                        wmsj_辰师: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter: function (event, player) {
                                if (!event.targets || !event.card) return false;
                                if (event.card && event.card.name == 'wuxie') return false;
                                if (!get.tag(event.card, 'damage')) return false;
                                var type = get.type(event.card);
                                if (type != 'basic' && type != 'trick') return false;
                                return true;
                            },
                            content: function () {
                                trigger.effectCount += 1;
                                player.logSkill('wmsj_辰师');
                                player.say('敬刻五授业解惑，入时者不分贵贱');
                            },
                        },

                        //巳农：锁定技，你摸牌/回复体力时，摸牌数/回复量+1。
                        wmsj_巳农: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                player: ['drawBegin', 'recoverBegin'],
                            },
                            content: function () {
                                trigger.num++;
                                player.say('敬刻六谷稻丰足，入时者朴实多餐');
                                player.logSkill('wmsj_巳农');
                            },
                        },

                        //午商：锁定技，出牌阶段开始和结束时，你将手牌补充至体力上限。
                        wmsj_午商: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                player: ['phaseUseBegin', 'phaseUseEnd'],
                            },
                            filter: function (event, player) {
                                return player.countCards('h') < player.maxHp;
                            },
                            content: function () {
                                player.logSkill('wmsj_午商');
                                player.say('敬刻七长绢聚富，入时者不知财数');
                                player.drawTo(player.maxHp);
                            },
                        },

                        //未建：锁定技，你防止体力上限削减且你不因濒死结算而死亡前取消并结束当前阶段。
                        wmsj_未建: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            init(player) {
                                const info = lib.character[player.name];
                                let mhp = info.maxHp;
                                Reflect.defineProperty(player, 'maxHp', {
                                    get() {
                                        return mhp;
                                    },
                                    set(value) {
                                        if (value > mhp) {
                                            mhp = value;
                                        }
                                    },
                                    configurable: false,
                                });
                                Reflect.defineProperty(player, 'goMad', {
                                    get() {
                                        return () => game.wmsj_zk;
                                    },
                                    set() { },
                                });
                            },
                            trigger: {
                                player: ['dieBefore'],
                            },
                            filter: function (event, player) {
                                if (event.parent?.name == 'dying' && player.hp <= 0) {
                                    return false;
                                }
                                return true;
                            },
                            content: function () {
                                trigger.cancel();
                                player.say('敬刻八筑巧藏珍，入时者流连难返');
                                player.logSkill('wmsj_未建');
                                for (const phase of lib.phaseName) {
                                    const evt = event.getParent(phase);
                                    if (evt?.name === phase && !evt.finished) {
                                        const name = get.translation(phase);
                                        game.log(player, '令', _status.currentPhase, '结束了' + name);
                                        player.line(_status.currentPhase, 'thunder');
                                        evt.cancel(true, null, true);
                                        break;
                                    }
                                }
                            },
                            group: ['wmsj_未建_1'],
                            subSkill: {
                                1: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    trigger: {
                                        player: ['phaseBefore', 'phaseUseBefore', 'useCardBefore'],
                                    },
                                    content: function () {
                                        if (trigger.name == 'phase') {
                                            Reflect.defineProperty(trigger, 'finished', {
                                                get() {
                                                    return trigger.step > 12;
                                                },
                                                set() { },
                                            });
                                            Reflect.defineProperty(trigger, 'player', {
                                                get() {
                                                    return player;
                                                },
                                                set() { },
                                            });
                                        }
                                        if (trigger.name == 'phaseUse') {
                                            Reflect.defineProperty(trigger, 'finished', {
                                                get() {
                                                    return trigger.step > 5;
                                                },
                                                set() { },
                                            });
                                        }
                                        if (trigger.name == 'useCard') {
                                            Reflect.defineProperty(trigger, 'finished', {
                                                get() {
                                                    return trigger.step > 16;
                                                },
                                                set() { },
                                            });
                                            Reflect.defineProperty(trigger, 'excluded', {
                                                get() {
                                                    return [];
                                                },
                                                set() { },
                                            });
                                            Reflect.defineProperty(trigger, 'all_excluded', {
                                                get() {
                                                    return false;
                                                },
                                                set() { },
                                            });
                                        }
                                    },
                                },
                            },
                        },

                        //申铸：锁定技，你无视其他角色防具且对其造成伤害前令其清除并无法获得护甲直到回合结束。
                        wmsj_申铸: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            filter: function (event, player) {
                                return event.player != player;
                            },
                            content: function () {
                                if (!player.封护甲) player.封护甲 = [];
                                let npc = trigger.player;
                                num = npc.hujia;
                                player.封护甲.add(npc);
                                let hj = 0;
                                Reflect.defineProperty(npc, 'hujia', {
                                    get() {
                                        return hj;
                                    },
                                    set(value) {
                                        if (!player.封护甲.includes(npc)) hj = value;
                                    },
                                });
                                let whp = npc.hp;
                                Reflect.defineProperty(npc, 'hp', {
                                    get() {
                                        return whp;
                                    },
                                    set(value) {
                                        whp = value;
                                    },
                                    configurable: false,
                                });
                                npc.update();
                                npc.hujia = 0;
                                npc.update();
                                npc.addTempSkill('wmsj_申铸_1', ['phaseBefore', 'phaseAfter']);
                                player.logSkill('wmsj_申铸');
                                player.say('敬刻九铸金熔火，入时者得见其妙');
                            },
                            ai: {
                                unequip: true,
                            },
                            group: ['wmsj_申铸_1', 'wmsj_申铸_2'],
                            subSkill: {
                                1: {
                                    silent: true,
                                    forced: true,
                                    unique: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    marktext: '申铸',
                                    mark: true,
                                    locked: true,
                                    intro: {
                                        name: '申铸-破甲',
                                        content: '无法获得护甲',
                                    },
                                    trigger: {
                                        player: 'changeHujiaBefore',
                                    },
                                    filter: function (event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    trigger: {
                                        global: ['phaseBefore', 'phaseAfter'],
                                    },
                                    filter: function (event, player) {
                                        return player.封护甲.length;
                                    },
                                    content: function () {
                                        player.封护甲 = [];
                                    },
                                },
                            },
                        },

                        //酉疗：锁定技，敌方角色摸牌阶段外获得牌后弃置所有非黑色牌然后你回复等量体力。
                        wmsj_酉疗: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                global: ['gainAfter'],
                            },
                            filter: function (event, player) {
                                const evt = event.getParent('phaseDraw');
                                if (evt?.name == 'phaseDraw') return false;
                                return player.getEnemies().includes(event.player);
                            },
                            content: function () {
                                let npc = trigger.player;
                                cards = npc.getCards('he');
                                tog = [];
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.color(cards[i]) != 'black') {
                                        tog.push(cards[i]);
                                    }
                                }
                                if (tog.length) {
                                    npc.discard(tog);
                                    player.recover(tog.length);
                                    player.logSkill('wmsj_酉疗');
                                    player.say('敬刻十抚伤愈痕，入时者以睡抗灾');
                                }
                            },
                        },

                        //戌绘：锁定技，你使用牌无距离次数限制且你减少体力时至多减少1点。
                        wmsj_戌绘: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                player: ['changeHpBegin'],
                            },
                            filter: function (event, player) {
                                return event.num < -1;
                            },
                            content: function () {
                                trigger.num = -1;
                                player.logSkill('wmsj_戌绘');
                                player.say('敬刻十一卷生花，入时者皆赏便符');
                            },
                            mod: {
                                targetInRange: () => true,
                                cardUsableTarget: () => true,
                            },
                        },

                        //亥食：锁定技，回合开始时你和所有友方角色回复1点体力并摸一张牌，然后对所有敌方角色造成1点伤害。
                        wmsj_亥食: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            async content(event, trigger, player) {
                                player.logSkill('wmsj_亥食');
                                player.say('敬刻十二催饭香，入时亲属饱肚肠');
                                player.recover();
                                await player.draw();
                                for (const npc of player.getFriends()) {
                                    npc.recover();
                                    await npc.draw();
                                }
                                for (const npc of player.getEnemies()) {
                                    await npc.damage();
                                }
                            },
                        },

                        wmsj_musical_sui: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            charlotte: true,
                            forced: true,
                            unique: true,
                            silent: true,
                            filter: function (event, player) {
                                let bool = lib.config.extension_完美世界_角色BGM;
                                return !player.BGM && bool;
                            },
                            content: function () {
                                'step 0';
                                player.BGM = true;
                                ('step 1');
                                let list = ['巧筑八方', '残卷', '意难平'];
                                player
                                    .chooseControl(list)
                                    .set('forceDie', true)
                                    .set('choice', list.randomGet())
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    }).prompt = '选择一个背景音乐';
                                ('step 2');
                                let bgm = result.control;
                                path = lib.assetURL + 'extension/完美世界/audio/music/BGM_' + bgm + '.mp3';
                                ui.backgroundMusic.src = path;
                                ui.backgroundMusic.addEventListener('ended', function () {
                                    ui.backgroundMusic.src = path;
                                });
                            },
                        },

                        //虚无：锁定技，你只能因非转化实体牌伤害减少体力，你受到的伤害不超过1且受伤后本回合防止同名牌伤害。
                        wmsj_虚无: {
                            audio: 'ext:完美世界/audio/skill:1',
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            init(player) {
                                const info = lib.character[player.name];
                                let qhp = info.hp;
                                Reflect.defineProperty(player, 'hp', {
                                    get() {
                                        return qhp;
                                    },
                                    set(value) {
                                        if (value > qhp) {
                                            qhp = value;
                                        } else {
                                            if (player.success || !player.hasSkill('wmsj_虚无')) {
                                                qhp = value;
                                            }
                                        }
                                    },
                                    configurable: false,
                                });
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter: function (event, player) {
                                return event.num > 0;
                            },
                            content: function () {
                                let bool = trigger.card && trigger.card.isCard && trigger.cards.length;
                                if (bool) {
                                    if (player.hujia < 1) {
                                        player.success = true;
                                        player.hp--;
                                        player.update();
                                        player.success = false;
                                        if (player.hp <= 0) player.dying();
                                    }
                                } else {
                                    player.logSkill('wmsj_虚无');
                                }
                            },
                            group: ['wmsj_虚无_1', 'wmsj_虚无_2'],
                            subSkill: {
                                1: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return event.card;
                                    },
                                    content() {
                                        if (player.getStorage('wmsj_虚无_used').includes(trigger.card.name)) {
                                            trigger.cancel();
                                            player.logSkill('wmsj_虚无');
                                        } else {
                                            player.addTempSkill('wmsj_虚无_used', ['phaseAfter', 'phaseBefore']);
                                            player.markAuto('wmsj_虚无_used', [trigger.card.name]);
                                        }
                                    },
                                },
                                used: {
                                    charlotte: true,
                                    onremove(player) {
                                        player.storage.wmsj_虚无_used = [];
                                    },
                                },
                                2: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    lastDo: true,
                                    priority: -Infinity,
                                    silent: true,
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return event.num > 1;
                                    },
                                    content() {
                                        trigger.num = 1;
                                    },
                                },
                            },
                        },

                        //元素：锁定技，你对其他角色造成伤害附加随机属性且令其清除并无法获得护甲直到回合结束。
                        wmsj_元素: {
                            audio: 'ext:完美世界/audio/skill:1',
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                source: ['damageBegin1'],
                            },
                            filter: function (event, player) {
                                return !event.nature;
                            },
                            content: function () {
                                let nat = ['fire', 'thunder', 'ice', 'kami'].randomGet();
                                game.setNature(trigger, nat);
                            },
                            group: ['wmsj_元素_1', 'wmsj_元素_2'],
                            subSkill: {
                                1: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    init(player) {
                                        player.封护甲 = [];
                                    },
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    filter: function (event, player) {
                                        return event.player != player;
                                    },
                                    content: function () {
                                        let npc = trigger.player;
                                        player.封护甲.add(npc);
                                        let hj = 0;
                                        Reflect.defineProperty(npc, 'hujia', {
                                            get() {
                                                return hj;
                                            },
                                            set(value) {
                                                if (!player.封护甲.includes(npc)) hj = value;
                                            },
                                        });
                                        let qhp = npc.hp;
                                        Reflect.defineProperty(npc, 'hp', {
                                            get() {
                                                return qhp;
                                            },
                                            set(value) {
                                                qhp = value;
                                            },
                                            configurable: false,
                                        });
                                        npc.update();
                                    },
                                },
                                2: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    trigger: {
                                        global: ['phaseBefore', 'phaseAfter'],
                                    },
                                    filter: function (event, player) {
                                        return player.封护甲.length;
                                    },
                                    content: function () {
                                        player.封护甲 = [];
                                    },
                                },
                            },
                        },

                        //能量：锁定技，你对体力高于你的角色造成伤害增加双方体力值之差，你受到伤害后对伤害来源造成两倍伤害值的伤害。
                        wmsj_能量: {
                            audio: 'ext:完美世界/audio/skill:1',
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                source: ['damageBefore'],
                            },
                            filter: function (event, player) {
                                return event.player != player && event.player.hp > player.hp;
                            },
                            content: function () {
                                let num = Math.abs(trigger.player.hp - player.hp);
                                trigger.num += num;
                            },
                            group: ['wmsj_能量_1'],
                            subSkill: {
                                1: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    trigger: {
                                        player: ['damageAfter'],
                                    },
                                    filter: function (event, player) {
                                        return event.source && event.source != player;
                                    },
                                    content: function () {
                                        let num = 2 * trigger.num;
                                        player.logSkill('wmsj_能量', trigger.source);
                                        trigger.source.damage(num);
                                    },
                                },
                            },
                        },

                        //生命：锁定技，回合开始时，你将手牌补充至体力上限并回复红色手牌数的体力。
                        wmsj_生命: {
                            audio: 'ext:完美世界/audio/skill:1',
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            async content(event, trigger, player) {
                                player.logSkill('wmsj_生命');
                                let num = Math.min(7, player.maxHp);
                                await player.drawTo(num);
                                let num2 = player.countCards('h', { color: 'red' });
                                player.recover(num2);
                            },
                        },

                        //永恒：锁定技，你可以如手牌般使用或打出牌堆顶的七张牌且你使用牌无距离限制。
                        wmsj_永恒: {
                            audio: 'ext:完美世界/audio/skill:1',
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            mod: {
                                targetInRange: function (card, player, target) {
                                    return true;
                                },
                                attackRange: function (player, num) {
                                    return Infinity;
                                },
                                cardDiscardable(card, player) {
                                    if (get.position(card) == 's') return false;
                                },
                                canBeDiscarded(card, player) {
                                    if (get.position(card) == 's') return false;
                                },
                                canBeGained: function (card, source, player) {
                                    if (!_status.event || !_status.event.name) return;
                                    if (player.getCards('s').includes(card) && source != player) return false;
                                },
                            },
                            init(player, skill) {
                                game.broadcastAll((player) => {
                                    const skill = 'wmsj_永恒';
                                    for (const player of game.filterPlayer()) {
                                        if (player.hasSkill(skill, null, null, false)) get.info(skill).getCards(player, skill);
                                    }
                                    if (!_status._updateRoundNumber) {
                                        _status._updateRoundNumber = game.updateRoundNumber;
                                        game.updateRoundNumber = function () {
                                            _status._updateRoundNumber.apply(this, arguments);
                                            const skill = 'wmsj_永恒';
                                            for (const player of game.filterPlayer()) {
                                                if (player.hasSkill(skill, null, null, false)) get.info(skill).getCards(player, skill);
                                            }
                                        };
                                    }
                                }, player);
                                get.info(skill).getCards(player, skill);
                            },
                            onremove(player, skill) {
                                const cards2 = player.getCards('s', (card) => card.hasGaintag(skill));
                                if (player.isOnline2()) {
                                    player.send(
                                        (cards, player) => {
                                            cards.forEach((i) => i.delete());
                                            if (player == game.me) ui.updatehl();
                                        },
                                        cards2,
                                        player
                                    );
                                }
                                cards2.forEach((i) => i.delete());
                                if (player === game.me) ui.updatehl();
                            },
                            getCards(player, skill) {
                                const cards = Array.from(ui.cardPile.childNodes).slice(0, Math.min(7, player.maxHp));
                                const cards2 = player.getCards('s', (card) => card.hasGaintag(skill));
                                const [gains, removes] = [cards.filter((card) => !cards2.map((i) => i._cardid).includes(card.cardid)), cards2.filter((card) => !cards.map((i) => i.cardid).includes(card._cardid))];
                                if (removes.length) {
                                    if (player.isOnline2()) {
                                        player.send(
                                            (cards, player) => {
                                                cards.forEach((i) => i.delete());
                                                if (player == game.me) ui.updatehl();
                                            },
                                            removes,
                                            player
                                        );
                                    }
                                    removes.forEach((i) => i.delete());
                                    if (player === game.me) ui.updatehl();
                                }
                                if (gains.length) {
                                    player.directgains(
                                        gains.map((card) => {
                                            const cardx = ui.create.card();
                                            cardx.init(get.cardInfo(card));
                                            cardx._cardid = card.cardid;
                                            return cardx;
                                        }),
                                        null,
                                        skill
                                    );
                                }
                            },
                            trigger: { player: ['useCardBefore', 'respondBefore'] },
                            filter(event, player) {
                                const cards = event.cards;
                                return Array.isArray(cards) && player.getCards('s', (card) => card.hasGaintag('wmsj_永恒')).containsSome(...cards);
                            },
                            content() {
                                let cards = [];
                                for (const i of trigger.cards) {
                                    cards.push(get.cardPile2((card) => card.cardid === i._cardid) || i);
                                }
                                trigger.cards = cards;
                                trigger.card.cards = cards;
                            },
                            group: ['wmsj_永恒_1'],
                            subSkill: {
                                1: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    trigger: {
                                        global: ['gainBefore', 'discardBefore'],
                                    },
                                    filter: function (event, player) {
                                        for (var i of event.cards) {
                                            if (i.hasGaintag('wmsj_永恒')) return true;
                                        }
                                        return false;
                                    },
                                    content: function () {
                                        trigger.cards = trigger.cards.filter((i) => !i.hasGaintag('wmsj_永恒'));
                                    },
                                },
                            },
                        },

                        //轮回：锁定技，每轮限一次，你体力不大于0时立即与场上体力最高角色交换体力。
                        wmsj_轮回: {
                            audio: 'ext:完美世界/audio/skill:1',
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            skillAnimation: true,
                            juexingji: true,
                            trigger: {
                                player: ['changeHp', 'dieBefore', 'dyingBefore'],
                            },
                            filter: function (event, player) {
                                return player.hp <= 0 && !player.hasSkill('轮回计数');
                            },
                            content: function () {
                                'step 0';
                                trigger.cancel();
                                if (!game.hasPlayer((target) => target.hp > 0)) {
                                    player.hp = player.maxHp;
                                    player.addTempSkill('轮回计数', 'roundStart');
                                    event.finish();
                                } else if (
                                    game.countPlayer(function (current) {
                                        return (
                                            current != player &&
                                            !game.hasPlayer(function (current2) {
                                                return current2.hp > current.hp;
                                            })
                                        );
                                    }) == 1
                                ) {
                                    var target = game.findPlayer(function (current) {
                                        return (
                                            current != player &&
                                            !game.hasPlayer(function (current2) {
                                                return current2.hp > current.hp;
                                            })
                                        );
                                    });
                                    player.logSkill('wmsj_轮回', target);
                                    var hp1 = player.hp;
                                    var hp2 = target.hp;
                                    player.hp = hp2;
                                    target.hp = hp1;
                                    player.update();
                                    target.update();
                                    game.log(player, '和', target, '交换了体力值');
                                    player.addTempSkill('轮回计数', 'roundStart');
                                    if (hp1 < 1) target.dying();
                                    event.finish();
                                } else {
                                    player
                                        .chooseTarget(true, '选择【轮回】的目标', '与其交换体力值', function (card, player, target) {
                                            return (
                                                target != player &&
                                                !game.hasPlayer(function (target2) {
                                                    return target2.hp > target.hp;
                                                })
                                            );
                                        })
                                        .set('forceDie', true)
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        });
                                }
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.logSkill('wmsj_轮回', target);
                                    var hp1 = player.hp;
                                    var hp2 = target.hp;
                                    player.hp = hp2;
                                    target.hp = hp1;
                                    player.update();
                                    target.update();
                                    game.log(player, '和', target, '交换了体力值');
                                    player.addTempSkill('轮回计数', 'roundStart');
                                    if (hp1 < 1) target.dying();
                                }
                            },
                        },
                        轮回计数: {
                            mark: true,
                            charlotte: true,
                            marktext: '轮回',
                            intro: {
                                name: '轮回',
                                content: '本轮已发动',
                            },
                            onremove: true,
                        },

                        //圣洁：锁定技，其他角色回复体力或获得牌前有50%概率取消之且进入濒死状态前你可斩杀之。
                        wmsj_圣洁: {
                            audio: 'ext:完美世界/audio/skill:1',
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            trigger: {
                                global: ['recoverBefore', 'gainBefore', 'drawBefore'],
                            },
                            filter: function (event, player) {
                                if (event.name == 'recover') return false;
                                return event.player != player;
                            },
                            content: function () {
                                let npc = trigger.player;
                                str = trigger.name == 'recover' ? '回复' : '获得牌';
                                success = Math.random() < 0.5;
                                if (success) {
                                    player.logSkill('wmsj_圣洁', npc);
                                    trigger.cancel();
                                    if (npc.hp <= 0) npc.dying();
                                    game.log(npc, '的', str, '被取消了');
                                }
                            },
                            group: ['wmsj_圣洁_1'],
                            subSkill: {
                                1: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    juexingji: true,
                                    skillAnimation: true,
                                    animationColor: 'thunder',
                                    animationStr: '斩杀',
                                    trigger: {
                                        global: ['dyingBefore'],
                                    },
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    async content(event, trigger, player) {
                                        let npc = trigger.player;
                                        const result = await player
                                            .chooseBool(`是否斩杀${get.translation(npc)}？`)
                                            .set('ai', () => get.attitude(player, trigger.player) < 0)
                                            .forResult();
                                        if (result?.bool) {
                                            player.logSkill('wmsj_圣洁_1');
                                            var next = npc.die();
                                            next.source = player;
                                            next._triggered = null;
                                        }
                                    },
                                },
                            },
                        },

                        wmsj_圣灵谱尼特性: {
                            unique: true,
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            priority: Infinity,
                            silent: true,
                            derivation: 'wmsj_boss',
                            mark: true,
                            locked: true,
                            marktext: '圣灵',
                            intro: {
                                name: '圣灵',
                                content: '圣光的神明',
                            },
                            init(player) {
                                const info = lib.character[player.name];
                                let maxhp = info.maxHp;
                                Reflect.defineProperty(player, 'maxHp', {
                                    get() {
                                        return maxhp;
                                    },
                                    set(value) {
                                        if (value > maxhp) {
                                            maxhp = value;
                                        }
                                    },
                                    configurable: false,
                                });
                                Reflect.defineProperty(player, 'skipList', {
                                    get() {
                                        return [];
                                    },
                                    set() { },
                                });
                                Reflect.defineProperty(player, 'goMad', {
                                    get() {
                                        return () => game.wmsj_zk;
                                    },
                                    set() { },
                                });
                            },
                            trigger: {
                                source: 'damageBefore',
                            },
                            filter: function (event, player) {
                                return event.player != player;
                            },
                            content: function () {
                                Reflect.defineProperty(trigger, 'finished', {
                                    get() {
                                        return trigger.step > 5;
                                    },
                                    set() { },
                                });
                                let damage = trigger.num;
                                Reflect.defineProperty(trigger, 'num', {
                                    get() {
                                        return damage;
                                    },
                                    set(value) {
                                        if (value > damage) {
                                            damage = value;
                                        }
                                    },
                                    configurable: false,
                                });
                                const npc = trigger.player;
                                Reflect.defineProperty(trigger, 'player', {
                                    get() {
                                        return npc;
                                    },
                                    set() { },
                                });
                            },
                            group: ['wmsj_圣灵谱尼特性_1', 'wmsj_圣灵谱尼特性_2'],
                            subSkill: {
                                1: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    trigger: {
                                        player: ['dieBefore'],
                                    },
                                    filter(event, player) {
                                        if (event.parent?.name == 'dying' && player.hp <= 0) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    content: function () {
                                        trigger.cancel();
                                        game.log(player, '阻止了死亡');
                                        var npc = player.getEnemies().randomGet();
                                        for (const phase of lib.phaseName) {
                                            const evt = event.getParent(phase);
                                            if (evt?.name === phase && !evt.finished) {
                                                game.log('结束当前阶段：', phase);
                                                evt.cancel(true, null, true);
                                                break;
                                            }
                                        }
                                    },
                                },
                                2: {
                                    unique: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    trigger: {
                                        player: ['phaseBefore', 'phaseUseBefore', 'useCardBefore'],
                                    },
                                    content: function () {
                                        if (trigger.name == 'phase') {
                                            Reflect.defineProperty(trigger, 'finished', {
                                                get() {
                                                    return trigger.step > 12;
                                                },
                                                set() { },
                                            });
                                            Reflect.defineProperty(trigger, 'player', {
                                                get() {
                                                    return player;
                                                },
                                                set() { },
                                            });
                                        }
                                        if (trigger.name == 'phaseUse') {
                                            Reflect.defineProperty(trigger, 'finished', {
                                                get() {
                                                    return trigger.step > 5;
                                                },
                                                set() { },
                                            });
                                        }
                                        if (trigger.name == 'useCard') {
                                            Reflect.defineProperty(trigger, 'finished', {
                                                get() {
                                                    return trigger.step > 16;
                                                },
                                                set() { },
                                            });
                                            Reflect.defineProperty(trigger, 'excluded', {
                                                get() {
                                                    return [];
                                                },
                                                set() { },
                                            });
                                            Reflect.defineProperty(trigger, 'all_excluded', {
                                                get() {
                                                    return false;
                                                },
                                                set() { },
                                            });
                                        }
                                    },
                                },
                            },
                        },

                        //天魔：锁定技。①你造成伤害或体力变化后获得1个“魔”（数量至多为5）。②你使用牌次数限制，攻击距离和摸牌阶段摸牌数+X（X为“魔”数量）。③你造成伤害前有5%概率瞬杀目标，你每拥有1个“魔”增加2%瞬杀概率，若目标拥有“堕”，则每个“堕”增加2%瞬杀概率。
                        wmsj_天魔: {
                            forced: true,
                            charlotte: true,
                            marktext: '魔',
                            silent: true,
                            locked: true,
                            priority: 50,
                            intro: {
                                name: '魔',
                                content(storage, player) {
                                    return '当前瞬杀概率：' + (player.countMark('wmsj_天魔') * 2 + 5) + '%';
                                },
                            },
                            trigger: {
                                source: 'damageSource',
                                player: 'changeHp',
                            },
                            filter(event, player) {
                                return player.countMark('wmsj_天魔') < 5;
                            },
                            content: function () {
                                player.addMark('wmsj_天魔', 1);
                            },
                            mod: {
                                attackRange: function (player, num) {
                                    if (player.countMark('wmsj_天魔') > 0) return num + player.countMark('wmsj_天魔');
                                },
                                cardUsable: function (card, player, num) {
                                    if (card.name == 'jiu' || card.name == 'sha') {
                                        return num + player.countMark('wmsj_天魔');
                                    }
                                },
                            },
                            group: ['wmsj_天魔_1', 'wmsj_天魔_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    filter: function (event, player) {
                                        return event.player != player;
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    content: function () {
                                        'step 0';
                                        let num = player.countMark('wmsj_天魔') * 2 + 5;
                                        if (trigger.player.hasMark('wmsj_堕化')) num = num + trigger.player.countMark('wmsj_堕化') * 2;
                                        shun = Math.floor(Math.random() * 100);
                                        success = shun <= num;
                                        game.log('当前瞬杀概率：', num, '%，随机数：', shun);
                                        if (success) {
                                            game.log(player, '触发了瞬杀！👿');
                                            var next = trigger.player.die();
                                            next.source = player;
                                            next._triggered = null;
                                        } else {
                                            game.log(player, '未触发瞬杀🤡');
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (trigger.player.isDead()) {
                                            game.log('成功瞬杀', trigger.player, '😈');
                                            if (game.extcheck('十周年UI')) {
                                                decadeUI.effect.kill(player, trigger.player);
                                            }
                                        } else {
                                            game.log(trigger.player, '无法瞬杀🤡');
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: ['phaseDrawBegin2'],
                                    },
                                    filter: function (event, player) {
                                        return !event.numFixed && player.hasMark('wmsj_天魔');
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    content: function () {
                                        player.logSkill('wmsj_厉魇');
                                        trigger.num += player.countMark('wmsj_天魔');
                                    },
                                },
                            },
                        },

                        //厉魇：锁定技。①你受到大于1点的伤害时，将伤害削减为1点并获得削减量的护甲。②你将体力上限削减和体力流失改为回复等量体力，回合结束时你回复一半（向上取整）已损失体力值并摸等量的牌。
                        wmsj_厉魇: {
                            audio: 'ext:完美世界/audio/skill:1',
                            forced: true,
                            charlotte: true,
                            silent: true,
                            lastDo: true,
                            priority: -Infinity,
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.num > 1;
                            },
                            content: function () {
                                player.logSkill('wmsj_厉魇');
                                let num = trigger.num - 1;
                                trigger.num = 1;
                                player.changeHujia(num);
                            },
                            group: ['wmsj_厉魇_1', 'wmsj_厉魇_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['loseHpBefore', 'loseMaxHpBefore'],
                                    },
                                    filter: function (event, player) {
                                        return event.num > 0;
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    content: function () {
                                        player.logSkill('wmsj_厉魇');
                                        trigger.cancel();
                                        player.recover(trigger.num);
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: ['phaseEnd'],
                                    },
                                    filter: function (event, player) {
                                        return player.getDamagedHp() > 0;
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    content: function () {
                                        player.logSkill('wmsj_厉魇');
                                        var num = Math.ceil(player.getDamagedHp() / 2);
                                        player.recover(num);
                                        player.draw(num);
                                    },
                                },
                            },
                        },

                        //堕化：出牌阶段限一次或你每减少两次体力后，你回复1点体力然后可选择一名其他角色获得1个“堕”并受到1点伤害；有“堕”的角色：①受到伤害+X（X为“堕”数量）；②只能被非转化实体牌回复体力；③获得牌后弃置所有非红色牌。
                        wmsj_堕化: {
                            audio: 'ext:完美世界/audio/skill:1',
                            charlotte: true,
                            silent: true,
                            forced: true,
                            init(player) {
                                player.dhjs1 = 0;
                                player.dhjs2 = 0;
                            },
                            marktext: '堕',
                            intro: {
                                name: '堕化',
                                content: function (storage, player, skill) {
                                    return '受到伤害+' + storage + '<br>只能被非转化实体牌回复体力<br>获得牌后弃置所有红色牌<br>被瞬杀概率增加' + storage * 2 + '%';
                                },
                                onunmark: true,
                            },
                            enable: 'phaseUse',
                            trigger: {
                                player: 'changeHp',
                            },
                            filter: function (event, player) {
                                return (event.num < 0 && player.dhjs1 > 1) || (!['changeHp'].includes(event.name) && player.dhjs2);
                            },
                            prompt: '选择堕化一名其他角色',
                            content: function () {
                                'step 0';
                                trigger?.name == 'changeHp' ? (player.dhjs1 = 0) : (player.dhjs2 = 0);
                                ('step 1');
                                player.recover();
                                player.chooseTarget('选择堕化一名其他角色', get.prompt('wmsj_堕化'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].addMark('wmsj_堕化', 1);
                                    result.targets[0].damage();
                                }
                            },
                            ai: {
                                order: 9.9,
                                result: {
                                    player: 999,
                                },
                                threaten: 1.5,
                            },
                            group: ['wmsj_堕化_1', 'wmsj_堕化_2', 'wmsj_堕化_3', 'wmsj_堕化_4', 'wmsj_堕化_5'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['changeHp', 'phaseUseBegin'],
                                    },
                                    forced: true,
                                    priority: 50,
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        if (event.name == 'phaseUse') return true;
                                        return event.num < 0;
                                    },
                                    content: function () {
                                        trigger.name == 'changeHp' ? player.dhjs1++ : player.dhjs2++;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: ['phaseUseAfter'],
                                    },
                                    forced: true,
                                    priority: 15,
                                    silent: true,
                                    charlotte: true,
                                    content: function () {
                                        player.dhjs2 = 0;
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: ['damageBegin4'],
                                    },
                                    forced: true,
                                    lastDo: true,
                                    priority: -Infinity,
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.player.hasMark('wmsj_堕化');
                                    },
                                    content: function () {
                                        trigger.num += trigger.player.countMark('wmsj_堕化');
                                    },
                                },
                                4: {
                                    trigger: {
                                        global: ['recoverBefore'],
                                    },
                                    forced: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        if (event.card && event.card.isCard && event.cards.length) return false;
                                        return event.player.hasMark('wmsj_堕化');
                                    },
                                    content: function () {
                                        trigger.cancel();
                                        if (trigger.player.hp <= 0) trigger.player.dying();
                                    },
                                },
                                5: {
                                    trigger: {
                                        global: ['gainAfter'],
                                    },
                                    forced: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        if (!event.player.getCards('he').length) return false;
                                        return event.player.hasMark('wmsj_堕化');
                                    },
                                    content: function () {
                                        let npc = trigger.player;
                                        cards = npc.getCards('he');
                                        tog = [];
                                        for (var i = 0; i < cards.length; i++) {
                                            if (get.color(cards[i]) != 'red') {
                                                tog.push(cards[i]);
                                            }
                                        }
                                        if (tog.length) {
                                            npc.discard(tog);
                                        }
                                    },
                                },
                            },
                        },

                        //魔王：限定技，当主公死亡前，若你的身份不为主公，则你可以将身份替换为主公，将其身份替换为平民并瞬杀，然后明置全场身份并将所有身份不为反贼的角色的身份替换为反贼。
                        wmsj_魔王: {
                            audio: 'ext:完美世界/audio/skill:1',
                            juexingji: true,
                            limited: true,
                            skillAnimation: true,
                            priority: 50,
                            mode: ['identity'],
                            trigger: {
                                global: 'dieBefore',
                            },
                            filter: function (event, player) {
                                return event.player.identity == 'zhu' && player.identity != 'zhu' && event.player != player;
                            },
                            content: function () {
                                'step 0';
                                trigger.cancel();
                                player.awakenSkill(event.name);
                                player.identity = 'zhu';
                                player.setIdentity(player.identity);
                                player.identityShown = true;
                                player.node.identity.classList.remove('guseesing');
                                ('step 1');
                                trigger.player.identity = 'commoner';
                                trigger.player.setIdentity(trigger.player.identity);
                                trigger.player.identityShown = true;
                                trigger.player.node.identity.classList.remove('guseesing');
                                game.broadcastAll(function (player) {
                                    game.zhu = player;
                                }, player);
                                event.trigger('zhuUpdate');
                                ('step 2');
                                var next = trigger.player.die();
                                next.source = player;
                                next._triggered = null;
                                if (game.extcheck('十周年UI')) {
                                    decadeUI.effect.kill(player, trigger.player);
                                }
                                ('step 3');
                                var list = game.filterPlayer((current) => current != player).sortBySeat();
                                for (var i of list) {
                                    i.setIdentity(i.identity);
                                    i.identityShown = true;
                                    i.node.identity.classList.remove('guseesing');
                                    if (i.identity != 'fan') {
                                        i.identity = 'fan';
                                        i.setIdentity(i.identity);
                                    }
                                }
                            },
                        },

                        //以身为种：锁定技，你登场时获得3枚“道种”标记；你每造成/受到1点伤害后获得1枚“道种”，你的手牌上限+X（X为“道种”数量）。
                        wmsj_以身为种: {
                            forced: true,
                            firstDo: true,
                            charlotte: true,
                            mark: true,
                            marktext: '道种',
                            intro: {
                                name: '道种',
                                content: function (storage, player, skill) {
                                    return '当前道种数：' + storage + '<br>累计获得道种数：' + player.累计;
                                },
                            },
                            init(player) {
                                player.addMark('wmsj_以身为种', 3);
                                player.累计 = 3;
                                player.累计检测 = 60;
                            },
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageSource',
                            },
                            content() {
                                player.addMark('wmsj_以身为种', trigger.num);
                                player.累计 += trigger.num;
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + player.countMark('wmsj_以身为种');
                                },
                            },
                        },

                        //他化自在：①回合开始时，若你的“道种”数不少于7，你可以减1点体力上限并获得技能【他化万古】，然后此效果失效。②准备阶段，你可以弃置5枚“道种”，对一名其他角色造成2点雷电伤害。
                        wmsj_他化自在: {
                            firstDo: true,
                            charlotte: true,
                            silent: true,
                            juexingji: true,
                            skillAnimation: true,
                            derivation: 'wmsj_他化万古',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter: function (event, player) {
                                return !player.hasSkill('wmsj_他化万古') && player.countMark('wmsj_以身为种') >= 7;
                            },
                            async content(event, trigger, player) {
                                let npc = trigger.player;
                                const result = await player
                                    .chooseBool('是否减1点体力上限并获得〖他化万古〗？')
                                    .set('ai', () => true)
                                    .forResult();
                                if (result?.bool) {
                                    player.loseMaxHp();
                                    player.addSkill('wmsj_他化万古');
                                    player.logSkill('wmsj_他化自在');
                                }
                            },
                            group: ['wmsj_他化自在_1'],
                            subSkill: {
                                1: {
                                    firstDo: true,
                                    charlotte: true,
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter: function (event, player) {
                                        return player.countMark('wmsj_以身为种') >= 5;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget('〖他化自在〗：弃置5枚道种对一个目标造成2点伤害', function (card, player, target) {
                                            return player != target;
                                        }).ai = function (target) {
                                            return -get.attitude(player, target);
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.removeMark('wmsj_以身为种', 5);
                                            result.targets[0].damage(2, 'thunder');
                                            player.logSkill('wmsj_他化自在_1');
                                        }
                                    },
                                },
                            },
                        },

                        //他化万古：出牌阶段限一次，你可以弃置所有“道种”，然后指定一名角色弃置手牌中所有的【杀】，若其弃置【杀】数量小于你弃置的“道种”数则受到2点伤害，若其因此进入濒死状态，则你获得其所有牌。
                        wmsj_他化万古: {
                            unique: true,
                            charlotte: true,
                            enable: 'phaseUse',
                            prompt: '选择一个目标发动〖他化万古〗',
                            usable: 1,
                            filter: function (event, player) {
                                return player.hasMark('wmsj_以身为种');
                            },
                            filterTarget: function (card, player, target) {
                                return player != target;
                            },
                            selectTarget: 1,
                            content() {
                                let num = player.countMark('wmsj_以身为种');
                                player.clearMark('wmsj_以身为种');
                                let npc = target;
                                cards = npc.getCards('h');
                                tog = [];
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].name == 'sha') {
                                        tog.push(cards[i]);
                                    }
                                }
                                if (tog.length) {
                                    npc.discard(tog);
                                }
                                if (tog.length < num) npc.damage(2);
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -1,
                                },
                            },
                            group: ['wmsj_他化万古_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['dyingBegin'],
                                    },
                                    forced: true,
                                    firstDo: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        let evt = event.getParent('wmsj_他化万古');
                                        if (!event.player.getCards('he').length) return false;
                                        return evt && evt.player == player;
                                    },
                                    content: function () {
                                        let npc = trigger.player;
                                        player.gain(npc.getCards('he'));
                                    },
                                },
                            },
                        },

                        //独断万古：锁定技。①游戏开始时，你记录5个基本牌或普通锦囊牌牌名，每当一名角色使用或打出记录牌时你摸一张牌。②当你累计获得30枚“道种”后，你获得〖身化大道〗。
                        wmsj_独断万古: {
                            intro: {
                                content: '已记录牌名：$',
                            },
                            locked: false,
                            charlotte: true,
                            derivation: 'wmsj_身化大道',
                            onremove: true,
                            group: ['wmsj_独断万古_1', 'wmsj_独断万古_2', 'wmsj_独断万古_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    filter(event, player) {
                                        return (
                                            player.getHp() > 0 &&
                                            (event.name != 'phase' || game.phaseNumber == 0) &&
                                            get.inpileVCardList((info) => {
                                                if (!['basic', 'trick'].includes(info[0])) {
                                                    return false;
                                                }
                                                return true;
                                            }).length
                                        );
                                    },
                                    async cost(event, trigger, player) {
                                        const num = 5,
                                            vcards = get.inpileVCardList((info) => {
                                                if (!['basic', 'trick'].includes(info[0])) {
                                                    return false;
                                                }
                                                return true;
                                            });
                                        const { bool, links } = await player
                                            .chooseButton([`${get.translation(event.name.slice(0, -5))}：你可以声明并记录至多${get.cnNumber(num)}个牌名`, [vcards, 'vcard']], [1, num])
                                            .set('ai', (button) => {
                                                const player = get.player();
                                                return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                            })
                                            .forResult();
                                        event.result = {
                                            bool: bool,
                                            cost_data: links,
                                        };
                                    },
                                    charlotte: true,
                                    async content(event, trigger, player) {
                                        const names = event.cost_data.map((link) => [{ name: link[2], nature: link[3] }]);
                                        game.log(player, '声明了', '#g' + get.translation(names));
                                        player.markAuto('wmsj_独断万古', names);
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: ['useCard', 'respond'],
                                    },
                                    filter(event, player, name) {
                                        if (
                                            !player
                                                .getStorage('wmsj_独断万古')
                                                .map((i) => i[0].name)
                                                .includes(event.card.name)
                                        ) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    forced: true,
                                    charlotte: true,
                                    async content(event, trigger, player) {
                                        player.draw();
                                        game.log('使用了记录牌：', trigger.card.name);
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: ['wmsj_以身为种After'],
                                    },
                                    filter(event, player, name) {
                                        return !player.化道 && player.累计 >= 30;
                                    },
                                    forced: true,
                                    silent: true,
                                    charlotte: true,
                                    juexingji: true,
                                    skillAnimation: true,
                                    async content(event, trigger, player) {
                                        player.addSkill('wmsj_身化大道');
                                        player.化道 = true;
                                        player.logSkill('wmsj_独断万古_3');
                                    },
                                },
                            },
                        },

                        //身化大道：①你每获得30枚“道种”后，你立即结束当前回合并进行一个额外的回合。②一名角色的回合结束时，若你本回合内杀死过角色，则你可以进行一个额外的回合。
                        wmsj_身化大道: {
                            trigger: {
                                global: ['wmsj_以身为种After'],
                            },
                            filter(event, player, name) {
                                return player.累计 >= player.累计检测;
                            },
                            forced: true,
                            charlotte: true,
                            async content(event, trigger, player) {
                                player.累计检测 = Math.floor(player.累计 / 30) * 30 + 30;
                                for (const phase of lib.phaseName) {
                                    const evt = event.getParent(phase);
                                    if (evt?.name === phase && !evt.finished) {
                                        const name = get.translation(phase);
                                        game.log(player, '令', _status.currentPhase, '结束了' + name);
                                        player.line(_status.currentPhase, 'thunder');
                                        evt.cancel(true, null, true);
                                        break;
                                    }
                                }
                                const evt = event.getParent('phase', true);
                                if (evt) {
                                    evt.num = evt.phaseList.length;
                                    evt.goto(12);
                                }
                                player.insertPhase();
                            },
                            group: ['wmsj_身化大道_1'],
                            subSkill: {
                                1: {
                                    trigger: { global: 'phaseAfter' },
                                    charlotte: true,
                                    prompt: '〖身化大道〗：是否进行一个额外回合',
                                    filter(event, player) {
                                        return player.getStat('kill') > 0;
                                    },
                                    content() {
                                        player.insertPhase();
                                    },
                                },
                            },
                        },

                        //鼠：出牌阶段限一次，你可以弃置一张装备牌，然后从牌堆获得一张牌基本牌和一张锦囊牌。
                        wmsj_鼠: {
                            usable: 1,
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard(card) {
                                return get.type(card) == 'equip';
                            },
                            check(card) {
                                var n = 10 - get.value(card);
                                return n;
                            },
                            content() {
                                var list = [];
                                var card1 = get.cardPile(function (card) {
                                    return get.type(card) == 'basic';
                                });
                                var card2 = get.cardPile(function (card) {
                                    return get.type(card) == 'trick';
                                });
                                if (card1) {
                                    list.push(card1);
                                }
                                if (card2) {
                                    list.push(card2);
                                }
                                if (list) {
                                    player.gain(list, 'draw');
                                }
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player(player, tar) {
                                        return 1;
                                    },
                                },
                            },
                        },

                        //牛：锁定技，你的杀伤害+1。
                        wmsj_牛: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                        },

                        //虎：出牌阶段限一次，你可以弃置任意张颜色相同的牌并获得等量与之颜色不同的牌，若此时你手牌中两种颜色的牌数量相同,你回复一点体力。
                        wmsj_虎: {
                            usable: 1,
                            enable: 'phaseUse',
                            selectCard: [1, Infinity],
                            filterCard(card, player) {
                                if (ui.selected.cards.length) return get.color(card, player) == get.color(ui.selected.cards[0], player);
                                return true;
                            },
                            check(card) {
                                var n = 8 - get.value(card);
                                var color = get.color(card);
                                var player = get.owner(card);
                                var cs = player.getCards('h');
                                if (player.hp < player.maihp) {
                                    var n1 = player.countCards('h', { color: 'red' });
                                    var n2 = player.countCards('h', { color: 'black' });
                                    if (ui.selected.cards) {
                                        var cx = ui.selected.cards;
                                        for (var i = 0; i < cx.length; i++) {
                                            if (get.color(cx[i]) == 'red') {
                                                n2++;
                                            } else if (get.color(cx[i]) == 'black') {
                                                n1++;
                                            }
                                            if (n1 > n2 && color == 'black') {
                                                n -= 6;
                                            }
                                            if (n2 > n1 && color == 'red') {
                                                n -= 6;
                                            }
                                        }
                                    }
                                }
                                return n;
                            },
                            content() {
                                'step 0';
                                var cx = cards;
                                if (cx) {
                                    var color = get.color(cx[0]);
                                    var list = [];
                                    for (var i = 0; i < cx.length; i++) {
                                        var card = get.cardPile(function (card) {
                                            return get.color(card) != color && !list.includes(card);
                                        });
                                        if (card) list.push(card);
                                    }
                                    if (list) {
                                        player.gain(list, 'draw');
                                    }
                                }
                                ('step 1');
                                var cs = player.getCards('h');
                                var n1 = player.countCards('h', { color: 'red' });
                                var n2 = player.countCards('h', { color: 'black' });
                                if (n1 == n2) {
                                    player.recover();
                                }
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player(player, tar) {
                                        return 1;
                                    },
                                },
                            },
                        },

                        //兔：锁定技，你计算与其他角色距离-1，其他角色计算与你距离+1，你每回合使用的第一张牌没有距离限制。
                        wmsj_兔: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                                targetInRange(card, player, target, now) {
                                    if (game.online) {
                                        if (!player.countUsed()) return true;
                                    } else {
                                        var evt = _status.event.getParent('phaseUse');
                                        if (
                                            evt &&
                                            evt.name == 'phaseUse' &&
                                            player.getHistory('useCard', function (evt2) {
                                                return evt2.getParent('phaseUse') == evt;
                                            }).length == 0
                                        )
                                            return true;
                                    }
                                },
                            },
                        },

                        //龙：出牌阶段限一次，你可以弃置一张红色手牌对一名其他角色造成1点火焰伤害，若其在你攻击范围内且你弃置的为♥️️牌，此伤害+1。
                        wmsj_龙: {
                            usable: 1,
                            enable: 'phaseUse',
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            filterTarget(c, p, t) {
                                return p != t;
                            },
                            check(card) {
                                var n = 10 - get.value(card);
                                if (get.color(card) == 'heart') {
                                    n += 3;
                                }
                                return n;
                            },
                            content() {
                                var c = cards[0];
                                var n = 1;
                                if (c.suit == 'heart' && player.inRange(targets[0])) {
                                    n++;
                                }
                                targets[0].damage(n, 'fire');
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, tar) {
                                        return get.damageEffect(tar, player);
                                    },
                                },
                            },
                        },

                        //蛇：锁定技，其他角色使用【杀】或普通锦囊牌指定你为目标时，进行一次判定，若判定结果与此牌颜色不同，此牌对你无效。
                        wmsj_蛇: {
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.player && event.player != player && (event.card.name == 'sha' || get.type(event.card) == 'trick');
                            },
                            content() {
                                'step 0';
                                var p = trigger.player;
                                var c = trigger.card;
                                p.judge(function (card) {
                                    if (get.color(card) != get.color(c)) return -1;
                                    return 1;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 1');
                                if (!result.bool) {
                                    trigger.cancel();
                                }
                            },
                        },

                        //马：锁定技，回合开始时，你将体力回复至体力上限并弃置判定区的牌。
                        wmsj_马: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp < player.maxHp || player.countCards('j') > 0;
                            },
                            content() {
                                player.hp = player.maxHp;
                                player.discard(player.getCards('j'));
                            },
                        },

                        //羊：①准备/结束阶段，你可以翻面，若你翻至背面，你可以观看一名其他角色角色的手牌。②出牌阶段限一次，你可以令一名攻击范围内的其他角色翻面。
                        wmsj_羊: {
                            usable: 1,
                            enable: 'phaseUse',
                            filterTarget(card, p, t) {
                                return p != t && p.inRange(t);
                            },
                            selectTarget: 1,
                            pormpt: '你可以令攻击范围内一名其他角色翻面.',
                            content() {
                                targets[0].turnOver();
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -1,
                                },
                            },
                            group: 'wmsj_羊_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                                    },
                                    check(event, player) {
                                        return [1, -1].randomGet();
                                    },
                                    content() {
                                        'step 0';
                                        player.turnOver();
                                        ('step 1');
                                        if (player.isTurnedOver()) {
                                            player
                                                .chooseTarget('〖羊符咒〗：你可以观看一名其他角色的手牌', function (card, player, tar) {
                                                    return tar != player;
                                                })
                                                .set('ai', function (tar) {
                                                    return get.attitude(player, tar) < 0;
                                                });
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.targets?.length) {
                                            player.viewHandcards(result.targets[0]);
                                        }
                                    },
                                },
                            },
                        },

                        //猴：你可以将一张基本牌当做任意基本牌使用或打出。
                        wmsj_猴: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countCards('hes', { type: 'basic' })) return false;
                                for (var name of lib.inpile) {
                                    if (get.type2(name) != 'basic') continue;
                                    var card = { name: name };
                                    if (event.filterCard(card, player, event)) return true;
                                    if (name == 'sha') {
                                        for (var nature of lib.inpile_nature) {
                                            card.nature = nature;
                                            if (event.filterCard(card, player, event)) return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var name of lib.inpile) {
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                            for (var nature of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: name, nature: nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                            }
                                        } else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    var dialog = ui.create.dialog('猴符咒', [list, 'vcard']);
                                    dialog.direct = true;
                                    return dialog;
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.parent);
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
                                        filterCard(card) {
                                            return get.type(card) == 'basic';
                                        },
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() { },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张基本牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                if (!lib.inpile.includes(name)) return false;
                                var type = get.type2(name);
                                return type == 'basic' && player.countCards('hes') > 0;
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hes') || player.hasSkill('jsrgnianen_blocker')) return false;
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },

                        //鸡：锁定技。①其他角色计算与你的距离+2。②出牌阶段限一次，你可以令一名攻击范围内的其他角色的所有手牌置于其武将牌上称为<浮>直到其回合开始时获得之。
                        wmsj_鸡: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 2;
                                },
                            },
                            usable: 1,
                            enable: 'phaseUse',
                            filterTarget(card, p, t) {
                                return p != t && p.inRange(t);
                            },
                            selectTarget: 1,
                            content() {
                                targets[0].addTempSkill('wmsj_鸡_fu', { player: 'phaseBegin' });
                                targets[0].addToExpansion(targets[0].getCards('h'), targets[0], 'giveAuto').gaintag.add('wmsj_鸡_fu');
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target: -1,
                                },
                            },
                            subSkill: {
                                fu: {
                                    mark: true,
                                    marktext: '浮',
                                    intro: {
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    onremove(player) {
                                        player.gain(player.getExpansions('wmsj_鸡_fu'), 'gainAuto');
                                    },
                                },
                            },
                        },

                        //狗：锁定技，当你的体力上限减少时，防止之，当你进入濒死状态，你将体力回复至1点。
                        wmsj_狗: {
                            trigger: {
                                player: ['dieBefore', 'dyingBegin', 'loseMaxHpBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                var n = trigger.name;
                                if (n == 'die' || n == 'loseMaxHp') {
                                    trigger.cancel();
                                }
                                if (n == 'dying') {
                                    player.recover(1 - player.hp);
                                }
                            },
                        },

                        //猪：出牌阶段限一次，你可以弃置一张手牌对一名攻击范围内的其他角色造成1点雷电伤害。
                        wmsj_猪: {
                            usable: 1,
                            enable: 'phaseUse',
                            filterCard(card) {
                                return true;
                            },
                            filterTarget(c, p, t) {
                                return p != t && p.inRange(t);
                            },
                            selectTarget: 1,
                            check(card) {
                                var n = 10 - get.value(card);
                                return n;
                            },
                            content() {
                                var c = cards[0];
                                var n = 1;
                                targets[0].damage(n, 'thunder');
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, tar) {
                                        return get.damageEffect(tar, player);
                                    },
                                },
                            },
                        },

                        //荒古圣体：锁定技。①你的体力上限始终为全场最高。②每局游戏限一次，准备阶段，若你体力值不大于3，你增加1点体力上限并获得已损失体力值的护甲，然后获得〖圣体异象〗和〖万物母气鼎〗。
                        wmsj_荒古圣体: {
                            forced: true,
                            priority: 60,
                            juexingji: true,
                            skillAnimation: true,
                            derivation: ['wmsj_圣体异象', 'wmsj_万物母气鼎'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter: function (event, player) {
                                return player.hp <= 3;
                            },
                            content: function () {
                                player.gainMaxHp();
                                player.changeHujia(player.getDamagedHp());
                                player.addSkill('wmsj_圣体异象');
                                player.addSkill('wmsj_万物母气鼎');
                            },
                            group: ['wmsj_荒古圣体_1'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    priority: 60,
                                    trigger: {
                                        global: ['loseMaxHpAfter', 'gainMaxHpAfter', 'gameStart'],
                                    },
                                    filter: function (event, player) {
                                        return player.isMaxMaxHp(true, lib.filter.notMe);
                                    },
                                    content: function () {
                                        let num = player.maxHp;
                                        for (const npc of game.players) {
                                            if (npc != player && npc.maxHp > player.maxHp) num = npc.maxHp;
                                        }
                                        player.maxHp = Math.max(4, num);
                                        player.update();
                                    },
                                },
                            },
                        },

                        //泯灭：锁定技，你的攻击范围+X，你使用的伤害牌额外结算X次（X为你已损失体力值，至少为1）。
                        wmsj_泯灭: {
                            forced: true,
                            priority: 20,
                            trigger: {
                                player: 'useCard',
                            },
                            filter: function (event, player) {
                                if (!event.targets || !event.card) return false;
                                if (!get.tag(event.card, 'damage')) return false;
                                if (event.card && event.card.name == 'wuxie') return false;
                                var type = get.type(event.card);
                                if (type != 'basic' && type != 'trick') return false;
                                return true;
                            },
                            content: function () {
                                let num = Math.max(1, player.getDamagedHp());
                                trigger.effectCount += num;
                                game.log(trigger.card, '额外结算', num, '次');
                            },
                            mod: {
                                attackRange: function (player, num) {
                                    let atk = Math.max(1, player.getDamagedHp());
                                    return num + atk;
                                },
                            },
                        },

                        //九秘·皆：回合开始和结束时，你可以视为使用一张普通锦囊牌。
                        wmsj_九秘: {
                            trigger: { player: ['phaseBegin', 'phaseEnd'] },
                            direct: true,
                            priority: 50,
                            content() {
                                'step 0';
                                var list = { basic: [], equip: [], trick: [], delay: [] };
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var info = lib.card[name];
                                    if (info.autoViewAs || name == 'yuansuhuimie') {
                                        continue;
                                    }
                                    if (lib.filter.cardEnabled({ name: name }, player)) {
                                        if (!list[info.type]) {
                                            list[info.type] = [];
                                        }
                                        list[info.type].push([get.translation(lib.card[name].type), '', name]);
                                    }
                                }
                                list.trick.sort(lib.sort.name);
                                var dialog = ui.create.dialog('九秘·皆', [list.trick, 'vcard']);
                                var rand1 = Math.random() < 1 / 3;
                                var rand2 = Math.random() < 0.5;
                                var rand3 = Math.random() < 1 / 3;
                                var rand4 = Math.random() < 1 / 3;
                                player.chooseButton(dialog).ai = function (button) {
                                    var name = button.link[2];
                                    if (player.hp <= 1) {
                                        switch (name) {
                                            case 'zhiliaobo':
                                                return 1;
                                            case 'dunpaigedang':
                                                return 0.8;
                                            case 'nanman':
                                                return 0.5;
                                            default:
                                                return 0;
                                        }
                                    }
                                    if (rand4 && player.countCards('h') <= 1) {
                                        switch (name) {
                                            case 'zengbin':
                                                return 1;
                                            case 'wuzhong':
                                                return 0.8;
                                            default:
                                                return 0;
                                        }
                                    }
                                    if (player.hasSkill('qinglonglingzhu')) {
                                        if (rand2) {
                                            return name == 'chiyuxi' ? 0.8 : 0;
                                        }
                                        return name == 'jingleishan' ? 0.8 : 0;
                                    }
                                    if (rand2) {
                                        return name == 'wanjian' ? 0.8 : 0;
                                    }
                                    return name == 'nanman' ? 0.8 : 0;
                                };
                                ('step 1');
                                if (result.links?.length) {
                                    player.chooseUseTarget(result.links[0][2], true, false);
                                }
                            },
                            ai: {
                                threaten: 3,
                            },
                        },

                        //圣体异象：锁定技。当你使用【杀】或伤害类普通锦囊牌时，你令目标随机弃置X张牌且所有手牌数小于你的角色不能响应此牌。（X为你已损失体力值，至少为1）
                        wmsj_圣体异象: {
                            trigger: { player: 'useCard' },
                            forced: true,
                            priority: 30,
                            filter(event, player) {
                                if (!get.tag(event.card, 'damage')) return false;
                                return event.card.name == 'sha' || get.type(event.card, null, false) == 'trick';
                            },
                            content() {
                                var hs = player.countCards('h');
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && current.countCards('h') < hs;
                                    })
                                );
                                let num = Math.max(1, player.getDamagedHp());
                                for (const npc of trigger.targets) {
                                    if (npc != player) npc.discard(npc.getCards('he').randomGets(num));
                                }
                            },
                            ai: {
                                threaten: 1.4,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return (
                                        player.countCards('h', function (card) {
                                            return !ui.selected.cards.includes(card);
                                        }) > arg.target.countCards('h')
                                    );
                                },
                            },
                        },

                        //万物母气鼎：锁定技，当其他角色的黑色牌因弃置或判定而进入弃牌堆后，你获得之。
                        wmsj_万物母气鼎: {
                            group: ['wmsj_万物母气鼎_discard', 'wmsj_万物母气鼎_judge'],
                            forced: true,
                            unique: true,
                            subSkill: {
                                discard: {
                                    trigger: { global: ['loseAfter', 'loseAsyncAfter'] },
                                    filter(event, player) {
                                        if (event.type != 'discard' || event.getlx === false) {
                                            return false;
                                        }
                                        var cards = event.cards.slice(0);
                                        var evt = event.getl(player);
                                        if (evt && evt.cards) {
                                            cards.removeArray(evt.cards);
                                        }
                                        for (var i = 0; i < cards.length; i++) {
                                            if (cards[i].original != 'j' && get.color(cards[i], event.player) == 'black' && get.position(cards[i], true) == 'd') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    direct: true,
                                    content() {
                                        'step 0';
                                        if (trigger.delay == false) {
                                            game.delay();
                                        }
                                        ('step 1');
                                        var cards = [],
                                            cards2 = trigger.cards.slice(0),
                                            evt = trigger.getl(player);
                                        if (evt && evt.cards) {
                                            cards2.removeArray(evt.cards);
                                        }
                                        for (var i = 0; i < cards2.length; i++) {
                                            if (cards2[i].original != 'j' && get.color(cards2[i], trigger.player) == 'black' && get.position(cards2[i], true) == 'd') {
                                                cards.push(cards2[i]);
                                            }
                                        }
                                        if (cards.length) player.gain(cards, 'gain2', 'log');
                                    },
                                },
                                judge: {
                                    trigger: { global: 'cardsDiscardAfter' },
                                    direct: true,
                                    filter(event, player) {
                                        var evt = event.getParent().relatedEvent;
                                        if (!evt || evt.name != 'judge') {
                                            return;
                                        }
                                        if (evt.player == player) {
                                            return false;
                                        }
                                        if (get.position(event.cards[0], true) != 'd') {
                                            return false;
                                        }
                                        return get.color(event.cards[0]) == 'black';
                                    },
                                    content() {
                                        player.gain(trigger.cards, 'gain2', 'log');
                                    },
                                },
                            },
                        },

                        //天道：锁定技。①你体力和上限不会减少且不能成为牌的目标，你始终跳过你的回合。②你死亡前取消并令一名其他角色失去所有技能。③游戏进行到第10轮开始时，效果①失效然后你死亡。④其他角色的判定生效前，你可以观看牌堆顶的七张牌并选择一张作为判定结果，此结果不可更改。
                        wmsj_天道判定: {
                            charlotte: true,
                            silent: true,
                        },
                        _wmsj_天道判定: {
                            trigger: { global: 'judgeBefore' },
                            direct: true,
                            locked: true,
                            charlotte: true,
                            silent: true,
                            firstDo: true,
                            priority: Infinity,
                            filter: function (event, player) {
                                const name = player.name || player.name1 || player.name2;
                                return name == 'wmsj_天道';
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(7);
                                player.chooseCardButton(true, event.cards, '天道：选择一张牌作为' + get.translation(trigger.player) + '的' + trigger.judgestr + '判定结果').ai = function (button) {
                                    if (get.attitude(player, trigger.player) > 0) {
                                        return 1 + trigger.judge(button.link);
                                    }
                                    if (get.attitude(player, trigger.player) < 0) {
                                        return 1 - trigger.judge(button.link);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                player.logSkill('haotianta', trigger.player);
                                var card = result.links[0];
                                event.cards.remove(card);
                                var judgestr = get.translation(trigger.player) + '的' + trigger.judgestr + '判定';
                                event.videoId = lib.status.videoId++;
                                event.dialog = ui.create.dialog(judgestr);
                                event.dialog.classList.add('center');
                                event.dialog.videoId = event.videoId;

                                game.addVideo('judge1', player, [get.cardInfo(card), judgestr, event.videoId]);
                                for (var i = 0; i < event.cards.length; i++) {
                                    event.cards[i].discard();
                                }
                                var node;
                                if (game.chess) {
                                    node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
                                } else {
                                    node = player.$throwordered(card.copy(), true);
                                }
                                node.classList.add('thrownhighlight');
                                ui.arena.classList.add('thrownhighlight');
                                if (card) {
                                    trigger.cancel();
                                    trigger.result = {
                                        card: card,
                                        judge: trigger.judge(card),
                                        node: node,
                                        number: get.number(card),
                                        suit: get.suit(card),
                                        color: get.color(card),
                                    };
                                    if (trigger.result.judge > 0) {
                                        trigger.result.bool = true;
                                        trigger.player.popup('判定失效');
                                    }
                                    if (trigger.result.judge < 0) {
                                        trigger.result.bool = false;
                                        trigger.player.popup('判定生效');
                                    }
                                    game.log(trigger.player, '的判定结果为', card);
                                    trigger.direct = true;
                                    trigger.position.appendChild(card);
                                    game.delay(2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                ui.arena.classList.remove('thrownhighlight');
                                event.dialog.close();
                                game.addVideo('judge2', null, event.videoId);
                                ui.clear();
                                var card = trigger.result.card;
                                trigger.position.appendChild(card);
                                trigger.result.node.delete();
                                game.delay();
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                            },
                            group: ['_wmsj_天道判定_init', '_wmsj_天道判定_1', '_wmsj_天道判定_2', '_wmsj_天道判定_3'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    unique: true,
                                    silent: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    charlotte: true,
                                    trigger: {
                                        global: ['roundStart'],
                                    },
                                    filter(event, player) {
                                        const name = player.name || player.name1 || player.name2;
                                        return name == 'wmsj_天道' && game.roundNumber == 10;
                                    },
                                    content: function () {
                                        player.classList.remove('out');
                                        player.die()._triggered = null;
                                    },
                                },
                                2: {
                                    forced: true,
                                    unique: true,
                                    silent: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    charlotte: true,
                                    trigger: {
                                        player: ['dieBefore'],
                                    },
                                    filter: function (event, player) {
                                        const name = player.name || player.name1 || player.name2;
                                        return name == 'wmsj_天道';
                                    },
                                    async content(event, trigger, player) {
                                        const CSK = function (player) {
                                            const skill = player.getSkills(null, false, false);
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
                                        };
                                        trigger.cancel();
                                        const result = await player
                                            .chooseTarget('〖天道〗：令一名其他角色失去所有技能', function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', (target) => {
                                                return -get.attitude(player, target);
                                            })
                                            .forResult();
                                        if (result.targets?.length) {
                                            player.line(result.targets);
                                            CSK(result.targets[0]);
                                            player.logSkill('wmsj_天道');
                                        }
                                    },
                                },
                                3: {
                                    forced: true,
                                    unique: true,
                                    silent: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    charlotte: true,
                                    trigger: {
                                        player: ['phaseBegin'],
                                    },
                                    filter: function (event, player) {
                                        const name = player.name || player.name1 || player.name2;
                                        return name == 'wmsj_天道';
                                    },
                                    content: function () {
                                        trigger.cancel();
                                    },
                                },
                                init: {
                                    mark: true,
                                    forced: true,
                                    silent: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    charlotte: true,
                                    trigger: {
                                        global: ['gameStart'],
                                    },
                                    filter: function (event, player) {
                                        const name = player.name || player.name1 || player.name2;
                                        return name == 'wmsj_天道';
                                    },
                                    content: function () {
                                        const name = player.name || player.name1 || player.name2;
                                        if (name == 'wmsj_天道') {
                                            Reflect.defineProperty(player, 'hp', {
                                                get() {
                                                    return 1;
                                                },
                                                set() { },
                                                configurable: false,
                                            });
                                            Reflect.defineProperty(player, 'maxHp', {
                                                get() {
                                                    return 1;
                                                },
                                                set() { },
                                                configurable: false,
                                            });
                                        } else {
                                            let hp = player.hp;
                                            hujia = player.hujia;
                                            maxHp = player.maxHp;
                                            Reflect.defineProperty(player, 'hp', {
                                                get() {
                                                    return hp;
                                                },
                                                set(value) {
                                                    hp = value;
                                                },
                                                configurable: false,
                                            });
                                            Reflect.defineProperty(player, 'maxHp', {
                                                get() {
                                                    return maxHp;
                                                },
                                                set(value) {
                                                    maxHp = value;
                                                },
                                                configurable: false,
                                            });
                                            Reflect.defineProperty(player, 'hujia', {
                                                get() {
                                                    return hujia;
                                                },
                                                set(value) {
                                                    hujia = value;
                                                },
                                                configurable: false,
                                            });
                                        }
                                    },
                                    mod: {
                                        targetEnabled: function (card, player, target) {
                                            const name = target.name || target.name1 || target.name2;
                                            if (player != target && name == 'wmsj_天道') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },

                        //天劫：锁定技。①每轮开始时，你选择任意名其他角色获得1个“劫”。②有“劫”的角色体力不大于0时立即死亡。③有“劫”的角色每触发下列一项时，立即从【闪电】，【洪水】，【火山】，【兵粮寸断】,【乐不思蜀】中随机抽取一张判定：摸牌阶段外获得牌；出牌阶段外失去牌；回复体力后。
                        wmsj_天劫: {
                            charlotte: true,
                            silent: true,
                        },
                        _wmsj_天劫: {
                            trigger: { global: 'roundStart' },
                            direct: true,
                            locked: true,
                            charlotte: true,
                            silent: true,
                            firstDo: true,
                            priority: 999,
                            marktext: '劫',
                            intro: {
                                name: '天劫',
                                content: '当前拥有#个劫',
                            },
                            filter: function (event, player) {
                                const name = player.name || player.name1 || player.name2;
                                return name == 'wmsj_天道';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget([1, Infinity], '天劫：选择任意名其他角色获得“劫”', lib.filter.notMe).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    var targets = result.targets.sortBySeat();
                                    event.targets = targets;
                                    event.num = 0;
                                } else event.finish();
                                ('step 2');
                                var target = targets[num];
                                player.line(result.targets);
                                target.addMark('_wmsj_天劫', 1);
                                event.num++;
                                if (event.num < targets.length) event.redo();
                            },
                            group: ['_wmsj_天劫_1', '_wmsj_天劫_2'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    unique: true,
                                    silent: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    charlotte: true,
                                    trigger: {
                                        player: ['recoverAfter', 'gainAfter', 'loseAfter'],
                                    },
                                    filter(event, player) {
                                        const evt = event.getParent('phaseDraw');
                                        const evt2 = event.getParent('phaseUse');
                                        if (event.name == 'gain' && evt?.name == 'phaseDraw') return false;
                                        if (event.name == 'lose' && evt2?.name == 'phaseUse') return false;
                                        if (!player.hasMark('_wmsj_天劫')) return false;
                                        return true;
                                    },
                                    content: function () {
                                        let jie = ['shandian', 'bingliang', 'lebu', 'hongshui', 'huoshan'].randomGet();
                                        player.executeDelayCardEffect(jie);
                                    },
                                },
                                2: {
                                    forced: true,
                                    unique: true,
                                    silent: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    charlotte: true,
                                    trigger: {
                                        player: ['changeHp', 'dyingBefore'],
                                    },
                                    filter(event, player) {
                                        if (player.hp > 0) return false;
                                        return player.hasMark('_wmsj_天劫');
                                    },
                                    content: function () {
                                        player.die()._triggered = null;
                                    },
                                },
                            },
                        },

                        //紫霄：锁定技，每轮结束时，所以其他角色立即进行X次【闪电】判定（X为其拥有“劫”数量），〖天劫〗和〖紫霄〗的判定伤害不可减免。
                        wmsj_紫霄: {
                            charlotte: true,
                            silent: true,
                        },
                        _wmsj_紫霄: {
                            forced: true,
                            unique: true,
                            silent: true,
                            firstDo: true,
                            priority: Infinity,
                            charlotte: true,
                            trigger: {
                                global: ['roundEnd'],
                            },
                            filter(event, player) {
                                return player.hasMark('_wmsj_天劫');
                            },
                            content: function () {
                                let num = player.countMark('_wmsj_天劫');
                                while (num--) {
                                    player.executeDelayCardEffect('shandian');
                                }
                            },
                            group: ['_wmsj_紫霄_1'],
                            subSkill: {
                                1: {
                                    unique: true,
                                    charlotte: true,
                                    silent: true,
                                    forced: true,
                                    firstDo: true,
                                    priority: Infinity,
                                    trigger: {
                                        player: ['damageBefore'],
                                    },
                                    filter(event, player) {
                                        let evt = event.getParent('_wmsj_紫霄');
                                        let evt2 = event.getParent('_wmsj_天劫_1');
                                        return evt?.player == player || evt2?.player == player;
                                    },
                                    content: function () {
                                        Reflect.defineProperty(trigger, 'finished', {
                                            get() {
                                                return trigger.step > 6;
                                            },
                                            set() { },
                                        });
                                        let damage = trigger.num;
                                        Reflect.defineProperty(trigger, 'num', {
                                            get() {
                                                return damage;
                                            },
                                            set(value) {
                                                if (value > damage) {
                                                    damage = value;
                                                }
                                            },
                                            configurable: false,
                                        });
                                        player.hujia = 0;
                                        player.update();
                                    },
                                },
                            },
                        },

                        //吞天魔功：锁定技。①当你成为其他角色牌的目标后，进行一次判定，若为黑色则你获得判定牌并令此牌对你无效。②每当一名角色使用牌时，你获得1个“道果”；当“道果”数量为5的倍数时，你增加1点体力上限并回复1点体力；你的手牌上限+X（X为你“道果”数的两倍）。
                        wmsj_吞天魔功: {
                            trigger: { target: 'useCardToTargeted' },
                            forced: true,
                            locked: true,
                            unique: true,
                            priority: 11,
                            marktext: '道果',
                            intro: {
                                name: '道果',
                                content: '当前拥有#个道果',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'black' ? 1 : 0;
                                });
                                ('step 1');
                                if (result.color == 'black') {
                                    trigger.targets.remove(player);
                                    player.gain(result.card);
                                }
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + 2 * player.countMark('wmsj_吞天魔功');
                                },
                            },
                            group: ['wmsj_吞天魔功_1'],
                            subSkill: {
                                1: {
                                    trigger: { global: 'useCard' },
                                    forced: true,
                                    locked: true,
                                    unique: true,
                                    priority: 15,
                                    content() {
                                        'step 0';
                                        player.addMark('wmsj_吞天魔功', 1);
                                        ('step 1');
                                        if (player.countMark('wmsj_吞天魔功') % 5 == 0) {
                                            player.gainMaxHp();
                                            player.recover();
                                        }
                                    },
                                },
                            },
                        },

                        //不灭天功：觉醒技，准备阶段，若你的“道果”数量达到20个，你减1点体力上限并获得〖一念花开〗和〖斩尽仙道〗，然后本局游戏你的造成的伤害+1。
                        wmsj_不灭天功: {
                            skillAnimation: true,
                            juexingji: true,
                            derivation: ['wmsj_一念花开', 'wmsj_斩尽仙道'],
                            trigger: { player: 'phaseZhunbeiBegin' },
                            filter(event, player) {
                                return player.countMark('wmsj_吞天魔功') >= 10;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                player.awakenSkill(event.name);
                                await player.loseMaxHp();
                                await player.addSkills(['wmsj_一念花开', 'wmsj_斩尽仙道']);
                                player.addSkill('wmsj_不灭天功2');
                            },
                        },
                        wmsj_不灭天功2: {
                            trigger: { source: 'damageBegin1' },
                            forced: true,
                            locked: true,
                            unique: true,
                            priority: 15,
                            mark: true,
                            marktext: '不灭',
                            intro: {
                                name: '不灭天功',
                                markcount: () => null,
                                content: '造成伤害+1',
                            },
                            content() {
                                trigger.num++;
                            },
                        },

                        //一念花开：限定技，出牌阶段，你可以弃置5个“道果”并令其他角色依次选择一项：⒈随机弃置五张牌（不足则全弃）。⒉你对其造成2点无视防具的雷电伤害。
                        wmsj_一念花开: {
                            enable: 'phaseUse',
                            limited: true,
                            skillAnimation: true,
                            filter(event, player) {
                                return player.countMark('wmsj_吞天魔功') >= 5;
                            },
                            filterTarget: function (event, player, target) {
                                return player != target;
                            },
                            selectTarget: [1, Infinity],
                            async content(event, trigger, player) {
                                player.awakenSkill(event.name);
                                player.removeMark('wmsj_吞天魔功', 5);
                                const { target } = event;
                                player.line(target, 'thunder');
                                const str1 = '随机弃置五张牌';
                                const str2 = '受到2点无视防具的雷电伤害';
                                const choiceList = [str1, str2];
                                const choices = ['选项一', '选项二'];
                                let choice = target.hp < 5 ? '选项一' : '选项二';
                                if (target.countCards('he') < 5) {
                                    choices.remove('选项一');
                                    choice = '选项二';
                                    choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                                }
                                const { control } = await target
                                    .chooseControl(function () {
                                        return _status.event.choice;
                                    })
                                    .set('controls', choices)
                                    .set('choiceList', choiceList)
                                    .set('choice', choice)
                                    .set('prompt', '〖一念花开〗：选择其中一项')
                                    .forResult();
                                if (control == '选项一') {
                                    await target.discard(target.getCards('he').randomGets(5));
                                } else {
                                    player.addSkill('unequip');
                                    await target.damage(2, 'thunder');
                                    player.removeSkill('unequip');
                                }
                            },
                            ai: {
                                order: 9.9,
                                result: {
                                    target: -1,
                                },
                                threaten: 1.5,
                            },
                        },

                        //斩尽仙道：锁定技。①其他角色出牌阶段开始时，其可以选择交给你一张牌并摸一张牌，然后你获得1个“道果”。②你使用的【杀】无次数限制且你使用单目标伤害牌时，可以额外指定任意数量的其他目标。
                        wmsj_斩尽仙道: {
                            trigger: { global: 'phaseUseBegin' },
                            forced: true,
                            locked: true,
                            unique: true,
                            silent: true,
                            priority: 11,
                            filter(event, player) {
                                return event.player != player && event.player.countCards('he');
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseCard('he', '【斩尽仙道】：是否交给' + get.translation(player) + '一张牌并摸一张牌').set('ai', function (card) {
                                    const attitude = get.attitude(player, trigger.player);
                                    if (attitude <= 0) return 0;
                                    else return 8 - get.value(card);
                                });
                                ('step 1');
                                var target = trigger.player;
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    player.gain(card, target, 'giveAuto');
                                    target.draw();
                                    player.addMark('wmsj_吞天魔功', 1);
                                }
                            },
                            mod: {
                                cardUsable: function (card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            group: ['wmsj_斩尽仙道_use'],
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: ['useCard2', 'useCardToPlayer'],
                                    },
                                    direct: true,
                                    filter: function (event, player) {
                                        var info = event.card;
                                        if (!info || info.notarget || (info.selectTarget && info.selectTarget != 1) || !get.tag(info, 'damage')) {
                                            return false;
                                        }
                                        if (event.card.斩仙) return false;
                                        return game.hasPlayer(function (current) {
                                            return !event.targets.contains(current) && player != current;
                                        });
                                    },
                                    content: function () {
                                        'step 0';
                                        trigger.card.斩仙 = true;
                                        var num = game.countPlayer(function (current) {
                                            return !trigger.targets.contains(current) && player != current;
                                        });
                                        player
                                            .chooseTarget(get.prompt('wmsj_斩尽仙道'), '是否为' + get.translation(trigger.card) + '增加任意数量目标？', [1, Infinity], function (card, player, target) {
                                                var evt = _status.event.getTrigger();
                                                return !evt.targets.contains(target) && player != target;
                                            })
                                            .set('ai', function (target) {
                                                var evt = _status.event.getTrigger(),
                                                    eff = get.effect(target, evt.card, evt.player, evt.player);
                                                return eff;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            if (player != game.me && !player.isOnline()) game.delayx();
                                            event.targets = result.targets;
                                        } else event.finish();
                                        ('step 2');
                                        player.logSkill('wmsj_斩尽仙道', targets);
                                        trigger.targets.addArray(targets);
                                    },
                                },
                            },
                        },

                        //十世沉淀：锁定技。①游戏开始时，你获得10个“冠王”；你的手牌上限+X（X为你的“冠王”数量）；你造成或受到伤害后获得等量“冠王”。②出牌阶段开始时，你可以弃置1个“冠王”并选择一名其他角色视为对其使用一张不可响应且伤害基数+1的【杀】。
                        wmsj_十世沉淀: {
                            unique: true,
                            forced: true,
                            silent: true,
                            marktext: '冠王',
                            intro: {
                                name: '冠王',
                                content: function (storage, player, skill) {
                                    return '当前冠王数：' + storage + '<br>累计冠王数：' + player.storage.冠王;
                                },
                            },
                            trigger: { player: 'phaseUseBegin' },
                            filter(event, player) {
                                return player.hasMark('wmsj_十世沉淀');
                            },
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget(lib.filter.notMe)
                                    .set('prompt', '十世沉淀')
                                    .set('prompt2', '是否使用一张不可闪避且伤害+1的【杀】')
                                    .set('ai', (target) => {
                                        return -get.attitude(player, target);
                                    })
                                    .forResult();
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    player.logSkill('wmsj_十世沉淀');
                                    player.removeMark('wmsj_十世沉淀', 1);
                                    const target = result.targets[0];
                                    var next = player.useCard({ name: 'sha', isCard: true }, target, false);
                                    next.directHit = game.players;
                                    next.baseDamage = 2;
                                    await next;
                                }
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + player.countMark('wmsj_十世沉淀');
                                },
                            },
                            group: ['wmsj_十世沉淀_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['phaseBefore'],
                                        player: ['enterGame', 'damageAfter'],
                                        source: ['damageSource'],
                                    },
                                    forced: true,
                                    priority: 17,
                                    filter(event, player) {
                                        if (event.name == 'damage') return true;
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        var num = trigger.name == 'damage' ? trigger.num : 10;
                                        player.addMark('wmsj_十世沉淀', num);
                                        player.storage.冠王 ? (player.storage.冠王 += num) : (player.storage.冠王 = num);
                                    },
                                },
                            },
                        },

                        //天子之法：出牌阶段限三次，你弃置2个“冠王”并选择两项：{1.〖龙拳〗对一名其他角色造成1点伤害；2.〖宝术〗移动场上的一张牌；3.〖仙气〗令一名角色摸两张牌；4.〖御甲〗令一名角色回复1点体力；5.〖镇封〗你获得一名其他角色的一张牌，其无法使用或打出与此牌同花色的手牌直到其回合结束}。
                        wmsj_天子之法: {
                            enable: 'phaseUse',
                            usable: 3,
                            prompt: '是否发动〖天子之法〗',
                            filter(event, player) {
                                return player.countMark('wmsj_十世沉淀') >= 2;
                            },
                            hiddenCard(player, name) {
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    const dialog = ui.create.dialog('天子之法：请选择两项：', [
                                        [
                                            [1, '〖龙拳〗：对一名其他角色造成1点伤害'],
                                            [2, '〖宝术〗：移动场上的一张牌'],
                                            [3, '〖仙气〗：令一名角色摸两张牌'],
                                            [4, '〖御甲〗：令一名角色获得1点护甲'],
                                            [5, '〖镇封〗：观看并获得一名其他角色的一张牌，其无法使用或打出与此牌同花色的手牌'],
                                        ],

                                        'textbutton',
                                    ]);
                                    return dialog;
                                },
                                select: 2,
                                filter(button, player) {
                                    if (button.link == 2) {
                                        return player.canMoveCard();
                                    }
                                    if (button.link == 5) {
                                        return game.hasPlayer((c) => c != player && c.countCards('he') > 0);
                                    }
                                    return true;
                                },
                                check(button) {
                                    return Math.random();
                                },
                                backup(links) {
                                    return {
                                        pos: links,
                                        async content(event, trigger, player) {
                                            const pos = lib.skill.wmsj_天子之法_backup.pos;
                                            const choices = pos.sort((a, b) => a - b);
                                            player.removeMark('wmsj_十世沉淀', 2);
                                            for (const num of choices) {
                                                switch (num) {
                                                    case 1:
                                                        var result1 = await player
                                                            .chooseTarget(lib.filter.notMe)
                                                            .set('prompt', '龙拳')
                                                            .set('prompt2', '对一名角色造成1点伤害')
                                                            .set('ai', (target) => {
                                                                return -get.attitude(player, target);
                                                            })
                                                            .forResult();
                                                        if (result1.bool) {
                                                            player.line(result1.targets);
                                                            player.logSkill('wmsj_天子之法_龙拳', result1.targets[0]);
                                                            await result1.targets[0].damage();
                                                        }
                                                        break;
                                                    case 2:
                                                        player.logSkill('wmsj_天子之法_宝术');
                                                        await player.moveCard();
                                                        break;
                                                    case 3:
                                                        var result3 = await player
                                                            .chooseTarget()
                                                            .set('prompt', '仙气')
                                                            .set('prompt2', '令一名角色摸两张牌')
                                                            .set('ai', (target) => {
                                                                return get.attitude(player, target);
                                                            })
                                                            .forResult();
                                                        if (result3.bool) {
                                                            player.line(result3.targets);
                                                            player.logSkill('wmsj_天子之法_仙气', result3.targets[0]);
                                                            await result3.targets[0].draw(2);
                                                        }
                                                        break;
                                                    case 4:
                                                        var result4 = await player
                                                            .chooseTarget()
                                                            .set('prompt', '御甲')
                                                            .set('prompt2', '令一名角色获得1点护甲')
                                                            .set('ai', (target) => {
                                                                return get.attitude(player, target);
                                                            })
                                                            .forResult();
                                                        if (result4.bool) {
                                                            player.line(result4.targets);
                                                            player.logSkill('wmsj_天子之法_御甲', result4.targets[0]);
                                                            await result4.targets[0].changeHujia();
                                                        }
                                                        break;
                                                    case 5:
                                                        var result5 = await player
                                                            .chooseTarget(lib.filter.notMe)
                                                            .set('prompt', '镇封')
                                                            .set('prompt2', '观看并获得一名角色一张牌')
                                                            .set('ai', (target) => {
                                                                return -get.attitude(player, target);
                                                            })
                                                            .forResult();
                                                        if (result5.bool) {
                                                            player.line(result5.targets);
                                                            var npc = result5.targets[0];
                                                            player.logSkill('wmsj_天子之法_镇封', npc);
                                                            var result6 = await player.gainPlayerCard(npc, 'hej', true, 'visible', 'visibleMove').forResult();
                                                            if (result6.bool) {
                                                                var card = result6.cards[0];
                                                                var suit = npc.getStorage('wmsj_镇封封印') || [];
                                                                suit.add(get.suit(card));
                                                                npc.addTempSkill('wmsj_镇封封印', { player: 'phaseAfter' });
                                                                npc.markAuto('wmsj_镇封封印', suit);
                                                            }
                                                        }
                                                        break;
                                                }
                                            }
                                        },
                                    };
                                },
                                prompt(links) {
                                    var str = '是否发动';
                                    for (const link of links) {
                                        switch (link) {
                                            case 1:
                                                str += '〖龙拳〗';
                                                break;
                                            case 2:
                                                str += '〖宝术〗';
                                                break;
                                            case 3:
                                                str += '〖仙气〗';
                                                break;
                                            case 4:
                                                str += '〖御甲〗';
                                                break;
                                            case 5:
                                                str += '〖镇封〗';
                                                break;
                                        }
                                    }
                                    return str;
                                },
                            },
                            ai: {
                                order: 30,
                                result: {
                                    player: 9,
                                },
                            },
                            subSkill: {
                                backup: {},
                                龙拳: { charlotte: true },
                                宝术: { charlotte: true },
                                仙气: { charlotte: true },
                                御甲: { charlotte: true },
                                镇封: { charlotte: true },
                            },
                        },
                        wmsj_镇封封印: {
                            onremove: function (player, skill) {
                                player.storage.wmsj_镇封封印 = [];
                            },
                            charlotte: true,
                            mark: true,
                            marktext: '镇封',
                            intro: {
                                name: '镇封',
                                markcount: () => null,
                                content: '不能使用或打出$手牌',
                            },
                            mod: {
                                cardEnabled2: function (card, player) {
                                    let storage = player.getStorage('wmsj_镇封封印');
                                    if (storage.includes(get.suit(card)) && get.position(card) == 'h') return false;
                                },
                                cardEnabled: function (card, player) {
                                    let storage = player.getStorage('wmsj_镇封封印');
                                    if (storage.includes(get.suit(card)) && get.position(card) == 'h') return false;
                                },
                                cardRespondable: function (card, player) {
                                    let storage = player.getStorage('wmsj_镇封封印');
                                    if (storage.includes(get.suit(card)) && get.position(card) == 'h') return false;
                                },
                                cardSavable: function (card, player) {
                                    let storage = player.getStorage('wmsj_镇封封印');
                                    if (storage.includes(get.suit(card)) && get.position(card) == 'h') return false;
                                },
                            },
                        },

                        //世界树·护：锁定技，你不能成为其他角色延时锦囊牌的目标；你成为伤害牌的目标时，你可以弃置1个“冠王”使此牌对你无效；结束阶段若你未受伤，则你获得1个“冠王”。
                        wmsj_世界树: {
                            unique: true,
                            trigger: { target: 'useCardToTarget' },
                            prompt: '世界树·护',
                            prompt2: '是否弃置1个“冠王”令此牌对你无效',
                            filter(event, player) {
                                return get.tag(event.card, 'damage') && player.hasMark('wmsj_十世沉淀');
                            },
                            async content(event, trigger, player) {
                                player.removeMark('wmsj_十世沉淀', 1);
                                trigger.getParent().excluded.add(player);
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && player != target) {
                                        return false;
                                    }
                                },
                            },
                            group: ['wmsj_世界树_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseJieshuBegin'],
                                    },
                                    forced: true,
                                    priority: 17,
                                    filter(event, player) {
                                        return !player.isDamaged();
                                    },
                                    content() {
                                        player.addMark('wmsj_十世沉淀', 1);
                                        player.storage.冠王 ? (player.storage.冠王 += 1) : (player.storage.冠王 = 1);
                                    },
                                },
                            },
                        },

                        //冠绝当世：觉醒技，当你累计获得了20个“冠王”后，则你减1点体力上限并获得〖无敌术〗和〖十世无敌〗。
                        wmsj_冠绝当世: {
                            skillAnimation: true,
                            animationColor: 'wood',
                            juexingji: true,
                            derivation: ['wmsj_无敌术', 'wmsj_十世无敌'],
                            trigger: {
                                player: ['wmsj_十世沉淀_1After', 'wmsj_世界树_1After'],
                            },
                            filter(event, player) {
                                return player.storage.冠王 >= 20;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                player.awakenSkill(event.name);
                                await player.loseMaxHp();
                                await player.addSkills(['wmsj_无敌术', 'wmsj_十世无敌']);
                            },
                        },

                        //无敌术：限定技，出牌阶段，你弃置10个“冠王”并选择至多三名其他角色，其随机执行一项：1.受到3点无来源雷电伤害；2.弃置所有牌。
                        wmsj_无敌术: {
                            enable: 'phaseUse',
                            prompt: '无敌术',
                            prompt: '选择至多三个目标发动〖无敌术〗',
                            limited: true,
                            skillAnimation: true,
                            multitarget: true,
                            multiline: true,
                            filter: function (event, player) {
                                return player.countMark('wmsj_十世沉淀') >= 10;
                            },
                            filterTarget: function (card, player, target) {
                                return player != target;
                            },
                            selectTarget: [1, 3],
                            async content(event, trigger, player) {
                                player.awakenSkill(event.name);
                                player.removeMark('wmsj_十世沉淀', 10);
                                const targets = event.targets;
                                for (const npc of targets) {
                                    var bool = Math.random() < 0.5;
                                    if (bool) {
                                        await npc.damage(3, 'thunder', 'nosource');
                                    } else {
                                        var cards = npc.getCards('he');
                                        await npc.discard(cards);
                                    }
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -1,
                                },
                            },
                        },

                        //十世无敌：持恒技，你使用的牌无次数限制，你对其他角色造成的伤害+1，你使用锦囊牌时摸一张牌。
                        wmsj_十世无敌: {
                            forced: true,
                            priority: 35,
                            persevereSkill: true,
                            trigger: {
                                player: ['useCard'],
                                source: ['damageBegin1'],
                            },
                            filter(event, player) {
                                if (event.name == 'damage' && event.player != player) return true;
                                return get.type2(event.card) == 'trick';
                            },
                            async content(event, trigger, player) {
                                if (trigger.name == 'damage') {
                                    trigger.num++;
                                } else {
                                    await player.draw(1);
                                }
                            },
                            mod: {
                                cardUsableTarget: () => true,
                            },
                        },

                        //黑暗动乱：①游戏开始时，你获得9个“黑暗之源”；准备阶段，你获得存活角色数的“黑暗之源”；你每受到1点伤害后，获得2个“黑暗之源”。②出牌阶段开始时，你可以弃置至多5个“黑暗之源”并选择一项：1.摸2X张牌牌；2.令一名其他角色随机弃置X张手牌，不足则流失X点体力（X为弃置“黑暗之源”数量）。
                        wmsj_黑暗动乱: {
                            unique: true,
                            marktext: '源',
                            intro: {
                                name: '黑暗之源',
                                content: function (storage, player, skill) {
                                    return '当前黑暗之源数：' + storage + '<br>累计黑暗之源数：' + player.storage.黑暗之源;
                                },
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            async cost(event, trigger, player) {
                                const { bool: bool1, numbers } = await player
                                    .chooseNumbers(get.prompt(event.skill), [
                                        {
                                            prompt: '弃置至多5个黑暗之源',
                                            min: 1,
                                            max: Math.min(5, player.countMark('wmsj_黑暗动乱')),
                                        },
                                    ])
                                    .set('processAI', () => {
                                        const player = get.player();
                                        let num = Math.floor(Math.random() * 5) + 1;
                                        return [num];
                                    })
                                    .forResult();
                                if (bool1) {
                                    var str1 = '摸' + get.cnNumber(2 * numbers) + '张牌';
                                    var str2 = '令一名其他角色随机弃置' + get.cnNumber(numbers) + '张牌，不足则流失' + get.cnNumber(numbers) + '点体力';
                                    const { bool2, links, targets } = await player
                                        .chooseButtonTarget({
                                            createDialog: [
                                                '黑暗动乱：你可选择一项',
                                                [
                                                    [
                                                        ['draw', str1],
                                                        ['discard', str2],
                                                    ],

                                                    'textbutton',
                                                ],
                                            ],

                                            filterTarget(card, player, target) {
                                                return target != player;
                                            },
                                            selectTarget() {
                                                if (ui.selected.buttons.length) {
                                                    const link = ui.selected.buttons[0].link;
                                                    if (link == 'discard') {
                                                        return 1;
                                                    }
                                                    return 0;
                                                }
                                                return 0;
                                            },
                                            filterOk() {
                                                if (ui.selected.buttons.length) {
                                                    const link = ui.selected.buttons[0].link;
                                                    if (link == 'discard') {
                                                        return ui.selected.targets.length == 1;
                                                    }
                                                    return true;
                                                }
                                                return false;
                                            },
                                            ai1(button) {
                                                const player = get.player();
                                                switch (button.link) {
                                                    case 'draw':
                                                        return 2 + Math.random();
                                                    case 'discard':
                                                        return 2.5 + Math.random();
                                                }
                                            },
                                            ai2(target) {
                                                if (ui.selected.buttons[0].link != 'discard') {
                                                    return 1;
                                                }
                                                return get.effect(target, { name: 'guohe_copy' }, get.player(), get.player());
                                            },
                                        })
                                        .forResult();
                                    event.result = {
                                        bool: bool1 && links,
                                        cost_data: {
                                            numbers: numbers,
                                            targets: targets || [],
                                            links: links,
                                        },
                                    };
                                }
                            },
                            async content(event, trigger, player) {
                                const link = event.cost_data.links[0];
                                const targets = event.cost_data.targets || [];
                                const numbers = event.cost_data.numbers;
                                const numx = player.countMark('wmsj_黑暗动乱') - numbers;
                                player.setMark('wmsj_黑暗动乱', numx);
                                if (link == 'draw') {
                                    var num = 2 * numbers;
                                    await player.draw(num);
                                }
                                if (link == 'discard' && targets.length) {
                                    player.line(targets);
                                    const npc = targets[0];
                                    if (npc.countCards('hs') >= numbers) {
                                        await npc.discard(npc.getCards('hs').randomGets(numbers));
                                    } else {
                                        await npc.loseHp(numbers);
                                    }
                                }
                            },
                            group: ['wmsj_黑暗动乱_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['phaseBefore'],
                                        player: ['enterGame', 'phaseZhunbeiBegin', 'damageAfter'],
                                    },
                                    forced: true,
                                    priority: 23,
                                    filter(event, player, name) {
                                        if (['phaseZhunbeiBegin', 'damageAfter'].includes(name)) return true;
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        var num = 0;
                                        switch (event.triggername) {
                                            case 'damageAfter':
                                                num = 2;
                                                break;
                                            case 'phaseZhunbeiBegin':
                                                num = game.players.length;
                                                break;
                                            default:
                                                num = 9;
                                                break;
                                        }
                                        player.addMark('wmsj_黑暗动乱', num);
                                        player.storage.黑暗之源 ? (player.storage.黑暗之源 += num) : (player.storage.黑暗之源 = num);
                                    },
                                },
                            },
                        },

                        //帝者俯视：锁定技。①其他角色准备阶段你可以观看并获得其一张牌；你的手牌上限+X（X为你“黑暗之源”数量）；你不能被翻面。②你的【杀】无次数限制且使用时可以弃置1个“黑暗之源”使此【杀】不可响应。
                        wmsj_帝者俯视: {
                            trigger: {
                                global: ['phaseZhunbeiBegin'],
                            },
                            forced: true,
                            silent: true,
                            priority: 23,
                            filter(event, player, name) {
                                return event.player != player && event.player.countCards('hej') > 0;
                            },
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget(lib.filter.notMe)
                                    .set('prompt', '帝者俯视')
                                    .set('prompt2', '是否观看并获得一名角色一张牌')
                                    .set('ai', (target) => {
                                        return get.effect(target, { name: 'shunshou_copy' }, get.player(), get.player());
                                    })
                                    .forResult();
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    var npc = result.targets[0];
                                    player.logSkill('wmsj_帝者俯视', npc);
                                    await player.gainPlayerCard(npc, 'hej', 'visible', 'visibleMove');
                                }
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + player.countMark('wmsj_黑暗动乱');
                                },
                                cardUsable: function (card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            group: ['wmsj_帝者俯视_1', 'wmsj_帝者俯视_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['useCard'],
                                    },
                                    forced: true,
                                    priority: 23,
                                    silent: true,
                                    filter(event, player, name) {
                                        return event.card.name == 'sha' && player.hasMark('wmsj_黑暗动乱');
                                    },
                                    async content(event, trigger, player) {
                                        const result = await player
                                            .chooseBool()
                                            .set('prompt', '帝者俯视')
                                            .set('prompt2', '是否弃置1个黑暗之源，使此【杀】不可响应')
                                            .set('ai', () => true)
                                            .forResult();
                                        if (result.bool) {
                                            player.logSkill('wmsj_帝者俯视');
                                            player.removeMark('wmsj_黑暗动乱', 1);
                                            trigger.directHit.addArray(game.players);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    priority: 20,
                                    firstDo: true,
                                    forced: true,
                                    filter: function (event, player) {
                                        return player.isTurnedOver();
                                    },
                                    content: function () {
                                        trigger.cancel();
                                        game.log(player, '取消了翻面');
                                    },
                                },
                            },
                        },

                        //不灭元神：锁定技，你进入濒死时，回复2点体力并弃置判定区的所有牌，然后获得3个“黑暗之源”。
                        wmsj_不灭元神: {
                            forced: true,
                            priority: 35,
                            trigger: {
                                player: ['dying'],
                            },
                            async content(event, trigger, player) {
                                await player.recover(2);
                                await player.discard(player.getCards('j'));
                                player.addMark('黑暗动乱', 3);
                            },
                        },

                        //化道寂灭：觉醒技，你累计获得“黑暗之源”数量达到20个后，你扣减1点体力上限并获得〖万古独一〗。
                        wmsj_化道寂灭: {
                            skillAnimation: true,
                            animationColor: 'thunder',
                            juexingji: true,
                            derivation: ['wmsj_万古独一'],
                            trigger: {
                                player: ['wmsj_黑暗动乱_1After', 'wmsj_不灭元神After'],
                            },
                            filter(event, player) {
                                return player.storage.黑暗之源 >= 20;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                player.awakenSkill(event.name);
                                await player.loseMaxHp();
                                await player.addSkills(['wmsj_万古独一']);
                            },
                        },

                        //万古独一：限定技，出牌阶段，你可以弃置20个“黑暗之源”并失去一半体力（向上取整），然后令所有其他角色依次随机执行一项：1.弃置所有的牌并失去2点体力；2.受到4点无来源的雷电伤害。
                        wmsj_万古独一: {
                            enable: 'phaseUse',
                            prompt: '万古独一',
                            prompt: '是否弃置20个黑暗之源并失去一半体力发动〖万古独一〗',
                            limited: true,
                            skillAnimation: true,
                            filter: function (event, player) {
                                return player.countMark('wmsj_黑暗动乱') >= 20;
                            },
                            async content(event, trigger, player) {
                                player.awakenSkill(event.name);
                                player.removeMark('wmsj_黑暗动乱', 20);
                                await player.loseHp(Math.ceil(player.hp / 2));
                                for (const npc of game.filterPlayer((c) => c != player)) {
                                    var bool = Math.random() < 0.5;
                                    if (bool) {
                                        await npc.damage(4, 'thunder', 'nosource');
                                    } else {
                                        var cards = npc.getCards('he');
                                        await npc.discard(cards);
                                        await npc.loseHp(2);
                                    }
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 5,
                                },
                            },
                        },

                        //无始亦无终：锁定技。①每轮开始时，你执行一个额外的出牌阶段。②回合开始时，你摸一张牌并观看牌堆顶的三张牌，你可以将其以任意顺序置于牌堆顶或牌堆底。③你的回合内，所有其他角色减少一点体力上限。
                        wmsj_无始亦无终: {
                            trigger: {
                                global: 'roundStart',
                                player: 'phaseBegin',
                            },
                            forced: true,
                            firstDo: true,
                            priority: 27,
                            async content(event, trigger, player) {
                                if (event.triggername == 'phaseBegin') {
                                    for (const npc of game.filterPlayer((c) => c != player)) {
                                        npc.addTempSkill('wmsj_loseMaxHp');
                                    }
                                    await player.draw();
                                    const result = await player.chooseToGuanxing(3).set('prompt', '无始亦无终：点击将牌移动到牌堆顶或牌堆底').forResult();
                                    if (!result.bool || !result.moved[0].length) {
                                        player.addTempSkill('guanxing_fail');
                                    }
                                } else {
                                    player.phaseUse();
                                }
                            },
                            ai: {
                                threaten: 1.2,
                                guanxing: true,
                            },
                        },
                        wmsj_loseMaxHp: {
                            charlotte: true,
                            init(player) {
                                player.loseMaxHp();
                            },
                            onremove(player) {
                                player.gainMaxHp();
                            },
                            mark: true,
                            marktext: '无始',
                            intro: {
                                name: '无始亦无终',
                                markcount: () => null,
                                content: '体力上限减1',
                            },
                        },

                        //大道宝瓶：锁定技。①你不能成为其他角色的多目标锦囊牌的目标。②你成为其他角色牌的目标时，你进行一次判定，若结果为红色则你获得判定牌牌，否则你摸一张牌。③回合结束阶段，你可以弃置一张牌并选择一名其他角色，其无法使用或打出你弃置牌的同类型手牌直到其回合结束。
                        wmsj_大道宝瓶: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            firstDo: true,
                            silent: true,
                            priority: 27,
                            filter: function (event, player, name) {
                                if (name == 'phaseJieshuBegin') return true;
                                return event.player != player;
                            },
                            async content(event, trigger, player) {
                                if (event.triggername == 'phaseJieshuBegin') {
                                    const { bool, targets, cards } = await player
                                        .chooseCardTarget({
                                            prompt: '大道宝瓶',
                                            prompt2: '弃置一张牌并选择一名角色',
                                            filterTarget: lib.filter.notMe,
                                            selectCard: 1,
                                            filterCard: true,
                                            position: 'he',
                                            ai1(card) {
                                                return 5 - get.value(card);
                                            },
                                            ai2(target) {
                                                var player = _status.event.player;
                                                return -get.attitude(player, target);
                                            },
                                        })
                                        .forResult();
                                    if (bool) {
                                        const card = cards[0];
                                        const npc = targets[0];
                                        var type = npc.getStorage('wmsj_镇封封印') || [];
                                        type.add(get.type(card));
                                        player.line(npc);
                                        npc.addTempSkill('wmsj_宝瓶封印', { player: 'phaseAfter' });
                                        npc.markAuto('wmsj_宝瓶封印', type);
                                        await player.discard(card);
                                    }
                                } else {
                                    const result = await player.judge().forResult();
                                    if (result?.color == 'red') {
                                        await player.gain(result.card);
                                    } else {
                                        await player.draw();
                                    }
                                }
                            },
                        },
                        mod: {
                            targetEnabled(card, player, target) {
                                if (card.selectTarget && card.selectTarget != 1 && player != target) {
                                    return false;
                                }
                            },
                        },
                        wmsj_宝瓶封印: {
                            onremove: function (player, skill) {
                                player.storage.wmsj_宝瓶封印 = [];
                            },
                            charlotte: true,
                            mark: true,
                            marktext: '宝瓶',
                            intro: {
                                name: '大道宝瓶',
                                markcount: () => null,
                                content: '不能使用或打出$手牌',
                            },
                            mod: {
                                cardEnabled2: function (card, player) {
                                    let storage = player.getStorage('wmsj_宝瓶封印');
                                    if (storage.includes(get.type(card)) && get.position(card) == 'h') return false;
                                },
                                cardEnabled: function (card, player) {
                                    let storage = player.getStorage('wmsj_宝瓶封印');
                                    if (storage.includes(get.type(card)) && get.position(card) == 'h') return false;
                                },
                                cardRespondable: function (card, player) {
                                    let storage = player.getStorage('wmsj_宝瓶封印');
                                    if (storage.includes(get.type(card)) && get.position(card) == 'h') return false;
                                },
                                cardSavable: function (card, player) {
                                    let storage = player.getStorage('wmsj_宝瓶封印');
                                    if (storage.includes(get.type(card)) && get.position(card) == 'h') return false;
                                },
                            },
                        },

                        //横推诸世敌：①出牌阶段限一次，你弃置一张牌并选择一名其他角色视为对其使用一张【杀】，此【杀】命中后你摸一张牌。②你使用【杀】时，令此【杀】伤害基数+1，然后你可以弃置一张牌令此【杀】不可响应。
                        wmsj_横推诸世敌: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'hej',
                            prompt: '弃置一张牌对一名角色使用【杀】',
                            filter: function (event, player) {
                                return player.countCards('hej') > 0;
                            },
                            filterCard: true,
                            selectCard: 1,
                            filterTarget: lib.filter.notMe,
                            check: function (card) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != _status.event.player && get.attitude(_status.event.player, current) < 0;
                                    })
                                )
                                    return 0;
                                return 5 - get.value(card);
                            },
                            async content(event, trigger, player) {
                                const npc = event.targets[0];
                                const card = event.cards[0];
                                var sha = {
                                    name: 'sha',
                                    isCard: true,
                                    storage: { htzsd: true },
                                };
                                await player.useCard(sha, npc, false);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                            },
                            group: ['wmsj_横推诸世敌_1', 'wmsj_横推诸世敌_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['useCard'],
                                    },
                                    forced: true,
                                    priority: 23,
                                    silent: true,
                                    filter(event, player, name) {
                                        return event.card.name == 'sha' && player.countCards('hej') > 0;
                                    },
                                    async content(event, trigger, player) {
                                        trigger.baseDamage++;
                                        const result = await player
                                            .chooseCard('hej')
                                            .set('prompt', '横推诸世敌')
                                            .set('prompt2', '弃置一张牌，使此【杀】不可响应')
                                            .set('ai', function (card) {
                                                return 5 - get.value(card);
                                            })
                                            .forResult();
                                        if (result.bool) {
                                            player.logSkill('wmsj_横推诸世敌');
                                            const card = result.cards[0];
                                            await player.discard(card);
                                            trigger.directHit.addArray(game.players);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: ['shaDamage'],
                                    },
                                    forced: true,
                                    priority: 23,
                                    silent: true,
                                    filter(event, player, name) {
                                        return event.card?.storage?.htzsd;
                                    },
                                    async content(event, trigger, player) {
                                        await player.draw();
                                    },
                                },
                            },
                        },

                        //无始钟镇：出牌阶段限一次，你可以弃置一半的牌（向上取整）并选择至多三名其他角色，其需弃置等量的牌否则受到2点无来源的雷电伤害。
                        wmsj_无始钟镇: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'hej',
                            prompt() {
                                const num = Math.ceil(get.player().countCards('hej') / 2);
                                return '弃置' + get.cnNumber(num) + '张牌并选择三名角色';
                            },
                            filter: function (event, player) {
                                return player.countCards('hej') > 0;
                            },
                            filterCard: true,
                            selectCard() {
                                const num = Math.ceil(get.player().countCards('hej') / 2);
                                return num;
                            },
                            filterTarget: lib.filter.notMe,
                            selectTarget: [1, 3],
                            multitarget: true,
                            multiline: true,
                            check: function (card) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != _status.event.player && get.attitude(_status.event.player, current) < 0;
                                    })
                                )
                                    return 0;
                                return 8 - get.value(card);
                            },
                            async content(event, trigger, player) {
                                const targets = event.targets;
                                const numx = event.cards.length;
                                for (const target of targets) {
                                    var length = target.countCards('he');
                                    if (length >= numx) {
                                        var result = await target
                                            .chooseCard('he', numx)
                                            .set('prompt', '无始钟·镇')
                                            .set('prompt2', `弃置${get.cnNumber(numx)}张牌，否则受到2点无来源雷电伤害`)
                                            .set('ai', function (card) {
                                                if (
                                                    get.effect(
                                                        target,
                                                        {
                                                            name: 'damage',
                                                        },
                                                        target,
                                                        target
                                                    ) >= 0
                                                )
                                                    return 0;
                                                else return 8 - get.value(card);
                                            })
                                            .forResult();
                                    }
                                    if (result?.bool) {
                                        await target.discard(result.cards);
                                    } else {
                                        await target.damage(2, 'thunder', 'nosource');
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                            },
                        },

                        //重瞳·洞悉：锁定技。①你成为其他角色牌的目标时，你可以观看其手牌并弃置弃中一张牌，若弃置牌与此牌类别相同则此牌对你无效。②回合开始时，你观看牌堆顶X张牌（X为存活角色数），以任意顺序置于牌堆顶或牌堆底。
                        wmsj_重瞳洞悉: {
                            unique: true,
                            trigger: { target: 'useCardToTarget' },
                            prompt: '重瞳·洞悉',
                            prompt2(event) {
                                return '观看' + get.translation(event.player) + '的手牌并弃置其中一张';
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countCards('h') > 0;
                            },
                            async content(event, trigger, player) {
                                const npc = trigger.player;
                                const result = await player.discardPlayerCard('visible').set('target', npc).set('ai', lib.card.guohe.ai.button).forResult();
                                if (result.cards?.length) {
                                    const card = result.cards[0];
                                    if (get.type2(card) == get.type2(trigger.card)) {
                                        trigger.getParent().excluded.add(player);
                                    }
                                }
                            },
                            group: ['wmsj_重瞳洞悉_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    firstDo: true,
                                    priority: 27,
                                    async content(event, trigger, player) {
                                        var num = game.filterPlayer().length;
                                        const result = await player.chooseToGuanxing(num).set('prompt', '重瞳·洞悉：点击将牌移动到牌堆顶或牌堆底').forResult();
                                        if (!result.bool || !result.moved[0].length) {
                                            player.addTempSkill('guanxing_fail');
                                        }
                                    },
                                    ai: {
                                        threaten: 1.2,
                                        guanxing: true,
                                    },
                                },
                            },
                        },

                        //宝术·掠夺：出牌阶段和结束阶段开始时，你可以弃置一张牌并选择一名其他角色，你观看并获得其两张牌，称之为“宝”，然后根据获得牌类型执行对应一项：1.基本牌，你视为对其使用一张【杀】；2.锦囊牌，其随机弃置一张牌；3.装备牌，你使用并摸一张牌。
                        wmsj_宝术掠夺: {
                            trigger: {
                                player: ['phaseJieshuBegin', 'phaseUseBegin'],
                            },
                            firstDo: true,
                            priority: 27,
                            filter: function (event, player, name) {
                                if (!game.hasPlayer((c) => c != player && c.countCards('hej') > 0)) return false;
                                return player.countCards('hej') > 0;
                            },
                            async cost(event, trigger, player) {
                                event.result = await player
                                    .chooseCardTarget({
                                        prompt: '宝术·掠夺',
                                        prompt2: '弃置一张牌并选择一名角色',
                                        filterTarget: lib.filter.notMe,
                                        filterCard: true,
                                        selectCard: 1,
                                        position: 'hej',
                                        ai1(card) {
                                            return 7 - get.value(card);
                                        },
                                        ai2(target) {
                                            return get.effect(target, { name: 'shunshou_copy' }, get.player(), get.player());
                                        },
                                    })
                                    .forResult();
                            },
                            async content(event, trigger, player) {
                                const { targets, cards } = event,
                                    [target] = targets;
                                await player.discard(cards);
                                var result = await player.gainPlayerCard(target, 'hej', [1, 2], 'visible', 'visibleMove').forResult();
                                if (result.cards?.length) {
                                    var gainCards = result.cards;
                                    player.addGaintag(gainCards, 'wmsj_宝术掠夺_tag');
                                    for (const card of gainCards) {
                                        var type = get.type2(card);
                                        switch (type) {
                                            case 'basic':
                                                await player.useCard({ name: 'sha', isCard: true }, target, false);
                                                break;
                                            case 'trick':
                                                await target.discard(target.getCards('he').randomGet());
                                                break;
                                            case 'equip':
                                                await player.equip(card);
                                                await player.draw();
                                                break;
                                        }
                                    }
                                }
                            },
                        },

                        //至尊骨·无畏：锁定技。①你使用“宝”时摸一张牌且使此牌不可响应。②你使用【杀】时，可以弃置一张“宝”并额外指定任意一个其他目标。
                        wmsj_至尊骨无畏: {
                            trigger: {
                                player: ['useCard'],
                            },
                            forced: true,
                            priority: 23,
                            filter(event, player, name) {
                                return player.hasHistory('lose', function (evt) {
                                    if (evt.getParent() != event) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('wmsj_宝术掠夺_tag')) return true;
                                    }
                                    return false;
                                });
                            },
                            async content(event, trigger, player) {
                                trigger.directHit.addArray(game.players);
                                await player.draw();
                            },
                            group: ['wmsj_至尊骨无畏_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['useCard2'],
                                    },
                                    direct: true,
                                    priority: 5,
                                    filter: function (event, player) {
                                        if (event.card.name != 'sha') return false;
                                        if (!game.hasPlayer((c) => c != player && !event.targets.contains(c))) return false;
                                        return player.countCards('h', (c) => c.hasGaintag('wmsj_宝术掠夺_tag'));
                                    },
                                    async content(event, trigger, player) {
                                        const targets = trigger.targets;
                                        const result = await player
                                            .chooseCardTarget({
                                                prompt: '至尊骨·无畏',
                                                prompt2: '弃置一张“宝”为【杀】增加一个目标',
                                                filterTarget(card, player, target) {
                                                    return target != player && !targets.includes(target);
                                                },
                                                filterCard(card, player) {
                                                    return card.hasGaintag('wmsj_宝术掠夺_tag');
                                                },
                                                selectCard: 1,
                                                position: 'h',
                                                ai1(card) {
                                                    return 7 - get.value(card);
                                                },
                                                ai2(target) {
                                                    return -get.attitude(player, target);
                                                },
                                            })
                                            .forResult();
                                        if (result.cards?.length) {
                                            await player.discard(result.cards);
                                            player.line(result.targets);
                                            trigger.targets.addArray(result.targets);
                                        }
                                    },
                                },
                            },
                        },

                        //重瞳开天·镇杀：限定技，出牌阶段，你弃置所有“宝”（至少三张）并选择至多等量其他角色，其受到2点无来源的雷电伤害，然后你观看其所有牌并获得其中至多三张牌。
                        wmsj_重瞳开天: {
                            enable: 'phaseUse',
                            prompt() {
                                const num = get.player().countCards('h', (c) => c.hasGaintag('wmsj_宝术掠夺_tag'));
                                return '弃置所有“宝”并选择至多' + get.cnNumber(num) + '名角色';
                            },
                            limited: true,
                            skillAnimation: true,
                            multitarget: true,
                            multiline: true,
                            filter: function (event, player) {
                                return player.countCards('h', (c) => c.hasGaintag('wmsj_宝术掠夺_tag')) >= 3;
                            },
                            filterTarget: function (card, player, target) {
                                return player != target;
                            },
                            selectTarget() {
                                const num = get.player().countCards('h', (c) => c.hasGaintag('wmsj_宝术掠夺_tag'));
                                return [1, num];
                            },
                            async content(event, trigger, player) {
                                player.awakenSkill(event.name);
                                const targets = event.targets;
                                player.line(targets);
                                var bao = player.getCards('h', (c) => c.hasGaintag('wmsj_宝术掠夺_tag'));
                                await player.discard(bao);
                                for (const target of targets) {
                                    await target.damage(2, 'thunder', 'nosource');
                                }
                                for (const target of targets.filter((c) => c.isAlive() && c.countCards('hej') > 0)) {
                                    await player.gainPlayerCard(target, 'hej', [1, 3], 'visible', 'visibleMove');
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -1,
                                },
                            },
                        },

                        //祭灵之佑：锁定技。①游戏开始时，你获得3个“柳枝”；你的回合结束时，你获得1个“柳枝”。②每当一名角色进入濒死时，你可以弃置1个“柳枝”令其回复1点体力并摸一张牌。③其他角色回合结束时，你可以弃置1个“柳枝”令其摸两张牌。
                        wmsj_祭灵之佑: {
                            unique: true,
                            silent: true,
                            forced: true,
                            priority: 53,
                            marktext: '柳枝',
                            intro: {
                                name: '柳枝',
                                content: '拥有#个柳枝',
                            },
                            trigger: {
                                global: ['dying', 'phaseEnd'],
                            },
                            filter(event, player, name) {
                                if (name != 'dying' && event.player == player) {
                                    return false;
                                }
                                return player.hasMark('wmsj_祭灵之佑');
                            },
                            async content(event, trigger, player) {
                                const bool = trigger.name == 'dying';
                                var str = get.translation(trigger.player);
                                bool ? (str += '回复1点体力并摸一张牌') : (str += '摸两张牌');
                                const result = await player
                                    .chooseBool()
                                    .set('prompt', '祭灵之佑')
                                    .set('prompt2', `是否弃置1个“柳枝”，令${str}`)
                                    .set('ai', () => {
                                        var player = _status.event.player;
                                        return get.effect(_status.event.getTrigger().player, { name: 'draw' }, player, player) + get.recoverEffect(_status.event.getTrigger().player, player, player) / 5 > 0;
                                    })
                                    .forResult();
                                if (result.bool) {
                                    player.logSkill('wmsj_祭灵之佑', trigger.player);
                                    player.removeMark('wmsj_祭灵之佑', 1);
                                    if (bool) {
                                        await trigger.player.recover();
                                        await trigger.player.draw();
                                    } else {
                                        await trigger.player.draw(2);
                                    }
                                }
                            },
                            group: ['wmsj_祭灵之佑_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['phaseBefore'],
                                        player: ['enterGame', 'phaseEnd'],
                                    },
                                    forced: true,
                                    priority: 17,
                                    filter(event, player, name) {
                                        if (name == 'phaseEnd') return true;
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        var num = event.triggername == 'phaseEnd' ? 1 : 3;
                                        player.addMark('wmsj_祭灵之佑', num);
                                    },
                                },
                            },
                        },

                        //万法皆空：锁定技。①你不能成为其他角色的延时锦囊牌的目标，你的手牌上限+X（X为你的“柳枝”数量）。②每当你使用或打出一张【闪】时，你摸一张牌。③你成为其他角色普通锦囊牌目标时，你获得1个“柳枝”并摸一张牌。④回合开始时，你可以弃置1个“柳枝”并令一名其他角色本回合失去所有技能。
                        wmsj_万法皆空: {
                            unique: true,
                            forced: true,
                            silent: true,
                            priority: 53,
                            trigger: {
                                player: ['useCard', 'respond', 'phaseBegin'],
                                target: ['useCardToTarget'],
                            },
                            filter(event, player, name) {
                                if (['useCard', 'respond'].contains(name) && event.card.name == 'shan') return true;
                                if (name == 'useCardToTarget' && event.player != player && get.type(event.card) == 'trick') return true;
                                return name == 'phaseBegin';
                            },
                            async content(event, trigger, player) {
                                player.logSkill('wmsj_万法皆空');
                                switch (event.triggername) {
                                    case 'useCardToTarget':
                                        player.addMark('wmsj_祭灵之佑', 1);
                                        await player.draw();
                                        break;
                                    case 'phaseBegin':
                                        var result = await player
                                            .chooseTarget(lib.filter.notMe)
                                            .set('prompt', '万法皆空')
                                            .set('prompt2', '选择一名角色本回合失去所有技能')
                                            .set('ai', (target) => {
                                                return -get.attitude(player, target);
                                            })
                                            .forResult();
                                        if (result.targets?.length) {
                                            player.line(result.targets);
                                            result.targets[0].disableSkill('wmsj_万法皆空', lib.character[result.targets[0].name][3]);
                                            result.targets[0].addSkill('wmsj_万法皆空_2');
                                        }
                                        break;
                                    default:
                                        await player.draw();
                                        break;
                                }
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + player.countMark('wmsj_祭灵之佑');
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && player != target) {
                                        return false;
                                    }
                                },
                            },
                            group: ['wmsj_万法皆空_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseAfter'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    priority: 17,
                                    content() {
                                        for (const npc of game.players) {
                                            npc.removeSkill('wmsj_万法皆空_2');
                                            npc.enableSkill('wmsj_万法皆空');
                                            delete npc.storage.wmsj_万法皆空;
                                        }
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '万法皆空',
                                    charlotte: true,
                                    intro: {
                                        name: '万法皆空',
                                        content: '失去所有技能直到回合结束',
                                    },
                                },
                            },
                        },

                        //涅槃重生：锁定技，每局游戏限两次，你每当你进入濒死时，你将体力回复至2点并获得2个“柳枝”，然后你可以移动场上的一张牌。
                        wmsj_涅槃重生: {
                            unique: true,
                            silent: true,
                            forced: true,
                            lastDo: true,
                            priority: 35,
                            mark: true,
                            marktext: '涅槃',
                            intro: {
                                name: '涅槃重生',
                                content(storage, player, skill) {
                                    return '可发动次数：' + player.storage.柳神涅槃;
                                },
                            },
                            init(player) {
                                player.storage.柳神涅槃 = 2;
                            },
                            trigger: { player: 'dying' },
                            filter(event, player) {
                                return player.isDying() && player.storage.柳神涅槃 > 0;
                            },
                            async content(event, trigger, player) {
                                player.storage.柳神涅槃--;
                                player.logSkill('wmsj_涅槃重生log');
                                await player.recoverTo(2);
                                player.addMark('wmsj_祭灵之佑', 2);
                                if (player.canMoveCard()) {
                                    await player.moveCard();
                                }
                            },
                        },
                        wmsj_涅槃重生log: {
                            charlotte: true,
                            juexingji: true,
                            skillAnimation: true,
                        },

                        //雷帝裁决：出牌阶段限一次，你弃置2个“柳枝”并选择一名其他角色受到1点无来源的雷电伤害并随机弃置一张牌，若此牌为【闪】则你获得之。
                        wmsj_雷帝裁决: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '弃置2个“柳枝”，选择一名其他角色受到1点无来源的雷电伤害并随机弃置一张牌，若为【闪】则你获得之',
                            filter(event, player) {
                                return player.countMark('wmsj_祭灵之佑') >= 2;
                            },
                            filterTarget: lib.filter.notMe,
                            selectTarget: 1,
                            async content(event, trigger, player) {
                                const npc = event.targets[0];
                                await npc.damage(1, 'thunder', 'nosource');
                                if (!npc.countCards('he')) return;
                                const card = npc.getCards('he').randomGet();
                                await npc.discard(card);
                                if (card.name == 'shan') {
                                    await player.gain(card);
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -1,
                                },
                            },
                        },

                        //超然世外：锁定技，你与其他角色距离-X，其他角色与你距离+Y（X为存活角色数，Y为你已损失体力值）。
                        wmsj_超然世外: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    var num = game.filterPlayer().length;
                                    return distance - num;
                                },
                                globalTo(from, to, distance) {
                                    var num = to.getDamagedHp();
                                    return distance + num;
                                },
                            },
                        },

                        //倾仙漫步：回合开始时，你可以选择将本回合判定阶段、摸牌阶段和弃牌阶段中的一个改为出牌阶段并执行对应一项：1.判定阶段，你移动场上的一张牌；2.摸牌阶段，你亮出牌堆顶五张牌并获得其中的红色牌；3.弃牌阶段，你令一名角色摸一张牌然后再弃置一名角色一张牌。
                        wmsj_倾仙漫步: {
                            trigger: { player: 'phaseBegin' },
                            unique: true,
                            forced: true,
                            silent: true,
                            async content(event, trigger, player) {
                                var result = await player
                                    .chooseButton([
                                        '倾仙漫步：选择将一个阶段改为出牌阶段并执行对应一项：',
                                        [
                                            [
                                                [0, '〖判定阶段〗：你移动场上的一张牌'],
                                                [1, '〖摸牌阶段〗：你亮出牌堆顶五张牌并获得其中的红色牌'],
                                                [2, '〖弃牌阶段〗：你令一名角色摸一张牌再弃置一名角色一张牌'],
                                            ],

                                            'textbutton',
                                        ],
                                    ])
                                    .forResult();
                                if (result.bool) {
                                    player.logSkill('倾仙漫步');
                                    const choices = result.links.sort((a, b) => a - b);
                                    for (const num of choices) {
                                        switch (num) {
                                            case 0:
                                                player.storage.漫步 = 'phasejudge';
                                                if (player.canMoveCard()) {
                                                    await player.moveCard();
                                                }
                                                break;
                                            case 1:
                                                player.storage.漫步 = 'phaseDraw';
                                                var cards = get.cards(5);
                                                var next = game.cardsGotoOrdering(cards);
                                                await next;
                                                await player.showCards(cards, get.translation(player) + '发动了【倾仙漫步】');
                                                var gain = cards.filter((c) => get.color(c) == 'red');
                                                if (gain.length) {
                                                    await player.gain(gain, 'gain2');
                                                }
                                                break;
                                            case 2:
                                                player.storage.漫步 = 'phaseDiscard';
                                                var result1 = await player
                                                    .chooseTarget()
                                                    .set('prompt', '倾仙漫步')
                                                    .set('prompt2', '令一名角色摸一张牌')
                                                    .set('ai', (target) => {
                                                        return get.attitude(player, target);
                                                    })
                                                    .forResult();
                                                if (result1.bool) {
                                                    player.line(result1.targets);
                                                    await result1.targets[0].draw();
                                                }
                                                var result2 = await player
                                                    .chooseTarget()
                                                    .set('filterTarget', (card, player, target) => {
                                                        return player != target && target.countCards('he');
                                                    })
                                                    .set('prompt', '倾仙漫步')
                                                    .set('prompt2', '弃置一名角色一张牌')
                                                    .set('ai', (target) => {
                                                        return get.effect(target, { name: 'guohe_copy' }, get.player(), get.player());
                                                    })
                                                    .forResult();
                                                if (result2.bool) {
                                                    player.line(result2.targets);
                                                    await player.discardPlayerCard(result2.targets[0]).set('ai', lib.card.guohe.ai.button);
                                                }
                                                break;
                                        }
                                    }
                                }
                            },
                        },
                        _wmsj_漫步: {
                            trigger: {
                                player: 'phaseChange',
                            },
                            filter(event, player) {
                                if (!player.storage.漫步) return false;
                                if (event.phaseList[event.num].startsWith(player.storage.漫步)) {
                                    return true;
                                }
                                return false;
                            },
                            charlotte: true,
                            forced: true,
                            async content(event, trigger, player) {
                                delete player.storage.漫步;
                                trigger.phaseList[trigger.num] = `phaseUse|${event.name}`;
                                game.log('〖倾仙漫步〗的出牌阶段开始了');
                            },
                        },

                        //因果·红尘劫：每当一名角色判定生效前，你可以打出一张牌替换之。
                        wmsj_红尘劫: {
                            trigger: { player: 'phaseUseBegin' },
                            unique: true,
                            forced: true,
                            priority: 51,
                            async content(event, trigger, player) {
                                if (player.countCards('h')) {
                                    await player.discard(player.getCard('h'));
                                }
                                const num = player.maxHp;
                                let list = [];
                                for (let i = 0; i < ui.cardPile.childElementCount; i++) {
                                    const card = ui.cardPile.childNodes[i];
                                    const name = get.name(card, false);
                                    if (list.some((c) => get.name(c, false) === name)) continue;
                                    list.add(card);
                                    if (list.length >= num) break;
                                }
                                if (list.length) await player.gain(list, 'draw2');
                                if (list.length < num) {
                                    const result = await player
                                        .chooseTarget(lib.filter.notMe)
                                        .set('prompt', '因果·红尘劫')
                                        .set('prompt2', `令一名角色流失${num - list.length}点体力`)
                                        .set('ai', (target) => {
                                            return get.damageEffect(target, _status.event.player, _status.event.player);
                                        })
                                        .forResult();
                                    if (result.bool && result.targets) {
                                        player.line(result.targets);
                                        await result.targets[0].loseHp(num - list.length);
                                    }
                                }
                            },
                        },

                        //仙古·往生曲：限定技，出牌阶段，你选择任意名其他角色并进行一次判定，若结果：不为红色则其随机翻面或弃置所有牌，不为黑色则其受到2点无来源雷电伤害。然后其回合结束时，你执行一个额外的出牌阶段（每名角色限一次）。
                        wmsj_往生曲: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '选择任意名其他角色并进行一次判定，若结果：不为红色则其随机翻面或弃置所有牌，不为黑色则其受到2点无来源雷电伤害。然后其回合结束时，你执行一个额外的出牌阶段（每名角色限一次）',
                            limited: true,
                            skillAnimation: true,
                            filterTarget: lib.filter.notMe,
                            selectTarget: [1, Infinity],
                            multitarget: true,
                            multiline: true,
                            async content(event, trigger, player) {
                                player.awakenSkill(event.name);
                                player.addSkill('wmsj_仙古往生');
                                const targets = event.targets;
                                player.storage.往生 = targets.sortBySeat();
                                const result = await player.judge().forResult();
                                for (const npc of targets) {
                                    npc.addMark('wmsj_仙古往生', 1, false);
                                    if (result?.color != 'red' || !result) {
                                        var bool = Math.random() < 0.5;
                                        if (bool && npc.countCards('he')) {
                                            await npc.discard(npc.getCards('he'));
                                        } else {
                                            await npc.turnOver();
                                        }
                                    }
                                    if (result?.color != 'black' || !result) {
                                        await npc.damage(2, 'thunder', 'nosource');
                                    }
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        wmsj_仙古往生: {
                            unique: true,
                            forceunique: true,
                            charlotte: true,
                            silent: true,
                            forced: true,
                            marktext: '往生',
                            intro: {
                                name: '仙古·往生曲',
                                markcount: () => null,
                                content(storage, player) {
                                    return '回合结束时，叶倾仙执行一个额外的回合';
                                },
                            },
                            trigger: {
                                global: ['phaseEnd'],
                            },
                            filter(event, player) {
                                return player.storage.往生?.includes(event.player);
                            },
                            async content(event, trigger, player) {
                                player.storage.往生.remove(trigger.player);
                                trigger.player.clearMark('wmsj_仙古往生', false);
                                player.insertPhase();
                            },
                        },

                        //天命加护：持恒技，每轮开始时，你回复所有体力；你防止翻面和体力上限扣减；其他角色回复体力后，你回复等量体力。
                        wmsj_天命加护: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            persevereSkill: true,
                            firstDo: true,
                            silent: true,
                            trigger: {
                                global: ['roundStart', 'recoverAfter'],
                                player: ['loseMaxHpBefore', 'turnOverBefore'],
                            },
                            filter(event, player, name) {
                                if (name == 'turnOverBefore' && player.isTurnedOver()) return false;
                                if (name == 'recoverAfter' && (event.player == player || !player.isDamaged())) return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                player.logSkill('wmsj_天命加护');
                                const name = event.triggername;
                                switch (name) {
                                    case 'roundStart':
                                        await player.recoverTo(player.maxHp);
                                        break;
                                    case 'recoverAfter':
                                        await player.recover(trigger.num);
                                        break;
                                    default:
                                        trigger.cancel();
                                        break;
                                }
                            },
                        },

                        //乾坤扭转：持恒技。①你的技能不会失去；你进入濒死时，将体力回复至3点；其他角色使用牌时，你摸两张牌。②你可以将同花色的一至两张牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当普【无懈可击】。若你以此法转化了两张：红色牌，则此牌回复值或伤害值+1；黑色牌，则你弃置当前回合角色一张牌。
                        wmsj_乾坤扭转: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (num <= 0 || !player.isPhaseUsing() || player.needsToDiscard() < 2) {
                                        return num;
                                    }
                                    let suit = get.suit(card, player);
                                    if (suit === 'heart') {
                                        return num - 3.6;
                                    }
                                },
                                aiValue(player, card, num) {
                                    if (num <= 0) {
                                        return num;
                                    }
                                    let suit = get.suit(card, player);
                                    if (suit === 'heart') {
                                        return num + 3.6;
                                    }
                                    if (suit === 'club') {
                                        return num + 1;
                                    }
                                    if (suit === 'spade') {
                                        return num + 1.8;
                                    }
                                },
                                aiUseful(player, card, num) {
                                    if (num <= 0) {
                                        return num;
                                    }
                                    let suit = get.suit(card, player);
                                    if (suit === 'heart') {
                                        return num + 3;
                                    }
                                    if (suit === 'club') {
                                        return num + 1;
                                    }
                                    if (suit === 'spade') {
                                        return num + 1;
                                    }
                                },
                            },
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            persevereSkill: true,
                            locked: false,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将♦牌当做杀，♥牌当做桃，♣牌当做闪，♠牌当做无懈可击使用或打出',
                            viewAs(cards, player) {
                                if (cards.length) {
                                    var name = false,
                                        nature = null;
                                    switch (get.suit(cards[0], player)) {
                                        case 'club':
                                            name = 'shan';
                                            break;
                                        case 'diamond':
                                            name = 'sha';
                                            nature = 'fire';
                                            break;
                                        case 'spade':
                                            name = 'wuxie';
                                            break;
                                        case 'heart':
                                            name = 'tao';
                                            break;
                                    }
                                    if (name) {
                                        return { name: name, nature: nature };
                                    }
                                }
                                return null;
                            },
                            check(card) {
                                if (ui.selected.cards.length) {
                                    return 0;
                                }
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao'];
                                    var map = { sha: 'diamond', tao: 'heart' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (
                                            player.countCards('hes', function (card) {
                                                return (name != 'sha' || get.value(card) < 5) && get.suit(card, player) == map[name];
                                            }) > 0 &&
                                            player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                        ) {
                                            var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == get.suit(card, player)) {
                                        return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                                    }
                                    return 0;
                                }
                                return 1;
                            },
                            selectCard: [1, 2],
                            complexCard: true,
                            position: 'hes',
                            filterCard(card, player, event) {
                                if (ui.selected.cards.length) {
                                    return get.suit(card, player) == get.suit(ui.selected.cards[0], player);
                                }
                                event = event || _status.event;
                                var filter = event._backup.filterCard;
                                var name = get.suit(card, player);
                                if (name == 'club' && filter(get.autoViewAs({ name: 'shan' }, 'unsure'), player, event)) {
                                    return true;
                                }
                                if (name == 'diamond' && filter(get.autoViewAs({ name: 'sha', nature: 'fire' }, 'unsure'), player, event)) {
                                    return true;
                                }
                                if (name == 'spade' && filter(get.autoViewAs({ name: 'wuxie' }, 'unsure'), player, event)) {
                                    return true;
                                }
                                if (name == 'heart' && filter(get.autoViewAs({ name: 'tao' }, 'unsure'), player, event)) {
                                    return true;
                                }
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'diamond';
                                            break;
                                        case 'respondShan':
                                            name = 'club';
                                            break;
                                        case 'save':
                                            name = 'heart';
                                            break;
                                    }
                                    if (!player.countCards('hes', { suit: name })) {
                                        return false;
                                    }
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao'];
                                        var map = { sha: 'diamond', tao: 'heart' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (
                                                player.countCards('hes', function (card) {
                                                    return (name != 'sha' || get.value(card) < 5) && get.suit(card, player) == map[name];
                                                }) > 0 &&
                                                player.getUseValue({
                                                    name: name,
                                                    nature: name == 'sha' ? 'fire' : null,
                                                }) > 0
                                            ) {
                                                var temp = get.order({
                                                    name: name,
                                                    nature: name == 'sha' ? 'fire' : null,
                                                });
                                                if (temp > max) {
                                                    max = temp;
                                                }
                                            }
                                        }
                                        max /= 1.1;
                                        return max;
                                    }
                                    return 2;
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) {
                                    return true;
                                }
                                if (name == 'wuxie') {
                                    return player.countCards('hes', { suit: 'spade' }) > 0;
                                }
                                if (name == 'tao') {
                                    return player.countCards('hes', { suit: 'heart' }) > 0;
                                }
                            },
                            group: ['wmsj_乾坤扭转_num', 'wmsj_乾坤扭转_discard'],
                            subSkill: {
                                num: {
                                    trigger: { player: 'useCard' },
                                    forced: true,
                                    popup: false,
                                    filter(event) {
                                        var evt = event;
                                        return ['sha', 'tao'].includes(evt.card.name) && evt.skill == 'wmsj_乾坤扭转' && evt.cards && evt.cards.length == 2;
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                                discard: {
                                    trigger: { player: ['useCardAfter', 'respondAfter'] },
                                    forced: true,
                                    popup: false,
                                    logTarget() {
                                        return _status.currentPhase;
                                    },
                                    autodelay(event) {
                                        return event.name == 'respond' ? 0.5 : false;
                                    },
                                    filter(evt, player) {
                                        return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'wmsj_乾坤扭转' && evt.cards && evt.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                                    },
                                    content() {
                                        player.line(_status.currentPhase, 'green');
                                        player.discardPlayerCard(_status.currentPhase, 'he', true);
                                    },
                                },
                            },
                        },

                        //唯我独尊：持恒技，当你对其他角色造成伤害时，你可以选择一项：1. 取其1点体力和体力上限；2. 获得其两张牌（不足则改为令其失去2点体力）。3.令其废除所有装备栏（已全部废除则令此伤害翻倍）；4.令其翻面（若以翻至背面则改为令此伤害翻倍）。每项每回合限一次。
                        wmsj_唯我独尊: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            persevereSkill: true,
                            init(player) {
                                player.storage.wmsj_唯我独尊 = [];
                            },
                            trigger: {
                                source: ['damageBegin4'],
                            },
                            filter(event, player, name) {
                                if (event.player == player) return false;
                                if (player.getStorage('wmsj_唯我独尊').length >= 4) return false;
                                return true;
                            },
                            async cost(event, trigger, player) {
                                const target = trigger.player;
                                const top = '〖唯我独尊〗：对' + get.translation(target) + '选择一项';
                                const list = [
                                    ['hp', '取其1点体力和体力上限'],
                                    ['gain', '获得其两张牌，不足则改为其失去2点体力'],
                                    ['equip', '废除其所有装备栏，若全部废除则令此伤害翻倍'],
                                    ['turn', '令其翻面，若以已翻至背面则改为此伤害翻倍'],
                                ];

                                const result = await player
                                    .chooseButton([top, [list, 'textbutton']], 1)
                                    .set('filterButton', function (button) {
                                        if (get.player().getStorage('wmsj_唯我独尊_used').includes(button.link)) {
                                            return false;
                                        }
                                        return true;
                                    })
                                    .set('target', target)
                                    .set('ai', () => 1 + Math.random())
                                    .forResult();
                                if (result.bool) {
                                    event.result = {
                                        bool: true,
                                        cost_data: result.links[0],
                                    };
                                }
                            },
                            async content(event, trigger, player) {
                                const npc = trigger.player;
                                const choice = event.cost_data;
                                player.addTempSkill('wmsj_唯我独尊_used');
                                player.markAuto('wmsj_唯我独尊_used', [choice]);
                                switch (choice) {
                                    case 'hp':
                                        await npc.loseMaxHp();
                                        await npc.loseHp();
                                        await player.gainMaxHp();
                                        await player.recover();
                                        break;
                                    case 'gain':
                                        if (npc.countCards('he') >= 2) {
                                            await player.gainPlayerCard(npc, 'hej', 2, 'visibleMove');
                                        } else {
                                            await npc.loseHp(2);
                                        }
                                        break;
                                    case 'equip':
                                        const disables = [];
                                        for (let i = 1; i <= 5; i++) {
                                            for (let j = 0; j < npc.countEnabledSlot(i); j++) {
                                                disables.push(i);
                                            }
                                        }
                                        if (disables.length > 0) {
                                            await npc.disableEquip(disables);
                                        } else {
                                            trigger.num += trigger.num;
                                        }
                                        break;
                                    case 'turn':
                                        if (npc.isTurnedOver()) {
                                            trigger.num += trigger.num;
                                        } else {
                                            await npc.turnOver();
                                        }
                                        break;
                                }
                            },
                            subSkill: {
                                used: {
                                    charlotte: true,
                                    onremove: true,
                                },
                            },
                        },

                        //征战天下：持恒技，其他角色的回合开始时，你可以弃置一张牌，若如此做，该角色于本回合内首次摸牌、弃牌或使用每种牌名的牌后，你视为对其使用【杀】，若你弃置的牌为【杀】，你令其所有技能失效，上述效果持续至本回合结束或其对你造成伤害。
                        wmsj_征战天下: {
                            trigger: { global: 'phaseBegin' },
                            filter(event, player) {
                                return event.player != player && player.countDiscardableCards(player, 'he');
                            },
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            persevereSkill: true,
                            async cost(event, trigger, player) {
                                event.result = await player
                                    .chooseToDiscard('he')
                                    .set('prompt', get.prompt2('wmsj_征战天下', trigger.player))
                                    .set('ai', (card) => {
                                        const target = get.event('target'),
                                            player = get.player(),
                                            phaseList = get.event('phaseList');
                                        if (get.attitude(player, target) > 0) {
                                            return 0;
                                        }
                                        let value = 3 - get.value(card, player);
                                        if (!phaseList.length) {
                                            value -= 3;
                                        } else {
                                            value += Math.min(3, phaseList.length);
                                        }
                                        if (get.effect(target, get.autoViewAs({ name: 'sha' }, []), player, player) > 0) {
                                            value += 2;
                                        }
                                        if (card.name == 'sha') {
                                            value += target.getSkills(null, false).length / 2;
                                        }
                                        return value;
                                    })
                                    .set('target', trigger.player)
                                    .set(
                                        'phaseList',
                                        trigger.phaseList.filter((i) => {
                                            return ['phaseDraw', 'phaseUse', 'phaseDiscard'].includes(i);
                                        })
                                    )
                                    .set('chooseonly', true)
                                    .forResult();
                                if (event.result?.bool) {
                                    event.result.targets = [trigger.player];
                                }
                            },
                            async content(event, trigger, player) {
                                const {
                                    targets: [target],
                                    cards: [card],
                                } = event;
                                await player.discard(card);
                                target.addTempSkill('wmsj_征战天下_effect', { global: ['phaseAfter', 'phaseBefore'] });
                                target.storage.wmsj_征战天下_effect.players.add(player);
                                if (get.name(card) == 'sha') {
                                    target.addSkillBlocker('wmsj_征战天下_effect');
                                }
                                target.markSkill('wmsj_征战天下_effect');
                            },
                            group: ['wmsj_征战天下_sha'],
                            subSkill: {
                                sha: {
                                    sourceSkill: 'wmsj_征战天下',
                                    sub: true,
                                    trigger: { global: ['drawAfter', 'useCardAfter', 'loseAfter', 'loseAsyncAfter'] },
                                    getIndex(event, player) {
                                        if (['useCard', 'draw'].includes(event.name)) {
                                            return [event.player];
                                        }
                                        if (event.getl && typeof event.getl == 'function') {
                                            return game.filterPlayer((current) => event.getl(current).cards2?.length).sortBySeat();
                                        }
                                        return [];
                                    },
                                    filter(event, player, name, target) {
                                        if (!target?.storage?.wmsj_征战天下_effect?.players?.includes(player)) {
                                            return false;
                                        }
                                        const record = target.storage.wmsj_征战天下_effect.record;
                                        if (event.name == 'useCard') {
                                            return !record.useCard.includes(event.card.name);
                                        } else if (event.name == 'draw') {
                                            return !record.draw;
                                        }
                                        return event.type == 'discard' && !record.discard;
                                    },
                                    forced: true,
                                    logTarget(event, player, name, target) {
                                        return [target];
                                    },
                                    async content(event, trigger, player) {
                                        const {
                                            targets: [target],
                                        } = event;
                                        switch (trigger.name) {
                                            case 'useCard':
                                                target.storage.wmsj_征战天下_effect.record.useCard.add(trigger.card.name);
                                                break;
                                            case 'draw':
                                                target.storage.wmsj_征战天下_effect.record.draw = true;
                                                break;
                                            default:
                                                target.storage.wmsj_征战天下_effect.record.discard = true;
                                                break;
                                        }
                                        target.markSkill('wmsj_征战天下_effect');
                                        const sha = get.autoViewAs({ name: 'sha' }, []);
                                        if (player.canUse(sha, target, false)) {
                                            await player.useCard(sha, target);
                                        }
                                    },
                                },
                                effect: {
                                    sourceSkill: 'wmsj_征战天下',
                                    sub: true,
                                    init(player, skill) {
                                        player.storage[skill] = {
                                            players: [],
                                            record: {
                                                draw: false,
                                                discard: false,
                                                useCard: [],
                                            },
                                        };
                                    },
                                    intro: {
                                        noucount: true,
                                        content(storage, player) {
                                            const { players, record } = storage;
                                            let str = `已被${get.translation(players)}封印<br>
                							已使用牌：${record.useCard.length ? get.translation(record.useCard) : '无'}<br>
                							摸牌：${record.draw ? '是' : '否'}<br>
                							弃牌：${record.discard ? '是' : '否'}`;
                                            if (player.storage.skill_blocker?.includes('wmsj_征战天下_effect')) {
                                                const list = player.getSkills(null, false, false).filter(function (i) {
                                                    return lib.skill.wmsj_征战天下_effect.skillBlocker(i, player);
                                                });
                                                if (list.length) {
                                                    str += `<br>已失效技能：${get.translation(list)}`;
                                                }
                                            }
                                            return str;
                                        },
                                    },
                                    onremove(player, skill) {
                                        delete player.storage[skill];
                                        player.removeSkillBlocker(skill);
                                    },
                                    skillBlocker(skill) {
                                        const info = get.info(skill);
                                        return !info.charlotte && !info.persevereSkill;
                                    },
                                    trigger: { source: 'damageSource' },
                                    filter(event, player) {
                                        return player.storage.wmsj_征战天下_effect.players.includes(event.player);
                                    },
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    async content(event, trigger, player) {
                                        player.storage.wmsj_征战天下_effect.players.remove(trigger.player);
                                        player.markSkill('wmsj_征战天下_effect');
                                        if (!player.storage.wmsj_征战天下_effect.players.length) {
                                            player.removeSkill('wmsj_征战天下_effect');
                                        }
                                    },
                                },
                            },
                        },

                        //我自不凡：持恒技，你使用锦囊牌时，你摸两张牌；摸牌和结束阶段，你获得牌堆中的两锦囊牌；你受到大于3点的伤害时，你将其削减为3点。
                        wmsj_我自不凡: {
                            forced: true,
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            lastDo: true,
                            unique: true,
                            persevereSkill: true,
                            trigger: {
                                player: ['useCard', 'phaseDarwBegin', 'phaseEnd', 'damageBegin4'],
                            },
                            filter(event, player) {
                                if (event.name == 'damage' && event.num < 4) return false;
                                if (event.name == 'useCard' && get.type2(event.card) !== 'trick') return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                if (trigger.name == 'damage') {
                                    trigger.num = 3;
                                } else if (trigger.name == 'useCard') {
                                    await player.draw(2);
                                } else {
                                    let list = [];
                                    for (let i = 0; i < ui.cardPile.childElementCount; i++) {
                                        const card = ui.cardPile.childNodes[i];
                                        if (get.type2(card) !== 'trick') continue;
                                        list.add(card);
                                        if (list.length >= 2) break;
                                    }
                                    if (list.length) await player.gain(list, 'draw2');
                                }
                            },
                        },

                        //命运无常：持恒技，其他角色的判定生效前，你可以打出一张手牌替换之，然后你令其进行一次【闪电】判定。
                        wmsj_命运无常: {
                            trigger: { global: 'judge' },
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            persevereSkill: true,
                            filter(event, player) {
                                return event.player != player && player.countCards('hes') > 0;
                            },
                            async cost(event, trigger, player) {
                                event.result = await player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + '，' + get.prompt(event.skill), 'hes', function (card) {
                                        const player = _status.event.player;
                                        const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') {
                                            return mod2;
                                        }
                                        const mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') {
                                            return mod;
                                        }
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        const trigger = _status.event.getTrigger();
                                        const player = _status.event.player;
                                        const judging = _status.event.judging;
                                        let result = trigger.judge(card) - trigger.judge(judging);
                                        const attitude = get.attitude(player, trigger.player);
                                        let val = get.value(card);
                                        if (get.subtype(card) == 'equip2') {
                                            val /= 2;
                                        } else {
                                            val /= 6;
                                        }
                                        if (attitude == 0 || result == 0) {
                                            return 0;
                                        }
                                        if (attitude > 0) {
                                            return result - val;
                                        }
                                        return -result - val;
                                    })
                                    .set('judging', trigger.player.judging[0])
                                    .forResult();
                            },
                            async content(event, trigger, player) {
                                await player.respond(event.cards, 'highlight', 'wmsj_命运无常', 'noOrdering');
                                player.$gain2(trigger.player.judging[0]);
                                await player.gain(trigger.player.judging[0]);
                                trigger.player.judging[0] = event.cards[0];
                                trigger.orderingCards.addArray(event.cards);
                                game.log(trigger.player, '的判定牌改为', event.cards[0]);
                                await game.delay(2);
                                await trigger.player.executeDelayCardEffect('shandian');
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },

                        //并天而行：持恒技，你每受到1点伤害或失去1点体力后，你摸两张牌并进行一次判定，若为红色则你回复1点体力，若为黑色则你获得1点护甲。
                        wmsj_并天而行: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            silent: true,
                            persevereSkill: true,
                            trigger: {
                                player: ['damageAfter', 'loseHpAfter'],
                            },
                            filter(event, player, name) {
                                return event.num > 0;
                            },
                            async content(event, trigger, player) {
                                var num = trigger.num;
                                while (num--) {
                                    player.logSkill('wmsj_并天而行');
                                    await player.draw(2);
                                    var result = await player.judge().forResult();
                                    if (result?.color == 'red') {
                                        await player.recover();
                                    }
                                    if (result?.color == 'black') {
                                        await player.changeHujia();
                                    }
                                }
                            },
                        },

                        //极天剑影：持恒技，出牌阶段限一次，你弃置三张牌并选择一名其他角色对其造成3点神圣伤害。
                        wmsj_极天剑影: {
                            enable: 'phaseUse',
                            usable: 1,
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            persevereSkill: true,
                            position: 'hesj',
                            prompt: '弃置三张牌对一名角色造成3点神圣伤害',
                            filter: function (event, player) {
                                return player.countCards('hesj') >= 3;
                            },
                            filterCard: true,
                            selectCard: 3,
                            filterTarget: lib.filter.notMe,
                            check: function (card) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != _status.event.player && get.attitude(_status.event.player, current) < 0;
                                    })
                                )
                                    return 0;
                                return 5 - get.value(card);
                            },
                            async content(event, trigger, player) {
                                const target = event.target;
                                target.damage(3)._triggered = null;
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                            },
                        },

                        //天命所归：持恒技，每个回合结束后，你增加1点体力上限并回复1点体力；你的体力上限达到30时，你的阵营获得胜利；你的摸牌阶段开始时，你可以选择一名其他角色失去2点体力。
                        wmsj_天命所归: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            persevereSkill: true,
                            forced: true,
                            trigger: {
                                global: ['phaseAfter'],
                                player: ['gainMaxHpEnd', 'phaseDrawBegin'],
                            },
                            filter(event, player, name) {
                                if (name == 'gainMaxHpEnd' && player.maxHp < 30) return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                const name = event.triggername;
                                if (name == 'phaseAfter') {
                                    await player.gainMaxHp();
                                    await player.recover();
                                } else if (name == 'gainMaxHpEnd') {
                                    var winners = player.getFriends();
                                    game.over(player == game.me || winners.includes(game.me));
                                } else {
                                    const result = await player
                                        .chooseTarget(lib.filter.notMe)
                                        .set('prompt', '主宰·天命所归')
                                        .set('prompt2', '选择一名角色流失2点体力')
                                        .set('ai', (target) => {
                                            return get.damageEffect(target, _status.event.player, _status.event.player);
                                        })
                                        .forResult();
                                    if (result.bool && result.targets) {
                                        player.line(result.targets);
                                        await result.targets[0].loseHp(2);
                                    }
                                }
                            },
                        },

                        //全知全能：锁定技，你的技能不会失去或失效；你防止翻面、体力和体力上限减少；你不能成为其他角色使用牌的目标；你死亡前取消并令一名角色失去所有技能。
                        wmsj_全知全能: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            init(player) {
                                setTimeout(function () {
                                    if (player.hp <= 0) {
                                        player.revive();
                                        player.hp = player.maxHp;
                                        player.update();
                                    }
                                }, 100);
                            },
                            trigger: {
                                player: ['loseMaxHpBefore', 'loseHpBefore', 'damagebegin4', 'changeHpBegin', 'turnOverBefore', 'dieBefore'],
                            },
                            filter(event, player, name) {
                                if (name == 'turnOverBefore' && player.isTurnedOver()) return false;
                                if (name == 'changeHpBegin' && event.num >= 0) return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                                if (trigger.name == 'die') {
                                    const result = await player
                                        .chooseTarget(lib.filter.notMe)
                                        .set('prompt', '〖全知全能〗')
                                        .set('prompt2', '选择一名角色失去所有技能')
                                        .set('ai', (target) => {
                                            return -get.attitude(get.player(), target);
                                        })
                                        .forResult();
                                    if (result.targets?.length) {
                                        player.line(result.targets);
                                        result.targets[0].skills = [];
                                    }
                                }
                            },
                            mod: {
                                targetEnabled: function (card, player, target) {
                                    if (player != target) {
                                        return false;
                                    }
                                },
                            },
                        },

                        //超越维度：锁定技，每当有角色摸牌后/使用牌后/回复体力后，你获得〖二维〗/〖三维〗/〖四维〗，然后若你获得了上述所有技能，则你获得〖五维〗。
                        wmsj_超越维度: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            derivation: ['wmsj_二维', 'wmsj_三维', 'wmsj_四维', 'wmsj_五维'],
                            trigger: {
                                global: ['drawAfter', 'useCardAfter', 'recoverAfter'],
                            },
                            filter(event, player) {
                                const name = event.name;
                                if (name == 'draw' && player.hasSkill('wmsj_二维')) return false;
                                if (name == 'useCard' && player.hasSkill('wmsj_三维')) return false;
                                if (name == 'recover' && player.hasSkill('wmsj_四维')) return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                const name = trigger.name;
                                switch (name) {
                                    case 'draw':
                                        player.addSkill('wmsj_二维');
                                        break;
                                    case 'useCard':
                                        player.addSkill('wmsj_三维');
                                        break;
                                    case 'recover':
                                        player.addSkill('wmsj_四维');
                                        break;
                                }
                                const skills = player.getSkills(null, false, false);
                                const sk = ['wmsj_二维', 'wmsj_三维', 'wmsj_四维'];
                                if (skills.filter((s) => sk.includes(s)).length == 3) {
                                    player.addSkill('wmsj_五维');
                                }
                            },
                        },

                        //零维：锁定技。①游戏开始时，你选择一名角色减少其体力上限+10的体力上限，然后选择一名角色对其使用五张随机属性的实体【杀】。②每轮开始时，所有其他角色流失999点体力。
                        wmsj_零维: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            trigger: {
                                global: ['phaseBefore', 'roundStart'],
                                player: 'enterGame',
                            },
                            filter(event, player, name) {
                                return event.name != 'phase' || name == 'roundStart' || game.phaseNumber == 0;
                            },
                            async content(event, trigger, player) {
                                const name = event.triggername;
                                if (name != 'roundStart') {
                                    const result = await player
                                        .chooseTarget(lib.filter.notMe)
                                        .set('prompt', '〖零维〗')
                                        .set('prompt2', '选择一名角色减少体力上限')
                                        .set('ai', (target) => {
                                            return get.damageEffect(target, _status.event.player, _status.event.player);
                                        })
                                        .forResult();
                                    if (result.bool && result.targets) {
                                        player.line(result.targets);
                                        result.targets[0].loseMaxHp(result.targets[0].maxHp + 10);
                                    }
                                    const result1 = await player
                                        .chooseTarget(lib.filter.notMe)
                                        .set('prompt', '〖零维〗')
                                        .set('prompt2', '选择一名角色对其使用五张【杀】')
                                        .set('ai', (target) => {
                                            return get.damageEffect(target, _status.event.player, _status.event.player);
                                        })
                                        .forResult();
                                    if (result1.bool && result1.targets) {
                                        player.line(result1.targets);
                                        const npc = result1.targets[0];
                                        const list = [];
                                        list.addArray(lib.linked);
                                        var numx = 5;
                                        while (numx--) {
                                            var nature = list.randomGet();
                                            var card = game.createCard({ name: 'sha', nature: nature });
                                            await player.useCard(card, npc, false);
                                            await game.cardsGotoSpecial(card);
                                        }
                                    }
                                } else {
                                    const targets = game.filterPlayer((c) => c != player);
                                    for (const npc of targets) {
                                        await npc.loseHp(999);
                                    }
                                }
                            },
                        },

                        //二维：锁定技，准备阶段，你选择一名其他角色跳过其下回合的出牌阶段和摸牌阶段。
                        wmsj_二维: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget(lib.filter.notMe)
                                    .set('prompt', '〖二维〗')
                                    .set('prompt2', '选择一名角色跳过摸牌和出牌阶段')
                                    .set('ai', (target) => {
                                        return get.damageEffect(target, _status.event.player, _status.event.player);
                                    })
                                    .forResult();
                                if (result.bool && result.targets) {
                                    player.line(result.targets);
                                    result.targets[0].skip('phaseDraw');
                                    result.targets[0].skip('phaseUse');
                                }
                            },
                        },

                        //三维：锁定技，其他角色获得牌时，改为你获得之。
                        wmsj_三维: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            trigger: {
                                global: ['gainBefore'],
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            async content(event, trigger, player) {
                                trigger.player = player;
                            },
                        },

                        //四维：锁定技，其他角色回复体力和增加体力上限后，你执行相同操作；你对其他角色造成伤害前，改为造成X点神圣伤害并摸等量的牌（X为对方体力值与护甲之和+10）；你使用的牌无次数限制且不可响应。
                        wmsj_四维: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            firstDo: true,
                            trigger: {
                                global: ['recoverAfter', 'gainMaxHpAfter'],
                                source: ['damageBefore', 'damageBegin4'],
                                player: ['useCard'],
                            },
                            filter(event, player, name) {
                                if (['recoverAfter', 'gainMaxHpAfter', 'damageBefore', 'damageBegin4'].includes(name) && event.player == player) {
                                    return false;
                                }
                                return true;
                            },
                            async content(event, trigger, player) {
                                const name = event.triggername;
                                switch (name) {
                                    case 'useCard':
                                        trigger.directHit.addArray(game.players);
                                        break;
                                    case 'damageBefore':
                                        const num = trigger.player.hp + trigger.player.hujia + 10;
                                        trigger.num = num;
                                        trigger._triggered = null;
                                        await player.draw(Math.min(20, num));
                                        break;
                                    case 'gainMaxHpAfter':
                                        await player.gainMaxHp(trigger.num);
                                        break;
                                    case 'recoverAfter':
                                        await player.recover(trigger.num);
                                        break;
                                    case 'damageBegin4':
                                        trigger.untrigger();
                                        break;
                                }
                            },
                            mod: {
                                cardUsableTarget: () => true,
                            },
                        },

                        //五维：锁定技，其他角色进入濒死前立即死亡；你获得牌后，若手牌数达到10则你获得〖改变未来〗。
                        wmsj_五维: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            derivation: ['wmsj_改变未来'],
                            trigger: {
                                player: ['gainAfter'],
                                global: ['dyingBefore'],
                            },
                            filter(event, player, name) {
                                if (name == 'gainAfter' && player.hasSkill('wmsj_改变未来')) return false;
                                if (name == 'dyingBefore' && event.player == player) return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                const name = event.triggername;
                                if (name == 'dyingBefore') {
                                    trigger.player.die()._triggered = null;
                                } else if (player.countCards('h') >= 10) {
                                    player.addSkill('wmsj_改变未来');
                                }
                            },
                        },

                        //改变未来：锁定技，其他角色获得牌后，若手牌数超过10则其立即神圣死亡；回合开始时，你可以选择一名其他角色翻面并废除所有装备栏；游戏开始时，你选择一名其他角色失去所有技能。
                        wmsj_改变未来: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            trigger: {
                                player: ['phaseBegin', 'enterGame'],
                                global: ['gainEnd', 'phaseBefore'],
                            },
                            filter(event, player, name) {
                                if (['phaseBegin', 'enterGame'].includes(name)) return true;
                                if (name == 'gainEnd' && event.player != player) return true;
                                if (name == 'phaseBefore' && game.phaseNumber == 0) return true;
                                return false;
                            },
                            async content(event, trigger, player) {
                                const name = event.triggername;
                                if (['phaseBefore', 'enterGame'].includes(name)) {
                                    var result = await player
                                        .chooseTarget(lib.filter.notMe)
                                        .set('prompt', '〖改变未来〗')
                                        .set('prompt2', '选择一名角色失去所有技能')
                                        .set('ai', (target) => {
                                            return get.damageEffect(target, _status.event.player, _status.event.player);
                                        })
                                        .forResult();
                                    if (result.bool && result.targets) {
                                        player.line(result.targets);
                                        result.targets[0].skills = [];
                                    }
                                } else if (name == 'phaseBegin') {
                                    var result = await player
                                        .chooseTarget(lib.filter.notMe)
                                        .set('prompt', '〖改变未来〗')
                                        .set('prompt2', '选择一名角色翻面并废除装备栏')
                                        .set('ai', (target) => {
                                            return get.damageEffect(target, _status.event.player, _status.event.player);
                                        })
                                        .forResult();
                                    if (result.bool && result.targets) {
                                        player.line(result.targets);
                                        const npc = result.targets[0];
                                        await npc.turnOver();
                                        const disables = [];
                                        for (let i = 1; i <= 5; i++) {
                                            for (let j = 0; j < npc.countEnabledSlot(i); j++) {
                                                disables.push(i);
                                            }
                                        }
                                        if (disables.length > 0) {
                                            await npc.disableEquip(disables);
                                        }
                                    }
                                } else if (name == 'gainEnd' && trigger.player.countCards('h') >= 10) {
                                    trigger.player.die()._triggered = null;
                                }
                            },
                        },

                        //准点下班：锁定技，你的第五个回合结束后，你的阵营立即获胜。
                        wmsj_准点下班: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            trigger: {
                                player: ['phaseAfter'],
                            },
                            filter(event, player) {
                                return player.phaseNumber >= 5;
                            },
                            async content(event, trigger, player) {
                                var winners = player.getFriends();
                                game.over(player == game.me || winners.includes(game.me));
                            },
                        },

                        //王之力：锁定技，出牌阶段开始时，你选择至多两名其他角色，其需要交给你两张牌然后你回复1点体力，否则你摸三张牌然后其失去1点体力。
                        wmsj_王之力: {
                            forced: true,
                            priority: 20,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer((c) => c.isIn() && c != player);
                            },
                            async content(event, trigger, player) {
                                var result = await player
                                    .chooseTarget([1, 2], lib.filter.notMe)
                                    .set('prompt', '〖王之力〗')
                                    .set('prompt2', '选择至多两名角色')
                                    .set('ai', (target) => {
                                        return get.damageEffect(target, _status.event.player, _status.event.player);
                                    })
                                    .forResult();
                                if (result.bool && result.targets) {
                                    player.line(result.targets);
                                    const targets = result.targets;
                                    for (const target of targets) {
                                        var result0 = await target
                                            .chooseCard('he', 2)
                                            .set('prompt', '〖王之力〗')
                                            .set('prompt2', `交给${get.translation(player)}两张牌并令其回复1点体力，否则其摸三张牌然后你失去1点体力`)
                                            .set('ai', function (card) {
                                                if (
                                                    get.effect(
                                                        target,
                                                        {
                                                            name: 'losehp',
                                                        },
                                                        target,
                                                        target
                                                    ) >= 0
                                                )
                                                    return 0;
                                                else return 8 - get.value(card);
                                            })
                                            .forResult();
                                        if (result0.bool) {
                                            await player.gain(result0.cards, target, 'giveAuto');
                                            await player.recover();
                                        } else {
                                            await player.draw(3);
                                            await target.loseHp();
                                        }
                                    }
                                }
                            },
                        },

                        //零之镇魂曲：持恒技。①你的【杀】可以额外指定一名角色。②你造成伤害后获得1个“零”，你的手牌上限+X（X为“零”数量）。③回合开始时，你可以弃置3个“零”将体力值调整为当前已损失体力值。
                        wmsj_零之镇魂曲: {
                            priority: 35,
                            persevereSkill: true,
                            direct: true,
                            marktext: '零',
                            intro: {
                                name: '零',
                                content: '当前拥有#个零',
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            async content(event, trigger, player) {
                                player.addMark('wmsj_零之镇魂曲', 1);
                            },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha') return (range[1] += 1);
                                },
                                maxHandcardBase(player, num) {
                                    return num + player.countMark('wmsj_零之镇魂曲');
                                },
                            },
                            group: ['wmsj_零之镇魂曲_1'],
                            subSkill: {
                                1: {
                                    priority: 25,
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return player.countMark('wmsj_零之镇魂曲') >= 3;
                                    },
                                    async cost(event, trigger, player) {
                                        const dhp = player.getDamagedHp();
                                        const next = player.chooseBool();
                                        next.set('prompt', '〖零之镇魂曲〗');
                                        next.set('prompt2', `是否弃置3个“零”，令将体力调整为${dhp}`);
                                        next.set('ai', () => {
                                            var player = _status.event.player;
                                            if (player.getDamagedHp() > player.getHp()) return 1;
                                            return 0;
                                        });
                                        event.result = await next.forResult();
                                    },
                                    async content(event, trigger, player) {
                                        const dhp = player.getDamagedHp();
                                        const num = dhp - player.getHp();
                                        player.removeMark('wmsj_零之镇魂曲', 3);
                                        await player.changeHp(num);
                                    },
                                },
                            },
                        },

                        //Geass：出牌阶段限三次，你可以选择两名其他角色A和B，A强制对B使用手牌中的随机一张伤害牌，若无伤害牌则其所有非锁定技失效并失去1点体力。
                        wmsj_geass: {
                            enable: 'phaseUse',
                            usable: 3,
                            filterTarget: lib.filter.notMe,
                            targetprompt: ['使用牌', '被使用'],
                            selectTarget: 2,
                            multitarget: true,
                            async content(event, trigger, player) {
                                const a = event.targets[0];
                                const b = event.targets[1];
                                const card = a.getCards('h', (c) => get.tag(c, 'damage')).randomGets(1);
                                if (card.length) {
                                    await a.useCard(card, b, 'noai');
                                } else {
                                    a.addSkill('fengyin');
                                    await a.loseHp();
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -1,
                                },
                                expose: 0.4,
                                threaten: 3,
                            },
                        },

                        //神谕执棋：锁定技，准备阶段，你观看牌堆顶X张牌（X为存活角色数）并将其以任意顺序置于牌堆顶或牌堆底，然后你可以弃置两张牌并获得一名其他角色至多两张牌，若其牌数不足则改为你摸三张牌。
                        wmsj_神谕执棋: {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            priority: 33,
                            async content(event, trigger, player) {
                                var num = game.filterPlayer().length;
                                const result = await player.chooseToGuanxing(num).set('prompt', '〖神谕执棋〗：点击将牌移动到牌堆顶或牌堆底').forResult();
                                if (!result.bool || !result.moved[0].length) {
                                    player.addTempSkill('guanxing_fail');
                                }
                                if (player.countCards('he') < 2) return;
                                const result0 = await player
                                    .chooseCardTarget({
                                        prompt: '〖神谕执棋〗',
                                        prompt2: '弃置两张牌并选择一名角色',
                                        filterTarget: lib.filter.notMe,
                                        filterCard: true,
                                        selectCard: 2,
                                        position: 'he',
                                        ai1(card) {
                                            return 7 - get.value(card);
                                        },
                                        ai2(target) {
                                            return get.effect(target, { name: 'shunshou_copy' }, get.player(), get.player());
                                        },
                                    })
                                    .forResult();
                                if (result0.bool) {
                                    const target = result0.targets[0];
                                    const cards = result0.cards;
                                    await player.discard(cards);
                                    if (target.countCards('hej') > 0) {
                                        await player.gainPlayerCard(target, 'hej', [1, 2], 'visibleMove');
                                    } else {
                                        await player.draw(3);
                                    }
                                }
                            },
                        },

                        //王子：游戏开始时，若场上存在“C.C”且你和其为同一阵营，则你的阵营获得胜利。
                        wmsj_王子: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            priority: 52,
                            filter(event, player) {
                                if (game.findPlayer((c) => c.name == 'wmsj_CC' && player.getFriends().includes(c))) {
                                    return event.name != 'phase' || game.phaseNumber == 0;
                                }
                                return false;
                            },
                            content() {
                                var winners = player.getFriends();
                                game.over(player == game.me || winners.includes(game.me));
                            },
                        },

                        //不死契约：锁定技，每回合限一次，当你进入濒死时，你将体力回复至1点，然后选择一名角色执行下列一项：1.增加1点体力上限并回复1点体力；2.摸三张牌。
                        wmsj_不死契约: {
                            trigger: { player: 'dying' },
                            forced: true,
                            priority: 52,
                            async content(event, trigger, player) {
                                await player.recoverTo(1);
                                var result = await player
                                    .chooseTarget()
                                    .set('prompt', '〖不死契约〗')
                                    .set('prompt2', '选择一名角色回复体力或摸牌')
                                    .set('ai', (target) => {
                                        return get.attitude(player, target);
                                    })
                                    .forResult();
                                if (result.bool && result.targets) {
                                    player.line(result.targets);
                                    const target = result.targets[0];
                                    const str1 = '增加1点体力上限并回复1点体力';
                                    const str2 = '摸三张牌';
                                    const choiceList = [str1, str2];
                                    const choices = ['选项一', '选项二'];
                                    const { control } = await player
                                        .chooseControl()
                                        .set('controls', choices)
                                        .set('choiceList', choiceList)
                                        .set('prompt', '〖不死契约〗')
                                        .set('prompt2', `为${get.translation(target)}选择其中一项`)
                                        .forResult();
                                    if (control == '选项一') {
                                        await target.gainMaxHp();
                                        await target.recover();
                                    } else {
                                        await target.draw(3);
                                    }
                                }
                            },
                        },

                        //命运编织：出牌阶段限一次，你可以进行一次判定，若结果为：红色，你选择一名其他角色直到其回合结束不能使用或打出红色手牌；黑色，你摸三张牌并选择一名其他角色失去2点体力。
                        wmsj_命运编织: {
                            enable: 'phaseUse',
                            usable: 1,
                            async content(event, trigger, player) {
                                const result = await player.judge().forResult();
                                if (result?.color == 'red') {
                                    var result0 = await player
                                        .chooseTarget(lib.filter.notMe)
                                        .set('prompt', '〖命运编织〗')
                                        .set('prompt2', '选择一名角色不能使用或打出红色牌')
                                        .set('ai', (target) => {
                                            return -get.attitude(player, target);
                                        })
                                        .forResult();
                                    if (result0.bool) {
                                        await result0.targets[0].addTempSkills('wmsj_cc_feng', { player: 'phaseAfter' });
                                    }
                                }
                                if (result?.color == 'black') {
                                    await player.draw(3);
                                    var result1 = await player
                                        .chooseTarget(lib.filter.notMe)
                                        .set('prompt', '〖命运编织〗')
                                        .set('prompt2', '选择一名角色失去2点体力')
                                        .set('ai', (target) => {
                                            return -get.attitude(player, target);
                                        })
                                        .forResult();
                                    if (result1.bool) {
                                        await result1.targets[0].loseHp(2);
                                    }
                                }
                            },
                            ai: {
                                order: 9.9,
                                result: {
                                    player: 52,
                                },
                                threaten: 1.5,
                            },
                        },
                        wmsj_cc_feng: {
                            charlotte: true,
                            mark: true,
                            marktext: '封',
                            intro: {
                                name: '命运编织',
                                content: '不能使用或打出红色手牌',
                            },
                            mod: {
                                cardEnabled2(card, player) {
                                    if (get.color(card, player) == 'red' && get.position(card) == 'h') return false;
                                },
                                cardEnabled(card, player) {
                                    if (get.color(card, player) == 'red' && get.position(card) == 'h') return false;
                                },
                                cardRespondable(card, player) {
                                    if (get.color(card, player) == 'red' && get.position(card) == 'h') return false;
                                },
                                cardSavable(card, player) {
                                    if (get.color(card, player) == 'red' && get.position(card) == 'h') return false;
                                },
                            },
                        },

                        //魅惑的Geass：转换技，锁定技，你成为其他角色伤害牌目标后，阳：你获得对方一张牌并令其失去1点体力；阴：你令此牌对你无效并摸一张牌。
                        wmsj_魅惑: {
                            forced: true,
                            zhuanhuanji: true,
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (!storage) return '阳';
                                    else return '阴';
                                },
                            },
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!get.tag(event.card, 'damage')) return false;
                                if (event.player == event.target) return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                const storage = player.storage[event.name];
                                const npc = trigger.player;
                                player.changeZhuanhuanji(event.name);
                                if (!storage) {
                                    if (npc.countCards('hej')) {
                                        await player.gainPlayerCard(npc, 'hej', 'visibleMove');
                                    }
                                    await npc.loseHp();
                                } else {
                                    trigger.getParent().excluded.add(player);
                                    game.log(trigger.card, '对', player, '无效');
                                    await player.draw();
                                }
                            },
                        },

                        //公主：游戏开始时，若场上存在“鲁路修”且你和其为同一阵营，则你的阵营获得胜利。
                        wmsj_公主: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            priority: 52,
                            filter(event, player) {
                                if (game.findPlayer((c) => c.name == 'wmsj_鲁路修' && player.getFriends().includes(c))) {
                                    return event.name != 'phase' || game.phaseNumber == 0;
                                }
                                return false;
                            },
                            content() {
                                var winners = player.getFriends();
                                game.over(player == game.me || winners.includes(game.me));
                            },
                        },

                        wmsj_BGM: {
                            trigger: { player: 'phaseBefore' },
                            charlotte: true,
                            forced: true,
                            unique: true,
                            silent: true,
                            filter(event, player) {
                                let bool = lib.config.extension_完美世界_角色BGM;
                                return !player.BGM && bool;
                            },
                            content() {
                                player.BGM = true;
                                path = lib.assetURL + 'extension/完美世界/audio/music/BGM_黑石瞳.mp3';
                                ui.backgroundMusic.src = path;
                                ui.backgroundMusic.addEventListener('ended', function () {
                                    ui.backgroundMusic.src = path;
                                });
                            },
                        },

                        //无我极境：游戏开始时，你摸30张牌，并使自己的攻击范围增加无限大，伤害改为null（会根据目标的血量和护盾变化），然后你令全场进入自在极境领域，除你以外的其他角色无法使用牌，技能全部失效，你不会死亡，使用牌没有次数限制。
                        wmsj_无我极境: {
                            trigger: {
                                global: ['phaseBegin', 'phaseAfter', 'gameStart'],
                                player: ['dieBefore'],
                                source: ['damageBefore'],
                            },
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            skillAnimation: true,
                            firstDo: true,
                            silent: true,
                            filter(event, player, name) {
                                if (!['damage', 'die'].includes(event.name)) return true;
                                return _status.自在极境;
                            },
                            async content(event, trigger, player) {
                                const name = event.triggername;
                                if (name == 'damageBefore') {
                                    var num = Math.max(0, trigger.player.hujia);
                                    num += trigger.player.getHp();
                                    game.log('伤害值：', num);
                                    trigger.num = num;
                                } else if (name == 'dieBefore') {
                                    trigger.cancel();
                                } else {
                                    _status.无我极境 ??= [];
                                    _status.无我极境.add(player);
                                    const eny = game.players.filter((c) => c != player);
                                    for (const npc of eny) {
                                        npc.storage.skill_blocker ??= [];
                                        npc.storage.skill_blocker.add('wmsj_无我极境');
                                    }
                                    if (name == 'gameStart') {
                                        ui.background.style.backgroundImage = `url(extension/完美世界/images/background/自在极意.jpg)`;
                                        _status.自在极境 = true;
                                        player.logSkill('wmsj_无我极境');
                                        await player.draw(30);
                                    }
                                }
                            },
                            skillBlocker(skill, player) {
                                if (_status.无我极境 && !_status.无我极境.includes(player) && _status.自在极境) {
                                    const info = lib.skill[skill];
                                    return info && !info.kangxing;
                                }
                            },
                            mod: {
                                attackRange(player, num) {
                                    if (_status.自在极境) return Infinity;
                                },
                                cardUsable(card, player) {
                                    if (_status.自在极境) return true;
                                },
                            },
                        },
                        _wmsj_无我极境: {
                            charlotte: true,
                            mod: {
                                cardEnabled2(card, player) {
                                    if (_status.无我极境 && !_status.无我极境.includes(player) && _status.自在极境) {
                                        return false;
                                    }
                                },
                                cardEnabled(card, player) {
                                    if (_status.无我极境 && !_status.无我极境.includes(player) && _status.自在极境) {
                                        return false;
                                    }
                                },
                                cardSavable(card, player) {
                                    if (_status.无我极境 && !_status.无我极境.includes(player) && _status.自在极境) {
                                        return false;
                                    }
                                },
                            },
                        },
                        _wmsj_自在极境: {
                            trigger: {
                                global: ['logSkillBegin', 'useSkillBegin'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            unique: true,
                            silent: true,
                            firstDo: true,
                            fixed: true,
                            priority: Infinity,
                            filter(event, player, name) {
                                return event.player != player && _status.无我极境?.includes(player) && _status.自在极境 && lib.skill[event.skill] && !lib.skill.global.includes(event.skill);
                            },
                            async content(event, trigger, player) {
                                const name = trigger.skill;
                                const info = lib.skill[name];
                                const npc = trigger.player;
                                if (trigger.name == 'logSkillBegin') {
                                    const arr = trigger.parent.next;
                                    for (let i = arr.length - 1; i >= 0; i--) {
                                        if (arr[i].name === name) {
                                            arr.splice(i, 1);
                                        }
                                    }
                                } else {
                                    const stat = npc.stat;
                                    const statskill = stat[stat.length - 1].skill;
                                    statskill[name] = Math.max(Number(statskill[name]), 0) + 1;
                                    if (info.sourceSkill) {
                                        statskill[info.sourceSkill] = Math.max(Number(statskill[info.sourceSkill]), 0) + 1;
                                    }
                                    trigger.cancel();
                                }
                                if (info.limited || info.juexingji) {
                                    trigger.player.awakenSkill(name);
                                }
                            },
                        },

                        //真·自在极意：锁定技，你的技能不会失去或失效；你防止翻面、体力和体力上限减少；你不能成为其他角色使用牌的目标；你死亡前取消并令一名角色失去所有技能。
                        wmsj_自在极意: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            trigger: {
                                player: ['loseMaxHpBefore', 'loseHpBefore', 'damagebegin4', 'changeHpBegin', 'turnOverBefore', 'dieBefore'],
                            },
                            filter(event, player, name) {
                                if (name == 'turnOverBefore' && player.isTurnedOver()) return false;
                                if (name == 'changeHpBegin' && event.num >= 0) return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                                if (trigger.name == 'die') {
                                    const result = await player
                                        .chooseTarget(lib.filter.notMe)
                                        .set('prompt', '〖真·自在极意〗')
                                        .set('prompt2', '选择一名角色失去所有技能')
                                        .set('ai', (target) => {
                                            return -get.attitude(get.player(), target);
                                        })
                                        .forResult();
                                    if (result.targets?.length) {
                                        player.line(result.targets);
                                        result.targets[0].skills = [];
                                    }
                                }
                            },
                            mod: {
                                targetEnabled: function (card, player, target) {
                                    if (player != target) {
                                        return false;
                                    }
                                },
                            },
                        },

                        //锻体：你可以将一张红色牌当火【杀】使用或打出。
                        wmsj_锻体: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) {
                                    return true;
                                }
                                return get.color(card) == 'red';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                                nature: 'fire',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) {
                                        return false;
                                    }
                                } else {
                                    if (
                                        !player.countCards('hes', {
                                            color: 'red',
                                        })
                                    ) {
                                        return false;
                                    }
                                }
                            },
                            prompt: '将一张红色牌当火杀使用或打出',
                            check(card) {
                                const val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') {
                                    return 1 / Math.max(0.1, val);
                                }
                                return 5 - val;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('hes')) {
                                            return false;
                                        }
                                    } else {
                                        if (
                                            !player.countCards('hes', {
                                                color: 'red',
                                            })
                                        ) {
                                            return false;
                                        }
                                    }
                                },
                                respondSha: true,
                            },
                        },

                        //仙豆：你可以将一张黑色牌当【桃】使用。
                        wmsj_仙豆: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'tao',
                            },
                            viewAsFilter(player) {
                                if (
                                    !player.countCards('hes', {
                                        color: 'black',
                                    })
                                )
                                    return false;
                            },
                            prompt: '将一张黑色牌当桃使用',
                            selectCard: 1,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                tag: {
                                    recover: 1,
                                    save: 1,
                                },
                            },
                        },

                        //瞬移：你可以将一张黑色牌当【闪】使用或打出。
                        wmsj_瞬移: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (get.name(card) != 'shan' && get.color(card) != 'black') {
                                        return;
                                    }
                                    const cards = player.getCards('hes', (card) => get.name(card) == 'shan' || get.color(card) == 'black');
                                    cards.sort((a, b) => {
                                        return (get.name(b) == 'shan' ? 1 : 2) - (get.name(a) == 'shan' ? 1 : 2);
                                    });
                                    const geti = () => {
                                        if (cards.includes(card)) {
                                            cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    if (get.name(card) == 'shan') {
                                        return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                    }
                                    return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
                                },
                                aiUseful() {
                                    return lib.skill.wmsj_瞬移.mod.aiValue.apply(this, arguments);
                                },
                            },
                            locked: false,
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (
                                    !player.countCards('hs', {
                                        color: 'black',
                                    })
                                ) {
                                    return false;
                                }
                            },
                            position: 'hes',
                            prompt: '将一张黑色牌当闪使用或打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                order: 3,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (
                                        !player.countCards('hes', {
                                            color: 'black',
                                        })
                                    ) {
                                        return false;
                                    }
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') && current < 0) {
                                            return 0.6;
                                        }
                                    },
                                },
                            },
                        },
                        //武心：你可以将一张红色牌当【无懈可击】使用。
                        wmsj_武心: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (get.name(card) != 'wuxie' && get.color(card) != 'red') {
                                        return;
                                    }
                                    const cards = player.getCards('hes', function (card) {
                                        return get.name(card) == 'wuxie' || get.color(card) == 'red';
                                    });
                                    cards.sort(function (a, b) {
                                        return (get.name(b) == 'wuxie' ? 1 : 2) - (get.name(a) == 'wuxie' ? 1 : 2);
                                    });
                                    const geti = function () {
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    if (get.name(card) == 'wuxie') {
                                        return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                    }
                                    return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
                                },
                                aiUseful() {
                                    return lib.skill.wmsj_武心.mod.aiValue.apply(this, arguments);
                                },
                            },
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            locked: false,
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            viewAsFilter(player) {
                                return (
                                    player.countCards('hes', {
                                        color: 'red',
                                    }) > 0
                                );
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            position: 'hes',
                            prompt: '将一张红色牌当无懈可击使用',
                            check(card) {
                                const tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') {
                                    return -1;
                                }
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                        },

                        //聚元：锁定技，你的手牌数不小于六张。
                        wmsj_聚元: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            trigger: {
                                player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                if (event.getl && !event.getl(player)) {
                                    return false;
                                }
                                return player.countCards('h') < 6;
                            },
                            content() {
                                player.drawTo(6);
                            },
                            ai: {
                                noh: true,
                                freeSha: true,
                                freeShan: true,
                                skillTagFilter(player, tag) {
                                    if (player.countCards('h') > 6) {
                                        return false;
                                    }
                                },
                            },
                        },

                        //筋斗：锁定技，你受到大于1点的伤害时，你摸一张牌并将此伤害削减为1点。
                        wmsj_筋斗: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.num > 1;
                            },
                            async content(event, trigger, player) {
                                trigger.num = 1;
                                await player.draw();
                            },
                        },

                        //极意：出牌阶段，你可以选择一名其他角色所有技能失效并神圣死亡。
                        wmsj_极意: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            enable: 'phaseUse',
                            filterTarget: lib.filter.notMe,
                            selectTarget: 1,
                            async content(event, trigger, player) {
                                const npc = event.target;
                                npc.disableSkill('wmsj_极意', lib.character[npc.name][3]);
                                npc.die()._triggered = null;
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -1,
                                },
                            },
                        },

                        //神之极境：每轮开始时，你选择任意名其他角色获得其所有技能。
                        wmsj_神之极境: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget(lib.filter.notMe, [1, Infinity])
                                    .set('prompt', '〖神之极境〗')
                                    .set('prompt2', '选择任意名其他角色获得其所有技能')
                                    .set('ai', () => true)
                                    .forResult();
                                if (result.bool && result.targets) {
                                    const targets = result.targets;
                                    player.line(targets);
                                    for (const target of targets) {
                                        var skills = lib.character[target.name][3];
                                        await player.addSkills(skills);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                result: {
                                    player: 1,
                                },
                            },
                        },

                        //完美英雄：持恒技，你的摸牌阶段摸牌数+3；你可使用【杀】的次数+2；你使用【杀】时，额外结算一次。
                        wmsj_完美英雄: {
                            priority: 35,
                            persevereSkill: true,
                            direct: true,
                            trigger: {
                                player: ['phaseDrawBegin2', 'useCard'],
                            },
                            filter(event, player, name) {
                                if (name == 'phaseDrawBegin2') return !event.numFixed;
                                if (name == 'useCard') return event.card.name == 'sha';
                                return false;
                            },
                            async content(event, trigger, player) {
                                const name = event.triggername;
                                if (name == 'useCard') {
                                    trigger.effectCount += 1;
                                } else {
                                    trigger.num += 3;
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 2;
                                },
                            },
                        },

                        //完美攻击：锁定技，你造成伤害后摸两张牌并获得1个“完美”；准备阶段，你可弃置5个“完美”令至多两名其他角色失去2点体力。
                        wmsj_完美攻击: {
                            forced: true,
                            priority: 33,
                            marktext: '完美',
                            intro: {
                                name: '完美',
                                content: '当前拥有#个完美标记',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (event.name != 'damage' && player.countMark('wmsj_完美攻击') < 5) {
                                    return false;
                                }
                                return true;
                            },
                            async content(event, trigger, player) {
                                if (trigger.name == 'damage') {
                                    player.addMark('wmsj_完美攻击', 1);
                                } else {
                                    const result = await player
                                        .chooseTarget(lib.filter.notMe, [1, 2])
                                        .set('prompt', '〖完美攻击〗')
                                        .set('prompt2', '弃置5个完美令至多两名其他角色失去2点体力')
                                        .set('ai', (target) => -get.attitude(get.player(), target))
                                        .forResult();
                                    if (result.bool && result.targets) {
                                        const targets = result.targets;
                                        player.line(targets);
                                        player.removeMark('wmsj_完美攻击', 5);
                                        for (const target of targets) {
                                            await target.loseHp(2);
                                        }
                                    }
                                }
                            },
                        },

                        //完美防御：锁定技，你受到伤害后，进行一次判定，若结果点数为1至5则回复此伤害值的体力。
                        wmsj_完美防御: {
                            forced: true,
                            priority: 53,
                            trigger: {
                                player: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            async content(event, trigger, player) {
                                const num = trigger.num;
                                const next = player.judge((card) => {
                                    if (get.number(card) <= 5 && get.number(card) >= 1) {
                                        return 5;
                                    }
                                    return 0;
                                });
                                next.judge2 = (result) => {
                                    if (result?.bool === true) {
                                        return true;
                                    }
                                    return false;
                                };
                                const result = await next.forResult();
                                if (result?.bool) {
                                    await player.recover(num);
                                }
                            },
                        },

                        //女王威严：持恒技，准备阶段，你获得任意名其他角色一张牌；你翻面时防止之；你使用的牌额外结算一次。
                        wmsj_女王威严: {
                            priority: 35,
                            persevereSkill: true,
                            silent: true,
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'turnOverBefore', 'useCard'],
                            },
                            filter(event, player) {
                                if (event.name == 'turnOver') return !player.isTurnedOver();
                                if (event.name != 'useCard') return true;
                                if (!event.targets || !event.card) return false;
                                if (event.card && event.card.name == 'wuxie') return false;
                                var type = get.type(event.card);
                                if (type != 'basic' && type != 'trick') return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                if (trigger.name == 'turnOver') {
                                    trigger.cancel();
                                    return;
                                }
                                if (trigger.name == 'useCard') {
                                    trigger.effectCount += 1;
                                    game.log(trigger.card, '额外结算一次');
                                    return;
                                }
                                const result = await player
                                    .chooseTarget(lib.filter.notMe, [1, Infinity])
                                    .set('prompt', '女王威严')
                                    .set('prompt2', '获得任意名角色一张牌')
                                    .set('ai', (target) => {
                                        return get.effect(target, { name: 'shunshou_copy' }, get.player(), get.player());
                                    })
                                    .forResult();
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    var npc = result.targets[0];
                                    player.logSkill('wmsj_女王威严', npc);
                                    await player.gainPlayerCard(npc, 'hej', 'visibleMove');
                                }
                            },
                        },

                        //时滞领域：持恒技。①你使用牌时获得1个“时间”；你的手牌上限+X（X为“时间”数量）；你的“时间”数量达到如下数量时你获得对应效果：{1个：造成的伤害+1；3个：回合开始时回复3点体力；5个：摸牌阶段摸牌数+4；7个：出牌阶段开始时，对一名其他角色造成3点伤害；9个：回合结束时，弃置一名其他角色五张牌}。②游戏开始时，你令全场进入时滞领域，每轮开始时，其他角色随机弃置一半（向上取整）的牌。
                        wmsj_时滞领域: {
                            persevereSkill: true,
                            priority: 65,
                            forced: true,
                            marktext: '时间',
                            intro: {
                                name: '时间',
                                content: 'mark',
                            },
                            trigger: {
                                global: ['phaseBefore'],
                                player: ['useCard', 'phaseBegin', 'phaseDrawBegin2', 'phaseUseBegjn', 'phaseEnd', 'enterGame'],
                                source: ['damageBegin1'],
                            },
                            filter(event, player, name) {
                                if (name == 'useCard' || name == 'enterGame') return true;
                                if (name == 'damageBegin1') return player.countMark('wmsj_时滞领域') > 0;
                                if (name == 'phaseBegin') return player.countMark('wmsj_时滞领域') > 2;
                                if (name == 'phaseDrawBegin2') return !event.numFixed && player.countMark('wmsj_时滞领域') > 4;
                                if (name == 'phaseUseBegin') return player.countMark('wmsj_时滞领域') > 6;
                                if (name == 'phaseEnd') return player.countMark('wmsj_时滞领域') > 8;
                                if (name == 'phaseBefore') return game.phaseNumber == 0;
                                return false;
                            },
                            async content(event, trigger, player) {
                                const name = event.triggername;
                                switch (name) {
                                    case 'useCard':
                                        player.addMark('wmsj_时滞领域', 1);
                                        break;
                                    case 'damageBegin1':
                                        trigger.num++;
                                        break;
                                    case 'phaseBegin':
                                        await player.recover(3);
                                        break;
                                    case 'phaseDrawBegin2':
                                        trigger.num += 4;
                                        break;
                                    case 'phaseUseBegin':
                                        const result = await player
                                            .chooseTarget(lib.filter.notMe)
                                            .set('prompt', '〖时滞领域〗')
                                            .set('prompt2', '对一名角色造成1点伤害')
                                            .set('ai', (target) => -get.attitude(get.player(), target))
                                            .forResult();
                                        if (result?.bool && result?.targets) {
                                            const target = result.targets[0];
                                            player.line(target);
                                            await target.damage();
                                        }
                                        break;
                                    case 'phaseEnd':
                                        const result0 = await player
                                            .chooseTarget(lib.filter.notMe)
                                            .set('prompt', '女王威严')
                                            .set('prompt2', '弃置任意名其他角色至多五张牌')
                                            .set('ai', (target) => {
                                                return get.effect(target, { name: 'guohe_copy' }, get.player(), get.player());
                                            })
                                            .forResult();
                                        if (result0?.bool && result0.targets) {
                                            player.line(result0.targets);
                                            var npc = result.targets[0];
                                            await player.discardPlayerCard(npc, [1, 5]).set('ai', lib.card.guohe.ai.button);
                                        }
                                        break;
                                    default:
                                        player.logSkill('wmsj_时滞领域log');
                                        _status.时滞领域 ??= [];
                                        _status.时滞领域.add(player);
                                        ui.background.style.backgroundImage = `url(extension/完美世界/images/background/时滞领域.jpg)`;
                                        break;
                                }
                            },
                        },
                        wmsj_时滞领域log: {
                            charlotte: true,
                            skillAnimation: true,
                        },
                        _wmsj_时滞领域: {
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                return _status.时滞领域 && !_status.时滞领域.includes(player);
                            },
                            async content(event, trigger, player) {
                                const num = Math.ceil(player.countCards('he') / 2);
                                const cards = player.getCards('he').randomGets(num);
                                if (cards.length) {
                                    await player.discard(cards);
                                }
                            },
                        },

                        //制裁·神诀：锁定技，当你的“时间”数量达到15时，你选择任意名其他角色非锁定技失效并受到5点伤害。
                        wmsj_制裁: {
                            trigger: {
                                player: 'wmsj_时滞领域After',
                            },
                            silent: true,
                            skillAnimation: true,
                            filter(event, player) {
                                return !player.制裁 && player.countMark('wmsj_时滞领域') > 15;
                            },
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget(lib.filter.notMe, [1, Infinity])
                                    .set('prompt', '制裁·神诀')
                                    .set('prompt2', '选择任意名其他角色非锁定技失效并受到5点伤害')
                                    .set('ai', (target) => -get.attitude(get.player(), target))
                                    .forResult();
                                if (result?.bool && result?.targets) {
                                    player.制裁 = true;
                                    const eny = result.targets;
                                    player.line(eny);
                                    player.logSkill('wmsj_制裁', eny);
                                    for (const npc of eny) {
                                        await npc.addSkills('fengyin');
                                        await npc.damage(5);
                                    }
                                }
                            },
                        },

                        //执行的抹杀：持恒技，翻面，体力上限减少对你无效，你防止实体牌以外的所有伤害，你的技能不会失去或失效，你造成的伤害+2。
                        wmsj_抹杀: {
                            trigger: { source: 'damageBegin1' },
                            forced: true,
                            priority: 62,
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            filter(event, player) {
                                return true;
                            },
                            async content(event, trigger, player) {
                                trigger.num += 2;
                            },
                            group: ['wmsj_kang'],
                        },
                        wmsj_kang: {
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            silent: true,
                            trigger: {
                                player: ['loseMaxHpBegin', 'turnOverBefore', 'damageBegin4'],
                            },
                            filter(event, player, name) {
                                if (name == 'loseMaxHpBegin') return true;
                                if (name == 'turnOverBefore') return !player.isTurnedOver();
                                return !event.cards?.length;
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                            },
                        },

                        //万物寂灭之灾厄：持恒技，你造成伤害后摸两张牌，你受到伤害时进行一次判定，若点数为偶数则你防止此伤害并对一名其他角色造成2点伤害。
                        wmsj_寂灭: {
                            trigger: {
                                player: ['damageBegin4'],
                                source: ['damageSource'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 80,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            async content(event, trigger, player) {
                                if (event.triggername == 'damageSource') {
                                    await player.draw(2);
                                }
                                if (event.triggername == 'damageBegin4') {
                                    const next = player.judge((card) => {
                                        if (get.number(card) % 2 == 0) {
                                            return 5;
                                        }
                                        return 0;
                                    });
                                    next.judge2 = (result) => {
                                        if (result?.bool === true) {
                                            return true;
                                        }
                                        return false;
                                    };
                                    const result = await next.forResult();
                                    if (result?.bool) {
                                        trigger.cancel();
                                        const result0 = await player
                                            .chooseTarget(lib.filter.notMe)
                                            .set('prompt', '万物寂灭之灾厄')
                                            .set('prompt2', '选择任意一名其他角色造成2点伤害')
                                            .set('ai', (target) => -get.attitude(get.player(), target))
                                            .forResult();
                                        if (result0?.bool && result0?.targets) {
                                            const eny = result0.targets[0];
                                            player.line(eny);
                                            await eny.damage(2);
                                        }
                                    }
                                }
                            },
                        },

                        //限制解除·世界的终极：持恒技，你的手牌上限与攻击范围为无限，你的手牌数不少于5。
                        wmsj_解除: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            trigger: {
                                player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                if (event.getl && !event.getl(player)) {
                                    return false;
                                }
                                return player.countCards('h') < 5;
                            },
                            content() {
                                player.drawTo(5);
                            },
                            ai: {
                                noh: true,
                                freeSha: true,
                                freeShan: true,
                                skillTagFilter(player, tag) {
                                    if (player.countCards('h') > 6) {
                                        return false;
                                    }
                                },
                            },
                            mod: {
                                attackRange(player, num) {
                                    return Infinity;
                                },
                                maxHandcardFinal(player, num) {
                                    return Infinity;
                                },
                            },
                        },

                        //混沌·终焉：游戏开始时，你进入终焉领域。①每个回合结束后你回复1点体力并增加1点体力上限。②每轮开始时，你对任意名其他角色造成2点伤害。③每轮开始时，所有玩家体力上限减1。
                        wmsj_混沌: {
                            trigger: {
                                global: ['gameStart'],
                            },
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            priority: 35,
                            skillAnimation: true,
                            content() {
                                _status.终焉 = true;
                                _status.混沌 ??= [];
                                _status.混沌.add(player);
                                ui.background.style.backgroundImage = `url(extension/完美世界/images/background/终焉领域.jpg)`;
                            },
                        },

                        _wmsj_混沌终焉: {
                            trigger: {
                                global: ['phaseAfter', 'roundStart'],
                            },
                            charlotte: true,
                            silent: true,
                            forced: true,
                            filter(event, player, name) {
                                return _status.终焉 && _status.混沌?.includes(player);
                            },
                            async content(event, trigger, player) {
                                if (event.triggername == 'phaseAfter') {
                                    await player.recover();
                                    await player.gainMaxHp();
                                } else {
                                    const result = await player
                                        .chooseTarget(lib.filter.notMe, [1, Infinity])
                                        .set('prompt', '混沌·终焉')
                                        .set('prompt2', '选择任意名其他角色造成2点伤害')
                                        .set('ai', (target) => -get.attitude(get.player(), target))
                                        .forResult();
                                    if (result?.bool && result?.targets) {
                                        const eny = result.targets;
                                        player.line(eny);
                                        for (const npc of eny) {
                                            await npc.damage(2);
                                        }
                                    }
                                    for (const npc of game.players) {
                                        await npc.loseMaxHp();
                                    }
                                }
                            },
                        },

                        //焰欧：持恒技，准备阶段，你可以对两名其他角色造成2点火焰伤害；你造成的伤害+1。
                        wmsj_焰欧: {
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                                source: ['damageBegin1'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            priority: 25,
                            forced: true,
                            async content(event, trigger, player) {
                                if (event.triggername == 'damageBegin1') {
                                    trigger.num++;
                                } else {
                                    const result = await player
                                        .chooseTarget(lib.filter.notMe, [1, 2])
                                        .set('prompt', '焰欧')
                                        .set('prompt2', '选择至多2名其他角色造成2点火焰伤害')
                                        .set('ai', (target) => -get.attitude(get.player(), target))
                                        .forResult();
                                    if (result?.bool && result?.targets) {
                                        const eny = result.targets;
                                        player.line(eny);
                                        for (const npc of eny) {
                                            await npc.damage(2, 'fire');
                                        }
                                    }
                                }
                            },
                        },

                        //天丛云：持恒技，准备阶段，你选择任意名其他角色获得1个“毁灭”标记，其他角色每有1个“毁灭”标记手牌上限-2且在其准备阶段受到1点火焰伤害。
                        wmsj_天丛云: {
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 55,
                            marktext: '毁灭',
                            intro: {
                                name: '毁灭',
                                content: '当前有#个毁灭标记',
                            },
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget(lib.filter.notMe, [1, Infinity])
                                    .set('prompt', '天丛云')
                                    .set('prompt2', '选择任意名其他角色获得1个“毁灭”')
                                    .set('ai', (target) => -get.attitude(get.player(), target))
                                    .forResult();
                                if (result?.bool && result?.targets) {
                                    const eny = result.targets;
                                    player.line(eny);
                                    for (const npc of eny) {
                                        npc.addMark('wmsj_天丛云', 1);
                                    }
                                }
                            },
                            global: ['wmsj_天丛云_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin'],
                                    },
                                    charlotte: true,
                                    forced: true,
                                    priority: 55,
                                    filter(event, player) {
                                        return player.countMark('wmsj_天丛云');
                                    },
                                    async content(event, trigger, player) {
                                        const num = player.countMark('wmsj_天丛云');
                                        await player.damage(num, 'fire');
                                    },
                                    mod: {
                                        maxHandcardFinal(player, num) {
                                            const numx = 2 * player.countMark('wmsj_天丛云');
                                            if (numx > 0) return num - numx;
                                        },
                                    },
                                },
                            },
                        },

                        //死告：持恒技，翻面，体力上限减少对你无效，你防止实体牌以外的所有伤害，你的技能不会失去或失效；摸牌阶段，你可以让所有角色“毁灭”标记数翻倍；你每造成1点火焰伤害后摸一张牌。
                        wmsj_死告: {
                            trigger: {
                                player: 'phaseDrawBegin',
                                source: 'damageSource',
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'damageSource') return event.nature == 'fire';
                                return true;
                            },
                            async content(event, trigger, player) {
                                if (event.triggername == 'damageSource') {
                                    await player.draw(trigger.num);
                                } else {
                                    for (const npc of game.players) {
                                        if (npc != player && npc.countMark('wmsj_天丛云')) {
                                            npc.addMark('wmsj_天丛云', npc.countMark('wmsj_天丛云'));
                                        }
                                    }
                                }
                            },
                            group: ['wmsj_kang'],
                        },

                        //陨落：出牌阶段限一次，你可以令任意名其他角色受到1点火焰伤害。
                        wmsj_陨落: {
                            enable: 'phaseUse',
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            usable: 1,
                            filterTarget: lib.filter.notMe,
                            selectTarget: [1, Infinity],
                            prompt: '对任意名其他角色造成1点火焰伤害',
                            async content(event, trigger, player) {
                                const npc = event.target;
                                await npc.damage(1, 'fire');
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -1,
                                },
                            },
                        },

                        //枯竭：游戏开始时，你令全场进入世界枯竭领域，其他角色每轮开始时减少2点体力并弃置一半的牌（向上取整），你受到伤害时进行一次判定，若点数为3~9则防止此伤害。
                        wmsj_枯竭: {
                            trigger: {
                                global: ['gameStart'],
                            },
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            priority: 35,
                            skillAnimation: true,
                            content() {
                                _status.世界枯竭 = true;
                                _status.枯竭 ??= [];
                                _status.枯竭.add(player);
                                ui.background.style.backgroundImage = `url(extension/完美世界/images/background/世界枯竭.jpg)`;
                            },
                        },

                        _wmsj_世界枯竭: {
                            trigger: {
                                global: ['roundStart'],
                                player: ['damageBegin4'],
                            },
                            charlotte: true,
                            silent: true,
                            forced: true,
                            filter(event, player, name) {
                                return _status.世界枯竭 && _status.枯竭?.includes(player);
                            },
                            async content(event, trigger, player) {
                                if (trigger.name != 'damage') {
                                    for (const npc of game.players) {
                                        if (npc != player) {
                                            await npc.loseHp(2);
                                            const num = Math.ceil(npc.countCards('he') / 2);
                                            const cards = npc.getCards('he').randomGets(num);
                                            if (cards.length) {
                                                await npc.discard(cards);
                                            }
                                        }
                                    }
                                } else {
                                    const next = player.judge((card) => {
                                        if (get.number(card) >= 3 && get.number(card) <= 9) {
                                            return 5;
                                        }
                                        return 0;
                                    });
                                    next.judge2 = (result) => {
                                        if (result?.bool === true) {
                                            return true;
                                        }
                                        return false;
                                    };
                                    const result = await next.forResult();
                                    if (result?.bool) {
                                        trigger.cancel();
                                    }
                                }
                            },
                        },

                        //无限：持恒技，游戏开始时，你令全场进入无限领域，其他角色手牌上限变为1，每轮开始时你选择任意名其他角色获得1个“囚徒”标记，有“囚徒”标记的角色每有1个标记则造成伤害-1，摸牌数-1。
                        wmsj_无限: {
                            trigger: {
                                global: ['gameStart', 'roundStart'],
                            },
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            priority: 35,
                            marktext: '囚徒',
                            intro: {
                                name: '囚徒',
                                content: '当前拥有#个囚徒标记',
                            },
                            async content(event, trigger, player) {
                                if (event.triggername == 'gameStart') {
                                    player.logSkill('wmsj_无限领域log');
                                    _status.无限领域 = true;
                                    _status.无限 ??= [];
                                    _status.无限.add(player);
                                    ui.background.style.backgroundImage = `url(extension/完美世界/images/background/无限领域.jpg)`;
                                } else {
                                    const result = await player
                                        .chooseTarget(lib.filter.notMe, [1, Infinity])
                                        .set('prompt', '无限之境')
                                        .set('prompt2', '选择任意名其他角色获得1个“囚徒”')
                                        .set('ai', (target) => -get.attitude(get.player(), target))
                                        .forResult();
                                    if (result?.bool && result?.targets) {
                                        const eny = result.targets;
                                        player.line(eny);
                                        for (const npc of eny) {
                                            npc.addMark('wmsj_无限', 1);
                                        }
                                    }
                                }
                            },
                        },
                        wmsj_无限领域log: {
                            charlotte: true,
                            skillAnimation: true,
                        },
                        _wmsj_无限领域: {
                            trigger: {
                                player: ['drawBegin'],
                                source: ['damageBegin2'],
                            },
                            charlotte: true,
                            silent: true,
                            forced: true,
                            filter(event, player, name) {
                                if (event.name == 'draw' && event.numFixed) return false;
                                return _status.无限领域 && !_status.无限?.includes(player) && player.countMark('wmsj_无限');
                            },
                            async content(event, trigger, player) {
                                trigger.num -= player.countMark('wmsj_无限');
                            },
                            mod: {
                                maxHandcardFinal(player, num) {
                                    if (_status.无限领域 && !_status.无限?.includes(player)) return 1;
                                },
                            },
                        },

                        //宇宙：准备阶段，你对拥有“囚徒”标记的角色随机造成2~5点伤害，若你本回合使用此技能杀死过其他角色则本回合你不能成为牌的目标。
                        wmsj_宇宙: {
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                                global: ['die'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 55,
                            filter(event, player, name) {
                                const evt = event.getParent('wmsj_宇宙');
                                if (name == 'phaseZhunbeiBegin') return true;
                                return evt?.player == player;
                            },
                            async content(event, trigger, player) {
                                if (trigger.name == 'die') {
                                    await player.addTempSkills('qianxing');
                                } else {
                                    const eny = game.players.filter((c) => c != player && c.countMark('wmsj_无限'));
                                    if (eny.length) {
                                        for (const npc of eny) {
                                            const num = Math.floor(Math.random() * 4) + 2;
                                            await npc.damage(num);
                                        }
                                    }
                                }
                            },
                        },

                        //利刃：你使用的【杀】额外结算一次且伤害基数+1，你的攻击范围为无限，你造成伤害后摸一张牌。
                        wmsj_利刃: {
                            trigger: {
                                player: ['useCard'],
                                source: ['damageSource'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            silent: true,
                            forced: true,
                            filter(event, player, name) {
                                if (event.name == 'useCard') return event.card.name == 'sha';
                                return true;
                            },
                            async content(event, trigger, player) {
                                if (trigger.name == 'useCard') {
                                    trigger.effectCount += 1;
                                    trigger.baseDamage++;
                                } else {
                                    await player.draw();
                                }
                            },
                            mod: {
                                attackRange(player, num) {
                                    return Infinity;
                                },
                            },
                        },

                        //庇佑：你受到伤害后对伤害来源造成等量伤害；你受到伤害时进行一次判定，若点数为7~13则防止之；你的回合结束时你回复3点体力；翻面，体力上限减少对你无效，你防止实体牌以外的所有伤害，你的技能不会失去或失效。
                        wmsj_庇佑: {
                            trigger: {
                                player: ['damageBegin4', 'damageAfter', 'phaseEnd'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 66,
                            group: ['wmsj_kang'],
                            async content(event, trigger, player) {
                                const name = event.triggername;
                                switch (name) {
                                    case 'phaseEnd':
                                        await player.recover(3);
                                        break;
                                    case 'damageAfter':
                                        if (trigger.source) {
                                            await trigger.source.damage(trigger.num);
                                        }
                                        break;
                                    case 'damageBegin4':
                                        var next = player.judge((card) => {
                                            if (get.number(card) >= 7 && get.number(card) <= 13) {
                                                return 5;
                                            }
                                            return 0;
                                        });
                                        next.judge2 = (result) => {
                                            if (result?.bool === true) {
                                                return true;
                                            }
                                            return false;
                                        };
                                        const result = await next.forResult();
                                        if (result?.bool) {
                                            trigger.cancel();
                                        }
                                        break;
                                }
                            },
                        },

                        //毁灭：持恒技，翻面，体力上限减少对你无效，你防止实体牌以外的所有伤害，你的技能不会失去或失效；游戏开始时，你令全场进入毁灭领域，其他角色回合结束时受到随机2~3点伤害。
                        wmsj_毁灭: {
                            trigger: {
                                global: ['gameStart'],
                            },
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            priority: 35,
                            skillAnimation: true,
                            content() {
                                _status.毁灭领域 = true;
                                _status.毁灭 ??= [];
                                _status.毁灭.add(player);
                                ui.background.style.backgroundImage = `url(extension/完美世界/images/background/毁灭领域.jpg)`;
                            },
                            group: ['wmsj_kang'],
                        },

                        _wmsj_毁灭领域: {
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            charlotte: true,
                            silent: true,
                            forced: true,
                            filter(event, player, name) {
                                return _status.毁灭领域 && !_status.毁灭?.includes(player);
                            },
                            async content(event, trigger, player) {
                                const num = Math.floor(Math.random() * 2) + 2;
                                await player.damage(num);
                            },
                        },

                        //地域星：准备阶段开始时，你选择任意名其他角色对其造成1点火焰伤害。
                        wmsj_地域星: {
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 55,
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget(lib.filter.notMe, [1, Infinity])
                                    .set('prompt', get.prompt('wmsj_地域星'))
                                    .set('prompt2', '选择任意名其他角色造成1点火焰伤害')
                                    .set('ai', (target) => -get.attitude(get.player(), target))
                                    .forResult();
                                if (result?.bool && result?.targets) {
                                    const eny = result.targets;
                                    player.line(eny);
                                    for (const npc of eny) {
                                        await npc.damage(1, 'fire');
                                    }
                                }
                            },
                        },

                        //无间：你的出牌阶段内，你使用的牌不可响应且你使用第五张牌时本轮你不能成为其他角色使用牌的目标。
                        wmsj_无间: {
                            trigger: {
                                player: 'useCard',
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 23,
                            async content(event, trigger, player) {
                                trigger.directHit.addArray(game.players);
                                const num = player.getHistory('useCard').indexOf(trigger);
                                if (num == 4) {
                                    await player.addTempSkills('qianxing', 'roundStart');
                                }
                            },
                        },

                        //摩珂：摸牌阶段开始时，你选择任意名其他角色弃置所有装备牌，若无装备牌则你弃置其一张牌并对其造成1点火焰伤害；其他角色回合开始时，你随机获得其一半的手牌（向上取整）。
                        wmsj_摩珂: {
                            trigger: {
                                player: 'phaseDrawBegin',
                                global: 'phaseBegin',
                            },
                            filter(event, player, name) {
                                if (name == 'phaseBegin') return event.player != player;
                                return true;
                            },
                            async content(event, trigger, player) {
                                if (event.triggername == 'phaseBegin') {
                                    const npc = trigger.player;
                                    const num = Math.ceil(npc.countCards('he') / 2);
                                    const cards = npc.getCards('he').randomGets(num);
                                    if (cards.length) {
                                        await player.gain(cards, 'gain2');
                                    }
                                } else {
                                    const result = await player
                                        .chooseTarget(lib.filter.notMe, [1, Infinity])
                                        .set('prompt', get.prompt('wmsj_摩珂'))
                                        .set('prompt2', '选择任意名其他角色弃置所有装备牌')
                                        .set('ai', (target) => -get.attitude(get.player(), target))
                                        .forResult();
                                    if (result?.bool && result?.targets) {
                                        const eny = result.targets;
                                        player.line(eny);
                                        for (const npc of eny) {
                                            const cards = npc.getCards('he', (c) => get.type(c) == 'equip');
                                            if (cards.length) {
                                                await npc.discard(cards);
                                            } else {
                                                await player.discardPlayerCard(npc, 'he');
                                                await npc.damage(1, 'fire');
                                            }
                                        }
                                    }
                                }
                            },
                        },

                        //灰烬：准备阶段开始时，你选择任意名其他角色翻面。
                        wmsj_灰烬: {
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 56,
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget(lib.filter.notMe, [1, Infinity])
                                    .set('prompt', get.prompt('wmsj_灰烬'))
                                    .set('prompt2', '选择任意名其他角色翻面')
                                    .set('ai', (target) => -get.attitude(get.player(), target))
                                    .forResult();
                                if (result?.bool && result?.targets) {
                                    const eny = result.targets;
                                    player.line(eny);
                                    for (const npc of eny) {
                                        await npc.turnOver();
                                    }
                                }
                            },
                        },

                        //求道玉：回合结束时，你对任意名其他角色随机造成2~4点伤害。
                        wmsj_求道玉: {
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 56,
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget(lib.filter.notMe, [1, Infinity])
                                    .set('prompt', get.prompt('wmsj_求道玉'))
                                    .set('prompt2', '选择任意名其他角色随机造成2~4点伤害')
                                    .set('ai', (target) => -get.attitude(get.player(), target))
                                    .forResult();
                                if (result?.bool && result?.targets) {
                                    const eny = result.targets;
                                    player.line(eny);
                                    for (const npc of eny) {
                                        const num = Math.floor(Math.random() * 3) + 2;
                                        await npc.damage(num);
                                    }
                                }
                            },
                        },

                        //浩劫：持恒技，翻面，体力上限减少对你无效，你防止实体牌以外的所有伤害，你的技能不会失去或失效；游戏开始时，你令全场进入浩劫领域，其他角色准备阶段开始时受到锦囊手牌数的伤害。
                        wmsj_浩劫: {
                            trigger: {
                                global: ['gameStart'],
                            },
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            priority: 35,
                            skillAnimation: true,
                            content() {
                                _status.浩劫领域 = true;
                                _status.浩劫 ??= [];
                                _status.浩劫.add(player);
                                ui.background.style.backgroundImage = `url(extension/完美世界/images/background/浩劫领域.jpg)`;
                            },
                            group: ['wmsj_kang'],
                        },

                        _wmsj_毁灭领域: {
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            charlotte: true,
                            silent: true,
                            forced: true,
                            filter(event, player, name) {
                                if (!player.countCards('h', (c) => get.type2(c) == 'trick')) return false;
                                return _status.毁灭领域 && !_status.毁灭?.includes(player);
                            },
                            async content(event, trigger, player) {
                                const num = player.countCards('h', (c) => get.type2(c) == 'trick');
                                await player.damage(num);
                            },
                        },

                        //梦月：其他角色摸牌阶段开始时，你获得其至多两张牌，然后视为对其使用一张【杀】。
                        wmsj_梦月: {
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            priority: 66,
                            filter(event, player) {
                                return event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            async content(event, trigger, player) {
                                const npc = trigger.player;
                                await player.gainPlayerCard(npc, 'hej', [1, 2], 'visibleMove');
                                await player.useCard({ name: 'sha', isCard: true }, npc, false);
                            },
                        },

                        //天国：出牌阶段开始时，你选择任意名其他角色对其随机造成2~4点伤害。
                        wmsj_天国: {
                            trigger: {
                                player: ['phaseUseBegin'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 56,
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget(lib.filter.notMe, [1, Infinity])
                                    .set('prompt', get.prompt('wmsj_天国'))
                                    .set('prompt2', '选择任意名其他角色随机造成2~4点伤害')
                                    .set('ai', (target) => -get.attitude(get.player(), target))
                                    .forResult();
                                if (result?.bool && result?.targets) {
                                    const eny = result.targets;
                                    player.line(eny);
                                    for (const npc of eny) {
                                        const num = Math.floor(Math.random() * 3) + 2;
                                        await npc.damage(num);
                                    }
                                }
                            },
                        },

                        //恶鬼：你对其他角色造成伤害时，其获得1个“浩劫”；其他角色出牌阶段开始时，每有3个“浩劫”便受到1点雷电伤害；你的手牌上限为无限；你使用【杀】时，伤害基数+1。
                        wmsj_恶鬼: {
                            trigger: {
                                global: ['phaseUseBegin'],
                                player: ['useCard'],
                                source: ['damageBegin4'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 56,
                            marktext: '浩劫',
                            intro: {
                                name: '浩劫',
                                content: 'mark',
                            },
                            filter(event, player, name) {
                                if (event.name == 'damage') return event.player != player;
                                if (event.name == 'useCard') return event.card.name == 'sha';
                                return event.player != player && event.player.countMark('wmsj_恶鬼') >= 3;
                            },
                            async content(event, trigger, player) {
                                const name = trigger.name;
                                const npc = trigger.player;
                                switch (name) {
                                    case 'damage':
                                        npc.addMark('wmsj_恶鬼', 1);
                                        break;
                                    case 'useCard':
                                        trigger.baseDamage++;
                                        break;
                                    default:
                                        const num = Math.floor(npc.countMark('wmsj_恶鬼') / 3);
                                        await npc.damage(num, 'thunder');
                                        break;
                                }
                            },
                            mod: {
                                maxHandcardFinal(player, num) {
                                    return Infinity;
                                },
                            },
                        },

                        //冥爆：每轮开始时，你选择任意名其他角色获得2个“浩劫”；你回合结束时，你对所有拥有“浩劫”的其他角色造成2点雷电伤害；你受到伤害时进行一次判定，若点数为2~7则防止此伤害并选择一名其他角色获得1个“浩劫”。
                        wmsj_冥爆: {
                            trigger: {
                                global: ['roundStart'],
                                player: ['phaseEnd', 'damageBegin4'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 56,
                            filter(event, player, name) {
                                if (name == 'phaseEnd') return game.hasPlayer((c) => c.hasMark('wmsj_恶鬼'));
                                return true;
                            },
                            async content(event, trigger, player) {
                                const name = event.triggername;
                                switch (name) {
                                    case 'roundStart':
                                        var result1 = await player
                                            .chooseTarget(lib.filter.notMe, [1, Infinity])
                                            .set('prompt', get.prompt('wmsj_冥爆'))
                                            .set('prompt2', '选择任意名其他角色获得2个“浩劫”')
                                            .set('ai', (target) => -get.attitude(get.player(), target))
                                            .forResult();
                                        if (result1?.bool && result1?.targets) {
                                            const eny = result1.targets;
                                            player.line(eny);
                                            for (const npc of eny) {
                                                npc.addMark('wmsj_恶鬼', 2);
                                            }
                                        }
                                        break;
                                    case 'phaseEnd':
                                        const eny = game.filterPlayer((c) => c.hasMark('wmsj_恶鬼'));
                                        for (const npc of eny) {
                                            await npc.damage(2, 'thunder');
                                        }
                                        break;
                                    default:
                                        var next = player.judge((card) => {
                                            if (get.number(card) >= 2 && get.number(card) <= 7) {
                                                return 5;
                                            }
                                            return 0;
                                        });
                                        next.judge2 = (result) => {
                                            if (result?.bool === true) {
                                                return true;
                                            }
                                            return false;
                                        };
                                        const result = await next.forResult();
                                        if (result?.bool) {
                                            trigger.cancel();
                                            var result0 = await player
                                                .chooseTarget(lib.filter.notMe)
                                                .set('prompt', get.prompt('wmsj_冥爆'))
                                                .set('prompt2', '选择一名其他角色获得1个“浩劫”')
                                                .set('ai', (target) => -get.attitude(get.player(), target))
                                                .forResult();
                                            if (result0?.bool && result0?.targets) {
                                                const eny = result0.targets[0];
                                                player.line(eny);
                                                eny.addMark('wmsj_恶鬼', 1);
                                            }
                                        }
                                        break;
                                }
                            },
                        },

                        //灾厄洪流：持恒技，你受到伤害前进行判定，若为黑色则防止并令伤害来源进行闪电，火山，浮雷，洪水的随机两个进行判定然后你摸两张牌。
                        wmsj_灾厄洪流: {
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            priority: 53,
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.source && event.num > 0;
                            },
                            async content(event, trigger, player) {
                                const next = player.judge((card) => {
                                    if (get.color(card) == 'black') {
                                        return 5;
                                    }
                                    return 0;
                                });
                                next.judge2 = (result) => {
                                    if (result?.bool === true) {
                                        return true;
                                    }
                                    return false;
                                };
                                const result = await next.forResult();
                                if (result?.bool) {
                                    trigger.cancel();
                                    let jie = ['shandian', 'fulei', 'hongshui', 'huoshan'].randomGets(2);
                                    for (const j of jie) {
                                        await trigger.source.executeDelayCardEffect(j);
                                    }
                                    await player.draw(2);
                                }
                            },
                        },

                        //灾厄降临：准备阶段开始时，你选择任意一名角色，分别进行两次闪电、火山、洪水和浮雷的判定；你使用牌没有次数限制，你的攻击距离为无限大。
                        wmsj_灾厄降临: {
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 56,
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget()
                                    .set('prompt', get.prompt('wmsj_灾厄降临'))
                                    .set('prompt2', '选择任意一名角色进行判定')
                                    .set('ai', (target) => -get.attitude(get.player(), target))
                                    .forResult();
                                game.mp4ZF('灾厄降临');
                                if (result?.bool && result?.targets) {
                                    const eny = result.targets[0];
                                    player.line(eny);
                                    await eny.executeDelayCardEffect('shandian');
                                    await eny.executeDelayCardEffect('shandian');
                                    await eny.executeDelayCardEffect('huoshan');
                                    await eny.executeDelayCardEffect('huoshan');
                                    await eny.executeDelayCardEffect('hongshui');
                                    await eny.executeDelayCardEffect('hongshui');
                                    await eny.executeDelayCardEffect('fulei');
                                    await eny.executeDelayCardEffect('fulei');
                                }
                            },
                            mod: {
                                attackRange(player, num) {
                                    return Infinity;
                                },
                                cardUsable(card, player) {
                                    return true;
                                },
                            },
                        },

                        //灾厄回流：准备阶段你回复所有体力；翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。
                        wmsj_灾厄回流: {
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 60,
                            group: ['wmsj_kang'],
                            async content(event, trigger, player) {
                                await player.recoverTo(player.maxHp);
                            },
                        },

                        //超越：准备阶段，你依次执行下列选项：1.对任意名一名角色造成随机3~5点伤害；2.摸10张牌；3.增加3点体力上限并回复所有体力；4.造成的伤害+1（无限叠加）；5.让任意名角色造成伤害-1（无限叠加）。
                        wmsj_超越: {
                            trigger: {
                                player: 'phaseZhunbei',
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 27,
                            async content(event, trigger, player) {
                                var result1 = await player
                                    .chooseTarget(lib.filter.notMe)
                                    .set('prompt', '超越·如我所愿')
                                    .set('prompt2', '对一名角色造成随机3~5点伤害')
                                    .set('ai', (target) => {
                                        return -get.attitude(player, target);
                                    })
                                    .forResult();
                                if (result1.bool) {
                                    player.line(result1.targets);
                                    const num = Math.floor(Math.random() * 3) + 3;
                                    await result1.targets[0].damage(num);
                                }
                                await player.draw(10);
                                await player.gainMaxHp(3);
                                await player.recoverTo(player.maxHp);
                                player.wmsj_加伤 ??= 0;
                                player.wmsj_加伤++;
                                player.addMark('wmsj_超越_加伤', 1, false);
                                var result5 = await player
                                    .chooseTarget(lib.filter.notMe)
                                    .set('prompt', '超越·如我所愿')
                                    .set('prompt2', '选择一名其他角色造成伤害-1')
                                    .set('ai', (target) => {
                                        return -get.attitude(player, target);
                                    })
                                    .forResult();
                                if (result5.bool) {
                                    player.line(result5.targets);
                                    var npc = result5.targets[0];
                                    npc.wmsj_减伤 ??= 0;
                                    npc.wmsj_减伤++;
                                    npc.addMark('wmsj_超越_减伤', 1, false);
                                }
                            },
                            group: ['wmsj_超越_1'],
                            subSkill: {
                                加伤: {
                                    marktext: '超越',
                                    intro: {
                                        name: '超越',
                                        markcount: () => null,
                                        content(storage, player) {
                                            return '造成伤害+' + player.wmsj_加伤;
                                        },
                                    },
                                },
                                减伤: {
                                    marktext: '超越',
                                    intro: {
                                        name: '超越',
                                        markcount: () => null,
                                        content(storage, player) {
                                            return '造成伤害-' + player.wmsj_减伤;
                                        },
                                    },
                                },
                                1: {
                                    trigger: {
                                        global: 'damageBegin1',
                                    },
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.source) return false;
                                        return (event.source == player && event.source.wmsj_加伤) || event.source.wmsj_减伤;
                                    },
                                    async content(event, trigger, player) {
                                        if (trigger.source == player) {
                                            trigger.num += player.wmsj_加伤;
                                        } else {
                                            trigger.num -= trigger.source.wmsj_减伤;
                                        }
                                    },
                                },
                            },
                        },

                        //超越世界：①一名角色的回合结束时，若你本回合内杀死过角色，则你可以进行一个额外的回合。②准备阶段，你选择任意名角色获得“超越世界”标记，拥有“超越世界”标记的角色跳过摸牌阶段。
                        wmsj_超越世界: {
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 56,
                            marktext: '超越世界',
                            intro: {
                                name: '超越世界',
                                markcount: () => null,
                                content: '跳过摸牌阶段',
                            },
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget([1, Infinity])
                                    .set('prompt', get.prompt('wmsj_超越世界'))
                                    .set('prompt2', '选择任意名角色获得1个“世界”')
                                    .set('ai', (target) => -get.attitude(get.player(), target))
                                    .forResult();
                                if (result?.bool && result?.targets) {
                                    const eny = result.targets;
                                    player.line(eny);
                                    for (const npc of eny) {
                                        npc.wmsj_世界跳过 = true;
                                        npc.addMark('wmsj_超越世界', 1, false);
                                    }
                                }
                            },
                            group: ['wmsj_超越世界_1', 'wmsj_超越世界_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseDrawBegin',
                                    },
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.player.wmsj_世界跳过;
                                    },
                                    async content(event, trigger, player) {
                                        player.logSkill('wmsj_超越世界');
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    trigger: { global: 'phaseAfter' },
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return player.getStat('kill') > 0;
                                    },
                                    content() {
                                        player.insertPhase();
                                    },
                                },
                            },
                        },

                        //无所不能：①你的手牌上限为无限，你使用牌无距离次数限制。②翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效， 你的技能无法被无效失去。③出牌阶段限5次，你可以将手牌当任意牌使用。
                        wmsj_无所不能: {
                            enable: ['phaseUse'],
                            usable: 5,
                            prompt: '是否发动〖超越·无所不能〗',
                            group: ['wmsj_kang'],
                            filter(event, player) {
                                if (player.countCards('hes') <= 0) return false;
                                for (const name of lib.inpile) {
                                    if (event.filterCard({ name: name }, player, event)) return true;
                                }
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'sha') {
                                            list.push(['', '', 'sha']);
                                            for (var j of lib.inpile_nature) {
                                                list.push(['', '', 'sha', j]);
                                            }
                                        } else list.push(['', '', name]);
                                    }
                                    list = list.filter((info) => {
                                        const name = info[2],
                                            nature = info[3];
                                        const card = get.autoViewAs({ name, nature }, 'unsure');
                                        return event.filterCard(card, player, event);
                                    });
                                    return ui.create.dialog('超越·无所不能', [list, 'vcard']);
                                },
                                check(button) {
                                    if (_status.event.getParent().type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].contains(button.link[2])) return 0;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                filter(button, player) {
                                    return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        selectCard: 1,
                                        popname: true,
                                        check: function (card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3], isCard: true },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                return player.countCards('hes') > 0;
                            },
                            ai: {
                                save: true,
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter: function (player) {
                                    if (!player.countCards('hes')) return false;
                                },
                                order: 1,
                                result: {
                                    player: function (player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            mod: {
                                maxHandcardFinal: () => Infinity,
                                targetInRange: () => true,
                                cardUsableTarget: () => true,
                            },
                        },

                        //缓慢：每轮开始你弃置任意名角色一半的手牌（ 向上取整）。
                        wmsj_缓慢: {
                            trigger: {
                                global: ['roundStart'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 56,
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget([1, Infinity])
                                    .set('prompt', get.prompt('wmsj_缓慢'))
                                    .set('prompt2', '选择任意名角色弃置一半手牌')
                                    .set('ai', (target) => -get.attitude(get.player(), target))
                                    .forResult();
                                if (result?.bool && result?.targets) {
                                    const eny = result.targets;
                                    player.line(eny);
                                    for (const npc of eny) {
                                        const num = Math.ceil(npc.countCards('h') / 2);
                                        if (num) {
                                            await player.discardPlayerCard(npc, 'h', num);
                                        }
                                    }
                                }
                            },
                        },

                        //中速：游戏开始你选择任意名角色获得“加速”标记，拥有“加速”标记的角色每使用一张牌时随机弃置一张牌。
                        wmsj_中速: {
                            trigger: {
                                global: ['phaseBefore'],
                                player: ['enterGame'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 56,
                            marktext: '加速',
                            intro: {
                                name: '加速',
                                markcount: () => null,
                                content: '每使用一张牌随机弃置一张牌',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget([1, Infinity])
                                    .set('prompt', get.prompt('wmsj_中速'))
                                    .set('prompt2', '选择任意名角色获得1个“加速”')
                                    .set('ai', (target) => -get.attitude(get.player(), target))
                                    .forResult();
                                if (result?.bool && result?.targets) {
                                    const eny = result.targets;
                                    player.line(eny);
                                    eny.forEach((c) => c.addMark('wmsj_中速', 1, false));
                                }
                            },
                            group: ['wmsj_中速_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['useCard'],
                                    },
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    silent: true,
                                    priority: 36,
                                    filter(event, player) {
                                        return event.player.hasMark('wmsj_中速') && event.player.countCards('he');
                                    },
                                    async content(event, trigger, player) {
                                        const cards = trigger.player.getCards('he');
                                        await trigger.player.discard(cards.randomGet());
                                    },
                                },
                            },
                        },

                        //高速：①你每使用一张牌时摸一张牌。②你造成的伤害+2。③其他角色回合结束时受到1点伤害。
                        wmsj_高速: {
                            trigger: {
                                global: ['phaseEnd'],
                                player: ['useCard'],
                                source: ['damageBegin1'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 46,
                            filter(event, player) {
                                if (event.name == 'phase') return event.player != player;
                                return true;
                            },
                            async content(event, trigger, player) {
                                switch (trigger.name) {
                                    case 'phase':
                                        await trigger.player.damage();
                                        break;
                                    case 'useCard':
                                        await player.draw();
                                        break;
                                    case 'damage':
                                        trigger.num += 2;
                                        break;
                                }
                            },
                        },

                        //极速：①翻面， 体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。②每轮结束时所有其他角色体力上限减少2点。③你的杀没有次数限制，攻击距离为无限大。④你的摸牌阶段多摸场上存活人数的牌。
                        wmsj_极速: {
                            trigger: {
                                global: ['roundEnd'],
                                player: ['phaseDrawBegin2'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 66,
                            filter(event, player, name) {
                                if (name == 'phaseDrawBegin2') return !event.numFixed;
                                return true;
                            },
                            async content(event, trigger, player) {
                                switch (event.triggername) {
                                    case 'roundEnd':
                                        for (const npc of game.players.filter((c) => c != player)) {
                                            await npc.loseMaxHp(2);
                                        }
                                        break;
                                    case 'phaseDrawBegin2':
                                        const num = game.players.length;
                                        trigger.num += num;
                                        break;
                                }
                            },
                            group: ['wmsj_kang'],
                            mod: {
                                attackRange(player, num) {
                                    return Infinity;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },

                        //黄镇：①翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。②你造成的伤害为目标的体力上限，你的牌没有使用次数限制，攻击距离为无限大，其他角色发动技能时无效并受到3点伤害，你的手牌数不低于9。
                        wmsj_黄镇: {
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            mod: {
                                attackRange: () => Infinity,
                                cardUsableTarget: () => true,
                            },
                            group: ['wmsj_黄镇_1', 'wmsj_黄镇_2', 'wmsj_黄镇_3', 'wmsj_kang'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['useSkillBegin', 'logSkillBegin'],
                                    },
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    priority: 28,
                                    filter(event, player, name) {
                                        if (['global', 'equip'].includes(event.type)) {
                                            return false;
                                        }
                                        let skill = get.sourceSkillFor(event);
                                        if (!skill) return false;
                                        let info = get.info(skill);
                                        if (!info || info.equipSkill) {
                                            return false;
                                        }
                                        return event.player != player;
                                    },
                                    async content(event, trigger, player) {
                                        const name = trigger.skill;
                                        const info = lib.skill[name];
                                        if (trigger.name == 'logSkillBegin') {
                                            const arr = trigger.parent.next;
                                            for (let i = arr.length - 1; i >= 0; i--) {
                                                if (arr[i].name === name) {
                                                    arr.splice(i, 1);
                                                }
                                            }
                                        } else {
                                            const stat = trigger.player.stat;
                                            const statskill = stat[stat.length - 1].skill;
                                            statskill[name] = Math.max(0, statskill[name]) + 1;
                                            if (info.sourceSkill) {
                                                statskill[info.sourceSkill] = Math.max(0, statskill[info.sourceSkill]) + 1;
                                            }
                                            trigger.cancel();
                                        }
                                        if (info.limited || info.juexingji) {
                                            trigger.player.awakenSkill(name);
                                        }
                                        if ((info && typeof info.usable === 'undefined') || info.usable === 0) {
                                            info.usable = 1;
                                        }
                                        await trigger.player.damage(3);
                                    },
                                },
                                2: {
                                    forceunique: true,
                                    superCharlotte: true,
                                    charlotte: true,
                                    unique: true,
                                    forced: true,
                                    priority: 23,
                                    trigger: {
                                        player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter(event, player) {
                                        if (event.getl && !event.getl(player)) {
                                            return false;
                                        }
                                        return player.countCards('h') < 9;
                                    },
                                    content() {
                                        player.drawTo(9);
                                    },
                                    ai: {
                                        noh: true,
                                        freeSha: true,
                                        freeShan: true,
                                        skillTagFilter(player, tag) {
                                            if (player.countCards('h') > 9) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                3: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    silent: true,
                                    async content(event, trigger, player) {
                                        trigger.num = trigger.player.maxHp;
                                    },
                                },
                            },
                        },

                        //银镇：①翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。②游戏开始时，所有其他角色获得“进化”（进化：准备阶段受到2点伤害，摸牌阶段失去1点体力上限，出牌阶段弃置一半的手牌，弃牌阶段弃置的牌由你获得，结束阶段流失2点体力）。③你的手牌数不低于5，你造成的伤害+2。④你使用牌没有次数限制，你的攻击距离为无限大。
                        wmsj_银镇: {
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            forced: true,
                            priority: 24,
                            marktext: '进化',
                            intro: {
                                markcount: () => null,
                                content: '被“进化”了',
                            },
                            trigger: {
                                player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                if (event.getl && !event.getl(player)) {
                                    return false;
                                }
                                return player.countCards('h') < 5;
                            },
                            content() {
                                player.drawTo(5);
                            },
                            ai: {
                                noh: true,
                                freeSha: true,
                                freeShan: true,
                                skillTagFilter(player, tag) {
                                    if (player.countCards('h') > 5) {
                                        return false;
                                    }
                                },
                            },
                            mod: {
                                attackRange: () => Infinity,
                                cardUsableTarget: () => true,
                            },
                            group: ['wmsj_kang', 'wmsj_银镇_1', 'wmsj_银镇_2', 'wmsj_银镇_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['phaseBefore'],
                                        player: ['enterGame'],
                                    },
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    priority: 66,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    async content(event, trigger, player) {
                                        player.wmsj_进化 ??= [];
                                        for (const npc of game.players.filter((c) => c != player)) {
                                            player.wmsj_进化.add(npc);
                                            npc.addMark('wmsj_银镇', 1, false);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: ['damageBegin1'],
                                    },
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    priority: 66,
                                    async content(event, trigger, player) {
                                        trigger.num += 2;
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: ['phaseZhunbeiBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseEnd', 'loseAfter', 'loseAsyncAfter'],
                                    },
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    silent: true,
                                    filter(event, player, name) {
                                        if (!player.wmsj_进化?.includes(event.player)) return false;
                                        if (name == 'phaseUseBegin') return event.player.countCards('h') > 0;
                                        if (['phaseZhunbeiBegin', 'phaseDrawBegin', 'phaseEnd'].includes(name)) return true;
                                        if (event.type !== 'discard' || event.player == player) return false;
                                        const evt = event.getParent('phaseDiscard');
                                        const evt2 = event.getl(event.player);
                                        return evt?.name === 'phaseDiscard' && evt?.player === event.player && evt2?.cards2?.filterInD('d');
                                    },
                                    async content(event, trigger, player) {
                                        const name = event.triggername;
                                        switch (name) {
                                            case 'phaseZhunbeiBegin':
                                                await trigger.player.damage(2);
                                                break;
                                            case 'phaseDrawBegin':
                                                await trigger.player.loseMaxHp();
                                                break;
                                            case 'phaseUseBegin':
                                                const num = Math.ceil(trigger.player.countCards('h') / 2);
                                                const cards = trigger.player.getCards('h').randomGets(num);
                                                await trigger.player.discard(cards);
                                                break;
                                            case 'phaseEnd':
                                                await trigger.player.loseHp(2);
                                                break;
                                            default:
                                                await player.gain(trigger.getl(trigger.player).cards2.filterInD('d'), 'gain2');
                                                break;
                                        }
                                    },
                                },
                            },
                        },

                        //抓弹：准备阶段你可以视为对任意名角色使用五张杀，并使其获得1个“回旋”标记。
                        wmsj_抓弹: {
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 56,
                            marktext: '回旋',
                            intro: {
                                name: '回旋',
                                content: 'mark',
                            },
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget([1, Infinity])
                                    .set('prompt', get.prompt('wmsj_抓弹'))
                                    .set('prompt2', '选择对任意名角色使用【杀】')
                                    .set('ai', (target) => -get.attitude(get.player(), target))
                                    .forResult();
                                if (result?.bool && result?.targets) {
                                    const eny = result.targets;
                                    player.line(eny);
                                    eny.forEach((c) => c.addMark('wmsj_抓弹', 1));
                                    let numx = 5;
                                    while (numx--) {
                                        await player.useCard({ name: 'sha', isCard: true }, eny, false);
                                    }
                                }
                            },
                        },

                        //回旋：①你对拥有“回旋”标记的角色造成的伤害为其体力上限。②你使用牌没有次数限制，攻击距离为无限大。③其他角色准备阶段失去“回旋”数量的体力。④翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。⑤你的手牌不低于5。⑥你的攻击免疫一切减伤。
                        wmsj_回旋: {
                            trigger: {
                                player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                source: ['damageBefore'],
                            },
                            silent: true,
                            firstDo: true,
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            filter(event, player) {
                                if (event.name == 'damage') return true;
                                if (event.getl && !event.getl(player)) {
                                    return false;
                                }
                                return player.countCards('h') < 5;
                            },
                            async content(event, trigger, player) {
                                if (trigger.name == 'damage') {
                                    Reflect.defineProperty(trigger, 'finished', {
                                        get() {
                                            return trigger.step > 6;
                                        },
                                        set() { },
                                    });
                                    let damage = trigger.num;
                                    Reflect.defineProperty(trigger, 'num', {
                                        get() {
                                            return damage;
                                        },
                                        set(value) {
                                            if (value > damage) {
                                                damage = value;
                                            }
                                        },
                                    });
                                    const npc = trigger.player;
                                    Reflect.defineProperty(trigger, 'player', {
                                        get() {
                                            return npc;
                                        },
                                        set() { },
                                    });
                                } else {
                                    await player.drawTo(5);
                                }
                            },
                            mod: {
                                attackRange: () => Infinity,
                                cardUsableTarget: () => true,
                            },
                            group: ['wmsj_kang', 'wmsj_回旋_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['phaseZhunbeiBegin'],
                                        source: ['damageBegin1'],
                                    },
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        if (event.name != 'damage' && event.player == player) return false;
                                        return event.player.hasMark('wmsj_抓弹');
                                    },
                                    async content(event, trigger, player) {
                                        if (trigger.name == 'damage') {
                                            trigger.num = trigger.player.maxHp;
                                        } else {
                                            await trigger.player.loseHp(trigger.player.countMark('wmsj_抓弹'));
                                        }
                                    },
                                },
                            },
                        },

                        //气泡：游戏开始你让任意名角色获得1个“气泡”标记，拥有“气泡”标记的角色准备阶段选择一项：1.跳过摸牌阶段；2.跳过出牌阶段；3.减少一点体力上限。
                        wmsj_气泡: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            charlotte: true,
                            superCharlotte: true,
                            persevereSkill: true,
                            forced: true,
                            priority: 23,
                            marktext: '气泡',
                            intro: {
                                name: '气泡',
                                markcount: () => null,
                                content: 'mark',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.hasMark('wmsj_气泡');
                            },
                            async content(event, trigger, player) {
                                const top = '〖气泡·夺取〗：选择一项';
                                const list = [
                                    [0, '跳过摸牌阶段'],
                                    [1, '跳过出牌阶段'],
                                    [2, '减少1点体力上限'],
                                ];

                                const result = await trigger.player
                                    .chooseButton([top, [list, 'textbutton']], 1, true)
                                    .set('ai', () => 1 + Math.random())
                                    .forResult();
                                if (result?.bool && result?.links) {
                                    const choice = result.links[0];
                                    switch (choice) {
                                        case 0:
                                            trigger.player.skip('phaseDraw');
                                            break;
                                        case 1:
                                            trigger.player.skip('phaseUse');
                                            break;
                                        case 2:
                                            await trigger.player.loseMaxHp();
                                            break;
                                    }
                                }
                            },
                            group: ['wmsj_气泡_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['phaseBefore'],
                                        player: ['enterGame'],
                                    },
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    priority: 66,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    async content(event, trigger, player) {
                                        const result = await player
                                            .chooseTarget([1, Infinity])
                                            .set('prompt', get.prompt('wmsj_气泡'))
                                            .set('prompt2', '选择任意名角色获得1个“气泡”')
                                            .set('ai', (target) => -get.attitude(get.player(), target))
                                            .forResult();
                                        if (result?.bool && result?.targets) {
                                            const eny = result.targets;
                                            player.line(eny);
                                            eny.forEach((c) => c.addMark('wmsj_气泡', 1));
                                        }
                                    },
                                },
                            },
                        },

                        //世界弦：①翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。②你使用牌没有次数限制，攻击距离为无限大。③你对拥有“气泡”标记的角色造成的伤害+2。④你的手牌数量不低于6。⑥你可以将同花色的一至两张牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当普【无懈可击】。若你以此法转化了两张：红色牌，则此牌回复值或伤害值+1；黑色牌，则你弃置当前回合角色一张牌。
                        wmsj_世界弦: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (num <= 0 || !player.isPhaseUsing() || player.needsToDiscard() < 2) {
                                        return num;
                                    }
                                    let suit = get.suit(card, player);
                                    if (suit === 'heart') {
                                        return num - 3.6;
                                    }
                                },
                                aiValue(player, card, num) {
                                    if (num <= 0) {
                                        return num;
                                    }
                                    let suit = get.suit(card, player);
                                    if (suit === 'heart') {
                                        return num + 3.6;
                                    }
                                    if (suit === 'club') {
                                        return num + 1;
                                    }
                                    if (suit === 'spade') {
                                        return num + 1.8;
                                    }
                                },
                                aiUseful(player, card, num) {
                                    if (num <= 0) {
                                        return num;
                                    }
                                    let suit = get.suit(card, player);
                                    if (suit === 'heart') {
                                        return num + 3;
                                    }
                                    if (suit === 'club') {
                                        return num + 1;
                                    }
                                    if (suit === 'spade') {
                                        return num + 1;
                                    }
                                },
                                attackRange: () => Infinity,
                                cardUsableTarget: () => true,
                            },
                            forceunique: true,
                            superCharlotte: true,
                            charlotte: true,
                            unique: true,
                            persevereSkill: true,
                            locked: false,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将♦牌当做杀，♥牌当做桃，♣牌当做闪，♠牌当做无懈可击使用或打出',
                            viewAs(cards, player) {
                                if (cards.length) {
                                    var name = false,
                                        nature = null;
                                    switch (get.suit(cards[0], player)) {
                                        case 'club':
                                            name = 'shan';
                                            break;
                                        case 'diamond':
                                            name = 'sha';
                                            nature = 'fire';
                                            break;
                                        case 'spade':
                                            name = 'wuxie';
                                            break;
                                        case 'heart':
                                            name = 'tao';
                                            break;
                                    }
                                    if (name) {
                                        return { name: name, nature: nature };
                                    }
                                }
                                return null;
                            },
                            check(card) {
                                if (ui.selected.cards.length) {
                                    return 0;
                                }
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao'];
                                    var map = { sha: 'diamond', tao: 'heart' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (
                                            player.countCards('hes', function (card) {
                                                return (name != 'sha' || get.value(card) < 5) && get.suit(card, player) == map[name];
                                            }) > 0 &&
                                            player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                        ) {
                                            var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == get.suit(card, player)) {
                                        return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                                    }
                                    return 0;
                                }
                                return 1;
                            },
                            selectCard: [1, 2],
                            complexCard: true,
                            position: 'hes',
                            filterCard(card, player, event) {
                                if (ui.selected.cards.length) {
                                    return get.suit(card, player) == get.suit(ui.selected.cards[0], player);
                                }
                                event = event || _status.event;
                                var filter = event._backup.filterCard;
                                var name = get.suit(card, player);
                                if (name == 'club' && filter(get.autoViewAs({ name: 'shan' }, 'unsure'), player, event)) {
                                    return true;
                                }
                                if (name == 'diamond' && filter(get.autoViewAs({ name: 'sha', nature: 'fire' }, 'unsure'), player, event)) {
                                    return true;
                                }
                                if (name == 'spade' && filter(get.autoViewAs({ name: 'wuxie' }, 'unsure'), player, event)) {
                                    return true;
                                }
                                if (name == 'heart' && filter(get.autoViewAs({ name: 'tao' }, 'unsure'), player, event)) {
                                    return true;
                                }
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'diamond';
                                            break;
                                        case 'respondShan':
                                            name = 'club';
                                            break;
                                        case 'save':
                                            name = 'heart';
                                            break;
                                    }
                                    if (!player.countCards('hes', { suit: name })) {
                                        return false;
                                    }
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao'];
                                        var map = { sha: 'diamond', tao: 'heart' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (
                                                player.countCards('hes', function (card) {
                                                    return (name != 'sha' || get.value(card) < 5) && get.suit(card, player) == map[name];
                                                }) > 0 &&
                                                player.getUseValue({
                                                    name: name,
                                                    nature: name == 'sha' ? 'fire' : null,
                                                }) > 0
                                            ) {
                                                var temp = get.order({
                                                    name: name,
                                                    nature: name == 'sha' ? 'fire' : null,
                                                });
                                                if (temp > max) {
                                                    max = temp;
                                                }
                                            }
                                        }
                                        max /= 1.1;
                                        return max;
                                    }
                                    return 2;
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) {
                                    return true;
                                }
                                if (name == 'wuxie') {
                                    return player.countCards('hes', { suit: 'spade' }) > 0;
                                }
                                if (name == 'tao') {
                                    return player.countCards('hes', { suit: 'heart' }) > 0;
                                }
                            },
                            group: ['wmsj_kang', 'wmsj_世界弦_num', 'wmsj_世界弦_discard', 'wmsj_世界弦_1'],
                            subSkill: {
                                num: {
                                    trigger: { player: 'useCard' },
                                    forced: true,
                                    popup: false,
                                    filter(event) {
                                        var evt = event;
                                        return ['sha', 'tao'].includes(evt.card.name) && evt.skill == 'wmsj_世界弦' && evt.cards && evt.cards.length == 2;
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                                discard: {
                                    trigger: { player: ['useCardAfter', 'respondAfter'] },
                                    forced: true,
                                    popup: false,
                                    logTarget() {
                                        return _status.currentPhase;
                                    },
                                    autodelay(event) {
                                        return event.name == 'respond' ? 0.5 : false;
                                    },
                                    filter(evt, player) {
                                        return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'wmsj_世界弦' && evt.cards && evt.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                                    },
                                    content() {
                                        player.line(_status.currentPhase, 'green');
                                        player.discardPlayerCard(_status.currentPhase, 'he', true);
                                    },
                                },
                                1: {
                                    trigger: {
                                        player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                        source: ['damageBegin1'],
                                    },
                                    silent: true,
                                    firstDo: true,
                                    forced: true,
                                    charlotte: true,
                                    superCharlotte: true,
                                    persevereSkill: true,
                                    filter(event, player) {
                                        if (event.name == 'damage') return event.player.hasMark('wmsj_气泡');
                                        if (event.getl && !event.getl(player)) {
                                            return false;
                                        }
                                        return player.countCards('h') < 6;
                                    },
                                    async content(event, trigger, player) {
                                        if (trigger.name == 'damage') {
                                            trigger.num += 2;
                                        } else {
                                            await player.drawTo(6);
                                        }
                                    },
                                },
                            },
                        },
                    },
                    translate: {
                        //同一包角色分栏
                        wmsj_完美世界: '完美世界',
                        wmsj_凸变英雄X: '凸变英雄X',
                        wmsj_奇思妙想: '奇思妙想',
                        wmsj_赛尔Boss: '赛尔Boss',
                        wmsj_界园志异: '界园志异',
                        wmsj_拳皇: '拳皇',
                        wmsj_JoJo: 'JoJo',

                        //角色名和前缀
                        wmsj_征: '天命主宰·征',
                        wmsj_服: '天命主宰·服',
                        wmsj_征服: '天命主宰·征服',
                        wmsj_X: 'X',
                        wmsj_荒天帝: '荒天帝',
                        wmsj_叶天帝: '叶天帝',
                        wmsj_狠人大帝: '狠人大帝',
                        wmsj_尸骸仙帝: '尸骸仙帝',
                        wmsj_柳神: '柳神',
                        wmsj_无始大帝: '无始大帝',
                        wmsj_石毅: '石毅',
                        wmsj_叶倾仙: '叶倾仙',
                        wmsj_十冠王: '十冠王',
                        wmsj_天道: '天道',
                        wmsj_圣主: '圣主',
                        wmsj_岁相: '岁相',
                        wmsj_谱尼: '圣灵谱尼',
                        wmsj_咤克斯: '咤克斯',
                        wmsj_鲁路修: '鲁路修',
                        wmsj_CC: 'C.C',
                        wmsj_孙悟空: '自在极意（完全体）孙悟空',
                        wmsj_奈斯: '奈斯',
                        wmsj_女王: '女王',
                        wmsj_崩坏之抹消者: '崩坏之抹消者',
                        wmsj_雅格威尔: '雅格威尔',
                        wmsj_伊格尼斯: '无限·伊格尼斯',
                        wmsj_雅格威克: '雅格威克',
                        wmsj_冥界草: '冥界草',
                        wmsj_奇迹与你: '奇迹与你',
                        wmsj_超越天堂: '超越天堂',
                        wmsj_天堂制造: '天堂制造',
                        wmsj_黄金体验: '黄金体验镇魂曲',
                        wmsj_银色战车: '银色战车镇魂曲',
                        wmsj_软又湿: '软又湿·超越',
                        wmsj_牙4: '牙4',

                        //技能部分

                        //———————————————————————————————————————————————————————————————————奇迹与你 血量：4/4 势力:神
                        wmsj_灾厄洪流: '灾厄洪流',
                        wmsj_灾厄洪流_info: '持恒技，你受到伤害前进行判定，若为黑色则防止并令伤害来源进行闪电，火山，浮雷，洪水的随机两个进行判定然后你摸两张牌。',
                        wmsj_灾厄降临: '灾厄降临',
                        wmsj_灾厄降临_info: '准备阶段开始时，你选择任意一名角色，分别进行两次闪电、火山、洪水和浮雷的判定；你使用牌没有次数限制，你的攻击距离为无限大。',
                        wmsj_灾厄回流: '灾厄回流',
                        wmsj_灾厄回流_info: '准备阶段你回复所有体力；翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。',

                        //———————————————————————————————————————————————————————————————————超越天堂 血量：7/7 势力:神

                        wmsj_超越: '超越·如我所愿',
                        wmsj_超越_info: '准备阶段，你依次执行下列选项：1.对任意名一名角色造成随机3~5点伤害；2.摸10张牌；3.增加3点体力上限并回复所有体力；4.造成的伤害+1（无限叠加）；5.让任意名角色造成伤害-1（无限叠加）。',
                        wmsj_超越世界: '超越·世界',
                        wmsj_超越世界_info: '①一名角色的回合结束时，若你本回合内杀死过角色，则你可以进行一个额外的回合。②准备阶段，你选择任意名角色获得“超越世界”标记，拥有“超越世界”标记的角色跳过摸牌阶段。',
                        wmsj_无所不能: '超越·无所不能',
                        wmsj_无所不能_info: '①你的手牌上限为无限，你使用牌无距离次数限制。②翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效， 你的技能无法被无效失去。③出牌阶段限5次，你可以将手牌当任意牌使用。',

                        //———————————————————————————————————————————————————————————————————天堂制造 血量：5/5 势力:神
                        wmsj_缓慢: '世界加速· 缓慢',
                        wmsj_缓慢_info: '每轮开始你弃置任意名角色一半的手牌（ 向上取整）。',
                        wmsj_中速: '世界加速·中速',
                        wmsj_中速_info: '游戏开始你选择任意名角色获得“加速”标记，拥有“加速”标记的角色每使用一张牌时随机弃置一张牌。',
                        wmsj_高速: '世界加速·高速',
                        wmsj_高速_info: '①你每使用一张牌时摸一张牌。②你造成的伤害+2。③其他角色回合结束时受到1点伤害。',
                        wmsj_极速: '世界加速·极速',
                        wmsj_极速_info: '①翻面， 体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。②每轮结束时所有其他角色体力上限减少2点。③你的杀没有次数限制，攻击距离为无限大。④你的摸牌阶段多摸场上存活人数的牌。',

                        //———————————————————————————————————————————————————————————————————黄金体验镇魂曲 血量：7/7 势力:神
                        wmsj_黄镇: '你永远无法达到自己所想的真实',
                        wmsj_黄镇_info: '①翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。②你造成的伤害为目标的体力上限，你的牌没有使用次数限制，攻击距离为无限大，其他角色发动技能时无效并受到3点伤害，你的手牌数不低于9。',

                        //———————————————————————————————————————————————————————————————————银色战车镇魂曲 血量：3/4 势力:神
                        wmsj_银镇: '起源物种进化',
                        wmsj_银镇_info: '①翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。②游戏开始时，所有其他角色获得“进化”（进化：准备阶段受到2点伤害，摸牌阶段失去1点体力上限，出牌阶段弃置一半的手牌，弃牌阶段弃置的牌由你获得，结束阶段流失2点体力）。③你的手牌数不低于5，你造成的伤害+2。④你使用牌没有次数限制，你的攻击距离为无限大。',

                        //———————————————————————————————————————————————————————————————————牙4 血量：7/8 势力:神
                        wmsj_抓弹: 'A4抓弹',
                        wmsj_抓弹_info: '准备阶段你可以视为对任意名角色使用五张杀，并使其获得1个“回旋”标记。',
                        wmsj_回旋: '完美的黄金回旋',
                        wmsj_回旋_info: '①你对拥有“回旋”标记的角色造成的伤害为其体力上限。②你使用牌没有次数限制，攻击距离为无限大。③其他角色准备阶段失去“回旋”数量的体力。④翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。⑤你的手牌不低于5。⑥你的攻击免疫一切减伤。',

                        //———————————————————————————————————————————————————————————————————软又湿·超越 血量：4/5 势力:神
                        wmsj_气泡: '气泡·夺取',
                        wmsj_气泡_info: '游戏开始你让任意名角色获得1个“气泡”标记，拥有“气泡”标记的角色准备阶段选择一项：1.跳过摸牌阶段；2.跳过出牌阶段；3.减少一点体力上限。',
                        wmsj_世界弦: '世界弦',
                        wmsj_世界弦_info: '①翻面，体力上限减少对你无效，除实体牌以外的全部伤害对你无效，你的技能无法被无效失去。②你使用牌没有次数限制，攻击距离为无限大。③你对拥有“气泡”标记的角色造成的伤害+2。④你的手牌数量不低于6。⑥你可以将同花色的一至两张牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当普【无懈可击】。若你以此法转化了两张：红色牌，则此牌回复值或伤害值+1；黑色牌，则你弃置当前回合角色一张牌。',

                        //———————————————————————————————————————————————————————————————————雅格威克 血量：5/6/2 势力:神
                        wmsj_毁灭: '毁灭',
                        wmsj_毁灭_info: '持恒技，翻面，体力上限减少对你无效，你防止实体牌以外的所有伤害，你的技能不会失去或失效；游戏开始时，你令全场进入毁灭领域，其他角色回合结束时受到随机2~3点伤害。',
                        wmsj_地域星: '毁灭·地域星',
                        wmsj_地域星_info: '准备阶段开始时，你选择任意名其他角色对其造成1点火焰伤害。',
                        wmsj_无间: '崇杀永刑·无间',
                        wmsj_无间_info: '你的出牌阶段内，你使用的牌不可响应且你使用五张牌后本轮你不能成为其他角色使用牌的目标。',
                        wmsj_摩珂: '崇杀噬魂·摩珂',
                        wmsj_摩珂_info: '摸牌阶段开始时，你选择任意名其他角色弃置所有装备牌，若无装备牌则你弃置其一张牌并对其造成1点火焰伤害；其他角色回合开始时，你随机获得其一半的手牌（向上取整）。',
                        wmsj_灰烬: '天道·灰烬之棺',
                        wmsj_灰烬_info: '准备阶段开始时，你选择任意名其他角色翻面。',
                        wmsj_求道玉: '混沌求道玉',
                        wmsj_求道玉_info: '回合结束时，你对任意名其他角色随机造成2~4点伤害。',

                        //———————————————————————————————————————————————————————————————————冥界草 血量：5/6/2 势力:神
                        wmsj_浩劫: '浩劫',
                        wmsj_浩劫_info: '持恒技，翻面，体力上限减少对你无效，你防止实体牌以外的所有伤害，你的技能不会失去或失效；游戏开始时，你令全场进入浩劫领域，其他角色准备阶段开始时受到锦囊手牌数的伤害。',
                        wmsj_梦月: '冥·恶尽洗礼·梦月',
                        wmsj_梦月_info: '其他角色摸牌阶段开始时，你获得其至多两张牌，然后视为对其使用一张【杀】。',
                        wmsj_天国: '冥·天国陨落',
                        wmsj_天国_info: '出牌阶段开始时，你选择任意名其他角色对其随机造成2~4点伤害。',
                        wmsj_恶鬼: '冥·恶鬼',
                        wmsj_恶鬼_info: '你对其他角色造成伤害时，其获得1个“浩劫”；其他角色出牌阶段开始时，每有3个“浩劫”便受到1点雷电伤害；你的手牌上限为无限；你使用【杀】时，伤害基数+1。',
                        wmsj_冥爆: '冥·星域冥爆',
                        wmsj_冥爆_info: '每轮开始时，你选择任意名其他角色获得2个“浩劫”；你回合结束时，你对所有拥有“浩劫”的其他角色造成2点雷电伤害；你受到伤害时进行一次判定，若点数为2~7则防止此伤害并选择一名其他角色获得1个“浩劫”。',

                        //———————————————————————————————————————————————————————————————————崩坏之抹消者 血量：5/6/2 势力:神
                        wmsj_抹杀: '执行的抹杀',
                        wmsj_抹杀_info: '持恒技，翻面，体力上限减少对你无效，你防止实体牌以外的所有伤害，你的技能不会失去或失效，你造成的伤害+2。',
                        wmsj_寂灭: '万物寂灭之灾厄',
                        wmsj_寂灭_info: '持恒技，你造成伤害后摸两张牌，你受到伤害时进行一次判定，若点数为偶数则你防止此伤害并对一名其他角色造成2点伤害。',
                        wmsj_解除: '限制解除·世界的终极',
                        wmsj_解除_info: '持恒技，你的手牌上限与攻击范围为无限，你的手牌数不少于5。',
                        wmsj_混沌: '混沌·终焉',
                        wmsj_混沌_info: '游戏开始时，你进入终焉领域。①每个回合结束后你回复1点体力并增加1点体力上限。②每轮开始时，你对任意名其他角色造成2点伤害。③每轮开始时，所有玩家体力上限减1。',
                        //———————————————————————————————————————————————————————————————————雅格威尔 血量：5/6/2 势力:神
                        wmsj_焰欧: '里千贰百拾九式·焰欧',
                        wmsj_焰欧_info: '持恒技，准备阶段，你可以对两名其他角色造成2点火焰伤害；你造成的伤害+1。',
                        wmsj_天丛云: '里百二十一式·天从云',
                        wmsj_天丛云_info: '持恒技，准备阶段，你选择任意名其他角色获得1个“毁灭”标记，其他角色每有1个“毁灭”标记手牌上限-2且在其准备阶段受到1点火焰伤害。',
                        wmsj_死告: '混沌的死告',
                        wmsj_死告_info: '持恒技，翻面，体力上限减少对你无效，你防止实体牌以外的所有伤害，你的技能不会失去或失效；摸牌阶段，你可以让所有角色“毁灭”标记数翻倍；你每造成1点火焰伤害后摸一张牌。',
                        wmsj_陨落: '遥远之地狱陨落',
                        wmsj_陨落_info: '出牌阶段限一次，你可以令任意名其他角色受到1点火焰伤害。',
                        wmsj_枯竭: '世界枯竭',
                        wmsj_枯竭_info: '游戏开始时，你令全场进入世界枯竭领域，其他角色每轮开始时减少2点体力并弃置一半的牌（向上取整），你受到伤害时进行一次判定，若点数为3~9则防止此伤害。',
                        //———————————————————————————————————————————————————————————————————无限·伊格尼斯 血量：5/6/2 势力:神
                        wmsj_无限: '无限之境',
                        wmsj_无限_info: '持恒技，游戏开始时，你令全场进入无限领域，其他角色手牌上限变为1，每轮开始时你选择任意名其他角色获得1个“囚徒”标记，有“囚徒”标记的角色每有1个标记则造成伤害-1，摸牌数-1。',
                        wmsj_宇宙: '无限·合理的宇宙',
                        wmsj_宇宙_info: '准备阶段，你对拥有“囚徒”标记的角色随机造成2~5点伤害，若你本回合使用此技能杀死过其他角色则本回合你不能成为牌的目标。',
                        wmsj_利刃: '无限·天堂利刃',
                        wmsj_利刃_info: '你使用的【杀】额外结算一次且伤害基数+1，你的攻击范围为无限，你造成伤害后摸一张牌。',
                        wmsj_庇佑: '无限·天堂庇护',
                        wmsj_庇佑_info: '你受到伤害后对伤害来源造成等量伤害；你受到伤害时进行一次判定，若点数为7~13则防止之；你的回合结束时你回复3点体力；翻面，体力上限减少对你无效，你防止实体牌以外的所有伤害，你的技能不会失去或失效。',

                        //———————————————————————————————————————————————————————————————————奈斯 血量：4/4 势力:神
                        wmsj_完美英雄: '完美英雄',
                        wmsj_完美英雄_info: '持恒技，你的摸牌阶段摸牌数+3；你可使用【杀】的次数+2；你使用【杀】时，额外结算一次。',
                        wmsj_完美攻击: '完美攻击',
                        wmsj_完美攻击_info: '锁定技，你造成伤害后摸两张牌并获得1个“完美”；准备阶段，你可弃置5个“完美”令至多两名其他角色失去2点体力。',
                        wmsj_完美防御: '完美防御',
                        wmsj_完美防御_info: '锁定技，你受到伤害后，进行一次判定，若结果点数为1至5则回复此伤害值的体力。',
                        //———————————————————————————————————————————————————————————————————女王 血量：4/4 势力:神
                        wmsj_女王威严: '女王威严',
                        wmsj_女王威严_info: '持恒技，准备阶段，你获得任意名其他角色一张牌；你翻面时防止之；你使用的牌额外结算一次。',
                        wmsj_时滞领域: '时滞领域',
                        wmsj_时滞领域_info: '持恒技。①你使用牌时获得1个“时间”；你的手牌上限+X（X为“时间”数量）；你的“时间”数量达到如下数量时你获得对应效果：{1个：造成的伤害+1；3个：回合开始时回复3点体力；5个：摸牌阶段摸牌数+4；7个：出牌阶段开始时，对一名其他角色造成3点伤害；9个：回合结束时，弃置一名其他角色五张牌}。②游戏开始时，你令全场进入时滞领域，每轮开始时，其他角色随机弃置一半（向上取整）的牌。',
                        wmsj_时滞领域log: '时滞领域',
                        wmsj_制裁: '制裁·神诀',
                        wmsj_制裁_info: '锁定技，当你的“时间”数量达到15时，你选择任意名其他角色非锁定技失效并受到5点伤害。',

                        //———————————————————————————————————————————————————————————————————自在极意（完全体）孙悟空 血量：9/9 势力:神
                        wmsj_无我极境: '无我极境',
                        wmsj_无我极境_info: '游戏开始时，你摸30张牌，并使自己的攻击范围增加无限大，伤害改为null（会根据目标的血量和护盾变化），然后你令全场进入自在极境领域，除你以外的其他角色无法使用牌，技能全部失效，你不会死亡，使用牌没有次数限制。',
                        wmsj_自在极意: '真·自在极意',
                        wmsj_自在极意_info: '锁定技，你的技能不会失去或失效；你防止翻面、体力和体力上限减少；你不能成为其他角色使用牌的目标；你死亡前取消并令一名角色失去所有技能。',
                        wmsj_锻体: '锻体',
                        wmsj_锻体_info: '你可以将一张红色牌当火【杀】使用或打出。',
                        wmsj_仙豆: '仙豆',
                        wmsj_仙豆_info: '你可以将一张黑色牌当【桃】使用。',
                        wmsj_瞬移: '瞬移',
                        wmsj_瞬移_info: '你可以将一张黑色牌当【闪】使用或打出。',
                        wmsj_武心: '武心',
                        wmsj_武心_info: '你可以将一张红色牌当【无懈可击】使用。',
                        wmsj_聚元: '聚元',
                        wmsj_聚元_info: '锁定技，你的手牌数不小于六张。',
                        wmsj_筋斗: '筋斗',
                        wmsj_筋斗_info: '锁定技，你受到大于1点的伤害时，你摸一张牌并将此伤害削减为1点。',
                        wmsj_极意: '极意',
                        wmsj_极意_info: '出牌阶段，你可以选择一名其他角色所有技能失效并神圣死亡。',
                        wmsj_神之极境: '神之极境',
                        wmsj_神之极境_info: '锁定技，每轮开始时，你选择任意名其他角色获得其所有技能。',

                        //———————————————————————————————————————————————————————————————————鲁路修 血量：5/5 势力:神
                        wmsj_王之力: '王之力',
                        wmsj_王之力_info: '锁定技，出牌阶段开始时，你选择至多两名其他角色，其需要交给你两张牌然后你回复1点体力，否则你摸三张牌然后其失去1点体力。',
                        wmsj_零之镇魂曲: '零之镇魂曲',
                        wmsj_零之镇魂曲_info: '持恒技。①你的【杀】可以额外指定一名角色。②你造成伤害后获得1个“零”，你的手牌上限+X（X为“零”数量）。③回合开始时，你可以弃置3个“零”将体力值调整为当前已损失体力值。',
                        wmsj_geass: 'Geass',
                        wmsj_geass_info: '出牌阶段限三次，你可以选择两名其他角色A和B，A强制对B使用手牌中的随机一张伤害牌，若无伤害牌则其所有非锁定技失效并失去1点体力。',
                        wmsj_神谕执棋: '神谕执棋',
                        wmsj_神谕执棋_info: '锁定技，准备阶段，你观看牌堆顶X张牌（X为存活角色数）并将其以任意顺序置于牌堆顶或牌堆底，然后你可以弃置两张牌并获得一名其他角色两张牌，若其牌数不足则改为你摸三张牌。',
                        wmsj_王子: '王子',
                        wmsj_王子_info: '游戏开始时，若场上存在“C.C”且你和其为同一阵营，则你的阵营获得胜利。',

                        //———————————————————————————————————————————————————————————————————C.C 血量：4/4 势力:神
                        wmsj_不死契约: '不死契约',
                        wmsj_不死契约_info: '锁定技，每回合限一次，当你进入濒死时，你将体力回复至1点，然后选择一名角色执行下列一项：1.增加1点体力上限并回复1点体力；2.摸三张牌。',
                        wmsj_命运编织: '命运编织',
                        wmsj_命运编织_info: '出牌阶段限一次，你可以进行一次判定，若结果为：红色，你选择一名其他角色直到其回合结束不能使用或打出红色手牌；黑色，你摸三张牌并选择一名其他角色失去2点体力。',
                        wmsj_cc_feng: '封印',
                        wmsj_魅惑: '魅惑的Geass',
                        wmsj_魅惑_info: '转换技，锁定技，你成为其他角色伤害牌目标后，阳：你获得对方一张牌并令其失去1点体力；阴：你令此牌对你无效并摸一张牌。',
                        wmsj_公主: '公主',
                        wmsj_公主_info: '游戏开始时，若场上存在“鲁路修”且你和其为同一阵营，则你的阵营获得胜利。',

                        //———————————————————————————————————————————————————————————————————X 血量：9/10 势力:神
                        wmsj_全知全能: '全知全能',
                        wmsj_全知全能_info: '锁定技，你的技能不会失去或失效；你防止翻面、体力和体力上限减少；你不能成为其他角色使用牌的目标；你死亡前取消并令一名角色失去所有技能。',
                        wmsj_超越维度: '超越维度',
                        wmsj_超越维度_info: '锁定技，每当有角色摸牌后/使用牌后/回复体力后，你获得〖二维〗/〖三维〗/〖四维〗，然后若你获得了上述所有技能，则你获得〖五维〗。',
                        wmsj_零维: '零维',
                        wmsj_零维_info: '锁定技。①游戏开始时，你选择一名角色减少其体力上限+10的体力上限，然后选择一名角色对其使用五张随机属性的实体【杀】。②每轮开始时，所有其他角色流失999点体力。',
                        wmsj_二维: '二维',
                        wmsj_二维_info: '锁定技，准备阶段，你选择一名其他角色跳过其下回合的出牌阶段和摸牌阶段。',
                        wmsj_三维: '三维',
                        wmsj_三维_info: '锁定技，其他角色获得牌时，改为你获得之。',
                        wmsj_四维: '四维',
                        wmsj_四维_info: '锁定技，其他角色回复体力和增加体力上限后，你执行相同操作；你对其他角色造成伤害前，改为造成X点神圣伤害并摸等量的牌（X为对方体力值与护甲之和+10）；你使用的牌无次数限制且不可响应。',
                        wmsj_五维: '五维',
                        wmsj_五维_info: '锁定技，其他角色进入濒死前立即死亡；你获得牌后，若手牌数达到10则你获得〖改变未来〗。',
                        wmsj_改变未来: '改变未来',
                        wmsj_改变未来_info: '锁定技，其他角色获得牌后，若手牌数超过10则其立即死亡；回合开始时，你可以选择一名其他角色翻面并废除所有装备栏；游戏开始时，你选择一名其他角色失去所有技能。',
                        wmsj_准点下班: '准点下班',
                        wmsj_准点下班_info: '锁定技，你的第五个回合结束后，你的阵营立即获胜。',

                        //———————————————————————————————————————————————————————————————————征 血量：8/8/3 势力:神
                        wmsj_天命加护: '主宰·天命加护',
                        wmsj_天命加护_info: '持恒技，每轮开始时，你回复所有体力；你防止翻面和体力上限扣减；其他角色回复体力后，你回复等量体力。',
                        wmsj_乾坤扭转: '主宰·乾坤扭转',
                        wmsj_乾坤扭转_info: '持恒技。①你的技能不会失去；你进入濒死时，将体力回复至3点；其他角色使用牌时，你摸两张牌。②你可以将同花色的一至两张牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当普【无懈可击】。若你以此法转化了两张：红色牌，则此牌回复值或伤害值+1；黑色牌，则你弃置当前回合角色一张牌。',
                        wmsj_唯我独尊: '主宰·唯我独尊',
                        wmsj_唯我独尊_info: '持恒技，当你对其他角色造成伤害时，你可以选择一项：1. 取其1点体力和体力上限；2. 获得其两张牌（不足则改为令其失去2点体力）。3.令其废除所有装备栏（已全部废除则令此伤害翻倍）；4.令其翻面（若以翻至背面则改为令此伤害翻倍）。每项每回合限一次。',
                        wmsj_征战天下: '主宰·征战天下',
                        wmsj_征战天下_info: '持恒技，其他角色的回合开始时，你可以弃置一张牌，若如此做，该角色于本回合内首次摸牌、弃牌或使用每种牌名的牌后，你视为对其使用【杀】，若你弃置的牌为【杀】，你令其所有技能失效，上述效果持续至本回合结束或其对你造成伤害。',
                        wmsj_我自不凡: '主宰·我自不凡',
                        wmsj_我自不凡_info: '持恒技，你使用锦囊牌时，你摸两张牌；摸牌和结束阶段，你获得牌堆中的两锦囊牌；你受到大于3点的伤害时，你将其削减为3点。',

                        //———————————————————————————————————————————————————————————————————服 血量：8/8/3 势力:神
                        wmsj_命运无常: '主宰·命运无常',
                        wmsj_命运无常_info: '持恒技，其他角色的判定生效前，你可以打出一张手牌替换之，然后你令其进行一次【闪电】判定。',
                        wmsj_并天而行: '主宰·并天而行',
                        wmsj_并天而行_info: '持恒技，你每受到1点伤害或失去1点体力后，你摸两张牌并进行一次判定，若为红色则你回复1点体力，若为黑色则你获得1点护甲。',
                        wmsj_极天剑影: '主宰·极天剑影',
                        wmsj_极天剑影_info: '持恒技，出牌阶段限一次，你弃置三张牌并选择一名其他角色对其造成3点神圣伤害。',
                        wmsj_天命所归: '主宰·天命所归',
                        wmsj_天命所归_info: '持恒技，每个回合结束后，你增加1点体力上限并回复1点体力；你的体力上限达到30时，你的阵营获得胜利；你的摸牌阶段开始时，你可以选择一名其他角色失去2点体力。',

                        //———————————————————————————————————————————————————————————————————尸骸仙帝 血量：5/6 势力:神
                        wmsj_黑暗动乱: '黑暗动乱',
                        wmsj_黑暗动乱_info: '①游戏开始时，你获得9个“黑暗之源”；准备阶段，你获得存活角色数的“黑暗之源”；你每受到1点伤害后，获得2个“黑暗之源”。②出牌阶段限一次，你可以弃置至多5个“黑暗之源”并选择一项：1.摸2X张牌牌；2.令一名其他角色弃置X张手牌，不足则流失X点体力（X为弃置“黑暗之源”数量）。',
                        wmsj_帝者俯视: '帝者俯视',
                        wmsj_帝者俯视_info: '锁定技。①其他角色准备阶段你可以观看并获得其一张牌；你的手牌上限+X（X为你“黑暗之源”数量）；你不能被翻面。②你使用的【杀】无次数限制且指定目标后可以弃置1个“黑暗之源”使此【杀】不可响应。',
                        wmsj_不灭元神: '不灭元神',
                        wmsj_不灭元神_info: '锁定技，你进入濒死时，回复2点体力并弃置判定区的所有牌，然后获得3个“黑暗之源”。',
                        wmsj_化道寂灭: '化道寂灭',
                        wmsj_化道寂灭_info: '觉醒技，你累计获得“黑暗之源”数量达到20个后，你扣减1点体力上限并获得〖万古独一〗。',
                        wmsj_万古独一: '万古独一',
                        wmsj_万古独一_info: '限定技，出牌阶段，你可以弃置20个“黑暗之源”并失去一半体力（向上取整），然后令所有其他角色依次随机执行一项：1.弃置所有的牌并失去2点体力；2.受到4点无来源的雷电伤害。',

                        //———————————————————————————————————————————————————————————————————柳神 血量：5/6 势力:神
                        wmsj_祭灵之佑: '祭灵之佑',
                        wmsj_祭灵之佑_info: '锁定技。①游戏开始时，你获得3个“柳枝”；你的回合结束时，你获得1个“柳枝”。②每当一名角色进入濒死时，你可以弃置1个“柳枝”令其回复1点体力并摸一张牌。③其他角色回合结束时，你可以弃置1个“柳枝”令其摸两张牌。',
                        wmsj_万法皆空: '万法皆空',
                        wmsj_万法皆空_info: '锁定技。①你不能成为其他角色的延时锦囊牌的目标，你的手牌上限+X（X为你的“柳枝”数量）。②每当你使用或打出一张【闪】时，你摸一张牌。③你成为其他角色普通锦囊牌目标时，你获得1个“柳枝”并摸一张牌。④回合开始时，你可以弃置1个“柳枝”并令一名其他角色本回合失去所有技能。',
                        wmsj_涅槃重生: '涅槃重生',
                        wmsj_涅槃重生_info: '锁定技，每局游戏限两次，你每当你进入濒死时，你将体力回复至2点并获得2个“柳枝”，然后你可以移动场上的一张牌。',
                        wmsj_涅槃重生log: '涅槃重生',
                        wmsj_雷帝裁决: '雷帝裁决',
                        wmsj_雷帝裁决_info: '出牌阶段限一次，你弃置2个“柳枝”并选择一名其他角色受到1点无来源的雷电伤害并随机弃置一张牌，若此牌为【闪】则你获得之。',

                        //———————————————————————————————————————————————————————————————————无始大帝 血量：6/8 势力:神
                        wmsj_无始亦无终: '无始亦无终',
                        wmsj_无始亦无终_info: '锁定技。①每轮开始时，你执行一个额外的出牌阶段。②回合开始时，你摸一张牌并观看牌堆顶的三张牌，你可以将其以任意顺序置于牌堆顶或牌堆底。③你的回合内，所有其他角色减少一点体力上限。',
                        wmsj_大道宝瓶: '大道宝瓶',
                        wmsj_大道宝瓶_info: '锁定技。①你不能成为其他角色的多目标锦囊牌的目标。②你成为其他角色牌的目标时，你可以进行一次判定，若结果为红色则你摸一张牌，否则你获得此判定牌。③回合结束阶段，你可以弃置一张牌并选择一名其他角色，其于其的下个回合内无法使用你弃置牌的同类型牌。',
                        wmsj_横推诸世敌: '横推诸世敌',
                        wmsj_横推诸世敌_info: '①出牌阶段限一次，你弃置一张牌并选择一名其他角色视为对其使用一张【杀】，此【杀】命中后你摸一张牌。②你使用【杀】时，令此【杀】伤害基数+1，然后你可以弃置一张牌令此【杀】不可响应。',
                        wmsj_无始钟镇: '无始钟·镇',
                        wmsj_无始钟镇_info: '出牌阶段限一次，你可以弃置一半的手牌（向上取整）并选择至多三名其他角色，其需弃置等量的牌否则受到2点无来源的雷电伤害。',

                        //———————————————————————————————————————————————————————————————————石毅 血量：4/4 势力:神
                        wmsj_重瞳洞悉: '重瞳·洞悉',
                        wmsj_重瞳洞悉_info: '锁定技。①你成为其他角色牌的目标时，你可以观看其手牌并弃置弃中一张牌，若弃置牌与此牌类别相同则此牌对你无效。②回合开始时，你观看牌堆顶X张牌（X为存活角色数），以任意顺序置于牌堆顶或牌堆底。',
                        wmsj_宝术掠夺: '宝术·掠夺',
                        wmsj_宝术掠夺_info: '出牌阶段和结束阶段开始时，你可以弃置一张牌并选择一名其他角色，你观看并获得其两张牌，称之为“宝”，然后根据获得牌类型执行对应一项：1.基本牌，你视为对其使用一张【杀】；2.锦囊牌，其随机弃置一张牌；3.装备牌，你使用并摸一张牌。',
                        wmsj_宝术掠夺_tag: '宝',
                        wmsj_至尊骨无畏: '至尊骨·无畏',
                        wmsj_至尊骨无畏_info: '锁定技。①你使用“宝”时摸一张牌且使此牌不可响应。②你使用【杀】时，可以弃置一张“宝”并额外指定任意一个其他目标。',
                        wmsj_重瞳开天: '重瞳开天·镇杀',
                        wmsj_重瞳开天_info: '限定技，出牌阶段，你弃置所有“宝”（至少三张）并选择至多等量其他角色，其受到2点无来源的雷电伤害，然后你观看其所有牌并获得其中至多三张牌。',

                        //———————————————————————————————————————————————————————————————————叶倾仙 血量：5/5 势力:神
                        wmsj_超然世外: '超然世外',
                        wmsj_超然世外_info: '锁定技，你与其他角色距离-X，其他角色与你距离+Y（X为存活角色数，Y为你已损失体力值）。',
                        wmsj_倾仙漫步: '倾仙漫步',
                        wmsj_倾仙漫步_info: '回合开始时，你可以选择将本回合判定阶段、摸牌阶段和弃牌阶段中的一个改为出牌阶段并执行对应一项：1.判定阶段，你移动场上的一张牌；2.摸牌阶段，你亮出牌堆顶五张牌并获得其中的红色牌；3.弃牌阶段，你令一名角色摸一张牌然后再弃置一名角色的一张牌。',
                        wmsj_红尘劫: '因果·红尘劫',
                        wmsj_红尘劫_info: '锁定技，出牌阶段开始时，你弃置所有手牌并获得牌堆中体力上限张不同牌名的牌，若你因牌堆缺少牌名而少摸牌，你可以令一名其他角色流失X点体力（X为以此法少摸的牌数）。',
                        wmsj_往生曲: '仙古·往生曲',
                        wmsj_往生曲_info: '限定技，出牌阶段，你选择任意名其他角色并进行一次判定，若结果：不为红色则其随机翻面或弃置所有牌，不为黑色则其受到2点无来源雷电伤害。然后其回合结束时，你执行一个额外的出牌阶段（每名角色限一次）。',
                        wmsj_仙古往生: '仙古·往生曲',

                        //———————————————————————————————————————————————————————————————————十冠王 血量：6/6 势力:神
                        wmsj_十世沉淀: '十世沉淀',
                        wmsj_十世沉淀_info: '锁定技。①游戏开始时，你获得10个“冠王”；你的手牌上限+X（X为你的“冠王”数量）；你造成或受到伤害后获得等量“冠王”。②出牌阶段开始时，你可以弃置1个“冠王”视为对一名其他角色使用一张不可响应且伤害基数+1的【杀】。',
                        wmsj_天子之法: '天子之法',
                        wmsj_天子之法_info: '出牌阶段限三次，你弃置2个“冠王”并选择两项：{1.〖龙拳〗对一名其他角色造成1点伤害；2.〖宝术〗获得一名其他角色的一张牌；3.〖仙气〗令一名角色摸两张牌；4.〖御甲〗令一名角色回复1点体力；5.〖镇封〗你观看并获得一名其他角色的一张牌，其无法使用或打出与此牌同花色的手牌直到其回合结束}。',
                        wmsj_天子之法_龙拳: '天子之法·龙拳',
                        wmsj_天子之法_宝术: '天子之法·宝术',
                        wmsj_天子之法_仙气: '天子之法·仙气',
                        wmsj_天子之法_御甲: '天子之法·御甲',
                        wmsj_天子之法_镇封: '天子之法·镇封',
                        wmsj_世界树: '世界树·护',
                        wmsj_世界树_info: '锁定技，你不能成为其他角色延时锦囊牌的目标；你成为伤害牌的目标时，你可以弃置1个“冠王”使此牌对你无效；结束阶段若你未受伤，则你获得1个“冠王”。',
                        wmsj_冠绝当世: '冠绝当世',
                        wmsj_冠绝当世_info: '觉醒技，当你累计获得了20个“冠王”后，则你减1点体力上限并获得〖无敌术〗和〖十世无敌〗。',
                        wmsj_无敌术: '无敌术',
                        wmsj_无敌术_info: '限定技，出牌阶段，你弃置10个“冠王”并选择至多三名其他角色，其随机执行一项：1.受到3点无来源雷电伤害；2.弃置所有牌。',
                        wmsj_十世无敌: '十世无敌',
                        wmsj_十世无敌_info: '持恒技，你使用的牌无次数限制，你对其他角色造成的伤害+1，你使用锦囊牌时摸一张牌。',

                        //———————————————————————————————————————————————————————————————————狠人大帝 血量：4/4 势力:神
                        wmsj_吞天魔功: '吞天魔功',
                        wmsj_吞天魔功_info: '锁定技。①当你成为其他角色牌的目标后，进行一次判定，若为黑色则你获得判定牌并令此牌对你无效。②每当一名角色使用牌时，你获得1个“道果”；当“道果”数量为5的倍数时，你增加1点体力上限并回复1点体力；你的手牌上限+X（X为你“道果”数的两倍）。',
                        wmsj_不灭天功: '不灭天功',
                        wmsj_不灭天功_info: '觉醒技，准备阶段，若你的“道果”数量达到10个，你减1点体力上限并获得〖一念花开〗和〖斩尽仙道〗，然后本局游戏你的造成的伤害+1。',
                        wmsj_一念花开: '一念花开',
                        wmsj_一念花开_info: '限定技，出牌阶段，你可以弃置5个“道果”并选择任意名其他角色，令其依次选择一项：⒈随机弃置五张牌（不足则无法选择此选项）。⒉你对其造成2点无视防具的雷电伤害。',
                        wmsj_斩尽仙道: '斩尽仙道',
                        wmsj_斩尽仙道_info: '锁定技。①其他角色出牌阶段开始时，其可以选择交给你一张牌并摸一张牌，然后你获得1个“道果”。②你使用的【杀】无次数限制且你使用单目标伤害牌时，可以额外指定任意数量的任意其他目标。',

                        //———————————————————————————————————————————————————————————————————叶天帝 血量：4/4 势力:神
                        wmsj_荒古圣体: '荒古圣体',
                        wmsj_荒古圣体_info: '锁定技。①你的体力上限始终为全场最高。②每局游戏限一次，准备阶段，若你体力值不大于3，你增加1点体力上限并获得已损失体力值的护甲，然后获得〖圣体异象〗和〖万物母气鼎〗。',
                        wmsj_泯灭: '泯灭',
                        wmsj_泯灭_info: '锁定技，你的攻击范围+X，你使用的伤害牌额外结算X次（X为你已损失体力值，至少为1）。',
                        wmsj_九秘: '九秘·皆',
                        wmsj_九秘_info: '回合开始和结束时，你可以视为使用一张普通锦囊牌。',
                        wmsj_圣体异象: '圣体异象',
                        wmsj_圣体异象_info: '锁定技。当你使用【杀】或伤害类普通锦囊牌时，你令目标随机弃置X张牌且所有手牌数小于你的角色不能响应此牌。（X为你已损失体力值，至少为1）',
                        wmsj_万物母气鼎: '万物母气鼎',
                        wmsj_万物母气鼎_info: '锁定技，当其他角色的黑色牌因弃置或判定而进入弃牌堆后，你获得之。',
                        wmsj_万物母气鼎_judge: '万物母气鼎',
                        wmsj_万物母气鼎_discard: '万物母气鼎',

                        //———————————————————————————————————————————————————————————————————荒天帝 血量：4/5/1 势力:神
                        wmsj_以身为种: '以身为种',
                        wmsj_以身为种_info: '锁定技，你登场时获得3枚“道种”标记；你每造成/受到1点伤害后获得1枚“道种”，你的手牌上限+X（X为“道种”数量）。',
                        wmsj_他化自在: '他化自在',
                        wmsj_他化自在_info: '①回合开始时，若你的“道种”数不少于7，你可以减1点体力上限并获得技能【他化万古】，然后此效果失效。②准备阶段，你可以弃置5枚“道种”，对一名其他角色造成2点雷电伤害。',
                        wmsj_他化自在_1: '他化自在',
                        wmsj_他化万古: '他化万古',
                        wmsj_他化万古_info: '出牌阶段限一次，你可以弃置所有“道种”，然后指定一名角色弃置手牌中所有的【杀】，若其弃置【杀】数量小于你弃置的“道种”数则受到2点伤害，若其因此进入濒死状态，则你获得其所有牌。',
                        wmsj_独断万古: '独断万古',
                        wmsj_独断万古_info: '锁定技。①游戏开始时，你声明并记录5个基本牌或普通锦囊牌牌名，每当一名角色使用或打出记录牌时你摸一张牌。②当你累计获得30枚“道种”后，你获得〖身化大道〗。',
                        wmsj_独断万古_3: '独断万古',
                        wmsj_身化大道: '身化大道',
                        wmsj_身化大道_info: '①你每获得30枚“道种”后，你立即结束当前回合并进行一个额外的回合。②一名角色的回合结束时，若你本回合内杀死过角色，则你可以进行一个额外的回合。',

                        //———————————————————————————————————————————————————————————————————天道 血量：1/1 势力:神
                        wmsj_天道判定: '天道',
                        wmsj_天道判定_info: '锁定技。①你拥有〖免疫〗且你始终跳过你的回合。②你死亡前取消并令一名其他角色失去所有技能。③游戏第10轮开始时，②失效然后你死亡。④其他角色的判定生效前，你观看牌堆顶七张牌并选择一张作为判定结果，此结果不可更改。',
                        wmsj_天劫: '天劫',
                        wmsj_天劫_info: '锁定技。①每轮开始时，你选择任意名其他角色获得1个“劫”。②有“劫”的角色体力不大于0时立即死亡且每触发下列一项时，立即从【闪电】，【洪水】，【火山】，【兵粮寸断】,【乐不思蜀】中随机抽取一张判定：摸牌阶段外获得牌；出牌阶段外失去牌；回复体力后。',
                        wmsj_紫霄: '紫霄',
                        wmsj_紫霄_info: '锁定技，每轮结束时，所有其他角色进行X次【闪电】判定，〖天劫〗和〖紫霄〗的判定伤害不可减免且清除目标所有护甲。',

                        //——————————————————————————————————————————————————————————————————圣主 血量：12/12/12 势力:神
                        wmsj_鼠: '鼠符咒',
                        wmsj_鼠_info: '出牌阶段限一次，你可以弃置一张装备牌，然后从牌堆获得一张牌基本牌和一张锦囊牌。',
                        wmsj_牛: '牛符咒',
                        wmsj_牛_info: '锁定技，你的杀伤害+1。',
                        wmsj_虎: '虎符咒',
                        wmsj_虎_info: '出牌阶段限一次，你可以弃置任意张颜色相同的牌并获得等量与之颜色不同的牌，若此时你手牌中两种颜色的牌数量相同,你回复一点体力。',
                        wmsj_兔: '兔符咒',
                        wmsj_兔_info: '锁定技，你计算与其他角色距离-1，其他角色计算与你距离+1，你每回合使用的第一张牌没有距离限制。',
                        wmsj_龙: '龙符咒',
                        wmsj_龙_info: '出牌阶段限一次，你可以弃置一张红色手牌对一名其他角色造成1点火焰伤害，若其在你攻击范围内且你弃置的为♥️️牌，此伤害+1。',
                        wmsj_蛇: '蛇符咒',
                        wmsj_蛇_info: '锁定技，其他角色使用【杀】或普通锦囊牌指定你为目标时，进行一次判定，若判定结果与此牌颜色不同，此牌对你无效。',
                        wmsj_马: '马符咒',
                        wmsj_马_info: '锁定技，回合开始时，你将体力回复至体力上限并弃置判定区的牌。',
                        wmsj_羊: '羊符咒',
                        wmsj_羊_info: '①准备/结束阶段，你可以翻面，若你翻至背面，你可以观看一名其他角色角色的手牌。②出牌阶段限一次，你可以令一名攻击范围内的其他角色翻面。',
                        wmsj_猴: '猴符咒',
                        wmsj_猴_info: '你可以将一张基本牌当做任意基本牌使用或打出。',
                        wmsj_鸡: '鸡符咒',
                        wmsj_鸡_info: '锁定技。①其他角色计算与你的距离+2。②出牌阶段限一次，你可以令一名攻击范围内的其他角色的所有手牌置于其武将牌上称为<浮>直到其回合开始时获得之。',
                        wmsj_狗: '狗符咒',
                        wmsj_狗_info: '锁定技，当你的体力上限减少时，防止之，当你进入濒死状态，你将体力回复至1点。',
                        wmsj_猪: '猪符咒',
                        wmsj_猪_info: '出牌阶段限一次，你可以弃置一张手牌对一名攻击范围内的其他角色造成1点雷电伤害。',

                        //———————————————————————————————————————————————————————————————————界园志异/岁相/岁时 血量：12/12/12 势力:神
                        wmsj_子武: '子武',
                        wmsj_子武_info: '锁定技，你对其他角色造成伤害增加双方体力之差，其他角色进入濒死状态前你可令其立即死亡。',
                        wmsj_子武_1: '斩杀',
                        wmsj_丑谋: '丑谋',
                        wmsj_丑谋_info: '锁定技，你不因使用或打出而失去手牌后，选择一名其他角色视为对其使用随机数量张不同牌名的伤害牌（至多8张）。',
                        wmsj_寅诗: '寅诗',
                        wmsj_寅诗_info: '锁定技，你只能因非转化实体牌的伤害减少体力且因此减少体力后不会再因同名牌减少体力直到回合结束。',
                        wmsj_卯律: '卯律',
                        wmsj_卯律_info: '锁定技，你的阶段和回合被跳过时或你出牌阶段外每受到两次伤害后，你执行一个额外的出牌阶段。',
                        wmsj_辰师: '辰师',
                        wmsj_辰师_info: '锁定技，你使用的伤害牌额外结算一次。',
                        wmsj_巳农: '巳农',
                        wmsj_巳农_info: '锁定技，你摸牌/回复体力时，摸牌数/回复量+1。',
                        wmsj_午商: '午商',
                        wmsj_午商_info: '锁定技，出牌阶段开始和结束时，你将手牌补充至体力上限。',
                        wmsj_未建: '未建',
                        wmsj_未建_info: '锁定技，你防止体力上限削减且你不因濒死结算而死亡前取消并结束当前阶段。',
                        wmsj_申铸: '申铸',
                        wmsj_申铸_info: '锁定技，你无视其他角色防具且对其造成伤害前令其清除并无法获得护甲直到回合结束。',
                        wmsj_酉疗: '酉疗',
                        wmsj_酉疗_info: '锁定技，敌方角色摸牌阶段外获得牌后弃置所有非黑色牌然后你回复等量体力。',
                        wmsj_戌绘: '戌绘',
                        wmsj_戌绘_info: '锁定技，你使用牌无距离次数限制且你减少体力时至多减少1点。',
                        wmsj_亥食: '亥食',
                        wmsj_亥食_info: '锁定技，回合开始时你和所有友方角色回复1点体力并摸一张牌，然后对所有敌方角色造成1点伤害。',

                        //———————————————————————————————————————————————————————————————————圣灵谱尼 血量：7/7 势力:神
                        wmsj_虚无: '虚无',
                        wmsj_虚无_info: '锁定技，你只能因非转化实体牌伤害减少体力，你受到的伤害不超过1且受到伤害后本回合防止同名牌伤害。',
                        wmsj_元素: '元素',
                        wmsj_元素_info: '锁定技，你对其他角色造成伤害附加随机属性且令其清除并无法获得护甲直到回合结束。',
                        wmsj_能量: '能量',
                        wmsj_能量_info: '锁定技，你对体力高于你的角色造成伤害增加双方体力之差，你受到伤害后对伤害来源造成两倍伤害值的伤害。',
                        wmsj_生命: '生命',
                        wmsj_生命_info: '锁定技，回合开始时，你将手牌补充至体力上限并回复红色手牌数的体力。',
                        wmsj_永恒: '永恒',
                        wmsj_永恒_info: '锁定技，你可以如手牌般使用或打出牌堆顶的七张牌且你使用牌无距离限制。',
                        wmsj_轮回: '轮回',
                        wmsj_轮回_info: '锁定技，每轮限一次，你体力不大于0时立即与场上体力最高角色交换体力。',
                        wmsj_圣洁: '圣洁',
                        wmsj_圣洁_info: '锁定技，其他角色不因非转化实体牌回复体力或摸牌阶段外获得牌前有50%概率取消，其进入濒死状态前你可斩杀之。',
                        wmsj_圣洁_1: '斩杀',
                        wmsj_boss: 'Boss特性',
                        wmsj_boss_info: '①你造成的伤害不可减免，体力上限削减、翻面和混乱效果对你无效。②你不因濒死结算而死亡时，取消并结束当前阶段。',

                        //———————————————————————————————————————————————————————————————————咤克斯 血量：10/10 势力:神
                        wmsj_天魔: '天魔',
                        wmsj_天魔_info: '锁定技。①你造成伤害或体力变化后获得1个“魔”（数量至多为5）。②你使用牌次数限制，攻击距离和摸牌阶段摸牌数+X（X为“魔”数量）。③你造成伤害前有5%概率瞬杀目标，你每拥有1个“魔”增加2%瞬杀概率，若目标拥有“堕”，则每个“堕”增加2%瞬杀概率。',
                        wmsj_厉魇: '厉魇',
                        wmsj_厉魇_info: '锁定技。①你受到大于1点的伤害时，将伤害削减为1点并获得削减量的护甲。②你将体力上限削减和体力流失改为回复等量体力，回合结束时你回复一半（向上取整）已损失体力值并摸等量的牌。',
                        wmsj_堕化: '堕化',
                        wmsj_堕化_info: '出牌阶段限一次或你每减少两次体力后，你回复1点体力然后可选择一名其他角色获得1个“堕”并受到1点伤害；有“堕”的角色：①受到伤害+X（X为“堕”数量）；②只能被非转化实体牌回复体力；③获得牌后弃置所有非红色牌。',
                        wmsj_魔王: '魔王',
                        wmsj_魔王_info: '限定技，当主公死亡前，若你的身份不为主公，则你可以将身份替换为主公，将其身份替换为平民并瞬杀，然后明置全场身份并将所有身份不为反贼的角色的身份替换为反贼。',
                    },
                };
                for (const i in wmsj_qsmx.character) {
                    const info = wmsj_qsmx.character[i];
                    if (!info.hp) {
                        info.hp = 4;
                    }
                    if (!info.maxHp) {
                        info.maxHp = 4;
                    }
                    if (!info.trashBin) {
                        info.trashBin = [`ext:完美世界/images/character/${i}.jpg`];
                    }
                    if (!info.dieAudios) {
                        info.dieAudios = [`ext:完美世界/audio/die/${i}.mp3`];
                    }
                }
                lib.config.all.characters.add('完美世界');
                lib.config.characters.add('完美世界');
                lib.translate['完美世界_character_config'] = `完美世界`;
                return wmsj_qsmx;
            });
        },
        help: {},
        config: {
            角色BGM: {
                name: '<span class=Qmenu>角色BGM</span>',
                intro: '开启角色背景音乐',
                init: false,
            },
        },
        package: extensionInfo,
    };
});

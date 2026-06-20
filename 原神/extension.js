import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '原神',
        content(config, pack) {
            //更新提示
            lib.extensionPack['原神'].version = '2021-11-14';
            var str = '<br><li>';
            str += '2021-11-14更新内容';
            str += '<br><li>';
            str += '20211114版本:<br>1•全原神角色(更新至稻妻)<br>2•此扩展不能与游戏本体以及任何扩展武将对战,因为更改了角色伤害和回复<br>3•安装后请先在武将界面打开武将包,在扩展界面打开原神模式(无相模式技能数量还不多打开了影响体验,后期更新会完善无相模式)<br>4•所有角色手牌上限锁定为4,不会受到体力值影响';
            game.showExtensionChangeLog(str, '原神');
            //平凡武将---------
            lib.rank.rarity.junk.addArray([]);
            //精品武将---------
            lib.rank.rarity.rare.addArray([]);
            //史诗武将---------
            lib.rank.rarity.epic.addArray([/*蒙德四星"*/ 'ys_芭芭拉', 'ys_砂糖', 'ys_丽莎', 'ys_安柏', 'ys_凯亚', 'ys_班尼特', 'ys_诺艾尔', 'ys_菲谢尔', 'ys_雷泽', 'ys_迪奥娜', 'ys_罗莎莉亚', /*璃月四星*/ 'ys_凝光', 'ys_重云', 'ys_行秋', 'ys_香菱', 'ys_北斗', 'ys_辛焱', 'ys_烟菲', /*稻妻四星*/ 'ys_九条裟罗', 'ys_早柚', 'ys_托马']);
            //传说武将--------
            lib.rank.rarity.legend.addArray([/*天理维系者*/ 'ys_派蒙', 'ys_荧', /*蒙德五星*/ 'ys_温迪', 'ys_迪卢克', 'ys_琴', 'ys_可莉', 'ys_莫娜', 'ys_阿贝多', 'ys_优菈', /*璃月五星*/ 'ys_刻晴', 'ys_钟离', 'ys_魈', 'ys_胡桃', 'ys_七七', 'ys_甘雨', /*稻妻五星*/ 'ys_雷电将军', 'ys_枫原万叶', 'ys_珊瑚宫心海', 'ys_神里绫华', 'ys_宵宫']);
            //武将禁选:只选本扩展武将--------
            var changePlayer = {
                //天理维系者
                ys_派蒙: 'ys_派蒙',
                ys_荧: 'ys_荧',
                //蒙德
                ys_芭芭拉: 'ys_芭芭拉',
                ys_砂糖: 'ys_砂糖',
                ys_丽莎: 'ys_丽莎',
                ys_安柏: 'ys_安柏',
                ys_凯亚: 'ys_凯亚',
                ys_班尼特: 'ys_班尼特',
                ys_诺艾尔: 'ys_诺艾尔',
                ys_菲谢尔: 'ys_菲谢尔',
                ys_雷泽: 'ys_雷泽',
                ys_温迪: 'ys_温迪',
                ys_迪卢克: 'ys_迪卢克',
                ys_琴: 'ys_琴',
                ys_可莉: 'ys_可莉',
                ys_莫娜: 'ys_莫娜',
                ys_阿贝多: 'ys_阿贝多',
                ys_优菈: 'ys_优菈',
                ys_迪奥娜: 'ys_迪奥娜',
                ys_罗莎莉亚: 'ys_罗莎莉亚',
                //璃月
                ys_刻晴: 'ys_刻晴',
                ys_钟离: 'ys_钟离',
                ys_魈: 'ys_魈',
                ys_胡桃: 'ys_胡桃',
                ys_七七: 'ys_七七',
                ys_甘雨: 'ys_甘雨',
                ys_凝光: 'ys_凝光',
                ys_重云: 'ys_重云',
                ys_行秋: 'ys_行秋',
                ys_香菱: 'ys_香菱',
                ys_北斗: 'ys_北斗',
                ys_辛焱: 'ys_辛焱',
                ys_烟菲: 'ys_烟菲',
                //稻妻
                ys_雷电将军: 'ys_雷电将军',
                ys_枫原万叶: 'ys_枫原万叶',
                ys_珊瑚宫心海: 'ys_珊瑚宫心海',
                ys_神里绫华: 'ys_神里绫华',
                ys_宵宫: 'ys_宵宫',
                ys_九条裟罗: 'ys_九条裟罗',
                ys_早柚: 'ys_早柚',
                ys_托马: 'ys_托马',
            };
            if (config.changeGroup) {
                for (var i in changePlayer) {
                    if (lib.character[i]) lib.character[i][1] = changePlayer[i];
                }
            }
            //势力--------
            /*lib.group.push('ys_ji');
            lib.translate.英文名='技'; lib.translate.英ys_jiColor="#FFFF00"*/
            //无相模式-------
            if (config.ys_wuxiangmoshi) {
                lib.skill._ys_wuxiangmoshi = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    _priority: 20210124,
                    content() {
                        game.countPlayer(function (current) {
                            current.addSkill('ys_wuxiangmoshi');
                        });
                    },
                };
            }
        },
        precontent(yuanshen) {
            game.import('character', function () {
                var yuanshen = {
                    name: 'yuanshen',
                    connect: true,
                    //武将分包开关---------
                    characterSort: {
                        yuanshen: {
                            ys_tiankongdao: ['ys_派蒙', 'ys_荧'],
                            ys_mengde: ['ys_温迪', 'ys_迪卢克', 'ys_芭芭拉', 'ys_琴', 'ys_砂糖', 'ys_丽莎', 'ys_安柏', 'ys_凯亚', 'ys_可莉', 'ys_班尼特', 'ys_诺艾尔', 'ys_菲谢尔', 'ys_雷泽', 'ys_莫娜', 'ys_阿贝多', 'ys_优菈', 'ys_迪奥娜', 'ys_罗莎莉亚'],
                            ys_liyue: ['ys_刻晴', 'ys_钟离', 'ys_魈', 'ys_胡桃', 'ys_七七', 'ys_甘雨', 'ys_凝光', 'ys_重云', 'ys_行秋', 'ys_香菱', 'ys_北斗', 'ys_辛焱', 'ys_烟菲'],
                            ys_daoqi: ['ys_雷电将军', 'ys_枫原万叶', 'ys_珊瑚宫心海', 'ys_神里绫华', 'ys_宵宫', 'ys_九条裟罗', 'ys_早柚', 'ys_托马'],
                        },
                    },
                    //武将--------
                    character: {
                        //天空岛
                        ys_派蒙: ['female', 'shen', 10000, ['ys_原神', 'ys_暴击', 'ys_天空', 'ys_降临'], ['des:应急食品--派蒙<br>强度:[不可预估]获取白色原神标志<br>体力:10000<br>攻击力:1700～2000<br>当真身降临之后变身时间魔神,获取红色原神标志,体力:16000<br>攻击力:2500～2800']],
                        //"ys_荧":["female","shen","5/8",["ys_原神","ys_暴击","ys_天空"],[]],
                        //"ys_悲惨的技能者":["female","shen",1,["ys_原神","ys_暴击","ys_天空"],[]],
                        //蒙德
                        ys_温迪: ['female', 'shen', 17000, ['ys_原神4阶', 'ys_暴击', 'ys_天空'], ['des:蒙德风神--巴巴托斯<br>强度:[五星中阶]获取金色原神标志<br>体力:17000<br>基础攻击力:2300～2600']],
                        ys_迪卢克: ['male', 'shen', 17000, ['ys_原神4阶', 'ys_暴击', 'ys_天空'], ['des:晨曦酒庄--迪卢克<br>强度:[五星中阶]获取金色原神标志<br>体力:17000<br>基础攻击力:2300～2600']],
                        ys_芭芭拉: ['female', 'shen', 20000, ['ys_原神', 'ys_暴击', 'ys_天空'], ['des:蒙德偶像--芭芭拉<br>强度:[四星中阶]获取白色原神标志<br>体力:20000<br>基础攻击力:1700～2000']],
                        ys_琴: ['female', 'shen', 17000, ['ys_原神4阶', 'ys_暴击', 'ys_天空'], ['des:西风骑士团团长--琴<br>强度:[五星中阶]获取金色原神标志<br>体力:17000<br>基础攻击力:2300～2600']],
                        ys_砂糖: ['female', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:炼金术士--砂糖<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200']],
                        ys_丽莎: ['female', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:图书馆馆长--丽莎<br>强度:[四星中阶]获取白色原神标志<br>体力:19000<br>基础攻击力:1900～2200']],
                        ys_安柏: ['female', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:侦查骑士--安柏<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200']],
                        ys_凯亚: ['male', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:骑士队长--凯亚<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200']],
                        ys_可莉: ['female', 'shen', 17000, ['ys_原神4阶', 'ys_暴击', 'ys_天空'], ['des:火花骑士--可莉<br>强度:[五星中阶]获取金色原神标志<br>体力:5000<br>基础攻击力:2300～2600']],
                        ys_班尼特: ['male', 'shen', 18000, ['ys_原神3阶', 'ys_暴击', 'ys_天空'], ['des:倒霉团团长--火神班尼特<br>强度:[伪五星下阶]获取蓝色原神标志<br>体力:18000<br>基础攻击力:2100～2400']],
                        ys_诺艾尔: ['female', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:女仆骑士--诺艾尔<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200']],
                        ys_菲谢尔: ['female', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:中二少女--菲谢尔<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200']],
                        ys_雷泽: ['male', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:狼孩--雷泽<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200']],
                        ys_莫娜: ['female', 'shen', 18000, ['ys_原神3阶', 'ys_暴击', 'ys_天空'], ['des:不靠谱占卜--莫娜<br>强度:[五星下阶]获取蓝色原神标志<br>体力:18000<br>基础攻击力:2100～2400']],
                        ys_阿贝多: ['male', 'shen', 17000, ['ys_原神4阶', 'ys_暴击', 'ys_天空'], ['des:炼金术士--阿贝多<br>强度:[五星中阶]获取金色原神标志<br>体力:17000<br>基础攻击力:2300～2600']],
                        ys_优菈: ['female', 'shen', 16000, ['ys_原神5阶', 'ys_暴击', 'ys_天空'], ['des:记仇贵女--优菈<br>强度:[五星上阶]获取红色原神标志<br>体力:16000<br>基础攻击力:2500～2800']],
                        ys_迪奥娜: ['female', 'shen', 20000, ['ys_原神', 'ys_暴击', 'ys_天空'], ['des:蒙德调酒师--迪奥娜<br>强度:[四星中阶]获取白色原神标志<br>体力:20000<br>基础攻击力:1700～2000']],
                        ys_罗莎莉亚: ['female', 'shen', 20000, ['ys_原神', 'ys_暴击', 'ys_天空'], ['des:蒙德修女--罗莎莉亚<br>强度:[四星中阶]获取白色原神标志<br>体力:20000<br>基础攻击力:1700～2000']],
                        //璃月
                        ys_刻晴: ['female', 'shen', 17000, ['ys_原神4阶', 'ys_暴击', 'ys_天空'], ['des:璃月七星--刻晴<br>强度:[五星中阶]获取金色原神标志<br>体力:17000<br>基础攻击力:2300～2600']],
                        ys_钟离: ['male', 'shen', 18000, ['ys_原神3阶', 'ys_暴击', 'ys_天空'], ['des:璃月岩神--钟离<br>强度:[五星下阶]获取蓝色原神标志<br>体力:18000<br>基础攻击力:2100～2400']],
                        ys_魈: ['male', 'shen', 16000, ['ys_原神5阶', 'ys_暴击', 'ys_天空'], ['des:降魔夜叉--魈<br>强度:[五星上阶]获取红色原神标志<br>体力:160000<br>基础攻击力:2500～2800']],
                        ys_胡桃: ['female', 'shen', 16000, ['ys_原神5阶', 'ys_暴击', 'ys_天空'], ['des:往生堂堂主--胡桃<br>强度:[五星上阶]获取红色原神标志<br>体力:16000<br>基础攻击力:2500～2800']],
                        ys_七七: ['female', 'shen', 18000, ['ys_原神3阶', 'ys_暴击', 'ys_天空'], ['des:肚饿真君--七七<br>强度:[五星下阶]获取蓝色原神标志<br>体力:18000<br>基础攻击力:2100～2400']],
                        ys_甘雨: ['female', 'shen', 16000, ['ys_原神5阶', 'ys_暴击', 'ys_天空'], ['des:麒麟血脉--甘雨<br>强度:[五星上阶]获取红色原神标志<br>体力:16000<br>基础攻击力:2500～2800']],
                        ys_凝光: ['female', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:璃月七星--凝光<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200']],
                        ys_重云: ['male', 'shen', 20000, ['ys_原神', 'ys_暴击', 'ys_天空'], ['des:冰棍千年--重云<br>强度:[四星中阶]获取白色原神标志<br>体力:20000<br>基础攻击力:1700～2000']],
                        ys_行秋: ['female', 'shen', 18000, ['ys_原神3阶', 'ys_暴击', 'ys_天空'], ['des:读书人--水神行秋<br>强度:[伪五星下阶]获取蓝色原神标志<br>体力:18000<br>基础攻击力:2100～2400']],
                        ys_香菱: ['male', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:金牌厨师--香菱<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200']],
                        ys_北斗: ['female', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:海盗船长--北斗<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200']],
                        ys_辛焱: ['female', 'shen', 20000, ['ys_原神', 'ys_暴击', 'ys_天空'], ['des:摇滚乐手--辛焱<br>强度:[四星中阶]获取白色原神标志<br>体力:6000<br>基础攻击力:1700～2000']],
                        ys_烟菲: ['female', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:律政佳人--烟菲<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200']],
                        //稻妻
                        ys_雷电将军: ['female', 'shen', 17000, ['ys_原神4阶', 'ys_暴击', 'ys_天空'], ['des:雷电将军--影<br>强度:[五星中阶]获取金色原神标志<br>体力:17000<br>基础攻击力:2300～2600']],
                        ys_枫原万叶: ['male', 'shen', 17000, ['ys_原神4阶', 'ys_暴击', 'ys_天空'], ['des:快乐风男--枫原万叶<br>强度:[五星中阶]获取金色原神标志<br>体力:17000<br>基础攻击力:2300～2600']],
                        ys_珊瑚宫心海: ['female', 'shen', 18000, ['ys_原神3阶', 'ys_暴击', 'ys_天空'], ['des:珊瑚宫主--心海<br>强度:[五星下阶]获取蓝色原神标志<br>体力:18000<br>基础攻击力:2100～2400']],
                        ys_神里绫华: ['female', 'shen', 16000, ['ys_原神5阶', 'ys_暴击', 'ys_天空'], ['des:神里家大小姐--绫华<br>强度:[五星上阶]获取红色原神标志<br>体力:16000<br>基础攻击力:2500～2800']],
                        ys_宵宫: ['female', 'shen', 17000, ['ys_原神4阶', 'ys_暴击', 'ys_天空'], ['des:烟花三月--巴宵宫<br>强度:[五星中阶]获取金色原神标志<br>体力:17000<br>基础攻击力:2300～2600']],
                        ys_九条裟罗: ['female', 'shen', 19000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:稻妻大将--裟罗<br>强度:[4星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2100']],
                        ys_早柚: ['female', 'shen', 20000, ['ys_原神', 'ys_暴击', 'ys_天空'], ['des:忍者之路--早柚<br>强度:[四星中阶]获取白色原神标志<br>体力:20000<br>攻击力:1700～2000']],
                        ys_托马: ['male', 'shen', 20000, ['ys_原神2阶', 'ys_暴击', 'ys_天空'], ['des:稻妻火男--托马<br>强度:[四星上阶]获取绿色原神标志<br>体力:20000<br>基础攻击力:1900～2100']],
                    },
                    //武将介绍--------
                    characterIntro: {},
                    //武将称号--------
                    characterTitle: {},
                    //技能代码--------
                    skill: {
                        ys_原神: {
                            name: '原神',
                            forced: true,
                            usable: 99,
                            filter(event, player) {
                                var numa = Math.random();
                                return numa < 1.0;
                            },
                            trigger: { source: 'damageBegin1' },
                            content() {
                                var numb = [1699, 1749, 1799, 1849, 1899, 1949, 1999].randomGet();
                                trigger.num = trigger.num + numb;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num = 4);
                                },
                            },
                        },
                        ys_原神2阶: {
                            name: '原神',
                            forced: true,
                            usable: 99,
                            filter(event, player) {
                                var numa = Math.random();
                                return numa < 1.0;
                            },
                            trigger: { source: 'damageBegin1' },
                            content() {
                                var numb = [1899, 1949, 1999, 2049, 2099, 2149, 2199].randomGet();
                                trigger.num = trigger.num + numb;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num = 4);
                                },
                            },
                        },
                        ys_原神3阶: {
                            name: '原神',
                            forced: true,
                            usable: 99,
                            filter(event, player) {
                                var numa = Math.random();
                                return numa < 1.0;
                            },
                            trigger: { source: 'damageBegin1' },
                            content() {
                                var numb = [2099, 2149, 2199, 2249, 2299, 2349, 2399].randomGet();
                                trigger.num = trigger.num + numb;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num = 4);
                                },
                            },
                        },
                        ys_原神4阶: {
                            name: '原神',
                            forced: true,
                            usable: 99,
                            filter(event, player) {
                                var numa = Math.random();
                                return numa < 1.0;
                            },
                            trigger: { source: 'damageBegin1' },
                            content() {
                                var numb = [2299, 2349, 2399, 2449, 2499, 2549, 2599].randomGet();
                                trigger.num = trigger.num + numb;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num = 4);
                                },
                            },
                        },
                        ys_原神5阶: {
                            name: '原神',
                            forced: true,
                            usable: 99,
                            filter(event, player) {
                                var numa = Math.random();
                                return numa < 1.0;
                            },
                            trigger: { source: 'damageBegin1' },
                            content() {
                                var numb = [2499, 2549, 2599, 2649, 2699, 2749, 2799].randomGet();
                                trigger.num = trigger.num + numb;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num = 4);
                                },
                            },
                        },
                        ys_暴击: {
                            name: '暴击',
                            prompt2: '<span style=\"color: #DC143C\"><font size =12px>以触发暴击,你的暴击伤害为三千～五千.是否提升本次伤害？</font></span>',
                            usable: 1,
                            filter(event, player) {
                                var numa = Math.random();
                                return numa < 0.65;
                            },
                            trigger: { source: 'damageBegin1' },
                            content() {
                                var numb = [2999, 3999, 4999].randomGet();
                                trigger.num = trigger.num + numb;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0; //QQQ
                            },
                        },
                        ys_天空: {
                            name: '天空',
                            forced: true,
                            filter(event, player) {
                                var numa = Math.random();
                                if (numa >= 1.0) return false;
                                var card = event.card;
                                return card.name == 'jiu' || card.name == 'tao';
                            },
                            trigger: { player: 'useCard' },
                            content() {
                                var numb = [1499, 1799, 2099, 2399, 2699, 2999].randomGet();
                                trigger.baseDamage += numb;
                            },
                            ai: {
                                order: 10,
                                result: { player: 1 },
                                threaten: 3.2,
                            },
                        },
                        ys_降临: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.recover(1);
                                ('step 1');
                                player.maxHp = 16000;
                                ('step 2');
                                player.hp = 16000;
                                ('step 3');
                                player.node.avatar.setBackgroundImage('extension/原神/图像/技能/ys_降临.jpg');
                                ('step 4');
                                player.clearSkills();
                                ('step 5');
                                player.addSkill('ys_原神5阶');
                                player.addSkill('ys_深渊');
                                player.addSkill('ys_天空');
                            },
                            intro: {
                                content: 'limited',
                            },
                            ai: {
                                save: true,
                                result: {
                                    player: 10,
                                },
                            },
                        },
                        ys_深渊: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: -1,
                            filterTarget(crad, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.say('--尔等这是自取灭亡');
                                ('step 1');
                                player.judge();
                                ('step 2');
                                switch (result.color) {
                                    case 'black':
                                        target.damage(1, 'thunder');
                                        player.say('----这!!就是死亡的边缘');
                                        break;
                                    default:
                                        player.draw();
                                        player.gain(result.card, 'gain2');
                                        player.say('---在星辰与深渊中陷落吧');
                                }
                            },
                            ai: {
                                order: 10,
                                expose: 1,
                                threaten: 1.8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        //以下为无相模式专属技能
                        ys_断罪: {
                            //菲谢尔:断罪雷影
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:原神/音效/武将音效:2',
                            filterTarget(card, player, target) {
                                return player != target && !target.hasSkill('ys_断罪_mark');
                            },
                            filter(event, player) {
                                var targets = game.filterPlayer(function (current) {
                                    return current.hasSkill('ys_断罪_mark') && current.hp > 0;
                                });
                                if (!targets || targets.length == 0) {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                player.storage.ys_断罪_target = target;
                                target.storage.ys_断罪_mark = player;
                                target.addSkill('ys_断罪_mark');
                            },
                            ai: {
                                basic: {
                                    order: 5,
                                },
                                result: {
                                    target(player, target) {
                                        var n = target.maxHp - target.hp;
                                        n = -n - 2;
                                        return n;
                                    },
                                },
                            },
                            group: 'ys_断罪_link',
                        },
                        ys_断罪_mark: {
                            intro: {
                                content: '已有断罪标记',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                        },
                        ys_断罪_link: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.ys_断罪_target && player.storage.ys_断罪_target.hp > 0 && player.storage.ys_断罪_target.hasSkill('ys_断罪_mark');
                            },
                            content() {
                                'step 0';
                                player.line(player.storage.ys_断罪_target);
                                player.storage.ys_断罪_target.damage(trigger.num, player, trigger.nature);
                                ('step 1');
                                player.storage.ys_断罪_target.removeSkill('ys_断罪_mark');
                                delete player.storage.ys_断罪_target.storage.ys_断罪_mark;
                                delete player.storage.ys_断罪_target;
                            },
                        },
                        ys_巡游: {
                            //刻晴:天街巡游
                            audio: 'ext:原神/音效/武将音效:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return player.inRangeOf(current);
                                });
                            },
                            filterTarget(card, player, target) {
                                return target.inRange(player);
                            },
                            selectTarget: -1,
                            content() {
                                'step 0';
                                var next = target.chooseCard('h');
                                next.ai = function (card) {
                                    return 8 - get.value(card);
                                };
                                next.set('prompt', '天街巡游:交给' + get.translation(player) + '一张手牌');
                                next.set('prompt2', '或取消并受到一点伤害');
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.cards, target, 'giveAuto');
                                    if (!event.parent.countGive) event.parent.countGive = 0;
                                    event.parent.countGive++;
                                } else {
                                    target.damage();
                                }
                            },
                            contentAfter() {
                                if (event.parent.countGive >= 2) {
                                    player.addTempSkill('ys_巡游_paoxiao');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h') > 3) return 0.5;
                                        return -1;
                                    },
                                    player: 1,
                                },
                            },
                            subSkill: {
                                paoxiao: {
                                    audio: 'ext:原神/音效/武将音效:2',
                                    mark: true,
                                    marktext: '天',
                                    intro: {
                                        name: '天街巡游',
                                        content: '本回合使用【杀】无次数限制',
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return Infinity;
                                        },
                                    },
                                },
                            },
                        },
                        ys_玉衡: {
                            //刻晴"玉衡之贵
                            audio: 'ext:原神/音效/武将音效:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h')) {
                                    player.chooseCardButton('巡游', target.getCards('h')).ai = function (button) {
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
                            ai: {
                                threaten: 1.3,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                                order: 10,
                                expose: 0.2,
                            },
                        },
                        ys_真说: {
                            //梦想真说
                            audio: 'ext:原神/音效/武将音效:1',
                            enable: 'phaseUse',
                            usable: 1,
                            popup: false,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                target.update();
                                target.damage(520, 'thunder');
                            },
                            ai: {
                                order: 10,
                                expose: 1,
                                threaten: 1.8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        ys_恶濯: {
                            //恶曜开角
                            audio: 'ext:原神/音效/武将音效:1',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + 1;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        ys_wuxiangmoshi: {
                            //无相模式
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            content() {
                                player.addTempSkill(
                                    [
                                        'ys_真说', //雷电将军:梦想真说
                                        'repojun', //界徐盛:破军
                                        'xinshanjia', //曹纯:缮甲
                                        'gzjili', //沙摩柯:蒺藜
                                        'fenyin', //留赞:奋音
                                        'kaikang', //曹昂:慷慨
                                        'xinfu_lingren', //曹婴:凌人
                                        'chengxiang', //曹冲:称象
                                        'wushuang', //界吕布:无双
                                        'qiaosi', //马钧:巧思
                                        'zhongzuo', //贾逵:忠佐
                                        'drlt_zhengu', //郝昭:镇骨
                                        'retieji', //界马超:铁骑
                                        'rezhiheng', //界孙权:制衡
                                        'xinfu_pingcai', //庞德公:评才
                                        'rezhiyi', //张翼:执义
                                        'xinxhzhiyan', //星徐晃:治严
                                        'qinzheng', //洛统:勤政
                                    ].randomGet(),
                                    {
                                        player: 'phaseZhunbeiBegin',
                                    }
                                );
                            },
                        },
                    },
                    translate: {
                        //技能说明--------
                        ys_原神: '一阶',
                        ys_原神_info: '原神标志:白色<br>手牌上限:4<br>一阶:<br>基础攻击力1700～2000点',
                        ys_原神2阶: '二阶',
                        ys_原神2阶_info: '原神标志:绿色<br>手牌上限:4<br>二阶:<br>基础攻击力1900～2200点',
                        ys_原神3阶: '三阶',
                        ys_原神3阶_info: '原神标志:蓝色<br>手牌上限:4<br>三阶:<br>基础攻击力2100～2400点',
                        ys_原神4阶: '四阶',
                        ys_原神4阶_info: '原神标志:金色<br>手牌上限:4<br>四阶:<br>基础攻击力2300～2600点',
                        ys_原神5阶: '五阶',
                        ys_原神5阶_info: '原神标志:红色<br>手牌上限:4<br>五阶:<br>基础攻击力2500～2800点',
                        ys_暴击: '暴击',
                        ys_暴击_info: '均衡的双暴:金色<br>暴击率:65%<br>暴击伤害:3000～5000点',
                        ys_天空: '天空',
                        ys_天空_info: '天空岛的眷顾:金色<br>使用酒或桃时基数随机增加1500～3000点',
                        ys_降临: '降临',
                        ys_降临_info: '人畜无害的时间魔神派蒙即将降临真身<br>主动技:在你的濒危阶段,你可以选择使用.使用后降临真身<br>你的体力上限和体力变为6000点,失去技能【降临】,获得技能【深渊]<br>深渊:主动技:在你的出牌阶段(每回合限一次),可使除自己外的所有人进行一次判定. 若判定为黑色牌,则受到一点雷属性伤害. 否则,你获得判定牌并摸一张牌',
                        ys_深渊: '深渊',
                        ys_深渊_info: '主动技:在你的出牌阶段(每回合限一次),可使除自己外的所有人进行一次判定. 若判定为黑色牌,则受到一点雷属性伤害. 否则,你获得判定牌并摸一张牌.',
                        //无相模式专属技能
                        ys_wuxiangmoshi: '🌊',
                        ys_wuxiangmoshi_info: '无相模式,在扩展界面打开生效.游戏开始和自己回合开始时,角色在无相技能池中随机获得一个技能,直到下个回合开始',
                        ys_断罪: '断罪',
                        ys_断罪_mark: '断',
                        ys_断罪_info: '菲谢尔专属--断罪雷影<br>出牌阶段限一次,你可以给一名其他角色一个「断罪」标记;你受到伤害后,「断罪」标记角色受到等量的伤害,移除标记',
                        ys_巡游: '巡游',
                        ys_巡游_info: '刻晴专属--天街巡游<br>刻晴巡游璃月港.<br>令所有攻击范围内有刻晴的角色选择一项:交给刻晴一张手牌,或者受到基数1点伤害;若刻晴以此获得的手牌不小于2,本回合刻晴使用【杀】无次数限制.',
                        ys_玉衡: '玉衡',
                        ys_玉衡_info: '刻晴专属--玉衡星<br>出牌阶段,刻晴观看一名其他角色的手牌,可以用一张手牌替换其中的一张.',
                        ys_真说: '真说',
                        ys_真说_info: '雷电将军专属--梦想真说<br>每回合限一次,汇聚万千真言,竭尽诸愿百眼之愿力,斩出粉碎一切诅咒的梦想一刀.对其他一名其造成基数520点雷属性伤害',
                        ys_恶濯: '恶曜',
                        ys_恶濯_info: '雷电将军专属--恶曜开角<br>摸牌阶段可以多模一张牌,使用【杀】的次数+1,手牌上限+1',
                        //武将说明--------
                        //天空岛
                        ys_派蒙: '派蒙',
                        ys_荧: '荧',
                        //蒙德
                        ys_温迪: '温迪',
                        ys_迪卢克: '迪卢克',
                        ys_芭芭拉: '芭芭拉',
                        ys_琴: '琴',
                        ys_砂糖: '砂糖',
                        ys_丽莎: '丽莎',
                        ys_安柏: '安柏',
                        ys_凯亚: '凯亚',
                        ys_可莉: '可莉',
                        ys_班尼特: '班尼特',
                        ys_诺艾尔: '诺艾尔',
                        ys_菲谢尔: '菲谢尔',
                        ys_雷泽: '雷泽',
                        ys_莫娜: '莫娜',
                        ys_优菈: '优菈',
                        ys_阿贝多: '阿贝多',
                        ys_迪奥娜: '迪奥娜',
                        ys_罗莎莉亚: '罗莎莉亚',
                        //璃月
                        ys_刻晴: '刻晴',
                        ys_钟离: '钟离',
                        ys_魈: '魈',
                        ys_胡桃: '胡桃',
                        ys_七七: '七七',
                        ys_甘雨: '甘雨',
                        ys_凝光: '凝光',
                        ys_重云: '重云',
                        ys_行秋: '行秋',
                        ys_香菱: '香菱',
                        ys_北斗: '北斗',
                        ys_辛焱: '辛焱',
                        ys_烟菲: '烟菲',
                        //稻妻
                        ys_雷电将军: '雷电将军',
                        ys_枫原万叶: '枫原万叶',
                        ys_珊瑚宫心海: '珊瑚宫心海',
                        ys_神里绫华: '神里绫华',
                        ys_宵宫: '宵宫',
                        ys_九条裟罗: '九条裟罗',
                        ys_早柚: '早柚',
                        ys_托马: '托马',
                        //分组名称--------
                        ys_tiankongdao: "<samp id='天理维系者'><small><strong>天理维系者</strong></small></samp></body><style>#天理维系者{animation:change 10s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
                        ys_mengde: "<samp id='蒙德广场'><small><strong>蒙德广场</strong></small></samp></body><style>#蒙德广场{animation:change 10s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
                        ys_liyue: "<samp id='璃月港'><small><strong>璃月港</strong></small></samp></body><style>#璃月港{animation:change 10s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
                        ys_daoqi: "<samp id='稻妻雷光'><small><strong>稻妻雷光</strong></small></samp></body><style>#稻妻雷光{animation:change 10s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
                        //"ys_ji":"技",
                    },
                };
                //武将头像位置--------
                for (var i in yuanshen.character) {
                    yuanshen.character[i][4].push('ext:原神/图像/武将/' + i + '.jpg');
                }
                lib.config.all.characters.add('yuanshen');
                lib.config.characters.add('yuanshen');
                lib.translate['yuanshen_character_config'] = "<samp id='原神'><small><strong>原神</strong></small></samp></body><style>#原神{animation:change 10s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>";
                return yuanshen;
            });
        },
        config: {
            ys_wuxiangmoshi: {
                name: '<span style="color: #f9ed89"><font size =5px>无相模式</font></span>',
                intro: '<span style="color: #f9ed89"><font size =5px>重启生效,开启后所有角色在游戏开始和回合开始时随机获得一个技能直到下个回合开始</font></span>',
                init: false,
            },
        },
        package: {
            intro: '<span style="color: #CD7F32"><font size =5px>原神全角色同人</font></span><li>此版本:2021.1.14<li>安装后先在武将界面打开原神包,在此页面打开原神模式<li>此扩展不适合与游戏本体以及任何扩展武将对战<br><span style=\'color: gold\'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>',
            author: "<samp id='折月醉倾城'><small><strong>折月醉倾城</strong></small></samp></body><style>#折月醉倾城{animation:change 10s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
            version: '2021.11.14',
        },
    };
});

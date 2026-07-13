import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '原神杀',
        content(config, pack) {
            lib.translate.hua = '华';
            ////////
            var style3 = document.createElement('style');
            style3.innerHTML = ".player .identity[data-color='zhidong'],";
            style3.innerHTML += "div[data-nature='zhidong'],";
            style3.innerHTML += "span[data-nature='zhidong'] {text-shadow: black 0 0 1px,rgba(30, 144, 255,1) 0 0 2px,rgba(30, 144, 255,1) 0 0 5px,rgba(30, 144, 255,1) 0 0 10px,rgba(30, 144, 255,1) 0 0 10px}";
            style3.innerHTML += "div[data-nature='zhidongm'],";
            style3.innerHTML += "span[data-nature='zhidongm'] {text-shadow: black 0 0 1px,rgba(30, 144, 255,1) 0 0 2px,rgba(30, 144, 255,1) 0 0 5px,rgba(30, 144, 255,1) 0 0 5px,rgba(30, 144, 255,1) 0 0 5px,black 0 0 1px;}";
            style3.innerHTML += "div[data-nature='zhidongmm'],";
            style3.innerHTML += "span[data-nature='zhidongmm'] {text-shadow: black 0 0 1px,rgba(30, 144, 255,1) 0 0 2px,rgba(30, 144, 255,1) 0 0 2px,rgba(30, 144, 255,1) 0 0 2px,rgba(30, 144, 255,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style3);
            lib.group.add('zhidong');
            lib.translate.zhidong = '冬';
            lib.translate.zhidong2 = '冬';
            lib.groupnature.zhidong = 'zhidong';
            var style4 = document.createElement('style');
            style4.innerHTML = ".player .identity[data-color='lvxingzhe'],";
            style4.innerHTML += "div[data-nature='lvxingzhe'],";
            style4.innerHTML += "span[data-nature='lvxingzhe'] {text-shadow: black 0 0 1px,rgba(79, 79, 79,1) 0 0 2px,rgba(79, 79, 79,1) 0 0 5px,rgba(79, 79, 79,1) 0 0 10px,rgba(79, 79, 79,1) 0 0 10px}";
            style4.innerHTML += "div[data-nature='lvxingzhem'],";
            style4.innerHTML += "span[data-nature='lvxingzhem'] {text-shadow: black 0 0 1px,rgba(79, 79, 79,1) 0 0 2px,rgba(79, 79, 79,1) 0 0 5px,rgba(79, 79, 79,1) 0 0 5px,rgba(79, 79, 79,1) 0 0 5px,black 0 0 1px;}";
            style4.innerHTML += "div[data-nature='lvxingzhemm'],";
            style4.innerHTML += "span[data-nature='lvxingzhemm'] {text-shadow: black 0 0 1px,rgba(79, 79, 79,1) 0 0 2px,rgba(79, 79, 79,1) 0 0 2px,rgba(79, 79, 79,1) 0 0 2px,rgba(79, 79, 79,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style4);
            lib.group.add('lvxingzhe');
            lib.translate.lvxingzhe = '旅';
            lib.translate.lvxingzhe2 = '旅';
            lib.groupnature.lvxingzhe = 'lvxingzhe';
            var style5 = document.createElement('style');
            style5.innerHTML = ".player .identity[data-color='liyue'],";
            style5.innerHTML += "div[data-nature='liyue'],";
            style5.innerHTML += "span[data-nature='liyue'] {text-shadow: black 0 0 1px,rgba(255, 215, 0,1) 0 0 2px,rgba(255, 215, 0,1) 0 0 5px,rgba(255, 215, 0,1) 0 0 10px,rgba(255, 215, 0,1) 0 0 10px}";
            style5.innerHTML += "div[data-nature='liyuem'],";
            style5.innerHTML += "span[data-nature='liyuem'] {text-shadow: black 0 0 1px,rgba(255, 215, 0,1) 0 0 2px,rgba(255, 215, 0,1) 0 0 5px,rgba(255, 215, 0,1) 0 0 5px,rgba(255, 215, 0,1) 0 0 5px,black 0 0 1px;}";
            style5.innerHTML += "div[data-nature='liyuemm'],";
            style5.innerHTML += "span[data-nature='liyuemm'] {text-shadow: black 0 0 1px,rgba(255, 215, 0,1) 0 0 2px,rgba(255, 215, 0,1) 0 0 2px,rgba(255, 215, 0,1) 0 0 2px,rgba(255, 215, 0,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style5);
            lib.group.add('liyue');
            lib.translate.liyue = '璃月';
            lib.translate.liyue2 = '璃月';
            lib.groupnature.liyue = 'liyue';
            var style6 = document.createElement('style');
            style6.innerHTML = ".player .identity[data-color='mengde'],";
            style6.innerHTML += "div[data-nature='mengde'],";
            style6.innerHTML += "span[data-nature='mengde'] {text-shadow: black 0 0 1px,rgba(0, 205, 0,1) 0 0 2px,rgba(0, 205, 0,1) 0 0 5px,rgba(0, 205, 0,1) 0 0 10px,rgba(0, 205, 0,1) 0 0 10px}";
            style6.innerHTML += "div[data-nature='mengdem'],";
            style6.innerHTML += "span[data-nature='mengdem'] {text-shadow: black 0 0 1px,rgba(0, 205, 0,1) 0 0 2px,rgba(0, 205, 0,1) 0 0 5px,rgba(0, 205, 0,1) 0 0 5px,rgba(0, 205, 0,1) 0 0 5px,black 0 0 1px;}";
            style6.innerHTML += "div[data-nature='mengdemm'],";
            style6.innerHTML += "span[data-nature='mengdemm'] {text-shadow: black 0 0 1px,rgba(0, 205, 0,1) 0 0 2px,rgba(0, 205, 0,1) 0 0 2px,rgba(0, 205, 0,1) 0 0 2px,rgba(0, 205, 0,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style6);
            lib.group.add('mengde');
            lib.translate.mengde = '蒙德';
            lib.translate.mengde2 = '蒙德';
            lib.groupnature.mengde = 'mengde';
            var style7 = document.createElement('style');
            style7.innerHTML = ".player .identity[data-color='meng'],";
            style7.innerHTML += "div[data-nature='meng'],";
            style7.innerHTML += "span[data-nature='meng'] {text-shadow: black 0 0 1px,rgba(255, 215, 0,1) 0 0 2px,rgba(255, 215, 0,1) 0 0 5px,rgba(255, 215, 0,1) 0 0 10px,rgba(255, 215, 0,1) 0 0 10px}";
            style7.innerHTML += "div[data-nature='mengm'],";
            style7.innerHTML += "span[data-nature='mengm'] {text-shadow: black 0 0 1px,rgba(255, 215, 0,1) 0 0 2px,rgba(255, 215, 0,1) 0 0 5px,rgba(255, 215, 0,1) 0 0 5px,rgba(255, 215, 0,1) 0 0 5px,black 0 0 1px;}";
            style7.innerHTML += "div[data-nature='mengmm'],";
            style7.innerHTML += "span[data-nature='mengmm'] {text-shadow: black 0 0 1px,rgba(255, 215, 0,1) 0 0 2px,rgba(255, 215, 0,1) 0 0 2px,rgba(255, 215, 0,1) 0 0 2px,rgba(255, 215, 0,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style7);
            lib.group.add('meng');
            lib.translate.meng = '盟';
            lib.translate.meng2 = '盟';
            lib.groupnature.meng = 'meng';
            var style8 = document.createElement('style');
            style8.innerHTML = ".player .identity[data-color='daoqi'],";
            style8.innerHTML += "div[data-nature='daoqi'],";
            style8.innerHTML += "span[data-nature='daoqi'] {text-shadow: black 0 0 1px,rgba(148, 0, 211,1) 0 0 2px,rgba(148, 0, 211,1) 0 0 5px,rgba(148, 0, 211,1) 0 0 10px,rgba(148, 0, 211,1) 0 0 10px}";
            style8.innerHTML += "div[data-nature='daoqim'],";
            style8.innerHTML += "span[data-nature='daoqim'] {text-shadow: black 0 0 1px,rgba(148, 0, 211,1) 0 0 2px,rgba(148, 0, 211,1) 0 0 5px,rgba(148, 0, 211,1) 0 0 5px,rgba(148, 0, 211,1) 0 0 5px,black 0 0 1px;}";
            style8.innerHTML += "div[data-nature='daoqimm'],";
            style8.innerHTML += "span[data-nature='daoqimm'] {text-shadow: black 0 0 1px,rgba(148, 0, 211,1) 0 0 2px,rgba(148, 0, 211,1) 0 0 2px,rgba(148, 0, 211,1) 0 0 2px,rgba(148, 0, 211,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style8);
            lib.group.add('daoqi');
            lib.translate.daoqi = '稻妻';
            lib.translate.daoqi2 = '稻妻';
            lib.groupnature.daoqi = 'daoqi';
            //十周年UI的势力
            var tenUi = document.createElement('style');
            tenUi.innerHTML = ".player>.camp-zone[data-camp='meng']>.camp-back {background: linear-gradient(to bottom, rgb(218, 165, 32), rgb(218, 165, 32));}";
            tenUi.innerHTML = ".player>.camp-zone[data-camp='liyue']>.camp-back {background: linear-gradient(to bottom, rgb(255, 215, 0), rgb(255, 215, 0));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='lvxingzhe']>.camp-back {background: linear-gradient(to bottom, rgb(79,79,79), rgb(79,79,79));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zhidong']>.camp-back {background: linear-gradient(to bottom, rgb(0,191,255), rgb(0,191,255));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='mengde']>.camp-back {background: linear-gradient(to bottom, rgb(0,100,0), rgb(0,100,0));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='daoqi']>.camp-back {background: linear-gradient(to bottom, rgb(153,50,204), rgb(153,50,204));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='liyue']>.camp-name {text-shadow: 0 0 5px rgb(255,140,0), 0 0 10px rgb(255,140,0), 0 0 15px rgb(255,140,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='lvxingzhe']>.camp-name {text-shadow: 0 0 5px rgb(79,79,79), 0 0 10px rgb(79,79,79), 0 0 15px rgb(79,79,79);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zhidong']>.camp-name {text-shadow: 0 0 5px rgb(30,144,255), 0 0 10px rgb(30,144,255), 0 0 15px rgb(30,144,255);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='mengde']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='meng']>.camp-name {text-shadow: 0 0 5px rgb(255,140,0), 0 0 10px rgb(255,140,0), 0 0 15px rgb(255,140,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='daoqi']>.camp-name {text-shadow: 0 0 5px rgb(153,50,204), 0 0 10px rgb(153,50,204), 0 0 15px rgb(153,50,204);}";
            document.head.appendChild(tenUi);
            //////////
            //////////
            game.addNature('yan', '岩', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            game.addNature('cao', '草', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            game.addNature('wind', '风', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            game.addNature('water', '水', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            ////////
            lib.element.player.Elementtrigger = function (target, Element) {
                var next = game.createEvent('Elementtrigger');
                next.player = this;
                next.target = target;
                next.Element = Element;
                next.setContent('Elementtrigger');
                return next;
            };
            lib.element.content.Elementtrigger = function () {
                if (event.Element == 'yan') {
                    if (target.hasSkill('Element_fire')) {
                        player.addElementhujia(1, 'fire');
                        target.removeElement('jiejing_fire');
                    }
                    if (target.hasSkill('Element_thunder')) {
                        player.addElementhujia(1, 'thunder');
                        target.removeElement('jiejing_thunder');
                    }
                    if (target.hasSkill('Element_ice')) {
                        player.addElementhujia(1, 'ice');
                        target.removeElement('jiejing_ice');
                    }
                }
                if (event.Element == 'fire') {
                    if (target.hasSkill('Element_thunder')) {
                        target.previous.damage('fire')._triggered = null;
                        target.next.damage('fire')._triggered = null;
                        target.removeElement('chaozai');
                    }
                    if (target.hasSkill('Element_ice')) {
                        target.damage()._triggered = null;
                        target.removeElement('ronghua_fire');
                    }
                    if (target.hasSkill('Element_yan')) {
                        player.addElementhujia(1, 'fire');
                        target.removeElement('jiejing_fire');
                    }
                }
                if (event.Element == 'thunder') {
                    if (target.hasSkill('Element_ice')) {
                        target.chooseToDiscard(2, 'he', true);
                        target.removeElement('chaodao');
                    }
                    if (target.hasSkill('Element_fire')) {
                        target.previous.damage('fire')._triggered = null;
                        target.next.damage('fire')._triggered = null;
                        target.removeElement('chaozai');
                    }
                    if (target.hasSkill('Element_yan')) {
                        player.addElementhujia(1, 'thunder');
                        target.removeElement('jiejing_thunder');
                    }
                }
                if (event.Element == 'ice') {
                    if (target.hasSkill('Element_fire')) {
                        target.chooseToDiscard('he', true);
                        target.removeElement('ronghua_ice');
                    }
                    if (target.hasSkill('Element_thunder')) {
                        target.chooseToDiscard(2, 'he', true);
                        target.removeElement('chaodao');
                    }
                    if (target.hasSkill('Element_yan')) {
                        player.addElementhujia(1, 'ice');
                        target.removeElement('jiejing_ice');
                    }
                }
            };
            lib.element.player.removeElementhujia = function (num, Element) {
                var next = game.createEvent('removeElementhujia');
                next.player = this;
                next.Element = Element;
                next.num = num;
                next.setContent('removeElementhujia');
                return next;
            };
            lib.element.content.removeElementhujia = function () {
                'step 0';
                player.removeMark('Genshin_hujia_' + event.Element, event.num, false);
                player.markSkill('Genshin_hujia');
                game.log(player, '的', get.translation(event.Element), '元素结晶抵挡了', get.cnNumber(event.num), '点', get.translation(event.Element), '属性伤害');
                ('step 1');
                var num = 0;
                for (var i of Array.from(lib.nature.keys())) {
                    if (player.countMark('Genshin_hujia_' + i) > 0) num++;
                } //QQQ
                if (num < 1) player.unmarkSkill('Genshin_hujia');
            };
            lib.element.player.addElementhujia = function (num, Element) {
                var next = game.createEvent('addElementhujia');
                next.player = this;
                next.Element = Element;
                next.num = num;
                next.setContent('addElementhujia');
                return next;
            };
            lib.element.content.addElementhujia = function () {
                player.addMark('Genshin_hujia_' + event.Element, event.num, false);
                player.markSkill('Genshin_hujia');
                game.log(player, '获得了', get.cnNumber(event.num), '点', get.translation(event.Element), '元素结晶');
            };
            lib.element.player.addElement = function (target, Element) {
                var next = game.createEvent('addElement');
                next.player = this;
                next.target = target;
                next.Element = Element;
                next.setContent('addElement');
                return next;
            };
            lib.element.content.addElement = function () {
                if (lib.skill['Element_' + event.Element]) {
                    //QQQ
                    target.addSkill('Element_' + event.Element);
                    target.markSkill('Element_' + event.Element);
                    game.log(player, '对', target, '附着了', get.translation(event.Element), '元素');
                    player.Elementtrigger(target, event.Element);
                }
            };
            lib.element.player.removeElement = function (reaction) {
                var next = game.createEvent('removeElement');
                next.player = this;
                next.reaction = reaction;
                next.setContent('removeElement');
                return next;
            };
            lib.element.content.removeElement = function () {
                var list = [];
                var name;
                switch (event.reaction) {
                    case 'chaozai':
                        list = ['fire', 'thunder'];
                        name = '超载';
                        break;
                    case 'ronghua_fire':
                        list = ['fire', 'ice'];
                        name = '融化';
                        break;
                    case 'chaodao':
                        list = ['ice', 'thunder'];
                        name = '超导';
                        break;
                    case 'ronghua_ice':
                        list = ['ice', 'fire'];
                        name = '融化';
                        break;
                    case 'jiejing_fire':
                        list = ['yan', 'fire'];
                        name = '结晶';
                        break;
                    case 'jiejing_thunder':
                        list = ['yan', 'thunder'];
                        name = '结晶';
                        break;
                    case 'jiejing_ice':
                        list = ['yan', 'ice'];
                        name = '结晶';
                        break;
                }
                for (var i = 0; i < list.length; i++) {
                    player.removeSkill('Element_' + list[i]);
                }
                game.log(player, '触发了', name, '反应', '附着于', player, '的', get.translation(list), '元素已消散');
            };
            lib.skill.Genshin_hujia = {
                marktext: '晶',
                intro: {
                    name: '结晶',
                    content(storage, player, skill) {
                        var list = lib.nature;
                        var str = '';
                        for (var i = 0; i < list.length; i++) {
                            if (player.countMark('Genshin_hujia_' + list[i]) > 0) {
                                str += `<br><li>当前${get.translation(list[i])}元素结晶数量为:`;
                                str += player.countMark('Genshin_hujia_' + list[i]);
                            }
                        }
                        return str;
                    },
                },
                subSkill: {
                    fire: {},
                    thunder: {},
                    ice: {},
                },
            };
            lib.skill.Element = {
                subSkill: {
                    fire: {
                        charlotte: true,
                        marktext: '火',
                        intro: {
                            name: '火元素',
                            content: '当前处于火元素附着状态',
                        },
                        init(player, skill) { },
                    },
                    thunder: {
                        charlotte: true,
                        marktext: '雷',
                        intro: {
                            name: '雷元素',
                            content: '当前处于雷元素附着状态',
                        },
                        init(player, skill) { },
                    },
                    ice: {
                        charlotte: true,
                        marktext: '冰',
                        intro: {
                            name: '冰元素',
                            content: '当前处于冰元素附着状态',
                        },
                        init(player, skill) { },
                    },
                    yan: {
                        charlotte: true,
                        marktext: '岩',
                        intro: {
                            name: '岩元素',
                            content: '当前处于岩元素附着状态',
                        },
                        init(player, skill) { },
                    },
                },
            };
            /////////
            if (config._ysfy) {
                lib.skill._ysfytrigger = {
                    trigger: {
                        player: 'addElmentAfter',
                    },
                    forced: true,
                    content() { },
                };
            }
            /////////
            if (config._ysfy) {
                lib.skill._removedamage = {
                    trigger: {
                        player: 'damageBegin3',
                    },
                    forced: true,
                    filter(event, player) {
                        return event.nature && player.countMark('Genshin_hujia_' + event.nature) > 0;
                    },
                    content() {
                        var num = Math.max(trigger.num, player.countMark('Genshin_hujia_' + trigger.nature));
                        trigger.num -= num;
                        player.removeElementhujia(num, trigger.nature);
                    },
                };
            }
            ////////
            if (config._ysfy) {
                lib.skill._addys = {
                    trigger: { player: 'damageAfter' },
                    _priority: 2,
                    forced: true,
                    filter(event, player) {
                        return event.nature && !player.hasSkill('Element_' + event.nature) && player.isAlive() && event.source;
                    }, //QQQ
                    content() {
                        trigger.source.addElement(player, trigger.nature);
                    },
                };
            }
            /////////
            lib.skill._ysszhwpy = {
                trigger: { player: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/原神杀/audio', player.name);
                },
            };
            /////
            lib.init.css('extension/原神杀', 'extension');
        },
        precontent() {
            game.import('character', function () {
                const yuanshen = {
                    name: 'yuanshen',
                    connect: true,
                    characterSort: {
                        yuanshen: {
                            genshin_mengde: ['琴', '优菈', '迪奥娜', 'dc阿贝多', '莫娜', '迪卢克', '芭芭拉', '阿贝多', 'moyu_diluke', '递茶_迪卢克', '班尼特', '安柏', '罗莎莉亚', '温迪', 'yusheng_abeiduo', 'luoshaliya', '诺艾尔', 'yun_abeiduo', 'youla', 'keli', '菲谢尔', '雷泽', '砂糖', 'dc_bbl', 'feixiee', 'ys_kaiya', 'swimmer_bbl', 'swimmer_qin'],
                            genshin_liyue: ['xiao', '魈', '烟绯', '钟离', '凝光', '北斗', '胡桃', '重云', 'ganyu', 'yanfei', '七七', 'lita_qiqi', 'yun_zhongli', '甘雨', '刻晴', '七七', 'xingqiu', '行秋', 'kaiya_ganyu', 'lita_hutao', 'hj_zhongli'],
                            genshin_zhidong: ['dadaliya', '达达利亚'],
                            diyer: ['linyin', 'tuer', 'moyu', 'yusheng', 'kinro', 'sp_tuer', 'guanxing_yusheng', 'xd', '94'],
                            genshin_daoqi: ['shenlilinhua', 'xiaogong', 'lt_xg', 'huasanli', 'leidianying', 'zaoyou', '早柚', '宵宫', '心海', '雷电将军'],
                        },
                    },
                    character: {
                        leidianying: ['female', 'daoqi', 3, ['yanshouling', 'zhuyuanbaiyan', 'mengxiangzhenshuo'], ['hiddenSkill']],
                        huasanli: ['female', 'daoqi', 3, ['fuxing', 'sakura_zhuiyi', '除邪'], []],
                        lt_xg: ['female', 'daoqi', 3, ['yanxiaotinghuowu', 'liujinyunjiancao'], []],
                        xiaogong: ['female', 'daoqi', 4, ['yanxin', 'xg_yanhuo'], []],
                        shenlilinhua: ['female', 'daoqi', 3, ['shuanghua', 'xiabu', 'shuangmie'], []],
                        94: ['male', 'meng', 4, ['yizhi', 'banjie'], []],
                        swimmer_bbl: ['female', 'mengde', 3, ['shuiyu', 'qingbi'], []],
                        swimmer_qin: ['female', 'mengde', 4, ['qingbi', 'fengyu'], []],
                        xd: ['male', 'wei', 4, ['xd_chouka'], []],
                        hj_zhongli: ['male', 'liyue', 4, ['yuzhang', 'hj_tianxing'], []],
                        linyin: ['male', 'meng', 4, ['shenzhan', 'lunyan'], []],
                        tuer: ['female', 'meng', 3, ['kuishi', 'shanlun', 'qunxian'], []],
                        moyu: ['male', 'meng', 4, ['xingmie', 'juxing'], []],
                        yusheng: ['female', 'meng', 1, ['guiye'], []], //QQQ
                        kinro: ['male', 'meng', 4, ['guanli', 'xiezhu'], []],
                        sp_tuer: ['female', 'meng', '4/6', ['yinshi', 'niyang', 'wushi'], []],
                        guanxing_yusheng: ['female', 'meng', 3, ['yusheng_tianxiang', 'xinghe'], []],
                        旅行者: ['female', 'lvxingzhe', 4, ['baipiao', 'kejin', 'chouka'], ['des:玄不救非,氪不祓行']],
                        feixiee: ['female', 'mengde', 3, ['zuimie', 'zuifa'], []],
                        ys_kaiya: ['male', 'mengde', 4, ['huangmai', 'yusheng_shuangxi', 'yusheng_yinshi'], []],
                        'kong&ying': ['none', 'lvxingzhe', 4, ['shuanggui', 'zhuisu'], []],
                        kaiya_ganyu: ['female', 'liyue', 3, ['tuomang', 'yingzhao'], []],
                        xingqiu: ['male', 'liyue', '3/4', ['yucai'], []],
                        youla: ['female', 'mengde', 4, ['bingchao', 'ninglang'], []],
                        keli: ['female', 'mengde', 3, ['bengbengzhadan', 'xinxing'], []],
                        zaoyou: ['female', 'daoqi', 3, ['zhongmofan', 'fengyinjijin', 'yingheliaoluan'], ['hiddenSkill']],
                        yun_zhongli: ['male', 'liyue', 4, ['yun_tianxing'], []],
                        lita_qiqi: ['female', 'liyue', 3, ['lita_hanbing', 'lita_due'], []],
                        菲谢尔: ['female', 'mengde', 3, ['yayan', 'duanzui'], []],
                        七七: ['female', 'liyue', 3, ['guichai', 'due'], []],
                        刻晴: ['female', 'liyue', 3, ['leili', 'xingyi'], []],
                        雷泽: ['male', 'mengde', 4, ['canglei', 'leiya'], []],
                        砂糖: ['female', 'mengde', 3, ['fengling', 'chumei', 'zuocheng'], []],
                        甘雨: ['female', 'liyue', 3, ['shuangshi', 'dc_linji'], []],
                        宵宫: ['female', 'daoqi', 4, ['dc_yanhuo', 'dc_yanxiao'], []],
                        心海: ['female', 'daoqi', 3, ['dc_huayu', 'dc_miaosuan'], []],
                        雷电将军: ['female', 'daoqi', 4, ['dc_kaiyan', 'dc_zhenmeng'], []],
                        琴: ['female', 'mengde', 4, ['dc_fengyin', 'dc_fengyu'], []],
                        lita_hutao: ['female', 'liyue', 6, ['dieyin', 'anshen'], []],
                        dc_bbl: ['female', 'mengde', 3, ['ouxiang', 'dc_zhiyu', 'anke'], []],
                        yanfei: ['female', 'liyue', 3, ['xianlv', 'yanfei_danhuo', 'jieqi'], []],
                        kong: ['male', 'lvxingzhe', 4, ['kong_lvli', 'jingshou'], []],
                        yun_abeiduo: ['male', 'mengde', 3, ['nizao', 'yun_chuangsheng'], []],
                        ying: ['female', 'lvxingzhe', 3, ['guanjing', 'wangfan', 'liaodong'], []],
                        luoshaliya: ['female', 'mengde', 3, ['buju', 'shengli', 'lsly_yexing'], []],
                        yusheng_abeiduo: ['male', 'mengde', 4, ['yusheng_chuangsheng', 'yusheng_yanghua'], []],
                        ganyu: ['female', 'liyue', 3, ['linji', 'tianhua'], []],
                        迪卢克: ['male', 'mengde', 4, ['审判', '夜枭'], []],
                        芭芭拉: ['female', 'mengde', 4, ['演奏', '解咒', '复苏', '疗愈'], []],
                        xiao: ['male', 'liyue', 4, ['fenglun', 'nuowu'], []],
                        阿贝多: ['male', 'mengde', 4, ['创生'], []],
                        moyu_diluke: ['male', 'mengde', 4, ['niyan', 'liming'], []],
                        dadaliya: ['male', 'zhidong', 5, ['duanyu', 'mozhuang'], []],
                        钟离: ['male', 'liyue', 4, ['chenxian', 'dijun', 'yanzhang', 'dc_qiyue'], ['des:岩王帝君']],
                        sp钟离: ['male', 'liyue', 4, ['spchenxian', 'spyanzhang', 'dc_qiyue'], ['des:尘世闲游']],
                        温迪: ['male', 'mengde', 3, ['fenyan', 'fengshi', '风神'], []],
                        凝光: ['female', 'liyue', 3, ['qianjing', 'tianquan'], []],
                        北斗: ['female', 'liyue', 4, ['zhuolang', 'zhengtao'], []],
                        班尼特: ['male', 'mengde', 4, ['dc_xianyun', 'guwu'], []],
                        罗莎莉亚: ['female', 'mengde', 3, ['shizui', 'yexing', 'zhishou'], []],
                        递茶_迪卢克: ['male', 'mengde', 4, ['dicha_niyan', 'chenxi'], []],
                        御神装勿忘: ['female', 'wei', 4, ['renshan', 'hanyu'], []],
                        胡桃: ['female', 'liyue', 4, ['htdiewu', 'wangsheng'], []],
                        重云: ['male', 'liyue', 4, ['chunyang', 'tuixie'], []],
                        达达利亚: ['male', 'zhidong', 4, ['dicha_kuanglan', 'dicha_duanliu'], []],
                        诺艾尔: ['female', 'mengde', 4, ['xinkai', 'saochu'], []],
                        行秋: ['male', 'liyue', 3, ['yujian', 'touxian'], []],
                        魈: ['male', 'liyue', 4, ['dc_fenglun', 'dc_nuowu'], []],
                        莫娜: ['female', 'mengde', 3, ['qiongsuan', 'zhanxing', 'huanyuan', 'xingming'], []],
                        dc阿贝多: ['male', 'mengde', 3, ['dc_chuangsheng'], []],
                        迪奥娜: ['female', 'mengde', 3, ['dongdong', 'tetiao'], []],
                        烟绯: ['female', 'liyue', 3, ['dangshu', 'zhuozhuo', 'dc_jieqi'], []],
                        优菈: ['female', 'mengde', 4, ['jichou', 'dc_ninglang'], []],
                        安柏: ['female', 'mengde', 3, ['tutu', 'feiyi'], []],
                        早柚: ['female', 'daoqi', 3, ['dc_fengji', 'yinghe'], []],
                        不倒貉貉: ['female', 'daoqi', 3, ['wuhu'], []],
                    },
                    skill: {
                        tczdg_skill: {
                            equipSkill: true,
                            audio: 'cixiong_skill',
                            trigger: { player: 'useCardAfter' },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        wqzhg_skill: {
                            equipSkill: true,
                            trigger: {
                                source: 'damageBegin2',
                            },
                            usable: 1,
                            filter(event, player) {
                                return event.nature;
                            },
                            forced: true,
                            audio: 'guanshi_skill',
                            content() {
                                if (player.countCards('h') < 2) trigger.num++;
                                else {
                                    player.storage.wqzhg = trigger.nature;
                                    player.addTempSkill('wqzhg_2');
                                }
                            },
                        },
                        wqzhg_2: {
                            equipSkill: true,
                            mark: true,
                            marktext: '切',
                            intro: {
                                content(storage, player, skill) {
                                    return `本回合内下一次造成的${get.translation(player.storage.wqzhg)}属性伤害+1`;
                                },
                                name: '雾切御腰物',
                            },
                            trigger: {
                                source: 'damageBegin1',
                            },
                            usable: 1,
                            filter(event, player) {
                                return event.nature == player.storage.wqzhg;
                            },
                            forced: true,
                            audio: 'guanshi_skill',
                            content() {
                                player.removeSkill('wqzhg_2');
                                trigger.num++;
                            },
                        },
                        dc_kaiyan: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                global: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.source && event.source != player && !event.source.hasSkill('dc_kaiyan_mark');
                            }, //QQQ
                            check(event, player) {
                                return get.attitude(player, event.source) > 0;
                            },
                            logTarget: 'source',
                            //_priority:-1,
                            content() {
                                'step 0';
                                trigger.source.draw();
                                trigger.source.addTempSkill('dc_kaiyan_mark', 'roundStart');
                                var choiceList = [`选择攻击范围内的一名角色令${get.translation(player)}对其造成一点雷电伤害`, `令${get.translation(player)}摸一张牌并获得${trigger.num}层<愿力>`];
                                trigger.source
                                    .chooseControl()
                                    .set('choiceList', choiceList)
                                    .set('【恶曜开眼】', get.prompt('dc_kaiyan'))
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        var targets = game
                                            .filterPlayer(function (current) {
                                                return -get.attitude(player, current) && player.inRange(current);
                                            })
                                            .sortBySeat();
                                        if (targets.length) return 0;
                                        return 1;
                                    });
                                ('step 1');
                                if (result.index == 1) {
                                    player.draw();
                                    player.addMark('dc_zhenmeng_mark', trigger.num);
                                    event.finish();
                                } else {
                                    trigger.source
                                        .chooseTarget(`【恶曜开眼】选择攻击范围内的一名角色令${get.translation(player)}对其造成一点雷电伤害`, function (card, player, target) {
                                            return player.inRange(target);
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        });
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].damage('thunder');
                                }
                            },
                            group: 'dc_kaiyan_cost',
                            subSkill: {
                                mark: {},
                                cost: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    filter(event, player) {
                                        return event.source && event.source != player && !event.source.hasSkill('dc_kaiyan_mark');
                                    }, //QQQ
                                    _priority: -1,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = ['本轮内', '本局内', '取消'];
                                        player
                                            .chooseControl(list)
                                            .set('prompt', `是否不再询问${get.translation(trigger.source)}的【开眼】触发提示(选择生效范围)`)
                                            .set('ai', '取消');
                                        ('step 1');
                                        if (result.control == '本轮内') {
                                            trigger.source.addTempSkill('dc_kaiyan_mark', 'roundStart');
                                        } else if (result.control == '本局内') {
                                            trigger.source.addSkill('dc_kaiyan_mark');
                                        } else event.finish();
                                    },
                                },
                            },
                        },
                        dc_zhenmeng: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countMark('dc_zhenmeng_mark');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('是否消耗所有<愿力>发动【无想一刀】:选择一名攻击范围内的角色,视为对其使用一张雷【杀】', function (card, player, target) {
                                        return player.inRange(target);
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var num = player.countMark('dc_zhenmeng_mark');
                                    player.removeMark('dc_zhenmeng_mark', num);
                                    if (num > 1) result.targets[0].addTempSkill('fengyin');
                                    player.useCard({ name: 'sha', nature: 'thunder' }, false, result.targets[0]).audio = false;
                                    event.num = num;
                                } else event.finish();
                                ('step 2');
                                var num = event.num - 2;
                                if (num > 0) {
                                    player.storage.dc_zhenmeng_sha = num;
                                    player.storage.dc_zhenmeng_draw = num;
                                    player.addTempSkill('dc_zhenmeng_sha');
                                    player.addTempSkill('dc_zhenmeng_draw');
                                    player.markSkillCharacter('dc_zhenmeng_sha', player, '【梦想一心】', `本回合限${num}次,你可以将一张黑色牌当无次数限制的雷【杀】使用<br/r>以此法使用的【杀】造成伤害时,可以令至多${num}名角色各摸一张牌`);
                                }
                            },
                            group: ['dc_zhenmeng_mark', 'dc_zhenmeng_un'],
                            subSkill: {
                                mark: {
                                    marktext: '愿',
                                    intro: {
                                        content: 'mark',
                                        name: '愿力',
                                    },
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.nature == 'thunder' && player.countMark('dc_zhenmeng_mark') < 6;
                                    },
                                    forced: true,
                                    content() {
                                        var num = trigger.num;
                                        var sum = player.countMark('dc_zhenmeng_mark') + num;
                                        if (sum > 6) num = sum - 6;
                                        player.addMark('dc_zhenmeng_mark', num);
                                    },
                                },
                                un: {
                                    trigger: { player: 'phaseUseAfter' },
                                    forced: true,
                                    content() {
                                        player.unmarkSkill('dc_zhenmeng_sha');
                                    },
                                },
                                sha: {
                                    audio: 'ext:原神杀/audio:3',
                                    enable: 'phaseUse',
                                    filterCard(card, player) {
                                        return get.color(card) == 'black';
                                    },
                                    position: 'hes',
                                    viewAs: { name: 'sha', nature: 'thunder', mxyx: true },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hes', { color: 'black' })) return false;
                                        return player.storage.dc_zhenmeng_sha;
                                    },
                                    prompt() {
                                        return `将一张黑色牌当雷【杀】使用,本回合还可发动${_status.currentPhase.storage.dc_zhenmeng_sha}次`;
                                    },
                                    check(card) {
                                        return 6 - get.value(card);
                                    },
                                    onuse(result, player) {
                                        player.storage.dc_zhenmeng_sha--;
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.mxyx) return Infinity;
                                        },
                                    },
                                    ai: {
                                        skillTagFilter(player) {
                                            if (!player.countCards('hes', { color: 'black' })) return false;
                                        },
                                        respondSha: true,
                                    },
                                },
                                draw: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.skill != 'dc_zhenmeng_sha') return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.storage.dc_zhenmeng_draw;
                                        player
                                            .chooseTarget(get.prompt('dc_zhenmeng'), `令至多${num}名角色各摸一张牌`, [1, num], function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(_status.event.player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var targets = result.targets;
                                            player.line(targets, 'green');
                                            targets.sortBySeat();
                                            game.asyncDraw(targets);
                                        }
                                    },
                                },
                            },
                        },
                        dc_miaosuan: {
                            audio: 'ext:原神杀/audio:3',
                            mod: {
                                targetInRange(card, player, target, now) {
                                    var type = get.type(card);
                                    if (type == 'trick' || type == 'delay') return true;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                var type = get.type(event.card);
                                return type == 'trick' || type == 'delay';
                            },
                            forced: true,
                            _priority: 20,
                            content() {
                                event.players = game
                                    .filterPlayer(function (current) {
                                        return current != player;
                                    })
                                    .sortBySeat();
                                trigger.directHit.addArray(event.players);
                            },
                            group: 'dc_miaosuan_sha',
                            subSkill: {
                                sha: {
                                    audio: 'dc_miaosuan',
                                    trigger: {
                                        global: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return event.source == player && event.num != 1;
                                    },
                                    forced: true,
                                    _priority: -1,
                                    content() {
                                        'step 0';
                                        event.num = trigger.num - 1;
                                        trigger.num = 1;
                                        game.log(player, '的', trigger.card, '的伤害改为1');
                                        if (
                                            event.num &&
                                            game.hasPlayer(function (current) {
                                                return current.isDamaged();
                                            })
                                        ) {
                                            player
                                                .chooseTarget(`【庙算】选择一名角色令其回复一点体力,或取消以获得${event.num}点能量`, function (card, player, target) {
                                                    return target.isDamaged();
                                                })
                                                .set('ai', function (target) {
                                                    return get.attitude(_status.event.player, target);
                                                });
                                        } else {
                                            player.addMark('dc_huayu', event.num);
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.targets?.length) {
                                            result.targets[0].recover();
                                        } else player.addMark('dc_huayu', event.num);
                                    },
                                },
                            },
                        },
                        dc_huayu: {
                            audio: 'dc_miaosuan',
                            trigger: {
                                global: ['gameDrawAfter', 'recoverEnd'],
                                player: ['enterGame', 'useCard1', 'phaseBegin'],
                            },
                            marktext: '能',
                            intro: {
                                content: 'mark',
                                name: '能量',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'useCard') return get.type(event.card) == 'trick' || get.type(event.card) == 'delay';
                                if (event.name == 'recover') return event.player == player || event.source == player;
                                return player.countMark('dc_huayu') < player.hp;
                            },
                            content() {
                                if (trigger.name == 'useCard') player.addMark('dc_huayu', 1);
                                else if (trigger.name == 'recover') {
                                    player.addMark('dc_huayu', 1);
                                } else {
                                    var num = player.hp - player.countMark('dc_huayu');
                                    player.addMark('dc_huayu', num);
                                }
                            },
                            group: ['dc_huayu_guanxing', 'dc_huayu_jizhi', 'dc_huayu_mingce', 'dc_huayu_kanpo', 'dc_huayu_yiji', 'dc_huayu_qice'],
                            subSkill: {
                                guanxing: {
                                    audio: 'ext:原神杀/audio:1',
                                    trigger: { player: 'phaseZhunbeiBegin' },
                                    filter(event, player) {
                                        return player.hasMark('dc_huayu');
                                    },
                                    prompt: '是否消耗1点能量,发动技能【观星】',
                                    content() {
                                        'step 0';
                                        player.removeMark('dc_huayu', 1);
                                        game.log(player, '发动了【', 'guanxing', '】');
                                        ('step 1');
                                        var next = game.createEvent('guanxing');
                                        next.player = player;
                                        next.setContent(lib.skill.guanxing.content);
                                    },
                                    ai: {
                                        guanxing: true,
                                    },
                                },
                                jizhi: {
                                    audio: 'ext:原神杀/audio:4',
                                    trigger: { player: 'useCard' },
                                    preHidden: true,
                                    filter(event, player) {
                                        return (get.type(event.card) == 'trick' || get.type(event.card) == 'delay') && player.hasMark('dc_huayu');
                                    },
                                    _priority: 10,
                                    prompt: '是否消耗1点能量,发动技能【集智】',
                                    content() {
                                        player.removeMark('dc_huayu', 1);
                                        game.log(player, '发动了【', 'jizhi', '】');
                                        player.draw();
                                    },
                                    ai: {
                                        threaten: 1.4,
                                        noautowuxie: true,
                                    },
                                },
                                mingce: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    audio: 'dc_huayu_jizhi',
                                    position: 'he',
                                    filterCard(card) {
                                        return card.name == 'sha' || get.type(card) == 'equip';
                                    },
                                    filter(event, player) {
                                        if (player.countMark('dc_huayu') < 1) return false;
                                        return player.countCards('h', 'sha') > 0 || player.countCards('he', { type: 'equip' }) > 0;
                                    },
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    selectTarget: 2,
                                    multitarget: true,
                                    discard: false,
                                    lose: false,
                                    targetprompt: ['得到牌', '出杀目标'],
                                    filterTarget(card, player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            return player != target;
                                        } else {
                                            return ui.selected.targets[0].inRange(target);
                                        }
                                    },
                                    delay: false,
                                    prompt: '消耗1点能量,交给其他角色一张装备牌或【杀】',
                                    content() {
                                        'step 0';
                                        player.removeMark('dc_huayu', 1);
                                        game.log(player, '发动了【', 'mingce', '】');
                                        targets[0].gain(cards, player, 'give');
                                        ('step 1');
                                        if (!lib.filter.filterTarget({ name: 'sha' }, targets[0], targets[1])) event._result = { control: 'draw_card' };
                                        else
                                            targets[0]
                                                .chooseControl('draw_card', '出杀', function () {
                                                    var player = _status.event.player;
                                                    var target = _status.event.target;
                                                    if (get.effect(_status.event.target, { name: 'sha' }, player, player) > 0) {
                                                        return 1;
                                                    }
                                                    return 0;
                                                })
                                                .set('target', targets[1])
                                                .set('prompt', `对${get.translation(targets[1])}使用一张杀,或摸一张牌`);
                                        ('step 2');
                                        if (result.control == 'draw_card') {
                                            targets[0].draw();
                                        } else {
                                            targets[0].useCard({ name: 'sha' }, targets[1]);
                                        }
                                    },
                                    ai: {
                                        result: {
                                            player(player) {
                                                var players = game.filterPlayer();
                                                for (var i of players) {
                                                    if (i != player && get.attitude(player, i) > 1 && get.attitude(i, player) > 1) {
                                                        return 1;
                                                    }
                                                }
                                                return 0;
                                            },
                                            target(player, target) {
                                                if (ui.selected.targets.length) {
                                                    return -0.1;
                                                }
                                                return 1;
                                            },
                                        },
                                        order: 8.5,
                                        expose: 0.2,
                                    },
                                },
                                kanpo: {
                                    mod: {
                                        aiValue(player, card, num) {
                                            if (card.name != 'wuxie' && get.color(card) != 'black') return;
                                            var cards = player.getCards('hs', function (card) {
                                                return card.name == 'wuxie' || get.color(card) == 'black';
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
                                            return lib.skill.kanpo.mod.aiValue.apply(this, arguments);
                                        },
                                    },
                                    audio: 'dc_huayu_jizhi',
                                    enable: 'chooseToUse',
                                    filterCard(card) {
                                        return get.color(card) == 'black';
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('hes', { color: 'black' }) > 0 && player.countMark('dc_huayu') > 1;
                                    },
                                    viewAs: { name: 'wuxie' },
                                    position: 'hes',
                                    prompt: '消耗2点能量,将一张黑色牌当【无懈可击】使用',
                                    check(card) {
                                        var tri = _status.event.getTrigger();
                                        if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                        return 8 - get.value(card);
                                    },
                                    onuse(result, player) {
                                        player.removeMark('dc_huayu', 2);
                                        //game.log(player,'发动了【','kanpo','】');
                                    },
                                    threaten: 1.2,
                                },
                                yiji: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.num > 0 && player.countMark('dc_huayu') > 1;
                                    },
                                    prompt: '是否消耗2点能量,发动技能【遗计】',
                                    content() {
                                        'step 0';
                                        player.removeMark('dc_huayu', 2);
                                        game.log(player, '发动了【', 'new_reyiji', '】');
                                        event.count = 1;
                                        ('step 1');
                                        player.draw(2);
                                        event.given = 0;
                                        ('step 2');
                                        player.chooseCardTarget({
                                            filterCard: true,
                                            selectCard: [1, 2 - event.given],
                                            filterTarget(card, player, target) {
                                                return player != target && target != event.temp;
                                            },
                                            ai1(card) {
                                                if (ui.selected.cards.length) return -1;
                                                if (card.name == 'du') return 20;
                                                return _status.event.player.countCards('h') - _status.event.player.hp;
                                            },
                                            ai2(target) {
                                                var att = get.attitude(_status.event.player, target);
                                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                                    if (target.hasSkillTag('nodu')) return 0;
                                                    return 1 - att;
                                                }
                                                return att - 4;
                                            },
                                            prompt: '你可以选择将至多两张手牌交给一名角色',
                                        });
                                        ('step 3');
                                        if (result.bool) {
                                            player.line(result.targets, 'green');
                                            result.targets[0].gain(result.cards, player, 'giveAuto');
                                            event.given += result.cards.length;
                                            if (event.given < 2) {
                                                event.temp = result.targets[0];
                                                event.goto(2);
                                            } else if (event.count < trigger.num && player.countMark('dc_huayu') > 1) {
                                                delete event.temp;
                                                event.count++;
                                                player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                            } else event.finish();
                                        } else if (event.count < trigger.num && player.countMark('dc_huayu') > 1) {
                                            delete event.temp;
                                            event.count++;
                                            player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                        } else event.finish();
                                        ('step 4');
                                        if (result.bool) {
                                            event.goto(1);
                                        }
                                    },
                                    ai: {
                                        maixie: true,
                                        maixie_hp: true,
                                        result: {
                                            effect(card, player, target) {
                                                if (get.tag(card, 'damage')) {
                                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                                    if (!target.hasFriend()) return;
                                                    var num = 1;
                                                    if (get.attitude(player, target) > 0) {
                                                        if (player.needsToDiscard()) {
                                                            num = 0.7;
                                                        } else {
                                                            num = 0.5;
                                                        }
                                                    }
                                                    if (player.hp >= 4) return [1, num * 2];
                                                    if (target.hp == 3) return [1, num * 1.5];
                                                    if (target.hp == 2) return [1, num * 0.5];
                                                }
                                            },
                                        },
                                        threaten: 0.6,
                                    },
                                },
                                qice: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        var hs = player.getCards('h');
                                        if (!hs.length || player.countMark('dc_huayu') < 2) return false;
                                        for (var i = 0; i < hs.length; i++) {
                                            var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                            if (mod2 === false) return false;
                                        }
                                        return true;
                                    },
                                    chooseButton: {
                                        dialog(player) {
                                            var list = [];
                                            for (var i = 0; i < lib.inpile.length; i++) {
                                                if (get.type(lib.inpile[i]) == 'trick') list.push(['锦囊', '', lib.inpile[i]]);
                                            }
                                            return ui.create.dialog('【化羽】是否消耗2点能量,发动技能【奇策】', [list, 'vcard']);
                                        },
                                        filter(button, player) {
                                            return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                        },
                                        check(button) {
                                            var player = _status.event.player;
                                            var recover = 0,
                                                lose = 1,
                                                players = game.filterPlayer();
                                            for (var i of players) {
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
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard: true,
                                                selectCard: -1,
                                                position: 'h',
                                                audio: 'dc_huayu_jizhi',
                                                popname: true,
                                                viewAs: { name: links[0][2] },
                                                precontent() {
                                                    player.removeMark('dc_huayu', 2);
                                                    game.log(player, '发动了【', 'qice', '】');
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return `将全部手牌当作${get.translation(links[0][2])}使用`;
                                        },
                                    },
                                    ai: {
                                        order: 1,
                                        result: {
                                            player(player) {
                                                var num = 0;
                                                var cards = player.getCards('h');
                                                if (cards.length >= 3 && player.hp >= 3) return 0;
                                                if (Array.isArray(cards))
                                                    for (var i of cards) {
                                                        num += Math.max(0, get.value(i, player, 'raw'));
                                                    }
                                                num /= cards.length;
                                                num *= Math.min(cards.length, player.hp);
                                                return 12 - num;
                                            },
                                        },
                                        threaten: 1.6,
                                    },
                                },
                            },
                        },
                        dc_fengyin: {
                            audio: 'ext:原神杀/audio:4',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                var card = get.cardPile(function (card) {
                                    return card.name == 'fyj';
                                });
                                if (card) player.equip(card);
                                else {
                                    for (var i of game.players) {
                                        card = i.getCards('h', function (card) {
                                            return card.name == 'fyj';
                                        });
                                        if (card.length) {
                                            player.equip(card[0]);
                                            i.draw();
                                            break;
                                        }
                                    }
                                }
                            },
                            mod: {
                                canBeDiscarded(card, source, player) {
                                    if (get.position(card) == 'e' && get.subtype(card) == 'equip1') return false;
                                },
                            },
                            group: ['dc_fengyin_fyj1', 'dc_fengyin_fyj2'],
                            subSkill: {
                                fyj1: {
                                    trigger: {
                                        global: 'fyj_skillAfter',
                                    },
                                    filter(event, player) {
                                        return event.player.storage.dc_fengyin_fyj1 == true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        delete trigger.player.storage.dc_fengyin_fyj1;
                                        event.target = trigger.player.storage.fyj_skill;
                                        if (event.target.isAlive())
                                            player.chooseBool(`【风引】是否对${get.translation(event.target)}造成一点伤害并令其不能使用或打出牌直到回合结束`).ai = function () {
                                                return get.attitude(player, event.target) < 0;
                                            };
                                        ('step 1');
                                        if (result.bool) {
                                            event.target.damage();
                                            event.target.addTempSkill('dc_fengyin_mark');
                                        }
                                    },
                                },
                                fyj2: {
                                    trigger: {
                                        global: 'fyj_skillAfter',
                                    },
                                    filter(event, player) {
                                        return event.player.storage.dc_fengyin_fyj1 == false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseBool(`【风引】是否失去一点体力,令${get.translation(trigger.player)}的<西风之鹰的抗争>强制生效`).ai = function () {
                                            return get.attitude(player, trigger.player) > 0 && player.hp > 1;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.loseHp();
                                            trigger.player.storage.dc_fengyin_fyj2 = true;
                                            var next = game.createEvent('fyj_skill');
                                            event.next.remove(next);
                                            var evt = event.parent;
                                            if (evt.getlx === false) evt = evt.parent;
                                            evt.after.push(next);
                                            next.player = trigger.player;
                                            next.setContent(function () {
                                                player.recover();
                                                player.storage.fyj_skill_re = false;
                                                player.storage.dc_fengyin_fyj1 = true;
                                                player.storage.dc_fengyin_fyj2 = false;
                                            });
                                        }
                                    },
                                },
                                mark: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '风',
                                    intro: {
                                        name: '西风之鹰的抗争',
                                        content: '不能使用或打出牌直到回合结束',
                                    },
                                    mod: {
                                        cardEnabled(card) {
                                            return false;
                                        },
                                        cardRespondable(card) {
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        dc_fengyu: {
                            audio: 'dc_fengyin',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                if (target.isTurnedOver()) {
                                    target.turnOver();
                                    num++;
                                }
                                if (target.isLinked()) {
                                    target.link();
                                    num++;
                                }
                                var card = target.getCards('j');
                                if (card.length) {
                                    target.discard(card);
                                    num++;
                                }
                                if (!num) {
                                    target.storage.dc_fengyu = player;
                                    target.addSkill('dc_fengyu_remove');
                                    target.addSkill('fyj_skill');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: 1 /*function(player,target){
                  var att=get.attitude(_status.event.player,target);
                  if(att>0){
                  if(!target.hasSkill('fyj_skill')) att+=3;
                  if(target.isTurnedOver()) att+=3;
                  if(target.getCards('j',function(card){
                  return card.name=='lebu'||card.name=='bingliang';
                  }).length) att+=3;
                  }
                  return att;
                  },*/,
                                },
                                threaten: 1.1,
                            },
                            subSkill: {
                                remove: {
                                    trigger: { global: ['phaseBegin', 'dieAfter'] },
                                    forced: true,
                                    filter(event, player) {
                                        if (
                                            player.getCards('e', function (card) {
                                                return card.name == 'fyj';
                                            }).length
                                        )
                                            return false;
                                        return event.player == player.storage.dc_fengyu;
                                    },
                                    content() {
                                        player.removeSkill('fyj_skill');
                                        player.removeSkill('dc_fengyu_remove');
                                    },
                                },
                            },
                        },
                        dc_yanhuo: {
                            init(player) {
                                if (!player.storage.dc_yanhuo) player.storage.dc_yanhuo = [];
                                player.storage.dc_yanhuo_2 = 0;
                            },
                            audio: 'ext:原神杀/audio:3',
                            group: ['dc_yanhuo_1', 'dc_yanhuo_2', 'dc_yanhuo_re', 'dc_yanhuo_stat'],
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                var hs = player.getCards('hes');
                                var list = [];
                                for (var i of hs) {
                                    if (!player.storage.dc_yanhuo.includes(i.suit) && !list.includes(i.suit)) {
                                        list.push(i.suit);
                                    }
                                }
                                if (list.length < 2) return false;
                                return true;
                            },
                            filter(event, player) {
                                var hs = player.getCards('hes');
                                var list = [];
                                for (var i of hs) {
                                    if (!player.storage.dc_yanhuo.includes(i.suit) && !list.includes(i.suit)) {
                                        list.push(i.suit);
                                    }
                                }
                                if (list.length < 2) return false;
                                for (var i of lib.inpile) {
                                    if (get.type(i) != 'equip' && event.filterCard({ name: i }, player, event)) return true;
                                }
                            },
                            filterx(event, player) {
                                var list = [];
                                for (var i in ui.selected.cards) {
                                    list.add(get.color(i));
                                }
                                if (list >= 2) return true;
                                else return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (!event.filterCard || !event.filterCard({ name: i }, player, event)) continue;
                                        if (get.type(i) == 'basic' || get.type(i) == 'trick') list.push([get.translation(get.type(i)), '', i]);
                                    }
                                    if (list.length) return ui.create.dialog('烟火', [list, 'vcard']);
                                    else return ui.create.dialog('无可转化的牌!');
                                },
                                check(button) {
                                    return _status.event.player.getUseValue({ name: button.link[2] });
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'dc_yanhuo',
                                        filterCard(card, player, target) {
                                            var suit = card.suit;
                                            if (Array.isArray(ui.selected.cards))
                                                for (var i of ui.selected.cards) {
                                                    if (i.suit == suit) return false;
                                                    //if(links[0][2]=='sha'&&!player.canUse('sha',target,false)&&get.color(i)==get.color(card)) return false;
                                                }
                                            return !player.storage.dc_yanhuo.includes(suit);
                                        },
                                        complexCard: true,
                                        selectCard: [2, 4],
                                        filterx(event, player) {
                                            var list = [];
                                            for (var i in ui.selected.cards) {
                                                list.add(get.color(i));
                                            }
                                            if (list >= 2) return true;
                                            else return false;
                                        },
                                        check(card, player, target) {
                                            return 5 - get.value(card);
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        position: 'hes',
                                        popname: true,
                                        precontent() { },
                                    };
                                },
                                prompt(links, player) {
                                    return `将至少两张花色各不相同的手牌当做【${get.translation(links[0][2])}】使用或打出`;
                                },
                            },
                            ai: {
                                order() {
                                    return 3.1;
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'fireAttack') return true;
                                    if (player.countCards('hes') < 2) return false;
                                    if (
                                        !player.hasCard(function (card) {
                                            return get.type(card) == 'basic';
                                        }, 'hes')
                                    ) {
                                        return false;
                                    }
                                },
                                result: {
                                    player: 1,
                                },
                                respondSha: true,
                                respondShan: true,
                                fireAttack: true,
                                threaten: 1.2,
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (_status.event.skill == 'dc_yanhuo_backup' && get.color(card) == 'none') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.dc_yanhuo) return Infinity;
                                    if (card.name == 'sha') return num + player.storage.dc_yanhuo_2;
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.skill != 'dc_yanhuo_backup') return false;
                                        if (event.cards.length < 2) return false;
                                        return true;
                                    },
                                    content() {
                                        var cards = trigger.cards;
                                        var num = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (get.color(i) == 'red') num++;
                                            }
                                        if (num > 1) trigger.nature = 'fire';
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.skill != 'dc_yanhuo_backup') return false;
                                        if (event.cards.length < 2) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = trigger.cards;
                                        var num = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (get.color(i) == 'black') num++;
                                            }
                                        if (num > 1) trigger.directHit.addArray(game.players);
                                        ('step 1');
                                        if (trigger.card.name == 'sha') {
                                            var cards = trigger.cards;
                                            var num = 0;
                                            if (Array.isArray(cards))
                                                for (var i of cards) {
                                                    if (get.color(i) == 'red') num++;
                                                }
                                            if (Array.isArray(cards))
                                                for (var i of cards) {
                                                    if (get.color(i) == 'black') {
                                                        player.storage.dc_yanhuo_2++;
                                                        break;
                                                    }
                                                }
                                            if (num > 1) {
                                                trigger.card.nature = 'fire';
                                            }
                                        }
                                        ('step 3');
                                        var cards = trigger.cards;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (!player.storage.dc_yanhuo.includes(i.suit)) player.storage.dc_yanhuo.push(i.suit);
                                            }
                                    },
                                },
                                stat: {
                                    popup: false,
                                    silent: true,
                                    firstDo: true,
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    filter(event, player) {
                                        return event.card && event.addCount !== false && event.cards && event.card.dc_yanhuo;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.addCount = false;
                                        if (player.stat[player.stat.length - 1].trigger.card.name > 0) {
                                            player.stat[player.stat.length - 1].trigger.card.name--;
                                        }
                                    },
                                },
                                re: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.dc_yanhuo.length;
                                    },
                                    content() {
                                        player.storage.dc_yanhuo = [];
                                        player.storage.dc_yanhuo_2 = 0;
                                        player.storage.dc_yanxiao = [];
                                    },
                                },
                            },
                        },
                        dc_yanxiao: {
                            init(player) {
                                if (!player.storage.dc_yanxiao) player.storage.dc_yanxiao = [];
                            },
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.nature == 'fire' && event.cards;
                            },
                            forced: true,
                            content() {
                                var cards = trigger.cards;
                                var num = 0;
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (!player.storage.dc_yanxiao.includes(i.suit)) {
                                            num++;
                                            player.gain(
                                                get.cardPile(function (card) {
                                                    return card.suit == i.suit;
                                                }),
                                                'gain2'
                                            );
                                            player.storage.dc_yanxiao.push(i.suit);
                                        }
                                    }
                                if (num > 0) {
                                    //player.draw(num);
                                }
                            },
                        },
                        dc_fengji: {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            audio: 'ext:原神杀/audio:3',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('是否发动【风急】,获得一名角色的一张牌并将武将牌翻面', function (card, player, target) {
                                        return target != player && target.countCards('he');
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) < 0;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.gainPlayerCard(target, 'he', true);
                                } else {
                                    event.finish();
                                }
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != player && current != event.target;
                                    })
                                )
                                    event.goto(4);
                                ('step 2');
                                event.card = result.links[0];
                                player
                                    .chooseTarget(`是否将${get.translation(event.card)}交给另一名角色`, function (card, player, target) {
                                        return target != player && target != event.target;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    })
                                    .set('sourcex', target);
                                ('step 3');
                                if (result.targets?.length) {
                                    result.targets[0].gain(card, player, 'giveAuto');
                                    //game.log('player.storage.yinghe='+player.storage.yinghe);
                                }
                                ('step 4');
                                player.turnOver();
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        yinghe: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'turnOverBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.yinghe == false) {
                                    player.storage.yinghe = true;
                                    event.finish();
                                }
                                trigger.cancel();
                                ('step 1');
                                player.reinit(player.name, '不倒貉貉', false);
                                player.storage.yinghe = true;
                                ('step 2');
                                var list = ['sha', 'shan', 'guohe', 'shunshou', 'juedou', 'lebu', 'bingliang', 'nanman', 'wanjian', 'jiedao', 'wuxie'];
                                if (!player.isDamaged()) list.push('tao');
                                var hs = player.getCards('hs');
                                var num = 0;
                                for (var i of hs) {
                                    if (!list.includes(i.name)) {
                                        num++;
                                        break;
                                    }
                                }
                                if (hs.length && num) {
                                    player.chooseToUse({
                                        logSkill: 'wuhu_phase',
                                        preTarget: player,
                                        prompt: '是否使用一张牌(仅指定自己为目标)',
                                        filterCard(card, player) {
                                            if (list.includes(card.name)) return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        filterTarget(card, player, target) {
                                            return target == _status.event.preTarget && lib.filter.targetEnabled.apply(this, arguments);
                                        },
                                        addCount: false,
                                    });
                                }
                            },
                            group: 'yinghe_phase',
                        },
                        yinghe_phase: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseBool('【影貉】是否弃置所有手牌,将武将牌翻面为〖不倒貉貉〗').ai = function () {
                                    return player.countCards('h') < player.hp;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var hs = player.getCards('h');
                                    player.turnOver();
                                    player.discard(hs);
                                }
                            },
                        },
                        wuhu: {
                            group: 'wuhu2',
                            audio: 'ext:原神杀/audio:3',
                            trigger: { target: 'useCardToTargeted' },
                            filter(event, player) {
                                return get.type(event.card) == 'trick' && event.targets && event.targets.length > 1;
                            },
                            forced: true,
                            content() {
                                trigger.parent.excluded.add(player);
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.type(card) != 'trick') return;
                                        if (card.name == 'tiesuo') return [0, 0];
                                        if (card.name == 'yihuajiemu') return [0, 1];
                                        if (get.tag(card, 'multineg')) return [0, 2];
                                    },
                                },
                            },
                        },
                        wuhu2: {
                            trigger: {
                                player: ['turnOverBegin', 'phaseBegin', 'damageEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.name == 'turnOver') {
                                    if (player.storage.yinghe == true) {
                                        player.storage.yinghe = false;
                                        event.finish();
                                    }
                                    trigger.cancel();
                                }
                                ('step 1');
                                player.reinit(player.name, '早柚', false);
                                if (trigger.name != 'turnOver') player.storage.yinghe = true;
                                var num = player.countCards('h') - player.hp;
                                if (num < 0) {
                                    player.draw(-num);
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.isDamaged();
                                        })
                                    )
                                        event.num = 1;
                                } else if (num > 0) {
                                    player.chooseToDiscard(num, true, 'h');
                                    event.num = 2;
                                } else if (
                                    !game.hasPlayer(function (current) {
                                        return current.isDamaged();
                                    })
                                ) {
                                    event.num = 2;
                                } else {
                                    player
                                        .chooseControl(['令一名角色回复体力', '视为使用一张杀'])
                                        .set('prompt', '【呜呼】请选择一项')
                                        .set('ai', function () {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return get.attitude(player, current) > 0 && current.isDamaged();
                                                })
                                            )
                                                return '令一名角色回复体力';
                                            else if (
                                                game.hasPlayer(function (current) {
                                                    return get.attitude(player, current) < 0 && player.inRange(current);
                                                })
                                            )
                                                return '视为使用一张杀';
                                        });
                                }
                                ('step 2');
                                if (result.control == '令一名角色回复体力' || event.num == 1) {
                                    player
                                        .chooseTarget('选择一名角色,令其回复一点体力', function (card, player, target) {
                                            return target.isDamaged();
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(_status.event.player, target);
                                        });
                                } else if (result.control == '视为使用一张杀' || event.num == 2) {
                                    player.chooseUseTarget('选择一名角色,视为对其使用一张【杀】', { name: 'sha' }, false);
                                    event.finish();
                                } else event.finish();
                                ('step 3');
                                if (result.targets?.length) {
                                    result.targets[0].recover();
                                }
                            },
                        },
                        wuhu_phase: { audio: 'ext:原神杀/audio:4' },
                        wuhu_damage: { audio: 'ext:原神杀/audio:3' },
                        jx_skill: {
                            equipSkill: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                if (event.card && event.card.name == 'sha') return false;
                                return true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0 && player.countCards('h') < 3;
                            },
                            //direct:true,
                            audio: 'qilin_skill',
                            prompt(event, player) {
                                return `【无矢之歌】是否令${get.translation(event.player)}受到的伤害+1,之后将弃置所有手牌并强制结束当前回合`;
                            },
                            content() {
                                trigger.num++;
                                player.addTempSkill('jx_done');
                            },
                        },
                        jx_done: {
                            equipSkill: true,
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.discard(player.getCards('h'));
                                ('step 1');
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name == 'phase') {
                                    game.resetSkills();
                                    _status.event = evt;
                                    _status.event.finish();
                                    _status.event.untrigger(true);
                                }
                            },
                        },
                        pyjl_skill: {
                            equipSkill: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            forced: true,
                            audio: 'qinggang_skill',
                            content() {
                                'step 0';
                                var num = [0, 1].randomGet();
                                if (Math.random() * 10 <= 2.5 * player.hp) event.goto(1);
                                else event.finish();
                                ('step 1');
                                trigger.num++;
                            },
                        },
                        zhongmofan: {
                            subSkill: {
                                1: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            return false;
                                        },
                                    },
                                },
                                2: {
                                    charlotte: true,
                                    intro: {
                                        content: '手牌上限+#',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.countMark('zhongmofan_2');
                                        },
                                    },
                                },
                            },
                            nobracket: true,
                            audio: 'wuhu',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            logTarget() {
                                return _status.currentPhase;
                            },
                            filter(event, player) {
                                var target = _status.currentPhase;
                                return target && target.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, _status.currentPhase) < 0;
                            },
                            content() {
                                'step 0';
                                if (_status.currentPhase == player) {
                                    _status.currentPhase.addSkill('zhongmofan_2');
                                    _status.currentPhase.addMark('zhongmofan_2', 3, false);
                                    event.finish();
                                } else {
                                    _status.currentPhase.chooseToDiscard(2).set('ai', function (card) {
                                        return get.unuseful(card) + 2.5;
                                    });
                                }
                                ('step 1');
                                if (result.bool == false) {
                                    _status.currentPhase.addTempSkill('zhongmofan_1');
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        fengyinjijin: {
                            nobracket: true,
                            audio: 'fengji',
                            group: ['fengyinjijin_jieshu', 'fengyinjijin_use', 'fengyinjijin_recover'],
                            subSkill: {
                                recover2: {},
                                recover: {
                                    trigger: {
                                        player: 'recoverEnd',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return _status.currentPhase == player;
                                    },
                                    content() {
                                        player.addTempSkill('fengyinjijin_recover2');
                                    },
                                    popup: false,
                                },
                                jieshu: {
                                    audio: 'fengji',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    prompt: '是否发动【风隐急进】翻面并移动场上一张装备牌？',
                                    filter(event, player) {
                                        return player.hasSkill('fengyinjijin_recover2') && player.canMoveCard(null, true);
                                    },
                                    check(event, player) {
                                        return player.canMoveCard(true, true);
                                    },
                                    content() {
                                        'step 0';
                                        player.turnOver();
                                        ('step 1');
                                        player.moveCard().nojudge = true;
                                    },
                                },
                                use: {
                                    audio: 'fengji',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    prompt: '是否发动【风隐急进】跳过出牌阶段并回复一点体力？',
                                    filter(event, player) {
                                        return player.countCards('h') > player.hp;
                                    },
                                    check(event, player) {
                                        if (!player.needsToDiscard()) return true;
                                    },
                                    content() {
                                        player.recover();
                                        player.skip('phaseUse');
                                    },
                                },
                            },
                        },
                        yingheliaoluan: {
                            group: 'yingheliaoluan_recover',
                            subSkill: {
                                recover: {
                                    audio: 'wuhu_phase',
                                    trigger: {
                                        global: ['damageAfter', 'loseHpAfter'],
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    filter(event, player) {
                                        return player.countMark('yingheliaoluan') > 0;
                                    },
                                    content() {
                                        player.removeMark('yingheliaoluan', 1, false);
                                        trigger.player.recover();
                                        if (player.isTurnedOver()) player.turnOver();
                                    },
                                },
                            },
                            marktext: '貉',
                            intro: {
                                name: '影貉缭乱',
                                name2: '貉',
                                content: '当前有#个<貉>',
                            },
                            nobracket: true,
                            forced: true,
                            silent: true,
                            trigger: {
                                player: 'turnOverEnd',
                            },
                            content() {
                                player.addMark('yingheliaoluan', 1, false);
                            },
                        },
                        zhuyuanbaiyan: {
                            marktext: '愿',
                            intro: {
                                content(storage, player, skill) {
                                    var str = '<br><li>当前拥有' + player.countMark('zhuyuanbaiyan') + '点愿力';
                                    if (player.countMark('zhuyuanbaiyan_clean') > 0) {
                                        str += '<br><li>还有' + (3 - player.countMark('zhuyuanbaiyan_clean')) + '回合清除愿力';
                                    }
                                    return str;
                                },
                            },
                            audio: 'dc_zhenmeng_draw',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            nobracket: true,
                            //当一名其他角色使用一张伤害类的牌结算后,你可以增加此牌的点数的<愿力>若其未因此技能摸牌你令其摸一张牌,你最多可以拥有60点<愿力>.每当你拥有60点<愿力>后你移去所有愿力,若你已发动过<梦想真说>你重置之
                            check(event, player) {
                                var target = event.player;
                                if (get.attitude(player, target) > 0) {
                                    return true;
                                }
                                if (event.card.number >= 10) return true;
                                return false;
                            },
                            filter(event, player) {
                                return get.tag(event.card, 'damage') && event.player != player;
                            },
                            content() {
                                'step 0';
                                if (
                                    trigger.player.getHistory('gain', function (evt) {
                                        return evt.getParent(2).name == 'zhuyuanbaiyan';
                                    }).length < 1
                                )
                                    trigger.player.draw();
                                ('step 1');
                                var num = trigger.card.number; //QQQ
                                if (num == undefined) event.finish();
                                if (player.countMark('zhuyuanbaiyan') + num > 60) num = 60 - player.countMark('zhuyuanbaiyan');
                                if (player.countMark('zhuyuanbaiyan') < 60) {
                                    player.addMark('zhuyuanbaiyan', num, false);
                                }
                                if (player.countMark('zhuyuanbaiyan') == 60 && player.awakenedSkills.includes('mengxiangzhenshuo') && player.storage.mengxiangzhenshuo) {
                                    player.removeMark('zhuyuanbaiyan', player.countMark('zhuyuanbaiyan'));
                                    player.restoreSkill('mengxiangzhenshuo');
                                }
                                ('step 2');
                                if (player.hasSkill('mengxiangyixin')) player.draw();
                                else event.finish();
                                ('step 3');
                                player.chooseToUse();
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        yanshouling: {
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'damage',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.yanshouling_damage && player.storage.yanshouling_damage.includes(event.source);
                                    },
                                    content() {
                                        player.unmarkAuto('yanshouling_damage', [trigger.source]);
                                        if (!player.storage.yanshouling_damage || !player.storage.yanshouling_damage.length) {
                                            player.removeSkill('yanshouling_damage');
                                            trigger.source.removeSkill('yanshouling_fengyin');
                                        }
                                    },
                                },
                                damage: {
                                    charlotte: true,
                                    group: 'yanshouling_clear',
                                    intro: {
                                        content: '$对你造成伤害前,$的所有技能失效',
                                    },
                                },
                                fengyin: {
                                    firstDo: true,
                                    trigger: {
                                        source: ['sourceDamage'],
                                    },
                                    _priority: 99,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.player == player.storage.yanshouling_fengyin;
                                    },
                                    content() {
                                        player.removeSkill('yanshouling_fengyin');
                                    },
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            var str = '<li>你的其他技能全部失效.';
                                            let list = Object.keys(player.disabledSkills);
                                            if (list.length) {
                                                str += '<br><li>失效技能:';
                                                for (var i = 0; i < list.length; i++) {
                                                    if (lib.translate[list[i] + '_info']) {
                                                        str += get.translation(list[i]) + '、';
                                                    }
                                                }
                                                return str.slice(0, str.length - 1);
                                            } else return str;
                                        },
                                    },
                                    init(player, skill) {
                                        var skills = player.getSkills(true, false);
                                        for (var i = 0; i < skills.length; i++) {
                                            var info = get.info(skills[i]);
                                            if (skills[i] == 'yanshouling_fengyin' || info.charlotte) {
                                                skills.splice(i--, 1);
                                            }
                                        }
                                        player.disableSkill(skill, skills);
                                    },
                                    onremove(player, skill) {
                                        player.enableSkill(skill);
                                    },
                                },
                            },
                            audio: 'dc_kaiyan',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            nobracket: true,
                            hiddenSkill: true,
                            forced: true,
                            content() {
                                var target1 = game.filterPlayer();
                                target1.remove(player);
                                var target;
                                if (_status.currentPhase == player) target = target1.randomGet();
                                else target = _status.currentPhase;
                                target.addSkill('yanshouling_fengyin');
                                player.addSkill('yanshouling_damage');
                                player.markAuto('yanshouling_damage', [target]);
                            },
                        },
                        mengxiangzhenshuo: {
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        'step 1';
                                        trigger.num++;
                                        ('step 2');
                                        player.removeSkill('mengxiangzhenshuo_damage');
                                    },
                                    popup: false,
                                },
                                draw: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        'step 1';
                                        player.draw(2);
                                        ('step 2');
                                        player.removeSkill('mengxiangzhenshuo_draw');
                                    },
                                    popup: false,
                                },
                            },
                            audio: 'dc_zhenmeng',
                            limited: true,
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.mengxiangzhenshuo;
                            },
                            filterTarget: true,
                            selectTarget: [1, 3],
                            content() {
                                'step 0';
                                player.disableEquip('equip1');
                                player.awakenSkill('mengxiangzhenshuo');
                                player.storage.mengxiangzhenshuo = true;
                                player.line(targets, 'green');
                                if (player.countMark('zhuyuanbaiyan') < 10) {
                                    target.draw();
                                }
                                if (player.countMark('zhuyuanbaiyan') >= 10) {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'sha' && card.nature == 'thunder';
                                    });
                                    if (card) target.gain(card, 'gain2');
                                    event.one = true;
                                }
                                if (player.countMark('zhuyuanbaiyan') >= 20) {
                                    var cards = [];
                                    while (cards.length < 2) {
                                        var card = get.cardPile2(function (card) {
                                            return !cards.includes(card) && get.type(card) == 'basic';
                                        });
                                        if (card) {
                                            cards.push(card);
                                        } else break;
                                    }
                                    if (cards.length) target.gain(cards, 'gain2');
                                    event.two = true;
                                }
                                if (player.countMark('zhuyuanbaiyan') >= 30) {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card) == 'equip' && get.subtype(card) != 'equip1';
                                    });
                                    if (card) target.gain(card, 'gain2');
                                    event.three = true;
                                }
                                if (player.countMark('zhuyuanbaiyan') >= 40) {
                                    var cards = [];
                                    while (cards.length < 2) {
                                        var card = get.cardPile2(function (card) {
                                            return !cards.includes(card) && get.type(card) == 'trick';
                                        });
                                        if (card) {
                                            cards.push(card);
                                        } else break;
                                    }
                                    if (cards.length) target.gain(cards, 'gain2');
                                    event.four = true;
                                }
                                if (player.countMark('zhuyuanbaiyan') >= 50) {
                                    target.addSkill('mengxiangzhenshuo_damage');
                                    event.five = true;
                                }
                                if (player.countMark('zhuyuanbaiyan') >= 60) {
                                    target.addSkill('mengxiangzhenshuo_draw');
                                    event.six = true;
                                }
                                ('step 1');
                                if (!player.hasSkill('mengxiangyixin')) player.addSkill('mengxiangyixin');
                                ('step 2');
                                if (player.countMark('zhuyuanbaiyan') == 60 && player.awakenedSkills.includes('mengxiangzhenshuo') && player.storage.mengxiangzhenshuo) {
                                    player.removeMark('zhuyuanbaiyan', player.countMark('zhuyuanbaiyan'));
                                    player.restoreSkill('mengxiangzhenshuo');
                                }
                            },
                            ai: {
                                order: 0.1,
                                result: {
                                    player: 0,
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
                        mengxiangyixin: {
                            enable: 'phaseUse',
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he', { subtype: 'equip1' }) > 0;
                            },
                            filterCard(card) {
                                return get.subtype(card) == 'equip1';
                            },
                            check(card) {
                                if (_status.event.player.isDisabled(get.subtype(card))) return 5;
                                return 3 - get.value(card);
                            },
                            content() {
                                player.draw();
                            },
                            discard: false,
                            visible: true,
                            loseTo: 'discardPile',
                            prompt: '将一张武器牌置入弃牌堆并摸一张牌',
                            delay: 0.5,
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                                game.log(player, '将', cards, '置入了弃牌堆');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            nobracket: true,
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - 2;
                                },
                            },
                        },
                        fuxing: {
                            trigger: {
                                global: 'judgeBefore',
                            },
                            forced: true,
                            _priority: 1,
                            content() {
                                'step 0';
                                var num = player.hp > trigger.player.hp ? player.hp - trigger.player.hp : trigger.player.hp - player.hp;
                                event.cards = get.cards(Math.max(2, num + 2));
                                player.chooseCardButton(true, event.cards, `祓行:选择一张牌作为${get.translation(trigger.player)}的${trigger.judgestr}判定结果`).ai = function (button) {
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
                                var card = result.links[0];
                                event.cards.remove(card);
                                var judgestr = get.translation(trigger.player) + `的${trigger.judgestr}判定`;
                                event.videoId = lib.status.videoId++;
                                event.dialog = ui.create.dialog(judgestr);
                                event.dialog.classList.add('center');
                                event.dialog.videoId = event.videoId;
                                game.addVideo('judge1', player, [get.cardInfo(card), judgestr, event.videoId]);
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
                                        number: card.number,
                                        suit: card.suit,
                                        color: get.color(card),
                                    };
                                    if (trigger.result.judge > 0) {
                                        trigger.result.bool = true;
                                        trigger.player.popup('洗具');
                                    }
                                    if (trigger.result.judge < 0) {
                                        trigger.result.bool = false;
                                        trigger.player.popup('杯具');
                                    }
                                    game.log(trigger.player, '的判定结果为', card);
                                    trigger.direct = true;
                                    trigger.position.appendChild(card);
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
                                if (event.cards.length) player.gain(event.cards, 'gain2');
                            },
                        },
                        sakura_zhuiyi: {
                            audio: 'ext:原神杀/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            position: 'he',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                if (typeof event != 'string') event = event.parent.name;
                                var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            selectCard: [1, Infinity],
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    get.position(card) == 'h' &&
                                    !player.countCards('h', 'du') &&
                                    (player.hp > 2 ||
                                        !player.countCards('h', function (card) {
                                            return get.value(card) >= 8;
                                        }))
                                ) {
                                    return 1;
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.discard(cards);
                                event.num = 1;
                                var hs = player.getCards('h');
                                if (!hs.length) event.num = 0;
                                for (var i = 0; i < hs.length; i++) {
                                    if (!cards.includes(hs[i])) {
                                        event.num = 0;
                                        break;
                                    }
                                }
                                player.draw(cards.length);
                                ('step 1');
                                var list = [];
                                for (var i of lib.inpile) {
                                    var type = get.type(i);
                                    if (type == 'basic' || type == 'trick') list.push([type, '', i]);
                                    if (i == 'sha') {
                                        list.push([type, '', i, 'fire']);
                                        list.push([type, '', i, 'thunder']);
                                        list.push([type, '', i, 'ice']);
                                    }
                                }
                                player
                                    .chooseButton(['是否视为使用一张基本牌或普通锦囊牌？', [list, 'vcard']])
                                    .set('filterButton', function (button) {
                                        return player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
                                    })
                                    .set('ai', function (button) {
                                        return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                    });
                                ('step 2');
                                if (result.links?.length) {
                                    player.chooseUseTarget(true, { name: result.links[0][2], nature: result.links[0][3] });
                                }
                                ('step 3');
                                if (event.num > 0) player.recover();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        yanxiaotinghuowu: {
                            nobracket: true,
                            group: ['yanxiaotinghuowu_sha', 'yanxiaotinghuowu_stat'],
                            subSkill: {
                                stat: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card.nature == 'fire';
                                    },
                                    //你使用点数为你攻击范围的倍数的火[杀]不计入次数,若之点数为奇/偶数,则可以多选择一名目标/摸一张牌
                                    content() {
                                        'step 0';
                                        if (trigger.card.number % player.getAttackRange() == 0) {
                                            if (trigger.addCount !== false) {
                                                trigger.addCount = false;
                                                if (player.stat[player.stat.length - 1].card.sha > 0) {
                                                    player.stat[player.stat.length - 1].card.sha--;
                                                }
                                            }
                                        }
                                        ('step 1');
                                        if (trigger.card.number % 2 == 0) {
                                            player.draw();
                                            event.finish();
                                        } //QQQ
                                        else {
                                            player.chooseTarget('是否发动【焰硝庭火舞】,令一名其他角色也成为此【杀】的目标？', 1, function (card, player, target) {
                                                return target != player && !trigger.targets.includes(target) && player.canUse({ name: 'sha' }, target);
                                            }).ai = function (target) {
                                                return get.effect(target, { name: 'sha' }, _status.event.player);
                                            };
                                        }
                                        ('step 2');
                                        if (result.targets?.length) {
                                            var targets = result.targets;
                                            player.line(targets, trigger.card.nature);
                                            trigger.targets.addArray(targets);
                                        }
                                    },
                                },
                                sha: {
                                    audio: 'ext:原神杀/audio:2',
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filter(event, player) {
                                        if (event.filterCard({ name: 'sha', nature: 'fire' }, player, event)) {
                                            return player.storage.yanxiaotinghuowu.length;
                                        } //QQQfilter没写好导致无限点但是又出不了,卡死
                                    },
                                    //你可以将< 庭火>当火[杀]使用
                                    async content(event, trigger, player) {
                                        const result = await player
                                            .chooseButton(['将一张<庭火>当火[杀]使用', player.storage.yanxiaotinghuowu])
                                            .set('ai', (button) => 2)
                                            .forResult();
                                        if (result.links?.length) {
                                            player.storage.yanxiaotinghuowu.remove(result.links[0]);
                                            await player.chooseUseTarget({ name: 'sha', nature: 'fire' }, result.links, true, false);
                                        }
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            audio: 'ext:原神杀/audio:2',
                            filter(event, player) {
                                return player.countCards('h') > 0 && (_status.connectMode || player.countCards('h', { suit: 'diamond' }) > 0) && player.storage.yanxiaotinghuowu.length < 3;
                            },
                            init(player) {
                                if (!player.storage.yanxiaotinghuowu) player.storage.yanxiaotinghuowu = [];
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                            },
                            content() {
                                'step 0';
                                player.chooseCard([1, Math.max(1, player.countCards('h', { suit: 'diamond' }))], get.prompt('yanxiaotinghuowu'), { suit: 'diamond' }).set('ai', function () {
                                    return 1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.yanxiaotinghuowu = player.storage.yanxiaotinghuowu.concat(result.cards);
                                    player.markSkill('yanxiaotinghuowu');
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.$give(result.cards, player, false);
                                }
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        liujinyunjiancao: {
                            group: ['liujinyunjiancao_damage', 'liujinyunjiancao_clean', 'liujinyunjiancao_die'],
                            subSkill: {
                                die: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.player.hasMark('liujinyunjiancao');
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.removeMark('liujinyunjiancao');
                                        ('step 1');
                                        var target = game
                                            .filterPlayer(function (current) {
                                                return get.distance(trigger.player, current) <= 1 && current != player;
                                            })
                                            .randomGet();
                                        target.addMark('liujinyunjiancao', 1);
                                    },
                                    popup: false,
                                },
                                clean: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        game.countPlayer(function (current) {
                                            var num = current.countMark('liujinyunjiancao');
                                            if (num > 0) current.removeMark('liujinyunjiancao');
                                        });
                                    },
                                    popup: false,
                                },
                                damage: {
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.source && !event.source.hasSkill('liujinyunjiancao') && event.player.hasMark('liujinyunjiancao');
                                    },
                                    content() {
                                        trigger.player.damage('fire');
                                    },
                                    popup: false,
                                },
                            },
                            nobracket: true,
                            intro: {
                                content: 'mark',
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            logTarget(trigger, player) {
                                return trigger.player;
                            },
                            filter(event, player) {
                                var target = lib.skill.liujinyunjiancao.logTarget(event, player);
                                return target && target != player && target.isAlive() && !target.hasMark('liujinyunjiancao') && event.nature == 'fire';
                            },
                            check(event, player) {
                                var target = lib.skill.liujinyunjiancao.logTarget(event, player);
                                if (get.attitude(player, target) > 0) return false;
                                var target0 = game.findPlayer(function (current) {
                                    return current.hasMark('liujinyunjiancao');
                                });
                                if (!target0) return true;
                                return true;
                            },
                            prompt2(event, player) {
                                var target = lib.skill.liujinyunjiancao.logTarget(event, player);
                                var str = `令${get.translation(target)}获得<琉金火光>`;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.hasMark('liujinyunjiancao');
                                    })
                                )
                                    str += ',并移去场上已有的<琉金火光>';
                                return str;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    var num = current.countMark('liujinyunjiancao');
                                    if (num > 0) current.removeMark('liujinyunjiancao');
                                });
                                lib.skill.liujinyunjiancao.logTarget(trigger, player).addMark('liujinyunjiancao', 1);
                            },
                        },
                        yanxin: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (!['sha', 'shan', 'tao', 'jiu'].includes(name)) return false;
                                return player.hasCard(function (card) {
                                    return card.number / 2 != 0;
                                }, 'hs');
                            },
                            filter(event, player) {
                                if (player.countCards('hes') < 1) return false;
                                if ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'shan' }, player, event) || event.filterCard({ name: 'jiu' }, player, event) || event.filterCard({ name: 'tao' }, player, event)) {
                                    return player.hasCard(function (card) {
                                        return card.number / 2 != 0;
                                    }, 'hs');
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        list.push(['基本', '', 'sha', 'fire']);
                                        list.push(['基本', '', 'sha', 'thunder']);
                                        list.push(['基本', '', 'sha', 'ice']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    return ui.create.dialog('焰心', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (
                                        _status.event.parent.type != 'phase' ||
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        switch (button.link[2]) {
                                            case 'tao':
                                            case 'shan':
                                                return 5;
                                            case 'jiu': {
                                                if (player.countCards('hs') > 2) return 3;
                                            }
                                            case 'sha':
                                                if (button.link[3] == 'fire') return 2.95;
                                                else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                                                else return 2.9;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            var num = 0;
                                            if (Array.isArray(ui.selected.cards))
                                                for (var i of ui.selected.cards) {
                                                    num += i.number;
                                                }
                                            return (card.number + num) % 2 != 0;
                                        },
                                        complexCard: true,
                                        selectCard: [1, Infinity],
                                        check(card, player, target) {
                                            if (!ui.selected.cards.length && card.number != 0) return 6;
                                            else return 6 - get.value(card);
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        position: 'hes',
                                        popname: true,
                                    };
                                },
                                prompt(links, player) {
                                    return '将任意张点数之和为奇数的牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用或打出';
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0 && player.storage.yizan && player.countCards('hs') > 2) {
                                        return 3.3;
                                    }
                                    return 3.1;
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'fireAttack') return true;
                                    if (
                                        !player.hasCard(function (card) {
                                            return card.number / 2 != 0;
                                        }, 'hes')
                                    ) {
                                        return false;
                                    }
                                },
                                result: {
                                    player: 1,
                                },
                                respondSha: true,
                                respondShan: true,
                                fireAttack: true,
                            },
                        },
                        xg_yanhuo: {
                            subSkill: {
                                draw: {},
                            },
                            trigger: {
                                player: 'useCardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.length > 1;
                            },
                            content() {
                                if (!player.hasSkill('xg_yanhuo_draw')) player.addTempSkill('xg_yanhuo_draw');
                                player.addMark('xg_yanhuo_draw', 1, false);
                                var num = player.countMark('xg_yanhuo_draw');
                                player.draw(num);
                            },
                        },
                        shuanghua: {
                            audio: 'ext:原神杀/audio:2',
                            nobracket: true,
                            intro: {
                                content: '已累计失去#张基本牌',
                            },
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.some((q) => get.type(q) == 'basic');
                            },
                            //当你累计失去3张基本牌后且你空置的装备栏数量大于2,你令一名其他角色选择是否弃置一张装备牌,若该角色未因此弃置牌你随机获得牌堆中的一张装备牌和锦囊牌
                            content() {
                                'step 0';
                                const num = trigger.cards.filter((q) => get.type(q) == 'basic').length;
                                player.addMark('shuanghua', num);
                                ('step 1');
                                if (player.countMark('shuanghua') >= 3 && player.countCards('e') <= 3) {
                                    player
                                        .chooseTarget(get.prompt('shuanghua'), '选择一名其他角色,令其弃置一张装备牌', function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(player, target) <= 0) {
                                                return 1;
                                            }
                                            return 0.5;
                                        })
                                        .set('targets', trigger.targets);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.removeMark('shuanghua', player.countMark('shuanghua'));
                                    var targets = result.targets.sortBySeat();
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].chooseToDiscard('he', { type: 'equip' });
                                    }
                                } else {
                                    player.removeMark('shuanghua', player.countMark('shuanghua'));
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool == false) {
                                    var card1 = get.cardPile2(function (card) {
                                        return get.type(card, 'trick') == 'equip';
                                    });
                                    if (card1) player.gain(card1, 'gain2', 'log');
                                    var card2 = get.cardPile2(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    });
                                    if (card2) player.gain(card2, 'gain2', 'log');
                                }
                            },
                        },
                        xiabu: {
                            subSkill: {
                                ice: {
                                    mod: {
                                        globalFrom(from, to, current) {
                                            return current - 1;
                                        },
                                        cardnature(card, player) {
                                            if (card.name == 'sha' && !card.nature) return 'ice';
                                        },
                                    },
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card.nature == 'ice';
                                    },
                                    content() {
                                        player.discardPlayerCard(trigger.player, true, 'he');
                                    },
                                },
                            },
                            nobracket: true,
                            audio: 'ext:原神杀/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h', { color: 'red' }) > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('h', { color: 'red' });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.showCards(result.cards[0]);
                                    player.draw();
                                    player.addTempSkill('xiabu_ice');
                                }
                            },
                        },
                        shuangmie: {
                            group: 'shuangmie_mark',
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        player.removeMark('shuangmie_mark', player.countMark('shuangmie_mark'));
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            nobracket: true,
                            filter(event, player) {
                                var hs = player.getCards('he');
                                if (player.countMark('shuangmie_mark') >= player.countCards('e')) return false;
                                for (var i of hs) {
                                    if (!lib.filter.cardDiscardable(i, player, 'splirang')) return false;
                                }
                                return true;
                            },
                            filterCard: true,
                            selectCard: 1,
                            position: 'he',
                            content() {
                                'step 0';
                                player.addMark('shuangmie_mark');
                                player.draw();
                                ('step 1');
                                if (get.type(cards[0]) == 'equip') player.chooseUseTarget({ name: 'sha', nature: 'ice' }, true, false, 'nodistance');
                            },
                            ai: {
                                order: 0.1,
                                result: {
                                    player(player) {
                                        var card = { name: 'sha', nature: 'ice' };
                                        var hs = player.getCards('e');
                                        if (
                                            hs.length <= player.hp &&
                                            game.hasPlayer(function (current) {
                                                return current != player && get.attitude(player, current) > 0 && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            return 1;
                                        if (get.value(hs, player) < 6) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        tutu: {
                            global: ['ttbj_dam', 'ttbj_un', 'ttbj_dis', 'ttbj_view'],
                            audio: 'ext:原神杀/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'h',
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            filter(event, player) {
                                return player.countCards('h', function (card) {
                                    return get.color(card) == 'red';
                                });
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectTarget: 1,
                            discard: false,
                            lose: false,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            delay: false,
                            prompt: '将一张红色手牌当作【兔兔伯爵】交给一名其他角色',
                            content() {
                                'step 0';
                                player.storage.ttbj = true;
                                ('step 1');
                                var ttbj = game.createCard('ttbj', cards[0].suit, cards[0].number);
                                cards[0].init(ttbj);
                                target.gain(cards, player, 'give');
                                target.storage.tutu = true;
                                target.storage.ttbj_view = player;
                                if (get.distance(player, target) <= 1) player.draw();
                                if (get.distance(target, player) > 1) {
                                    player.addTempSkill('tutu_nodo');
                                    target.addTempSkill('tutu_nodo2');
                                    target.addTempSkill('tutu_remove');
                                    target.markSkillCharacter('tutu', player, '兔兔伯爵', `本回合不能响应${get.translation(player)}的牌`);
                                }
                                ('step 2');
                                if (get.translation(player) != '安柏') player.storage.ttbj = false;
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target: -1,
                                },
                            },
                            group: 'tutu_1',
                            subSkill: {
                                nodo: {
                                    trigger: {
                                        player: 'useCardToPlayer',
                                    },
                                    filter(event, player) {
                                        return event.target.storage.tutu == true;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.directHit.add(trigger.target);
                                    },
                                },
                                nodo2: {
                                    trigger: { player: 'loseAfter' },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return !player.getCards('h', 'ttbj').length;
                                    },
                                    content() {
                                        player.removeSkill('tutu_nodo2');
                                        player.unmarkSkill('tutu');
                                        player.storage.tutu = false;
                                    },
                                    mod: {
                                        cardEnabled(card) {
                                            if (card.name == 'wuxie') return false;
                                        },
                                    },
                                },
                                remove: {
                                    trigger: { global: 'phaseUseAfter' },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.unmarkSkill('tutu');
                                        player.storage.tutu = false;
                                    },
                                },
                                1: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        if (event._notrigger.includes(event.player)) return false;
                                        return event.player.countCards('h', function (card) {
                                            return card.name == 'ttbj';
                                        });
                                    },
                                    check(event, player) {
                                        if (get.attitude(player, event.player) < 0) return true;
                                        return false;
                                    },
                                    prompt: '【兔兔伯爵】是否弃置对方一张牌',
                                    content() {
                                        player.discardPlayerCard(trigger.player, true, 'he');
                                    },
                                    ai: {
                                        viewHandcard: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (
                                                !arg.countCards('h', function (card) {
                                                    return card.name == 'ttbj';
                                                })
                                            )
                                                return false;
                                        },
                                    },
                                },
                            },
                        },
                        ttbj_view: {
                            cardSkill: true,
                            popup: false,
                            intro: {
                                mark(dialog, content, player) {
                                    if (game.me != player.storage.ttbj_view) return '兔兔伯爵摇摆中...';
                                    dialog.addAuto(player.getCards('h'));
                                },
                            },
                            trigger: {
                                player: ['gainAfter', 'loseAfter'],
                            },
                            forced: true,
                            content() {
                                if (player.getCards('h', 'ttbj').length) {
                                    player.markSkill('ttbj_view');
                                } else {
                                    player.unmarkSkill('ttbj_view');
                                }
                            },
                        },
                        ttbj_dam: {
                            audio: 'tutu',
                            cardSkill: true,
                            trigger: { player: 'loseEnd' },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                if (player.storage.ttbj == true) return false;
                                if (event.hs) {
                                    for (var i = 0; i < event.hs.length; i++) {
                                        if (event.hs[i].name == 'ttbj') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                var num = 0,
                                    list = [];
                                for (var i = 0; i < trigger.hs.length; i++) {
                                    if (trigger.hs[i].name == 'ttbj') {
                                        num++;
                                        list.push(trigger.hs[i]);
                                    }
                                }
                                game.log(list, '爆炸啦!');
                                game.cardsGotoSpecial(list);
                                player.damage(num, 'fire');
                            },
                        },
                        ttbj_un: {
                            cardSkill: true,
                            trigger: {
                                player: 'useCardToBefore',
                            },
                            forced: true,
                            _priority: 15,
                            filter(event, player) {
                                if (!event.target || event.target == player || player.storage.ttbj == true) return false;
                                return player.getCards('h', 'ttbj').length;
                            },
                            content() {
                                trigger.cancel();
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                                var hs = player.getCards('h', 'ttbj');
                                player.discard(hs);
                            },
                        },
                        ttbj_dis: {
                            cardSkill: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            _priority: 15,
                            filter(event, player) {
                                if (player.storage.ttbj == true) return false;
                                return player.getCards('h', 'ttbj').length;
                            },
                            content() {
                                var hs = player.getCards('h', 'ttbj');
                                player.discard(hs);
                            },
                        },
                        feiyi: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.storage.feiyi != true;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('【飞翼】选择一名角色获得【风之翼】,令其计算与其他角色的距离始终-1.', true).set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.feiyi = true;
                                    var target = result.targets[0];
                                    player.line(target, 'fire');
                                    target.addSkill('feiyi1');
                                    target.markSkillCharacter('feiyi', player, '风之翼', '计算与其他角色的距离-1');
                                }
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        feiyi1: {
                            mark: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        dangshu: {
                            audio: 'ext:原神杀/audio:2',
                            marktext: '丹',
                            intro: {
                                name: '丹火印',
                                content(storage, player, skill) {
                                    var num = player.countMark('dangshu');
                                    var txt = '当前层数:' + num;
                                    if (num >= 1) txt += `<br/r>①手牌上限+${num},计算与其他角色的距离-` + num;
                                    if (num >= 2) txt += '<br/r>②使用红色牌时摸一张牌';
                                    if (num >= 3) txt += '<br/r>③你的红色牌不能被响应';
                                    return txt;
                                },
                            },
                            trigger: {
                                player: 'useCard1',
                            },
                            filter(event, player) {
                                return player.isPhaseUsing() && get.color(event.card) == 'red' && player.countMark('dangshu') < 3;
                            },
                            forced: true,
                            popup: false,
                            firstDo: true,
                            content() {
                                player.addMark('dangshu', 1, false);
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                                    },
                                },
                            },
                            mod: {
                                globalFrom(from, to, current) {
                                    return current - from.countMark('dangshu');
                                },
                                maxHandcard(player, num) {
                                    return num + player.countMark('dangshu');
                                },
                            },
                            group: ['dangshu_2', 'dangshu_3', 'dangshu_remove'],
                            subSkill: {
                                2: {
                                    audio: 'dangshu',
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    filter(event, player) {
                                        return get.color(event.card) == 'red' && player.countMark('dangshu') > 1;
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'useCardToPlayer',
                                    },
                                    filter(event, player) {
                                        return get.color(event.card) == 'red' && player.countMark('dangshu') > 2;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 20,
                                    content() {
                                        trigger.nowuxie = true;
                                        trigger.directHit.addArray(game.players);
                                    },
                                },
                                remove: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.countMark('dangshu');
                                    },
                                    forced: true,
                                    content() {
                                        player.removeMark('dangshu', player.countMark('dangshu'));
                                    },
                                },
                            },
                        },
                        zhuozhuo: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: { source: 'damageBegin' },
                            filter(event, player) {
                                return player.countMark('dangshu');
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0 && player.countMark('dangshu') > 1;
                            },
                            prompt: '是否清空<丹火印>,根据数量为此伤害附加增益',
                            content() {
                                'step 0';
                                var num = player.countMark('dangshu');
                                player.storage.zhuozhuo = num;
                                player.removeMark('dangshu', num);
                                if (num >= 3) trigger.num++;
                                if (num >= 1) trigger.nature = 'fire';
                                if (num >= 2)
                                    trigger.player.chooseToDiscard('he').set('ai', function (card) {
                                        return 12 - get.value(card);
                                    });
                                ('step 1');
                                if (!result.bool && player.storage.zhuozhuo > 1) {
                                    trigger.player.damage('fire');
                                }
                            },
                        },
                        dc_jieqi: {
                            audio: 'ext:原神杀/audio:2',
                            enable: 'phaseUse',
                            //出牌阶段,你可以选择一项,移除该项:①获得三枚<丹火印>;②获得三张红色牌;③回复三点体力
                            filter(event, player) {
                                return player.storage.dc_jieqi[0];
                            },
                            init(player) {
                                player.storage.dc_jieqi = ['获得三枚<丹火印>', '获得三张红色牌', '回复三点体力'];
                            },
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseButton(['选择一项,移除该项', [player.storage.dc_jieqi, 'tdnodes']])
                                    .set('ai', (button) => {
                                        switch (button.link) {
                                            case '获得三枚<丹火印>': {
                                                return (
                                                    player.countCards('h', function (card) {
                                                        return get.color(card) == 'red';
                                                    }) < 3 &&
                                                    !player.countMark('dangshu') &&
                                                    player.countCards('h') > 2
                                                );
                                            }
                                            case '获得三张红色牌': {
                                                return (
                                                    player.countCards('h', function (card) {
                                                        return get.color(card) == 'red';
                                                    }) < 3 && !player.countMark('dangshu')
                                                );
                                            }
                                            case '回复三点体力': {
                                                return player.hp < 2;
                                            }
                                        }
                                    })
                                    .forResult();
                                if (result.links?.length) {
                                    switch (result.links[0]) {
                                        case '获得三枚<丹火印>':
                                            {
                                                player.storage.dc_jieqi.remove('获得三枚<丹火印>');
                                                var num = 3 - player.countMark('dangshu');
                                                player.addMark('dangshu', num, false);
                                            }
                                            break;
                                        case '获得三张红色牌':
                                            {
                                                player.storage.dc_jieqi.remove('获得三张红色牌');
                                                var cards = [];
                                                while (cards.length < 3) {
                                                    var card = get.cardPile2(function (card) {
                                                        return get.color(card) == 'red' && !cards.includes(card);
                                                    });
                                                    if (card) cards.push(card);
                                                }
                                                if (cards.length) player.gain(cards, 'gain2');
                                            }
                                            break;
                                        case '回复三点体力':
                                            {
                                                player.storage.dc_jieqi.remove('回复三点体力');
                                                player.recover(3);
                                            }
                                            break;
                                    }
                                }
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 1;
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        jichou: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            notemp: true,
                            init(player) {
                                if (!player.storage.jichou) player.storage.jichou = [];
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.draw();
                                ('step 2');
                                if (player.countCards('he')) {
                                    player.chooseCard('将一张牌置于武将牌上作为<仇>', 'he', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards?.length) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.jichou = player.storage.jichou.concat(result.cards);
                                    player.markSkill('jichou');
                                    game.log(player, '将', result.cards, '置于武将牌上作为<仇>');
                                }
                                ('step 4');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('jichou')).set('frequentSkill', 'jichou');
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            marktext: '仇',
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.jichou.length;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.storage.jichou.length;
                                },
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 1.2];
                                        }
                                    },
                                },
                            },
                            group: 'jichou_damage',
                            subSkill: {
                                damage: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: { source: 'damageEnd' },
                                    forced: true,
                                    popup: false,
                                    notemp: true,
                                    filter(event, player) {
                                        return player.storage.jichou && player.storage.jichou.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseButton(ui.create.dialog('【复仇】是否弃置一张<仇>', player.storage.jichou, 'hidden'));
                                        ('step 1');
                                        if (result.links?.length) {
                                            var card = result.links[0];
                                            game.cardsDiscard(card);
                                            player.$throw(card);
                                            player.storage.jichou.remove(card);
                                            game.log(card, '进入了弃牌堆');
                                            if (!player.storage.jichou.length) {
                                                player.unmarkSkill('jichou');
                                            } else {
                                                player.markSkill('jichou');
                                            }
                                        } else event.finish();
                                        ('step 2');
                                        var list = [`弃置${get.translation(trigger.player)}两张牌`, '令一名角色摸两张牌'];
                                        if (!trigger.player.countCards('he') || trigger.player.isDead()) event.goto(3);
                                        else
                                            player
                                                .chooseControl(list)
                                                .set('prompt', '【复仇】请选择一项')
                                                .set('ai', function () {
                                                    if (get.attitude(player, trigger.player) < 0 && trigger.player.countCards('e') > 1) return `弃置${get.translation(trigger.player)}两张牌`;
                                                    else return '令一名角色摸两张牌';
                                                });
                                        ('step 3');
                                        if (result.control == `弃置${get.translation(trigger.player)}两张牌`) {
                                            player.discardPlayerCard(trigger.player, 2, 'he', true);
                                            event.finish();
                                        } else {
                                            player.chooseTarget('【复仇】选择一名角色令其摸两张牌').set('ai', function (target) {
                                                return get.attitude(_status.event.player, target);
                                            });
                                        }
                                        ('step 4');
                                        if (result.targets?.length) {
                                            player.line(result.targets[0], 'ice');
                                            result.targets[0].draw(2);
                                        }
                                    },
                                },
                            },
                        },
                        dc_ninglang: {
                            audio: 'ext:原神杀/audio:2',
                            marktext: '凝',
                            intro: {
                                name: '凝浪之光剑',
                                content(storage, player, skill) {
                                    var num = player.countMark('dc_ninglang');
                                    var txt = '当前计数:' + num;
                                    if (num >= player.maxHp + game.countGroup()) txt += '<br/r>光降之剑将造成2点伤害';
                                    else if (num >= player.maxHp || num >= game.countGroup()) txt += '<br/r>光降之剑将造成1点伤害';
                                    else txt += '<br/r>暂未积蓄足够能量';
                                    return txt;
                                },
                            },
                            trigger: {
                                player: 'useCard2',
                                source: 'damageBegin4',
                            },
                            filter(event, player) {
                                return player.isPhaseUsing() && event.card;
                            },
                            forced: true,
                            popup: false,
                            firstDo: true,
                            content() {
                                player.addMark('dc_ninglang', 1, false);
                            },
                            group: 'dc_ninglang_damage',
                            subSkill: {
                                damage: {
                                    audio: 'dc_ninglang',
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    filter(event, player) {
                                        return player.countMark('dc_ninglang');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var num = player.countMark('dc_ninglang');
                                        if (num >= player.maxHp + game.countGroup()) event.num = 2;
                                        else if (num >= player.maxHp || num >= game.countGroup()) event.num = 1;
                                        else {
                                            player.removeMark('dc_ninglang', player.countMark('dc_ninglang'));
                                            event.finish();
                                        }
                                        ('step 1');
                                        player
                                            .chooseTarget(`【光降之剑】选择一名攻击范围内的角色,对其造成${event.num}点伤害`, function (card, player, target) {
                                                return target != player && player.inRange(target);
                                            })
                                            .set('ai', function (target) {
                                                return get.damageEffect(target, player, player);
                                            });
                                        ('step 2');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            target.damage(event.num);
                                        }
                                        player.removeMark('dc_ninglang', player.countMark('dc_ninglang'));
                                    },
                                },
                            },
                        },
                        dongdong: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(`【冻冻】选择一名角色令其获得${trigger.num}层"冻冻猫爪护盾".`, function (card, player, target) {
                                        return target.countMark('ddmzhd') < 5;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    if (target.countMark('ddmzhd') + trigger.num > 5) var num = target.countMark('ddmzhd') + trigger.num - 5;
                                    else var num = trigger.num;
                                    player.line(target, 'ice');
                                    if (!target.hasSkill('ddmzhd')) target.addSkill('ddmzhd');
                                    target.addMark('ddmzhd', num);
                                }
                            },
                        },
                        ddmzhd: {
                            audio: 'renwang_skill',
                            trigger: {
                                player: 'damageBegin2',
                            },
                            marktext: '盾',
                            intro: {
                                name: '冻冻猫爪护盾',
                                content(storage, player, skill) {
                                    var num = player.countMark('ddmzhd');
                                    var txt = `护盾值:${num}<br/r>手牌上限+${num}<br/r>计算与其他角色的距离-` + num;
                                    return txt;
                                },
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('ddmzhd') > 0;
                            },
                            content() {
                                var num = Math.min(player.countMark('ddmzhd'), trigger.num);
                                player.removeMark('ddmzhd', num);
                                trigger.num = trigger.num - num;
                                game.log(player, '受到的伤害-' + num);
                                //if(player.isLinked()) player.link();
                            },
                            mod: {
                                globalFrom(from, to, current) {
                                    return current - from.countMark('ddmzhd');
                                },
                                maxHandcard(player, num) {
                                    return num + player.countMark('ddmzhd');
                                },
                            },
                        },
                        tetiao: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['enterGame', 'gainAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent(2).name != 'tetiao';
                            },
                            content() {
                                var hs = player.getCards('h');
                                for (var i of hs) {
                                    if (i.name == 'tao' || i.name == 'jiu') {
                                        var card = game.createCard('mwtt', i.suit, i.number);
                                        i.init(card);
                                    }
                                }
                            },
                            group: 'tetiao_give',
                            subSkill: {
                                give: {
                                    audio: 'tetiao',
                                    enable: 'phaseUse',
                                    position: 'h',
                                    filterCard(card) {
                                        return card.name == 'mwtt';
                                    },
                                    filter(event, player) {
                                        return player.countCards('h', 'mwtt') > 0;
                                    },
                                    selectTarget: 1,
                                    discard: false,
                                    lose: false,
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    delay: false,
                                    prompt: '将一张【猫尾特调】交给一名其他角色',
                                    content() {
                                        'step 0';
                                        target.gain(cards, player, 'give');
                                        ('step 1');
                                        target
                                            .chooseCard(`是否交给${get.translation(player)}一些牌？`, [1, target.countCards('he')], 'he', function (card) {
                                                return card.name != 'mwtt';
                                            })
                                            .set('ai', function (card) {
                                                if (get.attitude(target, player) > 1) {
                                                    return 4 - get.value(card);
                                                }
                                            });
                                        ('step 2');
                                        if (result.cards?.length) {
                                            player.gain(result.cards, target, 'giveAuto');
                                        }
                                    },
                                    ai: {
                                        order: 9,
                                        result: {
                                            target(player, target) {
                                                if (player.countCards('h', 'mwtt') > 1 || player.hp == player.maxHp) return 1;
                                                return 0;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        mwtt_damage: {
                            mark: true,
                            marktext: '酒',
                            intro: {
                                name: '猫尾特调',
                                content: '获得技能<冻冻>,下次造成的伤害+1,效果持续到回合结束',
                            },
                            trigger: { source: 'damageBegin1' },
                            forced: true,
                            content() {
                                trigger.num++;
                                game.log(player, '造成的伤害+1');
                                player.removeSkill('mwtt_damage');
                            },
                        },
                        yizhi: {
                            group: 'yizhi_jiechu',
                            subSkill: {
                                fengyin: {
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
                                            let list = Object.keys(player.disabledSkills); //QQQ
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
                                jiechu: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    content() {
                                        'step 0';
                                        event.targets = game.filterPlayer(function (current) {
                                            return current.hasSkill('yizhi_fengyin');
                                        });
                                        event.targets.sort(lib.sort.seat);
                                        player.line(event.targets, 'green');
                                        ('step 1');
                                        if (event.targets.length) {
                                            event.targets.shift().removeSkill('yizhi_fengyin');
                                            event.redo();
                                        }
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.source && event.player && event.player.isAlive() && event.source.isAlive() && event.source != event.player;
                            },
                            forced: true,
                            logTarget(event, player) {
                                return event.source;
                            },
                            content() {
                                'step 0';
                                if (!trigger.source.hasSkill('yizhi_fengyin')) trigger.source.addSkill('yizhi_fengyin');
                                ('step 1');
                                game.asyncDraw([trigger.player, trigger.source]);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        banjie: {
                            group: 'banjie_update',
                            subSkill: {
                                update: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    content() {
                                        player.removeMark('banjie', player.countMark('banjie'));
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                global: 'drawAfter',
                            },
                            marktext: '解',
                            intro: {
                                name: '半解',
                                name2: '解',
                                content(storage, player, skill, dialog) {
                                    var str = player.countMark('banjie') < 1 ? '当前还未发动技能' : '技能还可使用' + get.cnNumber(player.hp - player.countMark('banjie')) + '次';
                                    if (player.countMark('banjie') > player.hp) str = '技能当前不可使用';
                                    return str;
                                },
                            },
                            //有角色于其出牌阶段摸牌后你可令其将Y张的手牌置于牌堆底(X为你的当前体力,Y为该角色当前手牌的一半向下取整且至少为1)
                            filter(event, player) {
                                return player.countMark('banjie') < player.hp && event.player != player && event.player != undefined && event.player.isPhaseUsing();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0; //QQQ
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.addMark('banjie', 1, false);
                                var cards = trigger.player.getCards('h'),
                                    num = Math.max(1, Math.floor(trigger.player.countCards('h') / 2));
                                var dialog = ['半解:将三张牌置于牌堆底(先选择的在上)', '<div class="text center">你的手牌</div>', cards];
                                trigger.player.chooseButton(dialog, num, true).set('ai', function (button) {
                                    var player = _status.event.player,
                                        allcards = trigger.player.getCards('h').concat(_status.event.parent.cards2);
                                    return -player.getUseValue(button.link, player);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.forceDie = true;
                                    var cards = result.links;
                                    event.cards = cards;
                                    var hs = trigger.player.getCards('h');
                                    var lose = [];
                                    for (var i of cards) {
                                        if (hs.includes(i)) lose.push(i);
                                    }
                                    if (lose.length) trigger.player.lose(lose, ui.cardPile);
                                } else event.finish();
                                ('step 2');
                                for (var i of cards) {
                                    if (!'hejsd'.includes(get.position(i, true))) {
                                        i.fix();
                                        ui.cardPile.appendChild(i);
                                    }
                                }
                                game.updateRoundNumber();
                            },
                            ai: {
                                maixie_defend: true,
                                expose: 0.4,
                            },
                        },
                        qizuo: {
                            subSkill: {
                                damage: {
                                    trigger: {
                                        global: ['damageSource', 'damageEnd'],
                                    },
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            var str = '<br><li>明君:';
                                            str += get.translation(player.storage.qizuo_damage);
                                            return str;
                                        },
                                    },
                                    filter(event, player, name) {
                                        var target = name == 'damageSource' ? event.source : event.player;
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return current != player && player.storage.qizuo_damage.includes(current);
                                            })
                                        )
                                            return false;
                                        return target == player || player.storage.qizuo_damage.includes(target);
                                    },
                                    content() {
                                        'step 0';
                                        player.addMark('qizuo', 1, false);
                                        player.draw();
                                        player.chooseCardTarget({
                                            position: 'he',
                                            filterCard: true,
                                            filterTarget(event, player, target) {
                                                return target != player && player.storage.qizuo_damage.includes(target);
                                            },
                                            selectCard: 1,
                                            forced: true,
                                            prompt: get.prompt('qizuo'),
                                            prompt2: player.storage.qizuo_damage.length <= 1 ? '将一张牌交给' + get.translation(player.storage.qizuo_damage[0]) : `将一张牌交给${get.translation(player.storage.qizuo_damage)}中的一名角色.`,
                                            ai1(card) {
                                                if (card.name == 'du') return 20;
                                                var val = get.value(card);
                                                var player = _status.event.player;
                                                if (get.position(card) == 'e') {
                                                    if (val <= 0) return 10;
                                                    return 10 / val;
                                                }
                                                return 6 - val;
                                            },
                                            ai2(target) {
                                                var player = _status.event.player;
                                                var att = get.attitude(player, target);
                                                if (ui.selected.cards[0].name == 'du') return -2 * att;
                                                if (att > 0) return 1.5 * att;
                                                var num = get.select(_status.event.selectCard)[1];
                                                if (att < 0 && num == 1) return -0.7 * att;
                                                return att;
                                            },
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            event.target = target;
                                            target.gain(result.cards, player, 'giveAuto');
                                        } else event.finish();
                                    },
                                },
                            },
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            marktext: '论',
                            intro: {
                                name: '论',
                                name2: '论',
                                content: '当前有#个<论>',
                            },
                            filter(event, player) {
                                return game.players.length > 1;
                            },
                            audio: 'ext:原神杀/audio:6',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择【奇佐】的目标', lib.translate.qizuo_info, true, function (card, player, target) {
                                        return target != player && (!player.storage.qizuo_damage || !player.storage.qizuo_damage.includes(target));
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return att + 1;
                                        if (att == 0) return Math.random();
                                        return att;
                                    }).animate = false;
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    if (!player.storage.qizuo_damage) player.storage.qizuo_damage = [];
                                    player.storage.qizuo_damage.push(target);
                                    player.addSkill('qizuo_damage');
                                }
                            },
                        },
                        shilun: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countMark('qizuo') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.cards = get.cards(Math.min(10, player.countMark('qizuo')));
                                player.showCards(event.cards);
                                player.addTempSkill('kongsheng_ai', 'shilunAfter');
                                player
                                    .chooseControl()
                                    .set('choiceList', [`使用${get.translation(event.cards)}中的至多三张锦囊牌牌`, `分配${get.translation(event.cards)}中的基本牌和装备牌`])
                                    .set('ai', function () {
                                        return Math.random();
                                    });
                                ('step 1');
                                if (result.index == 0) event.use = true;
                                else event.goto(5);
                                ('step 2');
                                event.count = 3;
                                event.list = [];
                                event.cards = event.cards.filter((i) => {
                                    if (get.type(i) == 'trick' && player.hasUseTarget(i)) {
                                        event.list.push(i);
                                        return false;
                                    }
                                    return true;
                                });
                                if (!event.list.length) event.finish();
                                ('step 3');
                                if (event.list.length == 1) {
                                    event._result = { bool: true, links: event.list.slice(0) };
                                } else
                                    player.chooseButton(true, ['选择要使用的锦囊牌', event.list]).set('ai', function (button) {
                                        return get.order(button.link);
                                    });
                                ('step 4');
                                if (result.links?.length) {
                                    player.chooseUseTarget(result.links[0], true);
                                    event.list.remove(result.links[0]);
                                    event.count--;
                                    if (event.list.length && event.count > 0) event.goto(3);
                                }
                                ('step 5');
                                if (event.use == true) event.finish();
                                event.be = [];
                                event.targets = [];
                                event.cards = event.cards.filter((i) => {
                                    if (get.type(i) == 'equip' || get.type(i) == 'basic') {
                                        event.be.push(i);
                                        return false;
                                    }
                                    return true;
                                });
                                ('step 6');
                                player.chooseCardButton(event.be, '【十论】:将其中的一张牌交给一名角色？').ai = function (card) {
                                    if (card.name == 'du') return 10;
                                    return get.value(card);
                                };
                                ('step 7');
                                if (result.links && result.bool) {
                                    event.togain = result.links[0];
                                    event.be.remove(event.togain);
                                    player
                                        .chooseTarget(get.prompt('shilun'), true, `请选择要获得${get.translation(event.togain)}的角色`, function (card, player, target) {
                                            return !_status.event.parent.targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            var card = _status.event.card;
                                            var val = get.value(card);
                                            if (target == _status.currentPhase && target.hasValueTarget(card, null, true)) att = att * 5;
                                            else if (target == player && !player.hasJudge('lebu') && get.type(card) == 'trick') att = att * 3;
                                            if (target.hasSkillTag('nogain')) att /= 10;
                                            return att * val;
                                        })
                                        .set('card', event.togain);
                                } else event.finish();
                                ('step 8');
                                var target = result.targets[0];
                                player.line(target, 'green');
                                target.gain(event.togain, 'gain2');
                                event.targets.push(target);
                                if (
                                    event.be.length &&
                                    game.hasPlayer(function (current) {
                                        return !event.targets.includes(current);
                                    })
                                )
                                    event.goto(6);
                            },
                        },
                        shuiyu: {
                            group: ['shuiyu_limited', 'shuiyu_use', 'shuiyu_gain'],
                            subSkill: {
                                gain: {
                                    trigger: {
                                        global: ['loseAfter', 'cardsDiscardAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            player != event.player &&
                                            event.cards &&
                                            event.cards.filter(function (card) {
                                                return get.position(card, true) == 'd' && get.type(card, false) == 'equip';
                                            }).length
                                        );
                                    },
                                    content() {
                                        'step 0';
                                        var cards = trigger.cards.filter(function (card) {
                                            return get.position(card, true) == 'd' && get.type(card, false) == 'equip';
                                        });
                                        player.chooseButton([get.prompt('shuiyu_gain'), cards], [1, cards.length]).set('ai', function () {
                                            return 1;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2', 'log');
                                        }
                                    },
                                },
                                use: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (get.type(event.card) != 'equip') return false;
                                        return event.player != player;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                limited: {
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    onremove(player, skill) {
                                        player.storage[skill] = [];
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.shuiyu_limited = [];
                                    },
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if ('tao' != name) return false; //QQQ
                                var cards = [];
                                var storage = player.storage.shuiyu_limited;
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.player == player) return;
                                    for (var i of evt.cards) {
                                        if (!storage.includes(i) && get.position(i, true) == 'd' && get.color(i) == 'red') cards.push(i);
                                    }
                                });
                                return cards.length;
                            },
                            filter(event, player) {
                                var cards = [];
                                var storage = player.storage.shuiyu_limited;
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.player == player) return;
                                    for (var i of evt.cards) {
                                        if (!storage.includes(i) && get.position(i, true) == 'd' && get.color(i) == 'red') cards.push(i);
                                    }
                                });
                                if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                    return cards.length;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var cards = [];
                                    game.getGlobalHistory('cardMove', function (evt) {
                                        if (evt.player == player) return;
                                        for (var i of evt.cards) {
                                            if (get.position(i, true) == 'd' && get.color(i) == 'red' && !player.storage.shuiyu_limited.includes(i)) cards.push(i);
                                        }
                                    });
                                    return ui.create.dialog('水愈', cards, 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'shuiyu',
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: { name: 'tao', cards: links },
                                        cards: links,
                                        onuse(result, player) {
                                            result.cards = lib.skill[result.skill].cards;
                                            var card = result.cards[0];
                                            player.storage.shuiyu_limited.add(card);
                                        },
                                    };
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        qingbi: {
                            group: 'qingbi_gain',
                            subSkill: {
                                gain: {
                                    trigger: {
                                        player: ['loseAfter'],
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        return evt && evt.es && evt.es.length == 1;
                                    },
                                    content() {
                                        var suits = [],
                                            cards = [];
                                        var evt = trigger.getl(player).es;
                                        for (var i of evt) {
                                            var suit = i.suit;
                                            var card = get.cardPile2(function (card) {
                                                return !cards.includes(card) && card.suit != suit;
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (cards.length) player.gain(cards, 'gain2');
                                    },
                                },
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            content() {
                                var card = player.getCards('e').randomGet();
                                player.discard(card);
                            },
                        },
                        fengyu: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    event.cards &&
                                    event.cards.filter(function (card) {
                                        return card.number >= player.countCards('h') && get.position(card, true) == 'd' && get.type(card, false) == 'equip';
                                    }).length
                                );
                            },
                            content() {
                                'step 0';
                                event.num = trigger.cards.filter(function (card) {
                                    return card.number >= player.countCards('h') && get.position(card, true) == 'd' && get.type(card, false) == 'equip';
                                }).length;
                                ('step 1');
                                player.chooseTarget(get.prompt2('fengyu')).set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (att > 0) {
                                        if (target.countCards('h') < target.hp) att += 2;
                                        return att - target.countCards('h') / 3;
                                    } else {
                                        return -1;
                                    }
                                });
                                ('step 2');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    event.target.draw();
                                    event.num--;
                                } else event.num--;
                                ('step 3');
                                if (event.num > 0) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        dc_fenglun: {
                            audio: 'ext:原神杀/audio:3',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard: { name: 'shan' },
                            viewAs: { name: 'sha' },
                            viewAsFilter(player) {
                                if (!player.countCards('hs', 'shan')) return false;
                            },
                            position: 'hs',
                            prompt: '将一张【闪】当【杀】使用或打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                    },
                                },
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hs', 'shan')) return false;
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 0.1;
                                },
                                useful: -1,
                                value: -1,
                            },
                            group: ['dc_fenglun_dis', 'dc_fenglun_dis1', 'dc_fenglun_dis2'],
                            subSkill: {
                                dis: {
                                    ai: {
                                        combo: 'dc_fenglun',
                                        mingzhi: false,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
                                                    if (get.attitude(target, player) <= 0) {
                                                        if (current > 0) return;
                                                        if (target.countCards('h') == 0) return 1.6;
                                                        if (target.countCards('h') == 1) return 1.2;
                                                        if (target.countCards('h') == 2) return [0.8, 0.2, 0, -0.2];
                                                        return [0.4, 0.7, 0, -0.7];
                                                    }
                                                }
                                            },
                                        },
                                    },
                                },
                                dis1: {
                                    audio: 'dc_fenglun',
                                    trigger: { player: 'useCard1' },
                                    filter(event, player) {
                                        if (event.skill == 'dc_fenglun' && event.card.name != 'sha') return false;
                                        if (event.skill != 'dc_fenglun' && event.card.name != 'shan') return false;
                                        var target = lib.skill.dc_fenglun_dis1.logTarget(event, player);
                                        return target && target.countCards('he') > 0;
                                    },
                                    logTarget(event, player) {
                                        if (event.card.name == 'sha') return event.targets[0];
                                        return event.respondTo[0];
                                    },
                                    prompt: '当你因发动〖风轮〗而使用或打出【杀】时,你可以弃置对方的一张牌.',
                                    content() {
                                        var target = lib.skill.dc_fenglun_dis1.logTarget(trigger, player);
                                        player.discardPlayerCard(target, 'he', true);
                                    },
                                },
                                dis2: {
                                    audio: 'dc_fenglun',
                                    trigger: { player: 'respond' },
                                    filter(event, player) {
                                        if (event.skill == 'dc_fenglun' && event.card.name != 'sha') return false;
                                        if (event.skill != 'dc_fenglun' && event.card.name != 'shan') return false;
                                        return event.source && event.source.countCards('he') > 0;
                                    },
                                    logTarget: 'source',
                                    prompt: '当你因发动〖风轮〗而使用或打出【杀】时,你可以弃置对方的一张牌.',
                                    content() {
                                        player.discardPlayerCard(trigger.source, 'he', true);
                                    },
                                },
                            },
                        },
                        dc_nuowu: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            content() {
                                var cards = [];
                                var card = get.cardPile2(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) cards.push(card);
                                var card = get.cardPile2(function (card) {
                                    return card.name == 'shan';
                                });
                                if (card) cards.push(card);
                                if (cards.length) player.gain(cards, 'gain2');
                                player.addTempSkill('dc_nuowu_buff');
                                player.addTempSkill('qiaoshui2');
                            },
                            subSkill: {
                                count: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.dc_nuowu_buff = true;
                                    },
                                },
                                count2: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.dc_nuowu_count2++;
                                    },
                                },
                                buff: {
                                    init(player) {
                                        if (!player.storage.dc_nuowu_count) {
                                            player.storage.dc_nuowu_count = 0;
                                            player.storage.dc_nuowu_count2 = 0;
                                        }
                                        if (!player.storage.dc_nuowu_buff) player.storage.dc_nuowu_buff = false;
                                    },
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.storage.dc_nuowu_buff == true;
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                        player.storage.dc_nuowu_buff = false;
                                        player.storage.dc_nuowu_count++;
                                        if (player.storage.dc_nuowu_count > 0) {
                                            player.removeSkill('dc_nuowu_count');
                                        }
                                    },
                                    group: ['dc_nuowu_count', 'dc_nuowu_debuff', 'dc_nuowu_count2'],
                                    mod: {
                                        targetInRange(card, player, target, now) {
                                            if (card.name == 'sha') return true;
                                        },
                                        selectTarget(card, player, range) {
                                            if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++;
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + player.storage.dc_nuowu_count;
                                        },
                                    },
                                },
                                debuff: {
                                    trigger: { player: 'phaseUseEnd' },
                                    forced: true,
                                    content() {
                                        player.loseHp();
                                        var num = player.storage.dc_nuowu_count2 - 1;
                                        if (num > 0) player.chooseToDiscard(num, 'he', true);
                                        delete player.storage.dc_nuowu_count;
                                        delete player.storage.dc_nuowu_count2;
                                    },
                                },
                            },
                        },
                        qiongsuan: {
                            //audio:"ext:原神杀/audio:3",
                            trigger: {
                                player: ['phaseJudgeBefore', 'phaseJudgeEnd'],
                            },
                            forced: true,
                            content() {
                                player.useCard(game.createCard('mn_bingliang', 'club', 12), player).animate = false;
                            },
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'bingliang') return false;
                                },
                            },
                        },
                        zhanxing: {
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    if (player != game.me) return get.translation(player) + '占星中...';
                                    if (get.itemtype(_status.pileTop) != 'card') return '牌堆顶无牌';
                                    dialog.add([_status.pileTop]);
                                },
                            },
                            ai: {
                                viewHandcard: true,
                                skillTagFilter(player, tag, arg) {
                                    if (player == arg) return false;
                                },
                            },
                        },
                        huanyuan: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                global: 'judgeBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var card = _status.pileTop;
                                var list = ['从牌堆顶摸牌', '从牌堆底摸牌', '弃置其一张手牌', '取消'];
                                if (!trigger.player.countCards('h')) list.remove('弃置其一张手牌');
                                player.line(trigger.player, 'green');
                                player
                                    .chooseControl(list)
                                    .set('prompt', `【幻愿】是否令${get.translation(trigger.player)}摸牌或弃牌？`)
                                    .set('ai', function () {
                                        if (get.attitude(player, trigger.player) < 0 && trigger.player.countCards('he')) return '弃置其一张手牌';
                                        else if (get.attitude(player, trigger.player) > 0 && get.value(card) < 8) return '从牌堆底摸牌';
                                        else if (get.attitude(player, trigger.player) > 0) return '从牌堆顶摸牌';
                                        else return '取消';
                                    });
                                ('step 1');
                                if (result.control == '从牌堆顶摸牌') {
                                    trigger.player.draw();
                                } else if (result.control == '从牌堆底摸牌') {
                                    trigger.player.draw('bottom');
                                } else if (result.control == '弃置其一张手牌') {
                                    player.discardPlayerCard('h', true, trigger.player);
                                } else event.finish();
                            },
                        },
                        xingming: {
                            audio: 'ext:原神杀/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return get.itemtype(_status.pileTop) == 'card';
                            },
                            filterTarget(card, player, target) {
                                return !target.hasSkill('xingming_paoying');
                            },
                            prompt: '选择一名角色,将牌堆顶一张牌置于其武将牌上作为<星命>.',
                            content() {
                                var card = (event.cards = get.cards(1));
                                target.addSkill('xingming_paoying');
                                game.cardsGotoSpecial(card);
                                target.storage.xingming_paoying = card;
                                target.storage.xingming = get.color(card);
                                target.storage.xingming_me = player;
                                player.$give(1, target, false);
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target, card) {
                                        var card = _status.pileTop;
                                        if (get.color(card) == 'red') return 1;
                                        else return -1;
                                    },
                                },
                            },
                            group: ['xingming_me'],
                            subSkill: {
                                paoying: {
                                    mark: true,
                                    marktext: '星',
                                    intro: {
                                        name: '星命',
                                        content: 'cards',
                                        onunmark(storage, player) {
                                            var storage = player.storage.xingming_paoying;
                                            if (storage && storage.length) {
                                                player.$throw(storage[0], 1000);
                                                game.cardsDiscard(storage[0]);
                                                game.log(storage[0], '被置入了弃牌堆');
                                            }
                                            delete player.storage.xingming_paoying;
                                        },
                                    },
                                    trigger: {
                                        player: ['damageBegin1', 'phaseEnd'],
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.paoying = player.storage.xingming_paoying;
                                        player.unmarkSkill('xingming_paoying');
                                        player.judge();
                                        ('step 1');
                                        var color = get.color(event.paoying);
                                        if (result.color == 'red' && result.color == color) {
                                            if (trigger.name == 'damage') trigger.num--;
                                            else player.recover();
                                            player.storage.xingming_me.draw();
                                        } else if (result.color == 'black' && result.color == color) {
                                            if (trigger.name == 'damage') trigger.num++;
                                            else player.loseHp();
                                            player.storage.xingming_me.draw();
                                        } else player.storage.xingming_me.chooseToDiscard(true, 'he');
                                        player.removeSkill('xingming_paoying');
                                    },
                                },
                                me: {},
                            },
                        },
                        dc_chuangsheng: {
                            audio: 'ext:原神杀/audio:4',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                var hs = player.getCards('h');
                                for (var i of hs) {
                                    if (!player.storage.dc_chuangsheng.includes(get.type(i, player))) return true;
                                }
                            },
                            init: (player) => (player.storage.dc_chuangsheng = []), //QQQ
                            filterCard(card, player) {
                                return !player.storage.dc_chuangsheng.includes(get.type(card));
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'h',
                            content() {
                                'step 0';
                                var type = get.type(cards[0]);
                                player.storage.dc_chuangsheng.push(type);
                                var list = [];
                                if (type == 'basic') {
                                    list.push(['火杀', '', 'sha', 'fire']);
                                    list.push(['雷杀', '', 'sha', 'thunder']);
                                    list.push(['冰杀', '', 'sha', 'ice']);
                                }
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    if (get.type(lib.inpile[i]) == type) list.push(['', '', lib.inpile[i]]);
                                }
                                player.chooseButton(true, ['请选择要创生的牌', [list, 'vcard']]).set('ai', function (button) {
                                    var b = [];
                                    if (
                                        game.hasPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged();
                                        })
                                    ) {
                                        b = 'tao';
                                        //event.target1=current;
                                    } else if (
                                        !player.countCards('h', function (card) {
                                            return card.name == 'sha';
                                        })
                                    )
                                        b = 'sha';
                                    else if (
                                        !player.countCards('h', function (card) {
                                            return card.name == 'shan';
                                        })
                                    )
                                        b = 'shan';
                                    else b = 'jiu';
                                    var e = [];
                                    if (
                                        !player.countCards('e', function (card) {
                                            return get.subtype(card) == 'equip2';
                                        })
                                    )
                                        e = 'equip2';
                                    else if (
                                        !player.countCards('e', function (card) {
                                            return get.subtype(card) == 'equip1';
                                        })
                                    )
                                        e = 'equip1';
                                    else if (
                                        !player.countCards('e', function (card) {
                                            return get.subtype(card) == 'equip3';
                                        })
                                    )
                                        e = 'equip3';
                                    else e = 'equip4';
                                    if (type == 'basic') return button.link[2] == b ? 1 : -1;
                                    if (type == 'trick') return button.link[2] == 'shunshou' || button.link[2] == 'wuzhong' ? 1 : -1;
                                    if (type == 'equip') return get.subtype(button.link[2]) == e ? 1 : -1;
                                    if (type == 'delay') return button.link[2] != 'shandian' ? 1 : -1;
                                    return Math.random();
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    var name = result.links[0][2];
                                    event.cardname = name;
                                    event.nature = result.links[0][3];
                                    player.chooseTarget(true, '选择一名角色获得此创生牌,若不为你,你摸一张牌').set('ai', function (target) {
                                        //if(event.target1) return event.target1;
                                        return get.attitude(_status.event.player, target);
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    var fakecard = game.createCard(event.cardname, cards[0].suit, cards[0].number, event.nature);
                                    result.targets[0].gain(fakecard, 'gain2', 'log');
                                    if (result.targets[0] != player) player.draw();
                                    result.targets[0].storage.dc_chuangsheng_1 = player;
                                    result.targets[0].addSkill('dc_chuangsheng_1');
                                }
                            },
                            group: 'dc_chuangsheng_re',
                            subSkill: {
                                tar: {},
                                re: {
                                    trigger: { player: 'phaseBegin' },
                                    forced: true,
                                    content() {
                                        player.storage.dc_chuangsheng = [];
                                    },
                                },
                                1: {
                                    mark: true,
                                    marktext: '生',
                                    intro: {
                                        name: '创生•阳华',
                                        content: '攻击范围+1;其他角色计算与你的距离+1',
                                    },
                                    mod: {
                                        globalTo(from, to, current) {
                                            return current + 1;
                                        },
                                        attackFrom() {
                                            return -1;
                                        },
                                    },
                                    group: 'dc_chuangsheng_remove',
                                },
                                remove: {
                                    trigger: { global: ['phaseBegin', 'dieAfter'] },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.player == player.storage.dc_chuangsheng_1;
                                    },
                                    content() {
                                        player.removeSkill('dc_chuangsheng_1');
                                    },
                                },
                            },
                            ai: {
                                order: 10,
                                value: [6, 2],
                                useful: 5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xd_chouka: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            onremove(player) {
                                player.removeSkill('xd_chouka_card');
                            },
                            process(skills, name) {
                                var cardname = 'xd_chouka_' + name;
                                lib.translate[cardname] = lib.translate[name];
                                lib.translate[`${cardname}_info`] = `出牌阶段对自己使用,获得${get.translation(name)}的所有技能`;
                                lib.translate[`${cardname}_append`] = '';
                                for (var i = 0; i < skills.length; i++) {
                                    lib.translate[`${cardname}_append`] += `<div class="skill">【${lib.translate[skills[i]]}】</div><div>` + get.skillInfoTranslation(skills[i]) + '</div>';
                                    if (i < skills.length) {
                                        lib.translate[`${cardname}_append`] += '<br>';
                                    }
                                }
                                lib.card[cardname] = lib.card[cardname] || {
                                    enable: true,
                                    type: 'character',
                                    image: 'character:' + name,
                                    fullimage: true,
                                    skills: skills,
                                    derivation: 'xd',
                                    filterTarget(card, player, target) {
                                        return player == target;
                                    },
                                    selectTarget: -1,
                                    content() {
                                        'step 0';
                                        var list = lib.card[card.name].skills;
                                        for (var i = 0; i < list.length; i++) {
                                            if (target.hasSkill(list[i])) {
                                                list.splice(i--, 1);
                                            }
                                        }
                                        if (!list.length) {
                                            event.finish();
                                            return;
                                        }
                                        if (!target.hasSkill(list)) {
                                            target.popup(list);
                                            target.$gain2(card);
                                            target.removeSkill('xd_chouka_card');
                                            target.storage.xd_chouka_card = card.name;
                                            target.storage.xd_chouka_card_skill = list;
                                            target.addAdditionalSkill('xd_chouka_card', list);
                                            target.addSkill('xd_chouka_card');
                                            game.log(target, '获得技能', `【${get.translation(list)}】`);
                                        }
                                    },
                                    ai: {
                                        order() {
                                            if (_status.event.player.hasSkill('xd_chouka_card')) return 1;
                                            return 9;
                                        },
                                        result: {
                                            target(player, target) {
                                                if (!player.hasSkill('xd_chouka_card') || player.needsToDiscard()) return 1;
                                                return 0;
                                            },
                                        },
                                    },
                                };
                            },
                            content() {
                                'step 0';
                                player.chooseCard('he', [1, player.countCards('he')], get.prompt2('xd_chouka'));
                                ('step 1');
                                if (result.bool) {
                                    var card = result.cards;
                                    event.num = 0;
                                    event.cards = [];
                                    event.num += result.cards.length;
                                    player.lose(card, ui.discardPile, 'visible');
                                    player.$throw(card, 1000);
                                    game.log(player, '将', card, '置入弃牌堆');
                                } else event.finish();
                                ('step 2');
                                var cards = [];
                                var current = game.expandSkills(player.getSkills());
                                var list = get.gainableSkills(function (info, skill, name) {
                                    if (current.includes(skill)) return false;
                                    return true;
                                });
                                if (!list.length) {
                                    return;
                                }
                                var skill = list.randomGet();
                                var source = [];
                                for (var i in lib.character) {
                                    if (lib.character[i][3].includes(skill)) {
                                        source.push(i);
                                    }
                                }
                                if (!source.length) {
                                    return;
                                }
                                var name = source.randomGet();
                                var skills = [skill];
                                var nameskills = lib.character[name][3];
                                for (var i = 0; i < nameskills.length; i++) {
                                    if (list.includes(nameskills[i])) {
                                        skills.add(nameskills[i]);
                                    }
                                }
                                game.addVideo('skill', player, ['xd_chouka', [skills, name]]);
                                lib.skill.xd_chouka.process(skills, name);
                                if (Math.random() <= 0.1 || player.countMark('xd_chouka_baodi') >= 9) {
                                    if (player.countMark('xd_chouka_baodi') >= 9) {
                                        player.say('保底啦,死非酋');
                                        game.log(player, '保底了');
                                        player.removeMark('xd_chouka_baodi', player.countMark('xd_chouka_baodi'));
                                    } else {
                                        player.say('欧洲细作,吃我一矛');
                                        game.log(player, '阳寿抽卡');
                                        player.removeMark('xd_chouka_baodi', player.countMark('xd_chouka_baodi'));
                                    }
                                    var card2 = game.createCard('xd_chouka_' + name);
                                    player.gain(card2, 'gain2');
                                    event.num--;
                                } else {
                                    player.addMark('xd_chouka_baodi', 1, false);
                                    var card3 = get.cards(1);
                                    player.gain(card3, 'gain2');
                                    event.num--;
                                }
                                if (event.num > 0) event.redo();
                            },
                            subSkill: {
                                baodi: {
                                    marktext: '非',
                                    intro: {
                                        name: '保底',
                                        name2: '非',
                                        content(storage, player, skill, dialog) {
                                            var str = player.countMark('xd_chouka_baodi') < 1 ? '当前还一发未抽' : '离保底还有' + get.cnNumber(10 - player.countMark('xd_chouka_baodi')) + '发';
                                            return str;
                                        },
                                    },
                                },
                                card: {
                                    mark: true,
                                    onremove: ['xd_chouka_card', 'xd_chouka_card_count', 'xd_chouka_card_skill'],
                                    intro: {
                                        content(storage, player, skill, dialog, content) {
                                            var skill = player.storage.xd_chouka_card_skill;
                                            // var skill=storage.name.slice(8);
                                            var str = '<br><li>当前角色:' + get.translation(player.storage.xd_chouka_card);
                                            if (player.storage.xd_chouka_card_skill) {
                                                str += '<br><li>当前技能:';
                                                str += get.translation(player.storage.xd_chouka_card_skill);
                                            }
                                            for (var i = 0; i < skill.length; i++) {
                                                str += `<br><li>${get.translation(skill[i])}:`;
                                                str += lib.translate[skill[i] + '_info'];
                                            }
                                            return str;
                                        },
                                    },
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    _priority: -10,
                                    silent: true,
                                    content() { },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        yuzhang: {
                            subSkill: {
                                use: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    position: 'he',
                                    filterCard(card, player, event) {
                                        event = event || _status.event;
                                        if (typeof event != 'string') event = event.parent.name;
                                        var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    },
                                    discard: false,
                                    lose: false,
                                    delay: false,
                                    selectCard: [1, 2],
                                    check(card) {
                                        var player = _status.event.player;
                                        if (
                                            get.position(card) == 'h' &&
                                            !player.countCards('h', 'du') &&
                                            (player.hp > 2 ||
                                                !player.countCards('h', function (card) {
                                                    return get.value(card) >= 8;
                                                }))
                                        ) {
                                            return 1;
                                        }
                                        return 6 - get.value(card);
                                    },
                                    content() {
                                        'step 0';
                                        player.discard(cards);
                                        ('step 1');
                                        player.changeHujia(cards.length);
                                    },
                                },
                                phase: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hujia > 0;
                                    },
                                    content() {
                                        player.draw(player.hujia);
                                        player.changeHujia(-player.hujia);
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            content() {
                                player.changeHujia(4);
                            },
                            group: ['yuzhang_phase', 'yuzhang_use'],
                        },
                        hj_tianxing: {
                            audio: 'ext:原神杀/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard() {
                                var player = _status.event.player;
                                return [Math.max(1, player.countCards('he'))];
                            },
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            filterTarget: true,
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    game.countPlayer(function (target) {
                                        return (
                                            target != player &&
                                            !game.hasPlayer(function (current) {
                                                return current != player && current.hp > target.hp;
                                            }) &&
                                            get.effect(target, 'hj_tianxing', player, player) > 0
                                        );
                                    }) <= ui.selected.cards.length
                                )
                                    return 0;
                                return 7 - get.value(card);
                            },
                            position: 'he',
                            filterCard: true,
                            content() {
                                target.damage('nocard');
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var damage = get.damageEffect(target, player);
                                        if (get.attitude(player, target) < 0) return Math.min(-1, damage);
                                        return damage;
                                    },
                                },
                                order: 7,
                            },
                        },
                        guiye: {
                            group: ['guiye_loseHp'],
                            subSkill: {
                                changeHp: {
                                    trigger: {
                                        player: 'changeHp',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                loseHp: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                        trigger.player.loseHp(trigger.num);
                                    },
                                    ai: {
                                        jueqing: true,
                                    },
                                },
                                card: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (player != target) return false;
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: ['dyingBefore'],
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name == 'dying' || player.hp < 1;
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'dying') {
                                    trigger.cancel();
                                    player.addSkill('guiye_card');
                                    player.addSkill('guiye_changeHp');
                                    event.finish();
                                } else if (player.hp < 1) {
                                    player.removeSkill('guiye_card');
                                    player.removeSkill('guiye_changeHp');
                                    var next = game.createEvent('_save');
                                    var start = false;
                                    var starts = [_status.currentPhase, event.source, event.player, game.me, game.players[0]];
                                    for (var i = 0; i < starts.length; i++) {
                                        if (get.itemtype(starts[i]) == 'player') {
                                            start = starts[i];
                                            break;
                                        }
                                    }
                                    next.player = start;
                                    next._trigger = event;
                                    next.triggername = '_save';
                                    next.forceDie = true;
                                    next.setContent(lib.skill._save.content);
                                }
                                ('step 1');
                                _status.dying.remove(player);
                                game.broadcast(function (list) {
                                    _status.dying = list;
                                }, _status.dying);
                                if (player.hp <= 0 && !player.nodying) player.die(event.reason);
                            },
                            nobracket: true,
                        },
                        shenzhan: {
                            audio: 'ext:原神杀/audio:1',
                            trigger: {
                                global: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                if (!player.countCards({ name: 'sha' })) return false;
                                return event.player != player && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var effect = 0;
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    effect -= get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                }
                                if (effect > 0) {
                                    if (trigger.targets.length == 1) {
                                        if (trigger.targets[0].hp == 1) {
                                            effect++;
                                        }
                                        if (effect > 0 && trigger.targets[0].countCards('h') < player.countCards('h')) {
                                            effect++;
                                        }
                                    }
                                    if (effect > 0) {
                                        effect += 6;
                                    }
                                }
                                player
                                    .chooseCard('h', get.prompt2('shenzhan', trigger.player), function (card) {
                                        return card.name == 'sha';
                                    })
                                    .set('ai', function (card) {
                                        if (_status.event.effect >= 0) {
                                            var val = get.value(card);
                                            if (val < 0) return 10 - val;
                                            return _status.event.effect - val;
                                        }
                                        return 0;
                                    })
                                    .set(
                                        'effect',
                                        effect
                                    )('step 1');
                                if (result.bool && result.cards) {
                                    event.card = result.cards[0];
                                    trigger.targets.length = 0;
                                    trigger.parent.triggeredTargets1.length = 0;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!event.isMine()) game.delayx;
                                ('step 3');
                                if (event.card) {
                                    player.discard(event.card);
                                }
                                ('step 4');
                                if (!trigger.targets.includes(player)) {
                                    player.draw();
                                }
                            },
                            ai: {
                                threaten: 1.1,
                                expose: 0.25,
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        lunyan: {
                            subSkill: {
                                backupx: {
                                    name: '论演',
                                    discard: false,
                                    delay: false,
                                    popup: false,
                                    audio: 'ext:原神杀/audio:1',
                                    content() {
                                        'step 0';
                                        var cards = game.cardsGotoSpecial(get.cards(player.hp)).cards;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                ui.cardPile.insertBefore(i.fix(), ui.cardPile.firstChild);
                                            }
                                        player.chooseCardButton(cards).set('ai', function (button) {
                                            return get.value(button.link);
                                        }).filterButton = function (button) {
                                            return get.type(button.link, 'trick') == 'trick';
                                        };
                                        event.cards = cards;
                                        ('step 1');
                                        if (result.bool && result.links) {
                                            var card = result.links;
                                            var name = lib.skill.lunyan_backup.cardname;
                                            player.chooseUseTarget({ name: name }, card, true, false).viewAs = true;
                                            event.cards.remove(card);
                                        }
                                        ('step 2');
                                        event.num = event.cards.length;
                                        event.chosen = [];
                                        event.num1 = 0;
                                        event.num2 = 0;
                                        event.bottom = -1;
                                        ('step 3');
                                        var js = player.getCards('j');
                                        var pos;
                                        var choice = -1;
                                        var getval = function (card, pos) {
                                            if (js[pos]) {
                                                return get.judge(js[pos])(card);
                                            } else if (get.attitude(player, player.next) <= 0) {
                                                return 11.5 - get.value(card, player);
                                            } else {
                                                return get.value(card, player);
                                            }
                                        };
                                        event.discard = false;
                                        var minval = 6;
                                        for (pos = 0; pos < event.cards.length; pos++) {
                                            var max = getval(event.cards[pos], pos);
                                            for (var j = pos + 1; j < event.cards.length; j++) {
                                                var current = getval(event.cards[j], pos);
                                                if (current > max) {
                                                    choice = j;
                                                    max = current;
                                                }
                                            }
                                            if (event.bottom < 0) {
                                                if (!js[pos]) {
                                                    if (max < minval) {
                                                        event.bottom = pos;
                                                    }
                                                } else if (max < 0) {
                                                    event.bottom = pos;
                                                }
                                            }
                                            if (event.bottom >= 0 && event.bottom <= pos) {
                                                choice = pos;
                                                event.discard = true;
                                                break;
                                            }
                                            if (choice != -1) {
                                                break;
                                            }
                                        }
                                        player
                                            .chooseCardButton('论演:选择要移动的牌', event.cards)
                                            .set('filterButton', function (button) {
                                                return !_status.event.chosen.includes(button.link);
                                            })
                                            .set('chosen', event.chosen)
                                            .set('ai', function (button) {
                                                return button.link == _status.event.choice ? 1 : 0;
                                            })
                                            .set('choice', event.cards[choice]);
                                        event.pos = pos;
                                        ('step 4');
                                        if (result.links?.length) {
                                            var card = result.links[0];
                                            var index = event.cards.indexOf(card);
                                            event.card = card;
                                            event.chosen.push(card);
                                            event.cards.remove(event.card);
                                            var controlai = event.pos || 0;
                                            if (event.discard) {
                                                controlai = event.cards.length + 1;
                                            }
                                            var buttons = event.cards.slice(0);
                                            player
                                                .chooseControl(function () {
                                                    return _status.event.controlai;
                                                })
                                                .set('controlai', controlai)
                                                .set('sortcard', buttons)
                                                .set('tosort', card);
                                        } else {
                                            event.goto(6);
                                        }
                                        ('step 5');
                                        if (typeof result.index == 'number') {
                                            if (result.index > event.cards.length) {
                                                ui.cardPile.appendChild(event.card);
                                                event.num2++;
                                            } else {
                                                event.cards.splice(result.index, 0, event.card);
                                            }
                                            event.num--;
                                            if (event.num > 0) {
                                                event.goto(3);
                                            }
                                        }
                                        ('step 6');
                                        while (event.cards.length) {
                                            ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
                                            event.num1++;
                                        }
                                        player.popup(get.cnNumber(event.num1) + `上${get.cnNumber(event.num2)}下`);
                                        game.log(player, '将', `#y${get.cnNumber(event.num1)}张牌`, '置于牌堆顶,', `#y${get.cnNumber(event.num2)}张牌`, '置于牌堆底');
                                    },
                                    ai: {
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:原神杀/audio:1',
                            //出牌阶段限一次,你可将观看牌堆顶的X张牌并将其中一张锦囊牌当做任意锦囊牌使用将剩余的牌以任意顺序置于牌堆顶或牌堆底.(X为你的体力值)
                            async content(event, trigger, player) {
                                const cards = get.cards(player.hp);
                                var evt = event.getParent(2);
                                const result = await player
                                    .chooseButton(['将其中一张锦囊牌当做任意锦囊牌使用', cards])
                                    .set('ai', (button) => 2)
                                    .set('filterButton', (button) => get.type(button.link) == 'trick')
                                    .forResult();
                                if (result.links?.length) {
                                    var list = [];
                                    for (var i in lib.card) {
                                        var info = lib.card[i];
                                        if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                                        if (!info.content) continue;
                                        if (info.type == 'trick' && evt.filterCard({ name: i }, player, evt)) {
                                            list.push(i);
                                        }
                                    }
                                    if (list.length) {
                                        const result1 = await player
                                            .chooseButton([`视为使用一张牌`, [list, 'vcard']])
                                            .set('ai', (button) => player.getUseValue(button.link[2]))
                                            .forResult();
                                        if (result1.links && result1.links[0]) {
                                            await player.chooseUseTarget({ name: result1.links[0][2] }, result.links, true, false);
                                        }
                                    }
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        var num = 0;
                                        var cards = player.getCards('h');
                                        if (cards.length >= 3 && player.hp >= 3) return 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                num += Math.max(0, get.value(i, player, 'raw'));
                                            }
                                        num /= cards.length;
                                        num *= Math.min(cards.length, player.hp);
                                        return 12 - num;
                                    },
                                },
                                threaten: 1.6,
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        shanlun: {
                            group: ['shanlun_2'],
                            subSkill: {
                                2: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        player: 'gainAfter',
                                    },
                                    filter(event, player, card) {
                                        return player != _status.currentPhase && event.cards.length == 1;
                                    },
                                    content() {
                                        'step 0';
                                        delete player.storage.shanlun_card;
                                        player
                                            .chooseTarget(get.prompt('shanlun'), '请选择要一名角色', function (card, player, target) {
                                                return player.canCompare(target);
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            });
                                        ('step 1');
                                        if (result.targets && result.bool) {
                                            event.target = result.targets[0];
                                            var next = player.chooseToCompare(result.targets[0]);
                                            player.storage.shanlun_card = trigger.cards[0];
                                            event.card = trigger.cards[0];
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            player.chooseUseTarget(event.card, true, false, 'nodistance');
                                        } else {
                                            event.target.gain(event.card, 'gain2');
                                        }
                                    },
                                },
                            },
                            trigger: {
                                global: 'chooseToCompareBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player == event.player) return true;
                                if (event.targets) return event.targets.includes(player);
                                return player == event.target && event.parent.skill == 'shanlun_2';
                            },
                            content() {
                                'step 0';
                                if (!trigger.fixedResult) trigger.fixedResult = {};
                                trigger.fixedResult[player.playerid] = player.storage.shanlun_card;
                                ('step 1');
                                delete player.storage.shanlun_card;
                            },
                        },
                        qunxian: {
                            audio: 'ext:原神杀/audio:2',
                            audioname: ['re_jianyong'],
                            trigger: {
                                global: ['chooseToCompareAfter', 'compareMultipleAfter'],
                            },
                            filter(event, player) {
                                return !event.preserve;
                            },
                            //其他角色的拼点牌进入弃牌堆后你可交给一名角色或置于牌堆顶
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('qunxian'), '请选择获得拼点牌的角色或取消将拼点牌置于牌堆顶', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                var cards = [];
                                if (player == trigger.player) {
                                    cards.push(trigger.card2);
                                } else {
                                    cards.push(trigger.card1);
                                    cards.push(trigger.card2);
                                }
                                if (result.bool && result.targets) {
                                    result.targets[0].gain(cards, 'gain2', 'log');
                                    event.finish();
                                } else {
                                    if (cards.length > 1) {
                                        player
                                            .chooseButton(true, cards.length, ['按顺序将卡牌置于牌堆顶(先选择的在上)', cards])
                                            .set('ai', function (button) {
                                                var value = get.value(button.link);
                                                if (_status.event.reverse) return value;
                                                return -value;
                                            })
                                            .set('reverse', _status.currentPhase && _status.currentPhase.next ? get.attitude(player, _status.currentPhase.next) > 0 : false);
                                    }
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    //QQQ
                                    cards = result.links.slice(0);
                                    while (cards.length) {
                                        var card = cards.pop();
                                        if (get.position(card, true) == 'o') {
                                            card.fix();
                                            ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                            game.log(player, '将', card, '置于牌堆顶');
                                        }
                                    }
                                }
                            },
                        },
                        kuishi: {
                            trigger: {
                                global: ['useCardAfter', 'respondAfter', 'loseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (player == _status.currentPhase) return false;
                                if (event.name != 'lose') return get.type(event.card) == 'trick';
                                if (event.type != 'discard') return false;
                                if (event.cards2) {
                                    for (var i = 0; i < event.cards2.length; i++) {
                                        if (get.type(event.cards2[i], player) == 'trick') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.cards = [];
                                var cards = trigger.cards;
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (get.type(i) == 'trick') event.cards.push(i);
                                    }
                                ('step 1');
                                player
                                    .chooseCard('h', [1, event.cards.length], get.prompt2('kuishi', trigger.player), function (card) {
                                        return get.type(card) != 'trick';
                                    })
                                    .set('ai', function (card) {
                                        var val = get.value(card);
                                        if (val < 0) return 10 - val;
                                        return _status.event.effect - val;
                                        return 0;
                                    })('step 2');
                                if (result.cards && result.bool) {
                                    player.discard(result.cards);
                                    player.chooseCardButton(event.cards, [1, result.cards.length], `【窥视】:获得其中${result.cards.length}张锦囊牌`).ai = function (card) {
                                        return get.value(card);
                                    };
                                } else event.finish();
                                ('step 3');
                                if (result.bool && result.links) player.gain(result.links, 'gain2', 'log');
                            },
                        },
                        xingmie: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'wuxie';
                            },
                            content() {
                                'step 0';
                                if (!player.storage.xingmie) player.storage.xingmie = [];
                                if (!player.storage.xingmie.includes(trigger.player) && trigger.player != player) player.storage.xingmie.push(trigger.player);
                                ('step 1');
                                if (trigger.player == player) player.storage.wuxie = true;
                                else event.finish();
                            },
                            ai: {
                                threaten: 1.4,
                            },
                            group: ['xingmie_clear', 'xingmie_mie'],
                            subSkill: {
                                clear: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    silent: true,
                                    content() {
                                        player.storage.xingmie = [];
                                        delete player.storage.wuxie;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                mie: {
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.wuxie == true && player.storage.xingmie;
                                    },
                                    content() {
                                        'step 0';
                                        event.targets = player.storage.xingmie;
                                        event.targets.sort(lib.sort.seat);
                                        player.line(event.targets, 'green');
                                        event.targets2 = event.targets.slice(0);
                                        ('step 1');
                                        if (event.targets.length) {
                                            event.current = event.targets.shift();
                                            event.current.showHandcards();
                                            event.current.discard(event.current.getCards('h', { color: 'black' })).delay = false;
                                        }
                                        ('step 2');
                                        if (event.targets2.length) {
                                            var target = event.targets2.shift();
                                            target.chooseToDiscard('h', { color: 'red' }).set('ai', function (card) {
                                                return 6 - get.value(card);
                                            }).delay = false;
                                        }
                                    },
                                },
                            },
                        },
                        juxing: {
                            audio: 'ext:原神杀/audio:2',
                            enable: 'chooseToUse',
                            filterCard: true,
                            viewAsFilter(player) {
                                return player.countCards('h') > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            prompt: '将一张手牌当无懈可击使用',
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
                        guanli: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < -2;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player.hp < event.player.maxHp;
                            },
                            content() {
                                'step 0';
                                event.num = trigger.player.maxHp - trigger.player.hp;
                                if (trigger.player.hp >= player.hp) {
                                    trigger.player
                                        .chooseControl()
                                        .set('choiceList', [`令${get.translation(player)}摸${get.cnNumber(event.num)}张牌`, `减少${get.cnNumber(event.num)}点体力上限`])
                                        .set('ai', function () {
                                            if (get.attitude(trigger.player, player) > 0) return 0;
                                            return 1;
                                        });
                                } else {
                                    player
                                        .chooseControl()
                                        .set('choiceList', [`令${get.translation(player)}摸${get.cnNumber(event.num)}张牌`, `减少${get.cnNumber(event.num)}点体力上限`])
                                        .set('ai', function () {
                                            if (get.attitude(player, trigger.player) > 0) return 0;
                                            return 1;
                                        });
                                }
                                ('step 1');
                                if (result.index == 0) player.draw(event.num);
                                else trigger.player.loseMaxHp(event.num, true);
                                ('step 2');
                                if (trigger.player.hp < player.hp) {
                                    trigger.player.addTempSkill('xiezhu_1');
                                    trigger.player.storage.xiezhu_1 = player;
                                }
                            },
                        },
                        xiezhu: {
                            subSkill: {
                                1: {
                                    onremove(player) {
                                        delete player.storage.xiezhu_1;
                                    },
                                    mark: true,
                                    intro: {
                                        name: '点燃',
                                        mark(dialog, content, player) {
                                            dialog.addText('标记目标');
                                            dialog.add([content]);
                                        },
                                    },
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player == player.storage.xiezhu_1;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.num = 0;
                                    },
                                },
                            },
                        },
                        yinshi: {
                            group: ['yinshi_draw', 'yinshi_dis'],
                            subSkill: {
                                dis: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        if (game.roundNumber % 2 != 0) return false;
                                        return get.color(event.card) == 'red';
                                    },
                                    forced: true,
                                    content() {
                                        player.discardPlayerCard(player, true, 'he');
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.color(card) == 'red') return [1, 0.6];
                                            },
                                            player(card, player, target) {
                                                if (get.color(card) == 'red') return [-1, -1];
                                            },
                                        },
                                    },
                                },
                                draw: {
                                    trigger: {
                                        global: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    forced: true,
                                    content() {
                                        player.drawTo(player.maxHp);
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (game.roundNumber % 2 == 0) return false;
                                return get.color(event.card) == 'black';
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (get.color(card) == 'black') return [1, 1];
                                    },
                                },
                            },
                        },
                        niyang: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                return player.maxHp >= 3;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                event.num = 0;
                                event.togain = [];
                                ('step 1');
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                    event.finish();
                                }
                                ('step 2');
                                var card = get.cardPile(function (card) {
                                    for (var i = 0; i < event.togain.length; i++) {
                                        if (get.type(card, 'trick') == get.type(event.togain[i], 'trick')) return false;
                                    }
                                    return true;
                                });
                                if (card) {
                                    event.togain.push(card);
                                    event.num++;
                                    if (event.num < 3) event.redo();
                                }
                                ('step 3');
                                if (event.togain.length) {
                                    player.gain(event.togain, 'gain2');
                                }
                            },
                        },
                        wushi: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < 1;
                            },
                            content() {
                                player.gainMaxHp();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.getDamagedHp();
                                },
                            },
                        },
                        yusheng_tianxiang: {
                            trigger: {
                                player: ['drawBegin'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                var cards = get.cards(trigger.num * 2);
                                event.list = cards;
                                ('step 1');
                                player
                                    .chooseControl()
                                    .set('choiceList', [`将${get.translation(event.list)}置于弃牌堆`, `将${get.translation(event.list)}已任意顺序置于牌堆顶`])
                                    .set('ai', function () {
                                        return 1;
                                    });
                                ('step 2');
                                if (result.index == 0) {
                                    player.lose(event.list, ui.discardPile);
                                    player.$throw(cards, 1000);
                                    game.log(event.list, '进入了弃牌堆');
                                    event.finish();
                                } else player.chooseCardButton(event.list, true, '按顺序将牌置于牌堆顶(先选择的在上)', event.list.length);
                                ('step 3');
                                var list = result.links.slice(0);
                                while (list.length) {
                                    ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
                                }
                            },
                        },
                        xinghe: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.getParent(2).name != 'xinghe';
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                var card = result.cards[0];
                                var trans = get.translation(card);
                                event.cards = card;
                                player.storage.xinghe = card;
                                var list = [`将${trans}交给其他角色`, '弃置一张手牌'];
                                if (
                                    card &&
                                    game.hasPlayer(function (current) {
                                        return player.canUse(card, current);
                                    }) &&
                                    get.owner(card) == player
                                ) {
                                    list.push('使用' + trans);
                                }
                                player
                                    .chooseControl()
                                    .set('choiceList', list)
                                    .set('ai', function () {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && get.attitude(player, current) > 2;
                                            })
                                        )
                                            return 0;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return player.canUse(card, current) && get.attitude(player, current) < 0;
                                            })
                                        )
                                            return 2;
                                        return 1;
                                    });
                                ('step 2');
                                event.dex = result.index;
                                switch (result.index) {
                                    case 0:
                                        player
                                            .chooseTarget(true, `请选择要获得${get.translation(event.cards)}的角色`, function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('ai', function (target) {
                                                var att = get.attitude(_status.event.player, target);
                                                var card = _status.event.card;
                                                var val = get.value(card);
                                                if (target.hasValueTarget(card, null, true)) att = att * 5;
                                                else if (target == player && !player.hasJudge('lebu') && get.type(card) == 'trick') att = att * 3;
                                                if (target.hasSkillTag('nogain')) att /= 10;
                                                return att * val;
                                            })
                                            .set('card', event.cardS);
                                        break;
                                    case 1:
                                        player.chooseToDiscard('h', true);
                                        break;
                                    case 2:
                                        player.chooseUseTarget(event.cards, true, false);
                                        break;
                                }
                                ('step 3');
                                if (event.dex == 0) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.gain(event.cards, 'gain2');
                                }
                            },
                        },
                        baipiao: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['enterGame', 'recoverEnd'],
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                if (trigger.name == 'recover') player.addMark('kejin', 1);
                                else if (trigger.name == 'damage') player.addMark('kejin', 2);
                                else player.addMark('kejin', 10);
                            },
                            group: 'baipiao_round',
                            subSkill: {
                                round: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('kejin', 3);
                                    },
                                },
                            },
                        },
                        kejin: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                player: ['phaseBegin', 'choukaAfter'],
                            },
                            filter(event, player) {
                                if (event.name == 'phase' && player.storage.kejin1 == true) return false;
                                return true;
                            },
                            marktext: '卡',
                            intro: {
                                content: 'mark',
                                name: '相遇之缘',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.kejin1 = false;
                                player.storage.chouka1 = true;
                                var list = ['失去一点体力', '弃置两张牌', '不氪告辞'];
                                if (player.countCards('he') < 2) list.remove('弃置两张牌');
                                player
                                    .chooseControl(true, list)
                                    .set('prompt', '是否献祭阳寿或钱包来抽卡')
                                    .set('ai', function () {
                                        if (player.countCards('he') > 2 && player.hp < 3) return '弃置两张牌';
                                        else if (player.hp > 1) return '失去一点体力';
                                        else return '不氪告辞';
                                    });
                                ('step 1');
                                if (result.control == '失去一点体力') {
                                    player.loseHp();
                                    result.bool = true;
                                } else if (result.control == '弃置两张牌') {
                                    player.chooseToDiscard(2, 'he').set('ai', function (card) {
                                        return 6 - get.value(card);
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.addMark('kejin', 10);
                                }
                            },
                        },
                        chouka: {
                            subSkill: {
                                remove: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    silent: true,
                                    content() {
                                        var clear = true;
                                        for (var i in player.storage.chouka) {
                                            player.storage.chouka[i]--;
                                            if (player.storage.chouka[i] <= 0) {
                                                delete player.storage.chouka[i];
                                                player.removeAdditionalSkill('chouka', i);
                                            } else {
                                                clear = false;
                                            }
                                        }
                                        if (clear) {
                                            player.unmarkSkill('chouka');
                                        } else {
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            audio: 'ext:原神杀/audio:1',
                            group: 'chouka_remove',
                            trigger: {
                                player: ['phaseBegin', 'kejinAfter'],
                            },
                            filter(event, player) {
                                if (event.name == 'phase' && player.storage.chouka1 == true) return false;
                                return player.countMark('kejin') > 9;
                            },
                            prompt: '我的回合,抽卡!',
                            init(player) {
                                player.storage.chouka = {};
                                player.storage.chouka_character = [];
                            },
                            intro: {
                                content(storage, dialog) {
                                    var str = '<ul style="padding-top:0;margin-top:0">';
                                    for (var i in storage) {
                                        str += `<li>${get.translation(i)}:` + get.translation(`${i}_info`);
                                    }
                                    str += '</ul>';
                                    return str;
                                },
                            },
                            content() {
                                'step 0';
                                player.storage.kejin1 = true;
                                player.storage.chouka1 = false;
                                player.removeMark('kejin', 10);
                                ui.backgroundMusic.pause();
                                player.say('芜湖,起飞!');
                                event.bk = ui.create.div('.chouka-background');
                                document.body.insertBefore(event.bk, ui.window);
                                ('step 1');
                                ('step 2');
                                event.bk.delete();
                                ui.backgroundMusic.play();
                                ('step 3');
                                //筛选将池
                                var list = [];
                                if (_status.characterlist) {
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL();
                                } else {
                                    list = get.gainableCharacters();
                                }
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    list.remove(i.name);
                                    list.remove(i.name1);
                                    list.remove(i.name2);
                                }
                                //角色
                                var num = 0;
                                for (var i = 0; i < 10; i++) {
                                    if (Math.random() * 10 <= 0.6) num++;
                                }
                                if (num < 1) num = 1;
                                var result_list = [];
                                for (var i = 0; i < num; i++) {
                                    var n = Math.round(Math.random() * list.length);
                                    var name = list[n];
                                    result_list.push(name);
                                }
                                //牌
                                var num2 = 0;
                                for (var i = 0; i < 10 - num; i++) {
                                    if (Math.random() * 10 <= 0.6) num2++;
                                }
                                event.cards = get.cards(num2);
                                player.storage.chouka_character = result_list;
                                //出货
                                if (num == 1 && !num2) player.chooseButton(true).set('createDialog', ['保底QAQ', [result_list, 'character'], [event.cards, 'vcard']]);
                                else player.chooseButton(true).set('createDialog', ['出货啦^_^', [result_list, 'character'], [event.cards, 'vcard']]);
                                var skills = [];
                                var skills2 = [];
                                for (var i of result_list) {
                                    skills.addArray(
                                        lib.character[i][3].filter(function (skills) {
                                            var info = get.info(skills);
                                            return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte;
                                        })
                                    );
                                }
                                if (num2) player.gain(event.cards, 'gain2');
                                for (var i = 0; i < skills.length; i++) {
                                    skills2.push(skills[i]);
                                    player.storage.chouka[skills[i]] = 1;
                                    player.popup(skills[i]);
                                    game.log(player, '获得了技能', `【${get.translation(skills[i])}】`);
                                    player.markSkill('chouka');
                                }
                                player.addAdditionalSkill('chouka', skills2, true);
                                ('step 4');
                                if (player.countMark('kejin') > 9) {
                                    player.chooseBool('是否继续抽卡？').ai = function () {
                                        return true;
                                    };
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    event.goto(0);
                                }
                            },
                        },
                        zuimie: {
                            group: 'zuimie_judge',
                            subSkill: {
                                judge: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        global: 'judge',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zuimie.length;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseCardButton(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('zuimie'), player.storage.zuimie, function (card) {
                                                var player = _status.event.player;
                                                var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                                if (mod2 != 'unchanged') return mod2;
                                                var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                                if (mod != 'unchanged') return mod;
                                                return true;
                                            })
                                            .set('ai', function (card) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                var judging = _status.event.judging;
                                                var result = trigger.judge(card) - trigger.judge(judging);
                                                var attitude = get.attitude(player, trigger.player);
                                                if (attitude == 0 || result == 0) return 0;
                                                if (attitude > 0) {
                                                    return result - get.value(card) / 2;
                                                } else {
                                                    return -result - get.value(card) / 2;
                                                }
                                            })
                                            .set('judging', trigger.player.judging[0]);
                                        ('step 1');
                                        if (result.bool) {
                                            player.respond(result.links, 'zuimie', 'highlight', 'noOrdering');
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            if (trigger.player.judging[0].clone) {
                                                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                                game.broadcast(function (card) {
                                                    if (card.clone) {
                                                        card.clone.classList.remove('thrownhighlight');
                                                    }
                                                }, trigger.player.judging[0]);
                                                game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                            }
                                            game.cardsDiscard(trigger.player.judging[0]);
                                            trigger.player.judging[0] = result.links[0];
                                            trigger.orderingCards.addArray(result.links);
                                            game.log(trigger.player, '的判定牌改为', result.links[0]);
                                        }
                                    },
                                    ai: {
                                        rejudge: true,
                                        tag: {
                                            rejudge: 1,
                                        },
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                                global: 'damageSource',
                            },
                            intro: {
                                content: 'cards',
                                onunmark: 'throw',
                            },
                            marktext: '罪',
                            filter(event, player, name) {
                                var target = name == 'damageSource' ? event.source : player;
                                if (event.source == player) return false;
                                if (event.target == player) return false;
                                if (event.player == player && event.targets.length > 1) return false;
                                return target && target.countCards('he') > 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var target = event.triggername == 'damageSource' ? trigger.source : trigger.target;
                                event.target = target;
                                player.choosePlayerCard(target, 'he', 1).set('ai', function (button) {
                                    var val = get.buttonValue(button);
                                    if (get.attitude(_status.event.player, get.owner(button.link)) > 0) return -val;
                                    return val;
                                });
                                ('step 1');
                                if (result.bool) {
                                    target.lose(result.cards, ui.special, 'toStorage');
                                    player.markAuto('zuimie', result.cards);
                                    target.$give(result.cards, player, false);
                                } else event.finish();
                                ('step 2');
                                player.markSkill('zuimie');
                            },
                        },
                        zuifa: {
                            audio: 'ext:原神杀/audio:true',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                return player.getStorage('zuimie').length && event.filterCard({ name: 'sha', nature: 'thunder' }, player, event);
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('罪罚', player.storage.zuimie, 'hidden');
                                },
                                filter(button) {
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        if (get.color(ui.selected.buttons[i].link) == get.color(button.link)) return false;
                                    }
                                    return true;
                                },
                                select: 2,
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: { name: 'sha', nature: 'thunder', cards: links },
                                        cards: links,
                                        onuse(result, player) {
                                            result.cards = lib.skill[result.skill].cards;
                                            var card = result.cards;
                                            player.storage.zuimie.remove(card);
                                            if (!player.storage.zuimie.length) {
                                                player.unmarkSkill('zuimie');
                                            } else {
                                                player.markSkill('zuimie');
                                            }
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '请选择雷【杀】的目标';
                                },
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    return player.getStorage('zuimie').length >= 2;
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
                                    player: 1,
                                }, //QQQ
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
                            group: ['zuifa_count'],
                            subSkill: {
                                count: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return event.skill == 'zuifa';
                                    },
                                    content() {
                                        if (trigger.addCount !== false) {
                                            trigger.addCount = false;
                                            var stat = player.getStat('card');
                                            if (stat && stat.sha) stat.sha--;
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        huangmai: {
                            group: ['huangmai_lose', 'huangmai_card'],
                            subSkill: {
                                card: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        var info = get.info(event.card);
                                        if (info.type == 'equip') return false;
                                        return (
                                            game.hasPlayer(function (current) {
                                                return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, event.player, current);
                                            }) &&
                                            player.getHistory('lose', function (evt) {
                                                if (evt.parent != event) return false;
                                                for (var i in evt.gaintag_map) {
                                                    if (evt.gaintag_map[i].includes('huangmai')) return true;
                                                }
                                                return false;
                                            }).length
                                        );
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var bool1 = trigger.targets.length > 1;
                                        var bool2 = game.hasPlayer(function (current) {
                                            return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
                                        });
                                        if (bool1 && bool2) {
                                            player
                                                .chooseControlList(get.prompt('yusheng_shuangxi'), [`为${get.translation(trigger.card)}增加一个目标`, `为${get.translation(trigger.card)}减少一个目标`], function (event, player) {
                                                    if (_status.event.add) return 0;
                                                    return 1;
                                                })
                                                .set('add', get.effect(player, trigger.card, trigger.player, player) >= 0);
                                        } else if (bool2) {
                                            event.type = 'add';
                                            event.goto(2);
                                            event.unchosen = true;
                                        } else {
                                            event.type = 'remove';
                                            event.goto(2);
                                            event.unchosen = true;
                                        }
                                        ('step 1');
                                        if (result.control == 'cancel2') {
                                            event.finish();
                                        } else if (result.index == 1) {
                                            event.type = 'remove';
                                        } else {
                                            event.type = 'add';
                                        }
                                        ('step 2');
                                        if (event.type == 'add') {
                                            player
                                                .chooseTarget(event.unchosen ? get.prompt('yusheng_shuangxi') : null, `为${get.translation(trigger.card)}增加一个目标`, function (card, player, target) {
                                                    var trigger = _status.event.getTrigger();
                                                    return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                                })
                                                .set('ai', function (target) {
                                                    var trigger = _status.event.getTrigger();
                                                    return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                                });
                                        } else {
                                            player
                                                .chooseTarget(event.unchosen ? get.prompt('yusheng_shuangxi') : null, `为${get.translation(trigger.card)}减少一个目标`, function (card, player, target) {
                                                    return _status.event.targets.includes(target);
                                                })
                                                .set('ai', function (target) {
                                                    var trigger = _status.event.getTrigger();
                                                    return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                                })
                                                .set('targets', trigger.targets);
                                        }
                                        ('step 3');
                                        if (result.targets?.length) {
                                            event.target = result.targets[0];
                                        } else {
                                            event.finish();
                                        }
                                        ('step 4');
                                        if (event.type == 'add') {
                                            trigger.targets.push(event.target);
                                        } else {
                                            trigger.parent.excluded.add(event.target);
                                        }
                                    },
                                    ai: {
                                        expose: 0.2,
                                    },
                                },
                                lose: {
                                    trigger: {
                                        player: 'phaseDrawAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getCards('s', function (card) {
                                            return card.hasGaintag('huangmai');
                                        }).length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCard('选择任意张手牌与<实>交换', [
                                            1,
                                            Math.min(
                                                player.countCards('h'),
                                                player.getCards('s', function (card) {
                                                    return card.hasGaintag('huangmai');
                                                }).length
                                            ),
                                        ]).ai = function (card) {
                                            var val = get.value(card);
                                            if (val < 0) return 10;
                                            if (player.skipList.includes('phaseUse')) {
                                                return val;
                                            }
                                            return -val;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            game.log(player, '将', result.cards, '放到了武将牌上');
                                            player.loseToSpecial(result.cards, 'huangmai');
                                            event.num = result.cards.length;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        player.chooseCardButton(
                                            player.getCards('s', function (card) {
                                                return card.hasGaintag('huangmai');
                                            }),
                                            `选择${event.num}张牌作为手牌`,
                                            event.num,
                                            true
                                        ).ai = function (button) {
                                            var val = get.value(button.link);
                                            if (val < 0) return -10;
                                            if (player.skipList.includes('phaseUse')) {
                                                return -val;
                                            }
                                            return val;
                                        };
                                        if (player == game.me && !event.isMine()) {
                                        }
                                        ('step 3');
                                        player.lose(result.links, ui.special);
                                        if (player == game.me && _status.auto) {
                                        }
                                        player.gain(result.links, 'gain2');
                                    },
                                },
                            },
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            audio: 'ext:原神杀/audio:2',
                            content() {
                                'step 0';
                                var num =
                                    3 -
                                    player.getCards('s', function (card) {
                                        return card.hasGaintag('yucai');
                                    }).length;
                                var cards = get.cards(num);
                                game.log(player, '将', cards, '放到了武将牌上');
                                player.loseToSpecial(cards, 'huangmai');
                                ('step 1');
                                player.markSkill('huangmai');
                            },
                            marktext: '实',
                            intro: {
                                mark(dialog, storage, player) {
                                    dialog.addAuto(
                                        player.getCards('s', function (card) {
                                            return card.hasGaintag('huangmai');
                                        })
                                    );
                                },
                                markcount(storage, player) {
                                    return player.getCards('s', function (card) {
                                        return card.hasGaintag('huangmai');
                                    }).length;
                                },
                                onunmark(storage, player) {
                                    var cards = player.getCards('s', function (card) {
                                        return card.hasGaintag('huangmai');
                                    });
                                    if (cards.length) {
                                        player.lose(cards, ui.discardPile);
                                        player.$throw(cards, 1000);
                                        game.log(cards, '进入了弃牌堆');
                                    }
                                },
                            },
                            mod: {
                                targetInRange(card, player) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('huangmai')) return true;
                                },
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('huangmai')) return num + 0.5;
                                },
                            },
                        },
                        yusheng_shuangxi: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player, card) {
                                return player.getHistory('lose', function (evt) {
                                    if (evt.parent != event) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('huangmai')) return true;
                                    }
                                    return false;
                                }).length;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl()
                                    .set('choiceList', ['摸一张牌', `弃置${get.translation(trigger.targets)}中一名角色的一张牌`])
                                    .set('ai', function (target) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && trigger.targets.includes(current) && get.attitude(player, current) > 0;
                                            })
                                        )
                                            return 1;
                                        return 0;
                                    });
                                ('step 1');
                                if (result.index == 1) {
                                    player
                                        .chooseTarget(get.prompt2('yusheng_shuangxi'), function (card, player, target) {
                                            return _status.event.targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            return 2 - get.attitude(_status.event.player, target);
                                        })
                                        .set('targets', trigger.targets);
                                } else {
                                    player.draw();
                                    event.finish();
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    player.discardPlayerCard(result.targets[0], true, 'he');
                                }
                            },
                        },
                        yusheng_yinshi: {
                            trigger: {
                                player: 'phaseDiscardAfter',
                            },
                            forced: true,
                            audio: 'ext:原神杀/audio:2',
                            filter(event, player) {
                                var cards = [];
                                player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
                                });
                                return (
                                    cards.length &&
                                    player.getCards('s', function (card) {
                                        return card.hasGaintag('huangmai');
                                    }).length < 3
                                );
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards2);
                                });
                                player
                                    .chooseCardButton(cards, get.prompt('huangmai'), '将任意张弃牌当做<实>置于武将牌上', [
                                        1,
                                        (function () {
                                            return (
                                                3 -
                                                player.getCards('s', function (card) {
                                                    return card.hasGaintag('huangmai');
                                                }).length
                                            );
                                        })(),
                                    ])
                                    .set('ai', function (card) {
                                        var player = _status.event.player;
                                        if (player.hasUseTarget(card) && !player.hasValueTarget(card)) return 0;
                                        if (['sha', 'shan', 'wuxie', 'caochuan'].includes(card.name)) return 2 + Math.random();
                                        return 1 + Math.random();
                                    })
                                    .set('complexCard', true).filterButton = function (button) {
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (ui.selected.buttons[i].link.suit == button.link.suit) return false;
                                        }
                                        return true;
                                    };
                                ('step 1');
                                if (result.bool) {
                                    game.log(player, '将', result.links, '放到了武将牌上');
                                    player.loseToSpecial(result.links, 'huangmai');
                                } else event.finish();
                                ('step 2');
                                player.markSkill('huangmai');
                            },
                        },
                        shuanggui: {
                            trigger: {
                                player: ['phaseDrawBegin', 'phaseUseBegin'],
                            },
                            forced: true,
                            audio: 'ext:原神杀/audio:2',
                            filter(event, player) {
                                return event.parent.name != 'shuanggui';
                            },
                            content() {
                                var next = event.triggername == 'phaseUseBegin' ? player.phaseUse('shuanggui') : player.phaseDraw('shuanggui');
                            },
                        },
                        zhuisu: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            round: 1,
                            filter(event, player) {
                                return event.player != player && event.player.hp > player.hp;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                                if (player.maxHp - player.hp >= 3) return false;
                                if (player.hp == 1) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.player.draw(2);
                                ('step 1');
                                player.loseHp();
                                ('step 2');
                                trigger.cancel();
                                trigger.player.phaseSkipped = true;
                                ('step 3');
                                player.phase('zhuisu');
                            },
                            ai: {
                                threaten: 1.1,
                                expose: 0.3,
                            },
                            group: ['zhuisu_roundcount'],
                        },
                        dieyin: {
                            audio: 'htdiewu',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                var num = 2;
                                if (player.hp < 4) num = 1;
                                player.loseHp(num);
                                player.addTempSkill('dieyin_fire');
                                player.addTempSkill('dieyin_damage');
                            },
                            subSkill: {
                                damage: {
                                    audio: 'wangsheng',
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 1 && event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.player.addSkill('dieyin_xuemei');
                                    },
                                },
                                fire: {
                                    mark: true,
                                    marktext: '蝶',
                                    intro: {
                                        name: '蝶引',
                                        content: '你造成的伤害进行火元素附魔,你使用【杀】的上限为你已损失的体力值,你使用【杀】造成大于1点的伤害后,目标角色获得<血梅>',
                                    },
                                    mod: {
                                        cardnature(card, player) {
                                            if (card.name == 'sha') return 'fire';
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return player.maxHp - player.hp;
                                        },
                                    },
                                    trigger: { source: 'damageBegin1' },
                                    forced: true,
                                    content() {
                                        trigger.nature = 'fire';
                                        //trigger.card.nature='fire';
                                    },
                                },
                                xuemei: {
                                    mark: true,
                                    marktext: '血',
                                    intro: {
                                        name: '血梅',
                                        content: '始终处于火元素附着状态,手牌上限、攻击范围-1;回合结束时,失去此技能失去1点体力.',
                                    },
                                    audio: 'wangsheng',
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.loseHp();
                                        player.removeSkill('dieyin_xuemei');
                                    },
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance + 1;
                                        },
                                        maxHandcardBase(player, num) {
                                            return num - 1;
                                        },
                                    },
                                },
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 2) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        anshen: {
                            audio: 'wangsheng',
                            enable: 'phaseUse',
                            usable: 1,
                            limited: true,
                            filter(event, player) {
                                return player.hp < 3 && (player.storage.anshen == false || player.storage.anshen == undefined);
                            },
                            selectTarget: [1, 4],
                            filterTarget(event, player, target) {
                                return player != target;
                            },
                            prompt: '选择至多四名其他角色,令这些角色选择一项:1.交给你一张【杀】或【桃】;2.受到一点火焰伤害,你回复1点体力.',
                            content() {
                                'step 0';
                                target
                                    .chooseCard(`交给${get.translation(player)}一张【杀】或【桃】,否则受到一点火焰伤害`, function (card) {
                                        return card.name == 'sha' || card.name == 'tao';
                                    })
                                    .set('ai', function (card) {
                                        if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
                                            return 11 - get.value(card);
                                        } else {
                                            return 8 - get.value(card);
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.cards, 'giveAuto', target);
                                } else {
                                    target.damage('fire');
                                    player.recover();
                                }
                                player.storage.anshen = true;
                            },
                            group: 'anshen_re',
                            subSkill: {
                                re: {
                                    audio: 'htdiewu_recover',
                                    trigger: { source: 'dieAfter' },
                                    forced: true,
                                    filter(event, player) {
                                        return _status.currentPhase == player && player.storage.anshen == true;
                                    },
                                    content() {
                                        player.storage.anshen = false;
                                    },
                                },
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        humo_skill: {
                            audio: 'baiyin_skill',
                            equipSkill: true,
                            trigger: {
                                player: ['phaseUseBefore', 'loseHpEnd', 'damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp * 2 <= player.maxHp && _status.currentPhase == player;
                            },
                            content() {
                                player.chooseUseTarget({ name: 'jiu' }, true, 'noTargetDelay', 'nodelayx');
                            },
                        },
                        llyz_skill: {
                            audio: 'kongcheng1',
                            equipSkill: true,
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            forced: true,
                            content() {
                                var num = [0, 1, 2].randomGet();
                                if (num == 0) player.addTempSkill('llyz_0');
                                else if (num == 1) player.addTempSkill('llyz_1');
                                else {
                                    player.addTempSkill('llyz_2');
                                    player.addTempSkill('llyz_20');
                                }
                            },
                        },
                        llyz_0: {
                            mark: true,
                            marktext: '叙',
                            intro: {
                                name: '宣叙调',
                                content: '【杀】没有使用和距离限制',
                            },
                            equipSkill: true,
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        llyz_1: {
                            mark: true,
                            marktext: '叹',
                            intro: {
                                name: '咏叹调',
                                content: '【杀】的伤害值+1',
                            },
                            equipSkill: true,
                            trigger: { source: 'damageBegin3' },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        llyz_2: {
                            mark: true,
                            marktext: '奏',
                            intro: {
                                name: '间奏曲',
                                content: '可以将一张手牌当任意属性的【杀】使用',
                            },
                            equipSkill: true,
                            audio: 'kongcheng1',
                            enable: 'chooseToUse',
                            filterCard: true,
                            viewAs: { name: 'sha' },
                            viewAsFilter(player) {
                                if (!player.countCards('h')) return false;
                            },
                            prompt: '将一张手牌当任意属性的【杀】使用',
                            check(card) {
                                return 4 - get.value(card);
                            },
                        },
                        llyz_20: {
                            equipSkill: true,
                            trigger: {
                                player: 'useCard1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha'; //&&event.getParent(2).name=='llyz_2';
                            },
                            check(event, player) {
                                return true;
                            },
                            prompt: '【间奏曲】是否为此【杀】赋予一种属性',
                            content() {
                                'step 0';
                                var list = lib.linked.slice(0);
                                player.chooseControl(list).set('【间奏曲】为此【杀】赋予一种属性');
                                ('step 1');
                                trigger.card.nature = result.control;
                            },
                        },
                        langmo_skill: {
                            equipSkill: true,
                            trigger: { source: 'damageBegin3' },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink() && event.player.hp < 2;
                            },
                            forced: true,
                            audio: 'guanshi_skill',
                            content() {
                                'step 0';
                                trigger.num++;
                                ('step 1');
                                player
                                    .chooseTarget('【如狼般的狩猎者】令一名其他角色获得狼末的效果直到其回合结束', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'fire');
                                    result.targets[0].addTempSkill('langmo_mark', { player: 'phaseAfter' });
                                }
                            },
                        },
                        langmo_mark: {
                            mark: true,
                            marktext: '狼',
                            intro: {
                                name: '如狼般的狩猎者',
                                content: '从狼末传递的力量,使用【杀】对体力值为1的目标造成的伤害+1,效果持续到回合结束',
                            },
                            equipSkill: true,
                            trigger: { source: 'damageBegin3' },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink() && event.player.hp < 2;
                            },
                            forced: true,
                            audio: 'guanshi_skill',
                            content() {
                                trigger.num++;
                            },
                        },
                        fyj_skill: {
                            equipSkill: true,
                            trigger: {
                                //source:'damageSource',
                                global: 'damageEnd',
                            },
                            //usable:1,
                            _priority: -1,
                            filter(event, player) {
                                if ((event.player != player && event.source != player) || player.storage.fyj_skill_re == false) return false;
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            forced: true,
                            audio: 'qinggang_skill',
                            content() {
                                'step 0';
                                if (trigger.player == player) player.storage.fyj_skill = trigger.source;
                                else player.storage.fyj_skill = trigger.player;
                                ('step 1');
                                var num = [0, 1].randomGet();
                                if (player.storage.dc_fengyin_fyj2 == true) num = 1;
                                if (num == 0) {
                                    player.storage.dc_fengyin_fyj1 = false;
                                    event.finish();
                                }
                                ('step 2');
                                player.recover();
                                player.storage.fyj_skill_re = false;
                                player.storage.dc_fengyin_fyj1 = true;
                                player.storage.dc_fengyin_fyj2 = false;
                            },
                            group: 'fyj_skill_re',
                            subSkill: {
                                re: {
                                    trigger: { global: 'phaseEnd' },
                                    forced: true,
                                    _priority: -1,
                                    content() {
                                        player.storage.fyj_skill_re = true;
                                    },
                                },
                            },
                        },
                        hepuy_skill: {
                            equipSkill: true,
                            trigger: {
                                source: 'damageSource',
                            },
                            usable: 1,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            audio: 'qinggang_skill',
                            content() {
                                player.addTempSkill('hepuy1');
                                player.addTempSkill('hepuy2');
                            },
                        },
                        hepuy1: {
                            equipSkill: true,
                            mark: true,
                            marktext: '鸢',
                            intro: {
                                name: '昭理的鸢之枪',
                                content: '本回合可额外使用一张【杀】;下一张【杀】的伤害值+1,效果持续到回合结束',
                            },
                            trigger: { player: 'useCard' },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            //onremove:true,
                            content() {
                                if (!trigger.baseDamage) trigger.baseDamage = 1;
                                trigger.baseDamage += 1;
                                game.log(player, `的${get.translation(trigger.card)}伤害值+1`);
                                player.removeSkill('hepuy1');
                            },
                        },
                        hepuy2: {
                            equipSkill: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                        },
                        ams_skill: {
                            equipSkill: true,
                            trigger: { source: 'damageBegin3' },
                            filter(event, player) {
                                if (!event.player.getCards('e').length && event.player.inRange(player)) return false;
                                return event.card && event.card.name == 'sha' && event.notLink() && get.distance(player, event.player) > 1;
                            },
                            forced: true,
                            audio: 'qilin_skill',
                            content() {
                                'step 0';
                                if (!trigger.player.getCards('e').length) event.goto(3);
                                ('step 1');
                                var att = get.attitude(player, trigger.player) <= 0;
                                var next = player.chooseButton();
                                next.set('att', att);
                                next.set('createDialog', [`【矢志不忘】是否弃置${get.translation(trigger.player)}的一张装备牌？`, trigger.player.getCards('e')]);
                                next.set('ai', function (button) {
                                    if (_status.event.att) return get.buttonValue(button);
                                    return 0;
                                });
                                ('step 2');
                                if (result.links?.length) {
                                    trigger.player.discard(result.links[0]);
                                }
                                ('step 3');
                                if (!trigger.player.inRange(player)) trigger.num++;
                            },
                        },
                        ams_skill: {
                            equipSkill: true,
                            trigger: { source: 'damageBegin3' },
                            filter(event, player) {
                                if (!event.player.getCards('e').length && event.player.inRange(player)) return false;
                                return event.card && event.card.name == 'sha' && event.notLink() && get.distance(player, event.player) > 1;
                            },
                            forced: true,
                            audio: 'qilin_skill',
                            content() {
                                'step 0';
                                if (!trigger.player.getCards('e').length) event.goto(3);
                                ('step 1');
                                var att = get.attitude(player, trigger.player) <= 0;
                                var next = player.chooseButton();
                                next.set('att', att);
                                next.set('createDialog', [`【矢志不忘】是否弃置${get.translation(trigger.player)}的一张装备牌？`, trigger.player.getCards('e')]);
                                next.set('ai', function (button) {
                                    if (_status.event.att) return get.buttonValue(button);
                                    return 0;
                                });
                                ('step 2');
                                if (result.links?.length) {
                                    trigger.player.discard(result.links[0]);
                                }
                                ('step 3');
                                if (!trigger.player.inRange(player)) trigger.num++;
                            },
                        },
                        cgh_skill: {
                            equipSkill: true,
                            init(player) {
                                if (!player.storage.cgh_skill) {
                                    player.storage.cgh_skill2 = true;
                                    player.storage.cgh_skill = [];
                                    player.markSkill('cgh_skill');
                                    game.addVideo('storage', player, ['cgh_skill', get.cardsInfo(player.storage.cgh_skill), 'cards']);
                                }
                            },
                            trigger: { player: 'phaseDrawAfter' },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            audio: 'bagua_skill',
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.cgh_skill.length) {
                                    player
                                        .chooseCard('是否将任意张牌置入【尘歌壶】,获得其中至多等量的牌', [1, player.countCards('he') - 1], 'he', function (card) {
                                            return card.name != 'cgh';
                                        })
                                        .set('promptx', [player.storage.cgh_skill]).ai = function (card) {
                                            var val = get.value(card);
                                            if (val < 0) return 10;
                                            if (player.skipList.includes('phaseUse')) {
                                                return val;
                                            }
                                            return -val;
                                        };
                                } else {
                                    player.chooseCard('是否将任意张牌置入【尘歌壶】', [1, player.countCards('he') - 1], 'he', function (card) {
                                        return card.name != 'cgh';
                                    }).ai = function (card) {
                                        var val = get.value(card);
                                        if (val < 0) return 10;
                                        if (player.skipList.includes('phaseUse')) {
                                            return val;
                                        }
                                        return -val;
                                    };
                                    player.storage.cgh_skill2 = false;
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.cgh_skill = player.storage.cgh_skill.concat(result.cards);
                                    event.num = result.cards.length;
                                    game.log(player, '将', event.num, '张牌置入【尘歌壶】');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (player.storage.cgh_skill2 == false) {
                                    player.storage.cgh_skill2 = true;
                                    if (!player.countCards('h') && event.num > 1) player.recover();
                                    event.finish();
                                }
                                ('step 3');
                                player.chooseCardButton(player.storage.cgh_skill, `【尘歌壶】选择至多${event.num}张牌作为手牌`, [1, event.num]).ai = function (button) {
                                    var val = get.value(button.link);
                                    if (val < 0) return -10;
                                    if (player.skipList.includes('phaseUse')) {
                                        return -val;
                                    }
                                    return val;
                                };
                                if (player == game.me && !event.isMine()) {
                                }
                                ('step 4');
                                if (result.bool) {
                                    player.gain(result.links, 'fromStorage');
                                    for (var i of result.links) {
                                        player.storage.cgh_skill.remove(i);
                                    }
                                    if (player == game.me && _status.auto) {
                                    }
                                } else if (!player.countCards('h') && event.num > 1) player.recover();
                                else event.finish();
                            },
                            group: ['cgh_skill2', 'cgh_disdraw'],
                            mark: true,
                            marktext: '壶',
                            intro: {
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                                mark(dialog, content, player) {
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            dialog.addAuto(content);
                                        } else {
                                            return `共有${get.cnNumber(content.length)}张牌`;
                                        }
                                    } else return '闲置中';
                                },
                                content(content, player) {
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return get.translation(content);
                                        }
                                        return `共有${get.cnNumber(content.length)}张牌`;
                                    } else return '闲置中';
                                },
                            },
                        },
                        cgh_skill2: {
                            equipSkill: true,
                            trigger: { player: 'phaseAfter' },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.cgh_skill.length && player.countCards('h')) {
                                    player
                                        .chooseCard('是否将任意张牌置入【尘歌壶】,之后将获得其中至多等量的牌', [1, player.countCards('he') - 1], 'he', function (card) {
                                            return card.name != 'cgh';
                                        })
                                        .set('promptx', [player.storage.cgh_skill]).ai = function (card) {
                                            var val = get.value(card);
                                            if (val < 0) return 10;
                                            if (player.skipList.includes('phaseUse')) {
                                                return val;
                                            }
                                            return -val;
                                        };
                                } else if (player.countCards('h')) {
                                    player.chooseCard('是否将任意张牌置入【尘歌壶】', [1, player.countCards('he') - 1], 'he', function (card) {
                                        return card.name != 'cgh';
                                    }).ai = function (card) {
                                        var val = get.value(card);
                                        if (val < 0) return 10;
                                        if (player.skipList.includes('phaseUse')) {
                                            return val;
                                        }
                                        return -val;
                                    };
                                    player.storage.cgh_skill2 = false;
                                } else if (player.storage.cgh_skill.length) event.goto(2);
                                else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.cgh_skill = player.storage.cgh_skill.concat(result.cards);
                                    event.num = result.cards.length;
                                    game.log(player, '将', event.num, '张牌置入【尘歌壶】');
                                } else if (!player.storage.cgh_skill.length || (!event.num && player.getHandcardLimit() == player.countCards('h'))) event.finish();
                                else event.num = 0;
                                ('step 2');
                                if (player.storage.cgh_skill2 == false) {
                                    player.storage.cgh_skill2 = true;
                                    if (!player.countCards('h') && event.num > 1) player.recover();
                                    event.finish();
                                }
                                ('step 3');
                                var num = player.getHandcardLimit() - player.countCards('h');
                                num = num < player.storage.cgh_skill.length ? num : player.storage.cgh_skill.length;
                                if (event.num) num = num > event.num ? num : event.num;
                                if (num < 1) event.finish();
                                else
                                    player.chooseCardButton(player.storage.cgh_skill, `【尘歌壶】选择至多${num}张牌作为手牌`, [1, num]).ai = function (button) {
                                        var val = get.value(button.link);
                                        if (val < 0) return -10;
                                        if (player.skipList.includes('phaseUse')) {
                                            return -val;
                                        }
                                        return val;
                                    };
                                if (player == game.me && !event.isMine()) {
                                }
                                ('step 4');
                                if (result.bool) {
                                    player.gain(result.links, 'fromStorage');
                                    for (var i of result.links) {
                                        player.storage.cgh_skill.remove(i);
                                    }
                                    if (player == game.me && _status.auto) {
                                    }
                                } else if (!player.countCards('h') && event.num > 1) player.recover();
                                else event.finish();
                            },
                        },
                        cgh_disdraw: {
                            trigger: { player: 'loseEnd' },
                            filter(event, player) {
                                return event.type == 'discard' && event.getParent(3).name == 'phaseDiscard' && event.cards.filterInD('d').length;
                            },
                            prompt: '是否将这些牌置入【尘歌壶】？',
                            content() {
                                var cards = trigger.cards.filterInD('d');
                                player.lose(cards, ui.special, 'toStorage');
                                player.storage.cgh_skill = player.storage.cgh_skill.concat(cards);
                                game.log(player, '将', cards, '置入【尘歌壶】');
                                player.storage.cgh_skill2 = true;
                            },
                        },
                        tuomang: {
                            group: 'tuomang_damage',
                            subSkill: {
                                limited: {},
                                damage: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return !player.hasSkill('tuomang_limited');
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('tuomang'), '令一名已受伤的角色摸一张牌', function (card, player, target) {
                                                return target.isDamaged();
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            target.draw();
                                            target.chooseToUse('脱茫:使用一张牌或弃置两张手牌并令此技能本回合失效');
                                            event.target = target;
                                        }
                                        ('step 2');
                                        if (result.bool == false) {
                                            event.target.chooseToDiscard(2, true, 'h');
                                            player.addTempSkill('tuomang_limited');
                                        }
                                    },
                                    ai: {
                                        maixie: true,
                                        maixie_hp: true,
                                        effect: {
                                            target(card, player, target) {
                                                if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                            },
                                        },
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.hasSkill('tuomang_limited');
                            },
                            filterTarget(card, player, target) {
                                return target.isDamaged();
                            },
                            content() {
                                'step 0';
                                target.draw();
                                target.chooseToUse('乱武:使用一张牌或弃置两张手牌并令此技能本回合失效');
                                ('step 1');
                                if (result.bool == false) {
                                    target.chooseToDiscard(2, true, 'h');
                                    player.addTempSkill('tuomang_limited');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                        yingzhao: {
                            trigger: {
                                global: 'useCard',
                            },
                            round: 1,
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return _status.currentPhase != event.player;
                            },
                            content() {
                                trigger.player.draw(2);
                            },
                            group: ['yingzhao_roundcount'],
                        },
                        yucai: {
                            group: ['yucai_lose'],
                            subSkill: {
                                choose: {
                                    trigger: {
                                        player: ['phaseBegin', 'phaseEnd'],
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseControl('basic', 'equip', 'trick').set('ai', function (event) {
                                            switch (Math.floor(Math.random() * 6)) {
                                                case 0:
                                                    return 'equip';
                                                case 1:
                                                case 4:
                                                case 5:
                                                case 6:
                                                    return 'basic';
                                                case 2:
                                                    return 'trick';
                                                case 3:
                                                    return 'delay';
                                            }
                                        });
                                        ('step 1');
                                        player.storage.yucai_type = result.control;
                                    },
                                },
                                lose: {
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.ss || !event.ss.length) return false;
                                        for (var i in event.gaintag_map) {
                                            if (event.gaintag_map[i].includes('yucai')) return true;
                                            return false;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        var num =
                                            4 -
                                            player.getCards('s', function (card) {
                                                return card.hasGaintag('yucai');
                                            }).length;
                                        var cards = get.cards(num);
                                        game.log(player, '将', cards, '放到了武将牌上');
                                        player.loseToSpecial(cards, 'yucai');
                                        ('step 1');
                                        var list = [];
                                        player.getCards('s', function (card) {
                                            if (card.hasGaintag('yucai') && get.type(card) != 'basic') list.add(card);
                                        });
                                        event.cards1 = list;
                                        if (list.length >= 4) {
                                            player.lose(list, ui.discardPile);
                                        }
                                        ('step 3');
                                        player.gain(event.cards1, 'gain2');
                                        ('step 4');
                                        player.markSkill('yucai');
                                        ('step 5');
                                        game.updateRoundNumber();
                                    },
                                },
                            },
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            audio: 'ext:原神杀/audio:2',
                            content() {
                                'step 0';
                                var num =
                                    4 -
                                    player.getCards('s', function (card) {
                                        return card.hasGaintag('yucai');
                                    }).length;
                                var cards = get.cards(num);
                                game.log(player, '将', cards, '放到了武将牌上');
                                player.loseToSpecial(cards, 'yucai');
                                ('step 1');
                                player.markSkill('yucai');
                                ('step 2');
                                var list = [];
                                player.getCards('s', function (card) {
                                    if (card.hasGaintag('yucai') && get.type(card) != 'basic') list.add(card);
                                });
                                event.cards1 = list;
                                if (list.length >= 4) {
                                    player.lose(list, ui.discardPile);
                                }
                                ('step 3');
                                player.gain(event.cards1, 'gain2');
                            },
                            marktext: '文',
                            intro: {
                                mark(dialog, storage, player) {
                                    dialog.addAuto(
                                        player.getCards('s', function (card) {
                                            return card.hasGaintag('yucai');
                                        })
                                    );
                                },
                                markcount(storage, player) {
                                    return player.getCards('s', function (card) {
                                        return card.hasGaintag('yucai');
                                    }).length;
                                },
                                onunmark(storage, player) {
                                    var cards = player.getCards('s', function (card) {
                                        return card.hasGaintag('yucai');
                                    });
                                    if (cards.length) {
                                        player.lose(cards, ui.discardPile);
                                        player.$throw(cards, 1000);
                                        game.log(cards, '进入了弃牌堆');
                                    }
                                },
                            },
                            mod: {
                                cardEnabled2(card, player) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('yucai') && get.type(card) != 'basic') return false;
                                },
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('yucai')) return num + 0.5;
                                },
                            },
                        },
                        shuangshi: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            filterCard: true,
                            selectCard: [1, 3],
                            position: 'h',
                            audio: 'ext:原神杀/audio:4',
                            viewAs: {
                                name: 'sha',
                                nature: 'ice',
                            },
                            prompt: '将至多三张手牌当冰【杀】使用,根据类型和数量获得增益.',
                            check(card) {
                                if (_status.event.player.countCards('h') < 4) return 6 - get.useful(card);
                                return 7 - get.useful(card);
                            },
                            ai: {
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
                            group: ['shuangshi_1', 'shuangshi_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.skill != 'shuangshi') return false;
                                        if (event.cards.length < 2) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = trigger.cards;
                                        var num1 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (get.type(i) == 'trick' || get.type(i) == 'delay') num1++;
                                            }
                                        if (num1 > 0) player.discardPlayerCard(trigger.player, true, 'he').boolline = true;
                                        ('step 1');
                                        var cards = trigger.cards;
                                        var num2 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (get.type(i) == 'equip') num2++;
                                            }
                                        if (num2 > 0) trigger.num++;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.skill != 'shuangshi') return false;
                                        if (event.cards.length < 2) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = trigger.cards;
                                        var num1 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (get.type(i) == 'trick' || get.type(i) == 'delay') num1++;
                                            }
                                        if (num1 > 1) {
                                            player.draw(2);
                                        }
                                        ('step 1');
                                        var cards = trigger.cards;
                                        var num2 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (get.type(i) == 'equip') num2++;
                                            }
                                        if (num2 > 1 && !trigger.target.hasSkill('fengyin')) trigger.target.addTempSkill('fengyin');
                                        ('step 2');
                                        var cards = trigger.cards;
                                        var num3 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (get.type(i) == 'basic') num3++;
                                            }
                                        if (num3 > 0) {
                                            trigger.target.addTempSkill('qinggang2');
                                            trigger.target.storage.qinggang2.add(trigger.card);
                                        }
                                        if (num3 > 1) trigger.directHit.addArray(game.players);
                                    },
                                },
                            },
                        },
                        dc_linji: {
                            audio: 'ext:原神杀/audio:1',
                            trigger: {
                                player: 'enterGame',
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            content() {
                                var card = get.cardPile(function (card) {
                                    return card.name == 'ams';
                                });
                                if (card) player.equip(card);
                                else {
                                    for (var i of game.players) {
                                        card = i.getCards('h', function (card) {
                                            return card.name == 'ams';
                                        });
                                        if (card.length) {
                                            player.equip(card[0]);
                                            i.draw();
                                            break;
                                        }
                                    }
                                }
                            },
                            mod: {
                                globalTo(from, to, current) {
                                    return current + to.maxHp - to.hp;
                                },
                            },
                        },
                        fengling: {
                            trigger: {
                                player: 'useCard1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            audio: 'ext:原神杀/audio:2',
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                var list = lib.linked.slice(0);
                                list.remove('kami');
                                player.chooseControl(list).set('prompt', get.prompt('风灵')).set('prompt2', '为此【杀】赋予一种属性');
                                ('step 1');
                                trigger.card.nature = result.control;
                            },
                            group: ['fengling_link_begin', 'fengling_link_end', 'fengling_remove'],
                            subSkill: {
                                link_begin: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    _priority: 1,
                                    filter(event, player) {
                                        return event.nature && !event.player.isLinked() && event.player.isAlive();
                                    },
                                    check(event, player) {
                                        return (
                                            get.attitude(player, event.player) < 0 &&
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) < 0 && current.isLinked();
                                            })
                                        );
                                    },
                                    prompt(event, player) {
                                        return `【风灵】是否令${get.translation(event.player)}进入连环状态`;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.link(true);
                                        ('step 1');
                                        trigger.player.addTempSkill('fengling_done', { player: 'damageAfter' });
                                        trigger.player.storage.fengling = true;
                                        trigger.player.addTempSkill('fengyin' /*,{player:"linkEnd"}*/);
                                    },
                                },
                                link_end: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.nature && !event.player.isLinked() && event.player.isAlive() && !event.player.hasSkill('fengling_done');
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    prompt(event, player) {
                                        return `【风灵】是否令${get.translation(event.player)}进入连环状态`;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.link(true);
                                        ('step 1');
                                        trigger.player.removeSkill('fengling_done');
                                        trigger.player.storage.fengling = true;
                                        trigger.player.addTempSkill('fengyin' /*,{player:"linkEnd"}*/);
                                    },
                                },
                                remove: {
                                    trigger: {
                                        global: 'linkEnd',
                                    },
                                    filter(event, player) {
                                        return event.player.hasSkill('fengyin') && event.player.storage.fengling == true;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.player.storage.fengling = false;
                                        trigger.player.removeSkill('fengyin');
                                    },
                                },
                                done: {
                                    charlotte: true,
                                },
                            },
                        },
                        chumei: {
                            audio: 'ext:原神杀/audio:1',
                            trigger: {
                                global: ['useCard1', 'respond'],
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.isPhaseUsing() && event.player != player && event.player.isLinked() && get.type(event.card) != 'equip';
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                player.line(trigger.player, 'green');
                                if (trigger.name == 'useCard') {
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                } else trigger.player.damage();
                                trigger.player.link();
                            },
                            group: ['chumei_link'],
                            subSkill: {
                                link: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return !player.hasSkill('chumei_done');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('【触媒】选择一名角色,令其进入连环状态', function (card, player, target) {
                                                return !target.isLinked();
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(player, target) < 0;
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            target.link(true);
                                        }
                                    },
                                },
                                done: {},
                            },
                        },
                        zuocheng: {
                            //作成
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                source: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.nature;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('chumei_done');
                                player
                                    .chooseTarget('选择一名角色,令其摸一张牌并获得精通加成', function (card, player, target) {
                                        return !target.hasSkill('zuocheng_done');
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    target.draw();
                                    player.line(target, 'green');
                                    target.addTempSkill('zuocheng_done');
                                    target.addTempSkill('zuocheng_damage', { player: 'phaseAfter' });
                                    target.storage.zuocheng = player;
                                }
                            },
                            subSkill: {
                                damage: {
                                    mark: true,
                                    marktext: '精',
                                    intro: {
                                        name: '精通加成',
                                        content: '下次造成的属性伤害+1,效果持续到回合结束',
                                    },
                                    audio: 'ext:原神杀/audio:1',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.nature && event.notLink();
                                    },
                                    _priority: 2,
                                    forced: true,
                                    content() {
                                        var target = player.storage.zuocheng;
                                        target.line(player, 'green');
                                        trigger.num++;
                                        game.log(player, '造成的伤害+1');
                                        player.removeSkill('zuocheng_damage');
                                    },
                                },
                                done: {},
                            },
                        },
                        ouxiang: {
                            audio: 'ext:原神杀/audio:3',
                            init(player) {
                                player.storage.ouxiang = [];
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.targets.length > 1;
                            },
                            forced: true,
                            content() {
                                player.storage.ouxiang = trigger.card.name;
                                player.draw(2);
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'wugu') return [1, 4];
                                    },
                                },
                            },
                            group: ['ouxiang_recover'],
                            subSkill: {
                                recover: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == player.storage.ouxiang;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    prompt(event, player) {
                                        return `【偶像】是否防止伤害,令${get.translation(event.player)}回复一点体力(若其未受伤则改为摸两张牌).`;
                                    },
                                    content() {
                                        player.line(trigger.player);
                                        trigger.cancel();
                                        if (trigger.player.hp < trigger.player.maxHp) trigger.player.recover();
                                        else trigger.player.draw(2);
                                    },
                                },
                            },
                        },
                        dc_zhiyu: {
                            audio: 'ext:原神杀/audio:3',
                            onremove(p, s) {
                                delete p.storage[s + 1];
                            },
                            hiddenCard(player, name) {
                                return ['wugu', 'taoyuan'].includes(name) && player.countCards('he', { suit: 'heart' }) > 0;
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hasCard(function (card) {
                                    return card.suit == 'heart';
                                }, 'he');
                                return _status.currentPhase == player;
                            },
                            //出牌阶段限一次,你可以将一张♥️️️牌当【桃园结义】或【五谷丰登】使用
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseButton(['将一张♥️️️牌当【桃园结义】或【五谷丰登】使用', player.getCards('he', { suit: 'heart' })])
                                    .set('ai', (button) => 6 - get.value(button.link))
                                    .forResult();
                                if (result.links?.length) {
                                    const result1 = await player
                                        .chooseButton([`视为使用一张牌`, [['taoyuan', 'wugu'], 'vcard']])
                                        .set('ai', (button) => player.getUseValue(button.link[2]))
                                        .forResult();
                                    if (result1.links && result1.links[0]) {
                                        await player.chooseUseTarget({ name: result1.links[0][2] }, result.links, true, false);
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        canglei: {
                            audio: 'ext:原神杀/audio:4',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['enterGame', 'damageEnd'],
                                source: 'damageEnd',
                            },
                            marktext: '雷',
                            intro: {
                                content: 'mark',
                                name: '雷之印',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'damage') return event.card && event.card.name == 'sha' && player.countMark('canglei') < 3;
                                return true;
                            },
                            content() {
                                player.addMark('canglei', 1);
                            },
                            mod: {
                                globalFrom(from, to, current) {
                                    return current - Math.max(0, from.countMark('canglei'));
                                },
                            },
                            group: ['canglei_draw'],
                            subSkill: {
                                draw: {
                                    audio: 'ext:原神杀/audio:1',
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('canglei') > 0 && !event.numFixed;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        threaten: 1.3,
                                    },
                                },
                            },
                        },
                        leiya: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            filter(event, player) {
                                return player.countMark('canglei') > 0;
                            },
                            check(event, player) {
                                return true;
                            },
                            prompt: '是否清除<雷之印>,进入爆发状态',
                            content() {
                                var num = player.countMark('canglei');
                                player.storage.leiya = num;
                                player.removeMark('canglei', num);
                                player.draw(num);
                                player.addTempSkill('leiya_sha');
                                player.addTempSkill('leiya_un');
                                player.markSkillCharacter('leiya', player, '雷牙', `使用的【杀】无视防具,本回合可以额外使用${num}张【杀】`);
                            },
                            subSkill: {
                                sha: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    logTarget: 'target',
                                    content() {
                                        trigger.target.addTempSkill('qinggang2');
                                        trigger.target.storage.qinggang2.add(trigger.card);
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.name == 'sha') return true;
                                            return false;
                                        },
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + player.storage.leiya;
                                        },
                                    },
                                },
                                un: {
                                    trigger: { player: 'phaseUseAfter' },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.unmarkSkill('leiya');
                                    },
                                },
                            },
                        },
                        yujian: {
                            audio: 'ext:原神杀/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: -1,
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                target.gain(cards, player, 'giveAuto');
                                target.addMark('yujian_mark', cards.length > 3 ? 3 : cards.length);
                                target.addTempSkill('yujian_sha', { player: 'phaseAfter' });
                                target.addTempSkill('yujian_recover', { player: 'phaseAfter' });
                                target.addTempSkill('yujian_damage', { player: 'phaseAfter' });
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (player.countCards('h') == player.countCards('h', 'du')) return -1;
                                        if (target.hasJudge('lebu')) return 0;
                                        if (get.attitude(player, target) > 3) {
                                            var basis = get.threaten(target);
                                            if (
                                                player == get.zhu(player) &&
                                                player.hp <= 2 &&
                                                player.countCards('h', 'shan') &&
                                                !game.hasPlayer(function (current) {
                                                    return get.attitude(current, player) > 3 && current.countCards('h', 'tao') > 0;
                                                })
                                            )
                                                return 0;
                                            if (target.countCards('h') + player.countCards('h') > target.hp + 2) return basis * 0.8;
                                            return basis;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                mark: {
                                    marktext: '雨',
                                    intro: {
                                        content: 'mark',
                                        name: '雨帘剑',
                                    },
                                },
                                sha: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        player: 'useCardToTarget',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name != 'yujian_sha' && event.card && event.card.name == 'sha' && player.countMark('yujian_mark') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(true, '请选择<雨帘剑>的攻击目标', function (card, player, target) {
                                                return _status.event.targets.includes(target);
                                            })
                                            .set('ai', function (target) {
                                                return 2 - get.attitude(_status.event.player, target);
                                            })
                                            .set('targets', trigger.targets);
                                        ('step 1');
                                        if (result.bool) {
                                            player.removeMark('yujian_mark', 1);
                                            player.useCard({ name: 'sha' }, result.cards, false, result.targets[0]);
                                        }
                                    },
                                },
                                damage: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return player.countMark('yujian_mark') > 0;
                                    },
                                    forced: true,
                                    content() {
                                        player.removeMark('yujian_mark', 1);
                                        player.draw();
                                    },
                                },
                                recover: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        player: ['phaseUseAfter', 'phaseEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('yujian_mark') > 0;
                                    },
                                    content() {
                                        player.removeMark('yujian_mark', 3);
                                        player.recover();
                                    },
                                },
                            },
                        },
                        touxian: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                player: ['loseEnd', 'gainAfter', 'drawAfter'],
                            },
                            forced: true,
                            firstDo: true,
                            filter(event, player) {
                                return player.countCards('h') <= 1;
                            },
                            content() {
                                var list = [];
                                if (!player.countCards('h')) {
                                    player.addTempSkill('yingzi', { player: ['gainAfter', 'drawAfter'] });
                                    list.push('yingzi');
                                    player.addTempSkill('biyue', { player: ['gainAfter', 'drawAfter'] });
                                    list.push('biyue');
                                }
                                player.addTempSkill('xiangle', { player: ['gainAfter', 'drawAfter'] });
                                list.push('xiangle');
                                player.addTempSkill('zhiyu', { player: ['gainAfter', 'drawAfter'] });
                                list.push('zhiyu');
                            },
                        },
                        anke: {
                            audio: 'ouxiang',
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('anke1');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【安可】令一名本回合因你回复过体力的角色摸两张牌', function (card, player, target) {
                                        return target.hasSkill('anke1');
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].draw(2);
                                }
                            },
                            group: 'anke_mark',
                            subSkill: {
                                mark: {
                                    trigger: { global: 'recoverAfter' },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isPhaseUsing() && event.source == player;
                                    },
                                    content() {
                                        trigger.player.addTempSkill('anke1');
                                    },
                                },
                            },
                        },
                        anke1: {},
                        bingchao: {
                            group: ['bingchao_use', 'bingchao_damage'],
                            subSkill: {
                                use: {
                                    audio: 'ext:原神杀/audio:2',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        return player.getStorage('bingchao_mark').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getStorage('bingchao_mark');
                                        player.chooseCardButton([1, 2], cards);
                                        ('step 1');
                                        var cards = result.links;
                                        player.$throw(cards, 2000);
                                        player.unmarkAuto('bingchao_mark', cards);
                                        game.cardsDiscard(cards);
                                        if (result.links.length > 1) event.damage = true;
                                        ('step 2');
                                        player
                                            .chooseTarget(get.prompt('bingchao'), '弃置一名其他角色的两张牌', function (card, player, target) {
                                                return player != target && target.countCards('he') > 0;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            });
                                        ('step 3');
                                        if (result.targets?.length) {
                                            event.target = result.targets[0];
                                            event.count = 2;
                                            if (event.damage) event.target.damage();
                                        } else {
                                            event.finish();
                                        }
                                        ('step 4');
                                        player.discardPlayerCard(event.target, true);
                                        event.count--;
                                        ('step 5');
                                        if (event.count > 0) event.goto(4);
                                    },
                                },
                                damage: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getStorage('bingchao_mark').length && event.nature;
                                    },
                                    content() {
                                        trigger.num -= player.getStorage('bingchao_mark').length;
                                    },
                                },
                                mark: {
                                    intro: {
                                        content: 'cards',
                                        onunmark: 'throw',
                                    },
                                    marktext: '潮',
                                },
                            },
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                source: ['damageSource'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                return player.isPhaseUsing() && event.player.countCards('he') > 0 && player.getStorage('bingchao_mark').length < 2;
                            },
                            content() {
                                'step 0';
                                var target = trigger.player;
                                event.target1 = target;
                                player.choosePlayerCard(target, 'he', player.storage.bingchao ? true : 1).set('ai', function (button) {
                                    var val = get.buttonValue(button);
                                    if (get.attitude(_status.event.player, get.owner(button.link)) > 0) return -val;
                                    return val;
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.target1.lose(result.cards, ui.special, 'toStorage');
                                    player.markAuto('bingchao_mark', result.cards);
                                    event.target1.$give(result.cards, player, false);
                                    if (player.countMark('ninglang') < 2) player.addMark('ninglang', 1, false);
                                } else event.finish();
                                ('step 2');
                            },
                        },
                        ninglang: {
                            group: ['ninglang_damage'],
                            subSkill: {
                                damage: {
                                    audio: 'ext:原神杀/audio:3',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.judge();
                                        ('step 1');
                                        event.num = Math.round(result.number / 2);
                                        event.num1 = player.countMark('ninglang');
                                        if (event.num <= event.num1) {
                                            player.removeMark('ninglang', player.countMark('ninglang'));
                                            player
                                                .chooseControl()
                                                .set('choiceList', [`对至多两名名手牌数等于${get.cnNumber(event.num1)}的角色造成一点伤害`, `对一名手牌数少于${get.cnNumber(event.num1)}的角色造成一点伤害`])
                                                .set('ai', function () {
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            return current != player && get.attitude(player, current) > 2 && current.countCards('h') < event.num1;
                                                        })
                                                    )
                                                        return 1;
                                                    return 0;
                                                });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.index == 1) {
                                            player
                                                .chooseTarget(`是否发动对一名手牌数小于${event.num1}的角色造成一点伤害？`, function (card, player, target) {
                                                    return target != player && target.countCards('h') < event.num1;
                                                })
                                                .set('ai', function (target) {
                                                    return get.damageEffect(target, player, player);
                                                });
                                        } else {
                                            player
                                                .chooseTarget([1, 2], `选择对至多两名手牌数之和等于${event.num1}的角色造成一点伤害？`, function (card, player, target) {
                                                    if (target.countCards('h') > event.num1) return false;
                                                    var num = target.countCards('h');
                                                    if (ui.selected.targets.length) {
                                                        return num + ui.selected.targets[0].countCards('h') == event.num1;
                                                    } else {
                                                        return target.countCards('h') <= event.num1;
                                                    }
                                                })
                                                .set('ai', function (target) {
                                                    return get.damageEffect(target, player, player);
                                                });
                                        }
                                        ('step 3');
                                        if (result.bool) {
                                            var targets = result.targets.sortBySeat();
                                            while (targets.length) {
                                                targets.shift().damage();
                                            }
                                        }
                                    },
                                },
                            },
                            marktext: '浪',
                            intro: {
                                name: '凝浪',
                                name2: '浪',
                                content: '当前有#个<浪>',
                            },
                            trigger: {
                                player: 'useCard1',
                            },
                            filter(event, player) {
                                return player.countMark('ninglang') < 7;
                            },
                            forced: true,
                            popup: false,
                            firstDo: true,
                            content() {
                                player.addMark('ninglang', 1, false);
                            },
                        },
                        bengbengzhadan: {
                            group: ['bengbengzhadan_gain'],
                            subSkill: {
                                gain: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        global: 'gainAfter',
                                    },
                                    forced: true,
                                    filter(event, player, card) {
                                        var hs = event.player.getCards('h');
                                        var cs = player.storage.bengbengzhadan;
                                        var bool = false;
                                        var history = event.player.getHistory('gain');
                                        for (var i = 0; i < history.length; i++) {
                                            for (var j = 0; j < history[i].cards.length; j++) {
                                                var card = history[i].cards[j];
                                                if (hs.includes(card) && cs.includes(card)) return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var card = player.storage.bengbengzhadan;
                                        event.cards = card;
                                        var bool1 = game.hasPlayer(function (current) {
                                            return trigger.player.canUse({ name: 'shandian' }, current, false);
                                        });
                                        if (bool1) {
                                            trigger.player.discard(event.cards);
                                            trigger.player
                                                .chooseControl(function () {
                                                    return 0;
                                                })
                                                .set('choiceList', ['受到一点火属性伤害', '将一张【闪电】置入判定区'])
                                                .set('ai', function () {
                                                    if (get.attitude(_status.event.player, player) < 0 && _status.event.player.hp > 1) return 0;
                                                    else return 1;
                                                })
                                                .set('choice', trigger.player.hp > trigger.player.getUseValue({ name: 'shandian', cards: cards }) ? 0 : 1);
                                        } else {
                                            event.directindex = 0;
                                        }
                                        ('step 1');
                                        if (result && typeof event.directindex != 'number') {
                                            event.directindex = result.index;
                                        }
                                        if (event.directindex == 1) {
                                            var card = game.createCard('shandian', event.cards.suit, event.cards.number);
                                            trigger.player.useCard(card, trigger.player);
                                        } else {
                                            trigger.player.damage('fire');
                                        }
                                        player.storage.bengbengzhadan = [];
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            init: (player) => (player.storage.bengbengzhadan = []),
                            onChooseToUse(event) {
                                if (!game.online) {
                                    var num1 = game.players.length * 2;
                                    var player = event.player;
                                    var num2 = ui.cardPile.childElementCount;
                                    var num3 = num2;
                                    if (num1 > num2) num3 = 0;
                                    else {
                                        for (var i = 0; i < num2; i++) {
                                            if (player.storage.bengbengzhadan.includes(ui.cardPile.childNodes[i])) {
                                                num3 = 0;
                                                break;
                                            }
                                        }
                                    }
                                    event.set('bengbengzhadanNum', num3);
                                }
                            },
                            filter(event, player) {
                                return event.bengbengzhadanNum && event.bengbengzhadanNum > 0 && player.countCards('h') > 0;
                            },
                            filterCard: true,
                            discard: false,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            delay: false,
                            lose: false,
                            content() {
                                'step 0';
                                player.storage.bengbengzhadan.add(cards[0]); //QQQ
                                var map = {};
                                var list = [];
                                for (var i = 1; i <= game.players.length * 2; i++) {
                                    var cn = get.cnNumber(i, true);
                                    map[cn] = i;
                                    list.push(cn);
                                }
                                event.map = map;
                                player
                                    .chooseControl(list)
                                    .set('prompt', '选择任意一个位置')
                                    .set('ai', function () {
                                        return Math.floor(Math.random() * list.length);
                                    });
                                ('step 1');
                                var num = event.map[result.control] - 1;
                                //game.log('num为'+num);
                                player.$throw(cards.length);
                                player.lose(cards, ui.cardPile).insert_index = function (event, card) {
                                    return ui.cardPile.childNodes[num];
                                };
                                ('step 2');
                                game.log(player, '把', get.cnNumber(cards.length), '张牌放在了牌堆里');
                                game.updateRoundNumber();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    //target:-1,
                                    player: 1,
                                },
                            },
                        },
                        xinxing: {
                            audio: 'ext:原神杀/audio:4',
                            trigger: {
                                player: 'judgeBegin',
                            },
                            forced: true,
                            charlotte: true,
                            //silent:true,
                            filter(event, player) {
                                return !event.directresult;
                            },
                            content() {
                                var tempcard = false,
                                    temp = -Infinity;
                                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                    var card = ui.cardPile.childNodes[i];
                                    var temp2 = trigger.judge(card);
                                    if (temp2 > temp) {
                                        tempcard = card;
                                        temp = temp2;
                                    }
                                }
                                if (tempcard) trigger.directresult = tempcard;
                            },
                            ai: {
                                luckyStar: true,
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                            group: 'xinxing_draw',
                            subSkill: {
                                draw: {
                                    audio: 'xinxing',
                                    trigger: { global: 'cardsDiscardAfter' },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.parent.relatedEvent;
                                        if (get.position(event.cards[0], true) != 'd') return false;
                                        return evt && evt.name == 'judge' && get.color(event.cards[0]) == 'red';
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseButton(['【幸星】选择要获得的牌', trigger.cards], [1, trigger.cards.length]).set('ai', function (button) {
                                            return get.value(button.link, _status.event.player, 'raw');
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2', 'log');
                                        }
                                    },
                                },
                            },
                        },
                        yun_tianxing: {
                            subSkill: {
                                card: {
                                    mod: {
                                        cardEnabled2(card) {
                                            if (get.position(card) == 'h') return false;
                                        },
                                    },
                                    intro: {
                                        content: '不能使用或打出手牌',
                                    },
                                    trigger: {
                                        player: 'turnOverAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        player.removeSkill('yun_tianxing_card');
                                    },
                                },
                            },
                            trigger: {
                                player: ['phaseZhunbeiBefore'],
                            },
                            forced: true,
                            audio: 'ext:原神杀/audio:2',
                            _priority: 15,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('是否跳过出牌和摸牌阶段对一名其他角色造成一点伤害？', function (card, player, target) {
                                        return target != player && target != player.storage.yun_tianxing_target;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.storage.yun_tianxing_target = target;
                                    target.damage();
                                    target.turnOver();
                                    target.addSkill('yun_tianxing_card');
                                }
                            },
                        },
                        lita_hanbing: {
                            group: 'lita_hanbing_change',
                            subSkill: {
                                change: {
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    forced: true,
                                    check(event, player) {
                                        return player.hp >= 1;
                                    },
                                    filter(event, player) {
                                        return player.countCards('he', { suit: player.storage.lita_hanbing[0].suit }) > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseCard('he', get.prompt2('lita_hanbing'), function (card, player) {
                                                return card.suit == player.storage.lita_hanbing[0].suit;
                                            })
                                            .set('ai', function (card) {
                                                return 8 - get.value(card);
                                            });
                                        ('step 1');
                                        if (result.cards?.length) {
                                            var card = result.cards[0];
                                            player.lose(card, ui.discardPile, 'visible');
                                            player.$throw(card, 1000);
                                            game.log(player, '将', card, '置入弃牌堆');
                                            player.draw();
                                        } else event.finish();
                                        ('step 2');
                                        player.storage.lita_hanbing = game.cardsGotoSpecial(get.bottomCards(1)).cards;
                                        player.markSkill('lita_hanbing');
                                        game.addVideo('storage', player, ['lita_hanbing', get.cardsInfo(player.storage.lita_hanbing), 'cards']);
                                        ('step 3');
                                        player.chooseTarget(get.prompt('寒病'), '请选择一名角色回复一点体力').set('ai', function (target) {
                                            return get.attitude(_status.event.player, target);
                                        });
                                        ('step 4');
                                        if (result.bool && result.targets[0]) result.targets[0].recover();
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            check(event, player) {
                                return player.hp <= 1;
                            },
                            filter(event, player) {
                                return !player.storage.lita_hanbing;
                            },
                            content() {
                                player.storage.lita_hanbing = game.cardsGotoSpecial(get.bottomCards(1)).cards;
                                player.markSkill('lita_hanbing');
                                game.addVideo('storage', player, ['lita_hanbing', get.cardsInfo(player.storage.lita_hanbing), 'cards']);
                            },
                            mark: true,
                            intro: {
                                content: 'cards',
                            },
                        },
                        lita_due: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return (
                                    player.countCards('he', { type: get.type(player.storage.lita_hanbing[0]) }) > 0 &&
                                    !game.hasPlayer(function (current) {
                                        return current.hasSkill('lita_due_gain');
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                event.cards = [];
                                player
                                    .chooseCard('he', [1, player.countCards('he')], '度厄:请选择作为<真符>的卡牌', true, function (card, player) {
                                        return get.type(card) == get.type(player.storage.lita_hanbing[0]);
                                    })
                                    .set('ai', function (card) {
                                        return -get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) event.cards = result.cards;
                                else event.finish();
                                ('step 2');
                                player
                                    .chooseTarget(true, get.prompt('due'), '请选择获得<真符>的角色', function (card, player, target) {
                                        return !target.hasSkill('lita_due_gain') && target != player;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        return att;
                                    });
                                ('step 3');
                                var target = result.targets[0];
                                event.target = target;
                                player.chooseCardButton(event.cards, `请选择分配给${get.translation(target)}的<真符>`, true);
                                ('step 4');
                                var target = event.target;
                                event.cards.remove(result.links[0]);
                                player.$give(result.links[0], target, false);
                                player.lose(result.links[0], ui.special, 'toStorage');
                                target.storage.lita_due_gain = result.links[0];
                                target.addSkill('lita_due_gain');
                                ('step 5');
                                if (event.cards.length) event.goto(2);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                }, //QQQ
                            },
                            subSkill: {
                                gain: {
                                    marktext: '真符',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source != undefined && event.source != player;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var cards = player.storage.lita_due_gain;
                                        if (cards) {
                                            trigger.source.gain(cards, 'gain2');
                                        }
                                        player.storage.lita_due_gain = 0;
                                        delete player.storage.lita_due_gain;
                                        player.removeSkill('lita_due_gain');
                                        ('step 1');
                                        trigger.source.recover();
                                    },
                                    mark: true,
                                    intro: {
                                        content: 'cards',
                                    },
                                },
                            },
                        },
                        yayan: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【鸦眼】以断罪皇女之名,透彻此间一切真知,寻获幽夜荫蔽之人,揭晓昭告其命运的因果轮回', function (card, player, target) {
                                        return target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) < 0 && target.countCards('h');
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.viewHandcards(result.targets[0]);
                                } else event.finish();
                            },
                        },
                        duanzui: {
                            audio: 'ext:原神杀/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.countCards('h') > 0;
                            },
                            prompt: '以断罪皇女之名,裁断此世一切罪责,召见应受罪罚之徒,降下昭告其命运的圣裁之雷',
                            content() {
                                'step 0';
                                player.say('大幻梦森罗万象狂气断罪眼!');
                                var hs = target.getCards('h');
                                var sc = [0, 0, 0, 0];
                                for (var i of hs) {
                                    if (i.suit == 'heart') sc[0]++;
                                    if (i.suit == 'diamond') sc[1]++;
                                    if (i.suit == 'spade') sc[2]++;
                                    if (i.suit == 'club') sc[3]++;
                                }
                                var num = Math.max.apply(null, sc);
                                var ai_suit = 'heart',
                                    tips = '♥️️';
                                if (num == sc[1]) {
                                    ai_suit = 'diamond';
                                    tips = '♦️️';
                                }
                                if (num == sc[2]) {
                                    ai_suit = 'spade';
                                    tips = '♠️️';
                                }
                                if (num == sc[3]) {
                                    ai_suit = 'club';
                                    tips = '♣️️';
                                }
                                player.chooseControl(lib.suit).set('prompt', `奥兹:小姐,对方的${tips}牌居多`).ai = function () {
                                    return ai_suit;
                                };
                                ('step 1');
                                event.suit = result.control;
                                player.popup(event.suit + 2);
                                game.log(player, '选择了', event.suit + 2);
                                player.choosePlayerCard(target, 'h', true);
                                ('step 2');
                                var card = result.cards[0];
                                player.showCards(card);
                                if (card.suit == event.suit) {
                                    player.say('让这黑暗的圣洁火焰将汝化为灰烬!');
                                    player.draw();
                                    target.damage('thunder');
                                } else {
                                    player.say('Σ(ŎдŎ|||)ﾉﾉ');
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target: -1,
                                },
                            },
                            group: ['duanzui_su', 'duanzui_fa'],
                            subSkill: {
                                su: {
                                    audio: 'ext:原神杀/audio:1',
                                },
                                fa: {
                                    audio: 'ext:原神杀/audio:1',
                                },
                            },
                        },
                        leili: {
                            audio: 'ext:原神杀/audio:1',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he', function (card) {
                                    return get.color(card) == 'black';
                                });
                            },
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'he',
                            usable: 1,
                            popup: false,
                            discard: false,
                            delay: false,
                            prompt: '将一张黑色牌置于其他角色武将牌上作为<雷楔>',
                            content() {
                                player.$give(cards, target, false);
                                target.storage.leili_mark = cards[0];
                                player.storage.leili = target;
                                player.lose(cards[0], ui.special, 'toStorage');
                                game.log(player, '将雷楔', cards, '置于', target, '的武将牌上');
                                target.addSkill('leili_mark');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        return get.effect(target, { name: 'sha' }, player, target);
                                    },
                                },
                            },
                            mod: {
                                globalFrom(from, to) {
                                    if (to == from.storage.leili) return -Infinity;
                                },
                            },
                            group: ['leili_sha', 'leili_shan'],
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '雷',
                                    intro: {
                                        name: '雷楔',
                                        content: 'cards',
                                        onunmark(storage, player) {
                                            if (storage && storage.length) {
                                                player.$throw(storage, 1000);
                                                game.cardsDiscard(storage);
                                                game.log(storage, '被置入了弃牌堆');
                                                storage.length == 0;
                                            }
                                            delete player.storage.leili_mark_markcount;
                                        },
                                    },
                                },
                                sha: {
                                    enable: 'chooseToUse',
                                    audio: 'ext:原神杀/audio:2',
                                    viewAs: {
                                        name: 'sha',
                                        nature: 'thunder',
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasSkill('leili_mark') && event.filterTarget({ name: 'sha', nature: 'thunder' }, player, current);
                                        });
                                    },
                                    filterTarget(card, player, target) {
                                        var bool = false;
                                        var players = ui.selected.targets.slice(0);
                                        for (var i of players) {
                                            if (i.hasSkill('leili_mark')) bool = true;
                                            break;
                                        }
                                        if (!bool && !target.hasSkill('leili_mark')) return false;
                                        return _status.event._backup.filterTarget.apply(this, arguments);
                                    },
                                    complexSelect: true,
                                    selectCard: -1,
                                    filterCard() {
                                        return false;
                                    },
                                    log: false,
                                    delay: false,
                                    popup: false,
                                    //forceaudio:true,
                                    forced: true,
                                    prompt() {
                                        return `弃置${get.translation(_status.event.player.storage.leili)}的<雷楔>,视为对其使用一张雷【杀】`;
                                    },
                                    precontent() {
                                        game.countPlayer(function (current) {
                                            if (current.hasSkill('leili_mark')) {
                                                var cards = current.getStorage('leili_mark');
                                                game.cardsDiscard(cards);
                                                current.$throw(cards);
                                                game.log(current, '的雷楔', cards, '被置入了弃牌堆');
                                                cards.length = 0;
                                                player.storage.leili = [];
                                                current.unmarkSkill('leili_mark');
                                                current.removeSkill('leili_mark');
                                            }
                                        });
                                    },
                                    ai: {
                                        order() {
                                            return get.order({ name: 'sha', nature: 'thunder' }) - 1;
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
                                            natureDamage(card) {
                                                if (card.nature) return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                        },
                                    },
                                },
                                shan: {
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    audio: 'ext:原神杀/audio:3',
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasSkill('leili_mark');
                                        });
                                    },
                                    filterTarget(card, player, target) {
                                        return target == player.storage.leili;
                                    },
                                    complexSelect: true,
                                    selectCard: -1,
                                    filterCard() {
                                        return false;
                                    },
                                    forceaudio: 'ext:原神杀/audio:true',
                                    forced: true,
                                    prompt() {
                                        return `弃置${get.translation(_status.event.player.storage.leili)}的<雷楔>,视为使用或打出一张【闪】,并对${get.translation(_status.event.player.storage.leili)}造成一点雷电伤害`;
                                    },
                                    delay: false,
                                    log: false,
                                    precontent() {
                                        game.countPlayer(function (current) {
                                            if (current.hasSkill('leili_mark')) {
                                                var cards = current.getStorage('leili_mark');
                                                player.line(current, 'thunder');
                                                game.cardsDiscard(cards);
                                                current.$throw(cards);
                                                cards.length = 0;
                                                player.storage.leili = [];
                                                current.unmarkSkill('leili_mark');
                                                current.removeSkill('leili_mark');
                                                current.damage('thunder');
                                            }
                                        });
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            return game.hasPlayer(function (current) {
                                                return current.hasSkill('leili_mark');
                                            });
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
                                        order: 4,
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        xingyi: {
                            audio: 'ext:原神杀/audio:1',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                                global: 'dieBegin',
                            },
                            forced: true,
                            forceDie: true,
                            filter(event, player) {
                                if (event.name == 'die') return event.player == player || event.player.hasSkill('leili_mark');
                                return true;
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                game.countPlayer(function (current) {
                                    if (current.hasSkill('leili_mark')) {
                                        var cards = current.getStorage('leili_mark');
                                        current.$throw(cards);
                                        cards.length = 0;
                                        player.storage.leili = [];
                                        current.unmarkSkill('leili_mark');
                                        current.removeSkill('leili_mark');
                                        num++;
                                    }
                                });
                                if (num == 0 || (trigger.name == 'die' && trigger.player == player)) event.finish();
                                ('step 1');
                                if (player.canMoveCard()) {
                                    var choiceList = ['移动场上的一张牌', '获得一张黑色牌'];
                                    player
                                        .chooseControl()
                                        .set('choiceList', choiceList)
                                        .set('prompt', '【玉衡】请选择一项:')
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            if (player.canMoveCard(true)) return 0;
                                            return 1;
                                        });
                                }
                                ('step 2');
                                if (result.index == 0) {
                                    player.moveCard(true);
                                } else {
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return get.color(card) == 'black';
                                        }),
                                        'gain2'
                                    );
                                }
                                player.draw();
                            },
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'lebu') return false;
                                },
                            },
                        },
                        guichai: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.players.length > 1;
                            },
                            content() {
                                if (!player.hasSkill('guichai_mark')) {
                                    player.addSkill('guichai_mark');
                                    player.storage.guichai = player;
                                    player.markSkillCharacter('guichai', player, '寒病鬼差', '手牌上限+1,使用【杀】或黑色锦囊造成伤害时可以弃置目标一张牌');
                                }
                            },
                            group: ['guichai_move'],
                            subSkill: {
                                1: {},
                                mark: {
                                    mark: true,
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + 1;
                                        },
                                    },
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    onremove(player) {
                                        player.unmarkSkill('guichai');
                                    },
                                    filter(event, player) {
                                        if (event._notrigger.includes(event.player)) return false;
                                        return event.card && (event.card.name == 'sha' || (get.color(event.card) == 'black' && get.type(event.card) == 'trick')) && event.player.countDiscardableCards(player, 'he');
                                    },
                                    check(event, player) {
                                        if (get.attitude(player, event.player) < 0) return true;
                                        return false;
                                    },
                                    prompt(event, player) {
                                        return `【鬼差】是否弃置${get.translation(event.player)}一张牌`;
                                    },
                                    content() {
                                        player.discardPlayerCard(trigger.player, true, 'he').boolline = true;
                                    },
                                },
                                move: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        global: ['phaseJieshuBegin', 'die'],
                                        player: 'dieBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'die' && event.player == player) return true;
                                        return event.player.hasSkill('guichai_mark') && (!player.hasSkill('guichai_1') || event.name == 'die');
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'dieBegin') {
                                            event.targets = game.filterPlayer(function (current) {
                                                return current.hasSkill('guichai_mark');
                                            });
                                            event.targets.sort(lib.sort.seat);
                                            player.line(event.targets, 'green');
                                        } else event.goto(2);
                                        ('step 1');
                                        if (event.targets.length) {
                                            event.targets.shift().removeSkill('guichai_mark');
                                            event.redo();
                                        }
                                        ('step 2');
                                        player.chooseTarget(get.prompt('guichai'), '将<寒病鬼差>转移给另一名角色.', function (card, player, target) {
                                            return target != trigger.player;
                                        }).ai = function (target) {
                                            return get.attitude(player, target) > 1;
                                        };
                                        ('step 3');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            trigger.player.removeSkill('guichai_mark');
                                            target.addSkill('guichai_mark');
                                            target.storage.guichai = player;
                                            target.markSkillCharacter('guichai', player, '寒病鬼差', '手牌上限+1,使用【杀】或黑色锦囊造成伤害时可以弃置目标一张牌');
                                            player.addTempSkill('guichai_1', 'roundStart');
                                        }
                                    },
                                },
                            },
                        },
                        due: {
                            audio: 'ext:原神杀/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return target != player && !target.getStorage('due_2').length;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (player.countCards('h') > player.getHandcardLimit()) return 6 - get.value(card);
                                else return 4 - get.value(card);
                            },
                            position: 'h',
                            discard: false,
                            toStorage: true,
                            prepare: 'give',
                            content() {
                                if (!target.storage.due_2_markcount) target.storage.due_2_markcount = 0;
                                target.markAuto('due_2', cards);
                                target.addSkill('due_damage');
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target: -1,
                                },
                            },
                            group: ['due_remove', 'due_recover'],
                            subSkill: {
                                2: {
                                    marktext: '符',
                                    intro: {
                                        name: '度厄真符',
                                        content: 'cards',
                                        onunmark(storage, player) {
                                            if (storage && storage.length) {
                                                player.$throw(storage, 1000);
                                                game.cardsDiscard(storage);
                                                game.log(storage, '被置入了弃牌堆');
                                                storage.length == 0;
                                            }
                                            delete player.storage.due_2_markcount;
                                        },
                                    },
                                },
                                damage: {
                                    audio: 'due',
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.source.recover();
                                    },
                                },
                                remove: {
                                    trigger: {
                                        player: ['phaseBegin', 'die'],
                                    },
                                    forced: true,
                                    forceDie: true,
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current.getStorage('due_2').length) {
                                                var cards = current.getStorage('due_2');
                                                current.$throw(cards);
                                                cards.length = 0;
                                                current.unmarkSkill('due_2');
                                                current.removeSkill('due_damage');
                                            }
                                        });
                                    },
                                },
                                recover: {
                                    trigger: {
                                        global: 'damageBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source && event.source.hasSkill('guichai_mark') && event.player.getStorage('due_2').length;
                                    },
                                    content() {
                                        player.draw();
                                        if (player.hasSkill('guichai_1')) player.removeSkill('guichai_1');
                                    },
                                },
                            },
                        },
                        xianlv: {
                            subSkill: {
                                xianfa_0: {
                                    mark: true,
                                    marktrxt: '一',
                                    intro: {
                                        content: '无法使用或打出杀',
                                    },
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.name == 'sha') return false;
                                        },
                                        cardUsable(card, player) {
                                            if (card.name == 'sha') return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (card.name == 'sha') return false;
                                        },
                                    },
                                },
                                xianfa_2: {
                                    mark: true,
                                    marktrxt: '三',
                                    intro: {
                                        content: '摸牌阶段摸牌数-1',
                                    },
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        trigger.num--;
                                    },
                                },
                                xianfa_1: {
                                    marktrxt: '二',
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content: '其他角色无法响应你的牌',
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    content() {
                                        trigger.directHit.addArray(game.filterPlayer());
                                    },
                                },
                                xianfa_3: {
                                    mark: true,
                                    marktrxt: '四',
                                    intro: {
                                        content: '摸牌阶段后需弃置一张牌',
                                    },
                                    trigger: {
                                        player: 'phaseDrawAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.chooseToDiscard('he', true);
                                    },
                                },
                                xianfa_5: {
                                    mark: true,
                                    marktrxt: '六',
                                    intro: {
                                        content: '弃阶段后需弃置一张手牌',
                                    },
                                    trigger: {
                                        player: 'phaseDiscardAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.chooseToDiscard('h', true);
                                    },
                                },
                                xianfa_4: {
                                    marktrxt: '五',
                                    mark: true,
                                    intro: {
                                        content: '手牌上限-1',
                                    },
                                    mod: {
                                        maxHandcardBase(player, num) {
                                            return num--;
                                        },
                                    },
                                },
                                xianfa_12: {
                                    marktrxt: '十三',
                                    mark: true,
                                    intro: {
                                        content: '视为拥有礼让',
                                    },
                                    init(player) {
                                        if (game.online) return;
                                        player.removeAdditionalSkill('xianlv_xianfa_12');
                                        player.addAdditionalSkill('xianlv_xianfa_12', 'lirang');
                                    },
                                },
                                xianfa_11: {
                                    marktrxt: '十二',
                                    mark: true,
                                    intro: {
                                        content: '视为拥有谦逊',
                                    },
                                    init(player) {
                                        if (game.online) return;
                                        player.removeAdditionalSkill('xianlv_xianfa_11');
                                        player.addAdditionalSkill('xianlv_xianfa_11', 'qianxun');
                                    },
                                },
                                xianfa_10: {
                                    marktrxt: '十一',
                                    mark: true,
                                    intro: {
                                        content: '单体锦囊牌视为杀',
                                    },
                                    mod: {
                                        cardname(card, player, name) {
                                            if (get.type(card) == 'trick' && get.tag(card, 'multitarget')) return 'sha';
                                        },
                                    },
                                },
                                xianfa_9: {
                                    marktrxt: '十',
                                    mark: true,
                                    intro: {
                                        content: '锦囊牌视为闪',
                                    },
                                    mod: {
                                        cardname(card, player, name) {
                                            if (get.type(card) == 'trick') return 'shan';
                                        },
                                    },
                                },
                                xianfa_8: {
                                    marktrxt: '九',
                                    mark: true,
                                    intro: {
                                        content: '装备牌视为闪',
                                    },
                                    mod: {
                                        cardname(card, player, name) {
                                            if (get.type(card) == 'equip') return 'shan';
                                        },
                                    },
                                },
                                xianfa_7: {
                                    marktrxt: '八',
                                    mark: true,
                                    intro: {
                                        content: '无法使用或打出装备牌',
                                    },
                                    cardEnabled(card, player) {
                                        if (get.type(card, 'trick') == 'equip') return false;
                                    },
                                    cardUsable(card, player) {
                                        if (get.type(card, 'trick') == 'equip') return false;
                                    },
                                },
                                xianfa_6: {
                                    marktrxt: '七',
                                    mark: true,
                                    intro: {
                                        content: '无法使用或打出锦囊牌',
                                    },
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (get.type(card, 'trick') == 'trick') return false;
                                        },
                                        cardUsable(card, player) {
                                            if (get.type(card, 'trick') == 'trick') return false;
                                        },
                                    },
                                },
                                xianfa_16: {
                                    marktrxt: '十七',
                                    mark: true,
                                    intro: {
                                        content: '受到的属性伤害-1',
                                    },
                                    trigger: {
                                        player: 'damageBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.nature;
                                    },
                                    content() {
                                        trigger.num--;
                                    },
                                },
                                xianfa_15: {
                                    marktrxt: '十六',
                                    mark: true,
                                    intro: {
                                        content: '受到的属性伤害+1',
                                    },
                                    trigger: {
                                        player: 'damageBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.nature;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                xianfa_14: {
                                    marktrxt: '十五',
                                    mark: true,
                                    intro: {
                                        content: '酒均视为五谷丰登',
                                    },
                                    mod: {
                                        cardname(card, player, name) {
                                            if (card.name == 'jiu') return 'wugu';
                                        },
                                    },
                                },
                                xianfa_13: {
                                    marktrxt: '十四',
                                    mark: true,
                                    intro: {
                                        content: '桃均视为桃园结义',
                                    },
                                    mod: {
                                        cardname(card, player, name) {
                                            if (card.name == 'tao') return 'taoyuan';
                                        },
                                    },
                                },
                            },
                            marktext: '法',
                            intro: {
                                name: '十七条宪法',
                                name2: '法',
                                content: '技能效果:1:不能使用或打出<殺>,2:無法響應你使用的牌;,3:摸牌階段少摸一張牌:,4:摸牌階段結束後弃置一張牌,5:手牌上限-1;,6:弃牌階段結束後弃置一張手牌,7:不能使用<錦囊牌,8:不能使用<装備牌,9: 装備牌>視為<閃,10:<錦囊牌>視為<閃>,11:單體錦囊牌視為<殺,12:獲得【謙遜】,13:獲得【禮讓】,14:桃>視為<桃園結義,15:<酒>視為<五谷豐登>,16:受到的屬性傷害+1,17:受到的屬性傷害-1',
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            init(player) {
                                if (!player.storage.xianlv) player.storage.xianlv = [];
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.xianlv.includes(1)) {
                                    player.removeSkill('xianlv_xianfa_1');
                                    event.goto(2);
                                }
                                event.targets1 = game.filterPlayer();
                                event.targets1.remove(player);
                                event.targets1.sort(lib.sort.seat);
                                ('step 1');
                                if (event.targets1.length) {
                                    event.current = event.targets1.shift();
                                    event.current.removeSkill('xianlv_xianfa_' + player.storage.xianlv);
                                    event.redo();
                                }
                                ('step 2');
                                event.videoId = lib.status.videoId++;
                                var func = function (id, bool) {
                                    var list = ['不能使用或打出杀', '无法响应你打出的牌', '摸牌阶段少摸一张牌', '摸牌阶段后弃置一张牌', '手牌上限-1', '弃牌阶段结束后弃置一张手牌', '不能使用锦囊牌', '不能使用装备牌', '装备牌视为闪', '锦囊牌视为闪', '单体锦囊视为杀', '获得【谦逊】', '获得【礼让】', '桃视为<桃园结义>', '酒视为<五谷丰登>', '受到属性伤害+1', '受到属性伤害-1'];
                                    var choiceList = ui.create.dialog('【十七条宪法】:请选择一项', 'forcebutton');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        if (player.storage.xianlv.includes(i)) str += '<div style="opacity:0.5">';
                                        str += list[i];
                                        if (player.storage.xianlv.includes(i)) str += '</div>';
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                event.dialog = func(event.videoId);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('selectButton', 1);
                                next.set('filterButton', function (button) {
                                    if (player.storage.xianlv.includes(button.link)) return false;
                                    return true;
                                });
                                ('step 3');
                                player.storage.xianlv = result.links;
                                if (result.links == 1) {
                                    player.addSkill('xianlv_xianfa_1');
                                    event.dialog.close();
                                    for (var i of result.links) {
                                        game.log(player, '选择了', '#g【十七条宪法】', '的', '#y选项' + get.cnNumber(i + 1, true));
                                    }
                                    event.finish();
                                } else {
                                    event.targets = game.filterPlayer();
                                    event.targets.remove(player);
                                    event.targets.sort(lib.sort.seat);
                                    player.line(event.targets, 'green');
                                    event.dialog.close();
                                }
                                for (var i of result.links) {
                                    game.log(player, '选择了', '#g【十七条宪法】', '的', '#y选项' + get.cnNumber(i + 1, true));
                                }
                                ('step 4');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    event.current.addSkill('xianlv_xianfa_' + result.links);
                                    event.redo();
                                }
                            },
                        },
                        yanfei_danhuo: {
                            group: 'yanfei_danhuo_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.unmarkSkill('yanfei_danhuo');
                                    },
                                },
                            },
                            trigger: {
                                player: 'useCardAfter',
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.yanfei_danhuo.length;
                                },
                            },
                            init(player) {
                                if (!player.storage.yanfei_danhuo) player.storage.yanfei_danhuo = [];
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                var type = get.type(event.card);
                                return (
                                    player.getHistory('custom', function (evt) {
                                        return evt.danhuo_name == type;
                                    }).length == 0
                                );
                            },
                            content() {
                                'step 0';
                                event.type = get.type(trigger.card);
                                player.getHistory('custom').push({ danhuo_name: event.type });
                                player.draw();
                                ('step 1');
                                if (player.countCards('he')) {
                                    player.chooseCard('he', '将一张牌置于武将牌上作为<印>', true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.yanfei_danhuo = player.storage.yanfei_danhuo.concat(result.cards);
                                    player.markSkill('yanfei_danhuo');
                                    game.log(player, '将', result.cards, '置于武将牌上作为<印>');
                                }
                            },
                        },
                        jieqi: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.getStorage('yanfei_danhuo').length;
                            },
                            prompt2(event) {
                                return '移去一张<印>将此次伤害改为火属性';
                            },
                            check(event, player) {
                                var eff = 0;
                                for (var i = 0; i < event.player.length; i++) {
                                    var target = event.player[i];
                                    var eff1 = get.damageEffect(target, player, player);
                                    var eff2 = get.damageEffect(target, player, player, 'fire');
                                    eff += eff2;
                                    eff -= eff1;
                                }
                                return eff >= 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var cards = player.getStorage('yanfei_danhuo');
                                if (cards.length == 1)
                                    event._result = {
                                        bool: true,
                                        links: cards.slice(0),
                                    };
                                else player.chooseButton(['选择移去一张<印>', cards], true);
                                ('step 1');
                                player.unmarkAuto('yanfei_danhuo', result.links);
                                game.cardsDiscard(result.links);
                                trigger.nature = 'fire';
                            },
                        },
                        kong_lvli: {
                            group: 'kong_lvli_give',
                            subSkill: {
                                give: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.kong_lvli && player.storage.kong_lvli.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCardButton(player.storage.kong_lvli, '【旅历】:请选择一张【旅】', true);
                                        ('step 1');
                                        var card = result.links[0];
                                        event.card = card;
                                        player
                                            .chooseTarget(true, `请选择要获得${get.translation(event.card)}的角色`)
                                            .set('ai', function (target) {
                                                var att = get.attitude(_status.event.player, target);
                                                var card = _status.event.card;
                                                var val = get.value(card);
                                                if (target.hasSkillTag('nogain')) att /= 10;
                                                return att * val;
                                            })
                                            .set('card', event.card);
                                        ('step 2');
                                        var target = result.targets[0];
                                        event.target = target;
                                        target.gain(card, 'fromStorage');
                                        player.$throw(card);
                                        player.storage.kong_lvli.remove(card);
                                        game.log(target, '获得了', card);
                                        if (!player.storage.kong_lvli.length) {
                                            player.unmarkSkill('kong_lvli');
                                            event.finish();
                                        } else {
                                            player.markSkill('kong_lvli');
                                        }
                                        ('step 3');
                                        event.target.chooseCard('选择任意张手牌与<旅>交换', [1, Math.min(event.target.countCards('h'), player.storage.kong_lvli.length)]).set('promptx', [player.storage.kong_lvli]).ai = function (card) {
                                            var val = get.value(card);
                                            if (val < 0) return 10;
                                            if (event.target.skipList.includes('phaseUse')) {
                                                return val;
                                            }
                                            return -val;
                                        };
                                        ('step 4');
                                        if (result.bool) {
                                            event.target.lose(result.cards, ui.special, 'toStorage');
                                            event.cards2 = result.cards;
                                            event.num = result.cards.length;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 5');
                                        event.target.chooseCardButton(player.storage.kong_lvli, `选择${event.num}张牌作为手牌`, event.num, true).ai = function (button) {
                                            var val = get.value(button.link);
                                            if (val < 0) return -10;
                                            if (event.target.skipList.includes('phaseUse')) {
                                                return -val;
                                            }
                                            return val;
                                        };
                                        if (player == game.me && !event.isMine()) {
                                        }
                                        ('step 6');
                                        event.target.gain(result.links, 'fromStorage');
                                        for (var i of result.links) {
                                            player.storage.kong_lvli.remove(i);
                                        }
                                        if (player == game.me && _status.auto) {
                                        }
                                        ('step 7');
                                        player.storage.kong_lvli = player.storage.kong_lvli.concat(event.cards2);
                                    },
                                    ai: {
                                        order: 1,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player, name) {
                                var target = name == 'damageSource' ? event.player : event.source;
                                return target.isAlive() && player.storage.kong_lvli.length < game.countGroup() && target.countCards('h') > 0;
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                            },
                            init(player, skill) {
                                player.storage.kong_lvli = [];
                            },
                            content() {
                                'step 0';
                                var target = event.triggername == 'damageSource' ? trigger.player : trigger.source;
                                event.target = target;
                                player.choosePlayerCard(target, 'h', true);
                                ('step 1');
                                if (result.bool) {
                                    event.target.$give(result.links, player, false);
                                    event.target.lose(result.links, ui.special, 'toStorage');
                                    player.storage.kong_lvli = player.storage.kong_lvli.concat(result.links);
                                    player.markSkill('kong_lvli');
                                }
                                ('step 2');
                            },
                        },
                        nizao: {
                            audio: 'longdan_sha',
                            audioname: ['re_zhaoyun'],
                            hiddenCard(player, name) {
                                return player.countCards('h', { name: player.storage.nizao[name] });
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
                            init(player) {
                                player.storage.nizao = {
                                    sha: 'shan',
                                    shan: 'sha',
                                    tao: 'jiu',
                                    jiu: 'tao',
                                    shunshou: 'guohe',
                                    guohe: 'shunshou',
                                    wugu: 'wuzhong',
                                    wuzhong: 'wugu',
                                    jiedao: 'taoyuan',
                                    taoyuan: 'jiedao',
                                    juedou: 'huogong',
                                    huogong: 'juedou',
                                    tiesuo: 'wuxie',
                                    wuxie: 'tiesuo',
                                    bingliang: 'lebu',
                                    lebu: 'bingliang',
                                    nanman: 'wanjian',
                                    wanjian: 'nanman',
                                };
                            },
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                if (event._backup.filterCard({ name: player.storage.nizao[card.name] }, player, event)) {
                                    return true;
                                }
                                return false;
                            },
                            filter(event, player) {
                                for (var i in player.storage.nizao) {
                                    if (player.countCards('h', { name: i }) && event.filterCard({ name: player.storage.nizao[i] }, player, event)) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            position: 'hes',
                            //你可以将一张牌按以下组合相互转化以使用: 1,[杀]和[闪];2,[桃]和[酒];3,[过河拆桥]和[顺手牵羊]; 4,[无中生有] 和[五谷丰登] ; 5,[借刀杀人]和[桃园结义] ; 6,[决斗]和[火攻] ; 7, [无懈可击] 和[铁索连环];8,[兵粮寸断]和[乐不思蜀];9,[南蛮入侵]和[万箭齐发]
                            check(card) {
                                const name = _status.event.player.storage.nizao[card.name];
                                if (name) {
                                    return _status.event.player.getUseValue({ name: name });
                                }
                            },
                            viewAs(cards, player) {
                                var name = false;
                                if (cards?.length) {
                                    name = player.storage.nizao[cards[0].name];
                                }
                                if (name) return { name: name };
                                return null;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'shan';
                                            break;
                                        case 'respondShan':
                                            name = 'sha';
                                            break;
                                    }
                                    if (!player.countCards('h', name)) return false;
                                },
                                order(item, player) {
                                    var max = 0;
                                    for (var i in player.storage.nizao) {
                                        if (player.countCards('h', { name: i }) && player.getUseValue({ name: player.storage.nizao[i] }) > 0) {
                                            var temp = get.order({ name: player.storage.nizao[i] });
                                            if (temp > max) max = temp;
                                        }
                                    }
                                    return max;
                                },
                            },
                        },
                        jingshou: {
                            group: 'jingshou_discard',
                            subSkill: {
                                discard: {
                                    trigger: {
                                        global: ['loseAfter'],
                                    },
                                    filter(event, player) {
                                        return event.type == 'discard' && event.cards2.length >= 2 && player.storage.kong_lvli && player.storage.kong_lvli[0];
                                    }, //QQQ
                                    content() {
                                        'step 0';
                                        player.chooseCardButton(player.storage.kong_lvli, '【旅历】:请选择一张【旅】', true);
                                        ('step 1');
                                        var card = result.links[0];
                                        player.gain(card, 'fromStorage');
                                        player.$throw(card);
                                        player.storage.kong_lvli.remove(card);
                                        game.log(player, '获得了', card);
                                        if (!player.storage.kong_lvli.length) {
                                            player.unmarkSkill('kong_lvli');
                                            event.finish();
                                        } else {
                                            player.markSkill('kong_lvli');
                                        }
                                    },
                                    ai: {
                                        threaten: 1.1,
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                global: ['useCardToTargeted'],
                            },
                            init(player, skill) {
                                player.storage.kong_lvli = [];
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'delay' && player.storage.kong_lvli[0];
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton(player.storage.kong_lvli, '【旅历】:请选择一张【旅】', true);
                                ('step 1');
                                var card = result.links[0];
                                player.gain(card, 'fromStorage');
                                player.$throw(card);
                                player.storage.kong_lvli.remove(card);
                                game.log(player, '获得了', card);
                                if (!player.storage.kong_lvli.length) {
                                    player.unmarkSkill('kong_lvli');
                                    event.finish();
                                } else {
                                    player.markSkill('kong_lvli');
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        yun_chuangsheng: {
                            group: ['yun_chuangsheng_phase', 'yun_chuangsheng_lit', 'yun_chuangsheng_use'],
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('yun_chuangsheng_use2');
                                    },
                                    content() {
                                        player.addTempSkill('yun_chuangsheng_use2');
                                    },
                                },
                                use2: {},
                                phase: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase != player) return false;
                                        var type = get.type(event.card);
                                        return (
                                            player.getHistory('custom', function (evt) {
                                                return evt.chuangsheng_type == type;
                                            }).length == 0
                                        );
                                    },
                                    content() {
                                        var type = get.type(trigger.card);
                                        player.draw();
                                        player.getHistory('custom').push({ chuangsheng_type: type });
                                    },
                                },
                                lit: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('yun_chuangsheng_lit2');
                                    },
                                    content() {
                                        player.addTempSkill('yun_chuangsheng_lit2');
                                    },
                                },
                                lit2: {},
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('yun_chuangsheng_lit2') && !player.hasSkill('yun_chuangsheng_use2') && player != _status.currentPhase;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        wangfan: {
                            audio: 'ext:原神杀/audio:2',
                            enable: 'phaseUse',
                            discard: false,
                            filter(event, player) {
                                if (player.hasJudge('lebu')) return false;
                                return player.countCards('h') > 0;
                            },
                            viewAs: {
                                name: 'lebu',
                            },
                            position: 'h',
                            filterCard(card, player, event) {
                                return player.canAddJudge({ name: 'lebu', cards: [card] });
                            },
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            check(card) {
                                return 9 - get.value(card);
                            },
                            onuse(links, player) {
                                player.draw();
                            },
                            ai: {
                                result: {
                                    target: 1,
                                },
                                order: 12,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                        },
                        guanjing: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hej') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('basic', 'equip', 'trick', 'delay').set('ai', function (event) {
                                    switch (Math.floor(Math.random() * 6)) {
                                        case 0:
                                            return 'equip';
                                        case 1:
                                        case 4:
                                        case 5:
                                        case 6:
                                            return 'basic';
                                        case 2:
                                            return 'trick';
                                        case 3:
                                            return 'delay';
                                    }
                                });
                                ('step 1');
                                event.choice = result.control;
                                player.chooseToDiscard(get.prompt2('guanjing'), [1, player.maxHp], 'hej').set('ai', function (card) {
                                    if (get.type(card) == 'delay') return 10;
                                    return 7 - get.value(card);
                                });
                                ('step 2');
                                if (result.bool) {
                                    event.cards = get.cards(2 * result.cards.length);
                                    player.showCards(event.cards);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                var gained = [];
                                var tothrow = [];
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.type(i) == event.choice) {
                                            gained.push(i);
                                        } else {
                                            tothrow.push(i);
                                        }
                                    }
                                player.gain(gained, 'gain2');
                                game.cardsDiscard(tothrow);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        liaodong: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'damageBegin2',
                            },
                            filter(event, player) {
                                return get.itemtype(event.source) == 'player';
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (!trigger.source.countCards('h')) event._result = { index: 0 };
                                else
                                    trigger.source.chooseControlList([`对${get.translation(player)}造成的伤害-1摸一张牌.`, '弃置一张牌'], true).set('ai', function (event, player) {
                                        var target = _status.event.parent.player;
                                        var player = _status.event.player;
                                        if (get.attitude(player, target) < 0) return 1;
                                        return 0;
                                    });
                                ('step 2');
                                if (result.index == 1) {
                                    trigger.source.chooseToDiscard('he', true);
                                    event.finish();
                                } else {
                                    trigger.source.draw();
                                    trigger.num--;
                                }
                            },
                        },
                        buju: {
                            subSkill: {
                                use: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (_status.currentPhase != player) return;
                                            if (player.countUsed() >= player.storage.buju) return false;
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                'step 0';
                                var num;
                                if (player.hp == 3 && player.countCards('h') == 0) {
                                    num = 3;
                                } else if (player.hp >= 3 && player.countCards('h') >= 2) {
                                    num = 3;
                                }
                                var map = {};
                                var list = [];
                                for (var i = 1; i <= player.maxHp; i++) {
                                    var cn = get.cnNumber(i, true);
                                    map[cn] = i;
                                    list.push(cn);
                                }
                                event.map = map;
                                player
                                    .chooseControl(list, function () {
                                        return get.cnNumber(_status.event.goon, true);
                                    })
                                    .set('prompt', '摸任意张牌')
                                    .set('goon', num);
                                ('step 1');
                                var num = event.map[result.control];
                                player.storage.buju = num == player.maxHp ? 1 : player.maxHp - num;
                                player.draw(num);
                                player.addTempSkill('buju_use');
                            },
                            ai: {
                                threaten: 3,
                            },
                        },
                        shengli: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            usable: 1,
                            filter(event, player) {
                                return !event.nature;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(1);
                                player.showCards(event.cards);
                                ('step 1');
                                var card = cards[0];
                                var bool1 = game.hasPlayer(function (current) {
                                    return player.canUse(card, current, false);
                                });
                                if (bool1) {
                                    player
                                        .chooseControl(function () {
                                            return 0;
                                        })
                                        .set('choiceList', [`使用${get.translation(cards)}.(没有距离限制)`, '摸一张牌'])
                                        .set('ai', function () {
                                            return _status.event.choice;
                                        })
                                        .set('choice', player.getUseValue(card, false) > 1 ? 0 : 1);
                                } else {
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    player.draw();
                                    event.finish();
                                }
                                ('step 2');
                                var card = cards[0];
                                if (result && typeof event.directindex != 'number') {
                                    event.directindex = result.index;
                                }
                                if (event.directindex == 1) {
                                    player.draw();
                                } else {
                                    player.chooseUseTarget(card, true, false, 'nodistance');
                                }
                            },
                        },
                        lsly_yexing: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (get.color(card) == 'black') return true;
                                },
                            },
                        },
                        xinkai: {
                            audio: 'ext:原神杀/audio:3',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (player.countCards('he', { suit: 'heart' }) > 0 || player.countCards('he', { type: 'equip' }) > 0) && !player.storage.xinkai_mark;
                            },
                            filterCard(card) {
                                return card.suit == 'heart' || get.type(card) == 'equip';
                            },
                            check(card) {
                                return 9 - get.value(card);
                            },
                            position: 'he',
                            discard: false,
                            toStorage: true,
                            prompt: '将一张♥️️️牌或装备牌置于你的武将牌上作为【护心铠】',
                            content() {
                                player.addSkill('xinkai_mark');
                                player.storage.xinkai_mark = cards;
                                game.log(player, '将', cards, '置于武将牌上作为【护心铠】');
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 1;
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['xinkai_recover', 'xinkai_damage'],
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '铠',
                                    name: '护心铠',
                                    intro: {
                                        content: 'cards',
                                    },
                                },
                                recover: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        source: ['damageSource'],
                                    },
                                    filter(event, player) {
                                        return (
                                            event.card &&
                                            event.card.name == 'sha' &&
                                            player.storage.xinkai_mark &&
                                            game.hasPlayer(function (current) {
                                                return current.isDamaged() && current != event.player;
                                            })
                                        );
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var num = [0, 1].randomGet();
                                        if (player.hasSkill('saochu_sha')) num = 1;
                                        if (num == 1) event.goto(1);
                                        else event.finish();
                                        ('step 1');
                                        player
                                            .chooseTarget(get.prompt('xinkai'), '令除受伤角色外的一名角色回复一点体力', function (card, player, target) {
                                                return target.hp < target.maxHp && target != trigger.player;
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(_status.event.player, target);
                                            });
                                        ('step 2');
                                        if (result.targets?.length) {
                                            result.targets[0].recover();
                                        }
                                    },
                                    audioname2: {
                                        key_shiki: 'shiki_omusubi',
                                    },
                                },
                                damage: {
                                    audio: 'xinkai',
                                    trigger: {
                                        player: ['damageBegin'],
                                    },
                                    filter(event, player) {
                                        return player.storage.xinkai_mark;
                                    },
                                    forced: true,
                                    content() {
                                        var card = player.storage.xinkai_mark[0];
                                        game.cardsDiscard(card);
                                        player.$throw(card);
                                        player.storage.xinkai_mark.remove(card);
                                        game.log(card, '进入了弃牌堆');
                                        player.removeSkill('xinkai_mark');
                                        trigger.cancel();
                                        game.log(player, '防止了伤害');
                                        if (player.isLinked()) player.link();
                                    },
                                    audioname2: {
                                        key_shiki: 'shiki_omusubi',
                                    },
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        saochu: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            filter(event, player) {
                                return player.storage.xinkai_mark;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var card = player.storage.xinkai_mark[0];
                                game.cardsDiscard(card);
                                player.$throw(card);
                                player.storage.xinkai_mark.remove(card);
                                game.log(card, '进入了弃牌堆');
                                player.removeSkill('xinkai_mark');
                                ('step 1');
                                player.draw(2);
                                player.addTempSkill('saochu_sha');
                            },
                            subSkill: {
                                sha: {
                                    audio: 'saochu',
                                    enable: 'chooseToUse',
                                    filterCard(card, player) {
                                        return true;
                                    },
                                    position: 'hes',
                                    viewAs: { name: 'sha' },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hes')) return false;
                                    },
                                    prompt: '将一张牌当【杀】使用',
                                    check(card) {
                                        return 5 - get.value(card);
                                    },
                                    ai: {
                                        skillTagFilter(player) {
                                            if (!player.countCards('hes')) return false;
                                        },
                                    },
                                    mod: {
                                        targetInRange(card, player, target, now) {
                                            if (card.name == 'sha') return true;
                                        },
                                        selectTarget(card, player, range) {
                                            if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++;
                                        },
                                    },
                                },
                            },
                        },
                        yusheng_chuangsheng: {
                            subSkill: {
                                basic: {
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        if ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'jiu' }, player, event) || event.filterCard({ name: 'tao' }, player, event)) {
                                            return player.hasCard(function (card) {
                                                return card.name == 'hua_drawbasic' || card.name == 'hua_linkbasic' || card.name == 'hua_gainbasic' || card.name == 'hua_discardbasic';
                                            }, 'h');
                                        }
                                        return false;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                                list.push(['基本', '', 'sha']);
                                                list.push(['基本', '', 'sha', 'fire']);
                                                list.push(['基本', '', 'sha', 'thunder']);
                                                list.push(['基本', '', 'sha', 'ice']);
                                            }
                                            if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                                list.push(['基本', '', 'tao']);
                                            }
                                            if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
                                                list.push(['基本', '', 'jiu']);
                                            }
                                            return ui.create.dialog('阳华', [list, 'vcard'], 'hidden');
                                        },
                                        check(button) {
                                            var player = _status.event.player;
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
                                                        if (player.countCards('h', { name: 'sha' }) >= 0) return 3;
                                                    }
                                                    case 'sha':
                                                        if (button.link[3] == 'fire') return 2.95;
                                                        else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                                                        else return 2.9;
                                                }
                                            }
                                            return 0;
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard(card, player, target) {
                                                    return card.name == 'hua_drawbasic' || card.name == 'hua_linkbasic' || card.name == 'hua_gainbasic' || card.name == 'hua_discardbasic';
                                                },
                                                check(card, player, target) {
                                                    return 9 - get.value(card);
                                                },
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                                position: 'h',
                                                popname: true,
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张华当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
                                        },
                                    },
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            var event = _status.event;
                                            if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0 && player.countCards('h', { type: 'basic' }) >= 2) {
                                                return 3.3;
                                            }
                                            return 3.1;
                                        },
                                        respondSha: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (
                                                player.hasCard(function (card) {
                                                    return card.name == 'hua_drawbasic' || card.name == 'hua_linkbasic' || card.name == 'hua_gainbasic' || card.name == 'hua_discardbasic';
                                                }, 'h')
                                            ) {
                                                if (tag == 'respondSha') {
                                                    if (arg != 'use') return false;
                                                }
                                            } else {
                                                return false;
                                            }
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                tao: {
                                    enable: 'chooseToUse',
                                    viewAsFilter(player) {
                                        return player.hasCard(function (card) {
                                            return card.name == 'hua_drawbasic' || card.name == 'hua_linkbasic' || card.name == 'hua_gainbasic' || card.name == 'hua_discardbasic';
                                        }, 'h');
                                    },
                                    filterCard(card) {
                                        return card.name == 'hua_drawbasic' || card.name == 'hua_linkbasic' || card.name == 'hua_gainbasic' || card.name == 'hua_discardbasic';
                                    },
                                    position: 'h',
                                    viewAs: {
                                        name: 'tao',
                                    },
                                    prompt: '将一张华当桃使用',
                                    check(card) {
                                        return 1;
                                    },
                                    ai: {
                                        threaten: 1.5,
                                        basic: {
                                            order(card, player) {
                                                if (player.hasSkillTag('pretao')) return 5;
                                                return 2;
                                            },
                                            useful: [8, 6.5, 5, 4],
                                            value: [8, 6.5, 5, 4],
                                        },
                                        result: {
                                            target: 2,
                                            target_use(player, target) {
                                                // if(player==target&&player.hp<=0) return 2;
                                                if (player.hasSkillTag('nokeep', true, null, true)) return 2;
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
                                shan: {
                                    enable: 'chooseToUse',
                                    viewAsFilter(player) {
                                        return player.hasCard(function (card) {
                                            return card.name == 'hua_drawbasic' || card.name == 'hua_linkbasic' || card.name == 'hua_gainbasic' || card.name == 'hua_discardbasic';
                                        }, 'h');
                                    },
                                    filterCard(card) {
                                        return card.name == 'hua_drawbasic' || card.name == 'hua_linkbasic' || card.name == 'hua_gainbasic' || card.name == 'hua_discardbasic';
                                    },
                                    position: 'h',
                                    viewAs: {
                                        name: '闪',
                                    },
                                    prompt: '将一张华当闪使用',
                                    check(card) {
                                        return 1;
                                    },
                                    ai: {
                                        threaten: 1.5,
                                    },
                                },
                                wuxie: {
                                    enable: 'chooseToUse',
                                    viewAsFilter(player) {
                                        return player.hasCard(function (card) {
                                            return card.name == 'hua_drawbasic' || card.name == 'hua_linkbasic' || card.name == 'hua_gainbasic' || card.name == 'hua_discardbasic';
                                        }, 'h');
                                    },
                                    filterCard(card) {
                                        return card.name == 'hua_drawbasic' || card.name == 'hua_linkbasic' || card.name == 'hua_gainbasic' || card.name == 'hua_discardbasic';
                                    },
                                    position: 'h',
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    prompt: '将一张华当无懈使用',
                                    check(card) {
                                        return 1;
                                    },
                                    ai: {
                                        threaten: 1.5,
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
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'enterGame',
                                global: 'gameDrawAfter',
                            },
                            init(player) {
                                player.storage.chuangsheng_choose = [];
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard('请选择变为【华】的手牌', 'h', true);
                                ('step 1');
                                player.showCards(event.card);
                                event.card = result.cards[0];
                                event.videoId = lib.status.videoId++;
                                var func = function (card, id, bool) {
                                    var list = ['摸两张牌', '可将此牌当做任意一张基本牌或无懈可击打出', '改变场上至多两名角色的连环状态', '获得一名角色一张手牌', '弃置一名角色一张牌'];
                                    var choiceList = ui.create.dialog('【创生】:请选择两项', 'forcebutton');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        str += list[i];
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func);
                                }
                                event.dialog = func(event.videoId);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('selectButton', 2);
                                next.set('filterButton', function (button) {
                                    if (player.storage.chuangsheng_choose.includes(button.link)) return false;
                                    return true;
                                });
                                next.set('ai', function (button) {
                                    switch (button.link) {
                                        case 0: {
                                            return Math.random();
                                        }
                                        case 1: {
                                            return Math.random();
                                        }
                                        case 2: {
                                            return 0.5 + Math.random();
                                        }
                                        case 3: {
                                            return Math.random();
                                        }
                                        case 4: {
                                            return Math.random();
                                        }
                                    }
                                });
                                ('step 2');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                player.storage.yanghua = event.card;
                                event.choose = [];
                                for (var i of result.links) {
                                    event.choose.push(i);
                                    player.storage.chuangsheng_choose.add(i);
                                    game.log(player, '选择了', '#g【华】', '的', '#y选项' + get.cnNumber(i + 1, true));
                                }
                                ('step 3');
                                var suit = lib.suit.randomGet();
                                var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet();
                                if (event.choose.includes(0) && event.choose.includes(1)) {
                                    event.card.init([suit, number, 'hua_drawbasic']);
                                }
                                if (event.choose.includes(2) && event.choose.includes(1)) {
                                    event.card.init([suit, number, 'hua_linkbasic']);
                                }
                                if (event.choose.includes(3) && event.choose.includes(1)) {
                                    event.card.init([suit, number, 'hua_gainbasic']);
                                }
                                if (event.choose.includes(4) && event.choose.includes(1)) {
                                    event.card.init([suit, number, 'hua_discardbasic']);
                                }
                                if (event.choose.includes(0) && event.choose.includes(2)) {
                                    event.card.init([suit, number, 'hua_drawlink']);
                                }
                                if (event.choose.includes(0) && event.choose.includes(3)) {
                                    event.card.init([suit, number, 'hua_drawgain']);
                                }
                                if (event.choose.includes(0) && event.choose.includes(4)) {
                                    event.card.init([suit, number, 'hua_drawdiscard']);
                                }
                                if (event.choose.includes(2) && event.choose.includes(3)) {
                                    event.card.init([suit, number, 'hua_linkgain']);
                                }
                                if (event.choose.includes(2) && event.choose.includes(4)) {
                                    event.card.init([suit, number, 'hua_linkdiscard']);
                                }
                                if (event.choose.includes(3) && event.choose.includes(4)) {
                                    event.card.init([suit, number, 'hua_gaindiscard']);
                                }
                            },
                        },
                        yusheng_yanghua: {
                            subSkill: {
                                distance: {
                                    charlotte: true,
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    mark: true,
                                    marktext: '华',
                                    intro: {
                                        content: 'cards',
                                        onunmark: 'throw',
                                    },
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var cards = player.storage.yusheng_yanghua_distance;
                                        if (cards) {
                                            player.gain(cards, 'gain2');
                                        }
                                        player.storage.yusheng_yanghua_distance = 0;
                                        ('step 1');
                                        player.removeSkill('yusheng_yanghua_distance');
                                    },
                                    mod: {
                                        globalTo(from, to, distance) {
                                            if (from != to && to.storage.yusheng_yanghua_distance) return distance + 1;
                                        },
                                    },
                                },
                            },
                            init(player, skill) {
                                player.storage.yanghua = [];
                            },
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                var cards = event.cards;
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (i == player.storage.yanghua && get.position(i, true) == 'd') return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.cards = [];
                                var cards = trigger.cards;
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (i && get.position(i, true) == 'd') event.cards.push(i);
                                    }
                                ('step 1');
                                player.chooseCardButton(event.cards, '【阳华】:请选择其中的【华】', true);
                                ('step 2');
                                event.card = result.links[0];
                                event.videoId = lib.status.videoId++;
                                var func = function (card, id, bool) {
                                    var list = ['摸两张牌', '可将此牌当做任意一张基本牌或无懈可击打出', '改变场上至多两名角色的连环状态', '获得一名角色一张手牌', '弃置一名角色一张牌'];
                                    var choiceList = ui.create.dialog('【创生】:请选择两项', 'forcebutton');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        if (player.storage.chuangsheng_choose.includes(i)) str += '<div style="opacity:0.5">';
                                        str += list[i];
                                        if (player.storage.chuangsheng_choose.includes(i)) str += '</div>';
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func);
                                }
                                event.dialog = func();
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('selectButton', 2);
                                next.set('filterButton', function (button) {
                                    if (player.storage.chuangsheng_choose.includes(button.link)) return false;
                                    return true;
                                });
                                next.set('ai', function (button) {
                                    switch (button.link) {
                                        case 0: {
                                            return Math.random();
                                        }
                                        case 1: {
                                            return Math.random();
                                        }
                                        case 2: {
                                            return 0.5 + Math.random();
                                        }
                                        case 3: {
                                            return Math.random();
                                        }
                                        case 4: {
                                            return Math.random();
                                        }
                                    }
                                });
                                ('step 3');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                player.storage.yanghua = event.card;
                                player.storage.chuangsheng_choose = [];
                                event.choose = [];
                                for (var i of result.links) {
                                    event.choose.push(i);
                                    player.storage.chuangsheng_choose.push(i);
                                    game.log(player, '选择了', '#g【华】', '的', '#y选项' + get.cnNumber(i + 1, true));
                                }
                                ('step 4');
                                var suit = lib.suit.randomGet();
                                var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet();
                                if (event.choose.includes(0) && event.choose.includes(1)) {
                                    event.card.init([suit, number, 'hua_drawbasic']);
                                }
                                if (event.choose.includes(2) && event.choose.includes(1)) {
                                    event.card.init([suit, number, 'hua_linkbasic']);
                                }
                                if (event.choose.includes(3) && event.choose.includes(1)) {
                                    event.card.init([suit, number, 'hua_gainbasic']);
                                }
                                if (event.choose.includes(4) && event.choose.includes(1)) {
                                    event.card.init([suit, number, 'hua_discardbasic']);
                                }
                                if (event.choose.includes(0) && event.choose.includes(2)) {
                                    event.card.init([suit, number, 'hua_drawlink']);
                                }
                                if (event.choose.includes(0) && event.choose.includes(3)) {
                                    event.card.init([suit, number, 'hua_drawgain']);
                                }
                                if (event.choose.includes(0) && event.choose.includes(4)) {
                                    event.card.init([suit, number, 'hua_drawdiscard']);
                                }
                                if (event.choose.includes(2) && event.choose.includes(3)) {
                                    event.card.init([suit, number, 'hua_linkgain']);
                                }
                                if (event.choose.includes(2) && event.choose.includes(4)) {
                                    event.card.init([suit, number, 'hua_linkdiscard']);
                                }
                                if (event.choose.includes(3) && event.choose.includes(4)) {
                                    event.card.init([suit, number, 'hua_gaindiscard']);
                                }
                                ('step 5');
                                player
                                    .chooseTarget(true, `请选择要获得${get.translation(event.card)}的角色`)
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        var card = _status.event.card;
                                        var val = get.value(card);
                                        if (target.hasSkillTag('nogain')) att /= 10;
                                        return att * val;
                                    })
                                    .set('card', event.card);
                                ('step 6');
                                var target = result.targets[0];
                                target.addSkill('yusheng_yanghua_distance');
                                target.storage.yusheng_yanghua_distance = event.card;
                                target.markSkill('yusheng_yanghua_distance');
                            },
                        },
                        tianhua: {
                            group: 'tianhua_wugu',
                            subSkill: {
                                wugu: {
                                    enable: 'phaseUse',
                                    viewAs: {
                                        name: 'wugu',
                                    },
                                    usable: 1,
                                    filterCard: {
                                        suit: 'heart',
                                    },
                                    filter(event, player) {
                                        return player.countCards('h', { suit: 'heart' }) > 0;
                                    },
                                    check(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai: {
                                        wuxie() {
                                            if (Math.random() < 0.5) return 0;
                                        },
                                        basic: {
                                            order: 3,
                                            useful: 1,
                                        },
                                        result: {
                                            target(player, target) {
                                                if (get.is.versus()) {
                                                    if (target == player) return 1.5;
                                                    return 1;
                                                }
                                                if (player.hasUnknown(2)) {
                                                    return 0;
                                                }
                                                return 2 - (2 * get.distance(player, target, 'absolute')) / game.countPlayer();
                                            },
                                        },
                                        tag: {
                                            draw: 1,
                                            multitarget: 1,
                                        },
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                if (event.card.name != 'wugu') return false;
                                if (get.info(event.card).multitarget) return false;
                                if (event.targets.length < 2) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('tianhua'), [1, trigger.targets.length], function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        if (game.phaseNumber > game.players.length * 2 && trigger.targets.length >= game.players.length - 1 && !trigger.excluded.includes(target)) {
                                            return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        }
                                        return -1;
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.excluded.addArray(result.targets);
                                    player.useCard({ name: 'wanjian' }, result.targets);
                                }
                            },
                        },
                        linji: {
                            audio: 'ext:原神杀/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { suit: 'club' }) > 0;
                            },
                            filterTarget(card, player, target) {
                                return target != player && !target.hasSkill('linji_1');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard(
                                        'h',
                                        true,
                                        function (card) {
                                            return card.suit == 'club';
                                        },
                                        `麟迹:将1张♣️️️牌置于${get.translation(target)}的武将牌上`,
                                        true
                                    )
                                    .set('ai', function (card) {
                                        if (get.attitude(_status.event.player, _status.event.parent.player) < 0) {
                                            return 7 - get.value(card);
                                        }
                                        return -get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.$give(result.cards, target);
                                    player.lose(result.cards, ui.special);
                                    target.storage.linji_1 = result.cards;
                                    target.storage.linji_1_source = player;
                                    target.addSkill('linji_1');
                                } else event.finish();
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -1,
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content: 'cards',
                                    },
                                    content() {
                                        'step 0';
                                        player.judge();
                                        ('step 1');
                                        event.card = result.card;
                                        var cards = player.storage.linji_1;
                                        event.suit = result.card.suit;
                                        var list = ['受到伤害'];
                                        if (player.countCards('he', { suit: event.suit })) list.push('弃置牌');
                                        player.chooseControl(list).set('ai', function () {
                                            return list.randomGet();
                                        });
                                        ('step 2');
                                        if (result.control == '受到伤害') {
                                            player.damage('ice');
                                            player.storage.linji_1_source.gain(event.card, 'gain2');
                                        } else {
                                            player.chooseToDiscard('he', true, function (card) {
                                                return card.suit == event.suit;
                                            });
                                            player.addTempSkill('linji_disable');
                                            if (!player.storage.linji_disable) player.storage.linji_disable = [];
                                            player.storage.linji_disable.push(player.storage.linji_1_source);
                                        }
                                        ('step 3');
                                        player.removeSkill('linji_1');
                                    },
                                },
                                disable: {
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            if (player.storage.linji_disable && player.storage.linji_disable.includes(target)) return false;
                                        },
                                    },
                                    charlotte: true,
                                    mark: true,
                                    marktext: '禁',
                                    intro: {
                                        content: '本回合内不能对$使用牌',
                                    },
                                },
                            },
                        },
                        chenxian: {
                            trigger: {
                                player: ['phaseUseBefore'],
                            },
                            forced: true,
                            audio: 'ext:原神杀/audio:2',
                            content() {
                                trigger.cancel();
                                game.log(player, '跳过了出牌阶段');
                            },
                            group: ['chenxian_use'],
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: ['gainAfter'],
                                    },
                                    forced: true,
                                    audio: 'ext:原神杀/audio:2',
                                    content() {
                                        player.chooseToUse({
                                            prompt: '【尘闲】是否使用一张牌？',
                                            filterCard(card, player) {
                                                return lib.filter.filterCard.apply(this, arguments);
                                            },
                                        });
                                    },
                                    audioname2: {
                                        key_shiki: 'shiki_omusubi',
                                    },
                                },
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + player.hp;
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        spchenxian: {
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + player.hp;
                                },
                            },
                        },
                        dijun: {
                            global: 'dijun_give',
                            audio: 'ext:原神杀/audio:2',
                            group: ['dijun_give'],
                            subSkill: {
                                give: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return (
                                            player.countCards('h') &&
                                            game.hasPlayer(function (current) {
                                                return current.hasSkill('dijun');
                                            })
                                        );
                                    },
                                    filterCard: true,
                                    selectCard: [1, Infinity],
                                    prompt: '选择任意张牌交给帝君',
                                    discard: false,
                                    lose: false,
                                    delay: 0,
                                    filterTarget(card, player, target) {
                                        return player != target && target.hasSkill('dijun');
                                    },
                                    check(card) {
                                        var player = get.owner(card);
                                        if (player.countCards('h') - player.hp - ui.selected.cards.length > 1) {
                                            return 9 - get.value(card);
                                        }
                                        return 5 - get.value(card);
                                    },
                                    content() {
                                        target.gain(cards, player, 'giveAuto');
                                        var evt2 = event.getParent(3);
                                        var num = 0;
                                        player.getHistory('lose', function (evt) {
                                            if (evt.getParent(2).name == 'dijun' && evt.getParent(5) == evt2) num += evt.cards.length;
                                        });
                                        if (num < 2 && num + cards.length > 1) player.recover();
                                    },
                                    ai: {
                                        order(skill, player) {
                                            if (player.hp < player.maxHp && player.countCards('h') > 1) {
                                                return 10;
                                            }
                                            return 1;
                                        },
                                        result: {
                                            target(player, target) {
                                                if (target.hasSkillTag('nogain')) return 0;
                                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                                    if (target.hasSkillTag('nodu')) return 0;
                                                    return -10;
                                                }
                                                var nh = target.countCards('h');
                                                var np = player.countCards('h');
                                                if (player.hp == player.maxHp || player.countCards('h') <= 1) {
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
                                    },
                                    audioname2: {
                                        key_shiki: 'shiki_omusubi',
                                    },
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        yanzhang: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            /*filter:function(event,player){
                  return player!=_status.currentPhase;
              },*/
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('yanzhang'), '令一名其他角色摸一张牌', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].draw();
                                }
                            },
                            group: ['yanzhang_wuxie'],
                            subSkill: {
                                wuxie: {
                                    audio: 'ext:原神杀/audio:4',
                                    enable: 'chooseToUse',
                                    filterCard(card) {
                                        return get.type(card) == 'equip';
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('h', { type: 'equip' }) > 0;
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    prompt: '将手牌中的一张装备牌当【无懈可击】使用',
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
                            },
                        },
                        spyanzhang: {
                            audio: 'yanzhang',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player != _status.currentPhase;
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('yanzhang'), '令一名角色摸一张牌').set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].draw();
                                }
                            },
                            group: ['spyanzhang_wuxie'],
                            subSkill: {
                                wuxie: {
                                    audio: 'yanzhang_wuxie',
                                    enable: 'chooseToUse',
                                    filterCard(card) {
                                        return get.type(card) == 'equip';
                                    },
                                    //position:"he",
                                    viewAsFilter(player) {
                                        return player.countCards('h', { type: 'equip' }) > 0;
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    prompt: '将手牌中的一张装备牌当【无懈可击】使用',
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
                            },
                        },
                        dc_qiyue: {
                            audio: 'ext:原神杀/audio:1',
                            limited: true,
                            init(player) {
                                player.storage.dc_qiyue = false;
                            },
                            trigger: { global: 'die' },
                            content() {
                                'step 0';
                                player.awakenSkill('dc_qiyue');
                                player.loseMaxHp();
                                if (!player.isDamaged()) player.draw(2);
                                else player.chooseDrawRecover(2, true);
                                ('step 1');
                                player.reinit(player.name, 'sp钟离', false);
                            },
                        },
                        fenyan: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                if (event.targets.length > 1 || event.target == player) return false;
                                var card = event.card;
                                if (card.name == 'sha') return true;
                                if (get.type(card) == 'trick') return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.target.link(true);
                                ('step 1');
                                var type = get.type(trigger.card);
                                if (
                                    player.getHistory('custom', function (evt) {
                                        return evt.fenyan_name == type;
                                    }).length
                                )
                                    event.finish();
                                ('step 2');
                                player
                                    .chooseTarget('【风眼】是否为此牌额外指定一个目标', function (card, player, target) {
                                        if (player == target) return false;
                                        var trigger = _status.event;
                                        return player.canUse(trigger.card, target) && trigger.targets.includes(target) == false;
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        return get.effect(target, trigger.card, player, player) + 0.01;
                                    })
                                    .set('targets', trigger.targets)
                                    .set('card', trigger.card);
                                ('step 3');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    player.line(event.target, 'green');
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                game.log(event.target, '成为了', trigger.card, '的额外目标');
                                trigger.parent.targets.push(event.target);
                                event.type = get.type(trigger.card);
                                player.getHistory('custom').push({ fenyan_name: event.type });
                                event.target.link(true);
                            },
                        },
                        fengshi: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.lianhuanable == true;
                            },
                            content() {
                                player.draw();
                                trigger.source.draw();
                            },
                        },
                        风神: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        qianjing: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed && player.hp == player.maxHp;
                            },
                            content() {
                                trigger.num += 2;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        tianquan: {
                            group: ['tianquan_sou', 'tianquan_pla'],
                            subSkill: {
                                sou: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        player: 'useCardToPlayer',
                                    },
                                    filter(event, player) {
                                        if (event.card.name == 'sha' && player.canCompare(event.target)) return true;
                                        if (event.targets.length > 1 || event.target == player) return false;
                                        if (get.type(event.card) == 'trick' && player.canCompare(event.target)) return true;
                                        return false;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.target) < 0;
                                    },
                                    logTarget(event, player) {
                                        return event.target;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToCompare(trigger.target);
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.nowuxie = true;
                                            trigger.directHit.addArray(game.players);
                                        } else {
                                            var card1 = result.player;
                                            var card2 = result.target;
                                            if (get.position(card1) == 'd') trigger.target.gain(card1, 'gain2');
                                            if (get.position(card2) == 'd') player.gain(card2, 'gain2');
                                        }
                                    },
                                },
                                pla: {
                                    audio: 'ext:原神杀/audio:3',
                                    trigger: {
                                        global: 'useCardToPlayer',
                                    },
                                    filter(event, player) {
                                        if (event.card.name == 'sha' && event.target == player && player.canCompare(event.player)) return true;
                                        if (event.targets.length > 1 || event.target != player) return false;
                                        if (get.type(event.card) == 'trick' && event.target == player && player.canCompare(event.player)) return true;
                                        return false;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    logTarget(event, player) {
                                        return event.player;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToCompare(trigger.player);
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.targets.length = 0;
                                            trigger.all_excluded = true;
                                        } else {
                                            var card1 = result.player;
                                            var card2 = result.target;
                                            if (get.position(card1) == 'd') trigger.player.gain(card1, 'gain2');
                                            if (get.position(card2) == 'd') player.gain(card2, 'gain2');
                                        }
                                    },
                                },
                            },
                        },
                        zhuolang: {
                            audio: 'ext:原神杀/audio:4',
                            trigger: {
                                global: 'damageBefore',
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.source)) return false;
                                if (get.distance(player, event.player) > 1) return false;
                                return event.source && event.source.isAlive() && player.canCompare(event.source);
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) < 0 && get.attitude(player, event.player) > 0;
                            },
                            logTarget(event, player) {
                                return event.source;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.source);
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    trigger.source.damage('thunder');
                                }
                            },
                        },
                        zhengtao: {
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            filter(event, player) {
                                return !event.iwhile;
                            },
                            forced: true,
                            content() {
                                if (player == trigger.player) {
                                    var num = player.hp > trigger.target.hp ? player.hp - trigger.target.hp : trigger.target.hp - player.hp;
                                } else {
                                    var num = player.hp > trigger.player.hp ? player.hp - trigger.player.hp : trigger.player.hp - player.hp;
                                }
                                game.log(player, '拼点牌点数+' + num);
                                if (player == trigger.player) {
                                    trigger.num1 += num;
                                } else {
                                    trigger.num2 += num;
                                }
                            },
                        },
                        dc_xianyun: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'judgeBegin',
                            },
                            forced: true,
                            charlotte: true,
                            //silent:true,
                            filter(event, player) {
                                return !event.directresult;
                            },
                            content() {
                                var tempcard = false,
                                    temp = Infinity;
                                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                    var card = ui.cardPile.childNodes[i];
                                    var temp2 = trigger.judge(card);
                                    if (temp2 < temp) {
                                        tempcard = card;
                                        temp = temp2;
                                    }
                                }
                                if (tempcard) trigger.directresult = tempcard;
                            },
                            group: ['dc_xianyun_disdraw', 'dc_xianyun_draw'],
                            subSkill: {
                                disdraw: {
                                    audio: 'dc_xianyun',
                                    trigger: {
                                        global: 'gameDrawAfter',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    content() {
                                        var card = player.getCards('h');
                                        player.lose(card, ui.cardPile);
                                    },
                                },
                                draw: {
                                    audio: 'dc_xianyun',
                                    trigger: { player: 'damageEnd' },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var cards = get.cards(trigger.num);
                                        player.loseToSpecial(cards, 'dc_xianyun_draw');
                                        ('step 1');
                                        player.markSkill('dc_xianyun_draw');
                                    },
                                    mod: {
                                        aiOrder(player, card, num) {
                                            if (get.itemtype(card) == 'card' && card.hasGaintag('dc_xianyun_draw')) return num + 0.5;
                                        },
                                    },
                                    marktext: '运',
                                    intro: {
                                        mark(dialog, storage, player) {
                                            var cards = player.getCards('s', function (card) {
                                                return card.hasGaintag('dc_xianyun_draw');
                                            });
                                            if (cards.length) {
                                                if (player == game.me || player.isUnderControl()) {
                                                    dialog.addAuto(cards);
                                                } else {
                                                    return `共有${get.cnNumber(cards.length)}张牌`;
                                                }
                                            } else return '没有牌';
                                        },
                                        markcount(storage, player) {
                                            return player.getCards('s', function (card) {
                                                return card.hasGaintag('dc_xianyun_draw');
                                            }).length;
                                        },
                                    },
                                },
                            },
                        },
                        guwu: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            check(event, player) {
                                var hs = player.getCards('h');
                                return hs.length < 4;
                            },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【鼓舞】是否弃置所有手牌,选择一名角色令其获得一张火【杀】并回复1点体力', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var num = 2;
                                        if (target.isDamaged()) num++;
                                        return num * get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var hs = player.getCards('h');
                                    player.discard(hs);
                                    player.line(result.targets[0], 'fire');
                                    result.targets[0].gain(
                                        get.cardPile(function (card) {
                                            return card.name == 'sha' && get.nature(card) == 'fire';
                                        }),
                                        'gain2'
                                    );
                                    result.targets[0].recover();
                                    result.targets[0].addTempSkill('guwu_damage', { player: 'phaseAfter' });
                                    if (result.targets[0] != player)
                                        player.gain(
                                            get.cardPile(function (card) {
                                                return get.type(card) == 'basic';
                                            }),
                                            'gain2'
                                        );
                                }
                            },
                            subSkill: {
                                damage: {
                                    mark: true,
                                    marktext: '赞',
                                    intro: {
                                        name: '鼓舞领域',
                                        content: '下次造成的伤害+1,效果持续到回合结束',
                                    },
                                    trigger: {
                                        source: 'damageBegin3',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                        game.log(player, '造成的伤害+1');
                                        player.removeSkill('guwu_damage');
                                    },
                                },
                            },
                        },
                        shizui: {
                            audio: 'ext:原神杀/audio:5',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.target) < 0) {
                                    return true;
                                }
                                return false;
                            },
                            filter(event, player) {
                                if (event.targets.length > 1 || event.target == player || _status.currentPhase != player) return false;
                                var card = event.card;
                                if ((card.name == 'sha' || get.type(card) == 'trick') && event.target.countCards('he')) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(trigger.target, true, 'he').boolline = true;
                                ('step 1');
                                if (result.cards?.length) {
                                    var color = get.color(result.card || result.cards[0]);
                                    if (color == 'black') {
                                        trigger.card.name = 'sha';
                                        trigger.card.nature = 'ice';
                                    } else event.finish();
                                }
                            },
                        },
                        yexing: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    var color = get.color(card);
                                    if (color == 'black') return true;
                                },
                                ignoredHandcard(card, player) {
                                    if (get.color(card) == 'black') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.color(card) == 'black') {
                                        return false;
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                var card = event.card;
                                return get.color(card) == 'black';
                            },
                            forced: true,
                            _priority: 20,
                            content() {
                                trigger.nowuxie = true;
                                trigger.directHit.addArray(game.players);
                            },
                        },
                        dicha_niyan: {
                            init(player) {
                                if (!player.storage.dicha_niyan) player.storage.dicha_niyan = 0;
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
                            },
                            content() {
                                player.storage.dicha_niyan++;
                            },
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha' && get.color(card) == 'red') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && get.color(card) == 'red') return Infinity;
                                    else if (card.name == 'sha') return num + player.storage.dicha_niyan;
                                },
                            },
                            group: 'dicha_niyan2',
                        },
                        dicha_niyan2: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.storage.dicha_niyan = 0;
                            },
                        },
                        chenxi: {
                            audio: 'ext:原神杀/audio:3',
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.color(card) == 'black') return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.color(card) == 'black') return false;
                                },
                            },
                            trigger: {
                                player: 'useCard1',
                            },
                            filter(event, player) {
                                return get.color(event.card) == 'red' && player.isPhaseUsing();
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                                    },
                                },
                            },
                        },
                        zhishou: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (player.countMark('zhishou') >= player.maxHp) return false;
                                },
                                cardUsable(card, player) {
                                    if (player.countMark('zhishou') >= player.maxHp) return false;
                                },
                                cardRespondable(card, player) {
                                    if (player.countMark('zhishou') >= player.maxHp) return false;
                                },
                            },
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            popup: false,
                            firstDo: true,
                            filter(event, player) {
                                return player.isPhaseUsing() && get.type(event.card) != 'equip';
                            },
                            content() {
                                player.addMark('zhishou', 1, false);
                            },
                            group: ['zhishou_re'],
                            subSkill: {
                                re: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        player: 'phaseUseAfter',
                                    },
                                    forced: true,
                                    content() {
                                        delete player.storage.zhishou;
                                    },
                                },
                            },
                            ai: {
                                presha: true,
                                pretao: true,
                                nokeep: true,
                            },
                        },
                        renshan: {
                            audio: 'ext:原神杀/audio:4',
                            inherit: 'renshan',
                            trigger: {
                                player: ['shaAfter', 'shanAfter', 'respondEnd'],
                            },
                            marktext: '刃',
                            intro: {
                                content: 'mark',
                                name: '刃闪',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('renshan') < 5;
                            },
                            content() {
                                player.addMark('renshan', trigger.num || 1);
                                player.addMark('renshan2', trigger.num || 1, false);
                            },
                            group: ['renshan_disdraw', 'renshan_to'],
                            subSkill: {
                                disdraw: {
                                    audio: 'ext:原神杀/audio:1',
                                    trigger: {
                                        source: ['damageSource'],
                                    },
                                    logTarget: 'player',
                                    check(event, player) {
                                        if (get.attitude(player, event.player) < 0) {
                                            return true;
                                        }
                                        return false;
                                    },
                                    filter(event, player) {
                                        return player != event.player && player.countMark('renshan') > 0 && event.player.countCards('he');
                                    },
                                    prompt: '是否消耗一层<刃闪>充能,并弃置对方一张牌',
                                    content() {
                                        'step 0';
                                        player.removeMark('renshan', 1);
                                        player.discardPlayerCard(trigger.player, 'he', true);
                                        ('step 1');
                                        if (player.countMark('renshan') && trigger.player.countCards('he')) {
                                            player.chooseBool('是否继续发动【刃闪】？').ai = function () {
                                                return true;
                                            };
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) event.goto(0);
                                    },
                                },
                                to: {
                                    mod: {
                                        globalFrom(from, to, current) {
                                            return current - Math.max(0, from.countMark('renshan'));
                                        },
                                    },
                                },
                            },
                        },
                        hanyu: {
                            group: ['hanyu_disdraw', 'hanyu_damage'],
                            subSkill: {
                                disdraw: {
                                    audio: 'ext:原神杀/audio:3',
                                    trigger: {
                                        global: 'loseAfter',
                                    },
                                    check(event, player) {
                                        return get.damageEffect(event.player, player, player) > 0;
                                    },
                                    filter(event, player) {
                                        if (event.player.countCards('h')) return false;
                                        if (_status.currentPhase != player) return false;
                                        if (event.player == player) return false;
                                        if (event.player.isDead()) return false;
                                        return event.hs && event.hs.length;
                                    },
                                    content() {
                                        player.line(trigger.player, 'green');
                                        if (player.countMark('renshan') < 5) {
                                            player.addMark('renshan', trigger.num || 1);
                                            player.addMark('renshan2', trigger.num || 1, false);
                                        }
                                        trigger.player.damage();
                                    },
                                    ai: {
                                        threaten: 1.1,
                                    },
                                },
                                damage: {
                                    audio: 'ext:原神杀/audio:1',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        return player.countMark('renshan') == 5;
                                    },
                                    filterTarget(event, player, target) {
                                        return player.inRange(target);
                                    },
                                    prompt: '消耗五层<刃闪>充能,选择一名角色,弃置其装备区的所有牌并对其造成一点伤害',
                                    content() {
                                        'step 0';
                                        player.removeMark('renshan', 5);
                                        ('step 1');
                                        if (target.countCards('e')) {
                                            target.discard(target.getCards('e'));
                                            target.damage('nocard');
                                        } else target.damage(2, 'nocard');
                                    },
                                    ai: {
                                        order: 8.5,
                                        result: {
                                            target(player, target) {
                                                return get.damageEffect(target, player);
                                            },
                                        },
                                    },
                                    threaten: 1.5,
                                },
                            },
                        },
                        wangsheng: {
                            audio: 'ext:原神杀/audio:3',
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return (
                                    event.nature == 'fire' &&
                                    event.player.isAlive() &&
                                    player.countCards('he', function (card) {
                                        return get.color(card) == 'black';
                                    })
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', '【往生】是否弃置一张黑色牌,令目标失去等量的体力上限', function (card) {
                                    return get.color(card) == 'black';
                                }).ai = function (card) {
                                    if (get.color(card) == 'black' && get.attitude(player, trigger.player) < 0) {
                                        if (trigger.player.maxHp - trigger.player.hp < 2) return 8 - get.value(card);
                                        else return 5 - get.value(card);
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.loseMaxHp(trigger.num);
                                }
                            },
                        },
                        htdiewu: {
                            audio: 'ext:原神杀/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '失去一点体力进入蝶舞状态',
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                var num = player.maxHp - player.hp;
                                player.draw(num);
                                player.addTempSkill('htdiewu_fire');
                                player.addTempSkill('htdiewu_damage');
                            },
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    filter(event, player) {
                                        return event.nature == 'fire' && !player.hasSkill('htdiewu_recover');
                                    },
                                    content() {
                                        player.addTempSkill('htdiewu_recover');
                                    },
                                },
                                fire: {
                                    mod: {
                                        cardname(card, player, name) {
                                            if (card.suit == 'heart') return 'huogong';
                                            if (card.suit == 'diamond') return 'sha';
                                        },
                                        cardnature(card, player) {
                                            if (get.color(card) == 'red') return 'fire';
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + player.maxHp - player.hp;
                                        },
                                    },
                                },
                                recover: {
                                    mark: true,
                                    marktext: '蝶',
                                    intro: {
                                        name: '蝶舞',
                                        content: '已造成火焰伤害,出牌阶段结束时回复一点体力',
                                    },
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 2) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        chunyang: {
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'spade') return 'heart';
                                    if (suit == 'club') return 'diamond';
                                },
                            },
                        },
                        tuixie: {
                            audio: 'ext:原神杀/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he', { suit: 'diamond' }) > 0;
                            },
                            position: 'he',
                            filterCard: {
                                suit: 'diamond',
                            },
                            filterTarget(card, player, target) {
                                return target.countDiscardableCards(player, 'ej') > 0;
                            },
                            prompt: '弃置一张♦️️牌并弃置场上一张牌',
                            content() {
                                'step 0';
                                player.discardPlayerCard('ej', true, target);
                                ('step 1');
                                if (result.cards?.length) {
                                    var color = get.color(result.card || result.cards[0]);
                                    if (color == 'black') {
                                        player.chooseBool('是否视为对其使用一张冰【杀】？').ai = function () {
                                            return get.attitude(player, target) < 0;
                                        };
                                    } else event.finish();
                                }
                                ('step 2');
                                if (result.bool) player.useCard({ name: 'sha', nature: 'ice' }, result.cards, false, target);
                                else player.draw();
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        if (att > 0 && target.countCards('j') > 0) return 1;
                                        if (att < 0 && target.countCards('e') > 0) return -1;
                                    },
                                },
                            },
                            group: ['tuixie_wuxie'],
                            subSkill: {
                                wuxie: {
                                    audio: 'ext:原神杀/audio:2',
                                    enable: 'chooseToUse',
                                    position: 'he',
                                    filterCard(card) {
                                        return card.suit == 'heart';
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('he', { suit: 'heart' }) > 0;
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    prompt: '将一张♥️️牌当无懈可击使用',
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
                            },
                        },
                        dicha_kuanglan: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '澜',
                            intro: {
                                name(storage, player) {
                                    if (player.storage.dicha_kuanglan_juedou == true) return '狂澜♠️️近战';
                                    return '狂澜♥️️远程';
                                },
                                content(storage, player) {
                                    if (player.storage.dicha_kuanglan_juedou == true) return '你的【杀】无次数限制,你可以将一张♠️️牌或武器牌当【决斗】使用';
                                    return '你的【杀】无距离限制,你可以将一张♥️️牌或武器牌当【万箭齐发】使用';
                                },
                            },
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && (player.storage.dicha_kuanglan_juedou == false || player.storage.dicha_kuanglan_juedou == undefined)) return true;
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'sha' && player.storage.dicha_kuanglan_juedou == true) return Infinity;
                                },
                            },
                            group: ['dicha_kuanglan_wanjian', 'dicha_kuanglan_juedou', 'dicha_kuanglan_damage', 'dicha_kuanglan_count'],
                            subSkill: {
                                count: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return event.skill == 'dicha_kuanglan_wanjian' || event.skill == 'dicha_kuanglan_juedou';
                                    },
                                    content() {
                                        player.storage.card_dicha_kuanglan = trigger.card;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                damage: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return event.card && event.card == player.storage.card_dicha_kuanglan;
                                    }, //QQQ
                                    content() {
                                        'step 0';
                                        if (trigger.card.name == 'wanjian') {
                                            player.draw();
                                        }
                                        if (trigger.card.name == 'juedou') {
                                            player.discardPlayerCard(trigger.player, true, 'he');
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                wanjian: {
                                    audio: 'ext:原神杀/audio:2',
                                    enable: 'phaseUse',
                                    discard: false,
                                    filter(event, player) {
                                        return (player.countCards('he', { suit: 'heart' }) > 0 || player.countCards('he', { subtype: 'equip1' }) > 0) && (player.storage.dicha_kuanglan_juedou == false || player.storage.dicha_kuanglan_juedou == undefined) && !player.hasSkill('dicha_kuanglan_used');
                                    },
                                    prepare: 'throw',
                                    position: 'he',
                                    filterCard(card) {
                                        return card.suit == 'heart' || get.subtype(card) == 'equip1';
                                    },
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return lib.filter.targetEnabled({ name: 'wanjian' }, player, target);
                                    },
                                    check(card) {
                                        return 7 - get.value(card);
                                    },
                                    prompt: '将一张♥️️牌或武器牌当【万箭齐发】对一名角色使用',
                                    content() {
                                        'step 0';
                                        var next = player.useCard({ name: 'wanjian' }, cards, false, target, 'dicha_kuanglan_wanjian');
                                        next.animate = false;
                                        next.audio = false;
                                        player.storage.dicha_kuanglan_juedou = true;
                                        player.addTempSkill('dicha_kuanglan_used');
                                    },
                                    ai: {
                                        order() {
                                            return get.order({ name: 'sha' }) - 1;
                                        },
                                        result: {
                                            target: -1,
                                        },
                                    },
                                },
                                juedou: {
                                    audio: 'ext:原神杀/audio:2',
                                    enable: 'phaseUse',
                                    discard: false,
                                    filter(event, player) {
                                        return (player.countCards('he', { suit: 'spade' }) > 0 || player.countCards('he', { subtype: 'equip1' }) > 0) && player.storage.dicha_kuanglan_juedou == true && !player.hasSkill('dicha_kuanglan_used');
                                    },
                                    prepare: 'throw',
                                    position: 'he',
                                    filterCard(card) {
                                        return card.suit == 'spade' || get.subtype(card) == 'equip1';
                                    },
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return lib.filter.targetEnabled({ name: 'juedou' }, player, target);
                                    },
                                    check(card) {
                                        return 7 - get.value(card);
                                    },
                                    prompt: '将一张♠️️牌或武器牌当【决斗】对一名角色使用',
                                    content() {
                                        'step 0';
                                        var next = player.useCard({ name: 'juedou' }, cards, false, target, 'dicha_kuanglan_juedou');
                                        next.animate = false;
                                        next.audio = false;
                                        player.storage.dicha_kuanglan_juedou = false;
                                        player.addTempSkill('dicha_kuanglan_used');
                                    },
                                    ai: {
                                        order() {
                                            return get.order({ name: 'sha' }) + 1;
                                        },
                                        result: {
                                            target: -1,
                                        },
                                    },
                                },
                                used: {},
                            },
                        },
                        dicha_duanliu: {
                            audio: 'ext:原神杀/audio:1',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.card && ((event.card.name == 'sha' && event.parent.name == 'sha') || event.card.name == 'wanjian' || event.card.name == 'juedou') && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                var target = trigger.player;
                                if (!target.storage.dicha_duanliu) {
                                    player.line(target, 'green');
                                    game.log(target, '被附上了【断流】标记');
                                    target.storage.dicha_duanliu = [];
                                    target.storage.dicha_duanliu_mark = player;
                                    target.markSkill('dicha_duanliu_mark');
                                    event.finish();
                                } else event.goto(1);
                                ('step 1');
                                trigger.player.chooseToDiscard('he').set('ai', function (card) {
                                    return 12 - get.value(card);
                                });
                                ('step 2');
                                if (!result.bool) {
                                    trigger.player.loseHp();
                                }
                            },
                            subSkill: {
                                mark: {
                                    marktext: '断',
                                    intro: {
                                        name: '断流',
                                        content: '受到$的【杀】、【万箭齐发】、【决斗】的伤害时须弃置一张牌,否则失去一点体力',
                                    },
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        fenglun: {
                            group: 'fenglun_sha',
                            subSkill: {
                                sha: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        player: ['useCard', 'respond', 'loseAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name != 'lose') return event.card && event.card.name == 'shan';
                                        if (event.type != 'discard') return false;
                                        if (event.cards2) {
                                            for (var i = 0; i < event.cards2.length; i++) {
                                                if (event.cards2[i].name == 'shan') return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        event.count = 1;
                                        if (trigger.name == 'lose') {
                                            event.count = 0;
                                            for (var i = 0; i < trigger.cards2.length; i++) {
                                                if (trigger.cards2[i].name == 'shan') event.count++;
                                            }
                                        }
                                        ('step 1');
                                        player.chooseUseTarget({ name: 'sha', nature: 'custom' }, 'nodistance');
                                        event.count--;
                                        ('step 2');
                                        if (event.count) {
                                            player.chooseBool(get.prompt2('fenglun')).set('frequentSkill', 'fenglun');
                                        } else event.finish();
                                        ('step 3');
                                        if (result.bool) {
                                            event.goto(1);
                                        }
                                    },
                                    ai: {
                                        threaten: 0.7,
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            filterCard: {
                                name: 'shan',
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('hej');
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.discardPlayerCard('hej', target, true);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        nuowu: {
                            subSkill: {
                                limted: {},
                                end: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.name == 'nuowu';
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('he', true);
                                        player.loseHp();
                                    },
                                },
                                target: {
                                    mod: {
                                        selectTarget(card, player, range) {
                                            if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++;
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    check() {
                                        return false;
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card == player.storage.nuowu_card;
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.storage.nuowu_target.includes(trigger.player)) player.storage.nuowu_target.push(trigger.player);
                                        ('step 1');
                                        if (player.storage.nuowu_target.length > 1) player.getStat('skill').fenglun--;
                                    },
                                },
                                card: {
                                    audio: 'ext:原神杀/audio:2',
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.targets.length < 1) return false;
                                        if (event.card.name == 'sha') return true;
                                        return false;
                                    },
                                    content() {
                                        player.storage.nuowu_card = trigger.card;
                                        player.storage.nuowu_target = [];
                                    },
                                    ai: {
                                        threaten: 2.4,
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                global: 'roundStart',
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('nuowu_card');
                                player.addTempSkill('nuowu_target');
                                player.addTempSkill('nuowu_end');
                                ('step 1');
                                player.phase('nuowu');
                            },
                        },
                        演奏: {
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: ['loseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.some((q) => get.color(q) == 'red');
                            },
                            //当你于回合外使用或打出红色牌,或因弃置失去一张红色牌后,你可以令一名角色摸一张牌或回复一点体力
                            async content(event, trigger, player) {
                                //QQQ
                                var count = trigger.cards.filter((q) => get.color(q) == 'red').length;
                                while (count-- > 0) {
                                    const result = await player
                                        .chooseTarget()
                                        .set('ai', (t) => get.attitude(player, t))
                                        .forResult();
                                    if (result.targets?.length) {
                                        await result.targets[0].chooseDrawRecover(2, true);
                                    }
                                }
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        解咒: {
                            audio: 'ext:原神杀/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(event, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                target.discard(target.getCards('j'));
                                player.line(target, 'green');
                                ('step 1');
                                target.link(false);
                                ('step 2');
                                target.turnOver(false);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        var num = 0,
                                            players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i != player && i.countCards('j')) {
                                                if (get.attitude(player, i) >= 0 && get.attitude(i, player) >= 0) {
                                                    num++;
                                                } else {
                                                    num--;
                                                }
                                            }
                                        }
                                        return num;
                                    },
                                },
                            },
                        },
                        复苏: {
                            audio: 'ext:原神杀/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter: (event, player) => game.dead[0], //QQQ
                            content() {
                                'step 0';
                                var next = player.chooseButton();
                                next.set('createDialog', ['复苏:请选择要复活的角色', game.dead]);
                                next.set('ai', function (button) {
                                    var player = get.player();
                                    var target = button.link;
                                    if (get.attitude(player, target) > 0) return 3;
                                    if (get.attitude(player, target) == 0) return 0.3;
                                    else return 0.03;
                                });
                                ('step 1');
                                if (result.bool && result.links) {
                                    event.target = result.links[0];
                                    player.line(event.target, 'fire');
                                    player.loseMaxHp();
                                } else {
                                    if (player.getStat().skill.neigu_fushu) player.getStat().skill.neigui_fushu--;
                                    event.finish();
                                }
                                ('step 2');
                                game.broadcastAll(
                                    function (player, target) {
                                        target.revive(target.maxHp);
                                        target.gainMaxHp();
                                        target.update();
                                    },
                                    player,
                                    event.target
                                );
                                ('step 3');
                                var skills = event.target.skills.slice(0);
                                for (var i = 0; i < skills.length; i++) {
                                    var info = get.info(skills[i]);
                                    if (info.mark) {
                                        if (info.intro && info.intro.content) {
                                            var c = info.intro.content;
                                            switch (c) {
                                                case 'limited':
                                                    if (!event.target.storage[skills[i]]) event.target.markSkill(skills[i]);
                                                    break;
                                                default:
                                                    if (typeof info.init == 'function') info.init(event.target, skills[i]);
                                                    event.target.markSkill(skills[i]);
                                            }
                                        }
                                    }
                                }
                                ('step 4');
                                event.target.drawTo(event.target.maxHp);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.maxHp > 1) return 1;
                                        if (player.maxHp == 1) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        审判: {
                            group: '审判_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.parent.skill == '审判';
                                    },
                                    content() {
                                        player.loseHp(trigger.num);
                                    },
                                },
                            },
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                global: 'phaseUseEnd',
                            },
                            check: (event, player) => event.player.isEnemiesOf(player),
                            async content(event, trigger, player) {
                                //QQQ
                                const discarded = get.discarded().filter((q) => get.color(q) == 'red');
                                for (const i of discarded) {
                                    const result = await player.chooseControl(Array.from(lib.nature.keys())).set('prompt', get.prompt('审判')).set('prompt2', '请选择杀的属性').forResult();
                                    await player.useCard({ name: 'sha', nature: result.control }, [i], false, trigger.player, '审判');
                                }
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg || !arg.card || arg.card.审判 != true) return false;
                                },
                            },
                        },
                        夜枭: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (!from.getEquip(1)) return distance - 1;
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && get.type(event.card) == 'basic' && !player.getEquip(1);
                            },
                            content() {
                                trigger.directHit.addArray(game.filterPlayer());
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return get.distance(player, arg.target) <= 1;
                                },
                            },
                        },
                        疗愈: {
                            audio: 'ext:原神杀/audio:2',
                            audioname: ['re_huatuo'],
                            enable: 'chooseToUse',
                            viewAsFilter(player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'tao',
                            },
                            prompt: '将一张红色牌当桃使用',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                threaten: 1.5,
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                    useful: [8, 6.5, 5, 4],
                                    value: [8, 6.5, 5, 4],
                                },
                                result: {
                                    target: 2,
                                    target_use(player, target) {
                                        // if(player==target&&player.hp<=0) return 2;
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
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
                        创生: {
                            audio: 'ext:原神杀/audio:2',
                            enable: 'phaseUse',
                            usable: 3,
                            filterCard(card, player) {
                                return get.type(card) != player.storage.创生;
                            },
                            position: 'he',
                            content() {
                                'step 0';
                                var type = get.type(cards[0], 'trick');
                                var list = [];
                                for (var i in lib.card) {
                                    if (!lib.card[i].content) continue;
                                    if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                                    if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                                    if (lib.card[i].type == type) {
                                        list.add(i);
                                    }
                                }
                                player.chooseButton([get.prompt('创生', player), [list, 'vcard']]).set('ai', function (button) {
                                    return Math.random();
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    var name = result.links[0][2];
                                    event.nature = result.links[0][3];
                                    event.cardname = name;
                                    player.storage.创生 = get.type(name);
                                    var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                                    player.chooseControl(list).set('ai', function () {
                                        return list.randomGet();
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool == true || result.control) {
                                    event.number = result.control;
                                    var list = ['diamond', 'spade', 'heart', 'club'];
                                    player.chooseControl(list).set('ai', function () {
                                        return list.randomGet();
                                    });
                                }
                                ('step 3');
                                if (result.bool == true || result.control) {
                                    event.suit = result.control;
                                    player
                                        .chooseTarget(get.prompt('创生'), '请选择一名其他角色获得此牌或取消由你获得', function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(_status.event.player, target);
                                        });
                                }
                                ('step 4');
                                if (result.targets && result.bool) {
                                    var fakecard = game.createCard(event.cardname, event.suit, event.number, event.nature);
                                    result.targets[0].gain(fakecard, 'gain2', 'log');
                                } else {
                                    var fakecard = game.createCard(event.cardname, event.suit, event.number, event.nature);
                                    player.gain(fakecard, 'gain2', 'log');
                                }
                            },
                            ai: {
                                order: 8.2,
                                value: [6, 2],
                                useful: 5,
                                result: {
                                    target: 3,
                                },
                            },
                        },
                        genshin: {
                            subSkill: {
                                river_draw: {
                                    content() {
                                        'step 0';
                                        player.chooseBool(`是否摸一张牌或取消弃置${gey.translation(source)}一张牌`).ai = function () {
                                            return player.countCards('h') < player.maxHp;
                                        };
                                        ('step 1');
                                        if (result.bool) player.draw();
                                        else player.discardPlayerCard(source, 'he', true);
                                    },
                                },
                                burn: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    silent: true,
                                    firstDo: true,
                                    popup: false,
                                    content() {
                                        player.removeSkill('genshin_burn');
                                        player.damage('fire');
                                    },
                                    mark: true,
                                    intro: {
                                        content: '回合开始时受到一点火焰伤害',
                                    },
                                    forced: true,
                                },
                                fire: {
                                    marktext: '火',
                                    intro: {
                                        name: '火元素',
                                        content: '当前处于火元素影响',
                                    },
                                },
                                thunder: {
                                    marktext: '雷',
                                    intro: {
                                        name: '雷元素',
                                        content: '当前处于雷元素影响',
                                    },
                                },
                                earth: {
                                    marktext: '岩',
                                    intro: {
                                        name: '岩元素',
                                        content: '当前处于岩元素影响',
                                    },
                                },
                                custom: {
                                    marktext: '风',
                                    intro: {
                                        name: '风元素',
                                        content: '当前处于风元素影响',
                                    },
                                },
                                grass: {
                                    marktext: '草',
                                    intro: {
                                        name: '草元素',
                                        content: '当前处于草元素影响',
                                    },
                                },
                                ice: {
                                    marktext: '冰',
                                    intro: {
                                        name: '冰元素',
                                        content: '当前处于冰元素影响',
                                    },
                                },
                                river: {
                                    marktext: '水',
                                    intro: {
                                        name: '水元素',
                                        content: '当前处于水元素影响',
                                    },
                                },
                            },
                        },
                        jiejing: {
                            fire: {
                                marktext: '火',
                                intro: {
                                    name: '火元素结晶',
                                    content: '当前火元素结晶为#',
                                },
                                nopop: true,
                                trigger: {
                                    player: 'damageBegin',
                                },
                                forced: true,
                                popup: false,
                                filter(event, player) {
                                    return event.num > 0;
                                },
                                content() {
                                    if (trigger.nature != fire) {
                                        trigger.num--;
                                        player.removeMark('jiejing_fire', event.num, false);
                                    } else {
                                        trigger.num -= 2;
                                        player.removeMark('jiejing_fire', Math.floor(event.num / 2), false);
                                    }
                                    ('step 1');
                                    if (player.conutMark('jiejing_fire') <= 0) player.removeSkill('jiejing_fire');
                                },
                            },
                            thunder: {
                                marktext: '雷',
                                intro: {
                                    name: '雷元素结晶',
                                    content: '当前雷元素结晶为#',
                                },
                                nopop: true,
                                trigger: {
                                    player: 'damageBegin',
                                },
                                forced: true,
                                filter(event, player) {
                                    return event.num > 0;
                                },
                                content() {
                                    'step 0';
                                    if (trigger.nature != 'thunder') {
                                        trigger.num--;
                                        player.removeMark('jiejing_thunder', event.num, false);
                                    } else {
                                        trigger.num -= 2;
                                        player.removeMark('jiejing_thunder', Math.floor(event.num / 2), false);
                                    }
                                    ('step 1');
                                    if (player.conutMark('jiejing_thunder') <= 0) player.removeSkill('jiejing_thunder');
                                },
                            },
                            earth: {
                                marktext: '岩',
                                intro: {
                                    name: '岩元素结晶',
                                    content: '当前岩元素结晶为#',
                                },
                                nopop: true,
                                trigger: {
                                    player: 'damageBegin',
                                },
                                forced: true,
                                filter(event, player) {
                                    return event.num > 0;
                                },
                                content() {
                                    'step 0';
                                    if (trigger.nature != 'earth') {
                                        trigger.num--;
                                        player.removeMark('jiejing_earth', event.num, false);
                                    } else {
                                        trigger.num -= 2;
                                        player.removeMark('jiejing_earth', Math.floor(event.num / 2), false);
                                    }
                                    ('step 1');
                                    if (player.conutMark('jiejing_earth') <= 0) player.removeSkill('jiejing_earth');
                                },
                            },
                            grass: {
                                marktext: '草',
                                intro: {
                                    name: '草元素结晶',
                                    content: '当前草元素结晶为#',
                                },
                                nopop: true,
                                trigger: {
                                    player: 'damageBegin',
                                },
                                forced: true,
                                filter(event, player) {
                                    return event.num > 0;
                                },
                                content() {
                                    'step 0';
                                    if (trigger.nature != 'grass') {
                                        trigger.num--;
                                        player.removeMark('jiejing_grass', event.num, false);
                                    } else {
                                        trigger.num -= 2;
                                        player.removeMark('jiejing_grass', Math.floor(event.num / 2), false);
                                    }
                                    ('step 1');
                                    if (player.conutMark('jiejing_grass') <= 0) player.removeSkill('jiejing_grass');
                                },
                            },
                            ice: {
                                marktext: '冰',
                                intro: {
                                    name: '冰元素结晶',
                                    content: '当前冰元素结晶为#',
                                },
                                nopop: true,
                                trigger: {
                                    player: 'damageBegin',
                                },
                                forced: true,
                                filter(event, player) {
                                    return event.num > 0;
                                },
                                content() {
                                    'step 0';
                                    if (trigger.nature != 'ice') {
                                        trigger.num--;
                                        player.removeMark('jiejing_ice', event.num, false);
                                    } else {
                                        trigger.num -= 2;
                                        player.removeMark('jiejing_ice', Math.floor(event.num / 2), false);
                                    }
                                    ('step 1');
                                    if (player.conutMark('jiejing_ice') <= 0) player.removeSkill('jiejing_ice');
                                },
                            },
                            river: {
                                marktext: '水',
                                intro: {
                                    name: '水元素结晶',
                                    content: '当前水元素结晶为#',
                                },
                                nopop: true,
                                trigger: {
                                    player: 'damageBegin',
                                },
                                forced: true,
                                filter(event, player) {
                                    return event.num > 0;
                                },
                                content() {
                                    'step 0';
                                    if (trigger.nature != 'river') {
                                        trigger.num--;
                                        player.removeMark('jiejing_river', event.num, false);
                                    } else {
                                        trigger.num -= 2;
                                        player.removeMark('jiejing_river', Math.floor(event.num / 2), false);
                                    }
                                    ('step 1');
                                    if (player.conutMark('jiejing_river') <= 0) player.removeSkill('jiejing_river');
                                },
                            },
                        },
                        yuansufanying: {
                            group: ['yuansufanying_add', 'yuansufanying_add2'],
                            subSkill: {
                                add2: {
                                    trigger: {
                                        global: 'yuansufanying2',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        if (trigger.player.hasMark('grnshin_fire') && trigger.player.hasMark('genshin_thunder')) {
                                            var next = trigger.player.next;
                                            var prev = trigger.player.previous;
                                            trigger.player.damage('fire');
                                            next.damage('fire');
                                            prev.damage('fire');
                                            trigger.player.removeMark('genshin_fire');
                                            trigger.player.removeMark('genshin_thunder');
                                        } else if (trigger.player.hasMark('genshin_fire') && trigger.player.hasMark('genshin_grass')) {
                                            trigger.player.addSkill('genshin_burn');
                                            trigger.player.removeMark('genshin_grass');
                                            trigger.player.removeMark('genshin_fire');
                                        } else if (trigger.player.hasMark('genshin_fire') && trigger.player.hasMark('genshin_ice')) {
                                            trigger.chooseToDisCard('hej', true);
                                            trigger.player.removeSkill('genshin_fire');
                                            trigger.player.removeSkill('genshin_ice');
                                        } else if (trigger.player.hasMark('genshin_fire') && trigger.player.hasMark('genshin_river')) {
                                            trigger.player.draw();
                                            trigger.player.removeMark('genshin_fire');
                                            trigger.player.removeMark('genshin_river');
                                        } else if (trigger.player.hasMark('genshin_ice') && trigger.player.hasMark('genshin_river')) {
                                            trigger.player.turnOver();
                                            trigger.player.removeMark('genshin_ice');
                                            trigger.player.removeMark('genshin_river');
                                        } else if (trigger.player.hasMark('genshin_thunder') && trigger.player.hasMark('genshin_river')) {
                                            var next = trigger.player.next;
                                            var prev = trigger.player.previous;
                                            trigger.player.link();
                                            next.link();
                                            prev.link();
                                            trigger.player.removeMark('genshin_thunder');
                                            trigger.player.removeMark('genshin_river');
                                        }
                                    },
                                },
                                add: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    _priority: null,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.player == player && (event.skill != 'genshin_burn' || event.skill != 'yuansufanying');
                                    },
                                    content() {
                                        if (!trigger.player.hasMark('genshin_' + trigger.nature)) {
                                            trigger.player.addMark('genshin_' + trigger.nature, false, 1);
                                            event.trigger('yuansufanying2');
                                        }
                                    },
                                },
                            },
                            trigger: {
                                global: 'damageBegin',
                            },
                            _priority: null,
                            forced: true,
                            gainable: true,
                            charlotte: true,
                            popup: false,
                            filter(event, player) {
                                return event.player == player;
                            },
                            content() {
                                if (trigger.player.hasMark('genshin_fire')) {
                                    switch (trigger.nature) {
                                        case 'thunder':
                                            var next = trigger.player.next;
                                            var prev = trigger.player.previous;
                                            trigger.player.damage('fire');
                                            next.damage('fire');
                                            prev.damage('fire');
                                            trigger.player.removeMark('genshin_fire');
                                            break;
                                        case 'ice':
                                            trigger.player.chooseToDiscard('hej', true);
                                            trigger.player.removeMark('genshin_fire');
                                            break;
                                        case 'earth':
                                            trigger.player.addSkill('jiejing_' + trigger.nature);
                                            trigger.player.addMark('jiejing_' + trigger.nature);
                                            trigger.player.removeMark('genshin_fire');
                                            break;
                                        case 'custom':
                                            var next = trigger.player.next;
                                            var prev = trigger.player.previous;
                                            if (!next.hasMark('genshin_fire')) next.addMark('genshin_fire', false);
                                            if (!prev.hasMark('genshin_fire')) prev.addMark('genshin_fire', false);
                                            break;
                                        case 'grass':
                                            trigger.player.addSkill('genshin_burn');
                                            player.removeMark('genshin_fire');
                                            break;
                                        case 'river':
                                            trigger.num++;
                                            break;
                                    }
                                }
                                if (trigger.player.hasMark('genshin_thunder')) {
                                    switch (trigger.nature) {
                                        case 'fire':
                                            var next = trigger.player.next;
                                            var prev = trigger.player.previous;
                                            trigger.player.damage('fire');
                                            next.damage('fire');
                                            prev.damage('fire');
                                            trigger.player.removeMark('genshin_thunder');
                                            break;
                                        case 'ice':
                                            trigger.source.discardplayerCard(trigger.player, 'he', true, 2);
                                            trigger.player.removeMark('genshin_thunder');
                                            break;
                                        case 'earth':
                                            trigger.player.addSkill('jiejing_' + trigger.nature);
                                            trigger.player.addMark('jiejing_' + trigger.nature);
                                            trigger.player.removeMark('genshin_thunder');
                                            break;
                                        case 'custom':
                                            var next = trigger.player.next;
                                            var prev = trigger.player.previous;
                                            if (!next.hasMark('genshin_thunder')) next.addMark('genshin_thunder', false);
                                            if (!prev.hasMark('genshin_thunder')) prev.addMark('genshin_thunder', false);
                                            break;
                                        case 'river':
                                            var next = trigger.player.next;
                                            var prev = trigger.player.previous;
                                            trigger.player.link();
                                            next.link();
                                            prev.link();
                                            trigger.player.removeMark('genshin_thunder');
                                            break;
                                    }
                                }
                                if (trigger.player.hasMark('genshin_ice')) {
                                    switch (trigger.nature) {
                                        case 'fire':
                                            trigger.num++;
                                            trigger.player.removeMark('genshin_ice');
                                            break;
                                        case 'thunder':
                                            trigger.source.discardplayerCard(trigger.player, 'he', true, 2);
                                            trigger.player.removeMark('genshin_ice');
                                            break;
                                        case 'earth':
                                            trigger.player.addSkill('jiejing_' + trigger.nature, false);
                                            trigger.player.addMark('jiejing_' + trigger.nature);
                                            trigger.player.removeMark('genshin_ice');
                                            break;
                                        case 'custom':
                                            var next = trigger.player.next;
                                            var prev = trigger.player.previous;
                                            if (!next.hasMark('genshin_ice')) next.addMark('genshin_ice', false);
                                            if (!prev.hasMark('genshin_ice')) prev.addMark('genshin_ice', false);
                                            break;
                                        case 'river':
                                            trigger.player.turnOver();
                                            trigger.player.removeMark('genshin_ice');
                                            break;
                                    }
                                }
                                if (trigger.player.hasMark('genshin_river')) {
                                    switch (trigger.nature) {
                                        case 'fire':
                                            var next = game.createEvent('ysfy', false);
                                            next.player = trigger.source;
                                            next.source = trigger.player;
                                            next.setContent(lib.skill.genshin_river_draw.content);
                                            trigger.player.removeMark('genshin_river');
                                            break;
                                        case 'ice':
                                            trigger.player.turnOver();
                                            trigger.player.removeMark('genshin_river');
                                            break;
                                        case 'earth':
                                            trigger.player.addSkill('jiejing_' + trigger.nature, false);
                                            trigger.player.addMark('jiejing_' + trigger.nature);
                                            trigger.player.removeMark('genshin_river');
                                            break;
                                        case 'custom':
                                            var next = trigger.player.next;
                                            var prev = trigger.player.previous;
                                            if (!next.hasMark('genshin_river')) next.addMark('genshin_river', false);
                                            if (!prev.hasMark('genshin_river')) prev.addMark('genshin_river', false);
                                            break;
                                        case 'thunder':
                                            var next = trigger.player.next;
                                            var prev = trigger.player.previous;
                                            trigger.player.link();
                                            next.link();
                                            prev.link();
                                            trigger.player.removeMark('genshin_river');
                                            break;
                                    }
                                }
                                if (trigger.player.hasMark('genshin_grass')) {
                                    switch (trigger.nature) {
                                        case 'fire':
                                            trigger.player.addSkill('genshin_burn');
                                            trigger.player.removeMark('genshin_grass');
                                            break;
                                        case 'earth':
                                            trigger.player.addSkill('jiejing_' + trigger.nature, false);
                                            trigger.player.addMark('jiejing_' + trigger.nature);
                                            trigger.player.removeMark('genshin_grass');
                                            break;
                                        case 'custom':
                                            var next = trigger.player.next;
                                            var prev = trigger.player.previous;
                                            if (!next.hasMark('genshin_grass')) next.addMark('genshin_grass', false);
                                            if (!prev.hasMark('genshin_grass')) prev.addMark('genshin_grass', false);
                                            break;
                                    }
                                }
                                if (trigger.player.hasMark('genshin_custom')) {
                                    if (trigger.nature != 'earth') {
                                        var next = trigger.player.next;
                                        var prev = trigger.player.previous;
                                        if (!next.hasMark('genshin_' + trigger.nature)) next.addMark('genshin_' + trigger.nature, false);
                                        if (!prev.hasMark('genshin_' + trigger.nature)) prev.addMark('genshin_' + trigger.nature, false);
                                    }
                                }
                                if (trigger.player.hasMark('genshin_earth')) {
                                    if (trigger.nature != 'custom') {
                                        trigger.player.addSkill('jiejing_' + trigger.nature, false);
                                        trigger.player.addMark('jiejing_' + trigger.nature);
                                        trigger.player.removeMark('genshin_earth');
                                    }
                                }
                            },
                        },
                        niyan: {
                            audio: 'ext:原神杀/audio:2',
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object' && player.isPhaseUsing()) {
                                        var evt = player.getLastUsed();
                                        if (evt && evt.card && get.type(evt.card) && get.type(evt.card) != get.type(card)) {
                                            return num + 10;
                                        }
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (
                                    player.getHistory('custom', function (evt) {
                                        return evt.niyan_name == event.card.name;
                                    }).length
                                )
                                    return false;
                                var evt = player.getLastUsed(1);
                                if (!evt || !evt.card) return false;
                                if (!player.isPhaseUsing()) return false;
                                var evt2 = evt.getParent('phaseUse');
                                if (!evt2 || evt2.name != 'phaseUse' || evt2.player != player) return false;
                                return get.type(evt.card) && get.type(evt.card) != get.type(event.card);
                            },
                            content() {
                                player.draw();
                                player.getHistory('custom').push({ niyan_name: trigger.card.name });
                            },
                        },
                        liming: {
                            group: ['liming_count', 'liming_type'],
                            subSkill: {
                                type: {
                                    mark: true,
                                    forced: true,
                                    intro: {
                                        content(storage) {
                                            if (!storage.length) {
                                                return '未使用或打出过有类型的牌';
                                            } else {
                                                var str = '已使用过' + get.translation(storage[0]);
                                                for (var i = 1; i < storage.length; i++) {
                                                    str += '、' + get.translation(storage[i]);
                                                }
                                                str += '牌';
                                                return str;
                                            }
                                        },
                                    },
                                },
                                count: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return _status.currentPhase == player;
                                    },
                                    content() {
                                        var suit = trigger.card.suit;
                                        var type = get.type(trigger.card);
                                        if (suit) {
                                            player.storage.liming.add(suit);
                                        }
                                        if (type) {
                                            player.storage.liming_type.add(type);
                                            player.markSkill('liming_type');
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            audio: 'ext:原神杀/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            init(player) {
                                player.storage.liming = [];
                                player.storage.liming_type = [];
                            },
                            mark: true,
                            forced: true,
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return '未使用或打出过有花色的牌';
                                    } else {
                                        var str = '已使用过' + get.translation(`${storage[0]}2`);
                                        for (var i = 1; i < storage.length; i++) {
                                            str += '、' + get.translation(`${storage[i]}2`);
                                        }
                                        str += '牌';
                                        return str;
                                    }
                                },
                            },
                            filter(event, player) {
                                return player.storage.liming.length == 4 || player.storage.liming_type.length == 3;
                            },
                            ai: {
                                threaten: 1.2,
                            },
                            content() {
                                'step 0';
                                player.storage.liming.length = 0;
                                player.storage.liming_type.length = 0;
                                player.chooseTarget(get.prompt('liming')).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].damage('fire');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                            },
                        },
                        duanyu: {
                            shaRelated: true,
                            audio: 'ext:原神杀/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.storage.mozhuan) {
                                    if (trigger.target.countDiscardableCards(player, 'h') < 0) event.finish();
                                } else {
                                    if (trigger.target.countDiscardableCards(player, 'he') < 0) event.finish();
                                }
                                if (player.storage.mozhuang == true) {
                                    player
                                        .discardPlayerCard('he', trigger.target, get.prompt('duanyu', trigger.target))
                                        .set('ai', function (button) {
                                            if (!_status.event.att) return 0;
                                            return get.value(button.link);
                                        })
                                        .set('att', get.attitude(player, trigger.target) <= 0);
                                } else {
                                    player
                                        .discardPlayerCard('h', trigger.target, get.prompt('duanyu', trigger.target))
                                        .set('ai', function (button) {
                                            if (!_status.event.att) return 0;
                                            return get.value(button.link);
                                        })
                                        .set('att', get.attitude(player, trigger.target) <= 0);
                                }
                                ('step 1');
                                if (player.storage.kuanglan) {
                                    player.gainPlayerCard(get.prompt('duanyu', trigger.target), trigger.target, 'hej', 'visibleMove').set('ai', function (button) {
                                        var player = _status.event.player;
                                        var evt = _status.event.target;
                                        if (get.attitude(player, evt) > 0 && get.position(button.link) == 'j') return 4 + get.value(button.link);
                                        return 3;
                                    });
                                }
                            },
                        },
                        mozhuang: {
                            juexingji: true,
                            audio: 'ext:原神杀/audio:1',
                            derivation: ['kuanglan', 'jinmie'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.isDamaged();
                                });
                                return num > player.countCards('h') && !player.storage.mozhuang;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                ('step 1');
                                player.addSkill('kuanglan');
                                player.storage.mozhuang = true;
                                player.awakenSkill('mozhuang');
                            },
                        },
                        kuanglan: {
                            juexingji: true,
                            audio: 'ext:原神杀/audio:1',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.isDamaged();
                                });
                                return num == game.countPlayer() && !player.storage.kuanglan;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                ('step 1');
                                player.addSkill('jinmie');
                                player.storage.kuanglan = true;
                                player.awakenSkill('kuanglan');
                            },
                        },
                        jinmie: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '灭',
                            intro: {
                                content(storage, player, skill) {
                                    var str = player.storage.jinmie ? '出牌阶段限一次,你可以将牌堆顶的一张牌当做水属性的杀使用' : '出牌阶段限一次,你可以将牌堆底的一张牌当做水属性的杀使用';
                                    return str;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:原神杀/audio:2',
                            content() {
                                'step 0';
                                if (player.storage.jinmie == true) {
                                    player.storage.jinmie = false;
                                    event.cards = get.cards(1);
                                } else {
                                    player.storage.jinmie = true;
                                    event.cards = get.bottomCards(1);
                                }
                                ('step 1');
                                player.chooseUseTarget({ name: 'sha', nature: 'river' }, event.cards, true, false).viewAs = true;
                                player.markSkill('jinmie');
                            },
                            ai: {
                                order: 2.7,
                                result: {
                                    player(player) {
                                        if (player.getStat().card.sha < 1) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        除邪: {
                            subSkill: {
                                win: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + 2;
                                        },
                                    },
                                },
                                block: {
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            if (player != target) return false;
                                        },
                                        maxHandcard(player, num) {
                                            return num - 2;
                                        },
                                    },
                                },
                            },
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                var num = player.hp > event.player.hp ? player.hp - event.player.hp : event.player.hp - player.hp;
                                return player.countCards('he') > Math.min(1, num);
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > -3;
                            },
                            logTarget(event, player) {
                                return event.player;
                            },
                            content() {
                                'step 0';
                                var num = player.hp > trigger.player.hp ? player.hp - trigger.player.hp : trigger.player.hp - player.hp;
                                player.chooseToDiscard('he', Math.max(1, num), true);
                                trigger.player
                                    .chooseControl(lib.suit)
                                    .set('ai', function () {
                                        return lib.suit.randomGet();
                                    })
                                    .set('prompt', '请选择一个花色');
                                ('step 1');
                                event.suit = result.control;
                                game.log(trigger.player, '选择的花色是', '#y' + get.translation(event.suit));
                                trigger.player.judge(function (card) {
                                    if (card.suit == _status.event.getParent('除邪').suit) return 4;
                                    return 0;
                                });
                                ('step 2');
                                if (result.bool == true) {
                                    trigger.player.draw(2);
                                    trigger.player.addTempSkill('除邪_win');
                                } else {
                                    trigger.player.addTempSkill('除邪_block');
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        var numj = target.countCards('j');
                                        var numhe = target.countCards('he');
                                        if (numhe == 0) return numj > 0 ? 6 : -6;
                                        return -6 - (numj + 1) / numhe;
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                    },
                    dynamicTranslate: {
                        duanyu(player) {
                            if (player.storage.kuanglan) return '你使用杀指定目标后你可弃置其一张牌获得其区域内一张牌';
                            if (player.storage.mozhuang) return '你使用杀指定目标后你可弃置其一张牌';
                            return '你使用杀指定目标后你可弃置其一张手牌';
                        },
                    },
                    translate: {
                        除邪: '除邪',
                        除邪_info: '一名角色回合开始时, 你可以弃置x张手牌(x为你与其血量差且至少为1),令其声明一种花色并进行判定,若结果与其声明花色相同则其摸两张牌且此回合手牌上限+2,若不同则其本回合不能指定其他角色为目标且手牌上限-2.',
                        leidianying: '影',
                        huasanli: '花散里',
                        lt_xg: '霄宫',
                        xiaogong: '霄宫',
                        shenlilinhua: '神里绫华',
                        94: '94',
                        swimmer_bbl: '芭芭拉',
                        swimmer_qin: '琴',
                        xd: '玄德',
                        hj_zhongli: '钟离',
                        linyin: '林隐',
                        tuer: '兔儿',
                        moyu: '摸鱼桑',
                        yusheng: '雨声',
                        kinro: 'kinro',
                        sp_tuer: '兔儿',
                        guanxing_yusheng: '雨声',
                        旅行者: '旅行者',
                        feixiee: '菲谢尔',
                        ys_kaiya: '凯亚',
                        'kong&ying': '空&荧',
                        kaiya_ganyu: '甘雨',
                        xingqiu: '行秋',
                        youla: '优菈',
                        keli: '可莉',
                        yun_zhongli: '钟离',
                        yanfei: '烟绯',
                        kong: '空',
                        dc_bbl: '芭芭拉',
                        yun_abeiduo: '阿贝多',
                        ying: '荧',
                        luoshaliya: '罗莎莉亚',
                        yusheng_abeiduo: '阿贝多',
                        ganyu: '甘雨',
                        迪卢克: '迪卢克',
                        芭芭拉: '芭芭拉',
                        阿贝多: '阿贝多',
                        宵宫: '宵宫',
                        心海: '心海',
                        雷电将军: '雷电将军',
                        琴: '琴',
                        xiao: '魈',
                        lita_hutao: '胡桃',
                        lita_qiqi: '七七',
                        moyu_diluke: '迪卢克',
                        dadaliya: '达达利亚',
                        zaoyou: '早柚',
                        钟离: '钟离',
                        sp钟离: '钟离',
                        温迪: '温迪',
                        凝光: '凝光',
                        北斗: '北斗',
                        班尼特: '班尼特',
                        罗莎莉亚: '罗莎莉亚',
                        递茶_迪卢克: '迪卢克',
                        御神装勿忘: '御神装勿忘',
                        胡桃: '胡桃',
                        重云: '重云',
                        达达利亚: '达达利亚',
                        诺艾尔: '诺艾尔',
                        七七: '七七',
                        刻晴: '刻晴',
                        菲谢尔: '菲谢尔',
                        行秋: '行秋',
                        雷泽: '雷泽',
                        砂糖: '砂糖',
                        甘雨: '甘雨',
                        dc阿贝多: '阿贝多',
                        莫娜: '莫娜',
                        魈: '魈',
                        迪奥娜: '迪奥娜',
                        优菈: '优菈',
                        烟绯: '烟绯',
                        安柏: '安柏',
                        早柚: '早柚',
                        不倒貉貉: '不倒貉貉',
                        //////
                        dc_kaiyan: '开眼',
                        dc_kaiyan_info: '每名角色每轮限一次,当一名其他角色造成伤害后,你可以令其摸一张牌,其选择一项:1.选择攻击范围内的一名角色令你对其造成一点雷电伤害;2.令你摸一张牌并获得与伤害值等量层数的<愿力>.',
                        dc_zhenmeng: '真梦',
                        dc_zhenmeng_info: '锁定技,当一名角色受到雷电伤害后,你获得与伤害值等量层数的<愿力>.出牌阶段开始时,你可以消耗所有<愿力>,每消耗一层<愿力>你依次执行以下效果:1.视为对攻击范围内的一名角色使用一张雷【杀】;2.封印效果1目标的非锁定技直到回合结束;3.本回合限x次,你可以将一张黑色牌当无次数限制的雷【杀】使用;4.你以效果3使用的【杀】造成伤害后,你可以令至多x名角色摸一张牌(x为你所消耗的<愿力>层数-2,你最多拥有6层愿力).',
                        dc_zhenmeng_sha: '梦想一心',
                        zhuyuanbaiyan: '诸愿百眼',
                        zhuyuanbaiyan_info: '当一名其他角色使用一张伤害类的牌结算后,你可以增加此牌的点数的<愿力>若其未因此技能摸牌你令其摸一张牌,你最多可以拥有60点<愿力>.每当你拥有60点<愿力>后你移去所有愿力,若你已发动过<梦想真说>你重置之.',
                        yanshouling: '眼狩令',
                        yanshouling_info: '隐匿技,锁定技,当你在自己/其他角色的回合登场时,随机令一名其他角色/该角色失去所有角色技能,直到其对你造成伤害为止.',
                        mengxiangzhenshuo: '梦想真说',
                        mengxiangzhenshuo_info: '限定技,出牌阶段,你可以废除武器栏,移去所有< 愿力>,根据移去的<愿力>数量,令至多三名角色依次执行以下所有效果:小于10,各摸一张牌;不小于10/20/30/40/50/60,各获得一张雷 [杀] /各获得两张基本牌/各获得一张副类别不为武器牌的装备牌/各获得两张锦囊牌/下一次造成的伤害+1/下一次造成伤害后,摸两张牌.执行完毕后,你获得<梦想一心>.',
                        mengxiangyixin: '梦想一心',
                        mengxiangyixin_info: '你的攻击范围+2;你获得<愿力>时,可以摸一张牌并使用一张牌.',
                        fuxing: '祓行',
                        fuxing_info: '当一名角色进行判定时,你可以观看牌堆顶2+X (x为你与其血量差且至多为3)张牌,将其中1张牌当其判定牌(该结果不可被更改)你获得剩余牌.',
                        sakura_zhuiyi: '追忆',
                        sakura_zhuiyi_info: '出牌阶段限一次,弃置任意张牌摸等量的牌并视为使用一张基本牌或者非延时锦囊牌,若你以此法弃置所有手牌,则你回复一点体力.',
                        yanxiaotinghuowu: '焰硝庭火舞',
                        yanxiaotinghuowu_info: '出牌阶段开始时,若你角色牌上< 庭火>的数量小于三张,你可以将至多三张♦️️牌置于角色牌上,称为<庭火>;你可以将< 庭火>当火[杀]使用,你使用点数为你攻击范围的倍数的火[杀]不计入次数,若之点数为奇/偶数,则可以多选择一名目标/摸一张牌.',
                        liujinyunjiancao: '琉金云间草',
                        liujinyunjiancao_info: '当你对其他角色造成火焰伤害后,你可以选择其中一名角色,其获得<琉金火光>(<琉金火光>:锁定技,当你即将受到除宵宫外的其他角色造成的伤害时,你受到1点火焰伤害.)直到你下回合开始,场上只能存在一个<琉金火光>,当拥有<琉金火光>的角色死亡时随机令一名与其距离为1的其他角色获得之.',
                        yanxin: '焰心',
                        yanxin_info: '你可以将任意张点数之和为奇数的牌当做任意基本牌使用或打出.',
                        xg_yanhuo: '烟火',
                        xg_yanhuo_info: '你使用牌时,若此牌对应实体牌的数量不小于一你摸X张牌(X为此技能本回合发动次数)',
                        shuanghua: '神理流·霜华',
                        shuanghua_info: '当你累计失去3张基本牌后且你空置的装备栏数量大于2,你令一名其他角色选择是否弃置一张装备牌,若该角色未因此弃置牌你随机获得牌堆中的一张装备牌和锦囊牌',
                        xiabu: '神理流·霞步',
                        xiabu_info: '准备阶段,你可以展示一张红色牌并摸一张牌,本回合与其他角色距离-1、无属性杀视为冰属性杀、使用冰属性杀对一名角色造成伤害后可弃置该角色一张牌.',
                        shuangmie: '神理流·霜灭',
                        shuangmie_info: '出牌阶段限X次,你可以弃置一张牌摸一张牌,若弃置的牌为装备牌你可以视为使用一张无距离限制的冰属性杀(X为你装备区内牌的数量)',
                        tutu: '兔兔',
                        tutu_info: '出牌阶段限一次,你可以将一张红色手牌作为【兔兔伯爵】交给一名其他角色,若你计算与其距离为1,你摸一张牌,若其计算与你的距离大于1,其本回合不能响应你的牌.拥有【兔兔伯爵】的角色手牌对你可见,你对其造成伤害后可以弃置其一张牌.',
                        feiyi: '飞翼',
                        feiyi_info: '锁定技,你计算与其他角色的距离-1.结束阶段,你可以选择一名角色获得此效果(每局游戏限一次).',
                        dangshu: '丹书',
                        dangshu_info: '出牌阶段,你每使用一张红色牌便获得一枚<丹火印>(计为x,最多三枚,回合结束时清空).根据<丹火印>的数量你获得以下效果:①手牌上限+x,计算与其他角色的距离-x;②使用红色牌时摸一张牌;③你的红色牌不能被响应.',
                        zhuozhuo: '灼灼',
                        zhuozhuo_info: '你造成伤害时,可以清空<丹火印>,根据数量为此伤害附加以下效果:①将此伤害改为火属性;②对方须弃置一张牌,否则额外受到一点火焰伤害;③此伤害+1.',
                        dc_jieqi: '结契',
                        dc_jieqi_backup: '结契',
                        dc_jieqi_info: '出牌阶段,你可以选择一项,移除该项:①获得三枚<丹火印>;②获得三张红色牌;③回复三点体力.',
                        jichou: '记仇',
                        jichou_info: '当你受到一点伤害后,你可以摸一张牌,将一张牌置于武将牌上称为<仇>,你每有一张<仇>,你的手牌上限及出杀次数便+1,你造成伤害时,可以弃置一张<仇>,弃置目标两张牌或令一名角色摸两张牌.',
                        dc_ninglang: '凝浪',
                        dc_ninglang_info: '你于出牌阶段每次使用牌或造成伤害时进行一次计数,出牌阶段结束时清空计数,若计数不小于你的体力上限或全场势力数,你可以对一名攻击范围内的角色造成1点伤害(若不小于两者之和则改为2点).',
                        dongdong: '冻冻',
                        dongdong_info: '你使用【杀】造成伤害时可以令一名角色获得与伤害值等量层数的<冻冻猫爪护盾>(最多五层),每层令拥有该护盾的角色手牌上限+1,计算与其他角色的距离-1,受到伤害时移除与伤害值等量的层数并减少移除层数等量的伤害.',
                        tetiao: '特调',
                        tetiao_info: '锁定技,你的【桃】和【酒】均转化成【猫尾特调】.出牌阶段,你可以将一张【猫尾特调】交给一名其他角色,其可以交给你除【猫尾特调】外的任意张牌.',
                        yizhi: '一知',
                        yizhi_info: '每当你受到其他角色造成的伤害后,你可与该角色各摸一张牌该角色的非锁定技于你下个准备阶段开始前失效.',
                        banjie: '半解',
                        banjie_info: '每回合限X次,有角色于其出牌阶段摸牌后你可令其将Y张的手牌置于牌堆底(X为你的当前体力,Y为该角色当前手牌的一半向下取整且至少为1).',
                        qizuo: '奇佐',
                        qizuo_info: '锁定技,游戏开始时,你选择一名其他角色,每当你和其造成或受到伤害后,你获得一个<论>并摸一张牌, 你须交给其一张牌.( 相互造成伤害时触发两次)',
                        shilun: '十论',
                        shilun_info: '出牌阶段开始时,你可以展示牌堆顶的X张牌 (X为<论>的数量且至多为10),选择一项:①依次选择并使用其中的普通锦囊牌(至多三张) 2将其中的基本牌和装备牌分配给任意名角色各一张.',
                        shuiyu: '水愈',
                        shuiyu_info: '当场上的其他角色是有/失去装备牌时你可以摸一张牌/获得该牌;当你需要使用或打出桃时你可以将弃牌堆中一张本回合未选择过的红色牌当做【桃】使用或打出.',
                        qingbi: '清碧',
                        qingbi_info: '准备阶段开始时若你的装备区内有牌,你随机弃置装备区内一张牌;当你失去单一一张装备区内的牌后你随即获得一张与该牌花色不同的牌',
                        fengyu: '风语',
                        fengyu_info: '当一张装备牌进入弃牌堆时,若该牌的点数不小于你的手牌数你可令一名角色摸一张牌',
                        dc_fenglun: '风轮',
                        dc_fenglun_info: '你可以将【闪】当【杀】使用或打出;当你使用或打出【闪】或以此法转化的【杀】时,你可以弃置对方的一张牌.',
                        dc_nuowu: '傩舞',
                        dc_nuowu_info: '出牌阶段开始时,你可以获得一张【杀】和【闪】,本回合你不能使用锦囊牌,但使用的【杀】无距离限制且可以额外指定一个目标,若你使用【杀】造成了伤害,你摸一张牌本回合可使用【杀】的次数+1(回合内限一次).此阶段结束时,你失去一点体力,若你于此阶段内使用了额外的【杀】,你弃置等量的牌.',
                        qiongsuan: '穷酸',
                        qiongsuan_info: '锁定技,你的判定区始终视为存在【兵粮寸断】.',
                        zhanxing: '占星',
                        zhanxing_info: '锁定技,其他角色的手牌及牌堆顶的一张牌对你可见.',
                        huanyuan: '幻愿',
                        huanyuan_info: '一名角色即将进行判定时,你可以令其从牌堆顶或牌堆底摸一张牌或弃置其一张手牌.',
                        xingming: '星命',
                        xingming_info: '出牌阶段限一次,你可以将牌堆顶一张牌置于一名角色武将牌上称为<星命>,拥有<星命>的角色受到伤害/回合结束时弃置<星命>并进行判定,若判定结果的颜色与<星命>相同,你摸一张牌,并根据颜色执行以下效果:黑色:此伤害+1/其失去一点体力;红色:此伤害-1/其回复一点体力.不同,你弃置一张牌.',
                        dc_chuangsheng: '创生',
                        dc_chuangsheng_info: '出牌阶段,每种类型限一次,你可以展示一张手牌并将其改为同类型的任意牌,将之交给一名角色,直到你的下一个回合开始,其攻击范围+1,其他角色计算与其的距离+1,若不为你,你摸一张牌.',
                        xd_chouka: '抽卡',
                        xd_chouka_info: '锁定技,出牌阶段开始时,你可将任意张牌置入弃牌堆从牌堆中获取等量的牌.(有10%的概率获取一张武将牌,每累计弃置十张牌则必定获得一张武将牌)',
                        yuzhang: '玉璋',
                        yuzhang_info: '①游戏开始时你获得4点护盾  ②回合开始时你清除所有护盾值并摸等量牌.  ③出牌阶段限一-次,你可以弃置至多2张牌获得等量护盾.',
                        hj_tianxing: '天星',
                        hj_tianxing_info: '出牌阶段限一次,你可以弃置X张手牌对X名角色造成一点伤害',
                        guiye: '归夜',
                        guiye_info: '锁定技,你受到的伤害均视为流失体力.你进入濒死状态时,延时至当前角色回合结束时再进行结算,此间你无法成为其他角色使用牌的目标.',
                        shenzhan: '慎战',
                        shenzhan_info: '当一名其他角色使用【杀】指定目标时,你可以弃置一张【杀】取消所有目标,你摸一张牌',
                        lunyan: '论演',
                        lunyan_info: '出牌阶段限一次,你可将观看牌堆顶的X张牌并将其中一张锦囊牌当做任意锦囊牌使用将剩余的牌以任意顺序置于牌堆顶或牌堆底.(X为你的体力值)',
                        shanlun: '善论',
                        shanlun_info: '你的回合外你获得牌后你可以使用这张牌和一名角色拼点,若你赢你可立即使用这张牌,否则对方获得这张牌',
                        qunxian: '群贤',
                        qunxian_info: '其他角色的拼点牌进入弃牌堆后你可交给一名角色或置于牌堆顶',
                        kuishi: '窥视',
                        kuishi_info: '你的回合外有其他角色使用或弃置的锦囊牌进入弃牌堆时你可以弃置任意张非锦囊牌获得其中等量的锦囊牌',
                        xingmie: '兴灭',
                        xingmie_info: '当你使用无懈可击后,你可以令本回合除你之外使用过无懈可击的角色展示手牌弃置其中的所有黑色牌和一张红色牌.',
                        juxing: '拒行',
                        juxing_info: '你可以将你的任意一张手牌当做【无懈可击】使用.',
                        guanli: '管理',
                        guanli_info: '一名已受伤角色准备阶段,你可以令其选择以下一项:①你摸x张牌②其体力上限减x ( x为该角色失去体力数)',
                        xiezhu: '协助',
                        xiezhu_info: '当体力值不高于你的角色进行[管理]的选择时,你可以代替其选择.并且这个回合,该角色对你造成的伤害变为0',
                        yinshi: '阴时',
                        yinshi_info: '锁定技,一名其他角色的准备阶段,你将手牌数摸至与你体力上限相同;奇/偶数轮次内,你使用黑/红色牌或成为黑/红色牌的目标后,摸/弃置一张牌.',
                        niyang: '逆阳',
                        niyang_info: '出牌阶段开始时,若你已受伤,你可以减1点体力上限,若此时你的体力值等于体力上限,你获得三张类别不同的牌,若不等于则回复1点体力.',
                        wushi: '无识',
                        wushi_info: '锁定技,你的手牌上限为X (X为你已损失的体力值).结束阶段,若你没有手牌,你加1点体力上限.',
                        yusheng_tianxiang: '天象',
                        yusheng_tianxiang_info: '每当你即将摸牌时,可观看牌堆顶两倍数量的牌,将其以任意顺序置于牌堆顶或弃牌堆.',
                        xinghe: '星河',
                        xinghe_info: '当你不因此技能使用或打出一张牌后,可摸一张牌并选择一项: 1.立刻使用该牌;2.将该牌交给一名其他角色;3.弃置一张手牌.',
                        kejin: '氪金',
                        kejin_info: '回合开始时或抽卡后,你可以失去一点体力或弃置两张牌,获得10枚"相遇之缘".',
                        chouka: '抽卡',
                        chouka_info: '回合开始时或氪金后,你可以消耗10枚"相遇之缘"进行十连抽卡,每发有6%概率获得一张武将牌(若均未抽中则保底一张)及6%的概率获得一张牌,你获得这些武将牌上除主公技、限定技、觉醒技外的所有技能直到你的下一个回合开始.',
                        baipiao: '白嫖',
                        baipiao_info: '锁定技,游戏开始时/每轮开始时/你造成伤害时/你回复体力时,你获得10/3/2/1枚<相遇之缘>.',
                        zuimie: '罪灭',
                        zuimie_info: '当你使用牌仅指定一个目标时或一名其他角色造成伤害后,你可以将其一张牌置于自己的角色牌上,称为<罪>;当有角色的判定牌生效时,你可以打出一张<罪>代替之.',
                        zuifa: '罪罚',
                        zuifa_info: '你可以将两张颜色不同的<罪>当雷【杀】使用或打出,以此法使用的雷【杀】不计入次数.',
                        huangmai: '皇脉',
                        huangmai_info: '锁定技,游戏开始时,你需将三张牌置于你的武将牌上,称为<实>.摸牌阶段结束时,你可用任意张手牌替换等量的<实>.',
                        yusheng_shuangxi: '霜袭',
                        yusheng_shuangxi_info: '你可如手牌般使用或打出<实>并选择一项: 1.摸一张牌: 2.弃置此牌一名目标的一张牌. 你使用<实>时无距离限制且你可令其指定目标数+1/-1.',
                        yusheng_yinshi: '隐实',
                        yusheng_yinshi_info: '你弃牌阶段弃牌后,可用其中不同花色的牌补充<实>(<实>至多同时存在三张).',
                        shuanggui: '双轨',
                        shuanggui_info: '锁定技,你不因此技能而执行摸牌阶段或出牌阶段,你额外执行一次该阶段.',
                        zhuisu: '追溯',
                        zhuisu_info: '每轮限一次, 其他角色的回合开始阶段,若其体力值大于你,则你可以令其摸两张牌,你失去一点体力. 若此做,你令其跳过此回合,你执行一个额外的回合.',
                        dieyin: '蝶引',
                        dieyin_info: '出牌阶段限一次,你可以失去2点体力值(体力值小于4时改为1),本阶段你获得以下效果:你造成的伤害进行火元素附魔且你使用【杀】的上限为你已损失的体力值,你使用【杀】造成大于1点的伤害后,目标角色获得技能<血梅>.',
                        anshen: '安神',
                        anshen_info: '限定技,出牌阶段,若你体力值小于3,你可以选择至多四名其他角色,令这些角色选择一项:1.交给你一张【杀】或【桃】;2.受到一点火焰伤害,你回复1点体力.结束阶段,若你击杀过一名角色且此技能已发动,你重置此技能.',
                        tuomang: '脱茫',
                        tuomang_info: '出牌阶段或当你受到伤害后,你可以令一名已受伤的角色摸一张牌并选择一项:①使用一张牌;②弃置两张手牌且本回合该技能失效.',
                        yingzhao: '应召',
                        yingzhao_info: '每轮限一次,当有角色于其回合外使用手牌时,你可以令其摸两张牌.',
                        yucai: '雨裁',
                        yucai_info: '游戏开始时你将四张牌置于你的武将牌上称之为【文】,你可如手牌般使用或打出【文】中的基本牌,当你的【文】不含基本牌时你获得全部【文】,当你的【文】小于4时你将【文】补充至4',
                        shuangshi: '霜矢',
                        shuangshi_info: '出牌阶段限一次,你可以将至多三张牌当冰【杀】使用,若以此法转化的牌不小于两张,根据牌的类型和数量,你为此【杀】增加以下效果:基本牌:1.无视防具,2.不可闪避;锦囊牌:1.造成伤害时弃置目标一张牌,2.你摸两张牌;装备牌:1.伤害值+1,2.目标非锁定技失效直到回合结束.',
                        dc_linji: '麟迹',
                        dc_linji_info: '锁定技,游戏开始时,将牌堆中的【阿莫斯之弓】置入你的装备区;其他角色计算与你的距离+x(x为你已损失的体力值).',
                        fengling: '风灵',
                        fengling_info: '你可以将你的【杀】改为任意属性,你对其他角色造成属性伤害前后(选其一)可以令其进入连环状态,其非锁定技失效直到回合结束或解除连环状态.',
                        chumei: '触媒',
                        chumei_info: '出牌阶段限一次,当一名其他角色使用或打出牌时,若其处于连环状态,你可以使之无效,解除其连环状态;回合结束时,若你本回合未造成过属性伤害,你可以令一名角色进入连环状态.',
                        zuocheng: '作成',
                        zuocheng_info: '每回合每名角色限一次,你造成属性伤害后可以令一名角色摸一张牌,该角色下一次造成的属性伤害+1,直到其回合结束.',
                        ouxiang: '偶像',
                        ouxiang_info: '你使用牌指定目标时,若目标数大于1,你可以摸两张牌,你可以将此牌造成的伤害改为等量的回复,若其未受伤则改为摸两张牌.',
                        dc_zhiyu: '治愈',
                        dc_zhiyu_info: '出牌阶段限一次,你可以将一张♥️️️牌当【桃园结义】或【五谷丰登】使用.',
                        anke: '安可',
                        anke_info: '结束阶段,你可以令一名本回合因你回复过体力的角色摸两张牌.',
                        yujian: '雨剑',
                        yujian_info: '出牌阶段限一次,你可以将所有手牌交给一名其他角色,该角色获得等量的<雨帘剑>标记(最多三枚),当其受到伤害时,消耗一枚<雨帘剑>并摸一张牌;当其使用【杀】指定目标后,消耗一枚<雨帘剑>视为对其中一个目标再使用一张【杀】;当其出牌阶段或回合结束时,消耗所有<雨帘剑>并回复一点体力.',
                        touxian: '偷闲',
                        touxian_info: '锁定技,你没有手牌时,视为拥有<英姿>、<闭月>;你的手牌数不大于1时,视为拥有<享乐>、<智愚>.',
                        bingchao: '冰潮',
                        bingchao_info: '出牌阶段,当你对一名其他角色造成了一次伤害后,你可以将该角色的一张牌置于你的角色牌上,称为<潮>:你至多拥有两张<潮>,你毎有一张<潮>,受到的属性伤害-1.当你拥有两<潮>吋,你可以移去所有<潮>,弃置一名其他角色两张牌.',
                        ninglang: '凝浪',
                        ninglang_info: '锁定技,你毎使用一张牌则茯得l个<浪>标记(最大为7).结束价段,你迸行一次判定,若判定结果点数的一半向上取整后不大于<浪>的数量,你移去所有<浪>并选择一项: 1.对至多两名名手牌数之和等于X的角色造成1点仍害; 2.对手牌数小于X的一名其他角色造成1点仍害( X为移去<浪>的数量).',
                        bengbengzhadan: '蹦蹦',
                        bengbengzhadan_info: '出牌阶段限一次,你可以将一张手牌置于牌堆2x以内的位置(x为存活人数)称为<蹦蹦炸弹>获得<蹦蹦炸弹"的角色须将一张闪电置入判定区,否则弃置此牌并受到你造成的一点火焰伤害',
                        xinxing: '幸星',
                        xinxing_info: '锁定技,你的判定始终朝你有利的方向发展.当一张红色判定牌进入弃牌堆时,你可以获得之.',
                        yun_tianxing: '天星',
                        yun_tianxing_info: '准备阶段,你可以跳过摸牌阶段和出牌阶段.若此做,你对一名其他角色(不得是上一轮你以此法指定的角色)造成1点伤害,你令其翻面并获得<晶化>标记.有<晶化>的角色不能使用和打出牌.<晶化>会于该角色的武将牌翻至正面朝上后移除.',
                        lita_hanbing: '寒病',
                        lita_hanbing_info: '游戏开始时,你将牌堆底的一张牌置于角色牌上,称为"符> ;当你造成伤害或有角色受到伤害时,你可以重铸一张与 <符>牌花色相同的牌并使用牌堆底的一张牌替换<符>,令一名角色回复1点体力.',
                        lita_due: '度厄',
                        lita_due_info: '出牌阶段限一次,你可以将任意张与<符>类别相同的牌置于等量的其他角色武将牌上,称为<真符>(限一张).场上角色对其他有<真符>的角色造成伤害时,其可以获得一张<真符>牌,回复1点体力.',
                        xianlv: '宪律',
                        xianlv_info: '锁定技,每轮开始时,你令所有角色获得一项「宪律」的效果,该效果生效至下次发动此技能.(两次选择的宪律不得相同))',
                        yanfei_danhuo: '丹火',
                        yanfei_danhuo_info: '出牌阶段,你每使用一种牌(每种牌限一次)  便从牌堆摸一张牌将一张牌至于武将牌上称为「印」,你每有一张「印」手牌上限便  +1,回合结束时你需弃置所有「印」.',
                        jieqi: '结契',
                        jieqi_info: '出牌阶段限一次, 当你造成伤害时,你可以弃置一张「印」将此伤害改为火焰伤害',
                        kong_lvli: '旅历',
                        kong_lvli_info: '当你造成/受到伤害后,若受伤角色/伤害来源有手牌,你可以将其一张手牌置于你的武将牌上称为<旅>,你至多拥有X张<旅>(X为场上势力数) ;准备阶段,你可以交给一名角色一张 <旅>,其可以用任意张手牌替换等量的<旅>.',
                        nizao: '拟造',
                        nizao_info: '你可以将一张牌按以下组合相互转化以使用: 1,[杀]和[闪];2,[桃]和[酒];3,[过河拆桥]和[顺手牵羊]; 4,[无中生有] 和[五谷丰登] ; 5,[借刀杀人]和[桃园结义] ; 6,[决斗]和[火攻] ; 7, [无懈可击] 和[铁索连环];8,[兵粮寸断]和[乐不思蜀];9,[南蛮入侵]和[万箭齐发].',
                        jingshou: '景收',
                        jingshou_info: '当有角色被延时锦囊指定或因弃置而失去至少两张牌时,你可以获得武将牌上的一张<旅>.',
                        yun_chuangsheng: '创生',
                        yun_chuangsheng_info: '锁定技,其他角色的结束阶段,若你本回合内没有使用或打出手牌且你没有受到伤害,你摸一张牌;你的回合内,当你使用牌时,若本回合你没有使用过与此牌同类型的牌,你摸一张牌.',
                        wangfan: '忘返',
                        wangfan_info: '出牌阶段限一次,你可以将一张手牌当做【乐不思蜀】对自己使用,摸一张牌.',
                        guanjing: '观景',
                        guanjing_info: '准备阶段开始时,你可以选择一个类别并弃置至多X张区域内的牌,亮出牌堆顶两倍数量的牌并获得其中的你所选择的类别的牌.(X为你的体力上限)',
                        liaodong: '聊动',
                        liaodong_info: '你受到伤害时你可以摸一张牌令伤害来源选择一项,1:摸一张牌此次伤害-1.2:弃置一张牌.',
                        buju: '不矩',
                        buju_info: '出牌阶段开始时,你可以摸至多X张牌( X为你的体力上限),若如此做,你于本阶段内至多使用Y张牌( Y为X-你摸的牌数,且最少为1).',
                        shengli: '圣礼',
                        shengli_info: '每回合限一次, 当你造成或受到无属性伤害时,你可以展示牌堆顶一张牌并选择一项:①使用该牌(无次数限制)②摸一张牌.',
                        lsly_yexing: '夜行',
                        lsly_yexing_info: '锁定技,你的黑色牌无视距离限制.',
                        yusheng_chuangsheng: '创生',
                        yusheng_chuangsheng_info: '游戏开始时,你需展示一张手牌,去除其所有原效果和类别,声明其为<华>,并从以下效果中选择两项令其获得.1.摸两张牌.2.视为使用或打出任意一张基本牌或无懈可击.3.改变两名角色的连环状态.4.获得一名角色一张手牌.5.弃置一名角色一张牌.<华> 可根据其效果被使用或打出.',
                        yusheng_yanghua: '阳华',
                        yusheng_yanghua_info: '锁定技,每当<华>即将进入弃牌堆时,你需修改其效果并将其置于一名角色的武将牌上.该角色准备阶段,获得其武将牌上的<华>.其他角色计算与武将牌上有<华>的角色距离+1.',
                        tianhua: '天华',
                        tianhua_info: '出牌阶段限一次,你可以将一张♥️️牌当[五谷丰登]使用:当你使用[五谷丰登]时,可以取消其中任意名目标视为对这些角色使用[万箭齐发]',
                        linji: '麟迹',
                        linji_info: '出牌阶段,你可以将一张♣️️牌置于一名其他角色的武将牌上,称为<莲>:武将牌上有<莲>的角色在其回合开始判定并选择一项: 1、弃置一张与此判定牌花色相同的牌,本回合你不是其合法目标2、你获得此判定牌,其受到1点冰冻伤害.',
                        xinkai: '心铠',
                        xinkai_info: '出牌阶段,若你没有<护心铠>,你可以将一张♥️️牌或装备牌置于武将牌上称为<护心铠>,你使用【杀】造成伤害后,若你拥有<护心铠>,则你有50%概率可以令除受伤角色外的一名角色回复一点体力;你受到伤害时,弃置<护心铠>,防止此伤害并重置武将牌.',
                        saochu: '扫除',
                        saochu_info: '出牌阶段开始时,若你拥有<护心铠>,你弃置<护心铠>并摸两张牌,本回合内:①你可以将一张牌当【杀】使用;②你的【杀】无距离限制且可以额外指定一个目标;③<心铠>的回复概率改为100%.',
                        chenxian: '尘闲',
                        chenxian_info: '锁定技,你始终跳过你的出牌阶段,你的手牌上限+x(x为你的体力值),当你获得牌时,你可以使用一张牌.',
                        spchenxian: '尘闲',
                        spchenxian_info: '锁定技,你的手牌上限+x(x为你的体力值).',
                        dijun: '帝君',
                        dijun_info: '每名其他角色的出牌阶段限一次,其可以交给你任意张手牌,若以此法交出的牌不小于两张,其回复一点体力',
                        yanzhang: '岩璋',
                        yanzhang_info: '你可以将你手牌中的装备牌当【无懈可击】使用;每回合限一次,你使用牌后可以令一名其他角色摸一张牌.',
                        spyanzhang: '岩璋',
                        spyanzhang_info: '你可以将你手牌中的装备牌当【无懈可击】使用;每回合限一次,你于回合外使用牌后可以令一名角色摸一张牌.',
                        dc_qiyue: '契约',
                        dc_qiyue_info: '限定技,其他角色死亡后,你可以失去一点体力上限并选择回复一点体力或摸两张牌,失去<帝君>并修改<尘闲>、<岩璋>.',
                        fenyan: '风眼',
                        fenyan_info: '你使用【杀】或普通锦囊指定其他角色为唯一目标时,若目标未横置,则横置之,你可以为此牌额外指定一个目标(每回合每种类型限一次).',
                        fengshi: '风诗',
                        fengshi_info: '处于连环状态的角色受到属性伤害后,若其是伤害传导的起点,你可以令你和伤害来源摸一张牌.',
                        风神: '风神',
                        风神_info: '锁定技,你计算与其他角色的距离时-1.',
                        leili: '雷厉',
                        leili_info: '出牌阶段限一次,你可以将一张黑色牌置于其他角色武将牌上称为<雷楔>;你计算与拥有<雷楔>角色的距离为1;当你需要使用或打出【闪】时,可以将<雷楔>当【闪】使用或打出,对该角色造成一点雷电伤害;出牌阶段,你可以将该角色的<雷楔>当雷【杀】对其使用.',
                        xingyi: '玉衡',
                        xingyi_info: '锁定技,你不能成为【乐不思蜀】的目标;准备阶段或拥有<雷楔>的角色死亡时,弃置场上的<雷楔>,你选择一项并摸一张牌:移动场上的一张牌或获得一张黑色牌.',
                        qianjing: '千金',
                        qianjing_info: '锁定技,摸牌阶段摸牌时,若你未受伤,你额外摸两张牌.',
                        tianquan: '天权',
                        tianquan_info: '你使用【杀】或普通锦囊指定其他角色为唯一目标时/你成为其他角色使用的【杀】或普通锦囊的唯一目标时,你可以与对方进行拼点,若你赢,对方不能响应此牌/此牌无效;若你没赢,交换双方拼点的牌.',
                        zhuolang: '捉浪',
                        zhuolang_info: '你或与你距离为1的角色受到伤害时,你可以与伤害来源进行拼点,若你赢,防止此伤害并对伤害来源造成一点雷电伤害.',
                        zhengtao: '征涛',
                        zhengtao_info: '锁定技,你拼点的点数+x(x为拼点双方的体力值之差).',
                        dc_xianyun_draw: '险运',
                        dc_xianyun: '险运',
                        dc_xianyun_info: '锁定技,①你的判定始终朝你不利的方向发展;②你没有初始手牌;③当你受到伤害后,你摸与伤害值等量的牌,以此法获得的牌不属于手牌区.',
                        guwu: '鼓舞',
                        guwu_info: '出牌阶段开始时,你可以弃置所有手牌并指定一名角色,其获得一张火【杀】并回复一点体力,且其下一次造成的伤害+1直到其回合结束,若其不为你,你获得一张基本牌.',
                        shizui: '噬罪',
                        shizui_info: '出牌阶段,你使用【杀】或普通锦囊牌指定其他角色为唯一目标时可以弃置对方一张牌,若弃置的牌为黑色,将你的牌改为冰【杀】进行结算.',
                        yexing: '夜行',
                        yexing_info: '锁定技,你的黑色牌不计入手牌上限,无距离限制且不可响应.',
                        dicha_niyan: '逆焰',
                        dicha_niyan_info: '锁定技,你的红色【杀】没有距离和次数限制.',
                        chenxi: '晨曦',
                        chenxi_info: '锁定技,出牌阶段,你使用红色牌时摸一张牌,弃牌阶段,你的黑色手牌不计入手牌上限.',
                        zhishou: '职守',
                        zhishou_info: '锁定技,出牌阶段,你最多可使用x张牌(不计装备牌,x为你的体力上限).',
                        renshan: '刃闪',
                        renshan_info: '你使用或打出【杀】或【闪】生效后你获得一层<刃闪>充能(最多拥有五层);你造成伤害后可以消耗一层<刃闪>并弃置对方一张牌,你可以重复此操作;你每有一层<刃闪>,你计算与其他角色的距离便-1.',
                        hanyu: '寒狱',
                        hanyu_info: '当其他角色在你回合内失去最后一张手牌时,你可以对其造成一点伤害并获得一层<刃闪>充能;出牌阶段,你可以消耗五层<刃闪>,令一名攻击范围内的其他角色弃置装备区的所有牌并对其造成一点伤害,若其装备区没牌,则造成2点伤害',
                        wangsheng: '往生',
                        wangsheng_info: '你造成火焰伤害后可以弃置一张黑色牌,若如此做,目标失去等量的体力上限.',
                        htdiewu: '蝶舞',
                        htdiewu_info: '出牌阶段限一次,你可以失去一点体力并摸x张牌,令你本回合内手牌中的的♥️️牌均视为【火攻】,♦️️牌均视为【火杀】,若如此做,本回合你可以额外使用x张【杀】(x为你已损失的体力值),出牌阶段结束时,若你于本阶段造成过火焰伤害,你回复一点体力.',
                        chunyang: '纯阳',
                        chunyang_info: '锁定技,你的♠️️牌均视为♥️️牌、♣️️牌均视为♦️️牌.',
                        tuixie: '退邪',
                        tuixie_info: '你可以将一张♥️️牌当【无懈可击】使用.出牌阶段,你可以弃置一张♦️️牌,弃置场上的一张牌,若此牌为黑色,你可以视为对其使用一张冰【杀】或摸一张牌.',
                        dicha_kuanglan: '狂澜',
                        dicha_kuanglan_info: '转换技,每回合限一次,阴:你的【杀】无距离限制,你可以将一张♥️️牌或武器牌当【万箭齐发】对一名角色使用,你以此法造成伤害时摸一张牌;阳:你的【杀】无次数限制,你可以将一张♠️️牌或武器牌当【决斗】使用,你以此法造成伤害时弃置对方一张牌.',
                        dicha_duanliu: '断流',
                        dicha_duanliu_info: '锁定技,你使用【杀】、【万箭齐发】、【决斗】造成伤害时,若目标未拥有<断流>标记,其获得<断流>标记;若拥有<断流>标记,则其选择弃置一张牌或失去一点体力.',
                        fenglun: '风轮',
                        fenglun_info: '出牌阶段限两次,你可以弃置一张闪,弃置一名其他角色的一张牌.你使用打出或弃置闪时可视为使用一张无距离限制的风杀',
                        nuowu: '傩舞',
                        nuowu_info: '每轮开始时你可以执行一个的回合,此回合你使用杀的次数+1且杀可额外选择一名目标,若本回合内你使用一张杀对两名角色造成了伤害则风轮的使用次数+1.此回合结束时你弃置一张牌并失去一点体力',
                        演奏: '演奏',
                        演奏_info: '当你于回合外使用或打出红色牌,或因弃置失去一张红色牌后,你可以令一名角色摸一张牌或回复一点体力.',
                        解咒: '解咒',
                        解咒_info: '出牌阶段,你可弃置一名角色判定区的牌并重置其武将牌',
                        复苏: '复苏',
                        复苏_info: '出牌阶段限一次,你可以失去1点体力上限复活一名以阵亡角色并令其增加一点体力上限将手牌摸至体力上限.',
                        审判: '审判',
                        审判_info: '一名角色的出牌阶段结束时你可将本回合进入弃牌堆的红色牌当做任意属性且无视防具的杀对其使用,以该技能使用的杀每造成一点伤害你便失去一点体力.',
                        夜枭: '夜枭',
                        夜枭_info: '锁定技,你未装备武器牌时你和其他角色距离-1,其他角色不能响应你的基本牌.',
                        疗愈: '疗愈',
                        疗愈_info: '出牌阶段,你可以将一张红色牌当做【桃】使用.',
                        创生: '创生',
                        创生_info: '出牌阶段限三次,你可以弃置一张牌创造一张类型和该牌相同但点数,花色,名字均由你指定的卡牌你可将此牌交给一名其他角色(创造卡牌的类型需和你上次创造的卡牌的类型不一样)',
                        zhongmofan: '终末番',
                        zhongmofan_info: '隐匿技,当你登场后,若当前回合角色为:你,则你本回合的手牌上限+3;其他角色,该角色选择是否弃置两张牌,若未弃置牌则该角色本回合不可使用牌.',
                        fengyinjijin: '风隐急进',
                        fengyinjijin_info: '准备阶段,若你的手牌数大于体力值你可以跳过出牌阶段回复一点体力;结束阶段,若你本回合回复过体力,你可以翻面移动场上一张装备牌..',
                        yingheliaoluan: '影貉缭乱',
                        yingheliaoluan_info: '当你的武将牌翻面后,你你获得一枚<貉>标记;当一名角色减少体力后你可弃置一枚<貉>令其回复一点体力,若此时你的武将牌背面朝上则你翻面.',
                        genshin: '原神',
                        genshin_info: '',
                        jiejing: '结晶',
                        jiejing_info: '',
                        yuansufanying: '元素反应',
                        yuansufanying_info: '',
                        niyan: '逆焰',
                        niyan_info: '当你于出牌阶段使用与上一张牌类型不同的牌时你可以摸一张牌(每个牌名每回合限一次)',
                        liming: '黎明',
                        liming_info: '回合结束时,若你本回合已使用过四种花色或三种类型的牌,你可以对一名角色造成一点火焰伤害',
                        duanyu: '断雨',
                        duanyu_info: '当你使用的[杀]指定目标后,你可以弃置其一张手牌.',
                        mozhuang: '魔装',
                        mozhuang_info: '觉醒技,准备阶段,若已受伤的角色数大于你的手牌数,你需减1点体力上限,修改<断雨>为<弃置其一张牌>,获得<狂澜>.',
                        kuanglan: '狂澜',
                        kuanglan_info: '觉醒技,准备阶段,若全场角色均已受伤,你需减1点体力上限,修改<断雨> 为<弃置并获得其一张牌>,获得<尽灭>.',
                        jinmie: '尽灭',
                        jinmie_info: '转换技,出牌阶段限一次,阴:你可将牌堆顶一张牌当做水属性的杀使用.阳:你可将牌堆底一张牌当做水属性的杀使用.',
                        yayan: '鸦眼',
                        yayan_info: '准备阶段,你可以观看一名角色的手牌.',
                        duanzui: '断罪',
                        duanzui_info: '出牌阶段限一次,你可以选择一个花色并展示一名角色的一张手牌(奥兹会提示对方手牌中最多的一种花色),若与你选择的花色相同,你摸一张牌并对其造成一点雷电伤害.',
                        guichai: '鬼差',
                        guichai_info: '游戏开始时,你获得一枚<寒病鬼差>标记,拥有<寒病鬼差>的角色回合结束(每轮限一次)以及其或你死亡时,你可以转移此标记.拥有<寒病鬼差>的角色手牌上限+1,使用【杀】或黑色锦囊造成伤害时可以弃置目标一张牌.',
                        due: '度厄',
                        due_info: '出牌阶段限一次,你可以将一张手牌置于一名其他角色的武将牌上称为<度厄真符>,拥有<度厄真符>的角色受到伤害时,伤害来源回复一点体力,若其拥有<寒病鬼差>,你摸一张牌并重置标记转移次数.你的回合开始或死亡时,弃置场上的<度厄真符>.',
                        canglei: '苍雷',
                        canglei_info: '游戏开始时及你造成或受到【杀】的伤害后,你获得一枚<雷之印>(最多三枚),若你拥有<雷之印>,摸牌阶段你额外摸一张牌,你计算与其他角色的距离-x(x为<雷之印>的数量).',
                        leiya: '雷牙',
                        leiya_info: '出牌阶段开始时,若你拥有<雷之印>,你可以清除印记并摸等量的牌,若如此做,本回合你使用的【杀】无视防具且可以额外使用x张【杀】(x为你清除的<雷之印>数量).',
                        dc_fengji: '风急',
                        dc_fengji_info: '准备阶段,你可以获得一名其他角色的一张牌,你可以将之交给另一名其他角色,之后你翻面并结束当前回合.',
                        yinghe: '影貉',
                        yinghe_info: '结束阶段,你可以弃置所有手牌并翻面;锁定技,你翻面时将武将牌变为〖不倒貉貉〗,你可以使用一张牌(仅指定自己为目标).',
                        wuhu: '呜呼',
                        wuhu_info: '锁定技,你不能成为群体锦囊的目标;你的回合开始以及你受到伤害或翻面后,你变回〖早柚〗并将手牌摸或弃至与体力值相等,若为摸牌:你可以令一名角色回复一点体力;若为弃牌:你可以视为使用一张【杀】;若无需操作,你可以选择其中一项触发.',
                        dc_fengyin: '风引',
                        dc_fengyin_info: '锁定技,游戏开始时,将牌堆中的【风鹰剑】置入你的装备区;你装备区的武器牌不能被弃置;当一名角色触发<西风之鹰的抗争>后,你可以对来源造成一点伤害,其不能使用或打出牌直到回合结束;当一名角色触发<西风之鹰的抗争>失败时,你可以失去一点体力令其强制生效.',
                        dc_fengyu: '风域',
                        dc_fengyu_info: '出牌阶段限一次,你可以选择一名角色,令其:1.将武将牌翻至正面朝上;2.解除连环状态;3.弃置判定区的所有牌.若均无须执行,其获得<西风之鹰的抗争>直到你的下一个回合开始.',
                        dc_yanhuo: '烟火',
                        dc_yanhuo_info: '你可以将至少两张花色各不相同的牌当任意基本牌或普通锦囊牌使用(每回合每种花色限一次),若其中有①两张红色牌:此牌造成的伤害视为火焰伤害;②两张黑色牌:此牌不能被响应;③两张不同颜色的牌:此牌无距离和次数限制.',
                        dc_yanxiao: '焰硝',
                        dc_yanxiao_info: '你使用牌造成火焰伤害后,你可以从牌堆中随机获得等量与对应实体牌花色相同的牌(每回合每种花色限一张).',
                        dc_huayu: '化羽',
                        dc_huayu_mingce: '明策',
                        dc_huayu_qice: '奇策',
                        dc_huayu_kanpo: '看破',
                        dc_huayu_info: '当你造成或受到体力回复以及当你使用锦囊牌时补充1点<能量>,你可以在对应时机消耗对应点<能量>来发动以下技能:1点:<观星>、<集智>、<明策>;2点:<看破>、<遗计>、<奇策>.你的回合及游戏开始时,若<能量>不足x,则补充至x(x为你的体力值).',
                        dc_miaosuan: '庙算',
                        dc_miaosuan_info: '锁定技,你的锦囊牌无距离限制且不能被其他角色响应;你造成的伤害始终为1,当你的伤害因此法减少时,你可以令一名角色回复一点体力或补充与损失伤害等量的<能量>.',
                        ////////////
                        genshin_daoqi: '<span style="color: #9400D3">稻妻</span>',
                        genshin_liyue: '<span style="color: #00FFFF">璃月</span>',
                        genshin_mengde: '<span style="color: #00FF00">蒙德</span>',
                        genshin_zhidong: '<span style="color: #0000BB">至冬</span>',
                        diyer: '<span style="color: #9ACD32">创作者们</span>',
                    },
                };
                for (var i in yuanshen.character) {
                    yuanshen.character[i][4].push(`ext:原神杀/image/${i}.jpg`);
                }
                lib.config.all.characters.add('yuanshen');
                lib.config.characters.add('yuanshen');
                lib.translate.yuanshen_character_config = '<span style=\"color: yellow\">原</span><span style=\"color: red\">神</span><span style=\"color: blue\">杀</span>';
                return yuanshen;
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
                }; //true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.abs(Number(num));
                }; //始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Math.abs(Number(num)), 1);
                }; //始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.max(Number(num), 0);
                }; //始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) return 1;
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
                    name: '原神杀',
                    connect: true,
                    card: {
                        hua_drawbasic: {
                            audio: 'ext:原神杀/audio:true',
                            type: 'hua',
                            global: ['yusheng_chuangsheng_basic', 'yusheng_chuangsheng_tao', 'yusheng_chuangsheng_shan', 'yusheng_chuangsheng_wuxie'],
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                if (get.is.versus()) {
                                    if (game.friend.includes(target)) {
                                        if (game.friend.length < game.enemy.length) {
                                            target.draw(3);
                                            return;
                                        }
                                    } else {
                                        if (game.friend.length > game.enemy.length) {
                                            target.draw(3);
                                            return;
                                        }
                                    }
                                }
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
                            fullimage: true,
                        },
                        hua_linkbasic: {
                            audio: 'ext:原神杀/audio:true',
                            type: 'hua',
                            global: ['yusheng_chuangsheng_basic', 'yusheng_chuangsheng_tao', 'yusheng_chuangsheng_shan', 'yusheng_chuangsheng_wuxie'],
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player.chooseTarget([1, 2], get.prompt('hua_drawlink')).ai = function (target) {
                                    var att = get.attitude(player, target);
                                    if (target.isLinked()) {
                                        return att;
                                    }
                                    return -att;
                                };
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].link();
                                    }
                                }
                            },
                            ai: {
                                basic: {
                                    useful: 4,
                                    value: 4,
                                    order: 7,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.isLinked()) {
                                            if (target.hasSkillTag('link')) return 0;
                                            var f = target.hasSkillTag('nofire');
                                            var t = target.hasSkillTag('nothunder');
                                            if (f && t) return 0;
                                            if (f || t) return 0.5;
                                            return 2;
                                        }
                                        if (get.attitude(player, target) >= 0) return -0.9;
                                        if (ui.selected.targets.length) return -0.9;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) <= -1 && current != target && !current.isLinked();
                                            })
                                        ) {
                                            return -0.9;
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    multitarget: 1,
                                    multineg: 1,
                                    norepeat: 1,
                                },
                            },
                            fullimage: true,
                        },
                        hua_gainbasic: {
                            audio: 'ext:原神杀/audio:true',
                            type: 'hua',
                            global: ['yusheng_chuangsheng_basic', 'yusheng_chuangsheng_tao', 'yusheng_chuangsheng_shan', 'yusheng_chuangsheng_wuxie'],
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('hua_drawgain'), '获得一名其他角色的一张手牌', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countGainableCards(player, 'h');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'green');
                                    player.gainPlayerCard(result.targets[0], 'h', true);
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
                        hua_discardbasic: {
                            audio: 'ext:原神杀/audio:true',
                            type: 'hua',
                            global: ['yusheng_chuangsheng_basic', 'yusheng_chuangsheng_tao', 'yusheng_chuangsheng_shan', 'yusheng_chuangsheng_wuxie'],
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('hua_drawdiscard'), '弃置一名其他角色区域内的一张牌', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countDiscardableCards(player, 'he');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'green');
                                    player.discardPlayerCard(result.targets[0], 'he', true);
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
                        hua_drawdiscard: {
                            audio: 'ext:原神杀/audio:true',
                            type: 'hua',
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                if (get.is.versus()) {
                                    if (game.friend.includes(target)) {
                                        if (game.friend.length < game.enemy.length) {
                                            target.draw(3);
                                            return;
                                        }
                                    } else {
                                        if (game.friend.length > game.enemy.length) {
                                            target.draw(3);
                                            return;
                                        }
                                    }
                                }
                                target.draw(2);
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('hua_drawdiscard'), '弃置一名其他角色区域内的一张牌', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countDiscardableCards(player, 'he');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'green');
                                    player.discardPlayerCard(result.targets[0], 'hej', true);
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
                        hua_drawgain: {
                            audio: 'ext:原神杀/audio:true',
                            type: 'hua',
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                if (get.is.versus()) {
                                    if (game.friend.includes(target)) {
                                        if (game.friend.length < game.enemy.length) {
                                            target.draw(3);
                                            return;
                                        }
                                    } else {
                                        if (game.friend.length > game.enemy.length) {
                                            target.draw(3);
                                            return;
                                        }
                                    }
                                }
                                target.draw(2);
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('hua_drawgain'), '获得一名其他角色的一张手牌', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countGainableCards(player, 'h');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'green');
                                    player.gainPlayerCard(result.targets[0], 'h', true);
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
                        hua_drawlink: {
                            audio: 'ext:原神杀/audio:true',
                            type: 'hua',
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                if (get.is.versus()) {
                                    if (game.friend.includes(target)) {
                                        if (game.friend.length < game.enemy.length) {
                                            target.draw(3);
                                            return;
                                        }
                                    } else {
                                        if (game.friend.length > game.enemy.length) {
                                            target.draw(3);
                                            return;
                                        }
                                    }
                                }
                                target.draw(2);
                                ('step 1');
                                player.chooseTarget([1, 2], get.prompt('hua_drawlink')).ai = function (target) {
                                    var att = get.attitude(player, target);
                                    if (target.isLinked()) {
                                        return att;
                                    }
                                    return -att;
                                };
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].link();
                                    }
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
                        hua_linkgain: {
                            audio: 'ext:原神杀/audio:true',
                            type: 'hua',
                            enable: true,
                            filterTarget: true,
                            selectTarget: [1, 2],
                            complexTarget: true,
                            content() {
                                'step 0';
                                target.link();
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('hua_drawgain'), '获得一名其他角色的一张手牌', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countGainableCards(player, 'h');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'green');
                                    player.gainPlayerCard(result.targets[0], 'h', true);
                                }
                            },
                            ai: {
                                basic: {
                                    useful: 4,
                                    value: 4,
                                    order: 7,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.isLinked()) {
                                            if (target.hasSkillTag('link')) return 0;
                                            var f = target.hasSkillTag('nofire');
                                            var t = target.hasSkillTag('nothunder');
                                            if (f && t) return 0;
                                            if (f || t) return 0.5;
                                            return 2;
                                        }
                                        if (get.attitude(player, target) >= 0) return -0.9;
                                        if (ui.selected.targets.length) return -0.9;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) <= -1 && current != target && !current.isLinked();
                                            })
                                        ) {
                                            return -0.9;
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    multitarget: 1,
                                    multineg: 1,
                                    norepeat: 1,
                                },
                            },
                            fullimage: true,
                        },
                        hua_linkdiscard: {
                            audio: 'ext:原神杀/audio:true',
                            type: 'trick',
                            enable: true,
                            filterTarget: true,
                            selectTarget: [1, 2],
                            complexTarget: true,
                            content() {
                                'step 0';
                                target.link();
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('hua_drawdiscard'), '弃置一名其他角色区域内的一张牌', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countDiscardableCards(player, 'he');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'green');
                                    player.discardPlayerCard(result.targets[0], 'hej', true);
                                }
                            },
                            ai: {
                                basic: {
                                    useful: 4,
                                    value: 4,
                                    order: 7,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.isLinked()) {
                                            if (target.hasSkillTag('link')) return 0;
                                            var f = target.hasSkillTag('nofire');
                                            var t = target.hasSkillTag('nothunder');
                                            if (f && t) return 0;
                                            if (f || t) return 0.5;
                                            return 2;
                                        }
                                        if (get.attitude(player, target) >= 0) return -0.9;
                                        if (ui.selected.targets.length) return -0.9;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) <= -1 && current != target && !current.isLinked();
                                            })
                                        ) {
                                            return -0.9;
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    multitarget: 1,
                                    multineg: 1,
                                    norepeat: 1,
                                },
                            },
                            fullimage: true,
                        },
                        hua_gaindiscard: {
                            audio: 'ext:原神杀/audio:true',
                            type: 'hua',
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('hua_drawdiscard'), '弃置一名其他角色区域内的一张牌', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countDiscardableCards(player, 'he');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'green');
                                    player.discardPlayerCard(result.targets[0], 'hej', true);
                                }
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt('hua_drawgain'), '获得一名其他角色的一张手牌', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countGainableCards(player, 'h');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 3');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'green');
                                    player.gainPlayerCard(result.targets[0], 'h', true);
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
                            },
                            fullimage: true,
                        },
                        mn_bingliang: {
                            fullskin: true,
                            type: 'delay',
                            range: {
                                global: 1,
                            },
                            filterTarget(card, player, target) {
                                return lib.filter.judge(card, player, target) && player != target;
                            },
                            judge(card) {
                                if (card.suit == 'club') return 0;
                                return -3;
                            },
                            effect() {
                                if (result.bool == false) {
                                    if (get.is.changban()) player.addTempSkill('bingliang_changban');
                                    else player.skip('phaseDraw');
                                }
                            },
                            ai: {
                                result: {
                                    target: -2,
                                }, //QQQ
                            },
                        },
                        ttbj: {
                            audio: 'tutu',
                            type: 'basic',
                            ai: {
                                value: -5,
                                result: {
                                    player: -1,
                                },
                            },
                            delay: false,
                            fullimage: true,
                        },
                        mwtt: {
                            audio: 'jiu',
                            type: 'basic',
                            toself: true,
                            enable(card, player) {
                                return true;
                            },
                            savable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                if (target.hp < target.maxHp) target.recover(event.baseDamage || 1);
                                else {
                                    if (!target.hasSkill('ddmzhd')) target.addSkill('ddmzhd');
                                    if (target.countMark('ddmzhd') < 5) target.addMark('ddmzhd', 1);
                                }
                                target.addTempSkill('dongdong');
                                target.addTempSkill('mwtt_damage');
                            },
                            ai: {
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return get.order({ name: 'sha' }) + 1;
                                    },
                                    useful: [8, 6.5, 5, 4],
                                    value: [8, 6.5, 5, 4],
                                },
                                result: {
                                    target: 2,
                                    target_use(player, target) {
                                        // if(player==target&&player.hp<=0) return 2;
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                        var nd = player.needsToDiscard();
                                        var keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        var mode = get.mode();
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
                            fullimage: true,
                        },
                        hepuy: {
                            type: 'equip',
                            subtype: 'equip1',
                            onLose() {
                                player.removeSkill('hepuy1');
                                player.removeSkill('hepuy2');
                            },
                            distance: {
                                attackFrom: -2,
                            },
                            ai: {
                                basic: {
                                    equipValue: 6,
                                },
                            },
                            skills: ['hepuy_skill'],
                            fullimage: true,
                        },
                        ams: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -4,
                            },
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order: 6,
                                    useful: 2,
                                    value: 6,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                            skills: ['ams_skill'],
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
                            fullimage: true,
                        },
                        cgh: {
                            type: 'equip',
                            subtype: 'equip5',
                            nomod: true,
                            forceDie: true,
                            onLose() {
                                player.unmarkSkill('cgh_skill');
                                delete player.getStat('skill').cgh_skill;
                                if (event.getParent(2) && event.getParent(2).name != 'swapEquip' && event.parent.type != 'equip' && card && card.cards && card.cards.length) {
                                    player.$throw(card.cards, 1000);
                                    player.popup('cgh');
                                    game.log(card, '掉落了', card.cards);
                                    game.cardsDiscard(card.cards);
                                    card.cards.length = 0;
                                }
                            },
                            clearLose: true,
                            equipDelay: false,
                            loseDelay: false,
                            skills: ['cgh_skill'],
                            fullimage: true,
                        },
                        fyj: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 7.5,
                                },
                            },
                            skills: ['fyj_skill'],
                            fullimage: true,
                        },
                        langmo: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -2,
                            },
                            ai: {
                                basic: {
                                    equipValue: 6,
                                },
                            },
                            skills: ['langmo_skill'],
                            fullimage: true,
                        },
                        llyz: {
                            type: 'equip',
                            subtype: 'equip1',
                            onEquip() {
                                var num = [0, 1, 2].randomGet();
                                if (num == 0) player.addTempSkill('llyz_0');
                                else if (num == 1) player.addTempSkill('llyz_1');
                                else {
                                    player.addTempSkill('llyz_2');
                                    player.addTempSkill('llyz_20');
                                }
                            },
                            onLose() {
                                player.removeSkill('llyz_0');
                                player.removeSkill('llyz_1');
                                player.removeSkill('llyz_2');
                                player.removeSkill('llyz_20');
                            },
                            ai: {
                                basic: {
                                    equipValue: 6,
                                },
                            },
                            skills: ['llyz_skill'],
                            fullimage: true,
                        },
                        humo: {
                            type: 'equip',
                            subtype: 'equip1',
                            onEquip() {
                                'step 0';
                                player.gainMaxHp();
                                ('step 1');
                                if (player.hp * 2 <= player.maxHp) {
                                    player.chooseUseTarget({ name: 'jiu' }, true, 'noTargetDelay', 'nodelayx');
                                }
                            },
                            onLose() {
                                player.loseMaxHp();
                            },
                            distance: {
                                attackFrom: -2,
                            },
                            skills: ['humo_skill'],
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
                            fullimage: true,
                        },
                        jx: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -2,
                            },
                            ai: {
                                basic: {
                                    equipValue: 6,
                                },
                            },
                            skills: ['jx_skill'],
                            fullimage: true,
                        },
                        pyjl: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 6,
                                },
                            },
                            skills: ['pyjl_skill'],
                            fullimage: true,
                        },
                        tczdg: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -2,
                            },
                            ai: {
                                basic: {
                                    equipValue: 6,
                                },
                            },
                            skills: ['tczdg_skill'],
                            fullimage: true,
                        },
                        wqzhg: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -2,
                            },
                            ai: {
                                basic: {
                                    equipValue: 6,
                                },
                            },
                            skills: ['wqzhg_skill'],
                            fullimage: true,
                        },
                    },
                    translate: {
                        hua_drawbasic: '华',
                        hua_drawbasic_info: '出牌阶段,对你使用.你摸两张牌.此牌可当做任意一张基本牌或无懈可击使用',
                        hua_linkbasic: '华',
                        hua_linkbasic_info: '出牌阶段使用,选择1至2个角色,分别横置或重置这些角色,此牌可当做任意一张基本牌或无懈可击使用',
                        hua_gainbasic: '华',
                        hua_gainbasic_info: '出牌阶段,对你使用.你可以获得一名其他角色一张手牌,此牌在你手牌中可当做任意一张基本牌或无懈可击使用.',
                        hua_discardbasic: '华',
                        hua_discardbasic_info: '出牌阶段,对你使用.你可以弃置一名其他角色区域内一张牌,此牌在你手牌中可当做任意一张基本牌或无懈可击使用.',
                        hua_drawdiscard: '华',
                        hua_drawdiscard_info: '出牌阶段,对你使用.你摸两张牌.你弃置一名其他角色的一张牌',
                        hua_drawgain: '华',
                        hua_drawgain_info: '出牌阶段,对你使用.你摸两张牌.你获得一名其他角色的一张手牌',
                        hua_drawlink: '华',
                        hua_drawlink_info: '出牌阶段,对你使用.你摸两张牌.你选择至多两名角色横置或重置',
                        hua_linkgain: '华',
                        hua_linkgain_info: '出牌阶段使用,选择1至2个角色,分别横置或重置这些角色,你获得一名其他角色的一张手牌',
                        hua_linkdiscard: '华',
                        hua_linkdiscard_info: '出牌阶段使用,选择1至2个角色,分别横置或重置这些角色,你弃置一名其他角色一张牌',
                        hua_gaindiscard: '华',
                        hua_gaindiscard_info: '出牌阶段,对你使用.你弃置一名其他角色一张牌并获得一名其他角色一张手牌',
                        mn_bingliang: '穷酸',
                        mn_bingliang_info: '判定阶段进行判定:若判定结果不为♣️️,则跳过摸牌阶段.',
                        ams: '阿莫斯之弓',
                        ams_info: '使用【杀】对距离1以外的敌人造成伤害时可以弃置其一张装备牌,若你不在其攻击范围内,此伤害+1.',
                        ams_skill: '矢志不忘',
                        cgh: '尘歌壶',
                        cgh_info: '◆你可以将弃牌阶段弃置的牌置入尘歌壶◆摸牌阶段结束/回合结束时,你可以将任意数量的牌置入尘歌壶,可以获得尘歌壶至多等量的牌/用尘歌壶的牌将手牌补至上限,若置入了所有手牌(至少两张),你回复一点体力.',
                        cgh_skill: '尘歌壶',
                        mwtt: '猫尾特调',
                        mwtt_info: '出牌阶段或进入濒死状态时对自己使用,回复一点体力(若未受伤则改为获得一层<冻冻猫爪护盾>),本回合内获得技能<冻冻>且下一次造成的伤害+1.',
                        ttbj: '兔兔伯爵',
                        ttbj_view: '兔兔伯爵',
                        ttbj_info: '若拥有此牌①使用牌指定其他角色为目标时,该牌失效,弃置此牌;②结束阶段,弃置此牌;③失去此牌时,销毁之,受到一点火焰伤害.',
                        fyj: '风鹰剑',
                        fyj_info: '锁定技,你受到或造成【杀】的伤害后有50%概率回复一点体力(每回合限一次).',
                        fyj_skill: '西风之鹰的抗争',
                        hepuy: '和璞鸢',
                        hepuy_info: '锁定技,使用【杀】造成伤害后,本回合可额外使用一张【杀】,且下一张【杀】的伤害值+1(每回合限一次).',
                        hepuy_skill: '昭理的鸢之枪',
                        langmo: '狼的末路',
                        langmo_skill: '如狼般的狩猎者',
                        langmo_info: '锁定技,使用【杀】对体力值为1的角色造成的伤害+1,触发后可以令一名角色获得此效果直到其回合结束.',
                        llyz: '流浪乐章',
                        llyz_skill: '登场乐',
                        llyz_2: '间奏曲',
                        llyz_20: '间奏曲',
                        llyz_info: '锁定技,出牌阶段开始或装备时随机获得以下一个效果直到回合结束:宣叙调:【杀】没有次数和距离限制;咏叹调:【杀】的伤害值+1;间奏曲:可以将一张手牌当任意属性的【杀】使用.',
                        humo: '护摩之杖',
                        humo_skill: '无羁的朱赤之蝶',
                        humo_info: '锁定技,你的体力上限+1,装备、出牌阶段开始、体力值变化时,若你的体力值不大于体力上限的一半,视为你使用一张【酒】.',
                        jx: '绝弦',
                        jx_skill: '无矢之歌',
                        jx_info: '你不因【杀】造成伤害时,你可以令此伤害+1,若如此做,此伤害生效结算后,终止一切结算,你弃置所有手牌并结束当前回合.',
                        pyjl: '磐岩结绿',
                        pyjl_skill: '护国的无垢之心',
                        pyjl_info: '锁定技,你每有一点体力值,使用【杀】造成伤害时增加25%的概率令此伤害+1.',
                        tczdg: '薙草之稻光',
                        tczdg_skill: '非时之梦·常世灶食',
                        tczdg_info: '锁定技,你使用黑色【杀】结算后摸一张牌.',
                        wqzhg: '雾切之回光',
                        wqzhg_skill: '雾切御腰物',
                        wqzhg_info: '锁定技,每回合限一次,你造成属性伤害时,若你的手牌数不大于1,此伤害+1,反之,本回合内你下一次造成的对应属性伤害+1.',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:原神杀/image/${i}.png`;
                        } else {
                            info.image = `ext:原神杀/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('原神杀');
                lib.config.cards.add('原神杀');
                lib.translate.原神杀_card_config = '<span style=\"color: yellow\">原</span><span style=\"color: red\">神</span><span style=\"color: blue\">杀</span>';
                return QQQ;
            });
        },
        config: {
            _ysfy: {
                name: '元素反应',
                intro: '元素反应:开启后重启游戏生效.<span style="color: blue">元素反应系统</span>',
                init: true,
            },
            help: {
                name: '名词释义',
                init: '1',
                item: {
                    1: '查看',
                    2: '✪关于元素反应✪:一名角色在受到属性伤害后会附着相应的元素,同时存在两种能够反应的元素时会触发元素反应并使触发元素反应的元素消散.',
                    3: '✪元素反应总览✪',
                    4: '✪风元素反应✪',
                    5: '扩散:任意元素+风,会将触发扩散的初始元素扩散到触发角色得上下家',
                    6: '✪岩元素反应✪',
                    7: '结晶:任意元素+岩,触发角色获得一点和触发元素对应的元素护盾',
                    8: '✪其他元素反应✪',
                    9: '超载:火+雷,对触发角色的上下家造成一点火焰伤害(不触发技能)',
                    10: '超导:雷+冰,触发角色弃置两张牌',
                    11: '感电:雷+水,触发角色的上下家横置',
                    12: '燃烧:火+草,触发角色于下个回合开始受到一点火焰伤害',
                    13: '融化:火+冰,火附冰,该角色受到一点火焰伤害;冰附火,该角色弃置一张牌',
                    14: '蒸发:火+水,火附水,该角色受到一点火焰伤害;水附火,元素反应的制造者选择摸一张牌或是弃置触发者一张牌.',
                    15: '冰冻:水+冰,触发者翻面.',
                },
            },
            tips: {
                name: 'tips',
                init: '1',
                item: {
                    1: '①初次使用若找不到武将,请在 选项-武将 中开启武将包<br/r>②此扩展包中增添了大量武器牌,为了还原距离体验,建议开启<牌堆补充>,也可以选择在 选项-卡牌 中禁用对应卡牌<br/r>③若发现武将强度不合理或代码有bug影响游玩体验,可善用武将禁用功能,更欢迎在群里吐槽反馈(记得保留截图)',
                },
            },
        },
        package: {
            intro: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>`,
            author: '原桌创联',
            version: '1.0',
        },
    };
});

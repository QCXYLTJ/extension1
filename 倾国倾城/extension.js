import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '倾国倾城',
        content(config, pack) {
            //评级系统>>>>>>>>>
            if (lib.rank) {
                //普通>>>>>>>>
                lib.rank.rarity.junk.addArray([]);
                //精品>>>>>>>>>
                lib.rank.rarity.rare.addArray(['qgqc_jiemachao']);
                //稀有>>>>>>>>>
                lib.rank.rarity.epic.addArray([/*蒙德四星"*/ 'ys_芭芭拉', 'ys_砂糖', 'ys_丽莎', 'ys_安柏', 'ys_凯亚', 'ys_班尼特', 'ys_诺艾尔', 'ys_菲谢尔', 'ys_雷泽', 'ys_迪奥娜', 'ys_罗莎莉亚', /*璃月四星*/ 'ys_凝光', 'ys_重云', 'ys_行秋', 'ys_香菱', 'ys_北斗', 'ys_辛焱', 'ys_烟菲', /*稻妻四星*/ 'ys_九条裟罗', 'ys_早柚', 'ys_托马']);
                //史诗>>>>>>>>>>
                lib.rank.rarity.legend.addArray([/*天理维系者*/ 'ys_派蒙', 'ys_荧', /*蒙德五星*/ 'ys_温迪', 'ys_迪卢克', 'ys_琴', 'ys_可莉', 'ys_莫娜', 'ys_阿贝多', 'ys_优菈', /*璃月五星*/ 'ys_刻晴', 'ys_钟离', 'ys_魈', 'ys_胡桃', 'ys_七七', 'ys_甘雨', 'ys_公子', /*稻妻五星*/ 'ys_雷电将军', 'ys_枫原万叶', 'ys_珊瑚宫心海', 'ys_神里绫华', 'ys_宵宫', /*三国*/ 'qgqc_jiezhoufei', 'qgqc_jieshamoke', 'qgqc_jiexuyou', 'qgqc_shenzuoci', 'qgqc_xinzhangchunhua', 'qgqc_jieliuyan', 'qgqc_duosidawang', 'qgqc_Aleah']);
            }
            //势力系统>>>>>>>>>>>>五光十色版
            //蒙德
            var style1 = document.createElement('style');
            style1.innerHTML = ".player .identity[data-color='qgqc_meng'],";
            style1.innerHTML += "div[data-nature='qgqc_meng'],";
            style1.innerHTML += "span[data-nature='qgqc_meng'] {text-shadow: black 0 0 1px,rgba(255, 92, 187,1) 0 0 2px,rgba(255, 92, 187,1) 0 0 5px,rgba(255, 95, 187,1) 0 0 10px,rgba(255, 92, 187,1) 0 0 10px}";
            style1.innerHTML += "div[data-nature='qgqc_mengm'],";
            style1.innerHTML += "span[data-nature='qgqc_mengm'] {text-shadow: black 0 0 1px,rgba(196,107,221,1) 0 0 2px,rgba(196,107,221,1) 0 0 5px,rgba(196,107,221,1) 0 0 5px,rgba(196,107,221,1) 0 0 5px,black 0 0 1px;}";
            style1.innerHTML += "div[data-nature='qgqc_mengmm'],";
            style1.innerHTML += "span[data-nature='qgqc_mengmm'] {text-shadow: black 0 0 1px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style1);
            var tenUi = document.createElement('style');
            tenUi.innerHTML += ".camp-wrap[data-camp='qgqc_meng']>.camp-name {text-shadow: 0 0 5px rgb(242, 16, 167), 0 0 10px rgb(242, 16, 167), 0 0 15px rgb(242, 16, 167);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='qgqc_meng']>.camp-name {text-shadow: 0 0 5px rgb(242, 16, 167), 0 0 10px rgb(242, 16, 167), 0 0 15px rgb(242, 16, 167);}";
            document.head.appendChild(tenUi);
            var style = document.createElement('style');
            style.innerHTML = `
                .player .identity[data-color='qgqc_meng'],
                div[data-nature='qgqc_meng'],
                span[data-nature='qgqc_meng'] {
                    -webkit-animation:🌱text-shadow 20s infinite;
                    animation:🌱text-shadow 20s infinite;
                }.player .identity[data-color='qgqc_mengm'],
                div[data-nature='qgqc_mengm'],
                span[data-nature='qgqc_mengm'] {
                    -webkit-animation:🌱text-shadow 20s infinite;
                    animation:🌱text-shadow 20s infinite;
                }.player .identity[data-color='qgqc_mengmm'],
                div[data-nature='qgqc_mengmm'],
                span[data-nature='qgqc_mengmm'] {
                    -webkit-animation:🌱text-shadow 20s infinite;
                    animation:🌱text-shadow 20s infinite;
                }.camp-wrap[data-camp='qgqc_meng']>.camp-back {
                    overflow: hidden;
                }.camp-wrap[data-camp='qgqc_meng']>.camp-back:before {
                    content:"";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background: linear-gradient(45deg, rgb(255, 0, 106), rgb(0,255,196),rgb(255, 0, 247));
                    background-size: 400%;
                    animation: xian_sun 4s infinite;
                }
                @keyframes xian_sun{
                    100% {
                        background-position: -400% 0;
                    }
                }`;
            document.head.appendChild(style);
            style = document.createElement('style');
            style.innerHTML = '@keyframes 🌱text-shadow{';
            for (var i = 1; i <= 20; i++) {
                var rand1 = Math.floor(Math.random() * 255),
                    rand2 = Math.floor(Math.random() * 255),
                    rand3 = Math.floor(Math.random() * 255),
                    rand4 = Math.random();
                style.innerHTML += i * 5 + '%{text-shadow: black 0 0 1px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 2px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 5px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px}';
            }
            style.innerHTML += '}';
            document.head.appendChild(style);
            lib.group.add('qgqc_meng');
            lib.translate.qgqc_meng = '蒙';
            lib.translate.qgqc_meng2 = '蒙';
            lib.groupnature.qgqc_meng = 'qgqc_meng';
            //璃月
            var style1 = document.createElement('style');
            style1.innerHTML = ".player .identity[data-color='qgqc_li'],";
            style1.innerHTML += "div[data-nature='qgqc_li'],";
            style1.innerHTML += "span[data-nature='qgqc_li'] {text-shadow: black 0 0 1px,rgba(255, 92, 187,1) 0 0 2px,rgba(255, 92, 187,1) 0 0 5px,rgba(255, 95, 187,1) 0 0 10px,rgba(255, 92, 187,1) 0 0 10px}";
            style1.innerHTML += "div[data-nature='qgqc_lim'],";
            style1.innerHTML += "span[data-nature='qgqc_lim'] {text-shadow: black 0 0 1px,rgba(196,107,221,1) 0 0 2px,rgba(196,107,221,1) 0 0 5px,rgba(196,107,221,1) 0 0 5px,rgba(196,107,221,1) 0 0 5px,black 0 0 1px;}";
            style1.innerHTML += "div[data-nature='qgqc_limm'],";
            style1.innerHTML += "span[data-nature='qgqc_limm'] {text-shadow: black 0 0 1px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style1);
            var tenUi = document.createElement('style');
            tenUi.innerHTML += ".camp-wrap[data-camp='qgqc_li']>.camp-name {text-shadow: 0 0 5px rgb(242, 16, 167), 0 0 10px rgb(242, 16, 167), 0 0 15px rgb(242, 16, 167);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='qgqc_li']>.camp-name {text-shadow: 0 0 5px rgb(242, 16, 167), 0 0 10px rgb(242, 16, 167), 0 0 15px rgb(242, 16, 167);}";
            document.head.appendChild(tenUi);
            var style = document.createElement('style');
            style.innerHTML = `
                .player .identity[data-color='qgqc_li'],
                div[data-nature='qgqc_li'],
                span[data-nature='qgqc_li'] {
                    -webkit-animation:🌱text-shadow 20s infinite;
                    animation:🌱text-shadow 20s infinite;
                }.player .identity[data-color='qgqc_lim'],
                div[data-nature='qgqc_lim'],
                span[data-nature='qgqc_lim'] {
                    -webkit-animation:🌱text-shadow 20s infinite;
                    animation:🌱text-shadow 20s infinite;
                }.player .identity[data-color='qgqc_limm'],
                div[data-nature='qgqc_limm'],
                span[data-nature='qgqc_limm'] {
                    -webkit-animation:🌱text-shadow 20s infinite;
                    animation:🌱text-shadow 20s infinite;
                }.camp-wrap[data-camp='qgqc_li']>.camp-back {
                    overflow: hidden;
                }.camp-wrap[data-camp='qgqc_li']>.camp-back:before {
                    content:"";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background: linear-gradient(45deg, rgb(255, 0, 106), rgb(0,255,196),rgb(255, 0, 247));
                    background-size: 400%;
                    animation: xian_sun 4s infinite;
                }
                @keyframes xian_sun{
                    100% {
                        background-position: -400% 0;
                    }
                }`;
            document.head.appendChild(style);
            style = document.createElement('style');
            style.innerHTML = '@keyframes 🌱text-shadow{';
            for (var i = 1; i <= 20; i++) {
                var rand1 = Math.floor(Math.random() * 255),
                    rand2 = Math.floor(Math.random() * 255),
                    rand3 = Math.floor(Math.random() * 255),
                    rand4 = Math.random();
                style.innerHTML += i * 5 + '%{text-shadow: black 0 0 1px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 2px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 5px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px}';
            }
            style.innerHTML += '}';
            document.head.appendChild(style);
            lib.group.add('qgqc_li');
            lib.translate.qgqc_li = '璃';
            lib.translate.qgqc_li2 = '璃';
            lib.groupnature.qgqc_li = 'qgqc_li';
            //稻妻
            var style1 = document.createElement('style');
            style1.innerHTML = ".player .identity[data-color='qgqc_dao'],";
            style1.innerHTML += "div[data-nature='qgqc_dao'],";
            style1.innerHTML += "span[data-nature='qgqc_dao'] {text-shadow: black 0 0 1px,rgba(255, 92, 187,1) 0 0 2px,rgba(255, 92, 187,1) 0 0 5px,rgba(255, 95, 187,1) 0 0 10px,rgba(255, 92, 187,1) 0 0 10px}";
            style1.innerHTML += "div[data-nature='qgqc_daom'],";
            style1.innerHTML += "span[data-nature='qgqc_daom'] {text-shadow: black 0 0 1px,rgba(196,107,221,1) 0 0 2px,rgba(196,107,221,1) 0 0 5px,rgba(196,107,221,1) 0 0 5px,rgba(196,107,221,1) 0 0 5px,black 0 0 1px;}";
            style1.innerHTML += "div[data-nature='qgqc_daomm'],";
            style1.innerHTML += "span[data-nature='qgqc_daomm'] {text-shadow: black 0 0 1px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style1);
            var tenUi = document.createElement('style');
            tenUi.innerHTML += ".camp-wrap[data-camp='qgqc_dao']>.camp-name {text-shadow: 0 0 5px rgb(242, 16, 167), 0 0 10px rgb(242, 16, 167), 0 0 15px rgb(242, 16, 167);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='qgqc_dao']>.camp-name {text-shadow: 0 0 5px rgb(242, 16, 167), 0 0 10px rgb(242, 16, 167), 0 0 15px rgb(242, 16, 167);}";
            document.head.appendChild(tenUi);
            var style = document.createElement('style');
            style.innerHTML = `
                .player .identity[data-color='qgqc_dao'],
                div[data-nature='qgqc_dao'],
                span[data-nature='qgqc_dao'] {
                    -webkit-animation:🌱text-shadow 20s infinite;
                    animation:🌱text-shadow 20s infinite;
                }.player .identity[data-color='qgqc_daom'],
                div[data-nature='qgqc_daom'],
                span[data-nature='qgqc_daom'] {
                    -webkit-animation:🌱text-shadow 20s infinite;
                    animation:🌱text-shadow 20s infinite;
                }.player .identity[data-color='qgqc_daomm'],
                div[data-nature='qgqc_daomm'],
                span[data-nature='qgqc_daomm'] {
                    -webkit-animation:🌱text-shadow 20s infinite;
                    animation:🌱text-shadow 20s infinite;
                }.camp-wrap[data-camp='qgqc_dao']>.camp-back {
                    overflow: hidden;
                }.camp-wrap[data-camp='qgqc_dao']>.camp-back:before {
                    content:"";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background: linear-gradient(45deg, rgb(255, 0, 106), rgb(0,255,196),rgb(255, 0, 247));
                    background-size: 400%;
                    animation: xian_sun 4s infinite;
                }
                @keyframes xian_sun{
                    100% {
                        background-position: -400% 0;
                    }
                }`;
            document.head.appendChild(style);
            style = document.createElement('style');
            style.innerHTML = '@keyframes 🌱text-shadow{';
            for (var i = 1; i <= 20; i++) {
                var rand1 = Math.floor(Math.random() * 255),
                    rand2 = Math.floor(Math.random() * 255),
                    rand3 = Math.floor(Math.random() * 255),
                    rand4 = Math.random();
                style.innerHTML += i * 5 + '%{text-shadow: black 0 0 1px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 2px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 5px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px}';
            }
            style.innerHTML += '}';
            document.head.appendChild(style);
            lib.group.add('qgqc_dao');
            lib.translate.qgqc_dao = '稻';
            lib.translate.qgqc_dao2 = '稻';
            lib.groupnature.qgqc_dao = 'qgqc_dao';
            //图片自动播放
            game.as_showImage = function (url, pos, time) {
                if (!url) return false;
                if (!pos || !Array.isArray(pos)) {
                    pos = [0, 0, 100, 100];
                }
                if (!time || isNaN(time)) time = 3;
                if (_status.as_showImage) {
                    _status.as_showImage.remove();
                    delete _status.as_showImage;
                }
                var div = ui.create.div('', '', ui.window);
                div.style.cssText = 'z-index:999; left:' + (pos[0] + pos[2] / 2) + '%; top:' + pos[1] + '%; width:0%; height:' + pos[3] + '%; position:absolute; background-size:100% 100%; background-position:center center; background-image:url(' + url + '); transition-property:all; transition-duration:1';
                _status.as_showImage = div;
                setTimeout(function () {
                    div.style.left = pos[0] + '%';
                    div.style.width = pos[2] + '%';
                }, 1);
                setTimeout(function () {
                    if (_status.as_showImage) {
                        _status.as_showImage.remove();
                        delete _status.as_showImage;
                    }
                }, time * 1000);
                return true;
            };
            //铁索连环>>>>>>>>>>>>
            if (config.qgqc_tiesuolianhuan) {
                lib.skill._tiesuoafter = {
                    trigger: {
                        player: ['judgeAfter', 'linkAfter', 'turnOverAfter'],
                    },
                    _priority: -2020,
                    forced: true,
                    content() {
                        if (player.isLinked()) {
                            game.broadcastAll(function (player) {
                                ui.arena.classList.add('nolink');
                                ui.updatem();
                                img = document.createElement('div');
                                img.setBackgroundImage('extension/倾国倾城/其他/qgqc_tslh.png');
                                img.style.width = '100%';
                                img.style.height = '100%';
                                img.style['z-index'] = '30';
                                img.style.backgroundSize = 'cover';
                                //img.style.transform='translateY(-200px)';
                                player.node.avatar.appendChild(img);
                                ui.refresh(img);
                                img.style.transform = '';
                            }, player);
                        } else {
                            player.node.avatar.setBackground(player.name, 'character');
                            game.broadcastAll(function (player) {
                                imgs = player.node.avatar.querySelectorAll('div');
                                for (var i = 0; i < imgs.length; i++) {
                                    var img = imgs[i];
                                    //img.style.transform='translateY(-200px)';
                                    img.delete();
                                }
                            }, player);
                        }
                    },
                };
            }
            //阶段提示>>>>>>>>>>>>>
            if (config.qgqc_jieduantishi) {
                lib.skill._qgqc_jieduantishi = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    _priority: 20211103,
                    content() {
                        game.countPlayer(function (current) {
                            current.addSkill('qgqc_jieduantishi');
                        });
                    },
                };
            }
            //进攻动作>>>>>>>>>>>
            if (config.qgqc_jingongdongzuo) {
                lib.skill._qgqc_jingongdongzuo = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    _priority: 20190124,
                    content() {
                        game.countPlayer(function (current) {
                            current.addSkill('qgqc_jingong');
                        });
                    },
                };
            }
            //幻化模式>>>>>>>>>>>
            if (config.qgqc_shanghaitexiao) {
                lib.skill._qgqc__shanghaitexiao = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    _priority: 20211204,
                    content() {
                        game.countPlayer(function (current) {
                            current.addSkill('qgqc_伤害特效');
                        });
                    },
                };
            }
            //玉璋护盾>>>>>>>>>>>>>
            if (config.ystxb_yzhd) {
                lib.skill._ystxb_yzhd = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    _priority: 20190123,
                    content() {
                        game.countPlayer(function (current) {
                            current.addSkill('ystxb_yzhd');
                        });
                    },
                };
            }
            //万法模式>>>>>>>>>>>
            if (config.qgqc_wanfa) {
                lib.skill._qgqc_wanfa = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    _priority: 20190121,
                    content() {
                        game.countPlayer(function (current) {
                            current.addSkill('qgqc_wanfa');
                        });
                    },
                };
            }
            //幻化模式>>>>>>>>>>>
            if (config.qgqc_huanhuamoshi) {
                lib.skill._qgqc_huanhuamoshi = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    _priority: 20211204,
                    content() {
                        game.countPlayer(function (current) {
                            current.addSkill('qgqc_游戏开始');
                            current.addSkill('qgqc_造成伤害');
                            current.addSkill('qgqc_受到伤害');
                            current.addSkill('qgqc_角色被杀');
                        });
                    },
                };
            }
            //太虚幻境>>>>>>>>>>>
            if (config.qgqc_taixuhuanjing) {
                lib.skill._qgqc_taixuhuanjing = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    _priority: 20211204,
                    content() {
                        game.countPlayer(function (current) {
                            current.addSkill('游戏开始技能1');
                            current.addSkill('伤害技能1');
                            current.addSkill('伤害技能2');
                            current.addSkill('击杀技能1');
                        });
                    },
                };
            }
            //受伤音效>>>>>>>>>>
            if (config.qgqc_shoushang) {
                lib.skill._qgqc_shoushang = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    _priority: 20211204,
                    content() {
                        game.countPlayer(function (current) {
                            current.addSkill('shoushangnan');
                            current.addSkill('shoushangnv');
                        });
                    },
                };
            }
            //指示线>>>>>>>>>>>>
            if (lib.config.extension_倾国倾城_qgqc_linexy && lib.config.extension_倾国倾城_qgqc_linexy != 'qgqc_line_moren') {
                get.LineAnim = function () {
                    var LineAnim = {
                        time: 1100,
                        position: 'screen',
                        width: '230px',
                        height: '115px',
                        backgroundSize: '100% 100%',
                        opacity: 1,
                        show: 'none',
                        fade: true,
                        pause: false,
                        rate_zhen: 18,
                        jump_zhen: false,
                        qianzhui: '',
                        liang: false,
                        isLine: true,
                        cycle: true,
                        style: {},
                        skills: [],
                        cards: [],
                        forbid: false,
                        image: lib.config.extension_倾国倾城_qgqc_linexy,
                    };
                    return LineAnim;
                };
                game.qgqc_PlayLineAnimation = function (name, node, fake, points) {
                    var animation = get.LineAnim();
                    if (animation == undefined) return;
                    if (animation.time <= 100000) {
                        if (animation.pause != false && !_status.paused2 && !_status.nopause) {
                            _status.qgqc_onAnimationPause = true;
                            game.pause2();
                        }
                        if (_status.qgqc_onAnimation == undefined) _status.qgqc_onAnimation = 0;
                        _status.qgqc_onAnimation++;
                    }
                    var src;
                    if (animation.image != undefined) src = 'extension/倾国倾城/image/animation_linexy/' + animation.image + '?' + new Date().getTime();
                    var finish = function () {
                        var animationID;
                        var timeoutID;
                        var interval;
                        var div = ui.create.div();
                        if (fake == true) {
                            ui.window.appendChild(div);
                        } else {
                            if (node == undefined || node == false) {
                                ui.window.appendChild(div);
                            } else {
                                node.appendChild(div);
                            }
                        }
                        if (animation.style != undefined) {
                            for (var i in animation.style) {
                                if (i == 'innerHTML') continue;
                                div.style[i] = animation.style[i];
                            }
                        }
                        var judgeStyle = function (style) {
                            if (animation.style == undefined) return false;
                            if (animation.style != undefined && animation.style[style] != undefined) return true;
                            return false;
                        };
                        if (judgeStyle('innerHTML')) div.innerHTML = animation.style.innerHTML;
                        if (judgeStyle('width') == false) div.style.width = animation.width;
                        if (judgeStyle('height') == false) div.style.height = animation.height;
                        if (judgeStyle('backgroundSize') == false && judgeStyle('background-size') == false) div.style.backgroundSize = animation.backgroundSize;
                        if (judgeStyle('opacity') == false) div.style.opacity = animation.opacity;
                        if (judgeStyle('zIndex') == false && judgeStyle('z-index') == false) div.style.zIndex = 1001;
                        if (judgeStyle('borderRadius') == false && judgeStyle('border-radius') == false) div.style.borderRadius = '5px';
                        if (judgeStyle('pointer-events') == false && judgeStyle('pointerEvents') == false) div.style['pointer-events'] = 'none';
                        if (src != undefined) {
                            if (animation.image.includes('.')) {
                                div.setBackgroundImage(src);
                            } else {
                                var type_frame1 = 0;
                                var type_frame = '.jpg';
                                var num_frame = 1;
                                type_frame = '.png';
                                num_frame = 8;
                                var folder_frame = 'extension/倾国倾城/image/animation_linexy/' + animation.image + '/';
                                var div1 = ui.create.div();
                                div1.style.height = '100%';
                                div1.style.width = '100%';
                                div1.style.top = '0px';
                                div1.style.left = '0px';
                                div.appendChild(div1);
                                var canvas = document.createElement('canvas');
                                canvas.width = div1.offsetWidth;
                                canvas.height = div1.offsetHeight;
                                div1.appendChild(canvas);
                                var context = canvas.getContext('2d');
                                var start;
                                var imgs = [];
                                var imgs_num = 0;
                                for (var i = 0; i < num_frame; i++) {
                                    var img = new Image();
                                    img.src = folder_frame + (animation.qianzhui == undefined ? '' : animation.qianzhui) + (animation.liang == true ? (i < 10 ? '0' + i : i) : i) + type_frame;
                                    if (i >= num_frame - 1) img.qgqc_final = true;
                                    img.onload = function () {
                                        imgs.push(this);
                                        if (this.qgqc_final == true) start();
                                    };
                                    img.onerror = function () {
                                        if (this.qgqc_final == true) start();
                                    };
                                }
                                start = function () {
                                    var play = function () {
                                        if (imgs_num >= imgs.length) return;
                                        var img = imgs[imgs_num];
                                        context.clearRect(0, 0, img.width, img.height);
                                        context.drawImage(img, 0, 0, img.width, img.height, 0, 0, div1.offsetWidth, div1.offsetHeight);
                                        imgs_num++;
                                        if (animation.jump_zhen == true && imgs[imgs_num + 1] != undefined) imgs.remove(imgs_num + 1);
                                        if (imgs_num >= imgs.length) {
                                            if (animation.cycle == true) {
                                                imgs_num = 0;
                                            } else {
                                                if (interval != undefined) clearInterval(interval);
                                                if (timeoutID != undefined) clearTimeout(timeoutID);
                                                if (animationID != undefined) cancelAnimationFrame(animationID);
                                            }
                                        }
                                    };
                                    interval = setInterval(play, animation.rate_zhen == undefined ? 45 : 1000 / animation.rate_zhen);
                                };
                            }
                        }
                        if (points == undefined) {
                            if (fake == true) {
                                div.style.top = top - div.offsetHeight / 2 + 'px';
                                div.style.left = left - div.offsetWidth / 2 + 'px';
                            } else {
                                if (judgeStyle('top') == false) div.style.top = 'calc(50% - ' + div.offsetHeight / 2 + 'px)';
                                if (judgeStyle('left') == false) div.style.left = 'calc(50% - ' + div.offsetWidth / 2 + 'px)';
                            }
                        } else {
                            div.style.top = points[0][1] - div.offsetHeight / 2 + 'px';
                            div.style.left = points[0][0] + 'px';
                        }
                        if (points != undefined) {
                            var timeS = (animation.fade == true ? animation.time - 450 : animation.time - 100) / 1000 / 2;
                            var getAngle = function (x1, y1, x2, y2, bool) {
                                var x = x1 - x2;
                                var y = y1 - y2;
                                var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                                var cos = y / z;
                                var radina = Math.acos(cos);
                                var angle = 180 / (Math.PI / radina);
                                if (x2 > x1 && y2 === y1) angle = 0;
                                if (x2 > x1 && y2 < y1) angle = angle - 90;
                                if (x2 === x1 && y1 > y2) angle = -90;
                                if (x2 < x1 && y2 < y1) angle = 270 - angle;
                                if (x2 < x1 && y2 === y1) angle = 180;
                                if (x2 < x1 && y2 > y1) angle = 270 - angle;
                                if (x2 === x1 && y2 > y1) angle = 90;
                                if (x2 > x1 && y2 > y1) angle = angle - 90;
                                if (bool == true && angle > 90) angle -= 180;
                                return angle;
                            };
                            var p1 = points[0];
                            var p2 = points[1];
                            var x0 = p1[0];
                            var y0 = p1[1];
                            var x1 = p2[0];
                            var y1 = p2[1];
                            div.style.transition = 'all 0s';
                            div.style.transform = 'rotate(' + getAngle(x0, y0, x1, y1, true) + 'deg)' + (x0 > x1 ? '' : ' rotateY(180deg)');
                            div.style['transform-origin'] = '0 50%';
                            var div2 = ui.create.div();
                            div2.style.zIndex = 1000;
                            div2.style['pointer-events'] = 'none';
                            div2.style.height = '20px';
                            div2.style.width = Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5) + 2 + 'px';
                            div2.style.left = x0 + 'px';
                            div2.style.top = y0 - 10 + 'px';
                            div2.style.transform = 'rotate(' + getAngle(x0, y0, x1, y1) + 'deg) scaleX(0)';
                            div2.style['transform-origin'] = '0 50%';
                            div2.style.transition = 'all ' + (timeS * 4) / 3 + 's';
                            if (src != undefined && animation.image.indexOf('.') == -1) {
                                div2.style.backgroundSize = '100% 100%';
                                div2.setBackgroundImage('extension/倾国倾城/image/animation_linexy/' + animation.image + '/line.png');
                            } else {
                                div2.style.background = '#ffffff';
                            }
                            setTimeout(function () {
                                div.style.transition = 'all ' + (timeS * 4) / 3 + 's';
                                div.style.transform += ' translateX(' + -(Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5) + 2) + 'px)';
                                //div.style.left=(div.offsetLeft+(x1-x0))+'px';
                                //div.style.top=(div.offsetTop+(y1-y0))+'px';
                                div2.style.transform = 'rotate(' + getAngle(x0, y0, x1, y1) + 'deg) scaleX(1)';
                            }, 50);
                            setTimeout(
                                function () {
                                    div2.style.transition = 'all ' + (timeS * 2) / 3 + 's';
                                    //div2.style.transform='rotate('+getAngle(x0,y0,x1,y1)+'deg) rotateY(90deg)';
                                    div2.style.transform = 'rotate(' + getAngle(x0, y0, x1, y1) + 'deg) translateX(' + (Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5) + 2 - Math.pow(Math.pow(div.offsetHeight / 2, 2) + Math.pow(div.offsetWidth / 2, 2), 0.5)) + 'px) scaleX(0.01)';
                                    //div2.style.left=(div2.offsetLeft+(x1-x0))+'px';
                                    //div2.style.top=(div2.offsetTop+(y1-y0))+'px';
                                },
                                50 + ((timeS * 4) / 3) * 1000
                            );
                            node.appendChild(div2);
                        }
                        if (animation.time <= 100000) {
                            if (animation.fade == true) {
                                if (div2 != undefined) {
                                    setTimeout(function () {
                                        div2.hide();
                                    }, animation.time - 350);
                                    setTimeout(function () {
                                        div.hide();
                                    }, animation.time - 400);
                                } else {
                                    setTimeout(function () {
                                        div.hide();
                                    }, animation.time - 350);
                                }
                            }
                            setTimeout(function () {
                                if (interval != undefined) clearInterval(interval);
                                if (timeoutID != undefined) clearTimeout(timeoutID);
                                if (animationID != undefined) cancelAnimationFrame(animationID);
                                if (fake == true) {
                                    ui.window.removeChild(div);
                                } else {
                                    if (node == undefined || node == false) {
                                        ui.window.removeChild(div);
                                    } else {
                                        node.removeChild(div);
                                    }
                                }
                                if (div2 != undefined) node.removeChild(div2);
                                _status.qgqc_onAnimation--;
                                if (_status.qgqc_onAnimationPause == true && _status.qgqc_onAnimation == 0) {
                                    delete _status.qgqc_onAnimationPause;
                                    game.resume2();
                                }
                            }, animation.time);
                        }
                    };
                    if (animation.delay != undefined) {
                        setTimeout(finish, animation.delay);
                    } else {
                        finish();
                    }
                };
                game.OriginLineXy = game.linexy;
                game.linexy = function (path) {
                    if (lib.config.extension_倾国倾城_qgqc_linexy && lib.config.extension_倾国倾城_qgqc_linexy == 'qgqc_line_moren') return game.OriginLineXy.apply(this, arguments);
                    var from = [path[0], path[1]];
                    var to = [path[2], path[3]];
                    if (game.chess) {
                        game.qgqc_PlayLineAnimation(lib.config.extension_倾国倾城_qgqc_linexy, ui.chess, false, [from, to]);
                    } else {
                        game.qgqc_PlayLineAnimation(lib.config.extension_倾国倾城_qgqc_linexy, ui.arena, false, [from, to]);
                    }
                };
            }
            //乐不思蜀>>>>>>>>>>>>
            if (config.qgqc_lebusishu) {
                lib.skill._lebusishu = {
                    trigger: {
                        target: 'useCardToBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        return event.card && event.card.name == 'lebu';
                    },
                    content() {
                        game.broadcastAll(function (player) {
                            img = document.createElement('div');
                            img.setBackgroundImage('extension/倾国倾城/其他/qgqc_lbss.png');
                            img.style.backgroundSize = 'cover';
                            img.style.width = '100%';
                            img.style.height = '100%';
                            img.style['z-index'] = '20';
                            //img.style.transform='translateY(-200px)';
                            player.node.avatar.appendChild(img);
                            ui.refresh(img);
                            img.style.transform = '';
                        }, player);
                    },
                };
                lib.skill._lebusishujudgeafter = {
                    trigger: {
                        player: ['linkAfter', 'judgeAfter', 'turnOverAfter'],
                    },
                    _priority: -2020,
                    forced: true,
                    content() {
                        if (player.countCards('j', { name: 'lebu' })) {
                            game.broadcastAll(function (player) {
                                img = document.createElement('div');
                                img.setBackgroundImage('extension/倾国倾城/qgqc_lbss.png');
                                img.style.width = '100%';
                                img.style.height = '100%';
                                img.style.backgroundSize = 'cover';
                                img.style['z-index'] = '20';
                                //img.style.transform='translateY(-200px)';
                                player.node.avatar.appendChild(img);
                                ui.refresh(img);
                                img.style.transform = '';
                            }, player);
                        } else {
                            player.node.avatar.setBackground(player.name, 'character');
                        }
                    },
                };
                lib.skill._lebusishudie = {
                    trigger: {
                        player: 'die',
                    },
                    _priority: 2,
                    forced: true,
                    forceDie: true,
                    content() {
                        game.broadcastAll(function (player) {
                            imgs = player.node.avatar.querySelectorAll('div');
                            for (var i = 0; i < imgs.length; i++) {
                                var img = imgs[i];
                                //img.style.transform='translateY(-200px)';
                                img.delete();
                            }
                        }, player);
                    },
                };
                lib.skill._lebusishulose = {
                    trigger: {
                        player: 'loseEnd',
                    },
                    filter(event, player) {
                        if (Array.isArray(event.cards))
                            for (var i of event.cards) {
                                if (i.original == 'j') return true;
                            }
                        return false;
                    },
                    forced: true,
                    content() {
                        if (player.countCards('j', { name: 'lebu' })) {
                            game.broadcastAll(function (player) {
                                img = document.createElement('div');
                                img.setBackgroundImage('extension/倾国倾城/qgqc_lbss.png');
                                img.style.width = '100%';
                                img.style.height = '100%';
                                img.style.backgroundSize = 'cover';
                                img.style['z-index'] = '20';
                                //img.style.transform='translateY(-200px)';
                                player.node.avatar.appendChild(img);
                                ui.refresh(img);
                                img.style.transform = '';
                            }, player);
                        } else {
                            game.broadcastAll(function (player) {
                                imgs = player.node.avatar.querySelectorAll('div');
                                for (var i = 0; i < imgs.length; i++) {
                                    var img = imgs[i];
                                    //img.style.transform='translateY(-200px)';
                                    img.delete();
                                }
                            }, player);
                        }
                    },
                };
            }
            //背景图片>>>>>>>>>>>>
            game.jyqgqc_beijingtupian = function () {
                var temp = lib.config.extension_倾国倾城_qgqc_beijingtupian;
                if (temp == 'auto') {
                    var list = ['原神秀', '胡桃', '胡桃1', '胡桃2', '刻晴七七', '刻晴芭芭拉', '刻晴', '刻晴1', '甘雨', '莫娜', '神里绫华', '心海', '优菈', '雷电将军', '影神子', '影•全动', '影•半动', '锦绣黛眉'];
                    if (_status.jyqgqc_beijingtupian) list.remove(_status.jyqgqc_beijingtupian);
                    temp = list.randomGet();
                }
                _status.jyqgqc_beijingtupian = temp;
                if (temp !== '1') {
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/倾国倾城/image/background/' + temp + '.jpg');
                } else {
                    game.broadcastAll() + ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
                }
                var item = lib.config.extension_倾国倾城_qgqc_beijingtupian;
                if (item != 'auto') {
                    if (_status.qgqc_beijingtupian_timeout) {
                        clearTimeout(_status.qgqc_beijingtupian_timeout);
                    }
                } else if (item == 'auto') {
                    var autotime = lib.config.extension_倾国倾城_qgqc_beijingtupian_auto;
                    var Timeout = autotime ? parseInt(autotime) : 30000;
                    var Timeout2 = _status.qgqc_beijingtupian_Timeout2;
                    if (_status.qgqc_beijingtupian_timeout && Timeout2 && Timeout2 != Timeout) {
                        clearTimeout(_status.qgqc_beijingtupian_timeout);
                    }
                    _status.qgqc_beijingtupian_timeout = setTimeout(function () {
                        game.jyqgqc_beijingtupian();
                    }, Timeout);
                    _status.qgqc_beijingtupian_Timeout2 = Timeout;
                }
            };
            if (lib.config.extension_倾国倾城_qgqc_beijingtupian && lib.config.extension_倾国倾城_qgqc_beijingtupian != '1') {
                lib.arenaReady.push(function () {
                    game.jyqgqc_beijingtupian();
                });
            }
            //背景音乐>>>>>>>>>>>>>
            game.jyplayBackgroundMusic = function () {
                var temp = lib.config.extension_倾国倾城_qgqc_beijingyinyue;
                if (temp == '0') {
                    temp = Math.floor(2 + Math.random() * 24);
                    temp = temp.toString();
                }
                ui.backgroundMusic.pause();
                var item = {
                    //蒙德
                    3: '原神.mp3', //说明栏
                    4: '原神.mp3', //说明栏
                    //蒙德
                    5: '原神.mp3',
                    6: '梦之咏叹.mp3',
                    7: '七天神像.mp3',
                    8: '蒙德的一日.mp3',
                    9: '晨曦酒庄.mp3',
                    10: '太古时期的遗孤.mp3',
                    11: '皎洁的笑颜.mp3',
                    12: '速度加快.mp3',
                    13: '战斗的秘仪.mp3',
                    14: '解决之道.mp3',
                    15: '无尽的回响.mp3',
                    16: '冲啊!无畏的勇士.mp3',
                    17: '水滴的节拍.mp3',
                    18: '无数的逆境.mp3',
                    19: '终天的闭幕曲.mp3',
                    20: '冰风回荡.mp3',
                    21: '青空.mp3',
                    22: '诗人的工作.mp3',
                    //璃月
                    23: '原神.mp3', //说明栏,
                    24: '璃月.mp3',
                    25: '美梦抚归人 (望舒夜间).mp3',
                    26: '山阴漫步.mp3',
                    27: '尘世闲游.mp3',
                    28: '麟跃幽岩.mp3',
                    29: '烈火急烹.mp3',
                    30: '高贵的诀别.mp3',
                    31: '创龙点睛.mp3',
                    32: '疾如猛火.mp3',
                    33: '激流逐浪.mp3',
                    34: '鲜衣游侠.mp3',
                    35: '永无谢幕的演出.mp3',
                    36: '岩壑之崩.mp3',
                    //稻妻
                    37: '原神.mp3', //说明栏
                    38: '羁留之客.mp3',
                    39: '乡愁如丝.mp3',
                    40: '翩翩之庭.mp3',
                    41: '哀哉鼓角未曾歇.mp3',
                    42: '空行不羁.mp3',
                    43: '难逃之阵.mp3',
                    44: '驱敌逐北.mp3',
                };
                if (item[temp]) {
                    ui.backgroundMusic.src = 'extension/倾国倾城/配音/bgm/' + item[temp];
                } else {
                    game.playBackgroundMusic();
                    ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
                }
                if (lib.config.extension_倾国倾城_qgqc_beijingyinyue && lib.config.extension_倾国倾城_qgqc_beijingyinyue != '1') {
                    ui.backgroundMusic.addEventListener('ended', game.jyplayBackgroundMusic);
                } else {
                    ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
                }
            };
            if (lib.config.extension_倾国倾城_qgqc_beijingyinyue && lib.config.extension_倾国倾城_qgqc_beijingyinyue != '2') {
                lib.arenaReady.push(function () {
                    //ui.backgroundMusic.autoplay=true;
                    //ui.backgroundMusic.pause();
                    game.jyplayBackgroundMusic();
                    ui.backgroundMusic.addEventListener('ended', game.jyplayBackgroundMusic);
                });
            }
            //New Function>>>>>>>>>>>>
            lib.element.player.replaceFujiang = function (name2) {
                var hp = this.hp;
                var maxhp = this.maxHp;
                this.clearSkills();
                this.init(this.name1, name2);
                this.classList.remove('unseen2');
                this.hp = hp;
                this.maxHp = maxhp;
                this.update();
            };
            //角色聊天>>>>>>>>>>>>>>>>
            if (parseFloat(lib.config.extension_倾国倾城_qgqc_jueseliaotian) != '1') {
                //<<回血>>
                lib.skill._recoversay = {
                    trigger: {
                        global: 'recoverEnd',
                    },
                    filter(event, player) {
                        return true;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var say = 0;
                        if (get.attitude(player, trigger.player) > 0) {
                            if (trigger.player == player) {
                                if (trigger.player.hp <= 1 || trigger.num >= 2) {
                                    var chat = ['濒死挣扎一番!', '我还没那么容易死!'].randomGet();
                                    var say = 1;
                                } else {
                                    var chat = ['回复一下元气.', '养精蓄锐'].randomGet();
                                    var say = 1;
                                }
                            } else if (parseFloat(lib.config.extension_倾国倾城_qgqc_jueseliaotian) == '3') {
                                if (trigger.player.hp <= 1 || trigger.num >= 2) {
                                    var chat = ['极限回血,强啊', '我们队友是杀不死的哦!'].randomGet();
                                    var say = 1;
                                } else {
                                    var chat = ['哈哈对面是不是输不起', '来来来,砍我们'].randomGet();
                                    var say = 1;
                                }
                            }
                        } else if (parseFloat(lib.config.extension_倾国倾城_qgqc_jueseliaotian) == '3' || trigger.player != player) {
                            if (trigger.player.hp <= 1 || trigger.num >= 2) {
                                var chat = ['你给凉企氪金了？', '这老不死的.'].randomGet();
                                var say = 1;
                            } else {
                                var chat = ['没事,很快把他们打到残血', '就不信你们还能再回？'].randomGet();
                                var say = 1;
                            }
                        }
                        if (Math.random() * 100 > parseFloat(lib.config.extension_倾国倾城_ransay)) var say = 0;
                        if (say == 1) {
                            player.say(chat);
                        }
                    },
                };
                //<<受伤>>
                lib.skill._damagesay = {
                    trigger: {
                        global: ['damageEnd', 'loseHpEnd'],
                    },
                    filter(event, player) {
                        return true;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var say = 0;
                        if (get.attitude(player, trigger.player) > 0) {
                            if (trigger.player == player) {
                                if (trigger.player.hp <= 1 || trigger.num >= 2) {
                                    var chat = ['痛啊', '我一定会回来的!!!', '我还能挺一会..'].randomGet();
                                    var say = 1;
                                } else {
                                    var chat = ['来来来,继续？', '继续砍我!来!!'].randomGet();
                                    var say = 1;
                                }
                            } else if (parseFloat(lib.config.extension_倾国倾城_qgqc_jueseliaotian) == '3') {
                                if (trigger.player.hp <= 1 || trigger.num >= 2) {
                                    var chat = ['噢...心疼', '坚持住啊~~~', '对面过分了!'].randomGet();
                                    var say = 1;
                                } else {
                                    var chat = ['难过QAQ', '我有桃放心'].randomGet();
                                    var say = 1;
                                }
                            }
                        } else if (parseFloat(lib.config.extension_倾国倾城_qgqc_jueseliaotian) == '3' || trigger.player != player) {
                            if (trigger.player.hp <= 1 || trigger.num >= 2) {
                                var chat = ['谁来补最后一刀？', '对面的你们药丸'].randomGet();
                                var say = 1;
                            } else {
                                var chat = ['大快人心!', '干得漂亮'].randomGet();
                                var say = 1;
                            }
                        }
                        if (Math.random() * 100 > parseFloat(lib.config.extension_倾国倾城_ransay)) var say = 0;
                        if (say == 1) {
                            player.say(chat);
                        }
                    },
                };
                //<<死亡>>
                lib.skill._diesay = {
                    trigger: {
                        global: 'die',
                    },
                    silent: true,
                    forced: true,
                    filter(event, player) {
                        return parseFloat(lib.config.extension_倾国倾城_qgqc_jueseliaotian) == '3';
                    },
                    content() {
                        if (get.attitude(player, trigger.player) > 0) {
                            var chat = ['其实我是怕你吃太多桃噎着.', '玩游戏之前能不能带点脑子', '彻底玩蛋了...', '怎么没有投翔按钮？'].randomGet();
                            var say = 1;
                        } else {
                            var chat = ['来来来,继续口嗨啊？!#阴险', '我们的游戏正在蒸蒸日上哦~#微笑', '对面投翔吧!!!', '对面没了,我们快赢了', '对面好菜鸡啊,快输了吧？!'].randomGet();
                            var say = 1;
                        }
                        if (Math.random() * 100 > parseFloat(lib.config.extension_倾国倾城_ransay)) var say = 0;
                        if (say == 1) {
                            player.say(chat);
                        }
                    },
                };
                //<<被指定>>
                lib.skill._tosay = {
                    trigger: {
                        global: 'useCardToPlayered',
                    },
                    silent: true,
                    forced: true,
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        var say = 0;
                        if (trigger.target == player) {
                            if (get.attitude(player, trigger.player) > 0) {
                                if (trigger.card.name == 'wu') {
                                    var chat = ['无'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'sha') {
                                    var chat = ['你还真杀我？!', '我有闪'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'guohe') {
                                    var chat = ['呃,这...', '你想干嘛？', '不要这样嘛'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'shunshou') {
                                    var chat = ['嘿嘿,拿的废牌', '你想干嘛？', '关键牌被拿走了'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'juedou') {
                                    var chat = ['是男人就来决斗', '真男人是不会输的'].randomGet();
                                    var say = 1;
                                }
                            } else {
                                if (trigger.card.name == 'sha') {
                                    var chat = ['我赌你断杀.', '我会复仇的!', '杀我对你有什么好处', '来来来,继续？', '你当我没闪？'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'guohe') {
                                    var chat = ['你想干嘛？', '不要这样嘛', '过分了啊', '你好贱', '反正你也不需要对吧~'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'shunshou') {
                                    var chat = ['过分了啊', '你好贱', '谢谢,拿走了~', '不如给我？!'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'juedou') {
                                    var chat = ['我手牌有杀我怕你？', '来!你别怂!', '怕你不成？'].randomGet();
                                    var say = 1;
                                }
                            }
                        } else if (parseFloat(lib.config.extension_倾国倾城_qgqc_jueseliaotian) == '3') {
                            if (get.attitude(player, trigger.player) > 0) {
                                if (trigger.card.name == 'sha') {
                                    var chat = ['你个禽兽你住手!', '有什么事冲我来!', '敢弄我队友？你完蛋了', '不,别.', '过分'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'guohe') {
                                    var chat = ['你这算什么好汉？', '直接杀啊,拆啥', '很烦这张牌诶.', '过河拆桥？追!', '希望拆不到好牌'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'shunshou') {
                                    var chat = ['你这算什么好汉？', '直接杀啊,偷牌干什么啥', '很烦这张牌诶.', '给你毒你要不要'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'juedou') {
                                    var chat = ['你打不过我队友的', '看我队友反杀你'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'huogong') {
                                    var chat = ['小心东风不与周郎便哦!', '等着玩火烧身吧', '放弃吧,你没有这张花色的'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'jiedao') {
                                    var chat = ['祖传屠龙宝刀要被借走了..', '兄弟,刀呢'].randomGet();
                                    var say = 1;
                                }
                            } else {
                                if (trigger.card.name == 'sha') {
                                    var chat = ['做得好', '待会一人给TA一刀', '请继续', '淦就完事了'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'guohe') {
                                    var chat = ['哟呵,好爽', '对面要没牌了哦~', '人不贱则不立'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'shunshou') {
                                    var chat = ['呵呵,好爽', '对面被摸空了哈哈哈', '人不贱则不立'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'juedou') {
                                    var chat = ['吃瓜ing', '来看掐架了', '现场武术指导,我方必胜', '我们手牌多,不怕'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'huogong') {
                                    var chat = ['烧死TA!', '借你东风.', '对面怕火'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'jiedao') {
                                    var chat = ['干得漂亮', '这刀岂是你配用的!'].randomGet();
                                    var say = 1;
                                }
                            }
                        }
                        if (Math.random() * 100 > parseFloat(lib.config.extension_倾国倾城_ransay)) var say = 0;
                        if (say == 1) {
                            player.say(chat);
                        }
                    },
                };
                //<<使用牌>>
                lib.skill._fromsay = {
                    trigger: {
                        global: 'useCard',
                    },
                    silent: true,
                    forced: true,
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        var say = 0;
                        if (parseFloat(lib.config.extension_倾国倾城_qgqc_jueseliaotian) == '3') {
                            if (get.attitude(player, trigger.player) > 0) {
                                if (trigger.card.name == 'tao') {
                                    var chat = ['辛得诸君出手相救!', '最爱吃桃子'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'jiu') {
                                    var chat = ['哈哈你们完了', '看我癫狂图图'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'wuxie') {
                                    var chat = ['你休想!', '不,你不想', '你想都别想'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'taoyuan') {
                                    var chat = ['多多益善', '蟠桃会赴会了~'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'wugu') {
                                    var chat = ['多多益善!', '我拿走了', '谢谢兄弟,滑稽'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'nanman') {
                                    var chat = ['别误伤队友了哦.', '我没杀..', '我有杀哦', '吾乃五溪蛮王,可惜没杀'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'wanjian') {
                                    var chat = ['别误伤队友了哦.', '别乱放箭啊', '我有闪', '我没...', '我没闪', '我也...'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'wuzhong') {
                                    var chat = ['关键牌来了', '摸摸摸牌牌～'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'tiesuo') {
                                    var chat = ['连TA', '绑住TA!'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'zhuge') {
                                    var chat = ['扫六合席卷八荒说的难道就是宁？', '杀遍全场了', '哈哈,AK出来了'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'guding') {
                                    var chat = ['就问你怕不怕？', '捅对面菊花~', '对面,保护好你们的菊花'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'tengjia') {
                                    var chat = ['小心点,别沾上火', '天冷了,暖和暖和'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'bagua') {
                                    var chat = ['这是进口的八卦阵!', '刚去学了太极？'].randomGet();
                                    var say = 1;
                                }
                            } else {
                                if (trigger.card.name == 'tao') {
                                    var chat = ['哟,居然有桃', '哎哟'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'jiu') {
                                    var chat = ['啊,别', '我好害怕'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'wuxie') {
                                    var chat = ['无懈？', '不,你不想!', '哎哟,有脾气了'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'taoyuan') {
                                    var chat = ['白嫖快乐!!', '拿走了不谢'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'wugu') {
                                    var chat = ['白嫖快乐!!', '白嫖党的胜利'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'nanman') {
                                    var chat = ['我吐了', '好恶心', '爷好怕~', '我有杀', '不怕'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'wanjian') {
                                    var chat = ['你是大嘴附体？!', '爷好怕', '我有闪呵呵', '没用的', '我有闪'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'wuzhong') {
                                    var chat = ['狗托？', '我玩十年了不比你强？', '祝你摸到一手烂牌'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'tiesuo') {
                                    var chat = ['别连我~', '你好邪恶', '切,难道你有火攻吗'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'zhuge') {
                                    var chat = ['糟了AK出现了!', '闪不太够啊', '赶紧拆掉TA'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'guding') {
                                    var chat = ['是大名鼎鼎的菊花刀', '哈哈,我有牌不怕'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'tengjia') {
                                    var chat = ['穿寿衣是想来送人头？', '疼甲你也穿呵呵', '我有火攻哦'].randomGet();
                                    var say = 1;
                                }
                                if (trigger.card.name == 'bagua') {
                                    var chat = ['♣️️八卦狗都不用.', '这玩意有啥用？'].randomGet();
                                    var say = 1;
                                }
                            }
                        }
                        if (Math.random() * 100 > parseFloat(lib.config.extension_倾国倾城_ransay)) var say = 0;
                        if (say == 1) {
                            player.say(chat);
                        }
                    },
                };
                lib.skill._selfsay = {
                    trigger: {
                        player: 'useCard',
                    },
                    silent: true,
                    forced: true,
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        var say = 0;
                        if (trigger.card.name == 'sha') {
                            var chat = ['杀一下~', '杀!!!', '杀穿你', '不杀你几刀你也不知道爷的厉害'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'juedou') {
                            var chat = ['咱们来单挑', '单挑,敢不敢？'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'guohe') {
                            var chat = ['拆你的牌!!!', '你别想要', '看你也不需要', '这牌对你没用'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'wuxie') {
                            var chat = ['哈哈,你休想!!', '你甚至想都别想'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'nanman') {
                            var chat = ['男蛮入侵!!!', '冲冲冲!'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'wanjian') {
                            var chat = ['全都去死吧', '放箭!放箭!!'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'tao') {
                            var chat = ['吃颗桃子', '好吃', '嗯,真香'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'jiedao') {
                            var chat = ['借下你的杀猪刀.', '你不是很能刀么？', '可惜下一秒就是我的了'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'shunshou') {
                            var chat = ['取你的牌!', '呵呵,我拿走了', '可惜下一秒就是我的了'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'taoyuan') {
                            var chat = ['来来大家一起', '一人一口酥'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'wugu') {
                            var chat = ['发牌了发牌了!', '来来,人人都有'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'wuzhong') {
                            var chat = ['无中生友.', '摸摸摸!'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'jiu') {
                            var chat = ['举杯消愁', '对酒当歌,人生几何!', '纯度挺高的', '下次换香槟？'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'huogong') {
                            var chat = ['烧你丫的', '让我火上浇油!', '烧死你'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'tiesuo') {
                            var chat = ['要死你们也一起死啊对吧'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'zhuge') {
                            var chat = ['看我杀遍全场!', '看我乱杀!', '杀杀杀', '冲冲冲'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'guding') {
                            var chat = ['菊花刀'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'tengjia') {
                            var chat = ['来吧,烧我~', '其实一点也不疼'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'bagua') {
                            var chat = ['绝对不判♣️️', '牌堆顶都是红色的哦'].randomGet();
                            var say = 1;
                        }
                        if (trigger.card.name == 'qilin') {
                            var chat = ['没想到还有这种要求!', '你的马没了'].randomGet();
                            var say = 1;
                        }
                        if (Math.random() * 100 > parseFloat(lib.config.extension_倾国倾城_jueseliaotian)) var say = 0;
                        if (say == 1) {
                            player.say(chat);
                        }
                    },
                };
                //<<摸牌>>
                lib.skill._haoyunlai = {
                    trigger: {
                        player: 'drawBegin',
                    },
                    silent: true,
                    content() {
                        if (player == game.me && ui.cardPile.childElementCount > 1 && lib.config.extension_倾国倾城_jueseliaotian) {
                            var chat = ['强啊!获得了' + get.cnNumber(trigger.num, true) + '张牌', '手气爆好!' + get.cnNumber(trigger.num, true) + '张牌都是好牌!'].randomGet();
                            if (parseFloat(lib.config.extension_倾国倾城_qgqc_jueseliaotian) != '1') player.say(chat);
                            var value = get.value(ui.cardPile.firstChild);
                            var num = Math.min(20, ui.cardPile.childElementCount);
                            var list = [],
                                list2 = [],
                                list3 = [];
                            for (var i = 1; i < num; i++) {
                                var val = get.value(ui.cardPile.childNodes[i]);
                                if (val > value) {
                                    list.push(ui.cardPile.childNodes[i]);
                                    if (val > value + 1 && val >= 7) {
                                        list2.push(ui.cardPile.childNodes[i]);
                                    }
                                    if (val > value + 1 && val >= 8) {
                                        list3.push(ui.cardPile.childNodes[i]);
                                    }
                                }
                            }
                            var card;
                            if (list3.length) {
                                card = list3.randomGet();
                            } else if (list2.length) {
                                card = list2.randomGet();
                            } else if (list.length) {
                                card = list.randomGet();
                            }
                            if (card) {
                                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                            }
                        } else {
                            var chat = ['拿到' + get.cnNumber(trigger.num, true) + '张牌', '抽' + get.cnNumber(trigger.num, true) + '张牌先'].randomGet();
                            if (parseFloat(lib.config.extension_倾国倾城_qgqc_jueseliaotian) != '1') player.say(chat);
                        }
                    },
                    forced: true,
                    popup: false,
                };
            }
            //音效>>>>>>>>>>>>>>>
            game.playqgqc = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/倾国倾城', fn);
                }
            };
            lib.skill._qgqc_zhwpy = {
                trigger: { player: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/倾国倾城', player.name);
                },
            };
            if (config.qgqc_huanleyinxiao) {
                lib.arenaReady.push(function () {
                    for (var i in lib.characterPack.qingguoqingcheng) {
                        if (lib.character[i][3].indexOf('qgqc_zhwpy') < 0) lib.character[i][3].push('qgqc_zhwpy');
                    }
                });
                lib.skill._qgqcyourturn = {
                    trigger: { player: 'phaseUseBegin' },
                    forced: true,
                    filter(event, player) {
                        return player == game.me;
                    },
                    content() {
                        game.playqgqc('其他/yourturn');
                    },
                };
                lib.skill._qgqcfail = {
                    trigger: { player: 'dieBegin' },
                    forced: true,
                    filter(event, player) {
                        return player == game.me;
                    },
                    content() {
                        game.playqgqc('其他/qgqc_fail');
                    },
                };
                lib.skill._diechat = {
                    trigger: { player: 'dieBegin' },
                    forced: true,
                    filter(event, player) {
                        return event.source && player != game.me;
                    },
                    content() {
                        game.playAudio('../extension/倾国倾城/其他/qgqc_zhenwang');
                        trigger.source.say('再会啦');
                    },
                };
            }
            //开场特效>>>>>>>>>>>>>
            if (config.qgqc_kaichangtexiao) {
                lib.skill._qgqc_kaichangtexiao = {
                    trigger: {
                        global: 'roundStart',
                    },
                    forced: true,
                    filter(event, player) {
                        return game.roundNumber == 1;
                    },
                    content() {
                        if (player == game.me) {
                            //game.broadcastAll(function(player){
                            var Animation = ui.create.div();
                            Animation.setBackgroundImage('extension/倾国倾城//其他/qgqc_kaichangtexiao.png');
                            Animation.style.backgroundSize = 'cover';
                            Animation.style.top = '36%';
                            Animation.style.left = '40%';
                            Animation.style['z-index'] = '80';
                            Animation.style.opacity = '0.2';
                            Animation.style.width = '240px';
                            Animation.style.height = '240px';
                            Animation.style.transform = 'scale(10)';
                            Animation.style.transition = 'all 0.5s';
                            ui.window.appendChild(Animation);
                            ui.refresh(Animation);
                            setTimeout(function () {
                                Animation.style.opacity = '1';
                                //Animation.style["z-index"] = '80';
                                Animation.style.transform = 'scale(1)';
                                Animation.style.transition = 'all 0.5s';
                                Animation.style.width = '240px';
                                Animation.style.height = '240px';
                                Animation.style.top = '36%';
                                Animation.style.left = '40%';
                                game.playqgqc('其他/qgqc_gamestart');
                            }, 50);
                            //game.delay(0.5);
                            //player.$fullscreenpop('开始游戏','fire');
                            setTimeout(function () {
                                ui.window.removeChild(Animation);
                                //Animation.delete();
                            }, 1350);
                            //},player);
                        }
                    },
                };
            }
            //击杀特效>>>>>>>>>>>>
            if (config.qgqc_jishatexiao) {
                lib.skill._qgqc_jishatexiao = {
                    trigger: {
                        source: 'dieBegin',
                    },
                    //forceDie:true,
                    forced: true,
                    _priority: 20,
                    content() {
                        'step 0';
                        game.playqgqc('qgqc_jisha');
                        ('step 1');
                        setTimeout(function () {
                            text1 = document.createElement('div');
                            text1.innerHTML = '击';
                            text1.style.backgroundSize = 'cover';
                            text1.style.width = '100%';
                            text1.style.height = '100%';
                            //text1.style.left = '-150px';
                            text1.style.top = 'calc(50% - 90px)';
                            text1.style.left = '62%';
                            text1.style.transform = 'scale(-100)'; //缩放变化
                            text1.style['font-size'] = '75px';
                            // text1.style['text-align']='center';
                            text1.style['font-family'] = 'xingkai';
                            text1.style['z-index'] = '60'; //顶层
                            text1.style['text-shadow'] = 'rgba(255,0,0,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,black 0 0 2px';
                            ui.window.appendChild(text1);
                            ui.refresh(text1);
                            text1.style.transform = '';
                            game.playqgqc('qgqc_jishatexiao');
                            text2 = document.createElement('div');
                            text2.innerHTML = '杀';
                            text2.style.backgroundSize = 'cover';
                            text2.style.width = '100%';
                            text2.style.height = '100%';
                            //text2.style.left = '-150px';
                            text2.style.top = 'calc(58% - 90px)';
                            text2.style.left = '68%';
                            text2.style.transform = 'scale(100)'; //缩放变化
                            text2.style['font-size'] = '75px';
                            //text2.style['text-align']='center';
                            text2.style['font-family'] = 'xingkai';
                            text2.style['z-index'] = '60'; //顶层
                            text2.style['text-shadow'] = 'rgba(255,0,0,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,black 0 0 2px';
                            ui.window.appendChild(text2);
                            ui.refresh(text2);
                            text2.style.transform = '';
                            setTimeout(function () {
                                //ui.window.removeChild(text1);
                                //ui.window.removeChild(text2);
                                text1.delete();
                                text2.delete();
                            }, 1800);
                        }, 500);
                        ('step 2');
                        game.broadcastAll(function (player) {
                            var Animation = ui.create.div();
                            Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;
                            Animation.style.left = '10%';
                            Animation.style.top = 'calc(33.5% - 90px)'; //50%
                            Animation.style.width = '270px'; //120
                            Animation.style.height = '360px'; //150
                            Animation.style.transition = 'all 2s';
                            //Animation.style.position='relative';
                            Animation.style.transform = 'translateX(50px)';
                            Animation.style.transform = 'translateX(30px)';
                            Animation.style.transform = 'translateX(20px)'; //减速
                            Animation.style.backgroundSize = 'cover';
                            Animation.style['z-index'] = '50'; //顶层
                            ui.window.appendChild(Animation);
                            ui.refresh(Animation);
                            name0 = document.createElement('div');
                            name0.innerHTML = player.node.name.innerHTML;
                            name0.style.backgroundSize = 'cover';
                            name0.style.width = '100%';
                            name0.style.height = '100%';
                            name0.style.top = 'calc(36% - 90px)';
                            name0.style.left = '12%';
                            name0.style['font-size'] = '36px';
                            name0.style['font-family'] = 'xingkai';
                            //name0.style['text-align']='center';
                            name0.style['z-index'] = '55'; //顶层
                            name0.style['text-shadow'] = 'rgba(255,0,0,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,black 0 0 2px';
                            ui.window.appendChild(name0);
                            ui.refresh(name0);
                            setTimeout(function () {
                                //ui.window.removeChild(name0);
                                name0.delete();
                            }, 2400);
                            /* var jisha = ui.create.div();        
                            jisha.setBackgroundImage('extension/倾国倾城/qgqc_jisha.png');             					     	    
                            jisha.style.left = '5%';   	    	 
                            jisha.style.top = 'calc(48% - 90px)';       
                            jisha.style.width = '208px';
                            jisha.style.height = '112px';            		
                            jisha.style.position ='absolute';
                            jisha.style.transition = 'all 0.5s';
                            jisha.style.transform ='translateX(10px)';
                             jisha.style.transform ='translateX(55px)';
                            // jisha.style.transform ='translateX(50px)';
                            jisha.style.backgroundSize = 'cover';      
                            jisha.style["z-index"]='65';//顶层
                            ui.window.appendChild(jisha);
                            ui.refresh(jisha); 		
                                jisha.style.left = '70%';   	    	 
                                jisha.style.top = 'calc(48% - 90px)';       		    
                                jisha.style["z-index"]='65';
                                jisha.style.transform ='translateX(100px)'; 
                                jisha.style.transition = 'all 0.5s';		       	           	  
                            setTimeout(function(){
                                ui.window.removeChild(jisha);            
                                jisha.delete();			            
                            },1000);
                            */
                            var Animation1 = ui.create.div();
                            Animation1.style.backgroundImage = trigger.player.node.avatar.style.backgroundImage;
                            Animation1.style.right = '18%';
                            Animation1.style.top = 'calc(36% - 90px)'; //40%
                            Animation1.style.width = '240px';
                            Animation1.style.height = '320px';
                            //Animation1.style.position='relative';
                            Animation1.style.transition = 'all 2s';
                            Animation1.style.transform = 'translateX(-50px)';
                            Animation1.style.transform = 'translateX(-30px)';
                            Animation1.style.transform = 'translateX(-20px)';
                            Animation1.style.backgroundSize = 'cover';
                            Animation1.style['z-index'] = '50'; //顶层
                            //Animation1.style.webkitFilter="grayscale(100%)";//去色
                            //Animation1.style.filter="grayscale(100%)";
                            ui.window.appendChild(Animation1);
                            ui.refresh(Animation1);
                            setTimeout(function () {
                                Animation1.style.webkitFilter = 'grayscale(100%)'; //去色
                                Animation1.style.filter = 'grayscale(100%)';
                            }, 300);
                            name1 = document.createElement('div');
                            name1.innerHTML = trigger.player.node.name.innerHTML;
                            name1.style.backgroundSize = 'cover';
                            name1.style.width = '100%';
                            name1.style.height = '100%';
                            name1.style.top = 'calc(38.5% - 90px)';
                            name1.style.left = '60%';
                            name1.style['font-size'] = '36px';
                            name1.style['font-family'] = 'xingkai';
                            //name1.style['text-align']='center';
                            name1.style['z-index'] = '55'; //顶层
                            name1.style['text-shadow'] = 'rgba(255,0,0,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,black 0 0 2px';
                            ui.window.appendChild(name1);
                            ui.refresh(name1);
                            setTimeout(function () {
                                name1.delete();
                                ui.window.removeChild(Animation1);
                                Animation1.delete();
                            }, 800);
                            var Animation2 = ui.create.div();
                            Animation2.style.backgroundImage = trigger.player.node.avatar.style.backgroundImage;
                            Animation2.style.right = '16%';
                            Animation2.style.top = 'calc(32% - 90px)'; //40%
                            Animation2.style.width = '240px';
                            Animation2.style.height = '320px';
                            //Animation2.style.position='relative';
                            // Animation2.style.transform='translate(3px)';
                            // Animation2.style.transition = 'all 0.5s';
                            Animation2.style.backgroundSize = 'cover';
                            Animation2.style['z-index'] = '50'; //顶层
                            Animation2.style.webkitFilter = 'grayscale(100%)'; //去色
                            Animation2.style.filter = 'grayscale(100%)'; //去色
                            //Animation2.style.clip='rect(0px,202010px,170px,0px)';//平衡裁剪(上右下左)
                            Animation2.style.clipPath = 'polygon(0 0, 100% 0, 100% 70%, 0 30%)'; //斜面裁切
                            Animation2.style.WebkitClipPath = 'polygon(0 0, 100% 0, 100% 70%, 0 30%)';
                            var Animation3 = ui.create.div();
                            Animation3.style.backgroundImage = trigger.player.node.avatar.style.backgroundImage;
                            Animation3.style.right = '20%';
                            Animation3.style.top = 'calc(40% - 90px)'; //40%
                            Animation3.style.width = '240px';
                            Animation3.style.height = '320px';
                            //Animation3.style.position='relative';
                            //Animation3.style.transform='translate(-3px)';
                            //Animation3.style.transition = 'all 0.5s'
                            Animation3.style.backgroundSize = 'cover';
                            Animation3.style['z-index'] = '50'; //顶层
                            Animation3.style.webkitFilter = 'grayscale(100%)'; //去色
                            Animation3.style.filter = 'grayscale(100%)'; //去色
                            //Animation3.style.clip='rect(170px,202010px,202010px,0px)';//平行分割
                            Animation3.style.clipPath = 'polygon(0 30%, 100% 70%, 100% 100%, 0 100%)'; //斜面裁切
                            Animation3.style.WebkitClipPath = 'polygon(0 30%, 100% 70%, 100% 100%, 0 100%)';
                            setTimeout(function () {
                                //ui.window.appendChild(name2);
                                //ui.refresh(name2);
                                ui.window.appendChild(Animation2);
                                ui.refresh(Animation2);
                                // ui.window.appendChild(name3);
                                //ui.refresh(name3);
                                ui.window.appendChild(Animation3);
                                ui.refresh(Animation3);
                            }, 800);
                            setTimeout(function () {
                                Animation2.style.transform = 'translate(8px)';
                                Animation2.style.transition = 'all 0.8s';
                                //	name2.style.transform='translate(8px)';
                                //	name2.style.transition = 'all 0.8s';
                                Animation3.style.transform = 'translate(-8px)';
                                Animation3.style.transition = 'all 0.8s';
                                //	name3.style.transform='translate(-8px)';
                                //	name3.style.transition = 'all 0.8s';
                                /*	setInterval(
                                 function () {                                              
                                     Animation2.style.left = Animation2.offsetLeft + 25 + "px";
                                     Animation2.style.top = Animation2.offsetTop - 10 + "px";
                                     Animation3.style.left = Animation3.offsetLeft - 25 + "px";
                                     Animation3.style.top = Animation3.offsetTop + 10 + "px";
                                 },
                                 50);*/
                            }, 1200);
                            setTimeout(function () {
                                ui.window.removeChild(Animation);
                                Animation.delete();
                                //ui.window.removeChild(qgqc_kuang);
                                //qgqc_kuang.delete();
                                ui.window.removeChild(Animation2);
                                Animation2.delete();
                                ui.window.removeChild(Animation3);
                                Animation3.delete();
                            }, 2500);
                        }, player);
                    },
                };
            }
            // 将灵模式>>>>>>>>>>>>
            if (config.qgqc_yinglingfuhun) {
                lib.skill._qgqc_yinglingfuhun = {
                    trigger: {
                        global: 'gameStart',
                        player: 'enterGame',
                    },
                    forced: true,
                    _priority: 100,
                    fixed: true,
                    filter(event, player) {
                        return player.isAlive();
                    },
                    content() {
                        'step 0';
                        var list;
                        if (_status.connectMode) {
                            list = get.charactersOL(function (i) {
                                return lib.character[i][1] != 'shen';
                            });
                        } else {
                            list = get.gainableCharacters(function (info) {
                                return info[1] == ['wei', 'shu', 'wu', 'qun', 'qgqc_yuanshen'].randomGet();
                            });
                        }
                        player
                            .chooseButton(true)
                            .set('ai', function (button) {
                                return get.rank(button.link, true) - lib.character[button.link][2];
                            })
                            .set('createDialog', ['请选择一位将灵', [list.randomGets(6), 'character']]);
                        ('step 1');
                        if (result.links?.length) {
                            player.flashAvatar('_qgqc_yinglingfuhun', result.links[0]);
                            var name = result.links[0];
                            var list = [];
                            var skills = lib.character[result.links[0]][3];
                            for (var j = 0; j < skills.length; j++) {
                                if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !player.hasSkill(skills[j] && !lib.skill[skills[j]].zhuSkill)) {
                                    list.push(skills[j]);
                                }
                            }
                            player.flashAvatar('_qgqc_yinglingfuhun', list);
                            player.addAdditionalSkill('_qgqc_yinglingfuhun', list);
                            player.markCharacter(name, null, true, true);
                        }
                    },
                    ai: {
                        order: 8,
                    },
                };
            }
            //随机武将>>>>>>>>>>>>>
            if (config.qgqc_sjwjp) {
                lib.skill._qgqc_sjwjp = {
                    trigger: {
                        global: 'roundStart',
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var targets = game.filterPlayer();
                        targets.sort(lib.sort.seat);
                        event.targets = targets;
                        ('step 1');
                        event.num = 0;
                        ('step 2');
                        if (num < event.targets.length) {
                            var list;
                            if (_status.connectMode) {
                                list = get.charactersOL(function (i) {
                                    return lib.character[i][1] != 'shen';
                                });
                            } else {
                                list = get.gainableCharacters(function (info) {
                                    return info[1] == ['shen', 'shu', 'wei', 'wu', 'qun', 'qingguoqincheng'].randomGet();
                                });
                            }
                            var name = list.randomGet();
                            var a = event.targets[num].hp;
                            var b = event.targets[num].maxHp;
                            event.targets[num].init(name);
                            event.targets[num].hp = a;
                            event.targets[num].maxHp = b;
                            event.targets[num].update();
                            event.num++;
                            event.redo();
                        } else event.finish();
                    },
                };
            }
        },
        precontent(qgqc) {
            //切换卡背>>>>>>>>>>>
            if (lib.config.extension_倾国倾城_qgqc_qiehuankabei && lib.config.extension_倾国倾城_qgqc_qiehuankabei != 'qgqc_kb0') {
                var cbcss = document.createElement('style');
                cbcss.innerHTML = ".card:empty,.card.infohidden{background: url(extension/倾国倾城/image/cardback/" + lib.config.extension_倾国倾城_qgqc_qiehuankabei + ".jpg);background-size: 100% 100% !important;}";
                document.head.appendChild(cbcss);
            }
            game.import('character', function () {
                lib.config.all.characters.add('xjxtp');
                lib.config.characters.add('xjxtp');
                lib.translate.xjxtp_character_config = '<img style=width:100px  src=extension/倾国倾城/image/sanguo.png>';
                var xjxtp = {
                    name: 'xjxtp',
                    connect: true,
                    //武将分包开关---------
                    characterSort: {
                        xjxtp: {
                            xjxtp_shenjiang: ['qgqc_Aleah', 'qgqc_duosidawang', 'qgqc_shenzuoci'],
                            xjxtp_xinjiang: ['qgqc_xinzhangchunhua'],
                            xjxtp_jiexiantupo: ['qgqc_jieliuyan', 'qgqc_jiexuyou', 'qgqc_jiezhoufei', 'qgqc_jieshamoke'],
                        },
                    },
                    character: {
                        //武将
                        qgqc_jieliuyan: ['male', 'qun', 3, ['qgqc_limu', 'qgqc_tushe', 'qgqc_wanwu'], []],
                        qgqc_xinzhangchunhua: ['female', 'qun', '3/6', ['qgqc_jueqing', 'qgqc_shangshi'], []],
                        /*"qgqc_jielijue":["male","qun","4/8",["qgqc_langxi","qgqc_yisuan"],[]],
                    qgqc_shengguanyu:["male","qun",3,["qgqc_wusheng","qgqc_yijue"],[]],*/
                        qgqc_shenzuoci: ['male', 'shen', 4, ['qgqc_huashen', 'qgqc_xinsheng'], []],
                        qgqc_jiexuyou: ['male', 'wei', 3, ['qgqc_chenglve', 'qgqc_shicai', 'qgqc_cunmu'], []],
                        qgqc_jiezhoufei: ['female', 'qun', '3', ['qgqc_kongsheng', 'qgqc_liangyin', 'qgqc_qinse'], []],
                        qgqc_jieshamoke: ['male', 'qun', 4, ['qgqc_jili', 'qgqc_guduo'], []],
                        qgqc_duosidawang: ['male', 'shen', '4/5', ['qgqc_equan', 'qgqc_manji', '游戏开始技能1', '伤害技能1', '伤害技能2', '击杀技能1'], ['des:朵思大王是<三国演义>中人物,南蛮秃龙洞的元帅,孟获弟弟孟优的朋友,据说是南蛮第一智者.<br>这里是来自太虚幻境的神朵思大王,拥有幻化无穷无穷的力量<li>在游戏开始时可以在史诗•精品混合技能库中选择一项技能获得之<li>在一局游戏中首次造成伤害和受到伤害时可以在精品技能库中各选择一项技能获得之<li>最后在一局游戏中首次有角色死亡时可以在史诗技能库中选择一项技能获得之']],
                        //"qgqc_Aleah":["female","shen",4,.qgqc_shengxi,["boss","bossallowed"]],
                        qgqc_qingqingjiejie_right: ['male', 'qun', 4, [], []],
                        qgqc_qingqingjiejie_left: ['female', 'qun', 4, [], []],
                    },
                    characterIntro: {
                        //武将简介
                        qgqc_jieliuyan: '刘焉(？－194年),字君郎(<华阳国志>又作君朗).江夏郡竟陵县(今湖北省天门市)人.东汉末年宗室、军阀,汉末群雄之一,西汉鲁恭王刘余之后.<br>刘焉初以汉朝宗室身份,拜为中郎,历任雒阳令、冀州刺史、南阳太守、宗正、太常等官.因益州刺史郄俭在益州大肆聚敛,贪婪成风,加上当时天下大乱.刘焉欲取得一安身立命之所,割据一方,于是向朝廷求为益州牧,封阳城侯,前往益州整饬吏治.郄俭为黄巾军所杀,刘焉进入益州,派张鲁盘踞汉中,张鲁截断交通,斩杀汉使,从此益州与中央道路不通.刘焉进一步对内打击地方豪强,巩固自身势力,益州因而处于半独立的状态.兴平元年(194年),刘焉因背疮迸发而逝世,其子刘璋继领益州牧.',
                        qgqc_Aleah: '她误将生命之瓶打碎,杯盏里的生命精华散落在地上,她慌忙闪躲开,可身上还是沾上了飞溅出来的生命精华.她下意识地想要控制住自己的意识,可在万物元素的力量面前,人类渺小的力量根本无法与其抗衡,只见她的衣着渐渐被光芒包裹,身体逐渐舒张开,在半空中漂浮起来,周围浮现出流光缓缓进入其身内.她双眼慢慢闭合,像是在享受这一切.过了些许时间,光芒慢慢减弱,她已身着神服,双眼缓慢睁开,散发出微弱的金色光芒.此刻,她的灵魂已然消亡,而在她脑中她现在的名字是--艾莉亚(Aleah)',
                    },
                    characterTitle: {
                        //武将称号
                    },
                    skill: {
                        //图射
                        qgqc_tushe: {
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.type(event.card) == 'equip') return false;
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                return event.targets.length && !player.countCards('h', { type: 'basic' });
                            },
                            content() {
                                player.draw(trigger.targets.length);
                            },
                            ai: {
                                presha: true,
                                pretao: true,
                                threaten: 1.8,
                            },
                        },
                        qgqc_limu: {
                            //立牧
                            mod: {
                                targetInRange(card, player, target) {
                                    if (player.countCards('j') && player.inRange(target)) {
                                        return true;
                                    }
                                },
                                cardUsableTarget(card, player, target) {
                                    if (player.countCards('j') && player.inRange(target)) return true;
                                },
                                aiValue(player, card, num) {
                                    if (card.name == 'zhangba') return 15;
                                    if (player.getEquip('zhangba') && player.countCards('h') > 1 && ['shan', 'tao'].includes(card.name)) return 0;
                                    if (card.name == 'shan' || card.name == 'tao') return num / 2;
                                },
                            },
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            enable: 'phaseUse',
                            discard: false,
                            filter(event, player) {
                                if (player.hasJudge('lebu')) return false;
                                return player.countCards('he', { suit: 'diamond' }) > 0;
                            },
                            viewAs: { name: 'lebu' },
                            //prepare:"throw",
                            position: 'he',
                            filterCard(card, player, event) {
                                return card.suit == 'diamond' && player.canAddJudge({ name: 'lebu', cards: [card] });
                            },
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (!player.getEquip('zhangba') && player.countCards('h', 'sha') < 2) {
                                    if (
                                        player.countCards('h', function (cardx) {
                                            return cardx != card && cardx.name == 'shan';
                                        }) > 0
                                    )
                                        return 0;
                                    var damaged = player.maxHp - player.hp - 1;
                                    var ts = player.countCards('h', function (cardx) {
                                        return cardx != card && cardx.name == 'tao';
                                    });
                                    if (ts > 0 && ts > damaged) return 0;
                                }
                                if (card.name == 'shan') return 15;
                                if (card.name == 'tao') return 10;
                                return 9 - get.value(card);
                            },
                            onuse(links, player) {
                                var next = game.createEvent('limu_recover', false, _status.event.parent);
                                next.player = player;
                                next.setContent(function () {
                                    player.recover();
                                });
                            },
                            ai: {
                                result: {
                                    target: 1,
                                },
                                order: 12,
                            },
                        },
                        qgqc_wanwu: {
                            //万武
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            trigger: { global: ['loseEnd', 'discardAfter'] },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.name == 'lose' && event.parent.name != 'equip') return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQQ
                                        if (get.type(i) == 'equip' && get.position(i) == 'd') {
                                            return true;
                                        }
                                    }
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.delay == false) game.delay();
                                ('step 1');
                                var cards = [];
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (get.type(trigger.cards[i]) == 'equip' && get.position(trigger.cards[i]) == 'd') {
                                        cards.push(trigger.cards[i]);
                                    }
                                }
                                if (cards.length) {
                                    player.gain(cards, 'gain2', 'log');
                                }
                            },
                        },
                        qgqc_jueqing: {
                            //绝情
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            trigger: { source: 'damageBegin2' },
                            filter(event, player) {
                                return player != event.player && !player.hasSkill('qgqc_jueqing_1st');
                            },
                            prompt2(event, player) {
                                var num = get.cnNumber(2 * event.num);
                                return '令即将对其造成的伤害翻倍至' + num + ',并令自己失去' + get.cnNumber(event.num) + '点体力';
                            },
                            check(event, player) {
                                return (
                                    player.hp > event.num &&
                                    event.player.hp > event.num &&
                                    !event.player.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: event.card,
                                    }) &&
                                    get.attitude(player, event.player) < 0
                                );
                            },
                            logTarget: 'player',
                            content() {
                                player.loseHp(trigger.num);
                                trigger.num *= 2;
                                var next = game.createEvent('qgqc_jueqing_add', false);
                                event.next.remove(next);
                                trigger.after.push(next);
                                next.player = player;
                                next.setContent(function () {
                                    player.addSkill('qgqc_jueqing_1st');
                                });
                            },
                            derivation: 'qgqc_jueqing_rewrite',
                        },
                        qgqc_jueqing_1st: {
                            trigger: { source: 'damageBefore' },
                            forced: true,
                            charlotte: true,
                            audio: 'qgqc_jueqing',
                            filter(event, player) {
                                return player.hasSkill('qgqc_jueqing');
                            },
                            check() {
                                return false;
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                            },
                            ai: {
                                jueqing: true,
                            },
                        },
                        qgqc_shangshi: {
                            //伤逝
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            trigger: {
                                player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            prompt(event, player) {
                                return '是否发动【伤逝】将手牌摸至' + get.cnNumber(player.getDamagedHp()) + '张？';
                            },
                            prompt2: false,
                            filter(event, player) {
                                if (event.getl && !event.getl(player)) return false;
                                return player.countCards('h') < player.getDamagedHp();
                            },
                            content() {
                                player.draw(player.getDamagedHp() - player.countCards('h'));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                            group: 'qgqc_shangshi_2nd',
                        },
                        qgqc_shangshi_2nd: {
                            trigger: { player: 'damageBegin3' },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                player
                                    .chooseToDiscard('是否发动【伤逝】弃置一张牌？', 'he')
                                    .set('ai', function (card) {
                                        var player = _status.event.player;
                                        if (player.countCards('h') > player.getDamagedHp() + _status.event.getTrigger().num) return 1;
                                        if (player.isPhaseUsing()) return 0.1 - player.getUseValue(card, null, true) / Math.max(0.1, get.value(card));
                                        return (get.position(card) == 'h' ? 5 : 0.1) - get.value(card);
                                    });
                            },
                        },
                        qgqc_langxi: {
                            //狼袭
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.maxHp <= player.maxHp;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('qgqc_langxi'), '对一名其他角色造成1-3点随机伤害', function (card, player, target) {
                                        return target.maxHp <= player.maxHp && target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var num = [2, 3, 1].randomGet();
                                    if (get.isLuckyStar(player)) num = 2;
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].damage(num);
                                }
                            },
                            ai: {
                                expose: 0.25,
                                threaten: 1.7,
                            },
                        },
                        qgqc_yisuan: {
                            //亦算
                            usable: 1,
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            check(event, player) {
                                return get.value(event.cards) + player.maxHp * 2 - 18 > 0;
                            },
                            filter(event, player) {
                                return player.isPhaseUsing() && get.type(event.card) == 'trick' && event.cards.filterInD().length;
                            },
                            content() {
                                player.loseMaxHp();
                                player.gain(trigger.cards.filterInD(), 'gain2', 'log');
                            },
                        },
                        qgqc_wusheng: {
                            //武圣
                            mod: {
                                targetInRange(card) {
                                    if (card.suit == 'diamond' && card.name == 'sha') return true;
                                },
                            },
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'red';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) return false;
                                } else {
                                    if (!player.countCards('hes', { color: 'red' })) return false;
                                }
                            },
                            prompt: '将一张红色牌当杀使用或打出',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('hes')) return false;
                                    } else {
                                        if (!player.countCards('hes', { color: 'red' })) return false;
                                    }
                                },
                            },
                        },
                        qgqc_yijue: {
                            //义绝
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            enable: 'phaseUse',
                            usable: 3,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h');
                            },
                            filterCard: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                target.chooseCard(true).ai = function (card) {
                                    var player = _status.event.player;
                                    if ((player.hasShan() || player.hp < 3) && get.color(card) == 'black') return 0.5;
                                    return Math.max(1, 20 - get.value(card));
                                };
                                ('step 1');
                                target.showCards(result.cards);
                                event.card2 = result.cards[0];
                                if (get.color(event.card2) == 'black') {
                                    if (!target.hasSkill('fengyin')) {
                                        target.addTempSkill('fengyin');
                                    }
                                    target.addTempSkill('qgqc_yijue2');
                                    event.finish();
                                } else {
                                    player.gain(event.card2, target, 'give', 'bySelf');
                                    if (target.hp < target.maxHp) {
                                        player.chooseBool('是否让目标回复一点体力？').ai = function (event, player) {
                                            return get.recoverEffect(target, player, player) > 0;
                                        };
                                    }
                                }
                                ('step 2');
                                if (result.bool) {
                                    target.recover();
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var hs = player.getCards('h');
                                        if (hs.length < 3) return 0;
                                        if (target.countCards('h') > target.hp + 1 && get.recoverEffect(target) > 0) {
                                            return 1;
                                        }
                                        if (player.canUse('sha', target) && (player.countCards('h', 'sha') || player.countCards('he', { color: 'red' }))) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                order: 9,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg.target.hasSkillTag('qgqc_yijue2')) return false;
                                },
                            },
                        },
                        qgqc_yijue2: {
                            trigger: {
                                player: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.source && event.source.hasSkill('qgqc_yijue') && event.card && event.card.name == 'sha' && event.card.suit == 'heart' && event.notLink();
                            },
                            silent: true,
                            popup: false,
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            mark: true,
                            mod: {
                                cardEnabled2(card) {
                                    if (get.position(card) == 'h') return false;
                                },
                            },
                            intro: {
                                content: '不能使用或打出手牌',
                            },
                        },
                        qgqc_huashen: {
                            //化身
                            group: ['qgqc_huashen_init'],
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            forced: true,
                            content() {
                                'step 0';
                                player.say('我命由我不由天!!!!!');
                                _status.noclearcountdown = true;
                                event.videoId = lib.status.videoId++;
                                var cards = player.storage.qgqc_huashen.character.slice(0);
                                var skills = [];
                                var sto = player.storage.qgqc_huashen;
                                for (var i in player.storage.qgqc_huashen.map) {
                                    skills.addArray(player.storage.qgqc_huashen.map[i]);
                                }
                                var cond = 'out';
                                if (event.triggername == 'phaseBegin') {
                                    cond = 'in';
                                }
                                skills.randomSort();
                                skills.sort(function (a, b) {
                                    return get.skillRank(b, cond) - get.skillRank(a, cond);
                                });
                                event.aiChoice = skills[0];
                                var choice = '更换化身';
                                if (event.aiChoice == player.storage.qgqc_huashen.current2 || get.skillRank(event.aiChoice, cond) < 1) choice = '重铸化身';
                                if (player.isOnline2()) {
                                    player.send(
                                        function (cards, id) {
                                            var dialog = ui.create.dialog('是否发动【化身】？', [cards, 'character']);
                                            dialog.videoId = id;
                                        },
                                        cards,
                                        event.videoId
                                    );
                                }
                                event.dialog = ui.create.dialog(get.prompt('qgqc_huashen'), [cards, 'character']);
                                event.dialog.videoId = event.videoId;
                                if (!event.isMine()) {
                                    event.dialog.style.display = 'none';
                                }
                                if (event.triggername == 'qgqc_huashen') event._result = { control: '更换化身' };
                                else
                                    player
                                        .chooseControl('重铸化身', '更换化身', 'cancel2')
                                        .set('ai', function () {
                                            return _status.event.choice;
                                        })
                                        .set('choice', choice);
                                ('step 1');
                                event.control = result.control;
                                if (event.control == 'cancel2') {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    delete _status.noclearcountdown;
                                    if (!_status.noclearcountdown) {
                                        game.stopCountChoose();
                                    }
                                    event.dialog.close();
                                    event.finish();
                                    return;
                                }
                                var next = player.chooseButton(true).set('dialog', event.videoId);
                                if (event.control == '重铸化身') {
                                    next.set('selectButton', [1, 999]);
                                    next.set('filterButton', function (button) {
                                        return button.link != _status.event.current;
                                    });
                                    next.set('current', player.storage.qgqc_huashen.current);
                                } else {
                                    next.set('ai', function (button) {
                                        return player.storage.qgqc_huashen.map[button.link].includes(_status.event.choice) ? 2.5 : 1 + Math.random();
                                    });
                                    next.set('choice', event.aiChoice);
                                }
                                var prompt = event.control == '重铸化身' ? '选择任意数量要重铸的化身牌' : '选择要更换的化身牌';
                                var func = function (id, prompt) {
                                    var dialog = get.idDialog(id);
                                    if (dialog) {
                                        dialog.content.childNodes[0].innerHTML = prompt;
                                    }
                                };
                                if (player.isOnline2()) {
                                    player.send(func, event.videoId, prompt);
                                } else if (event.isMine()) {
                                    func(event.videoId, prompt);
                                }
                                ('step 2');
                                if (result.bool && event.control != '重铸化身') {
                                    event.card = result.links[0];
                                    var func = function (card, id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                if (dialog.buttons[i].link == card) {
                                                    dialog.buttons[i].classList.add('selectedx');
                                                } else {
                                                    dialog.buttons[i].classList.add('unselectable');
                                                }
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.card, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.card, event.videoId);
                                    }
                                    event._result = {
                                        control: player.storage.qgqc_huashen.map[event.card].slice(0).filter((val) => {
                                            var infoSkill = lib.skill[val];
                                            if (!infoSkill) return;
                                            if (infoSkill.zhuSkill) return;
                                            return true;
                                        }),
                                    };
                                } else {
                                    lib.skill.qgqc_huashen.removeHuashen(player, result.links.slice(0));
                                    lib.skill.qgqc_huashen.addHuashens(player, result.links.length);
                                }
                                ('step 3');
                                if (result.control == '返回') {
                                    var func = function (id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                dialog.buttons[i].classList.remove('selectedx');
                                                dialog.buttons[i].classList.remove('unselectable');
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.videoId);
                                    }
                                    event._result = { control: '重铸化身' };
                                    event.goto(1);
                                    return;
                                }
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                delete _status.noclearcountdown;
                                if (!_status.noclearcountdown) {
                                    game.stopCountChoose();
                                }
                                if (event.control == '重铸化身') return;
                                if (player.storage.qgqc_huashen.current != event.card) {
                                    player.storage.qgqc_huashen.current = event.card;
                                    game.broadcastAll(
                                        function (character, player) {
                                            player.sex = lib.character[character][0];
                                            player.group = lib.character[character][1];
                                            player.node.name.dataset.nature = get.groupnature(player.group);
                                        },
                                        event.card,
                                        player
                                    );
                                }
                                var link = result.control;
                                player.storage.qgqc_huashen.current2 = link;
                                if (!player.additionalSkills.qgqc_huashen || !player.additionalSkills.qgqc_huashen.includes(link)) {
                                    player.addAdditionalSkill('qgqc_huashen', link);
                                    player.flashAvatar('qgqc_huashen', event.card);
                                    game.log(player, '获得技能', '#g【' + get.translation(link) + '】');
                                    player.popup(link);
                                }
                            },
                            init(player, skill) {
                                if (!player.storage[skill])
                                    player.storage[skill] = {
                                        character: [],
                                        map: {},
                                    };
                            },
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd', 'qgqc_huashen'],
                            },
                            filter(event, player, name) {
                                return player.storage.qgqc_huashen && player.storage.qgqc_huashen.character.length;
                            },
                            banned: ['lisu', 'sp_xiahoudun', 'xushao'],
                            addHuashen(player) {
                                if (!player.storage.qgqc_huashen) return;
                                if (!_status.characterlist) {
                                    if (_status.connectMode) var list = get.charactersOL();
                                    else {
                                        var list = [];
                                        for (var i in lib.character) {
                                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                            list.push(i);
                                        }
                                    }
                                    game.countPlayer2(function (current) {
                                        list.remove(current.name);
                                        list.remove(current.name1);
                                        list.remove(current.name2);
                                        if (current.storage.qgqc_huashen && current.storage.qgqc_huashen.character) list.removeArray(current.storage.qgqc_huashen.character);
                                    });
                                    _status.characterlist = list;
                                }
                                _status.characterlist.randomSort();
                                var bool = false;
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (name.includes('zuoci') || name.indexOf('key') == 0 || lib.skill.qgqc_huashen.banned.includes(name) || player.storage.qgqc_huashen.character.includes(name)) continue;
                                    var skills = lib.character[name][3];
                                    for (var j = 0; j < skills.length; j++) {
                                        var info = lib.skill[skills[j]];
                                        if (info.charlotte || info.zhuSkill) skills.splice(j--, 1);
                                    }
                                    if (skills.length) {
                                        player.storage.qgqc_huashen.character.push(name);
                                        player.storage.qgqc_huashen.map[name] = skills;
                                        _status.characterlist.remove(name);
                                        return name;
                                    }
                                }
                            },
                            addHuashens(player, num) {
                                var list = [];
                                for (var i = 0; i < num; i++) {
                                    var name = lib.skill.qgqc_huashen.addHuashen(player);
                                    if (name) list.push(name);
                                }
                                if (list.length) {
                                    game.log(player, '获得了', get.cnNumber(list.length) + '张', '#g化身');
                                    lib.skill.qgqc_huashen.drawCharacter(player, list);
                                }
                            },
                            removeHuashen(player, links) {
                                player.storage.qgqc_huashen.character.removeArray(links);
                                _status.characterlist.addArray(links);
                                game.log(player, '移去了', get.cnNumber(links.length) + '张', '#g化身');
                            },
                            drawCharacter(player, list) {
                                game.broadcastAll(
                                    function (player, list) {
                                        if (player.isUnderControl(true)) {
                                            var cards = [];
                                            for (var i = 0; i < list.length; i++) {
                                                var cardname = 'rehuashen_card_' + list[i];
                                                lib.card[cardname] = {
                                                    fullimage: true,
                                                    image: 'character:' + list[i],
                                                };
                                                lib.translate[cardname] = get.rawName2(list[i]);
                                                cards.push(game.createCard(cardname, '', ''));
                                            }
                                            player.$draw(cards, 'nobroadcast');
                                        }
                                    },
                                    player,
                                    list
                                );
                            },
                            intro: {
                                onunmark(storage, player) {
                                    _status.characterlist.addArray(storage.character);
                                    storage.character = [];
                                },
                                mark(dialog, storage, player) {
                                    if (storage && storage.current) dialog.addSmall([[storage.current], 'character']);
                                    if (storage && storage.current2) if (!Array.isArray(storage.current2)) storage.current2 = [storage.current2];
                                    for (var i of storage.current2) {
                                        dialog.add('<div><div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div></div>');
                                    }
                                    if (storage && storage.character.length) {
                                        if (player.isUnderControl(true)) {
                                            dialog.addSmall([storage.character, 'character']);
                                        } else {
                                            dialog.addText('共有' + get.cnNumber(storage.character.length) + '张<化身>');
                                        }
                                    } else {
                                        return '没有化身';
                                    }
                                },
                                content(storage, player) {
                                    return '共有' + get.cnNumber(storage.character.length) + '张<化身>';
                                },
                                markcount(storage, player) {
                                    if (storage && storage.character) return storage.character.length;
                                    return 0;
                                },
                            },
                        },
                        qgqc_huashen_init: {
                            audio: 'qgqc_huashen',
                            trigger: {
                                global: 'gameDrawEnd',
                                player: 'enterGame',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                lib.skill.qgqc_huashen.addHuashens(player, 4);
                                player.markSkill('qgqc_huashen');
                                var next = game.createEvent('qgqc_huashen');
                                next.player = player;
                                next._trigger = trigger;
                                next.triggername = 'qgqc_huashen';
                                next.setContent(lib.skill.qgqc_huashen.content);
                            },
                        },
                        qgqc_xinsheng: {
                            //新生
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            trigger: {
                                player: ['damageAfter', 'loseHpAfter'],
                            },
                            forced: true,
                            content() {
                                lib.skill.qgqc_huashen.addHuashens(player, trigger.num);
                            },
                        },
                        qgqc_chenglve: {
                            //成略
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '成',
                            intro: {
                                content(storage, player, skill) {
                                    var str = player.storage.qgqc_chenglve ? '出牌阶段限一次,你可以摸两张牌,弃置一张手牌.若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制' : '出牌阶段限一次,你可以摸一张牌,弃置两张手牌.若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制';
                                    if (player.storage.qgqc_chenglve1) {
                                        str += '<br><li>当前花色:';
                                        str += get.translation(player.storage.qgqc_chenglve1);
                                    }
                                    return str;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            content() {
                                'step 0';
                                if (player.storage.qgqc_chenglve == true) {
                                    player.storage.qgqc_chenglve = false;
                                    player.draw(2);
                                    player.chooseToDiscard('h', true);
                                } else {
                                    player.storage.qgqc_chenglve = true;
                                    player.draw();
                                    player.chooseToDiscard('h', 2, true);
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.storage.qgqc_chenglve1 = [];
                                    for (var i = 0; i < result.cards.length; i++) {
                                        player.storage.qgqc_chenglve1.add(result.cards[i].suit);
                                    }
                                    player.markSkill('qgqc_chenglve');
                                    player.addTempSkill('qgqc_chenglve1');
                                }
                            },
                            ai: {
                                order: 2.7,
                                result: {
                                    player(player) {
                                        if ((player.storage.qgqc_chenglve == undefined || player.storage.qgqc_chenglve == false) && player.countCards('h') < 3) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        qgqc_chenglve1: {
                            mod: {
                                cardUsable(card, player) {
                                    var cards = player.storage.qgqc_chenglve1;
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i] == card.suit) return Infinity;
                                    }
                                },
                                targetInRange(card, player) {
                                    var cards = player.storage.qgqc_chenglve1;
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i] == card.suit) return true;
                                    }
                                },
                            },
                        },
                        qgqc_shicai: {
                            //侍才
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            usable: 5,
                            check(event, player) {
                                return player.countCards('h') < 6;
                            },
                            ai: {
                                reverseOrder: true,
                                skillTagFilter(player) {
                                    if (
                                        player.getHistory('useCard', function (evt) {
                                            return get.type(evt.card) == 'equip';
                                        }).length
                                    )
                                        return false;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (
                                            player == target &&
                                            get.type(card) == 'equip' &&
                                            !player.getHistory('useCard', function (evt) {
                                                return get.type(evt.card) == 'equip';
                                            }).length == 0
                                        )
                                            return [1, 3];
                                    },
                                },
                                threaten: 2.4,
                            },
                            subSkill: {
                                2: {
                                    audio: 2,
                                },
                            },
                            trigger: {
                                player: 'useCardAfter',
                                target: 'useCardToTargeted',
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.cards.filterInD();
                                if (event.cards.length > 1) {
                                    player
                                        .chooseButton(true, event.cards.length, ['按顺序将卡牌置于牌堆顶(先选择的在上)', event.cards])
                                        .set('ai', function (button) {
                                            var value = get.value(button.link);
                                            if (_status.event.reverse) return value;
                                            return -value;
                                        })
                                        .set('reverse', _status.currentPhase && _status.currentPhase.next ? get.attitude(player, _status.currentPhase.next) > 0 : false);
                                }
                                ('step 1');
                                if (result.links?.length) cards = result.links.slice(0);
                                while (cards.length) {
                                    var card = cards.pop();
                                    if (get.position(card, true) == 'o') {
                                        card.fix();
                                        ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                        game.log(player, '将', card, '置于牌堆顶');
                                    }
                                }
                                game.updateRoundNumber();
                                player.draw();
                            },
                        },
                        qgqc_cunmu: {
                            //寸目
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.bottom = true;
                            },
                        },
                        qgqc_kongsheng: {
                            //箜笙
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCard(get.prompt2('qgqc_kongsheng'), 'he', [1, player.countCards('he')]).set('ai', function (card) {
                                    if (get.position(card) == 'e') return 1 - get.value(card);
                                    if (card.name == 'shan' || card.name == 'du' || !player.hasValueTarget(card)) return 1;
                                    return 4 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (player.storage.qgqc_kongsheng2 == undefined) player.storage.qgqc_kongsheng2 = [];
                                    player.storage.qgqc_kongsheng2.addArray(result.cards);
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    game.log(player, '将', result.cards, '置于其武将牌上');
                                    player.addSkill('qgqc_kongsheng2');
                                }
                            },
                        },
                        qgqc_kongsheng_ai: { ai: { reverseOrder: true } },
                        qgqc_kongsheng2: {
                            audio: 'qgqc_kongsheng',
                            marktext: '箜',
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        player.storage.qgqc_kongsheng2.length = 0;
                                    }
                                },
                            },
                            mark: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.storage.qgqc_kongsheng2 != undefined && player.storage.qgqc_kongsheng2.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('qgqc_kongsheng_ai', 'qgqc_kongsheng2After');
                                event.list = [];
                                for (var i = 0; i < player.storage.qgqc_kongsheng2.length; i++) {
                                    var card = player.storage.qgqc_kongsheng2[i];
                                    if (get.type(card) == 'equip' && player.hasUseTarget(card)) {
                                        event.list.push(card);
                                        player.storage.qgqc_kongsheng2.splice(i--, 1);
                                    }
                                }
                                if (!event.list.length) event.goto(3);
                                ('step 1');
                                if (event.list.length == 1) {
                                    event._result = { bool: true, links: event.list.slice(0) };
                                } else
                                    player.chooseButton(true, ['选择要使用的装备牌', event.list]).set('ai', function (button) {
                                        return get.order(button.link);
                                    });
                                ('step 2');
                                if (result.links?.length) {
                                    player.chooseUseTarget(result.links[0], true);
                                    event.list.remove(result.links[0]);
                                    if (event.list.length) event.goto(1);
                                }
                                ('step 3');
                                if (player.storage.qgqc_kongsheng2.length) player.gain(player.storage.qgqc_kongsheng2, 'gain2', 'fromStorage', 'log');
                                player.storage.qgqc_kongsheng2.length = 0;
                                player.removeSkill('qgqc_kongsheng2');
                            },
                        },
                        qgqc_qinse: {
                            //琴瑟
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            group: 'qgqc_qinse_1',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                var num = game.countGroup();
                                player.draw(num);
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return (num += game.countGroup());
                                        },
                                    },
                                },
                            },
                        },
                        qgqc_liangyin: {
                            //良姻
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            trigger: {
                                global: 'equipEnd',
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        qgqc_jili: {
                            //蒺藜
                            mod: {
                                aiOrder(player, card, num) {
                                    if (player.isPhaseUsing() && get.subtype(card) == 'equip1' && !get.cardtag(card, 'gifts')) {
                                        var range0 = player.getAttackRange();
                                        var range = 0;
                                        var info = get.info(card);
                                        if (info && info.distance && info.distance.attackFrom) {
                                            range -= info.distance.attackFrom;
                                        }
                                        if (player.getEquip(1)) {
                                            var num = 0;
                                            var info = get.info(player.getEquip(1));
                                            if (info && info.distance && info.distance.attackFrom) {
                                                num -= info.distance.attackFrom;
                                            }
                                            range0 -= num;
                                        }
                                        range0 += range;
                                        if (
                                            range0 == player.getHistory('useCard').length + player.getHistory('respond').length + 2 &&
                                            player.countCards('h', function (cardx) {
                                                return get.subtype(cardx) != 'equip1' && player.getUseValue(cardx) > 0;
                                            })
                                        )
                                            return num + 10;
                                    }
                                },
                            },
                            trigger: { player: ['useCard', 'respond'] },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return player.getHistory('useCard').length + player.getHistory('respond').length == player.getAttackRange();
                            },
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            content() {
                                player.draw(player.getHistory('useCard').length + player.getHistory('respond').length);
                            },
                            ai: {
                                threaten: 1.8,
                                effect: {
                                    target(card, player, target, current) {
                                        if (player != target || !player.isPhaseUsing()) return;
                                        if (get.subtype(card) == 'equip1' && !get.cardtag(card, 'gifts')) {
                                            var range0 = player.getAttackRange();
                                            var range = 0;
                                            var info = get.info(card);
                                            if (info && info.distance && info.distance.attackFrom) {
                                                range -= info.distance.attackFrom;
                                            }
                                            if (player.getEquip(1)) {
                                                var num = 0;
                                                var info = get.info(player.getEquip(1));
                                                if (info && info.distance && info.distance.attackFrom) {
                                                    num -= info.distance.attackFrom;
                                                }
                                                range0 -= num;
                                            }
                                            range0 += range;
                                            var delta = range0 - (player.getHistory('useCard').length + player.getHistory('respond').length);
                                            if (delta < 0) return;
                                            var num = player.countCards('h', function (card) {
                                                return (get.cardtag(card, 'gifts') || get.subtype(card) != 'equip1') && player.getUseValue(card) > 0;
                                            });
                                            if (delta == 2 && num > 0) return [1, 3];
                                            if (num >= delta) return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                        },
                        qgqc_guduo: {
                            //骨朵
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        qgqc_equan: {
                            //恶泉
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            trigger: { global: 'damageEnd' },
                            forced: true,
                            filter(event, player) {
                                return player == _status.currentPhase && event.player.isIn();
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.addMark('qgqc_equan', trigger.num, false);
                            },
                            group: ['qgqc_equan_block', 'qgqc_equan_lose'],
                            marktext: '毒',
                            intro: {
                                name: '恶泉(毒)',
                                name2: '毒',
                            },
                            subSkill: {
                                lose: {
                                    audio: 'qgqc_equan',
                                    trigger: { player: 'phaseDiscardEnd' },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasMark('qgqc_equan');
                                        });
                                    },
                                    logTarget() {
                                        return game.filterPlayer(function (current) {
                                            return current.hasMark('qgqc_equan');
                                        });
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            var num = current.countMark('qgqc_equan');
                                            if (num > 0) {
                                                current.removeMark('qgqc_equan', num);
                                                current.loseHp(num);
                                            }
                                        });
                                    },
                                },
                                block: {
                                    trigger: { global: 'dyingBegin' },
                                    forced: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        var evt = event.getParent(2);
                                        return evt.name == 'qgqc_equan_lose' && evt.player == player;
                                    },
                                    content() {
                                        trigger.player.addTempSkill('fengyin');
                                    },
                                },
                            },
                        },
                        qgqc_manji: {
                            audio: 'ext:倾国倾城/配音/界限突破:2',
                            trigger: { global: 'loseHpAfter' },
                            forced: true,
                            filter(event, player) {
                                return player.hp >= event.player.hp || player.isDamaged();
                            },
                            logTarget: 'player',
                            content() {
                                if (player.hp <= trigger.player.hp) player.recover();
                                if (player.hp >= trigger.player.hp) player.draw();
                            },
                        },
                        qgqc_shengxi: {
                            group: ['qgqc_shengxi_1', 'qgqc_shengxi_2', 'qgqc_shengxi_3'],
                            intro: {
                                content: '已使用#张黑色牌',
                            },
                            mark: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (_status.currentPhase == from) {
                                        return distance - from.storage.qgqc_shengxi;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.storage.qgqc_shengxi;
                                },
                            },
                            trigger: {
                                player: 'useCardAfter',
                            },
                            init(player, skill) {
                                player.storage.qgqc_shengxi = 0;
                            },
                            forced: true,
                            filter(event, player) {
                                return get.color(event.card) == 'black';
                            },
                            content() {
                                player.storage.qgqc_shengxi++;
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'gameDrawAfter',
                                        player: ['enterGame', 'changeHp'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') != player.hp + 1;
                                    },
                                    content() {
                                        var num = player.hp + 1 - player.countCards('h');
                                        if (num > 0) player.draw(num);
                                        else player.chooseToDiscard('h', true, -num);
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'gain' && event.player == player) return player.countCards('h') != player.hp + 1;
                                        var evt = event.getl(player);
                                        if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= player.hp + 1) return false;
                                        var evt = event;
                                        for (var i = 0; i < player.hp + 1; i++) {
                                            evt = evt.getParent('qgqc_shengxi');
                                            if (evt.name != 'qgqc_shengxi') return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var num = player.hp + 1 - player.countCards('h');
                                        if (num > 0) player.draw(num);
                                        else player.chooseToDiscard('h', true, -num);
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.storage.qgqc_shengxi = 0;
                                    },
                                },
                            },
                        },
                    },
                    translate: {
                        //技能简介
                        qgqc_tushe: '图射',
                        qgqc_tushe_info: '当你使用非装备牌指定目标后,若你没有基本牌,则你可以摸X张牌.(X为此牌指定的目标数)',
                        qgqc_limu: '立牧',
                        qgqc_limu_info: '出牌阶段限一次,你可以将一张♦️️牌当做【乐不思蜀】对自己使用,回复1点体力.只要你的判定区内有牌,你对攻击范围内的其他角色使用牌便没有次数和距离限制',
                        qgqc_wanwu: '万武',
                        qgqc_wanwu_info: '每当一件其他角色的装备因被替换或弃置进入弃牌堆,你可以获得之',
                        qgqc_jueqing: '绝情',
                        qgqc_jueqing_info: '当你对其他角色造成伤害时,你可以令此伤害值+X.若如此做,你失去X点体力,并于此伤害结算完成后修改〖绝情〗(X为伤害值).',
                        qgqc_jueqing_1st: '绝情',
                        qgqc_jueqing_rewrite: '绝情·改',
                        qgqc_jueqing_rewrite_info: '锁定技,你即将造成的伤害均视为失去体力.',
                        qgqc_shangshi: '伤逝',
                        qgqc_shangshi_2nd: '伤逝',
                        qgqc_shangshi_info: '当你受到伤害时,你可以弃置一张牌.当你的手牌数小于X时,你可以将手牌摸至X张.(X为你已损失的体力值)',
                        qgqc_langxi: '狼袭',
                        qgqc_langxi_info: '准备阶段和出牌阶段,你可以对一名体力值上限小于或等于你的其他角色造成1～3点随机伤害.',
                        qgqc_yisuan: '亦算',
                        qgqc_yisuan_info: '出牌阶段限一次,当你于出牌阶段使用的锦囊牌进入弃牌堆时,你可以减1点体力上限,从弃牌堆中获得之.',
                        qgqc_wusheng: '武圣',
                        qgqc_wusheng_info: '你可以将一张红色牌当做【杀】使用或打出.你使用的♦️️杀没有距离限制.',
                        qgqc_yijue: '义绝',
                        qgqc_yijue_info: '出牌阶段限三次,你可以弃置一张牌并令一名有手牌的其他角色展示一张手牌.若此牌为黑色,则该角色不能使用或打出牌,非锁定技失效且受到来自你的♥️️【杀】的伤害+1直到回合结束.若此牌为红色,则你可以获得此牌,并可以令其回复一点体力.',
                        qgqc_yijue2: '义绝',
                        qgqc_yijue2_info: '',
                        qgqc_huashen: '化身',
                        qgqc_huashen_info: '游戏开始时你随机获得4张未登场的化身牌选择其中一张展示之.你视为拥有展示的化身牌上除主公技之外的所有技能同时将你的武将性别和势力变为与展示的化身牌相同直到展示的化身牌被更换.你每个回合开始或结束阶段你可以选择一项:①重铸任意数量的化身牌②更换展示的化身牌.',
                        qgqc_huashen_init: '化身',
                        qgqc_huashen_init_info: '',
                        qgqc_xinsheng: '新身',
                        qgqc_xinsheng_info: '锁定技,当你受到一点伤害或失去一点体力后,你随机获得一张新的化身牌.',
                        qgqc_chenglve1: '成略',
                        qgqc_chenglve: '成略',
                        qgqc_chenglve_info: '转换技,出牌阶段限一次,阴:你可以摸一张牌,弃置两张手牌.阳:你可以摸两张牌,弃置一张手牌.若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制.',
                        qgqc_shicai: '恃才',
                        qgqc_shicai_info: '当你使用牌后或者被指定为目标使用牌时,则你可以将此牌置于牌堆顶,摸一张牌.每回合至多以此法摸五张牌.',
                        qgqc_cunmu: '寸目',
                        qgqc_cunmu_info: '锁定技,当你摸牌时,改为从牌堆底摸牌.',
                        qgqc_kongsheng: '箜声',
                        qgqc_kongsheng_info: '准备阶段,你可以将任意张牌置于你的武将牌上;结束阶段,你使用武将牌上的装备牌,并获得武将牌上的其他牌',
                        qgqc_kongsheng2: '箜声',
                        qgqc_kongsheng2_info: '',
                        qgqc_qinse: '琴瑟',
                        qgqc_qinse_info: '锁定技,出牌阶段开始时,你摸X张牌,你的手牌上限+X(X为场上势力数).',
                        qgqc_liangyin: '良姻',
                        qgqc_liangyin_info: '当场上有角色使用装备牌后,你可以摸一张牌.',
                        qgqc_jili: '蒺藜',
                        qgqc_jili_info: '每回合你使用或打出一张牌,你摸x张牌(x为攻击距离).',
                        qgqc_guduo: '骨朵',
                        qgqc_guduo_info: '锁定技,你的摸牌阶段开始前你摸2张牌.',
                        qgqc_equan: '恶泉',
                        qgqc_equan_info: '锁定技.①当有角色于你的回合内受到伤害后,其获得X枚<毒>(X为伤害值).②你的弃牌阶段结束后,你令所有拥有<毒>标记的角色移去所有<毒>标记并失去等量的体力.③当有角色因〖恶泉②〗进入濒死状态时,你令其所有非锁定技失效直到回合结束.<br><b><font color=\"#FFC080\">【太虚幻境】:<li>在游戏开始时>><br>在[史诗•精品]混合技能库中选择一项技能获得之.<li>首次造成伤害时>><br>在[精品]技能库中各选择一项技能获得之.<li>首次受到伤害时>><br>在[精品]技能库中各选择一项技能获得之<li>首次有其他角色死亡时>><br>在[史诗]技能库中选择一项技能获得之.<li>太虚幻境只对玩家生效',
                        qgqc_manji: '蛮汲',
                        qgqc_manji_info: '锁定技.其他角色失去体力后,若你的体力值:不大于该角色,你回复1点体力;不小于该角色,你摸一张牌.',
                        qgqc_shengxi: '生息',
                        qgqc_shengxi_info: '锁定技,你的手牌数始终等于你的体力值+1;你每使用一张黑色牌,本回合进攻距离和可使用【杀】的次数+1.',
                        //武将名
                        qgqc_jieliuyan: '界刘焉',
                        qgqc_xinzhangchunhua: '新张春华',
                        qgqc_jielijue: '界李傕',
                        qgqc_shengguanyu: '圣关羽',
                        qgqc_shenzuoci: '神左慈',
                        qgqc_jiexuyou: '界许攸',
                        qgqc_jiezhoufei: '界周妃',
                        qgqc_jieshamoke: '界沙摩柯',
                        qgqc_duosidawang: '神朵思大王',
                        qgqc_Aleah: '神艾莉亚',
                        qgqc_tangsongyanmengqing_zuo: '青青姐姐左',
                        qgqc_tangsongyanmengqing_you: '青青姐姐右',
                        //扩展名
                        //"xjxtp":"<b><font color=\"#FFC080\">三国",
                        xjxtp_shenjiang: '神将',
                        xjxtp_xinjiang: '新将',
                        xjxtp_jiexiantupo: '界限突破',
                    },
                };
                for (var i in xjxtp.character) {
                    xjxtp.character[i][4].push('jy_die_audio');
                    xjxtp.character[i][4].push('ext:倾国倾城/皮肤/界限突破普通/' + i + '.jpg');
                }
                if (lib.config.extension_倾国倾城_marktext) {
                    for (var i in xjxtp.skill) {
                        var info = xjxtp.skill[i];
                        if (info.marktext2) info.marktext = info.marktext2;
                        if (info.subSkill) {
                            for (var j in info.subSkill) {
                                if (info.subSkill[j].marktext2) info.subSkill[j].marktext = info.subSkill[j].marktext2;
                            }
                        }
                    }
                }
                return xjxtp;
            });
            game.import('character', function () {
                lib.config.all.characters.add('ys_yuanshen');
                lib.config.characters.add('ys_yuanshen');
                lib.translate.ys_yuanshen_character_config = '<img style=width:100px  src=extension/倾国倾城/image/yuanshen.png>';
                var ys_yuanshen = {
                    name: 'ys_yuanshen',
                    connect: true,
                    //武将分包开关---------
                    characterSort: {
                        ys_yuanshen: {
                            ys_tiankongdao: ['ys_派蒙', 'ys_荧'],
                            ys_mengde: ['ys_温迪', 'ys_迪卢克', 'ys_芭芭拉', 'ys_琴', 'ys_砂糖', 'ys_丽莎', 'ys_安柏', 'ys_凯亚', 'ys_可莉', 'ys_班尼特', 'ys_诺艾尔', 'ys_菲谢尔', 'ys_雷泽', 'ys_莫娜', 'ys_阿贝多', 'ys_优菈', 'ys_迪奥娜', 'ys_罗莎莉亚'],
                            ys_liyue: ['ys_刻晴', 'ys_钟离', 'ys_魈', 'ys_胡桃', 'ys_七七', 'ys_甘雨', 'ys_凝光', 'ys_重云', 'ys_行秋', 'ys_香菱', 'ys_北斗', 'ys_辛焱', 'ys_烟菲', 'ys_公子'],
                            ys_daoqi: ['ys_雷电将军', 'ys_枫原万叶', 'ys_珊瑚宫心海', 'ys_神里绫华', 'ys_宵宫', 'ys_九条裟罗', 'ys_早柚', 'ys_托马'],
                        },
                    },
                    character: {
                        //武将>>>>>>>>>
                        //天空岛
                        //"ys_派蒙":["female","shen","4",["游戏开始技能1","伤害技能1","伤害技能2","击杀技能1"],["des:时间魔神--派蒙<br><li>派蒙在游戏开始时可以在史诗•精品混合技能库中选择一项技能获得之<li>在一局游戏中首次造成伤害和受到伤害时可以在精品技能库中各选择一项技能获得之<li>最后在一局游戏中首次有角色死亡时可以在史诗技能库中选择一项技能获得之"]],
                        //"ys_荧":["female","shen","5/8",["ys_原神","ys_暴击","ys_天空"],[]],
                        //"ys_悲惨的技能者":["female","shen",1,["ys_原神","ys_暴击","ys_天空"],[]],
                        //蒙德
                        ys_温迪: ['female', 'qgqc_meng', '3/5', ['ys_高天之歌', 'ys_风神之诗', 'ys_暴风之眼'], ['des:温迪.定位:辅助<br>身份推荐:内奸<br>知己知彼才能百战不殆,温迪基于自身体力上限可以查看牌堆顶的牌,可以随时预判对手手里的牌.核心技能风神之诗可回血可加体力上限,配合高天之歌可以查看牌堆更多的牌,比如被杀指定时可以看看牌堆顶是什么颜色的牌,按照需求看要不要掉血.再搭配暴风之眼加伤,可辅可c的全能角色.']],
                        ys_迪卢克: ['male', 'qgqc_meng', '4', ['ys_在此宣判'], ['des:迪卢克.定位:主c<br>身份推荐:地主<br>多刀流主c角色,有一定几率克制卖血流.']],
                        //         ys_芭芭拉:["female","qgqc_meng","20000",["ys_原神","ys_暴击","ys_天空"],["des:蒙德偶像--芭芭拉<br>强度:[四星中阶]获取白色原神标志<br>体力:20000<br>基础攻击力:1700～2000"]],
                        //         ys_琴:["female","qgqc_meng","17000",["ys_原神4阶","ys_暴击","ys_天空"],["des:西风骑士团团长--琴<br>强度:[五星中阶]获取金色原神标志<br>体力:17000<br>基础攻击力:2300～2600"]],
                        //         ys_砂糖:["female","qgqc_meng","19000",["ys_原神2阶","ys_暴击","ys_天空"],["des:炼金术士--砂糖<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200"]],
                        //         ys_丽莎:["female","qgqc_meng","19000",["ys_原神2阶","ys_暴击","ys_天空"],["des:图书馆馆长--丽莎<br>强度:[四星中阶]获取白色原神标志<br>体力:19000<br>基础攻击力:1900～2200"]],
                        //         ys_安柏:["female","qgqc_meng","19000",["ys_原神2阶","ys_暴击","ys_天空"],["des:侦查骑士--安柏<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200"]],
                        //         ys_凯亚:["male","qgqc_meng","19000",["ys_原神2阶","ys_暴击","ys_天空"],["des:骑士队长--凯亚<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200"]],
                        //         ys_可莉:["female","qgqc_meng","17000",["ys_原神4阶","ys_暴击","ys_天空"],["des:火花骑士--可莉<br>强度:[五星中阶]获取金色原神标志<br>体力:5000<br>基础攻击力:2300～2600"]],
                        //         ys_班尼特:["male","qgqc_meng","18000",["ys_原神3阶","ys_暴击","ys_天空"],["des:倒霉团团长--火神班尼特<br>强度:[伪五星下阶]获取蓝色原神标志<br>体力:18000<br>基础攻击力:2100～2400"]],
                        //         ys_诺艾尔:["female","qgqc_meng","19000",["ys_原神2阶","ys_暴击","ys_天空"],["des:女仆骑士--诺艾尔<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200"]],
                        ys_菲谢尔: ['female', 'qgqc_meng', 3, ['ys_断罪雷影', 'ys_至夜幻现'], ['des:菲谢尔.定位:辅助<br>身份推荐:主公,地主<br>菲谢尔每回合可以给一名角色一枚断罪标记,当菲谢尔受到伤害时有断罪标记的角色也会受到同等伤害,弃置断罪标记.菲谢尔受到伤害后可以选择一种花色开始额外回合.不建议用菲谢尔当队友,因为很容易变不动白.']],
                        //         ys_雷泽:["male","qgqc_meng","19000",["ys_原神2阶","ys_暴击","ys_天空"],["des:狼孩--雷泽<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200"]],
                        //         ys_莫娜:["female","qgqc_meng","18000",["ys_原神3阶","ys_暴击","ys_天空"],["des:不靠谱占卜--莫娜<br>强度:[五星下阶]获取蓝色原神标志<br>体力:18000<br>基础攻击力:2100～2400"]],
                        ys_阿贝多: ['male', 'qgqc_meng', '4', ['ys_拟造阳华'], ['des:阿贝多.定位:主c<br>身份推荐:地主<br>拼点武将,赢了至少拉开四牌差,还能让对手少两张牌.有句话说得好,拼点无弱将']],
                        //         ys_优菈:["female","qgqc_meng","16000",["ys_原神5阶","ys_暴击","ys_天空"],["des:记仇贵女--优菈<br>强度:[五星上阶]获取红色原神标志<br>体力:16000<br>基础攻击力:2500～2800"]],
                        //         ys_迪奥娜:["female","qgqc_meng","20000",["ys_原神","ys_暴击","ys_天空"],["des:蒙德调酒师--迪奥娜<br>强度:[四星中阶]获取白色原神标志<br>体力:20000<br>基础攻击力:1700～2000"]],
                        //         ys_罗莎莉亚:["female","qgqc_meng","20000",["ys_原神","ys_暴击","ys_天空"],["des:蒙德修女--罗莎莉亚<br>强度:[四星中阶]获取白色原神标志<br>体力:20000<br>基础攻击力:1700～2000"]],
                        //璃月
                        ys_刻晴: ['female', 'qgqc_li', 4, ['ys_天街巡游', 'ys_玉衡之贵'], ['des:刻晴.定位:主c<br>身份推荐:全能<br>全能型主c角色,位置靠前只要刷一堆杀就能很轻易的秒掉一个角色,玉衡之贵相当于无损攻心并能用自己的一张废牌换对手的一张好牌,不管是打速杀还是养成都能游刃有余.']],
                        ys_钟离: ['male', 'qgqc_li', 4, ['ys_悬岩宸断', 'ys_玉璋护盾'], ['bossallowed', 'des:钟离.定位:辅助<br>身份推荐:农民,反贼<br>原神角色最强辅助,每回合自身稳定一点护盾值,周围的角色包括自己被杀时弃置一张黑牌就能给一点护盾,尘世闲游稳得一匹,活着才有输出.']],
                        ys_魈: ['male', 'qgqc_li', 4, ['ys_平妖大圣', 'ys_降魔夜叉'], ['des:魈.定位:爆发<br>身份推荐:地主<br>典型的爆发流角色,前期多拿点圣标记后期不缺牌,但是要注意磨损,虽然每次都可以造成两点伤害但是自身也会损失一点体力.']],
                        ys_胡桃: ['female', 'qgqc_li', 3, ['ys_蝶影之时', 'ys_蝶引来生'], ['des:胡桃.定位:爆发<br>身份推荐:地主,主公<br>往生堂的胡堂主,超爆发流角色,在手牌质量好的时机通过转换技蝶隐之时记录下来,下回合先用摸来的牌,弃置剩下的牌直接复原上回合手牌,加上二技能蝶引来生失去一点体力还可以摸敌方的手牌,完成一轮漂亮的爆发,不过二技能不要贪哦,毕竟胡桃只是三体力的爆发角色,还是很容易挂的.']],
                        //         ys_七七:["female","qgqc_li","18000",["ys_原神3阶","ys_暴击","ys_天空"],["des:肚饿真君--七七<br>强度:[五星下阶]获取蓝色原神标志<br>体力:18000<br>基础攻击力:2100～2400"]],
                        ys_甘雨: ['female', 'qgqc_li', 4, ['ys_唯此一心', 'ys_七星天枢', 'ys_天地交泰'], ['des:甘雨.定位:主c<br>身份推荐:反贼<br>身份场的神,冰伤可以克制卖血流,专注技唯此一心远程伤害直接加伤,配合弓系无限攻击距离,被甘雨盯上的武将应该都很绝望.']],
                        ys_凝光: ['female', 'qgqc_li', 3, ['ys_星移势转', 'ys_七星天权'], ['des:凝光.定位:爆发<br>身份推荐:主公,内奸<br>军八强将,不太适合人少的模式.比较全能的爆发角色,手机性能杀手.凝光每使用牌指定一个角色回合结束后都能摸等量的牌,军八放个aoe回合结束八张牌起步.并且身为天权星的她是没有弃牌阶段的,不过作为爆发流角色代价是同样没有摸牌阶段,所以不太适合后位,如果回合开始前被拆光了手牌就等于无限坐牢了.运气好的话几个回合后凝光直接无敌,但是运气不好的话,如果手里没有可以打出的牌就是天牢将了.']],
                        //         ys_重云:["male","qgqc_li","20000",["ys_原神","ys_暴击","ys_天空"],["des:冰棍千年--重云<br>强度:[四星中阶]获取白色原神标志<br>体力:20000<br>基础攻击力:1700～2000"]],
                        ys_行秋: ['female', 'qgqc_li', '4', ['ys_画雨笼山', 'ys_裁雨留虹'], ['des:行秋.定位:辅助<br>身份推荐:忠臣,反贼<br>顶级辅助角色,回合内可以挪牌,结束阶段可以打乱敌人手牌']],
                        //         ys_香菱:["female","qgqc_li","19000",["ys_原神2阶","ys_暴击","ys_天空"],["des:金牌厨师--香菱<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200"]],
                        //         ys_北斗:["female","qgqc_li","19000",["ys_原神2阶","ys_暴击","ys_天空"],["des:海盗船长--北斗<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200"]],
                        //         ys_辛焱:["female","qgqc_li","20000",["ys_原神","ys_暴击","ys_天空"],["des:摇滚乐手--辛焱<br>强度:[四星中阶]获取白色原神标志<br>体力:6000<br>基础攻击力:1700～2000"]],
                        //         ys_烟菲:["female","qgqc_li","19000",["ys_原神2阶","ys_暴击","ys_天空"],["des:律政佳人--烟菲<br>强度:[四星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2200"]],
                        ys_公子: ['male', 'qgqc_li', '3', ['ys_魔王武装', 'ys_极恶技'], ['des:达达利亚.定位:主c<br>身份推荐:主公,地主<br>独有的魔王武装体系,新卖血流开创者,拼命的公子很可怕的']],
                        //稻妻
                        ys_雷电将军: ['female', 'qgqc_dao', 3, ['ys_万千愿望', 'ys_一心净土'], ['des:雷电将军-影.定位:辅助<br>身份推荐:农民,反贼,忠臣<br>原神角色里比较强的辅助了,每回合令一名角色无损摸四张牌,比较适合搭配主c,菜刀流角色.一心净土还能保证不被乐不被兵,斗地主顶级农民.']],
                        //         ys_枫原万叶:["male","qgqc_dao","17000",["ys_原神4阶","ys_暴击","ys_天空"],["des:快乐风男--枫原万叶<br>强度:[五星中阶]获取金色原神标志<br>体力:17000<br>基础攻击力:2300～2600"]],
                        //         ys_珊瑚宫心海:["female","qgqc_dao","18000",["ys_原神3阶","ys_暴击","ys_天空"],["des:珊瑚宫主--心海<br>强度:[五星下阶]获取蓝色原神标志<br>体力:18000<br>基础攻击力:2100～2400"]],
                        ys_神里绫华: ['female', 'qgqc_dao', 3, ['ys_白鹭霜华'], ['des:神里绫华.定位:主c<br>身份推荐:全能<br>全能型主c角色,手牌数永远定在四张的神里绫华拥有着超强的续航能力,遇到这样的对手应该很难缠,不过被这么好看的小姐姐打应该也是种享受吧.']],
                        //         ys_宵宫:["female","qgqc_dao","17000",["ys_原神4阶","ys_暴击","ys_天空"],["des:烟花三月--巴宵宫<br>强度:[五星中阶]获取金色原神标志<br>体力:17000<br>基础攻击力:2300～2600"]],
                        //         ys_九条裟罗:["female","qgqc_dao","19000",["ys_原神2阶","ys_暴击","ys_天空"],["des:稻妻大将--裟罗<br>强度:[4星上阶]获取绿色原神标志<br>体力:19000<br>基础攻击力:1900～2100"]],
                        //         ys_早柚:["female","qgqc_dao","20000",["ys_原神","ys_暴击","ys_天空"],["des:忍者之路--早柚<br>强度:[四星中阶]获取白色原神标志<br>体力:20000<br>攻击力:1700～2000"]],
                        //         ys_托马:["male","qgqc_dao","20000",["ys_原神2阶","ys_暴击","ys_天空"],["des:稻妻火男--托马<br>强度:[四星上阶]获取绿色原神标志<br>体力:20000<br>基础攻击力:1900～2100"]],
                    },
                    characterIntro: {},
                    characterTitle: {},
                    skill: {
                        ys_七星天枢: {
                            //甘雨:七星天枢
                            audio: 'ext:倾国倾城/配音/原神包配音:3',
                            trigger: {
                                player: 'turnOverBegin',
                                source: 'damageBegin1',
                            },
                            filter(event, player, name) {
                                if (name == 'damageBegin1') return event.nature != 'fire' && event.nature != 'ice';
                                else return true;
                            },
                            _priority: -946,
                            forced: true,
                            content() {
                                if (event.triggername == 'turnOverBegin') {
                                    game.log(player, '取消了翻面');
                                    trigger.cancel();
                                } else {
                                    var nature = [/*'fire',*/ 'ice'].randomGet();
                                    game.log(player, '造成的伤害改为', get.translation(nature), '属性');
                                    trigger.nature = nature;
                                }
                            },
                            ai: {
                                noturnOver: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'turnOver')) return [0, 0];
                                    },
                                },
                            },
                            mod: {
                                targetInRange() {
                                    return true;
                                },
                            },
                        },
                        ys_唯此一心: {
                            //甘雨:唯此一心
                            audio: 'ext:倾国倾城/配音/原神包配音:3',
                            trigger: { source: 'damageBegin1' },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'sha', 'wanjian', 'nanman' && !event.player.inRange(player);
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        ys_天地交泰: {
                            //甘雨:天地交泰
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                        },
                        ys_星移势转: {
                            //凝光:星移势转
                            audio: 'ext:倾国倾城/配音/原神包配音:3',
                            trigger: {
                                player: ['useCardToPlayered', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            marktext: '星',
                            intro: {
                                name: '星',
                                content: 'mark',
                            },
                            filter(event, player, name) {
                                if (name == 'useCardToPlayered') {
                                    if (player.storage.ys_星移势转2 && player.storage.ys_星移势转2 >= 50) {
                                        return false;
                                    }
                                } else {
                                    if (!player.storage.ys_星移势转2) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'useCardToPlayered') {
                                    if (!player.storage.ys_星移势转2) {
                                        player.storage.ys_星移势转2 = 1;
                                        player.addMark('ys_星移势转', 1);
                                    } else {
                                        if (player.storage.ys_星移势转2 < 50) {
                                            player.storage.ys_星移势转2++;
                                            player.addMark('ys_星移势转', 1);
                                        }
                                    }
                                } else {
                                    if (player.storage.ys_星移势转2) {
                                        player.draw(player.storage.ys_星移势转2);
                                        player.removeMark('ys_星移势转', player.storage.ys_星移势转2);
                                        player.storage.ys_星移势转2 = 0;
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: { player: 1 },
                                threaten: 3.2,
                            },
                        },
                        ys_七星天权: {
                            //凝光:七星天权
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            nobracket: true,
                            trigger: {
                                player: ['phaseDrawBefore', 'phaseDiscardBefore'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.say('----天权,权柄');
                            },
                        },
                        ys_万千愿望: {
                            //影:万千愿望
                            audio: 'ext:倾国倾城/配音/原神包配音:3',
                            usable: 1,
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player.chooseTarget();
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    result.targets[0].draw(4);
                                } else event.finish;
                            },
                            ai: {
                                order: 10,
                                result: { player: 1 },
                                threaten: 3.2,
                            },
                        },
                        ys_一心净土: {
                            //影:一心净土
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'lebu' || card.name == 'bingliang') return false;
                                },
                            },
                        },
                        ys_高天之歌: {
                            //温迪:高天之歌
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return Array.isArray(event.ys_高天之歌);
                            },
                            onChooseToUse(event) {
                                if (game.online || !event.player.hasSkill('ys_高天之歌')) return;
                                var cards = [];
                                for (var i = 0; i < event.player.maxHp; i++) {
                                    var card = ui.cardPile.childNodes[i];
                                    if (card) cards.push(card);
                                    else break;
                                }
                                event.set('ys_高天之歌', cards);
                            },
                            chooseButton: {
                                dialog(event) {
                                    var dialog = ui.create.dialog('高天', 'hidden');
                                    if (event.ys_高天之歌 && event.ys_高天之歌.length) dialog.add(event.ys_高天之歌);
                                    else dialog.addText('牌堆无牌');
                                    for (var i of dialog.buttons) {
                                        i.classList.add('noclick');
                                    }
                                    dialog.buttons.length = 0;
                                    return dialog;
                                },
                                filter(event, player) {
                                    return false;
                                },
                            },
                            ai: {
                                order: 10,
                                result: { player: 1 },
                                threaten: 3.2,
                            },
                        },
                        ys_风神之诗: {
                            //温迪:风神之诗
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.recover(1);
                                        break;
                                    case 'diamond':
                                        player.recover(1);
                                        break;
                                    case 'club':
                                        player.gainMaxHp(1);
                                        break;
                                    case 'spade':
                                        player.gainMaxHp(1);
                                        break;
                                }
                            },
                        },
                        ys_暴风之眼: {
                            //温迪:暴风之眼
                            audio: 'ext:倾国倾城/配音/原神包配音:1',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return player.isDamaged();
                            },
                            content() {
                                'step 0';
                                var num = Math.min(player.getDamagedHp(), player.hp);
                                player.loseMaxHp(num);
                                trigger.num += num;
                                trigger.ys_暴风之眼 = true;
                                player.chat(['听凭风引!', '且听风吟!'].randomGet());
                            },
                            group: 'ys_暴风之眼_die',
                            subSkill: {
                                die: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).ys_暴风之眼;
                                    },
                                    content() {
                                        player.chat(['听凭风引!', '且听风吟!'].randomGet());
                                        var num = trigger.player.maxHp;
                                        if (num > 0) player.draw(num);
                                    },
                                },
                            },
                        },
                        ys_玉璋护盾: {
                            //钟离:玉璋护盾
                            audio: 'ext:倾国倾城/配音/原神包配音:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: 1,
                            position: 'he',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            filter(event, player) {
                                return player.countCards('he') >= 1;
                            },
                            content() {
                                player.changeHujia(1);
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                                order: 2.5,
                            },
                        },
                        ys_悬岩宸断: {
                            //钟离:悬岩宸断
                            audio: 'ext:倾国倾城/配音/原神包配音:3',
                            trigger: {
                                global: 'shaBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h', { color: 'black' }) && !event.target.hujia && get.distance(player, event.target) <= 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(get.prompt('ys_玉璋护盾', trigger.target), { color: 'black' });
                                var goon = get.attitude(player, trigger.target) > 2 && get.damageEffect(trigger.target, trigger.player, player) < 0;
                                next.ai = function (card) {
                                    if (goon) {
                                        if (trigger.target.hp == 1) return 10 - get.value(card);
                                        return 7 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.target.changeHujia();
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        ys_天街巡游: {
                            //刻晴:天街巡游
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
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
                                if (result.cards?.length) {
                                    player.gain(result.cards, target, 'giveAuto');
                                    if (!event.parent.countGive) event.parent.countGive = 0;
                                    event.parent.countGive++;
                                } else {
                                    target.damage();
                                }
                            },
                            contentAfter() {
                                if (event.parent.countGive >= 2) {
                                    player.addTempSkill('ys_天街巡游_paoxiao');
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
                                    audio: 'ext:倾国倾城/配音/原神包配音:2',
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
                        ys_玉衡之贵: {
                            //刻晴"玉衡之贵
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
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
                                if (result.links?.length) {
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
                        ys_平妖大圣: {
                            //魈"平妖大圣
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            marktext: '圣',
                            intro: {
                                name: '平妖大圣',
                                content: 'cards',
                            },
                            init(player) {
                                if (!player.storage.ys_平妖大圣) player.storage.ys_平妖大圣 = [];
                            },
                            trigger: {
                                player: ['phaseDrawBegin1', 'phaseDiscardEnd'],
                            },
                            forced: true,
                            filter(event, player, onrewrite) {
                                if (onrewrite == 'phaseDrawBegin1') return true;
                                return player.storage.ys_平妖大圣 && player.storage.ys_平妖大圣.length;
                            },
                            content() {
                                'step 0';
                                if (player.storage.lh_mingdi) {
                                } else {
                                }
                                var onrewrite = event.triggername;
                                if (onrewrite == 'phaseDrawBegin1') {
                                    trigger.changeToZero();
                                    event.cards = get.cards(3);
                                    game.cardsGotoOrdering(event.cards);
                                } else {
                                    var num = player.storage.ys_平妖大圣.length || 0;
                                    player.draw(num);
                                    event.finish();
                                }
                                ('step 1');
                                var tip = '###【平妖大圣】###' + lib.translate.ys_平妖大圣_info;
                                if (player.storage.lh_mingdi) {
                                    tip = '###【平妖大圣】###' + lib.translate.ys_平妖大圣_rewrite_info;
                                }
                                var next = player.chooseCardButton(tip, true, cards, 1);
                                next.ai = function (button) {
                                    return -get.value(button.link);
                                };
                                ('step 2');
                                if (result.links?.length) {
                                    var card = result.links[0];
                                    cards.remove(card);
                                    if (!player.storage.lh_mingdi) {
                                        game.cardsGotoSpecial(card);
                                        player.storage.ys_平妖大圣.push(card);
                                        player.markSkill('ys_平妖大圣');
                                    }
                                } else event.finish();
                                ('step 3');
                                player.gain(cards, 'log', 'gain2');
                            },
                        },
                        ys_降魔夜叉: {
                            //魈"降魔夜叉
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.is.altered('xshixin') && event.player.hp < player.hp) return false;
                                return event.player.isAlive() && event.player != player;
                            },
                            content() {
                                'step 0';
                                trigger.player.loseHp();
                                ('step 1');
                                player.loseHp();
                            },
                        },
                        ys_蝶影之时: {
                            //胡桃:蝶引之时
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            marktext: '蝶',
                            enable: 'phaseUse',
                            usable: 1,
                            mark: true,
                            intro: {
                                name: '蝶',
                                content: 'cards',
                            },
                            init(player) {
                                player.storage.ys_蝶影之时 = [];
                                player.storage.ys_蝶影之时_gu = false;
                                player.markSkill('ys_蝶影之时_meng');
                            },
                            filter(event, player) {
                                return true;
                            },
                            check(event, player) {
                                var cardsValue = function (cards) {
                                    var v = 0;
                                    for (var i = 0; i < cards.length; i++) {
                                        v += get.value(cards[i]);
                                    }
                                    return v;
                                };
                                if (!player.storage.ys_蝶影之时_gu) {
                                    return cardsValue(player.getCards('h')) > 15;
                                } else {
                                    return cardsValue(player.storage.ys_蝶影之时) > cardsValue(player.getCards('h'));
                                }
                            },
                            prompt(event, player) {
                                if (!player.storage.ys_蝶影之时_gu) {
                                    return '是否复制所有的手牌到武将牌上？';
                                } else {
                                    return '是否弃置所有手牌,并获得武将牌上的<蝶影>牌？';
                                }
                            },
                            content() {
                                'step 0';
                                var b = player.storage.ys_蝶影之时_gu;
                                player.storage.ys_蝶影之时_gu = !player.storage.ys_蝶影之时_gu;
                                if (b) {
                                    player.markSkill('ys_蝶影之时_meng');
                                    event.toGain = player.storage.ys_蝶影之时;
                                } else {
                                    player.unmarkSkill('ys_蝶影之时_meng');
                                    event.goto(3);
                                }
                                ('step 1');
                                player.discard(player.getCards('h'));
                                ('step 2');
                                player.gain(event.toGain);
                                player.storage.ys_蝶影之时 = [];
                                event.goto(4);
                                ('step 3');
                                var cards = player.getCards('h');
                                for (var i = 0; i < cards.length; i++) {
                                    player.storage.ys_蝶影之时.push(game.createCard(cards[i].name, cards[i].suit, cards[i].number, cards[i].nature));
                                }
                                ('step 4');
                                player.markSkill('ys_蝶影之时');
                            },
                            ai: {
                                order: 10,
                                result: { player: 1 },
                                threaten: 3.2,
                            },
                        },
                        ys_蝶引来生: {
                            //胡桃:蝶影来生
                            trigger: {
                                player: 'loseEnd',
                            },
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            check(event, player) {
                                return (
                                    player.hp > 2 &&
                                    event.cards &&
                                    event.cards.length >=
                                    game.countPlayer(function (current) {
                                        return get.attitude(player, current) <= 0;
                                    })
                                );
                            },
                            filter(event, player) {
                                if (!event.cards) return false;
                                if (event.cards.length == 0) return false;
                                var hasHandcard = false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQQ
                                        if (i.original == 'h') {
                                            hasHandcard = true;
                                            break;
                                        }
                                    }
                                if (!hasHandcard) {
                                    return false;
                                }
                                if (player.countCards('h')) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                var hcount = 0;
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (trigger.cards[i].original == 'h') {
                                        hcount = hcount + 1;
                                    }
                                }
                                player
                                    .chooseTarget([0, hcount], true, '请选择最多' + hcount + '名角色各获得他们一张牌', function (card, player, target) {
                                        return target != player && target.countGainableCards(player, 'he') > 0;
                                    })
                                    .set('ai', function (current) {
                                        return -get.attitude(player, current);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets.sortBySeat();
                                    for (var i = 0; i < result.targets.length; i++) {
                                        player.gainPlayerCard('he', result.targets[i], true);
                                        player.line(result.targets[i], 'green');
                                    }
                                }
                                ('step 2');
                                player.loseHp();
                            },
                        },
                        ys_白鹭霜华: {
                            //神里绫华:白鹭霜华
                            audio: 'ext:倾国倾城/配音/原神包配音:5',
                            usable: 100,
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQQ
                                        if (i.original == 'h') return player.countCards('h') < 4;
                                    }
                                return false;
                            },
                            content() {
                                player.draw(4 - player.countCards('h'));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    var nh = player.countCards('h');
                                    if (tag == 'noh' && (nh > 4 || nh == 0)) {
                                        return false;
                                    }
                                },
                            },
                        },
                        ys_断罪雷影: {
                            //菲谢尔:断罪雷影
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            filterTarget(card, player, target) {
                                return player != target && !target.hasSkill('ys_断罪雷影_mark');
                            },
                            filter(event, player) {
                                var targets = game.filterPlayer(function (current) {
                                    return current.hasSkill('ys_断罪雷影_mark') && current.hp > 0;
                                });
                                if (!targets || targets.length == 0) {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                player.storage.ys_断罪雷影_target = target;
                                target.storage.ys_断罪雷影_mark = player;
                                target.addSkill('ys_断罪雷影_mark');
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
                            group: 'ys_断罪雷影_link',
                        },
                        ys_断罪雷影_mark: {
                            intro: {
                                content: '已有断罪标记',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                        },
                        ys_断罪雷影_link: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.ys_断罪雷影_target && player.storage.ys_断罪雷影_target.hp > 0 && player.storage.ys_断罪雷影_target.hasSkill('ys_断罪雷影_mark');
                            },
                            content() {
                                'step 0';
                                player.line(player.storage.ys_断罪雷影_target);
                                player.storage.ys_断罪雷影_target.damage(trigger.num, player, trigger.nature);
                                ('step 1');
                                player.storage.ys_断罪雷影_target.removeSkill('ys_断罪雷影_mark');
                                delete player.storage.ys_断罪雷影_target.storage.ys_断罪雷影_mark;
                                delete player.storage.ys_断罪雷影_target;
                            },
                        },
                        ys_至夜幻现: {
                            //菲谢尔:至夜幻现
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHistory('damage').length;
                            },
                            content() {
                                'step 0';
                                player.chat(['至夜幻现'].randomGet());
                                player
                                    .chooseControl('红色', '黑色')
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.countCards('h', { color: 'red' }) > player.countCards('h', { color: 'black' })) return '红色';
                                        return '黑色';
                                    })
                                    .set('prompt', '至夜幻现:选择一种颜色并执行一个额外回合该回合内仅能使用与你选择的颜色相同的牌另一种颜色的牌不计入手牌上限');
                                ('step 1');
                                if (result.control == '红色') {
                                    player.storage.ys_至夜幻现_phase = 'red';
                                } else player.storage.ys_至夜幻现_phase = 'black';
                                player.addTempSkill('ys_至夜幻现_phase');
                                player.phase('nodelay');
                            },
                            subSkill: {
                                phase: {
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (get.itemtype(card) == 'card' && player.storage.ys_至夜幻现_phase && player.storage.ys_至夜幻现_phase != get.color(card)) return false;
                                        },
                                        ignoredHandcard(card, player) {
                                            if (player.storage.ys_至夜幻现_phase && get.color(card) != player.storage.ys_至夜幻现_phase) {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && player.storage.ys_至夜幻现_phase && get.color(card) != player.storage.ys_至夜幻现_phase) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        ys_拟造阳华: {
                            //阿贝多:拟造阳华
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            group: 'ys_拟造阳华_pindian',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            content() {
                                player.chooseToCompare(target);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                            },
                            subSkill: {
                                pindian: {
                                    trigger: {
                                        player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                        target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                    },
                                    filter(event, player) {
                                        if (event.preserve) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        if (player != trigger.player) {
                                            if (trigger.num1 < trigger.num2) {
                                                var card = get.cardPile2(function (card) {
                                                    return card.name == 'tao' && get.type(card) == 'basic';
                                                });
                                                if (card) {
                                                    player.gain(card, 'gain2', 'log');
                                                    player.draw(1);
                                                } else {
                                                    player.draw(2);
                                                }
                                                player.useCard({ name: 'shunshou' }, trigger.player);
                                            } else {
                                                if (trigger.num1 == trigger.num2) {
                                                    var bieren = trigger.player;
                                                    var mpdr = [player, bieren];
                                                    game.asyncDraw(mpdr);
                                                }
                                            }
                                        } else {
                                            if (trigger.num1 > trigger.num2) {
                                                var card = get.cardPile2(function (card) {
                                                    return card.name == 'tao' && get.type(card) == 'basic';
                                                });
                                                if (card) {
                                                    player.gain(card, 'gain2', 'log');
                                                    player.draw(1);
                                                } else {
                                                    player.draw(2);
                                                }
                                                player.useCard({ name: 'shunshou' }, trigger.target);
                                            } else {
                                                if (trigger.num1 == trigger.num2) {
                                                    var bieren = trigger.target;
                                                    var mpdr = [player, bieren];
                                                    game.asyncDraw(mpdr);
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        ys_画雨笼山: {
                            //行秋:画雨笼山
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                return get.cardCount({ name: 'sha' }, player) == 0;
                            },
                            content() {
                                'step 0';
                                var check;
                                var i,
                                    num = 0;
                                for (i = 0; i < game.players.length; i++) {
                                    if (player != game.players[i]) {
                                        if (get.attitude(player, game.players[i]) <= 0 && game.players[i].countCards('he')) num++;
                                    }
                                }
                                check = num >= 2;
                                player.chooseTarget(
                                    '是否发动【ys_画雨笼山】？',
                                    [1, 2],
                                    function (card, player, target) {
                                        return target.countCards('he') > 0 && player != target;
                                    },
                                    function (target) {
                                        if (!check) return 0;
                                        return 1 - get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.targets?.length) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        player.gain(result.targets[i].getCards('he').randomGet());
                                        result.targets[i].$give(1, player);
                                    }
                                }
                                ('step 2');
                                if (result.bool) game.delay();
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.3,
                            },
                        },
                        ys_裁雨留虹: {
                            //行秋:裁雨留虹
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: 1,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            multitarget: true,
                            targetprompt: ['指定目标', '移动目标'],
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length) {
                                    var from = ui.selected.targets[0];
                                    var judges = from.getCards('j');
                                    for (var i = 0; i < judges.length; i++) {
                                        if (!target.hasJudge(judges[i].viewAs || judges[i].name)) return true;
                                    }
                                    if (target.isMin()) return false;
                                    if ((from.getEquip(1) && !target.getEquip(1)) || (from.getEquip(2) && !target.getEquip(2)) || (from.getEquip(3) && !target.getEquip(3)) || (from.getEquip(4) && !target.getEquip(4)) || (from.getEquip(5) && !target.getEquip(5))) return true;
                                    return false;
                                } else {
                                    return target.countCards('ej') > 0;
                                }
                            },
                            selectTarget: 2,
                            content() {
                                'step 0';
                                if (targets.length == 2) {
                                    player.choosePlayerCard(
                                        'ej',
                                        function (button) {
                                            if (get.attitude(player, targets[0]) > get.attitude(player, targets[1])) {
                                                return get.position(button.link) == 'j' ? 10 : 0;
                                            } else {
                                                if (get.position(button.link) == 'j') return -10;
                                                return get.equipValue(button.link);
                                            }
                                        },
                                        targets[0]
                                    );
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (get.position(result.buttons[0].link) == 'e') {
                                        event.targets[1].equip(result.buttons[0].link);
                                    } else if (result.buttons[0].link.viewAs) {
                                        event.targets[1].addJudge({ name: result.buttons[0].link.viewAs }, [result.buttons[0].link]);
                                    } else {
                                        event.targets[1].addJudge(result.buttons[0].link);
                                    }
                                    event.targets[0].$give(result.buttons[0].link, event.targets[1]);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            if (target.countCards('j') && get.attitude(player, target) > 0) return 1;
                                            if (get.attitude(player, target) < 0) {
                                                var players = game.filterPlayer();
                                                for (var i = 0; i < players.length; i++) {
                                                    if (get.attitude(player, players[i]) > 0) {
                                                        if ((target.getEquip(1) && !players[i].getEquip(1)) || (target.getEquip(2) && !players[i].getEquip(2)) || (target.getEquip(3) && !players[i].getEquip(3)) || (target.getEquip(4) && !players[i].getEquip(4)) || (target.getEquip(5) && !players[i].getEquip(5))) return -1;
                                                    }
                                                }
                                            }
                                            return 0;
                                        } else {
                                            return get.attitude(player, ui.selected.targets[0]) > 0 ? -1 : 1;
                                        }
                                    },
                                },
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        ys_魔王武装: {
                            //公子:魔王武装
                            subSkill: {
                                cardx: {
                                    temp: true,
                                    charlotte: true,
                                    mark: 'card',
                                    intro: {
                                        content(storage, player) {
                                            return get.translation(storage.suit) + '手牌视为' + get.translation(storage);
                                        },
                                    },
                                    mod: {
                                        cardname(card, player) {
                                            var item = player.storage.ys_魔王武装_cardx;
                                            if (card.suit == item.suit) return item.name;
                                        },
                                        cardnature(card, player) {
                                            var item = player.storage.ys_魔王武装_cardx;
                                            if (card.suit == item.suit && item.nature) return item.nature;
                                        },
                                    },
                                    ai: {
                                        respondShan: true,
                                        save: true,
                                        respondSha: true,
                                        skillTagFilter(player, tag) {
                                            var item = player.storage.ys_魔王武装_cardx;
                                            var name = item.name;
                                            var suit = item.suit;
                                            if (!player.countCards('h', { suit: suit })) return false;
                                            if (tag == 'respondSha') {
                                                if (name != 'sha') return false;
                                            } else if (tag == 'respondShan') {
                                                if (name != 'shan') return false;
                                            } else if (tag == 'save') {
                                                if (name != 'tao' && name != 'jiu') return false;
                                            }
                                        },
                                    },
                                },
                            },
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.ys_魔王武装 = false;
                            },
                            intro: {
                                content: 'limited',
                            },
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('ys_魔王武装_cardx')) return false;
                                if (player.storage.ys_魔王武装) return false;
                                if (!['heart', 'diamond', 'club', 'spade'].includes(event.card.suit)) return false;
                                if (get.type(event.card) != 'trick') return false;
                                return true; //get.info(event.card).enable;
                            },
                            content() {
                                player.storage.ys_魔王武装 = true;
                                //player.awakenSkill('ys_魔王武装');
                                var item = game.createCard(trigger.card);
                                player.storage.ys_魔王武装_cardx = item;
                                player.addSkill('ys_魔王武装_cardx');
                            },
                        },
                        ys_极恶技: {
                            //公子:极恶技
                            audio: 'ext:倾国倾城/配音/原神包配音:2',
                            trigger: {
                                player: 'damage',
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                            filter(event, player) {
                                return player.isAlive();
                            },
                            content() {
                                'step 0';
                                var cards = get.cards(5),
                                    list = [];
                                player.showCards(cards);
                                game.cardsGotoOrdering(cards);
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].name == 'sha') {
                                        list.push(cards[i]);
                                    }
                                }
                                event.list = list;
                                ('step 1');
                                if (event.list.length && event.list.length != 1) {
                                    var next = player.chooseCardButton('<br>请选择要使用的<杀>:', event.list);
                                    next.set('filterButton', function (button) {
                                        return _status.event.player.hasUseTarget(button.link, false);
                                    });
                                    next.set('ai', function (button) {
                                        return _status.event.player.getUseValue(button.link, false);
                                    });
                                } else if (event.list.length == 1) {
                                    if (player.hasUseTarget(event.list[0], false)) {
                                        event._result = { bool: true, links: event.list };
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event._result = { bool: false };
                                    event.using = result.links[0];
                                    player.chooseUseTarget(event.using, false, 'nodistance');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result && result.bool) {
                                    event.list.remove(event.using);
                                    var chat = ['极恶技•尽灭水光', '极恶技•魔弹一闪', ''].randomGet();
                                    player.$fullscreenpop('断流•暴', 'fire');
                                    player.say(chat);
                                    if (event.list.length) event.goto(1);
                                }
                            },
                        },
                        ys_在此宣判: {
                            //迪卢克:在此宣判
                            audio: 'ext:倾国倾城/配音/原神包配音:3',
                            line: {
                                color: [173, 149, 206],
                            },
                            inherit: 'rin_baoqiu',
                            mod: {
                                attackFrom(rin, riki, ball) {
                                    return ball - 2;
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            logTarget: 'target',
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player.judge(function () {
                                    return 0;
                                });
                                ('step 1');
                                var target = trigger.target;
                                var map = trigger.customArgs;
                                var id = target.playerid;
                                if (!map[id]) map[id] = {};
                                if (result.color == 'red') {
                                    if (!map[id].extraDamage) map[id].extraDamage = 0;
                                    map[id].extraDamage++;
                                }
                                if (result.color == 'black') {
                                    trigger.directHit.add(target);
                                }
                                if (result.suit == 'spade' || result.suit == 'heart') {
                                    var evt = trigger.parent;
                                    if (evt.addCount !== false) {
                                        evt.addCount = false;
                                        player.getStat().card.sha--;
                                    }
                                    player.draw();
                                }
                                if (result.suit == 'diamond' || result.suit == 'club') {
                                    target.addTempSkill('fengyin');
                                    if (target.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(target, 'he', true);
                                }
                            },
                        },
                    },
                    translate: {
                        //技能简介>>>>>>
                        ys_七星天枢: '七星天枢',
                        ys_七星天枢_info: '【璃月七星-天枢星】:<br>【麒麟血脉】:不会被翻面.<br>【弓系】:使用牌不限距离.<br>【神之眼】:造成的伤害锁定为冰属性.',
                        ys_唯此一心: '唯此一心',
                        ys_唯此一心_info: '【专注技】:甘雨使用［杀］［万箭］［南蛮］对攻击距离没有你的角色造成伤害+1.',
                        ys_天地交泰: '天地交泰',
                        ys_天地交泰_info: '优秀的弓手往往不会被对手近身<br>锁定技,甘雨与其他角色的距离加一.',
                        ys_星移势转: '星移势转',
                        ys_星移势转_bg: '星',
                        ys_星移势转_info: '凝光每用牌指定一个角色(包括自己),获得一个「星」;<br>回合结束时,一个[星]转化为一张手牌.',
                        ys_七星天权: '七星天权',
                        ys_七星天权_info: '【璃月七星-天权星】:天权之权柄,凝光可以跳过弃牌阶段.代价是同样也没有摸牌阶段.',
                        ys_万千愿望: '万千愿望',
                        ys_万千愿望_info: '【雷电将军-影】<br>影的万千愿望,使一名角色摸四张牌.<br>带着我的愿望,打倒一切不利于永恒的存在吧.',
                        ys_一心净土: '一心净土',
                        ys_一心净土_info: '影开创的神之空间,实际上是用来关闭自己的心之牢.<br>影无法成为乐不思蜀和兵粮寸断的目标.',
                        ys_高天之歌: '高天之歌',
                        ys_高天之歌_info: '在人与神同行大地的时代,无数的歌曲传遍四方的天空.<br>在出牌阶段或有牌可以打出时,温迪可以查看牌堆顶基于自身体力上限数量的牌.',
                        ys_风神之诗: '风神之诗',
                        ys_风神之诗_info: '称颂风之神的诗篇有许多已经遗失,其中这首是描述他与风的力量.<br>温迪受到伤害后进行一次判定,红色回复一点体力,黑色增加一点体力上限.',
                        ys_暴风之眼: '暴风之眼',
                        ys_暴风之眼_info: '当温迪造成伤害时,温迪可将自身体力值上限变为当前体力值,温迪每少一点体力上限此次造成的伤害便加一点.若该角色因此死亡,温迪摸与该角色体力上限相同数量的牌.',
                        ys_玉璋护盾: '玉璋护盾',
                        ys_玉璋护盾_info: '帝君命令周围岩元素集聚而起,在周身化作玉璋护盾.<br>出牌阶段可以弃置一张牌并获得一点护甲.',
                        ys_悬岩宸断: '悬岩宸断',
                        ys_悬岩宸断_info: '帝君总是让璃月人民觉得安心.<br>当与帝君距离为1的角色(包括自己)被指定为杀的目标时,帝君可以弃置一张黑色牌使其获得一点护甲.',
                        ys_天街巡游: '天街巡游',
                        ys_天街巡游_info: '刻晴巡游璃月港.<br>令所有攻击范围内有刻晴的角色选择一项:交给刻晴一张手牌,或者受到1点伤害;若刻晴以此获得的手牌不小于2,本回合刻晴使用【杀】无次数限制.',
                        ys_玉衡之贵: '玉衡之贵',
                        ys_玉衡之贵_info: '【璃月七星-玉衡星】:<br>出牌阶段,刻晴观看一名其他角色的手牌,可以用一张手牌替换其中的一张.',
                        ys_平妖大圣: '平妖大圣',
                        ys_平妖大圣_info: '魈是璃月的护法夜叉,也是降魔大圣.<br>摸牌阶段,魈放弃摸牌并展示牌堆顶三张牌,将其中一张置于武将牌旁称之为「圣」,获得其余牌.弃牌阶段结束时,魈每有一张「圣」标记摸一张牌.',
                        ys_降魔夜叉: '降魔夜叉',
                        ys_降魔夜叉_info: '魈积年与邪魅作战,也终究会遭到磨损.<br>魈对一名角色造成伤害时,与对方共同失去一点体力.',
                        ys_蝶影之时: '蝶影之时',
                        ys_蝶影之时_info: '胡桃的往生秘法<br>转换技:<br>阳:出牌阶段,胡桃将所有手牌记录到角色牌上,称为<蝶>.<br>阴:出牌阶段,胡桃弃置所有手牌,将手牌回复至<蝶>上记录的牌一致.',
                        ys_蝶引来生: '蝶引来生',
                        ys_蝶引来生_info: '只有永不间断的烈焰可以洗净世间的不净之物.<br>当胡桃失去最后的手牌时,可以失去一点体力获得失去牌数量的角色各一张牌.',
                        ys_白鹭霜华: '白鹭霜华',
                        ys_白鹭霜华_info: '稻妻「社奉行」神里家的大小姐,容姿端丽,品行高洁.<br>绫华的手牌数低于四张时会摸至四张.',
                        ys_断罪雷影: '断罪雷影',
                        ys_断罪雷影_mark: '断罪',
                        ys_断罪雷影_info: '出牌阶段限一次,你可以给一名其他角色一个「断罪」标记;你受到伤害后,「断罪」标记角色受到等量的伤害,移除标记',
                        ys_至夜幻现: '至夜幻现',
                        ys_至夜幻现_info: '锁定技,一名角色回合结束后,若你本回合受到过伤害,则你进行一个额外回合且你本回合仅能使用一种颜色的牌且你另一种颜色的牌不计入手牌上限.',
                        ys_拟造阳华: '拟造阳华',
                        ys_拟造阳华_info: '大地升起的潮之花<br>阿贝多出牌阶段可以与一名其他角色拼点,若阿贝多赢,获得一张【桃】并摸一张牌(若牌堆中没有【桃】,改为摸两张牌),视为对拼点目标使用一张【顺手牵羊】;若平手,阿贝多与拼点目标各摸一张牌;若输,则无事发生',
                        ys_画雨笼山: '画雨笼山',
                        ys_画雨笼山_info: '结束阶段开始时,行秋可以获得至多两名角色的各一张牌.',
                        ys_裁雨留虹: '裁雨留虹',
                        ys_裁雨留虹_info: '出牌阶段限一次,行秋可以弃置一张手牌,移动场上的一张牌.',
                        ys_魔王武装: '魔王武装',
                        ys_魔王武装_info: '魔王武装•狂澜:当公子首次使用普通锦囊牌后,本局游戏中,公子手牌中与这张锦囊牌花色相同的牌,始终视为此锦囊.',
                        ys_极恶技: '极恶技',
                        ys_极恶技_info: '极恶技•尽灭闪:当公子受到伤害时,其可以亮出牌堆顶五张牌,可以无距离限制地使用其中任意张杀.',
                        ys_在此宣判: '在此宣判',
                        ys_在此宣判_info: '瑰美的火焰凤凰飞天而起<br>迪卢克的攻击范围+2.使用【杀】指定目标后,迪卢克进行判定.若结果:为红色,此【杀】对其的伤害值基数+1;为黑色,其无法闪避此【杀】;为♠️️/♥️️,此【杀】不计入使用次数限制且你摸一张牌;为♦️️/♣️️,目标角色的所有非锁定技失效直到回合结束,且迪卢克弃置其一张牌.',
                        //武将名>>>>>>>>
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
                        ys_公子: '达达利亚',
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
                        //扩展名
                        //"ys_yuanshen":"<b><font color=\"#FFC080\">原神",
                    },
                };
                for (var i in ys_yuanshen.character) {
                    ys_yuanshen.character[i][4].push('jy_die_audio');
                    ys_yuanshen.character[i][4].push('ext:倾国倾城/皮肤/原神包普通/' + i + '.jpg');
                }
                if (lib.config.extension_倾国倾城_marktext) {
                    for (var i in ys_yuanshen.skill) {
                        var info = ys_yuanshen.skill[i];
                        if (info.marktext2) info.marktext = info.marktext2;
                        if (info.subSkill) {
                            for (var j in info.subSkill) {
                                if (info.subSkill[j].marktext2) info.subSkill[j].marktext = info.subSkill[j].marktext2;
                            }
                        }
                    }
                }
                return ys_yuanshen;
            });
        },
        config: {
            //扩展说明>>>>>>>>>>>>>
            qgqc_help: {
                nopointer: true,
                name: '<img style=width:200px src=extension/倾国倾城/image/dianjichakankuozhanneirong.png>',
                item: {
                    1: '<span style="color: #33ffff"><font size =4px>✓</font></span>',
                    2: '<span style="color: #33ffff"><font size =3px><<倾国倾城5.6最终版本更新内容>>温馨提示:看完请点击框外或上方\'✓\'退出本浏览页面哦</font></span>',
                    3: '<li>' + lib.config.connect_nickname + '!欢迎使用倾国倾城扩展!',
                    4: '<li><span style="color: #ff0000"><font size =5px>此版为最终版,此次更新后本扩展将不再更新</font></span>',
                    5: '<li>5.6最终版本更新:1,优化受伤音效,替换音效.2,修复角色聊天无法关闭的问题.<br>  --本次更新时间:2021.12.17--',
                    6: "<li>5.5版本更新:1,优化'阶段提示'功能,将素材换为手杀样式.2,修复太虚幻境功能.3,修复武将聊天功能,并将聊天几率调整为百分百.4,加入武将受伤音效功能,男性武将和女性武将受到伤害后将播放不同的音效.  --本次更新时间:2021.12.12--",
                    7: "<li>5.4版本更新:1,优化'阶段提示'功能,将位置调到合理的地方,并提高素材亮度.2,添加'幻化模式'功能,具体长按下方幻化模式了解.--本次更新时间:2021.12.04--",
                    8: "<li>5.3版本更新:1,再次美化选项界面,全部换成图片显示.2,整合'俺杀'的阶段提示功能,以获得作者允许,请长按选项查看注意事项.--本次更新时间:2021.12.03--",
                    9: "<li>5.2版本更新:1,切换背景图片及背景音乐重做.<br>为更加专注原神玩法,直接删除了以前那些辣眼睛的图和不好听的音乐,本次添加原神蒙德,璃月,稻妻地区背景音乐共38首,添加背景图片15张,可点击功能区域查看. 2,添加'常规禁将'功能,开启后强制关闭除三国杀移动版以及本扩展外的武将(大慨开启了两百四左右武将,移动版某些天牢将也禁了,强烈推荐平时玩三国杀移动版玩家开启常规禁将游玩).    --本次更新时间:2021.11.29--",
                    10: "<li>5.1版本更新:1,移除三国包中的'神艾莉亚'.2,修复太虚幻境模式其他角色受伤与造成伤害时显示选择技能的问题,并添加了数个技能进技能池.3,美化扩展选项界面,并添加自动更换背景图片和随机播放音乐功能.4,将势力背景换为五光十色and五彩缤纷版😏--本次更新时间:2021.11.26--",
                    11: '<li>5.0版本更新:新增功能:太虚幻境.<br>详情长按下方太虚幻境开关查看 --本次更新时间:2021.11.23--',
                    12: '<li>4.0版本更新:删除了绝大部分无用功能以及武将,现专注更新原神角色,尽快完成所有原神角色的制作.--本次更新时间:2021.11.20--',
                    13: '<li>3.0版更新:1•更换了整个扩展的框架,以解决部分设备不能安装的问题,现在将主代码与武将包分离,并将所有代码做出了注释,方便所有代码爱好者用此研究.2•移除所有三国原版武将,加入原神同人特效版武将包,以后此包更新的武将将都带有特效.3•加入功能:切换卡背,现在可以切换精美的卡背了.--本次更新时间:2021.6.8--',
                    14: '<li>2.1版本更新:1.优化所有图类.',
                    15: '<li>本人只会写点简单的技能代码,所以此扩展其实是缝合各种扩展的功能而来.主要来源为(文武英杰),(金庸群侠传).改名字只是防止功能重合而出错,整合也是为了方便快捷,勿喷.使用下方功能时请关闭其他扩展的同类功能.武将以及功能本人已经实验过了了无数次未出bug,但是有可能因人而异,若出现了bug请联系我,QQ:1343505932',
                },
            },
            //扩展功能开关>>>>>>>>>>>>>
            游戏美化: {
                name: '<img style=width:150px src=extension/倾国倾城/image/youximeihua.png>',
                intro: '',
                init: true,
                clear: true,
            },
            //切换指示线
            qgqc_linexy: {
                name: '<img style=width:100px src=extension/倾国倾城/image/qiehuanzhishixian.png>',
                intro: '根据喜好切换指示线,建议关闭其他扩展的指示线特效.',
                init: lib.config.extension_倾国倾城_qgqc_linexy === undefined ? 'qgqc_line_moren' : lib.config.extension_倾国倾城_qgqc_linexy,
                item: {
                    qgqc_line_jinlongzhishi: '金龙 <img style=width:60px src=extension/倾国倾城/image/zhishixian/jinlong.png>',
                    qgqc_line_jianfeng: '剑锋 :<img style=width:60px src=extension/倾国倾城/image/zhishixian/jianfeng.png>',
                    qgqc_line_liuxinghudiejian2: '剑蝶 <img style=width:60px src=extension/倾国倾城/image/zhishixian/jiandie.png>',
                    qgqc_line_liuxinghudiejian: '流星蝴蝶 <img style=width:60px src=extension/倾国倾城/image/zhishixian/liuxing.png>',
                    qgqc_line_lvyujzhang: '绿玉杖 <img style=width:60px src=extension/倾国倾城/image/zhishixian/lvyu.png>',
                    qgqc_line_xuezhang: '血杖 <img style=width:60px src=extension/倾国倾城/image/zhishixian/xuezhang.png>',
                    qgqc_line_shezhang: '蛇杖 <img style=width:60px src=extension/倾国倾城/image/zhishixian/shezhang.png>',
                    default: '系统默认',
                },
                onclick(item) {
                    game.saveConfig('extension_倾国倾城_qgqc_linexy', item);
                },
            },
            //切换背景图片
            qgqc_beijingtupian: {
                name: '<img style=width:100px src=extension/倾国倾城/image/qiehuanbeijingtupian.png>',
                intro: '切换游戏背景.',
                init: lib.config.extension_倾国倾城_qgqc_beijingtupian === undefined ? '1' : lib.config.extension_倾国倾城_qgqc_beijingtupian,
                item: {
                    auto: '自动',
                    原神秀: '原神',
                    胡桃: '胡桃',
                    胡桃1: '胡桃',
                    胡桃2: '胡桃',
                    刻晴七七: '刻七',
                    刻晴芭芭拉: '刻芭',
                    刻晴: '刻晴',
                    刻晴1: '刻晴',
                    甘雨: '甘雨',
                    莫娜: '莫娜',
                    神里绫华: '神里绫华',
                    心海: '心海',
                    优菈: '优菈',
                    雷电将军: '影',
                    影神子: '影神子',
                    '影•全动': '影•全动态',
                    '影•半动': '影•半动态',
                    锦绣黛眉: '蔡文姬',
                },
                onclick(item) {
                    game.saveConfig('extension_倾国倾城_qgqc_beijingtupian', item);
                    game.jyqgqc_beijingtupian();
                },
                visualMenu(node, link) {
                    //link是冒号前面的,比如default:经典卡背,link就是default
                    node.style.height = node.offsetWidth * 0.67 + 'px'; //高度设置成宽度的0.67倍
                    node.style.backgroundSize = '100% 100%'; //图片拉伸
                    node.className = 'button character jybackgroundname';
                    node.setBackgroundImage('extension/倾国倾城/image/background/' + link + '.jpg'); //设置图片
                },
            },
            qgqc_beijingtupian_auto: {
                name: '<img style=width:100px src=extension/倾国倾城/image/zidongqiehuanbeijingyinyueshijian.png>',
                intro: '设置自动换背景的时间',
                init: lib.config.extension_倾国倾城_qgqc_beijingtupian_auto === undefined ? '30000' : lib.config.extension_倾国倾城_qgqc_beijingtupian_auto,
                item: {
                    1000: '一秒',
                    2000: '二秒',
                    5000: '五秒',
                    10000: '十秒',
                    20000: '二十秒',
                    30000: '半分钟',
                    60000: '一分钟',
                    120000: '两分钟',
                    300000: '五分钟',
                },
                onclick(item) {
                    game.saveConfig('extension_倾国倾城_qgqc_beijingtupian_auto', item);
                    if (lib.config.extension_倾国倾城_qgqc_beijingtupian == 'auto') {
                        game.jyqgqc_beijingtupian();
                    }
                },
            },
            //切换背景音乐
            qgqc_beijingyinyue: {
                name: '<img style=width:100px src=extension/倾国倾城/image/qiehuanbeijingyinyue.png>',
                intro: '更换游戏背景音乐',
                init: lib.config.extension_倾国倾城_qgqc_beijingyinyue === undefined ? '0' : lib.config.extension_倾国倾城_qgqc_beijingyinyue,
                item: {
                    0: '随机播放',
                    1: '默认音乐',
                    3: '<span style="color: #ff6600"><font size =4px>本扩展共收录原神蒙德•璃月•稻妻三个国家共38首音乐 • 菜单可下拉查看所有音乐 • 若点击说明栏则自动播放第一首\'原神.mp3\'.</font></span>',
                    4: '<span style="color: #ffcc00"><font size =5px>蒙德音乐共18首>></font></span>',
                    //蒙德
                    5: '原神.mp3',
                    6: '梦之咏叹.mp3',
                    7: '七天神像.mp3',
                    8: '蒙德的一日.mp3',
                    9: '晨曦酒庄.mp3',
                    10: '太古时期的遗孤.mp3',
                    11: '皎洁的笑颜.mp3',
                    12: '速度加快.mp3',
                    13: '战斗的秘仪.mp3',
                    14: '解决之道.mp3',
                    15: '无尽的回响.mp3',
                    16: '冲啊!无畏的勇士.mp3',
                    17: '水滴的节拍.mp3',
                    18: '无数的逆境.mp3',
                    19: '终天的闭幕曲.mp3',
                    20: '冰风回荡.mp3',
                    21: '青空.mp3',
                    22: '诗人的工作.mp3',
                    //璃月
                    23: '<span style="color: #ffcc00"><font size =5px>璃月音乐共12首>></font></span>',
                    24: '璃月.mp3',
                    25: '美梦抚归人 (望舒夜间).mp3',
                    26: '山阴漫步.mp3',
                    27: '尘世闲游.mp3',
                    28: '麟跃幽岩.mp3',
                    29: '烈火急烹.mp3',
                    30: '高贵的诀别.mp3',
                    31: '创龙点睛.mp3',
                    32: '疾如猛火.mp3',
                    33: '激流逐浪.mp3',
                    34: '鲜衣游侠.mp3',
                    35: '永无谢幕的演出.mp3',
                    36: '岩壑之崩.mp3',
                    //稻妻
                    37: '<span style="color: #ffcc00"><font size =5px>稻妻音乐共7首>></font></span>',
                    38: '羁留之客.mp3',
                    39: '乡愁如丝.mp3',
                    40: '翩翩之庭.mp3',
                    41: '哀哉鼓角未曾歇.mp3',
                    42: '空行不羁.mp3',
                    43: '难逃之阵.mp3',
                    44: '驱敌逐北.mp3',
                },
                onclick(item) {
                    game.saveConfig('extension_倾国倾城_qgqc_beijingyinyue', item);
                    game.jyplayBackgroundMusic();
                    ui.backgroundMusic.addEventListener('ended', game.jyplayBackgroundMusic);
                },
            },
            //切换卡背
            qgqc_qiehuankabei: {
                name: '<img style=width:100px src=extension/倾国倾城/image/qiehuanyouxikabei.png>',
                intro: '可以根据自己的喜好选择卡背样式(切换后重启生效).',
                init: 'qgqc_kb1',
                item: {
                    qgqc_kb1: '刻睛杀',
                    qgqc_kb2: '倾国倾城',
                    qgqc_kb3: '八卦',
                    qgqc_kb4: '无名杀',
                    qgqc_kb5: '三国杀1',
                    qgqc_kb6: '三国杀2',
                    qgqc_kb7: '三国杀3',
                    qgqc_kb8: '三国杀4',
                    qgqc_kb9: '三国杀5',
                    qgqc_kb0: '系统默认',
                },
                onclick(item) {
                    game.saveConfig('extension_倾国倾城_qgqc_qiehuankabei', item);
                },
                visualMenu(node, link) {
                    node.style.height = node.offsetWidth * 1.4 + 'px';
                    node.style.backgroundSize = '100% 100%';
                    node.className = 'button character incardback';
                    node.setBackgroundImage('extension/倾国倾城/image/cardback/' + link + '.jpg');
                },
            },
            //阶段提示
            qgqc_jieduantishi: {
                name: '<img style=width:80px src=extension/倾国倾城/image/jieduantishi.png>',
                intro: '开启后重启游戏生效.自己回合开始后显示每个阶段.<br>代码来自:俺杀',
                init: false,
            },
            扩展功能: {
                name: '<img style=width:150px src=extension/倾国倾城/image/kuozhangongneng.png>',
                intro: '',
                init: true,
                clear: true,
            },
            //进攻动作
            qgqc_jingongdongzuo: {
                name: '<img style=width:100px src=extension/倾国倾城/image/jingongdongzuo.png>',
                intro: '开启后重启游戏生效.当你或者敌人造成伤害时头像会冲上去进行亲密接触.',
                init: false,
            },
            //乐不思蜀特效
            qgqc_lebusishu: {
                name: '<img style=width:100px src=extension/倾国倾城/image/lebusishutexiao.png>',
                init: false,
            },
            //铁索连环特效
            qgqc_tiesuolianhuan: {
                name: '<img style=width:100px src=extension/倾国倾城/image/tiesuolianhuantexiao.png>',
                init: false,
            },
            //角色聊天
            qgqc_jueseliaotian: {
                name: '<img style=width:100px src=extension/倾国倾城/image/jueseouerliaotian.png>',
                init: '3',
                intro: '让全场角色嗨起来.<br>代码来自•祖安武将',
                item: { 1: '<span style="color: #f9ed89"><font size =4px>关闭</font></span>', 2: '<span style="color: #f9ed89"><font size =4px>寡言</font></span>', 3: '<span style="color: #f9ed89"><font size =4px>话唠</font></span>' },
            },
            //小团团音效
            qgqc_huanleyinxiao: {
                name: '<img style=width:100px src=extension/倾国倾城/image/xiaotuantuanyinxiao.png>',
                intro: '玩家角色的出牌阶段开始时,小团团会问你准备好了么;非玩家角色阵亡时小团团会给予安慰',
                init: false,
            },
            //受伤音效
            qgqc_shoushang: {
                name: '<img style=width:80px src=extension/倾国倾城/image/shoushangyinxiao.jpg>',
                intro: '男武将女武将受伤后将播放不同音效.',
                init: false,
            },
            //开场特效
            qgqc_kaichangtexiao: {
                name: '<img style=width:100px src=extension/倾国倾城/image/youxikaichangtexiao.png>',
                intro: '开启后重启游戏生效.游戏的第一轮开始时会播放开场动画、音效',
                init: false,
            },
            //击杀特效
            qgqc_jishatexiao: {
                name: '<img style=width:100px src=extension/倾国倾城/image/juesejishatexiao.png>',
                intro: '场上有人击杀另一名角色后会播放动画',
                init: false,
            },
            游戏模式: {
                name: '<img style=width:150px src=extension/倾国倾城/image/youximoshi.png>',
                intro: '',
                init: true,
                clear: true,
            },
            //随机武将
            qgqc_sjwjp: {
                name: '<img style=width:100px src=extension/倾国倾城/image/suijiwujiang.png>',
                intro: '每轮开始时,所有角色随机替换武将牌',
                init: false,
            },
            //将灵模式
            qgqc_yinglingfuhun: {
                name: '<img style=width:100px src=extension/倾国倾城/image/jianglingmoshi.png>',
                intro: '所有的角色在游戏开始或进入游戏时,各从六名随机武将中选一名当作<将灵>并获得其所有的技能',
                init: false,
            },
            //万法模式
            qgqc_wanfa: {
                name: '<img style=width:100px src=extension/倾国倾城/image/wanfamoshi.png>',
                intro: '所有的角色在回合开始时,选择一个势力并选择八名武将牌上的二个技能直到下个回合开始',
                init: false,
            },
            //玉璋护盾
            ystxb_yzhd: {
                name: '<img style=width:100px src=extension/倾国倾城/image/yuzhanghudun.png>',
                intro: '开启后重启游戏生效.来自钟离的祝福,游戏开始前所有角色获得4层玉璋护盾「当受到伤害时免伤,改为扣除相应层数护盾」.',
                init: false,
            },
            //太虚幻境
            qgqc_taixuhuanjing: {
                name: '<img style=width:100px src=extension/倾国倾城/image/taixuhuanjing.png>',
                intro: '<span style="color: #f9ed89"><font size =3px>【太虚幻境】:<li>玩家在游戏开始时>><br>从[史诗•精品]混合技能库中选择一项技能获得之.<li>玩家首次造成伤害时>><br>从[精品]技能库中选择一项技能获得之.<li>玩家首次受到伤害时>><br>从[精品]技能库中选择一项技能获得之<li>首次有其他角色死亡时>><br>从[史诗]技能库中选择一项技能获得之.</font></span>',
                init: false,
            },
            //幻化模式
            qgqc_huanhuamoshi: {
                name: '<img style=width:100px src=extension/倾国倾城/image/huanhuamoshi.png>',
                intro: '<span style="color: #f9ed89"><font size =3px>【幻化模式】:<li>玩家在游戏开始时>><br>从没上场的的五名魏势力武将所有技能中选择一项技能获得之.<li>玩家首次造成伤害时>><br>从没上场的的五名蜀势力武将所有技能中选择一项技能获得之.<li>玩家首次受到伤害时>><br>从没上场的的五名吴势力武将所有技能中选择一项技能获得之.<li>首次有其他角色死亡时>><br>从没上场的的五名神势力武将所有技能中选择一项技能获得之.</font></span>',
                init: false,
            },
        },
        package: {
            skill: {
                skill: {
                    //全局技能:进攻动作
                    qgqc_jingong: {
                        trigger: {
                            source: 'damageBefore',
                        },
                        forced: true,
                        _priority: null,
                        filter(event, player) {
                            if (player == game.me && !(lib.config.layout == 'long2' || lib.config.layout == 'nova')) return false;
                            return player != event.player && player.storage.qgqc_jingong != true;
                        },
                        content() {
                            player.storage.qgqc_jingong = true;
                            game.pause();
                            var a = player.style.transform;
                            var b = trigger.player.offsetTop;
                            var c = trigger.source.offsetTop;
                            var d = trigger.source.offsetHeight;
                            var e = trigger.player.offsetLeft;
                            var f = trigger.source.offsetLeft;
                            var g = trigger.source.offsetWidth;
                            var z = player.style.zIndex;
                            player.style.zIndex = 99;
                            if (b - c > 300 || b - c < 300) {
                                player.style.transform = 'translateY(' + (b - c) + 'px)';
                            } else if (b - c > 300) {
                                player.style.transform = 'translateY(' + (b - c + d) + 'px)';
                            } else {
                                player.style.transform = 'translateY(' + (b - c - d) + 'px)';
                            }
                            if (e < f || (f <= e && e < g))
                                player.style.transform += 'translateX(' + (e - f + g + 5) + 'px)'; //造成伤害在右,或左不够,移到右边
                            else player.style.transform += 'translateX(' + (e - f - g - 5) + 'px)';
                            setTimeout(function () {
                                if (e < f || (f <= e && e < g)) player.style.transform += ' rotate(30deg)';
                                else player.style.transform += ' rotate(-30deg)';
                                setTimeout(function () {
                                    if (!(e < f || (f <= e && e < g))) player.style.transform += ' rotate(60deg)';
                                    else player.style.transform += ' rotate(-60deg)';
                                    game.resume();
                                }, 500);
                            }, 700);
                            setTimeout(function () {
                                player.style.transform = a;
                            }, 1850);
                            setTimeout(function () {
                                delete player.storage.qgqc_jingong;
                                player.style.zIndex = z;
                            }, 2000);
                        },
                    },
                    qgqc_wanfa: {
                        //万法,全局技能
                        mark: true,
                        init(player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = [];
                        },
                        trigger: {
                            player: 'phaseBegin',
                        },
                        forced: true,
                        content() {
                            'step 0';
                            player.removeAdditionalSkill('qgqc_wanfa');
                            var next = player.chooseControl('wei', 'shu', 'wu', 'qun', 'shen');
                            next.ai = function () {
                                return Math.random();
                            };
                            next.set('prompt', '万法:请选择一个势力');
                            ('step 1');
                            if (result.control !== undefined) {
                                event.choiceGroup = result.control;
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            var list = [];
                            if (_status.characterlist) {
                                list = _status.characterlist.slice();
                            } else if (_status.connectMode) {
                                list = get.charactersOL();
                            } else {
                                for (var i in lib.character) {
                                    list.push(i);
                                }
                            }
                            var stagePlayers = game.players.concat(game.dead);
                            for (const player of stagePlayers) {
                                list.remove(player.name);
                                list.remove(player.name1);
                                list.remove(player.name2);
                            }
                            for (var i = 0; i < list.length; i++) {
                                if (lib.character[list[i]][1] != event.choiceGroup) {
                                    list.splice(i--, 1);
                                }
                            }
                            event.list1 = list.randomGets(4);
                            ('step 3');
                            var skills = [],
                                aiChoice = [];
                            for (var i = 0; i < event.list1.length; i++) {
                                var templist = lib.character[event.list1[i]][3].filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte;
                                });
                                if (templist.length == 2 && !aiChoice.length) {
                                    aiChoice = templist;
                                }
                                skills.addArray(templist);
                            }
                            if (!aiChoice) aiChoice = skills;
                            event.list2AI = aiChoice
                                .sort(function (a, b) {
                                    return get.skillRank(b) - get.skillRank(a);
                                })
                                .slice(0, 2);
                            event.list2 = skills;
                            ('step 4');
                            var switchToAuto = function () {
                                _status.imchoosing = false;
                                event._result = {
                                    bool: true,
                                    skills: event.list2AI,
                                };
                                if (event.dialog) event.dialog.close();
                                if (event.control) event.control.close();
                            };
                            var chooseButton = function (characters, skills) {
                                var event = _status.event;
                                if (!event._result) event._result = {};
                                event._result.skills = [];
                                var rSkill = event._result.skills;
                                var dialog = ui.create.dialog(`请选择获得至多${player.storage.lh_fuxiao ? '一' : '二'}项技能`, [characters, 'character'], 'hidden');
                                event.dialog = dialog;
                                var table = document.createElement('div');
                                table.classList.add('add-setting');
                                table.style.margin = '0';
                                table.style.width = '100%';
                                table.style.position = 'relative';
                                for (const skill of skills) {
                                    var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                    td.link = skill;
                                    table.appendChild(td);
                                    td.innerHTML = '<span>' + get.translation(skill) + '</span>';
                                    td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                        if (_status.dragged) return;
                                        if (_status.justdragged) return;
                                        _status.tempNoButton = true;
                                        setTimeout(function () {
                                            _status.tempNoButton = false;
                                        }, 500);
                                        if (!this.classList.contains('bluebg')) {
                                            if (rSkill.length >= (player.storage.lh_fuxiao ? 2 : 2)) return;
                                            this.classList.add('bluebg');
                                            rSkill.add(this.link);
                                        } else {
                                            this.classList.remove('bluebg');
                                            rSkill.remove(this.link);
                                        }
                                    });
                                }
                                dialog.content.appendChild(table);
                                dialog.add('　　');
                                dialog.open();
                                /*
                                event.switchToAuto=function(){
                                    event.dialog.close();
                                    event.control.close();
                                    game.resume();
                                    _status.imchoosing=false;
                                };
                                */
                                event.control = ui.create.control('ok', function (link) {
                                    event.dialog.close();
                                    event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                });
                                for (var i = 0; i < event.dialog.buttons.length; i++) {
                                    event.dialog.buttons[i].classList.add('selectable');
                                }
                                game.pause();
                                game.countChoose();
                            };
                            if (event.isMine()) {
                                chooseButton(event.list1, event.list2);
                            } else if (event.isOnline()) {
                                event.player.send(chooseButton, event.list1, event.list2);
                                event.player.wait();
                                game.pause();
                            } else {
                                switchToAuto();
                            }
                            ('step 5');
                            var map = event.result || result;
                            if (map && map.skills && map.skills.length) {
                                player.storage.qgqc_wanfa = map.skills;
                                player.addAdditionalSkill('qgqc_wanfa', map.skills);
                                for (var i = 0; i < map.skills.length; i++) {
                                    game.log(player, '获得技能', '〖' + get.translation(map.skills[i]) + '〗');
                                }
                            }
                        },
                    },
                    ystxb_yzhd: {
                        //玉璋护盾,全局技能
                        mark: true,
                        init(player) {
                            player.storage.ystxb_yzhd = 4;
                            player.storage.ystxb_yzhd2 = 0;
                        },
                        intro: {
                            content: '护盾值:#',
                        },
                        trigger: { player: 'changeHp' },
                        forced: true,
                        popup: false,
                        filter(event, player) {
                            return player.storage.ystxb_yzhd > 0 && event.parent.name == 'damage' && event.num < 0;
                        },
                        content() {
                            player.hp -= trigger.num;
                            player.update();
                            player.storage.ystxb_yzhd += trigger.num;
                            if (player.storage.ystxb_yzhd <= 0) {
                                player.unmarkSkill('ystxb_yzhd');
                            } else {
                            }
                        },
                        ai: {
                            threaten(player, target) {
                                if (target.storage.ystxb_yzhd <= 0) return 2;
                                return 1;
                            },
                        },
                    },
                    //>>>>>>>>>>>>>>>全局技能:阶段提示
                    qgqc_jieduantishi: {
                        group: ['qgqc_hhks', 'qgqc_pdjd', 'qgqc_mpjd', 'qgqc_cpjd', 'qgqc_hhjs', 'qgqc_qpjd'],
                    },
                    //回合开始
                    qgqc_hhks: {
                        trigger: {
                            player: 'phaseBegin',
                        },
                        filter(event, player) {
                            return player == game.me && _status.currentPhase == player && _status.auto == false;
                        },
                        charlotte: true,
                        forced: true,
                        content() {
                            game.as_showImage('extension/倾国倾城/image/chajiantupian/hhks.png', [3, 58, 8, 6], 999);
                        },
                    },
                    //判定阶段
                    qgqc_pdjd: {
                        trigger: {
                            player: 'phaseJudgeBegin',
                        },
                        filter(event, player) {
                            return player == game.me && _status.currentPhase == player && _status.auto == false;
                        },
                        charlotte: true,
                        forced: true,
                        content() {
                            game.as_showImage('extension/倾国倾城/image/chajiantupian/pdjd.png', [3, 58, 8, 6], 999);
                        },
                    },
                    //摸牌阶段
                    qgqc_mpjd: {
                        trigger: {
                            player: 'phaseDrawBegin',
                        },
                        filter(event, player) {
                            return player == game.me && _status.currentPhase == player && _status.auto == false;
                        },
                        charlotte: true,
                        forced: true,
                        content() {
                            game.as_showImage('extension/倾国倾城/image/chajiantupian/mpjd.png', [3, 58, 8, 6], 999);
                        },
                    },
                    //出牌阶段
                    qgqc_cpjd: {
                        trigger: {
                            player: 'phaseUseBegin',
                        },
                        filter(event, player) {
                            return player == game.me && _status.currentPhase == player && _status.auto == false;
                        },
                        charlotte: true,
                        forced: true,
                        content() {
                            game.as_showImage('extension/倾国倾城/image/chajiantupian/cpjd.png', [3, 58, 8, 6], 999);
                        },
                    },
                    //弃牌阶段
                    qgqc_qpjd: {
                        trigger: {
                            player: 'phaseDiscardBegin',
                        },
                        filter(event, player) {
                            return player == game.me && _status.currentPhase == player && _status.auto == false;
                        },
                        charlotte: true,
                        forced: true,
                        content() {
                            game.as_showImage('extension/倾国倾城/image/chajiantupian/qpjd.png', [3, 58, 8, 6], 999);
                        },
                    },
                    //回合结束
                    qgqc_hhjs: {
                        trigger: {
                            player: 'phaseEnd',
                        },
                        filter(event, player) {
                            return player == game.me && _status.currentPhase == player && _status.auto == false;
                        },
                        charlotte: true,
                        forced: true,
                        content() {
                            game.as_showImage('extension/倾国倾城/image/chajiantupian/hhjs.png', [3, 58, 8, 6], 0.5);
                        },
                    },
                    //>>>>>>>>>>>>>幻化模式
                    //游戏开始
                    qgqc_游戏开始: {
                        trigger: { global: 'gameDrawAfter' }, //时机:摸牌结束游戏开始时
                        forced: true,
                        preHidden: true,
                        content() {
                            'step 0';
                            player.awakenSkill(event.name); //开启则只触发一次获技能
                            var list;
                            if (_status.characterlist) {
                                list = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (lib.character[name][1] == 'wei') list.push(name);
                                }
                            } else if (_status.connectMode) {
                                list = get.charactersOL(function (i) {
                                    return lib.character[i][1] != 'wei';
                                });
                            } else {
                                list = get.gainableCharacters(function (info) {
                                    return info[1] == 'wei';
                                });
                            }
                            var players = game.players.concat(game.dead);
                            for (var i = 0; i < players.length; i++) {
                                list.remove(players[i].name);
                                list.remove(players[i].name1);
                                list.remove(players[i].name2);
                            }
                            list = list.randomGets(5);
                            var skills = [];
                            for (var i of list) {
                                skills.addArray(
                                    (lib.character[i][3] || []).filter(function (skill) {
                                        var info = get.info(skill);
                                        return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
                                    })
                                );
                            }
                            if (!list.length || !skills.length) {
                                event.finish();
                                return;
                            }
                            if (player.isUnderControl()) {
                                game.swapPlayerAuto(player);
                            }
                            var switchToAuto = function () {
                                _status.imchoosing = false;
                                event._result = {
                                    bool: true,
                                    skills: skills.randomGets(0),
                                };
                                if (event.dialog) event.dialog.close();
                                if (event.control) event.control.close();
                            };
                            var chooseButton = function (list, skills) {
                                var event = _status.event;
                                if (!event._result) event._result = {};
                                event._result.skills = [];
                                var rSkill = event._result.skills;
                                var dialog = ui.create.dialog('请选择获得一个技能', [list, 'character'], 'hidden');
                                event.dialog = dialog;
                                var table = document.createElement('div');
                                table.classList.add('add-setting');
                                table.style.margin = '0';
                                table.style.width = '100%';
                                table.style.position = 'relative';
                                for (var i = 0; i < skills.length; i++) {
                                    var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                    td.link = skills[i];
                                    table.appendChild(td);
                                    td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                    td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                        if (_status.dragged) return;
                                        if (_status.justdragged) return;
                                        _status.tempNoButton = true;
                                        setTimeout(function () {
                                            _status.tempNoButton = false;
                                        }, 500);
                                        var link = this.link;
                                        if (!this.classList.contains('bluebg')) {
                                            if (rSkill.length >= 1) return;
                                            rSkill.add(link);
                                            this.classList.add('bluebg');
                                        } else {
                                            this.classList.remove('bluebg');
                                            rSkill.remove(link);
                                        }
                                    });
                                }
                                dialog.content.appendChild(table);
                                dialog.add('　　');
                                dialog.open();
                                event.switchToAuto = function () {
                                    event.dialog.close();
                                    event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                };
                                event.control = ui.create.control('ok', function (link) {
                                    event.dialog.close();
                                    event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                });
                                for (var i = 0; i < event.dialog.buttons.length; i++) {
                                    event.dialog.buttons[i].classList.add('selectable');
                                }
                                game.pause();
                                game.countChoose();
                            };
                            if (event.isMine()) {
                                chooseButton(list, skills);
                            } else if (event.isOnline()) {
                                event.player.send(chooseButton, list, skills);
                                event.player.wait();
                                game.pause();
                            } else {
                                switchToAuto();
                            }
                            ('step 1');
                            var map = event.result || result;
                            if (map && map.skills && map.skills.length) {
                                for (var i of map.skills) player.addSkillLog(i);
                            }
                        },
                    },
                    //造成伤害
                    qgqc_造成伤害: {
                        trigger: { source: 'damageEnd' }, //时机:你造成伤害时
                        forced: true,
                        preHidden: true,
                        content() {
                            'step 0';
                            player.awakenSkill(event.name); //开启则只触发一次获技能
                            var list;
                            if (_status.characterlist) {
                                list = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (lib.character[name][1] == 'shu') list.push(name);
                                }
                            } else if (_status.connectMode) {
                                list = get.charactersOL(function (i) {
                                    return lib.character[i][1] != 'shu';
                                });
                            } else {
                                list = get.gainableCharacters(function (info) {
                                    return info[1] == 'shu';
                                });
                            }
                            var players = game.players.concat(game.dead);
                            for (var i = 0; i < players.length; i++) {
                                list.remove(players[i].name);
                                list.remove(players[i].name1);
                                list.remove(players[i].name2);
                            }
                            list = list.randomGets(5);
                            var skills = [];
                            for (var i of list) {
                                skills.addArray(
                                    (lib.character[i][3] || []).filter(function (skill) {
                                        var info = get.info(skill);
                                        return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
                                    })
                                );
                            }
                            if (!list.length || !skills.length) {
                                event.finish();
                                return;
                            }
                            if (player.isUnderControl()) {
                                game.swapPlayerAuto(player);
                            }
                            var switchToAuto = function () {
                                _status.imchoosing = false;
                                event._result = {
                                    bool: true,
                                    skills: skills.randomGets(0),
                                };
                                if (event.dialog) event.dialog.close();
                                if (event.control) event.control.close();
                            };
                            var chooseButton = function (list, skills) {
                                var event = _status.event;
                                if (!event._result) event._result = {};
                                event._result.skills = [];
                                var rSkill = event._result.skills;
                                var dialog = ui.create.dialog('请选择获得一个技能', [list, 'character'], 'hidden');
                                event.dialog = dialog;
                                var table = document.createElement('div');
                                table.classList.add('add-setting');
                                table.style.margin = '0';
                                table.style.width = '100%';
                                table.style.position = 'relative';
                                for (var i = 0; i < skills.length; i++) {
                                    var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                    td.link = skills[i];
                                    table.appendChild(td);
                                    td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                    td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                        if (_status.dragged) return;
                                        if (_status.justdragged) return;
                                        _status.tempNoButton = true;
                                        setTimeout(function () {
                                            _status.tempNoButton = false;
                                        }, 500);
                                        var link = this.link;
                                        if (!this.classList.contains('bluebg')) {
                                            if (rSkill.length >= 1) return;
                                            rSkill.add(link);
                                            this.classList.add('bluebg');
                                        } else {
                                            this.classList.remove('bluebg');
                                            rSkill.remove(link);
                                        }
                                    });
                                }
                                dialog.content.appendChild(table);
                                dialog.add('　　');
                                dialog.open();
                                event.switchToAuto = function () {
                                    event.dialog.close();
                                    event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                };
                                event.control = ui.create.control('ok', function (link) {
                                    event.dialog.close();
                                    event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                });
                                for (var i = 0; i < event.dialog.buttons.length; i++) {
                                    event.dialog.buttons[i].classList.add('selectable');
                                }
                                game.pause();
                                game.countChoose();
                            };
                            if (event.isMine()) {
                                chooseButton(list, skills);
                            } else if (event.isOnline()) {
                                event.player.send(chooseButton, list, skills);
                                event.player.wait();
                                game.pause();
                            } else {
                                switchToAuto();
                            }
                            ('step 1');
                            var map = event.result || result;
                            if (map && map.skills && map.skills.length) {
                                for (var i of map.skills) player.addSkillLog(i);
                            }
                        },
                    },
                    /////受到伤害
                    qgqc_受到伤害: {
                        trigger: { player: 'damageEnd' }, //时机:你受到伤害时
                        forced: true,
                        preHidden: true,
                        content() {
                            'step 0';
                            player.awakenSkill(event.name); //开启则只触发一次获技能
                            var list;
                            if (_status.characterlist) {
                                list = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (lib.character[name][1] == 'wu') list.push(name);
                                }
                            } else if (_status.connectMode) {
                                list = get.charactersOL(function (i) {
                                    return lib.character[i][1] != 'wu';
                                });
                            } else {
                                list = get.gainableCharacters(function (info) {
                                    return info[1] == 'wu';
                                });
                            }
                            var players = game.players.concat(game.dead);
                            for (var i = 0; i < players.length; i++) {
                                list.remove(players[i].name);
                                list.remove(players[i].name1);
                                list.remove(players[i].name2);
                            }
                            list = list.randomGets(5);
                            var skills = [];
                            for (var i of list) {
                                skills.addArray(
                                    (lib.character[i][3] || []).filter(function (skill) {
                                        var info = get.info(skill);
                                        return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
                                    })
                                );
                            }
                            if (!list.length || !skills.length) {
                                event.finish();
                                return;
                            }
                            if (player.isUnderControl()) {
                                game.swapPlayerAuto(player);
                            }
                            var switchToAuto = function () {
                                _status.imchoosing = false;
                                event._result = {
                                    bool: true,
                                    skills: skills.randomGets(0),
                                };
                                if (event.dialog) event.dialog.close();
                                if (event.control) event.control.close();
                            };
                            var chooseButton = function (list, skills) {
                                var event = _status.event;
                                if (!event._result) event._result = {};
                                event._result.skills = [];
                                var rSkill = event._result.skills;
                                var dialog = ui.create.dialog('请选择获得一个技能', [list, 'character'], 'hidden');
                                event.dialog = dialog;
                                var table = document.createElement('div');
                                table.classList.add('add-setting');
                                table.style.margin = '0';
                                table.style.width = '100%';
                                table.style.position = 'relative';
                                for (var i = 0; i < skills.length; i++) {
                                    var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                    td.link = skills[i];
                                    table.appendChild(td);
                                    td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                    td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                        if (_status.dragged) return;
                                        if (_status.justdragged) return;
                                        _status.tempNoButton = true;
                                        setTimeout(function () {
                                            _status.tempNoButton = false;
                                        }, 500);
                                        var link = this.link;
                                        if (!this.classList.contains('bluebg')) {
                                            if (rSkill.length >= 1) return;
                                            rSkill.add(link);
                                            this.classList.add('bluebg');
                                        } else {
                                            this.classList.remove('bluebg');
                                            rSkill.remove(link);
                                        }
                                    });
                                }
                                dialog.content.appendChild(table);
                                dialog.add('　　');
                                dialog.open();
                                event.switchToAuto = function () {
                                    event.dialog.close();
                                    event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                };
                                event.control = ui.create.control('ok', function (link) {
                                    event.dialog.close();
                                    event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                });
                                for (var i = 0; i < event.dialog.buttons.length; i++) {
                                    event.dialog.buttons[i].classList.add('selectable');
                                }
                                game.pause();
                                game.countChoose();
                            };
                            if (event.isMine()) {
                                chooseButton(list, skills);
                            } else if (event.isOnline()) {
                                event.player.send(chooseButton, list, skills);
                                event.player.wait();
                                game.pause();
                            } else {
                                switchToAuto();
                            }
                            ('step 1');
                            var map = event.result || result;
                            if (map && map.skills && map.skills.length) {
                                for (var i of map.skills) player.addSkillLog(i);
                            }
                        },
                    },
                    //有角色死亡时
                    qgqc_角色被杀: {
                        trigger: { global: 'die' }, //时机:当一名角色死亡后
                        forced: true,
                        preHidden: true,
                        content() {
                            'step 0';
                            player.awakenSkill(event.name); //开启则只触发一次获技能
                            var list;
                            if (_status.characterlist) {
                                list = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (lib.character[name][1] == 'shen') list.push(name);
                                }
                            } else if (_status.connectMode) {
                                list = get.charactersOL(function (i) {
                                    return lib.character[i][1] != 'shen';
                                });
                            } else {
                                list = get.gainableCharacters(function (info) {
                                    return info[1] == 'shen';
                                });
                            }
                            var players = game.players.concat(game.dead);
                            for (var i = 0; i < players.length; i++) {
                                list.remove(players[i].name);
                                list.remove(players[i].name1);
                                list.remove(players[i].name2);
                            }
                            list = list.randomGets(5);
                            var skills = [];
                            for (var i of list) {
                                skills.addArray(
                                    (lib.character[i][3] || []).filter(function (skill) {
                                        var info = get.info(skill);
                                        return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
                                    })
                                );
                            }
                            if (!list.length || !skills.length) {
                                event.finish();
                                return;
                            }
                            if (player.isUnderControl()) {
                                game.swapPlayerAuto(player);
                            }
                            var switchToAuto = function () {
                                _status.imchoosing = false;
                                event._result = {
                                    bool: true,
                                    skills: skills.randomGets(0),
                                };
                                if (event.dialog) event.dialog.close();
                                if (event.control) event.control.close();
                            };
                            var chooseButton = function (list, skills) {
                                var event = _status.event;
                                if (!event._result) event._result = {};
                                event._result.skills = [];
                                var rSkill = event._result.skills;
                                var dialog = ui.create.dialog('请选择获得一个技能', [list, 'character'], 'hidden');
                                event.dialog = dialog;
                                var table = document.createElement('div');
                                table.classList.add('add-setting');
                                table.style.margin = '0';
                                table.style.width = '100%';
                                table.style.position = 'relative';
                                for (var i = 0; i < skills.length; i++) {
                                    var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                    td.link = skills[i];
                                    table.appendChild(td);
                                    td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                    td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                        if (_status.dragged) return;
                                        if (_status.justdragged) return;
                                        _status.tempNoButton = true;
                                        setTimeout(function () {
                                            _status.tempNoButton = false;
                                        }, 500);
                                        var link = this.link;
                                        if (!this.classList.contains('bluebg')) {
                                            if (rSkill.length >= 1) return;
                                            rSkill.add(link);
                                            this.classList.add('bluebg');
                                        } else {
                                            this.classList.remove('bluebg');
                                            rSkill.remove(link);
                                        }
                                    });
                                }
                                dialog.content.appendChild(table);
                                dialog.add('　　');
                                dialog.open();
                                event.switchToAuto = function () {
                                    event.dialog.close();
                                    event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                };
                                event.control = ui.create.control('ok', function (link) {
                                    event.dialog.close();
                                    event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                });
                                for (var i = 0; i < event.dialog.buttons.length; i++) {
                                    event.dialog.buttons[i].classList.add('selectable');
                                }
                                game.pause();
                                game.countChoose();
                            };
                            if (event.isMine()) {
                                chooseButton(list, skills);
                            } else if (event.isOnline()) {
                                event.player.send(chooseButton, list, skills);
                                event.player.wait();
                                game.pause();
                            } else {
                                switchToAuto();
                            }
                            ('step 1');
                            var map = event.result || result;
                            if (map && map.skills && map.skills.length) {
                                for (var i of map.skills) player.addSkillLog(i);
                            }
                        },
                    },
                    //>>>>>>>>>>>>>太虚幻境,全局技能
                    游戏开始技能1: {
                        trigger: { global: 'gameStart' }, //时机:未摸牌游戏开始时
                        forced: true,
                        preHidden: true,
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        content() {
                            'step 0';
                            //player.$fullscreenpop('请选择技能','fire')
                            player.awakenSkill(event.name); //开启则只触发一次获技能
                            player
                                .chooseControl(
                                    'xinshanjia', //曹纯:缮甲
                                    'gzjili', //沙摩柯:蒺藜
                                    'fenyin', //留赞:奋音
                                    'gnjinfan', //星甘宁:锦帆
                                    'xinfu_pingcai', //庞德公:评才
                                    'kaikang', //曹昂:慷慨
                                    'chengxiang', //曹冲:称象
                                    'rejizhi' //黄月英:集智
                                )
                                .set('prompt', '<span style=\"color: #f9ed89\"><font size =5px>精品•史诗混合技能库:注意此列表技能游戏开始时选择一次后将不会再出现",请选择</font></span>')
                                .set('ai', function () {
                                    var player = _status.event.player;
                                    return ''; //ai选择技能
                                });
                            ('step 1');
                            player.addSkillLog(result.control);
                        },
                    },
                    //>>>>>>>>>>>>>>>>>>>>
                    伤害技能1: {
                        trigger: { source: 'damageEnd' }, //时机:你造成伤害时
                        forced: true,
                        preHidden: true,
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        content() {
                            'step 0';
                            //player.$fullscreenpop('请选择技能','fire')
                            player.awakenSkill(event.name); //开启则只触发一次获技能
                            player
                                .chooseControl(
                                    'zhongzuo', //贾逵:忠佐
                                    'reshuishi', //神郭嘉:慧识
                                    'drlt_jieying', //神甘宁:劫营
                                    'relonghun', //神赵云:龙魂
                                    'drlt_zhengu', //郝昭:镇骨
                                    'wushuang', //界吕布:无双
                                    'retieji', //界马超:铁骑
                                    'rezhiheng', //界孙权:制衡
                                    'rezhiyi', //张翼:执义
                                    'xinxhzhiyan' //星徐晃:治严
                                )
                                .set('prompt', '<span style=\"color: #f9ed89\"><font size =5px>精品级技能库:注意此列表技能当你本局游戏首次造成伤害和首次受到后可以获取各一次后将不会出现,请选择</font></span>')
                                .set('ai', function () {
                                    var player = _status.event.player;
                                    return '';
                                });
                            ('step 1');
                            player.addSkillLog(result.control);
                        },
                    },
                    //>>>>>>>>>>>>>>>>>>>>
                    伤害技能2: {
                        trigger: { player: 'damageEnd' }, //时机:你受到伤害时
                        forced: true,
                        preHidden: true,
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        content() {
                            'step 0';
                            //player.$fullscreenpop('请选择技能','fire')
                            player.awakenSkill(event.name); //开启则只触发一次获技能
                            player
                                .chooseControl(
                                    'zhongzuo', //贾逵:忠佐
                                    'reshuishi', //神郭嘉:慧识
                                    'drlt_jieying', //神甘宁:劫营
                                    'relonghun', //神赵云:龙魂
                                    'drlt_zhengu', //郝昭:镇骨
                                    'wushuang', //界吕布:无双
                                    'retieji', //界马超:铁骑
                                    'rezhiheng', //界孙权:制衡
                                    'rezhiyi', //张翼:执义
                                    'xinxhzhiyan' //星徐晃:治严
                                )
                                .set('prompt', '<span style=\"color: #f9ed89\"><font size =5px>精品级技能库:注意此列表技能当你本局游戏首次造成伤害和首次受到后可以获取各一次后将不会出现,请选择</font></span>')
                                .set('ai', function () {
                                    var player = _status.event.player;
                                    return '';
                                });
                            ('step 1');
                            player.addSkillLog(result.control);
                        },
                    },
                    //>>>>>>>>>>>>>
                    击杀技能1: {
                        trigger: { global: 'die' }, //时机:当一名角色死亡后
                        forced: true,
                        preHidden: true,
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        content() {
                            'step 0';
                            //player.$fullscreenpop('请选择技能','fire')
                            player.awakenSkill(event.name); //开启则只触发一次获技能
                            player
                                .chooseControl(
                                    'repojun', //界徐盛:破军
                                    'xinfu_lingren', //曹婴:凌人
                                    'zhaohan', //杨彪:召汉
                                    'qiaosi' //马钧:巧思
                                )
                                .set('prompt', '<span style=\"color: #f9ed89\"><font size =5px>史诗级技能库:注意此列表技能当本局游戏场上有角色首次死亡后可选择一次后将不再出现,请选择</font></span>')
                                .set('ai', function () {
                                    var player = _status.event.player;
                                    return '';
                                });
                            ('step 1');
                            player.addSkillLog(result.control);
                        },
                    },
                    //>>>>>>>>>>>>>
                    /*技能库
                                        "ys_真说",//雷电将军:梦想真说
                                        "repojun",//界徐盛:破军
                                        "xinshanjia",//曹纯:缮甲
                                        "gzjili",//沙摩柯:蒺藜
                                        "fenyin",//留赞:奋音
                                         "kaikang",//曹昂:慷慨
                                         "xinfu_lingren",//曹婴:凌人
                                         "chengxiang",//曹冲:称象
                                         "wushuang",//界吕布:无双
                                         "qiaosi",//马钧:巧思
                                         "zhongzuo",//贾逵:忠佐
                                         "drlt_zhengu",//郝昭:镇骨
                                         "retieji",//界马超:铁骑
                                         "rezhiheng",//界孙权:制衡
                                         "xinfu_pingcai",//庞德公:评才
                                         "rezhiyi",//张翼:执义
                                         "xinxhzhiyan",//星徐晃:治严
                                         "qinzheng",//洛统:勤政
                                         "reshuishi",//神郭嘉:慧识
                                         "drlt_jieying",//神甘宁:劫营
                                         "relonghun",//神赵云:龙魂
                                         "shenfu",//神甄姬:神赋
                                         "zhaohan",//杨彪:召汉
                                         "gnjinfan",//星甘宁:锦帆
                                         "rejizhi",//黄月英:集智
                    技能库*/
                    //>>>>>>>>>>>>>>
                    //秒杀技能
                    秒杀: {
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        forced: true,
                        content() {
                            var bool = false;
                            if (player == game.me) bool = true;
                            else
                                switch (get.mode()) {
                                    case 'identity': {
                                        game.showIdentity();
                                        var id1 = player.identity;
                                        var id2 = game.me.identity;
                                        if (['zhu', 'zhong', 'mingzhong'].includes(id1)) {
                                            if (['zhu', 'zhong', 'mingzhong'].includes(id2)) bool = true;
                                            break;
                                        } else if (id1 == 'fan') {
                                            if (id2 == 'fan') bool = true;
                                            break;
                                        }
                                        break;
                                    }
                                    case 'guozhan': {
                                        if (game.me.isFriendsOf(player)) bool = true;
                                        break;
                                    }
                                    case 'versus': {
                                        if (player.side == game.me.side) bool = true;
                                        break;
                                    }
                                    case 'boss': {
                                        if (player.side == game.me.side) bool = true;
                                        break;
                                    }
                                    default: {
                                    }
                                }
                            game.over(bool);
                        },
                    },
                    //受伤音效:全局技能
                    //受伤音效>>男
                    shoushangnan: {
                        audio: 'ext:倾国倾城/配音:2',
                        trigger: { player: 'damageEnd' },
                        forced: true,
                        preHidden: true,
                        filter(event, player) {
                            return player.sex == 'male';
                        },
                        content() {
                            player.say('<span style=\"color: #f9ed89\"><font size =5px>可恶!</font></span>');
                        },
                    },
                    //受伤音效>>女
                    shoushangnv: {
                        audio: 'ext:倾国倾城/配音:2',
                        trigger: { player: 'damageEnd' },
                        forced: true,
                        preHidden: true,
                        filter(event, player) {
                            return player.sex == 'female';
                        },
                        content() {
                            player.say('<span style=\"color: #f9ed89\"><font size =5px>好痛!</font></span>');
                        },
                    },
                },
                translate: {
                    ystxb_yzhd: '玉璋',
                    ystxb_yzhd_info: '',
                    秒杀: '秒杀',
                    秒杀_info: '你的回合开始时,你所在的阵营直接获得游戏胜利',
                },
            },
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '<img style=width:100px src=extension/倾国倾城/image/zheyuezuiqingcheng.png>',
            version: '5.6',
        },
    };
});
/*     不想打代码了,应该也是没多少人玩这个扩展吧,对于一个究极缝合怪来说写这么个扩展其实还蛮费力的.
       以后半退坑啦,想起来了就玩玩,应该不会再弄代码了,毕竟复制粘贴再魔改找报错原因实在是比直接写废眼睛啊.
       这行字能看到的人应该不多吧,毕竟冷门扩展嘛,下了会打开看的人就更少啦.
       应该是从21年一月份开始的吧,最先我拿群里的魔改左慈扩展自己改,往里头加了点原神同人武将,还带了全屏开局特效,其实就是改游戏背景图,加的多了就直接改名神包,觉得挺有意思的就发在了群里,突然发现有蛮多人玩的,说实话我好开心的.
       原神同人之后我又用比较好看的图做了几个武将,毕竟不怎么会代码所以技能难写,我就直接复制粘贴官方原版技能再改技能名字,一次性做了五十几个官方武将,全用好看的网图.想了想扩展直接改名倾国倾城,发布倾国倾城1.0正式版.
       随后我就发现有些群友安装不了扩展,当晚我连夜将扩展框架换了,这次用的是文武英杰扩展的框架,我把1.0所有的东西都挪了进去,又加了些功能,发布了倾国倾城2.0.
       2.0发布后依旧有人反应不能安装,我就又改了一次框架,这次用的金庸群侠传的框架模式.修修改改,缝缝补补,发布了3.0.
       3.0之后我太累了,这次断更了五个多月吧,这个期间扩展里我自己+的功能武将一大堆,光武将包就多达7个有的皮肤只有露头版,有的只有普通版,排版也杂乱无章,自己用没啥问题,发布上肯定不行的,所以就躺平了,不再更新.
       后来有人催我更新了,我想着还是有人记得这个扩展的,就花了一天大改,删了不少东西,就发布了.
       从这时开始我就像开启了狂更模式,一个月内更新了八次,越更新越感觉空洞,无名杀现在优秀的扩展太多了,功能越加越重合化,有创意的我想到了,写不出来,毕竟我只是会改,不会写啊.
       直到今天,我终于做出了决定,5.6就是最终版了,此后不再更新啦.算起来,再过一个月这个扩展就一岁了,现在看来过不了周岁了.
       就这样吧,希望无名杀以后越做越好.
       */

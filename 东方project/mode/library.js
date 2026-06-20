import { lib, game, ui, get, ai, _status } from '../../../noname.js';
game.addMode(
    'library',
    {
        game: {
            syncMenu: true,
        },
        start() {
            ui.auto.hide();
            if (!lib.storage.scene) {
                lib.storage.scene = {};
            }
            if (!lib.storage.stage) {
                lib.storage.stage = {};
            }
            if (!_status.extensionmade) {
                _status.extensionmade = [];
            }
            if (_status.extensionscene) {
                game.save('scene', lib.storage.scene);
            }
            if (_status.extensionstage) {
                game.save('stage', lib.storage.stage);
            }
            var dialog = ui.create.dialog('hidden');
            dialog.classList.add('fixed');
            dialog.classList.add('scroll1');
            dialog.classList.add('scroll2');
            dialog.classList.add('fullwidth');
            dialog.classList.add('fullheight');
            dialog.classList.add('noupdate');
            dialog.classList.add('character');
            dialog.contentContainer.style.overflow = 'visible';
            dialog.style.overflow = 'scroll';
            dialog.content.style.height = '100%';
            dialog.contentContainer.style.transition = 'all 0s';
            if (!lib.storage.directStage) dialog.open();
            var packnode = ui.create.div('.packnode', dialog);
            lib.setScroll(packnode);
            ui.background.setBackgroundImage('extension/东方project/image/gezi_library.jpg');
            //背景图片
            var clickCapt = function () {
                var active = this.parentNode.querySelector('.active');
                if (this.link == 'stage') {
                    if (get.is.empty(lib.storage.scene)) {
                        alert('请创建至少1个场景');
                        return;
                    }
                }
                if (active) {
                    if (active == this) return;
                    for (let i = 0; i < active.nodes.length; i++) {
                        active.nodes[i].remove();
                        if (active.nodes[i].showcaseinterval) {
                            clearInterval(active.nodes[i].showcaseinterval);
                            delete active.nodes[i].showcaseinterval;
                        }
                    }
                    active.classList.remove('active');
                }
                this.classList.add('active');
                for (let i = 0; i < this.nodes.length; i++) {
                    dialog.content.appendChild(this.nodes[i]);
                }
                var showcase = this.nodes[this.nodes.length - 1];
                showcase.style.height = dialog.content.offsetHeight - showcase.offsetTop + 'px';
                if (typeof showcase.action == 'function') {
                    if (showcase.action(showcase._showcased ? false : true) !== false) {
                        showcase._showcased = true;
                    }
                }
                if (this._nostart) start.show();
                else start.hide();
                game.save('currentLibrary', 'help');
            };
            // 应该是这里是制作列表的地方
            var createNode = function (name) {
                var info = lib.library[name];
                var node = ui.create.div('.dialogbutton.menubutton.large', info.name, packnode, clickCapt);
                node.style.transition = 'all 0s';
                var caption = info.name;
                var modeinfo = '';
                if (info.mode) {
                    modeinfo = get.translation(info.mode) + '模式'; // 这个是标注哪个模式下使用的
                }
                if (info.submode) {
                    if (modeinfo) {
                        modeinfo += ' - ';
                    }
                    modeinfo += info.submode;
                }
                var intro;
                if (Array.isArray(info.intro)) {
                    intro = '<ul style="text-align:left;margin-top:0">';
                    if (modeinfo) {
                        intro += '<li>' + modeinfo;
                    }
                    for (let i = 0; i < info.intro.length; i++) {
                        intro += '<br>' + info.intro[i];
                    }
                } else {
                    intro = '';
                    if (modeinfo) {
                        intro += '(' + modeinfo + ')';
                    }
                    intro += info.intro;
                }
                var today = new Date();
                var i = ui.create.div('.text center', intro);
                i.style.overflow = 'scroll';
                i.style.margin = '0px';
                i.style.padding = '0px';
                var showcase = ui.create.div();
                showcase.style.margin = '0px';
                showcase.style.padding = '0px';
                showcase.style.width = '100%';
                showcase.style.display = 'block';
                showcase.style.overflow = 'scroll';
                showcase.action = info.showcase;
                showcase.link = name;
                if (info.fullshow) {
                    node.nodes = [showcase];
                    showcase.style.height = '100%';
                } else {
                    node.nodes = [i, showcase];
                }
                node.link = name;
                node._nostart = info.nostart;
                if (lib.storage.currentLibrary == name) {
                    clickCapt.call(node);
                }
                return node;
            };
            // 点那个巨大的<斗>之后
            var clickStart = function () {
                // dialog.delete();
                // ui.auto.show();
                // game.switchModen(info.mode);
                var active = packnode.querySelector('.active');
                if (active) {
                    for (let i = 0; i < active.nodes.length; i++) {
                        if (active.nodes[i].showcaseinterval) {
                            clearInterval(active.nodes[i].showcaseinterval);
                            delete active.nodes[i].showcaseinterval;
                        }
                    }
                    var info;
                    if (active.link.indexOf('stage_') == 0) {
                        var level;
                        if (Array.isArray(arguments[0])) {
                            level = {
                                index: arguments[0][1],
                            };
                        } else {
                            level = dialog.content.querySelector('.menubutton.large.active');
                        }
                        if (level) {
                            var stagesave = lib.storage.stage;
                            var stage = stagesave[active.link.slice(6)];
                            game.save('lastStage', level.index);
                            lib.onover.push(function (bool) {
                                _status.createControl = ui.controls[0];
                                if (bool && level.index + 1 < stage.scenes.length) {
                                    ui.create.control('下一关', function () {
                                        game.save('directStage', [stage.name, level.index + 1], 'library');
                                        localStorage.setItem(lib.configprefix + 'directstart', true);
                                        game.reload();
                                    });
                                    if (level.index + 1 > stage.level) {
                                        stage.level = level.index + 1;
                                        game.save('stage', stagesave, 'library');
                                    }
                                    if (stage.mode != 'sequal') {
                                        game.save('lastStage', level.index + 1, 'library');
                                    }
                                } else {
                                    ui.create.control('重新开始', function () {
                                        if (stage.mode == 'sequal' && bool && level.index == stage.scenes.length - 1) {
                                            game.save('directStage', [stage.name, 0], 'library');
                                        } else {
                                            game.save('directStage', [stage.name, level.index], 'library');
                                        }
                                        localStorage.setItem(lib.configprefix + 'directstart', true);
                                        game.reload();
                                    });
                                    if (stage.mode == 'sequal' && level.index == stage.scenes.length - 1) {
                                        stage.level = 0;
                                        game.save('stage', stagesave, 'library');
                                    }
                                    if (stage.mode != 'sequal') {
                                        game.save('lastStage', level.index, 'library');
                                    }
                                }
                                delete _status.createControl;
                            });
                            var scene = stage.scenes[level.index];
                            info = {
                                name: scene.name,
                                intro: scene.intro,
                            };
                            for (var i in lib.library.scene.template) {
                                info[i] = get.copy(lib.library.scene.template[i]);
                            }
                            if (!scene.gameDraw) {
                                info.content.noGameDraw = true;
                            }
                            info.content.scene = scene;
                        } else {
                            return;
                        }
                    } else {
                        info = lib.library[active.link];
                    }
                    lib.translate.restart = '返回';
                    dialog.delete();
                    ui.libraryinfo = ui.create.system('图鉴', null, true);
                    lib.setPopped(
                        ui.libraryinfo,
                        function () {
                            var uiintro = ui.create.dialog('hidden');
                            uiintro.add(info.name);
                            var intro;
                            if (Array.isArray(info.intro)) {
                                intro = '<ul style="text-align:left;margin-top:0;width:450px">';
                                for (let i = 0; i < info.intro.length; i++) {
                                    intro += '<li>' + info.intro[i];
                                }
                                intro += '</ul>';
                            } else {
                                intro = info.intro;
                            }
                            uiintro.add('<div class="text center">' + intro + '</div>');
                            var ul = uiintro.querySelector('ul');
                            if (ul) {
                                ul.style.width = '180px';
                            }
                            uiintro.add(ui.create.div('.placeholder'));
                            return uiintro;
                        },
                        250
                    );
                    ui.auto.show();
                    _status.library = info.content;
                    game.switchModen(info.mode);
                    if (info.init) {
                        info.init();
                    }
                }
            };
            // 制作那个<斗>的键的.去掉会出bug,不知道为什么
            var start = ui.create.div('.menubutton.round.highlight', '斗', dialog.content, clickStart);
            start.style.position = 'absolute';
            start.style.left = 'auto';
            start.style.right = '20px';
            start.style.top = 'auto';
            start.style.bottom = '20px';
            start.style.width = '80px';
            start.style.height = '80px';
            start.style.lineHeight = '80px';
            start.style.margin = '0';
            start.style.padding = '5px';
            start.style.fontSize = '72px';
            start.style.zIndex = 3;
            start.style.transition = 'all 0s';
            start.hide();
            game.addScene = function (name, clear) {
                var scene = lib.storage.scene[name];
                var library = {
                    name: name,
                    intro: scene.intro,
                };
                for (var i in lib.library.scene.template) {
                    library[i] = get.copy(lib.library.scene.template[i]);
                }
                if (!scene.gameDraw) {
                    library.content.noGameDraw = true;
                }
                library.content.scene = scene;
                lib.library['scene_' + name] = library;
                var node = createNode('scene_' + name);
                if (clear) {
                    game.addSceneClear();
                    clickCapt.call(node);
                    _status.sceneChanged = true;
                }
            };
            game.addStage = function (name, clear) {
                var stage = lib.storage.stage[name];
                var library = {
                    name: name,
                    intro: stage.intro,
                    content: {},
                };
                for (var i in lib.library.stage.template) {
                    library[i] = get.copy(lib.library.stage.template[i]);
                }
                library.content.stage = stage;
                lib.library['stage_' + name] = library;
                var node = createNode('stage_' + name);
                if (clear) {
                    game.addStageClear();
                    clickCapt.call(node);
                }
            };
            game.removeScene = function (name) {
                delete lib.storage.scene[name];
                game.save('scene', lib.storage.scene);
                _status.sceneChanged = true;
                for (let i = 0; i < packnode.childElementCount; i++) {
                    if (packnode.childNodes[i].link == 'scene_' + name) {
                        if (packnode.childNodes[i].classList.contains('active')) {
                            for (var j = 0; j < packnode.childElementCount; j++) {
                                if (packnode.childNodes[j].link == 'scene') {
                                    clickCapt.call(packnode.childNodes[j]);
                                }
                            }
                        }
                        packnode.childNodes[i].remove();
                        break;
                    }
                }
            };
            game.removeStage = function (name) {
                delete lib.storage.stage[name];
                game.save('stage', lib.storage.stage);
                for (let i = 0; i < packnode.childElementCount; i++) {
                    if (packnode.childNodes[i].link == 'stage_' + name) {
                        if (packnode.childNodes[i].classList.contains('active')) {
                            for (var j = 0; j < packnode.childElementCount; j++) {
                                if (get.is.empty(lib.storage.scene)) {
                                    if (packnode.childNodes[j].link == 'scene') {
                                        clickCapt.call(packnode.childNodes[j]);
                                    }
                                } else {
                                    if (packnode.childNodes[j].link == 'stage') {
                                        clickCapt.call(packnode.childNodes[j]);
                                    }
                                }
                            }
                        }
                        packnode.childNodes[i].remove();
                        break;
                    }
                }
            };
            var sceneNode;
            for (var i in lib.library) {
                if (get.config(i) === false) continue;
                if (i == 'scene') {
                    sceneNode = createNode(i);
                } else {
                    if (i == 'updatelog' && location.hostname && !lib.device) continue;
                    if (i == 'downloadlog' && (!location.hostname || lib.device)) continue;
                    createNode(i);
                }
            }
            if (sceneNode) {
                game.switchScene = function () {
                    clickCapt.call(sceneNode);
                };
            }
            for (var i in lib.storage.scene) {
                game.addScene(i);
            }
            for (var i in lib.storage.stage) {
                game.addStage(i);
            }
            if (!lib.storage.currentLibrary) {
                clickCapt.call(packnode.firstChild);
            }
            game.save('lastStage');
            if (lib.storage.directStage) {
                var directStage = lib.storage.directStage;
                game.save('directStage');
                clickStart(directStage);
            }
            if (lib.config.background_music != 'music_off' && get.config('musicopen')) {
                var today = new Date();
                if (today.getMonth() == 9) {
                    game.playnBackgroundMusic('gezi_baka');
                } else {
                    game.playnBackgroundMusic('gezi_library');
                }
            }
            lib.init.onfree();
        },
        library: {
            help: {
                name: '欢迎光临!',
                mode: '',
                intro: [],
                showcase(init) {
                    var node = this;
                    if (init) {
                        var player = ui.create.player(null, true);
                        lib.character.akyuu = ['female', 'shen', 3, ['library_yixiang', 'library_mengji', 'mengji'], []];
                        lib.character.akyuu[4].push('ext:东方project/image/akyuu.jpg');
                        lib.characterIntro.akyuu = '全名稗田阿求,将毕生奉献于记载幻想乡的历史的稗田家的现任家主.持有过目不忘的记忆能力.<br><b>画师:渡瀬　玲<br></b><br>现因一些原因,被赋予了幻想乡的管理员权限.不过依然是和平常一样做着记录屋的工作';
                        lib.skill.mengji = {};
                        lib.translate.mengji = '隐藏';
                        lib.translate.mengji_info = '异变模式可用,为游戏添加一到三条规则';
                        player.init('akyuu');
                        player.node.avatar.setBackgroundImage('extension/东方project/image/akyuu.jpg');
                        player.node.avatar.show();
                        player.style.left = '0px';
                        player.style.top = '0px';
                        player.style.zIndex = '10';
                        player.style.cursor = 'pointer';
                        player.node.count.remove();
                        player.node.hp.remove();
                        player.style.transition = 'all 0.5s';
                        player.onclick = function () {
                            ui.arena.classList.add('only_dialog');
                            var num;
                            if (lib.config.gameRecord.incident && lib.config.gameRecord.incident.data.akyuu) {
                                num = 3 - lib.config.gameRecord.incident.data.akyuu;
                                if (num <= 0) num = 0;
                            } else {
                                num = 3;
                            }
                            if (!lib.config.akyuu) {
                                var d = '<div><div style="width:280px;margin-left:120px;font-size:18px">抱歉,' + lib.config.connect_nickname + ',我还没有准备好呢……再因异变牌胜利' + num + '次应该就可以了.……那个,要茶吗？</div>';
                                if (num <= 0) d = '<div><div style="width:280px;margin-left:120px;font-size:18px">太好啦,' + lib.config.connect_nickname + ',我准备好了呢!快来异变模式玩吧!</div>';
                                if (lib.config.connect_nickname == '黑白葱') d = '<div><div style="width:280px;margin-left:120px;font-size:18px">主人啊……你倒是什么时候才会不摸鱼啊？</div>';
                                var dialog = ui.create.dialog(d);
                                ui.create.div('.avatar', ui.dialog).setBackground('akyuu', 'character');
                                ui.create.control('没事,不用急', function () {
                                    dialog.close();
                                    while (ui.controls.length) ui.controls[0].close();
                                    ui.arena.classList.remove('only_dialog');
                                });
                            } else {
                                var dialog = ui.create.dialog();
                                dialog.classList.add('fixed');
                                dialog.classList.add('scroll1');
                                dialog.classList.add('scroll2');
                                dialog.classList.add('fullwidth');
                                dialog.classList.add('fullheight');
                                dialog.classList.add('noupdate');
                                dialog.classList.add('character');
                                dialog.classList.remove('nobutton');
                                dialog.style.top = '0px';
                                var p = ui.create.player(null, true);
                                p.init('akyuu');
                                player.node.avatar.setBackgroundImage('extension/东方project/image/akyuu.jpg');
                                p.node.avatar.show();
                                p.style.left = '20px';
                                p.style.top = '20px';
                                p.style.zIndex = '10';
                                p.style.cursor = 'pointer';
                                p.node.count.remove();
                                p.classList.add('show');
                                lib.translate.gezi_library = '平和';
                                p.style.transition = 'all 0.5s';
                                dialog.appendChild(p);
                                ui.create.div('.config.indent', '<div><div style="width:100%;left:140px;text-align:right;font-size:18px"><b><u>至今所发生过的异变:</b></u></div>', dialog);
                                var list = [];
                                for (let i in lib.card) {
                                    if (lib.translate[i] && lib.card[i].type == 'zhenfa') {
                                        list.push(i);
                                    }
                                }
                                dialog.addText('<div><div style="display:block;top:500px;text-align:left;font-size:16px">距离阿求下一次出场还有' + num + '次异变胜利');
                                list.push('gezi_library');
                                for (let i = 0; i < list.length; i++) {
                                    if (!lib.config.gameRecord.incident.data[list[i]]) continue;
                                    var data = lib.config.gameRecord.incident.data[list[i]];
                                    ui.create.div('.config.indent', '<div><div style="width:100%;left:140px;text-align:right">' + lib.translate[list[i]] + '异变:' + data[0] + '次发生  ' + data[1] + '胜<br>', dialog);
                                }
                                var control = ui.create.control('好了,谢谢!', function () {
                                    dialog.close();
                                    while (ui.controls.length) ui.controls[0].close();
                                    ui.arena.classList.remove('only_dialog');
                                });
                                var counter = 0;
                                var f = get.rand(4);
                                p.onclick = function () {
                                    if (counter > 6) return;
                                    var h = [
                                        ['其实流星夜有个四格漫画系列,可以在贴吧,公众号上和群里找到哟', '主人没事做的时候,不仅会做漫画,也会做表情呢.所以,有有趣的情况请说给他听吧', '别看主人那个样子,该忙的时候他还是会忙的啦', '除了忙以外,灵感缺失也是一大问题呢', '不过灵感缺失的一大方面,还是因为他的要求和想法总是太奇奇怪怪吧', '不擅长弄一些正常的想法也不是坏事呢.毕竟,把我弄成这个样子……其实感觉也挺不错的呢'],
                                        ['其实游戏开始的教程是我啦.对,就是问你名字的那个.……是个不错的名字呢,' + lib.config.connect_nickname + '', '嗯？为什么我当时不露脸？主人觉得一开始不要出来那么多角色比较好.特别是,离我正式出场还有相当一段时间呢', '我是怎么成为管理员的？主人说我不能战斗,又比较擅长这一块,而我觉得做管理员也挺有趣的', '<不应该战斗那就别战斗>主人他是这么说的.确实,我也不觉得我有和其他人弹幕战的一天呢', '如果能打弹幕战会怎么样？…………虽然我不反对试新事物,但是我有更重要的事情做呢', '现在神主反常的开始高产起来了.我的工作也就自然越来越多了.没时间去参加弹幕战呢.而主人虽然也是越来越忙了,但是他却经常去乐悠悠的弹幕战.真是的……'],
                                        ['符卡和异变,是幻想乡中最重要的元素.异变推动着故事走向,亮出新人物,给已有人物追加新维度', '而符卡则是战斗的核心.酷炫以外,战斗方式也是人心的镜子.如何运用能力,如何布置弹幕,都是很体现人物性格的.符卡更是如此', '虽然符卡是有趣很多啦,但是我不会弹幕战,所以……我也没什么感觉.要研究符卡的话,魔理沙倒是有出书呢', '我的工作则是记录幻想乡中的各色人物,和发生过的异变呢.成为管理员之后,也兼职进行规则的介绍了', '异变毕竟是幻想乡中的超大变故,还会出现永久改变幻想乡的事情.大家每天吃的饭,用的牌……要记那种东西的话,就是一万辈子我也记不完啊', '虽然有些异变也不是坏事,但是对于我们这些没有战斗力的人类,还是希望日子能正常一点好啊.啊……要是灵梦会老实干活就好了……'],
                                        ['幻想乡是个很神奇的地方.撰写<幻想乡缘起>的初衷是教导人类们对付妖怪现在看来,记载丰富多彩的大家也不错呢', '其实幻想乡以前不是欢乐的地方.前几代巫女非常敬业,把妖怪们打的毫无还手之力.虽然正面冲突基本没有了,暗地里的袭击事件多了很多', '而这代巫女,灵梦,是个很奇怪的人呢.她创建了符卡规则,让妖怪,人类,巫女,本来是类似食物链的关系,变成了可以同台对战', '因为符卡规则,妖怪不但不惧怕,甚至还相当欢迎与巫女的正面冲突.也造成了异变事件常常发生.随着时间的推移,异变对人类的影响也越来越少.而本来可怕的妖怪,对人类的友好度也高了起来……', '即使是幻想乡,先吃饱才能表演的规则也是没变.所以,不用介意生计的妖怪们用异变进行表演,而异变则招来更多的妖怪…算是良性循环吧？', '是不是好事,我也说不上来.总之,我工作量是大幅度增加了呢……啊,不说了,我还要赶死线呢!'],
                                    ];
                                    var k = h[f][counter];
                                    if (counter == 6) k = lib.config.connect_nickname + ',虽然我并不讨厌和你说话,但是你肯定有更好的事情做吧？';
                                    var date = new Date();
                                    if (date.getHours() > 22 || date.getHours() < 8) k = 'Zzz……';
                                    var d = ui.create.dialog('<div><div style="width:280px;margin-left:120px;">' + k + '</div>');
                                    ui.create.div('.avatar', d).setBackground('akyuu', 'character');
                                    control.hide();
                                    var c = ui.create.control(counter != 6 ? '嗯嗯' : '抱歉……', function () {
                                        counter++;
                                        d.close();
                                        c.close();
                                        control.show();
                                    });
                                };
                            }
                        };
                        node.appendChild(player);
                        node.playernode = player;
                        var dialog = ui.create.dialog('hidden');
                        dialog.style.left = '0px';
                        dialog.style.top = '0px';
                        dialog.style.width = '100%';
                        dialog.style.height = '100%';
                        dialog.classList.add('fixed');
                        dialog.noopen = true;
                        node.appendChild(dialog);
                        var i = ['欢迎来到无名杀,' + lib.config.connect_nickname + '!', '无名杀是一套以三国杀为原型的二次创作非商业化桌游游戏', '<a href = "https://mp.weixin.qq.com/s/57EYPFZ1r0LSDzgYm2ZF7Q" target="_blank">详细介绍点这里</a>', '东方流星夜是基于无名杀1.9.51版的大型魔改.这里是东方project移植的流星夜图鉴', '对游戏的不解,在我这里有规则,模式介绍,卡牌查询. 其它的不懂的,请去[其它-帮助]里查看', '祝你游玩愉快!'];
                        var j = ['<u>程序使用须知:</u>', '1. 使用刷新键(f5)可以重置游戏', '2.左上的[选项]可以更改很多游戏相关的设置,包括并不限于:', '<t>游戏模式的人数和身份分配', '牌局的布局,卡牌的样式 ([选项-选项-外观-布局]和[选项-选项-外观-卡牌样式/卡背样式]),', '和游戏录像.([选项-其他-录像])', '记得多多探索一下,没准有奇怪的东西!', '3. 在牌局中双击角色可以查看角色简介,也可以换皮肤和听配音(如果有配音的话)', '3.1 在左上的[选项-角色]里双击角色牌也可以看到简介', '4. 快捷键:按A托管,按space可以暂停,按W可以切换<不询问【无懈可击】>按钮', '5. 如果你在游戏过程中,可能会看到英文技能,不要惊讶,那是作者偷懒的结果', '<b>6. 其实,点击我是可以跟我说话的啦.就上方那个.</b>'];
                        if (game.layout != 'nova') {
                            //布局
                            dialog.addText('<div><div style="display:block;left:180px;text-align:left;font-size:16px">' + i.join('<br>'));
                            dialog.addText('<div><div style="display:block;top:240px;text-align:left;font-size:16px">' + j.join('<br>'));
                        } else {
                            dialog.addText('<div><div style="display:block;left:150px;text-align:left;font-size:16px">' + i.join('<br>'));
                            dialog.addText('<div><div style="display:block;top:210px;text-align:left;font-size:16px">' + j.join('<br>'));
                        }
                    }
                },
            },
            downloadlog: {
                //这里是网页版使用的
                name: '下载事宜',
                mode: '',
                intro: ['无名杀的数据库在github,github是美国的代码仓库,国外断网是日常啦!', '可以去群里获得相关数据包,找到对面文件夹解压覆盖即可'],
                showcase(init) {
                    if (init) {
                        var style2 = {
                            position: 'relative',
                            display: 'block',
                            left: 10,
                            top: 0,
                            marginBottom: '6px',
                            padding: 0,
                            width: '100%',
                        };
                        var line2 = ui.create.div(style2, this);
                        line2.style.lineHeight = '50px';
                        var dialog = ui.create.dialog('hidden', line2);
                        dialog.style.left = '0px';
                        dialog.style.top = '0px';
                        dialog.style.width = '100%';
                        dialog.style.height = '100%';
                        dialog.addText('喏,' + lib.config.connect_nickname + ',<a href = "https://mp.weixin.qq.com/s/2dvbkhEezGQn7pUjETRlpQ" target = " _blank">这里也有教程哟.</a>');
                        dialog.classList.add('fixed');
                        dialog.noopen = true;
                        this.appendChild(dialog);
                        var incident = ui.create.node(
                            'button',
                            '电脑端下载',
                            line2,
                            function () {
                                var i = ['下载链接:', '这里是东方流星夜的下载链接,某些特殊情况下使用的', '国外镜像:<a href = "https://github.com/BlackAndWhiteScallion/Night-of-Shooting-Stars/archive/master.zip">https://github.com/BlackAndWhiteScallion/Night-of-Shooting-Stars/archive/master.zip</a>', '国内镜像:<a href = https://bws.coding.net/api/share/download/bcf9e902-4fd3-4919-9fc9-f681388b0523</a>', '', '国内镜像因神奇腾讯有可能炸了,还请大家注意'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var identity = ui.create.node(
                            'button',
                            '手机端下载',
                            line2,
                            function () {
                                var i = ['手机端目前只支持安卓系统.为您带来的不便表达万分歉意', '', '百度网盘链接:<a href = "https://pan.baidu.com/s/14ogm9-RAdDuuXUGTZYC_qA</a>', '提取码:en6f'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var versus = ui.create.node(
                            'button',
                            '我的存档啊!',
                            line2,
                            function () {
                                var i = ['要保存你的数据的话,首先,从[选项-选项-文件-导出游戏设置],把当前的游戏设置保存下来', '打开下载的程序,从[选项-选项-文件-导入游戏设置],把刚存下来的游戏设置导入', '', '这个操作也可以同样用于把本地的数据导入网页版,或者把电脑的数据导入手机', '但是注意的是,像自己加的皮肤,自己加的音乐与配音这些本地素材,是无法导入网页版的'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                    }
                },
            },
            updatelog: {
                name: '更新事宜',
                mode: '',
                intro: ['更新注意!'],
                showcase(init) {
                    if (init) {
                        var style2 = {
                            position: 'relative',
                            display: 'block',
                            left: 10,
                            top: 0,
                            marginBottom: '6px',
                            padding: 0,
                            width: '100%',
                        };
                        var line2 = ui.create.div(style2, this);
                        line2.style.lineHeight = '50px';
                        var dialog = ui.create.dialog('hidden', line2);
                        dialog.style.left = '0px';
                        dialog.style.top = '0px';
                        dialog.style.width = '100%';
                        dialog.style.height = '100%';
                        dialog.addText('有什么更新相关的问题吗,' + lib.config.connect_nickname + '？');
                        dialog.classList.add('fixed');
                        dialog.noopen = true;
                        this.appendChild(dialog);
                        var incident = ui.create.node(
                            'button',
                            '更新方式',
                            line2,
                            function () {
                                var i = ['更新方式有三种:', '1: 下载更新程序包', '<a href = "https://mp.weixin.qq.com/s/1zfstbhzlGvaW6E33oSnnQ" target="_blank">教你下载最新无名杀</a>', '无名杀数据通过下面三个网盘链接下载', '<a href = "https://pan.baidu.com/s/1CqSyEelJfuMhnPgFGJFWKg" target="_blank">百度网盘分流数据包  </a>提取码:70yq ', '<a href = "https://pan.baidu.com/s/11CtKq7K7t5NFb_AAddMcVg" target="_blank">安卓客户端   </a>提取码:ug3c', '<a href = "https://pan.baidu.com/s/1tiH_EcbbKhILce3fJmIPcA" target="_blank">Windows客户端   </a>提取码:u890', '下载完毕后,在浏览器的默认下载文件夹里可以找到,解压到无名杀所在的文件夹里,并全部覆盖就OK啦', '手机端也可以使用这个更新方式,安卓手机所需要拖到的文件夹在:<b>(默认SD卡)/android/data/com.widget.noname</b>', '覆盖完毕后,需要重启无名杀程序!', '', '2. 游戏内更新,在<b>[选项-其他-更新]</b>下有多个更新选项', '[检查游戏更新]是检查游戏的文件更新,有可能可以使用,也有可能不能使用.(网络问题,服务器问题之类的)', '[检查素材更新]是检查游戏新加的素材. 但是只能检查新加的素材,无法更新被覆盖的旧素材', '检查素材更新在电脑和手机端都可以进行', '', '3. 手机端更新,可以在<b>[选项—选项—文件—重新下载游戏]</b>来进行更新', '这样会保留所有的设置,但是并不会更新素材.素材需要另外进行更新', '', '4. 如果以上方法都不行,你可以去群里下载', '<a href = "https://qinkunwei.gitee.io/noname/" target="_blank">交流网站点这里</a>'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var identity = ui.create.node(
                            'button',
                            '相关链接',
                            line2,
                            function () {
                                var i = [
                                    '无名杀的作者为水乎(贴吧id).群内都叫做村长',
                                    '',
                                    '一个无名杀的拓展作者自制的交流网站,教程和群号都有',
                                    '<a href = "https://qinkunwei.gitee.io/noname/" target="_blank">交流网站点这里</a>',
                                    '',
                                    '设置相关',
                                    '<a href = "https://mp.weixin.qq.com/s/Jok6bpHbg6-CkOQTkpDuTg" target="_blank">设置篇</a>',
                                    '',
                                    '新版本新函数说明.(更新者为苏婆马里奥,现在的无名杀更新者)',
                                    '<a href = "http://tieba.baidu.com/p/6162185467?share=9105&fr=share&see_lz=0&sfc=copy&client_type=2&client_version=11.0.0.0&st=1578210420&unique=FF443B33E43BBC43777C4B7388A96693" target="_blank">新版本新函数</a>',
                                    '',
                                    '使人怀恋的拓展作者(纪念某些已弃坑的作者)',
                                    '<a href = "https://mp.weixin.qq.com/s/NdqMJ-bnVcefs3NHoZEA0w" target="_blank">使人怀念的拓展作者</a>',
                                    '',
                                    '百度贴吧拓展评测',
                                    '<a href = "https://tieba.baidu.com/p/6635697950" target="_blank">贴吧拓展评测</a>',
                                    '',
                                    //'网页',
                                    //'<a href = "3D.html" target="_blank">网页</a>',
                                    //'',
                                ];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var versus = ui.create.node(
                            'button',
                            '拓展相关',
                            line2,
                            function () {
                                var i = ['部分拓展的介绍,贴吧里很多链接都失效了,最好是去群里下载', '神器:代码搜索器', '部分拓展可以关注微信公众号(无名杀DIY定制)寻找', '<a href = "http://mp.weixin.qq.com/mp/homepage?__biz=MzU1NTI2Mzc0NA==&hid=1&sn=4a88e933ac611af4328aacc95da5e14f&scene=18#wechat_redirect" target="_blank">拓展资讯</a>', '部分大型拓展贴吧地址如下', '<a href = "http://tieba.baidu.com/p/5864374860?share=9105&fr=share&see_lz=0&sfc=copy&client_type=2&client_version=11.0.0.0&st=1578210297&unique=745F1CFE046C7D6C427D8EDBC26B4E4E" target="_blank">拓展ol</a>', '<a href = "http://tieba.baidu.com/p/6100673452?share=9105&fr=share&see_lz=0&sfc=copy&client_type=2&client_version=11.0.0.0&st=1578210903&unique=9E67946D8E38BCDA44245597F7853919" target="_blank">金庸群侠传</a>', '群英会(去获取拓展里下载,贴吧链接炸了)', '<a href = "http://tieba.baidu.com/p/5602770701?share=9105&fr=share&see_lz=0&sfc=copy&client_type=2&client_version=11.0.0.0&st=1578210386&unique=E91E395EEB6E0171791507A1CB08FE9A" target="_blank">极略三国</a>', '<a href = "http://tieba.baidu.com/p/6470056961?share=9105&fr=share&see_lz=0&sfc=copy&client_type=2&client_version=11.1.8.2&st=1582171543&unique=9A2B10C23C6D971A7417DB528EC1E32A" target="_blank">混沌界</a>', '<a href = "http://tieba.baidu.com/p/5785758604?share=9105&fr=share&see_lz=0&sfc=copy&client_type=2&client_version=11.1.8.2&st=1582171616&unique=BB1F6516DB4BDE8AB36FBE8D910B4DF2" target="_blank">王者荣耀</a>', '作者包(纪念作者的拓展包)', '风华绝代(某付费群专属拓展)'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                    }
                },
            },
            ruleview: {
                name: '规则帮助',
                mode: '',
                intro: ['虽然新规则看起来有点太复杂,很麻烦,但是不用担心,规则比看起来的要容易理解多了!', ''],
                showcase(init) {
                    if (init) {
                        var style2 = {
                            position: 'relative',
                            display: 'block',
                            left: 10,
                            top: 0,
                            marginBottom: '6px',
                            padding: 0,
                            width: '100%',
                        };
                        var line2 = ui.create.div(style2, this);
                        line2.style.lineHeight = '50px';
                        var dialog = ui.create.dialog('hidden', line2);
                        dialog.style.left = '0px';
                        dialog.style.top = '0px';
                        dialog.style.width = '100%';
                        dialog.style.height = '100%';
                        dialog.addText('');
                        dialog.addText('');
                        dialog.addText('请选择你想要了解的系统,' + lib.config.connect_nickname + ',我会尽力解答的!');
                        dialog.classList.add('fixed');
                        dialog.noopen = true;
                        this.appendChild(dialog);
                        var incident = ui.create.node(
                            'button',
                            '灵力值是什么？',
                            line2,
                            function () {
                                var i = ['<u>灵力值</u>:(角色下的绿色星星,或者蓝圆圈)', '用途:强化卡牌和启动符卡需要用', '炉石模式随从的灵力值为蓝圆圈', '关闭[启用灵力]值的选项后除了闯关模式将不会往游戏导入灵力值ui和符卡ui(ui发生错误时关闭灵力值即可)', '闯关模式会强制导入灵力值ui和符卡ui'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var identity = ui.create.node(
                            'button',
                            '游戏牌有哪些新设定？',
                            line2,
                            function () {
                                var i = ['游戏牌有很多小改动.其实你跟着感觉走就行,但是多了解些绝对不是坏事!', '<u>强化</u>:持有<强化>的牌通过消耗标注量的灵力可以强化,结算时追加描述里的效果', '', '<u>追加效果</u>:这牌有追加的效果.使用追加效果不算使用牌', ''];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var versus = ui.create.node(
                            'button',
                            '符卡怎么使用？',
                            line2,
                            function () {
                                var i = ['<u>符卡技</u>:游戏的核心技能系统', '在幻想乡怎么可以不会用符卡呢!对吧!', '', '启动后,玩家持有符卡技描述中的技能,并且<u>不能获得灵力</u>,直到符卡结束', '<u>符卡结束时机</u>:1.当前回合结束;2. 灵力值变化为0', '', '<u>符卡标签</u>:<br><u><永续></u>符卡结束时机1改为你的下个回合开始时;<br><u><瞬发></u>你可以在需要使用符卡描述技能时,发动符卡并立即使用(正常发动条件生效);', '<u><限定></u>一局游戏只能启动一次;<br><u><终语></u>在决死状态可以启动(正常发动条件生效);<br><u><极意></u>删除符卡结束时机1,符卡结束时,立即死亡', ''];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var boss = ui.create.node(
                            'button',
                            '技能牌是什么？',
                            line2,
                            function () {
                                var i = ['技能牌是一种特殊牌,位于判定区底端,但只能通过特殊函数调用.(因为无名杀主体根本没有)', '技能牌与装备牌类似,摸到后可以任意使用上面的技能,且一次最多持有3张', '', '贴上的技能牌不进入牌堆或弃牌堆,失去时直接移除游戏.(但是不触发移除游戏的技能,因为我懒得写了.)', '除此之外,技能牌不参也无名杀主体的部分功能', '通过技能贴上的技能牌没有花色,点数,所以不能用于满足对应的要求'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var tafang = ui.create.node(
                            'button',
                            '其他注意事项？',
                            line2,
                            function () {
                                var i = ['', '关于卡牌明置:修改了游戏的数个函数,如果不玩相关武将不建议开启', '', '关于新模式:新模式是无法隐藏的,只能通过关闭此拓展关闭'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                    }
                },
            },
            tutorial: {
                name: '教程',
                mode: 'tutorial',
                nostart: true,
                intro: ['东方project教程模式', '模式中,记录了一定的本拓展规则', '请按照教程提示进行游戏,否则会出现各种奇奇怪怪的bug', '请不要在教程模式中使用各种奇奇怪怪的技能,否则bug警告'],
                showcase(init) {
                    var node = this;
                    var func = function () {
                        var list = ['gezi_danmakucraze', 'gezi_caifang', 'gezi_pantsu', 'gezi_louguan', 'gezi_ibuki', 'gezi_deathfan', 'gezi_windfan', 'gezi_saiqianxiang', 'gezi_reidaisai', 'gezi_yinyangyu', 'gezi_zhiyuu', 'gezi_mirror', 'gezi_bailou', 'gezi_houraiyuzhi', 'gezi_hourai', 'gezi_frog', 'gezi_lunadial', 'gezi_hakkero', 'gezi_lantern', 'gezi_stone', 'gezi_simen', 'gezi_huanxiang', 'gezi_tianguo', 'gezi_lingbi', 'gezi_zuiye', 'gezi_huazhi', 'gezi_bingyu', 'gezi_jingxia', 'gezi_missile', 'gezi_bagua', 'gezi_book', 'stg_bawu'];
                        var card = game.createCard(list.randomGet(), 'noclick');
                        node.nodes.push(card);
                        card.style.position = 'absolute';
                        var rand1 = Math.round(Math.random() * 100);
                        var rand2 = Math.round(Math.random() * 100);
                        var rand3 = Math.round(Math.random() * 40) - 20;
                        card.style.left = 'calc(' + rand1 + '% - ' + rand1 + 'px)';
                        card.style.top = 'calc(' + rand2 + '% - ' + rand2 + 'px)';
                        card.style.transform = 'scale(0.8) rotate(' + rand3 + 'deg)';
                        card.style.opacity = 0;
                        node.appendChild(card);
                        ui.refresh(card);
                        card.style.opacity = 1;
                        card.style.transform = 'scale(1) rotate(' + rand3 + 'deg)';
                        if (node.nodes.length > 7) {
                            setTimeout(function () {
                                while (node.nodes.length > 5) {
                                    node.nodes.shift().delete();
                                }
                            }, 500);
                        }
                    };
                    if (init) {
                        node.nodes = [];
                        for (let i = 0; i < 5; i++) {
                            func();
                        }
                    }
                    node.showcaseinterval = setInterval(func, 1000);
                },
            },
            stone: {
                name: '魔改炉石',
                mode: 'stone',
                nostart: true,
                intro: ['炉石模式的魔改!', '', '增加了攻击力设定', '主将攻击力显示在面板上,每有2个友方随从,主将增加1攻击力', '随从攻击力在右上方', '对随从造成伤害或令其回复体力时,基础数值为攻击力', '如死亡之翼描述为造成2伤害,实际为死亡之翼(攻击力+1)的伤害', '对主将的默认值为1', '攻击力再高不喝酒打主将都是1伤害', '', '初始行动值+1', '', '和炉石模式共用卡组.和炉石模式共用选项', '', '修改了部分基础数值', '', '平衡性较差,请谨慎使用'],
            },
            modeview: {
                name: '游戏模式',
                mode: '',
                intro: ['每个模式都在左上角的[选项——开始]里可以进行各种设置!'],
                showcase(init) {
                    if (init) {
                        var style2 = {
                            position: 'relative',
                            display: 'block',
                            left: 10,
                            top: 0,
                            marginBottom: '6px',
                            padding: 0,
                            width: '100%',
                        };
                        var line2 = ui.create.div(style2, this);
                        line2.style.lineHeight = '50px';
                        var dialog = ui.create.dialog('hidden', line2);
                        dialog.style.left = '0px';
                        dialog.style.top = '0px';
                        dialog.style.width = '100%';
                        dialog.style.height = '100%';
                        dialog.addText('请在上方点击你想要了解的模式,' + lib.config.connect_nickname + '');
                        dialog.classList.add('fixed');
                        dialog.noopen = true;
                        this.appendChild(dialog);
                        var incident = ui.create.node(
                            'button',
                            '异变模式',
                            line2,
                            function () {
                                var i = ['<u><b>异变模式:</u></b> 游戏人数:4~8人,推荐人数为7人', '<a href = "https://mp.weixin.qq.com/s/ZBT62CCpPWzqiLMFDQOSsg" target="_blank">详细介绍点这里</a>', '黑幕:其实就是主公.自机:其实就是反贼.异变:其实就是忠臣.路人:其实就是内奸', '黑幕与异变身份为一方;自机身份为一方,且与黑幕为对立阵营;每个路人身份玩家为单独一方', '游戏开始时,每名玩家的身份暗置,随机玩家执行第一个回合', '每名玩家可以在出牌阶段明置自己的身份;身份明置时,根据身份执行效果:', '黑幕:获得一张异变牌并明置', '异变:令一名角色摸一张牌', '自机:令一名其他角色选择一项:弃置一张牌,或明置身份', '路人:获得一张异变牌并暗置;可以在出牌阶段明置异变牌', '', '<u>胜利条件:</u>', '黑幕:击杀所有自机', '异变:黑幕获得胜利', '自机:击杀黑幕', '路人:无', '特殊的,游戏结束时,存活的路人玩家不算游戏失败.路人玩家胜利时游戏结束(平局)', '', '<u>异变牌:</u>任何持有异变牌的玩家可以通过异变牌的效果获得胜利;异变牌只有明置才有效果;异变胜利时,所有与其同阵营的玩家也获得胜利', '<u>击杀奖励:</u>一名角色击杀其他角色后,获得1点灵力,并贴上一张技能牌'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var identity = ui.create.node(
                            'button',
                            '身份模式',
                            line2,
                            function () {
                                var i = ['<u><b>身份模式:</u></b> 游戏人数:4~8人,推荐人数为8人', '<div style="margin:10px">选项</div><ul style="margin-top:0">', '', '<li>加强主公<br>反贼人数多于2时主公会额外增加一个技能(每个主公的额外技能固定,非常备主公增加天命)<li>特殊身份<br><ul style="padding-left:20px;padding-top:5px"><li>军师:忠臣身份.只要军师存活,主公在准备阶段开始时,可以观看牌堆顶的三张牌,将这些牌以任意顺序置于牌堆顶或牌堆底<li>大将:忠臣身份.只要大将存活,主公手牌上限+1<li>贼首:反贼身份,只要贼首存活,主公手牌上限-1</ul></ul><div style="margin:10px">明忠</div><ul style="margin-top:0">', '', '<li>本模式需要8名玩家进行游戏,使用的身份牌为:1主公、2忠臣、4反贼和1内奸.游戏开始时,每名玩家随机获得一个身份,由系统随机选择一名忠臣身份的玩家亮出身份(将忠臣牌正面朝上放在面前),其他身份(包括主公)的玩家不亮出身份.<li>首先由亮出身份的忠臣玩家随机获得六张武将牌,挑选一名角色,并将选好的武将牌展示给其他玩家.之后其余每名玩家随机获得三张武将牌,各自从其中挑选一张同时亮出<li>亮出身份牌的忠臣增加1点体力上限.角色濒死和死亡的结算及胜利条件与普通身份局相同'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var versus = ui.create.node(
                            'button',
                            '对决模式',
                            line2,
                            function () {
                                var i = ['<u><b>对决模式:</u></b>', '<div style="margin:10px">同舟共济(四国)</div><ul style="margin-top:0">', '', '<li>游戏开始时,每个势力的随机一名角色得到一个龙船至宝,1号位角色所在的势力额外获得一个龙船至宝,场上共5枚龙船至宝.龙船至宝是一个特殊标记.<li>争夺龙船至宝的方式:当敌人受到了你造成的伤害后,若其有龙船至宝,则你获得其一个龙船至宝.若你击杀了该敌人,则你获得其所有的龙船至宝.<li>获得龙船至宝时的摸牌:除游戏开始时外,若你从非队友处获得了龙船至宝,则你和队友各摸X张牌.(X为该次获得的龙船至宝数;获得队友的龙船至宝不摸牌)<li>无来源死亡时:当一名角色死亡时,若没有伤害来源,则其持有的所有龙船至宝交给场上龙船至宝数唯一最多的角色,若没有则随机分配,获得龙船至宝的角色和其队友各摸X张牌.<li>击杀队友时:当你击杀队友时,则将你和队友持有的所有龙船至宝交给场上龙船至宝数唯一最多的敌人,若没有则随机分配,获得龙船至宝的角色和其队友各摸X张牌.<li>胜利条件:满足一下任意条件游戏结束:(1)在新的一轮开始时,若你的势力获得的龙船至宝至少为4个,则你和队友获胜;(2)消灭所有敌人.</ul><div style="margin:10px">2v2 替补模式</div><ul style="margin-top:0">', '', '<li>选将时额外选择一名替补武将,阵亡时使用自己的替补武将上场,无替补时改为用队友的替补武将,两人均无替补时游戏结束<li>击杀敌方武将摸3张牌,击杀友方武将弃置所有牌</ul><div style="margin:10px">4v4</div><ul style="margin-top:0">', '', '<li>双方各有一名主公和三名忠臣,击杀对方主公获胜<li>8号位游戏开始时额外摸一张牌,7、8号位可在游戏开始时置换一次手牌<li>击杀对方忠臣摸2+x张牌,x为对方(含刚被杀的忠臣)与己方的存活人数之差;主公击杀己方忠臣须弃置所有牌'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var tafang = ui.create.node(
                            'button',
                            '塔防模式',
                            line2,
                            function () {
                                var i = ['<u><b>塔防模式:</u></b>', '<ul><li>阻上敌人到达最下方的出口,坚持到给定的回合数即获得胜利<li>每轮可获得10个行动点,用来布置机关、招募武将.场上每有一个友方武将,行动点数-1.游戏难度将影响不同操作消耗的行动点数.未用完的行动点将减半(向下取整)并累积到下一轮<li>每一轮在最上方的一个随机位置增加一名敌人,若最上方已有角色,则将其下移一格<li>战场上最多出现3个相同的机关,每个机关在置入战场3轮后消失.战场上最多招募5名友方角色.<li>敌方角色到达底部出口时游戏失败,已方角色到达底部出口,将被移出游戏'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var stg = ui.create.node(
                            'button',
                            '闯关模式',
                            line2,
                            function () {
                                var i = ['<u><b>闯关模式:</u></b>', '<a href = "https://mp.weixin.qq.com/s/owQpDcBP0_OFPSlZMecPYQ" target="_blank">详细介绍点这里</a>', '选择出你的自机角色,欺负小怪,连续打关,找出最后的黑幕并击破她吧!', '', '玩家的胜利条件为击杀最后一个BOSS,通过最后一个小关. 失败条件为自己死亡', '一个大关最多有6个小关,最少只有1小关', '', '<u>专属装备</u>', '每一个大关会限定一些自机角色.这些自机角色在游戏开始时,可以选择一张属于她的专属装备', '并且,使用不同的专属装备会让玩家获得不同的符卡', '使用[自由选自机]来选出这些角色以外的角色来闯关的话,不会有专属装备', '', '<u>复活机会</u>', '玩家在死亡时,如果还剩复活机会,会消耗1个,弃置所有牌,摸4张牌,体力回复至满,灵力调整为2,继续游戏', '没有复活机会的情况下死亡就是游戏失败咯', '玩家初始的复活机会数量,和击杀哪些BOSS会获得更多的复活机会,在大关介绍上有写', '在游戏中,可以随时用右上的[残机]键查看剩余复活次数', '', '<u>击杀和通关奖励</u>', '任何角色死亡后,击杀那名角色的来源获得1点灵力,并摸一张牌', '玩家通过一个小关后,牌堆会重置', '', '<u>敌人增援</u>', '在玩家的回合开始时,如果场上敌人的数量小于2,会出现下一个敌人', '这些敌人会继续出现,直到BOSS角色出现为止', '即使小怪在场上,击杀BOSS角色依然是成功通关,所以不用太介意', '', '<u>BOSS阶段转换</u>', '有些BOSS在死亡时,会进入下一个阶段:', 'BOSS将体力值回复至上限,灵力调整为5,立即获得并启动符卡技.这些符卡技均视为持有<极意>标签', '有些BOSS甚至有两个阶段,请千万小心', '', '<u>手牌上限</u>', '每通过一个小关,增加一手牌上限'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var chess = ui.create.node(
                            'button',
                            '战棋模式',
                            line2,
                            function () {
                                var i = ['<u><b>战棋模式</u></b>', '<div style="margin:10px">对阵模式</div><ul style="margin-top:0">', '', '<li>n人对战n人的模式,由单人控制,开始游戏后随机分配位置与出牌顺序<li>每人在出牌阶段有一次移动的机会,可移动的最大距离为2<li>任何卡牌或技能无法指定位置相隔8个格以上的角色为目标<li>击杀对方阵营的角色可摸一张牌,击杀本方阵营无惩罚<li>若开启主将,双方各选择一名角色成为主将.主将体力上限加一,主将死亡后,若有副将,副将代替之成为主将,否则游戏结束<li>开启无尽模式后,任何一方有角色死亡都将选择一名新角色重新加入战场,直到点击左上角的结束游戏按钮手动结束游戏.结束游戏时,杀敌更多的一方获胜<li>行动顺序为指定时,双方无论存活角色角色多少都将轮流进行行动.在一方所有角色行动完毕进行下一轮行动时,若其人数比另一方少,另一方可指定至多X名角色名摸一张牌,X为人数之差<li>开启战场机关后,每个回合结束时有一定机率出现一个机关,该机关不参与战斗,并有一个影响周围或全体角色的效果.机关在出现后的5~10个回合内消失<li>开启击退效果后,当一名角色对距离两格以内的目标造成伤害后,受伤害角色将沿反方向移动一格<li>战场上可设置出现随机路障,角色无法移动到路障处.当一名角色的周围四格有至少三格为路障或在战场外时,其可以在回合内清除一个相邻路障</ul><div style="margin:10px">君主模式</div><ul style="margin-top:0">', '', '<li>收集武将进行战斗,根据战斗难度及我方出场武将的强度,战斗胜利后将获得数量不等的金钱.没有君主出场时,获得的金钱较多<li>金钱可以用来招募随机武将,招到已有武将,或遣返不需要的武将时可得到招募令<li>战斗中有君主出场时可招降敌将,成功率取决于敌将的稀有度、剩余体力值以及手牌数.成功后战斗立即结束且没有金钱奖励.每发动一次招降,无论成功还是失败,都会扣除10招募令<li>挑战武将会与该武将以及与其强度相近的武将进行战斗,敌方人数与我方出场人数相同,但不少于3.胜利后可通过招募令招募该武将,普通/稀有/史诗/传说武将分别需要40/100/400/1600招募令<li>竞技场:<br>随机选择9名武将,每次派出1~3名武将参战.战斗中阵亡的武将不能再次上场.<br><br>战斗后武将进入疲劳状态,若立即再次出场则初始体力值-1.<br><br>战斗中本方武将行动时可召唤后援,令一名未出场的已方武将加入战斗.后援武将在战斗结束后无论存活与否均不能再次出场<br><br>当取得12场胜利或所有武将全部阵亡后结束,并根据胜场数获得随机奖励<li>修改金钱:<br>game.changeMoney<br>修改招募令:<br>game.changeDust</ul>'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                        var stone = ui.create.node(
                            'button',
                            '炉石模式',
                            line2,
                            function () {
                                var i = ['<u><b>炉石模式</u></b>', '<div style="margin:10px">构筑</div><ul style="margin-top:0">', '', '<li>点击右上角的卡组管理构建卡组<li>一套卡组共30张牌,由法术和随从牌构成,每个同名卡牌最多带两张<li>卡组管理器中,随从右上角的x/y表示登场状态为x牌y血<li>游戏开始时,双方摸三张牌并从牌库中获得一张牌,并可选择将手牌置换一次<li>每当主将摸X张牌时,若X至少为2,则其中的X-1张牌从牌堆中获得,1张牌从牌库中获得<li>每名角色使用一套卡组,卡组用完后会重新补满<li>卡组与职业绑定,每个职业有一个专属技能,每回合限用一次,消耗两点行动值</ul><div style="margin:10px">职业技能</div><ul style="margin-top:0">', '', '<li>祭司:召唤一个随机图腾<li>法师:对一名随从造成一点火焰伤害<li>牧师:回复一点体力<li>战士:获得一点护甲(不能超过3点)<li>术士:牌库中摸两张牌<li>潜行者:装备一把武器和一个随机非武器装备<li>圣骑士:召唤一名士兵<li>猎人:对敌方主将造成一点伤害<li>德鲁伊:视为使用一张不计入出杀次数的杀</ul><div style="margin:10px">怒气值</div><ul style="margin-top:0">', '', '<li>每当友方随从受到伤害获得3点怒气值,主将受到伤害获得6点怒气值<li>每有一个友方随从死亡,获得10点怒气值,主将死亡获得20点怒气值<li>结束阶段,若己方随从数少于对方会获得10X点怒气值,X为随从数之差<li>怒气值达到100时不再增加.准备阶段,若怒气值己满,可消耗全部怒气值和4点行动值并召唤一名传说随从</ul><div style="margin:10px">战斗</div><ul style="margin-top:0">', '', '<li>场上有两名主将进行对抗,主将的体力上限+1<li>游戏牌堆移除了乐不思蜀等跳过出牌阶段以及包含翻面功能的卡牌<li>主将出牌阶段的出牌数量(行动值)有上限,从1开始递增,后手的首个回合有一点额外行动值,装备牌不计入出牌上限<li>游戏每进行一轮,主将的出牌上限+1,直到增加至6<li>使用随从牌可召唤一个随从,随从出场时背面朝上.每一方在场的随从数不能超过4<li>随从于摸牌阶段摸牌基数为1,随从的法术和随从牌均视为闪,装备牌均视为杀<li>随从与其他所有角色相互距离基数为1<li>主将击杀对方随从后获得一个额外的行动值并从牌库中获得一张牌,击杀己方随从无惩罚,随从击杀随从无效果<li>主将在随从满员时可重铸随从牌,但回合内总的重铸次数不能超过3;若重铸的牌为随从牌或法术牌,则摸牌改为获得一张随机法术牌<li>嘲讽:若一方阵营中有嘲讽角色,则同阵营的无嘲讽角色不以能成为杀目标<li>行动顺序为先主将后随从.主将或随从死亡后立即移出游戏,主将死亡后替补登场,替补登场时摸3+X张牌,X为对方存活的随从数,无替补时游戏结束'];
                                dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                            },
                            {
                                marginLeft: '6px',
                            }
                        );
                    }
                },
            },
            characterview: {
                name: '角色牌',
                mode: '',
                intro: ['右击角色可以查看角色简介,和切换角色皮肤', '(在游戏中,或左上[选项-角色]中 双击角色也可以查看角色简介和切换角色皮肤哟.)'],
                showcase(init) {
                    if (init) {
                        var list = [];
                        for (var i in lib.character) {
                            list.push(i);
                        }
                        var dialog = ui.create.dialog('hidden');
                        dialog.style.left = '0px';
                        dialog.style.top = '0px';
                        dialog.style.width = '100%';
                        dialog.style.height = '100%';
                        dialog.add([list, 'character'], false);
                        for (let i = 0; i < dialog.buttons.length; i++) {
                            dialog.buttons[i].classList.add('show');
                        }
                        this.appendChild(dialog);
                        dialog.noopen = true;
                    }
                },
            },
            cardview: {
                name: '游戏牌',
                mode: '',
                intro: ['卡牌的花色和点数以牌局内为准.右键可以查看卡牌简介'],
                showcase(init) {
                    if (init) {
                        var i;
                        var list = [];
                        event.list = list;
                        var dialog = ui.create.dialog('hidden');
                        dialog.classList.add('fixed');
                        dialog.style.left = '0px';
                        dialog.style.top = '0px';
                        dialog.style.width = '100%';
                        dialog.style.height = '100%';
                        var style2 = { position: 'relative', display: 'block', left: 0, top: 0, marginBottom: '6px', padding: 0, width: '100%' };
                        var line1 = ui.create.div(style2);
                        var list2 = [];
                        var packlist = [];
                        for (const i of lib.config.all.cards) {
                            if (!lib.config.cards.includes(i)) continue;
                            packlist.push(i);
                        }
                        for (var i in lib.cardPack) {
                            if (!lib.config.all.cards.includes(i)) {
                                packlist.push(i);
                            }
                        }
                        for (let i = 0; i < packlist.length; i++) {
                            list2.push(get.translation(packlist[i] + '_card_config'));
                        }
                        var scenelist = ui.create.selectlist(list2, null, line1);
                        var addButton = ui.create.node(
                            'button',
                            '添加卡牌包',
                            line1,
                            function () {
                                for (let i = 0; i < packlist.length; i++) {
                                    if (get.translation(packlist[i] + '_card_config') == scenelist.value) {
                                        list = [];
                                        for (var k = 0; k < lib.cardPack[packlist[i]].length; k++) {
                                            list.push(lib.cardPack[packlist[i]][k]);
                                        }
                                        dialog.add(line1);
                                        dialog.add([list, 'vcard']);
                                        for (let i = 0; i < dialog.buttons.length; i++) {
                                            dialog.buttons[i].classList.add('show');
                                        }
                                        //this.appendChild(dialog);
                                    }
                                }
                            },
                            { marginLeft: '6px', marginRight: '12px' }
                        );
                        dialog.add(line1);
                        this.appendChild(dialog);
                        dialog.noopen = true;
                    }
                },
            },
            skillview: {
                name: '技能牌',
                mode: '',
                intro: ['技能牌是一种特殊牌,位于判定区底端,但只能通过特殊函数调用', '技能牌与装备牌类似,摸到后可以任意使用上面的技能,且一次最多持有3张.额外的,相同技能牌的效果一般不会叠加', '贴上的技能牌不进入牌堆或弃牌堆,失去时直接移除游戏', '除此之外,技能牌不参也无名杀主体的部分功能', '通过技能贴上的技能牌没有花色,点数'],
                showcase(init) {
                    if (init) {
                        var i;
                        var list = [];
                        event.list = list;
                        var dialog = ui.create.dialog('hidden');
                        dialog.classList.add('fixed');
                        dialog.style.left = '0px';
                        dialog.style.top = '0px';
                        dialog.style.width = '100%';
                        dialog.style.height = '100%';
                        for (let i in lib.card) {
                            if (lib.translate[i] && !lib.card[i].vanish && lib.card[i].type == 'jinengpai') {
                                list.push(i);
                            }
                        }
                        dialog.add([list, 'vcard']);
                        this.appendChild(dialog);
                        dialog.noopen = true;
                    }
                },
            },
            incidentview: {
                name: '异变牌',
                mode: 'identity',
                intro: ['异变牌持有胜利条件,特殊效果.是东方流星夜的特殊牌', '在开启胜利条件的情况下,会记录异变牌的出场数.因异变牌胜利而结束游戏时,异变牌胜利次数也会被记录', '在因异变牌胜利三次后,可以点击阿求查看异变牌的出场与胜利次数'],
                showcase(init) {
                    if (init) {
                        var i;
                        var list = [];
                        event.list = list;
                        var dialog = ui.create.dialog('hidden');
                        dialog.classList.add('fixed');
                        dialog.style.left = '0px';
                        dialog.style.top = '0px';
                        dialog.style.width = '100%';
                        dialog.style.height = '100%';
                        for (let i in lib.card) {
                            if (lib.translate[i] && lib.card[i].type == 'zhenfa' && lib.card[i].subtype == 'yibianpai') {
                                list.push(i);
                            }
                        }
                        dialog.add([list, 'vcard']);
                        this.appendChild(dialog);
                        dialog.noopen = true;
                    }
                },
            },
            record: {
                name: '我的战绩',
                intro: [],
                fullshow: true,
                showcase(init) {
                    if (init) {
                        var node = this;
                        this.style.height = parseInt(this.style.height.substr(0, this.style.height.length - 2)) - this.offsetTop + 'px';
                        ui.create.div('.config.indent', '<div><div style="width:100%;text-align:right;font-size:18px"><b><u>' + lib.config.connect_nickname + '的战绩:</b></u></div>', node);
                        if (lib.config.gameRecord.general) {
                            ui.create.div('.config.indent', lib.translate.general, node);
                            var item = ui.create.div('.config.indent', lib.config.gameRecord.general.str + '<span><br><br></span>', node);
                            item.style.height = 'auto';
                        }
                        for (var i in lib.config.gameRecord) {
                            if (lib.config.gameRecord[i].str && i != 'general') {
                                ui.create.div('.config.indent', lib.translate[i] + '模式', node);
                                var item = ui.create.div('.config.indent', lib.config.gameRecord[i].str + '<span><br><br></span>', node);
                                item.style.height = 'auto';
                                item.lastChild.classList.add('pointerdiv');
                                item.link = i;
                            }
                        }
                    }
                },
            },
            diy: {
                name: '我要DIY!',
                mode: '',
                intro: ['有好点子？想要更多萌妹？想要萌妹们穿上泳装？来把你的幻想变成现实吧!'],
                showcase(init) {
                    if (init) {
                        var style2 = {
                            position: 'relative',
                            display: 'block',
                            left: 10,
                            top: 0,
                            marginBottom: '6px',
                            padding: 0,
                            width: '100%',
                        };
                        var line2 = ui.create.div(style2, this);
                        line2.style.lineHeight = '50px';
                        var dialog = ui.create.dialog('hidden', line2);
                        dialog.style.left = '0px';
                        dialog.style.top = '0px';
                        dialog.style.width = '100%';
                        dialog.style.height = '100%';
                        if (location.hostname) {
                            dialog.addText('很抱歉,' + lib.config.connect_nickname + ',网页版不能进行DIY操作.把游戏下载下来才可以的');
                        } else {
                            dialog.addText('想要了解哪些DIY手段呢,' + lib.config.connect_nickname + '？');
                            dialog.classList.add('fixed');
                            dialog.noopen = true;
                            this.appendChild(dialog);
                            var incident = ui.create.node(
                                'button',
                                '添加皮肤',
                                line2,
                                function () {
                                    var i = ['添加皮肤,按照以下步骤来,很简单的:', '1. 打开无名杀所在的文件夹(电脑为noname-resources-app,安卓手机在Android-data-com.widget.noname)', '2. 打开image文件夹', '3. 你知道想要加皮肤的角色的内部名吗？知道的话,进入下一步.不知道的话,打开character文件夹,找到你想要改的角色的插图,文件名就是它的内部名(不包括后缀的.jpg)(拓展为extension)', '4. 打开image下的skin文件夹', '5. 有它的名字的文件夹吗？如果有,打开它.如果没有,创建一个,打开它', '6. 把图片(.jpg格式)放进文件夹里.命名为1.jpg.已经有了就+1,2.jpg.以此类推', '就这样,皮肤就可以在游戏内切换啦!'];
                                    dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                                },
                                {
                                    marginLeft: '6px',
                                }
                            );
                            var versus = ui.create.node(
                                'button',
                                '添加背景',
                                line2,
                                function () {
                                    var i = ['右上,选项,选项,外观,游戏背景(随机背景打开的话,这个按键会被隐藏),添加背景', '点编辑背景可以删除已有的背景', '顺带一提,随机背景可以随机到由你加入的背景'];
                                    dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                                },
                                {
                                    marginLeft: '6px',
                                }
                            );
                            var library = ui.create.node(
                                'button',
                                '制作角色',
                                line2,
                                function () {
                                    var i = ['<a href = "http://tieba.baidu.com/p/5523328309?share=9105&fr=share&see_lz=0&sfc=copy&client_type=2&client_version=11.0.0.0&st=1578210565&unique=889357C58A03A56EB7C71AB2876CF653" target="_blank">制作拓展</a>', '', '<a href = "https://qinkunwei.gitee.io/noname/" target="_blank">交流网站点这里</a>'];
                                    dialog.setCaption('<div><div style="text-align:left;font-size:16px">' + i.join('<br>'));
                                },
                                {
                                    marginLeft: '6px',
                                }
                            );
                        }
                    }
                },
            },
            download: {
                name: '联系我们',
                intro: ['你玩流星夜觉得开心吗？觉得不开心吗？觉得制作组是傻逼吗？自己也想要做吗？那么…………', '欢迎大家光临雾雨魔法店!', '东方流星夜app:<a href="https://pan.baidu.com/s/14ogm9-RAdDuuXUGTZYC_qA" target="_blank">百度网盘链接</a>,提取码:e6nf', '流星夜网页版更新下载链接→<a href = "https://github.com/BlackAndWhiteScallion/Night-of-Shooting-Stars-Extensions/archive/master.zip">国外镜像下载</a> <a href = "https://bws.coding.net/api/share/download/bcf9e902-4fd3-4919-9fc9-f681388b0523">国内镜像下载</a>', '流星夜网页地址:<a href="http://b_2.gitee.io/noss/target="_blank">网页链接</a>', '国内电脑版更新包:<a href="https://bws.coding.net/p[NO]SS-Extensions/d[NO]SS-Extensions/git/raw/master/%E4%B8%9C%E6%96%B9%E6%B5%81%E6%98%9F%E5%A4%9C%E6%9B%B4%E6%96%B0.exe"target="_blank">流星夜电脑版更新包</a>', '流星夜微信公众号:<a href="https://mp.weixin.qq.com/s/PC6a3Y8Y8bslqgsVWqcTqw" target="_blank">东方流星夜 大葱专线</a>', '无论是聊天,<a href="https://mp.weixin.qq.com/s/eq1HewSJkujUNA4U1vEq3Q" target="_blank">看漫画,</a>我们都会尊重你的选择'],
                showcase(init) {
                    //制作动画的地方
                    var node = this;
                    var player;
                    if (init) {
                        player = ui.create.player(null, true);
                        player.node.avatar.style.backgroundSize = 'cover';
                        player.node.avatar.setBackgroundImage('extension/东方project/image/boss_reimu.jpg'); //这里是图片
                        player.node.avatar.show();
                        player.style.left = 'calc(50% - 75px)';
                        player.style.top = '20px';
                        player.node.count.remove();
                        player.node.hp.remove();
                        player.style.transition = 'all 0.5s';
                        node.appendChild(player);
                        node.playernode = player;
                    } else {
                        player = node.playernode;
                    }
                    var num = 0;
                    var num2 = 0;
                    this.showcaseinterval = setInterval(function () {
                        var dx, dy;
                        if (num2 % 5 == 0) {
                            for (let i = 0; i < 5; i++) {
                                switch (i) {
                                    case 0:
                                        dx = -180;
                                        dy = 0;
                                        break;
                                    case 1:
                                        dx = -140;
                                        dy = 100;
                                        break;
                                    case 2:
                                        dx = 0;
                                        dy = 155;
                                        break;
                                    case 3:
                                        dx = 140;
                                        dy = 100;
                                        break;
                                    case 4:
                                        dx = 180;
                                        dy = 0;
                                        break;
                                }
                                var card = game.createCard('tao', 'noclick');
                                card.style.left = 'calc(50% - 52px)';
                                card.style.top = '68px';
                                card.style.position = 'absolute';
                                card.style.margin = 0;
                                card.style.zIndex = 2;
                                card.style.opacity = 0;
                                node.appendChild(card);
                                ui.refresh(card);
                                card.style.opacity = 1;
                                card.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
                                setTimeout(
                                    (function (card) {
                                        return function () {
                                            card.delete();
                                        };
                                    })(card),
                                    1000
                                );
                            }
                        }
                        num2++;
                        if (num >= 5) {
                            num = 0;
                        }
                    }, 700);
                },
            },
            thanks: {
                name: '鸣谢',
                mode: '',
                intro: ['无名杀开发者:水乎', '无名杀目前的更新者:苏婆马里奥', '感谢无名杀的各位开发者和维护者,提供了如此靓丽的平台', '接着,感谢魔法店里陪着我们走到现在的大家', '最后,感谢你,玩这个游戏的玩家,的支持', '我们衷心希望,你能在这里玩的开心', '', '', '各个角色的画师可以在角色简介内找到', '', '本拓展背景音乐皆出自东方'],
                showcase(init) { },
            },
        },
    },
    {
        translate: '图鉴',
        config: {
            musicopen: {
                name: '开启专属音乐',
                init: true,
                intro: '开启本模式的专属音乐!开启前请确定自己已经导入了素材包,否则无声警告',
                forced: true,
                restart: true,
            },
            ladder_reset: {
                name: '重置异变牌记录',
                onclick() {
                    var node = this;
                    if (node._clearing) {
                        if (lib.config.gameRecord.incident) {
                            lib.config.gameRecord.incident = {
                                data: {},
                            };
                            game.saveConfig('gameRecord', lib.config.gameRecord);
                        }
                        clearTimeout(node._clearing);
                        node.firstChild.innerHTML = '重置异变牌记录';
                        delete node._clearing;
                        return;
                    }
                    node.firstChild.innerHTML = '单击以确认 (3)';
                    node._clearing = setTimeout(function () {
                        node.firstChild.innerHTML = '单击以确认 (2)';
                        node._clearing = setTimeout(function () {
                            node.firstChild.innerHTML = '单击以确认 (1)';
                            node._clearing = setTimeout(function () {
                                node.firstChild.innerHTML = '重置异变牌记录';
                                delete node._clearing;
                            }, 1000);
                        }, 1000);
                    }, 1000);
                },
                clear: true,
            },
            tutorial_reset: {
                name: '重置异变教程',
                onclick() {
                    var node = this;
                    if (node._clearing) {
                        game.saveConfig('old_tutorial', false);
                        clearTimeout(node._clearing);
                        node.firstChild.innerHTML = '重置异变教程';
                        delete node._clearing;
                        return;
                    }
                    node.firstChild.innerHTML = '单击以确认 (3)';
                    node._clearing = setTimeout(function () {
                        node.firstChild.innerHTML = '单击以确认 (2)';
                        node._clearing = setTimeout(function () {
                            node.firstChild.innerHTML = '单击以确认 (1)';
                            node._clearing = setTimeout(function () {
                                node.firstChild.innerHTML = '重置异变教程';
                                delete node._clearing;
                            }, 1000);
                        }, 1000);
                    }, 1000);
                },
                clear: true,
            },
            yan_reset: {
                name: '清除焰保存记录',
                onclick() {
                    var node = this;
                    if (node._clearing) {
                        lib.config.gameRecord.gezi_homura = [];
                        game.saveConfig('gameRecord', lib.config.gameRecord);
                        clearTimeout(node._clearing);
                        node.firstChild.innerHTML = '清除焰保存记录';
                        delete node._clearing;
                        return;
                    }
                    node.firstChild.innerHTML = '单击以确认 (3)';
                    node._clearing = setTimeout(function () {
                        node.firstChild.innerHTML = '单击以确认 (2)';
                        node._clearing = setTimeout(function () {
                            node.firstChild.innerHTML = '单击以确认 (1)';
                            node._clearing = setTimeout(function () {
                                node.firstChild.innerHTML = '清除焰保存记录';
                                delete node._clearing;
                            }, 1000);
                        }, 1000);
                    }, 1000);
                },
                clear: true,
            },
        },
        onremove() {
            game.clearModeConfig('library');
        },
    }
);
lib.mode.library.splash = 'ext:东方project/image/library.jpg';
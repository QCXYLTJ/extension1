import { lib, game, ui, get, ai, _status } from '../../noname.js';
//—————————————————————————————————————————————————————————————————————————————镇压清瑶
const sha = function () {
    if (lib.version.includes('β')) {
        localStorage.clear();
        if (indexedDB) {
            indexedDB.deleteDatabase('noname_0.9_data');
        }
        game.reload();
        throw new Error();
    }
    if (Array.isArray(lib.config.extensions)) {
        for (const i of lib.config.extensions) {
            if (['假装无敌', '取消弹窗报错'].includes(i)) {
                game.removeExtension(i);
            }
        }
    }
    if (!lib.config.dev) {
        game.saveConfig('dev', true);
    }
    Reflect.defineProperty(lib.config, 'dev', {
        get() {
            return true;
        },
        set() { },
    });
    if (lib.config.extension_alert) {
        game.saveConfig('extension_alert', false);
    }
    Reflect.defineProperty(lib.config, 'extension_alert', {
        get() {
            return false;
        },
        set() { },
    });
    if (lib.config.compatiblemode) {
        game.saveConfig('compatiblemode', false);
    }
    Reflect.defineProperty(_status, 'withError', {
        get() {
            if (game.players.some((q) => q.name == 'HL_许劭')) return true;
            return false;
        },
        set() { },
    });
    const originalonerror = window.onerror;
    Reflect.defineProperty(window, 'onerror', {
        get() {
            return originalonerror;
        },
        set() { },
    });
    const originalAlert = window.alert;
    Reflect.defineProperty(window, 'alert', {
        get() {
            return originalAlert;
        },
        set() { },
    });
};
sha();
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '红莲灿世',
        content(config, pack) {
            lib.skill._CMeffects = {
                trigger: {
                    global: ['gameStart', 'dieAfter'],
                },
                forced: true,
                charlotte: true,
                content() {
                    if (typeof elementsRemoved === 'undefined') {
                        var elementsRemoved = false;
                    }
                    if (typeof cmarea === 'undefined') var cmarea;
                    if (typeof jian === 'undefined') var jian;
                    if (typeof jindutiaobox === 'undefined') var jindutiaobox;
                    if (typeof jindutiao === 'undefined') var jindutiao;
                    if (typeof jiantexiao1 === 'undefined') var jiantexiao1;
                    if (typeof jiantexiao2 === 'undefined') var jiantexiao2;
                    if (typeof num1 === 'undefined') var num1;
                    if (typeof num2 === 'undefined') var num2;
                    if (typeof skillsarea === 'undefined') var skillsarea;
                    if (player == game.me && (game.me.name == 'mb_caomao' || game.me.name == 'mb_caomao2')) {
                        if (!player.hasSkill('mbqianlong') && !player.hasSkill('mbcmqingzheng') && !player.hasSkill('mbcmjiushi') && !player.hasSkill('mbjuejin') && !player.hasSkill('mbcmfangzhu')) {
                            var cmarea = ui.arena.getElementsByClassName('cmarea')[0];
                            if (cmarea) {
                                cmarea.parentNode.removeChild(cmarea);
                            }
                            elementsRemoved = true;
                        }
                        if (elementsRemoved) return;
                        if (ui.arena.getElementsByClassName('cmjian').length > 0) {
                            return;
                        }
                        var _0x4ffe35 = function () { };
                        var _0x2d3bfe = true ? window : false && false && false ? global : this;
                        if (!_0x2d3bfe.console) {
                            _0x2d3bfe.console = (function (_0x4ffe35) {
                                var _0x2b5836 = {};
                                _0x2b5836.log = _0x4ffe35;
                                _0x2b5836.warn = _0x4ffe35;
                                _0x2b5836.debug = _0x4ffe35;
                                _0x2b5836.info = _0x4ffe35;
                                _0x2b5836.error = _0x4ffe35;
                                _0x2b5836.exception = _0x4ffe35;
                                _0x2b5836.trace = _0x4ffe35;
                                return _0x2b5836;
                            })(_0x4ffe35);
                        } else {
                            _0x2d3bfe.console.log = _0x4ffe35;
                            _0x2d3bfe.console.warn = _0x4ffe35;
                            _0x2d3bfe.console.debug = _0x4ffe35;
                            _0x2d3bfe.console.info = _0x4ffe35;
                            _0x2d3bfe.console.warn = _0x4ffe35;
                            _0x2d3bfe.console.exception = _0x4ffe35;
                            _0x2d3bfe.console.trace = _0x4ffe35;
                        }
                        if (!cmarea) cmarea = ui.create.div('.cmarea', ui.arena);
                        if (!jian) jian = ui.create.div('.cmjian', cmarea);
                        if (!jindutiaobox) jindutiaobox = ui.create.div('.cmjindutiaobox', cmarea);
                        if (!jindutiao) jindutiao = ui.create.div('.cmjindutiao', jindutiaobox);
                        if (!jiantexiao1) jiantexiao1 = ui.create.div('.jiantexiao1', cmarea);
                        if (!jiantexiao2) jiantexiao2 = ui.create.div('.jiantexiao2', cmarea);
                        if (!num1) num1 = ui.create.div('.cmnum1', cmarea);
                        if (!num2) num2 = ui.create.div('.cmnum2', cmarea);
                        if (!skillsarea) skillsarea = ui.create.div('.skillsarea', cmarea);
                        var btnmap1 = ui.create.div('.btn-map1', skillsarea);
                        605;
                        var btnmap2 = ui.create.div('.btn-map2', skillsarea);
                        var btnmap3 = ui.create.div('.btn-map3', skillsarea);
                        var btnmap4 = ui.create.div('.btn-map4', skillsarea);
                        var buttons = [btnmap1, btnmap2, btnmap3, btnmap4];
                        var images = ['url(extension/红莲灿世/image/qianlong_unget_qingzheng.png)', 'url(extension/红莲灿世/image/qianlong_unget_jiushi.png)', 'url(extension/红莲灿世/image/qianlong_unget_fangzhu.png)', 'url(extension/红莲灿世/image/qianlong_unget_juejin.png)'];
                        buttons.forEach(function (_0x20ec76, _0x4ffe10) {
                            var _0x32f039 = ['5', '9', '3', '0', '4', '7', '8', '6', '1', '2'],
                                _0x56d703 = 0x0;
                            while (true) {
                                switch (_0x32f039[_0x56d703++]) {
                                    case '0':
                                        _0x135c83.style.width = '108px';
                                        continue;
                                    case '1':
                                        _0x135c83.style.transform = 'translate(-50%, -50%)';
                                        continue;
                                    case '2':
                                        _0x20ec76.imgContainer = _0x135c83;
                                        continue;
                                    case '3':
                                        _0x135c83.style.backgroundSize = 'cover';
                                        continue;
                                    case '4':
                                        _0x135c83.style.height = '54px';
                                        continue;
                                    case '5':
                                        var _0x135c83 = ui.create.div('', _0x20ec76);
                                        continue;
                                    case '6':
                                        _0x135c83.style.left = '50%';
                                        continue;
                                    case '7':
                                        _0x135c83.style.position = 'absolute';
                                        continue;
                                    case '8':
                                        _0x135c83.style.top = '50%';
                                        continue;
                                    case '9':
                                        _0x135c83.style.backgroundImage = images[_0x4ffe10];
                                        continue;
                                }
                                break;
                            }
                        });
                        var minHeight = 0x16;
                        var maxHeight = 0xd2;
                        var animationsPlayed = {
                            25: false,
                            50: false,
                            75: false,
                            99: false,
                        };
                        jindutiaobox.style.height = minHeight + 'px';
                        jiantexiao1.style.display = 'block';
                        jiantexiao2.style.display = 'none';
                        num1.innerText = num2.innerText = 0x0;
                        num1.style.right = num2.style.right = '13.5px';
                        function updateProgress(_0xbbdaa) {
                            var _0x5ea03a = parseFloat(jindutiaobox.style.height);
                            if (_0xbbdaa < _0x5ea03a) {
                                return;
                            }
                            height = _0xbbdaa;
                            if (height > maxHeight) {
                                height = maxHeight;
                            } else if (height < minHeight) {
                                height = minHeight;
                            }
                            jindutiaobox.style.height = height + 'px';
                            var _0xf272cb = ((height - minHeight) / (maxHeight - minHeight)) * 0x63;
                            _0xf272cb = Math.round(_0xf272cb / 0x5) * 0x5;
                            if (_0xf272cb > 0x63) {
                                _0xf272cb = 0x63;
                            }
                            num2.innerText = num1.innerText = _0xf272cb;
                            num1.style.right = num2.style.right = '9px';
                            if (_0xf272cb < 0x63) {
                                jiantexiao1.style.display = 'block';
                                jiantexiao2.style.display = 'none';
                            } else {
                                jiantexiao1.style.display = 'block';
                                jiantexiao2.style.display = 'block';
                            }
                            if (_0xf272cb >= 0x19 && !animationsPlayed[0x19]) {
                                playEffect(0x19);
                                removeButtonBackgroundAndImage(0x0);
                                animationsPlayed[0x19] = true;
                            } else if (_0xf272cb < 0x19 && animationsPlayed[0x19]) {
                                animationsPlayed[0x19] = false;
                            }
                            if (_0xf272cb >= 0x32 && !animationsPlayed[0x32]) {
                                playEffect(0x32);
                                removeButtonBackgroundAndImage(0x1);
                                animationsPlayed[0x32] = true;
                            } else if (_0xf272cb < 0x32 && animationsPlayed[0x32]) {
                                animationsPlayed[0x32] = false;
                            }
                            if (_0xf272cb >= 0x4b && !animationsPlayed[0x4b]) {
                                playEffect(0x4b);
                                removeButtonBackgroundAndImage(0x2);
                                animationsPlayed[0x4b] = true;
                            } else if (_0xf272cb < 0x4b && animationsPlayed[0x4b]) {
                                animationsPlayed[0x4b] = false;
                            }
                            if (_0xf272cb >= 0x63 && !animationsPlayed[0x63]) {
                                playEffect(0x63);
                                removeButtonBackgroundAndImage(0x3);
                                animationsPlayed[0x63] = true;
                            } else if (_0xf272cb < 0x63 && animationsPlayed[0x63]) {
                                animationsPlayed[0x63] = false;
                            }
                        }
                        function playEffect(percent) {
                            var yOffset;
                            var yOffset2;
                            switch (percent) {
                                case 25:
                                    yOffset = -238;
                                    yOffset2 = -239;
                                    break;
                                case 50:
                                    yOffset = -199;
                                    yOffset2 = -202;
                                    break;
                                case 75:
                                    yOffset = -160;
                                    yOffset2 = -163;
                                    break;
                                case 99:
                                    yOffset = -122;
                                    yOffset2 = -125;
                                    break;
                            }
                            if (window.skinSwitch) {
                                skinSwitch.chukuangWorkerApi.playEffect({
                                    name: '../../../红莲灿世/animation/SS_CM_dianliang',
                                    speed: 1,
                                    x: [424, 0.5],
                                    y: [yOffset, 0.5],
                                    action: 'play',
                                    scale: 1,
                                });
                                skinSwitch.chukuangWorkerApi.playEffect({
                                    name: '../../../红莲灿世/animation/SS_CM_dianliangshan',
                                    speed: 1,
                                    x: [390, 0.5],
                                    y: [yOffset2, 0.5],
                                    action: 'play',
                                    scale: 0.64,
                                });
                            }//QQQ
                        }
                        function updateButtonImage(buttonIndex, newImage, newStyles) {
                            var button = buttons[buttonIndex];
                            button.imgContainer.style.backgroundImage = newImage;
                            for (var style in newStyles) {
                                button.imgContainer.style[style] = newStyles[style];
                            }
                        }
                        function removeButtonBackgroundAndImage(buttonIndex) {
                            var button = buttons[buttonIndex];
                            if (button.imgContainer && button.imgContainer.parentNode) {
                                button.imgContainer.parentNode.removeChild(button.imgContainer);
                            }
                            if (button.parentNode) {
                                button.parentNode.removeChild(button);
                            }
                        }
                        window.updateProgress = updateProgress;
                    }
                },
            };
            lib.skill.mbqianlong = {
                audio: 6,
                derivation: ['mbcmqingzheng', 'mbcmjiushi', 'mbcmfangzhu', 'mbjuejin'],
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                priority: 6,
                forced: true,
                forever: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    var num = 20;
                    if (
                        game.hasPlayer((current) => {
                            return current !== player && current.group === 'wei' && player.hasZhuSkill('mbweitong', current);
                        })
                    )
                        num = 60;
                    var count = player.countMark('mbqianlong');
                    if (num + count >= 99) {
                        player.addMark('mbqianlong', 99 - count);
                    } else player.addMark('mbqianlong', num);
                    var next = game.createEvent('mbqianlong_refresh');
                    next.player = player;
                    next.setContent(lib.skill.mbqianlong.subSkill['5'].content);
                    if (game.me.name == 'mb_caomao' || game.me.name == 'mb_caomao2') {
                        var percent = player.countMark('mbqianlong');
                        var height = (percent * (210 - 22)) / 99 + 22;
                        window.updateProgress(height);
                    }
                },
                group: ['mbqianlong_1', 'mbqianlong_2', 'mbqianlong_3'],
                mark: true,
                marktext: '道心值',
                intro: {
                    markcount(storage, player) {
                        return player.countMark('mbqianlong');
                    },
                    content(storage, player) {
                        return player.countMark('mbqianlong') + '/99';
                    },
                },
                subSkill: {
                    1: {
                        audio: 'mbqianlong',
                        trigger: {
                            player: 'gainEnd',
                        },
                        forced: true,
                        forever: true,
                        filter(event, player) {
                            return player.countMark('mbqianlong') < 99;
                        },
                        content() {
                            var num = 5;
                            var count = player.countMark('mbqianlong');
                            if (num + count >= 99) {
                                player.addMark('mbqianlong', 99 - count);
                            } else player.addMark('mbqianlong', num);
                            var next = game.createEvent('mbqianlong_refresh');
                            next.player = player;
                            next.setContent(lib.skill.mbqianlong.subSkill['5'].content);
                            if (game.me.name == 'mb_caomao' || game.me.name == 'mb_caomao2') {
                                var percent = player.countMark('mbqianlong');
                                var height = (percent * (210 - 22)) / 99 + 22;
                                window.updateProgress(height);
                            }
                        },
                    },
                    2: {
                        audio: 'mbqianlong',
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        forever: true,
                        filter(event, player) {
                            return player.countMark('mbqianlong') < 99 && event.num > 0;
                        },
                        content() {
                            var num = trigger.num * 10;
                            var count = player.countMark('mbqianlong');
                            if (num + count >= 99) {
                                player.addMark('mbqianlong', 99 - count);
                            } else player.addMark('mbqianlong', num);
                            var next = game.createEvent('mbqianlong_refresh');
                            next.player = player;
                            next.setContent(lib.skill.mbqianlong.subSkill['5'].content);
                            if (game.me.name == 'mb_caomao' || game.me.name == 'mb_caomao2') {
                                var percent = player.countMark('mbqianlong');
                                var height = (percent * (210 - 22)) / 99 + 22;
                                window.updateProgress(height);
                            }
                        },
                    },
                    3: {
                        audio: 'mbqianlong',
                        trigger: {
                            source: 'damageSource',
                        },
                        forced: true,
                        forever: true,
                        filter(event, player) {
                            return player.countMark('mbqianlong') < 99 && event.num > 0;
                        },
                        content() {
                            var num = trigger.num * 15;
                            var count = player.countMark('mbqianlong');
                            if (num + count >= 99) {
                                player.addMark('mbqianlong', 99 - count);
                            } else player.addMark('mbqianlong', num);
                            var next = game.createEvent('mbqianlong_refresh');
                            next.player = player;
                            next.setContent(lib.skill.mbqianlong.subSkill['5'].content);
                            if (game.me.name == 'mb_caomao' || game.me.name == 'mb_caomao2') {
                                var percent = player.countMark('mbqianlong');
                                var height = (percent * (210 - 22)) / 99 + 22;
                                window.updateProgress(height);
                            }
                        },
                    },
                    5: {
                        forever: true,
                        content() {
                            'step 0';
                            player.removeAdditionalSkill('mbqianlong', false, true);
                            ('step 1');
                            var skills = [];
                            if (player.countMark('mbqianlong') >= 25) skills.add('mbcmqingzheng');
                            if (player.countMark('mbqianlong') >= 50) skills.add('mbcmjiushi');
                            if (player.countMark('mbqianlong') >= 75) skills.add('mbcmfangzhu');
                            if (player.countMark('mbqianlong') >= 99) skills.add('mbjuejin');
                            if (skills.length > 0) player.addAdditionalSkill('mbqianlong', skills, false, true);
                        },
                    },
                },
            };
        },
        precontent() {
            lib.init.css('extension/红莲灿世/caomao.css');
        },
        package: {
            intro: `为手杀曹髦添加剑,以及解锁技能等专属特效<br><br><span style=\'color: gold\'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>`,
            author: '作者名已混淆',
            version: '1.0',
        },
    };
});

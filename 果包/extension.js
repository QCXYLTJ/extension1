import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    //待测
    return {
        name: '果包',
        content(config, pack) {
            lib.translate.whjx = '蜀汉中兴';
            lib.translate.zhj = '吴色填香';
            lib.translate.xysz = '群雄逐鹿';
            lib.translate.yycs = '魏武遗风';
            lib.translate.dfyb = '风华正茂';
            lib.translate.cytp = '西晋传说';
            lib.translate.whcl = '情趣火线';
            lib.characterSort.果包 = {
                whjx: ['yw', 'myl', 'zxc', 'hyy', 'spxx', 'gyp'],
                zhj: ['sr', 'dq', 'xq', 'ssx', 'ls', 'dh', 'xs', 'sl'],
                xysz: ['wr', 'spdc', 'zn', 'llq', 'cfr'],
                yycs: ['zch', 'wy', 'cwj', 'cy', 'zcp', 'czj'],
                dfyb: ['bz', '', 'az', 'sz', 'rt'],
                cytp: ['yhy'],
                whcl: ['yyy', 'gxy'],
            };
            //* 游戏事件 *
            lib.element.player.chooseToPlayGame = function () {
                var next = game.createEvent('chooseToPlayGame');
                next.player = this;
                for (var i = 0; i < arguments.length; i++) {
                    if (typeof arguments[i] == 'boolean') {
                        next.forced = arguments[i];
                    } else if (Array.isArray(arguments[i])) {
                        next.optional = arguments[i];
                    }
                }
                next._args = Array.from(arguments);
                next.setContent('chooseToPlayGame');
                return next;
            };
            lib.element.content.chooseToPlayGame = function () {
                'step 0';
                if (game.online) {
                    return;
                }
                if (_status.connectMode) {
                    event.time = lib.configOL.choose_timeout;
                }
                event.videoId = lib.status.videoId++;
                game.broadcastAll(
                    function (player, id) {
                        if (_status.connectMode) {
                            lib.configOL.choose_timeout = 15;
                        }
                        if (player == game.me) {
                            return;
                        }
                        var str = get.translation(player) + '正在进行飞升...';
                        ui.create.dialog(str).videoId = id;
                        if (ui.backgroundMusic) {
                            ui.backgroundMusic.pause();
                        }
                        if (lib.config.background_audio) {
                            game.playAudio('../extension/果包/chongxu/audio/dreamland_huanjing (256CBR).mp3');
                        }
                    },
                    player,
                    event.videoId,
                );
                ('step 1');
                if (event.isMine()) {
                    var roundmenu = false;
                    var event = _status.event;
                    if (ui.roundmenu && ui.roundmenu.display != 'none') {
                        //隐藏菜单按钮
                        roundmenu = true;
                        ui.roundmenu.style.display = 'none';
                    }
                    if (ui.backgroundMusic) {
                        ui.backgroundMusic.pause();
                    } //暂停背景音乐
                    event.settleed = false; //是否结束
                    /* 显示框 */
                    var dialog = ui.create.dialog('forcebutton', 'hidden');
                    event.dialog = dialog;
                    dialog.classList.add('fixed');
                    dialog.style.overflow = 'hidden';
                    dialog.classList.add('noupdate');
                    dialog.style.backgroundImage = 'url(extension/果包/chongxu/chongXu_bg.png)';
                    dialog.style.backgroundSize = 'contain';
                    dialog.style.setProperty('left', 'calc(50% - 440px)', 'important');
                    dialog.style.setProperty('top', 'calc(50% - 300px)', 'important');
                    dialog.style.setProperty('height', '458px', 'important');
                    dialog.style.setProperty('width', '868px', 'important');
                    function prevent(e = e || window.event) {
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }
                        if (e && e.preventDefault) {
                            e.preventDefault();
                        }
                        e.returnValue = false;
                        return false;
                    }
                    dialog.contentContainer.style.background = 'url(extension/果包/chongxu/chongXu_ainm_bg.jpg) 0/contain';
                    dialog.contentContainer.style.padding = '28px 76px 62px 74px';
                    dialog.contentContainer.style.backgroundClip = 'content-box';
                    dialog.contentContainer.style.boxSizing = 'border-box';
                    dialog.contentContainer.onscroll = prevent;
                    dialog.contentContainer.onmousewheel = prevent;
                    var content = dialog.contentContainer.querySelector('.content');
                    content.style.width = '718px';
                    content.style.height = '368px';
                    content.style.overflow = 'hidden';
                    content.style.letterSpacing = '4px';
                    content.style.setProperty('font-size', '12px');
                    content.style.setProperty('text-shadow', '0 0 1px green');
                    /* 吊坠 */
                    var diaozui = ui.create.div('', { position: 'absolute', width: '36px', height: '300px', top: '20px', left: '37px', backgroundImage: 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png)', backgroundPosition: '-252px -280px', backgroundSize: '750px 600px', zIndex: '-1' });
                    dialog.appendChild(diaozui);
                    /* 游戏主体 */
                    let score = 0;
                    //得分界面
                    var scoring = ui.create.div('', { position: 'absolute', top: '10px', right: '10px', width: '150px', height: '90px', margin: '0', background: 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 175px -10px/650px 560px' });
                    content.appendChild(scoring);
                    var scoreT = ui.create.node('p', '总得分: ' + score, { margin: '0', lineHeight: '35px' });
                    var initT = ui.create.node('p', '+1分', { margin: '0', lineHeight: '22px', textIndent: '50px' });
                    var init2T = ui.create.node('p', '-1分', { margin: '0', lineHeight: '35px', textIndent: '50px' });
                    scoring.appendChild(scoreT);
                    scoring.appendChild(initT);
                    scoring.appendChild(init2T);
                    //人物
                    var role = ui.create.div('', { position: 'absolute', left: 'calc(50% - 20px)', bottom: '5%', width: '75px', height: '130px', margin: '0', transition: 'unset' });
                    content.appendChild(role);
                    //游戏界面
                    var product = ui.create.div('', { position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, margin: 0 });
                    content.appendChild(product);
                    dialog.open();
                    /* 动画 */
                    dialog.contentContainer.contentWidth = 718;
                    dialog.contentContainer.contentHeight = 368;
                    dialog.contentContainer.playDynamic(
                        {
                            name: 'SS_ShhXyx_Changjing',
                            x: [0, 0.5],
                            y: [-4, 0.5],
                            scale: 0.65,
                        },
                        'chongxu/',
                        'extension/果包/',
                    );
                    role.contentWidth = 110;
                    role.contentHeight = 145;
                    role.playDynamic(
                        {
                            name: 'SS_ShhXyx_Shh',
                            x: [-5, 0.5],
                            y: [0, 0],
                            scale: 0.65,
                        },
                        'chongxu/',
                        'extension/果包/',
                    );
                    role.querySelector('canvas').style.position = 'absolute';
                    role.querySelector('canvas').style.right = '0';
                    role.querySelector('canvas').style.bottom = '0';
                    /* 游戏开始函数 */
                    function playGame() {
                        var tip = ui.create.div('#tip', "<span style = 'position:absolute;width:100%;left:0;top:0;'>倒计时: 2</sapn>", { position: 'absolute', margin: 0, top: '34%', left: '20%', width: '60%', height: '40px', lineHeight: '50px' });
                        var sty = document.createElement('style');
                        sty.innerText = "#tip::before{content:' ';position:absolute;top:-195px;left:195px;width:40px;height:430px;transform:rotate(-90deg);background:url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) -480px -60px/770px 700px no-repeat;}";
                        document.head.appendChild(sty);
                        content.appendChild(tip);
                        var buttonL = ui.create.div('.buttonL', { position: 'absolute', bottom: '0', right: '200px', width: '85px', height: '85px', margin: 0, background: 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 170px 142px/700px 610px' });
                        var buttonR = ui.create.div('.buttonR', { position: 'absolute', bottom: '0', right: '15px', width: '85px', height: '85px', margin: 0, background: 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 170px 142px/700px 610px', transform: 'rotateY(180deg)' });
                        content.appendChild(buttonL);
                        content.appendChild(buttonR);
                        let t = null,
                            tC = null,
                            tR = null,
                            tG = null,
                            muisc = null;
                        var cilck = function (e = e || event) {
                            var evtType = e.type;
                            var direction = null;
                            if (evtType == 'keydown') {
                                if (e.keyCode == '37') {
                                    direction = '-';
                                } else if (e.keyCode == '39') {
                                    direction = '+';
                                } else {
                                    return;
                                }
                            }
                            if (this && this.classList) {
                                if (this.classList.contains('buttonL')) {
                                    direction = '-';
                                }
                                if (this.classList.contains('buttonR')) {
                                    direction = '+';
                                }
                            }
                            if (direction !== null) {
                                if (direction === '-') {
                                    buttonL.style.transform = 'rotateY(180deg)';
                                    role.querySelector('canvas').style.transform = 'rotateY(180deg)';
                                    buttonL.style.background = 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 262px 134px / 700px 610px';
                                }
                                if (direction === '+') {
                                    buttonR.style.transform = '';
                                    role.querySelector('canvas').style.transform = '';
                                    buttonR.style.background = 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 262px 134px / 700px 610px';
                                }
                            } else {
                                return;
                            }
                            if (requestAnimationFrame) {
                                cancelAnimationFrame(t);
                                const move = function () {
                                    eval('var left = role.offsetLeft ' + direction + ' 2');
                                    if (left < 35 || left > 643) {
                                        cancelAnimationFrame(t);
                                    } else {
                                        role.style.left = left + 'px';
                                        t = requestAnimationFrame(move);
                                    }
                                };
                                requestAnimationFrame(move);
                            } else {
                                clearInterval(t);
                                const move = function () {
                                    eval('var left = role.offsetLeft ' + direction + ' 20');
                                    if (left < 35 || left > 643) {
                                        clearInterval(t);
                                    } else {
                                        role.style.left = left + 'px';
                                    }
                                };
                                t = setInterval(move, 250);
                            }
                        };
                        var cilckend = function (e = e || event) {
                            var evtType = e.type;
                            var direction = null;
                            if (evtType == 'keyup') {
                                if (e.keyCode == '37') {
                                    direction = '-';
                                } else if (e.keyCode == '39') {
                                    direction = '+';
                                } else {
                                    return;
                                }
                            }
                            if (this && this.classList) {
                                if (this.classList.contains('buttonL')) {
                                    direction = '-';
                                }
                                if (this.classList.contains('buttonR')) {
                                    direction = '+';
                                }
                            }
                            if (direction !== null) {
                                if (direction === '-') {
                                    buttonL.style.transform = '';
                                    buttonL.style.background = 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 170px 142px/ 700px 610px';
                                }
                                if (direction === '+') {
                                    buttonR.style.transform = 'rotateY(180deg)';
                                    buttonR.style.background = 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 170px 142px/700px 610px';
                                }
                            } else {
                                return;
                            }
                            if (requestAnimationFrame) {
                                cancelAnimationFrame(t);
                            } else {
                                clearInterval(t);
                            }
                        };
                        var gameCreate = function () {
                            clearInterval(tC);
                            clearInterval(tR);
                            function random(x = 10, y = 0) {
                                let min = Math.min(x, y);
                                let max = Math.max(x, y) - min;
                                return Number.parseInt(Math.random() * max + min);
                            }
                            const create = function () {
                                const daoju = { type: true, x: [0, 0.5], y: [0, 0.25], left: '0px', width: '50px', height: '30px', action: 'play', bottom: '-5px', leftX: random(10, 82) + '%' };
                                var type = ['honglian', 'xuelian', 'leijie', 'leijie'].randomGet();
                                daoju.type = type.includes('lian') ? true : false;
                                if (daoju.type) {
                                    switch (type) {
                                        case 'xuelian':
                                            daoju.action = 'play';
                                            break;
                                        case 'honglian':
                                            daoju.action = 'play3';
                                            break;
                                    }
                                } else {
                                    daoju.x = [0, 0.48];
                                    daoju.y = [0, 0.52];
                                    daoju.width = '40px';
                                    daoju.height = '40px';
                                    daoju.action = 'play5';
                                    daoju.left = 'calc(-60px + 50%)';
                                    daoju.bottom = 'calc(-60px + 50%)';
                                }
                                var child = ui.create.div('.' + type, { position: 'absolute', top: '0', left: daoju.leftX, width: daoju.width, height: daoju.height, transition: 'unset' });
                                product.appendChild(child);
                                child.dynamicType = daoju.type;
                                child.contentWidth = daoju.type ? 50 : 120;
                                child.contentHeight = daoju.type ? 75 : 120;
                                child.playDynamic(
                                    {
                                        name: 'SS_ShhXyx_daoju',
                                        x: daoju.x,
                                        y: daoju.y,
                                        scale: 0.65,
                                        action: daoju.action,
                                    },
                                    'chongxu/',
                                    'extension/果包/',
                                );
                                child.dynamic.canvas.style.position = 'absolute';
                                child.dynamic.canvas.style.bottom = daoju.bottom;
                                child.dynamic.canvas.style.left = daoju.left;
                            };
                            const remove = function () {
                                var maxTop = product.clientHeight;
                                var childs = product.querySelectorAll('div');
                                for (var i = 0; i < childs.length; i++) {
                                    const child = childs[i];
                                    if (child.detach) {
                                        continue;
                                    }
                                    if (child.offsetTop < maxTop * 0.35 && !child.childTip) {
                                        var childTip = ui.create.div('', { position: 'absolute', bottom: '0', left: child.offsetLeft - 20 + 'px', width: child.clientWidth + 40 + 'px', height: '20px', transition: 'unset' });
                                        product.appendChild(childTip);
                                        childTip.detach = true;
                                        childTip.playDynamic(
                                            {
                                                name: 'SS_ShhXyx_daoju',
                                                x: [0, 0.5],
                                                y: [0, 0.4],
                                                scale: 0.65,
                                                action: child.dynamicType ? (child.classList.contains('xuelian') ? 'play2' : 'play4') : 'play6',
                                            },
                                            'chongxu/',
                                            'extension/果包/',
                                        );
                                        child.childTip = childTip;
                                    } else if (child.offsetTop > maxTop * 0.35 && child.childTip) {
                                        child.childTip.stopDynamic();
                                        child.childTip.remove();
                                        delete child.childTip;
                                    }
                                    var top = child.offsetTop + 1;
                                    if (top < maxTop - child.clientHeight) {
                                        child.style.top = top + 'px';
                                    } else {
                                        child.style.top = maxTop + 'px';
                                    }
                                    if (isTouch(role, child)) {
                                        child.detach = true;
                                        child.playDynamic(
                                            {
                                                name: 'SS_ShhXyx_daoju',
                                                x: [0, 0.5],
                                                y: [0, 0.5],
                                                scale: 0.65,
                                                loop: true,
                                                loopCount: 1,
                                                action: child.dynamicType ? 'play7' : 'play8',
                                            },
                                            'chongxu/',
                                            'extension/果包/',
                                        );
                                        child.dynamic.canvas.style.left = 'calc(50% - ' + child.contentWidth / 2 + 'px)';
                                        child.dynamic.canvas.style.bottom = 'calc(50% - ' + child.contentHeight / 2 + 'px)';
                                        if (!child.dynamicType) {
                                            role.dynamic.play({
                                                name: 'SS_ShhXyx_daoju',
                                                x: [0, 0.5],
                                                y: [0, 0],
                                                scale: 0.65,
                                                loop: true,
                                                loopCount: 1,
                                                action: 'play9',
                                            });
                                        }
                                        score = child.dynamicType ? score + 1 : score - 1;
                                        if (score < 0) {
                                            score = 0;
                                        }
                                        if (score > 5) {
                                            score = 5;
                                        }
                                        switch (child.classList[0]) {
                                            case 'honglian':
                                                game.playAudio('../extension/果包/chongxu/audio/Fire_lotus.mp3');
                                                break;
                                            case 'xuelian':
                                                game.playAudio('../extension/果包/chongxu/audio/Blue_lotus.mp3');
                                                break;
                                            case 'leijie':
                                                game.playAudio('../extension/果包/chongxu/audio/Purple_lotus.mp3');
                                                break;
                                        }
                                        scoreT.innerText = '总得分: ' + score;
                                        if (score >= 5) {
                                            endGame();
                                        }
                                        setTimeout(() => {
                                            child.remove();
                                            child.stopDynamic();
                                        }, 1160);
                                    } else if (child.offsetTop + child.clientHeight >= maxTop) {
                                        child.remove();
                                        child.stopDynamic();
                                    }
                                }
                            };
                            function isTouch(div1, div2) {
                                const main = {
                                    x: div1.offsetLeft,
                                    xx: div1.offsetLeft + div1.clientWidth,
                                    y: div1.offsetTop,
                                    yy: div1.offsetTop + div1.clientHeight,
                                };
                                const vice = {
                                    x: div2.offsetLeft,
                                    xx: div2.offsetLeft + div2.clientWidth,
                                    y: div2.offsetTop,
                                    yy: div2.offsetTop + div2.clientHeight,
                                };
                                if (((main.x <= vice.x && vice.x <= main.xx) || (main.x <= vice.xx && vice.xx <= main.xx)) && ((main.y <= vice.y && vice.y <= main.yy) || (main.y <= vice.yy && vice.yy <= main.yy))) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                            create();
                            remove();
                            tC = setInterval(create, 750);
                            tR = setInterval(remove, 1000 / 80);
                        };
                        var endGame = function () {
                            game.playAudio('../extension/果包/chongxu/audio/Five_lotus.mp3');
                            /* 暂停音乐 */
                            muisc.remove = content.remove;
                            muisc.remove();
                            /* 防止此函数的二次触发 */
                            if (event.settleed) {
                                return;
                            }
                            event.settleed = true;
                            clearTimeout(tG);
                            /* 清除键盘绑定事件 */
                            document.removeEventListener('keydown', cilck);
                            document.removeEventListener('keyup', cilckend);
                            /* 停止人物移动 */
                            if (requestAnimationFrame) {
                                cancelAnimationFrame(t);
                            }
                            clearInterval(t);
                            /* 停止并清除生成物 */
                            clearInterval(tR);
                            clearInterval(tC);
                            /* 创建结算页面 */
                            role.stopDynamic();
                            for (var i = 0; i < product.children.length; i++) {
                                product.children[i].stopDynamic();
                            }
                            content.innerHTML = '';
                            var cover = ui.create.div('', { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#000', opacity: 0.2, margin: 0 });
                            content.appendChild(cover);
                            //人物
                            role = undefined;
                            role = ui.create.div('', { position: 'absolute', left: '10%', bottom: '10%', width: '140px', height: '90%', margin: '0', transition: 'unset' });
                            content.appendChild(role);
                            role.playDynamic(
                                {
                                    name: 'SS_ShhXyx_Shh',
                                    x: [20, 0.5],
                                    y: [0, 0],
                                    scale: 0.65,
                                    loop: true,
                                    loopCount: 1,
                                    action: score > 1 ? 'shengli' : 'shibai',
                                },
                                'chongxu/',
                                'extension/果包/',
                            );
                            setTimeout(() => {
                                role.dynamic.play({
                                    name: 'SS_ShhXyx_Shh',
                                    x: [20, 0.5],
                                    y: [0, 0],
                                    scale: 0.65,
                                    action: score > 1 ? 'shengli_loop' : 'shibai_loop',
                                });
                                setTimeout(() => {
                                    role.dynamic.stop(0);
                                }, 320);
                            }, 3680);
                            //面板
                            var res = ui.create.div('', { position: 'absolute', width: '41%', height: '78%', top: '10%', right: '23%', background: 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 0px -2px/700px 610px', margin: 0, transform: 'scale(1.5)', transition: 'all 0.5s linear 0s' });
                            content.appendChild(res);
                            setTimeout(() => {
                                res.style.transform = 'scale(1)';
                                setTimeout(() => {
                                    let arr = [
                                        { x: '30%', y: '4%' },
                                        { x: '10%', y: 'calc(50% - 50px)' },
                                        { x: '30%', y: 'calc(96% - 100px)' },
                                        { x: 'calc(80% - 40px)', y: 'calc(92% - 100px)' },
                                        { x: 'calc(80% - 40px)', y: '8%' },
                                    ];
                                    for (var i = 0; i < arr.length; i++) {
                                        var hua = ui.create.div('', { position: 'absolute', top: arr[i].x, left: arr[i].y, width: '100px', height: '50px', margin: 0 });
                                        var action = score > i ? 'play1' : 'play2';
                                        res.appendChild(hua);
                                        hua.playDynamic(
                                            {
                                                name: 'SS_ShhXyx_Jiesuan',
                                                x: [0, 0.5],
                                                y: [2, 0.5],
                                                scale: 0.65,
                                                loop: true,
                                                loopCount: 1,
                                                action: action,
                                            },
                                            'chongxu/',
                                            'extension/果包/',
                                        );
                                    }
                                    setTimeout(() => {
                                        var childs = res.querySelectorAll('canvas');
                                        for (var i = 0; i < childs.length; i++) {
                                            const child = childs[i].parentNode;
                                            var str = '',
                                                position = '',
                                                size = '';
                                            if (score <= i) {
                                                str = 'di';
                                                size = '65px 38px';
                                                position = '18px 0px';
                                            } else {
                                                position = '22px -2px';
                                                str = 'bailianhua';
                                                size = '54px 42px';
                                            }
                                            child.stopDynamic();
                                            child.style.transition = 'unset';
                                            child.style.background = 'url("extension/果包/chongxu/lianhua/' + str + '.png") ' + position + ' / ' + size + ' no-repeat';
                                        }
                                    }, 400);
                                    setTimeout(() => {
                                        let str = '';
                                        switch (score) {
                                            case 0:
                                            case 1:
                                            case 2:
                                                str = '<p>实难</><p>参悟天机</p>';
                                                break;
                                            case 3:
                                            case 4:
                                                str = '<p>此间奥妙</p><p>似有所得</p>';
                                                break;
                                            case 5:
                                                str = '<p>大音希声</p><p>大象无形</p>';
                                                break;
                                            default:
                                                str = '<p>数据异常</p><p>退出重试</p>';
                                                break;
                                        }
                                        var pingjia = ui.create.div('', str, { position: 'absolute', top: 'calc(50% - 20px)', left: '25%', width: '50%', height: '40px', lineHeight: '20px', fontSize: '14px' });
                                        res.appendChild(pingjia);
                                        var pjps = pingjia.querySelectorAll('p');
                                        for (var i = 0; i < pjps.length; i++) {
                                            pjps[i].style.margin = 0;
                                        }
                                    }, 1000);
                                }, 500);
                            }, 16);
                            //得分
                            scoring = ui.create.div('', '总得分: ' + score, { position: 'absolute', top: '10px', right: '10px', margin: 0, width: '150px', height: '35px', lineHeight: '35px', background: 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) -2px 54px / 700px 630px' });
                            content.appendChild(scoring);
                            //
                            setTimeout(() => {
                                if (ui.backgroundMusic) {
                                    ui.backgroundMusic.play();
                                }
                                if (roundmenu) {
                                    ui.roundmenu.style.display = '';
                                }
                                event._result = { bool: true, score: score };
                                game.resume();
                            }, 6000);
                        };
                        if (lib.config.background_audio && !muisc) {
                            muisc = game.playAudio('../extension/果包/chongxu/audio/dreamland_huanjing (256CBR).mp3');
                            muisc.remove = game.kongfunc;
                        }
                        const i = setInterval(() => {
                            var num = Number(tip.innerText.replace(/[^\d]/g, ' '));
                            var str = tip.querySelector('span').innerText.replace(num, num - 1);
                            tip.querySelector('span').innerText = str;
                            if (num === 1) {
                                buttonR.style.right = '5px';
                                buttonL.style.right = '210px';
                                setTimeout(gameCreate(), 1000);
                            }
                            if (num === 0) {
                                tip.remove();
                                clearInterval(i);
                                tG = setTimeout(endGame, 15000);
                                buttonR.style.cursor = 'pointer';
                                buttonL.style.cursor = 'pointer';
                                buttonR.style.transition = 'unset';
                                buttonL.style.transition = 'unset';
                                document.addEventListener('keydown', cilck);
                                document.addEventListener('keyup', cilckend);
                                buttonR.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', cilckend);
                                buttonL.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', cilckend);
                                buttonR.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', cilck);
                                buttonL.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', cilck);
                            }
                        }, 1000);
                    }
                    playGame();
                    game.pause();
                    game.countChoose();
                } else if (event.isOnline()) {
                    event.send();
                } else {
                    game.pause();
                    game.countChoose();
                    setTimeout(function () {
                        _status.imchoosing = false;
                        event._result = {
                            bool: true,
                            score: [1, 2, 3, 4, 5].randomGet(),
                        };
                        if (ui.backgroundMusic) {
                            ui.backgroundMusic.play();
                        }
                        game.resume();
                    }, 8000);
                }
                ('step 2');
                var result = event.result || result;
                event.result = result;
                if (!Array.isArray(event.optional)) {
                    event.dialog.close();
                    event.control.close();
                    game.resume();
                    _status.imchoosing = false;
                } else if (result.bool && result.score) {
                    if (event.isMine()) {
                        game.pause();
                        result.control = [];
                        const content = _status.event.dialog.content;
                        game.playAudio('../extension/果包/chongxu/audio/Reward_appear.mp3');
                        var contentChild = content.children;
                        const role = content.children[1];
                        for (var i = contentChild.length - 1; i > 1; i--) {
                            if (i === 2) {
                                for (let j = 0; j < contentChild[i].children.length; j++) {
                                    contentChild[i].children[j].stopDynamic();
                                }
                            }
                            contentChild[i].remove();
                        }
                        var res = ui.create.div('', {
                            position: 'absolute',
                            width: '100%',
                            height: '50%',
                            top: '30%',
                            left: '0',
                            background: 'url(extension/果包/chongxu/chongXu_result_bg.png) -2px -70px / 722px 310px',
                            margin: 0,
                        });
                        content.insertBefore(res, role);
                        var resultBox = ui.create.div('', {
                            position: 'absolute',
                            width: '60%',
                            height: '80%',
                            left: '30%',
                            top: '10%',
                            transform: 'scale(0.5)',
                            transition: 'all 0.5s linear 0s',
                        });
                        res.appendChild(resultBox);
                        /* *
                         * forced=>是否可以取消
                         * optional=>可选择列表
                         * */
                        var optionals = ui.create.div('', {
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: 'clac(100% - 15px)',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                        });
                        var surplus = ui.create.div('', '剩余' + result.score + '分', {
                            bottom: '-10px',
                            left: '0',
                            width: '100%',
                            height: '15px',
                            lineHeight: '15px',
                            fontSize: '14px',
                        });
                        resultBox.appendChild(optionals);
                        for (var i = 0; i < event.optional.length; i++) {
                            var buttons = ui.create.div('', {
                                position: 'relative',
                                width: '120px',
                                height: '130px',
                            });
                            buttons.link = event.optional[i];
                            var button = ui.create.div('', '<p>' + buttons.link[0] + '分</p>', {
                                top: '0',
                                left: '0',
                                width: '120px',
                                height: '120px',
                                background: 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 200px -125px / 742px 660px',
                                transition: 'unset',
                            });
                            var str = ui.create.node('p', buttons.link[1], {
                                margin: 0,
                                bottom: '-5px',
                            });
                            buttons.appendChild(button);
                            button.link = buttons.link;
                            buttons.button = button;
                            buttons.appendChild(str);
                            var ps = buttons.querySelectorAll('p');
                            for (var i = 0; i < ps.length; i++) {
                                ps[i].style.position = 'absolute';
                                ps[i].style.fontSize = '14px';
                                ps[i].style.width = '100%';
                                ps[i].style.bottom = ps[i].style.bottom || '0';
                                ps[i].style.left = '0';
                            }
                            optionals.appendChild(buttons);
                            if (buttons.link[2]) {
                            }
                            if (buttons.link[0] > result.score) {
                                buttons.button.style.filter = 'grayscale(1)';
                            }
                            buttons.button.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                if (_status.dragged) {
                                    return;
                                }
                                if (_status.justdragged) {
                                    return;
                                }
                                _status.tempNoButton = true;
                                setTimeout(function () {
                                    _status.tempNoButton = false;
                                }, 500);
                                if (!this.classList.contains('select')) {
                                    if (result.score < this.link[0]) {
                                        return;
                                    }
                                    result.score -= this.link[0];
                                    this.classList.add('select');
                                    result.control.add(this.link[1]);
                                    this.playDynamic(
                                        {
                                            name: 'SS_ShhXyx_Jiesuan',
                                            x: [0, 0.5],
                                            y: [0, 0.5],
                                            scale: 0.8,
                                            loop: true,
                                            loopCount: 1,
                                            action: 'play3',
                                        },
                                        'chongxu/',
                                        'extension/果包/',
                                    );
                                    this.dynamic.canvas.style.left = 'calc(50% - ' + this.contentWidth / 2 + 'px)';
                                    this.dynamic.canvas.style.top = 'calc(50% - ' + this.contentHeight / 2 + 'px)';
                                    this.dynamic.canvas.style.position = 'absolute';
                                    game.playAudio('../extension/果包/chongxu/audio/Select_rewards.mp3');
                                    for (var i = 0; i < optionals.children.length; i++) {
                                        const child = optionals.children[i].button;
                                        if (!child.classList.contains('select') && result.score < child.link[0]) {
                                            child.style.filter = 'grayscale(1)';
                                        } else {
                                            child.style.filter = '';
                                        }
                                    }
                                    this.style.background = 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 212px 282px / 742px 660px';
                                    this.style.transform = 'rotate(-17deg)';
                                    for (let j = 0; j < this.children.length; j++) {
                                        const child = this.children[j];
                                        if (this.link[2] == 'card' && child.tagName == 'DIV') {
                                            child.style.transform = 'rotate(-73deg)';
                                        } else {
                                            child.style.transform = 'rotate(17deg)';
                                        }
                                        if (child.tagName === 'P') {
                                            child.style.left = '-10px';
                                        }
                                    }
                                    surplus.innerText = '剩余' + result.score + '分';
                                } else {
                                    result.score += this.link[0];
                                    this.classList.remove('select');
                                    result.control.remove(this.link[1]);
                                    this.playDynamic(
                                        {
                                            name: 'SS_ShhXyx_Jiesuan',
                                            x: [0, 0.5],
                                            y: [0, 0.5],
                                            scale: 0.8,
                                            loop: true,
                                            loopCount: 1,
                                            action: 'play3',
                                        },
                                        'chongxu/',
                                        'extension/果包/',
                                    );
                                    this.dynamic.canvas.style.left = 'calc(50% - ' + this.contentWidth / 2 + 'px)';
                                    this.dynamic.canvas.style.top = 'calc(50% - ' + this.contentHeight / 2 + 'px)';
                                    this.dynamic.canvas.style.position = 'absolute';
                                    for (var i = 0; i < optionals.children.length; i++) {
                                        const child = optionals.children[i].button;
                                        if (!child.classList.contains('select') && result.score < child.link[0]) {
                                            child.style.filter = 'grayscale(1)';
                                        } else {
                                            child.style.filter = '';
                                        }
                                    }
                                    this.style.background = 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 200px -125px / 742px 660px';
                                    this.style.transform = '';
                                    for (let j = 0; j < this.children.length; j++) {
                                        const child = this.children[j];
                                        if (this.link[2] == 'card' && child.tagName == 'DIV') {
                                            child.style.transform = 'rotate(-90deg)';
                                        } else {
                                            child.style.transform = '';
                                        }
                                        if (child.tagName === 'P') {
                                            child.style.left = '';
                                        }
                                    }
                                    surplus.innerText = '剩余' + result.score + '分';
                                }
                            });
                            if (button.link[2]) {
                                var background = '';
                                if (button.link[2] == 'card') {
                                    background = 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 104px 140px / 927px 825px';
                                } else if (button.link[2] == 'sword') {
                                    background = 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 90px 412px / 890px 792px';
                                } else if (button.link[2] == 'flower') {
                                    background = 'url(extension/果包/chongxu/chongXu_alpha.pvr_.pvr.png) 100px -220px / 890px 792px';
                                } else {
                                    background = button.link[2] + 'png';
                                }
                                button.logBox = ui.create.div('', {
                                    left: '12.5%',
                                    top: '14.5%',
                                    width: '75%',
                                    height: '75%',
                                    background: background,
                                    transition: 'unset',
                                });
                                button.insertBefore(button.logBox, button.querySelector('p'));
                                if (button.link[2] == 'card') {
                                    button.logBox.style.top = '23%';
                                    button.logBox.style.left = '20%';
                                    button.logBox.style.width = '60%';
                                    button.logBox.style.height = '60%';
                                    button.logBox.style.transform = 'rotate(-90deg)';
                                }
                            }
                            button.contentWidth = 180;
                            button.contentHeight = 180;
                        }
                        resultBox.appendChild(surplus);
                        setTimeout(() => {
                            resultBox.style.transform = 'scale(1)';
                        }, 16);
                        let args = ['ok'];
                        if (!event.forced) {
                            args.push('cancel');
                        }
                        args.push(function (link) {
                            role.stopDynamic();
                            for (var i = 0; i < optionals.length; i++) {
                                optionals[i].button.stopDynamic();
                            }
                            content.stopDynamic();
                            var result = event._result;
                            if (link == 'cancel') {
                                result.bool = false;
                            } else {
                                result.bool = true;
                            }
                            event.dialog.close();
                            event.control.close();
                            game.resume();
                            _status.imchoosing = false;
                        });
                        event.control = ui.create.control(...args);
                    } else if (event.isOnline()) {
                        event.send();
                    } else {
                        game.pause();
                        game.countChoose();
                        setTimeout(function () {
                            _status.imchoosing = false;
                            event._result.bool = true;
                            event._result.control = [];
                            game.broadcastAll(
                                function (id, time) {
                                    if (_status.connectMode) {
                                        lib.configOL.choose_timeout = time;
                                    }
                                    var dialog = get.idDialog(id);
                                    if (dialog) {
                                        dialog.close();
                                    }
                                },
                                event.videoId,
                                event.time,
                            );
                            let list = [];
                            for (var i = 0; i < event.optional.length; i++) {
                                const control = event.optional[i][0];
                                list.push(control);
                            }
                            list.sort();
                            for (var i = 0; i < list.length; i++) {
                                for (let j = 0; j < event.optional.length; j++) {
                                    if (list[i] === event.optional[j][0]) {
                                        if (event._result.score >= event.optional[j][0]) {
                                            event._result.control.add(event.optional[j][1]);
                                            event._result.score -= list[i];
                                        }
                                    }
                                }
                            }
                            if (event.dialog) {
                                event.dialog.close();
                            }
                            if (event.control) {
                                event.control.close();
                            }
                            game.resume();
                        }, 2000);
                    }
                }
            };
        },
        precontent() {
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
            if (lib.config.extension_果包_界面修改) {
                lib.init.css('extension/果包/QQ.css');
            }
            //* 骨骼动画 *
            HTMLDivElement.prototype.playDynamic = function (animation, pathPrefix, uIPath) {
                if (!animation) {
                    return;
                }
                let _this = this;
                var dynamic = this.dynamic;
                const Dynamic = (function () {
                    class DynamicPlayer {
                        constructor(pathPrefix, uIPath) {
                            this.id = 1;
                            this.dpr = 1;
                            this.builtId = 0;
                            this.width = _this.contentWidth || _this.clientWidth;
                            this.height = _this.contentHeight || _this.clientHeight;
                            var worker = new Worker(uIPath + 'dynamicWorker.js');
                            worker.capacity = 0;
                            this.renderer = worker;
                            this.canvas = document.createElement('canvas');
                            this.canvas.height = this.height;
                            this.canvas.width = this.width;
                            var throttle = function (func, timeout, context) {
                                var args;
                                var timer;
                                var previous;
                                return function () {
                                    args = arguments;
                                    if (timer) {
                                        clearTimeout(timer);
                                    }
                                    if (previous == null) {
                                        previous = performance.now();
                                    }
                                    var timestamp = performance.now() - previous;
                                    if (timestamp >= timeout) {
                                        timer = null;
                                        previous = null;
                                        func.apply(context, args);
                                    } else {
                                        timer = setTimeout(function () {
                                            timer = null;
                                            previous = null;
                                            func.apply(context, args);
                                        }, timeout - timestamp);
                                    }
                                };
                            };
                            var observeSize = (function () {
                                if (!self.ResizeObserver) {
                                    return null;
                                }
                                var observer = new ResizeObserver(function (entries) {
                                    var rect;
                                    var callback;
                                    for (var i = 0; i < entries.length; i++) {
                                        callback = observer.callbacks[entries[i].target.observeId];
                                        if (callback == null) {
                                            continue;
                                        }
                                        rect = entries[i].contentRect;
                                        callback({ width: rect.width, height: rect.height });
                                    }
                                });
                                observer.observeId = 0;
                                observer.callbacks = {};
                                return function (target, callback) {
                                    var obs = observer;
                                    target.observeId = obs.observeId++;
                                    obs.observe(target);
                                    obs.callbacks[target.observeId] = callback;
                                };
                            })();
                            observeSize(
                                this.canvas,
                                throttle(
                                    function (size) {
                                        this.height = Math.round(size.height);
                                        this.width = Math.round(size.width);
                                        this.update();
                                    },
                                    100,
                                    this,
                                ),
                            );
                            var canvas = this.canvas.transferControlToOffscreen();
                            worker.postMessage(
                                {
                                    message: 'CREATE',
                                    id: this.id,
                                    canvas: canvas,
                                    pathPrefix: pathPrefix,
                                },
                                [canvas],
                            );
                            worker.capacity++;
                            this.offscreen = true;
                        }
                        play(sprite) {
                            var sprite = typeof sprite == 'string' ? { name: sprite } : sprite;
                            sprite.id = this.builtId++;
                            sprite.loop = true;
                            if (!this.initialized) {
                                this.initialized = true;
                                this.height = this.canvas.clientHeight;
                                this.width = this.canvas.clientWidth;
                            }
                            if (typeof sprite.oncomplete == 'function') {
                                sprite.oncomplete = sprite.oncomplete.toString();
                            }
                            this.renderer.postMessage({
                                message: 'PLAY',
                                id: this.id,
                                dpr: this.dpr,
                                useMipMaps: this.useMipMaps,
                                width: this.width,
                                height: this.height,
                                sprite: sprite,
                            });
                            return sprite;
                        }
                        stop(sprite) {
                            if (this.offscreen) {
                                this.renderer.postMessage({
                                    message: 'STOP',
                                    id: this.id,
                                    sprite: sprite,
                                });
                                return;
                            }
                            this.renderer.stopSpine(sprite);
                        }
                        stopAll() {
                            if (this.offscreen) {
                                this.renderer.postMessage({
                                    message: 'STOPALL',
                                    id: this.id,
                                });
                                return;
                            }
                            this.renderer.stopSpineAll();
                        }
                        update(force) {
                            if (force === false) {
                                return;
                            }
                            this.renderer.postMessage({
                                message: 'UPDATE',
                                id: this.id,
                                dpr: this.dpr,
                                width: this.width,
                                height: this.height,
                                useMipMaps: this.useMipMaps,
                            });
                        }
                    }
                    return DynamicPlayer;
                })(pathPrefix, uIPath);
                if (!dynamic) {
                    dynamic = new Dynamic(pathPrefix, uIPath);
                    dynamic.dprAdaptive = true;
                    this.dynamic = dynamic;
                    this.appendChild(dynamic.canvas);
                } else {
                    dynamic.stopAll();
                }
                if (typeof animation == 'string') {
                    animation = { name: animation };
                }
                var avatar = dynamic.play(animation);
                dynamic.primary = avatar;
            };
            HTMLDivElement.prototype.stopDynamic = function () {
                var dynamic = this.dynamic;
                if (!dynamic) {
                    return;
                }
                dynamic.stopAll();
                dynamic.primary = null;
                dynamic.canvas.remove();
                delete this.dynamic;
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '果包',
                    connect: true,
                    character: {
                        tifa: ['female', 'qun', 4, ['耶路撒冷', '过载', 'tifa_wucan'], ['des:3d区不能没有蒂法!就像西方不能没有耶路撒冷!']],
                        xk: ['female', 'qun', 3, ['Qqishu', '昙花一现', 'xk_wucan'], ['des:果包第二弹果将虚空']],
                        qh: ['female', 'qun', 3, ['MYshangti', 'qh_wucan', '神器'], ['des:果包第一弹果将千鹤']],
                        gbxj_sunshangxiang: ['female', 'wu', 4, ['gbxj_wucan_ssx', 'gbxj_jianwu', 'gbxj_jianxian', 'gbxj_xiaoji'], []],
                        gbxj_mayunlu: ['female', 'shu', 4, ['gbxj_wucan_myl', 'gbxj_fengpo', 'gbxj_mashu'], []],
                        gbxj_caoying: ['female', 'wei', 4, ['gbxj_wucan_cy', 'gbxj_lingren', 'gbxj_fujian', 'gbxj_jinguo'], []],
                        cfr: ['female', 'qun', 4, ['re_xianzhou', 're_qieting', 're_yinqin', 'cfr_guo'], ['des:蔡夫人,刘表后妻、刘琮后母,荆襄一带的豪族蔡氏家族的一员.因刘琮娶了自己的侄女所以对其偏爱有加,常毁刘琦而誉刘琮于表.表死,与蔡瑁等共排表长子刘琦,奉刘琮为嗣,寻降曹操.']],
                        ssx: ['female', 'wu', '3/4', ['luo_xiaoji', 'luo_jieyin', 'luo_baoyi', 'ssx_xiaoji'], ['des:孙夫人(？—约223),吴郡富春(今浙江省杭州市富阳区)人,东汉末年讨虏将军孙权之妹,曾为左将军刘备之妻.史书<三国志>称之为孙夫人.民间戏剧称之为孙尚香.']],
                        spxx: ['female', 'shu', '3/4', ['spxx_gongqing', 'guo_liangzhu', 'spxx_baoyi'], ['des:孙夫人(？—约223),吴郡富春(今浙江省杭州市富阳区)人,东汉末年讨虏将军孙权之妹,曾为左将军刘备之妻.史书<三国志>称之为孙夫人.民间戏剧称之为孙尚香.']],
                        wy: ['female', 'wei', 4, ['guo_zhenlie', 'guo_miji', 'duo'], ['des:王异(或作士异),东汉末年曹操所置羌道令、益州刺史赵昂之妻,赵英、赵月之母.马超作乱凉州时, 王异协助丈夫守城,自马超攻冀城至祁山坚守,赵昂曾出奇计九条,王异皆有参与.']],
                        hyy: ['female', 'shu', '3/3/1', ['guo_linglong', 'luo_jiqiao', 'luo_jizhi'], ['des:黄月英,荆州沔南白水人,沔阳名士黄承彦之女,诸葛亮之妻,诸葛瞻之母.容貌甚丑,而有奇才:上通天文,下察地理,韬略近于诸书无所不晓,诸葛亮在南阳闻其贤而迎娶.']],
                        zxc: ['female', 'shu', 3, ['luo_shenxian', 'luo_qiangwu', 'xc'], ['des:张氏(？ - 237年),涿郡涿县(今河北省涿州市)人,三国时期蜀汉名将张飞的长女,蜀汉后主刘禅的第一任皇后.章武元年(221年),作为太子刘禅的妃子入宫,建兴元年(223年),立为皇后.建兴十五年(237年)逝世,其妹成为刘禅之皇后.她通常被称为敬哀皇后,其妹则被称为张皇后.']],
                        dq: ['female', 'wu', 3, ['dq_zhuyuan', 'dq_guose', 'dq_liuli'], ['des:大乔(生卒年不详),庐江郡皖县(今安徽省潜山市)人,东汉末年江东孙策的夫人,本姓<桥>,小说<三国演义>误作<乔>,因为同时还有一个妹妹嫁给周瑜,为了进行区分,姐姐习惯称作<大乔(桥)>. 建安四年(公元199年)十二月,皖城失陷,大乔遂被孙策所纳. 清朝时期,薛福成的<庸盦笔记>,传说大乔在孙策死后,哭泣数月而卒.但终究只是后世传说,不足为凭.']],
                        xq: ['female', 'wu', 3, ['xq_tianxiang', 'xq_hongyan', 'xq_tongque'], ['des:小乔(生卒年不详),本姓桥(小乔为后世误传),庐江皖县(今安徽潜山)人.东汉末年国色美女 [9]  ,桥公次女,名将周瑜的夫人. 周瑜风度翩翩的才子形象,与堪称国色的小乔可称天作之合,由此成为后世文艺作品中赞美的对象.唐代著名诗人杜牧激发想象,一句<东风不与周郎便,铜雀春深锁二乔>将小乔与赤壁之战联系起来,而令<二乔>闻名于世.']],
                        myl: ['female', 'shu', '4/4/1', ['myl_fengpo', 'myl_fengwu', 'myl_mashu', 'luo_myl', 'myl_suifu'], ['des:马腾之女,马超之妹,赵云之妻.父亲令其自幼习武,枪术非凡,寻常男子也是难以匹敌.']],
                        cwj: ['female', 'wei', 3, ['luo_beige', 'luo_duanchang', 'luo_moshi'], ['des:蔡文姬(生卒年不详),名琰,字文姬(一说字昭姬 [1]  ).陈留郡圉县人,东汉末年女性文学家,文学家蔡邕之女. 博学多才,擅长文学、音乐、书法.初嫁于卫仲道,丈夫死后回家.东汉末中原大乱诸侯割据,原本归降汉朝的南匈奴趁机叛乱,蔡文姬为匈奴左贤王所掳,生育两个孩子.曹操统一北方后,花费重金赎回,嫁给董祀. <隋书·经籍志>著录有<蔡文姬集>一卷,今已失传,只有<悲愤诗>二首和<胡笳十八拍>.文姬归汉的故事,广为流传.']],
                        llq: ['female', 'qun', 4, ['llq_guowu', 'llq_zhuangrong', 'llq_baoyi1'], ['des:营寨中,注视着吕玲绮大发神威的吕布与陈宫面面相觑,半晌,陈宫出言道:<主公如此虎女,犹如妇好再世,只怕那袁公路之子……>吕布似乎是想到了什么,手扶画戟笑道:<埋首于闺阁之中,看来确实是难为她了.婚约之事,吾自有理会.走,咱们入城吧.>']],
                        cy: ['female', 'wei', 4, ['cy_lingren', 'cy_fujian'], ['des:曹婴是曹操的孙女,弓马娴熟,文武双全,深得曹操的用兵之道及心术.于凤鸣山一战中担任魏军大都督阻止诸葛亮北伐并因罗平安的告密而全歼关兴、张苞、赵云率领的蜀军部队.在<三国演义>中,对应她的原型人物为当时与赵云作战并在凤鸣山围困住赵云的夏侯楙大都督.']],
                        yhy: ['female', 'jin', 3, ['yhy_hongyi', 'yhy_caiyuan', 'yhy_ciwei'], ['des:羊徽瑜(214年－278年),泰山南城(今山东新泰)人,晋景帝司马师第三任妻子.羊徽瑜出身官宦世家泰山羊氏,她是南阳太守羊续的孙女,上党太守羊衜之女;其母为东汉名士左中郎将蔡邕之女、蔡文姬的姐妹. 羊徽瑜聪慧贤德,嫁给司马师后未有子女.以司马师之弟司马昭的次子司马攸为继子.司马师死后,司马攸侍奉羊徽瑜非常孝顺. 泰始元年(265年),司马昭长子司马炎受禅登基,建立西晋,追谥伯父司马师为景皇帝.泰始二年(266年),尊奉羊徽瑜为景皇后,因居弘训宫,故称弘训太后. 咸宁四年(278年),羊徽瑜去世,时年六十五岁,谥号景献皇后,与司马师合葬峻平陵.']],
                        zn: ['female', 'qun', 3, ['zn_tianze', 'zn_fuling', 'zn_difa', 'zn_tianze1'], ['des:张宁(176年－？),钜鹿(治今河北省邢台市巨鹿县)人.东汉末年大贤良师张角的女儿.']],
                        spdc: ['female', 'qun', 3, ['spdc_lihun', 'spdc_meigu', 'spdc_biyue', 'spdc_baoyi'], ['des:貂蝉(生卒年不详),历史小说<三国演义>及其衍生作品中的角色,是中国古代四大美女之一.貂蝉是民间传说中人物,原名任红昌,是山西一村姑,也有人认为吕布部将秦宜禄前妻杜氏(杜秀娘)即是貂蝉.其登场于<三国演义>,只是小说家为了增添色彩而加进去的,正史并无记载.']],
                        rt: ['female', 'wu', '2/6', ['rt_tianxing', 'rt_shuixiu', 'rt_shuangzi'], ['des:池雨自制武将']],
                        sz: ['female', 'wu', 3, ['sz_xingming', 'sz_jianqing', 'sz_shuangzi', 'sz_baoyi'], ['des:池雨自制武将']],
                        zcp: ['female', 'wei', 3, ['zcp_difei', 'zcp_yanjiao', 'zcp_quanji'], ['des:张氏(199年—257年),字昌蒲,太原兹氏人,太傅定陵成侯之命妇也.三国时期魏太傅钟繇之妾,名将钟会生母. [2-3]  张昌蒲对儿子教育方面颇为严厉.钟会虽年幼,四岁时便已教他<孝经>,七岁诵读<论语>,八岁诵<诗>,十岁诵<尚书>,十一岁诵<易>,十二岁诵<春秋左氏传>、<国语>,十三岁诵<周礼>、<礼记>,十四岁读其父钟繇所撰写的<易记>,十五岁就让他进太学进行深造.']],
                        dh: ['female', 'wu', 3, ['dh_jinhui', 'dh_jiaojin'], ['des:孙鲁班(210年 [29]  -？),字大虎,吴郡富春(今浙江省杭州市富阳区)人.三国时期吴国公主,吴大帝孙权长女,朱公主孙鲁育胞姐,会稽王孙亮异母姐. 最初嫁给偏将军周瑜之子、骑都尉周循.周循去世后,再嫁于卫将军全琮,称全公主.赤乌年间,参与<南鲁党争>事件,支持鲁王孙霸.吴少帝孙亮继位,凭借外戚身份和拥立功勋,排除异己,权倾一时. 太平三年(258年),谋划诛杀权臣孙綝,事情泄漏后,流放于豫章,不知所终.']],
                        gyp: ['female', 'shu', 3, ['gyp_xuehen', 'gyp_huxiao', 'gyp_wuji', 'gyp_baoyi'], ['des:关银屏(202——？),河东郡解县(今山西省运城市)人,三国时期名将关羽之女在民间传说中的名字,该名不见史书记载,仅在民间传说中出现,因在关羽的四个子女中排行第三,故又被称作<关三小姐>、<关氏三姐>或<关家三小姐>. [1]  在传说中她是黄月英的弟子、并随同诸葛亮平定南蛮,嫁给蜀国名臣李恢之子李遗.']],
                        ls: ['female', 'wu', 3, ['ls_anxu', 'ls_zhuiyi'], ['des:步练师 [1]  (？－238年),临淮郡淮阴县(今江苏省淮安市)人.吴大帝孙权的嫔妃,丞相步骘的族人 [2]  . 孙权的侧室,在孙权众夫人中最受孙权宠爱 [14-15]  ,性格不妒忌,经常进献美人. [3]  生有二女全公主和朱公主.孙权称帝后未立皇后,然而宫中对步练师的礼节等同于皇后. 赤乌元年(238年)去世,追封皇后,葬于蒋陵.']],
                        czj: ['female', 'wei', 3, ['czj_sheyi', 'czj_tianyin'], ['des:蔡贞姬,汉末大儒蔡邕之女,羊衜的继妻']],
                        az: ['female', 'qun', 3, ['az_chongxu', 'qm_huihuan'], ['des:悠的孪生妹妹.沉默寡言,弱不禁风,深居简出.逃避困难的人,麻烦的事情完全推给了悠.那犹如人偶一般的脸色,十分引人注目.或许是因为病弱,时常会住进医院.和悠的体格存在鲜明的反差.喜欢除了杯面之外的全部无营养食品,如果不注意她,可能一会就会全部吃光.同时,还有着很强的网络依存症.对悠有超越兄妹的感情.']],
                        xs: ['female', 'wu', 4, ['xs_pojun', 'xs_lianpo'], ['des:徐盛(生卒年不详),字文向,琅邪莒县(今山东省莒县)人,三国时期孙吴名将.早年徐盛抗击黄祖,因功升为中郎将.在濡须浴血奋战.刘备伐吴地时,徐盛跟随陆逊攻下蜀军多处屯营;曹休伐吴时,徐盛在形势不利的情况下以少抗多,成功防御.因前后战功,徐盛先后升任建武将军、安东将军,任庐江太守.后来,曹丕大举攻吴,吴国依徐盛的建议在建业外围筑上围墙,曹丕中疑城之计而退走.黄武年间,徐盛病逝. 徐盛曾获得君主<大壮>,三国时期仅有张辽 [1]  、徐盛 [2]  二人获此殊荣.他被陈寿盛赞为<江表之虎臣>.其官爵由儿子徐楷继承.']],
                        gxy: ['female', 'wei', 3, ['xunmi', 'qianghun', 'gxy_baoyi'], ['des:自称是武圣关羽的后人,她是探索虫洞奥秘的远征军中最勇敢的那个女孩;她的伞是斩杀邪魔的利剑,也是安定军心的保护伞.']],
                        wr: ['female', 'qun', 3, ['wr_minsi', 'wr_jizhan', 'wr_jijing', 'wr_fusong'], ['des:汉灵怀皇后王荣(？~181年),赵国邯郸(今河北邯郸市)人.五官中郎将王苞孙女,汉灵帝刘宏妃子,汉献帝刘协生母.初以良家子选入掖庭,封为美人,服侍汉灵帝.光和四年(181年),生下陈留王刘协,惨遭灵思皇后毒杀.王荣死后,汉灵帝曾作<追德赋>、<令仪颂>. 永汉元年(189年),其子刘协即位,是为汉献帝,追谥灵怀皇后,葬于文昭陵.']],
                        sr: ['female', 'wu', 3, ['sr_yingjian', 'sr_shixin'], ['des:陆孙氏,是东吴上大将军、第三任丞相陆逊(字伯言)之妻,开创江东基业的吴侯孙策的女儿,陆抗的母亲.史册或文学作品中没有详细的介绍,故生卒年不详.后人取名为孙茹.']],
                        zch: ['female', 'wei', 3, ['zch_jueqing', 'zch_shangshi'], ['des:张春华(189－247),河内平皋(今河南温县)人,西晋宣穆皇后.张春华是司马懿之妻,司马师、司马昭的母亲.逝世后被追尊为皇后.']],
                        yyy: ['female', 'qun', 4, ['yyy_fengwu', 'yyy_qinghua'], ['des:始于电竞,但云悠悠的能力范围却不止于此.三次竞演中,不管是甜美的<晚安晚安>,还是欢乐的<Try Everything>,亦或是昂扬的<不愿回头>,都得到了云悠悠完美的诠释.作为多线程全面发展的天才少女,云悠悠的唱跳水平丝毫不逊色,拿起麦克风就能释放无限魅力.']],
                        bz: ['female', 'shu', 3, ['bz_feishan', 'bz_fenghuang', 'bz_huofeng'], ['des:不知火舞,SNK旗下格斗游戏<饿狼传说>系列与<拳皇>系列的登场角色,是SNK旗下的人气角色之一. 不知火舞最初登场于<饿狼传说2>,作为不知火流派的当家忍者之一,是同为不知火流传人安迪·博加德的女友.在<拳皇>系列中,是女性格斗家队伍的常驻成员之一,除<拳皇12>外均有出场.']],
                        yw: ['female', 'shu', 3, ['yw_mingxuan', 'yw_xianchou'], []],
                        sl: ['female', 'wu', 3, ['Q_kuizhu', 'resunliang_chezheng', 'sl_kuanggu', 'resunliang_lijun'], ['zhu']],
                    },
                    translate: {
                        qh: '神乐千鹤',
                        xk: '虚空',
                        tifa: '蒂法',
                        gbxj_sunshangxiang: '果·孙尚香',
                        gbxj_mayunlu: '果·马云禄',
                        gbxj_caoying: '果·曹婴',
                        cfr: '果·蔡夫人',
                        ssx: '果·孙尚香',
                        spxx: '果·蜀香香',
                        wy: '堕·王异',
                        hyy: '果·黄月英',
                        zxc: '果·张星彩',
                        dq: '果·大乔',
                        xq: '果·小乔',
                        myl: '果·马云禄',
                        cwj: '果·蔡文姬',
                        llq: '果·吕玲绮',
                        cy: '果·曹婴',
                        yhy: '果·羊徽瑜',
                        zn: '果·张宁',
                        spdc: '果·sp貂蝉',
                        rt: '阳·清水',
                        sz: '阴·清水',
                        zcp: '果·张昌蒲',
                        dh: '果·孙鲁班',
                        gyp: '果·关银屏',
                        ls: '果·步练师',
                        czj: '果·蔡贞姬',
                        az: '穹妹',
                        xs: '果·徐盛',
                        gxy: '果·关小雨',
                        wr: '果·王荣',
                        sr: '果·孙茹',
                        zch: '果·张春华',
                        yyy: '果·云悠悠',
                        bz: '果·不知火舞',
                        yw: '果·杨婉',
                        sl: '果·孙亮',
                        耶路撒冷: '耶路撒冷',
                        耶路撒冷_info: '当你使用或打出牌响应其他角色,或其他角色使用或打出牌响应你后,若此牌为:基本牌,你可令一名角色弃置两张牌或令一名角色摸两张牌;非基本牌,你可对一名角色造成1点伤害或令一名其他角色回复1点体力.你穿一件衣服.',
                        过载: '过载',
                        过载_info: '锁定技,你使用或打出牌时,你摸x张牌并弃置等量的牌.(x为你当前体力值)',
                        tifa_wucan: '无惨',
                        tifa_wucan_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
                        Qqishu: '花刃',
                        Qqishu_info: '若你还有衣服可穿每当你使用或打出一张基本牌,你穿一件衣服并随机获得一张锦囊牌.',
                        昙花一现: '昙花一现',
                        昙花一现_info: '出牌阶段开始时.若你不是全果,你可以脱掉所有衣服,摸5张牌.当你的回合内你造成过伤害,回合结束时你可以再次脱光衣服摸5张牌',
                        xk_wucan: '无惨',
                        xk_wucan_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
                        qh_wucan: '无惨',
                        qh_wucan_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
                        神器: '三神器',
                        神器_info: '每当你获得装备牌后,你可以穿上所有衣服并复制1名其他角色所有技能直到你的回合结束.技能抄自冷雨扩展',
                        MYshangti: '神乐',
                        MYshangti_info: '其他角色受到伤害后,你不是全果,你可以脱一件衣服,令该角色回复一点体力.你与其各摸两张牌.技能抄自果包扩展',
                        gbxj_wucan_ssx: '无惨',
                        gbxj_wucan_ssx_info: '当你受到男性角色造成的伤害后,若你不处于果体状态,则你插画上的衣服减少1件.',
                        gbxj_jianwu: '果·剑舞',
                        gbxj_jianwu_info: '结束阶段,你可以穿上一件衣服,随机使用一张装备牌',
                        gbxj_jianxian: '剑仙',
                        gbxj_jianxian_info: '出牌阶段,你可以脱去一件衣服并弃置一张装备牌,令一名角色回复1点体力或对其造成1点伤害.',
                        gbxj_xiaoji: '果·枭姬',
                        gbxj_xiaoji_info: '当你失去一张装备区的装备牌后,你摸两张牌.',
                        gbxj_wucan_myl: '无惨',
                        gbxj_wucan_myl_info: '当你受到男性角色造成的伤害后,若你不处于果体状态,则你插画上的衣服减少1件.',
                        gbxj_fengpo: '果·凤魄',
                        gbxj_fengpo_info: '你使用杀或决斗指定一名角色时,你可以弃置一枚凤魄标记修改此次凤魄为目标红色牌数量,你可以选择摸x张牌并穿一件衣服或获得x枚凤魄标记并脱一件衣服,x为目标♦️️牌数量.y:凤魄标记达到2时,伤害+1,凤魄标记达到5时,伤害+2,凤魄标记达到9时,伤害+3,最多+3.',
                        gbxj_fengpo1: '果·凤魄',
                        gbxj_fengpo2: '果·凤魄',
                        gbxj_fengpo3: '果·凤魄',
                        gbxj_mashu: '果·马术',
                        gbxj_mashu_info: '锁定技,你计算与其他角色的距离时-1.',
                        gbxj_wucan_cy: '无惨',
                        gbxj_wucan_cy_info: '当你受到男性角色造成的伤害后,若你不处于果体状态,则你插画上的衣服减少1件.',
                        gbxj_lingren_jianxiong: '果·奸雄',
                        gbxj_lingren_jianxiong_info: '界奸雄',
                        gbxj_lingren_xingshang: '果·行殇',
                        gbxj_lingren_xingshang_info: '界行殇',
                        gbxj_lingren: '果·凌人',
                        gbxj_lingren_info: '每回合限一次.当你于出牌阶段使用带有「伤害」这一标签的基本牌或普通锦囊牌指定目标后,你可以猜测其中的一个目标的手牌中是否有基本牌,锦囊牌或装备牌.若你猜中的项目数:≥1,此牌对该角色的伤害+1;≥2,你摸两张牌;≥3,你获得技能〖奸雄〗和〖行殇〗直到下回合开始.每猜错一项,你脱一件衣服.全猜中,你获得一个凌人标记',
                        gbxj_fujian: '果·伏间',
                        gbxj_fujian_info: '锁定技,结束阶段开始时,你观看一名随机的其他角色的随机X张手牌.(X为场上手牌最少的角色的手牌数).若你有衣服未穿上,则你穿上一件衣服,并获得一个凌人标记',
                        gbxj_huawu: '花舞',
                        gbxj_huawu_info: '出牌阶段,你可以弃置两个凌人标记,选择一个技能直到下回合出牌阶段开始',
                        gbxj_jinguo: '果·巾帼',
                        gbxj_jinguo_info: '觉醒技,准备阶段开始,若你的凌人标记,达到三个,你减一点体力上限获得花舞',
                        re_xianzhou: '献州',
                        re_xianzhou_info: '出牌阶段限一次,你可将装备区内的所有牌交给一名其他角色.你回复X点体力,对其攻击范围内的至多X名角色各造成1点伤害(X为你以此法给出的牌数).',
                        re_yinqin: '姻亲',
                        re_yinqin_info: '出牌阶段,若你还可以穿衣服,则你可以穿一件衣服并摸两张牌.',
                        re_qieting: '窃听',
                        re_qieting_info: '其他角色的回合结束时,若其本回合内未造成过伤害,则你可将其装备区内的一张牌置于你的装备区内;若其本回合内未对其他角色使用过牌,则你可摸一张牌.',
                        luo_xiaoji: '枭姬',
                        luo_xiaoji_info: '当你失去一张装备区内的牌后,你可以脱一件衣服并摸两张牌.',
                        luo_jieyin: '结姻',
                        luo_jieyin_info: '若你还有可以脱的衣服,你可以选择一名已经受伤的角色,你脱一件衣服弃置一张牌并摸一张牌,你与其各回复一点体力.',
                        luo_baoyi: '爆衣',
                        luo_baoyi_info: '当你受到伤害时,你脱一件衣服.',
                        guo_liangzhu: '良助',
                        guo_liangzhu_info: '当一名角色回复体力时,若你还有可以脱的衣服,你可以脱一件衣服并选择一项:1、摸两张牌;2、令该角色摸四张牌.',
                        spxx_baoyi: '爆衣',
                        spxx_baoyi_info: '当你受到伤害时,你脱一件衣服.',
                        guo_zhenlie: '贞烈',
                        guo_zhenlie_info: '当你成为其他角色使用【杀】或普通锦囊牌的目标后,若你还有可以脱的衣服,你可以脱一件衣服摸一张牌并令此牌对你无效(若你已经脱过衣服,则你还需要失去一点体力),弃置对方一张牌.',
                        guo_miji: '秘计',
                        guo_miji_info: '准备阶段或结束阶段,你可以穿上衣服摸X+1张牌,可以将等量的牌交给一名其他角色(X为你已损失的体力值).',
                        duo: '爆衣',
                        duo_info: '当你回复体力时,你穿上一件衣服.',
                        guo_linglong: '玲珑',
                        guo_linglong_info: '锁定技,若你的装备区没有武器牌,则你使用【杀】的次数上限+1;若你的装备区没有防具牌,视为你装备着【八卦阵】;若你的装备区没有坐骑牌,你的手牌上限+1',
                        luo_jiqiao: '机巧',
                        luo_jiqiao_info: '每回合限两次,当你使用牌指定自己为目标时,你可以脱一件衣服获得一点护甲,若护甲值大于五则改为摸一张牌.',
                        luo_jizhi: '集智',
                        luo_jizhi_info: '当你使用锦囊牌时,你可以穿上衣服摸一张牌.若此牌为基本牌,则你可以弃置之,令本回合手牌上限+1.',
                        luo_shenxian: '甚贤',
                        luo_shenxian_info: '每名角色的回合限一次,你的回合外,当有其他角色因弃置而失去基本牌时,你可以摸x张牌穿上一件衣服.(x为你的体力上限减去你的体力值且至少为1)',
                        luo_qiangwu: '枪舞',
                        luo_qiangwu_info: '出牌阶段,你可以脱一件进行判定并将手牌摸至y(y为你的体力上限加你的体力值).若如此做,直到回合结束,你使用点数小于判定结果的【杀】时不受距离限制,且你使用点数大于判定结果的【杀】时不计入出牌阶段的使用次数限制.',
                        xc: '爆衣',
                        xc_info: '当你受到伤害时,你脱一件衣服;当你回复体力时,你穿上一件衣服.',
                        dq_zhuyuan: '助援',
                        dq_zhuyuan_info: '出牌阶段限一次,你可以脱一件衣服令一名角色摸已损体力值的牌并回复一点体力,若此时你的手牌数不小于你的体力值,你获得技能激昂直至下回合开始.',
                        dq_guose: '国色',
                        dq_guose_info: '出牌阶段限两次,你可以选择一项:将一张♦️️牌当做【乐不思蜀】使用;或弃置一张♦️️牌并弃置场上的一张【乐不思蜀】.选择完成后,你摸一张牌并穿上一件衣服.',
                        dq_liuli: '流离',
                        dq_liuli_info: '当你成为【杀】的目标时,若你还有可以脱的衣服,你可以脱一件衣服摸一张牌弃置一张牌并将此【杀】转移给攻击范围内的一名其他角色(不能是此【杀】的使用者).',
                        xq_tongque: '铜雀',
                        xq_tongque_info: '出牌阶段限一次,你可以穿上所有衣服选择一名角色,该角色获得技能界奸雄直至其下回合开始,其受到一点火焰伤害,你横置.',
                        xq_tianxiang: '天香',
                        xq_tianxiang_info: '当你受到伤害时,你可以弃置一张♥️️手牌,防止此次伤害并选择一名其他角色,你选择一项:1.令其受到伤害来源对其造成的1点伤害,摸X张牌(X为其已损失体力值且至多为5);2.令其失去1点体力,获得你弃置的牌,选择结束后你脱一件衣服.',
                        xq_hongyan: '红颜',
                        xq_hongyan_info: '锁定技,你的♠️️牌和♠️️判定牌的花色视为♥️️.一名角色的判定结果生效前,若判定结果为♥️️,则你将其改为一种花色.',
                        myl_fengpo: '凤魄',
                        myl_fengpo_info: '当你使用【杀】或【决斗】指定目标后,若目标角色数为1,你可以脱一件衣服观看对方手牌并选择一项:1.摸X+1张牌;2.令此牌的伤害值基数+X.(X为其手牌中♦️️牌的数量)',
                        myl_mashu: '马术',
                        myl_mashu_info: '锁定技,你计算与其他角色的距离时-1.',
                        myl_fengwu: '凤舞',
                        myl_fengwu_info: '出牌阶段限x次(x为你的体力值),若你还有可穿的衣服,你可以穿件衣服摸一张牌并令你使用杀的次数加一.',
                        luo_myl: '爆衣',
                        luo_myl_info: '当你受到伤害时,你脱一件衣服.',
                        spxx_gongqing: '共情',
                        spxx_gongqing_info: '回合结束时,若你脱掉的衣服数量大于三,则你穿上一件衣服从弃牌堆获得一张桃园结义并进行一个额外的回合.',
                        luo_beige: '悲歌',
                        luo_beige_info: '当有角色受到【杀】或【决斗】造成的伤害后,你可以弃一张牌脱一件衣服,并令其进行一次判定,若判定结果为:♥️️该角色回复X点体力(X为伤害点数);♦️️︎该角色摸三张牌;♣️️伤害来源弃三张牌;♠️️伤害来源将其武将牌翻面.',
                        luo_duanchang: '断肠',
                        luo_duanchang_info: '锁定技,令你进入濒死状态的角色失去当前的所有技能.',
                        luo_moshi: '默识',
                        luo_moshi_info: '结束阶段开始时,你可以将一张手牌当作你本回合出牌阶段内使用的第一张基本或普通锦囊牌使用.你可以将一张手牌当做你本回合出牌阶段内使用的第二张基本或普通锦囊牌使用.(你不能通过此技能使用【酒】)你穿上一件衣服并选择一项:1.摸两张牌2.回复一点体力.',
                        llq_guowu: '帼舞',
                        llq_guowu_info: '出牌阶段开始时,你可以展示全部手牌,根据你展示的类型数,你获得对应效果:至少一类,从弃牌堆获得一张【杀】;至少两类,此阶段使用牌无距离限制;至少三类,此阶段使用【杀】或普通锦囊牌可以多指定两个目标,你脱一件衣服.',
                        llq_zhuangrong: '妆戎',
                        llq_zhuangrong_info: '觉醒技,一名角色的回合结束时,若你的体力值为2或手牌数为1,你加一点体力上限并回复体力至上限,摸等同于穿的衣服数量的牌并穿上所有衣服,获得〖神威〗,〖无双〗和〖利驭〗并修改〖爆衣〗.',
                        llq_baoyi1: '爆衣',
                        llq_baoyi1_info: '锁定技,当你造成伤害时,你脱一件衣服并摸一张牌.',
                        llq_baoyi2: '爆衣',
                        llq_baoyi2_info: '当你造成伤害时,你穿一件衣服.',
                        llq_liyu: '利驭',
                        llq_liyu_info: '当你使用【杀】对一名其他角色造成伤害后,你可以获得其区域内的一张牌.若此牌不为装备牌,则其摸一张牌.若此牌为装备牌,则视为你对其选择的另一名角色使用一张【决斗】.',
                        cy_lingren: '凌人',
                        cy_lingren_info: '每回合限一次,当你于出牌阶段使用带有「伤害」这一标签的基本牌或普通锦囊牌指定目标后,你可以猜测其中的一个目标的手牌中是否有基本牌,锦囊牌或装备牌.若你猜中的项目数:≥1,此牌对该角色的伤害+1;≥2,此牌不可被响应;≥3,你获得技能〖奸雄〗和〖行殇〗直到下回合开始.且你每猜中一项你便摸一张牌并脱一件衣服.',
                        cy_fujian: '伏间',
                        cy_fujian_info: '锁定技,准备或结束阶段开始时,你穿上一件衣服并观看一名随机的其他角色的随机X张手牌.(X为场上手牌最少的角色的手牌数),你可以对其造成一点伤害.',
                        yhy_hongyi: '弘仪',
                        yhy_hongyi_info: '出牌阶段限一次,你可以脱一件衣服选择一名其他角色.你的下回合开始前,该角色造成伤害时进行判定,若结果为:黑色,此伤害-1.红色,受到伤害的角色摸一张牌.',
                        yhy_caiyuan: '才媛',
                        yhy_caiyuan_info: '锁定技,当你扣减体力时,你获得一枚<才媛>标记直到你的下回合结束.结束阶段开始时,若你没有<才媛>标记且此回合不是你的第一个回合 ,则你摸两张牌并脱一件衣服.',
                        zn_tianze: '天则',
                        zn_tianze_info: '每回合限触发一次.其他角色于其出牌阶段内使用的黑色手牌结算结束后,你可以脱一件衣服并弃置一张黑色牌,并对其造成1点伤害你摸一张牌.',
                        天地: '天地',
                        天地_info: '',
                        zn_difa: '地法',
                        zn_difa_info: '每回合限两次,当你于回合内因摸牌而获得红色牌时,你可以弃置之.你选择一个锦囊牌的牌名,并从牌堆中获得一张此牌名的牌并穿上一件衣服.',
                        zn_fuling: '父灵',
                        zn_fuling_info: '觉醒技,准备阶段,若你发动天则造成伤害数大于2,则你加一点体力上限穿上所有衣服并获得技能<雷击>',
                        yhy_ciwei: '慈威',
                        yhy_ciwei_info: '一名角色于其回合内使用第二张牌时,若此牌为基本牌或普通锦囊牌,则你可以弃置一张牌,取消此牌的所有目标你穿上一件衣服并回复一点体力.',
                        zn_tianze1: '天则',
                        zn_tianze1_info: '其他角色的判定生效后,若判定结果为黑色,你摸一张牌.',
                        spdc_lihun: '离魂',
                        spdc_lihun_info: '出牌阶段限一次,你可以脱一件衣服选择一名其他男性角色.若如此做,你与其离婚并将武将牌翻面并获得其所有手牌.出牌阶段结束时,你交给其X张牌.(X为该角色的体力值)',
                        spdc_meigu: '媚骨',
                        spdc_meigu_info: '出牌阶段限一次,你可以脱一个衣服,色晕一个男性,偷取其一张牌.',
                        spdc_biyue: '闭月',
                        spdc_biyue_info: '结束阶段,你可以穿一个衣服并选择一项:1.摸两张牌2.回复一点体力.',
                        spdc_baoyi: '爆衣',
                        spdc_baoyi_info: '当你受到伤害时,你脱一件衣服.',
                        ssx_xiaoji: '枭姬',
                        ssx_xiaoji_info: '当你使用装备牌时,你穿上一件衣服并摸一张牌.',
                        爆衣: '爆衣',
                        爆衣_info: '',
                        cfr_guo: '爆衣',
                        cfr_guo_info: '当你受到伤害时,你脱一件衣服.',
                        rt_tianxing: '天幸',
                        rt_tianxing_info: '锁定技,摸牌阶段,你脱一件衣服并改为摸等同于你体力上限的牌你减一点体力上限.',
                        rt_shuixiu: '娷琇',
                        rt_shuixiu_info: '锁定技,当你受到伤害时,你穿上一件衣服减一点体力上限防止此伤害摸等同于你体力值的牌.',
                        rt_shuangzi: '双子',
                        rt_shuangzi_info: '觉醒技,准备阶段,若你的体力上限小于3,则你将武将牌替换为阴·清水.',
                        sz_xingming: '幸茗',
                        sz_xingming_info: '出牌阶段限一次,你可以选择一名角色,你选择一项:1.令其从仁义礼智信其中一个技能选择获得之直至回合结束2.令其交给你两张牌并受到一点伤害,选择结束后你脱一件衣服.',
                        sz_jianqing: '俭情',
                        sz_jianqing_info: '出牌阶段限一次,你可以穿一件衣服,摸一张牌视为使用一张顺手牵羊.',
                        sz_shuangzi: '双子',
                        sz_shuangzi_info: '觉醒技,准备阶段,若你脱光了衣服,则你将武将牌变为阳·清水.',
                        sz_baoyi: '爆衣',
                        sz_baoyi_info: '当你受到伤害后,你脱一件衣服.',
                        myl_suifu: '随夫',
                        myl_suifu_info: '觉醒技,当你击杀一名角色后,你穿上所有衣服并获得技能龙胆并修改凤魄',
                        myl_fengpo1: '凤魄',
                        myl_fengpo1_info: '当你使用【杀】或【决斗】指定目标后,若目标角色数为1,你可以脱一件衣服观看对方手牌并选择一项:1.摸X+1张牌;2.令此牌的伤害值基数+X.(X为其手牌中红色牌的数量)',
                        zcp_difei: '诋诽',
                        zcp_difei_info: '锁定技.每回合限一次,当你受到伤害后,你脱一件衣服摸一张牌并回复1点体力.',
                        zcp_yanjiao: '严教',
                        zcp_yanjiao_info: '出牌阶段限两次.你可以将手牌中一种花色的所有牌交给一名其他角色,对其造成1点伤害.你于自己的下回合开始时摸等量的牌并穿一件衣服.',
                        zcp_quanji: '权计',
                        zcp_quanji_info: '当你受到1点伤害后,你可以摸一张牌,将一张手牌置于武将牌上,称为<权>你脱一件衣服;你的手牌上限+X(X为<权>的数量).',
                        dh_jiaojin: '骄矜',
                        dh_jiaojin_info: '当你受到伤害时,你可以弃置一张锦囊牌并防止此伤害你脱一件衣服.',
                        dh_jinhui: '谮毁',
                        dh_jinhui_info: '出牌阶段,当你使用【杀】或普通锦囊牌指定目标时,你可选择另一名能成为此牌目标的其他角色并选择一项:①令其也成为此牌的目标.②获得其一张牌,将此牌的使用者改为该角色你脱一件衣服.',
                        gyp_huxiao: '虎啸',
                        gyp_huxiao_info: '锁定技,当你造成火属性伤害时,你与该角色摸一张牌.你于此回合内对其使用牌没有次数限制.',
                        gyp_xuehen: '雪恨',
                        gyp_xuehen_info: '出牌阶段限一次,若你还有可以脱的衣服,你可以脱一件衣服,选择至多X名角色,横置这些角色并对其中一名角色造成1点火焰伤害.(X为你已损失的体力值且至少为1)',
                        gyp_wuji: '武继',
                        gyp_wuji_info: '觉醒技,结束阶段开始时,若你于此回合内造成过3点或更多伤害,你加1点体力上限并回复1点体力,获得技能武圣,从场上、牌堆或弃牌堆中获得【青龙偃月刀】并穿上所有衣服.',
                        gyp_baoyi: '爆衣',
                        gyp_baoyi_info: '当你回复体力时,你穿上一件衣服.',
                        ls_anxu: '安恤',
                        ls_anxu_info: '出牌阶段限一次,你可以选择两名角色,令其中一名角色获得另一名角色的一张牌.若以此法移动的牌不来自装备区,则你摸一张牌.你可以令二者中手牌数较少的一名角色摸一张牌,技能结算后,你脱一件衣服并摸一张牌.',
                        ls_zhuiyi: '追忆',
                        ls_zhuiyi_info: '每回合限一次,当你进入濒死状态时,你可以令一名角色(击杀你的角色除外)摸四张牌,其回复1点体力你穿上所有衣服.',
                        czj_sheyi: '舍裔',
                        czj_sheyi_info: '每回合限一次,当有角色受到伤害时,你可以交给其至少X张牌并防止此伤害(X为你的体力值)你穿一件衣服.',
                        czj_tianyin: '天音',
                        czj_tianyin_info: '锁定技,你的结束阶段开始时或你造成伤害后,你从牌堆中获得每种本回合未使用过的类型的牌各一张你脱一件衣服.',
                        az_chongxu: '冲虚',
                        az_chongxu_info: '出牌阶段限一次,你可以进行一次<冲虚>,根据得分选择:1.消耗2点分数从三个果包其他武将的技能中选一个获得之直至回合结束2.消耗4点分数从三个果包其他武将技能选择一个永久获得之3.消耗五点分数令场上一名角色将武将随机替换一名果包武将;剩余的分数则转换为摸成等量的牌',
                        qm_huihuan: '回幻',
                        qm_huihuan_info: '出牌阶段限一次,你可以摸一张牌并将图换为自己原本的样子',
                        xs_pojun: '破军',
                        xs_pojun_info: '当你使用【杀】指定目标后,你可以将其的至多X张牌置于其武将牌上(X为其体力值),其于当前回合结束时获得这些牌.当你因执行【杀】的效果而对一名角色造成伤害时,则此伤害+1.',
                        xs_lianpo: '连魄',
                        xs_lianpo_info: '你的回合结束时,若你本回合内击杀过角色,则你可以穿上一件衣服并进行一个额外的回合.',
                        xunmi: '熏蜜',
                        xunmi_info: '使命技:出牌阶段限一次,你可以与一名其他角色拼点,若你赢,你脱一件衣服.成功:拼点结束后,若你拼点成功次数等于2,你增加一点体力上限并获得技能威重并穿上所有衣服.失败:在你成功之前进入濒死状态时,你将体力回复至1点脱光所有衣服并获得技能恶堕.',
                        erduo: '恶堕',
                        erduo_info: '锁定技,准备阶段,你脱一件衣服发情并摸两张牌',
                        qianghun: '枪魂',
                        qianghun_info: '出牌阶段,你可以穿一件衣服并从牌堆,弃牌堆中获一张诸葛连弩和一张杀.',
                        qiangwang: '枪王',
                        qiangwang_info: '当你造成伤害时,若你还有可以脱的衣服,你可以脱一件衣服令此伤害加一.',
                        gxy_baoyi: '爆衣',
                        gxy_baoyi_info: '当你回复体力时,你穿上一件衣服.',
                        wr_minsi: '敏思',
                        wr_minsi_info: '出牌阶段限一次,你可以弃置任意张点数之和在12到24的牌,摸两倍数量的牌.以此法获得的牌中,黑色牌本回合无距离限制,红色牌本回合不计入手牌上限你穿一件衣服.',
                        wr_jizhan: '吉占',
                        wr_jizhan_info: '摸牌阶段开始时,你可以放弃摸牌.你展示牌堆顶的一张牌,并猜测牌堆顶的下一张牌点数大于或小于此牌.若你猜对,你可继续重复此流程.你获得以此法展示的所有牌你脱一件衣服.',
                        wr_jijing: '吉境',
                        wr_jijing_info: '每回合限一次,当你受到伤害后,你可以进行一次判定,你回复1点体力并穿上一件衣服.',
                        wr_fusong: '赋颂',
                        wr_fusong_info: '当场上的判定牌生效后,你可以获得之脱一件衣服.',
                        ying: 'ying',
                        ying_info: '',
                        sr_yingjian: '影箭',
                        sr_yingjian_info: '准备阶段开始时,你可以视为使用一张无距离限制的【杀】脱一件衣服,若此时你的未受伤,则结束阶段开始时,你可以再发动一次此技能.',
                        sr_shixin: '释衅',
                        sr_shixin_info: '锁定技,当你受到火属性或雷属性伤害时,你防止此伤害穿上一件衣服并摸一张牌.',
                        zch_jueqing: '绝情',
                        zch_jueqing_info: '锁定技,你即将造成伤害时你可以视为失去体力;每回合限一次,当有角色失去体力时,你可以防止之你摸两张牌.',
                        zch_shangshi: '伤逝',
                        zch_shangshi_info: '伤逝:准备阶段,你可以失去一点体力;当你失去手牌时,你可以将手牌补至或弃至x.(x为本轮所有角色失去的体力值总和且至多为5),若此时你的手牌数小于你的体力值,则你穿一件衣服.',
                        yyy_fengwu: '凤舞',
                        yyy_fengwu_info: '锁定技,弃牌阶段结束时,你失去一点体力脱一件衣服并视为使用一张无视防具的杀,若此杀造成伤害,则你移动场上一张牌或将手牌补至体力上限.',
                        yyy_qinghua: '清嬅',
                        yyy_qinghua_info: '出牌阶段限x次(x为你的体力值),你可以摸一张牌,若如此做,回合结束时,你须展示你所有手牌,若颜色相同,则你穿一件衣服,你可以将所有手牌视为桃,杀,或普通锦囊牌使用,若只指定了一个目标则可以额外指定y名角色为目标.(y为发动此技能的次数),否则你选择一种颜色并弃置所有同颜色的手牌并脱一件衣服.',
                        bz_feishan: '飞扇',
                        bz_feishan_info: '出牌阶段限一次,你可以弃置一张牌并选择一名角色.该角色获得并使用【花蝶扇】.',
                        bz_fenghuang: '凤凰之舞',
                        bz_fenghuang_info: '限定技.出牌阶段,你可以对一名其他角色造成x点伤害将手牌摸至x并和一名其他角色交换位置并脱光.(x为火凤标记的数量且至多为5)',
                        bz_huofeng: '火凤',
                        bz_huofeng_info: '锁定技,当你造成伤害时,你穿一件衣服并增加一个火凤标记.',
                        火凤1: '火凤1',
                        火凤1_info: '',
                        shanzi_skill: '花蝶扇',
                        shanzi_skill_info: '',
                        shanzi_skill_damage: '花蝶扇',
                        shanzi_skill_damage_info: '',
                        yw_mingxuan: '瞑眩',
                        yw_mingxuan_info: '出牌阶段开始时,你可以选择至多X张花色各不相同的手牌(X为未选择过选项一的角色),将这些牌随机交给这些角色中的等量角色.这些角色依次选择一项:⒈对你使用一张【杀】.⒉交给你一张牌,你摸一张牌并脱一件衣服.',
                        yw_xianchou: '陷仇',
                        yw_xianchou_info: '当你受到有来源的伤害后,你可选择一名不为伤害来源的角色,其获得技能铁骑直至回合结束.该角色可以弃置一张牌,视为对伤害来源使用一张【杀】(无距离限制).若其因此【杀】造成了伤害,则你可以回复1点体力或摸一张牌你穿一件衣服.',
                        Q_kuizhu: '溃诛',
                        Q_kuizhu_info: '出牌阶段结束后,你可以选择至多x名角色并依次选择一项:1.令其摸一张牌;2.对其造成1点伤害,若选项一的角色数小于选项二的角色数,你失去1点体力(X为此阶段进入弃置堆的牌数)结算结束后,你穿一件衣服.',
                        resunliang_chezheng2: '掣政1',
                        resunliang_chezheng2_info: '',
                        resunliang_chezheng: '掣政',
                        resunliang_chezheng_info: '锁定技,你的出牌阶段内,攻击范围内不包含你的角色不能成为你使用牌的目标.弃牌阶段结束时,若你出牌阶段内使用的牌数小于这些角色数,你获得其中一名角色一张牌.',
                        resunliang_lijun: '立军',
                        resunliang_lijun_info: '主公技,其他吴势力角色于其出牌阶段使用【杀】结算结束后,其可以将此【杀】交给你,你可以令其摸一张牌;若你于其出牌阶段第一次发动此技能,你可令此杀不计入次数.',
                        resunliang_lijun1: '立军1',
                        resunliang_lijun1_info: '',
                        sl_kuanggu: '狂骨',
                        sl_kuanggu_info: '当你对距离1以内的一名角色造成1点伤害后,你可以回复1点体力或摸一张牌你脱一件衣服.',
                    },
                    skill: {
                        //蒂法无惨
                        耶路撒冷: {
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                            },
                            content() {
                                'step 0';
                                event.type = get.type(trigger.card) == 'basic';
                                var prompt = event.type ? '令一名角色摸两张牌或弃置两张牌' : '令一名角色回复1点体力或对其造成1点伤害';
                                player.chooseTarget(get.prompt('耶路撒冷'), prompt).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (_status.event.parent.type) {
                                        var att = get.attitude(player, target);
                                        if (target.hasSkillTag('nogain')) {
                                            return -att;
                                        }
                                        if (target.countCards('he') == 1 && att < 0) {
                                            att /= 2;
                                        }
                                        return Math.abs(att) * (1 + 0.1 * Math.min(0, 5 - target.countCards('h')));
                                    }
                                    return Math.max(get.recoverEffect(target, player, player), get.damageEffect(target, player, player));
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    var trans = get.translation(target);
                                    var list;
                                    if (event.type) {
                                        if (!target.countCards('he')) {
                                            event._result = { index: 0 };
                                        } else {
                                            list = [`令${trans}摸两张牌`, `令${trans}弃置两张牌`];
                                        }
                                    } else {
                                        if (target.isHealthy()) {
                                            event._result = { index: 1 };
                                        } else {
                                            list = [`令${trans}回复1点体力`, `对${trans}造成1点伤害`];
                                        }
                                    }
                                    player
                                        .chooseControl()
                                        .set('choiceList', list)
                                        .set(
                                            'choice',
                                            (function () {
                                                if (event.type) {
                                                    return get.attitude(player, target) > 0 ? 0 : 1;
                                                }
                                                return get.recoverEffect(target, player, player) > get.damageEffect(target, player, player) ? 0 : 1;
                                            })(),
                                        )
                                        .set('ai', function () {
                                            return _status.event.choice;
                                        });
                                    player.removeMark('耶路撒冷');
                                    if (player.storage.耶路撒冷 == 0) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/tifa.jpg');
                                    }
                                    if (player.storage.耶路撒冷 == 1) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/tifa1.jpg');
                                    }
                                    if (player.storage.耶路撒冷 == 2) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/tifa2.jpg');
                                    }
                                    if (player.storage.耶路撒冷 == 3) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/tifa3.jpg');
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.addExpose(0.2);
                                if (event.type) {
                                    if (result.index == 0) {
                                        target.draw(2);
                                    } else {
                                        target.chooseToDiscard(2, 'he', true);
                                    }
                                } else {
                                    if (result.index == 0) {
                                        target.recover();
                                    } else {
                                        target.damage();
                                    }
                                }
                            },
                        },
                        过载: {
                            audio: '1',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addMark('耶路撒冷');
                                var list = [];
                                if (player.storage.耶路撒冷 == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/tifa1.jpg');
                                }
                                if (player.storage.耶路撒冷 == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/tifa2.jpg');
                                }
                                if (player.storage.耶路撒冷 == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/tifa3.jpg');
                                }
                                if (player.storage.耶路撒冷 > 3) {
                                    player.removeMark('耶路撒冷', 1);
                                }
                                ('step 1');
                                var num = player.hp;
                                player.draw(num);
                                player.chooseToDiscard(num, 'he', true);
                            },
                        },
                        tifa_wucan: {
                            group: ['tifa_tuo', 'tifa_chuan'],
                        },
                        tifa_tuo: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.num > 0 && event.source && event.source.sex == 'male';
                            },
                            content() {
                                'step 0';
                                var chat = ['我不能背叛陛下..', '你们这样..会遭..啊~~~'].randomGet();
                                player.say(chat);
                                player.addMark('耶路撒冷');
                                ('step 1');
                                var list = [];
                                if (player.storage.耶路撒冷 == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/tifa1.jpg');
                                    game.playAudio('../extension/果包/audio/wu1.mp3');
                                }
                                if (player.storage.耶路撒冷 == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/tifa2.jpg');
                                    game.playAudio('../extension/果包/audio/wu2.mp3');
                                }
                                if (player.storage.耶路撒冷 == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/tifa3.jpg');
                                    game.playAudio('../extension/果包/audio/wu3.mp3');
                                }
                                if (player.storage.耶路撒冷 > 3) {
                                    player.removeMark('耶路撒冷', 1);
                                }
                            },
                        },
                        tifa_chuan: {
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.removeMark('耶路撒冷');
                                if (player.storage.耶路撒冷 == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/tifa.jpg');
                                }
                                if (player.storage.耶路撒冷 == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/tifa1.jpg');
                                }
                                if (player.storage.耶路撒冷 == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/tifa2.jpg');
                                }
                                if (player.storage.耶路撒冷 == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/tifa3.jpg');
                                }
                            },
                        },
                        //虚空
                        Qqishu: {
                            audio: 'ext:果包/audio:4',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'basic' && event.player.countMark('Qqishu') > 0;
                            },
                            content() {
                                player.removeMark('Qqishu');
                                if (player.storage.Qqishu == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk.jpg');
                                }
                                if (player.storage.Qqishu == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk1.jpg');
                                }
                                if (player.storage.Qqishu == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk2.jpg');
                                }
                                if (player.storage.Qqishu == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk3.jpg');
                                }
                                var list = get.inpile('trick', 'trick');
                                var list2 = [];
                                for (var i = 0; i < 1; i++) {
                                    list2.push(game.createCard(list.randomGet()));
                                }
                                player.gain(list2, 'draw');
                            },
                            ai: {
                                order: 9.8,
                                threaten: 1.8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        昙花一现: {
                            //野心
                            audio: 'ext:魂将/武将配音/兵谋篇/魂钟会:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countMark('Qqishu') < 3;
                            },
                            content() {
                                'step 0';
                                player.removeMark('Qqishu', 99);
                                player.addMark('Qqishu', 3);
                                var list = [];
                                if (player.storage.Qqishu == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk1.jpg');
                                    game.playAudio('../extension/果包/audio/wu1.mp3');
                                }
                                if (player.storage.Qqishu == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk2.jpg');
                                    game.playAudio('../extension/果包/audio/wu2.mp3');
                                }
                                if (player.storage.Qqishu == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk3.jpg');
                                    game.playAudio('../extension/果包/audio/wu3.mp3');
                                }
                                if (player.storage.Qqishu > 3) {
                                    player.removeMark('Qqishu', 1);
                                }
                                ('step 1');
                                player.draw(5);
                                player.addTempSkill('昙花一现_end');
                            },
                            subSkill: {
                                end: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return !player.getStat('source', 'damage') && event.player.countMark('Qqishu') < 3;
                                    },
                                    content() {
                                        player.removeMark('Qqishu', 99);
                                        player.addMark('Qqishu', 3);
                                        var list = [];
                                        if (player.storage.Qqishu == 1) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/xk1.jpg');
                                            game.playAudio('../extension/果包/audio/wu1.mp3');
                                        }
                                        if (player.storage.Qqishu == 2) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/xk2.jpg');
                                            game.playAudio('../extension/果包/audio/wu2.mp3');
                                        }
                                        if (player.storage.Qqishu == 3) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/xk3.jpg');
                                            game.playAudio('../extension/果包/audio/wu3.mp3');
                                        }
                                        if (player.storage.Qqishu > 3) {
                                            player.removeMark('Qqishu', 1);
                                        }
                                        player.draw(5);
                                    },
                                },
                            },
                        },
                        //虚空无惨
                        xk_wucan: {
                            group: ['xk_tuo', 'xk_chuan'],
                        },
                        xk_tuo: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.num > 0 && event.source && event.source.sex == 'male';
                            },
                            content() {
                                'step 0';
                                var chat = ['我不能背叛陛下..', '你们这样..会遭..啊~~~'].randomGet();
                                player.say(chat);
                                player.addMark('Qqishu');
                                ('step 1');
                                var list = [];
                                if (player.storage.Qqishu == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk1.jpg');
                                    game.playAudio('../extension/果包/audio/wu1.mp3');
                                }
                                if (player.storage.Qqishu == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk2.jpg');
                                    game.playAudio('../extension/果包/audio/wu2.mp3');
                                }
                                if (player.storage.Qqishu == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk3.jpg');
                                    game.playAudio('../extension/果包/audio/wu3.mp3');
                                }
                                if (player.storage.Qqishu > 3) {
                                    player.removeMark('Qqishu', 1);
                                }
                            },
                        },
                        xk_chuan: {
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.removeMark('Qqishu');
                                if (player.storage.Qqishu == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk.jpg');
                                }
                                if (player.storage.Qqishu == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk1.jpg');
                                }
                                if (player.storage.Qqishu == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk2.jpg');
                                }
                                if (player.storage.Qqishu == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xk3.jpg');
                                }
                            },
                        },
                        神器: {
                            nobracket: true,
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards)) {
                                    for (var i of event.cards) {
                                        if (get.type(i) == 'equip') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('神器'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return Math.random();
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    for (var i = 0; i < target.skills.length; i++) {
                                        player.addTempSkill(target.skills[i], { player: 'phaseEnd' });
                                        player.removeMark('qhmark', 4);
                                        if (player.storage.qhmark == 0) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/qh.jpg');
                                        }
                                        if (player.storage.qhmark == 1) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/qh1.jpg');
                                        }
                                        if (player.storage.qhmark == 2) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/qh2.jpg');
                                        }
                                        if (player.storage.qhmark == 3) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/qh3.jpg');
                                        }
                                    }
                                }
                            },
                        },
                        //千鹤无惨
                        qh_wucan: {
                            group: ['qh_tuo', 'qh_chuan'],
                        },
                        qh_tuo: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.num > 0 && event.source && event.source.sex == 'male';
                            },
                            content() {
                                'step 0';
                                var chat = ['我不能背叛陛下..', '你们这样..会遭..啊~~~'].randomGet();
                                player.say(chat);
                                player.addMark('qhmark');
                                ('step 1');
                                var list = [];
                                if (player.storage.qhmark == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/qh1.jpg');
                                    game.playAudio('../extension/果包/audio/wu1.mp3');
                                }
                                if (player.storage.qhmark == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/qh2.jpg');
                                    game.playAudio('../extension/果包/audio/wu2.mp3');
                                }
                                if (player.storage.qhmark == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/qh3.jpg');
                                    game.playAudio('../extension/果包/audio/wu3.mp3');
                                }
                                if (player.storage.qhmark > 3) {
                                    player.removeMark('qhmark', 1);
                                }
                            },
                        },
                        qh_chuan: {
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.removeMark('qhmark');
                                if (player.storage.qhmark == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/qh.jpg');
                                }
                                if (player.storage.qhmark == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/qh1.jpg');
                                }
                                if (player.storage.qhmark == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/qh2.jpg');
                                }
                                if (player.storage.qhmark == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/qh3.jpg');
                                }
                            },
                        },
                        MYshangti: {
                            audio: 'ext:果包/audio:1',
                            trigger: {
                                global: ['damageEnd'],
                            },
                            filter(event, player, name) {
                                'step 0';
                                if (event.player == player) {
                                    return false;
                                }
                                return ['basic', 'trick'].includes(get.type(event.card)) && player.countMark('qhmark') < 3;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                trigger.player.recover();
                                trigger.player.draw(2);
                                player.draw(2);
                                ('step 1');
                                player.addMark('qhmark');
                                var list = [];
                                if (player.storage.qhmark == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/qh1.jpg');
                                }
                                if (player.storage.qhmark == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/qh2.jpg');
                                }
                                if (player.storage.qhmark == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/qh3.jpg');
                                }
                                if (player.storage.qhmark > 3) {
                                    player.removeMark('qhmark', 1);
                                }
                            },
                        },
                        gbxj_wucan_ssx: {
                            group: ['gbxj_wucan_ssx1', 'gbxj_wucan_ssx2'],
                        },
                        gbxj_wucan_ssx1: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            init: (player) => (player.storage.ssx = 0),
                            filter(event, player) {
                                return event.num > 0 && event.source && event.source.sex == 'male' && player.storage.ssx < 3;
                            },
                            content() {
                                'step 0';
                                var chat = ['狗贼~你要干..什么!？', '啊~等一下~啊~我夫君呢..', '黄盖、魏延比刘备那老头强多了,doge'].randomGet();
                                player.say(chat);
                                player.storage.ssx++;
                                var list = [];
                                ('step 1');
                                player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_sunshangxiang' + (player.storage.ssx === 0 ? '' : player.storage.ssx) + '.jpg');
                                game.playAudio('../extension/果包/audio/gbxj_sunshangxiang' + player.storage.ssx);
                            },
                        },
                        gbxj_wucan_ssx2: {
                            trigger: { player: 'recoverEnd' },
                            forced: true,
                            popup: false,
                            init: (player) => (player.storage.ssx = 0),
                            content() {
                                'step 0';
                                if (player.storage.ssx > 0) {
                                    player.storage.ssx--;
                                }
                                ('step 1');
                                var list = [];
                                player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_sunshangxiang' + (player.storage.ssx === 0 ? '' : player.storage.ssx) + '.jpg');
                            },
                        },
                        gbxj_xiaoji: {
                            audio: 'ext:果包/audio:2',
                            audioname: ['gbxj_xiaoji1', 'gbxj_xiaoji2'],
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.es && evt.es.length;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.getl(player).es.length;
                                ('step 1');
                                event.count--;
                                player.draw(2);
                                ('step 2');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('xiaoji')).set('frequentSkill', 'xiaoji').ai = lib.filter.all;
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                noe: true,
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) {
                                            return [1, 3];
                                        }
                                    },
                                },
                            },
                        },
                        gbxj_jianwu: {
                            audio: 'ext:果包/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            frequent: false,
                            filter(event, player) {
                                return player.storage.ssx > 0;
                            },
                            init: (player) => (player.storage.ssx = 0),
                            content() {
                                'step 0';
                                player.storage.ssx--;
                                var list = [];
                                player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_sunshangxiang' + (player.storage.ssx === 0 ? '' : player.storage.ssx) + '.jpg');
                                var card = get.cardPile(function (card) {
                                    return get.type(card) == 'equip';
                                });
                                event.card = card;
                                ('step 1');
                                if (event.card) {
                                    player.gain(event.card);
                                    player.chooseUseTarget(event.card);
                                }
                            },
                        },
                        gbxj_jianxian: {
                            audio: 'ext:果包/audio:1',
                            enable: 'phaseUse',
                            init: (player) => (player.storage.ssx = 0),
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0 && player.storage.ssx < 3;
                            },
                            filterTarget: true,
                            position: 'he',
                            filterCard: {
                                type: 'equip',
                            },
                            selectCard: 1,
                            selectTarget: 1,
                            check(card) {
                                return 4 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.storage.ssx++;
                                var list = [];
                                player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_sunshangxiang' + (player.storage.ssx === 0 ? '' : player.storage.ssx) + '.jpg');
                                if (target.isDamaged()) {
                                    event.goto(2);
                                }
                                ('step 1');
                                target.damage(1);
                                event.goto(4);
                                ('step 2');
                                player
                                    .chooseControl('令' + get.translation(target) + '回复1点体力', '对' + get.translation(target) + '造成1点伤害')
                                    .set('prompt', '〖剑仙〗:选择一项')
                                    .set('ai', function (event, player) {
                                        if (get.attitude(player, target) >= 0) {
                                            return '令' + get.translation(target) + '回复1点体力';
                                        }
                                        return '对' + get.translation(target) + '造成1点伤害';
                                    }); //QQQ
                                ('step 3');
                                if (result.control == '令' + get.translation(target) + '回复1点体力') {
                                    target.recover(1);
                                } else {
                                    target.damage(1);
                                }
                                ('step 4');
                            },
                            ai: {
                                expose: 0.4,
                                threaten: 0.4,
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) < 0 && target.isMinHp()) {
                                            return -1;
                                        }
                                        if (get.attitude(player, target) > 0 && target.isMinHp() && target.isDamaged()) {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        gbxj_wucan_myl: {
                            group: ['gbxj_wucan_myl1', 'gbxj_wucan_myl2'],
                        },
                        gbxj_wucan_myl1: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.num > 0 && event.source && event.source.sex == 'male';
                            },
                            content() {
                                'step 0';
                                var chat = ['狗贼~你要干..什么!？', '啊~等一下~啊~我夫君呢..', '子龙哥哥,救我'].randomGet();
                                player.say(chat);
                                if (player.storage.mayunlu_wucan === undefined || (player.storage.mayunlu_wucan >= 0 && player.storage.mayunlu_wucan <= 2)) {
                                    player.addMark('mayunlu_wucan');
                                }
                                var list = [];
                                ('step 1');
                                if (player.storage.mayunlu_wucan >= 0 && player.storage.mayunlu_wucan <= 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_mayunlu' + (player.storage.mayunlu_wucan === 0 ? '' : player.storage.mayunlu_wucan) + '.jpg');
                                    game.playAudio('../extension/果包/audio/gbxj_mayunlu' + player.storage.mayunlu_wucan);
                                }
                                if (player.storage.mayunlu_wucan > 3) {
                                    player.removeMark('mayunlu_wucan', 1);
                                }
                            },
                        },
                        gbxj_wucan_myl2: {
                            trigger: { player: 'recoverEnd' },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                if (player.storage.mayunlu_wucan >= 1 && player.storage.mayunlu_wucan <= 3) {
                                    player.removeMark('mayunlu_wucan');
                                }
                                ('step 1');
                                var list = [];
                                if (player.storage.mayunlu_wucan >= 0 && player.storage.mayunlu_wucan <= 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_mayunlu' + (player.storage.mayunlu_wucan === 0 ? '' : player.storage.mayunlu_wucan) + '.jpg');
                                }
                            },
                        },
                        gbxj_fengpo: {
                            group: ['gbxj_fengpo1', 'gbxj_fengpo2', 'gbxj_fengpo3'],
                        },
                        gbxj_fengpo1: {
                            audio: 'ext:果包/audio:1',
                            forced: true,
                            trigger: {
                                player: ['shaBegin', 'juedouBegin'],
                            },
                            popup: false,
                            content() {
                                'step 0';
                                if (player.storage.guo_fengpo > 0) {
                                    player.chooseControl('修改', '取消').set('prompt', get.prompt('是否弃置一个凤魄标记修改此次凤魄为其手中红牌数'));
                                }
                                ('step 1');
                                var res = false;
                                if (result.control && result.control != '取消') {
                                    player.removeMark('guo_fengpo');
                                    res = true;
                                }
                                if (res) {
                                    var nd = trigger.target.countCards('h', { color: 'red' });
                                } else {
                                    var nd = trigger.target.countCards('h', { suit: 'diamond' });
                                }
                                player.chooseControl('draw_card', '获得凤魄标记', 'cancel2').set('prompt', get.prompt('选择摸' + nd + '张牌或获得' + nd + '枚凤魄标记'));
                                if (res) {
                                    event.goto(3);
                                } else {
                                    event.goto(2);
                                }
                                ('step 2');
                                if (result.control && result.control != 'cancel2') {
                                    var nd = trigger.target.countCards('h', { suit: 'diamond' });
                                    if (result.control == 'draw_card') {
                                        player.draw(nd);
                                        if (player.storage.mayunlu_wucan >= 1 && player.storage.mayunlu_wucan <= 3) {
                                            player.removeMark('mayunlu_wucan');
                                        }
                                    } else {
                                        var trigger2 = trigger.parent;
                                        if (nd > 0) {
                                            player.addMark('guo_fengpo', nd);
                                        }
                                        player.addMark('mayunlu_wucan');
                                    }
                                    var list = [];
                                    if (player.storage.mayunlu_wucan >= 0 && player.storage.mayunlu_wucan <= 3) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_mayunlu' + (player.storage.mayunlu_wucan === 0 ? '' : player.storage.mayunlu_wucan) + '.jpg');
                                    }
                                    event.finish();
                                }
                                ('step 3');
                                if (result.control && result.control != 'cancel2') {
                                    var nd = trigger.target.countCards('h', { color: 'red' });
                                    if (result.control == 'draw_card') {
                                        player.draw(nd);
                                        player.removeMark('mayunlu_wucan');
                                    } else {
                                        var trigger2 = trigger.parent;
                                        if (nd > 0) {
                                            player.addMark('guo_fengpo', nd);
                                        }
                                        if (player.storage.mayunlu_wucan === undefined || (player.storage.mayunlu_wucan >= 0 && player.storage.mayunlu_wucan <= 2)) {
                                            player.addMark('mayunlu_wucan');
                                        }
                                    }
                                    var list = [];
                                    if (player.storage.mayunlu_wucan >= 0 && player.storage.mayunlu_wucan <= 3) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_mayunlu' + (player.storage.mayunlu_wucan === 0 ? '' : player.storage.mayunlu_wucan) + '.jpg');
                                    }
                                    event.finish();
                                }
                            },
                        },
                        gbxj_fengpo2: {
                            audio: 'ext:果包/audio:1',
                            forced: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return player.countMark('guo_fengpo') >= 2;
                            },
                            content() {
                                var fengpo = 0;
                                if (player.storage.guo_fengpo != undefined) {
                                    if (player.storage.guo_fengpo >= 2 && player.storage.guo_fengpo < 5) {
                                        fengpo = 1;
                                    } else if (player.storage.guo_fengpo >= 5 && player.storage.guo_fengpo < 9) {
                                        fengpo = 2;
                                    } else if (player.storage.guo_fengpo >= 9) {
                                        fengpo = 3;
                                    }
                                }
                                trigger.num += parseInt(fengpo);
                            },
                        },
                        gbxj_fengpo3: {
                            audio: 'ext:果包/audio:1',
                            forced: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                player.addMark('guo_fengpo', 1);
                            },
                        },
                        guo_fengpo: {
                            marktext: '凤',
                            mark: true,
                            intro: {
                                name: '凤魄',
                                content: 'mark',
                            },
                        },
                        gbxj_mashu: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        gbxj_wucan_cy: {
                            group: ['gbxj_wucan_cy1', 'gbxj_wucan_cy2'],
                        },
                        gbxj_wucan_cy1: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.num > 0 && event.source && event.source.sex == 'male';
                            },
                            content() {
                                'step 0';
                                var chat = ['狗贼~你要干..什么!？', '啊~等一下~啊~我夫君呢..', '嘤嘤嘤'].randomGet();
                                player.say(chat);
                                if (player.storage.cy_wucan === undefined || (player.storage.cy_wucan >= 0 && player.storage.cy_wucan <= 2)) {
                                    player.addMark('cy_wucan');
                                }
                                var list = [];
                                ('step 1');
                                if (player.storage.cy_wucan >= 0 && player.storage.cy_wucan <= 3) {
                                    if (!player.storage.gbxjjycaoying) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_caoying' + (player.storage.cy_wucan === 0 ? '' : player.storage.cy_wucan) + '.jpg');
                                    } else {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_jycaoying' + (player.storage.cy_wucan === 0 ? '' : player.storage.cy_wucan) + '.jpg');
                                    }
                                    game.playAudio('../extension/果包/audio/gbxj_caoyin' + player.storage.cy_wucan);
                                }
                                if (player.storage.cy_wucan > 3) {
                                    player.removeMark('cy_wucan', 1);
                                }
                            },
                        },
                        gbxj_wucan_cy2: {
                            trigger: { player: 'recoverEnd' },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                if (player.storage.cy_wucan >= 1 && player.storage.cy_wucan <= 3) {
                                    player.removeMark('cy_wucan');
                                }
                                ('step 1');
                                var list = [];
                                if (player.storage.cy_wucan >= 0 && player.storage.cy_wucan <= 3) {
                                    if (!player.storage.gbxjjycaoying || player.storage.gbxjjycaoying == undefined) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_caoying' + (player.storage.cy_wucan === 0 ? '' : player.storage.cy_wucan) + '.jpg');
                                    } else {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_jycaoying' + (player.storage.cy_wucan === 0 ? '' : player.storage.cy_wucan) + '.jpg');
                                    }
                                }
                            },
                        },
                        guo_lingren: {
                            marktext: '凌',
                            mark: true,
                            intro: {
                                name: '凌人',
                                content: 'mark',
                            },
                        },
                        gbxj_jinguo: {
                            audio: 'ext:果包/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.countMark('guo_lingren') > 2;
                            },
                            content() {
                                player.awakenSkill('gbxj_jinguo');
                                player.addMark('gbxjjycaoying', 1, false);
                                player.addSkill('gbxj_huawu');
                                player.loseMaxHp();
                                game.log(player, '获得了技能', '#g【花舞】');
                                var list = [];
                                if (player.storage.cy_wucan >= 0 && player.storage.cy_wucan <= 3) {
                                    if (!player.storage.gbxjjycaoying || player.storage.gbxjjycaoying == undefined) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_caoying' + (player.storage.cy_wucan === 0 ? '' : player.storage.cy_wucan) + '.jpg');
                                    } else {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_jycaoying' + (player.storage.cy_wucan === 0 ? '' : player.storage.cy_wucan) + '.jpg');
                                    }
                                }
                            },
                        },
                        gbxj_lingren: {
                            usable: 1,
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) {
                                    return false;
                                }
                                if (!player.isPhaseUsing()) {
                                    return false;
                                }
                                if (!['basic', 'trick'].includes(get.type(event.card))) {
                                    return false;
                                }
                                if (get.tag(event.card, 'damage')) {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('xinfu_lingren'), '选择一名目标角色并猜测其手牌构成', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return 2 - get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    event.choice = {
                                        basic: false,
                                        trick: false,
                                        equip: false,
                                    };
                                    player.chooseBool('是否押基本牌？').ai = function (event, player) {
                                        var rand = 0.95;
                                        if (!target.countCards('h', { type: ['basic'] })) {
                                            rand = 0.05;
                                        }
                                        if (!target.countCards('h')) {
                                            rand = 0;
                                        }
                                        return Math.random() < rand ? true : false;
                                    };
                                } else {
                                    player.getStat('triggerSkill').xinfu_lingren--;
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.choice.basic = true;
                                }
                                player.chooseBool('是否押锦囊牌？').ai = function (event, player) {
                                    var rand = 0.9;
                                    if (!target.countCards('h', { type: ['trick', 'delay'] })) {
                                        rand = 0.1;
                                    }
                                    if (!target.countCards('h')) {
                                        rand = 0;
                                    }
                                    return Math.random() < rand ? true : false;
                                };
                                ('step 3');
                                if (result.bool) {
                                    event.choice.trick = true;
                                }
                                player.chooseBool('是否押装备牌？').ai = function (event, player) {
                                    var rand = 0.75;
                                    if (!target.countCards('h', { type: ['equip'] })) {
                                        rand = 0.25;
                                    }
                                    if (!target.countCards('h')) {
                                        rand = 0;
                                    }
                                    return Math.random() < rand ? true : false;
                                };
                                ('step 4');
                                if (result.bool) {
                                    event.choice.equip = true;
                                }
                                var reality = {
                                    basic: false,
                                    trick: false,
                                    equip: false,
                                };
                                var he = target.getCards('h');
                                for (var i = 0; i < he.length; i++) {
                                    reality[get.type(he[i], 'trick')] = true;
                                }
                                event.num = 0;
                                var tl = ['basic', 'trick', 'equip'];
                                for (var i = 0; i < tl.length; i++) {
                                    if (event.choice[tl[i]] == reality[tl[i]]) {
                                        event.num++;
                                    }
                                }
                                ('step 5');
                                player.popup('猜对' + get.cnNumber(event.num) + '项');
                                game.log(player, '猜对了' + get.cnNumber(event.num) + '项');
                                if (event.num > 0) {
                                    trigger.parent.baseDamage++;
                                }
                                if (event.num > 1) {
                                    player.draw(2);
                                }
                                if (event.num > 2) {
                                    player.addMark('guo_lingren');
                                    player.addTempSkill('gbxj_lingren_jianxiong', { player: 'phaseBegin' });
                                    player.addTempSkill('gbxj_lingren_xingshang', { player: 'phaseBegin' });
                                }
                                player.say(['将军一副好骨,不如留于此山!', '精兵如炬,困龙难飞.'].randomGet());
                                if (event.num <= 2) {
                                    if (player.storage.cy_wucan === undefined || (player.storage.cy_wucan >= 0 && player.storage.cy_wucan <= 2)) {
                                        player.addMark('cy_wucan');
                                    }
                                    if (event.num <= 1) {
                                        if (player.storage.cy_wucan === undefined || (player.storage.cy_wucan >= 0 && player.storage.cy_wucan <= 2)) {
                                            player.addMark('cy_wucan');
                                        }
                                    }
                                    if (event.num == 0) {
                                        if (player.storage.cy_wucan === undefined || (player.storage.cy_wucan >= 0 && player.storage.cy_wucan <= 2)) {
                                            player.addMark('cy_wucan');
                                        }
                                    }
                                    var list = [];
                                    if (player.storage.cy_wucan >= 0 && player.storage.cy_wucan <= 3) {
                                        if (!player.storage.gbxjjycaoying || player.storage.gbxjjycaoying == undefined) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_caoying' + (player.storage.cy_wucan === 0 ? '' : player.storage.cy_wucan) + '.jpg');
                                        } else {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_jycaoying' + (player.storage.cy_wucan === 0 ? '' : player.storage.cy_wucan) + '.jpg');
                                        }
                                    }
                                }
                            },
                        },
                        gbxj_lingren_xingshang: {
                            audio: 'ext:果包/audio:1',
                            inherit: 'rexingshang',
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                return player.isDamaged() || event.player.countCards('he') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var choice = [];
                                if (player.isDamaged()) {
                                    choice.push('回复体力');
                                }
                                if (trigger.player.countCards('he')) {
                                    choice.push('获得牌');
                                }
                                choice.push('cancel2');
                                player
                                    .chooseControl(choice)
                                    .set('prompt', get.prompt2('rexingshang'))
                                    .set('ai', function () {
                                        if (choice.length == 2) {
                                            return 0;
                                        }
                                        if (get.value(trigger.player.getCards('he')) > 8) {
                                            return 1;
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (result.control == '获得牌') {
                                        event.togain = trigger.player.getCards('he');
                                        player.gain(event.togain, trigger.player, 'giveAuto');
                                    } else {
                                        player.recover();
                                    }
                                }
                            },
                        },
                        gbxj_lingren_jianxiong: {
                            audio: 'ext:果包/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') {
                                    player.gain(trigger.cards, 'gain2');
                                }
                                player.draw('nodelay');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) {
                                            return [1, -1];
                                        }
                                        if (get.tag(card, 'damage') && player != target) {
                                            return [1, 0.6];
                                        }
                                    },
                                },
                            },
                        },
                        gbxj_fujian: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return !game.hasPlayer(function (current) {
                                    return current.countCards('h') == 0;
                                });
                            },
                            forced: true,
                            content() {
                                event.num = 0;
                                var list = game.filterPlayer(function (target) {
                                    if (target.isMinHandcard()) {
                                        event.num = target.countCards('h');
                                    }
                                    return player != target;
                                });
                                if (event.num < 1) {
                                    event.finish();
                                } else {
                                    var target = list.randomGet();
                                    var cards = target.getCards('h').randomGets(event.num);
                                    player.line(target);
                                    var content = [get.translation(target) + '的部分手牌', cards];
                                    game.log(player, '观看了', target, '的部分手牌');
                                    player.chooseControl('ok').set('dialog', content);
                                }
                                if (player.storage.cy_wucan > 0) {
                                    player.addMark('guo_lingren');
                                    player.removeMark('cy_wucan');
                                    if (player.storage.cy_wucan >= 0 && player.storage.cy_wucan <= 3) {
                                        if (!player.storage.gbxjjycaoying || player.storage.gbxjjycaoying == undefined) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_caoying' + (player.storage.cy_wucan === 0 ? '' : player.storage.cy_wucan) + '.jpg');
                                        } else {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gbxj_jycaoying' + (player.storage.cy_wucan === 0 ? '' : player.storage.cy_wucan) + '.jpg');
                                        }
                                    }
                                }
                            },
                        },
                        gbxj_huawu: {
                            audio: 'ext:果包/audio:1',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('guo_lingren') > 1;
                            },
                            content() {
                                'step 0';
                                player.removeMark('guo_lingren', 2);
                                ('step 1');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'wei') {
                                            list.push(name);
                                        }
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
                                for (var i of players) {
                                    list.remove(i.name);
                                    list.remove(i.name1);
                                    list.remove(i.name2);
                                }
                                list = list.randomGets(3);
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
                                        }),
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
                                        skills: skills.randomGets(1),
                                    };
                                    if (event.dialog) {
                                        event.dialog.close();
                                    }
                                    if (event.control) {
                                        event.control.close();
                                    }
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) {
                                        event._result = {};
                                    }
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获得至多一个技能直到下回合出牌阶段开始', [list, 'character'], 'hidden');
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
                                            if (_status.dragged) {
                                                return;
                                            }
                                            if (_status.justdragged) {
                                                return;
                                            }
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 1) {
                                                    return;
                                                }
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
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) {
                                        player.addTempSkill(i, { player: 'phaseUseBegin' });
                                    }
                                }
                            },
                        },
                        re_xianzhou: {
                            audio: 'ext:果包/audio:2',
                            usable: 1,
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            filterCard: true,
                            position: 'e',
                            selectCard: -1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                target.gain(cards, player, 'give');
                                player.recover(cards.length);
                                ('step 1');
                                var list = game.filterPlayer(function (current) {
                                    return target.inRange(current);
                                });
                                if (list.length) {
                                    var max = Math.min(list.length, cards.length);
                                    target
                                        .chooseTarget(true, [1, max], '对至多' + get.cnNumber(max) + '名范围内的角色各造成1点伤害', function (card, player, target) {
                                            return _status.event.list.includes(target);
                                        })
                                        .set('list', list)
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.damageEffect(target, player, player);
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    var targets = result.targets.sortBySeat();
                                    player.line(targets, 'green');
                                    for (var i of targets) {
                                        i.damage('nocard');
                                    }
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target: 1,
                                    player(player) {
                                        var bool = true,
                                            players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i != player && get.attitude(player, i) > 2 && get.attitude(i, player) > 2) {
                                                bool = false;
                                                break;
                                            }
                                        }
                                        if (bool) {
                                            return -10;
                                        }
                                        if (player.hp == 1) {
                                            return 1;
                                        }
                                        if (game.phaseNumber < game.players.length) {
                                            return -10;
                                        }
                                        if (player.countCards('e') + player.hp <= player.maxHp) {
                                            return 1;
                                        }
                                        return -10;
                                    },
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
                        re_yinqin: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('爆衣_guo') >= 1;
                            },
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                var list = [];
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cfr.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cfr1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cfr2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cfr3.jpg');
                                }
                                ('step 1');
                                player.say('妾身还想要嘛～');
                                player.draw(2);
                            },
                        },
                        re_qieting: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var target = event.player;
                                if (player == target) {
                                    return false;
                                }
                                if (!target.getHistory('sourceDamage').length) {
                                    var cards = target.getCards('e');
                                    for (var i of cards) {
                                        if (player.isEmpty(get.subtype(i))) {
                                            return true;
                                        }
                                    }
                                }
                                return (
                                    target.getHistory('useCard', function (evt) {
                                        return (
                                            evt.targets &&
                                            evt.targets.filter(function (i) {
                                                return i != target;
                                            }).length
                                        );
                                    }).length == 0
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var target = trigger.player;
                                event.target = target;
                                var list = [];
                                if (!target.getHistory('sourceDamage').length) {
                                    var cards = target.getCards('e');
                                    for (var i of cards) {
                                        if (player.isEmpty(get.subtype(i))) {
                                            list.push(i);
                                        }
                                    }
                                }
                                if (list.length) {
                                    player
                                        .choosePlayerCard(target, 'e', get.prompt('reqieting', target))
                                        .set('list', list)
                                        .set('filterButton', function (button) {
                                            return _status.event.list.includes(button.link);
                                        })
                                        .set('ai', function (button) {
                                            var evt = _status.event,
                                                val = get.value(button.link);
                                            if (evt.target.hasSkillTag('noe')) {
                                                val -= 4;
                                            }
                                            if (evt.att > 0 == val > 0) {
                                                return 0;
                                            }
                                            return get.effect(evt.player, button.link, evt.player, evt.player);
                                        })
                                        .set('att', get.attitude(player, target));
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.links?.length) {
                                    var card = result.links[0];
                                    target.$give(card, player, false);
                                    player.equip(card);
                                }
                                if (
                                    target.getHistory('useCard', function (evt) {
                                        return (
                                            evt.targets &&
                                            evt.targets.filter(function (i) {
                                                return i != target;
                                            }).length
                                        );
                                    }).length != 0
                                ) {
                                    event.finish();
                                }
                                ('step 2');
                                player.chooseBool('是否发动【窃听】摸一张牌？').set('frequentSkill', 'reqieting');
                                ('step 3');
                                if (result.bool) {
                                    player.draw();
                                }
                            },
                        },
                        luo_xiaoji: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.es && evt.es.length;
                            },
                            content() {
                                'step 1';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 2');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx4.jpg');
                                }
                                ('step 3');
                                event.count = trigger.getl(player).es.length;
                                ('step 4');
                                event.count--;
                                player.draw(2);
                                ('step 5');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('xiaoji')).set('frequentSkill', 'xiaoji').ai = lib.filter.all;
                                }
                                ('step 6');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                        },
                        luo_jieyin: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard: 1,
                            check(card) {
                                var player = get.owner(card);
                                if (player.countCards('h') > player.hp) {
                                    return 8 - get.value(card);
                                }
                                if (player.hp < player.maxHp) {
                                    return 6 - get.value(card);
                                }
                                return 4 - get.value(card);
                            },
                            filter(event, player) {
                                return player.countMark('爆衣_guo') < 5;
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) {
                                    return false;
                                }
                                if (target == player) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx4.jpg');
                                }
                                ('step 2');
                                player.say('得遇夫君,妾身之幸～');
                                player.draw();
                                ('step 3');
                                player.recover();
                                target.recover();
                            },
                            ai: {
                                order: 5.5,
                                result: {
                                    player(player) {
                                        if (player.hp < player.maxHp) {
                                            return 4;
                                        }
                                        if (player.countCards('h') > player.hp) {
                                            return 0;
                                        }
                                        return -1;
                                    },
                                    target: 4,
                                },
                                threaten: 2,
                            },
                        },
                        luo_baoyi: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                var list = [];
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx4.jpg');
                                }
                            },
                        },
                        guo_liangzhu: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                global: 'recoverAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('爆衣_guo') <= 5;
                            },
                            content() {
                                'step 0';
                                if (player == trigger.player) {
                                    player
                                        .chooseControl('摸两张', '摸四张', 'cancel2', function () {
                                            return '摸四张';
                                        })
                                        .set('prompt', get.prompt2('liangzhu'));
                                    event.single = true;
                                } else {
                                    player
                                        .chooseTarget(get.prompt2('liangzhu'), function (card, player, target) {
                                            return target == _status.event.player || target == _status.event.target;
                                        })
                                        .set('target', trigger.player)
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (player == target) {
                                                return 1;
                                            }
                                            return get.attitude(player, target) - 1.5;
                                        });
                                }
                                ('step 1');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 2');
                                var list = [];
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx4.jpg');
                                }
                                if (player.storage.爆衣_guo == 5) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx5.jpg');
                                }
                                ('step 3');
                                player.say('妾身助夫君一臂之力～');
                                ('step 4');
                                if (event.single) {
                                    if (result.control != 'cancel2') {
                                        if (result.control == '摸两张') {
                                            player.draw(2);
                                        } else {
                                            player.draw(4);
                                            if (!player.storage.liangzhu) {
                                                player.storage.liangzhu = [];
                                            }
                                            player.storage.liangzhu.add(player);
                                        }
                                    }
                                } else if (result.targets?.length) {
                                    var target = result.targets[0];
                                    if (target == player) {
                                        target.draw(2);
                                    } else {
                                        target.draw(4);
                                        if (target.storage.liangzhu) {
                                            target.storage.liangzhu.add(player);
                                        } else {
                                            target.storage.liangzhu = [player];
                                        }
                                    }
                                }
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        spxx_baoyi: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                var list = [];
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx4.jpg');
                                }
                                if (player.storage.爆衣_guo == 5) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx5.jpg');
                                }
                                game.playAudio('../extension/果包/audio/wu4.mp3');
                            },
                        },
                        guo_zhenlie: {
                            audio: 'ext:果包/audio:2',
                            filter(event, player) {
                                return event.player != player && event.card;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                let evt = event.parent;
                                if (evt.excluded.includes(player)) {
                                    return false;
                                }
                                if (event.player.isFriendsOf(player)) {
                                    return false;
                                }
                                if (get.effect(player, event.card, event.player, player) > 0) {
                                    return false;
                                }
                                if ((evt.nowuxie && get.type(event.card) == 'trick') || (evt.directHit && evt.directHit.includes(player)) || (evt.customArgs && evt.customArgs.default && evt.customArgs.default.directHit2)) {
                                    return true;
                                }
                                if (get.tag(event.card, 'respondSha') && player.hasCard((c) => c.name == 'sha', 'h')) {
                                    return false;
                                } else if (get.tag(event.card, 'respondShan') && player.hasCard((c) => c.name == 'shan', 'h')) {
                                    return false;
                                }
                                return true;
                            },
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo > 1) {
                                    player.loseHp();
                                }
                                ('step 1');
                                var list = [];
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy4.jpg');
                                }
                                if (player.storage.爆衣_guo == 5) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy5.jpg');
                                }
                                ('step 2');
                                player.say('夫君,对不起,我已经～');
                                player.draw();
                                ('step 3');
                                trigger.parent.excluded.add(player);
                                ('step 4');
                                if (trigger.player.countCards('he')) {
                                    player.discardPlayerCard(trigger.player, 'he', true);
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        guo_miji: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: ['phaseJieshuBegin', 'phaseZhunbeiBegin'],
                            },
                            filter(event, player) {
                                return player.hp <= player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy4.jpg');
                                }
                                if (player.storage.爆衣_guo == 5) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy5.jpg');
                                }
                                ('step 2');
                                event.num = player.getDamagedHp();
                                player.draw(event.num + 1);
                                ('step 3');
                                var check = player.countCards('h') - event.num;
                                player
                                    .chooseCardTarget({
                                        selectCard: event.num,
                                        filterTarget(card, player, target) {
                                            return player != target;
                                        },
                                        ai1(card) {
                                            var player = _status.event.player;
                                            if (player.maxHp - player.hp == 1 && card.name == 'du') {
                                                return 30;
                                            }
                                            var check = _status.event.check;
                                            if (check < 1) {
                                                return 0;
                                            }
                                            if (player.hp > 1 && check < 2) {
                                                return 0;
                                            }
                                            return get.unuseful(card) + 9;
                                        },
                                        ai2(target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (ui.selected.cards.length == 1 && ui.selected.cards[0].name == 'du') {
                                                return 1 - att;
                                            }
                                            return att - 2;
                                        },
                                        prompt: '将' + get.cnNumber(event.num) + '张手牌交给一名其他角色',
                                    })
                                    .set('check', check);
                                ('step 4');
                                if (result.targets?.length) {
                                    result.targets[0].gain(result.cards, event.player, 'giveAuto');
                                    player.line(result.targets, 'green');
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) {
                                        return 3;
                                    }
                                    if (target.hp == 2) {
                                        return 1.5;
                                    }
                                    return 0.5;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) {
                                            return [0, 0];
                                        }
                                    },
                                },
                            },
                        },
                        duo: {
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy4.jpg');
                                }
                                if (player.storage.爆衣_guo == 5) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wy5.jpg');
                                }
                                game.playAudio('../extension/果包/audio/wu2.mp3');
                            },
                        },
                        guo_linglong: {
                            audio: 'ext:果包/audio:2',
                            group: 'linglong_bagua',
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && !player.getEquip(1)) {
                                        return num + 1;
                                    }
                                },
                                maxHandcard(player, num) {
                                    if (player.getEquip(3) || player.getEquip(4) || player.getEquip(6)) {
                                        return;
                                    }
                                    return num + 1;
                                },
                                targetInRange(card, player, target, now) {
                                    if (player.getEquip(5)) {
                                        return;
                                    }
                                    var type = get.type(card);
                                    if (type == 'trick' || type == 'delay') {
                                        return true;
                                    }
                                },
                                canBeDiscarded(card, source, player) {
                                    if (player.getEquip(5)) {
                                        return;
                                    }
                                    if (get.position(card) == 'e' && ['equip2', 'equip5'].includes(get.subtype(card))) {
                                        return false;
                                    }
                                },
                            },
                        },
                        luo_jiqiao: {
                            usable: 2,
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.target == player;
                            }, //QQQ
                            //每回合限两次,当你使用牌指定自己为目标时,你可以脱一件衣服获得一点护甲,若护甲值大于五则改为摸一张牌
                            content() {
                                'step 1';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 2');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/hyy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/hyy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/hyy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/hyy4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/hyy4.jpg');
                                }
                                ('step 3');
                                player.say('我好寂寞,亮～');
                                ('step 4');
                                if (player.hujia < 5) {
                                    player.changeHujia();
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        luo_jizhi: {
                            audio: 'ext:果包/audio:2',
                            audioname: ['lukang'],
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            init(player) {
                                player.storage.rejizhi = 0;
                            },
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                player.draw();
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/hyy.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/hyy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/hyy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/hyy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/hyy4.jpg');
                                }
                                ('step 2');
                                event.card = result.cards[0];
                                if (get.type(event.card) == 'basic') {
                                    player
                                        .chooseBool('是否弃置' + get.translation(event.card) + '并令本回合手牌上限+1？')
                                        .set('ai', function (evt, player) {
                                            return _status.currentPhase == player && player.needsToDiscard(-3) && _status.event.value < 6;
                                        })
                                        .set('value', get.value(event.card, player));
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.discard(event.card);
                                    player.storage.rejizhi++;
                                    if (_status.currentPhase == player) {
                                        player.markSkill('rejizhi');
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.rejizhi;
                                },
                            },
                            intro: {
                                content: '本回合手牌上限+#',
                            },
                            group: 'rejizhi_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        player.storage.rejizhi = 0;
                                        player.unmarkSkill('rejizhi');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        luo_shenxian: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                global: 'loseAfter',
                            },
                            filter(event, player) {
                                if (event.type != 'discard' || event.player == player || _status.currentPhase == player) {
                                    return false;
                                }
                                if (player.hasSkill('shenxian2')) {
                                    return false;
                                }
                                for (var i = 0; i < event.cards2.length; i++) {
                                    if (get.type(event.cards2[i], null, event.hs.includes(event.cards2[i]) ? event.player : false) == 'basic') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.delay == false) {
                                    game.delay();
                                }
                                ('step 1');
                                var num = player.maxHp - player.hp;
                                player.draw(1, event.num);
                                if (event.name == 'shenxian') {
                                    player.addTempSkill('shenxian2');
                                }
                                ('step 2');
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 3');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc4.jpg');
                                }
                                player.say('妾身会让夫君舒服的～');
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        luo_qiangwu: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('爆衣_guo') <= 4;
                            },
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc4.jpg');
                                }
                                ('step 2');
                                player.judge();
                                ('step 3');
                                player.storage.qiangwu = result.number;
                                player.addTempSkill('qiangwu3', 'phaseUseEnd');
                                ('step 4');
                                var num = player.maxHp + player.hp;
                                player.drawTo(num);
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                                order: 11,
                            },
                        },
                        xc: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                var list = [];
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zxc4.jpg');
                                }
                                game.playAudio('../extension/果包/audio/wu2.mp3');
                            },
                        },
                        dq_zhuyuan: {
                            usable: 1,
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('爆衣_guo') <= 4;
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq4.jpg');
                                }
                                player.say('伯符不在身边～');
                                game.playAudio('../extension/果包/audio/wu1.mp3');
                                ('step 2');
                                var num = target.maxHp - target.hp;
                                target.draw(num);
                                target.recover();
                                ('step 3');
                                if (player.countCards('h') >= player.maxHp) {
                                    player.addTempSkill('jiang', { player: 'phaseBefore' });
                                }
                            },
                        },
                        dq_guose: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            discard: false,
                            lose: false,
                            delay: false,
                            filter(event, player) {
                                return player.countCards('hes', { suit: 'diamond' }) > 0;
                            },
                            position: 'hes',
                            filterCard: {
                                suit: 'diamond',
                            },
                            filterTarget(card, player, target) {
                                if (get.position(ui.selected.cards[0]) != 's' && lib.filter.cardDiscardable(ui.selected.cards[0], player, 'reguose') && target.hasJudge('lebu')) {
                                    return true;
                                }
                                if (player == target) {
                                    return false;
                                }
                                if (!game.checkMod(ui.selected.cards[0], player, 'unchanged', 'cardEnabled2', player)) {
                                    return false;
                                }
                                return player.canUse({ name: 'lebu', cards: ui.selected.cards }, target);
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (target.hasJudge('lebu')) {
                                    player.discard(cards);
                                    target.discard(target.getJudge('lebu'));
                                } else {
                                    player.useCard({ name: 'lebu' }, target, cards).audio = false;
                                }
                                player.draw();
                                ('step 1');
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 2');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq4.jpg');
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('lebu')) {
                                            return -get.effect(target, { name: 'lebu' }, player, target);
                                        }
                                        return get.effect(target, { name: 'lebu' }, player, target);
                                    },
                                },
                                order: 9,
                            },
                        },
                        dq_liuli: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            preHidden: true,
                            filter(event, player) {
                                if (player.countMark('爆衣_guo') >= 5) {
                                    return false;
                                }
                                if (event.card.name != 'sha') {
                                    return false;
                                }
                                if (player.countCards('he') == 0) {
                                    return false;
                                }
                                return game.hasPlayer(function (current) {
                                    return player.inRange(current) && current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current);
                                });
                            },
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dq4.jpg');
                                }
                                player.draw();
                                ('step 2');
                                var next = player
                                    .chooseCardTarget({
                                        position: 'he',
                                        filterCard: lib.filter.cardDiscardable,
                                        filterTarget(card, player, target) {
                                            var trigger = _status.event;
                                            if (player.inRange(target) && target != trigger.source) {
                                                if (lib.filter.targetEnabled(trigger.card, trigger.source, target)) {
                                                    return true;
                                                }
                                            }
                                            return false;
                                        },
                                        ai1(card) {
                                            return get.unuseful(card) + 9;
                                        },
                                        ai2(target) {
                                            if (_status.event.player.countCards('h', 'shan')) {
                                                return -get.attitude(_status.event.player, target);
                                            }
                                            if (get.attitude(_status.event.player, target) < 5) {
                                                return 6 - get.attitude(_status.event.player, target);
                                            }
                                            if (_status.event.player.hp == 1 && player.countCards('h', 'shan') == 0) {
                                                return 10 - get.attitude(_status.event.player, target);
                                            }
                                            if (_status.event.player.hp == 2 && player.countCards('h', 'shan') == 0) {
                                                return 8 - get.attitude(_status.event.player, target);
                                            }
                                            return -1;
                                        },
                                        prompt: get.prompt('liuli'),
                                        prompt2: '弃置一张牌,将此【杀】转移给攻击范围内的一名其他角色',
                                        source: trigger.player,
                                        card: trigger.card,
                                    })
                                    .setHiddenSkill(event.name);
                                ('step 3');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.discard(result.cards);
                                    var evt = trigger.parent;
                                    evt.triggeredTargets2.remove(player);
                                    evt.targets.remove(player);
                                    evt.targets.push(target);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (target.countCards('he') == 0) {
                                            return;
                                        }
                                        if (card.name != 'sha') {
                                            return;
                                        }
                                        var min = 1;
                                        var friend = get.attitude(player, target) > 0;
                                        var vcard = { name: 'shacopy', nature: card.nature, suit: card.suit };
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            if (player != i && get.attitude(target, i) < 0 && target.canUse(card, i)) {
                                                if (!friend) {
                                                    return 0;
                                                }
                                                if (get.effect(i, vcard, player, player) > 0) {
                                                    if (!player.canUse(card, players[0])) {
                                                        return [0, 0.1];
                                                    }
                                                    min = 0;
                                                }
                                            }
                                        }
                                        return min;
                                    },
                                },
                            },
                        },
                        xq_tongque: {
                            usable: 1,
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                if (target.hp > target.maxHp) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo', player.countMark('爆衣_guo'));
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xq.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xq1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xq2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xq3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xq4.jpg');
                                }
                                game.playAudio('../extension/果包/audio/wu1.mp3');
                                ('step 2');
                                target.addTempSkill('rejianxiong', { player: 'phaseBefore' });
                                ('step 3');
                                target.damage(1, 'fire');
                                player.link();
                            },
                        },
                        xq_tianxiang: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            preHidden: true,
                            filter(event, player) {
                                return (
                                    player.countCards('h', function (card) {
                                        return _status.connectMode || card.suit == 'heart';
                                    }) > 0 && event.num > 0
                                );
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCardTarget({
                                        filterCard(card, player) {
                                            return card.suit == 'heart' && lib.filter.cardDiscardable(card, player);
                                        },
                                        filterTarget(card, player, target) {
                                            return player != target;
                                        },
                                        ai1(card) {
                                            return 10 - get.value(card);
                                        },
                                        ai2(target) {
                                            var att = get.attitude(_status.event.player, target);
                                            var trigger = _status.event.getTrigger();
                                            var da = 0;
                                            if (_status.event.player.hp == 1) {
                                                da = 10;
                                            }
                                            var eff = get.damageEffect(target, trigger.source, target);
                                            if (att == 0) {
                                                return 0.1 + da;
                                            }
                                            if (eff >= 0 && att > 0) {
                                                return att + da;
                                            }
                                            if (att > 0 && target.hp > 1) {
                                                if (target.maxHp - target.hp >= 3) {
                                                    return att * 1.1 + da;
                                                }
                                                if (target.maxHp - target.hp >= 2) {
                                                    return att * 0.9 + da;
                                                }
                                            }
                                            return -att + da;
                                        },
                                        prompt: get.prompt('retianxiang'),
                                        prompt2: lib.translate.retianxiang_info,
                                    })
                                    .setHiddenSkill(event.name);
                                ('step 1');
                                if (result.cards?.length) {
                                    player.discard(result.cards);
                                    var target = result.targets[0];
                                    player
                                        .chooseControlList(
                                            true,
                                            function (event, player) {
                                                var target = _status.event.target;
                                                var att = get.attitude(player, target);
                                                if (target.hasSkillTag('maihp')) {
                                                    att = -att;
                                                }
                                                if (att > 0) {
                                                    return 0;
                                                } else {
                                                    return 1;
                                                }
                                            },
                                            ['令' + get.translation(target) + '受到伤害来源对其造成的1点伤害,摸X张牌(X为其已损失体力值且至多为5)', '令' + get.translation(target) + '失去1点体力,获得' + get.translation(result.cards)],
                                        )
                                        .set('target', target);
                                    trigger.cancel();
                                    event.target = target;
                                    event.card = result.cards[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (typeof result.index == 'number') {
                                    event.index = result.index;
                                    if (result.index) {
                                        event.related = event.target.loseHp();
                                    } else {
                                        event.related = event.target.damage(trigger.source || 'nosource', 'nocard');
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                //if(event.related.cancelled||target.isDead()) return;
                                if (event.index && card.isInPile()) {
                                    target.gain(card, 'gain2');
                                } else if (target.getDamagedHp()) {
                                    target.draw(Math.min(5, target.getDamagedHp()));
                                }
                                ('step 4');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 5');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xq1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xq2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xq3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xq4.jpg');
                                }
                                player.say('公瑾大人,孟德大人真的很厉害～');
                                game.playAudio('../extension/果包/audio/wu1.mp3');
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) {
                                            return;
                                        }
                                        if (get.tag(card, 'damage') && target.countCards('he') > 1) {
                                            return 0.7;
                                        }
                                    },
                                },
                            },
                        },
                        xq_hongyan: {
                            audio: 'ext:果包/audio:2',
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'spade') {
                                        return 'heart';
                                    }
                                },
                            },
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.fixedResult && event.fixedResult.suit) {
                                    return event.fixedResult.suit == 'heart';
                                }
                                return event.player.judging[0].suit == 'heart';
                            },
                            content() {
                                'step 0';
                                var str = '红颜:' + get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',请将其改为一种花色';
                                player
                                    .chooseControl('spade', 'heart', 'diamond', 'club')
                                    .set('prompt', str)
                                    .set('ai', function () {
                                        var judging = _status.event.judging;
                                        var trigger = _status.event.getTrigger();
                                        var res1 = trigger.judge(judging);
                                        var list = lib.suit.slice(0);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0) {
                                            return 0;
                                        }
                                        var getj = function (suit) {
                                            return trigger.judge({
                                                name: judging.name,
                                                nature: get.nature(judging),
                                                suit: suit,
                                                number: judging.number,
                                            });
                                        };
                                        list.sort(function (a, b) {
                                            return (getj(b) - getj(a)) * get.sgn(attitude);
                                        });
                                        return list[0];
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    player.addExpose(0.25);
                                    player.popup(result.control);
                                    game.log(player, '将判定结果改为了', '#y' + get.translation(result.control + 2));
                                    if (!trigger.fixedResult) {
                                        trigger.fixedResult = {};
                                    }
                                    trigger.fixedResult.suit = result.control;
                                    trigger.fixedResult.color = get.color({ suit: result.control });
                                }
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 0.4,
                                },
                                expose: 0.5,
                            },
                        },
                        myl_fengpo: {
                            shaRelated: true,
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || event.card.name == 'sha')) {
                                    return false;
                                }
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl4.jpg');
                                }
                                player.say('我会轻点的～');
                                ('step 2');
                                var target = trigger.target;
                                event.target = target;
                                player.viewHandcards(target);
                                ('step 3');
                                player.chooseControl('draw_card', '加伤害', 'cancel2').set('prompt', get.prompt2('fengpo'));
                                ('step 4');
                                if (result.control && result.control != 'cancel2') {
                                    var nd = trigger.target.countCards('h', { suit: 'diamond' });
                                    if (result.control == 'draw_card') {
                                        player.draw(nd + 1);
                                    } else {
                                        var trigger2 = trigger.parent;
                                        if (typeof trigger2.baseDamage != 'number') {
                                            trigger2.baseDamage = 1;
                                        }
                                        trigger2.baseDamage += nd;
                                    }
                                }
                            },
                        },
                        myl_mashu: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        myl_fengwu: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (player.getStat('skill').myl_fengwu || 0) < player.hp && player.countMark('爆衣_guo') > 0;
                            },
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl4.jpg');
                                }
                                ('step 3');
                                player.draw();
                                player.getStat().card.sha--;
                            },
                        },
                        luo_myl: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                var list = [];
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl4.jpg');
                                }
                                game.playAudio('../extension/果包/audio/wu4.mp3');
                            },
                        },
                        spxx_gongqing: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('爆衣_guo') > 3;
                            },
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx4.jpg');
                                }
                                if (player.storage.爆衣_guo == 5) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spxx5.jpg');
                                }
                                ('step 2');
                                var card = get.discardPile(function (card) {
                                    return card.name == 'taoyuan';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                                ('step 3');
                                player.phase('nodelay');
                            },
                        },
                        luo_beige: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.source && event.player.classList.contains('dead') == false && player.countCards('he');
                            },
                            checkx(event, player) {
                                var att1 = get.attitude(player, event.player);
                                var att2 = get.attitude(player, event.source);
                                return att1 > 0 && att2 <= 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he', get.prompt2('rebeige', trigger.player));
                                var check = lib.skill.beige.checkx(trigger, player);
                                next.set('ai', function (card) {
                                    if (_status.event.goon) {
                                        return 8 - get.value(card);
                                    }
                                    return 0;
                                });
                                next.set('goon', check);
                                ('step 1');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 2');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cwj1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cwj2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cwj3.jpg');
                                }
                                if (player.storage.爆衣_guo > 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cwj3.jpg');
                                }
                                game.playAudio('../extension/果包/audio/wu1.mp3');
                                ('step 3');
                                if (result.bool) {
                                    trigger.player.judge();
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                switch (result.suit) {
                                    case 'heart':
                                        trigger.player.recover(trigger.num);
                                        break;
                                    case 'diamond':
                                        trigger.player.draw(3);
                                        break;
                                    case 'club':
                                        trigger.source.chooseToDiscard('he', 3, true);
                                        break;
                                    case 'spade':
                                        trigger.source.turnOver();
                                        break;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        luo_duanchang: {
                            audio: 'ext:果包/audio:2',
                            audioname: ['re_caiwenji'],
                            forbid: ['boss'],
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            forceDie: true,
                            filter(event, player) {
                                return event.source && event.source.isIn();
                            },
                            content() {
                                trigger.source.clearSkills();
                            },
                            logTarget: 'source',
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) {
                                        return 0.2;
                                    }
                                    return 1.5;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.hasFriend()) {
                                            return;
                                        }
                                        if (target.hp <= 1 && get.tag(card, 'damage')) {
                                            return [1, 0, 0, -2];
                                        }
                                    },
                                },
                            },
                        },
                        luo_moshi: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    player.getHistory('useCard', function (evt) {
                                        return evt.isPhaseUsing() && ['basic', 'trick'].includes(get.type(evt.card));
                                    }).length && player.countCards('hs') > 0
                                );
                            },
                            content() {
                                'step 0';
                                event.count = 2;
                                event.history = player.getHistory('useCard', function (evt) {
                                    return evt.isPhaseUsing() && ['basic', 'trick'].includes(get.type(evt.card));
                                });
                                ('step 1');
                                event._result = {};
                                if (event.count && event.history.length && player.countCards('hs')) {
                                    event.count--;
                                    var card = event.history.shift().card;
                                    card = { name: card.name, nature: card.nature };
                                    if (card.name != 'jiu' && lib.filter.cardEnabled(card)) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return player.canUse(card, current);
                                            })
                                        ) {
                                            lib.skill.luo_moshi.viewAs = card;
                                            var next = player.chooseToUse();
                                            next.set('openskilldialog', '默识:将一张手牌当' + get.translation(card) + '使用');
                                            next.set('norestore', true);
                                            next.set('_backupevent', 'luo_moshi');
                                            next.set('custom', {
                                                add: {},
                                                replace: { window() { } },
                                            });
                                            next.backup('luo_moshi');
                                        }
                                    }
                                }
                                ('step 2');
                                if (result && result.bool) {
                                    event.goto(1);
                                }
                                ('step 3');
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 4');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cwj.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cwj1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cwj2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cwj3.jpg');
                                }
                                if (player.storage.爆衣_guo > 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cwj3.jpg');
                                }
                                player.say('孟德大人,臣妾好想你～');
                                player.chooseDrawRecover(2);
                            },
                        },
                        llq_guowu: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            preHidden: true,
                            content() {
                                'step 0';
                                var hs = player.getCards('h');
                                player.showCards(hs, get.translation(player) + '发动了【帼舞】');
                                var list = [];
                                for (var i of hs) {
                                    list.add(get.type2(i, player));
                                    if (list.length >= 3) {
                                        break;
                                    }
                                }
                                if (list.length >= 1) {
                                    var card = get.discardPile(function (i) {
                                        return i.name == 'sha';
                                    });
                                    if (card) {
                                        player.gain(card, 'gain2');
                                    }
                                }
                                if (list.length >= 2) {
                                    player.addTempSkill('guowu_dist', 'phaseUseAfter');
                                }
                                if (list.length >= 3) {
                                    player.addTempSkill('guowu_add', 'phaseUseAfter');
                                }
                                ('step 1');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 2');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq4.jpg');
                                }
                            },
                            subSkill: {
                                dist: {
                                    charlotte: true,
                                    mod: {
                                        targetInRange: () => true,
                                    },
                                },
                                add: {
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var info = get.info(event.card, false);
                                        if (info.allowMultiple == false) {
                                            return false;
                                        }
                                        if (event.card.name != 'sha' && info.type != 'trick') {
                                            return false;
                                        }
                                        if (event.targets && !info.multitarget) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
                                                })
                                            ) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var num = game.countPlayer(function (current) {
                                            return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current) && lib.filter.targetInRange(trigger.card, player, current);
                                        });
                                        player
                                            .chooseTarget('帼舞:是否为' + get.translation(trigger.card) + '增加' + (num > 1 ? '至多两个' : '一个') + '目标？', [1, Math.min(2, num)], function (card, player, target) {
                                                var trigger = _status.event.getTrigger();
                                                var card = trigger.card;
                                                return !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target);
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                var card = _status.event.getTrigger().card;
                                                return get.effect(target, card, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            if (player != game.me && !player.isOnline()) {
                                                game.delayx();
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        var targets = result.targets.sortBySeat();
                                        trigger.targets.addArray(targets);
                                        if (get.mode() == 'guozhan') {
                                            player.removeSkill('guowu_add');
                                        }
                                    },
                                },
                            },
                        },
                        llq_zhuangrong: {
                            audio: 'ext:果包/audio:2',
                            derivation: ['llqshenwei', 'wushuang', 'llq_liyu', 'llq_baoyi2'],
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.hp == 2 || player.countCards('h') == 1;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('llq_zhuangrong');
                                player.gainMaxHp();
                                player.draw(player.countMark('爆衣_guo'));
                                ('step 1');
                                player.removeMark('爆衣_guo', player.countMark('爆衣_guo'));
                                player.unmarkSkill('爆衣_guo');
                                ('step 2');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq4.jpg');
                                }
                                if (player.maxHp > player.hp) {
                                    player.hp = player.maxHp;
                                }
                                ('step 3');
                                player.addSkill('llqshenwei');
                                player.addSkill('wushuang');
                                player.addSkill('llq_liyu');
                                player.removeSkill('llq_baoyi1');
                                player.addSkill('llq_baoyi2');
                            },
                        },
                        llq_baoyi1: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                var list = [];
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq4.jpg');
                                }
                                player.draw();
                                game.playAudio('../extension/果包/audio/wu3.mp3');
                            },
                        },
                        llq_baoyi2: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                var list = [];
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/llq4.jpg');
                                }
                                game.playAudio('../extension/果包/audio/wu3.mp3');
                            },
                        },
                        llq_liyu: {
                            audio: 'liyu',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) {
                                    return false;
                                }
                                return event.card && event.card.name == 'sha' && event.player != player && event.player.isAlive() && event.player.countGainableCards(player, 'hej') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainPlayerCard(get.prompt('new_liyu', trigger.player), trigger.player, 'hej', 'visibleMove').set('ai', function (button) {
                                    if (get.attitude(player, trigger.player) > 0 && get.position(button.link) == 'j') {
                                        return 4 + get.value(button.link);
                                    }
                                    if (get.type(button.link) == 'equip') {
                                        if (
                                            get.attitude(player, trigger.player) > 0 &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse({ name: 'juedou' }, current) && current != trigger.player && get.effect(current, { name: 'juedou' }, player, player) > 2;
                                            })
                                        ) {
                                            return 5;
                                        } else if (
                                            game.hasPlayer(function (current) {
                                                return player.canUse({ name: 'juedou' }, current) && current != trigger.player && current != player && get.effect(current, { name: 'juedou' }, player, player) < 0;
                                            })
                                        ) {
                                            return 1;
                                        } else {
                                            return 4;
                                        }
                                    }
                                    return 3;
                                })('step 1');
                                if (result.cards?.length) {
                                    if (get.type(result.cards[0]) != 'equip') {
                                        trigger.player.draw();
                                        event.finish();
                                    } else {
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return current != player && current != trigger.player && player.canUse('juedou', current);
                                            })
                                        ) {
                                            event.finish();
                                            return;
                                        }
                                        trigger.player
                                            .chooseTarget(
                                                true,
                                                function (card, player, target) {
                                                    var evt = _status.event.parent;
                                                    return evt.player.canUse({ name: 'juedou' }, target) && target != _status.event.player;
                                                },
                                                '请选择一名角色,视为' + get.translation(player) + '对其使用【决斗】',
                                            )
                                            .set('ai', function (target) {
                                                var evt = _status.event.parent;
                                                return get.effect(target, { name: 'juedou' }, evt.player, _status.event.player) - 2;
                                            });
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    player.useCard({ name: 'juedou' }, result.targets[0], 'noai');
                                }
                            },
                            ai: {
                                halfneg: true,
                            },
                        },
                        cy_lingren: {
                            audio: 'ext:果包/audio:2',
                            usable: 1,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (get.tag(event.card, 'damage')) {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.count = 0;
                                player
                                    .chooseTarget(get.prompt('cy_lingren'), '选择一名目标角色并猜测其手牌构成', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return 2 - get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.targets || (event.targets && event.count < event.targets.length)) {
                                    if (!event.targets) {
                                        event.targets = result.targets;
                                    }
                                    var target = event.targets[event.count];
                                    event.target = target;
                                    event.choice = {
                                        basic: false,
                                        trick: false,
                                        equip: false,
                                    };
                                    var list = [];
                                    list.push(['', '', 'basic']);
                                    list.push(['', '', 'trick']);
                                    list.push(['', '', 'equip']);
                                    var choice = [];
                                    var rand1 = 0.95;
                                    if (!target.countCards('h', { type: ['basic'] })) {
                                        rand1 = 0.05;
                                    }
                                    if (!target.countCards('h')) {
                                        rand1 = 0;
                                    }
                                    if (Math.random() < rand1) {
                                        choice.add('basic');
                                    }
                                    var rand2 = 0.9;
                                    if (!target.countCards('h', { type: ['trick', 'delay'] })) {
                                        rand2 = 0.1;
                                    }
                                    if (!target.countCards('h')) {
                                        rand2 = 0;
                                    }
                                    if (Math.random() < rand2) {
                                        choice.add('trick');
                                    }
                                    var rand3 = 0.75;
                                    if (!target.countCards('h', { type: ['equip'] })) {
                                        rand3 = 0.25;
                                    }
                                    if (!target.countCards('h')) {
                                        rand3 = 0;
                                    }
                                    if (Math.random() < rand3) {
                                        choice.add('equip');
                                    }
                                    var dialog = ui.create.dialog('凌人', [list, 'vcard']);
                                    for (var i = 0; i < 3; i++) {
                                        var dd = document.querySelector('[data-card-name="' + list[i][2] + '"]');
                                        dd.style['background-size'] = '100% 100%';
                                        dd.setBackgroundImage('extension/果包/image/' + list[i][2] + '.jpg');
                                    }
                                    if (!event.isMine() && choice.length == 0) {
                                        event.goto(3);
                                    }
                                    player
                                        .chooseButton([0, 3], dialog)
                                        .set('ai', function (button) {
                                            var select = _status.event.button;
                                            if (select.length == 0) {
                                                return 0;
                                            }
                                            return select.includes(button.link[2]);
                                        })
                                        .set('button', choice);
                                } else {
                                    player.getStat('triggerSkill').cy_lingren--;
                                    event.finish();
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    for (var i of result.links) {
                                        event.choice[i[2]] = true;
                                    }
                                } else {
                                    player.getStat('triggerSkill').cy_lingren--;
                                    event.finish();
                                }
                                ('step 3');
                                var reality = {
                                    basic: false,
                                    trick: false,
                                    equip: false,
                                };
                                var he = event.targets[event.count].getCards('h');
                                for (var i = 0; i < he.length; i++) {
                                    reality[get.type(he[i], 'trick')] = true;
                                }
                                event.num = 0;
                                var tl = ['basic', 'trick', 'equip'];
                                for (var i = 0; i < tl.length; i++) {
                                    if (event.choice[tl[i]] == reality[tl[i]]) {
                                        event.num++;
                                    }
                                }
                                ('step 4');
                                player.popup('猜对' + get.cnNumber(event.num) + '项');
                                game.log(player, '猜对了' + get.cnNumber(event.num) + '项');
                                if (event.num > 0) {
                                    trigger.parent.baseDamage++;
                                }
                                if (event.num > 0) {
                                    player.draw();
                                    player.addMark('爆衣_guo');
                                    player.unmarkSkill('爆衣_guo');
                                    trigger.parent.baseDamage++;
                                }
                                if (event.num > 1) {
                                    player.draw();
                                    trigger.parent.directHit.add(trigger.target);
                                    player.addMark('爆衣_guo');
                                    player.unmarkSkill('爆衣_guo');
                                }
                                if (event.num > 2) {
                                    player.draw();
                                    player.addTempSkill('lingren_jianxiong', { player: 'phaseBegin' });
                                    player.addTempSkill('lingren_xingshang', { player: 'phaseBegin' });
                                    player.addMark('爆衣_guo');
                                    player.unmarkSkill('爆衣_guo');
                                }
                                ('step 6');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cy4.jpg');
                                }
                                player.say('将军这些把戏可难不倒我哦～');
                                game.playAudio('../extension/果包/audio/wu2.mp3');
                            },
                            ai: {
                                threaten: 2.4,
                            },
                        },
                        cy_fujian: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: ['phaseJieshuBegin', 'phaseZhunbeiBegin'],
                            },
                            filter(event, player) {
                                return !game.hasPlayer(function (current) {
                                    return current.countCards('h') == 0;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cy.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cy4.jpg');
                                }
                                ('step 2');
                                event.num = 0;
                                var list = game.filterPlayer(function (target) {
                                    if (target.isMinHandcard()) {
                                        event.num = target.countCards('h');
                                    }
                                    return player != target;
                                });
                                if (event.num < 1) {
                                    event.finish();
                                } else {
                                    var target = list.randomGet();
                                    var cards = target.getCards('h').randomGets(event.num);
                                    player.line(target);
                                    event.target = target;
                                    var content = [get.translation(target) + '的部分手牌,并选择是否对其造成一点伤害', cards];
                                    game.log(player, '观看了', target, '的部分手牌');
                                    player.chooseControl(['ok', 'cancel']).set('dialog', content);
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.target.damage();
                                }
                            },
                        },
                        yhy_hongyi: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                var num = Math.min(2, game.dead.length);
                                if (!num) {
                                    return 1;
                                }
                                if (num == 1) {
                                    return 7 - get.value(card);
                                }
                                return 5 - get.value(card);
                            },
                            position: 'he',
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy4.jpg');
                                }
                                player.say('礼教,已经不需要了呢～');
                                ('step 2');
                                player.addTempSkill('hongyi2', { player: 'phaseBeginStart' });
                                player.storage.hongyi2.add(target);
                                player.markSkill('hongyi2');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('lebu')) {
                                            return -0.5;
                                        }
                                        return -1 - target.countCards('h');
                                    },
                                },
                            },
                        },
                        yhy_caiyuan: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return !player.hasSkill('caiyuan_mark') && player.phaseNumber > 1;
                            },
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy4.jpg');
                                }
                                player.draw(2);
                            },
                            group: 'caiyuan_count',
                            subSkill: {
                                mark: {
                                    marktext: '媛',
                                    charlotte: true,
                                    intro: {
                                        content: '已扣减过体力',
                                    },
                                },
                                count: {
                                    trigger: {
                                        player: 'changeHp',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.num < 0 && !player.hasSkill('caiyuan_mark');
                                    },
                                    content() {
                                        'step 0';
                                        player.addMark('爆衣_guo');
                                        player.unmarkSkill('爆衣_guo');
                                        ('step 1');
                                        if (player.storage.爆衣_guo == 1) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yhy1.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 2) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yhy2.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 3) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yhy3.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yhy4.jpg');
                                        }
                                        player.addTempSkill('caiyuan_mark', { player: 'phaseAfter' });
                                        if (player.hasSkill('caiyuan')) {
                                            player.markSkill('caiyuan_mark');
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        zn_tianze: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            filter(event, player) {
                                return (
                                    player != event.player &&
                                    event.player.isIn() &&
                                    get.color(event.card) == 'black' &&
                                    event.player.hasHistory('lose', function (evt) {
                                        return evt && evt.hs.length && evt.parent == event;
                                    }) &&
                                    event.player.isPhaseUsing() &&
                                    !player.hasSkill('tianze_block')
                                );
                            },
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                player.addMark('天地_mark');
                                player.unmarkSkill('天地_mark');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn4.jpg');
                                }
                                player.say('父亲,我想你～');
                                ('step 2');
                                player.addTempSkill('tianze_block');
                                if (
                                    !player.hasCard(function (card) {
                                        if (_status.connectMode && get.position(card) == 'h') {
                                            return true;
                                        }
                                        return get.color(card, player) == 'black';
                                    }, 'he')
                                ) {
                                    event.finish();
                                } else {
                                    player
                                        .chooseToDiscard(
                                            'he',
                                            function (card, player) {
                                                return get.color(card, player) == 'black';
                                            },
                                            get.prompt('tianze', trigger.player),
                                            '弃置一张黑色牌并对其造成1点伤害',
                                        )
                                        .set('ai', function (card) {
                                            if (!_status.event.goon) {
                                                return 0;
                                            }
                                            return 8 - get.value(card);
                                        })
                                        .set('goon', get.damageEffect(trigger.player, player, player) > 0);
                                }
                                ('step 3');
                                if (result.bool) {
                                    trigger.player.damage();
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                player.draw();
                            },
                        },
                        天地: {
                            group: '天地_mark',
                            subSkill: {
                                mark: {
                                    marktext: '天则',
                                    mark: true,
                                    intro: {
                                        name: '天地',
                                    },
                                },
                            },
                        },
                        zn_difa: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'gainAfter',
                            },
                            filter(event, player) {
                                if (player != _status.currentPhase || event.parent.name != 'draw') {
                                    return false;
                                }
                                var hs = player.getCards('h');
                                if (!hs.length) {
                                    return false;
                                }
                                for (var i of event.cards) {
                                    if (hs.includes(i) && get.color(i, player) == 'red' && lib.filter.cardDiscardable(i, player, 'difa')) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            usable: 2,
                            check: () => false,
                            content() {
                                'step 0';
                                var hs = player.getCards('h'),
                                    cards = trigger.cards.filter(function (i) {
                                        return hs.includes(i) && get.color(i, player) == 'red' && lib.filter.cardDiscardable(i, player, 'difa');
                                    });
                                if (!cards.length) {
                                    event.finish();
                                } else {
                                    event.cards = cards;
                                    player.discard(cards);
                                }
                                ('step 1');
                                var list = lib.inpile.filter(function (i) {
                                    return get.type2(i, false) == 'trick';
                                });
                                if (!list.length) {
                                    event.finish();
                                } else {
                                    player.chooseButton(['选择获得一种锦囊牌', [list.map((i) => ['锦囊', '', i]), 'vcard']], true);
                                }
                                ('step 2');
                                var card = get.cardPile(function (i) {
                                    return i.name == result.links[0][2] && !event.cards.includes(i);
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                                ('step 3');
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 4');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn4.jpg');
                                }
                                game.playAudio('../extension/果包/wu3.mp3'); //QQQ
                            },
                        },
                        zn_fuling: {
                            audio: 'ext:果包/audio:2',
                            derivation: 'releiji',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.countMark('天地_mark') > 2;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('zn_fuling');
                                player.gainMaxHp();
                                ('step 1');
                                player.removeMark('爆衣_guo', player.countMark('爆衣_guo'));
                                player.unmarkSkill('爆衣_guo');
                                ('step 2');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zn4.jpg');
                                }
                                ('step 3');
                                player.addSkill('releiji');
                            },
                        },
                        yhy_ciwei: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                if (event.all_excluded || event.player == player || event.player != _status.currentPhase || !player.countCards('he')) {
                                    return false;
                                }
                                return event.player.getHistory('useCard').indexOf(event) == 1 && ['basic', 'trick'].includes(get.type(event.card));
                            },
                            content() {
                                'step 0';
                                if (player != game.me && !player.isOnline()) {
                                    game.delayx();
                                }
                                player
                                    .chooseToDiscard(get.prompt('ciwei', trigger.player), '弃置一张牌,取消' + get.translation(trigger.card) + '的所有目标', 'he')
                                    .set('ai', function (card) {
                                        return _status.event.goon / 1.4 - get.value(card);
                                    })
                                    .set(
                                        'goon',
                                        (function () {
                                            if (!trigger.targets.length) {
                                                return -get.attitude(player, trigger.player);
                                            }
                                            var num = 0;
                                            for (var i of trigger.targets) {
                                                num -= get.effect(i, trigger.card, trigger.player, player);
                                            }
                                            return num;
                                        })(),
                                    )
                                    .setHiddenSkill(event.name);
                                ('step 1');
                                if (result.bool) {
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                }
                                ('step 2');
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 3');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yhy4.jpg');
                                }
                                player.recover();
                            },
                            global: 'ciwei_ai',
                        },
                        zn_tianze1: {
                            trigger: {
                                global: 'judgeEnd',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        spdc_lihun: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.hasSex('male');
                            },
                            content() {
                                player.gainPlayerCard(target, true, 'h', target.countCards('h'));
                                player.turnOver();
                                ('step 0');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc4.jpg');
                                }
                                player.say('奴家不想和将军过了～');
                                game.playAudio('../extension/果包/audio/wu1.mp3');
                                player.addSkill('lihun2');
                                player.storage.lihun = target;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.classList.contains('turnedover')) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.countCards('h') > target.hp) {
                                            return target.hp - target.countCards('h');
                                        }
                                        return 0;
                                    },
                                },
                                threaten: 1.5,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guiyoujie') {
                                            return [0, 2];
                                        }
                                    },
                                },
                            },
                            lihun2: {
                                trigger: {
                                    player: 'phaseUseEnd',
                                },
                                forced: true,
                                popup: false,
                                content() {
                                    'step 0';
                                    var cards = player.getCards('he');
                                    player.removeSkill('lihun2');
                                    if (player.storage.lihun.classList.contains('dead') || player.storage.lihun.hp <= 0 || cards.length == 0) {
                                        event.finish();
                                    } else {
                                        if (cards.length < player.storage.lihun.hp) {
                                            event._result = { bool: true, cards: cards };
                                        } else {
                                            player.chooseCard('he', true, player.storage.lihun.hp, '离婚:选择要交给' + get.translation(player.storage.lihun) + '的牌');
                                        }
                                    }
                                    ('step 1');
                                    player.storage.lihun.gain(result.cards, player);
                                    player.$give(result.cards.length, player.storage.lihun);
                                },
                            },
                        },
                        spdc_meigu: {
                            enable: 'phaseUse',
                            audio: 'ext:果包/audio:2',
                            usable: 1,
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc4.jpg');
                                }
                                player.say('人家美不美啊～');
                                game.playAudio('../extension/果包/audio/wu1.mp3');
                                var position = get.is.single() ? 'he' : 'hej';
                                if (target.countGainableCards(player, position)) {
                                    player.gainPlayerCard(position, target, true);
                                }
                            },
                            filterTarget(card, player, target) {
                                if (target.sex != 'male') {
                                    return false;
                                }
                                if (player == target) {
                                    return false;
                                }
                                return target.countGainableCards(player, get.is.single() ? 'he' : 'hej') > 0;
                            },
                        },
                        spdc_biyue: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.chooseDrawRecover(2);
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc4.jpg');
                                }
                                player.say('奴身都要被将军看光了～');
                            },
                        },
                        spdc_baoyi: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                var list = [];
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/spdc4.jpg');
                                }
                            },
                        },
                        ssx_xiaoji: {
                            audio: 'ext:果包/audio:2',
                            forced: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter: (event, _player) => event.cards.length === 1 && get.type(event.card) === 'equip',
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ssx.jpg');
                                }
                                ('step 2');
                                player.draw();
                            },
                        },
                        爆衣: {
                            group: '爆衣_guo',
                            subSkill: {
                                guo: {
                                    marktext: '果',
                                    intro: {
                                        name: '爆衣',
                                    },
                                },
                            },
                        },
                        cfr_guo: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                var list = [];
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cfr1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cfr2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/cfr3.jpg');
                                }
                                game.playAudio('../extension/果包/audio/wu4.mp3');
                            },
                        },
                        rt_tianxing: {
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt4.jpg');
                                }
                                if (player.storage.爆衣_guo == 5) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt5.jpg');
                                }
                                if (player.storage.爆衣_guo > 5) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt5.jpg');
                                }
                                ('step 2');
                                trigger.changeToZero();
                                player.draw(Math.min(player.maxHp, 20));
                                player.loseMaxHp();
                            },
                        },
                        rt_shuixiu: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt4.jpg');
                                }
                                if (player.storage.爆衣_guo == 5) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt5.jpg');
                                }
                                if (player.storage.爆衣_guo > 5) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/rt5.jpg');
                                }
                                player.say('将军～,你过来嘛～');
                                ('step 2');
                                player.loseMaxHp();
                                trigger.cancel();
                                player.draw(Math.min(player.hp, 20));
                            },
                        },
                        rt_shuangzi: {
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.maxHp < 3;
                            },
                            content() {
                                player.awakenSkill('rt_shuangzi');
                                player.init('sz');
                            },
                        },
                        sz_xingming: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterTarget: true,
                            content() {
                                'step 0';
                                var list = ['获得技能', '令其给牌'];
                                player.chooseControl(list).set('prompt', '你选择');
                                ('step 1');
                                if (result.control == '获得技能') {
                                    var list = [];
                                    for (var i in lib.skill) {
                                        if (lib.translate[i + '_info']) {
                                            var info = get.translation(i);
                                            for (var ix = 0; ix < info.length; ix++) {
                                                if (/仁|义|礼|智|信/.test(info[ix]) == true) {
                                                    list.push(i);
                                                }
                                            }
                                        }
                                    }
                                    var list = list.randomGets(5);
                                    event.videoId = lib.status.videoId++;
                                    var func = function (skills, id) {
                                        var dialog = ui.create.dialog('forcebutton');
                                        dialog.videoId = id;
                                        dialog.add('令' + get.translation(target) + '获得一个技能');
                                        for (var i = 0; i < skills.length; i++) {
                                            dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                        }
                                        dialog.addText(' <br> ');
                                    };
                                    if (player.isOnline()) {
                                        player.send(func, list, event.videoId);
                                    } else if (player == game.me) {
                                        func(list, event.videoId);
                                    }
                                    player.chooseControl(list).set('ai', function () {
                                        var controls = _status.event.controls;
                                        if (controls.includes('cslilu')) {
                                            return 'cslilu';
                                        }
                                        return controls[0];
                                    });
                                } else {
                                    target.chooseCard('交给' + get.translation(player) + '2张手牌', 2, true).ai = function (card) {
                                        return -get.value(card);
                                    };
                                    event.goto(3);
                                }
                                ('step 2');
                                game.broadcastAll('closeDialog', event.videoId);
                                player.addTempSkill(result.control);
                                event.finish();
                                ('step 3');
                                if (result.cards?.length) {
                                    player.gain(result.cards);
                                    target.damage();
                                }
                                ('step 4');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 5');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz4.jpg');
                                }
                                player.say('将军～,让妾身帮你解决吧～');
                            },
                        },
                        sz_jianqing: {
                            audio: 'ext:果包/audio:2',
                            usable: 1,
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz4.jpg');
                                }
                                ('step 2');
                                player.draw();
                                player.chooseUseTarget({ name: 'shunshou' }, false, 'nodistance');
                            },
                        },
                        sz_shuangzi: {
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('爆衣_guo') > 3;
                            },
                            content() {
                                player.awakenSkill('sz_shuangzi');
                                player.init('rt');
                            },
                        },
                        sz_baoyi: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                var list = [];
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sz4.jpg');
                                }
                            },
                        },
                        myl_suifu: {
                            audio: 'ext:果包/audio:2',
                            derivation: ['myl_fengpo1', 'longdan'],
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return (player = event.source);
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('myl_suifu');
                                ('step 1');
                                player.removeMark('爆衣_guo', player.countMark('爆衣_guo'));
                                player.unmarkSkill('爆衣_guo');
                                ('step 2');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl4.jpg');
                                }
                                ('step 3');
                                player.addSkill('longdan');
                                player.removeSkill('myl_fengpo');
                                player.addSkill('myl_fengpo1');
                            },
                        },
                        myl_fengpo1: {
                            shaRelated: true,
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || event.card.name == 'sha')) {
                                    return false;
                                }
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/myl4.jpg');
                                }
                                player.say('我会轻点的～');
                                ('step 2');
                                var target = trigger.target;
                                event.target = target;
                                player.viewHandcards(target);
                                ('step 3');
                                player.chooseControl('draw_card', '加伤害', 'cancel2').set('prompt', get.prompt2('fengpo'));
                                ('step 4');
                                if (result.control && result.control != 'cancel2') {
                                    var nd = trigger.target.countCards('h', { color: 'red' });
                                    if (result.control == 'draw_card') {
                                        player.draw(nd + 1);
                                    } else {
                                        var trigger2 = trigger.parent;
                                        if (typeof trigger2.baseDamage != 'number') {
                                            trigger2.baseDamage = 1;
                                        }
                                        trigger2.baseDamage += nd;
                                    }
                                }
                            },
                        },
                        zcp_difei: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zcp1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zcp2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zcp3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zcp4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zcp4.jpg');
                                }
                                player.say('王氏怎能服侍好夫君～');
                                ('step 2');
                                player.draw();
                                player.recover();
                            },
                        },
                        zcp_yanjiao: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            chooseButton: {
                                dialog() {
                                    return ui.create.dialog('###严教###' + get.translation('spyanjiao_info'));
                                },
                                chooseControl(event, player) {
                                    var map = {},
                                        hs = player.getCards('h');
                                    for (var i of hs) {
                                        map[i.suit] = true;
                                    }
                                    var list = lib.suit.filter((i) => map[i]);
                                    list.push('cancel2');
                                    return list;
                                },
                                check(event, player) {
                                    var map = {},
                                        hs = player.getCards('h'),
                                        min = Infinity,
                                        min_suit = null;
                                    for (var i of hs) {
                                        var suit = i.suit;
                                        if (!map[suit]) {
                                            map[suit] = 0;
                                        }
                                        map[suit] += get.value(i);
                                    }
                                    for (var i in map) {
                                        if (map[i] < min) {
                                            min = map[i];
                                            min_suit = i;
                                        }
                                    }
                                    return min_suit;
                                },
                                backup(result, player) {
                                    return {
                                        audio: 'spyanjiao',
                                        filterCard: { suit: result.control },
                                        selectCard: -1,
                                        position: 'h',
                                        filterTarget: lib.filter.notMe,
                                        discard: false,
                                        lose: false,
                                        delay: false,
                                        content() {
                                            player.addSkill('spyanjiao_draw');
                                            player.addMark('spyanjiao_draw', cards.length, false);
                                            target.gain(cards, player, 'giveAuto');
                                            target.damage('nocard');
                                        },
                                        ai: {
                                            result: {
                                                target(player, target) {
                                                    if (!ui.selected.cards.length) {
                                                        return 0;
                                                    }
                                                    var val = get.value(ui.selected.cards, target);
                                                    if (val < 0) {
                                                        return val + get.damageEffect(target, player, target);
                                                    }
                                                    if (val > 5 || get.value(ui.selected.cards, player) > 5) {
                                                        return 0;
                                                    }
                                                    return get.damageEffect(target, player, target);
                                                },
                                            },
                                        },
                                    };
                                },
                                prompt: () => '请选择【严教】的目标',
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        player.draw(player.countMark('spyanjiao_draw'));
                                        player.removeSkill('spyanjiao_draw');
                                        player.removeMark('爆衣_guo');
                                        player.unmarkSkill('爆衣_guo');
                                        ('step 1');
                                        if (player.storage.爆衣_guo == 0) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/zcp.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 1) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/zcp1.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 2) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/zcp2.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 3) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/zcp3.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/zcp4.jpg');
                                        }
                                        if (player.storage.爆衣_guo > 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/zcp4.jpg');
                                        }
                                        game.playAudio('../extension/果包/audio/wu1.mp3');
                                    },
                                    mark: true,
                                    intro: {
                                        content: '下回合开始时摸#张牌',
                                    },
                                },
                                backup: {
                                    audio: 'spyanjiao',
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zcp_quanji: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            notemp: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zcp1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zcp2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zcp3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zcp4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zcp4.jpg');
                                }
                                ('step 2');
                                event.count = Math.min(trigger.num, 9);
                                ('step 3');
                                event.count--;
                                player.draw();
                                ('step 4');
                                if (player.countCards('h')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<权>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 5');
                                if (result.cards?.length) {
                                    player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('zcp_quanji');
                                }
                                ('step 6');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('zcp_quanji')).set('frequentSkill', 'zcp_quanji');
                                } else {
                                    event.finish();
                                }
                                ('step 7');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) {
                                    player.loseToDiscardpile(cards);
                                }
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getExpansions('zcp_quanji').length;
                                },
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -2];
                                            }
                                            if (!target.hasFriend()) {
                                                return;
                                            }
                                            if (target.hp >= 4) {
                                                return [0.5, get.tag(card, 'damage') * 2];
                                            }
                                            if (!target.hasSkill('paiyi') && target.hp > 1) {
                                                return [0.5, get.tag(card, 'damage') * 1.5];
                                            }
                                            if (target.hp == 3) {
                                                return [0.5, get.tag(card, 'damage') * 1.5];
                                            }
                                            if (target.hp == 2) {
                                                return [1, get.tag(card, 'damage') * 0.5];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        dh_jiaojin: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                return player.countCards('he', { type: 'trick' });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he', '骄矜:是否弃置一张锦囊牌防止此伤害？', function (card, player) {
                                    return get.type(card) == 'trick';
                                });
                                next.set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (player.hp == 1 || _status.event.getTrigger().num > 1) {
                                        return 9 - get.value(card);
                                    }
                                    if (player.hp == 2) {
                                        return 8 - get.value(card);
                                    }
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                }
                                ('step 2');
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 3');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dh.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dh1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dh2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dh3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dh4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dh4.jpg');
                                }
                            },
                        },
                        dh_jinhui: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                if (event.targets.length != 1) {
                                    return false;
                                }
                                var card = event.card;
                                if (card.name != 'sha' && get.type(card, null, false) != 'trick') {
                                    return false;
                                }
                                if (!player.isPhaseUsing()) {
                                    return false;
                                }
                                return game.hasPlayer(function (current) {
                                    return current != player && current != event.target && lib.filter.targetEnabled2(card, player, current) && lib.filter.targetInRange(card, player, current);
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xinzenhui'), function (card, player, target) {
                                        if (player == target) {
                                            return false;
                                        }
                                        var evt = _status.event.getTrigger();
                                        return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return Math.max(target.countGainableCards(player, 'he') ? get.effect(target, { name: 'shunshou_copy2' }, player, player) : 0, get.effect(target, trigger.card, player, player));
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0],
                                        str = get.translation(target);
                                    event.target = target;
                                    if (!target.countGainableCards(player, 'he')) {
                                        event._result = { index: 0 };
                                    } else {
                                        player
                                            .chooseControl()
                                            .set('choiceList', ['令' + str + '也成为' + get.translation(trigger.card) + '的目标', '获得' + str + '的一张牌,其成为' + get.translation(trigger.card) + '的使用者'])
                                            .set('ai', function () {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player,
                                                    target = _status.event.parent.target;
                                                return (target.countGainableCards(player, 'he') ? get.effect(target, { name: 'shunshou_copy2' }, player, player) : 0) > get.effect(target, trigger.card, player, player) ? 1 : 0;
                                            });
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.index == 1) {
                                    trigger.untrigger();
                                    trigger.parent.player = event.target;
                                    game.log(event.target, '成为了', trigger.card, '的使用者');
                                    player.gainPlayerCard(target, true, 'he');
                                } else {
                                    game.log(event.target, '成为了', trigger.card, '的额外目标');
                                    trigger.parent.targets.push(event.target);
                                }
                                ('step 3');
                                player.addMark('爆衣_guo');
                                player.unmark('爆衣_guo');
                                ('step 4');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dh1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dh2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dh3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dh4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/dh4.jpg');
                                }
                                player.say('让本公主好好惩罚你吧～');
                                game.playAudio('../extension/果包/audio/wu3.mp3');
                            },
                        },
                        gyp_huxiao: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) {
                                    return false;
                                }
                                return event.nature == 'fire';
                            },
                            logTarget: 'player',
                            content() {
                                if (!player.storage.huxiao3) {
                                    player.storage.huxiao3 = [];
                                }
                                player.storage.huxiao3.add(trigger.player);
                                trigger.player.draw();
                                player.draw();
                                player.addTempSkill('huxiao3');
                            },
                        },
                        gyp_xuehen: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('爆衣_guo') < 5;
                            },
                            filterTarget: true,
                            selectTarget() {
                                var player = _status.event.player;
                                return [1, Math.max(1, player.getDamagedHp())];
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp4.jpg');
                                }
                                player.say('这炽热的鲜血,是父亲～');
                                game.playAudio('../extension/果包/audio/wu4.mp3');
                                ('step 2');
                                for (var i = 0; i < targets.length; i++) {
                                    if (!targets[i].isLinked()) {
                                        targets[i].link(true);
                                    }
                                }
                                ('step 3');
                                ('step 4');
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
                        gyp_wuji: {
                            derivation: 'new_rewusheng',
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.getStat('damage') >= 3 && !player.storage.wuji;
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.addSkill('new_rewusheng');
                                ('step 1');
                                player.recover();
                                player.awakenSkill('wuji');
                                player.storage.wuji = true;
                                var card = get.cardPile('qinglong', 'field');
                                if (card) {
                                    player.gain(card, 'gain2', 'log');
                                }
                                if (player.group != 'wei') {
                                }
                                {
                                    player.changeGroup('wei');
                                }
                                //player.group='shu';game.log(player,'变更势力为【魏】');
                                ('step 2');
                                player.removeMark('爆衣_guo', player.countMark('爆衣_guo'));
                                player.unmarkSkill('爆衣_guo');
                                ('step 3');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp4.jpg');
                                }
                            },
                        },
                        gyp_baoyi: {
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gyp4.jpg');
                                }
                                game.playAudio('../extension/果包/audio/wu2.mp3');
                            },
                        },
                        ls_anxu: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return (
                                    game.countPlayer() > 2 &&
                                    game.hasPlayer(function (current) {
                                        return current.countCards('he');
                                    })
                                );
                            },
                            selectTarget: 2,
                            filterTarget(card, player, target) {
                                if (!ui.selected.targets.length) {
                                    return target.countCards('he') > 0;
                                }
                                return target != ui.selected.targets[0] && ui.selected.targets[0].countGainableCards(target, 'he') > 0;
                            },
                            multitarget: true,
                            targetprompt: ['被拿牌', '得到牌'],
                            content() {
                                'step 0';
                                targets[1].gainPlayerCard(targets[0], 'he', true);
                                ('step 1');
                                if (
                                    targets[0].getHistory('lose', function (evt) {
                                        return evt.getParent(3) == event && !evt.es.length;
                                    }).length
                                ) {
                                    player.draw();
                                }
                                ('step 2');
                                if (targets[0].isIn() && targets[1].isIn() && targets[0].countCards('h') != targets[1].countCards('h')) {
                                    event.target = targets[targets[0].countCards('h') > targets[1].countCards('h') ? 1 : 0];
                                    player.chooseBool('是否令' + get.translation(event.target) + '摸一张牌？').set('ai', function () {
                                        var evt = _status.event.parent;
                                        return get.attitude(evt.player, evt.target) > 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    target.draw();
                                }
                                ('step 4');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 5');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ls1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ls2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ls3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ls4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ls4.jpg');
                                }
                                player.say('仲谋,有我在,后宫自然不会乱～');
                                game.playAudio('../extension/果包/audio/wu3.mp3');
                                player.draw();
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                order: 9,
                                result: {
                                    player(player, target) {
                                        if (ui.selected.targets.length) {
                                            return 0.01;
                                        }
                                        return target.countCards('e') ? 0 : 0.5;
                                    },
                                    target(player, target) {
                                        if (ui.selected.targets.length) {
                                            player = target;
                                            target = ui.selected.targets[0];
                                            if (get.attitude(player, target) > 1) {
                                                return 0;
                                            }
                                            return target.countCards('h') - player.countCards('h') > (target.countCards('e') ? 2 : 1) ? 2 : 1;
                                        } else {
                                            if (get.attitude(player, target) <= 0) {
                                                return target.countCards('he', function (card) {
                                                    return card.name == 'tengjia' || get.value(card) > 0;
                                                }) > 0
                                                    ? -1.5
                                                    : 1.5;
                                            }
                                            return target.countCards('he', function (card) {
                                                return card.name != 'tengjia' && get.value(card) <= 0;
                                            }) > 0
                                                ? 1.5
                                                : -1.5;
                                        }
                                    },
                                },
                            },
                        },
                        ls_zhuiyi: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            usable: 1,
                            forceDie: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zhuiyi'), function (card, player, target) {
                                        return _status.event.sourcex != target;
                                    })
                                    .set('forceDie', true)
                                    .set('ai', function (target) {
                                        var num = get.attitude(_status.event.player, target);
                                        if (num > 0) {
                                            if (target.hp == 1) {
                                                num += 2;
                                            }
                                            if (target.hp < target.maxHp) {
                                                num += 2;
                                            }
                                        }
                                        return num;
                                    })
                                    .set('sourcex', trigger.source);
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.recover();
                                    target.draw(4);
                                }
                                ('step 2');
                                player.removeMark('爆衣_guo', player.countMark('爆衣_guo'));
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ls.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ls1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ls2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ls3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ls4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/ls4.jpg');
                                }
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        czj_sheyi: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                global: 'damageBegin4',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he') >= Math.max(1, player.hp);
                            },
                            content() {
                                'step 0';
                                var num = Math.max(1, player.hp),
                                    target = trigger.player;
                                player
                                    .chooseCard('he', get.prompt('sheyi', target), '交给其至少' + get.cnNumber(num) + '张牌,防止即将受到的伤害(' + trigger.num + '点)', [num, player.countCards('he')])
                                    .set(
                                        'goon',
                                        (function () {
                                            if (get.attitude(player, target) < 0) {
                                                return false;
                                            }
                                            if (trigger.num < target.hp && get.damageEffect(target, trigger.source, player, trigger.nature) >= 0) {
                                                return false;
                                            }
                                            if (trigger.num < 2 && target.hp > trigger.num) {
                                                return 6 / Math.sqrt(num);
                                            }
                                            if (target == get.zhu(player)) {
                                                return 9;
                                            }
                                            return 8 / Math.sqrt(num);
                                        })(),
                                    )
                                    .set('ai', function (card) {
                                        if (ui.selected.cards.length >= Math.max(1, _status.event.player.hp)) {
                                            return 0;
                                        }
                                        if (typeof _status.event.goon == 'number') {
                                            return _status.event.goon - get.value(card);
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.player;
                                    target.gain(result.cards, player, 'giveAuto');
                                    trigger.cancel();
                                }
                                ('step 2');
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 3');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/czj1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/czj2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/czj3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/czj4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/czj4.jpg');
                                }
                                player.say('妾身定然守护好孩子～');
                                game.playAudio('../extension/果包/audio/wu1.mp3');
                            },
                        },
                        czj_tianyin: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var list = [];
                                player.getHistory('useCard', function (evt) {
                                    list.add(get.type2(evt.card, false));
                                });
                                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                    if (!list.includes(get.type2(ui.cardPile.childNodes[i], false))) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var list = [],
                                    cards = [];
                                player.getHistory('useCard', function (evt) {
                                    list.add(get.type2(evt.card, false));
                                });
                                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                    var type = get.type2(ui.cardPile.childNodes[i], false);
                                    if (!list.includes(type)) {
                                        list.push(type);
                                        cards.push(ui.cardPile.childNodes[i]);
                                    }
                                }
                                player.gain(cards, 'gain2');
                                ('step 1');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 2');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/czj.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/czj1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/czj2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/czj3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/czj4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/czj4.jpg');
                                }
                            },
                        },
                        az_chongxu: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return lib.config.extension_果包_guobao_xuanze_game == 'game_new';
                            },
                            content() {
                                'step 0';
                                player.chooseToPlayGame([
                                    [2, '临时技能'],
                                    [4, '永久技能'],
                                    [5, '角色换将'],
                                ]);
                                ('step 1');
                                if (result.score) {
                                    player.draw(result.score);
                                }
                                if (Array.isArray(result.control)) {
                                    for (var i = 0; i < result.control.length; i++) {
                                        if (result.control[i] == '临时技能') {
                                            event.type = 'temp';
                                            event.goto(3);
                                        } else if (result.control[i] == '永久技能') {
                                            event.type = 'perm';
                                            event.goto(3);
                                        } else if (result.control[i] == '角色换将') {
                                            player
                                                .chooseTarget(true, '选择一名角色换将', function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    return -get.attitude(_status.event.player, target);
                                                });
                                        }
                                    }
                                }
                                ('step 2');
                                if (result.bool && result.targets) {
                                    var target = result.targets[0];
                                    var name = Object.keys(lib.characterPack.果包).randomGet(function (name) {
                                        return game.filterPlayer((current) => current.name == name || current.name1 == name || current.name2 == name);
                                    });
                                    target.reinit(target.name1, name, 'nosmooth');
                                    event.finish();
                                }
                                ('step 3');
                                if (event.type) {
                                    var list = [];
                                    list = [];
                                    for (const key in lib.characterPack.果包) {
                                        if (game.filterPlayer((current) => current.name != key && current.name1 != key && current.name2 != key)) {
                                            list.push(key);
                                        }
                                    }
                                    list = list.randomGets(3);
                                    var skills = [];
                                    for (var i of list) {
                                        skills.addArray(
                                            (lib.character[i][3] || []).filter(function (skill) {
                                                var info = get.info(skill);
                                                return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
                                            }),
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
                                            skill: skills.randomGet(),
                                        };
                                        if (event.dialog) {
                                            event.dialog.close();
                                        }
                                        if (event.control) {
                                            event.control.close();
                                        }
                                    };
                                    var chooseButton = function (list, skills) {
                                        var event = _status.event;
                                        if (!event._result) {
                                            event._result = {};
                                        }
                                        event._result.skill = null;
                                        var _result = event._result;
                                        var dialog = ui.create.dialog('请选择获得一个' + (event.type == 'temp' ? '临时' : '永久') + '技能', [list, 'character'], 'hidden');
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
                                                if (_status.dragged) {
                                                    return;
                                                }
                                                if (_status.justdragged) {
                                                    return;
                                                }
                                                _status.tempNoButton = true;
                                                setTimeout(function () {
                                                    _status.tempNoButton = false;
                                                }, 500);
                                                var link = this.link;
                                                if (!this.classList.contains('bluebg')) {
                                                    if (_result.skill) {
                                                        return;
                                                    }
                                                    this.classList.add('bluebg');
                                                    _result.skill = link;
                                                } else {
                                                    this.classList.remove('bluebg');
                                                    _result.skill = null;
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
                                }
                                ('step 4');
                                var map = event.result || result;
                                if (map && map.skill) {
                                    var skill = map.skill;
                                    if (event.type == 'temp') {
                                        player.addTempSkill(skill);
                                    } else {
                                        player.addSkill(skill);
                                    }
                                    game.log(player, '获得了' + (event.type == 'temp' ? '临时' : '永久') + '技能', '#g【' + get.translation(skill) + '】');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            group: 'az_chongxu_xin',
                            subSkill: {
                                xin: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return lib.config.extension_果包_guobao_xuanze_game == 'game_old';
                                    }, //QQQ
                                    content() {
                                        'step 0';
                                        player.chooseToPlayBeatmap(lib.skill.chongxu.beatmaps.randomGet());
                                        ('step 1');
                                        var score = Math.floor(Math.min(5, result.accuracy / 17));
                                        event.score = score;
                                        game.log(player, '的演奏评级为', '#y' + result.rank[0], ',获得积分点数', '#y' + score, '分');
                                        var list = [];
                                        if (score >= 2) {
                                            list.push('2,临时技能');
                                        }
                                        if (score >= 4) {
                                            list.push('4,永久技能');
                                        }
                                        if (score >= 5) {
                                            list.push('5,角色换将');
                                        }
                                        player.chooseControl(list);
                                        ('step 2');
                                        if (result.control == '2,临时技能') {
                                            event.score -= 2;
                                            event.type = 'temp';
                                            event.goto(4);
                                        } else if (result.control == '4,永久技能') {
                                            event.score -= 4;
                                            event.type = 'perm';
                                            event.goto(4);
                                        } else if (result.control == '5,角色换将') {
                                            event.score -= 5;
                                            player
                                                .chooseTarget(true, '选择一名角色换将', function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    return -get.attitude(_status.event.player, target);
                                                });
                                        }
                                        ('step 3');
                                        if (result.bool && result.targets) {
                                            var target = result.targets[0];
                                            var name = Object.keys(lib.characterPack.果包).randomGet(function (name) {
                                                return game.filterPlayer((current) => current.name == name || current.name1 == name || current.name2 == name);
                                            });
                                            target.reinit(target.name1, name, 'nosmooth');
                                            event.finish();
                                        }
                                        ('step 4');
                                        if (event.score) {
                                            player.draw(event.score);
                                        }
                                        if (event.type) {
                                            var list = [];
                                            list = [];
                                            for (const key in lib.characterPack.果包) {
                                                if (game.filterPlayer((current) => current.name != key && current.name1 != key && current.name2 != key)) {
                                                    list.push(key);
                                                }
                                            }
                                            list = list.randomGets(3);
                                            var skills = [];
                                            for (var i of list) {
                                                skills.addArray(
                                                    (lib.character[i][3] || []).filter(function (skill) {
                                                        var info = get.info(skill);
                                                        return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
                                                    }),
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
                                                    skill: skills.randomGet(),
                                                };
                                                if (event.dialog) {
                                                    event.dialog.close();
                                                }
                                                if (event.control) {
                                                    event.control.close();
                                                }
                                            };
                                            var chooseButton = function (list, skills) {
                                                var event = _status.event;
                                                if (!event._result) {
                                                    event._result = {};
                                                }
                                                event._result.skill = null;
                                                var _result = event._result;
                                                var dialog = ui.create.dialog('请选择获得一个' + (event.type == 'temp' ? '临时' : '永久') + '技能', [list, 'character'], 'hidden');
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
                                                        if (_status.dragged) {
                                                            return;
                                                        }
                                                        if (_status.justdragged) {
                                                            return;
                                                        }
                                                        _status.tempNoButton = true;
                                                        setTimeout(function () {
                                                            _status.tempNoButton = false;
                                                        }, 500);
                                                        var link = this.link;
                                                        if (!this.classList.contains('bluebg')) {
                                                            if (_result.skill) {
                                                                return;
                                                            }
                                                            this.classList.add('bluebg');
                                                            _result.skill = link;
                                                        } else {
                                                            this.classList.remove('bluebg');
                                                            _result.skill = null;
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
                                        }
                                        ('step 5');
                                        var map = event.result || result;
                                        if (map && map.skill) {
                                            var skill = map.skill;
                                            if (event.type == 'temp') {
                                                player.addTempSkill(skill);
                                            } else {
                                                player.addSkill(skill);
                                            }
                                            game.log(player, '获得了' + (event.type == 'temp' ? '临时' : '永久') + '技能', '#g【' + get.translation(skill) + '】');
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
                            beatmaps: [
                                { name: '鳥の詩', filename: 'tori_no_uta', timeleap: [1047, 3012, 4978, 5469, 5961, 6452, 6698, 7435, 8909, 10875, 12840], current: -110, judgebar_height: 0.16, range1: [84, 110], range2: [90, 104], range3: [94, 100], speed: 25 },
                                { name: '竹取飛翔　～ Lunatic Princess', filename: 'taketori_hishou', timeleap: [1021, 1490, 1959, 2896, 3834, 4537, 4771, 5709, 6646, 7585, 8039, 8494, 9403, 10291, 11180, 11832, 12049, 12920, 13345, 13771, 14196], current: -110, judgebar_height: 0.16, range1: [84, 110], range2: [90, 104], range3: [94, 100], speed: 25, node_color: 'linear-gradient(rgba(250, 170, 190, 1), rgba(240, 160, 180, 1))', judgebar_color: 'linear-gradient(rgba(240, 120, 243, 1), rgba(245, 106, 230, 1))' },
                                { name: 'ignotus', filename: 'ignotus', timeleap: [0, 1412, 2824, 4235, 5647, 5824, 7059, 8294, 8471, 9882, 10941, 11294, 12000, 12706, 13412, 14118, 14824, 15529, 15882, 16059, 16235, 16412, 16588], current: -110, judgebar_height: 0.16, range1: [84, 110], range2: [90, 104], range3: [94, 100], speed: 25, node_color: 'linear-gradient(rgba(240, 250, 240, 1), rgba(230, 240, 230, 1))', judgebar_color: 'linear-gradient(rgba(161, 59, 150, 1), rgba(58, 43, 74, 1))' },
                                { name: 'Super Mario 3D World Theme', filename: 'sm3dw_overworld', timeleap: [0, 1071, 1518, 2054, 4018, 4286, 5357, 6429, 7500, 8571, 9643, 10714, 11786, 12321, 12589, 12857, 13929, 15000, 16071, 17143, 18214, 18482, 18750, 19018, 19286, 20357], current: -110, judgebar_height: 0.16, range1: [84, 110], range2: [90, 104], range3: [94, 100], speed: 25, node_color: 'linear-gradient(rgba(120, 130, 240, 1), rgba(100, 100, 230, 1))', judgebar_color: 'linear-gradient(rgba(230, 40, 30, 1), rgba(220, 30, 10, 1))' },
                            ],
                        },
                        qm_huihuan: {
                            usable: 1,
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player.draw();
                                player.removeMark('爆衣_guo', player.countMark('爆衣_guo'));
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/az.jpg');
                                }
                            },
                        },
                        xs_pojun: {
                            shaRelated: true,
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player.choosePlayerCard('选择目标的牌置于其武将牌上', trigger.target, [0, trigger.target.hp]);
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.target.addToExpansion(result.cards, 'giveAuto', trigger.target).gaintag.add('repojun2');
                                    trigger.target.addSkill('repojun2');
                                }
                                ('step 2');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 3');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xs1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xs2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xs3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xs4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xs4.jpg');
                                }
                                player.say('犯大吴疆土不如犯我～');
                            },
                            group: 'xs_pojun_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:果包/audio:2',
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.num = trigger.num + 1;
                                    },
                                },
                            },
                        },
                        xs_lianpo: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('kill') > 0;
                            },
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xs.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xs1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xs2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xs3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xs4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/xs4.jpg');
                                }
                                ('step 2');
                                player.phase('nodelay');
                            },
                        },
                        xunmi: {
                            dutySkill: true,
                            group: ['xunmi_add', 'xunmi_add2', 'xunmi_achieve', 'xunmi_fail', 'xunmi_gameStart'],
                            derivation: ['qiangwang', 'erduo'],
                            prompt: '与一名角色进行拼点',
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: 'compare',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.parent.name == 'xunmi' && event.num1 < 13;
                                    },
                                    content() {
                                        var num = 2;
                                        game.log(player, '的拼点牌点数+', num);
                                        trigger.num1 = Math.min(13, trigger.num1 + num);
                                    },
                                },
                                add2: {
                                    trigger: {
                                        player: 'chooseToCompareAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.parent.name == 'xunmi' && event.result.bool;
                                    },
                                    content() {
                                        player.storage.comparetimes += 1;
                                        player.addMark('爆衣_guo');
                                        player.unmarkSkill('爆衣_guo');
                                        if (player.storage.爆衣_guo == 1) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy1.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 2) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy2.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 3) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy3.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                        }
                                        if (player.storage.爆衣_guo > 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                        }
                                    },
                                },
                                achieve: {
                                    trigger: {
                                        player: 'chooseToCompareAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.storage.comparetimes == 2) {
                                            return true;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        player.awakenSkill('xunmi');
                                        game.log(player, '成功完成使命');
                                        player.gainMaxHp(1);
                                        player.addSkill('qiangwang');
                                        ('step 1');
                                        player.removeMark('爆衣_guo', player.countMark('爆衣_guo'));
                                        player.unmarkSkill('爆衣_guo');
                                        if (player.storage.爆衣_guo == 0) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 1) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy1.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 2) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy2.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 3) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy3.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                        }
                                        if (player.storage.爆衣_guo > 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                        }
                                    },
                                },
                                fail: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.hp < -1) {
                                            player.changeHp(1 - player.hp);
                                        } else {
                                            player.recover(2);
                                        }
                                        player.awakenSkill('xunmi');
                                        game.log(player, 'xunmi');
                                        ('step 1');
                                        player.addMark('爆衣_guo', 4);
                                        player.unmarkSkill('爆衣_guo');
                                        if (player.storage.爆衣_guo == 1) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy1.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 2) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy2.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 3) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy3.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                        }
                                        if (player.storage.爆衣_guo > 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                        }
                                        player.addSkill('erduo');
                                    },
                                },
                                gameStart: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.comparetimes = 0;
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return !player.hasSkillTag('noCompareSource');
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0 && !target.hasSkillTag('noCompareTarget');
                            },
                            content() {
                                if (player.canCompare(target)) {
                                    player.chooseToCompare(target);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        erduo: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy1.jpg');
                                    player.say('我身体好热～');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy2.jpg');
                                    player.say('啊～,啊～,这种感觉～');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy3.jpg');
                                    player.say('要溢出来了～,啊～');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                    player.say('人家受不了了～,求求你把人家填满吧～');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                    player.say('人家受不了了～,求求你把人家填满吧～');
                                }
                                game.playAudio('../extension/果包/audio/wu3.mp3');
                                player.draw(2);
                            },
                        },
                        qianghun: {
                            usable: 1,
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                }
                                ('step 1');
                                var card = get.cardPile(function (card) {
                                    return card.name == 'zhuge';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                                var card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                            },
                        },
                        qiangwang: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return player.countMark('爆衣_guo') < 5;
                            },
                            content() {
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                }
                                trigger.num = trigger.num + 1;
                            },
                        },
                        gxy_baoyi: {
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/gxy4.jpg');
                                }
                            },
                        },
                        wr_minsi: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            getResult(cards) {
                                var l = cards.length;
                                var all = Math.pow(l, 2);
                                var list = [];
                                for (var i = 1; i < all; i++) {
                                    var array = [];
                                    for (var j = 0; j < l; j++) {
                                        if (Math.floor((i % Math.pow(2, j + 1)) / Math.pow(2, j)) > 0) {
                                            array.push(cards[j]);
                                        }
                                    }
                                    var num = 0;
                                    for (var k of array) {
                                        num += k.number;
                                    }
                                    if (12 <= num && num <= 24) {
                                        list.push(array);
                                    }
                                }
                                if (list.length) {
                                    list.sort(function (a, b) {
                                        if (a.length != b.length) {
                                            return b.length - a.length;
                                        }
                                        return get.value(a) - get.value(b);
                                    });
                                    return list[0];
                                }
                                return list;
                            },
                            usable: 1,
                            filterCard(card) {
                                var num = 0;
                                if (Array.isArray(ui.selected.cards)) {
                                    for (var i of ui.selected.cards) {
                                        num += i.number;
                                    }
                                }
                                var num1 = card.number + num;
                                return num1 <= 24;
                            },
                            complexCard: true,
                            selectCard() {
                                var num = 0;
                                if (Array.isArray(ui.selected.cards)) {
                                    for (var i of ui.selected.cards) {
                                        num += i.number;
                                    }
                                }
                                if (12 <= num && num <= 24) {
                                    return [ui.selected.cards.length, ui.selected.cards.length + 2];
                                }
                                return ui.selected.cards.length + 2;
                            },
                            check(card) {
                                var evt = _status.event;
                                if (!evt.minsi_choice) {
                                    evt.minsi_choice = lib.skill.minsi.getResult(evt.player.getCards('he'));
                                }
                                if (!evt.minsi_choice.includes(card)) {
                                    return 0;
                                }
                                return 1;
                            },
                            position: 'he',
                            content() {
                                'step 0';
                                player.draw(cards.length * 2).gaintag = ['minsi2'];
                                player.addTempSkill('minsi2');
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr4.jpg');
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        wr_jizhan: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                'step 0';
                                trigger.changeToZero();
                                var card = get.cards()[0];
                                game.cardsGotoOrdering(card);
                                event.cards = [card];
                                event.num = card.number;
                                player.showCards(card, get.translation(player) + '发动了【吉占】');
                                ('step 1');
                                var str = get.strNumber(num);
                                player
                                    .chooseControl('大于' + str, '小于' + str, 'cancel2')
                                    .set('prompt', '吉占:猜测下一张牌的点数')
                                    .set('choice', num < 7 ? 0 : 1)
                                    .set('ai', () => _status.event.choice);
                                ('step 2');
                                var card = get.cards()[0];
                                game.cardsGotoOrdering(card);
                                event.cards.push(card);
                                var num = card.number;
                                if ((num > event.num && result.index == 0) || (num < event.num && result.index == 1)) {
                                    event.num = num;
                                    event.goto(1);
                                }
                                player.showCards(card);
                                ('step 3');
                                player.gain(cards, 'gain2');
                                ('step 4');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 5');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr4.jpg');
                                }
                                player.say('吉兆呢,将军不想做些什么吗～');
                            },
                        },
                        wr_jijing: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                player.judge();
                                player.recover();
                                ('step 1');
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 2');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr4.jpg');
                                }
                            },
                        },
                        wr_fusong: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                global: 'judgeEnd',
                            },
                            preHidden: true,
                            frequent(event) {
                                if (event.result.card.name == 'du') {
                                    return false;
                                }
                                //if(get.mode()=='guozhan') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') {
                                    return false;
                                }
                                return true;
                            },
                            filter(event, player) {
                                return get.position(event.result.card, true) == 'o';
                            },
                            content() {
                                'step 0';
                                player.gain(trigger.result.card, 'gain2');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/wr4.jpg');
                                }
                            },
                        },
                        ying: {},
                        sr_yingjian: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            audio: 'ext:果包/audio:2',
                            filter(event, player) {
                                return !player.hasSkill('ying');
                            },
                            content() {
                                'step 0';
                                player.chooseUseTarget('###是否发动【影箭】？###视为使用一张没有距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                                ('step 1');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sr1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sr2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sr3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sr4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sr4.jpg');
                                }
                                ('step 2');
                                if (player.hp < player.maxHp) {
                                    player.addTempSkill('ying');
                                }
                            },
                        },
                        sr_shixin: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.nature == 'fire' || event.nature == 'thunder';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                ('step 1');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sr.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sr1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sr2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sr3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sr4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sr4.jpg');
                                }
                                player.say('从前的事情就一笔勾销吧,好不好嘛～');
                                player.draw();
                            },
                            ai: {
                                nofire: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage')) {
                                            return 'zerotarget';
                                        }
                                    },
                                },
                            },
                        },
                        zch_jueqing: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            audio: 'ext:果包/audio:2',
                            check() {
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                                ('step 1');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zch1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zch2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zch3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zch4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/zch4.jpg');
                                }
                                player.say('无情者伤人,有情者自伤～');
                            },
                            ai: {
                                jueqing: true,
                            },
                            group: 'zch_jueqing_1',
                            subSkill: {
                                1: {
                                    usable: 1,
                                    trigger: {
                                        global: 'loseHpBefore',
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        player.draw(2);
                                        ('step 1');
                                        player.addMark('爆衣_guo');
                                        player.unmarkSkill('爆衣_guo');
                                        if (player.storage.爆衣_guo == 1) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/zch1.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 2) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/zch2.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 3) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/zch3.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/zch4.jpg');
                                        }
                                        if (player.storage.爆衣_guo > 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/zch4.jpg');
                                        }
                                    },
                                },
                            },
                        },
                        zch_shangshi: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'loseAfter',
                            },
                            marktext: '伤',
                            intro: {
                                name: '伤',
                                content: '本轮所有玩家共失去了#点体力',
                            },
                            filter(event, player) {
                                return player.countMark('zch_shangshi') != player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var allnum = player.countMark('zch_shangshi');
                                var num = allnum - player.countCards('h');
                                if (num > 0) {
                                    player.draw(num);
                                } else {
                                    player.chooseToDiscard('h', true, -num);
                                }
                                ('step 1');
                                if (player.countCards('h') < player.hp) {
                                    player.removeMark('爆衣_guo');
                                    player.unmarkSkill('爆衣_guo');
                                    if (player.storage.爆衣_guo == 0) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/zch.jpg');
                                    }
                                    if (player.storage.爆衣_guo == 1) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/zch1.jpg');
                                    }
                                    if (player.storage.爆衣_guo == 2) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/zch2.jpg');
                                    }
                                    if (player.storage.爆衣_guo == 3) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/zch3.jpg');
                                    }
                                    if (player.storage.爆衣_guo == 4) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/zch4.jpg');
                                    }
                                    if (player.storage.爆衣_guo > 4) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/zch4.jpg');
                                    }
                                }
                            },
                            group: ['zch_shangshi_zhunbei', 'zch_shangshi_losehp', 'zch_shangshi_round'],
                            subSkill: {
                                zhunbei: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    content() {
                                        player.loseHp();
                                    },
                                },
                                losehp: {
                                    trigger: {
                                        global: 'loseHpEnd',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        player.addMark('zch_shangshi', trigger.num);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                round: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        player.removeMark('zch_shangshi', player.countMark('zch_shangshi'));
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        yyy_fengwu: {
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseHp();
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yyy1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yyy2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yyy3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yyy4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/yyy4.jpg');
                                }
                                ('step 1');
                                player.chooseTarget('是否发动【凤舞】？视为对所选目标使用一张无视防具的【杀】', function (card, player, target) {
                                    return player.canUse({ name: 'sha' }, target);
                                });
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    var card = { name: 'sha' };
                                    event.related = player.useCard(card, target, true);
                                    event.related.card.fengwu = true;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (
                                    !event.related ||
                                    !game.hasPlayer2(function (current) {
                                        return current.getHistory('damage', function (evt) {
                                            return evt.getParent(2) == event.related;
                                        }).length;
                                    })
                                ) {
                                    event.finish();
                                }
                                ('step 4');
                                var list = [],
                                    list2 = ['移动场上的一张牌', '摸牌至体力上限'];
                                if (player.canMoveCard(null, true)) {
                                    list.push('选项一');
                                }
                                list.push('选项二');
                                player.chooseControl(list).set('choiceList', list2);
                                ('step 5');
                                if (result.control == '选项一') {
                                    player.moveCard();
                                } else {
                                    player.drawTo(player.maxHp);
                                }
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg || !arg.card || arg.card.fengwu != true) {
                                        return false;
                                    }
                                },
                            },
                        },
                        yyy_qinghua: {
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.yyy_qinghua = 0;
                            },
                            filter(event, player) {
                                return player.storage.yyy_qinghua < player.hp;
                            },
                            content() {
                                player.draw();
                                player.storage.yyy_qinghua++;
                            },
                            group: 'yyy_qinghua_end',
                            subSkill: {
                                end: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.yyy_qinghua > 0;
                                    },
                                    content() {
                                        'step 0';
                                        event.cards = player.getCards('h');
                                        event.i = 0;
                                        event.targets = [];
                                        if (event.cards.length) {
                                            player.showCards(event.cards);
                                        } else {
                                            event.goto(10);
                                        }
                                        ('step 1');
                                        if (Array.isArray(event.cards)) {
                                            for (var i of event.cards) {
                                                if (get.color(event.cards[0]) != get.color(i)) {
                                                    event.i = 1;
                                                }
                                            }
                                        }
                                        ('step 2');
                                        if (event.i != 0) {
                                            player.chooseControl('红色', '黑色').set('prompt', '选择一种颜色,弃置同颜色的所有牌');
                                        } else {
                                            event.goto(5);
                                        }
                                        ('step 3');
                                        if (result.control == '红色') {
                                            var list = [];
                                            if (Array.isArray(event.cards)) {
                                                for (var i of event.cards) {
                                                    if (get.color(i) == 'red') {
                                                        list.push(i);
                                                    }
                                                }
                                            }
                                            player.discard(list);
                                        }
                                        if (result.control == '黑色') {
                                            var list = [];
                                            if (Array.isArray(event.cards)) {
                                                for (var i of event.cards) {
                                                    if (get.color(i) == 'black') {
                                                        list.push(i);
                                                    }
                                                }
                                            }
                                            player.discard(list);
                                        }
                                        ('step 4');
                                        player.addMark('爆衣_guo');
                                        player.unmarkSkill('爆衣_guo');
                                        if (player.storage.爆衣_guo == 1) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yyy1.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 2) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yyy2.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 3) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yyy3.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yyy4.jpg');
                                        }
                                        if (player.storage.爆衣_guo > 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yyy4.jpg');
                                        }
                                        event.goto(10);
                                        ('step 5');
                                        player.removeMark('爆衣_guo');
                                        player.unmarkSkill('爆衣_guo');
                                        if (player.storage.爆衣_guo == 0) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yyy.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 1) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yyy1.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 2) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yyy2.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 3) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yyy3.jpg');
                                        }
                                        if (player.storage.爆衣_guo == 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yyy4.jpg');
                                        }
                                        if (player.storage.爆衣_guo > 4) {
                                            player.node.avatar.setBackgroundImage('extension/果包/image/yyy4.jpg');
                                        }
                                        var list = [];
                                        for (var i of lib.inpile) {
                                            if (get.type(i) != 'delay' && get.type(i) != 'equip' && (get.type(i) != 'basic' || i == 'sha' || i == 'tao')) {
                                                if (i == 'sha') {
                                                    list.push(i);
                                                    list.push('huosha');
                                                    list.push('leisha');
                                                } else {
                                                    list.push(i);
                                                }
                                            }
                                        }
                                        player.chooseButton(ui.create.dialog([list, 'vcard']));
                                        ('step 6');
                                        if (result.links?.length) {
                                            var i = result.links[0][2];
                                            var j = result.links[0][3];
                                            event.card = { name: i, nature: j };
                                        } else {
                                            event.goto(10);
                                        }
                                        ('step 7');
                                        player.loseToDiscardpile(player.getCards('h'));
                                        ('step 8');
                                        player.addTempSkill('yyy_qinghua_use', 'useCardAfter');
                                        player.chooseUseTarget(event.card, false);
                                        ('step 9');
                                        if (result.bool && result.targets.length) {
                                        } else {
                                            player.removeSkill('yyy_qinghua_use');
                                        }
                                        ('step 10');
                                        player.storage.yyy_qinghua = 0;
                                    },
                                },
                                use: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.targets.length == 1;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget([0, player.storage.yyy_qinghua], '选择至多' + player.storage.yyy_qinghua + '名角色,令其成为' + get.translation(trigger.card) + '的额外目标', false, function (card, player, target) {
                                            return !trigger.targets.includes(target) && player.canUse(trigger.card, target, false);
                                        });
                                        ('step 1');
                                        if (result.bool && result.targets.length) {
                                            for (var i = 0; i < result.targets.length; i++) {
                                                trigger.targets.push(result.targets[i]);
                                            }
                                            game.log(result.targets, '成为了', trigger.card, '的额外目标');
                                        }
                                    },
                                },
                            },
                        },
                        bz_feishan: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            position: 'he',
                            filterCard: true,
                            filterTarget: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (!lib.inpile.includes('buzhihuoshan')) {
                                    lib.inpile.push('buzhihuoshan');
                                    event.card = game.createCard2('buzhihuoshan', 'heart', 3);
                                } else {
                                    event.card = get.cardPile(function (card) {
                                        return card.name == 'buzhihuoshan';
                                    });
                                }
                                if (!event.card) {
                                    event.finish();
                                } else {
                                    target.gain(event.card, 'gain2');
                                }
                                ('step 1');
                                if (target.getCards('h').includes(card) && card.name == 'buzhihuoshan') {
                                    target.chooseUseTarget(card, 'nopopup', true);
                                }
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz4.jpg');
                                }
                                player.say('体がとても熱いですね～');
                            },
                            ai: {
                                order: 3,
                                result: {
                                    target(player, target) {
                                        if (
                                            lib.inpile.includes('buzhihuoshan') &&
                                            !get.cardPile(function (card) {
                                                return card.name == 'buzhihuoshan';
                                            })
                                        ) {
                                            return 0;
                                        }
                                        return target.getUseValue({ name: 'buzhihuoshan' });
                                    },
                                },
                            },
                        },
                        bz_fenghuang: {
                            audio: 'ext:果包/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            limited: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                target.damage(Math.min(player.countMark('火凤1'), 5), 'fire');
                                ('step 1');
                                player.drawTo(Math.min(player.countMark('火凤1'), 5));
                                ('step 2');
                                player.awakenSkill('bz_fenghuang');
                                game.broadcastAll(
                                    function (target1, target2) {
                                        game.swapSeat(target1, target2);
                                    },
                                    player,
                                    target,
                                );
                                player.addMark('爆衣_guo', 4);
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz4.jpg');
                                }
                                if (player.storage.爆衣_guo > 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz4.jpg');
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
                        bz_huofeng: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz3.jpg');
                                }
                                if (player.storage.爆衣_guo == 4) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/bz4.jpg');
                                }
                                ('step 1');
                                player.addMark('火凤1');
                            },
                        },
                        火凤1: {
                            marktext: '火',
                            intro: {
                                name: '火凤',
                            },
                        },
                        shanzi_skill: {
                            trigger: {
                                source: 'damageBegin4',
                            },
                            equipSkill: true,
                            forced: true,
                            filter(event, player) {
                                return !event.player.hasSkill('shanzi_skill_damage');
                            },
                            content() {
                                trigger.player.addTempSkill('shanzi_skill_damage', 'roundStart');
                            },
                        },
                        shanzi_skill_damage: {
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num++;
                                ('step 1');
                                player.removeSkill('shanzi_skill_damage');
                            },
                        },
                        yw_mingxuan: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                var list = player.getStorage('spmingxuan');
                                return (
                                    player.countCards('h') > 0 &&
                                    game.hasPlayer(function (current) {
                                        return current != player && !list.includes(current);
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                var suits = [],
                                    hs = player.getCards('h');
                                for (var i of hs) {
                                    suits.add(i.suit);
                                }
                                var list = player.getStorage('spmingxuan'),
                                    num = Math.min(
                                        suits.length,
                                        game.countPlayer(function (current) {
                                            return current != player && !list.includes(current);
                                        }),
                                    );
                                player
                                    .chooseCard('h', true, [1, num], '瞑昡:请选择至多' + get.cnNumber(num) + '张花色各不相同的手牌', function (card, player) {
                                        if (!ui.selected.cards.length) {
                                            return true;
                                        }
                                        var suit = card.suit;
                                        for (var i of ui.selected.cards) {
                                            if (i.suit == suit) {
                                                return false;
                                            }
                                        }
                                        return true;
                                    })
                                    .set('complexCard', true)
                                    .set('ai', (card) => 6 - get.value(card));
                                ('step 1');
                                if (result.bool) {
                                    var list = player.getStorage('spmingxuan'),
                                        cards = result.cards.randomSort();
                                    var targets = game
                                        .filterPlayer((current) => current != player && !list.includes(current))
                                        .randomGets(cards.length)
                                        .sortBySeat();
                                    player.line(targets, 'green');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].gain(i, player);
                                        player.$giveAuto(i, targets[i]);
                                    }
                                    event.targets = targets;
                                    event.num = 0;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                ('step 3');
                                if (num < targets.length) {
                                    var target = targets[num];
                                    event.num++;
                                    if (target.isIn()) {
                                        event.target = target;
                                        target
                                            .chooseToUse(
                                                function (card, player, event) {
                                                    if (card.name != 'sha') {
                                                        return false;
                                                    }
                                                    return lib.filter.filterCard.apply(this, arguments);
                                                },
                                                '对' + get.translation(player) + '使用一张杀,否则交给其一张牌,且其摸一张牌',
                                            )
                                            .set('targetRequired', true)
                                            .set('complexSelect', true)
                                            .set('filterTarget', function (card, player, target) {
                                                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) {
                                                    return false;
                                                }
                                                return lib.filter.targetEnabled.apply(this, arguments);
                                            })
                                            .set('sourcex', player)
                                            .set('addCount', false);
                                    } else {
                                        if (event.num < targets.length) {
                                            event.redo();
                                        } else {
                                            event.finish();
                                        }
                                    }
                                }
                                ('step 4');
                                if (result.bool) {
                                    player.markAuto('spmingxuan', [target]);
                                    if (event.num < targets.length) {
                                        event.goto(3);
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    var he = target.getCards('he');
                                    if (he.length) {
                                        if (he.length == 1) {
                                            event._result = { bool: true, cards: he };
                                        } else {
                                            target.chooseCard('he', true, '交给' + get.translation(player) + '一张牌');
                                        }
                                    } else {
                                        if (event.num < targets.length) {
                                            event.goto(3);
                                        } else {
                                            event.finish();
                                        }
                                    }
                                }
                                ('step 5');
                                if (result.cards?.length) {
                                    player.gain(result.cards, target, 'giveAuto');
                                    player.draw();
                                    player.addMark('爆衣_guo');
                                    player.unmarkSkill('爆衣_guo');
                                    if (player.storage.爆衣_guo == 1) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/yw1.jpg');
                                    }
                                    if (player.storage.爆衣_guo == 2) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/yw2.jpg');
                                    }
                                    if (player.storage.爆衣_guo == 3) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/yw3.jpg');
                                    }
                                    if (player.storage.爆衣_guo == 4) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/yw4.jpg');
                                    }
                                    if (player.storage.爆衣_guo > 4) {
                                        player.node.avatar.setBackgroundImage('extension/果包/image/yw4.jpg');
                                    }
                                    player.say('还望诸位能来妾身的闺房～');
                                }
                                if (event.num < targets.length) {
                                    event.goto(3);
                                }
                            },
                            intro: {
                                content: '已被$使用过杀',
                            },
                        },
                        yw_xianchou: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    event.source &&
                                    event.source.isIn() &&
                                    game.hasPlayer(function (current) {
                                        return current != event.source;
                                    })
                                );
                            },
                            //当你受到有来源的伤害后,你可选择一名不为伤害来源的角色,其获得技能铁骑直至回合结束.该角色可以弃置一张牌,视为对伤害来源使用一张【杀】(无距离限制).若其因此【杀】造成了伤害,则你可以回复1点体力或摸一张牌你穿一件衣服
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player
                                    .chooseTarget(get.prompt2('spxianchou'), (card, player, target) => target != trigger.source)
                                    .set('ai', (target) => get.attitude(target, player) * Math.sqrt(target.countCards('he')))
                                    .forResult();
                                if (result.targets?.length) {
                                    result.targets[0].addTempSkill('retieji');
                                    const result1 = await result.targets[0].chooseToDiscard('he', '是否弃置一张牌,视为对' + get.translation(trigger.source) + '使用一张【杀】？').set('ai', (card) => -get.attitude(result.targets[0], trigger.source) - get.value(card)).forResult();
                                    if (result1.cards && result1.cards[0]) {
                                        await result.targets[0].useCard({ name: 'sha' }, trigger.source, false);
                                        if (result.targets[0].hasHistory('sourceDamage', (evt) => evt.getParent(event.name) == event)) {
                                            await player.chooseDrawRecover();
                                            player.removeMark('爆衣_guo');
                                            player.unmarkSkill('爆衣_guo');
                                            if (player.storage.爆衣_guo == 1) {
                                                player.node.avatar.setBackgroundImage('extension/果包/image/yw.jpg');
                                            }
                                            if (player.storage.爆衣_guo == 1) {
                                                player.node.avatar.setBackgroundImage('extension/果包/image/yw1.jpg');
                                            }
                                            if (player.storage.爆衣_guo == 2) {
                                                player.node.avatar.setBackgroundImage('extension/果包/image/yw2.jpg');
                                            }
                                            if (player.storage.爆衣_guo == 3) {
                                                player.node.avatar.setBackgroundImage('extension/果包/image/yw3.jpg');
                                            }
                                            if (player.storage.爆衣_guo == 4) {
                                                player.node.avatar.setBackgroundImage('extension/果包/image/yw4.jpg');
                                            }
                                            if (player.storage.爆衣_guo > 4) {
                                                player.node.avatar.setBackgroundImage('extension/果包/image/yw4.jpg');
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        Q_kuizhu: {
                            audio: 'ext:果包/audio:2',
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            getNum(event) {
                                var num = 0;
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name == 'lose' && evt.getParent('phaseUse') == event) {
                                        if (evt.position == ui.discardPile) {
                                            num += evt.cards.length;
                                        }
                                    } else {
                                        if (evt.name == 'cardsDiscard') {
                                            num += evt.cards.length;
                                        }
                                    }
                                });
                                return num;
                            },
                            forced: true,
                            filter(event, player) {
                                return lib.skill.Q_kuizhu.getNum(event) > 0; //QQQ
                            },
                            content() {
                                'step 0';
                                event.num = lib.skill.Q_kuizhu.getNum(trigger);
                                event.num1 = 0;
                                ('step 1');
                                player.chooseTarget('请选择〖溃诛〗的目标', [1, event.num], false).ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 2');
                                if (result.targets?.length) {
                                    event.target = result.targets.sortBySeat();
                                    event.num = 0;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                var tar = event.target[event.num];
                                var list = ['摸一张牌', '受到一点伤害'];
                                var next = player.chooseControl(list);
                                next.set('prompt', '你选择令' + get.translation(tar));
                                ('step 4');
                                if (result.control == '摸一张牌') {
                                    event.target[event.num].draw();
                                    event.num1++;
                                } else {
                                    event.target[event.num].damage();
                                    event.num1--;
                                }
                                ('step 5');
                                event.num++;
                                if (event.num < event.target.length) {
                                    event.goto(3);
                                }
                                ('step 6');
                                if (event.num1 < 0) {
                                    player.loseHp();
                                }
                                ('step 7');
                                player.removeMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 0) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sl.jpg');
                                }
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sl1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sl2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sl3.jpg');
                                }
                                if (player.storage.爆衣_guo > 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sl3.jpg');
                                }
                                player.say('就让人家帮主人消灭干净吧～');
                            },
                        },
                        resunliang_chezheng2: {
                            mod: {
                                targetEnabled(card, player, target, now, storage) {
                                    if (!target.inRange(player) && target != player && player.isPhaseUsing()) {
                                        if (player.hasSkill('resunliang_chezheng')) {
                                            return false;
                                        }
                                    }
                                },
                            },
                        },
                        resunliang_chezheng: {
                            global: 'resunliang_chezheng2',
                            trigger: {
                                player: 'phaseDiscardAfter',
                            },
                            mark: true,
                            intro: {
                                content(player) {
                                    var player = _status.event.player;
                                    var num = player.getHistory('useCard', function (evtx) {
                                        return evtx.getParent('phaseUse');
                                    }).length;
                                    if (player.isPhaseUsing()) {
                                        return '本阶段你使用了' + num + '张牌';
                                    } else {
                                        return '不在你的出牌阶段';
                                    }
                                },
                            },
                            forced: true,
                            filter(event, player) {
                                var num = game.filterPlayer(function (current) {
                                    return current != player && !current.inRange(player);
                                }).length;
                                return (
                                    num > 0 &&
                                    player.getHistory('useCard', function (evtx) {
                                        return evtx.getParent('phaseUse');
                                    }).length < num
                                );
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('请选择〖掣政〗的目标', 1, false, function (card, player, target) {
                                    return target != player && !target.inRange(player);
                                }).ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.gainPlayerCard('he', target, true);
                                }
                            },
                        },
                        resunliang_lijun: {
                            global: 'resunliang_lijun1',
                            audio: 'nzry_lijun1',
                            zhuSkill: true,
                        },
                        resunliang_lijun1: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha' || player.group != 'wu') {
                                    return false;
                                }
                                if (!player.isPhaseUsing()) {
                                    return false;
                                }
                                if (
                                    !game.hasPlayer(function (target) {
                                        return player != target && target.hasZhuSkill('resunliang_lijun', player);
                                    })
                                ) {
                                    return false;
                                }
                                if (Array.isArray(event.cards)) {
                                    for (var i of event.cards) {
                                        if (get.position(i, true) == 'o') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = game.filterPlayer(function (target) {
                                    return player != target && target.hasZhuSkill('resunliang_lijun', player);
                                });
                                player.chooseTarget(get.prompt('nzry_lijun'), '将' + get.translation(trigger.cards) + '交给' + get.translation(list) + (list.length > 1 ? '中的一人' : ''), function (card, player, target) {
                                    return player != target && target.hasZhuSkill('resunliang_lijun', player);
                                }).ai = function (target) {
                                    return get.attitude(_status.event.player, target);
                                };
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                } else {
                                    event._result.bool = false;
                                    var zhu = result.targets[0];
                                    event.zhu = result.targets[0];
                                    player.line(zhu, 'green');
                                    var list = [];
                                    if (Array.isArray(trigger.cards)) {
                                        for (var i of trigger.cards) {
                                            if (get.position(i, true) == 'o') {
                                                list.push(i);
                                            }
                                        }
                                    }
                                    zhu.gain(list, 'gain2');
                                    zhu.chooseBool()
                                        .set('ai', function () {
                                            if (get.attitude(zhu, player) > 0) {
                                                return true;
                                            }
                                            return false;
                                        })
                                        .set('prompt', '是否令其摸一张牌');
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.draw();
                                }
                                event._result.bool = false;
                                var zhu = event.zhu;
                                var num = zhu.getHistory('useSkill', function (evt) {
                                    return evt.skill == 'resunliang_lijun';
                                }).length;
                                if (num == 1) {
                                    zhu.chooseBool()
                                        .set('ai', function () {
                                            if (get.attitude(zhu, player) > 0) {
                                                return true;
                                            }
                                            return false;
                                        })
                                        .set('prompt', '是否令此杀不计入次数？');
                                }
                                ('step 3');
                                if (result.bool) {
                                    trigger.addCount = false;
                                    if (player.stat[player.stat.length - 1].card.sha > 0) {
                                        player.stat[player.stat.length - 1].card.sha--;
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 3,
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        return num;
                                    }
                                },
                            },
                        },
                        sl_kuanggu: {
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return get.distance(player, event.player) <= 1 && event.num > 0;
                            },
                            audio: 'ext:果包/audio:2',
                            preHidden: true,
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                var choice;
                                if (
                                    player.isDamaged() &&
                                    get.recoverEffect(player) > 0 &&
                                    player.countCards('hs', function (card) {
                                        return card.name == 'sha' && player.hasValueTarget(card);
                                    }) >= player.getCardUsable('sha')
                                ) {
                                    choice = 'recover_hp';
                                } else {
                                    choice = 'draw_card';
                                }
                                var next = player.chooseDrawRecover(get.prompt(event.name));
                                next.set('choice', choice);
                                next.set('ai', function () {
                                    return _status.event.parent.choice;
                                });
                                next.setHiddenSkill('xinkuanggu');
                                ('step 2');
                                if (result.control != 'cancel2') {
                                    event.num--;
                                    if (event.num > 0) {
                                        event.goto(1);
                                    }
                                }
                                ('step 3');
                                player.addMark('爆衣_guo');
                                player.unmarkSkill('爆衣_guo');
                                if (player.storage.爆衣_guo == 1) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sl1.jpg');
                                }
                                if (player.storage.爆衣_guo == 2) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sl2.jpg');
                                }
                                if (player.storage.爆衣_guo == 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sl3.jpg');
                                }
                                if (player.storage.爆衣_guo > 3) {
                                    player.node.avatar.setBackgroundImage('extension/果包/image/sl3.jpg');
                                }
                            },
                        },
                    },
                };
                lib.config.all.characters.add('果包');
                lib.config.characters.add('果包');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:果包/image/${i}.jpg`);
                }
                lib.translate['果包_character_config'] = `果包`;
                return QQQ;
            });
        },
        config: {
            界面修改: {
                name: '<span class="Qmenu">界面修改</span>',
                intro: '开启后,拉长角色立绘以及右置手牌上限标志防止被挡住',
                init: false,
            },
            guobao_xuanze_game: {
                name: '冲虚游戏模式',
                init: 'game_new',
                item: {
                    game_old: '旧版游戏',
                    game_new: '新版游戏',
                },
            },
        },
        package: {
            card: {
                card: {
                    basic: {
                        fullskin: true,
                    },
                    trick: {
                        fullskin: true,
                    },
                    equip: {
                        fullskin: true,
                    },
                    buzhihuoshan: {
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -1,
                        },
                        skills: ['shanzi_skill'],
                        enable: true,
                        selectTarget: -1,
                        filterTarget(card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content() {
                            if (cards.length && get.position(cards[0], true) == 'o') {
                                target.equip(cards[0]);
                            }
                        },
                        toself: true,
                        image: `ext:果包/image/buzhihuoshan.jpg`,
                        ai: {
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
                    },
                },
                translate: {
                    buzhihuoshan: '花蝶扇',
                    buzhihuoshan_info: '武器,攻击范围2,锁定技,当你造成伤害时,你令该角色本轮下次受到伤害加一.',
                },
            },
            intro: "本扩展借鉴文无姬(英雄外传)后进行的创作,有些武将设计并不是很好,望见谅.<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '池鱼思故园',
            version: '1.0',
        },
    };
});

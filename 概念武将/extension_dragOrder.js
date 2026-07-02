'use strict';
window.zyile_import = function (lib, game, ui, get, ai, _status) {
    window.zyile_extension_Menu.dragOrder = {
        changeCharactercard: {
            name: '手杀武将详细框',
            init: true,
        },
        ShouShaCharacterCardOutcrop: {
            name: '手杀详细框露头',
            init: false,
            onclick(item) {
                document.body.dataset.shouShaCharacterCardOutcrop = item;
            },
        },
        dragCard: {
            name: '拖拽排序',
            intro: '手牌可以左右滑动进行排序.<li><storage>手机端超过20张手牌将自动禁用</storage>',
            init: true,
        },
        HandCardsScroll: {
            name: '显示滚动条',
            intro: '手牌显示滚动条,对移动端不友好.',
            onclick(item) {
                ui.window.dataset.handCardsScroll = item;
            },
            init: !lib.zyile_common.isMobile(),
        },
        zyile_sortCard: {
            name: '显示【整理手牌】',
            onclick(item) {
                if (item == true) {
                    if (!_status.gameStarted) {
                        return window.alert('暂未开始游戏');
                    }
                    ui.zyile_sortCard.classList.remove('zyile_hidden');
                }
            },
            init: true,
        },
        zyile_clickAll: {
            name: '显示【全选】按钮',
            onclick(item) {
                if (item == true) {
                    if (!_status.gameStarted) return window.alert('暂未开始游戏');
                    ui.zyile_clickAll.classList.remove('zyile_hidden');
                }
            },
            init: false,
        },
        zyile_sortCard_save_position: {
            name: '记住【整理手牌】位置',
            init: true,
        },
        layer_turnedover: {
            name: '翻面效果',
            onclick(item) {
                document.body.dataset.turnedover = item ? 'on' : 'off';
            },
            init: true,
        },
        zyile_Interface_dialog_info: {
            name: '更改信息框',
            intro: '<li>武将的技能介绍框变为定位</li>',
            init: false,
        },
        zyile_Interface_dialog: {
            name: '更改dialog',
            item: {
                HuanFuKuang: '<div style="width:60px;height:40px;position:relative;background-image: url(extension/概念武将/HuanFuKuang.png);background-size: 100% 100%;"></div>',
                InfoKuang: '<div style="width:60px;height:40px;position:relative;background-image: url(extension/概念武将/InfoKuang.png);background-size: 100% 100%;"></div>',
                close: '关闭',
            },
            intro: '<li>更改dialog和长按框(该框可强制移动,方法跟之前一样)</li><li>注:需要重启</li>',
            init: (function () {
                if (lib.zyile_common) if (lib.zyile_common.isMobile()) return 'HuanFuKuang';
                return 'InfoKuang';
            })(),
        },
        zyile_3D_button: {
            name: '更改按钮',
            item: {
                '3D': '3D按钮',
                dialog: '<img src="extension/概念武将/dialog_button_normal.png" alt="dialog按钮,下载素材可显示">',
                wide: '<img src="extension/概念武将/wide_button_normal.png" alt="wide按钮,下载素材可显示">',
                btn: '<img src="extension/概念武将/game_btn_ok.png" style="zoom:.7" alt="btn按钮,下载素材可显示">',
                close: '关闭',
            },
            onclick(item) {
                ui.window.dataset.zyileButton = item;
                var handleEvent = function (e) {
                    if (this._3D_Click) return undefined;
                    this.style.top = this.offsetTop + 3 + 'px';
                    var endup = (e) => {
                        this.style.top = this.offsetTop - 3 + 'px';
                        window.removeEventListener(e.type, endup, true);
                    };
                    window.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', endup, true);
                };
                if (item === '3D') {
                    [].slice.call(control.querySelectorAll('.control')).forEach((value) => {
                        value.classList.add('btn', 'btn-primary', 'dim');
                        value.css({
                            fontSize: '18px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            padding: '2.5px 4.5px',
                            top: '-6px',
                        });
                        !value._3D && value.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', handleEvent.bind(value), true);
                        value._3D = true;
                        value._3D_Click = null;
                    });
                } else {
                    [].slice.call(control.querySelectorAll('.control')).forEach((value) => {
                        value.classList.remove('btn', 'btn-primary', 'dim');
                        value.css({
                            fontSize: '',
                            whiteSpace: '',
                            overflow: '',
                            padding: '',
                            top: '',
                        });
                        value._3D_Click = true;
                    });
                }
                setTimeout(() => {
                    ui.updatec();
                }, 260);
            },
            intro: '<li>更改按钮样式</li><li>注:需要重启</li>',
            init: (function () {
                if (lib.zyile_common) return lib.zyile_common.isMobile() ? 'dialog' : '3D';
                return 'dialog';
            })(),
        },
        zyile_zhongchi: {
            name: '重置【整理手牌】按钮',
            clear: true,
            intro: '在开启了【整理手牌】按钮却找不到【整理手牌】按钮时时点击重置其位置.(憨憨作者',
            onclick() {
                if (ui.zyile_sortCard && getComputedStyle(ui.zyile_sortCard, null).display !== 'none') {
                    ui.zyile_sortCard.style.transform = '';
                    ui.zyile_sortCard._translate = [0, 0];
                    game.saveConfig('zyile_sortCard_save_position', (lib.config.zyile_sortCard_save_position = [0, 0]));
                    lib.zyile_layer.msg('重置完毕', {
                        protype: 2,
                        time: 1e3,
                        icon: 1,
                    });
                } else
                    lib.zyile_layer.msg('无按钮', {
                        protype: 4,
                        time: 1e3,
                        icon: 2,
                    });
            },
        },
        info: '用户界面',
    };
    let remote, BrowserWindow;
    if (window.require) {
        remote = window.require('electron').remote;
        if (remote) {
            BrowserWindow = remote.BrowserWindow;
            BrowserWindow.mainWindow = BrowserWindow.getAllWindows()[0];
            window.zyile_extension_Menu.dragOrder.AutoChangeCharactercardSize = {
                name: '自动调整窗口大小',
                init: true,
                intro: '武将详细界面自动调整无名杀窗口大小',
            };
        }///QQQ
    }
    if (game.getExtensionConfig('概念武将', 'isFullScreenable')) {
        BrowserWindow.mainWindow.setFullScreen(true);
    }
    if (BrowserWindow) {
        window.zyile_extension_Menu.dragOrder.isFullScreenable = {
            name: '全屏',
            intro: '开启此选项后启动游戏会自动全屏',
            onclick(item) {
                BrowserWindow.mainWindow.setFullScreen(!BrowserWindow.mainWindow.isFullScreen());
            },
            init: BrowserWindow.mainWindow.isFullScreen(),
        };
    }
    //---------------------------------   隔离   ---------------------------------//
    for (let i in window.zyile_extension_Menu) {
        for (let j in window.zyile_extension_Menu[i]) {
            let info = window.zyile_extension_Menu[i];
            if (lib.config['extension_概念武将_' + j] === undefined && info[j] && info[j].hasOwn('init')) {
                lib.config['extension_概念武将_' + j] = info[j].init;
                game.saveConfig('extension_概念武将_' + j, lib.config['extension_概念武将_' + j]);
            }
        }
    }
    document.body.dataset.turnedover = game.getExtensionConfig('概念武将', 'layer_turnedover') ? 'on' : 'off';
    lib.zyileReadContentLoaded.push(function () {
        ui.window.dataset.zyileButton = game.getExtensionConfig('概念武将', 'zyile_3D_button');
        ui.window.dataset.handCardsScroll = game.getExtensionConfig('概念武将', 'HandCardsScroll');
    });
    var hasTouch = 'ontouchstart' in document.documentElement,
        startEvent = hasTouch ? 'touchstart' : 'mousedown',
        moveEvent = hasTouch ? 'touchmove' : 'mousemove',
        endEvent = hasTouch ? 'touchend' : 'mouseup';
    lib.zyile_dragOredr = {
        scrollAmount: 5,
        /** 灵敏度设置将降低运动检测的触发率 */
        sensitivity: 10,
        /** 当前所包含的区域 */
        container: null,
        /** 保持当前拖动对象(如果有) */
        dragObject: null,
        /** 当前鼠标偏移量 */
        mouseOffset: null,
        /** 实际建造结构 */
        build(options) {
            // 如果有的话,设置默认值
            // 它绑定到每个匹配的表,设置默认值并使用用户选项覆盖
            options = options || {};
            var extend = {
                onDragStyle: null,
                onDropStyle: null,
                // 添加whileDrag的默认类
                onDragClass: 'dragCard',
                // 仅限某一种类型  未做
                Itemtype: null,
                // 拖拽停下来触发的事件
                onDrop: null,
                // 拖拽开始时触发的事件
                onDragStart: null,
                /** 负责滚动的元素 */
                scrollElement: null,
                scrollAmount: 26,
                /** 灵敏度设置将降低运动检测的触发率 */
                sensitivity: 10,
                /** 元素是否缩放了 */
                zoom: 1,
            };
            for (var i in options) if (options[i]) extend[i] = options[i];
            this.config = extend;
            // 现在使行可拖动
            this.makeDraggable(this);
            // 不要打破链条
            return this;
        },
        /*** 自动滚动条 */
        autoScroll(mousePos) {
            var config = this.container.config,
                scrollElement = config.scrollElement || this.container,
                box = this.getPosition(scrollElement),
                xOffset = mousePos.x - box.left,
                yOffset = mousePos.y - box.top,
                containerWidth = scrollElement.clientWidth,
                containerHeight = scrollElement.clientHeight;
            //仅限Windows版本
            if (xOffset - containerWidth >= config.scrollAmount || xOffset >= box.width - config.scrollAmount) {
                scrollElement.scrollLeft += config.scrollAmount;
            } else if ((xOffset + box.width / 10 <= config.scrollAmount && xOffset >= -config.scrollAmount) || mousePos.x <= box.left + config.scrollAmount) {
                scrollElement.scrollLeft -= config.scrollAmount;
            }
        },
        /** 这个函数使表中的所有行都可以拖放,而不包括那些标记为<NoDrag>的行. */
        makeDraggable(container) {
            var config = container.config;
            this.addEventListener(startEvent, function (e) {
                if (!lib.config.extension_概念武将_dragCard) return;
                if (typeof config.onStartEvent === 'function' && config.onStartEvent.call(this, config) === false) return;
                if (e.touches && e.touches[0]) e = e.touches[0];
                var source = e.target;
                if (get.itemtype(source) != 'card') {
                    while (source) {
                        if (get.itemtype(source) == 'card') break;
                        source = source.parentNode;
                    }
                }
                if (get.itemtype(source) == 'card') {
                    lib.zyile_dragOredr.initialiseDrag(source, container, source, e, config);
                }
            });
        },
        initialiseDrag(dragObject, container, target, e, config) {
            this.dragObject = dragObject;
            this.container = container;
            var scrollElement = config.scrollElement || container;
            // 如果有onDragStart方法,则调用它,如果它返回的是false则不会继续执行了.
            if (config.onDragStart && config.onDragStart(container, target) == false) return void 0;
            // 现在我们需要捕捉鼠标点击上和鼠标移动事件
            // 我们可以使用addEventListener,这样就不会干扰其他事件处理程序
            scrollElement.addEventListener(moveEvent, this.EventDe, {
                capture: true,
                passive: false,
                once: false,
            });
            document.addEventListener(moveEvent, this.mousemove, {
                capture: true,
                passive: false,
                once: false,
            });
            document.addEventListener(endEvent, this.mouseup);
        },
        EventDe(e) {
            if (!lib.zyile_common.isMobile()) return undefined;
            /*e.preventDefault();*/
            e.stopPropagation();
        },
        mousemove(e) {
            var dragObj = lib.zyile_dragOredr.dragObject,
                config = lib.zyile_dragOredr.container.config,
                container = lib.zyile_dragOredr.container,
                currentRow;
            //e && e.preventDefault();
            e && e.stopPropagation();
            if (!dragObj || lib.zyile_dragOredr.animated) return false;
            // 防止触摸设备屏幕滚动
            /*e.type == 'touchmove'
            && event.preventDefault(); // 验证这是事件,而不是真的e*/
            if (e.touches && e.touches[0]) e = e.touches[0];
            // 更新样式以显示我们正在拖动
            (config.onDragClass && dragObj.classList.add(config.onDragClass)) || dragObj.css(config.onDragStyle);
            // 自动滚动窗口
            !lib.zyile_common.isMobile() && lib.zyile_dragOredr.autoScroll(lib.zyile_dragOredr.mouseCoords(e));
            currentRow = lib.zyile_dragOredr.findDropTarget(dragObj, e.clientX, e.clientY);
            if (!currentRow || dragObj == currentRow || dragObj.parentNode != currentRow.parentNode) return false;
            lib.zyile_dragOredr.moveVerticle(dragObj, currentRow, e);
            return false;
        },
        /**
         定位拖动对象
         */
        findDropTarget(draggedRow, x, y) {
            var config = this.container.config,
                box = this.getPosition(draggedRow),
                source = document.elementFromPoint(x, y),
                scrollElement = config.scrollElement || this.container,
                lastBox = this.getPosition(this.container.lastElementChild),
                firstBox = this.getPosition(this.container.firstElementChild),
                conBox = this.getPosition(scrollElement),
                conBoxK = conBox.width + conBox.left,
                eley = box.y + draggedRow.offsetHeight;
            while (source) {
                if (get.itemtype(source) == 'card') return source;
                source = source.parentNode;
            }
            if (get.itemtype(source) != 'card') {
                source = document.elementFromPoint(x, box.y);
                while (source) {
                    if (get.itemtype(source) == 'card') return source;
                    source = source.parentNode;
                }
                source = document.elementFromPoint(x, eley);
                while (source) {
                    if (get.itemtype(source) == 'card') return source;
                    source = source.parentNode;
                }
            }
            if (x >= conBoxK) {
                source = document.elementFromPoint(conBoxK - draggedRow.offsetWidth / 2, eley);
                while (source) {
                    if (get.itemtype(source) == 'card') return source;
                    source = source.parentNode;
                }
                return this.container.lastElementChild;
            } else if (x <= conBox.left) {
                source = document.elementFromPoint(conBox.left + draggedRow.offsetWidth / 2, eley);
                while (source) {
                    if (get.itemtype(source) == 'card') return source;
                    source = source.parentNode;
                }
                return this.container.firstElementChild;
            }
            if (x >= lastBox.right) {
                return this.container.lastElementChild;
            } else if (x <= firstBox.left) {
                return this.container.firstElementChild;
            }
            return null;
        },
        moveVerticle(dragObj, currentRow, e) {
            var config = this.container.config,
                ObjIndx = this._index(dragObj),
                RowIndx = this._index(currentRow);
            if (ObjIndx < RowIndx) {
                this.dragObject.parentNode.insertBefore(this.dragObject, currentRow.nextElementSibling);
            } else {
                this.dragObject.parentNode.insertBefore(this.dragObject, currentRow);
            }
            config.onDragMove && config.onDragMove(this.dragObject, currentRow, ObjIndx, RowIndx, this._index(this.dragObject));
            !lib.zyile_common.isMobile() && this.autoScroll(this.mouseCoords(e));
            clearTimeout(lib.zyile_dragOredr.animated);
            lib.zyile_dragOredr.animated = setTimeout(function () {
                delete lib.zyile_dragOredr.animated;
            }, 200);
        },
        _index(el) {
            var index = 0;
            if (!el || !el.parentNode) {
                return -1;
            }
            while (el && (el = el.previousElementSibling)) {
                index++;
            }
            return index;
        },
        mouseup(e) {
            /*e && e.preventDefault();*/
            e && e.stopPropagation();
            lib.zyile_dragOredr.processMouseup();
            return false;
        },
        processMouseup() {
            var config = this.container.config,
                droppedRow = this.dragObject,
                parentLevel = 0,
                myLevel = 0,
                scrollElement = config.scrollElement || this.container;
            if (!this.container || !droppedRow) return null;
            // 取消绑定事件处理程序
            document.removeEventListener(moveEvent, this.mousemove, {
                capture: true,
                passive: false,
                once: false,
            });
            document.removeEventListener(endEvent, this.mouseup);
            scrollElement.removeEventListener(moveEvent, this.EventDe, {
                capture: true,
                passive: false,
                once: false,
            });
            // 回复事件
            var config = this.container.config,
                scrollElement = config.scrollElement || this.container;
            // 如果我们有一个dragObject,那么我们需要释放它,
            // 这一行已经被移到了正确的位置所以我们重置了这些
            (config.onDragClass && droppedRow.classList.remove(config.onDragClass)) || droppedRow.css(config.onDropStyle);
            this.dragObject = null;
            // 如果有onDrop方法,则调用它
            config.onDrop && config.onDrop(droppedRow);
            this.container = null; //当前包容器也清空 let go of the table too
        },
        /** 从事件中获取鼠标坐标(允许浏览器差异) */
        mouseCoords(e) {
            if (e.pageX || e.pageY)
                return {
                    x: e.pageX,
                    y: e.pageY,
                };
            return {
                x: e.clientX + document.body.scrollLeft - document.body.clientLeft,
                y: e.clientY + document.body.scrollTop - document.body.clientTop,
            };
        },
        /** 获得元素的位置 */
        getPosition(element) {
            var box = element.getBoundingClientRect(),
                config = this.container.config,
                zoom = config.zoom || 1,
                boxCopy = {
                    x: box.left * zoom,
                    y: box.top * zoom,
                    width: box.width * zoom,
                    height: box.height * zoom,
                    top: box.top * zoom,
                    right: box.right * zoom,
                    bottom: box.bottom * zoom,
                    left: box.left * zoom,
                };
            return boxCopy;
        },
    };
    for (var i in lib.zyile_dragOredr) {
        HTMLDivElement.prototype[i] = lib.zyile_dragOredr[i];
    }
    Reflect.defineProperty(_status, 'gameStarted', {
        get() {
            return this._gameStarted;
        },
        set(v) {
            if (!this.hasOwn('_gameStarted')) {
                /**
                 * 添加拖动手牌事件,显示整理按钮
                 * @type {(this:Window, ev: Event) => any}
                 */
                var mousewheel1 = ui.handcards1Container.onmousewheel,
                    mousewheel2 = ui.handcards2Container.onmousewheel,
                    longpressed = null,
                    options = {
                        scrollElement: ui.handcards1Container,
                        onDragStart(container, target) {
                            _status.dragged = true;
                            longpressed = _status.longpressed;
                            _status.longpressed = false;
                        },
                        onStartEvent(config) {
                            if (lib.zyile_common.isMobile()) return this.childElementCount > 20 ? false : true;
                            return true;
                        },
                        onDragMove(currentRow, target, ObjIndx, RowIndx, ObjMoveIndx) {
                            //currentRow当前拖动得对象 target要拖过去得对象 ObjIndx未拖动过去的下标 RowIndx要拖动过去的下标 ObjMoveIndx托玩后的下表
                            if (ObjIndx != ObjMoveIndx) ui.updatehl();
                            _status.dragged = true;
                            _status.longpressed = false;
                        },
                        onDrop(currentRow) {
                            _status.dragged = null;
                            _status.longpressed = longpressed;
                        },
                    };
                if (lib.zyile_common.isMobile()) options.zoom = 0.7452;
                ui.handcards1.build(options);
                options.scrollElement = ui.handcards2Container;
                ui.handcards2.build(options);
                window.zyile_dragZoom(ui.zyile_sortCard, document.body);
                if (lib.config.extension_概念武将_zyile_sortCard) {
                    ui.zyile_sortCard.classList.remove('zyile_hidden');
                }
                lib.config.extension_概念武将_zyile_clickAll && ui.zyile_clickAll.classList.toggle('zyile_hidden');
                window.zyile_dragZoom(ui.zyile_clickAll, document.body);
            }
            this._gameStarted = v;
        },
    });
    /**
     * 整理手牌
     */
    ui.zyile_sortCard = ui.create.zyile_node(
        'button.btn.btn-primary.dim.zyile_hidden',
        '整理手牌',
        {
            left: '814px',
            top: '412px',
            zIndex: 19,
            position: 'fixed',
        },
        document.body
    );
    //移动到指定位置
    if (lib.config.extension_概念武将_zyile_sortCard_save_position) {
        var translate = lib.config.zyile_sortCard_save_position || [0, 0];
        ui.zyile_sortCard._translate = translate;
        ui.zyile_sortCard.style.transform = 'translate(' + translate[0] + 'px,' + translate[1] + 'px)';
    }
    //触发整理手牌事件
    ui.zyile_sortCard.addEventListener(
        'endDang',
        function (event) {
            event.stopPropagation();
            if (!game.me) return void 0;
            var hs = game.me.getCards('h');
            if (!hs.length) return;
            game.addVideo('lose', game.me, [get.cardsInfo(hs), [], []]);
            for (var i = 0; i < hs.length; i++) {
                hs[i].goto(ui.special);
            }
            hs.sort(function (b, a) {
                if (a.name != b.name) return lib.sort.card(a.name, b.name);
                else if (a.suit != b.suit) return lib.suit.indexOf(a) - lib.suit.indexOf(b);
                else return a.number - b.number;
            });
            game.me.directgain(hs, false);
        },
        true
    );
    ui.zyile_sortCard.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function (e) {
        var endup = function (e) {
            ui.zyile_sortCard.style.top = ui.zyile_sortCard.offsetTop - 3 + 'px';
            window.removeEventListener(e.type, endup, true);
        };
        ui.zyile_sortCard.style.top = ui.zyile_sortCard.offsetTop + 3 + 'px';
        window.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', endup, true);
    });
    //保存按钮位置
    ui.zyile_sortCard.addEventListener(
        'moveStop',
        function (event) {
            event.stopPropagation();
            if (lib.config.extension_概念武将_zyile_sortCard_save_position) {
                var translate = this._translate.slice(0);
                lib.config.zyile_sortCard_save_position = translate;
                game.saveConfig('zyile_sortCard_save_position', translate);
            }
        },
        true
    );
    /**
     * 全选
     */
    ui.zyile_clickAll = ui.create.zyile_node(
        'button.btn.btn-primary.dim.zyile_hidden',
        '全选',
        {
            left: '714px',
            top: '412px',
            zIndex: 19,
            position: 'fixed',
        },
        document.body
    );
    /**
     * 触发事件
     */
    ui.zyile_clickAll.addEventListener(
        'endDang',
        (e) => {
            e.stopPropagation();
            if (!game.me) return void 0;
            for (let i of game.me.getCards('hej').filter((value) => value.classList.contains('selectable'))) {
                _status.dragged = false;
                _status.clicked = false;
                i.dispatchEvent(new Event(lib.zyile_common.isMobile() ? 'touchend' : 'click'));
            }
        },
        true
    );
    if (lib.config.zyile_clickAll_save_position) {
        var translate = lib.config.zyile_clickAll_save_position || [0, 0];
        ui.zyile_clickAll._translate = translate;
        ui.zyile_clickAll.style.transform = 'translate(' + translate[0] + 'px,' + translate[1] + 'px)';
    }
    //保存按钮位置
    ui.zyile_clickAll.addEventListener(
        'moveStop',
        function (event) {
            event.stopPropagation();
            let translate = this._translate.slice(0);
            lib.config.zyile_clickAll_save_position = translate;
            game.saveConfig('zyile_clickAll_save_position', translate);
        },
        true
    );
    ui.zyile_clickAll.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function (e) {
        var endup = function (e) {
            ui.zyile_clickAll.style.top = ui.zyile_clickAll.offsetTop - 3 + 'px';
            window.removeEventListener(e.type, endup, true);
        };
        ui.zyile_clickAll.style.top = ui.zyile_clickAll.offsetTop + 3 + 'px';
        window.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', endup, true);
    });
    ui.create.control = function () {
        var nc = !ui.control.querySelector('div:not(.removing):not(.stayleft)');
        var i, controls;
        var nozoom = false;
        if (Array.isArray(arguments[0])) controls = arguments[0];
        else controls = arguments;
        var control = ui.create.div('.control');
        var button = game.getExtensionConfig('概念武将', 'zyile_3D_button');
        if (button === '3D') {
            control.classList.add('btn', 'btn-primary', 'dim');
            control.css({
                fontSize: '18px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                padding: '2.5px 4.5px',
                top: '-6px',
            });
            control._3D = true;
            control.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function (e) {
                if (this._3D_Click) return undefined;
                var endup = function (e) {
                    control.style.top = control.offsetTop - 3 + 'px';
                    window.removeEventListener(e.type, endup, true);
                };
                control.style.top = control.offsetTop + 3 + 'px';
                window.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', endup, true);
            });
        }
        ui.control.insertBefore(control, _status.createControl || ui.confirm);
        Object.setPrototypeOf(control, lib.element.Control.prototype);//QQQ
        for (i = 0; i < controls.length; i++) {
            if (typeof controls[i] == 'function') {
                control.custom = controls[i];
            } else if (controls[i] == 'nozoom') {
                nozoom = true;
            } else if (controls[i] == 'stayleft') {
                control.stayleft = true;
                control.classList.add('stayleft');
            } else {
                control.add(controls[i]);
                if (button === 'btn') if (['结束回合', '取消', 'cancel'].includes(controls[i]) && !['确认', 'ok'].includes(control[i])) control.classList.add('cancelButton');
            }
        }
        ui.controls.unshift(control);
        if (nc) {
            ui.control.addTempClass('nozoom', 100);
        }
        if (control.childNodes.length) {
            control.style.transition = 'opacity 0.5s';
            control.addTempClass('controlpressdownx', 500);
            ui.refresh(control);
            if (!control.stayleft) {
                control.style.transform = 'translateX(-' + control.offsetWidth / 2 + 'px)';
            }
            control.style.opacity = 1;
            ui.refresh(control);
            control.style.transition = '';
        }
        control.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.control2);
        if (lib.config.button_press) {
            control.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
                if (this.classList.contains('disabled')) return;
                this.classList.add('controlpressdown');
                if (typeof this._offset == 'number') {
                    this.style.transform = 'translateX(' + this._offset + 'px) scale(0.97)';
                }
            });
            control.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
                this.classList.remove('controlpressdown');
                if (typeof this._offset == 'number') {
                    this.style.transform = 'translateX(' + this._offset + 'px)';
                }
            });
        }
        ui.updatec();
        return control;
    };
    if (game.getExtensionConfig('概念武将', 'ShouShaCharacterCardOutcrop')) {
        document.body.dataset.shouShaCharacterCardOutcrop = true;
    }
    let charactercard = ui.click.charactercard;
    ui.click.charactercard = function (name, sourcenode, noedit, resume, avatar) {
        var getSize;
        if (window.require && game.getExtensionConfig('概念武将', 'AutoChangeCharactercardSize')) {
            getSize = BrowserWindow.mainWindow.getSize().slice(0);
            BrowserWindow.mainWindow.setSize(1111, 666);
        }
        if (_status.dragged) return;
        if (!game.getExtensionConfig('概念武将', 'changeCharactercard')) return charactercard.apply(this, arguments);
        let info = lib.character[name];
        if (!info) return false;
        let nameskin = name,
            nameskin2 = name;
        let background = ui.create.zyile_node(
            'div.zyileScreen.popup-container',
            {
                backgroundSize: '100% 100%',
            },
            document.body
        );
        background.setBackgroundImage('extension/概念武将/ShouShaCharacterCard/bg.jpg');
        //
        let utils = ui.create.zyile_node(background, {
            cssText: `display: flex;
                     position: relative;
                     flex-direction: column-reverse;
                     top: -5%;`,
        });
        // 换肤
        ui.create.zyile_node('div.zyileShouShaSkin', utils, (event) => {
            event.stopPropagation();
            game.playAudio('../extension/概念武将/ShouShaCharacterCard/button_skin.mp3');
            let node = ui.create.zyile_node(
                'div.zyileSkinBox',
                (event) => event.stopPropagation(),
                ui.create.zyile_node(
                    'div.popup-container',
                    {
                        backgroundColor: 'rgba(0, 0, 1, 0.4)',
                    },
                    background,
                    function (event) {
                        event.stopPropagation();
                        this.delete();
                    }
                ),
                {
                    zIndex: 10,
                }
            );
            ui.create.zyile_node('div.zyileArrowLeft', node).onclick = function (event) {
                event.stopPropagation();
                game.playAudio('../extension/概念武将/ShouShaCharacterCard/button_chooseskin.mp3');
                let num = 6;
                clearInterval(node.container.interval);
                node.container.interval = setInterval(function () {
                    if (num-- && node.container.scrollLeft > 0) {
                        node.container.scrollLeft -= 30;
                    } else {
                        clearInterval(node.container.interval);
                    }
                }, 16);
            };
            ui.create.zyile_node('div.zyileArrowRight', node).onclick = (event) => {
                event.stopPropagation();
                game.playAudio('../extension/概念武将/ShouShaCharacterCard/button_chooseskin.mp3');
                let num = 6;
                clearInterval(node.container.interval);
                node.container.interval = setInterval(function () {
                    if (num-- && Math.abs(node.container.scrollLeft + node.container.clientWidth - node.container.scrollWidth) > 0) {
                        node.container.scrollLeft += 30;
                    } else {
                        clearInterval(node.container.interval);
                    }
                }, 16);
            };
            node.container = ui.create.zyile_node('div.zyileSkinBoxContainer', node, (event) => event.stopPropagation());
            node.container.onmousewheel = ui.click.mousewheel;
            node.container._scrollspeed = 30;
            node.content = ui.create.zyile_node('div.zyileSkinBoxContent', node.container, (event) => event.stopPropagation());
            let ImageRe = /\.jpg$|\.webp$|\.png$|\.jpeg$|\.gif$/i;
            let yxy = ui.create.zyile_node('div.zyileSkinBgYellow');
            let createButtons = function (num, src, _src) {
                if (lib.config.touchscreen) {
                    lib.setScroll(node.container);
                }
                let name = num;
                if (typeof num == 'string') {
                    if (num.lastIndexOf('(') !== -1) {
                        name = num.slice(0, num.lastIndexOf('('));
                    } else if (num.lastIndexOf('.') !== -1) {
                        name = num.slice(0, num.lastIndexOf('.'));
                    }
                    name = name.replace(nameskin2, '').replace(/^_pifu[0-9]/g, '');
                    if (name.match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]', 'g')) === null) {
                        name = get.translation(nameskin2);
                    }
                }
                if (typeof name === 'number') name = get.translation(nameskin2);
                let FragmentSysImg = document.createDocumentFragment(),
                    SyscImage = ui.create.zyile_node('img');
                SyscImage.src = src;
                FragmentSysImg.appendChild(SyscImage);
                let button = ui.create.div(
                    node.content,
                    {
                        backgroundSize: 'cover',
                        height: '170px',
                        width: '130px',
                        top: '35px',
                        position: 'relative',
                        cursor: 'pointer',
                        marginLeft: '40px',
                        borderRadius: '8px',
                        backgroundPositionX: 'center',
                    },
                    function (e) {
                        !lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'] && game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', (lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'] = {}));
                        if (button._link) {
                            //不是扩展皮肤
                            if (window.decodeURI(_src).toString().indexOf('extension') === -1) {
                                lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin] = this._link;
                                game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                            }
                            //这是 是否开启了解锁	_Unlock
                            if (this.hasOwn('_Unlock') && lib.config[[nameskin] + '_pifu_' + [this._link] + '_' + isExtensionSkin + '_goumai'] !== true) {
                                if (lib.config[this._Unlock.currency] - this._Unlock.quantity < 0) {
                                    lib.zyile_layer.msg('货币不足!', {
                                        icon: 2,
                                        protype: 4,
                                        time: 5e2,
                                    });
                                    return;
                                } else {
                                    lib.config[lib.config[this._Unlock.currency]] = lib.config[lib.config[this._Unlock.currency]] - this._Unlock.quantity;
                                    game.saveConfigValue(this._Unlock.currency);
                                    try {
                                        lib.config.extension_概念武将_zyile_coin_update && eval('"use strict";{' + lib.config.extension_概念武将_zyile_coin_update.toString() + '}');
                                    } catch (e) {
                                        if (config.skin_update_error) {
                                            game.log('extension_概念武将_zyile_coin_update:' + e);
                                            game.print('extension_概念武将_zyile_coin_update:' + e);
                                            lib.zyile_layer.alert(e.toString(), { title: '更新货币时出错!', icon: 2 });
                                            console.warn(e);
                                        }
                                    }
                                    this._page.remove();
                                    lib.config[[nameskin] + '_pifu_' + [this._link] + '_' + this.isExtensionSkin + '_goumai'] = true;
                                    game.saveConfig([nameskin] + '_pifu_' + [this._link] + '_' + this.isExtensionSkin + '_goumai', true);
                                    lib.zyile_layer.msg('解锁成功', { icon: 1, item: 5e2 });
                                }
                            }
                        }
                        //开始武将换肤
                        if (sourcenode) sourcenode.style.backgroundImage = this.style.backgroundImage;
                        avatarx.style.backgroundImage = this.style.backgroundImage;
                        if (avatar) avatar.style.backgroundImage = this.style.backgroundImage;
                        //保存扩展上换肤的路径
                        if (Array.isArray(lib.character[nameskin][4]) && lib.character[nameskin][4].length > 0) {
                            for (let i = 0; i < lib.character[nameskin][4].length; i++) {
                                if (lib.character[nameskin][4][i].indexOf('ext') !== -1) {
                                    if (window.decodeURI(this._src).indexOf('extension') !== -1) {
                                        let Ufem8 = 'ext:' + this._src.slice(this._src.lastIndexOf('extension/') + 10);
                                        if (!lib.config.zyile_Skin) lib.config.zyile_Skin = {};
                                        lib.config.zyile_Skin[nameskin] = window.decodeURI(Ufem8);
                                        game.saveConfig('zyile_Skin', lib.config.zyile_Skin);
                                        lib.character[nameskin][4][i] = window.decodeURI(Ufem8);
                                        break;
                                    } else {
                                        lib.character[nameskin][4][i] = lib.character[nameskin][4][i] + '../../../../' + _src;
                                        lib.config.zyile_Skin[nameskin] = lib.character[nameskin][4][i];
                                        game.saveConfigValue('zyile_Skin');
                                    }
                                } else {
                                    lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin] = this._link;
                                    lib.character[nameskin][4][i] = window.decodeURI(lib.character[nameskin][4][i].replace(/ext:/g, 'extension/'));
                                    game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                                }
                            }
                        } else {
                            lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin] = this._link;
                            this._link && this._link.toString && (lib.character[nameskin][4] = [this._link.toString()]);
                            game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                        }
                        //如果是原画的话直接清空不保存.
                        if (!this._link) {
                            delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin];
                            game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                        }
                        this.appendChild(yxy);
                        yxy.finished = true;
                        //这里是换肤换语音代码    很完善了(bushi
                        if (lib.config.extension_概念武将_zyile_Skin_Audio) {
                            let skills = lib.character[nameskin][3].slice(0),
                                str = this._link ? `武将:${get.translation(nameskin)}<br>` : `删除【${get.translation(nameskin).fontcolor('red')}】换肤换音配置<br>`;
                            let getSkillAudio = (info, audioname) => {
                                if (info.audioname2 && info.audioname2[player.name]) {
                                    audioname = info.audioname2[player.name];
                                    info = lib.skill[audioname];
                                }
                                let audioinfo = info.audio;
                                if (audioinfo === false || !audioinfo) return false;
                                if (typeof audioinfo == 'string' && lib.skill[audioinfo]) {
                                    audioname = audioinfo;
                                    audioinfo = lib.skill[audioname].audio;
                                }
                                if (typeof audioinfo === 'string') {
                                    if (audioinfo.indexOf('ext:') === 0) {
                                        audioinfo = audioinfo.split(':');
                                        return [audioname, `../../../extension/${audioinfo[1]}/${this._link}`];
                                    }
                                } else if (Array.isArray(audioinfo)) {
                                    audioname = audioinfo[0];
                                    audioinfo = null;
                                }
                                //检查同一技能不同武将触发不同语音
                                if (Array.isArray(info.audioname) && that) {
                                    if (info.audioname.includes(that.name)) {
                                        audioname += '_' + that.name;
                                    } else if (info.audioname.includes(that.name1)) {
                                        audioname += '_' + that.name1;
                                    } else if (info.audioname.includes(that.name2)) {
                                        audioname += '_' + that.name2;
                                    } else if (info.audioname.includes(that.link)) {
                                        audioname += '_' + that.link;
                                    }
                                }
                                return audioname;
                            };
                            let addGroup = (info) => {
                                let _skills = [].concat(info.group);
                                skills.addArray(_skills);
                                _skills.map((value) => {
                                    let infox = lib.skill[value];
                                    if (!infox || !infox.group) return false;
                                    addGroup(info);
                                });
                            };
                            skills.slice(0).filter((value) => {
                                let info = lib.skill[value];
                                if (!info) return skills.remove(value);
                                if (!info.derivation) info.derivation = [];
                                if (info.group) addGroup(info);
                                skills.addArray([].concat(info.derivation));
                            });
                            for (const i of skills) {
                                let info = get.info(i);
                                if (!info) continue;
                                let audioname = getSkillAudio(info, i);
                                if (audioname === false) continue;
                                let flag = false;
                                if (Array.isArray(audioname)) flag = true;
                                //原画就删除保存的换肤换语音配置
                                if (!this._link) {
                                    delete lib.config.zyile_Skin_Audio[nameskin];
                                    game.saveConfig('zyile_Skin_Audio', lib.config.zyile_Skin_Audio);
                                    if (game.getExtensionConfig('概念武将', 'zyile_Skin_Audio_Re_prompt')) {
                                        str += `${get.translation(i).fontcolor('red')}<br>`;
                                    }
                                    continue;
                                }
                                if (!get.is.object(lib.config.zyile_Skin_Audio[nameskin])) {
                                    lib.config.zyile_Skin_Audio[nameskin] = {};
                                }
                                if (flag) {
                                    lib.config.zyile_Skin_Audio[nameskin][audioname[0]] = audioname[1];
                                    lib.config.zyile_Skin_Audio[nameskin][nameskin] = audioname[1];
                                } else {
                                    lib.config.zyile_Skin_Audio[nameskin][audioname] = this._link;
                                    lib.config.zyile_Skin_Audio[nameskin][nameskin] = this._link; //保存死亡时配对的名称
                                }
                                game.saveConfig('zyile_Skin_Audio', lib.config.zyile_Skin_Audio);
                                str += `${get.translation(i).fontcolor('red')}:`;
                                if (flag) {
                                    str += `${audioname[1].slice(6)}/${audioname[0]}<br>`;
                                } else {
                                    str += `audio/skill/${nameskin}/${this._link}/${audioname}<br>`;
                                }
                            }
                            if (game.getExtensionConfig('概念武将', 'zyile_Skin_Audio_Re_prompt')) {
                                lib.zyile_layer.msg(str, {
                                    title: '语音地址',
                                    time: game.getExtensionConfig('概念武将', 'zyile_Skin_Audio_Re_prompt_timeout'),
                                    cancelclick: true,
                                    icon: this._link ? 1 : -1,
                                });
                            }
                        }
                    }
                );
                ui.create.zyile_node('div.zyileSkinBgBluePicked', button);
                button._src = src;
                button._URL = _src;
                button._LinkName = name;
                button.style.backgroundImage = 'url("' + src + '")';
                let js_name = _src.slice(_src.lastIndexOf('/') + 1, _src.lastIndexOf('.'));
                if (js_name !== nameskin2) {
                    //判断是不是原图
                    button._link = js_name;
                    if (game.getExtensionConfig('概念武将', 'zyile_skin_js_enable')) {
                        let currency,
                            zyile_skin_prefix = game.getExtensionConfig('概念武将', 'zyile_skin_prefix');
                        if (zyile_skin_prefix.hasOwn('all')) {
                            currency = 'all';
                        } else {
                            for (let j in zyile_skin_prefix) {
                                //循环获取武将名称判断添加了解锁模式没有
                                if (nameskin.indexOf(j) === 0) {
                                    currency = j;
                                    break;
                                }
                            }
                        }
                        if (currency && lib.config[[nameskin] + '_pifu_' + [js_name] + '_' + isExtensionSkin + '_goumai'] !== true) {
                            let wjsdiv = ui.create.div(button, '.zyile_character_skin_WJSX');
                            let div = ui.create.div(wjsdiv, '.zyile_character_skin_WJS');
                            ui.create.div(div, '.zyile_charater_skin_wjs_font', '尚未拥有');
                            ui.create.div(div, '.zyile_charater_skin_wjs');
                            button._page = wjsdiv;
                            button._Unlock = {
                                currency: zyile_skin_prefix[currency].currency,
                                quantity: zyile_skin_prefix[currency].quantity,
                            };
                            button.isExtensionSkin = isExtensionSkin;
                        }
                    }
                }
                if (lib.character[nameskin][4]) {
                    for (var _LFc28 of lib.character[nameskin][4]) {
                        if (yxy.finished) break;
                        if (_LFc28.replace(/ext:/g, 'extension/').indexOf(_src) !== -1) {
                            button.appendChild(yxy);
                        }
                    }
                }
                let vyS5Z = 'url("' + window.decodeURI(_src).toString() + '")';
                let $vyS5Z = vyS5Z.substring(5, vyS5Z.length - 2);
                let gPHT1;
                if (sourcenode) gPHT1 = window.decodeURI(sourcenode.style.backgroundImage).toString();
                if (avatar) gPHT1 = window.decodeURI(avatar.style.backgroundImage).toString();
                if (gPHT1 === vyS5Z || gPHT1.indexOf($vyS5Z) !== -1) button.appendChild(yxy);
                button.style.cursor = 'pointer';
            };
            let num = 1,
                change_extimage = false,
                change_character = false,
                change_modeimage = false;
            let loadImage = function () {
                var img = new Image(),
                    Fragment = document.createDocumentFragment();
                Fragment.appendChild(img);
                img.onload = null;
                img.onerror = null;
                let ext = '.jpg',
                    dbimage = null,
                    extimage = null,
                    modeimage = null;
                let nameinfo;
                let gzbool = false;
                let mode = get.mode();
                if (lib.characterPack['mode_' + mode] && lib.characterPack['mode_' + mode][name]) {
                    if (mode === 'guozhan') {
                        if (name.indexOf('gz_shibing') === 0) {
                            name = name.slice(3, 11);
                        } else {
                            if (lib.config.mode_config.guozhan.guozhanSkin && lib.character[name] && lib.character[name][4].includes('gzskin')) gzbool = true;
                            name = name.slice(3);
                        }
                    } else {
                        modeimage = mode;
                    }
                } else if (lib.character[name]) {
                    nameinfo = lib.character[name];
                } else if (name.indexOf('::') !== -1) {
                    name = name.split('::');
                    modeimage = name[0];
                    name = name[1];
                }
                if (!modeimage && nameinfo && nameinfo[4]) {
                    for (var i = 0; i < nameinfo[4].length; i++) {
                        if (nameinfo[4][i].indexOf('ext') === 0) {
                            extimage = nameinfo[4][i];
                            break;
                        } else if (nameinfo[4][i].indexOf('mode:') === 0) {
                            modeimage = nameinfo[4][i].slice(5);
                            break;
                        } else if (nameinfo[4][i].indexOf('character:') === 0) {
                            name = nameinfo[4][i].slice(10);
                            break;
                        }
                    }
                }
                /*******************************************************************************/
                if (!change_character) {
                    img.src = 'image/character/' + (gzbool ? 'gz_' : '') + name + ext;
                    img._src = 'image/character/' + (gzbool ? 'gz_' : '') + name + ext;
                    change_character = true;
                    img.onload = function () {
                        createButtons(-1, img.src, img._src);
                        loadImage();
                    };
                    img.onerror = function () {
                        loadImage();
                    };
                } else if (modeimage && !change_modeimage) {
                    img.src = 'image/mode/' + modeimage + '/character/' + name + ext;
                    img._src = 'image/mode/' + modeimage + '/character/' + name + ext;
                    change_modeimage = true;
                    img.onload = function () {
                        createButtons(-1, img.src, img._src);
                        loadImage();
                    };
                    img.onerror = function () {
                        loadImage();
                    };
                } else if (extimage && !change_extimage) {
                    if (extimage.indexOf('../') !== -1) extimage = extimage.slice(0, extimage.indexOf('../'));
                    var src = extimage.replace(/ext:/g, 'extension/');
                    var str = src.substring(0, src.lastIndexOf('/'));
                    img.onerror = function () {
                        num = 1;
                        change_extimage = true;
                        loadImage();
                    };
                    img.onload = function () {
                        createButtons(num - 1, img.src, img._src);
                        num++;
                        loadImage();
                    };
                    if (lib.config.extension_概念武将_zyile_Skin_load == 'order') {
                        if (num == 1) {
                            img.src = str + '/' + name + ext;
                            img._src = str + '/' + name + ext;
                        } else {
                            img.src = str + '/' + name + '_pifu' + (num - 1) + ext;
                            img._src = str + '/' + name + '_pifu' + (num - 1) + ext;
                        }
                    } else {
                        game.hasDirectory(
                            str,
                            function () {
                                game.getFileList(str, function (folders, files) {
                                    for (var i of files) {
                                        if (i.indexOf(name) != 0) continue;
                                        var names = i.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g'));
                                        if (names != null && ImageRe.test(names.join('')) && names.length > 1) {
                                            createButtons(i.toString(), str + '/' + i, str + '/' + i);
                                        }
                                    }
                                });
                            },
                            function () {
                                delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][name];
                                game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                            }
                        );
                        img.onerror();
                    }
                } else {
                    img.onload = function () {
                        createButtons(num, img.src, img._src);
                        num++;
                        loadImage();
                    };
                    if (lib.config.extension_概念武将_zyile_Skin_load == 'order') {
                        img.src = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name + '/' + num + ext;
                    } else {
                        var url = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name;
                        game.hasDirectory(
                            url,
                            function () {
                                game.getFileList('image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name, function (folders, files) {
                                    for (var i of files) {
                                        var names = i.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g'));
                                        if (names != null && ImageRe.test(names.join('')) && names.length > 1) {
                                            createButtons(i.toString(), url + '/' + i, url + '/' + i);
                                        }
                                    }
                                });
                            },
                            function () {
                                delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][name];
                                game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                            }
                        );
                    }
                    img._src = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name + '/' + num + ext;
                }
            };
            loadImage();
        });
        // 禁用
        let ban = ui.create.zyile_node('div.zyileShouShaForbid.character', utils, function (e) {
            if (this.classList.contains('unselectable')) return;
            if (typeof noedit == 'string') {
                this.classList.toggle('checked');
                let bannedname = noedit + '_banned';
                if (!lib.config[bannedname]) {
                    lib.config[bannedname] = [];
                }
                if (!this.classList.contains('checked')) {
                    lib.config[bannedname].add(name);
                } else {
                    lib.config[bannedname].remove(name);
                }
                game.saveConfig(bannedname, lib.config[bannedname]);
                this.updateBanned();
            } else {
                ui.click.touchpop();
                ui.click.intro.call(this, e);
                _status.clicked = true;
            }
        });
        ban.link = name;
        ban._banning = 'offline';
        ban.updateBanned = function () {
            if (noedit === true) return;
            if (lib.config[get.mode() + '_banned'] && lib.config[get.mode() + '_banned'].includes(name)) {
                ban.classList.add('checked');
            } else {
                ban.classList.remove('checked');
            }
            if (sourcenode && sourcenode.updateBanned) {
                sourcenode.updateBanned();
            }
        };
        ban.updateBanned();
        // 收藏
        ui.create.zyile_node(`div.zyileShouShaCollection${lib.config.favouriteCharacter.includes(name) ? '.checked' : ''}`, utils, function (event) {
            event.stopPropagation();
            if (this.classList.contains('unselectable')) return;
            this.classList.toggle('checked');
            if (this.classList.contains('checked')) {
                game.playAudio('../extension/概念武将/ShouShaCharacterCard/button_skin_forbid_collection.mp3');
                lib.config.favouriteCharacter.add(name);
            } else {
                lib.config.favouriteCharacter.remove(name);
            }
            game.saveConfig('favouriteCharacter', lib.config.favouriteCharacter);
        });
        let zyileCharacter = ui.create.zyile_node('div.zyileCharacter', background);
        zyileCharacter.setBackgroundImage(`extension/概念武将/ShouShaCharacterCard/border_${info[1]}.png`);
        let image = new Image();
        image.src = `extension/概念武将/ShouShaCharacterCard/border_${info[1]}.png`;
        image.onerror = (event) => {
            zyileCharacter.setBackgroundImage(`extension/概念武将/ShouShaCharacterCard/border_qun.png`);
        };
        zyileCharacter.dataset.hp = info[2];
        ui.create.zyile_node('div.name', zyileCharacter).innerHTML = get.translation(nameskin);
        ui.create.zyile_node('div', zyileCharacter, {
            cssText: `
                width: 90%;
                height: 94%;
                left: 5%;
                top: 2.4%;
                background-color: rgb(53, 38, 32);
                z-index: -2;
            `,
        });
        let avatarx = ui.create.zyile_node('div.avatar', zyileCharacter).setBackground(name, 'character');
        if (lib.config.show_rarity) ui.create.zyile_node('div.quality', zyileCharacter).setBackgroundImage(`extension/概念武将/ShouShaCharacterCard/pingji_${game.getRarity(nameskin)}.png`);
        let zyileIntroBox = ui.create.zyile_node('div.zyileIntroBox', background),
            zyileIntroBoxTitle = ui.create.zyile_node('div.zyileIntroBoxTitle', zyileIntroBox),
            SkillsIntro = ui.create.zyile_node('div', zyileIntroBoxTitle),
            actorSLines = ui.create.zyile_node('div', zyileIntroBoxTitle),
            profile = ui.create.zyile_node('div', zyileIntroBoxTitle),
            Method = ui.create.zyile_node('div', zyileIntroBoxTitle),
            titleClick = function (event) {
                SkillsIntro.classList.remove('active');
                actorSLines.classList.remove('active');
                profile.classList.remove('active');
                Method.classList.remove('active');
            };
        zyileIntroBox.content = ui.create.zyile_node('div.zyileContent', zyileIntroBox);
        let skills = info[3].slice(0),
            SkillIntroContainer = ui.create.zyile_node('div.SkillIntroContainer', zyileIntroBox.content),
            createSkillIntro = function (skill) {
                let info = lib.skill[skill];
                if (!info || !lib.translate[skill] || !lib.translate[skill + '_info']) return false;
                let skillIntro = ui.create.zyile_node('div.skillIntro', SkillIntroContainer);
                ui.create.zyile_node('div.SkillButton', get.translation(skill), skillIntro);
                let zx = ui.create.div(skillIntro, {
                    display: 'block',
                    marginBottom: '3px',
                });
                let audio = ui.create.zyile_node('div.SkillAudio', zx);
                audio.addEventListener('click', function () {
                    if (lib.config.background_speak) {
                        info = lib.skill[skill];
                        let audioname = this.link,
                            that = this,
                            playername = this.linkname;
                        if (info.audioname2 && info.audioname2[playername]) {
                            audioname = info.audioname2[playername];
                            info = lib.skill[audioname];
                        }
                        let audioinfo = info.audio;
                        let getIndex = function (i) {
                            if (typeof that.audioindex != 'number') {
                                that.audioindex = i;
                            }
                            that.audioindex++;
                            if (that.audioindex > i) {
                                that.audioindex = 1;
                            }
                            return that.audioindex;
                        };
                        if (typeof audioinfo == 'string') {
                            if (audioinfo.indexOf('ext:') === 0) {
                                audioinfo = audioinfo.split(':');
                                if (audioinfo.length === 3) {
                                    if (audioinfo[2] === 'true') {
                                        game.playAudio('../extension', audioinfo[1], audioname);
                                    } else {
                                        audioinfo[2] = parseInt(audioinfo[2]);
                                        if (audioinfo[2]) {
                                            game.playAudio('../extension', audioinfo[1], audioname + getIndex(audioinfo[2]));
                                        }
                                    }
                                }
                                return;
                            } else {
                                audioname = audioinfo;
                                if (lib.skill[audioinfo]) {
                                    audioinfo = lib.skill[audioinfo].audio;
                                }
                            }
                        } else if (Array.isArray(audioinfo)) {
                            audioname = audioinfo[0];
                            audioinfo = audioinfo[1];
                        }
                        if (typeof audioinfo == 'number') {
                            if (Array.isArray(info.audioname) && info.audioname.includes(playername)) audioname = audioname + '_' + playername;
                            game.playAudio('skill', audioname + getIndex(audioinfo));
                        } else if (audioinfo) {
                            if (Array.isArray(info.audioname) && info.audioname.includes(playername)) audioname = audioname + '_' + playername;
                            game.playAudio('skill', audioname);
                        } else if (info.audio !== false) {
                            if (Array.isArray(info.audioname) && info.audioname.includes(playername)) audioname = audioname + '_' + playername;
                            game.playSkillAudio(audioname, getIndex(2));
                        }
                    }
                });
                audio.link = skill;
                audio.linkname = name;
                ui.create.zyile_node('div.bg_jinengming', get.translation(skill) + ':', zx);
                let intro2 = ui.create.zyile_node(
                    'div',
                    {
                        fontSize: '2.2vw',
                        color: 'rgb(34, 34, 34)',
                    },
                    '&nbsp;&nbsp;&nbsp;&nbsp;' + get.translation(skill + '_info'),
                    skillIntro
                );
                if (info.derivation) {
                    let derivation = info.derivation;
                    if (typeof derivation == 'string') {
                        derivation = [derivation];
                    }
                    for (let i = 0; i < derivation.length; i++) {
                        intro2.innerHTML += '<br><br><span style="font-weight:bold;margin-right:5px">' + get.translation(derivation[i]) + '</span>' + get.skillInfoTranslation(derivation[i]);
                    }
                }
            },
            characterIntro = ui.create.zyile_node('div', zyileIntroBox.content),
            characterMethod = ui.create.zyile_node('div', { width: '100%' }, zyileIntroBox.content),
            characterActorSLines = ui.create.zyile_node('div.SkillIntroContainer', zyileIntroBox.content),
            createActorSLines = function (skill) {
                let info = lib.skill[skill];
                if (!info || !lib.translate[skill] || !lib.translate[skill + '_info']) return false;
                let skillIntro = ui.create.zyile_node('div.skillIntro', characterActorSLines);
                ui.create.zyile_node('div.SkillButton', get.translation(skill), skillIntro);
                ui.create.zyile_node(
                    'div',
                    {
                        fontSize: '2.2vw',
                        color: 'rgb(34, 34, 34)',
                        display: 'block',
                    },
                    '&nbsp;&nbsp;&nbsp;&nbsp;' + get.ActorSLines(skill),
                    skillIntro
                );
            };
        // 武将介绍信息
        characterIntro.innerHTML = `<span style=\"font-family:'yuanli';font-size:2.2vw;margin-right:5px;color: rgb(34, 34, 34);\">${'&nbsp;&nbsp;&nbsp;&nbsp;' + get.characterIntro(nameskin)}</span>`;
        // 武将攻略信息
        characterMethod.innerHTML = `<div style=\"font-family:'yuanli';font-size:2.2vw;width: 95%;margin-right:5px;color: rgb(34, 34, 34);position: relative;\">${'&nbsp;&nbsp;&nbsp;&nbsp;' + get.characterMethod(nameskin)}</>`;
        let contentEditable = ui.create.zyile_node(
            'div.SkillButton',
            {
                cssText: `
                width: 55px;
                left: 83%;
                cursor: pointer;
                word-break: keep-all;`,
            },
            '修改'
        );
        contentEditable.addEventListener('click', function () {
            if (!this.disabled) {
                this.disabled = true;
                this.classList.add('active');
                let el = this.nextElementSibling;
                let prompt = lib.zyile_layer.prompt(
                    {
                        title: '请输入武将攻略',
                        formType: 2,
                        input() {
                            el.innerHTML = `${'&nbsp;&nbsp;&nbsp;&nbsp;' + this.value.replace(/[\r\n]/g, '<br/>')}`;
                        },
                        parentLayer: false,
                        keydown: false,
                        value: get
                            .characterMethod(nameskin)
                            .replace(/<br\/>/g, '\n')
                            .replace('暂无攻略', ''),
                        area: ['45%', '100%'],
                        end() {
                            this.classList.remove('active');
                            this.disabled = false;
                            el.innerHTML = `${'&nbsp;&nbsp;&nbsp;&nbsp;' + get.characterMethod(nameskin)}`;
                        },
                    },
                    (val, index, input) => {
                        lib.config.characterMethod[nameskin] = val.replace(/[\r\n]/g, '<br/>');
                        game.saveConfigValue('characterMethod');
                    }
                );
                window.setTimeout(
                    () =>
                        prompt.css({
                            left: 0,
                            top: 0,
                        }),
                    300
                );
            }
        });
        characterMethod.insertBefore(contentEditable, characterMethod.firstElementChild);
        lib.setScroll(SkillIntroContainer);
        lib.setScroll(characterIntro);
        for (const skill of skills) createSkillIntro(skill), createActorSLines(skill);
        let hiddenContainer = () => {
            SkillIntroContainer.classList.add('zyile_hidden');
            characterIntro.classList.add('zyile_hidden');
            characterMethod.classList.add('zyile_hidden');
            characterActorSLines.classList.add('zyile_hidden');
            game.playAudio('../extension/概念武将/ShouShaCharacterCard/button_label.mp3');
        };
        SkillsIntro.addEventListener(
            'click',
            function (event) {
                event.stopPropagation();
                if (!this.classList.contains('active')) {
                    titleClick();
                    hiddenContainer();
                    this.classList.add('active');
                    SkillIntroContainer.classList.remove('zyile_hidden');
                }
            },
            true
        );
        actorSLines.addEventListener(
            'click',
            function (event) {
                event.stopPropagation();
                if (!this.classList.contains('active')) {
                    titleClick();
                    hiddenContainer();
                    this.classList.add('active');
                    characterActorSLines.classList.remove('zyile_hidden');
                }
            },
            true
        );
        profile.addEventListener(
            'click',
            function (event) {
                event.stopPropagation();
                if (!this.classList.contains('active')) {
                    titleClick();
                    hiddenContainer();
                    this.classList.add('active');
                    characterIntro.classList.remove('zyile_hidden');
                }
            },
            true
        );
        Method.addEventListener(
            'click',
            function (event) {
                event.stopPropagation();
                if (!this.classList.contains('active')) {
                    titleClick();
                    hiddenContainer();
                    this.classList.add('active');
                    characterMethod.classList.remove('zyile_hidden');
                }
            },
            true
        );
        SkillsIntro.click();
        ui.create.zyile_node('div.zyileButtonBack', background, (event) => {
            game.playAudio('../extension/概念武将/ShouShaCharacterCard/button_back.mp3');
            event.stopPropagation();
            background.delete();
            if (resume) game.resume2();
            if (window.require && getSize) {
                BrowserWindow.mainWindow.setSize(getSize[0], getSize[1]);
            }
        });
    };
};
('use strict');
window.zyile_content.push(function (lib, game, ui, get, ai, _status) {
    'use strict';
    let dialog = ui.create.dialog,
        clickIntro = ui.click.intro,
        clickHoverplayer = ui.click.hoverplayer,
        placePoppedDialog = function (e, dialog) {
            if (!game.getExtensionConfig('概念武将', 'zyile_Interface_dialog_info') || !dialog) return;
            ('use strict');
            {
                dialog.style.setProperty('background', '#000', 'important');
                dialog.css({
                    border: '2px solid #fff',
                });
                dialog.content.css({
                    color: '#fff',
                    userSelect: 'none',
                });
                if (!this.classList.contains('player') && !this.classList.contains('character')) return void 0;
                if (e.touches && e.touches[0]) e = e.touches[0];
                let left = parseInt(dialog.style.left),
                    width = dialog.offsetWidth,
                    top = dialog.offsetTop,
                    box = this.getBoundingClientRect(),
                    zoom = getComputedStyle(this, null).zoom || 1,
                    i = ui.create.zyile_node('i.layui-layer-TipsG.', dialog);
                zoom *= game.documentZoom;
                let right = (box.right + width) * zoom;
                i.style.top = e.clientY / game.documentZoom - top + 'px';
                if (lib.zyile_common.isMobile() && lib.extensionPack['十周年UI']) zoom = 1;
                if (lib.zyile_common.isMobile()) {
                    //移动端
                    if (e.layerX / zoom < box.width / 2) {
                        if (ui.window.offsetWidth < right + 16) {
                            dialog.style.left = box.left / zoom - width - 16 + 'px';
                            i.classList.add('layui-layer-TipsL');
                        } else {
                            dialog.style.left = box.right / zoom + 16 + 'px';
                            i.classList.add('layui-layer-TipsR');
                        }
                    } else {
                        if (box.left / zoom - width - 16 > 0) {
                            dialog.style.left = box.left / zoom - width - 16 + 'px';
                            i.classList.add('layui-layer-TipsL');
                        } else {
                            dialog.style.left = box.right / zoom + 16 + 'px';
                            i.classList.add('layui-layer-TipsR');
                        }
                    }
                } else {
                    if (e.layerX / game.documentZoom < box.width / 2) {
                        if (ui.window.offsetWidth < right + 16) {
                            dialog.style.left = box.left * zoom - width - 16 + 'px';
                            i.classList.add('layui-layer-TipsL');
                        } else {
                            dialog.style.left = box.right * zoom + 16 + 'px';
                            i.classList.add('layui-layer-TipsR');
                        }
                    } else {
                        if (box.left * zoom - width - 16 > 0) {
                            dialog.style.left = box.left * zoom - width - 16 + 'px';
                            i.classList.add('layui-layer-TipsL');
                        } else {
                            dialog.style.left = box.right * zoom + 16 + 'px';
                            i.classList.add('layui-layer-TipsR');
                        }
                    }
                }
            }
        };
    ui.create.dialog = function () {
        let dialogx = dialog.apply(this, arguments),
            configStr = game.getExtensionConfig('概念武将', 'zyile_Interface_dialog');
        if (configStr === 'close') return dialogx;
        dialogx.classList.add('layui-layer-dialog', 'layui-layer-tips', configStr);
        dialogx
            .css({
                backgroundSize: '100% 100%',
                textShadow: 'black 0 0 1px',
            })
            .content.css({
                transitionProperty: 'none',
                transition: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none',
            });
        window.zyile_dragZoom(dialogx, ui.window, true, true, true);
        ui.update();
        return dialogx;
    };
    ('use strict');
    ui.click.intro = function (e) {
        let uiintro = clickIntro.call(this, e);
        placePoppedDialog.call(this, e, uiintro);
        return uiintro;
    };
    ('use strict');
    ui.click.hoverplayer = function (e) {
        let hoverplayer = clickHoverplayer.call(this, e);
        if (hoverplayer) placePoppedDialog.call(this, e, hoverplayer);
        return hoverplayer;
    };
});

import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
// 商店界面
lib.dqzw_boss_shopStyle = {
    default(players, map = {}, ai, map2 = {}) {
        let dialogs = {};
        players.forEach(player => {
            let dialog = ui.create.dialog(),
                id = player.playerid;
            dialog.style.setProperty('left', '22%', 'important');
            dialog.style.setProperty('top', '10%', 'important');
            dialog.style.setProperty('width', (document.body.offsetWidth / 100) * 56 + 'px', 'important');
            dialog.style.setProperty('min-height', (document.body.offsetHeight / 100) * 80 + 'px', 'important');
            dialog.videoId = id;
            dialogs[id] = dialog;
            if (player != game.me) dialog.close();
            else _status.event.dialog = dialog;
            let shop = game.dqzw_boss_getShopInfo(player);
            if (map && map[player.playerid]) shop = shop.find(item => item.name == map[player.playerid]) || shop.randomGet();
            else shop = shop.randomGet();
            createDialog(dialog, player, ...(map2 && map2[player.playerid] ? map2[player.playerid] : shop.content()));
        });
        _status.event.dialogs = dialogs;
        _status.event.result = {};
        function createDialog(dialog, player, list, types, prompt, options) {
            let url = 'extension/大权在握/image/',
                height = document.body.offsetHeight / 100,
                animate = HTMLElement.prototype.animate,
                table = ui.create.div(
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        width: '100%',
                        height: (dialog.clientHeight / 100) * 80 + 'px',
                        fontFamily: 'dqzw_hanyiwenhei',
                        backgroundImage: `url(${url}background/back_shop.png)`,
                        backgroundSize: '100% 100%',
                    },
                    dialog.content
                ),
                avatar = ui.create.div(
                    {
                        display: 'block',
                        position: 'relative',
                        width: '94%',
                        height: '18%',
                        marginTop: '4%',
                        whiteSpace: 'nowrap',
                        overflowX: 'auto',
                    },
                    table
                ),
                btnTypeContainer = ui.create.div(
                    {
                        display: 'flex',
                        position: 'relative',
                        width: '94%',
                        height: '10%',
                        overflowX: 'auto',
                    },
                    table
                ),
                commodityContainer = setScroll(
                    ui.create.div(
                        {
                            display: 'block',
                            position: 'relative',
                            width: '94%',
                            height: '54%',
                            marginTop: '1%',
                            whiteSpace: 'nowrap',
                            overflowX: 'auto',
                        },
                        table
                    )
                ),
                promptContainer = ui.create.div(
                    '.dqzw-presentation',
                    prompt,
                    {
                        position: 'relative',
                        padding: 0,
                        width: '94%',
                        height: '6%',
                        background: 'hsl(42, 9%, 44%)',
                    },
                    table
                ),
                top = ui.create.div(
                    {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '-8%',
                        left: 0,
                        width: '100%',
                        height: '10%',
                    },
                    table
                ),
                gold = ui.create.div(
                    '.pointerdiv',
                    {
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        marginLeft: '2%',
                    },
                    top
                ),
                refresh = ui.create
                    .div(
                        '.pointerdiv',
                        {
                            display: 'inline-flex',
                            alignItems: 'center',
                            position: 'relative',
                            width: (top.clientWidth / 100) * 15 + 'px',
                            height: top.clientHeight + 'px',
                            background: `url(${url}background/btn_refresh.png)`,
                            backgroundSize: '100% 100%',
                            marginRight: '2%',
                        },
                        top,
                        onrefresh
                    )
                    .hide(),
                shopping = ui.create.div(
                    '.menubutton.round.pointerdiv',
                    '物',
                    {
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '10%',
                        right: '-10%',
                        fontFamily: 'dqzw_hanyiwenhei',
                    },
                    table,
                    openShopping
                ),
                give = ui.create.div(
                    '.menubutton.round.pointerdiv',
                    '赠',
                    {
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '10%',
                        left: '-10%',
                        fontFamily: 'dqzw_hanyiwenhei',
                    },
                    table,
                    openGive
                ),
                config = (_status.dqzw_mode_config || {}).shop || {},
                cost = 0,
                countRefresh = 0,
                megold = player.dqzw_boss_gold || 0,
                map = { other: [] },
                purchased = [],
                priceIncrease = 1,
                originalMap = {};
            ui.create.div(
                {
                    position: 'relative',
                    width: height * 5 + 'px',
                    height: height * 5 + 'px',
                    fontSize: height * (2) + 'px',
                    background: `url(${url}icon/gold.png)`,
                    backgroundSize: '100% 100%',
                    marginRight: '5px',
                },
                gold
            );
            shopping.count = ui.create.div(
                '.menubutton.pointerdiv',
                {
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '5%',
                    right: '-15%',
                    height: height * 1.6 + 'px',
                    fontSize: height * 2 + 'px',
                    fontFamily: 'dqzw_hanyiwenhei',
                    borderRadius: '100%',
                },
                shopping
            );
            gold.number = ui.create.div('', String(megold), gold, {
                position: 'relative',
            });
            refresh.icon = ui.create.div(
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    left: '4.5%',
                    width: height * 6 + 'px',
                    height: height * 6 + 'px',
                    background: `url(${url}icon/btn_refresh.png)`,
                    backgroundSize: '100% 100%',
                },
                refresh
            );
            refresh.text = ui.create.div(
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    left: '4.5%',
                    width: height * 6 + 'px',
                    height: height * 6 + 'px',
                    fontSize: height * 1.5 + 'px',
                    transform: '',
                },
                refresh
            );
            dialog.style.boxShadow = 'none';
            dialog.style.background = 'none';
            dialog.content.style.overflow = 'visible';
            dialog.content.parentNode.style.overflow = 'visible';
            dialog.style.overflow = 'visible';
            players.forEach(player => {
                let container = ui.create.div(
                    {
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        width: '18%',
                        height: '100%',
                    },
                    avatar,
                    swap
                );
                container.avatar = ui.create
                    .div('.menubutton.videoavatar', container, {
                        position: 'relative',
                        width: height * 7 + 'px',
                        height: height * 7 + 'px',
                        borderRadius: '100%',
                    })
                    .setBackground(player.name1 || player.name2 || 'caocao', 'character');
                container.playerid = player.playerid;
                container.owner = player;
            });
            types.forEach(item => {
                createTypeButton(item);
            });
            list.forEach(item => {
                let container = createCommodity(item);
                if (!map[item.type]) map[item.type] = [];
                if (!'type' in item) item.type = 'other';
                map[item.type].push(container);
                item.__index__ = map[item.type].indexOf(container);
                if (item.number) container.number = Number(item.number);
                if (!item.id) item.id = get.id();
                if (item.init) item.init.call(item, container.node, container);
            });
            filter();
            update();
            ui.window.listen(customWindow);
            Object.keys(map).forEach(type => {
                originalMap[type] = [...map[type]];
            });
            dialog.onopen = function () {
                [...avatar.children].forEach(avatar => {
                    if (avatar.owner == player) avatar.classList.add('dqzw-boss-filter-shadow');
                });
                delete dialog.notClickable;
                if (player != game.me) dialog.notClickable = true;
                update();
            };
            dialog._exec = function (func, ...args) {
                eval(`(${func})(...args);`);
            };
            dialog.onopen();
            if (refresh.number && refresh.number > 0) refresh.show();
            function filter() {
                let filter = (_node, info) => (this.info ? info && info.type == this.info.type : true);
                commodityContainer.innerHTML = '';
                if (this.parentNode) {
                    let list = [...this.parentNode.children];
                    this.classList.toggle('dqzw-selected');
                    if (this.classList.contains('dqzw-selected')) {
                        btnTypeContainer.current = this;
                        list.forEach(node => {
                            if (node != this) node.classList.remove('dqzw-selected');
                        });
                        if (this.info && this.info.filter) filter = this.info.filter;
                    } else {
                        delete btnTypeContainer.current;
                        filter = config.filter || (() => true);
                    }
                }
                Object.keys(map).forEach(type => {
                    [...map[type]]
                        .sort((a, b) => getPrice(a.info) - getPrice(b.info))
                        .forEach(node => {
                            let info = node.info;
                            if (filter.call(this, node, info, map[type], type)) {
                                lib.dqzw_boss_oldAnimate.call(node, 'dqzw-commodity-container-enter', 100);
                                commodityContainer.appendChild(node);
                            }
                        });
                });
                if (!commodityContainer.children.length) commodityContainer.innerHTML = '无';
                update();
            }
            function openShopping(func) {
                closeShopping(false);
                let menu = ui.create.div(
                    '.menubg',
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '2%',
                        right: '-70%',
                        width: (dialog.clientWidth / 100) * 30 + 'px',
                        height: (dialog.clientHeight / 100) * 78 + 'px',
                    },
                    table
                ),
                    map = {};
                ui.create.caption('购物车', menu).style.position = 'relative';
                let list = ui.create.div(
                    {
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        width: '100%',
                        flex: 1,
                        overflowY: 'auto',
                    },
                    menu
                );
                purchased.forEach(item => {
                    let info = Object.assign({}, item.info);
                    if (!info.id) info.id = get.id();
                    info.number = 0;
                    if (!map[info.id]) map[info.id] = info;
                    else map[info.id].number = (map[info.id].number || 1) + 1;
                    map[info.id].price = info._purchasePrice;
                    map[info.id].__node__ = item;
                });
                Object.keys(map).forEach((id, index) => {
                    let item = map[id],
                        container = lib.dqzw_boss_oldAnimate.call(
                            ui.create.div(
                                {
                                    position: 'relative',
                                    width: '100%',
                                    height: (table.offsetHeight / 100) * 52 + 'px',
                                },
                                list
                            ),
                            'dqzw-boss-scale',
                            100 + index * 100
                        ),
                        commodity = createCommodity(item, container, true);
                    commodity.style.height = container.style.height;
                    commodity.style.width = '70%';
                    commodity.style.marginLeft = '2%';
                    commodity.node.buttons = ui.create.div(
                        {
                            display: 'inline-flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            width: '26%',
                            height: '100%',
                            marginLeft: '1%',
                        },
                        container
                    );
                    commodity.node.btnRevoke = setPress(
                        ui.create.div(
                            '.menubutton.pointerdiv',
                            '撤销',
                            {
                                position: 'relative',
                                padding: '5%',
                                margin: '5%',
                            },
                            commodity.node.buttons,
                            function () {
                                revoke.call(this, container);
                            }
                        )
                    );
                    commodity.node.btnSettlement = setPress(
                        ui.create.div(
                            '.menubutton.pointerdiv',
                            '结算',
                            {
                                position: 'relative',
                                padding: '5%',
                                margin: '5%',
                            },
                            commodity.node.buttons,
                            !item.notMandatory &&
                            function () {
                                settlement.call(this, container, true);
                            }
                        )
                    );
                    container.info = item;
                    if (item.notMandatory) commodity.node.btnSettlement.classList.add('dqzw-boss-filter-grayscale', 'noclick');
                    if (item.init) item.init.call(item, commodity.node, commodity);
                });
                menu.list = list;
                shopping.menu = menu;
                shopping.style.transform = 'scale(0)';
                move(menu, '-130%', void 0, 1, () => {
                    shopping.open = true;
                    if (typeof func == 'function') func(menu);
                });
                update();
            }
            function closeShopping(reduction) {
                shopping.open = false;
                let menu = shopping.menu;
                if (menu) {
                    move(menu, '-130%', void 0, 1, () => {
                        if (reduction !== false) shopping.style.transform = '';
                        menu.remove();
                    });
                } else if (reduction !== false) shopping.style.transform = '';
            }
            function openGive(func) {
                closeGive(false);
                let menu = ui.create.div(
                    '.menubg',
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '2%',
                        left: '-70%',
                        width: (dialog.clientWidth / 100) * 30 + 'px',
                        height: (dialog.clientHeight / 100) * 78 + 'px',
                    },
                    table
                ),
                    map = {};
                ui.create.caption('金币赠送', menu).style.position = 'relative';
                let list = ui.create.div(
                    {
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        width: '100%',
                        flex: 1,
                        overflowY: 'auto',
                    },
                    menu
                );
                [...players].remove(player).forEach(target => {
                    let name = player => get.translation(player.nickname || player.name1 || player.name2 || player.name || player.playerid),
                        container = ui.create.div(
                            {
                                position: 'relative',
                                width: '100%',
                                height: (table.clientHeight / 100) * 30 + 'px',
                            },
                            list
                        ),
                        avatarContainer = ui.create.div(
                            {
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                width: '30%',
                                height: '100%',
                            },
                            container
                        );
                    container.avatar = ui.create
                        .div('.menubutton.videoavatar', avatarContainer, {
                            position: 'relative',
                            width: height * 7 + 'px',
                            height: height * 7 + 'px',
                            borderRadius: '100%',
                        })
                        .setBackground(target.name1 || target.name2 || 'caocao', 'character');
                    container._buttons = ui.create.div(
                        {
                            position: 'relative',
                            width: '66%',
                            height: '100%',
                        },
                        container
                    );
                    container.giveBtn = setPress(
                        ui.create.div(
                            '.menubutton.pointerdiv',
                            '赠100金',
                            {
                                position: 'relative',
                                padding: '2%',
                                margin: '2%',
                            },
                            container._buttons,
                            function () {
                                if (!this.classList.contains('dqzw-boss-filter-grayscale')) giveGold(target.playerid, 100, name(player));
                            }
                        )
                    );
                    container.allGiveBtn = setPress(
                        ui.create.div(
                            '.menubutton.pointerdiv',
                            '全赠',
                            {
                                position: 'relative',
                                padding: '2%',
                                margin: '2%',
                            },
                            container._buttons,
                            function () {
                                giveGold(target.playerid, megold, name(player));
                            }
                        )
                    );
                    container.customGiveBtn = setPress(
                        ui.create.div(
                            '.menubutton.pointerdiv',
                            '自定义',
                            {
                                position: 'relative',
                                padding: '2%',
                                margin: '2%',
                            },
                            container._buttons,
                            function () {
                                game.prompt(`###要给${name(target)}多少金币？###${megold / 2}`, num => {
                                    if (!Number(num) ? alert('请不要乱输入') : num * 1 > megold ? alert('金币不足') : num * 1 > 0) giveGold(target.playerid, num * 1, name(player));
                                });
                            }
                        )
                    );
                    container.giveBtn.filter = () => megold < 100;
                    container.allGiveBtn.filter = () => megold < 1;
                    container.buttons = [...container._buttons.children];
                    container.playerid = target.playerid;
                    container.owner = target;
                });
                menu.list = list;
                give.menu = menu;
                give.style.transform = 'scale(0)';
                move(menu, '130%', void 0, 1, () => {
                    give.open = true;
                    if (typeof func == 'function') func(menu);
                });
                update();
            }
            function closeGive(reduction) {
                give.open = false;
                let menu = give.menu;
                if (menu) {
                    move(menu, '130%', void 0, 1, () => {
                        if (reduction !== false) give.style.transform = '';
                        menu.remove();
                    });
                } else if (reduction !== false) give.style.transform = '';
            }
            function update() {
                if (purchased.length) {
                    shopping.count.show();
                    shopping.count.innerHTML = purchased.length;
                } else shopping.count.hide();
                if (give.menu && give.menu.list)
                    [...give.menu.list.children].forEach(node => {
                        [...node.buttons].forEach(node => {
                            if (node && typeof node.filter == 'function' && node.filter()) node.classList.add('dqzw-boss-filter-grayscale');
                            else node.classList.remove('dqzw-boss-filter-grayscale');
                        });
                    });
                if (player && refresh.text) {
                    let num = (Number(player.dqzw_countShopRefresh()) || 0) - countRefresh,
                        refreshFilter = player.dqzw_shopRefreshFilter() || [];
                    if (
                        num &&
                        num > 0 &&
                        (refreshFilter.length
                            ? refreshFilter.every(item => {
                                if (item.content) {
                                    if (item.eval) return eval(`(${item.content}())`);
                                    else return item.content(megold, cost, purchased);
                                }
                            })
                            : true)
                    ) {
                        refresh.show();
                        refresh.text.innerHTML = num;
                        refresh.number = num;
                        refresh.classList.remove('dqzw-boss-filter-grayscale');
                    } else bannedRefresh();
                } else bannedRefresh();
                function bannedRefresh() {
                    if (refresh.text) refresh.text.innerHTML = '';
                    refresh.classList.add('dqzw-boss-filter-grayscale');
                }
                if (commodityContainer.children)
                    [...commodityContainer.children].forEach(node => {
                        let info = node.info;
                        if (info && (info.filter || getPrice(info) > 0) && typeof info.filter == 'function' ? !info.filter.call(this, node, info, map[type], type) : megold < getPrice(info)) node.classList.add('dqzw-boss-filter-brightness');
                        else node.classList.remove('dqzw-boss-filter-brightness');
                        node.info._originalPrice = getPrice(info, false);
                        if (getIncrease(info) || info._changeGold) {
                            node.classList.add('dqzw-boss-priceChange');
                            node.style.setProperty('--price', `'${getPrice(info, false, true)}'`);
                        } else node.classList.remove('dqzw-boss-priceChange');
                        let price = node.node.price;
                        if (price)
                            animate.call(price, {
                                from: Number(price.innerHTML || 0),
                                to: getPrice(info),
                                duration: 300,
                            });
                    });
                if (!_status.event.result) _status.event.result = {};
                _status.event.result[player.playerid] = {
                    cost,
                    purchased: purchased.map(item => item.info),
                    countRefresh,
                };
            }
            function getPrice(item = {}, increase, nomod) {
                let num = item.price,
                    info = {
                        purchased,
                        cost,
                        megold,
                        countRefresh,
                        priceIncrease,
                    };
                delete item._changeGold;
                if (typeof num == 'function') num = num(item, player, info);
                if (!nomod) {
                    let mod = player.dqzw_shopCommodityPrice(num, item, info);
                    if (mod != num) {
                        num = mod;
                        item._changeGold = true;
                    }
                }
                num = (num || 0) + (increase !== false ? getIncrease(item) : 0);
                if (!nomod) {
                    let mod = player.dqzw_shopCommodityFinalPrice(num, item, info);
                    if (mod != num) {
                        num = mod;
                        item._changeGold = true;
                    }
                }
                return num;
            }
            function getIncrease(item = {}, nomod) {
                let price = getPrice(item, false),
                    num = Math.floor(price * (priceIncrease || 1) - price);
                if (!nomod) {
                    num = player.dqzw_shopPriceIncrease(num, price, priceIncrease, {
                        purchased,
                        cost,
                        megold,
                        countRefresh,
                    });
                    if (num == 0) priceIncrease = 1;
                }
                item.increase = num;
                return num || 0;
            }
            function giveGold(id, num) {
                let dialogs = _status.event.dialogs,
                    target = (lib.playerOL || game.playerMap)[id];
                if (dialogs && dialogs[id] && dialogs[id]._exec && target) {
                    player.dqzw_changeGold(-num, false).type = 'shopGiveGold';
                    target.dqzw_changeGold(num, false).type = 'shopGiveGold';
                    changeGold(-num);
                    dialogs[id]._exec(num => {
                        changeGold(num);
                    }, num);
                }
                update();
            }
            function settlement(item, mandatory) {
                let info = item && item.info;
                if ((this && this.classList && this.classList.contains('noclick')) || !info) return;
                if (purchased.includes(info.__node__)) {
                    purchased.remove(info.__node__);
                    cost += getPrice(info);
                    if (info && typeof info.result == 'function') info.result(player, info, mandatory);
                }
                if (shopping.open) {
                    closeShopping(false);
                    openShopping();
                }
                update();
            }
            function revoke(item) {
                let info = item && item.info;
                if ((this && this.classList && this.classList.contains('noclick')) || !info) return;
                let node = info.__node__;
                if (!purchased.includes(node)) return;
                purchased.remove(node);
                map[info.type || 'other'].push(node);
                changeGold(info._purchasePrice);
                priceIncrease -= 0.1;
                if (info && typeof info.revoke == 'function') info.revoke(player, item);
                if (info.revokeInit && info.init) info.init.call(info, node.node, node);
                if (btnTypeContainer.current) btnTypeContainer.current.classList.toggle('dqzw-selected');
                filter.call(btnTypeContainer.current);
                if (shopping.open) {
                    closeShopping(false);
                    openShopping();
                }
            }
            function swap() {
                let dialogs = _status.event.dialogs,
                    id = this.playerid;
                if (dialogs && dialogs[id]) {
                    let dialog = dialogs[id],
                        map = lib.playerOL || game.playerMap,
                        player = map && map[id];
                    if (_status.event.dialog == dialog) return;
                    if (player && !_status.connectMode && player.isUnderControl()) game.swapPlayerAuto(player);
                    if (_status.event.dialog) _status.event.dialog.close();
                    _status.event.dialog = dialog;
                    dialog.open();
                    if (dialog.onopen) dialog.onopen();
                }
            }
            function changeGold(num) {
                let original = megold;
                megold += num;
                if (gold.number) {
                    popup(
                        gold,
                        num,
                        {
                            top: '-40%',
                            right: '-70%',
                        },
                        {
                            step(num) {
                                this.innerHTML = (num > 0 ? '+' : '') + num;
                                gold.number.innerHTML = original + num;
                            },
                        }
                    );
                }
            }
            function purchase() {
                let info = this.info;
                if (!dialog.notClickable && !this.classList.contains('dqzw-boss-filter-brightness') && info && (info.purchase ? info.purchase.call(this, this, info) !== false : true)) {
                    let count = this.node && this.node.count,
                        num = --this.number;
                    if (!num || num < 1) {
                        count.remove();
                        this.delete();
                        map[info.type].remove(this);
                    } else if (count)
                        animate.call(count, {
                            to: num,
                            from: num + 1,
                            duration: 200,
                            step: num => (count.innerHTML = num),
                        });
                    num = getPrice(info);
                    cost += num;
                    changeGold(-num);
                    info._purchasePrice = num;
                    priceIncrease += 0.1;
                    purchased.push(this);
                    popup(
                        shopping,
                        '+1',
                        {
                            right: '-45%',
                        },
                        { callback: update }
                    );
                    if (shopping.open) {
                        closeShopping(false);
                        openShopping();
                    }
                    update();
                }
            }
            function onrefresh() {
                let that = this;
                if (this.clicked || !this.number || dialog.notClickable || this.number < 1 || this.classList.contains('dqzw-boss-filter-grayscale')) return;
                this.clicked = true;
                this.icon.style.animation = 'dqzw-boss-rotate .5s linear forwards';
                this.icon.addEventListener('webkitAnimationEnd', function end() {
                    setTimeout(() => (this.style.animation = ''), 100);
                    that.clicked = false;
                    this.removeEventListener('webkitAnimationEnd', end);
                });
                setTimeout(() => (this.clicked = false), 1000);
                if (options.refresh) {
                    let func = item => {
                        let container = createCommodity(item);
                        if (!'type' in item) item.type = 'other';
                        if (item.number) container.number = Number(item.number);
                        if (!item.id) item.id = get.id();
                        if (item.init) item.init.call(item, container.node, container);
                        return container;
                    },
                        exec = player.dqzw_shopRefreshCallback() || [];
                    exec.forEach(item => {
                        if (item.content) {
                            if (item.eval) eval(`(${item.content}());`);
                            else item.content(player);
                        }
                    });
                    options.eval ? eval(`map = (${options.refresh}).call(options, map, originalMap, func, list) || map`) : (map = options.refresh.call(options, map, originalMap, func, list) || map);
                    if (btnTypeContainer.current) btnTypeContainer.current.classList.toggle('dqzw-selected');
                    filter.call(btnTypeContainer.current);
                    Object.keys(map)
                        .map(type => map[type])
                        .forEach(list => {
                            list.forEach((item, index) => {
                                (item.info || {}).__index__ = index;
                            });
                        });
                    refresh.number--;
                    countRefresh++;
                    popup(
                        refresh,
                        -1,
                        {
                            right: '-16%',
                        },
                        { callback: update }
                    );
                }
            }
            function customWindow(e) {
                if (shopping.open && [this, ui.arena].includes(e.target)) closeShopping();
                if (give.open && [this, ui.arena].includes(e.target)) closeGive();
            }
            function createTypeButton(item) {
                let node;
                if (typeof item.type != 'string') {
                    return;
                }
                if (!map[item.type]) {
                    node = ui.create.div('.dqzw-boss-shop-type-button.pointerdiv', item.name || get.translation(item.type), btnTypeContainer, filter).info = item;
                    map[item.type] = [];
                }
                return node;
            }
            function createCommodity(item, position, noclick) {
                let container = ui.create.div('.dqzw-boss-shop-commodity-container', position),
                    commodity = ui.create.div('.dqzw-boss-shop-commodity', container, {
                        backgroundImage: `url(${url}background/back_commodity_level_${item.level || 0}.png)`,
                    }),
                    count = ui.create.div('', String(item.number || ''), commodity, {
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '2%',
                        right: '2%',
                        width: '20%',
                        height: '12%',
                        color: 'white',
                        fontSize: height * 2 + 'px',
                    }),
                    text = ui.create.div('.text', item.name || get.translation(item.type || '') || '？？？', commodity),
                    info = ui.create.div('.dqzw-commodity-info', item.info || '暂无描述', commodity),
                    btnPurchase = ui.create.div('.dqzw-boss-shop-commodity-purchase', container),
                    price = setPress(
                        ui.create.div(
                            '.dqzw-boss-shop-commodity-price.pointerdiv',
                            String(item.price || '免费'),
                            btnPurchase,
                            noclick
                                ? void 0
                                : function () {//QQQ
                                    purchase.apply(container, arguments);
                                }
                        )
                    );
                container.info = item;
                container.node = {
                    commodity,
                    count,
                    text,
                    info,
                    btnPurchase,
                    price,
                };
                return container;
            }
            function popup(node, str, style = {}, options = {}, time = 800, classList = '') {
                let nodex = ui.create.div(
                    classList,
                    str,
                    {
                        position: 'absolute',
                        right: '-65%',
                        fontSize: height * 3 + 'px',
                        color: 'white',
                        ...style,
                    },
                    node
                );
                move(nodex, options.x, options.y || '-60%');
                if (!isNaN(Number(str)))
                    animate.call(
                        nodex,
                        Object.assign(
                            {
                                from: 0,
                                to: Number(str),
                                duration: 500,
                                step: num => (nodex.innerHTML = (num > 0 ? '+' : '') + num),
                            },
                            options,
                            {
                                callback() {
                                    setTimeout(() => nodex.delete(), 200);
                                    if (options.callback) return options.callback.apply(this, arguments);
                                },
                            }
                        )
                    );
                else setTimeout(() => nodex.delete(), time);
            }
            function move(node, x, y, time = 0.5, callback) {
                node.style.animation = `dqzw-boss-move 2 ${time}s forwards alternate`;
                node.style.setProperty('--dqzw-boss-move-y', y || '0');
                node.style.setProperty('--dqzw-boss-move-x', x || '0');
                node.style.animationPlayState = 'running';
                node._done = false;
                node.addEventListener('webkitAnimationEnd', end);
                setTimeout(end, time * 1000 + 200 || 1000);
                function end() {
                    if (node._done) return;
                    if (callback) callback.apply(this, arguments);
                    node._done = true;
                    node.style.animationPlayState = 'paused';
                    node.removeEventListener('webkitAnimationEnd', end);
                }
            }
            function setPress(node, end, start) {
                node.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
                    if (_status.dragged) return;
                    if (lib.config.button_press && !this.classList.contains('hidden')) {
                        this.classList.add('pressdown');
                        this.style.transform = 'scale(.95)';
                    }
                    if (start) start.apply(this, arguments);
                });
                node.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
                    if (lib.config.button_press) {
                        this.classList.remove('pressdown');
                        this.style.transform = '';
                    }
                    if (_status.dragged) return;
                    if (end) end.call(this, arguments);
                });
                return node;
            }
            function setScroll(node) {
                node.addEventListener('wheel', e => {
                    if (e.target != node) return;
                    e.preventDefault();
                    let delta = e.deltaY;
                    node.scrollLeft -= -delta;
                });
                lib.setScroll(node);
                return node;
            }
        }
    },
};

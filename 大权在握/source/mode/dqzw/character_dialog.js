import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
// 选将框样式
lib.dqzw_boss_characterDialogStyle = {
    // 默认
    default(dialog, id, list, players, filter) {
        let table = ui.create.div({
            display: 'flex',
            justifyContent: players.length < 4 ? 'center' : '',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            height: '100%',
            overflowX: 'auto'
        }, dialog.content)
            , map = {}
            , charlist = []
            , clone = [...players];
        if (clone.includes(game.me))
            clone.remove(game.me).unshift(game.me);
        clone.forEach(player => {
            create(player);
        });
        dialog.table = table;
        function create(player) {
            let container = ui.create.div(
                '.shadowed',
                table,
                {
                    position: 'relative',
                    width: '26%',
                    margin: '0 3%'
                }
            )
                , playerInfo = ui.create.div(
                    '.text.center',
                    container,
                    get.cnNumber(player.seatNum, true)
                    + '号位-' +
                    (player == game.me ?
                        '你' : (player.nickname || '队友(AI)'))
                    + '的选将',
                    {
                        position: 'relative'
                    }
                )
                , characterList = ui.create.div(
                    '.buttons',
                    container,
                    {
                        display: 'grid',
                        gridTemplateColumns: 'auto auto',
                        gridGap: '1vh ' + document.body.offsetWidth / 100 * 2 + 'px',
                        position: 'relative',
                        padding: '2px',
                        overflow: 'auto'
                    }
                );
            lib.setScroll(characterList);
            container.characterList = characterList;
            container.playerInfo = playerInfo;
            container.ownerId = player.playerid;
            charlist.push(container);
            if (Array.isArray(list[player.playerid])) {
                map[player.playerid] = player;
                let buttons = ui.create.buttons(
                    list[player.playerid],
                    'character',
                    characterList,
                )
                    , isMe = player.playerid == game.me.playerid;
                dialog.buttons = dialog.buttons.concat(buttons);
                buttons.forEach(button => {
                    button.ownerId = player.playerid;
                    if (!isMe && (filter ? !filter(button, player, buttons, dialog) : true))
                        button.classList.add('noclick');
                });
            }
            else {
                let str = player.playerid + 'no character list';
                game.print(str);
            };
            return container;
        };
        dialog.add(' ');
        dialog._avatar = map;
        table.characterList = charlist;
        setScroll(table);
        function setScroll(node) {
            node.addEventListener(
                'wheel',
                e => {
                    if (e.target != node)
                        return;
                    e.preventDefault();
                    let delta = e.deltaY;
                    node.scrollLeft -= -delta
                }
            );
            lib.setScroll(node);
            return node;
        };
    },
    // 新杀
    decade(dialog, id, list, players, filter, avatarId, idList) {
        let table = ui.create.div({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            height: dialog.clientHeight / 100 * 86 + 'px',
            overflowY: 'auto'
        }, dialog.content)
            , map = {}
            , charlist = [];
        if (players.includes(game.me))
            dialog.add('你是<span style = "color: rgba(255, 208, 178, .75)">第'
                + get.cnNumber(game.me.seatNum, true)
                + '个</span>行动,请选择你的武将'
            );
        players.forEach(player => {
            create(player);
        });
        dialog.table = table;
        dialog._open = function () {
            let buttons = this.buttons;
            for (let button of buttons)
                game.broadcastAll((avatar, name) => {
                    if (avatar)
                        avatar.init(name);
                }, button, button.link);
            this._opened = true;
            if (_status.connectMode)
                setTimeout(() => game.resume(), 800);
        };
        dialog._over = function () {
            if (!lib.playerOL)
                return;
            let buttons = this.buttons;
            for (let button of buttons)
                game.broadcastAll(id => {
                    if (lib.playerOL)
                        delete lib.playerOL[id];
                }, button.playerid)
        };
        dialog._callback = (dialog, player, result, over) => {
            let avatar = dialog._avatar && dialog._avatar[player.playerid];
            if (over) {
                if (result.links || result) {
                    if (game.online)
                        game.send('exec', func, dialog.videoId, result, player);
                    else func(dialog.videoId, result, player);
                    function func(id, result, player) {
                        game.broadcastAll((id, result, player) => {
                            let dialog = get.idDialog(id)
                                , name = result.links || result;
                            if (dialog && dialog.table && name && name.includes) {
                                let characters = [
                                    ...([...dialog.table.children]
                                        .find(node => node.ownerId == player.playerid)
                                        .characterList.children)
                                ];
                                if (characters)
                                    characters.forEach(button => {
                                        if (button && name.includes(button.link)) {
                                            button.classList.add('target');
                                            button.setNickname('已选定');
                                        };
                                    });
                            };
                        }, id, result, player);
                    };
                };
            } else if (avatar) {
                if (result) {
                    if (game.online)
                        game.send('exec', init, avatar, result);
                    else init(avatar, result);
                }
                else {
                    if (game.online)
                        game.send('exec', init, avatar);
                    else init(avatar);
                };
                function init(avatar, name) {
                    game.broadcastAll((avatar, name) => {
                        avatar[name ? 'init' : 'uninit'](...(name || []));
                    }, avatar, name);
                };
            };
        };
        game.filterPlayer(true, null, true).forEach(player => player.hide());
        if (_status.connectMode && !game.online)
            game.pause();
        function create(player) {
            let isMe = game.me == player
                , height = table.clientHeight / 100
                , seatNum = player.seatNum
                , container = ui.create.div(
                    '.shadowed',
                    table,
                    {
                        display: 'flex',
                        position: 'relative',
                        width: '100%',
                        minHeight: height * 40 + 'px',
                        marginBottom: '2%',
                    }
                )
                , otherInfo = ui.create.div(
                    container,
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        width: '2.6%',
                        height: height * 40 + 'px',
                        margin: '0 1% 0 .5%'
                    }
                )
                , side = ui.create.div(
                    otherInfo,
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        width: '100%',
                        height: '26%',
                        background: 'hsl(130, 28%, 29%)',
                        borderRadius: '5px',
                    }
                )
                , round = ui.create.div(
                    '',
                    isMe ? '我' : '友',
                    side,
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '84%',
                        height: '50%',
                        borderRadius: '50%',
                        background: 'hsl(118, 28%, 23%)'
                    }
                )
                , listOwner = ui.create.div(
                    '',
                    Array.prototype.join.call((isMe ? '我的' : '友方') + '武将', '<br>'),
                    otherInfo,
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        color: isMe ? 'hsl(26, 44%, 22%)' : 'white',
                        width: '100%',
                        height: '74%',
                        textShadow: isMe ? 'none' : '',
                        background: `linear-gradient(hsl(${isMe ? '41, 45%, 55%' : '26, 44%, 22%'}), hsl(${isMe ? '48, 74%, 71%' : '24, 54%, 34%'}))`,
                        clipPath: 'polygon(90% 0, 90% 90%, 50% 100%, 10% 90%, 10% 0)',
                        webkitClipPath: 'polygon(90% 0, 90% 90%, 50% 100%, 10% 90%, 10% 0)',
                        fontSize: document.body.offsetHeight / 100 * 3 + 'px'
                    }
                )
                , seat = ui.create.div(
                    '',
                    '<div style = "transform: rotate(-45deg)">' + seatNum + '</div>',
                    otherInfo,
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: height * 5 + 'px',
                        height: height * 5 + 'px',
                        whiteSpace: 'nowrap',
                        color: isMe ? 'white' : 'hsl(26, 44%, 22%)',
                        textShadow: isMe ? '' : 'none',
                        background: `hsl(${!isMe ? '41, 45%, 55%' : '26, 44%, 22%'})`,
                        transform: `translateY(${height * 8}px) rotate(45deg) scale(.55)`,
                        fontSize: document.body.offsetHeight / 100 * 2.5 + 'px'
                    }
                )
                , characterList = ui.create.div(
                    '.buttons',
                    container,
                    {
                        position: 'relative',
                        width: '90%',
                        whiteSpace: 'nowrap',
                        overflowX: 'auto'
                    }
                )
                , playerInfo = ui.create.div(
                    '.shadowed',
                    characterList,
                    (isMe && !player.nickname ?
                        '你的选将' : (player.nickname || '小杀-' + String(get.id()).slice(0, 6))),
                    {
                        display: 'block',
                        position: 'relative',
                        textAlign: 'left',
                        paddingLeft: '2px',
                        margin: 'none',
                        fontSize: document.body.offsetHeight / 100 * 3 + 'px'
                    }
                );
            setScroll(characterList);
            container.characterList = characterList;
            container.playerInfo = playerInfo;
            container.ownerId = player.playerid;
            charlist.push(container);
            if (Array.isArray(list[player.playerid])) {
                let buttons = []
                    , online = game.online;
                for (let name of list[player.playerid]) {
                    let meavatar = ui.create.player(characterList, true)
                        , width = document.body.offsetWidth
                        , originalWidth = width * game.documentZoom * .65
                        , wideScreen = originalWidth > 600;
                    Object.assign(meavatar.style, {
                        position: 'relative',
                        margin: '-1% 1.5% 0 1.5%',
                        zoom: width / (originalWidth / 9) / (wideScreen ? 18 : 38)
                    });
                    if (idList && lib.playerOL) {
                        let id = idList.shift();
                        meavatar.playerid = id;
                        lib.playerOL[id] = meavatar;
                    };
                    meavatar.link = name;
                    meavatar.node.hp.style.whiteSpace = 'normal';
                    meavatar.node.name.style.whiteSpace = 'normal';
                    meavatar.node.count.remove();
                    meavatar.node.marks.remove();
                    meavatar.classList.add('isbutton');
                    meavatar.addEventListener(
                        lib.config.touchscreen ?
                            'touchend' : 'click',
                        ui.click.button
                    );
                    buttons.push(meavatar);
                };
                dialog.buttons = dialog.buttons.concat(buttons);
                buttons.forEach(button => {
                    button.ownerId = player.playerid;
                    if (!isMe && (filter ? !filter(button, player, buttons, dialog) : true))
                        button.classList.add('noclick');
                });
            }
            else {
                let str = player.playerid + 'no character list';
                game.print(str);
            };
            return container;
        };
        let meList = [...table.children].find(node => node.ownerId == game.me.playerid);
        if (meList)
            table.scrollTop = meList.offsetTop;
        dialog._avatar = map;
        dialog.add(' ');
        table.characterList = charlist;
        function setScroll(node) {
            node.addEventListener(
                'wheel',
                e => {
                    if (e.target != node)
                        return;
                    e.preventDefault();
                    let delta = e.deltaY;
                    node.scrollLeft -= -delta
                }
            );
            lib.setScroll(node);
            return node;
        };
    },
    // 老杀
    online(dialog, id, list, players, filter, avatarId) {
        let table = ui.create.div({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            height: dialog.clientHeight / 100 * 94 + 'px'
        }, dialog.content)
            , avatar = ui.create.div({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                height: '30%'
            }, table)
            , character = ui.create.div({
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                width: '100%',
                height: '60%',
                overflowY: 'auto'
            }, table)
            , map = {}
            , charlist = []
            , clone = [...players];
        if (clone.includes(game.me))
            clone.remove(game.me).unshift(game.me);
        clone.forEach(player => {
            create(player);
        });
        dialog.style.background = 'none';
        dialog.style.boxShadow = 'none';
        dialog.character = character;
        dialog.avatar = avatar;
        dialog.table = table;
        dialog._callback = (dialog, player, result, over) => {
            let avatar = dialog._avatar && dialog._avatar[player.playerid];
            if (over) {
                if (result.links || result) {
                    if (game.online)
                        game.send('exec', func, dialog.videoId, result, player);
                    else func(dialog.videoId, result, player);
                    function func(id, result, player) {
                        game.broadcastAll((id, result, player) => {
                            let dialog = get.idDialog(id)
                                , name = result.links || result;
                            if (dialog && dialog.character && name && name.includes) {
                                let characters = [
                                    ...([...dialog.character.children]
                                        .find(node => node.ownerId == player.playerid)
                                        .characterList.children)
                                ]
                                    , avatar = dialog._avatar && dialog._avatar[player.playerid];
                                if (characters)
                                    characters.forEach(button => {
                                        if (name.includes(button.link))
                                            button.classList.add('target');
                                    });
                                if (avatar) {
                                    avatar.init(...name);
                                    avatar.node.intro.classList.remove('showintro');
                                    avatar.setNickname((player.nickname ? (player.nickname + '-') : '') + '已选定');
                                };
                            };
                        }, id, result, player);
                    };
                };
            } else if (avatar) {
                if (result) {
                    if (game.online)
                        game.send('exec', init, avatar, result);
                    else init(avatar, result);
                } else {
                    if (game.online)
                        game.send('exec', init, avatar);
                    else init(avatar);
                };
                function init(avatar, name) {
                    game.broadcastAll((avatar, name) => {
                        avatar[name ? 'init' : 'uninit'](...(name || []));
                    }, avatar, name);
                };
            };
        };
        game.filterPlayer(true, null, true).forEach(player => player.hide());
        lib.setScroll(avatar);
        lib.setScroll(character);
        function create(player) {
            let container = ui.create.div(
                character,
                {
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    minHeight: character.clientHeight / 100 * 48 + 'px',
                    marginBottom: '2%'
                }
            )
                , playerInfo = ui.create.div(
                    '.menubutton',
                    container,
                    Array.prototype.join.call((player == game.me ?
                        '已方' : '队友')
                        + '选将', '<br>'),
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        margin: 'none',
                        marginRight: '1%'
                    }
                )
                , characterList = ui.create.div(
                    '.shadowed.buttons',
                    container,
                    {
                        position: 'relative',
                        width: '90%',
                        whiteSpace: 'nowrap',
                        overflowX: 'auto'
                    }
                );
            let meavatar = ui.create.player(avatar, true)
                , width = document.body.offsetWidth
                , originalWidth = width * game.documentZoom * .65
                , wideScreen = originalWidth > 600;
            Object.assign(meavatar.style, {
                position: 'relative',
                zoom: width / (originalWidth / 9) / (wideScreen ? 18 : 36),
                margin: '0 3% 4% 3%'
            });
            meavatar.node.count.remove();
            meavatar.node.marks.remove();
            meavatar.node.isme = ui.create.div(
                '.nameol',
                (player == game.me ? '自己-' : '')
                + get.cnNumber(player.seatNum, true)
                + '号位',
                meavatar,
                {
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    top: '-22%',
                    whiteSpace: 'nowrap',
                    zIndex: 250,
                    fontSize: document.body.offsetHeight / 100 * 2.5 + 'px'
                }
            );
            if (player == game.me)
                meavatar.style.boxShadow = 'rgba(0, 0, 0, .3) 0 0 0 1px, rgb(10, 155, 67) 0 0 20px';
            if (avatarId && lib.playerOL) {
                let id = avatarId[players.indexOf(player)];
                meavatar.playerid = id;
                lib.playerOL[id] = meavatar;
            };
            if (player.nickname)
                meavatar.setNickname(player.nickname);
            setScroll(characterList);
            container.characterList = characterList;
            container.ownerId = player.playerid;
            charlist.push(container);
            if (Array.isArray(list[player.playerid])) {
                map[player.playerid] = meavatar;
                let buttons = ui.create.buttons(
                    list[player.playerid],
                    'character',
                    characterList,
                )
                    , isMe = player.playerid == game.me.playerid;
                dialog.buttons = dialog.buttons.concat(buttons);
                buttons.forEach(button => {
                    button.ownerId = player.playerid;
                    button.style.zoom = width / (originalWidth / 9) / (wideScreen ? 11 : 24);
                    if (!isMe && (filter ? !filter(button, player, buttons, dialog) : true))
                        button.classList.add('noclick');
                });
            }
            else {
                let str = player.playerid + 'no character list';
                game.print(str);
            };
            return container;
        };
        dialog._avatar = map;
        dialog.add(' ');
        table.characterList = charlist;
        function setScroll(node) {
            node.addEventListener(
                'wheel',
                e => {
                    if (e.target != node)
                        return;
                    e.preventDefault();
                    let delta = e.deltaY;
                    node.scrollLeft -= -delta
                }
            );
            lib.setScroll(node);
            return node;
        };
    }
}; 
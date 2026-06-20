import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
import { showSignInPage } from './sign_in.js';
import { exchange } from './exchange.js';
import { rewards } from './sign_in.js';
lib.message.server.exec = lib.message.client.exec;
// 启动!
ui.create.dqzw_boss_modeStartPage = (connectConfig = {}) => {
    if (!_status.dqzw_boss_mode)
        _status.dqzw_boss_mode = connectConfig.mode;
    let modeConfig = connectConfig.modeConfig || _status.dqzw_mode_config
        , connectMode = _status.connectMode
        , cardPileItems = game.online ? connectConfig.cardPileItems : Object.keys(lib.mode[lib.config.mode].config.card_list_multiple.item)
        , cardPileCurrent = cardPileItems.indexOf(get.configOL('card_list_multiple', 'dqzw_guihuaxishuang'))
        , level
        , currentLevel
        , back = ui.create.div('.background', ui.window, { fontSize: 'var(--dqzw-boss-mode-start-page-font-size)' })
        , startBtn = game.online ? {} : ui.create.div('.dqzw-mode-start-button.pointerdiv', back, start)
        , closeBtn = ui.create.div('.dqzw-mode-start-close-btn.pointerdiv', back, e => {
            if (e.target == closeBtn)
                if (confirm(connectMode ? '是否退出房间？' : '是否重启游戏？'))
                    game.reload();
        })
        , modeSwitchBtn = ui.create.div('.dqzw-mode-start-mode-switch-btn', '<div></div><div class = dqzw-mode-start-mode-switch-box></div><div></div>', back)
        , helpBtn = ui.create.div('.dqzw-mode-start-help-btn.pointerdiv', '<div>?</div>', closeBtn, showHelp)
        , info = ui.create.div('.dqzw-mode-start-level-info', back)
        , enemyInfo = ui.create.div('.dqzw-mode-start-enemy-info', info)
        , enemyIntro = ui.create.div('', '敌人属性', enemyInfo)
        , enemyEffect = ui.create.div('', enemyInfo)
        , levelChoose = ui.create.div(
            '.dqzw-mode-start-level-choose',
            `<div></div>`,
            info
        )
        , switchBtn = ui.create.div(
            '.dqzw-mode-start-switch-button.pointerdiv',
            '<div>⇋<div>',
            info,
            () => {
                if (game.online)
                    alert('只有房主可进行该操作!');
                else changeLevel();
            }
        )
        , system = lib.dqzw_boss_oldAnimate.call(
            ui.create.div(
                '.dqzw-mode-start-system',
                back
            ),
            'dqzw-boss-scale',
            2000
        )
        , cardPileSet = lib.dqzw_boss_oldAnimate.call(
            ui.create.div(
                '.dqzw-mode-start-system-card-pile-set',
                `<div></div>`,
                back
            ),
            'dqzw-boss-scale',
            2000
        )
        , cardPileSetBtn = lib.dqzw_boss_oldAnimate.call(
            ui.create.div(
                '.dqzw-mode-start-system-card-pile-set-btn.pointerdiv',
                '×',
                cardPileSet,
                () => {
                    if (game.online)
                        alert('只有房主可进行该操作!');
                    else changeCardPile(1);
                }
            ),
            'dqzw-boss-scale',
            2000
        )
        , cardPileLeftSetBtn = lib.dqzw_boss_oldAnimate.call(
            ui.create.div(
                '.dqzw-mode-start-system-card-pile-set-btn.dqzw-mode-start-system-card-pile-left-set-btn.pointerdiv',
                '<div>-</div>',
                cardPileSet,
                () => {
                    if (game.online)
                        alert('只有房主可进行该操作!');
                    else changeCardPile();
                }
            ),
            'dqzw-boss-scale',
            2000
        )
        , container, unfold, originalSystem, connectPlayers, currentIP, currentRoomId, currentRoomPassword, connectButtons;
    {
        let ip = String(_status.ip || '未知')
            , index = ip.lastIndexOf(':')
            , hasShare, hasRoomInfo;
        ip = ip.slice(0, index == -1 ? void 0 : index);
        container = ui.create.div('.dqzw-mode-start-connect-players-container', back);
        unfold = ui.create.div('.pointerdiv', container, function () {
            if (!connectMode) {
                alert('不为联机模式');
                return;
            };
            this.classList.toggle('dqzw-mode-start-connect-players-unfold');
            container.classList.toggle('dqzw-mode-start-connect-players-unfold');
        });
        originalSystem = ui.create.div('.dqzw-mode-start-connect-players-system', container);
        connectPlayers = ui.create.div('.dqzw-mode-start-connect-players', container);
        currentIP = ui.create.div('.dqzw-mode-start-connect-players-ip', ip, container);
        connectButtons = ui.create.div('.dqzw-mode-start-connect-players-connect-mode-buttons', container);
        if (connectMode)
            currentRoomId = ui.create.div('.dqzw-mode-start-connect-players-roomId', `房间号:${game.roomId || connectConfig.roomId}`, container);
        function createSystemButton() {
            [...ui.system.children].forEach(system => {
                [...system.children].forEach(button => {
                    if ([...originalSystem.children].includes(button))
                        return;
                    // 无法复制监听器,这里直接把按钮搬过来
                    button.__dqzw_boss_mode_start_system_originalParentNode__ = system;
                    button.__dqzw_boss_mode_start_system_originalClassName__ = button.className;
                    button.className = 'dqzw-mode-start-connect-players-system-button';
                    // 隐藏没必要出现的按钮,防止移动端误触
                    if (/重来|退出房间|房间(设置|信息)|整理手牌|不询问无懈/.test(button.textContent))
                        button.hide();
                    originalSystem.appendChild(button);
                });
            });
            // 分享房间
            if (!hasShare && ui.connectShareButton) {
                let share = ui.connectShareButton;
                share.className = 'dqzw-mode-start-connect-players-system-button';
                connectButtons.appendChild(share);
                hasShare = true;
            };
            // 房间设置/信息
            if (!hasRoomInfo && ui.roomInfo) {
                ui.roomInfo.show();
                ui.roomInfo.className = 'dqzw-mode-start-connect-players-system-button';
                connectButtons.appendChild(ui.roomInfo);
                hasRoomInfo = true;
            };
            if (!game.online && !currentRoomPassword && String(game.roomPassword) && (typeof game.roomPassword == 'number' ? true : game.roomPassword)) {
                currentRoomPassword = ui.create.div('.dqzw-mode-start-connect-players-roomPassword.pointerdiv', `房间密码:<div>${game.roomPassword}</div>`, container, hiddenRoomPassword);
                ui.dqzw_boss_mode_start_currentRoomPassword = currentRoomPassword;
            };
        };
        createSystemButton();
        _status._dqzw_boss_mode_create_system_buttons = setInterval(createSystemButton, 2000);
    };
    createSystem('商', '商店', () => { }, true);
    {
        let btn = createSystem('签', '签到', showSignInPage, true).firstChild,
            list = rewards.at(-1),
            signId = lib.config.dqzw_boss_signIn_id,
            backpackId = lib.config.dqzw_backpackId;
        setInterval(() => {
            let backpack = get.DqzwBackpack(backpackId),
                date = get.DqzwSignIn(signId),
                signIn = backpack && backpack.get('signIn') && (backpack.get('signIn')[signId] || []);
            if ((!date || !date.length || !signIn) || signIn && !list.every((_item, index) => signIn.includes(index + 1)) && date.length > signIn.length) tip(btn);
            else tip(btn, true);
        }, 1000);
    };
    createSystem('兑', '兑换码', exchange, true);
    createSystem('将', '将池编辑', game.online ? null : lib.mode[lib.config.mode].config.boss_character_list.onclick);
    createSystem('杀', '图鉴');
    modeSwitchBtn.children[1].addEventListener('click', function (e) {
        if (game.online)
            alert('只有房主可进行该操作!');
        else ui.click.intro.call(this, { touches: [e], ...e });
    });
    lib.setIntro(modeSwitchBtn.children[1], dialog => {
        Object.keys(lib.dqzw_boss_modes).forEach(mode => {
            dialog.add(ui.create.div('.menubutton.pointerdiv', lib.dqzw_boss_modes[mode], () => {
                if (game.online)
                    alert('只有房主可进行该操作!');
                else changeMode(mode);
                dialog.close();
            }));
        });
    });
    changeMode(game.online ? connectConfig.mode : _status.dqzw_boss_mode || 'guihua', connectConfig.level);
    changeLevel(true);
    changeCardPile(false);
    updateConnectPlayers();
    ui.arena.classList.add('forcehide');
    ui.system.classList.add('forcehide');
    ui.window.classList.add('connect-custom-page');
    if (ui.time)
        ui.time.hide();
    if (ui.time3)
        ui.time3.hide();
    if (!connectMode)
        game.pause();
    else ui.window.classList.add();
    _status._dialog_func_exec = function (func, ...args) {
        eval(`(${func})(...args)`);
    };
    _status._dqzw_boss_mode_start = start;
    lib.config.dqzw_boss_config_cardPile = cardPileItems;
    if (!game.online && connectMode) {
        {
            let original = game.updateWaiting;
            game.updateWaiting = function () {
                let result = original.apply(this, arguments);
                updateConnectPlayers();
                broadcast(updateConnectPlayers);
                return result;
            };
        };
        {
            let original = ui.create.connectPlayers;
            ui.create.connectPlayers = function () {
                let result = original.apply(this, arguments);
                updateConnectPlayers();
                //broadcast(updateConnectPlayers);
                return result;
            };
        };
    };
    function start() {
        if (connectMode && game.connectPlayers) {
            if (this.clicked)
                return;
            if (game.online) {
                if (game.onlinezhu) {
                    game.send('startGame');
                }
                else {
                    game.saveConfig('tmp_owner_roomId');
                    game.saveConfig('tmp_user_roomId');
                    game.saveConfig('reconnect_info');
                    game.reload();
                }
            }
            else game.resume();
            if (ui.connectStartButton)
                ui.connectStartButton.delete();
            delete ui.connectStartButton
            if (ui.connectStartBar)
                ui.connectStartBar.delete();
            delete ui.connectStartBar;
            if (ui.connectShareButton)
                ui.connectShareButton.delete();
            delete ui.connectShareButton;
            this.clicked = true;
        };
        if (_status._dqzw_boss_mode_create_system_buttons)
            clearInterval(_status._dqzw_boss_mode_create_system_buttons);
        delete _status._dqzw_boss_mode_create_system_buttons;
        if (originalSystem)
            [...originalSystem.children].forEach(button => {
                if (button.__dqzw_boss_mode_start_system_originalParentNode__) {
                    button.__dqzw_boss_mode_start_system_originalParentNode__.appendChild(button);
                    delete button.__dqzw_boss_mode_start_system_originalParentNode__;
                };
                button.className = button.__dqzw_boss_mode_start_system_originalClassName__;
                button.show();
                delete button.__dqzw_boss_mode_start_system_originalClassName__;
            });
        ui.arena.classList.remove('forcehide');
        ui.system.classList.remove('forcehide');
        ui.window.classList.remove('connect-custom-page');
        if (ui.time)
            ui.time.show();
        if (ui.time3)
            ui.time3.show();
        back.remove();
        if (!connectMode)
            game.resume();
        delete _status.tempMusic;
        game.playBackgroundMusic();
        game._dqzw_boss_mode_started = true;
        broadcast(start);
    };
    function updateConnectPlayers(players) {
        if ((game.connectPlayers || players) && connectPlayers)
            (game.connectPlayers || players).forEach(player => {
                connectPlayers.appendChild(player);
            });
    };
    function createSystem(icon, intro, listen, type) {
        let systemBtn = lib.dqzw_boss_oldAnimate.call(ui.create.div('.dqzw-mode-start-system-button.pointerdiv', system, listen), 'dqzw-boss-scale2', 2000);
        if (icon !== false) {
            let systemIcon = ui.create.div('.dqzw-mode-start-system-icon.'
                + (type ? 'dqzw-boss-other'
                    : 'dqzw-boss-pictorial-manual'
                ), systemBtn);
            if (typeof icon == 'string')
                systemIcon.style.setProperty(
                    '--text',
                    `'${icon}'`
                );
        };
        if (typeof intro == 'string')
            systemBtn.innerHTML += intro;
        return systemBtn;
    };
    function changeCardPile(bool) {
        if (bool !== false) {
            if (bool)
                cardPileCurrent++;
            else cardPileCurrent--;
        };
        if (cardPileCurrent >= cardPileItems.length)
            cardPileCurrent = 0;
        if (cardPileCurrent < 0)
            cardPileCurrent = cardPileItems.length - 1;
        let result = cardPileItems[cardPileCurrent];
        cardPileSet.firstChild.innerHTML = result;
        game.saveConfig('card_list_multiple', result, 'dqzw_guihuaxishuang');
        broadcast(str => {
            cardPileSet.firstChild.innerHTML = str;
        }, cardPileSet.firstChild.innerHTML);
        return result;
    };
    function changeLevel(bool) {
        if (bool !== true)
            currentLevel++;
        if (currentLevel >= level.length)
            currentLevel = 0;
        let result = level[currentLevel];
        game.saveConfig(`dqzw_boss_${_status.dqzw_boss_mode}_mode_level`, currentLevel);
        levelChoose.firstChild.innerHTML = get.translation(result);
        levelChoose.firstChild.currentLevel = result;
        updateEnemyInfo();
        broadcast(str => {
            levelChoose.firstChild.innerHTML = str;
        }, levelChoose.firstChild.innerHTML);
        return result;
    };
    function updateEnemyInfo() {
        let result = level[currentLevel]
            , info = get.translation(result + '_info')
            , title = `dqzw_boss_checkpointLevel_${_status.dqzw_boss_mode}_${currentLevel + 1}_title`
            , titleInfo = get.translation(title);
        if (info)
            enemyEffect.innerHTML = info.replace(/<(nd|\/nd|nt|\/nt)>/gm, val => {
                if (val.includes('nt')) {
                    if (val[1] == '/')
                        return '</span>';
                    else return '<span class = dqzw-mode-enemy-info-text>';
                } else {
                    if (val[1] == '/')
                        return '</div>';
                    else return '<div>';
                };
            });
        else enemyEffect.innerHTML = '未知';
        enemyIntro.innerHTML = (titleInfo == title || !titleInfo) ? '敌人属性' : titleInfo;
        broadcast((str, str2) => {
            enemyIntro.innerHTML = str;
            enemyEffect.innerHTML = str2;
        }, enemyIntro.innerHTML, enemyEffect.innerHTML);
        return enemyEffect.innerHTML;
    };
    function changeMode(mode, Level) {
        if (mode) {
            _status.dqzw_boss_mode = mode;
            _status.mode = mode;
        };
        modeConfig = _status.dqzw_mode_config = lib.dqzw_mode_config[mode];
        level = [...new Array(get.select(modeConfig.checkpointLevel || 1)[1])].map((_item, index) => {
            return 'dqzw_boss_checkpointLevel_' + _status.dqzw_boss_mode + '_' + (index + 1);
        });
        currentLevel = Number(typeof Level == 'number' && Level || lib.config[`dqzw_boss_${_status.dqzw_boss_mode}_mode_level`]) || 0;
        closeBtn.style.setProperty(
            '--text',
            `'${lib.dqzw_boss_modes[mode]}'`
        );
        if (!/springFestival/.test(_status.dqzw_boss_activity)) {
            _status.tempBackground = modeConfig.background ? modeConfig.background() : 'ext:大权在握/image/background/back_mode_start_page.jpg';
            game.updateBackground();
        } else {
            if (_status.dqzw_boss_activity == 'springFestival')
                _status.tempBackground = `ext:大权在握/image/activity/springFestival/background/mode_${mode}.jpg`;
            game.updateBackground();
        };
        if (!/springFestival/.test(_status.dqzw_boss_activity) && modeConfig.backgroundMusic)
            _status.tempMusic = modeConfig.backgroundMusic();
        else delete _status.tempMusic;
        game.playBackgroundMusic();
        if (modeConfig.startPageSet)
            eval(`(${modeConfig.startPageSet}())`);
        changeLevel(true);
        game.saveConfig('dqzw_mode', mode, 'dqzw_guihuaxishuang');
        broadcast((back, music, mode) => {
            _status.tempBackground = back;
            _status.tempMusic = music;
            game.updateBackground();
            game.playBackgroundMusic();
            if (mode)
                _status.dqzw_boss_mode = mode;
            modeConfig = _status.dqzw_mode_config = lib.dqzw_mode_config[mode];
            closeBtn.style.setProperty(
                '--text',
                `'${lib.dqzw_boss_modes[mode]}'`
            );
        }, _status.tempBackground, _status.tempMusic, mode);
    };
    function hiddenRoomPassword() {
        let node = ui.dqzw_boss_mode_start_currentRoomPassword
            , password;
        if (node) {
            node.classList.toggle('dqzw-mode-start-hidden-password');
            password = node.classList.contains('dqzw-mode-start-hidden-password')
                ? String(game.roomPassword).replace(/\d/g, '*')
                : game.roomPassword;
            node.firstElementChild.innerHTML = password;
        };
    };
    function showHelp() {
        let help = `dqzw_boss_${_status.dqzw_boss_mode}_help`
            , helpInfo = get.translation(help);
        if (helpInfo != help && help)
            game.alert(helpInfo);
    };
    function broadcast(func, ...args) {
        game.broadcast((func, args) => {
            if (_status._dialog_func_exec)
                _status._dialog_func_exec(func, ...args);
        }, func, args);
    };
    function tip(node, bool) {
        if (!node)
            return node;
        if (!bool) {
            if (!node._dqzw_boss_tip)
                node._dqzw_boss_tip = ui.create.div('.dqzw-boss-tip', node);
        } else if (node._dqzw_boss_tip) {
            node._dqzw_boss_tip.remove();
            delete node._dqzw_boss_tip;
        };
        return node._dqzw_boss_tip;
    };
};                   
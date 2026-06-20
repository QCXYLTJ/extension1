import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
lib.skill._dqzw_choose_character_audio = {
    trigger: {
        player: 'chooseButtonBegin'
    },
    filter(event, player) {
        return (event.player == game.me
            || event.player.isOnline()
        )
            && event.getParent('chooseCharacter')
                .name == 'chooseCharacter';
        // 开局选将事件名大多都是这个(	                  
    },
    lastDo: true,
    charlotte: true, // 不清楚全局技能
    forced: true, // 会不会被封(
    silent: true,
    forceDie: true, // 虽然应该不会先死再选将但还是加下)
    forceOut: true, // 修整好像选不了捏)
    content() {
        game.broadcastAll(function (me) {
            if (!_status.dqzw_choose_character_audio_done)
                _status.dqzw_choose_character_audio_done = false
            let count = 0
                , create = function (timeout) {
                    let event = _status.event
                        || {}
                        , trigger = event._trigger;
                    if (trigger
                        && /^chooseButton(OL)?$/
                            .test(trigger.name)
                    ) event = trigger;
                    if (/^chooseButton(OL)?$/
                        .test(event.name)
                        && event.player == game.me
                    ) {
                        let custom = event.custom,
                            animate = HTMLElement.prototype.dqzwAnimate,
                            remove = function () {
                                let current = _status.dqzw_current_audio;
                                if (current && current.remove && !current.inAnimate)
                                    animate.call(
                                        current,
                                        {
                                            from: (current.volume || 1) * 1000,
                                            to: 0,
                                            duration: 1000,
                                            step(num) {
                                                this.volume = num / 1000;
                                            },
                                            callback() {
                                                setTimeout(function () {
                                                    current.remove();
                                                    delete _status.dqzw_current_audio;
                                                }, 100);
                                            }
                                        }
                                    );
                            },
                            func = function () {
                                if (_status.dqzw_choose_character_audio_clicked)
                                    return;
                                let buttons = ui.selected.buttons,
                                    info = get.character(buttons.at(-1) && buttons.at(-1).link),
                                    current = _status.dqzw_current_audio;
                                if (this.dqzw_preSelect && buttons.length < this.dqzw_preSelect || !buttons.length) {
                                    this.dqzw_preSelect = buttons.length;
                                    remove();
                                    return;
                                };
                                remove();
                                this.dqzw_preSelect = buttons.length;
                                _status.dqzw_choose_character_audio_clicked = true;
                                setTimeout(function () {
                                    delete _status.dqzw_choose_character_audio_clicked;
                                }, 20);
                                if (info && info[3] && info[3].length) {
                                    current = _status.dqzw_current_audio = game.playAudio(game.parseSkillAudio(info[3].randomGet()).randomGet());
                                }//QQQ
                            };
                        _status.dqzw_choose_character_audio_done = true;
                        let set = function (type, func) {
                            if (custom && custom.add && custom.add[type]) {
                                let original = custom.add[type];
                                custom.add.button = function () {
                                    func();
                                    return original.apply(this, arguments);
                                };
                            } else if (custom && custom.add)
                                custom.add[type] = func;
                            else if (custom)
                                custom.add = {
                                    [type]: func
                                };
                            else event.custom = {
                                add: {
                                    [type]: func
                                },
                                replace: {}
                            };
                        };
                        set('button', func);
                        set('window', function () {
                            if (!ui.selected.buttons.length)
                                remove();
                        });
                    };
                };
            setTimeout(
                function loop() {
                    if (_status.dqzw_choose_character_audio_done)
                        return;
                    create(true);
                    if (game.ws && game.ws.onChooseButton)
                        game.ws.removeEventListener(
                            'message',
                            game.ws.onChooseButton
                        );
                    if (!_status.dqzw_choose_character_audio_done && count++ < 4)
                        setTimeout(
                            loop,
                            2500
                        );
                },
                2000
            );
            if (game.me != me)
                if (game.ws && !game.ws.onChooseButton) {
                    // 联机有延迟,这里监听信息接收事件
                    game.ws.addEventListener(
                        'message',
                        onChooseButton
                    );
                    game.ws.onChooseButton = onChooseButton;
                    function onChooseButton(e) {
                        let message;
                        message = JSON.parse(
                            e.data
                        );
                        if (message[0] == 'exec'
                            && message[1].includes(
                                'game.me.chooseButton'
                            )
                        ) {
                            // 收到含有'game.me.chooseButton'的信息时创建
                            create();
                            if (_status.dqzw_choose_character_audio_done)
                                this.removeEventListener(
                                    'message',
                                    onChooseButton
                                );
                        };
                    }
                };
            create();
        }, game.me);
    }
};
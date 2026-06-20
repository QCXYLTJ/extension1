import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
if (lib.dqzw_custom_connect_init_after)
    lib.dqzw_custom_connect_init_after.push(function (version, config, banned_info) {
        let level = (Number(lib.config[`dqzw_boss_${_status.dqzw_boss_mode}_mode_level`]) || 0);
        if (level > 0)
            level--;
        if (!lib.node.banned.includes(banned_info)
            && !(config.id && lib.playerOL && lib.playerOL[config.id])
            && version == lib.versionOL
            && _status.waitingForPlayer
            && lib.node.clients.length - (window.isNonameServer ? 1 : 0) < parseInt(lib.configOL.number)
        ) this.send((config, info) => {
            Object.assign(lib.element.content, info.element.content);
            Object.assign(lib.character, info.character);
            Object.assign(lib.skill, info.skill);
            Object.assign(lib.translate, info.translate);
            Object.assign(game, info.game);
            if (info.skill)
                for (let name in info.skill)
                    if (get.info(name))
                        game.finishSkill(name);
            ui.create.dqzw_boss_modeStartPage(config);
            updateConnectPlayers();
        }, {
            mode: _status.dqzw_boss_mode,
            cardPileItems: lib.config.dqzw_boss_config_cardPile,
            level,
            roomId: game.roomId
        }, lib.configOL.mode == 'dqzw_guihuaxishuang' ? lib.mode.dqzw_guihuaxishuang._content : null);
    });
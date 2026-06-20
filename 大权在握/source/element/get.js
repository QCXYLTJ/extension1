import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
Object.assign(get, {
    characterTag(name, defaultValue = []) {
        const info = get.character(name);
        if (info && info[4] !== undefined)
            return info[4];
        return defaultValue;
    },
    DqzwSignIn(id) {
        return lib.dqzw_signIn_map && lib.dqzw_signIn_map[id];
    },
    DqzwBackpack(id) {
        return lib.dqzw_backpack_map && lib.dqzw_backpack_map[id];
    },
});
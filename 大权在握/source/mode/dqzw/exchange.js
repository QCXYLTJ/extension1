import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
import { unlock } from './unlock.js';
let map = {
    '祭祀tql!'() {
        if (lib.dqzw_lock_characters)
            for (let name of lib.dqzw_lock_characters)
                unlock.gain([name, 'character']);
    }
};
export async function exchange(options) {
    const code = await game.dqzw_boss_promisePrompt('###请输入兑换码###');
    if (!code)
        return;
    const decode = lib.init.decode(code),
        backpack = get.DqzwBackpack(lib.config.dqzw_backpackId);
    let list = backpack.get('exchange', []);
    if (list.includes(code)) {
        alert('兑换码已被使用');
        return;
    };
    if (map[decode] || options[decode]) {
        let result = (map[decode] || options[decode])(code);
        if (result === false) {
            alert('兑换码已失效');
            return;
        };
        list.add(code);
    } else if (lib.dqzw_lock_characters && lib.dqzw_lock_characters.includes(decode)) {
        unlock.gain([decode, 'character']);
        list.add(code);
    };
    get.DqzwBackpack(lib.config.dqzw_backpackId)
        .set('exchange', list);
};
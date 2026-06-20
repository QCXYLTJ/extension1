import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
import { unlock } from './unlock.js';
export let rewards = [
    ['dqzw_boss_activity_tianhai_shajin', 'dqzw_boss_activity_tianhai_Fuxuan', 'dqzw_boss_activity_tianhai_zhigengniao', 'dqzw_boss_activity_tianhai_Sampo', 'dqzw_boss_activity_tianhai_Xueyi', 'dqzw_boss_activity_tianhai_Hanya', { id: 'dqzw_boss_activity_tianhai_huangquan', grand: true }]
];
export async function showSignInPage(e, list = rewards.at(-1), options = {}) {
    let div = ui.create.div,
        mas = div('.dqzw-boss-container-mas', ui.window),
        container = div('.dqzw-boss-sign-in-container', ui.window),
        content = div('.dqzw-boss-sign-in-content', container),
        rewards = div('.dqzw-boss-sign-in-reward-container', content),
        axle = div('.dqzw-boss-sign-in-axle', container),
        text = div('.dqzw-boss-sign-in-text', '<div><big>登</big>录七天送<big>武将</div></big><br><div>第七天送<big>SSS武将黄泉!</big></div>', content);
    mas.listen((e) => {
        if (e.target == mas) {
            container.classList.add('dqzw-boss-sign-in-container-retract');
            container.addEventListener('webkitAnimationEnd', e => {
                if (e.target == container)
                    container.remove();
            });
            mas.delete();
        };
    });
    let signId = lib.config.dqzw_boss_signIn_id,
        backpackId = lib.config.dqzw_backpackId,
        signIn = get.DqzwSignIn(signId),
        now = await game.getNowTime(),
        backpack = get.DqzwBackpack(backpackId),
        d = now.time.getDate(),
        len;
    if (!signIn.has(time => new Date(time).getDate() == d))
        signIn.add(now.time.getTime());
    len = get.DqzwSignIn(signId).length;
    if (!backpack.get('signIn'))
        backpack.set('signIn', {});
    backpack = get.DqzwBackpack(backpackId);
    if (!backpack.get('signIn')[signId])
        backpack.get('signIn')[signId] = [];
    backpack.update();
    backpack = get.DqzwBackpack(backpackId);
    list.some((item, index) => {
        let name = item.id || item,
            node = ui.create.div('.dqzw-boss-sign-in-reward', rewards),
            avatar = ui.create.div(
                '.menubutton.videoavatar',
                node
            ).setBackground(name, 'character'),
            isOwned = backpack.get('signIn')[signId].includes(index + 1),
            gain = () => {
                if (!isOwned) {
                    unlock.gain([name, 'character']);
                    isOwned = true;
                    node.style.setProperty('--animation', animation + owneAnimation(true));
                    backpack = get.DqzwBackpack(backpackId);
                    backpack.get('signIn')[signId].add(index);
                    backpack.update();
                    backpack = get.DqzwBackpack(backpackId);
                };
            },
            animation = `dqzw-boss-sign-in-reward-retract .4s ${2.2 + .4 * index}s forwards`,
            owneAnimation = bool => `, dqzw-boss-gain-item-margin .4s ${bool ? 0 : 2.2 + .4 * index}s forwards, dqzw-boss-filter .4s ${bool ? 0 : 2.2 + .4 * index}s forwards`;
        index = index + 1;
        node.style.setProperty('--name', `'${get.translation(name)}'`);
        node.style.setProperty('--margin', '1% 1% 0 0');
        node.style.setProperty('--filter', 'grayscale(1)');
        node.style.setProperty('--animation', animation + (isOwned ? owneAnimation() : ''));
        if (item.grand)
            node.classList.add('dqzw-boss-sign-in-grand-reward');
        ui.create.div('.dqzw-boss-sign-in-rarity', node).style
            .setProperty('--background', `url(../../../image/icon/rarity_${game.getRarity(name)}.png)`);
        if (index == len)
            node.classList.add('dqzw-boss-sign-in-current-reward');
        if (index == len + 1)
            node.classList.add('dqzw-boss-sign-in-tomorrow-receive');
        if (index <= len || index == len + 1) {
            if (index <= len)
                node.listen(gain);
            if (!item.grand)
                ui.create.div('.dqzw-boss-sign-in-receive', node);
        };
    });
};
if (!lib.config.dqzw_boss_signIn_id || String(lib.config.dqzw_boss_signIn_id).slice(-1) != rewards.length || !get.DqzwSignIn(lib.config.dqzw_boss_signIn_id) && window.DqzwSignIn)
    game.saveConfig('dqzw_boss_signIn_id', new window.DqzwSignIn(get.id() + rewards.length).id);
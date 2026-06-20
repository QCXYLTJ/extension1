import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
export let itemType = {
    character: {
        init(node, info, args) {
            node.image.innerHTML = '';
            ui.create.div('.menubutton.videoavatar', node.image)
                .setBackground(info.item.id || info.item || '', 'character');
        },
        isOwned(info) {
            let backpack = get.DqzwBackpack(lib.config.dqzw_backpackId);
            if (backpack)
                return backpack.get('character', []).includes(info.item.id || info.item);
        },
        ongain(info) {
            let backpack = get.DqzwBackpack(lib.config.dqzw_backpackId);
            if (backpack) {
                if (!backpack.get('character'))
                    backpack.set('character', []);
                let list = backpack.get('character', []);
                list.add(info.item.id || info.item);
                get.DqzwBackpack(lib.config.dqzw_backpackId)
                    .set('character', list);
            };
        },
        repeated(info) {
            let rarity = game.getRarity(info.item.id || info.item),
                num;
            switch (rarity) {
                case 'legend': num = 5; break;
                case 'epic': num = 2; break;
                default: num = 1; break;
            };
            return {
                item: itemMap.dqzw_boss_coin,
                options: Object.assign(info.options, { number: num }),
                number: num,
                type: itemMap.dqzw_boss_coin.type
            };
        }
    },
    coin: {
        ongain(info) {
            let backpack = get.DqzwBackpack(lib.config.dqzw_backpackId);
            if (backpack) {
                let id = info.item.id;
                if (!backpack.get(id))
                    backpack.set(id, 0);
                let number = backpack.get(id);
                get.DqzwBackpack(lib.config.dqzw_backpackId)
                    .set(id, number + info.number);
            };
        },
    }
};
export let itemMap = {
    dqzw_boss_coin: {
        id: 'dqzw_boss_coin',
        name: '大权币',
        type: 'coin',
        dataType: 'number',
        image: 'icon/coin.png'
    },
    dqzw_boss_skill_point: {
        id: 'dqzw_boss_skill_point',
        name: '技能点',
        type: 'coin',
        dataType: 'number',
        image: 'icon/skill_point.png'
    }
};
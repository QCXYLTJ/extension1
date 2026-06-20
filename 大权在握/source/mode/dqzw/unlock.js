import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
import { itemMap, itemType } from './item.js';
export let num = 0;
export let timer;
export let unlock = {
    gain(item, options = {}) {
        if (typeof item == 'string' && itemMap[item])
            item = itemMap[item];
        if (Array.isArray(item))
            item = {
                id: item[0],
                type: item[1]
            };
        let number = options.number || options.length || Number(options) || 1,
            type = item.type || options.type,
            info = { item, options, number, type },
            exec = (name, ...args) => {
                if (item[name] || itemType[type] && itemType[type][name])
                    return (item[name] || itemType[type][name]).call((item[name] ? item : itemType[type]),
                        ...args
                    );
            };
        if (exec('isOwned', info, arguments)) {
            let result = exec('repeated', info, arguments);
            if (result.item)
                item = result.item;
            if (result.options)
                options = result.options;
            if (result.number)
                number = result.number;
            if (result.type)
                type = result.type;
            info = { item, options, number, type };
        };
        this.$gain.call(this, item, options);
        exec('ongain', info, arguments);
    },
    $gain(item, options = {}) {
        setTimeout(() => {
            if (typeof item == 'string' && itemMap[item])
                item = itemMap[item];
            if (Array.isArray(item))
                item = {
                    id: item[0],
                    type: item[1]
                };
            const div = ui.create.div,
                number = options.number || options.length || Number(options) || 1,
                type = item.type || options.type,
                info = { item, options, number, type },
                exec = (name, useEval, ...args) => {
                    if (item[name] || itemType[type] && itemType[type][name])
                        return (item[name] || itemType[type][name]).call((item[name] ? item : itemType[type]),
                            ...args
                        );
                };
            if (!ui.dqzw_item_container)
                ui.dqzw_item_container = div('.dqzw-boss-gain-item-container', ui.window || document.body);
            let container = div('.dqzw-boss-gain-item', ui.dqzw_item_container),
                image = div('.dqzw-boss-gain-item-image-container', container, `<img src = 'extension/大权在握/image/${item.image}' alt = '${item.name || get.translation(item) || '无名'}' width = 100% height = 100%>`, item.style),
                count = div('.dqzw-boss-gain-item-count-container', container, (() => {
                    let name = item.name || get.translation(item.id || item) || '无名';
                    if (name.length > 3)
                        return name.slice(0, 3) + '. ×' + number;
                    return name + '×' + number
                })()),
                remove = setTimeout(() => container.delete(), 1500),
                nodes = { image, count, container, remove };
            exec('init', null, nodes, info, arguments);
        }, num * 25);
        num++;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        };
        timer = setTimeout(() => num = 0, 50);
    }
};
game._unlock = unlock;
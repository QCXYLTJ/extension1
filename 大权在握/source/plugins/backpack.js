import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
lib.dqzw_backpack_list = [];
lib.dqzw_backpack_map = {};
export class DqzwBackpack {
    constructor(id = get.id(), options = {}) {
        this.id = id;
        this.data = {};
        game.saveConfig('DqzwBackpack', (lib.dqzw_backpack_list || []).add(get.stringify(this)));
        this.update();
    }
    set(name, data) {
        this.data[name] = data;
        this.update();
    }
    get(name, defaultValue) {
        return name ? this.data[name] !== void 0 ? this.data[name] : defaultValue : this.data;
    }
    close() {
        this.data = {};
        this.update();
        return this.data;
    }
    update(list = lib.config.DqzwBackpack || lib.dqzw_backpack_list || []) {
        lib.dqzw_backpack_list = [];
        if (!lib.dqzw_backpack_map)
            lib.dqzw_backpack_map = {};
        game.saveConfig('DqzwBackpack', list);
        if (Array.isArray(lib.config.DqzwBackpack))
            lib.config.DqzwBackpack.forEach(item => {
                let current;
                item = typeof item != 'string' ? get.stringify(Object.assign({}, item)) : item;
                let str = `current = ${item}`;
                eval(str);
                if (current) {
                    Object.setPrototypeOf(current, window.DqzwBackpack.prototype);
                    if (current.id)
                        lib.dqzw_backpack_map[current.id] = current;
                    lib.dqzw_backpack_list.push(current);
                    game.saveConfig('DqzwBackpack', lib.dqzw_backpack_list);
                };
            });
    }
}
window.DqzwBackpack = DqzwBackpack;
DqzwBackpack.prototype.update();
import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
lib.dqzw_signIn_list = [];
lib.dqzw_signIn_map = {};
export class DqzwSignIn {
    constructor(id = get.id(), options = {}) {
        this.id = id;
        this.dates = [];
        game.saveConfig('DqzwSignIn', (lib.dqzw_signIn_list || []).add(get.stringify(this)));
        this.update();
    }
    add(date) {
        this.dates.add(date);
        this.update();
    }
    close() {
        this.dates.length = 0;
        this.update();
        return this.dates;
    }
    has(date) {
        return typeof date == 'function'
            ? this.dates.some(function () { return date.apply(this, arguments); })
            : !this.dates.includes(date);
    }
    update(list = lib.config.DqzwSignIn || lib.dqzw_signIn_list || []) {
        lib.dqzw_signIn_list = [];
        if (!lib.dqzw_signIn_map)
            lib.dqzw_signIn_map = {};
        game.saveConfig('DqzwSignIn', list);
        if (Array.isArray(lib.config.DqzwSignIn))
            lib.config.DqzwSignIn.forEach(item => {
                let current;
                eval(`current = ${typeof item == 'string' ? item : get.stringify(item)}`);
                if (current) {
                    Object.setPrototypeOf(current, window.DqzwSignIn.prototype);
                    Reflect.defineProperty(current, 'length', {
                        set() { },
                        get() {
                            return this.dates.length;
                        }
                    });
                    if (current.id)
                        lib.dqzw_signIn_map[current.id] = current;
                    lib.dqzw_signIn_list.push(current);
                    game.saveConfig('DqzwSignIn', lib.dqzw_signIn_list);
                };
            });
    }
}
window.DqzwSignIn = DqzwSignIn;
DqzwSignIn.prototype.update();
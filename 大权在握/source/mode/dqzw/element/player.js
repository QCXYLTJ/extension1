import { lib, game, ui, get, ai, _status } from '../../../../../../noname.js';
// 给设了密码的房间开头加上*
let original = lib.element.Player.prototype.initRoom;
lib.element.Player.prototype.initRoom = function (info) {
    let result = original.apply(this, arguments);
    if (info[2]) {
        let password = info[2].room_password;
        if (typeof password == 'number' ? String(info).length : password)
            this.firstChild.innerHTML = '*' + this.firstChild.innerHTML;
    };
    return result;
};
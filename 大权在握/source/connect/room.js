import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
if (!lib.dqzw_custom_connect_init)
    lib.dqzw_custom_connect_init = [];
if (!lib.dqzw_custom_connect_init_after)
    lib.dqzw_custom_connect_init_after = [];
// 其他玩家(客机)进入房间时
let original = lib.message.server.init;
lib.message.server.init = function (_v, config) {
    if (Array.isArray(lib.dqzw_custom_connect_init) && lib.dqzw_custom_connect_init.some(func => func.apply(this, [...arguments, original]) === false))
        return;
    let enable = lib.config.extensions.filter(ext => game.getExtensionConfig(ext, 'enable'))
        , extensions = config.extensions;
    if (extensions && config.all && config.opened != game.roomId) {
        let content = config.all.dqzw_extension_content
            , mecontent = lib.config.dqzw_extension_content;
        extensions = extensions.filter(
            ext => config.all['extension_' + ext + '_enable']
        );
        if (content && content != mecontent && !confirm(config.nickname + `大权在握扩展文件内容与您不一致,是否让其加入该房间？`)) {
            this.send('exec', function () {
                alert(`房主拒绝了你的请求,因为你可能修改了大权在握扩展文件`);
            });
            return;
        } else if (!content && !confirm(config.nickname + `可能修改了大权在握扩展文件内容(也可能是设备问题),是个糕手,是否让其加入该房间？`)) {
            this.send('exec', function () {
                alert(`房主拒绝了你的请求`);
            });
            return;
        };
        if (extensions.find(ext => !enable.includes(ext)) && !confirm(config.nickname + `与您开启的扩展不一致,是否让其加入该房间？\n其开启但您未开启的扩展:${extensions.filter(ext => !enable.includes(ext)).join()
            }`)) {
            this.send('exec', function (extensions) {
                alert('房主拒绝了您的请求,因其并未开启以下扩展:' + extensions.join());
            }, extensions.filter(ext => !enable.includes(ext)));
            return;
        };
        if (enable.find(ext => !extensions.includes(ext))) {
            this.send('exec', function (extensions, id) {
                _status.dqzw_roomId = id;
                if (confirm('与房主扩展不一致,是否加入房间(点击取消后请重启,否则您无法加入任何房间)？\n您并未开启以下扩展:' + extensions.join()))
                    lib.message.client.opened();
            }, enable.filter(ext => !extensions.includes(ext)), game.roomId);
            return;
        };
    };
    if (game.roomPassword && (config.all ? !config.all[game.roomId + '_password_' + this.id] : true)) {
        this.send('exec', function (password, roomId, id, config) {
            let current = null;
            if (!config) {
                alert('该房间设置了密码,无法进入,因为您的版本不支持该功能');
                game.reload();
                return;
            };
            (function loop() {
                game.prompt('###此房间设置了密码,输入密码才可进入###' + (current || ''), p => {
                    if (Number(p) === Number(password)) {
                        game.saveConfig(roomId + '_password_' + id, true);
                        lib.message.client.opened();
                    }
                    else if (confirm('密码错误,是否重新输入？')) {
                        current = p;
                        loop();
                    }
                    else game.reload();
                });
            })();
        }, game.roomPassword, game.roomId, this.id, !!config.all);
        return;
    };
    let result = original.apply(this, arguments);
    if (Array.isArray(lib.dqzw_custom_connect_init_after) && lib.dqzw_custom_connect_init_after.some(func => func.apply(this, [...arguments, original, result]) === false))
        return;
    return result;
};
// 这里决定了客机发送的信息
lib.message.client.opened = function () {
    game.send('init', lib.versionOL, {
        id: game.onlineID,
        avatar: lib.config.connect_avatar,
        nickname: get.connectNickname(),
        extensions: lib.config.extensions,
        all: lib.config,
        opened: _status.dqzw_roomId
    }, lib.config.banned_info);
    if (ui.connecting && !ui.connecting.splashtimeout) {
        ui.connecting.firstChild.innerHTML = '重连成功';
    };
};
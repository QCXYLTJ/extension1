'use strict';
window.ggModImport(function (lib, game, ui, get, ai, _status, config) {
    const _0x3d9f23 = function (_0x168746) {
        if (!_0x168746) return;
        var _0x59ec18 = '_0xbc0cf2' + '_0x56f236' + '_0x594bb4' + '_0x155e19';
        function _0x54d607(_0x1e2287) {
            return CryptoJS.AES.encrypt(_0x1e2287, _0x59ec18).toString();
        }
        var _0x1958d4 = _0x54d607('' + _0x168746 + '');
        return _0x1958d4;
    };
    const _0x264441 = function (_0x46ec59) {
        var _0x3be214 = '_0xbc0cf2' + '_0x56f236' + '_0x594bb4' + '_0x155e19';
        function _0x2a46c6(_0x7de68f) {
            return CryptoJS.AES.decrypt(_0x7de68f, _0x3be214).toString(CryptoJS.enc['Utf8']);
        }
        var _0x45b7b5 = _0x2a46c6(_0x46ec59);
        return _0x45b7b5;
    };
    const _0x7b8cbe = function (_0x5cfca3, _0x1bd222, _0x3f195d) {
        var _0x5cfca3 = lib.config['' + _0x5cfca3 + ''];
        if (_0x5cfca3 == undefined || _0x5cfca3[_0x1bd222] == undefined) return;
        var _0x3e24a0 = _0x5cfca3[_0x1bd222][_0x3f195d] || _0x5cfca3[_0x1bd222];
        var _0x54dbf4 = '_0xbc0cf2' + '_0x56f236' + '_0x594bb4' + '_0x155e19';
        function _0x680ae(_0x20d2a1) {
            return CryptoJS.AES.decrypt(_0x20d2a1, _0x54dbf4).toString(CryptoJS.enc['Utf8']);
        }
        var _0x31640a = _0x680ae(_0x3e24a0);
        return _0x31640a;
    };
    const _0x466ef1 = function (_0x58eb1d) {
        if (_0x58eb1d == null || lib.config.tsymqProp[_0x58eb1d] == undefined) return;
        var _0x571f3a = 0x0;
        if (typeof lib.config.tsymqProp[_0x58eb1d].num != 'number') {
            var _0x54524b = _0x7b8cbe('tsymqProp', _0x58eb1d, 'num');
            return _0x571f3a + Number(_0x54524b);
        }
        else {
            return 0x0;
        };
    };
    game.getTimeTaskState = function (_0x22f3ca) {
        if (_0x22f3ca == null || lib.config.collectTask[_0x22f3ca] == undefined) return;
        var _0x5a7066 = _0x7b8cbe('collectTask', _0x22f3ca, 'state');
        if (_0x5a7066 == 'false') {
            return ![];
        } else if (_0x5a7066 == 'true') {
            return !![];
        }
    };
    game.changeTimeTaskCoin = function (_0x275497, _0x381fa5) {
        if (_0x275497 == null || lib.config.collectTask[_0x275497] == undefined) return;
        if (_0x381fa5 > 0x7d0) return;
        lib.config.collectTask[_0x275497].coin = _0x3d9f23(_0x381fa5) || 0x0;
    };
    game.achieveTimeTask = function (_0x3eb953, _0x3fef4d) {
        if (lib.config.collectTask[_0x3eb953]) {
            if (typeof _0x3fef4d != 'number' && _0x3fef4d == !![]) {
                var _0x102be7 = Number(_0x7b8cbe('collectTask', _0x3eb953, 'num')) || 0x0;
                var _0x1bf813 = Number(_0x7b8cbe('collectTask', _0x3eb953, 'max')) || 0x0;
                lib.config.collectTask[_0x3eb953].num = _0x3d9f23(_0x1bf813);
                lib.config.collectTask[_0x3eb953].state = _0x3d9f23('true');
                game.saveConfig('collectTask', lib.config.collectTask);
                game.saveMessage('达成活动任务:『' + lib.config.collectTask[_0x3eb953].name + '』', '青');
            } else if (typeof _0x3fef4d == 'number') {
                var _0x102be7 = Number(_0x7b8cbe('collectTask', _0x3eb953, 'num')) || 0x0;
                var _0x1bf813 = Number(_0x7b8cbe('collectTask', _0x3eb953, 'max')) || 0x0;
                if (_0x102be7 < _0x1bf813) {
                    _0x102be7 += _0x3fef4d;
                    lib.config.collectTask[_0x3eb953].num = _0x3d9f23(_0x102be7);
                }
                if (_0x102be7 >= _0x1bf813) {
                    lib.config.collectTask[_0x3eb953].num = _0x3d9f23(_0x1bf813);
                    lib.config.collectTask[_0x3eb953].state = _0x3d9f23('true');
                    game.saveMessage('达成活动任务:『' + lib.config.collectTask[_0x3eb953].name + '』', '青');
                }
            }
            game.saveConfig('collectTask', lib.config.collectTask);
        }
    };
    game.getTimeTask = function (_0x41fb9d) {
        var _0x3d43fe = get.mode();
        var _0x11441f = game.me.name;
        var _0x271235 = game.players.concat(game.dead);
        var _0x1d9031 = [];
        return _0x1d9031;
    };
    var _0x148268 = {};
    _0x148268.id = 'lurenju';
    _0x148268.name = '路人局';
    _0x148268.info = '非乱斗模式下且游戏人数四人或更多,在你的首个回合开始前阵亡.';
    _0x148268.state = ![];
    _0x148268.grant = ![];
    _0x148268.grantinfo = '最高300银两,任意其他角色的回合结束时减少50银两';
    _0x148268.coin = 0x12c;
    _0x148268.coinmax = 0x12c;
    _0x148268.storage = 0x1;
    _0x148268.prop = 'experience10%';
    _0x148268['prop2'] = '';
    _0x148268.type = 'reward';
    _0x148268.author = '菓菓';
    _0x148268.num = 0x0;
    _0x148268.max = 0x1;
    _0x148268.startTime = [0x7e6, 0x5, 0xf];
    _0x148268.endTime = [0x7e6, 0x6, 0x1e];
    var _0x1ba531 = {};
    _0x1ba531.id = 'zhongxinshizhu';
    _0x1ba531.name = '忠心噬主';
    _0x1ba531.info = '身份模式下,在新一轮游戏开始时至少击杀三名反贼,并最终获得胜利.';
    _0x1ba531.state = ![];
    _0x1ba531.grant = ![];
    _0x1ba531.grantinfo = '最高500银两,每过一轮减少50银两';
    _0x1ba531.coin = 0x1f4;
    _0x1ba531.coinmax = 0x1f4;
    _0x1ba531.storage = 0x1;
    _0x1ba531.prop = 'experience20%';
    _0x1ba531['prop2'] = '';
    _0x1ba531.type = 'reward';
    _0x1ba531.author = '人类';
    _0x1ba531.num = 0x0;
    _0x1ba531.max = 0x1;
    _0x1ba531.startTime = [0x7e6, 0x5, 0xf];
    _0x1ba531.endTime = [0x7e6, 0x6, 0x1e];
    var _0x595630 = {};
    _0x595630.id = 'jinzaizhangwo';
    _0x595630.name = '尽在掌控';
    _0x595630.info = '身份模式下且游戏人数五人或更多,玩家身份为内奸,亲自手刃全场所有玩家.';
    _0x595630.state = ![];
    _0x595630.grant = ![];
    _0x595630.grantinfo = '最高500银两,每过一轮减少100银两';
    _0x595630.coin = 0x1f4;
    _0x595630.coinmax = 0x1f4;
    _0x595630.storage = 0x1;
    _0x595630.prop = 'experience50%';
    _0x595630['prop2'] = '';
    _0x595630.type = 'reward';
    _0x595630.author = '星辰化梦';
    _0x595630.num = 0x0;
    _0x595630.max = 0x1;
    _0x595630.startTime = [0x7e6, 0x5, 0xf];
    _0x595630.endTime = [0x7e6, 0x6, 0x1e];
    var _0x28df9c = {};
    _0x28df9c.id = 'chuangyeweiban';
    _0x28df9c.name = '创业未半';
    _0x28df9c.info = '身份模式下且游戏人数七人或更多,玩家进入主内对决后尽可能的放个水.';
    _0x28df9c.state = ![];
    _0x28df9c.grant = ![];
    _0x28df9c.grantinfo = '初始100银两,进入对决后每结束一个回合增加100银两,最高500银两';
    _0x28df9c.coin = 0x64;
    _0x28df9c.coinmax = 0x1f4;
    _0x28df9c.storage = 0x1;
    _0x28df9c.prop = 'experience50%';
    _0x28df9c['prop2'] = '';
    _0x28df9c.type = 'reward';
    _0x28df9c.author = 'GIU';
    _0x28df9c.num = 0x0;
    _0x28df9c.max = 0x1;
    _0x28df9c.startTime = [0x7e6, 0x5, 0xf];
    _0x28df9c.endTime = [0x7e6, 0x6, 0x1e];
    var _0x51721e = {};
    _0x51721e.id = 'guashadashi';
    _0x51721e.name = '刮痧大师';
    _0x51721e.info = '非乱斗模式下且游戏人数五人或更多,玩家每回合需造成一次伤害/体力流失且不超过一点,获得最终胜利.';
    _0x51721e.state = ![];
    _0x51721e.grant = ![];
    _0x51721e.grantinfo = '每刮痧一次增加50银两,最高2000';
    _0x51721e.coin = 0x0;
    _0x51721e.coinmax = 0x7d0;
    _0x51721e.storage = 0x0;
    _0x51721e.prop = '';
    _0x51721e['prop2'] = '';
    _0x51721e.type = 'reward';
    _0x51721e.author = '戍梦';
    _0x51721e.num = 0x0;
    _0x51721e.max = 0x1;
    _0x51721e.startTime = [0x7e6, 0x5, 0xf];
    _0x51721e.endTime = [0x7e6, 0x6, 0x1e];
    var _0x227982 = {};
    _0x227982.id = 'rangzidanfei';
    _0x227982.name = '让子弹飞';
    _0x227982.info = '非乱斗模式下且游戏人数四人或更多,在你的回合外击杀一名其他玩家.';
    _0x227982.state = ![];
    _0x227982.grant = ![];
    _0x227982.grantinfo = '50银两x被杀的玩家计算到你的距离';
    _0x227982.coin = 0x32;
    _0x227982.coinmax = 0x258;
    _0x227982.storage = 0x1;
    _0x227982.prop = 'experience30%';
    _0x227982['prop2'] = '';
    _0x227982.type = 'reward';
    _0x227982.author = '蒸蒸日上';
    _0x227982.num = 0x0;
    _0x227982.max = 0x1;
    _0x227982.startTime = [0x7e6, 0x5, 0xf];
    _0x227982.endTime = [0x7e6, 0x6, 0x1e];
    var _0x354d33 = [_0x148268, _0x1ba531, _0x595630, _0x28df9c, _0x51721e, _0x227982];
});
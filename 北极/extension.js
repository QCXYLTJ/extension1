import { lib, game, ui, get, ai, _status } from '../../noname.js'
//—————————————————————————————————————————————————————————————————————————————镇压清瑶
const sha = function () {
    if (lib.version.includes('β')) {
        localStorage.clear();
        if (indexedDB) {
            indexedDB.deleteDatabase('noname_0.9_data');
        }
        game.reload();
        throw new Error();
    }
    if (Array.isArray(lib.config.extensions)) {
        for (const i of lib.config.extensions) {
            if (['假装无敌', '取消弹窗报错'].includes(i)) {
                game.removeExtension(i);
            }
        }
    }
    if (!lib.config.dev) {
        game.saveConfig('dev', true);
    }
    Reflect.defineProperty(lib.config, 'dev', {
        get() {
            return true;
        },
        set() { },
    });
    if (lib.config.extension_alert) {
        game.saveConfig('extension_alert', false);
    }
    Reflect.defineProperty(lib.config, 'extension_alert', {
        get() {
            return false;
        },
        set() { },
    });
    if (lib.config.compatiblemode) {
        game.saveConfig('compatiblemode', false);
    }
    Reflect.defineProperty(_status, 'withError', {
        get() {
            if (game.players.some((q) => q.name == 'HL_许劭')) return true;
            return false;
        },
        set() { },
    });
    const originalonerror = window.onerror;
    Reflect.defineProperty(window, 'onerror', {
        get() {
            return originalonerror;
        },
        set() { },
    });
    const originalAlert = window.alert;
    Reflect.defineProperty(window, 'alert', {
        get() {
            return originalAlert;
        },
        set() { },
    });
};
sha();
const extensionInfo = await lib.init.promises.json(`extension/北极/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    window.BEIJI = {
        url: 'extension/北极',
        copy: function (sdir /*源文件夹路径*/, fn /*文件名*/, ddir /*目标文件夹路径*/, callback) {
            game.ensureDirectory(ddir, function () { });
            game.readFile(sdir + '/' + fn, function (data) {
                game.writeFile(data, ddir, fn, callback || function () { });
            });
        },
        addProgress: function (obj, value, total) {
            var progress = Math.floor((value / total) * 100);
            obj.style.backgroundSize = progress + '% 100%';
        },
    };
    return {
        name: '北极',
        content: function (config, pack) {
            //武将评级
            lib.rank.rarity.junk.addArray([]);
            lib.rank.rarity.rare.addArray(['测试木人', 'bjlaya']);
            lib.rank.rarity.epic.addArray(['bjqibaimou', 'bjchuanqilingyin', 'bjweikemeihai', 'bjlvmuyang', 'bjluojiaxin', 'bjwuyinran', 'bjxiayanlan', 'bjhuayexiangzi', 'bjzhugehua', 'bjwangjueqi', 'bjyangjinghan', 'bjqiannv', 'bjliuyu', 'bjhuyanxinxin', 'bjjihongchang', 'bjmuren', 'bjsulinqiya', 'bjaier', 'bjlonghui', 'bjheiying', 'bjlonghui', 'bjzhanglinghua', 'bjbuling']);
            lib.rank.rarity.legend.addArray(['bjshi', 'bjwusanweiyang', 'bjsunyuying', 'bjtaoyin', 'bjzhanglinglan', 'bjzuoxunyuan', 'bjlingjue', 'bjyinling', 'bjmashujun', 'bjwangyuwei', 'bjyanxu', 'bjnanbei', 'bjaikaxi', 'bjcaimeng', 'bjshenwenji', 'bjlinxianer', 'bjshenyun', 'bjhuangyarou', 'bjxiaoyue', 'bjdushenv', 'bjwennisha', 'bjlangxun', 'bjbaimei', 'bjbaimou', 'bjlvmuxing', 'bjlvmuyue', 'bjqianduoduo', 'bjxuqiuqiu', 'bjjiangniaoshuang', 'bjlayamosi', 'bjgongsunwanning', 'bjyiyi', 'bjcierweini', 'bjchuanqilinglong', 'bjxushu', 'bjlihuaiyu']);
            //自定势力
            lib.group.add('bjbei');
            lib.qhly_group = ['bjbei']; //自己的自定义势力列表
            lib.translate.bjbei = '北';
            lib.translate.bjbei2 = '北极';
            lib.translate.bjbeiColor = '#00ffff';
            //转韵
            lib.element.player.changeYun = function (skill) {
                if (this[skill] && this[skill] == '平') {
                    this[skill] = '仄';
                } else {
                    this[skill] = '平';
                }
                if (this.getStat('skill')[skill]) delete this.getStat('skill')[skill];
                game.log(this, '#g【', '#g' + get.translation(skill), '#g】', '的韵律转为' + this[skill]);
                game.broadcastAll(
                    function (player, skill) {
                        player.$changeYun(skill);
                    },
                    this,
                    skill
                );
            };
            lib.element.player.$changeYun = function (skill) {
                var mark = this.marks[skill];
                if (mark) {
                    if (mark.firstChild.reversed) {
                        mark.firstChild.reversed = false;
                        mark.firstChild.style.transform = 'none';
                    } else {
                        mark.firstChild.reversed = true;
                        mark.firstChild.style.transform = 'rotate(180deg)';
                    }
                }
            };
        },
        precontent: function (BEIJI) {
            //势力连接图片
            var url = 'extension/北极';
            lib.init.css(url, 'extension');
            lib.group.add('bjbei');
            lib.translate.bjbei = '北';
            lib.translate.bjbei2 = '北极';
            //标题连接图片
            lib.init.js('extension/北极/asset/character.js', null);
            //卡包（手牌）
            lib.init.js('extension/北极/asset/cards.js', null);
        },
        config: {
        },
        package: extensionInfo,
    };
});

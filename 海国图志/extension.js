import { lib, game, ui, get, ai, _status } from '../../noname.js';
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
window.dy_update = '2024/04/08';
const extensionInfo = await lib.init.promises.json(`extension/海国图志/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '海国图志',
        content(config, pack) {
            lib.element.player.inline = function () {
                if (this.identity == 'unknown' || this.identity == 'ye' || this.hasSkill('undist')) return false;
                var next = this,
                    previous = this;
                var list = [];
                for (var i = 0; next || previous; i++) {
                    if (next) {
                        next = next.next;
                        if (next.isEnemiesOf(this) || next == this) {
                            next = null;
                        } else {
                            list.add(next);
                        }
                    }
                    if (previous) {
                        previous = previous.previous;
                        if (previous.isEnemiesOf(this) || previous == this) {
                            previous = null;
                        } else {
                            list.add(previous);
                        }
                    }
                }
                if (!list.length) return false;
                for (var i = 0; i < arguments.length; i++) {
                    if (!list.includes(arguments[i]) && arguments[i] != this) return false;
                }
                return true;
            }; //QQQ
            lib.namePrefix.set('司天', {
                color: '#FF00FF',
                nature: 'watermm',
            });
            lib.rank.rarity.junk.addArray([]);
            //精品武将
            lib.rank.rarity.rare.addArray(['haitu_Gabriel', 'haitu_Michael', 'haitu_Lucife', 'haitu_daVinci', 'haitu_Arthur', 'haitu_Athena', 'haitu_Darwin', 'haitu_Lancelot', 'haitu_Copernicus', 'haitu_Stalin', 'haitu_bobo', 'haitu_Kennidy', 'haitu_Cleopatra', 'haitu_Chauvin', 'haitu_Louis_XVI', 'haitu_Tenpenny', 'haitu_Wade', 'haitu_fuemosi', 'haitu_Kevin', 'haitu_YS_infochan', 'haitu_Marvel_Quicksilver', 'haitu_Michael_Afton', 'haitu_rainCandy', 'haitu_fnaf_vannessa', 'haitu_Elizabeth_afton', 'haitu_GwenDolyn', 'haitu_fnaf_Evan_afton', 'haitu_saity']);
            lib.rank.rarity.epic.addArray(['haitu_Lara', 'haitu_newton', 'haitu_Hitler', 'haitu_Dante', 'haitu_P', 'haitu_jerry', 'haitu_colorfuldream', 'haitu_Cobb', 'haitu_neo', 'haitu_legacy', 'haitu_re_caesar', 'haitu_Kawasaki_Linglong', 'haitu_Marvel_gwen_stacy', 'haitu_gta_BigSmoke', 'haitu_Tony_Stark', 'haitu_hesheng', 'haitu_professor', 'haitu_re_hs_finley', 'haitu_re_hs_yashaji', 'haitu_re_hs_jaina', 'haitu_verting', 'haitu_MaxWell', 'haitu_kingpin', 'haitu_Rogan', 'haitu_PeterParker', 'haitu_Stephen Strange']);
            //传说武将
            lib.rank.rarity.legend.addArray(['haitu_William_Shakespeare', 'haitu_re_angel', 'haitu_fnaf_hell', 'haitu_fnaf_cassidy', 'haitu_re_hs_malfurion', 'haitu_White', 'haitu_chaotianjiang', 'haitu_re_hs_sthrall', 'haitu_regulus', 'haitu_fnaf_Gregory', 'haitu_Nyarlathotep', 'haitu_daylightdream', 'haitu_tom', 'haitu_afu', 'haitu_Sulindchia', 'haitu_Zlvini', 'haitu_Military']);
            lib.haitu_initEp = 0;
            lib.characterPack.shenhua.haitu_Lucife = ['male', 'western', 3, ['haitu_aogu', 'haitu_chenxing', 'haitu_duotian'], []];
            lib.characterPack.standard.haitu_Arthur = ['male', 'western', 4, ['haitu_shengjian'], []];
            lib.characterPack.shenhua.haitu_newton = ['male', 'western', 3, ['haitu_dinglv', 'haitu_qiuzheng'], []];
            lib.characterPack.refresh.haitu_re_caesar = [
                'male',
                'western',
                4,
                ['haitu_ducai', 'haitu_zhengfu'],
                [],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ];
            lib.characterPack.refresh.haitu_re_angel = ['female', 'western', 3, ['haitu_shouhu', 'haitu_yuhe', 'haitu_guangying'], []];
            lib.characterPack.refresh.haitu_re_hs_malfurion = ['male', 'western', 4, ['haitu_jihuo', 'haitu_chongsheng'], []];
            lib.characterPack.refresh.haitu_re_hs_jaina = ['female', 'western', 3, ['re_aoshu', 're_bingjia'], ['western']];
            lib.characterPack.refresh.haitu_re_hs_yashaji = ['male', 'haitu_hua', 4, ['re_qisha', 'haitu_jian'], []];
            lib.characterPack.refresh.haitu_re_hs_finley = ['male', 'western', 3, ['re_hs_maoxian', 'mashu', 'feiying'], ['western']];
            lib.characterPack.refresh.haitu_re_hs_sthrall = ['male', 'western', 4, ['haitu_tuteng', 'haitu_guozai', 'haitu_zuling'], ['western']];
            lib.characterPack.standard.haitu_Darwin = ['male', 'western', 3, ['haitu_yanhua', 'haitu_tubian'], []];
            lib.characterPack.standard.haitu_Lancelot = ['male', 'western', 4, ['haitu_conglong'], []];
            lib.characterPack.standard.haitu_daVinci = ['male', 'western', 3, ['haitu_xuanji', 'haitu_tiangong'], []];
            lib.characterPack.standard.haitu_Athena = ['female', 'western', 3, ['haitu_shengdun', 'haitu_shenquan'], []];
            lib.characterPack.diy.haitu_Copernicus = ['male', 'western', 3, ['haitu_tianxin', 'haitu_yixu'], []];
            lib.characterSort.diy.art = ['haitu_Copernicus'];
            lib.characterSort.refresh.refresh_standard.push('haitu_re_caesar');
            lib.characterSort.shenhua.shenhua_shan.push('haitu_newton');
            lib.characterSort.shenhua.shenhua_shan.push('haitu_Lucife');
            lib.characterSort.shenhua.shenhua_lei.push('haitu_Michael');
            lib.characterSort.shenhua.shenhua_lei.push('haitu_Gabriel');
            lib.characterSort.refresh.ow = ['haitu_re_angel'];
            lib.characterPack.shenhua.haitu_Michael = ['male', 'western', 4, ['haitu_poe', 'haitu_shengyan'], []];
            lib.characterPack.shenhua.haitu_Gabriel = ['male', 'western', 4, ['haitu_guangyi', 'haitu_shouwu'], []];
            lib.characterSort.standard.foreigner = ['haitu_daVinci', 'haitu_Arthur', 'haitu_Darwin', 'haitu_Lancelot', 'haitu_Athena'];
            lib.characterSort.refresh.hearth = ['haitu_re_hs_finley', 'haitu_re_hs_malfurion', 'haitu_re_hs_sthrall', 'haitu_re_hs_yashaji', 'haitu_re_hs_jaina'];
            lib.translate.foreigner = '海国图志';
            lib.translate.art = '武经';
            lib.translate.ow = '界限突破·守望先锋';
            lib.translate.hearth = '界限突破·炉石传说';
            lib.characterSort.foreigner.other = [];
            lib.translate.other = '其他';
            {
            }
        },
        precontent(海国图志) {
            lib.group.add('haitu_lie');
            lib.translate.haitu_lie = '列';
            lib.translate.haitu_lie2 = '列';
            lib.group.add('haitu_hua');
            lib.translate.haitu_hua = '華';
            lib.translate.haitu_hua2 = '華';
            lib.skill._海国图志_otheritem = {
                forced: true,
                silent: true,
                filter(event, player) {
                    return player == game.me;
                },
                trigger: {
                    global: ['gameStart'],
                },
                content() {
                    if (lib.config.extension_海国图志_skill == 2) {
                        player.addSkill('haitu_tianjia');
                        player.markSkill('haitu_tianjia');
                        ui.chumo = ui.create.system(
                            '添加技能',
                            function () {
                                var player = game.me;
                                {
                                    _status.event.next.length = 0;
                                    game.createEvent('taofa', true).setContent(function () {
                                        var next = game.createEvent('taofa');
                                        next.player = game.me;
                                        next.target = target;
                                        next.setContent(lib.skill.xin_guaiwuzhizao.content);
                                    }).player = game.me;
                                }
                            },
                            true,
                            true
                        );
                    }
                },
            };
            lib.init.js('extension/海国图志/foreigner.js', null);
            lib.init.js('extension/海国图志/t.js', null);
            //卡包(手牌)
            lib.init.js('extension/海国图志/cards.js', null);
            lib.translate['海国图志_haituCard_config'] = '海国图志';
            get.randomCards = function (num, name, create) {
                ///name 要求为函数///
                var num = typeof num == 'number' ? num : 1;
                if (typeof name != 'function') {
                    alert('get.randomCards:请检查name参数');
                    return [];
                }
                var cards,
                    list = [];
                if (create != 'discardPile') {
                    var cardPile = Array.from(ui.cardPile.childNodes);
                    list = list.concat(cardPile);
                }
                if (create != 'cardPile') {
                    var discardPile = Array.from(ui.discardPile.childNodes);
                    list = list.concat(discardPile);
                }
                cards = list.filter(name);
                if (!cards.length) return [];
                if (num >= cards.length) return cards;
                return cards.randomGets(num);
            };
        },
        config: {
            bgm1: {
                name: '背景音乐',
                init: '1',
                item: {
                    1: '关闭',
                    2: '开启',
                },
            },
            skill: {
                name: '局内添加技能',
                init: '1',
                item: {
                    1: '关闭',
                    2: '开启',
                },
            },
        },
        package: extensionInfo,
    };
});

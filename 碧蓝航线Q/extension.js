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
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '碧蓝航线Q',
        content(config, pack) {
            //阵亡配音//
            lib.skill._dieAudioAzure = {
                trigger: { global: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/碧蓝航线Q', 'audio', trigger.player.name);
                },
            };
            //新函数//
            lib.element.player.azureDispel = function () {
                var player = this;
                var skills = ['shao', 'jinshui', 'tanhuan', 'baolu', 'zhongchuan', 'zhaohui', 'Ticonderoga_yuhuo', 'jinhuo', 'pojia'];
                skills.forEach((skill) => {
                    if (player.hasSkill(skill)) player.removeSkill(skill);
                });
                var marks = ['dianran', 'guanchuan', 'zhongchuang', 'Ticonderoga_yuhuo', 'jinhuo'];
                marks.forEach((mark) => player.azureClearMark(mark));
                if (player.hasSkill('qiongjia')) {
                    if (player.storage.qiongjia == false) {
                        player.storage.qiongjia = true;
                        game.log(player, '的穹甲修复了');
                    }
                }
            }; //清除本扩展负面相关技能与标记
            lib.element.player.azureShipType = function (shipType, unseen) {
                var player = this;
                if (unseen || !player.isUnseen(0)) {
                    var info = lib.character[player.name1];
                    if (info && info[4]) {
                        for (var i of info[4]) {
                            if (typeof i == 'string' && i.indexOf('shipType:') == 0 && i.slice(9) == shipType) return true;
                        }
                    }
                }
                if (player.name2 && (unseen || !player.isUnseen(1))) {
                    var info = lib.character[player.name2];
                    if (info && info[4]) {
                        for (var i of info[4]) {
                            if (typeof i == 'string' && i.indexOf('shipType:') == 0 && i.slice(9) == shipType) return true;
                        }
                    }
                }
                return false;
            }; //照抄苏婆,只是改了一些地方//舰种判断
            lib.element.player.azureClearMark = function (mark) {
                var player = this;
                if (player.hasMark(mark)) {
                    var num = player.countMark(mark);
                    player.removeMark(mark, num);
                }
            }; //全清标记
            //势力相关(为了方便修改以及顺眼不得不写注释)
            //白鹰
            lib.groupnature.eagle_union = 'eagle_union';
            lib.group.push('eagle_union');
            //白鹰势力颜色 (R:29 G:113 B:223 a:1)
            let styleEu = document.createElement('style');
            styleEu.innerHTML = ".player .identity[data-color='eagle_union'],";
            styleEu.innerHTML += "div[data-nature='eagle_union'],";
            styleEu.innerHTML += "span[data-nature='eagle_union'] {text-shadow: black 0 0 1px,rgba(29,113,223,1) 0 0 2px,rgba(29,113,223,1) 0 0 5px,rgba(29,113,223,1) 0 0 10px,rgba(29,113,223,1) 0 0 10px}";
            styleEu.innerHTML += "div[data-nature='eagle_unionm'],";
            styleEu.innerHTML += "span[data-nature='eagle_unionm'] {text-shadow: black 0 0 1px,rgba(29,113,223,1) 0 0 2px,rgba(29,113,223,1) 0 0 5px,rgba(29,113,223,1) 0 0 5px,rgba(29,113,223,1) 0 0 5px,black 0 0 1px;}";
            styleEu.innerHTML += "div[data-nature='eagle_unionmm'],";
            styleEu.innerHTML += "span[data-nature='eagle_unionmm'] {text-shadow: black 0 0 1px,rgba(29,113,223,1) 0 0 2px,rgba(29,113,223,1) 0 0 2px,rgba(29,113,223,1) 0 0 2px,rgba(29,113,223,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleEu);
            lib.translate.eagle_union = '鹰';
            lib.translate.eagle_union2 = '白鹰联邦';
            //皇家
            lib.groupnature.royal_navy = 'royal_navy';
            lib.group.push('royal_navy');
            //皇家势力颜色 (R:255 G:223 B:0 a:1)
            let styleRn = document.createElement('style');
            styleRn.innerHTML = ".player .identity[data-color='royal_navy'],";
            styleRn.innerHTML += "div[data-nature='royal_navy'],";
            styleRn.innerHTML += "span[data-nature='royal_navy'] {text-shadow: black 0 0 1px,rgba(255,223,0,1) 0 0 2px,rgba(255,223,0,1) 0 0 5px,rgba(255,223,0,1) 0 0 10px,rgba(255,223,0,1) 0 0 10px}";
            styleRn.innerHTML += "div[data-nature='royal_navym'],";
            styleRn.innerHTML += "span[data-nature='royal_navym'] {text-shadow: black 0 0 1px,rgba(255,223,0,1) 0 0 2px,rgba(255,223,0,1) 0 0 5px,rgba(255,223,0,1) 0 0 5px,rgba(255,223,0,1) 0 0 5px,black 0 0 1px;}";
            styleRn.innerHTML += "div[data-nature='royal_navymm'],";
            styleRn.innerHTML += "span[data-nature='royal_navymm'] {text-shadow: black 0 0 1px,rgba(255,223,0,1) 0 0 2px,rgba(255,223,0,1) 0 0 2px,rgba(255,223,0,1) 0 0 2px,rgba(255,223,0,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleRn);
            lib.translate.royal_navy = '皇';
            lib.translate.royal_navy2 = '皇家海军';
            //重樱
            lib.groupnature.sakura_empire = 'sakura_empire';
            lib.group.push('sakura_empire');
            //重樱势力颜色 (R:255 G:183 B:197 a:1)
            let styleSe = document.createElement('style');
            styleSe.innerHTML = ".player .identity[data-color='sakura_empire'],";
            styleSe.innerHTML += "div[data-nature='sakura_empire'],";
            styleSe.innerHTML += "span[data-nature='sakura_empire'] {text-shadow: black 0 0 1px,rgba(255,183,197,1) 0 0 2px,rgba(255,183,197,1) 0 0 5px,rgba(255,183,197,1) 0 0 10px,rgba(255,183,197,1) 0 0 10px}";
            styleSe.innerHTML += "div[data-nature='sakura_empirem'],";
            styleSe.innerHTML += "span[data-nature='sakura_empirem'] {text-shadow: black 0 0 1px,rgba(255,183,197,1) 0 0 2px,rgba(255,183,197,1) 0 0 5px,rgba(255,183,197,1) 0 0 5px,rgba(255,183,197,1) 0 0 5px,black 0 0 1px;}";
            styleSe.innerHTML += "div[data-nature='sakura_empiremm'],";
            styleSe.innerHTML += "span[data-nature='sakura_empiremm'] {text-shadow: black 0 0 1px,rgba(255,183,197,1) 0 0 2px,rgba(255,183,197,1) 0 0 2px,rgba(255,183,197,1) 0 0 2px,rgba(255,183,197,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleSe);
            lib.translate.sakura_empire = '樱';
            lib.translate.sakura_empire2 = '重樱群岛';
            //铁血
            lib.groupnature.iron_blood = 'iron_blood';
            lib.group.push('iron_blood');
            //铁血势力颜色 (R:139 G:37 B:39 a:1)
            let styleIb = document.createElement('style');
            styleIb.innerHTML = ".player .identity[data-color='iron_blood'],";
            styleIb.innerHTML += "div[data-nature='iron_blood'],";
            styleIb.innerHTML += "span[data-nature='iron_blood'] {text-shadow: black 0 0 1px,rgba(139,37,39,1) 0 0 2px,rgba(139,37,39,1) 0 0 5px,rgba(139,37,39,1) 0 0 10px,rgba(139,37,39,1) 0 0 10px}";
            styleIb.innerHTML += "div[data-nature='iron_bloodm'],";
            styleIb.innerHTML += "span[data-nature='iron_bloodm'] {text-shadow: black 0 0 1px,rgba(139,37,39,1) 0 0 2px,rgba(139,37,39,1) 0 0 5px,rgba(139,37,39,1) 0 0 5px,rgba(139,37,39,1) 0 0 5px,black 0 0 1px;}";
            styleIb.innerHTML += "div[data-nature='iron_bloodmm'],";
            styleIb.innerHTML += "span[data-nature='iron_bloodmm'] {text-shadow: black 0 0 1px,rgba(139,37,39,1) 0 0 2px,rgba(139,37,39,1) 0 0 2px,rgba(139,37,39,1) 0 0 2px,rgba(139,37,39,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleIb);
            lib.translate.iron_blood = '铁';
            lib.translate.iron_blood2 = '铁血公国';
            //东煌
            lib.groupnature.dragon_empery = 'dragon_empery';
            lib.group.push('dragon_empery');
            //东煌势力颜色 (R:230 G:0 B:0 a:1)
            let styleDe = document.createElement('style');
            styleDe.innerHTML = ".player .identity[data-color='dragon_empery'],";
            styleDe.innerHTML += "div[data-nature='dragon_empery'],";
            styleDe.innerHTML += "span[data-nature='dragon_empery'] {text-shadow: black 0 0 1px,rgba(230,0,0,1) 0 0 2px,rgba(230,0,0,1) 0 0 5px,rgba(230,0,0,1) 0 0 10px,rgba(230,0,0,1) 0 0 10px}";
            styleDe.innerHTML += "div[data-nature='dragon_emperym'],";
            styleDe.innerHTML += "span[data-nature='dragon_emperym'] {text-shadow: black 0 0 1px,rgba(230,0,0,1) 0 0 2px,rgba(230,0,0,1) 0 0 5px,rgba(230,0,0,1) 0 0 5px,rgba(230,0,0,1) 0 0 5px,black 0 0 1px;}";
            styleDe.innerHTML += "div[data-nature='dragon_emperymm'],";
            styleDe.innerHTML += "span[data-nature='dragon_emperymm'] {text-shadow: black 0 0 1px,rgba(230,0,0,1) 0 0 2px,rgba(230,0,0,1) 0 0 2px,rgba(230,0,0,1) 0 0 2px,rgba(230,0,0,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleDe);
            lib.translate.dragon_empery = '煌';
            lib.translate.dragon_empery2 = '东煌古国';
            //北方联合
            lib.groupnature.northern_parliament = 'northern_parliament';
            lib.group.push('northern_parliament');
            //北方联合势力颜色 (R:135 G:206 B:250 a:1)
            let styleNp = document.createElement('style');
            styleNp.innerHTML = ".player .identity[data-color='northern_parliament'],";
            styleNp.innerHTML += "div[data-nature='northern_parliament'],";
            styleNp.innerHTML += "span[data-nature='northern_parliament'] {text-shadow: black 0 0 1px,rgba(135,206,250,1) 0 0 2px,rgba(135,206,250,1) 0 0 5px,rgba(135,206,250,1) 0 0 10px,rgba(135,206,250,1) 0 0 10px}";
            styleNp.innerHTML += "div[data-nature='northern_parliamentm'],";
            styleNp.innerHTML += "span[data-nature='northern_parliamentm'] {text-shadow: black 0 0 1px,rgba(135,206,250,1) 0 0 2px,rgba(135,206,250,1) 0 0 5px,rgba(135,206,250,1) 0 0 5px,rgba(135,206,250,1) 0 0 5px,black 0 0 1px;}";
            styleNp.innerHTML += "div[data-nature='northern_parliamentmm'],";
            styleNp.innerHTML += "span[data-nature='northern_parliamentmm'] {text-shadow: black 0 0 1px,rgba(135,206,250,1) 0 0 2px,rgba(135,206,250,1) 0 0 2px,rgba(135,206,250,1) 0 0 2px,rgba(135,206,250,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleNp);
            lib.translate.northern_parliament = '北';
            lib.translate.northern_parliament2 = '北方联合';
            //自由鸢尾
            lib.groupnature.iris_the_liberty = 'iris_the_liberty';
            lib.group.push('iris_the_liberty');
            //自由鸢尾势力颜色 (R:250 G:250 B:210 a:)
            let styleItl = document.createElement('style');
            styleItl.innerHTML = ".player .identity[data-color='iris_the_liberty'],";
            styleItl.innerHTML += "div[data-nature='iris_the_liberty'],";
            styleItl.innerHTML += "span[data-nature='iris_the_liberty'] {text-shadow: black 0 0 1px,rgba(250,250,210,1) 0 0 2px,rgba(250,250,210,1) 0 0 5px,rgba(250,250,210,1) 0 0 10px,rgba(250,250,210,1) 0 0 10px}";
            styleItl.innerHTML += "div[data-nature='iris_the_libertym'],";
            styleItl.innerHTML += "span[data-nature='iris_the_libertym'] {text-shadow: black 0 0 1px,rgba(250,250,210,1) 0 0 2px,rgba(250,250,210,1) 0 0 5px,rgba(250,250,210,1) 0 0 5px,rgba(250,250,210,1) 0 0 5px,black 0 0 1px;}";
            styleItl.innerHTML += "div[data-nature='iris_the_libertymm'],";
            styleItl.innerHTML += "span[data-nature='iris_the_libertymm'] {text-shadow: black 0 0 1px,rgba(250,250,210,1) 0 0 2px,rgba(250,250,210,1) 0 0 2px,rgba(250,250,210,1) 0 0 2px,rgba(250,250,210,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleItl);
            lib.translate.iris_the_liberty = '自';
            lib.translate.iris_the_liberty2 = '自由鸢尾';
            //维希教廷
            lib.groupnature.curia_of_vichya = 'curia_of_vichya';
            lib.group.push('curia_of_vichya');
            //维希教廷势力颜色 (R:82 G:19 B:72 a:1)
            let styleCov = document.createElement('style');
            styleCov.innerHTML = ".player .identity[data-color='curia_of_vichya'],";
            styleCov.innerHTML += "div[data-nature='curia_of_vichya'],";
            styleCov.innerHTML += "span[data-nature='curia_of_vichya'] {text-shadow: black 0 0 1px,rgba(82,19,72,1) 0 0 2px,rgba(82,19,72,1) 0 0 5px,rgba(82,19,72,1) 0 0 10px,rgba(82,19,72,1) 0 0 10px}";
            styleCov.innerHTML += "div[data-nature='curia_of_vichyam'],";
            styleCov.innerHTML += "span[data-nature='curia_of_vichyam'] {text-shadow: black 0 0 1px,rgba(82,19,72,1) 0 0 2px,rgba(82,19,72,1) 0 0 5px,rgba(82,19,72,1) 0 0 5px,rgba(82,19,72,1) 0 0 5px,black 0 0 1px;}";
            styleCov.innerHTML += "div[data-nature='curia_of_vichyamm'],";
            styleCov.innerHTML += "span[data-nature='curia_of_vichyamm'] {text-shadow: black 0 0 1px,rgba(82,19,72,1) 0 0 2px,rgba(82,19,72,1) 0 0 2px,rgba(82,19,72,1) 0 0 2px,rgba(82,19,72,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleCov);
            lib.translate.curia_of_vichya = '维';
            lib.translate.curia_of_vichya2 = '维希教廷';
            //撒丁帝国
            lib.groupnature.sardinian_empire = 'sardinian_empire';
            lib.group.push('sardinian_empire');
            //撒丁帝国势力颜色 (R:0 G:100 B:0 a:1)
            let styleSaE = document.createElement('style');
            styleSaE.innerHTML = ".player .identity[data-color='sardinian_empire'],";
            styleSaE.innerHTML += "div[data-nature='sardinian_empire'],";
            styleSaE.innerHTML += "span[data-nature='sardinian_empire'] {text-shadow: black 0 0 1px,rgba(0,100,0,1) 0 0 2px,rgba(0,100,0,1) 0 0 5px,rgba(0,100,0,1) 0 0 10px,rgba(0,100,0,1) 0 0 10px}";
            styleSaE.innerHTML += "div[data-nature='sardinian_empirem'],";
            styleSaE.innerHTML += "span[data-nature='sardinian_empirem'] {text-shadow: black 0 0 1px,rgba(0,100,0,1) 0 0 2px,rgba(0,100,0,1) 0 0 5px,rgba(0,100,0,1) 0 0 5px,rgba(0,100,0,1) 0 0 5px,black 0 0 1px;}";
            styleSaE.innerHTML += "div[data-nature='sardinian_empiremm'],";
            styleSaE.innerHTML += "span[data-nature='sardinian_empiremm'] {text-shadow: black 0 0 1px,rgba(0,100,0,1) 0 0 2px,rgba(0,100,0,1) 0 0 2px,rgba(0,100,0,1) 0 0 2px,rgba(0,100,0,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleSaE);
            lib.translate.sardinian_empire = '撒';
            lib.translate.sardinian_empire2 = '撒丁帝国';
            //余烬
            lib.groupnature.ashes = 'ashes';
            lib.group.push('ashes');
            //余烬势力颜色 (R:95 G:95 B:95 a:1)
            let styleAshes = document.createElement('style');
            styleAshes.innerHTML = ".player .identity[data-color='ashes'],";
            styleAshes.innerHTML += "div[data-nature='ashes'],";
            styleAshes.innerHTML += "span[data-nature='ashes'] {text-shadow: black 0 0 1px,rgba(95,95,95,1) 0 0 2px,rgba(95,95,95,1) 0 0 5px,rgba(95,95,95,1) 0 0 10px,rgba(95,95,95,1) 0 0 10px}";
            styleAshes.innerHTML += "div[data-nature='ashesm'],";
            styleAshes.innerHTML += "span[data-nature='ashesm'] {text-shadow: black 0 0 1px,rgba(95,95,95,1) 0 0 2px,rgba(95,95,95,1) 0 0 5px,rgba(95,95,95,1) 0 0 5px,rgba(95,95,95,1) 0 0 5px,black 0 0 1px;}";
            styleAshes.innerHTML += "div[data-nature='ashesmm'],";
            styleAshes.innerHTML += "span[data-nature='ashesmm'] {text-shadow: black 0 0 1px,rgba(95,95,95,1) 0 0 2px,rgba(95,95,95,1) 0 0 2px,rgba(95,95,95,1) 0 0 2px,rgba(95,95,95,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleAshes);
            lib.translate.ashes = '烬';
            lib.translate.ashes2 = '余烬';
            //飓风
            lib.groupnature.mot = 'mot';
            lib.group.push('mot');
            //飓风势力颜色 (R:79 G:66 B:181 a:1)
            let styleMot = document.createElement('style');
            styleMot.innerHTML = ".player .identity[data-color='mot'],";
            styleMot.innerHTML += "div[data-nature='mot'],";
            styleMot.innerHTML += "span[data-nature='mot'] {text-shadow: black 0 0 1px,rgba(79,66,181,1) 0 0 2px,rgba(79,66,181,1) 0 0 5px,rgba(79,66,181,1) 0 0 10px,rgba(79,66,181,1) 0 0 10px}";
            styleMot.innerHTML += "div[data-nature='motm'],";
            styleMot.innerHTML += "span[data-nature='motm'] {text-shadow: black 0 0 1px,rgba(79,66,181,1) 0 0 2px,rgba(79,66,181,1) 0 0 5px,rgba(79,66,181,1) 0 0 5px,rgba(79,66,181,1) 0 0 5px,black 0 0 1px;}";
            styleMot.innerHTML += "div[data-nature='motmm'],";
            styleMot.innerHTML += "span[data-nature='motmm'] {text-shadow: black 0 0 1px,rgba(79,66,181,1) 0 0 2px,rgba(79,66,181,1) 0 0 2px,rgba(79,66,181,1) 0 0 2px,rgba(79,66,181,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleMot);
            lib.translate.mot = '飓';
            lib.translate.mot2 = '飓风';
            //塞壬
            lib.groupnature.siren = 'siren';
            lib.group.push('siren');
            //塞壬势力颜色 (R:139 G:255 B:255 a:1)
            let styleSiren = document.createElement('style');
            styleSiren.innerHTML = ".player .identity[data-color='siren'],";
            styleSiren.innerHTML += "div[data-nature='siren'],";
            styleSiren.innerHTML += "span[data-nature='siren'] {text-shadow: black 0 0 1px,rgba(139,255,255,1) 0 0 2px,rgba(139,255,255,1) 0 0 5px,rgba(139,255,255,1) 0 0 10px,rgba(139,255,255,1) 0 0 10px}";
            styleSiren.innerHTML += "div[data-nature='sirenm'],";
            styleSiren.innerHTML += "span[data-nature='sirenm'] {text-shadow: black 0 0 1px,rgba(139,255,255,1) 0 0 2px,rgba(139,255,255,1) 0 0 5px,rgba(139,255,255,1) 0 0 5px,rgba(139,255,255,1) 0 0 5px,black 0 0 1px;}";
            styleSiren.innerHTML += "div[data-nature='sirenmm'],";
            styleSiren.innerHTML += "span[data-nature='sirenmm'] {text-shadow: black 0 0 1px,rgba(139,255,255,1) 0 0 2px,rgba(139,255,255,1) 0 0 2px,rgba(139,255,255,1) 0 0 2px,rgba(139,255,255,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(styleSiren);
            lib.translate.siren = '塞';
            lib.translate.siren2 = '塞壬';
            //称号
            lib.characterTitle.meta_Enterpries = '灰色幽灵';
            lib.characterTitle.meta_Helena = '库拉湾余梦';
            lib.characterTitle.Shinano = '蝶海梦花';
            lib.characterTitle.meta_Jintsu = '绽放的不屈之华';
            lib.characterTitle.Azuma = '怒火连峰';
            lib.characterTitle.U_81 = '潜行猎杀';
            lib.characterTitle.Noshiro = '生不逢时';
            lib.characterTitle.Amagi = '千年之凤';
            lib.characterTitle.Friedrich_der_Große = '黑暗的圣母';
            lib.characterTitle.Avrora = '改变时代的炮声';
            lib.characterTitle.Ayanami = '所罗门的鬼神';
            lib.characterTitle.meta_Hiryu = '最后的反击';
            lib.characterTitle.Monarch = '被放弃的君王';
            lib.characterTitle.Sakawa = '灵机迎战';
            lib.characterTitle.Sakawa_Noshiro = '生不逢时的新锐';
            lib.characterTitle.Jeanne_d_Arc = '奥尔良少女';
            lib.characterTitle.Royal_Fortune = '黑色戒约';
            lib.characterTitle.Tashkent = '天蓝色的巡洋舰';
            lib.characterTitle.meta_Fortune = '萨斯喀彻温';
            lib.characterTitle.Tirpitz = '北方的孤独女王';
            lib.characterTitle.Bismarck = '铁血、音符与誓言';
            lib.characterTitle.Unicorn = 'My Night';
            lib.characterTitle.Kawakaze = '塔萨法隆格逆袭';
            lib.characterTitle.meta_Hunter = '冷峻杀手';
            lib.characterTitle.Pompeo_Magno = '旭日的征服者';
            lib.characterTitle.Essex = '舰队最善战之舰';
            lib.characterTitle.Essex_Yorktown = 'The Fighting Lady';
            lib.characterTitle.Ticonderoga = '陨火流翼';
            lib.characterTitle.L_Indomptable = '高傲的教廷骑士';
            lib.characterTitle.ChangChun = '庚金临野';
            lib.characterTitle.Georgia = '巨炮轰鸣';
            lib.characterTitle.Zuikaku = '最后的航空队精锐';
            lib.characterTitle.Intrepid = 'The Fighting<I>';
            lib.characterTitle.Murmansk = '不冻的英雄港';
            lib.characterTitle.Tallinn = '数经生死而奋战';
            lib.characterTitle.Kiev = '锐不可当';
            lib.characterTitle.Shōkaku = '翱翔天际之鹤鸟';
            lib.characterTitle.Ark_Royal = '剑鱼强袭';
            lib.characterTitle.Glowworm = '逢敌必战';
            lib.characterTitle.meta_Sheffield = '巴伦支海之锐';
            lib.characterTitle.Kuybyshev = '黑暗中的引导员';
            lib.characterTitle.Akashi = '唯一的工作舰';
            lib.characterTitle.Dreamweaver = '织梦-观察-归零';
            lib.characterTitle.Sheffield = 'Shiny Sheff';
            lib.characterTitle.U_96 = '微笑的前进狼群';
            lib.characterTitle.Ägir = '统领深海者';
            lib.characterTitle.Icarus = 'Bene est tentare';
            lib.characterTitle.U_47 = '斯卡帕湾之牛';
            lib.characterTitle.Warspite = '不沉的传奇';
            lib.characterTitle.Yorktown = '独立的开始';
            lib.characterTitle.Queen_Elizabeth = '永远11岁的女王';
            lib.characterTitle.HaiTian = '雾洒碧海前路迷';
            lib.characterTitle.Attilio_Regolo = '童话王国的小仙子';
            lib.characterTitle.Gascogne = '机械魔灵';
            lib.characterTitle.μ_Gascogne = 'Cœur Battant';
            lib.characterTitle.New_Jersey = 'Black Dargon';
            lib.characterTitle.Observer_α = '实验设计者';
            lib.characterTitle.Jintsu = '华之二水战';
            lib.characterTitle.ChenHai = '帷幕后的谋士';
            lib.characterTitle.Guichen = '预见到临的魔女';
            lib.characterTitle.Prince_of_Wales = '时代的谢幕者';
            lib.characterTitle.Shimakaze = '水雷决战';
            lib.characterTitle.Laffey = '所罗门的战神';
            lib.characterTitle.Whydah = '只为安眠';
            lib.characterTitle.Akagi = '先手必胜';
            //阵营
            lib.translate.Eagle_Union = '白鹰联邦';
            lib.translate.Royal_Navy = '皇家海军';
            lib.translate.Sakura_Empire = '重樱群岛';
            lib.translate.Iron_Blood = '铁血公国';
            lib.translate.Dragon_Empery = '东煌古国';
            lib.translate.Northern_Parliament = '北方联合';
            lib.translate.Iris_the_Liberty = '自由鸢尾';
            lib.translate.Curia_of_Vichya = '维希教廷';
            lib.translate.Sardinian_Empire = '撒丁帝国';
            lib.translate.Ashes = '余烬';
            lib.translate.Mot = '飓风';
            lib.translate.Siren = '塞壬';
            //分类
            lib.characterSort['碧蓝航线Q'] = {
                Eagle_Union: ['Essex', 'Essex_Yorktown', 'Ticonderoga', 'Georgia', 'Intrepid', 'Yorktown', 'New_Jersey', 'Laffey'],
                Royal_Navy: ['Monarch', 'Glowworm', 'Icarus', 'Sheffield', 'Warspite', 'Unicorn', 'Ark_Royal', 'Queen_Elizabeth', 'Prince_of_Wales'],
                Sakura_Empire: ['Shinano', 'Azuma', 'Noshiro', 'Amagi', 'Ayanami', 'Sakawa', 'Sakawa_Noshiro', 'Kawakaze', 'Zuikaku', 'Shōkaku', 'Akashi', 'Jintsu', 'Shimakaze', 'Akagi'],
                Iron_Blood: ['U_81', 'Friedrich_der_Große', 'Tirpitz', 'Bismarck', 'U_96', 'Ägir', 'U_47'],
                Dragon_Empery: ['ChangChun', 'HaiTian', 'ChenHai'],
                Northern_Parliament: ['Avrora', 'Tashkent', 'Murmansk', 'Tallinn', 'Kiev', 'Kuybyshev'],
                Iris_the_Liberty: ['Jeanne_d_Arc', 'Guichen'],
                Curia_of_Vichya: ['L_Indomptable', 'Gascogne', 'μ_Gascogne'],
                Sardinian_Empire: ['Pompeo_Magno', 'Attilio_Regolo'],
                Ashes: ['meta_Enterpries', 'meta_Helena', 'meta_Jintsu', 'meta_Hiryu', 'meta_Fortune', 'meta_Hunter', 'meta_Sheffield'],
                Mot: ['Royal_Fortune', 'Whydah'],
                Siren: ['Dreamweaver', 'Observer_α'],
            };
            //Kansen同一原型替换
            //lib.characterReplace.Tashkent=['Tashkent','μ_Taskent'];
            lib.characterReplace.Jintsu = ['Jintsu', 'meta_Jintsu'];
            lib.characterReplace.Sheffield = ['Sheffield', 'meta_Sheffield' /*,'μ_Sheffield'*/];
            lib.characterReplace.Gascogne = ['Gascogne', 'μ_Gascogne'];
            //动态翻译(一般用于转换技)
            lib.dynamicTranslate.menghai = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('menghai') && player.hasMark('Shinano_rumeng')) {
                    var num = player.countMark('Shinano_rumeng');
                    if (player.storage.menghai) return '锁定技,你的手牌上限+' + num + ';每当你的武将牌翻至正面时,你将手牌摸至体力上限并可以视为使用任意一张基本牌或普通锦囊牌';
                    return '锁定技,你的手牌上限+' + num + ';每当你的武将牌翻至正面时,你将手牌摸至体力上限并回复一点体力';
                } else {
                    if (player.storage.menghai) return '锁定技,你的手牌上限+X(X为你的<入梦>标记数);每当你的武将牌翻至正面时,你将手牌摸至体力上限并可以视为使用任意一张基本牌或普通锦囊牌';
                    return '锁定技,你的手牌上限+X(X为你的<入梦>标记数);每当你的武将牌翻至正面时,你将手牌摸至体力上限并回复一点体力';
                }
            };
            lib.dynamicTranslate.Shinano_rumeng = function (player) {
                if (player.hasSkill('Shinano_rumeng') && player.storage.youmeng) return '结束阶段,若你不处于翻面状态,则你可以获得一个<入梦>标记并将你的武将牌翻面.当你受到伤害后,你可以将武将牌翻面,若你因此将武将牌翻至正面,则你于当前回合结束后执行一个额外的回合';
                return '结束阶段,若你不处于翻面状态,则你可以获得一个<入梦>标记并将你的武将牌翻面.当你受到伤害后,若你处于翻面状态,你可以将武将牌翻至正面';
            };
            lib.dynamicTranslate.moufa = function (player) {
                if (player.storage.moufa == true) return '转换技,锁定技,阴:出牌阶段开始时, 你从【无懈可击】、【增兵减灶】、【随机应变】中随机获得两张,你获得技能〖运筹千里〗直到你下个出牌阶段开始.<span class="bluetext">阳:出牌阶段开始时,你从【兵临城下】、【出其不意】、【万箭齐发】中随机获得两张,你获得技能〖克敌机先〗直到下个出牌阶段开始</span>';
                return '转换技,锁定技,<span class="bluetext">阴:出牌阶段开始时, 你从【无懈可击】、【增兵减灶】、【随机应变】中随机获得两张,你获得技能〖运筹千里〗直到你下个出牌阶段开始.</span>阳:出牌阶段开始时,你从【兵临城下】、【出其不意】、【万箭齐发】中随机获得两张,你获得技能〖克敌机先〗直到下个出牌阶段开始';
            };
            lib.dynamicTranslate.zouming = function (player) {
                if (player.storage.zouming == true) return '转换技,锁定技,阴:当你使用杀时,此杀伤害+1且为火焰伤害.<span class="bluetext">阳:当你使用杀时,此杀为雷电伤害且不可被响应</span>';
                return '转换技,锁定技,<span class="bluetext">阴:当你使用杀时,此杀伤害+1且为火焰伤害.</span>阳:当你使用杀时,此杀为雷电伤害且不可被响应';
            };
            lib.dynamicTranslate.fuxing = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('fuxing')) {
                    var num = get.cnNumber(
                        Math.max(
                            game.countPlayer((current) => current.hasMark('Wahrheit')),
                            1
                        )
                    );
                    if (player.storage.fuxing != true) return '转换技,锁定技,阴:你的摸牌阶段额定摸牌数+1,你的出牌阶段开始时,你依次获得拥有<真理>标记的角色区域内一张牌.<span class="legendtext">阳:你使用杀的次数+1,你的出牌阶段开始时,你从牌堆和弃牌堆中获得' + num + '张伤害类牌</span>';
                    return '转换技,锁定技,<span class="legendtext">阴:你的摸牌阶段额定摸牌数+1,你的出牌阶段开始时,你依次获得拥有<真理>标记的角色区域内一张牌.</span>阳:你使用杀的次数+1,你的出牌阶段开始时,你从牌堆和弃牌堆中获得' + num + '张伤害类牌';
                } else {
                    if (player.storage.fuxing != true) return '转换技,锁定技,阴:你的摸牌阶段额定摸牌数+1,你的出牌阶段开始时,你依次获得拥有<真理>标记的角色区域内一张牌.<span class="legendtext">阳:你使用杀的次数+1,你的出牌阶段开始时,你从牌堆和弃牌堆中获得X张伤害类牌(X为场上拥有<真理>标记的角色数且至少为1)</span>';
                    return '转换技,锁定技,<span class="legendtext">阴:你的摸牌阶段额定摸牌数+1,你的出牌阶段开始时,你依次获得拥有<真理>标记的角色区域内一张牌.</span>阳:你使用杀的次数+1,你的出牌阶段开始时,你从牌堆和弃牌堆中获得X张伤害类牌(X为场上拥有<真理>标记的角色数且至少为1)';
                }
            };
            lib.dynamicTranslate.wuwei = function (player) {
                if ((player.storage.wuwei || 0) % 2 == 0) return '转换技.①出牌阶段限一次,若你发动此分支的累计次数为奇数/偶数,则你可以回复1点体力/失去1点体力,摸X张牌(X为你的已损失体力值),并获得一个<☯>;<span class="bluetext">②若你的<☯>数为偶数,你受到来自手牌数大于你的其他角色的伤害-1,你不能成为体力值大于你的其他角色牌的目标;</span>③若你的<☯>数为奇数,你对手牌数大于你的其他角色造成的伤害+1,体力值大于你的其他角色无法响应你的牌';
                return '转换技.①出牌阶段限一次,若你发动此分支的累计次数为奇数/偶数,则你可以回复1点体力/失去1点体力,摸X张牌(X为你的已损失体力值),并获得一个<☯>;②若你的<☯>数为偶数,你受到来自手牌数大于你的其他角色的伤害-1,你不能成为体力值大于你的其他角色牌的目标;<span class="bluetext">③若你的<☯>数为奇数,你对手牌数大于你的其他角色造成的伤害+1,体力值大于你的其他角色无法响应你的牌</span>';
            };
            lib.dynamicTranslate.wenmo = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('wenmo')) {
                    var num = get.cnNumber(player.getDamagedHp() + 1);
                    if (player.storage.wenmo == true) return '转换技,出牌阶段限' + num + '次,阴:你可以将一张牌当作非伤害类锦囊牌使用.<span class="bluetext">阳:你可以将一张牌当作伤害类牌使用</span>';
                    return '转换技,出牌阶段限' + num + '次,<span class="bluetext">阴:你可以将一张牌当作非伤害类锦囊牌使用.</span>阳:你可以将一张牌当作伤害类牌使用';
                } else {
                    if (player.storage.wenmo == true) return '转换技,出牌阶段限X+1次(X为你已损失体力值),阴:你可以将一张牌当作非伤害类锦囊牌使用.<span class="bluetext">阳:你可以将一张牌当作伤害类牌使用</span>';
                    return '转换技,出牌阶段限X+1次(X为你已损失体力值),<span class="bluetext">阴:你可以将一张牌当作非伤害类锦囊牌使用.</span>阳:你可以将一张牌当作伤害类牌使用';
                }
            };
            lib.dynamicTranslate.jingtao = function (player) {
                if (player.storage.jingtao == true) return '转换技,锁定技,阴:当你累计使用两次牌后,你对一名其他角色造成1点伤害(不触发〖惊涛〗).<span class="bluetext">阳:当你造成/受到伤害后,你摸两张牌';
                return '转换技,锁定技,<span class="bluetext">阴:当你累计使用两次牌后,你对一名其他角色造成1点伤害(不触发〖惊涛〗).</span>阳:当你造成/受到伤害后,你摸两张牌';
            };
            lib.dynamicTranslate.xianzi = function (player) {
                if (player.storage.xianzi == true) return '锁定技,转换技,阴:当你对其他角色造成伤害时,你摸一张牌,并令一名角色从牌堆中获得两张花色各不相同的牌.<span class="bluetext">阳:当你受到其他角色的伤害时,你弃置一张牌,并令一名其他角色弃置两张与此牌花色相同的牌</span>';
                return '锁定技,转换技,<span class="bluetext">阴:当你对其他角色造成伤害时,你摸一张牌,并令一名角色从牌堆中获得两张花色各不相同的牌.</span>阳:当你受到其他角色的伤害时,你弃置一张牌,并令一名其他角色弃置两张与此牌花色相同的牌';
            };
            lib.dynamicTranslate.yingfu = function (player) {
                if (player.storage.yingfu == true) return '转换技,当你使用【杀】造成伤害时,阴:你可以将该伤害改为雷电伤害并弃置受到该伤害的其他角色区域内X张牌.<span class="bluetext">阳:你可以将该伤害改为火焰伤害并获得受到该伤害的其他角色区域内X张牌</span>(X为此次伤害值)';
                return '转换技,当你使用【杀】造成伤害时,<span class="bluetext">阴:你可以将该伤害改为雷电伤害并弃置受到该伤害的其他角色区域内X张牌.</span>阳:你可以将该伤害改为火焰伤害并获得受到该伤害的其他角色区域内X张牌(X为此次伤害值)';
            };
            (lib.dynamicTranslate.weizhuang = function (player) {
                if (lib.config.azure_MoreCharacterWeiZhuangCanUse != 'normal' || !lib.config.azure_NoLoseSkillsWeiZhuangGained) {
                    var config1 = lib.config.azure_MoreCharacterWeiZhuangCanUse;
                    var config2 = lib.config.azure_NoLoseSkillsWeiZhuangGained;
                    return '你的回合开始/结束时或你受到伤害后,你可以随机观看5位' + (config1 == 'all' ? '武将' : config1 == 'meta' ? '舰船' : '不为meta的舰船') + '并变更为其中之一,获得其全部技能' + (config2 ? '' : '.当你发动〖伪装〗而变更角色时,你失去以此法获得的全部技能');
                } else return '你的回合开始/结束时或你受到伤害后,你可以随机观看5位不为meta的舰船并变更为其中之一,获得其全部技能.当你发动〖伪装〗而变更角色时,你失去以此法获得的全部技能';
            }),
                //更多的动态翻译(主要为非转换技)
                (lib.dynamicTranslate.shao = function (player) {
                    if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('shao') && player.hasMark('zhaohuo')) {
                        var num = player.countMark('zhaohuo');
                        return '锁定技,你的结束阶段开始前,你受到' + num + '点火焰伤害,失去〖着火〗';
                    } else return '锁定技,你的结束阶段开始前,你受到X点火焰伤害(X为你拥有的<着火>标记数),失去〖着火〗';
                });
            lib.dynamicTranslate.jinshui = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('jinshui') && player.hasMark('guanchuan')) {
                    var num = player.countMark('guanchuan');
                    return '锁定技,你的结束阶段开始前,你失去' + num + '点体力;当你回复体力后,你移去一枚<进水>标记;每当你受到1点伤害时,你获得一枚<进水>标记;当你的<进水>标记归零时,你失去技能〖进水〗';
                } else return '锁定技,你的结束阶段开始前,你失去X点体力(X为你的<进水>标记数);当你回复体力后,你移去一枚<进水>标记;每当你受到1点伤害时,你获得一枚<进水>标记;当你的<进水>标记归零时,你失去技能〖进水〗';
            };
            lib.dynamicTranslate.leida = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('leida')) {
                    var hp = get.cnNumber(player.hp);
                    var dhp = get.cnNumber(player.getDamagedHp() + 1);
                    return '出牌阶段限' + hp + '次,你可以观看一名其他角色的手牌,并可以弃置其中' + dhp + '张牌';
                } else return '出牌阶段限X次,你可以观看一名其他角色的手牌,并可以弃置其中1+Y张牌(X为你的体力值,Y为你已损失的体力值)';
            };
            lib.dynamicTranslate.menghu = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('menghu')) {
                    var num = get.cnNumber(Math.max(player.countCards('h'), 1) + 2);
                    return '一名角色准备阶段开始时,若你处于翻面状态,则你可以观看牌堆顶' + num + '张牌,并可用手牌进行交换,你按任意顺序放回牌堆顶';
                } else return '一名角色准备阶段开始时,若你处于翻面状态,则你可以观看牌堆顶X+2张牌,并可用手牌进行交换,你按任意顺序放回牌堆顶(X为你的手牌数且至少为1)';
            };
            lib.dynamicTranslate.shengfang = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('shengfang')) {
                    var num = player.maxHp;
                    return '锁定技,你的手牌上限+' + num + ';当你即将进行濒死结算时,取消之,若你的回合结束时你的体力不大于0,则你死亡;当你死亡时,你将你所有的手牌分配给任意名其他角色';
                } else return '锁定技,你的手牌上限+X(X为你的体力上限);当你即将进行濒死结算时,取消之,若你的回合结束时你的体力不大于0,则你死亡;当你死亡时,你将你所有的手牌分配给任意名其他角色';
            };
            lib.dynamicTranslate.Hiryu_zhanyi = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('Hiryu_zhanyi')) {
                    var num = get.cnNumber(player.getDamagedHp() + 1);
                    return '锁定技,你于你的回合外成为卡牌目标时,你记录此牌名.出牌阶段限一次,你可以从弃牌堆中获得至多' + num + '张〖战忆〗中记录的牌';
                } else return '锁定技,你于你的回合外成为卡牌目标时,你记录此牌名.出牌阶段限一次,你可以从弃牌堆中获得至多X+1张〖战忆〗中记录的牌(X为你已损失的体力值)';
            };
            lib.dynamicTranslate.jueyi = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('jueyi')) {
                    var num = get.cnNumber(player.getDamagedHp());
                    return '限定技,出牌阶段或你处于濒死状态时,你可以摸' + num + '张牌,将体力回复至上限并获得〖过载〗';
                } else return '限定技,出牌阶段或你处于濒死状态时,你可以摸X张牌,将体力回复至上限并获得〖过载〗(X为你已损失的体力值)';
            };
            lib.dynamicTranslate.baofa = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('baofa') && player.isDamaged()) {
                    var num = player.getDamagedHp();
                    return '锁定技,你出杀次数+' + num + ',摸牌阶段你摸牌数+' + num + ';你手牌上限为你的体力上限;每轮游戏开始时,你回复1点体力';
                } else return '锁定技,你出杀次数+X,摸牌阶段你摸牌数+X(X为你已损失的体力值);你手牌上限为你的体力上限;每轮游戏开始时,你回复1点体力';
            };
            lib.dynamicTranslate.jueze = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('jueze') && player.hasMark('jueze')) {
                    var num = player.countMark('jueze');
                    return '锁定技,摸牌阶段你额外摸' + num + '张牌,你手牌上限+' + num + '.当你受到伤害值不小于体力值的伤害时,你可以减1点体力上限,获得一枚<抉择>标记并摸一张牌,防止此伤害';
                } else return '锁定技,摸牌阶段你额外摸X张牌,你手牌上限+X(X为你的抉择标记数).当你受到伤害值不小于体力值的伤害时,你可以减1点体力上限,获得一枚<抉择>标记并摸一张牌,防止此伤害';
            };
            lib.dynamicTranslate.Sakawa_Noshiro_xinfu = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('Sakawa_Noshiro_xinfu') && player.hasMark('Sakawa_Noshiro_xinfu')) {
                    var num = player.countMark('Sakawa_Noshiro_xinfu');
                    return '锁定技,你手牌上限+' + num + ',你摸牌阶段摸牌数+' + num + '.当你受到伤害时,若你的<欣赴>小于3,则你可以弃置一张牌,获得一枚<欣赴>标记并取消此伤害';
                } else return '锁定技,你手牌上限+X,你摸牌阶段摸牌数+X(X为你的<欣赴>标记数).当你受到伤害时,若你的<欣赴>小于3,则你可以弃置一张牌,获得一枚<欣赴>标记并取消此伤害';
            };
            lib.dynamicTranslate.daogao = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('daogao')) {
                    var num = get.cnNumber(player.maxHp);
                    return '锁定技,你的出牌阶段开始时,你移去所有<祷告>标记.出牌阶段限一次,你可以选择至多' + num + '名角色并获得' + num + '枚<祷告>标记,接下来你与你所选择的角色获得如下效果直到你下个出牌阶段开始:当你所选择的角色受到伤害时,若你有<祷告>标记,则你可以移去一枚<祷告>标记防止此伤害,并与其各摸一张牌';
                } else return '锁定技,你的出牌阶段开始时,你移去所有<祷告>标记.出牌阶段限一次,你可以选择至多X名角色并获得X枚<祷告>标记(X为你的体力上限),接下来你与你所选择的角色获得如下效果直到你下个出牌阶段开始:当你所选择的角色受到伤害时,若你有<祷告>标记,则你可以移去一枚<祷告>标记防止此伤害,并与其各摸一张牌';
            };
            lib.dynamicTranslate.tx_yizhi = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasZhuSkill('tx_yizhi')) {
                    var num = game.countPlayer((current) => current.group == 'iron_blood');
                    return '主公技,你攻击范围和攻击距离+' + num;
                } else return '主公技,你攻击范围和攻击距离+X(X为场上铁血势力角色数)';
            };
            lib.dynamicTranslate.Unicorn_yingyuan = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('Unicorn_yingyuan')) {
                    var num = get.cnNumber(player.hp);
                    return '出牌阶段限' + num + '次,你可以将一张手牌交给一名其他角色,你与其各回复1点体力,若该你未受伤你则获得一点护甲;若你以此法给出的是伤害类牌,则你令该角色对一名其他角色造成一点伤害';
                } else return '出牌阶段限X次,你可以将一张手牌交给一名其他角色,你与其各回复1点体力,若该你未受伤你则获得一点护甲;若你以此法给出的是伤害类牌,则你令该角色对一名其他角色造成一点伤害(X为你的体力值)';
            };
            lib.dynamicTranslate.zhuangjia = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('zhuangjia') && player.hasMark('zhuangjia')) {
                    var num1 = get.cnNumber(player.countMark('zhuangjia'));
                    var num2 = get.cnNumber(Math.ceil(player.countMark('zhuangjia') / 2));
                    return '锁定技,当你受到其他角色的伤害后,你获得等量的<装甲>标记.出牌阶段,你可以选择一项:1.回复' + num2 + '点体力;2.摸' + num1 + '张牌;3.获得' + num2 + '点护甲,你移去所有<装甲>标记';
                } else return '锁定技,当你受到其他角色的伤害后,你获得等量的<装甲>标记.出牌阶段,你可以选择一项:1.回复X/2(向上取整)点体力;2.摸X张牌;3.获得X/2(向上取整)点护甲(X为你<装甲>标记数),你移去所有<装甲>标记';
            };
            /*lib.dynamicTranslate.buqu_buqu=function(player){
                if(lib.config.azure_MoreDynamicTranslation&&player.hasSkill('buqu_buqu')){
                    var info=lib.skill.buqu_buqu.getInfo(player);
                    return '锁定技,当你进入濒死状态时,你随机获得一层<意志>:炮击:你造成的火焰伤害+'+info[0]+';雷击:你造成的雷电伤害+'+info[1]+';命中:你使用的【杀】需要额外依次使用'+get.cnNumber(info[2])+'张【闪】响应;装填:摸牌阶段你额外摸'+get.cnNumber(info[3])+'张牌.若此次你未获得重复的<意志>,你将体力回复至1点';
                }else return '锁定技,当你进入濒死状态时,你随机获得一层<意志>:炮击:你造成的火焰伤害+X;雷击:你造成的雷电伤害+X;命中:你使用的【杀】需要额外依次使用X张【闪】响应;装填:摸牌阶段你额外摸X张牌(X为对应<意志>层数).若此次你未获得重复的<意志>,你将体力回复至1点';
            };*/
            lib.dynamicTranslate.jiahu = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('jiahu')) {
                    var num = get.cnNumber(player.hp);
                    return '你的回合开始时,你可以选择至多' + num + '名未拥有<加护>标记角色,令其获得一枚<加护>标记;拥有<加护>标记的角色在受到/造成伤害时,可以移去一枚<加护>标记令此伤害-1/+1';
                } else return '你的回合开始时,你可以选择至多X名未拥有<加护>标记角色,令其获得一枚<加护>标记(X为你的体力值);拥有<加护>标记的角色在受到/造成伤害时,可以移去一枚<加护>标记令此伤害-1/+1';
            };
            lib.dynamicTranslate.qianjin = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('qianjin')) {
                    var num = 3 + player.getDamagedHp();
                    return '准备阶段开始时,你可以观看牌堆顶' + num + '张牌,你选择一项:1.受到1点伤害获得这些牌,将一张牌置于牌堆顶;2.回复1点体力,将这些牌以原顺序置于牌堆顶.你以此技能获得的牌不计入手牌上限';
                } else return '准备阶段开始时,你可以观看牌堆顶X+3张牌,你选择一项:1.受到1点伤害获得这些牌,将一张牌置于牌堆顶;2.回复1点体力,将这些牌以原顺序置于牌堆顶.你以此技能获得的牌不计入手牌上限(X为你已损失的体力值)';
            };
            lib.dynamicTranslate.U96_qianfu = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('U96_qianfu')) {
                    var num = get.cnNumber(player.hp);
                    return '结束阶段,你可以将武将牌翻面,从牌堆中获得' + num + '张【杀】';
                } else return '结束阶段,你可以将武将牌翻面,从牌堆中获得X张【杀】(X为你的体力值)';
            };
            lib.dynamicTranslate.Queen_shiwei = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('Queen_shiwei')) {
                    var num = get.cnNumber(game.countGroup());
                    return '每名角色每回合限一次,当一名角色对其他角色造成伤害时,该角色可以请求交给你一张牌令此伤害+1.出牌阶段限一次,你可以获得至多' + num + '名其他角色区域内一张牌';
                } else return '每名角色每回合限一次,当一名角色对其他角色造成伤害时,该角色可以请求交给你一张牌令此伤害+1.出牌阶段限一次,你可以获得至多X名其他角色区域内一张牌(X为全场势力数)';
            };
            lib.dynamicTranslate.haoling = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasZhuSkill('haoling')) {
                    var num = game.countPlayer((current) => current.group == 'royal_navy');
                    return '主公技,你的手牌上限+' + num + ';出牌阶段限一次,你可以令所有皇家阵营的其他角色摸两张牌,交给你一张牌';
                } else return '主公技,你的手牌上限+X(X为场上皇家角色数量);出牌阶段限一次,你可以令所有皇家阵营的其他角色摸两张牌,交给你一张牌';
            };
            lib.dynamicTranslate.μ_zhiji = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('μ_zhiji') && player.storage.μ_zhiji > 0) {
                    var num = get.cnNumber(player.storage.μ_zhiji);
                    return '锁定技,你记录你使用牌的次数;当你使用【杀】时,若〖直击〗记录的数值达到过3,则此【杀】不可响应且不计入次数,你将手牌摸至' + num + '张并将〖直击〗记录的数值清零';
                } else return '锁定技,你记录你使用牌的次数;当你使用【杀】时,若〖直击〗记录的数值达到过3,则此【杀】不可响应且不计入次数,你将手牌摸至X张并将〖直击〗记录的数值清零(X为此时〖直击〗记录的数值)';
            };
            lib.dynamicTranslate.shenmou = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('shenmou')) {
                    var num = get.cnNumber(Math.max(1, player.hp));
                    return '锁定技,你的普通锦囊牌无法被无懈且不计入手牌上限;每回合当你使用第' + num + '张牌时,你从牌堆中获得一张普通锦囊牌并摸' + num + '张牌.你可将一张普通锦囊牌当作任意一张普通锦囊牌使用';
                } else return '锁定技,你的普通锦囊牌无法被无懈且不计入手牌上限;每回合当你使用第X张牌时,你从牌堆中获得一张普通锦囊牌并摸X张牌(X为你的体力值且至少为1).你可将一张普通锦囊牌当作任意一张普通锦囊牌使用';
            };
            lib.dynamicTranslate.ChenHai_buqi = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('ChenHai_buqi') && player.getExpansions('ChenHai_buqi').length) {
                    var num = player.getExpansions('ChenHai_buqi').length;
                    return '出牌阶段限一次,你可以摸三张牌,将多于手牌上限的牌置于武将牌上,称为<棋>.你的手牌上限+' + num;
                } else return '出牌阶段限一次,你可以摸三张牌,将多于手牌上限的牌置于武将牌上,称为<棋>.你的手牌上限+X(X为你的<棋>的数量)';
            };
            lib.dynamicTranslate.duangbing = function (player) {
                if (lib.config.azure_MoreDynamicTranslation && player.hasSkill('duangbing') && player.getDamagedHp() > 0) {
                    var num = player.getDamagedHp();
                    return '锁定技,你使用【杀】无次数限制且你不进入濒死结算,你计算与其他角色的距离-' + num + ';当你的回合结束时,若场上有角色死亡,则你死亡';
                } else return '锁定技,你使用【杀】无次数限制且你不进入濒死结算,你计算与其他角色的距离-X(X为你已损失体力值);当你的回合结束时,若场上有角色死亡,则你死亡';
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '碧蓝航线Q',
                    connect: true,
                    character: {
                        meta_Enterpries: ['female', 'ashes', 4, ['LuckyE', 'youling', 'kongxi', 'CV'], ['shipType:CV', 'des:企业号航空母舰(USS Enterprise,CV-6),是美国海军约克城级航空母舰2号舰,绰号大E(The Big E),幸运E(Lucky E),飞驰的幽灵(The Galloping Ghost).她是服役于美国海军的第六艘航空母舰,是一艘隶属于美国海军的航空母舰,为约克城级航空母舰二号舰,也是美国历史上第七艘冠以<企业号>之名的舰船,舰名源自美国独立战争期间美军俘获并更名的一艘英国单桅纵帆船.企业号于1933年8月3日批准建造,次年7月16日在弗吉尼亚州纽波特纽斯造船厂开工,在1936年下水.在1938年服役,1956年10月2日从海军舰艇名册中除籍,并于1958年7月1日以561333美元的价格出售解体']],
                        meta_Helena: ['female', 'ashes', 3, ['leida', 'zhangkong', 'dianliang', 'fankong', 'CL'], ['shipType:CL', "des:海伦娜号(USS Helena,CL-50),是美国海军的布鲁克林级轻巡洋舰9号舰(圣路易斯级2号舰).该级两艘舰船原为布鲁克林级八号舰和九号舰,由于单独装配了改进的高压锅炉与更高的火力,因此单独分作一级.1936年12月9日动工,1938年8月27日在纽约海军造船厂下水,1939年9月18日正式服役.服役后,海伦娜号被分配到太平洋舰队,隶属于第9巡洋舰分队.由于在珍珠港袭击中遭受严重损伤进行了维修,并在维修时加装了最新型的SG雷达,这也成为该舰的依仗.在埃斯佩兰斯海角海战、瓜达尔卡纳尔岛海战中,该舰都发挥了关键的作用,1943年7月6日的库拉湾海战中虽然战沉,但也有着英勇的表现.由于海伦娜号的出色表现,该舰成为第一艘获得海军部集体嘉奖的舰船,并在短暂的生涯中获得了亚太地区战功奖章和7枚战争之星.<br><span style='font-family: yuanli'>&emsp;「指揮官、私に声をかけて、私に心の声を聞かせて、私の焦燥を――私のそばにまだ分からないことがある事実を全部かき消して――」</span>"]],
                        Shinano: ['female', 'sakura_empire', 4, ['menghai', 'Shinano_rumeng', 'menggui'], ['shipType:CV', 'des:信浓号航空母舰(IJN Shinano, しなの),是旧日本帝国海军于二战期间建造的最大航空母舰,并且刷新了世界上吨位最高的航空母舰的纪录——该记录直到战后美国兴建福莱斯特级和小鹰级航空母舰才被再次打破.该舰舰名取自日本的古令制国名,信浓国——其大致范围大致相当于今日本的长野县及周边小部分地区']],
                        meta_Jintsu: ['female', 'ashes', 3, ['shengfang', 'mouce', 'Jintsu_jueze', 'leibao', 'CL'], ['shipType:CL', 'des:神通号(IJN Jintsū,じんつう),是旧日本帝国海军川内级轻巡洋舰2号舰,属于5500吨型轻巡洋舰,舰名来自流经岐阜县、富山县的神通川.建造于神户川崎造船所,1922年8月4日动工,1923年12月8日下水,1925年7月31日服役.1943年7月12日,神通号率领着第二水雷战队参加了科隆班加拉岛夜战,在7月13日遭遇美军火奴鲁鲁号轻巡洋舰、圣路易斯号轻巡洋舰,以及皇家新西兰海军利安得号轻巡洋舰以及10艘驱逐舰组成的优势舰队.面对占据优势的盟军舰队,神通开启探照灯,只身冲入敌阵掩护旗下驱逐舰三日月,雪风,滨风,清波和夕暮进行雷击.在神通的掩护下,日方驱逐舰几乎无伤,仅雪风被击中一发未爆弹.而雪风等舰的鱼雷更是造成了盟军三艘轻巡洋舰重创、两艘驱逐舰重创、一艘驱逐舰被击沉的重大损失,而日军己方仅损失神通一艘旧式5500吨级轻巡洋舰.随后日军运输队几乎无伤到达科岛,美军的拦截作战彻底失败.神通自身则受到了美军精准的雷达集火射击.根据美军回忆,当时的神通<如同融熔的铁水一般在燃烧>.神通在遭到美军鱼雷攻击后断成两截,尽管后半截已经沉没,但还在漂浮的前半截直到最后一刻依然在开火.包括第二水雷战队司令长官伊崎俊二与所有司令部成员在内的482人身亡,生还者仅20多人.但因集中攻击神通,美军在日军驱逐舰的攻击下遭受了较大损失,随后日方运输队成功抵达科隆班加拉岛.只因在这一战的表现,神通被美国军史学家萨缪埃尔·莫里森评价为<整个战争中作战最勇猛的IJN军舰>']],
                        Azuma: ['female', 'sakura_empire', 4, ['Azumanuyan', 'minrui', 'dianran', 'SCA'], ['shipType:SCA', 'des:吾妻号B65超甲巡,设计用于摧毁美国重型巡洋舰并对抗阿拉斯加级大型巡洋舰,一些设计方案是从大和级战列舰借鉴而来的,装备有3座三联装310mm主炮和8座双联装100mm高炮,有良好的鱼雷防护']],
                        U_81: ['female', 'iron_blood', 3, ['shixi', 'liesha', 'guanchuan', 'SUB'], ['hiddenSkill', 'shipType:SUB', 'des:U-81(KMS U-81),是纳粹德国海军的VIIC型潜艇之一.1939年1月25日订做,1940年5月11日于不莱梅伏尔甘船厂开工,1941年2月22日下水,4月26日服役.初任舰长弗里德里希·古根博格.随后被派往第一U艇舰队进行训练任务.在二战中的主要战果是击沉皇家方舟.1944年1月9日战沉']],
                        Noshiro: ['female', 'sakura_empire', 3, ['congrong', 'zhigu', 'xinrui', 'leibao', 'CL'], ['shipType:CL', 'des:能代号轻巡洋舰(IJN Noshiro, のしろ),是旧日本帝国海军在二战期间服役的阿贺野级轻巡洋舰二番舰,其命名来源于日本东北地区,秋田县米代川下游的别称,能代川.该舰在1941年9月4日才正式在横须贺海军工厂(Yokosuka Naval Arsenal)开工建设,暂称<第133号舰>(该舰也是该级唯一一艘在横须贺建造的舰艇:阿贺野、矢矧与酒匂均建于佐世保).1942年5月15日,该舰被正式命名<能代>(同日,岛风级首舰岛风与秋月级五番舰新月被正式命名).同年7月19日,能代入水,伏见宫博恭王出席仪式,入籍吴镇守府,开始舾装.1943年6月30日,能代完成舾装,正式竣工入列']],
                        Amagi: ['female', 'sakura_empire', 5, ['xiance', 'moufa', 'duochuan', 'dianran', 'BC'], ['shipType:BC', 'des:天城号战列巡洋舰(IJN Amagi),为八八舰队计划中的第5号舰,天城级战列巡洋舰1号舰.1920年12月16日,天城号在横须贺海军工厂开工.1922年<华盛顿海军条约>签订后暂停建造,1923年决定按条约规定改装为航空母舰.1923年9月1日,日本关东地区发生的7.9级强烈地震,天城号在此次地震中龙骨损毁.1924年4月14日,经过堪察证实已无修复价值于是被废弃.1924年解体']],
                        Friedrich_der_Große: ['female', 'iron_blood', 6, ['jiaoxiang', 'zouming', 'kuangxiang', 'dianran', 'BB'], ['shipType:BB', 'des:战列舰H 1939年方案腓特烈大帝(H-39 Friedrich der Große),德国海军大名鼎鼎的<战列舰H>设计方案之一,是1939年的设计方案,因此也被称为H-39.H级战列舰(H Klasse),狭义上指的是纳粹德国海军于二战前的<Z计划>中总共计划建造的6艘新型战列舰,即战列舰H、J、K、L、M、N.由于德国海军舰艇直到下水前才会正式命名,故该级舰实际不存在任何正式舰名,腓特烈大帝则是战舰世界开发者取的名字.同时,也无法确定该6艘新型主力舰是否为同一级别,H级仅能作为一种统称.而在广义上,H级还指一系列新型战列舰的设计方案,以设计完成年份作为编号命名.包括H-39、H-40A、H-40B、H-41、H-42、H-43、H-44等.其中H-39为第一个方案,已开工但未完成,H-41为最后一个以当时德国实力有可能建成的方案,也是海军司令部(OKM)参与的最后一个方案.后续方案基本仅局限于理论研究']],
                        Avrora: ['female', 'northern_parliament', 3, ['shuguang', 'zhengbei', 'CL'], ['shipType:CL', 'des:阿芙乐尔号巡洋舰(SN Avrora,Авро́ра),原为沙皇俄国波罗的海舰队的军舰.1900年在圣彼得堡的海军船厂下水,于1902年建成服役.舰长124米,宽16.8米,排水量6730吨.<阿芙乐尔>意为<黎明>或<曙光>,在古罗马神话中是指司晨的女神.1917年11月7日上午10时,列宁以革命军事委员会的名义起草了<告俄国公民书>,在<阿芙乐尔>巡洋舰上的电台向全国广播.尔后,晚上9点45 分,<阿芙乐尔>号按照信号,向冬宫发射了第一炮,揭开了伟大的十月社会主义革命的序幕.阿芙乐尔在服役生涯中共经历了三次革命和四场战争,其具有重大的历史意义.从1948年11月起,它作为十月革命的纪念物和中央军事博物馆分馆,永久性地停泊在涅瓦河畔,供人们参观、赡仰']],
                        Ayanami: ['female', 'sakura_empire', 3, ['guishen', 'yanwu', 'jiexuan', 'DD'], ['shipType:DD', 'des:绫波号(IJN Ayanami,あやなみ),是旧日本帝国海军的吹雪级特Ⅱ型驱逐舰1号舰(吹雪型11号舰).根据昭和2年度舰艇补充计划,于1928年(昭和3年)1月20日,在大阪藤永田造船所动工,初时名为<第四十五号驱逐舰>.在正式命名为<绫波>后(第二艘以<绫波>为名的日本军舰),于翌年10月5日下水,并于1930年4月30日竣工.当时隶属于第2舰队第十九驱逐队参加了马来半岛攻略作战.1942年5月27日参加中途岛战役,11月14日参加了第三次所罗门海战,呼应第4舰队对瓜岛美军机场进行炮击行动,突入萨沃岛西部海域与美军军舰交战,11月15日在萨沃岛附近被美战列舰<华盛顿>号击沉,同年12月15日除籍']],
                        meta_Hiryu: ['female', 'ashes', 4, ['jinren', 'Hiryu_zhanyi', 'jueyi', 'kongxi', 'CV'], ['shipType:CV', 'des:飞龙号(ひりゅう,IJN Hiryū),是旧日本帝国海军的一艘航空母舰,与苍龙一样属于第二次船舰补充计划(丸二计划)中建造的舰艇之一,原本是设计成跟苍龙号相同的第二号同级舰,不过在有了加贺号的改装经验与苍龙号的施工经验之后,对飞龙号有更多加强修正的设计.由于完工后与原先最早设计变化很多,最后飞龙与苍龙的舰型已相差甚远,于是便独立成为飞龙级航舰']],
                        Monarch: ['female', 'royal_navy', 6, ['pini', 'Monarch_dili', 'guochuan', 'BB'], ['shipType:BB', 'des:乔治五世级战列舰设计方案15C君主(HMS Monarch),乔治五世级战列舰在设计之初曾考虑过搭载16in(406mm)、15in(381mm)、14in(356mm)主炮的多种方案.由于<伦敦海军条约>的缘故以及军费预算紧张等因素,虽然海军部明显偏爱大口径方案,但是<升级条款>需要等到日本与意大利退出条约才能实施,而英国皇家海军急需建造新锐战列舰,无法等到1937年4月才开工第一批战列舰.因此海军部最终放弃了所有大于14寸的主炮的方案.君主是战舰世界开发者取的名字,历史上曾有一猎户座级战列舰也被命名为君主']],
                        Sakawa: ['female', 'sakura_empire', '3/4', ['jueze', 'Sakawa_lingji', 'leibao', 'CL'], ['shipType:CL', 'des:酒匂号轻巡洋舰(IJN Sakawa, さかわ),是旧日本帝国海军在二战末期建成服役的阿贺野级轻巡洋舰四番舰,其命名来源于流经静冈县和神奈川县的酒匂川.酒匂,以酒匂川命名,于1942年11月21日在佐世保海军兵工厂完成铺设.该舰于1944年4月9日下水,11月30日完工.服役后,她被直接分配到联合舰队.1945年1月15日,酒匂号成为第11驱逐舰中队的旗舰,在内海训练新型驱逐舰,并参加了一系列新型反雷达潜艇涂层的测试.4月1日,该中队被分配到Ten-Go行动,这是针对冲绳美国入侵部队的自杀任务.他们原本计划与战列舰大和号和酒匂的姊妹舰矢萩号一起行动,但没有燃料可供中队参加任务.5月26日,酒匂的一只螺旋桨在九州和本州之间的关门海峡撞上了一块岩石,但只有部分尖端发生弯曲.该舰后来被转移到舞鹤海军区,并于7月19日抵达那里.六天后,她遭到航空母舰约克城的飞机袭击,但没有受损.9月2日日本投降时,酒匂号停靠在舞鹤']],
                        Sakawa_Noshiro: ['female', 'sakura_empire', 3, ['Sakawa_Noshiro_xinfu', 'Sakawa_Noshiro_yingji', 'Sakawa_Noshiro_xinrui', 'leibao', 'CL'], ['shipType:CL', 'des:阿贺野级轻巡洋舰(日语:あがのがたけいじゅんようかん),是旧日本帝国海军建造的轻巡洋舰,作为率领驱逐舰队实施鱼雷攻击为主要任务的水雷战队旗舰设计的轻巡洋舰(乙巡).首舰阿贺野号被击沉后,官方文书上曾使用二号舰能代做舰级名,称为<能代级>,但实际指涉的军舰为相同型号,不存在技术差异']],
                        Jeanne_d_Arc: ['female', 'iris_the_liberty', 3, ['Jeanne_yinling', 'daogao', 'Jeanne_yuhuo', 'CL'], ['shipType:CL', "des:圣女贞德号轻巡洋舰(FFNF Jeanne d'Arc),是法国海军根据1926年造舰计划建造的专用于官校学生远洋航海训练的训练巡洋舰.本舰是第5艘以圣女贞德为名的舰艇.作为巡洋舰则是第2代.1942年11月盟军在北非登陆后,在土伦的法国舰队在德军强行接收前自沉.消息传来,岛上官兵群情激奋,对服从维希政府、按兵不动的罗伯特上将强烈不满.1943年,圣女贞德终于投入自由法国部队奋勇作战.同年10月开始担任运输任务.圣女贞德在地中海参与输送士兵登陆科西嘉岛和对意大利北部海岸的炮击行动,1944年8月它又把法国临吋政府要员运回被盟军解放的瑟堡.1945年3月参加了对德国沿海的炮击.为解放祖国作出应有贡献.战后,圣女贞德回复它训练舰身份,一直到1964年完成第27次环球巡航后退役,两年后拆解"]],
                        Royal_Fortune: ['female', 'mot', 3, ['Royal_Fortune_jiexun', 'Royal_Fortune_haihu', 'FB'], ['shipType:FB', 'des:皇家财富号(Royal Fortune),是黄金时代的最后一位大海盗巴沙洛缪·罗伯茨的旗舰.因历史上沙洛缪·罗伯茨曾多次变更旗舰并命名为皇家财富号,所以她的历史并不好说(游戏当前设定可以很好的解释她的存在,但解释如摩尔曼斯克、欧若拉之类的kansen就会相当的棘手:她们历史上改过名字)']],
                        Tashkent: ['female', 'northern_parliament', 3, ['suibing', 'bingwu', 'haihun', 'jiexuan', 'DD'], ['shipType:DD', 'des:塔什干号驱逐舰(Tashkent,Ташкент),是苏联海军在二战前订购,并于意大利建造的一艘驱逐领舰.作为苏联海军船舶建造计划,本项目工程代号为<Project 20-I(проекта 20-И)>,所以亦称<Pr.20-I型驱逐领舰塔什干>.与其他苏联大型军舰均沿用国内大型城市所不同的是,<塔什干>号的得名初衷并非源于乌兹别克斯坦加盟共和国的首府,而是为了纪念1918年9月5日在解放伏尔加河中游地区所进行的战斗中被白军沿岸火力击沉的伏尔加河区舰队同名炮船才加以冠名 .塔什干号作为二战时期苏联最著名的驱逐舰之一:其在短短一年左右的服役时间里,塔什干及全体黑海舰队的行动依旧为卫国战争南部战场起到了至关重要的作用.在塞瓦斯托波尔保卫战中,面对德国空军三个多小时空袭,塔什干成功回避了其投下的336枚炸弹,足以让她被冠以传奇之名']],
                        meta_Fortune: ['female', 'ashes', 4, ['kuiming', 'Fortune_mingfu', 'huiji', 'pogu', 'DD'], ['shipType:DD', 'des:命运女神号(HMS Fortune,H70),是英国皇家海军的F级驱逐舰之一.1933年7月25日开工,1934年8月29日下水,1935年4月27日服役.1943年5月31日,经过一系列改装后转役加拿大皇家海军,并改名萨斯喀彻温号1946年1月28日退役,1946年售出拆毁']],
                        Tirpitz: ['female', 'iron_blood', 6, ['gushou', 'qianzhi', 'qiongjia', 'BB'], ['shipType:BB', 'des:提尔比茨号(KMS Tirpitz),是纳粹德国海军的俾斯麦级战列舰二号舰,名字来源于德意志帝国海军的缔造者、海军元帅——阿尔弗雷德·冯·提尔比茨.她与俾斯麦同为德意志海军最强的战舰,但她一生只与姐姐俾斯麦见过一面.俾斯麦沉没时,提尔比茨尚未完成全部的训练和调试工作.1936年11月2日开工,1939年4月1日下水,1941年2月25日正式服役.1942年,前往挪威北方海域前一直停靠在基尔,抵达挪威后在那里度过了二战中的大部分时光,由于存在舰队的理论,鲜少出击,甚至仅有一次开火机会——这就是北方的孤独女王的由来.但其存在确实大大牵制了盟军的海空力量,最为典型的是在PQ17事件中仅凭错误的出击情报就让北极航线中断长达三个月']],
                        Bismarck: ['female', 'iron_blood', 6, ['Wahrheit', 'fuxing', 'bsm_buqu', 'tx_yizhi', 'pojiao', 'BB'], ['zhu', 'shipType:BB', 'des:俾斯麦号(KMS Bismarck),是纳粹德国海军的俾斯麦级战列舰1号舰,它以1871年德意志统一时的首任宰相——奥托·冯·俾斯麦命名.该舰于1936年7月1日在汉堡的布洛姆·福斯船厂进行龙骨架设,并在1939年2月14日<圣瓦伦丁日>下水.全舰装备在1940年8月24日完成,并随即投入德国舰队服役.俾斯麦号及其姊妹舰提尔比茨是德国曾经建造的最大战列舰,也是由欧洲国家所建造的最大战列舰之二.在俾斯麦受她唯一一任舰长,恩斯特·林德曼指挥的八个月服役生涯中,她只在1941年5月末的最后8天参与了一次代号为<莱茵演习>的进攻行动.在丹麦海峡战役中,俾斯麦中弹三发,因遭超额的破坏而导致破交作战被迫终止.胡德的覆灭导致英国皇家海军出动数十艘军舰对俾斯麦展开不懈追击.两天后,在前往德占法国地区进行维修的途中,俾斯麦遭到了从皇家方舟起飞的15架旧式剑鱼式双翼鱼雷轰炸机袭击;其中一次鱼雷命中致使战列舰的操舵装置失效.至翌日的最后一战,已受重创的俾斯麦在与英国两艘战列舰及两艘重巡洋舰的持续交火中遭到严重破坏,在由其船员自行凿穿后,伴随着大量人员伤亡而沉没']],
                        Unicorn: ['female', 'royal_navy', 3, ['Unicorn_zhiyuan', 'Unicorn_yingyuan', 'huhang', 'CVL'], ['shipType:CVL', 'des:&emsp;&emsp;独角兽号(HMS Unicorn,I72),是英国皇家海军的一艘自1943年开始服役的航空母舰.独角兽号轻型航母于1939年6月26日于贝尔法斯特的哈兰德和沃尔夫船厂开工,最初是作为光辉级航空母舰的支援舰而设计建造的,其职责是将同行航母破损的飞机进行修复.由于要求修复的飞机可以直接起飞,最终将其设计成了一艘轻型航母.也正是由于其定位仅为支援舰,所以其建造一再被推迟,直至1941年11月20日才下水,1943年3月12日才完工并服役.为了加快进度,独角兽号在完工时甚至没有配备维修设备.<br>&emsp;&emsp;除了经历了第二次世界大战一直到日本投降外,还参加了朝鲜战争.<br>&emsp;&emsp;服役后她先后被派往大西洋、1943年派往地中海、1944至1945年著驻于东印度、1945年再转太平洋.1950年至1953年又到韩国.作为远东地区的飞机运输舰.在朝鲜战争中主要用于运输、维修和保障舰载机']],
                        Kawakaze: ['female', 'sakura_empire', 3, ['junheng', 'chenzhuo', 'nixi', 'yezhan', 'DD'], ['shipType:DD', 'des:江风号(IJN Kawakaze,かわかぜ),是旧日本海军的白露级驱逐舰9号舰,或称改白露级(海风级)3号舰.她也是旧日本海军根据<丸二计划>建造的第三艘驱逐舰.1934年列入计划,1935年4月25日在藤永田造船所开工,1936年11月1日下水,并在1937年4月30日竣工. 1942年8月22日第二次所罗门海战前夜,江风受田中少将之命与夕凪一同拦截瓜岛附近的美军运输队.由于预定合流的夕凪因天气原因未能赶到,江风决定单舰突入铁底湾隆加角泊地.在战斗中,江风与3艘美国驱逐舰交战,并击沉美国驱逐舰<布卢>号(巴格莱级,为白露级同期的美国驱逐舰).<江风>最值得一提的战果是在1942年11月30日夜,作为二水战一员参加了田中赖三少将指挥的塔萨法隆格海战.此战日方依靠精准的鱼雷取得击沉一艘、重创三艘美军巡洋舰的战绩,日方仅仅付出前哨驱逐舰<高波>号沉没的轻微代价.而且美方资料认为击沉重巡<北安普顿>号的两枚鱼雷来自<江风>.美方给予此战高度评价:当时第二水雷战队只有8艘驱逐舰,面对的是装备雷达前来埋伏的4重巡1轻巡6驱逐,却依靠沉着应战与高超的夜战素养取得胜利']],
                        meta_Hunter: ['female', 'ashes', 3, ['fenglie', 'kuishi', 'jiexuan', 'DD'], ['shipType:DD', 'des:猎人号驱逐舰(HMS Hunter, H35),是20世纪30年代中期皇家海军建造的H级驱逐舰.在1936年至39年的西班牙内战期间,猎人号执行了英国和法国对于西班牙第二共和国和西班牙国民军两方的武器封锁.猎人号于1937年5月受到水雷的袭击,在接下来的一年半内进行了修理,之后又重新加入了地中海舰队.在第二次世界大战的前几个月内,猎人号在大西洋进行搜索德军攻击商船队的船只的任务.1940年2月,猎人号返回英国,之后加入了挪威战役']],
                        Pompeo_Magno: ['female', 'sardinian_empire', 3, ['xuri', 'rongyao', 'zhengbei', 'DD'], ['shipType:DD', 'des:庞培·马格诺号大型驱逐舰(RN Pompeo Magno),是意大利皇家海军在1930年代中后期设计并于1939年陆续开工建造的罗马统帅级大型驱逐舰之一,也是意大利政府投降前,第3艘也是最后一艘完工服役的罗马统帅级.该型舰艇最初被称为远洋侦察舰,1938年后被划分为轻巡洋舰,但本质上是类似大型驱逐舰、驱逐领舰的舰艇.庞培·马格诺的命名源自格涅乌斯·庞培,古代罗马共和国末期著名的军事家和政治家,也被称为<伟大的庞培>、<庞培大帝>等']],
                        Essex: ['female', 'eagle_union', 4, ['shanzhan', 'Essex_zhenlie', 'kongxi', 'CV'], ['shipType:CV', "des:埃塞克斯号航空母舰(USS Essex, CV-9),是美国海军埃塞克斯级航空母舰的首舰.它是美军第四艘以埃塞克斯为名的军舰,纪念1799年马萨诸塞州的埃塞克斯县居民捐赠第一艘埃塞克斯舰给美国政府.由于在二战中表现出色,舰上水兵称之为<舰队最善战之舰(The Fightin'est Ship in the Fleet)>"]],
                        Essex_Yorktown: ['female', 'eagle_union', 4, ['tianxi', 'aoxiang', 'pomen', 'kongxi', 'CV'], ['shipType:CV', 'des:约克城号航空母舰(USS Yorktown,CV-10),是美国海军埃塞克斯级航空母舰的2号舰.它是美军第四艘以约克城为名的军舰,最初是纪念约克城战役.本舰开工时的命名原为好人理查德(Bonhomme Richard),在建造时,前代约克城级约克城号航母(CV-5)在中途岛海战中战沉,本舰于是改名约克城,以示纪念.1944年,由爱德华·斯泰钦执导,美国海军制作,罗伯特·泰勒中尉讲述的战争纪录片<战斗女士>(<The Fighting Lady>)在约克城II上拍摄部分着陆场景由提康德罗加客串,由于战时保密限制,在影片中约克城II被代称为<战斗女士(The Fighting Lady)>,该代称后来被正式确定为约克城II的绰号,而约克城II作为第一批埃塞克斯级,参与了二战期间的大多数海空战,并且表现出色,确实名实相符.约克城II在二战中共击毁敌机1108架,击沉或协助击沉敌舰116艘(包括大和、矢矧、榛名、大淀等)、击伤308艘,击破火车57辆,并获得了总统集体嘉奖及11颗战斗之星']],
                        Ticonderoga: ['female', 'eagle_union', '4/4/2', ['liuhuo', 'zhuangjia', 'kongxi', 'CV'], ['shipType:CV', 'des:提康德罗加号航空母舰(USS Ticonderoga, CV-14),是美国海军埃塞克斯级航空母舰的6号舰,同时也是首艘采用长船型的埃塞克斯级(某些资料会称之为提康德罗加级).舰名源于纪念美国独立战争时期,1775年5月10日,民兵奇袭攻占提康德罗加堡这一历史事件.这也是美国海军第4艘以提康德罗加为名的舰艇.提康德罗加堡的前身为卡里永堡,由法国殖民者在1755-1757年修建,用于对抗英国殖民者.1759年,在前一年失败后,英国军队卷土重来打败了驻守卡里永堡的法国军队,并将其占领.英国殖民者将其称为提康德罗加堡(以其所在地为名)']],
                        L_Indomptable: ['female', 'curia_of_vichya', 3, ['shenpan', 'buqu_buqu', 'dianran', 'DD'], ['shipType:DD', "des:不屈号大型驱逐舰(MNF L'Indomptable),是法国海军1930年代建造的6艘空想级大型驱逐舰之一,按建造工程编号为6号舰.不屈的命运依旧如二战时的空想级大型驱逐舰一般:除凯旋为自由法国作战外,其他为维希法国所有,并与英军交战.不过恶毒、空想和可怖三舰最后倒戈并在美国改造,加入盟军作战,勇敢受创后落入德军之手最后被盟军炸沉,但不屈被半软禁在土伦港口,过着一段看似平静的时光——她们已经卷入战争,她们不可能独善其身,她们的命运仰人鼻息.1942年11月27日,不屈与其他76艘法国海军舰艇自沉于土伦——<法国海军的舰艇必须永远属于法国海军>.二战时候的法国海军历史既可笑又可悲"]],
                        ChangChun: ['female', 'dragon_empery', 3, ['huzhu', 'shengwei', 'missile', 'DD'], ['shipType:DD', 'des:&emsp;&emsp;长春号是中国人民解放军海军的07型驱逐舰3号舰,也是新中国建立后最早的一批驱逐舰之一.<br>&emsp;&emsp;1955年6月28日,第二批两艘两艘苏制07型驱逐舰抵达青岛.7月6日举行了接收仪式,其中<列兹基>号命名为<长春>舰,舷号303(1961年改203,1974年至退役为103).<br>&emsp;&emsp;在07型长春舰之前,1954年1月,华东海军曾将修复中的原<惠安>舰被命名为<长春>舰,然而5月瑞金炮舰战沉,为保留这一舰名,长春舰尚未完工便被更名为瑞金舰入列.于是07型3号舰得以再次启用<长春>作为舰名,成为<四大金刚>之一.<br>&emsp;&emsp;1971年4月,长春舰完成导弹化改装.<br>&emsp;&emsp;1990年8月,青岛海军博物馆海上展舰区建成,长春舰成为该馆最早的军舰展品之一.1992年鞍山舰退役入驻海博后,长春舰由山东省乳山市购去停泊于该市的银滩做为展示舰用']],
                        Georgia: ['female', 'eagle_union', 6, ['tiangui', 'suijia', 'qishe', 'BB'], ['shipType:BB', 'des:佐治亚号战列舰,源自衣阿华级战列舰原型方案Ⅳ——这是1938年5月论证衣阿华级战列舰时提出的一系列方案之一,当时被列为方案Ⅳ(Scheme Ⅳ).该方案以南达科他级战列舰为基础,拉长舰体,改用双烟囱.同时沿用南达科他级的推进器设计,使得设计航速可达33节.计划采用三座三联装406mm/45 MK6炮塔,与同期其他采用50倍径406mm主炮的方案相比,舰体稍短,吨位较轻,但显得火力不足.事实上,如果衣阿华级最终采用MK6炮塔的设计,那么除了能提高6节航速外并没有其他效应.在战舰世界中,该舰曾出现在早期游戏宣传绘中,但一直被雪藏.2019年2月21日,大白舰队环球航行110周年纪念之际,该模型被重新推出.不同的是开发者为她换装了三座双联装457mmMKA炮塔.弥补了原来只有MK6的遗憾,而整体重量可以做到基本不变.不过,在设计衣阿华级的过程中,美国海军从未考虑过双联装457mm的方案,只考虑三联装方案,这也是导致设计超重得不到通过的一个重要原因.<战舰世界>中佐治亚的船体状态为1945年.佐治亚的命名来源于美国的佐治亚州,美国东南部7个州之一.在历史上,曾有一弗吉尼亚级战列舰被命名为佐治亚(BB-15),她曾是著名的大白舰队的一员']],
                        Zuikaku: ['female', 'sakura_empire', 4, ['fenjin', 'juenian', 'zhikong', 'CV'], ['shipType:CV', 'des:瑞鹤号(ずいかく,IJN Zuikaku),是旧日本帝国海军的翔鹤级航空母舰二号舰.舰名中的<瑞>是吉祥的意思,<鹤>是一种美丽的鸟类,在日本是长寿的象征.1938年5月25日在川崎重工业神户造船厂开始建造,1939年11月27日下水,1941年9月25日服役.与姊妹舰翔鹤号航空母舰组成第五航空战队.1942年5月8日,在珊瑚海海战中,<翔鹤>号和<瑞鹤>号共同起飞舰载机并成功击沉了列克星敦号航空母舰和重创约克城号.1942年10月26日,在南太平洋海战中,与翔鹤号一同参战,并两度击伤美军<企业>号,并成功击毁<大黄蜂>号航空母舰.1944年10月25日,在莱特湾海战中,<瑞鹤>号被编入第3航空战队中负责引诱美军航空母舰特混编队北上,在美军舰载战机波状攻击之下,身中7枚炸弹和7枚鱼雷,舰体向左大幅倾斜,经过大力抢救后仍于下午2时发布全员离舰命令.15分钟后,<瑞鹤>号即发生大爆炸而沉没至海底']],
                        Intrepid: ['female', 'eagle_union', 4, ['wuwei', 'yingyong', 'kongxi', 'CV'], ['shipType:CV', 'des:无畏号航空母舰(USS Intrepid, CV-11),是美国海军在二战期间建造的24艘埃塞克斯级航空母舰,依舷号为3号舰.舰名继承自美国海军缴获的一艘装甲双桅帆船,后被命名为<无畏号(1798)>.该舰是美国海军第四艘以<Intrepid>命名的舰艇,而在二战中她也的确展现了与其舰名相匹配的杰出战斗姿态:英勇无畏,敢打敢拼,以此获得了官方绰号——The Fighting <I>.二战期间,无畏共击毁敌机608架,击沉或协助击沉敌舰28艘(包括武藏、大和等)、击伤31艘,另外还有22艘不确定,同时摧毁或破坏了700吨以下微型舰艇163艘,并获得了5枚战斗之星以及海军集体表彰.现在,无畏作为一艘博物馆舰停泊在流经纽约市中的哈德逊河上——无畏号海空暨太空博物馆']],
                        Murmansk: ['female', 'northern_parliament', 3, ['budon', 'xiongyan', 'Murmansk_yingzi', 'fankong', 'CL'], ['shipType:CL', 'des:摩尔曼斯克号轻巡洋舰(SN Murmansk,Мурманск),是原美国海军奥马哈级轻巡洋舰2号舰,密尔沃基(USS Milwaukee,CL-5).1944年3月,该舰护送盟军JW-58船团抵达苏联摩尔曼斯克.作为意大利投降后暂时无法向苏联交付战争赔偿舰的替代,美国将密尔沃基号临时租借给苏联海军.1944年4月20日,本舰移交给苏联海军,改名摩尔曼斯克号并加入北方舰队服役.该命名来源俄罗斯西北部重要港口城市摩尔曼斯克,是北冰洋沿岸最大的港口,也是北极圈内唯一一个不冻港.加入苏联海军后,摩尔曼斯克主要负责在北冰洋的护航、巡逻任务.战争结束后作为训练舰,偶尔会出海执行训练作战任务,并参加了1948年的舰队演习.1949年3月16日,苏联归还摩尔曼斯克号给美国,3月18日抵达费城海军船厂.1949年10月10日,退役拆解']],
                        Tallinn: ['female', 'northern_parliament', 4, ['CA'], ['shipType:CA']],
                        Kiev: ['female', 'northern_parliament', 3, ['DD'], ['shipType:DD']],
                        Shōkaku: ['female', 'sakura_empire', 4, ['jiahu', 'S_yaoji', 'shubo', 'kongxi', 'CV'], ['shipType:CV', 'des:翔鹤号(しょうかく,IJN Shōkaku),是旧日本帝国海军的翔鹤级航空母舰一番舰.舰名取义翱翔天际之鹤鸟.1937年12月12日于横须贺海军工厂起造,1939年6月1日下水,1941年8月8日竣工,编入吴镇守府籍.与同级舰瑞鹤共同组成了第五航空战队,在第二次世界大战中被击沉']],
                        Ark_Royal: ['female', 'royal_navy', 4, ['CV'], ['shipType:CV']],
                        Glowworm: ['female', 'royal_navy', 3, ['xiangjie', 'tonggui', 'jiexuan', 'DD'], ['shipType:DD', 'des:萤火虫号(HMS Glowworm, H92),是英国皇家海军的G级驱逐舰.934年8月15日开工,次年7月22日下水.1936年1月22日服役.1940年3月,萤火虫号调到本土舰队(Home Fleet),并赶上了挪威战役.1940年4月8日,萤火虫号与在入侵挪威的威悉河演习行动中运送登陆部队的德国驱逐舰遭遇,德国驱逐舰试图脱离接触并向希佩尔海军上将号重巡洋舰求援.在海战中,萤火虫号被重创,但仍努力向德舰发射鱼雷.最终两艘舰船相撞,萤火虫号的舰艏折断,不久后爆炸沉没']],
                        meta_Sheffield: ['female', 'ashes', 3, ['boqiang', 'yaozhuo', 'dianran', 'CL'], ['shipType:CL', 'des:谢菲尔德号轻巡洋舰(HMS Sheffield,24/C24),属于英国皇家海军的城级轻巡洋舰的第一批.该舰也是第一艘以英格兰中部三角城市群,南约克核心城市,谢菲尔德命名的舰艇.在服役过程中,谢菲尔德多次正面对抗德军主力巨舰,在大多数关键海战中均扮演关键角色,是被交战方均熟知的<名舰>.1935年1月31日,谢菲尔德由维克斯·阿姆斯特朗有限公司承建,1936年7月23日入水,1937年8月25日服役.1940年,谢菲尔德投入挪威战局,随后进入地中海加入H舰队,参与斯帕蒂文托角海战.次年谢菲尔德接到了俾斯麦情报,与皇家方舟等舰出直布罗陀围堵,一段时间内更是单舰对峙俾斯麦,全程没有跟丢目标,为将之击沉奠定基础.在冰岛海域巡航时触雷修理后,谢菲尔德再度进入地中海参与火炬行动,随后再度转战北极航线,于巴伦支海击伤希佩尔海军上将.谢菲尔德还参与了击沉沙恩霍斯特的行动,并在掩护船团时监视提尔皮茨.1967年在法斯兰拆解出售']],
                        Kuybyshev: ['female', 'northern_parliament', 3, ['qianjin', 'Kxie', 'CL'], ['shipType:CL', 'des:古比雪夫号轻巡洋舰(Kuybyshev,Куйбышев),是苏联海军在二战期间至二战后建造的恰巴耶夫级轻巡洋舰的4号舰.为纪念俄罗斯革命家、红军军官及知名苏联政治家,瓦列里安·弗拉基米罗维奇·古比雪夫.本级舰工程代号为<Project 68>.古比雪夫于1939年8月31日在第200号61公社造船厂开工,计划于1942年完工加入黑海舰队.由于尼古拉耶夫造船厂的进度比较快,在此处建造的伏龙芝和古比雪夫下水比较早,并继续开工了6号舰奥尔忠尼启则和7号舰斯维尔德洛夫.古比雪夫于1941年1月31日就已经下水.受德国入侵苏联影响,在夏季所有68型被迫停工转移.至1941年6月22日时进度为29%.当战争前线接近尼古拉耶夫时,古比雪夫装载了工人、家属和贵重设备转移至塞瓦斯托波尔,后又转移至波季并封存.战争结束后,古比雪夫按改进后的<Project 68-K>继续建造,1950年4月20日竣工,同年8月6日加入黑海舰队服役(一说为7月29日).1965年退役,次年被拆解']],
                        Akashi: ['female', 'sakura_empire', 3, ['houqin', 'AR_sunguan', 'AR', 'diange'], ['shipType:AR', 'des:明石号维修舰(Akashi,あかし),是旧日本帝国海军唯一一艘专门设计,专门建造,专门担任维修舰艇工作的维修舰,也参考了美国的美杜莎号维修舰,要求达到与其同等的作业能力.本来设计还有两只同级舰三原和桃取,但是直至战争结束都没有开工.1937年1月18日于佐世保海军工厂动工,1938年6月29日下水,1939年7月31日竣工服役.在二战期间在特鲁克泊地进行维修舰艇作业,在1942年修理了翔鹤号航空母舰,1943年修理了大和号战列舰.1944年2月17日在美军空袭特鲁克时被重创,同年3月30日再次遭美舰载机攻击后坐沉,5月10日除籍.从此日本失去南洋方面的舰艇修理能力,损伤的舰船都必须返回本土进行修理.1954年坐沉状态的明石被浮起解体']],
                        Dreamweaver: ['female', 'siren', 4, [], []],
                        Sheffield: ['female', 'royal_navy', 3, ['shanyao', 'mizong', 'mingsang', 'duizhen', 'CL'], ['shipType:CL', 'des:谢菲尔德号轻巡洋舰(HMS Sheffield,24/C24),属于英国皇家海军的城级轻巡洋舰的第一批.该舰也是第一艘以英格兰中部三角城市群,南约克核心城市,谢菲尔德命名的舰艇.在服役过程中,谢菲尔德多次正面对抗德军主力巨舰,在大多数关键海战中均扮演关键角色,是被交战方均熟知的<名舰>.1935年1月31日,谢菲尔德由维克斯·阿姆斯特朗有限公司承建,1936年7月23日入水,1937年8月25日服役.1940年,谢菲尔德投入挪威战局,随后进入地中海加入H舰队,参与斯帕蒂文托角海战.次年谢菲尔德接到了俾斯麦情报,与皇家方舟等舰出直布罗陀围堵,一段时间内更是单舰对峙俾斯麦,全程没有跟丢目标,为将之击沉奠定基础.在冰岛海域巡航时触雷修理后,谢菲尔德再度进入地中海参与火炬行动,随后再度转战北极航线,于巴伦支海击伤希佩尔海军上将.谢菲尔德还参与了击沉沙恩霍斯特的行动,并在掩护船团时监视提尔皮茨.1967年在法斯兰拆解出售']],
                        U_96: ['female', 'iron_blood', 3, ['wangpai', 'U_nixi', 'U96_qianfu', 'cuixiu', 'pojiao', 'SUB'], ['hiddenSkill', 'shipType:SUB', 'des:U-96号潜艇(KMS U-96),是二战期间德国海军建造的VIIC型潜艇.该舰于战争爆发当月1939年9月16日在基尔港的弗雷德里希·克虏伯·日耳曼尼亚造船厂的601号渠位开工建设,1940年8月1日入水.1940年9月14日U-96正式服役,分配至第7潜艇中队,部署在法国圣纳泽尔开始执行任务.她是二战德国成百上千的U艇中,脱颖而出的真正的传奇之一:该舰执行11次巡航,参与11次狼群,与众多U艇合作,击沉27艘船只总吨位181,206吨,击伤4艘船只总吨位33,043吨,另外命中击伤了8,888吨英国船只卡尔斯号使之全损,回港直接报废.1945年2月,U-96在威廉港退役,同年3月30日在威廉港被美军空袭击沉']],
                        Ägir: ['female', 'iron_blood', 4, ['hainu', 'shenyang', 'duizhen', 'SCA'], ['shipType:SCA', 'des:埃吉尔(KMS Ägir)是<战舰世界>德国IX级金币大型巡洋舰,于2020年6月0.9.5版本加入游戏,可通过100万全局经验兑换或高级商店购买.埃吉尔本质上是对稍早前开始测试的德国IX级金币大巡齐格飞(KMS Siegfried)的305mm主炮改装,而齐格飞本质上是基于德国历史上的O级装甲舰/战列巡洋舰进行的微调整版本.在战舰世界中,考虑到设计年代、舰船作战定位、装甲性能等因素,O级被作为大型巡洋舰设计并加入了游戏中,游戏简介描述为<超重型巡洋舰>.与齐格飞相比,埃吉尔将3座双联装380mm主炮更换为3座三联装305mm主炮这一大巡常见口径,同时取消了航空设施,并增设了2座双联装128mm副炮,相比齐格飞,副炮火力和整体防空性能略有加强.相比O级原案,得益于128mm高平两用副炮和55mm机炮,防空性能有了质的飞跃.<战舰世界>中的船体状态为1945年']],
                        Icarus: ['female', 'royal_navy', 3, ['yazhi', 'jizhong', 'bulei', 'DD'], ['shipType:DD', 'des:伊卡洛斯号驱逐舰(HMS Icarus, D03),是英国皇家海军在1930年代建造的9艘I级驱逐舰之一.舰名取自古希腊神话人物,伊卡洛斯,该舰也是皇家海军第四艘使用该舰名的舰艇.1936年3月9日,该舰由苏格兰克莱德班克的约翰·布朗造船公司开工建造,同年11月26日入水,1937年5月1日舾装服役.看上去是普通的I驱,但决不可貌相——伊卡洛斯是皇家海军驱逐舰中有名的武勋舰:她在战时参与或单独击沉4艘U艇(U-35,U-45,U-744,U-1199),也是9艘I驱中唯三存活至战后的舰艇之一,舰历丰富且充满传奇.1946年8月26日,伊卡洛斯退役,两个月后交付英国钢铁联合公司在苏格兰的特伦拆解']],
                        U_47: ['female', 'iron_blood', 3, ['zhongxi', 'dulang', 'SUB'], ['hiddenSkill', 'shipType:SUB', 'des:U-47(KMS U-47),是纳粹德国海军的VIIB型潜艇之一,属于使用柴油引擎及电动机的传统动力潜艇,是第二次大战时德国海军最成功的U-艇之一,出战十次战功显著.本舰于1937年2月25日在基尔的克虏伯造船厂开始建造,1938年10月29日下水.服役后被编入第7潜艇舰队,由舰长刚瑟·普里恩指挥.第二次世界大战爆发后,U-47便奉命投入对盟军作战.整个二战期间,U-47号参加了10次海上作战行动,共击沉盟军30艘舰船,总吨位164953吨.其中,该艇最成功的一次出击,是在1939年10月.当时,它巧妙地规避了盟军的重重警戒,潜入英国皇家海军设在斯卡帕湾的海军基地,向皇家橡树号战列舰发动了偷袭并将其击沉,震惊世界.此后一段时间,英国皇家海军甚至一度被迫放弃该港.1941年3月7日在北大西洋冰岛南部,北纬60.00度,西经13.00度失踪,45名船员死亡(失踪)']],
                        Warspite: ['female', 'royal_navy', 6, ['shenshe', 'chuanqi', 'qishe', 'BB'], ['shipType:BB', 'des:厌战号战列舰(HMS Warspite,03),是英国皇家海军的伊丽莎白女王级战列舰二号舰,她的名字是英国皇家海军中的传统舰名,也是第七个使用这个名字的战舰.该舰于1912年10月31日在达文波特皇家船厂开工,1913年11月26日下水,1915年3月8日服役,造价为252万英镑.厌战号自诞生伊始直到退役参加了无数次的行动,二战期间更是打满全场,至今仍是皇家海军最负盛名的舰只之一.二战期间,厌战号因得到安德鲁•坎宁安爵士赞誉而获得绰号<可敬的老女士>.第一艘Warspite诞生于16世纪,而<spite>一词源于古法语的<despit> .由是可知,其拉丁文舰铭"Belli dura despicio"——<蔑视战斗的艰辛>——才是这一舰名的真实含义']],
                        Yorktown: ['female', 'eagle_union', 4, ['sishen', 'Yorktown_fuchou', 'daji', 'tuofu', 'sunguan', 'CV'], ['shipType:CV', 'des:约克城号航空母舰 (USS Yorktown,CV-5),是美国海军的约克城级航空母舰一号舰.她是美军第三艘以约克城为名的军舰,纪念美国独立战争中的约克城围城战役.约克城号在1934年5月21日于纽波特纽斯造船厂开始建造.1936年4月4日,约克城号下水,由当时的第一夫人埃莉诺•罗斯福掷瓶.1937年9月30日,约克城号终于在海军正式服役.1940年编入驻太平洋的战斗部队.第二次世界大战爆发后,美国在欧洲进行中立巡航,而约克城号也在1941年4月调返大西洋舰队,防备纳粹德国海军进入西半球攻击商船.同年12月日本偷袭珍珠港后,约克城号旋即调到美国太平洋舰队,并参与美国在太平洋战争早期的多场行动,包括掩护陆战队增援美属萨摩亚及马绍尔及吉尔伯特群岛突袭.1942年5月,约克城号在珊瑚海海战受到重创,但在短促维修后赶及参与6月初的中途岛海战,并与企业号联手击溃日本的航母部队,扭转战争局势.不过日军在海战再次重创约克城号,更迫使美军放弃拯救,使约克城号最终在海上翻沉.海战结束后四个月,美国海军将约克城号除籍,并把正在建造、舷号CV-10的埃塞克斯级航空母舰更名为约克城,以纪念其战绩.在第二次世界大战中,约克城号总共获得3枚战斗之星勋章']],
                        Queen_Elizabeth: ['female', 'royal_navy', 6, ['enshang', 'Queen_shiwei', 'haoling', 'qishe', 'BB'], ['zhu', 'shipType:BB', 'des:伊丽莎白女王号(HMS Queen Elizabeth,00),是英国皇家海军的伊丽莎白女王级战列舰首舰.1912年10月21日动工,1915年1月竣工,1914年12月22日服役.伊丽莎白女王号战列舰在服役期间进行了两次较大的现代化改装.经历过第一次、第二次世界大战']],
                        HaiTian: ['female', 'dragon_empery', 3, ['wenmo', 'jingtao', 'zhengbei', 'CL'], ['shipType:CL', 'des:海天号防护巡洋舰(ICN Hai Tien),是清朝末期订购的一艘防护巡洋舰,为海天级防护巡洋舰首舰.本舰为清朝在甲午战争后重建海军时期拥有的大型军舰之一,然并未来得及发挥太多作用,便在日俄战争之初触礁沉没']],
                        Attilio_Regolo: ['female', 'sardinian_empire', 3, ['Regolo_jueyong', 'xianzi', 'bulei', 'DD'], ['shipType:DD', 'des:阿蒂利奥·雷戈洛号大型驱逐舰(RN Attilio Regolo),是意大利皇家海军在1930年代中后期设计并于1939年陆续开工建造的罗马统帅级大型驱逐舰的首舰,也是意大利政府投降前,完工服役的3艘罗马统帅级之一.该型舰艇最初被称为远洋侦察舰,1938年后被划分为轻巡洋舰,但本质上是类似大型驱逐舰、驱逐领舰的舰艇.阿蒂利奥·雷戈洛的命名源自马尔库斯·阿蒂利乌斯·雷古鲁斯,古罗马政治家和将军,第一次布匿战争时期的统帅,他在公元前267年和公元前256年担任罗马共和国执政官']],
                        Gascogne: ['female', 'curia_of_vichya', 6, ['Gascogne_yizhi', 'jingmi', 'caozuo', 'guochuan', 'BB'], ['shipType:BB', 'des:加斯科涅号战列舰(MNF Gascogne),是法国海军黎塞留级战列舰的4号舰.该舰的命名来自法国西南部行省加斯科涅,这也是法国海军再度回归以省级区划命名的战列舰,并一直延续至之后的战列舰舰名.与同级的前三舰不同,该舰的形态仅见于图纸,且只准备了部分零件.原计划该舰将在圣纳泽尔海军船坞,完成让·巴尔的建造泊位上动工开建.但在1940年6月,法国战败投降,德国顺利将圣纳泽尔港占领,完工75%的让·巴尔只能先一步离开前往北非,而等待建造的加斯科涅则实际从未被真正下令开工建造.该舰的建造计划出自法国海军1938年补充计划:由于1937年意大利再度追加了两艘维托里奥·维内托级战列舰的建造计划,法国决定采取对等措施,追加两艘黎塞留级战列舰的建造以保证地中海的军事存在平衡.但由于法国一战后一度停滞的工业建造能力,这两艘黎塞留级战列舰相比于前分别采取了所谓的两种<改进方案>,即方案A与方案B——加斯科涅作为四号舰,采取的是<方案B>,这导致其舰上布局与之前三艘姊妹舰相比可谓完全不同,甚至可以单列为新的一级']],
                        μ_Gascogne: ['female', 'curia_of_vichya', 6, ['yingfu', 'xingsheng', 'Cœur_Battant', 'dianran', 'BB'], ['shipType:BB', 'des:加斯科涅号战列舰(MNF Gascogne),是法国海军黎塞留级战列舰的4号舰.该舰的命名来自法国西南部行省加斯科涅,这也是法国海军再度回归以省级区划命名的战列舰,并一直延续至之后的战列舰舰名.与同级的前三舰不同,该舰的形态仅见于图纸,且只准备了部分零件.原计划该舰将在圣纳泽尔海军船坞,完成让·巴尔的建造泊位上动工开建.但在1940年6月,法国战败投降,德国顺利将圣纳泽尔港占领,完工75%的让·巴尔只能先一步离开前往北非,而等待建造的加斯科涅则实际从未被真正下令开工建造.该舰的建造计划出自法国海军1938年补充计划:由于1937年意大利再度追加了两艘维托里奥·维内托级战列舰的建造计划,法国决定采取对等措施,追加两艘黎塞留级战列舰的建造以保证地中海的军事存在平衡.但由于法国一战后一度停滞的工业建造能力,这两艘黎塞留级战列舰相比于前分别采取了所谓的两种<改进方案>,即方案A与方案B——加斯科涅作为四号舰,采取的是<方案B>,这导致其舰上布局与之前三艘姊妹舰相比可谓完全不同,甚至可以单列为新的一级']],
                        New_Jersey: ['female', 'eagle_union', 6, ['NewJersey_tuxi', 'rongyu', 'bubi', 'qishe', 'BB'], ['shipType:BB', 'des:&emsp;&emsp;新泽西号战列舰(USS New Jersey, BB-62),是美国海军二战初期建造的衣阿华级战列舰2号舰,也是美国海军第二艘以新泽西命名的舰艇.<br>&emsp;&emsp;二战期间,新泽西连续参与马绍尔群岛、夸贾林方面的战斗,任第五舰队旗舰后进攻特鲁克泊地、帕劳与沃莱艾环礁,短暂卸任舰队旗舰后支援登陆新几内亚,最后参与菲律宾海海战.舰队司令轮换后任第三舰队旗舰,参与了莱特湾海战,并支援美军重夺菲律宾.卸任第三舰队旗舰后,支援进攻硫磺岛,前进至冲绳,最终重新以第五舰队旗舰身份进驻东京湾.现在,新泽西正作为博物馆舰停泊于原纽约造船厂所在地,新泽西州的卡姆登港区.<br>&emsp;&emsp;二战期间,新泽西共获得9枚战斗之星.越南战争期间,新泽西受海军集体表彰;同时还拥有菲律宾与韩国的总统集体嘉奖.也因此,美国战史研究者对她的历史地位有一个定位,她是<美国海军历史上最富荣誉的战列舰>']],
                        Observer_α: ['female', 'siren', 5, ['weizhuang'], ['shipType:all', 'des:观察者,最早出现在碧蓝航线Q的序章剧情中,是与人类接触最早的塞壬之一.观察者在各个活动剧情中均有出现,她诡计多端,善于伪装和察言观色,同时也与测试者,净化者等塞壬有密切的交流']],
                        Jintsu: ['female', 'sakura_empire', 3, ['shenmou', 'zhanhua', 'leibao', 'CL'], ['shipType:CL', 'des:神通号(IJN Jintsū,じんつう),是旧日本帝国海军川内级轻巡洋舰2号舰,属于5500吨型轻巡洋舰,舰名来自流经岐阜县、富山县的神通川.建造于神户川崎造船所,1922年8月4日动工,1923年12月8日下水,1925年7月31日服役.1943年7月12日,神通号率领着第二水雷战队参加了科隆班加拉岛夜战,在7月13日遭遇美军火奴鲁鲁号轻巡洋舰、圣路易斯号轻巡洋舰,以及皇家新西兰海军利安得号轻巡洋舰以及10艘驱逐舰组成的优势舰队.面对占据优势的盟军舰队,神通开启探照灯,只身冲入敌阵掩护旗下驱逐舰三日月,雪风,滨风,清波和夕暮进行雷击.在神通的掩护下,日方驱逐舰几乎无伤,仅雪风被击中一发未爆弹.而雪风等舰的鱼雷更是造成了盟军三艘轻巡洋舰重创、两艘驱逐舰重创、一艘驱逐舰被击沉的重大损失,而日军己方仅损失神通一艘旧式5500吨级轻巡洋舰.随后日军运输队几乎无伤到达科岛,美军的拦截作战彻底失败.神通自身则受到了美军精准的雷达集火射击.根据美军回忆,当时的神通<如同融熔的铁水一般在燃烧>.神通在遭到美军鱼雷攻击后断成两截,尽管后半截已经沉没,但还在漂浮的前半截直到最后一刻依然在开火.包括第二水雷战队司令长官伊崎俊二与所有司令部成员在内的482人身亡,生还者仅20多人.但因集中攻击神通,美军在日军驱逐舰的攻击下遭受了较大损失,随后日方运输队成功抵达科隆班加拉岛.只因在这一战的表现,神通被美国军史学家萨缪埃尔·莫里森评价为<整个战争中作战最勇猛的IJN军舰>']],
                        ChenHai: ['female', 'dragon_empery', 3, ['ChenHai_buqi', 'ChenHai_xingluo', 'zaji', 'huhang', 'CVL'], ['shipType:CVL', 'des:&emsp;&emsp;镇海号(ROC Chen Hai),是1920年代中期,中华民国奉系东北海军改装的一艘水上飞机母舰.<镇海>一名取自民国北京政府授予奉系首领张作霖的称号<镇威上将军>.<br>&emsp;&emsp;镇海号前身德国商船马尼拉号,1904年1月在德国不莱梅哈芬的瑞克麦斯船厂下水,登记总吨1790、净吨1108.一战后随着德国战败流落山东,1921年10月由政记轮船公司以银145000两的价格购入,改名为<祥利>轮船.1923年夏天,<祥利>号被奉系张作霖部航警处征用,9月进入日本经营的满洲船渠会社旅顺船渠改造为军舰,由于涉及舱室改动,经与政记公司协商,改为收购,命名为<镇海>军舰.此后,奉军先后购入水上飞机35架,并在1926年3月在秦皇岛成立<水面飞机队>,在葫芦岛、青岛设立了陆上场地,同时将镇海号被改造为水上飞机母舰,舰艉甲板搭载2架水上飞机,但起降工作必须通过吊机将飞机放置于水面方可进行.改造完成后,镇海参与了一系列军阀之间的混战以及对抗北伐军的战争.<br>&emsp;&emsp;1937年7月7日,七七事变爆发.此时沈鸿烈已经任青岛海陆军总指挥,在沈命令下,12月26日第三舰队司令谢刚哲开始了沉船据守的行动,将镇海号等沉入青岛小港码头外.1938年10月8日,由在日军组织下,青岛港务部门打捞起镇海号,推测之后进行了拆除.<br>&emsp;&emsp;在沉船行动前,东北海军将镇海号等舰上的舰炮、机枪拆卸下来,组建起舰炮总队,先行离开青岛奔赴前线,参加了陆地上的对日作战.同年10月21日,舰炮总队以舰炮在禹城徒骇河铁桥处击毁日军装甲列车两列.是役舰炮总队有可能用到了原镇海号上拆下的火炮']],
                        Guichen: ['female', 'iris_the_liberty', 4, ['mingyun', 'tongmeng'], []],
                        Prince_of_Wales: ['female', 'royal_navy', 6, ['mingyun', 'tongmeng', 'qishe', 'BB'], ['shipType:BB', 'des:&emsp;&emsp;威尔士亲王号(HMS Prince of Wales,53),是英国皇家海军的乔治五世级战列舰二号舰,原计划命名为>英王爱德华八世>,然而遭到本人反对,因而以如今的名字命名,这艘军舰也是英国海军史中第7艘以<威尔士亲王>命名的军舰.建造于英格兰伯肯黑的坎迈尔莱尔德船厂,1937年1月1日动工,1939年5月3日下水,1941年1月19日服役.<br>&emsp;&emsp;1941年5月,在丹麦海峡海战中受到重创,但也对俾斯麦造成损伤,为其沉没奠定基础.<br>&emsp;&emsp;1941年11月25日,受命加入Z舰队支援太平洋战场,于12月10日与反击号共同遭受日军陆基飞机的攻击,双双沉没.她的沉没被视作飞机取代战列舰成为海上霸主的标志之一']],
                        Shimakaze: ['female', 'sakura_empire', 3, ['fengzhan', 'yilei', 'xunlei', 'jiexuan', 'DD'], ['shipType:DD', 'des:岛风号驱逐舰(IJN Shimakaze, しまかぜ),是旧日本帝国海军于1941年太平洋战争前夕开工建造的最新锐舰队驱逐舰,也被称为丙型驱逐舰.因种种原因该型驱逐舰只建造了岛风1艘']],
                        Laffey: ['female', 'eagle_union', 3, ['duangbing', 'jianmie', 'Laffey_zhanshen', 'yezhan', 'DD'], ['shipType:DD', 'des:&emsp;&emsp;拉菲号(USS Laffey,DD-459),是美国海军的本森级驱逐舰7号舰,为了与后来的艾伦萨姆纳级拉菲作区别,通常称作初代拉菲.1942年3月31日服役.在1942年11月13日的瓜达尔卡纳尔海战(日方称第三次所罗门海战)中,在与日军战舰比叡交错的过程中疯狂倾泻火力,直接造成了对方指挥系统的瘫痪,并且在日军包围下依然用仅剩的火炮坚持作战直至沉没.<br>&emsp;&emsp;是役,拉菲荣获总统集体嘉奖(PUC),并且被称为<美军的所罗门疯狗>']],
                        Whydah: ['female', 'mot', 3, ['jinku', 'xijie', 'anmian', 'FB'], ['shipType:FB', 'des:维达号(Whydah Gally,也有Whidah或Whidaw等拼法)是18世纪初的一艘大型贩奴船,后来被大西洋上的著名海盗头目黑山姆夺为旗舰,不久便于1717年4月26日在鳕角近海遭遇暴风雨触礁沉没,仅两人生还,船上估计载有4.5公吨的金银珠宝.1984年确认了维达号的沉没地点并开始打捞,至今(2008年) 已找到10万件左右的物品,是史上第一艘有实物证实的海盗船']],
                        Akagi: ['female', 'sakura_empire', 4, ['chuji', 'pingrui', 'xianshou', 'kongxi', 'CV'], ['shipType:CV', 'des:赤城号(IJN Akagi,あかぎ),是旧日本海军的一艘航空母舰,原计划为天城级战列巡洋舰二号舰,舰名来自日本关东北部的赤城山.赤城最初设计规划为天城级战列巡洋舰2号舰,1920年12月6日在吴海军工厂动工,中途因华盛顿海军条约签订而停工,之后决定将天城级改造为航空母舰(不过因为关东大地震导致天城号严重损坏无法修复,仅赤城完成改造),直到1925年4月22日下水.1927年竣工,编入横须贺镇守府服役.她作为旧日本海军仅次于信浓号的第二大航空母舰,曾以第一航空舰队旗舰的名号服役了15年,并参加了太平洋战争初期重要的海战,后于中途岛海战中遭到击沉']],
                    },
                    translate: {
                        //以下为我老婆名单
                        meta_Enterpries: '企业',
                        meta_Helena: '海伦娜',
                        Shinano: '信浓',
                        meta_Jintsu: '神通',
                        Azuma: '吾妻',
                        U_81: 'U-81',
                        Noshiro: '能代',
                        Amagi: '天城',
                        Friedrich_der_Große: '腓特烈大帝',
                        Avrora: '阿芙乐尔',
                        Ayanami: '绫波',
                        meta_Hiryu: '飞龙',
                        Monarch: '君主',
                        Sakawa: '酒匂',
                        Sakawa_Noshiro: '酒匂能代',
                        Jeanne_d_Arc: '圣女贞德',
                        Royal_Fortune: '皇家财富号',
                        Tashkent: '塔什干',
                        meta_Fortune: '命运女神',
                        Tirpitz: '提尔比茨',
                        Bismarck: '俾斯麦',
                        Unicorn: '独角兽',
                        Kawakaze: '江风',
                        meta_Hunter: '猎人',
                        Pompeo_Magno: '庞培·马格诺',
                        Essex: '埃塞克斯',
                        Essex_Yorktown: '约克城',
                        Ticonderoga: '提康德罗加',
                        L_Indomptable: '不屈',
                        ChangChun: '长春',
                        Georgia: '佐治亚',
                        Zuikaku: '瑞鹤',
                        Intrepid: '无畏',
                        Murmansk: '摩尔曼斯克',
                        Tallinn: '塔林',
                        Kiev: '基辅',
                        Shōkaku: '翔鹤',
                        Ark_Royal: '皇家方舟',
                        Glowworm: '萤火虫',
                        meta_Sheffield: '谢菲尔德',
                        Kuybyshev: '古比雪夫',
                        Akashi: '明石',
                        Dreamweaver: '织梦者',
                        Sheffield: '谢菲尔德',
                        U_96: 'U-96',
                        Ägir: '埃吉尔',
                        Icarus: '伊卡洛斯',
                        U_47: 'U-47',
                        Warspite: '厌战',
                        Yorktown: '约克城',
                        Queen_Elizabeth: '伊丽莎白女王',
                        HaiTian: '海天',
                        Attilio_Regolo: '雷戈洛',
                        Gascogne: '加斯科涅',
                        μ_Gascogne: '加斯科涅',
                        New_Jersey: '新泽西',
                        Observer_α: '观察者',
                        Jintsu: '神通',
                        ChenHai: '镇海',
                        Guichen: '吉尚',
                        Prince_of_Wales: '威尔士亲王',
                        Shimakaze: '岛风',
                        Laffey: '拉菲',
                        Whydah: '维达号',
                        Akagi: '赤城',
                        DD: '驱逐',
                        DD_info: '锁定技,你的杀无距离限制且出杀次数+1,结束阶段,你获得一张【闪】,你的【诱敌深入】无法被无懈,当你使用【诱敌深入】后,你摸一张牌.你可以将一张【闪】当作【诱敌深入】使用',
                        CL: '轻巡',
                        CL_info: '锁定技,你的杀无距离限制,结束阶段,你从牌堆里获得一张伤害类牌,若你于本回合的出牌阶段内没有使用过【杀】,你获得一张【闪】',
                        CA: '重巡',
                        CA_info: '锁定技,你的杀无距离限制,结束阶段,你从牌堆里获得一张伤害类牌.你可以将两张杀当作一张杀使用,若如此做,此杀伤害+1',
                        SCA: '超巡',
                        SCA_info: '锁定技,你的杀无距离限制,出牌阶段,你可以将两张杀当作一张杀使用,若如此做,此杀伤害+1且无视防具',
                        BC: '战巡',
                        BC_info: '锁定技,你的杀无距离限制,用杀造成伤害后你弃置受到该伤害角色装备区里的一张牌.出牌阶段,你可以将两张杀当作一张杀使用,若如此做,此杀伤害+1且无视防具',
                        BB: '战列',
                        BB_info: '锁定技,你的杀无距离限制,用杀造成伤害后你弃置受到该伤害角色装备区里的所有牌.出牌阶段,你可以将两张杀当作一张杀使用,若如此做,此杀伤害+1且无视防具',
                        CVL: '轻航',
                        CVL_info: '锁定技,你的杀无距离限制,且可至多选择两名角色为你的【杀】的目标.出牌阶段限两次,你可以观看一名其他角色的手牌,选择是否展示其手牌',
                        CV: '正航',
                        CV_info: '锁定技,你的杀无距离限制,且可至多选择三名角色为你的【杀】的目标.出牌阶段限一次,你可以观看一名其他角色的手牌,选择是否展示其手牌',
                        SUB: '潜艇',
                        SUB_info: '隐匿技,你登场时,你获得三枚<氧气>标记并进入潜行状态直到你的出牌阶段开始时.锁定技,你的杀无距离限制.你的结束阶段开始时,若你不处于潜行状态,你可以弃置一枚<氧气>标记,进入潜行状态直到你的下个出牌阶段开始.你的回合结束后,若你没有进入潜行状态,则你获得一枚<氧气>标记',
                        SUB_qian: '潜行',
                        SUB_qian_info: '锁定技,你不能成为其他角色的卡牌的目标,当你脱离潜行状态时,你摸一张牌并回复1点体力,当你受到伤害时,若有伤害来源且与玩家距离为1,此伤害改为1,否则防止之',
                        AR: '维修',
                        AR_info: '锁定技,摸牌阶段你的额定摸牌数+1.出牌阶段,若有角色已受伤,则你可以摸一张牌弃置X张手牌(X为你本回合内发动过〖维修〗的次数),令一名已受伤角色回复1点体力',
                        diange: '点歌',
                        diange_info: '出牌阶段,你可以从<维修舰的歌单>中选择一首歌曲切换为背景音乐',
                        TS: '运输',
                        TS_info: '',
                        FB: '风帆',
                        FB_info: '锁定技,你的杀无距离限制,当你使用杀对一名其他角色造成1点以上的伤害后,与该角色距离不大于1的其他角色受到1点火焰伤害',
                        fankong: '防空',
                        fankong_info: '锁定技,【万箭齐发】对你无效',
                        shenfeng: '神风',
                        shenfeng_info: '你出杀无次数限制.出牌阶段,你可以将所有手牌当作一张【杀】使用',
                        kongxi: '空袭',
                        kongxi_info: '你可以将两张【杀】当作【万箭齐发】使用',
                        leibao: '雷暴',
                        leibao_info: '锁定技,你造成的雷电伤害+1',
                        dianran: '点燃',
                        dianran_info: '锁定技,你对其他角色造成火焰伤害后,你令受到该火焰伤害的角色获得一枚<着火>标记并进行一次判定.若判定结果为红色,该角色获得〖着火〗',
                        shao: '着火',
                        shao_info: '锁定技,你的结束阶段开始前,你受到X点火焰伤害(X为你拥有的<着火>标记数),失去〖着火〗',
                        guanchuan: '贯穿',
                        guanchuan_info: '锁定技,当你的杀造成伤害前,若该杀的目标角色未拥有技能〖进水〗,则你进行一次判定,若判定结果为黑色,则该杀的目标角色获得一枚<进水>标记和〖进水〗',
                        jinshui: '进水',
                        jinshui_info: '锁定技,你的结束阶段开始前,你失去X点体力(X为你的<进水>标记数);当你回复体力后,你移去一枚<进水>标记;每当你受到1点伤害时,你获得一枚<进水>标记;当你的<进水>标记归零时,你失去技能〖进水〗',
                        guochuan: '过穿',
                        guochuan_info: '锁定技,当你使用杀将对其他角色造成1点以上伤害时,你进行一次判定,若判定结果为♠️️,则此伤害改为1并且将受到此伤害的角色获得〖瘫痪〗直到其回合结束',
                        tanhuan: '瘫痪',
                        tanhuan_info: '锁定技,你不能对其他角色使用牌',
                        pojiao: '破交',
                        pojiao_info: '当有其他角色不于其摸牌阶段摸牌时,如果你有【杀】,则你可以使用一张【杀】与其进行一次拼点且此牌作为拼点牌亮出时点数+X(X为你体力值与其体力值之差,最小为0),若其没赢,则取消此次摸牌',
                        qiongjia: '穹甲',
                        qiongjia_info: '锁定技,你受到伤害时根据穹甲状态获得相应效果:1.完好,此伤害-1,穹甲损坏;2.损坏,此伤害+1,穹甲修复.当你回复体力时,穹甲修复',
                        huhang: '护航',
                        huhang_info: '你的回合结束时,你可以选择一名其他角色,接下你获得以下效果直到你重新发动〖护航〗:你可以获得目标角色所有使用/打出的杀,在你的出牌阶段结束时,你将你手牌中所有的杀交给该角色',
                        yezhan: '夜战',
                        yezhan_info: '出牌阶段,你可以将一张牌当作任意一张本回合内你未以此法使用的伤害类牌使用;若你因此牌造成过伤害,则你不能再发动〖夜战〗直到此回合结束',
                        jiexuan: '接舷',
                        jiexuan_info: '限定技,出牌阶段,你可以选择一名其他角色,接下来你与其距离计算为1且相互使用牌没有次数限制',
                        jiexuan_after: '接舷',
                        qishe: '齐射',
                        qishe_info: '出牌阶段,你可以将所有的【杀】当作一张【杀】使用,此杀伤害基数加X-1且无视防具(X为以此法转化的【杀】所使用的【杀】数)',
                        duizhen: '对阵',
                        duizhen_info: '出牌阶段限两次,你可以将一张【杀】当作【决斗】使用',
                        zhikong: '制空',
                        zhikong_info: '当一名其他角色使用牌指定了多个目标时,你可以弃置两张【杀】令此牌对全部目标无效',
                        zhengbei: '整备',
                        zhengbei_info: '出牌阶段限一次,你可以弃置手牌中一种类别的所有牌,从牌堆/弃牌堆中获得等量的与其类别不同的牌',
                        sunguan: '损管',
                        sunguan_info: '限定技,当你处于濒死状态时,你可以将体力值修正至你体力上限的一半(向上取整)并摸两张牌',
                        AR_sunguan: '损管',
                        AR_sunguan_info: '每局游戏限3次,当有人进入濒死状态时,你可以将其体力值修正至其体力上限的一半(向上取整)',
                        bulei: '布雷',
                        bulei_info: '出牌阶段限一次,你可以将任意张牌置于你的武将牌上,称为<水雷>.当你成为其他角色目标时,你可以移去一张<水雷>对其造成1点雷电伤害',
                        missile: '制导',
                        missile_info: '出牌阶段限一次,你可以弃置一张牌,对一名其他角色造成一点伤害',
                        Azure_jihuo: '集火',
                        Azure_jihuo_info: '出牌阶段限一次,你选择一名其他角色,声明一张伤害类牌名,令其获得以下效果直到你重新发动〖集火〗:该角色受到来源为卡牌的伤害时,若此牌与你选择的牌名相同,此伤害+1',
                        LuckyE: '进取',
                        LuckyE_info: '锁定技,你额定摸牌数为原来的两倍.你造成双倍伤害且回避所有伤害',
                        youling: '幽灵',
                        youling_info: '锁定技,你跳过弃牌阶段,你不是其他玩家锦囊牌和延时锦囊牌的合法目标',
                        leida: '雷达',
                        leida_info: '出牌阶段限X次,你可以观看一名其他角色的手牌,并可以弃置其中1+Y张牌(X为你的体力值,Y为你已损失的体力值)',
                        zhangkong: '掌控',
                        zhangkong_info: '当任意玩家成为普通锦囊牌或延时锦囊牌的目标后,你可以令此牌对其无效.一名角色的判定牌生效前,你可以打出一张手牌代替之,你摸一张牌',
                        dianliang: '点亮',
                        dianliang_info: '出牌阶段限一次,你选择一名未获得〖暴露〗的其他角色,其获得〖暴露〗',
                        baolu: '暴露',
                        baolu_info: '锁定技,你体力值损失为原来的两倍',
                        menghai: '星夜',
                        menghai_info: '锁定技,你的手牌上限+X(X为你的<入梦>标记数);每当你的武将牌翻至正面时,你将手牌摸至体力上限并回复一点体力',
                        g_menghai: '星夜·改',
                        g_menghai_info: '锁定技,你的手牌上限+X(X为你的<入梦>标记数);每当你的武将牌翻至正面时,你将手牌摸至体力上限并可以视为使用任意一张基本牌或普通锦囊牌',
                        Shinano_rumeng: '幽梦',
                        Shinano_rumeng_info: '结束阶段,若你不处于翻面状态,则你可以获得一个<入梦>标记并将你的武将牌翻面.当你受到伤害后,若你处于翻面状态,你可以将武将牌翻至正面',
                        g_youmeng: '幽梦·改',
                        g_youmeng_info: '结束阶段,若你不处于翻面状态,则你可以获得一个<入梦>标记并将你的武将牌翻面.当你受到伤害后,你可以将武将牌翻面,若你因此将武将牌翻至正面,则你于当前回合结束后执行一个额外的回合',
                        menggui: '梦归',
                        menggui_info: '觉醒技,你的回合开始时,若你的<入梦>数大于1,则你增加2点体力上限并回复2点体力,获得〖梦护〗〖空袭〗和〖正航〗并修改〖星夜〗和〖幽梦〗',
                        menghu: '梦护',
                        menghu_info: '一名角色准备阶段开始时,若你处于翻面状态,则你可以观看牌堆顶X+2张牌,并可用手牌进行交换,你按任意顺序放回牌堆顶(X为你的手牌数且至少为1)',
                        shengfang: '盛放',
                        shengfang_info: '锁定技,你的手牌上限+X(X为你的体力上限);当你即将进行濒死结算时,取消之,若你的出牌阶段结束时你的体力不大于0,则你死亡;当你死亡时,你将你所有的手牌分配给任意名其他角色',
                        mouce: '谋策',
                        mouce_info: '锁定技,当你使用锦囊牌时,你观看牌堆顶三张牌并以任意顺序置于牌堆顶或牌堆底,你摸一张牌.每回合限一次,若你手牌中没有锦囊牌,则你可以将任意一张牌当作任意一张锦囊牌使用',
                        mouce_use_backup: '谋策',
                        Jintsu_jueze: '抉择',
                        Jintsu_jueze_info: '当有角色受到致命伤害时,你可以将此伤害转移给你,并可以摸X张牌或对至多X名其他角色造成1点伤害(X为此次伤害值)',
                        Jintsu_shenlue: '慎略',
                        Jintsu_shenlue_info: '锁定技,结束阶段,若你于本回合的出牌阶段内没有打出或使用过【杀】,则你回复1点体力、获得一点护甲、摸一张牌并选择一张锦囊牌加入你的手牌',
                        Jintsu_moulue: '谋略',
                        Jintsu_moulue_info: '锁定技,当你使用普通锦囊牌或延时锦囊牌时,你摸一张牌',
                        xuechi: '雪耻',
                        xuechi_info: '限定技,出牌阶段,你可以获得一点护甲值并摸两张牌,选择至多三名其他角色获得<掩护>标记,失去〖慎略〗,获得〖舍身〗、〖绝唱〗和〖诱敌〗,并获得〖薄葬〗直到你的回合开始',
                        Jintsu_youdi: '诱敌',
                        Jintsu_youdi_info: '锁定技,当你受到来自其他角色的伤害后,你令伤害来源获得X个<显现>标记并获得〖暴露〗,弃置X张牌(X为其<显现>标记数)',
                        Jintsu_sheshen: '舍身',
                        Jintsu_sheshen_info: '锁定技,当有<掩护>标记的角色受到伤害时,你将此伤害转移给你',
                        yanhu: '掩护',
                        yanhu_info: '',
                        juechang: '绝唱',
                        juechang_info: '受到伤害后,你可以视为使用一张火【杀】',
                        bozang: '薄葬',
                        bozang_info: '锁定技,当你进入濒死状态时,你将体力回复至1点',
                        Azumanuyan: '怒焰',
                        Azumanuyan_info: '锁定技,你造成的所有非属性伤害均视为火焰伤害;当你用杀指定一个目标后,你根据你与目标角色之间的距离执行相应的效果:1.小于2,此【杀】不可响应;2.等于2,你摸一张牌;3.大于2,此【杀】伤害+1',
                        minrui: '敏锐',
                        minrui_info: '锁定技,当你成为其他角色牌的目标时或造成火焰伤害后,你摸一张牌',
                        shixi: '试袭',
                        shixi_info: '隐匿技,你于其他角色回合登场时,你可以令其获得一枚<进水>标记并视为对其使用一张无距离限制的雷【杀】',
                        liesha: '猎杀',
                        liesha_info: '出牌阶段,若场上没有<猎杀>标记,你则可以选择一名其他角色,令其获得<猎杀>标记.当拥有<猎杀>标记的角色受到伤害后,若其没有〖重创〗,你则令其获得〖重创〗和两枚<重创>标记并移去其<猎杀>标记',
                        zhongchuang: '重创',
                        zhongchuang_info: '锁定技,当你回复体力时,取消之并移去一枚<重创>标记.当你<重创>标记归零后,你失去〖重创〗',
                        congrong: '从容',
                        congrong_info: '锁定技,你使用牌无次数限制.当你受到伤害时,你可以弃置一张牌,获得一枚<从容>标记并取消此伤害',
                        zhigu: '指顾',
                        zhigu_info: '出牌阶段,你可以移去一枚<从容>标记,选择一名角色,令其摸三张牌,弃置一张牌',
                        xinrui: '新锐',
                        xinrui_info: '锁定技,摸牌阶段你摸牌数+1,当你使用普通锦囊牌时,你可以额外指定一名角色为目标.你可以将【桃】当【酒】使用或打出',
                        xiance: '献策',
                        xiance_info: '出牌阶段,你可以将一张普通锦囊牌交给其他一名角色,你获得一张基本牌',
                        moufa: '谋伐',
                        moufa_info: '转换技,锁定技,阴:出牌阶段开始时, 你从【无懈可击】、【增兵减灶】、【随机应变】中随机获得两张,你获得技能〖运筹千里〗直到你下个出牌阶段开始.阳:出牌阶段开始时,你从【兵临城下】、【出其不意】、【万箭齐发】中随机获得两张,你获得技能〖克敌机先〗直到下个出牌阶段开始',
                        yunchouqianli: '运筹千里',
                        yunchouqianli_info: '当有角色受到伤害后,你可以令其从【无懈可击】、【金蝉脱壳】中随机获得一张,你从【诱敌深入】、【草船借箭】中随机获得一张',
                        kedijixian: '克敌机先',
                        kedijixian_info: '当其他角色准备阶段开始时,你可以对其使用一张【杀】,你从【火烧连营】、【水淹七军】中随机获得一张',
                        duochuan: '多舛',
                        duochuan_info: '锁定技,你的结束阶段开始时,你失去1点体力,你手牌上限为你的体力上限.当你死亡时,你选择一名其他角色获得〖天策〗',
                        tiance: '天策',
                        tiance_info: '出牌阶段限一次,你可以从【过河拆桥】、【顺手牵羊】、【乐不思蜀】、【兵粮寸断】中随机获得两张',
                        jiaoxiang: '交响',
                        jiaoxiang_info: '每轮限一次,当你受到伤害后,你可以视为使用一张无距离限制的【杀】.出牌阶段限一次,你可以选择一名与你距离小于2的其他角色,视为对其使用一张【杀】',
                        zouming: '奏鸣',
                        zouming_info: '转换技,锁定技,阴:当你使用杀时,此杀伤害+1且为火焰伤害.阳:当你使用杀时,此杀为雷电伤害且不可被响应',
                        kuangxiang: '狂想',
                        kuangxiang_info: '锁定技.当你体力大于4时,你用杀造成的伤害+1;当你的体力小于3时,摸牌阶段你摸牌数+1',
                        shuguang: '曙光',
                        shuguang_info: '出牌阶段限一次,你选择一名角色,你与其各获得一张【酒】,并令其获得〖鼓舞〗直到其回合结束.若你的<曙光>标记小于3,则你获得一枚<曙光>标记.当你获得第一个<曙光>标记后,你摸牌阶段额外摸一张牌,第二个后,你使用【酒】无次数限制,第三个后,你加1点体力上限并回复1点体力',
                        guwu: '鼓舞',
                        guwu_info: '锁定技,你额定摸牌数+1,使用【杀】的次数上限+1且用【杀】造成的伤害+1.当你受到第一次伤害后,你防止接下来的所有伤害',
                        guishen: '鬼神',
                        guishen_info: '当你使用杀指定目标后,你可以进行一次判定,若判定结果为♠️️,你令此杀不可响应,伤害+2且为雷电伤害',
                        yanwu: '演武',
                        yanwu_info: '锁定技,当你于回合外受到伤害后你的体力值为1,则你复原你的武将牌、摸三张牌、废除你的判定区并获得〖鬼神演武〗直到你的回合结束,且你于当前回合结束后执行一个额外的回合',
                        guishenyanwu: '鬼神演武',
                        guishenyanwu_info: '锁定技,你使用牌无次数限制且无距离限制,你跳过你的判定阶段和弃牌阶段,你造成的所有伤害均为雷电伤害,你回避所有伤害且不能被翻面和横置.你对体力值大于你的其他角色造成的伤害+1,且造成伤害后该角色体力值仍大于你,你回复1点体力.你的回合结束时,你回复所有被废除的装备栏和判定区',
                        jinren: '烬刃',
                        jinren_info: '准备阶段开始时,你可以失去1点体力,跳过判定和摸牌阶段并对至多三人各造成1点伤害和弃置其区域内一张牌',
                        Hiryu_zhanyi: '战忆',
                        Hiryu_zhanyi_info: '锁定技,你于你的回合外成为卡牌目标时,你记录此牌名.出牌阶段限一次,你可以从弃牌堆中获得至多X+1张〖战忆〗中记录的牌(X为你已损失的体力值)',
                        jueyi: '决意',
                        jueyi_info: '限定技,出牌阶段或你处于濒死状态时,你可以摸X张牌,将体力回复至上限并获得〖过载〗(X为你已损失的体力值)',
                        Hiryu_guozai: '过载',
                        Hiryu_guozai_info: '锁定技,你使用牌无次数和距离限制、始终跳过弃牌阶段且你造成的伤害+1.当你使用牌时,你摸两张牌,若你已受伤,你减1点体力上限,否则你失去1点体力.当你死亡时,你对与你距离不大于2的角色造成2点火焰伤害',
                        Javelin_tuxi: '突袭',
                        Javelin_tuxi_info: '当其他角色结束阶段开始时,你可以弃置一张牌,视为对其使用一张杀.若此杀造成伤害,你摸一张牌',
                        pini: '睥睨',
                        pini_info: '锁定技,当你成为牌的唯一目标时,你获得一枚<睥睨>标记.若你成为其他角色目标数不为1的牌的目标时,你可以取消之并对该角色造成1点雷电伤害.出牌阶段,你可以移去3枚<睥睨>标记,对其他所有角色造成1点雷电伤害',
                        Monarch_dili: '底力',
                        Monarch_dili_info: '限定技,当你处于濒死状态时,你可以将体力回复至3点,摸三张牌并获得〖爆发〗',
                        baofa: '爆发',
                        baofa_info: '锁定技,你出杀次数+X,摸牌阶段你摸牌数+X(X为你已损失的体力值);你手牌上限为你的体力上限;每轮游戏开始时,你回复1点体力',
                        jueze: '抉择',
                        jueze_info: '锁定技,摸牌阶段你额外摸X张牌,你手牌上限+X(X为你的抉择标记数).当你受到伤害值不小于体力值的伤害时,你可以减1点体力上限,获得一枚<抉择>标记并摸一张牌,防止此伤害',
                        Sakawa_lingji: '灵机',
                        Sakawa_lingji_info: '锁定技,你的【诱敌深入】和【出其不意】无法被无懈,每轮游戏开始时触发:1.若你的体力值小于2,你回复1点体力并摸两张牌;2.若你的体力不小于2,你获得一张【随机应变】,且本轮内你每打出牌时,你获得一张【诱敌深入】;3.若你已造成6点以上伤害,你获得一张【出其不意】,且本轮内你可以将【杀】当作【出其不意】使用',
                        Sakawa_Noshiro_xinfu: '欣赴',
                        Sakawa_Noshiro_xinfu_info: '锁定技,你手牌上限+X,你摸牌阶段摸牌数+X(X为你的<欣赴>标记数).当你受到伤害时,若你的<欣赴>小于3,则你可以弃置一张牌,获得一枚<欣赴>标记并取消此伤害',
                        Sakawa_Noshiro_yingji: '应机',
                        Sakawa_Noshiro_yingji_info: '锁定技,你的【诱敌深入】和【出其不意】无法被无懈,每当你打出牌时,你获得一张【诱敌深入】,出牌阶段开始时,你获得一张【随机应变】.出牌阶段,你可以移去一枚<欣赴>标记并获得一张【出其不意】,选择一名角色,令其摸三张牌并弃一张牌',
                        Sakawa_Noshiro_xinrui: '新锐',
                        Sakawa_Noshiro_xinrui_info: '锁定技,你使用牌无次数限制.当你使用普通锦囊牌时,你可以额外指定一名角色为目标.你可以将【桃】当【酒】使用或打出',
                        Jeanne_yinling: '引领',
                        Jeanne_yinling_info: '出牌阶段限一次,你可以回复1点体力并摸一张牌,选择至多三名其他角色,你令这些角色中第一名角色非锁定技失效直到回合结束,第二名角色回复1点体力并选择是否获得第一名角色区域内一张牌,且下个回合跳过弃牌阶段,第三名角色摸两张牌并选择是否视为对第一名角色使用一张杀,且下个回合开始时额外执行一个出牌阶段',
                        daogao: '祷告',
                        daogao_info: '锁定技,你的出牌阶段开始时,你移去所有<祷告>标记.出牌阶段限一次,你可以选择至多X名角色并获得X枚<祷告>标记(X为你的体力上限),接下来你与你所选择的角色获得如下效果直到你下个出牌阶段开始:当你所选择的角色受到伤害时,若你有<祷告>标记,则你可以移去一枚<祷告>标记防止此伤害,并与其各摸一张牌',
                        Jeanne_yuhuo: '浴火',
                        Jeanne_yuhuo_info: '锁定技,你受到的火焰伤害+1,当你受到火焰伤害后,你增加1点体力上限',
                        Royal_Fortune_jiexun: '诫训',
                        Royal_Fortune_jiexun_info: '锁定技,出牌阶段开始时,你可以选择一名其他角色并获得以下效果直到你下个出牌阶段开始:该角色不于其摸牌阶段获得牌后,若其手牌数大于X,则你可以获得其区域内Y张牌,若其手牌数仍大于X,则该角色将手牌弃至X张(X为其体力值且最小为1,Y为其手牌数与X之差),且你可以对其造成1点伤害',
                        Royal_Fortune_haihu: '海护',
                        Royal_Fortune_haihu_info: '锁定技,当你处于翻面状态时,你受到的伤害-1.当你受到伤害值大于体力值的伤害时,若你不处于翻面状态,则你可以将你的武将牌翻面,防止此伤害',
                        suibing: '碎冰',
                        suibing_info: '出牌阶段限一次,你选择至多三名其他角色,令其各获得一枚<寒冰>标记.当拥有<寒冰>标记的角色受到伤害后,你移去其全部的<寒冰>标记,你对其造成1点寒冰伤害并摸等量的牌',
                        bingwu: '冰舞',
                        bingwu_info: '锁定技,当你受到伤害时,你进行一次判定,若判定结果不为黑色,则你防止此伤害,如果判定结果为黑色,你可以打出一张【闪】防止此伤害.你成为其他角色卡牌的目标时,你可以进行一次判定,若判定结果不为黑色,则取消成为目标,如果判定结果为黑色,你可以打出一张【闪】以取消成为目标',
                        haihun: '海魂',
                        haihun_info: '锁定技,你的手牌上限为你的体力上限与你的<海魂>标记数之和,当你受到伤害时,你防止此伤害并获得一枚<海魂>标记,你的结束阶段开始时,你移去所有<海魂>标记并失去X点体力(X为移去的<海魂>标记数)',
                        kuiming: '窥命',
                        kuiming_info: '准备阶段开始时,你可以观看牌堆顶3张牌,并将其以原顺序置于牌堆顶',
                        Fortune_mingfu: '命缚',
                        Fortune_mingfu_info: '锁定技,摸牌阶段开始时,你亮出牌堆顶的一张牌并获得之,摸牌阶段改为你从牌堆/弃牌堆中摸两张与亮出牌类型不同的牌,接下来你的回合内与亮出牌类型不同的牌不计入你的手牌上限且你不能使用或打出与亮出牌类型相同的牌,并在使用或打出与亮出牌类型不同的牌时,你从牌堆/弃牌堆中摸一张与此类型相同的牌',
                        huiji: '回击',
                        huiji_info: '锁定技,你记录其他角色对你使用的非装备牌.出牌阶段,你可以删除全部记录,依次对记录来源角色使用其对你使用的牌,若有牌无法使用,则你获得此牌',
                        pogu: '破锢',
                        pogu_info: '觉醒技,你的回合开始时,若你的体力值为1或为全场唯一最低,则你减少1点体力上限,失去〖窥命〗、〖命缚〗,获得〖启命〗、〖掌命〗',
                        qiming: '启命',
                        qiming_info: '锁定技,摸牌阶段开始时,你亮出牌堆顶的一张牌并获得之,接下来你根据亮出牌的类型获得以下效果直到你重新发动〖启命〗:1.基本牌,你的基本牌无次数限制且不计入手牌上限,你可以将一张非基本牌当作任意一张基本牌使用(每种牌名限一次);2.锦囊牌,你的锦囊牌无距离限制且不计入手牌上限,你可以一张非锦囊牌当作任意一张锦囊牌使用(每种牌名限一次);3.其他类型,你跳过弃牌阶段,当你使用或打出牌时,你摸一张牌',
                        Fortune_zhangming: '掌命',
                        Fortune_zhangming_info: '准备阶段开始时,你可以观看牌堆顶5张牌,并将其以任意顺序置于牌堆顶',
                        gushou: '孤守',
                        gushou_info: '锁定技,出牌阶段你不能对其他角色使用牌,你额定摸牌数+1.出牌阶段,你可以选择将任意张手牌作为<守>置于你的武将牌上或从武将牌上获得任意张<守>.当有其他角色对你使用卡牌后,你可以选择一项:1.将一张<守>当作任意一张基本牌或锦囊牌对其使用,你获得一张基本牌;2.弃置你与其区域内各一张牌;3.取消其下一次摸牌,若其此时未受伤,则受到来自你的1点伤害',
                        qianzhi: '牵制',
                        qianzhi_info: '锁定技,当你武将牌上有<守>时,你攻击范围内的角色使用锦囊牌和【杀】时只能以你为目标',
                        Wahrheit: '真理',
                        Wahrheit_info: '锁定技,拥有<真理>标记的角色无法响应你的牌;出牌阶段限一次,你可以选择一名未有<真理>的其他角色,根据情况执行相应效果:位于你的攻击范围内,你获得其区域内一张牌,令其获得<真理>标记;不位于你的攻击范围内,你与其各摸一张牌,进行一次拼点;若你赢,你摸三张牌并令其获得<真理>标记',
                        fuxing: '复兴',
                        fuxing_info: '转换技,锁定技,阴:你的摸牌阶段额定摸牌数+1,你的出牌阶段开始时,你依次获得拥有<真理>标记的角色区域内一张牌.阳:你使用杀的次数+1,你的出牌阶段开始时,你从牌堆和弃牌堆中获得X张伤害类牌(X为场上拥有<真理>标记的角色数且至少为1)',
                        bsm_buqu: '不屈',
                        bsm_buqu_info: '当你受到拥有<真理>标记的角色的伤害后,你可以移去该角色的<真理>标记,获得该角色区域内一张牌',
                        tx_yizhi: '意志',
                        tx_yizhi_info: '主公技,你攻击范围和攻击距离+X(X为场上铁血势力角色数)',
                        Unicorn_yingyuan: '应援',
                        Unicorn_yingyuan_info: '出牌阶段限X次,你可以将一张手牌交给一名其他角色,你与其各回复1点体力,若该你未受伤你则获得一点护甲;若你以此法给出的是伤害类牌,则你令该角色对一名其他角色造成一点伤害(X为你的体力值)',
                        Unicorn_zhiyuan: '支援',
                        Unicorn_zhiyuan_info: '锁定技,你的回合开始时,你选择一名其他角色并获得以下效果直到你重新发动〖支援〗:当该角色获得你的手牌时,你记录这些牌的花色;当该角色的牌不因弃置而进入弃牌堆时,你获得其中花色与〖支援〗记录中相同的牌',
                        junheng: '均衡',
                        junheng_info: '锁定技,你造成的伤害值、受到的伤害值和回复体力值均为1',
                        chenzhuo: '沉着',
                        chenzhuo_info: '锁定技,当你成为体力上限大于你的体力值的其他角色的伤害类牌目标时,你摸一张牌;当你进入濒死状态时,你观看牌堆中每种花色的牌各一张并选择获得的牌,弃置剩下的牌并从牌堆中获得与弃置的牌花色相同的牌各一张.你可以将【酒】当作【桃】使用',
                        nixi: '逆袭',
                        nixi_info: '当你令一名其他角色进入濒死状态时,若其体力上限大于你的体力值,你可以令其立即死亡',
                        fenglie: '锋裂',
                        fenglie_info: '锁定技,当你对其他角色造成伤害后,你令其获得一枚<锋裂>标记.拥有<锋裂>标记的角色手牌上限-1,且你可以在相应的时机对其发动相应的效果:1.你的出牌阶段内,你可以移去该角色一枚<锋裂>标记,令其本回合内非锁定技和防具失效;2.该角色受到伤害时,你可以移去其一枚<锋裂>标记令此次伤害+1;3.该角色进入濒死状态时,若其体力值小于0,你可以移去其一枚<锋裂>标记令其立即死亡',
                        kuishi: '窥实',
                        kuishi_info: '出牌阶段限一次,你可以摸一张牌,将一张牌交给一名其他角色并观看其手牌,若该角色手牌中有:1.基本牌:你摸两张牌;2.锦囊牌:你可以至多移动场上两张牌;3.装备牌:你可以视为对一名其他角色使用一张不计入次数的【杀】',
                        xuri: '旭日',
                        xuri_info: '出牌阶段限一次,你可以选择一名其他角色,令其和与其距离为1的其他角色获得〖朝晖〗直到他们的回合结束后',
                        zhaohui: '朝晖',
                        zhaohui_info: '锁定技,你的回合开始/结束时,你进行一次判定,若判定结果为红色,你受到1点火焰伤害;你的【杀】可以通过打出一张黑色牌而取消',
                        rongyao: '荣耀',
                        rongyao_info: '锁定技,与你距离最近的角色成为你卡牌的目标时,除非该角色交给你一张牌,否则其不可响应此牌;当你使用【杀】对其他角色造成伤害时,若你与受到该伤害角色的距离小于等于1,此伤害+1,小于等于2,你摸一张牌;',
                        shanzhan: '善战',
                        shanzhan_info: '锁定技,当你造成伤害后,你摸X张牌(X为此次伤害值).摸牌阶段,你可以放弃摸牌并改为从牌堆中摸取牌名各不同的等量伤害类牌.你可以将一张伤害类普通锦囊牌当作任意一张伤害类普通锦囊牌使用',
                        Essex_zhenlie: '阵列',
                        Essex_zhenlie_info: '锁定技,准备阶段开始时,你将牌堆顶的X张牌置于你的武将牌上,称为<阵列>(X为你的体力上限).当你使用伤害类牌时,你可以移去一张<阵列>并从牌堆中获得一张非伤害类锦囊牌,若此次移去的<阵列>颜色为黑色,则此牌不可被响应,否则此牌伤害+1.结束阶段,你获得全部的<阵列>',
                        tianxi: '天袭',
                        tianxi_info: '锁定技,游戏开始时,你选择一名其他角色,令其获得<天袭>标记.拥有<天袭>标记的角色受到的伤害+1,死亡时视为你所击杀且其阵亡后你回复1点体力,将<天袭>标记移给另一名其他角色',
                        aoxiang: '翱翔',
                        aoxiang_info: '每回合限一次,当你不因〖翱翔〗使用伤害类牌时,你可以令任意名其他角色摸一张牌并可以使用一张伤害类牌;当其他角色不因〖翱翔〗使用伤害类牌时,你可以摸一张牌,可以使用一张伤害类牌',
                        pomen: '破门',
                        pomen_info: '出牌阶段限一次,你可以选择一名其他角色,其选择:1.弃置所有装备牌;2.你观看其手牌并让你弃置其中不同花色的牌各一张;3.受到来自你的1点伤害并让你摸两张牌',
                        liuhuo: '流火',
                        liuhuo_info: '锁定技,你受到的火焰伤害+1,当你对其他角色造成火焰伤害后,你令受到该火焰伤害的角色获得〖殒火〗和两枚<陨火>标记.你可以将一张【杀】当作【火攻】使用',
                        Ticonderoga_yunhuo: '陨火',
                        Ticonderoga_yunhuo_info: '锁定技,当你受到火焰伤害后或你的回合开始时,若你有<陨火>标记,则你进行一次判定,若判定结果为红色,你将一半的(向上取整)<陨火>标记转化为<着火>标记并获得〖着火〗,否则你获得一枚<陨火>标记',
                        zhuangjia: '装甲',
                        zhuangjia_info: '锁定技,当你受到其他角色的伤害后,你获得等量的<装甲>标记.出牌阶段,你可以选择一项:1.回复X/2(向上取整)点体力;2.摸X张牌;3.获得X/2(向上取整)点护甲(X为你<装甲>标记数),你移去所有<装甲>标记',
                        shenpan: '审判',
                        shenpan_info: '当你使用【杀】前,你可以进行一次判定,若判定结果为:♦️️:此【杀】为火【杀】;♥️️:你回复1点体力;♠️️:此【杀】为雷【杀】;♣️️:此【杀】无视防具;若本回合你未因此获得过<意志>,则你获得一层对应的<意志>:♦️️:炮击;♥️️:装填;♠️️:雷击;♣️️:命中',
                        buqu_buqu: '不屈',
                        buqu_buqu_info: '锁定技,当你进入濒死状态时,你随机获得一层<意志>:炮击:你造成的火焰伤害+X;雷击:你造成的雷电伤害+X;命中:你使用的【杀】需要额外依次使用X张【闪】响应;装填:摸牌阶段你额外摸X张牌(X为对应<意志>层数).若此次你未因〖不屈〗而获得重复的<意志>,你将体力回复至1点',
                        huzhu: '互助',
                        huzhu_info: '出牌阶段每名角色限一次,你可以将一张牌交给一名其他角色,该角色交给你一张牌;若你与该角色相互给出的牌类型相同,你与其各摸一张牌,否则你摸两张牌并且不能发动〖互助〗直到此回合结束',
                        shengwei: '生威',
                        shengwei_info: '锁定技,当你使用牌时,若你上一张使用牌的点数小于此牌点数,则你令此牌额外结算一次,如果其为基本牌,则你摸一张牌,为锦囊牌,则此牌不可被无懈可击响应,若不为上述类型则你获得一点护甲',
                        tiangui: '天轨',
                        tiangui_info: '出牌阶段,你可以将一张牌作为<穿甲超重弹>置于一名武将牌上未有<穿甲超重弹>的其他角色的武将牌上,若此牌为【杀】则你摸一张牌.锁定技,当一名角色的准备阶段开始时,若其武将牌上有<穿甲超重弹>,则你将此<穿甲超重弹>当作一张无视防具的【杀】对其使用',
                        AP: '穿甲超重弹',
                        suijia: '碎甲',
                        suijia_info: '锁定技,当你对其他角色造成伤害后,该角色获得〖破甲〗;当你用【杀】对其他角色造成伤害随机废除该角色一个未废除的装备栏,若全部装备栏已废除,则减少1点体力上限,若该角色有护甲,则此【杀】伤害+1',
                        fenjin: '奋进',
                        fenjin_info: '锁定技,当你使用牌时,你令你之后使用牌的伤害值或回复值+1;若此时增加的值已经大于2,你将其清零并摸一张牌',
                        juenian: '绝念',
                        juenian_info: "锁定技,你不能对与你距离大于1的角色使用【桃】;若有角色被其他角色击杀且你于其濒死时因无法对其使用【桃】而没有对其使用过【桃】,则你选择一项:1.失去1点体力并对击杀该角色的角色造成两点伤害;2.回复1点体力并获得该角色所有手牌<br><span style='font-family: yuanli'><孤鹤忽奋飞,轻触樱枝花如雪,携吾魂俱归……></span>",
                        wuwei: '无畏',
                        wuwei_info: '转换技.①出牌阶段限一次,若你发动此分支的累计次数为奇数/偶数,则你可以回复1点体力/失去1点体力,摸X张牌(X为你的已损失体力值),并获得一个<☯>;②若你的<☯>数为偶数,你受到来自手牌数大于你的其他角色的伤害-1,你不能成为体力值大于你的其他角色牌的目标;③若你的<☯>数为奇数,你对手牌数大于你的其他角色造成的伤害+1,体力值大于你的其他角色无法响应你的牌',
                        yingyong: '英勇',
                        yingyong_info: '锁定技,当你的体力不大于2时,你防止你受到的火焰伤害且使用基本牌无次数限制;当你的体力值大于2时,你受到的雷电伤害-1且使用锦囊牌无距离限制.你的回合结束时,若你于该回合的出牌阶段没有造成过伤害,则你可以发动一次〖无畏〗',
                        budon: '不冻',
                        budon_info: "锁定技,你无法受到或造成寒冰伤害<br><span style='font-family: yuanli'>&emsp;<没有灯火,你一定会冷.>鲸群聚在灯塔之下.——<看啊,我们带来了北大西洋的暖流.></span>",
                        xiongyan: '雄炎',
                        xiongyan_info: '锁定技,每当你受到1点伤害后,你摸三张牌(若此时没有手牌则摸五张),将一张牌交给其他角色;若你以此法给出的牌类型为:1.基本牌:你对一名角色造成1点火焰伤害;2.锦囊牌:你将一名角色区域内一张牌置于牌堆顶;3.不为上述类型:执行上述所有效果',
                        Murmansk_yingzi: '英姿',
                        Murmansk_yingzi_info: '锁定技,摸牌阶段结束时你摸一张牌;你可以将此牌交给一名其他角色,若如此做,你视为使用一张无距离限制的基本牌',
                        jiahu: '加护',
                        jiahu_info: '你的回合开始时,你可以选择至多X名未拥有<加护>标记角色,令其获得一枚<加护>标记(X为你的体力值);拥有<加护>标记的角色在受到/造成伤害时,可以移去一枚<加护>标记令此伤害-1/+1',
                        g_jiahu1: '加护',
                        g_jiahu1_info: '移去一枚<加护>标记,令此伤害-1',
                        g_jiahu2: '加护',
                        g_jiahu2_info: '移去一枚<加护>标记,令此伤害+1',
                        S_yaoji: '邀击',
                        S_yaoji_info: '锁定技,每轮游戏开始时你选择一名其他角色;直到你重新发动〖邀击〗前,你只能成为X次该角色牌的目标(X为你的体力与你使用牌指定其为目标的次数的和与该角色体力的差,最小为0)',
                        shubo: '殊搏',
                        shubo_info: '锁定技,当你进入濒死状态时,你展示牌堆顶一张牌,若你手牌中与该牌颜色相同的牌数量大于其他颜色的牌,那你将这些牌全部弃置并摸等量的牌,回复一点体力;此时你的体力值仍小于1,则你重复上述步骤',
                        xiangjie: '相接',
                        xiangjie_info: '锁定技,当你受到伤害后,你获得等量的<逢敌>标记;你与其他角色的距离-X(X为你的<逢敌>标记数).出牌阶段,你可以受到1点无来源伤害或弃置一枚<逢敌>标记,摸一张牌,将一张牌当作一张伤害类牌或智囊对与你距离不大于1或对你造成过伤害的角色使用',
                        tonggui: '同归',
                        tonggui_info: '锁定技,限定技,当你因其他角色而进入濒死状态时,你可以弃置所有牌,对该角色造成X+1点伤害(X为你体力上限与你体力值之差)',
                        boqiang: '拨枪',
                        boqiang_info: '锁定技,当你使用牌指定其他角色或成为其他角色牌的目标时,该角色获得一枚<烬火枪印>.出牌阶段,你可以移去一名角色的3枚<烬火枪印>,视为对其使用一张无视防具的火【杀】',
                        yaozhuo: '耀灼',
                        yaozhuo_info: '锁定技,当你造成火焰伤害后,你摸X张牌(X为伤害值).当有有角色受到伤害时,你可以移去其3枚<烬火枪印>,令此次伤害来源为你,伤害值翻倍并为火焰伤害',
                        qianjin: '前进',
                        qianjin_info: '准备阶段开始时,你可以观看牌堆顶X+3张牌,你选择一项:1.受到1点伤害获得这些牌,将一张牌置于牌堆顶;2.回复1点体力,将这些牌以原顺序置于牌堆顶.你以此技能获得的牌不计入手牌上限(X为你已损失的体力值)',
                        Kxie: '希厄',
                        Kxie_info: '锁定技,每当你造成/受到伤害时,你获得等量<希望>/<厄运>标记.当你成为其他角色普通锦囊牌或基本牌的目标时,你可以移去两枚<希望>标记取消成为目标,或移去两枚<厄运>标记令一名其他角色也成为目标;当你受到伤害时,你可以移去两枚<希望>标记令此次伤害-1,或移去两枚<厄运>标记对一名其他角色造成一点火焰伤害.出牌阶段,你可以将两枚<希望>/<厄运>标记转化为一枚<厄运>/<希望>标记',
                        houqin: '后勤',
                        houqin_info: '出牌阶段限一次,你可以选择至多两名其他角色,系统将依次从牌堆和弃牌堆中检索一张装备牌置入这些角色的装备区,且这些角色获得〖后勤保障〗直到其回合结束',
                        houqinbaozhang: '后勤保障',
                        houqinbaozhang_info: '锁定技,摸牌阶段你摸牌数+1.你可以将一张装备牌当作【杀】使用或打出,若如此做,你从牌堆或弃牌堆中获得一张你所没有的牌并可以将一张弃牌堆中的牌置于牌堆顶',
                        wangpai: '王牌',
                        wangpai_info: '隐匿技,锁定技,当你于其他角色回合登场时,你在该回合结束后进行一个额外的回合',
                        U_nixi: '匿袭',
                        U_nixi_info: '其他角色准备阶段开始时,你可以将一张【杀】当作无视防具的刺【杀】对其使用;若此刺【杀】造成了伤害,该角色流失1点体力,你摸一张牌',
                        U96_qianfu: '潜伏',
                        U96_qianfu_info: '结束阶段,你可以将武将牌翻面,从牌堆中获得X张【杀】(X为你的体力值)',
                        cuixiu: '摧朽',
                        cuixiu_info: '限定技,当你使用【杀】造成伤害时,你可以令此伤害改为受到此伤害的角色在其回合开始时随机弃置两张牌并失去数值等同于其体力上限的体力',
                        hainu: '海怒',
                        hainu_info: '出牌阶段限一次,你可以从中选择一项执行:1.视为使用一张不计入次数且无次数限制的【杀】;2.受到1点伤害对一名其他角色造成1点伤害;3.弃置一张牌回复一点体力',
                        shenyang: '深洋',
                        shenyang_info: '锁定技,每轮游戏开始时,你重置你所获得的<深海之力>并随机获得一条未获得的<深海之力>;当你受到伤害后,你随机获得一条你未获得的<深海之力>,若此时所有<深海之力>已全部获得,你摸一张牌',
                        tunshizhixuan: '吞噬之漩',
                        tunshizhixuan_info: '当你获得此技能时,你回复一点体力.当你对未受〖吞噬之漩〗影响的其他角色造成伤害时,你可以进行一次判定,若判定结果不为红色,你令其下个回合开始时随机跳过两个阶段',
                        yingzhaozhiyuan: '映照之渊',
                        yingzhaozhiyuan_info: '当你获得此技能时,你摸两张牌.当你失去牌后,若你还有手牌,则你可以展示一名其他角色的手牌,与之交换',
                        shiniezhie: '噬啮之颚',
                        shiniezhie_info: '当你获得此技能时,你获得一点护甲.锁定技,当你使用【杀】对一名距离大于1的其他角色造成伤害后,该角色失去所有护甲并获得〖破甲〗',
                        pojia: '破甲',
                        pojia_info: '锁定技,你受到来自【杀】的伤害+1且防具失效;当你回复体力时,取消之并失去〖破甲〗',
                        yazhi: '压制',
                        yazhi_info: '出牌阶段限一次,你可以选择一名对你造成过伤害的其他角色,或失去一点体力选择一名其他角色,将手牌中所有伤害类牌依次当作无距离限制的【杀】对其使用;若之后该角色仍存活,你摸X张牌(X为该角色体力值)',
                        jizhong: '集中',
                        jizhong_info: '锁定技,每轮游戏开始时,你选择一名其他角色,该角色将无法响应你所使用目标包括该角色的牌直到你重新发动〖集中〗',
                        zhongxi: '重袭',
                        zhongxi_info: '隐匿技,锁定技,当你于其他角色回合登场时,你对该角色造成的伤害+1',
                        dulang: '独狼',
                        dulang_info: '锁定技,你使用【杀】的次数+1,手牌上限+2;当你连续对同一名角色造成伤害时,此伤害+1',
                        shenshe: '神射',
                        shenshe_info: '锁定技,每轮游戏开始时,与你距离最远的角色获得<神射手>标记,你可以令一名其他角色获得<神射手>标记;当你使用【杀】对与你距离最远的角色或拥有<神射手>标记的角色造成伤害时,你重置〖传奇〗并且该角色获得〖瘫痪〗直到其回合结束,如果该角色体力值大于1,此伤害+1.你的回合开始时,你可以视为对一名拥有<神射手>标记的角色使用一张无距离限制的【杀】',
                        chuanqi: '传奇',
                        chuanqi_info: '限定技,锁定技,当你进入濒死状态时,你减少一点体力上限,将体力回复至体力上限并将手牌摸至5张,于当前回合结束后执行一个额外的回合',
                        sishen: '死神',
                        sishen_info: '锁定技,游戏开始时,你从牌堆中检索4张牌置于你的武将牌上,称为<死神中队>;你的回合开始时,你将你的<死神中队>补充至4.当你使用了与<死神中队>中花色相同的牌时,你可以弃置<死神中队>中一张与其花色相同的牌,对一名其他角色造成1点伤害',
                        Yorktown_fuchou: '复仇',
                        Yorktown_fuchou_info: '锁定技,你记录场上其他角色对你造成过的伤害数值.当你对一名其他角色造成伤害时,你可以交给其一张牌令此伤害+X(X为〖复仇〗中记录的该角色数值),清空〖复仇〗中该角色的记录',
                        daji: '打击',
                        daji_info: '每回合限一次,当你受到伤害后,你可以将手牌摸至体力上限;如果有伤害来源,则你可以将任意一张牌当作【杀】对其使用',
                        tuofu: '托付',
                        tuofu_info: '锁定技,当你死亡时,你选择一名其他角色,该角色获得〖死神〗并对击杀你的角色造成的伤害+1<br><span style="font-family: yuanli">&emsp;展翅高飞吧,企业</span>',
                        tuofudamage: '托付',
                        enshang: '恩赏',
                        enshang_info: '锁定技,当你获得其他角色的手牌时,你令该角色下次摸牌阶段摸牌数+X(X为此次你获得的牌数),若此角色为皇家阵营,则再多摸一张牌;若该角色在上一轮内对你造成过伤害,你可以对该角色造成1点伤害',
                        Queen_shiwei: '施威',
                        Queen_shiwei_info: '每名角色每回合限一次,当一名角色对其他角色造成伤害时,该角色可以请求交给你一张牌令此伤害+1.出牌阶段限一次,你可以获得至多X名其他角色区域内一张牌(X为全场势力数)',
                        haoling: '号令',
                        haoling_info: '主公技,你的手牌上限+X(X为场上皇家角色数量);出牌阶段限一次,你可以令所有皇家阵营的其他角色摸两张牌,交给你一张牌',
                        wenmo: '文墨',
                        wenmo_backup: '文墨',
                        wenmo_info: '转换技,出牌阶段限X+1次(X为你已损失体力值),阴:你可以将一张牌当作非伤害类锦囊牌使用.阳:你可以将一张牌当作伤害类牌使用',
                        jingtao: '惊涛',
                        jingtao_info: '转换技,锁定技,阴:当你累计使用两次牌后,你对一名其他角色造成1点伤害(不触发〖惊涛〗).阳:当你造成/受到伤害后,你摸两张牌',
                        Regolo_jueyong: '爵拥',
                        Regolo_jueyong_info: '锁定技,当你于你的回合外失去手牌后,你弃置一名其他角色区域内一张牌;若你以此法弃置的牌中有与你失去的牌类型相同的牌,你摸一张牌,否则你可以视为对当前回合角色使用一张无视防具的【杀】,不可发动〖爵拥〗直到此回合结束',
                        xianzi: '仙祝',
                        xianzi_info: '锁定技,转换技,阴:当你对其他角色造成伤害时,你摸一张牌,并令一名角色从牌堆中获得两张花色各不相同的牌.阳:当你受到其他角色的伤害时,你弃置一张牌,并令一名其他角色弃置两张与此牌花色相同的牌',
                        Gascogne_yizhi: '抑情',
                        Gascogne_yizhi_info: '锁定技,当你受到/造成伤害后,你弃置一张牌摸一张牌;每回合限一次,当你体力变化后,若你的体力值小于体力上限的一半(向上取整),你回复1点体力',
                        jingmi: '精密',
                        jingmi_info: '锁定技,当你使用牌指定目标后,若此牌目标数为1,则你根据此牌类型执行相应效果:1.为基本牌,此牌伤害值/回复值+1;2.为锦囊牌,此牌不可被响应;3.为其他类型,你从牌堆中获得一张与其类型不同的牌',
                        caozuo: '操作',
                        caozuo_info: '每回合每种牌名限一次,当你使用基本牌或锦囊牌时,若该牌目标数大于1,则你可以将其目标改为原目标中的一名角色;若该牌目标数为1,则你可以额外指定一名角色为目标;你摸X张牌(X为此牌目标数)',
                        yingfu: '音符',
                        yingfu_info: '转换技,当你使用【杀】造成伤害时,阴:你可以将该伤害改为雷电伤害并弃置受到该伤害的其他角色区域内X张牌.阳:你可以将该伤害改为火焰伤害并获得受到该伤害的其他角色区域内X张牌(X为此次伤害值)',
                        xingsheng: '心声',
                        xingsheng_info: '每回合每种牌名限一次,当你使用牌指定角色为目标时,你可令你与目标中体力值/手牌数较少的一方回复1点体力/摸一张牌,若其为全场体力值/手牌数最小,则再回复1点体力/摸一张牌',
                        Cœur_Battant: '动心',
                        Cœur_Battant_info: '锁定技,每回合每种牌名限一次,当你使用牌时,若此时你〖心声〗发动次数为:奇数,此牌伤害值/回复值+1.偶数:此牌不可响应',
                        shanyao: '闪耀',
                        shanyao_info: '锁定技,当你对体力大于你的角色造成伤害时,此伤害+1.每轮限一次,当有角色受到伤害时,你可以防止之,你摸X张牌并将一张牌作为<影踪>置于武将牌上(X为此次伤害值)',
                        mizong: '觅踪',
                        mizong_info: '当有角色造成伤害或使用你不可响应的牌时,你可以摸一张牌,将一张牌置于你的武将牌上,称为<影踪>;若此时该角色手牌数大于你,你可以弃置其区域内一张牌',
                        mingsang: '鸣丧',
                        mingsang_info: '其他角色回合开始时,你可以将你的<影踪>按以下规则依次使用(你获得其中无法使用的<影踪>),直至该角色死亡,你获得剩余的<影踪>:1.<影踪>为基本牌,你将其当做【杀】对该角色使用;2.<影踪>为锦囊牌,你将其当作【出其不意】对该角色使用;3.其他,你将其当作【酒】使用',
                        μ_zhiji: '直击',
                        μ_zhiji_info: '锁定技,你记录你使用牌的次数;当你使用【杀】时,若〖直击〗记录的数值达到过3,则此【杀】不可响应且不计入次数,你将手牌摸至X张并将〖直击〗记录的数值清零(X为此时〖直击〗记录的数值)',
                        NewJersey_tuxi: '吐息',
                        NewJersey_tuxi_info: '锁定技,每回合每种牌名限一次,当你使用伤害类牌时,你令此牌额外结算一次;当你于回合内首次造成伤害时,此伤害+1',
                        rongyu: '荣誉',
                        rongyu_info: '每轮限一次,当其他角色出牌阶段开始时,你可以交给该角色一张牌并与其各摸一张牌或令其摸两张牌,此回合内该角色手牌上限+1,使用【杀】的次数上限+1;此回合结束时,若该角色于此回合内造成过伤害,你获得一个额外的回合,否则你重置〖荣誉〗并从牌堆中获得一张伤害类牌',
                        bubi: '不避',
                        bubi_info: '每回合限一次,当你受到伤害后,你可以使用一张伤害类牌或从牌堆中获得一张伤害类牌',
                        weizhuang: '伪装',
                        weizhuang_info: '你的回合开始/结束时或你受到伤害后,你可以随机观看5位不为meta的舰船并变更为其中之一,获得其全部技能.当你发动〖伪装〗而变更角色时,你失去以此法获得的全部技能',
                        shenmou: '慎谋',
                        shenmou_info: '锁定技,你的普通锦囊牌无法被无懈且不计入手牌上限;每回合当你使用第X张牌时,你从牌堆中获得一张普通锦囊牌并摸X张牌(X为你的体力值且至少为1).你可将一张普通锦囊牌当作任意一张普通锦囊牌使用',
                        zhanhua: '绽华',
                        zhanhua_info: '限定技,出牌阶段,你可以选择任意名其他角色,再选择任意名剩余的其他角色,获得〖薄葬〗直至你的回合开始并获得以下效果:当你存活时,你选择的第一批角色使用【杀】的次数上限+1且对你选择的第二批角色造成的伤害+1,受到伤害时此伤害转移给你;否则你选择的第一批角色手牌上限+1,摸牌阶段摸牌数+1',
                        ChenHai_buqi: '布棋',
                        ChenHai_buqi_info: '出牌阶段限一次,你可以摸三张牌,将多于手牌上限的牌置于武将牌上,称为<棋>.你的手牌上限+X(X为你的<棋>的数量)',
                        ChenHai_xingluo: '星罗',
                        ChenHai_xingluo_info: '一名角色的准备阶段开始时/出牌阶段限一次/结束阶段,你可以移去一张<棋>,观看牌堆顶三张牌并以任意顺序置于牌堆顶或牌堆底/用牌堆底X张牌替换一名角色的全部手牌(X为你的<棋>的数量且至少为1)/令一名角色从牌堆中获得一张普通锦囊牌',
                        zaji: '诈计',
                        zaji_backup: '诈计',
                        zaji_info: '每回合限一次,你可以将一张基本牌/普通锦囊牌当作任意一张普通锦囊牌/基本牌使用.当你使用转化牌时,若此转化牌颜色:1.不为红色,你可以移动场上至多两张牌;2.不为黑色,你可以对一名其他角色造成1点伤害',
                        Guichen_yujian: '预见',
                        Guichen_yujian_info: '展示拍',
                        mingyun: '命运',
                        mingyun_info: '锁定技,当你成为卡牌的目标后,你展示牌堆顶的三张牌,若其中有与此牌类型相同的牌,则你不可响应此牌并获得展示的牌中与此牌类型相同的牌',
                        tongmeng: '同盟',
                        tongmeng_info: '出牌阶段限一次,你可以选择任意名其他角色,你与他们各摸一张牌并获得以下效果直至你重新发动〖同盟〗:当其中一名角色不因〖同盟〗成为基本牌或锦囊牌目标时,你可以成为此牌的目标',
                        fengzhan: '风斩',
                        fengzhan_info: '锁定技,当你不因〖风斩〗造成伤害值大于1点的伤害时,你将该伤害改为对受到该伤害的角色造成X次属性相同的1点伤害(X为此次伤害值)',
                        yilei: '雷逸',
                        yilei_info: '锁定技,当你对一名其他角色造成伤害后,本回合内该角色受到来自你的伤害+1,若此伤害为雷电伤害,则你摸等量的牌',
                        xunlei: '迅雷',
                        xunlei_info: '每回合限一次,当你使用黑色牌时,你可以对一名其他角色造成2点雷电伤害.若此时不为你的回合,则你在该回合结束后进行一个额外的回合',
                        duangbing: '短兵',
                        duangbing_info: '锁定技,你使用【杀】无次数限制且你不进入濒死结算,你计算与其他角色的距离-X(X为你已损失体力值);当你的回合结束时,若场上有角色死亡,则你死亡',
                        jianmie: '歼灭',
                        jianmie_info: '每回合限一次,你可以受到1点伤害,从牌堆中获得X张【杀】(X为你体力上限与你体力值之差)',
                        Laffey_zhanshen: '战神',
                        Laffey_zhanshen_info: '每回合限一次,你可以选择一名与你距离为1的其他角色,从你开始,双方轮流将手牌当作【杀】对对方使用直至一方没有手牌或无法对另一方使用【杀】和另一方死亡',
                        jinku: '金库',
                        jinku_info: '锁定技,你的弃牌阶段开始时,你将全部的手牌置于武将牌上,称为<金>.你可以如手牌般使用或打出<金>.当你死亡时,你将所有<金>移出游戏',
                        xijie: '袭劫',
                        xijie_info: '出牌阶段,你可以弃置一张<金>,令一名其他角色将小于该<金>点数的全部手牌交给另一名角色;如果你未选择将牌交给自己,则你摸一张牌',
                        anmian: '安眠',
                        anmian_info: '锁定技,当你没有手牌时,你造成和受到的伤害-1',
                        chuji: '出击',
                        chuji_info: '锁定技,当你翻回正面时,你摸等同于体力上限的牌并于当前回合结束后进行一个额外的回合',
                        pingrui: '屏锐',
                        pingrui_info: '出牌阶段开始时,你可以将任意张手牌置于武将牌上,称为<锐>,你将武将牌翻面.你使用【杀】的次数+X(X为你的<锐>的数量)',
                        xianshou: '先手',
                        xianshou_info: '每轮限一次,其他角色回合开始时,你可以将任意张<锐>依次当作无视防具的【杀】对其使用,你将武将牌翻面',
                    },
                    skill: {
                        DD: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && (player.azureShipType('DD') || player.azureShipType('all'))) return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && (player.azureShipType('DD') || player.azureShipType('all'))) return (num += 1);
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            firstDo: true,
                            filter: (event, player) => event.card.name == 'youdishenru' && (player.azureShipType('DD') || player.azureShipType('all')),
                            content() {
                                trigger.nowuxie = true;
                                player.draw();
                            },
                            group: ['DD_use', 'DD_end'],
                            subSkill: {
                                use: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    global: 'g_youdishenru',
                                    filterCard: {
                                        name: 'shan',
                                    },
                                    viewAs: {
                                        name: 'youdishenru',
                                    },
                                    viewAsFilter: (player) => player.countCards('hs', 'shan') > 0 && (player.azureShipType('DD') || player.azureShipType('all')),
                                    hiddenCard(player, name) {
                                        if (name == 'youdishenru') return player.countCards('hs', { name: 'shan' }) > 0 && (player.azureShipType('DD') || player.azureShipType('all'));
                                    },
                                    ai: {
                                        value: [5, 1],
                                        useful: [5, 1],
                                        order: 1,
                                        wuxie(target, card, player, current, state) {
                                            return -state * get.attitude(player, current);
                                        },
                                        result: {
                                            player(player) {
                                                if (_status.event.parent.youdiinfo && get.attitude(player, _status.event.parent.youdiinfo.source) <= 0) {
                                                    return 1;
                                                }
                                                return 0;
                                            },
                                        },
                                    },
                                },
                                end: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter: (event, player) => player.azureShipType('DD') || player.azureShipType('all'),
                                    _priority: 10,
                                    content() {
                                        player.gain(game.createCard('shan'), 'gain2');
                                    },
                                },
                            },
                        },
                        CL: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && (player.azureShipType('CL') || player.azureShipType('all'))) return true;
                                },
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter: (event, player) => player.azureShipType('CL') || player.azureShipType('all'),
                            forced: true,
                            _priority: 10,
                            content() {
                                var card = get.cardPile2((card) => get.tag(card, 'damage'));
                                if (card) player.gain(card, 'gain2');
                            },
                            group: ['CL_shan'],
                            subSkill: {
                                shan: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    _priority: 9,
                                    filter(event, player) {
                                        if (player.azureShipType('CL') || player.azureShipType('all')) {
                                            if (player.getHistory('skipped').includes('phaseUse')) return true;
                                            var history = player.getHistory('useCard');
                                            for (var i = 0; i < history.length; i++) {
                                                if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
                                            }
                                            return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.gain(game.createCard('shan'), 'gain2');
                                    },
                                },
                            },
                        },
                        CA: {
                            group: ['CA_sha', 'CA_num'],
                            charlotte: true,
                            fixed: true,
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && (player.azureShipType('CA') || player.azureShipType('all'))) return true;
                                },
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter: (event, player) => player.azureShipType('CA') || player.azureShipType('all'),
                            forced: true,
                            _priority: 10,
                            content() {
                                var card = get.cardPile2((card) => get.tag(card, 'damage'));
                                if (card) player.gain(card, 'gain2');
                            },
                            subSkill: {
                                sha: {
                                    enable: 'phaseUse',
                                    position: 'hs',
                                    prompt: '将两张杀当作一张杀使用',
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('hs', 'sha') > 1 && (player.azureShipType('CA') || player.azureShipType('all'));
                                    },
                                    selectCard: 2,
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    ai: {
                                        yingbian(card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            var base = 0,
                                                hit = false;
                                            if (get.cardtag(card, 'yingbian_hit')) {
                                                hit = true;
                                                if (
                                                    targets.filter(function (target) {
                                                        return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_all')) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_damage')) {
                                                if (
                                                    targets.filter(function (target) {
                                                        return (
                                                            get.attitude(player, target) < 0 &&
                                                            (hit ||
                                                                !target.mayHaveShan() ||
                                                                player.hasSkillTag(
                                                                    'directHit_ai',
                                                                    true,
                                                                    {
                                                                        target: target,
                                                                        card: card,
                                                                    },
                                                                    true
                                                                )) &&
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        );
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            return base;
                                        },
                                        canLink(player, target, card) {
                                            if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                            if (
                                                target.mayHaveShan() &&
                                                !player.hasSkillTag(
                                                    'directHit_ai',
                                                    true,
                                                    {
                                                        target: target,
                                                        card: card,
                                                    },
                                                    true
                                                )
                                            )
                                                return false;
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
                                        },
                                        order(item, player) {
                                            if (player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (lib.linked.includes(get.nature(item))) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                                    }) &&
                                                    game.countPlayer(function (current) {
                                                        return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                                    }) > 1
                                                )
                                                    return 3.1;
                                                return 3;
                                            }
                                            return 3.05;
                                        },
                                        result: {
                                            target(player, target, card, isLink) {
                                                var eff = (function () {
                                                    if (!isLink && player.hasSkill('jiu')) {
                                                        if (
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        ) {
                                                            if (get.attitude(player, target) > 0) {
                                                                return -7;
                                                            } else {
                                                                return -4;
                                                            }
                                                        }
                                                        return -0.5;
                                                    }
                                                    return -1.5;
                                                })();
                                                if (
                                                    !isLink &&
                                                    target.mayHaveShan() &&
                                                    !player.hasSkillTag(
                                                        'directHit_ai',
                                                        true,
                                                        {
                                                            target: target,
                                                            card: card,
                                                        },
                                                        true
                                                    )
                                                )
                                                    return eff / 1.2;
                                                return eff;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage(card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natureDamage(card) {
                                                if (card.nature) return 1;
                                            },
                                            fireDamage(card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage(card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                    },
                                },
                                num: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter: (event) => ['sha'].includes(event.card.name) && event.skill == 'CA_sha' && event.cards,
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                            },
                        },
                        SCA: {
                            group: ['SCA_sha', 'SCA_num'],
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && (player.azureShipType('SCA') || player.azureShipType('all'))) return true;
                                },
                            },
                            charlotte: true,
                            fixed: true,
                            subSkill: {
                                sha: {
                                    enable: 'phaseUse',
                                    position: 'hs',
                                    prompt: '将两张杀当作一张杀使用',
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('hs', 'sha') > 1 && (player.azureShipType('SCA') || player.azureShipType('all'));
                                    },
                                    selectCard: 2,
                                    viewAs: {
                                        name: 'sha',
                                        storage: {
                                            SCA_sha: true,
                                        },
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (tag == 'unequip') {
                                                if (arg && arg.card && arg.card.storage && arg.card.storage.SCA_sha) return true;
                                                return false;
                                            }
                                        },
                                        yingbian(card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            var base = 0,
                                                hit = false;
                                            if (get.cardtag(card, 'yingbian_hit')) {
                                                hit = true;
                                                if (
                                                    targets.filter(function (target) {
                                                        return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_all')) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_damage')) {
                                                if (
                                                    targets.filter(function (target) {
                                                        return (
                                                            get.attitude(player, target) < 0 &&
                                                            (hit ||
                                                                !target.mayHaveShan() ||
                                                                player.hasSkillTag(
                                                                    'directHit_ai',
                                                                    true,
                                                                    {
                                                                        target: target,
                                                                        card: card,
                                                                    },
                                                                    true
                                                                )) &&
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        );
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            return base;
                                        },
                                        canLink(player, target, card) {
                                            if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                            if (
                                                target.mayHaveShan() &&
                                                !player.hasSkillTag(
                                                    'directHit_ai',
                                                    true,
                                                    {
                                                        target: target,
                                                        card: card,
                                                    },
                                                    true
                                                )
                                            )
                                                return false;
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
                                        },
                                        order(item, player) {
                                            if (player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (lib.linked.includes(get.nature(item))) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                                    }) &&
                                                    game.countPlayer(function (current) {
                                                        return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                                    }) > 1
                                                )
                                                    return 3.1;
                                                return 3;
                                            }
                                            return 3.05;
                                        },
                                        result: {
                                            target(player, target, card, isLink) {
                                                var eff = (function () {
                                                    if (!isLink && player.hasSkill('jiu')) {
                                                        if (
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        ) {
                                                            if (get.attitude(player, target) > 0) {
                                                                return -7;
                                                            } else {
                                                                return -4;
                                                            }
                                                        }
                                                        return -0.5;
                                                    }
                                                    return -1.5;
                                                })();
                                                if (
                                                    !isLink &&
                                                    target.mayHaveShan() &&
                                                    !player.hasSkillTag(
                                                        'directHit_ai',
                                                        true,
                                                        {
                                                            target: target,
                                                            card: card,
                                                        },
                                                        true
                                                    )
                                                )
                                                    return eff / 1.2;
                                                return eff;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage(card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natureDamage(card) {
                                                if (card.nature) return 1;
                                            },
                                            fireDamage(card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage(card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                    },
                                },
                                num: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter: (event) => ['sha'].includes(event.card.name) && event.skill == 'SCA_sha' && event.cards,
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                            },
                        },
                        BC: {
                            group: ['BC_sha', 'BC_num', 'BC_damage'],
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && (player.azureShipType('BC') || player.azureShipType('all'))) return true;
                                },
                            },
                            charlotte: true,
                            fixed: true,
                            subSkill: {
                                sha: {
                                    enable: 'phaseUse',
                                    position: 'hs',
                                    prompt: '将两张杀当作一张杀使用',
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('hs', 'sha') > 1 && (player.azureShipType('BC') || player.azureShipType('all'));
                                    },
                                    selectCard: 2,
                                    viewAs: {
                                        name: 'sha',
                                        storage: {
                                            BC_sha: true,
                                        },
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (tag == 'unequip') {
                                                if (arg && arg.card && arg.card.storage && arg.card.storage.BC_sha) return true;
                                                return false;
                                            }
                                        },
                                        yingbian(card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            var base = 0,
                                                hit = false;
                                            if (get.cardtag(card, 'yingbian_hit')) {
                                                hit = true;
                                                if (
                                                    targets.filter(function (target) {
                                                        return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_all')) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_damage')) {
                                                if (
                                                    targets.filter(function (target) {
                                                        return (
                                                            get.attitude(player, target) < 0 &&
                                                            (hit ||
                                                                !target.mayHaveShan() ||
                                                                player.hasSkillTag(
                                                                    'directHit_ai',
                                                                    true,
                                                                    {
                                                                        target: target,
                                                                        card: card,
                                                                    },
                                                                    true
                                                                )) &&
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        );
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            return base;
                                        },
                                        canLink(player, target, card) {
                                            if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                            if (
                                                target.mayHaveShan() &&
                                                !player.hasSkillTag(
                                                    'directHit_ai',
                                                    true,
                                                    {
                                                        target: target,
                                                        card: card,
                                                    },
                                                    true
                                                )
                                            )
                                                return false;
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
                                        },
                                        order(item, player) {
                                            if (player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (lib.linked.includes(get.nature(item))) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                                    }) &&
                                                    game.countPlayer(function (current) {
                                                        return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                                    }) > 1
                                                )
                                                    return 3.1;
                                                return 3;
                                            }
                                            return 3.05;
                                        },
                                        result: {
                                            target(player, target, card, isLink) {
                                                var eff = (function () {
                                                    if (!isLink && player.hasSkill('jiu')) {
                                                        if (
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        ) {
                                                            if (get.attitude(player, target) > 0) {
                                                                return -7;
                                                            } else {
                                                                return -4;
                                                            }
                                                        }
                                                        return -0.5;
                                                    }
                                                    return -1.5;
                                                })();
                                                if (
                                                    !isLink &&
                                                    target.mayHaveShan() &&
                                                    !player.hasSkillTag(
                                                        'directHit_ai',
                                                        true,
                                                        {
                                                            target: target,
                                                            card: card,
                                                        },
                                                        true
                                                    )
                                                )
                                                    return eff / 1.2;
                                                return eff;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage(card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natureDamage(card) {
                                                if (card.nature) return 1;
                                            },
                                            fireDamage(card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage(card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                    },
                                },
                                num: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter: (event) => ['sha'].includes(event.card.name) && event.skill == 'BC_sha' && event.cards,
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                                damage: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player && event.player.countDiscardableCards(player, 'e') > 0 && event.card && event.card.name == 'sha' && (player.azureShipType('BC') || player.azureShipType('all'));
                                    },
                                    content() {
                                        player.discardPlayerCard(trigger.player, 'e', true, 1);
                                    },
                                },
                            },
                        },
                        BB: {
                            group: ['BB_sha', 'BB_num', 'BB_damage'],
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && (player.azureShipType('BB') || player.azureShipType('all'))) return true;
                                },
                            },
                            charlotte: true,
                            fixed: true,
                            subSkill: {
                                sha: {
                                    enable: 'phaseUse',
                                    position: 'hs',
                                    prompt: '将两张杀当作一张杀使用',
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('hs', 'sha') > 1 && (player.azureShipType('BB') || player.azureShipType('all'));
                                    },
                                    selectCard: 2,
                                    viewAs: {
                                        name: 'sha',
                                        storage: {
                                            BB_sha: true,
                                        },
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (tag == 'unequip') {
                                                if (arg && arg.card && arg.card.storage && arg.card.storage.BB_sha) return true;
                                                return false;
                                            }
                                        },
                                        yingbian(card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            var base = 0,
                                                hit = false;
                                            if (get.cardtag(card, 'yingbian_hit')) {
                                                hit = true;
                                                if (
                                                    targets.filter(function (target) {
                                                        return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_all')) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_damage')) {
                                                if (
                                                    targets.filter(function (target) {
                                                        return (
                                                            get.attitude(player, target) < 0 &&
                                                            (hit ||
                                                                !target.mayHaveShan() ||
                                                                player.hasSkillTag(
                                                                    'directHit_ai',
                                                                    true,
                                                                    {
                                                                        target: target,
                                                                        card: card,
                                                                    },
                                                                    true
                                                                )) &&
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        );
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            return base;
                                        },
                                        canLink(player, target, card) {
                                            if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                            if (
                                                target.mayHaveShan() &&
                                                !player.hasSkillTag(
                                                    'directHit_ai',
                                                    true,
                                                    {
                                                        target: target,
                                                        card: card,
                                                    },
                                                    true
                                                )
                                            )
                                                return false;
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
                                        },
                                        order(item, player) {
                                            if (player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (lib.linked.includes(get.nature(item))) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                                    }) &&
                                                    game.countPlayer(function (current) {
                                                        return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                                    }) > 1
                                                )
                                                    return 3.1;
                                                return 3;
                                            }
                                            return 3.05;
                                        },
                                        result: {
                                            target(player, target, card, isLink) {
                                                var eff = (function () {
                                                    if (!isLink && player.hasSkill('jiu')) {
                                                        if (
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        ) {
                                                            if (get.attitude(player, target) > 0) {
                                                                return -7;
                                                            } else {
                                                                return -4;
                                                            }
                                                        }
                                                        return -0.5;
                                                    }
                                                    return -1.5;
                                                })();
                                                if (
                                                    !isLink &&
                                                    target.mayHaveShan() &&
                                                    !player.hasSkillTag(
                                                        'directHit_ai',
                                                        true,
                                                        {
                                                            target: target,
                                                            card: card,
                                                        },
                                                        true
                                                    )
                                                )
                                                    return eff / 1.2;
                                                return eff;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage(card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natureDamage(card) {
                                                if (card.nature) return 1;
                                            },
                                            fireDamage(card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage(card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                    },
                                },
                                num: {
                                    trigger: { player: 'useCard' },
                                    firstDo: true,
                                    forced: true,
                                    popup: false,
                                    filter: (event) => ['sha'].includes(event.card.name) && event.skill == 'BB_sha' && event.cards,
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                                damage: {
                                    trigger: { source: 'damageSource' },
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player && event.player.countDiscardableCards(player, 'e') > 0 && event.card && event.card.name == 'sha' && (player.azureShipType('BB') || player.azureShipType('all'));
                                    },
                                    content() {
                                        player.discardPlayerCard(trigger.player, 'e', true, trigger.player.countCards('e'));
                                    },
                                },
                            },
                        },
                        CVL: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && (player.azureShipType('CVL') || player.azureShipType('all'))) return true;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && (player.azureShipType('CVL') || player.azureShipType('all'))) range[1] += 1;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 2,
                            selectTarget: 1,
                            prompt: '选择一名其他角色,观看其全部手牌',
                            filter: (event, player) => player.azureShipType('CVL') || player.azureShipType('all'),
                            filterTarget(event, player, target) {
                                return player != target && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.viewHandcards(target);
                                ('step 1');
                                player.chooseBool('轻航:是否展示' + get.translation(target) + '的全部手牌？');
                                ('step 2');
                                if (result.bool) {
                                    target.showHandcards();
                                }
                            },
                        },
                        CV: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && (player.azureShipType('CV') || player.azureShipType('all'))) return true;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && (player.azureShipType('CV') || player.azureShipType('all'))) range[1] += 2;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            prompt: '选择一名其他角色,观看其全部手牌',
                            filter: (event, player) => player.azureShipType('CV') || player.azureShipType('all'),
                            filterTarget(event, player, target) {
                                return player != target && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.viewHandcards(target);
                                ('step 1');
                                player.chooseBool('正航:是否展示' + get.translation(target) + '的全部手牌？');
                                ('step 2');
                                if (result.bool) {
                                    target.showHandcards();
                                }
                            },
                        },
                        SUB: {
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && (player.azureShipType('SUB') || player.azureShipType('all'))) return true;
                                },
                            },
                            init(player) {
                                if (player.azureShipType('SUB') || player.azureShipType('all')) {
                                    player.addMark('SUB', 3);
                                    player.addTempSkill('SUB_qian', { player: 'phaseUseBegin' });
                                }
                            },
                            marktext: '氧',
                            group: ['SUB_phaseJieshuBegin', 'SUB_phaseJieshuEnd'],
                            hiddenSkill: true,
                            charlotte: true,
                            fixed: true,
                            subSkill: {
                                phaseJieshuBegin: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    firstDo: true,
                                    filter(event, player) {
                                        return !player.hasSkill('SUB_qian') && player.hasMark('SUB') && (player.azureShipType('SUB') || player.azureShipType('all'));
                                    },
                                    prompt: '是否弃置一枚<氧气>标记,进入潜行状态？',
                                    content() {
                                        player.removeMark('SUB', 1);
                                        player.addTempSkill('SUB_qian', { player: 'phaseUseBegin' });
                                    },
                                },
                                phaseJieshuEnd: {
                                    trigger: {
                                        player: 'phaseJieshuEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('SUB_qian') && (player.azureShipType('SUB') || player.azureShipType('all'));
                                    },
                                    content() {
                                        player.addMark('SUB');
                                    },
                                },
                            },
                            intro: {
                                name: '氧气',
                                content: '潜水必备',
                            },
                            derivation: ['SUB_qian'],
                        },
                        SUB_qian: {
                            mark: true,
                            nopop: true,
                            init: (player) => game.log(player, '进入了', '潜行状态'),
                            intro: {
                                content: '锁定技,你不能成为其他角色的卡牌的目标,当你脱离潜行状态时,你摸一张牌并回复1点体力,当你受到伤害时,若有伤害来源且与玩家距离为1,此伤害改为1,否则防止之',
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (player != target) return false;
                                },
                            },
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            charlotte: true,
                            content() {
                                if (trigger.source != undefined) {
                                    if (get.distance(trigger.source, player) == 1) {
                                        if (trigger.num > 1) trigger.num = 1;
                                    } else trigger.cancel();
                                } else trigger.cancel();
                            },
                            onremove(player) {
                                game.log(player, '脱离了', '潜行状态');
                                player.draw();
                                player.recover();
                            },
                        },
                        AR: {
                            mark: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num = player.getStat('skill').AR ? player.getStat('skill').AR : 0;
                                if (!game.hasPlayer((current) => current.isDamaged())) return false;
                                if (!(player.azureShipType('AR') || player.azureShipType('all'))) return false;
                                if (player.countCards('h') < num) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var num = player.getStat('skill').AR;
                                player.draw();
                                player.chooseToDiscard(num, true);
                                ('step 1');
                                player
                                    .chooseTarget(true, function (card, player, target) {
                                        return target.isDamaged();
                                    })
                                    .set('ai', function (target) {
                                        return (target.maxHp - target.hp) * get.attitude(player, target);
                                    })
                                    .set('prompt', '请选择维修的目标')
                                    .set('prompt2', '该目标回复1点体力');
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.recover();
                                }
                            },
                            intro: {
                                content(storage, player) {
                                    if (player.getStat('skill').AR) return '已发动过' + player.getStat('skill').AR + '次';
                                    return '尚未发动';
                                },
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player(player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.isDamaged() && get.attitude(player, current) > 0;
                                            })
                                        ) {
                                            if (player.getStat('skill').AR) {
                                                var numd = player.getStat('skill').AR;
                                                var numh = player.countCards();
                                                if (player.hp < numh - numd) return 1;
                                                return -1;
                                            }
                                            return 1;
                                        }
                                        return -1;
                                    },
                                },
                            },
                            group: ['AR_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    filter: (event, player) => !event.numFixed && (player.azureShipType('AR') || player.azureShipType('all')),
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        TS: {},
                        diange: {
                            init(player) {
                                if (!player.storage.diange) player.storage.diange = [];
                                var str = 'extension/碧蓝航线Q/audio/维修舰的歌单';
                                game.getFileList(str, (folders, files) => {
                                    if (files && files.length) {
                                        files.forEach((n) => {
                                            var ext = n.substring(n.lastIndexOf('.'));
                                            if (ext == '.mp3' || '.MP3' || '.Mp3' || '.mP3') player.storage.diange.push(n);
                                        });
                                    }
                                });
                            },
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                if (player.storage.diange.length) {
                                    var files = player.storage.diange;
                                    var choiceList = ui.create.dialog('维修舰的歌单');
                                    for (var i = 0; i < files.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        str += files[i];
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                } else var choiceList = ui.create.dialog('维修舰的歌单', '无可用歌曲');
                                player.chooseButton(choiceList);
                                ('step 1');
                                if (result.links) {
                                    var str = 'extension/碧蓝航线Q/audio/维修舰的歌单';
                                    var name = player.storage.diange[result.links];
                                    ui.backgroundMusic.pause();
                                    ui.backgroundMusic.src = str + '/' + name;
                                    var ext = name.substring(name.lastIndexOf('.'));
                                    var song = name.replace(ext, '');
                                    game.log(player, '将背景音乐切换为' + song);
                                } else game.log(player, '觉得还是现在的好听');
                            },
                        },
                        FB: {
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && (player.azureShipType('FB') || player.azureShipType('all'))) return true;
                                },
                            },
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.num > 1 && event.player != player && (player.azureShipType('FB') || player.azureShipType('all'));
                            },
                            content() {
                                var targets = game
                                    .filterPlayer(function (current) {
                                        return current != player && current != trigger.player && get.distance(trigger.player, current) <= 1;
                                    })
                                    .sortBySeat();
                                for (var i = 0; i < targets.length; i++) {
                                    trigger.player.line(targets[i], 'fire');
                                    targets[i].damage('fire', 'nosource');
                                }
                            },
                        },
                        fankong: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (card.name == 'wanjian') return false;
                                },
                            },
                        },
                        kongxi: {
                            charlotte: true,
                            fixed: true,
                            enable: ['chooseToUse'],
                            selectCard: 2,
                            filterCard: {
                                name: 'sha',
                            },
                            viewAs: {
                                name: 'wanjian',
                            },
                            viewAsFilter: (player) => player.countCards('hs', 'sha') >= 2,
                            position: 'hs',
                            prompt: '将两张杀当作万箭齐发使用',
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: 1,
                                    value: 5,
                                },
                                result: {
                                    target_use(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                    target(player, target) {
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        shenfeng: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            charlotte: true,
                            fixed: true,
                            enable: 'phaseUse',
                            selectCard: -1,
                            filterCard: true,
                            filter(event, player) {
                                return player.num('h') > 0;
                            },
                            position: 'h',
                            viewAs: {
                                name: 'sha',
                            },
                            prompt: '将所有手牌当作一张杀使用',
                            ai: {
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.filter(function (target) {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHaveShan() ||
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )) &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
                                        !player.hasSkillTag(
                                            'directHit_ai',
                                            true,
                                            {
                                                target: target,
                                                card: card,
                                            },
                                            true
                                        )
                                    )
                                        return false;
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
                                            target.mayHaveShan() &&
                                            !player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        )
                                            return eff / 1.2;
                                        return eff;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                },
                            },
                        },
                        leibao: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (get.tag(card, 'thunderDamage')) return [1, 1];
                                    },
                                },
                            },
                        },
                        dianran: {
                            trigger: { source: 'damageEnd' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            _priority: 10,
                            filter: (event, player) => event.nature == 'fire' && event.player != player && event.player.isAlive(),
                            content() {
                                'step 0';
                                trigger.player.addMark('dianran', 1);
                                player.judge((card) => (get.color(card) == 'red' ? 1 : -1));
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.addSkill('shao');
                                }
                            },
                            marktext: '🔥',
                            intro: {
                                name: '着火',
                                mark(dialog, storage, player) {
                                    dialog.addText('烧,实在是太烧啦!');
                                    if (player.hasSkill('shao')) {
                                        var num = player.countMark('dianran');
                                        var name = get.translation(player);
                                        dialog.addText(name + '将会因〖着火〗受到' + num + '点火焰伤害');
                                    }
                                },
                            },
                            derivation: ['shao'],
                        },
                        shao: {
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            filter: (event, player) => player.countMark('dianran') > 0,
                            content() {
                                player.damage(player.countMark('dianran'), 'fire', 'nosource');
                                player.removeSkill('shao');
                            },
                        },
                        guanchuan: {
                            marktext: '💦',
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !event.player.hasSkill('jinshui');
                            },
                            content() {
                                'step 0';
                                player.judge((card) => (get.color(card) == 'black' ? 1 : -1));
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.addMark('guanchuan');
                                    trigger.player.addSkill('jinshui');
                                }
                            },
                            intro: {
                                name: '进水',
                                mark(dialog, storage, player) {
                                    dialog.addText('效果是不是该写AI降智？');
                                    if (player.hasSkill('jinshui')) {
                                        var num = player.countMark('guanchuan');
                                        var name = get.translation(player);
                                        dialog.addText(name + '将会因〖进水〗流失' + num + '点体力');
                                    }
                                },
                                content: '效果是不是该写AI降智？',
                            },
                            derivation: ['jinshui'],
                        },
                        jinshui: {
                            group: ['jinshui_damage', 'jinshui_recover'],
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter: (event, player) => player.hasMark('guanchuan'),
                            content() {
                                player.loseHp(player.countMark('guanchuan'));
                            },
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('guanchuan', trigger.num);
                                    },
                                },
                                recover: {
                                    trigger: {
                                        player: 'recoverEnd',
                                    },
                                    forced: true,
                                    filter: (event, player) => player.hasMark('guanchuan'),
                                    content() {
                                        'step 0';
                                        player.removeMark('guanchuan', 1);
                                        ('step 1');
                                        if (player.countMark('guanchuan') == 0) {
                                            player.removeSkill('jinshui');
                                        }
                                    },
                                },
                            },
                        },
                        guochuan: {
                            trigger: {
                                source: 'damageBegin3',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter: (event, player) => event.player != player && event.num > 1 && event.card && event.card.name == 'sha',
                            content() {
                                'step 0';
                                player.judge((card) => (card.suit == 'spade' ? 1 : -1));
                                ('step 1');
                                if (result.bool) {
                                    trigger.num = 1;
                                    trigger.player.addTempSkill('tanhuan', { player: 'phaseEnd' });
                                }
                            },
                            derivation: ['tanhuan'],
                        },
                        tanhuan: {
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (player != target && (!get.info(card) || !get.info(card).singleCard || !ui.selected.targets.length)) return false;
                                },
                            },
                            /*mark:true,
                            intro:{
                                name:'瘫痪',
                                content:'锁定技,你不能对其他角色使用牌',
                            },*/
                        },
                        pojiao: {
                            trigger: {
                                global: 'drawBegin',
                            },
                            charlotte: true,
                            fixed: true,
                            logTarget: (event, player) => event.player,
                            prompt2: (event, player) => '与' + get.translation(event.player) + '进行一次拼点,若' + get.translation(event.player) + '没赢,取消此次摸牌',
                            filter(event, player, card) {
                                var evt = event.getParent('phaseDraw');
                                if (event.player == player) return false;
                                if (!player.hasCard('sha', 'hes')) return false;
                                if (evt && evt.name == 'phaseDraw' && _status.currentPhase == event.player) return false;
                                if (player.canCompare(event.player)) return true;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) < 0) {
                                    if (player.countCards('hs', 'sha') > 2) return true;
                                    else {
                                        if (player.countCards('hs', 'sha') > 1) {
                                            if (event.num > 1)
                                                return player.hasCard(function (card) {
                                                    return card.name == 'sha' && card.number > 4;
                                                }, 'hs');
                                            else
                                                return player.hasCard(function (card) {
                                                    return card.name == 'sha' && card.number > 7;
                                                }, 'hs');
                                        } else {
                                            if (event.num > 2)
                                                return player.hasCard(function (card) {
                                                    return card.name == 'sha' && card.number > 5;
                                                }, 'hs');
                                            else
                                                return player.hasCard(function (card) {
                                                    return card.name == 'sha' && card.number > 8;
                                                }, 'hs');
                                        }
                                    }
                                } else return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard(true, 'hs', function (card) {
                                        return card.name == 'sha';
                                    })
                                    .set('ai', function (card) {
                                        return card.number - get.value(card);
                                    })
                                    .set('prompt', '破交:请选择一张【杀】作为拼点牌');
                                ('step 1');
                                if (result.bool) {
                                    var next = player.chooseToCompare(trigger.player);
                                    if (!next.fixedResult) next.fixedResult = {};
                                    next.fixedResult[player.playerid] = result.cards[0];
                                }
                                ('step 2');
                                if (result.bool || result.tie) {
                                    trigger.cancel();
                                }
                            },
                            group: ['pojiao_num'],
                            subSkill: {
                                num: {
                                    trigger: { player: 'compare' },
                                    //silent:true,
                                    forced: true,
                                    filter(event, player) {
                                        if (event.iwhile) return false;
                                        if (event.parent.name != 'pojiao') return false;
                                        return true;
                                    },
                                    content() {
                                        var num = Math.max(trigger.player.hp - trigger.target.hp, 0);
                                        if (num > 0) {
                                            game.log(player, '的拼点牌点数+', num);
                                            trigger.num1 = Math.min(13, trigger.num1 + num);
                                        }
                                    },
                                    popup: false,
                                },
                            },
                        },
                        qiongjia: {
                            mark: true,
                            init(player) {
                                if (!player.storage.qiongjia) player.storage.qiongjia = true;
                            },
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                if (player.storage.qiongjia == true) {
                                    trigger.num--;
                                    player.storage.qiongjia = false;
                                    game.log(player, '的穹甲损坏了');
                                } else {
                                    trigger.num++;
                                    player.storage.qiongjia = true;
                                    game.log(player, '的穹甲修复了');
                                }
                            },
                            ai: {
                                result: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!player.storage.qiongjia) return 2;
                                        }
                                    },
                                },
                            },
                            group: ['qiongjia_recover'],
                            subSkill: {
                                recover: {
                                    trigger: {
                                        player: 'recoverBegin',
                                    },
                                    forced: true,
                                    filter: (event, player, storage) => player.storage.qiongjia == false,
                                    content() {
                                        player.storage.qiongjia = true;
                                        game.log(player, '的穹甲修复了');
                                    },
                                },
                            },
                            intro: {
                                name: '穹甲',
                                content(storage) {
                                    if (storage) return '穹甲完好,下一次受到伤害-1';
                                    else return '穹甲损坏,下一次受到伤害+1';
                                },
                            },
                        },
                        huhang: {
                            trigger: { player: 'phaseEnd' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择〖护航〗的目标', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', (target) => get.attitude(player, target) > 0);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.huhang_gain = result.targets[0];
                                    player.addTempSkill('huhang_gain', { player: 'phaseUseAfter' });
                                }
                            },
                            group: ['huhang_give'],
                            subSkill: {
                                gain: {
                                    trigger: {
                                        global: ['respondEnd', 'useCardEnd'],
                                    },
                                    charlotte: true,
                                    filter(event, player, storage) {
                                        if (event.card.name != 'sha') return false;
                                        if (event.player != player.storage.huhang_gain) return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (get.position(i, true) == 'o') return true;
                                            }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        var cards = trigger.cards.slice(0);
                                        for (var i = 0; i < cards.length; i++) {
                                            if (get.position(cards[i], true) != 'o') {
                                                cards.splice(i--, 1);
                                            }
                                        }
                                        player.gain(cards, 'gain2');
                                    },
                                    intro: {
                                        content: '正在为$护航',
                                    },
                                },
                                give: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h', 'sha') > 0 && game.hasPlayer((current) => player.storage.huhang_gain == current);
                                    },
                                    content() {
                                        if (player.countCards('h', 'sha') > 0) {
                                            var cards = player.getCards('h', (card) => card.name == 'sha');
                                            var target = player.storage.huhang_gain;
                                            player.give(cards, target);
                                        }
                                    },
                                },
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        yezhan: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (!player.hasSkill('yezhan_disable') && player.countCards('he') > 0) {
                                    var cards = [];
                                    lib.inpile.forEach(function (name) {
                                        var card = { name: name };
                                        if (get.tag(card, 'damage') && (player.storage.yezhan_limit ? !player.storage.yezhan_limit.includes(name) : true)) {
                                            if (name == 'sha') {
                                                if (event.filterCard && event.filterCard({ name: name }, player, event)) cards.push('sha');
                                                lib.inpile_nature.forEach(function (nature) {
                                                    if (event.filterCard && event.filterCard({ name: name, nature: nature }, player, event)) cards.push(['sha', nature]);
                                                });
                                            } else {
                                                if (event.filterCard && event.filterCard({ name: name }, player, event)) cards.push(name);
                                            }
                                        }
                                    });
                                    if (cards.length == 0) return false;
                                    return true;
                                } else return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    lib.inpile.forEach(function (name) {
                                        var card = { name: name };
                                        if (player.storage.yezhan_limit ? !player.storage.yezhan_limit.includes(name) : true) {
                                            if (get.tag(card, 'damage')) {
                                                if (name == 'sha') {
                                                    if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                                    lib.inpile_nature.forEach(function (nature) {
                                                        if (event.filterCard && event.filterCard({ name: name, nature: nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                                    });
                                                } else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                                else if (get.type(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                            }
                                        }
                                    });
                                    if (list.length == 0) return ui.create.dialog('夜战无可用牌');
                                    return ui.create.dialog('夜战', [list, 'vcard']);
                                },
                                filter: (button, player) => _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent),
                                check(button) {
                                    return get.value({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        popname: true,
                                        check: (card) => 6 - get.value(card),
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            if (!player.hasSkill('yezhan_limit')) player.addTempSkill('yezhan_limit', 'phaseEnd');
                                        },
                                        onuse() {
                                            if (!player.storage.yezhan_limit.includes(links[0][2])) player.storage.yezhan_limit.push(links[0][2]);
                                        },
                                    };
                                },
                                prompt: (links, player) => '将一张牌当作' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用',
                            },
                            ai: {
                                order(item, player) {
                                    var cards = player.getCards('h', (card) => get.tag(card, 'damage'));
                                    if (cards && cards.length) {
                                        cards.sort((a, b) => get.order(a) - get.order(b));
                                        return get.order(cards[0]) - 0.2;
                                    } else return 0.2;
                                },
                                result: {
                                    player(player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.damageEffect(current, player, player) > 0;
                                            }) &&
                                            player.countCards('he', function (card) {
                                                return 6 - get.value(card);
                                            }) > 0
                                        )
                                            return 1;
                                        else return -1;
                                    },
                                },
                            },
                            group: ['yezhan_damage'],
                            subSkill: {
                                damage: {
                                    trigger: { player: 'useCardAfter' },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            player.getHistory('sourceDamage', function (evt) {
                                                return evt.card == event.card;
                                            }).length && event.skill == 'yezhan_backup'
                                        );
                                    },
                                    content() {
                                        player.addTempSkill('yezhan_disable', 'phaseEnd');
                                    },
                                },
                                limit: {
                                    init: (player) => (player.storage.yezhan_limit = []),
                                },
                                disable: {},
                            },
                        },
                        jiexuan: {
                            enable: 'phaseUse',
                            limited: true,
                            filterTarget: lib.filter.notMe,
                            content() {
                                player.awakenSkill('jiexuan');
                                player.storage.jiexuan_after = targets[0];
                                player.addSkill('jiexuan_after');
                                targets[0].storage.jiexuan_after = player;
                                targets[0].addSkill('jiexuan_after');
                                game.log(player, '与', targets[0], '接舷');
                            },
                            init: (player) => (player.storage.jiexuan = false),
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                        },
                        jiexuan_after: {
                            mod: {
                                cardUsableTarget(card, player, target) {
                                    if (target == player.storage.jiexuan_after) return true;
                                },
                                globalFrom(from, to) {
                                    if (to == from.storage.jiexuan_after) return -Infinity;
                                },
                            },
                            intro: {
                                content: '已与$接舷',
                            },
                        },
                        qishe: {
                            charlotte: true,
                            fixed: true,
                            enable: 'chooseToUse',
                            filterCard: {
                                name: 'sha',
                            },
                            selectCard: -1,
                            viewAs: {
                                name: 'sha',
                                storage: {
                                    qishe: true,
                                },
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hs', 'sha')) return false;
                            },
                            position: 'hs',
                            prompt: '将所有的杀一次性全部使用',
                            group: ['qishe_use'],
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event;
                                        return ['sha'].includes(evt.card.name) && evt.skill == 'qishe' && evt.cards;
                                    },
                                    content() {
                                        trigger.baseDamage += trigger.cards.length - 1;
                                    },
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (arg && arg.card && arg.card.storage && arg.card.storage.qishe) return true;
                                        return false;
                                    }
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.filter(function (target) {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHaveShan() ||
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )) &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
                                        !player.hasSkillTag(
                                            'directHit_ai',
                                            true,
                                            {
                                                target: target,
                                                card: card,
                                            },
                                            true
                                        )
                                    )
                                        return false;
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
                                            target.mayHaveShan() &&
                                            !player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        )
                                            return eff / 1.2;
                                        return eff;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                },
                            },
                        },
                        duizhen: {
                            charlotte: true,
                            fixed: true,
                            enable: 'chooseToUse',
                            usable: 2,
                            filterCard: {
                                name: 'sha',
                            },
                            viewAs: {
                                name: 'juedou',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hs', 'sha')) return false;
                            },
                            position: 'hs',
                            prompt: '将一张杀当作决斗使用',
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target, card) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                        },
                        zhikong: {
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (player.countCards('hs', 'sha') < 2) return false;
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                if (get.info(event.card).multitarget) return false;
                                if (event.targets.length < 2) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard('是否发动〖制空〗？', 'hs', 2, (card) => card.name == 'sha')
                                    .set('ai', () => {
                                        var num = 0;
                                        for (var i = 0; i < trigger.targets.length; i++) {
                                            var target = trigger.targets;
                                            num += get.effect(target[i], trigger.card, target, player);
                                        }
                                        if (num < 0) return true;
                                        return false;
                                    })
                                    .set('prompt2', '弃置两张杀令' + get.translation(trigger.parent.card) + '对此牌的全部目标无效');
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards);
                                    trigger.parent.excluded.addArray(trigger.targets);
                                }
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        zhengbei: {
                            charlotte: true,
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter: (event, player) => player.countCards('h') > 0,
                            forced: true,
                            content() {
                                'step 0';
                                var list = [],
                                    cards = player.getCards('h');
                                for (var i = 0; i < cards.length; i++) {
                                    var type = get.type(cards[i]);
                                    if (!list.includes(type)) list.push(type);
                                }
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set(
                                        'choice',
                                        (function () {
                                            return list.randomGet('cancel2');
                                        })()
                                    )
                                    .set('ai', () => _status.event.choice);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    event.result = result.control;
                                    var cards = player.getCards('h', { type: event.result });
                                    event.num = cards.length;
                                    player.discard(cards);
                                } else {
                                    event.finish();
                                    player.getStat('skill').zhengbei--;
                                }
                                ('step 2');
                                var cards = [];
                                while (cards.length < event.num) {
                                    var card = get.cardPile((i) => get.type(i) != event.result && !cards.includes(i));
                                    if (!card) break;
                                    else cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'draw');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (!player.hasCard('shan', 'hes')) return 1;
                                        if (!player.hasCard('tao', 'hes')) return 1;
                                        if (!player.hasCard('wuxie', 'hes')) return 1;
                                    },
                                },
                                threaten: 0.15,
                            },
                        },
                        sunguan: {
                            charlotte: true,
                            fixed: true,
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init: (player) => (player.storage.sunguan = false),
                            filter(event, player) {
                                if (player.storage.sunguan) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                var num = Math.ceil(player.maxHp / 2);
                                player.hp = num;
                                player.draw(2);
                                player.azureDispel();
                                player.update();
                                player.awakenSkill('sunguan');
                            },
                            intro: {
                                content: 'limited',
                            },
                            ai: {
                                order: 1,
                                save: true,
                                skillTagFilter(player, tag, target) {
                                    if (player != target || player.storage.sunguan) return false;
                                },
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.sunguan) return 0.6;
                                },
                            },
                        },
                        AR_sunguan: {
                            mark: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'dying',
                            },
                            init(player) {
                                if (!player.storage.AR_sunguan) player.storage.AR_sunguan = 3;
                            },
                            filter: (event, player) => player.storage.AR_sunguan > 0,
                            check: (event, player) => get.attitude(player, event.player) > 0,
                            logTarget: (event, player) => event.player,
                            prompt2(event, player) {
                                var num = Math.ceil(event.player.maxHp / 2);
                                return '将' + get.translation(event.player) + '的体力值修正至' + num + '点';
                            },
                            content() {
                                var target = trigger.player;
                                var num = Math.ceil(target.maxHp / 2);
                                player.line(target, 'green');
                                if (player.name == 'Vestal' || player.name2 == 'Vestal') {
                                    var Enterprises = ['meta_Enterpries', 'Enterpries'];
                                    if (Enterprises.includes(target.name) || Enterprises.includes(target.name2)) event.enterprise = true;
                                }
                                if (event.enterprise) {
                                    target.hp = target.maxHp;
                                    target.draw(2);
                                } else {
                                    target.hp = num;
                                }
                                target.azureDispel();
                                target.update();
                                player.storage.AR_sunguan--;
                            },
                            intro: {
                                name: '紧急损害管制',
                                content(storage, player) {
                                    if (storage == 0) {
                                        return '已无使用机会';
                                    } else {
                                        return '还剩下' + storage + '次使用机会';
                                    }
                                },
                            },
                        },
                        bulei: {
                            marktext: '雷',
                            enable: 'phaseUse',
                            usable: 1,
                            intro: {
                                name: '水雷',
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            charlotte: true,
                            fixed: true,
                            onremove(player) {
                                var cards = player.getExpansions('bulei');
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            discard: false,
                            lose: false,
                            forced: true,
                            filter: (event, player) => player.countCards('he') > 0,
                            content() {
                                'step 0';
                                player
                                    .chooseCard('he', [1, Infinity])
                                    .set('ai', (card) => {
                                        return 6 - get.value(card);
                                    })
                                    .set('prompt', '选择任意张牌作为<水雷>放置于你的武将牌上');
                                ('step 1');
                                if (result.bool) {
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('bulei');
                                } else {
                                    player.getStat('skill').bulei--;
                                }
                            },
                            group: ['bulei_damage'],
                            subSkill: {
                                damage: {
                                    trigger: { target: 'useCardToBefore' },
                                    filter(event, player) {
                                        return player.getExpansions('bulei').length && event.player != player;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('bulei');
                                        player.chooseButton(['是否' + get.translation(trigger.player) + '发动〖布雷〗？', cards, '移去一张<水雷>,对' + get.translation(trigger.player) + '造成一点雷电伤害']).set('ai', function () {
                                            if (get.attitude(player, trigger.player) < 0) return true;
                                            return false;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.loseToDiscardpile(result.links);
                                            player.line(trigger.player, 'thunder');
                                            trigger.player.damage('thunder').source = player;
                                        }
                                    },
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') > player.hp) return 1;
                                        return -1;
                                    },
                                },
                            },
                        },
                        missile: {
                            enable: 'phaseUse',
                            usable: 1,
                            charlotte: true,
                            fixed: true,
                            filterCard: true,
                            check: (card) => 6 - get.value(card),
                            filterTarget: lib.filter.notMe,
                            filter: (event, player) => player.countCards('he') > 1,
                            position: 'he',
                            content() {
                                target.damage();
                            },
                            ai: {
                                order: 2,
                                expose: 0.2,
                                result: {
                                    player(player, target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                },
                            },
                        },
                        Azure_jihuo: {
                            enable: 'phaseUse',
                            usable: 1,
                            charlotte: true,
                            fixed: true,
                            selectTarget: 1,
                            filterTarget: lib.filter.notMe,
                            content() {
                                'step 0';
                                game.filterPlayer(function (current) {
                                    return current.hasSkill('Azure_jihuo_effect');
                                }).forEach((current) => current.removeSkill('Azure_jihuo_effect'));
                                var list = [];
                                lib.inpile.forEach(function (name) {
                                    var card = { name: name };
                                    if (get.tag(card, 'damage')) {
                                        var type = get.translation(get.type(card));
                                        list.push([type, '', name]);
                                    }
                                });
                                var dialog = ui.create.dialog('集火:请选择牌名', [list, 'vcard']);
                                player.chooseButton(dialog, true).set('ai', function (button) {
                                    var player = _status.event.player;
                                    return get.effect(target, { name: button.link[2] }, player, player);
                                });
                                ('step 1');
                                if (result.bool) {
                                    target.storage.Azure_jihuo_effect = result.links[0][2];
                                    target.addSkill('Azure_jihuo_effect');
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -1,
                                },
                            },
                            subSkill: {
                                effect: {
                                    mark: true,
                                    intro: {
                                        name: '被集火!',
                                        content: '受到来源为$的伤害+1',
                                    },
                                    trigger: { player: 'damageBegin3' },
                                    forced: true,
                                    filter(event, player) {
                                        var storage = player.storage.Azure_jihuo_effect;
                                        if (event.card) return event.card.name == storage;
                                        return false;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    onremove(player) {
                                        delete player.storage.Azure_jihuo_effect;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (card.name == player.storage.Azure_jihuo_effect) return [1, 1];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        LuckyE: {
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num *= 2;
                            },
                            group: ['LuckyE_damage', 'LuckyE_draw'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: ['damageBefore', 'damageBegin4'],
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        nofire: true,
                                        nothunder: true,
                                        nodamage: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'damage')) return [0, 0];
                                            },
                                        },
                                    },
                                },
                                draw: {
                                    trigger: {
                                        source: 'damageBegin3',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num *= 2;
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (get.tag(card, 'damage')) return 2;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        youling: {
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if ((get.type(card) == 'trick' || get.type(card) == 'delay') && player != target) return false;
                                },
                            },
                        },
                        leida: {
                            enable: 'phaseUse',
                            filter(card, player, target) {
                                if (
                                    game.hasPlayer(function (current) {
                                        return current != player && current.countCards('h') > 0;
                                    }) &&
                                    (player.getStat('skill').leida || 0) < player.hp
                                )
                                    return true;
                                return false;
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var cards = target.getCards('h');
                                var num = 1 + player.maxHp - player.hp;
                                player.chooseCardButton('雷达显示结果', cards, Math.min(num, cards.length)).set('ai', (button) => {
                                    return get.value(button.link);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var cards = result.links;
                                    target.discard(cards);
                                }
                            },
                            ai: {
                                threaten: 1.5,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                                order: 10,
                                expose: 0.4,
                            },
                        },
                        zhangkong: {
                            group: ['zhangkong_viod', 'zhangkong_rejudge'],
                            subSkill: {
                                viod: {
                                    trigger: {
                                        global: 'useCardToTargeted',
                                    },
                                    filter: (event, player) => get.type(event.card) == 'delay' || get.type(event.card) == 'trick',
                                    check: (event, player) => get.effect(event.target, event.card, event.player, player) < 0,
                                    logTarget: 'target',
                                    prompt2: (event, player) => '令' + get.translation(event.card) + '对' + get.translation(event.target) + '无效',
                                    content() {
                                        trigger.parent.excluded.add(trigger.target);
                                    },
                                    ai: {
                                        expose: 0.4,
                                        threaten: 1.5,
                                    },
                                },
                                rejudge: {
                                    audio: 'ext:碧蓝航线Q/audio:true',
                                    trigger: {
                                        global: 'judge',
                                    },
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        return player.countCards(get.mode() == 'guozhan' ? 'hes' : 'hs') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('zhangkong_rejudge'), get.mode() == 'guozhan' ? 'hes' : 'hs', function (card) {
                                                var player = _status.event.player;
                                                var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                                if (mod2 != 'unchanged') return mod2;
                                                var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                                if (mod != 'unchanged') return mod;
                                                return true;
                                            })
                                            .set('ai', function (card) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                var judging = _status.event.judging;
                                                var result = trigger.judge(card) - trigger.judge(judging);
                                                var attitude = get.attitude(player, trigger.player);
                                                if (attitude == 0 || result == 0) return 0;
                                                if (attitude > 0) {
                                                    return result - get.value(card) / 2;
                                                } else {
                                                    return -result - get.value(card) / 2;
                                                }
                                            })
                                            .set('judging', trigger.player.judging[0])
                                            .setHiddenSkill('zhangkong_rejudge');
                                        ('step 1');
                                        if (result.bool) {
                                            player.respond(result.cards, 'zhangkong_rejudge', 'highlight', 'noOrdering');
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            if (trigger.player.judging[0].clone) {
                                                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                                game.broadcast(function (card) {
                                                    if (card.clone) {
                                                        card.clone.classList.remove('thrownhighlight');
                                                    }
                                                }, trigger.player.judging[0]);
                                                game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                            }
                                            game.cardsDiscard(trigger.player.judging[0]);
                                            trigger.player.judging[0] = result.cards[0];
                                            trigger.orderingCards.addArray(result.cards);
                                            game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        dianliang: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filter: (event, player) => game.hasPlayer((current) => current != player && !current.hasSkill('baolu')),
                            filterTarget: (event, player, target) => target != player && !target.hasSkill('baolu'),
                            content() {
                                target.addSkill('baolu');
                                game.log(target, '被点亮');
                            },
                            ai: {
                                order: 11,
                                expose: 0.4,
                                result: {
                                    target: () => -1,
                                },
                                threaten: 1.5,
                            },
                            derivation: ['baolu'],
                        },
                        baolu: {
                            //mark:true,
                            trigger: {
                                player: ['damageBegin4', 'loseHpBegin'],
                            },
                            forced: true,
                            content() {
                                trigger.num *= 2;
                            },
                            /*intro:{
                                name:'众目睽睽!',
                                content:'世界聚焦于你',
                            },*/
                            ai: {
                                threaten: 1.2,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) return 2;
                                    },
                                },
                            },
                        },
                        menghai: {
                            mod: {
                                maxHandcard: (player, num) => num + player.countMark('Shinano_rumeng'),
                            },
                            audio: 'ext:碧蓝航线Q/audio:2',
                            init: (player) => (player.storage.menghai = false),
                            trigger: { player: 'turnOverAfter' },
                            forced: true,
                            filter: (event, player) => !player.isTurnedOver(),
                            content() {
                                'step 0';
                                player.drawTo(player.maxHp);
                                if (!player.storage.menghai) {
                                    player.recover();
                                    event.finish();
                                } else {
                                    var list = [];
                                    lib.inpile.forEach(function (name) {
                                        if (name == 'sha') {
                                            if (player.hasUseTarget(name)) list.push(['基本', '', 'sha']);
                                            lib.inpile_nature.forEach(function (nature) {
                                                if (player.hasUseTarget({ name: name, nature: nature })) list.push(['基本', '', 'sha', nature]);
                                            });
                                        } else if (get.type(name) == 'basic' && player.hasUseTarget(name)) list.push(['基本', '', name]);
                                        else if (get.type(name) == 'trick' && player.hasUseTarget(name)) list.push(['锦囊', '', name]);
                                    });
                                    if (list.length) {
                                        var dialog = ui.create.dialog('星夜:请选择要使用的牌', [list, 'vcard'], 'hidden');
                                        player.chooseButton(dialog).set('ai', (button) => {
                                            var card = {
                                                name: button.link[2],
                                                nature: button.link[3],
                                            },
                                                player = _status.event.player;
                                            return player.getUseValue(card);
                                        });
                                    } else event.finish();
                                }
                                ('step 1');
                                if (result.buttons) {
                                    player.chooseUseTarget(true, {
                                        name: result.buttons[0].link[2],
                                        nature: result.buttons[0].link[3],
                                    });
                                }
                            },
                        },
                        g_menghai: {
                            nobracket: true,
                        },
                        Shinano_rumeng: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            init: (player) => (player.storage.youmeng = false),
                            trigger: {
                                player: ['phaseJieshuBegin', 'damageEnd'],
                            },
                            check: (event, player) => true,
                            filter(event, player) {
                                if (event.name == 'phaseJieshu') return !player.isTurnedOver();
                                else {
                                    if (player.storage.youmeng) return true;
                                    return player.isTurnedOver();
                                }
                            },
                            content() {
                                player.turnOver();
                                if (trigger.name == 'damage') {
                                    if (player.storage.youmeng) {
                                        if (player.isTurnedOver()) {
                                            player.phase('nodelay');
                                        }
                                    }
                                } else player.addMark('Shinano_rumeng');
                            },
                            marktext: '梦 ',
                            intro: {
                                content: 'mark',
                            },
                        },
                        g_youmeng: {
                            nobracket: true,
                        },
                        menggui: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter: (event, player) => player.countMark('Shinano_rumeng') > 1,
                            content() {
                                player.gainMaxHp(2);
                                player.recover(2);
                                player.storage.menghai = true;
                                player.storage.youmeng = true;
                                player.awakenSkill('menggui');
                                player.addSkillLog('menghu');
                                player.addSkillLog('kongxi');
                                player.addSkillLog('CV');
                            },
                            derivation: ['g_menghai', 'g_youmeng', 'menghu', 'kongxi', 'CV'],
                        },
                        menghu: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: { global: 'phaseZhunbeiBegin' },
                            forced: true,
                            filter: (event, player) => player.isTurnedOver(),
                            content() {
                                'step 0';
                                var num = Math.max(player.countCards('h'), 1) + 2;
                                var cards = get.cards(num);
                                event.cardh = player.getCards('h');
                                game.cardsGotoOrdering(cards);
                                player
                                    .chooseToMove()
                                    .set('list', [
                                        ['牌堆顶', cards],
                                        ['你的手牌', player.getCards('h')],
                                    ])
                                    .set('filterMove', function (from, to) {
                                        return typeof to != 'number';
                                    })
                                    .set('processAI', function (list) {
                                        var bottom = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                            return get.useful(a) - get.useful(b);
                                        }),
                                            cards = bottom.splice(0, num),
                                            top = [];
                                        const target = trigger.player;
                                        const att = get.attitude(player, target);
                                        const top = [], bottom = cards;
                                        for (const i of target.getCards('j')) {
                                            const judge = get.judge(i);
                                            bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
                                            if (bottom.length) {
                                                top.push(bottom.shift());
                                            }
                                        }
                                        bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
                                        while (bottom.length) {
                                            top.push(bottom.shift());
                                        }
                                        return [top, bottom];
                                    })
                                    .set('prompt', '梦护:用手牌交换,或调换顺序');
                                ('step 1');
                                var top = result.moved[0],
                                    lose = [];
                                var bottom = result.moved[1],
                                    gain = [];
                                bottom.forEach(function (card) {
                                    if (!event.cardh.includes(card)) gain.push(card);
                                });
                                top.forEach(function (card) {
                                    if (event.cardh.includes(card)) lose.push(card);
                                });
                                top.reverse();
                                top.forEach(function (card) {
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                });
                                if (lose.length) player.$throw(lose.length, 1000);
                                if (gain.length) player.gain(gain, 'draw');
                                game.log(player, '交换了' + get.cnNumber(lose.length) + '张手牌');
                            },
                        },
                        shengfang: {
                            mod: {
                                maxHandcard: (player, num) => (num += player.maxHp),
                            },
                            trigger: { player: ['dyingBefore', 'phaseUseAfter'] },
                            forced: true,
                            filter(event, player) {
                                return event.name == 'dying' || player.hp <= 0;
                            },
                            content() {
                                trigger.name == 'dying' ? trigger.cancel() : player.die();
                            },
                            group: 'shengfang_die',
                            subSkill: {
                                die: {
                                    trigger: { player: 'dieBegin' },
                                    forced: true,
                                    filter: (event, player) => player.countCards('h') > 0,
                                    content() {
                                        'step 0';
                                        player.chooseCardTarget({
                                            prompt: '盛放:请分配手牌',
                                            forced: true,
                                            filterCard: true,
                                            selectCard: [1, Infinity],
                                            filterTarget: lib.filter.notMe,
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            var cards = result.cards;
                                            player.line(target, 'green');
                                            player.give(cards, target);
                                        }
                                        ('step 2');
                                        if (player.countCards('h') > 0) event.goto(0);
                                    },
                                },
                            },
                        },
                        mouce: {
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter: (event) => get.type2(event.card) == 'trick',
                            content() {
                                player.chooseToGuanxing(3);
                                player.draw();
                            },
                            group: 'mouce_use',
                            subSkill: {
                                use: {
                                    enable: 'chooseToUse',
                                    usable: 1,
                                    filter(event, player) {
                                        if (
                                            !player.hasCard(function (card) {
                                                return get.type2(card) == 'trick';
                                            }, 'h') &&
                                            !player.hasSkill('mouce_limit')
                                        ) {
                                            for (var i of lib.inpile) {
                                                var type = get.type2(i);
                                                if (type == 'trick' && event.filterCard({ name: i }, player, event)) return true;
                                            }
                                        }
                                        return false;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            lib.inpile.forEach(function (name) {
                                                if (get.type(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                                else if (get.type(name) == 'delay' && event.filterCard({ name: name }, player, event)) list.push(['延时锦囊', '', name]);
                                            });
                                            return ui.create.dialog('谋策', [list, 'vcard']);
                                        },
                                        filter(button, player) {
                                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                        },
                                        check(button) {
                                            if (_status.event.parent.type != 'phase') return 1;
                                            var player = _status.event.player;
                                            if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                            return player.getUseValue({
                                                name: button.link[2],
                                                nature: button.link[3],
                                            });
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard: true,
                                                popname: true,
                                                check: (card) => 8 - get.value(card),
                                                position: 'hes',
                                                viewAs: { name: links[0][2] },
                                                precontent() {
                                                    player.addTempSkill('mouce_limit', 'phaseAfter');
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张牌当做' + get.translation(links[0][2]) + '使用';
                                        },
                                    },
                                    hiddenCard(player, name) {
                                        if (!lib.inpile.includes(name)) return false;
                                        if (player.hasSkill('mouce_limit')) return false;
                                        var type = get.type2(name);
                                        if (
                                            type == 'trick' &&
                                            !player.hasCard(function (card) {
                                                return get.type2(card) == 'trick';
                                            }, 'h') &&
                                            player.countCards('hes') > 0
                                        )
                                            return true;
                                        return false;
                                    },
                                    ai: {
                                        order: 1,
                                        result: {
                                            player(player) {
                                                return 1;
                                            },
                                        },
                                    },
                                },
                                limit: {},
                            },
                        },
                        Jintsu_jueze: {
                            trigger: { global: 'damageBegin4' },
                            filter(event, player) {
                                return event.player != player && event.num >= event.player.hp;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget: (event, player) => event.player,
                            content() {
                                'step 0';
                                trigger.player = player;
                                ('step 1');
                                var num = get.cnNumber(trigger.num);
                                var list = ['摸牌', '造成伤害', 'cancel2'];
                                player
                                    .chooseControl(list)
                                    .set(
                                        'choice',
                                        (function () {
                                            if (player.hp - trigger.num <= 0) return '摸牌';
                                            else return '造成伤害';
                                        })()
                                    )
                                    .set('prompt', '抉择:请选择一项')
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('prompt2', '摸' + num + '张牌或对至多' + num + '名其他角色造成1点伤害');
                                ('step 2');
                                if (result.control != 'cancel2') {
                                    if (result.control == '摸牌') {
                                        player.draw(trigger.num);
                                        event.finish();
                                    } else {
                                        var num = get.cnNumber(trigger.num);
                                        player
                                            .chooseTarget([1, trigger.num], function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('prompt', '抉择:请选择至多' + num + '名其他角色')
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.damageEffect(target, player, player);
                                            })
                                            .set('prompt2', '对这些角色各造成1点伤害');
                                    }
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    result.targets.sortBySeat().forEach(function (target) {
                                        target.damage().source = player;
                                    });
                                }
                            },
                        },
                        Jintsu_shenlue: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.getHistory('skipped').includes('phaseUse')) return true;
                                var history = player.getHistory('useCard').concat(player.getHistory('respond'));
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.recover();
                                player.changeHujia();
                                player.draw();
                                ('step 1');
                                var list = get.inpile2('trick');
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = ['锦囊', '', list[i]];
                                }
                                var dialog = ui.create.dialog('选择一张锦囊牌加入你的手牌', [list, 'vcard'], 'hidden');
                                player.chooseButton(dialog, true).set('ai', function (button) {
                                    var card = { name: button.link[2] };
                                    var value = get.value(card);
                                    return value;
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
                                }
                            },
                        },
                        Jintsu_moulue: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            preHidden: true,
                            filter: (event) => get.type(event.card) == 'trick' || get.type(event.card) == 'delay',
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        xuechi: {
                            enable: 'phaseUse',
                            limited: true,
                            content() {
                                'step 0';
                                player.awakenSkill('xuechi');
                                player.awakenSkill('Jintsu_shenlue');
                                player.addSkillLog('Jintsu_youdi');
                                player.changeHujia();
                                player.draw(2);
                                ('step 1');
                                player
                                    .chooseTarget('请选择至多三名你要掩护的其他角色', [1, 3], (card, player, target) => {
                                        return target != player;
                                    })
                                    .set('ai', (target) => get.attitude(player, target));
                                ('step 2');
                                if (result.bool) {
                                    for (var a = 0; a < result.targets.length; a++) {
                                        result.targets[a].addSkill('yanhu');
                                    }
                                }
                                player.addSkillLog('Jintsu_sheshen');
                                player.addSkillLog('juechang');
                                player.addTempSkill('bozang', { player: 'phaseBegin' });
                            },
                            derivation: ['Jintsu_youdi', 'Jintsu_sheshen', 'juechang', 'bozang'],
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        Jintsu_youdi: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            _priority: 20,
                            forced: true,
                            filter: (event, player) => event.source != undefined && event.source != player,
                            content() {
                                'step 0';
                                var source = trigger.source;
                                source.addMark('Jintsu_youdi', trigger.num);
                                source.addSkill('baolu');
                                ('step 1');
                                trigger.source.chooseToDiscard(trigger.source.countMark('Jintsu_youdi'), 'he', true);
                            },
                            marktext: '显',
                            intro: {
                                name: '显现',
                                content: 'mark',
                            },
                            ai: {
                                threaten: 0.01,
                                maixie_defend: true,
                                notemp: true,
                            },
                        },
                        Jintsu_sheshen: {
                            trigger: {
                                global: 'damageBegin4',
                            },
                            forced: true,
                            filter: (event, player) => event.player.hasSkill('yanhu'),
                            content() {
                                trigger.player = player;
                            },
                        },
                        yanhu: {
                            mark: true,
                            intro: {
                                content: '一位勇士在保护你!如果…那位勇士还在的话…',
                            },
                        },
                        juechang: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.chooseUseTarget('###是否发动【绝唱】？###视为使用一张无距离限制的火【杀】', { name: 'sha', nature: 'fire' }, false, 'nodistance');
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        bozang: {
                            trigger: {
                                player: 'dyingBefore',
                            },
                            forced: true,
                            content() {
                                player.recover(1 - player.hp);
                            },
                        },
                        Azumanuyan: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter: (event, player) => event.card.name == 'sha',
                            forced: true,
                            content() {
                                if (get.distance(player, trigger.target) > 2) {
                                    var id = trigger.target.playerid;
                                    var map = trigger.parent.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].extraDamage != 'number') {
                                        map[id].extraDamage = 0;
                                    }
                                    map[id].extraDamage++;
                                } else if (get.distance(player, trigger.target) < 2) trigger.parent.directHit.push(trigger.target);
                                else player.draw();
                            },
                            group: ['Azumanuyan_fire'],
                            subSkill: {
                                fire: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter: (event) => !event.nature,
                                    content() {
                                        trigger.nature = 'fire';
                                    },
                                },
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return get.distance(player, arg.target) < 2 && arg.card.name == 'sha';
                                },
                                effect: {
                                    player(card, player, target) {
                                        if (get.distance(player, target) == 2) return [1, 0, 1, 1];
                                        if (get.distance(player, target) > 2) return 2;
                                    },
                                },
                            },
                        },
                        minrui: {
                            trigger: {
                                target: 'useCardToTargeted',
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event.name == 'damage') return event.nature == 'fire';
                                else return event.player != player;
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target: (card, player, target) => [1, 1],
                                },
                            },
                        },
                        shixi: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            hiddenSkill: true,
                            filter: (event, player) => event.toShow.includes('U_81') && _status.currentPhase && player != _status.currentPhase, //QQQ
                            check: (event, player) => -get.attitude(player, _status.currentPhase),
                            content() {
                                _status.currentPhase.addMark('guanchuan', 1);
                                if (
                                    player.canUse(
                                        {
                                            name: 'sha',
                                        },
                                        _status.currentPhase,
                                        false
                                    )
                                )
                                    player.useCard(
                                        {
                                            name: 'sha',
                                            nature: 'thunder',
                                        },
                                        _status.currentPhase,
                                        false
                                    );
                            },
                        },
                        liesha: {
                            marktext: '⨁',
                            enable: 'phaseUse',
                            forced: true,
                            filter: (event, player) => !game.hasPlayer((current) => current.hasMark('liesha')),
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择你的猎杀目标', (card, player, target) => {
                                        return target != player;
                                    })
                                    .set('ai', (target) => -get.attitude(player, target));
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addMark('liesha');
                                } else player.getStat('skill').liesha--;
                            },
                            group: ['liesha_damage'],
                            subSkill: {
                                damage: {
                                    audio: 'ext:碧蓝航线Q/audio:2',
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter: (event) => event.player.hasMark('liesha') && !event.player.hasSkill('zhongchuang') && event.player.isAlive(),
                                    content() {
                                        trigger.player.removeMark('liesha');
                                        trigger.player.addSkill('zhongchuang');
                                        trigger.player.addMark('zhongchuang', 2);
                                    },
                                },
                            },
                            intro: {
                                name: '猎杀',
                                content: '你已经被……深海注意……',
                            },
                            derivation: ['zhongchuang'],
                            ai: {
                                order: 13,
                                expose: 0.3,
                                result: {
                                    player(player) {
                                        if (game.hasPlayer((current) => get.attitude(player, current) < 0)) return 1;
                                        return -1;
                                    },
                                },
                            },
                        },
                        zhongchuang: {
                            marktext: '伤',
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            filter: (event, player) => player.hasMark('zhongchuang'),
                            content() {
                                'step 0';
                                player.removeMark('zhongchuang', 1);
                                trigger.cancel();
                                ('step 1');
                                if (player.countMark('zhongchuang') == 0) player.removeSkill('zhongchuang');
                            },
                            intro: {
                                name: '重创',
                                content: '你受伤很严重欸',
                            },
                        },
                        congrong: {
                            marktext: '容',
                            mod: {
                                cardUsable: (card) => Infinity,
                            },
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter: (event, player, card) => player.countCards('hes') > 0,
                            content() {
                                'step 0';
                                player.chooseToDiscard('hes', 1, true);
                                ('step 1');
                                trigger.cancel();
                                player.addMark('congrong');
                            },
                            intro: {
                                name: '从容',
                                content: '发谋决策,从容指顾',
                            },
                        },
                        zhigu: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            enable: 'phaseUse',
                            forced: true,
                            preHidden: true,
                            filter: (event, player) => player.hasMark('congrong') > 0,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('指顾:请选择目标')
                                    .set('ai', (target) => {
                                        return get.attitude(player, target);
                                    })
                                    .set('prompt2', '移去一枚<从容>标记令一名角色摸三张牌,弃置一张牌');
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.draw(3);
                                    target.chooseToDiscard('he', true);
                                    player.removeMark('congrong');
                                } else player.getStat('skill').zhigu--;
                            },
                            ai: {
                                order: 3,
                                expose: 0.2,
                                result: {
                                    player: (player) => 1,
                                },
                            },
                        },
                        xinrui: {
                            group: ['xinrui_tao', 'xinrui_draw'],
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter: (event, player) => get.type(event.card) == 'trick',
                            content() {
                                'step 0';
                                var goon = false;
                                var info = get.info(trigger.card);
                                if (trigger.targets && !info.multitarget) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (lib.filter.targetEnabled2(trigger.card, player, players[i]) && !trigger.targets.includes(players[i])) {
                                            goon = true;
                                            break;
                                        }
                                    }
                                }
                                if (goon) {
                                    player
                                        .chooseTarget('新锐:是否额外指定一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
                                            var trigger = _status.event;
                                            if (trigger.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        })
                                        .set('targets', trigger.targets)
                                        .set('card', trigger.card);
                                } else {
                                    if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                                        event.finish();
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (!event.isMine()) game.delayx();
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.target) {
                                    trigger.targets.add(event.target);
                                }
                                event.finish();
                            },
                            subSkill: {
                                tao: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    position: 'hs',
                                    prompt: '将桃当作酒使用',
                                    filterCard: { name: 'tao' },
                                    viewAs: { name: 'jiu' },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hs', 'tao')) return false;
                                    },
                                    ai: {
                                        basic: {
                                            useful(card, i) {
                                                if (_status.event.player.hp > 1) {
                                                    if (i == 0) return 4;
                                                    return 1;
                                                }
                                                if (i == 0) return 7.3;
                                                return 3;
                                            },
                                            value(card, player, i) {
                                                if (player.hp > 1) {
                                                    if (i == 0) return 5;
                                                    return 1;
                                                }
                                                if (i == 0) return 7.3;
                                                return 3;
                                            },
                                        },
                                        order() {
                                            return get.order({ name: 'sha' }) + 0.2;
                                        },
                                        result: {
                                            target(player, target) {
                                                if (target && target.isDying()) return 2;
                                                if (target && !target.isPhaseUsing()) return 0;
                                                if (lib.config.mode == 'stone' && !player.isMin()) {
                                                    if (player.getActCount() + 1 >= player.actcount) return 0;
                                                }
                                                var shas = player.getCards('h', 'sha');
                                                if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('h', 'zhuge'))) {
                                                    return 0;
                                                }
                                                shas.sort(function (a, b) {
                                                    return get.order(b) - get.order(a);
                                                });
                                                var card;
                                                if (shas.length) {
                                                    for (var i = 0; i < shas.length; i++) {
                                                        if (lib.filter.filterCard(shas[i], target)) {
                                                            card = shas[i];
                                                            break;
                                                        }
                                                    }
                                                } else if (player.hasSha() && player.needsToDiscard()) {
                                                    if (player.countCards('h', 'hufu') != 1) {
                                                        card = { name: 'sha' };
                                                    }
                                                }
                                                if (card) {
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            return (
                                                                get.attitude(target, current) < 0 &&
                                                                target.canUse(card, current, null, true) &&
                                                                !current.hasSkillTag('filterDamage', null, {
                                                                    player: player,
                                                                    card: card,
                                                                    jiu: true,
                                                                }) &&
                                                                get.effect(current, card, target) > 0
                                                            );
                                                        })
                                                    ) {
                                                        return 1;
                                                    }
                                                }
                                                return 0;
                                            },
                                        },
                                        tag: {
                                            save: 1,
                                            recover: 0.1,
                                        },
                                    },
                                },
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    filter: (event, player) => !event.numFixed,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        xiance: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            enable: 'phaseUse',
                            filterCard: {
                                type: 'trick',
                            },
                            selectCard: 1,
                            discard: false,
                            lose: false,
                            delay: 0,
                            filter: (event, player) => player.countCards('hs', { type: 'trick' }) > 0,
                            filterTarget: (card, player, target) => player != target,
                            content() {
                                target.gain(cards, player, 'giveAuto');
                                var list = ['sha', 'shan', 'tao', 'jiu'];
                                player.gain(game.createCard(list.randomGet()), 'gain2');
                            },
                        },
                        moufa: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.moufa == true) return '锁定技,出牌阶段开始时,你从【兵临城下】、【出其不意】、【万箭齐发】中随机获得两张,你获得技能〖克敌机先〗直到下个回合开始';
                                    return '锁定技,出牌阶段开始时, 你从【无懈可击】、【增兵减灶】、【随机应变】中随机获得两张,你获得技能〖运筹千里〗直到你下个回合开始';
                                },
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.changeZhuanhuanji('moufa');
                                if (player.storage.moufa != true) {
                                    var list = ['binglinchengxiax', 'chuqibuyi', 'wanjian'];
                                    player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gain2');
                                } else {
                                    var list = ['wuxie', 'zengbin', 'suijiyingbian'];
                                    player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gain2');
                                }
                                ('step 1');
                                if (player.storage.moufa != true) {
                                    player.addTempSkill('kedijixian', { player: 'phaseUseBegin' });
                                } else {
                                    player.addTempSkill('yunchouqianli', { player: 'phaseUseBegin' });
                                }
                            },
                            derivation: ['kedijixian', 'yunchouqianli'],
                        },
                        yunchouqianli: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            trigger: {
                                global: 'damageEnd',
                            },
                            nobracket: true,
                            logTarget: 'player',
                            filter: (event, player) => event.player.isAlive(),
                            check: (event, player) => get.attitude(player, event.player) > 0,
                            content() {
                                'step 0';
                                var list = ['wuxie', 'jinchan'];
                                trigger.player.gain(game.createCard(list.randomGet()), 'gain2');
                                ('step 1');
                                var list = ['youdishenru', 'caochuan'];
                                player.gain(game.createCard(list.randomGet()), 'gain2');
                            },
                            mark: true,
                            intro: {
                                content: '当有角色受到伤害后,你可以令其从【无懈可击】、【金蝉脱壳】中随机获得一张,你从【诱敌深入】、【草船借箭】中随机获得一张',
                            },
                        },
                        kedijixian: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            preHidden: true,
                            nobracket: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player.isAlive() && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && (player.hasSha() || (_status.connectMode && player.countCards('h') > 0));
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '克敌机先:是否对' + get.translation(trigger.player) + '使用一张杀？'
                                    )
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', trigger.player);
                                ('step 1');
                                if (result.bool) {
                                    var list = ['huoshaolianying', 'shuiyanqijunx'];
                                    player.gain(game.createCard(list.randomGet()), 'gain2');
                                }
                            },
                            mark: true,
                            intro: {
                                content: '当其他角色准备阶段开始时,你可以对其使用一张【杀】,你从【火烧连营】、【水淹七军】中随机获得一张',
                            },
                        },
                        duochuan: {
                            mod: {
                                maxHandcard: (player, num) => player.maxHp,
                            },
                            audio: 'ext:碧蓝航线Q/audio:1',
                            group: ['duochuan_die'],
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.loseHp();
                            },
                            subSkill: {
                                die: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    content() {
                                        'step 0';
                                        player.chooseTarget('请选择一名你给予厚望的目标', '令其获得技能【天策】', true, lib.filter.notMe).set('ai', function (target) {
                                            return get.attitude(_status.event.player, target);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            target.addSkillLog('tiance');
                                        }
                                    },
                                },
                            },
                            derivation: ['tiance'],
                        },
                        tiance: {
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                var list = ['guohe', 'shunshou', 'lebu', 'bingliang'];
                                player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gian2');
                            },
                            ai: {
                                order: 13,
                                result: {
                                    player: (player) => 1,
                                },
                                threaten: 1.8,
                            },
                        },
                        jiaoxiang: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            group: ['jiaoxiang_use'],
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (player.hasUseTarget('sha', false)) {
                                    if (player.hasSkill('jiaoxiang_disable')) return false;
                                    return true;
                                }
                            },
                            content() {
                                player.chooseUseTarget('###是否发动【交响】？###视为使用一张无距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                                player.addTempSkill('jiaoxiang_disable', 'roundStart');
                            },
                            subSkill: {
                                use: {
                                    audio: 'ext:碧蓝航线Q/audio:true',
                                    audioname2: {
                                        Friedrich_der_Große: 'jiaoxiang',
                                    },
                                    enable: 'phaseUse',
                                    usable: 1,
                                    selectTarget: 1,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return get.distance(current, player) < 2 && current != player && player.canUse({ name: 'sha' }, current, false);
                                        });
                                    },
                                    filterTarget(card, player, target) {
                                        return get.distance(target, player) < 2 && target != player && player.canUse({ name: 'sha' }, target, false);
                                    },
                                    prompt: '出牌阶段限一次,请选择一名与你距离小于2的角色,视为对其使用一张【杀】',
                                    content() {
                                        player.useCard({ name: 'sha' }, target, false);
                                    },
                                    ai: {
                                        order: 6,
                                        result: {
                                            player(player) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return get.effect(current, { name: 'sha' }, player, player);
                                                    })
                                                )
                                                    return 1;
                                            },
                                            target: () => -1,
                                        },
                                    },
                                },
                                disable: {
                                    mark: true,
                                    intro: {
                                        content: '本轮已发动',
                                    },
                                },
                            },
                            ai: {
                                maixie_defend: true,
                                skillTagFilter: (player) => !player.hasSkill('jiaoxiang_disable'),
                                threaten: 0.2,
                            },
                        },
                        zouming: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zouming == true) return '锁定技,当你使用杀时,此杀为雷电伤害且不可被响应';
                                    return '锁定技,当你使用杀时,此杀伤害+1且为火焰伤害';
                                },
                            },
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                player.changeZhuanhuanji('zouming');
                                if (player.storage.zouming != true) {
                                    trigger.card.nature = 'thunder';
                                    trigger.directHit = true;
                                } else {
                                    trigger.card.nature = 'fire';
                                    trigger.baseDamage++;
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter: (player) => player.storage.zouming != true,
                                effect: {
                                    player(card, player, target) {
                                        if (player.storage.zouming == true && card.name == 'sha') return 2;
                                    },
                                },
                                threaten: 0.6,
                            },
                        },
                        kuangxiang: {
                            trigger: {
                                source: 'damageBegin1',
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'damage') return player.hp > 4 && event.card && event.card.name == 'sha';
                                else return player.hp < 3 && !event.numFixed;
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'sha' && player.hp > 4) return 2;
                                    },
                                },
                                threaten: 0.4,
                            },
                        },
                        shuguang: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            marktext: '曙',
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择一位需要你鼓舞的革命志士')
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    })
                                    .set('prompt2', '你与其各获得一张【酒】,并令其获得〖鼓舞〗直到其回合结束');
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addTempSkill('guwu', { player: 'phaseJieshuEnd' });
                                } else {
                                    player.getStat('skill').shuguang--;
                                    event.finish();
                                }
                                ('step 2');
                                var target = result.targets[0];
                                player.gain(game.createCard('jiu'), 'gain2');
                                target.gain(game.createCard('jiu'), 'gain2');
                                if (player.countMark('shuguang') < 3) {
                                    player.addMark('shuguang');
                                    if (player.countMark('shuguang') == 3) {
                                        player.gainMaxHp();
                                        player.recover();
                                    }
                                }
                            },
                            group: ['shuguang_complex'],
                            subSkill: {
                                complex: {
                                    mod: {
                                        cardUsable(card, player) {
                                            if (card.name == 'jiu' && player.countMark('shuguang') > 1) return Infinity;
                                        },
                                    },
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countMark('shuguang') > 0) {
                                            return !event.numFixed;
                                        } else return false;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                            intro: {
                                name: '跨越时代的亮光',
                                content: '作为司晨之人,我将为大家带来曙光',
                            },
                            ai: {
                                order: 13,
                                expose: 0.2,
                                result: {
                                    player: () => 1,
                                    target: () => 1,
                                },
                            },
                            derivation: ['guwu'],
                        },
                        guwu: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return (num += 1);
                                },
                            },
                            group: ['guwu_draw', 'guwu_shadamage', 'guwu_cancel'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'drawBegin',
                                    },
                                    _priority: 100,
                                    forced: true,
                                    filter: (event, player) => !event.numFixed,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                shadamage: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter: (event, card, player) => event.card && event.card.name == 'sha',
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (card.name == 'sha') return 2;
                                            },
                                        },
                                    },
                                },
                                cancel: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter: (event, player) => !player.hasSkill('guwu_disable'),
                                    content() {
                                        player.addTempSkill('guwu_disable', { player: 'phaseJieshuEnd' });
                                    },
                                    ai: {
                                        maixie: true,
                                        skillTagFilter: (player) => !player.hasSkill('guwu_disable'),
                                    },
                                },
                                disable: {
                                    mark: true,
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    _priority: 10,
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                    intro: {
                                        content: '我将扛下接下来的所有',
                                    },
                                    ai: {
                                        nofire: true,
                                        nothunder: true,
                                        nodamage: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'damage')) return [0, 0];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        guishen: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge((card) => (card.suit == 'spade' ? 1 : -1));
                                ('step 1');
                                if (result.bool) {
                                    trigger.baseDamage += 2;
                                    trigger.card.nature = 'thunder';
                                    trigger.directHit = true;
                                }
                            },
                        },
                        yanwu: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter: (event, player) => player != _status.currentPhase && player.hp == 1,
                            content() {
                                'step 0';
                                player.link(false);
                                ('step 1');
                                player.turnOver(false);
                                ('step 2');
                                player.phase('nodelay');
                                ('step 3');
                                if (!player.storage._disableJudge) player.disableJudge();
                                ('step 4');
                                player.draw(3);
                                ('step 5');
                                player.addTempSkill('guishenyanwu', { player: 'phaseEnd' });
                            },
                            derivation: ['guishenyanwu'],
                            ai: {
                                maixie_defend: true,
                                threaten: 0.6,
                            },
                        },
                        guishenyanwu: {
                            mod: {
                                cardUsable: (card) => Infinity,
                                targetInRange: () => true,
                            },
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            nobracket: true,
                            filter: (event) => event.nature != 'thunder',
                            content() {
                                trigger.nature = 'thunder';
                            },
                            group: ['guishenyanwu_cancel', 'guishenyanwu_damage', 'guishenyanwu_recover', 'guishenyanwu_fuyuan', 'guishenyanwu_turn', 'guishenyanwu_link'],
                            subSkill: {
                                cancel: {
                                    trigger: {
                                        player: ['phaseJudgeBefore', 'phaseDiscardBefore', 'damageBefore', 'damageBegin4'],
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        nofire: true,
                                        nothunder: true,
                                        nodamage: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'damage')) return [0, 0];
                                            },
                                        },
                                    },
                                },
                                damage: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    _priority: 20,
                                    filter(event, player) {
                                        return event.player != player && event.player.hp > player.hp;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (get.tag(card, 'damage') && target.hp > player.hp) return 2;
                                            },
                                        },
                                    },
                                },
                                recover: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    filter(event, player) {
                                        return event.player != player && event.player.hp > player.hp;
                                    },
                                    content() {
                                        player.recover();
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (get.tag(card, 'damage') && target.hp > player.hp) return [1, 1];
                                            },
                                        },
                                    },
                                },
                                fuyuan: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                                        for (var i = 0; i < list.length; i++) {
                                            if (player.isDisabled(list[i])) player.enableEquip(list[i]);
                                        }
                                        ('step 1');
                                        if (player.storage._disableJudge) player.enableJudge();
                                    },
                                },
                                turn: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    popup: false,
                                    filter: (event, player) => !player.isTurnedOver(),
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                link: {
                                    trigger: {
                                        player: 'linkBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    popup: false,
                                    filter: (event, player) => !player.isLinked(),
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        jinren: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            check(event, player) {
                                if (player.hp > 2) {
                                    if (player.countCards > player.maxHp) {
                                        return player.hasCard((card) => get.value(card) > 6);
                                    } else {
                                        return player.hasCard((card) => get.value(card) > 8);
                                    }
                                } else return false;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                player.skip('phaseJudge');
                                player.skip('phaseDraw');
                                ('step 1');
                                player
                                    .chooseTarget('烬刃:请选择目标', [1, 3], (card, player, target) => {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    })
                                    .set('prompt2', '选择至多三名目标,对其各造成1点伤害并弃置其区域内一张牌');
                                ('step 2');
                                if (result.bool) {
                                    result.targets.sortBySeat().forEach((target) => {
                                        player.line(target, 'fire');
                                        target.damage().source = player;
                                        player.discardPlayerCard('hej', target, true);
                                    });
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1,
                            },
                        },
                        Hiryu_zhanyi: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                return player != _status.currentPhase && !player.getStorage('Hiryu_zhanyi').includes(event.card.name);
                            },
                            content() {
                                player.markAuto('Hiryu_zhanyi', [trigger.card.name]);
                            },
                            intro: {
                                content: '已记录牌名:$',
                            },
                            group: 'Hiryu_zhanyi_use',
                            subSkill: {
                                use: {
                                    enable: 'phaseUse',
                                    audio: 'ext:碧蓝航线Q/audio:true',
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        var storage = player.getStorage('Hiryu_zhanyi');
                                        if (storage.length) {
                                            for (var i of storage) {
                                                if (
                                                    get.discardPile(function (card) {
                                                        return card.name == i;
                                                    })
                                                )
                                                    return true;
                                            }
                                        } else return false;
                                    },
                                    content() {
                                        'step 0';
                                        var dialog = [get.prompt('Hiryu_zhanyi')];
                                        var storage = player.getStorage('Hiryu_zhanyi');
                                        dialog.push([storage, 'vcard']);
                                        var num = player.getDamagedHp() + 1;
                                        player
                                            .chooseButton(dialog, [1, num])
                                            .set('ai', function (button) {
                                                var player = _status.event.player,
                                                    name = button.link[2];
                                                var getn = function (name) {
                                                    return (
                                                        ui.selected.buttons.filter(function (button) {
                                                            return button.link[2] == name;
                                                        }).length + player.countCards('h', name)
                                                    );
                                                };
                                                var val = player.getUseValue(name);
                                                if (name == 'tao' && getn(name) >= player.getDamagedHp()) return 0;
                                                if (name == 'sha' && getn(name) >= player.getCardUsable('sha')) return 0;
                                                return val;
                                            })
                                            .set('filterButton', function (button) {
                                                if (
                                                    get.discardPile(function (card) {
                                                        return card.name == button.link[2];
                                                    })
                                                )
                                                    return true;
                                                return false;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var cards = [];
                                            result.links.forEach(function (link) {
                                                var card = get.discardPile(function (card) {
                                                    return card.name == link[2];
                                                });
                                                if (card) cards.push(card);
                                            });
                                            if (cards.length) {
                                                player.gain(cards, 'gain2');
                                            } else player.getStat('skill').Hiryu_zhanyi_use--;
                                        } else player.getStat('skill').Hiryu_zhanyi_use--;
                                    },
                                    ai: {
                                        order: 1,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        jueyi: {
                            enable: 'chooseToUse',
                            audio: 'ext:碧蓝航线Q/audio:true',
                            limited: true,
                            filter(event, player) {
                                if (player.storage.jueyi) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                } else if (event.parent.name == 'phaseUse') {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('jueyi');
                                var num = player.getDamagedHp();
                                if (num > 0) player.draw(num);
                                ('step 1');
                                player.hp = player.maxHp;
                                player.addSkillLog('Hiryu_guozai');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                            derivation: ['Hiryu_guozai'],
                            ai: {
                                order: 0.5,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        return 0;
                                    },
                                },
                                skillTagFilter(player, tag, target) {
                                    if (player != target || player.storage.jueyi) return false;
                                },
                                save: true,
                            },
                        },
                        Hiryu_guozai: {
                            mod: {
                                cardUsable: (card) => Infinity,
                                targetInRange: () => true,
                                aiOrder(player, card, num) {
                                    if (get.tag(card, 'damage')) return num + 10;
                                },
                            },
                            trigger: {
                                player: 'die',
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                var targets = game.filterPlayer((current) => get.distance(player, current) <= 2).sortBySeat();
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].damage(2, 'fire');
                                }
                            },
                            group: ['Hiryu_guozai_use', 'Hiryu_guozai_increase'],
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.draw(2);
                                        ('step 1');
                                        player.isDamaged() ? player.loseMaxHp() : player.loseHp();
                                    },
                                },
                                increase: {
                                    trigger: {
                                        source: 'damageBegin1',
                                        player: 'phaseDiscardBegin',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.name == 'damage' ? trigger.num++ : trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (get.tag(card, 'damage')) return 2;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        Javelin_tuxi: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.countCards('hes') > 0 && event.player != player && player.canUse({ name: 'sha' }, event.player) && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('hes', true);
                                ('step 1');
                                player.useCard({ name: 'sha' }, trigger.player);
                            },
                            group: ['Javelin_tuxi_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    forced: true,
                                    filter: (event, player) => event.getParent(3).name == 'Javelin_tuxi',
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        pini: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            enable: 'phaseUse',
                            filter: (event, player) => player.countMark('pini_target') > 2,
                            content() {
                                'step 0';
                                player.removeMark('pini_target', 3);
                                ('step 1');
                                var targets = game.filterPlayer((current) => current != player);
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].damage('thunder').source = player;
                                }
                            },
                            group: ['pini_cancel', 'pini_target'],
                            subSkill: {
                                cancel: {
                                    audio: 'ext:碧蓝航线Q/audio:1',
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    logTarget: 'player',
                                    filter: (event, player) => player != event.player && event.targets.length > 1,
                                    check: (event, player) => -get.attitude(player, event.player),
                                    content() {
                                        trigger.targets.remove(player);
                                        trigger.parent.triggeredTargets2.remove(player);
                                        player.line(trigger.player);
                                        trigger.player.damage('thunder').source = player;
                                    },
                                    ai: {
                                        expose: 0.2,
                                    },
                                },
                                target: {
                                    marktext: '睥',
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    filter: (event, player) => event.targets.length == 1,
                                    content() {
                                        player.addMark('pini_target');
                                    },
                                    intro: {
                                        name: '睥睨',
                                        content: '睥睨众生,傲视苍穹',
                                    },
                                },
                            },
                        },
                        Monarch_dili: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init: (player) => (player.storage.Monarch_dili = false),
                            filter(event, player) {
                                if (player.storage.Monarch_dili) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('Monarch_dili');
                                player.storage.Monarch_dili = true;
                                ('step 1');
                                player.draw(3);
                                ('step 2');
                                if (player.hp < 3) {
                                    player.recover(3 - player.hp);
                                }
                                ('step 3');
                                player.addSkillLog('baofa');
                            },
                            intro: {
                                content: 'limited',
                            },
                            derivation: ['baofa'],
                            ai: {
                                order: 1,
                                skillTagFilter(player, tag, target) {
                                    if (player != target || player.storage.Monarch_dili) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.Monarch_dili) return 0.6;
                                },
                            },
                        },
                        baofa: {
                            mod: {
                                maxHandcard: (player, num) => player.maxHp,
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + Math.max(0, player.maxHp - player.hp);
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            _priority: 20,
                            filter: (event, target) => !event.numFixed,
                            content() {
                                trigger.num += Math.max(0, player.maxHp - player.hp);
                            },
                            group: ['baofa_recover'],
                            subSkill: {
                                recover: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                        },
                        jueze: {
                            mod: {
                                maxHandcard: (player, num) => (num += player.countMark('jueze')),
                            },
                            audio: 'ext:碧蓝航线Q/audio:2',
                            marktext: '择',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter: (event, player) => event.num >= player.hp,
                            check(event, player) {
                                if (player.hp == 1) return false;
                                if (
                                    event.num == player.hp &&
                                    player.countCards('hs', (card) => {
                                        return get.tag(card, 'save') && player.canUse(card, player);
                                    }) > 0
                                )
                                    return false;
                                return true;
                            },
                            content() {
                                player.loseMaxHp();
                                trigger.cancel();
                                player.addMark('jueze');
                                player.draw();
                            },
                            group: ['jueze_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    _priority: 20,
                                    filter: (event, target) => !event.numFixed,
                                    content() {
                                        trigger.num += player.countMark('jueze');
                                    },
                                },
                            },
                            intro: {
                                name: '抉择',
                                content: '艰难且苦涩',
                            },
                        },
                        Sakawa_lingji: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter: (event) => event.card.name == 'youdishenru' || event.card.name == 'chuqibuyi',
                            content() {
                                trigger.nowuxie = true;
                            },
                            group: ['Sakawa_lingji_round'],
                            subSkill: {
                                round: {
                                    audio: 'ext:碧蓝航线Q/audio:2',
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.hp < 2) {
                                            player.recover();
                                            player.draw(2);
                                        } else {
                                            player.gain(game.createCard('suijiyingbian'), 'gain2');
                                            player.addTempSkill('Sakawa_lingji_respond', 'roundStart');
                                        }
                                        ('step 1');
                                        var num = 0;
                                        player.getAllHistory('sourceDamage', (evt) => (num += evt.num));
                                        if (num >= 6) {
                                            player.gain(game.createCard('chuqibuyi'), 'gain2');
                                            player.addTempSkill('Sakawa_lingji_sha', 'roundStart');
                                        }
                                    },
                                },
                                respond: {
                                    trigger: {
                                        player: 'respond',
                                    },
                                    forced: true,
                                    content() {
                                        player.gain(game.createCard('youdishenru'), 'gian2');
                                    },
                                },
                                sha: {
                                    enable: 'phaseUse',
                                    prompt: '将杀当作出其不意使用',
                                    viewAsFilter: (player) => player.countCards('hs', 'sha') > 0,
                                    viewAs: {
                                        name: 'chuqibuyi',
                                    },
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    position: 'hs',
                                    check: (card) => 7 - get.value(card),
                                    ai: {
                                        basic: {
                                            order: 5,
                                            useful: 2,
                                            value: 6,
                                        },
                                        yingbian(card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                })
                                            )
                                                return 6;
                                            return 0;
                                        },
                                        result: {
                                            target(player, target, cardx) {
                                                if (player.hasSkillTag('viewHandcard', null, target, true))
                                                    return target.countCards('h', function (card) {
                                                        return card.suit != cardx.suit;
                                                    }) > 0
                                                        ? -1.5
                                                        : 0;
                                                return -1.4;
                                            },
                                        },
                                        tag: {
                                            damage: 1,
                                        },
                                    },
                                },
                            },
                        },
                        Sakawa_Noshiro_xinfu: {
                            marktext: '欣',
                            mod: {
                                maxHandcard: (player, num) => (num += player.countMark('Sakawa_Noshiro_xinfu')),
                            },
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter: (event, player, card) => player.countMark('Sakawa_Noshiro_xinfu') < 3 && player.countCards('hes') > 0,
                            content() {
                                'step 0';
                                player.chooseToDiscard('hes', 1, true);
                                ('step 1');
                                trigger.cancel();
                                player.addMark('Sakawa_Noshiro_xinfu');
                            },
                            group: ['Sakawa_Noshiro_xinfu_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    filter: (event, target) => !event.numFixed,
                                    content() {
                                        trigger.num += player.countMark('Sakawa_Noshiro_xinfu');
                                    },
                                },
                            },
                            intro: {
                                name: '欣赴',
                                content: '欣然奔赴,指顾从容',
                            },
                        },
                        Sakawa_Noshiro_yingji: {
                            enable: 'phaseUse',
                            forced: true,
                            preHidden: true,
                            filter: (event, player) => player.hasMark('Sakawa_Noshiro_xinfu') > 0,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('应机:请选择目标')
                                    .set('ai', (target) => {
                                        return get.attitude(player, target);
                                    })
                                    .set('prompt2', '移去一枚<欣赴>标记令一名角色摸三张牌,弃置一张牌,你获得一张【出其不意】');
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.draw(3);
                                    target.chooseToDiscard('he', true);
                                    player.gain(game.createCard('chuqibuyi'), 'gain2');
                                    player.removeMark('Sakawa_Noshiro_xinfu');
                                } else player.getStat('skill').Sakawa_Noshiro_yingji--;
                            },
                            group: ['Sakawa_Noshiro_yingji_linghuo', 'Sakawa_Noshiro_yingji_nowuxie', 'Sakawa_Noshiro_yingji_target'],
                            subSkill: {
                                linghuo: {
                                    trigger: {
                                        player: 'respond',
                                    },
                                    forced: true,
                                    content() {
                                        player.gain(game.createCard('youdishenru'), 'gian2');
                                    },
                                },
                                nowuxie: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter: (event) => event.card.name == 'youdishenru' || event.card.name == 'chuqibuyi',
                                    content() {
                                        trigger.nowuxie = true;
                                    },
                                },
                                target: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.gain(game.createCard('suijiyingbian'), 'gain2');
                                    },
                                },
                            },
                            ai: {
                                order: 3,
                                expose: 0.2,
                                result: {
                                    player: (player) => 1,
                                },
                            },
                        },
                        Sakawa_Noshiro_xinrui: {
                            mod: {
                                cardUsable: (card) => Infinity,
                            },
                            group: ['xinrui_tao'],
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter: (event, player) => get.type(event.card) == 'trick',
                            content() {
                                'step 0';
                                var goon = false;
                                var info = get.info(trigger.card);
                                if (trigger.targets && !info.multitarget) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (lib.filter.targetEnabled2(trigger.card, player, players[i]) && !trigger.targets.includes(players[i])) {
                                            goon = true;
                                            break;
                                        }
                                    }
                                }
                                if (goon) {
                                    player
                                        .chooseTarget('新锐:是否额外指定一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
                                            var trigger = _status.event;
                                            if (trigger.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        })
                                        .set('targets', trigger.targets)
                                        .set('card', trigger.card);
                                } else {
                                    if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                                        event.finish();
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (!event.isMine()) game.delayx();
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.target) {
                                    trigger.targets.add(event.target);
                                }
                                event.finish();
                            },
                            subSkill: {
                                tao: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    position: 'hs',
                                    prompt: '将桃当作酒使用',
                                    filterCard: {
                                        name: 'tao',
                                    },
                                    viewAs: {
                                        name: 'jiu',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hs', 'tao')) return false;
                                    },
                                    ai: {
                                        basic: {
                                            useful(card, i) {
                                                if (_status.event.player.hp > 1) {
                                                    if (i == 0) return 4;
                                                    return 1;
                                                }
                                                if (i == 0) return 7.3;
                                                return 3;
                                            },
                                            value(card, player, i) {
                                                if (player.hp > 1) {
                                                    if (i == 0) return 5;
                                                    return 1;
                                                }
                                                if (i == 0) return 7.3;
                                                return 3;
                                            },
                                        },
                                        order() {
                                            return get.order({ name: 'sha' }) + 0.2;
                                        },
                                        result: {
                                            target(player, target) {
                                                if (target && target.isDying()) return 2;
                                                if (target && !target.isPhaseUsing()) return 0;
                                                if (lib.config.mode == 'stone' && !player.isMin()) {
                                                    if (player.getActCount() + 1 >= player.actcount) return 0;
                                                }
                                                var shas = player.getCards('h', 'sha');
                                                if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('h', 'zhuge'))) {
                                                    return 0;
                                                }
                                                shas.sort(function (a, b) {
                                                    return get.order(b) - get.order(a);
                                                });
                                                var card;
                                                if (shas.length) {
                                                    for (var i = 0; i < shas.length; i++) {
                                                        if (lib.filter.filterCard(shas[i], target)) {
                                                            card = shas[i];
                                                            break;
                                                        }
                                                    }
                                                } else if (player.hasSha() && player.needsToDiscard()) {
                                                    if (player.countCards('h', 'hufu') != 1) {
                                                        card = { name: 'sha' };
                                                    }
                                                }
                                                if (card) {
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            return (
                                                                get.attitude(target, current) < 0 &&
                                                                target.canUse(card, current, null, true) &&
                                                                !current.hasSkillTag('filterDamage', null, {
                                                                    player: player,
                                                                    card: card,
                                                                    jiu: true,
                                                                }) &&
                                                                get.effect(current, card, target) > 0
                                                            );
                                                        })
                                                    ) {
                                                        return 1;
                                                    }
                                                }
                                                return 0;
                                            },
                                        },
                                        tag: {
                                            save: 1,
                                            recover: 0.1,
                                        },
                                    },
                                },
                            },
                        },
                        Jeanne_yinling: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 3],
                            targetprompt: ['技能失效', '回复体力', '使用杀'],
                            multitarget: true,
                            multiline: true,
                            filterTarget: lib.filter.notMe,
                            content() {
                                'step 0';
                                player.draw();
                                player.recover();
                                targets[0].addTempSkill('fengyin', 'phaseEnd');
                                if (targets.length > 1) {
                                    targets[1].recover();
                                    targets[1].addSkill('Jeanne_yinling_2');
                                    if (targets[0].countGainableCards(targets[1], 'hej') > 0) {
                                        targets[1]
                                            .chooseBool()
                                            .set('ai', function () {
                                                var target = targets[0],
                                                    player = targets[1];
                                                return get.attitude(player, target) <= 0;
                                            })
                                            .set('prompt', '引领:是否获得' + get.translation(targets[0]) + '区域内一张牌？');
                                    } else {
                                        if (targets.length > 2) event.goto(2);
                                        else event.finish();
                                    }
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    targets[1].line(targets[0]);
                                    targets[1].gainPlayerCard(targets[0], true, 'hej');
                                }
                                if (targets.length > 2) {
                                    targets[2].draw(2);
                                    targets[2].addSkill('Jeanne_yinling_1');
                                    if (targets[2].canUse({ name: 'sha' }, targets[0], false)) {
                                        targets[2]
                                            .chooseBool()
                                            .set('ai', function () {
                                                var target = targets[0],
                                                    player = targets[2];
                                                return get.effect(target, { name: 'sha' }, player, player) > 0;
                                            })
                                            .set('prompt', '引领:是否视为对' + get.translation(targets[0]) + '使用一张杀？');
                                    } else event.finish();
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    targets[2].line(targets[0]);
                                    targets[2].useCard({ name: 'sha' }, targets[0], false);
                                }
                            },
                            ai: {
                                order: 8.5,
                                expose: 0.2,
                                result: {
                                    player(player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) < 0;
                                            })
                                        )
                                            return 1;
                                        else return -1;
                                    },
                                    target(player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            return -1;
                                        } else return 1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    trigger: { player: 'phaseBegin' },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        game.updateRoundNumber();
                                        var next = player.phaseUse();
                                        event.next.remove(next);
                                        trigger.next.push(next);
                                        ('step 1');
                                        player.removeSkill('Jeanne_yinling_1');
                                    },
                                    intro: {
                                        content: '回合开始时额外执行一个出牌阶段',
                                    },
                                },
                                2: {
                                    mark: true,
                                    trigger: { player: 'phaseBegin' },
                                    forced: true,
                                    content() {
                                        player.skip('phaseDiscard');
                                        player.removeSkill('Jeanne_yinling_2');
                                    },
                                    intro: {
                                        content: '跳过弃牌阶段',
                                    },
                                },
                            },
                        },
                        daogao: {
                            marktext: '祷',
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: { global: 'damageBegin4' },
                            logTarget: (event, player) => event.player,
                            prompt2: () => '移去一枚<祷告>标记防止此伤害,并与其各摸一张牌',
                            filter: (event, player) => player.countMark('daogao') > 0 && event.player.hasSkill('daogao_mark'),
                            check(event, player) {
                                if (event.player == player && event.nature == 'fire') {
                                    if (player.hp - (event.num + 1) > 0) return false;
                                    return true;
                                } else return true;
                            },
                            content() {
                                trigger.cancel();
                                game.asyncDraw([player, trigger.player]);
                                player.removeMark('daogao');
                            },
                            group: ['daogao_use', 'daogao_clear'],
                            subSkill: {
                                use: {
                                    audio: 'ext:碧蓝航线Q/audio:1',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        'step 0';
                                        player.addMark('daogao', player.maxHp);
                                        player
                                            .chooseTarget([1, player.maxHp])
                                            .set('ai', (target) => {
                                                var player = _status.event.player;
                                                return get.attitude(player, target);
                                            })
                                            .set('prompt', '请选择你为其祈求护佑的角色');
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets.forEach((target) => {
                                                target.storage.daogao_mark = player;
                                                target.addSkill('daogao_mark');
                                            });
                                        } else player.getStat('skill').daogao_use--;
                                    },
                                    ai: {
                                        order: 13,
                                        expose: 0.4,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                mark: {
                                    mark: true,
                                    intro: {
                                        content: '你得到了$为你祈求的护佑',
                                    },
                                },
                                clear: {
                                    trigger: { player: 'phaseUseBegin' },
                                    forced: true,
                                    filter: (event, player) => game.hasPlayer((current) => current.hasSkill('daogao_mark')),
                                    content() {
                                        game.filterPlayer(function (current) {
                                            return current.hasSkill('daogao_mark');
                                        })
                                            .sortBySeat()
                                            .forEach(function (target) {
                                                target.removeSkill('daogao_mark');
                                            });
                                        player.azureClearMark('daogao');
                                    },
                                },
                            },
                            intro: {
                                name: '祷告',
                                content: '天佑鸢尾!',
                            },
                        },
                        Jeanne_yuhuo: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            trigger: { player: 'damageEnd' },
                            _priority: 10,
                            forced: true,
                            filter: (event) => event.nature == 'fire',
                            content() {
                                player.gainMaxHp();
                            },
                            group: 'Jeanne_yuhuo_damage',
                            subSkill: {
                                damage: {
                                    trigger: { player: 'damageBegin3' },
                                    _priority: 20,
                                    forced: true,
                                    filter: (event) => event.nature == 'fire',
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'fireDamge')) return [1, 1, 1, 1];
                                    },
                                },
                            },
                        },
                        Royal_Fortune_jiexun: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择一名要恪守<罗伯茨船规>的其他角色', true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', (target) => -get.attitude(_status.event.player, target));
                                ('step 1');
                                var target = result.targets[0];
                                player.storage.Royal_Fortune_jiexun_keshou = target;
                                player.addTempSkill('Royal_Fortune_jiexun_keshou', { player: 'phaseUseBegin' });
                            },
                            subSkill: {
                                keshou: {
                                    charlotte: true,
                                    trigger: {
                                        global: 'gainEnd',
                                    },
                                    logTarget: (event, player) => event.player,
                                    filter(event, player, card) {
                                        var target = player.storage.Royal_Fortune_jiexun_keshou;
                                        var evt = event.getParent('phaseDraw');
                                        if (event.player != target) return false;
                                        if (evt && evt.name == 'phaseDraw' && _status.currentPhase == target) return false;
                                        if (target.countCards('h') <= Math.max(1, target.hp)) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var num = trigger.player.countCards('h') - Math.max(1, trigger.player.hp);
                                        player.gainPlayerCard(trigger.player, true, num, 'hej');
                                        ('step 1');
                                        if (trigger.player.countCards('h') > Math.max(1, trigger.player.hp)) {
                                            event.bool = true;
                                            var num = trigger.player.countCards('h') - Math.max(1, trigger.player.hp);
                                            trigger.player.chooseToDiscard('h', num, true);
                                        }
                                        ('step 2');
                                        if (event.bool) {
                                            player.chooseBool('诫训:是否对' + get.translation(trigger.player) + '造成1点伤害？').set('ai', () => -get.attitude(player, trigger.player));
                                        } else event.finish();
                                        ('step 3');
                                        if (result.bool) {
                                            trigger.player.damage().source = player;
                                        }
                                    },
                                    intro: {
                                        content: '$正恪守<罗伯茨船规>',
                                    },
                                },
                            },
                        },
                        Royal_Fortune_haihu: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            _priority: 20,
                            filter: (event, player) => player.isTurnedOver(),
                            content() {
                                trigger.num--;
                            },
                            group: ['Royal_Fortune_haihu_cancel'],
                            subSkill: {
                                cancel: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    filter: (event, player) => event.num >= player.hp && !player.isTurnedOver(),
                                    content() {
                                        'step 0';
                                        player.chooseBool('是否发动〖海护〗？', '将你的武将牌翻面,防止此伤害');
                                        ('step 1');
                                        if (result.bool) {
                                            player.turnOver();
                                            trigger.cancel();
                                        } else event.finish();
                                    },
                                },
                            },
                        },
                        suibing: {
                            marktext: '冰',
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 3],
                            multitarget: true,
                            multiline: true,
                            filterTarget: (card, player, target) => player != target,
                            content() {
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].addMark('suibing');
                                }
                            },
                            group: ['suibing_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter: (event, player) => event.player.hasMark('suibing'),
                                    content() {
                                        'step 0';
                                        event.count = trigger.player.countMark('suibing');
                                        trigger.player.removeMark('suibing', event.count);
                                        ('step 1');
                                        if (trigger.player.isAlive()) {
                                            trigger.player.damage('ice').source = player;
                                            player.draw(event.count);
                                        } else {
                                            player.draw(event.count);
                                        }
                                    },
                                },
                            },
                            intro: {
                                name: '寒冰',
                                content: '这体现了意志,不是吗？',
                            },
                            ai: {
                                order: 11,
                                expose: 0.3,
                                result: {
                                    target: (player, target) => -1,
                                },
                            },
                        },
                        bingwu: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            _priority: 20,
                            firstDo: true,
                            forced: true,
                            content() {
                                'step 0';
                                player.judge((card) => (get.color(card) != 'black' ? 1 : -1));
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    event.finish();
                                }
                                ('step 2');
                                player.chooseBool('冰舞:是否打出一张闪以防止伤害？');
                                ('step 3');
                                if (result.bool) {
                                    player.chooseToRespond({ name: 'shan' });
                                }
                                ('step 4');
                                if (result.bool) {
                                    trigger.cancel();
                                    game.log(player, '回避了这一击');
                                }
                            },
                            group: ['bingwu_before'],
                            subSkill: {
                                before: {
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    filter: (event, player) => event.player != player,
                                    prompt2: '当你成为其他角色卡牌的目标时,你可以进行一次判定,若你判定结果不为黑色,则取消成为目标,如果判定结果为黑色,你可以打出一张【闪】取消成为目标',
                                    check: (event, player) => get.effect(player, event.card, event.player, player) <= 0,
                                    content() {
                                        'step 0';
                                        player.judge((card) => (get.color(card) != 'black' ? 1 : -1));
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.cancel();
                                            event.finish();
                                        }
                                        ('step 2');
                                        player.chooseBool('冰舞:是否打出一张闪以取消成为目标？');
                                        ('step 3');
                                        if (result.bool) {
                                            player.chooseToRespond({ name: 'shan' });
                                        }
                                        ('step 4');
                                        if (result.bool) {
                                            trigger.cancel();
                                            game.log(player, '回避了这一击');
                                        }
                                    },
                                },
                            },
                        },
                        haihun: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            mod: {
                                maxHandcard: (player, num) => player.maxHp + player.countMark('haihun'),
                            },
                            marktext: '魂',
                            trigger: {
                                player: ['damageBegin4', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            _priority: 10,
                            content() {
                                if (trigger.name == 'damage') {
                                    trigger.cancel();
                                    player.addMark('haihun');
                                } else {
                                    if (player.hasMark('haihun')) {
                                        player.loseHp(player.countMark('haihun'));
                                        player.removeMark('haihun', player.countMark('haihun'));
                                    } else event.finish();
                                }
                            },
                            intro: {
                                name: '海魂',
                                content: '直面绝望与死亡,与死神共舞,战斗至最后一刻',
                            },
                        },
                        kuiming: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            forced: true,
                            content() {
                                'step 0';
                                var cards = get.cards(3);
                                event.cardsx = cards;
                                game.cardsGotoOrdering(cards);
                                player.viewCards('命运的未来视', cards);
                                ('step 1');
                                var cards = event.cardsx;
                                cards.reverse();
                                for (var i = 0; i < cards.length; i++) {
                                    ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
                                }
                            },
                        },
                        Fortune_mingfu: {
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            forced: true,
                            filter: (event) => !event.numFixed,
                            content() {
                                'step 0';
                                event.card = get.cards()[0];
                                player.showCards(event.card, get.translation(player) + '发动了〖命缚〗');
                                player.gain(event.card, 'gain2');
                                ('step 1');
                                var cards = [];
                                var type1 = get.type2(event.card);
                                trigger.changeToZero();
                                while (cards.length < 2) {
                                    var card = get.cardPile((i) => get.type2(i, false) != type1 && !cards.includes(i));
                                    if (!card) break;
                                    else cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'draw');
                                ('step 2');
                                player.storage.Fortune_mingfu_shufu = get.type2(event.card);
                                player.addTempSkill('Fortune_mingfu_shufu', { player: 'phaseEnd' });
                            },
                            subSkill: {
                                shufu: {
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (get.type2(card) != player.storage.Fortune_mingfu_shufu) {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && get.type2(card) != player.storage.Fortune_mingfu_shufu) {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card, player) {
                                            if (get.type2(card) == player.storage.Fortune_mingfu_shufu) return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (get.type2(card) == player.storage.Fortune_mingfu_shufu) return false;
                                        },
                                        cardSavable(card, player) {
                                            if (get.type2(card) == player.storage.Fortune_mingfu_shufu) return false;
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter: (event, player, card) => get.type2(event.card) != player.storage.Fortune_mingfu_shufu,
                                    content() {
                                        var card = get.cardPile(function (card) {
                                            return get.type2(card) == player.storage.Fortune_mingfu_shufu;
                                        });
                                        if (card) player.gain(card, 'draw');
                                    },
                                    mark: true,
                                    intro: {
                                        content: '命运选中了$牌',
                                    },
                                },
                            },
                        },
                        huiji: {
                            mark: true,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            init(player) {
                                if (!player.storage.huiji) player.storage.huiji = [[], []];
                            },
                            filter: (event, player) => event.player != player,
                            content() {
                                player.storage.huiji[0].push(trigger.player);
                                player.storage.huiji[1].push(trigger.card);
                            },
                            group: ['huiji_use'],
                            subSkill: {
                                use: {
                                    audio: 'ext:碧蓝航线Q/audio:true',
                                    enable: 'phaseUse',
                                    filter: (event, player) => player.storage.huiji && player.storage.huiji[0].length,
                                    content() {
                                        var list = player.storage.huiji,
                                            source = list[0].shift(),
                                            card = list[1].shift();
                                        if (source && source.isIn() && player.canUse(card, source, false)) player.useCard(game.createCard(card), source, false);
                                        else player.gain(game.createCard(card), 'gain2');
                                        if (list[0].length) event.redo();
                                    },
                                    ai: {
                                        order: 13,
                                        result: {
                                            player(player) {
                                                if (player.storage.huiji && player.storage.huiji[0].length) {
                                                    var num = 0;
                                                    for (var i = 0; i < player.storage.huiji[0].length; i++) {
                                                        var target = player.storage.huiji[0][i];
                                                        var card = player.storage.huiji[1][i];
                                                        if (target && target.isIn()) {
                                                            num += get.effect(target, card, player, player);
                                                        }
                                                    }
                                                    if (num > 0) return 1;
                                                } else return 0;
                                            },
                                        },
                                    },
                                },
                            },
                            intro: {
                                name: '回击的因果律',
                                markcount: (storage) => storage[0].length,
                                mark(dialog, storage, player) {
                                    if (!storage[0].length) return '未有人对你使用牌';
                                    for (var i = 0; i < storage[0].length; i++) {
                                        dialog.addText(get.translation(storage[0][i]) + '对' + get.translation(player) + '使用过' + get.translation(storage[1][i]));
                                    }
                                },
                            },
                        },
                        pogu: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            juexingji: true,
                            derivation: ['qiming', 'Fortune_zhangming'],
                            forced: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter: (event, player) => player.isMinHp(true) || player.hp == 1,
                            content() {
                                'step 0';
                                player.awakenSkill('pogu');
                                player.loseMaxHp();
                                ('step 1');
                                player.awakenSkill('kuiming');
                                player.awakenSkill('Fortune_mingfu');
                                player.addSkillLog('qiming');
                                player.addSkillLog('Fortune_zhangming');
                            },
                        },
                        qiming: {
                            mark: true,
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (player.storage.qiming == 'basic' || player.storage.qiming == 'trick') {
                                        if (get.type2(card) == player.storage.qiming) {
                                            return true;
                                        }
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if ((player.storage.qiming == 'basic' || player.storage.qiming == 'trick') && name == 'phaseDiscard') {
                                        if (get.type2(card) == player.storage.qiming) {
                                            return false;
                                        }
                                    }
                                },
                                cardUsable(card, player) {
                                    if (player.storage.qiming == 'basic') {
                                        if (get.type2(card) == 'basic') {
                                            return Infinity;
                                        }
                                    }
                                },
                                targetInRange(card, player) {
                                    if (player.storage.qiming == 'trick') {
                                        if (get.type2(card) == 'trick') {
                                            return true;
                                        }
                                    }
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.card = get.cards()[0];
                                player.showCards(event.card, get.translation(player) + '发动了〖启命〗');
                                player.gain(event.card, 'gain2');
                                ('step 1');
                                player.storage.qiming = get.type2(event.card);
                                ('step 2');
                                if (get.type2(event.card) == 'basic') player.storage.qiming_use = get.inpile2('basic');
                                else if (get.type2(event.card) == 'trick') player.storage.qiming_use = get.inpile2('trick');
                                else player.storage.qiming_use = [];
                            },
                            group: ['qiming_trigger', 'qiming_use'],
                            subSkill: {
                                trigger: {
                                    trigger: {
                                        player: ['useCard', 'respond', 'phaseDiscardBegin'],
                                    },
                                    filter: (event, player) => player.storage.qiming && player.storage.qiming != 'basic' && player.storage.qiming != 'trick',
                                    forced: true,
                                    content() {
                                        if (trigger.name == 'phaseDiscard') trigger.cancel();
                                        else player.draw();
                                    },
                                },
                                use: {
                                    markSkill: true,
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    init(player) {
                                        if (!player.storage.qiming_use) player.storage.qiming_use = [];
                                    },
                                    filter: (event, player) => player.storage.qiming && (player.storage.qiming == 'basic' || player.storage.qiming == 'trick'),
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            var qilist = player.storage.qiming_use;
                                            for (var i = 0; i < qilist.length; i++) {
                                                var name = qilist[i];
                                                if (name == 'sha') {
                                                    if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                                    for (var j of lib.inpile_nature) {
                                                        if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                                    }
                                                } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                                else if (get.type2(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                            }
                                            if (list.length == 0) {
                                                return ui.create.dialog('启命已无可用牌');
                                            }
                                            return ui.create.dialog('启命', [list, 'vcard']);
                                        },
                                        filter: (button, player) => _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent),
                                        check(button) {
                                            if (_status.event.parent.type != 'phase') return 1;
                                            var player = _status.event.player;
                                            if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                            return player.getUseValue({
                                                name: button.link[2],
                                                nature: button.link[3],
                                            });
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard: (card) => get.type2(card) != player.storage.qiming,
                                                popname: true,
                                                check: (card) => 8 - get.value(card),
                                                position: 'hes',
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                                onuse: (result, player) => player.storage.qiming_use.remove(result.card.name),
                                            };
                                        },
                                        prompt: (links, player) => '将一张非' + get.translation(player.storage.qiming) + '牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用',
                                    },
                                    ai: {
                                        respondSha: true,
                                        respondShan: true,
                                        result: {
                                            player: () => 1,
                                        },
                                    },
                                    hiddenCard: (player, name) => get.type2(name) == 'basic' || get.type2(name) == 'trick',
                                },
                            },
                            intro: {
                                name: '启命',
                                content(storage) {
                                    if (storage) return get.translation(storage) + '牌被选中';
                                    else return '没有牌被选中';
                                },
                            },
                        },
                        Fortune_zhangming: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            forced: true,
                            content() {
                                'step 0';
                                var cards = get.cards(5);
                                game.cardsGotoOrdering(cards);
                                var next = player.chooseToMove();
                                next.set('list', [['牌堆顶', cards]]);
                                next.set('prompt', '命运的未来视:调换顺序');
                                next.processAI = function (list) {
                                    return [cards];
                                };
                                ('step 1');
                                var top = result.moved[0];
                                top.reverse();
                                for (var i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                game.updateRoundNumber();
                            },
                        },
                        gushou: {
                            mark: true,
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (_status.currentPhase == player && _status.event.getParent('phaseUse') && player != target && (!get.info(card) || !get.info(card).singleCard || !ui.selected.targets.length)) return false;
                                },
                            },
                            init(player) {
                                if (!player.storage.gushou) player.storage.gushou = [];
                            },
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: {
                                target: 'useCardToEnd',
                            },
                            filter: (event, player) => event.player != player && event.player.isAlive(),
                            forced: true,
                            preHidden: true,
                            logTarget: 'target',
                            content() {
                                'step 0';
                                var target = trigger.player;
                                event.target = target;
                                var list = [];
                                event.list = [];
                                if (player.getExpansions('gushou_use').length) {
                                    var cards = lib.inpile;
                                    for (var i = 0; i < cards.length; i++) {
                                        var name = cards[i];
                                        if (name == 'sha') {
                                            if (player.canUse({ name: name }, target, false)) event.list.push(['基本', '', 'sha']);
                                            for (var j of lib.inpile_nature) {
                                                if (player.canUse({ name: name }, target, false)) event.list.push(['基本', '', 'sha', j]);
                                            }
                                        } else if (get.type2(name) == 'trick' && player.canUse({ name: name }, target, false)) event.list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && player.canUse({ name: name }, target, false)) event.list.push(['基本', '', name]);
                                    }
                                    if (event.list.length) list.push('出击');
                                }
                                if (target.countDiscardableCards(player, 'hej') > 0 || player.countDiscardableCards(player, 'hej') > 0) list.push('对峙');
                                list.push('伺机');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['出击,将一张<守>当作任意一张基本牌或锦囊牌对' + get.translation(target) + '使用,你获得一张基本牌', '对峙,弃置你与' + get.translation(target) + '区域内各一张牌', '伺机,取消' + get.translation(target) + '的下一次摸牌,若' + get.translation(target) + '此时未受伤,则受到来自你的1点伤害'])
                                    .set('prompt', get.prompt('gushou', target))
                                    .set(
                                        'choice',
                                        (function () {
                                            if (
                                                list.includes('出击') &&
                                                event.list.filter(function (card) {
                                                    return get.effect(target, card, player, player) > 0;
                                                })
                                            )
                                                return '出击';
                                            else if (
                                                player.hasCard(function (card) {
                                                    return get.effect(player, card, player, player) < 0;
                                                }, 'j') ||
                                                target.hasCard(function (card) {
                                                    return get.effect(target, card, player, player) < 0;
                                                }, 'j')//QQQ
                                            )
                                                return '对峙';
                                            else if (get.attitude(player, target) < 0) return '伺机';
                                            else return 'cancel2';
                                        })()
                                    )
                                    .set('ai', () => _status.event.choice);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    event.control = result.control;
                                }
                                ('step 2');
                                if (event.control == '出击') {
                                    var dialog = ui.create.dialog('出击:请选择要对' + get.translation(target) + '使用的牌', [event.list, 'vcard'], 'hidden');
                                    player.chooseButton(dialog, true).set('ai', function (button) {
                                        return get.effect(target, { name: button.link[2] }, player, player);
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.link1 = result.buttons[0].link[2];
                                    event.link2 = result.buttons[0].link[3];
                                    var cards = player.getExpansions('gushou_use');
                                    player.chooseButton(['出击:请选择一张被转化的<守>', cards], true).set('ai', function (button) {
                                        var list = cards.sort((a, b) => get.value(a) - get.value(b));
                                        return list[0];
                                    });
                                }
                                ('step 4');
                                if (result.bool) {
                                    player.useCard({ name: event.link1, nature: event.link2 }, result.links, target);
                                    var card = ['sha', 'shan', 'tao', 'jiu'];
                                    player.gain(game.createCard(card.randomGet()), 'gain2');
                                }
                                ('step 5');
                                if (event.control == '对峙') {
                                    player.discardPlayerCard(player, 1, 'hej', true);
                                    player.discardPlayerCard(target, 1, 'hej', true);
                                }
                                ('step 6');
                                if (event.control == '伺机') {
                                    player.storage.gushou.push(target);
                                }
                            },
                            group: ['gushou_draw', 'gushou_use', 'gushou_antidraw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'drawBegin',
                                    },
                                    forced: true,
                                    filter: (event) => !event.numFixed,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                use: {
                                    marktext: '守',
                                    enable: 'phaseUse',
                                    intro: {
                                        name: '北方的孤独女王',
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    audio: 'ext:碧蓝航线Q/audio:1',
                                    onremove(player) {
                                        var cards = player.getExpansions('gushou_use');
                                        if (cards.length) player.loseToDiscardpile(cards);
                                    },
                                    filter: (event, player) => player.countCards('he') > 0 || player.getExpansions('gushou_use').length,
                                    discard: false,
                                    lose: false,
                                    content() {
                                        'step 0';
                                        if (player.countCards('he') > 0 && !player.getExpansions('gushou_use').length) {
                                            event.control = '放置';
                                            event.goto(3);
                                        } else if (player.countCards('he') == 0 && player.getExpansions('gushou_use').length) {
                                            event.control = '获得';
                                            event.goto(5);
                                        }
                                        ('step 1');
                                        var list = ['放置', '获得', 'cancel2'];
                                        player
                                            .chooseControl(list)
                                            .set(
                                                'choice',
                                                (function () {
                                                    if (
                                                        player.hasCard(function (card) {
                                                            return !player.hasValueTarget(card);
                                                        }, 'he')
                                                    )
                                                        return '放置';
                                                    if (
                                                        player.getExpansions('gushou_use').filter(function (card) {
                                                            return player.hasValueTarget(card);
                                                        }).length
                                                    )
                                                        return '获得';
                                                })()
                                            )
                                            .set('ai', () => _status.event.choice);
                                        ('step 2');
                                        if (result.control != 'cancel2') {
                                            event.control = result.control;
                                        }
                                        ('step 3');
                                        if (event.control == '放置') {
                                            player
                                                .chooseCard('he', [1, Infinity])
                                                .set('ai', function (card) {
                                                    if (!player.hasValueTarget(card)) return 1;
                                                    return 0;
                                                })
                                                .set('prompt', '选择任意张牌作为<守>放置于你的武将牌上');
                                        }
                                        ('step 4');
                                        if (result.bool) {
                                            var cards = result.cards;
                                            player.addToExpansion(cards, player, 'giveAuto').gaintag.add('gushou_use');
                                        }
                                        ('step 5');
                                        if (event.control == '获得') {
                                            var cards = player.getExpansions('gushou_use');
                                            player.chooseButton(['选择获得的<守>', cards], [1, Infinity]).set('ai', function (button) {
                                                if (player.hasValueTarget(button.link)) return 1;
                                                return 0;
                                            });
                                        }
                                        ('step 6');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2');
                                        }
                                    },
                                },
                                antidraw: {
                                    trigger: {
                                        global: 'drawBegin',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    audio: 'ext:碧蓝航线Q/audio:1',
                                    filter: (event, player) => player.storage.gushou.includes(event.player) && !event.numFixed,
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        ('step 1');
                                        if (!trigger.player.isDamaged()) {
                                            player.line(trigger.player);
                                            trigger.player.damage().source = player;
                                        }
                                        ('step 2');
                                        player.storage.gushou.remove(trigger.player);
                                    },
                                },
                            },
                            intro: {
                                name: '伺机',
                                mark(dialog, storage, player) {
                                    if (!storage.length) return '没有目标';
                                    for (var i = 0; i < storage.length; i++) {
                                        dialog.addText('你盯紧了' + get.translation(storage[i]));
                                    }
                                    dialog.addText('因为存在舰队理论,你也只能这样了吧……');
                                },
                            },
                        },
                        qianzhi: {
                            global: 'qianzhi_disable',
                            audio: 'ext:碧蓝航线Q/audio:1',
                            trigger: {
                                global: 'useCard1',
                            },
                            forced: true,
                            filter: (event, player, card) => player.getExpansions('gushou_use').length && event.targets.includes(player) && player != event.player && (card.name == 'sha' || get.type2(card) == 'trick'),
                            content() { },
                            gainable: true,
                            subSkill: {
                                disable: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (card.name == 'sha' || get.type2(card) == 'trick') {
                                                if (player.hasSkill('qianzhi')) return;
                                                if (target.hasSkill('qianzhi')) return;
                                                if (game.hasPlayer((current) => current.hasSkill('qianzhi') && current.inRange(player) && current.getExpansions('gushou_use').length)) {
                                                    return false;
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        Wahrheit: {
                            marktext: '理',
                            audio: 'ext:碧蓝航线Q/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer((current) => !current.hasMark('Wahrheit') && current != player);
                            },
                            content() {
                                'step 0';
                                var choice = [];
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.inRange(current) && !current.hasMark('Wahrheit') && current != player;
                                    })
                                )
                                    choice.push('攻击范围内');
                                if (
                                    game.hasPlayer(function (current) {
                                        return !player.inRange(current) && !current.hasMark('Wahrheit') && current != player;
                                    })
                                )
                                    choice.push('攻击范围外');
                                choice.push('cancel2');
                                player
                                    .chooseControl(choice)
                                    .set(
                                        'choice',
                                        (function () {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    var att = get.attitude(player, current);
                                                    return player.inRange(current) && current != player && att < 0 && !current.hasMark('Wahrheit');
                                                })
                                            )
                                                return '攻击范围内';
                                            if (
                                                game.hasPlayer(function (current) {
                                                    var att = get.attitude(player, current);
                                                    return !player.inRange(current) && current != player && att < 0 && !current.hasMark('Wahrheit');
                                                })
                                            )
                                                return '攻击范围外';
                                            return 'cancel2';
                                        })()
                                    )
                                    .set('ai', () => _status.event.choice);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    event.control = result.control;
                                } else {
                                    player.getStat('skill').Wahrheit--;
                                    event.finish();
                                }
                                ('step 2');
                                var string = '请选择〖真理〗的目标';
                                if (event.control == '攻击范围内') {
                                    player
                                        .chooseTarget(1, function (event, player, target) {
                                            return target != player && player.inRange(target) && !target.hasMark('Wahrheit');
                                        })
                                        .set('prompt', string)
                                        .set('ai', function (target) {
                                            return get.attitude(player, target) < 0;
                                        })
                                        .set('prompt2', '你获得该角色区域内一张牌并令其获得<真理>标记');
                                } else {
                                    player
                                        .chooseTarget(1, function (event, player, target) {
                                            return target != player && !player.inRange(target) && !target.hasMark('Wahrheit');
                                        })
                                        .set('prompt', string)
                                        .set('ai', function (target) {
                                            return get.attitude(player, target) < 0;
                                        })
                                        .set('prompt2', '你与该角色各摸一张牌并进行一次拼点,若你赢,你摸三张牌并令其获得<真理>标记');
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    if (event.control == '攻击范围内') {
                                        event.target.addMark('Wahrheit');
                                        player.gainPlayerCard('hej', event.target, true);
                                        event.finish();
                                    } else {
                                        game.asyncDraw([player, event.target]);
                                        player.chooseToCompare(event.target);
                                    }
                                } else {
                                    player.getStat('skill').Wahrheit--;
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    player.draw(3);
                                    event.target.addMark('Wahrheit');
                                }
                            },
                            intro: {
                                name: '真理',
                                content: '我已无话可说',
                            },
                            ai: {
                                order: 14,
                                result: {
                                    player(player) {
                                        if (
                                            game.hasPlayer((current) => {
                                                var att = get.attitude(player, current);
                                                return att < 0 && !current.hasMark('Wahrheit') && current != player;
                                            })
                                        )
                                            return 1;
                                    },
                                },
                            },
                            group: ['Wahrheit_useCard'],
                            subSkill: {
                                useCard: {
                                    audio: 'ext:碧蓝航线Q/audio:true',
                                    filter: (event, player) => game.hasPlayer((current) => current.hasMark('Wahrheit')),
                                    trigger: { player: 'useCard' },
                                    forced: true,
                                    content() {
                                        trigger.directHit.addArray(game.filterPlayer((current) => current.hasMark('Wahrheit')));
                                    },
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            return arg && arg.target && arg.target.hasMark('Wahrheit');
                                        },
                                    },
                                },
                            },
                        },
                        fuxing: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && player.storage.fuxing != true) return (num += 1);
                                },
                            },
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                name(storage, player) {
                                    var storage = player.storage.fuxing;
                                    return '下一次转换为:' + (storage == true ? '战争' : '宁静');
                                },
                                content(storage, player, skill) {
                                    if (player.storage.fuxing != true) return '你的摸牌阶段额定摸牌数+1,你的出牌阶段开始时,你依次获得拥有<真理>标记的角色区域内一张牌';
                                    return '你使用杀的次数+1,你的出牌阶段开始时,你从牌堆和弃牌堆中获得X张伤害类牌(X为场上拥有<真理>标记的角色数且至少为1)';
                                },
                            },
                            trigger: { player: ['phaseUseBegin', 'phaseDrawBegin'] },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'phaseDraw') {
                                    return player.storage.fuxing != true && !event.numFixed;
                                } else return true;
                            },
                            content() {
                                if (trigger.name == 'phaseDraw') {
                                    trigger.num++;
                                } else {
                                    if (player.storage.fuxing != true) {
                                        var targets = game
                                            .filterPlayer(function (current) {
                                                return current.hasMark('Wahrheit');
                                            })
                                            .sortBySeat();
                                        targets.forEach(function (target) {
                                            player.gainPlayerCard(target, 'hej', true);
                                        });
                                    } else {
                                        var num = Math.max(
                                            game.countPlayer(function (current) {
                                                return current.hasMark('Wahrheit');
                                            }) || 0,
                                            1
                                        ),
                                            cards = [];
                                        while (cards.length < num) {
                                            var card = get.cardPile(function (i) {
                                                return get.tag(i, 'damage') && !cards.includes(i);
                                            });
                                            if (!card) break;
                                            else cards.push(card);
                                        }
                                        if (cards.length) player.gain(cards, 'gain2');
                                    }
                                    player.changeZhuanhuanji('fuxing');
                                }
                            },
                        },
                        bsm_buqu: {
                            trigger: { player: 'damageEnd' },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            filter(event, player) {
                                if (event.source && event.source.hasMark('Wahrheit')) {
                                    return event.source.countGainableCards(player, 'hej') > 0;
                                } else return false;
                            },
                            content() {
                                var target = trigger.source;
                                target.removeMark('Wahrheit');
                                player.gainPlayerCard(target, 'hej', true);
                            },
                        },
                        tx_yizhi: {
                            zhuSkill: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (from.hasZhuSkill('tx_yizhi')) {
                                        return distance - game.countPlayer((current) => current.group == 'iron_blood');
                                    }
                                },
                                attackRange(player, distance) {
                                    if (player.hasZhuSkill('tx_yizhi')) {
                                        return distance + game.countPlayer((current) => current.group == 'iron_blood');
                                    }
                                },
                            },
                        },
                        Unicorn_yingyuan: {
                            enable: 'phaseUse',
                            audio: 'ext:碧蓝航线Q/audio:2',
                            filter(event, player) {
                                if ((player.getStat('skill').Unicorn_yingyuan || 0) >= player.hp) return false;
                                return player.countCards('he') > 0;
                            },
                            filterTarget: (event, player, target) => target != player,
                            filterCard: true,
                            selectCard: 1,
                            check(card) {
                                var player = get.owner(card);
                                if (player.hasCard((card) => get.tag(card, 'damage'), 'h')) {
                                    return get.tag(card, 'damage');
                                } else return 6 - get.value(card);
                            },
                            discard: false,
                            lose: false,
                            position: 'h',
                            content() {
                                'step 0';
                                player.give(cards, targets[0]);
                                player.isDamaged() ? player.recover() : player.changeHujia();
                                targets[0].recover();
                                if (
                                    get.tag(cards[0], 'damage') &&
                                    game.hasPlayer(function (currrent) {
                                        return currrent != player && !targets.includes(currrent);
                                    })
                                ) {
                                    player
                                        .chooseTarget(true, function (card, player, target) {
                                            return target != player && !targets.includes(target);
                                        })
                                        .set('prompt', '请选择〖应援〗的目标')
                                        .set('ai', function (target) {
                                            return get.damageEffect(target, targets[0], player);
                                        })
                                        .set('prompt2', get.translation(targets[0]) + '将对其造成一点伤害');
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    targets[0].line(result.targets[0], 'fire');
                                    result.targets[0].damage().source = targets[0];
                                }
                            },
                            ai: {
                                order(skill, player) {
                                    if (!player.isDamaged()) return 1;
                                    else return 10;
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (player.countCards('h') < player.hp) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        Unicorn_zhiyuan: {
                            trigger: { player: 'phaseBegin' },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('prompt', '请选择〖支援〗的目标')
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    })
                                    .set('prompt2', '你获得以下效果直到你重新发动〖支援〗:当该角色获得你的手牌时,你记录这些牌的花色;当该角色的牌不因弃置而进入弃牌堆时,你获得其中花色与〖支援〗记录中相同的牌');
                                ('step 1');
                                if (result.bool) {
                                    player.storage.Unicorn_zhiyuan_record = [result.targets[0], []];
                                }
                            },
                            group: ['Unicorn_zhiyuan_record', 'Unicorn_zhiyuan_gain'],
                            subSkill: {
                                record: {
                                    mark: true,
                                    init(player) {
                                        player.storage.Unicorn_zhiyuan_record = [[]];
                                        player.markSkill('Unicorn_zhiyuan_record');
                                    },
                                    trigger: { source: 'gainEnd' },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player != player.storage.Unicorn_zhiyuan_record[0]) return false;
                                        var ext = event.getl(player);
                                        return ext && ext.hs && ext.hs.length;
                                    },
                                    content() {
                                        var list = trigger.getl(player).hs;
                                        list.forEach((card) => {
                                            var suit = card.suit;
                                            var storage = player.storage.Unicorn_zhiyuan_record;
                                            if (!storage[1].includes(suit)) {
                                                storage[1].push(suit);
                                            }
                                        });
                                    },
                                    intro: {
                                        name: '支援',
                                        markcount(storage) {
                                            if (storage[1]) return storage[1].length;
                                            else return 0;
                                        },
                                        mark(dialog, storage, player) {
                                            dialog.addText('支援目标:' + (get.translation(storage[0]) || '尚未选定'));
                                            if (storage[1].length) {
                                                dialog.addText('已记录花色:' + get.translation(storage[1]));
                                            } else dialog.addText('尚未记录花色');
                                        },
                                    },
                                },
                                gain: {
                                    trigger: { global: 'cardsDiscardAfter' },
                                    filter(event, player) {
                                        var evt = event.parent.relatedEvent;
                                        var storage = player.storage.Unicorn_zhiyuan_record;
                                        if (!storage[0] || (evt && evt.player != storage[0])) return false;
                                        if (storage[1].length) {
                                            if (Array.isArray(event.cards))
                                                for (var i of event.cards) {
                                                    if (storage[1].includes(i.suit)) return true; //QQQ
                                                }
                                        } else return false;
                                    },
                                    forced: true,
                                    content() {
                                        var storage = player.storage.Unicorn_zhiyuan_record[1];
                                        if (storage.length) {
                                            var cards = [];
                                            trigger.cards.forEach((card) => {
                                                if (storage.includes(card.suit)) cards.push(card);
                                            });
                                            if (cards.length) player.gain(cards, 'gain2');
                                        }
                                    },
                                },
                            },
                        },
                        junheng: {
                            trigger: {
                                player: ['damageBegin4', 'recoverBegin'],
                                source: 'damageBegin2',
                            },
                            forced: true,
                            lastDo: true,
                            filter: (event) => event.num > 1,
                            content() {
                                trigger.num = 1;
                            },
                        },
                        chenzhuo: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter: (event, player) => event.player != player && event.player.maxHp > player.hp && get.tag(event.card, 'damage'),
                            content() {
                                player.draw();
                            },
                            group: ['chenzhuo_dying', 'chenzhuo_jiutao'],
                            subSkill: {
                                dying: {
                                    audioname2: {
                                        Kawakaze: 'chenzhuo',
                                    },
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var cards = [];
                                        for (var i of lib.suit) {
                                            var card = get.cardPile2((card) => card.suit == i);
                                            if (card) cards.push(card);
                                        }
                                        game.cardsGotoOrdering(cards);
                                        if (cards.length) {
                                            player.chooseCardButton(cards, [1, cards.length], '沉着:选择获得的牌').set('ai', () => {
                                                var save = false;
                                                for (var i = 0; i < cards.length; i++) {
                                                    if (get.tag(card, 'save')) var save = true;
                                                    break;
                                                }
                                                if (save) return true;
                                                return false;
                                            });
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2');
                                            var suitlist = [];
                                            for (var i of lib.suit) {
                                                suitlist.push(i);
                                            }
                                            for (var j = 0; j < result.links.length; j++) {
                                                var card = result.links[j];
                                                suitlist.remove(card.suit);
                                            }
                                            var cards = [];
                                            for (var k = 0; k < suitlist.length; k++) {
                                                var card2 = get.cardPile2((card) => card.suit == suitlist[k]);
                                                if (card2) cards.push(card2);
                                            }
                                            if (cards.length) player.gain(cards, 'gain2');
                                        } else {
                                            var cards = [];
                                            for (var i of lib.suit) {
                                                var card = get.cardPile2((card) => card.suit == i);
                                                if (card) cards.push(card);
                                            }
                                            if (cards.length) player.gain(cards, 'gain2');
                                        }
                                    },
                                },
                                jiutao: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    hiddenCard(player, name) {
                                        if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
                                        return false;
                                    },
                                    position: 'hs',
                                    prompt: '将酒当作桃使用',
                                    filterCard: {
                                        name: 'jiu',
                                    },
                                    viewAs: {
                                        name: 'tao',
                                    },
                                    viewAsFilter: (player) => player.countCards('hs', 'jiu'),
                                    ai: {
                                        basic: {
                                            order(card, player) {
                                                if (player.hasSkillTag('pretao')) return 5;
                                                return 2;
                                            },
                                            useful: [6.5, 4, 3, 2],
                                            value: [6.5, 4, 3, 2],
                                        },
                                        result: {
                                            target: 2,
                                            target_use(player, target) {
                                                // if(player==target&&player.hp<=0) return 2;
                                                if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                                var nd = player.needsToDiscard();
                                                var keep = false;
                                                if (nd <= 0) {
                                                    keep = true;
                                                } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                                    keep = true;
                                                }
                                                var mode = get.mode();
                                                if (target.hp >= 2 && keep && target.hasFriend()) {
                                                    if (target.hp > 2 || nd == 0) return 0;
                                                    if (target.hp == 2) {
                                                        if (
                                                            game.hasPlayer(function (current) {
                                                                if (target != current && get.attitude(target, current) >= 3) {
                                                                    if (current.hp <= 1) return true;
                                                                    if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                                }
                                                            })
                                                        ) {
                                                            return 0;
                                                        }
                                                    }
                                                }
                                                if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                                var att = get.attitude(player, target);
                                                if (att < 3 && att >= 0 && player != target) return 0;
                                                var tri = _status.event.getTrigger();
                                                if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                                    if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                        var num = game.countPlayer(function (current) {
                                                            if (current.identity == 'fan') {
                                                                return current.countCards('h', 'tao');
                                                            }
                                                        });
                                                        if (num > 1 && player == target) return 2;
                                                        return 0;
                                                    }
                                                }
                                                if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                                    if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                        return 0;
                                                    }
                                                }
                                                if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                                    return 0;
                                                }
                                                return 2;
                                            },
                                        },
                                        tag: {
                                            recover: 1,
                                            save: 1,
                                        },
                                    },
                                },
                            },
                        },
                        nixi: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            trigger: { global: 'dying' },
                            logTarget: 'player',
                            filter: (event, player) => event.player != player && event.source == player && event.player.maxHp > player.hp,
                            check: (event, player) => get.attitude(player, event.player) < 0,
                            content() {
                                'step 0';
                                trigger.player.die().source = player;
                                ('step 1');
                                if (!trigger.player.isAlive()) trigger.cancel(true);
                            },
                            ai: {
                                threaten: 3,
                            },
                        },
                        fenglie: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            global: 'fenglie_has',
                            trigger: {
                                source: 'damageEnd',
                            },
                            _priority: 5,
                            filter: (event, player) => event.player != player && event.player.isAlive(),
                            forced: true,
                            content() {
                                trigger.player.addMark('fenglie');
                            },
                            group: ['fenglie_use', 'fenglie_damage', 'fenglie_kill'],
                            subSkill: {
                                use: {
                                    enable: 'phaseUse',
                                    selectTarget: 1,
                                    prompt: '你可以移去该角色一枚<锋裂>标记,令其本回合内非锁定技和防具失效',
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return lib.skill.fenglie_use.filterTarget(null, player, current);
                                        });
                                    },
                                    filterTarget: (card, player, target) => target.hasMark('fenglie'),
                                    content() {
                                        target.removeMark('fenglie');
                                        target.addTempSkill('fengyin', 'phaseEnd');
                                        target.addTempSkill('qinggang2', 'phaseEnd');
                                    },
                                },
                                damage: {
                                    audioname2: {
                                        meta_Hunter: 'fenglie',
                                    },
                                    trigger: {
                                        global: 'damageBegin3',
                                    },
                                    logTarget: 'player',
                                    check(event, player) {
                                        if (get.attitude(player, event.player) > 0) return false;
                                        if (event.player.countMark('fenglie') == 1) {
                                            if (event.player.hp - event.num < 0) return true;
                                            return false;
                                        } else return true;
                                    },
                                    _priority: 10,
                                    logTarget: 'player',
                                    prompt2(event, player) {
                                        return '移去' + get.translation(event.player) + '的一枚<锋裂>标记令此次伤害+1';
                                    },
                                    filter: (event, player) => event.player.hasMark('fenglie'),
                                    content() {
                                        trigger.player.removeMark('fenglie');
                                        trigger.num++;
                                    },
                                },
                                kill: {
                                    audioname2: {
                                        meta_Hunter: 'fenglie',
                                    },
                                    trigger: { global: 'dying' },
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    logTarget: 'player',
                                    prompt2(event, player) {
                                        return '移去' + get.translation(event.player) + '的一枚<锋裂>标记令其立即死亡';
                                    },
                                    filter: (event, player) => event.player.hasMark('fenglie') && event.player.hp < 0,
                                    content() {
                                        'step 0';
                                        trigger.player.removeMark('fenglie');
                                        trigger.player.die().source = trigger.source;
                                        ('step 1');
                                        if (!trigger.player.isAlive()) trigger.cancel(true);
                                    },
                                },
                                has: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            if (player.hasMark('fenglie')) return (num -= 1);
                                        },
                                    },
                                },
                            },
                            marktext: '锋',
                            intro: {
                                name: '锋裂',
                                content: '锋锐挫志,裂心碎胆',
                            },
                        },
                        kuishi: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (player.countCards('he') > 0) {
                                    var list = game.filterPlayer((current) => current != player);
                                    player.chooseCardTarget({
                                        prompt: '请选择〖窥实〗的牌和目标',
                                        prompt2: '将一张牌交给一名其他角色并观看其手牌,若该角色手牌中有:<br>1.基本牌:你摸两张牌;<br>2.锦囊牌:你可以至多移动场上两张牌;<br>3.装备牌:你可以视为对一名其他角色使用一张不计入次数的【杀】',
                                        forced: true,
                                        position: 'he',
                                        filterCard: true,
                                        list: list,
                                        filterTarget: lib.filter.notMe,
                                        goon() {
                                            for (var i of list) {
                                                if (get.attitude(player, i) > 0) return 1;
                                                return -1;
                                            }
                                        },
                                        ai1(card) {
                                            if (_status.event.goon > 0) return 7 - get.value(card);
                                            return 0.01 - get.value(card);
                                        },
                                        ai2(target) {
                                            var card = ui.selected.cards[0];
                                            return get.value(card, target) * get.attitude(_status.event.player, target);
                                        },
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.gain(result.cards, player, 'giveAuto');
                                } else event.finish();
                                ('step 3');
                                player.viewHandcards(target);
                                if (target.countCards('h', { type: 'basic' })) player.draw(2);
                                if (target.countCards('h', { type: ['trick', 'delay'] })) {
                                    if (player.canMoveCard()) player.moveCard();
                                    if (player.canMoveCard()) player.moveCard();
                                }
                                if (target.countCards('h', { type: 'equip' })) {
                                    if (
                                        player.hasUseTarget(
                                            {
                                                name: 'sha',
                                            },
                                            false
                                        )
                                    )
                                        player.chooseUseTarget(
                                            {
                                                name: 'sha',
                                            },
                                            false
                                        );
                                }
                            },
                            ai: {
                                order: 12,
                                expose: 0.2,
                                result: {
                                    player: () => 1,
                                },
                                threaten: 0.2,
                            },
                        },
                        xuri: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterTarget: (card, player, target) => target != player,
                            content() {
                                target.addTempSkill('zhaohui', { player: 'phaseAfter' });
                                var targets = game
                                    .filterPlayer(function (current) {
                                        return current != player && current != target && get.distance(target, current) <= 1;
                                    })
                                    .sortBySeat();
                                for (var i = 0; i < targets.length; i++) {
                                    target.line(targets[i], 'fire');
                                    targets[i].addTempSkill('zhaohui', { player: 'phaseAfter' });
                                }
                            },
                            ai: {
                                order: 14,
                                expose: 0.2,
                                result: {
                                    target: () => -1,
                                },
                                threaten: 0.45,
                            },
                            derivation: ['zhaohui'],
                        },
                        zhaohui: {
                            global: 'zhaohui_cancel',
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge((card) => (get.color(card) == 'red' ? 1 : -1));
                                ('step 1');
                                if (result.bool) {
                                    player.damage('fire');
                                }
                            },
                            subSkill: {
                                cancel: {
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    forced: true,
                                    filter: (event, player) => event.card.name == 'sha' && event.player.hasSkill('zhaohui') && player.countCards('hs', { color: 'black' }) > 0,
                                    content() {
                                        'step 0';
                                        player.chooseBool('朝晖:是否打出一张黑色牌以取消此杀？');
                                        ('step 1');
                                        if (result.bool) {
                                            player.chooseToRespond({ color: 'black' });
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            trigger.parent.cancel();
                                        }
                                    },
                                },
                            },
                        },
                        rongyao: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                var targets = game.filterPlayer((current) => current != player);
                                targets.sort((a, b) => Math.max(1, get.distance(player, a)) - Math.max(1, get.distance(player, b)));
                                var distance = Math.max(1, get.distance(player, targets[0]));
                                for (var i = 1; i < targets.length; i++) {
                                    if (Math.max(1, get.distance(player, targets[i])) > distance) {
                                        targets.splice(i);
                                        break;
                                    }
                                }
                                if (targets.includes(event.target) && event.player == player) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.target.chooseCard('he', '交给' + get.translation(player) + '一张牌,否则你不可响应此' + get.translation(trigger.parent.card)).set('ai', (card) => {
                                    if (get.effect(player, trigger.card, trigger.player, player) >= 0) return false;
                                    else return 8 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.cards, trigger.target, 'giveAuto');
                                } else {
                                    trigger.parent.directHit.add(trigger.target);
                                }
                            },
                            group: ['rongyao_damage'],
                            subSkill: {
                                damage: {
                                    audio: 'ext:碧蓝航线Q/audio:1',
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    forced: true,
                                    filter: (event, player) => event.card && event.card.name == 'sha' && event.player != player,
                                    content() {
                                        'step 0';
                                        if (get.distance(player, trigger.player) <= 1) return trigger.num++;
                                        ('step 1');
                                        if (get.distance(player, trigger.player) <= 2) return player.draw();
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (card.name == 'sha') {
                                                    if (get.distance(player, target) == 2) return [1, 0, 1, 1];
                                                    if (get.distance(player, target) == 1) return [2, 0, 1, 1];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shanzhan: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                var list = [],
                                    pile = get.inpile('trick');
                                for (var i = 0; i < pile.length; i++) {
                                    var card = { name: pile[i] };
                                    if (get.tag(card, 'damage') > 0) {
                                        list.push(pile[i]);
                                    }
                                }
                                for (var j = 0; j < list.length; j++) {
                                    if (event.filterCard && event.filterCard({ name: list[j] }, player, event)) {
                                        return player.hasCard((card) => get.type(card) == 'trick' && get.tag(card, 'damage'));
                                    }
                                }
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var pile = get.inpile('trick');
                                    for (var i = 0; i < pile.length; i++) {
                                        var card = { name: pile[i] };
                                        if (get.tag(card, 'damage') > 0 && player.hasUseTarget(card)) {
                                            list.push(['锦囊', '', pile[i]]);
                                        }
                                    }
                                    return ui.create.dialog('善战', [list, 'vcard']);
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: (card) => get.type(card) == 'trick' && get.tag(card, 'damage'),
                                        popname: true,
                                        position: 'hs',
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt: (links, player) => '将一张伤害类普通锦囊牌当作' + get.translation(links[0][2]) + '使用',
                            },
                            group: ['shanzhan_get', 'shanzhan_draw'],
                            subSkill: {
                                get: {
                                    audio: 'ext:碧蓝航线Q/audio:1',
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    filter(event, player) {
                                        if (!event.numFixed) {
                                            var num = get.copy(event.num);
                                            var list = [],
                                                names = [];
                                            while (list.length < num) {
                                                var card = get.cardPile(function (i) {
                                                    return get.tag(i, 'damage') && !list.includes(i) && !names.includes(i.name);
                                                });
                                                if (!card) break;
                                                else {
                                                    list.push(card);
                                                    names.push(card.name);
                                                }
                                            }
                                            if (list.length == num) return true;
                                            return false;
                                        } else return false;
                                    },
                                    check(event, player) {
                                        if (
                                            player.countCards('he', function (card) {
                                                return get.tag(card, 'damage');
                                            }) == 0
                                        )
                                            return true;
                                        return false;
                                    },
                                    prompt2: '放弃摸牌并改为从牌堆中摸取牌名各不同的等量伤害类牌',
                                    content() {
                                        var num = get.copy(trigger.num);
                                        var cards = [],
                                            names = [];
                                        trigger.changeToZero();
                                        while (cards.length < num) {
                                            var card = get.cardPile(function (i) {
                                                return get.tag(i, 'damage') && !cards.includes(i) && !names.includes(i.name);
                                            });
                                            if (!card) break;
                                            else {
                                                cards.push(card);
                                                names.push(card.name);
                                            }
                                        }
                                        if (cards.length) player.gain(cards, 'draw');
                                    },
                                },
                                draw: {
                                    trigger: { source: 'damageEnd' },
                                    forced: true,
                                    content() {
                                        player.draw(trigger.num);
                                    },
                                },
                            },
                        },
                        Essex_zhenlie: {
                            marktext: '阵',
                            intro: {
                                name: '航空阵列',
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            content() {
                                var cards = get.cards(player.maxHp);
                                player.addToExpansion(cards, player, 'gain2').gaintag.add('Essex_zhenlie');
                            },
                            group: ['Essex_zhenlie_use', 'Essex_zhenlie_end'],
                            subSkill: {
                                use: {
                                    audio: 'ext:碧蓝航线Q/audio:2',
                                    trigger: { player: 'useCard' },
                                    forced: true,
                                    filter: (event, player) => player.getExpansions('Essex_zhenlie').length && get.tag(event.card, 'damage'),
                                    content() {
                                        'step 0';
                                        var black = [],
                                            others = [],
                                            dialog = ['选择移去的<阵列>'];
                                        player.getExpansions('Essex_zhenlie').forEach(function (card) {
                                            get.color(card) == 'black' ? black.push(card) : others.push(card);
                                        });
                                        if (black.length) {
                                            dialog.push('<div class="text center">黑色牌</div>');
                                            dialog.push(black);
                                        }
                                        if (others.length) {
                                            dialog.push('<div class="text center">非黑色牌</div>');
                                            dialog.push(others);
                                        }
                                        player.chooseButton(dialog).set('ai', (button) => {
                                            return 6 - get.value(button.link);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var color = get.color(result.links[0]);
                                            player.loseToDiscardpile(result.links);
                                            player.gain(
                                                get.cardPile(function (card) {
                                                    return get.type(card) == 'trick' && !get.tag(card, 'damage');
                                                }),
                                                'gain2'
                                            );
                                            if (color != 'black') trigger.baseDamage++;
                                            else trigger.directHit.addArray(game.filterPlayer());
                                        }
                                    },
                                },
                                end: {
                                    trigger: { player: 'phaseEnd' },
                                    forced: true,
                                    filter: (event, player) => player.getExpansions('Essex_zhenlie').length,
                                    content() {
                                        var cards = player.getExpansions('Essex_zhenlie');
                                        player.gain(cards, 'gain2');
                                    },
                                },
                            },
                            onremove(player) {
                                var cards = player.getExpansions('Essex_zhenlie');
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        tianxi: {
                            marktext: '袭',
                            global: 'tianxi_damage',
                            trigger: {
                                global: 'dieEnd',
                            },
                            forced: true,
                            filter: (event, player) => event.player.hasMark('tianxi'),
                            content() {
                                'step 0';
                                player.recover();
                                trigger.player.removeMark('tianxi');
                                player
                                    .chooseTarget('天袭:请选择获得<天袭>标记的角色', true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', (target) => get.attitude(player, target) < 0);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    trigger.player.line(target);
                                    target.addMark('tianxi');
                                }
                            },
                            group: ['tianxi_enter', 'tianxi_kill'],
                            subSkill: {
                                enter: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('天袭:请选择一名其他角色,令其获得<天袭>标记', true, (card, player, target) => target != player)
                                            .set('ai', function (target) {
                                                var att = get.attitude(_status.event.player, target);
                                                if (att < 0) return att - 1;
                                                if (att == 0) return Math.random();
                                                return -att;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            target.addMark('tianxi');
                                        }
                                    },
                                },
                                damage: {
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    filter: (event, player) => player.hasMark('tianxi'),
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'damage') && player.hasMark('tianxi')) return 2;
                                            },
                                        },
                                    },
                                },
                                kill: {
                                    trigger: {
                                        global: 'dieBefore',
                                    },
                                    forced: true,
                                    filter: (event, player) => event.player.hasMark('tianxi'),
                                    content() {
                                        trigger.source = player;
                                    },
                                },
                            },
                            intro: {
                                name: '天袭',
                                content: 'The Fighting Lady!',
                            },
                        },
                        aoxiang: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            usable: 1,
                            filter: (event, player) => get.tag(event.card, 'damage') && event.getParent(2).name != 'aoxiang',
                            content() {
                                'step 0';
                                if (trigger.player != player) {
                                    player.draw();
                                } else {
                                    player.chooseTarget('请选择〖翱翔〗的目标', [1, game.countPlayer((current) => current != player)], (card, target, player) => target != player);
                                    event.goto(2);
                                }
                                ('step 1');
                                player.chooseToUse('翱翔:你可以使用一张伤害类牌', (card) => get.tag(card, 'damage'));
                                event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var targets = result.targets;
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].draw();
                                        targets[i].chooseToUse('翱翔:你可以使用一张伤害类牌', (card) => get.tag(card, 'damage'));
                                    }
                                }
                            },
                            ai: {
                                expose: 0.4,
                                threaten: 1.5,
                            },
                        },
                        pomen: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterTarget: (card, player, target) => target != player,
                            content() {
                                'step 0';
                                var list = [];
                                if (target.countCards('hes', { type: 'equip' })) list.push('弃甲');
                                if (target.countCards('h')) list.push('丧志');
                                list.push('受袭');
                                target
                                    .chooseControl(list)
                                    .set('choiceList', ['弃甲,你弃置所有的装备牌', '丧志,让' + get.translation(player) + '观看你的手牌,并让' + get.translation(player) + '弃置其中不同花色的牌各一张', '受袭,你受到来自' + get.translation(player) + '的1点伤害,同时' + get.translation(player) + '摸两张牌'])
                                    .set('prompt', get.translation(player) + '对你发动了〖破门〗')
                                    .set(
                                        'choice',
                                        (function () {
                                            return list.randomGet();
                                        })()
                                    )
                                    .set('ai', () => _status.event.choice);
                                ('step 1');
                                event.control = result.control;
                                if (event.control == '弃甲') {
                                    var cards = target.getCards('hes', (card) => get.type(card) == 'equip');
                                    target.discard(cards);
                                }
                                ('step 2');
                                if (event.control == '丧志') {
                                    var cards = target.getCards('h');
                                    var chooseButton = player.chooseButton(cards.length, [get.translation(target.name) + '的手牌', cards], true);
                                    chooseButton.set('target', target);
                                    chooseButton.set('filterButton', function (button) {
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
                                        }
                                        return true;
                                    });
                                } else event.goto(4);
                                ('step 3');
                                if (result.bool && result.links) {
                                    target.discard(result.links);
                                }
                                ('step 4');
                                if (event.control == '受袭') {
                                    target.damage().source = player;
                                    player.draw(2);
                                }
                            },
                            ai: {
                                order: 13,
                                expose: 0.4,
                                result: {
                                    target: (player, target) => -1,
                                },
                            },
                        },
                        liuhuo: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter: (event, player) => event.nature == 'fire' && event.player != player && event.player.isAlive(),
                            content() {
                                trigger.player.addSkill('Ticonderoga_yunhuo');
                                trigger.player.addMark('Ticonderoga_yunhuo', 2);
                            },
                            group: ['liuhuo_use', 'liuhuo_damage'],
                            subSkill: {
                                use: {
                                    enable: 'chooseToUse',
                                    prompt: '将杀当作火攻使用',
                                    viewAsFilter(player) {
                                        return player.countCards('hs', 'sha') > 0;
                                    },
                                    viewAs: {
                                        name: 'huogong',
                                    },
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    position: 'hs',
                                    ai: {
                                        basic: {
                                            order: 4,
                                            value: [3, 1],
                                            useful: 1,
                                        },
                                        wuxie(target, card, player, current, state) {
                                            if (get.attitude(current, player) >= 0 && state > 0) return false;
                                        },
                                        result: {
                                            player(player) {
                                                var nh = player.countCards('h');
                                                if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                                    if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                        return -10;
                                                    }
                                                    if (_status.event.skill) {
                                                        var viewAs = get.info(_status.event.skill).viewAs;
                                                        if (viewAs == 'huogong') return -10;
                                                        if (viewAs && viewAs.name == 'huogong') return -10;
                                                    }
                                                }
                                                return 0;
                                            },
                                            target(player, target) {
                                                if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                                                if (player.countCards('h') <= 1) return 0;
                                                if (target == player) {
                                                    if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                        return -1.15;
                                                    }
                                                    if (_status.event.skill) {
                                                        var viewAs = get.info(_status.event.skill).viewAs;
                                                        if (viewAs == 'huogong') return -1.15;
                                                        if (viewAs && viewAs.name == 'huogong') return -1.15;
                                                    }
                                                    return 0;
                                                }
                                                return -1.15;
                                            },
                                        },
                                        tag: {
                                            damage: 1,
                                            fireDamage: 1,
                                            natureDamage: 1,
                                            norepeat: 1,
                                        },
                                    },
                                },
                                damage: {
                                    audio: 'ext:碧蓝航线Q/audio:1',
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    forced: true,
                                    filter: (event, player) => event.nature == 'fire',
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'fireDamage')) return 2;
                                            },
                                        },
                                    },
                                },
                            },
                            derivation: ['Ticonderoga_yunhuo'],
                        },
                        Ticonderoga_yunhuo: {
                            marktext: '陨',
                            trigger: {
                                player: ['damageEnd', 'phaseBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasMark('Ticonderoga_yunhuo')) {
                                    if (event.name == 'damage') {
                                        return event.nature == 'fire';
                                    }
                                    return true;
                                }
                            },
                            content() {
                                'step 0';
                                player.judge((card) => (get.color(card) == 'red' ? 1 : -1));
                                ('step 1');
                                if (result.bool) {
                                    var num = Math.ceil(player.countMark('Ticonderoga_yunhuo') / 2);
                                    player.removeMark('Ticonderoga_yunhuo', num);
                                    player.addMark('dianran', num);
                                    player.addSkill('shao');
                                } else player.addMark('Ticonderoga_yunhuo');
                            },
                            intro: {
                                name: '陨火',
                                content: '被烈火吞噬的命运在等着你',
                            },
                        },
                        zhuangjia: {
                            marktext: '装甲',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter: (event, player) => event.source != player,
                            content() {
                                player.addMark('zhuangjia', trigger.num);
                            },
                            intro: {
                                name: '航空装甲',
                                content: '这些终有回报',
                            },
                            group: ['zhuangjia_use'],
                            subSkill: {
                                use: {
                                    enable: 'phaseUse',
                                    filter: (event, player) => player.hasMark('zhuangjia'),
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        'step 0';
                                        var list = ['回复体力', '摸牌', '获得护甲', 'cancel2'];
                                        player.chooseControl(list).set('prompt', '装甲:请选择一项');
                                        ('step 1');
                                        if (result.control != 'cancel2') {
                                            event.control = result.control;
                                        } else event.finish();
                                        ('step 2');
                                        var num = player.countMark('zhuangjia');
                                        switch (event.control) {
                                            case '回复体力':
                                                player.recover(Math.ceil(num / 2));
                                                break;
                                            case '摸牌':
                                                player.draw(num);
                                                break;
                                            case '获得护甲':
                                                player.changeHujia(Math.ceil(num / 2));
                                                break;
                                        }
                                        player.removeMark('zhuangjia', num);
                                    },
                                },
                            },
                        },
                        shenpan: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                var storage = player.storage.buqu_buqu;
                                var has = player.hasSkill('shenpan_limit');
                                switch (result.suit) {
                                    case 'heart':
                                        {
                                            player.recover();
                                            if (storage && !has) {
                                                storage[3][0]++;
                                                game.log(player, '获得了一层装填<意志>');
                                            }
                                        }
                                        break;
                                    case 'diamond':
                                        {
                                            trigger.card.nature = 'fire';
                                            if (storage && !has) {
                                                storage[0][0]++;
                                                game.log(player, '获得了一层炮击<意志>');
                                            }
                                        }
                                        break;
                                    case 'club':
                                        {
                                            if (!trigger.card.storage) {
                                                trigger.card.storage = {};
                                            }
                                            trigger.card.storage.shenpan = true;
                                            if (storage && !has) {
                                                storage[2][0]++;
                                                game.log(player, '获得了一层命中<意志>');
                                            }
                                        }
                                        break;
                                    case 'spade':
                                        {
                                            trigger.card.nature = 'thunder';
                                            if (storage && !has) {
                                                storage[1][0]++;
                                                game.log(player, '获得了一层雷击<意志>');
                                            }
                                        }
                                        break;
                                }
                                player.addTempSkill('shenpan_limit', 'phaseEnd');
                            },
                            subSkill: {
                                limit: {},
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (arg && arg.card && arg.card.storage && arg.card.storage.shenpan) return true;
                                        return false;
                                    }
                                },
                            },
                        },
                        buqu_buqu: {
                            audio: 'ext:碧蓝航线Q/audio:1',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            init(player) {
                                if (!player.storage.buqu_buqu)
                                    player.storage.buqu_buqu = [
                                        [0, false],
                                        [0, false],
                                        [0, false],
                                        [0, false],
                                    ];
                            },
                            getInfo(player) {
                                if (!player.storage.buqu_buqu)
                                    player.storage.buqu_buqu = [
                                        [0, false],
                                        [0, false],
                                        [0, false],
                                        [0, false],
                                    ];
                                return player.storage.buqu_buqu;
                            },
                            content() {
                                var list = [0, 1, 2, 3];
                                num = list.randomGet();
                                player.storage.buqu_buqu[num][0]++;
                                switch (num) {
                                    case 0:
                                        game.log(player, '获得了一层炮击<意志>');
                                        break;
                                    case 1:
                                        game.log(player, '获得了一层雷击<意志>');
                                        break;
                                    case 2:
                                        game.log(player, '获得了一层命中<意志>');
                                        break;
                                    case 3:
                                        game.log(player, '获得了一层装填<意志>');
                                        break;
                                }
                                if (!player.storage.buqu_buqu[num][1]) {
                                    player.recover(1 - player.hp);
                                    player.storage.buqu_buqu[num][1] = true;
                                }
                            },
                            ai: {
                                threaten: 0.8,
                            },
                            group: ['buqu_buqu_paoji', 'buqu_buqu_leiji', 'buqu_buqu_mingzhong', 'buqu_buqu_zhuangtian'],
                            subSkill: {
                                paoji: {
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    filter: (event, player) => event.nature == 'fire' && player.storage.buqu_buqu[0][0] > 0,
                                    forced: true,
                                    content() {
                                        trigger.num += player.storage.buqu_buqu[0][0];
                                    },
                                },
                                leiji: {
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    filter: (event, player) => event.nature == 'thunder' && player.storage.buqu_buqu[1][0] > 0,
                                    forced: true,
                                    content() {
                                        trigger.num += player.storage.buqu_buqu[1][0];
                                    },
                                },
                                mingzhong: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == 'sha' && !event.parent.directHit.includes(event.target) && player.storage.buqu_buqu[2][0] > 0;
                                    },
                                    logTarget: 'target',
                                    content() {
                                        var id = trigger.target.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (typeof map[id].shanRequired == 'number') {
                                            map[id].shanRequired += player.storage.buqu_buqu[2][0];
                                        } else {
                                            map[id].shanRequired = 1 + player.storage.buqu_buqu[2][0];
                                        }
                                    },
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false; //QQQ
                                        },
                                    },
                                },
                                zhuangtian: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    filter: (event, player) => !event.numFixed && player.storage.buqu_buqu[3][0] > 0,
                                    forced: true,
                                    content() {
                                        trigger.num += player.storage.buqu_buqu[3][0];
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                name: '意志',
                                markcount(storage, player) {
                                    var count = 0;
                                    storage.forEach(function (i) {
                                        if (i[1]) count++;
                                    });
                                    return count;
                                },
                                mark(dialog, storage, player) {
                                    var info = lib.skill.buqu_buqu.getInfo(player);
                                    dialog.addText('共有' + info[0][0] + '层炮击<意志>');
                                    dialog.addText('共有' + info[1][0] + '层雷击<意志>');
                                    dialog.addText('共有' + info[2][0] + '层命中<意志>');
                                    dialog.addText('共有' + info[3][0] + '层装填<意志>');
                                },
                            },
                        },
                        huzhu: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            enable: 'phaseUse',
                            selectCard: 1,
                            filterCard: true,
                            discard: false,
                            lose: false,
                            position: 'he',
                            check: (card) => 8 - get.value(card),
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                var stat = player.getStat('huzhu');
                                return (!stat || !stat.includes(target)) && target != player;
                            },
                            filter(event, player) {
                                var stat = player.getStat('huzhu');
                                if (
                                    game.hasPlayer(function (current) {
                                        return (!stat || !stat.includes(current)) && current != player;
                                    })
                                )
                                    return player.countCards('he') > 0 && !player.hasSkill('huzhu_limit');
                            },
                            content() {
                                'step 0';
                                var stat = player.getStat();
                                if (!stat.huzhu) stat.huzhu = [];
                                stat.huzhu.push(target);
                                event.type1 = get.type2(cards[0]);
                                player.give(cards, target);
                                target.chooseCard('he', true).set('ai', function (card) {
                                    var att = get.attitude(player, target);
                                    if (att > 0) return 8 - get.value(card);
                                    return 0.01 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    event.type2 = get.type2(card);
                                    target.give(card, player);
                                }
                                ('step 2');
                                if (event.type2 == event.type1) game.asyncDraw([player, target]);
                                else {
                                    player.draw(2);
                                    player.addTempSkill('huzhu_limit', 'phaseEnd');
                                }
                            },
                            subSkill: {
                                limit: {},
                            },
                            ai: {
                                order: 1,
                                expose: 0.2,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                        shengwei: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object') {
                                        var storage = player.storage.shengwei;
                                        if (storage < (card.number || 0)) return num + 10;
                                    }
                                },
                            },
                            mark: false,
                            marktext: '威',
                            intro: {
                                name: '虎虎生威',
                                markcount(storage, player) {
                                    return storage;
                                },
                                mark(dialog, storage, player) {
                                    dialog.addText('上一张使用牌的点数大小:' + storage);
                                },
                            },
                            init: (player) => (player.storage.shengwei = 0),
                            trigger: { player: 'useCard' },
                            forced: true,
                            content() {
                                var storage = player.storage.shengwei;
                                var num = trigger.card.number || 0;
                                player.storage.shengwei = num;
                                if (storage < num) {
                                    trigger.effectCount++;
                                    var type = get.type(trigger.card);
                                    switch (type) {
                                        case 'basic':
                                            player.draw();
                                            break;
                                        case 'trick':
                                            trigger.nowuxie = true;
                                            break;
                                        default:
                                            player.changeHujia();
                                            break;
                                    }
                                }
                            },
                            ai: {
                                threaten: 1,
                            },
                        },
                        tiangui: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (
                                    player.countCards('he') > 0 &&
                                    game.hasPlayer((current) => {
                                        return current != player && !current.getExpansions('AP').length;
                                    })
                                );
                            },
                            filterCard: true,
                            discard: false,
                            lose: false,
                            delay: false,
                            filterTarget(card, player, target) {
                                return target != player && !target.getExpansions('AP').length;
                            },
                            content() {
                                target.addToExpansion(cards, player, 'give').gaintag.add('AP');
                                if (cards[0].name == 'sha') {
                                    player.draw();
                                }
                            },
                            group: ['tiangui_damage'],
                            subSkill: {
                                damage: {
                                    audio: 'ext:碧蓝航线Q/audio:true',
                                    trigger: { global: 'phaseZhunbeiBegin' },
                                    forced: true,
                                    filter: (event, player) => event.player.getExpansions('AP').length,
                                    content() {
                                        var cards = trigger.player.getExpansions('AP');
                                        player.useCard({ name: 'sha', storage: { tiangui_damage: true } }, cards, trigger.player);
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (tag == 'unequip') {
                                                if (arg && arg.card && arg.card.storage && arg.card.storage.tiangui_damage) return true;
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                            ai: {
                                order: 2,
                                expose: 0.2,
                                result: {
                                    target: () => -1,
                                },
                            },
                        },
                        AP: {
                            intro: {
                                name: '18英寸的正义',
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                        },
                        suijia: {
                            trigger: { source: 'damageEnd' },
                            _priority: 20,
                            forced: true,
                            content() {
                                trigger.player.addSkill('pojia');
                            },
                            group: ['suijia_hujia'],
                            subSkill: {
                                hujia: {
                                    audio: 'ext:碧蓝航线Q/audio:true',
                                    trigger: { source: 'damageBegin1' },
                                    _priority: 10,
                                    forced: true,
                                    filter: (event, player) => event.card && event.card.name == 'sha', //QQQ
                                    content() {
                                        if (trigger.player.hujia) {
                                            trigger.num++;
                                        }
                                        var list = [];
                                        for (var i = 1; i < 6; i++) {
                                            //QQQ
                                            if (!trigger.player.isDisabled(i)) list.push(i);
                                        }
                                        list.length ? trigger.player.disableEquip(list.randomGet()) : trigger.player.loseMaxHp();
                                    },
                                },
                            },
                            derivation: ['pojia'],
                            ai: {
                                threaten: 1.15,
                            },
                        },
                        fenjin: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            mark: true,
                            trigger: {
                                player: 'useCard',
                            },
                            preHidden: true,
                            forced: true,
                            init(player) {
                                if (!player.storage.fenjin) player.storage.fenjin = 0;
                            },
                            content() {
                                'step 0';
                                trigger.baseDamage += player.storage.fenjin;
                                player.storage.fenjin++;
                                player.update();
                                ('step 1');
                                if (player.storage.fenjin > 2) {
                                    player.storage.fenjin = 0;
                                    player.draw();
                                }
                            },
                            intro: {
                                name: '鹤之奋进',
                                mark: (dialog, storage, player) => '下一次使用牌伤害值/回复值+' + player.storage.fenjin,
                            },
                            ai: {
                                threaten: 1,
                            },
                        },
                        juenian: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            mod: {
                                cardSavable(card, player, target) {
                                    if (card.name == 'tao' && get.distance(player, target) > 1) return false;
                                },
                            },
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                if (event.source && event.source != player) {
                                    if (player.storage.juenian_notUse.includes(event.player)) return true;
                                    return false;
                                }
                            },
                            content() {
                                'step 0';
                                var list = ['复仇', '携骸', 'cancel2'];
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['复仇:失去1点体力并对' + get.translation(trigger.source) + '造成两点伤害', '携骸:回复1点体力并获得' + get.translation(trigger.player) + '所有手牌'])
                                    .set('prompt', '绝念:你的心境是什么样的呢？')
                                    .set(
                                        'choice',
                                        (function () {
                                            player.hp > 1 ? '复仇' : '携骸';
                                        })()
                                    )
                                    .set('ai', () => _status.event.choice);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    event.control = result.control;
                                }
                                ('step 2');
                                if (event.control == '复仇') {
                                    player.loseHp();
                                    trigger.source.damage(2);
                                }
                                ('step 3');
                                if (event.control == '携骸') {
                                    player.recover();
                                    event.togain = trigger.player.getCards('h');
                                    player.gain(event.togain, trigger.player, 'giveAuto');
                                }
                            },
                            group: ['juenian_notUse', 'juenian_clear'],
                            subSkill: {
                                notUse: {
                                    init: (player) => (player.storage.juenian_notUse = []),
                                    mark: true,
                                    trigger: {
                                        global: 'dying',
                                    },
                                    forced: true,
                                    filter: (event, player) => !player.canUse('tao', event.player, false) && event.player != player,
                                    content() {
                                        player.storage.juenian_notUse.push(trigger.player);
                                    },
                                },
                                clear: {
                                    trigger: {
                                        global: ['dyingAfter', 'dieAfter'],
                                    },
                                    filter: (event, player) => player.storage.juenian_notUse.includes(event.player),
                                    forced: true,
                                    content() {
                                        player.storage.juenian_notUse.remove(trigger.player);
                                    },
                                },
                            },
                        },
                        wuwei: {
                            audio: 'ext:碧蓝航线Q/audio:3',
                            enable: 'phaseUse',
                            zhuanhuanji: 'number',
                            usable: 1,
                            content() {
                                'step 0';
                                player.countMark('wuwei') % 2 == 0 ? player.loseHp() : player.recover();
                                ('step 1');
                                var num = player.maxHp - player.hp;
                                if (num != 0) player.draw(num);
                                player.changeZhuanhuanji('wuwei');
                            },
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player) {
                                    return '已转换过' + (storage || 0) + '次';
                                },
                            },
                            ai: {
                                order(skill, player) {
                                    if (player.countCards('h') > player.hp) return 7;
                                    return 14;
                                },
                                result: {
                                    player(player) {
                                        if (player.countMark('wuwei') % 2 == 0) {
                                            if (player.hp > 2) return 1;
                                            else {
                                                if (
                                                    player.hasCard(function (card) {
                                                        return (
                                                            get.tag(card, 'damage') &&
                                                            game.hasPlayer(function (current) {
                                                                return get.effect(current, card, player, player) > 0 && player.canUse(card, current);
                                                            })
                                                        );
                                                    })
                                                ) {
                                                    if (player.hp > 0) return 1;
                                                    else {
                                                        if (
                                                            player.hasCard(function (card) {
                                                                return get.tag(card, 'save') && player.canUse(card, player);
                                                            })
                                                        )
                                                            return 1;
                                                        else return -1;
                                                    }
                                                } else return 1;
                                            }
                                        } else {
                                            if (player.hp < 2) return 1;
                                            else {
                                                if (
                                                    !player.hasCard(function (card) {
                                                        return (
                                                            get.tag(card, 'damage') &&
                                                            game.hasPlayer(function (current) {
                                                                return get.effect(current, card, player, player) > 0 && player.canUse(card, current);
                                                            })
                                                        );
                                                    })
                                                )
                                                    return 1;
                                                return -1;
                                            }
                                        }
                                    },
                                },
                                threaten: 0.2,
                            },
                            group: ['wuwei_ji', 'wuwei_ou'],
                            subSkill: {
                                ji: {
                                    trigger: {
                                        source: 'damageBegin2',
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countMark('wuwei') % 2 != 0) {
                                            if (event.name == 'damage' && event.player != player) return event.player.countCards('h') > player.countCards('h');
                                            else return true;
                                        }
                                    },
                                    content() {
                                        if (trigger.name == 'damage') trigger.num++;
                                        else {
                                            var targetx = game.filterPlayer(function (current) {
                                                return current != player && current.hp > player.hp;
                                            });
                                            trigger.directHit.addArray(targetx);
                                        }
                                    },
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            return arg && arg.target && arg.target != player && arg.target.hp > player.hp;
                                        },
                                        effect: {
                                            player(card, player, target) {
                                                if (player.countMark('wuwei') % 2 != 0) {
                                                    if (get.tag(card, 'damage')) return 2;
                                                }
                                            },
                                        },
                                    },
                                },
                                ou: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (target.countMark('wuwei') % 2 == 0 && player.hp > target.hp && player != target) return false;
                                        },
                                    },
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.source && event.source != player && player.countMark('wuwei') % 2 == 0) return event.source.countCards('h') > player.countCards('h');
                                    }, //QQQ
                                    content() {
                                        trigger.num--;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (player.countMark('wuwei') % 2 == 0) {
                                                    if (get.tag(card, 'damage') && target.countCards('h') > player.countCards('h')) return 0.5;
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        yingyong: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.hp <= 2 && get.type(card) == 'basic') return Infinity;
                                },
                                targetInRange(card, player) {
                                    if (player.hp > 2 && get.type2(card) == 'trick') return true;
                                },
                            },
                            trigger: {
                                player: ['damageBefore', 'damageBegin4'],
                            },
                            forced: true,
                            filter: (event, player) => event.nature == 'fire' && player.hp <= 2,
                            content() {
                                trigger.cancel();
                            },
                            group: ['yingyong_cancel', 'yingyong_phaseEnd'],
                            subSkill: {
                                cancel: {
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    forced: true,
                                    filter: (event, player) => event.nature == 'thunder' && player.hp > 2,
                                    content() {
                                        trigger.num--;
                                    },
                                },
                                phaseEnd: {
                                    trigger: { player: 'phaseEnd' },
                                    filter(event, player) {
                                        if (!player.getHistory('sourceDamage').length) return true;
                                        else {
                                            var history = player.getHistory('sourceDamage');
                                            var hasPhaseUsing = false;
                                            for (var i = 0; i < history.length; i++) {
                                                if (history[i].isPhaseUsing()) {
                                                    hasPhaseUsing = true;
                                                    break;
                                                }
                                            }
                                            if (hasPhaseUsing) return false;
                                            return true;
                                        }
                                    },
                                    prompt: () => get.prompt('wuwei'),
                                    check(event, player) {
                                        return player.countMark('wuwei') % 2 != 0;
                                    },
                                    content() {
                                        player.useSkill('wuwei');
                                    },
                                },
                            },
                            ai: {
                                nofire: true,
                                skillTagFilter: (player) => player.hp <= 2,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage') && player.hp <= 2) return 'zerotarget';
                                    },
                                },
                            },
                        },
                        budon: {
                            trigger: {
                                player: ['damageBefore', 'damageBegin4'],
                                source: 'damageBefore',
                            },
                            forced: true,
                            filter: (event, player) => event.nature == 'ice',
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    player(card, player, target, current) {
                                        if (get.tag(card, 'iceDamage')) return [0, 0, 0, 0];
                                    },
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'iceDamage')) return [0, 0, 0, 0];
                                    },
                                },
                            },
                        },
                        xiongyan: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.countCards('h') == 0 ? player.draw(5) : player.draw(3);
                                player.chooseCardTarget({
                                    prompt: '请选择〖雄炎〗的牌和目标',
                                    prompt2: '将一张牌交给一名其他角色,并根据所选牌类型执行相应效果:<br>1.基本牌:你对一名其他角色造成1点火焰伤害;<br>2.锦囊牌:你将一名角色区域内一张牌置于牌堆顶;<br>3.不为上述类型:执行上述所有效果;',
                                    forced: true,
                                    position: 'he',
                                    filterCard: true,
                                    filterTarget: lib.filter.notMe,
                                });
                                ('step 2');
                                if (result.bool) {
                                    event.type = get.type2(result.cards[0]);
                                    result.targets[0].gain(result.cards, player, 'giveAuto');
                                }
                                ('step 3');
                                if (event.type != 'trick') {
                                    player
                                        .chooseTarget(
                                            (card, player, target) => {
                                                return target != player;
                                            },
                                            '请选择一名其他角色',
                                            true
                                        )
                                        .set('ai', (target) => {
                                            var player = _status.event.player;
                                            return get.damageEffect(target, player, player);
                                        })
                                        .set('prompt2', '对其造成1点火焰伤害');
                                }
                                ('step 4');
                                if (event.type != 'trick' && result.bool) {
                                    player.line(result.targets[0], 'fire');
                                    result.targets[0].damage('fire').source = player;
                                }
                                ('step 5');
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.countCards('hej') > 0;
                                    }) &&
                                    event.type != 'basic'
                                ) {
                                    player
                                        .chooseTarget(true, function (card, player, target) {
                                            return target.countCards('hej') > 0;
                                        })
                                        .set('prompt', '请选择一名角色')
                                        .set('ai', function (target) {
                                            return -get.attitude(player, target);
                                        })
                                        .set('prompt2', '将其区域内一张牌置于牌堆顶');
                                } else event.goto(8);
                                ('step 6');
                                if (event.type != 'basic' && result.bool) {
                                    event.target = result.targets[0];
                                    player.choosePlayerCard(event.target, 'hej', true);
                                }
                                ('step 7');
                                if (event.type != 'basic' && result.bool) {
                                    var card = result.cards[0];
                                    event.target.$throw(get.position(card) == 'h' ? 1 : card, 1000);
                                    event.target.lose(card, ui.cardPile, 'insert');
                                }
                                ('step 8');
                                if (event.count > 0) event.goto(1);
                            },
                            ai: {
                                maixie: true,
                            },
                        },
                        Murmansk_yingzi: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: {
                                player: 'phaseDrawEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                event.cardx = result[0];
                                var cards = event.cardx;
                                player
                                    .chooseTarget('是否将' + get.translation(cards) + '交给一名其他角色？', (card, player, target) => {
                                        return target != player;
                                    })
                                    .set('prompt2', '若如此做,你视为使用一张无距离限制的基本牌');
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].gain(event.cardx, player, 'giveAuto');
                                    var list = [];
                                    get.inpile('basic').forEach((card) => {
                                        if (
                                            lib.filter.cardUsable({ name: 'sha' }, player) &&
                                            game.hasPlayer((current) => {
                                                return player.canUse({ name: card }, current, false);
                                            })
                                        ) {
                                            if (card == 'sha') {
                                                list.push(['基本', '', 'sha']);
                                                lib.inpile_nature.forEach((i) => {
                                                    if (
                                                        lib.filter.cardUsable({ name: 'sha', nature: i }, player) &&
                                                        game.hasPlayer((current) => {
                                                            return player.canUse({ name: 'sha', nature: i }, current);
                                                        })
                                                    ) {
                                                        list.push(['基本', '', 'sha', i]);
                                                    }
                                                });
                                            } else list.push(['基本', '', card]);
                                        }
                                    });
                                    if (list.length) {
                                        player.chooseButton(['英姿:请选择你要使用的牌', true, [list, 'vcard']]).set('ai', (button) => {
                                            var player = _status.event.player;
                                            var card = { name: button.link[2], nature: button.link[3] };
                                            if (card.name == 'tao') {
                                                if (player.hp == 1 || (player.hp == 2 && !player.hasShan()) || player.needsToDiscard()) {
                                                    return 5;
                                                }
                                                return 1;
                                            }
                                            if (card.name == 'sha') {
                                                if (
                                                    game.hasPlayer((current) => {
                                                        return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                    })
                                                ) {
                                                    if (card.nature == 'fire') return 2.95;
                                                    if (card.nature == 'thunder' || card.nature == 'ice') return 2.92;
                                                    return 2.9;
                                                }
                                                return 0;
                                            }
                                            if (card.name == 'jiu') {
                                                return 0.5;
                                            }
                                            return 0;
                                        });
                                    } else event.finish();
                                } else event.finish();
                                ('step 3');
                                if (result && result.bool && result.links[0]) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseUseTarget(card, 'nodistance', true, false);
                                }
                            },
                        },
                        jiahu: {
                            global: ['g_jiahu1', 'g_jiahu2'],
                            audio: 'ext:碧蓝航线Q/audio:2',
                            marktext: '护',
                            trigger: { player: 'phaseBegin' },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !current.hasMark('jiahu');
                                });
                            },
                            check(event, player) {
                                return game.hasPlayer(function (current) {
                                    var att = get.attitude(player, current);
                                    return att > 0 && !current.hasMark('jiahu');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(
                                        [1, player.hp],
                                        function (card, player, target) {
                                            return !target.hasMark('jiahu');
                                        },
                                        true
                                    )
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) > 0;
                                    })
                                    .set('prompt', '请选择〖加护〗的目标')
                                    .set('prompt2', '');
                                ('step 1');
                                if (result.bool) {
                                    result.targets.forEach((target) => target.addMark('jiahu'));
                                }
                            },
                            intro: {
                                name: '鹤之守护',
                                content: '全力攻击!我来掩护你!',
                            },
                        },
                        g_jiahu1: {
                            trigger: { player: 'damageBegin4' },
                            filter: (event, player) => player.countMark('jiahu') > 0,
                            content() {
                                player.removeMark('jiahu');
                                trigger.num--;
                            },
                        },
                        g_jiahu2: {
                            trigger: { source: 'damageBegin2' },
                            check: (event, player) => get.attitude(player, event.player) < 0,
                            filter: (event, player) => player.countMark('jiahu') > 0,
                            content() {
                                player.removeMark('jiahu');
                                trigger.num++;
                            },
                        },
                        S_yaoji: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (player.hasSkill('S_yaoji_limit')) {
                                        var storage1 = player.storage.S_yaoji_limit[1];
                                        var storage2 = target.storage.S_yaoji[1];
                                        var num = target.hp + storage2 - player.hp;
                                        if (num <= storage1 && card) return false;
                                    }
                                },
                            },
                            init: (player) => (player.storage.S_yaoji = [undefined, 0]),
                            audio: 'ext:碧蓝航线Q/audio:2',
                            mark: true,
                            trigger: { global: 'roundStart' },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.S_yaoji = [undefined, 0];
                                var players = game.filterPlayer((current) => current.hasSkill('S_yaoji_limit'));
                                players.forEach((player) => player.removeSkill('S_yaoji_limit'));
                                player
                                    .chooseTarget(true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('prompt', '请选择〖邀击〗的目标')
                                    .set('ai', function (target) {
                                        return -target.hp * get.attitude(player, target);
                                    })
                                    .set('prompt2', '直到你重新发动〖邀击〗前,你只能成为X次该角色牌的目标(X为你的体力与你使用牌指定其为目标的次数的和与该角色体力的差,最小为0)');
                                ('step 1');
                                if (result.bool) {
                                    player.storage.S_yaoji = [result.targets[0], 0];
                                    result.targets[0].storage.S_yaoji_limit = [player, 0];
                                    result.targets[0].addSkill('S_yaoji_limit');
                                }
                            },
                            intro: {
                                name: '九段渐减邀击计划',
                                markcount: (storage) => storage[1],
                                mark(dialog, storage, player) {
                                    var num = storage[1],
                                        target = storage[0];
                                    if (target != undefined) {
                                        var name = get.translation(target);
                                        dialog.addText(num > 0 ? '已使用牌指定' + name + '为目标' + num + '次' : '尚未使用牌指定' + name + '为目标');
                                        dialog.addText('你要明白,实际上' + name + '不可能按你的计划行事');
                                    } else dialog.addText('未选定九段渐减邀击计划的目标');
                                },
                            },
                            group: ['S_yaoji_targeted'],
                            subSkill: {
                                targeted: {
                                    trigger: { player: 'useCardToTargeted' },
                                    firstDo: true,
                                    forced: true,
                                    filter: (event, player) => event.target.hasSkill('S_yaoji_limit'),
                                    content() {
                                        player.storage.S_yaoji[1]++;
                                    },
                                },
                                limit: {
                                    trigger: { player: 'useCardToTargeted' },
                                    firstDo: true,
                                    forced: true,
                                    filter: (event, player) => event.target == player.storage.S_yaoji_limit[0],
                                    content() {
                                        player.storage.S_yaoji_limit[1]++;
                                    },
                                    mark: true,
                                    intro: {
                                        name: '九段渐减邀击计划',
                                        markcount: (storage) => storage[1],
                                        mark(dialog, storage, player) {
                                            var num1 = storage[0].storage.S_yaoji[1];
                                            var num = storage[0].hp + num1 - player.hp - storage[1];
                                            var name = get.translation(storage[0]);
                                            dialog.addText(num > 0 ? '还可使用牌指定' + name + '为目标' + num + '次' : '不可使用牌指定' + name + '为目标');
                                        },
                                    },
                                },
                            },
                        },
                        shubo: {
                            trigger: { player: 'dying' },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            forced: true,
                            content() {
                                'step 0';
                                var card = get.cards(1);
                                game.cardsGotoOrdering(card);
                                player.showCards(card, get.translation(player) + '开始反向注水!');
                                event.color = get.color(card);
                                ('step 1');
                                var cards = player.getCards('h', (card) => get.color(card) == event.color);
                                var num1 = cards.length;
                                var num2 = player.countCards('h', (card) => get.color(card) != event.color);
                                if (num1 > num2) {
                                    player.discard(cards);
                                    player.draw(num1);
                                    player.recover();
                                } else event.finish();
                                ('step 2');
                                if (player.hp < 1) event.goto(0);
                            },
                        },
                        xiangjie: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            marktext: '逢',
                            intro: {
                                name: '逢敌',
                                content: '皇家海军逢敌必战!',
                            },
                            mod: {
                                globalFrom: (player, target, distance) => (distance -= player.countMark('xiangjie')),
                            },
                            enable: 'phaseUse',
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                if (player.countCards('he')) {
                                    if (game.hasPlayer((current) => get.distance(player, current) <= 1)) return true;
                                    for (var i = 0; i < player.storage.xiangjie_damage.length; i++) {
                                        if (player.storage.xiangjie_damage[i].isAlive()) return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var list = ['受伤'];
                                if (player.hasMark('xiangjie')) list.push('弃置');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set(
                                        'choice',
                                        (function () {
                                            if (player.hasMark('xiangjie')) return '弃置';
                                            else return '受伤';
                                        })()
                                    )
                                    .set('ai', () => _status.event.choice);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    result.control == '受伤' ? player.damage('nosource') : player.removeMark('xiangjie');
                                    player.draw();
                                } else {
                                    player.getStat('skill').xiangjie--;
                                    event.finish();
                                }
                                ('step 2');
                                var List = lib.inpile,
                                    list = [],
                                    xtarget = player.storage.xiangjie_damage;
                                for (var i = 0; i < List.length; i++) {
                                    var name = List[i],
                                        card = { name: name };
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse({ name: name }, current, false) && (get.distance(player, current) <= 1 || xtarget.includes(current)) && current != player;
                                        })
                                    ) {
                                        if (get.zhinangs().includes(name)) list.push(['智囊', '', name]);
                                        else if (get.tag(card, 'damage')) {
                                            if (name == 'sha') {
                                                list.push(['基本', '', 'sha']);
                                                for (var j of lib.inpile_nature) {
                                                    list.push(['基本', '', 'sha', j]);
                                                }
                                            } else if (get.type2(name) == 'basic') list.push(['基本', '', name]);
                                            else if (get.type2(name) == 'trick') list.push(['锦囊', '', name]);
                                        }
                                    }
                                }
                                if (list.length == 0) var dialog = ui.create.dialog('相接无可用牌');
                                else var dialog = ui.create.dialog('相接:请选择要使用的牌', [list, 'vcard'], 'hidden');
                                player.chooseButton(dialog).set('ai', function (button) {
                                    var card = {
                                        name: button.link[2],
                                        nature: button.link[3],
                                    },
                                        player = _status.event.player;
                                    return player.getUseValue(card);
                                });
                                ('step 3');
                                if (result.bool) {
                                    event.xcard = result.buttons[0].link[2];
                                    event.xnature = result.buttons[0].link[3];
                                    player.chooseCardTarget({
                                        prompt: '请选择〖相接〗的牌和目标',
                                        prompt2: '将一张牌当作一张' + (get.translation(event.xnature) || '') + get.translation(event.xcard) + '对其使用',
                                        forced: true,
                                        position: 'he',
                                        filterCard: true,
                                        filterTarget(card, player, target) {
                                            var targets = player.storage.xiangjie_damage;
                                            return player.canUse({ name: event.xcard }, target, false) && (get.distance(player, target) <= 1 || targets.includes(target)) && target != player;
                                        },
                                        ai1: (card) => 6 - get.value(card),
                                        ai2: (target) =>
                                            get.effect(
                                                target,
                                                {
                                                    name: event.xcard,
                                                    nature: event.xnature,
                                                },
                                                _status.event.player
                                            ),
                                    });
                                } else {
                                    player.getStat('skill').xiangjie--;
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    var name = event.xcard,
                                        nature = event.xnature;
                                    var cards = result.cards,
                                        target = result.targets[0];
                                    player.useCard({ name: name, nature: nature }, cards, target);
                                }
                            },
                            ai: {
                                order: 4,
                                result: {
                                    player(player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                var att = get.attitude(player, current);
                                                var storage = player.storage.xiangjie_damage;
                                                return storage.includes(current) && att <= 0;
                                            })
                                        ) {
                                            if (player.hasMark('xiangjie')) return 1;
                                            else {
                                                if (player.hp > 2) return 1;
                                                return -1;
                                            }
                                        }
                                    },
                                },
                            },
                            group: ['xiangjie_damage'],
                            subSkill: {
                                damage: {
                                    init(player) {
                                        if (!player.storage.xiangjie_damage) player.storage.xiangjie_damage = [];
                                    },
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('xiangjie', trigger.num);
                                        if (trigger.source && trigger.source != player) {
                                            player.storage.xiangjie_damage.add(trigger.source);
                                        }
                                    },
                                },
                            },
                        },
                        tonggui: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            limited: true,
                            trigger: {
                                player: 'dying',
                            },
                            logTarget: (event, player) => event.source,
                            filter: (event, player) => event.source && event.source != player,
                            check: (event, player) => -get.attitude(player, event.player),
                            content() {
                                'step 0';
                                player.awakenSkill('tonggui');
                                player.discard(player.getCards('he'));
                                ('step 1');
                                trigger.source.damage(player.maxHp - player.hp + 1);
                            },
                            ai: {
                                maixie_defend: true,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        boqiang: {
                            marktxt: '烬',
                            trigger: {
                                player: 'useCardToTargeted',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (event.player == player) return event.target != player;
                                else return true;
                            },
                            forced: true,
                            content() {
                                if (trigger.player == player) trigger.target.addMark('boqiang');
                                else trigger.player.addMark('boqiang');
                            },
                            group: ['boqiang_use'],
                            subSkill: {
                                use: {
                                    audio: 'ext:碧蓝航线Q/audio:true',
                                    enable: 'phaseUse',
                                    filter: (event, player) => game.hasPlayer((current) => current.countMark('boqiang') > 2 && player.canUse({ name: 'sha', nature: 'fire' }, current, false)),
                                    selectTarget: 1,
                                    prompt: '移去一名角色的3枚<烬火枪印>,视为对其使用一张无视防具的【杀】',
                                    filterTarget: (card, player, target) => target.countMark('boqiang') > 2 && player.canUse({ name: 'sha', nature: 'fire' }, target, false),
                                    content() {
                                        target.removeMark('boqiang', 3);
                                        player.useCard({ name: 'sha', nature: 'fire', storage: { boqiang: true } }, target, false);
                                    },
                                    ai: {
                                        order: 3,
                                        expose: 0.2,
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (tag == 'unequip') {
                                                if (arg && arg.card && arg.card.storage && arg.card.storage.boqiang) return true;
                                                return false;
                                            }
                                        },
                                        result: {
                                            target: () => -1,
                                        },
                                    },
                                },
                            },
                            intro: {
                                name: '烬火枪印',
                            },
                        },
                        yaozhuo: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: { global: 'damageBegin3' },
                            logTarget: (event, player) => event.player,
                            prompt2: '令你成为此次伤害来源,同时伤害值翻倍并为火焰伤害',
                            filter: (event, player) => event.player.countMark('boqiang') > 2,
                            check(event, player) {
                                return get.damageEffect(player, event.player, player, 'fire');
                            },
                            content() {
                                player.line(trigger.player, 'fire');
                                trigger.player.removeMark('boqiang', 3);
                                (trigger.nature = 'fire'), (trigger.num *= 2);
                                trigger.source = player;
                            },
                            group: ['yaozhuo_draw'],
                            subSkill: {
                                draw: {
                                    trigger: { source: 'damageEnd' },
                                    forced: true,
                                    filter: (event, player) => event.nature == 'fire',
                                    content() {
                                        player.draw(trigger.num);
                                    },
                                },
                            },
                        },
                        qianjin: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('qianjin')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('qianjin')) {
                                        return false;
                                    }
                                },
                            },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = 3 + player.maxHp - player.hp;
                                var cards = get.cards(num);
                                event.cardx = cards;
                                game.cardsGotoOrdering(cards);
                                player.viewCards('迈向未来的勇气', cards);
                                ('step 1');
                                var cards = event.cardx;
                                player
                                    .chooseControl('受伤', '回复')
                                    .set('choiceList', ['受伤:受到1点伤害获得' + get.translation(cards) + ',将一张牌置于牌堆顶', '回复:回复1点体力,将' + get.translation(cards) + '以原顺序放回牌堆顶'])
                                    .set('prompt', '迈向未来的勇气:请选择一项')
                                    .set(
                                        'choice',
                                        (function () {
                                            var tao = false;
                                            for (var i = 0; i < cards.length; i++) {
                                                if (cards[i].name == 'tao') {
                                                    var tao = true;
                                                    break;
                                                }
                                            }
                                            if ((player.hasCard({ name: 'tao' }) || tao) && player.canUse({ name: 'tao' }, player)) return '受伤';
                                            else if (player.countMark('Kxie_hope') > 1) {
                                                if (player.countMark('Kxie_hpoe') > 1) return '受伤';
                                                else {
                                                    if (player.hp == 1) return '回复';
                                                    return '受伤';
                                                }
                                            } else if (player.hp > 1) {
                                                var js = player.getCards('j');
                                                if (js && js.length && !player.hasWuxie()) {
                                                    var num = 0;
                                                    for (var i = 0; i < js.length; i++) {
                                                        var judge = get.judge(js[i]);
                                                        if (judge(cards[i]) > 0) num++;
                                                    }
                                                    if (js.length - num > 1) return '受伤';
                                                    return '回复';
                                                } else if (player.hp > 2) return '受伤';
                                                else return '回复';
                                            } else return '回复';
                                        })()
                                    )
                                    .set('ai', () => _status.event.choice);
                                ('step 2');
                                if (result.control == '回复') {
                                    player.recover();
                                    var cards = event.cardx;
                                    cards.reverse();
                                    for (var i = 0; i < cards.length; i++) {
                                        ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
                                    }
                                    event.finish();
                                } else {
                                    player.gain(event.cardx, 'gain2').gaintag = ['qianjin'];
                                    player.damage();
                                    player
                                        .chooseCard('迈向未来的勇气', true)
                                        .set('ai', (card) => {
                                            var js = player.getCards('j');
                                            if (js && js.length && !player.hasWuxie()) {
                                                var judge = get.judge(js[0]);
                                                if (judge(card) > 0) return 7 - get.value(card);
                                                return !card.hasGaintag('qianjin') && 6 - get.value(card);
                                            } else return !card.hasGaintag('qianjin') && 6 - get.value(card);
                                        })
                                        .set('prompt2', '请选择一张牌置于牌堆顶');
                                }
                                ('step 3');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    player.$throw(get.position(card) == 'h' ? 1 : card, 1000);
                                    player.lose(card, ui.cardPile, 'insert');
                                }
                            },
                        },
                        Kxie: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('Kxie_hope') > 1 || player.countMark('Kxie_doom') > 1;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                if (player.countMark('Kxie_hope') > 1) list.push('希望');
                                if (player.countMark('Kxie_doom') > 1) list.push('厄运');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set(
                                        'choice',
                                        (function () {
                                            if (Math.floor(player.countMark('Kxie_hope') / 2) > 1 && list.includes('希望')) return '希望';
                                            else if (Math.floor(player.countMark('Kxie_doom') / 2) > 1 && list.includes('厄运')) return '厄运';
                                            else return list.randomGet();
                                        })()
                                    )
                                    .set('prompt', '请选择你要转化的标记')
                                    .set('ai', () => {
                                        return _status.event.choice;
                                    })
                                    .set('prompt2', '将两枚<希望>标记转化为一枚<厄运>标记,或将两枚<厄运>标记转化为<希望>标记');
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (result.control == '希望')
                                        var mark1 = 'Kxie_hope',
                                            mark2 = 'Kxie_doom';
                                    else
                                        var mark1 = 'Kxie_doom',
                                            mark2 = 'Kxie_hope';
                                    player.removeMark(mark1, 2);
                                    player.addMark(mark2);
                                } else game.log(player, '表示自己还没思考好');
                            },
                            group: ['Kxie_hope', 'Kxie_doom', 'Kxie_damage', 'Kxie_targeted'],
                            subSkill: {
                                hope: {
                                    marktext: '希',
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    content() {
                                        player.addMark('Kxie_hope', trigger.num);
                                    },
                                    intro: {
                                        name: '希望',
                                        content: '希望是厄运的忠实姐妹',
                                    },
                                },
                                doom: {
                                    marktext: '厄',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    _priority: 10,
                                    forced: true,
                                    content() {
                                        player.addMark('Kxie_doom', trigger.num);
                                    },
                                    intro: {
                                        name: '厄运',
                                        content: '厄运是希望的忠实姐妹',
                                    },
                                    ai: {
                                        maixie: true,
                                    },
                                },
                                damage: {
                                    audio: 'ext:碧蓝航线Q/audio:2',
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        return player.countMark('Kxie_hope') > 1 || player.countMark('Kxie_doom') > 1;
                                    },
                                    content() {
                                        'step 0';
                                        var list = [];
                                        if (player.countMark('Kxie_hope') > 1) list.push('选项一');
                                        if (player.countMark('Kxie_doom') > 1) list.push('选项二');
                                        list.push('cancel2');
                                        player
                                            .chooseControl(list)
                                            .set('choiceList', ['移去两枚<希望>标记,令此次伤害-1', '移去两枚<厄运>标记,对一名其他角色造成一点火焰伤害'])
                                            .set('prompt', '是否发动〖希厄〗？')
                                            .set(
                                                'choice',
                                                (function () {
                                                    if (list.includes('选项一')) {
                                                        if (player.hp == 1) return '选项一';
                                                        return list.randomGet();
                                                    }
                                                    return '选项二';
                                                })()
                                            )
                                            .set('ai', () => _status.event.choice);
                                        ('step 1');
                                        if (result.control != 'cancel2') {
                                            if (result.control == '选项一') {
                                                trigger.num--;
                                                player.removeMark('Kxie_hope', 2);
                                                event.finish();
                                            } else {
                                                player.removeMark('Kxie_doom', 2);
                                                player
                                                    .chooseTarget('希厄:请选择目标', true, (card, player, target) => {
                                                        return target != player;
                                                    })
                                                    .set('ai', (target) => {
                                                        var player = _status.event.player;
                                                        return get.damageEffect(target, player, player, 'fire');
                                                    })
                                                    .set('prompt2', '选择一名其他角色,对其造成一点火焰伤害');
                                            }
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            player.line(result.targets[0], 'fire');
                                            result.targets[0].damage('fire').source = player;
                                        }
                                    },
                                    ai: {
                                        maixie_defend: true,
                                    },
                                },
                                targeted: {
                                    audio: 'ext:碧蓝航线Q/audio:2',
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    filter(event, player) {
                                        if (event.player != player && (get.type(event.card) == 'trick' || get.type(event.card) == 'basic')) {
                                            if (player.countMark('Kxie_hope') > 1) return true;
                                            if (
                                                player.countMark('Kxie_doom') > 1 &&
                                                game.hasPlayer((current) => {
                                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, event.player, current);
                                                })
                                            )
                                                return true;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = [];
                                        if (player.countMark('Kxie_hope') > 1) list.push('选项一');
                                        if (
                                            player.countMark('Kxie_doom') > 1 &&
                                            game.hasPlayer((current) => {
                                                return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
                                            })
                                        )
                                            list.push('选项二');
                                        list.push('cancel2');
                                        player
                                            .chooseControl(list)
                                            .set('choiceList', ['移去两枚<希望>标记,取消成为此' + get.translation(trigger.card) + '的目标', '移去两枚<厄运>标记,令一名其他角色也成为此' + get.translation(trigger.card) + '的目标'])
                                            .set('prompt', '是否发动〖希厄〗？')
                                            .set(
                                                'choice',
                                                (function () {
                                                    if (list.includes('选项一')) {
                                                        if (get.effect(player, trigger.card, player, player) > 0) {
                                                            return list.randomGet('选项一');
                                                        }
                                                        return list.randomGet();
                                                    }
                                                    return list.randomGet();
                                                })()
                                            )
                                            .set('ai', () => _status.event.choice);
                                        ('step 1');
                                        if (result.control != 'cancel2') {
                                            if (result.control == '选项一') {
                                                trigger.targets.remove(player);
                                                player.removeMark('Kxie_hope', 2);
                                            } else {
                                                player.removeMark('Kxie_doom', 2);
                                                player
                                                    .chooseTarget('希厄:请选择目标', true, (card, player, target) => {
                                                        return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                                    })
                                                    .set('ai', (target) => {
                                                        var trigger = _status.event.getTrigger();
                                                        return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                                    })
                                                    .set('prompt2', '选择一名其他角色,令其也成为' + get.translation(trigger.card) + '的目标');
                                            }
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            trigger.targets.push(result.targets[0]);
                                        }
                                    },
                                },
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player) {
                                        var num = Math.abs(player.countMark('Kxie_hope') - player.countMark('Kxie_doom'));
                                        if (Math.floor(player.countMark('Kxie_hope') / 2) > 1) {
                                            if (num > 1) return 1;
                                            return -1;
                                        } else if (Math.floor(player.countMark('Kxie_doom') / 2) > 1) {
                                            if (num > 1) return 1;
                                            return -1;
                                        } else return -1;
                                    },
                                },
                            },
                        },
                        houqin: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 2],
                            filterTarget: (card, player, target) => target != player,
                            multiline: true,
                            multitarget: true,
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                var target = targets[num];
                                var card = get.cardPile((card) => get.type(card) == 'equip' && target.canEquip(card));
                                if (card) target.equip(card);
                                target.addTempSkill('houqinbaozhang', { player: 'phaseJieshuEnd' });
                                event.num++;
                                if (event.num < targets.length) event.redo();
                            },
                            derivation: ['houqinbaozhang'],
                            ai: {
                                order: 13,
                                result: {
                                    target: () => 1,
                                },
                            },
                        },
                        houqinbaozhang: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            nobracket: true,
                            position: 'he',
                            filterCard: {
                                type: 'equip',
                            },
                            filter: (event, player) => player.countCards('he', { type: 'equip' }) > 0,
                            viewAs: {
                                name: 'sha',
                                storage: {
                                    houqinbaozhang: true,
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'sha') return player.countCards('he', { type: 'equip' }) > 0;
                            },
                            group: ['houqinbaozhang_draw', 'houqinbaozhang_sha'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    filter: (event, player) => !event.numFixed,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                sha: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter: (event, player) => event.card.storage && event.card.storage.houqinbaozhang,
                                    content() {
                                        'step 0';
                                        var cards = player.getCards('he'),
                                            list = [];
                                        cards.forEach((card) => {
                                            list.push(card.name);
                                        });
                                        var card = get.cardPile((card) => !list.includes(card.name));
                                        if (card) player.gain(card, 'gain2');
                                        ('step 1');
                                        if (ui.discardPile.childNodes.length) {
                                            var cards = [];
                                            for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                                cards.push(ui.discardPile.childNodes[i]);
                                            }
                                            player.chooseCardButton(cards, '后勤保障:是否将一张弃牌堆中的牌置于牌堆顶？');
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            var card = result.links[0];
                                            ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                        }
                                    },
                                },
                            },
                            ai: {
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.filter(function (target) {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHaveShan() ||
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )) &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
                                        !player.hasSkillTag(
                                            'directHit_ai',
                                            true,
                                            {
                                                target: target,
                                                card: card,
                                            },
                                            true
                                        )
                                    )
                                        return false;
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
                                            target.mayHaveShan() &&
                                            !player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        )
                                            return eff / 1.2;
                                        return eff;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                },
                            },
                        },
                        wangpai: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: { player: 'showCharacterAfter' },
                            forced: true,
                            hiddenSkill: true,
                            filter: (event, player) => event.toShow.includes('U_96') && player != _status.currentPhase,
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        U_nixi: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: { global: 'phaseZhunbeiBegin' },
                            forced: true,
                            filter(event, player) {
                                if (player != event.player) {
                                    return event.player.isAlive() && lib.filter.targetEnabled({ name: 'sha', nature: 'stab' }, player, event.player) && (player.hasSha() || (_status.connectMode && player.countCards('hs') > 0));
                                }
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard('是否发动〖匿袭〗？', (card) => card.name == 'sha')
                                    .set('ai', function (card) {
                                        if (
                                            get.effect(
                                                trigger.player,
                                                {
                                                    name: 'sha',
                                                    nature: 'stab',
                                                },
                                                player,
                                                player
                                            ) > 0
                                        ) {
                                            return 6 - get.useful(card);
                                        } else return false;
                                    })
                                    .set('prompt2', '将一张【杀】当作一张无视防具的刺【杀】对' + get.translation(trigger.player) + '使用');
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.player,
                                        card = result.cards;
                                    player.useCard({
                                        name: 'sha',
                                        nature: 'stab',
                                        storage: { U_nixi: true },
                                    },
                                        card,
                                        target
                                    );
                                }
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (arg && arg.card && arg.card.storage && arg.card.storage.U_nixi) return true;
                                        return false;
                                    }
                                },
                            },
                            group: ['U_nixi_damage'],
                            subSkill: {
                                damage: {
                                    trigger: { global: 'damageEnd' },
                                    forced: true,
                                    filter: (event, player) => event.getParent(3).name == 'U_nixi',
                                    content() {
                                        trigger.player.loseHp();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        U96_qianfu: {
                            trigger: { player: 'phaseJieshuBegin' },
                            check(event, player) {
                                return !player.hasCard('sha', 'h');
                            },
                            content() {
                                var shas = [];
                                while (shas.length < player.hp) {
                                    var card = get.cardPile((i) => i.name == 'sha' && !shas.includes(i));
                                    if (card) shas.push(card);
                                    else break;
                                }
                                if (shas.length) {
                                    player.gain(shas, 'gain2');
                                    player.turnOver();
                                }
                            },
                        },
                        cuixiu: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            limited: true,
                            trigger: { source: 'damageBegin2' },
                            logTarget: (event, player) => event.player,
                            filter: (event, player) => event.card.name == 'sha',
                            check: (event, player) => get.attitude(player, event.player) < 0,
                            content() {
                                trigger.cancel();
                                player.awakenSkill('cuixiu');
                                player.storage.cuixiu_death = trigger.player;
                                player.addSkill('cuixiu_death');
                            },
                            subSkill: {
                                death: {
                                    audio: 'ext:碧蓝航线Q/audio:true',
                                    mark: true,
                                    trigger: { global: 'phaseBegin' },
                                    forced: true,
                                    filter: (event, player) => event.player == player.storage.cuixiu_death,
                                    content() {
                                        'step 0';
                                        player.line(trigger.player), player.removeSkill('cuixiu_death');
                                        var hs = trigger.player.getCards('h');
                                        if (hs.length) {
                                            trigger.player.discard(hs.randomGets(2));
                                        }
                                        ('step 1');
                                        var target = trigger.player;
                                        target.loseHp(target.maxHp);
                                    },
                                    intro: {
                                        name: '完全摧毁!',
                                        content: '将亡之人:$',
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        hainu: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                var list = ['选项一', '选项二'];
                                if (player.hasCard((card) => lib.filter.cardDiscardable(card, player, 'hainu'), 'he')) list.push('选项三');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['视为使用一张不计入次数且无次数限制的【杀】', '受到1点伤害对一名其他角色造成1点伤害', '弃置一张牌回复一点体力'])
                                    .set('prompt', '海怒:请选择一项')
                                    .set(
                                        'choice',
                                        (function () {
                                            if (player.hp <= 2 && list.includes('选项三')) return '选项三';
                                            else if (player.hasSkill('shiniezhie')) return '选项一';
                                            else if (player.hasSkill('tunshizhixuan')) return '选项二';
                                            else return list.randomGet('cancel2');
                                        })()
                                    )
                                    .set('ai', () => _status.event.choice);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    event.control = result.control;
                                } else {
                                    event.finish();
                                    player.getStat('skill').hainu--;
                                }
                                ('step 2');
                                if (event.control == '选项一') {
                                    event.finish();
                                    player.chooseUseTarget('海怒:请选择【杀】的目标', { name: 'sha' }, true, false, 'nodistance');
                                }
                                ('step 3');
                                if (event.control == '选项二') {
                                    player.damage();
                                    player
                                        .chooseTarget('海怒:请选择目标', true, function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.damageEffect(target, player, player);
                                        })
                                        .set('prompt2', '对其造成1点伤害');
                                } else event.goto(5);
                                ('step 4');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    result.targets[0].damage().source = player;
                                    event.finish();
                                }
                                ('step 5');
                                if (event.control == '选项三') {
                                    player
                                        .chooseToDiscard('he', true)
                                        .set('ai', (card) => {
                                            return 6 - get.value(card);
                                        })
                                        .set('prompt2', '回复一点体力');
                                    player.recover();
                                }
                            },
                            ai: {
                                order: 14,
                                result: {
                                    player: () => 1,
                                },
                            },
                        },
                        shenyang: {
                            mark: true,
                            intro: {
                                name: '深海之力',
                                markcount(skill, player) {
                                    var skills = ['tunshizhixuan', 'yingzhaozhiyuan', 'shiniezhie'];
                                    var count = 0;
                                    skills.forEach(function (skill) {
                                        if (player.hasSkill(skill)) count++;
                                    });
                                    return count;
                                },
                                mark(dialog, skill, player) {
                                    dialog.addText('吞噬之漩:' + (player.hasSkill('tunshizhixuan') ? '已' : '未') + '获得');
                                    dialog.addText('映照之渊:' + (player.hasSkill('yingzhaozhiyuan') ? '已' : '未') + '获得');
                                    dialog.addText('噬啮之颚:' + (player.hasSkill('shiniezhie') ? '已' : '未') + '获得');
                                },
                            },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: { global: 'roundStart' },
                            forced: true,
                            content() {
                                var skills = ['tunshizhixuan', 'yingzhaozhiyuan', 'shiniezhie'];
                                skills.forEach((skill) => {
                                    if (player.hasSkill(skill)) player.removeSkill(skill);
                                });
                                var skill = skills.randomGet();
                                player.addSkill(skill);
                            },
                            group: ['shenyang_damage'],
                            subSkill: {
                                damage: {
                                    audio: true,
                                    audioname2: { Ägir: 'shenyang' },
                                    trigger: { player: 'damageEnd' },
                                    forced: true,
                                    content() {
                                        var skills = ['tunshizhixuan', 'yingzhaozhiyuan', 'shiniezhie'];
                                        var list = [];
                                        skills.forEach((name) => {
                                            if (!player.hasSkill(name)) list.push(name);
                                        });
                                        if (list.length) {
                                            var skill = list.randomGet();
                                            player.addSkillLog(skill);
                                        } else player.draw();
                                    },
                                },
                            },
                            derivation: ['tunshizhixuan', 'yingzhaozhiyuan', 'shiniezhie', 'pojia'],
                        },
                        tunshizhixuan: {
                            nobracket: true,
                            audio: 'ext:碧蓝航线Q/audio:true',
                            init: (player) => player.recover(),
                            trigger: { source: 'damageBegin2' },
                            filter: (event, player) => event.player != player && !event.player.hasSkill('tunshizhixuan_skip'),
                            check: (event, player) => get.attitude(player, event.player) < 0,
                            content() {
                                'step 0';
                                player.judge((card) => (get.color(card) == 'red' ? -1 : 1));
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.addSkill('tunshizhixuan_skip');
                                }
                            },
                            subSkill: {
                                skip: {
                                    mark: true,
                                    trigger: { player: 'phaseBegin' },
                                    forced: true,
                                    content() {
                                        var list = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
                                        var skiplist = list.randomGets(2);
                                        player.skip(skiplist[0]);
                                        player.skip(skiplist[1]);
                                        player.removeSkill('tunshizhixuan_skip');
                                    },
                                    intro: {
                                        name: '吞噬',
                                        content: '漩涡将随机吞噬两个阶段',
                                    },
                                },
                            },
                        },
                        yingzhaozhiyuan: {
                            nobracket: true,
                            audio: true,
                            audioname2: { Ägir: 'tunshizhixuan' },
                            init: (player) => player.draw(2),
                            trigger: { player: 'loseEnd' },
                            filter(event, player) {
                                return player.countCards('h') > 0 && game.hasPlayer((current) => current.countCards('h') > 0 && current != player);
                            },
                            check(event, player) {
                                if (player.hasCard((card) => get.value(card) > 6)) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(true, function (card, player, target) {
                                        return target != player && target.countCards('h') > 0;
                                    })
                                    .set('ai', (target) => -get.attitude(player, target) * target.countCards('h'));
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].showHandcards();
                                    player.swapHandcards(result.targets[0]);
                                }
                            },
                        },
                        shiniezhie: {
                            nobracket: true,
                            audio: true,
                            audioname2: { Ägir: 'tunshizhixuan' },
                            init: (player) => player.changeHujia(),
                            trigger: { source: 'damageEnd' },
                            forced: true,
                            filter(event, player) {
                                if (event.card && event.card.name == 'sha') {
                                    if (event.player != player && get.distance(player, event.player) > 1) return true;
                                    return false;
                                }
                                return false;
                            },
                            content() {
                                var target = trigger.player;
                                var num = target.hujia;
                                target.changeHujia(-num);
                                target.addSkill('pojia');
                            },
                        },
                        pojia: {
                            trigger: { player: ['damageBegin3', 'recoverBegin'] },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'damage') {
                                    return event.card && event.card.name == 'sha';
                                }
                                return true;
                            },
                            content() {
                                if (trigger.name != 'damage') {
                                    trigger.cancel();
                                    player.removeSkill('pojia');
                                } else trigger.num++;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha') return 2;
                                    },
                                },
                                unequip2: true,
                            },
                        },
                        yazhi: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                return (
                                    player.countCards('h', function (card) {
                                        return get.tag(card, 'damage');
                                    }) > 0 &&
                                    game.hasPlayer(function (current) {
                                        return player.canUse('sha', current, false);
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                var list = ['失去体力'];
                                if (
                                    player.storage.yazhi_damage &&
                                    game.hasPlayer((current) => {
                                        return player.storage.yazhi_damage.includes(current);
                                    })
                                )
                                    list.push('直接选择');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set(
                                        'choice',
                                        (function () {
                                            if (list.includes('直接选择')) {
                                                if (
                                                    game.hasPlayer((current) => {
                                                        var storage = player.storage.yazhi_damage;
                                                        var att = get.attitude(player, current);
                                                        return att < 0 && storage.includes(current);
                                                    })
                                                )
                                                    return '直接选择';
                                                else if (player.hp > 2) return '失去体力';
                                                return 'cancel2';
                                            } else {
                                                if (player.hp > 2) return '失去体力';
                                                return 'cancel2';
                                            }
                                        })()
                                    )
                                    .set('ai', () => _status.event.choice);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    event.control = result.control;
                                } else {
                                    player.getStat('skill').yazhi--;
                                    event.finish();
                                }
                                ('step 2');
                                player
                                    .chooseTarget('压制:请选择目标', function (card, player, target) {
                                        if (event.control == '失去体力') return target != player && player.canUse('sha', target, false);
                                        return target != player && player.canUse('sha', target, false) && player.storage.yazhi_damage.includes(target);
                                    })
                                    .set('prompt2', '将手牌中所有伤害类牌依次当作无距离限制的【杀】对其使用')
                                    .set('ai', (target) => {
                                        if (
                                            game.hasPlayer(function (current) {
                                                var num = player.countCards('h', (card) => get.tag(card, 'damage'));
                                                return current.hp <= num && get.attitude(player, current) < 0;
                                            })
                                        ) {
                                            var num = player.countCards('h', (card) => get.tag(card, 'damage'));
                                            return target.hp <= num && get.attitude(player, target) < 0;
                                        } else return -target.hp * get.attitude(player, target);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    if (event.control == '失去体力') player.loseHp();
                                    event.target = result.targets[0];
                                } else {
                                    player.getStat('skill').yazhi--;
                                    event.finish();
                                }
                                ('step 4');
                                var cards = player.getCards('h', (card) => get.tag(card, 'damage'));
                                if (cards) {
                                    var card = [cards[0]];
                                    player.useCard({ name: 'sha' }, card, target, false);
                                }
                                ('step 5');
                                if (
                                    player.countCards('h', function (card) {
                                        return get.tag(card, 'damage');
                                    }) > 0 &&
                                    player.canUse('sha', target, false) &&
                                    target.isAlive()
                                )
                                    event.goto(4);
                                ('step 6');
                                if (target.isAlive()) player.draw(target.hp);
                            },
                            group: ['yazhi_damage'],
                            subSkill: {
                                damage: {
                                    init(player) {
                                        if (!player.storage.yazhi_damage) player.storage.yazhi_damage = [];
                                    },
                                    trigger: { player: 'damageEnd' },
                                    forced: true,
                                    content() {
                                        if (trigger.source && trigger.source != player) {
                                            player.storage.yazhi_damage.add(trigger.source);
                                        }
                                    },
                                },
                            },
                            ai: {
                                order(item, player) {
                                    var cards = player.getCards('h', (card) => get.tag(card, 'damage'));
                                    if (cards && cards.length) {
                                        cards.sort((a, b) => get.order(b) - get.order(a));
                                        return get.order(cards[0]) + 0.2;
                                    } else return 0.2;
                                },
                                result: {
                                    player(player) {
                                        if (game.hasPlayer((current) => get.attitude(player, current) < 0)) {
                                            if (player.hp > 2) return 1;
                                            else {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        var storage = player.storage.yazhi_damage;
                                                        var att = get.attitude(player, current);
                                                        return att < 0 && storage.includes(current);
                                                    })
                                                )
                                                    return 1;
                                                else return -1;
                                            }
                                        } else return -1;
                                    },
                                },
                                threaten: 0.65,
                            },
                        },
                        jizhong: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: { global: 'roundStart' },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.hasSkill('jizhong_use')) player.removeSkill('jizhong_use');
                                if (player.hasSkill('jizhong_mark')) player.removeSkill('jizhong_mark');
                                player
                                    .chooseTarget('集中:请选择目标', true, (card, player, target) => {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att < 0) return att - 1;
                                        if (att == 0) return Math.random();
                                        return -att;
                                    })
                                    .set('prompt2', '该角色将无法响应你所使用目标包括该角色的牌直到你重新发动〖集中〗');
                                ('step 1');
                                if (result.bool) {
                                    player.storage.jizhong_mark = result.targets[0];
                                    player.addSkill('jizhong_use');
                                }
                            },
                            subSkill: {
                                use: {
                                    trigger: { player: 'useCardToTargeted' },
                                    forced: true,
                                    filter: (event, player) => player.storage.jizhong_mark == event.target,
                                    content() {
                                        if (!player.hasSkill('jizhong_mark')) player.addSkill('jizhong_mark');
                                        trigger.parent.directHit.add(trigger.target);
                                    },
                                },
                                mark: {
                                    mark: true,
                                    intro: {
                                        name: '集中',
                                        content: '$难逃一劫',
                                    },
                                },
                            },
                        },
                        zhongxi: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: { player: 'showCharacterAfter' },
                            forced: true,
                            hiddenSkill: true,
                            filter: (event, player) => event.toShow.includes('U_47') && player != _status.currentPhase,
                            content() {
                                player.storage.zhongxi_damage = _status.currentPhase;
                                player.addSkill('zhongxi_damage');
                            },
                            subSkill: {
                                damage: {
                                    trigger: { source: 'damageBegin1' },
                                    forced: true,
                                    filter: (event, player) => event.player == player.storage.zhongxi_damage,
                                    content() {
                                        trigger.num++;
                                    },
                                    intro: {
                                        content: '$被盯上了',
                                    },
                                },
                            },
                        },
                        dulang: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return (num += 1);
                                },
                                maxHandcard: (player, num) => (num += 2),
                            },
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    if (player.storage.dulang) return '上一次对' + get.translation(player.storage.dulang) + '造成过伤害';
                                    return '尚未对别人造成伤害';
                                },
                            },
                            trigger: { source: 'damageEnd' },
                            forced: true,
                            _priority: 10,
                            content() {
                                player.storage.dulang = trigger.player;
                            },
                            ai: {
                                effect: {
                                    player(card, player, target, current) {
                                        if (get.tag(card, 'damage') && target == player.storage.dulang) return 2;
                                    },
                                },
                                threaten: 0.5,
                            },
                            group: ['dulang_damage'],
                            subSkill: {
                                damage: {
                                    audio: 'ext:碧蓝航线Q/audio:2',
                                    trigger: { source: 'damageBegin1' },
                                    forced: true,
                                    _priority: 20,
                                    filter: (event, player) => event.player == player.storage.dulang,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        shenshe: {
                            trigger: { source: 'damageBegin1' },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            forced: true,
                            filter(event, player) {
                                var targets = game.filterPlayer((current) => current != player);
                                targets.sort((a, b) => get.distance(player, b) - get.distance(player, a));
                                var distance = get.distance(player, targets[0]);
                                for (var i = 1; i < targets.length; i++) {
                                    if (get.distance(player, targets[i]) < distance) {
                                        targets.splice(i);
                                        break;
                                    }
                                }
                                if ((targets.includes(event.player) || event.player.hasMark('shenshe_mark')) && event.card && event.card.name == 'sha') return true; //QQQ
                                return false;
                            },
                            content() {
                                if (trigger.player.hp > 1) trigger.num++;
                                player.restoreSkill('chuanqi');
                                trigger.player.addTempSkill('tanhuan', { player: 'phaseEnd' });
                            },
                            derivation: 'tanhuan',
                            ai: {
                                threaten: 0.8,
                            },
                            group: ['shenshe_use', 'shenshe_mark'],
                            subSkill: {
                                use: {
                                    trigger: { player: 'phaseBegin' },
                                    audio: 'ext:碧蓝航线Q/audio:true',
                                    forced: true,
                                    filter: (event, player) => game.hasPlayer((current) => current.hasMark('shenshe_mark') && player.canUse('sha', current, false)),
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(function (card, player, target) {
                                                return target.hasMark('shenshe_mark') && player.canUse('sha', target, false);
                                            })
                                            .set('ai', function (target) {
                                                return get.effect(target, { name: 'sha' }, player, player) > 0;
                                            })
                                            .set('prompt', '是否发动〖神射〗？')
                                            .set('prompt2', '选择一名拥有<神射手>标记的角色,视为对其使用一张无距离限制的【杀】');
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            player.useCard({ name: 'sha' }, target, false);
                                        }
                                    },
                                },
                                mark: {
                                    marktext: '射',
                                    trigger: { global: 'roundStart' },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var targets = game.filterPlayer((current) => current.hasMark('shenshe_mark'));
                                        targets.forEach((target) => target.removeMark('shenshe_mark'));
                                        var players = game.filterPlayer((current) => current != player);
                                        players.sort((a, b) => get.distance(player, b) - get.distance(player, a));
                                        var distance = get.distance(player, players[0]);
                                        for (var i = 1; i < players.length; i++) {
                                            if (get.distance(player, players[i]) < distance) {
                                                players.splice(i);
                                                break;
                                            }
                                        }
                                        players.forEach((player) => player.addMark('shenshe_mark'));
                                        if (game.filterPlayer((current) => !current.hasMark('shenshe_mark') && current != player).length) {
                                            player
                                                .chooseTarget(function (card, player, target) {
                                                    return !target.hasMark('shenshe_mark') && target != player;
                                                })
                                                .set('ai', function (target) {
                                                    return get.attitude(player, target) < 0;
                                                })
                                                .set('prompt', '请选择〖神射〗的目标')
                                                .set('prompt2', '令其获得<神射手>标记');
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets[0].addMark('shenshe_mark');
                                        }
                                    },
                                    intro: {
                                        name: '神射手',
                                        content: '皇家传奇',
                                    },
                                },
                            },
                        },
                        chuanqi: {
                            trigger: { player: 'dyingBegin' },
                            forced: true,
                            limited: true,
                            audio: 'ext:碧蓝航线Q/audio:2',
                            content() {
                                player.awakenSkill('chuanqi');
                                player.loseMaxHp();
                                var num = player.maxHp - player.hp;
                                player.recover(num);
                                player.drawTo(5);
                                player.azureDispel();
                                player.phase('nodelay');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                            ai: {
                                threaten(player, target) {
                                    if (!target.storage.chuanqi) return 0.6;
                                },
                            },
                        },
                        sishen: {
                            marktext: '死',
                            intro: {
                                name: '死神中队',
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            content() {
                                var cards = [];
                                while (cards.length < 4) {
                                    var card = get.cardPile((i) => !cards.includes(i));
                                    if (!card) break;
                                    else cards.push(card);
                                }
                                player.addToExpansion(cards, player, 'gain2').gaintag.add('sishen');
                            },
                            onremove(player) {
                                var cards = player.getExpansions('sishen');
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            ai: {
                                threaten: 1,
                            },
                            group: ['sishen_gain', 'sishen_use'],
                            subSkill: {
                                gain: {
                                    trigger: { player: 'phaseBegin' },
                                    forced: true,
                                    filter(event, player) {
                                        var cards = player.getExpansions('sishen');
                                        if (cards.length < 4) return true;
                                    },
                                    content() {
                                        var num = 4 - player.getExpansions('sishen').length;
                                        var cards = [];
                                        while (cards.length < num) {
                                            var card = get.cardPile((i) => !cards.includes(i));
                                            if (!card) break;
                                            else cards.push(card);
                                        }
                                        player.addToExpansion(cards, player, 'gain2').gaintag.add('sishen');
                                    },
                                },
                                use: {
                                    trigger: { player: 'useCard' },
                                    filter(event, player) {
                                        var cards = player.getExpansions('sishen');
                                        for (var i = 0; i < cards.length; i++) {
                                            var suit1 = cards[i].suit,
                                                suit2 = event.card.suit;
                                            if (suit1 == suit2) return true;
                                        }
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var cards = [],
                                            list = player.getExpansions('sishen');
                                        list.forEach((card) => {
                                            var suit1 = card.suit,
                                                suit2 = trigger.card.suit;
                                            if (suit1 == suit2) cards.push(card);
                                        });
                                        player.chooseButton(['选择出击的<死神中队>', cards, '可对一名其他角色造成1点伤害']);
                                        ('step 1');
                                        if (result.bool) {
                                            player.loseToDiscardpile(result.links);
                                            player
                                                .chooseTarget(true, lib.filter.notMe)
                                                .set('ai', function (target) {
                                                    return -get.attitude(player, target);
                                                })
                                                .set('prompt', '请选择<死神中队>的目标');
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            player.line(result.targets[0]);
                                            result.targets[0].damage().source = player;
                                        }
                                    },
                                },
                            },
                        },
                        Yorktown_fuchou: {
                            mark: true,
                            init: (player) => (player.storage.Yorktown_fuchou = [[], []]),
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            _priority: 10,
                            filter: (event, player) => event.source && event.source != player,
                            content() {
                                var storage = player.storage.Yorktown_fuchou;
                                if (!storage[0].includes(trigger.source)) {
                                    storage[0].push(trigger.source);
                                    storage[1].push(trigger.num);
                                } else {
                                    for (var i = 0; i < storage[0].length; i++) {
                                        if (storage[0][i] == trigger.source) {
                                            storage[1][i] = storage[1][i] + trigger.num;
                                            break;
                                        }
                                    }
                                }
                            },
                            intro: {
                                name: '复仇打击',
                                markcount(storage, player) {
                                    if (storage && storage[0].length) return storage[0].length;
                                    else return 0;
                                },
                                mark(dialog, storage, player) {
                                    if (!storage[0].length) return '尚未有人对你造成过伤害';
                                    else {
                                        for (var i = 0; i < storage[0].length; i++) {
                                            var source = storage[0][i],
                                                num = storage[1][i];
                                            dialog.addText(get.translation(source) + '已对你累计' + num + '点伤害');
                                        }
                                    }
                                },
                            },
                            ai: {
                                threaten: 0.2,
                            },
                            group: 'Yorktown_fuchou_damage',
                            subSkill: {
                                damage: {
                                    trigger: { source: 'damageBegin1' },
                                    audio: 'ext:碧蓝航线Q/audio:2',
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countCards('he') > 0) {
                                            var storage = player.storage.Yorktown_fuchou[0];
                                            if (storage) {
                                                if (storage.includes(event.player)) return true;
                                                else return false;
                                            } else return false;
                                        } else return false;
                                    },
                                    content() {
                                        'step 0';
                                        var storage = player.storage.Yorktown_fuchou;
                                        for (var i = 0; i < storage[0].length; i++) {
                                            if (storage[0][i] == trigger.player) {
                                                event.num = i;
                                                break;
                                            }
                                        }
                                        player
                                            .chooseCard('是否对' + get.translation(trigger.player) + '发动〖复仇〗？', 'he')
                                            .set('ai', function (card) {
                                                if (get.attitude(player, trigger.player) > 0) return false;
                                                if (trigger.player.hasCard('baiyin', 'e')) return false;
                                                return 2 - get.value(card);
                                            })
                                            .set('prompt2', '&emsp;&emsp;将一张牌交给' + get.translation(trigger.player) + ',令本伤害+' + storage[1][event.num] + '.清空〖复仇〗中' + get.translation(trigger.player) + '的记录');
                                        ('step 1');
                                        if (result.bool) {
                                            player.give(result.cards, trigger.player);
                                            var storage = player.storage.Yorktown_fuchou;
                                            trigger.num += storage[1][event.num];
                                            storage[0].remove(storage[0][event.num]);
                                            storage[1].remove(storage[1][event.num]);
                                        }
                                    },
                                },
                            },
                        },
                        daji: {
                            trigger: { player: 'damageEnd' },
                            audio: 'ext:碧蓝航线Q/audio:2',
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h') < player.maxHp) return true;
                                if (event.source && player.canUse({ name: 'sha' }, event.source, false)) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.drawTo(player.maxHp);
                                if (trigger.source && player.canUse({ name: 'sha' }, trigger.source, false)) {
                                    player
                                        .chooseCard('是否对' + get.translation(trigger.source) + '发动〖打击〗？', 'he')
                                        .set('ai', function (card) {
                                            if (get.effect(trigger.source, { name: 'sha' }, player, player) > 0) return 6 - get.value(card);
                                            else return false;
                                        })
                                        .set('prompt2', '将一张牌当作【杀】对' + get.translation(trigger.source) + '使用');
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.cards, trigger.source, false);
                                }
                            },
                            ai: {
                                maixie: true,
                                threaten: 0.4,
                            },
                        },
                        tuofu: {
                            trigger: { player: 'die' },
                            forced: true,
                            forceDie: true,
                            audio: 'ext:碧蓝航线Q/audio:true',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(true, lib.filter.notMe)
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    })
                                    .set('prompt', '请选择托付<死神中队>的目标')
                                    .set('prompt2', '该角色将获得〖死神〗' + (trigger.source ? ',并对' + get.translation(trigger.source) + '造成的伤害+1' : ''));
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addSkillLog('sishen');
                                    if (trigger.source) {
                                        target.storage.tuofudamage = trigger.source;
                                        target.addSkill('tuofudamage');
                                    }
                                }
                            },
                        },
                        tuofudamage: {
                            trigger: { source: 'damageBegin1' },
                            forced: true,
                            filter(event, player) {
                                return event.player == player.storage.tuofudamage;
                            },
                            content() {
                                trigger.num++;
                            },
                            intro: {
                                content: '$势必付出代价!',
                            },
                            ai: {
                                effect: {
                                    player(card, player, target, current) {
                                        if (get.tag(card, 'damage') && target == player.storage.tuofudamage) return 2;
                                    },
                                },
                            },
                        },
                        enshang: {
                            mark: true,
                            init: (player) => (player.storage.enshang = [[], []]),
                            trigger: { player: 'gainEnd' },
                            forced: true,
                            filter(event, player) {
                                if (event.source) {
                                    var ext = event.getl(event.source);
                                    return ext && ext.hs && ext.hs.length;
                                } else return false;
                            },
                            content() {
                                var num = trigger.getl(trigger.source).hs.length;
                                var storage = player.storage.enshang;
                                var playerx = trigger.source;
                                if (storage[0].includes(playerx)) {
                                    for (var i = 0; i < storage[0].length; i++) {
                                        if (playerx == storage[0][i]) {
                                            storage[1][i] += num;
                                            break;
                                        }
                                    }
                                } else {
                                    storage[0].push(playerx);
                                    storage[1].push(num);
                                }
                            },
                            intro: {
                                name: '恩赏',
                                markcount(storage) {
                                    if (storage[0]) return storage[0].length;
                                    else return 0;
                                },
                                mark(dialog, storage, player) {
                                    if (storage[0] && storage[0].length) {
                                        for (var i = 0; i < storage[0].length; i++) {
                                            var target = storage[0][i],
                                                num = storage[1][i];
                                            dialog.addText(get.translation(target) + '下个摸牌阶段将多摸' + (target.group == 'royal_navy' ? num + 1 : num) + '张牌');
                                        }
                                    } else dialog.addText('尚未有人向你请赏');
                                },
                            },
                            group: ['enshang_draw', 'enshang_record'],
                            subSkill: {
                                record: {
                                    init: (player) => (player.storage.enshang_record = [true, [], []]),
                                    trigger: { player: ['damageEnd', 'phaseEnd'] },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        if (event.name == 'damage') {
                                            var storage = player.storage.enshang_record;
                                            if (storage[0]) return !storage[1].includes(event.source);
                                            else return !storage[2].includes(event.source);
                                        } else return true;
                                    },
                                    content() {
                                        var storage = player.storage.enshang_record;
                                        if (trigger.name == 'damage') {
                                            var source = trigger.source;
                                            storage[0] ? storage[1].push(source) : storage[2].push(source);
                                        } else {
                                            storage[0] ? (storage[2] = []) : (storage[1] = []);
                                            storage[0] = !storage[0];
                                        }
                                    },
                                },
                                draw: {
                                    trigger: { global: 'phaseDrawBegin' },
                                    audio: 'ext:碧蓝航线Q/audio:2',
                                    forced: true,
                                    logTarget: 'target',
                                    filter(event, player) {
                                        if (!event.numFixed) {
                                            var storage = player.storage.enshang[0];
                                            if (storage.includes(event.player)) return true;
                                            return false;
                                        } else return false;
                                    },
                                    content() {
                                        'step 0';
                                        var target = trigger.player;
                                        var storage = player.storage.enshang;
                                        for (var i = 0; i < storage[0].length; i++) {
                                            if (target == storage[0][i]) {
                                                var num = storage[1][i];
                                                trigger.num += target.group == 'royal_navy' ? num + 1 : num;
                                                storage[0].remove(storage[0][i]);
                                                storage[1].remove(storage[1][i]);
                                                break;
                                            }
                                        }
                                        var storage = player.storage.enshang_record;
                                        if (storage[0] ? storage[2].includes(target) : storage[1].includes(target)) {
                                            player
                                                .chooseBool()
                                                .set('ai', function () {
                                                    return get.damageEffect(target, player, player) > 0;
                                                })
                                                .set('prompt', '恩赏:是否对' + get.translation(target) + '造成1点伤害？');
                                        } else event.finish();
                                        ('step 1');
                                        if (result.bool) {
                                            player.line(trigger.player);
                                            trigger.player.damage();
                                        }
                                    },
                                },
                            },
                        },
                        Queen_shiwei: {
                            global: 'Queen_shiwei_ask',
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:碧蓝航线Q/audio:2',
                            selectTarget: () => [1, game.countGroup()],
                            multitarget: true,
                            multiline: true,
                            filterTarget(card, player, target) {
                                return target != player && target.countGainableCards(player, get.is.single() ? 'he' : 'hej') > 0;
                            },
                            content() {
                                var list = targets.sortBySeat();
                                list.forEach((target) => {
                                    player.gainPlayerCard(target, 'hej', true);
                                });
                            },
                            subSkill: {
                                ask: {
                                    trigger: { source: 'damageBegin1' },
                                    usable: 1,
                                    filter(event, player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.hasSkill('Queen_shiwei') && event.player != current;
                                            }) &&
                                            player.countCards('he') > 0 &&
                                            !player.hasSkill('Queen_shiwei')
                                        )
                                            return true;
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var queen = game.filterPlayer(function (current) {
                                            return current.hasSkill('Queen_shiwei') && trigger.player != current;
                                        });
                                        if (queen.length == 1) {
                                            event.queen = queen[0];
                                            player
                                                .chooseCard('he', '是否发动〖施威〗？')
                                                .set('ai', (card) => {
                                                    if (get.attitude(player, queen[0]) > 0) {
                                                        return 6 - get.value(card);
                                                    } else return false;
                                                })
                                                .set('prompt2', '将一张牌交给' + get.translation(queen[0]) + '令此次伤害+1');
                                            event.goto(2);
                                        } else {
                                            player
                                                .chooseTarget(function (card, player, target) {
                                                    return queen.includes(target);
                                                })
                                                .set('prompt', '施威:请选择请求的对象')
                                                .set('ai', (target) => {
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            var att = get.attitude(player, current);
                                                            return att > 0 && queen.includes(current);
                                                        })
                                                    )
                                                        return get.attitude(player, target);
                                                    else return false;
                                                })
                                                .set('prompt2', '你可将一张牌交给该角色,令此次伤害+1');
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            event.queen = result.targets[0];
                                            player
                                                .chooseCard('he', '是否发动〖施威〗？')
                                                .set('ai', (card) => {
                                                    if (get.attitude(player, event.queen) > 0) return 6 - get.value(card);
                                                    else return 0.01 - get.value(card);
                                                })
                                                .set('prompt2', '将一张牌交给' + get.translation(event.queen) + '令此次伤害+1');
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            event.cards = result.cards;
                                            event.queen
                                                .chooseBool()
                                                .set('prompt', '施威:有人正向你请求')
                                                .set('ai', function () {
                                                    return get.damageEffect(trigger.player, player, event.queen) > 0;
                                                })
                                                .set('prompt2', '是否收下这张' + get.translation(result.cards[0]) + ',让' + get.translation(player) + '对' + get.translation(trigger.player) + '的伤害+1？');
                                        } else {
                                            player.getStat('triggerSkill')['Queen_shiwei_ask']--;
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (result.bool) {
                                            player.give(event.cards, event.queen);
                                            trigger.num++;
                                        } else event.queen.chat('我拒绝!');
                                    },
                                },
                            },
                            ai: {
                                order: 14,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) <= 0)
                                            return target.countCards('he', function (card) {
                                                return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                            }) > 0
                                                ? -1.5
                                                : 1.5;
                                        return target.countCards('ej', function (card) {
                                            if (get.position(card) == 'e') return get.value(card, target) <= 0;
                                            var cardj = card.viewAs ? { name: card.viewAs } : card;
                                            return get.effect(target, cardj, target, player) < 0;
                                        }) > 0
                                            ? 1.5
                                            : -1.5;
                                    },
                                    player(player, target) {
                                        if (
                                            get.attitude(player, target) < 0 &&
                                            !target.countCards('he', function (card) {
                                                return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                            })
                                        ) {
                                            return 0;
                                        }
                                        if (get.attitude(player, target) > 1) {
                                            return target.countCards('ej', function (card) {
                                                if (get.position(card) == 'e') return get.value(card, target) <= 0;
                                                var cardj = card.viewAs ? { name: card.viewAs } : card;
                                                return get.effect(target, cardj, target, player) < 0;
                                            }) > 0
                                                ? 1.5
                                                : -1.5;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        haoling: {
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hasZhuSkill('haoling')) {
                                        return (num += game.countPlayer((current) => current.group == 'royal_navy'));
                                    }
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:碧蓝航线Q/audio:true',
                            filter(event, player) {
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.group == 'royal_navy' && current != player;
                                    }) &&
                                    player.hasZhuSkill('haoling')
                                )
                                    return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer(function (current) {
                                    return current.group == 'royal_navy' && current != player;
                                });
                                ('step 1');
                                event.target = event.targets.shift();
                                event.target.draw(2);
                                event.target
                                    .chooseCard('he', true)
                                    .set('ai', function (card) {
                                        if (get.attitude(event.target, player) > 0) return 6 - get.value(card);
                                        else return 0.01 - get.value(card);
                                    })
                                    .set('prompt', '号令:请选择交给' + get.translation(player) + '的牌');
                                ('step 2');
                                if (result.bool) {
                                    event.target.give(result.cards, player);
                                }
                                if (event.targets.length) event.goto(1);
                            },
                            ai: {
                                order: 14,
                                result: {
                                    player: () => 1,
                                },
                            },
                        },
                        wenmo: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            mark: true,
                            marktext: '☯',
                            zhuanhuanji: true,
                            enable: 'phaseUse',
                            intro: {
                                name(storage, player) {
                                    return '文墨:' + (storage == true ? '以战止战' : '权宜之计');
                                },
                                content(storage, player, skill) {
                                    if (storage == true) return '你可以将一张牌当作伤害类锦囊牌使用';
                                    return '你可以将一张牌当作非伤害类锦囊牌使用';
                                },
                            },
                            filter(event, player) {
                                if ((player.getStat('skill').wenmo || 0) < player.maxHp - player.hp + 1) return player.countCards('he') > 0;
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    lib.inpile.forEach(function (name) {
                                        var card = { name: name };
                                        if (player.storage.wenmo == true) {
                                            if (get.tag(card, 'damage')) {
                                                if (name == 'sha') {
                                                    if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                                    lib.inpile_nature.forEach(function (nature) {
                                                        if (event.filterCard && event.filterCard({ name: name, nature: nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                                    });
                                                } else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                                else if (get.type(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                            }
                                        } else {
                                            if (get.type(name) == 'trick') {
                                                if (!get.tag(card, 'damage') && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                            }
                                        }
                                    });
                                    if (list.length == 0) return ui.create.dialog('文墨无可用牌');
                                    return ui.create.dialog('文墨:' + (player.storage.wenmo == true ? '以战止战' : '权宜之计'), [list, 'vcard']);
                                },
                                filter: (button, player) => _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent),
                                check(button) {
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        popname: true,
                                        check: (card) => 8 - get.value(card),
                                        position: 'he',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.changeZhuanhuanji('wenmo');
                                        },
                                    };
                                },
                                prompt: (links, player) => '将一张牌当作' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用',
                            },
                            ai: {
                                order: 4,
                                result: { player: () => 1 },
                                threaten: 1.5,
                            },
                        },
                        jingtao: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            mark: true,
                            marktext: '☯',
                            zhuanhuanji: true,
                            trigger: {
                                source: 'damageEnd',
                                player: ['useCardEnd', 'damageEnd'],
                            },
                            intro: {
                                name(storage) {
                                    return '惊涛:' + (storage == true ? '兵不厌诈' : '养精蓄锐');
                                },
                                markcount(storage, player) {
                                    var num = player.storage.jingtao_usecard;
                                    return num;
                                },
                                mark(dialog, storage, player) {
                                    if (storage != true) {
                                        var num = player.storage.jingtao_usecard;
                                        dialog.addText('当你累计使用两次牌后,你对一名其他角色造成1点伤害');
                                        dialog.addText('已使用' + num + '次牌');
                                    } else dialog.addText('当你造成/受到伤害后,你摸两张牌');
                                },
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'damage') {
                                    if (event.parent.name != 'jingtao') return player.storage.jingtao == true;
                                    return false;
                                } else return player.storage.jingtao != true && player.storage.jingtao_usecard == 2;
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'damage' && player.storage.jingtao == true) {
                                    player.changeZhuanhuanji('jingtao');
                                    player.draw(2);
                                    event.finish();
                                } else {
                                    player.changeZhuanhuanji('jingtao');
                                    player
                                        .chooseTarget(true, lib.filter.notMe)
                                        .set('ai', (target) => {
                                            return get.damageEffect(target, player, player);
                                        })
                                        .set('prompt', '惊涛:请选择目标')
                                        .set('prompt2', '对该角色造成1点伤害');
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.storage.jingtao_usecard = 0;
                                    player.line(result.targets[0]);
                                    result.targets[0].damage();
                                }
                            },
                            group: ['jingtao_usecard'],
                            subSkill: {
                                usecard: {
                                    trigger: { player: 'useCard' },
                                    forced: true,
                                    init: (player) => (player.storage.jingtao_usecard = 0),
                                    filter: (event, player) => player.storage.jingtao != true,
                                    content() {
                                        player.storage.jingtao_usecard++;
                                    },
                                },
                            },
                        },
                        Regolo_jueyong: {
                            trigger: { player: 'loseAfter' },
                            forced: true,
                            usable: 1,
                            audio: 'ext:碧蓝航线Q/audio:2',
                            filter(event, player) {
                                if (player != _status.currentPhase) {
                                    return event.hs && event.hs.length;
                                } else return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return player != target;
                                    }, true)
                                    .set('prompt', '爵拥:请选择一名其他角色')
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) < 0;
                                    })
                                    .set('prompt2', '你弃置该角色角色区域内一张牌;若你以此法弃置的牌中有与你失去的牌类型相同的牌,你摸一张牌,否则你可以视为对' + get.translation(_status.currentPhase) + '使用一张无视防具的【杀】,不可发动〖爵拥〗直到此回合结束');
                                ('step 1');
                                if (result.bool) {
                                    player.discardPlayerCard('hej', result.targets[0], true);
                                }
                                ('step 2');
                                if (result.bool) {
                                    var cards = trigger.hs;
                                    game.log(cards);
                                    var isSame = false;
                                    for (var i = 0; i < cards.length; i++) {
                                        var type1 = get.type(cards[i]);
                                        for (var j = 0; j < result.cards.length; j++) {
                                            var type2 = get.type(result.cards[j]);
                                            if (type1 == type2) {
                                                isSame = true;
                                                break;
                                            }
                                        }
                                    }
                                    if (isSame == true) {
                                        player.getStat('triggerSkill')['Regolo_jueyong']--;
                                        player.draw();
                                        event.finish();
                                    } else {
                                        if (player.canUse({ name: 'sha' }, _status.currentPhase, false)) {
                                            player
                                                .chooseBool()
                                                .set('ai', function () {
                                                    return (
                                                        get.effect(
                                                            _status.currentPhase,
                                                            {
                                                                name: 'sha',
                                                                storage: { Regolo_jueyong: true },
                                                            },
                                                            player,
                                                            player
                                                        ) > 0
                                                    );
                                                })
                                                .set('prompt', '是否视为对' + get.translation(_status.currentPhase) + '使用一张无视防具的【杀】？')
                                                .set('prompt2', '不可发动〖爵拥〗直到此回合结束');
                                        } else {
                                            player.getStat('triggerSkill')['Regolo_jueyong']--;
                                            event.finish();
                                        }
                                    }
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.useCard(
                                        {
                                            name: 'sha',
                                            storage: { Regolo_jueyong: true },
                                        },
                                        _status.currentPhase
                                    );
                                } else player.getStat('triggerSkill')['Regolo_jueyong']--;
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (arg && arg.card && arg.card.storage && arg.card.storage.Regolo_jueyong) return true;
                                        return false;
                                    }
                                },
                            },
                        },
                        xianzi: {
                            mark: true,
                            marktext: '☯',
                            zhuanhuanji: true,
                            intro: {
                                name(storage, player) {
                                    return '小仙子:' + (storage == true ? '受到伤害' : '造成伤害');
                                },
                                content(storage, player) {
                                    if (storage == true) return '当你受到其他角色的伤害时,你弃置一张牌,并令一名其他角色弃置两张与此牌花色相同的牌';
                                    return '当你对其他角色造成伤害时,你摸一张牌,并令一名角色从牌堆中获得两张花色各不相同的牌';
                                },
                            },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.xianzi == true) return event.source != player;
                                else return event.player != player;
                            },
                            content() {
                                'step 0';
                                event.state = player.storage.xianzi;
                                player.changeZhuanhuanji('xianzi');
                                if (event.state == true) player.chooseToDiscard('he', true);
                                else player.draw();
                                ('step 1');
                                if (event.state == true) event.cards = result.cards;
                                player
                                    .chooseTarget(function (card, player, target) {
                                        if (event.state == true) return player != target;
                                        return true;
                                    }, true)
                                    .set('ai', function (target) {
                                        if (event.state == true) return get.attitude(player, target) < 0;
                                        return get.attitude(player, target) > 0;
                                    })
                                    .set('prompt', '仙祝:请选择目标')
                                    .set('prompt2', event.state == true ? '令该角色弃置两张花色为' + get.translation(event.cards.suit) + '的牌' : '令该角色从牌堆中获得两张花色各不相同的牌');
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    if (event.state == true) {
                                        if (
                                            target.countCards('he', function (card) {
                                                return card.suit == event.cards.suit;
                                            }) > 0
                                        ) {
                                            var suit = event.cards.suit;
                                            var num = Math.min(
                                                2,
                                                target.countCards('he', function (card) {
                                                    return card.suit == suit;
                                                })
                                            );
                                            target
                                                .chooseToDiscard(
                                                    'he',
                                                    num,
                                                    function (card) {
                                                        return card.suit == suit;
                                                    },
                                                    true
                                                )
                                                .set('prompt', '请弃置' + get.cnNumber(num) + '张花色为' + get.translation(suit) + '的牌');
                                        }
                                    } else {
                                        var cards = [],
                                            suits = [];
                                        while (cards.length < 2) {
                                            var card = get.cardPile(function (i) {
                                                return !cards.includes(i) && !suits.includes(i.suit);
                                            });
                                            if (card) {
                                                cards.push(card);
                                                suits.push(card.suit);
                                            } else break;
                                        }
                                        if (cards.length) target.gain(cards, 'gain2');
                                    }
                                }
                            },
                        },
                        Gascogne_yizhi: {
                            trigger: {
                                player: ['changeHp', 'damageEnd'],
                                source: 'damageEnd',
                            },
                            forced: true,
                            audio: 'ext:碧蓝航线Q/audio:2',
                            filter(event, player) {
                                if (event.name == 'damage') return true;
                                return player.hp < Math.ceil(player.maxHp / 2) && !player.hasSkill('Gascogne_yizhi_disable');
                            },
                            content() {
                                if (trigger.name == 'damage') {
                                    player.chooseToDiscard('he', true);
                                    player.draw();
                                } else {
                                    player.addTempSkill('Gascogne_yizhi_disable', 'phaseEnd');
                                    player.recover();
                                }
                            },
                            subSkill: {
                                disable: {},
                            },
                        },
                        jingmi: {
                            trigger: { player: 'useCardToTargeted' },
                            forced: true,
                            audio: 'ext:碧蓝航线Q/audio:2',
                            filter(event, player) {
                                return event.targets && event.targets.length == 1 && event.target.isAlive();
                            },
                            content() {
                                var type = get.type(trigger.card);
                                switch (type) {
                                    case 'basic':
                                        trigger.parent.baseDamage++;
                                        break;
                                    case 'trick': {
                                        trigger.parent.directHit.addArray(game.filterPlayer());
                                        break;
                                    }
                                    default: {
                                        var card = get.cardPile(function (i) {
                                            return get.type(i) != type;
                                        });
                                        if (card) player.gain(card, 'gain2');
                                        break;
                                    }
                                }
                            },
                        },
                        caozuo: {
                            trigger: { player: 'useCard2' },
                            forced: true,
                            audio: 'ext:碧蓝航线Q/audio:2',
                            filter(event, player) {
                                var type = get.type(event.card);
                                var name = event.card.name;
                                var storage = player.storage.caozuo_record;
                                if (type == 'basic' || type == 'trick') {
                                    if (event.targets && (storage ? !storage.includes(name) : true)) {
                                        if (event.targets.length == 1) {
                                            var goon = false;
                                            var info = get.info(event.card);
                                            if (!info.multitarget) {
                                                var players = game.filterPlayer(function (current) {
                                                    return !event.targets.includes(current);
                                                });
                                                for (var i = 0; i < players.length; i++) {
                                                    if (lib.filter.targetEnabled2(event.card, player, players[i])) {
                                                        goon = true;
                                                        break;
                                                    }
                                                }
                                                return goon;
                                            } else return false;
                                        } else if (event.targets.length > 1) return true;
                                        else return false;
                                    } else return false;
                                } else return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        if (trigger.targets.length == 1) {
                                            if (trigger.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(trigger.card, player, target);
                                        } else return trigger.targets.includes(target);
                                    })
                                    .set('prompt', '是否发动〖操作〗？')
                                    .set('ai', function (target) {
                                        if (trigger.targets.length == 1) {
                                            var name = trigger.card.name;
                                            if (name == 'tao') {
                                                if (trigger.targets.includes(player)) {
                                                    if (player.hp <= 1) return false;
                                                    else return get.effect(target, trigger.card, player, player);
                                                } else return false;
                                            } else if (name == 'jiu') return false;
                                            else return get.effect(target, trigger.card, player, player);
                                        } else return get.effect(target, trigger.card, player, player);
                                    })
                                    .set('prompt2', trigger.targets.length == 1 ? '额外指定一名角色为' + get.translation(trigger.card) + 的目标 : '将' + get.translation(trigger.card) + '的目标改为原目标中的一名角色');
                                ('step 1');
                                if (result.bool) {
                                    if (!player.hasSkill('caozuo_record')) player.addTempSkill('caozuo_record', 'phaseEnd');
                                    player.storage.caozuo_record.add(trigger.card.name);
                                    var target = result.targets[0];
                                    if (trigger.targets.length == 1) {
                                        trigger.targets.add(target);
                                    } else trigger.targets = [target];
                                } else event.finish();
                                ('step 2');
                                if (trigger.targets.length) player.draw(trigger.targets.length);
                            },
                            subSkill: {
                                record: {
                                    mark: true,
                                    init(player) {
                                        player.markSkill('caozuo_record');
                                        player.storage.caozuo_record = [];
                                    },
                                    intro: {
                                        name: '精密操作协议',
                                        content: '已使用$发动过此技能',
                                    },
                                },
                            },
                        },
                        yingfu: {
                            mark: true,
                            marktext: '☯',
                            intro: {
                                name(storage, player) {
                                    return '音符:' + (storage == true ? '高爆' : '穿甲');
                                },
                                content(storage, player) {
                                    if (storage == true) return '你可以将该伤害改为火焰伤害并获得受到该伤害的其他角色区域内X张牌(X为此次伤害值)';
                                    else return '你可以将该伤害改为雷电伤害并令受到该伤害的其他角色弃置X张牌(X为此次伤害值)';
                                },
                            },
                            zhuanhuanji: true,
                            trigger: { source: 'damageBegin2' },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            check(event, player) {
                                if (player.storage.yingfu == true) {
                                    if (get.damageEffect(event.player, player, player, 'fire')) return get.attitude(player, event.player) < 0;
                                } else {
                                    if (get.damageEffect(event.player, player, player, 'thunder')) return get.attitude(player, event.player) < 0;
                                }
                            },
                            logTarget: (event, player) => event.player,
                            prompt2(event, player) {
                                var num = event.num,
                                    name = get.translation(event.player);
                                if (player.storage.yingfu == true) return '你可以将该伤害改为火焰伤害并获得' + name + '区域内' + num + '张牌';
                                else return '你可以将该伤害改为雷电伤害并令' + name + '弃置' + num + '张牌';
                            },
                            content() {
                                player.changeZhuanhuanji('yingfu');
                                if (player.storage.yingfu == true) {
                                    trigger.nature = 'thunder';
                                    if (trigger.player != player && trigger.player.countDiscardableCards(player, 'hej') > 0) {
                                        player.discardPlayerCard(trigger.player, 'hej', trigger.num, true);
                                    }
                                } else {
                                    trigger.nature = 'fire';
                                    if (trigger.player != player && trigger.player.countGainableCards(player, 'hej') > 0) {
                                        player.gainPlayerCard(trigger.player, 'hej', trigger.num, true);
                                    }
                                }
                            },
                        },
                        xingsheng: {
                            init: (player) => (player.storage.xingsheng = 0),
                            trigger: { player: 'useCardToTarget' },
                            filter(event, player) {
                                if (player.storage.xingsheng_record) {
                                    return !player.storage.xingsheng_record.includes(event.card.name);
                                } else return true;
                            },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            forced: true,
                            content() {
                                'step 0';
                                var target = trigger.target;
                                event.lhp = false;
                                event.lcd = false;
                                if (target.hp != player.hp) {
                                    if (target.hp < player.hp) event.lhp = target;
                                    else event.lhp = player;
                                }
                                var num1 = player.countCards('h'),
                                    num2 = target.countCards('h');
                                if (num1 != num2) {
                                    if (num1 < num2) event.lcd = player;
                                    else event.lcd = target;
                                }
                                if (event.lcd != false || event.lhp != false) {
                                    if (event.lcd != false) var cdname = get.translation(event.lcd);
                                    if (event.lhp != false) var hpname = get.translation(event.lhp);
                                    player
                                        .chooseBool('是否发动〖心声〗？')
                                        .set('ai', function () {
                                            if (event.lcd != false) var att1 = get.attitude(player, event.lcd);
                                            if (event.lhp != false) var att2 = get.attitude(player, event.lhp);
                                            return att1 > 0 && att2 > 0;
                                        })
                                        .set('prompt2', '你与' + get.translation(trigger.target) + '中体力值/手牌数较少的一方回复1点体力/摸一张牌,若其为全场体力值/手牌数最小,则再回复1点体力/摸一张牌' + (event.lhp != false ? '<br>体力较少者:' + hpname + '' + hpname + '将回复1点体力' : '') + (event.lcd != false ? '<br>手牌数较少者:' + cdname + '' + cdname + '将摸一张牌' : ''));
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    player.storage.xingsheng++;
                                    if (!player.hasSkill('xingsheng_record')) player.addTempSkill('xingsheng_record', 'phaseEnd');
                                    player.storage.xingsheng_record.push(trigger.card.name);
                                    if (event.lhp != false) event.lhp.recover();
                                    if (event.lcd != false) event.lcd.draw();
                                } else event.finish();
                                ('step 2');
                                if (event.lhp != false && event.lhp.isMinHp()) event.lhp.recover();
                                if (
                                    event.lcd != false &&
                                    !game.hasPlayer(function (current) {
                                        var num1 = event.lcd.countCards('h');
                                        var num2 = current.countCards('h');
                                        return num1 > num2;
                                    })
                                )
                                    event.lcd.draw();
                            },
                            subSkill: {
                                record: {
                                    mark: true,
                                    init(player) {
                                        player.markSkill('xingsheng_record');
                                        player.storage.xingsheng_record = [];
                                    },
                                    intro: {
                                        name: '乐队领袖',
                                        content: '已使用$发动过此技能',
                                    },
                                },
                            },
                        },
                        Cœur_Battant: {
                            mark: true,
                            audio: 'ext:碧蓝航线Q/audio:2',
                            intro: {
                                name: 'Cœur Battant',
                                markcount(storage, player) {
                                    return player.storage.xingsheng || 0;
                                },
                                mark(dialog, storage, player) {
                                    var num = (player.storage.xingsheng || 0) % 2;
                                    if (player.storage.Cœur_Battant_record) {
                                        var length1 = player.storage.Cœur_Battant_record.length;
                                        if (length1) var name = get.translation(player.storage.Cœur_Battant_record);
                                    }
                                    dialog.addText('〖心声〗的发动次数为:' + (num == 1 ? '奇数' : '偶数'));
                                    dialog.addText('使用' + (length1 ? '不为' + name + '的' : '任何') + '牌时,该牌' + (num == 1 ? '伤害值/回复值+1' : '不可响应'));
                                },
                            },
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.Cœur_Battant_record) {
                                    return !player.storage.Cœur_Battant_record.includes(event.card.name);
                                } else return true;
                            },
                            content() {
                                if (!player.hasSkill('Cœur_Battant_record')) player.addTempSkill('Cœur_Battant_record', 'phaseEnd');
                                player.storage.Cœur_Battant_record.push(trigger.card.name);
                                var num = (player.storage.xingsheng || 0) % 2;
                                switch (num) {
                                    case 0: {
                                        var players = game.filterPlayer();
                                        trigger.directHit.addArray(players);
                                        break;
                                    }
                                    case 1: {
                                        trigger.baseDamage++;
                                        break;
                                    }
                                    default:
                                        break;
                                }
                            },
                            group: ['Cœur_Battant_sing'],
                            subSkill: {
                                sing: {
                                    init(player) {
                                        player.storage.Cœur_Battant_sing = false;
                                        var str = 'extension/碧蓝航线Q/audio/维修舰的歌单';
                                        var name = 'Cœur.mp3';
                                        game.getFileList(str, function (folders, files) {
                                            if (files && files.length) {
                                                files.forEach(function (file) {
                                                    if (file == name) player.storage.Cœur_Battant_sing = true;
                                                });
                                            }
                                        });
                                    },
                                    trigger: { player: 'phaseBegin' },
                                    filter: (event, player) => player.storage.Cœur_Battant_sing,
                                    prompt: '是否演唱<Cœur>？',
                                    content() {
                                        var str = 'extension/碧蓝航线Q/audio/维修舰的歌单';
                                        var name = 'Cœur.mp3';
                                        ui.backgroundMusic.pause();
                                        ui.backgroundMusic.src = str + '/' + name;
                                        var ext = name.substring(name.lastIndexOf('.'));
                                        var song = name.replace(ext, '');
                                        game.log(player, '开始演唱' + song);
                                    },
                                },
                                record: {
                                    init: (player) => (player.storage.Cœur_Battant_record = []),
                                },
                            },
                        },
                        shanyao: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: { global: 'damageBegin4' },
                            filter: (event, player) => !player.hasSkill('shanyao_disable'),
                            check(event, player) {
                                return get.damageEffect(event.player, event.source, player) < 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.draw(trigger.num);
                                trigger.cancel();
                                player.addTempSkill('shanyao_disable', 'roundStart');
                                ('step 1');
                                if (player.countCards('he') > 0) {
                                    player.chooseCard('he', true, '将一张牌作为<影踪>置于武将牌上');
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var cards = result.cards;
                                    player.addToExpansion(cards, player, 'giveAuto').gaintag.add('mizong');
                                }
                            },
                            group: ['shanyao_damage'],
                            subSkill: {
                                damage: {
                                    trigger: { source: 'damageBegin1' },
                                    forced: true,
                                    filter: (event, player) => player.hp < event.player.hp,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                disable: {
                                    mark: true,
                                    intro: {
                                        content: '本轮已发动',
                                    },
                                },
                            },
                        },
                        mizong: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            trigger: { global: ['damageSource', 'useCard'] },
                            filter(event, player) {
                                if (event.name == 'useCard') {
                                    var directHit = event.directHit;
                                    if (directHit == true || directHit.includes(player)) return true;
                                    return false;
                                }
                                return event.source && event.source != player;
                            },//QQQ
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (player.countCards('he') > 0) {
                                    player.chooseCard('he', true, '将一张牌作为<影踪>置于武将牌上');
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var cards = result.cards;
                                    player.addToExpansion(cards, player, 'giveAuto').gaintag.add('mizong');
                                } else event.finish();
                                ('step 3');
                                var source = trigger.name == 'useCard' ? trigger.player : trigger.source;
                                if (player.countCards('h') < source.countCards('h')) {
                                    player.discardPlayerCard(source, 'he');
                                }
                            },
                            intro: {
                                name: '影踪',
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        mingsang: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: { global: 'phaseBegin' },
                            filter(event, player) {
                                return event.player != player && player.getExpansions('mizong').length;
                            },
                            check(event, player) {
                                var num = 0;
                                player.getExpansions('mizong').forEach(function (card) {
                                    if (get.type(card) == 'basic' || get.type(card) == 'trick') num++;
                                });
                                if (num >= event.player.hp && get.attitude(event.player, player) < 0) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var card = player.getExpansions('mizong')[0];
                                var type = get.type(card),
                                    target = trigger.player,
                                    cards = [card];
                                switch (type) {
                                    case 'basic': {
                                        if (player.canUse('sha', target, false)) {
                                            player.useCard({ name: 'sha' }, cards, target);
                                        } else player.gain(card, 'gain2');
                                        break;
                                    }
                                    case 'trick': {
                                        if (player.canUse('chuqibuyi', target, false)) {
                                            player.useCard({ name: 'chuqibuyi' }, cards, target);
                                        } else player.gain(card, 'gain2');
                                        break;
                                    }
                                    default: {
                                        player.useCard({ name: 'jiu' }, cards, player);
                                        break;
                                    }
                                }
                                ('step 1');
                                if (player.getExpansions('mizong').length) {
                                    if (trigger.player.isAlive()) event.goto(0);
                                    else player.gain(player.getExpansions('mizong'), 'gain2');
                                }
                            },
                        },
                        μ_zhiji: {
                            mark: true,
                            intro: {
                                name(storage, player) {
                                    if (storage <= 2) return '直击准备';
                                    else return '精准直击Arrow';
                                },
                                mark(dialog, storage, player) {
                                    dialog.addText('累计使用' + storage + '次牌');
                                    if (storage > 2) dialog.addText('直击准备完成');
                                },
                            },
                            init: (player) => (player.storage.μ_zhiji = 0),
                            trigger: { player: ['useCard', 'shaBegin'] },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'sha') return player.storage.μ_zhiji > 2;
                                return true;
                            },
                            content() {
                                if (trigger.name == 'sha') {
                                    if (player.storage.μ_zhiji > 2) {
                                        trigger.directHit = true;
                                        if (trigger.addCount !== false) {
                                            trigger.addCount = false;
                                            trigger.player.getStat().card.sha--;
                                        }
                                        player.drawTo(player.storage.μ_zhiji);
                                        player.storage.μ_zhiji = 0;
                                    }
                                } else player.storage.μ_zhiji++;
                            },
                        },
                        NewJersey_tuxi: {
                            trigger: {
                                player: 'useCard',
                                source: 'damageBegin1',
                            },
                            audio: 'ext:碧蓝航线Q/audio:2',
                            _priority: 20,
                            forced: true,
                            filter(event, player) {
                                if (!player.hasSkill('NewJersey_tuxi_limit')) {
                                    player.addTempSkill('NewJersey_tuxi_limit');
                                }
                                var storage = player.storage.NewJersey_tuxi_limit;
                                if (event.name == 'useCard') {
                                    return !storage[0].includes(event.card.name) && get.tag(event.card, 'damage');
                                } else return !storage[1];
                            },
                            content() {
                                var storage = player.storage.NewJersey_tuxi_limit;
                                if (trigger.name == 'useCard' && !storage[0].includes(trigger.card.name)) {
                                    trigger.effectCount += 1;
                                    storage[0].push(trigger.card.name);
                                } else {
                                    trigger.num++;
                                    storage[1] = true;
                                }
                            },
                            subSkill: {
                                limit: {
                                    init: (player) => (player.storage.NewJersey_tuxi_limit = [[], false]),
                                    mark: true,
                                    intro: {
                                        name: '吐息之炎',
                                        markcount: (storage, player) => storage[0].length,
                                        mark(dialog, storage, player) {
                                            dialog.addText(storage[0].length ? '已使用' + get.translation(storage[0]) + '发动此技能' : '尚未使用牌发动此技能');
                                            dialog.addText('增伤' + (storage[1] ? '已触发' : '未触发'));
                                        },
                                    },
                                },
                            },
                        },
                        rongyu: {
                            trigger: { global: ['phaseUseBegin', 'phaseEnd'] },
                            filter(event, player) {
                                if (event.name == 'phaseUse') {
                                    return !player.hasSkill('rongyu_limit') && event.player != player;
                                } else {
                                    var storage = player.storage.rongyu_limit;
                                    if (storage && event.player == storage) return true;
                                    return false;
                                }
                            },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.name == 'phaseUse') {
                                    var list = [];
                                    if (player.countCards('he') > 0) list.push('选项一');
                                    list.addArray(['选项二', 'cancel2']);
                                    player
                                        .chooseControl(list)
                                        .set('choiceList', ['交给' + get.translation(trigger.player) + '一张牌,你与其各摸一张牌', '令' + get.translation(trigger.player) + '摸两张牌'])
                                        .set('prompt', '荣誉:请选择一项')
                                        .set(
                                            'choice',
                                            (function () {
                                                if (get.attitude(player, trigger.player) > 0) {
                                                    if (
                                                        player.hasCard(function (card) {
                                                            return get.tag(card, 'damage') > 0 || get.value(card, trigger.player) > 6;
                                                        }, 'he')
                                                    )
                                                        return '选项一';
                                                    return '选项二';
                                                }
                                                return 'cancel2';
                                            })()
                                        )
                                        .set('ai', () => _status.event.choice);
                                } else {
                                    var history = trigger.player.getHistory('sourceDamage');
                                    if (!history.length) {
                                        player.gain(
                                            get.cardPile(function (card) {
                                                return get.tag(card, 'damage');
                                            }),
                                            'gain2'
                                        );
                                        player.removeSkill('rongyu_limit');
                                    } else player.phase('nodelay');
                                    event.finish();
                                }
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    var target = trigger.player;
                                    player.addExpose(0.2);
                                    if (result.control == '选项一') {
                                        player
                                            .chooseCard('he', true)
                                            .set('ai', function (card) {
                                                return get.tag(card, 'damage') > 0 || get.value(card, target) > 6;
                                            })
                                            .set('prompt', '请选择交给' + get.translation(target) + '的一张牌');
                                    } else {
                                        target.draw(2);
                                        event.goto(3);
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var target = trigger.player;
                                    player.give(result.cards, target);
                                    game.asyncDraw([player, target]);
                                }
                                ('step 3');
                                var target = trigger.player;
                                player.storage.rongyu_limit = target;
                                player.addTempSkill('rongyu_limit', 'roundStart');
                                if (!target.storage.rongyu_buff) target.storage.rongyu_buff = 0;
                                target.storage.rongyu_buff++;
                                target.addTempSkill('rongyu_buff', 'phaseEnd');
                            },
                            subSkill: {
                                buff: {
                                    mark: true,
                                    intro: {
                                        name: '荣誉',
                                        mark(dialog, storage, player) {
                                            dialog.addText('使用【杀】的次数上限+' + storage);
                                            dialog.addText('手牌上限+' + storage);
                                        },
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            var storage = player.storage.rongyu_buff;
                                            if (card.name == 'sha') return num + storage;
                                        },
                                        maxHandcard(player, num) {
                                            var storage = player.storage.rongyu_buff;
                                            return num + storage;
                                        },
                                    },
                                },
                                limit: {
                                    mark: true,
                                    intro: {
                                        content: '本轮已对$发动',
                                    },
                                },
                            },
                        },
                        bubi: {
                            trigger: { player: 'damageEnd' },
                            usable: 1,
                            forced: true,
                            audio: 'ext:碧蓝航线Q/audio:true',
                            filter(event, player) {
                                if (
                                    get.cardPile(function (card) {
                                        return get.tag(card, 'damage');
                                    }) ||
                                    player.hasCard(function (card) {
                                        return get.tag(card, 'damage') && player.hasUseTarget(card);
                                    })
                                )
                                    return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                if (
                                    get.cardPile(function (card) {
                                        return get.tag(card, 'damage');
                                    })
                                )
                                    list.push('选项一');
                                if (
                                    player.hasCard(function (card) {
                                        return get.tag(card, 'damage') && player.hasUseTarget(card);
                                    })
                                )
                                    list.push('选项二');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['从牌堆中获得一张伤害类牌', '使用一张伤害类牌'])
                                    .set('prompt', '不避:请选择一项')
                                    .set(
                                        'choice',
                                        (function () {
                                            return list.randomGet('cancel2');
                                        })()
                                    )
                                    .set('ai', () => _status.event.choice);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    result.control == '选项一'
                                        ? player.gain(
                                            get.cardPile(function (card) {
                                                return get.tag(card, 'damage');
                                            }),
                                            'gain2'
                                        )
                                        : player
                                            .chooseToUse(function (card) {
                                                return get.tag(card, 'damage');
                                            })
                                            .set('prompt', '请使用一张伤害类牌');
                                }
                            },
                            ai: {
                                maixie_hp: true,
                            },
                        },
                        weizhuang: {
                            initList(player) {
                                var Kansens = [];
                                Kansens.addArray(lib.characterSort['碧蓝航线Q'].Eagle_Union);
                                Kansens.addArray(lib.characterSort['碧蓝航线Q'].Royal_Navy);
                                Kansens.addArray(lib.characterSort['碧蓝航线Q'].Sakura_Empire);
                                Kansens.addArray(lib.characterSort['碧蓝航线Q'].Iron_Blood);
                                Kansens.addArray(lib.characterSort['碧蓝航线Q'].Northern_Parliament);
                                Kansens.addArray(lib.characterSort['碧蓝航线Q'].Iris_the_Liberty);
                                Kansens.addArray(lib.characterSort['碧蓝航线Q'].Curia_of_Vichya);
                                Kansens.addArray(lib.characterSort['碧蓝航线Q'].Sardinian_Empire);
                                Kansens.addArray(lib.characterSort['碧蓝航线Q'].Mot);
                                var config = lib.config.azure_MoreCharacterWeiZhuangCanUse;
                                if (config == 'meta') Kansens.addArray(lib.characterSort['碧蓝航线Q'].Ashes);
                                _status.KansensList = Kansens;
                            },
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd', 'damageEnd'],
                            },
                            check() {
                                if (Math.random() < 0.5) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var config = lib.config.azure_MoreCharacterWeiZhuangCanUse;
                                if (config == 'all') {
                                    if (!_status.characterlist) {
                                        lib.skill.pingjian.initList();
                                    }
                                    var Kansens = _status.characterlist;
                                } else {
                                    if (!_status.KansensList) {
                                        lib.skill.weizhuang.initList();
                                    }
                                    var Kansens = _status.KansensList;
                                }
                                player
                                    .chooseButton(true)
                                    .set('createDialog', ['请选择变更为的' + (config == 'all' ? '武将' : '舰船'), [Kansens.randomGets(5), 'character']])
                                    .set('ai', (button) => get.rank(button.link, true));
                                ('step 1');
                                if (result.bool) {
                                    var name = result.links[0];
                                    if (player.storage.weizhuang != name) {
                                        var config = lib.config.azure_NoLoseSkillsWeiZhuangGained;
                                        var skills = lib.character[name][3];
                                        if (config) {
                                            skills.forEach(function (skill) {
                                                player.addSkill(skill);
                                            });
                                        } else {
                                            player.removeAdditionalSkill('weizhuang');
                                            player.addAdditionalSkill('weizhuang', skills);
                                        }
                                        player.setAvatar(player.name, name);
                                        if (
                                            game.hasPlayer2(function (current) {
                                                return current.name == name;
                                            })
                                        ) {
                                            var group = lib.character[player.name][1];
                                            if (player.group != group) player.changeGroup(group);
                                        } else {
                                            var group = lib.character[name][1];
                                            if (player.group != group) player.changeGroup(group);
                                        }
                                    }
                                }
                            },
                            group: 'weizhuang_die',
                            subSkill: {
                                die: {
                                    trigger: { player: 'dieBegin' },
                                    forceDie: true,
                                    forced: true,
                                    content() {
                                        player.removeAdditionalSkill('weizhuang');
                                        player.setAvatar(player.name, player.name);
                                        player.changeGroup(lib.character[player.name][1]);
                                    },
                                },
                            },
                        },
                        shenmou: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type(card) == 'trick') return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type(card) == 'trick') return false;
                                },
                                aiOrder(player, card, num) {
                                    var count = player.getHistory('useCard').length;
                                    if (count == Math.max(1, player.hp) - 1 && get.tag(card, 'recover')) return num + 999;
                                },
                            },
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                if (!player.hasSkill('shenmou_count')) player.addTempSkill('shenmou_count', 'phaseEnd');
                                return get.type(event.card) == 'trick' || player.getHistory('useCard').length == Math.max(1, player.hp);
                            },
                            content() {
                                if (get.type(trigger.card) == 'trick') trigger.nowuxie = true;
                                if (player.getHistory('useCard').length == Math.max(1, player.hp)) {
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return get.type(card) == 'trick';
                                        }),
                                        'gain2'
                                    );
                                    player.draw(Math.max(1, player.hp));
                                }
                            },
                            group: 'shenmou_use',
                            subSkill: {
                                use: {
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        if (
                                            player.hasCard(function (card) {
                                                return get.type(card) == 'trick';
                                            })
                                        ) {
                                            for (var i of lib.inpile) {
                                                var type = get.type(i);
                                                if (type == 'trick' && event.filterCard({ name: i }, player, event)) return true;
                                            }
                                        }
                                        return false;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            lib.inpile.forEach(function (name) {
                                                if (get.type(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                            });
                                            return ui.create.dialog('慎谋', [list, 'vcard']);
                                        },
                                        filter(button, player) {
                                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                        },
                                        check(button) {
                                            if (_status.event.parent.type != 'phase') return 1;
                                            var player = _status.event.player;
                                            if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                            return player.getUseValue({
                                                name: button.link[2],
                                                nature: button.link[3],
                                            });
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard(card) {
                                                    return get.type(card) == 'trick';
                                                },
                                                popname: true,
                                                check: (card) => 8 - get.value(card),
                                                position: 'hes',
                                                viewAs: { name: links[0][2] },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张普通锦囊牌当做' + get.translation(links[0][2]) + '使用';
                                        },
                                    },
                                    hiddenCard(player, name) {
                                        if (!lib.inpile.includes(name)) return false;
                                        var type = get.type(name);
                                        if (
                                            type == 'trick' &&
                                            player.hasCard(function (card) {
                                                return get.type(card) == 'trick';
                                            })
                                        )
                                            return true;
                                        return false;
                                    },
                                    ai: {
                                        order: 4,
                                        result: {
                                            player(player) {
                                                return 1;
                                            },
                                        },
                                    },
                                },
                                count: {
                                    mark: true,
                                    intro: {
                                        name: '谋而后动',
                                        markcount(storage, player) {
                                            return player.getHistory('useCard').length;
                                        },
                                        mark(dialog, storage, player) {
                                            var num1 = player.getHistory('useCard').length;
                                            var num2 = Math.max(1, player.hp);
                                            dialog.addText('慎谋进度: ' + num1 + '/' + num2);
                                        },
                                    },
                                },
                            },
                        },
                        zhanhua: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            content() {
                                'step 0';
                                player.awakenSkill('zhanhua');
                                player.addTempSkill('bozang', { player: 'phaseBegin' });
                                event.targets1 = [];
                                event.targets2 = [];
                                player
                                    .chooseTarget('绽华:请选择你想掩护的目标', [1, Infinity], function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) > 0;
                                    })
                                    .set('prompt2', '当你存活时,你选择的这些角色使用【杀】的次数上限+1且对你选择的第二批角色造成的伤害+1,受到伤害时此伤害转移给你;否则这些角色手牌上限+1,摸牌阶段摸牌数+1');
                                ('step 1');
                                if (result.bool) event.targets1 = result.targets;
                                player
                                    .chooseTarget([1, Infinity], function (card, player, target) {
                                        return !event.targets1.includes(target) && target != player;
                                    })
                                    .set('prompt', '绽华:请选择你想引诱的目标')
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) < 0;
                                    })
                                    .set('prompt2', event.targets1.length ? get.translation(event.targets1) + '对这些角色造成伤害时,此伤害+1' : '您第一批没有选择目标');
                                ('step 2');
                                if (result.bool) event.targets2 = result.targets;
                                event.targets1.forEach(function (target) {
                                    if (!target.storage.zhanhua_effect) {
                                        target.storage.zhanhua_effect = [[], []];
                                    }
                                    var storage = target.storage.zhanhua_effect;
                                    storage[0].push(player);
                                    storage[1].push(event.targets2);
                                    target.addSkill('zhanhua_effect');
                                });
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.identity != 'zhu') {
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    return current.hp > 1 && get.attitude(player, current) > 0;
                                                })
                                            )
                                                return 1;
                                            else return -1;
                                        }
                                        return -1;
                                    },
                                },
                            },
                            subSkill: {
                                effect: {
                                    mark: true,
                                    intro: {
                                        name: '勇猛的见证',
                                        markcount(storage, player) {
                                            return storage[0].length;
                                        },
                                        mark(dialog, storage, player) {
                                            var list = storage[0].filter((current) => current.isAlive());
                                            var num = storage[0].length - list.length;
                                            dialog.addText('使用【杀】次数上限+' + list.length);
                                            dialog.addText('摸牌阶段摸牌数+' + num);
                                            dialog.addText('手牌上限+' + num);
                                            for (var i = 0; i < storage[0].length; i++) {
                                                if (storage[0][i].isAlive()) dialog.addText(get.translation(storage[0][i]) + '提供对' + get.translation(storage[1][i]) + '造成的伤害+1');
                                            }
                                        },
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            var storage = player.storage.zhanhua_effect[0];
                                            var list = storage.filter((current) => current.isAlive());
                                            if (list.length && card.name == 'sha') return num + list.length;
                                        },
                                        maxHandcard(player, num) {
                                            var storage = player.storage.zhanhua_effect[0];
                                            var list = storage.filter((current) => !current.isAlive());
                                            if (list.length) return num + list.length;
                                        },
                                    },
                                    trigger: {
                                        player: ['phaseDrawBegin', 'damageBegin4'],
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        var storage = player.storage.zhanhua_effect;
                                        if (event.name == 'phaseDraw') {
                                            var list = storage[0].filter((current) => !current.isAlive());
                                            if (list.length) return true;
                                            return false;
                                        } else if (name == 'damageBegin4') {
                                            var list = storage[0].filter((current) => current.isAlive());
                                            if (list.length) return true;
                                            return false;
                                        } else {
                                            var ok = false;
                                            for (var i = 0; i < storage[0].length; i++) {
                                                if (storage[0][i].isAlive() && storage[1][i].includes(event.player)) {
                                                    ok = true;
                                                    break;
                                                }
                                            }
                                            return ok;
                                        }
                                    },
                                    content() {
                                        var storage = player.storage.zhanhua_effect;
                                        if (trigger.name == 'phaseDraw') {
                                            var list = storage[0].filter((current) => !current.isAlive());
                                            trigger.num += list.length;
                                        } else if (event.triggername == 'damageBegin4') {
                                            var list = storage[0].filter((current) => current.isAlive());
                                            trigger.player = list.randomGet();
                                        } else {
                                            for (var i = 0; i < storage[0].length; i++) {
                                                if (storage[0][i].isAlive() && storage[1][i].includes(trigger.player)) {
                                                    trigger.num++;
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                            derivation: 'bozang',
                        },
                        ChenHai_buqi: {
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += player.getExpansions('ChenHai_buqi').length);
                                },
                            },
                            audio: 'ext:碧蓝航线Q/audio:true',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.draw(3);
                                ('step 1');
                                var num = player.countCards('h') - player.getHandcardLimit();
                                if (num > 0)
                                    player
                                        .chooseCard('h', num, true)
                                        .set('ai', function (card) {
                                            return 0.01 - get.value(card);
                                        })
                                        .set('prompt2', '将其作为<棋>置于你的武将牌上');
                                else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var cards = result.cards;
                                    player.addToExpansion(cards, player, 'giveAuto').gaintag.add('ChenHai_buqi');
                                }
                            },
                            marktext: '棋',
                            intro: {
                                name: '布棋',
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            ai: {
                                order: 1,
                                result: { player: 1 },
                            },
                        },
                        ChenHai_xingluo: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                                player: 'phaseJieshu',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('ChenHai_buqi').length;
                            },
                            check(event, player) { },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('ChenHai_buqi');
                                var dialog = ['是否移去一张<棋>？', cards];
                                if (trigger.name == 'phaseZhunbei') {
                                    dialog.push('<div class="text center">观看牌堆顶三张牌并以任意顺序置于牌堆顶或牌堆底</div>');
                                } else dialog.push('<div class="text center">令一名角色从牌堆中获得一张锦囊牌</div>');
                                player.chooseButton(dialog).set('ai', function (button) {
                                    if (trigger.name == 'phaseZhunbei') {
                                        var target = _status.currentPhase;
                                        if (
                                            target.hasCard(function (card) {
                                                return get.effect(target, card, target, player) < 0;
                                            }, 'j') &&
                                            get.attitude(player, target) > 0
                                        )
                                            return true;
                                        return false;
                                    } else return true;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.loseToDiscardpile(result.links);
                                    if (trigger.name == 'phaseZhunbei') {
                                        player.chooseToGuanxing(3);
                                        event.finish();
                                    } else
                                        player
                                            .chooseTarget('星罗:请选择一名角色', true)
                                            .set('ai', function (target) {
                                                return get.attitude(player, target);
                                            })
                                            .set('prompt2', '令其从牌堆中获得一张锦囊牌');
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].gain(
                                        get.cardPile(function (card) {
                                            return get.type(card) == 'trick';
                                        }),
                                        'gain2'
                                    );
                                }
                            },
                            group: 'ChenHai_xingluo_use',
                            subSkill: {
                                use: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    audio: 'ext:碧蓝航线Q/audio:true',
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('ChenHai_buqi').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('ChenHai_buqi'),
                                            num = get.cnNumber(Math.max(1, cards.length - 1));
                                        var dialog = ['是否发动〖星罗〗？', cards, '<div class="text center">移去一张<棋>,用牌堆底的' + num + '张牌替换一名角色的全部手牌</div>'];
                                        player.chooseButton(dialog);
                                        ('step 1');
                                        if (result.bool) {
                                            player.loseToDiscardpile(result.links);
                                            var num = Math.max(1, player.getExpansions('ChenHai_buqi').length - 1);
                                            player
                                                .chooseTarget('星罗:请选择目标', true)
                                                .set('ai', function (target) {
                                                    return get.attitude(player, target) * (num - target.countCards('h'));
                                                })
                                                .set('prompt2', '用牌堆底的' + get.cnNumber(num) + '张牌替换该角色的全部手牌');
                                        } else {
                                            player.getStat('skill').ChenHai_xingluo_use--;
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            var num = Math.max(1, player.getExpansions('ChenHai_buqi').length);
                                            var cards = get.bottomCards(num);
                                            game.cardsGotoOrdering(cards);
                                            var hs = target.getCards('h');
                                            target.lose(hs, ui.cardPile);
                                            target.gain(cards, 'draw');
                                        }
                                    },
                                    ai: {
                                        order: 2,
                                        result: {
                                            player(player) {
                                                var num = Math.max(1, player.getExpansions('ChenHai_buqi').length - 1);
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return get.attitude(player, current) * (num - current.countCards('h')) > 0;
                                                    })
                                                )
                                                    return 1;
                                                return -1;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zaji: {
                            enable: 'chooseToUse',
                            usable: 1,
                            filter(event, player) {
                                for (var i of lib.inpile) {
                                    var type = get.type(i) == 'basic' ? 'trick' : 'basic';
                                    if (
                                        player.hasCard(function (card) {
                                            return get.type(card) == type;
                                        }) &&
                                        event.filterCard({ name: i }, player, event)
                                    )
                                        return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var trick = [],
                                        basic = [],
                                        dialog = ui.create.dialog('诈谋奇计');
                                    if (player.hasCard((card) => get.type(card) == 'trick')) var basic = [];
                                    lib.inpile.forEach(function (name) {
                                        if (player.hasCard((card) => get.type(card) == 'basic')) {
                                            if (get.type(name) == 'trick' && event.filterCard({ name: name }, player, event)) trick.push(['锦囊', '', name]);
                                        }
                                        if (player.hasCard((card) => get.type(card) == 'trick')) {
                                            if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) {
                                                if (name == 'sha') {
                                                    basic.push(['基本', '', 'sha']);
                                                    lib.inpile_nature.forEach(function (nature) {
                                                        if (event.filterCard && event.filterCard({ name: name, nature: nature }, player, event)) basic.push(['基本', '', 'sha', nature]);
                                                    });
                                                } else basic.push(['基本', '', name]);
                                            }
                                        }
                                    });
                                    if (basic.length) {
                                        dialog.add('<div class="text center">基本牌</div>');
                                        dialog.add([basic, 'vcard']);
                                    }
                                    if (trick.length) {
                                        dialog.add('<div class="text center">锦囊牌</div>');
                                        dialog.add([trick, 'vcard']);
                                    }
                                    return dialog;
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            var type = get.type(links[0][2]) == 'basic' ? 'trick' : 'basic';
                                            return get.type(card) == type;
                                        },
                                        popname: true,
                                        check: (card) => 8 - get.value(card),
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.addTempSkill('zaji_limit', 'phaseAfter');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张' + (get.type(links[0][2]) == 'basic' ? '普通锦囊' : '基本') + '牌当做' + ('' || get.translation(links[0][3])) + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                if (!lib.inpile.includes(name)) return false;
                                if (player.hasSkill('zaji_limit')) return false;
                                if (player.countCards('hes') > 0) {
                                    if (
                                        (get.type(name) == 'basic' &&
                                            player.hasCard(function (card) {
                                                return get.type(card) == 'trick';
                                            })) ||
                                        (get.type(name) == 'trick' &&
                                            player.hasCard(function (card) {
                                                return get.type(card) == 'basic';
                                            }))
                                    )
                                        return true;
                                    return false;
                                }
                                return false;
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                            group: 'zaji_use',
                            subSkill: {
                                limit: {},
                                use: {
                                    trigger: { player: 'useCard' },
                                    audio: 'ext:碧蓝航线Q/audio:2',
                                    filter: (event, player) => !event.card.isCard,
                                    prompt2: '当你使用转化牌时,若此转化牌颜色:1.不为红色,你可以移动场上至多两张牌;2.不为黑色,你可以对一名其他角色造成1点伤害',
                                    check: (event, player) => true,
                                    content() {
                                        'step 0';
                                        if (get.color(trigger.card) != 'red') {
                                            if (player.canMoveCard()) player.moveCard();
                                            if (player.canMoveCard()) player.moveCard();
                                        }
                                        ('step 1');
                                        if (get.color(trigger.card) != 'black') {
                                            player
                                                .chooseTarget(lib.filter.notMe)
                                                .set('ai', function (target) {
                                                    return get.damageEffect(target, player, player);
                                                })
                                                .set('prompt', '诈计:请选择一个目标')
                                                .set('prompt2', '对其造成1点伤害');
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            player.line(result.targets[0], 'fire');
                                            result.targets[0].damage().source = player;
                                        }
                                    },
                                },
                            },
                        },
                        Guichen_yujian: {
                            trigger: { player: 'phaseDrawBegin' },
                            filter: (event, player) => !event.numFixed,
                            content() {
                                'step 0';
                                trigger.changeToZero();
                            },
                        },
                        mingyun: {
                            trigger: { target: 'useCardToTargeted' },
                            forced: true,
                            audio: 'ext:碧蓝航线Q/audio:2',
                            content() {
                                var cards = get.cards(3);
                                game.cardsGotoOrdering(cards);
                                player.showCards(cards, '命运');
                                var type = get.type(trigger.card);
                                var gcards = cards.filter(function (card) {
                                    return get.type(card) == get.type(trigger.card);
                                });
                                if (gcards.length) {
                                    player.gain(gcards, 'gain2');
                                    trigger.directHit.add(player);
                                }
                            },
                            ai: {
                                effect: {
                                    target: (card, player, target) => [1, 1],
                                },
                            },
                        },
                        tongmeng: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:碧蓝航线Q/audio:true',
                            filterTarget: lib.filter.notMe,
                            selectTarget: [1, Infinity],
                            multiline: true,
                            multitarget: true,
                            content() {
                                game.filterPlayer(function (current) {
                                    var storage = current.storage.tongmeng_sub;
                                    if (storage) {
                                        for (var i = 0; i < storage.length; i++) {
                                            if (storage[i][0] == player) return true;
                                        }
                                    }
                                }).forEach(function (current) {
                                    var storage = current.storage.tongmeng_sub;
                                    if (storage.length > 1) {
                                        for (var i = 0; i < storage.length; i++) {
                                            if (storage[i][0] == player) {
                                                storage.remove(storage[i]);
                                                break;
                                            }
                                        }
                                    } else current.removeSkill('tongmeng_sub');
                                });
                                var targetsx = Array.from(targets);
                                targetsx.push(player);
                                game.asyncDraw(targetsx);
                                targetsx.forEach(function (target) {
                                    target.addSkill('tongmeng_sub');
                                    target.storage.tongmeng_sub.push([player, targets]);
                                });
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target: 1,
                                },
                            },
                            subSkill: {
                                sub: {
                                    mark: true,
                                    marktext: '盟',
                                    intro: {
                                        name: '皇家同盟',
                                        markcount: () => 0,
                                        mark(dialog, storage, player) {
                                            storage.forEach(function (storagex) {
                                                var Allies = get.translation(storagex[0]);
                                                var Members = get.translation(storagex[1]);
                                                dialog.addText(Allies + '已与' + Members + '结盟!');
                                            });
                                        },
                                    },
                                    init(player) {
                                        if (!player.storage.tongmeng_sub) player.storage.tongmeng_sub = [];
                                    },
                                    trigger: { global: 'useCardToTarget' },
                                    check(event, player) {
                                        return get.effect(player, event.card, event.player, player) > 0;
                                    },
                                    filter(event, player) {
                                        if (event.target.hasSkill('tongmeng_sub')) {
                                            var isAlly = false,
                                                storage = player.storage.tongmeng_sub;
                                            for (var i = 0; i < storage.length; i++) {
                                                if (storage[i][0] == event.target || storage[i][1].includes(event.target)) {
                                                    isAlly = true;
                                                    break;
                                                }
                                            }
                                            if (!isAlly) return false;
                                            if (event.getParent(2).name == 'tongmeng_sub') return false;
                                            if (event.targets.includes(player)) return false;
                                            if (get.info(event.card).multitarget) return false;
                                            var type = get.type(event.card);
                                            if (type != 'basic' && type != 'trick') return false;
                                            if (lib.filter.targetEnabled2(event.card, event.player, player)) return true;
                                        } else return false;
                                    },
                                    prompt(event, player) {
                                        return '是否因' + get.translation(event.target) + '发动【同盟】？';
                                    },
                                    prompt2(event, player) {
                                        return '成为' + get.translation(event.player) + '这张' + get.translation(event.card) + '的目标';
                                    },
                                    autodelay: true,
                                    content() {
                                        trigger.parent.targets.add(player);
                                        trigger.player.line(player, 'green');
                                    },
                                },
                            },
                        },
                        fengzhan: {
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 1 && event.parent.name != 'fengzhan';
                            },
                            content() {
                                count = trigger.num;
                                naturex = trigger.nature;
                                trigger.cancel();
                                while (count > 0) {
                                    count--;
                                    trigger.player.damage().nature = naturex;
                                }
                            },
                        },
                        yilei: {
                            trigger: { source: 'damageSource' },
                            forced: true,
                            audio: 'ext:碧蓝航线Q/audio:true',
                            content() {
                                trigger.player.storage.yilei_damage = player;
                                trigger.player.addTempSkill('yilei_damage');
                                if (trigger.nature == 'thunder') player.draw(trigger.num);
                            },
                            subSkill: {
                                damage: {
                                    trigger: { player: 'damageBegin3' },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source == player.storage.yilei_damage;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    intro: {
                                        content: '受到来自$的伤害+1',
                                    },
                                },
                            },
                        },
                        xunlei: {
                            trigger: { player: 'useCard' },
                            usable: 1,
                            audio: 'ext:碧蓝航线Q/audio:true',
                            filter: (event, player) => get.color(event.card) == 'black',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(lib.filter.notMe, true)
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player, 'thunder');
                                    })
                                    .set('prompt', '迅雷:请选择一名其他角色')
                                    .set('prompt2', '对其造成2点雷电伤害');
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage(2).nature = 'thunder';
                                    if (player != _status.currentPhase) {
                                        player.phase('nodelay');
                                    }
                                } else event.finish();
                            },
                        },
                        duangbing: {
                            mod: {
                                globalFrom(from, to, current) {
                                    return current - from.getDamagedHp();
                                },
                                cardUsable(card) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            trigger: {
                                player: ['dyingBefore', 'phaseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'dying') return true;
                                return game.dead.length;
                            },
                            content() {
                                if (trigger.name == 'dying') {
                                    trigger.cancel();
                                } else player.die();
                            },
                        },
                        jianmie: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:碧蓝航线Q/audio:true',
                            content() {
                                'step 0';
                                player.damage();
                                ('step 1');
                                var num = player.maxHp - player.hp,
                                    shas = [];
                                while (shas.length < num) {
                                    var card = get.cardPile((i) => i.name == 'sha' && !shas.includes(i));
                                    if (card) shas.push(card);
                                    else break;
                                }
                                if (shas.length) player.gain(shas, 'draw');
                            },
                            ai: {
                                order: (item, player) => 6 - player.countCards('h'),
                                result: {
                                    player(player) {
                                        if (
                                            game.countPlayer((current) => {
                                                return get.attitude(player, current) > 0;
                                            }).length <
                                            game.countPlayer((current) => {
                                                return get.attitude(player, current) < 0;
                                            }).length &&
                                            (player.countCards('h') < player.hp || player.hp < 0)
                                        )
                                            return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        Laffey_zhanshen: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:碧蓝航线Q/audio:true',
                            filter: (event, player) =>
                                player.countCards('h') > 0 &&
                                game.hasPlayer((current) => {
                                    return player.canUse('sha', current, false) && current.canUse('sha', player, false) && current.countCards('h') > 0 && get.distance(player, current) == 1;
                                }),
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return player.canUse('sha', target, false) && target.canUse('sha', player, false) && target.countCards('h') > 0 && get.distance(player, target) == 1;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h') == 0 || !player.canUse('sha', targets[0], false) || targets[0].isDead()) event.finish();
                                else player.chooseCard(true).set('prompt2', '将其当作一张【杀】对' + get.translation(targets[0]) + '使用');
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.cards, targets[0]);
                                }
                                ('step 2');
                                if (targets[0].countCards('h') == 0 || !targets[0].canUse('sha', player, false) || player.isDead()) event.finish();
                                else targets[0].chooseCard(true).set('prompt2', '将其当作一张【杀】对' + get.translation(player) + '使用');
                                ('step 3');
                                if (result.bool) {
                                    targets[0].useCard({ name: 'sha' }, result.cards, player);
                                }
                                ('step 4');
                                event.goto(0);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        jinku: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            marktext: '金',
                            intro: {
                                mark(dialog, storage, player) {
                                    dialog.addAuto(
                                        player.getCards('s', function (card) {
                                            return card.hasGaintag('jinku');
                                        })
                                    );
                                },
                                markcount(storage, player) {
                                    return player.getCards('s', function (card) {
                                        return card.hasGaintag('jinku');
                                    }).length;
                                },
                                onunmark(storage, player) {
                                    var cards = player.getCards('s', function (card) {
                                        return card.hasGaintag('jinku');
                                    });
                                    if (cards.length) {
                                        game.cardsGotoSpecial(cards);
                                        game.log(cards, '已被移出游戏');
                                    }
                                },
                            },
                            trigger: { player: 'phaseDiscardBegin' },
                            forced: true,
                            filter: (event, player) => player.countCards('h') > 0,
                            content() {
                                'step 0';
                                var cards = player.getCards('h');
                                game.log(player, '将', cards, '放到了武将牌上');
                                player.loseToSpecial(cards, 'jinku').visible = true;
                                ('step 1');
                                player.markSkill('jinku');
                            },
                            group: ['jinku_lose', 'jinku_die'],
                            subSkill: {
                                lose: {
                                    trigger: { player: 'loseAfter' },
                                    silent: true,
                                    filter(event, player) {
                                        var num = player.getCards('s', function (card) {
                                            return card.hasGaintag('jinku');
                                        }).length;
                                        return num == 0;
                                    },
                                    content() {
                                        player.unmarkSkill('jinku');
                                    },
                                },
                                die: {
                                    trigger: { player: 'dieBegin' },
                                    forced: true,
                                    filter(event, player) {
                                        var num = player.getCards('s', function (card) {
                                            return card.hasGaintag('jinku');
                                        }).length;
                                        return num > 0;
                                    },
                                    content() {
                                        var cards = player.getCards('s', (card) => card.hasGaintag('jinku'));
                                        game.cardsGotoSpecial(cards);
                                        game.log(cards, '已被移出游戏');
                                    },
                                },
                            },
                        },
                        xijie: {
                            audio: 'ext:碧蓝航线Q/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (
                                    !game.hasPlayer((current) => {
                                        return current.countCards('h') > 0;
                                    })
                                )
                                    return false;
                                var num = player.getCards('s', (card) => {
                                    return card.hasGaintag('jinku');
                                }).length;
                                return num > 0;
                            },
                            selectTarget: 2,
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length == 1) return true;
                                return player != target && target.countCards('h') != 0;
                            },
                            multitarget: true,
                            targetprompt: ['失去牌', '获得牌'],
                            selectCard: 1,
                            position: 's',
                            filterCard: (card) => card.hasGaintag('jinku'),
                            check: (card) => card.number,
                            content() {
                                var num = cards[0].number;
                                var cards1 = targets[0].getCards('h', (card) => {
                                    return card.number < num;
                                });
                                if (cards1.length) {
                                    targets[0].give(cards1, targets[1]);
                                }
                                if (targets[1] != player) player.draw();
                            },
                            /*ai:{
                                order:12,
                                expose:0.2,
                                result:{
                                    player:function(player){
                                        if(game.hasPlayer(function(current){
                                            return get.attitude(player,current)<0;
                                        })) return 1;
                                        else return -1;
                                    },
                                    target:function(player,target){
                                        if(ui.selected.targets.length==0){
                                            return -1;
                                        }else return 1;
                                    },
                                },
                            },*/
                        },
                        anmian: {
                            audio: 'ext:碧蓝航线Q/audio:true',
                            trigger: {
                                player: 'damageBegin4',
                                source: 'damageBegin2',
                            },
                            forced: true,
                            filter: (event, player) => player.countCards('h') == 0,
                            content() {
                                trigger.num--;
                            },
                            ai: {
                                effect: {
                                    player(card, player, target, current) {
                                        if (get.tag(card, 'damage') && player.countCards('h') == 0) return [0, 0];
                                    },
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && target.countCards('h') == 0) return [0, 0];
                                    },
                                },
                            },
                        },
                        chuji: {
                            trigger: { player: 'turnOverAfter' },
                            forced: true,
                            filter: (event, player) => !player.isTurnedOver(),
                            content() {
                                player.draw(Math.min(player.maxHp, 20));
                                player.phase('nodelay');
                            },
                        },
                        pingrui: {
                            mod: {
                                cardUsable(card, player, num) {
                                    var extra = player.getExpansions('pingrui').length;
                                    if (card.name == 'sha' && extra > 0) return (num += extra);
                                },
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            trigger: { player: 'phaseUseBegin' },
                            forced: true,
                            filter: (event, player) => player.countCards('h') > 0,
                            content() {
                                'step 0';
                                var hn = player.countCards('h');
                                player
                                    .chooseCard('h', [1, hn])
                                    .set('ai', (card) => {
                                        if (
                                            player.hasCard((card) => {
                                                return 4 - get.value(card, player) > 0;
                                            })
                                        )
                                            return 4 - get.value(card, player);
                                        return false;
                                    })
                                    .set('prompt', get.prompt2('pingrui'));
                                ('step 1');
                                if (result.bool) {
                                    var cards = result.cards;
                                    game.log(player, '将', cards, '放到了武将牌上');
                                    player.addToExpansion(cards, player, 'giveAuto').gaintag.add('pingrui');
                                    player.turnOver();
                                } else event.finish();
                            },
                        },
                        xianshou: {
                            trigger: { global: 'phaseBegin' },
                            round: 1,
                            filter(event, player) {
                                return player != event.player && player.canUse('sha', event.player) && player.getExpansions('pingrui').length;
                            },
                            check(event, player) {
                                if (
                                    get.effect(
                                        event.player,
                                        {
                                            name: 'sha',
                                            storage: { xianshou: true },
                                        },
                                        player,
                                        player
                                    ) > 0
                                ) {
                                    var num = player.getExpansions('pingrui').length;
                                    return num > event.player.hp - 2;
                                }
                                return false;
                            },
                            logTarget: (event, player) => event.player,
                            content() {
                                'step 0';
                                var cards = player.getExpansions('pingrui');
                                player.chooseCardButton('先手:请选择任意张<锐', [1, cards.length], true, cards).set('ai', (button) => {
                                    if (ui.selected.buttons.length < trigger.player.hp) return 1;
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var cards = result.links;
                                    var target = trigger.player;
                                    while (cards.length && player.canUse('sha', target)) {
                                        var card = [cards.shift()];
                                        player.useCard({
                                            name: 'sha',
                                            storage: { xianshou: true },
                                        },
                                            card,
                                            target
                                        );
                                    }
                                    player.turnOver();
                                }
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (arg && arg.card && arg.card.storage && arg.card.storage.xianshou) return true;
                                        return false;
                                    }
                                },
                            },
                        },
                    },
                };
                lib.config.all.characters.add('碧蓝航线Q');
                lib.config.characters.add('碧蓝航线Q');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:碧蓝航线Q/image/${i}.jpg`);
                }
                lib.translate['碧蓝航线Q_character_config'] = `碧蓝航线Q`;
                return QQQ;
            });
        },
        config: {
            azure_MoreDynamicTranslation: {
                name: '更多的动态翻译',
                intro: '开启后,将会让属于本扩展的技能的描述中的部分变量随游戏情况而变化',
                init: lib.config.azure_MoreDynamicTranslation === undefined ? false : lib.config.azure_MoreDynamicTranslation,
                onclick(item) {
                    game.saveConfig('extension_碧蓝航线Q_azure_MoreDynamicTranslation', item);
                    game.saveConfig('azure_MoreDynamicTranslation', item);
                },
            },
            azure_MoreCharacterWeiZhuangCanUse: {
                name: '〖伪装〗可选角色设置',
                intro: '设置此选项,调整〖伪装〗可选角色范围(游戏中技能描述会相应变更)',
                init: lib.config.azure_MoreCharacterWeiZhuangCanUse === undefined ? 'normal' : lib.config.azure_MoreCharacterWeiZhuangCanUse,
                item: {
                    normal: '默认',
                    meta: 'meta可选',
                    all: '全扩可选',
                },
                onclick(item) {
                    if (item != lib.config.azure_MoreCharacterWeiZhuangCanUse) {
                        game.saveConfig('extension_碧蓝航线Q_azure_MoreCharacterWeiZhuangCanUse', item);
                        game.saveConfig('azure_MoreCharacterWeiZhuangCanUse', item);
                    }
                },
            },
            azure_NoLoseSkillsWeiZhuangGained: {
                name: '〖伪装〗不失去技能',
                intro: '开启后,因〖伪装〗而变更角色后不会失去因〖伪装〗而获得的技能(游戏中技能描述会相应变更)',
                init: lib.config.azure_NoLoseSkillsWeiZhuangGained === undefined ? false : lib.config.azure_NoLoseSkillsWeiZhuangGained,
                onclick(item) {
                    if (item != lib.config.azure_NoLoseSkillsWeiZhuangGained) {
                        game.saveConfig('extension_碧蓝航线Q_azure_NoLoseSkillsWeiZhuangGained', item);
                        game.saveConfig('azure_NoLoseSkillsWeiZhuangGained', item);
                    }
                },
            },
        },
        package: {
            intro: "<span style='font-family: yuanli'>扩展交流群:743289322</span><br>欢迎bug反馈和交流讨论<br>扩展介绍:<br>此扩展为碧蓝航线Q同人作品,旨在满足作者想在无名杀里能玩到碧蓝航线Q里一些角色的愿望.此扩展阵营分为白鹰联邦、皇家海军、重樱群岛、铁血公国、东煌古国、北方联合、自由鸢尾、维希教廷、撒丁帝国、余烬(meta系舰船)和飓风,还有塞壬,按照游戏中阵营来划分.因能力有限,故选将界面没有对应的势力分类,且强度普遍偏高,希望你能玩的愉快<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: 'Azure',
            version: '1.60.0',
        },
    };
});

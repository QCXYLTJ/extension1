import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { save } from '../../noname/util/config.js';
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
        name: '末日乱斗',
        content(config, pack) {
            game.saveConfig('wujinmoshiYZR', undefined);
            game.wujinmoshiRE = function () {
                game.saveConfig('wujinmoshiP', undefined);
                game.saveConfig('wujinmoshiDXB', undefined);
                game.saveConfig('wujinmoshiDS', undefined);
                game.saveConfig('wujinmoshiDamage', undefined);
                game.saveConfig('wujinmoshiMaxHp', undefined);
                game.saveConfig('wujinmoshiMaxHandCard', undefined);
                game.saveConfig('wujinmoshiDraw', undefined);
                game.saveConfig('wujinmoshiRecover', undefined);
                game.saveConfig('wujinmoshiESkill', undefined);
                game.saveConfig('wujinmoshiDamageI', undefined);
                game.saveConfig('wujinmoshiMaxHpI', undefined);
                game.saveConfig('wujinmoshiMaxHandCardI', undefined);
                game.saveConfig('wujinmoshiDrawI', undefined);
                game.saveConfig('wujinmoshiRecoverI', undefined);
                game.saveConfig('wujinmoshiESkillE', undefined);
                game.reload();
            };
            if (lib.config.wujinmoshiDXB == undefined) game.saveConfig('wujinmoshiDXB', 1);
            if (lib.config.wujinmoshiDS == undefined) game.saveConfig('wujinmoshiDS', 1);
            if (lib.config.wujinmoshiDamage == undefined) game.saveConfig('wujinmoshiDamage', 0);
            if (lib.config.wujinmoshiMaxHp == undefined) game.saveConfig('wujinmoshiMaxHp', 0);
            if (lib.config.wujinmoshiMaxHandCard == undefined) game.saveConfig('wujinmoshiMaxHandCard', 0);
            if (lib.config.wujinmoshiDraw == undefined) game.saveConfig('wujinmoshiDraw', 0);
            if (lib.config.wujinmoshiRecover == undefined) game.saveConfig('wujinmoshiRecover', 0);
            if (lib.config.wujinmoshiDamageI == undefined) game.saveConfig('wujinmoshiDamageI', 0);
            if (lib.config.wujinmoshiMaxHpI == undefined) game.saveConfig('wujinmoshiMaxHpI', 0);
            if (lib.config.wujinmoshiMaxHandCardI == undefined) game.saveConfig('wujinmoshiMaxHandCardI', 0);
            if (lib.config.wujinmoshiDrawI == undefined) game.saveConfig('wujinmoshiDrawI', 0);
            if (lib.config.wujinmoshiRecoverI == undefined) game.saveConfig('wujinmoshiRecoverI', 0);
            if (lib.config.wujinmoshiMAXLC == undefined) game.saveConfig('wujinmoshiMAXLC', 0);
            if (lib.config.wujinmoshiMAXLCWJ == undefined) game.saveConfig('wujinmoshiMAXLCWJ', '');
            if (lib.config.wujinmoshiMAXLC < lib.config.wujinmoshiDXB - 1) {
                game.saveConfig('wujinmoshiMAXLC', lib.config.wujinmoshiDXB - 1);
                game.saveConfig('wujinmoshiMAXLCWJ', '(' + lib.translate[lib.config.wujinmoshiP] + ')');
            }
            if (lib.config.wujinmoshiHJK == undefined) game.saveConfig('wujinmoshiHJK', 0);
            if (lib.config.wujinmoshiXRK == undefined) game.saveConfig('wujinmoshiXRK', 0);
            var wujinmoshiESkillESkills = [];
            for (var i in lib.character) {
                for (var j = 0; j < lib.character[i][3].length; j++) {
                    wujinmoshiESkillESkills.push(lib.character[i][3][j]);
                }
            }
            if (lib.config.wujinmoshiESkillE == undefined) game.saveConfig('wujinmoshiESkillE', wujinmoshiESkillESkills.randomGet());
            game.WJchangeCharacter = function () {
                var WJchangeCharacter = ui.create.dialog('hidden');
                WJchangeCharacter.style.height = 'calc(100%)';
                WJchangeCharacter.style.width = 'calc(100%)';
                WJchangeCharacter.style.left = '0px';
                WJchangeCharacter.style.top = '0px';
                WJchangeCharacter.classList.add('popped');
                WJchangeCharacter.classList.add('static');
                var WJchangeCharacterCC = ui.create.div();
                WJchangeCharacterCC.style.height = '100px';
                WJchangeCharacterCC.style.width = '100px';
                WJchangeCharacterCC.style.left = 'calc(50% - 50px)';
                WJchangeCharacterCC.style.top = 'calc(50% - 60px)';
                WJchangeCharacterCC.style.transform = 'scale(1.3)';
                var character = '';
                var characterContains = [];
                for (var i in lib.character) {
                    characterContains.push(i);
                }
                characterContains.sort(function (a, b) {
                    var aa = a,
                        bb = b;
                    if (aa.lastIndexOf('_') != -1) {
                        aa = aa.slice(aa.lastIndexOf('_') + 1);
                    }
                    if (bb.lastIndexOf('_') != -1) {
                        bb = bb.slice(bb.lastIndexOf('_') + 1);
                    }
                    if (aa != bb) {
                        return aa > bb ? 1 : -1;
                    }
                    return a > b ? 1 : -1;
                });
                for (var j = 0; j < characterContains.length; j++) {
                    var i = characterContains[j];
                    var indexss = Math.max(i.lastIndexOf('_') + 1, 0);
                    var alpha = i.slice(indexss, indexss + 1);
                    character += '<option value=' + i + '>' + alpha.toUpperCase() + '-' + lib.translate[i] + '</option>';
                }
                WJchangeCharacterCC.innerHTML = '请选择武将<br><select id="chooseCharacter" size="18" style="width:100px">' + character + '</select>';
                var WJchangeCharacterYES = ui.create.div('.menubutton.large', '<span style="cursor:pointer;">确认</span>', function () {
                    var country = document.getElementById('chooseCharacter');
                    var str = country.options[country.selectedIndex] ? country.options[country.selectedIndex].value : false;
                    if (!str) return;
                    WJchangeCharacter.delete();
                    game.saveConfig('wujinmoshiP', str);
                });
                WJchangeCharacterYES.style.left = 'calc(50% - 0px)';
                WJchangeCharacterYES.style.top = 'calc(50% + 20px)';
                WJchangeCharacterYES.style.transform = 'translate(-50%,-50%) scale(1.3)';
                WJchangeCharacter.appendChild(WJchangeCharacterCC);
                WJchangeCharacter.appendChild(WJchangeCharacterYES);
                ui.window.appendChild(WJchangeCharacter);
            };
            if (lib.brawl) {
                window.brawlRename = function (name, rename) {
                    if (rename) {
                        lib.config.zuan_brawl_daily[2].push(name);
                        game.saveConfig('zuan_brawl_daily', lib.config.zuan_brawl_daily);
                        return;
                    }
                    var dailytra = {
                        yuanqi: '元气骑士',
                        jingcheng: '攻城掠地',
                        zhengba: '群雄逐鹿',
                        taofa: '诛凶讨逆',
                        guixin: '天下归心',
                        huanhai: '幻境迷渊',
                        ansha: '暗杀行动',
                        jiangshi: '僵尸模式',
                        jianbing: '兼并模式',
                        wujin: '无尽模式',
                    };
                    var name2 = dailytra[name] ? dailytra[name] : name;
                    if (config.zuan_brawl == 'daily' && lib.config.zuan_brawl_daily[2] && !lib.config.zuan_brawl_daily[2].includes(name)) {
                        return name2 + '<span style=\"color: rgb(155,225,255);animation: -webkit-animation:fairy 50s infinite;animation:fairy 50s infinite;\">˚</span>';
                    }
                    return name2;
                };
                lib.brawl.wujinmoshi = {
                    name: window.brawlRename('wujin'),
                    mode: 'identity',
                    intro: '曾通过的最高轮次:' + get.cnNumber(lib.config.wujinmoshiMAXLC) + '轮' + lib.config.wujinmoshiMAXLCWJ,
                    showcase(init) {
                        if (lib.config.wujinmoshiYZR != true) {
                            this.style.width = '575px';
                            var wujinmoshichooseCharacter1 = ui.create.div('.menubutton.large', '<span style="cursor:pointer;">选择<br>武将</span>', function () {
                                var wujinmoshichooseCharacter = ui.create.dialog('hidden');
                                wujinmoshichooseCharacter.style.height = 'calc(100%)';
                                wujinmoshichooseCharacter.style.width = 'calc(100%)';
                                wujinmoshichooseCharacter.style.left = '0%';
                                wujinmoshichooseCharacter.style.top = '0%';
                                wujinmoshichooseCharacter.classList.add('popped');
                                wujinmoshichooseCharacter.classList.add('static');
                                var wujinmoshiCharacter = ui.create.div();
                                wujinmoshiCharacter.style.height = '100px';
                                wujinmoshiCharacter.style.width = '100px';
                                wujinmoshiCharacter.style.left = 'calc(50% - 50px)';
                                wujinmoshiCharacter.style.top = 'calc(50% - 60px)';
                                wujinmoshiCharacter.style.transform = 'scale(1.3)';
                                var character = '';
                                var characterContains = [];
                                for (var i in lib.character) {
                                    characterContains.push(i);
                                }
                                characterContains.sort(function (a, b) {
                                    var aa = a,
                                        bb = b;
                                    if (aa.lastIndexOf('_') != -1) {
                                        aa = aa.slice(aa.lastIndexOf('_') + 1);
                                    }
                                    if (bb.lastIndexOf('_') != -1) {
                                        bb = bb.slice(bb.lastIndexOf('_') + 1);
                                    }
                                    if (aa != bb) {
                                        return aa > bb ? 1 : -1;
                                    }
                                    return a > b ? 1 : -1;
                                });
                                for (var j = 0; j < characterContains.length; j++) {
                                    var i = characterContains[j];
                                    var indexss = Math.max(i.lastIndexOf('_') + 1, 0);
                                    var alpha = i.slice(indexss, indexss + 1);
                                    character += '<option value=' + i + '>' + alpha.toUpperCase() + '-' + lib.translate[i] + '</option>';
                                }
                                wujinmoshiCharacter.innerHTML = '请选择武将<br><select id="chooseCharacter" size="20" style="width:100px">' + character + '</select>';
                                var wujinmoshiYES = ui.create.div('.menubutton.large', '<span style="cursor:pointer;">确认</span>', function () {
                                    var country = document.getElementById('chooseCharacter');
                                    var str = country.options[country.selectedIndex] ? country.options[country.selectedIndex].value : false;
                                    wujinmoshichooseCharacter.delete();
                                    if (!str) return;
                                    wujinmoshichooseCharacter1.hide();
                                    wujinmoshiDXB.show();
                                    wujinmoshiDS.show();
                                    wujinmoshiharacter.show();
                                    wujinmoshiDamage.show();
                                    wujinmoshiMaxHp.show();
                                    wujinmoshiMaxHandCard.show();
                                    wujinmoshiDraw.show();
                                    wujinmoshiRecover.show();
                                    wujinmoshiESkill.show();
                                    wujinmoshiDSDJC.show();
                                    wujinmoshiDamageE.show();
                                    wujinmoshiMaxHpE.show();
                                    wujinmoshiMaxHandCardE.show();
                                    wujinmoshiDrawE.show();
                                    wujinmoshiRecoverE.show();
                                    wujinmoshiESkillE.show();
                                    game.saveConfig('wujinmoshiP', str);
                                });
                                wujinmoshiYES.style.left = 'calc(50% - 0px)';
                                wujinmoshiYES.style.top = 'calc(50% + 20px)';
                                wujinmoshiYES.style.transform = 'translate(-50%,-50%) scale(1.3)';
                                wujinmoshichooseCharacter.appendChild(wujinmoshiCharacter);
                                wujinmoshichooseCharacter.appendChild(wujinmoshiYES);
                                ui.window.appendChild(wujinmoshichooseCharacter);
                            });
                            wujinmoshichooseCharacter1.style.left = '20px';
                            wujinmoshichooseCharacter1.style.top = '0px';
                            this.appendChild(wujinmoshichooseCharacter1);
                            if (lib.config.wujinmoshiP != undefined) wujinmoshichooseCharacter1.hide();
                            var wujinmoshiDXB = ui.create.div();
                            wujinmoshiDXB.style.left = '50px';
                            wujinmoshiDXB.style.top = '0px';
                            this.appendChild(wujinmoshiDXB);
                            setInterval(function () {
                                if (lib.config.wujinmoshiDXB == undefined) {
                                    wujinmoshiDXB.innerHTML = '未开始';
                                } else {
                                    wujinmoshiDXB.innerHTML = '第' + get.cnNumber(lib.config.wujinmoshiDXB) + '轮';
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiDXB.hide();
                            var wujinmoshiDS = ui.create.div();
                            wujinmoshiDS.style.left = '170px';
                            wujinmoshiDS.style.top = '0px';
                            this.appendChild(wujinmoshiDS);
                            setInterval(function () {
                                if (lib.config.wujinmoshiDS == undefined) {
                                    wujinmoshiDS.innerHTML = '拥有点数:0点';
                                } else {
                                    wujinmoshiDS.innerHTML = '拥有点数:' + lib.config.wujinmoshiDS + '点';
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiDS.hide();
                            var wujinmoshiharacter = ui.create.div();
                            wujinmoshiharacter.style.left = '50px';
                            wujinmoshiharacter.style.top = '20px';
                            this.appendChild(wujinmoshiharacter);
                            setInterval(function () {
                                if (lib.config.wujinmoshiP == undefined) {
                                    wujinmoshiharacter.innerHTML = '拥有武将:未选择';
                                } else {
                                    wujinmoshiharacter.innerHTML = '拥有武将:' + lib.translate[lib.config.wujinmoshiP];
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiharacter.hide();
                            var wujinmoshiDamage = ui.create.div();
                            wujinmoshiDamage.style.left = '50px';
                            wujinmoshiDamage.style.top = '40px';
                            this.appendChild(wujinmoshiDamage);
                            setInterval(function () {
                                if (lib.config.wujinmoshiDamage == undefined) {
                                    wujinmoshiDamage.innerHTML = '攻击力加成:0';
                                } else {
                                    wujinmoshiDamage.innerHTML = '攻击力加成:' + lib.config.wujinmoshiDamage;
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiDamage.hide();
                            var wujinmoshiDamageAdd = ui.create.div(function () {
                                jiangshiConfirm('消耗' + (5 + Math.floor(lib.config.wujinmoshiDamage / 3)) + '点点数来增加一点攻击力?', ['确定', '取消'], function (index) {
                                    if (index == 1) {
                                        game.saveConfig('wujinmoshiDamage', lib.config.wujinmoshiDamage + 1);
                                        game.saveConfig('wujinmoshiDS', lib.config.wujinmoshiDS - Math.floor(5 + Math.floor(lib.config.wujinmoshiDamage / 3)));
                                    }
                                });
                            });
                            wujinmoshiDamageAdd.style.left = '200px';
                            wujinmoshiDamageAdd.style.top = '40px';
                            wujinmoshiDamageAdd.innerHTML = '<span style="cursor:pointer">+</span>';
                            this.appendChild(wujinmoshiDamageAdd);
                            wujinmoshiDamageAdd.hide();
                            setInterval(function () {
                                if (lib.config.wujinmoshiDS >= 5 + Math.floor(lib.config.wujinmoshiDamage / 3)) {
                                    wujinmoshiDamageAdd.show();
                                } else {
                                    wujinmoshiDamageAdd.hide();
                                }
                            }, 100);
                            var wujinmoshiMaxHp = ui.create.div();
                            wujinmoshiMaxHp.style.left = '50px';
                            wujinmoshiMaxHp.style.top = '60px';
                            this.appendChild(wujinmoshiMaxHp);
                            setInterval(function () {
                                if (lib.config.wujinmoshiMaxHp == undefined) {
                                    wujinmoshiMaxHp.innerHTML = '体力上限加成:0';
                                } else {
                                    wujinmoshiMaxHp.innerHTML = '体力上限加成:' + lib.config.wujinmoshiMaxHp;
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiMaxHp.hide();
                            var wujinmoshiMaxHpAdd = ui.create.div(function () {
                                jiangshiConfirm('消耗3点点数来增加一点体力上限?', ['确定', '取消'], function (index) {
                                    if (index == 1) {
                                        game.saveConfig('wujinmoshiMaxHp', lib.config.wujinmoshiMaxHp + 1);
                                        game.saveConfig('wujinmoshiDS', lib.config.wujinmoshiDS - 3);
                                    }
                                });
                            });
                            wujinmoshiMaxHpAdd.style.left = '200px';
                            wujinmoshiMaxHpAdd.style.top = '60px';
                            wujinmoshiMaxHpAdd.innerHTML = '<span style="cursor:pointer">+</span>';
                            this.appendChild(wujinmoshiMaxHpAdd);
                            wujinmoshiMaxHpAdd.hide();
                            setInterval(function () {
                                if (lib.config.wujinmoshiDS >= 3) {
                                    wujinmoshiMaxHpAdd.show();
                                } else {
                                    wujinmoshiMaxHpAdd.hide();
                                }
                            }, 100);
                            var wujinmoshiMaxHandCard = ui.create.div();
                            wujinmoshiMaxHandCard.style.left = '50px';
                            wujinmoshiMaxHandCard.style.top = '80px';
                            this.appendChild(wujinmoshiMaxHandCard);
                            setInterval(function () {
                                if (lib.config.wujinmoshiMaxHandCard == undefined) {
                                    wujinmoshiMaxHandCard.innerHTML = '手牌上限加成:0';
                                } else {
                                    wujinmoshiMaxHandCard.innerHTML = '手牌上限加成:' + lib.config.wujinmoshiMaxHandCard;
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiMaxHandCard.hide();
                            var wujinmoshiMaxHandCardAdd = ui.create.div(function () {
                                jiangshiConfirm('消耗1点点数来增加一点手牌上限?', ['确定', '取消'], function (index) {
                                    if (index == 1) {
                                        game.saveConfig('wujinmoshiMaxHandCard', lib.config.wujinmoshiMaxHandCard + 1);
                                        game.saveConfig('wujinmoshiDS', lib.config.wujinmoshiDS - 1);
                                    }
                                });
                            });
                            wujinmoshiMaxHandCardAdd.style.left = '200px';
                            wujinmoshiMaxHandCardAdd.style.top = '80px';
                            wujinmoshiMaxHandCardAdd.innerHTML = '<span style="cursor:pointer">+</span>';
                            this.appendChild(wujinmoshiMaxHandCardAdd);
                            wujinmoshiMaxHandCardAdd.hide();
                            setInterval(function () {
                                if (lib.config.wujinmoshiDS >= 1 && lib.config.wujinmoshiP != undefined) {
                                    wujinmoshiMaxHandCardAdd.show();
                                } else {
                                    wujinmoshiMaxHandCardAdd.hide();
                                }
                            }, 100);
                            var wujinmoshiDraw = ui.create.div();
                            wujinmoshiDraw.style.left = '50px';
                            wujinmoshiDraw.style.top = '100px';
                            this.appendChild(wujinmoshiDraw);
                            setInterval(function () {
                                if (lib.config.wujinmoshiDraw == undefined) {
                                    wujinmoshiDraw.innerHTML = '摸牌数加成:0';
                                } else {
                                    wujinmoshiDraw.innerHTML = '摸牌数加成:' + lib.config.wujinmoshiDraw;
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiDraw.hide();
                            var wujinmoshiDrawAdd = ui.create.div(function () {
                                jiangshiConfirm('消耗5点点数来增加一点摸牌数?', ['确定', '取消'], function (index) {
                                    if (index == 1) {
                                        game.saveConfig('wujinmoshiDraw', lib.config.wujinmoshiDraw + 1);
                                        game.saveConfig('wujinmoshiDS', lib.config.wujinmoshiDS - 5);
                                    }
                                });
                            });
                            wujinmoshiDrawAdd.style.left = '200px';
                            wujinmoshiDrawAdd.style.top = '100px';
                            wujinmoshiDrawAdd.innerHTML = '<span style="cursor:pointer">+</span>';
                            this.appendChild(wujinmoshiDrawAdd);
                            wujinmoshiDrawAdd.hide();
                            setInterval(function () {
                                if (lib.config.wujinmoshiDS >= 5 && lib.config.wujinmoshiDraw < 3) {
                                    wujinmoshiDrawAdd.show();
                                } else {
                                    wujinmoshiDrawAdd.hide();
                                }
                            }, 100);
                            var wujinmoshiRecover = ui.create.div();
                            wujinmoshiRecover.style.left = '50px';
                            wujinmoshiRecover.style.top = '120px';
                            this.appendChild(wujinmoshiRecover);
                            setInterval(function () {
                                if (lib.config.wujinmoshiRecover == undefined) {
                                    wujinmoshiRecover.innerHTML = '回复量加成:0';
                                } else {
                                    wujinmoshiRecover.innerHTML = '回复量加成:' + lib.config.wujinmoshiRecover;
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiRecover.hide();
                            var wujinmoshiRecoverAdd = ui.create.div(function () {
                                jiangshiConfirm('消耗3点点数来增加一点回复量?', ['确定', '取消'], function (index) {
                                    if (index == 1) {
                                        game.saveConfig('wujinmoshiRecover', lib.config.wujinmoshiRecover + 1);
                                        game.saveConfig('wujinmoshiDS', lib.config.wujinmoshiDS - 3);
                                    }
                                });
                            });
                            wujinmoshiRecoverAdd.style.left = '200px';
                            wujinmoshiRecoverAdd.style.top = '120px';
                            wujinmoshiRecoverAdd.innerHTML = '<span style="cursor:pointer">+</span>';
                            this.appendChild(wujinmoshiRecoverAdd);
                            wujinmoshiRecoverAdd.hide();
                            setInterval(function () {
                                if (lib.config.wujinmoshiDS >= 3) {
                                    wujinmoshiRecoverAdd.show();
                                } else {
                                    wujinmoshiRecoverAdd.hide();
                                }
                            }, 100);
                            var wujinmoshiESkill = ui.create.div();
                            wujinmoshiESkill.style.left = '50px';
                            wujinmoshiESkill.style.top = '140px';
                            this.appendChild(wujinmoshiESkill);
                            setInterval(function () {
                                if (lib.config.wujinmoshiESkill == undefined) {
                                    wujinmoshiESkill.innerHTML = '额外技能:未获得(只能拥有一个)';
                                } else {
                                    wujinmoshiESkill.innerHTML = '额外技能:' + lib.translate[lib.config.wujinmoshiESkill] + '(只能拥有一个)';
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiESkill.hide();
                            var wujinmoshiDSDJC = ui.create.div();
                            wujinmoshiDSDJC.style.left = '50px';
                            wujinmoshiDSDJC.style.top = '180px';
                            wujinmoshiDSDJC.innerHTML = '对手的加成:';
                            this.appendChild(wujinmoshiDSDJC);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiDSDJC.hide();
                            var wujinmoshiDamageE = ui.create.div();
                            wujinmoshiDamageE.style.left = '50px';
                            wujinmoshiDamageE.style.top = '200px';
                            this.appendChild(wujinmoshiDamageE);
                            setInterval(function () {
                                if (lib.config.wujinmoshiDXB != undefined) {
                                    wujinmoshiDamageE.innerHTML = '攻击力加成:' + (Math.floor(lib.config.wujinmoshiDXB / 15) - lib.config.wujinmoshiDamageI) + '(每15轮+1)';
                                } else {
                                    wujinmoshiDamageE.innerHTML = '攻击力加成:0(每15轮+1)';
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiDamageE.hide();
                            var wujinmoshiMaxHpE = ui.create.div();
                            wujinmoshiMaxHpE.style.left = '50px';
                            wujinmoshiMaxHpE.style.top = '220px';
                            this.appendChild(wujinmoshiMaxHpE);
                            setInterval(function () {
                                if (lib.config.wujinmoshiDXB != undefined) {
                                    wujinmoshiMaxHpE.innerHTML = '体力上限加成:' + (Math.floor(lib.config.wujinmoshiDXB / 8) - lib.config.wujinmoshiMaxHpI) + '(每8轮+1)';
                                } else {
                                    wujinmoshiMaxHpE.innerHTML = '体力上限加成:0(每8轮+1)';
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiMaxHpE.hide();
                            var wujinmoshiMaxHandCardE = ui.create.div();
                            wujinmoshiMaxHandCardE.style.left = '50px';
                            wujinmoshiMaxHandCardE.style.top = '240px';
                            this.appendChild(wujinmoshiMaxHandCardE);
                            setInterval(function () {
                                if (lib.config.wujinmoshiDXB != undefined) {
                                    wujinmoshiMaxHandCardE.innerHTML = '手牌上限加成:' + (Math.floor(lib.config.wujinmoshiDXB / 5) - lib.config.wujinmoshiMaxHandCardI) + '(每5轮+1)';
                                } else {
                                    wujinmoshiMaxHandCardE.innerHTML = '手牌上限加成:0(每5轮+1)';
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiMaxHandCardE.hide();
                            var wujinmoshiDrawE = ui.create.div();
                            wujinmoshiDrawE.style.left = '50px';
                            wujinmoshiDrawE.style.top = '260px';
                            this.appendChild(wujinmoshiDrawE);
                            setInterval(function () {
                                if (lib.config.wujinmoshiDXB != undefined) {
                                    if (Math.floor(lib.config.wujinmoshiDXB / 15) - lib.config.wujinmoshiDrawI < 3) {
                                        wujinmoshiDrawE.innerHTML = '摸牌数加成:' + (Math.floor(lib.config.wujinmoshiDXB / 15) - lib.config.wujinmoshiDrawI) + '(每15轮+1,上限+3)';
                                    } else {
                                        wujinmoshiDrawE.innerHTML = '摸牌数加成:3(每15轮+1,上限+3)';
                                    }
                                } else {
                                    wujinmoshiDrawE.innerHTML = '摸牌数加成:0(每15轮+1,上限+5)';
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiDrawE.hide();
                            var wujinmoshiRecoverE = ui.create.div();
                            wujinmoshiRecoverE.style.left = '50px';
                            wujinmoshiRecoverE.style.top = '280px';
                            this.appendChild(wujinmoshiRecoverE);
                            setInterval(function () {
                                if (lib.config.wujinmoshiDXB != undefined) {
                                    wujinmoshiRecoverE.innerHTML = '回复量加成:' + (Math.floor(lib.config.wujinmoshiDXB / 10) - lib.config.wujinmoshiRecoverI) + '(每10轮+1)';
                                } else {
                                    wujinmoshiRecoverE.innerHTML = '回复量加成:0(每10轮+1)';
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiRecoverE.hide();
                            var wujinmoshiESkillE = ui.create.div();
                            wujinmoshiESkillE.style.left = '50px';
                            wujinmoshiESkillE.style.top = '300px';
                            this.appendChild(wujinmoshiESkillE);
                            setInterval(function () {
                                if (lib.config.wujinmoshiESkillE == undefined) {
                                    wujinmoshiESkillE.innerHTML = '额外技能:未获得';
                                } else {
                                    wujinmoshiESkillE.innerHTML = '额外技能:' + lib.translate[lib.config.wujinmoshiESkillE];
                                }
                            }, 100);
                            if (lib.config.wujinmoshiP == undefined) wujinmoshiESkillE.hide();
                            var wujinmoshiRE = ui.create.div('.menubutton.large', '<span style="cursor:pointer;">重置</span>', function () {
                                jiangshiConfirm('是否重置进度？', ['重置', '取消'], function (index) {
                                    if (index == 1) {
                                        game.wujinmoshiRE();
                                    }
                                });
                            });
                            wujinmoshiRE.style.left = '500px';
                            wujinmoshiRE.style.top = '0px';
                            this.appendChild(wujinmoshiRE);
                            var wujinmoshiBAGQX1 = this;
                            var wujinmoshiBAG = ui.create.div('.menubutton.large', '<span style="cursor:pointer;">背包</span>', function () {
                                var wujinmoshiBAGQX = ui.create.div('.menubutton.large', '<span style="color: #FFFFFF;opacity:0.8;cursor:pointer;">关闭</span>', function () {
                                    wujinmoshiBAGQX.delete();
                                    wujinmoshiBAGJM.delete();
                                    wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
                                });
                                wujinmoshiBAGQX.style.left = '650px';
                                wujinmoshiBAGQX.style.top = '0px';
                                wujinmoshiBAGQX1.appendChild(wujinmoshiBAGQX);
                                wujinmoshiBAGJM = ui.create.dialog('hidden');
                                wujinmoshiBAGJM.style.height = 'calc(50%)';
                                wujinmoshiBAGJM.style.width = 'calc(50%)';
                                wujinmoshiBAGJM.style.left = 'calc(25%)';
                                wujinmoshiBAGJM.style.top = 'calc(25%)';
                                wujinmoshiBAGJM.classList.add('popped');
                                wujinmoshiBAGJM.classList.add('static');
                                var wujinmoshiHJK = ui.create.div('', '<span style="cursor:pointer;">换将卡<br>' + lib.config.wujinmoshiHJK + '张</span>', function () {
                                    if (lib.config.wujinmoshiHJK > 0) {
                                        if (lib.config.wujinmoshiP != undefined) {
                                            jiangshiConfirm('是否使用换将卡？', ['确定', '取消'], function (index) {
                                                if (index == 1) {
                                                    game.saveConfig('wujinmoshiHJK', lib.config.wujinmoshiHJK - 1);
                                                    game.WJchangeCharacter();
                                                    wujinmoshiBAGQX.delete();
                                                    wujinmoshiBAGJM.delete();
                                                    wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
                                                }
                                            });
                                        } else {
                                            jiangshiConfirm('游戏未开始,无法使用', ['确定'], function () { });
                                        }
                                    }
                                });
                                if (lib.config.wujinmoshiHJK > 0) wujinmoshiBAGJM.add(wujinmoshiHJK);
                                setInterval(function () {
                                    if (lib.config.wujinmoshiHJK <= 0) wujinmoshiHJK.delete();
                                }, 1000);
                                var wujinmoshiXRK = ui.create.div('', '<span style="cursor:pointer;">削弱卡<br>' + lib.config.wujinmoshiXRK + '张</span>', function () {
                                    if (lib.config.wujinmoshiXRK > 0) {
                                        if (lib.config.wujinmoshiP != undefined) {
                                            jiangshiConfirm('是否使用削弱卡？', ['确定', '取消'], function (index) {
                                                if (index == 1) {
                                                    game.saveConfig('wujinmoshiXRK', lib.config.wujinmoshiXRK - 1);
                                                    game.saveConfig('wujinmoshiDamageI', lib.config.wujinmoshiDamageI + 1);
                                                    game.saveConfig('wujinmoshiMaxHpI', lib.config.wujinmoshiMaxHpI + 1);
                                                    game.saveConfig('wujinmoshiMaxHandCardI', lib.config.wujinmoshiMaxHandCardI + 1);
                                                    game.saveConfig('wujinmoshiDrawI', lib.config.wujinmoshiDrawI + 1);
                                                    game.saveConfig('wujinmoshiRecoverI', lib.config.wujinmoshiRecoverI + 1);
                                                    wujinmoshiBAGQX.delete();
                                                    wujinmoshiBAGJM.delete();
                                                    wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
                                                }
                                            });
                                        } else {
                                            jiangshiConfirm('游戏未开始,无法使用', ['确定'], function () { });
                                        }
                                    }
                                });
                                if (lib.config.wujinmoshiXRK > 0) wujinmoshiBAGJM.add(wujinmoshiXRK);
                                setInterval(function () {
                                    if (lib.config.wujinmoshiXRK <= 0) wujinmoshiXRK.delete();
                                }, 1000);
                                ui.window.appendChild(wujinmoshiBAGJM);
                            });
                            wujinmoshiBAG.style.left = '500px';
                            wujinmoshiBAG.style.top = '50px';
                            this.appendChild(wujinmoshiBAG);
                            game.saveConfig('wujinmoshiYZR', true);
                        }
                    },
                    content: {
                        gameStart() {
                            var characterAi = [];
                            for (var i in lib.character) {
                                if (!lib.character[i][4].includes('boss') && !lib.character[i][4].includes('hiddenboss')) characterAi.push(i);
                            }
                            game.me.next.init(characterAi.randomGet());
                            if (lib.config.wujinmoshiMaxHp > 0) {
                                game.me.gainMaxHp(lib.config.wujinmoshiMaxHp);
                                game.me.recover(lib.config.wujinmoshiMaxHp);
                            }
                            if (-(Math.floor(lib.config.wujinmoshiDXB / 8) - lib.config.wujinmoshiMaxHpI) < game.me.next.maxHp) {
                                game.me.next.gainMaxHp(Math.floor(lib.config.wujinmoshiDXB / 8) - lib.config.wujinmoshiMaxHpI);
                                game.me.next.recover(Math.floor(lib.config.wujinmoshiDXB / 8) - lib.config.wujinmoshiMaxHpI);
                            } else {
                                game.me.next.maxHp = 0;
                                game.me.next.update();
                                game.me.next.die();
                            }
                            if (lib.config.wujinmoshiESkillE != undefined) game.me.next.addSkill(lib.config.wujinmoshiESkillE);
                            game.me.storage.wujinmoshiRE = lib.character[game.me.next.name][3];
                            if (lib.config.wujinmoshiESkill != undefined) game.me.addSkill(lib.config.wujinmoshiESkill);
                            game.addPlayer = function (all) {
                                jiangshiConfirm('增加角色,违反无尽模式规则,重新载入游戏', ['确定'], function () { });
                                game.reload();
                            };
                            game.addFellow = function (all) {
                                jiangshiConfirm('增加角色,违反无尽模式规则,重新载入游戏', ['确定'], function () { });
                                game.reload();
                            };
                            game.swapPlayer = game.kongfunc;
                            game.swapControl = game.kongfunc;
                        },
                        chooseCharacter() {
                            if (lib.config.wujinmoshiP != undefined) return [lib.config.wujinmoshiP];
                            var characterAi = [];
                            for (var i in lib.character) {
                                if (!lib.character[i][4].includes('boss') && !lib.character[i][4].includes('hiddenboss')) characterAi.push(i);
                            }
                            return [characterAi.randomGet()];
                        },
                        chooseCharacterAi() {
                            return;
                        },
                    },
                    init() {
                        window.brawlRename('wujin', true);
                        lib.config.mode_config.identity.free_choose = false;
                        lib.config.mode_config.identity.change_choice = false;
                        lib.config.mode_config.identity.change_identity = false;
                        lib.config.mode_config.identity.player_number = 2;
                        lib.skill._wujinmoshiRE = {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return lib.config.wujinmoshiP != undefined;
                            },
                            content() {
                                if (player == game.me) {
                                    jiangshiConfirm('进行无尽模式的武将死亡,重置游戏', ['确定'], function () { });
                                    game.wujinmoshiRE();
                                } else {
                                    if (Math.random() <= 0.05) {
                                        var DJlist = ['wujinmoshiHJK', 'wujinmoshiXRK'];
                                        var DJ = DJlist.randomGet();
                                        game.saveConfig(DJ, lib.config[DJ] + 1);
                                        if (DJ == 'wujinmoshiHJK') alert('奖励:你获得一张换将卡');
                                        if (DJ == 'wujinmoshiXRK') alert('奖励:你获得一张削弱卡');
                                    }
                                    if (Math.random() <= 0.05) {
                                        game.saveConfig('wujinmoshiHJK', lib.config.wujinmoshiHJK + 1);
                                        alert('奖励:你获得一张换将卡');
                                    }
                                    if (Math.random() <= 0.01) {
                                        game.saveConfig('wujinmoshiXRK', lib.config.wujinmoshiXRK + 1);
                                        alert('奖励:你获得一张削弱卡');
                                    }
                                    game.saveConfig('wujinmoshiESkillE', undefined);
                                    game.saveConfig('wujinmoshiDXB', lib.config.wujinmoshiDXB + 1);
                                    game.saveConfig('wujinmoshiDS', lib.config.wujinmoshiDS + 1);
                                    game.me.useSkill('wujinmoshiRE1');
                                }
                            },
                        };
                        lib.skill.wujinmoshiRE1 = {
                            content() {
                                'step 0';
                                if (_status.auto) ui.click.auto();
                                ('step 1');
                                game.me.chooseControl('确定', '取消', ui.create.dialog('是否从对方身上获得额外技能？', 'hidden'));
                                ('step 2');
                                if (result.control == '确定') game.me.useSkill('wujinmoshiRE2');
                            },
                        };
                        lib.skill.wujinmoshiRE2 = {
                            createDialog(player, target, onlylist) {
                                var list = target.storage.wujinmoshiRE;
                                if (onlylist) return list;
                                game.noAuto = true;
                                var dialog = ui.create.dialog('选择一项作为你的额外技能');
                                _status.event.list = list;
                                var clickItem = function () {
                                    _status.event._result = this.link;
                                    game.resume();
                                };
                                for (var i = 0; i < list.length; i++) {
                                    if (lib.translate[list[i] + '_info']) {
                                        var translation = get.translation(list[i]);
                                        if (translation[0] == '新' && translation.length == 3) {
                                            translation = translation.slice(1, 3);
                                        } else {
                                            translation = translation.slice(0, 2);
                                        }
                                        var item = dialog.add('<div class="popup pointerdiv" style="width:50%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                        item.firstChild.addEventListener('click', clickItem);
                                        item.firstChild.link = list[i];
                                    }
                                }
                                dialog.add(ui.create.div('placeholder'));
                                return dialog;
                            },
                            content() {
                                'step 0';
                                event.dialog = lib.skill.wujinmoshiRE2.createDialog(target, player);
                                event.switchToAuto = function () {
                                    event._result = event.skillai(event.list);
                                    game.resume();
                                };
                                _status.imchoosing = true;
                                game.pause();
                                ('step 1');
                                game.noAuto = false;
                                _status.imchoosing = false;
                                if (event.dialog) {
                                    event.dialog.close();
                                }
                                game.saveConfig('wujinmoshiESkill', result);
                            },
                        };
                        lib.translate.wujinmoshiRE1 = '获取技能';
                        lib.translate.wujinmoshiRE2 = '获取技能';
                        lib.skill._wujinmoshiDamage = {
                            trigger: {
                                source: 'damageBefore',
                            },
                            filter(event, player) {
                                return lib.config.wujinmoshiDamage > 0 && player == game.me;
                            },
                            forced: true,
                            content() {
                                trigger.num += lib.config.wujinmoshiDamage;
                            },
                        };
                        lib.skill._wujinmoshiDamageE = {
                            trigger: {
                                source: 'damageBefore',
                            },
                            filter(event, player) {
                                return player != game.me;
                            },
                            forced: true,
                            content() {
                                trigger.num += Math.floor(lib.config.wujinmoshiDXB / 15) - lib.config.wujinmoshiDamageI;
                            },
                        };
                        lib.skill._wujinmoshiMaxHandCard = {
                            mod: {
                                maxHandcard(player, num) {
                                    if (player == game.me && lib.config.wujinmoshiMaxHandCard > 0) return num + lib.config.wujinmoshiMaxHandCard;
                                    return num;
                                },
                            },
                        };
                        lib.skill._wujinmoshiMaxHandCardE = {
                            mod: {
                                maxHandcard(player, num) {
                                    if (player != game.me) return num + Math.floor(lib.config.wujinmoshiDXB / 5) - lib.config.wujinmoshiMaxHandCardI;
                                    return num;
                                },
                            },
                        };
                        lib.skill._wujinmoshiDraw = {
                            trigger: {
                                player: 'drawBefore',
                            },
                            filter(event, player) {
                                return lib.config.wujinmoshiDraw > 0 && player == game.me;
                            },
                            forced: true,
                            content() {
                                trigger.num += lib.config.wujinmoshiDraw;
                            },
                        };
                        lib.skill._wujinmoshiDrawE = {
                            trigger: {
                                player: 'drawBefore',
                            },
                            filter(event, player) {
                                return player != game.me;
                            },
                            forced: true,
                            content() {
                                if (Math.floor(lib.config.wujinmoshiDXB / 15) - lib.config.wujinmoshiDrawI < 3) {
                                    trigger.num += Math.floor(lib.config.wujinmoshiDXB / 15) - lib.config.wujinmoshiDrawI;
                                } else {
                                    trigger.num += 3;
                                }
                            },
                        };
                        lib.skill._wujinmoshiRecover = {
                            trigger: {
                                player: 'recoverBefore',
                            },
                            filter(event, player) {
                                return lib.config.wujinmoshiRecover > 0 && player == game.me;
                            },
                            forced: true,
                            content() {
                                trigger.num += lib.config.wujinmoshiRecover;
                            },
                        };
                        lib.skill._wujinmoshiRecoverE = {
                            trigger: {
                                player: 'recoverBefore',
                            },
                            filter(event, player) {
                                return player != game.me;
                            },
                            forced: true,
                            content() {
                                trigger.num += Math.floor(lib.config.wujinmoshiDXB / 10) - lib.config.wujinmoshiRecoverI;
                            },
                        };
                        if (lib.config.wujinmoshiP == undefined) {
                            jiangshiConfirm('未选择进行无尽模式的武将,重新载入游戏', ['确定'], function () { });
                            game.reload();
                        }
                        if (typeof wujinmoshiBAGJM != 'undefined') wujinmoshiBAGJM.delete();
                    },
                };
                if (!lib.config.zuan_brawl_daily || !lib.config.zuan_brawl_daily.length || lib.config.zuan_brawl_daily.length < 3) {
                    lib.config.zuan_brawl_daily = ['none', [], []];
                }
                if (config.zuan_brawl == 'daily') {
                    var d = new Date();
                    var month = d.getMonth() + 1;
                    var date = d.getDate();
                    var year = d.getFullYear();
                    var datetime = year + '-' + month + '-' + date;
                    if (lib.config.zuan_brawl_daily[0] != datetime) {
                        lib.config.zuan_brawl_daily[0] = datetime;
                        if (lib.config.extension_祖安设置_enable && config.zuan_brawl != 'off') {
                            lib.config.zuan_brawl_daily[1] = ['yuanqi', 'jingcheng', 'zhengba', 'taofa', 'guixin', 'huanhai', 'ansha'].randomGets(2).concat(['jiangshi', 'wujin', 'jianbing'].randomGets(1));
                        } else {
                            lib.config.zuan_brawl_daily[1] = ['jiangshi', 'wujin', 'jianbing'].randomGets(1);
                        }
                        lib.config.zuan_brawl_daily[2] = [];
                        game.saveConfig('zuan_brawl_daily', lib.config.zuan_brawl_daily);
                    }
                    window.zuan_brawlModes = lib.config.zuan_brawl_daily[1];
                }
                if (lib.config.extension_祖安设置_enable && get.mode() == 'brawl') {
                    lib.config.extension_祖安设置_balance = true;
                    lib.config.extension_祖安设置_mode = '1';
                    lib.config.extension_祖安设置_fun = '1';
                    lib.config.extension_祖安设置_upspeed = '0';
                    lib.config.extension_祖安设置_newover = false;
                    var items = localStorage.getItem('ZUANbingletexiaoSET');
                    if (!items) items = '';
                    if (items.indexOf('_mode') == -1) {
                        items = items + '_mode';
                        localStorage.setItem('ZUANbingletexiaoSET', items);
                    }
                    lib.config.mode_config.identity.choose_group = false;
                    lib.config.mode_config.identity.identity_mode = 'normal';
                }
                lib.config.mode_config.identity.choose_group = false;
                window.jiangshiConfirm = function (str, button, functions) {
                    if (!navigator.notification || !navigator.notification.confirm) return;
                    var title = '三国杀·琉璃版';
                    navigator.notification.confirm(str, functions, title, button);
                };
                window.BrawlChooseNum = function (meme, init, mode, numlist, xys) {
                    if (!meme || !init || !mode || !numlist) return;
                    if (!xys) {
                        var left = '150px';
                        var top = '-20px';
                    } else {
                        var left = xys.x;
                        var top = xys.y;
                    }
                    var creatNum = function (num) {
                        if (window.peopleNum) window.peopleNum.delete();
                        lib.config.mode_config[mode].player_number = numlist[num];
                        window.peopleNum = ui.create.div('.menubutton.large', '<span style="cursor:pointer;">游戏人数:' + numlist[num] + '</span>', function () {
                            var next = num + 1;
                            if (next >= numlist.length) next = 0;
                            setTimeout(function () {
                                creatNum(next);
                            }, 10);
                        });
                        peopleNum.style.left = left;
                        peopleNum.style.top = top;
                        meme.appendChild(peopleNum);
                    };
                    creatNum(init - 1);
                };
                window.BrawlSwitchList = {};
                window.BrawlSwitch = function (meme, inits, storage, str, xys) {
                    if (!meme || !inits || !storage || !str) return;
                    if (!xys) {
                        var left = '360px';
                        var top = '-20px';
                    } else {
                        var left = xys.x;
                        var top = xys.y;
                    }
                    var creatSwitch = function (yep) {
                        if (window.BrawlSwitchList[str]) window.BrawlSwitchList[str].delete();
                        lib.config[storage] = yep;
                        var open = yep ? '✔' : '✘';
                        window.BrawlSwitchList[str] = ui.create.div('.menubutton.large', '<span style="cursor:pointer;">' + str + ':' + open + '</span>', function () {
                            setTimeout(function () {
                                creatSwitch(!yep);
                            }, 10);
                        });
                        window.BrawlSwitchList[str].style.left = left;
                        window.BrawlSwitchList[str].style.top = top;
                        meme.appendChild(window.BrawlSwitchList[str]);
                    };
                    creatSwitch(inits);
                };
                window.BrawlInfos = function (meme, title, str, xys) {
                    if (!meme || !title || !str) return;
                    if (window.wujinmoshiJS) window.wujinmoshiJS.delete();
                    if (!xys) {
                        var left = '360px';
                        var top = '-20px';
                    } else {
                        var left = xys.x;
                        var top = xys.y;
                    }
                    setTimeout(function () {
                        window.wujinmoshiJS = ui.create.div('.menubutton.large', '<span style="cursor:pointer;">' + title + '</span>', function () {
                            var wujinmoshiJS1 = ui.create.dialog('hidden');
                            wujinmoshiJS1.style.height = 'calc(100%)';
                            wujinmoshiJS1.style.width = 'calc(100%)';
                            wujinmoshiJS1.style.left = '0px';
                            wujinmoshiJS1.style.top = '0px';
                            wujinmoshiJS1.classList.add('popped');
                            wujinmoshiJS1.classList.add('static');
                            var wujinmoshiJSQX = ui.create.div('.menubutton.round', '×', function () {
                                wujinmoshiJS1.delete();
                            });
                            wujinmoshiJSQX.style.right = '70px';
                            wujinmoshiJSQX.style.bottom = '50px';
                            wujinmoshiJSQX.style.transform = 'scale(1.2)';
                            var wujinmoshiJS2 = ui.create.div('', str);
                            wujinmoshiJS2.style.height = '80%';
                            wujinmoshiJS2.style.overflow = 'scroll';
                            wujinmoshiJS2.style.width = '100%';
                            wujinmoshiJS2.style.left = '0px';
                            wujinmoshiJS2.style.top = '10%';
                            wujinmoshiJS2.style.transform = 'scale(1.125)';
                            wujinmoshiJS2.style.filter = 'drop-shadow(0px 0px 5px #000000) drop-shadow(0px 0px 10px #000000) drop-shadow(0px 0px 15px #000000)';
                            wujinmoshiJS1.appendChild(wujinmoshiJS2);
                            wujinmoshiJS1.appendChild(wujinmoshiJSQX);
                            ui.window.appendChild(wujinmoshiJS1);
                        });
                        wujinmoshiJS.style.left = left;
                        wujinmoshiJS.style.top = top;
                        meme.appendChild(wujinmoshiJS);
                    }, 10);
                };
                game.hideMusicBrawl = function (music, delay) {
                    if (!ui.backgroundMusic) return;
                    var second = delay * 100;
                    game.hideMusicBrawlloop(10, music, second);
                };
                game.hideMusicBrawlloop = function (num, music, second) {
                    if (num > 0) {
                        ui.backgroundMusic.volume = ((lib.config.volumn_background / 8) * num) / 10;
                        setTimeout(function () {
                            game.hideMusicBrawlloop(num - 1, music, second);
                        }, second);
                    } else {
                        game.brawl_jiangshiMusic(music);
                        ui.backgroundMusic.volume = lib.config.volumn_background / 8;
                    }
                };
                game.brawl_jiangshiMusic = function (music) {
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日乱斗/audio/' + music + '.mp3';
                    lib.config.audio_music_story = false;
                    game.playBackgroundMusic();
                };
                lib.brawl.jiangshimoshi = {
                    name: window.brawlRename('jiangshi'),
                    mode: 'identity',
                    intro: ['游戏中无法执行换位函数,翻面则视为失去一点体力.', '移植太阳神三国杀的僵尸模式,规则有改动.<br><span style=\"color: #EE7621;font-size:18px\"><p align="center">规则介绍</p></span>', '1.在此模式中主公、忠臣为人类,反贼、内奸为僵尸(反贼僵尸称为<邪灵>,内奸僵尸称为<鬼影>).', '2.游戏开始时,所有角色的身份变为人类,主公获得退治印记(每回合开始时,退治印记+1).', '3.若主公死亡,则下一名人类玩家成为主公,生命与上限+1,并获取相当于原主公退治标记数-1的退治标记.', '4.主公的第二个回合开始时,夜幕降临,此轮中会有X个人变为反贼僵尸(X为存活人数/6(向上整取)).以此法变为反贼僵尸时,体力上限变为5.', '5.僵尸击杀人类后,人类与内奸僵尸组成双将.', '6.人类死亡后与内奸僵尸组成双将.', '7.内奸僵尸击杀人类或内奸僵尸后变为反贼僵尸.<br><span style=\"color: #EE7621;font-size:18px\"><p align="center">游戏结束条件</p></span>', '1.退治成功,所有人类胜利,僵尸以及成为僵尸的人类失败:<br>任何玩家的回合开始时,主公退治印记到达8.<br>击杀所有僵尸.', '2.退治失败,所有反贼僵尸胜利,非反贼僵尸以及人类失败:<br>主公阵亡并且场上没有可以代替主公的人类.'],
                    showcase(init) {
                        window.BrawlChooseNum(this, 4, 'identity', [5, 6, 7, 8]);
                        window.BrawlSwitch(this, true, 'brawl_jiangshi_tx', '阴间特效');
                    },
                    content: {
                        gameStart() {
                            for (var sk in lib.skill) {
                                if (sk.indexOf('jiushi') == -1) continue;
                                lib.skill[sk].usable = 1;
                                if (!lib.translate[sk + '_info']) continue;
                                lib.translate[sk + '_info'] = '每回合限一次,' + lib.translate[sk + '_info'];
                            }
                            for (var i of game.players) {
                                i.turnOver = function (all) {
                                    this.loseHp();
                                };
                                if (i != game.zhu) {
                                    i.identity = 'zhong';
                                }
                            }
                            game.zhu.storage.fzjsNumber = 0;
                            game.showIdentity();
                            game.swapSeat = game.kongfunc;
                        },
                    },
                    init() {
                        window.brawlRename('jiangshi', true);
                        game.hasDoublePossble = true;
                        lib.config.mode_config.identity.identity_mode = 'normal';
                        lib.skill._jisuangailv = {
                            trigger: { global: 'phaseAfter' },
                            forced: true,
                            filter(event, player) {
                                return player == game.zhu && game.zhu.storage._tuizhi == 2;
                            },
                            content() {
                                if (game.zhu.storage.jisuangailv == undefined) game.zhu.storage.jisuangailv = 0;
                                game.zhu.storage.jisuangailv++;
                            },
                            intro: {
                                content: 'mark',
                            },
                        };
                        lib.skill._tuizhi = {
                            trigger: { player: 'phaseBegin' },
                            forced: true,
                            _priority: 10,
                            filter(event, player) {
                                return player == game.zhu;
                            },
                            content() {
                                if (player.storage._tuizhi == undefined) player.storage._tuizhi = 0;
                                player.storage._tuizhi++;
                                player.markSkill('_tuizhi');
                            },
                            intro: {
                                content: 'mark',
                            },
                        };
                        lib.skill._tuizhi2 = {
                            trigger: { player: 'phaseBegin' },
                            forced: true,
                            _priority: 5,
                            filter(event, player) {
                                return game.zhu.storage._tuizhi >= 8;
                            },
                            content() {
                                if (game.me.identity == 'zhu' || game.me.identity == 'zhong') {
                                    game.over(true);
                                } else {
                                    game.over(false);
                                }
                            },
                        };
                        lib.skill._jiangshi = {
                            trigger: { player: 'dieBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.identity == 'zhong';
                            },
                            content() {
                                'step 0';
                                var hs = player.get('hej');
                                game.addVideo('lose', player, [get.cardsInfo(hs), [], [], []]);
                                for (var i = 0; i < hs.length; i++) {
                                    hs[i].discard(false);
                                }
                                if (player.storage.fzjs == 0) {
                                    player.revive();
                                    player.uninit;
                                    player.init(player.name, 'jiangshifz');
                                    player.maxHp = 5;
                                    player.hp = player.maxHp;
                                    player.identity = 'fan';
                                    if (lib.config.brawl_jiangshi_tx) game.playAudio('../extension/末日乱斗/fanzei.mp3');
                                } else {
                                    player.revive();
                                    player.uninit;
                                    player.init(player.name, 'jiangshinj');
                                    player.hp = player.maxHp;
                                    player.identity = 'nei';
                                    if (lib.config.brawl_jiangshi_tx) game.playAudio('../extension/末日乱斗/neijian.mp3');
                                }
                                ('step 1');
                                player.draw(4);
                                game.showIdentity();
                                trigger.untrigger();
                                trigger.finish();
                            },
                        };
                        lib.skill._jiangshi2 = {
                            trigger: { player: 'phaseBegin' },
                            forced: true,
                            popup: false,
                            silent: true,
                            _priority: 15,
                            filter(event, player) {
                                if (game.players.length <= 6) return !player.storage._tuizhi && game.zhu.storage._tuizhi == 2 && Math.random() <= game.zhu.storage.jisuangailv / (game.players.length - 1) - game.zhu.storage.fzjsNumber;
                                if (game.players.length > 6 && game.players.length <= 12) return !player.storage._tuizhi && game.zhu.storage._tuizhi == 2 && Math.random() <= (game.zhu.storage.jisuangailv * 2) / (game.players.length - 1) - game.zhu.storage.fzjsNumber;
                                if (game.players.length > 12 && game.players.length <= 18) return !player.storage._tuizhi && game.zhu.storage._tuizhi == 2 && Math.random() <= (game.zhu.storage.jisuangailv * 3) / (game.players.length - 1) - game.zhu.storage.fzjsNumber;
                            },
                            content() {
                                player.die();
                                player.identity = 'zhong';
                                player.storage.fzjs = 0;
                                game.zhu.storage.fzjsNumber++;
                            },
                        };
                        lib.skill._jiangshi3 = {
                            trigger: { source: 'dieBefore' },
                            forced: true,
                            filter(event, player) {
                                return (event.player.identity == 'zhong' || event.player.identity == 'nei') && player.identity == 'nei';
                            },
                            content() {
                                player.identity = 'fan';
                                player.init(player.name, 'jiangshifz');
                                if (lib.config.brawl_jiangshi_tx) game.playAudio('../extension/末日乱斗/fanzei.mp3');
                                game.showIdentity();
                            },
                        };
                        lib.skill._jiangshi4 = {
                            trigger: { player: 'dieBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.storage._tuizhi > 0;
                            },
                            content() {
                                for (var i of game.players) {
                                    if (i.identity == 'zhong') {
                                        event.target = i;
                                        break;
                                    }
                                }
                                if (event.target) {
                                    game.zhu.line(event.target, 'thunder');
                                    game.log(game.zhu, '死亡', event.target, '成为了新的主公!');
                                    game.zhu = event.target;
                                    event.target.identity = 'zhu';
                                    event.target.gainMaxHp();
                                    event.target.recover();
                                    event.target.storage.fzjsNumber = player.storage.fzjsNumber;
                                    event.target.storage._tuizhi = player.storage._tuizhi - 1;
                                    event.target.markSkill('_tuizhi');
                                    game.showIdentity();
                                }
                            },
                        };
                        lib.skill._jiangshiTx = {
                            forced: true,
                            trigger: { player: 'dieBefore' },
                            filter(event, player) {
                                if (player.identity != 'zhong') return false;
                                return true;
                            },
                            content() {
                                game.log('灵魂献祭');
                            },
                        };
                        lib.skill._jiangshiTx2 = {
                            audio: 'jiangshidie',
                            forced: true,
                            trigger: { player: 'dieBefore' },
                            filter(event, player) {
                                return player.identity == 'fan' || player.identity == 'nei';
                            },
                            content() {
                                game.log('僵尸灭亡');
                            },
                        };
                        lib.skill._jiangshiTx3 = {
                            trigger: { player: 'phaseBegin' },
                            forced: true,
                            filter(event, player) {
                                if (player.storage._tuizhi != 2) return false;
                                if (player.storage.ayjljs == 0) return false;
                                if (lib.config.brawl_jiangshi_tx) {
                                    game.playAudio('../extension/末日乱斗/coming.mp3');
                                    game.hideMusicBrawl('darknight', 2);
                                }
                                return true;
                            },
                            content() {
                                for (var i of game.players) {
                                    i.storage.ayjljs = 0;
                                }
                                game.log('暗夜降临');
                                if (lib.config.brawl_jiangshi_tx && ui.background) {
                                    ui.background.style.transition = 'all 1s';
                                    ui.background.style.filter = 'hue-rotate(180deg) contrast(150%)';
                                }
                            },
                        };
                        lib.skill._huzhu = {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card, player) {
                                return card.name == 'tao';
                            },
                            filter(event, player) {
                                return player.identity == 'zhong' || player.identity == 'zhu';
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return get.distance(player, target) <= 1 && target.isDamaged() && (target.identity == 'zhong' || target.identity == 'zhu');
                            },
                            content() {
                                player.useCard({ name: 'tao' }, target);
                            },
                        };
                        lib.translate._tuizhi = '退治';
                        lib.translate._tuizhi2 = '退治';
                        lib.translate._jiangshi = '僵尸';
                        lib.translate._jiangshi2 = '僵尸';
                        lib.translate._jiangshi3 = '僵尸';
                        lib.translate._jiangshi4 = '僵尸';
                        lib.translate._jiangshiTx = '僵尸';
                        lib.translate._jiangshiTx2 = '僵尸';
                        lib.translate._jiangshiTx3 = '僵尸';
                        lib.translate._huzhu = '互助';
                        lib.translate._huzhu_info = '出牌阶段限一次,人类玩家可以弃置一张【桃】令距离一的人类玩家回复一点体力';
                    },
                };
                lib.translate.unknown8 = '九号位';
                lib.translate.unknown9 = '十号位';
                lib.translate.unknown10 = '十一号位';
                lib.translate.unknown11 = '十二号位';
                lib.translate.unknown12 = '十三号位';
                lib.translate.unknown13 = '十四号位';
                lib.translate.unknown14 = '十五号位';
                lib.translate.unknown15 = '十六号位';
                lib.translate.chanceIdentity0 = '自立为国';
                lib.translate.chanceIdentity = '自立为国';
                lib.translate.chanceIdentity1 = '自立为国';
                lib.translate.chanceIdentity2 = '自立为国';
                lib.translate.chanceIdentity3 = '自立为国';
                lib.translate.chanceIdentity4 = '自立为国';
                lib.translate.chanceIdentity5 = '自立为国';
                lib.translate.chanceIdentity6 = '自立为国';
                lib.translate.chanceIdentity7 = '自立为国';
                lib.translate.chanceIdentity8 = '自立为国';
                lib.translate.chanceIdentity9 = '自立为国';
                lib.translate.chanceIdentity10 = '自立为国';
                lib.translate.chanceIdentity11 = '自立为国';
                lib.translate.chanceIdentity12 = '自立为国';
                lib.translate.chanceIdentity13 = '自立为国';
                lib.translate.chanceIdentity14 = '自立为国';
                lib.translate.chanceIdentity15 = '自立为国';
                lib.brawl.jianbingmoshi = {
                    name: window.brawlRename('jianbing'),
                    mode: 'guozhan',
                    intro: ['游戏开始,每个玩家自立为国,各自为战.', '每当有一个国家灭亡时,造成其灭亡的国家可以获得灭亡的国家的明置武将技能.'],
                    showcase(init) {
                        window.BrawlChooseNum(this, 6, 'guozhan', [3, 4, 5, 6, 7, 8]);
                    },
                    content: {
                        gameStart() {
                            game.filterPlayer(function (player) {
                                player.next.group = 'ye';
                                player.next.identity = 'ye';
                                player.next._group = 'ye';
                                player.changeGroup('ye');
                            });
                        },
                    },
                    init() {
                        window.brawlRename('jianbing', true);
                        lib.config.mode_config.guozhan.onlyguozhan = false;
                        lib.config.mode_config.guozhan.guozhanpile = false;
                        lib.skill._gainSkill = {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.isIn();
                            },
                            content() {
                                game.log(trigger.source, '获得了', player.get('s', false, false));
                                trigger.source.addSkill(player.get('s', false, false));
                            },
                        };
                    },
                };
            }
            if (lib.config.extension_祖安设置_enable && config.zuan_brawl != 'off') {
                if (!window.zuan_brawlModes) window.zuan_brawlModes = ['yuanqi', 'jingcheng', 'zhengba', 'taofa', 'guixin', 'huanhai', 'ansha'];
                if (config.zuan_brawl == 'standard') {
                    window.zuan_brawlModes = ['yuanqi', 'huanhai', 'ansha'];
                }
                if (config.zuan_brawl == 'random') {
                    window.zuan_brawlModes = ['yuanqi', 'jingcheng', 'zhengba', 'taofa', 'guixin', 'huanhai', 'ansha'].randomGets(3);
                }
                window.zuan_keepIdentityAdd = function () {
                    lib.skill._keepideskill = {
                        trigger: {
                            player: ['gainAfter', 'loseAfter', 'phaseBegin', 'phaseEnd'],
                        },
                        silent: true,
                        forced: true,
                        _priority: -66,
                        filter(event, player) {
                            return typeof player.storage.zuan_identity != 'undefined' && player.storage.zuan_identity.length;
                        },
                        content() {
                            var idesum = player.storage.zuan_identity;
                            player.setIdentity(idesum[0]);
                            player.node.identity.dataset.color = idesum[1];
                            player.identityShown = true;
                        },
                    };
                };
                window.zuan_levelSkillAdd = function () {
                    lib.translate._levelskill_maxlevel = '号令';
                    lib.skill._levelskill = {
                        group: ['_levelskill_maxlevel', '_levelskill_mode', '_levelskill_draw'],
                        subSkill: {
                            draw: {
                                trigger: {
                                    player: 'phaseDrawBegin2',
                                },
                                silent: true,
                                forced: true,
                                filter(event, player) {
                                    if (lib.config.extension_祖安设置_levelstrong == 'off') return false;
                                    return !event.numFixed && player.storage._levelskill >= 9;
                                },
                                content() {
                                    trigger.num++;
                                },
                            },
                            mode: {
                                mod: {
                                    maxHandcard(player, num, storage) {
                                        if (lib.config.extension_祖安设置_levelstrong == 'off') return;
                                        var plus = 0;
                                        if (player.storage._levelskill >= 3) plus++;
                                        if (player.storage._levelskill >= 6 && lib.config.extension_祖安设置_levelstrong == 'old') plus++;
                                        if (plus > 0) return num + plus;
                                    },
                                    cardUsable(card, player, num, storage) {
                                        if (lib.config.extension_祖安设置_levelstrong == 'off') return;
                                        if (player.storage._levelskill >= 5 && card.name == 'sha') return num + 1;
                                    },
                                    attackFrom(from, to, distance) {
                                        if (lib.config.extension_祖安设置_levelstrong == 'new' && from.storage._levelskill >= 4) return distance - 1;
                                    },
                                    globalFrom(from, to, distance) {
                                        if (lib.config.extension_祖安设置_levelstrong == 'off') return;
                                        if (from.storage._levelskill >= 7) return distance - 1;
                                    },
                                    globalTo(from, to, distance) {
                                        if (lib.config.extension_祖安设置_levelstrong != 'new') return;
                                        if (to.storage._levelskill >= 6) return distance + 1;
                                    },
                                },
                            },
                            maxlevel: {
                                enable: 'phaseUse',
                                usable: 2,
                                filter(event, player) {
                                    if (lib.config.extension_祖安设置_levelstrong == 'off' || player.storage._levelskill < 10) return false;
                                    return player.countCards('hs') >= 2;
                                },
                                position: 'hs',
                                chooseButton: {
                                    dialog(player) {
                                        var list = [];
                                        for (var i = 0; i < lib.inpile.length; i++) {
                                            if (get.type(lib.inpile[i]) == 'basic') list.push(['基本', '', lib.inpile[i]]);
                                        }
                                        return ui.create.dialog('号令群雄', [list, 'vcard']);
                                    },
                                    filter(button, player) {
                                        return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                    },
                                    check(button) {
                                        var player = _status.event.player;
                                        var recover = 0,
                                            lose = 1,
                                            players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i.hp == 1 && get.damageEffect(i, player, player) > 0 && !i.hasSha()) {
                                                return button.link[2] == 'sha' ? 2 : -1;
                                            }
                                            if (!i.isOut()) {
                                                if (i.hp < i.maxHp) {
                                                    if (get.attitude(player, i) > 0) {
                                                        if (i.hp < 2) {
                                                            lose--;
                                                            recover += 0.5;
                                                        }
                                                        lose--;
                                                        recover++;
                                                    } else if (get.attitude(player, i) < 0) {
                                                        if (i.hp < 2) {
                                                            lose++;
                                                            recover -= 0.5;
                                                        }
                                                        lose++;
                                                        recover--;
                                                    }
                                                } else {
                                                    if (get.attitude(player, i) > 0) {
                                                        lose--;
                                                    } else if (get.attitude(player, i) < 0) {
                                                        lose++;
                                                    }
                                                }
                                            }
                                        }
                                        if (lose > recover && lose > 0) return button.link[2] == 'sha' ? 1 : -1;
                                        if (lose < recover && recover > 0) return button.link[2] == 'tao' ? 1 : -1;
                                        return button.link[2] == 'tao' ? 1 : -1;
                                    },
                                    backup(links, player) {
                                        return {
                                            filterCard: true,
                                            selectCard: 2,
                                            audio: 'ext:末日乱斗/audio:2',
                                            popname: true,
                                            viewAs: { name: links[0][2] },
                                        };
                                    },
                                    prompt(links, player) {
                                        return '将两张手牌当作' + get.translation(links[0][2]) + '使用';
                                    },
                                },
                                ai: {
                                    order: 2,
                                    result: {
                                        player(player) {
                                            var num = 0;
                                            var cards = player.getCards('hs');
                                            if (cards.length >= 3 && player.hp >= 3) return 0;
                                            if (Array.isArray(cards)) for (var i of cards) {
                                                num += Math.max(0, get.value(i, player, 'raw'));
                                            }
                                            num /= cards.length;
                                            num *= Math.min(cards.length, player.hp);
                                            return 12 - num;
                                        },
                                    },
                                },
                            },
                        },
                        markimage: 'extension/祖安武将/basic/zuan_level.png',
                        trigger: {
                            player: ['enterGame'],
                            global: 'gameDrawAfter',
                        },
                        _priority: 987,
                        silent: true,
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            player.addMark('_levelskill', 1, false);
                            player.storage.relife = Math.ceil(player.storage._levelskill * 0.4 + 0.1);
                            var chat = ['游戏已开始,请赶快获得经验以提升等级哦~', '欢迎来到战局!祝我们游戏顺利~', '游戏已开始,请放心游玩呢'].randomGet();
                            if (player == game.me) player.say(chat);
                        },
                        intro: {
                            name: '等级',
                            content(storage, player, skill) {
                                var level = player.storage._levelskill;
                                var str = '⊙当前等级 ' + level + '/10级';
                                if (lib.config.extension_祖安设置_levelstrong == 'old') {
                                    if (level < 3) var str = str + '<li>尚未获得任何强化';
                                    if (level >= 3) var str = str + '<li>手牌上限+1';
                                    if (level >= 4) var str = str + '<li>获得一点护甲';
                                    if (level >= 5) var str = str + '<li>【杀】的使用次数+1';
                                    if (level >= 6) var str = str + '<li>手牌上限+1';
                                    if (level >= 7) var str = str + '<li>攻击距离+1';
                                    if (level >= 8) var str = str + '<li>获得一点体力上限';
                                    if (level >= 9) var str = str + '<li>摸牌阶段额外摸一张牌';
                                    if (level >= 10) var str = str + '<li>出牌阶段限两次,可将两张手牌当一张基本牌使用';
                                } else if (lib.config.extension_祖安设置_levelstrong == 'new') {
                                    if (level < 3) var str = str + '<li>尚未获得任何强化';
                                    if (level >= 3) var str = str + '<li>手牌上限+1';
                                    if (level >= 4) var str = str + '<li>【杀】的使用范围+1';
                                    if (level >= 5) var str = str + '<li>【杀】的使用次数+1';
                                    if (level >= 6) var str = str + '<li>防御距离+1';
                                    if (level >= 7) var str = str + '<li>进攻距离+1';
                                    if (level >= 8) var str = str + '<li>体力上限+1';
                                    if (level >= 9) var str = str + '<li>摸牌阶段摸牌数+1';
                                    if (level >= 10) var str = str + '<li>出牌阶段限两次,可将两张手牌当一张基本牌使用';
                                } else {
                                    if (!lib.config.extension_祖安设置_balance) var str = str + '<li>每提升一个等级可以摸一张牌';
                                }
                                return str;
                            },
                        },
                    };
                    lib.skill._expskill = {
                        marktext: '经',
                        trigger: {
                            player: ['phaseBegin'],
                            source: 'damageSource',
                        },
                        markimage: 'extension/祖安武将/basic/zuan_exp.png',
                        _priority: 200,
                        silent: true,
                        forced: true,
                        filter(event, player) {
                            return !player.hasSkill('jingcheng');
                        },
                        content() {
                            var adds = trigger.name == 'damage' ? trigger.num * 7 : 3;
                            game.zuanExp(player, adds);
                        },
                        intro: {
                            name: '经验',
                            content(storage, player, skill) {
                                var maxexp = 20 + 2 * player.storage._levelskill;
                                var str = '<li>距离下一级已有 ' + player.storage._expskill + '/' + maxexp + '经验';
                                return str;
                            },
                        },
                    };
                    lib.skill._exp2skill = {
                        trigger: {
                            player: ['recoverEnd'],
                        },
                        _priority: 200,
                        silent: true,
                        forced: true,
                        filter(event, player) {
                            return !player.hasSkill('jingcheng');
                        },
                        content() {
                            var add = trigger.num * (player.maxHp - player.hp + 1) * 2;
                            game.zuanExp(player, add);
                        },
                    };
                    lib.skill._useskill = {
                        usable: 3,
                        trigger: {
                            player: ['useCard'],
                        },
                        _priority: 200,
                        silent: true,
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            game.zuanExp(player, 2);
                        },
                    };
                    lib.skill._killskill = {
                        trigger: {
                            source: ['dieBegin'],
                        },
                        _priority: 200,
                        silent: true,
                        forced: true,
                        filter(event, player) {
                            return !player.hasSkill('jingcheng');
                        },
                        content() {
                            game.zuanExp(player, 25);
                        },
                    };
                };
                window.zuan_reviveAdd = function () {
                    lib.skill._relifeskill = {
                        trigger: {
                            global: 'roundStart',
                        },
                        silent: true,
                        forced: true,
                        filter(event, player) {
                            if (player.identity != 'zhu') return false;
                            return true;
                        },
                        content() {
                            if (game.dead.length) {
                                for (var i = 0; i < game.dead.length; i++) {
                                    var dd = game.dead[i];
                                    var dds = dd.storage.relife;
                                    dd.storage.relife--;
                                    if (!dd.storage.relife || dd.storage.relife < 1) {
                                        if (parseFloat(lib.config.extension_祖安设置_audio) >= '2') game.playAudio('../extension/祖安武将/audio/revive.mp3');
                                        dd.revive(dd.maxHp);
                                        game.addVideo('revive', dd);
                                        event.dead = dd;
                                        dd.draw(Math.ceil(dd.storage._levelskill * 0.5));
                                        dd.storage.relife = Math.ceil(dd.storage._levelskill * 0.4 + 0.1);
                                        dd.markSkill('_expskill');
                                        dd.markSkill('_levelskill');
                                        if (dd.hasSkill('zuan_hudun')) {
                                            dd.storage.zuan_hudun = dd.storage.zuan_maxhujia;
                                            dd.markSkill('zuan_hudun');
                                        }
                                        dd.update();
                                        dd.$damagepop('重生');
                                        game.log(dd, '<span class=\"zuantext\" style=\"color: #7CFC00\">获得了重生</span>');
                                    } else {
                                        dd.$damagepop(get.cnNumber(dd.storage.relife) + '回合');
                                        game.log(dd, '复活还剩<span class=\"zuantext\" style=\"color: #228B22\">', get.cnNumber(dd.storage.relife), '回合</span>');
                                    }
                                }
                            }
                        },
                    };
                };
                if (window.zuan_brawlModes.includes('yuanqi'))
                    lib.brawl.zuan_yuanqi = {
                        name: window.brawlRename('yuanqi'),
                        mode: 'identity',
                        intro: [
                            '来自扩展『<span class="playext" style="color: #87CEFA">祖安武将</span>』<br><span style="color: #EE7621;font-size:18px"><p align=\'center\'>游戏玩法</p></span>',
                            '此玩法的机制改自同名手游<元气骑士>;<li>所有玩家将体力值按任意比例转化成护盾值;<li>护盾与体力值系统分离,不受到有关体力值技能或卡牌的影响(除【铁索连环】外);<li>所有护盾值不为满的角色在回合开始时,若其和其护盾从上个同样阶段到现在没有受到过伤害或流失体力,其回复一点护盾(不能超过护盾上限);<li>游戏中每一轮开始时,所有角色可选择并获得一个天赋,此后每隔两轮开始时可再选择并获得一个天赋(天赋数量不能超过6个);<li>天赋的选项将从天赋库中随机选取三项供角色选择;<li>若该角色在规定的轮数内未获得天赋,则在下一个回合的开始时可再次进行选择获得天赋;<li>天赋的详细内容列表请点击下方按钮进行查看.',
                        ],
                        showcase(init) {
                            window.BrawlChooseNum(this, 1, 'identity', [5, 6, 7, 8]);
                            window.BrawlInfos(this, '天赋列表', '—————————————<br>- 元 气 天 赋 大 全 -<br>—————————————<li>天赋库 数量:48<br><br>〖蓝盾〗<li>你的护盾消失后,你免疫多余的伤害,并且直到下回合开始,你免疫一次伤害.<br><br>〖火盾〗<li>当你即将受到火属性的伤害时,你令此伤害减一.<br><br>〖毒盾〗<li>每回合限两次,当你即将受【毒】影响或流失体力时,你免疫造成的体力流失.<br><br>〖刺盾〗<li>当受到与你距离不大于一的角色除【杀】外造成,或没有来源的伤害时,你防止此伤害.<br><br>〖血盾〗<li>你获得一点体力上限,并回复一点体力.(当你失去此天赋时,你减少一点体力上限)<br><br>〖护盾〗<li>你获得一点护盾上限,并回复一点护盾.(当你失去此天赋时,你减少一点护盾上限)<br><br>〖碎盾〗<li>当你的护盾受到攻击后,伤害来源弃一张牌,本回合内你不能再受到伤害.<br><br>〖紫手〗<li>当一名其他角色使用【杀】指定你为目标时,其需弃置一张手牌,否则此【杀】对你无效.<br><br>〖药水〗<li>当你对濒死的角色使用【桃】回复体力时,你令此【桃】能额外回复一点体力.<br><br>〖吸蓝〗<li>每回合限两次,当有一名其他角色进入濒死状态时,你摸一张牌.<br><br>〖吸血〗<li>每当你造成一点伤害后,你可进行一次判定:若为红色,你回复一点体力.<br><br>〖蓄力〗<li>回合结束阶段,若你于本回合的出牌阶段内没有过使用或打出过【杀】,则你摸一张牌.<br><br>〖霰弹〗<li>当你使用一张【杀】指定一名角色作为目标后,你可为此【杀】额外指定一个目标.<br><br>〖瞄准〗<li>每当你使用【杀】指定目标后,你进行判定:若为黑色,则此【杀】不可被闪避.<br><br>〖激光〗<li>当你即将使用【杀】或【决斗】造成伤害时,你令此伤害变为雷属性并令目标弃一张牌.<br><br>〖折射〗<li>每回合限一次,当你的【杀】被闪避后,你可为此【杀】指定另一个目标.<br><br>〖元素〗<li>每回合限一次,当你造成属性伤害时,你令此伤害加一.<br><br>〖穿透〗<li>你无视场上所有其他角色的防具,所有其他角色的防具对你无法产生效果.<br><br>〖防御〗<li>你最多只能受到一点伤害,你最多只能流失一点体力.<br><br>〖修盾〗<li>你的回合开始时,你回复护盾可以不受到回复的条件限制.(冷却时间:2轮)<br><br>〖选择〗<li>当你在选择天赋的过程中,你可额外增加两个可选择的选项.<br><br>〖遗忘〗<li>你选择遗忘并且删除一个天赋,你的下个回合开始时你可重新选择一次天赋.<br><br>〖商店〗<li>你的摸牌阶段开始时进行一次判定:若为基本牌,则你令摸牌数增加一.<br><br>〖冰盾〗<li>你的武将牌始终正面向上,你移除你的判定区.(失去此天赋后你回复判定区)<br><br>〖近战〗<li>当你与其他角色计算距离时,你令你与该角色计算的距离减少一.<br><br>〖冷却〗<li>每回合更新一次,你将你原武将牌上除限定技、觉醒技和主公技以外的随机一个技能克隆.<br><br>〖能量〗<li>你的弃牌阶段时,你的手牌上限始终视为增加两张.<br><br>〖速击〗<li>你的出牌阶段内,你可使用【杀】的次数上限加一.<br><br>〖雷盾〗<li>当你即将受到雷属性的伤害时,你令此伤害减一.<br><br>〖真伤〗<li>你即将造成伤害时,你令你造成的伤害无视伤害目标的护盾.<br><br>〖强化〗<li>每回合你可以强化一次装备区的标准/军争/SP包防具,当你失去强化的防具时,你将其重置并重新装备.<br><br>〖血箱〗<li>当你的手牌或装备牌中存在♥️️牌时,你可以将其当做【桃】使用.<br><br>〖反弹〗<li>当你使用【闪】闪避了一名角色对你使用的【杀】后,你视为对其使用此【杀】.<br><br>〖逃逸〗<li>当你与其他角色计算距离时,你令该角色与你计算的距离增加一.<br><br>〖雕像〗<li>你随机展示三个未拥有的限定技,选择获得其中一个.<br><br>〖双武〗<li>当你失去装备区的武器牌时,你保留该武器的技能直到你失去下一张武器牌.<br><br>〖宠物〗<li>你装备区内的坐骑牌不能够被弃置,当你即将受到伤害时,你区域内的坐骑牌会替你抵挡等量的伤害.<br><br>〖归盾〗<li>当你的护盾受到伤害后,你获得等伤害的量的牌.<br><br>〖嗜血〗<li>当你受到伤害后,直到你的下回合结束,你的【杀】不可被闪避.<br><br>〖狂暴〗<li>每当你的【杀】造成一点伤害后,你摸一张牌.<br><br>〖炸弹〗<li>当一名角色死亡时,你可以立即令至多两名其他角色受到随机〇至两点火焰伤害.<br><br>〖金盾〗<li>你每有两张手牌时,你的护盾上限增加一.(最多增加三点)<br><br>〖移盾〗<li>每轮限一次,当你使用或打出一张【闪】时,你回复一点护盾.<br><br>〖法杖〗<li>你使用单体非延时锦囊牌时可以额外指定一名角色作为目标.<br><br>〖幸运〗<li>在你进行判定前,你将牌堆顶的三张牌中对你判定结果最有利的一张牌置于牌堆顶.<br><br>〖连发〗<li>你使用【杀】对一名距离大于一的角色结算完毕后,你视为对该角色再使用一张【杀】.<br><br>〖双盾〗<li>你的护盾上限加二,受到无属性伤害加一,护盾消失后,你将护盾回复至满.(冷却时间:3轮)<br><br>〖移速〗<li>每张卡限一次,当你使用的【杀】命中角色目标后,你摸一张牌.');
                        },
                        content: {
                            gameStart() {
                                lib.skill.zuan_gaindun.trigger = { global: 'roundStart' };
                            },
                        },
                        init() {
                            window.brawlRename('yuanqi', true);
                            lib.config.extension_祖安设置_fun = '7';
                            window.zuan_keepIdentityAdd();
                            lib.skill._yuanqiskill = {
                                trigger: {
                                    player: ['enterGame'],
                                    global: 'gameDrawAfter',
                                },
                                forced: true,
                                _priority: 2,
                                content() {
                                    'step 0';
                                    player.addSkill('zuan_hudun');
                                    ('step 1');
                                    if (player.maxHp != Infinity) {
                                        var list = [];
                                        for (var i = 1; i <= player.maxHp; i++) {
                                            if (i <= 9) list.push(i * 0.1);
                                        }
                                        var rana = list.randomGet();
                                        var ranb = 1 - rana;
                                        event.hujia = Math.ceil(player.maxHp * rana);
                                        event.maxhp = Math.max(1, player.maxHp - event.hujia);
                                        event.hp = Math.ceil(player.hp * ranb);
                                    } else {
                                        event.hujia = 1;
                                        event.maxhp = player.maxHp;
                                        event.hp = player.hp;
                                    }
                                    player.storage.zuan_maxhujia = event.hujia;
                                    ('step 2');
                                    var add = 0;
                                    if (lib.config.extension_祖安设置_balance) add++;
                                    player.hp = event.hp + add;
                                    player.maxHp = event.maxhp + add;
                                    player.addMark('zuan_hudun', event.hujia, false);
                                    game.dyingShow(player, parseFloat(lib.config.extension_祖安设置_newui));
                                    player.update();
                                },
                            };
                        },
                    };
                if (window.zuan_brawlModes.includes('jingcheng'))
                    lib.brawl.zuan_jingcheng = {
                        name: window.brawlRename('jingcheng'),
                        mode: 'identity',
                        intro: ['来自扩展『<span class="playext" style="color: #87CEFA">祖安武将</span>』<br><span style="color: #EE7621;font-size:18px"><p align=\'center\'>游戏玩法</p></span>', '游戏开始时主公体力上限减一,游戏默认开启等级模式,且角色拥有复活效果;<li>主公死亡后出现 京城 ;<li><span class="balancetext" style="color: #C0C0C0">游戏开始时内奸重新平均分配忠臣和反贼的身份(优先反贼)</span>;<li>京城的初始体力值为游戏开始时反贼的数量*8;<li>所有角色与京城计算距离时视为一;<li>京城没有手牌和装备牌,受到伤害视为流失体力,受到【杀】造成的伤害翻倍,且不能回复体力;<li>京城不能成为除闪电、火山、洪水和浮雷外延时锦囊牌的目标;<li>京城需要两张【闪】才能抵消【杀】,其他非反贼角色可替京城打出【闪】;<li>京城的回合改为随机令场上任意一名反贼打出一张【闪】,或受到一点伤害,<span class="balancetext" style="color: #C0C0C0">以此法造成X点伤害(X为场上存活的忠臣的数量)</span>;<li><span class="balancetext" style="color: #C0C0C0">在主公或忠臣的回合,非濒死的反贼不能使用【桃】</span>;<li>反贼击杀主公后,击杀者摸三张牌;<li><span class="balancetext" style="color: #C0C0C0">当有一名反贼死亡后,随机一名其他已死亡的反贼复活延迟一个回合</span>;<li><span class="balancetext" style="color: #C0C0C0">当有一名忠臣死亡后,若主公未死亡,其失去一点体力</span>;<li><span class="balancetext" style="color: #C0C0C0">所有角色每死亡两次延长一个回合的复活时间,最多5个回合</span>;<li>京城或所有反贼死亡后游戏结束.<li>〈<span class="balancetext" style="color: #C0C0C0">灰色字体</span>〉为平衡模式内容,可在下方按钮处设置.'],
                        showcase(init) {
                            window.BrawlChooseNum(this, 3, 'identity', [5, 6, 7, 8]);
                            window.BrawlSwitch(this, true, 'extension_祖安设置_balance', '平衡模式');
                            window.BrawlInfos(this, '等级介绍', '—————————————<br>- 等 级 加 成 介 绍 -<br>—————————————<br><li>初始等级为1级;<br><li>每回合开始获得3点经验;<br><li>每回合限三次,使用一张手牌获得2点经验;<br><li>每造成一点伤害获得7点经验;<br><li>每回复一点体力后获得已失体力值加一*2点经验;<br><li>每击杀一名角色获得25点经验;<br><li>每个等级升级所需经验:等级*2+20点;<br><li>每提升一级摸一张牌<span class="balancetext" style="color: #C0C0C0">(取消摸牌效果)</span>.<br><br><span class="playext" style="color: #4169E1">[等级奖励]</span><br><br><li><span class="playext" style="color: #87CEFA">新规则 ></span><br><br>  三级:手牌上限+1;<br>  四级:【杀】的使用范围+1;<br>  五级:【杀】的使用次数+1;<br>  六级:防御距离+1;<br>  七级:进攻距离+1;<br>  八级:体力上限+1;<br>  九级:摸牌阶段摸牌数+1;<br>  十级:出牌阶段限两次,可将两张手牌当一张基本牌使用.<br><br><li><span class="playext" style="color: #87CEFA">旧规则 ></span><br><br>  三级:手牌上限+1;<br>  四级:获得一点护甲;<br>  五级:【杀】的使用次数+1;<br>  六级:手牌上限+1;<br>  七级:攻击距离+1;<br>  八级:获得一点体力上限;<br>  九级:摸牌阶段额外摸一张牌;<br>  十级:出牌阶段限两次,可将两张手牌当一张基本牌使用.<br><br><span class="playext" style="color: #4169E1">[复活效果]</span><br><br><li>武将死亡后将于 等级*0.4+0.1(向上取整) 个回合后复活;<br><li>复活后手牌摸至X张.(X为角色等级*0.5向上取整)', { x: '150px', y: '40px' });
                            window.BrawlSwitch(this, true, 'extension_祖安设置_texiao', '动画特效', { x: '360px', y: '40px' });
                        },
                        content: {
                            gameStart() {
                                if (game.zhu) game.zhu.loseMaxHp();
                            },
                        },
                        init() {
                            window.brawlRename('jingcheng', true);
                            window.zuan_keepIdentityAdd();
                            window.zuan_levelSkillAdd();
                            window.zuan_reviveAdd();
                            lib.config.extension_祖安设置_relife = '100';
                            lib.config.mode_config.identity.double_character = false;
                            lib.config.extension_祖安设置_mode = '2';
                            if (lib.config.extension_祖安设置_balance) {
                                lib.skill._zhongzhubuff = {
                                    mod: {
                                        cardSavable(card, player) {
                                            if (!_status.currentPhase) return;
                                            var idelist = ['zhu', 'zhong', 'mingzhong'];
                                            if (_status.currentPhase.isAlive() && idelist.includes(_status.currentPhase.identity) && _status.currentPhase != player) {
                                                if (card.name == 'tao' && !player.isDying() && player.identity == 'fan') return false;
                                            }
                                        },
                                        cardEnabled(card, player) {
                                            if (!_status.currentPhase) return;
                                            var idelist = ['zhu', 'zhong', 'mingzhong'];
                                            if (_status.currentPhase.isAlive() && idelist.includes(_status.currentPhase.identity) && _status.currentPhase != player) {
                                                if (card.name == 'tao' && !player.isDying() && player.identity == 'fan') return false;
                                            }
                                        },
                                    },
                                };
                                lib.skill._jingchengadddie = {
                                    trigger: {
                                        player: 'die',
                                    },
                                    _priority: 99,
                                    silent: true,
                                    forceDie: true,
                                    filter(event, player) {
                                        return player.storage.relife_plus < 10;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.relife_plus++;
                                        ('step 1');
                                        var num = player.storage.relife_plus;
                                        if (num % 2 == 0) game.log(player, '延长了<span class=\"zuantext\" style=\"color: #A9A9A9\">一回合的复活时间</span>');
                                        player.storage.relife += Math.floor(num / 2);
                                    },
                                };
                            }
                            lib.skill._zhongfandieskill = {
                                trigger: {
                                    player: 'die',
                                },
                                _priority: 97,
                                silent: true,
                                forceDie: true,
                                forced: true,
                                filter(event, player) {
                                    if (player.identity == 'zhu') return false;
                                    return lib.config.extension_祖安设置_balance;
                                },
                                content() {
                                    var ide = player.identity;
                                    if (ide == 'fan') {
                                        if (game.dead.length) {
                                            var fan = [];
                                            for (var i = 0; i < game.dead.length; i++) {
                                                var dd = game.dead[i];
                                                if (dd.identity == 'fan' && dd != player) {
                                                    fan.push(dd);
                                                }
                                            }
                                            if (fan.length) {
                                                var lucky = fan.randomGet();
                                                lucky.storage.relife++;
                                                game.log(lucky, '延长了<span class=\"zuantext\" style=\"color: #A9A9A9\">一回合的复活时间</span>');
                                            }
                                        }
                                    } else if (ide == 'zhong') {
                                        var zhu = game.filterPlayer(function (current) {
                                            return current.identity == 'zhu';
                                        })[0];
                                        if (!zhu.hasSkill('jingcheng')) zhu.loseHp();
                                    }
                                },
                            };
                            lib.skill._tamodeskill = {
                                trigger: {
                                    player: ['enterGame'],
                                    global: 'gameDrawAfter',
                                },
                                forced: true,
                                filter(event, player) {
                                    if (player.identity != 'zhu') return false;
                                    return true;
                                },
                                content() {
                                    player.storage.zhumaxhp = player.maxHp;
                                    player.storage.tamaxhp = 0;
                                    player.storage.tahp = 0;
                                    player.storage.zhongnum = 0;
                                    var nei = 0;
                                    var balance = lib.config.extension_祖安设置_balance;
                                    if (game.players.length == 8 || game.players.length == 6) var nei = 1;
                                    if (balance) {
                                        player.setIdentity('主');
                                        player.node.identity.dataset.color = 'zhu';
                                        player.identityShown = true;
                                    }
                                    for (var i of game.players) {
                                        if (balance) i.storage.relife_plus = 0;
                                        var idelist = ['zhong', 'mingzhong'];
                                        if (idelist.includes(i.identity) && balance) {
                                            if (i == game.me) i.setIdentity('忠');
                                            if (i == game.me) i.node.identity.dataset.color = 'zhong';
                                            player.storage.zhongnum++;
                                        }
                                        if (i.identity == 'fan') {
                                            if (i == game.me && balance) i.setIdentity('反');
                                            if (i == game.me && balance) i.node.identity.dataset.color = 'fan';
                                            player.storage.tamaxhp += 8;
                                        }
                                        if (i.identity == 'nei' && balance) {
                                            if (nei == 0) {
                                                i.identity = 'fan';
                                                if (i == game.me) i.setIdentity('反');
                                                if (i == game.me) i.node.identity.dataset.color = 'fan';
                                                var nei = 1;
                                                player.storage.tamaxhp += 8;
                                            } else {
                                                i.identity = 'zhong';
                                                if (i == game.me) i.setIdentity('忠');
                                                if (i == game.me) i.node.identity.dataset.color = 'zhong';
                                                var nei = 0;
                                            }
                                        }
                                    }
                                    player.storage.tahp = player.storage.tamaxhp;
                                },
                            };
                            lib.skill._zhudieskill = {
                                trigger: {
                                    player: ['dieBefore'],
                                },
                                _priority: -99,
                                forced: true,
                                filter(event, player) {
                                    if (player.hasSkill('jingcheng')) return false;
                                    if (player.identity != 'zhu') return false;
                                    return true;
                                },
                                content() {
                                    'step 0';
                                    if (trigger.source && trigger.source.isIn() && trigger.source != player) {
                                        game.zuanExp(trigger.source, 25);
                                        if (trigger.source.identity == 'fan') trigger.source.draw(3);
                                    }
                                    if (player.storage.relife_plus < 10) player.storage.relife_plus++;
                                    var num = player.storage.relife_plus;
                                    if (num % 2 == 0) game.log(player, '延长了<span class=\"zuantext\" style=\"color: #A9A9A9\">一回合的复活时间</span>');
                                    player.storage.relife += Math.floor(num / 2);
                                    var skills = player.getSkills(true, false);
                                    for (var i = 0; i < skills.length; i++) {
                                        var info = get.info(skills[i]);
                                        if (skills[i].indexOf('yuanqi_')) continue;
                                        if (skills[i] == 'thundershow' || skills[i] == 'jingcheng' || skills[i] == 'bazhu' || skills[i] == 'guanfu' || info.charlotte) {
                                            skills.splice(i--, 1);
                                        }
                                    }
                                    player.disableSkill('lockskill', skills);
                                    ('step 1');
                                    trigger.cancel();
                                    player.storage.zhumaxhp = player.maxHp;
                                    player.maxHp = player.storage.tamaxhp;
                                    player.hp = player.storage.tahp;
                                    player.addSkill('jingcheng');
                                    player.update();
                                    ('step 2');
                                    player.link(false);
                                    player.turnOver(false);
                                    player.discard(player.getCards('hej'));
                                    ('step 3');
                                    if (game.getLocalItem('ZUANbingletexiaoSET', 'mode')) {
                                        if (player.storage.dyingimgshow) {
                                            player.storage.dyingimgshow = false;
                                            game.broadcastAll(function (player) {
                                                player.storage.dying_img.style.opacity = 0;
                                                player.storage.dying_img.delete();
                                            }, player);
                                        }
                                        event.newui = parseFloat(lib.config.extension_祖安设置_newui);
                                        var translists = ['none', 'tutou', 'shousha', 'zhounian'];
                                        player.storage.jingchengimgshow = true;
                                        game.broadcastAll(function (player) {
                                            player.storage.jingcheng_img = document.createElement('div');
                                            if (event.newui != '0') {
                                                player.storage.jingcheng_img.setBackgroundImage('extension/祖安武将/cover/' + translists[event.newui] + '_jingcheng.png');
                                            }
                                            player.storage.jingcheng_img.style.opacity = lib.config.zuancoveropacity;
                                            player.storage.jingcheng_img.style.backgroundSize = 'cover';
                                            player.storage.jingcheng_img.style.width = '100%';
                                            player.storage.jingcheng_img.style.height = '100%';
                                            player.storage.jingcheng_img.style.opacity = 0;
                                            player.node.avatar.appendChild(player.storage.jingcheng_img);
                                            ui.refresh(player.storage.jingcheng_img);
                                            player.storage.jingcheng_img.style.transition = 'all 0.7s';
                                            player.storage.jingcheng_img.style.opacity = 1;
                                        }, player);
                                    }
                                    var tex = lib.config.extension_祖安设置_texiao;
                                    if (tex) {
                                        game.newalive('extension/祖安武将/mode/mode_jingcheng.gif', 2, lib.config.zuancoveropacity);
                                    }
                                    player.identity = 'zhu';
                                    player.setIdentity('京');
                                    player.node.identity.dataset.color = 'zhu';
                                    player.identityShown = true;
                                    player.storage.zuan_identity = ['京', 'zhu'];
                                },
                            };
                        },
                    };
                if (window.zuan_brawlModes.includes('zhengba'))
                    lib.brawl.zuan_zhengba = {
                        name: window.brawlRename('zhengba'),
                        mode: 'identity',
                        intro: ['来自扩展『<span class="playext" style="color: #87CEFA">祖安武将</span>』<br><span style="color: #EE7621;font-size:18px"><p align=\'center\'>游戏玩法</p></span>', '所有角色死亡后默认3回合后复活;<li>游戏开始时主公称为 霸主 ,其他角色均改为反贼,称为 群雄 ;<li>霸主 的回合内,所有的其他角色非濒死时不能使用【桃】;<li><span class="balancetext" style="color: #C0C0C0">场上所有角色之间的距离均视为一</span>;<li>霸主 回合开始时摸两张牌,手牌上限+2<span class="balancetext" style="color: #C0C0C0">(取消此效果)</span>;<li><span class="balancetext" style="color: #C0C0C0">其他角色的摸牌阶段摸牌时,霸主 摸等量张牌,其他角色弃牌阶段弃牌时,霸主 随机弃等量张手牌</span>;<li><span class="balancetext" style="color: #C0C0C0">霸主 每击杀一名其他角色,胜利推进一个轮数</span>;<li>霸主 不会被无来源的伤害击杀,霸主被击杀后,将身份转移到击杀者身上,且使场上不为 霸主 的角色各流失一点体力,并加速复活效果一个回合;<li>每个 霸主 出现后开始计算,五轮后直接获得胜利.<li>〈<span class="balancetext" style="color: #C0C0C0">灰色字体</span>〉为平衡模式内容,可在下方按钮处设置.'],
                        showcase(init) {
                            window.BrawlChooseNum(this, 3, 'identity', [5, 6, 7, 8]);
                            window.BrawlSwitch(this, true, 'extension_祖安设置_balance', '平衡模式');
                        },
                        content: {
                            gameStart() {
                            },
                        },
                        init() {
                            window.brawlRename('zhengba', true);
                            window.zuan_keepIdentityAdd();
                            window.zuan_reviveAdd();
                            lib.config.extension_祖安设置_relife = '0';
                            lib.config.mode_config.identity.double_character = false;
                            lib.config.extension_祖安设置_mode = '3';
                            lib.skill._qunxiongzhengbaskill = {
                                trigger: {
                                    player: ['enterGame'],
                                    global: 'gameDrawAfter',
                                },
                                forced: true,
                                filter(event, player) {
                                    player.storage.relife = 4;
                                    if (player.identity != 'zhu') return false;
                                    return true;
                                },
                                _priority: 100,
                                content() {
                                    'step 0';
                                    player.addSkill('qunxiongkill');
                                },
                            };
                        },
                    };
                if (window.zuan_brawlModes.includes('taofa'))
                    lib.brawl.zuan_taofa = {
                        name: window.brawlRename('taofa'),
                        mode: 'identity',
                        intro: ['来自扩展『<span class="playext" style="color: #87CEFA">祖安武将</span>』<br><span style="color: #EE7621;font-size:18px"><p align=\'center\'>游戏玩法</p></span>', '游戏开始时主公体力上限减一,游戏默认开启等级模式,且角色拥有复活效果;<li>游戏开始时主公称为 官府 ,忠臣和内奸称为 官兵 ,主公和忠臣属于官府阵营,反贼称为 叛军 ,属于叛军阵营;<li>所有角色受到火焰伤害时需弃置一张牌,每名角色回合开始时进行一次判定:若结果为♥️️,则受到来自 官府 的一点火焰伤害<span class="balancetext" style="color: #C0C0C0">(此技能改为所有角色受到火焰伤害时随机弃置一张牌,每轮开始时,若场上所有角色的判定区内没有【火山】,则将一张【火山】随机置入一名角色的判定区内)</span>;<li>叛军,忠臣身份的 官兵 死亡后,增加敌对阵营一点势力,官府死亡后增加敌对阵营两点势力;<li>先到达10点势力的阵营胜利(或反贼和内奸全部死亡后官府阵营胜利);<li>叛军 被击杀后没有原模式中相应的摸牌奖励;<li><span class="balancetext" style="color: #C0C0C0">当最后一个 叛军 即将阵亡时,强行随机复活一个已阵亡的叛军</span>;<li>击杀内奸身份的 官兵 后,内奸随机与一名场上存活的忠臣官兵对调身份,击杀者<span class="balancetext" style="color: #C0C0C0">增加一点护甲,</span>获得Buff效果:持续三回合,摸牌阶段额外摸一张牌,限一次,对一名角色造成一点火焰伤害;<li>所有角色非濒死时回复的体力改为摸等量的牌.<span class="balancetext" style="color: #C0C0C0">(此技能改为所有角色非脱离濒死回复的每一点体力前需进行判定:若结果为♥️️或武将牌上<桃>标记存在的花色,则可回复体力并弃置所有的<桃>;否则回复体力失效,将判定牌置于武将牌上,称为<桃>)<span class="balancetext" style="color: #C0C0C0">(若死亡的角色不为楚军,你无法获得人心标记).<li>〈<span class="balancetext" style="color: #C0C0C0">灰色字体</span>〉为平衡模式内容,可在下方按钮处设置.'],
                        showcase(init) {
                            window.BrawlChooseNum(this, 4, 'identity', [5, 6, 7, 8]);
                            window.BrawlSwitch(this, true, 'extension_祖安设置_balance', '平衡模式');
                            window.BrawlInfos(this, '等级介绍', '—————————————<br>- 等 级 加 成 介 绍 -<br>—————————————<br><li>初始等级为1级;<br><li>每回合开始获得3点经验;<br><li>每回合限三次,使用一张手牌获得2点经验;<br><li>每造成一点伤害获得7点经验;<br><li>每回复一点体力后获得已失体力值加一*2点经验;<br><li>每击杀一名角色获得25点经验;<br><li>每个等级升级所需经验:等级*2+20点;<br><li>每提升一级摸一张牌<span class="balancetext" style="color: #C0C0C0">(取消摸牌效果)</span>.<br><br><span class="playext" style="color: #4169E1">[等级奖励]</span><br><br><li><span class="playext" style="color: #87CEFA">新规则 ></span><br><br>  三级:手牌上限+1;<br>  四级:【杀】的使用范围+1;<br>  五级:【杀】的使用次数+1;<br>  六级:防御距离+1;<br>  七级:进攻距离+1;<br>  八级:体力上限+1;<br>  九级:摸牌阶段摸牌数+1;<br>  十级:出牌阶段限两次,可将两张手牌当一张基本牌使用.<br><br><li><span class="playext" style="color: #87CEFA">旧规则 ></span><br><br>  三级:手牌上限+1;<br>  四级:获得一点护甲;<br>  五级:【杀】的使用次数+1;<br>  六级:手牌上限+1;<br>  七级:攻击距离+1;<br>  八级:获得一点体力上限;<br>  九级:摸牌阶段额外摸一张牌;<br>  十级:出牌阶段限两次,可将两张手牌当一张基本牌使用.<br><br><span class="playext" style="color: #4169E1">[复活效果]</span><br><br><li>武将死亡后将于 等级*0.4+0.1(向上取整) 个回合后复活;<br><li>复活后手牌摸至X张.(X为角色等级*0.5向上取整)', { x: '150px', y: '40px' });
                            window.BrawlSwitch(this, true, 'extension_祖安设置_texiao', '动画特效', { x: '360px', y: '40px' });
                        },
                        content: {
                            gameStart() {
                                if (game.zhu) game.zhu.loseMaxHp();
                            },
                        },
                        init() {
                            window.brawlRename('taofa', true);
                            window.zuan_keepIdentityAdd();
                            lib.config.extension_祖安设置_upspeed = '10';
                            lib.config.extension_祖安设置_relife = '100';
                            window.zuan_levelSkillAdd();
                            window.zuan_reviveAdd();
                            lib.config.mode_config.identity.double_character = false;
                            lib.config.extension_祖安设置_mode = '4';
                            lib.skill._guanmodeskill = {
                                trigger: {
                                    player: ['enterGame'],
                                    global: 'gameDrawAfter',
                                },
                                forced: true,
                                filter(event, player) {
                                    if (player.identity != 'zhu') return false;
                                    return true;
                                },
                                content() {
                                    player.addSkill('guanfu');
                                    player.storage.zhumaxhp = player.maxHp;
                                    player.storage.tamaxhp = Infinity;
                                    player.storage.tahp = 0;
                                    player.identity = 'zhu';
                                    player.setIdentity('府');
                                    player.node.identity.dataset.color = 'nei';
                                    player.identityShown = true;
                                    player.storage.zuan_identity = ['府', 'nei'];
                                    for (var i of game.players) {
                                        if (i.identity == 'fan') {
                                            i.setIdentity('叛');
                                            i.node.identity.dataset.color = 'fan';
                                            i.identityShown = true;
                                            i.storage.zuan_identity = ['叛', 'fan'];
                                        } else {
                                            if (i.identity == 'zhu') {
                                                i.setIdentity('府');
                                                i.node.identity.dataset.color = 'nei';
                                                i.identityShown = true;
                                                i.storage.zuan_identity = ['府', 'nei'];
                                            } else {
                                                if (i.identity == 'nei') i.addSkill('guifu_nei');
                                                if (i != player) {
                                                    i.setIdentity('官');
                                                    i.node.identity.dataset.color = 'zhong';
                                                    i.identityShown = true;
                                                    i.storage.zuan_identity = ['官', 'zhong'];
                                                }
                                            }
                                        }
                                    }
                                    player.storage.tahp = player.storage.tamaxhp;
                                },
                            };
                            lib.skill._guandieskill = {
                                trigger: {
                                    player: ['dieBefore'],
                                },
                                _priority: -99,
                                forced: true,
                                filter(event, player) {
                                    if (player.hasSkill('jingcheng')) return false;
                                    if (player.identity != 'zhu') return false;
                                    return true;
                                },
                                content() {
                                    'step 0';
                                    if (trigger.source) game.zuanExp(trigger.source, 25);
                                    var skills = player.getSkills(true, false);
                                    for (var i = 0; i < skills.length; i++) {
                                        var info = get.info(skills[i]);
                                        if (skills[i] == 'thundershow' || skills[i] == 'jingcheng' || skills[i] == 'bazhu' || skills[i] == 'guanfu' || info.charlotte) {
                                            skills.splice(i--, 1);
                                        }
                                    }
                                    player.disableSkill('lockskill', skills);
                                    ('step 1');
                                    player.addMark('zuan_panjun', 2, false);
                                    if (lib.config.extension_祖安设置_newover) {
                                        if (player.storage.zuan_guanbing >= 10) {
                                            if (game.me.identity == 'nei') {
                                                if (game.me.isAlive()) {
                                                    game.over(true);
                                                } else {
                                                    game.over(false);
                                                }
                                            } else if (player.isFriendsOf(game.me)) {
                                                game.over(false);
                                            } else {
                                                game.over(true);
                                            }
                                        } else if (player.storage.zuan_panjun >= 10) {
                                            if (game.me.identity == 'nei') {
                                                if (game.me.isAlive()) {
                                                    game.over(true);
                                                } else {
                                                    game.over(false);
                                                }
                                            } else if (player.isFriendsOf(game.me)) {
                                                game.over(true);
                                            } else {
                                                game.over(false);
                                            }
                                        }
                                    } else {
                                        if (player.storage.zuan_guanbing >= 10) {
                                            for (var i of game.players) {
                                                if (i.isEnemiesOf(player)) {
                                                    i.die();
                                                }
                                            }
                                        } else if (player.storage.zuan_panjun >= 10) {
                                            player.die();
                                        }
                                    }
                                    trigger.cancel();
                                    player.storage.zhumaxhp = player.maxHp;
                                    player.maxHp = player.storage.tamaxhp;
                                    player.hp = player.storage.tahp;
                                    player.addSkill('jingcheng');
                                    player.update();
                                    ('step 2');
                                    player.link(false);
                                    player.turnOver(false);
                                    player.discard(player.getCards('hej'));
                                    ('step 3');
                                    if (game.getLocalItem('ZUANbingletexiaoSET', 'mode')) {
                                        if (player.storage.dyingimgshow) {
                                            player.storage.dyingimgshow = false;
                                            game.broadcastAll(function (player) {
                                                player.storage.dying_img.style.opacity = 0;
                                                player.storage.dying_img.delete();
                                            }, player);
                                        }
                                        event.newui = parseFloat(lib.config.extension_祖安设置_newui);
                                        var translists = ['none', 'tutou', 'shousha', 'zhounian'];
                                        player.storage.jingchengimgshow = true;
                                        game.broadcastAll(function (player) {
                                            player.storage.jingcheng_img = document.createElement('div');
                                            if (event.newui != '0') {
                                                player.storage.jingcheng_img.setBackgroundImage('extension/祖安武将/cover/' + translists[event.newui] + '_guanfu.png');
                                            }
                                            player.storage.jingcheng_img.style.opacity = lib.config.zuancoveropacity;
                                            player.storage.jingcheng_img.style.backgroundSize = 'cover';
                                            player.storage.jingcheng_img.style.width = '100%';
                                            player.storage.jingcheng_img.style.height = '100%';
                                            player.storage.jingcheng_img.style.opacity = 0;
                                            player.node.avatar.appendChild(player.storage.jingcheng_img);
                                            ui.refresh(player.storage.jingcheng_img);
                                            player.storage.jingcheng_img.style.transition = 'all 0.7s';
                                            player.storage.jingcheng_img.style.opacity = 1;
                                        }, player);
                                    }
                                    var tex = lib.config.extension_祖安设置_texiao;
                                    if (tex) {
                                        game.newalive('extension/祖安武将/mode/mode_guanfu.gif', 3.5, lib.config.zuancoveropacity);
                                    }
                                    player.addSkill('notarget');
                                    player.identity = 'zhu';
                                    player.setIdentity('亡');
                                    player.node.identity.dataset.color = 'zhu';
                                    player.identityShown = true;
                                    player.storage.zuan_identity = ['亡', 'zhu'];
                                },
                            };
                        },
                    };
                if (window.zuan_brawlModes.includes('guixin'))
                    lib.brawl.zuan_guixin = {
                        name: window.brawlRename('guixin'),
                        mode: 'identity',
                        intro: ['来自扩展『<span class="playext" style="color: #87CEFA">祖安武将</span>』<br><span style="color: #EE7621;font-size:18px"><p align=\'center\'>游戏玩法</p></span>', '游戏开始时,主公称为 汉高祖 ,其他所有角色改为反贼且称为 楚军 ;<li>主公废除判定区,拥有技能〖完杀〗,额外获得一点体力上限,摸牌阶段额外摸两张牌,手牌上限始终为体力上限+2<span class="balancetext" style="color: #C0C0C0">(额外摸牌和手牌上限改为+X,X为楚军的数量)</span>;<li>主公初始拥有一枚人心标记,主公造成伤害时,受伤者若为 楚军 ,则有一定概率(该概率为 楚军数量/全场角色数)使 楚军 变为忠臣并移除一枚人心标记,称之为 汉军 ;<li>最后一名 楚军 不会被改变阵营;<li>每有一名其他角色死亡,主公回复一点体力并获得一枚人心标记<span class="balancetext" style="color: #C0C0C0">(若死亡的角色不为楚军,你无法获得人心标记).<li>〈<span class="balancetext" style="color: #C0C0C0">灰色字体</span>〉为平衡模式内容,可在下方按钮处设置.'],
                        showcase(init) {
                            window.BrawlChooseNum(this, 3, 'identity', [4, 5, 6, 7, 8]);
                            window.BrawlSwitch(this, true, 'extension_祖安设置_balance', '平衡模式');
                        },
                        content: {
                            gameStart() {
                            },
                        },
                        init() {
                            window.brawlRename('guixin', true);
                            window.zuan_keepIdentityAdd();
                            lib.config.mode_config.identity.double_character = false;
                            lib.config.extension_祖安设置_mode = '5';
                            lib.skill._guixinmodeskill = {
                                trigger: {
                                    player: ['enterGame'],
                                    global: 'gameDrawAfter',
                                },
                                forced: true,
                                filter(event, player) {
                                    if (player.identity != 'zhu') return false;
                                    return true;
                                },
                                content() {
                                    if (!lib.config.extension_祖安设置_balance) {
                                        player.addTempSkill('wushuang');
                                        player.changeHujia(2);
                                    }
                                    player.maxHp++;
                                    player.hp++;
                                    player.update();
                                    player.identity = 'zhu';
                                    player.setIdentity('祖');
                                    player.node.identity.dataset.color = 'zhu';
                                    player.identityShown = true;
                                    player.storage.zuan_identity = ['祖', 'zhu'];
                                    player.addSkill('renxin_dam');
                                    player.disableJudge();
                                    player.addSkill('wansha');
                                    for (var i of game.players) {
                                        if (i != player) {
                                            i.identity = 'fan';
                                            i.setIdentity('楚');
                                            i.node.identity.dataset.color = 'nei';
                                            i.identityShown = true;
                                            i.storage.zuan_identity = ['楚', 'nei'];
                                        }
                                    }
                                },
                            };
                        },
                    };
                if (window.zuan_brawlModes.includes('huanhai'))
                    lib.brawl.zuan_huanhai = {
                        name: window.brawlRename('huanhai'),
                        mode: 'identity',
                        intro: ['来自扩展『<span class="playext" style="color: #87CEFA">祖安武将</span>』<br><span style="color: #EE7621;font-size:18px"><p align=\'center\'>游戏玩法</p></span>', '游戏默认开启等级模式,但不开启等级奖励;<li>游戏开始时所有角色失去所有技能并将体力以及上限调整为4点;<li>主公的回合开始时摸一张牌并投掷一枚骰子,场上所有角色区域内与该数字相等的牌全部进入弃牌堆,若数字为6则所有角色所有技能失效直到下一轮开始;</span><li>主公的回合开始时所有角色随机调整一次位置;<li>角色每提升到奇数等级时随机获得相同势力中一名角色的一个技能,不会重复.'],
                        showcase(init) {
                            window.BrawlChooseNum(this, 4, 'identity', [5, 6, 7, 8]);
                            window.BrawlSwitch(this, true, 'extension_祖安设置_texiao', '动画特效');
                        },
                        content: {
                            gameStart() {
                            },
                        },
                        init() {
                            window.brawlRename('huanhai', true);
                            window.zuan_keepIdentityAdd();
                            window.zuan_levelSkillAdd();
                            lib.config.extension_祖安设置_levelstrong = 'off';
                            lib.config.mode_config.identity.double_character = false;
                            lib.config.extension_祖安设置_mode = '7';
                            lib.skill._huanhaiskill = {
                                trigger: {
                                    player: ['enterGame'],
                                    global: 'gameDrawAfter',
                                },
                                silent: true,
                                forced: true,
                                filter(event, player) {
                                    if (player.name2) return false;
                                    return player.group != 'western';
                                },
                                content() {
                                    'step 0';
                                    player.showCharacter(2);
                                    var skills = player.getSkills(true, false);
                                    for (var i = 0; i < skills.length; i++) {
                                        var info = get.info(skills[i]);
                                        if (skills[i] != 'zuan_hudun' && skills[i] != 'hpunshow' && skills[i] != 'hongshuiunshow' && skills[i] != 'huoshanunshow' && skills[i] != 'thunderunshow' && skills[i] != 'jingcheng' && skills[i] != 'bazhu' && skills[i] != 'guanfu' && !info.charlotte) {
                                            player.removeSkill(skills[i]);
                                        }
                                    }
                                    if (1 == 1) {
                                        player.maxHp = 4;
                                        player.hp = 4;
                                        player.update();
                                    } else {
                                        var hpnum = 4;
                                        if (player.identity == 'zhu' && (get.mode() == 'identity' || get.mode() == 'doudizhu')) var hpnum = 4;
                                        if (player.maxHp < hpnum) player.gainMaxHp(hpnum - player.maxHp);
                                        if (player.maxHp > hpnum) player.loseMaxHp(player.maxHp - hpnum);
                                        player.recover(player.maxHp);
                                    }
                                    player.addSkill('huanhai');
                                    ('step 1');
                                    var list = [];
                                    var list2 = [];
                                    var players = game.players.concat(game.dead);
                                    for (var i of players) {
                                        list2.add(i.name);
                                        list2.add(i.name1);
                                        list2.add(i.name2);
                                    }
                                    for (var i in lib.character) {
                                        if (lib.character[i][1] != player.group) continue;
                                        if (lib.character[i][3].length < 1) continue;
                                        if (lib.character[i][4].includes('boss')) continue;
                                        if (lib.character[i][4].includes('minskin')) continue;
                                        if (lib.character[i][4] && lib.character[i][4].includes('hiddenboss')) continue;
                                        if (get.config('double_character') && lib.config.forbiddouble.includes(i)) continue;
                                        if (player.storage.huanhai.includes(i)) continue;
                                        if (list2.includes(i)) continue;
                                        list.push(i);
                                    }
                                    var name = list.randomGet();
                                    player.storage.huanhai.push(name);
                                    player.markSkill('huanhai');
                                    var skills = lib.character[name][3];
                                    player.addSkill(skills.randomGet());
                                    event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player.name) + '获得了技能', [[name], 'character']);
                                    ('step 2');
                                    event.dialog.close();
                                },
                            };
                            lib.skill._seadreammodeskill = {
                                trigger: {
                                    player: ['phaseBegin'],
                                },
                                _priority: 985,
                                silent: true,
                                forced: true,
                                filter(event, player) {
                                    if (player.name2) return false;
                                    if (player.identity != 'zhu') return false;
                                    return true;
                                },
                                content() {
                                    'step 0';
                                    var tex = lib.config.extension_祖安设置_texiao;
                                    if (tex) {
                                        game.newalive('extension/祖安武将/mode/mode_canghai.gif', 2, lib.config.zuancoveropacity);
                                    }
                                    for (var i of game.players) {
                                        var tar = i;
                                        var swap = game.players.randomGet();
                                        game.swapSeat(tar, swap, false);
                                    }
                                    ('step 1');
                                    if (lib.config.extension_祖安设置_balance) {
                                        player.draw();
                                        player.throwDice();
                                    } else {
                                        player.judge();
                                    }
                                    ('step 2');
                                    if (lib.config.extension_祖安设置_balance) {
                                        if (event.num) {
                                            for (var i of game.players) {
                                                var him = i;
                                                var cards = i.getCards('hej');
                                                var dis = [];
                                                for (var j = 0; j < cards.length; j++) {
                                                    if (cards[j].number == event.num) dis.push(cards[j]);
                                                }
                                                him.discard(dis);
                                            }
                                            if (event.num != 6) {
                                                if (event && event.finish) {
                                                    event.finish();
                                                } else {
                                                    return;
                                                }
                                            }
                                        }
                                    } else {
                                        if (result.suit && result.suit != 'diamond') {
                                            if (event && event.finish) {
                                                event.finish();
                                            } else {
                                                return;
                                            }
                                        }
                                    }
                                    ('step 3');
                                    for (o = 0; o < game.players.length; o++) {
                                        game.players[o].addSkill('huanhaicls');
                                    }
                                },
                            };
                        },
                    };
                if (window.zuan_brawlModes.includes('ansha'))
                    lib.brawl.zuan_ansha = {
                        name: window.brawlRename('ansha'),
                        mode: 'identity',
                        intro: ['来自扩展『<span class="playext" style="color: #87CEFA">祖安武将</span>』<br><span style="color: #EE7621;font-size:18px"><p align=\'center\'>游戏玩法</p></span>', '游戏开始时,所有的反贼变为忠臣,内奸变为刺客,所有身份均不展示;<li>游戏开始的第二个回合夜幕降临:只要刺客存在,主公的每个回合结束都会有一名忠臣死亡;<li>当所有忠臣死亡时,刺客身份暴露,此时夜幕消逝;<li>夜幕消逝后的第三个回合,夜幕将再次降临:若主公仍未能击杀刺客,则主公于回合结束时死亡,刺客胜利;<li>刺客的举动会和其他忠臣有微小差别,细心观察可以识破;<li>本模式默认关闭自动标记身份.'],
                        showcase(init) {
                            window.BrawlChooseNum(this, 3, 'identity', [6, 7, 8]);
                            window.BrawlSwitch(this, true, 'extension_祖安设置_texiao', '动画特效');
                        },
                        content: {
                            gameStart() {
                            },
                        },
                        init() {
                            window.brawlRename('ansha', true);
                            window.zuan_keepIdentityAdd();
                            lib.config.mode_config.identity.auto_mark_identity = false;
                            lib.config.extension_祖安设置_mode = '8';
                            lib.skill._dietime = {
                                markimage: 'extension/祖安武将/basic/mode_anye.png',
                                trigger: {
                                    player: ['enterGame'],
                                    global: 'gameDrawAfter',
                                },
                                forced: true,
                                filter(event, player) {
                                    if (player.identity != 'zhu') return false;
                                    return true;
                                },
                                content() {
                                    player.storage.zhudie = 0;
                                    player.addMark('_dietime', 2, false);
                                    for (var i of game.players) {
                                        if (i.identity == 'nei') {
                                            if (lib.config.extension_祖安设置_balance) {
                                                i.identity = 'zhong';
                                            } else {
                                                i.identity = 'nei';
                                            }
                                            i.addSkill('ansha_nei');
                                        }
                                        if (!i.hasSkill('ansha_nei') && i.identity != 'zhu') {
                                            if (lib.config.extension_祖安设置_balance) {
                                                i.identity = 'zhong';
                                            } else {
                                                i.identity = 'nei';
                                            }
                                            i.addSkill('ansha_zhong');
                                        }
                                    }
                                },
                                intro: {
                                    name: '夜幕倒计时',
                                    content(storage, player, skill) {
                                        var str = '<li>距离夜幕降临还剩 ' + player.storage._dietime + ' 回合';
                                        return str;
                                    },
                                },
                            };
                            lib.skill._anshaskill = {
                                trigger: {
                                    player: ['phaseEnd'],
                                },
                                forced: true,
                                filter(event, player) {
                                    if (player.identity != 'zhu') return false;
                                    return true;
                                },
                                content() {
                                    if (player.countMark('_dietime') > 1) {
                                        player.removeMark('_dietime');
                                    } else {
                                        var tex = lib.config.extension_祖安设置_texiao;
                                        if (tex) {
                                            game.newalive('extension/祖安武将/mode/mode_yemu.gif', 2, lib.config.zuancoveropacity);
                                        }
                                        player.storage._dietime = 0;
                                        player.unmarkSkill('_dietime');
                                        var list = [];
                                        event.num = 0;
                                        for (var i of game.players) {
                                            if (i.hasSkill('ansha_zhong')) {
                                                list.push(i);
                                                event.num++;
                                            }
                                        }
                                        if (event.num >= 1) {
                                            var zhong = list.randomGet();
                                            if (lib.config.extension_祖安设置_balance) {
                                                for (var i of game.players) {
                                                    if (i.hasSkill('ansha_zhong') && i != player) i.identity = 'nei';
                                                }
                                            }
                                            zhong.identity = 'zhong';
                                            zhong.die();
                                        }
                                        if (event.num <= 1) {
                                            if (player.storage.zhudie == 0) {
                                                for (var i of game.players) {
                                                    if (i.hasSkill('ansha_nei')) {
                                                        var fan = i;
                                                        fan.identity = 'fan';
                                                        fan.node.identity.dataset.color = 'nei';
                                                        fan.setIdentity('刺');
                                                        fan.identityShown = true;
                                                        fan.storage.zuan_identity = ['刺', 'nei'];
                                                    }
                                                }
                                                player.addMark('_dietime', 3);
                                                player.storage.zhudie = 1;
                                            } else {
                                                var tex = lib.config.extension_祖安设置_texiao;
                                                if (tex) {
                                                    game.newalive('extension/祖安武将/mode/mode_yemu.gif', 2, lib.config.zuancoveropacity);
                                                }
                                                if (lib.config.extension_祖安设置_newover) {
                                                    if (player.isFriendsOf(game.me)) {
                                                        game.over(false);
                                                    } else {
                                                        game.over(true);
                                                    }
                                                } else {
                                                    player.die();
                                                }
                                            }
                                        }
                                    }
                                },
                            };
                        },
                    };
            }
        },
        precontent() {
            game.kongfunc = function () {
                return game.kong;
            };
            game.kong = {
                set() {
                    return this;
                },
                get player() {
                    return game.me;
                }, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
                cards: [],
                result: {
                    cards: [],
                },
                gaintag: [],
                forResult() { },
            };
            if (lib.config.extension_祖安设置_enable && get.mode() == 'brawl') {
                lib.config.extension_祖安设置_balance = true;
                lib.config.extension_祖安设置_mode = '1';
                lib.config.extension_祖安设置_fun = '1';
                lib.config.extension_祖安设置_upspeed = '0';
                lib.config.extension_祖安设置_newover = false;
                lib.config.extension_祖安设置_levelsay = false;
                var items = localStorage.getItem('ZUANbingletexiaoSET');
                if (!items) items = '';
                if (items.indexOf('_mode') == -1) {
                    items = items + '_mode';
                    localStorage.setItem('ZUANbingletexiaoSET', items);
                }
                lib.config.mode_config.identity.choose_group = false;
                lib.config.mode_config.identity.identity_mode = 'normal';
                lib.config.mode_config.identity.player_number = '8';
                lib.config.mode_config.guozhan.player_number = '8';
            }
            lib.skill.baozou = {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return Infinity;
                    },
                },
                ai: {
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        if (!get.zhu(player, 'shouyue')) return false;
                        if (arg && arg.name == 'sha') return true;
                        return false;
                    },
                },
            };
            lib.skill.shishi = {
                trigger: { source: 'dieAfter' },
                forced: true,
                content() {
                    player.gainMaxHp(1);
                    player.recover();
                },
            };
            lib.skill.xunmeng = {
                trigger: { source: 'damageBegin' },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                },
                forced: true,
                content() {
                    trigger.num++;
                    if (player.hp > 1) player.loseHp();
                },
            };
            lib.skill.zaibian = {
                trigger: { player: 'phaseUseBegin' },
                filter(event, player) {
                    return get.population('zhong') - get.population('fan') - get.population('nei') + 2 > 0;
                },
                forced: true,
                content() {
                    var num = get.population('zhong') - get.population('fan') - get.population('nei') + 2;
                    player.draw(num);
                },
            };
            lib.skill.ganran = {
                mod: {
                    cardname(card, player) {
                        if (lib.card[card.name] && lib.card[card.name].type == 'equip') return 'tiesuo';
                    },
                },
                ai: {
                    skillTagFilter(player) {
                        if (!player.countCards('h', { type: 'equip' })) return false;
                    },
                },
                init(player, skill) {
                    player.node.avatar.style.filter = 'brightness(0.8) grayscale(1)';
                    player.update = function () {
                        if (this.hasSkill('ganran')) {
                            this.node.hp.style.filter = 'hue-rotate(270deg)';
                        } else {
                            this.node.hp.style.filter = '';
                        }
                        return lib.element.player.update.apply(this, arguments)
                    };
                    player.update();
                },
                group: 'ganran2',
            };
            lib.skill.ganran2 = {
                filter: (event, player) => player.hasCard((card) => lib.skill.ganran2.filterCard(card, player), 'h'),
                filterCard: (card, player) => get.type(card) == 'equip' && player.canRecast(card),
                check(card) {
                    return 3 - get.value(card);
                },
                content() {
                    player.recast(cards);
                },
                discard: false,
                lose: false,
                delay: false,
                prompt: '将一张装备牌置入弃牌堆并摸一张牌',
                ai: {
                    order: 3.5,
                    result: {
                        player: 1,
                    },
                },
            };
            lib.translate.baozou = '暴走';
            lib.translate.baozou_info = ' 锁定技,出牌阶段,你可以使用任意数量的【杀】';
            lib.translate.shishi = '噬尸';
            lib.translate.shishi_info = ' 锁定技,当你击杀一名角色后,你获得一点体力上限并回复一点体力. ';
            lib.translate.xunmeng = '迅猛';
            lib.translate.xunmeng_info = ' 锁定技,你的杀造成的伤害+1.你的杀造成伤害时,若你体力大于1,你流失1点体力. ';
            lib.translate.zaibian = '灾变';
            lib.translate.zaibian_info = ' 锁定技,你的出牌阶段开始时,若人类玩家数-僵尸玩家数+1大于0,则你摸取该数目的牌. ';
            lib.translate.ganran = '感染';
            lib.translate.ganran_info = '锁定技,你的装备牌均视为【铁锁连环】.';
            lib.translate.ganran2 = '融炼';
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '末日乱斗',
                    connect: true,
                    character: {
                        jiangshifz: ['male', 'ye', 5, ['xunmeng', 'zaibian', 'ganran', 'wansha', 'paoxiao'], ['des:邪灵(反贼僵尸)曾是古代的勇士,但在一场大战中受到了诅咒,它们的身体被黑暗力量侵蚀,变成了凶猛的恶灵.它们失去了原有的意识,在占据人类的身体后,会变成只知道攻击和杀戮的僵尸,成为人类的敌人.在夜幕降临时,邪灵会从暗处涌现,不断寻找新的猎物.']],
                        jiangshinj: ['female', 'ye', 3, ['baozou', 'wansha', 'xueji', 'shishi', 'ganran'], ['des:鬼影(内奸僵尸)本是古时的百姓,他们在战乱中被黑暗力量所吞噬,变成了无主幽魂.它们隐藏在人类之中,伺机而动,一旦有人类死去它们会就占据他的身体变成僵尸.它们的目标是混乱和破坏,渴望通过不断地的背叛和杀戮,让自己能够变强而统治整个世界.但鬼影也知道自己的力量有限,所以它们常常在背后操纵局势,等待时机降临.当鬼影击杀人类或其他僵尸后,它们会变得更加强大,变成凶猛的邪灵.']],
                    },
                    translate: {
                        jiangshifz: '邪灵僵尸',
                        jiangshifz_ab: '邪灵',
                        jiangshinj: '鬼影僵尸',
                        jiangshinj_ab: '鬼影',
                    },
                };
                lib.config.all.characters.add('末日乱斗');
                lib.config.characters.add('末日乱斗');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:末日乱斗/image/${i}.jpg`)
                }
                lib.translate.末日乱斗_character_config = `末日乱斗`;
                return QQQ;
            });
        },
        config: {
            zuan_brawl: {
                name: '祖安武将-乱斗',
                init: 'all',
                intro: '接入『祖安武将』扩展的娱乐模式和玩法到乱斗模式中,需打开祖安武将扩展.',
                item: {
                    off: '关闭所有',
                    standard: '简洁展示',
                    random: '随机展示',
                    all: '全部展示',
                    daily: '每日活动',
                },
            },
        },
        package: {
            intro: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>移植自『扩展ol』,里面包含僵尸模式、兼并模式、无尽模式三种玩法,在乱斗模式中和可查看.\n\n本扩展经由Helasisy魔改后,新增祖安武将扩展的接口,可实现将祖安武将的娱乐玩法移植到乱斗模式方便游玩`,
            author: 'Aurora',
            version: '1.0',
        },
    };
});

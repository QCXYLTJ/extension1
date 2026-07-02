import { lib, game, ui, get, ai, _status } from '../../../noname.js';
export let getCharacterSortImage = name => `<span style = 'display: inline-block;position: relative;width: 120px;height: 20px'><img src = 'extension/大权在握/image/character/sort/${name}.png' width = 140 height = 70 alt = '加载失败' style = 'position: absolute;left: -20%;top: -85%' ></span>`;
export let charPack = {
    daquanzaiwo: {
        name: '大权在握',
        donotImport: true
    },
    dqzw_shijiadazu: {
        name: '世家大族',
        donotImport: true
    },
    dqzw_trashbin: {
        name: '大权垃圾桶',
        donotImport: true
    },
};
export const module = {
    character: {
        ...charPack,
        _name: '武将包'
    },
    audio: {
        over_audio: {
            name: '结算语音',
            intro: '胜利平局与失败时播放的语音'
        },
        attack_audio: {
            name: '攻击语音',
            intro: '对其他角色使用伤害类牌时播放的语音(目标越多越容易触发)'
        },
        injured_audio: {
            name: '受击语音',
            intro: '受到其他角色伤害后播放的语音(伤害越高越容易触发)'
        },
        kill_audio: {
            name: '击杀语音',
            intro: '击杀角色时播放的语音'
        },
        choose_character_audio: {
            name: '选将语音',
            intro: '选择武将时播放该武将随机一个技能的语音(不含衍生技)'
        },
        _name: '语音'
    },
    connect: {
        room: {
            name: '联机房间',
            intro: '含房间密码与初始化相关代码'
        },
        _name: '联机'
    },
    element: {
        html: {
            name: 'HTML标签',
            locked: true
        },
        player: {
            name: '玩家类方法',
            locked: true
        },
        get: {
            name: 'Get类方法',
            locked: true
        },
        _name: '元素'
    },
    style: {
        group: {
            name: '势力',
        },
        prefix: {
            name: '前缀'
        },
        _name: '角色样式'
    },
    plugins: {
        signIn: {
            name: '签到',
            locked: true
        },
        getNowTime: {
            name: '当前时间',
            locked: true
        },
        backpack: {
            name: '背包',
            locked: true
        },
        _name: '插件'
    },
    mode: {
        'dqzw/dqzw_guihuaxishuang': {
            name: '大权在握',
            intro: '可获得活动武将'
        },
        _name: '模式'
    },
    css: {
        'css/main': {
            name: '主要的',
            locked: true
        },
        'mode/dqzw/main': {
            name: '主要的(大权在握模式)',
            locked: true
        },
        _name: '层叠样式表(CSS)'
    }
};
export function showModuleManagementPage(map = module, options = {}) {
    if (ui.menuContainer && !ui.menuContainer.classList.contains('hidden'))
        ui.click.config();
    const div = ui.create.div,
        bannedModule = lib.config.dqzw_module_banned_list || [];
    let mas = div('.dqzw-boss-container-mas', ui.window);
    mas.listen(e => {
        if (e.target == mas) {
            if (ui.dqzwModuleManagementPage)
                ui.dqzwModuleManagementPage.hide();
            mas.remove();
        };
    });
    if (!ui.dqzwModuleManagementPage) {
        let container = div('.dqzw-module-management-page.menubg', ui.window),
            caption = div('.dqzw-module-management-page-caption', '模块管理', container),
            column = div('.dqzw-module-management-page-column', container),
            config = div('.dqzw-module-management-page-config', container),
            chain = div('.dqzw-module-management-page-config-content-button-chain');
        let chainlen = game.layout == 'default' ? 68 : 44,
            chainContainer = div(chain);
        for (let i = 0; i < chainlen; i++)
            ui.create.div(chainContainer, '.cardbg')
                .style.transform = 'translateX(' + (i * 5 - 5) + 'px)';
        for (let name in map) {
            let button = div('.menubutton', map[name]._name, column, function () {
                let content = this.content;
                if (column.activeNode != this && content) {
                    active.call(column, this);
                    config.dqzwAnimate(
                        {
                            from: config.scrollTop,
                            to: content.offsetTop,
                            name: 'scrollTop'
                        }
                    );
                };
            }), content = div('.dqzw-module-management-page-config-content', config);
            content.dataset.contentModuleName = button.dataset.moduleName = name;
            button.content = content;
            if (options.createColumn)
                options.createColumn(name, button, content, map);
            for (let fileName in map[name]) {
                if (fileName.startsWith('_'))
                    continue;
                let info = map[name][fileName],
                    intro = info.intro,
                    box = div('.dqzw-module-management-page-config-button.menubutton', `<div class = text>${info.name || '无描述'}</div>`, content);
                if (info.locked)
                    box.appendChild(chain.cloneNode(true));
                else {
                    box.classList.add('dqzw-module-management-page-config-content-button-cross');
                    box.appendChild(chain.cloneNode(true))
                        .classList.add('dqzw-module-management-page-config-content-button-chain-one');
                    box.appendChild(chain.cloneNode(true))
                        .classList.add('dqzw-module-management-page-config-content-button-chain-two');
                };
                let introContainer = div('.menubutton', intro || '无描述', box);
                box.info = info;
                box.click = click;
                box.dataset.buttonFileName = fileName;
                box.listen(click);
                if (bannedModule.some(info => {
                    let list = info.split(';');
                    return list[0] == name && list[1] == fileName;
                })) box.classList.add('active');
                lib.setIntro(box, function (dialog) {
                    if (typeof intro == 'function')
                        return intro.apply(this, arguments);
                    dialog.add(intro || `设置${info.name}`);
                });
                if (options.createContent)
                    options.createContent(fileName, info, box, introContainer);
                function click() {
                    if (options.replaceClick)
                        return options.replaceClick.apply(this, arguments);
                    if (this.info && this.info.locked)
                        this.addTempClass('dqzw-shake', 1000);
                    else {
                        this.classList.toggle('active');
                        let bool = this.classList.contains('active');
                        if (!options.nosave) {
                            if (options.customSave)
                                options.customSave(bool, name, fileName, map);
                            else {
                                if (bool)
                                    game.saveConfig('dqzw_module_banned_list', (lib.config.dqzw_module_banned_list || []).add(name + ';' + fileName));
                                else game.saveConfig('dqzw_module_banned_list', (lib.config.dqzw_module_banned_list || []).remove(name + ';' + fileName));
                            };
                            if (options.onsave)
                                options.onsave(bool, name, fileName, map);
                        };
                    };
                    if (options.onclick)
                        options.onclick.apply(this, arguments);
                };
            };
        };
        active.call(column, column.firstChild);
        function active(node) {
            if (!node)
                return node;
            if (this.activeNode)
                this.activeNode.classList.remove('active');
            this.activeNode = node;
            node.classList.add('active');
            return node;
        };
        ui.dqzwModuleManagementPage = container;
    } else ui.dqzwModuleManagementPage.show();
    return ui.dqzwModuleManagementPage;
};
export async function precontent(config, pack) {
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
    //—————————————————————————————————————————————————————————————————————————————数据操作相关自定义函数
    const numfunc = function () {
        if (!lib.number) {
            lib.number = [];
            for (var i = 1; i < 14; i++) {
                lib.number.add(i);
            }
        } //添加lib.number
        window.sgn = function (bool) {
            if (bool) return 1;
            return -1;
        };//true转为1,false转为-1
        window.numberq0 = function (num) {
            if (isNaN(Number(num))) return 0;
            return Math.abs(Number(num));
        };//始终返回正数(取绝对值)
        window.numberq1 = function (num) {
            if (isNaN(Number(num))) return 1;
            return Math.max(Math.abs(Number(num)), 1);
        };//始终返回正数且至少为1(取绝对值)
        window.number0 = function (num) {
            if (isNaN(Number(num))) return 0;
            return Math.max(Number(num), 0);
        };//始终返回正数
        window.number1 = function (num) {
            if (isNaN(Number(num))) return 1;
            return Math.max(Number(num), 1);
        };//始终返回正数且至少为1
        window.deepClone = function (obj, visited = new WeakMap()) {
            if (obj === null || typeof obj !== 'object' || obj instanceof window.Element) {
                return obj;
            }
            if (visited.has(obj)) {
                return visited.get(obj);
            }
            if (Array.isArray(obj)) {
                return obj.map((item) => deepClone(item, visited));
            }
            const clonedObj = {};
            visited.set(obj, clonedObj);
            for (let key in obj) {
                if (obj.hasOwn(key)) {
                    clonedObj[key] = deepClone(obj[key], visited);
                }
            }
            return clonedObj;
        }; //深拷贝对象
        window.factorial = function (num) {
            num = Math.round(num);
            if (num < 0) {
                return 0;
            }
            if (num < 2) {
                return 1;
            }
            let result = 1;
            for (let i = 2; i <= num; i++) {
                result *= i;
            }
            return result;
        }; //阶乘
        window.isPrime = function (num) {
            if (num === 2 || num === 3) return true;
            if (num < 2 || num % 2 === 0 || num % 3 === 0) return false;
            for (let i = 5; i * i <= num; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) return false;
            }
            return true;
        }; // 质数
    };
    numfunc();
    //—————————————————————————————————————————————————————————————————————————————视为转化虚拟牌相关自创函数
    const shiwei = function () {
        lib.element.player.filterCardx = function (card, filter) {
            if (typeof card == 'string') {
                card = { name: card };
            }
            const player = this, info = get.info(card);
            if (!lib.filter.cardEnabled(card, player)) return false; //卡牌使用限制
            if (info.notarget) return true;
            if (!info.filterTarget) return true;
            if (!info.enable) return true;
            return game.hasPlayer(function (current) {
                if (info.multicheck && !info.multicheck(card, player)) return false;
                if (filter) {
                    if (!lib.filter.targetInRange(card, player, current)) return false; //距离限制
                    return lib.filter.targetEnabledx(card, player, current);
                }
                return lib.filter.targetEnabled(card, player, current); //目标限制
            });
        }; //适用于choosetouse的filtercard
        lib.element.player.filterCard = function (card, filter) {
            if (typeof card == 'string') {
                card = { name: card };
            }
            const player = this, info = get.info(card), event = _status.event;
            const evt = event.name.startsWith('chooseTo') ? event : event.getParent((q) => q.name.startsWith('chooseTo'));
            if (evt.filterCard2) {
                return evt._backup.filterCard(card, player, evt);
            }//viewAs的技能会修改chooseToUse事件的filterCard
            else if (evt.filterCard && evt.filterCard != lib.filter.filterCard) {
                return evt.filterCard(card, player, evt);//这里也有次数限制
            }
            else {
                if (!lib.filter.cardEnabled(card, player)) return false;//卡牌使用限制
                if (info.notarget) return true;
                if (!info.filterTarget) return true;
                if (!info.enable) return true;
                if (evt.name == 'chooseToRespond') return true;//chooseToRespond无次数距离目标限制
                if (filter) {
                    if (!lib.filter.cardUsable(card, player, evt)) return false;//次数限制
                }
                if (evt.filterTarget && evt.filterTarget != lib.filter.filterTarget) {
                    return game.hasPlayer(function (current) {
                        return evt.filterTarget(card, player, current);
                    });
                }
                return game.hasPlayer(function (current) {
                    if (info.multicheck && !info.multicheck(card, player)) return false;
                    if (filter) {
                        if (!lib.filter.targetInRange(card, player, current)) return false;//距离限制
                        return lib.filter.targetEnabledx(card, player, current);
                    }
                    return lib.filter.targetEnabled(card, player, current);//目标限制
                });
            }
        };//删除次数限制//filter决定有无次数距离限制//viewAs的技能会修改chooseToUse事件的filterCard
        lib.element.player.qcard = function (type, filter, range) {
            const list = [];
            for (const i in lib.card) {
                const info = lib.card[i];
                if (info.mode && !info.mode.includes(lib.config.mode)) {
                    continue;
                }
                if (!info.content) {
                    continue;
                }
                if (['delay', 'equip'].includes(info.type)) {
                    continue;
                }
                if (type && info.type != type) {
                    continue;
                }
                if (filter !== false) {
                    const player = this;
                    if (range !== false) {
                        range = true;
                    }
                    if (!player.filterCard(i, range)) {
                        continue;
                    }
                }
                list.push([lib.suits.randomGet(), lib.number.randomGet(), i]); //花色/点数/牌名/属性/应变
                if (i == 'sha') {
                    for (const j of Array.from(lib.nature.keys())) {
                        list.push([lib.suits.randomGet(), lib.number.randomGet(), 'sha', j]);
                    }
                }
            }
            return list;
        }; //可以转化为的牌//filter控制player.filterCard//range控制是否计算次数与距离限制
    };
    shiwei();
    lib.dqzw_characterPacks = Object.keys(charPack);
    if (game.readFileAsText)
        game.readFileAsText(`extension/大权在握/extension.js`, content => {
            lib.config.dqzw_extension_content = content;
        });
    game.showModuleManagementPage = showModuleManagementPage;
    let bannedModule = lib.config.dqzw_module_banned_list || [];
    for (let name in module)
        await new Promise(resolve => {
            (async () => {
                for (let fileName in module[name]) {
                    if (fileName.startsWith('_') || bannedModule.some(info => {
                        let list = info.split(';');
                        return list[0] == name && list[1] == fileName;
                    }) || module[fileName] && module[fileName].donotImport) continue;
                    if (name != 'css') {
                        await import(`./${name}/${fileName}.js`);
                    }//QQQ
                    else lib.init.css(`extension/大权在握/source/` + fileName + '.css', null, () => { });
                };
                resolve(true);
            })();
        });
    if (!lib.config.dqzw_backpackId)
        game.saveConfig('dqzw_backpackId', new DqzwBackpack().id);
    for (let packName in charPack) {
        if (bannedModule.some(info => {
            let list = info.split(';');
            return list[0] == 'character' && list[1] == packName;
        })) continue;
        let result = await import(`./character/${packName}.js`);
        let info = result.info;
        if (!info)
            continue;
        if (info.customSetBefore)
            info.customSetBefore(info, packName, config);
        if (info.custom)
            info.custom(info, packName, config);
        else if (lib.device || lib.node) {
            for (let name in info.character) {
                let char = info.character[name];
                if (!char[4])
                    char[4] = [];
                char[4].push(
                    `ext:大权在握/image/character/${name}.jpg`,
                    `die:ext:大权在握/audio/die/${name}.mp3`,
                    `win:ext:大权在握/audio/win/name.mp3`,
                    `lose:ext:大权在握/audio/lose/name.mp3`,
                    `tie:ext:大权在握/audio/tie/name.mp3`
                );
            };
            if (info.characterSort && info.characterSort[packName])
                for (let sort in info.characterSort[packName]) {
                    let image = getCharacterSortImage(sort);
                    if (sort == 'zanwudasong')
                        image = image.replace(140, 190);
                    info.translate[sort] = image;
                };
        };
        if (!lib.dqzw_lock_characters)
            lib.dqzw_lock_characters = [];
        let backpack = get.DqzwBackpack(lib.config.dqzw_backpackId);
        if (backpack && !backpack.get('character'))
            backpack.set('character', []);
        for (let name in info.character) {
            let char = info.character[name];
            if (char[4] && char[4].some(tag => tag.startsWith('dqzw_lock_character'))) {
                if (backpack && !backpack.get('character', []).includes(name))
                    char[4].push('unseen');
                lib.dqzw_lock_characters.add(name);
            };
        };
        if (info.customSet)
            info.customSet(info, packName, config);
        delete info.custom;
        delete info.customSet;
        game.import('character', function () {
            lib.config.all.characters.add(packName);
            lib.config.characters.add(packName);
            lib.translate[packName + '_character_config'] = charPack[packName].name;
            return info;
        });
    };
    Object.assign(lib.extensionMenu.extension_大权在握, {
        intro: {
            name: '当前版本:0.3.8',
            clear: true,
            nopointer: true
        },
        info: {
            name: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span><a style=\"color: rgb(255,164,0)\" href='http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=AJ4UDlNlNB7F2IcutIK9dzcwh40yLcMu&authKey5gUWJOToUx2BsF0EqeSjLvk08tp7M3nN84HFpVAbcCiPIPW1ibbrFZ8rDz%2FGTZD7&noverify=0&group_code=597990464'>加入群聊【大权在握交流群】<a><br><a style=\"color: rgb(255,80,140)\" href='https://docs.qq.com/form/page/DZWpiZVpURElEWVJp'><大权在握>bug反馈<a>",
            clear: true,
            nopointer: true
        }
    });
}
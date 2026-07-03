import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import('../character/character.js');
import('../character/skill.js');
export async function precontent(config, pack) {
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
        }; //true转为1,false转为-1
        window.numberq0 = function (num) {
            if (isNaN(Number(num))) return 0;
            return Math.abs(Number(num));
        }; //始终返回正数(取绝对值)
        window.numberq1 = function (num) {
            if (isNaN(Number(num))) return 1;
            return Math.max(Math.abs(Number(num)), 1);
        }; //始终返回正数且至少为1(取绝对值)
        window.number0 = function (num) {
            if (isNaN(Number(num))) return 0;
            return Math.max(Number(num), 0);
        }; //始终返回正数
        window.number1 = function (num) {
            if (isNaN(Number(num))) return 1;
            return Math.max(Number(num), 1);
        }; //始终返回正数且至少为1
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
                if (Object.hasOwn(obj, key)) {
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
            const player = this,
                info = get.info(card);
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
            const player = this,
                info = get.info(card),
                event = _status.event;
            const evt = event.name.startsWith('chooseTo') ? event : event.getParent((q) => q.name.startsWith('chooseTo'));
            if (evt.filterCard2) {
                return evt._backup.filterCard(card, player, evt);
            } //viewAs的技能会修改chooseToUse事件的filterCard
            else if (evt.filterCard && evt.filterCard != lib.filter.filterCard) {
                return evt.filterCard(card, player, evt); //这里也有次数限制
            } else {
                if (!lib.filter.cardEnabled(card, player)) return false; //卡牌使用限制
                if (info.notarget) return true;
                if (!info.filterTarget) return true;
                if (!info.enable) return true;
                if (evt.name == 'chooseToRespond') return true; //chooseToRespond无次数距离目标限制
                if (filter) {
                    if (!lib.filter.cardUsable(card, player, evt)) return false; //次数限制
                }
                if (evt.filterTarget && evt.filterTarget != lib.filter.filterTarget) {
                    return game.hasPlayer(function (current) {
                        return evt.filterTarget(card, player, current);
                    });
                }
                return game.hasPlayer(function (current) {
                    if (info.multicheck && !info.multicheck(card, player)) return false;
                    if (filter) {
                        if (!lib.filter.targetInRange(card, player, current)) return false; //距离限制
                        return lib.filter.targetEnabledx(card, player, current);
                    }
                    return lib.filter.targetEnabled(card, player, current); //目标限制
                });
            }
        }; //删除次数限制//filter决定有无次数距离限制//viewAs的技能会修改chooseToUse事件的filterCard
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
    //在这里编写预启动阶段执行的代码.
    lib.namePrefix.set('👿', {
        getSpan(prefix, name) {
            return '<img style=width:30px src=extension/魔王二代包/image/mow/CQ1.gif>';
        }, //QQQ
    });
    lib.namePrefix.set('🤗', {
        getSpan(prefix, name) {
            return '<img style=width:30px src=extension/魔王二代包/image/mow/CQ2.gif>';
        },
    });
    lib.namePrefix.set('😘', {
        getSpan(prefix, name) {
            return '<img style=width:30px src=extension/魔王二代包/image/mow/CQ3.gif>';
        },
    });
    lib.namePrefix.set('🤕', {
        getSpan(prefix, name) {
            return '<img style=width:30px src=extension/魔王二代包/image/mow/CQ4.gif>';
        },
    });
    lib.namePrefix.set('🥵', {
        getSpan(prefix, name) {
            return '<img style=width:30px src=extension/魔王二代包/image/mow/CQ5.gif>';
        },
    });
    lib.namePrefix.set('⚡', {
        getSpan(prefix, name) {
            return '<img style=width:30px src=extension/魔王二代包/image/mow/CQ6.gif>';
        },
    });
    lib.element.content.waitForPlayer = function () {
        'step 0';
        ui.auto.hide();
        ui.pause.hide();
        game.createServer();
        if (!lib.translate.zhu) {
            lib.translate.zhu = '主';
        }
        if (event.func) {
            event.func();
        }
        if (!lib.configOL.number) {
            lib.configOL.number = parseInt(lib.configOL.player_number);
        }
        if (game.onlineroom) {
            game.send('server', 'config', lib.configOL);
        }
        ui.create.connectPlayers(game.ip);
        if (!window.isNonameServer) {
            var me = game.connectPlayers[0];
            me.setIdentity('zhu');
            me.initOL(get.connectNickname(), lib.config.connect_avatar);
            me.playerid = '1';
            game.onlinezhu = '1';
        }
        _status.waitingForPlayer = true;
        if (window.isNonameServer) {
            document.querySelector('#server_status').innerHTML = '等待中';
        }
        game.pause();
        ('step 1');
        _status.waitingForPlayer = false;
        lib.configOL.gameStarted = true;
        if (window.isNonameServer) {
            document.querySelector('#server_status').innerHTML = '游戏中';
        }
        if (game.onlineroom) {
            game.send('server', 'config', lib.configOL);
        }
        for (var i = 0; i < game.connectPlayers.length; i++) {
            game.connectPlayers[i].delete();
        }
        delete game.connectPlayers;
        if (ui.roomInfo) {
            ui.roomInfo.remove();
            delete ui.roomInfo;
        }
        if (ui.exitroom) {
            ui.exitroom.remove();
            delete ui.exitroom;
        }
        game.broadcast(function (postReconnect, pack) {
            postReconnect = get.parsedResult(postReconnect);
            for (var i in postReconnect) {
                if (Array.isArray(postReconnect[i])) {
                    postReconnect[i].shift().apply(this, postReconnect[i]);
                }
            }
        }, _status.postReconnect);
        game.broadcast('gameStart');
        ui.auto.show();
        ui.pause.show();
        if (lib.config.show_cardpile) {
            ui.cardPileButton.style.display = '';
        }
    };
}

import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import { showModuleManagementPage } from './precontent.js';
export default {
    info: {},
    playersss: {
        name: '开启武将更换',
        intro: '开启后,武将更换会执行',
        init: false,
    },
    cardsss: {
        name: '开启卡牌更换',
        intro: '开启后,卡牌更换会执行',
        init: false,
    },
    card_playersss: {
        name: '开启卡牌检视',
        intro: '开启后,卡牌检视会执行',
        init: false,
    },
    //公告与全局按钮功能来源于诗笺大佬的全能搜索
    loadUpdateContent: {
        clear: true,
        name: '<span style="text-decoration: underline;">点击显示本扩展更新内容<span>',
        intro: '本扩展历史更新内容',
        onclick() {
            if (_status.qnssUpdateContent) return false;
            _status.qnssUpdateContent = true;
            let oReq = new XMLHttpRequest();
            oReq.addEventListener('load', function () {
                let layer = ui.create.div(ui.window, '.dqzw-updateContent');
                // @ts-ignore
                let close = ui.create.div(layer, '.dqzw-updateContentClose', () => {
                    delete _status.qnssUpdateContent;
                    layer.remove();
                });
                // @ts-ignore
                let content = ui.create.div(layer, {
                    width: '100%',
                    height: '100%',
                    innerHTML: this.responseText,
                });
            });
            oReq.open('GET', 'extension/大权在握/updateContent');
            oReq.send();
        },
    },
    moduleManagement: {
        name: '模块管理',
        clear: true,
        onclick() {
            showModuleManagementPage();
        },
    },
};

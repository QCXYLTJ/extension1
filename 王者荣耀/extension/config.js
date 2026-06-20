import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import heroimgs from "../assets/data/heroimg.js";
export const config = {
    HOKAUTHOR: {
        name: '联系方式及群聊（点击查看）',
        clear: true,
        onclick() {
            var bg = ui.create.div('.hokdibeijing', document.body);
            var h = document.body.offsetHeight / 1.5;
            var w = document.body.offsetWidth / 1.5;
            game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
            var uptate = ui.create.div('.hokupdate', ui.window);
            uptate.style.top = ((document.body.offsetHeight - h) / 2) + 'px';
            uptate.style.left = ((document.body.offsetWidth - w)) + 'px';
            var authorq = ui.create.div('.hokauthorq', uptate);
            var authorg = ui.create.div('.hokauthorg', uptate);
            bg.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
                uptate.delete();
                game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
                bg.delete();
            });
        },
    },
    HOKUPTATE: {
        name: '更新说明（点击查看）',
        clear: true,
        onclick() {
            if (ui.onclickhokuptate) return;
            ui.onclickhokuptate = true;
            var bg = ui.create.div('.hokdibeijing', document.body);
            var h = document.body.offsetHeight / 1.5;
            var w = document.body.offsetWidth / 1.5;
            game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
            var uptate = ui.create.div('.hokupdate', '<div><iframe  width="' + w + 'px" height="' + h + 'px" style="border:none;" src="extension/王者荣耀/update.html" ></iframe></div>', ui.window);
            uptate.style.top = ((document.body.offsetHeight - h) / 2) + 'px';
            uptate.style.left = ((document.body.offsetWidth - w) / 2) + 'px';
            var heroimg = ui.create.div('.heroimg', uptate);
            var img = heroimgs.slice(0, 5).randomGet();
            heroimg.style.backgroundImage = `url(${img})`;
            var close = ui.create.div('.hokclose', uptate, function () {
                delete ui.onclickhokuptate;
                heroimg.delete();
                uptate.delete();
                game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
                bg.delete();
            });
        }
    },
    HOKAUDIOONLINE: {
        name: '在线语音',
        intro: '开启后本扩展所有武将的语音将用官方网站播放，语音体验更好，需联网重启',
        init: true,
        onclick(item) {
            game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
            game.popupMessageTips(`${(item ? '开启' : '关闭') + '在线语音'}`);
            game.saveConfig('extension_王者荣耀_HOKAUDIOONLINE', item);
            game.saveConfig('HOKAUDIOONLINE', item);
        },
    },
    HOKPLAYCHARACTERAUDIO: {
        name: '选将语音',
        intro: '选将时随机播放武将技能语音',
        init: true,
        onclick(item) {
            game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
            game.popupMessageTips(`${(item ? '开启' : '关闭') + '选将语音'}`);
            game.saveConfig('extension_王者荣耀_HOKPLAYCHARACTERAUDIO', item);
            game.saveConfig('HOKPLAYCHARACTERAUDIO', item);
        },
    },
    HOKBGM_MUSIC: {
        name: "背景音乐",
        intro: "王者荣耀官方音乐",
        init: lib.config.extension_王者荣耀_HOKBGM_MUSIC === undefined ? "off" : lib.config.extension_王者荣耀_HOKBGM_MUSIC,
        get item() {
            return lib.config.HOKBGM_Files;
        },
        unfrequent: true,
        onclick(item) {
            game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
            game.saveConfig('extension_王者荣耀_HOKBGM_MUSIC', item);
            game.saveConfig('HOKBGM_MUSIC', item);
            game.hokplaybgMusic();
            ui.backgroundMusic.addEventListener('ended', game.hokplaybgMusic);
        },
        visualMenu(node, link, name, config) {
            node.className = 'button HOKBGM_MUSIC';
            node.innerHTML = '';
            let text = document.createElement("p");
            text.classList.add("HOKBGM_MUSICText");
            text.innerText = name;
            node.appendChild(text);
        },
    },
    HOKSHORTCUTSWITCH: {
        name: '快捷开关',
        intro: '编辑扩展快捷开关',
        init: lib.config.extension_王者荣耀_HOKSHORTCUTSWITCH === undefined ? 2 : lib.config.extension_王者荣耀_HOKSHORTCUTSWITCH,
        item: {
            0: '随机',
            1: '关闭',
            2: '乘龙·铭钟鼎',
            3: '乘龙·淬吴构',
            4: '乘龙·问璇玑',
            5: '乘龙·忆丹青',
            6: '乘龙·聚宝船',
            7: '山河志·岱宗',
            8: '山河志·幽恒',
            9: '山河志·太华',
            10: '山河志·飞衡',
            11: '山河志·玄嵩',
            12: "愿照·千秋盛",
            13: "愿照·千秋盛",
            14: "愿照·千秋盛",
            15: "愿照·千秋盛",
            16: "愿照·千秋盛",
            17: "愿照·千秋盛",
        },
        onclick(item) {
            game.saveConfig('extension_王者荣耀_HOKSHORTCUTSWITCH', item);
            game.saveConfig('HOKSHORTCUTSWITCH', item);
            let index = item;
            if (index == 0) index = get.rand(2, 11);
            else index = index - 2;
            if (HOK.shortcutSwitch) {
                HOK.shortcutSwitch.style.backgroundImage = `url(${heroimgs[index]})`;
                if (index > 9) HOK.shortcutSwitch.classList.add("HOK_role_2025");
                else HOK.shortcutSwitch.classList.remove("HOK_role_2025");
            }
        },
        visualMenu(node, link, name, config) {
            node.className = 'button HOKBGM_MUSIC';
            node.innerHTML = '';
            if (link > 1) {
                var div = new Image();
                div.src = `${heroimgs[link - 2]}`;
                div.classList.add('HOKBGM_MUSICImage');
                node.appendChild(div);
            }
            let text = document.createElement("p");
            text.classList.add("HOKBGM_MUSICText");
            text.innerText = name;
            text.style.fontSize = 15 + 'px';
            node.appendChild(text);
        },
    },
    HOKCHOOSECARDPOPUP: {
        name: '手杀卡牌弹出',
        intro: '手杀样式装备区、判定区、武将牌上的牌弹出到手牌区',
        init: true,
        onclick(item) {
            game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
            game.popupMessageTips(`${(item ? '开启' : '关闭') + '卡牌弹出1'}`);
            game.saveConfig('extension_王者荣耀_HOKCHOOSECARDPOPUP', item);
            game.saveConfig('HOKCHOOSECARDPOPUP', item);
        },
    },
    HOKCHOOSEBUTTONPOPUP: {
        name: '手杀卡牌弹出',
        intro: '手杀样式装备区、判定区、武将牌上的牌弹出到手牌区',
        init: true,
        onclick(item) {
            game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
            game.popupMessageTips(`${(item ? '开启' : '关闭') + '卡牌弹出2'}`);
            game.saveConfig('extension_王者荣耀_HOKCHOOSEBUTTONPOPUP', item);
            game.saveConfig('HOKCHOOSEBUTTONPOPUP', item);
        },
    },
    HOKDISPLAYSSPAIKU: {
        name: '手杀牌库显示',
        intro: '标记类技能显示为移动版牌库显示',
        init: false,
        onclick(item) {
            game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
            game.popupMessageTips(`${(item ? '开启' : '关闭') + '牌库显示'}`);
            game.saveConfig('extension_王者荣耀_HOKDISPLAYSSPAIKU', item);
            game.saveConfig('HOKDISPLAYSSPAIKU', item);
        },
    },
    HOKHandcardLimit: {
        name: '手牌上限显示',
        intro: '适用于本体的手牌上限显示',
        init: lib.config.extension_王者荣耀_HOKHandcardLimit === undefined ? false : lib.config.extension_王者荣耀_HOKHandcardLimit,
        onclick(item) {
            game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
            game.popupMessageTips(`${(item ? '开启' : '关闭') + '手牌上限显示'}`);
            game.saveConfig('extension_王者荣耀_HOKHandcardLimit', item);
            game.saveConfig('HOKHandcardLimit', item);
        },
    },
    HOKMULTICAST: {
        name: '多重施法',
        intro: '扩展武将使用部分技能时触发多次结算，战斗更爽更快更刺激',
        init: lib.config.extension_王者荣耀_HOKMULTICAST === undefined ? "off" : lib.config.extension_王者荣耀_HOKMULTICAST,
        item: {
            "off": "关闭",
            "one": "一次",
            "two": "两次",
            "three": "三次",
            "rand": "随机",
        },
        onclick(item) {
            game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
            game.saveConfig('extension_王者荣耀_HOKMULTICAST', item);
            game.saveConfig('HOKMULTICAST', item);
        },
    },
    HOKAWAKENINGBATTLE: {
        name: '觉醒之战',
        intro: '扩展武将技能更高更快更强，武将技能大幅强化，战斗更爽更快更刺激',
        init: false,
        onclick(item) {
            game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
            game.popupMessageTips(`${(item ? '开启' : '关闭') + '觉醒之战'}`);
            game.saveConfig('extension_王者荣耀_HOKAWAKENINGBATTLE', item);
            game.saveConfig('HOKAWAKENINGBATTLE', item);
        },
    },
}
import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
export class HOKSWITCH {
    constructor() {
    }
    init() {
        if (ui.clickShortcutSwitch) return;
        ui.clickShortcutSwitch = true;
        //game.pause2();
        var scs = this;
        this.scs = scs;
        game.playAudio('..', 'extension/王者荣耀/audio/ui/openButton.mp3');
        var h = document.body.offsetHeight / 1.5;
        var w = document.body.offsetWidth / 1.5;
        this.h = h;
        this.w = w;
        //分离框
        var updateBtnList = ['系统', '游戏', '隐私', '个性化', '扩展', '账号信息'];
        for (let i = 0; i < 6; i++) {
            var updateBtn = ui.create.div('.hok-swicth-choice', ui.window);
            updateBtn.style.top = ((document.body.offsetHeight - h) / 1.8 + 65 * i) + 'px';
            updateBtn.style.left = ((document.body.offsetWidth - w) / 3) + 'px';
            updateBtn.innerHTML = updateBtnList[i];
            updateBtn.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
                game.playAudio('..', 'extension/王者荣耀/audio/ui/closeButton.mp3');
                scs[`setbtn` + i]();
            });
        }
        //主体框
        var uptate = ui.create.div('.hok-swicth-dialog', ui.window);
        var bg = ui.create.div('.hokdibeijing', document.body);
        uptate.style.top = ((document.body.offsetHeight - h) / 2) + 'px';
        uptate.style.left = ((document.body.offsetWidth - w) / 1.5) + 'px';
        var swicthx = ui.create.div('.content', uptate);
        var swicth = ui.create.div('.content2', uptate);
        this.uptate = uptate;
        this.bg = bg;
        this.swictx = swicthx;
        this.swicth = swicth;
        if (!lib.config.HOKSHORTCUTSWITCHBtn) game.saveConfig('HOKSHORTCUTSWITCHBtn', 2);
        this[`setbtn${lib.config.HOKSHORTCUTSWITCHBtn}`]();
        var heroimg = ui.create.div('.heroimg', uptate);
        heroimg.style.backgroundImage = HOK.shortcutSwitch.style.backgroundImage;
        this.heroimg = heroimg;
        heroimg.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
            scs.changeimg();
        });
        bg.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
            game.playAudio('..', 'extension/王者荣耀/audio/ui/closeButton.mp3');
            scs.removeElement();
        });
    }
    changeimg() {
        if (ui.clickchangeimg) return;
        ui.clickchangeimg = true;
        var uptate2 = ui.create.div('.hok-swicth-dialog', ui.window);
        var bg2 = ui.create.div('.hokdibeijing', document.body);
        bg2.classList.add("setimg");
        uptate2.style.top = ((document.body.offsetHeight - this.h) / 2) - 10 + 'px';
        uptate2.style.left = ((document.body.offsetWidth - this.w) / 1.5) + 10 + 'px';
        var swicthx2 = ui.create.div('.content', uptate2);
        var swicth2 = ui.create.div('.content2', uptate2);
        this.bg2 = bg2;
        this.uptate2 = uptate2;
        var scs = this.scs;
        bg2.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
            game.playAudio('..', 'extension/王者荣耀/audio/ui/closeButton.mp3');
            scs.removeElement2();
        });
    }
    getSBtn() {
        return lib.config.HOKSHORTCUTSWITCHBtn;
    }
    updateSwicth() {
        this.swicth.delete();
        this.swicth = ui.create.div('.content2', this.uptate);
    }
    updateBtn() {
        var updateBtns = ui.window.querySelectorAll('.hok-swicth-choice');
        updateBtns.forEach(btn => btn.classList.remove('active'));
        if (this.getSBtn() !== undefined) {
            updateBtns[this.getSBtn()].classList.add('active');
        }
        this.updateSwicth();
    }
    removeElement() {
        game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
        delete ui.clickShortcutSwitch;
        delete _status.shortcutSwitchBtn;
        this.uptate.delete();
        this.bg.delete();
        var updateBtnAll = ui.window.querySelectorAll('.hok-swicth-choice');
        updateBtnAll.forEach(btn => btn.delete());
    }
    removeElement2() {
        game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
        this.uptate2.delete();
        this.bg2.delete();
        delete ui.clickchangeimg;
    }
    setbtn0() {
        game.saveConfig('HOKSHORTCUTSWITCHBtn', 0);
        this.updateBtn();
        var uptate = this.uptate;
        var swicth = this.swicth;
    }
    setbtn1() {
        game.saveConfig('HOKSHORTCUTSWITCHBtn', 1);
        this.updateBtn();
        if (!_status.gameStarted) {
            game.popupMessageTips(`游戏尚未开始`);
            return;
        }
        var scs = this.scs;
        var uptate = this.uptate;
        var swicth = this.swicth;
        swicth.classList.add("extension");
        var tips = ui.create.div('.title1', swicth);
        tips.innerHTML = '快捷指令（请在游戏空闲时间点使用）';
        var list = [
            '获得技能', '失去技能', '重置技能',
            'AI换将', 'AI换座', 'AI换位',
            '创造卡牌', '检索卡牌',
            '执行判定', '执行拼点',
        ];
        for (let i = 1; i < list.length; i++) {
            let select = ui.create.div('.select', swicth);
            select.classList.add("short");
            let skill = "hokscs" + i;
            if (!lib.translate[skill]) {
                game.broadcastAll(skill => {
                    lib.translate[skill] = "快捷";
                }, skill)
            }
            select.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
                new Promise(resolve => setTimeout(resolve, 500))
                    .then(() => {
                        scs.removeElement();
                        ui.click.skill(skill);
                    })
            });
            select.innerHTML = list[i - 1];
        }
    }
    setbtn2() {
        game.saveConfig('HOKSHORTCUTSWITCHBtn', 2);
        this.updateBtn();
        var uptate = this.uptate;
        var swicth = this.swicth;
        var tips1 = ui.create.div('.title1', swicth);
        tips1.innerHTML = '语音设置';
        var select1 = ui.create.div('.select', swicth);
        select1.innerHTML = '在线语音';
        var select1btn = ui.create.div('.selectbtn', select1, function () {
            lib.extensionMenu.extension_王者荣耀.HOKAUDIOONLINE.onclick(lib.config.HOKAUDIOONLINE ? false : true);
            select1btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.HOKAUDIOONLINE ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        });
        select1btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.HOKAUDIOONLINE ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        var select2 = ui.create.div('.select', swicth);
        select2.style.left = '20%';
        select2.innerHTML = '选将语音';
        var select2btn = ui.create.div('.selectbtn', select2, function () {
            lib.extensionMenu.extension_王者荣耀.HOKPLAYCHARACTERAUDIO.onclick(lib.config.HOKPLAYCHARACTERAUDIO ? false : true);
            select2btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.HOKPLAYCHARACTERAUDIO ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        });
        select2btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.HOKPLAYCHARACTERAUDIO ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        var tips2 = ui.create.div('.title2', swicth);
        tips2.innerHTML = '按键设置';
        var select3 = ui.create.div('.select', swicth);
        select3.style.top = '25%';
        select3.innerHTML = '卡牌弹出1';
        var select3btn = ui.create.div('.selectbtn', select3, function () {
            lib.extensionMenu.extension_王者荣耀.HOKCHOOSECARDPOPUP.onclick(lib.config.extension_王者荣耀_HOKCHOOSECARDPOPUP ? false : true);
            select3btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.extension_王者荣耀_HOKCHOOSECARDPOPUP ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        });
        select3btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.extension_王者荣耀_HOKCHOOSECARDPOPUP ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        var select4 = ui.create.div('.select', swicth);
        select4.style.left = '20%';
        select4.style.top = '25%';
        select4.innerHTML = '卡牌弹出2';
        var select4btn = ui.create.div('.selectbtn', select4, function () {
            lib.extensionMenu.extension_王者荣耀.HOKCHOOSEBUTTONPOPUP.onclick(lib.config.extension_王者荣耀_HOKCHOOSEBUTTONPOPUP ? false : true);
            select4btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.extension_王者荣耀_HOKCHOOSEBUTTONPOPUP ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        });
        select4btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.extension_王者荣耀_HOKCHOOSEBUTTONPOPUP ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        var tips3 = ui.create.div('.title3', swicth);
        tips3.innerHTML = '其他设置';
        var select5 = ui.create.div('.select', swicth);
        select5.innerHTML = '多重施法';
        select5.style.top = '35%';
        var select5btn = ui.create.div('.selectbtn', select5, function () {
            lib.extensionMenu.extension_王者荣耀.HOKMULTICAST.onclick(lib.config.extension_王者荣耀_HOKMULTICAST ? false : true);
            select5btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.extension_王者荣耀_HOKMULTICAST ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        });
        select5btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.extension_王者荣耀_hokmulticast ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        var select6 = ui.create.div('.select', swicth);
        select6.innerHTML = '显示牌库';
        select6.style.top = '35%';
        select6.style.left = '20%';
        var select6btn = ui.create.div('.selectbtn', select6, function () {
            lib.extensionMenu.extension_王者荣耀.HOKDISPLAYSSPAIKU.onclick(lib.config.extension_王者荣耀_HOKDISPLAYSSPAIKU ? false : true);
            select6btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.extension_王者荣耀_HOKDISPLAYSSPAIKU ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        });
        select6btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.extension_王者荣耀_HOKDISPLAYSSPAIKU ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        var select7 = ui.create.div('.select', swicth);
        select7.style.top = '40%';
        select7.innerHTML = '觉醒之战';
        var select7btn = ui.create.div('.selectbtn', select7, function () {
            lib.extensionMenu.extension_王者荣耀.HOKAWAKENINGBATTLE.onclick(lib.config.HOKAWAKENINGBATTLE ? false : true);
            select7btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.HOKAWAKENINGBATTLE ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        });
        select7btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.HOKAWAKENINGBATTLE ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        var select8 = ui.create.div('.select', swicth);
        select8.innerHTML = '显示台词';
        select8.style.top = '40%';
        select8.style.left = '20%';
        var select8btn = ui.create.div('.selectbtn', select8, function () {
            lib.extensionMenu.extension_王者荣耀.HOKPLAYVOICETEXT.onclick(lib.config.extension_王者荣耀_HOKPLAYVOICETEXT ? false : true);
            select8btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.extension_王者荣耀_HOKPLAYVOICETEXT ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
        });
        select8btn.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config.extension_王者荣耀_HOKPLAYVOICETEXT ? 'login-xy-gou' : 'public_god_input_bg'}.png`})`
    }
    setbtn3() {
        game.saveConfig('HOKSHORTCUTSWITCHBtn', 3);
        this.updateBtn();
        var uptate = this.uptate;
        var swicth = this.swicth;
    }
    setbtn4() {
        game.saveConfig('HOKSHORTCUTSWITCHBtn', 4);
        this.updateBtn();
        var uptate = this.uptate;
        var swicth = this.swicth;
        swicth.classList.add("extension");
        var tips = ui.create.div('.title1', swicth);
        tips.innerHTML = '扩展管理';
        const extensions = lib.config.extensions;
        for (let i = 0; i < extensions.length; i++) {
            let select = ui.create.div('.select', swicth);
            select.innerHTML = select.link = extensions[i];
            let selectbtn0 = ui.create.div('.selectbtn', select, function () {
                const config = `extension_${select.link}_enable`;
                const bool = lib.config[config];
                game.saveConfig(config, !bool);
                game.playAudio('..', 'extension/王者荣耀/audio/ui/Notice02.mp3');
                game.popupMessageTips(`${(!bool ? '开启' : '关闭') + select.link}`);
                selectbtn0.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config[config] ? 'set_btn_on' : 'set_btn_off'}.png`})`;
            });
            //selectbtn0.classList.toggle('off');
            selectbtn0.style.backgroundImage = `url(${`extension/王者荣耀/image/ui/${lib.config[`extension_${select.link}_enable`] ? 'set_btn_on' : 'set_btn_off'}.png`})`
        }
    }
    setbtn5() {
        game.saveConfig('HOKSHORTCUTSWITCHBtn', 5);
        this.updateBtn();
    }
}
export let HoKswitch = new HOKSWITCH();
export let setHOKSWITCH = (instance) => {
    HoKswitch = instance || new HOKSWITCH();
    window.HoKswitch = HoKswitch;
}
setHOKSWITCH()
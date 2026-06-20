import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
// 给获得标记增加时机
let originalAddMark = lib.element.player.addMark;
Reflect.defineProperty(lib.element.Player.prototype, 'addMark', {
    value(i, num, log) {
        let evt = get.event();
        if (evt && evt.name) {
            evt.__addMark__ = {
                player: this,
                markname: i,
                num
            };
            evt.trigger('addMarkBegin');
        };
        return originalAddMark.apply(this, arguments);
    },
});
// 给失去标记增加时机
let originalRemoveMark = lib.element.player.removeMark;
Reflect.defineProperty(lib.element.Player.prototype, 'removeMark', {
    value(i, num, log) {
        let evt = get.event();
        if (evt && evt.name) {
            evt.__removeMark__ = {
                player: this,
                markname: i,
                num
            };
            evt.trigger('removeMarkBegin');
        };
        return originalRemoveMark.apply(this, arguments);
    },
});
// 同步转换技
lib.element.player.dqzw_syncZhuanhuanji = function (...args) {
    let next = game.createEvent('dqzw_syncZhuanhuanji');
    next.player = this;
    next.syncInitiateSkill = (Array.isArray(args[0]) ?
        args[0] : [...args]) || [];
    next.setContent(function () {
        'step 0'
        let skills = player.getSkills(false, false);
        event.skills = skills.filter(skill => {
            let info = get.info(skill);
            return info && info.zhuanhuanji
                && !event.syncInitiateSkill.includes(skill);
        });
        'step 1'
        let skill = event.skills.shift()
            , result = {};
        if (!skill) {
            event.finish();
            return;
        }
        ;
        event.skill = skill;
        exec(skill);
        for (let initiateSkill of event.syncInitiateSkill)
            exec(initiateSkill);
        if (result.bool !== false)
            player.changeZhuanhuanji(skill);
        if (!result)
            result = { end: true };
        else result.end = true;
        for (let initiateSkill of event.syncInitiateSkill)
            exec(initiateSkill);
        exec(skill);
        function exec(initiateSkill) {
            let info = get.info(initiateSkill);
            if (info && typeof info
                .syncZhuanhuanji == 'function')
                info.syncZhuanhuanji(
                    skill,
                    event.player,
                    event,
                    result,
                    initiateSkill
                );
        };
        'step 2'
        event.trigger('dqzw_syncZhuanhuanji');
        'step 3'
        event.goto(1);
    });
    return next;
};
// 获取角色主副将的标签
lib.element.player.getCharacterTag = function (num = 2) {
    let list = [];
    if (/0|2/.test(num))
        list.push(this.name1 || this.name);
    if (/1|2/.test(num))
        list.push(this.name2);
    return list.map(name => get.characterTag(name));
};
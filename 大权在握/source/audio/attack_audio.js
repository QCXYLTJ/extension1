import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
// 这里是攻击语音quq
// attack:文件路径(默认值:audio/attack/主将名);语音数;触发条件(数字为百分之N几率,其他直接覆盖触发条件,与此技能content的作用域一致,您可引用此技能content中声明的变量)
// 示例: dqzw_character: ['male', 'qun', 4, [], ['attack:ext:大权在握/audio/attack/dqzw_character']]
lib.skill._dqzw_attack_audio = {
    trigger: {
        player: 'useCardToTargeted'
    },
    filter: event => lib.config.background_speak && event.target == event.targets[0],
    silent: true,
    content() {
        let tag = player.getCharacterTag()[0].find(tag => tag.startsWith('attack:'))
            , bool = trigger.target != player && !trigger.excluded.includes(trigger.target)
                && get.tag(trigger.card, 'damage') && trigger.target.isAlive()
            , ok = bool && get.rand(1, 100) < 25 * ((trigger.parent.baseDamage || 1) * trigger.targets.length) + 1;
        if (tag) {
            tag = tag.slice(7).split(';');
            const result = [
                [tag.length, () => tag[0] || 'audio/attack/' + player.name1],
                [
                    tag.length > 1 && eval(tag[1]) && !isNaN(Number(tag[1])),
                    () => '_' + get.rand(1, Number(tag[1]))
                ],
                [tag.length > 2,
                () => (eval(tag[2]) && !isNaN(Number(tag[2]))
                    ? ok = bool && get.rand(1, 100) < Number(tag[2]) + 1
                    : eval(`ok = ${tag[2]}`)) | 1 && ''
                ]
            ].reduce((pre, cur) => {
                if (cur[0])
                    return pre + cur[1]();
                return pre;
            }, '');
            if (ok) game.playAudio(result);
        };
    }
};
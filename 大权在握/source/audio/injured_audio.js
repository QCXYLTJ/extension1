import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
// 这里是受击语音quq
// 打自己不会触发(触发条件,可覆盖)
// injured:文件路径;语音数;触发条件(数字为百分之N几率,其他直接覆盖触发条件,与此技能content的作用域一致,您可引用此技能content中声明的变量)
// 示例: dqzw_character: ['male', 'qun', 4, [], ['injured:ext:大权在握/audio/injured/dqzw_character']]
lib.skill._dqzw_injured_audio = {
    trigger: {
        player: 'damageEnd'
    },
    filter: () => lib.config.background_speak,
    silent: true,
    content() {
        let tag = player.getCharacterTag()[0].find(tag => {
            if (!tag) {
                return;
            }//AAA
            return tag.startsWith('injured:');
        })
            , bool = trigger.source != player
            , ok = bool && get.rand(1, 100) < 20 * trigger.num + 1;
        if (tag) {
            tag = tag.slice(8).split(';');
            const result = [
                [tag.length, () => tag[0] || 'audio/injured/' + player.name1],
                [
                    tag.length > 1 && eval(tag[1]) && !isNaN(Number(tag[1])),
                    () => '_' + get.rand(1, Number(tag[1]))
                ],
                [
                    tag.length > 2,
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
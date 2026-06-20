import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
// 这里是击杀语音quq
// kill:文件路径;语音数;触发条件(数字为百分之N几率,其他直接覆盖触发条件,与此技能content的作用域一致,您可引用此技能content中声明的变量)
// 连续击杀 or 特殊击杀 使用;号分割,$开头为触发条件,使用<$结尾,#开头为语音数,使用<#结尾,均只取首个,请不要套,为数字则本回合击杀数为N,否则与此技能content的作用域一致,您可引用此技能content中声明的变量
// 示例:设置六杀与七杀语音
// continuity_kill:$6<$#2<#ext:大权在握/audio/kill/dqzw_character_kill_6;$7<$ext:大权在握/audio/kill/dqzw_character_kill_7
lib.skill._dqzw_kill_audio = {
    trigger: {
        source: 'die'
    },
    filter: () => lib.config.background_speak,
    silent: true,
    content() {
        let tag = player.getCharacterTag()[0].find(tag => tag.startsWith('kill:'))
            , continuity = player.getCharacterTag()[0].find(tag => tag.startsWith('continuity_kill:'))
            , kill = player.getStat().kill
            , ok = true;
        if (continuity) {
            let result;
            continuity = continuity.slice(16).split(';');
            if (continuity.some(tag => tag[0] == '$')) {
                let reg1 = /\$(.*?)\<\$/,
                    reg2 = /\#(.*?)\<\#/,
                    list = continuity.map(tag => {
                        let filter = tag.match(reg1);
                        if (filter) return [tag, filter[1]];
                        return null;
                    }),
                    first = list.find(filter => filter
                        && eval(filter[1]) && !isNaN(Number(filter[1]))
                        ? kill == filter[1]
                        : eval(filter[1])
                    );
                if (first) {
                    first = first[0].replace(reg1, '');
                    let num = first.match(reg2);
                    if (num && !isNaN(Number(num)))
                        result = first.replace(reg2, '') + '_' + get.rand(1, Number(num));
                    else result = first;
                };
            };
            if (result) {
                game.playAudio(result);
                return;
            };
            ok = true;
        };
        if (tag) {
            tag = tag.slice(5).split(';');
            const result = [
                [tag.length, () => tag[0] || 'audio/kill/' + player.name1],
                [
                    tag.length > 1 && eval(tag[1]) && !isNaN(Number(tag[1])),
                    () => '_' + get.rand(1, Number(tag[1]))
                ],
                [
                    tag.length > 2,
                    () => (eval(tag[2]) && !isNaN(Number(tag[2]))
                        ? ok = get.rand(1, 100) < Number(tag[2]) + 1
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
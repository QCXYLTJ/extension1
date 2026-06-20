import { lib, game, ui, get, ai, _status } from '../../../noname.js';
game.import('character', function (lib, game, ui, get, ai, _status) {
    const characterPack = {
        name: '魔王二代包',
        connect: true,
        character: {
            //武将信息
            dz_rb_caocao: ['male', 'wei', 4, ['dz_rb_bilian', 'dz_rb_fuyan'], []],
            dz_rb_sunquan: ['male', 'wu', 4, ['dz_rbk_hengzheng', 'dz_rbk_zhengdang'], []],
            dz_rb_liubei: ['male', 'shu', 4, ['dz_rb_yihe', 'dz_rb_renwang'], []],
            dz_rb_jiangwei: ['male', 'shu', 4, ['dz_rb_tianjun', 'dz_rb_yunjue'], []],
            dz_rb_zhonghui: ['female', 'wei', 3, ['dz_rb_aolin', 'dz_rb_changyu'], []],
            dz_rb_zhangjiao: ['female', 'qun', 3, ['dz_rb_aicang', 'dz_rb_gongtian', 'dz_rb_wudun'], []],
        },
        translate: {
            //翻译
            dz_rb_caocao: '👿曹操',
            dz_rb_caocao_prefix: '👿',
            dz_rb_sunquan: '🤗孙权',
            dz_rb_sunquan_prefix: '🤗',
            dz_rb_liubei: '😘刘备',
            dz_rb_liubei_prefix: '😘',
            dz_rb_jiangwei: '🤕姜维',
            dz_rb_jiangwei_prefix: '🤕',
            dz_rb_zhonghui: '🥵钟会',
            dz_rb_zhonghui_prefix: '🥵',
            dz_rb_zhangjiao: '⚡张角',
            dz_rb_zhangjiao_prefix: '⚡',
        },
    };
    if (!_status.postReconnect.extErdai) {
        _status.postReconnect.extErdai = [
            function (list, info) {
                for (var i in list) {
                    lib.character[i] = list[i];
                }
                for (var i in info) if (!lib.translate[i]) lib.translate[i] = info[i];
            },
            {},
            {},
        ];
    }
    for (let name in characterPack.character) {
        if (!characterPack.character[name][4]) characterPack.character[name][4] = [];
        characterPack.character[name][4].push('ext:魔王二代包/image/character/' + name + '.jpg');
        characterPack.character[name][4].push('die:ext:魔王二代包/audio/die/' + name + '.mp3');
        _status.postReconnect.extErdai[1][name] = characterPack.character[name];
    }
    for (let translate in characterPack.translate) {
        _status.postReconnect.extErdai[2][translate] = characterPack.translate[translate];
    }
    if (!_status.postReconnect.extErdai_pack) {
        _status.postReconnect.extErdai_pack = [
            function (pack) {
                lib.translate.魔王二代包_character_config = '魔王二代包';
                lib.characterPack.魔王二代包 = pack;
                lib.config.extension_魔王二代包_characters_enable = true;
            },
            characterPack.character,
        ];
    }
    lib.config.characters.add('魔王二代包');
    lib.config.all.characters.add('魔王二代包');
    lib.translate.魔王二代包_character_config = '魔王二代包';
    return characterPack;
});
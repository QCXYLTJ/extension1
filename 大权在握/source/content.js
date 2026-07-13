import { lib, game, ui, get, ai, _status } from '../../../noname.js'
export async function content(config, pack) {
    // 武将评级
    if (lib.rank) {
        //s
        lib.rank.rarity.rare.add(...['dqzw_banshao', 'dqzw_clan_yanghua', 'dqzw_dj', 'dqzw_clan_zhugezhan', 'dqzw_diaochan', 'dqzw_clan_yangmiao', 'dqzw_clan_zhugeguo', 'dqzw_caochong', 'dqzw_caopi', 'dqzw_clan_xielingyun', 'dqzw_clan_wangdao',
            'dqzw_clan_xiedaoyun', 'dqzw_zhangsanfeng', 'dqzw_clan_wangdun', 'dqzw_yuanchonghuan', 'dqzw_wangzhaojun', 'dqzw_yangyuhuan', 'dqzw_xishi', 'dqzw_tengfanglan', 'dqzw_sunliang', 'dqzw_tangji', 'shangguangonque_Angel', 'xiereweidun_Angel',
            'dqzw_zhenji', 'dqzw_zhuyingtai', 'dqzw_zhongkui', 'dqzw_sunshangxiang', 'dqzw_sp_wentianxiang', 'dqzw_sr_wentianxiang', 'dqzw_clan_wanghuizhi', 'dqzw_shiying', 'dqzw_moye', 'dqzw_shangguanwaner', 'dqzw_ranmin', 'dqzw_clan_wangningzhi',
            'dqzw_clan_wangrong', 'dqzw_clan_wangxianzhi', 'dqzw_liangshanbo', 'dqzw_lichunfeng', 'dqzw_linzhengying', 'dqzw_liufeng', 'dqzw_liuyu', 'dqzw_luyi', 'dqzw_liuhong', 'dqzw_yangbiao', 'dqzw_wangyun', 'dqzw_zhangchunhua', 'dqzw_yuanhuan',
            'dqzw_huangfusong', 'dqzw_jiangwan', 'dqzw_zhangjiao', 'dqzw_clan_xieshi', 'dqzw_clan_xiekun', 'dqzw_clan_xieyan', 'dqzw_clan_xieshang', 'dqzw_boss_activity_tianhai_zhigengniao', 'dqzw_boss_activity_tianhai_shajin', 'dqzw_boss_activity_tianhai_Xueyi',
            'dqzw_boss_activity_tianhai_Hanya']);
        //ss
        lib.rank.rarity.epic.add(...['dqzw_simayi', 'dqzw_clan_wangxiang', 'dqzw_duyu', 'dqzw_clan_wangyan', 'dqzw_clan_xiexuan', 'dqzw_clan_zhugedan', 'dqzw_clan_zhugejin', 'dqzw_clan_zhugeke', 'dqzw_ganjiang', 'dqzw_jw', 'dqzw_libai', 'dqzw_liubowen',
            'dqzw_lvzhi', 'dqzw_shiyin', 'dqzw_wangwei', 'dqzw_wentianxiang', 'dqzw_xy', 'dqzw_yuefei', 'dqzw_yuqian', 'dqzw_zhangdaoling', 'dqzw_zhangjuzheng', 'dqzw_zhangliang', 'dqzw_zhuhoucong', 'dqzw_changxiao', 'dqzw_jin_simayi', 'dqzw_hejin',
            'dqzw_liuyan', 'dqzw_zhangrang', 'dqzw_feiyi', 'dqzw_zhujun', 'dqzw_sunshao', 'dqzw_zhangliangzhangbao', 'dqzw_huangfumi', 'dqzw_clan_xieyi', 'dqzw_clan_luji', 'dqzw_boss_activity_tianhai_Fuxuan', 'dqzw_boss_activity_tianhai_Sampo']);
        //sss
        lib.rank.rarity.legend.add(...['dqzw_jisi', 'dqzw_caoe', 'dqzw_caoyi', 'dqzw_change', 'dqzw_changxi', 'dqzw_clan_wangxizhi', 'dqzw_clan_xiean', 'dqzw_clan_zhugeliang', 'dqzw_ehuang', 'dqzw_if_jiangwei', 'dqzw_if_ruanji', 'dqzw_if_simazhao',
            'dqzw_if_sunchen', 'dqzw_if_yuanshao', 'dqzw_if_zhonghui', 'dqzw_jisi_gm', 'dqzw_jisi_KAMI', 'dqzw_linglong', 'dqzw_sunquan', 'dqzw_wangshu', 'dqzw_zhaokuangyin', 'dqzw_zhudi', 'dqzw_zhuyuanzhang', 'dqzw_sp_caopi', 'dqzw_lingju',
            'dqzw_xuxun', 'dqzw_boss_activity_tianhai_huangquan']);
    };
    if (config.playersss) {
        const Skill_player = setInterval(() => {
            if (ui.system1 || ui.system2) {
                clearInterval(Skill_player);
                ui.Searcher = ui.create.system('更换角色', function () {
                    if (game.filterPlayer().length > 0) {
                        game.me.chooseTarget('选择一名角色,为其更换角色').setContent(lib.skill._Skill_player.content);
                    } else {
                        alert('阿这~好像报错了呢,貌似是因为当前没角色')
                    }
                });
            }
        }, 500);
        lib.skill._Skill_player = {
            content() {
                'step 0'
                player.chooseTarget('选择一名角色,为其更换角色')
                'step 1'
                var character = []
                if (result.targets?.length) {
                    event.targets1 = result.targets[0]
                    for (var i in lib.characterPack) {
                        for (var o in lib.characterPack[i]) {
                            character.add(o)
                        }
                    }
                    player.chooseButton(['选择需要更换的角色', [character, 'character']])
                } else event.finish()
                'step 2'
                if (result.bool) {
                    var target = event.targets1
                    target.reinit(target.name, result.links[0]);
                    target.hp = target.maxHp;
                    target.update();
                }
            }
        }
    }
    if (config.cardsss) {
        const Skill_player = setInterval(() => {
            if (ui.system1 || ui.system2) {
                clearInterval(Skill_player);
                ui.Searcher = ui.create.system('更换卡牌', function () {
                    if (game.filterPlayer().length > 0) {
                        game.me.chooseTarget('选择一名角色,为其更换卡牌').setContent(lib.skill._Card_player.content);
                    } else {
                        alert('阿这~好像报错了呢,貌似是因为当前没角色')
                    }
                });
            }
        }, 500);
        lib.skill._Card_player = {
            content() {
                "step 0"
                player.chooseTarget('选择一名角色,为其更换卡牌')
                "step 1"
                if (result.targets?.length) {
                    var target = result.targets[0]
                    event.targets1 = result.targets[0]
                    var cards = target.getCards('h')
                    var cards1 = []
                    for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                        var node = ui.cardPile.childNodes[i];
                        cards1.add(node)
                    }
                    var next = player.chooseToMove();
                    next.set('list', [
                        ['' + get.translation(target) + '的手牌', cards],
                        ['牌堆', cards1],
                    ]);
                    next.set('filterMove', function (from, to) {
                        return typeof to != 'number';
                    });
                    next.set('prompt', '选择需要更换的卡牌');
                } else event.finish()
                "step 2"
                if (result.bool) {
                    var pushs = result.moved[1], gains = result.moved[0];
                    for (var i = 0; i < pushs.length; i++) {
                        ui.cardPile.insertBefore(pushs[i], ui.cardPile.firstChild);
                    }
                    event.targets1.gain(gains, 'draw');
                    game.updateRoundNumber();
                }
            }
        }
    }
    if (config.card_playersss) {
        const Skill_player = setInterval(() => {
            if (ui.system1 || ui.system2) {
                clearInterval(Skill_player);
                ui.Searcher = ui.create.system('查看卡牌', function () {
                    var list = []
                    for (var i of game.filterPlayer()) {
                        list.add(get.translation(i) + '的手牌区')
                        list.add(i.getCards('h'))
                    }
                    game.me.chooseControl('ok').set('dialog', list);
                });
            }
        }, 500);
    }
    var daojie = lib.skill.clandaojie;
    if (daojie) {
        if (!daojie.audioname2) daojie.audioname2 = {};
        daojie.audioname2.dqzw_xunxu = 'dqzw_daojie_xunxu';
    };
}
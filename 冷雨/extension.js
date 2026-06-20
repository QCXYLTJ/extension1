import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '冷雨',
        content(config, pack) {
            lib.group.push('剑');
            lib.translate.剑 = '<span style="color:gold">剑</span>';
            lib.group.push('枪');
            lib.translate.枪 = '<span style="color:yellow">枪</span>';
            lib.group.push('弓');
            lib.translate.弓 = '<span style="color:orange">弓</span>';
            lib.group.push('骑');
            lib.translate.骑 = '<span style="color: #00BFFF">骑</span>';
            lib.group.push('术');
            lib.translate.术 = '<span style="color: #FF00FF">术</span>';
            lib.group.push('刺');
            lib.translate.刺 = '<span style="color:black">刺</span>';
            lib.group.push('狂');
            lib.translate.狂 = '<span style="color:red">狂</span>';
            lib.group.push('约');
            lib.translate.约 = '<span style="color: #FFC0CB">约</span>';
            lib.group.push('禁');
            lib.translate.禁 = '<span style="color: #00CED1">禁</span>';
            lib.group.push('灼');
            lib.translate.灼 = '<span style="color: #FF4500">灼</span>';
            lib.group.push('灼');
            lib.translate.灼 = '<span style="color: #FF4500">灼</span>';
            lib.group.push('幻');
            lib.translate.幻 = '<span style="color: #FF1493">幻</span>';
            lib.group.push('裁');
            lib.translate.裁 = '<span style="color: #FFF8DC">裁</span>';
            lib.group.push('弑');
            lib.translate.弑 = '<span style="color: #708090">弑</span>';
            lib.group.push('刀');
            lib.translate.刀 = '<span style="color: #00FFFF">刀</span>';
            lib.group.push('天');
            lib.translate.天 = '<span style="color: #EE82EE">天</span>';
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '冷雨',
                    connect: true,
                    character: {
                        冷雨莎士比亚: ['male', '术', 5, ['冷雨莎士比亚_魔力附加', '冷雨莎士比亚_国王剧场'], []],
                        冷雨五河琴里: ['female', '约', 4, ['冷雨五河琴里_灼烂歼鬼', '冷雨五河琴里_再生能力', '冷雨五河琴里_灵力暴走'], []],
                        冷雨御坂美琴: ['female', '禁', 4, ['冷雨御坂美琴_电击之枪', '冷雨御坂美琴_落雷', '冷雨御坂美琴_超电磁炮', '冷雨御坂美琴_电磁充能'], []],
                        冷雨吉尔伽美什: ['male', '弓', 5, ['冷雨吉尔伽美什_巴比伦宝藏', '冷雨吉尔伽美什_黄金律', '冷雨吉尔伽美什_维摩那', '冷雨吉尔伽美什_乖离剑'], []],
                        冷雨夏娜: ['female', '灼', 4, ['冷雨夏娜_红莲之大太刀', '冷雨夏娜_审判', '冷雨夏娜_天壤之劫火'], []],
                        冷雨博丽灵梦: ['female', '幻', 4, ['冷雨博丽灵梦_梦想封印', '冷雨博丽灵梦_香火贿赂', '冷雨博丽灵梦_八方鬼缚阵', '冷雨博丽灵梦_极端幸运', '冷雨博丽灵梦_塞钱箱', '冷雨博丽灵梦_暴走'], ['boss', 'bossallowed']],
                        冷雨兰斯洛特: ['male', '狂', 5, ['冷雨兰斯洛特_骑士不死于徒手', '冷雨兰斯洛特_无穷之武炼', '冷雨兰斯洛特_狂化骑士', '冷雨兰斯洛特_无毁的湖光'], []],
                        冷雨开膛手杰克: ['female', '刺', 4, ['冷雨开膛手杰克_解体圣母', '冷雨开膛手杰克_暗黑雾都', '冷雨开膛手杰克_雾夜的凶杀', '冷雨开膛手杰克_外科手术'], []],
                        冷雨伊斯坎达尔: ['male', '骑', 5, ['冷雨伊斯坎达尔_征服王', '冷雨伊斯坎达尔_神威车轮', '冷雨伊斯坎达尔_雷之征服者', '冷雨伊斯坎达尔_王之军势'], []],
                        冷雨一方通行: ['male', '禁', 5, ['冷雨一方通行_反射', '冷雨一方通行_等离子体'], []],
                        冷雨雾雨魔理沙: ['female', '幻', 4, ['冷雨雾雨魔理沙_打秋风', '冷雨雾雨魔理沙_有借有还'], []],
                        冷雨四季映姬: ['female', '幻', 4, ['冷雨四季映姬_乐园裁判长', '冷雨四季映姬_净琉璃之镜', '冷雨四季映姬_地狱审判长'], []],
                        冷雨芙兰朵露: ['female', '幻', 4, ['冷雨芙兰朵露_禁忌的游戏', '冷雨芙兰朵露_符卡·莱瓦丁', '冷雨芙兰朵露_随意破坏', '冷雨吸血鬼'], []],
                        冷雨迪卢木多: ['male', '枪', 5, ['冷雨迪卢木多_破魔的红蔷薇', '冷雨迪卢木多_必灭的黄蔷薇', '冷雨迪卢木多_爱的黑痣', '冷雨枪兵'], []],
                        冷雨本条二亚: ['female', '约', 4, ['冷雨本条二亚_嗫告篇帙·情报检索', '冷雨本条二亚_嗫告篇帙·未来记载', '冷雨本条二亚_神蚀篇帙·恶魔种子'], []],
                        冷雨键山雏: ['female', '幻', 4, ['冷雨键山雏_厄神大人的生理节律', '冷雨键山雏_流放人偶', '冷雨键山雏_痛苦之流'], []],
                        '冷雨帕秋莉·诺蕾姬': ['female', '幻', 4, ['冷雨帕秋莉_金耀', '冷雨帕秋莉_木耀', '冷雨帕秋莉_水耀', '冷雨帕秋莉_火耀', '冷雨帕秋莉_土耀', '冷雨帕秋莉_日耀', '冷雨帕秋莉_月耀', '冷雨帕秋莉_体弱的魔法使', '冷雨帕秋莉_病弱之躯'], []],
                        冷雨西行寺幽幽子: ['female', '幻', 4, ['冷雨西行寺幽幽子_死符·惊梦', '冷雨西行寺幽幽子_死蝶·华胥的永眠', '冷雨西行寺幽幽子_幽蝶·幽魂聚地', '冷雨西行寺幽幽子_蝶符·凤蝶纹的死枪', '冷雨西行寺幽幽子_樱符·西行樱吹雪'], []],
                        冷雨迦尔纳: ['male', '枪', 5, ['冷雨迦尔纳_日轮啊·化作甲胄', '冷雨迦尔纳_日轮啊·顺从死亡', '冷雨迦尔纳_梵天啊·诅咒吾身', '冷雨迦尔纳_梵天啊·覆盖大地', '冷雨迦尔纳_贫者之见识'], []],
                        冷雨鸢一折纸: ['female', '约', 4, ['冷雨鸢一折纸_复仇执念', '冷雨鸢一折纸_变身'], []],
                        冷雨绝灭天使: ['female', '约', 4, ['冷雨绝灭天使_羽翼', '冷雨绝灭天使_日轮', '冷雨绝灭天使_光剑', '冷雨绝灭天使_天翼'], []],
                        冷雨夜刀神十香: ['female', '约', 4, ['冷雨夜刀神十香_鏖杀公', '冷雨夜刀神十香_剑之天使', '冷雨夜刀神十香_王座之铠', '冷雨夜刀神十香_十番'], []],
                        冷雨四糸乃: ['female', '约', 4, ['冷雨四糸乃_冰结傀儡', '冷雨四糸乃_冰霜操纵'], []],
                        冷雨诱宵美九: ['female', '约', 4, ['冷雨诱宵美九_独奏', '冷雨诱宵美九_镇魂曲', '冷雨诱宵美九_轮舞曲', '冷雨诱宵美九_进行曲'], []],
                        冷雨星宫六喰: ['female', '约', 4, ['冷雨星宫六喰_闭', '冷雨星宫六喰_开', '冷雨星宫六喰_放', '冷雨星宫六喰_解'], []],
                        冷雨七罪: ['female', '约', 4, ['冷雨七罪_赝造魔女', '冷雨七罪_千变万化镜'], []],
                        冷雨八舞姐妹: ['female', '约', 4, ['冷雨八舞姐妹_飓风精灵', '冷雨八舞姐妹_贯穿者', '冷雨八舞姐妹_束缚者', '冷雨八舞姐妹_天际疾驰者'], []],
                        冷雨尼禄: ['female', '剑', 4, ['冷雨尼禄_扫荡的黄金剧场', '冷雨尼禄_陨铁之鞴', '冷雨尼禄_童女讴歌的荣华帝政'], []],
                        冷雨弗拉德三世: ['male', '枪', 5, ['冷雨弗拉德三世_极刑王', '冷雨弗拉德三世_护国之鬼将', '冷雨弗拉德三世_鲜血的传承'], []],
                        冷雨莫德雷德: ['female', '剑', 4, ['冷雨莫德雷德_隐藏不贞的头盔', '冷雨莫德雷德_对吾华丽父王的叛逆', '冷雨莫德雷德_叛逆的骑士', '冷雨莫德雷德_灿然辉耀的王剑', '冷雨莫德雷德_圆桌骑士'], []],
                        冷雨阿斯托尔福: ['male', '骑', 5, ['冷雨阿斯托尔福_唤起恐慌之魔笛', '冷雨阿斯托尔福_破却宣言', '冷雨阿斯托尔福_一碰就倒', '冷雨阿斯托尔福_非世间所存之幻马'], []],
                        冷雨齐格飞: ['male', '剑', 5, ['冷雨齐格飞_恶龙之血铠', '冷雨齐格飞_龙杀', '冷雨齐格飞_尼伯龙根之歌'], []],
                        '冷雨龙之魔女·贞德': ['female', '狂', 4, ['冷雨龙之魔女_龙之魔女', '冷雨龙之魔女_自我改造', '冷雨龙之魔女_咆哮吧,吾之愤怒'], []],
                        冷雨贞德: ['female', '裁', 4, ['冷雨贞德_神明裁决', '冷雨贞德_启示', '冷雨贞德_吾主在此', '冷雨贞德_红莲之圣女'], []],
                        冷雨八云紫: ['female', '幻', 4, ['冷雨八云紫_永夜的四重结界', '冷雨八云紫_妖蝶1', '冷雨八云紫_动与静的均衡', '冷雨八云紫_梦境与现实的诅咒'], []],
                        冷雨八意永琳: ['female', '幻', 4, ['冷雨八意永琳_虚假之月'], []],
                        冷雨山之翁: ['male', '刺', 5, ['冷雨山之翁_晚钟', '冷雨山之翁_死告天使', '冷雨山之翁_信仰的加护'], []],
                        冷雨恩奇都: ['none', '骑', 5, ['冷雨恩奇都_变容', '冷雨恩奇都_制衡神兵', '冷雨恩奇都_完全形态', '冷雨恩奇都_世人啊,冀以锁系神明'], []],
                        冷雨反转十香: ['female', '约', 4, ['冷雨反转十香_暴虐公', '冷雨反转十香_剑之魔王', '冷雨反转十香_终焉之剑'], []],
                        冷雨织田信长: ['female', '弓', 4, ['冷雨织田信长_革新', '冷雨织田信长_三千世界', '冷雨织田信长_第六天魔王波旬'], []],
                        冷雨西莉卡: ['female', '刀', 4, ['冷雨西莉卡_治愈吐息', '冷雨西莉卡_强化吐息'], []],
                        冷雨最后之王: ['male', '弑', 2, ['冷雨最后之王_古老盟约的加持', '冷雨最后之王_曼茶罗方阵', '冷雨最后之王_救世神刀', '冷雨最后之王_歼灭魔王的勇者'], []],
                        冷雨蕾米莉亚: ['female', '幻', 4, ['冷雨蕾米莉亚_德古拉的摇篮', '冷雨蕾米莉亚_冈格尼尔之枪', '冷雨蕾米莉亚_绯色命运'], []],
                        冷雨阿尔托莉雅: ['female', '剑', 4, ['冷雨阿尔托莉雅_誓约胜利之剑', '冷雨阿尔托莉雅_风王结界', '冷雨阿尔托莉雅_远离尘世的理想乡', '冷雨阿尔托莉雅_王的诞生之日', '冷雨阿尔托莉雅_骑士王'], []],
                        冷雨风见幽香: ['female', '幻', 4, ['冷雨风见幽香_双管魔炮', '冷雨风见幽香_自然之力', '冷雨风见幽香_花之暴君'], []],
                        冷雨赫拉克勒斯: ['male', '狂', 2, ['冷雨赫拉克勒斯_射杀百头', '冷雨赫拉克勒斯_怪力', '冷雨赫拉克勒斯_狂化侵蚀', '冷雨赫拉克勒斯_十二试炼'], []],
                        冷雨高文: ['male', '剑', 5, ['冷雨高文_圣者的数字', '冷雨高文_轮转胜利之剑', '冷雨莫德雷德_圆桌骑士'], []],
                        冷雨阿蒂拉: ['female', '剑', 4, ['冷雨阿蒂拉_游星之纹章', '冷雨阿蒂拉_军神之剑', '冷雨阿蒂拉_文明侵蚀'], []],
                        冷雨斯卡哈: ['female', '枪', 4, ['冷雨斯卡哈_魔境的智慧', '冷雨斯卡哈_贯穿死翔之枪', '冷雨斯卡哈_影之国'], []],
                        冷雨夏尔: ['male', '刺', 5, ['冷雨夏尔_刽子手', '冷雨夏尔_人体研究', '冷雨夏尔_死亡为明日希望'], []],
                        冷雨崔斯坦: ['male', '弓', 5, ['冷雨崔斯坦_治愈的竖琴', '冷雨崔斯坦_痛哭的幻奏', '冷雨莫德雷德_圆桌骑士'], []],
                        冷雨贝狄威尔: ['male', '剑', 5, ['冷雨贝狄威尔_守护的誓约', '冷雨贝狄威尔_银之臂', '冷雨贝狄威尔_一闪而逝', '冷雨莫德雷德_圆桌骑士'], []],
                        冷雨狂化库丘林: ['male', '狂', 5, ['冷雨狂化库丘林_突穿死棘之枪', '冷雨狂化库丘林_剜穿鏖杀之枪', '冷雨狂化库丘林_死牙之兽', '冷雨枪兵'], []],
                        冷雨死牙之兽: ['male', '狂', 5, ['冷雨死牙之兽_狂暴', '冷雨死牙之兽_嗜血', '冷雨死牙之兽_变形'], []],
                        冷雨吕布: ['male', '狂', 5, ['冷雨吕布_军神五兵', '冷雨吕布_勇猛', '冷雨吕布_乱世枭雄'], []],
                        冷雨宫本武藏: ['female', '剑', 4, ['冷雨宫本武藏_第五势', '冷雨宫本武藏_天眼', '冷雨宫本武藏_无空', '冷雨宫本武藏_六道五轮'], []],
                        冷雨巴御前: ['female', '弓', 4, ['冷雨鬼种之魔', '冷雨巴御前_乱战之心得', '冷雨巴御前_真言'], []],
                        冷雨伊卡洛斯: ['female', '天', 4, ['冷雨伊卡洛斯_导弹', '冷雨伊卡洛斯_绝对防御圈', '冷雨伊卡洛斯_阿波罗', '冷雨伊卡洛斯_万能卡片1', '冷雨伊卡洛斯_潘多拉'], []],
                        冷雨兰陵王: ['male', '剑', 5, ['冷雨兰陵王_入阵', '冷雨兰陵王_隐美的假面', '冷雨兰陵王_魔性之貌', '冷雨兰陵王_兰陵王入阵曲'], []],
                        冷雨荆轲: ['female', '刺', 4, ['冷雨荆轲_抑制', '冷雨荆轲_图策', '冷雨荆轲_图穷匕见'], []],
                        冷雨阿喀琉斯: ['male', '骑', 5, ['冷雨阿喀琉斯_疾风', '冷雨阿喀琉斯_小世界', '冷雨阿喀琉斯_不凋花'], []],
                        冷雨: ['none', 'shen', 4, ['冷雨_作者', '冷雨_甘霖'], []],
                        冷雨阿塔兰忒: ['female', '弓', 4, ['冷雨阿塔兰忒_诉状箭书', '冷雨阿塔兰忒_神罚的野猪'], []],
                        冷雨神罚的野猪: ['female', '狂', 4, ['冷雨神罚的野猪_闇天之弓', '冷雨神罚的野猪_北斗之七箭', '冷雨神罚的野猪_变化'], []],
                        冷雨清姬: ['female', '狂', 4, ['冷雨清姬_谎言破却', '冷雨清姬_焰色接吻', '冷雨清姬_转身火生三昧'], []],
                        冷雨茨木童子: ['female', '狂', 4, ['冷雨鬼种之魔', '冷雨茨木童子_罗生门大怨起', '冷雨茨木童子_大江山大炎起'], []],
                        冷雨酒吞童子: ['female', '刺', 4, ['冷雨鬼种之魔', '冷雨酒吞童子_果实的酒气', '冷雨酒吞童子_神便鬼毒'], []],
                        冷雨伊丽莎白: ['female', '枪', 4, ['冷雨伊丽莎白_嗜虐的魅力', '冷雨伊丽莎白_拷问技术', '冷雨伊丽莎白_龙吟雷声', '冷雨伊丽莎白_鲜血魔女'], []],
                        冷雨卡米拉: ['female', '刺', 4, ['冷雨卡米拉_沐浴鲜血', '冷雨卡米拉_拷问技术', '冷雨卡米拉_幻想铁处女'], []],
                        冷雨迪昂: ['none', '剑', 5, ['冷雨迪昂_秀丽的容貌', '冷雨迪昂_剑之舞蹈', '冷雨迪昂_豪华绚烂'], []],
                        冷雨赛米拉米斯: ['female', '术', 4, ['冷雨赛米拉米斯_双重召唤', '冷雨赛米拉米斯_庭园建造', '冷雨赛米拉米斯_骄慢王的美酒', '冷雨赛米拉米斯_虚荣的空中庭园'], []],
                        冷雨诸葛孔明: ['male', '术', 5, ['冷雨诸葛孔明_鉴识眼', '冷雨诸葛孔明_石兵八阵', '冷雨诸葛孔明_军师的忠言'], []],
                        冷雨鬼巫女: ['female', '幻', 4, ['冷雨鬼巫女_炼狱', '冷雨鬼巫女_魔神', '冷雨鬼巫女_绝望', '冷雨鬼巫女_永远', '冷雨鬼巫女_概念'], []],
                        冷雨望月千代女: ['female', '刺', 4, ['冷雨望月千代女_咒术', '冷雨望月千代女_大蛇之咒', '冷雨望月千代女_通灵'], []],
                        冷雨八岐大蛇: ['male', '刺', 5, ['冷雨八岐大蛇_魔力缠卷'], []],
                        冷雨美杜莎: ['female', '骑', 4, ['冷雨美杜莎_魔眼', '冷雨美杜莎_自我封印', '冷雨美杜莎_他者封印', '冷雨美杜莎_骑英之缰绳'], []],
                        冷雨艾蕾什基伽尔: ['female', '枪', 4, ['冷雨艾蕾什基伽尔_大王冠', '冷雨艾蕾什基伽尔_冥界佑护', '冷雨艾蕾什基伽尔_冥界审判', '冷雨艾蕾什基伽尔_灵峰踏抱冥府之鞴'], []],
                        冷雨时崎狂三: ['female', '约', 4, ['冷雨时崎狂三_食时之城', '冷雨时崎狂三_一之弹', '冷雨时崎狂三_二之弹', '冷雨时崎狂三_三之弹', '冷雨时崎狂三_四之弹', '冷雨时崎狂三_五之弹', '冷雨时崎狂三_六之弹', '冷雨时崎狂三_七之弹', '冷雨时崎狂三_八之弹', '冷雨时崎狂三_九之弹', '冷雨时崎狂三_十之弹', '冷雨时崎狂三_十一之弹', '冷雨时崎狂三_十二之弹'], []],
                        冷雨时崎狂三分身: ['female', '约', 4, ['冷雨时崎狂三分身_分身嘲讽'], []],
                        冷雨冰结傀儡: ['female', '约', 8, ['冷雨冰结傀儡_护主', '冷雨冰结傀儡_奉献', '冷雨冰结傀儡_冰刺'], []],
                    },
                    skill: {
                        威严满满: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return player.maxHp > 8;
                            },
                            content() {
                                player.loseMaxHp();
                            },
                        },
                        契约之魔烙: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && !current.hasSkill('契约之魔烙_mark');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('契约之魔烙'), function (card, player, target) {
                                        return target != player && !target.hasSkill('契约之魔烙_mark');
                                    })
                                    .set('ai', function (target) {
                                        var num = target.isMinHp() ? 0.5 : 1 + Math.random();
                                        if (get.attitude(_status.event.player, target) < 0) {
                                            num += 0.5;
                                        }
                                        return num;
                                    })
                                    .set('round', event.triggername == 'roundStart');
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addSkill('契约之魔烙_mark');
                                }
                            },
                            subSkill: {
                                mark: {
                                    mark: true,
                                    intro: {
                                        content: '已获得<契>标记',
                                    },
                                },
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        对黑猫的喜爱: {
                            nobracket: true,
                            mod: {
                                maxHandcard(player, num) {
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (get.color(hs[i]) == 'black') {
                                            num++;
                                        }
                                    }
                                    return num;
                                },
                            },
                        },
                        快速: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['快速_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你的攻击距离始终+1</li>';
                                },
                            },
                            content() {
                                player.storage.快速_markcount--;
                                if (player.storage.快速_markcount == 0) {
                                    delete player.storage.快速;
                                    delete player.storage.快速_markcount;
                                    player.removeSkill('快速');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance - 1;
                                        },
                                    },
                                },
                            },
                        },
                        强击: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['强击_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成伤害时,若目标有护甲,此伤害+1</li>';
                                },
                            },
                            content() {
                                player.storage.强击_markcount--;
                                if (player.storage.强击_markcount == 0) {
                                    delete player.storage.强击;
                                    delete player.storage.强击_markcount;
                                    player.removeSkill('强击');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.player.hujia) return false;
                                        return true;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        感电: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['感电_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你每响应1张闪,你可以选择1名角色进行判定,若判定牌为黑色,你对该角色造成1点雷电伤害</li>';
                                },
                            },
                            content() {
                                player.storage.感电_markcount--;
                                if (player.storage.感电_markcount == 0) {
                                    delete player.storage.感电;
                                    delete player.storage.感电_markcount;
                                    player.removeSkill('感电');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'respond',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'shan';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseTarget(get.prompt('感电')).ai = function (target) {
                                            if (target.hasSkill('hongyan')) return 0;
                                            return get.damageEffect(target, _status.event.player, _tatus.event.player, 'thunder');
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            event.target = result.targets[0];
                                            event.target.judge(function (card) {
                                                var suit = card.suit;
                                                if (suit == 'spade') return -2;
                                                if (suit == 'club') return -2;
                                                return 0;
                                            });
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.suit == 'club') {
                                            event.target.damage('thunder');
                                        } else if (result.suit == 'spade') {
                                            event.target.damage('thunder');
                                        }
                                    },
                                    ai: {
                                        useShan: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan')) {
                                                    var hastarget = game.hasPlayer(function (current) {
                                                        return get.attitude(target, current) < 0;
                                                    });
                                                    var be = target.countCards('e', { color: 'black' });
                                                    if (target.countCards('h', 'shan') && be) {
                                                        if (!target.hasSkill('guidao')) return 0;
                                                        return [0, hastarget ? target.countCards('he') / 2 : 0];
                                                    }
                                                    if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                        if (!target.hasSkill('guidao')) return 0;
                                                        return [0, hastarget ? target.countCards('h') / 4 : 0];
                                                    }
                                                    if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                                        return [0, 0];
                                                    }
                                                    if (target.countCards('h') == 0) {
                                                        return [1.5, 0];
                                                    }
                                                    if (target.countCards('h') == 1 && !be) {
                                                        return [1.2, 0];
                                                    }
                                                    if (!target.hasSkill('guidao')) return [1, 0.05];
                                                    return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        祝福: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['祝福_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你击杀1名角色后,你获得2点护甲</li>';
                                },
                            },
                            content() {
                                player.storage._markcount--;
                                if (player.storage.祝福_markcount == 0) {
                                    delete player.storage.祝福;
                                    delete player.storage.祝福_markcount;
                                    player.removeSkill('祝福');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        player.changeHujia(2);
                                    },
                                },
                            },
                        },
                        复仇: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['复仇_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成伤害时,若目标体力值不小于你,此伤害有25%概率+1</li>';
                                },
                            },
                            content() {
                                player.storage.复仇_markcount--;
                                if (player.storage.复仇_markcount == 0) {
                                    delete player.storage.复仇;
                                    delete player.storage.复仇_markcount;
                                    player.removeSkill('复仇');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hp >= player.hp && Math.random() <= 0.25;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        减速: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['减速_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你的防御距离始终+1</li>';
                                },
                            },
                            content() {
                                player.storage.减速_markcount--;
                                if (player.storage.减速_markcount == 0) {
                                    delete player.storage.减速;
                                    delete player.storage.减速_markcount;
                                    player.removeSkill('减速');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return distance + 1;
                                        },
                                    },
                                },
                            },
                        },
                        抗性: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['抗性_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你受到属性伤害时,有25%此伤害-1</li>';
                                },
                            },
                            content() {
                                player.storage.抗性_markcount--;
                                if (player.storage.抗性_markcount == 0) {
                                    delete player.storage.抗性;
                                    delete player.storage抗性_markcount;
                                    player.removeSkill('抗性');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return Math.random() <= 0.25 && event.nature;
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        trigger.num--;
                                    },
                                },
                            },
                        },
                        生命补给: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['生命补给_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成伤害后,有25%概率回复1点体力</li>';
                                },
                            },
                            content() {
                                player.storage.生命补给_markcount--;
                                if (player.storage.生命补给_markcount == 0) {
                                    delete player.storage.生命补给;
                                    delete player.storage.生命补给_markcount;
                                    player.removeSkill('生命补给');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return Math.random() <= 0.25 && event.num > 0;
                                    },
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                        },
                        '生命补给·改': {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['生命补给·改_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你回复体力后,有25%概率获得1点护甲</li>';
                                },
                            },
                            content() {
                                player.storage.生命补给·改_markcount--;
                                if (player.storage.生命补给·改_markcount == 0) {
                                    delete player.storage.生命补给·改;
                                    delete player.storage.生命补给·改_markcount;
                                    player.removeSkill('生命补给·改');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'recoverAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return Math.random() <= 0.25 && event.num != 0;
                                    },
                                    content() {
                                        player.changeHujia();
                                    },
                                },
                            },
                        },
                        能量补给: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['能量补给_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成伤害后,有25%概率摸1张牌</li>';
                                },
                            },
                            content() {
                                player.storage.能量补给_markcount--;
                                if (player.storage.能量补给_markcount == 0) {
                                    delete player.storage.能量补给;
                                    delete player.storage.能量补给_markcount;
                                    player.removeSkill('能量补给');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return Math.random() <= 0.25 && event.num != 0;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        '能量补给·改': {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['能量补给·改_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:若你于弃牌阶段弃置了牌,有25%摸1张牌</li>';
                                },
                            },
                            content() {
                                player.storage.能量补给·改_markcount--;
                                if (player.storage.能量补给·改_markcount == 0) {
                                    delete player.storage.能量补给·改;
                                    delete player.storage.能量补给·改_markcount;
                                    player.removeSkill('能量补给·改');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDiscardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length && Math.random() <= 0.25;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        武器补给: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['武器补给_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成非属性伤害时,有25%概率此伤害+1</li>';
                                },
                            },
                            content() {
                                player.storage.武器补给_markcount--;
                                if (player.storage.武器补给_markcount == 0) {
                                    delete player.storage.武器补给;
                                    delete player.storage.武器补给_markcount;
                                    player.removeSkill('武器补给');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.nature && Math.random() <= 0.25;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        '武器补给·改': {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['武器补给·改_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成非属性伤害后,有25%概率获得1点护甲</li>';
                                },
                            },
                            content() {
                                player.storage.武器补给·改_markcount--;
                                if (player.storage.武器补给·改_markcount == 0) {
                                    delete player.storage.武器补给·改;
                                    delete player.storage.武器补给·改_markcount;
                                    player.removeSkill('武器补给·改');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.nature && event.num > 0 && Math.random() <= 0.25;
                                    },
                                    content() {
                                        player.changeHujia();
                                    },
                                },
                            },
                        },
                        装甲补给: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['装甲补给_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你受到非属性伤害时,有25%概率此伤害-1</li>';
                                },
                            },
                            content() {
                                player.storage.装甲补给_markcount--;
                                if (player.storage.装甲补给_markcount == 0) {
                                    delete player.storage.装甲补给;
                                    delete player.storage.装甲补给_markcount;
                                    player.removeSkill('装甲补给');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return Math.random() <= 0.25 && !event.nature;
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        trigger.num--;
                                    },
                                },
                            },
                        },
                        '装甲补给·改': {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['装甲补给·改_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你受到非属性伤害后,有25%概率获得1点护甲</li>';
                                },
                            },
                            content() {
                                player.storage.装甲补给·改_markcount--;
                                if (player.storage.装甲补给·改_markcount == 0) {
                                    delete player.storage.装甲补给·改;
                                    delete player.storage.装甲补给·改_markcount;
                                    player.removeSkill('装甲补给·改');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.nature && Math.random() <= 0.25 && event.num != 0;
                                    },
                                    content() {
                                        player.changeHujia();
                                    },
                                },
                            },
                        },
                        崩坏能源: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['崩坏能源_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你回复体力时,有25%概率摸一张牌</li>';
                                },
                            },
                            content() {
                                player.storage.崩坏能源_markcount--;
                                if (player.storage.崩坏能源_markcount == 0) {
                                    delete player.storage.崩坏能源;
                                    delete player.storage.崩坏能源_markcount;
                                    player.removeSkill('崩坏能源');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'recoverAfter',
                                    },
                                    filter(event, player) {
                                        return Math.random() <= 0.25 && event.num != 0;
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        黑科技武器: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['黑科技武器_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成伤害时,有25%概率你将武将牌翻面并令此伤害+1</li>';
                                },
                            },
                            content() {
                                player.storage.黑科技武器_markcount--;
                                if (player.storage.黑科技武器_markcount == 0) {
                                    delete player.storage.黑科技武器;
                                    delete player.storage.黑科技武器_markcount;
                                    player.removeSkill('黑科技武器');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return Math.random() <= 0.25;
                                    },
                                    content() {
                                        player.turnOver();
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        黑科技装甲: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['黑科技装甲_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成伤害时,若你有护甲,有25%概率此伤害+1</li>';
                                },
                            },
                            content() {
                                player.storage.黑科技装甲_markcount--;
                                if (player.storage.黑科技装甲_markcount == 0) {
                                    delete player.storage.黑科技装甲;
                                    delete player.storage.黑科技装甲_markcount;
                                    player.removeSkill('黑科技装甲');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.hujia) return false;
                                        return Math.random() <= 0.25;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        精密零件: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['精密零件_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成属性伤害时,有25%概率此伤害+1</li>';
                                },
                            },
                            content() {
                                player.storage.精密零件_markcount--;
                                if (player.storage.精密零件_markcount == 0) {
                                    delete player.storage.精密零件;
                                    delete player.storage.精密零件_markcount;
                                    player.removeSkill('精密零件');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.nature && Math.random() <= 0.25;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        '伏羲·火': {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['伏羲·火_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成非火焰伤害后,有25%概率追加1点火焰伤害</li>';
                                },
                            },
                            content() {
                                player.storage.伏羲·火_markcount--;
                                if (player.storage.伏羲·火_markcount == 0) {
                                    delete player.storage.伏羲·火;
                                    delete player.storage.伏羲·火_markcount;
                                    player.removeSkill('伏羲·火');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.num != 0 && event.player.isAlive() && Math.random() <= 0.25 && event.nature != 'fire';
                                    },
                                    content() {
                                        trigger.player.damage('fire');
                                    },
                                },
                            },
                        },
                        '伏羲·雷': {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['伏羲·雷_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成非雷电伤害后,有25%概率追加1点雷电伤害</li>';
                                },
                            },
                            content() {
                                player.storage.伏羲·雷_markcount--;
                                if (player.storage.伏羲·雷_markcount == 0) {
                                    delete player.storage.伏羲·雷;
                                    delete player.storage.伏羲·雷_markcount;
                                    player.removeSkill('伏羲·雷');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.num != 0 && event.player.isAlive() && Math.random() <= 0.25 && event.nature != 'thunder';
                                    },
                                    content() {
                                        trigger.player.damage('thunder');
                                    },
                                },
                            },
                        },
                        '女娲·星': {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['女娲·星_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你击杀1名角色后,有25%概率令其他角色翻面</li>';
                                },
                            },
                            content() {
                                player.storage.女娲·星_markcount--;
                                if (player.storage.女娲·星_markcount == 0) {
                                    delete player.storage.女娲·星;
                                    delete player.storage.女娲·星_markcount;
                                    player.removeSkill('女娲·星');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return Math.random() <= 0.25;
                                    },
                                    content() {
                                        'step 0';
                                        event.players = get.players(player);
                                        ('step 1');
                                        if (event.players.length) {
                                            var current = event.players.shift();
                                            if (current.isEnemiesOf(player)) {
                                                player.line(current, 'thunder');
                                                current.turnOver();
                                            }
                                            event.redo();
                                        }
                                    },
                                },
                            },
                        },
                        '轩辕·盾': {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['轩辕·盾_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:当你的护甲为你抵挡伤害后,有25%你摸1张牌并回复1点体力</li>';
                                },
                            },
                            content() {
                                player.storage.轩辕·盾_markcount--;
                                if (player.storage.轩辕·盾_markcount == 0) {
                                    delete player.storage.轩辕·盾;
                                    delete player.storage.轩辕·盾_markcount;
                                    player.removeSkill('轩辕·盾');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageZero',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.hujia && Math.random() <= 0.25;
                                    },
                                    content() {
                                        player.recover();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        '神农·草': {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['神农·草_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:当你摸牌时,有25%概率额外摸1张牌</li>';
                                },
                            },
                            content() {
                                player.storage.神农·草_markcount--;
                                if (player.storage.神农·草_markcount == 0) {
                                    delete player.storage.神农·草;
                                    delete player.storage.神农·草_markcount;
                                    player.removeSkill('神农·草');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'drawBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return Math.random() <= 0.25;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        '神农·穗': {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['神农·穗_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你获得牌时,有25%概率摸1张牌</li>';
                                },
                            },
                            content() {
                                player.storage.神农·穗_markcount--;
                                if (player.storage.神农·穗_markcount == 0) {
                                    delete player.storage.神农·穗;
                                    delete player.storage.神农·穗_markcount;
                                    player.removeSkill('神农·穗');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'gainAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return Math.random() <= 0.25;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        '神农·花': {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['神农·花_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你回复体力时,有25%概率额外回复1点体力</li>';
                                },
                            },
                            content() {
                                player.storage.神农·花_markcount--;
                                if (player.storage.神农·花_markcount == 0) {
                                    delete player.storage.神农·花;
                                    delete player.storage.神农·花_markcount;
                                    player.removeSkill('神农·花');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'recoverBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return Math.random() <= 0.25;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        幸运兔耳: {
                            mark: 'card',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: ['幸运兔耳_1'],
                            forced: true,
                            popup: false,
                            nopop: true,
                            intro: {
                                content(storage, player) {
                                    return '<li>已获得buff</li><li>buff效果:你造成伤害时,有10%概率造成4倍伤害</li>';
                                },
                            },
                            content() {
                                player.storage.幸运兔耳_markcount--;
                                if (player.storage.幸运兔耳_markcount == 0) {
                                    delete player.storage.幸运兔耳;
                                    delete player.storage.幸运兔耳_markcount;
                                    player.removeSkill('幸运兔耳');
                                } else {
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return Math.random() <= 0.1;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num = trigger.num * (1 + Math.floor(Math.random() * 4));
                                    },
                                },
                            },
                        },
                        冷雨迦尔纳_顺从死亡效果2: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.changeHujia(-event.player.hujia);
                                game.log(player, '失去了全部护甲');
                            },
                        },
                        冷雨迦尔纳_顺从死亡效果1: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.hujia;
                                },
                                maxHandcard(player, num) {
                                    return num + player.hujia;
                                },
                            },
                        },
                        冷雨莎士比亚_魔力附加: {
                            nobracket: true,
                            group: ['冷雨莎士比亚_魔力附加_1', '冷雨莎士比亚_魔力附加_3', '冷雨莎士比亚_魔力附加_4'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'drawBegin',
                                    },
                                    filter(event, player) {
                                        return event.parent.name != '冷雨莎士比亚_魔力附加_2' && event.parent.name != '冷雨莎士比亚_国王剧场';
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    prompt(event, player) {
                                        return '魔力附加:是否令' + get.translation(event.player) + '额外摸1张牌？';
                                    },
                                    content() {
                                        var mubiao = trigger.player;
                                        player.line(mubiao, 'fire');
                                        trigger.num++;
                                        game.log(trigger.player, '额外摸了1张牌');
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    prompt(event, player) {
                                        return '魔力附加:是否令' + get.translation(event.player) + '额外受到1点伤害？';
                                    },
                                    filter(event, player) {
                                        return event.source && event.source != player;
                                    },
                                    content() {
                                        var mubiao = trigger.source;
                                        player.line(mubiao, 'fire');
                                        trigger.num++;
                                        game.log(trigger.source, '造成的伤害+1');
                                    },
                                },
                                4: {
                                    trigger: {
                                        global: 'recoverBefore',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    prompt(event, player) {
                                        var player = _status.event.player;
                                        return '魔力附加:是否令' + get.translation(event.player) + '额外回复1点体力？';
                                    },
                                    content() {
                                        var mubiao = trigger.player;
                                        player.line(mubiao, 'fire');
                                        trigger.num++;
                                        game.log(trigger.player, '额外回复1点体力');
                                    },
                                },
                            },
                            ai: {
                                expose: 1,
                                threaten: 3,
                            },
                        },
                        冷雨莎士比亚_国王剧场: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !current.hasSkill('冷雨莎士比亚_国王剧场_mark');
                                });
                            },
                            filterTarget(card, player, target) {
                                return !target.hasSkill('冷雨莎士比亚_国王剧场_mark');
                            },
                            content() {
                                if (target.countCards('h') > target.hp) {
                                    target.chooseToDiscard(2, 'he', true);
                                } else {
                                    target.draw(2);
                                }
                                target.addTempSkill('冷雨莎士比亚_国王剧场_mark');
                            },
                            subSkill: {
                                mark: {
                                    marktext: '剧',
                                    mark: true,
                                    intro: {
                                        content: '本回合无法发动',
                                    },
                                },
                            },
                            ai: {
                                order: 7,
                                threaten: 1.5,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h') <= target.hp) {
                                            if (target.countCards('h') <= target.hp) return 1;
                                        } else if (target.countCards('h') > target.hp) {
                                            if (target.countCards('h') > target.hp) return -1;
                                        }
                                    },
                                },
                            },
                        },
                        冷雨鸢一折纸_复仇执念效果: {
                            nobracket: true,
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return get.type(event.card) !== 'equip';
                            },
                            content() {
                                player.chooseToDiscard(true);
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 3,
                            },
                        },
                        冷雨阿斯托尔福_唤起恐慌1: {
                            mark: true,
                            intro: {
                                content: '锁定技,你的摸牌数始终-1',
                            },
                            _priority: 5,
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num--;
                            },
                        },
                        冷雨阿斯托尔福_唤起恐慌2: {
                            mark: true,
                            intro: {
                                content: '锁定技,你造成的伤害始终-1',
                            },
                            _priority: 5,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num--;
                            },
                        },
                        冷雨阿斯托尔福_唤起恐慌3: {
                            mark: true,
                            intro: {
                                content: '锁定技,你受到的伤害始终+1',
                            },
                            _priority: 5,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        冷雨阿斯托尔福_唤起恐慌4: {
                            mark: true,
                            intro: {
                                content: '锁定技,你使用牌时需弃置1张牌',
                            },
                            _priority: 5,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            content() {
                                player.chooseToDiscard(true);
                            },
                        },
                        冷雨御坂美琴_电击之枪: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            init(player) {
                                for (var i of game.players) {
                                    i.storage.冷雨御坂美琴_电击之枪_mark = 0;
                                }
                            },
                            filter(event, player) {
                                return event.nature != 'thunder' && event.num > 0;
                            },
                            prompt: '是否发动技能【电击之枪】',
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨御坂美琴_电击之枪'), function (card, player, target) {
                                    if (target == trigger.player) return false;
                                    return target != player;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    var mubiao = result.targets[0];
                                    player.line(mubiao, 'thunder');
                                    result.targets[0].damage('thunder');
                                    if (result.targets[0] != player) {
                                        result.targets[0].storage.冷雨御坂美琴_电击之枪_mark += 1;
                                        result.targets[0].markSkill('冷雨御坂美琴_电击之枪_mark');
                                    }
                                }
                            },
                            subSkill: {
                                mark: {
                                    marktext: '电',
                                    intro: {
                                        content: 'mark',
                                    },
                                },
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        冷雨御坂美琴_落雷: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 3,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget: true,
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                target.judge(function (card) {
                                    return get.color(card) == 'black' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var mubiao = target;
                                    player.line(mubiao, 'thunder');
                                    target.damage('thunder');
                                    player.draw();
                                } else {
                                    player.draw();
                                }
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        冷雨御坂美琴_电磁充能: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                trigger.cancel();
                                player.recover();
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.tag(card, 'thunderDamage')) {
                                            return [0, 2];
                                        }
                                    },
                                },
                            },
                        },
                        冷雨吉尔伽美什_巴比伦宝藏: {
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            init(player) {
                                player.storage.冷雨吉尔伽美什_巴比伦宝藏 = 0;
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'equip';
                            },
                            content() {
                                player.storage.冷雨吉尔伽美什_巴比伦宝藏++;
                                player.markSkill('冷雨吉尔伽美什_巴比伦宝藏');
                                player.draw();
                            },
                            marktext: '宝',
                            intro: {
                                content: '手牌上限+#',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.冷雨吉尔伽美什_巴比伦宝藏;
                                },
                            },
                            group: '冷雨吉尔伽美什_巴比伦宝藏_宝库',
                            subSkill: {
                                宝库: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (Array.isArray(event.cards)) for (var i of event.cards) {
                                            if (i.original == 'e') return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var num = 0;
                                        if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                            if (i.original == 'e') num += 2;
                                        }
                                        player.draw(num);
                                    },
                                },
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                noe: true,
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip') return [1, 3];
                                    },
                                },
                            },
                        },
                        冷雨吉尔伽美什_黄金律: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return !player.isMaxHandcard();
                            },
                            content() {
                                var num = 0;
                                for (var i of game.players) {
                                    if (i != player) {
                                        num = Math.max(num, i.countCards('h'));
                                    }
                                }
                                var dh = num - player.countCards('h');
                                if (dh > 0) {
                                    player.draw(dh);
                                }
                            },
                        },
                        冷雨吉尔伽美什_维摩那: {
                            nobracket: true,
                            mod: {
                                targetInRange() {
                                    return true;
                                },
                            },
                        },
                        冷雨夏娜_贽殿遮那: {
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && Math.random() <= 0.4;
                            },
                            content() {
                                var mubiao = trigger.player;
                                player.line(mubiao, 'fire');
                                trigger.player.damage('fire');
                            },
                        },
                        冷雨夏娜_天壤之劫火: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp < 1;
                            },
                            derivation: ['冷雨夏娜_贽殿遮那', '冷雨夏娜_夜笠', '冷雨夏娜_火焰之翼'],
                            content() {
                                'step 0';
                                player.$skill('天壤之劫火');
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (player.getEnemies().includes(current)) {
                                        player.line(current, 'fire');
                                        current.damage(1, 'fire')._triggered = null;
                                    }
                                    event.redo();
                                }
                                ('step 2');
                                var num = player.maxHp;
                                player.hp = num;
                                player.update();
                                ('step 3');
                                player.removeSkill('冷雨夏娜_红莲之大太刀');
                                player.removeSkill('冷雨夏娜_审判');
                                player.addSkill('冷雨夏娜_贽殿遮那');
                                player.addSkill('冷雨夏娜_火焰之翼');
                                player.addSkill('冷雨夏娜_夜笠');
                                player.awakenSkill('冷雨夏娜_天壤之劫火');
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨博丽灵梦_梦想封印: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (player.getEnemies().includes(current)) {
                                        player.line(current, 'fire');
                                        current.addTempSkill('fengyin');
                                        current.addTempSkill('冷雨沉默');
                                    }
                                });
                            },
                            ai: {
                                threaten: 2.1,
                            },
                        },
                        冷雨博丽灵梦_香火贿赂: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.player.countCards('he') > 0 && !event.player.hasSkill('冷雨博丽灵梦_香火贿赂_mark');
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                if (trigger.player.countGainableCards(player, 'he')) {
                                    player.gainPlayerCard('he', trigger.player, Math.max(1, player.maxHp - player.hp), true);
                                }
                                ('step 1');
                                trigger.player.addTempSkill('冷雨博丽灵梦_香火贿赂_mark');
                            },
                            subSkill: {
                                mark: {
                                    marktext: '贿',
                                    mark: true,
                                    intro: {
                                        content: '已获得<贿>标记',
                                    },
                                },
                            },
                            ai: {
                                order: 10,
                            },
                        },
                        冷雨博丽灵梦_塞钱箱: {
                            nobracket: true,
                            mod: {
                                maxHandcard(player, num) {
                                    var nh = game.countPlayer(function (current) {
                                        return current.countCards('h') < player.countCards('h');
                                    });
                                    return (num -= nh);
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                var num = game.countPlayer(function (current) {
                                    return current.countCards('h') > player.countCards('h');
                                });
                                trigger.num += num;
                            },
                        },
                        冷雨西莉卡_强化吐息: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                return !target.storage.圣;
                            },
                            content() {
                                target.gainMaxHp();
                                target.recover();
                                target.draw();
                                target.storage.圣 = true;
                                target.mark('圣', {
                                    name: '圣',
                                    content: '已发动',
                                });
                                game.addVideo('mark', target, {
                                    name: '圣',
                                    content: '已发动',
                                    id: '圣',
                                });
                            },
                            ai: {
                                threaten: 2.1,
                                result: {
                                    target(player, target) {
                                        return 1 / target.hp;
                                    },
                                },
                                order: 10,
                                expose: 0.3,
                            },
                        },
                        冷雨上条当麻_顽强的意志: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [1, 2];
                                            if (target.hp == 3) return [1, 1.5];
                                            if (target.hp == 2) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        冷雨上条当麻_不愿放弃的坚持: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            alter: true,
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                if (get.is.altered('冷雨上条当麻_不愿放弃的坚持')) {
                                    trigger.num += Math.ceil((player.maxHp - player.hp) / 2);
                                } else {
                                    trigger.num += Math.floor((player.maxHp - player.hp) / 2);
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 2.5;
                                    if (target.hp == 2) return 1.5;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (target.maxHp <= 3) return;
                                        if (get.tag(card, 'damage')) {
                                            if (target.hp == target.maxHp) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                    },
                                },
                            },
                        },
                        冷雨兰斯洛特_骑士不死于徒手: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            init(player) {
                                player.storage.冷雨兰斯洛特_骑士不死于徒手 = [];
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt('冷雨兰斯洛特_骑士不死于徒手'),
                                    [1, 2],
                                    function (card, player, target) {
                                        return target.countCards('he') > 0 && target != player;
                                    },
                                    function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.current = target;
                                    player.choosePlayerCard(target, true);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.storage.冷雨兰斯洛特_骑士不死于徒手 = player.storage.冷雨兰斯洛特_骑士不死于徒手.concat(result.links);
                                    player.markSkill('冷雨兰斯洛特_骑士不死于徒手');
                                    event.current.lose(result.links, ui.special);
                                    event.current.$give(result.links, player);
                                    event.goto(2);
                                }
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        for (var i = 0; i < storage.length; i++) {
                                            storage[i].discard();
                                        }
                                        player.$throw(storage);
                                        player.storage.冷雨兰斯洛特_骑士不死于徒手.length = 0;
                                    }
                                },
                            },
                            group: '冷雨兰斯洛特_骑士不死于徒手_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.冷雨兰斯洛特_骑士不死于徒手.length >= player.hp;
                                    },
                                    content() {
                                        'step 0';
                                        player.gain(player.storage.冷雨兰斯洛特_骑士不死于徒手.slice(0), 'gain2', 'log');
                                        player.storage.冷雨兰斯洛特_骑士不死于徒手.length = 0;
                                        player.unmarkSkill('冷雨兰斯洛特_骑士不死于徒手');
                                        ('step 1');
                                        player.phaseUse();
                                        ('step 2');
                                        player.getStat().card = {};
                                        player.getStat().skill = {};
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - from.storage.冷雨兰斯洛特_骑士不死于徒手.length;
                                },
                            },
                        },
                        冷雨兰斯洛特_无穷之武炼: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                                player.draw();
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [1, 2];
                                            if (target.hp == 3) return [1, 1.5];
                                            if (target.hp == 2) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        冷雨兰斯洛特_狂化骑士: {
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                return game.hasPlayer(function (current) {
                                    return player.getEnemies().includes(current) && event.player != current;
                                });
                            },
                            content() {
                                var list = game.filterPlayer(function (current) {
                                    return player.getEnemies().includes(current) && trigger.player != current;
                                });
                                if (list.length) {
                                    event.target = list.randomGet();
                                    player.line(event.target, 'fire');
                                    game.log(event.target, '被追加为额外目标');
                                    trigger.targets.push(event.target);
                                    player.draw();
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.maxHp - player.hp + 1;
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!get.zhu(player, 'shouyue')) return false;
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        冷雨开膛手杰克_解体圣母: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.sex == 'female';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        冷雨开膛手杰克_暗黑雾都: {
                            nobracket: true,
                            trigger: {
                                global: 'dying',
                            },
                            notemp: true,
                            init(player) {
                                player.storage.冷雨开膛手杰克_暗黑雾都 = [];
                            },
                            _priority: 12,
                            filter(event, player) {
                                return event.player.hp <= 0 && player != event.player;
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.draw();
                                ('step 1');
                                if (player.countCards('he')) {
                                    player.chooseCard('将' + get.cnNumber(trigger.num) + '张手牌置于武将牌上作为<暗>', trigger.num, true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards && result.cards.length) {
                                    player.lose(result.cards, ui.special);
                                    player.storage.冷雨开膛手杰克_暗黑雾都 = player.storage.冷雨开膛手杰克_暗黑雾都.concat(result.cards);
                                    player.markSkill('冷雨开膛手杰克_暗黑雾都');
                                    game.log(player, '将', result.cards, '置于武将牌上作为<暗>');
                                }
                            },
                            intro: {
                                content: 'cards',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.冷雨开膛手杰克_暗黑雾都.length;
                                },
                            },
                        },
                        冷雨开膛手杰克_雾夜的凶杀: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            content() {
                                if (player.storage.冷雨开膛手杰克_暗黑雾都.length) {
                                    trigger.num = 3 + Math.floor(Math.random() * player.storage.冷雨开膛手杰克_暗黑雾都.length);
                                } else {
                                    trigger.num = 3;
                                }
                            },
                            group: ['冷雨开膛手杰克_雾夜的凶杀_情报抹消', '冷雨开膛手杰克_气息遮断', '冷雨开膛手杰克_狩猎'],
                            subSkill: {
                                情报抹消: {
                                    trigger: {
                                        source: 'dying',
                                    },
                                    forced: true,
                                    content() {
                                        player.turnOver(true);
                                        trigger.player.turnOver(true);
                                    },
                                },
                            },
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.isTurnedOver()) {
                                        return false;
                                    }
                                },
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.storage.冷雨开膛手杰克_暗黑雾都.length <= 3) return 2;
                                    return 5;
                                },
                            },
                        },
                        冷雨开膛手杰克_外科手术: {
                            nobracket: true,
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.recover();
                                player.draw();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        冷雨伊斯坎达尔_征服王: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            check(event, player) {
                                if (game.players.length < 3) return 0;
                            },
                            content() {
                                'step 0';
                                trigger.finish();
                                trigger.untrigger();
                                event.current = player.next;
                                ('step 1');
                                event.current.chooseCard('交给' + get.translation(player) + '1张手牌或令其摸1张牌').ai = function (card) {
                                    if (get.attitude(event.current, player) > 0) {
                                        return -1;
                                    } else {
                                        return 3 - get.value(card);
                                    }
                                };
                                ('step 2');
                                if (result.bool == false) {
                                    event.current.line(player, 'thunder');
                                    game.log(get.translation(event.current) + '让' + get.translation(player) + '摸了1张牌');
                                    player.draw();
                                } else {
                                    player.gain(result.cards[0]);
                                    event.current.$give(1, player);
                                }
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                        },
                        冷雨伊斯坎达尔_神威车轮: {
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature != 'thunder' && Math.random() <= 0.6;
                            },
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (player.getEnemies().includes(current)) {
                                        player.line(current, 'thunder');
                                        current.damage(1, 'thunder');
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨一方通行_反射: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            _priority: -1,
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            forced: true,
                            content() {
                                if (trigger.num == 1) {
                                    trigger.player = trigger.source;
                                } else {
                                    trigger.num--;
                                }
                            },
                        },
                        冷雨一方通行_等离子体: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            check(event) {
                                return event.num <= 6;
                            },
                            prompt: '是否发动技能【等离子体】,展示牌中每有一张非延时锦囊牌便可视为对一名角色使用一张【杀】',
                            content() {
                                'step 0';
                                trigger.untrigger();
                                trigger.finish();
                                event.cards = get.cards(8);
                                player.showCards(event.cards);
                                ('step 1');
                                var num = 0;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (get.type(i) == 'trick') {
                                        num++;
                                    }
                                }
                                if (num > 0) {
                                    var next = player.chooseCardButton('请选择视为【杀】使用的牌', event.cards);
                                    next.ai = function (button) {
                                        if (
                                            game.hasPlayer(function (target) {
                                                return player.canUse('sha', target, false) && get.effect(target, { name: 'sha' }, player, player) > 0;
                                            })
                                        ) {
                                            return 8 - get.value(button.link);
                                        }
                                        return 0;
                                    };
                                    next.filterButton = function (button) {
                                        return get.type(button.link) == 'trick';
                                    };
                                } else {
                                    player.gain(event.cards, 'gain2');
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.cards1 = result.links[0];
                                    player
                                        .chooseTarget('请选择目标', function (card, player, target) {
                                            return player.canUse('sha', target, false);
                                        })
                                        .set('ai', function (target) {
                                            return get.effect(target, { name: 'sha' }, player, player);
                                        });
                                } else {
                                    player.gain(event.cards, 'gain2');
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.targets, [event.cards1], false);
                                    event.cards.remove(event.cards1);
                                    event.goto(1);
                                } else {
                                    player.gain(event.cards, 'gain2');
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.2,
                            },
                        },
                        冷雨雾雨魔理沙_打秋风: {
                            nobracket: true,
                            trigger: {
                                player: 'drawBefore',
                            },
                            filter(event, player) {
                                return event.parent.name != '冷雨雾雨魔理沙_打秋风';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check;
                                var i,
                                    nh = game.countPlayer(function (current) {
                                        return current != player && current.countCards('h') && get.attitude(player, current) <= 0;
                                    });
                                check = nh >= 1;
                                player
                                    .chooseTarget(
                                        get.prompt('冷雨雾雨魔理沙_打秋风'),
                                        [1, trigger.num],
                                        function (card, player, target) {
                                            return target.countCards('h') > 0 && player != target;
                                        },
                                        function (target) {
                                            if (!_status.event.aicheck) return 0;
                                            var att = get.attitude(_status.event.player, target);
                                            if (target.hasSkill('tuntian')) return att / 10;
                                            return 1 - att;
                                        }
                                    )
                                    .set('aicheck', check);
                                ('step 1');
                                if (result.bool) {
                                    player.gainMultiple(result.targets);
                                    trigger.num--;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                ('step 3');
                                if (result.targets.length < 2) {
                                    player.draw();
                                }
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.3,
                            },
                        },
                        冷雨雾雨魔理沙_有借有还: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('he');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('冷雨雾雨魔理沙_有借有还'), function (card, player, target) {
                                        return target != player && target.countCards('he');
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return Math.sqrt(att) / 10;
                                        return 5 - att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.chooseCard('he', true, '借:将一张牌交给' + get.translation(player));
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.target.give(result.cards, player);
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨芙兰朵露_禁忌的游戏: {
                            nobracket: true,
                            enable: 'phaseUse',
                            selectTarget: [1, 3],
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filterCard: true,
                            usable: 1,
                            content() {
                                'step 0';
                                var color = get.color(cards[0]);
                                target.judge(function (card) {
                                    return get.color(card) == color ? 1 : 0;
                                });
                                ('step 1');
                                if (!result.bool) {
                                    var mubiao = target;
                                    player.line(mubiao, 'fire');
                                    target.damage(1);
                                }
                            },
                            ai: {
                                order: 6,
                                threaten: 2,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        '冷雨芙兰朵露_符卡·莱瓦丁': {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 3],
                            filter(event, player) {
                                return player.num('he', { subtype: 'equip1' });
                            },
                            filterCard(card) {
                                return get.subtype(card) == 'equip1';
                            },
                            position: 'he',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                8 - get.value(card);
                            },
                            content() {
                                target.damage('fire');
                            },
                            ai: {
                                threaten: 2.4,
                                order: 6,
                                result: {
                                    target: -2,
                                },
                            },
                        },
                        冷雨芙兰朵露_随意破坏: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return player.getEnemies().includes(current);
                                    })
                                    .sortBySeat();
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.randomGet();
                                    player.line(target, 'fire');
                                    var damage = [1, 2];
                                    target.damage(damage.randomGet())._triggered = null;
                                }
                                ('step 2');
                                player.chooseControl('摸牌', '回血').ai = function () {
                                    if (player.maxHp - player.hp > 1) return '回血';
                                    return '摸牌';
                                };
                                ('step 3');
                                if (result.control == '回血') {
                                    var recover = [1, 2];
                                    player.recover(recover.randomGet());
                                } else {
                                    var draw = [1, 2];
                                    player.draw(draw.randomGet());
                                }
                            },
                        },
                        冷雨吸血鬼: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.chooseDrawRecover(get.prompt('冷雨吸血鬼'));
                                ('step 2');
                                if (result.control != 'cancel2') {
                                    event.num--;
                                    if (event.num > 0) {
                                        event.goto(1);
                                    }
                                }
                            },
                        },
                        冷雨四季映姬_乐园裁判长: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num;
                                if (player.hp > 0) {
                                    num = player.hp;
                                } else {
                                    num = 1;
                                }
                                if (player.getStat().skill.冷雨四季映姬_乐园裁判长 >= num) return false;
                                return true;
                            },
                            filterTarget: true,
                            content() {
                                if (target.countCards('h') > target.hp) {
                                    target.chooseToDiscard(2 - player.hp + player.maxHp, 'he', true);
                                } else {
                                    target.draw(2 + player.maxHp - player.hp);
                                }
                            },
                            ai: {
                                order: 6,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h') <= target.hp) {
                                            if (get.attitude(player, target) > 0) return 8;
                                        } else if (target.countCards('h') > target.hp) {
                                            if (get.attitude(player, target) <= 0) return -1;
                                        }
                                    },
                                },
                                threaten(player, target) {
                                    if (target.hp == 1 || target.countCards('e') >= target.hp) return 2;
                                    if (target.hp == target.maxHp) return 1;
                                    if (target.hp == 2) return 1.5;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (target.maxHp <= 3 && target.countCards('e') < target.hp - 1) return;
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp == target.maxHp) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1 && player == target) return [0, 0];
                                    },
                                },
                            },
                        },
                        冷雨四季映姬_净琉璃之镜: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget() {
                                var player = _status.event.player;
                                return [1, Math.max(1, player.hp)];
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                target.showHandcards();
                                ('step 1');
                                var nh = target.countCards('h', { color: 'black' });
                                if (nh > 0 && nh < 2) {
                                    player.draw();
                                }
                                if (nh > 1 && nh < 3) {
                                    var mubiao = target;
                                    player.line(mubiao, 'water');
                                    target.damage();
                                    player.draw();
                                }
                                if (nh > 2) {
                                    var mubiao = target;
                                    player.line(mubiao, 'fire');
                                    target.damage();
                                    player.draw();
                                    player.recover();
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 9,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨四季映姬_地狱审判长: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            _priority: 2000,
                            forced: true,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                var cards = get.cards();
                                var card = cards[0];
                                player.showCards(card);
                                if (card.suit == 'spade') {
                                    player.gain(card, 'gain2', 'log');
                                } else {
                                    player.gain(card, 'gain2', 'log');
                                    player.recover(1 - player.hp);
                                    player.gainMaxHp();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨博丽灵梦_八方鬼缚阵: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                if (player.isLinked()) return true;
                                for (var i of game.players) {
                                    if (i != player && !i.isLinked() && player.getEnemies().includes(i)) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (player.isLinked()) player.link();
                                game.countPlayer(function (current) {
                                    if (player.getEnemies().includes(current) && !current.isLinked()) {
                                        player.line(current, 'thunder');
                                        current.link();
                                    }
                                });
                                ('step 1');
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return player.getEnemies().includes(current) && current.isLinked();
                                    })
                                    .sortBySeat();
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.randomGet();
                                    player.line(target, 'thunder');
                                    target.damage('thunder');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.num('h', 'shan')) return 1;
                                        var num = 0;
                                        for (var i of game.players) {
                                            if (i.canUse('sha', player) && i.countCards('h') > 1) {
                                                num--;
                                            } else {
                                                num++;
                                            }
                                        }
                                        return num;
                                    },
                                },
                            },
                        },
                        冷雨博丽灵梦_极端幸运: {
                            nobracket: true,
                            group: ['冷雨博丽灵梦_极端幸运_1', '冷雨博丽灵梦_极端幸运_2', '冷雨博丽灵梦_极端幸运_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'recoverBegin',
                                    },
                                    filter(event, player) {
                                        return Math.random() < 0.75;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'judgeBegin',
                                    },
                                    forced: true,
                                    content() {
                                        var panding = ui.cardPile.firstChild;
                                        var enumtc = panding;
                                        var getValue = trigger.judge(panding);
                                        var suitList = ['spade', 'heart', 'club', 'diamond'];
                                        var nameList = ['sha', 'tao', 'wuxie', 'shan'];
                                        for (var n = 0; n < suitList.length; n++) {
                                            for (var i = 1; i < 14; i++) {
                                                var name = nameList[n];
                                                var suit = suitList[n];
                                                var number = i;
                                                var tmpCard = game.createCard(name, suit, number, null);
                                                var keyValue = trigger.judge(tmpCard);
                                                if (keyValue > getValue) {
                                                    getValue = keyValue;
                                                    enumtc = tmpCard;
                                                }
                                            }
                                        }
                                        if (panding != enumtc) {
                                            ui.cardPile.removeChild(panding);
                                            ui.cardPile.insertBefore(enumtc, ui.cardPile.firstChild);
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: ['gainAfter', 'gainBefore', 'damageBegin', 'damageEnd', 'useCard', 'recoverEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isMad();
                                    },
                                    content() {
                                        player.unMad();
                                    },
                                },
                            },
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin', 'loseMaxHpBegin'],
                            },
                            filter(event, player) {
                                return event.num > 0 && Math.random() <= 0.7;
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                threaten: 2,
                            },
                            mod: {
                                targetEnabled(card) {
                                    if (get.type(card) == 'trick' || get.type(card) == 'trick') return false;
                                },
                            },
                        },
                        冷雨五河琴里_灵力暴走: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            _priority: 20,
                            forced: true,
                            filter(event, player) {
                                return player.getStat('damage') >= 3;
                            },
                            content() {
                                'step 0';
                                player.$skill('灵力暴走');
                                trigger.player.judge(function (card) {
                                    return card.suit == 'heart' ? -1 : 1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.recover();
                                    var players = game.filterPlayer(function (current) {
                                        return get.distance(player, current) <= 2 && player != current;
                                    });
                                    players.sort(lib.sort.seat);
                                    var mubiao = players;
                                    player.line(mubiao, 'fire');
                                    for (var i of players) {
                                        i.damage(1, 'fire');
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        冷雨五河琴里_再生能力: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            content() {
                                player.recover();
                                player.draw(2);
                            },
                        },
                        冷雨迪卢木多_破魔的红蔷薇: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardToBefore',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.target;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            _priority: 100,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .discardPlayerCard(trigger.target, get.prompt('冷雨迪卢木多_破魔的红蔷薇', trigger.target))
                                    .set('ai', function (button) {
                                        if (!_status.event.att) return 0;
                                        if (get.position(button.link) == 'e') return get.value(button.link);
                                        return 1;
                                    })
                                    .set('att', get.attitude(player, trigger.target) <= 0);
                                ('step 0');
                                if (!trigger.target.hasSkill('fengyin')) {
                                    trigger.target.addTempSkill('fengyin');
                                }
                            },
                        },
                        冷雨迪卢木多_必灭的黄蔷薇: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.player != player && event.num > 0 && event.player.isAlive();
                            },
                            _priority: 10,
                            content() {
                                var mubiao = trigger.player;
                                player.line(mubiao, 'white');
                                var lose = [1, 2];
                                trigger.player.loseMaxHp(lose.randomGet());
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                            },
                        },
                        冷雨迪卢木多_爱的黑痣: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.source && event.source.sex == 'female' && Math.random() <= 0.6;
                            },
                            forced: true,
                            content() {
                                trigger.num--;
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        '冷雨本条二亚_嗫告篇帙·情报检索': {
                            nobracket: true,
                            srlose: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                if (player.isUnderControl()) {
                                    game.modeSwapPlayer(player);
                                }
                                var cards = get.cards(Math.max(3, game.players.length));
                                event.cards = cards;
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                    const target = event.player;
                                    const att = get.attitude(player, target);
                                    const top = [], bottom = cards;
                                    for (const i of target.getCards('j')) {
                                        const judge = get.judge(i);
                                        bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
                                        if (bottom.length) {
                                            top.push(bottom.shift());
                                        }
                                    }
                                    bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
                                    while (bottom.length) {
                                        top.push(bottom.shift());
                                    }
                                    top.reverse();
                                    for (var i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (var i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                };
                                var chooseButton = function (online, player, cards) {
                                    var event = _status.event;
                                    player = player || event.player;
                                    cards = cards || event.cards;
                                    event.top = [];
                                    event.bottom = [];
                                    event.status = true;
                                    event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌(先选择的在上)', cards);
                                    event.switchToAuto = function () {
                                        event._result = 'ai';
                                        event.dialog.close();
                                        event.control.close();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
                                        var event = _status.event;
                                        if (link == 'ok') {
                                            if (online) {
                                                event._result = {
                                                    top: [],
                                                    bottom: [],
                                                };
                                                for (var i = 0; i < event.top.length; i++) {
                                                    event._result.top.push(event.top[i].link);
                                                }
                                                for (var i = 0; i < event.bottom.length; i++) {
                                                    event._result.bottom.push(event.bottom[i].link);
                                                }
                                            } else {
                                                var i;
                                                for (var i = 0; i < event.top.length; i++) {
                                                    ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                                                }
                                                for (var i = 0; i < event.bottom.length; i++) {
                                                    ui.cardPile.appendChild(event.bottom[i].link);
                                                }
                                                for (var i = 0; i < event.dialog.buttons.length; i++) {
                                                    if (event.dialog.buttons[i].classList.contains('glow') == false && event.dialog.buttons[i].classList.contains('target') == false) ui.cardPile.appendChild(event.dialog.buttons[i].link);
                                                }
                                                player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                                                game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                                            }
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        } else if (link == 'pileTop') {
                                            event.status = true;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                                        } else {
                                            event.status = false;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                                        }
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    event.custom.replace.button = function (link) {
                                        var event = _status.event;
                                        if (link.classList.contains('target')) {
                                            link.classList.remove('target');
                                            event.top.remove(link);
                                        } else if (link.classList.contains('glow')) {
                                            link.classList.remove('glow');
                                            event.bottom.remove(link);
                                        } else if (event.status) {
                                            link.classList.add('target');
                                            event.top.unshift(link);
                                        } else {
                                            link.classList.add('glow');
                                            event.bottom.push(link);
                                        }
                                    };
                                    event.custom.replace.window = function () {
                                        for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                                            _status.event.dialog.buttons[i].classList.remove('target');
                                            _status.event.dialog.buttons[i].classList.remove('glow');
                                            _status.event.top.length = 0;
                                            _status.event.bottom.length = 0;
                                        }
                                    };
                                    game.pause();
                                    game.countChoose();
                                };
                                event.switchToAuto = switchToAuto;
                                if (event.isMine()) {
                                    chooseButton();
                                    event.finish();
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, true, event.player, event.cards);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    event.switchToAuto();
                                    event.finish();
                                }
                                ('step 1');
                                if (event.result == 'ai' || !event.result) {
                                    event.switchToAuto();
                                } else {
                                    var top = event.result.top || [];
                                    var bottom = event.result.bottom || [];
                                    for (var i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (var i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    if (Array.isArray(event.cards)) for (var i of event.cards) {
                                        if (!top.includes(i) && !bottom.includes(i)) {
                                            ui.cardPile.appendChild(i);
                                        }
                                    }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        '冷雨本条二亚_嗫告篇帙·未来记载': {
                            nobracket: true,
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动【嗫告篇帙·未来记载】？', function (card, player, target) {
                                    if (target == player) return target.countCards('hej');
                                    return target.countCards('ej');
                                }).ai = function (target) {
                                    return player == target;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    if (result.targets[0] == player) {
                                        player
                                            .chooseCard('请选择改判牌', 'hej')
                                            .set('ai', function (card) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                var judging = _status.event.judging;
                                                var result = trigger.judge(card) - trigger.judge(judging);
                                                var attitude = get.attitude(player, trigger.player);
                                                if (attitude == 0 || result == 0) return 0;
                                                if (attitude > 0) {
                                                    return result - get.value(card) / 2;
                                                } else {
                                                    return -result - get.value(card) / 2;
                                                }
                                            })
                                            .set('judging', trigger.player.judging[0]);
                                    } else {
                                        player
                                            .choosePlayerCard('请选择改判牌', result.targets[0], 'ej')
                                            .set('ai', function (button) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                var judging = _status.event.judging;
                                                var result = trigger.judge(button) - trigger.judge(judging);
                                                var attitude = get.attitude(player, trigger.player);
                                                if (attitude == 0 || result == 0) return 0;
                                                if (attitude > 0) {
                                                    return result - get.value(button) / 2;
                                                } else {
                                                    return -result - get.value(button) / 2;
                                                }
                                            })
                                            .set('judging', trigger.player.judging[0]);
                                    }
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.cardx = result.cards[0] || result.links[0];
                                    event.target.lose(event.cardx);
                                    player.respond(event.cardx, 'highlight');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    if (trigger.player.judging[0].clone) {
                                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                        game.broadcast(function (card) {
                                            if (card.clone) {
                                                card.clone.classList.remove('thrownhighlight');
                                            }
                                        }, trigger.player.judging[0]);
                                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                    }
                                    ui.discardPile.appendChild(trigger.player.judging[0]);
                                    trigger.player.judging[0] = event.cardx;
                                    if (!get.owner(event.cardx, 'judge')) {
                                        trigger.position.appendChild(event.cardx);
                                    }
                                    game.log(trigger.player, '的判定牌改为', event.cardx);
                                }
                            },
                            ai: {
                                tag: {
                                    rejudge: 9,
                                },
                            },
                        },
                        '冷雨本条二亚_神蚀篇帙·恶魔种子': {
                            nobracket: true,
                            srlose: true,
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                                source: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                event.suit = [];
                                event.cards = [];
                                ('step 1');
                                event.cards2 = get.cards();
                                var card = event.cards2[0];
                                if (card.clone) {
                                    card.clone.classList.add('thrownhighlight');
                                    game.addVideo('highlightnode', player, get.cardInfo(card));
                                }
                                event.node = trigger.player.$throwordered(card.copy(), true);
                                event.node.classList.add('thrownhighlight');
                                ui.arena.classList.add('thrownhighlight');
                                if (!event.suit.includes(event.cards2.suit)) event.suit.push(event.cards2.suit);
                                if (event.suit.length <= 2) {
                                    event.cards = event.cards.concat(event.cards2);
                                    event.redo();
                                } else {
                                    event.cards1 = event.cards;
                                    event.cards1 = event.cards1.concat(event.cards2[0]);
                                    // player.showCards(event.cards1);
                                    ui.discardPile.appendChild(event.cards2[0]);
                                }
                                ('step 2');
                                ui.arena.classList.remove('thrownhighlight');
                                player.gain(event.cards);
                                if (event.cards.length) {
                                    player.$gain2(event.cards);
                                }
                                ui.clear();
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            var num = 1;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                } else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (target.hp >= 4) return [1, num * 2];
                                            if (target.hp == 3) return [1, num * 1.5];
                                            if (target.hp == 2) return [1, num * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        //结束阶段,你可以选择任意名攻击范围内含有你的角色(包括你),弃置这些角色各1张牌并令其摸1张牌(无牌则不弃),若如此做,你摸X张牌(X为其中手牌数大于你的角色数与你已损失体力值之和)
                        冷雨键山雏_厄神大人的生理节律: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return get.distance(current, player, 'attack') <= 1;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨键山雏_厄神大人的生理节律'), [1, Infinity], function (card, player, target) {
                                        if (target == player) return true;
                                        return get.distance(target, player, 'attack') <= 1;
                                    })
                                    .set('ai', function (target) {
                                        return 1;
                                    });//QQQ
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets.slice(0).sortBySeat();
                                    event.list = event.targets.slice(0);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    if (target.countCards('he')) {
                                        player.discardPlayerCard(target, 'he', true);
                                    }
                                    target.draw();
                                    event.redo();
                                }
                                ('step 3');
                                var num = 0;
                                var target = get.player;
                                if (player) {
                                    var nh = player.countCards('h');
                                    for (var i = 0; i < event.list.length; i++) {
                                        if (event.list[i].countCards('h') > nh) {
                                            num++;
                                        }
                                    }
                                    if (num >= 0) {
                                        player.draw(num + player.maxHp - player.hp);
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨键山雏_流放人偶: {
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.color(event.card) == 'black';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨键山雏_流放人偶'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noturn')) return 0;
                                    var player = _status.event.player;
                                    if (get.attitude(_status.event.player, target) == 0) return 0;
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
                                        if (player.maxHp - player.hp < 3) return -1;
                                        return 100 - target.countCards('h');
                                    } else {
                                        if (target.classList.contains('turnedover')) return -1;
                                        if (player.maxHp - player.hp >= 3) return -1;
                                        return 1 + target.countCards('h');
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].turnOver();
                                    result.targets[0].draw(2);
                                }
                            },
                            ai: {
                                respond: true,
                                effect: {
                                    player(card) {
                                        if (get.color(card) == 'black') {
                                            return [1, 2];
                                        }
                                    },
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (target.hp <= 1) return;
                                            if (!target.hasFriend()) return;
                                            var hastarget = false;
                                            var turnfriend = false;
                                            var players = game.filterPlayer();
                                            for (var i of players) {
                                                if (get.attitude(target, i) < 0 && !i.isTurnedOver()) {
                                                    hastarget = true;
                                                }
                                                if (get.attitude(target, i) > 0 && i.isTurnedOver()) {
                                                    hastarget = true;
                                                    turnfriend = true;
                                                }
                                            }
                                            if (get.attitude(player, target) > 0 && !hastarget) return;
                                            if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                                            if (target.hp > 1) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        冷雨键山雏_痛苦之流: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.isTurnedOver();
                                });
                            },
                            //出牌阶段结束时,你可以令所有已翻面角色流失1点体力
                            async content(event, trigger, player) {//QQQ
                                for (var i of game.players.filter((q) => q.isTurnedOver())) {
                                    i.loseHp();
                                }
                            },
                        },
                        冷雨库丘林_突穿死翔之枪: {
                            nobracket: true,
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] = 2;
                                },
                            },
                        },
                        冷雨库丘林_战斗续行: {
                            nobracket: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && player.storage.冷雨库丘林_原初的十八卢恩 >= 3) return num + player.maxHp - player.hp;
                                },
                            },
                        },
                        冷雨库丘林_刺穿死荆之枪: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.冷雨库丘林_原初的十八卢恩 >= 4 && Math.random() <= 0.7;
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        冷雨库丘林_心脏因果律: {
                            nobracket: true,
                            forced: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.storage.冷雨库丘林_原初的十八卢恩 >= 5 && Math.random() <= 0.7 && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        冷雨迪米乌哥斯_向坟墓的统治者献上忠言: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.冷雨迪米乌哥斯_炎狱造物主 > 0;
                            },
                            filterTarget: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨迪米乌哥斯_向坟墓的统治者献上忠言')).set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var nh = player.storage.冷雨迪米乌哥斯_炎狱造物主;
                                event.target.draw(nh);
                                if (event.target != player) {
                                    player.draw(2);
                                }
                                player.storage.冷雨迪米乌哥斯_炎狱造物主 -= nh;
                            },
                            ai: {
                                wuxie() {
                                    return 0;
                                },
                                basic: {
                                    useful: 3,
                                    value: 3,
                                    order: 5,
                                },
                                result: {
                                    target(player, target) {
                                        var hs = target.getCards('h');
                                        if (hs.length <= 1) {
                                            if (target == player && hs[0].name == 'yiyi') {
                                                return 0;
                                            }
                                            return 0.3;
                                        }
                                        return Math.sqrt(target.countCards('he'));
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                    norepeat: 1,
                                },
                            },
                        },
                        冷雨迪米乌哥斯_恶魔军师: {
                            nobracket: true,
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent(2).name != '冷雨迪米乌哥斯_恶魔军师';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        冷雨帕秋莉_体弱的魔法使: {
                            nobracket: true,
                            group: ['冷雨帕秋莉_体弱的魔法使_1', '冷雨帕秋莉_体弱的魔法使_2', '冷雨帕秋莉_体弱的魔法使_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    init(player) {
                                        player.storage.冷雨帕秋莉_体弱的魔法使 = 0;
                                    },
                                    popup: false,
                                    marktext: '弱',
                                    mark: true,
                                    intro: {
                                        content: '总共能使用#张牌',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    content() {
                                        player.storage.冷雨帕秋莉_体弱的魔法使 += 6;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return player.storage.冷雨帕秋莉_体弱的魔法使 > 0;
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        if (player.storage.冷雨帕秋莉_体弱的魔法使 > 1) {
                                            player.storage.冷雨帕秋莉_体弱的魔法使 -= 1;
                                        } else {
                                            player.storage.冷雨帕秋莉_体弱的魔法使 -= 1;
                                            player.addTempSkill('冷雨沉默');
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.storage.冷雨帕秋莉_体弱的魔法使 > 0;
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        var nh = player.storage.冷雨帕秋莉_体弱的魔法使;
                                        player.storage.冷雨帕秋莉_体弱的魔法使 -= nh;
                                    },
                                },
                            },
                        },
                        冷雨帕秋莉_病弱之躯: {
                            nobracket: true,
                            group: ['冷雨帕秋莉_病弱之躯_1', '冷雨帕秋莉_病弱之躯_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    init(player) {
                                        player.storage.冷雨帕秋莉_病弱之躯 = 0;
                                    },
                                    mark: true,
                                    popup: false,
                                    intro: {
                                        content: '已累计造成#次伤害',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase != player) return false;
                                        return event.num > 0;
                                    },
                                    content() {
                                        if (player.storage.冷雨帕秋莉_病弱之躯 < 4) {
                                            player.storage.冷雨帕秋莉_病弱之躯 += 1;
                                        } else {
                                            player.loseHp();
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.storage.冷雨帕秋莉_病弱之躯 > 0;
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.冷雨帕秋莉_病弱之躯 -= player.storage.冷雨帕秋莉_病弱之躯;
                                    },
                                },
                            },
                        },
                        冷雨帕秋莉_金耀: {
                            nobracket: true,
                            init(player) {
                                player.storage.冷雨帕秋莉_金耀 = 0;
                            },
                            mark: true,
                            intro: {
                                content: '已累计摸#次牌',
                            },
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            popup: false,
                            _priority: 5,
                            content() {
                                if (player.storage.冷雨帕秋莉_金耀 < 2) {
                                    player.storage.冷雨帕秋莉_金耀++;
                                } else {
                                    trigger.num++;
                                    player.storage.冷雨帕秋莉_金耀 = 0;
                                }
                            },
                        },
                        冷雨帕秋莉_木耀: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨帕秋莉_木耀')).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) > 0) {
                                        return get.recoverEffect(target, player, player) + 1;
                                    }
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.judge(function (card) {
                                        if (target.hp == target.maxHp) {
                                            if (get.color(card) == 'red') return -1;
                                        }
                                        if (get.color(card) == 'red') return 1;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.color) {
                                    if (result.color == 'red') {
                                        if (event.target.hp <= event.target.maxHp) event.target.gainMaxHp();
                                        event.target.recover();
                                    } else {
                                        event.target.draw(2);
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        冷雨帕秋莉_水耀: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                switch (get.color(result.card)) {
                                    case 'black':
                                        trigger.player.chooseToDiscard(true);
                                        break;
                                    case 'red':
                                        trigger.player.turnOver(true);
                                        break;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        冷雨帕秋莉_火耀: {
                            nobracket: true,
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return card.name == 'sha' && !card.nature;
                            },
                            viewAs: {
                                name: 'sha',
                                nature: 'fire',
                                suit: 'spade',
                                number: 10,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 10, name: 'sha', cardid: '2314122386', clone: { name: 'sha', suit: 'spade', number: 10, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, cardid: '90047351632', _transitionEnded: true, timeout: 8501 }, timeout: 2905, original: 'h' }],
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 0.1;
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                            if (get.attitude(player, target) > 0) {
                                                return -6;
                                            } else {
                                                return -3;
                                            }
                                        }
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                },
                            },
                        },
                        冷雨帕秋莉_土耀: {
                            nobracket: true,
                            init(player) {
                                player.storage.冷雨帕秋莉_土耀 = 0;
                            },
                            mark: true,
                            intro: {
                                content: '已累计受到#次伤害',
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                if (player.storage.冷雨帕秋莉_土耀 == 2) return event.num > 0;
                                return true;
                            },
                            forced: true,
                            popup: false,
                            content() {
                                if (player.storage.冷雨帕秋莉_土耀 < 2) {
                                    player.storage.冷雨帕秋莉_土耀++;
                                } else if (trigger.num > 0) {
                                    trigger.num--;
                                    player.storage.冷雨帕秋莉_土耀 = 0;
                                }
                            },
                        },
                        冷雨帕秋莉_日耀: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.nature != 'fire' && event.num > 0;
                            },
                            content() {
                                trigger.nature = 'fire';
                            },
                            ai: {
                                order: 6,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 1;
                                        return -1;
                                    },
                                },
                            },
                        },
                        冷雨帕秋莉_月耀: {
                            nobracket: true,
                            init(player) {
                                player.storage.冷雨帕秋莉_月耀 = 0;
                            },
                            mark: true,
                            intro: {
                                content: '已累计回复#次体力',
                            },
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            popup: false,
                            _priority: 5,
                            content() {
                                if (player.storage.冷雨帕秋莉_月耀 < 2) {
                                    player.storage.冷雨帕秋莉_月耀++;
                                } else {
                                    trigger.num++;
                                    player.storage.冷雨帕秋莉_月耀 = 0;
                                }
                            },
                        },
                        '冷雨西行寺幽幽子_死符·惊梦': {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 2],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                target.damage();
                                target.recover();
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('maixie')) return 0.5;
                                        if (target.hp < 2) return 0.5;
                                        return 0;
                                    },
                                },
                            },
                        },
                        '冷雨西行寺幽幽子_死蝶·华胥的永眠': {
                            nobracket: true,
                            forced: true,
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                return Math.random() <= 0.5 && event.player != player;
                            },
                            _priority: 20,
                            content() {
                                trigger.player.die();
                            },
                        },
                        '冷雨西行寺幽幽子_幽蝶·幽魂聚地': {
                            nobracket: true,
                            _priority: 20,
                            gainable: true,
                            group: ['冷雨西行寺幽幽子_幽蝶·幽魂聚地_discard', '冷雨西行寺幽幽子_幽蝶·幽魂聚地_judge'],
                            subSkill: {
                                discard: {
                                    trigger: {
                                        global: 'discardAfter',
                                    },
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        if (Array.isArray(event.cards)) for (var i of event.cards) {
                                            if (i.suit == 'heart' && get.position(i) == 'd') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    check(event, player) {
                                        if (Array.isArray(event.cards)) for (var i of event.cards) {
                                            if (i.suit == 'heart' && get.position(i) == 'd') {
                                                if (i.name == 'du') return false;
                                            }
                                        }
                                        return true;
                                    },
                                    content() {
                                        var cards = [];
                                        if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                            if (i.suit == 'heart' && get.position(i) == 'd') {
                                                cards.push(i);
                                            }
                                        }
                                        if (cards.length) {
                                            player.gain(cards, 'log');
                                            player.$gain2(cards);
                                        }
                                    },
                                },
                                judge: {
                                    trigger: {
                                        global: 'judgeAfter',
                                    },
                                    check(event, player) {
                                        return event.result.card.name != 'du';
                                    },
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        if (event.result.card.parentNode.id != 'discardPile') return false;
                                        return event.result.card.suit == 'heart';
                                    },
                                    content() {
                                        player.gain(trigger.result.card, 'log');
                                        player.$gain2(trigger.result.card);
                                    },
                                },
                            },
                        },
                        '冷雨西行寺幽幽子_蝶符·凤蝶纹的死枪': {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨西行寺幽幽子_蝶符·凤蝶纹的死枪'), function (card, player, target) {
                                    return player != target && target.isMinHp();
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage();
                                }
                            },
                        },
                        '冷雨西行寺幽幽子_樱符·西行樱吹雪': {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length;
                            },
                            content() {
                                player.gainMaxHp();
                                player.recover();
                                player.draw();
                            },
                        },
                        冷雨夏娜_火焰之翼: {
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨夏娜_火焰之翼'), function (card, player, target) {
                                    return trigger.player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire') + 0.1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        return get.color(card) == 'red' ? 0 : -1;
                                    });
                                    trigger.player.line(event.target, 'fire');
                                } else {
                                    event.finish;
                                }
                                ('step 2');
                                if (result.color == 'black') {
                                    event.target.damage('fire');
                                }
                            },
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - from.hp + 1;
                                },
                            },
                        },
                        冷雨夏娜_夜笠: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore'],
                            },
                            forced: true,
                            _priority: 10,
                            filter(event, player) {
                                return event.num > 1;
                            },
                            content() {
                                player.draw(trigger.num);
                            },
                        },
                        冷雨夏娜_红莲之大太刀: {
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && Math.random() <= 0.7 && event.nature != 'fire';
                            },
                            content() {
                                var mubiao = trigger.player;
                                player.line(mubiao, 'fire');
                                trigger.player.damage('fire');
                            },
                        },
                        冷雨夏娜_审判: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var hs = target.getCards('h');
                                player.gain(hs, target);
                                target.$giveAuto(hs, player);
                                event.hs = hs;
                                ('step 1');
                                var damage = target.hp >= player.hp && get.damageEffect(target, player, player) > 0;
                                var hs = event.hs;
                                if (damage && target.hp > 1) {
                                    for (var i = 0; i < hs.length; i++) {
                                        if (get.value(hs[i], player, 'raw') >= 8) {
                                            damage = false;
                                            break;
                                        }
                                    }
                                }
                                player.chooseCard(hs.length, true, '选择还给' + get.translation(target) + '的牌').ai = function (card) {
                                    if (damage) {
                                        return hs.includes(card) ? 1 : 0;
                                    } else {
                                        return -get.value(card, player, 'raw');
                                    }
                                };
                                ('step 2');
                                target.gain(result.cards, player);
                                player.$giveAuto(result.cards, target);
                                event.hs2 = result.cards;
                                if (player.hp > target.hp) {
                                    event.finish();
                                }
                                ('step 3');
                                for (var i = 0; i < event.hs2.length; i++) {
                                    if (!event.hs.includes(event.hs2[i])) return;
                                }
                                player.line(target);
                                target.damage();
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target(player, target) {
                                        return -Math.sqrt(target.countCards('h'));
                                    },
                                },
                            },
                        },
                        '冷雨迦尔纳_日轮啊·化作甲胄': {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return !player.hujia && !player.isMaxHp();
                            },
                            content() {
                                var num = game.countPlayer(function (current) {
                                    return current.hp > player.hp;
                                });
                                if (num > 0) {
                                    player.changeHujia(num);
                                }
                            },
                        },
                        '冷雨迦尔纳_日轮啊·顺从死亡': {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                if (!player.hujia) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = player.hujia;
                                ('step 1');
                                player.draw(event.num);
                                ('step 2');
                                player.addTempSkill('冷雨迦尔纳_顺从死亡效果1');
                                player.addTempSkill('冷雨迦尔纳_顺从死亡效果2');
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                            },
                        },
                        '冷雨迦尔纳_梵天啊·诅咒吾身': {
                            nobracket: true,
                            forced: true,
                            trigger: {
                                player: 'recoverAfter',
                            },
                            content() {
                                player.gainMaxHp(trigger.num);
                            },
                            group: '冷雨迦尔纳_梵天啊·诅咒吾身_梵天',
                            subSkill: {
                                梵天: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.maxHp - player.hp > 0;
                                    },
                                    content() {
                                        var num = player.maxHp - player.hp;
                                        if (num > 0) {
                                            player.gainMaxHp(num);
                                        }
                                    },
                                },
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - (from.maxHp - from.hp);
                                },
                            },
                        },
                        冷雨迦尔纳_贫者之见识: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('j') > 0;
                            },
                            content() {
                                player.gain(player.getCards('j'), 'gain2', 'log');
                            },
                            mod: {
                                targetEnabled(card) {
                                    if (get.type(card) == 'trick') return false;
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'delay') return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        '冷雨迦尔纳_梵天啊·覆盖大地': {
                            nobracket: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp >= event.target.hp;
                            },
                            content() {
                                trigger.directHit = true;
                            },
                            group: '冷雨迦尔纳_梵天啊·覆盖大地_以梵天',
                            subSkill: {
                                以梵天: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.hp >= event.player.hp && event.player.hujia;
                                    },
                                    content() {
                                        trigger.num += trigger.player.hujia;
                                    },
                                },
                            },
                        },
                        冷雨枪兵: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        冷雨御坂美琴_超电磁炮: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(player) {
                                var num = 0;
                                for (var i of game.players) {
                                    num += i.storage.冷雨御坂美琴_电击之枪_mark;
                                }
                                if (num >= 1) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                for (var i of game.players) {
                                    if (i.storage.冷雨御坂美琴_电击之枪_mark) {
                                        player.line(i, 'thunder');
                                        i.damage('thunder');
                                    }
                                }
                                ('step 1');
                                var num = 0;
                                for (var i of game.players) {
                                    if (i.storage.冷雨御坂美琴_电击之枪_mark) {
                                        player.line(i, 'thunder');
                                    }
                                    num += i.storage.冷雨御坂美琴_电击之枪_mark;
                                    i.unmarkSkill('冷雨御坂美琴_电击之枪_mark');
                                    i.storage.冷雨御坂美琴_电击之枪_mark = 0;
                                }
                                player.draw(num);
                                if (num >= player.hp) {
                                    player.recover();
                                }
                            },
                        },
                        '冷雨兰斯洛特_骑士不死于徒手·改': {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            init(player) {
                                player.storage.冷雨兰斯洛特_骑士不死于徒手·改 = [];
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt('冷雨兰斯洛特_骑士不死于徒手·改'),
                                    [1, player.maxHp - player.hp],
                                    function (card, player, target) {
                                        return target.countCards('he') > 0 && target != player;
                                    },
                                    function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.current = target;
                                    player.choosePlayerCard(target, true);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.storage.冷雨兰斯洛特_骑士不死于徒手·改 = player.storage.冷雨兰斯洛特_骑士不死于徒手·改.concat(result.links);
                                    player.markSkill('冷雨兰斯洛特_骑士不死于徒手·改');
                                    event.current.lose(result.links, ui.special);
                                    event.current.$give(result.links, player);
                                    event.goto(2);
                                }
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        for (var i = 0; i < storage.length; i++) {
                                            storage[i].discard();
                                        }
                                        player.$throw(storage);
                                        player.storage.冷雨骑士不死于徒手·改.length = 0;
                                    }
                                },
                            },
                            group: '冷雨兰斯洛特_骑士不死于徒手·改_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.冷雨兰斯洛特_骑士不死于徒手·改.length >= player.hp;
                                    },
                                    content() {
                                        'step 0';
                                        player.gain(player.storage.冷雨兰斯洛特_骑士不死于徒手·改.slice(0), 'gain2', 'log');
                                        player.storage.冷雨兰斯洛特_骑士不死于徒手·改.length = 0;
                                        player.unmarkSkill('冷雨兰斯洛特_骑士不死于徒手·改');
                                        ('step 1');
                                        player.phaseUse();
                                        ('step 2');
                                        player.getStat().card = {};
                                        player.getStat().skill = {};
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - from.storage.冷雨兰斯洛特_骑士不死于徒手·改.length;
                                },
                            },
                        },
                        '冷雨兰斯洛特_无穷之武炼·改': {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.draw();
                                ('step 1');
                                if (player.isMinHp() && Math.random() <= 0.5) {
                                    player.recover();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [1, 2];
                                            if (target.hp == 3) return [1, 1.5];
                                            if (target.hp == 2) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        冷雨兰斯洛特_无毁的湖光: {
                            nobracket: true,
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.awakenSkill('冷雨兰斯洛特_无毁的湖光');
                                player.changeHujia(player.maxHp - player.hp);
                                ('step 1');
                                if (!player.hasSkill('冷雨兰斯洛特_骑士不死于徒手·改')) {
                                    player.removeSkill('冷雨兰斯洛特_骑士不死于徒手');
                                    player.addSkill('冷雨兰斯洛特_骑士不死于徒手·改');
                                    game.log(player, '宝具解放,技能属性增强');
                                }
                                ('step 2');
                                if (!player.hasSkill('冷雨兰斯洛特_无穷之武炼·改')) {
                                    player.removeSkill('冷雨兰斯洛特_无穷之武炼');
                                    player.addSkill('冷雨兰斯洛特_无穷之武炼·改');
                                    player.popup('宝具解放');
                                }
                            },
                        },
                        冷雨库丘林_避失之加护: {
                            nobracket: true,
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            filter(event, player) {
                                return !event.iwhile;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('点数+3', '点数-3', 'cancel2')
                                    .set('prompt', get.prompt('冷雨库丘林_避失之加护'))
                                    .set('ai', function () {
                                        if (_status.event.small) return 1;
                                        else return 0;
                                    })
                                    .set('small', trigger.small);
                                ('step 1');
                                if (result.index != 2) {
                                    if (result.index == 0) {
                                        game.log(player, '拼点牌点数+3');
                                        if (player == trigger.player) {
                                            trigger.num1 += 3;
                                        } else {
                                            trigger.num2 += 3;
                                        }
                                    } else {
                                        game.log(player, '拼点牌点数-3');
                                        if (player == trigger.player) {
                                            trigger.num1 -= 3;
                                        } else {
                                            trigger.num2 -= 3;
                                        }
                                    }
                                }
                            },
                        },
                        冷雨伊斯坎达尔_雷之征服者: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source != player && Math.random() <= 0.4;
                            },
                            forced: true,
                            content() {
                                var mubiao = trigger.source;
                                player.line(mubiao, 'thunder');
                                trigger.source.link();
                                trigger.source.damage('thunder');
                            },
                            group: '冷雨伊斯坎达尔_雷之征服者_Ex',
                            subSkill: {
                                Ex: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.nature == 'thunder';
                                    },
                                    content() {
                                        player.gainMaxHp();
                                    },
                                },
                            },
                        },
                        冷雨伊斯坎达尔_王之军势: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return !player.storage.冷雨伊斯坎达尔_王之军势 && player.hp < 2;
                            },
                            derivation: '冷雨伊斯坎达尔_遥远的蹂躏制霸',
                            forced: true,
                            _priority: 300,
                            content() {
                                'step 0';
                                var num = game.countPlayer();
                                player.changeHujia(num);
                                ('step 1');
                                if (player.countCards('h') < player.maxHp) {
                                    player.draw(player.maxHp - player.countCards('h'));
                                } else {
                                    player.recover();
                                }
                                ('step 2');
                                player.$skill('王之军势');
                                player.addSkill('冷雨伊斯坎达尔_遥远的蹂躏制霸');
                                player.awakenSkill('冷雨伊斯坎达尔_王之军势');
                                player.storage.冷雨伊斯坎达尔_王之军势 = true;
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                        },
                        冷雨伊斯坎达尔_遥远的蹂躏制霸: {
                            nobracket: true,
                            trigger: {
                                player: 'shaMiss',
                            },
                            _priority: -1,
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            content() {
                                var mubiao = trigger.target;
                                player.line(mubiao, 'thunder');
                                trigger.target.damage('thunder');
                            },
                            ai: {
                                threaten: 2,
                                effect: {
                                    target(card, player) {
                                        if (card.name == 'guashi') return -Infinity;
                                    },
                                },
                            },
                        },
                        冷雨开膛手杰克_气息遮断: {
                            nobracket: true,
                            trigger: {
                                player: 'turnOverAfter',
                            },
                            filter(event, player) {
                                return !player.isTurnedOver();
                            },
                            forced: true,
                            content() {
                                player.changeHujia(3);
                            },
                        },
                        冷雨开膛手杰克_狩猎: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.hujia;
                            },
                            forced: true,
                            content() {
                                player.changeHujia(-event.player.hujia);
                            },
                        },
                        冷雨鸢一折纸_复仇执念: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                var num = game.countPlayer();
                                return num > 3;
                            },
                            content() {
                                player.draw(game.countPlayer());
                                player.addTempSkill('冷雨鸢一折纸_复仇执念效果');
                            },
                        },
                        冷雨鸢一折纸_变身: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            _priority: 500,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.$skill('神威灵装·一番');
                                player.discard(player.getCards('j'));
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                var hp = 4;
                                var maxHp = player.maxHp;
                                player.init('冷雨绝灭天使');
                                player.hp = hp;
                                player.maxHp = maxHp;
                                player.changeHujia(maxHp);
                                player.update();
                                player.awakenSkill('冷雨鸢一折纸_变身');
                                game.log(player, '<span style="color: red">变身为 绝灭天使</span>');
                            },
                        },
                        冷雨绝灭天使_羽翼: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            filter(event, player) {
                                return event.num != 0;
                            },
                            alter: true,
                            content() {
                                player.changeHujia(Math.abs(trigger.num));
                            },
                            group: ['冷雨绝灭天使_羽翼_1', '冷雨绝灭天使_羽翼_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.gainMaxHp();
                                        player.recover();
                                        ('step 1');
                                        player.draw(player.maxHp - player.countCards('h'));
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.maxHp - player.hp != 0;
                                    },
                                    forced: true,
                                    content() {
                                        var num = player.maxHp - player.hp;
                                        player.changeHujia(num);
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨绝灭天使_日轮: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 1;
                            },
                            check(event, player) {
                                var active = 0;
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (!i.isOut()) {
                                        if (get.attitude(player, i) > 0) {
                                            if (get.distance(player, i, 'attack') <= 1) {
                                                active--;
                                                if (i.hp > 1) active += 0.5;
                                            }
                                        } else if (get.attitude(player, i) < 0) {
                                            if (get.distance(player, i, 'attack') <= 1) {
                                                active++;
                                                if (i.hp <= 1) active += 0.5;
                                            }
                                        }
                                    }
                                }
                                if (active > 0) return 1;
                                return 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(2, true);
                                ('step 1');
                                var targets = [];
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (!i.isOut()) {
                                        if (get.distance(player, i, 'attack') <= 1) {
                                            targets.push(i);
                                        }
                                    }
                                }
                                for (var i = 0; i < targets.length; i++) {
                                    var mubiao = targets[i];
                                    player.line(mubiao, 'thunder');
                                    targets[i].damage();
                                }
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                    useful: 1,
                                    value: 5,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        冷雨绝灭天使_光剑: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            filter(event, player) {
                                return player.hujia;
                            },
                            content() {
                                'step 0';
                                event.num = player.hujia;
                                ('step 1');
                                if (event.num > 0) {
                                    player.useCard({ name: 'sha', nature: ['fire', 'thunder'].randomGet() }, target, false);
                                }
                                ('step 2');
                                event.num--;
                                if (event.num > 0) {
                                    player.chooseBool('是否继续发动？');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨绝灭天使_天翼: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (_status.currentPhase == from) {
                                        return distance - from.countUsed();
                                    }
                                },
                            },
                        },
                        冷雨夜刀神十香_鏖杀公: {
                            nobracket: true,
                            trigger: {
                                player: 'shaAfter',
                            },
                            filter(event, player) {
                                return event.target.isAlive() && event.getParent(2).name != '冷雨夜刀神十香_鏖杀公';
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(6);
                                player.showCards(event.cards);
                                ('step 1');
                                event.num = 0;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (get.type(i) != 'basic') event.num++;
                                    ui.discardPile.appendChild(i);
                                }
                                player.$throw(event.cards);
                                ('step 2');
                                if (event.num) {
                                    player.useCard({ name: 'sha' }, trigger.target, false);
                                }
                                ('step 3');
                                event.num--;
                                if (event.num > 0) {
                                    event.goto(2);
                                }
                            },
                        },
                        冷雨夜刀神十香_剑之天使: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            _priority: 20,
                            filter(event, player) {
                                return player.getStat('damage') >= 2;
                            },
                            content() {
                                player.changeHujia(2);
                            },
                        },
                        冷雨夜刀神十香_王座之铠: {
                            nobracket: true,
                            group: '冷雨夜刀神十香_王座之铠_1',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.hujia;
                            },
                            content() {
                                player.draw(event.player.hujia);
                                player.changeHujia(-event.player.hujia);
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        player.changeHujia(trigger.num);
                                    },
                                },
                            },
                        },
                        冷雨夜刀神十香_十番: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return !player.hujia && !player.isMaxHp() && event.player != player && event.player.hp > player.hp;
                            },
                            content() {
                                player.changeHujia();
                            },
                            group: '冷雨夜刀神十香_十番_守护',
                            subSkill: {
                                守护: {
                                    trigger: {
                                        player: 'damageZero',
                                    },
                                    filter(event, player) {
                                        return event.hujia;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hujia) {
                                        return 0.5;
                                    } else {
                                        return 2;
                                    }
                                },
                            },
                        },
                        冷雨四糸乃_冰结傀儡: {
                            nobracket: true,
                            group: '冷雨四糸乃_冰结傀儡_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    mark: true,
                                    marktext: '儡',
                                    popup: false,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    init(player) {
                                        player.storage.冷雨四糸乃_冰结傀儡_1 = 0;
                                        player.markSkill('冷雨四糸乃_冰结傀儡_1');
                                    },
                                    intro: {
                                        content: '累计造成#点伤害',
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.冷雨四糸乃_冰结傀儡_1 += trigger.num;
                                        player.markSkill('冷雨四糸乃_冰结傀儡_1');
                                        ('step 1');
                                        if (player.storage.冷雨四糸乃_冰结傀儡_1 > 4) {
                                            player.storage.冷雨四糸乃_冰结傀儡_1 -= player.storage.冷雨四糸乃_冰结傀儡_1;
                                            player.markSkill('冷雨四糸乃_冰结傀儡_1');
                                            var fellow = game.addFellow(1, '冷雨冰结傀儡');
                                            fellow.style.left = 'calc(65% - 85px)';
                                            fellow.style.top = 'calc(50%)';
                                            fellow.classList.add('minskin');
                                            fellow.side = player.side;
                                            fellow.identity = player.identity;
                                            if (fellow.identity == 'zhu') fellow.identity = 'zhong';
                                            fellow.showIdentity();
                                            fellow.node.identity.dataset.color = 'nei';
                                            fellow.draw(8)._triggered = null;
                                            fellow.changeHujia(4);
                                            game.log(player, '<span style="color: blue">召唤了 [冰结傀儡]</span>');
                                        }
                                    },
                                },
                            },
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                var fellow = game.addFellow(1, '冷雨冰结傀儡');
                                fellow.style.left = 'calc(35% - 70px)';
                                fellow.style.top = 'calc(50%)';
                                fellow.classList.add('minskin');
                                fellow.side = player.side;
                                fellow.identity = player.identity;
                                if (fellow.identity == 'zhu') fellow.identity = 'zhong';
                                fellow.showIdentity();
                                fellow.node.identity.dataset.color = 'nei';
                                fellow.draw(8)._triggered = null;
                                fellow.changeHujia(4);
                                game.log(player, '<span style="color: blue">召唤了 [冰结傀儡]</span>');
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨四糸乃_冰霜操纵: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('hej') > 0;
                            },
                            content() {
                                'step 0';
                                var nh = player.maxHp - player.hp + 2;
                                player.draw(nh)._triggered = null;
                                ('step 1');
                                var nh = player.maxHp - player.hp + 2;
                                player.chooseToDiscard(nh, 'hej', true);
                                ('step 2');
                                if (result.bool && result.cards.length > 2) {
                                    var cards = result.cards;
                                    if (Array.isArray(cards)) for (var i of cards) {
                                        if (get.color(i) == 'red') {
                                            player.recover();
                                        }
                                    }
                                    event.finish();
                                }
                                ('step 3');
                                player
                                    .chooseTarget([1, 2], '对至多2名其他角色造成1点伤害并弃置其1张牌', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 4');
                                if (result.bool) {
                                    player.line(result.targets, 'thunder');
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (targets && targets.length) {
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage();
                                        player.discardPlayerCard(1, 'he', targets[i], true);
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨诱宵美九_进行曲: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨诱宵美九_进行曲'), [1, Infinity], function (card, player, target) {
                                        return target.hp > 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.asyncDraw(result.targets);
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'thunder');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].addTempSkill('冷雨诱宵美九_激励', { player: 'phaseAfter' });
                                    }
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 2,
                            },
                        },
                        冷雨诱宵美九_激励: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            mark: true,
                            intro: {
                                content: '本回合摸牌阶段额外摸1张牌',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        冷雨诱宵美九_独奏: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, Infinity],
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                target.chooseToUse({ name: 'juedou' });
                                ('step 1');
                                if (result.bool == false) target.chooseToDiscard(true);
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: 3,
                                },
                            },
                        },
                        冷雨诱宵美九_镇魂曲: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨诱宵美九_镇魂曲'), [0, player.countCards('h', { color: 'red' })], function (card, player, target) {
                                        return target.hp > 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.showHandcards();
                                    player.recover();
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'thunder');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].changeHujia();
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨诱宵美九_轮舞曲: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt('冷雨诱宵美九_轮舞曲'),
                                    [0, player.countCards('h', { color: 'black' })],
                                    function (card, player, target) {
                                        return target != player;
                                    },
                                    function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    player.draw();
                                    player.showHandcards();
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'thunder');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage();
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨星宫六喰_闭: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 3],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                if (player.isLinked()) player.link();
                                player.line(target, 'thunder');
                                target.link();
                                target.addTempSkill('fengyin');
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨星宫六喰_开: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            content() {
                                player.addTempSkill('unequip');
                                player.addTempSkill('冷雨星宫六喰_开效果');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.countCards('h', 'sha') > 0 && !player.hasSkill('冷雨星宫六喰_开效果')) {
                                            return 2;
                                        }
                                        var ph = player.getCards('h');
                                        var num = 0;
                                        for (var i = 0; i < ph.length; i++) {
                                            if (get.tag(ph[i], 'damage')) num++;
                                        }
                                        if (num > 1) return num;
                                        return 0;
                                    },
                                },
                            },
                        },
                        冷雨星宫六喰_开效果: {
                            nobracket: true,
                            mod: {
                                targetInRange() {
                                    return true;
                                },
                            },
                        },
                        冷雨星宫六喰_放: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filterCard: true,
                            position: 'he',
                            content() {
                                'step 0';
                                player.$skill('封解主·放');
                                if (player.countCards('hej')) {
                                    player.draw(player.discard(player.getCards('hej')).cards.length);
                                    player.showHandcards();
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                var num = player.countCards('h', function (card) {
                                    return get.type(card) != 'basic';
                                });
                                if (num == 0) {
                                    event.finish();
                                } else {
                                    player.recover();
                                    player.draw(num);
                                }
                                player.addTempSkill('冷雨星宫六喰_放效果1');
                                player.addTempSkill('冷雨星宫六喰_放效果2');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        var recover = target.maxHp - target.hp;
                                        var nh = target.countCards('h');
                                        if (player == target && nh == 1) return 0;
                                        if (recover >= 2) return nh + recover;
                                        return nh;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        冷雨星宫六喰_放效果1: {
                            nobracket: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.hp;
                                },
                            },
                        },
                        冷雨星宫六喰_放效果2: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2' && Math.random() <= 0.3;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        冷雨星宫六喰_放效果3: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                player.draw(2);
                            },
                        },
                        冷雨星宫六喰_解: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectTarget: [1, Infinity],
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var num = target.countCards('h');
                                target.discard(target.getCards('h'));
                                target.draw(num);
                                target.showHandcards();
                                ('step 1');
                                var num = target.countCards('h', function (card) {
                                    return get.type(card) != 'basic';
                                });
                                target.discard(
                                    target.getCards('h', function (card) {
                                        return get.type(card) != 'basic';
                                    })
                                );
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -2,
                                },
                            },
                        },
                        //每当你使用1张牌,你可以重铸区域内1张牌,若此牌花色为♣️️,你摸1张牌,当你发动此技能次数达到4次时,你摸1张牌
                        冷雨七罪_赝造魔女: {
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            mark: true,
                            forced: true,
                            intro: {
                                content: '已发动#次技能',
                            },
                            init(player) {
                                player.storage.冷雨七罪_赝造魔女 = 0;
                            },
                            filter(event, player) {
                                if (player.countCards('hej') < 1) return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                const { result: { cards } } = await player.chooseCard(1, 'hej').set('ai', function (card) {
                                    if (card.suit == 'club') return 10 - get.value(card);
                                    if (get.tag(card, 'save')) {
                                        return -1;
                                    }
                                    if (get.tag(card, 'damage')) return -2;
                                    return 8 - get.value(card);
                                });
                                if (cards?.length) {
                                    player.recast(cards);
                                    if (cards[0].suit == 'club') {
                                        player.draw();
                                    }
                                    player.storage.冷雨七罪_赝造魔女++;
                                    if (player.storage.冷雨七罪_赝造魔女 > 3) {
                                        player.draw();
                                        player.storage.冷雨七罪_赝造魔女 = 0;
                                    }
                                }
                            },
                            ai: {
                                order: 8,
                                threaten: 2,
                            },
                        },
                        冷雨七罪_千变万化镜: {
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            filter(event, player) {
                                return event.targets && event.target != event.player && _status.currentPhase == event.player;
                            },
                            content() {
                                player.gain(game.createCard(trigger.card));
                            },
                            group: '冷雨七罪_千变万化镜_镜像',
                            subSkill: {
                                镜像: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (event.parent.name == '冷雨七罪_千变万化镜_镜像') return false;
                                        if (!event.targets || !event.card) return false;
                                        if (event.card && event.card.name == 'wuxie') return false;
                                        var type = get.type(event.card);
                                        if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay' || get.type(event.card) == 'buff') return false;
                                        var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                        var targets = event._targets || event.targets;
                                        for (var i = 0; i < targets.length; i++) {
                                            if (!targets[i].isIn()) return false;
                                            if (!player.canUse({ name: event.card.name }, targets[i], false, false)) {
                                                return false;
                                            }
                                        }
                                        return true;
                                    },
                                    check(event, player) {
                                        if (event.card.name == 'tiesuo') return false;
                                        return true;
                                    },
                                    content() {
                                        var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                        player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨八舞姐妹_飓风精灵: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            mark: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            init(player) {
                                player.storage.冷雨八舞姐妹_飓风精灵 = 0;
                                game.addVideo('storage', player, ['冷雨八舞姐妹_飓风精灵', player.storage.冷雨八舞姐妹_飓风精灵]);
                            },
                            content() {
                                player.storage.冷雨八舞姐妹_飓风精灵 += trigger.num;
                                game.addVideo('storage', player, ['冷雨八舞姐妹_飓风精灵', player.storage.冷雨八舞姐妹_飓风精灵]);
                            },
                            intro: {
                                content: 'mark',
                            },
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - from.storage.冷雨八舞姐妹_飓风精灵;
                                },
                                maxHandcard(player, num) {
                                    return num + player.storage.冷雨八舞姐妹_飓风精灵;
                                },
                            },
                        },
                        //当你使用进攻牌指定目标时,你可以令至多X名可成为合法目标的其他角色也成为此牌的目标(X为你"飓风"标记的数量)
                        冷雨八舞姐妹_贯穿者: {
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                var num = game.countPlayer();
                                if (player.storage.冷雨八舞姐妹_飓风精灵 < 1 || num < 3) return false;
                                return event.card && event.card.name == 'jiedao' || event.card.name == 'tiesuo' || event.card.name == 'huogong' || event.card.name == 'guohe' || event.card.name == 'juedou' || event.card.name == 'sha' || event.card.name == 'shunshou';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨八舞姐妹_贯穿者'), [0, player.storage.冷雨八舞姐妹_飓风精灵], function (card, player, target) {
                                    if (player == target) return false;
                                    var trigger = _status.event.getTrigger();
                                    return player.canUse(trigger.card, target) && trigger.targets.includes(target) == false;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        trigger.targets.push(result.targets[i]);
                                        game.log(result.targets[i], '成为了额外目标');
                                    }
                                }
                            },
                        },
                        冷雨八舞姐妹_束缚者: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isAlive();
                            },
                            content() {
                                if (player.isLinked()) player.link();
                                player.line(trigger.player, 'thunder');
                                if (!trigger.player.isLinked()) {
                                    trigger.player.link();
                                }
                            },
                            group: '冷雨八舞姐妹_束缚者_风链',
                            subSkill: {
                                风链: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.冷雨八舞姐妹_飓风精灵 > 0) return false;
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.isLinked();
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(get.prompt('冷雨八舞姐妹_束缚者'), [0, player.storage.冷雨八舞姐妹_飓风精灵], function (card, player, target) {
                                            return player != target && target.isLinked() && target.countCards('he') > 0;
                                        }).ai = function (target) {
                                            return get.attitude(player, target) <= 0;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            var list = [].concat(result.targets);
                                            for (var i = 0; i < list.length; i++) {
                                                player.discardPlayerCard('he', true);
                                            }
                                        }
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨八舞姐妹_天际疾驰者: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 2],
                            filter(event, player) {
                                return player.storage.冷雨八舞姐妹_飓风精灵 >= 5;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            contentBefore() {
                                player.$skill('天际疾驰者');
                                player.storage.冷雨八舞姐妹_飓风精灵 -= 5;
                            },
                            content() {
                                target.discard(target.getCards('e'));
                                target.chooseToDiscard('h', true);
                                target.damage();
                                target.turnOver(true);
                            },
                            ai: {
                                threaten: 2.1,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨吉尔伽美什_乖离剑: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt('冷雨吉尔伽美什_乖离剑'),
                                    [1, player.countCards('e')],
                                    function (card, player, target) {
                                        return target != player;
                                    },
                                    function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    player.gain(player.getCards('e'), true);
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'fire');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage();
                                        targets[i].addTempSkill('冷雨吉尔伽美什_撕裂', { player: 'phaseAfter' });
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨弗拉德三世_极刑王: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                if (event.card.name == 'wuxie' || event.card.name == 'nanman' || event.card.name == 'wanjian' || event.card.name == 'taoyuan' || event.card.name == 'wugu') return false;
                                return get.type(event.card) == 'trick';
                            },
                            position: 'he',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨弗拉德三世_极刑王'), function (card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        return !trigger.targets.includes(target);
                                    })
                                    .set('autodelay', true)
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.targets.push(result.targets[0]);
                                }
                            },
                            group: '冷雨弗拉德三世_极刑王_德古拉',
                            subSkill: {
                                德古拉: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (_status.currentPhase != player) return false;
                                        return get.cardCount(event.card, player) > 1;
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                        player.loseHp();
                                        player.gainMaxHp();
                                    },
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + (player.maxHp - player.hp);
                                },
                            },
                        },
                        冷雨弗拉德三世_护国之鬼将: {
                            nobracket: true,
                            trigger: {
                                global: ['phaseBegin', 'damageBefore'],
                            },
                            filter(event, player) {
                                return event.player != player && _status.currentPhase !== player && event.source != player;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                var num = player.maxHp + player.hp;
                                if (player.countCards('h') > num) {
                                    player.chooseToDiscard(true);
                                }
                                ('step 2');
                                player.chooseToUse('护国:是否使用一张卡牌？');
                            },
                            ai: {
                                nodu: true,
                                result: {
                                    player(card) {
                                        if (card.name == 'jiu') return 0;
                                    },
                                },
                            },
                        },
                        冷雨弗拉德三世_鲜血的传承: {
                            nobracket: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return !player.storage.冷雨弗拉德三世_鲜血的传承;
                            },
                            forced: true,
                            _priority: 300,
                            content() {
                                'step 0';
                                var num = player.maxHp;
                                player.changeHujia(num);
                                ('step 1');
                                player.recover(1 - player.hp);
                                ('step 2');
                                player.$skill('鲜血的传承');
                                player.addSkill('冷雨吸血鬼');
                                player.awakenSkill('冷雨弗拉德三世_鲜血的传承');
                                player.storage.冷雨弗拉德三世_鲜血的传承 = true;
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 2;
                                    return 1;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                        },
                        冷雨莫德雷德_隐藏不贞的头盔: {
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            _priority: 10,
                            filter(event, player) {
                                return event.card && event.card.name == 'tiesuo' || event.card.name == 'nanman' || event.card.name == 'shunshou' || event.card.name == 'guohe' || event.card.name == 'huogong' || event.card.name == 'wanjian' || event.card.name == 'lebu' || event.card.name == 'bingliang' || event.card.name == 'shandian' || event.card.name == '雷链' || event.card.name == '火链' || event.card.name == '降智打击';
                            },
                            content() {
                                trigger.cancel();
                            },
                            group: '冷雨莫德雷德_隐藏不贞的头盔_隐匿',
                            subSkill: {
                                隐匿: {
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    _priority: 15,
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'trick';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.type(card) != 'trick') return;
                                        if (card.name == 'tiesuo') return [0, 0];
                                        if (card.name == 'nanman') return [0, 0];
                                        if (card.name == 'wanjian') return [0, 0];
                                        if (card.name == 'juedou') return [0, 0];
                                        if (card.name == 'huogong') return [0, 0];
                                        if (card.name == 'shunshou') return [0, 0];
                                        if (card.name == 'guohe') return [0, 0];
                                        if (card.name == 'lebu') return [0, 0];
                                        if (card.name == 'bingliang') return [0, 0];
                                    },
                                },
                            },
                        },
                        冷雨莫德雷德_对吾华丽父王的叛逆: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getEnemies().includes(event.player);
                            },
                            content() {
                                player.addSkill('冷雨莫德雷德_对吾华丽父王的叛逆_憧憬');
                                var num = [1, 2];
                                trigger.num += num.randomGet();
                            },
                            subSkill: {
                                憧憬: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.isAlive();
                                    },
                                    content() {
                                        trigger.player.recover();
                                        player.removeSkill('冷雨莫德雷德_对吾华丽父王的叛逆_憧憬');
                                    },
                                },
                            },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] = Infinity;
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨莫德雷德_叛逆的骑士: {
                            nobracket: true,
                            group: ['冷雨莫德雷德_叛逆的骑士_1', '冷雨莫德雷德_叛逆的骑士_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    content() {
                                        var n = [1, 2].randomGet();
                                        if (n == 1) player.gainMaxHp();
                                        if (n == 2) player.gainMaxHp(2);
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source && event.source != player;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) <= 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (!trigger.source.hasSkill('fengyin')) {
                                            trigger.source.addTempSkill('fengyin');
                                        }
                                        ('step 1');
                                        trigger.source.goMad({ player: 'phaseAfter' });
                                        trigger.source.chooseToDiscard(true);
                                    },
                                },
                            },
                        },
                        冷雨莫德雷德_灿然辉耀的王剑: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                if (player.getEquips(1)) return true;
                                return false;
                            },
                            content() {
                                player.draw();
                                player.recover();
                            },
                        },
                        冷雨齐格飞_恶龙之血铠: {
                            nobracket: true,
                            group: ['冷雨齐格飞_恶龙之血铠_1', '冷雨齐格飞_恶龙之血铠_2', '冷雨齐格飞_恶龙之血铠_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return !event.nature && event.num == 1;
                                    },
                                    _priority: 20,
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.num == 2 && !event.nature;
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        trigger.num--;
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.num > 2 && !event.nature;
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        player.draw(trigger.num);
                                    },
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage')) {
                                            if (get.tag(card, 'natureDamage')) return [1, -2];
                                            return [0, 1];
                                        }
                                    },
                                },
                            },
                        },
                        冷雨齐格飞_龙杀: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            _priority: -10,
                            filter(event, player) {
                                return event.source && event.source != player && !event.source.hasSkill('冷雨齐格飞_龙杀_mark') && event.num > 0;
                            },
                            logTarget: 'player',
                            content() {
                                var mubiao = trigger.source;
                                player.line(mubiao, 'fire');
                                trigger.source.addSkill('冷雨齐格飞_龙杀_mark');
                            },
                            subSkill: {
                                mark: {
                                    mark: true,
                                    intro: {
                                        content: '已获得<龙>标记',
                                    },
                                },
                            },
                            group: ['冷雨齐格飞_屠龙', '冷雨齐格飞_莱茵的黄金'],
                        },
                        冷雨齐格飞_屠龙: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            prompt(event, player) {
                                return '是否令对' + get.translation(event.player) + '造成的伤害+1';
                            },
                            filter(event, player) {
                                return event.player.hasSkill('冷雨齐格飞_龙杀_mark');
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                globalFrom(from, to) {
                                    if (to.hasSkill('冷雨齐格飞_龙杀_mark')) return -Infinity;
                                },
                            },
                        },
                        冷雨齐格飞_莱茵的黄金: {
                            nobracket: true,
                            trigger: {
                                global: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.hasSkill('冷雨齐格飞_龙杀_mark');
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                var num = game.countPlayer();
                                if (player.countCards('h') > num) {
                                    player.chooseToDiscard(true);
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨沉默: {
                            mod: {
                                cardEnabled() {
                                    return false;
                                },
                                cardUsable() {
                                    return false;
                                },
                                cardRespondable() {
                                    return false;
                                },
                                cardSavable() {
                                    return false;
                                },
                            },
                            mark: true,
                            intro: {
                                content: '处于沉默状态',
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
                                            if (current < 0) return 1.5;
                                        }
                                    },
                                },
                            },
                        },
                        冷雨阿斯托尔福_唤起恐慌之魔笛: {
                            nobracket: true,
                            group: ['冷雨阿斯托尔福_唤起恐慌之魔笛_1', '冷雨阿斯托尔福_唤起恐慌之魔笛_2', '冷雨阿斯托尔福_唤起恐慌之魔笛_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    content() {
                                        'step 0';
                                        var nh = player.hp;
                                        var targets = game.filterPlayer(function (current) {
                                            return player.getEnemies().includes(current) && current.hp > nh;
                                        });
                                        targets.sort(lib.sort.seat);
                                        event.targets = targets;
                                        ('step 1');
                                        if (event.targets.length) {
                                            var current = event.targets.shift();
                                            current.damage();
                                            player.line(current, 'thunder');
                                            event.redo();
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    content() {
                                        'step 0';
                                        var nh = player.countCards('h');
                                        var targets = game.filterPlayer(function (current) {
                                            return player.getEnemies().includes(current) && current.countCards('h') > nh;
                                        });
                                        targets.sort(lib.sort.seat);
                                        event.targets = targets;
                                        ('step 1');
                                        if (event.targets.length) {
                                            var current = event.targets.shift();
                                            current.chooseToDiscard(true);
                                            player.line(current, 'thunder');
                                            event.redo();
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    content() {
                                        'step 0';
                                        event.players = get.players(player);
                                        ('step 1');
                                        if (event.players.length) {
                                            var current = event.players.shift();
                                            if (player.getEnemies().includes(current)) {
                                                player.line(current, ['fire', 'white', 'green', 'thunder'].randomGet());
                                                if (Math.random() <= 0.4) {
                                                    var list = ['冷雨阿斯托尔福_唤起恐慌1', '冷雨阿斯托尔福_唤起恐慌2', '冷雨阿斯托尔福_唤起恐慌3', '冷雨阿斯托尔福_唤起恐慌4'];
                                                    if (list.length) {
                                                        current.addTempSkill(list.randomGet(), { player: 'phaseAfter' });
                                                    }
                                                }
                                            }
                                            event.redo();
                                        }
                                    },
                                },
                            },
                            ai: {
                                order: 6,
                                threaten: 2,
                            },
                        },
                        冷雨阿斯托尔福_破却宣言: {
                            nobracket: true,
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.color(card);
                            },
                            viewAsFilter(player) {
                                return player.countCards('h') > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                                suit: 'spade',
                                number: 11,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 11, name: 'tiesuo', cardid: '4820120304', clone: { name: 'tiesuo', suit: 'spade', number: 11, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 439 }, timeout: 405, original: 'h' }],
                            },
                            prompt: '将一张手牌当无懈可击使用',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && player != target) {
                                        return false;
                                    }
                                },
                            },
                            ai: {
                                playernowuxie: true,
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                        },
                        冷雨阿斯托尔福_一碰就倒: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardToBefore',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (!event.target) return false;
                                if (!event.target.countCards('he') > 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var mubiao = trigger.target;
                                player.line(mubiao, 'thunder');
                                player.discardPlayerCard('hej', trigger.target, true);
                                ('step 1');
                                var card = result.cards[0];
                                if (card.suit == 'spade') {
                                    player.draw();
                                }
                            },
                            ai: {
                                order(item, player) {
                                    if (get.attitude(player, event.target) <= 0) return 10;
                                    if (get.attitude(player, event.target) > 0) return 0;
                                    if (get.attitude(player, event.target) > 0 && event.target.countCards('j') > 0) return 3;
                                },
                                threaten: 2,
                            },
                        },
                        冷雨阿斯托尔福_非世间所存之幻马: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to) {
                                    if (from.hp < to.hp) return -Infinity;
                                },
                            },
                        },
                        冷雨龙之魔女_龙之魔女: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && !current.hasSkill('冷雨龙之魔女_龙之魔女_mark') && _status.currentPhase !== player;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('冷雨龙之魔女_龙之魔女'), function (card, player, target) {
                                        return target != player && !target.hasSkill('冷雨龙之魔女_龙之魔女_mark');
                                    })
                                    .set('ai', function (target) {
                                        var num = target.isMinHp() ? 0.5 : 1 + Math.random();
                                        if (get.attitude(_status.event.player, target) < 0) {
                                            num += 0.5;
                                        }
                                        return num;
                                    })
                                    .set('round', event.triggername == 'roundStart');
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addTempSkill('冷雨龙之魔女_龙之魔女_mark');
                                }
                            },
                            subSkill: {
                                mark: {
                                    marktext: '魔',
                                    mark: true,
                                    intro: {
                                        content: '已获得<魔>标记',
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                            group: '冷雨龙之魔女_驱龙之旗',
                        },
                        冷雨龙之魔女_驱龙之旗: {
                            nobracket: true,
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.responded) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨龙之魔女_驱龙之旗'), function (card, player, target) {
                                    if (!target.hasSkill('冷雨龙之魔女_龙之魔女_mark')) return false;
                                    var nh = target.countCards('h');
                                    if (nh == 0) return false;
                                    return true;
                                }).ai = function (target) {
                                    return 1 - get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    var cards = target.getCards('h');
                                    player.chooseCardButton('选择' + get.translation(target) + '的一张卡手牌打出', cards).set('filterButton', function (button) {
                                        return get.type(button.link) == 'basic' && _status.event.getTrigger().filterCard(button.link, player);
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    game.log(player, '使用了', event.target, '的手牌');
                                    event.target.$throw(result.links);
                                    event.target.lose(result.links);
                                    trigger.untrigger();
                                    trigger.animate = false;
                                    trigger.responded = true;
                                    result.buttons[0].link.remove();
                                    trigger.result = { bool: true, card: result.buttons[0].link };
                                }
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.tag(card, 'respondShan')) return 0.4;
                                        if (get.tag(card, 'respondSha')) return 0.4;
                                    },
                                },
                            },
                        },
                        冷雨龙之魔女_自我改造: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨龙之魔女_自我改造')).ai = function (target) {
                                    return get.damageEffect(target, _status.event.player, _status.event.player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.judge(function (card) {
                                        var color = get.color(card);
                                        if (color == 'red') return 2;
                                        if (color == 'black') return 2;
                                    });
                                }
                                ('step 2');
                                if (result.color == 'red') {
                                    player.draw(2);
                                    player.recover();
                                } else if (result.color == 'black') {
                                    var mubiao = event.target;
                                    player.line(mubiao, 'fire');
                                    event.target.damage('fire');
                                    player.gainMaxHp(2);
                                    player.draw();
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 5,
                            },
                        },
                        '冷雨龙之魔女_咆哮吧,吾之愤怒': {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            content() {
                                var mubiao = trigger.source;
                                player.line(mubiao, 'fire');
                                var n = [1, 2].randomGet();
                                if (n == 1) trigger.source.damage(1, 'fire');
                                if (n == 2) trigger.source.damage(2, 'fire');
                            },
                            group: ['冷雨龙之魔女_咆哮吧,吾之愤怒_复仇', '冷雨龙之魔女_洗罪'],
                            subSkill: {
                                复仇: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) <= 0;
                                    },
                                    filter(event, player) {
                                        return event.source && event.source.isAlive() && event.source != player;
                                    },
                                    content() {
                                        player.draw(2);
                                        player.useCard({ name: 'juedou' }, trigger.source);
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨龙之魔女_洗罪: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            prompt(event, player) {
                                return '是否视为对' + get.translation(event.source) + '使用1张火攻';
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            filter(event, player) {
                                return event.source && event.source.isAlive() && event.source != player;
                            },
                            content() {
                                player.draw();
                                var mubiao = trigger.source;
                                player.line(mubiao, 'fire');
                                player.useCard({ name: 'huogong' }, trigger.source);
                            },
                        },
                        冷雨贞德_神明裁决: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target != player && !player.storage.冷雨贞德_神明裁决;
                            },
                            content() {
                                'step 0';
                                player.storage.冷雨贞德_神明裁决 = true;
                                ('step 1');
                                var list = game.filterPlayer();
                                for (var i = 0; i < list.length; i++) {
                                    if (list[i] != player && !list[i].hasSkill('冷雨贞德_神明裁决_mark')) {
                                        list[i].addSkill('冷雨贞德_神明裁决_mark');
                                        player.line(list[i], 'fire');
                                    }
                                }
                            },
                            subSkill: {
                                mark: {
                                    marktext: '裁',
                                    mark: true,
                                    intro: {
                                        content: '已获得<裁>标记',
                                    },
                                },
                            },
                            group: ['冷雨贞德_神裁', '冷雨贞德_失效'],
                        },
                        冷雨贞德_神裁: {
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            _priority: 6,
                            filter(event, player) {
                                if (!event.player.hasSkill('冷雨贞德_神明裁决_mark')) return false;
                                return (event.player != player && event.card.name == 'bingliang') || event.card.name == 'lebu' || event.card.name == 'juedou' || event.card.name == 'huogong' || event.card.name == 'shunshou' || event.card.name == 'guohe' || event.card.name == 'nanman' || event.card.name == 'wanjian' || event.card.name == 'sha' || event.card.name == 'tiesuo' || event.card.name == '雷链' || event.card.name == '火链' || event.card.name == '降智打击';
                            },
                            content() {
                                'step 0';
                                var eff = ai.get.effect(player, trigger.card, trigger.player, trigger.player);
                                trigger.player
                                    .chooseToDiscard('弃置一张牌并令' + get.translation(player) + '摸一张牌', 'he', function (card) {
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        if (_status.event.eff > 0) {
                                            return 10 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('eff', eff);
                                ('step 1');
                                if (result.bool == false) {
                                    trigger.finish();
                                    trigger.untrigger();
                                } else {
                                    game.log(trigger.player, '令', player, '摸一张牌');
                                    player.draw();
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' || card.name == 'juedou' || card.name == 'nanman' || card.name == 'huogong' || card.name == 'huoshaolianying' || card.name == 'wanjian' || card.name == 'shuiyanqijunx' || card.name == 'youdishenru' || card.name == 'qishayuqingguzong' || card.name == 'lebu') {
                                            if (_status.event.name == 'new_xiangle') return;
                                            var bs = player.getCards('he');
                                            if (bs.length < 2) return 0;
                                            if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                                            if (bs.length <= 3) {
                                                for (var i = 0; i < bs.length; i++) {
                                                    if (bs[i].name != 'lebu' && get.value(bs[i]) < 7) {
                                                        return [1, 0, 1, -0.5];
                                                    }
                                                }
                                                return 0;
                                            }
                                            return [1, 0, 1, -0.5];
                                        }
                                    },
                                },
                            },
                        },
                        冷雨莫德雷德_圆桌骑士: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        冷雨贞德_失效: {
                            nobracket: true,
                            trigger: {
                                global: ['loseHpAfter', 'damageAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.hasSkill('冷雨贞德_神明裁决_mark') && event.player != player && event.player.hp == 2;
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.removeSkill('冷雨贞德_神明裁决_mark');
                            },
                        },
                        冷雨贞德_启示: {
                            nobracket: true,
                            srlose: true,
                            trigger: {
                                player: 'judgeBegin',
                            },
                            content() {
                                'step 0';
                                if (player.isUnderControl()) {
                                    game.modeSwapPlayer(player);
                                }
                                var cards = get.cards(Math.min(5, game.players.length));
                                event.cards = cards;
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                    const top = [], bottom = cards;
                                    for (const i of player.getCards('j')) {
                                        const judge = get.judge(i);
                                        bottom.sort((a, b) => (judge(b) - judge(a))); //价值高的牌放前面
                                        if (bottom.length) {
                                            top.push(bottom.shift());
                                        }
                                    }
                                    bottom.sort((a, b) => (get.value(b) - get.value(a))); //把价值高的牌放前面
                                    while (bottom.length) {
                                        top.push(bottom.shift());
                                    }
                                    top.reverse();
                                    for (var i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (var i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                };
                                var chooseButton = function (online, player, cards) {
                                    var event = _status.event;
                                    player = player || event.player;
                                    cards = cards || event.cards;
                                    event.top = [];
                                    event.bottom = [];
                                    event.status = true;
                                    event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌(先选择的在上)', cards);
                                    event.switchToAuto = function () {
                                        event._result = 'ai';
                                        event.dialog.close();
                                        event.control.close();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
                                        var event = _status.event;
                                        if (link == 'ok') {
                                            if (online) {
                                                event._result = {
                                                    top: [],
                                                    bottom: [],
                                                };
                                                for (var i = 0; i < event.top.length; i++) {
                                                    event._result.top.push(event.top[i].link);
                                                }
                                                for (var i = 0; i < event.bottom.length; i++) {
                                                    event._result.bottom.push(event.bottom[i].link);
                                                }
                                            } else {
                                                var i;
                                                for (var i = 0; i < event.top.length; i++) {
                                                    ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                                                }
                                                for (var i = 0; i < event.bottom.length; i++) {
                                                    ui.cardPile.appendChild(event.bottom[i].link);
                                                }
                                                for (var i = 0; i < event.dialog.buttons.length; i++) {
                                                    if (event.dialog.buttons[i].classList.contains('glow') == false && event.dialog.buttons[i].classList.contains('target') == false) ui.cardPile.appendChild(event.dialog.buttons[i].link);
                                                }
                                                player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                                                game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                                            }
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        } else if (link == 'pileTop') {
                                            event.status = true;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                                        } else {
                                            event.status = false;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                                        }
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    event.custom.replace.button = function (link) {
                                        var event = _status.event;
                                        if (link.classList.contains('target')) {
                                            link.classList.remove('target');
                                            event.top.remove(link);
                                        } else if (link.classList.contains('glow')) {
                                            link.classList.remove('glow');
                                            event.bottom.remove(link);
                                        } else if (event.status) {
                                            link.classList.add('target');
                                            event.top.unshift(link);
                                        } else {
                                            link.classList.add('glow');
                                            event.bottom.push(link);
                                        }
                                    };
                                    event.custom.replace.window = function () {
                                        for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                                            _status.event.dialog.buttons[i].classList.remove('target');
                                            _status.event.dialog.buttons[i].classList.remove('glow');
                                            _status.event.top.length = 0;
                                            _status.event.bottom.length = 0;
                                        }
                                    };
                                    game.pause();
                                    game.countChoose();
                                };
                                event.switchToAuto = switchToAuto;
                                if (event.isMine()) {
                                    chooseButton();
                                    event.finish();
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, true, event.player, event.cards);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    event.switchToAuto();
                                    event.finish();
                                }
                                ('step 1');
                                if (event.result == 'ai' || !event.result) {
                                    event.switchToAuto();
                                } else {
                                    var top = event.result.top || [];
                                    var bottom = event.result.bottom || [];
                                    for (var i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (var i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    if (Array.isArray(event.cards)) for (var i of event.cards) {
                                        if (!top.includes(i) && !bottom.includes(i)) {
                                            ui.cardPile.appendChild(i);
                                        }
                                    }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨贞德_吾主在此: {
                            nobracket: true,
                            trigger: {
                                global: 'useCardToBefore',
                            },
                            filter(event, player) {
                                if (event.card.name == 'wuxie' || event.card.name == 'Timereflux') return false;
                                return (event.card.name == 'sha' || event.card.name == 'juedou' || event.card.name == 'wanjian' || event.card.name == 'huogong' || event.card.name == 'nanman' || event.card.name == 'tiesuo' || event.card.name == 'shunshou' || event.card.name == 'guohe' || event.card.name == '雷链' || event.card.name == '火链' || event.card.name == '降智打击') && get.distance(player, event.target) <= 1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            _priority: 6,
                            content() {
                                'step 0';
                                player.draw();
                                if (trigger.target != player) {
                                    player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
                                        if (get.position(card) == 'e') return -1;
                                        if (card.name == 'shan') return 1;
                                        if (get.type(card) == 'equip') return 0.5;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                trigger.target.gain(result.cards, player);
                                player.$give(result.cards, trigger.target);
                                event.card = result.cards[0];
                                if (get.type(event.card) != 'equip') event.finish();
                                ('step 2');
                                if (!trigger.target.isMin()) {
                                    trigger.target
                                        .chooseBool('是否装备' + get.translation(event.card) + '？')
                                        .set('ai', function () {
                                            var current = _status.event.player.getCards('e', { subtype: get.subtype(_status.event.card) });
                                            if (current && current.length) {
                                                return get.equipValue(event.card) > get.equipValue(current[0]);
                                            }
                                            return true;
                                        })
                                        .set('card', event.card);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    trigger.target.equip(event.card);
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨贞德_红莲之圣女: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.冷雨贞德_红莲之圣女;
                            },
                            init(player) {
                                player.storage.冷雨贞德_红莲之圣女 = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('冷雨贞德_红莲之圣女');
                                player.$skill('红莲之圣女');
                                player.storage.冷雨贞德_红莲之圣女 = true;
                                ('step 1');
                                player.addTempSkill('冷雨贞德_红莲之圣女效果1');
                                player.addTempSkill('冷雨贞德_红莲之圣女效果2');
                                player.addTempSkill('冷雨贞德_红莲之圣女效果3');
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player(player) {
                                        if (player.hp == 1) return 0;
                                        var shas = player.getCards('h', 'sha');
                                        if (!shas.length) return 0;
                                        var card = shas[0];
                                        if (!lib.filter.cardEnabled(card, player)) return 0;
                                        if (lib.filter.cardUsable(card, player)) return 0;
                                        var mindist;
                                        if (player.hp >= 4 && shas.length >= 3) {
                                            mindist = 4;
                                        } else if (player.hp >= 3 && shas.length >= 2) {
                                            mindist = 3;
                                        } else {
                                            mindist = 2;
                                        }
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.hp <= mindist - 1 && get.distance(player, current, 'attack') <= mindist && player.canUse(card, current, false) && get.effect(current, card, player, player) > 0;
                                            })
                                        ) {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        冷雨贞德_红莲之圣女效果1: {
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.player != player && event.nature != 'fire';
                            },
                            content() {
                                trigger.player.damage('fire');
                            },
                        },
                        冷雨贞德_红莲之圣女效果2: {
                            nobracket: true,
                            mod: {
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 3,
                            },
                        },
                        冷雨贞德_红莲之圣女效果3: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            forced: true,
                            content() {
                                var num = player.hp;
                                player.loseHp(num);
                            },
                        },
                        冷雨齐格飞_尼伯龙根之歌: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            filter(event, player) {
                                return player.hp < 1;
                            },
                            forced: true,
                            _priority: 100,
                            content() {
                                'step 0';
                                player.$skill('尼伯龙根之歌');
                                player.loseMaxHp()._triggered = null;
                                player.hp = player.maxHp;
                                player.update();
                                ('step 1');
                                player.draw();
                            },
                        },
                        冷雨吉尔伽美什_撕裂: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            mark: true,
                            intro: {
                                content: '处于撕裂状态',
                            },
                            forced: true,
                            content() {
                                var boss = game.findPlayer(function (current) {
                                    return current.hasSkill('冷雨吉尔伽美什_乖离剑');
                                });//QQQ
                                if (boss && boss.hp <= boss.maxHp) {
                                    var mubiao = boss;
                                    player.line(mubiao, 'fire');
                                    player.damage()._triggered = null;
                                    boss.gainMaxHp();
                                    boss.recover();
                                }
                            },
                        },
                        冷雨八云紫_永夜的四重结界: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 4],
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target).set('preserve', 'win').clear = false;
                                ('step 1');
                                if (result.bool) {
                                    player.gain([result.player, result.target]);
                                } else if (!result.cancelled) {
                                    player.draw();
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨八云紫_妖蝶1: {
                            nobracket: true,
                            trigger: {
                                player: 'drawEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨八云紫_妖蝶1'), [1, trigger.num], function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.asyncDraw(result.targets);
                                }
                            },
                            group: '冷雨八云紫_妖蝶2',
                        },
                        冷雨八云紫_妖蝶2: {
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.original == 'he') return true;
                                    if (_status.currentPhase != player) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨八云紫_妖蝶2'), [1, trigger.num], function (card, player, target) {
                                        return target != player && target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var list = [].concat(result.targets);
                                    for (var i = 0; i < list.length; i++) {
                                        list[i].chooseToDiscard('he', true);
                                    }
                                }
                            },
                        },
                        冷雨八云紫_动与静的均衡: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                'step 0';
                                var num1 = game.countPlayer(function (current) {
                                    return current.countCards('ej', { suit: 'spade' });
                                });
                                var num2 = game.countPlayer(function (current) {
                                    return current.countCards('ej', { suit: 'club' });
                                });
                                var num3 = game.countPlayer(function (current) {
                                    return current.countCards('ej', { suit: 'heart' });
                                });
                                var num4 = game.countPlayer(function (current) {
                                    return current.countCards('ej', { suit: 'diamond' });
                                });
                                event.num1 = num1;
                                event.num2 = num2;
                                event.num3 = num3;
                                event.num4 = num4;
                                ('step 1');
                                player.judge();
                                ('step 2');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.draw(event.num3);
                                        break;
                                    case 'diamond':
                                        player.draw(event.num4);
                                        break;
                                    case 'club':
                                        player.draw(event.num2);
                                        break;
                                    case 'spade':
                                        player.draw(event.num1);
                                        break;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        冷雨八云紫_梦境与现实的诅咒: {
                            nobracket: true,
                            enable: 'phaseUse',
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target != player && !target.hasSkill('冷雨八云紫_梦境与现实的诅咒_mark') && target.countCards('hej') > 0;
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard('hej', target, true);
                                target.addTempSkill('冷雨八云紫_梦境与现实的诅咒_mark');
                                ('step 1');
                                var card = result.cards[0];
                                if (card.suit == 'spade') {
                                    if (!target.isLinked()) {
                                        target.link();
                                    }
                                }
                                var card = result.cards[0];
                                if (card.suit == 'club') {
                                    player.changeHujia();
                                }
                                var card = result.cards[0];
                                if (card.suit == 'heart') {
                                    player.gainMaxHp();
                                    player.recover();
                                }
                                var card = result.cards[0];
                                if (card.suit == 'diamond') {
                                    player.draw();
                                }
                            },
                            subSkill: {
                                mark: {
                                    marktext: '诅',
                                    mark: true,
                                    intro: {
                                        content: '已获得<诅>标记',
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨八意永琳_虚假之月: {
                            nobracket: true,
                            group: ['冷雨八意永琳_虚假之月_1', '冷雨八意永琳_虚假之月_2', '冷雨八意永琳_虚假之月_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    check(event, player) {
                                        if (player.isTurnedOver()) return true;
                                        var num = game.countPlayer();
                                        return num + player.maxHp - player.hp > 2;
                                    },
                                    content() {
                                        'step 0';
                                        var num = game.countPlayer();
                                        player.draw(player.maxHp - player.hp + num);
                                        ('step 1');
                                        player.turnOver();
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.isTurnedOver()) return false;
                                        return event.player != player && get.type(event.card) != 'equip' && get.type(event.card) != 'buff';
                                    },
                                    _priority: 100,
                                    content() {
                                        'step 0';
                                        var next = player.chooseToDiscard(get.prompt('冷雨八意永琳_虚假之月_2', trigger.player));
                                        next.ai = function (card) {
                                            if (get.attitude(player, trigger.player) < 0) {
                                                return 8 - get.value(card);
                                            }
                                            return -1;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            var mubiao = trigger.player;
                                            player.line(mubiao, 'fire');
                                            trigger.cancel();
                                            game.log(trigger.player, '使用牌被取消');
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'turnOverAfter',
                                    },
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    _priority: 20,
                                    content() {
                                        'step 0';
                                        player.draw(player.maxHp - player.countCards('h'));
                                        ('step 1');
                                        player.draw(game.countPlayer());
                                        player.chooseToDiscard(game.countPlayer(), true);
                                        ('step 2');
                                        player.chooseToUse();
                                        player.chooseToUse();
                                    },
                                },
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.isTurnedOver()) return 2;
                                    return 5;
                                },
                            },
                        },
                        冷雨山之翁_晚钟: {
                            nobracket: true,
                            group: ['冷雨山之翁_晚钟_1', '冷雨山之翁_晚钟_2', '冷雨山之翁_晚钟_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event._notrigger.includes(event.player)) return false;
                                        return event.card && event.card.name == 'sha' && event.player.classList.contains('dead') == false && event.player != player && Math.random() <= 0.6;
                                    },
                                    _priority: 10,
                                    content() {
                                        var mubiao = trigger.player;
                                        player.line(mubiao, 'white');
                                        trigger.player.loseHp();
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('冷雨山之翁_晚钟'), function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.useCard({ name: 'sha' }, result.targets, false);
                                        }
                                    },
                                    ai: {
                                        threaten(player, target) {
                                            return 1.6;
                                        },
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    _priority: 99,
                                    filter(event, player) {
                                        if (_status.currentPhase != player) return false;
                                        return event.player != player;
                                    },
                                    content() {
                                        var mubiao = trigger.player;
                                        player.line(mubiao, 'fire');
                                        trigger.player.damage('nosource');
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨山之翁_死告天使: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            mark: true,
                            marktext: '死',
                            filter(event, player) {
                                return event.num > 0;
                            },
                            init(player) {
                                player.storage.冷雨山之翁_死告天使 = 0;
                                player.markSkill('冷雨山之翁_死告天使');
                            },
                            content() {
                                player.storage.冷雨山之翁_死告天使 += trigger.num;
                                player.markSkill('冷雨山之翁_死告天使');
                            },
                            intro: {
                                content: 'mark',
                            },
                            group: ['冷雨山之翁_死告天使1', '冷雨山之翁_死告天使2', '冷雨山之翁_死告天使3'],
                            ai: {
                                order: 10,
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (target.maxHp <= 3 && target.countCards('e') < target.hp - 1) return;
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp == target.maxHp) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1 && player == target) return [0, 0];
                                    },
                                },
                            },
                        },
                        冷雨山之翁_死告天使1: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.冷雨山之翁_死告天使 > 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                event.num = player.storage.冷雨山之翁_死告天使;
                                ('step 1');
                                player.chooseTarget(get.prompt('冷雨山之翁_死告天使1'), function (card, player, target) {
                                    return target != player && !target.storage.冷雨山之翁_死告天使;
                                }).ai = function (target) {
                                    if (player.storage.冷雨山之翁_死告天使 > 0) return -get.attitude(player, target);
                                    return -1;
                                };
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.storage.冷雨山之翁_死告天使--;
                                    game.log(player, '移去了1个<死>');
                                } else {
                                    player.draw(2 * event.num);
                                    player.storage.冷雨山之翁_死告天使 -= event.num;
                                    game.log(player, '移去了所有<死>');
                                    event.finish();
                                }
                                ('step 3');
                                player.line(event.target, 'white');
                                if (event.target.storage.冷雨山之翁_死告天使 == undefined) event.target.storage.冷雨山之翁_死告天使 = 0;
                                event.target.markSkill('冷雨山之翁_死告天使');
                                event.target.storage.冷雨山之翁_死告天使++;
                                game.log(event.target, '获得了1个<死>');
                                ('step 4');
                                event.num--;
                                if (event.num > 0) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                expose: 0.4,
                            },
                        },
                        冷雨山之翁_死告天使2: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0 && event.parent.name != '冷雨山之翁_死告天使2';
                                var num = game.countPlayer(function (current) {
                                    return current.storage.冷雨山之翁_死告天使 > 0;
                                });
                                if (num < 1) return false;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (player != current && current.storage.冷雨山之翁_死告天使 > 0) {
                                        player.line(current, 'white');
                                        current.damage();
                                    }
                                });
                            },
                        },
                        冷雨山之翁_死告天使3: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            popup: false,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.storage.冷雨山之翁_死告天使 > 0;
                                });
                                if (num >= 1) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current.storage.冷雨山之翁_死告天使 > 0) {
                                        current.storage.冷雨山之翁_死告天使--;
                                        current.markSkill('冷雨山之翁_死告天使');
                                        if (current.storage.冷雨山之翁_死告天使 == 0) {
                                            current.unmarkSkill('冷雨山之翁_死告天使');
                                        }
                                    }
                                });
                            },
                        },
                        冷雨山之翁_信仰的加护: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return Math.random() <= 0.4;
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp(trigger.num);
                                ('step 1');
                                player.recover(trigger.num);
                            },
                            group: '冷雨山之翁_信仰的加护_加护',
                            subSkill: {
                                加护: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    filter(event, player) {
                                        return player.maxHp - player.hp != 0;
                                    },
                                    forced: true,
                                    content() {
                                        player.hp = player.maxHp;
                                    },
                                },
                            },
                        },
                        '冷雨恩奇都_世人啊,冀以锁系神明': {
                            nobracket: true,
                            forced: true,
                            init(player) {
                                if (!player.isLinked()) {
                                    player.link();
                                }
                            },
                            group: ['冷雨恩奇都_世人啊,冀以锁系神明_1', '冷雨恩奇都_世人啊,冀以锁系神明_2', '冷雨恩奇都_世人啊,冀以锁系神明_3', '冷雨恩奇都_世人啊,冀以锁系神明_4', '冷雨恩奇都_世人啊,冀以锁系神明_5', '冷雨恩奇都_世人啊,冀以锁系神明_6', '冷雨恩奇都_世人啊,冀以锁系神明_7'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'linkAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isLinked();
                                    },
                                    content() {
                                        setTimeout(function () {
                                            if (!player.isLinked()) player.link();
                                        }, 1000);
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('冷雨恩奇都_世人啊,冀以锁系神明'), [1, player.hp], function (card, player, target) {
                                                return !target.isLinked() && target != player;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var list = [].concat(result.targets);
                                            for (var i = 0; i < list.length; i++) {
                                                list[i].link();
                                            }
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'linkAfter',
                                    },
                                    forced: true,
                                    _priority: 50,
                                    filter(event, player) {
                                        return !event.player.isLinked() && event.player != player;
                                    },
                                    content() {
                                        player.loseMaxHp();
                                    },
                                },
                                4: {
                                    trigger: {
                                        global: 'linkAfter',
                                    },
                                    forced: true,
                                    _priority: 50,
                                    filter(event, player) {
                                        if (!event.player.isLinked()) return false;
                                        return event.player != player;
                                    },
                                    content() {
                                        player.gainMaxHp();
                                    },
                                },
                                5: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    _priority: 50,
                                    filter(event, player) {
                                        return event.player.isLinked() && event.player != player;
                                    },
                                    content() {
                                        player.recover();
                                    },
                                },
                                6: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.isLinked();
                                        });
                                    },
                                    _priority: 20,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('冷雨恩奇都_世人啊,冀以锁系神明'), [1, player.hp], function (card, player, target) {
                                                return target.isLinked() && target != player;
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var list = [].concat(result.targets);
                                            for (var i = 0; i < list.length; i++) {
                                                list[i].recover();
                                                list[i].link();
                                            }
                                        }
                                    },
                                },
                                7: {
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    check(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.isLinked();
                                        });
                                        return num > 2;
                                    },
                                    prompt(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.isLinked();
                                        });
                                        return '世人啊,冀以锁系神明:是否改为摸' + get.cnNumber(num) + '张牌？';
                                    },
                                    content() {
                                        trigger.cancel();
                                        var num = game.countPlayer(function (current) {
                                            return current.isLinked();
                                        });
                                        if (num > 0) {
                                            player.draw(num);
                                        }
                                    },
                                },
                            },
                        },
                        冷雨恩奇都_变容: {
                            nobracket: true,
                            srlose: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target.hp > player.hp) return true;
                                if (target.countCards('h') > player.countCards('h')) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('调整手牌', '调整血量').ai = function () {
                                    if (target.countCards('h') > player.countCards('h') && !target.hp > player.hp) return '调整手牌';
                                    if (target.countCards('h') <= player.countCards('h') && target.hp > player.hp) return '调整血量';
                                    if (target.countCards('h') - player.countCards('h') >= 2 && target.hp - player.hp >= 2) return '调整血量';
                                    if (player.hp < 3 && target.hp > 2) return '调整血量';
                                    return '调整手牌';
                                };
                                ('step 1');
                                if (result.control == '调整手牌') {
                                    player.draw(target.countCards('h') - player.countCards('h'));
                                } else {
                                    player.recover(target.hp - player.hp);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        return player.countCards('h') - target.countCards('h');
                                        return player.hp - target.hp;
                                    },
                                },
                            },
                        },
                        冷雨恩奇都_制衡神兵: {
                            nobracket: true,
                            group: ['冷雨恩奇都_制衡神兵_1', '冷雨恩奇都_制衡神兵_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'loseEnd',
                                    },
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        if (Array.isArray(event.cards)) for (var i of event.cards) {
                                            if (i.original == 'e') return true;
                                        }
                                        return false;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    content() {
                                        var num = 0;
                                        if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                            if (i.original == 'e') num += 1;
                                        }
                                        if (trigger.player.countCards('h') > 0) {
                                            var mubiao = trigger.player;
                                            player.line(mubiao, 'white');
                                            player.discardPlayerCard('h', Math.max(1, num), trigger.player, true);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    _priority: 50,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.isLinked();
                                        });
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current != player && current.isLinked()) {
                                                player.line(current, 'fire');
                                                current.addTempSkill('冷雨沉默');
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        冷雨恩奇都_完全形态: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.maxHp - player.hp >= player.hp;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('e') > 0;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨恩奇都_完全形态'), [1, player.maxHp - player.hp], function (card, player, target) {
                                        return target.countCards('e') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var list = [].concat(result.targets);
                                    for (var i = 0; i < list.length; i++) {
                                        player.gainPlayerCard('e', list[i], 1, true);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 2,
                            },
                        },
                        冷雨反转十香_暴虐公: {
                            nobracket: true,
                            group: ['冷雨反转十香_暴虐公_1', '冷雨反转十香_暴虐公_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    prompt(event, player) {
                                        return '是否对' + get.translation(event.player) + '发动 暴虐公';
                                    },
                                    filter(event, player) {
                                        return event.player.hp > player.hp;
                                    },
                                    _priority: 50,
                                    content() {
                                        trigger.num = trigger.player.hp - player.hp;
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    prompt(event, player) {
                                        return '是否对' + get.translation(event.player) + '发动 暴虐公';
                                    },
                                    _priority: 50,
                                    filter(event, player) {
                                        return event.player.hp < player.hp;
                                    },
                                    content() {
                                        player.draw(player.hp - trigger.player.hp);
                                    },
                                },
                            },
                            ai: {
                                order: 20,
                            },
                        },
                        冷雨反转十香_剑之魔王: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            _priority: 50,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.changeHujia(trigger.num);
                            },
                        },
                        冷雨反转十香_终焉之剑: {
                            nobracket: true,
                            group: ['冷雨反转十香_终焉之剑_1', '冷雨反转十香_终焉之剑_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    _priority: 10,
                                    filter(event, player) {
                                        if (!player.hujia) return false;
                                        return true;
                                    },
                                    content() {
                                        var nh = player.hujia;
                                        trigger.player.damage(1 + Math.floor(Math.random() * nh))._triggered = null;
                                        player.changeHujia(-nh);
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    _priority: 10,
                                    filter(event, player) {
                                        return event.player.hp > 0;
                                    },
                                    content() {
                                        var mubiao = trigger.player;
                                        player.line(mubiao, 'white');
                                        trigger.player.addTempSkill('冷雨封疗', { player: 'phaseEnd' });
                                        game.log(trigger.player, '进入封疗状态');
                                    },
                                },
                            },
                            ai: {
                                order: 5,
                                threaten: 3,
                            },
                        },
                        冷雨封疗: {
                            trigger: {
                                player: 'recoverBefore',
                            },
                            forced: true,
                            mark: true,
                            marktext: '疗',
                            intro: {
                                concent: '无法回复体力',
                            },
                            content() {
                                trigger.cancel();
                                game.log(trigger.player, '封疗状态发动,无法回复体力');
                            },
                            ai: {
                                norecover: true,
                                save: false,
                            },
                        },
                        冷雨织田信长_革新: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt('冷雨织田信长_革新'),
                                    [1, player.maxHp - player.hp],
                                    function (card, player, target) {
                                        return target.hp > 0;
                                    },
                                    function (target) {
                                        return get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'fire');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].draw(targets[i].hp);
                                        targets[i].chooseToDiscard(targets[i].hp, true);
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨织田信长_三千世界: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(player) {
                                var num = game.countPlayer(function (current) {
                                    return current.countCards('ej', { color: 'red' });
                                });
                                if (num >= 1) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = game.countPlayer(function (current) {
                                    return current.countCards('ej', { color: 'red' });
                                });
                                event.num = num;
                                ('step 1');
                                if (event.num > 0) {
                                    player
                                        .chooseTarget(get.prompt('冷雨织田信长_三千世界'), function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        });
                                }
                                ('step 2');
                                if (result.bool) {
                                    var card = game.createCard({ name: 'sha', nature: 'fire', color: 'red', suit: 'heart' });
                                    player.useCard(card, result.targets, false);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                event.num--;
                                if (event.num > 0) {
                                    player.chooseBool('是否继续发动？');
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                            group: '冷雨织田信长_三千世界效果',
                        },
                        冷雨织田信长_三千世界效果: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                if (event.player.getEquips(3)) return true;
                                if (event.player.getEquips(4)) return true;
                                return false;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        冷雨织田信长_第六天魔王波旬: {
                            nobracket: true,
                            enable: 'phaseUse',
                            line: 'fire',
                            usable: 1,
                            selectTarget() {
                                var player = _status.event.player;
                                var num = game.countPlayer(function (current) {
                                    return current.countCards('h') > player.countCards('h');
                                });
                                return [1, Math.max(1, num)];
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            contentBefore() {
                                for (var i = 0; i < targets.length; i++) {
                                    if (targets[i].countCards('h') > player.countCards('h')) {
                                        targets[i].link(true);
                                    }
                                }
                            },
                            content() {
                                if (target.isMaxHp()) {
                                    target.damage(2, 'fire');
                                } else {
                                    target.damage('fire');
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 1,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨最后之王_古老盟约的加持: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return !player.storage.冷雨最后之王_古老盟约的加持;
                            },
                            content() {
                                'step 0';
                                player.storage.冷雨最后之王_古老盟约的加持 = true;
                                var num = game.countPlayer();
                                player.gainMaxHp(num);
                                event.num = num;
                                ('step 1');
                                player.hp += event.num;
                                player.update();
                                player.$skill('古老盟约的加持');
                            },
                            group: '冷雨最后之王_古老盟约的加持_逆神者的消亡',
                            subSkill: {
                                逆神者的消亡: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.loseMaxHp();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        //锁定技,你的装备区无数量限制.你每发动此技能,你的手牌上限永久+1.
                        冷雨最后之王_曼茶罗方阵: {
                            init(player) {
                                player.storage.冷雨最后之王_曼茶罗方阵 = 0;
                            },
                            trigger: {
                                player: "equipBefore",
                            },
                            forced: true,
                            async content(event, trigger, player) {//QQQ
                                player.storage.冷雨最后之王_曼茶罗方阵++;
                                trigger.cancel();
                                const card = trigger.cards[0];
                                if (card) {
                                    const vcard = new lib.element.VCard(card);
                                    const cardSymbol = Symbol('card');
                                    card.cardSymbol = cardSymbol;
                                    card[cardSymbol] = vcard;
                                    player.vcardsMap?.equips.push(vcard);
                                    player.node.equips.appendChild(card);
                                    card.style.transform = '';
                                    card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                                }
                                var info = get.info(card, false);
                                if (info.skills) {
                                    for (var i of info.skills) {
                                        player.addSkillTrigger(i);
                                    }
                                }
                            },
                            marktext: '罗',
                            intro: {
                                content: '手牌上限+#',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.冷雨最后之王_曼茶罗方阵;
                                },
                            },
                            ai: {
                                efFect: {
                                    player(card, player, target) {
                                        if (get.type(card) == 'equip') return [1, 10];
                                    },
                                },
                            },
                        },
                        冷雨最后之王_救世神刀: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            _priority: 100,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.num > 0;
                            },
                            content() {
                                var mubiao = trigger.source;
                                player.line(mubiao, 'thunder');
                                var n = [1, 2, 3].randomGet();
                                if (n == 1) trigger.player.damage(1, 'thunder')._triggered = null;
                                if (n == 2) trigger.player.damage(2, 'thunder')._triggered = null;
                                if (n == 3) trigger.player.damage(1, 'thunder')._triggered = null;
                            },
                            group: ['冷雨最后之王_救世神刀_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    popup: false,
                                    forced: true,
                                    content() {
                                        event.card = get.cardPile(function (card) {
                                            return get.type(card) == 'equip';
                                        });
                                        if (event.card) {
                                            player.equip(event.card, true).set('delay', true);
                                        }
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨最后之王_歼灭魔王的勇者: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            content() {
                                trigger.num += Math.floor(game.countPlayer() / 2);
                            },
                        },
                        冷雨西莉卡_治愈吐息: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', { color: 'red' }) > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨西莉卡_治愈吐息'), [0, player.countCards('h', { color: 'red' })], function (card, player, target) {
                                        return target.hp < target.maxHp;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var list = [].concat(result.targets);
                                    for (var i = 0; i < list.length; i++) {
                                        list[i].recover();
                                        list[i].draw();
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        '冷雨五河琴里_灼烂歼鬼·炮': {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            line: 'fire',
                            selectTarget() {
                                var player = _status.event.player;
                                var num = player.countCards('h', { color: 'red' });
                                return [1, Math.max(1, num)];
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                var mubiao = event.targets;
                                player.line(mubiao, 'fire');
                                target.damage('fire');
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨五河琴里_灼烂歼鬼: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                switch (get.color(result.card)) {
                                    case 'black':
                                        player.addTempSkill('冷雨五河琴里_灼烂歼鬼·炮');
                                        break;
                                    case 'red':
                                        player.addTempSkill('冷雨五河琴里_灼烂歼鬼·斧');
                                        break;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        '冷雨五河琴里_灼烂歼鬼·斧': {
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.color(event.card) == 'red';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨五河琴里_灼烂歼鬼·斧')).ai = function (target) {
                                    return get.damageEffect(target, _status.event.player, _status.event.player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.judge(function (card) {
                                        var color = get.color(card);
                                        if (color == 'red') return 2;
                                        if (color == 'black') return -2;
                                    });
                                }
                                ('step 2');
                                if (result.color == 'red') {
                                    event.target.damage('fire');
                                } else if (result.color == 'black') {
                                    player.draw();
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 5,
                            },
                        },
                        冷雨蕾米莉亚_德古拉的摇篮: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp(trigger.num);
                                player.recover(trigger.num);
                            },
                        },
                        冷雨蕾米莉亚_冈格尼尔之枪: {
                            nobracket: true,
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card) {
                                    if (card.name == 'sha' && get.color(card) == 'red') return Infinity;
                                },
                            },
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                return get.color(event.card) == 'red';
                            },
                            forced: true,
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        冷雨蕾米莉亚_绯色命运: {
                            nobracket: true,
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动【绯色命运】？', 'he').ai = function (card) {
                                    var trigger = _status.event.parent._trigger;
                                    var player = _status.event.player;
                                    var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
                                    var attitude = get.attitude(player, trigger.player);
                                    if (attitude == 0 || result == 0) return 0;
                                    if (attitude > 0) {
                                        return result;
                                    } else {
                                        return -result;
                                    }
                                };
                                ('step 2');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.position.appendChild(result.cards[0]);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 4');
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                                threaten: 2,
                            },
                            group: ['冷雨蕾米莉亚_绯色命运1', '冷雨蕾米莉亚_绯色命运2'],
                        },
                        冷雨蕾米莉亚_绯色命运1: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.num++;
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        冷雨蕾米莉亚_绯色命运2: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 2;
                                    return 1;
                                });
                                ('step 1');
                                if (result.judge == 1) {
                                    var list = ['sha'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                } else {
                                    if (result.judge == 2) {
                                        player.recover();
                                        player.draw();
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                                order: 11,
                            },
                        },
                        冷雨阿尔托莉雅_风王结界: {
                            nobracket: true,
                            group: ['冷雨阿尔托莉雅_风王结界_1', '冷雨阿尔托莉雅_风王结界_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source && event.source != player && event.num > 0 && event.source.countCards('h') > player.countCards('h');
                                    },
                                    content() {
                                        trigger.num--;
                                    },
                                },
                                2: {
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.countCards('h') > player.countCards('h') && event.player != player;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        冷雨阿尔托莉雅_远离尘世的理想乡: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                var num1 = game.countPlayer();
                                var num2 = game.countPlayer(function (current) {
                                    return current.hp > player.hp;
                                });
                                var num3 = game.countPlayer(function (current) {
                                    return current.countCards('h') > player.countCards('h');
                                });
                                if (num2 + 1 >= num1) return true;
                                if (num3 + 1 >= num1) return true;
                                return false;
                            },
                            content() {
                                var num1 = game.countPlayer();
                                var num2 = game.countPlayer(function (current) {
                                    return current.hp > player.hp;
                                });
                                var num3 = game.countPlayer(function (current) {
                                    return current.countCards('h') > player.countCards('h');
                                });
                                if (num2 + 1 >= num1) {
                                    player.gainMaxHp();
                                    player.recover();
                                }
                                if (num3 + 1 >= num1) {
                                    player.draw();
                                }
                            },
                        },
                        冷雨阿尔托莉雅_王的诞生之日: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            derivation: '冷雨阿尔托莉雅_十二圆桌骑士',
                            filter(event, player) {
                                return player.isMaxHp();
                            },
                            content() {
                                player.$skill('王的诞生之日');
                                player.gainMaxHp();
                                player.recover();
                                player.addSkill('冷雨阿尔托莉雅_十二圆桌骑士');
                                player.awakenSkill('冷雨阿尔托莉雅_王的诞生之日');
                            },
                        },
                        冷雨阿尔托莉雅_十二圆桌骑士: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseBegin', 'phaseAfter'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.cards = get.cards(12);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '十二圆桌骑士:选择任意张点数不大于12的牌';
                                        } else {
                                            str = '十二圆桌骑士';
                                        }
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['十二圆桌骑士', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 1');
                                var next = player.chooseButton([0, 4]);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    var num = 0;
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        num += ui.selected.buttons[i].link.number;
                                    }
                                    return num + button.link.number <= 12;
                                });
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 2');
                                if (result.bool && result.links) {
                                    var cards2 = [];
                                    for (var i of result.links) {
                                        cards2.push(i);
                                        cards.remove(i);
                                    }
                                    if (Array.isArray(cards)) for (var i of cards) {
                                        i.discard();
                                    }
                                    event.cards2 = cards2;
                                } else {
                                    event.finish();
                                }
                                var time = 1000 - (get.utc() - event.time);
                                if (time > 0) {
                                }
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cards2 = event.cards2;
                                player.gain(cards2, 'log');
                                player.$draw(cards2);
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨阿尔托莉雅_骑士王: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        冷雨阿尔托莉雅_誓约胜利之剑: {
                            nobracket: true,
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { type: 'trick' }) > 0;
                            },
                            filterCard(card) {
                                return get.type(card) == 'trick';
                            },
                            position: 'h',
                            selectCard: [1, 3],
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                10 - get.value(card);
                            },
                            content() {
                                target.damage(cards.length);
                            },
                            ai: {
                                order() {
                                    return 6;
                                },
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        冷雨风见幽香_双管魔炮: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            forced: true,
                            content() {
                                trigger.num += trigger.num;
                            },
                            mod: {
                                targetInRange() {
                                    return true;
                                },
                            },
                            ai: {
                                unequip: true,
                            },
                        },
                        冷雨风见幽香_自然之力: {
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < 3;
                            },
                            content() {
                                'step 0';
                                player.draw(3 - player.countCards('h'));
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('冷雨风见幽香_自然之力'), function (card, player, target) {
                                        return target.hp < target.maxHp;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    var list = [].concat(result.targets);
                                    for (var i = 0; i < list.length; i++) {
                                        list[i].recover();
                                        list[i].draw();
                                    }
                                }
                            },
                        },
                        冷雨风见幽香_花之暴君: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                switch (result.card.suit) {
                                    case 'heart':
                                        trigger.directHit = true;
                                        break;
                                    case 'diamond':
                                        trigger.directHit = true;
                                        break;
                                    case 'club':
                                        trigger.directHit = true;
                                        break;
                                    case 'spade':
                                        trigger.target.chooseToDiscard(true);
                                        break;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        冷雨赫拉克勒斯_射杀百头: {
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: -100,
                            filter(event, player) {
                                return event.cards && event.cards.length > 1;
                            },
                            content() {
                                'step 0';
                                var num = trigger.cards.length;
                                player.chooseTarget('射杀百头:是否选择至多' + num + '名角色对他们使用1张【杀】？', [1, num], function (card, player, target) {
                                    return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                }).ai = function (target) {
                                    return ai.get.effect(target, { name: 'sha' }, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.targets, false);
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        冷雨赫拉克勒斯_怪力: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(get.prompt('冷雨赫拉克勒斯_怪力', trigger.player));
                                next.ai = function (card) {
                                    if (get.attitude(player, trigger.player) < 0) {
                                        return 7 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.num++;
                                }
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        冷雨赫拉克勒斯_狂化侵蚀: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('damage') > 0;
                            },
                            check(event, player) {
                                return player.hp == player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                player.draw(2);
                            },
                        },
                        冷雨赫拉克勒斯_十二试炼: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 500,
                            marktext: '炼',
                            mark: true,
                            filter(event, player) {
                                return player.storage.冷雨赫拉克勒斯_十二试炼 > 0 && player.hp < 1;
                            },
                            content() {
                                'step 0';
                                player.$skill('十二试炼');
                                player.storage.冷雨赫拉克勒斯_十二试炼 -= 1;
                                player.gainMaxHp();
                                player.discard(player.getCards('hej'));
                                player.draw(4);
                                ('step 1');
                                player.hp = player.maxHp;
                                player.update();
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                            },
                            init(player) {
                                player.storage.冷雨赫拉克勒斯_十二试炼 = 12;
                                game.addVideo('storage', player, ['冷雨赫拉克勒斯_十二试炼', player.storage.冷雨赫拉克勒斯_十二试炼]);
                            },
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.storage.冷雨赫拉克勒斯_十二试炼) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp == 0) return 10;
                                        if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.冷雨赫拉克勒斯_十二试炼) return 2;
                                },
                            },
                        },
                        冷雨高文_圣者的数字: {
                            nobracket: true,
                            group: ['冷雨高文_圣者的数字_1', '冷雨高文_圣者的数字_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        if (player.hp == 3) return true;
                                        if (player.countCards('h') == 3) return true;
                                        return false;
                                    },
                                    _priority: 20,
                                    forced: true,
                                    content() {
                                        player.discard(player.getCards('j'));
                                        player.gainMaxHp(3);
                                        player.draw(3);
                                        player.addTempSkill('冷雨高文_圣者的数字_mark');
                                        game.log(player, '获得了 圣者的加护');
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: ['recoverBegin', 'drawBefore'],
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        if (player.hasSkill('冷雨高文_圣者的数字_mark')) return true;
                                        return false;
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        trigger.num = trigger.num * 3;
                                    },
                                },
                                mark: {
                                    marktext: '3',
                                    mark: true,
                                    intro: {
                                        content: '已获得 圣者的加护',
                                    },
                                },
                            },
                        },
                        冷雨高文_轮转胜利之剑: {
                            nobracket: true,
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { type: 'trick' }) > 0;
                            },
                            filterCard(card) {
                                return get.type(card) == 'trick';
                            },
                            position: 'h',
                            selectCard: [1, 2],
                            selectTarget: [1, 2],
                            filterTarget(card, player, target) {
                                return get.distance(player, target) <= 1;
                            },
                            check(card) {
                                10 - get.value(card);
                            },
                            content() {
                                target.damage(cards.length);
                            },
                            ai: {
                                order() {
                                    return 6;
                                },
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        冷雨阿蒂拉_游星之纹章: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                if (event.player.countCards('h') == 0) return false;
                                if (player.storage.冷雨阿蒂拉_游星之纹章 && player.storage.冷雨阿蒂拉_游星之纹章.length == 0) return true;
                                var suit = ['heart', 'diamond', 'club', 'spade'];
                                for (var i = 0; i < player.storage.冷雨阿蒂拉_游星之纹章.length; i++) if (suit.includes(player.storage.冷雨阿蒂拉_游星之纹章[i].suit)) suit.remove(player.storage.冷雨阿蒂拉_游星之纹章[i].suit);
                                var cards = event.player.getCards('h');
                                if (Array.isArray(cards)) for (var i of cards) if (suit.includes(i.suit)) return true;
                                return false;
                            },
                            marktext: '星',
                            forced: true,
                            content() {
                                'step 0';
                                var next = trigger.player.chooseCard(get.prompt('冷雨阿蒂拉_游星之纹章', player));
                                next.filterCard = function (card) {
                                    for (var i = 0; i < player.storage.冷雨阿蒂拉_游星之纹章.length; i++) {
                                        if (card.suit == player.storage.冷雨阿蒂拉_游星之纹章[i].suit) return false;
                                    }
                                    return true;
                                };
                                next.ai = function (card) {
                                    if (get.attitude(trigger.player, player) > 0) {
                                        return 7 - get.value(card);
                                    }
                                    if (get.attitude(trigger.player, player) <= 0) {
                                        return card.name == 'du';
                                    }
                                    return false;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.lose(result.cards, ui.special);
                                    trigger.player.$give(result.cards.length, player);
                                    player.storage.冷雨阿蒂拉_游星之纹章 = player.storage.冷雨阿蒂拉_游星之纹章.concat(result.cards);
                                    player.markSkill('冷雨阿蒂拉_游星之纹章');
                                    player.gainMaxHp();
                                } else {
                                    event.finish();
                                }
                            },
                            init(player) {
                                player.storage.冷雨阿蒂拉_游星之纹章 = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            group: ['冷雨阿蒂拉_游星之纹章效果'],
                        },
                        冷雨阿蒂拉_游星之纹章效果: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseDrawBegin', 'recoverBegin'],
                            },
                            forced: true,
                            content() {
                                trigger.num += player.storage.冷雨阿蒂拉_游星之纹章.length;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.冷雨阿蒂拉_游星之纹章.length;
                                },
                            },
                        },
                        冷雨阿蒂拉_军神之剑: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterCard: true,
                            selectCard: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                var num = result.number;
                                event.cards = get.cards(num);
                                player.showCards(event.cards);
                                ('step 2');
                                event.num = 0;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (get.color(i) == 'black') event.num++;
                                    ui.discardPile.appendChild(i);
                                }
                                player.$throw(event.cards);
                                if (event.num) {
                                    target.damage(event.num);
                                }
                            },
                            ai: {
                                order: 6,
                                threaten: 2,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨阿蒂拉_文明侵蚀: {
                            enable: 'phaseUse',
                            nobracket: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            forced: true,
                            init(player) {
                                player.storage.冷雨阿蒂拉_文明侵蚀 = [];
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = ['sha', 'tao', 'jiu', 'taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'yuanjiao', 'yiyi', 'wuzhong', 'wanjian', 'nanman'];
                                    for (var i = 0; i < player.storage.冷雨阿蒂拉_文明侵蚀.length; i++) {
                                        list.remove(player.storage.冷雨阿蒂拉_文明侵蚀[i]);
                                    }
                                    for (var i = 0; i < list.length; i++) {
                                        if (i < 3) {
                                            list[i] = ['基本', '', list[i]];
                                        } else {
                                            list[i] = ['锦囊', '', list[i]];
                                        }
                                    }
                                    if (list.length == 0) {
                                        return ui.create.dialog('已无可用牌');
                                    }
                                    return ui.create.dialog([list, 'vcard']);
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    return get.player().getUseValue({ name: button.link[2] });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        selectCard: 1,
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                        onuse(result, player) {
                                            player.storage.冷雨阿蒂拉_文明侵蚀.push(result.card.name);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择' + get.translation(links[0][2]) + '的目标';
                                },
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        var allshown = true,
                                            players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i.ai.shown == 0) {
                                                allshown = false;
                                            }
                                            if (i != player && i.countCards('h') && get.attitude(player, i) > 0) {
                                                return 1;
                                            }
                                        }
                                        if (allshown) return 1;
                                        return 0;
                                    },
                                },
                                threaten: 2.5,
                            },
                            group: '冷雨阿蒂拉_文明侵蚀效果',
                        },
                        冷雨阿蒂拉_文明侵蚀效果: {
                            nobracket: true,
                            forced: true,
                            popup: false,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.removeSkill('冷雨阿蒂拉_文明侵蚀');
                                ('step 1');
                                player.addSkill('冷雨阿蒂拉_文明侵蚀');
                            },
                        },
                        冷雨斯卡哈_魔境的智慧: {
                            nobracket: true,
                            forced: true,
                            group: ['冷雨斯卡哈_魔境的智慧_1', '冷雨斯卡哈_魔境的智慧_2', '冷雨斯卡哈_魔境的智慧_3', '冷雨斯卡哈_魔境的智慧_4'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['linkBegin', 'turnOverBegin', 'loseHpBegin', 'loseMaxHpBegin'],
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (get.type(card) == 'delay') return false;
                                        },
                                        suit(card, suit) {
                                            return 'none';
                                        },
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'chooseToCompareBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target && event.target == player;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                4: {
                                    trigger: {
                                        global: ['gainAfter', 'gainBefore', 'damageBegin', 'damageEnd', 'useCard', 'recoverEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isMad();
                                    },
                                    content() {
                                        player.unMad();
                                    },
                                },
                            },
                        },
                        冷雨斯卡哈_贯穿死翔之枪: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 2],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                game.log(player, '发动了技能<span style="color: gold">贯穿死翔之枪</span>');
                                var num = Math.max(1, player.maxHp - player.hp);
                                event.num = num;
                                ('step 1');
                                if (!target.isLinked()) {
                                    target.link();
                                }
                                target.addSkill('冷雨沉默');
                                target.addSkill('fengyin');
                                ('step 2');
                                player.useCard({ name: 'sha' }, target, false);
                                ('step 3');
                                event.num--;
                                if (event.num > 0 && target.isAlive()) {
                                    event.goto(2);
                                } else {
                                    target.removeSkill('冷雨沉默');
                                    target.removeSkill('fengyin');
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨斯卡哈_影之国: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            init(event, player) {
                                for (var i of game.players) {
                                    i.storage.冷雨斯卡哈_影之国_mark = 0;
                                }
                            },
                            content() {
                                var mubiao = trigger.source;
                                player.line(mubiao, 'fire');
                                trigger.source.storage.冷雨斯卡哈_影之国_mark += trigger.num;
                                trigger.source.markSkill('冷雨斯卡哈_影之国_mark');
                                game.log(trigger.source, '被死亡之门锁定');
                            },
                            subSkill: {
                                mark: {
                                    marktext: '影',
                                    intro: {
                                        content: 'mark',
                                    },
                                },
                            },
                            group: '冷雨斯卡哈_影之国效果',
                        },
                        冷雨斯卡哈_影之国效果: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(player) {
                                var num = 0;
                                for (var i of game.players) {
                                    num += i.storage.冷雨斯卡哈_影之国_mark;
                                }
                                if (num > 0) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current.storage.冷雨斯卡哈_影之国_mark > 0) {
                                        player.line(current, 'fire');
                                        if (current.countCards('he') >= current.storage.冷雨斯卡哈_影之国_mark) {
                                            player.gainPlayerCard(current.storage.冷雨斯卡哈_影之国_mark, current, 'he', true);
                                            current.damage(current.storage.冷雨斯卡哈_影之国_mark)._triggered = null;
                                        } else {
                                            player.gain(current.getCards('he'));
                                            current.$give(current.countCards('he'), player);
                                            current.damage(current.storage.冷雨斯卡哈_影之国_mark)._triggered = null;
                                        }
                                    }
                                });
                                ('step 1');
                                var num = 0;
                                for (var i of game.players) {
                                    num += i.storage.冷雨斯卡哈_影之国_mark;
                                }
                                if (num >= player.hp) {
                                    player.gainMaxHp();
                                    player.recover();
                                }
                                ('step 2');
                                game.countPlayer(function (current) {
                                    if (current.storage.冷雨斯卡哈_影之国_mark > 0) {
                                        current.storage.冷雨斯卡哈_影之国_mark = 0;
                                        current.unmarkSkill('冷雨斯卡哈_影之国_mark');
                                    }
                                });
                            },
                        },
                        冷雨夏尔_刽子手: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.getStat('damage') > 0;
                            },
                            content() {
                                'step 0';
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else {
                                    player.gainMaxHp();
                                }
                                player.draw();
                                player.phaseUse();
                                game.log(player, '<span style="color: green">执行额外一个出牌阶段</span>');
                                ('step 1');
                                player.getStat().card = {};
                                player.getStat().skill = {};
                            },
                        },
                        冷雨夏尔_人体研究: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(trigger.num);
                                ('step 1');
                                trigger.cancel();
                                ('step 2');
                                trigger.player.damage(trigger.num)._triggered = null;
                            },
                        },
                        冷雨夏尔_死亡为明日希望: {
                            mode: ['identity'],
                            nobracket: true,
                            trigger: {
                                global: 'dieBefore',
                            },
                            init(player) {
                                player.storage.冷雨夏尔_死亡为明日希望 = 3;
                                player.markSkill('冷雨夏尔_死亡为明日希望');
                            },
                            marktext: '希望',
                            intro: {
                                content: 'mark',
                            },
                            _priority: 250,
                            filter(event, player) {
                                return player.storage.冷雨夏尔_死亡为明日希望 > 0 && event.player != player && event.player.identity != 'zhu' && event.player.identity != player.identity;
                            },
                            content() {
                                'step 0';
                                player.storage.冷雨夏尔_死亡为明日希望--;
                                var mubiao = trigger.player;
                                player.line(mubiao, 'white');
                                ('step 1');
                                player.judge(function (card) {
                                    return card.suit == 'spade' ? -1 : 1;
                                });
                                ('step 2');
                                if (result.bool) {
                                    trigger.player.hp = trigger.player.maxHp;
                                    trigger.player.discard(trigger.player.getCards('hej'));
                                    trigger.player.draw(3);
                                    trigger.player.identity = player.identity;
                                    trigger.player.showIdentity();
                                    trigger.player.update();
                                    game.log(trigger.player, '身份牌变更');
                                }
                            },
                            ai: {
                                threaten: 2.5,
                            },
                        },
                        冷雨崔斯坦_治愈的竖琴: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', { color: 'red' }) > 0 && player.countCards('h', { color: 'black' }) > 0 && player.countCards('h', { color: 'red' }) != player.countCards('h', { color: 'black' });
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h', { color: 'red' }) > player.countCards('h', { color: 'black' })) {
                                    event.goto(1);
                                } else {
                                    event.goto(4);
                                }
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('冷雨崔斯坦_治愈的竖琴'), [0, player.countCards('h', { color: 'red' }) - player.countCards('h', { color: 'black' })], function (card, player, target) {
                                        if (target.hp < target.maxHp) return true;
                                        if (target.countCards('j') > 0) return true;
                                        if (target.hasSkill('冷雨封疗')) return true;
                                        if (target.hasSkill('fengyin')) return true;
                                        if (target.isTurnedOver()) return true;
                                        if (target.isLinked()) return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    var list = [].concat(result.targets);
                                    for (var i = 0; i < list.length; i++) {
                                        var nh = ['冷雨阿斯托尔福_唤起恐慌1', '冷雨阿斯托尔福_唤起恐慌2', '冷雨阿斯托尔福_唤起恐慌3', '冷雨阿斯托尔福_唤起恐慌4'];
                                        if (list[i].hasSkill(nh)) {
                                            list[i].removeSkill(nh);
                                        }
                                        if (list[i].isTurnedOver()) {
                                            list[i].turnOver();
                                        }
                                        if (list[i].isLinked()) {
                                            list[i].link();
                                        }
                                        if (list[i].hasSkill('冷雨封疗')) {
                                            list[i].removeSkill('冷雨封疗');
                                        }
                                        if (list[i].hasSkill('fengyin')) {
                                            list[i].removeSkill('fengyin');
                                        }
                                        if (list[i].hp < list[i].maxHp) {
                                            list[i].recover();
                                        }
                                        list[i].discard(list[i].getCards('j'));
                                        list[i].addTempSkill('冷雨净化', { player: 'phaseBegin' });
                                    }
                                }
                                ('step 3');
                                event.finish();
                                ('step 4');
                                player
                                    .chooseTarget(get.prompt('冷雨崔斯坦_治愈的竖琴'), [0, player.countCards('h', { color: 'black' }) - player.countCards('h', { color: 'red' })], function (card, player, target) {
                                        if (target.hp < target.maxHp) return true;
                                        if (target.countCards('j') > 0) return true;
                                        if (target.hasSkill('冷雨封疗')) return true;
                                        if (target.hasSkill('fengyin')) return true;
                                        if (target.isTurnedOver()) return true;
                                        if (target.isLinked()) return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 5');
                                if (result.bool) {
                                    var list = [].concat(result.targets);
                                    for (var i = 0; i < list.length; i++) {
                                        var nh = ['冷雨阿斯托尔福_唤起恐慌1', '冷雨阿斯托尔福_唤起恐慌2', '冷雨阿斯托尔福_唤起恐慌3', '冷雨阿斯托尔福_唤起恐慌4'];
                                        if (list[i].hasSkill(nh)) {
                                            list[i].removeSkill(nh);
                                        }
                                        if (list[i].isTurnedOver()) {
                                            list[i].turnOver();
                                        }
                                        if (list[i].isLinked()) {
                                            list[i].link();
                                        }
                                        if (list[i].hasSkill('冷雨封疗')) {
                                            list[i].removeSkill('冷雨封疗');
                                        }
                                        if (list[i].hasSkill('fengyin')) {
                                            list[i].removeSkill('fengyin');
                                        }
                                        if (list[i].hp < list[i].maxHp) {
                                            list[i].recover();
                                        }
                                        list[i].discard(list[i].getCards('j'));
                                        list[i].addTempSkill('冷雨净化', { player: 'phaseBegin' });
                                    }
                                }
                            },
                        },
                        冷雨净化: {
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            mark: true,
                            intro: {
                                content: '处于净化状态',
                            },
                            forced: true,
                            _priority: 15,
                            filter(event, player) {
                                return get.type(event.card) == 'delay';
                            },
                            content() {
                                trigger.cancel();
                                game.log(player, '免疫延时锦囊');
                            },
                            mod: {
                                suit(card, suit) {
                                    return 'none';
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'delay') return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        冷雨崔斯坦_痛哭的幻奏: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0 && !player.countCards('h', 'sha');
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                ('step 1');
                                player.addTempSkill('冷雨崔斯坦_痛哭的幻奏效果');
                            },
                            group: '冷雨崔斯坦_痛哭的幻奏_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.directHit = true;
                                    },
                                },
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        冷雨崔斯坦_痛哭的幻奏效果: {
                            nobracket: true,
                            group: ['冷雨崔斯坦_痛哭的幻奏效果_1', '冷雨崔斯坦_痛哭的幻奏效果_2', '冷雨崔斯坦_痛哭的幻奏效果_3'],
                            subSkill: {
                                1: {
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard(card) {
                                        return get.color(card) == 'black';
                                    },
                                    position: 'he',
                                    viewAs: {
                                        name: 'sha',
                                        nature: 'thunder',
                                        suit: 'spade',
                                        number: 1,
                                        viewAsFilter(player) {
                                            if (!player.countCards('he', { color: 'black' })) return false;
                                        },
                                        prompt: '将一张黑色牌当雷杀使用或打出',
                                        check(card) {
                                            return 7 - get.value(card);
                                        },
                                        cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 1, name: 'shandian', nature: 'thunder', cardid: '5007286424', original: 'h', _transform: 'translateX(112px)', clone: { name: 'shandian', suit: 'spade', number: 1, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 5137 }, timeout: 5101 }],
                                    },
                                    ai: {
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        order() {
                                            if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                            return 3;
                                        },
                                        result: {
                                            target(player, target) {
                                                if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -6;
                                                    } else {
                                                        return -3;
                                                    }
                                                }
                                                return -1.5;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage(card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natureDamage(card) {
                                                if (card.nature) return 1;
                                            },
                                            fireDamage(card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage(card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                    },
                                },
                                2: {
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard(card) {
                                        return get.color(card) == 'red';
                                    },
                                    position: 'he',
                                    viewAs: {
                                        name: 'sha',
                                        nature: 'fire',
                                        suit: 'heart',
                                        number: 7,
                                        viewAsFilter(player) {
                                            if (!player.countCards('he', { color: 'red' })) return false;
                                        },
                                        prompt: '将一张红色牌当火杀使用或打出',
                                        check(card) {
                                            return 7 - get.value(card);
                                        },
                                        cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'heart', number: 7, name: 'tao', cardid: '2759387371', clone: { name: 'tao', suit: 'heart', number: 7, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true }, timeout: 1288, original: 'h' }],
                                    },
                                    ai: {
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        order() {
                                            if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                            return 3;
                                        },
                                        result: {
                                            target(player, target) {
                                                if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -6;
                                                    } else {
                                                        return -3;
                                                    }
                                                }
                                                return -1.5;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage(card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natureDamage(card) {
                                                if (card.nature) return 1;
                                            },
                                            fireDamage(card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage(card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                    },
                                },
                                3: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.num > 0;
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        'step 0';
                                        player.judge(function (card) {
                                            if (get.color(card) == 'red') return 1;
                                        });
                                        ('step 1');
                                        if (result.judge == 1) {
                                            player.draw();
                                        }
                                    },
                                },
                            },//QQQ
                        },
                        冷雨贝狄威尔_守护的誓约: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                var cards = player.getCards('h');
                                if (cards.length < 1) return false;
                                var color = get.color(cards[0]);
                                for (var i = 1; i < cards.length; i++) {
                                    if (get.color(i) != color) return false;
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨贝狄威尔_守护的誓约'), [0, player.countCards('h')], function (card, player, target) {
                                        return target.hp > 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.showHandcards(get.translation(player) + '发动了【守护的誓约】');
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'green');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].draw();
                                        targets[i].changeHujia();
                                        targets[i].addSkill('冷雨贝狄威尔_守护的誓约效果');
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨贝狄威尔_守护的誓约效果: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            popup: false,
                            mark: true,
                            intro: {
                                content: '处于守护状态',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                player.draw();
                                player.removeSkill('冷雨贝狄威尔_守护的誓约效果');
                            },
                        },
                        冷雨贝狄威尔_银之臂: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                var cards = player.getCards('h');
                                if (cards.length < 1) return false;
                                var color = get.color(cards[0]);
                                for (var i = 1; i < cards.length; i++) {
                                    if (get.color(i) != color) return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                ('step 1');
                                player.addTempSkill('冷雨贝狄威尔_银之臂_mark');
                                player.addTempSkill('冷雨贝狄威尔_银之臂效果');
                            },
                            subSkill: {
                                mark: {
                                    marktext: '剑',
                                    mark: true,
                                    intro: {
                                        content: '已获得<剑>标记',
                                    },
                                },
                            },
                        },
                        冷雨贝狄威尔_银之臂效果: {
                            nobracket: true,
                            group: ['冷雨贝狄威尔_银之臂效果_1', '冷雨贝狄威尔_银之臂效果_2', '冷雨贝狄威尔_银之臂效果_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaAfter',
                                    },
                                    _priority: -10,
                                    filter(event, player) {
                                        return event.getParent(2).name != '冷雨贝狄威尔_银之臂效果_1' && event.target.isAlive();
                                    },
                                    content() {
                                        player.useCard(trigger.card, trigger.target, false);
                                    },
                                    mod: {
                                        selectTarget(card, player, range) {
                                            if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] += 1;
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return (num += 1);
                                        },
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card.name == 'sha' || event.card.name == 'wuxie' || event.card.name == 'nanman' || event.card.name == 'wanjian' || event.card.name == 'taoyuan' || event.card.name == 'wugu') return false;
                                        if (get.type(event.card) == 'delay') return false;
                                        if (get.type(event.card) == 'equip') return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('冷雨贝狄威尔_银之臂效果'), function (card, player, target) {
                                                var trigger = _status.event.getTrigger();
                                                return !trigger.targets.includes(target);
                                            })
                                            .set('autodelay', true)
                                            .set('ai', function (target) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                return get.effect(target, trigger.card, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.targets.push(result.targets[0]);
                                            game.log(result.targets, '被指定为额外目标');
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: ['drawBegin', 'recoverBegin'],
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        冷雨贝狄威尔_一闪而逝: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 2],
                            filter(event, player) {
                                if (!player.hasSkill('冷雨贝狄威尔_银之臂_mark')) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.hp > player.hp;
                            },
                            content() {
                                'step 0';
                                game.log(player, '发动了技能<span style="color: gold">一闪而逝·银之臂</span>');
                                var num = target.hp - player.hp;
                                event.num = num;
                                ('step 1');
                                var mubiao = target;
                                player.line(mubiao, 'thunder');
                                target.damage()._triggered = null;
                                ('step 2');
                                event.num--;
                                if (event.num > 0 && target.isAlive()) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨狂化库丘林_突穿死棘之枪: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            selectTarget: [1, Infinity],
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                player.chooseToCompare(targets).callback = lib.skill.冷雨狂化库丘林_突穿死棘之枪.callback;
                            },
                            callback() {
                                'step 0';
                                if (event.num1 > event.num2) {
                                    target.addSkill('冷雨沉默');
                                    target.addSkill('fengyin');
                                    player.useCard({ name: 'sha' }, target);
                                    event.goto(1);
                                } else {
                                    player.draw();
                                    event.finish();
                                }
                                ('step 1');
                                target.removeSkill('冷雨沉默');
                                target.removeSkill('fengyin');
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨狂化库丘林_剜穿鏖杀之枪: {
                            nobracket: true,
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { type: 'basic' }) > 0;
                            },
                            filterCard(card) {
                                return get.type(card) == 'basic';
                            },
                            position: 'h',
                            selectCard: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                10 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                target.damage();
                                ('step 2');
                                player.recover();
                            },
                            ai: {
                                order(name, player) {
                                    if (player.hp < 3) return -1;
                                    return 6;
                                },
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        冷雨狂化库丘林_死牙之兽: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            nobracket: true,
                            popup: false,
                            _priority: 25,
                            fixed: true,
                            filter(event, player) {
                                if (player.hp < 3) return true;
                                return false;
                            },
                            content() {
                                player.discard(player.getCards('j'));
                                var hp = player.hp,
                                    maxHp = player.maxHp,
                                    hujia = player.hujia;
                                player.init('冷雨死牙之兽');
                                player.hp = hp;
                                player.maxHp = maxHp;
                                player.hujia = hujia;
                                player.update();
                                player.draw(2 + player.maxHp - player.hp);
                                game.log(player, '<span style="color: red">变身为 死牙之兽</span>');
                            },
                        },
                        冷雨死牙之兽_狂暴: {
                            nobracket: true,
                            popup: false,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨死牙之兽_嗜血: {
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            popup: false,
                            forced: true,
                            content() {
                                player.gainMaxHp(trigger.num);
                                player.recover(trigger.num);
                            },
                        },
                        冷雨死牙之兽_变形: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            _priority: 10,
                            popup: false,
                            forced: true,
                            content() {
                                'step 0';
                                player.discard(player.getCards('j'));
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                var hp = player.hp;
                                var maxHp = player.maxHp;
                                player.init('冷雨狂化库丘林');
                                player.hp = hp;
                                player.maxHp = maxHp;
                                player.update();
                                game.log(player, '<span style="color: red">变身为 狂化库丘林</span>');
                            },
                        },
                        '冷雨吕布_军神五兵·斩切': {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            prompt: '是否发动技能【斩切】,令此伤害+1',
                            filter(event, player) {
                                return event.player.hujia;
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                unequip: true,
                                threaten: 2,
                            },
                        },
                        '冷雨吕布_军神五兵·突刺': {
                            trigger: {
                                source: 'damageBefore',
                            },
                            check(event, player) {
                                var target = event.player.next;
                                return get.attitude(player, target) <= 0;
                            },
                            prompt(event, player) {
                                return '突刺:是否对' + get.translation(event.player.next) + '造成1点伤害？';
                            },
                            nopop: true,
                            filter(event, player) {
                                return event.player.next != player && event.card && event.card.name == 'sha';
                            },
                            nobracket: true,
                            content() {
                                var target = trigger.player.next;
                                var mubiao = target;
                                game.log(target, '被追加为伤害目标');
                                player.line(mubiao, 'fire');
                                target.damage();
                            },
                        },
                        '冷雨吕布_军神五兵·刈割': {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card) {
                                if (get.type(card) == 'equip') return 10;
                                return 8 - get.value(card);
                            },
                            filterCard: true,
                            prompt: '是否发动技能【刈割】,对目标及其上下家角色造成1点伤害',
                            content() {
                                'step 0';
                                player.line(target, 'fire');
                                target.damage();
                                ('step 1');
                                if (player.getEnemies().includes(target.previous)) {
                                    player.line(target.previous, 'fire');
                                    target.previous.damage();
                                }
                                if (player.getEnemies().includes(target.next)) {
                                    player.line(target.next, 'fire');
                                    target.next.damage();
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        '冷雨吕布_军神五兵·挥扫': {
                            nobracket: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            _priority: -1,
                            filter(event, player) {
                                if (!event.nature && event.num > 1) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.source) {
                                    trigger.source.damage(trigger.num - 1);
                                }
                                ('step 1');
                                trigger.num = 1;
                            },
                        },
                        冷雨吕布_军神五兵: {
                            nobracket: true,
                            forced: true,
                            group: ['冷雨吕布_军神五兵·斩切', '冷雨吕布_军神五兵·斩切1', '冷雨吕布_军神五兵·突刺', '冷雨吕布_军神五兵·突刺1', '冷雨吕布_军神五兵·突刺2', '冷雨吕布_军神五兵·打击1', '冷雨吕布_军神五兵·打击2', '冷雨吕布_军神五兵·刈割', '冷雨吕布_军神五兵·挥扫'],
                            ai: {
                                threaten: 2,
                            },
                        },
                        '冷雨吕布_军神五兵·斩切1': {
                            trigger: {
                                source: 'damageZero',
                            },
                            filter(event, player) {
                                return event.hujia;
                            },
                            prompt: '是否发动技能【斩切】,对目标造成1点伤害',
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                var mubiao = trigger.player;
                                player.line(mubiao, 'fire');
                                trigger.player.damage();
                            },
                        },
                        '冷雨吕布_军神五兵·突刺1': {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isLinked();
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        '冷雨吕布_军神五兵·突刺2': {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target.isLinked();
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        '冷雨吕布_军神五兵·打击1': {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.nature;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨吕布_军神五兵·打击1'), [1, trigger.num], function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'fire');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage();
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        '冷雨吕布_军神五兵·打击2': {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.nature) return true;
                                return false;
                            },
                            content() {
                                trigger.num--;
                            },
                            ai: {
                                nofire: true,
                                nothunder: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'tiesuo') return 0;
                                        if (get.tag(card, 'fireDamage')) return 0;
                                        if (get.tag(card, 'thunderDamage')) return 0;
                                    },
                                },
                            },
                        },
                        冷雨吕布_勇猛1: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') return false;
                                },
                                suit(card, suit) {
                                    return 'none';
                                },
                            },
                        },
                        冷雨吕布_勇猛2: {
                            trigger: {
                                player: 'turnOverBegin',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        冷雨吕布_勇猛3: {
                            trigger: {
                                player: 'linkAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isLinked();
                            },
                            content() {
                                setTimeout(function () {
                                    if (player.isLinked()) player.link();
                                }, 2000);
                            },
                        },
                        冷雨吕布_勇猛4: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            prompt(event, player) {
                                var num = player.maxHp - player.hp;
                                return '勇猛:是否额外摸' + get.cnNumber(num) + '张牌？';
                            },
                            content() {
                                trigger.num += player.maxHp - player.hp;
                            },
                        },
                        冷雨吕布_勇猛: {
                            nobracket: true,
                            trigger: {
                                global: ['gainAfter', 'gainBefore', 'damageBegin', 'damageEnd', 'useCard', 'recoverEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isMad();
                            },
                            content() {
                                player.unMad();
                            },
                            group: ['冷雨吕布_勇猛1', '冷雨吕布_勇猛2', '冷雨吕布_勇猛3', '冷雨吕布_勇猛4'],
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨吕布_乱世枭雄: {
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (get.subtype(event.card) == 'equip1') return true;
                                if (get.subtype(event.card) == 'equip2') return true;
                                if (get.subtype(event.card) == 'equip3') return true;
                                if (get.subtype(event.card) == 'equip4') return true;
                                return false;
                            },
                            nobracket: true,
                            forced: true,
                            content() { },
                            group: '冷雨吕布_乱世枭雄_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'gameDrawAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.forcemin = true;
                                    },
                                },
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    var num4 = game.countPlayer(function (current) {
                                        return current.countCards('e', { subtype: 'equip1' });
                                    });
                                    if (card.name == 'sha') return (num += num4);
                                },
                                globalFrom(from, to, distance) {
                                    var num1 = game.countPlayer(function (current) {
                                        return current.countCards('e', { subtype: 'equip4' });
                                    });
                                    return distance - num1 - 1;
                                },
                                globalTo(from, to, distance) {
                                    var num2 = game.countPlayer(function (current) {
                                        return current.countCards('e', { subtype: 'equip3' });
                                    });
                                    return distance + num2 + 1;
                                },
                                maxHandcard(player, num) {
                                    var num3 = game.countPlayer(function (current) {
                                        return current.countCards('e', { subtype: 'equip2' });
                                    });
                                    return num + num3 + 1;
                                },
                            },
                        },
                        冷雨宫本武藏_第五势: {
                            nobracket: true,
                            group: ['冷雨宫本武藏_第五势_1', '冷雨宫本武藏_第五势_2', '冷雨宫本武藏_第五势_3', '冷雨宫本武藏_第五势_4'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.directHit) return false;
                                        return true;
                                    },
                                    _priority: -1,
                                    content() {
                                        if (typeof trigger.shanRequired == 'number') {
                                            trigger.shanRequired++;
                                        } else {
                                            trigger.shanRequired = 2;
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'juedou',
                                        target: 'juedou',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.turn != player;
                                    },
                                    content() {
                                        'step 0';
                                        var next = trigger.turn.chooseToRespond({ name: 'sha' });
                                        next.autochoose = lib.filter.autoRespondSha;
                                        next.ai = function (card) {
                                            if (get.attitude(trigger.turn, player) < 0 && trigger.turn.num('h', 'sha') > 1) {
                                                return ai.get.unuseful2(card);
                                            }
                                            return -1;
                                        };
                                        ('step 1');
                                        if (result.bool == false) {
                                            trigger.directHit = true;
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'shaAfter',
                                    },
                                    _priority: -10,
                                    check(event, player) {
                                        return get.attitude(player, event.target) <= 0;
                                    },
                                    filter(event, player) {
                                        return event.getParent(2).name != '冷雨宫本武藏_第五势_3' && event.target.isAlive();
                                    },
                                    content() {
                                        var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                        player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                                    },
                                },
                                4: {
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.name == 'sha') return true;
                                            return false;
                                        },
                                    },
                                },
                            },
                            ai: {
                                result: {
                                    target(card, player, target) {
                                        if (card.name == 'juedou' && target.countCards('h') > 0) return [1, 0, 0, -1];
                                        if (card.name == 'sha' && target.countCards('h') > 0) return [1, 0, 0, -1];
                                    },
                                },
                            },
                        },
                        冷雨禁锢: {
                            nobracket: true,
                            mark: true,
                            marktext: '锢',
                            intro: {
                                content: '无法成为卡牌目标',
                            },
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    return false;
                                },
                            },
                        },
                        冷雨宫本武藏_天眼: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨宫本武藏_天眼'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addTempSkill('冷雨宫本武藏_天眼_mark');
                                    player.addTempSkill('冷雨宫本武藏_天眼效果');
                                    game.log(target, '被宫本武藏锁定');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('冷雨宫本武藏_天眼_mark')) {
                                        player.line(current, 'thunder');
                                        current.addTempSkill('冷雨禁锢');
                                        current.addTempSkill('冷雨沉默');
                                        current.addTempSkill('fengyin');
                                    }
                                });
                            },
                            subSkill: {
                                mark: {
                                    marktext: '眼',
                                    mark: true,
                                    intro: {
                                        content: '已获得<眼>标记',
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨宫本武藏_天眼效果: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            _priority: 100,
                            forced: true,
                            filter(event, player) {
                                return event.player.hasSkill('冷雨宫本武藏_天眼_mark');
                            },
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                globalFrom(from, to) {
                                    if (to.hasSkill('冷雨宫本武藏_天眼_mark')) return -Infinity;
                                },
                                maxHandcard(player, num) {
                                    return num + Infinity;
                                },
                            },
                        },
                        冷雨宫本武藏_无空: {
                            nobracket: true,
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('冷雨宫本武藏_无空_mark');
                            },
                            content() {
                                player.addTempSkill('冷雨宫本武藏_无空_mark', { player: 'phaseUseBegin' });
                            },
                            subSkill: {
                                mark: {
                                    marktext: '空',
                                    mark: true,
                                    intro: {
                                        content: '处于无敌状态',
                                    },
                                },
                            },
                            group: '冷雨宫本武藏_无空效果2',
                        },
                        冷雨宫本武藏_无空效果1: {
                            nobracket: true,
                            group: ['冷雨宫本武藏_无空效果1_1', '冷雨宫本武藏_无空效果1_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        冷雨宫本武藏_无空效果2: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            _priority: 20,
                            filter(event, player) {
                                return player.hasSkill('冷雨宫本武藏_无空_mark');
                            },
                            content() {
                                player.addTempSkill('冷雨宫本武藏_无空效果1', { player: 'phaseUseBegin' });
                                game.log(player, '进入无敌状态');
                            },
                        },
                        冷雨宫本武藏_六道五轮: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterTarget(card, player, target) {
                                if (
                                    game.hasPlayer(function (current) {
                                        return current != player && current.hasSkill('冷雨宫本武藏_天眼_mark');
                                    })
                                ) {
                                    return target.hasSkill('冷雨宫本武藏_天眼_mark');
                                } else {
                                    return target != player;
                                }
                            },
                            check(card) {
                                11 - get.value(card);
                            },
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' });
                            },
                            filterCard(card) {
                                return get.type(card) == 'equip';
                            },
                            selectCard: [1, 4],
                            prompt: '弃置1至4张装备牌发动此技能',
                            content() {
                                'step 0';
                                event.num = cards.length;
                                ('step 1');
                                var nature = ['fire', 'thunder'];
                                player.line(target, nature.randomGet());
                                target.damage(nature.randomGet())._triggered = null;
                                ('step 2');
                                var list = ['冷雨地', '冷雨风', '冷雨水', '冷雨火'];
                                target.addTempSkill(list.randomGet(), { player: 'phaseBegin' });
                                ('step 3');
                                event.num--;
                                if (event.num > 0) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order() {
                                    return 6;
                                },
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        冷雨地: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            mark: true,
                            intro: {
                                content: '受到的非属性伤害+1',
                            },
                            filter(event, player) {
                                if (!event.nature) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        冷雨风: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            mark: true,
                            intro: {
                                content: '受到的属性伤害+1',
                            },
                            filter(event, player) {
                                if (event.nature) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        冷雨水: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            mark: true,
                            intro: {
                                content: '受到的雷电伤害+1',
                            },
                            filter(event, player) {
                                if (event.nature == 'thunder') return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        冷雨火: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            mark: true,
                            intro: {
                                content: '受到的火焰伤害+1',
                            },
                            filter(event, player) {
                                if (event.nature == 'fire') return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        冷雨鬼种之魔: {
                            nobracket: true,
                            group: ['冷雨鬼种之魔_1', '冷雨鬼种之魔_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase == player) return false;
                                        return event.num != 0;
                                    },
                                    content() {
                                        trigger.player.line(player, 'fire');
                                        player.draw();
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'recoverEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase == player) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.line(player, 'fire');
                                        player.gainMaxHp();
                                        ('step 1');
                                        var num1 = game.countPlayer();
                                        var num2 = game.countPlayer(function (current) {
                                            return current.maxHp < player.maxHp;
                                        });
                                        if (num2 + 1 >= num1) {
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        冷雨巴御前_乱战之心得: {
                            nobracket: true,
                            forced: true,
                            group: ['冷雨巴御前_乱战之心得_1', '冷雨巴御前_乱战之心得_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num1 = game.countPlayer(function (current) {
                                            return player != current && player.getFriends().includes(current);
                                        });
                                        var num2 = game.countPlayer(function (current) {
                                            return player.getEnemies().includes(current);
                                        });
                                        if (num1 > num2) return true;
                                        return false;
                                    },
                                    content() {
                                        trigger.num++;
                                        game.log(player, '造成伤害值+1');
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: ['phaseDrawBegin', 'recoverBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num1 = game.countPlayer(function (current) {
                                            return player != current && player.getFriends().includes(current);
                                        });
                                        var num2 = game.countPlayer(function (current) {
                                            return player.getEnemies().includes(current);
                                        });
                                        if (num1 < num2) return true;
                                        return false;
                                    },
                                    content() {
                                        trigger.num++;
                                        game.log(player, '获得了额外加成');
                                    },
                                },
                            },
                        },
                        冷雨巴御前_真言: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') > 0;
                            },
                            mark: true,
                            marktext: '菩萨',
                            init(player) {
                                player.storage.冷雨巴御前_真言 = 0;
                                player.markSkill('冷雨巴御前_真言');
                            },
                            selectTarget: [1, 3],
                            content() {
                                'step 0';
                                var nh = 0;
                                ('step 1');
                                player.discardPlayerCard('he', target, true);
                                ('step 2');
                                var card = result.cards[0];
                                if (get.color(card) == 'red') {
                                    player.storage.冷雨巴御前_真言 += 1;
                                    player.markSkill('冷雨巴御前_真言');
                                }
                            },
                            group: '冷雨巴御前_真言效果',
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨巴御前_真言效果: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.storage.冷雨巴御前_真言 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨巴御前_真言效果'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var damage = [1, 2, 3];
                                    player.storage.冷雨巴御前_真言 -= player.storage.冷雨巴御前_真言;
                                    player.markSkill('冷雨巴御前_真言');
                                    result.targets[0].damage(damage.randomGet(), 'fire');
                                }
                                ('step 2');
                                player
                                    .chooseTarget('令1名角色将手牌补至体力上限', function (card, player, target3) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 2) {
                                            return Math.min(5, target.maxHp) - target.countCards('h');
                                        }
                                        return att / 3;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    var target1 = result.targets[0];
                                    player.line(target1, 'green');
                                    var num = game.countPlayer();
                                    target1.draw(Math.min(num, target1.maxHp - target1.countCards('h')));
                                }
                            },
                        },
                        冷雨伊卡洛斯_导弹: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            check(event, player) {
                                var active = 0;
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (!i.isOut()) {
                                        if (get.attitude(player, i) > 0) {
                                            if (get.distance(player, i, 'attack') <= 1) {
                                                active--;
                                                if (i.hp > 1) active += 0.5;
                                            }
                                        } else if (get.attitude(player, i) < 0) {
                                            if (get.distance(player, i, 'attack') <= 1) {
                                                active++;
                                                if (i.hp <= 1) active += 0.5;
                                            }
                                        }
                                    }
                                }
                                if (active > 0) return 1;
                                return 0;
                            },
                            content() {
                                var targets = [];
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (!i.isOut()) {
                                        if (get.distance(player, i, 'attack') <= 1) {
                                            targets.push(i);
                                        }
                                    }
                                }
                                for (var i = 0; i < targets.length; i++) {
                                    var mubiao = targets[i];
                                    player.line(mubiao, 'thunder');
                                    player.useCard({ name: 'sha' }, targets[i]);
                                }
                            },
                            group: '冷雨伊卡洛斯_导弹效果',
                            ai: {
                                basic: {
                                    order: 10,
                                    useful: 1,
                                    value: 5,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        冷雨伊卡洛斯_导弹效果: {
                            nobracket: true,
                            trigger: {
                                player: 'shaAfter',
                            },
                            _priority: 20,
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.getParent(2).name != '冷雨伊卡洛斯_导弹效果' && event.target.isAlive();
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? -1 : 1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.useCard(trigger.card, trigger.target, false);
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (trigger.target.isAlive()) {
                                    player.chooseBool('是否继续发动？');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.goto(0);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨伊卡洛斯_绝对防御圈: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                trigger.num--;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return;
                                        var num = get.tag(card, 'damage');
                                        if (num > 0) {
                                            if (num > 1) return 0.5;
                                            return 0;
                                        }
                                    },
                                },
                            },
                        },
                        冷雨伊卡洛斯_阿波罗: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterCard: true,
                            selectCard: 2,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            filter(event, player) {
                                return player.countCards('he') > 1;
                            },
                            content() {
                                'step 0';
                                var damage = [1, 2];
                                target.damage(damage.randomGet());
                                ('step 1');
                                if (player.getEnemies().includes(target.previous)) {
                                    target.line(target.previous, 'fire');
                                    var damage1 = [1, 2];
                                    target.previous.damage(damage1.randomGet());
                                }
                                if (player.getEnemies().includes(target.next)) {
                                    target.line(target.next, 'fire');
                                    var damage2 = [1, 2];
                                    target.next.damage(damage2.randomGet());
                                }
                                if (player.getEnemies().includes(target.previous.previous)) {
                                    target.previous.line(target.previous.previous, 'fire');
                                    var damage3 = [1, 2];
                                    target.previous.previous.damage(damage3.randomGet());
                                }
                                if (player.getEnemies().includes(target.next.next)) {
                                    target.next.line(target.next.next, 'fire');
                                    var damage4 = [1, 2];
                                    target.next.next.damage(damage4.randomGet());
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨伊卡洛斯_万能卡片1: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', get.prompt('万能卡片'))
                                    .set('ai', function (card) {
                                        return 80 - get.value(card);
                                    });//QQQ
                                ('step 1');
                                if (result.bool) {
                                    player.judge();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.gainMaxHp();
                                        break;
                                    case 'heart':
                                        player.recover();
                                        break;
                                    case 'diamond':
                                        player.draw(3);
                                        break;
                                    case 'club':
                                        player.discard(player.getCards('j'));
                                        break;
                                    case 'club':
                                        player.draw(2);
                                        break;
                                    case 'spade':
                                        player.gain(player.getCards('j'));
                                        break;
                                    case 'spade':
                                        player.draw();
                                        break;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        冷雨伊卡洛斯_导弹Ⅱ: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                'step 0';
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return player != current;
                                    })
                                    .sortBySeat();
                                event.targets2 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets.length) {
                                    player.useCard({ name: 'sha' }, event.targets.shift());
                                    event.redo();
                                }
                            },
                            group: '冷雨伊卡洛斯_导弹效果Ⅱ',
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        var num = 0;
                                        for (var i of game.players) {
                                            if (i != player) {
                                                if (i.ai.shown == 0) return 0;
                                                num += get.damageEffect(i, player, player) > 0 ? 1 : -1;
                                            }
                                        }
                                        return num;
                                    },
                                },
                            },
                        },
                        冷雨伊卡洛斯_导弹效果Ⅱ: {
                            nobracket: true,
                            trigger: {
                                player: 'shaAfter',
                            },
                            _priority: 20,
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.getParent(2).name != '冷雨伊卡洛斯_导弹效果Ⅱ' && event.target.isAlive();
                            },
                            async content(event, trigger, player) {//QQQ
                                let num = 9;
                                while (num-- > 0) {
                                    const result = await player.judge((card) => card.suit == 'spade' ? -1 : 1).forResult();
                                    if (result && result.suit != 'spade') {
                                        await player.useCard(trigger.card, trigger.target, false);
                                    }
                                    else {
                                        break;
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨伊卡洛斯_绝对防御圈Ⅱ: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            _priority: -1,
                            filter(event, player) {
                                return event.num > 0 && event.num < 2;
                            },
                            forced: true,
                            content() {
                                if (trigger.source != player && trigger.source) {
                                    trigger.player = trigger.source;
                                } else {
                                    trigger.cancel();
                                }
                            },
                            group: '冷雨伊卡洛斯_绝对防御圈Ⅱ_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return;
                                        var num = get.tag(card, 'damage');
                                        if (num > 0) {
                                            if (num > 1) return 0.5;
                                            return 0;
                                        }
                                    },
                                },
                            },
                        },
                        冷雨伊卡洛斯_可移动装甲: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                trigger.num += 2;
                            },
                            group: '冷雨伊卡洛斯_可移动装甲_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDrawAfter',
                                    },
                                    filter(event, player) {
                                        if (!player.hasSkill('冷雨伊卡洛斯_可移动装甲_mark')) return true;
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        player.addSkill('冷雨伊卡洛斯_可移动装甲_mark');
                                        player.forcemin = true;
                                    },
                                },
                                mark: {
                                    marktext: '装',
                                    mark: true,
                                    intro: {
                                        content: '已失去装备区',
                                    },
                                },
                            },
                            mod: {
                                targetInRange() {
                                    return true;
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && player != target) {
                                        return false;
                                    }
                                },
                                maxHandcard(player, num) {
                                    return (num -= 2);
                                },
                            },
                        },
                        冷雨伊卡洛斯_潘多拉: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                if (get.mode() == 'identity') {
                                    if (player.identity == 'zhu') {
                                        var num1 = game.countPlayer(function (current) {
                                            return current.identity == 'zhong';
                                        });
                                        if (num1 < 1) return true;
                                    }
                                    if (player.identity == 'zhong') {
                                        var num2 = game.countPlayer(function (current) {
                                            return current.identity == 'zhong';
                                        });
                                        if (num2 < 2 && num2 > 0) return true;
                                    }
                                    if (player.identity == 'fan') {
                                        var num3 = game.countPlayer(function (current) {
                                            return current.identity == 'fan';
                                        });
                                        if (num3 < 2 && num3 > 0) return true;
                                    }
                                    return false;
                                } else {
                                    return true;
                                }
                            },
                            forced: true,
                            content() {
                                player.$skill('潘多拉系统');
                                player.discard(player.getCards('j'));
                                player.gainMaxHp();
                                player.recover();
                                player.removeSkill('冷雨伊卡洛斯_导弹');
                                player.removeSkill('冷雨伊卡洛斯_绝对防御圈');
                                player.removeSkill('冷雨伊卡洛斯_阿波罗');
                                player.removeSkill('冷雨伊卡洛斯_万能卡片1');
                                player.addSkill('冷雨伊卡洛斯_导弹Ⅱ');
                                player.addSkill('冷雨伊卡洛斯_绝对防御圈Ⅱ');
                                player.addSkill('冷雨伊卡洛斯_阿波罗');
                                player.addSkill('冷雨伊卡洛斯_可移动装甲');
                                player.awakenSkill('冷雨伊卡洛斯_潘多拉');
                            },
                        },
                        冷雨兰陵王_入阵: {
                            trigger: {
                                global: ['phaseBegin', 'phaseUseAfter', 'dieAfter'],
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                if (!player.previous.hasSkill('冷雨兰陵王_入阵_mark') && player.getFriends().includes(player.previous)) return true;
                                if (!player.next.hasSkill('冷雨兰陵王_入阵_mark') && player.getFriends().includes(player.next)) return true;
                                if (!player.previous.previous.hasSkill('冷雨兰陵王_入阵_mark') && player.getFriends().includes(player.previous.previous)) return true;
                                if (!player.next.next.hasSkill('冷雨兰陵王_入阵_mark') && player.getFriends().includes(player.next.next)) return true;
                                if (!player.previous.previous.previous.hasSkill('冷雨兰陵王_入阵_mark') && player.getFriends().includes(player.previous.previous.previous)) return true;
                                if (!player.next.next.next.hasSkill('冷雨兰陵王_入阵_mark') && player.getFriends().includes(player.next.next.next)) return true;
                                return false;
                            },
                            content() {
                                if (player.getFriends().includes(player.previous)) {
                                    player.line(player.previous, 'thunder');
                                    player.previous.addTempSkill('冷雨兰陵王_入阵_mark');
                                }
                                if (player.getFriends().includes(player.next)) {
                                    player.line(player.next, 'thunder');
                                    player.next.addTempSkill('冷雨兰陵王_入阵_mark');
                                }
                                if (player.getFriends().includes(player.previous.previous) && player.getFriends().includes(player.previous)) {
                                    player.previous.line(player.previous.previous, 'thunder');
                                    player.previous.previous.addTempSkill('冷雨兰陵王_入阵_mark');
                                }
                                if (player.getFriends().includes(player.next.next) && player.getFriends().includes(player.next)) {
                                    player.next.line(player.next.next, 'thunder');
                                    player.next.next.addTempSkill('冷雨兰陵王_入阵_mark');
                                }
                                if (player.getFriends().includes(player.previous.previous.previous) && player.getFriends().includes(player.previous.previous) && player.getFriends().includes(player.previous)) {
                                    player.previous.previous.line(player.previous.previous.previous, 'thunder');
                                    player.previous.previous.previous.addTempSkill('冷雨兰陵王_入阵_mark');
                                }
                                if (player.getFriends().includes(player.next.next.next) && player.getFriends().includes(player.next.next) && player.getFriends().includes(player.next)) {
                                    player.next.next.line(player.next.next.next, 'thunder');
                                    player.next.next.next.addTempSkill('冷雨兰陵王_入阵_mark');
                                }
                            },
                            subSkill: {
                                mark: {
                                    marktext: '阵',
                                    mark: true,
                                    intro: {
                                        content: '已入阵',
                                    },
                                },
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        冷雨兰陵王_隐美的假面: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            check(event, player) {
                                var num = 0;
                                for (var i of game.players) {
                                    num += i.hasSkill('冷雨兰陵王_入阵_mark');
                                }
                                if (num > 1) return true;
                                return false;
                            },
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.hasSkill('冷雨兰陵王_入阵_mark');
                                });
                                if (num > 0) return true;
                                return false;
                            },
                            prompt(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.hasSkill('冷雨兰陵王_入阵_mark');
                                });
                                return '隐美的假面:是否令' + get.cnNumber(num) + '名友方角色摸1张牌？';
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('冷雨兰陵王_入阵_mark')) {
                                        player.line(current, 'thunder');
                                        current.draw();
                                    }
                                });
                            },
                            group: '冷雨兰陵王_隐美的假面_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'recoverAfter',
                                    },
                                    filter(event, player) {
                                        var num = game.countPlayer(function (current) {
                                            return current.hasSkill('冷雨兰陵王_入阵_mark');
                                        });
                                        if (num > 0) return true;
                                        return false;
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current != player && current.hasSkill('冷雨兰陵王_入阵_mark')) {
                                                player.line(current, 'green');
                                                current.recover();
                                            }
                                        });
                                    },
                                },
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && player != target) {
                                        return false;
                                    }
                                },
                            },
                            ai: {
                                order: 6,
                                threaten: 1.3,
                                result: {
                                    target: 3,
                                },
                            },
                        },
                        冷雨兰陵王_魔性之貌: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.hasSkill('冷雨兰陵王_入阵_mark');
                            },
                            marktext: '剑',
                            forced: true,
                            content() {
                                'step 0';
                                var next = trigger.player.chooseCard('he', [1, 2], get.prompt('冷雨兰陵王_魔性之貌', player));
                                next.ai = function (card) {
                                    if (get.attitude(trigger.player, player) > 0) {
                                        return 8 - get.value(card);
                                    }
                                    if (get.attitude(trigger.player, player) <= 0) {
                                        return card.name == 'du';
                                    }
                                    return false;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.lose(result.cards, ui.special);
                                    trigger.player.$give(result.cards.length, player);
                                    player.storage.冷雨兰陵王_魔性之貌 = player.storage.冷雨兰陵王_魔性之貌.concat(result.cards);
                                    player.markSkill('冷雨兰陵王_魔性之貌');
                                    trigger.player.draw(result.cards.length);
                                } else {
                                    event.finish();
                                }
                            },
                            init(player) {
                                player.storage.冷雨兰陵王_魔性之貌 = [];
                                player.storage.冷雨兰陵王_魔性之貌1 = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            group: '冷雨兰陵王_魔性之貌_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.冷雨兰陵王_魔性之貌.length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.冷雨兰陵王_魔性之貌1 = player.storage.冷雨兰陵王_魔性之貌.length;
                                        player.gain(player.storage.冷雨兰陵王_魔性之貌);
                                        player.storage.冷雨兰陵王_魔性之貌 = [];
                                        ('step 1');
                                        player.addTempSkill('冷雨兰陵王_魔性之貌效果');
                                    },
                                },
                            },
                        },
                        冷雨兰陵王_魔性之貌效果: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && player.storage.冷雨兰陵王_魔性之貌1) return (num += player.storage.冷雨兰陵王_魔性之貌1);
                                },
                                globalFrom(from, to, distance) {
                                    return distance - from.storage.冷雨兰陵王_魔性之貌1;
                                },
                            },
                        },
                        冷雨兰陵王_兰陵王入阵曲: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.hasSkill('冷雨兰陵王_入阵_mark');
                                });
                            },
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.remove(trigger.target);
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (!event.targets[i].hasSkill('冷雨兰陵王_入阵_mark')) {
                                        event.targets.splice(i--, 1);
                                    }
                                }
                                ('step 1');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    if (trigger.target.isAlive()) {
                                        player.line(event.current, 'thunder');
                                        event.current.chooseControl('摸牌出杀', '失去体力使用双杀').ai = function () {
                                            if (event.current.hp > 2 && trigger.target.countCards('h') < 3) return '失去体力使用双杀';
                                            if (event.current.hp > 3) return '失去体力使用双杀';
                                            if (event.current.countCards('h') < 3) return '摸牌出杀';
                                            if (trigger.target.countCards('h') < 1 && event.current.hp > 1) return '失去体力使用双杀';
                                            return '摸牌出杀';
                                        };
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control == '摸牌出杀') {
                                    event.current.draw();
                                    event.current.useCard(trigger.card, trigger.target, false);
                                } else {
                                    event.current.loseHp();
                                    event.current.useCard(trigger.card, trigger.target, false);
                                    event.current.useCard(trigger.card, trigger.target, false);
                                }
                                event.goto(1);
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨荆轲_抑制: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num1 = game.countPlayer();
                                var num2 = game.countPlayer(function (current) {
                                    return current.hp < trigger.player.hp;
                                });
                                if (num2 + 1 >= num1) {
                                    trigger.num++;
                                }
                                ('step 1');
                                trigger.source = trigger.player;
                            },
                        },
                        冷雨荆轲_图策: {
                            nobracket: true,
                            trigger: {
                                global: 'useCardToBefore',
                            },
                            init(player) {
                                player.storage.冷雨荆轲_图策 = [];
                            },
                            marktext: '策',
                            _priority: 12,
                            filter(event, player) {
                                return event.target && event.target == player;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (player.countCards('he')) {
                                    player.chooseCard('将' + get.cnNumber(1) + '张手牌置于武将牌上作为<策>', 1, true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards && result.cards.length) {
                                    player.lose(result.cards, ui.special);
                                    player.storage.冷雨荆轲_图策 = player.storage.冷雨荆轲_图策.concat(result.cards);
                                    player.markSkill('冷雨荆轲_图策');
                                    game.log(player, '将', result.cards, '置于武将牌上作为<策>');
                                }
                            },
                            intro: {
                                content: 'cards',
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && player != target) {
                                        return false;
                                    }
                                },
                            },
                            group: ['冷雨荆轲_图策_1', '冷雨荆轲_谋划'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.冷雨荆轲_图策.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCardButton('移去1张"策"', true, player.storage.冷雨荆轲_图策);
                                        ('step 1');
                                        var card = result.links[0];
                                        player.storage.冷雨荆轲_图策.remove(card);
                                        card.discard();
                                        player.$throw(card);
                                        game.log(player, '将', card, '置入弃牌堆');
                                        player.draw();
                                        if (player.storage.冷雨荆轲_图策.length == 0) {
                                            player.unmarkSkill('冷雨荆轲_图策');
                                        }
                                        ('step 2');
                                        if (player.hp <= player.storage.冷雨荆轲_图策.length) {
                                            player.recover();
                                        }
                                    },
                                },
                            },
                        },
                        冷雨荆轲_谋划: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            init(player) {
                                player.storage.冷雨荆轲_谋划 = 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num1 = player.storage.冷雨荆轲_图策.length;
                                var num2 = player.storage.冷雨荆轲_谋划;
                                event.num1 = num1;
                                event.num2 = num2;
                                var str = '令目标摸' + get.cnNumber(num1) + '张牌';
                                if (num2) {
                                    str += ',弃置' + get.cnNumber(num2) + '张牌';
                                }
                                player
                                    .chooseTarget(get.prompt('冷雨荆轲_谋划'), function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (event.num1 >= event.num2) {
                                            return get.attitude(player, target) > 0;
                                        } else {
                                            if (event.num1 < 1) {
                                                return get.attitude(player, target) <= 0;
                                            }
                                            if (event.num1 < 2 && event.num2 > 1) {
                                                return get.attitude(player, target) <= 0;
                                            }
                                            if (event.num1 < 3 && event.num2 > 2) {
                                                return get.attitude(player, target) <= 0;
                                            }
                                            if (event.num1 < 4 && event.num2 > 3) {
                                                return get.attitude(player, target) <= 0;
                                            }
                                            if (event.num1 > 3 && event.num2 - event.num1 < 2) {
                                                return get.attitude(player, target) > 0;
                                            }
                                            if (event.num1 > 3 && event.num2 - event.num1 > 2) {
                                                return get.attitude(player, target) <= 0;
                                            }
                                            if (event.num1 + target.countCards('he') == event.num2) {
                                                return get.attitude(player, target) <= 0;
                                            }
                                        }
                                    })
                                    .set('prompt2', str);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.draw(event.num1);
                                    player.storage.冷雨荆轲_谋划 += 1;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.num2) {
                                    event.target.chooseToDiscard(event.num2, true, 'he');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        冷雨荆轲_图穷匕见: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                var num = game.countPlayer();
                                return player.storage.冷雨荆轲_图策 && player.storage.冷雨荆轲_图策.length >= num * 2;
                            },
                            forced: true,
                            derivation: '冷雨荆轲_不归匕首',
                            content() {
                                'step 0';
                                player.$skill('图穷匕见');
                                player
                                    .chooseTarget(get.prompt('冷雨荆轲_图穷匕见'), true, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) > 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0], 'thunder');
                                    var target = result.targets[0];
                                    target.gain(player.storage.冷雨荆轲_图策.slice(0), 'gain2', 'log');
                                    player.storage.冷雨荆轲_图策.length = 0;
                                    player.unmarkSkill('冷雨荆轲_图策');
                                    target.showHandcards();
                                }
                                ('step 2');
                                var target = result.targets[0];
                                var num1 = target.countCards('h', function (card) {
                                    return card.suit == 'spade';
                                });
                                player.gainMaxHp(num1);
                                ('step 3');
                                var target = result.targets[0];
                                var num2 = target.countCards('h', function (card) {
                                    return card.suit == 'heart';
                                });
                                player.recover(num2);
                                ('step 4');
                                var target = result.targets[0];
                                var num3 = target.countCards('h', function (card) {
                                    return card.suit == 'club';
                                });
                                player.changeHujia(num3);
                                ('step 5');
                                var target = result.targets[0];
                                var num4 = target.countCards('h', function (card) {
                                    return card.suit == 'diamond';
                                });
                                player.draw(num4);
                                ('step 6');
                                player.awakenSkill('冷雨荆轲_图穷匕见');
                                player.addSkill('冷雨荆轲_不归匕首');
                            },
                        },
                        冷雨荆轲_不归匕首: {
                            nobracket: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    var num = game.countPlayer();
                                    if (card.name == 'sha') return (num += num);
                                },
                                globalFrom(from, to, distance) {
                                    var num = game.countPlayer();
                                    return distance - num;
                                },
                            },
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                player.loseMaxHp();
                                trigger.directHit = true;
                            },
                            group: '冷雨荆轲_不归匕首_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.gainMaxHp(2);
                                        player.draw(3);
                                    },
                                },
                            },
                        },
                        冷雨阿喀琉斯_疾风: {
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            mark: true,
                            marktext: '疾',
                            init(player) {
                                player.storage.冷雨阿喀琉斯_疾风 = 0;
                                player.markSkill('冷雨阿喀琉斯_疾风');
                            },
                            filter(event, player) {
                                return _status.currentPhase == player;
                            },
                            content() {
                                'step 0';
                                player.storage.冷雨阿喀琉斯_疾风 += 1;
                                ('step 1');
                                var num = player.hp;
                                if (player.storage.冷雨阿喀琉斯_疾风 > num) {
                                    player.chooseTarget(
                                        '选择攻击距离内任意名其他角色对其造成1点伤害',
                                        [1, Infinity],
                                        function (card, player, target) {
                                            return target != player && get.distance(player, target, 'attack') <= 1;
                                        },
                                        function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        }
                                    );
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (targets && targets.length) {
                                    player.line(targets, 'fire');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage();
                                    }
                                }
                            },
                            group: '冷雨阿喀琉斯_疾风_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.冷雨阿喀琉斯_疾风 > 0;
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        var nh = player.storage.冷雨阿喀琉斯_疾风;
                                        player.storage.冷雨阿喀琉斯_疾风 -= nh;
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨阿喀琉斯_小世界: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            init(player) {
                                player.storage.冷雨阿喀琉斯_小世界 = [];
                            },
                            marktext: '盾',
                            _priority: 12,
                            filter(event, player) {
                                return !player.getStat('damage');
                            },
                            content() {
                                'step 0';
                                player.draw(2 + player.maxHp - player.hp);
                                ('step 1');
                                if (player.countCards('he')) {
                                    player.chooseCard('将' + get.cnNumber(player.hp) + '张手牌置于武将牌上作为<盾>', player.hp, true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards && result.cards.length) {
                                    player.lose(result.cards, ui.special);
                                    player.storage.冷雨阿喀琉斯_小世界 = player.storage.冷雨阿喀琉斯_小世界.concat(result.cards);
                                    player.markSkill('冷雨阿喀琉斯_小世界');
                                    game.log(player, '将', result.cards, '置于武将牌上作为<盾>');
                                }
                            },
                            intro: {
                                content: 'cards',
                            },
                            mod: {
                                globalTo(from, to, current) {
                                    return current + to.storage.冷雨阿喀琉斯_小世界.length;
                                },
                            },
                            group: ['冷雨阿喀琉斯_小世界_1', '冷雨阿喀琉斯_小世界_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    _priority: -100,
                                    forced: true,
                                    filter(event, player) {
                                        if (player.hasSkill('冷雨阿喀琉斯_不凋花')) return false;
                                        return player.storage.冷雨阿喀琉斯_小世界.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCardButton('移去1张"盾",获得等同于伤害值的护甲', true, player.storage.冷雨阿喀琉斯_小世界);
                                        ('step 1');
                                        var card = result.links[0];
                                        player.storage.冷雨阿喀琉斯_小世界.remove(card);
                                        card.discard();
                                        player.$throw(card);
                                        game.log(player, '将', card, '置入弃牌堆');
                                        player.changeHujia(trigger.num);
                                        if (player.storage.冷雨阿喀琉斯_小世界.length == 0) {
                                            player.unmarkSkill('冷雨阿喀琉斯_小世界');
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.冷雨阿喀琉斯_小世界.length;
                                    },
                                    content() {
                                        player.gain(player.storage.冷雨阿喀琉斯_小世界);
                                        player.storage.冷雨阿喀琉斯_小世界 = [];
                                        player.unmarkSkill('冷雨阿喀琉斯_小世界');
                                    },
                                },
                            },
                        },
                        冷雨阿喀琉斯_不凋花: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                var cards = get.cards();
                                var card = cards[0];
                                if (card.suit == 'spade') {
                                    player.gain(card, 'gain2', 'log');
                                    trigger.num++;
                                    player.awakenSkill('冷雨阿喀琉斯_不凋花');
                                } else {
                                    trigger.cancel();
                                    player.gain(cards, 'gain2', 'log');
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨_甘霖: {
                            nobracket: true,
                            group: '冷雨_甘霖效果',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            _priority: -1000,
                            forced: true,
                            content() {
                                'step 0';
                                event.num = 4;
                                ('step 1');
                                var list = get.gainableSkills();
                                list.remove('冷雨_甘霖');
                                list = list.randomGets(5);
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    var clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 5) {
                                                translation = translation.slice(1, 5);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list[i];
                                        }
                                    }
                                    dialog.add(ui.create.div('.placeholder'));
                                    event.switchToAuto = function () {
                                        event._result = event.skillai();
                                        dialog.close();
                                        game.resume();
                                    };
                                    _status.imchoosing = true;
                                    game.pause();
                                } else {
                                    event._result = event.skillai();
                                }
                                ('step 2');
                                _status.imchoosing = false;
                                var link = result;
                                player.addTempSkill(link, 'phaseEnd');
                                player.popup(link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                                player.checkMarks();
                                player.markSkill('冷雨_甘霖');
                                ('step 3');
                                event.num--;
                                if (event.num > 0) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                            },
                            intro: {
                                content(storage, player) {
                                    return '当前技能:' + get.translation(player.tempSkills.冷雨_甘霖);
                                },
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player(player) {
                                        if (player.getStat().skill.冷雨_甘霖) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        冷雨_甘霖效果: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            _priority: -1000,
                            content() {
                                'step 0';
                                event.num = 4;
                                ('step 1');
                                var list = get.gainableSkills();
                                list.remove('冷雨_甘霖');
                                list = list.randomGets(5);
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    var clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 5) {
                                                translation = translation.slice(1, 5);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list[i];
                                        }
                                    }
                                    dialog.add(ui.create.div('.placeholder'));
                                    event.switchToAuto = function () {
                                        event._result = event.skillai();
                                        dialog.close();
                                        game.resume();
                                    };
                                    _status.imchoosing = true;
                                    game.pause();
                                } else {
                                    event._result = event.skillai();
                                }
                                ('step 2');
                                _status.imchoosing = false;
                                var link = result;
                                player.addTempSkill(link, { player: 'phaseBegin' });
                                player.popup(link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                                player.checkMarks();
                                player.markSkill('冷雨_甘霖');
                                ('step 3');
                                event.num--;
                                if (event.num > 0) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                            },
                            intro: {
                                content(storage, player) {
                                    return '当前技能:' + get.translation(player.additionalSkills.冷雨_甘霖);
                                },
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player(player) {
                                        if (player.getStat().skill.冷雨_甘霖) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        冷雨_作者: {
                            nobracket: true,
                            forced: true,
                            group: ['冷雨_作者_1', '冷雨_作者_2', '冷雨_作者_3', '冷雨_作者_4'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['linkBegin', 'turnOverBegin', 'loseHpBegin', 'loseMaxHpBegin'],
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (get.type(card) == 'delay') return false;
                                        },
                                        suit(card, suit) {
                                            return 'none';
                                        },
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'chooseToCompareBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target && event.target == player;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                4: {
                                    trigger: {
                                        global: ['gainAfter', 'gainBefore', 'damageBegin', 'damageEnd', 'useCard', 'recoverEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isMad();
                                    },
                                    content() {
                                        player.unMad();
                                    },
                                },
                            },
                        },
                        冷雨阿塔兰忒_诉状箭书: {
                            nobracket: true,
                            usable: 3,
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.冷雨阿塔兰忒_诉状箭书 = 3;
                                player.markSkill('冷雨阿塔兰忒_诉状箭书');
                            },
                            marktext: '箭',
                            intro: {
                                content: 'mark',
                            },
                            filter(event, player) {
                                if (player.storage.冷雨阿塔兰忒_诉状箭书 == 2) return player.countCards('he', { type: 'equip' }) > 0;
                                if (player.storage.冷雨阿塔兰忒_诉状箭书 == 1) return player.countCards('h', { type: 'trick' }) > 0;
                                return player.countCards('h', { type: 'basic' }) > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                if (player.storage.冷雨阿塔兰忒_诉状箭书 == 3) {
                                    var cards = player.getCards('h', function (card) {
                                        return get.type(card) == 'basic';
                                    });
                                }
                                if (player.storage.冷雨阿塔兰忒_诉状箭书 == 2) {
                                    var cards = player.getCards('he', function (card) {
                                        return get.type(card) == 'equip';
                                    });
                                }
                                if (player.storage.冷雨阿塔兰忒_诉状箭书 == 1) {
                                    var cards = player.getCards('h', function (card) {
                                        return get.type(card) == 'trick';
                                    });
                                }
                                var types = [];
                                if (Array.isArray(cards)) for (var i of cards) {
                                    types.add(get.type(i));
                                }
                                var nh = types.length;
                                event.num += nh;
                                player.$give(cards, target);
                                target.gain(cards, player);
                                ('step 2');
                                player.chooseTarget(
                                    '选择除该角色外的其他角色对其造成1点神圣伤害',
                                    [1, Infinity],
                                    function (card, player, target1) {
                                        return target1 != player && target1 != target;
                                    },
                                    function (target1) {
                                        return -get.attitude(_status.event.player, target1);
                                    }
                                );
                                ('step 3');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (targets && targets.length) {
                                    player.line(targets, 'fire');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage()._triggered = null;
                                    }
                                }
                                ('step 5');
                                player.storage.冷雨阿塔兰忒_诉状箭书--;
                            },
                            group: '冷雨阿塔兰忒_诉状箭书_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        var nh = player.storage.冷雨阿塔兰忒_诉状箭书;
                                        player.storage.冷雨阿塔兰忒_诉状箭书 += 3 - nh;
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                                order: 1,
                                result: {
                                    target: 3,
                                },
                            },
                        },
                        冷雨阿塔兰忒_神罚的野猪: {
                            trigger: {
                                global: ['dieAfter', 'phaseBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            popup: false,
                            _priority: 25,
                            fixed: true,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current != player && player.getFriends().includes(current);
                                });
                                if (!num > 0) return true;
                                return false;
                            },
                            content() {
                                player.discard(player.getCards('j'));
                                var hp = player.hp,
                                    maxHp = player.maxHp + game.countPlayer(),
                                    hujia = player.hujia;
                                player.init('冷雨神罚的野猪');
                                player.hp = hp;
                                player.maxHp = maxHp;
                                player.hujia = hujia;
                                player.update();
                                player.draw(3);
                                player.awakenSkill('冷雨阿塔兰忒_神罚的野猪');
                                game.log(player, '<span style="color: red">陷入狂暴</span>');
                            },
                        },
                        冷雨神罚的野猪_闇天之弓: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { type: 'basic' }) > 1;
                            },
                            filterCard(card) {
                                return get.type(card) == 'basic';
                            },
                            selectCard: 2,
                            content() {
                                'step 0';
                                event.current = player.next;
                                ('step 1');
                                player.line(event.current, 'fire');
                                event.current.chooseToRespond({ name: 'shan' });
                                ('step 2');
                                if (result.bool == false) {
                                    player.line(event.current, 'fire');
                                    event.current.damage();
                                }
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 6,
                                threaten: 2,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨神罚的野猪_北斗之七箭: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(game.countPlayer(), player.maxHp - player.hp);
                                ('step 1');
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return player.getEnemies().includes(current);
                                    })
                                    .sortBySeat();
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.randomGet();
                                    player.line(target, 'fire');
                                    target.damage()._triggered = null;
                                }
                                ('step 3');
                                event.num--;
                                ('step 4');
                                if (event.num > 0) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        冷雨神罚的野猪_变化: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                if (player.previous.hp == player.next.hp && player.previous.countCards('h') == player.next.countCards('h')) return false;
                                if (player.previous.hp == player.next.hp && player.previous.countCards('h') != player.next.countCards('h')) return true;
                                if (player.previous.hp != player.next.hp && player.previous.countCards('h') == player.next.countCards('h')) return true;
                                if (player.previous.hp != player.next.hp && player.previous.countCards('h') != player.next.countCards('h')) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var num;
                                if (player.previous.hp > player.next.hp) {
                                    num = player.previous.hp - player.next.hp;
                                } else {
                                    num = player.next.hp - player.previous.hp;
                                }
                                player.recover(num);
                                ('step 1');
                                var nh;
                                if (player.previous.countCards('h') > player.next.countCards('h')) {
                                    nh = player.previous.countCards('h') - player.next.countCards('h');
                                } else {
                                    nh = player.next.countCards('h') - player.previous.countCards('h');
                                }
                                player.draw(nh);
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨清姬_谎言破却: {
                            nobracket: true,
                            srlose: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.countCards('h') > 0;
                            },
                            selectTarget: [1, 2],
                            content() {
                                'step 0';
                                target.chooseControl('♠️️', '♣️️', '♥️️', '♦️️').ai = function (event, player) {
                                    var card1 = player.getCards('h', { suit: 'spade' });
                                    if (player.countCards('h') / card1.length < 2.5) return '♠️️';
                                    var card2 = player.getCards('h', { suit: 'club' });
                                    if (player.countCards('h') / card2.length < 2.5) return '♣️️';
                                    var card3 = player.getCards('h', { suit: 'heart' });
                                    if (player.countCards('h') / card3.length < 2.5) return '♥️️';
                                    var card4 = player.getCards('h', { suit: 'diamond' });
                                    if (player.countCards('h') / card4.length < 2.5) return '♦️️';
                                    return '♦️️';
                                };
                                ('step 1');
                                game.log(target, '选择了' + get.translation(result.control));
                                target.popup(result.control);
                                event.card = target.getCards('h').randomGet();
                                player.gain(event.card, target);
                                target.$give(event.card, player);
                                ('step 2');
                                var card = event.card;
                                if (result.control == '♠️️') {
                                    if (card.suit != 'spade') {
                                        player.line(target, 'white');
                                        target.addTempSkill('冷雨清姬_谎言破却_mark');
                                        player.addTempSkill('冷雨清姬_跟踪');
                                        target.loseMaxHp(Math.max(1, target.maxHp - target.hp));
                                        event.finish();
                                    } else {
                                        event.finish();
                                    }
                                }
                                if (result.control == '♣️️') {
                                    if (card.suit != 'club') {
                                        player.line(target, 'white');
                                        target.addTempSkill('冷雨清姬_谎言破却_mark');
                                        player.addTempSkill('冷雨清姬_跟踪');
                                        target.loseMaxHp(Math.max(1, target.maxHp - target.hp));
                                        event.finish();
                                    } else {
                                        event.finish();
                                    }
                                }
                                if (result.control == '♥️️') {
                                    if (card.suit != 'heart') {
                                        player.line(target, 'white');
                                        target.addTempSkill('冷雨清姬_谎言破却_mark');
                                        player.addTempSkill('冷雨清姬_跟踪');
                                        target.loseMaxHp(Math.max(1, target.maxHp - target.hp));
                                        event.finish();
                                    } else {
                                        event.finish();
                                    }
                                }
                                if (result.control == '♦️️') {
                                    if (card.suit != 'diamond') {
                                        player.line(target, 'white');
                                        target.addTempSkill('冷雨清姬_谎言破却_mark');
                                        player.addTempSkill('冷雨清姬_跟踪');
                                        target.loseMaxHp(Math.max(1, target.maxHp - target.hp));
                                        event.finish();
                                    } else {
                                        event.finish();
                                    }
                                }
                            },
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '追',
                                    intro: {
                                        content: '已被清姬锁定',
                                    },
                                },
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨清姬_跟踪: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (_status.currentPhase == from && to.hasSkill('冷雨清姬_谎言破却_mark')) {
                                        return distance - from.countUsed();
                                    }
                                },
                            },
                        },
                        冷雨清姬_焰色接吻: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('冷雨清姬_焰色接吻'), function (card, player, target) {
                                        return target != player && target.countCards('h') > 0;
                                    })
                                    .set('ai', function () {
                                        return Math.random();
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    var card = target.getCards('h').randomGet();
                                    player.showCards(card);
                                    var card1 = player.getCards('h').randomGet();
                                    player.showCards(card1);
                                    if (get.type(card) == get.type(card1)) player.addTempSkill('冷雨清姬_焰色接吻_use');
                                }
                            },
                            subSkill: {
                                use: {
                                    mod: {
                                        cardUsable(card) {
                                            if (get.info(card) && get.info(card).forceUsable) return;
                                            return Infinity;
                                        },
                                    },
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        冷雨清姬_转身火生三昧: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 2],
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                var damage = [1, 2];
                                target.damage(damage.randomGet(), 'fire');
                                ('step 1');
                                if (Math.random() <= 0.3) {
                                    target.turnOver(true);
                                }
                                ('step 2');
                                target.addTempSkill('冷雨灼烧', { player: 'phaseEnd' });
                            },
                            ai: {
                                threaten: 2.1,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨灼烧: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            mark: true,
                            intro: {
                                content: '处于灼烧状态',
                            },
                            forced: true,
                            content() {
                                player.damage('fire', 'nosource');
                            },
                        },
                        冷雨茨木童子_罗生门大怨起: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget() {
                                var player = _status.event.player;
                                var num = player.maxHp;
                                return [1, Math.min(num - 1, 3)];
                            },
                            filter(event, player) {
                                var num = player.maxHp;
                                if (!num < 1) return true;
                                return false;
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            mark: true,
                            marktext: '怨',
                            init(player) {
                                player.storage.冷雨茨木童子_罗生门大怨起1 = 0;
                                player.storage.冷雨茨木童子_罗生门大怨起 = 0;
                                player.markSkill('冷雨茨木童子_罗生门大怨起');
                            },
                            contentBefore() {
                                player.storage.冷雨茨木童子_罗生门大怨起1 += player.maxHp - player.hp;
                                var num = targets.length;
                                player.loseMaxHp(num);
                                player.storage.冷雨茨木童子_罗生门大怨起 += num;
                                player.markSkill('冷雨茨木童子_罗生门大怨起');
                            },
                            content() {
                                target.addTempSkill('冷雨茨木童子_罗生门大怨起_mark');
                                player.addTempSkill('冷雨茨木童子_罗生门大怨起_use');
                                player.addTempSkill('冷雨茨木童子_罗生门大怨起_buff');
                            },
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current.hasSkill('冷雨茨木童子_罗生门大怨起_mark')) {
                                                player.line(current, 'fire');
                                                var card = current.getCards('h').randomGet();
                                                player.showCards(card);
                                                var card1 = trigger.card;
                                                if (get.color(card) == get.color(card1)) current.damage();
                                            }
                                        });
                                    },
                                },
                                buff: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    popup: false,
                                    forced: true,
                                    content() {
                                        var num = player.storage.冷雨茨木童子_罗生门大怨起;
                                        var hp = player.hp + num - player.storage.冷雨茨木童子_罗生门大怨起1,
                                            maxHp = player.maxHp + num;
                                        player.maxHp = maxHp;
                                        player.hp = hp;
                                        player.update();
                                        player.storage.冷雨茨木童子_罗生门大怨起 -= player.storage.冷雨茨木童子_罗生门大怨起;
                                        player.markSkill('冷雨茨木童子_罗生门大怨起');
                                    },
                                },
                                mark: {
                                    marktext: '怨',
                                    mark: true,
                                    intro: {
                                        content: '已获得<怨>标记',
                                    },
                                },
                            },
                            ai: {
                                order: 20,
                                threaten: 2,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨茨木童子_大江山大炎起: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 3],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(10);
                                player.showCards(event.cards);
                                ('step 1');
                                event.num = 0;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.suit == 'heart') event.num++;
                                    ui.discardPile.appendChild(i);
                                }
                                player.$throw(event.cards);
                                if (event.num) {
                                    target.damage(event.num, 'fire');
                                }
                            },
                            ai: {
                                order: 6,
                                threaten: 2,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨酒吞童子_果实的酒气: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h', { color: 'black' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt('冷雨酒吞童子_果实的酒气'),
                                    [1, player.countCards('h', { color: 'black' })],
                                    function (card, player, target) {
                                        return target != player;
                                    },
                                    function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    player.showHandcards();
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'fire');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].goMad({ player: 'phaseBegin' });
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨酒吞童子_神便鬼毒: {
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'jiu';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt('冷雨酒吞童子_神便鬼毒'),
                                    [1, Infinity],
                                    function (card, player, target) {
                                        return target != player && get.distance(player, target, 'attack') <= 1;
                                    },
                                    function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'fire');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage();
                                        targets[i].addTempSkill('fengyin', { player: 'phaseEnd' });
                                        targets[i].addTempSkill('冷雨毒', { player: 'phaseAfter' });
                                        if (Math.random() <= 0.4) {
                                            targets[i].addTempSkill('冷雨酒吞童子_神便鬼毒_mark', { player: 'phaseEnd' });
                                        }
                                    }
                                }
                            },
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '蚀',
                                    intro: {
                                        content: '已进入蚀毒状态',
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨毒: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            mark: true,
                            intro: {
                                content: '处于中毒状态',
                            },
                            forced: true,
                            content() {
                                if (player.hasSkill('冷雨酒吞童子_神便鬼毒_mark')) {
                                    player.loseHp(2);
                                } else {
                                    player.loseHp();
                                }
                            },
                        },
                        冷雨伊丽莎白_嗜虐的魅力: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return !player.storage.冷雨伊丽莎白_嗜虐的魅力;
                            },
                            content() {
                                'step 0';
                                player.storage.冷雨伊丽莎白_嗜虐的魅力 = true;
                                var maxHp = player.maxHp + 1,
                                    hp = player.hp + 1;
                                player.maxHp += 1;
                                player.hp += 1;
                                if (get.mode() == 'identity') {
                                    player.showIdentity();
                                }
                                player.update();
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current.sex == 'female' && player.getFriends().includes(current)) {
                                        player.line(current, 'green');
                                        var maxHp = current.maxHp + 1,
                                            hp = current.hp + 1;
                                        current.maxHp += 1;
                                        current.hp += 1;
                                        if (get.mode() == 'identity') {
                                            current.showIdentity();
                                        }
                                        current.update();
                                    }
                                });
                            },
                            group: '冷雨伊丽莎白_嗜虐的魅力_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseDrawBegin',
                                    },
                                    filter(event, player) {
                                        return (event.player.sex == 'female' && player.getFriends().includes(event.player)) || event.player == player;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        冷雨伊丽莎白_拷问技术: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.getEquips(1)) return false;
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        冷雨伊丽莎白_龙吟雷声: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectCard: 1,
                            content() {
                                'step 0';
                                event.current = player.next;
                                ('step 1');
                                player.line(event.current, 'thunder');
                                event.current.chooseControl('弃牌', '受伤').ai = function () {
                                    if (event.current.hasSkillTag('nothunder')) return '受伤';
                                    if (event.current.countCards('h') > 3) return '弃牌';
                                    if (event.current.hp < 4) return '弃牌';
                                    if (event.current.hp > 4) return '受伤';
                                    return '弃牌';
                                };
                                ('step 2');
                                if (result.control == '弃牌') {
                                    if (event.current.countCards('he') > 1) {
                                        event.current.chooseToDiscard(2, 'he', true);
                                    } else {
                                        if (player.hasSkill('冷雨伊丽莎白_鲜血魔女_mark')) {
                                            var damage = [2, 3];
                                            event.current.damage(damage.randomGet(), 'thunder');
                                        } else {
                                            var damage = [1, 2];
                                            event.current.damage(damage.randomGet(), 'thunder');
                                        }
                                    }
                                } else {
                                    if (player.hasSkill('冷雨伊丽莎白_鲜血魔女_mark')) {
                                        var damage = [2, 3];
                                        event.current.damage(damage.randomGet(), 'thunder');
                                    } else {
                                        var damage = [1, 2];
                                        event.current.damage(damage.randomGet(), 'thunder');
                                    }
                                }
                                ('step 3');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        冷雨伊丽莎白_鲜血魔女: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            group: '冷雨伊丽莎白_鲜血魔女_1',
                            forced: true,
                            filter(event, player) {
                                var nh = game.countPlayer();
                                var num = game.countPlayer(function (current) {
                                    return current.hasSkill('冷雨伊丽莎白_鲜血魔女_mark');
                                });
                                if (num == nh - 1) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.$skill('鲜血魔女');
                                var num = game.countPlayer(function (current) {
                                    return current.hasSkill('冷雨伊丽莎白_鲜血魔女_mark');
                                });
                                player.gainMaxHp(num);
                                player.recover(num);
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current.hasSkill('冷雨伊丽莎白_鲜血魔女_mark')) {
                                        current.removeSkill('冷雨伊丽莎白_鲜血魔女_mark');
                                    }
                                });
                                ('step 2');
                                player.discard(player.getCards('j'));
                                player.draw(3);
                                player.addSkill('冷雨伊丽莎白_鲜血魔女_mark');
                                player.awakenSkill('冷雨伊丽莎白_鲜血魔女');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.num > 0;
                                    },
                                    content() {
                                        trigger.player.addSkill('冷雨伊丽莎白_鲜血魔女_mark');
                                    },
                                },
                                mark: {
                                    marktext: '血',
                                    mark: true,
                                    intro: {
                                        content: '已获得<血>标记',
                                    },
                                },
                            },
                        },
                        冷雨卡米拉_沐浴鲜血: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            group: '冷雨卡米拉_沐浴鲜血_1',
                            init(player) {
                                for (var i of game.players) {
                                    i.storage.冷雨卡米拉_沐浴鲜血_mark = 0;
                                }
                            },
                            forced: true,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.storage.冷雨卡米拉_沐浴鲜血_mark > 0;
                                });
                                if (num >= 1) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = game.countPlayer(function (current) {
                                    return current.storage.冷雨卡米拉_沐浴鲜血_mark > 0;
                                });
                                player.gainMaxHp(num);
                                player.recover(num);
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current.storage.冷雨卡米拉_沐浴鲜血_mark > 0) {
                                        current.storage.冷雨卡米拉_沐浴鲜血_mark--;
                                        current.markSkill('冷雨卡米拉_沐浴鲜血_mark');
                                        if (current.storage.冷雨卡米拉_沐浴鲜血_mark == 0) {
                                            current.unmarkSkill('冷雨卡米拉_沐浴鲜血_mark');
                                        }
                                    }
                                });
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.num > 0;
                                    },
                                    content() {
                                        trigger.player.storage.冷雨卡米拉_沐浴鲜血_mark += trigger.num;
                                        trigger.player.markSkill('冷雨卡米拉_沐浴鲜血_mark');
                                    },
                                },
                                mark: {
                                    marktext: '血',
                                    mark: true,
                                    intro: {
                                        content: 'mark',
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨卡米拉_拷问技术: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            group: ['冷雨卡米拉_拷问技术_1', '冷雨卡米拉_拷问技术_2', '冷雨卡米拉_拷问技术1'],
                            forced: true,
                            mark: true,
                            marktext: '刑',
                            init(player) {
                                player.storage.冷雨卡米拉_拷问技术 = 0;
                                player.markSkill('冷雨卡米拉_拷问技术');
                            },
                            filter(event, player) {
                                if (!player.storage.冷雨卡米拉_拷问技术 > 0) return false;
                                return event.card && (event.card.name == 'wanjian' || event.card.name == 'nanman');
                            },
                            content() {
                                trigger.num += player.storage.冷雨卡米拉_拷问技术;
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.num > 0 && event.card && (event.card.name == 'nanman' || event.card.name == 'wanjian');
                                    },
                                    content() {
                                        player.storage.冷雨卡米拉_拷问技术 += 1;
                                        player.markSkill('冷雨卡米拉_拷问技术');
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.name == '_lianhuan') return true;
                                        if (event.parent.name == '_lianhuan2') return true;
                                        return false;
                                    },
                                    content() {
                                        player.storage.冷雨卡米拉_拷问技术 += 1;
                                        player.markSkill('冷雨卡米拉_拷问技术');
                                    },
                                },
                            },
                            intro: {
                                content: '造成的伤害+#',
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        冷雨卡米拉_拷问技术1: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.冷雨卡米拉_拷问技术 < 1) return false;
                                if (!event.nature) return false;
                                return event.player.isLinked() && event.player != player;
                            },
                            content() {
                                trigger.num += player.storage.冷雨卡米拉_拷问技术;
                            },
                        },
                        冷雨卡米拉_幻想铁处女: {
                            nobracket: true,
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { type: 'basic' }) > 1;
                            },
                            filterCard(card) {
                                return get.type(card) == 'basic';
                            },
                            position: 'h',
                            selectCard: 2,
                            filterTarget(card, player, target) {
                                return player != target && target.storage.冷雨卡米拉_沐浴鲜血_mark > 0;
                            },
                            check(card) {
                                9 - get.value(card);
                            },
                            content() {
                                'step 0';
                                var num = target.storage.冷雨卡米拉_沐浴鲜血_mark;
                                var lose = Math.floor(Math.random() * num);
                                target.loseHp(lose);
                                player.recover(num);
                                ('step 1');
                                target.storage.冷雨卡米拉_沐浴鲜血_mark = 0;
                                target.unmarkSkill('冷雨卡米拉_沐浴鲜血_mark');
                            },
                            ai: {
                                order(name, player) {
                                    if (player.maxHp - player.hp < 3) return -1;
                                    return 2;
                                },
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        冷雨尼禄_扫荡的黄金剧场: {
                            nobracket: true,
                            enable: 'phaseUse',
                            forced: true,
                            filter(event, player) {
                                var num = game.roundNumber;
                                if (player.getStat().skill.冷雨尼禄_扫荡的黄金剧场 >= num) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return player.getEnemies().includes(current) && !current.isLinked();
                                    })
                                    .sortBySeat();
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.randomGet();
                                    player.line(target, 'fire');
                                    target.link();
                                }
                                ('step 3');
                                if (game.roundNumber > 1 && !player.hasSkill('冷雨尼禄_扫荡的黄金剧场_mark')) {
                                    player.draw(3);
                                    event.num = 3;
                                } else {
                                    event.goto(6);
                                }
                                ('step 4');
                                player.chooseToUse('使用1张牌,否则失去此效果直到回合结束').filterCard = function (card, player) {
                                    return lib.filter.cardEnabled(card, player, event.parent.parent) && lib.filter.cardUsable(card, player, event.parent.parent);
                                };
                                ('step 5');
                                if (result.bool) {
                                    event.num--;
                                    if (event.num > 0) {
                                        event.goto(4);
                                    }
                                } else {
                                    player.chooseToDiscard('he', 2, true);
                                    player.addTempSkill('冷雨尼禄_扫荡的黄金剧场_mark');
                                }
                                ('step 6');
                                if (game.roundNumber > 2) {
                                    event.targets = game
                                        .filterPlayer(function (current) {
                                            return player.getEnemies().includes(current) && !current.hasSkill('fengyin');
                                        })
                                        .sortBySeat();
                                } else {
                                    event.finish();
                                }
                                ('step 7');
                                if (event.targets.length) {
                                    var target = event.targets.randomGet();
                                    player.line(target, 'fire');
                                    target.addTempSkill('fengyin');
                                }
                                ('step 8');
                                if (game.roundNumber > 3) {
                                    event.targets = game
                                        .filterPlayer(function (current) {
                                            return player.getEnemies().includes(current) && !current.hasSkill('冷雨沉默');
                                        })
                                        .sortBySeat();
                                } else {
                                    event.finish();
                                }
                                ('step 9');
                                if (event.targets.length) {
                                    var target = event.targets.randomGet();
                                    player.line(target, 'fire');
                                    target.addTempSkill('冷雨沉默');
                                }
                                ('step 10');
                                if (game.roundNumber > 4) {
                                    event.targets = game
                                        .filterPlayer(function (current) {
                                            return player.getEnemies().includes(current);
                                        })
                                        .sortBySeat();
                                } else {
                                    event.finish();
                                }
                                ('step 11');
                                if (event.targets.length) {
                                    var target = event.targets.randomGet();
                                    player.line(target, 'fire');
                                    target.damage(1, 'fire');
                                }
                            },
                            subSkill: {
                                mark: {
                                    marktext: '锁',
                                    mark: true,
                                    intro: {
                                        content: '效果失效',
                                    },
                                },
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    player: 10,
                                },
                            },
                        },
                        冷雨尼禄_陨铁之鞴: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.isMaxHandcard()) return false;
                                return event.player != player && event.parent.name != '冷雨尼禄_陨铁之鞴';
                            },
                            _priority: 10,
                            content() {
                                trigger.player.damage('fire');
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                            },
                        },
                        冷雨尼禄_童女讴歌的荣华帝政: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt('冷雨尼禄_童女讴歌的荣华帝政'),
                                    [1, Infinity],
                                    function (card, player, target) {
                                        return target != player && target.isLinked();
                                    },
                                    function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'fire');
                                    for (var i = 0; i < targets.length; i++) {
                                        player.useCard({ name: 'sha', nature: 'fire' }, targets[i]);
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        冷雨迪昂_秀丽的容貌: {
                            nobracket: true,
                            forced: true,
                            group: ['冷雨迪昂_秀丽的容貌_1', '冷雨迪昂_秀丽的容貌_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                        player: ['drawBegin', 'recoverBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return Math.random() <= 0.6;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'judgeBegin',
                                    },
                                    filter(event, player) {
                                        return Math.random() <= 0.6;
                                    },
                                    forced: true,
                                    content() {
                                        var panding = ui.cardPile.firstChild;
                                        var enumtc = panding;
                                        var getValue = trigger.judge(panding);
                                        var suitList = ['spade', 'heart', 'club', 'diamond'];
                                        var nameList = ['sha', 'tao', 'wuxie', 'shan'];
                                        for (var n = 0; n < suitList.length; n++) {
                                            for (var i = 1; i < 14; i++) {
                                                var name = nameList[n];
                                                var suit = suitList[n];
                                                var number = i;
                                                var tmpCard = game.createCard(name, suit, number, null);
                                                var keyValue = trigger.judge(tmpCard);
                                                if (keyValue > getValue) {
                                                    getValue = keyValue;
                                                    enumtc = tmpCard;
                                                }
                                            }
                                        }
                                        if (panding != enumtc) {
                                            ui.cardPile.removeChild(panding);
                                            ui.cardPile.insertBefore(enumtc, ui.cardPile.firstChild);
                                        }
                                    },
                                },
                            },
                        },
                        冷雨迪昂_剑之舞蹈: {
                            nobracket: true,
                            enable: 'phaseUse',
                            selectTarget: 1,
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('e') > 0;
                            },
                            content() {
                                'step 0';
                                event.num = 3;
                                player.discardPlayerCard('e', target, true);
                                ('step 1');
                                var card = result.cards[0];
                                if (get.color(card) == 'black' && target.countCards('h') > 0) {
                                    player.useCard({ name: 'sha' }, target, false);
                                    event.goto(2);
                                } else {
                                    player.useCard({ name: 'sha' }, target, false);
                                    event.finish();
                                }
                                ('step 2');
                                if (target.countCards('h') > 0 && target.isAlive()) {
                                    player.discardPlayerCard('h', target, true);
                                }
                                ('step 3');
                                var card = result.cards[0];
                                if (get.color(card) == 'black') {
                                    player.useCard({ name: 'sha' }, target, false);
                                    event.num--;
                                    if (target.countCards('h') > 0 && event.num > 0 && target.isAlive()) {
                                        event.goto(2);
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    player.useCard({ name: 'sha' }, target, false);
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 8,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨迪昂_豪华绚烂: {
                            nobracket: true,
                            mark: true,
                            init(player) {
                                player.storage.冷雨迪昂_豪华绚烂 = 0;
                                player.markSkill('冷雨迪昂_豪华绚烂');
                            },
                            trigger: {
                                global: 'useCardToAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.冷雨迪昂_豪华绚烂 += 1;
                                player.markSkill('冷雨迪昂_豪华绚烂');
                                ('step 1');
                                if (player.storage.冷雨迪昂_豪华绚烂 >= 10) {
                                    game.countPlayer(function (current) {
                                        if (player.getEnemies().includes(current)) {
                                            player.line(current, 'white');
                                            current.chooseToDiscard(1, 'he', true);
                                            player.storage.冷雨迪昂_豪华绚烂 -= player.storage.冷雨迪昂_豪华绚烂;
                                            player.markSkill('冷雨迪昂_豪华绚烂');
                                        }
                                    });
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        冷雨赛米拉米斯_双重召唤: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨赛米拉米斯_双重召唤'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return Math.random();
                                };
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    for (var i = 0; i < target.skills.length; i++) {
                                        player.addSkill(target.skills[i]);
                                    }
                                }
                            },
                        },
                        冷雨赛米拉米斯_庭园建造: {
                            nobracket: true,
                            init2(player) {
                                player.storage.冷雨赛米拉米斯_庭园建造 = [];
                            },
                            mark: true,
                            marktext: '庭',
                            intro: {
                                content: 'cards',
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            content() {
                                player.storage.冷雨赛米拉米斯_庭园建造 = player.storage.冷雨赛米拉米斯_庭园建造.concat(cards);
                            },
                            group: '冷雨赛米拉米斯_庭园建造_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.冷雨赛米拉米斯_庭园建造.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCardButton('收回1张"庭"', true, player.storage.冷雨赛米拉米斯_庭园建造);
                                        ('step 1');
                                        var card = result.links[0];
                                        player.storage.冷雨赛米拉米斯_庭园建造.remove(card);
                                        player.gain(card, 'gain2', 'log');
                                        game.log(player, '将', card, '置入手牌');
                                        if (player.storage.冷雨赛米拉米斯_庭园建造.length == 0) {
                                            player.unmarkSkill('冷雨赛米拉米斯_庭园建造');
                                        }
                                    },
                                },
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        冷雨赛米拉米斯_虚荣的空中庭园: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            derivation: '冷雨赛米拉米斯_十与一的黑棺',
                            filter(event, player) {
                                var num = 0 + game.countPlayer();
                                for (var i of game.players) {
                                    for (var j = 0; j < i.countCards('j'); j++) {
                                        num += i.getCards('j')[j].number;
                                    }
                                }
                                return game.roundNumber > 2 && !player.storage.冷雨赛米拉米斯_庭园建造.length < num;
                            },
                            forced: true,
                            content() {
                                player.$skill('虚荣的空中庭园');
                                player.discard(player.getCards('j'));
                                player.gainMaxHp();
                                player.recover();
                                player.addSkill('冷雨赛米拉米斯_十与一的黑棺');
                                player.awakenSkill('冷雨赛米拉米斯_庭园建造');
                                player.awakenSkill('冷雨赛米拉米斯_虚荣的空中庭园');
                            },
                        },
                        冷雨赛米拉米斯_十与一的黑棺: {
                            nobracket: true,
                            group: ['冷雨赛米拉米斯_十与一的黑棺_1', '冷雨赛米拉米斯_十与一的黑棺_2', '冷雨赛米拉米斯_十与一的黑棺_3', '冷雨赛米拉米斯_十与一的黑棺_4', '冷雨赛米拉米斯_十与一的黑棺_5', '冷雨赛米拉米斯_十与一的黑棺_6'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseDrawBegin', 'recoverBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('令至多3名其他角色横置', [1, 3], function (card, player, target) {
                                                return !target.isLinked() && target != player;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var list = [].concat(result.targets);
                                            for (var i = 0; i < list.length; i++) {
                                                list[i].link();
                                            }
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    _priority: 50,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        trigger.num--;
                                    },
                                },
                                4: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseDiscard();
                                        ('step 2');
                                        player.phaseUse();
                                        ('step 3');
                                        player.phaseDraw();
                                        ('step 4');
                                        player.phaseJudge();
                                    },
                                },
                                5: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    selectTarget: 1,
                                    filterTarget(card, player, target) {
                                        return target != player;
                                    },
                                    content() {
                                        'step 0';
                                        event.cards = get.cards(11);
                                        player.showCards(event.cards);
                                        ('step 1');
                                        event.num = 0;
                                        if (Array.isArray(event.cards)) for (var i of event.cards) {
                                            if (i.suit == 'spade') event.num++;
                                            ui.discardPile.appendChild(i);
                                        }
                                        player.$throw(event.cards);
                                        if (event.num) {
                                            target.damage(event.num);
                                        }
                                    },
                                    ai: {
                                        order: 6,
                                        threaten: 2,
                                        result: {
                                            target: -3,
                                        },
                                    },
                                },
                                6: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && !current.hasSkill('fengyin');
                                        });
                                    },
                                    _priority: 20,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('令至多3名其他角色非锁定技失效', [1, 3], function (card, player, target) {
                                                return !target.hasSkill('fengyin') && target != player;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var list = [].concat(result.targets);
                                            for (var i = 0; i < list.length; i++) {
                                                list[i].addTempSkill('fengyin', { player: 'phaseBegin' });
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        冷雨赛米拉米斯_骄慢王的美酒: {
                            nobracket: true,
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 0 && event.player != player && event.card && event.card.name == 'jiu';
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(get.prompt('冷雨赛米拉米斯_骄慢王的美酒', trigger.player));
                                next.ai = function (card) {
                                    if (get.attitude(player, trigger.player) < 0) {
                                        return 8 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.damage()._triggered = null;
                                    if (trigger.player.isLinked()) {
                                        game.countPlayer(function (current) {
                                            if (current != player && current.isLinked()) {
                                                trigger.player.line(current, 'fire');
                                                current.damage()._triggered = null;
                                            }
                                        });
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        冷雨诸葛孔明_鉴识眼: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            prompt(event, player) {
                                return '是否对' + get.translation(event.player) + '发动 鉴识眼';
                            },
                            filter(event, player) {
                                return event.player.countCards('h') > 0 && event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, 'fire');
                                var card = trigger.player.getCards('h').randomGet();
                                player.showCards(card);
                                if (get.type(card) == 'basic' && get.color(card) == 'black') {
                                    event.goto(1);
                                }
                                if (get.type(card) == 'basic' && get.color(card) == 'red') {
                                    event.goto(2);
                                }
                                if (get.type(card) == 'equip' && get.color(card) == 'black') {
                                    event.goto(3);
                                }
                                if (get.type(card) == 'equip' && get.color(card) == 'red') {
                                    event.goto(4);
                                }
                                if (get.type(card) == 'trick' && get.color(card) == 'black') {
                                    event.goto(5);
                                }
                                if (get.type(card) == 'trick' && get.color(card) == 'red') {
                                    event.goto(6);
                                }
                                if (get.type(card) == 'delay' && get.color(card) == 'black') {
                                    event.goto(7);
                                }
                                if (get.type(card) == 'delay' && get.color(card) == 'red') {
                                    event.goto(8);
                                }
                                ('step 1');
                                var a = get.cardPile2(function (card) {
                                    return get.color(card) != 'black' && get.type(card) != 'basic';
                                });
                                if (a) {
                                    trigger.player.gain(a, 'gain2');
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var a = get.cardPile2(function (card) {
                                    return get.color(card) != 'red' && get.type(card) != 'basic';
                                });
                                if (a) {
                                    trigger.player.gain(a, 'gain2');
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                var a = get.cardPile2(function (card) {
                                    return get.color(card) != 'black' && get.type(card) != 'equip';
                                });
                                if (a) {
                                    trigger.player.gain(a, 'gain2');
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                var a = get.cardPile2(function (card) {
                                    return get.color(card) != 'red' && get.type(card) != 'equip';
                                });
                                if (a) {
                                    trigger.player.gain(a, 'gain2');
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                var a = get.cardPile2(function (card) {
                                    return get.color(card) != 'black' && get.type(card) != 'trick';
                                });
                                if (a) {
                                    trigger.player.gain(a, 'gain2');
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 6');
                                var a = get.cardPile2(function (card) {
                                    return get.color(card) != 'red' && get.type(card) != 'trick';
                                });
                                if (a) {
                                    trigger.player.gain(a, 'gain2');
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 7');
                                var a = get.cardPile2(function (card) {
                                    return get.color(card) != 'black' && get.type(card) != 'delay';
                                });
                                if (a) {
                                    trigger.player.gain(a, 'gain2');
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 8');
                                var a = get.cardPile2(function (card) {
                                    return get.color(card) != 'red' && get.type(card) != 'delay';
                                });
                                if (a) {
                                    trigger.player.gain(a, 'gain2');
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨诸葛孔明_石兵八阵: {
                            nobracket: true,
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { type: 'basic' }) > 0;
                            },
                            filterCard(card) {
                                return get.type(card) == 'basic';
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectCard: 1,
                            content() {
                                'step 0';
                                event.current = player.next;
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return current.isAlive();
                                    })
                                    .sortBySeat();
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.randomGet();
                                    event.current.line(target, 'fire');
                                    game.swapSeat(event.current, target);
                                    if (player.getEnemies().includes(target)) {
                                        target.damage(event.current);
                                    }
                                }
                                ('step 2');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        冷雨诸葛孔明_军师的忠言: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            prompt(event, player) {
                                return '是否对' + get.translation(event.player) + '发动 军师的忠言';
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countCards('he') > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseCard(1, 'he', true, '交给' + get.translation(player) + '1张牌').set('ai', function (card) {
                                    var target = _status.event.player;
                                    var player = _status.event.parent.player;
                                    if (get.tag(card, 'save')) {
                                        if (player.hp < 3) {
                                            return 11;
                                        } else {
                                            return -1;
                                        }
                                    }
                                    if (get.tag(card, 'damage')) return -2;
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                player.storage.冷雨诸葛孔明_军师的忠言 = result.cards[0];
                                player.gain(result.cards, trigger.player);
                                if (player == game.me || trigger.player == game.me) trigger.player.$give(result.cards, player);
                                else trigger.player.$give(1, player);
                                ('step 2');
                                if (get.type(player.storage.冷雨诸葛孔明_军师的忠言) == 'basic') {
                                    trigger.player.addTempSkill('冷雨诸葛孔明_军师的忠言_basic');
                                    event.goto(5);
                                }
                                if (get.type(player.storage.冷雨诸葛孔明_军师的忠言) == 'trick' || get.type(player.storage.冷雨诸葛孔明_军师的忠言) == 'delay') {
                                    trigger.player.addTempSkill('冷雨诸葛孔明_军师的忠言_trick');
                                    event.goto(5);
                                }
                                if (get.type(player.storage.冷雨诸葛孔明_军师的忠言) == 'equip') {
                                    var num = player.countCards('h', { type: 'equip' });
                                    trigger.player
                                        .chooseTarget([1, 3], '对距离2以内的至多3名角色造成1点伤害', function (card, player, target2) {
                                            return get.distance(_status.event.player, target2, 'attack') <= 2;
                                        })
                                        .set('ai', function (target2) {
                                            var target = _status.event.player;
                                            var player = _status.event.parent.player;
                                            return get.damageEffect(target2, target, target);
                                        });
                                }
                                ('step 3');
                                if (result.bool) {
                                    trigger.player.line(result.targets, 'fire');
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (event.num2 < event.targets.length) {
                                    event.targets[event.num2].damage(trigger.player);
                                    event.num2++;
                                    event.redo();
                                }
                                ('step 5');
                                delete player.storage.冷雨诸葛孔明_军师的忠言;
                                player.chooseControl('桃', '火杀', '闪', '酒', '过河').ai = function () {
                                    if (trigger.player.hp < 4) return '桃';
                                    if (trigger.player.countCards('h') < 4 && trigger.player.hp > 3) return '火杀';
                                    if (trigger.player.countCards('h') > 3 && trigger.player.hp > 3) return '酒';
                                    if (trigger.player.countCards('h') < 3 && trigger.player.hp > 3) return '闪';
                                    return '过河';
                                };
                                ('step 6');
                                player.popup(result.control);
                                game.log(player, '选择了', result.control);
                                if (result.control == '桃') {
                                    var card = game.createCard({ name: 'tao', color: 'black', suit: 'heart' });
                                    trigger.player.gain(card, player);
                                }
                                if (result.control == '火杀') {
                                    var card = game.createCard({ name: 'sha', nature: 'fire', color: 'black', suit: 'heart' });
                                    trigger.player.gain(card, player);
                                }
                                if (result.control == '闪') {
                                    var card = game.createCard({ name: 'shan', color: 'black', suit: 'heart' });
                                    trigger.player.gain(card, player);
                                }
                                if (result.control == '酒') {
                                    var card = game.createCard({ name: 'jiu', color: 'black', suit: 'diamond' });
                                    trigger.player.gain(card, player);
                                }
                                if (result.control == '过河') {
                                    var card = game.createCard({ name: 'guohe', color: 'red', suit: 'club' });
                                    trigger.player.gain(card, player);
                                }
                            },
                            subSkill: {
                                basic: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        var target = game.findPlayer(function (current) {
                                            return current.hasSkill('冷雨诸葛孔明_军师的忠言');
                                        });
                                        player.line(target, 'fire');
                                        target.draw();
                                    },
                                },
                                trick: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'trick' || get.type(event.card) == 'delay';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.3,
                            },
                        },
                        冷雨鬼巫女_炼狱: {
                            nobracket: true,
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            forced: true,
                            silent: true,
                            popup: false,
                            content() {
                                'step 0';
                                if (!player.storage.冷雨鬼巫女_炼狱1) {
                                    player.storage.冷雨鬼巫女_炼狱1 = get.time();
                                    event.finish();
                                } else {
                                    player.storage.冷雨鬼巫女_炼狱2 = get.time() - player.storage.冷雨鬼巫女_炼狱1;
                                }
                                ('step 1');
                                if (player.storage.冷雨鬼巫女_炼狱2 >= 25000) {
                                    player.storage.冷雨鬼巫女_炼狱1 = get.time();
                                    game.countPlayer(function (current) {
                                        if (player.getEnemies().includes(current) && !current.isLinked()) {
                                            player.line(current, 'fire');
                                            current.link();
                                        }
                                    });
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return player.getEnemies().includes(current) && current.isLinked();
                                    })
                                    .sortBySeat();
                                ('step 3');
                                if (event.targets.length) {
                                    var target = event.targets.randomGet();
                                    player.line(target, 'fire');
                                    var damage = [1, 2];
                                    target.damage(damage.randomGet(), 'fire');
                                }
                            },
                        },
                        冷雨鬼巫女_魔神: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                for (var i of game.players) {
                                    if (i != player && (i == 2 || i == 4 || i == 6 || i == 8)) {
                                        player.line(i, 'fire');
                                        var damage = [1, 2];
                                        i.damage(damage.randomGet())._triggered = null;
                                    }
                                }
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                },
                                result: {
                                    player: 5,
                                },
                            },
                        },
                        冷雨鬼巫女_绝望: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (Math.random() <= 0.5) {
                                    player
                                        .chooseTarget([1, Infinity], '将任意名其他角色装备区内的牌移出游戏并令其非锁定技失效', function (card, player, target) {
                                            return target.countCards('e') > 0 && target != player;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(player, target);
                                        });
                                } else {
                                    event.goto(3);
                                }
                                ('step 1');
                                if (result.bool) {
                                    game.log(player, '对', result.targets, '<span style="color: red">发动了技能 [混沌·梦想封印·鬼]</span>');
                                    player.line(result.targets, 'fire');
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    for (var i = 0; i < targets.length; i++) {
                                        var cards = targets[i].getCards('e');
                                        targets[i].lose(cards, ui.special)._triggered = null;
                                        targets[i].addTempSkill('fengyin', { player: 'phaseEnd' });
                                    }
                                }
                                event.finish();
                                ('step 3');
                                if (Math.random() <= 0.55) {
                                    player
                                        .chooseTarget([1, Infinity], '将"乐不思蜀""兵粮寸断""火链""雷链"置入任意名其他角色判定区', function (card, player, target) {
                                            return target != player && target.countCards('j') < 1;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(player, target);
                                        });
                                } else {
                                    event.goto(6);
                                }
                                ('step 4');
                                if (result.bool) {
                                    game.log(player, '对', result.targets, '<span style="color: red">发动了技能 [Heaven·神罚]</span>');
                                    player.line(result.targets, 'fire');
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (targets && targets.length) {
                                    for (var i = 0; i < targets.length; i++) {
                                        var card1 = game.createCard({ name: 'lebu', color: 'red', suit: 'heart' });
                                        var card2 = game.createCard({ name: 'bingliang', color: 'red', suit: 'heart' });
                                        var card3 = game.createCard({ name: '火链', color: 'red', suit: 'heart' });
                                        var card4 = game.createCard({ name: '雷链', color: 'red', suit: 'heart' });
                                        player.useCard(card1, targets[i], false);
                                        player.useCard(card2, targets[i], false);
                                        player.useCard(card3, targets[i], false);
                                        player.useCard(card4, targets[i], false);
                                    }
                                }
                                event.finish();
                                ('step 6');
                                if (Math.random() <= 0.6) {
                                    game.log(player, '<span style="color: red">发动了技能 [诸神之黄昏·天地崩坏]</span>');
                                    for (var i of game.players) {
                                        if (i != player && (i == 1 || i == 3 || i == 5 || i == 7)) {
                                            player.line(i, 'fire');
                                            var damage = [1, 2];
                                            i.damage(damage.randomGet())._triggered = null;
                                            player.discardPlayerCard(1, 'he', i, true);
                                        }
                                    }
                                    event.finish();
                                } else {
                                    event.goto(7);
                                }
                                ('step 7');
                                if (Math.random() <= 0.65) {
                                    game.log(player, '<span style="color: red">发动了技能 [返魂]</span>');
                                    player.recover(3)._triggered = null;
                                    player.draw(3)._triggered = null;
                                    game.swapSeat(player, player.next);
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 2,
                            },
                        },
                        冷雨鬼巫女_永远: {
                            nobracket: true,
                            forced: true,
                            group: ['冷雨鬼巫女_永远_1', '冷雨鬼巫女_永远_2', '冷雨鬼巫女_永远_3', '冷雨鬼巫女_永远_4'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['linkBegin', 'turnOverBegin', 'loseHpBegin', 'loseMaxHpBegin'],
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (get.type(card) == 'delay') return false;
                                        },
                                        suit(card, suit) {
                                            return 'none';
                                        },
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'chooseToCompareBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target && event.target == player;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                4: {
                                    trigger: {
                                        global: ['gainAfter', 'gainBefore', 'damageBegin', 'damageEnd', 'useCard', 'recoverEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isMad();
                                    },
                                    content() {
                                        player.unMad();
                                    },
                                },
                            },
                        },
                        冷雨鬼巫女_概念: {
                            nobracket: true,
                            popup: false,
                            trigger: {
                                global: 'roundStart',
                            },
                            init(player) {
                                player.storage.冷雨鬼巫女_概念 = 0;
                                player.markSkill('冷雨鬼巫女_概念');
                            },
                            marktext: '巫',
                            intro: {
                                content: '已出场#轮',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.冷雨鬼巫女_概念++;
                                if (player.storage.冷雨鬼巫女_概念 == 3) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (player.isMaxHp()) {
                                    event.goto(2);
                                } else {
                                    player.awakenSkill('冷雨鬼巫女_概念');
                                    event.finish();
                                }
                                ('step 2');
                                if (lib.config.mode == 'identity') {
                                    if (player != game.me && player.identity != game.me.identity) {
                                        if ((player.identity == 'zhu' && game.me.identity != 'zhong') || (player.identity == 'zhong' && game.me.identity != 'zhu')) game.forceOver(false);
                                        else game.forceOver(true);
                                    } else {
                                        game.forceOver(true);
                                    }
                                } else {
                                    if (player != game.me && player.identity != game.me.identity) {
                                        game.forceOver(false);
                                    } else {
                                        game.forceOver(true);
                                    }
                                }
                            },
                            ai: {
                                threaten: 2.3,
                            },
                        },
                        冷雨博丽灵梦_暴走: {
                            mode: ['boss'],
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            filter(event, player) {
                                return player.hp < 3;
                            },
                            _priority: 1000,
                            forced: true,
                            content() {
                                player.$skill('暴走');
                                player.discard(player.getCards('j'));
                                if (player.isLinked()) player.link()._triggered = null;
                                player.turnOver(false);
                                var hp = player.hp + game.countPlayer();
                                var maxHp = player.maxHp + game.countPlayer();
                                player.init('冷雨鬼巫女');
                                player.hp = hp;
                                player.maxHp = maxHp;
                                player.update();
                                player.draw(4);
                                player.phase('nodelay');
                                player.removeSkill('冷雨博丽灵梦_暴走');
                                game.log(player, '<span style="color: red">暴走,变身为 鬼巫女</span>');
                            },
                        },
                        冷雨冰结傀儡_护主: {
                            nobracket: true,
                            trigger: {
                                global: ['damageBegin', 'loseHpBegin', 'loseMaxHpBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.name == 'damage') event.goto(1);
                                if (trigger.name == 'loseHp') event.goto(2);
                                if (trigger.name == 'loseMaxHp') event.goto(3);
                                ('step 1');
                                if (trigger.source) {
                                    player.damage(trigger.num, trigger.nature, trigger.source);
                                } else {
                                    player.damage(trigger.num, trigger.nature, 'nosource');
                                }
                                trigger.cancel();
                                event.finish();
                                ('step 2');
                                player.loseHp(trigger.num);
                                trigger.cancel();
                                event.finish();
                                ('step 3');
                                player.loseMaxHp(trigger.num);
                                trigger.cancel();
                                event.finish();
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨冰结傀儡_奉献: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBefore',
                            },
                            popup: false,
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (player.getFriends().includes(current)) {
                                        player.line(current, 'green');
                                        var num = [1, 2];
                                        current.recover(num.randomGet())._triggered = null;
                                        current.draw(num.randomGet())._triggered = null;
                                        current.changeHujia(num.randomGet())._triggered = null;
                                    }
                                });
                            },
                            ai: {
                                threaten: 2.1,
                            },
                        },
                        冷雨冰结傀儡_冰刺: {
                            nobracket: true,
                            mod: {
                                cardEnabled(card, player) {
                                    if (get.type(card) == 'equip' && _status.event.skill != '冷雨冰结傀儡_冰刺') return false;
                                },
                                cardUsable(card, player) {
                                    if (get.type(card) == 'equip' && _status.event.skill != '冷雨冰结傀儡_冰刺') return false;
                                },
                                targetInRange(card, player) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                return player.countCards('h', { type: 'equip' }) > 0;
                            },
                            filterCard: {
                                type: 'equip',
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', { type: 'equip' })) return false;
                            },
                            check() {
                                return 1;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', { type: 'equip' })) return false;
                                },
                                respondSha: true,
                                order: 4,
                                useful: -1,
                                value: -1,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                            if (get.attitude(player, target) > 0) {
                                                return -6;
                                            } else {
                                                return -3;
                                            }
                                        }
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                },
                            },
                        },
                        冷雨望月千代女_咒术: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target && player.getEnemies().includes(event.target) && Math.random() <= 0.6;
                            },
                            content() {
                                trigger.target.addTempSkill('fengyin', { player: 'phaseEnd' });
                            },
                        },
                        冷雨望月千代女_大蛇之咒: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.damage(1, 'nosource')._triggered = null;
                                ('step 1');
                                player.draw(player.maxHp - player.hp + 2);
                                player.phaseUse();
                                game.log(player, '<span style="color: gold">执行额外1个出牌阶段</span>');
                                ('step 2');
                                player.getStat().card = {};
                            },
                        },
                        冷雨望月千代女_通灵: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            position: 'h',
                            selectCard: 3,
                            content() {
                                'step 0';
                                player.$skill('通灵·伊吹大明神缘起');
                                var fellow = game.addFellow(1, '冷雨八岐大蛇');
                                fellow.style.left = 'calc(55% - 70px)';
                                fellow.style.top = 'calc(50%)';
                                fellow.classList.add('minskin');
                                fellow.side = player.side;
                                fellow.identity = player.identity;
                                if (fellow.identity == 'zhu') fellow.identity = 'zhong';
                                fellow.showIdentity();
                                fellow.node.identity.dataset.color = 'nei';
                                fellow.draw(8)._triggered = null;
                                fellow.changeHujia(8);
                                game.log(player, '<span style="color: red">召唤了 [八岐大蛇]</span>');
                                ('step 1');
                                player.awakenSkill('冷雨望月千代女_通灵');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player: 3,
                                },
                            },
                        },
                        冷雨八岐大蛇_魔力缠卷: {
                            nobracket: true,
                            group: ['冷雨八岐大蛇_魔力缠卷_1', '冷雨八岐大蛇_魔力缠卷_2', '冷雨八岐大蛇_魔力缠卷_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return Math.random() <= 0.5 && event.player != player;
                                    },
                                    content() {
                                        trigger.player.damage(trigger.num, trigger.nature);
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: ['useCard', 'gainBegin', 'gainEnd', 'damageBegin', 'damageEnd'],
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        var target = game.findPlayer(function (current) {
                                            return current.hasSkill('冷雨望月千代女_通灵');
                                        });
                                        if (target) target.addSkill('冷雨八岐大蛇_魔力缠卷效果');
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        var target = game.findPlayer(function (current) {
                                            return current.hasSkill('冷雨望月千代女_通灵');
                                        });
                                        if (target) target.removeSkill('冷雨八岐大蛇_魔力缠卷效果');
                                    },
                                },
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (get.type(card) == 'equip' && _status.event.skill != '冷雨八岐大蛇_魔力缠卷') return false;
                                },
                                cardUsable(card, player) {
                                    if (get.type(card) == 'equip' && _status.event.skill != '冷雨八岐大蛇_魔力缠卷') return false;
                                },
                                targetInRange(card, player) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                return player.countCards('h', { type: 'equip' }) > 0;
                            },
                            filterCard: {
                                type: 'equip',
                            },
                            viewAs: {
                                name: 'sha',
                                suit: 'diamond',
                                number: 5,
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', { type: 'equip' })) return false;
                            },
                            check() {
                                return 1;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', { type: 'equip' })) return false;
                                },
                                respondSha: true,
                                order: 4,
                                useful: -1,
                                value: -1,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                            if (get.attitude(player, target) > 0) {
                                                return -6;
                                            } else {
                                                return -3;
                                            }
                                        }
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                },
                            },
                        },
                        冷雨八岐大蛇_魔力缠卷效果: {
                            nobracket: true,
                            mod: {
                                wuxieRespondable(card, player, target, current) {
                                    if (player != current && get.distance(player, current) <= Infinity) {
                                        return false;
                                    }
                                },
                            },
                            ai: {
                                norespond: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'norespond' && Array.isArray(arg)) {
                                        if (get.distance(arg[1], player) <= Infinity) return true;
                                    }
                                    return false;
                                },
                            },
                        },
                        冷雨美杜莎_魔眼: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨美杜莎_魔眼'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return -get.attitude(_status.event.player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].addTempSkill('冷雨沉默');
                                    if (result.targets[0].hp > player.hp) {
                                        result.targets[0].turnOver(true);
                                    } else {
                                        result.targets[0].addTempSkill('fengyin');
                                    }
                                }
                            },
                        },
                        冷雨美杜莎_自我封印: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            subSkill: {
                                回复: {
                                    trigger: {
                                        global: 'phaseUseEnd',
                                    },
                                    popup: false,
                                    forced: true,
                                    content() {
                                        player.enableSkill('', player.getCards('s'));
                                        player.removeSkill('冷雨美杜莎_自我封印_回复');
                                    },
                                },
                            },
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') > 0 && !target.hasSkill('冷雨沉默');
                            },
                            content() {
                                player.gain(target.getCards('h'), target);
                                target.$give(target.countCards('h'), player);
                                target.draw(Math.min(4, target.maxHp));
                                target.disableSkill('', target.getCards('s'));
                                target.addSkill('冷雨美杜莎_自我封印_回复');
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h') > target.hp) return target.hp - target.countCards('h');
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        冷雨美杜莎_他者封印: {
                            nobracket: true,
                            forced: true,
                            group: ['冷雨美杜莎_他者封印_1', '冷雨美杜莎_他者封印_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'recoverEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        return get.distance(player, event.player) <= 1;
                                    },
                                    content() {
                                        trigger.player.line(player, 'green');
                                        player.gainMaxHp();
                                        player.recover();
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isMinHp() && player.maxHp - player.hp > 0;
                                    },
                                    content() {
                                        var players = game.filterPlayer(function (current) {
                                            return get.distance(player, current) <= 2 && player != current;
                                        });
                                        players.sort(lib.sort.seat);
                                        var mubiao = players;
                                        player.line(mubiao, 'white');
                                        for (var i of players) {
                                            i.loseHp(1);
                                            player.recover();
                                        }
                                    },
                                },
                            },
                        },
                        冷雨美杜莎_骑英之缰绳: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    var num1 = game.countPlayer(function (current) {
                                        return current.countCards('e', { subtype: 'equip3' });
                                    });
                                    var num2 = game.countPlayer(function (current) {
                                        return current.countCards('e', { subtype: 'equip4' });
                                    });
                                    return num + num1 + num2;
                                },
                                globalFrom(from, to, distance) {
                                    var num1 = game.countPlayer(function (current) {
                                        return current.countCards('e', { subtype: 'equip4' });
                                    });
                                    return distance - num1 - 1;
                                },
                                globalTo(from, to, distance) {
                                    var num2 = game.countPlayer(function (current) {
                                        return current.countCards('e', { subtype: 'equip3' });
                                    });
                                    return distance + num2 + 1;
                                },
                            },
                            forced: true,
                            filter(event, player) {
                                var num1 = game.countPlayer(function (current) {
                                    return current.countCards('e', { subtype: 'equip3' });
                                });
                                var num2 = game.countPlayer(function (current) {
                                    return current.countCards('e', { subtype: 'equip4' });
                                });
                                return num1 + num2 > 0;
                            },
                            content() {
                                'step 0';
                                var num1 = game.countPlayer(function (current) {
                                    return current.countCards('e', { subtype: 'equip3' });
                                });
                                var num2 = game.countPlayer(function (current) {
                                    return current.countCards('e', { subtype: 'equip4' });
                                });
                                player.chooseTarget(
                                    get.prompt('冷雨美杜莎_骑英之缰绳'),
                                    [0, num1 + num2],
                                    function (card, player, target) {
                                        return target != player;
                                    },
                                    function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'fire');
                                    for (var i = 0; i < targets.length; i++) {
                                        var damage = [0, 1, 2];
                                        targets[i].damage(damage.randomGet());
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨艾蕾什基伽尔_大王冠: {
                            nobracket: true,
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (get.type(i) == 'equip') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨艾蕾什基伽尔_大王冠'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return Math.random();
                                };
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    for (var i = 0; i < target.skills.length; i++) {
                                        player.addTempSkill(target.skills[i], { player: 'phaseEnd' });
                                    }
                                }
                            },
                        },
                        冷雨艾蕾什基伽尔_冥界佑护: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            check(event, player) {
                                return player.hp < 3;
                            },
                            filter(event, player) {
                                return player.hp < 3;
                            },
                            content() {
                                'step 0';
                                event.current = player.next;
                                ('step 1');
                                if (player.getFriends().includes(event.current)) {
                                    player.line(event.current, 'fire');
                                    event.current.changeHujia(2);
                                    event.current.draw(2);
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (event.current.next != player && player.getFriends().includes(event.current)) {
                                    event.current.line(event.current.next, 'fire');
                                    event.current = event.current.next;
                                    event.goto(1);
                                } else {
                                    event.goto(3);
                                }
                                ('step 3');
                                event.current = player.previous;
                                ('step 4');
                                if (player.getFriends().includes(event.current)) {
                                    player.line(event.current, 'fire');
                                    event.current.changeHujia(2);
                                    event.current.draw(2);
                                } else {
                                    event.goto(6);
                                }
                                ('step 5');
                                if (event.current.previous != player && player.getFriends().includes(event.current)) {
                                    event.current.line(event.current.previous, 'fire');
                                    event.current = event.current.previous;
                                    event.goto(4);
                                } else {
                                    event.goto(6);
                                }
                                ('step 6');
                                player.out();
                                trigger.goto(1);
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨艾蕾什基伽尔_冥界审判: {
                            nobracket: true,
                            enable: 'phaseUse',
                            subSkill: {
                                回复: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    popup: false,
                                    forced: true,
                                    content() {
                                        player.enableSkill('', player.getCards('s'));
                                        player.removeSkill('冷雨艾蕾什基伽尔_冥界审判_回复');
                                    },
                                },
                            },
                            usable: 1,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current != player && player.getFriends().includes(current);
                                });
                                if (!num > 0) return true;
                                return false;
                            },
                            selectTarget: [1, 3],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                target.addTempSkill('冷雨封疗', { player: 'phaseUseBegin' });
                                target.disableSkill('', target.getCards('s'));
                                target.addSkill('冷雨艾蕾什基伽尔_冥界审判_回复');
                            },
                            ai: {
                                threaten: 2,
                                order: 8,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        冷雨艾蕾什基伽尔_灵峰踏抱冥府之鞴: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.source;
                            },
                            content() {
                                'step 0';
                                game.swapSeat(player, trigger.source);
                                ('step 1');
                                var players = game.filterPlayer(function (current) {
                                    return get.distance(player, current, 'attract') <= 1 && player.getEnemies().includes(current);
                                });
                                players.sort(lib.sort.seat);
                                var num = [1, 2];
                                for (var i of players) {
                                    player.line(i, 'fire');
                                    player.gainPlayerCard('he', i, num.randomGet(), true);
                                    i.damage()._triggered = null;
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨时崎狂三_食时之城: {
                            nobracket: true,
                            group: '冷雨时崎狂三_食时之城_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'dieEnd',
                                    },
                                    forced: true,
                                    content() {
                                        var num = player.storage.冷雨时崎狂三_食时之城;
                                        player.storage.冷雨时崎狂三_食时之城 += Math.floor(num * 0.4);
                                        player.markSkill('冷雨时崎狂三_食时之城');
                                    },
                                },
                            },
                            marktext: '时',
                            mark: true,
                            intro: {
                                content: '拥有#点时间之力',
                            },
                            init(player) {
                                player.storage.冷雨时崎狂三_食时之城 = 0;
                                player.markSkill('冷雨时崎狂三_食时之城');
                            },
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            forced: true,
                            silent: true,
                            popup: false,
                            content() {
                                'step 0';
                                if (!player.storage.冷雨时崎狂三_食时之城1) {
                                    player.storage.冷雨时崎狂三_食时之城1 = get.time();
                                    event.finish();
                                } else {
                                    player.storage.冷雨时崎狂三_食时之城2 = get.time() - player.storage.冷雨时崎狂三_食时之城1;
                                }
                                ('step 1');
                                if (player.storage.冷雨时崎狂三_食时之城2 >= 4100) {
                                    player.storage.冷雨时崎狂三_食时之城1 = get.time();
                                    player.storage.冷雨时崎狂三_食时之城 += 1;
                                    player.markSkill('冷雨时崎狂三_食时之城');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        冷雨时崎狂三_一之弹: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            prompt(event, player) {
                                return '是否令1名角色攻击距离无限直到其回合结束';
                            },
                            subSkill: {
                                distance: {
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance - Infinity;
                                        },
                                    },
                                },
                            },
                            filter(event, player) {
                                return player.storage.冷雨时崎狂三_食时之城 > 4;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨时崎狂三_一之弹'), function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    if (player.storage.冷雨时崎狂三_食时之城 > 10) return get.attitude(player, target);
                                    return false;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.冷雨时崎狂三_食时之城 -= 5;
                                    player.markSkill('冷雨时崎狂三_食时之城');
                                    player.line(result.targets[0], 'fire');
                                    result.targets[0].addTempSkill('冷雨时崎狂三_一之弹_distance', { player: 'phaseEnd' });
                                }
                            },
                        },
                        冷雨时崎狂三_二之弹: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            prompt(event, player) {
                                return '是否令' + get.translation(event.player) + '本回合内攻击距离为0';
                            },
                            subSkill: {
                                distance: {
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance + Infinity;
                                        },
                                    },
                                },
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0 && player.storage.冷雨时崎狂三_食时之城 > 7) return 3;
                                if (get.attitude(player, event.player) <= 0 && player.hp < 3) return 3;
                                if (get.attitude(player, event.player) <= 0 && get.distance(event.player, player, 'attract') < 2) return 3;
                                return -1;
                            },
                            filter(event, player) {
                                return event.player != player && player.storage.冷雨时崎狂三_食时之城 > 4;
                            },
                            content() {
                                'step 0';
                                player.storage.冷雨时崎狂三_食时之城 -= 5;
                                player.markSkill('冷雨时崎狂三_食时之城');
                                ('step 1');
                                player.line(trigger.player, 'fire');
                                trigger.player.addTempSkill('冷雨时崎狂三_二之弹_distance', { player: 'phaseEnd' });
                            },
                        },
                        冷雨时崎狂三_三之弹: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.冷雨时崎狂三_食时之城 > 4;
                            },
                            content() {
                                'step 0';
                                player.storage.冷雨时崎狂三_食时之城 -= 5;
                                player.markSkill('冷雨时崎狂三_食时之城');
                                ('step 1');
                                player.draw(player.maxHp - player.countCards('h') + 2);
                            },
                            ai: {
                                threaten: 2,
                                order(name, player) {
                                    if (player.maxHp - player.countCards('h') > 3) return 8;
                                    if (player.maxHp - player.countCards('h') == 3) return 6;
                                    if (player.maxHp - player.countCards('h') < 3) return 4;
                                    return 2;
                                },
                                result: {
                                    player(player) {
                                        if (player.maxHp - player.countCards('h') > 3) return 6;
                                        if (player.maxHp - player.countCards('h') == 3) return 5;
                                        if (player.maxHp - player.countCards('h') < 3) return 4;
                                        return 2;
                                    },
                                },
                            },
                        },
                        冷雨时崎狂三_四之弹: {
                            nobracket: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isAlive() && player.storage.冷雨时崎狂三_食时之城 > 4;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('回复', '取消')
                                    .set('prompt', get.prompt('冷雨时崎狂三_四之弹'))
                                    .set('choiceList', ['令' + get.translation(trigger.player) + '调整体力值至受伤前', '取消']).ai = function (event, player) {
                                        if (get.attitude(player, trigger.player) <= 0) return '取消';
                                        if (get.attitude(player, trigger.player) > 0 && trigger.num < 2 && trigger.player.hp > 3) return '取消';
                                        if (get.attitude(player, trigger.player) > 0 && trigger.num > 1 && trigger.player.hp > 3) return '取消';
                                        if (get.attitude(player, trigger.player) > 0 && player.hp < 3 && player.storage.冷雨时崎狂三_食时之城 < 8) return '取消';
                                        if (get.attitude(player, trigger.player) > 0 && trigger.player.hp < 3 && player.hp < 3 && player.storage.冷雨时崎狂三_食时之城 > 8) return '回复';
                                        if (get.attitude(player, trigger.player) > 0 && trigger.player.hp < 3) return '回复';
                                        return '回复';
                                    };
                                ('step 1');
                                game.log(player, '选择了' + get.translation(result.control));
                                player.popup(result.control);
                                ('step 2');
                                if (result.control == '回复') {
                                    player.storage.冷雨时崎狂三_食时之城 -= 5;
                                    player.markSkill('冷雨时崎狂三_食时之城');
                                    player.line(trigger.player, 'fire');
                                    trigger.player.hp = trigger.player.hp + trigger.num;
                                    trigger.player.update();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨时崎狂三_五之弹: {
                            nobracket: true,
                            srlose: true,
                            trigger: {
                                global: 'judgeBegin',
                            },
                            check(event, player) {
                                if (event.player == player) return 10;
                                if (player.storage.冷雨时崎狂三_食时之城 < 10) return -10;
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                return player.storage.冷雨时崎狂三_食时之城 > 4;
                            },
                            content() {
                                'step 0';
                                player.storage.冷雨时崎狂三_食时之城 -= 5;
                                player.markSkill('冷雨时崎狂三_食时之城');
                                if (player.isUnderControl()) {
                                    game.modeSwapPlayer(player);
                                }
                                var cards = get.cards(5);
                                event.cards = cards;
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                    const target = trigger.player;
                                    const att = get.attitude(player, target);
                                    const top = [], bottom = cards;
                                    for (const i of target.getCards('j')) {
                                        const judge = get.judge(i);
                                        bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
                                        if (bottom.length) {
                                            top.push(bottom.shift());
                                        }
                                    }
                                    bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
                                    while (bottom.length) {
                                        top.push(bottom.shift());
                                    }
                                    top.reverse();
                                    for (var i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (var i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                };
                                var chooseButton = function (online, player, cards) {
                                    var event = _status.event;
                                    player = player || event.player;
                                    cards = cards || event.cards;
                                    event.top = [];
                                    event.bottom = [];
                                    event.status = true;
                                    event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌(先选择的在上)', cards);
                                    event.switchToAuto = function () {
                                        event._result = 'ai';
                                        event.dialog.close();
                                        event.control.close();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
                                        var event = _status.event;
                                        if (link == 'ok') {
                                            if (online) {
                                                event._result = {
                                                    top: [],
                                                    bottom: [],
                                                };
                                                for (var i = 0; i < event.top.length; i++) {
                                                    event._result.top.push(event.top[i].link);
                                                }
                                                for (var i = 0; i < event.bottom.length; i++) {
                                                    event._result.bottom.push(event.bottom[i].link);
                                                }
                                            } else {
                                                var i;
                                                for (var i = 0; i < event.top.length; i++) {
                                                    ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                                                }
                                                for (var i = 0; i < event.bottom.length; i++) {
                                                    ui.cardPile.appendChild(event.bottom[i].link);
                                                }
                                                for (var i = 0; i < event.dialog.buttons.length; i++) {
                                                    if (event.dialog.buttons[i].classList.contains('glow') == false && event.dialog.buttons[i].classList.contains('target') == false) ui.cardPile.appendChild(event.dialog.buttons[i].link);
                                                }
                                                player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                                                game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                                            }
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        } else if (link == 'pileTop') {
                                            event.status = true;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                                        } else {
                                            event.status = false;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                                        }
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    event.custom.replace.button = function (link) {
                                        var event = _status.event;
                                        if (link.classList.contains('target')) {
                                            link.classList.remove('target');
                                            event.top.remove(link);
                                        } else if (link.classList.contains('glow')) {
                                            link.classList.remove('glow');
                                            event.bottom.remove(link);
                                        } else if (event.status) {
                                            link.classList.add('target');
                                            event.top.unshift(link);
                                        } else {
                                            link.classList.add('glow');
                                            event.bottom.push(link);
                                        }
                                    };
                                    event.custom.replace.window = function () {
                                        for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                                            _status.event.dialog.buttons[i].classList.remove('target');
                                            _status.event.dialog.buttons[i].classList.remove('glow');
                                            _status.event.top.length = 0;
                                            _status.event.bottom.length = 0;
                                        }
                                    };
                                    game.pause();
                                    game.countChoose();
                                };
                                event.switchToAuto = switchToAuto;
                                if (event.isMine()) {
                                    chooseButton();
                                    event.finish();
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, true, event.player, event.cards);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    event.switchToAuto();
                                    event.finish();
                                }
                                ('step 1');
                                if (event.result == 'ai' || !event.result) {
                                    event.switchToAuto();
                                } else {
                                    var top = event.result.top || [];
                                    var bottom = event.result.bottom || [];
                                    for (var i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (var i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    if (Array.isArray(event.cards)) for (var i of event.cards) {
                                        if (!top.includes(i) && !bottom.includes(i)) {
                                            ui.cardPile.appendChild(i);
                                        }
                                    }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        冷雨时崎狂三_六之弹: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.冷雨时崎狂三_食时之城 > 4;
                            },
                            content() {
                                'step 0';
                                player.storage.冷雨时崎狂三_食时之城 -= 5;
                                player.markSkill('冷雨时崎狂三_食时之城');
                                ('step 1');
                                var card = player.getCards('h');
                                var target = player.previous;
                                target.gain(card, player);
                                target.phase('nodelay');
                            },
                            ai: {
                                threaten: 2,
                                order(name, player) {
                                    if (get.attitude(player, player.previous) > 0) return 7;
                                    return -5;
                                },
                                result: {
                                    player(player) {
                                        if (get.attitude(player, player.previous) > 0) return 3;
                                        return -5;
                                    },
                                },
                            },
                        },
                        冷雨时崎狂三_七之弹: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            prompt(event, player) {
                                return '是否令1名其他角色获得负面状态';
                            },
                            filter(event, player) {
                                return player.storage.冷雨时崎狂三_食时之城 > 4;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨时崎狂三_七之弹'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return -get.attitude(_status.event.player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.冷雨时崎狂三_食时之城 -= 5;
                                    player.markSkill('冷雨时崎狂三_食时之城');
                                    result.targets[0].addTempSkill('冷雨沉默');
                                    result.targets[0].turnOver(true);
                                    result.targets[0].addTempSkill('fengyin');
                                }
                            },
                        },
                        冷雨时崎狂三_八之弹: {
                            nobracket: true,
                            usable: 2,
                            group: '冷雨时崎狂三_八之弹_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasSkill('冷雨时崎狂三分身_分身嘲讽');
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        player.maxHp = player.maxHp;
                                        player.hp = player.maxHp;
                                        player.update();
                                        ('step 1');
                                        player.chooseTarget(
                                            '令1个分身死亡',
                                            function (card, player, target) {
                                                return target.hasSkill('冷雨时崎狂三分身_分身嘲讽');
                                            },//QQQ
                                            true
                                        ).ai = function (target) {
                                            return Math.random();
                                        };
                                        ('step 2');
                                        if (result.bool) {
                                            game.log(player, '<span style="color: red">死亡免疫,失去1个分身</span>');
                                            result.targets[0].die();
                                        }
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.冷雨时崎狂三_食时之城 > 4 && game.dead.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                player
                                    .chooseButton(ui.create.dialog('召唤1名分身', [list, 'character']), function (button) {
                                        for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
                                        return get.attitude(_status.event.player, game.dead[i]);
                                    })
                                    .set('ai', function (button) {
                                        return 10;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.冷雨时崎狂三_食时之城 -= 5;
                                    player.markSkill('冷雨时崎狂三_食时之城');
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
                                    var dead = game.dead[i];
                                    dead.revive(4);
                                    dead.draw(4)._triggered = null;
                                    dead.init('冷雨时崎狂三分身');
                                    dead.side = player.side;
                                    dead.identity = player.identity;
                                    if (dead.identity == 'zhu') dead.identity = 'zhong';
                                    dead.showIdentity();
                                    dead.setIdentity('分身');
                                    dead.node.identity.dataset.color = dead.identity;
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player) {
                                        return 12;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        冷雨时崎狂三_九之弹: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            prompt(event, player) {
                                return '是否观看并弃置1名其他角色2张手牌';
                            },
                            line: 'fire',
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h');
                            },
                            filter(event, player) {
                                return player.storage.冷雨时崎狂三_食时之城 > 4;
                            },
                            content() {
                                'step 0';
                                event.num = 2;
                                player.storage.冷雨时崎狂三_食时之城 -= 5;
                                player.markSkill('冷雨时崎狂三_食时之城');
                                ('step 1');
                                player.chooseCardButton(target, target.getCards('h')).set('filterButton', function (button) {
                                    return true;
                                });
                                ('step 2');
                                if (result.bool) {
                                    target.discard(result.links[0]);
                                }
                                event.num--;
                                if (event.num > 0) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        冷雨时崎狂三_十之弹: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            init(player) {
                                player.storage.冷雨时崎狂三_十之弹_效果 = [];
                            },
                            prompt(event, player) {
                                return '是否令1名角色获得回合角色本回合弃置的牌';
                            },
                            filter(event, player) {
                                return player.storage.冷雨时崎狂三_食时之城 > 4 && player.storage.冷雨时崎狂三_十之弹_效果.length;
                            },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('冷雨时崎狂三_十之弹'), function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    if (player.storage.冷雨时崎狂三_十之弹_效果.length > 3) return get.attitude(player, target);
                                    return false;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.冷雨时崎狂三_食时之城 -= 5;
                                    player.markSkill('冷雨时崎狂三_食时之城');
                                    result.targets[0].gain(player.storage.冷雨时崎狂三_十之弹_效果);
                                    result.targets[0].$gain(player.storage.冷雨时崎狂三_十之弹_效果);
                                    player.unmarkSkill('冷雨时崎狂三_十之弹_效果');
                                    delete player.storage.冷雨时崎狂三_十之弹_效果;
                                    player.storage.冷雨时崎狂三_十之弹_效果 = [];
                                } else {
                                    delete player.storage.冷雨时崎狂三_十之弹_效果;
                                    player.storage.冷雨时崎狂三_十之弹_效果 = [];
                                    player.unmarkSkill('冷雨时崎狂三_十之弹_效果');
                                }
                            },
                            group: ['冷雨时崎狂三_十之弹_效果'],
                        },
                        冷雨时崎狂三_十之弹_效果: {
                            trigger: {
                                global: 'discardAfter',
                            },
                            forced: true,
                            popup: false,
                            _priority: -1,
                            filter(event, player) {
                                if (_status.currentPhase != event.player) return false;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (get.position(i) == 'd') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    if (get.position(i) == 'd') {
                                        player.storage.冷雨时崎狂三_十之弹_效果 = player.storage.冷雨时崎狂三_十之弹_效果.concat(i);
                                    }
                                }
                                player.markSkill('冷雨时崎狂三_十之弹_效果');
                            },
                            intro: {
                                content: 'cards',
                            },
                        },
                        冷雨时崎狂三_十一之弹: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            selectTarget: 1,
                            filter(event, player) {
                                return player.storage.冷雨时崎狂三_食时之城 > 9;
                            },
                            content() {
                                'step 0';
                                player.$skill('十一之弹');
                                var num = player.storage.冷雨时崎狂三_食时之城;
                                player.storage.冷雨时崎狂三_食时之城 -= Math.floor(num / 2);
                                player.markSkill('冷雨时崎狂三_食时之城');
                                ('step 1');
                                target.out(3);
                                player.awakenSkill('冷雨时崎狂三_十一之弹');
                            },
                            ai: {
                                //限定技,出牌阶段,若你拥有的时间之力达到10点或更多,你可以消耗半数的时间之力,令1名角色离开游戏3回合.
                                order(name, player) {
                                    if (player.hp < 3) return 8;
                                    if (player.getFriends().some((q) => q.hp < 3)) return 8;
                                    return -1;
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 3) return 10;
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0 && target.hp < 3) return 7;
                                        return 0.1;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        冷雨时崎狂三_十二之弹: {
                            ai: {
                                order(name, player) {
                                    if (player.hp < 3) return 8;
                                    if (player.getFriends().some((q) => q.hp < 3)) return 8;
                                    return -1;
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 3) return 10;
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0 && target.hp < 3) return 7;
                                        return 0.1;
                                    },
                                },
                                threaten: 2,
                            },
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            selectTarget: 1,
                            filter(event, player) {
                                return player.storage.冷雨时崎狂三_食时之城 > 9;
                            },
                            content() {
                                'step 0';
                                player.$skill('十二之弹');
                                var num = player.storage.冷雨时崎狂三_食时之城;
                                player.storage.冷雨时崎狂三_食时之城 -= Math.floor(num / 2);
                                player.markSkill('冷雨时崎狂三_食时之城');
                                ('step 1');
                                target.maxHp = 5;
                                target.hp = 5;
                                target.update();
                                var card = target.getCards('hej');
                                card.discard()._triggered = null;
                                target.draw(4)._triggered = null;
                                player.awakenSkill('冷雨时崎狂三_十二之弹');
                            },
                        },
                        冷雨时崎狂三分身_分身嘲讽: {
                            nobracket: true,
                            ai: {
                                threaten: 4,
                            },
                        },
                    },
                    translate: {
                        威严满满: '威严满满',
                        威严满满_info: '锁定技,回合结束阶段,若你体力上限大于8,你失去１点体力上限',
                        契约之魔烙: '契约之魔烙',
                        契约之魔烙_info: '全场角色回合开始时,你可以指定1名未拥有<契>标记的其他角色,令其获得<契>标记.',
                        对黑猫的喜爱: '对黑猫的喜爱',
                        对黑猫的喜爱_info: '锁定技,你的黑色牌不占用手牌上限',
                        快速: '快速',
                        快速_info: '锁定技,你的攻击距离始终+1',
                        强击: '强击',
                        强击_info: '锁定技,你造成伤害时,若目标有护甲,此伤害+1.',
                        感电: '感电',
                        感电_info: '你每响应1张闪,你可以选择1名角色进行判定,若判定牌为黑色,你对该角色造成1点雷电伤害.',
                        祝福: '祝福',
                        祝福_info: '锁定技,你击杀1名角色后,你获得2点护甲.',
                        复仇: '复仇',
                        复仇_info: '锁定技,当你造成伤害时,若目标体力值不小于你,此伤害有25%概率+1.',
                        减速: '减速',
                        减速_info: '锁定技,你的防御距离始终+1.',
                        抗性: '抗性',
                        抗性_info: '锁定技,你受到属性伤害时,有25%概率此伤害-1.',
                        生命补给: '生命补给',
                        生命补给_info: '锁定技,你造成伤害后,有25%概率回复1点体力.',
                        '生命补给·改': '生命补给·改',
                        '生命补给·改_info': '锁定技,你回复体力后,有25%概率获得1点护甲.',
                        能量补给: '能量补给',
                        能量补给_info: '锁定技,你造成伤害后,有25%概率摸1张牌.',
                        '能量补给·改': '能量补给·改',
                        '能量补给·改_info': '锁定技,若你弃牌阶段弃置了牌,有25%概率你摸1张牌.',
                        武器补给: '武器补给',
                        武器补给_info: '锁定技,你造成非属性伤害时,有25%概率此伤害+1.',
                        '武器补给·改': '武器补给·改',
                        '武器补给·改_info': '锁定技,你造成非属性伤害后,有25%概率获得1点护甲.',
                        装甲补给: '装甲补给',
                        装甲补给_info: '锁定技,你受到非属性伤害时,有25%概率此伤害-1.',
                        '装甲补给·改': '装甲补给·改',
                        '装甲补给·改_info': '锁定技,你受到非属性伤害后,有25%概率获得1点护甲.',
                        崩坏能源: '崩坏能源',
                        崩坏能源_info: '锁定技,你回复体力后,有25%概率摸1张牌.',
                        黑科技武器: '黑科技武器',
                        黑科技武器_info: '锁定技,你造成伤害时,有25%概率将你的武将牌翻面并令此伤害+1.',
                        黑科技装甲: '黑科技装甲',
                        黑科技装甲_info: '锁定技,你造成伤害时,若你有护甲,有25%概率此伤害+1.',
                        精密零件: '精密零件',
                        精密零件_info: '锁定技,你造成属性伤害时,有25%概率此伤害+1.',
                        '伏羲·火': '伏羲·火',
                        '伏羲·火_info': '锁定技,你造成非火焰伤害后,有25%概率追加1点火焰伤害.',
                        '伏羲·雷': '伏羲·雷',
                        '伏羲·雷_info': '锁定技,你造成非雷电伤害后,有25%追加1点雷电伤害.',
                        '女娲·星': '女娲·星',
                        '女娲·星_info': '锁定技,你击杀1名角色后,有25%概率令其他角色翻面.',
                        '轩辕·盾': '轩辕·盾',
                        '轩辕·盾_info': '锁定技,当你的护甲为你抵挡伤害后,有25%概率你摸1张牌并回复1点体力.',
                        '神农·草': '神农·草',
                        '神农·草_info': '锁定技,当你摸牌时,有25%概率额外摸1张牌.',
                        '神农·穗': '神农·穗',
                        '神农·穗_info': '锁定技,你获得牌后,有25%概率摸1张牌.',
                        '神农·花': '神农·花',
                        '神农·花_info': '锁定技,你回复体力时,有25%概率额外回复1点体力.',
                        幸运兔耳: '幸运兔耳',
                        幸运兔耳_info: '锁定技,你造成伤害时,有10%概率造成至多4倍伤害.',
                        冷雨迦尔纳_顺从死亡效果2: '日轮啊·顺从死亡',
                        冷雨迦尔纳_顺从死亡效果2_info: '',
                        冷雨迦尔纳_顺从死亡效果1: '日轮啊·顺从死亡',
                        冷雨迦尔纳_顺从死亡效果1_info: '',
                        冷雨莎士比亚_魔力附加: '魔力附加',
                        冷雨莎士比亚_魔力附加_info: '每当1名角色不因你的技能摸牌时,你可以令其额外摸1张牌.每当1名其他角色即将造成伤害时,你可以令此伤害+1.每当1名角色回复体力时,你可以令其额外回复1点体力.',
                        冷雨莎士比亚_国王剧场: '国王剧场',
                        冷雨莎士比亚_国王剧场_info: '出牌阶段,你可以选择1项:令1名手牌数不大于其体力值的角色摸2张牌;或令1名手牌数大于其体力值的角色弃置2张牌.此技能每回合对每名角色限1次.',
                        冷雨鸢一折纸_复仇执念效果: '复仇执念',
                        冷雨鸢一折纸_复仇执念效果_info: '',
                        冷雨阿斯托尔福_唤起恐慌1: '恐慌',
                        冷雨阿斯托尔福_唤起恐慌1_info: '',
                        冷雨阿斯托尔福_唤起恐慌2: '恐慌',
                        冷雨阿斯托尔福_唤起恐慌2_info: '',
                        冷雨阿斯托尔福_唤起恐慌3: '恐慌',
                        冷雨阿斯托尔福_唤起恐慌3_info: '',
                        冷雨阿斯托尔福_唤起恐慌4: '恐慌',
                        冷雨阿斯托尔福_唤起恐慌4_info: '',
                        冷雨御坂美琴_电击之枪: '电击之枪',
                        冷雨御坂美琴_电击之枪_info: '每当你造成非雷电伤害后,你可以对除此目标外的1名其他角色造成1点雷电伤害,并令其获得1枚"电"标记.',
                        冷雨御坂美琴_落雷: '落雷',
                        冷雨御坂美琴_落雷_info: '出牌阶段限3次,你可以弃置1张手牌令一名角色进行判定,若结果为黑色,该角色受到来自你的1点雷电伤害你摸1张牌,若结果为红色,你摸1张牌',
                        冷雨御坂美琴_电磁充能: '电磁充能',
                        冷雨御坂美琴_电磁充能_info: '锁定技,你防止即将受到的雷电伤害,改为回复1点体力',
                        冷雨吉尔伽美什_巴比伦宝藏: '巴比伦宝藏',
                        冷雨吉尔伽美什_巴比伦宝藏_info: '锁定技,每当你使用1张装备牌,你摸1张牌并使你的手牌上限永久+1,每当你失去1张装备牌,你摸2张牌.',
                        冷雨吉尔伽美什_黄金律: '黄金律',
                        冷雨吉尔伽美什_黄金律_info: '摸牌阶段开始时,若你的手牌数不为全场最多,你可以将你的手牌补充至全场最多或之一.',
                        冷雨吉尔伽美什_维摩那: '维摩那',
                        冷雨吉尔伽美什_维摩那_info: '锁定技,你使用牌无距离限制',
                        冷雨夏娜_贽殿遮那: '贽殿遮那',
                        冷雨夏娜_贽殿遮那_info: '锁定技,你造成的任何伤害有40%的概率追加1点火焰伤害.',
                        冷雨夏娜_天壤之劫火: '天壤之劫火',
                        冷雨夏娜_天壤之劫火_info: '觉醒技,当你体力值降到0或更低时,你对全体敌方角色造成1点神圣火焰伤害,将体力值调整至体力上限并重置武将技能.',
                        冷雨博丽灵梦_梦想封印: '梦想封印',
                        冷雨博丽灵梦_梦想封印_info: '锁定技,回合开始时,你令所有敌方角色无法使用或打出手牌且非锁定技失效直到回合结束.',
                        冷雨博丽灵梦_香火贿赂: '香火贿赂',
                        冷雨博丽灵梦_香火贿赂_info: '当你对1名角色造成伤害后,你可以获得其X张牌,若如此做,本回合你无法再次对其发动此技能(X为你已损失的体力值且至少为1).',
                        冷雨博丽灵梦_塞钱箱: '塞钱箱',
                        冷雨博丽灵梦_塞钱箱_info: '锁定技,摸牌阶段,你额外摸X张牌,你的手牌上限始终-Y(X为场上手牌数大于你的角色数,Y为场上手牌数小于你的角色数).',
                        冷雨西莉卡_强化吐息: '强化吐息',
                        冷雨西莉卡_强化吐息_info: '出牌阶段限2次,你可以令1名角色增加1点体力上限,回复1点体力,并摸1张牌(每名角色限发动1次)',
                        冷雨上条当麻_顽强的意志: '顽强的意志',
                        冷雨上条当麻_顽强的意志_info: '锁定技,每受到1次伤害,你增加1点体力上限',
                        冷雨上条当麻_不愿放弃的坚持: '不愿放弃的坚持',
                        冷雨上条当麻_不愿放弃的坚持_info: '摸牌阶段,你可以额外摸X张牌,X为你已损失的体力值且向下取整',
                        冷雨兰斯洛特_骑士不死于徒手: '骑士不死于徒手',
                        冷雨兰斯洛特_骑士不死于徒手_info: '回合开始时,你可以选择1～2名其他角色,将其1张牌置于你的武将牌上,称为"骑".锁定技,你的进攻距离+X(X为你"骑"的数量),回合结束时,若你"骑"的数量不小于你的体力值,你获得所有"骑",执行额外1个出牌阶段.',
                        冷雨兰斯洛特_无穷之武炼: '无穷之武炼',
                        冷雨兰斯洛特_无穷之武炼_info: '锁定技,每当你受到伤害后,你增加1点体力上限并摸1张牌',
                        冷雨兰斯洛特_狂化骑士: '狂化骑士',
                        冷雨兰斯洛特_狂化骑士_info: '每当你使用1张杀指定目标后,你可以摸1张牌,若如此做,此杀额外指定除目标外随机1名敌方角色为目标.锁定技,你使用杀的数量+X(X为你已损失体力值+1),你使用的杀无视目标防具.',
                        冷雨开膛手杰克_解体圣母: '解体圣母',
                        冷雨开膛手杰克_解体圣母_info: '锁定技,你的杀对女性角色造成的伤害+1.',
                        冷雨开膛手杰克_暗黑雾都: '暗黑雾都',
                        冷雨开膛手杰克_暗黑雾都_info: '每当其他角色进入濒死状态时,你可以增加1点体力上限并摸1张牌,将1张手牌置于武将牌上,称为<暗>;你的手牌上限+X(X为你<暗>的数量).',
                        冷雨开膛手杰克_雾夜的凶杀: '雾夜的凶杀',
                        冷雨开膛手杰克_雾夜的凶杀_info: '摸牌阶段,你可以改为摸3+X张牌(X为你<暗>数量的随机值).锁定技,每当有角色进入濒死状态,若伤害来源为你,你与该角色在结算后将武将牌同时翻至背面.锁定技,你处于翻面状态时,任何卡牌无法指定你为合法目标,当你武将牌翻至正面时,你获得3点护甲直到你的出牌阶段开始.',
                        冷雨开膛手杰克_外科手术: '外科手术',
                        冷雨开膛手杰克_外科手术_info: '锁定技,每当1名角色死亡后,你回复1点体力并摸1张牌.',
                        冷雨伊斯坎达尔_征服王: '征服王',
                        冷雨伊斯坎达尔_征服王_info: '摸牌阶段,你可以放弃摸牌,令所有其他角色依次选择一项:<li>1、交给你1张牌;<li>2、令你摸1张牌.',
                        冷雨伊斯坎达尔_神威车轮: '神威车轮',
                        冷雨伊斯坎达尔_神威车轮_info: '锁定技,你造成非雷电伤害后,有60%概率对全体敌方角色造成1点雷电伤害.',
                        冷雨一方通行_反射: '反射',
                        冷雨一方通行_反射_info: '锁定技,当你受到其他角色造成的伤害时,若伤害值为1,反弹此伤害,否则此伤害值-1.',
                        冷雨一方通行_等离子体: '等离子体',
                        冷雨一方通行_等离子体_info: '摸牌阶段,你可以放弃摸牌,改为亮出牌堆顶的8张牌,其中每有1张非延时锦囊牌,你可视为对1名其他角色使用1张杀.将这些非延时锦囊牌置入弃牌堆,其余收入手牌.',
                        冷雨雾雨魔理沙_打秋风: '打秋风',
                        冷雨雾雨魔理沙_打秋风_info: '每当你不因此技能摸牌时,你可以获得至多X名其他角色各1张手牌(X为你此时摸牌量),若如此做,此时摸牌量-1.若你选择的角色数小于2,你摸1张牌.',
                        冷雨雾雨魔理沙_有借有还: '有借有还',
                        冷雨雾雨魔理沙_有借有还_info: '出牌阶段开始时,你可以令1名其他角色交给你1张牌.',
                        冷雨芙兰朵露_禁忌的游戏: '禁忌的游戏',
                        冷雨芙兰朵露_禁忌的游戏_info: '出牌阶段限1次,你可以弃置1张牌,选择至多3名其他角色依次进行判定,若判定牌与你弃置的牌花色不同,你对其造成1点伤害.',
                        '冷雨芙兰朵露_符卡·莱瓦丁': '符卡·莱瓦丁',
                        '冷雨芙兰朵露_符卡·莱瓦丁_info': '出牌阶段限1次,你可以弃置1张武器牌,对至多3名其他角色各造成1点火焰伤害',
                        冷雨芙兰朵露_随意破坏: '随意破坏',
                        冷雨芙兰朵露_随意破坏_info: '锁定技,回合结束时,你对随机1名敌方角色造成1～2点神圣伤害,你选择回复1～2点体力或摸1～2张牌.',
                        冷雨吸血鬼: '吸血鬼',
                        冷雨吸血鬼_info: '每当你造成1点伤害,你可以回复1点体力或摸1张牌',
                        冷雨四季映姬_乐园裁判长: '乐园裁判长',
                        冷雨四季映姬_乐园裁判长_info: '出牌阶段限X次,你可以令1名手牌数小于等于体力值的角色摸2+Y张牌,或让1名手牌数大于体力值的角色弃置2+Y张牌(X为你的体力值,Y为你已损失的体力值).',
                        冷雨四季映姬_净琉璃之镜: '净琉璃之镜',
                        冷雨四季映姬_净琉璃之镜_info: '出牌阶段限1次,你可以选择至多X名其他角色(X为你当前体力值),展示其手牌,<li>若其中有黑色牌且数量为1,你摸1张牌.<li>若其中有黑色牌且数量为2,你摸1张牌并对其造成1点伤害.<li>若其中有黑色牌且数量大于2,你对其造成1点伤害,并回复1点体力摸1张牌.',
                        冷雨四季映姬_地狱审判长: '地狱审判长',
                        冷雨四季映姬_地狱审判长_info: '锁定技,当你体力值降到0或更低时,你立即摸1张牌展示之,若此牌不为♠️️,你将体力值回复至1点.',
                        冷雨博丽灵梦_八方鬼缚阵: '八方鬼缚阵',
                        冷雨博丽灵梦_八方鬼缚阵_info: '出牌阶段限1次,你可以令所有未横置的敌方角色横置并解除自身横置状态,对其中1名角色造成1点雷电伤害.',
                        冷雨博丽灵梦_极端幸运: '极端幸运',
                        冷雨博丽灵梦_极端幸运_info: '锁定技,你有70%概率防止受到的伤害、体力流失和体力上限减少;你的回复值有75%概率+1;你进行判定时,始终进行判定补正;混乱状态对你无效;非延时锦囊无法指定你为目标.',
                        冷雨五河琴里_灵力暴走: '灵力暴走',
                        冷雨五河琴里_灵力暴走_info: '锁定技,结束阶段,若你于此回合内造成过3点或更多伤害,你需进行判定,若不为♥️️,则你回复1点体力并对与你距离2以内的其他角色各造成1点火焰伤害.',
                        冷雨五河琴里_再生能力: '再生能力',
                        冷雨五河琴里_再生能力_info: '弃牌阶段结束时,你可以回复1点体力并摸2张牌',
                        冷雨迪卢木多_破魔的红蔷薇: '破魔的红蔷薇',
                        冷雨迪卢木多_破魔的红蔷薇_info: '当你使用【杀】指定角色为目标后,你可以弃置其1张牌并令其非锁定技失效直到回合结束.',
                        冷雨迪卢木多_必灭的黄蔷薇: '必灭的黄蔷薇',
                        冷雨迪卢木多_必灭的黄蔷薇_info: '你造成伤害后,你可以令受伤角色失去1～2点体力上限',
                        冷雨迪卢木多_爱的黑痣: '爱的黑痣',
                        冷雨迪卢木多_爱的黑痣_info: '锁定技,当你受到伤害时,若伤害来源为女性,有60%概率此伤害-1',
                        '冷雨本条二亚_嗫告篇帙·情报检索': '嗫告篇帙·情报检索',
                        '冷雨本条二亚_嗫告篇帙·情报检索_info': '全场角色回合开始时,你可以观看牌堆顶的Ｘ张牌(Ｘ为存活角色的数量,且最少为3),将其中任意数量的牌以任意顺序置于牌堆顶,其余以任意顺序置于牌堆底.',
                        '冷雨本条二亚_嗫告篇帙·未来记载': '嗫告篇帙·未来记载',
                        '冷雨本条二亚_嗫告篇帙·未来记载_info': '一名角色的判定牌生效前,你可以用1张手牌或场上的牌代替之.',
                        '冷雨本条二亚_神蚀篇帙·恶魔种子': '神蚀篇帙·恶魔种子',
                        '冷雨本条二亚_神蚀篇帙·恶魔种子_info': '当你减少体力或你造成伤害后,你可以展示牌堆顶的1张牌,重复此流程直到你展示出第3种花色的牌时,将这张牌置入弃牌堆,获得其余的牌.',
                        冷雨键山雏_厄神大人的生理节律: '厄神大人的生理节律',
                        冷雨键山雏_厄神大人的生理节律_info: '结束阶段,你可以选择任意名攻击范围内含有你的角色(包括你),弃置这些角色各1张牌并令其摸1张牌(无牌则不弃),若如此做,你摸X张牌(X为其中手牌数大于你的角色数与你已损失体力值之和)',
                        冷雨键山雏_流放人偶: '流放人偶',
                        冷雨键山雏_流放人偶_info: '每当你使用1张黑色牌,你可以令1名其他角色翻面并摸2张牌',
                        冷雨键山雏_痛苦之流: '痛苦之流',
                        冷雨键山雏_痛苦之流_info: '出牌阶段结束时,你可以令所有已翻面角色流失1点体力',
                        冷雨库丘林_突穿死翔之枪: '突穿死翔之枪',
                        冷雨库丘林_突穿死翔之枪_info: '你使用的【杀】可以指定2名目标且你的使用"杀"无距离限制',
                        冷雨库丘林_战斗续行: '战斗续行',
                        冷雨库丘林_战斗续行_info: '当你的"原"达到3枚或更多时,你使用【杀】的次数上限+X(X为你已损失的体力值).',
                        冷雨库丘林_刺穿死荆之枪: '刺穿死荆之枪',
                        冷雨库丘林_刺穿死荆之枪_info: '锁定技,当你的"原"达到4枚或更多时,你使用【杀】指定目标后,有70%概率强制命中',
                        冷雨库丘林_心脏因果律: '心脏因果律',
                        冷雨库丘林_心脏因果律_info: '锁定技,当你的"原"达到5枚或更多时,你的杀造成的伤害有70%概率+1',
                        冷雨迪米乌哥斯_向坟墓的统治者献上忠言: '向坟墓的统治者献上忠言',
                        冷雨迪米乌哥斯_向坟墓的统治者献上忠言_info: '回合结束时,你可以令1名角色摸X张牌,若选择角色不为你,你摸2张牌(X为你"炎"的数量),你清空所有"炎"标记.',
                        冷雨迪米乌哥斯_恶魔军师: '恶魔军师',
                        冷雨迪米乌哥斯_恶魔军师_info: '当你不因此技能获得牌时,你摸1张牌',
                        冷雨帕秋莉_体弱的魔法使: '体弱的魔法使',
                        冷雨帕秋莉_体弱的魔法使_info: '锁定技,你的回合内,你最多使用6张牌.',
                        冷雨帕秋莉_病弱之躯: '病弱之躯',
                        冷雨帕秋莉_病弱之躯_info: '锁定技,你的回合内,你若累计造成了4次伤害,之后造成伤害你需流失1点体力.',
                        冷雨帕秋莉_金耀: '金耀',
                        冷雨帕秋莉_金耀_info: '锁定技,当你摸牌时,你获得1枚"金"标记,当你的"金"达到2枚时,你下一次摸牌时摸牌数+1弃置所有"金"',
                        冷雨帕秋莉_木耀: '木耀',
                        冷雨帕秋莉_木耀_info: '每当你的回合开始时或你受到伤害后,你可以令1名角色进行判定,若结果为红色,该角色增加1点体力上限并回复1点体力;若结果为黑色,该角色摸2张牌',
                        冷雨帕秋莉_水耀: '水耀',
                        冷雨帕秋莉_水耀_info: '你造成伤害后,你可以令受伤角色进行1次判定,若判定牌为黑色,其弃置1张牌,若判定牌为红色,其翻面.',
                        冷雨帕秋莉_火耀: '火耀',
                        冷雨帕秋莉_火耀_info: '你可以将【杀】当火【杀】使用.',
                        冷雨帕秋莉_土耀: '土耀',
                        冷雨帕秋莉_土耀_info: '锁定技,当你受到伤害时,你获得1枚"土"标记,当你的"土"达到2枚时,你下一次受到的伤害-1弃置所有"土"',
                        冷雨帕秋莉_日耀: '日耀',
                        冷雨帕秋莉_日耀_info: '你可以令你的非火焰伤害视为火焰伤害.',
                        冷雨帕秋莉_月耀: '月耀',
                        冷雨帕秋莉_月耀_info: '锁定技,当你回复体力时,你获得1枚"月"标记,当你的"月"达到2枚时,你下一次回复体力时额外回复1点体力弃置所有"月"',
                        '冷雨西行寺幽幽子_死符·惊梦': '死符·惊梦',
                        '冷雨西行寺幽幽子_死符·惊梦_info': '出牌阶段限一次,你可以选择至多2名其他角色,对其造成1点伤害令其回复1点体力',
                        '冷雨西行寺幽幽子_死蝶·华胥的永眠': '死蝶·华胥的永眠',
                        '冷雨西行寺幽幽子_死蝶·华胥的永眠_info': '锁定技,其他角色在你的回合内进入濒死状态时,有50%概率直接死亡',
                        '冷雨西行寺幽幽子_幽蝶·幽魂聚地': '幽蝶·幽魂聚地',
                        '冷雨西行寺幽幽子_幽蝶·幽魂聚地_info': '当其他角色的♥️️牌,因弃牌或判定而进入弃牌堆时,你可以获得之.',
                        '冷雨西行寺幽幽子_蝶符·凤蝶纹的死枪': '蝶符·凤蝶纹的死枪',
                        '冷雨西行寺幽幽子_蝶符·凤蝶纹的死枪_info': '你的弃牌阶段结束时,你可以对体力值最少的1名角色造成1点伤害',
                        '冷雨西行寺幽幽子_樱符·西行樱吹雪': '樱符·西行樱吹雪',
                        '冷雨西行寺幽幽子_樱符·西行樱吹雪_info': '若你于弃牌阶段弃置了至少1张牌,你可以增加1点体力上限回复1点体力并摸1张牌',
                        冷雨夏娜_火焰之翼: '火焰之翼',
                        冷雨夏娜_火焰之翼_info: '每当你造成伤害后,你可以指定1名其他角色进行判定,若结果为黑色,该角色受到1点火焰伤害;锁定技,你的攻击范围为你当前的体力值',
                        冷雨夏娜_夜笠: '夜笠',
                        冷雨夏娜_夜笠_info: '锁定技,每当你受到伤害或流失体力时,若该值大于1,你摸等量的牌',
                        冷雨夏娜_红莲之大太刀: '红莲之大太刀',
                        冷雨夏娜_红莲之大太刀_info: '锁定技,你造成的非火焰伤害有70%的概率追加1点火焰伤害',
                        冷雨夏娜_审判: '审判',
                        冷雨夏娜_审判_info: '出牌阶段限一次,你可以获得一名其他角色的所有牌,还给其等量的牌,若你归还的牌均为你获得的牌且该角色体力值不小于你,你对其造成1点伤害',
                        '冷雨迦尔纳_日轮啊·化作甲胄': '日轮啊·化作甲胄',
                        '冷雨迦尔纳_日轮啊·化作甲胄_info': '全场角色回合开始时,若你没有护甲且你体力值不为全场最多,你可以获得X点护甲(X为场上体力值大于你的角色数)',
                        '冷雨迦尔纳_日轮啊·顺从死亡': '日轮啊·顺从死亡',
                        '冷雨迦尔纳_日轮啊·顺从死亡_info': '出牌阶段开始时,你可以摸X张牌,若如此做,本回合内,你使用杀的次数+X,手牌上限+X,且回合结束时,失去全部护甲(X为你的护甲值)',
                        '冷雨迦尔纳_梵天啊·诅咒吾身': '梵天啊·诅咒吾身',
                        '冷雨迦尔纳_梵天啊·诅咒吾身_info': '锁定技,当你回复体力时,你增加等量的体力上限.回合开始时,你增加等同于你已损失体力值的体力上限,你计算与其他角色的距离始终-X.(X为你已损失体力值)',
                        冷雨迦尔纳_贫者之见识: '贫者之见识',
                        冷雨迦尔纳_贫者之见识_info: '锁定技,回合开始时,你获得你判定区内所有的牌.非延时锦囊牌无法指定你为目标.',
                        '冷雨迦尔纳_梵天啊·覆盖大地': '梵天啊·覆盖大地',
                        '冷雨迦尔纳_梵天啊·覆盖大地_info': '锁定技,你使用杀指定目标后,若其体力值不大于你,则此杀无法闪避.你的杀造成的伤害+X(X为目标护甲值)',
                        冷雨枪兵: '枪兵',
                        冷雨枪兵_info: '锁定技,你计算与其他角色的距离时,始终-1.',
                        冷雨御坂美琴_超电磁炮: '超电磁炮',
                        冷雨御坂美琴_超电磁炮_info: '你的回合结束时,你可以对场上有"电"标记的角色依次造成1点雷电伤害,你移除场上所有的"电"标记,摸等量的牌,如果你因此法获得的牌数不小于你的体力值,你回复1点体力.',
                        '冷雨兰斯洛特_骑士不死于徒手·改': '骑士不死于徒手',
                        '冷雨兰斯洛特_骑士不死于徒手·改_info': '回合开始时,你可以选择至多X名其他角色(X为你已损失的体力值且至少为1),将其1张牌置于你的武将牌上,称为"骑".锁定技,你的进攻距离+Y(Y为你"骑"的数量),回合结束时,若你"骑"的数量不小于你的体力值,你获得所有"骑",执行额外一个出牌阶段.',
                        '冷雨兰斯洛特_无穷之武炼·改': '无穷之武炼',
                        '冷雨兰斯洛特_无穷之武炼·改_info': '锁定技,每当你受到伤害后,你增加1点体力上限并摸1张牌,若你的体力值为全场最少,你有50%概率回复1点体力.',
                        冷雨兰斯洛特_无毁的湖光: '无毁的湖光',
                        冷雨兰斯洛特_无毁的湖光_info: '锁定技,限定技,你击杀1名角色后,你获得等同于你已损失体力值的护甲值.你将技能"骑士不死于徒手"的描述"1～2"更改为"1～X(X为你已损失的体力值)",将技能"无穷之武炼"的描述增加"若你的体力值为全场最少,你有50%概率回复1点体力".',
                        冷雨库丘林_避失之加护: '避失之加护',
                        冷雨库丘林_避失之加护_info: '当你与其他角色进行拼点时,你可以令你拼点牌的点数加3或减3',
                        冷雨伊斯坎达尔_雷之征服者: '雷之征服者',
                        冷雨伊斯坎达尔_雷之征服者_info: '锁定技,你受到伤害后,有40%概率令伤害来源横置并受到1点雷电伤害,若你受到的伤害为雷电伤害,你增加1点体力上限',
                        冷雨伊斯坎达尔_王之军势: '王之军势',
                        冷雨伊斯坎达尔_王之军势_info: '觉醒技,回合开始时,若你的体力值为1,你获得X点护甲并获得技能"遥远的蹂躏制霸"(X为全场存活角色数).如果你的手牌数小于体力上限,你将手牌数补至体力上限,否则你回复1点体力',
                        冷雨伊斯坎达尔_遥远的蹂躏制霸: '遥远的蹂躏制霸',
                        冷雨伊斯坎达尔_遥远的蹂躏制霸_info: '当你使用的杀被闪避后,你可以对目标造成1点雷电伤害',
                        冷雨开膛手杰克_气息遮断: '气息遮断',
                        冷雨开膛手杰克_气息遮断_info: '',
                        冷雨开膛手杰克_狩猎: '狩猎',
                        冷雨开膛手杰克_狩猎_info: '',
                        冷雨鸢一折纸_复仇执念: '复仇执念',
                        冷雨鸢一折纸_复仇执念_info: '出牌阶段开始时,你可以摸X张牌(X为全场存活角色数).若如此做,此回合你使用非装备牌时,你弃置1张牌(无牌则不弃)',
                        冷雨鸢一折纸_变身: '唯有灾厄才能对抗灾厄',
                        冷雨鸢一折纸_变身_info: '觉醒技,当你体力值降到0点或更低时,你立即变身为"绝灭天使"并获得4等同于体力上限的护甲值.',
                        冷雨绝灭天使_羽翼: '绝灭天使·羽翼',
                        冷雨绝灭天使_羽翼_info: '当你体力值发生变化时,你可以获得等量的护甲.锁定技,当你击杀1名角色后,你增加1点体力上限回复1点体力,并将手牌数补充至体力上限;回合结束时,你获得等同于你已损失体力值的护甲.',
                        冷雨绝灭天使_日轮: '绝灭天使·日轮',
                        冷雨绝灭天使_日轮_info: '回合结束时,你可以弃置2张手牌,对你攻击距离内的其他角色造成1点伤害',
                        冷雨绝灭天使_光剑: '绝灭天使·光剑',
                        冷雨绝灭天使_光剑_info: '出牌阶段限1次,你可以选择1名其他角色,视为对其使用X张属性杀(X为你的护甲值)',
                        冷雨绝灭天使_天翼: '绝灭天使·天翼',
                        冷雨绝灭天使_天翼_info: '锁定技,在你的回合内,你每使用1次牌,你计算与其他角色的距离-1,直到回合结束.',
                        冷雨夜刀神十香_鏖杀公: '鏖杀公',
                        冷雨夜刀神十香_鏖杀公_info: '你不因此技能对其他角色使用的杀结算后,你可以弃置牌堆顶6张牌,若如此做,其中每有1张非基本牌,视为你对其使用1张杀.',
                        冷雨夜刀神十香_剑之天使: '剑之天使',
                        冷雨夜刀神十香_剑之天使_info: '结束阶段,若你于此回合内造成过2点或更多伤害,你可以获得2点护甲.',
                        冷雨夜刀神十香_王座之铠: '王座之铠',
                        冷雨夜刀神十香_王座之铠_info: '你的出牌阶段开始时,你可以摸X张牌,失去全部护甲(X为你的护甲值);锁定技,当你受到伤害后,你获得等量的护甲.',
                        冷雨夜刀神十香_十番: '神威灵装·十番',
                        冷雨夜刀神十香_十番_info: '当你的护甲为你抵挡伤害后,你可以摸1张牌;其他角色的回合开始时,若你满足以下条件,你获得1点护甲:<li>1、你没有护甲,<li>2、你的体力值不为全场最多,<li>3、回合角色体力值大于你.',
                        冷雨四糸乃_冰结傀儡: '冰结傀儡',
                        冷雨四糸乃_冰结傀儡_info: '锁定技,游戏开始时,你召唤体力值为8,护甲值为4,手牌数为8的冰结傀儡,你受到的伤害,体力值流失和体力上限减少均由冰结傀儡共同承担.当你累计造成5点伤害时,你再次召唤1只冰结傀儡.冰结傀儡死亡时,全体友方角色回复1～2点体力,摸1～2张牌并获得1～2点护甲.',
                        冷雨四糸乃_冰霜操纵: '冰霜操纵',
                        冷雨四糸乃_冰霜操纵_info: '回合开始时,若你区域内有牌,你可以摸X张牌并弃置等量的牌(X为你已损失的体力值+2),若你以此法弃置的牌数量不小于3张且其中每有1张红色牌,你回复1点体力,否则你可以对至多2名其他角色造成1点伤害并弃置其1张牌.',
                        冷雨诱宵美九_进行曲: '破军歌姬·进行曲',
                        冷雨诱宵美九_进行曲_info: '回合结束时,你可以令任意名角色摸1张牌,若如此做,其下回合摸牌阶段额外摸1张牌.',
                        冷雨诱宵美九_激励: '激励',
                        冷雨诱宵美九_激励_info: '',
                        冷雨诱宵美九_独奏: '破军歌姬·独奏',
                        冷雨诱宵美九_独奏_info: '出牌阶段限一次,你可选择任意名有手牌的其他角色,令其使用1张牌,否则其弃置1张牌.',
                        冷雨诱宵美九_镇魂曲: '破军歌姬·镇魂曲',
                        冷雨诱宵美九_镇魂曲_info: '出牌阶段结束时,你可以展示所有手牌,令至多X名角色获得1点护甲(X为你红色手牌的数量),若如此做,你回复1点体力.',
                        冷雨诱宵美九_轮舞曲: '破军歌姬·轮舞曲',
                        冷雨诱宵美九_轮舞曲_info: '弃牌阶段结束时,你可以展示所有手牌,对至多X名其他角色造成1点伤害(X为你黑色手牌的数量),若如此做,你摸1张牌.',
                        冷雨星宫六喰_闭: '封解主·闭',
                        冷雨星宫六喰_闭_info: '出牌阶段限1次,你可以令至多3名其他角色横置或重置,并令其非锁定技失效直到回合结束,若你处于横置状态,重置之',
                        冷雨星宫六喰_开: '封解主·开',
                        冷雨星宫六喰_开_info: '出牌阶段,你可以弃置1张牌令你本回合无视任何防具且使用牌无距离限制',
                        冷雨星宫六喰_开效果: '封解主·开',
                        冷雨星宫六喰_开效果_info: '',
                        冷雨星宫六喰_放: '封解主·放',
                        冷雨星宫六喰_放_info: '你的回合开始时,你可以弃置区域内所有的牌并摸等量的牌展示之,若其中有非基本牌,你回复1点体力摸X张牌(X为你非基本牌的数量).你获得以下效果直到回合结束,<li>你使用杀造成的伤害有30%概率+1.<li>你使用杀的次数+Y(Y为你的体力值).',
                        冷雨星宫六喰_放效果1: '封解主·放',
                        冷雨星宫六喰_放效果1_info: '',
                        冷雨星宫六喰_放效果2: '封解主·放',
                        冷雨星宫六喰_放效果2_info: '',
                        冷雨星宫六喰_放效果3: '封解主·放',
                        冷雨星宫六喰_放效果3_info: '',
                        冷雨星宫六喰_解: '封解主·解',
                        冷雨星宫六喰_解_info: '出牌阶段限1次,你可以弃置1张牌,令任意名其他角色弃置全部手牌并摸等量的牌展示,弃置其中的非基本牌.',
                        冷雨七罪_赝造魔女: '赝造魔女',
                        冷雨七罪_赝造魔女_info: '每当你使用1张牌,你可以重铸区域内1张牌,若此牌花色为♣️️,你摸1张牌,当你发动此技能次数达到4次时,你摸1张牌',
                        冷雨七罪_千变万化镜: '千变万化镜',
                        冷雨七罪_千变万化镜_info: '每当其他角色于回合内使用牌指定你为目标,你可以获得1张此牌的复制.你可以令你使用的除延时锦囊牌和无懈可击外的牌额外结算1次.',
                        冷雨八舞姐妹_飓风精灵: '飓风精灵',
                        冷雨八舞姐妹_飓风精灵_info: '每当你造成伤害后,你获得等量的"飓风"标记.锁定技,你的手牌上限和攻击距离+X(X为你"飓风"标记的数量)',
                        冷雨八舞姐妹_贯穿者: '飓风骑士·贯穿者',
                        冷雨八舞姐妹_贯穿者_info: '当你使用进攻牌指定目标时,你可以令至多X名可成为合法目标的其他角色也成为此牌的目标(X为你"飓风"标记的数量)',
                        冷雨八舞姐妹_束缚者: '飓风骑士·束缚者',
                        冷雨八舞姐妹_束缚者_info: '锁定技,你对其他角色造成伤害后,横置之并解除自身横置状态.回合结束时,你可以选择至多X名处于横置状态的其他角色(X为你"飓风"的数量),弃置其1张牌.',
                        冷雨八舞姐妹_天际疾驰者: '天际疾驰者',
                        冷雨八舞姐妹_天际疾驰者_info: '出牌阶段限1次,若你的"飓风"达到5枚或更多,你可以弃置5枚"飓风",选择至多2名其他角色,对其造成1点伤害并翻面弃置装备区所有的牌和1张手牌',
                        冷雨吉尔伽美什_乖离剑: '乖离剑·Ea',
                        冷雨吉尔伽美什_乖离剑_info: '回合结束时,若你装备区里有牌,你可以选择至多X名其他角色,收回装备区里所有牌,对其造成1点伤害并令其进入撕裂状态(X为你装备区的牌数)(处于撕裂状态的角色回合结束时,你增加1点体力上限并回复1点体力,对该角色造成1点神圣伤害)',
                        冷雨弗拉德三世_极刑王: '极刑王',
                        冷雨弗拉德三世_极刑王_info: '你使用非延时锦囊牌指定目标后,可以额外指定一名不是此牌目标的角色成为此牌合法目标.锁定技,当你于回合内重复使用同名卡牌时,你摸1张牌,失去1点体力并增加1点体力上限.锁定技,你的手牌上限不受体力值影响',
                        冷雨弗拉德三世_护国之鬼将: '护国之鬼将',
                        冷雨弗拉德三世_护国之鬼将_info: '其他角色的回合开始时或回合外有角色即将受到来源不为你的伤害时,你可以摸1张牌,若摸牌后你的手牌数超过X,你弃置1张牌(X为你的体力上限和你当前体力值的总和),你可以选择使用1张牌',
                        冷雨弗拉德三世_鲜血的传承: '鲜血的传承',
                        冷雨弗拉德三世_鲜血的传承_info: '觉醒技,当你进入濒死状态时,你将体力值回复至1点,获得X点护甲(X为你的体力上限),并获得技能"吸血鬼"',
                        冷雨莫德雷德_隐藏不贞的头盔: '隐藏不贞的头盔',
                        冷雨莫德雷德_隐藏不贞的头盔_info: '锁定技,当你成为负面锦囊牌的目标时,取消之.锁定技,当你成为非延时锦囊牌的目标时,你摸1张牌',
                        冷雨莫德雷德_对吾华丽父王的叛逆: '对吾华丽父王的叛逆',
                        冷雨莫德雷德_对吾华丽父王的叛逆_info: '锁定技,你对敌方角色造成的伤害+(1～2),且结算后该角色回复1点体力;你使用的杀无目标人数限制.',
                        冷雨莫德雷德_叛逆的骑士: '叛逆的骑士',
                        冷雨莫德雷德_叛逆的骑士_info: '你造成伤害后,你可以随机增加1～2点体力上限.你受到伤害后,你可以令伤害来源非锁定技失效并进入混乱状态直到回合结束,弃置1张牌.',
                        冷雨莫德雷德_灿然辉耀的王剑: '灿然辉耀的王剑',
                        冷雨莫德雷德_灿然辉耀的王剑_info: '回合结束时,若你有装备武器牌,你可以摸1张牌并回复1点体力.',
                        冷雨齐格飞_恶龙之血铠: '恶龙之血铠',
                        冷雨齐格飞_恶龙之血铠_info: '锁定技,当你受到非属性伤害时,<li>若为1点,防止之<li>若为2点,该伤害-1<li>若大于2点,你摸等量的牌.',
                        冷雨齐格飞_龙杀: '龙杀',
                        冷雨齐格飞_龙杀_info: '<li>锁定技,当你受到伤害时,若伤害来源不为你且没有"龙"标记,你令伤害来源获得"龙"标记.<li>你对有"龙"标记的角色造成伤害时,你可以令此伤害+1.<li>锁定技,有"龙"标记的角色获得牌时,你摸1张牌,若摸牌后你的手牌数大于X,你弃置1张牌(X为全场存活角色数).<li>你计算与有"龙"标记的角色的距离时,始终为1.',
                        冷雨齐格飞_屠龙: '屠龙',
                        冷雨齐格飞_屠龙_info: '',
                        冷雨齐格飞_莱茵的黄金: '莱茵的黄金',
                        冷雨齐格飞_莱茵的黄金_info: '',
                        冷雨沉默: '沉默',
                        冷雨沉默_info: '',
                        冷雨阿斯托尔福_唤起恐慌之魔笛: '唤起恐慌之魔笛',
                        冷雨阿斯托尔福_唤起恐慌之魔笛_info: '<li>回合开始时,你可以对体力值大于你的敌方角色造成1点伤害.<li>摸牌阶段开始时,你可以令手牌数比你多的敌方角色弃置1张牌.<li>回合结束时,你可以有40%概率让敌方角色进入随机负面状态.',
                        冷雨阿斯托尔福_破却宣言: '破却宣言',
                        冷雨阿斯托尔福_破却宣言_info: '你可以将任意1张手牌当无懈可击使用.锁定技,你不能成为延时锦囊牌的目标.',
                        冷雨阿斯托尔福_一碰就倒: '一碰就倒',
                        冷雨阿斯托尔福_一碰就倒_info: '每当你使用牌指定角色为目标时,你可以弃置其区域内1张牌,若以此弃置的牌为♠️️,你摸1张牌.',
                        冷雨阿斯托尔福_非世间所存之幻马: '非世间所存之幻马',
                        冷雨阿斯托尔福_非世间所存之幻马_info: '锁定技,你计算与体力值高于你的角色距离为1.',
                        冷雨龙之魔女_龙之魔女: '龙之魔女',
                        冷雨龙之魔女_龙之魔女_info: '<li>其他角色回合开始时,你可以指定1名未拥有<龙之魔女>标记的其他角色,令其获得<龙之魔女>标记直到当前回合结束.<li>每当你需要响应1张手牌,你可以观看有"龙之魔女"标记的角色的手牌,若其中有可响应的牌,你可以使用之.',
                        冷雨龙之魔女_驱龙之旗: '驱龙之旗',
                        冷雨龙之魔女_驱龙之旗_info: '',
                        冷雨龙之魔女_自我改造: '自我改造',
                        冷雨龙之魔女_自我改造_info: '回合开始时,你可以选择1名角色进行判定,<li>若判定牌为红色,你摸2张牌并回复1点体力,<li>若判定牌为黑色,你对其造成1点火焰伤害并摸1张牌,增加自身2点体力上限.',
                        '冷雨龙之魔女_咆哮吧,吾之愤怒': '咆哮吧,吾之愤怒',
                        '冷雨龙之魔女_咆哮吧,吾之愤怒_info': '锁定技,当你受到伤害后,你立即对伤害来源造成1～2点火焰伤害.<li>有角色死亡后,若你不为击杀该角色的伤害来源,你可以摸2张牌,视为对伤害来源使用1张决斗.<li>场上角色受到伤害后,若伤害来源不为你,你可以摸1张牌,视为对伤害来源使用1张火攻.',
                        冷雨龙之魔女_洗罪: '洗罪',
                        冷雨龙之魔女_洗罪_info: '',
                        冷雨贞德_神明裁决: '神明裁决',
                        冷雨贞德_神明裁决_info: '锁定技,游戏开始时,你令其他角色获得"裁"标记.<li>拥有"裁"标记的其他角色使用负面牌指定你为目标时,需弃置1张牌并令你摸1张牌,否则此牌无效,<li>当有"裁"标记的角色体力值降到2时,其失去"裁"标记.',
                        冷雨贞德_神裁: '神明裁决',
                        冷雨贞德_神裁_info: '',
                        冷雨莫德雷德_圆桌骑士: '圆桌骑士',
                        冷雨莫德雷德_圆桌骑士_info: '锁定技,你计算与其他角色的距离时,始终-1.',
                        冷雨贞德_失效: '神明裁决',
                        冷雨贞德_失效_info: '',
                        冷雨贞德_启示: '启示',
                        冷雨贞德_启示_info: '你进行判定时,你可以观看牌堆顶的Ｘ张牌(Ｘ为存活角色的数量,且最多为5),将其中任意数量的牌以任意顺序置于牌堆顶,其余以任意顺序置于牌堆底.',
                        冷雨贞德_吾主在此: '吾主在此',
                        冷雨贞德_吾主在此_info: '每当你距离1以内的角色成为非延时负面牌的目标时,你可以摸1张牌再交给其1张牌,若此牌为装备牌,该角色可装备之.',
                        冷雨贞德_红莲之圣女: '红莲之圣女',
                        冷雨贞德_红莲之圣女_info: '限定技,出牌阶段,若发动此技能你获得以下效果直到回合结束,<li>你造成非火焰伤害后可以追加1点火焰伤害,<li>你使用牌无距离限制和次数限制且你每使用1张牌后你摸1张牌,<li>出牌阶段结束时,你立即进入濒死状态.',
                        冷雨贞德_红莲之圣女效果1: '红莲之圣女',
                        冷雨贞德_红莲之圣女效果1_info: '',
                        冷雨贞德_红莲之圣女效果2: '红莲之圣女',
                        冷雨贞德_红莲之圣女效果2_info: '',
                        冷雨贞德_红莲之圣女效果3: '红莲之圣女',
                        冷雨贞德_红莲之圣女效果3_info: '',
                        冷雨齐格飞_尼伯龙根之歌: '尼伯龙根之歌',
                        冷雨齐格飞_尼伯龙根之歌_info: '锁定技,当你体力值降到0点或更少时,你摸1张牌并失去1点体力上限,将体力值调整至体力上限.',
                        冷雨吉尔伽美什_撕裂: '撕裂',
                        冷雨吉尔伽美什_撕裂_info: '',
                        冷雨八云紫_永夜的四重结界: '永夜的四重结界',
                        冷雨八云紫_永夜的四重结界_info: '出牌阶段限1次,你可以选择与至多4名有手牌的角色进行拼点,若你赢,你获得双方拼点的牌,否则你摸1张牌.',
                        冷雨八云紫_妖蝶1: '栖息于禅寺的妖蝶',
                        冷雨八云紫_妖蝶1_info: '<li>当你摸牌时,你可以选择X名其他角色,令其摸1张牌(X为你摸牌的数量),<li>当你于回合外失去牌后,你可以选择Y名角色,令其弃置一张牌(Y为你失去牌的数量)',
                        冷雨八云紫_妖蝶2: '栖息于禅寺的妖蝶',
                        冷雨八云紫_妖蝶2_info: '',
                        冷雨八云紫_动与静的均衡: '动与静的均衡',
                        冷雨八云紫_动与静的均衡_info: '你的回合结束时,你可以进行1次判定,摸X张牌(X为场上与你判定牌花色相同牌的数量)',
                        冷雨八云紫_梦境与现实的诅咒: '梦境与现实的诅咒',
                        冷雨八云紫_梦境与现实的诅咒_info: '出牌阶段,你可以选择1名其他角色,弃置其区域内的1张牌,若如此做,你本回合内无法对其使用此技能.若你弃置的牌,<li>花色为♠️️,该角色横置.<li>花色为♣️️,你获得1点护甲.<li>花色为♥️️,你增加1点体力上限并回复1点体力.<li>花色为◆,你摸1张牌.',
                        冷雨八意永琳_虚假之月: '虚假之月',
                        冷雨八意永琳_虚假之月_info: '<li>你的回合结束时,你可以摸X张牌并将武将牌翻面(X为场上存活角色数与你已损失体力值之和).<li>若你处于翻面状态,当其他角色使用牌指定除其以外角色为目标时,你可以弃置1张手牌,取消之.<li>当你的武将牌翻至正面时,你可以将手牌补充至体力上限,摸X张牌并弃置X张牌(X为场上存活角色数),你可以选择使用2张牌.',
                        冷雨山之翁_晚钟: '晚钟',
                        冷雨山之翁_晚钟_info: '<li>锁定技,你的杀造成伤害后,有60%概率令目标角色失去1体力.<li>你的回合结束时,你可以选择1名其他角色,视为对其使用1张杀.<li>你的回合内其他角色进入濒死状态时,你可以立即对其造成1点无来源的伤害.',
                        冷雨山之翁_死告天使: '死告天使',
                        冷雨山之翁_死告天使_info: '<li>锁定技,你受到伤害后,获得等量的"死"标记.<li>出牌阶段开始时,若你拥有"死"标记,你可以将"死"标记分配给任意名没有"死"标记的其他角色,你摸2X张牌(X为你剩余"死"标记的数量)并移除所有"死"标记.<li>锁定技,你不因此技能造成伤害后,你对有"死"标记的其他角色各造成1点伤害.回合结束时,你移除场上所有"死"标记.',
                        冷雨山之翁_死告天使1: '死告天使',
                        冷雨山之翁_死告天使1_info: '',
                        冷雨山之翁_死告天使2: '死告天使',
                        冷雨山之翁_死告天使2_info: '',
                        冷雨山之翁_死告天使3: '死告天使',
                        冷雨山之翁_死告天使3_info: '',
                        冷雨山之翁_信仰的加护: '信仰的加护',
                        冷雨山之翁_信仰的加护_info: '锁定技,你即将受到伤害时,有40%增加等同于伤害值的体力上限并回复等量的体力.每当有角色死亡后,你将体力值回复至体力上限.',
                        '冷雨恩奇都_世人啊,冀以锁系神明': '世人啊,冀以锁系神明',
                        '冷雨恩奇都_世人啊,冀以锁系神明_info': '<li>锁定技,你始终处于横置状态.<li>每当其他角色进入横置状态时,你增加1点体力上限;每当其他角色解除横置状态时,你减少1点体力上限.其他角色的回合结束时,若该角色处于横置状态,你回复1点体力.<li>回合开始时,你可以选择至多X名已横置的其他角色,令其解除横置并回复1点体力;回合结束时,你可以选择至多X名未横置的其他角色,横置之(X为你的体力值)<li>摸牌阶段开始时,你可以改为摸X张牌(X为场上已横置的角色数)',
                        冷雨恩奇都_变容: '变容',
                        冷雨恩奇都_变容_info: '出牌阶段限1次,你可以选择1名手牌数大于你或体力值大于你的其他角色,选择将你的手牌数补充至与其相等或将体力值回复至与其相等.',
                        冷雨恩奇都_制衡神兵: '制衡神兵',
                        冷雨恩奇都_制衡神兵_info: '<li>其他角色失去装备区里1张牌时,你可以弃置其1张手牌.<li>回合开始时,你可以令已横置的其他角色无法打出或使用手牌直到回合结束.',
                        冷雨恩奇都_完全形态: '完全形态',
                        冷雨恩奇都_完全形态_info: '出牌阶段开始时,若你的体力值低于一半或更多,你可以选择至多X名装备区有牌的角色,获得其装备区里1张牌(X为你已损失的体力值)',
                        冷雨反转十香_暴虐公: '暴虐公',
                        冷雨反转十香_暴虐公_info: '当你造成伤害时,若目标体力值大于你,你可以改为对其造成X点伤害.若其体力值小于你,你可以摸X张牌.(X为其与你的体力值之差)',
                        冷雨反转十香_剑之魔王: '剑之魔王',
                        冷雨反转十香_剑之魔王_info: '锁定技,每当你造成伤害后,你获得等量的护甲.',
                        冷雨反转十香_终焉之剑: '终焉之剑',
                        冷雨反转十香_终焉之剑_info: '当你造成伤害时,若你有护甲,你可以令此伤害附带X+1点神圣伤害,你失去所有的护甲(X为你的护甲值的随机值).当你造成的伤害结算后,你可以令目标进入封疗状态直到其回合结束.(封疗状态下无法回复体力)',
                        冷雨封疗: '封疗',
                        冷雨封疗_info: '',
                        冷雨织田信长_革新: '天下布武·革新',
                        冷雨织田信长_革新_info: '你的回合开始与结束时,你可以选择至多X名角色,令其摸等同于其当前体力值的牌,弃置等量的牌(X为你已损失的体力值且至少为1)',
                        冷雨织田信长_三千世界: '三千世界',
                        冷雨织田信长_三千世界_info: '出牌阶段开始时,若场上有红色牌,你可以视为使用X张红色火杀(X为场上红色牌的数量).你对装备区里有坐骑牌的目标造成的伤害+1.',
                        冷雨织田信长_三千世界效果: '猎兽',
                        冷雨织田信长_三千世界效果_info: '',
                        冷雨织田信长_第六天魔王波旬: '第六天魔王波旬',
                        冷雨织田信长_第六天魔王波旬_info: '出牌阶段限1次,你可以选择至多X名其他角色(X为场上手牌数大于你的角色数且至少为1),横置其中手牌数大于你的角色并对选择目标造成1点火焰伤害.此技能对体力值为全场最高的角色造成的伤害+1.',
                        冷雨最后之王_古老盟约的加持: '古老盟约的加持',
                        冷雨最后之王_古老盟约的加持_info: '锁定技,游戏的第一个回合开始前,你增加X点体力上限和体力(X为全场角色数).每当有角色死亡,你失去1点体力上限并摸1张牌.',
                        冷雨最后之王_曼茶罗方阵: '曼茶罗方阵',
                        冷雨最后之王_曼茶罗方阵_info: '锁定技,你的装备区无数量限制.你每发动此技能,你的手牌上限永久+1.',
                        冷雨最后之王_救世神刀: '救世神刀',
                        冷雨最后之王_救世神刀_info: '你的杀对目标造成伤害后,你可以对目标造成1～2点神圣雷电伤害.锁定技,你造成伤害后,你随机装备1件装备牌.',
                        冷雨最后之王_歼灭魔王的勇者: '歼灭魔王的勇者',
                        冷雨最后之王_歼灭魔王的勇者_info: '摸牌阶段,你可以额外摸X张牌(X为全场存活角色数的一半且向下取整)',
                        冷雨西莉卡_治愈吐息: '治愈吐息',
                        冷雨西莉卡_治愈吐息_info: '出牌阶段结束时,你可以选择至多X名已受伤角色,令其回复1点体力并摸1张牌(X为你的红色手牌数)',
                        '冷雨五河琴里_灼烂歼鬼·炮': '灼烂歼鬼',
                        '冷雨五河琴里_灼烂歼鬼·炮_info': '',
                        冷雨五河琴里_灼烂歼鬼: '灼烂歼鬼',
                        冷雨五河琴里_灼烂歼鬼_info: '出牌阶段开始时,你可以进行1次判定,若判定牌,<li>为黑色,你转变灼烂歼鬼为炮形态,出牌阶段限一次,你可以选择至多X名其他角色,对其造成1点火焰伤害(X为你的红色手牌数且至少为1)<li>为红色,你转变灼烂歼鬼为斧形态,每当你于出牌阶段内使用1张红色牌时,你可以令1名其他角色进行判定,若为红色,你对其造成1点火焰伤害.',
                        '冷雨五河琴里_灼烂歼鬼·斧': '灼烂歼鬼',
                        '冷雨五河琴里_灼烂歼鬼·斧_info': '',
                        冷雨蕾米莉亚_德古拉的摇篮: '德古拉的摇篮',
                        冷雨蕾米莉亚_德古拉的摇篮_info: '锁定技,你造成伤害后,增加等量的体力上限并回复等量的体力.',
                        冷雨蕾米莉亚_冈格尼尔之枪: '冈格尼尔之枪',
                        冷雨蕾米莉亚_冈格尼尔之枪_info: '锁定技,你的杀无距离限制,红杀不计入次数限制且不可闪避',
                        冷雨蕾米莉亚_绯色命运: '绯色命运',
                        冷雨蕾米莉亚_绯色命运_info: '<li>任意1名角色的判定生效前,你可以摸1张牌,选择打出1张牌替换之.<li>你的摸牌阶段开始时,你可以进行1次判定,若判定牌为红色,你额外摸1张牌.<li>你的出牌阶段开始时,你可以进行1次判定,若判定牌为黑色,你摸3张杀,否则你摸1张牌.',
                        冷雨蕾米莉亚_绯色命运1: '绯色命运',
                        冷雨蕾米莉亚_绯色命运1_info: '',
                        冷雨蕾米莉亚_绯色命运2: '绯色命运',
                        冷雨蕾米莉亚_绯色命运2_info: '',
                        冷雨阿尔托莉雅_风王结界: '风王结界',
                        冷雨阿尔托莉雅_风王结界_info: '你受到伤害时,若伤害来源手牌数大于你,此伤害-1.当其他角色使用牌指定你为目标时,若其手牌数大于你,取消之.',
                        冷雨阿尔托莉雅_远离尘世的理想乡: '远离尘世的理想乡',
                        冷雨阿尔托莉雅_远离尘世的理想乡_info: '全场角色回合开始时,若你手牌数为全场最少(不为之一),你可以摸1张牌,若你的体力值为全场最少(不为之一),你可以增加1点体力上限并回复1点体力.',
                        冷雨阿尔托莉雅_王的诞生之日: '王的诞生之日',
                        冷雨阿尔托莉雅_王的诞生之日_info: '觉醒技,回合开始时,若你的体力值为全场最高,你增加1点体力上限并回复1点体力,获得永久技能"十二圆桌骑士".',
                        冷雨阿尔托莉雅_十二圆桌骑士: '十二圆桌骑士',
                        冷雨阿尔托莉雅_十二圆桌骑士_info: '你的回合开始或结束时,你可以亮出牌堆顶12张牌,选择其中任意张点数之和不大于12的牌获得之,将其它牌置入弃牌堆.',
                        冷雨阿尔托莉雅_骑士王: '骑士王',
                        冷雨阿尔托莉雅_骑士王_info: '锁定技,你计算与其他角色的距离时,始终-1',
                        冷雨阿尔托莉雅_誓约胜利之剑: '誓约胜利之剑',
                        冷雨阿尔托莉雅_誓约胜利之剑_info: '出牌阶段限1次,你可以弃置至多3张非延时锦囊牌,对1名其他角色造成等量的伤害.',
                        冷雨风见幽香_双管魔炮: '双管魔炮',
                        冷雨风见幽香_双管魔炮_info: '锁定技,你造成的伤害翻倍,你使用牌无距离限制且无视目标防具.',
                        冷雨风见幽香_自然之力: '自然之力',
                        冷雨风见幽香_自然之力_info: '锁定技,你的手牌数始终不小于3张.每当你发动此技能时,你可以选择1名已受伤的角色,令其回复1点体力并摸1张牌.',
                        冷雨风见幽香_花之暴君: '花之暴君',
                        冷雨风见幽香_花之暴君_info: '你使用杀指定目标后,你可以进行判定,若判定牌花色不为♠️️,则此杀无法闪避,否则目标弃置1张牌.',
                        冷雨赫拉克勒斯_射杀百头: '射杀百头',
                        冷雨赫拉克勒斯_射杀百头_info: '弃牌阶段结束时,你可以视为对至多X名角色使用1张杀(X为你此阶段弃牌数).',
                        冷雨赫拉克勒斯_怪力: '怪力',
                        冷雨赫拉克勒斯_怪力_info: '每当你即将造成伤害,可弃置1张手牌令伤害+1',
                        冷雨赫拉克勒斯_狂化侵蚀: '狂化侵蚀',
                        冷雨赫拉克勒斯_狂化侵蚀_info: '锁定技,弃牌阶段结束时,若你本回合内造成过伤害,你流失1点体力并摸2张牌',
                        冷雨赫拉克勒斯_十二试炼: '十二试炼',
                        冷雨赫拉克勒斯_十二试炼_info: '锁定技,当你体力值降到0或更低时,你增加1点体力上限,将体力调整至体力上限,弃置区域内所有的牌并摸4张牌,重置你的武将牌,此技能最多使用12次.',
                        冷雨高文_圣者的数字: '圣者的数字',
                        冷雨高文_圣者的数字_info: '锁定技,你的回合开始时,若你满足以下条件,你弃置判定区内所有牌,摸3张牌,增加3点体力上限并获得"圣者的加护"直到回合结束(摸牌数,回复值,伤害值为3倍).<li>你的体力值为3.<li>你的手牌数为3.',
                        冷雨高文_轮转胜利之剑: '轮转胜利之剑',
                        冷雨高文_轮转胜利之剑_info: '出牌阶段限1次,你可以弃置至多2张非延时锦囊牌,对与你距离为1的至多2名其他角色造成等量的伤害.',
                        冷雨阿蒂拉_游星之纹章: '游星之纹章',
                        冷雨阿蒂拉_游星之纹章_info: '全场角色回合开始时,其可以将1张花色不同于你武将牌上已有"星"花色的手牌置于你武将牌上,称为"星",你每有1张"星",你的体力上限与手牌上限+1.锁定技,你摸牌阶段的摸牌值,与你的回复值+X(X为你"星"的数量)',
                        冷雨阿蒂拉_游星之纹章效果: '游星之纹章',
                        冷雨阿蒂拉_游星之纹章效果_info: '',
                        冷雨阿蒂拉_军神之剑: '泪之星·军神之剑',
                        冷雨阿蒂拉_军神之剑_info: '出牌阶段限1次,你可以弃置1张手牌选择1名其他角色进行判定,根据判定牌的点数亮出牌堆顶等量的牌,你对其造成等同于亮出牌中黑色牌数量的伤害.',
                        冷雨阿蒂拉_文明侵蚀: '文明侵蚀',
                        冷雨阿蒂拉_文明侵蚀_info: '出牌阶段,你可以将1张手牌视为本回合内你未以此法使用过的基本牌或非延时锦囊牌使用.',
                        冷雨阿蒂拉_文明侵蚀效果: '文明侵蚀',
                        冷雨阿蒂拉_文明侵蚀效果_info: '',
                        冷雨斯卡哈_魔境的智慧: '魔境的智慧',
                        冷雨斯卡哈_魔境的智慧_info: '锁定技,你免疫部分负面效果.',
                        冷雨斯卡哈_贯穿死翔之枪: '贯穿死翔之枪',
                        冷雨斯卡哈_贯穿死翔之枪_info: '出牌阶段限1次,你可选择至多2名其他角色,令其横置且非锁定技失效和无法使用或打出手牌直到此技能结束,你视为对其使用X张杀(X为你已损失的体力值且至少为1)',
                        冷雨斯卡哈_影之国: '死亡满溢的的魔境之门',
                        冷雨斯卡哈_影之国_info: '<li>每当你受到伤害后,你可以令伤害来源获得等同于伤害值的"影"标记.<li>锁定技,你的回合开始时,你获得场上有"影"标记的角色X张手牌并对其造成X点神圣伤害(X为其"影"标记的数量),你移除场上所有的"影"标记,若移除的标记数量不小于你的体力值,你增加1点体力上限并回复1点体力.',
                        冷雨斯卡哈_影之国效果: '死亡满溢的的魔境之门',
                        冷雨斯卡哈_影之国效果_info: '',
                        冷雨夏尔_刽子手: '刽子手',
                        冷雨夏尔_刽子手_info: '其他角色回合结束时,若其于回合内造成过伤害,你可以摸1张牌执行额外一个出牌阶段,若你已受伤,你回复1点体力,否则你增加1点体力上限.',
                        冷雨夏尔_人体研究: '人体研究',
                        冷雨夏尔_人体研究_info: '锁定技,你造成伤害时,你摸等同于伤害值的牌,你造成的伤害均视为神圣伤害.',
                        冷雨夏尔_死亡为明日希望: '死亡为明日希望',
                        冷雨夏尔_死亡为明日希望_info: '一局游戏限3次,当一名身份与你不同的非主公角色进入濒死状态时,你可以进行判定,若结果不为♠️️,其将体力值调整到体力上限,弃置区域内所有牌并摸3张牌,其将身份变更为与你相同.',
                        冷雨崔斯坦_治愈的竖琴: '治愈的竖琴',
                        冷雨崔斯坦_治愈的竖琴_info: '出牌阶段结束时,你可以选择至多X名处于负面状态(除混乱状态)或已受伤的角色,令其解除负面状态或回复1点体力,并免疫延时锦囊和混乱直到其回合开始(X为你手牌颜色的差值)',
                        冷雨净化: '净化',
                        冷雨净化_info: '',
                        冷雨崔斯坦_痛哭的幻奏: '痛哭的幻奏',
                        冷雨崔斯坦_痛哭的幻奏_info: '锁定技,你使用的杀不可闪避且无次数限制.出牌阶段开始时,若你手牌中没有杀,你可以展示所有手牌,获得以下效果直到回合结束.<li>你可以将黑色牌当雷杀使用,将红色牌当火杀使用.<li>锁定技,你每使用杀造成伤害后,你进行判定,若判定牌不为黑色,你摸1张牌.',
                        冷雨崔斯坦_痛哭的幻奏效果: '痛哭的幻奏',
                        冷雨崔斯坦_痛哭的幻奏效果_info: '',
                        冷雨贝狄威尔_守护的誓约: '守护的誓约',
                        冷雨贝狄威尔_守护的誓约_info: '回合结束时,若你手牌颜色均相同,你可以展示所有的手牌,令至多X名角色摸1张牌,并令其获得1点护甲和防止下一次受到的伤害(X为你的手牌数)',
                        冷雨贝狄威尔_守护的誓约效果: '守护的誓约',
                        冷雨贝狄威尔_守护的誓约效果_info: '',
                        冷雨贝狄威尔_银之臂: '紧握圣剑·银之臂',
                        冷雨贝狄威尔_银之臂_info: '回合开始时,若你的手牌颜色均相同,你可以展示所有手牌并获得以下效果直到回合结束.<li>你使用的杀可以额外指定1名目标,你可以令你的杀额外结算1次,你使用杀的次数+1.<li>你使用的非杀基本牌和非延时非全场目标锦囊牌可额外指定1名目标.<li>你的摸牌值,回复值+1.',
                        冷雨贝狄威尔_银之臂效果: '紧握圣剑·银之臂',
                        冷雨贝狄威尔_银之臂效果_info: '',
                        冷雨贝狄威尔_一闪而逝: '一闪而逝·银之臂',
                        冷雨贝狄威尔_一闪而逝_info: '出牌阶段限1次,若你解锁了技能"紧握圣剑·银之臂",你可以选择至多2名体力值比你大的其他角色,对其造成X段伤害值为1的神圣伤害(X为其与你体力值之差)',
                        冷雨狂化库丘林_突穿死棘之枪: '突穿死棘之枪',
                        冷雨狂化库丘林_突穿死棘之枪_info: '出牌阶段限1次,你可以选择任意名其他角色,选择1张手牌同时与其进行拼点,依次进行结算,若你赢,你令其非锁定技失效且无法使用或打出手牌直到此技能结束,视为对其使用1张杀;若你输,你摸1张牌.',
                        冷雨狂化库丘林_剜穿鏖杀之枪: '剜穿鏖杀之枪',
                        冷雨狂化库丘林_剜穿鏖杀之枪_info: '出牌阶段限1次,你可以失去1点体力并弃置1张基本牌,对1名其他角色造成1点伤害且结算后你回复1点体力.',
                        冷雨狂化库丘林_死牙之兽: '死牙之兽的噬碎',
                        冷雨狂化库丘林_死牙之兽_info: '你的回合开始时,若你的体力值小于3,你可以摸2+X张牌(X为你已损失的体力值)并弃置判定区内所有的牌,变身为"死牙之兽"直到出牌阶段结束,变身期间你造成的伤害+1,且每造成1点伤害,你增加1点体力上限并回复1点体力.',
                        冷雨死牙之兽_狂暴: '狂暴',
                        冷雨死牙之兽_狂暴_info: '',
                        冷雨死牙之兽_嗜血: '嗜血',
                        冷雨死牙之兽_嗜血_info: '',
                        冷雨死牙之兽_变形: '变形',
                        冷雨死牙之兽_变形_info: '',
                        '冷雨吕布_军神五兵·斩切': '军神五兵',
                        '冷雨吕布_军神五兵·斩切_info': '',
                        '冷雨吕布_军神五兵·突刺': '军神五兵',
                        '冷雨吕布_军神五兵·突刺_info': '',
                        '冷雨吕布_军神五兵·刈割': '军神五兵',
                        '冷雨吕布_军神五兵·刈割_info': '',
                        '冷雨吕布_军神五兵·挥扫': '军神五兵',
                        '冷雨吕布_军神五兵·挥扫_info': '',
                        冷雨吕布_军神五兵: '军神五兵',
                        冷雨吕布_军神五兵_info: '<li>斩切——当你即将对有护甲的角色造成伤害时,你可以令此伤害+1,每当你造成的伤害被护甲抵挡后,你可以对该角色造成1点伤害.锁定技,你无视目标防具.<li>突刺——每当你的杀即将对目标造成伤害时,若其下家角色不为你,你可以对其下家造成1点伤害.锁定技,你对处于横置状态的角色造成的伤害+1,处于横置状态的角色不能响应你的杀.<li>打击——锁定技,你受到的属性伤害始终-1.当你受到属性伤害后,你可以选择至多X名其他角色,对其造成1点伤害(X为伤害值).<li>刈割——出牌阶段限1次,你可以弃置1张手牌选择1名其他角色,对该角色及其上下家(不为你)造成1点伤害.<li>挥扫——锁定技,你受到非属性伤害时,若伤害值大于1,你受到其中1点伤害,将其余伤害反弹给伤害来源(此过程中你为此伤害的伤害来源).',
                        '冷雨吕布_军神五兵·斩切1': '军神五兵',
                        '冷雨吕布_军神五兵·斩切1_info': '',
                        '冷雨吕布_军神五兵·突刺1': '军神五兵',
                        '冷雨吕布_军神五兵·突刺1_info': '',
                        '冷雨吕布_军神五兵·突刺2': '军神五兵',
                        '冷雨吕布_军神五兵·突刺2_info': '',
                        '冷雨吕布_军神五兵·打击1': '军神五兵',
                        '冷雨吕布_军神五兵·打击1_info': '',
                        '冷雨吕布_军神五兵·打击2': '军神五兵',
                        '冷雨吕布_军神五兵·打击2_info': '',
                        冷雨吕布_勇猛1: '勇猛',
                        冷雨吕布_勇猛1_info: '',
                        冷雨吕布_勇猛2: '勇猛',
                        冷雨吕布_勇猛2_info: '',
                        冷雨吕布_勇猛3: '勇猛',
                        冷雨吕布_勇猛3_info: '',
                        冷雨吕布_勇猛4: '勇猛',
                        冷雨吕布_勇猛4_info: '',
                        冷雨吕布_勇猛: '勇猛',
                        冷雨吕布_勇猛_info: '锁定技,你免疫混乱,翻面与横置,延时锦囊不能指定你为目标.你摸牌阶段可以额外摸X张牌,(X为你已损失的体力值).',
                        冷雨吕布_乱世枭雄: '乱世枭雄',
                        冷雨吕布_乱世枭雄_info: '锁定技,你没有装备区,你使用杀的次数+W,你的进攻距离+X,防御距离+Y,手牌上限+Z.(W为场上武器牌的数量,X为场上进攻马的数量+1,Y为场上防御马的数量+1,Z为场上防具的数量+1)',
                        冷雨宫本武藏_第五势: '第五势',
                        冷雨宫本武藏_第五势_info: '锁定技,你使用的杀需要连续打出2张闪响应;你使用决斗指定目标后或成为其他角色使用决斗的目标,该角色需连续打出2张杀响应;你可以令你使用的杀额外结算1次,你使用的杀无视目标防具.',
                        冷雨禁锢: '禁锢',
                        冷雨禁锢_info: '',
                        冷雨宫本武藏_天眼: '天眼',
                        冷雨宫本武藏_天眼_info: '出牌阶段开始时,你可以选择1名其他角色,若如此做,本回合你的手牌不占用手牌上限,你使用牌不能指定除你和该角色以外的角色为目标,且你计算与该角色的距离时始终为1,你对该角色造成的伤害+1,此回合内除你与天眼角色外其他角色不能打出手牌且非锁定技失效.',
                        冷雨宫本武藏_天眼效果: '天眼',
                        冷雨宫本武藏_天眼效果_info: '',
                        冷雨宫本武藏_无空: '无空',
                        冷雨宫本武藏_无空_info: '若你在回合内击杀了至少1名角色,回合结束后,你进入无敌状态直到你出牌阶段开始(无敌状态下受到伤害或被卡牌指定为目标时,取消之).',
                        冷雨宫本武藏_无空效果1: '无空',
                        冷雨宫本武藏_无空效果1_info: '',
                        冷雨宫本武藏_无空效果2: '无空',
                        冷雨宫本武藏_无空效果2_info: '',
                        冷雨宫本武藏_六道五轮: '六道五轮·俱利伽罗天象',
                        冷雨宫本武藏_六道五轮_info: '出牌阶段限1次,你可以弃置至多X张装备牌,选择1名其他角色(若你已发动技能"天眼",则只能选择天眼角色),对其造成X段伤害值为1的随机神圣属性伤害(X为你弃置的装备牌数),期间每段伤害结算后其获得随机负面效果直到其回合开始(负面效果:地——受到的非属性伤害+1;风——受到的属性伤害+1;水——受到的雷电伤害+1;火——受到的火焰伤害+1).',
                        冷雨地: '地',
                        冷雨地_info: '',
                        冷雨风: '风',
                        冷雨风_info: '',
                        冷雨水: '水',
                        冷雨水_info: '',
                        冷雨火: '火',
                        冷雨火_info: '',
                        冷雨鬼种之魔: '鬼种之魔',
                        冷雨鬼种之魔_info: '锁定技,你的回合外,全场角色受到伤害后,你摸1张牌;全场角色回复体力后,你增加1点体力上限,若此时你的体力上限为全场最高(不为之一),你摸1张牌.',
                        冷雨巴御前_乱战之心得: '乱战之心得',
                        冷雨巴御前_乱战之心得_info: '锁定技,当除你以外的友方角色数大于敌方角色数时,你造成的伤害始终+1;当除你以外的友方角色数小于敌方角色数时,你的摸牌阶段摸牌值和回复值始终+1.',
                        冷雨巴御前_真言: '真言·圣观世音菩萨',
                        冷雨巴御前_真言_info: '出牌阶段限1次,你可以弃置至多3名其他角色各1张牌,若以此法弃置的红色牌数量至少为1,回合结束时你可以对1名其他角色造成1～3点火焰伤害,并可以令1名角色将手牌数补至体力上限(最多X张,X为场上存活角色数).',
                        冷雨巴御前_真言效果: '真言·圣观世音菩萨',
                        冷雨巴御前_真言效果_info: '',
                        冷雨伊卡洛斯_导弹: '永久追尾空对空导弹',
                        冷雨伊卡洛斯_导弹_info: '回合结束时,你可以视为对你攻击范围内的其他角色使用1张杀.当你不因此判定对目标使用杀后,你可以进行1次判定,若为黑色,视为你对目标使用1张杀并可以选择继续判定.',
                        冷雨伊卡洛斯_导弹效果: '永久追尾',
                        冷雨伊卡洛斯_导弹效果_info: '',
                        冷雨伊卡洛斯_绝对防御圈: '绝对防御圈',
                        冷雨伊卡洛斯_绝对防御圈_info: '锁定技,你受到的伤害始终-1.',
                        冷雨伊卡洛斯_阿波罗: '阿波罗',
                        冷雨伊卡洛斯_阿波罗_info: '出牌阶段限1次,你可以弃置2张牌,对1名其他角色及与其相邻的2名角色(不为你)造成1～2点伤害.',
                        冷雨伊卡洛斯_万能卡片1: '万能卡片',
                        冷雨伊卡洛斯_万能卡片1_info: '回合开始时,你可以弃置1张牌进行判定.<li>若结果为♥️️,你回复1点体力并增加1点体力上限.<li>若结果为◆,你摸3张牌.<li>若结果为♣️️,你弃置判定区内所有牌并摸2张牌.<li>若结果为♠️️,你获得判定区内所有牌并摸1张牌.',
                        冷雨伊卡洛斯_导弹Ⅱ: '永久追尾空对空导弹Ⅱ',
                        冷雨伊卡洛斯_导弹Ⅱ_info: '回合结束时,你可以视为对其他角色各使用1张杀.当你不因此判定对目标使用杀后,你可以进行判定,若不为♠️️,视为你对目标使用1张杀且你可以再次进行判定.',
                        冷雨伊卡洛斯_导弹效果Ⅱ: '永久追尾Ⅱ',
                        冷雨伊卡洛斯_导弹效果Ⅱ_info: '',
                        冷雨伊卡洛斯_绝对防御圈Ⅱ: '绝对防御圈Ⅱ',
                        冷雨伊卡洛斯_绝对防御圈Ⅱ_info: '锁定技,当你受到伤害值为1的伤害时,反弹此伤害.回合开始时,你回复1点体力.',
                        冷雨伊卡洛斯_可移动装甲: '可移动装甲',
                        冷雨伊卡洛斯_可移动装甲_info: '锁定技,你没有装备区,你使用牌无距离限制,你不能被延时锦囊指定为目标,摸牌阶段你额外摸2张牌,你的手牌上限始终-2.',
                        冷雨伊卡洛斯_潘多拉: '潘多拉系统',
                        冷雨伊卡洛斯_潘多拉_info: '觉醒技,回合开始时,若你满足以下条件,你开启潘多拉进化系统,增加1点体力上限并回复1点体力,并重置武将技能.<li>若你的身份为主公,且场上无存活的忠臣.<li>若你为场上仅存活的忠臣.<li>若你为场上仅存活的反贼.',
                        冷雨兰陵王_入阵: '入阵',
                        冷雨兰陵王_入阵_info: '',
                        冷雨兰陵王_隐美的假面: '隐美的假面',
                        冷雨兰陵王_隐美的假面_info: '你的摸牌阶段开始时,你可以令处于同一队列中的友方角色各摸1张牌;你回复体力后,你可以令与你处于同一队列的友方角色各回复1点体力.锁定技,延时锦囊不能指定你为目标.',
                        冷雨兰陵王_魔性之貌: '魔性之貌',
                        冷雨兰陵王_魔性之貌_info: '友方角色回合结束时,若其与你处于同一队列中,其可以将至多2张牌置于你的武将牌上,称为"剑",若如此做,其摸等量的牌.锁定技,你的回合开始时,若你武将牌上有"剑",你将所有的"剑"收入手牌,本回合你的进攻距离+X,出杀次数+X(X为你获得"剑"的数量).',
                        冷雨兰陵王_魔性之貌效果: '魔性之貌',
                        冷雨兰陵王_魔性之貌效果_info: '',
                        冷雨兰陵王_兰陵王入阵曲: '兰陵王入阵曲',
                        冷雨兰陵王_兰陵王入阵曲_info: '你使用杀指定目标后,你可以令与你处于同一队列的友方角色选择一项:<li>摸1张牌,视为对该目标使用1张杀.<li>失去1点体力,视为对该目标使用2张杀.',
                        冷雨荆轲_抑制: '抑制',
                        冷雨荆轲_抑制_info: '锁定技,你对体力值为全场最高(不为之一)的角色造成的伤害+1,你造成伤害时,伤害来源均视为该目标.',
                        冷雨荆轲_图策: '图谋划策',
                        冷雨荆轲_图策_info: '<li>每当你被牌指定为目标时,你可以摸1张牌,将1张手牌置于武将牌上,成为"策".你受到伤害后,你需弃置1张"策"并摸1张牌,若此时你的体力值不大于"策"的数量,你回复1点体力.<li>回合结束时,你可以令1名角色摸X张牌,弃置Y张牌(X为你策的数量,Y为你此前发动此效果的次数).<li>锁定技,你不能被延时锦囊指定为目标.',
                        冷雨荆轲_谋划: '图谋划策',
                        冷雨荆轲_谋划_info: '',
                        冷雨荆轲_图穷匕见: '图穷匕见',
                        冷雨荆轲_图穷匕见_info: '觉醒技,回合开始时,若你"策"的数量不小于2X(X为全场存活角色数),你需将所有的"策"交给1名角色,令该角色展示所有手牌,若如此做,你增加A点体力上限,回复B点体力值,获得C点护甲,并摸D张牌(A为该角色手牌中♠️️的数量,B为该角色手牌中♥️️的数量,C为该角色手牌中♣️️的数量,D为该角色手牌中◆的数量).你获得技能"不归匕首".',
                        冷雨荆轲_不归匕首: '不归匕首',
                        冷雨荆轲_不归匕首_info: '锁定技,你每使用1张杀,你失去1点体力上限,你使用的杀不可被响应,你使用杀次数+X,你的进攻距离+X(X为场上存活角色数),每当有角色死亡,你增加2点体力上限并摸3张牌.',
                        冷雨阿喀琉斯_疾风: '疾风怒涛的不死战车',
                        冷雨阿喀琉斯_疾风_info: '每当你于回合内使用牌的数量达到X时(X为你的体力值),你每使用1张牌,你可以对攻击距离内任意名其他角色造成1点伤害.',
                        冷雨阿喀琉斯_小世界: '包围苍天的小世界',
                        冷雨阿喀琉斯_小世界_info: '回合结束时,若你于本回合内未造成过伤害,你可以摸2+X张牌(X为你已损失的体力值),将Y张牌置于你的武将牌上(Y为你的体力值),称为"盾",你的出牌阶段开始时,你获得所有"盾".锁定技,其他角色计算与你的距离时,始终+Z(Z为你"盾"的数量);若你已失去技能"勇者的不凋花",你即将受到伤害时,若你武将牌上有"盾",你须弃置1张"盾",获得等同于伤害值的护甲.',
                        冷雨阿喀琉斯_不凋花: '勇者的不凋花',
                        冷雨阿喀琉斯_不凋花_info: '锁定技,当你即将减少体力值时,你摸1张牌并展示之,若不为♠️️,你防止此伤害,否则此失去值+1且你失去此技能.',
                        冷雨_甘霖: '甘霖',
                        冷雨_甘霖_info: '回合开始/回合结束时限4次,你可以在随机5个技能选项中选择获得1个技能直到回合结束/回合开始.',
                        冷雨_甘霖效果: '甘霖',
                        冷雨_甘霖效果_info: '',
                        冷雨_作者: '作者技',
                        冷雨_作者_info: '作者技,你免疫部分负面效果.',
                        冷雨阿塔兰忒_诉状箭书: '诉状箭书',
                        冷雨阿塔兰忒_诉状箭书_info: '出牌阶段限3次,你可以将你所有的X交给1名其他角色(第1次发动此技能时,X为基本牌,第2次为装备牌,第3次为锦囊牌),你可以对任意名除该角色外的其他角色造成1点神圣伤害.',
                        冷雨阿塔兰忒_神罚的野猪: '神罚的野猪',
                        冷雨阿塔兰忒_神罚的野猪_info: '锁定技,除你以外的最后1名友方角色死亡后,你进入狂化状态.',
                        冷雨神罚的野猪_闇天之弓: '闇天之弓',
                        冷雨神罚的野猪_闇天之弓_info: '出牌阶段,你可以弃置2张基本牌,令其他角色依次响应1张闪,无法照做者受到来源为你的1点伤害.',
                        冷雨神罚的野猪_北斗之七箭: '北斗之七箭',
                        冷雨神罚的野猪_北斗之七箭_info: '锁定技,你的回合开始时,若你已受伤,你将X点神圣伤害分配给场上随机敌方角色(X为你已损失的体力值且不超过场上存活角色数).',
                        冷雨神罚的野猪_变化: '变化',
                        冷雨神罚的野猪_变化_info: '你的回合结束时,若你的上下家体力值不相同,你可以回复X点体力(X为你的上下家体力值之差),若你的上下家手牌数不同,你可以摸Y张牌(Y为你的上下家手牌数之差).锁定技,增减益技能对你无效.',
                        冷雨清姬_谎言破却: '谎言破却',
                        冷雨清姬_谎言破却_info: '出牌阶段限1次,你可以令至多2名有手牌的其他角色选择1种花色,你获得其1张手牌,若你获得的牌的花色与其选择的花色不同,你令其失去X点体力上限(X为其已损失的体力值且至少为1),且本回合你每使用1张牌,你计算与其的距离-1.',
                        冷雨清姬_跟踪: '跟踪',
                        冷雨清姬_跟踪_info: '',
                        冷雨清姬_焰色接吻: '焰色接吻',
                        冷雨清姬_焰色接吻_info: '出牌阶段开始时,你可以展示自己和1名其他角色各1张手牌,若展示的牌类型相同,本回合内你使用的牌无次数限制且你造成的伤害+1.',
                        冷雨清姬_转身火生三昧: '转身火生三昧',
                        冷雨清姬_转身火生三昧_info: '出牌阶段限1次,你可以对至多2名其他角色造成1～2点火焰伤害,令其灼烧1回合,并有30%概率令其翻面.',
                        冷雨灼烧: '灼烧',
                        冷雨灼烧_info: '',
                        冷雨茨木童子_罗生门大怨起: '罗生门大怨起',
                        冷雨茨木童子_罗生门大怨起_info: '出牌阶段限1次,你可以指定至多3名有手牌的其他角色,若如此做,你失去等量的体力上限,本回合内你每使用1张牌时,你展示所指定目标1张手牌,若所展示的牌的颜色与你使用的牌颜色相同,你对其造成1点伤害.回合结束时,你回复以此法失去的体力上限与体力值.',
                        冷雨茨木童子_大江山大炎起: '大江山大炎起',
                        冷雨茨木童子_大江山大炎起_info: '出牌阶段限1次,你可以选择至多3名其他角色,每选择1名角色你弃置牌堆顶10张牌,其中每有1张♥️️牌,你对其造成1点火焰伤害.',
                        冷雨酒吞童子_果实的酒气: '果实的酒气',
                        冷雨酒吞童子_果实的酒气_info: '你的回合开始时,你可以展示所有手牌,令至多X名其他角色进入混乱状态直到其回合开始(X为你的黑色手牌数).',
                        冷雨酒吞童子_神便鬼毒: '千紫万红·神便鬼毒',
                        冷雨酒吞童子_神便鬼毒_info: '每当你使用1张酒时,你可以对攻击距离内的任意名其他角色造成1点伤害,并令其中毒且非锁定技失效直到其回合结束,其有40%概率进入蚀毒状态(蚀毒状态下因中毒失去的体力值+1).',
                        冷雨毒: '毒',
                        冷雨毒_info: '',
                        冷雨伊丽莎白_嗜虐的魅力: '嗜虐的魅力',
                        冷雨伊丽莎白_嗜虐的魅力_info: '锁定技,游戏开始时,你令友方全体女性增加1点体力上限和体力值;友方全体女性摸牌阶段始终额外摸1张牌.',
                        冷雨伊丽莎白_拷问技术: '拷问技术',
                        冷雨伊丽莎白_拷问技术_info: '锁定技,你装备有武器牌时,你的杀造成的伤害始终+1.',
                        冷雨伊丽莎白_龙吟雷声: '龙吟雷声',
                        冷雨伊丽莎白_龙吟雷声_info: '出牌阶段限1次,你可以弃置1张黑色牌,令其他角色依次选择弃置2张牌,否则你对其造成1～2点雷电伤害.',
                        冷雨伊丽莎白_鲜血魔女: '鲜血魔女',
                        冷雨伊丽莎白_鲜血魔女_info: '觉醒技,回合开始时,若你对场上存活的其他角色均造成过伤害,你增加X体力上限并回复X点体力(X为场上存活的其他角色的数量),弃置判定区内所有牌并摸3张牌,将技能"龙吟雷声"造成的伤害值修改为"2～3".',
                        冷雨卡米拉_沐浴鲜血: '沐浴鲜血',
                        冷雨卡米拉_沐浴鲜血_info: '锁定技,你对其他角色造成伤害后,你令其获得等同于伤害值的"血"标记;你的回合结束时,你增加X点体力上限并回复X点体力(X为场上有"血"标记的角色数量),并令有"血"标记的角色弃置1枚"血"标记.',
                        冷雨卡米拉_拷问技术: '拷问技术',
                        冷雨卡米拉_拷问技术_info: '锁定技,你使用万箭齐发、南蛮入侵造成的伤害+X,你对处于连环的其他角色造成的属性伤害+X(X为你"刑"的数量);你使用万箭齐发、南蛮入侵造成伤害后或对处于连环状态的其他角色造成属性伤害后,你获得1枚"刑"标记.',
                        冷雨卡米拉_拷问技术1: '拷问技术',
                        冷雨卡米拉_拷问技术1_info: '',
                        冷雨卡米拉_幻想铁处女: '幻想铁处女',
                        冷雨卡米拉_幻想铁处女_info: '出牌阶段限1次,你可以弃置2张基本牌,令1名有"血"标记的角色失去1～X点体力(X为其拥有"血"标记的数量),你回复等量的体力,并弃置其全部的"血"标记.',
                        冷雨尼禄_扫荡的黄金剧场: '扫荡的黄金剧场',
                        冷雨尼禄_扫荡的黄金剧场_info: '出牌阶段限X次(X为当前游戏轮数),你可以摸1张牌,并随机令1名未横置的敌方角色横置,你根据当前游戏轮数发动以下效果.<li>若当前游戏轮数大于1,你摸3张牌,选择使用3张牌,否则你弃置2张牌并失去此效果直到回合结束.<li>若当前游戏轮数大于2,你随机令1名非锁定技未失效的敌方角色非锁定技失效直到回合结束.<li>若当前游戏轮数大于3,你随机令1名可以使用或打出手牌的敌方角色不能使用或打出手牌直到回合结束.<li>若当前游戏轮数大于4,你随机对1名敌方角色造成1点火焰伤害.',
                        冷雨尼禄_陨铁之鞴: '陨铁之鞴',
                        冷雨尼禄_陨铁之鞴_info: '锁定技,当你的手牌数为全场最多时,你对其他角色造成的伤害均附带1点火焰伤害.',
                        冷雨尼禄_童女讴歌的荣华帝政: '童女讴歌的荣华帝政',
                        冷雨尼禄_童女讴歌的荣华帝政_info: '回合结束时,你可以对任意名已横置的其他角色使用1张火杀.',
                        冷雨迪昂_秀丽的容貌: '秀丽的容貌',
                        冷雨迪昂_秀丽的容貌_info: '锁定技,你造成的伤害,摸牌值与回复值有60%概率+1;你即将判定时,你的判定牌有60%概率转化为正面效果.',
                        冷雨迪昂_剑之舞蹈: '百合飞散剑之舞蹈',
                        冷雨迪昂_剑之舞蹈_info: '出牌阶段限1次,你可以弃置1名其他角色装备区里1张牌,视为对其使用1张杀;若以此法弃置的装备牌为黑色,你弃置其1张手牌视为对其使用1张杀,若以此法弃置的手牌为黑色,你重复此流程(最多3次).',
                        冷雨迪昂_豪华绚烂: '百合花开豪华绚烂',
                        冷雨迪昂_豪华绚烂_info: '锁定技,当全场角色累计使用牌指定10名目标后,你令敌方角色依次弃置1张牌,你重置此技能.',
                        冷雨赛米拉米斯_双重召唤: '双重召唤',
                        冷雨赛米拉米斯_双重召唤_info: '游戏开始时,你可以复制1名其他角色的全部技能.',
                        冷雨赛米拉米斯_庭园建造: '庭园建造',
                        冷雨赛米拉米斯_庭园建造_info: '出牌阶段限1次,你可以将任意张手牌扣置于武将牌上,称为"庭".锁定技,你受到伤害后,若你武将牌上有"庭",你选择其中1张收回手牌.',
                        冷雨赛米拉米斯_虚荣的空中庭园: '虚荣的空中庭园',
                        冷雨赛米拉米斯_虚荣的空中庭园_info: '觉醒技,回合开始时,若当前游戏轮数不小于3且你拥有"庭"的数量不小于场上判定牌的点数,你弃置判定区内所有牌,增加1点体力上限并回复1点体力,失去技能"庭园建造"并解锁技能"十与一的黑棺".',
                        冷雨赛米拉米斯_十与一的黑棺: '十与一的黑棺',
                        冷雨赛米拉米斯_十与一的黑棺_info: '<li>锁定技,你的摸牌阶段摸牌值,回复值+1,你受到的伤害始终-1.<li>回合开始时,你可以令至多3名其他角色横置.回合结束时,你可以令至多3名其他角色非锁定技失效直到其回合开始.<li>出牌阶段限1次,你可以弃置牌堆顶11张牌,对1名其他角色造成X点伤害(X为弃置牌中♠️️的数量).<li>锁定技,除开始与结束阶段外,你的各个阶段逆转且在判定阶段执行后执行开始阶段与结束阶段.',
                        冷雨赛米拉米斯_骄慢王的美酒: '骄慢王的美酒',
                        冷雨赛米拉米斯_骄慢王的美酒_info: '其他角色使用酒时,你可以弃置1张手牌,对其造成1点神圣伤害,若其处于横置状态,你对其他已横置的其他角色造成1点神圣伤害.',
                        冷雨诸葛孔明_鉴识眼: '鉴识眼',
                        冷雨诸葛孔明_鉴识眼_info: '其他角色的回合开始时,你可以随机展示其1张手牌,若如此做,其从牌堆里随机获得1张与所展示牌颜色不同且类型不同的牌.',
                        冷雨诸葛孔明_石兵八阵: '石兵八阵',
                        冷雨诸葛孔明_石兵八阵_info: '出牌阶段限1次,你可以弃置1张基本牌,令顺时针所有其他角色与除其以外其他角色交换位置,若被交换位置的为敌方角色,则该角色受到来自与其交换位置的角色的1点伤害.若交换位置后,该角色下家为你,终止技能结算.',
                        冷雨诸葛孔明_军师的忠言: '军师的忠言',
                        冷雨诸葛孔明_军师的忠言_info: '其他角色出牌阶段开始时,你可以令其交给你1张牌,若其交给你的牌——为基本牌,其本回合造成伤害时,你摸1张牌;为锦囊牌,其本回合使用1张锦囊牌时,其摸1张牌;为装备牌,其可以对距离2以内至多3名角色造成1点伤害.你选择令其获得"桃,火杀,闪,酒,过河拆桥"其中1张牌.',
                        冷雨鬼巫女_炼狱: '炼狱·天照大神',
                        冷雨鬼巫女_炼狱_info: '锁定技,你出场后,每隔25秒横置所有敌方角色并对随机1名已横置的敌方角色造成1～2点火焰伤害.',
                        冷雨鬼巫女_魔神: '魔神·死狂',
                        冷雨鬼巫女_魔神_info: '出牌阶段限1次,你可以对1、3、5、7、9号位的其他角色造成1～2点神圣伤害.',
                        冷雨鬼巫女_绝望: '绝望·鲜血之结末',
                        冷雨鬼巫女_绝望_info: '锁定技,回合结束时,你有概率发动以下任意1个技能.<li>混沌·梦想封印·鬼——你可以将任意名其他角色装备区内的牌移出游戏,并令其非锁定技失效直到回合结束.<li>神罚——你可以视为对任意名判定区内没牌的其他角色使用"乐不思蜀"、"兵粮寸断"、"火链"、"雷链".<li>诸神之黄昏·天地崩坏——你对2、4、6、8号位的其他角色造成1～2点神圣伤害并弃置其1张牌.<li>返魂——你回复3点体力并摸3张牌(此过程不触发任何技能),与你下家角色交换座位.',
                        冷雨鬼巫女_永远: '永远·Requiem',
                        冷雨鬼巫女_永远_info: '锁定技,你免疫部分负面效果.',
                        冷雨鬼巫女_概念: '概念·绝对干涉',
                        冷雨鬼巫女_概念_info: '锁定技,当你出场轮数达到3轮且你体力值为全场最高时,你立即赢得本局游戏胜利.',
                        冷雨博丽灵梦_暴走: '暴走',
                        冷雨博丽灵梦_暴走_info: '锁定技,当你的体力值降到2点或更少时,你立即变身为"鬼巫女",并增加X点体力上限与体力(X为场上存活角色数),摸4张牌并于当前回合结束时执行额外1个回合.',
                        冷雨冰结傀儡_护主: '护主',
                        冷雨冰结傀儡_护主_info: '',
                        冷雨冰结傀儡_奉献: '奉献',
                        冷雨冰结傀儡_奉献_info: '',
                        冷雨冰结傀儡_冰刺: '冰刺',
                        冷雨冰结傀儡_冰刺_info: '锁定技,你的装备牌均视为杀.你使用的杀无距离限制.',
                        冷雨望月千代女_咒术: '咒术',
                        冷雨望月千代女_咒术_info: '锁定技,你使用牌指定敌方角色时,有60%概率令其非锁定技失效直到其回合结束.',
                        冷雨望月千代女_大蛇之咒: '大蛇之咒',
                        冷雨望月千代女_大蛇之咒_info: '锁定技,回合开始时,你受到1点无来源的神圣伤害,摸X张牌(X为你已损失的体力值+2)并执行额外1个出牌阶段.',
                        冷雨望月千代女_通灵: '通灵·伊吹大明神缘起',
                        冷雨望月千代女_通灵_info: '限定技,出牌阶段,你可以弃置3张手牌,召唤体力值为5,护甲值为8,手牌数为8的八岐大蛇.',
                        冷雨八岐大蛇_魔力缠卷: '魔力缠卷',
                        冷雨八岐大蛇_魔力缠卷_info: '锁定技,你的装备牌均视为杀.你使用的杀无距离限制.你即将造成伤害时,有50%概率追加1点相同的伤害.你在场时,武将"望月千代女"使用的牌不可被响应.',
                        冷雨八岐大蛇_魔力缠卷效果: '魔力缠卷',
                        冷雨八岐大蛇_魔力缠卷效果_info: '',
                        冷雨美杜莎_魔眼: '魔眼',
                        冷雨美杜莎_魔眼_info: '回合开始时,你可以令1名其他角色无法使用或打出手牌直到回合结束,若其体力值大于你,你将其武将牌翻至背面,否则其非锁定技失效直到回合结束.',
                        冷雨美杜莎_自我封印: '自我封印·暗黑神殿',
                        冷雨美杜莎_自我封印_info: '出牌阶段限1次,你可以获得1名没有成为魔眼目标的其他角色全部手牌,令其失去所有技能直到出牌阶段结束并摸X张牌(X为其体力上限且至多为4).',
                        冷雨美杜莎_他者封印: '他者封印·鲜血神殿',
                        冷雨美杜莎_他者封印_info: '锁定技,与你距离为1以内的其他角色回复体力后,你增加1点体力上限并回复1点体力;全场角色回合开始时,若你体力值为全场最少且你已受伤,你令与你距离为2以内的其他角色失去1点体力,你回复X点体力(X为失去体力的角色数).',
                        冷雨美杜莎_骑英之缰绳: '骑英之缰绳',
                        冷雨美杜莎_骑英之缰绳_info: '回合结束时,若场上装备区有坐骑牌,你可以对至多X名其他角色造成0～2点伤害(X为场上装备区内坐骑牌的数量).锁定技,场上装备区内每有1张坐骑牌,你的手牌上限,攻击距离,防御距离便+1.',
                        冷雨艾蕾什基伽尔_大王冠: '隐藏的大王冠',
                        冷雨艾蕾什基伽尔_大王冠_info: '每当你获得装备牌后,你可以复制1名其他角色所有技能直到你的回合结束.',
                        冷雨艾蕾什基伽尔_冥界佑护: '冥界佑护',
                        冷雨艾蕾什基伽尔_冥界佑护_info: '回合结束时,若你体力值低于3点,你可以令同一队列的友方角色摸2张牌并获得2点护甲,你移除游戏1回合.',
                        冷雨艾蕾什基伽尔_冥界审判: '权能·冥界审判',
                        冷雨艾蕾什基伽尔_冥界审判_info: '出牌阶段限1次,若你为己方阵营仅存角色,你可以令至多3名其他角色所有技能失效且无法回复体力值直到其出牌阶段开始.',
                        冷雨艾蕾什基伽尔_灵峰踏抱冥府之鞴: '灵峰踏抱冥府之鞴',
                        冷雨艾蕾什基伽尔_灵峰踏抱冥府之鞴_info: '你受到伤害时,你可以与伤害来源交换座位,获得攻击距离内敌方角色各1～2张牌并对这些角色造成1点神圣伤害.',
                        冷雨时崎狂三_食时之城: '食时之城',
                        冷雨时崎狂三_食时之城_info: '锁定技,游戏开始后,每4秒你获得1点时间之力;你击杀1名角色后,你获得40%点时间之力.',
                        冷雨时崎狂三_一之弹: '一之弹',
                        冷雨时崎狂三_一之弹_info: '出牌阶段开始时,你可以消耗5点时间之力,令1名角色计算与其他角色距离时,始终为1(效果持续至其回合结束).',
                        冷雨时崎狂三_二之弹: '二之弹',
                        冷雨时崎狂三_二之弹_info: '其他角色出牌阶段开始时,你可以消耗5点时间之力,令其本回合内计算与其他角色的距离时,始终无限.',
                        冷雨时崎狂三_三之弹: '三之弹',
                        冷雨时崎狂三_三之弹_info: '出牌阶段限1次,你可以消耗5点时间之力,摸X张牌(X为你体力上限-手牌数+2).',
                        冷雨时崎狂三_四之弹: '四之弹',
                        冷雨时崎狂三_四之弹_info: '全场角色受到伤害后,你可以消耗5点时间之力,令受伤角色将体力值调整至受伤前的状态.',
                        冷雨时崎狂三_五之弹: '五之弹',
                        冷雨时崎狂三_五之弹_info: '全场角色进行判定时,你可以消耗5点时间之力,观看牌堆顶的5张牌,将其中任意数量的牌以任意顺序置于牌堆顶,其余以任意顺序置于牌堆底.',
                        冷雨时崎狂三_六之弹: '六之弹',
                        冷雨时崎狂三_六之弹_info: '出牌阶段限1次,你可以消耗5点时间之力,将所有手牌交给你的上家角色,并令其在你的回合结束后执行额外1个回合.',
                        冷雨时崎狂三_七之弹: '七之弹',
                        冷雨时崎狂三_七之弹_info: '回合开始时,你可以消耗5点时间之力,令1名其他角色翻面和无法使用或打出手牌且非锁定技失效直到回合结束.',
                        冷雨时崎狂三_八之弹: '八之弹',
                        冷雨时崎狂三_八之弹_info: '出牌阶段限2次,你可以消耗5点时间之力,在1名已阵亡角色的位置上召唤1个体力值为4,手牌数为4,嘲讽值为4的分身.锁定技,当你即将死亡时,若场上有分身,你调整体力值至体力上限,令1个分身死亡.',
                        冷雨时崎狂三_九之弹: '九之弹',
                        冷雨时崎狂三_九之弹_info: '出牌阶段限1次,你可以消耗5点时间之力,观看并弃置1名其他角色的2张手牌.',
                        冷雨时崎狂三_十之弹: '十之弹',
                        冷雨时崎狂三_十之弹_info: '1名角色回合结束时,你可以消耗5点时间之力,令1名角色获得回合角色本回合弃置的牌.',
                        冷雨时崎狂三_十之弹_效果: '十之弹',
                        冷雨时崎狂三_十之弹_效果_info: '',
                        冷雨时崎狂三_十一之弹: '十一之弹',
                        冷雨时崎狂三_十一之弹_info: '限定技,出牌阶段,若你拥有的时间之力达到10点或更多,你可以消耗半数的时间之力,令1名角色离开游戏3回合.',
                        冷雨时崎狂三_十二之弹: '十二之弹',
                        冷雨时崎狂三_十二之弹_info: '限定技,出牌阶段,若你拥有的时间之力不小于10点,你可以消耗全部时间之力,令1名角色体力上限与体力值调整至5,移除区域内所有的牌并将手牌数调整至4.',
                        冷雨时崎狂三分身_分身嘲讽: '分身嘲讽',
                        冷雨时崎狂三分身_分身嘲讽_info: '',
                        冷雨莎士比亚: '莎士比亚',
                        冷雨五河琴里: '五河琴里',
                        冷雨御坂美琴: '御坂美琴',
                        冷雨吉尔伽美什: '吉尔伽美什',
                        冷雨夏娜: '夏娜',
                        冷雨博丽灵梦: '博丽灵梦',
                        冷雨兰斯洛特: '兰斯洛特',
                        冷雨开膛手杰克: '开膛手杰克',
                        冷雨伊斯坎达尔: '伊斯坎达尔',
                        冷雨一方通行: '一方通行',
                        冷雨雾雨魔理沙: '雾雨魔理沙',
                        冷雨四季映姬: '四季映姬',
                        冷雨芙兰朵露: '芙兰朵露',
                        冷雨迪卢木多: '迪卢木多',
                        冷雨本条二亚: '本条二亚',
                        冷雨键山雏: '键山雏',
                        '冷雨帕秋莉·诺蕾姬': '帕秋莉·诺蕾姬',
                        冷雨西行寺幽幽子: '西行寺幽幽子',
                        冷雨迦尔纳: '迦尔纳',
                        冷雨鸢一折纸: '鸢一折纸',
                        冷雨绝灭天使: '绝灭天使',
                        冷雨夜刀神十香: '夜刀神十香',
                        冷雨四糸乃: '四糸乃',
                        冷雨诱宵美九: '诱宵美九',
                        冷雨星宫六喰: '星宫六喰',
                        冷雨七罪: '七罪',
                        冷雨八舞姐妹: '八舞姐妹',
                        冷雨尼禄: '尼禄·克劳狄乌斯',
                        冷雨弗拉德三世: '弗拉德三世',
                        冷雨莫德雷德: '莫德雷德',
                        冷雨阿斯托尔福: '阿斯托尔福',
                        冷雨齐格飞: '齐格飞',
                        '冷雨龙之魔女·贞德': '龙之魔女·贞德',
                        冷雨贞德: '贞德',
                        冷雨八云紫: '八云紫',
                        冷雨八意永琳: '八意永琳',
                        冷雨山之翁: '山之翁',
                        冷雨恩奇都: '恩奇都',
                        冷雨反转十香: '夜刀神十香',
                        冷雨织田信长: '织田信长',
                        冷雨西莉卡: '西莉卡',
                        冷雨最后之王: '最后之王',
                        冷雨蕾米莉亚: '蕾米莉亚',
                        冷雨阿尔托莉雅: '阿尔托莉雅',
                        冷雨风见幽香: '风见幽香',
                        冷雨赫拉克勒斯: '赫拉克勒斯',
                        冷雨高文: '高文',
                        冷雨阿蒂拉: '阿蒂拉',
                        冷雨斯卡哈: '斯卡哈',
                        冷雨夏尔: '夏尔·亨利·桑松',
                        冷雨崔斯坦: '崔斯坦',
                        冷雨贝狄威尔: '贝狄威尔',
                        冷雨狂化库丘林: '库丘林',
                        冷雨死牙之兽: '死牙之兽',
                        冷雨吕布: '吕布',
                        冷雨宫本武藏: '宫本武藏',
                        冷雨巴御前: '巴御前',
                        冷雨伊卡洛斯: '伊卡洛斯',
                        冷雨兰陵王: '兰陵王',
                        冷雨荆轲: '荆轲',
                        冷雨阿喀琉斯: '阿喀琉斯',
                        冷雨: '冷雨磅礴',
                        冷雨阿塔兰忒: '阿塔兰忒',
                        冷雨神罚的野猪: '阿塔兰忒',
                        冷雨清姬: '清姬',
                        冷雨茨木童子: '茨木童子',
                        冷雨酒吞童子: '酒吞童子',
                        冷雨伊丽莎白: '伊丽莎白·巴托里',
                        冷雨卡米拉: '卡米拉',
                        冷雨迪昂: '迪昂·德·鲍蒙',
                        冷雨赛米拉米斯: '赛米拉米斯',
                        冷雨诸葛孔明: '诸葛孔明',
                        冷雨鬼巫女: '鬼巫女',
                        冷雨望月千代女: '望月千代女',
                        冷雨八岐大蛇: '八岐大蛇',
                        冷雨美杜莎: '美杜莎',
                        冷雨艾蕾什基伽尔: '艾蕾什基伽尔',
                        冷雨时崎狂三: '时崎狂三',
                        冷雨时崎狂三分身: '分身',
                        冷雨冰结傀儡: '冰结傀儡',
                    },
                };
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:冷雨/image/${i}.jpg`)
                }
                lib.config.all.characters.add('冷雨');
                lib.config.characters.add('冷雨');
                lib.translate['冷雨_character_config'] = `冷雨`;
                return QQQ;
            });
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
                };//true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.abs(Number(num));
                };//始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Math.abs(Number(num)), 1);
                };//始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.max(Number(num), 0);
                };//始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Number(num), 1);
                };//始终返回正数且至少为1
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
                        if (obj.hasOwnProperty(key)) {
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
            game.import('card', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '冷雨',
                    connect: true,
                    card: {
                        火链: {
                            image: 'ext:冷雨/image/火链.jpg',
                            type: 'delay',
                            filterTarget(card, player, target) {
                                return lib.filter.judge(card, player, target) && player != target;
                            },
                            judge(card) {
                                if (card.suit == 'heart') return 0;
                                return -3;
                            },
                            effect() {
                                if (result.bool == false) {
                                    if (!player.isLinked()) player.link();
                                    player.damage('fire', 'nosource');
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 4,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('caomu')) return 0;
                                        return -1.5 / Math.sqrt(target.countCards('h') + 1);
                                    },
                                },
                                tag: {
                                    skip: 'phaseDraw',
                                },
                            },
                            selectTarget: 1,
                            enable: true,
                            content() {
                                target.addJudge(card, cards);
                            },
                            allowMultiple: false,
                            fullimage: true,
                        },
                        雷链: {
                            image: 'ext:冷雨/image/雷链.jpg',
                            type: 'delay',
                            filterTarget(card, player, target) {
                                return lib.filter.judge(card, player, target) && player != target;
                            },
                            judge(card) {
                                if (card.suit == 'spade') return 0;
                                return -3;
                            },
                            effect() {
                                if (result.bool == false) {
                                    if (!player.isLinked()) player.link();
                                    player.damage('thunder', 'nosource');
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                result: {
                                    target(player, target) {
                                        var num = target.hp - target.countCards('h') - 2;
                                        if (num > -1) return -0.01;
                                        if (target.hp < 3) num--;
                                        if (target.isTurnedOver()) num /= 2;
                                        var dist = get.distance(player, target, 'absolute');
                                        if (dist < 1) dist = 1;
                                        return num / Math.sqrt(dist);
                                    },
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                            selectTarget: 1,
                            enable: true,
                            content() {
                                target.addJudge(card, cards);
                            },
                            allowMultiple: false,
                            fullimage: true,
                        },
                        '黄金律·伪': {
                            image: 'ext:冷雨/image/黄金律·伪.jpg',
                            type: 'trick',
                            enable: true,
                            filterTarget(card, player, target) {
                                return true;
                            },
                            selectTarget() {
                                return [1, 5];
                            },
                            content() {
                                'step 0';
                                target.draw();
                                target.chooseToDiscard('he', true).ai = get.disvalue;
                                ('step 1');
                                var card = result.cards[0];
                                if (card.suit == 'diamond') {
                                    player.draw();
                                }
                            },
                            ai: {
                                wuxie() {
                                    return 0;
                                },
                                basic: {
                                    useful: 3,
                                    value: 3,
                                    order: 5,
                                },
                                result: {
                                    target(player, target) {
                                        var hs = target.getCards('h');
                                        if (hs.length == 1) {
                                            if (target == player && hs[0].name == 'yiyi') {
                                                return 0;
                                            }//QQQ
                                            return 0.3;
                                        }
                                        return Math.sqrt(target.countCards('he'));
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                    norepeat: 1,
                                },
                            },
                            fullimage: true,
                        },
                        快速: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.快速 = card;
                                target.storage.快速_markcount;
                                player.addSkill('快速');
                            },
                            image: 'ext:冷雨/image/快速.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        强击: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.强击 = card;
                                target.storage.强击_markcount;
                                player.addSkill('强击');
                            },
                            image: 'ext:冷雨/image/强击.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        感电: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.感电 = card;
                                target.storage.感电_markcount;
                                player.addSkill('感电');
                            },
                            image: 'ext:冷雨/image/感电.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 0,
                                    useful: -5,
                                    value: 0,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        祝福: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.祝福 = card;
                                target.storage.祝福_markcount;
                                player.addSkill('祝福');
                            },
                            image: 'ext:冷雨/image/祝福.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        复仇: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.复仇 = card;
                                target.storage.复仇_markcount;
                                player.addSkill('复仇');
                            },
                            image: 'ext:冷雨/image/复仇.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        减速: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.减速 = card;
                                target.storage.减速_markcount;
                                player.addSkill('减速');
                            },
                            image: 'ext:冷雨/image/减速.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        抗性: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.抗性 = card;
                                target.storage.抗性_markcount;
                                player.addSkill('抗性');
                            },
                            image: 'ext:冷雨/image/抗性.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        生命补给: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.生命补给 = card;
                                target.storage.生命补给_markcount;
                                player.addSkill('生命补给');
                            },
                            image: 'ext:冷雨/image/生命补给.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        '生命补给·改': {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.生命补给·改 = card;
                                target.storage.生命补给·改_markcount;
                                player.addSkill('生命补给·改');
                            },
                            image: 'ext:冷雨/image/生命补给·改.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        能量补给: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.能量补给 = card;
                                target.storage.能量补给_markcount;
                                player.addSkill('能量补给');
                            },
                            image: 'ext:冷雨/image/能量补给.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        '能量补给·改': {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.能量补给·改 = card;
                                target.storage.能量补给·改_markcount;
                                player.addSkill('能量补给·改');
                            },
                            image: 'ext:冷雨/image/能量补给·改.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        武器补给: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.武器补给 = card;
                                target.storage.武器补给_markcount;
                                player.addSkill('武器补给');
                            },
                            image: 'ext:冷雨/image/武器补给.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        '武器补给·改': {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.武器补给·改 = card;
                                target.storage.武器补给·改_markcount;
                                player.addSkill('武器补给·改');
                            },
                            image: 'ext:冷雨/image/武器补给·改.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        装甲补给: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.装甲补给 = card;
                                target.storage.装甲补给_markcount;
                                player.addSkill('装甲补给');
                            },
                            image: 'ext:冷雨/image/装甲补给.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        '装甲补给·改': {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.装甲补给·改 = card;
                                target.storage.装甲补给·改_markcount;
                                player.addSkill('装甲补给·改');
                            },
                            image: 'ext:冷雨/image/装甲补给·改.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        崩坏能源: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.崩坏能源 = card;
                                target.storage.崩坏能源_markcount;
                                player.addSkill('崩坏能源');
                            },
                            image: 'ext:冷雨/image/崩坏能源.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        黑科技武器: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.黑科技武器 = card;
                                target.storage.黑科技武器_markcount;
                                player.addSkill('黑科技武器');
                            },
                            image: 'ext:冷雨/image/黑科技武器.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        黑科技装甲: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.黑科技装甲 = card;
                                target.storage.黑科技装甲_markcount;
                                player.addSkill('黑科技装甲');
                            },
                            image: 'ext:冷雨/image/黑科技装甲.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        精密零件: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.精密零件 = card;
                                target.storage.精密零件_markcount;
                                player.addSkill('精密零件');
                            },
                            image: 'ext:冷雨/image/精密零件.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        '伏羲·火': {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.伏羲·火 = card;
                                target.storage.伏羲·火_markcount;
                                player.addSkill('伏羲·火');
                            },
                            image: 'ext:冷雨/image/伏羲·火.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        '伏羲·雷': {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.伏羲·雷 = card;
                                target.storage.伏羲·雷_markcount;
                                player.addSkill('伏羲·雷');
                            },
                            image: 'ext:冷雨/image/伏羲·雷.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        '女娲·星': {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.女娲·星 = card;
                                target.storage.女娲·星_markcount;
                                player.addSkill('女娲·星');
                            },
                            image: 'ext:冷雨/image/女娲·星.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        '轩辕·盾': {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.轩辕·盾 = card;
                                target.storage.轩辕·盾_markcount;
                                player.addSkill('轩辕·盾');
                            },
                            image: 'ext:冷雨/image/轩辕·盾.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        '神农·草': {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.神农·草 = card;
                                target.storage.神农·草_markcount;
                                player.addSkill('神农·草');
                            },
                            image: 'ext:冷雨/image/神农·草.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        '神农·花': {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.神农·花 = card;
                                target.storage.神农·花_markcount;
                                player.addSkill('神农·花');
                            },
                            image: 'ext:冷雨/image/神农·花.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        '神农·穗': {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.神农·穗 = card;
                                target.storage.神农·穗_markcount;
                                player.addSkill('神农·穗');
                            },
                            image: 'ext:冷雨/image/神农·穗.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        幸运兔耳: {
                            type: 'buff',
                            enable(card, player) {
                                return true;
                            },
                            selectTarget: -1,
                            cardcolor: 'red',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.$gain2(cards);
                                player.storage.幸运兔耳 = card;
                                target.storage.幸运兔耳_markcount;
                                player.addSkill('幸运兔耳');
                            },
                            image: 'ext:冷雨/image/幸运兔耳.jpg',
                            fullimage: true,
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                    },
                    translate: {
                        火链: '火链',
                        火链_info: '目标角色判定阶段进行判定:若判定结果不为♥️️,则该角色横置并受到一点火焰伤害.',
                        雷链: '雷链',
                        雷链_info: '出牌阶段,对一名其他角色使用.若判定结果不为♠️️,其进入横置状态并受到一点雷电伤害.',
                        '黄金律·伪': '黄金律·伪',
                        '黄金律·伪_info': '对与任意5名角色使用,摸1张牌弃置1张牌,若以此弃置的牌花色为◆,你摸1张牌.',
                        快速: '快速',
                        快速_info: '你的攻击距离始终+1.',
                        强击: '强击',
                        强击_info: '锁定技,你造成伤害时,若目标有护甲,此伤害+1.',
                        感电: '感电',
                        感电_info: '你响应1张闪后,你可以令1名角色进行判定,若判定牌为黑色,你对其造成1点雷电伤害.',
                        祝福: '祝福',
                        祝福_info: '锁定技,你击杀1名角色后,你获得2点护甲.',
                        复仇: '复仇',
                        复仇_info: '锁定技,你造成伤害时,若目标体力值不小于你,此伤害有25%概率+1.',
                        减速: '减速',
                        减速_info: '锁定技,你的防御距离始终+1',
                        抗性: '抗性',
                        抗性_info: '锁定技,你受到属性伤害时,有25%概率-1.',
                        生命补给: '生命补给',
                        生命补给_info: '锁定技,你造成伤害后,有25%概率回复1点体力.',
                        '生命补给·改': '生命补给·改',
                        '生命补给·改_info': '锁定技,你回复体力后,有25%概率获得1点护甲.',
                        能量补给: '能量补给',
                        能量补给_info: '锁定技,你造成伤害后,有25%概率摸1张牌.',
                        '能量补给·改': '能量补给·改',
                        '能量补给·改_info': '锁定技,当你一次性失去2张或更多的牌,你有25%概率摸1张牌.',
                        武器补给: '武器补给',
                        武器补给_info: '锁定技,你造成非属性伤害时,有25%概率此伤害+1.',
                        '武器补给·改': '武器补给·改',
                        '武器补给·改_info': '锁定技,你造成非属性伤害后,有25%概率获得1点护甲.',
                        装甲补给: '装甲补给',
                        装甲补给_info: '锁定技,你受到非属性伤害时,有25%概率此伤害-1.',
                        '装甲补给·改': '装甲补给·改',
                        '装甲补给·改_info': '锁定技,你受到非属性伤害后,有25%概率获得1点护甲.',
                        崩坏能源: '崩坏能源',
                        崩坏能源_info: '锁定技,当你回复体力时,你有25%概率摸1张牌.',
                        黑科技武器: '黑科技武器',
                        黑科技武器_info: '锁定技,你造成伤害时,有25%概率将你的武将牌翻面且此伤害+1.',
                        黑科技装甲: '黑科技装甲',
                        黑科技装甲_info: '锁定技,你造成伤害时,若你有护甲,有25%概率此伤害+1.',
                        精密零件: '精密零件',
                        精密零件_info: '锁定技,你造成属性伤害时,有25%概率此伤害+1.',
                        '伏羲·火': '伏羲·火',
                        '伏羲·火_info': '锁定技,你造成非火焰伤害后,有25%概率追加1点火焰伤害.',
                        '伏羲·雷': '伏羲·雷',
                        '伏羲·雷_info': '锁定技,你造成非雷电伤害后,有25%概率追加1点雷电伤害.',
                        '女娲·星': '女娲·星',
                        '女娲·星_info': '锁定技,你击杀角色后,有25%概率令其他角色翻面.',
                        '轩辕·盾': '轩辕·盾',
                        '轩辕·盾_info': '锁定技,你的护甲为你抵挡伤害后,你有25%概率摸1张牌并回复1点体力.',
                        '神农·草': '神农·草',
                        '神农·草_info': '锁定技,你摸牌时,你有25%概率额外摸1张牌.',
                        '神农·花': '神农·花',
                        '神农·花_info': '锁定技,你回复体力时,有25%概率额外回复1点体力.',
                        '神农·穗': '神农·穗',
                        '神农·穗_info': '锁定技,你获得牌时,有25%概率摸1张牌.',
                        幸运兔耳: '幸运兔耳',
                        幸运兔耳_info: '锁定技,你的杀有1%概率造成4倍伤害.',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:冷雨/image/${i}.png`;
                        }
                        else {
                            info.image = `ext:冷雨/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('冷雨');
                lib.config.cards.add('冷雨');
                lib.translate.冷雨_card_config = '冷雨';
                return QQQ;
            });
        },
        help: { 冷雨: "<li>2018.10.28,优化了部分武将平衡度,具体调整请自行体验_(•̀ω•́ 」∠)_.<li>2018.11.3,新增武将'山之翁';优化了部分武将技能效果;降低了ai对buff牌的价值判定.<li>2018.11.4,新增武将'恩奇都'.<li>2018.11.18,新增武将'织田信长','反转十香'.<li>2018.12.2,新增武将'高文,阿蒂拉,斯卡哈,贝狄威尔,崔斯坦,夏尔·亨利·桑松';优化了部分武将技能强度;优化了技能ai,修复了一些ai技能判定bug;因作者个人喜好,移除了武将'塞巴斯蒂安,迪米乌哥斯'.<li>2018.12.16,更新武将'狂化库丘林','吕布','宫本武藏','巴御前','伊卡洛斯';因作者个人喜好,移除武将'上条当麻'与卡牌'降智打击';再次优化调整了少部分武将平衡度(PS:下次更新会针对弱将进行一系列优化).<li>2019.1.1,新增武将'兰陵王','荆轲','阿喀琉斯','阿塔兰忒','清姬',以作者为原型的'冷雨磅礴';新增卡牌'黑科技装甲';优化增强了'雾雨魔理沙','兰斯洛特','迪卢木多','四季映姬','芙兰朵露'(PS:后续将继续对平衡度稍低的武将进行一系列优化调整);调整了'吕布'——'军神五兵·刈割'和'伊卡洛斯'——'阿波罗'的友方判定,防止误伤友军(;-_-);调整了卡牌'神农·花'和'神农·草'的发动效果;(PS:作者开始研究配音咯,预计下下下个版本将为武将制作配音╰(*´︶`*)╯).<li>2019.2.3,新增武将'茨木童子、酒吞童子、伊丽莎白·巴托里、卡米亚、赛米拉米斯、迪昂·蒙·鲍尔、诸葛孔明、望月千代女、美杜莎';博丽巫女重做——新增挑战boss'博丽灵梦、鬼巫女';重做武将'四糸乃、尼禄';对大部分武将技能做了些或多或少的修改;修复了一些bug;因作者个人喜好,移除武将'库丘林'.<li>2019.2.10,新增武将'艾蕾什基伽尔、时崎狂三';修复了'织田信长'——'第六天魔王波旬'无限连环火伤bug以及'齐格飞'——'尼伯龙根之歌'回复后卡住的bug;新增武将皮肤包(◦'∪ˉʃƪ ),群文件下载后解压到(ps:不是覆盖!不是覆盖!不是覆盖!)image——skin文件里;武将势力大更改." },
        package: {
            intro: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span><li>若想要武将皮肤,请另外下载,解压到image——skin文件里(不是覆盖!不是覆盖!不是覆盖!)<li>体验本扩展时,请禁用\'分身、八岐大蛇、冰结傀儡、狂化猪皮塔、死牙之兽、绝灭天使、鬼巫女\'这些召唤物或变身武将.<li>有些ai问题,作者也很无奈< (￣︶￣)>.<li>本扩展强度较高,建议配合其他高强度扩展或和神将食用,以免影响游戏体验(・▽・〃)<li>详情请移步"帮助"( ˘꒳˘ )<li>若有bug,请在群里"@冷雨"(你都找到这个扩展了肯定也进群了吧)(;-_-)`,
            author: '冷雨磅礴',
            version: '1.0',
        },
    };
});

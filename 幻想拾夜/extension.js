import { lib, game, ui, get, ai, _status } from '../../noname.js'
const extensionInfo = await lib.init.promises.json(`extension/幻想拾夜/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '幻想拾夜',
        content(config, pack) { },
        precontent() {
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
                        if (Object.hasOwn(obj, key)) {
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
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '幻想拾夜',
                    connect: true,
                    character: {
                        八坂神奈子: {
                            sex: 'female',
                            skills: ['遗忘之谷', '天水奇迹', '伏地的巨蛇星'],
                        },
                        封兽鵺: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['鵺的蛇行表演', '源三位赖政之弓', '轨道不明的鬼火'],
                        },
                        比那名居天子: {
                            sex: 'female',
                            skills: ['天道是非之剑', '无念无想的境界', '先忧后乐之剑', '因果之剑'],
                        },
                        灵乌路空: {
                            sex: 'female',
                            skills: ['地狱极乐熔毁', '八咫乌俯冲', '破碎日珥'],
                        },
                        星熊勇仪: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['怪力乱神', '地狱的苦轮', '坏灭之咆哮'],
                        },
                        秋穰子: {
                            sex: 'female',
                            skills: ['谷物神的允诺', '暖色的收获'],
                        },
                        伊吹萃香: {
                            sex: 'female',
                            skills: ['施饿鬼缚之术', '云集雾散', '炼狱气息', '小鬼成群'],
                        },
                        黑谷山女: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['捕捉之网', '原因不明的病疫', '瘴气场'],
                        },
                        圣白莲: {
                            sex: 'female',
                            skills: ['魔界蝶之妖香', '星之剑护法', '梵天之瞳'],
                        },
                        古明地恋: {
                            sex: 'female',
                            skills: ['地底蔷薇', '本我的解放', '带刺的玫瑰园'],
                        },
                        东风谷早苗: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['新星璀璨之夜', '空中落物的奇迹', '天空飞蛇'],
                        },
                        莉莉霍瓦特: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['惊喜之春'],
                        },
                        姬海棠果: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['天狗念写法', '足不出户的狗仔队', '取材练习'],
                        },
                        蕾蒂: {
                            sex: 'female',
                            skills: ['延长的冬日', '花之凋零', '寒流', '北极的胜利者'],
                        },
                        秋静叶: {
                            sex: 'female',
                            skills: ['落叶狂扫', '秋符', '枯道'],
                        },
                        八云蓝: {
                            sex: 'female',
                            skills: ['仙狐思念', '前鬼后鬼的守护', '迷人的四面楚歌'],
                        },
                        火焰猫燐: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['食人怨灵', '火焰的车轮', '怨灵小镇'],
                        },
                        芙兰朵露: {
                            sex: 'female',
                            skills: ['红莓陷阱', '四重存在', '无人生还', '禁忌的游戏'],
                        },
                        娜兹玲: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['稀有金属探测器', '灵摆防御', '最优良的宝物'],
                        },
                        莉格露: {
                            sex: 'female',
                            skills: ['荧光现象', '夜虫风暴', '夜虫龙卷'],
                        },
                        铃仙: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['幻象追迹者', '花冠幻象', '狂月爆破', '邪恶波动'],
                        },
                        永江衣玖: {
                            sex: 'female',
                            skills: ['雷云棘鱼', '玄云海的雷霆', '龙鱼电钻', '羽衣若空'],
                        },
                        古明地觉: {
                            sex: 'female',
                            maxHp: 5,
                            skills: ['恐怖催眠术', '恐怖的回忆', '羞于留影的蔷薇', '完美心灵控制'],
                        },
                        蓬莱山辉夜: {
                            sex: 'female',
                            skills: ['永夜的破晓黎明', '无限的生命之泉'],
                        },
                        爱丽丝: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['操纵人偶', '狡猾的献祭', '回归虚无'],
                        },
                        寅丸星: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['光辉之宝', '净化之魔', '黄金的震眩'],
                        },
                        云居一轮: {
                            sex: 'female',
                            skills: ['云界海妖来袭', '天空铁锤落', '见越入道云', '忏悔的杀风'],
                        },
                        洩矢诹访子: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['七石之木', '神谕之环', '翡翠破碎'],
                        },
                        上白泽慧音: {
                            sex: 'female',
                            skills: ['似有似无的净化', '邪马台国', '死后之旅'],
                        },
                        多多良小伞: {
                            sex: 'female',
                            skills: ['雨夜怪谈', '细雪的过客'],
                        },
                        博丽灵梦: {
                            sex: 'female',
                            skills: ['封魔阵', '八方鬼缚阵', '梦想樱花封印', '扩散灵符'],
                        },
                        八云橙: {
                            sex: 'female',
                            skills: ['飞翔晴明', '天仙鸣动', '护法天童乱舞'],
                        },
                        雾雨魔理沙: {
                            sex: 'female',
                            hp: 2,
                            maxHp: 6,
                            skills: ['超究极火花', '神秘光束', '掠日彗星', '魔法吸收器'],
                        },
                        水桥帕露西: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['丑时参拜', '妒意引爆者', '积怨返'],
                        },
                        琪斯美: {
                            sex: 'female',
                            skills: ['钓瓶落之怪', '飞入井中'],
                        },
                        蕾米莉亚: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['绯红色的恶魔', '德古拉的摇篮', '子夜之女王', '吸血鬼之夜'],
                        },
                        米斯蒂娅: {
                            sex: 'female',
                            hp: 5,
                            maxHp: 5,
                            skills: ['天蛾的蛊道', '夜雀之歌'],
                        },
                        犬走椛: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['狂犬断噬', '逐者的约定之地'],
                        },
                        键山雏: {
                            sex: 'female',
                            skills: ['损坏的护符', '厄运之轮', '诅咒的雏人偶'],
                        },
                        河城荷取: {
                            sex: 'female',
                            skills: ['水相伪装', '光子鱼雷', '离断的棱边'],
                        },
                        露米娅: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['子夜之鸟', '月的阴暗面'],
                        },
                        红美玲: {
                            sex: 'female',
                            skills: ['彩光乱舞', '崩山彩极炮', '彩光风铃', '华光玉'],
                        },
                        帕秋莉诺: {
                            sex: 'female',
                            skills: ['火神之光', '水精公主', '风灵的角笛'],
                        },
                        八云紫: {
                            sex: 'female',
                            skills: ['梦境与现实的诅咒', '生与死的境界', '拉普拉斯之魔', '潜藏于禅寺的妖蝶'],
                        },
                        射命丸文: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['暗夜昼魇', '天狗巨暴流', '乌鸦的暗影'],
                        },
                        藤原妹红: {
                            sex: 'female',
                            skills: ['不死传说', '月岩竺的诅咒', '不死鸟之羽'],
                        },
                        八意永琳: {
                            sex: 'female',
                            skills: ['神话时代的记忆', '仙香玉兔'],
                        },
                        因幡帝: {
                            sex: 'female',
                            hp: 4,
                            maxHp: 4,
                            skills: ['远古的骗术', '开运大纹'],
                        },
                        十六夜咲夜: {
                            sex: 'female',
                            skills: ['钟表的残骸', '咲夜的世界', '假想时轴', '银色的异次元'],
                        },
                        '☆蕾米莉亚': {
                            sex: 'female',
                            hp: 30,
                            maxHp: 30,
                            skills: ['德古拉的血宴', '吸血鬼王座', '绯色月下的噩梦', '子夜女王的审判', '幻想之魔', '子夜之女王'],
                            isBoss: true,
                            isBossAllowed: true,
                        },
                        '☆博丽灵梦': {
                            sex: 'female',
                            hp: 30,
                            maxHp: 30,
                            skills: ['梦想·樱花封印', '巫女的圣光', '解放之印', '梦想·阴阳结界', '幻想之魔', '扩散灵符'],
                            isBoss: true,
                            isBossAllowed: true,
                        },
                        '☆伊吹萃香': {
                            sex: 'female',
                            hp: 30,
                            maxHp: 30,
                            skills: ['百鬼夜行', '饿鬼缚祭', '饿鬼反噬', '鬼行的虚影', '幻想之魔', '小鬼成群'],
                            isBoss: true,
                            isBossAllowed: true,
                        },
                    },
                    characterIntro: {
                        八坂神奈子: '于<东方风神录>中作为六面BOSS首次登场,引发间歇泉异变的幕后黑手之一',
                        封兽鵺: '于<东方星莲船>中作为EXTRA BOSS首次登场.她也是在间歇泉骚动中从地底来到了地上.当时,她得知了<村纱等人似乎正在策划让某个人类复活>的事,为了妨碍这一计划,她在飞仓碎片中埋下了真相不明的种子.结果要寻找的东西就变成了<难以理解的真相不明之物>',
                        比那名居天子: '于<东方绯想天>首次登场',
                        灵乌路空: '于<东方地灵殿>中作为六面BOSS首次登场.古明地觉的宠物,是体内寄宿了神明八咫乌的地狱鸦,正要发挥获得的究极的力量的时候,被人类和妖怪的组合镇压',
                        星熊勇仪: '于<东方地灵殿>首次登场,山之四天王之一',
                        秋穰子: ',初登场于东方Project的第10作<东方风神录>.秋穣子具有掌管丰收程度的能力',
                        伊吹萃香: '首次登场在<东方萃梦想>.幻想乡中鬼族销声匿迹后至今,已然经过了相当漫长的岁月.不过,最近鬼族的身影终于在幻想乡中再度得到确认.这只鬼就是伊吹萃香',
                        黑谷山女: '拥有操纵疾病(主要是传染病)程度的能力,于<东方地灵殿>作为一面BOSS首次登场',
                        圣白莲: '首次登场于<东方星莲船>,作为六面BOSS.拥有使用魔法程度的能力',
                        古明地恋: '拥有操纵无意识程度的能力,于<东方地灵殿>中作为EXTRA BOSS首次登场.因为对空突然增强的力量有兴趣,前往妖怪之山的守矢神社寻找神明大人讨要,遇见打倒姐姐的人类后,向她们发起了弹幕挑战',
                        东风谷早苗: '拥有引发奇迹程度的能力,于<东方风神录>作为五面BOSS初次登场,在后续多部作品中作为自机登场.在初来幻想乡时曾经与灵梦争夺幻想乡中的信仰,被狠狠收拾了一顿,之后也在妖怪退治上作为灵梦的竞争对手',
                        莉莉霍瓦特: '拥有告知春天已经来临程度的能力,于<东方妖妖梦>中作为四面道中BOSS首次登场',
                        姬海棠果: '拥有使用念写程度的能力,于<东方文花帖DS>中作为自机角色首次登场.她虽然是新闻作者,但从未外出取材过.和其他天狗一样住在妖怪之山,独自发行着报纸<花果子念报>.在报纸发行量上与<文文.新闻>的射命丸文是竞争关系',
                        蕾蒂: '于<东方妖妖梦>中作为一面BOSS首次登场.只能在冬天见到的妖怪.喜欢寒冷的地方,能将人冻结陷入战斗不能的可怕妖怪',
                        秋静叶: '初登场于<东方风神录>',
                        八云蓝: '于<东方妖妖梦>首次登场',
                        火焰猫燐: '于<东方地灵殿>首次登场',
                        芙兰朵露: '拥有破坏一切程度的能力于<东方红魔乡>中作为EXTRA BOSS首次登场.吸血鬼且是魔法少女,红魔馆之主蕾米莉亚·斯卡蕾特的妹妹,但是红魔馆的居民不希望她跑到馆外去,因此限制了她的行动',
                        娜兹玲: '拥有能找到想找到的东西程度的能力,于<东方星莲船>中作为一面BOSS初次登场.对外的身份是星的弟子,但实际上是毗沙门天派来的高阶妖怪',
                        莉格露: '于<东方永夜抄>首次登场',
                        铃仙: '拥有操纵疯狂程度的能力,于<东方永夜抄>中作为五面BOSS首次登场,在后续多部作品中作为自机登场.她拒绝让任何永远亭的访客接近辉夜,却被主人公组合惩戒.在<永夜异变>告一段落之后,她虽然偶尔卖卖永琳的药或是前往人类村落维护民居中的药箱,她并不愿积极地与人类产生接触',
                        永江衣玖: '于<东方绯想天>首次登场.是龙宫使者,有读取环境的能力',
                        古明地觉: '于<东方地灵殿>中作为四面BOSS首次登场,同时也是漫画<东方智灵奇传 犯规侦探觉>的主角.她住在位于旧地狱中心的地灵殿,因为她的能力,就算是那些清一色讨人嫌的地底妖怪也对她惧怕不已',
                        蓬莱山辉夜: '首次登场在<东方永夜抄>.其人物原型是日本古代文学名著<竹取物语>和神话传说中的辉夜姬',
                        爱丽丝: '于<东方妖妖梦>中作为三面BOSS首次登场.她擅长用魔法操纵人偶,且能同时操控多个,居住在魔法森林,致力于魔法的研究',
                        寅丸星: '拥有收集财宝程度的能力,于<东方星莲船>中作为五面BOSS首次登场.在命莲寺中,她是地位仅次于圣白莲的高僧',
                        云居一轮: '初登场于<东方星莲船>',
                        洩矢诹访子: '于<东方风神录>中作为EXTRA BOSS首次登场.远古时管治御左口之神并创立泄矢王国,现在守矢神社被供奉着的以青蛙为象征的神明,是在妖怪之山里的八百万神明的领导者',
                        上白泽慧音: '拥有吞食历史程度的能力,于<东方永夜抄>中作为三面BOSS首次登场.人类村里的教书先生,平常是人类的姿态,但到了满月之夜则会变身成白泽的半兽,是学识渊博、最聪明的兽人',
                        多多良小伞: '拥有惊吓人类程度的能力,于<东方星莲船>中作为二面BOSS首次登场.是神灵寄宿在古代的伞上,最终变成妖怪的付丧神',
                        博丽灵梦: '幻想乡境内博丽神社的现有巫女,负责解决在幻想乡中发生的各种异变.在<东方>系列的游戏中均以主角出场,在其他作品中也作为主要角色登场.作为博丽神社的巫女,退治妖怪是她的日常工作.因为神社没什么参拜客,所以整天过着喝茶扫地的闲日子',
                        八云橙: '于<东方妖妖梦>首次登场.拥有使人惊讶的能力 (非式神), 使用妖术的能力(式神)',
                        雾雨魔理沙: '居住在魔法森林的人类魔法使.在<东方>系列的游戏中均以主角出场,在其他作品中也作为主要角色登场.作为人类使用着魔法,像是和灵梦竞争一样进行着退治妖怪活动.居住在远离人类村里的魔法森林里,经营着名为<雾雨魔法店>的万事屋',
                        水桥帕露西: '具有操纵嫉妒心程度的能力.于<东方地灵殿>中作为二面BOSS首次登场.守卫着连接地上与地底的纵向通道',
                        琪斯美: '于<东方地灵殿>首次登场',
                        蕾米莉亚: '拥有操纵命运程度的能力,于<东方红魔乡>作为六面BOSS首次登场.是幻想乡中罕见的吸血鬼.这个种族如同广为人知的那样,虽有种种强大的能力但也有许多弱点.她也不出意外,畏惧阳光.因此她引发了<红雾异变>.在此后的作品中也时有露面',
                        米斯蒂娅: '夜雀妖怪,拥有用歌声迷惑人程度的能力.于<东方永夜抄>中作为二面BOSS首次登场',
                        犬走椛: '妖怪之山的下端警戒天狗,有着看见千里之外程度的能力,于<东方风神录>作为四面道中BOSS首次登场',
                        键山雏: '拥有储存厄运程度的能力,于<东方风神录>中作为二面BOSS首次登场',
                        河城荷取: '拥有操纵水程度的能力,于<东方风神录>中作为三面BOSS首次登场',
                        露米娅: '拥有操纵黑暗程度的能力,于<东方红魔乡>中作为一面BOSS首次登场',
                        红美玲: '于<东方红魔乡>首次登场.  红美铃是住在红魔馆(×1恶魔栖息之家.后述.)的妖怪之一.由于是担任门卫,在红魔馆的妖怪里面是和人类接触率较高的',
                        帕秋莉诺: '拥有使用魔法程度的能力,于<东方红魔乡>中作为四面BOSS首次登场.是红魔馆馆主蕾米莉亚的朋友,定居于红魔馆地下图书馆的魔法使',
                        八云紫: '于<东方妖妖梦>中作为PHANTASM面BOSS首次登场.她持有与起源相关的危险能力,是幻想乡的贤者之一,和历代博丽巫女一同维护着博丽大结界.性格一言以蔽之就是非常可疑,虽然看上去与人类相貌无异,但是行动原理却完全不同,常人很难理解她在想什么',
                        射命丸文: '拥有操纵风程度的能力,于<东方文花帖 ～ Bohemian Archive in Japanese Red.>中作为主角首次登场.妖怪之山上的鸦天狗记者,主要执笔报纸<文文.新闻>.在多部作品中作为主角和重要角色登场.妖怪之山的新闻记者,隶属于天狗组织中的报道机构,平常在幻想乡各处搜集新闻或者制造新闻',
                        藤原妹红: '拥有不死程度的能力,于<东方永夜抄>中作为EXTRA BOSS首次登场.在永夜异变终结后的满月之夜,她遇到被辉夜煽动前来试胆的主人公们结果误以为是<辉夜为了暗杀她而派来了刺客>,与主人公们发生了战斗',
                        八意永琳: '于<东方永夜抄>首次登场.职业是药师.原型可能是<天八意思兼命>',
                        因幡帝: '于<东方永夜抄>作为五面道中BOSS首次登场,是地上兔的领袖.她性格狡猾喜欢恶作剧但也有胆小的一面,富有策略.她是野生兔子们的领袖,这似乎并不只是因为她是妖怪兔才做到的',
                        十六夜咲夜: '拥有操纵时间程度的能力,于<东方红魔乡>中作为五面BOSS首次登场,在后续多部作品中作为自机登场.侍奉吸血鬼蕾米莉亚·斯卡蕾特的女仆,管理红魔馆全部事务的女仆长,无论是作为女仆还是作为保镖都十分优秀',
                        '☆蕾米莉亚': '拥有操纵命运程度的能力,于<东方红魔乡>作为六面BOSS首次登场.是幻想乡中罕见的吸血鬼.这个种族如同广为人知的那样,虽有种种强大的能力但也有许多弱点.她也不出意外,畏惧阳光.因此她引发了<红雾异变>.在此后的作品中也时有露面',
                        '☆博丽灵梦': '幻想乡境内博丽神社的现有巫女,负责解决在幻想乡中发生的各种异变.在<东方>系列的游戏中均以主角出场,在其他作品中也作为主要角色登场.作为博丽神社的巫女,退治妖怪是她的日常工作.因为神社没什么参拜客,所以整天过着喝茶扫地的闲日子',
                        '☆伊吹萃香': '首次登场在<东方萃梦想>.幻想乡中鬼族销声匿迹后至今,已然经过了相当漫长的岁月.不过,最近鬼族的身影终于在幻想乡中再度得到确认.这只鬼就是伊吹萃香',
                    },
                    skill: {
                        遗忘之谷: {
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 6,
                            filter(event, player) {
                                return event.player.hp <= 0 && player.countCards('h', { color: 'black' });
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0) return false;
                                var cards = player.getCards('h', { color: 'black' });
                                if (Array.isArray(cards)) for (const i of cards) {
                                    if (i.name == 'tao') return false;
                                    if (get.value(i) > 7 && cards.length > 2) return false;
                                }
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                ('step 1');
                                var cards = player.getCards('h', { color: 'black' });
                                event.num = cards.length;
                                player.discard(cards);
                                ('step 2');
                                trigger.player.recover();
                                trigger.player.draw(event.num);
                            },
                            ai: {
                                threaten: 1.6,
                                expose: 0.2,
                            },
                        },
                        天水奇迹: {
                            inherit: 'zhiheng',
                            prompt: '弃置两张牌并摸两张牌',
                            selectCard: 2,
                            filter(event, player) {
                                return player.countCards('h') < player.hp;
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.draw(cards.length);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                            audio: 'ext:幻想拾夜/audio:2',
                            audioname: ['gz_jun_sunquan'],
                        },
                        伏地的巨蛇星: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                target.showHandcards();
                                ('step 1');
                                var cards = target.getCards('h');
                                for (let i = 1; i < cards.length; i++) {
                                    if (get.color(i) != get.color(cards[0])) return false;
                                }
                                event.goto(3);
                                ('step 2');
                                event.goto(4);
                                ('step 3');
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else {
                                    player.draw(3);
                                }
                                event.goto(5);
                                ('step 4');
                                event.player.useCard({ name: 'sha' }, target, false);
                                ('step 5');
                                event.finish();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -0.5,
                                },
                                threaten: 1.2,
                            },
                        },
                        鵺的蛇行表演: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget: true,
                            selectTarget() {
                                var player = _status.event.player;
                                return [1, Math.max(1, player.hp)];
                            },
                            position: 'h',
                            filterCard: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            multitarget: true,
                            line: 'ice',
                            async content(event, trigger, player) {
                                for (const i of event.targets) {
                                    i.changeHujia();
                                }
                                if (event.targets.length >= 2) {
                                    player.loseHp(2);
                                }
                            },//QQQ
                            ai: {
                                result: {
                                    target: 1,
                                },
                                order: 6,
                                expose: 0.3,
                                threaten: 2,
                            },
                        },
                        源三位赖政之弓: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h', { color: 'black' });
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            filterCard: {
                                color: 'black',
                            },
                            content() {
                                'step 0';
                                var list = get.inpile('trick');
                                list = list.randomGets(3);
                                for (let i = 0; i < list.length; i++) {
                                    list[i] = ['锦囊', '', list[i]];
                                }
                                var dialog = ui.create.dialog('选择一张锦囊牌加入你的手牌', [list, 'vcard'], 'hidden');
                                player.chooseButton(dialog, true).set('ai', function (button) {
                                    var card = { name: button.link[2] };
                                    var value = get.value(card);
                                    return value;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        轨道不明的鬼火: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source != player && !event.source.hasJudge('bingliang');
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                var card = game.createCard('bingliang');
                                trigger.source.addJudge(card);
                                trigger.source.$draw(card);
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        天道是非之剑: {
                            mod: {
                                cardname(card, player) {
                                    if (['delay'].includes(lib.card[card.name].type)) return 'sha';
                                },
                            },
                        },
                        无念无想的境界: {
                            trigger: {
                                player: ['useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && (player.countUsed() % 4 == 0 || event.card.number % 4 == 0);
                            },
                            content() {
                                player.draw(2);
                            },
                        },
                        先忧后乐之剑: {
                            trigger: {
                                player: ['loseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.equiping) return false;
                                if (player.countCards('e')) return false;
                                if (Array.isArray(event.cards)) for (const i of event.cards) {
                                    if (i.original == 'e') return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget([1, 1], get.prompt('先忧后乐之剑'), function (card, player, target) {
                                    if (player == target) return false;
                                    return target.countCards('he') > 0;
                                }).ai = function (target) {
                                    var att = get.attitude(player, target);
                                    if (att <= 0) {
                                        return 1 - att + (target.countCards('e') ? 2 : 0);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    player.choosePlayerCard(event.target, 'he', true).ai = function (button) {
                                        var card = button.link;
                                        if (get.position(card) == 'e') return get.equipValue(card);
                                        return 5;
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (get.position(result.buttons[0].link) == 'e') {
                                        player.equip(result.buttons[0].link);
                                    } else {
                                        player.gain(result.buttons[0].link, event.target);
                                    }
                                    event.target.$giveAuto(result.buttons[0].link, player);
                                }
                            },
                        },
                        因果之剑: {
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('因果之剑'), function (card, player, target) {
                                        return lib.filter.targetEnabled({ name: 'juedou' }, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'juedou' }, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.turnOver();
                                    player.useCard({ name: 'juedou' }, result.targets, false);
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        地狱极乐熔毁: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' });
                            },
                            filterCard: {
                                type: 'equip',
                            },
                            position: 'he',
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he');
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    game.hasPlayer(function (current) {
                                        return get.attitude(player, current) > 2;
                                    })
                                ) {
                                    return 10 - get.value(card, player);
                                }
                                return 6 - get.value(card, player);
                            },
                            async content(event, trigger, player) {
                                const result = await player.discardPlayerCard('he', event.target, true).forResult();
                                if (result?.links?.length) {
                                    const card = result.links[0];
                                    if (get.type(card) !== 'equip') {
                                        player.draw(2);
                                    }
                                }
                            },//QQQ
                            ai: {
                                order: 9,
                                result: {
                                    player(player, target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                },
                            },
                        },
                        八咫乌俯冲: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                if (!player.countCards('h')) {
                                    player.recover();
                                }
                                player.draw(2);
                            },
                        },
                        破碎日珥: {
                            trigger: {
                                global: 'phaseJudgeBefore',
                            },
                            filter(event, player) {
                                return event.player.countCards('j') > 0 && event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                player.useCard({ name: 'huogong' }, trigger.player);
                            },
                        },
                        怪力乱神: {
                            trigger: {
                                player: 'useCardToBefore',
                            },
                            _priority: 100,
                            filter(event, player, target) {
                                return event.card && event.card.name == 'sha' && event.target.getEquips(2).length && event.target.getEquips(2) && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('he');
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('unequip', 'useCardAfter');
                                }
                            },
                        },
                        地狱的苦轮: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.distance(event.target, player, 'attack') > 1;
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        坏灭之咆哮: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filterCard: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            discard: false,
                            prepare: 'give',
                            content() {
                                'step 0';
                                target.gain(cards[0], player);
                                target.addSkill('fengyin');
                                game.log(target, '受', '【' + get.translation('ls_jingyun') + '】', '的影响,非锁定技失效直到', '【' + get.translation('ls_jingyun') + '】', '结算完毕');
                                ('step 1');
                                target.chooseControl('令' + get.translation(player) + '获得你一张牌并摸一张牌', '弃置一张牌并受到一点火焰伤害').ai = function () {
                                    var cards = player.getCards('he');
                                    if (cards.length == 1) return '令' + get.translation(player) + '获得你一张牌并摸一张牌';
                                    if (player.hp <= 2) return '令' + get.translation(player) + '获得你一张牌并摸一张牌';
                                    if (cards.length > 2 && player.hp > 2) return '弃置一张牌并受到一点火焰伤害';
                                    if (cards.length > 3) return '弃置一张牌并受到一点火焰伤害';
                                    return '弃置一张牌并受到一点火焰伤害';
                                };
                                ('step 2');
                                if (result.control != '弃置一张牌并受到一点火焰伤害') {
                                    player.gainPlayerCard(target, 1, 'he', true);
                                    player.draw();
                                } else {
                                    target.chooseToDiscard(1, 'he', true);
                                    target.damage('fire');
                                }
                                ('step 3');
                                target.removeSkill('fengyin');
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('he') - (player.countCards('h', 'du') ? 1 : 0);
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        谷物神的允诺: {
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                trigger.num = 4;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        暖色的收获: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getStat('damage');
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('暖色的收获')).ai = function (target) {
                                    var att = get.attitude(player, target);
                                    if (att > 1) {
                                        if (target.hp <= 1) att += 2;
                                        if (target.hp <= 2) att++;
                                    }
                                    return att;
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    event.target.chooseDrawRecover(2);
                                }
                            },
                        },
                        施饿鬼缚之术: {
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    (player.isMinHp() || player.isMaxHp(true)) &&
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player && get.distance(player, current) <= Infinity;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && get.distance(player, current) <= Infinity;
                                    })
                                );
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return get.distance(player, arg.target) <= Infinity;
                                },
                            },
                        },
                        云集雾散: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    player != event.player &&
                                    event.player.isAlive() &&
                                    event.player.getHistory('useCard', function (evt) {
                                        if (evt.targets && evt.targets.length) {
                                            var targets = evt.targets.slice(0);
                                            while (targets.includes(event.player)) targets.remove(event.player);
                                            return targets.length;
                                        }
                                        return false;
                                    }).length &&
                                    (_status.connectMode || player.hasSha())
                                );
                            },
                            content() {
                                'step 0';
                                player.chooseToUse({
                                    preTarget: trigger.player,
                                    prompt: '是否发动【云集雾散】,对' + get.translation(trigger.player) + '使用一张【杀】？',
                                    filterCard(card, player) {
                                        return card.name == 'sha' && lib.filter.filterCard.apply(this, arguments);
                                    },
                                    filterTarget(card, player, target) {
                                        return target == _status.event.preTarget && lib.filter.targetEnabled.apply(this, arguments);
                                    },
                                    addCount: false,
                                });
                                ('step 1');
                                if (
                                    result.bool &&
                                    player.getHistory('sourceDamage', function (evt) {
                                        return evt.getParent(4) == event;
                                    }).length &&
                                    trigger.player.countDiscardableCards(player, 'he') > 0
                                )
                                    player.discardPlayerCard(trigger.player, 2, 'he').boolline = true;
                            },
                        },
                        炼狱气息: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 1 * (player.maxHp - player.hp);
                                },
                            },
                        },
                        小鬼成群: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.cards = get.cards(6);
                                player.showCards(event.cards);
                                ('step 1');
                                event.cards = event.cards.filter((q) => q.suit == 'heart');
                                if (event.cards.length == 0) {
                                    event.finish();
                                } else {
                                    player.$gain2(event.cards);
                                }
                                ('step 2');
                                player.gain(event.cards, 'log');
                            },
                            ai: {
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        捕捉之网: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                'step 0';
                                event.list = game
                                    .filterPlayer(function (current) {
                                        return current.isEnemiesOf(player) && current.countCards('he');
                                    })
                                    .randomGets(2)
                                    .sortBySeat();
                                ('step 1');
                                if (event.list.length) {
                                    var target = event.list.shift();
                                    player.line(target, 'green');
                                    if (event.list.length) {
                                        target.randomDiscard('he', false);
                                    } else {
                                        target.randomDiscard('he');
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        if (
                                            game.countPlayer(function (current) {
                                                return current.isEnemiesOf(player) && current.countCards('he');
                                            }) >= 2
                                        ) {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        原因不明的病疫: {
                            nobracket: true,
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (!event.targets.includes(player)) return false;
                                return event.card && event.card.name == 'sha' || event.card.name == 'shunshou';
                            },
                            content() {
                                player.draw(2);
                                player.chooseToDiscard('he', 1);
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        瘴气场: {
                            trigger: {
                                target: 'shaMiss',
                            },
                            _priority: 5,
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(function (card, player, target) {
                                    return player.canUse('bingliang', target);
                                }, get.prompt('瘴气场')).ai = function (target) {
                                    return get.effect(target, { name: 'bingliang' }, player, player);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.useCard({ name: 'bingliang' }, trigger.cards, result.targets).animate = false;
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'bingliang' && target.countCards('h')) return 0.7;
                                    },
                                },
                            },
                        },
                        魔界蝶之妖香: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
                                        if (player.hp == player.maxHp) return 'baonue_maxHp';
                                        if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_hp';
                                        return 'baonue_hp';
                                    })
                                    .set('prompt', '魔界蝶之妖香:回复1点体力或增加1点体力上限');
                                ('step 1');
                                if (result.control == 'baonue_hp') {
                                    player.recover();
                                } else {
                                    player.gainMaxHp(true);
                                }
                            },
                            ai: {
                                threaten: 0.5,
                                neg: true,
                            },
                        },
                        星之剑护法: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature;
                            },
                            content() {
                                player.draw(3);
                            },
                        },
                        梵天之瞳: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            filter(event, player) {
                                return get.type(event.card.viewAs || event.card.name) == 'delay' && event.player != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    prompt: get.prompt('梵天之瞳'),
                                    filterCard: { color: 'red' },
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return player.canUse({ name: 'guiyoujie' }, target);
                                    },
                                    ai1(card) {
                                        return 7 - get.value(card);
                                    },
                                    ai2(target) {
                                        return get.effect(target, { name: 'guiyoujie' }, player, player);
                                    },
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.useCard({ name: 'guiyoujie' }, result.cards, result.targets);
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        地底蔷薇: {
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            _priority: 15,
                            filter(event, player) {
                                if (!event.target) return false;
                                if (event.card.name == 'wuxie') return false;
                                if (event.player == player && event.target == player) return false;
                                if (!player.storage._gezi_mubiao) return false;
                                if (player == _status.currentPhase) return false;
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'wuxie') return;
                                        if (target == player) return;
                                        if (get.type(card) == 'trick' && target.storage._gezi_mubiao) return 'zerotarget';
                                    },
                                },
                            },
                        },
                        本我的解放: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                        },
                        带刺的玫瑰园: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                return event.target.countCards('h') > player.countCards('h');
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            content() {
                                var hs = trigger.target.getCards('h');
                                trigger.target.discard(hs.randomGets(hs.length - player.countCards('h')));
                            },
                        },
                        新星璀璨之夜: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                            trigger: {
                                player: 'useCard2',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !event.targets.includes(current) && get.distance(player, current) <= 1 && player.canUse(event.card, current) && (event.card.name == 'sha' || (get.type(event.card) == 'trick'));
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('新星璀璨之夜'), '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
                                        return !_status.event.sourcex.includes(target) && get.distance(player, target) <= 1 && player.canUse(_status.event.card, target);
                                    })
                                    .set('sourcex', trigger.targets)
                                    .set('ai', function (target) {
                                        return get.effect(target, _status.event.card, player, player);
                                    })
                                    .set('card', trigger.card);
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                trigger.targets.push(event.target);
                            },
                            ai: {
                                effect: {
                                    player(card, player, target, current, isLink) {
                                        if ((!isLink && card.name == 'sha') || (get.type(card) == 'trick' && card.isCard)) {
                                            if (player._duanbingtmp) return;
                                            player._duanbingtmp = true;
                                            if (get.effect(target, card, player, player) <= 0) {
                                                delete player._duanbingtmp;
                                                return;
                                            }
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != target && get.distance(player, current) <= 1 && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                })
                                            ) {
                                                delete player._duanbingtmp;
                                                return [1, 1];
                                            }
                                            delete player._duanbingtmp;
                                        }
                                    },
                                },
                            },
                        },
                        空中落物的奇迹: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.countCards('e') > 0;
                            },
                            content() {
                                'step 0';
                                var att = get.attitude(player, trigger.source);
                                player.choosePlayerCard('e', get.prompt('空中落物的奇迹'), trigger.source).ai = function (button) {
                                    if (att <= 0) {
                                        return get.equipValue(button.link);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.links?.length) {
                                    player.equip(result.links[0]);
                                    trigger.source.$give(result.links[0], player, false);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        天空飞蛇: {
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                return game.roundNumber <= 26;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var cards = [];
                                var num = game.roundNumber;
                                if (num > 13) {
                                    var list = [];
                                    var map = {};
                                    for (let i = 1; i <= 13; i++) {
                                        for (var j = 1; j <= 13; j++) {
                                            if (i + j == num && !map[j]) {
                                                list.push([i, j]);
                                                map[i] = true;
                                            }
                                        }
                                    }
                                    list = list.randomSort();
                                    while (list.length) {
                                        var f = list.shift();
                                        var card = get.cardPile(function (x) {
                                            return !cards.includes(x) && x.number == f[0];
                                        });
                                        if (card) {
                                            cards.add(card);
                                        } else {
                                            cards = [];
                                            continue;
                                        }
                                        var card = get.cardPile(function (x) {
                                            return !cards.includes(x) && x.number == f[1];
                                        });
                                        if (card) {
                                            cards.add(card);
                                        } else {
                                            cards = [];
                                            continue;
                                        }
                                        if (cards.length == 2) {
                                            player.gain(cards, 'gain2');
                                            event.cards = cards;
                                            break;
                                        }
                                    }
                                } else {
                                    var cards = [];
                                    var i = 2;
                                    while (i) {
                                        i--;
                                        var card = get.cardPile(function (x) {
                                            return !cards.includes(x) && x.number == num;
                                        });
                                        if (card) cards.add(card);
                                    }
                                    if (cards.length) {
                                        player.gain(cards, 'gain2');
                                        event.cards = cards;
                                    }
                                }
                                ('step 1');
                                while (event.cards.length) {
                                    var card = event.cards.shift();
                                    if (player.hasUseTarget(card) && player.getCards('h').includes(card)) player.chooseUseTarget(card, false, 'nodistance');
                                }
                            },
                        },
                        惊喜之春: {
                            trigger: {
                                global: ['damageEnd', 'loseHpEnd', 'recoverEnd', 'loseMaxHp'],
                            },
                            forced: true,
                            _priority: -1,
                            filter(event, player) {
                                return _status.currentPhase != player && event.player != player && event.num > 0 && player.countCards('h') <= player.hp * 4;
                            },
                            content() {
                                player.draw(2);
                            },
                        },
                        天狗念写法: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                var info = get.info(event.card);
                                if (info.allowMultiple == false) return false;
                                if (event.targets && !info.multitarget) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current != player && get.distance(player, current, 'attack') <= 1 && lib.filter.targetEnabled(event.card, player, current) && !event.targets.includes(current);
                                        })
                                    ) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('天狗念写法'), [1, player.countCards('h')], function (card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        if (trigger.targets.includes(target)) return false;
                                        if (get.distance(player, target, 'attack') > 1) return false;
                                        return target != player && lib.filter.targetEnabled(trigger.card, player, target);
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        return get.effect(target, trigger.card, player, player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    trigger.targets.addArray(result.targets);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1.6,
                            },
                        },
                        足不出户的狗仔队: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isMaxHandcard();
                            },
                            content() {
                                var num = 0;
                                for (const i of game.players) {
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
                        取材练习: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event.num == 0) return false;
                                return event.player && event.player.isAlive() && event.player != player && event.player.countGainableCards(player, 'he') > 0;
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                var num = event.player.maxHp - event.player.hp;
                                if (att > 0 && num > 0 && event.player.countCards('e', { name: 'baiyin' })) return true;
                                return -att;
                            },
                            content() {
                                player.gainPlayerCard([1, trigger.num], trigger.player, get.buttonValue, 'he');
                            },//QQQ
                        },
                        延长的冬日: {
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            content() {
                                target.changeHujia();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (player == target && player.countCards('h') > player.hp) return 5;
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        花之凋零: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('he') > 0;
                            },
                            filterCard(card, player) {
                                var suit = card.suit;
                                if (Array.isArray(ui.selected.cards)) for (const i of ui.selected.cards) {
                                    if (i.suit == suit) return false;
                                }
                                return true;
                            },
                            complexCard: true,
                            selectCard: [1, 4],
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                'step 0';
                                var suits = [];
                                event.suits = suits;
                                if (Array.isArray(cards)) for (const i of cards) {
                                    suits.push(i.suit);
                                }
                                var hs = target.getCards('he');
                                var hss = {
                                    club: [],
                                    diamond: [],
                                    spade: [],
                                    heart: [],
                                };
                                var choice = [];
                                for (let i = 0; i < hs.length; i++) {
                                    var suity = hs[i].suit;
                                    if (hss[suity]) {
                                        hss[suity].push(hs[i]);
                                    }
                                }
                                for (var i in hss) {
                                    if (!suits.includes(i)) {
                                        choice = choice.concat(hss[i]);
                                        delete hss[i];
                                    }
                                }
                                if (choice.length < cards.length) {
                                    choice.length = 0;
                                }
                                target.chooseToDiscard(cards.length, true, 'he').ai = function (card) {
                                    var num = choice.includes(card) ? 20 : 0;
                                    return num - get.value(card);
                                };
                                ('step 1');
                                var damage = false;
                                if (Array.isArray(result.cards)) for (const i of result.cards) {
                                    if (event.suits.includes(i.suit)) {
                                        damage = true;
                                        break;
                                    }
                                }
                                if (damage) {
                                    target.damage(2);
                                }
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, target) {
                                        var eff = get.damageEffect(target, player);
                                        var num = target.countCards('he');
                                        var length = ui.selected.cards.length;
                                        if (num == length) return -2 + eff;
                                        if (num > length) return -1.5 + eff;
                                        return -1 + eff;
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        寒流: {
                            trigger: {
                                source: 'damage',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.player.isAlive();
                            },
                            prompt: '<br><br><br><br>是否发动【寒流】废除目标武将牌上的一项技能？',
                            content() {
                                'step 0';
                                var list = [];
                                var listm = [];
                                var listv = [];
                                if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
                                else listm = lib.character[trigger.player.name][3];
                                if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
                                listm = listm.concat(listv);
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte) return false;
                                    return true;
                                };
                                for (let i = 0; i < listm.length; i++) {
                                    if (func(listm[i])) list.add(listm[i]);
                                }
                                event.skills = list;
                                player.chooseControl(list).set('prompt', '选择' + get.translation(trigger.player) + '武将牌上的一个技能并令其失效');
                                ('step 1');
                                var list = [];
                                for (let i = 1; i < 6; i++) {
                                    if ((i == 3 || i == 4) && event.horse) continue;
                                    if (trigger.player.isDisabled(i)) continue;
                                    list.push('equip' + i);
                                }
                                if (!list.length) {
                                    event.finish();
                                } else {
                                    player.line(trigger.player);
                                    trigger.player.disableEquip(list.randomGet());
                                }
                                ('step 2');
                                trigger.player.disableSkill('寒流', result.control);
                                trigger.player.addTempSkill('寒流', { player: 'phaseAfter' });
                                game.log(player, '选择了', trigger.player, '的技能', '#g【' + get.translation(result.control) + '】');
                            },
                        },
                        北极的胜利者: {
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            content() {
                                'step 0';
                                var check = player.countCards('h') > 2;
                                player
                                    .chooseTarget(get.prompt('北极的胜利者'), '跳过判定阶段并失去一点体力,视为对一名其他角色使用一张【过河拆桥】', function (card, player, target) {
                                        if (player == target) return false;
                                        return player.canUse({ name: 'guohe' }, target, false);
                                    })
                                    .set('check', check)
                                    .set('ai', function (target) {
                                        if (!_status.event.check) return 0;
                                        return get.effect(target, { name: 'sha' }, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.loseHp();
                                    player.useCard({ name: 'guohe' }, result.targets[0], false);
                                    trigger.cancel();
                                }
                            },
                        },
                        落叶狂扫: {
                            inherit: 'kamome_huanmeng',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.isUnderControl()) {
                                    game.modeSwapPlayer(player);
                                }
                                var num = 1 + player.countCards('e');
                                var cards = get.cards(num);
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
                                    for (let i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (let i = 0; i < bottom.length; i++) {
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
                                    for (let i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('pointerdiv');
                                    }
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
                                                for (let i = 0; i < event.top.length; i++) {
                                                    event._result.top.push(event.top[i].link);
                                                }
                                                for (let i = 0; i < event.bottom.length; i++) {
                                                    event._result.bottom.push(event.bottom[i].link);
                                                }
                                            } else {
                                                var i;
                                                for (let i = 0; i < event.top.length; i++) {
                                                    ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                                                }
                                                for (let i = 0; i < event.bottom.length; i++) {
                                                    ui.cardPile.appendChild(event.bottom[i].link);
                                                }
                                                for (let i = 0; i < event.dialog.buttons.length; i++) {
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
                                    for (let i = 0; i < event.dialog.buttons.length; i++) {
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
                                        for (let i = 0; i < _status.event.dialog.buttons.length; i++) {
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
                                    for (let i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (let i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    if (Array.isArray(event.cards)) for (const i of event.cards) {
                                        if (!top.includes(i) && !bottom.includes(i)) {
                                            ui.cardPile.appendChild(i);
                                        }
                                    }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                    game.updateRoundNumber();
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        秋符: {
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('秋符'), function (card, player, target) {
                                        return player.canCompare(target);
                                    })
                                    .set('ai', function (target) {
                                        if (!_status.event.goon) return 0;
                                        return -get.attitude(player, target);
                                    })
                                    .set(
                                        'goon',
                                        player.needsToDiscard() ||
                                        player.hasCard(function (card) {
                                            var val = get.value(card);
                                            if (val < 0) return true;
                                            if (val <= 5) {
                                                return card.number >= 11;
                                            }
                                            if (val <= 6) {
                                                return card.number >= 12;
                                            }
                                            return false;
                                        })
                                    );
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    player.chooseToCompare(event.target);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.chooseUseTarget({ name: 'wugu' }, 2);
                                } else {
                                    event.target.useCard({ name: 'juedou' }, player);
                                }
                            },
                        },
                        枯道: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return player !== target;
                            },
                            content() {
                                'step 0';
                                target.draw();
                                ('step 1');
                                if (target.countCards('he')) {
                                    target.chooseToDiscard('he', true).set('ai', function (card) {
                                        var val = 8 - get.value(card);
                                        if (card.suit === 'spade') val += 10;
                                        return val;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    if (result.cards[0].suit === 'spade') {
                                        game.asyncDraw([player, target].sort(lib.sort.seat));
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: 0.5,
                                    player: 1,
                                },
                            },
                        },
                        仙狐思念: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') >= 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target).set('preserve', 'win');
                                ('step 1');
                                if (result.bool && result.target) {
                                    event.type = true;
                                    event.card = result.target;
                                    target.damage(2, 'fire', true);
                                } else {
                                    event.type = false;
                                    if (player.countCards('h') >= 0) {
                                        player.gainMaxHp(2);
                                    }
                                }
                            },
                        },
                        前鬼后鬼的守护: {
                            trigger: {
                                player: 'discardBefore',
                            },
                            filter(event, player) {
                                let num2 = 0;
                                for (const i of game.players) {
                                    if (player == i) continue;
                                    if (i.countCards('h') >= player.countCards('h')) num2++;
                                }//QQQ
                                return num2 >= game.players.length * 0.5;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = trigger.cards.length;
                                var pos1 = '',
                                    pos2 = '',
                                    pos3 = '';
                                for (let i = 0; i < num; i++) {
                                    if (get.position(i) == 'h') pos1 = 'h';
                                    if (get.position(i) == 'e') pos1 = 'e';
                                    if (get.position(i) == 'j') pos1 = 'j';
                                }
                                var pos = pos1 + pos2 + pos3;
                                player.chooseCard(get.prompt2('前鬼后鬼的守护'), num, pos).ai = function (card) {
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    var cards = result.cards;
                                    if (cards.length) {
                                        player.lose(cards, ui.discardPile);
                                        player.$throw(cards, 1000);
                                        game.log(player, '将', cards, '置入了弃牌堆');
                                        event.draw = { bool: true, num: cards.length };
                                    } else {
                                        event.draw = { bool: false };
                                    }
                                } else event.finish();
                                ('step 2');
                                if (event.draw && event.draw.bool) {
                                    player.draw(event.draw.num);
                                }
                                ('step 3');
                                trigger.cancel();
                            },
                        },
                        迷人的四面楚歌: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.source.chooseToDiscard('e', true, 2);
                            },
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                            },
                        },
                        食人怨灵: {
                            trigger: {
                                global: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    _status.currentPhase == event.player &&
                                    game.countPlayer(function (current) {
                                        return get.distance(player, current, 'attack') <= 1 && !event.targets.includes(current);
                                    }) > 0 &&
                                    player.countCards('h') > 0
                                );
                            },
                            content() {
                                'step 0';
                                player.chooseCard(1, 'h', get.prompt('食人怨灵')).set('ai', function (card) {
                                    if (
                                        game.countPlayer(function (current) {
                                            return get.attitude(trigger.player, current) < 0 && get.distance(player, current, 'attack') <= 1 && !trigger.targets.includes(current);
                                        }) > 0 &&
                                        player.countCards('h') > 1 &&
                                        get.attitude(player, trigger.player) > 0
                                    )
                                        return 6 - get.value(card);
                                    return -1;
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.discard(result.cards[0]);
                                    if (player != trigger.player) player.line(trigger.player);
                                    trigger.player.chooseTarget('请选择【杀】的额外目标', function (card, player, target) {
                                        return !trigger.targets.includes(target) && get.distance(player, target, 'attack') <= 1;
                                    }).ai = function (target) {
                                        return -get.attitude(trigger.player, target);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    trigger.player.line(result.targets[0], trigger.nature);
                                    trigger.targets.push(result.targets[0]);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                expose: 0.9,
                            },
                        },
                        火焰的车轮: {
                            round: 1,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return event.player.getStat('damage') && event.player != player;
                            },
                            check(event, player) {
                                return get.damageEffect(event.player, player, player, 'fire') > 2;
                            },
                            logTarget: 'player',
                            line: 'fire',
                            ai: {
                                expose: 0.2,
                                threaten: 1.3,
                            },
                            content() {
                                trigger.player.damage('fire');
                            },
                            group: ['火焰的车轮_roundcount'],
                        },
                        怨灵小镇: {
                            trigger: {
                                player: 'recoverAfter',
                            },
                            forced: true,
                            content() {
                                player.draw(3);
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        红莓陷阱: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            prompt(event, player) {
                                return '是否对' + get.translation(event.player) + '发动【红莓陷阱】？';
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            check(event, player) {
                                if (player.hp + player.countCards('h', 'tao') + player.countCards('h', 'jiu') < 3) return false;
                                return get.attitude(player, event.player) > 4;
                            },
                            content() {
                                player.loseHp();
                                player.draw(2);
                                trigger.player.draw(2);
                                if (trigger.source && trigger.source.isAlive() && trigger.source.countCards('he')) player.discardPlayerCard(trigger.source, 'he', 4);
                            },
                        },
                        四重存在: {
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || event.card.name == 'sha' || event.card.name == 'nanman' || event.card.name == 'wanjian' || event.card.name == 'huogong')) return false;
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha') return [1, 1];
                                    },
                                },
                            },
                        },
                        无人生还: {
                            srlose: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check1 = false;
                                var check2 = false;
                                for (const i of game.players)
                                    if (i != player) {
                                        if (i.countCards('e') && get.attitude(player, i) < 0) check1 = true;
                                        if (i.countCards('j') && get.attitude(player, i) > 0) check2 = true;
                                    }
                                player.chooseToDiscard('是否发动【无人生还】？').ai = function (card) {
                                    if (check1) {
                                        if (player.countCards('h') >= player.hp) return 8 - get.value(card);
                                        return 4 - get.value(card);
                                    }
                                    if (check2) return true;
                                    return false;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.judge(function (card) {
                                        if (get.color(card) == 'red') return 1.5;
                                        return 1;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.color) {
                                    if (result.color == 'red') {
                                        var check;
                                        for (const i of game.players) {
                                            if (get.attitude(player, i) > 0 && i.countCards('j')) {
                                                check = true;
                                                break;
                                            }
                                        }
                                        player.chooseTarget('请选择目标', 2, function (card, player, target) {
                                            if (ui.selected.targets.length) {
                                                var from = ui.selected.targets[0];
                                                var judges = from.getCards('j');
                                                for (let i = 0; i < judges.length; i++) {
                                                    if (!target.hasJudge(judges[i].viewAs || judges[i].name)) return true;
                                                }
                                                if (target.isMin()) return false;
                                                if ((from.getEquips(1) && !target.getEquips(1)) || (from.getEquips(2) && !target.getEquips(2)) || (from.getEquips(3) && !target.getEquips(3)) || (from.getEquips(4) && !target.getEquips(4)) || (from.getEquips(5) && !target.getEquips(5))) return true;
                                                return false;
                                            } else {
                                                return target.countCards('ej') > 0;
                                            }
                                        }).ai = function (target) {
                                            if (check) return 0;
                                            if (ui.selected.targets.length == 0) {
                                                if (target.countCards('j') && get.attitude(player, target) > 0) return 10;
                                                if (get.attitude(player, target) < 0) {
                                                    for (const i of game.players) {
                                                        if (get.attitude(player, i) > 0) {
                                                            if ((target.getEquips(1) && !i.getEquips(1)) || (target.getEquips(2) && !i.getEquips(2)) || (target.getEquips(3) && !i.getEquips(3)) || (target.getEquips(4) && !i.getEquips(4)) || (target.getEquips(5) && !i.getEquips(5))) return -get.attitude(player, target);
                                                        }
                                                    }
                                                }
                                                return 0;
                                            }
                                            return -get.attitude(player, target) * get.attitude(player, ui.selected.targets[0]);
                                        };
                                    } else {
                                        player.chooseTarget('选择一名目标对其造成一点伤害,其摸一张牌').ai = function (target) {
                                            return get.damageEffect(target, player, player);
                                        };
                                    }
                                }
                                ('step 3');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                player.line2(result.targets);
                                event.targets = result.targets;
                                ('step 4');
                                if (targets.length == 2) {
                                    player
                                        .choosePlayerCard(
                                            'ej',
                                            function (button) {
                                                var targets0 = _status.event.targets0;
                                                var targets1 = _status.event.targets1;
                                                if (get.attitude(player, targets0) > get.attitude(player, targets1)) {
                                                    return get.position(button.link) == 'j' ? 10 : 0;
                                                } else {
                                                    if (get.position(button.link) == 'j') return -10;
                                                    return ai.get.equipValue(button.link);
                                                }
                                            },
                                            targets[0]
                                        )
                                        .set('targets0', targets[0])
                                        .set('targets1', targets[1])
                                        .set('filterButton', function (button) {
                                            var targets1 = _status.event.targets1;
                                            if (get.position(button.link) == 'j') {
                                                return !targets1.hasJudge(button.link.viewAs || button.link.name);
                                            } else {
                                                return !targets1.countCards('e', { subtype: get.subtype(button.link) });
                                            }
                                        });
                                } else {
                                    targets[0].damage(player);
                                    targets[0].draw();
                                    event.finish();
                                }
                                ('step 5');
                                if (result.links?.length) {
                                    var link = result.links[0];
                                    if (get.position(link) == 'e') {
                                        event.targets[1].equip(link);
                                    } else if (result.buttons[0].link.viewAs) {
                                        event.targets[1].addJudge({ name: link.viewAs }, [link]);
                                    } else {
                                        event.targets[1].addJudge(link);
                                    }
                                    event.targets[0].$give(link, event.targets[1]);
                                }
                            },
                        },
                        禁忌的游戏: {
                            srlose: true,
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 6,
                            filter(event, player) {
                                return event.player.hp <= 0 && event.player.countCards('h') > 0;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var cards = event.player.getCards('h');
                                var save = false;
                                if (Array.isArray(cards)) for (const i of cards) {
                                    if (get.tag(i, 'save')) {
                                        save = true;
                                    }
                                }
                                if (get.attitude(player, event.player) < 0) {
                                    if (cards.length > 1 && save) return 1;
                                    if (!save) {
                                        return -10;
                                    }
                                }
                                if (get.attitude(player, event.player) > 0) {
                                    if (save) return 0;
                                    if (!save) {
                                        if (event.player.hasSkill('jiushi') && !event.player.isTurnedOver()) return 0;
                                        if (player.countCards('h', 'tao') && event.player.countCards('h') >= 2) return 0;
                                        if (sgs.needKongcheng(event.player)) return 2;
                                        return 1;
                                    }
                                }
                                return 0;
                            },
                            content() {
                                'step 0';
                                var cards = trigger.player.getCards('h');
                                event.bool = cards.length >= 2;
                                trigger.player.discard(cards);
                                trigger.player.recover(2);
                                ('step 1');
                                if (event.bool) {
                                    trigger.player.draw(1);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        稀有金属探测器: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards)) for (const i of event.cards) {
                                    if (i.original == 'e') return true;
                                }
                                return false;
                            },
                            content() {
                                // player.tempHide();
                                player.gain(game.createCard('shunshou'), 'gain2');
                            },
                        },
                        灵摆防御: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return !player.isTurnedOver() && player.isDamaged();
                            },
                            check(event, player) {
                                return player.hp <= 1;
                            },
                            content() {
                                'step 0';
                                player.turnOver();
                                ('step 1');
                                player.recover(2);
                            },
                        },
                        最优良的宝物: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countUsed(null, true) >= player.hp;
                            },
                            content() {
                                player.draw(player.countUsed(null, true));
                            },
                        },
                        荧光现象: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                player.discardPlayerCard(true, trigger.target, 'he');
                                var list = get.inpile('trick', 'trick');
                                var list2 = [];
                                for (let i = 0; i < 2; i++) {
                                    list2.push(game.createCard(list.randomGet()));
                                }
                                player.gain(list2, 'draw');
                            },
                        },
                        夜虫风暴: {
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.cards) {
                                    if (Array.isArray(event.cards)) for (const i of event.cards) {
                                        if (get.type(i, 'trick') == 'trick') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                player.changeHujia(2);
                            },
                        },
                        夜虫龙卷: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.countCards('h') >= player.countCards('h') && (event.card.name == 'tao' || ((get.type(event.card) == 'trick' || get.type(event.card) == 'delay') && get.color(event.card) == 'red'));
                            },
                            content() {
                                trigger.parent.excluded.add(player);
                            },
                        },
                        幻象追迹者: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h', { color: 'red', name: 'sha' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('h', '是否弃置一张红色杀令此伤害-1？', function (card, player) {
                                    return card.name == 'sha' && get.color(card) == 'red';
                                });
                                next.ai = function (card) {
                                    if (player.hp == 1 || trigger.num > 1) {
                                        return 9 - get.value(card);
                                    }
                                    if (player.hp == 2) {
                                        return 8 - get.value(card);
                                    }
                                    return 7 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.num--;
                                }
                            },
                        },
                        花冠幻象: {
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shunshou' && player.canCompare(event.target);
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.target).clear = false;
                                ('step 1');
                                if (result.bool) {
                                    if (trigger.target.countGainableCards(player, 'he')) player.gainPlayerCard(trigger.target, true, 'he');
                                    ui.clear();
                                } else {
                                    var card1 = result.player;
                                    var card2 = result.target;
                                    if (get.position(card1) == 'd') trigger.target.gain(card1, 'gain2');
                                    if (get.position(card2) == 'd') player.gain(card2, 'gain2');
                                }
                            },
                        },
                        狂月爆破: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (player.isLinked()) return false;
                                return lib.filter.filterCard({ name: 'du' }, event.player, event);
                            },
                            check(event, player) {
                                // if(event.player!=player) return false;
                                if (get.attitude(player, event.player) <= 0) return false;
                                if (player.hp < 3) return false;
                                if (!event.player.hasSha()) return false;
                                return game.hasPlayer(function (current) {
                                    return get.effect(current, { name: 'sha' }, event.player, event.player) > 0 && event.player.canUse('sha', current);
                                });
                            },
                            content() {
                                player.loseHp();
                                player.link();
                                trigger.player.useCard({ name: 'juedou' }, trigger.player);
                            },
                        },
                        邪恶波动: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            filter(summer, umi) {
                                return summer.player != umi && umi.countCards('h') < umi.hp;
                            },
                            line: {
                                color: [251, 193, 217],
                            },
                            logTarget: 'player',
                            charlotte: true,
                            content() {
                                'step 0';
                                player.loseHp(2);
                                ('step 1');
                                player.draw(5);
                                player.phase('nodelay');
                                player.storage.umi_shiroha = trigger.player;
                                player.addTempSkill('umi_shiroha');
                            },
                        },
                        雷云棘鱼: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'guohe') return false;
                                },
                            },
                        },
                        玄云海的雷霆: {
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                return get.color(card) == 'black' || card.suit == 'heart';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'shandian',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' } || { suit: 'heart' })) return false;
                            },
                            prompt: '将一张黑色牌或♥️️牌当闪电打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('he', { color: 'black' })) return false;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                    },
                                },
                                order: 3,
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                    order: 9,
                                },
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (target.hasSkillTag('nothunder')) return 0;
                                        if (target.hasUnknown(2)) return 0;
                                        var nh = target.countCards('h');
                                        if (lib.config.mode == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    natureDamage: 1,
                                    thunderDamage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                    norepeat: 1,
                                },
                            },
                        },
                        龙鱼电钻: {
                            mod: {
                                attackFrom(from, to, distance, player) {
                                    return distance - 1;
                                },
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            _priority: 15,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.addTempSkill('龙鱼电钻_target');
                                    }
                                });
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg) return true;
                                    return false;
                                },
                            },
                            subSkill: {
                                target: {
                                    ai: {
                                        unequip2: true,
                                    },
                                    charlotte: true,
                                },
                            },
                        },
                        羽衣若空: {
                            trigger: {
                                global: 'phaseDrawEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = ['展示所有手牌', '交给其一张牌'];
                                trigger.player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt2('羽衣若空'))
                                    .set('ai', function () {
                                        return [0, 1].randomGet();
                                    });
                                ('step 1');
                                switch (result.control) {
                                    case '展示所有手牌':
                                        trigger.player.showHandcards();
                                        break;
                                    case '交给其一张牌':
                                        trigger.player.chooseCard(1, 'he', '将一张牌交给' + get.translation(player), true);
                                        break;
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    trigger.player.$giveAuto(result.cards, player);
                                    player.gain(result.cards, trigger.player);
                                }
                            },
                        },
                        恐怖催眠术: {
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!(event.card.name == 'sha')) return false;
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            content() {
                                player.chooseToUse({ name: 'sha' }, trigger.player, '恐怖催眠术:是否对其使用一张杀？');
                            },
                        },
                        恐怖的回忆: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            _priority: 16,
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (event.player.hp > 0) return att <= 0;
                                return att > 0;
                            },
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                trigger.cancel();
                                var ex = 0;
                                if (trigger.card && trigger.card.name == 'sha') {
                                    if (player.hasSkill('jiu')) ex++;
                                    if (player.hasSkill('luoyi2')) ex++;
                                    if (player.hasSkill('reluoyi2')) ex++;
                                }
                                trigger.player.loseMaxHp(trigger.num + ex);
                                player.loseMaxHp(true);
                                player.recover(2);
                            },
                            ai: {
                                jueqing: true,
                            },
                        },
                        羞于留影的蔷薇: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var card = get.discardPile(function (card) {
                                    return card.name == 'guohe';
                                });
                                if (card) player.gain(card, 'gain2');
                                ('step 1');
                                game.updateRoundNumber();
                                var next = player.phaseUse();
                                event.next.remove(next);
                                trigger.next.push(next);
                            },
                        },
                        完美心灵控制: {
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return (
                                    player.countCards('h') > 1 &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current.countGainableCards(player, 'e') > 0;
                                    })
                                );
                            },
                            filterCard: true,
                            selectCard: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countGainableCards(player, 'e') > 0;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'h',
                            content() {
                                player.awakenSkill('完美心灵控制');
                                var cards = target.getGainableCards(player, 'e');
                                player.gain(cards, target, 'give', 'bySelf');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        var num = 0,
                                            es = target.getCards('e'),
                                            val = 0;
                                        for (const i of es) {
                                            num += get.value(i, target);
                                        }
                                        for (const i of ui.selected.cards) {
                                            val += get.value(i, player);
                                        }
                                        if (Math.abs(num) > val) return -num;
                                        return 0;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        永夜的破晓黎明: {
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                if (player.hp < 1) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('永夜的破晓黎明'), [1, Math.min(3, player.hp)], function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.showHandcards(get.translation(player) + '发动了【永夜的破晓黎明】');
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets?.length) {
                                    player.line(targets, 'green');
                                    for (let i = 0; i < targets.length; i++) {
                                        targets[i].draw(3);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.1,
                                threaten: 2.1,
                            },
                        },
                        无限的生命之泉: {
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            content() {
                                event.cards = get.cards(player.hp);
                                player.showCards(event.cards);
                                event.targets = [];
                                for (const i of game.players) {
                                    if (i != player && !i.isOut() && lib.filter.targetEnabled({ name: 'taoyuan' }, player, i)) {
                                        event.targets.push(i);
                                    }
                                }
                                var colors = [];
                                if (Array.isArray(event.cards)) for (const i of event.cards) {
                                    colors.add(get.color(i));
                                }
                                if (colors.length == 1) {
                                    player.useCard({ name: 'taoyuan' }, event.targets);
                                } else {
                                    player.loseHp();
                                }
                                player.gain(event.cards, 'gain2');
                                trigger.finish();
                                trigger.untrigger();
                            },
                        },
                        操纵人偶: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.color(card) == 'red' && player != target && get.distance(target, player, 'attack') <= 1) return false;
                                },
                            },
                        },
                        狡猾的献祭: {
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            filter(event, player) {
                                if (get.color(event.card) != 'red') return false;
                                if (!event.player) return false;
                                if (event.player == player) return false;
                                return player.countCards('h', 'shan') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('狡猾的献祭:是否弃置一张闪并摸两张牌,增加1点体力上限？', { name: 'shan' });
                                next.set('ai', function (card) {
                                    return 9 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.draw(2);
                                    player.gainMaxHp();
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.color(card) == 'black' && target.countCards('h') > 0) {
                                            return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        回归虚无: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: {
                                color: 'red',
                            },
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                var targets = player.getEnemies();
                                if (targets.length) {
                                    var target = targets.randomGet();
                                    target.addExpose(0.2);
                                    player.useCard({ name: 'sha' }, target, false);
                                }
                            },
                            ai: {
                                order: 2.9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        光辉之宝: {
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    player != event.player &&
                                    player != _status.currentPhase &&
                                    event.cards &&
                                    event.cards.filter(function (card) {
                                        return get.position(card, true) == 'd' && get.type(card, false) == 'equip';
                                    }).length
                                );
                            },
                            content() {
                                'step 0';
                                var cards = trigger.cards.filter(function (card) {
                                    return get.position(card, true) == 'd' && get.type(card, false) == 'equip';
                                });
                                player.chooseButton([get.prompt('光辉之宝'), cards], [1, cards.length]).set('ai', function () {
                                    return 1;
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    player.gain(result.links, 'gain2', 'log');
                                }
                            },
                        },
                        净化之魔: {
                            trigger: {
                                global: 'useCardToBegin',
                            },
                            filter(event, player) {
                                //event.player使用牌的玩家 player拥有技能的玩家
                                if (event.name == 'juedou' && event.player != player && event.cards.filterInD().length) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.player.countCards('h') > 0) {
                                    player
                                        .chooseControl('交牌', '摸牌')
                                        .set('ai', function () {
                                            var att = get.attitude(trigger.player, player);
                                            if (att <= 0) {
                                                return 0;
                                            }
                                            return 1;
                                        })
                                        .set('prompt', '每当其他有角色使用决斗时,你选择1项:1,该角色交给你一张牌.2,你摸两张牌');
                                }
                                ('step 1');
                                if (result.control == '交牌') {
                                    trigger.player.chooseCard('he', '将一张牌交给' + get.translation(player), true);
                                } else {
                                    player.draw(2);
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    player.line(trigger.player);
                                    player.gain(result.cards, 'gain2', 'log');
                                    // player.gain(result.cards,trigger.player);
                                    // game.log(get.translation(player),"从",get.translation(trigger.player),"获得了",result.cards);
                                }
                            },
                        },
                        黄金的震眩: {
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                if (ui.selected.cards.length) {
                                    return get.color(card) == get.color(ui.selected.cards[0]);
                                }
                                return true;
                            },
                            complexCard: true,
                            usable: 1,
                            selectCard: 2,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            content() {
                                if (target.maxHp > target.hp) {
                                    target.draw(target.maxHp - target.hp);
                                }
                            },
                            ai: {
                                order: 2,
                                result: {
                                    target(player, target) {
                                        var num = target.maxHp - target.hp;
                                        if (num > 2) return num;
                                        return 0;
                                    },
                                },
                            },
                        },
                        云界海妖来袭: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') == event.player.countCards('h') && event.notLink();
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        天空铁锤落: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('防止伤害', '增加伤害')
                                    .set('prompt', '天空铁锤落:防止即将对' + get.translation(trigger.player) + '造成的伤害,或失去1点体力上限并令此伤害+1')
                                    .set('choice', get.attitude(player, trigger.player) >= 0 ? 0 : 1)
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    });
                                ('step 1');
                                if (result.control == '增加伤害') {
                                    player.loseMaxHp();
                                    trigger.num += 1;
                                } else trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (target && get.attitude(player, target) > 0 && get.tag(card, 'damage')) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        见越入道云: {
                            mod: {
                                targetEnabled(card) {
                                    if (card.name == 'huogong' || card.name == 'lebu') return false;
                                },
                            },
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            forced: true,
                            content() {
                                trigger.setContent(lib.skill.ryoichi_tuipi.phaseDiscardContent);
                            },
                            phaseDiscardContent() {
                                'step 0';
                                var num = 0;
                                var hs = player.getCards('he');
                                num += hs.length;
                                for (let i = 0; i < hs.length; i++) {
                                    if (game.checkMod(hs[i], player, false, 'ignoredHandcard', player) == true) {
                                        num--;
                                    }
                                }
                                num = Math.max(0, num - player.getHandcardLimit());
                                event.num = num;
                                if (event.num <= 0) event.finish();
                                else {
                                    if (lib.config.show_phase_prompt) {
                                        player.popup('弃牌阶段');
                                    }
                                }
                                event.trigger('phaseDiscard');
                                ('step 1');
                                player.chooseToDiscard(num, true, 'he');
                                ('step 2');
                                event.cards = result.cards;
                            },
                        },
                        忏悔的杀风: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'equip') == 'equip';
                                    }),
                                    'gain2'
                                );
                            },
                        },
                        七石之木: {
                            trigger: {
                                global: ['dieBegin', 'turnOverAfter'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'turnOverAfter') return event.player.isTurnedOver();
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('he');
                                });
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                event.targets = game.filterPlayer(function (current) {
                                    return current != player && current.countCards('he');
                                });
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                if (num < event.targets.length) {
                                    player.line(event.targets[num], 'green');
                                    event.targets[num].chooseToDiscard('he', true);
                                    event.num++;
                                    event.redo();
                                }
                            },//QQQ
                            ai: {
                                threaten: 2.5,
                            },
                        },
                        神谕之环: {
                            nobracket: true,
                            trigger: {
                                global: 'judgeEnd',
                            },
                            filter(event, player) {
                                if (event.result.card.suit != 'spade') return false;
                                if (get.owner(event.result.card)) {
                                    return false;
                                }
                                if (event.nogain && event.nogain(event.result.card)) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                player.gain(trigger.result.card);
                                player.$gain(trigger.result.card);
                            },
                        },
                        翡翠破碎: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('h', get.prompt('翡翠破碎'), '弃置任意张手牌,若如此做,将手牌摸至三张', [1, player.countCards('h')]).set('ai', function (card) {
                                    var num = 4 - player.countCards('h');
                                    var val = 6.1 + Math.max(0, num);
                                    var cs = player.countCards('h', function (card) {
                                        return get.value(card) >= val;
                                    });
                                    if (cs >= 4) return 0;
                                    return val - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) player.drawTo(3);
                            },
                        },
                        似有似无的净化: {
                            trigger: {
                                player: 'discardEnd',
                            },
                            filter(event, player) {
                                var num = 0;
                                if (event.cards) {
                                    if (Array.isArray(event.cards)) for (const i of event.cards) {
                                        num += i.number;
                                    }
                                }
                                return num >= 5;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('似有似无的净化'), function (card, player, target) {
                                    if (player == target) return false;
                                    return target.countCards('he') > 0;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.discardPlayerCard(result.targets[0], 'he', 2);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        邪马台国: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseUseTarget('###是否发动【邪马台国】？###视为使用一张【釜底抽薪】', { name: 'fudichouxin' });
                                ('step 1');
                                if (result.bool) {
                                    player.turnOver();
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        死后之旅: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            mark: true,
                            filter(event, player) {
                                if (player.storage) return false;
                                return event.source != undefined;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) < 0;
                            },
                            logTarget: 'source',
                            async content(event, trigger, player) {
                                trigger.source.out(4);
                                player.awakenSkill('死后之旅');
                            },
                            ai: {
                                expose: 0.2,
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        return 0.8;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        雨夜怪谈: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: -1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            discard: false,
                            prepare: 'give2',
                            ai: {
                                order: 1,
                                result: {
                                    player: 0,
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (player.countCards('h') > 1) {
                                            return 1;
                                        }
                                        const playerx = game.players.find((i) => i.countCards('h') && i != target && i != player && get.attitude(player, i) < 0);
                                        if (!playerx) {
                                            return 1;
                                        }
                                        return -2 / (target.countCards('h') + 1);
                                    },
                                },
                            },
                            content() {
                                'step 0';
                                event.target1 = targets[0];
                                targets[0].gain(cards, player);
                                const playerx = game.players.find((i) => i.countCards('h') && i != event.target1 && i != player);
                                if (!playerx) {
                                    event.finish();
                                }
                                ('step 1');
                                player
                                    .chooseTarget(true, '选择拼点目标', function (card, player, target) {
                                        return _status.event.target1.canCompare(target) && target != player;
                                    })
                                    .set('ai', function (target) {
                                        var eff = get.effect(target, { name: 'nanman' }, _status.event.target1, player);
                                        var att = get.attitude(player, target);
                                        if (att > 0) {
                                            return eff - 10;
                                        }
                                        return eff;
                                    })
                                    .set('target1', event.target1);
                                ('step 2');
                                if (result.targets?.length) {
                                    event.target2 = result.targets[0];
                                    event.target1.line(event.target2);
                                    event.target1.chooseToCompare(event.target2);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (!result.tie) {
                                    if (result.bool && event.target1.canUse({ name: 'nanman' }, event.target2, false)) {
                                        event.target1.useCard({ name: 'nanman' }, event.target2);
                                    } else if (event.target2.canUse({ name: 'nanman' }, event.target1, false)) {
                                        event.target2.useCard({ name: 'nanman' }, event.target1);
                                    }
                                    if (result.bool && event.player.canUse({ name: 'zhaomingdan' }, event.target1, false)) {
                                        event.player.useCard({ name: 'zhaomingdan' }, event.target2);
                                    } else if (event.player.canUse({ name: 'zhaomingdan' }, event.target1, false)) {
                                        event.player.useCard({ name: 'zhaomingdan' }, event.target2);
                                    }
                                }
                            },
                        },
                        细雪的过客: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.inRange(target);
                            },
                            selectCard: 2,
                            position: 'he',
                            check(card) {
                                return 5 - get.value(card);
                            },
                            complexCard: true,
                            filterCard(card, player) {
                                if (!ui.selected.cards.length) return player.countCards('he', { suit: card.suit }) > 2;
                                return card.suit == ui.selected.cards[0].suit;
                            },
                            content() {
                                target.turnOver();
                                player.addTempSkill('细雪的过客');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.isTurnedOver()) return 2;
                                        return -1;
                                    },
                                },
                            },
                        },
                        封魔阵: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                game.swapSeat(player, target);
                                ('step 1');
                                target.judge(function (card) {
                                    return get.color(card) == 'black' ? 1.5 : -0.5;
                                });
                                ('step 2');
                                if (result.judge > 0) {
                                    target.damage(2);
                                } else {
                                    player.gainPlayerCard(target, 'he', 1);
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -0.5,
                                },
                                threaten: 1.2,
                            },
                        },
                        八方鬼缚阵: {
                            trigger: {
                                target: 'shaBefore',
                            },
                            forced: true,
                            _priority: 11,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                            },
                            content() {
                                player.chooseToUse({ name: 'sha' }, '八方鬼缚阵:是否使用一张杀？');
                            },
                        },
                        梦想樱花封印: {
                            enable: 'phaseUse',
                            usable: 1,
                            complexCard: true,
                            multitarget: true,
                            multiline: true,
                            position: 'he',
                            selectCard: [1, Infinity],
                            filterCard(card, player) {
                                if (ui.selected.cards.length) {
                                    return card.suit == ui.selected.cards[0].suit;
                                }
                                var cards = player.getCards('he');
                                if (Array.isArray(cards)) for (const i of cards) {
                                    if (card != i) {
                                        if (card.suit == i.suit) return true;
                                    }
                                }
                                return true;
                            },
                            selectTarget(card) {
                                if (ui.selected.targets.length > ui.selected.cards.length) {
                                    game.uncheck('target');
                                }
                                return [1, ui.selected.cards.length];
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            filter(event, player) {
                                if (!player.storage.XSlixin) {
                                    if (player.getStat().skill.XSbianfa > 0) return false;
                                } else {
                                    if (player.getStat().skill.XSbianfa > 1) return false;
                                }
                                return player.countCards('he');
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            prepare(cards, player, targets) {
                                player.line(targets);
                            },
                            content() {
                                'step 0';
                                player.draw(cards.length);
                                game.log(player, '发动了梦想樱花封印');
                                event.targets = targets.slice(0);
                                player.storage.XSbianfa = cards[0];
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    var num = target.countCards('he', { suit: player.storage.XSbianfa.suit });
                                    target.discard(target.getCards('he', { suit: player.storage.XSbianfa.suit }));
                                    target.draw(num);
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 8,
                                expose: 0.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                },
                            },
                        },
                        扩散灵符: {
                            trigger: {
                                player: ['useCard', 'respondEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.suit == 'diamond';
                            },
                            content() {
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else {
                                    player.draw();
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.5,
                            },
                        },
                        飞翔晴明: {
                            mod: {
                                cardname(card, player, name) {
                                    if (card.name == 'tao' && player.hp == 2) return 'liuxinghuoyu';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'tao')) return false;
                                    if (player.hp != 2) return false;
                                },
                                respondSha: true,
                            },
                            trigger: {
                                player: ['useCard1', 'respond'],
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'liuxinghuoyu' && !event.skill && event.cards.length == 1 && event.cards[0].name == 'tao';
                            },
                            content() { },
                        },
                        天仙鸣动: {
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            selectTarget: -1,
                            reverseOrder: true,
                            filterTarget(card, player, target) {
                                return get.distance(player, target) <= 1;
                            },
                            content() {
                                target.damage();
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp - 1) return -1;
                                        if (player.hp < 3) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        护法天童乱舞: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += 1;
                            },
                            mod: {
                                maxHandcard(player, current) {
                                    return current + 2;
                                },
                            },
                        },
                        超究极火花: {
                            round: 1,
                            usable: 2,
                            trigger: {
                                global: 'turnOverEnd',
                            },
                            filter(event, player) {
                                return event.player.isTurnedOver();
                            },
                            content() {
                                player.phase('nodelay');
                            },
                            group: ['超究极火花_roundcount'],
                        },
                        神秘光束: {
                            enable: 'chooseToUse',
                            init(player) {
                                player.storage.shouyin = false;
                            },
                            mark: true,
                            filter(event, player) {
                                if (event.type != 'dying') return false;
                                if (player.storage.shouyin) return false;
                                if (player.isTurnedOver()) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('神秘光束');
                                player.storage.shouyin = true;
                                player.turnOver();
                                ('step 1');
                                event.targets = game.filterPlayer();
                                event.targets.sort(lib.sort.seat);
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    if (target.hp < target.maxHp) {
                                        var num = target.maxHp - target.hp;
                                        if (get.is.altered('神秘光束')) num = Math.min(2, num);
                                        target.recover(num);
                                        player.line(target, 'green');
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (player.storage.shouyin) return false;
                                },
                                expose: 0.3,
                                save: true,
                                result: {
                                    player(player) {
                                        if (_status.event.dying != player && get.attitude(player, _status.event.dying) <= 0) {
                                            return 0;
                                        }
                                        var num = 0;
                                        var players = game.filterPlayer();
                                        for (const i of players) {
                                            var del = i.maxHp - i.hp;
                                            if (get.is.altered('shouyin')) del = Math.min(2, del);
                                            del /= Math.pow(1 + i.hp, 0.2);
                                            num += get.sgnAttitude(player, i) * del;
                                        }
                                        return num;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        掠日彗星: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            _priority: -10,
                            filter(event, player) {
                                return event.player && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                if (trigger.player.isTurnedOver()) {
                                    trigger.player.loseHp(2);
                                } else {
                                    player.chooseToDiscard('he', true);
                                    trigger.player.turnOver();
                                }
                                ('step 2');
                                event.num--;
                                ('step 3');
                                if (event.num > 0) event.goto(1);
                                ('step 4');
                                const evt = _status.event.getParent('phase', true);
                                if (evt) {
                                    evt.finish();
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (player.hasSkill('jueqing')) return;
                                        if (get.tag(card, 'damage')) {
                                            if (target.isTurnedOver()) return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        魔法吸收器: {
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                            trigger: {
                                player: ['damageBegin4', 'loseHpBegin', 'recoverBegin'],
                            },
                            _priority: 9,
                            forced: true,
                            content() {
                                if (trigger.name == 'damage' || trigger.name == 'loseHp') {
                                    trigger.cancel();
                                    player.loseMaxHp(2);
                                } else {
                                    trigger.cancel();
                                    player.gainMaxHp(2);
                                }
                            },
                        },
                        丑时参拜: {
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target && event.target != player && get.distance(player, event.target) > 2 && event.target.countCards('he') > 0;
                            },
                            content() {
                                player.discardPlayerCard(trigger.target, get.prompt('丑时参拜', trigger.target), 'hej');
                            },
                        },
                        妒意引爆者: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            init(player) {
                                player.storage.jo_zhunan_re = false;
                            },
                            superCharlotte: true,
                            filter(event, player) {
                                if (player.storage.jo_zhunan_re == true) return event.source != player;
                                if (!event.card) return get.distance(player, event.source) <= 1 && event.source != player;
                                if (get.color(event.card) == 'red') return false;
                                return get.distance(player, event.source) <= 1 && event.source != player;
                            },
                            content() {
                                'step 0';
                                var list = ['回血', '伤害'];
                                if (trigger.source) {
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '选择【妒意引爆者】效果')
                                        .set('ai', function () {
                                            if (player.hp <= 3) return '回血';
                                            if (trigger.source.hp <= 2) return '伤害';
                                            return '伤害';
                                        });
                                } else {
                                    player.recover();
                                    event.finish();
                                }
                                ('step 1');
                                if (result.control == '回血') {
                                    player.recover();
                                }
                                if (result.control == '伤害') {
                                    trigger.source.damage();
                                }
                            },
                        },
                        积怨返: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            logTarget: 'source',
                            filter(event, player) {
                                var source = event.source;
                                if (!source) return false;
                                var card = source.getEquip(1);
                                return card && get.itemtype(card) == 'card' && lib.filter.canBeGained(card, player, source);
                            },
                            prompt2(event) {
                                return '获得其装备区中的' + get.translation(event.source.getEquip(1));
                            },
                            check(event, player) {
                                return (get.attitude(player, event.source) + 0.1) * get.value(event.source.getEquip(1), event.source);
                            },
                            content() {
                                player.gain(trigger.source.getEquip(1), trigger.source, 'give', 'bySelf');
                            },
                        },
                        钓瓶落之怪: {
                            audio: 'ext:幻想拾夜/audio:2',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (event.nature) return true;
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (target.countCards('h')) return;
                                        if (get.tag(card, 'natureDamage')) return 'zerotarget';
                                        if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                        },
                        飞入井中: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            _priority: 10,
                            filter(event, player) {
                                if (event.parent.name == '飞入井中') return false;
                                return event.player != player && event.player.countCards('h') > player.hp;
                            },
                            async content(event, trigger, player) {
                                var num = trigger.player.countCards('h') - player.hp;
                                await trigger.player.chooseToDiscard(num, true);
                                const evt = _status.event.getParent('phase', true);
                                if (evt) {
                                    evt.finish();
                                }
                            },
                        },
                        绯红色的恶魔: {
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp(2);
                                player.addTempSkill('绯红色的恶魔', 'dyingAfter');
                                player.addTempSkill('绯红色的恶魔', 'dyingAfter');
                            },
                        },
                        德古拉的摇篮: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.discard(player.getCards('h'));
                                var list = [];
                                for (const i of game.players) {
                                    if (i != player) list.push(i);
                                }
                                player.useCard(game.createCard('nanman'), list);
                                ('step 1');
                                var num = 0;
                                game.countPlayer2(function (current) {
                                    current.getHistory('damage', function (evt) {
                                        num += evt.num;
                                    });
                                });
                                player.draw(num);
                            },
                        },
                        子夜之女王: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: 1,
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
                        吸血鬼之夜: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isDamaged();
                            },
                            content() {
                                player.recover(trigger.num);
                            },
                        },
                        天蛾的蛊道: {
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') >= 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, true);
                                var list = { basic: [], equip: [], trick: [], delay: [] };
                                for (let i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var info = lib.card[name];
                                    if (info.autoViewAs || name == 'yuansuhuimie') continue;
                                    if (lib.filter.cardEnabled({ name: name }, player)) {
                                        if (!list[info.type]) {
                                            list[info.type] = [];
                                        }
                                        list[info.type].push([get.translation(lib.card[name].type), '', name]);
                                    }
                                }
                                list.trick.sort(lib.sort.name);
                                var dialog = ui.create.dialog('天蛾的蛊道', [list.trick, 'vcard']);
                                // for(var i in list){
                                //     dialog.addText(get.translation(i)+'牌');
                                //     dialog.add([list[i],'vcard']);
                                // }
                                var rand1 = Math.random() < 1 / 3;
                                var rand2 = Math.random() < 0.5;
                                var rand3 = Math.random() < 1 / 3;
                                var rand4 = Math.random() < 1 / 3;
                                player.chooseButton(dialog).ai = function (button) {
                                    var name = button.link[2];
                                    if (player.hp <= 1) {
                                        switch (name) {
                                            case 'zhiliaobo':
                                                return 1;
                                            case 'dunpaigedang':
                                                return 0.8;
                                            case 'nanman':
                                                return 0.5;
                                            default:
                                                return 0;
                                        }
                                    }
                                    if (rand4 && player.countCards('h') <= 1) {
                                        switch (name) {
                                            case 'zengbin':
                                                return 1;
                                            case 'wuzhong':
                                                return 0.8;
                                            default:
                                                return 0;
                                        }
                                    }
                                    if (player.hasSkill('qinglonglingzhu')) {
                                        if (rand2) return name == 'chiyuxi' ? 0.8 : 0;
                                        return name == 'jingleishan' ? 0.8 : 0;
                                    }
                                    if (rand2) return name == 'wanjian' ? 0.8 : 0;
                                    return name == 'nanman' ? 0.8 : 0;
                                };
                                ('step 1');
                                if (result.links?.length) {
                                    player.chooseUseTarget(result.links[0][2]);
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        夜雀之歌: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return player.isMinHp();
                            },
                            content() {
                                player.loseMaxHp(1);
                                player.draw(5);
                            },
                        },
                        狂犬断噬: {
                            nobracket: true,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard: {
                                name: 'sha',
                            },
                            viewAs: {
                                name: 'nanman',
                            },
                            usable: 1,
                            prompt: '将一张杀当南蛮入侵使用',
                            check() {
                                return 1;
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', 'sha')) return false;
                            },
                            ai: {
                                order: 3,
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'sha')) return false;
                                },
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target, card) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                    target_use(player, target) {
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
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        逐者的约定之地: {
                            trigger: {
                                global: ['gainAfter', 'loseAfter', 'damageEnd'],
                            },
                            filter(event, player) {
                                var evt = event;
                                if (event.name == 'lose') {
                                    if (event.type != 'discard') return false;
                                    evt = event.parent;
                                }
                                var player = evt[event.name == 'gain' ? 'source' : 'player'];
                                if (!player || player == _status.currentPhase || player.isDead()) return false;
                                if (event.name == 'damage') return true;
                                if (evt[event.name == 'gain' ? 'bySelf' : 'notBySelf'] != true) return false;
                                if (event.name == 'lose') return event.hs.length;
                                return event.relatedLose && event.relatedLose.hs && event.relatedLose.hs.length;
                            },
                            check(event, player) {
                                return get.attitude(player, event[event.name == 'gain' ? 'source' : 'player']) > 0 && get.attitude(player, _status.currentPhase) <= 0;
                            },
                            logTarget(event) {
                                return event[event.name == 'gain' ? 'source' : 'player'];
                            },
                            content() {
                                'step 0';
                                event.target = trigger[trigger.name == 'gain' ? 'source' : 'player'];
                                event.target.judge();
                                ('step 1');
                                if (result.color == 'red') target.draw(2);
                                else if (_status.currentPhase && _status.currentPhase.countCards('he')) _status.currentPhase.chooseToDiscard('he', 2);
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        损坏的护符: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he') > 1;
                            },
                            position: 'he',
                            filterCard: true,
                            selectCard: 3,
                            content() {
                                player.draw(2);
                            },
                        },
                        厄运之轮: {
                            trigger: {
                                global: 'discardAfter',
                            },
                            filter(event, player) {
                                if (player.hasSkill('厄运之轮')) return false;
                                if (event.player == player) return false;
                                if (_status.currentPhase == player) return false;
                                if (Array.isArray(event.cards)) for (const i of event.cards) {
                                    if (get.type(i) != 'basic' && get.position(i) == 'd') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                var cards = [];
                                if (Array.isArray(trigger.cards)) for (const i of trigger.cards) {
                                    if (get.type(i) != 'basic' && get.position(i) == 'd') {
                                        cards.push(i);
                                    }
                                }
                                if (cards.length) {
                                    var card = cards.randomGet();
                                    player.gain(card, 'log');
                                    player.$gain2(card);
                                    player.addTempSkill('厄运之轮');
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        诅咒的雏人偶: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (event.player.hp > 0) return att <= 0;
                                return att > 0;
                            },
                            filter(event, player) {
                                return event.player.hp == 2 && event.player != player;
                            },
                            content() {
                                trigger.player.clearSkills();
                            },
                        },
                        水相伪装: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.countCards('h') >= player.countCards('h') && (event.card.name == 'wugu' || ((get.type(event.card) == 'trick' || get.type(event.card) == 'delay') && get.color(event.card) == 'black'));
                            },
                            content() {
                                trigger.parent.excluded.add(player);
                            },
                        },
                        光子鱼雷: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('he') > 0;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.gainPlayerCard('he', target, 1);
                                target.damage('fire');
                            },
                            ai: {
                                threaten: 3,
                                order: 15,
                                expose: 0.3,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        return -2;
                                    },
                                },
                            },
                        },
                        离断的棱边: {
                            group: '离断的棱边_damage',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择至多两名有牌的其他角色,获得这些角色区域里的一张牌', [1, 2], function (card, player, target) {
                                        return target != player && target.countCards('hej') > 0 && player.inRange(target);
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target) + 0.5;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets, 'green');
                                    event.targets = result.targets;
                                    event.targets.sort(lib.sort.seat);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (player.isAlive() && event.targets.length) {
                                    player.gainPlayerCard(event.targets.shift(), 'hej', true);
                                } else event.finish();
                                ('step 3');
                                if (event.targets.length) event.goto(2);
                            },
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('是否发动<离断的棱边>？选择一名角色,对其造成1点伤害', function (card, player, target) {
                                                return target.hp < player.hp;
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(player, target) < 0;
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            result.targets[0].damage();
                                        }
                                    },
                                },
                            },
                        },
                        子夜之鸟: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            filter(event, player) {
                                if (event.type != 'discard') return;
                                for (let i = 0; i < event.cards2.length; i++) {
                                    if (get.color(event.cards2[i], player) == 'red' && ['basic', 'equip'].includes(get.type(event.cards2[i], event.hs.includes(event.cards2[i]) ? event.player : false)) && get.position(event.cards2[i]) == 'd') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var cards = [];
                                for (let i = 0; i < trigger.cards2.length; i++) {
                                    if (get.color(trigger.cards2[i], player) == 'red' && ['basic', 'equip'].includes(get.type(trigger.cards2[i], trigger.hs.includes(trigger.cards2[i]) ? trigger.player : false)) && get.position(trigger.cards2[i]) == 'd') {
                                        cards.push(trigger.cards2[i]);
                                    }
                                }
                                if (!cards.length) {
                                    event.finish();
                                } else {
                                    event.cards = cards;
                                }
                                ('step 1');
                                if (event.cards.length) {
                                    player
                                        .chooseTarget(get.prompt('子夜之鸟'), '将' + get.translation(event.cards) + (event.cards.length > 1 ? '中的一张牌' : '') + '当做【勾魂锣】对一名其他角色使用', function (card, player, target) {
                                            var cs = _status.event.cards;
                                            for (let i = 0; i < cs.length; i++) {
                                                if (player.canUse({ name: 'gouhunluo', cards: [cs[i]] }, target, false)) return true;
                                            }
                                            return false;
                                        })
                                        .set('ai', function (target) {
                                            return get.effect(target, { name: 'gouhunluo' }, player, player);
                                        })
                                        .set('cards', cards);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    event.current = result.targets[0];
                                    if (event.cards.length == 1) {
                                        event.directCard = event.cards[0];
                                    } else {
                                        delete event.directCard;
                                        player
                                            .chooseCardButton('选择一张牌当作勾魂锣使用', event.cards, true)
                                            .set('filterButton', function (button) {
                                                return player.canUse({ name: 'gouhunluo', cards: [button.link] }, _status.event.target, false);
                                            })
                                            .set('target', event.current);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                var card;
                                if (event.directCard) {
                                    card = event.directCard;
                                } else if (result.links && result.links.length && event.cards.includes(result.links[0])) {
                                    card = result.links[0];
                                }
                                if (card) {
                                    event.cards.remove(card);
                                    player.line(event.current);
                                    player.useCard({ name: 'gouhunluo' }, event.current, [card], '子夜之鸟').animate = false;
                                    event.goto(1);
                                }
                            },
                        },
                        月的阴暗面: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) >= 3;
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            selectCard: 3,
                            check(card) {
                                return 5 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            content() {
                                'step 0';
                                target.chooseToRespond({ name: 'shan' }, '请打出一张【闪】来响应【月的阴暗面】');
                                ('step 1');
                                if (result.bool == false) target.damage(2);
                            },
                            ai: {
                                expose: 0.65,
                                order: 9,
                                result: {
                                    player(player) {
                                        if (
                                            game.countPlayer(function (current) {
                                                return current.hp <= 3 && get.attitude(player, current) < 0;
                                            }) > 0 &&
                                            game.countPlayer(function (current) {
                                                return current.hp <= 1 && get.attitude(player, current) > 0;
                                            }) == 0
                                        )
                                            return 2;
                                        return 0;
                                    },
                                },
                            },
                        },
                        彩光乱舞: {
                            mod: {
                                maxHandcard(player, num) {
                                    var hs = player.getCards('h');
                                    for (let i = 0; i < hs.length; i++) {
                                        if (get.color(hs[i]) == 'red') {
                                            num++;
                                        }
                                    }
                                    return num;
                                },
                            },
                        },
                        崩山彩极炮: {
                            mark: true,
                            nopop: true,
                            intro: {
                                content: '摸牌阶段改为获得一张流星火雨',
                            },
                            logv: false,
                            trigger: {
                                player: 'phaseZhunbeiAfter',
                            },
                            forced: true,
                            content() {
                                player.skip('phaseDraw');
                                player.gain(game.createCard('liuxinghuoyu'), 'gain2');
                                player.removeSkill('崩山彩极炮');
                            },
                        },
                        彩光风铃: {
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.parent.name == 'phaseDraw') return false;
                                return event.cards && event.cards.length;
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.cards.slice(0);
                                ('step 1');
                                player.chooseCardTarget({
                                    filterCard(card, player) {
                                        return _status.event.parent.cards.includes(card);
                                    },
                                    selectCard: [1, event.cards.length],
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    ai1(card) {
                                        if (ui.selected.cards.length) return -1;
                                        if (card.name == 'du') return 20;
                                        return _status.event.player.countCards('h') - _status.event.player.hp;
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return 1 - att;
                                        }
                                        if (target.countCards('h') > _status.event.player.countCards('h')) return 0;
                                        return att - 4;
                                    },
                                    prompt: '请选择要交给其他角色的牌',
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.storage.ma_qingbao++;
                                    result.targets[0].gain(result.cards, player);
                                    player.$give(result.cards.length, result.targets[0]);
                                    if (Array.isArray(result.cards)) for (const i of result.cards) {
                                        event.cards.remove(i);
                                    }
                                    if (event.cards.length) event.goto(1);
                                } else {
                                    player.getStat('triggerSkill')--;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        华光玉: {
                            trigger: {
                                player: 'equipEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return lib.inpile.includes(event.card.name);
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('华光玉'), function (card, player, target) {
                                    return lib.filter.targetEnabled({ name: 'liuxinghuoyu' }, player, target);
                                }).ai = function (target) {
                                    return get.effect(target, { name: 'liuxinghuoyu' }, player);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.useCard({ name: 'liuxinghuoyu' }, result.targets, false);
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        火神之光: {
                            mod: {
                                cardname(card, player) {
                                    var name = card.name;
                                    if (name == 'shunshou') {
                                        return 'sha';
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (_status.event && _status.event.isPhaseUsing(player)) {
                                        if (card.name == 'sha') return num + player.maxHp - player.hp;
                                    }
                                },
                                attackFrom(from, to, distance) {
                                    if (_status.event && _status.event.isPhaseUsing(from)) {
                                        return distance - from.maxHp + from.hp;
                                    }
                                },
                            },
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.cards && event.cards.length && event.cards[0].name == 'shan';
                            },
                            forced: true,
                            content() {
                                game.log(player, '的【顺手牵羊】被视为了【杀】');
                            },
                        },
                        水精公主: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            check() {
                                return ui.cardPile.hasChildNodes() && get.color(ui.cardPile.firstChild) != 'black';
                            },
                            content() {
                                'step 0';
                                event.count = 0;
                                ('step 1');
                                player.draw('visible');
                                event.count++;
                                ('step 2');
                                if (Array.isArray(result)) {
                                    if (get.color(result[0]) == 'black') {
                                        player.loseHp();
                                        player.draw(2);
                                        event.finish();
                                    } else player.chooseBool('是否继续发动【水精公主】？').ai = lib.skill.mingjie.check;
                                } else event.finish();
                                ('step 3');
                                if (result.bool) event.goto(1);
                            },
                        },
                        风灵的角笛: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (player != target && card.number < 8) return false;
                                },
                                playerEnabled(card, player, target) {
                                    if (player != target && card.number > 9) return false;
                                },
                            },
                        },
                        梦境与现实的诅咒: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (event.type != 'dying') return false;
                                if (player != event.dying) return false;
                                if (player.maxHp <= 1) return false;
                                if (player.countCards('h') == 0) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0 && target.hp > 0 && target.hp <= player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (!result.bool) {
                                    player.die();
                                    event.finish();
                                } else {
                                    event.num = target.hp - player.hp;
                                    player.loseMaxHp();
                                }
                                ('step 2');
                                player.changeHp(event.num);
                                if (get.is.altered('梦境与现实的诅咒')) {
                                    event.finish();
                                }
                                ('step 3');
                                event.target.changeHp(-event.num);
                                ('step 4');
                                if (event.target.hp <= 0) {
                                    event.target.dying({ source: player });
                                }
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player) {
                                    if (player.maxHp <= 1) return false;
                                    if (player.hp > 0) return false;
                                    if (player.countCards('h') == 0) return false;
                                },
                                save: true,
                                result: {
                                    target: -1,
                                    player: 1,
                                },
                                threaten: 2,
                            },
                        },
                        生与死的境界: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                for (var i in lib.card) {
                                    if (game.bannedcards && game.bannedcards.includes(i)) continue;
                                    if (lib.card[i].type == 'delay') {
                                        list.push(['锦囊', '', i]);
                                    }
                                }
                                if (list.length == 0) {
                                    event.finish();
                                    return;
                                }
                                var dialog = ui.create.dialog(get.prompt('生与死的境界'), [list.randomGets(3), 'vcard'], 'hidden');
                                player.chooseButton(dialog).ai = function (button) {
                                    var name = button.link[2];
                                    var num = Math.random() * get.value({ name: name });
                                    if (lib.card[name].selectTarget == -1) {
                                        return num / 10;
                                    }
                                    return num;
                                };
                                ('step 1');
                                if (result.buttons) {
                                    player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
                                }
                            },
                            ai: {
                                threaten: 1.6,
                            },
                        },
                        拉普拉斯之魔: {
                            forced: true,
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                let shaFulfilled = () => {
                                    var shaTemplate = { name: 'sha' };
                                    var num = lib.card.sha.usable;
                                    if (!num) return true;
                                    num = game.checkMod(shaTemplate, player, num, 'cardUsable', player);
                                    var numUsed = player.getHistory('useCard', (event) => event.card.name == 'sha').length;
                                    return !num || num <= numUsed;
                                };
                                return !shaFulfilled();
                            },
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                var card = get.cardPile2('bingliang');
                                if (card) player.gain(card, 'gain2', 'log');
                            },
                        },
                        潜藏于禅寺的妖蝶: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                if (player.next.hp < player.hp) player.next.damage();
                                if (player.previous.hp < player.hp) player.previous.damage();
                            },
                        },
                        暗夜昼魇: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (
                                        typeof num == 'number' &&
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('暗夜昼魇');
                                        })
                                    )
                                        return num + 100;
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.targets && event.targets.length == 1 && event.target.isLinked();
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                trigger.target.addTempSkill('暗夜昼魇', 'phaseAfter');
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        天狗巨暴流: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    var suit = card.suit;
                                    if (suit && !target.countCards('h', { suit: suit })) {
                                        return false;
                                    }
                                },
                            },
                        },
                        乌鸦的暗影: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.canUse({ name: 'sha' }, player) && target.countCards('he');
                            },
                            content() {
                                'step 0';
                                target.chooseToUse({ name: 'sha' }, player, -1, '乌鸦的暗影:对' + get.translation(player) + '使用一张【杀】,或令其弃置你的' + get.cnNumber(Math.max(1, target.countCards('e'), true)) + '张牌').set('targetRequired', true);
                                ('step 1');
                                if (result.bool == false && target.countCards('he') > 0) {
                                    player.discardPlayerCard(target, Math.max(1, target.countCards('e')), 'he', true);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 5.5,
                                expose: 0.2,
                                result: {
                                    player(player, target) {
                                        if (target.countCards('h') == 0) return 0;
                                        if (target.countCards('h') == 1) return 0.5;
                                        if (target.countCards('h') <= 2 && target.countCards('e') > 1) return 0.7;
                                        if (player.hp <= 2) return -2;
                                        if (player.countCards('h', 'shan') == 0) return -1;
                                        return -0.5;
                                    },
                                    target(player, target) {
                                        if (!target.countCards('h', 'sha') && !target.hasSkill('wusheng') && !target.hasSkill('Revision_wusheng')) return -target.countCards('e');
                                        return -1;
                                    },
                                },
                                threaten: 1.4,
                            },
                        },
                        不死传说: {
                            trigger: {
                                player: 'dying',
                            },
                            _priority: 7,
                            forced: true,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return card.suit == 'club' ? -1 : 1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.recover(2 - player.hp);
                                    player.turnOver(true);
                                }
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        月岩竺的诅咒: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    var type = get.type(card);
                                    if (type == '' || type == '') return true;
                                },
                                canBeDiscarded(card) {
                                    if (get.position(card) == 'e' && ['equip2', 'equip5', 'equip3', 'equip4', 'equip1'].includes(get.subtype(card))) return false;
                                },
                            },
                        },
                        不死鸟之羽: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return player.isAlive();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt2('不死鸟之羽'),
                                    function (card, player, target) {
                                        return target != player;
                                    },
                                    function (target) {
                                        return -get.attitude(player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    var card = game.createCard(['lebu', 'huoshan', 'shandian'].randomGet());
                                    result.targets[0].addJudge(card);
                                    result.targets[0].$draw(card);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                order: 5,
                            },
                        },
                        神话时代的记忆: {
                            group: ['神话时代的记忆_Begin', '神话时代的记忆_After'],
                            subSkill: {
                                Begin: {
                                    trigger: {
                                        player: ['dyingBegin'],
                                    },
                                    filter(event, player) {
                                        return _status.currentPhase != player;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, _status.currentPhase) <= 0;
                                    },
                                    content() {
                                        _status.currentPhase.damage(player, 'fire', 2);
                                    },
                                },
                                After: {
                                    trigger: {
                                        player: ['dyingAfter'],
                                    },
                                    forced: true,
                                    content() {
                                        var num1 = player.maxHp - player.countCards('h');
                                        if (num1 > 0) {
                                            var cards = [];
                                            for (let i = 0; i < ui.cardPile.childElementCount; i++) {
                                                var node = ui.cardPile.childNodes[i];
                                                if (get.color(node) == 'red') {
                                                    cards.push(node);
                                                    if (cards.length >= num1) break;
                                                }
                                            }
                                            player.gain(cards, 'gain2');
                                        }
                                    },
                                },
                            },
                        },
                        仙香玉兔: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            check(event, player) {
                                player.disableSkill('tmp', '仙香玉兔');
                                var eff = get.damageEffect(event.player, player, player);
                                var att = get.attitude(player, event.player);
                                var bool = false;
                                if (att > 0) {
                                    if (eff <= 0 || event.player.hp < event.player.maxHp) {
                                        bool = true;
                                    }
                                } else {
                                    if (eff < 0 && event.player.hp == event.player.maxHp) {
                                        bool = true;
                                    }
                                }
                                player.enableSkill('tmp', '仙香玉兔');
                                return bool;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.recover(trigger.num);
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (get.tag(card, 'damage') && get.attitude(player, target) > 0) {
                                            if (target.hp == target.maxHp || get.recoverEffect(target, player, player) <= 0) return 'zeroplayertarget';
                                            return [0, 0, 0, 1];
                                        }
                                    },
                                },
                            },
                        },
                        远古的骗术: {
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getEnemies().includes(event.player);
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 2;
                                    return -2;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.forcemin = true;
                                }
                            },
                        },
                        开运大纹: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.player != player && get.tag(event.card, 'damage') && !player.hasSkill('ma_tieshan2');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('开运大纹'), '令场上体力值最少的一名角色获得2点护甲', function (card, player, target) {
                                    return target.isMinHp();
                                }).ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].changeHujia(2);
                                    player.addTempSkill('开运大纹', 'roundStart');
                                    if (result.targets[0] != player) {
                                        player.draw(2);
                                    }
                                }
                            },
                        },
                        钟表的残骸: {
                            trigger: {
                                player: 'equipEnd',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.countCards('e') >= 3;
                            },
                            content() {
                                'step 0';
                                var es = player.getCards('e');
                                event.count = 1;
                                player.discard(es);
                                ('step 1');
                                event.count--;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.countDiscardableCards(player, 'ej') > 0;
                                    })
                                ) {
                                    player.chooseTarget('请选择一名角色,弃置其区域内的四张牌', 1, function (card, player, target) {
                                        return target.countDiscardableCards(player, 'hej') > 0;
                                    }).ai = function (target) {
                                        var att = get.attitude(player, target);
                                        if (target.countCards('j') && att > 0) return att * 1.5;
                                        return -att;
                                    };
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target, { color: [220, 90, 139] });
                                    player.discardPlayerCard(target, 'hej', 4);
                                    player.chooseUseTarget({ name: 'jingleishan' }, false, '是否视为使用一张【惊雷闪】？', 'nodistance');
                                }
                            },
                        },
                        咲夜的世界: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            selectCard: 1,
                            check(card) {
                                return 1;
                            },
                            discard: false,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: 1,
                            content() {
                                targets[0].draw(2);
                                player.chooseUseTarget({ name: 'sha' }, '是否视为使用一张【杀】？', false);
                            },//QQQ
                            ai: {
                                threaten: 0.5,
                                order: 8,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) <= 0) return -1;
                                        var num1 = 0;
                                        if (player.countCards('h', { color: 'red' })) num1++;
                                        return num1;
                                    },
                                },
                            },
                        },
                        假想时轴: {
                            round: 1,
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'wuxie',
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            prompt: '视为使用一张无懈可击',
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                            group: ['假想时轴_roundcount'],
                        },
                        银色的异次元: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var hs = player.getCards('he');
                                if (hs.length) {
                                    player.discard(hs.randomGet());
                                }
                                ('step 1');
                                player.draw(2);
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        德古拉的血宴: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.distance(player, event.player) <= 1 && player.isDamaged();
                            },
                            content() {
                                player.recover(2);
                            },
                        },
                        吸血鬼王座: {
                            group: ['吸血鬼王座_fuck1', '吸血鬼王座_fuck2'],
                            subSkill: {
                                fuck1: {
                                    trigger: {
                                        player: 'shaBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return get.distance(player, event.target) <= 1;
                                    },
                                    content() {
                                        player.addTempSkill('unequip', 'useCardAfter');
                                    },
                                },
                                fuck2: {
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance - 1;
                                        },
                                    },
                                },
                            },
                        },
                        绯色月下的噩梦: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type(card) == 'equip') {
                                        return true;
                                    }
                                },
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', { type: 'equip' });
                            },
                            content() {
                                var cards = player.getCards('h', { type: 'equip' });
                                if (cards.length) {
                                    player.lose(cards)._triggered = null;
                                    var list = [];
                                    var names = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        if (lib.card[lib.inpile[i]].type == 'basic') {
                                            names.push(lib.inpile[i]);
                                        }
                                    }
                                    names.remove('du');
                                    for (let i = 0; i < cards.length * 2; i++) {
                                        list.push(game.createCard(names.randomGet()));
                                    }
                                    player.directgain(list);
                                    player.recover(cards.length);
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (_status.currentPhase != player) return;
                                        if (get.type(card) == 'equip' && get.equipValueNumber(card) < 7) {
                                            if (player.needsToDiscard(2)) return;
                                            return [0, 0, 0, 0];
                                        }
                                    },
                                },
                            },
                        },
                        子夜女王的审判: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                player.discardPlayerCard(2, trigger.target, 'he');
                                var list = get.inpile('trick', 'trick');
                                var list2 = [];
                                for (let i = 0; i < 2; i++) {
                                    list2.push(game.createCard(list.randomGet()));
                                }
                                player.gain(list2, 'draw');
                            },
                        },
                        幻想之魔: {
                            mod: {
                                judge(player, result) {
                                    if (_status.event.type == 'phase') {
                                        if (result.bool == false) {
                                            result.bool = null;
                                        } else {
                                            result.bool = false;
                                        }
                                    }
                                },
                            },
                            trigger: {
                                player: 'turnOverBefore',
                            },
                            _priority: 20,
                            forced: true,
                            filter(event, player) {
                                return !player.isTurnedOver();
                            },
                            content() {
                                trigger.cancel();
                                game.log(player, '取消了翻面');
                            },
                            ai: {
                                noturn: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.type(card) == 'delay') return 0.5;
                                    },
                                },
                            },
                        },
                        '梦想·樱花封印': {
                            trigger: {
                                player: 'phaseJieshuBegin',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name != 'phaseJieshu' && event.card.name != 'sha') return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('樱花封印'), function (card, player, target) {
                                        return target != player && target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (att > 0) return 0;
                                        return 0.1 - att / target.countCards('h');
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player
                                        .chooseControl(lib.suit)
                                        .set('prompt', '请选择一种花色')
                                        .set('ai', function () {
                                            return lib.suit.randomGet();
                                        });
                                } else event.finish();
                                ('step 2');
                                var suit = result.control;
                                player.chat(get.translation(suit + 2));
                                game.log(player, '选择了', '#y' + get.translation(suit + 2));
                                if (target.countCards('h', { suit: suit })) {
                                    target
                                        .chooseCard('h', '交给' + get.translation(player) + '一张' + get.translation(suit) + '花色的手牌', true, function (card, player) {
                                            return card.suit == _status.event.suit;
                                        })
                                        .set('suit', suit);
                                } else {
                                    player.discardPlayerCard(target, true, 'h', 'visible');
                                    event.finish();
                                }
                                ('step 3');
                                if (result.cards?.length) player.gain(result.cards, target, 'give');
                            },
                        },
                        巫女的圣光: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he');
                            },
                            selectTarget: [1, Infinity],
                            content() {
                                'step 0';
                                player.gainPlayerCard(target, 'he', true);
                                ('step 1');
                                target.useCard({ name: 'sha' }, player);
                            },
                            ai: {
                                threaten: 1.4,
                                order: 7,
                                result: {
                                    target(player, target) {
                                        if (player.getEquip('tengjia') || player.getEquip('bagua')) return -1;
                                        if (get.effect(player, { name: 'sha' }, target, player) >= 0) return -1;
                                        if (!player.hasShan()) {
                                            if (ui.selected.targets.length) return 0;
                                            if (player.hp >= 4) return -1;
                                            if (player.hp >= 3 && target.hp == 1) return -1;
                                            return 0;
                                        }
                                        var num = player.countCards('h', 'shan');
                                        if (num < 1) {
                                            num = 1;
                                        }
                                        if (ui.selected.targets.length >= num) {
                                            return 0;
                                        }
                                        return -1;
                                    },
                                },
                            },
                        },
                        解放之印: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: [1, Infinity],
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            check(card) {
                                if (ui.selected.cards.length) return -1;
                                return 6 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                target.chooseToDiscard(cards.length, '弃置' + get.cnNumber(cards.length) + '张手牌并失去1点体力,或点取消将武将牌翻面并摸' + get.cnNumber(cards.length) + '张牌').set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (player.isTurnedOver()) return -1;
                                    return player.hp * player.hp - get.value(card);
                                });
                                ('step 1');
                                if (!result.bool) {
                                    target.turnOver();
                                    target.draw(cards.length);
                                } else target.loseHp();
                            },
                            ai: {
                                order: 2,
                                expose: 0.3,
                                threaten: 1.8,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('noturn')) return 0;
                                        if (target.isTurnedOver()) return 2;
                                        return -1 / (target.countCards('h') + 1);
                                    },
                                },
                            },
                        },
                        '梦想·阴阳结界': {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('弃置一张牌,对一名随机敌人造成1点伤害并随机弃置其一张牌', 'he')
                                    .set('ai', function (card) {
                                        return 8 - get.useful(card);
                                    });//QQQ
                                ('step 1');
                                if (result.bool) {
                                    var targets = player.getEnemies();
                                    if (targets.length) {
                                        var target = targets.randomGet();
                                        player.line(target, 'green');
                                        target.damage();
                                        target.randomDiscard();
                                    }
                                }
                            },
                            ai: {
                                threaten: 0.8,
                                maixie: true,
                                maixie_hp: true,
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            var nh = target.countCards('he');
                                            if (player.hasSkillTag('jueqing', false, target) || nh == 0) return [1, -2];
                                            if (!target.hasFriend() || nh <= 1) return;
                                            if (target.hp >= 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        百鬼夜行: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            usable: 2,
                            filter(event, player) {
                                if (Array.isArray(event.cards)) for (const i of event.cards) {
                                    if (i.original == 'h') return player.countCards('h') < 2;
                                }
                                return false;
                            },
                            content() {
                                player.draw(6 - player.countCards('h'));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    var nh = player.countCards('h');
                                    if (tag == 'noh' && (nh > 2 || nh == 0)) {
                                        return false;
                                    }
                                },
                            },
                        },
                        饿鬼缚祭: {
                            trigger: {
                                player: 'shaMiss',
                            },
                            _priority: -1,
                            filter(event, player) {
                                return event.target.countCards('he') > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'black' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gainPlayerCard('he', 2, trigger.target);
                                }
                            },
                        },
                        饿鬼反噬: {
                            audio: 'ext:幻想拾夜/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            _priority: 12,
                            filter(event, player) {
                                if (!player.countCards('h', { name: 'sha' })) return false;
                                return event.card && ['sha', 'juedou'].includes(event.card.name);
                            },//QQQ
                            content() {
                                player.addTempSkill('饿鬼反噬', 'shaAfter');
                                player.chooseToUse({ name: 'sha' }, trigger.source, '饿鬼反噬:是否对' + get.translation(trigger.source) + '使用一张杀？');
                            },
                        },
                        鬼行的虚影: {
                            forced: true,
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source != player && !event.source.hasJudge('lebu');
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                trigger.source.goMad({ player: 'phaseAfter' });
                            },
                            ai: {
                                threaten: 4,
                            },
                        },
                    },
                    translate: {
                        八坂神奈子: '八坂神奈子',
                        封兽鵺: '封兽鵺',
                        比那名居天子: '比那名居天子',
                        灵乌路空: '灵乌路空',
                        星熊勇仪: '星熊勇仪',
                        秋穰子: '秋穰子',
                        伊吹萃香: '伊吹萃香',
                        黑谷山女: '黑谷山女',
                        圣白莲: '圣白莲',
                        古明地恋: '古明地恋',
                        东风谷早苗: '东风谷早苗',
                        莉莉霍瓦特: '莉莉霍瓦特',
                        姬海棠果: '姬海棠果',
                        蕾蒂: '蕾蒂',
                        秋静叶: '秋静叶',
                        八云蓝: '八云蓝',
                        火焰猫燐: '火焰猫燐',
                        芙兰朵露: '芙兰朵露',
                        娜兹玲: '娜兹玲',
                        莉格露: '莉格露',
                        铃仙: '铃仙',
                        永江衣玖: '永江衣玖',
                        古明地觉: '古明地觉',
                        蓬莱山辉夜: '蓬莱山辉夜',
                        爱丽丝: '爱丽丝',
                        寅丸星: '寅丸星',
                        云居一轮: '云居一轮',
                        洩矢诹访子: '洩矢诹访子',
                        上白泽慧音: '上白泽慧音',
                        多多良小伞: '多多良小伞',
                        博丽灵梦: '博丽灵梦',
                        八云橙: '八云橙',
                        雾雨魔理沙: '雾雨魔理沙',
                        水桥帕露西: '水桥帕露西',
                        琪斯美: '琪斯美',
                        蕾米莉亚: '蕾米莉亚',
                        米斯蒂娅: '米斯蒂娅',
                        犬走椛: '犬走椛',
                        键山雏: '键山雏',
                        河城荷取: '河城荷取',
                        露米娅: '露米娅',
                        红美玲: '红美玲',
                        帕秋莉诺: '帕秋莉诺',
                        八云紫: '八云紫',
                        射命丸文: '射命丸文',
                        藤原妹红: '藤原妹红',
                        八意永琳: '八意永琳',
                        因幡帝: '因幡帝',
                        十六夜咲夜: '十六夜咲夜',
                        '☆蕾米莉亚': '☆蕾米莉亚',
                        '☆博丽灵梦': '☆博丽灵梦',
                        '☆伊吹萃香': '☆伊吹萃香',
                        遗忘之谷: '遗忘之谷',
                        遗忘之谷_info: '一名角色处于濒死状态时,你可以展示你的所有手牌并弃置其中的所有黑色牌(至少一张),若如此做,该角色回复一点体力,摸X张牌,X为你以此法弃置的黑色手牌数',
                        天水奇迹: '天水奇迹',
                        天水奇迹_info: '出牌阶段限一次,若你的手牌数小于体力值,则你可以弃置两张牌并摸两张牌',
                        伏地的巨蛇星: '伏地的巨蛇星',
                        伏地的巨蛇星_info: '出牌阶段限一次,你可以展示一名角色的所有手牌,若颜色均不同,你视为对其使用一张不计入出牌阶段使用次数的杀,若颜色均相同或没有手牌,你回复一点体力,若未损失体力改为摸三张牌',
                        鵺的蛇行表演: '鵺的蛇行表演',
                        鵺的蛇行表演_info: '出牌阶段限一次,你可以弃置一张牌并选择至多X名角色,令其获得一点护甲,若选择的角色数量大于1,你失去2点体力(X为你当前的体力值)',
                        源三位赖政之弓: '源三位赖政之弓',
                        源三位赖政之弓_info: '出牌阶段限一次,你可以弃置一张黑色手牌,从随机亮出的三张锦囊牌中选择一张加入手牌',
                        轨道不明的鬼火: '轨道不明的鬼火',
                        轨道不明的鬼火_info: '每当你受到一次伤害,你可以将一张兵粮寸断置入伤害来源的判定区',
                        天道是非之剑: '天道是非之剑',
                        天道是非之剑_info: '锁定技,你的延时类锦囊均视为【杀】',
                        无念无想的境界: '无念无想的境界',
                        无念无想的境界_info: '当你使用一张牌时,若此牌的点数为4的倍数/此牌是本回合内使用的第X张牌(X为4的倍数),你可以摸两张牌',
                        先忧后乐之剑: '先忧后乐之剑',
                        先忧后乐之剑_info: '每当你失去最后一张装备牌,你可以获得一名其他角色的一张牌,若此牌来自装备区,你装备之',
                        因果之剑: '因果之剑',
                        因果之剑_info: '出牌阶段结束时,你可以将武将牌翻面并视为使用一张【决斗】',
                        地狱极乐熔毁: '地狱极乐熔毁',
                        地狱极乐熔毁_info: '出牌阶段限一次,你可以弃置一张装备牌并选择一名其他角色,弃置其一张牌,若弃置的不为装备牌,你摸两张牌',
                        八咫乌俯冲: '八咫乌俯冲',
                        八咫乌俯冲_info: '结束阶段,你可以摸两张牌,若没有手牌,额外回复1点体力',
                        破碎日珥: '破碎日珥',
                        破碎日珥_info: '其他角色判定阶段开始前,你可以视为对其使用一张【火攻】',
                        怪力乱神: '怪力乱神',
                        怪力乱神_info: '当你使用的杀指定一名角色为目标时,你可以弃置一张牌,令此杀无视该角色防具',
                        地狱的苦轮: '地狱的苦轮',
                        地狱的苦轮_info: '锁定技,攻击范围不包含你的角色无法响应你使用的杀',
                        坏灭之咆哮: '坏灭之咆哮',
                        坏灭之咆哮_info: '出牌阶段限一次,你可以将一张手牌交给一名其他角色并令其非锁定技无效直到此技能结算完毕,该角色选择一项:令你获得其一张牌并摸一张牌;或其弃置一张牌并受到1点火焰伤害',
                        谷物神的允诺: '谷物神的允诺',
                        谷物神的允诺_info: '锁定技,所有角色摸牌阶段开始时,额外摸两张牌',
                        暖色的收获: '暖色的收获',
                        暖色的收获_info: '结束阶段,若你没有于本回合内造成伤害,你可以令一名角色摸两张牌或回复两点体力',
                        施饿鬼缚之术: '施饿鬼缚之术',
                        施饿鬼缚之术_info: '锁定技,当你使用牌时,若你的体力值为全场唯一最大或全场最小或之一,你可以令所有其他角色不能使用或打出牌来响应此牌',
                        云集雾散: '云集雾散',
                        云集雾散_info: '其他角色的结束阶段,若其本回合对除其以外的角色使用过牌,则你可以对其使用一张【杀】.若以此法使用的【杀】造成伤害,则你弃置其两张牌',
                        炼狱气息: '炼狱气息',
                        炼狱气息_info: '弃牌阶段,你可以额外保留1X张手牌(X为你已损失的体力值)',
                        小鬼成群: '小鬼成群',
                        小鬼成群_info: '结束阶段,你可以亮出牌堆顶的六张牌,获得其中的♥️️牌',
                        捕捉之网: '捕捉之网',
                        捕捉之网_info: '出牌阶段限一次,你可以弃置一张手牌,随机弃置两名敌人各一张牌',
                        原因不明的病疫: '原因不明的病疫',
                        原因不明的病疫_info: '当你成为杀或顺手牵羊的目标时,你可以摸两张牌,若如此做,你弃置一张牌',
                        瘴气场: '瘴气场',
                        瘴气场_info: '每当你打出闪响应一张杀,你可以视为使用一张兵粮寸断',
                        魔界蝶之妖香: '魔界蝶之妖香',
                        魔界蝶之妖香_info: '结束阶段,你回复1点体力或增加1点体力上限',
                        星之剑护法: '星之剑护法',
                        星之剑护法_info: '锁定技,当一名角色受到一次属性伤害后,你摸三张牌',
                        梵天之瞳: '梵天之瞳',
                        梵天之瞳_info: '每当其他角色使用延时类锦囊牌时,你可以将一张红色牌当作鬼幽结使用',
                        地底蔷薇: '地底蔷薇',
                        地底蔷薇_info: '锁定技,你的回合外,当你成为普通锦囊牌的目标后(无懈可击除外),若你本回合在此牌前成为过牌的目标且已结算完成,此牌对你无效',
                        本我的解放: '本我的解放',
                        本我的解放_info: '锁定技,你计算与其他角色的距离时-1;其他角色与你计算的距离时+1',
                        带刺的玫瑰园: '带刺的玫瑰园',
                        带刺的玫瑰园_info: '每当你使用杀指定一名角色为目标时,你可以弃置目标的手牌直到其手牌数与你相等',
                        新星璀璨之夜: '新星璀璨之夜',
                        新星璀璨之夜_info: '锁定技,你的计算与其他角色的距离时-1;当你使用【杀】或非转换的锦囊牌选择其他角色为目标后,你可以令一名距离为1的其他角色也成为此牌的目标',
                        空中落物的奇迹: '空中落物的奇迹',
                        空中落物的奇迹_info: '你每受到一次伤害,可以获得伤害来源装备区中的一张牌并立即放入你的装备区',
                        天空飞蛇: '天空飞蛇',
                        天空飞蛇_info: '锁定技,每轮游戏开始时,你随机获得两张点数与当前游戏轮数相同的牌且可依次使用之.若当前游戏轮数大于13则改为随机获得两张点数和等于当前游戏轮数的牌',
                        惊喜之春: '惊喜之春',
                        惊喜之春_info: '锁定技,每当一名其他角色的体力值于你的回合外发生变化时,若你的手牌数不大于你当前体力值的四倍,你摸两张牌',
                        天狗念写法: '天狗念写法',
                        天狗念写法_info: '当你使用一张指定单一目标的牌时,你可以选择攻击范围内至多不多于你的手牌数的其他角色,成为此牌的额外目标',
                        足不出户的狗仔队: '足不出户的狗仔队',
                        足不出户的狗仔队_info: '出牌阶段开始时,你可以摸牌直到你的手牌数为全场最多或之一',
                        取材练习: '取材练习',
                        取材练习_info: '每当你对其他角色造成1点伤害,你可以获得其一张牌',
                        延长的冬日: '延长的冬日',
                        延长的冬日_info: '出牌阶段限一次,你可以弃置一张手牌并令一名已受伤的角色获得一点护甲',
                        花之凋零: '花之凋零',
                        花之凋零_info: '出牌阶段限一次,你可以弃置任意张花色不同的牌,另一名其他角色弃置等量的牌,若其弃置的牌中有牌的花色与你弃置的牌相同,你对其造成2点伤害',
                        寒流: '寒流',
                        寒流_info: '当你造成伤害时,可随机废除受到你伤害的角色的一个装备栏,并选择其武将牌上的一个技能无效直到其回合结束',
                        北极的胜利者: '北极的胜利者',
                        北极的胜利者_info: '准备阶段,你可以选择跳过你的判定阶段并失去一点体力,视为对一名其他角色使用一张【过河拆桥】',
                        落叶狂扫: '落叶狂扫',
                        落叶狂扫_info: '准备阶段开始时,你可以观看牌堆顶的X+1张牌并可以按任意顺序置于牌堆顶或牌堆底.(X为你装备区内的牌数)',
                        秋符: '秋符',
                        秋符_info: '出牌阶段结束时,你可以与一名其他角色拼点,若你赢,视为你使用一张【五谷丰登】;若你没赢,视为其对你使用一张【决斗】',
                        枯道: '枯道',
                        枯道_info: '出牌阶段限一次,你可以令一名其他角色摸一张牌并弃置一张牌,若其弃置的牌为♠️️,你与其各摸一张牌',
                        仙狐思念: '仙狐思念',
                        仙狐思念_info: '出牌阶段限一次,你可以与一名其他角色拼点.若你赢,你对其造成2点火焰伤害;若你没赢,你增加2点体力上限',
                        前鬼后鬼的守护: '前鬼后鬼的守护',
                        前鬼后鬼的守护_info: '若场上手牌数不少于你的一半,你弃置牌时可改为重铸等量的牌',
                        迷人的四面楚歌: '迷人的四面楚歌',
                        迷人的四面楚歌_info: '锁定技.当你受到一次伤害后,伤害来源弃置两张装备牌',
                        食人怨灵: '食人怨灵',
                        食人怨灵_info: '当一名角色于出牌阶段使用【杀】指定目标后,你可以弃置一张手牌,令该角色可额外指定一名你攻击范围内的角色为目标',
                        火焰的车轮: '火焰的车轮',
                        火焰的车轮_info: '每轮限一次,一名其他角色的结束阶段,若其本回合内造成过伤害,你可以对其造成1点火焰伤害',
                        怨灵小镇: '怨灵小镇',
                        怨灵小镇_info: '每当你回复一点体力,可以摸三张牌',
                        红莓陷阱: '红莓陷阱',
                        红莓陷阱_info: '当一名其他角色受到伤害后,你可以失去一点体力.你与其各摸两张牌,若如此做,你弃置伤害来源的四张牌',
                        四重存在: '四重存在',
                        四重存在_info: '每当你使用(指定目标后)或被使用(成为目标后)一张能造成伤害的牌时,你可以摸一张牌',
                        无人生还: '无人生还',
                        无人生还_info: '你的回合开始时,你可以弃置一张手牌判定一次,若结果为红色,你移动场上一张牌;若结果为黑色,你对一名角色造成一点伤害,该角色摸一张牌',
                        禁忌的游戏: '禁忌的游戏',
                        禁忌的游戏_info: '一名角色进入濒死状态时,你可以弃置其所有手牌(至少一张),该角色回复2点体力.若你以此法弃置其两张或更多的手牌,该角色摸一张牌',
                        稀有金属探测器: '稀有金属探测器',
                        稀有金属探测器_info: '锁定技,每当你失去装备区内的牌,你获得一张顺手牵羊',
                        灵摆防御: '灵摆防御',
                        灵摆防御_info: '结束阶段,若你武将牌正面朝上,你可以翻面并回复2点体力',
                        最优良的宝物: '最优良的宝物',
                        最优良的宝物_info: '结束阶段,若你本回合使用的牌数大于或等于你的体力值,你可以摸X张牌,X为本回合内你使用的牌数',
                        荧光现象: '荧光现象',
                        荧光现象_info: '当你使用杀时,你可以弃置目标一张牌,随机获得两张锦囊牌',
                        夜虫风暴: '夜虫风暴',
                        夜虫风暴_info: '弃牌阶段开始时,若你于此阶段弃置了锦囊牌,你可以获得2点护甲',
                        夜虫龙卷: '夜虫龙卷',
                        夜虫龙卷_info: '锁定技,当你成为其他角色使用的【桃】或红色普通锦囊牌的目标时,若其手牌数不小于你,此牌对你无效',
                        幻象追迹者: '幻象追迹者',
                        幻象追迹者_info: '当你受到伤害时,你可以弃置一张红色杀,令此伤害-1',
                        花冠幻象: '花冠幻象',
                        花冠幻象_info: '当你使用【顺手牵羊】指定目标后,你可以和目标角色进行拼点.若你赢,你获得其一张牌.若你没赢,你获得对方的拼点牌,其获得你的拼点牌',
                        狂月爆破: '狂月爆破',
                        狂月爆破_info: '一名角色的出牌阶段开始时,你可以横置你的武将牌并失去一点体力,若如此做,视为其使用一张决斗',
                        邪恶波动: '邪恶波动',
                        邪恶波动_info: '一名其他角色的回合结束时,若你的手牌数小于体力值,你可以失去2点体力.若如此做,你摸五张牌并进行一个额外回合,且你于此回合内计算与此角色的距离均视为1',
                        雷云棘鱼: '雷云棘鱼',
                        雷云棘鱼_info: '锁定技,你不能成为过河拆桥的目标',
                        玄云海的雷霆: '玄云海的雷霆',
                        玄云海的雷霆_info: '出牌阶段,你可以将一张黑色牌或♥️️牌当【闪电】使用',
                        龙鱼电钻: '龙鱼电钻',
                        龙鱼电钻_info: '锁定技,你的攻击范围+1,你的回合内其他角色的防具牌无效',
                        羽衣若空: '羽衣若空',
                        羽衣若空_info: '锁定技,其他角色摸牌结束后,其展示所有手牌或交给你一张牌',
                        恐怖催眠术: '恐怖催眠术',
                        恐怖催眠术_info: '当你成为杀的目标时,你可以对此杀的来源使用一张【杀】',
                        恐怖的回忆: '恐怖的回忆',
                        恐怖的回忆_info: '当你对一名其他角色造成伤害时,若你已受伤,你可以与该角色各减1点体力上限,你回复2点体力',
                        羞于留影的蔷薇: '羞于留影的蔷薇',
                        羞于留影的蔷薇_info: '锁定技,你的回合开始时,你从弃牌堆中获得一张【过河拆桥】并进行一个额外的出牌阶段',
                        完美心灵控制: '完美心灵控制',
                        完美心灵控制_info: '限定技,出牌阶段,你可以弃置一张手牌并选择一名装备区内有牌的其他角色,你获得其装备区内的所有牌',
                        永夜的破晓黎明: '永夜的破晓黎明',
                        永夜的破晓黎明_info: '结束阶段,你可以展示所有手牌并选择至多X名角色(X为你的体力值,且至多为3),这些角色各摸三张牌',
                        无限的生命之泉: '无限的生命之泉',
                        无限的生命之泉_info: '摸牌阶段开始时,你可以放弃摸牌并展示牌堆顶的x张牌,若其颜色不同,你失去一点体力,否则视为你使用一张桃园结义.你获得这些牌(x为你的体力值)',
                        操纵人偶: '操纵人偶',
                        操纵人偶_info: '锁定技,你不能成为你攻击范围内其他角色使用的红色牌的目标',
                        狡猾的献祭: '狡猾的献祭',
                        狡猾的献祭_info: '当你成为其他角色使用的红色牌的目标时,你可以弃置一张闪并摸两张牌,加1点体力上限',
                        回归虚无: '回归虚无',
                        回归虚无_info: '出牌阶段限一次,你可以弃置一张红色牌,视为对一名随机敌人使用一张不计入使用限制的杀',
                        光辉之宝: '光辉之宝',
                        光辉之宝_info: '你的回合外,当有装备牌进入弃牌堆时,若这些牌不为你的区域,你可以获得这些牌',
                        净化之魔: '净化之魔',
                        净化之魔_info: '锁定技,每当一名其他角色使用决斗时,你选择1项:1.该角色交给你一张牌;2.你摸两张牌',
                        黄金的震眩: '黄金的震眩',
                        黄金的震眩_info: '出牌阶段限一次,你可以弃置两张相同颜色的手牌,令一名角色摸X张牌.(X为该角色已损失的体力值) ',
                        云界海妖来袭: '云界海妖来袭',
                        云界海妖来袭_info: '锁定技,当你造成伤害时,若你的手牌数与受伤害角色相等,此伤害+1',
                        天空铁锤落: '天空铁锤落',
                        天空铁锤落_info: '锁定技,当你造成伤害时,你选择一项:1.令此伤害+1并减1点体力上限;2.防止此伤害',
                        见越入道云: '见越入道云',
                        见越入道云_info: '锁定技,你不是【乐不思蜀】和【火攻】的目标.你装备区的牌于弃牌阶段内计入手牌上限',
                        忏悔的杀风: '忏悔的杀风',
                        忏悔的杀风_info: '当你受到一次伤害后,你可以获得一张装备牌',
                        七石之木: '七石之木',
                        七石之木_info: '锁定技,当一名角色翻面至武将牌背面朝上或死亡时,所有其他角色各依次弃置一张牌',
                        神谕之环: '神谕之环',
                        神谕之环_info: '锁定技,场上判定牌生效后,若此牌花色为♠️️,你获得之',
                        翡翠破碎: '翡翠破碎',
                        翡翠破碎_info: '出牌阶段结束时,你可以弃置任意张手牌.若如此做,你将手牌摸至三张',
                        似有似无的净化: '似有似无的净化',
                        似有似无的净化_info: '当你弃置牌后,若弃置的牌点数不小于5,你可以弃置一名其它角色的两张牌',
                        邪马台国: '邪马台国',
                        邪马台国_info: '准备阶段开始时,你可以对一名角色视为使用一张釜底抽薪,若如此做,你翻面',
                        死后之旅: '死后之旅',
                        死后之旅_info: '限定技,当你受到一次伤害后,你可以令伤害来源和你移出游戏至四轮',
                        雨夜怪谈: '雨夜怪谈',
                        雨夜怪谈_info: '出牌阶段限一次,你可以将所有手牌交给一名其他角色.若如此做,你令该角色与你指定的另一名有手牌的角色拼点,视为拼点赢的角色对没赢的角色使用一张【南蛮入侵】,你视为对其使用一张【照明弹】',
                        细雪的过客: '细雪的过客',
                        细雪的过客_info: '出牌阶段限一次,你可以弃置两张花色相同的牌并选择攻击范围内的一名角色.若如此做,该角色翻面且你不能使用【杀】直到回合结束',
                        封魔阵: '封魔阵',
                        封魔阵_info: '出牌阶段限一次,你可以弃置一张手牌,和一名已存活的角色交换位置.对该角色进行判定,若结果为黑色,你对其造成2点伤害,否则你获得其一张牌',
                        八方鬼缚阵: '八方鬼缚阵',
                        八方鬼缚阵_info: '当你成为黑色杀的目标时,你可以对你攻击范围内的一名其他角色使用一张【杀】',
                        梦想樱花封印: '梦想樱花封印',
                        梦想樱花封印_info: '出牌阶段限一次,你可以弃置任意张同花色的牌并摸等量的牌,指定至多X名其他角色,其弃置所有该花色的牌并摸等量的牌(X为你弃置的牌数)',
                        扩散灵符: '扩散灵符',
                        扩散灵符_info: '每当你使用或打出一张♦️️牌,你可以回复一点体力,若未损失体力则改为摸一张牌',
                        飞翔晴明: '飞翔晴明',
                        飞翔晴明_info: '锁定技,当你的体力值为2时,你的【桃】均视为【流星火雨】',
                        天仙鸣动: '天仙鸣动',
                        天仙鸣动_info: '出牌阶段限一次,你可以对攻击距离内的所有角色(包含自己)各造成1点伤害',
                        护法天童乱舞: '护法天童乱舞',
                        护法天童乱舞_info: '锁定技,摸牌阶段,你额外摸1张牌,你的手牌上限+2',
                        超究极火花: '超究极火花',
                        超究极火花_info: '每轮限一次,当一名角色翻面至武将牌背面朝上时,当前回合结束后,你可以执行一个额外的回合',
                        神秘光束: '神秘光束',
                        神秘光束_info: '限定技,一名角色处于濒死状态时,若你的武将牌正朝上,可以将武将牌翻面,令场上所有存活角色将体力回复至体力上限',
                        掠日彗星: '掠日彗星',
                        掠日彗星_info: '锁定技,每当你造成1点伤害时,防止此伤害,你弃置一张牌,令该角色翻面;若其已翻面则令其失去2点体力',
                        魔法吸收器: '魔法吸收器',
                        魔法吸收器_info: '锁定技,当你受到伤害或失去体力时,你改为自减2点体力上限.当你即将回复体力时,你改为增加2点体力上限.你的手牌上限等于你的体力上限',
                        丑时参拜: '丑时参拜',
                        丑时参拜_info: '每当你对距离2以外的角色使用一张牌,你可以弃置目标区域内的一张牌',
                        妒意引爆者: '妒意引爆者',
                        妒意引爆者_info: '当距离你为1的其他角色对你造成伤害后,若其不是使用红色牌造成的伤害,你可以选择一项:对其造成1点伤害;或令你回复1点体力.  ',
                        积怨返: '积怨返',
                        积怨返_info: '当你受到一次伤害后,你可以获得伤害来源装备区里的武器牌',
                        钓瓶落之怪: '钓瓶落之怪',
                        钓瓶落之怪_info: '锁定技,若你没有手牌,防止你受到的所有属性伤害和锦囊牌造成的伤害',
                        飞入井中: '飞入井中',
                        飞入井中_info: '一名其他角色的回合开始时,若其手牌数大于你的体力值,你可以令其跳过回合且该角色需将手牌弃至与你的体力值相等',
                        绯红色的恶魔: '绯红色的恶魔',
                        绯红色的恶魔_info: '锁定技,其他角色进入濒死状态时,你加2点体力上限',
                        德古拉的摇篮: '德古拉的摇篮',
                        德古拉的摇篮_info: '摸牌阶段开始时,你可以改为弃置所有手牌(至少一张)并视为使用一张【南蛮入侵】,你摸等同于你本阶段造成伤害数的牌',
                        子夜之女王: '子夜之女王',
                        子夜之女王_info: '出牌阶段限一次,你可以弃置一张牌,令任意名其他角色弃置全部手牌并摸等量的牌展示,弃置其中的非基本牌',
                        吸血鬼之夜: '吸血鬼之夜',
                        吸血鬼之夜_info: '锁定技,当你造成一次伤害后,你回复等量体力值',
                        天蛾的蛊道: '天蛾的蛊道',
                        天蛾的蛊道_info: '出牌阶段限一次,你可以将一张手牌当作任意非延时锦囊牌使用',
                        夜雀之歌: '夜雀之歌',
                        夜雀之歌_info: '你的回合结束后,若你的体力值为全场最少,你可以减少一点体力上限,之后摸五张牌',
                        狂犬断噬: '狂犬断噬',
                        狂犬断噬_info: '每回合限一次,你可以将一张【杀】当【南蛮入侵】使用',
                        逐者的约定之地: '逐者的约定之地',
                        逐者的约定之地_info: '当一名角色于回合外受到伤害,或其手牌被其他角色弃置或获得后,你可以令其判定一次.若结果为:红色,其摸两张牌;黑色,当前回合角色弃置两张牌',
                        损坏的护符: '损坏的护符',
                        损坏的护符_info: '出牌阶段限一次,你可以弃置三张牌,摸两张牌',
                        厄运之轮: '厄运之轮',
                        厄运之轮_info: '当其他角色于你的回合外首次弃置非基本牌时,你可以获得其中的随机一张牌',
                        诅咒的雏人偶: '诅咒的雏人偶',
                        诅咒的雏人偶_info: '当你对其他角色造成伤害后,若其体力值为2,你可以令其失去所有技能',
                        水相伪装: '水相伪装',
                        水相伪装_info: '锁定技,当你成为其他角色使用【五谷丰登】或黑色普通锦囊牌的目标时,若其手牌数不小于你,此牌对你无效',
                        光子鱼雷: '光子鱼雷',
                        光子鱼雷_info: '出牌阶段限一次,你可以弃置一张牌并选择一名其他角色,获得其一张手牌,对其造成1点火焰伤害',
                        离断的棱边: '离断的棱边',
                        离断的棱边_info: '出牌阶段开始时,你可获得你攻击范围内至多两名角色区域里的一张牌.结束阶段开始时,你可对一名体力值小于你的角色造成1点伤害',
                        子夜之鸟: '子夜之鸟',
                        子夜之鸟_info: '当你的红色基本牌或装备牌因弃置而进入弃牌堆后,你可以将其当做【勾魂锣】使用',
                        月的阴暗面: '月的阴暗面',
                        月的阴暗面_info: '出牌阶段限一次,你可以弃置三张红色牌,令所有其他角色选择一项:1.打出一张【闪】;2.受到你造成的2点伤害',
                        彩光乱舞: '彩光乱舞',
                        彩光乱舞_info: '锁定技,你的红色牌不计入手牌上限',
                        崩山彩极炮: '崩山彩极炮',
                        崩山彩极炮_info: '锁定技,你的第一个摸牌阶段,改为获得一张流星火雨',
                        彩光风铃: '彩光风铃',
                        彩光风铃_info: '每当你于摸牌阶段外获得牌时,你可以将其中任意牌以任意顺序交给其他角色',
                        华光玉: '华光玉',
                        华光玉_info: '每当你装备一张未强化的装备牌,可以视为对一名角色使用一张流星火雨',
                        火神之光: '火神之光',
                        火神之光_info: '锁定技:你的顺手牵羊均视为杀;出牌阶段,你的攻击范围+X,可以使用杀的次数+X.(X为你已损失的体力值)',
                        水精公主: '水精公主',
                        水精公主_info: '结束阶段,你可以摸一张牌,若此牌为红色,你可以重复此流程直到摸到黑色牌.当你以此法摸到黑色牌时,你失去1点体力摸两张牌',
                        风灵的角笛: '风灵的角笛',
                        风灵的角笛_info: '锁定技,你不能成为其他角色点数小于8的牌的目标;你不能使用点数大于9的牌指定其他角色为目标',
                        梦境与现实的诅咒: '梦境与现实的诅咒',
                        梦境与现实的诅咒_info: '当你进入濒死状态时,你可以与一名体力值不超过你体力上限的角色进行拼点,若你赢,你失去一点体力上限并与该角色交换体力值;若你没赢,你死亡',
                        生与死的境界: '生与死的境界',
                        生与死的境界_info: '结束阶段,你可以发现一张延时锦囊牌',
                        拉普拉斯之魔: '拉普拉斯之魔',
                        拉普拉斯之魔_info: '锁定技,弃牌阶段结束时,若你本回合内【杀】的使用次数未达到上限,你失去1点体力并从牌堆中获得一张【兵粮寸断】',
                        潜藏于禅寺的妖蝶: '潜藏于禅寺的妖蝶',
                        潜藏于禅寺的妖蝶_info: '锁定技,结束阶段开始时,若你的上下家角色体力值有小于你的.你对这些体力值小于你的角色造成1点伤害',
                        暗夜昼魇: '暗夜昼魇',
                        暗夜昼魇_info: '当你使用牌指定唯一目标时, 若其已横置,你可以摸一张牌;你使用牌不计入使用次数',
                        天狗巨暴流: '天狗巨暴流',
                        天狗巨暴流_info: '锁定技,若你没有某种花色的手牌,你不能成为这种花色的牌的目标',
                        乌鸦的暗影: '乌鸦的暗影',
                        乌鸦的暗影_info: '出牌阶段限一次,你可以指定一名你在其攻击范围内的其他角色,该角色需对你使用一张【杀】,否则你弃置其X张牌,X为其装备区牌的数量,且至少为1',
                        不死传说: '不死传说',
                        不死传说_info: '锁定技,当你进入濒死状态时,你进行一次判定,若结果不为♣️️,你将体力回复至2并将武将牌翻至背面',
                        月岩竺的诅咒: '月岩竺的诅咒',
                        月岩竺的诅咒_info: '锁定技,你装备区内的牌不能被其他角色弃置',
                        不死鸟之羽: '不死鸟之羽',
                        不死鸟之羽_info: '当你受到一次伤害后,你可以令一名其他角色随机使用一张延时锦囊牌(随机范围:闪电、火山、乐不思蜀)',
                        神话时代的记忆: '神话时代的记忆',
                        神话时代的记忆_info: '当你进入濒死状态时,可以对当前回合角色造成2点火焰伤害;当你脱离濒死状态时,可以随机获得X张红色牌,X为你的体力上限与当前手牌数之差',
                        仙香玉兔: '仙香玉兔',
                        仙香玉兔_info: '每当你对一名角色造成伤害,你可以防止此伤害,改为令目标角色回复等量的体力值',
                        远古的骗术: '远古的骗术',
                        远古的骗术_info: '锁定技,当一名敌方角色进入濒死状态时,你进行一次判定.若结果为红色,令其废除装备区',
                        开运大纹: '开运大纹',
                        开运大纹_info: '每轮限一次,当你成为其他角色使用牌的目标时,若此牌可以造成伤害,你可以令体力值最少的一名角色获得2点护甲.若该角色不为你,你摸两张牌',
                        钟表的残骸: '钟表的残骸',
                        钟表的残骸_info: '若你的装备区内有牌且达到了3张及以上,则你弃置所有装备区的牌.你弃置一名角色区域内的四张牌并可以视为你使用一张惊雷闪',
                        咲夜的世界: '咲夜的世界',
                        咲夜的世界_info: '出牌阶段限一次,你可以弃置一张红色牌并令一名其他角色摸两张牌,你可以视为使用一张杀(不计入使用次数)',
                        假想时轴: '假想时轴',
                        假想时轴_info: '每轮限一次,你可以视为使用一张【无懈可击】',
                        银色的异次元: '银色的异次元',
                        银色的异次元_info: '锁定技,当你受到一次伤害后,随机弃置一张牌,摸两张牌',
                        德古拉的血宴: '德古拉的血宴',
                        德古拉的血宴_info: '锁定技,每当你造成1点伤害后,若受伤角色与你的距离不大于1,你回复2点体力',
                        吸血鬼王座: '吸血鬼王座',
                        吸血鬼王座_info: '锁定技,你计算与其他角色的距离时始终-1,当你的杀指定一名角色为目标时,若距离为1,则此杀无视对方防具',
                        绯色月下的噩梦: '绯色月下的噩梦',
                        绯色月下的噩梦_info: '锁定技,你的装备牌不占用手牌上限;结束阶段,你将手牌中的每张装备牌转化为两张随机基本牌,每转化一张装备牌便回复1点体力',
                        子夜女王的审判: '子夜女王的审判',
                        子夜女王的审判_info: '当你使用杀指定一名角色为目标时,你可以弃置目标两张牌并随机获得两张锦囊牌',
                        幻想之魔: '幻想之魔',
                        幻想之魔_info: '锁定技,你的武将牌始终正面向上,你的判定区内的牌效果反转',
                        '梦想·樱花封印': '梦想·樱花封印',
                        '梦想·樱花封印_info': '结束阶段开始时/当你成为【杀】的目标时,你可以令一名其他角色交给你一张你声明的花色的手牌,若其没有则你观看其手牌弃置其中一张',
                        巫女的圣光: '巫女的圣光',
                        巫女的圣光_info: '出牌阶段限一次,你可以从任意名角色处各获得一张牌,每获得一张牌,被获得的角色视为对你使用一张杀',
                        解放之印: '解放之印',
                        解放之印_info: '出牌阶段限一次,你可以弃置任意张手牌并选择一名其他角色.该角色选择一项:1.弃置X张牌并失去1点体力.2.翻面并摸X张牌.(X为你弃置的牌数)',
                        '梦想·阴阳结界': '梦想·阴阳结界',
                        '梦想·阴阳结界_info': '每当你受到一次伤害后,你可以弃置一张牌,对一名随机敌人造成1点伤害并随机弃置其一张牌',
                        百鬼夜行: '百鬼夜行',
                        百鬼夜行_info: '锁定技,每回合限两次,当你失去手牌后,若手牌数少于2,你将手牌数补至6',
                        饿鬼缚祭: '饿鬼缚祭',
                        饿鬼缚祭_info: '每当你的杀被响应时,你可以进行一次判定,若结果为黑色,你可以获得对方的两张牌',
                        饿鬼反噬: '饿鬼反噬',
                        饿鬼反噬_info: '当你受到【杀】或【决斗】造成的伤害后,你可以对伤害来源使用一张【杀】.若此【杀】为红色,其不可闪避',
                        鬼行的虚影: '鬼行的虚影',
                        鬼行的虚影_info: '锁定技,当你受到一次伤害后,伤害来源进入混乱状态,直到回合结束',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    if (!info.hp) {
                        info.hp = 3;
                    }
                    if (!info.maxHp) {
                        info.maxHp = 3;
                    }
                    info.group = 'shen';
                    info.trashBin = [`ext:幻想拾夜/image/${i}.jpg`];
                    info.dieAudios = [`ext:幻想拾夜/audio/${i}.mp3`];
                }
                lib.config.all.characters.add('幻想拾夜');
                lib.config.characters.add('幻想拾夜');
                lib.translate.幻想拾夜_character_config = `幻想拾夜`;
                return QQQ;
            });
            game.import('card', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '幻想拾夜',
                    connect: true,
                    card: {
                        红魔馆集结令: {
                            fullskin: true,
                            type: 'trick',
                            enable: true,
                            filterTarget: true,
                            cardcolor: 'red',
                            cardnature: 'fire',
                            content() {
                                'step 0';
                                target.damage('fire', 2);
                                ('step 1');
                                target.changeHujia();
                            },
                            ai: {
                                value: [4, 1],
                                useful: 2,
                                order: 2,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 1.5;
                                        if (target.hasSkillTag('maixie_hp')) return 0;
                                        if (target.hp == 1) return -1;
                                        return -1 / Math.sqrt(target.hp + 1);
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                },
                            },
                            selectTarget: 1,
                        },
                        梦想的旅程: {
                            fullborder: 'silver',
                            type: 'spell',
                            subtype: 'spell_silver',
                            enable: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            selectTarget: -1,
                            content() {
                                'step 0';
                                event.num = game.countPlayer();
                                player.draw(event.num);
                                ('step 1');
                                player.chooseToDiscard(true, event.num, 'he');
                            },
                            ai: {
                                value: 6,
                                useful: [4, 1],
                                result: {
                                    player(player) {
                                        var num = player.countCards('he');
                                        if (num <= 1) return 0;
                                        if (num <= 3 && !player.needsToDiscard()) return 0;
                                        return 1;
                                    },
                                },
                                order: 7,
                            },
                            fullimage: true,
                        },
                        百鬼夜行祭: {
                            fullskin: true,
                            type: 'trick',
                            enable: true,
                            toself: true,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            selectTarget: -1,
                            modTarget: true,
                            content() {
                                if (_status.currentPhase == target) {
                                    target.addTempSkill('jihuocard2');
                                }
                                target.draw(2);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                    },
                    translate: {
                        红魔馆集结令: '红魔馆集结令',
                        红魔馆集结令_info: '出牌阶段对一名角色使用,对目标造成2点火焰伤害,目标获得1点护甲',
                        梦想的旅程: '梦想的旅程',
                        梦想的旅程_info: '摸X张牌并弃置X张牌,X为存活角色数',
                        百鬼夜行祭: '百鬼夜行祭',
                        百鬼夜行祭_info: '摸两张牌,本回合手牌上限+2',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:幻想拾夜/image/${i}.png`;
                        }
                        else {
                            info.image = `ext:幻想拾夜/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i])
                }
                lib.config.all.cards.add('幻想拾夜');
                lib.config.cards.add('幻想拾夜');
                lib.translate.幻想拾夜_card_config = '幻想拾夜';
                return QQQ;
            });
        },
        package: extensionInfo,
    };
});

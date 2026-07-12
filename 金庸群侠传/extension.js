import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '金庸群侠传',
        //扩展界面是否可以编辑
        content(config, pack) {
            if (!config.enable) return false;
            //是否开启了本包//
            //函数执行时机为游戏数据加载之后、界面加载之前
            //参数1扩展选项(见选项代码);参数2为扩展定义的武将、卡牌和技能等(可在此函数中修改)
            //导出时本段代码中的换行、缩进以及注释将被清除
            lib.arenaReady.push(function () {
                lib.hooks.checkEnd.push(function (event, element) {
                    let skills = event.player.getSkills('invisible').concat(lib.skill.global);
                    game.expandSkills(skills);
                    for (var i = 0; i < skills.length; i++) {
                        const ifo = get.info(skills[i]);
                        if (!ifo) alert('lib.skill:' + skills[i] + '不存在');
                    }
                    //game.log("checkEnd:skill")
                });
            });
            /**
             * 异步复制文件或文件夹.
             * 使用node.js的文件系统模块在node环境复制文件,对于非node环境,则使用File API进行复制.
             * @param {string} source - 源文件或文件夹的路径.
             * @param {string} target - 目标文件或文件夹的路径.
             * @param {function} onCopyCompleted - 复制完成后调用的回调函数,接收已复制文件数和总文件数作为参数.
             */
            game.jy_copyFiles = async (source, target, onCopyCompleted) => {
                /**
                 * 根据路径和当前环境(node.js或浏览器),构造完整的文件路径.
                 * @param {string} path - 相对路径.
                 * @returns {string} 构造的完整路径.
                 */
                const getFullPath = (path) => (lib.node ? `${__dirname}/${path}` : `${path}`);
                // 当前环境为node.js且存在fs模块时,使用node.js的方式复制文件
                if (lib.node && lib.node.fs) {
                    let totalFiles = 0; // 总文件数
                    let copiedFiles = 0; // 已复制的文件数
                    /**
                     * 递归复制文件夹及其内容.
                     * @param {string} srcRelative - 源文件夹的相对路径.
                     * @param {string} destRelative - 目标文件夹的相对路径.
                     */
                    const copyFolderRecursive = async (srcRelative, destRelative) => {
                        const src = getFullPath(srcRelative);
                        const dest = getFullPath(destRelative);
                        // 如果源文件夹不存在,则直接返回
                        if (!lib.node.fs.existsSync(src)) return;
                        // 如果目标文件夹不存在,则创建目标文件夹
                        if (!lib.node.fs.existsSync(dest)) lib.node.fs.mkdirSync(dest, { recursive: true });
                        const files = lib.node.fs.readdirSync(src);
                        totalFiles = files.length;
                        await Promise.all(
                            files.map(async (file) => {
                                const srcPath = `${src}/${file}`;
                                const destPath = `${dest}/${file}`;
                                // 如果是子文件夹,则递归复制
                                if (lib.node.fs.lstatSync(srcPath).isDirectory()) {
                                    await copyFolderRecursive(`${srcRelative}/${file}`, `${destRelative}/${file}`);
                                } else {
                                    // 如果是文件,则直接复制
                                    lib.node.fs.copyFileSync(srcPath, destPath);
                                    copiedFiles++;
                                }
                            })
                        );
                    };
                    try {
                        await copyFolderRecursive(source, target);
                        // 复制完成后,调用回调函数
                        onCopyCompleted(copiedFiles, totalFiles);
                    } catch (error) {
                    }
                } else {
                    // 在非node.js环境下,使用File API进行文件复制
                    new Promise((resolve, reject) => window.resolveLocalFileSystemURL(getFullPath(source), resolve, reject))
                        .then((sourceEntry) => new Promise((resolve, reject) => window.resolveLocalFileSystemURL(getFullPath(target), resolve, reject).catch(() => window.resolveLocalFileSystemURL(getFullPath(''), (dirEntry) => dirEntry.getDirectory(target.split('/').pop(), { create: true }, resolve)))).then((targetEntry) => sourceEntry.copyTo(targetEntry, null, resolve, reject)))
                        .then(() => onCopyCompleted(null, null)) // 在复制完成后调用回调
                        .catch((error) => console.warn(error));
                }
            };
            game.jy_addPlayer = function (position, character, animation) {
                if (position < 0 || position > game.players.length + game.dead.length || position == undefined) position = Math.ceil(Math.random() * (game.players.length + game.dead.length));
                const players = game.players.concat(game.dead);
                ui.arena.setNumber(players.length + 1);
                players.forEach((value) => {
                    if (parseInt(value.dataset.position) >= position) value.dataset.position = parseInt(value.dataset.position) + 1;
                });
                const player = ui.create.player(ui.arena).addTempClass('start');
                player.getId();
                player.dataset.position = position || game.players.length + game.dead.length;
                if (character) player.init(character);
                game.players.push(player);
                game.arrangePlayers();
                return player;
            };
            //第一次导入金庸群侠传自动开启本扩展所有武将包
            const list = ['ywhy', 'qtpz', 'jyldj', 'xajh', 'yttl', 'sdxl', 'sdyx', 'tlbb', 'jy_chongwu'];
            lib.config.characters.addArray(list);
            lib.config.all.characters.addArray(list);
            lib.skill._jycheckDisCard = {
                mod: {
                    canBeDiscarded(card, source, player, event) {
                        if (source == player) {
                            //source为弃牌发起者 player是被弃置的角色//
                            //禁止自己丢自己不能弃置的牌//
                            if (!lib.filter.cardDiscardable(card, player, event)) return false;
                        }
                    },
                },
            };
            lib.element.player.getDisCards = function (pos, filterCard, event) {
                return this.getCards(pos, filterCard).filter((card) => lib.filter.cardDiscardable(card, this, event));
            };
            lib.element.player.countDisCards = function (pos, filterCard, event) {
                return this.getDisCards(pos, filterCard, event).length;
            };
            game.jy_swapSeat = function (player, target) {
                const next = game.createEvent('swapSeat', false);
                next.player = player;
                next.target = target;
                next.setContent(function () {
                    game.broadcastAll(
                        function (target1, target2) {
                            game.swapSeat(target1, target2);
                        },
                        player,
                        target
                    );
                    event.trigger('swapSeat');
                });
                return next;
            };
            lib.element.player.addCharge = function (count) {
                const next = game.createEvent('addCharge', false);
                next.player = this;
                next.num = count;
                next.setContent(function () {
                    player.addMark('charge', num);
                    event.trigger('addCharge');
                });
            };
            lib.element.player.loseCharge = function (count) {
                const next = game.createEvent('loseCharge', false);
                next.player = this;
                next.num = count;
                next.setContent(function () {
                    player.removeMark('charge', num);
                    event.trigger('loseCharge');
                });
            };
            window.jySkillPrompt = function (name) {
                alert(get.stringify(get.info(name)));
            };
            lib.jy_group = []; //自己的自定义势力列表
            var diygroup = [
                ['jy_qin', '秦', '秦', { color: [235, 189, 7, 1], image: 'ext:金庸群侠传/image/dynasty/name_jy_qin.png' }],
                ['jy_tang', '唐', '唐', { color: [255, 120, 0, 1], image: 'ext:金庸群侠传/image/dynasty/name_jy_tang.png' }],
                ['jy_song', '宋', '宋', { color: [232, 18, 28, 1], image: 'ext:金庸群侠传/image/dynasty/name_jy_song.png' }],
                ['jy_yuan', '元', '元', { color: [31, 205, 15, 1], image: 'ext:金庸群侠传/image/dynasty/name_jy_yuan.png' }],
                ['jy_ming', '明', '明', { color: [18, 162, 229, 1], image: 'ext:金庸群侠传/image/dynasty/name_jy_ming.png' }],
                ['jy_qing', '清', '清', { color: [196, 33, 237, 1], image: 'ext:金庸群侠传/image/dynasty/name_jy_qing.png' }],
                ['jy_lie', '列', '列国', { color: [175, 175, 55, 1], image: 'ext:金庸群侠传/image/dynasty/name_jy_lie.png' }],
                ['jy_jue', '绝', '绝', { color: [255, 147, 7, 1], image: 'ext:金庸群侠传/image/dynasty/name_jy_jue.png' }],
                ['jy_xie', '邪', '邪', { color: [182, 7, 255, 1], image: 'ext:金庸群侠传/image/dynasty/name_jy_xie.png' }],
                ['jy_chong2', '冥', '冥兽', { color: [182, 7, 255, 1] }],
                ['jy_chong', '宠', '宠物', { color: [255, 147, 7, 1] }],
            ];
            diygroup.filter(function (i) {
                game.addGroup(...i);
                lib.jy_group.add(i[0]);
                if (i[3].image) lib.translate['group_' + i[0]] = i[1] + '势力';
            });
            //识别汉字偏旁,str输入字符串,boolean为true是输出数组,否则为字符串
            get.jy_pianpang = function (...args) {
                let str, boolean;
                for (const argument of args) {
                    if (typeof argument == 'string') str = argument;
                    else if (typeof argument == 'boolean') boolean = argument;
                }
                let object = cnchar.radical(str),
                    list = [];
                for (let name of object) {
                    list.push(name.radical);
                }
                if (boolean === true) return list;
                return list.toString();
            };
            //切换卡牌翻译
            game.jy_translateNamex = function (str) {
                var configx = lib.config.extension_金庸群侠传_jychangecardsTranslate;
                if (configx == 1 || configx == 3 || configx == 5) {
                    //武侠翻译
                    var str2 = ['硝磷火弹', '漫天花雨', '比武', '借剑杀人', '无极而生', '开仓放粮', '歃血为盟', '摧筋断骨', '隔空点穴', '妙手空空', '见招拆招', '玄铁索链', '鞑虏入侵', '金刚护体', '九花玉露丸', '盟主', '护法', '刺客', '奸细', '侠客'];
                    var regexp = new RegExp(str2.join('|'), 'g');
                    //官方翻译
                    var str3 = ['火攻', '万箭齐发', '决斗', '借刀杀人', '无中生有', '五谷丰登', '桃园结义', '兵粮寸断', '乐不思蜀', '顺手牵羊', '过河拆桥', '铁索连环', '南蛮入侵', '无懈可击', '桃', '主公', '忠臣', '反贼', '内奸', '武将'];
                    if (regexp.test(str) == true) {
                        for (var k = 0; k < str2.length; k++) {
                            if (str.includes(str2[k])) {
                                var regexp2 = new RegExp(str2[k], 'g');
                                str = str.replace(regexp2, str3[k]);
                            }
                        }
                    }
                }
                return str;
            };
            //押韵
            //小写字母转大写字母
            game.jy_toUpperCase = function (str) {
                str = str.toUpperCase();
                return str;
            };
            //大写字母转小写字母
            game.jy_toLowerCase = function (str) {
                str = str.toLowerCase();
                return str;
            };
            //去除字符串中的所有空格
            game.jy_trimAll = function (str) {
                if (typeof str === 'string') {
                    return str.split(/[\t\r\f\n\s]*/g).join('');
                } else {
                    console.warn(`${typeof str}不是字符串`);
                }
            };
            //判断字符串是否含有中文
            get.jy_checkChinese = function (str) {
                var reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');
                if (reg.test(str)) return true;
                return false;
            };
            //判断字符串是否全部是中文
            get.jy_isChinese = function (str) {
                var reg = /^[\u4E00-\u9FA5]+$/;
                if (!reg.test(str)) return false;
                return true;
            };
            //获取汉字首字母
            //arg为中文字符串,type为true将小写字母转为大写字母,subtype为true将转换后的字符串转为数组
            get.jy_shouzimu = function (arg, type, subtype) {
                var pinyin = window.pinyinPro.pinyin;
                if (!arg) return;
                if (typeof arg != 'string') arg = arg.toString();
                if (!get.jy_checkChinese(arg)) return '必须使用中文字符串';
                var arg2 = pinyin(arg, { pattern: 'first', toneType: 'none' });
                arg2 = game.jy_trimAll(arg2);
                if (type && type == true) arg2 = game.jy_toUpperCase(arg2);
                if (subtype && subtype == true) arg2 = Array.from(arg2);
                return arg2;
            };
            //获取汉字声母,默认返回数组
            get.jy_shengmu = function (arg) {
                let pinyin = window.pinyinPro.pinyin;
                if (!arg) return [];
                if (typeof arg != 'string') arg = arg.toString();
                if (!get.jy_checkChinese(arg)) {
                    console.warn('必须使用中文字符串');
                    return [];
                }
                arg = pinyin(arg, { pattern: 'initial', type: 'array' });
                return arg;
            };
            //获取汉字韵头/介母,默认返回数组
            get.jy_yuntou = function (arg) {
                let pinyin = window.pinyinPro.pinyin;
                arg = pinyin(arg, { pattern: 'finalHead', type: 'array' });
                return arg.filter((item) => item);
            };
            //获取汉字韵母,默认返回小写字母不带声调形式的数组
            get.jy_yunmu = function (...args) {
                let pinyin = window.pinyinPro.pinyin,
                    arg,
                    type;
                for (const argument of args) {
                    if (typeof argument == 'string') arg = argument;
                    else if (typeof argument == 'boolean') type = argument;
                }
                if (!arg) return [];
                if (!get.jy_checkChinese(arg)) {
                    console.warn('必须使用中文字符串');
                    return [];
                }
                let array = get.jy_yuntou(arg),
                    list = Array.from(arg);
                let arr = ['yi', 'zi', 'ci', 'si', 'zhi', 'chi', 'shi', 'ri', 'ye', 'yüe', 'yuan', 'wu', 'yu', 'yin', 'ying', 'yun'];
                list = list.filter((item) => {
                    let index = pinyin(item, { toneType: 'none' });
                    if (arr.some((name) => index.includes(name))) return false;
                    return true;
                });
                arg = pinyin(list.toString().replace(/,/g, ''), { pattern: 'final', toneType: 'none', type: 'array' });
                let pinyinList = [];
                if (type == true && array.length) {
                    arg.forEach((item) => {
                        for (let yuntou of array) {
                            if (item.startsWith(yuntou) && item.length > 1 && !['ui', 'iu', 'ie', 'üe'].includes(item)) {
                                pinyinList.push(item.slice(1));
                            } else {
                                pinyinList.push(item);
                            }
                        }
                    });
                    return pinyinList;
                }
                return arg;
            };
            //注释弹窗
            var jy_translationName = {
                jy_translate_anqi: {
                    name: '暗器牌',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;暗器牌是金庸包自定义的卡牌类型,取材自武侠小说中武林高手擅长的各种暗器.<br>&nbsp;&nbsp;&nbsp;&nbsp;本扩展当前暗器牌包含:<li>飞燕银梭<li>七星钉<li>含沙射影<li>附骨针<li>冰魄银针<li>漫天花雨<br><br><br>程序员小助手:函数代码为<lib.jy_anqiList><br><br>',
                },
                jy_translate_duyao: {
                    name: '毒药牌',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;毒药牌是金庸包自定义的卡牌类型,取材自武侠小说中许多武器门派擅长的毒药.<br>&nbsp;&nbsp;&nbsp;&nbsp;本扩展当前毒药牌包含:<li>情花<li>悲酥清风<li>十香软筋散<br><br><br>程序员小助手:函数代码为<jy_duyaoList><br><br><br><br>',
                },
                jy_translate_miji: {
                    name: '秘籍牌',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;秘籍牌属于宝物牌,取材自武侠小说那些记载了绝世武功经书.<br>&nbsp;&nbsp;&nbsp;&nbsp;本扩展当前秘籍牌包含:<li>武穆遗书<li>九阳真经<li>九阴真经<li>葵花宝典<br><br><br>程序员小助手:函数代码为<jy_mijiList><br><br><br><br>',
                },
                jy_translate_fumian: {
                    name: '负面状态',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>负面状态</b>是金庸包自定义几种角色状态的合集.包括:横置、翻面、有被废除的装备栏、判定区里有<u>负面延时锦囊牌</u>(除【运功疗伤】以外的延时锦囊牌).<br>&nbsp;&nbsp;&nbsp;<b>随机进入一项负面状态:</b>即在横置、翻面、判定区里随机置入一张负面延时锦囊牌、随机废除一个装备栏中随机执行一项.<br>&nbsp;&nbsp;&nbsp;<b>解除负面状态:</b>回复所有被废除的装备栏、武将牌翻至正面向上、解除横置、失去判定区里所有负面延时锦囊牌.',
                },
                jy_translate_fumianyanshijinnangpai: {
                    name: '负面延时锦囊',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;负面延时锦囊牌是金庸包自定义的函数,与之相对应的为正面延时锦囊牌.是指从该延时锦囊牌的目标的立场来判定一张延时锦囊牌是负面或者正面.对目标不利的即为负面延时锦囊牌,比如【生死符】、【闪电】、【隔空点穴】、【走火入魔】等;对目标有利的即为正面延时锦囊牌,目前金庸包的正面延时锦囊牌为【运功疗伤】.',
                },
                jy_translate_yizu: {
                    name: '异族',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;金庸包将异族角色粗略地定义为除中原汉族王朝以外的周边少民政权国家以及外国的角色.本扩展以帮派属性来区分,即帮派技包括南伐、征东、剑脉、斗转、拜火、邦交、下蛊、西毒、藏宗的为异族角色.<br>&nbsp;&nbsp;&nbsp;&nbsp;帮派技不包含上述技能的即为汉人角色.',
                },
                jy_translate_hanren: {
                    name: '汉人',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;金庸包的汉人角色与异族角色对应,除去异族角色,即为汉人角色.<br>&nbsp;&nbsp;&nbsp;&nbsp;本扩展将异族角色粗略地定义为除中原汉族王朝以外的周边少民政权国家的角色以及其他外国人物.<br>&nbsp;&nbsp;&nbsp;&nbsp;本扩展以帮派属性来区分,即异族角色为含有如下帮派技的角色:南伐(鞑虏,含满清、辽国、金国等)、征东(西夏)、剑脉(大理)、斗转(姑苏慕容)、拜火(波斯明教)、邦交(外国人物)、藏宗(西藏蜜宗)、下蛊(五毒教)等.',
                },
                jy_translate_qixingding: {
                    name: '七星钉',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;七星钉是金庸群侠传的一种暗器牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【七星钉】</font>其他角色使用装备牌时,你可以令其选择:将此装备交给你;或受到你的一点伤害.<br><br><br><br><br><br><br>",
                },
                jy_translate_shaolin_skill: {
                    name: '少林技能',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;少林技能库收录了一些较为经典的出自少林寺的技能,获得一项少林技能,即从该技能库中获得一项技能.当前包括:<li>渡劫(出自空见)<li>金刚(出自少林三渡)<li>无界(出自少林三渡,旧版)<li>通脉(出自少林寺帮派技)<li>藏经(出自觉远大师)<li>烈阳(出自觉远大师)<li>博阳(出自觉远大师)<li>真阳(出自觉远大师)<li>度悔(出自玄慈叶二娘)<li>燃木(玄苦)<li>说法(出自扫地僧)<li>博览(出自扫地僧)<li>气罩(出自扫地僧)<li>易筋(出自达摩)<li>洗髓(出自达摩)<li>拈花(出自鸠摩智)<br><br><br>程序员小助手:函数代码为<jy_shaolin_skills><br><br>',
                },
                jy_translate_taixuanjing: {
                    name: '太玄经',
                    info: '<br><侠客行>·李白<br><br>赵客缦胡缨,吴钩霜雪明.<br>银鞍照白马,飒沓如流星.<br>十步杀一人,千里不留行.<br>事了拂衣去,深藏身与名.<br>闲过信陵饮,脱剑膝前横.<br>将炙啖朱亥,持觞劝侯嬴.<br>三杯吐然诺,五岳倒为轻.<br>眼花耳热后,意气素霓生.<br>救赵挥金槌,邯郸先震惊.<br>千秋二壮士,烜赫大梁城.<br>纵死侠骨香,不惭世上英.<br>谁能书阁下,白首太玄经.<br><br>',
                },
                jy_translate_changhenge: {
                    name: '长恨歌',
                    info: '<br><长恨歌>·白居易<br><br><br>汉皇重色思倾国,御宇多年求不得.<br>杨家有女初长成,养在深闺人未识.<br>天生丽质难自弃,一朝选在君王侧.<br>回眸一笑百媚生,六宫粉黛无颜色.<br>春寒赐浴华清池,温泉水滑洗凝脂.<br>侍儿扶起娇无力,始是新承恩泽时.<br>云鬓花颜金步摇,芙蓉帐暖度春宵.<br>春宵苦短日高起,从此君王不早朝.<br>承欢侍宴无闲暇,春从春游夜专夜.<br>后宫佳丽三千人,三千宠爱在一身.<br>金屋妆成娇侍夜,玉楼宴罢醉和春.<br>姊妹弟兄皆列土,可怜光彩生门户.<br>遂令天下父母心,不重生男重生女.<br>骊宫高处入青云,仙乐风飘处处闻.<br>缓歌慢舞凝丝竹,尽日君王看不足.<br>渔阳鼙鼓动地来,惊破霓裳羽衣曲.<br>九重城阙烟尘生,千乘万骑西南行.<br>翠华摇摇行复止,西出都门百余里.<br>六军不发无奈何,宛转蛾眉马前死.<br>花钿委地无人收,翠翘金雀玉搔头.<br>君王掩面救不得,回看血泪相和流.<br>黄埃散漫风萧索,云栈萦纡登剑阁.<br>峨嵋山下少人行,旌旗无光日色薄.<br>蜀江水碧蜀山青,圣主朝朝暮暮情.<br>行宫见月伤心色,夜雨闻铃肠断声.<br>天旋地转回龙驭,到此踌躇不能去.<br>马嵬坡下泥土中,不见玉颜空死处.<br>君臣相顾尽沾衣,东望都门信马归.<br>归来池苑皆依旧,太液芙蓉未央柳.<br>芙蓉如面柳如眉,对此如何不泪垂.<br>春风桃李花开夜,秋雨梧桐叶落时.<br>西宫南苑多秋草,落叶满阶红不扫.<br>梨园弟子白发新,椒房阿监青娥老.<br>夕殿萤飞思悄然,孤灯挑尽未成眠.<br>迟迟钟鼓初长夜,耿耿星河欲曙天.<br>鸳鸯瓦冷霜华重,翡翠衾寒谁与共.<br>悠悠生死别经年,魂魄不曾来入梦.<br>临邛道士鸿都客,能以精诚致魂魄.<br>为感君王辗转思,遂教方士殷勤觅.<br>排空驭气奔如电,升天入地求之遍.<br>上穷碧落下黄泉,两处茫茫皆不见.<br>忽闻海上有仙山,山在虚无缥渺间.<br>楼阁玲珑五云起,其中绰约多仙子.<br>中有一人字太真,雪肤花貌参差是.<br>金阙西厢叩玉扃,转教小玉报双成.<br>闻道汉家天子使,九华帐里梦魂惊.<br>揽衣推枕起徘徊,珠箔银屏迤逦开.<br>云鬓半偏新睡觉,花冠不整下堂来.<br>风吹仙袂飘飖举,犹似霓裳羽衣舞.<br>玉容寂寞泪阑干,梨花一枝春带雨.<br>含情凝睇谢君王,一别音容两渺茫.<br>昭阳殿里恩爱绝,蓬莱宫中日月长.<br>回头下望人寰处,不见长安见尘雾.<br>惟将旧物表深情,钿合金钗寄将去.<br>钗留一股合一扇,钗擘黄金合分钿.<br>但令心似金钿坚,天上人间会相见.<br>临别殷勤重寄词,词中有誓两心知.<br>七月七日长生殿,夜半无人私语时.<br>在天愿作比翼鸟,在地愿为连理枝.<br>天长地久有时尽,此恨绵绵无绝期.<br><br><br><br><br>',
                },
                jy_translate_renlei: {
                    name: '人类',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;人类角色是相对行尸类角色而言.<br>&nbsp;&nbsp;&nbsp;&nbsp;行尸角色:属于部分角色的衍生角色,一般情况下不属于常备角色库(埃及法老除外),在特定人物的技能作用下才会出场,如九叔的僵尸、张起灵的粽子、王凯旋的飞僵、格伦的丧尸、埃及法老的木乃伊等.<br><br><br>',
                },
                jy_translate_xingshi: {
                    name: '行尸',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;属于部分角色的衍生角色,一般情况下不属于常备角色库(埃及法老除外),在特定人物的技能作用下才会出场,如九叔的僵尸、张起灵的粽子、王凯旋的飞僵、埃及法老的木乃伊等.<br><br><br>',
                },
                jy_translate_munaiyi: {
                    name: '木乃伊',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;属于行尸角色的一种.其中埃及法老为常备角色库,其衍生木乃伊角色有:连枷法老、妖姬怨灵、始祖冥帝、摩蝎大帝.<br><br><br>',
                },
                jy_translate_huanshouwushu: {
                    name: '唤兽巫术',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;普通锦囊牌,属于埃及法老的衍生卡牌.<br>&nbsp;&nbsp;&nbsp;&nbsp;技能效果:行尸角色出牌阶段限一次,若你是单将模式,则你可以随机召唤一只未出场的冥兽成为你的副将.人类角色的出牌阶段,其可以弃置一张此牌,让一名行尸角色失去其冥兽.<br><br><br>',
                },
                jy_translate_xjl: {
                    name: '酒令',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;酒令是汉族民间风俗之一,是酒席上的一种助兴游戏,一般是指席间推举一人为令官,余者听令轮流说诗词、联语或其他类似游戏,违令者或负者罚饮,行令者又称<酒司令>.而这个<司令>权是要轮流来行使的,所以轮到的人也叫<关主>.又称<行令饮酒>.<br>&nbsp;&nbsp;&nbsp;&nbsp;酒令是一种有中国特色的酒文化.饮酒行令,是中国人在饮酒时助兴的一种特有方式.酒令由来己久,最早诞生于西周,完备于隋唐.<br><br><br>',
                },
                jy_translate_jiuling: {
                    name: '押韵接龙',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;即获得的牌的首字韵脚,需与上一张牌的尾字韵脚押韵.如上一张牌是比武(u),需获得一张首字韵脚为u的牌,如屠龙刀(ao),下一张牌首字韵脚需为ao如桃花阵,以此类推.<br><br><br>',
                },
                jy_translate_beidouguiwei: {
                    name: '北斗归位',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;绝王重阳的七个<北斗>的点数为A、3、5、7、9、J、K,开局时是随机排列,全部归位的意思是:以上点数按从小到大的顺序排列,即A在第1位,3在第2位,5在第3位,7在第4位,9在第5位,J在第6位,K在第7位.<br><br><br>',
                },
                jy_translate_bangpaiji: {
                    name: '帮派技',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;在三国杀角色技能越来越强悍的今天,主公方的生存空间越来越狭窄,为解决反贼方一边倒的优势问题,<金庸群侠传>扩展特别推出帮派技,帮派技是为身份局量身定制的,除非特别约定或特殊角色,其他模式均不会出现帮派技.<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>1、何为帮派技？</b><br>&nbsp;&nbsp;&nbsp;&nbsp;帮派技是某个武学门派共同拥有的共用技能,只要某个角色属于某个帮派,他就拥有该帮派的帮派技.<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>2、如果一个角色拥有多个帮派归属怎么办？</b><br>&nbsp;&nbsp;&nbsp;&nbsp;同一个人物同时归属于多个帮派时,是可以拥有多个帮派技的,比如黄蓉既属于桃花岛又属于丐帮.其在执行选择时,需从其中选择一个.<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>3、游戏中哪些身份可以拥有帮派技,以及如何获得？</b><br>&nbsp;&nbsp;&nbsp;&nbsp;主公在游戏开始时即获得帮派技;反贼阵亡至只剩下一个时,其获得帮派技;内奸在<主公+忠臣>和<反贼总数>的数量差达到2或以上时,获得帮派技.一名角色在获得帮派技时,需从其帮派技库中选择一个.<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>4、游戏中的角色是怎么划分帮派的？有些界线模糊的角色是怎么划分的？</b><br>&nbsp;&nbsp;&nbsp;&nbsp;在金庸先生的原著或影视衍生作品中,如有明确帮派归属的,将遵循原著,例如黄药师属于桃花岛、段誉属大理段氏、张无忌属于武当和明教.对于没有帮派归属,形象偏正面的角色,统一划分为游侠,如李萍、柯镇恶;对于没有帮派归属,形象偏反面的角色统一划分为悍匪,如段天德;长期虎视、侵略中原的少民政权划分为鞑虏(包括为其效力的江湖人士如玄冥二老、安剑清、灵智上人等);来自西藏金刚宗的划分为藏宗;名噪一时但又不足以名满江湖的角色统一划分为武林世家,等等.<br><br><br><br><br><br><br>',
                },
                jy_translate_changjingji: {
                    name: '场景',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;场景技是全局公共技能,根据金庸先生小说中发生重大事件的著名地点进行设计,设计思路通常与该重大事件相关.比如<天龙八部>中的杏子林,乔峰在此地被马夫人和全冠清等合伙拆穿契丹人身份,一时之间因为身份问题成为众矢之地,导致丐帮发生政变,故杏子林的场景技为【蒙冤】,技能内容为一名角色判定时,其判定结果反转.寓意乔峰在此众叛亲离.<br>&nbsp;&nbsp;&nbsp;&nbsp;玩家可以自行在金庸包菜单里场景技选项中设置场景变换的方式,可以设置为每隔X轮次进行变换等.<br><br><br><br><br><br><br>',
                },
                jy_translate_yanmenguan: {
                    name: '雁门关',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【边声】</font><b>锁定技.</b>汉人角色和异族角色对对方造成的伤害+1.免疫角色:萧峰、乔峰、绝萧峰、乔峰阿朱.<br><br><br><br><br><br><br>",
                },
                jy_translate_xinzilin: {
                    name: '杏子林',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【蒙冤】</font><b>锁定技.</b>汉人角色和异族角色对对方造成的伤害+1.免疫角色:萧峰、乔峰、绝萧峰、乔峰阿朱.<br><br><br><br><br><br><br>",
                },
                jy_translate_taohuadao_bp: {
                    name: '桃花岛',
                    info: "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;桃花岛在金庸扩展,既指帮派桃花岛,岛主为黄药师;又指场景桃花岛.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;[帮派技]<font style='color: #da701a'>【五运】</font><b>帮派技.桃花岛.</b>桃花岛角色判定牌生效后,你可以亮出牌堆顶五张牌,获得其中与判定牌花色一样的牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;[场景技]<font style='color: #da701a'>【遁甲】</font><b>场景技.桃花岛.锁定技.</b>场上非【桃花阵】的装备牌视为【桃花阵】、【桃花阵】视为【五行八卦阵】.<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>增益:</b>桃花岛的角色若未安装防具牌,其视为装备着【五行八卦阵】.<br><br><br><br><br><br><br>",
                },
                jy_translate_youxia_bp: {
                    name: '游侠',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【行侠】</font>出牌阶段限一次,你可以令一名角色摸X张牌(X为攻击范围内包含其的角色数量,其除外).<br><br><br><br><br><br><br>",
                },
                jy_translate_yueguangbaohe: {
                    name: '月光宝盒',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;至尊宝的专属衍生卡牌,宝物牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【月光宝盒】</font><b>锁定技.</b>当你的装备区里置入此牌后,你首次摸牌时,记录这些牌,直到你失去此宝物,你每次摸牌时,始终改为获得这些牌.<br><br><br><br><br><br><br>",
                },
                jy_translate_yungongliaoshang: {
                    name: '运功疗伤',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>正面延时锦囊牌.</b>出牌阶段,对一名其他角色使用.若判定结果为:♥️️,其回复一点体力;♦️️,其摸两张牌;♣️️,其使用一张防具牌(可替换原装备);♠️️️,视为其使用一张【酒】.<br><br><br><br><br><br><br>',
                },
                jy_translate_zouhuorumo: {
                    name: '走火入魔',
                    info: '<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>负面延时锦囊牌.</b>出牌阶段,对一名其他角色使用.若判定结果不为♠️️,其侠客技能于本回合内失效.<br><br><br><br><br><br><br>',
                },
                jy_translate_feijiang: {
                    name: '飞僵',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;飞僵是王凯旋的衍生角色,非常备角色库.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【盖棺】</font><b>锁定技.</b>你的回合内,仅执行摸牌阶段和弃牌阶段;你的手牌上限等于你的体力上限.<br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【出棺】</font><b>锁定技.</b>每当你不因使用或打出而失去牌后,你随机对一名人类角色造成一点伤害;若场上有<墨斗线>,则你发动本技能时,不能越界选择目标.<br><br><br><br><br><br><br>",
                },
                jy_translate_modou: {
                    name: '墨斗',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;王凯旋衍生宝物牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【墨斗】</font>出牌阶段限一次,你可选择两名角色,以这两名角色的连接线为界,<飞僵>不能越界对人类角色造成伤害.<br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;墨斗线即为因【墨斗】选择的两名角色之间的连接线.假如为2号位和5号位,那么3、4号位置的飞僵只能对2、3、4、5号位置的人类发动【出棺】,不能对6、7、8、1号位置的人类发动,即称为不能越界选择目标.<br><br><br><br><br>",
                },
                jy_translate_taomujian: {
                    name: '桃木剑',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;王凯旋衍生武器牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【桃木剑】</font><b>锁定技.</b>你使用【杀】对<飞僵>造成伤害时,此伤害+1.<br><br><br><br><br><br><br>",
                },
                jy_translate_luoyangchan: {
                    name: '洛阳铲',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;王凯旋衍生宝物牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【洛阳铲】</font>出牌阶段限一次,你可以获得一名<飞僵>所有的手牌,其对你造成X点伤害(X为其中的宝物牌数).<br><br><br><br><br><br><br>",
                },
                jy_translate_heilvtizi: {
                    name: '黑驴蹄子',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;王凯旋衍生宝物牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【黑驴蹄子】</font><b>锁定技.</b><飞僵>对你造成伤害时,取消之.<br><br><br><br><br><br><br>",
                },
                jy_translate_zhizunmojie: {
                    name: '至尊魔戒',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;史麦戈衍生宝物牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【至尊魔戒】</font><b>锁定技,</b>你的此牌被弃置后,你有50%几率使用之.<p><b>锁定技,</b>你成为其他角色伤害牌的唯一目标时,你随机与一名其他角色交换座次,若此时你不在来源攻击范围内,此牌无效.此牌结算完后存回复座次.<p><b>锁定技,</b>你摸牌时,改为摸3倍的牌;你的准备阶段、摸牌阶段结束时、弃牌阶段结束时、回合结束时,需弃置一张牌.<br><br><img style=width:280px src=extension/金庸群侠传/image/uiDialog/info_img/mojie.jpg><br><br><br><br><br><br><br>",
                },
                jy_translate_zheshibi: {
                    name: '和氏璧',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;师妃媗衍生宝物牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【和氏璧】</font><b>锁定技.</b>你不能成为伤害类普通锦囊牌的目标、防止你进入负面状态.出牌阶段,你可将你装备区里的此牌置入其他角色宝物栏里并摸一张牌.<br><br><br><br><br><br><br>",
                },
                jy_translate_yanshengjiu: {
                    name: '衍生酒',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;衍生酒指其他角色的衍生卡牌,不属于常备牌堆.在普通【酒】的基础上,有附加的其他效果.当前金庸包的衍生酒出自李白.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【兰陵酒】</font><b>锁定技,</b>出牌阶段,你使用【兰陵酒】后,你本回合使用的下一张杀伤害基数+1;你于濒死状态使用此酒后,额外回复一点体力.<p><p><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【屠苏酒】</font><b>锁定技,</b>出牌阶段,你使用【屠苏酒】后,你于本回合使用的下一张杀的伤害基数+1;你可以对濒死状态下的其他角色使用此牌;一名角色成为此牌的目标后,其于本局游戏中不能被横置和翻面.<p><p><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【五宝五花酒】</font><b>锁定技,</b>出牌阶段,你使用【五宝五花酒】后,你于本回合使用的下一张杀伤害基数+1;你于濒死状态使用此牌后,可以对伤害来源造成一点蛊毒伤害.<p><p><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【玉壶春】</font><b>锁定技,</b>出牌阶段,你使用【玉壶春】后,你于本回合使用的下一张杀伤害基数+1;你因此牌脱离濒死状态后或进入<酒状态>后,你可以将一张♣️️牌当【无极而生】使用.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【状元红】</font><b>锁定技,</b>出牌阶段,你使用【状元红】后,你本回合使用的下一张杀伤害基数+1;你使用此牌后,你可以令你的♥️️手牌数量加倍.<br><br><br><br><br><br><br>",
                },
                jy_translate_xiekangming_jing: {
                    name: '邪康敏·镜',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;邪康敏·镜是邪康敏的衍生镜像角色,取材自她的心魔.生前因作恶多端,施毒计间接害死阿朱,被阿紫划伤绝美脸蛋,并在伤口上涂满蜂蜜,招引虫蚁嗜咬,变得血肉模糊.康敏看见镜子中的自己犹如女鬼,惊厥而死.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【镜鬼】</font><b>锁定技.</b>始终跳过你的回合;邪康敏获得牌后,你摸等量的牌;你获得牌后,需将其中的装备牌、延时锦囊牌、多目标普通锦囊牌、暗器牌、毒药牌交给邪康敏;邪康敏的装备区里置入装备牌后,你使用等量的装备牌;邪康敏回复体力后,你回复等量体力;邪康敏受到伤害后、失去体力后,你失去等量体力;邪康敏使用的目标唯一的基本牌或普通锦囊牌结算完后,若你有同名手牌,你须对该目标使用一张此牌(无距离和合法限制);你击杀角色时,改为由邪康敏击杀之.<br><br><img style=width:340px src=extension/金庸群侠传/character/yuanban/tlbb_xie_kangmin_jing.jpg><br><br><br><br><br>",
                },
                jy_translate_wukong: {
                    name: '悟空',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;至尊宝的专属衍生角色.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【情劫】</font><b>锁定技.</b>你的♠️️牌视为♥️️;当你成为♥️️基本牌、普通锦囊牌的唯一目标时或你使用这些牌指定其他角色为唯一目标时,你需失去一点体力或减一点体力上限(若你体力上限不大于三则跳过此步),此牌对你或目标额外结算一次.<br><br><img style=width:340px src=extension/金庸群侠传/character/illustration/ywhy_wukong.jpg><br><br><br><br><br>",
                },
                jy_translate_yingzheng: {
                    name: '嬴政',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;赵盘专属衍生角色,觉醒后变为嬴政.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【归秦】</font><b>锁定技.</b>摸牌阶段,你多摸等同于存活的秦朝角色数的牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【登殿】</font>出牌阶段限一次,若场上有非秦朝其他角色存活,你可以使用侠客牌上的一张【秦扫六合】.若你体力上限大于一,你减一点体力上限.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【大统】</font><b>盟主技.</b>其他秦势力角色于回合外获得牌后,其可以令你摸一张牌(每回合限一次).<br><br><img style=width:340px src=extension/金庸群侠传/character/yuanban/ywhy_yingzheng.jpg><br><br><br><br><br>",
                },
                jy_translate_gulu: {
                    name: '咕噜',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;史麦戈的衍生角色.史麦戈原本是一个快乐又善良的霍比特人,和好友外出钓鱼的过程中,好友无意间获得至尊魔戒,史麦戈瞬间被魔戒吸引,为了抢夺魔戒而击杀好友.他自己也被魔戒强大的魔力所折磨,无法再适应霍比特人的生活,逃亡到山野变成不人不鬼的样子,人称咕噜.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【魔性】</font><b>锁定技.</b>当你的装备区里置入【至尊魔戒】后,游戏结束,你胜利,其他角色失败.<b>锁定技,</b>你视为拥有【至尊魔戒】的技能(第三个子技能分号以后的内容除外).<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【贪餮】</font><b>锁定技,</b>你使用牌无距离限制,你使用基本牌或普通锦囊牌的额定目标数+1;你使用牌指定其他角色为目标时,此牌有50%的几率改为【妙手空空】.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【生啖】</font>每局限三次,你进入濒死状态后,你可以吃掉一只宠物,回复2点体力(被你依此法吃掉的宠物永久移除本局游戏,不能再因【宠物精灵】或其他技能出场).<br><br><img style=width:340px src=extension/金庸群侠传/character/yuanban/ywhy_gulu.jpg><br><br><br><br><br>",
                },
                jy_translate_shengcunyouxi: {
                    name: '生存游戏',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;<生存游戏>是小丑的衍生卡牌JOKER的技能.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【生存游戏】</font><b>锁定技.</b>你获得此牌后,若你不拥有技能〖王牌〗,根据此牌花色进行一场<生存游戏>,将此牌洗入牌堆.♥️️:你弃置所有牌;♠️️:你进行一次【生死符】判定且生效条件改为非♠️️2～9;♦️️:若小丑存活,视为其对你使用当前游戏环境中含有的伤害类卡牌各一张;♣️️:直到你下回合开始,所有技能无效.<br><br><br><br><br>",
                },
                jy_translate_limao: {
                    name: '狸猫',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;狸猫是郭槐的衍生角色,以副将的形式出场,属于冥兽.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【凶兆】</font><b>锁定技.</b>每轮游戏开始时,你记录3张伤害类卡牌的名字(若已有记录则先清除之).每当你成为这些牌的目标时,你受到1点无来源的伤害.<br><br><img style=width:340px src=extension/金庸群侠传/character/yuanban/ywhy_limao.jpg><br><br><br><br>",
                },
                jy_translate_baishoujingling: {
                    name: '百兽精灵',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;百兽精灵是金庸包原创的一种普通锦囊牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【百兽精灵】</font>单将模式的人类角色在出牌阶段对自己使用,从宠物库只随机获得一只宠物成为你的副将.木乃伊角色的出牌阶段,可以使用一张此牌来移除一名人类角色的宠物副将.<br><br><img style=width:340px src=extension/金庸群侠传/character/yuanban/ywhy_limao.jpg><br><br><br><br>",
                },
                jy_translate_qinglongyutianzhen: {
                    name: '青龙御天阵',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;青龙御天阵是陆乘风的衍生防具牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【青龙御天阵】</font><b>锁定技,</b>你不能成为黑色普通锦囊牌的目标;防止你受到寒冰伤害;准备阶段,你可以获得一项名字中含青、龙、御、天之一的技能,直到下回合开始.<b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.<br><br><img style=width:280px src=extension/金庸群侠传/image/uiDialog/info_img/qinglongyutianzhen.jpg><br><br><br><br>",
                },
                jy_translate_baihulvweizhen: {
                    name: '白虎履尾阵',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;白虎履尾阵是陆乘风的衍生防具牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【白虎履尾阵】</font><b>锁定技,</b>你不能成为负面延时锦囊牌的目标;防止你受到邪功伤害;准备阶段,你可以获得一项名字中含白、虎、履、尾之一的技能,直到下回合开始.<b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.<br><br><br><img style=width:280px src=extension/金庸群侠传/image/uiDialog/info_img/baihulvweizhen.jpg><br><br><br><br>",
                },
                jy_translate_zhuquejinghongzhen: {
                    name: '朱雀惊鸿阵',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;朱雀惊鸿阵是陆乘风的衍生防具牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【朱雀惊鸿阵】</font><b>锁定技,</b>你不能成为暗器牌的目标;防止你受到火焰伤害;准备阶段,你可以获得一项名字中含朱、雀、惊、鸿之一的技能,直到下回合开始.<b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.<br><br><br><img style=width:280px src=extension/金庸群侠传/image/uiDialog/info_img/zhuquejinghongzhen.jpg><br><br><br><br>",
                },
                jy_translate_xuanwuqianyuanzhen: {
                    name: '玄武潜渊阵',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;玄武潜渊阵是陆乘风的衍生防具牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【玄武潜渊阵】</font><b>锁定技,</b>你不能成为毒药牌的目标;防止你受到蛊毒伤害;准备阶段,你可以获得一项名字中含玄、武、潜、渊之一的技能,直到下回合开始.<b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.<br><br><br><img style=width:280px src=extension/金庸群侠传/image/uiDialog/info_img/xuanwuqianyuanzhen.jpg><br><br><br><br>",
                },
                jy_translate_yanmenyuzhi: {
                    name: '雁门余字',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;雁门余字是智光大师的一张衍生普通锦囊牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【雁门余字】</font><b>锁定技,</b>你使用此牌后,根据你的身份立即获得一顶技能:<br>刺客--〖祸延〗;<br>奸细--〖谣谍〗;<br>护法--〖缚龙〗;<br>盟主--〖伏击〗.<br>销毁此牌.<br><br><br><img style=width:280px src=extension/金庸群侠传/image/uiDialog/info_img/yanmenyuzhi.jpg><br><br><br><br>",
                },
                jy_translate_qixing: {
                    name: '七星',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;每一枚七星代表一个绝王重阳的衍生技能.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【天枢A】</font>一名角色的摸牌阶段结束时,你可以移除此标记,令其有60%的几率额外执行一个摸牌阶段.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【天璇3】</font>其他角色受到伤害后,你可以移除此标记,令其永久免疫一种属性伤害.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【天玑5】</font>一名角色的判定阶段开始时,你可以移除此标记,令其跳过此阶段.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【天权7】</font>出牌阶段,你可以移除此标记,令一名角色使用一张【天罡北斗阵】.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【玉衡9】</font>一名角色的弃牌阶段开始,你可以移除此标记,令其跳过此阶段.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【开阳J】</font>一名角色在回合内使用【杀】后,你可以移除此标记,令此杀不计入次数.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【摇光K】</font>一名角色的结束阶段,你可以移除此标记,令其获得三张奇数点数的牌.<br><br><br><br>",
                },
                jy_translate_yayun: {
                    name: '押韵',
                    info: "<br>yunjiao:{<br>&nbsp;&nbsp;&nbsp;&nbsp;'一麻':['a','ia','ua'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'二波':['o','e','uo'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'三皆':['ie','üe'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'四开':['ai','uai'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'五微':['ei','ui'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'六豪':['ao','iao'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'七尤':['ou','iu'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'八寒':['an','ian','uan','üan'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'九文':['en','in','un','ün'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'十唐':['ang','iang','uang'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'十一庚':['eng','ing','ong','ung'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'十二齐':['i','er','ü'],<br>&nbsp;&nbsp;&nbsp;&nbsp;'十三支':['-i'],'十四姑':['u'],<br>},<br><br><br><br>",
                },
                jy_translate_tulongdao: {
                    name: '屠龙刀',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;屠龙刀是金庸包的一种武器牌.出自金庸小说<倚天屠龙记>,是郭靖黄蓉夫妇在襄阳城破时,以玄铁重剑重铸而来,并将武穆遗书和九阴真经封藏其中.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【屠龙刀】</font>你使用【杀】指定目标时,可以令目标抵消此杀的方式改为打出一张【杀】.其他角色打出的【杀】进入弃牌堆前,你可以获得之.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/tulongdao.jpg><br><br><br><br><br><br>",
                },
                jy_translate_yitianjian: {
                    name: '倚天剑',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;倚天剑是金庸包的一种武器牌.出自金庸小说<倚天屠龙记>,是郭靖黄蓉夫妇在襄阳城破时,以玄铁重剑重铸而来,削铁如泥,后成为峨眉派的镇派之宝.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【倚天剑】</font>你成为【杀】的目标时,你可以对目标使用一张杀,若你使用的杀造成了伤害,其对你使用的杀无效.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/yitianjian.jpg><br><br><br><br><br><br>",
                },
                jy_translate_dagoubang: {
                    name: '打狗棒',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;打狗棒是金庸包的一种武器牌.打狗棒为丐帮帮主持有,是帮主的信物、权力的象征.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【打狗棒】</font>你使用【杀】时,可以额外指定一名目标.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/dagoubang.jpg><br><br><br><br><br><br>",
                },
                jy_translate_wumuyishu: {
                    name: '武穆遗书',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;武穆遗书是金庸包的一种宝物牌,属于秘籍牌.为金庸根据古书所杜撰,相传为宋代的抗金名将岳飞所作的兵书.藏于铁掌山第二指节山洞中,金国王爷为争夺<武穆遗书>,学习里面的兵法称霸中原而大动干戈;在<倚天屠龙记>中,武穆遗书由郭靖、黄蓉藏于屠龙刀中.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【武穆遗书】</font>出牌阶段限一次,你可以视为使用一张普通锦囊牌,弃置此牌.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/wumuyishu.jpg><br><br><br><br><br><br>",
                },
                jy_translate_yitianhanfengjian: {
                    name: '倚天寒锋剑',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;倚天寒锋剑是冯默风、邪周芷若等的衍生武器牌,属于倚天剑的强化版.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【倚天寒锋剑】</font>你使用【杀】指定目标时,可以声明一种花色,目标需弃置所有此花色的牌.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/yitianhanfengjian.jpg><br><br><br><br><br><br>",
                },
                jy_translate_tushidao: {
                    name: '伏龙屠狮刀',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;伏龙屠狮刀是冯默风、邪周芷若等的衍生武器牌,属于屠龙刀的强化版.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【伏龙屠狮刀】</font>你使用【杀】时,你可以令抵消此牌的方式改为打出由你声明的任意基本牌.<b>锁定技,</b>其他角色打出的牌进入弃牌堆前,你获得之.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/tushidao.jpg><br><br><br><br><br><br>",
                },
                jy_translate_xuantieshenghuoling: {
                    name: '玄铁圣火令',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;玄铁圣火令是冯默风的衍生武器牌,属于圣火令的强化版.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【玄铁圣火令】</font>你使用黑色【杀】造成伤害后,可弃置目标区域内一张牌,你使用红色【杀】造成的普通伤害改为火焰伤害,你可额外使用24张【杀】.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/xuantieshenghuoling.jpg><br><br><br><br><br><br>",
                },
                jy_translate_wuxingbaguazhen: {
                    name: '五行八卦阵',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;五行八卦阵是冯默风的衍生防具牌,属于桃花阵的强化版.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【五行八卦阵】</font>当你需要使用或打出【闪】时,你可以判定,若不为♣️️,视为你使用或打出了此牌.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/wuxingbaguazhen.jpg><br><br><br><br><br><br>",
                },
                jy_translate_xiangmoxzhang: {
                    name: '降魔绿玉杖',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;降魔绿玉杖是冯默风的衍生武器牌,属于打狗棒的强化版.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【降魔绿玉杖】</font>你使用的【杀】可以额外选择一个目标,若如此做,目标不能使用或打出牌,直到此牌结算完毕.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/xiangmoxzhang.jpg><br><br><br><br><br><br>",
                },
                jy_translate_baishoujia: {
                    name: '厉刃百兽甲',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;厉刃百兽甲是冯默风的衍生防具牌,属于软猬甲的强化版.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【厉刃百兽甲】</font><b>锁定技.</b>你每次受到大于一的伤害时,若有伤害来源且并不为你.你反弹多余的伤害.当你失去装备区里的【厉刃百兽甲】时,你回复1点体力且视为对至多两名合法的其他角色使用一张普通【杀】.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/baishoujia.jpg><br><br><br><br><br><br>",
                },
                jy_translate_jiuyinzhenjing: {
                    name: '九阴真经',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;九阴真经是金庸包的一张宝物牌,属于秘籍牌.<九阴真经>分为上、下两卷,上卷为内功基础,下卷为武功招式(黄裳版),是金庸小说中最负盛名的武学秘籍.在金庸1957年旧版<射雕英雄传>中,<九阴真经>创造者为达摩祖师,内容以武功招式为主.在1980年修订版以及2003年新修版中,则修改为北宋徽宗时期黄裳在刻录<万寿道藏>时所悟.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【九阴真经】</font><b>锁定技.</b>你的出牌阶段摸牌数+1;手牌上限+1.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/jiuyin.jpg><br><br><br><br><br><br>",
                },
                jy_translate_jiuyangzhenjing: {
                    name: '九阳真经',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;九阳真经是金庸包的一张宝物牌,属于秘籍牌.<九阳真经>是金庸武侠小说,射雕三部曲中的隐藏秘笈,在<倚天屠龙记>大放异彩,乃一本绝顶内功.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【九阳真经】</font><b>锁定技.</b>每当你的装备区里置入一张装备牌后,你获得一张点数为9的牌.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/jiuyang.jpg><br><br><br><br><br><br>",
                },
                jy_translate_ziqingbaojian: {
                    name: '紫青宝剑',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;紫青宝剑是紫霞的衍生武器牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【紫青宝剑】</font><b>锁定技,</b>你使用【杀】指定目标后,目标有10%的几率不能抵消之;此【杀】造成伤害后,你可以令目标弃置其区域内每种花色的牌各一张.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/ziqingbaojian.jpg><br><br><br><br><br><br>",
                },
                jy_translate_feiyufu: {
                    name: '飞鱼服',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;飞鱼服是包来硬(应无求)的衍生防具牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【飞鱼服】</font><b>锁定技,</b>你不能成为黑色多目标锦囊牌的目标;出牌阶段限一次,你可以将一张黑色手牌当一张黑色多目标锦囊牌使用.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/feiyufu.jpg><br><br><br><br><br><br>",
                },
                jy_translate_xiuchundao: {
                    name: '绣春刀',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;绣春刀是金庸包的一张武器牌.绣春刀是明朝锦衣卫使用的官方武器.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【绣春刀】</font><b>锁定技,</b>处于负面状态的角色不能抵消你使用的【杀】.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/xiuchundao.jpg><br><br><br><br><br><br>",
                },
                jy_translate_baimangbian: {
                    name: '白蟒鞭',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;白蟒鞭是金庸包的一张武器牌,是邪周芷若、陈玄风梅超风等人的衍生牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【白蟒鞭】</font>你使用的【杀】指定目标的额定数为3,且指定目标时,可以横置其中未横置的目标.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/baimangbian.jpg><br><br><br><br><br><br>",
                },
                jy_translate_jueqingdan: {
                    name: '绝情丹',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;绝情丹是邪公孙止的专属衍生卡牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【绝情丹】</font>抵消一张【情花】的效果并令【情花】的目标选择回复一点体力或摸两张牌.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/jueqingdan.jpg><br><br><br><br><br><br>",
                },
                jy_translate_duanchangcao: {
                    name: '断肠草',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;断肠草是邪公孙止的专属衍生卡牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【断肠草】</font>抵消一张【情花】的效果并令【情花】的使用者选择失去一点体力或弃置两张牌.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/duanchangcao.jpg><br><br><br><br><br><br>",
                },
                jy_translate_xiujian: {
                    name: '袖箭',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;袖箭是一种暗器牌,是无情的衍卡牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【袖箭】</font>当一名角色使用【杀】指定目标时,你可以为此【杀】再增加两名由你选择的合法的目标.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/xiujian.jpg><br><br><br><br><br><br>",
                },
                jy_translate_tiejili: {
                    name: '铁蒺藜',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;铁蒺藜是一种暗器牌,是无情的衍卡牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【铁蒺藜】</font>当一名角色使用牌指定唯一目标后,若该角色与目标之间(按最短路径)之间存在其他角色,你令其弃置X张牌(X为其与目标之间的角色数).<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/tiejili.jpg><br><br><br><br><br><br>",
                },
                jy_translate_zhuihunding: {
                    name: '追魂钉',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;追魂钉是一种暗器牌,是无情的衍卡牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【追魂钉】</font>一名角色的弃牌阶段开始时,你可以令其只能保留一种花色的手牌.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/zhuihunding.jpg><br><br><br><br><br><br>",
                },
                jy_translate_meihuabiao: {
                    name: '♣️️镖',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;♣️️镖是一种暗器牌,是无情的衍卡牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【♣️️镖】</font>其他角色受到伤害时,若其区域内有♣️️牌,你令此伤害的点数加其区域内♣️️牌的数量.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/meihuabiao.jpg><br><br><br><br><br><br>",
                },
                jy_translate_kongqueling: {
                    name: '孔雀翎',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;孔雀翎是一种暗器牌,是无情的衍卡牌.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【孔雀翎】</font>其他角色受到普通伤害时,你可以将此伤害改为蛊毒伤害,其随机失去各个区域里各一张牌.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/kongqueling.jpg><br><br><br><br><br><br>",
                },
                jy_translate_bixian: {
                    name: '笔仙',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;笔仙是李玉甄的衍生角色,会通过技能【请仙】召唤出来.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【扶鸾】</font>除李玉甄外的角色回合开始时,其需询问你如下问题中的两个:<p>1.本回合我会对谁使用牌？(你需随机选择一名角色作为答案)<p>2.本回合我会使用什么类型的牌？(你需随机回答一种类型如基本牌)<p>3.本回合我会弃置什么牌？(你需从其手牌中随机选择一张牌名来回答)<p>4.本回合我会对谁造成伤害？(你需随机选择除其以外的一名角色作为答案)<p>其回合结束时,若本回合内你的预言实现:2个,其摸两张牌;0个,其需选择失去1点体力或将两张牌置入弃牌堆.<p>每轮开始时,李玉甄可以询问你如下问题中的一个:<p>1.本轮谁会死亡？(你需随机选择一名角色作为答案)<p>2.本轮谁会击杀角色？(你需随机选择一名角色作为答案)<p>本轮结束时,若你的预言实现,李玉甄本回合额外获得一个出牌阶段.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【送仙】</font>李玉甄死亡后,或场上只剩下一个阵营时,你移除游戏.<br><br><img style=width:320px src=extension/金庸群侠传/character/yuanban/ywhy_bixian.jpg><br><br><br><br><br><br>",
                },
                jy_translate_tieqiangmiao: {
                    name: '铁枪庙',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;铁枪庙是金庸扩展中的一个场景,在金庸<射雕>和<神雕>均有提及,杨康死于此地.据说是纪念五代名将铁枪王彦章而建.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【轶事】</font><b>场景技.铁枪庙.</b>所有角色造成的属性伤害+1.<br>&nbsp;&nbsp;&nbsp;&nbsp;增益:名字中有<黄蓉>的角色在此场景下视为装备了【厉刃百兽甲】.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【厉刃百兽甲】</font>你受到大于1点的伤害时,反弹余的伤害;此牌离开你的装备区后,你回复一点体力且视为对至多两名其他角色各使用一张杀.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/tieqiangmiao.jpg><br><br><br><br><br><br>",
                },
                jy_translate_tiejiangpu: {
                    name: '铁匠铺',
                    info: "<br>&nbsp;&nbsp;&nbsp;&nbsp;铁匠铺是金庸扩展中的一个场景,是冯默风锻铸武器的地方.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font style='color: #da701a'>【浇铸】</font><b>场景技.铁匠铺.锁定技.</b>你装备区里的武器攻击范围+2.<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>增益:</b>桃花岛的角色出牌阶段限一次,其可以随机获得一张冯默风的衍生牌.<br><br><img style=width:320px src=extension/金庸群侠传/image/uiDialog/info_img/tiejiangpu.jpg><br><br><br><br><br><br>",
                },
            };
            lib.arenaReady.push(async () => {
                let obj = Object.keys(Object.assign({ ...lib.skill }, { ...lib.card })).filter((name) => {
                    if (/ywhy_|qtpz_|ldj_|jue_|xajh_|yttl_|sdxl_|sdyx_|tlbb_|jy_/.test(name) == true) return true;
                    return false;
                });
                let colorx = game.getExtensionConfig('金庸群侠传', 'jy_changeJuesePageUIColor');
                //alert(colorx)
                for await (let name of obj) {
                    if (lib.translate[name + '_info'] && lib.translate[name + '_info'].length) {
                        let str = lib.translate[name + '_info'];
                        if (str.includes('降魔绿玉杖')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_xiangmoxzhang');\">降魔绿玉杖</a>`;
                            str = str.replace(/降魔绿玉杖/, str2);
                        }
                        if (str.includes('厉刃百兽甲')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_baishoujia');\">厉刃百兽甲</a>`;
                            str = str.replace(/厉刃百兽甲/, str2);
                        }
                        if (str.includes('绝情丹')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_jueqingdan');\">绝情丹</a>`;
                            str = str.replace(/绝情丹/, str2);
                        }
                        if (str.includes('七星')) {
                            let num = str.indexOf('七星');
                            if (str[num + 2] != '钉') {
                                let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_qixing');\">七星</a>`;
                                str = str.replace(/七星/, str2);
                            }
                        }
                        if (str.includes('七星钉')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_qixingding');\">七星钉</a>`;
                            str = str.replace(/七星钉/, str2);
                        }
                        if (str.includes('【袖箭】')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_xiujian');\">【袖箭】</a>`;
                            str = str.replace(/【袖箭】/, str2);
                        }
                        if (str.includes('铁蒺藜')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_tiejili');\">铁蒺藜</a>`;
                            str = str.replace(/铁蒺藜/, str2);
                        }
                        if (str.includes('铁枪庙')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_tieqiangmiao');\">铁枪庙</a>`;
                            str = str.replace(/铁枪庙/, str2);
                        }
                        if (str.includes('铁匠铺')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_tiejiangpu');\">铁匠铺</a>`;
                            str = str.replace(/铁匠铺/, str2);
                        }
                        if (str.includes('追魂钉')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_zhuihunding');\">追魂钉</a>`;
                            str = str.replace(/追魂钉/, str2);
                        }
                        if (str.includes('♣️️镖')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_meihuabiao');\">♣️️镖</a>`;
                            str = str.replace(/♣️️镖/, str2);
                        }
                        if (str.includes('孔雀翎')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_kongqueling');\">孔雀翎</a>`;
                            str = str.replace(/孔雀翎/, str2);
                        }
                        if (str.includes('笔仙')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_bixian');\">笔仙</a>`;
                            str = str.replace(/笔仙/, str2);
                        }
                        if (str.includes('断肠草')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_duanchangcao');\">断肠草</a>`;
                            str = str.replace(/断肠草/, str2);
                        }
                        if (str.includes('飞鱼服')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_feiyufu');\">飞鱼服</a>`;
                            str = str.replace(/飞鱼服/, str2);
                        }
                        if (str.includes('绣春刀')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_xiuchundao');\">绣春刀</a>`;
                            str = str.replace(/绣春刀/, str2);
                        }
                        if (str.includes('白蟒鞭')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_baimangbian');\">白蟒鞭</a>`;
                            str = str.replace(/白蟒鞭/, str2);
                        }
                        if (str.includes('九阴真经')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_jiuyinzhenjing');\">九阴真经</a>`;
                            str = str.replace(/九阴真经/, str2);
                        }
                        if (str.includes('紫青宝剑')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_ziqingbaojian');\">紫青宝剑</a>`;
                            str = str.replace(/紫青宝剑/, str2);
                        }
                        if (str.includes('九阳真经')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_jiuyangzhenjing');\">九阳真经</a>`;
                            str = str.replace(/九阳真经/, str2);
                        }
                        if (str.includes('屠龙刀')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_tulongdao');\">屠龙刀</a>`;
                            str = str.replace(/屠龙刀/, str2);
                        }
                        if (str.includes('倚天剑')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_yitianjian');\">倚天剑</a>`;
                            str = str.replace(/倚天剑/, str2);
                        }
                        if (str.includes('打狗棒')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_dagoubang');\">打狗棒</a>`;
                            str = str.replace(/打狗棒/, str2);
                        }
                        if (str.includes('武穆遗书')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_wumuyishu');\">武穆遗书</a>`;
                            str = str.replace(/武穆遗书/, str2);
                        }
                        if (str.includes('倚天寒锋剑')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_yitianhanfengjian');\">倚天寒锋剑</a>`;
                            str = str.replace(/倚天寒锋剑/, str2);
                        }
                        if (str.includes('伏龙屠狮刀')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_tushidao');\">伏龙屠狮刀</a>`;
                            str = str.replace(/伏龙屠狮刀/, str2);
                        }
                        if (str.includes('玄铁圣火令')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_xuantieshenghuoling');\">玄铁圣火令</a>`;
                            str = str.replace(/玄铁圣火令/, str2);
                        }
                        if (str.includes('五行八卦阵')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_wuxingbaguazhen');\">五行八卦阵</a>`;
                            str = str.replace(/五行八卦阵/, str2);
                        }
                        if (str.includes('负面延时锦囊')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_fumianyanshijinnangpai');\">负面延时锦囊</a>`;
                            str = str.replace(/负面延时锦囊/, str2);
                        }
                        if (str.includes('青龙御天阵')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_qinglongyutianzhen');\">青龙御天阵</a>`;
                            str = str.replace(/青龙御天阵/, str2);
                        }
                        if (str.includes('白虎履尾阵')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_baihulvweizhen');\">白虎履尾阵</a>`;
                            str = str.replace(/白虎履尾阵/, str2);
                        }
                        if (str.includes('押韵')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_yayun');\">押韵</a>`;
                            str = str.replace(/押韵/, str2);
                        }
                        if (str.includes('雁门余字')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_yanmenyuzhi');\">雁门余字</a>`;
                            str = str.replace(/雁门余字/, str2);
                        }
                        if (str.includes('朱雀惊鸿阵')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_xuanwuqianyuanzhen');\">朱雀惊鸿阵</a>`;
                            str = str.replace(/朱雀惊鸿阵/, str2);
                        }
                        if (str.includes('玄武潜渊阵')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_zhuquejinghongzhen');\">玄武潜渊阵</a>`;
                            str = str.replace(/玄武潜渊阵/, str2);
                        }
                        if (str.includes('和氏璧')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_zheshibi');\">和氏璧</a>`;
                            str = str.replace(/和氏璧/, str2);
                        }
                        if (str.includes('邪康敏·镜')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_xiekangming_jing');\">邪康敏·镜</a>`;
                            str = str.replace(/邪康敏·镜/, str2);
                        }
                        if (str.includes('悟空')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_wukong');\">悟空</a>`;
                            str = str.replace(/悟空/, str2);
                        }
                        if (str.includes('至尊魔戒')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_zhizunmojie');\">至尊魔戒</a>`;
                            str = str.replace(/至尊魔戒/, str2);
                        }
                        if (str.includes('洛阳铲')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_luoyangchan');\">洛阳铲</a>`;
                            str = str.replace(/洛阳铲/, str2);
                        }
                        if (str.includes('狸猫')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_limao');\">狸猫</a>`;
                            str = str.replace(/狸猫/, str2);
                        }
                        if (str.includes('百兽精灵')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_baishoujingling');\">百兽精灵</a>`;
                            str = str.replace(/百兽精灵/, str2);
                        }
                        if (str.includes('嬴政')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_yingzheng');\">嬴政</a>`;
                            str = str.replace(/嬴政/, str2);
                        }
                        if (str.includes('咕噜')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_gulu');\">咕噜</a>`;
                            str = str.replace(/咕噜/, str2);
                        }
                        if (str.includes('生存游戏')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_shengcunyouxi');\">生存游戏</a>`;
                            str = str.replace(/生存游戏/, str2);
                        }
                        if (str.includes('桃木剑')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_taomujian');\">桃木剑</a>`;
                            str = str.replace(/桃木剑/, str2);
                        }
                        if (str.includes('黑驴蹄子')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_heilvtizi');\">黑驴蹄子</a>`;
                            str = str.replace(/黑驴蹄子/, str2);
                        }
                        if (str.includes('墨斗')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_modou');\">墨斗</a>`;
                            str = str.replace(/墨斗/, str2);
                        }
                        if (str.includes('衍生酒')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_yanshengjiu');\">衍生酒</a>`;
                            str = str.replace(/衍生酒/, str2);
                        }
                        if (str.includes('帮派技')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_bangpaiji');\">帮派技</a>`;
                            str = str.replace(/帮派技/, str2);
                        }
                        if (str.includes('月光宝盒')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_yueguangbaohe');\">月光宝盒</a>`;
                            str = str.replace(/月光宝盒/, str2);
                        }
                        if (str.includes('运功疗伤')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_yungongliaoshang');\">运功疗伤</a>`;
                            str = str.replace(/运功疗伤/, str2);
                        }
                        if (str.includes('走火入魔')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_zouhuorumo');\">走火入魔</a>`;
                            str = str.replace(/走火入魔/, str2);
                        }
                        if (str.includes('飞僵')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_feijiang');\">飞僵</a>`;
                            str = str.replace(/飞僵/, str2);
                        }
                        if (str.includes('杏子林')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_xinzilin');\">杏子林</a>`;
                            str = str.replace(/杏子林/, str2);
                        }
                        if (str.includes('桃花岛')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_taohuadao_bp');\">桃花岛</a>`;
                            str = str.replace(/桃花岛/, str2);
                        }
                        if (str.includes('游侠')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_youxia_bp');\">游侠</a>`;
                            str = str.replace(/游侠/, str2);
                        }
                        if (str.includes('雁门关')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_yanmenguan');\">雁门关</a>`;
                            str = str.replace(/雁门关/, str2);
                        }
                        if (str.includes('场景')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_changjingji');\">场景</a>`;
                            str = str.replace(/场景/, str2);
                        }
                        if (str.includes('暗器牌')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_anqi');\">暗器牌</a>`;
                            str = str.replace(/暗器牌/, str2);
                        }
                        if (str.includes('毒药牌')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_duyao');\">毒药牌</a>`;
                            str = str.replace(/毒药牌/, str2);
                        }
                        if (str.includes('秘籍牌')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_miji');\">秘籍牌</a>`;
                            str = str.replace(/秘籍牌/, str2);
                        }
                        if (str.includes('负面状态')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_fumian');\">负面状态</a>`;
                            str = str.replace(/负面状态/, str2);
                        }
                        if (str.includes('异族')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_yizu');\">异族</a>`;
                            str = str.replace(/异族角色/, str2);
                        }
                        if (str.includes('汉人')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_hanren');\">汉人</a>`;
                            str = str.replace(/汉人角色/, str2);
                        }
                        if (str.includes('少林技能')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_shaolin_skill');\">少林技能</a>`;
                            str = str.replace(/少林技能/, str2);
                        }
                        if (str.includes('太玄经')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_taixuanjing');\">太玄经</a>`;
                            str = str.replace(/太玄经/, str2);
                        }
                        if (str.includes('长恨歌')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_changhenge');\">长恨歌</a>`;
                            str = str.replace(/长恨歌/, str2);
                        }
                        if (str.includes('人类')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_renlei');\">人类</a>`;
                            str = str.replace(/人类/, str2);
                        }
                        if (str.includes('行尸')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_xingshi');\">行尸</a>`;
                            str = str.replace(/行尸/, str2);
                        }
                        if (str.includes('木乃伊')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_munaiyi');\">木乃伊</a>`;
                            str = str.replace(/木乃伊/, str2);
                        }
                        if (str.includes('唤兽巫术')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_huanshouwushu');\">唤兽巫术</a>`;
                            str = str.replace(/唤兽巫术/, str2);
                        }
                        if (str.includes('酒令')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_xjl');\">酒令</a>`;
                            str = str.replace(/酒令/, str2);
                        }
                        if (str.includes('押韵接龙')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_jiuling');\">押韵接龙</a>`;
                            str = str.replace(/押韵接龙/, str2);
                        }
                        if (str.includes('北斗归位')) {
                            let str2 = `<a style='color:${colorx ? colorx : '#c06d3b'}' href=\"javascript:window.game_jy_openDialog('jy_translate_beidouguiwei');\">北斗归位</a>`;
                            str = str.replace(/北斗归位/, str2);
                        }
                        lib.translate[name + '_info'] = str;
                    }
                }
                for (var i in lib.translate) {
                    var info = lib.skill[i];//QQQ
                    if (/ywhy_|qtpz_|ldj_|jue_|xajh_|yttu_|sdxl_|sdyx_|jycw_|tlbb_|jydiy_/.test(i) == false) {
                        if (info && !info.jy_bangpai && !info.jy_changjin) continue;
                    }
                    if (lib.translate[i] && lib.translate[i].length && i.includes('_info')) {
                        lib.translate[i] = game.jy_translateNamex(lib.translate[i]);
                    }
                }
                for (var i in lib.skill) {
                    let info = get.info(i);
                    if (/ywhy_|qtpz_|ldj_|jue_|xajh_|yttu_|sdxl_|sdyx_|jycw_|tlbb_|jydiy_/.test(i) == false) {
                        if (info && !info.jy_bangpai && !info.jy_changjin) continue;
                    }
                    if (typeof lib.skill[i].prompt == 'string') {
                        lib.skill[i].prompt = game.jy_translateNamex(lib.skill[i].prompt);
                    }
                }
            });
            window.game_jy_openDialog = function (str) {
                game.playAudio('../extension/金庸群侠传/image/juese_TenUI/jy_choosebutton.mp3');
                var pbg = ui.create.div('.jyqxz_juese_skins_div ', ui.window);
                pbg.style.zIndex = 51;
                var obj = ui.create.div('.jy-dialog', pbg);
                obj.style.transformOrigin = 'center';
                var num = get.rand(0, 13);
                var url = 'extension/金庸群侠传/image/uiDialog/';
                var url2 = 'jy_info';
                obj.style.backgroundImage = 'url(' + url + '' + url2 + '' + num + '.png)';
                window.addEventListener(
                    'resize',
                    function () {
                        var width = document.body.clientWidth;
                        var height = document.body.clientHeight;
                        if (obj) {
                            obj.style.transform = 'translate(-50%, -50%) scale(' + Math.min(height / 1440, width / 2560) * 4 + ')';
                        }
                    },
                    false
                );
                var dialog = ui.create.div('.jy-dialog-name', obj);
                var text = ui.create.div('.jy-dialog-text', obj);
                if (typeof jy_translationName[str] != 'undefined') {
                    dialog.innerHTML = jy_translationName[str].name;
                    text.innerHTML = jy_translationName[str].info;
                } else {
                    if (typeof lib.translate[str] != 'undefined' || typeof lib.translate[str + '_info'] != 'undefined') {
                        if (lib.translate[str]) dialog.innerHTML = lib.translate[str];
                        if (lib.translate[str + '_info']) text.innerHTML = lib.translate[str + '_info'];
                    } else {
                        pbg.remove();
                        throw new Error(str + '参数不存在,请检查!');
                    }
                }
                var node = ui.create.div('.jy-dialog-remove', obj);
                node.onclick = function () {
                    pbg.remove();
                };
                pbg.onclick = function () {
                    pbg.remove();
                };
                ui.window.appendChild(pbg);
            };
            //摘自<扩展ol>
            game.jy_bolSay = function (str, num, num2) {
                if (game.game_bolSayDialog_height == undefined) game.game_bolSayDialog_height = -45;
                if (game.game_bolSayDialog_num == undefined) game.game_bolSayDialog_num = 0;
                game.game_bolSayDialog_num++;
                var func = function () {
                    game.game_bolSayDialog_onOpened = true;
                    game.game_bolSayDialog_height += 45;
                    var dialog = ui.create.dialog('hidden');
                    dialog.classList.add('static');
                    dialog.add('' + str + '');
                    dialog.classList.add('popped');
                    dialog.style['pointer-events'] = 'none';
                    dialog.style['font-family'] = "'STXinwei','xinwei'";
                    ui.window.appendChild(dialog);
                    var width = str.length * 20;
                    if (num != undefined) width -= num * 20;
                    dialog._mod_height = -16;
                    dialog.style.width = width + 'px';
                    lib.placePoppedDialog(dialog, {
                        clientX: (dialog.offsetLeft + dialog.offsetWidth / 2) * game.documentZoom,
                        clientY: (dialog.offsetTop + dialog.offsetHeight / 4) * game.documentZoom,
                    });
                    if (dialog._mod_height) dialog.content.firstChild.style.padding = 0;
                    dialog.style.left = 'calc(50% - ' + (width + 16) / 2 + 'px)';
                    dialog.style.top = 'calc(18% + ' + game.game_bolSayDialog_height + 'px)';
                    dialog.style['z-index'] = 99999;
                    setTimeout(
                        function () {
                            dialog.delete();
                            if (game.game_bolSayDialog_height > ui.window.offsetHeight * 0.95 - dialog.offsetHeight * 2) game.game_bolSayDialog_height = -45;
                            setTimeout(function () {
                                if (game.game_bolSayDialog_num <= 0) game.game_bolSayDialog_height = -45;
                            }, 250);
                        },
                        num2 ? num2 : 5000
                    );
                    setTimeout(function () {
                        delete game.game_bolSayDialog_onOpened;
                    }, 500);
                };
                var interval = setInterval(function () {
                    if (game.game_bolSayDialog_onOpened == undefined) {
                        func();
                        game.game_bolSayDialog_num--;
                        clearInterval(interval);
                    }
                }, 100);
            };
            //区间内取随机整数
            lib.element.player.replaceFujiang = function (name2) {
                var player = this;
                player.reinit(player.name2, name2, [player.hp, player.maxHp]);
            };
            lib.element.player.addFujiang = function (name2) {
                var player = this;
                player.name2 = name2;
                player.classList.add('fullskin2');
                player.reinit(player.name2, name2, [player.hp, player.maxHp]);
                player.node.avatar2.show();
                player.node.count.classList.add('p2');
                player.node.name2.show();
            };
            lib.element.player.removeFujiang = function (name2) {
                var player = this;
                player.reinit(player.name2, player.name, [player.hp, player.maxHp]);
                delete player.name2;
                player.classList.remove('fullskin2');
                player.node.avatar2.hide();
                player.node.count.classList.remove('p2');
                player.node.name2.hide();
            };
            get.jy_cardNameList = function (card) {
                //用于获取某张牌的描述含有牌名的描述  '【'+中文牌名+'】'  '【火杀】' '火【杀】' '普通【杀】'//
                if (!_status.cNcardName) {
                    _status.cNcardName = {};
                    const naturesx = [];
                    naturesx.addArray(Array.from(lib.nature.keys()));
                    naturesx.addArray(lib.inpile_nature);
                    naturesx.addArray(lib.linked);
                    naturesx.addArray(lib.card.sha.nature);
                    naturesx.remove('poison');
                    const libCards = Object.keys(lib.card).filter(function (iCard) {
                        const info = get.translation(iCard);
                        if (!info || typeof info != 'string' || !info.length) return false;
                        const trinfo = get.translation(`${iCard}_info`);
                        if (!trinfo || typeof trinfo != 'string' || !trinfo.length) return false;
                        return true;
                    });
                    for (const cardName of libCards) {
                        if (!_status.cNcardName[cardName]) _status.cNcardName[cardName] = [];
                        let trinfo = get.translation(`${cardName}_info`);
                        for (const cardName2 of libCards) {
                            const info2 = get.translation(cardName2);
                            const text = `【${info2}】`;
                            if (cardName2 == 'sha') {
                                for (const n of naturesx) {
                                    const nature = get.translation(n);
                                    if (nature) {
                                        const name1 = `${nature}【杀】`,
                                            name2 = `【${nature}杀】`;
                                        if (trinfo.includes(name1)) {
                                            _status.cNcardName[cardName].add(`sha::${n}`);
                                            const regexp = new RegExp(name1, 'g');
                                            trinfo = trinfo.replace(regexp, ''); //去掉某些字符    全局替换
                                        }
                                        if (trinfo.includes(name2)) {
                                            _status.cNcardName[cardName].add(`sha::${n}`);
                                            const regexp = new RegExp(name2, 'g');
                                            trinfo = trinfo.replace(regexp, ''); //去掉某些字符    全局替换
                                        }
                                    }
                                }
                            }
                            if (trinfo.includes(text)) {
                                _status.cNcardName[cardName].add(cardName2);
                            }
                        }
                    }
                }
                let result = [];
                if (typeof card != 'string') {
                    if (card.name) result = _status.cNcardName[card.name] || [];
                } else {
                    result = _status.cNcardName[card] || [];
                }
                return result.filter(function (i) {
                    if (i.includes('sha::')) {
                        const name = i.split('::');
                        return lib.inpile_nature.includes(name[1]);
                    }
                    return lib.inpile.includes(i);
                });
            };
            lib.jy_xingshi_names = ['ywhy_zongzi_female', 'ywhy_zongzi_male', 'ywhy_yaojiyuanling', 'ywhy_shizumingdi', 'ywhy_moxiedadi', 'ywhy_lianjiafalao', 'ywhy_jiangshi_female', 'ywhy_jiangshi_male', 'ywhy_feijiang_male', 'ywhy_feijiang_female', 'ywhy_aijifalao', 'ywhy_sangshi_female', 'ywhy_sangshi_male'];
            get.isXingShi = function (target, fujiang) {
                const list = lib.jy_xingshi_names;
                return list.some(function (i) {
                    if (target.name == i) return true;
                    if (target.name1 == i) return true;
                    if (fujiang && target.name2 == i) return true;
                    return false;
                });
            };
            //获取指定参数的武将牌
            game.jy_wujiangpai = function (...args) {
                let list = [],
                    name,
                    num,
                    nodead;
                for (const argument of args) {
                    if (typeof argument == 'string' || Array.isArray(argument)) name = argument;
                    else if (typeof argument == 'number') num = argument;
                    else if (typeof argument == 'boolean') nodead = argument;
                }
                if (Array.isArray(name)) {
                    for (const target of name) {
                        list.addArray(game.xjzh_wujiangpai(target, num, nodead));
                    }
                }
                for (var i in lib.character) {
                    if (!lib.character[i][3]) continue;
                    if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                    if (!name) {
                        list.push(i);
                        continue;
                    }
                    if (get.jy_checkChinese(name)) {
                        if (get.translation(i).includes(get.translation(name))) list.push(i);
                    } else {
                        if (i.includes(name)) list.push(i);
                    }
                }
                if (nodead) {
                    let players = game.players.concat(game.dead);
                    for (var i of players) {
                        list.remove(i.name);
                        list.remove(i.name1);
                        list.remove(i.name2);
                    }
                }
                if (!num) return list;
                return list.randomGets(num);
            };
            get.jy_nameCNBool = function (target, CNname, fujiang) {
                if (Array.isArray(CNname)) {
                    return CNname.some((i) => get.jy_nameCNBool(target, i, fujiang));
                } else {
                    if (target.name) {
                        const info = lib.character[target.name];
                        if (info && info[4] && info[4].includes('jy_die_audio')) {
                            const str = get.translation(target.name);
                            if (str == CNname) return true;
                            if (str.includes(CNname)) return true;
                        }
                    }
                    if (target.name1) {
                        const info = lib.character[target.name1];
                        if (info && info[4] && info[4].includes('jy_die_audio')) {
                            const str = get.translation(target.name1);
                            if (str == CNname) return true;
                            if (str.includes(CNname)) return true;
                        }
                    }
                    if (fujiang && target.name2) {
                        const info = lib.character[target.name2];
                        if (info && info[4] && info[4].includes('jy_die_audio')) {
                            const str = get.translation(target.name2);
                            if (str == CNname) return true;
                            if (str.includes(CNname)) return true;
                        }
                    }
                    return false;
                }
            };
            lib.jy_duyaoList = [
                'jydiy_qinghua', //"情花",
                'jydiy_shixiangruanjinsan', //"十香软筋散"
                'jydiy_beisuqinfeng', //"悲酥清风"
            ];
            lib.jy_mijiList = [
                'jydiy_kuihuabaodian', //葵花宝典
                'jydiy_jiuyinzhengjing', //九阴真经
                'jydiy_jiuyangzhengjing', //九阳真经
                'jydiy_wumuyishu', //武穆遗书
            ];
            lib.jy_anqiList = [
                'jydiy_qixingding', //七星钉
                'jydiy_fuguzheng', //附骨针
                'jydiy_feiyanyinsuo', //飞燕银梭
                'jydiy_hanshasheying', //含沙射影
                'jydiy_bingpoyinzhen', //冰魄银针
                'wanjian', //万箭齐发
                'jydiy_tiejili', //铁蒺藜
                'jydiy_kongqueling', //孔雀翎
                'jydiy_zhuihunding', //追魂钉
                'jydiy_meihuabiao', //♣️️镖
                'jydiy_xiujian', //袖箭
            ];
            lib.skill._add_round_trigger = {
                trigger: { player: 'roundStart' },
                forced: true,
                _priority: -100,
                lastDo: true,
                popup: false,
                forceDie: true, //为了防止有其他角色在roundStart触发时机造成大量伤害,导致此角色豹毙 令该技能不能触发,故添加.
                //firstDo: true,
                content() {
                    //由于此技能执行的内容时机为arrangeTrigger的分支事件
                    //故将执行的内容移动到trigger.next里面 令arrangeTrigger的分支事件执行完毕再执行内容,不和其他与此时点的技能冲突
                    var next = game.createEvent('add_round_trigger', false, trigger);
                    next.setContent(lib.skill._add_round_trigger.contenxt);
                    next._trigger = trigger;
                },
                contenxt() {
                    'step 0';
                    //game.log("辅助触发")
                    //game.log("辅助触发event.parent.name:",event.parent.name);
                    //game.log("辅助触发trigger.name:",trigger.name);
                    if (game.roundNumber != 1) trigger.trigger('roundEnd');
                    ('step 1');
                    trigger.trigger('roundBegin');
                },
            };
            /*****************************内容查找******************************************** */
            game.jy_washCard = function () {
                var cards = [];
                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                    var currentcard = ui.discardPile.childNodes[i];
                    currentcard.vanishtag.length = 0;
                    if (get.info(currentcard).vanish || currentcard.storage.vanish) {
                        currentcard.remove();
                        continue;
                    }
                    cards.push(currentcard);
                }
                cards.randomSort();
                if (Array.isArray(cards)) for (var i of cards) {
                    ui.cardPile.appendChild(i);
                }
                game.updateRoundNumber();
                if (_status.event.trigger) _status.event.trigger('washCard');
            };
            lib.element.player.jy_swapCardPile = function () {
                var next = game.createEvent('jy_swapCardPile', false);
                next.player = this;
                next.setContent('jy_swapCardPile');
                return next;
            };
            lib.element.content.jy_swapCardPile = function () {
                'step 0';
                if (!event.noswap) event.trigger('jy_swapCardPile');
                ('step 1');
                var cards = Array.from(ui.cardPile.childNodes);
                var cards2 = Array.from(ui.discardPile.childNodes);
                while (cards2.length) {
                    var card = cards2.pop();
                    card.fix();
                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                }
                while (cards.length) {
                    var card = cards.pop();
                    card.fix();
                    ui.discardPile.insertBefore(card, ui.discardPile.firstChild);
                }
                game.log(player, '交换了', '#y牌堆', '和', '#y弃牌堆');
                game.updateRoundNumber();
                if (!ui.cardPile.childNodes.length) {
                    game.jy_washCard();
                }
            };
            lib.element.player.jy_phaseUse = lib.element.player.phaseUse;
            lib.element.player.phaseUse = function () {
                var next = lib.element.player.jy_phaseUse.apply(this, arguments);
                var name = _status.event.name;
                if (name != 'phase') next.skill = name; //是否为额外的出牌阶段//
                return next;
            };
            lib.jy_isMengGu = ['sdyx_tuolei', 'sdyx_tiemuzhen', 'sdyx_huazheng', 'sdyx_spguojing', 'sdyx_zhebie', 'sdxl_jinlunfawang', 'sdxl_huodu', 'sdxl_mengge', 'sdxl_hubilie', 'sdxl_daerba', 'yttl_xie_zhaomin', 'yttl_zhaomin', 'yttl_ruyangwang', 'sdxl_huodu'];
            get.jy_deEffect = function (player) {
                if (
                    player.countCards('j', function (card) {
                        return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
                    }) > 0
                )
                    return true;
                if (player.isTurnedOver()) return true;
                if (player.isLinked()) return true;
                if (player.countDisabledSlot() >= 1) return true;
                return false;
            };
            get.jy_deEffect2 = function (player) {
                var num = 0;
                num += player.countCards('j', function (card) {
                    return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
                });
                if (player.isTurnedOver()) num++;
                if (player.isLinked()) num++;
                num += player.countDisabledSlot();
                return num;
            };
            lib.element.player.clear_jy_deEffect = function (judge2) {
                var player = this;
                if (player.isTurnedOver()) {
                    player.turnOver();
                }
                if (player.isLinked()) {
                    player.link();
                }
                var cards = player.getCards('j', function (card) {
                    return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
                });
                if (cards.length) player.discard(cards);
                var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5', 'equip6'];
                for (var i of list) {
                    if (player.hasDisabledSlot(i)) player.enableEquip(i);
                }
                if (judge2) {
                    player.enableJudge();
                }
            };
            lib.element.player.add_jy_deEffect = function (judge, disEquip, judge2) {
                var player = this;
                if (!player.isTurnedOver()) {
                    player.turnOver();
                }
                if (!player.isLinked()) {
                    player.link();
                }
                if (judge) {
                    var cardsx = [],
                        names = [];
                    get.randomCards(100, function (cardx) {
                        if (get.type(cardx, null, false) != 'delay') return false;
                        var name = cardx.name;
                        if (name == 'jydiy_yungongliaoshang') return false;
                        if (names.includes(name)) return false;
                        if (!player.canAddJudge({ name: name, cards: [cardx] })) return false;
                        cardsx.push(cardx);
                        names.push(name);
                        return false;
                    });
                    for (var i of cardsx) {
                        player.addJudge({ name: i.name }, [i]);
                    }
                }
                if (disEquip) {
                    var cards = player.getCards('j', function (card) {
                        return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
                    });
                    if (cards.length) player.discard(cards);
                    var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5', 'equip6'];
                    for (var i of list) {
                        if (!player.hasDisabledSlot(i)) player.disableEquip(i);
                    }
                }
                if (judge2) {
                    player.disableJudge();
                }
            };
            lib.skill._jy_checkCard = {
                forced: true,
                _priority: 100,
                firstDo: true,
                forceDie: true,
                popup: false,
                trigger: { player: ['loseEnd', 'gainEnd'] },
                content() {
                    if (!trigger.cards) return;
                    if (!trigger.cards.length) return;
                    var evt = trigger.parent;
                    for (var card of trigger.cards) {
                        if (card.useCardSource) {
                            //为新的张无忌弄的
                            if (trigger.name == 'lose' && evt.name == 'phaseJudge') {
                                var next = game.createEvent('checkCard_clear', false);
                                next.card = card;
                                event.next.remove(next);
                                evt.after.push(next);
                                next.setContent(function () {
                                    delete card.useCardSource;
                                });
                            } else {
                                delete card.useCardSource;
                            }
                        }
                        if (card.origin_name) {
                            var origin_name = card.origin_name;
                            delete card.origin_name;
                            card.name = origin_name;
                        }
                        if (card.temp_to_name) {
                            if (trigger.name == 'lose' && evt.name == 'equip' && !trigger.swapEquip && trigger.type == 'equip') {
                                card.origin_name = card.name;
                                card.name = card.temp_to_name;
                                delete card.temp_to_name;
                            } else {
                                delete card.temp_to_name;
                            }
                        }
                    }
                },
            };
            get.filterGainSkill = function (skill, func, player, target) {
                if (!lib.translate[skill]) return false;
                if (!lib.translate[skill].length) return false;
                if (!lib.translate[skill + '_info']) return false;
                if (!lib.translate[skill + '_info'].length) return false;
                if (!lib.skill[skill]) return false;
                if (lib.skill[skill].sub) return false;
                if (lib.skill[skill].charlotte) return false;
                if (lib.skill[skill].nopop) return false;
                //if(player&&player.hasSkill(skill,false,false,false)) return false;
                return !func || func(skill, player, target);
            };
            lib.element.player.jy_chooseSkill = function (list) {
                var next = game.createEvent('jy_chooseSkill');
                next.player = this;
                next.list = list.slice(0);
                next.setContent('jy_chooseSkill');
                for (var i = 1; i < arguments.length; i++) {
                    if (typeof arguments[i] == 'string') {
                        next.prompt = arguments[i];
                    } else if (typeof arguments[i] == 'function') {
                        if (!next.func) next.func = arguments[i];
                        else next.ai = arguments[i];
                    } else if (typeof arguments[i] == 'number') {
                        next.selectButton = [arguments[i], arguments[i]];
                    } else if (get.itemtype(arguments[i]) == 'select') {
                        next.selectButton = arguments[i];
                    } else if (typeof arguments[i] == 'boolean') {
                        next.forced = arguments[i];
                    } else if (get.itemtype(arguments[i]) == 'player') {
                        next.target = arguments[i];
                    }
                }
                if (!next.selectButton) {
                    next.selectButton = [1, 1];
                }
                if (!next.func) {
                    next.func = function () {
                        return true;
                    };
                }
                if (!next.target) {
                    next.target = next.player;
                }
                if (typeof next.forced != 'boolean') {
                    next.forced = true;
                }
                return next;
            };
            lib.element.content.jy_chooseSkill = function () {
                'step 0';
                event.list = event.list.filter(function (i) {
                    return get.filterGainSkill(i, event.func, player, target);
                });
                if (!event.list.length) {
                    event.finish();
                    event.result = { bool: false };
                    game.log('没有可以正常挑选的技能!');
                    return;
                }
                //-------------------------------------------------------------///
                var range = get.select(event.selectButton);
                event.selectButton = range;
                if (event.list.length < event.selectButton[0]) {
                    event.selectButton[0] = event.list.length;
                }
                if (!event.prompt) {
                    var str = '请选择获得';
                    if (range[0] == range[1]) str += get.cnNumber(range[0]);
                    else if (Array.isArray(range) && range[1] == Infinity) str += '至少' + get.cnNumber(range[0]);
                    else str += get.cnNumber(range[0]) + '至' + get.cnNumber(Array.isArray(range) && range[1]);
                    str += '项技能';
                    event.prompt = str;
                }
                var list = [];
                for (var skill of event.list) {
                    list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
                }
                var next = player.chooseButton([event.prompt, [list, 'textbutton']]);
                next.set('forced', event.forced);
                next.set('target', target);
                next.set('selectButton', event.selectButton);
                next.set('filterButton', function (button) {
                    return true;
                });
                next.set(
                    'ai',
                    event.ai ||
                    function (button) {
                        var player = _status.event.player;
                        var target = _status.event.target;
                        if (target.hasSkill(button.link, false, false, false)) return 0;
                        if (player != target) {
                            var att = get.attitude(player, target) > 0 ? 1 : -1;
                            _status.event.skillRankPlayer = target;
                            return get.skillRank(button.link) * att - 0.1;
                        }
                        return get.skillRank(button.link) + 0.1;
                    }
                );
                ('step 1');
                if (result.links?.length) {
                    event.result = { bool: true, skills: result.links };
                    if (event.callback) {
                        event.callback(result, player, target); //这里可以自定义获得的是否临时技能//
                    } else {
                        for (var i of result.links) {
                            target.addSkills(i);
                        }
                    }
                } else {
                    event.result = { bool: false };
                }
            };
            //少林技能库
            lib.jy_shaolin_skills = [
                'yttl_tiequ', //铁躯
                'yttl_dujie', //渡劫
                'yttl_jingang', //金刚
                'yttl_wujie', //无界
                'jy_shaolin', //通脉(少林帮派技)
                'yttl_cangjing', //藏经
                'yttl_lieyang', //烈阳
                'yttl_boyang', //博阳
                'yttl_zhenyang', //真阳
                'tlbb_duhui', //度悔
                'tlbb_ranmu', //燃木
                'tlbb_shuofa', //说法
                'tlbb_bolan', //博览
                'tlbb_qizhao', //气罩
                'jue_yijing', //易筋
                'tlbb_xisui', //洗髓
                'tlbb_nianhua', //拈花
            ];
            //负面技能库
            lib.jy_fmgetSkills = [
                //"benghuai",//崩坏
                //"rekurou",//苦肉
                //"chanyuan",//缠怨
                'qtpz_zuiji', //朱由检【罪己】
                'tlbb_liuwang', //段延庆【流亡】
                'yttl_xuefu', //韦一笑【血蝠】
                'tlbb_huantong', //绝天山童姥【还童】QQQ
                'ldj_feiming', //董鄂妃【非命】
                'tlbb_fudu_new', //乌老大【符毒】QQQ
                'ywhy_xiongzhao', //郭槐之狸猫【凶兆】
            ];
            //手牌可视
            if (config.jy_viewHandCards2) {
                lib.skill._jy_viewHandCards = {
                    charlotte: true,
                    ai: {
                        viewHandcard: true,
                        skillTagFilter(player, tag, arg) {
                            if (tag == 'viewHandcard') {
                                if (game.me == arg) return false;
                                return true;
                            }
                        },
                    },
                };
            }
            /********************角色界面********************/
            var juesedirs = [
                ['juese_XiaoAoJiangHu', 'juese_CSS_XiaoAoJiangHu'],
                ['juese_TenUI', 'juese_CSS_tenUI'],
                ['juese_ShouSha', 'juese_CSS_ShouSha'],
                ['juese_LingHunBaiDu', 'juese_CSS_LingHunBaiDu'],
                ['juese_DaYuHaiTang', 'juese_CSS_DaYuHaiTang'],
                ['juese_ShenDuYeXing', 'juese_CSS_ShenDuYeXing'],
                ['juese_MiShiZhiDi', 'juese_CSS_MiShiZhiDi'],
                ['juese_YingXiongSha', 'juese_CSS_YingXiongSha'],
                ['juese_DaoMuBiJi', 'juese_CSS_DaoMuBiJi'],
            ];
            juesedirs.forEach((dir) => {
                lib.init.css('extension/金庸群侠传/image/' + dir[1], 'juese');
            });
            HTMLDivElement.prototype.setBackground = function (name, type, ext, subfolder) {
                if (!name) return;
                var src;
                if (ext == 'noskin') {
                    ext = '.jpg';
                }
                ext = ext || '.jpg';
                subfolder = subfolder || 'default';
                if (type) {
                    var dbimage = null,
                        extimage = null,
                        modeimage = null;
                    var nameinfo;
                    var gzbool = false;
                    var mode = get.mode();
                    if (type == 'character') {
                        if (lib.characterPack['mode_' + mode] && lib.characterPack['mode_' + mode][name]) {
                            if (mode == 'guozhan') {
                                nameinfo = lib.character[name];
                                if (name.indexOf('gz_shibing') == 0) {
                                    name = name.slice(3, 11);
                                } else {
                                    if (lib.config.mode_config.guozhan.guozhanSkin && lib.character[name] && lib.character[name][4].includes('gzskin')) gzbool = true;
                                    name = name.slice(3);
                                }
                            } else {
                                modeimage = mode;
                            }
                        } else if (lib.character[name]) {
                            nameinfo = lib.character[name];
                        } else if (name.includes('::')) {
                            name = name.split('::');
                            modeimage = name[0];
                            name = name[1];
                        }
                    }
                    if (!modeimage && nameinfo && nameinfo[4]) {
                        for (var i of nameinfo[4]) {
                            if (i.indexOf('ext:') == 0) {
                                extimage = i;
                                break;
                            } else if (i.indexOf('db:') == 0) {
                                dbimage = i;
                                break;
                            } else if (i.indexOf('mode:') == 0) {
                                modeimage = i.slice(5);
                                break;
                            } else if (i.indexOf('character:') == 0) {
                                name = i.slice(10);
                                break;
                            }
                        }
                    }
                    if (type == 'character' && lib.config.skin[name] && arguments[2] != 'noskin') {
                        if (Object.prototype.toString.call(lib.config.skin[name]) === '[object String]' && lib.config.skin[name].indexOf('.') !== -1) {
                            ext = '';
                        }
                        if (nameinfo && nameinfo.length > 5 && nameinfo[5].skinDirs && nameinfo[5].skinDirs.length) {
                            src = nameinfo[5].skinDirs[0] + '/' + name + '/' + lib.config.skin[name] + ext;
                        } else if (nameinfo && nameinfo.extraModeData && nameinfo.extraModeData.skinDirs && nameinfo.extraModeData.skinDirs.length) {
                            src = nameinfo.extraModeData.skinDirs[0] + '/' + name + '/' + lib.config.skin[name] + ext;
                        } else {
                            src = 'image/skin/' + name + '/' + lib.config.skin[name] + ext;
                        }
                    } else if (extimage) {
                        src = extimage.replace(/ext:/, 'extension/');
                    } else if (dbimage) {
                        this.setBackgroundDB(dbimage.slice(3));
                        return this;
                    } else if (modeimage) {
                        if (name.indexOf('.') !== -1) {
                            ext = '';
                        }
                        src = 'image/mode/' + modeimage + '/character/' + name + ext;
                    } else {
                        if (type == 'character') {
                            if (name.indexOf('.') !== -1) {
                                ext = '';
                            }
                            src = 'image/character/' + (gzbool ? 'gz_' : '') + name + ext;
                        } else {
                            if (name.indexOf('.') !== -1) {
                                ext = '';
                            }
                            src = 'image/' + type + '/' + subfolder + '/' + name + ext;
                        }
                    }
                } else {
                    if (name.indexOf('.') !== -1) {
                        ext = '';
                    }
                    src = 'image/' + name + ext;
                }
                this.setBackgroundImage(src);
                this.style.backgroundSize = 'cover';
                return this;
            };
            var showjueseFn = function (name, sourcenode, noedit, resume, avatar) {
                if (!lib.character[name]) lib.character[name] = get.character(name);
                //因窗口美化滞停,暂时关闭技能代码查阅功能
                var jueseType = lib.config.extension_金庸群侠传_jy_changeJuesePageUI;
                if (!jueseType) {
                    jueseType = 1;
                }
                var jueseDir = juesedirs[jueseType - 1][0];
                var skins = [];
                var skindir = 'image/skin/';
                const extraModeData = lib.character[name].extraModeData;
                if (extraModeData && extraModeData.skinDirs && extraModeData.skinDirs.length) {
                    skindir = extraModeData.skinDirs[0];
                }
                if (!game.getFileList) {
                    if (!lib.device) {
                        var getFileList = function (dir, callback) {
                            var files = [],
                                folders = [];
                            dir = __dirname + '/' + dir;
                            lib.node.fs.readdir(dir, function (err, filelist) {
                                if (!filelist) {
                                    callback([], []);
                                } else {
                                    for (var i = 0; i < filelist.length; i++) {
                                        if (filelist[i][0] != '.' && filelist[i][0] != '_') {
                                            if (lib.node.fs.statSync(dir + '/' + filelist[i]).isDirectory()) {
                                                folders.push(filelist[i]);
                                            } else {
                                                files.push(filelist[i]);
                                            }
                                        }
                                    }
                                    callback(folders, files);
                                }
                            });
                        };
                        getFileList(skindir + name + '', function (dirs, files) {
                            skins = files;
                        });
                    } else {
                        var getFileList = function (dir, callback) {
                            var files = [],
                                folders = [];
                            window.resolveLocalFileSystemURL(dir, function (entry) {
                                var dirReader = entry.createReader();
                                var entries = [];
                                var readEntries = function () {
                                    dirReader.readEntries(function (results) {
                                        if (!results.length) {
                                            entries.sort();
                                            for (var i = 0; i < entries.length; i++) {
                                                if (entries[i].isDirectory) {
                                                    folders.push(entries[i].name);
                                                } else {
                                                    files.push(entries[i].name);
                                                }
                                            }
                                            callback(folders, files);
                                        } else {
                                            entries = entries.concat(Array.from(results));
                                            readEntries();
                                        }
                                    });
                                };
                                readEntries();
                            });
                        };
                        getFileList(skindir + name + '', function (dirs, files) {
                            skins = files;
                        });
                    }
                } else {
                    game.getFileList(
                        skindir + name + '',
                        function (dirs, files) {
                            skins = files;
                        },
                        function () { }
                    );
                }
                const list = get.character(name, 3) || [];
                const skills = [];
                const skillsAddInfo = function (skills, item, deBool) {
                    if (lib.skill[item] && lib.translate[item] && lib.translate[item + '_info']) {
                        skills.push({
                            name: item, //技能英文id
                            title: get.translation(item), //技能中文名
                            info: get.skillInfoTranslation(item), //技能中文描述
                            audios: [],
                            taici: ['**!<br>**!<br>**!<br>**!'],
                        });
                        let derivation = lib.skill[item].derivation;
                        if (typeof derivation == 'string') {
                            derivation = [derivation];
                        }
                        if (!deBool && derivation && derivation.length) {
                            for (var d of derivation) {
                                skillsAddInfo(skills, d, true);
                            }
                        }
                    } else {
                        //alert(`技能${item}未定义`);
                    }
                };
                ///-------------------------------------------------------------------------
                list.forEach((item) => {
                    skillsAddInfo(skills, item);
                });
                //-----------------------------------------------------------------------------
                if (get.jy_bangpai) {
                    var bp = get.jy_bangpai({ name1: name });
                    for (var i of bp) {
                        skillsAddInfo(skills, i);
                    }
                }
                skills.push({
                    name: 'zhengwang',
                    title: '阵亡',
                    info: (function () {
                        let dieAudios = game
                            .parseDieTextMap(name)
                            .filter((i) => 'text' in i)
                            .map((i) => i.text);
                        if (!dieAudios.length) dieAudios = ['暂无台词!'];
                        //dieAudios.unshift('<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>台词</b>:');
                        //dieAudios.push('<br><br><br><br>');
                        return dieAudios.join('<br>');
                    })(),
                    audios: [],
                    taici: ['!'],
                });
                var yuanpi = false;
                //奇怪的弹窗//
                if (lib.character[name] && lib.character[name][4] && lib.character[name][4].length > 1) {
                    for (var i = 0; i < lib.character[name][4].length; i++) {
                        if (lib.character[name][4][i].indexOf('ext:') == 0) {
                            var extimage = lib.character[name][4][i];
                            yuanpi = extimage.replace(/ext:/, 'extension/');
                            break;
                        }
                        // else if(lib.character[name][4][i].indexOf('db:')==0){
                        //     dbimage=lib.character[name][4][i];break;
                        // }
                        else if (lib.character[name][4][i].indexOf('mode:') == 0) {
                            var modeimage = lib.character[name][4][i].slice(5);
                            yuanpi = 'image/mode/' + modeimage + '/character/' + name + '.jpg';
                            break;
                        }
                        // else if(lib.character[name][4][i].indexOf('character:')==0){
                        //     name=lib.character[name][4][i].slice(10);break;
                        // }
                    }
                    // yuanpi=lib.character[name][4][2].replace("ext:","extension/");
                } else if (lib.character[name].trashBin.length) {
                    if (lib.character[name].trashBin[0].indexOf('ext:') == 0) {
                        var extimage = lib.character[name].trashBin[0];
                        yuanpi = extimage.replace(/ext:/, 'extension/');
                    }
                    // else if(lib.character[name].trashBin[0].indexOf('db:')==0){
                    //     dbimage=lib.character[name].trashBin[0];
                    // }
                    else if (lib.character[name].trashBin[0].indexOf('mode:') == 0) {
                        var modeimage = lib.character[name].trashBin[0].slice(5);
                        yuanpi = 'image/mode/' + modeimage + '/character/' + name + '.jpg';
                    }
                    // else if(lib.character[name].trashBin[0].indexOf('character:')==0){
                    //     name=lib.character[name].trashBin[0].slice(10);
                    // }
                    // yuanpi=lib.character[name][4][2].replace("ext:","extension/");
                } else {
                    //fs=fs||false;
                    //if(false){
                    if (!lib.device) {
                        if (lib.node.fs.existsSync('./resources/app/image/character/' + name + '.jpg')) {
                            yuanpi = 'image/character/' + name + '.jpg';
                        }
                    } else {
                        window.resolveLocalFileSystemURL(
                            'image/character/' + name + '.jpg',
                            function (entry) {
                                yuanpi = 'image/character/' + name + '.jpg';
                            },
                            function () {
                                yuanpi = 'image/character/' + name + '.jpg';
                            }
                        );
                    }
                }
                var juese = {
                    name2: name,
                    name: get.rawName2(name),
                    img: '',
                    blood: get.character(name, 2),
                    shili: get.character(name, 1), //势力
                    level: game.getRarity(name), //评级
                    skills: skills,
                    //////////////////////////////////////武将台词区域///////////////////////////////////
                    taicis: (function () {
                        const list = [];
                        for (const j of skills) {
                            list.push({
                                name: j.title,
                                name2: j.name,
                                info: j.info,
                                audios: [],
                                taici: (function () {
                                    const taiciLIs = (function () {
                                        if (j.name == 'zhengwang') {
                                            let dieAudios = game
                                                .parseDieTextMap(name)
                                                .filter((i) => 'text' in i)
                                                .map((i) => i.text);
                                            if (!dieAudios.length) dieAudios = ['暂无台词!'];
                                            return dieAudios;
                                            //return [lib.translate[`#${name}:die`]||"暂无台词!"];
                                        }
                                        if (game.parseSkillText) {
                                            return game.parseSkillText(j.name, name);
                                        } else {
                                            const Taici = lib.jy_player_ziliao;
                                            if (Taici && Taici[name] && Taici[name].taic) {
                                                return Taici[name].taic[j.name] || [];
                                            }
                                        }
                                        return [];
                                    })();
                                    if (taiciLIs.length) {
                                        return [taiciLIs.join('<br>')];
                                    } else {
                                        return ['暂无台词!'];
                                    }
                                })(),
                            });
                        }
                        return list;
                    })(),
                    // taici:(lib.characterTaici&&lib.characterTaici[name])||"该角色暂无台词!",
                    gonglue: (lib.characterGonglue && lib.characterGonglue[name]) || '该角色暂无攻略!',
                    gushi: get.characterIntro(name),
                    skins: skins,
                    shoucanged: lib.config.favouriteCharacter.includes(name) ? 1 : 0, //是否已收藏
                    disabled: 0, //是否已禁用
                    design: [
                        (function () {
                            var str = '配音\\';
                            const Taici = lib.jy_player_ziliao;
                            if (Taici && Taici[name] && Taici[name].design) {
                                str += Taici[name].design[0];
                            } else {
                                str += '暂无';
                            }
                            return str;
                        })(),
                        (function () {
                            var str = '编程\\';
                            const Taici = lib.jy_player_ziliao;
                            if (Taici && Taici[name] && Taici[name].design) {
                                str += Taici[name].design[1];
                            } else {
                                str += '暂无';
                            }
                            return str;
                        })(),
                        (function () {
                            var str = '设计\\';
                            const Taici = lib.jy_player_ziliao;
                            if (Taici && Taici[name] && Taici[name].design) {
                                str += Taici[name].design[2];
                            } else {
                                str += '暂无';
                            }
                            return str;
                        })(),
                        (function () {
                            var str = '称号\\';
                            var info = lib.characterTitle[name];
                            if (info) {
                                if (info.indexOf('#') == 0) info = info.slice(2);
                                str += info;
                            } else {
                                str += '暂无称号';
                            }
                            return str;
                        })(),
                    ],
                };
                var config = {
                    navs: [
                        ['extension/金庸群侠传/image/' + jueseDir + '/jy_choose_skill.png', 'extension/金庸群侠传/image/' + jueseDir + '/jy_choose_skill_checked.png'],
                        ['extension/金庸群侠传/image/' + jueseDir + '/jy_choose_taici.png', 'extension/金庸群侠传/image/' + jueseDir + '/jy_choose_taici_checked.png'],
                        ['extension/金庸群侠传/image/' + jueseDir + '/jy_choose_intro.png', 'extension/金庸群侠传/image/' + jueseDir + '/jy_choose_intro_checked.png'],
                        ['extension/金庸群侠传/image/' + jueseDir + '/jy_choose_gonglue.png', 'extension/金庸群侠传/image/' + jueseDir + '/jy_choose_gonglue_checked.png'],
                    ],
                    activeNav: 0,
                    shilis: ['jin', 'jy_lie', 'jy_ming', 'jy_qin', 'jy_qing', 'jy_song', 'jy_jue', 'jy_xie', 'jy_tang', 'jy_yuan', 'qun', 'shen', 'shu', 'wei', 'wu'],
                    heroNameColor: {
                    },
                };
                var skinbox = null;
                var layer = null;
                function showVideos(videos) {
                    var width = document.body.clientWidth;
                    var height = document.body.clientHeight;
                    var layer2 = ui.create.div('.poplayer.' + juesedirs[jueseType - 1][1], ui.window);
                    var audio = document.createElement('audio');
                    document.body.appendChild(audio);
                    var skinboxping = document.createElement('div');
                    skinboxping.className = 'jyqxz_juese_videos_div';
                    skinbox = document.createElement('div');
                    skinbox.className = 'jyqxz_juese_videos';
                    skinbox.onclick = function (e) {
                        e.stopPropagation();
                    };
                    skinboxping.appendChild(skinbox);
                    var leftBtn = document.createElement('div');
                    leftBtn.className = 'jyqxz_juese_videos_leftbtn';
                    var rightBtn = document.createElement('div');
                    rightBtn.className = 'jyqxz_juese_videos_rightbtn';
                    var showBox = document.createElement('div');
                    showBox.className = 'jyqxz_juese_videos_showbox';
                    showBox.style.width = '1614px';
                    skinbox.appendChild(leftBtn);
                    skinbox.appendChild(rightBtn);
                    skinbox.appendChild(showBox);
                    var skinsbox = document.createElement('div');
                    skinsbox.className = 'jyqxz_juese_videosbox';
                    showBox.appendChild(skinsbox);
                    lib.setScroll(showBox);
                    lib.setScroll(skinsbox);
                    var videosbox = ui.create.div('.jyqxz_juese_videosdiv', showBox);
                    lib.setScroll(videosbox);
                    videosbox.style.width = 1624 * videos.length + 'px';
                    rightBtn.onclick = function () {
                        audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_roll.mp3';
                        audio.play();
                        // var intleft=(parseInt(getComputedStyle(skinsbox).left));
                        var intleft = parseInt(videosbox.style.left) || 0;
                        if (intleft > -1624 * (videos.length - 1)) {
                            videosbox.style.left = intleft - 1624 + 'px';
                        } else {
                            videosbox.style.left = 0 + 'px';
                        }
                    };
                    leftBtn.onclick = function () {
                        audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_roll.mp3';
                        audio.play();
                        // var intleft=(parseInt(getComputedStyle(skinsbox).left));
                        // if(intleft<0){
                        //     skinsbox.style.left=(intleft+1624) +"px";
                        // }
                        var intleft = parseInt(videosbox.style.left) || 0;
                        if (intleft + 1624 <= 0) {
                            videosbox.style.left = intleft + 1624 + 'px';
                        } else {
                            videosbox.style.left = -1624 * (videos.length - 1) + 'px';
                        }
                    };
                    videos.forEach((video) => {
                        var videodiv = document.createElement('div');
                        videodiv.className = 'jyqxz_juese_video';
                        var skindir = 'image/skin/';
                        if (lib.character[name] && lib.character[name].length > 5 && lib.character[name][5].skinDirs && lib.character[name][5].skinDirs.length) {
                            skindir = lib.character[name][5].skinDirs[0];
                        } else if (lib.character[name] && lib.character[name].extraModeData && lib.character[name].extraModeData.skinDirs && lib.character[name].extraModeData.skinDirs.length) {
                            skindir = lib.character[name].extraModeData.skinDirs[0];
                        }
                        videodiv.innerHTML = video;
                        videosbox.appendChild(videodiv);
                    });
                    layer2.appendChild(skinboxping);
                    skinboxping.onclick = function () {
                        layer2.remove();
                    };
                    skinbox.style.transform = 'translate(-50%,-50%) scale(' + Math.min(height / 1440, width / 2560) + ')';
                    window.addEventListener(
                        'resize',
                        function () {
                            var width = document.body.clientWidth;
                            var height = document.body.clientHeight;
                            if (skinbox) {
                                skinbox.style.transform = 'translate(-50%,-50%) scale(' + Math.min(height / 1440, width / 2560) + ')';
                            }
                        },
                        false
                    );
                }
                var juesediv = false;
                function showSkins() {
                    var width = document.body.clientWidth;
                    var height = document.body.clientHeight;
                    var layer2 = ui.create.div('.poplayer.' + juesedirs[jueseType - 1][1], ui.window);
                    var audio = document.createElement('audio');
                    document.body.appendChild(audio);
                    var skinboxping = document.createElement('div');
                    skinboxping.className = 'jyqxz_juese_skins_div ';
                    skinbox = document.createElement('div');
                    skinbox.className = 'jyqxz_juese_skins';
                    skinbox.onclick = function (e) {
                        e.stopPropagation();
                    };
                    skinboxping.appendChild(skinbox);
                    var leftBtn = document.createElement('div');
                    leftBtn.className = 'jyqxz_juese_skin_leftbtn';
                    var rightBtn = document.createElement('div');
                    rightBtn.className = 'jyqxz_juese_skin_rightbtn';
                    var showBox = document.createElement('div');
                    showBox.className = 'jyqxz_juese_skins_showbox';
                    skinbox.appendChild(leftBtn);
                    skinbox.appendChild(rightBtn);
                    skinbox.appendChild(showBox);
                    var skinsbox = document.createElement('div');
                    skinsbox.className = 'jyqxz_juese_skinsbox';
                    skinsbox.style.width = 474 * (skins.length + (yuanpi ? 1 : 0)) + 'px';
                    showBox.appendChild(skinsbox);
                    lib.setScroll(showBox);
                    lib.setScroll(skinsbox);
                    rightBtn.onclick = function () {
                        audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_roll.mp3';
                        audio.play();
                        var intleft = showBox.scrollLeft;
                        if (intleft < 474 * (skins.length + (yuanpi ? 1 : 0) - 4)) {
                            showBox.scrollLeft = intleft + 474;
                        }
                    };
                    leftBtn.onclick = function () {
                        audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_roll.mp3';
                        audio.play();
                        var intleft = showBox.scrollLeft;
                        if (intleft > 0) {
                            showBox.scrollLeft = intleft - 474;
                        }
                    };
                    if (yuanpi) {
                        var skindiv = document.createElement('div');
                        skindiv.className = 'jyqxz_juese_skinbox';
                        var img = document.createElement('div');
                        img.className = 'jyqxz_juese_skin';
                        img.setBackgroundImage(yuanpi);
                        var imgborder = document.createElement('div');
                        imgborder.className = 'jyqxz_juese_skinborder';
                        var skinTitle = document.createElement('p');
                        skinTitle.className = 'jyqxz_juese_title';
                        skinTitle.innerHTML = '原画形象';
                        imgborder.appendChild(skinTitle);
                        var drawerTitle = document.createElement('p');
                        drawerTitle.className = 'jyqxz_juese_drawertitle';
                        var drawer = '佚名画师';
                        var skinLevelnum = 1;
                        if (lib.character[name] && lib.character[name].length > 5) {
                            if (lib.character[name][5].drawer) {
                                drawer = lib.character[name][5].drawer;
                            }
                            if (lib.character[name][5].skinLevel && !isNaN(parseInt(lib.character[name][5].skinLevel))) {
                                skinLevelnum = parseInt(lib.character[name][5].skinLevel);
                                if (skinLevelnum < 1 || skinLevelnum > 4) {
                                    skinLevelnum = 1;
                                }
                            }
                        } else if (lib.character[name].extraModeData) {
                            if (lib.character[name].extraModeData.drawer) {
                                drawer = lib.character[name].extraModeData.drawer;
                            }
                            if (lib.character[name].extraModeData.skinLevel && !isNaN(parseInt(lib.character[name].extraModeData.skinLevel))) {
                                skinLevelnum = parseInt(lib.character[name].extraModeData.skinLevel);
                                if (skinLevelnum < 1 || skinLevelnum > 4) {
                                    skinLevelnum = 1;
                                }
                            }
                        }
                        drawerTitle.innerHTML = drawer;
                        var skinLevel = document.createElement('img');
                        skinLevel.style = 'display:block;width:100%;height:100%';
                        skinLevel.src = 'extension/金庸群侠传/image/' + jueseDir + '/' + ['pingji1_common', 'pingji1_rare', 'pingji1_epic', 'pingji1_legend'][skinLevelnum - 1] + '.png';
                        img.appendChild(skinLevel);
                        skindiv.onclick = function () {
                            var nameskin = name;
                            audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_skin.mp3';
                            audio.play();
                            layer2.remove();
                            if (juesediv) {
                                juesediv.getElementsByClassName('jyqxz_juesedivimg')[0].setBackgroundImage(yuanpi);
                            }
                            delete lib.config.skin[nameskin];
                            if (sourcenode) sourcenode.setBackgroundImage(yuanpi);
                            if (avatar) avatar.setBackgroundImage(yuanpi);
                            game.saveConfig('skin', lib.config.skin);
                        };
                        skindiv.appendChild(img);
                        skindiv.appendChild(drawerTitle);
                        skindiv.appendChild(imgborder);
                        skinsbox.appendChild(skindiv);
                    }
                    skins.forEach((skin) => {
                        var skindiv = document.createElement('div');
                        skindiv.className = 'jyqxz_juese_skinbox';
                        var img = document.createElement('div');
                        img.className = 'jyqxz_juese_skin';
                        // img.style.backgroundImage='url('+skin+")";
                        var skindir = 'image/skin/';
                        if (lib.character[name] && lib.character[name].length > 5 && lib.character[name][5].skinDirs && lib.character[name][5].skinDirs.length) {
                            skindir = lib.character[name][5].skinDirs[0];
                        } else if (lib.character[name] && lib.character[name].extraModeData && lib.character[name].extraModeData.skinDirs && lib.character[name].extraModeData.skinDirs.length) {
                            skindir = lib.character[name].extraModeData.skinDirs[0];
                        }
                        img.setBackgroundImage(skindir.replace(/^\//, '') + name + '/' + skin);
                        var imgborder = document.createElement('div');
                        imgborder.className = 'jyqxz_juese_skinborder';
                        var skinname = skin.lastIndexOf('.') === -1 ? skin : skin.substr(0, skin.lastIndexOf('.'));
                        var skinTitle = document.createElement('p');
                        skinTitle.className = 'jyqxz_juese_title';
                        skinTitle.innerHTML = skinname.split('_')[0];
                        imgborder.appendChild(skinTitle);
                        var drawerTitle = document.createElement('p');
                        drawerTitle.className = 'jyqxz_juese_drawertitle';
                        drawerTitle.innerHTML = skinname.split('_').length > 1 ? skinname.split('_')[1] : '佚名画师';
                        var level = 1;
                        if (skinname.split('_').length > 2 && !isNaN(skinname.split('_')[2])) {
                            level = skinname.split('_')[2];
                            if (level > 4 || level < 1) {
                                level = 1;
                            }
                        }
                        var skinLevel = document.createElement('img');
                        skinLevel.style = 'display:block;width:100%;height:100%';
                        skinLevel.src = 'extension/金庸群侠传/image/' + jueseDir + '/' + ['pingji1_common', 'pingji1_rare', 'pingji1_epic', 'pingji1_legend'][level - 1] + '.png';
                        img.appendChild(skinLevel);
                        skindiv.onclick = (function (skin) {
                            return function () {
                                audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_skin.mp3';
                                audio.play();
                                layer2.remove();
                                if (juesediv) {
                                    juesediv.getElementsByClassName('jyqxz_juesedivimg')[0].setBackgroundImage(skindir.replace(/^\//, '') + name + '/' + skin);
                                }
                                lib.config.skin[name] = skin;
                                if (sourcenode) sourcenode.setBackgroundImage(skindir.replace(/^\//, '') + name + '/' + skin);
                                if (avatar) avatar.setBackgroundImage(skindir.replace(/^\//, '') + name + '/' + skin);
                                game.saveConfig('skin', lib.config.skin);
                            };
                        })(skin);
                        skindiv.appendChild(img);
                        skindiv.appendChild(drawerTitle);
                        skindiv.appendChild(imgborder);
                        skinsbox.appendChild(skindiv);
                    });
                    layer2.appendChild(skinboxping);
                    skinboxping.onclick = function () {
                        layer2.remove();
                    };
                    skinbox.style.transform = 'translate(-1210px,-561px) scale(' + Math.min(height / 1440, width / 2560) + ')';
                    window.addEventListener(
                        'resize',
                        function () {
                            var width = document.body.clientWidth;
                            var height = document.body.clientHeight;
                            if (skinbox) {
                                skinbox.style.transform = 'translate(-1210px,-561px) scale(' + Math.min(height / 1440, width / 2560) + ')';
                            }
                        },
                        false
                    );
                }
                //function showjuese(juese,jinyongFn=function(){},shoucangFn=function(){},gaoguangFn=function(){}){
                function showjuese(juese, jinyongFn, shoucangFn, gaoguangFn) {
                    //游戏暂停
                    game.pause2();
                    var layer1 = ui.create.div('.poplayer.' + juesedirs[jueseType - 1][1], ui.window);
                    var width = document.body.clientWidth;
                    var height = document.body.clientHeight;
                    var shili = config.shilis.indexOf(juese.shili) === -1 ? 'default' : juese.shili;
                    var audio = document.createElement('audio');
                    document.body.appendChild(audio);
                    audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_chooseskin.mp3';
                    audio.play();
                    var layerping = document.createElement('div');
                    layerping.className = 'jyqxz_juese_layerping';
                    layer = document.createElement('div');
                    layer.className = 'jyqxz_juese_infodiv ';
                    layerping.style.backgroundImage = "url('extension/金庸群侠传/image/" + jueseDir + '/bg_' + shili + ".jpg')";
                    layerping.appendChild(layer);
                    // layer.style.transform="translate(-1280px,-720px) scale("+ width/2560+","+height/1440 +")";
                    var backbtn = document.createElement('div');
                    backbtn.className = 'jyqxz_juese_infodiv_backbtn';
                    backbtn.onclick = function () {
                        audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_back.mp3';
                        audio.play();
                        setTimeout(() => {
                            layer1.remove();
                            //游戏暂停
                            game.resume2();
                        }, 500);
                    };
                    document.addEventListener('keydown', function (event) {
                        event.stopPropagation();
                        // 按下ESC键
                        if (event.keyCode == 27 || event.key === 'Esc') {
                            backbtn.onclick();
                        }
                    });
                    layerping.appendChild(backbtn);
                    juesediv = document.createElement('div');
                    juesediv.className = 'jyqxz_jueseshadowdiv';
                    juesediv.className = 'jyqxz_guajiandiv';
                    juesediv.className = 'jyqxz_juesediv';
                    juesediv.innerHTML = `
                            <div class="jyqxz_jueseshadowdiv">
                            </div>
                            <div class="jyqxz_guajiandiv">
                            </div>
                            <div class="jyqxz_juesebgdiv"  style="background-image:url(extension/金庸群侠传/image/${jueseDir}/group_${shili}.png);">
                            </div>
                            <div class="jyqxz_juesedivimg" style="background-image:url(${juese.img});"></div>
                            <img class="leftbg" src="extension/金庸群侠传/image/${jueseDir}/guajian_${shili}.png" />
                            <div class="jyqxz_juesebgdiv1"  style="background-image:url(extension/金庸群侠传/image/${jueseDir}/group2_${shili}.png);">
                            <img src="extension/金庸群侠传/image/${jueseDir}/pingji_${juese.level}.png" alt="" class="jyqxz_juese_level">
                            <div class="jyqxz_juese_designinfos">
                            <p class="jyqxz_juese_designinfo">${juese.design[0]}</p>
                            <p class="jyqxz_juese_designinfo">${juese.design[1]}</p>
                            <p class="jyqxz_juese_designinfo">${juese.design[2]}</p>
                            <p class="jyqxz_juese_designinfo">${juese.design[3]}</p>
                            </div>
                            <p class="jyqxz_juese_heroname" style="color:${config.heroNameColor[shili]}">${juese.name}</p>
                            <img src="extension/金庸群侠传/image/${jueseDir}/jy_hp${juese.blood}.png" alt="" class="jyqxz_juese_blood">
                            </div>
                            `;
                    layer.appendChild(juesediv);
                    juesediv.getElementsByClassName('jyqxz_juesedivimg')[0].setBackground(name, 'character');
                    var juesecont = document.createElement('div');
                    juesecont.className = 'jyqxz_juesecont';
                    layer.appendChild(juesecont);
                    var navbg = document.createElement('img');
                    navbg.className = 'jyqxz_right_nav_bg';
                    navbg.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_treeonrightside.png';
                    layerping.appendChild(navbg);
                    var juesenavs = document.createElement('div');
                    juesenavs.className = 'jyqxz_juese_right_navs';
                    var juesenavsP = document.createElement('div');
                    juesenavsP.className = 'jyqxz_juese_right_navsp';
                    juesenavsP.appendChild(juesenavs);
                    var juesebtns = document.createElement('div');
                    juesebtns.className = 'jyqxz_juese_btns';
                    //禁用
                    var ban = ui.create.node('img.jyqxz_juese_btn.large.ban.character', juesebtns, function (e) {
                        //if(this.classList.contains('unselectable')) return;
                        if (this.classList.contains('unselectable')) return;
                        if (typeof noedit == 'string') {
                            this.classList.toggle('active');
                            var bannedname = noedit + '_banned';
                            if (!lib.config[bannedname]) {
                                lib.config[bannedname] = [];
                            }
                            if (this.classList.contains('active')) {
                                lib.config[bannedname].add(name);
                            } else {
                                lib.config[bannedname].remove(name);
                            }
                            game.saveConfig(bannedname, lib.config[bannedname]);
                            ban.updateBanned();
                        } else {
                            ui.click.touchpop();
                            ui.click.intro.call(this, e);
                            _status.clicked = true;
                        }
                    });
                    ban.src = juese.disabled ? 'extension/金庸群侠传/image/' + jueseDir + '/jy_forbidden_checked.png' : 'extension/金庸群侠传/image/' + jueseDir + '/jy_forbidden.png';
                    ban.link = name;
                    ban._banning = 'offline';
                    ban.updateBanned = function () {
                        if (noedit === true) return;
                        if (lib.config[get.mode() + '_banned'] && lib.config[get.mode() + '_banned'].includes(name)) {
                            ban.classList.add('active');
                        } else {
                            ban.classList.remove('active');
                        }
                        if (sourcenode && sourcenode.updateBanned) {
                            sourcenode.updateBanned();
                        }
                    };
                    ban.updateBanned();
                    var jueseshoucang = document.createElement('img');
                    jueseshoucang.className = 'jyqxz_juese_btn';
                    jueseshoucang.src = juese.shoucanged ? 'extension/金庸群侠传/image/' + jueseDir + '/jy_collection_checked.png' : 'extension/金庸群侠传/image/' + jueseDir + '/jy_collection.png';
                    jueseshoucang.onclick = function () {
                        audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_skin_forbid_collection.mp3';
                        audio.play();
                        juese.shoucanged = !juese.shoucanged;
                        jueseshoucang.src = juese.shoucanged ? 'extension/金庸群侠传/image/' + jueseDir + '/jy_collection_checked.png' : 'extension/金庸群侠传/image/' + jueseDir + '/jy_collection.png';
                        if (typeof shoucangFn == 'function') {
                            shoucangFn(juese.shoucanged);
                        }
                    };
                    juesebtns.appendChild(jueseshoucang);
                    var juesegaoguang = document.createElement('img');
                    juesegaoguang.className = 'jyqxz_juese_btn';
                    juesegaoguang.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_show.png';
                    var videos = [];
                    if (lib.character[name] && lib.character[name].length > 5 && lib.character[name][5].videos && Object.prototype.toString.call(lib.character[name][5].videos) === '[object Array]') {
                        videos = lib.character[name][5].videos;
                    } else if (lib.character[name] && lib.character[name].extraModeData && lib.character[name].extraModeData.videos && Object.prototype.toString.call(lib.character[name].extraModeData.videos) === '[object Array]') {
                        videos = lib.character[name].extraModeData.videos;
                    }
                    juesegaoguang.onclick = function () {
                        audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_skin_forbid_collection.mp3';
                        audio.play();
                        // if(typeof gaoguangFn == 'function') {
                        //     gaoguangFn();
                        // }
                        showVideos(videos);
                    };
                    juesebtns.appendChild(juesegaoguang);
                    var juesepifu = document.createElement('img');
                    juesepifu.className = 'jyqxz_juese_btn';
                    juesepifu.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_skin.png';
                    juesebtns.appendChild(juesepifu);
                    juesepifu.onclick = function () {
                        audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_skin_forbid_collection.mp3';
                        audio.play();
                        showSkins(skins, function (i) { });
                    };
                    layer.appendChild(juesebtns);
                    // document.body.appendChild(layerping);
                    layer1.appendChild(layerping);
                    function showNavs() {
                        juesecont.innerHTML = '';
                        var jineng = document.createElement('div');
                        jineng.className = config.activeNav === 0 ? 'jyqxz_juesecont_itemdiv  jyqxz_juese_scroll active' : 'jyqxz_juesecont_itemdiv  jyqxz_juese_scroll';
                        var audioindex = 0;
                        function playaudio(audios) {
                            if (audioindex > audios.length - 1) {
                                audioindex = 0;
                            }
                            audio.src = audios[audioindex];
                            audio.play();
                            audioindex++;
                        }
                        var jinengstr = '';
                        juese.skills.forEach((skill) => {
                            jinengstr += `
                                    <div class="jyqxz_juese_skill">
                                    <p class="jyqxz_juese_skillname">${skill.title}</p>
                                    <div class="jyqxz_juese_skillaudio"></div>
                                    <div class="jyqxz_juese_skillcont">${skill.info}</div>
                                    </div>
                                    `;
                        });
                        jineng.innerHTML = `
                                <div class="jyqxz_juesecont_item">
                                ${jinengstr}
                                </div>
                                `;
                        var audioimgs = jineng.getElementsByClassName('jyqxz_juese_skillaudio');
                        Array.prototype.forEach.call(audioimgs, (e, i) => {
                            e.onclick = (function (i) {
                                return function () {
                                    // playaudio(juese.skills[i].audios);
                                    //点击的技能配音
                                    //点击的技能配音
                                    // game.trySkillAudio(juese.skills[i].name,{
                                    //  name:juese.name,
                                    //   name1:juese.name,
                                    //   name2:juese.name},true);
                                    //game.playSkillAudio(juese.skills[i].name);
                                    if (juese.skills[i].name == 'zhengwang') {
                                        game.tryDieAudio({
                                            name: juese.name2,
                                            name1: juese.name2,
                                            name2: juese.name2,
                                        });
                                        return;
                                        /*************************************************************** */
                                    }
                                    var audio,
                                        skillnode = this;
                                    if (!skillnode.audioList || !skillnode.audioList.length) {
                                        skillnode.audioList = game.parseSkillAudio(juese.skills[i].name, juese.name2);
                                    }
                                    audio = skillnode.audioList.shift();
                                    game.playAudio(audio);
                                };
                            })(i);
                        });
                        juesecont.appendChild(jineng);
                        var taici = document.createElement('div');
                        taici.className = config.activeNav === 1 ? 'jyqxz_juesecont_itemdiv  jyqxz_juese_scroll active' : 'jyqxz_juesecont_itemdiv  jyqxz_juese_scroll';
                        var taicistr = '';
                        juese.taicis.forEach((skill) => {
                            // taicistr+=`
                            // <div class="jyqxz_juese_skill">
                            // <p class="jyqxz_juese_skilltaici">${juese.taici}</p>
                            // </div>
                            // `;
                            taicistr += `
                                    <div class="jyqxz_juese_skill">
                                    <p class="jyqxz_juese_taiciname">${skill.name}</p>
                                    <div class="jyqxz_juese_skillaudio"></div>
                                    <p class="jyqxz_juese_skilltaici">${skill.taici}</p>
                                    </div>
                                    `;
                        });
                        taici.innerHTML = `
                                <div class="jyqxz_juesecont_item">
                                ${taicistr}
                                </div>
                                `;
                        var audioimgs = taici.getElementsByClassName('jyqxz_juese_skillaudio');
                        Array.prototype.forEach.call(audioimgs, (e, i) => {
                            /***** */
                            e.onclick = (function (i) {
                                return function () {
                                    // playaudio(juese.skills[i].audios);
                                    //点击的技能配音
                                    //点击的技能配音
                                    // game.trySkillAudio(juese.skills[i].name,{
                                    //  name:juese.name,
                                    //   name1:juese.name,
                                    //   name2:juese.name},true);
                                    //game.playSkillAudio(juese.skills[i].name);
                                    if (juese.skills[i].name == 'zhengwang') {
                                        game.tryDieAudio({
                                            name: juese.name2,
                                            name1: juese.name2,
                                            name2: juese.name2,
                                        });
                                        return;
                                        /*************************************************************** */
                                    }
                                    var audio,
                                        skillnode = this;
                                    if (!skillnode.audioList || !skillnode.audioList.length) {
                                        skillnode.audioList = game.parseSkillAudio(juese.skills[i].name, juese.name2);
                                    }
                                    audio = skillnode.audioList.shift();
                                    game.playAudio(audio);
                                };
                            })(i);
                        });
                        juesecont.appendChild(taici);
                        var gushi = document.createElement('div');
                        gushi.className = config.activeNav === 2 ? 'jyqxz_juesecont_itemdiv  jyqxz_juese_scroll active' : 'jyqxz_juesecont_itemdiv  jyqxz_juese_scroll';
                        gushi.innerHTML = `
                                <div class="jyqxz_juesecont_item">
                                <div class="jyqxz_juese_skillcont">
                                ${juese.gushi}
                                </div>
                                </div>
                                `;
                        juesecont.appendChild(gushi);
                        var gonglue = document.createElement('div');
                        gonglue.className = config.activeNav === 3 ? 'jyqxz_juesecont_itemdiv  jyqxz_juese_scroll active' : 'jyqxz_juesecont_itemdiv  jyqxz_juese_scroll';
                        gonglue.innerHTML = `
                                <div class="jyqxz_juesecont_item">
                                <div class="jyqxz_juese_skillcont">
                                ${juese.gonglue}
                                </div>
                                </div>
                                `;
                        juesecont.appendChild(gonglue);
                    }
                    juesenavs.innerHTML = '';
                    var navDoms = [];
                    config.navs.forEach((nav, i) => {
                        var navdom = document.createElement('img');
                        navDoms.push(navdom);
                        navdom.className = 'jyqxz_juese_right_nav_item';
                        navdom.src = i === config.activeNav ? nav[1] : nav[0];
                        navdom.onmouseover = (function (i, navdom) {
                            return function () {
                                navdom.src = config.navs[i][1];
                            };
                        })(i, navdom);
                        navdom.onmouseout = (function (i, navdom) {
                            return function () {
                                navdom.src = i === config.activeNav ? config.navs[i][1] : config.navs[i][0];
                            };
                        })(i, navdom);
                        juesenavs.appendChild(navdom);
                    });
                    navDoms.forEach((navdom, i) => {
                        navdom.onclick = (function (i) {
                            return function () {
                                config.activeNav = i;
                                audio.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_choosebutton.mp3';
                                audio.play();
                                // showNavs();
                                Array.from(juesecont.getElementsByClassName('jyqxz_juesecont_itemdiv')).forEach((item, key) => {
                                    if (key == i) {
                                        item.classList.add('active');
                                    } else {
                                        item.classList.remove('active');
                                    }
                                });
                                navDoms.forEach((item, key) => {
                                    if (key == i) {
                                        item.src = config.navs[i][1];
                                    } else {
                                        item.src = config.navs[key][0];
                                    }
                                });
                            };
                        })(i);
                    });
                    var liusu = document.createElement('img');
                    liusu.src = 'extension/金庸群侠传/image/' + jueseDir + '/jy_liushu.png';
                    liusu.className = 'jyqxz_juese_right_nav_item_footer';
                    juesenavs.appendChild(liusu);
                    showNavs();
                    // leftbg.style.transform="scale("+ Math.min(height/1440,width/2560) +")";
                    backbtn.style.transform = 'scale(' + Math.min(height / 1440, width / 2560) + ')';
                    //单独渲染英雄杀等UI开始
                    //if (jueseDir == "juese_YingXiongSha") {
                    if (['juese_YingXiongSha', 'juese_DaoMuBiJi'].indexOf(jueseDir) !== -1) {
                        juesecont.appendChild(juesenavsP);
                        juesenavsP.style.position = 'absolute';
                        navbg.style.display = 'none';
                    } else {
                        layerping.appendChild(juesenavsP);
                        juesenavsP.style.transform = 'scale(' + Math.min(height / 1440, width / 2560) + ')';
                        navbg.style.display = 'block';
                    }
                    navbg.style.transform = 'scale(' + Math.min(height / 1440, width / 2560) + ')';
                    layer.style.transform = 'translate(-50%,-50%) scale(' + Math.min(height / 1440, width / 2560) + ')';
                    window.addEventListener(
                        'resize',
                        function () {
                            var width = document.body.clientWidth;
                            var height = document.body.clientHeight;
                            if (layer) {
                                // leftbg.style.transform="scale("+ Math.min(height/1440,width/2560) +")";
                                backbtn.style.transform = 'scale(' + Math.min(height / 1440, width / 2560) + ')';
                                //if (jueseDir == "juese_YingXiongSha") {
                                if (['juese_YingXiongSha', 'juese_DaoMuBiJi'].indexOf(jueseDir) !== -1) {
                                } else {
                                    juesenavsP.style.transform = 'scale(' + Math.min(height / 1440, width / 2560) + ')';
                                }
                                navbg.style.transform = 'scale(' + Math.min(height / 1440, width / 2560) + ')';
                                layer.style.transform = 'translate(-50%,-50%) scale(' + Math.min(height / 1440, width / 2560) + ')';
                                // layer.style.transform="translate(-1280px,-720px) scale("+ Math.min(height/1440,width/2560) +")";
                                // layer.style.transform="translate(-1280px,-720px) scale("+ width/2560+","+height/1440 +")";
                            }
                        },
                        false
                    );
                    //单独渲染英雄杀等UI结束
                }
                // document.getElementById("showjuese").onclick=function(){
                showjuese(
                    juese,
                    function () {
                        ui.click.touchpop();
                        // ui.click.intro.call(this);
                        // _status.clicked=true;
                    },
                    function (bool) {
                        if (bool) {
                            lib.config.favouriteCharacter.add(name);
                        } else {
                            lib.config.favouriteCharacter.remove(name);
                        }
                        game.saveConfig('favouriteCharacter', lib.config.favouriteCharacter);
                    },
                    function (name) {
                        var layerplay = ui.create.div('.poplayer.play', ui.window);
                        var videosdiv = ui.create.div('.videosdiv', layerplay);
                        videosdiv.style = 'width:1080px;height:600px;overflow-y:auto;';
                        var videodiv = ui.create.div('.jyqxz_videodiv', videosdiv);
                        videodiv.style = 'width:400px;height:300px;margin:10px 20px;float:left;';
                        videodiv.innerHTML = '<iframe src="http://player.bilibili.com/player.html?aid=401863073&bvid=BV1oo4y1M7e9&cid=1149159114&page=5" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>';
                    }
                );
                // }
            };
            lib.jy_guanfang_huanfu = ui.click.charactercard;
            lib.showjueseFn = showjueseFn;
            if (lib.config.extension_金庸群侠传_huanfu) {
                lib.arenaReady.push(function () {
                    ui.click.charactercard = lib.showjueseFn;
                });
            }
            /********************角色界面********************/
            get.jy_gengxin = function () {
                const cfg = 'extension_金庸群侠传_changelog';
                const pack = lib.extensionPack.金庸群侠传;
                const update = window.jy_update;
                if (!update) return false;
                pack.version = update.version;
                const gengxing = update[update.version];
                if (!gengxing) return false;
                if (pack.version != lib.config[cfg]) {
                    game.saveConfig(cfg, pack.version);
                } else {
                    return false;
                }
                const ul = document.createElement('ul');
                ul.style.textAlign = 'left';
                const caption = '金庸群侠传更新';
                const version = update.version;
                const players = gengxing.players || [];
                const cards = gengxing.cards || [];
                const changeLog = gengxing.changeLog || [];
                changeLog.forEach((value) => {
                    const li = document.createElement('li');
                    li.innerHTML = value;
                    ul.appendChild(li);
                });
                const dialog = ui.create.dialog(caption, 'hidden'),
                    lic = ui.create.div(dialog.content);
                lic.style.display = 'block';
                ul.style.display = 'inline-block';
                ul.style.marginLeft = '-40px';
                lic.appendChild(ul);
                if (players && players.length) {
                    players.forEach((value) => {
                        if (!lib.character[value]) lib.character[value] = get.character(value);
                    });
                    const player2 = players.filter((i) => lib.character[i]);
                    if (player2.length) {
                        dialog.addText('武将更新');
                        dialog.addSmall([player2, 'character']);
                        dialog.classList.add('forcebutton');
                        dialog.classList.add('withbg');
                    }
                }
                if (cards && cards.length) {
                    const cards2 = cards.filter((i) => lib.card[i]);
                    if (cards2.length) {
                        dialog.addText('卡牌更新');
                        dialog.addSmall([cards2.map((value) => [get.translation(get.type(value)), '', value]), 'vcard']);
                        dialog.classList.add('forcebutton');
                        dialog.classList.add('withbg');
                    }
                }
                dialog.addText('-----------------------------------------');
                dialog.addText('-----------------------------------------');
                dialog.addText('-------------------END-------------------');
                dialog.addText('-----------------------------------------');
                dialog.addText('-----------------------------------------');
                dialog.open();
                let hidden = false;
                if (!ui.auto.classList.contains('hidden')) {
                    ui.auto.hide();
                    hidden = true;
                }
                game.pause();
                const control = ui.create.control('确定', () => {
                    dialog.close();
                    control.close();
                    if (hidden) ui.auto.show();
                    game.resume();
                });
                lib.init.onfree();
            };
            var _showChangeLog = game.showChangeLog;
            game.showChangeLog = function () {
                _showChangeLog();
                var next = game.createEvent('jy_gengxin', false);
                next.setContent(function () {
                    get.jy_gengxin();
                });
            };
            //更改标记位置
            if (lib.config.extension_金庸群侠传_markChange) {
                var styleChangeMarkCSS = document.createElement('style');
                styleChangeMarkCSS.innerHTML += '.player>.dui-marks>.mark>div.mark-text {\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    position: relative;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    width: 17px;\n    height: 23px;\n    min-height: 16px;\n    line-height: 16px;\n    text-align: center;\n    font-size: 20px;\n    font-family: xinwei,xingkai;\n    color: rgb(77, 60, 51);\n    border-radius: 5px;\n    background-image: none;\n    box-shadow: none;\n    text-shadow: none;\n    animation: none;\n}';
                document.head.appendChild(styleChangeMarkCSS);
            }
            //武将搜索代码摘抄至扩展ol----------------------------------------------
            var kzol_create_characterDialog = ui.create.characterDialog;
            ui.create.characterDialog = function () {
                var dialog = kzol_create_characterDialog.apply(this, arguments);
                //判断手机电脑是否有搜索
                var class_control = document.getElementsByClassName('control')[1];
                if (class_control) {
                    class_control.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                        var str_jy = document.getElementsByClassName('pointerspan')[0].innerHTML;
                        if (!str_jy.match(/([\s\S]+?)搜索([\s\S]+?)/)) {
                            search_jy();
                        }
                    });
                }
                function search_jy() {
                    if (lib.config.mode == 'stone') return dialog;
                    var content_container = dialog.childNodes[0];
                    var content = content_container.childNodes[0];
                    var switch_con = content.childNodes[0];
                    var buttons = content.childNodes[1];
                    let Searcher = ui.create.div('.searcher.caption');
                    Searcher.style.textAlign = 'center';
                    var div = ui.create.div('');
                    div.style.display = 'inline';
                    div.innerHTML = '<input type="text" style="width:150px;height:30px"></input>←<select size="1" style="width:75px;height:30px"><option value="name">名称翻译</option><option value="name1">名称</option><option value="skill">技能翻译</option><option value="skill1">技能</option><option value="skill2">技能叙述</option></select>';
                    var input = div.querySelector('input');
                    let find = ui.create.button(['find', '搜索'], 'tdnodes');
                    find.style.display = 'inline';
                    let clickfind = function (e) {
                        e.stopPropagation();
                        let value = input.value;
                        if (value == '') {
                            game.alert('搜索不能为空');
                            input.focus();
                            return;
                        }
                        let choice = div.querySelector('select').options[div.querySelector('select').selectedIndex].value;
                        for (let btn of dialog.buttons) {
                            btn.classList.add('nodisplay');
                            if (choice.includes('name')) {
                                if (new RegExp(value, 'g').test(choice.length == 4 ? get.translation(btn.link) : btn.link)) btn.classList.remove('nodisplay');
                            } else {
                                let skills = lib.character[btn.link][3];
                                if (skills && skills.length) {
                                    if (skills.some((skill) => new RegExp(value, 'g').test(choice == 'skill1' ? skill : get.translation(skill, choice == 'skill' ? null : 'info')))) btn.classList.remove('nodisplay');
                                }
                            }
                        }
                    };
                    input.addEventListener('keyup', (e) => {
                        if (e.key == 'Enter') clickfind(e);
                    });
                    find.listen(clickfind);
                    Searcher.appendChild(div);
                    Searcher.appendChild(find);
                    while (switch_con.childNodes.length) {
                        switch_con.removeChild(switch_con.firstChild);
                    }
                    switch_con.prepend(Searcher);
                }
                return dialog;
            };
            //武将搜索代码摘抄至扩展ol------------底部----------------------------------
            //--------------------更新提示----------------------------------------------
            //----------------------------------酒修改-----------------------//
            //---------------界--标--------------------//
            //---------------界--标--------------------//
            if (lib.skill.jiu2) {
                lib.skill.jiu2.trigger.player = 'useCard';
            }
            //----------------------------------酒修改-----------------------//
            //主公
            Array.prototype.jyCanGainD = function (pos, fun) {
                return this.filter(function (card) {
                    if (pos.indexOf(get.position(card, true)) == -1) return false;
                    return !fun || fun(card);
                });
            };
            Array.prototype.jyIsIn = function (fun, isAlive) {
                return this.filter(function (player) {
                    if (!player[isAlive ? 'isAlive' : 'isIn']()) return false;
                    return !fun || fun(player);
                });
            };
            get.jyValue = function (card, target) {
                if (target.getCards('j').includes(card)) {
                    var efff = get.effect(
                        target,
                        {
                            name: card.viewAs || card.name,
                            cards: [card],
                        },
                        target,
                        target
                    );
                    if (efff > 0) return 0.5;
                    if (efff == 0) return 0;
                    return -1.5;
                }
                if (target.getCards('e').includes(card)) {
                    var evalue = get.equipValue(card, target);
                    if (evalue > 0) return 1;
                    if (evalue == 0) return -0.2;
                    return -0.5;
                }
                return 1;
            };
            get.jyCardDu = function (card, player, evt, isdu) {
                var name = card.name;
                if (isdu && name == 'du') return true;
                var names = [
                    //已判断属性杀,不需添加属性杀
                    'shandian',
                    'jydiyshengsifu',
                    'jydiy_shezhang',
                    'jydiy_jinsidahuandao',
                    'zhuque',
                    'tengjia',
                    'huoshan',
                    'wuxinghelingshan',
                    'jydiyhuojianqiang',
                    'huogong',
                    'jydiywuchanyi',
                    'jydiyhuyitengpai',
                    'jydiy_jingsibeixin',
                ];
                if (names.includes(name)) return true;
                if (name != 'sha' && get.tag({ name: name }, 'natureDamage')) return true;
                return name == 'sha' && game.hasNature(card);
            };
            get.jyGuoHeAI = function (player, target, pos, fun) {
                if (pos == 'hej' && !fun) return lib.card.guohe.ai.result.target(player, target);
                var att = get.attitude(player, target) > 0;
                var bool =
                    target.countDiscardableCards(player, pos, function (cardx) {
                        if (get.jyValue(cardx, target) > 0) return false;
                        return !fun || fun(cardx);
                    }) > 0;
                if (att && bool) return 1;
                //判断为友方且有负面牌返回1
                var bool2 =
                    target.countDiscardableCards(player, pos, function (cardx) {
                        if (get.jyValue(cardx, target) <= 0) return false;
                        return !fun || fun(cardx);
                    }) > 0;
                if (!att && bool2) return -1;
                //判断为敌方且有正面牌返回-1
                return 0;
            };
            get.jyShunShouAI = function (player, target, pos, fun) {
                if (pos == 'hej' && !fun) return lib.card.shunshou.ai.result.target(player, target);
                var att = get.attitude(player, target) > 0;
                var bool =
                    target.countGainableCards(player, pos, function (cardx) {
                        if (get.jyValue(cardx, target) > 0) return false;
                        return !fun || fun(cardx);
                    }) > 0;
                if (att && bool) return 1;
                //判断为友方且有负面牌返回1
                var bool2 =
                    target.countGainableCards(player, pos, function (cardx) {
                        if (get.jyValue(cardx, target) <= 0) return false;
                        return !fun || fun(cardx);
                    }) > 0;
                if (!att && bool2) return -1;
                //判断为敌方且有正面牌返回-1
                return 0;
            };
            //---------------------指示线特效----------------------------------------------
            //if(lib.config.extension_金庸群侠传_jy_linexy && lib.config.extension_金庸群侠传_jy_linexy!="default") {
            get.LineAnim = function () {
                var LineAnim = {
                    time: 1100,
                    position: 'screen',
                    width: '230px',
                    height: '115px',
                    backgroundSize: '100% 100%',
                    opacity: 1,
                    show: 'none',
                    fade: true,
                    pause: false,
                    rate_zhen: 18,
                    jump_zhen: false,
                    qianzhui: '',
                    liang: false,
                    isLine: true,
                    cycle: true,
                    style: {},
                    skills: [],
                    cards: [],
                    forbid: false,
                    image: lib.config.extension_金庸群侠传_jy_linexy,
                };
                return LineAnim;
            };
            game.jy_PlayLineAnimation = function (name, node, fake, points) {
                var animation = get.LineAnim();
                if (animation == undefined) return;
                if (animation.time <= 100000) {
                    if (animation.pause != false && !_status.paused2 && !_status.nopause) {
                        _status.jy_onAnimationPause = true;
                        game.pause2();
                    }
                    if (_status.jy_onAnimation == undefined) _status.jy_onAnimation = 0;
                    _status.jy_onAnimation++;
                }
                var src;
                if (animation.image != undefined) src = 'extension/金庸群侠传/image/animation_linexy/' + animation.image + '?' + new Date().getTime();
                var finish = function () {
                    var animationID;
                    var timeoutID;
                    var interval;
                    var div = ui.create.div();
                    if (fake == true) {
                        ui.window.appendChild(div);
                    } else {
                        if (node == undefined || node == false) {
                            ui.window.appendChild(div);
                        } else {
                            node.appendChild(div);
                        }
                    }
                    if (animation.style != undefined) {
                        for (var i in animation.style) {
                            if (i == 'innerHTML') continue;
                            div.style[i] = animation.style[i];
                        }
                    }
                    var judgeStyle = function (style) {
                        if (animation.style == undefined) return false;
                        if (animation.style != undefined && animation.style[style] != undefined) return true;
                        return false;
                    };
                    if (judgeStyle('innerHTML')) div.innerHTML = animation.style.innerHTML;
                    if (judgeStyle('width') == false) div.style.width = animation.width;
                    if (judgeStyle('height') == false) div.style.height = animation.height;
                    if (judgeStyle('backgroundSize') == false && judgeStyle('background-size') == false) div.style.backgroundSize = animation.backgroundSize;
                    if (judgeStyle('opacity') == false) div.style.opacity = animation.opacity;
                    if (judgeStyle('zIndex') == false && judgeStyle('z-index') == false) div.style.zIndex = 1001;
                    if (judgeStyle('borderRadius') == false && judgeStyle('border-radius') == false) div.style.borderRadius = '5px';
                    if (judgeStyle('pointer-events') == false && judgeStyle('pointerEvents') == false) div.style['pointer-events'] = 'none';
                    if (src != undefined) {
                        if (animation.image.includes('.')) {
                            div.setBackgroundImage(src);
                        } else {
                            var type_frame1 = 0;
                            var type_frame = '.jpg';
                            var num_frame = 1;
                            type_frame = '.png';
                            num_frame = 8;
                            var folder_frame = 'extension/金庸群侠传/image/animation_linexy/' + animation.image + '/';
                            var div1 = ui.create.div();
                            div1.style.height = '100%';
                            div1.style.width = '100%';
                            div1.style.top = '0px';
                            div1.style.left = '0px';
                            div.appendChild(div1);
                            var canvas = document.createElement('canvas');
                            canvas.width = div1.offsetWidth;
                            canvas.height = div1.offsetHeight;
                            div1.appendChild(canvas);
                            var context = canvas.getContext('2d');
                            var start;
                            var imgs = [];
                            var imgs_num = 0;
                            for (var i = 0; i < num_frame; i++) {
                                var img = new Image();
                                img.src = folder_frame + (animation.qianzhui == undefined ? '' : animation.qianzhui) + (animation.liang == true ? (i < 10 ? '0' + i : i) : i) + type_frame;
                                if (i >= num_frame - 1) img.jy_final = true;
                                img.onload = function () {
                                    imgs.push(this);
                                    if (this.jy_final == true) start();
                                };
                                img.onerror = function () {
                                    if (this.jy_final == true) start();
                                };
                            }
                            start = function () {
                                var play = function () {
                                    if (imgs_num >= imgs.length) return;
                                    var img = imgs[imgs_num];
                                    context.clearRect(0, 0, img.width, img.height);
                                    context.drawImage(img, 0, 0, img.width, img.height, 0, 0, div1.offsetWidth, div1.offsetHeight);
                                    imgs_num++;
                                    if (animation.jump_zhen == true && imgs[imgs_num + 1] != undefined) imgs.remove(imgs_num + 1);
                                    if (imgs_num >= imgs.length) {
                                        if (animation.cycle == true) {
                                            imgs_num = 0;
                                        } else {
                                            if (interval != undefined) clearInterval(interval);
                                            if (timeoutID != undefined) clearTimeout(timeoutID);
                                            if (animationID != undefined) cancelAnimationFrame(animationID);
                                        }
                                    }
                                };
                                interval = setInterval(play, animation.rate_zhen == undefined ? 45 : 1000 / animation.rate_zhen);
                            };
                        }
                    }
                    if (points == undefined) {
                        if (fake == true) {
                            div.style.top = top - div.offsetHeight / 2 + 'px';
                            div.style.left = left - div.offsetWidth / 2 + 'px';
                        } else {
                            if (judgeStyle('top') == false) div.style.top = 'calc(50% - ' + div.offsetHeight / 2 + 'px)';
                            if (judgeStyle('left') == false) div.style.left = 'calc(50% - ' + div.offsetWidth / 2 + 'px)';
                        }
                    } else {
                        div.style.top = points[0][1] - div.offsetHeight / 2 + 'px';
                        div.style.left = points[0][0] + 'px';
                    }
                    if (points != undefined) {
                        var timeS = (animation.fade == true ? animation.time - 450 : animation.time - 100) / 1000 / 2;
                        var getAngle = function (x1, y1, x2, y2, bool) {
                            var x = x1 - x2;
                            var y = y1 - y2;
                            var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                            var cos = y / z;
                            var radina = Math.acos(cos);
                            var angle = 180 / (Math.PI / radina);
                            if (x2 > x1 && y2 === y1) angle = 0;
                            if (x2 > x1 && y2 < y1) angle = angle - 90;
                            if (x2 === x1 && y1 > y2) angle = -90;
                            if (x2 < x1 && y2 < y1) angle = 270 - angle;
                            if (x2 < x1 && y2 === y1) angle = 180;
                            if (x2 < x1 && y2 > y1) angle = 270 - angle;
                            if (x2 === x1 && y2 > y1) angle = 90;
                            if (x2 > x1 && y2 > y1) angle = angle - 90;
                            if (bool == true && angle > 90) angle -= 180;
                            return angle;
                        };
                        var p1 = points[0];
                        var p2 = points[1];
                        var x0 = p1[0];
                        var y0 = p1[1];
                        var x1 = p2[0];
                        var y1 = p2[1];
                        div.style.transition = 'all 0s';
                        div.style.transform = 'rotate(' + getAngle(x0, y0, x1, y1, true) + 'deg)' + (x0 > x1 ? '' : ' rotateY(180deg)');
                        div.style['transform-origin'] = '0 50%';
                        var div2 = ui.create.div();
                        div2.style.zIndex = 1000;
                        div2.style['pointer-events'] = 'none';
                        div2.style.height = '20px';
                        div2.style.width = Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5) + 2 + 'px';
                        div2.style.left = x0 + 'px';
                        div2.style.top = y0 - 10 + 'px';
                        div2.style.transform = 'rotate(' + getAngle(x0, y0, x1, y1) + 'deg) scaleX(0)';
                        div2.style['transform-origin'] = '0 50%';
                        div2.style.transition = 'all ' + (timeS * 4) / 3 + 's';
                        if (src != undefined && animation.image.indexOf('.') == -1) {
                            div2.style.backgroundSize = '100% 100%';
                            div2.setBackgroundImage('extension/金庸群侠传/image/animation_linexy/' + animation.image + '/line.png');
                        } else {
                            div2.style.background = '#ffffff';
                        }
                        setTimeout(function () {
                            div.style.transition = 'all ' + (timeS * 4) / 3 + 's';
                            div.style.transform += ' translateX(' + -(Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5) + 2) + 'px)';
                            //div.style.left=(div.offsetLeft+(x1-x0))+'px';
                            //div.style.top=(div.offsetTop+(y1-y0))+'px';
                            div2.style.transform = 'rotate(' + getAngle(x0, y0, x1, y1) + 'deg) scaleX(1)';
                        }, 50);
                        setTimeout(
                            function () {
                                div2.style.transition = 'all ' + (timeS * 2) / 3 + 's';
                                //div2.style.transform='rotate('+getAngle(x0,y0,x1,y1)+'deg) rotateY(90deg)';
                                div2.style.transform = 'rotate(' + getAngle(x0, y0, x1, y1) + 'deg) translateX(' + (Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5) + 2 - Math.pow(Math.pow(div.offsetHeight / 2, 2) + Math.pow(div.offsetWidth / 2, 2), 0.5)) + 'px) scaleX(0.01)';
                                //div2.style.left=(div2.offsetLeft+(x1-x0))+'px';
                                //div2.style.top=(div2.offsetTop+(y1-y0))+'px';
                            },
                            50 + ((timeS * 4) / 3) * 1000
                        );
                        node.appendChild(div2);
                    }
                    if (animation.time <= 100000) {
                        if (animation.fade == true) {
                            if (div2 != undefined) {
                                setTimeout(function () {
                                    div2.hide();
                                }, animation.time - 350);
                                setTimeout(function () {
                                    div.hide();
                                }, animation.time - 400);
                            } else {
                                setTimeout(function () {
                                    div.hide();
                                }, animation.time - 350);
                            }
                        }
                        setTimeout(function () {
                            if (interval != undefined) clearInterval(interval);
                            if (timeoutID != undefined) clearTimeout(timeoutID);
                            if (animationID != undefined) cancelAnimationFrame(animationID);
                            if (fake == true) {
                                ui.window.removeChild(div);
                            } else {
                                if (node == undefined || node == false) {
                                    ui.window.removeChild(div);
                                } else {
                                    node.removeChild(div);
                                }
                            }
                            if (div2 != undefined) node.removeChild(div2);
                            _status.jy_onAnimation--;
                            if (_status.jy_onAnimationPause == true && _status.jy_onAnimation == 0) {
                                delete _status.jy_onAnimationPause;
                                game.resume2();
                            }
                        }, animation.time);
                    }
                };
                if (animation.delay != undefined) {
                    setTimeout(finish, animation.delay);
                } else {
                    finish();
                }
            };
            game.OriginLineXy = game.linexy;
            game.linexy = function (path) {
                if (!lib.config.extension_金庸群侠传_jy_linexy || lib.config.extension_金庸群侠传_jy_linexy == 'default') return game.OriginLineXy.apply(this, arguments);
                var from = [path[0], path[1]];
                var to = [path[2], path[3]];
                if (game.chess) {
                    game.jy_PlayLineAnimation(lib.config.extension_金庸群侠传_jy_linexy, ui.chess, false, [from, to]);
                } else {
                    game.jy_PlayLineAnimation(lib.config.extension_金庸群侠传_jy_linexy, ui.arena, false, [from, to]);
                }
            };
            //};
            //-------------随机------------
            ////////////////////////新函数////////////////////////
            ////////////////////////新函数////////////////////////
            get.randomCard = function (name, create) {
                var cards = get.randomCards(1, name, create);
                if (cards.length) return cards[0];
                return null;
            };
            get.randomCardsNum = function (name, create) {
                var cards = get.randomCards(999, name, create);
                return cards.length;
            };
            get.randomCards = function (num, name, create) {
                ///name 要求为函数///
                var num = typeof num == 'number' ? num : 1;
                if (typeof name != 'function') {
                    alert('get.randomCards:请检查name参数');
                    return [];
                }
                if (num <= 0) {
                    alert('巧妇难为无米之炊!');
                }
                var cards,
                    list = [];
                if (create != 'discardPile') {
                    var cardPile = Array.from(ui.cardPile.childNodes);
                    list = list.concat(cardPile);
                }
                if (create != 'cardPile') {
                    var discardPile = Array.from(ui.discardPile.childNodes);
                    list = list.concat(discardPile);
                }
                cards = list.filter(name);
                if (!cards.length) return [];
                if (num >= cards.length) return cards;
                return cards.randomGets(num);
            };
            //---------------------------------------------自定义换判定牌------------------------------------------
            lib.element.player.swapJudge = function (target) {
                var next = game.createEvent('swapJudge');
                next.player = this;
                next.target = target;
                next.setContent('swapJudge');
                return next;
            };
            lib.element.content.swapJudge = function () {
                'step 0';
                game.log(player, '和', target, '交换了判定区中的牌');
                ('step 1');
                event.cards = [player.getCards('j'), target.getCards('j')];
                player.lose(event.cards[0], ui.ordering, 'visible');
                target.lose(event.cards[1], ui.ordering, 'visible');
                if (event.cards[0].length) player.$give(event.cards[0], target);
                if (event.cards[1].length) target.$give(event.cards[1], player);
                ('step 2');
                for (var i = 0; i < event.cards[1].length; i++) {
                    if (player.canAddJudge(event.cards[1][i])) {
                        if (event.cards[1][i].viewAs) player.addJudge({ name: event.cards[1][i].viewAs }, [event.cards[1][i]]);
                        else player.addJudge(event.cards[1][i]);
                    }
                }
                for (var i = 0; i < event.cards[0].length; i++) {
                    if (target.canAddJudge(event.cards[0][i])) {
                        if (event.cards[0][i].viewAs) target.addJudge({ name: event.cards[0][i].viewAs }, [event.cards[0][i]]);
                        else target.addJudge(event.cards[0][i]);
                    }
                }
            };
            lib.skill.jy_baiban = {
                inherit: 'baiban',
                skillBlocker(skill, player) {
                    if (!player.storage.jy_baiban.includes(skill)) return false;
                    return !lib.skill[skill].charlotte;
                },
                init(player, skill) {
                    if (!player.storage[skill]) player.storage[skill] = [];
                    player.addSkillBlocker(skill);
                },
                onremove(player, skill) {
                    player.removeSkillBlocker(skill);
                    delete player.storage[skill];
                },
                intro: {
                    content(storage, player, skill) {
                        var list = player.getSkills(null, false, false).filter(function (i) {
                            return lib.skill.jy_baiban.skillBlocker(i, player);
                        });
                        if (list.length) return '失效技能:' + get.translation(list);
                        return '无失效技能';
                    },
                },
            };
            //---------------------------------------------自定义------------------------------------------
            //------------------------------------------背景图片---------------------------------------
            game.jyBackground_Picture = function () {
                var temp = lib.config.extension_金庸群侠传_Background_Picture;
                if (temp == 'auto') {
                    var list = ['wms_JYBackground', 'wms_JYBackground_congling', 'wms_JYBackground_mingding', 'wms_JYBackground_yanmen', 'wms_JYBackground_heimuya', 'wms_JYBackground_Ensemble', 'wms_JYBackground_shaolin', 'wms_JYBackground_juezhan', 'wms_JYBackground_juexiang', 'wms_JYBackground_binghuo', 'wms_JYBackground_guangmingding', 'wms_JYBackground_jinlan', 'wms_JYBackground_qiqiechengqun', 'wms_JYBackground_honghuahui'];
                    if (_status.jyBackground_Picture) list.remove(_status.jyBackground_Picture);
                    temp = list.randomGet();
                }
                _status.jyBackground_Picture = temp;
                if (temp !== '1') {
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/金庸群侠传/image/background/' + temp + '.jpg');
                } else {
                    game.broadcastAll() + ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
                }
                var item = lib.config.extension_金庸群侠传_Background_Picture;
                if (item != 'auto') {
                    if (_status.Background_Picture_timeout) {
                        clearTimeout(_status.Background_Picture_timeout);
                    }
                } else if (item == 'auto') {
                    var autotime = lib.config.extension_金庸群侠传_Background_Picture_auto;
                    var Timeout = autotime ? parseInt(autotime) : 30000;
                    ///////////////////////////////////////////////////////
                    var Timeout2 = _status.Background_Picture_Timeout2;
                    if (_status.Background_Picture_timeout && Timeout2 && Timeout2 != Timeout) {
                        clearTimeout(_status.Background_Picture_timeout);
                    }
                    /////////////////////////////////////////////////
                    _status.Background_Picture_timeout = setTimeout(function () {
                        game.jyBackground_Picture();
                    }, Timeout);
                    _status.Background_Picture_Timeout2 = Timeout;
                }
            };
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            if (lib.config.extension_金庸群侠传_Background_Picture && lib.config.extension_金庸群侠传_Background_Picture != '1') {
                lib.arenaReady.push(function () {
                    game.jyBackground_Picture();
                });
            }
            //------------------------------------------背景图片---------------------------------------
            //------------------------------------------背景音乐---------------------------------------
            game.jyplayBackgroundMusic = function () {
                //if(lib.config.background_music=='music_off'){
                //ui.backgroundMusic.src='';
                //}
                //ui.backgroundMusic.autoplay=true;
                var temp = lib.config.extension_金庸群侠传_Background_Music;
                if (temp == '0') {
                    temp = Math.floor(2 + Math.random() * 84); //2加0到29
                    //生成一个范围2到63的整数
                    temp = temp.toString();
                    //转为字符串
                }
                ui.backgroundMusic.pause();
                var item = {
                    2: 'jy_bgm_tiexuedanxin.mp3',
                    3: 'jy_bgm_chiqingzhong.mp3',
                    4: 'jy_bgm_daojianrumeng.mp3',
                    5: 'jy_bgm_changhaixiao.mp3',
                    6: 'jy_bgm_TheLegendOfAshitaka.mp3',
                    7: 'jy_bgm_hero.mp3',
                    8: 'jy_bgm_yuzhongkuqi.mp3',
                    9: 'jy_bgm_zhuyuanqingge.mp3',
                    10: 'jy_bgm_jiangshanmeiren.mp3',
                    11: 'jy_bgm_nanerziqiang.mp3',
                    12: 'jy_bgm_luweidang.mp3',
                    13: 'jy_bgm_xitianqujingluyaotiao.mp3',
                    14: 'jy_bgm_tianlongbalu_ost.mp3',
                    15: 'jy_bgm_yuyejuebie.mp3',
                    16: 'jy_bgm_guxingduyin.mp3',
                    17: 'jy_bgm_tiandidouzaiwoxinzhong.mp3',
                    18: 'jy_bgm_tianlongbabu.mp3',
                    19: 'jy_bgm_zhuichunfeng.mp3',
                    20: 'jy_bgm_aishangzhangwuji.mp3',
                    21: 'jy_bgm_chiqingzong_denglun.mp3',
                    22: 'jy_bgm_longnvzhisheng.mp3',
                    23: 'jy_bgm_wanlichangchengyongbudao.mp3',
                    24: 'jy_bgm_wenshijian.mp3',
                    25: 'jy_bgm_huaxin.mp3',
                    26: 'jy_bgm_xiaodaohuixuqu.mp3',
                    27: 'jy_bgm_DragonsLegend.mp3',
                    28: 'jy_bgm_aishangzhangwuji_ost.mp3',
                    29: 'jy_bgm_zhuichunfeng_ost.mp3',
                    30: 'jy_bgm_nanniandejing.mp3',
                    31: 'jy_bgm_shifei.mp3',
                    32: 'jy_bgm_chushitaiji.mp3',
                    33: 'jy_bgm_lichunyuan.mp3',
                    34: 'jy_bgm_qingtian.mp3',
                    35: 'jy_bgm_shiji.mp3',
                    36: 'jy_bgm_tougong.mp3',
                    37: 'jy_bgm_taijiquan.mp3',
                    38: 'jy_bgm_yuanyanghudiemeng.mp3',
                    39: 'jy_bgm_aoqixiaoaowanchonglang.mp3',
                    40: 'jy_bgm_heweiyongheng.mp3',
                    41: 'jy_bgm_liangliangxiangwang.mp3',
                    42: 'jy_bgm_shuiyuan.mp3',
                    43: 'jy_bgm_liangliangxiangwang2.mp3',
                    44: 'jy_bgm_huoyuanjia.mp3',
                    45: 'jy_bgm_chaoyueshikong.mp3',
                    46: 'jy_bgm_wukuiyuxin.mp3',
                    47: 'jy_bgm_jianghulu.mp3',
                    48: 'jy_bgm_jianghulu2.mp3',
                    49: 'jy_bgm_zuimengren.mp3',
                    50: 'jy_bgm_jianhun.mp3',
                    51: 'jy_bgm_jinzhongbaoguo.mp3',
                    52: 'jy_bgm_shujianenchoulu.mp3',
                    53: 'jy_bgm_xuezhongqing.mp3',
                    54: 'jy_bgm_xiakemeng.mp3',
                    55: 'jy_bgm_ruguolaisheng.mp3',
                    56: 'jy_bgm_tanrenjian_hechangxi.mp3',
                    57: 'jy_bgm_aijiangshanrenaimeiren_huxia.mp3',
                    58: 'jy_bgm_tiandiguyingrenwoxing.mp3',
                    59: 'jy_bgm_siqing.mp3',
                    60: 'jy_bgm_renshengruci.mp3',
                    61: 'jy_bgm_liuguangfeiwu.mp3',
                    62: 'jy_bgm_shuimanjinshan.mp3',
                    63: 'jy_bgm_xueqianxun.mp3',
                    64: 'jy_bgm_tiexuedanxin_liu_liu_jin.mp3',
                    65: 'jy_bgm_changhaixiao_xiaozhan.mp3',
                    66: 'jy_bgm_tianxia_zhangjie.mp3',
                    67: 'jy_bgm_jianxin_zhangjie.mp3',
                    68: 'jy_bgm_haohan_zhangjie.mp3',
                    69: 'jy_bgm_chiqingzhong_chenyipeng.mp3',
                    70: 'jy_bgm_xiaoxiangzi.mp3',
                    71: 'jy_bgm_kuanshu.mp3',
                    72: 'jy_bgm_guiqulai.mp3',
                    73: 'jy_bgm_shenhuaqinghua.mp3',
                    74: 'jy_bgm_shuangjiao.mp3',
                    75: 'jy_bgm_wuque.mp3',
                    76: 'jy_bgm_hongchenwuhui.mp3',
                    77: 'jy_bgm_youlinggongzhu_zhoushenlanglang.mp3',
                    78: 'jy_bgm_daojianruomeng.mp3',
                    79: 'jy_bgm_zhoutianya.mp3',
                    80: 'jy_bgm_anyefuxiang.mp3',
                    81: 'jy_bgm_sijunanran.mp3',
                    82: 'jy_bgm_nanniandejing_bianzhou.mp3',
                    83: 'jy_bgm_linboweibu.mp3',
                    84: 'jy_bgm_enduanyijue.mp3',
                };
                if (item[temp]) {
                    ui.backgroundMusic.src = 'extension/金庸群侠传/audio/bgm/' + item[temp];
                } else {
                    game.playBackgroundMusic();
                    ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
                }
            };
            //////////////////////////////////////////////////////////////////
            if (lib.config.extension_金庸群侠传_Background_Music && lib.config.extension_金庸群侠传_Background_Music != '1') {
                lib.arenaReady.push(function () {
                    //ui.backgroundMusic.autoplay=true;
                    //ui.backgroundMusic.pause();
                    game.jyplayBackgroundMusic();
                    ui.backgroundMusic.addEventListener('ended', game.jyplayBackgroundMusic);
                });
            }
            game.bangpaiBackgroundMusic = function (src) {
                if (src && typeof src != 'object') {
                    ui.bangpaiBackgroundMusic = src;
                    ui.backgroundMusic.src = ui.bangpaiBackgroundMusic;
                } else {
                    if (ui.bangpaiBackgroundMusic) {
                        ui.backgroundMusic.src = ui.bangpaiBackgroundMusic;
                    } else {
                        ui.backgroundMusic.src = 'extension/金庸群侠传/audio/bgm/jy_bgm_daojianruomeng.mp3';
                    }
                }
            };
            //------------------------------------------背景音乐结束---------------------------------------
            ////金庸武将选择势力的函数 jy_jue_chooseGroup
            lib.element.player.jy_chooseGroup = function (forced, log, broadcast) {
                var next = game.createEvent('jy_chooseGroup');
                next.player = this;
                next.forced = forced; //是否锁定
                next.log = log;
                next.broadcast = broadcast;
                next.setContent(function () {
                    'step 0';
                    var list = [],
                        str;
                    if (lib.config.extension_金庸群侠传_changeGroup) {
                        list = ['jy_qin', 'jy_tang', 'jy_song', 'jy_yuan', 'jy_ming', 'jy_qing', 'jy_lie', 'jy_xie'];
                    } else {
                        list = lib.group.slice(0);
                        list.remove('shen');
                        list.remove('jy_jue');
                    }
                    if (!forced) {
                        str = '是否选择一个势力改变你的势力？';
                        list.push('cancel2');
                    } else str = '请选择一个势力改变你的势力!';
                    player.chooseControl(list, ui.create.dialog(str, 'hidden')).ai = function () {
                        return Math.floor(Math.random() * list.length);
                    };
                    ('step 1');
                    if (result.control && result.control != 'cancel2') {
                        player.changeGroup(result.control, event.log, event.broadcast);
                        event.result = { bool: true, control: result.control };
                    } else {
                        event.result = { bool: false };
                    }
                });
            };
            if (config.jy_jue_chooseGroup) {
                lib.skill._jy_chooseGroup = {
                    mode: ['identity'],
                    trigger: { global: ['gameStart', 'gameDrawBefore'] },
                    forced: true,
                    popup: false,
                    silent: true,
                    filter(event, player) {
                        if (get.jy_nameCNBool(player, '绝狄云', true)) return false;
                        return player.group && player.group == 'jy_jue';
                    },
                    content() {
                        player.jy_chooseGroup(true, false);
                    },
                };
            }
            lib.character.diy_card_jy_card_config = ['male', 'shen', 3, [], []];
            if (config.disEnableCharacter) {
                lib.arenaReady.push(function () {
                    var mode = get.mode();
                    if (mode != 'identity') return; //只修改身份模式武将禁用//
                    var list = [];
                    if (lib.config.characters.includes('tlbb')) list.add('tlbb');
                    if (lib.config.characters.includes('sdyx')) list.add('sdyx');
                    if (lib.config.characters.includes('sdxl')) list.add('sdxl');
                    if (lib.config.characters.includes('yttl')) list.add('yttl');
                    if (lib.config.characters.includes('xajh')) list.add('xajh');
                    if (lib.config.characters.includes('jyldj')) list.add('jyldj');
                    if (lib.config.characters.includes('qtpz')) list.add('qtpz');
                    if (lib.config.characters.includes('ywhy')) list.add('ywhy');
                    //alert(list+'');
                    if (!list.length) {
                        alert('禁其他扩展武将失效,请确保开启至少一个金包武将包!');
                        return;
                    }
                    var list2 = ['tlbb', 'sdyx', 'sdxl', 'yttl', 'xajh', 'jyldj', 'qtpz', 'ywhy', 'jy_chongwu'];
                    lib.config.all.characters = list2;
                    for (var i in lib.characterPack) {
                        if (!list2.includes(i)) {
                            for (var j in lib.characterPack[i]) {
                                delete lib.character[j];
                            }
                            delete lib.characterPack[i];
                        }
                    }
                });
            }
            lib.jy_changeSkill = config.changeGroup;
            //---隐藏音乐可视化菜单上的文字,这样只显示设计的CD封面看着更简洁干净---
            if (lib.config.extension_金庸群侠传_Background_Music) {
                var cbcss = document.createElement('style');
                cbcss.innerHTML = '.jymusicname>.name{color:gold; visibility:hidden;}';
                document.head.appendChild(cbcss);
            }
            //----------卡牌使用音效---------------------
            if (config.jyUseCardAudioEffect) {
                lib.skill._jyUseCardAudioEffect_jy = {
                    trigger: { player: 'useCard' },
                    forced: true,
                    charlotte: true,
                    firstDo: true,
                    CardList: ['jiu'],
                    filter(event, player) {
                        return lib.skill._jyUseCardAudioEffect_jy.CardList.includes(event.card.name);
                    },
                    content() {
                        game.playAudio('../extension/金庸群侠传/audio/UseCardaudioEffect', trigger.card.name + '.mp3');
                    },
                };
            }
            // ---------------------------------------阵亡配音------------------------------------------//
            // ---------------------------------------定义背景------------------------------------------//
            // ---------------------------------------武将分栏------------------------------------------//
        },
        precontent(jyqxz) {
            //内容标记 precontent
            //这里的 jyqxz 为本包的 选项代码
            //函数执行时机为游戏数据加载之前,且不受禁用扩展的限制
            //除添加模式外请慎用
            //导出时本段代码中的换行、缩进以及注释将被清除
            /**********************************************************/
            //复制素材的代码
            game.extension_金庸群侠传_copy = function (sdir, fn, ddir, callback) {
                game.ensureDirectory(ddir, function () { });
                game.readFile(sdir + '/' + fn, function (data) {
                    game.writeFile(data, ddir, fn, callback || function () { });
                });
            };
            //隐藏卡牌文字、攻击范围、改使用装备音效的函数
            String.prototype.newFedit = function (ins) {
                var CAFst = this;
                var CAFstr = CAFst.slice(CAFst.indexOf('{') + 1).slice(0, -1);
                return ins(CAFstr);
            };
            //
            //咸鱼大佬的资料页阵亡配音代码,不会被武将作为技能获得,开始游戏后依然能看到.
            if (!lib.config.extension_金庸群侠传_huanfu) {
                var charactercard = ui.click.charactercard;
                const MytryDieAudio = function (player) {
                    const audioList = get.Audio.die({ player }).fileList;
                    return audioList.length ? audioList[0] : true;
                };
                const MyDietext = function (name) {
                    let dieAudios = game
                        .parseDieTextMap(name)
                        .filter((i) => 'text' in i)
                        .map((i) => i.text);
                    if (!dieAudios.length) dieAudios = ['暂无台词!'];
                    return dieAudios.join('<br>');
                };
                ui.click.charactercard = function (name, sourcenode, noedit, resume, avatar) {
                    if (!lib.character[name]) lib.character[name] = get.character(name);
                    lib.skill.jyzhenwangpeiyin = {
                        audio: MytryDieAudio({ name: name, name1: name, name2: name }),
                    };
                    lib.translate.jyzhenwangpeiyin = '阵亡';
                    lib.translate.jyzhenwangpeiyin_info = MyDietext(name);
                    const skills = lib.character[name][3];
                    const skills2 = skills.slice(0);
                    skills2.push('jyzhenwangpeiyin');
                    lib.character[name][3] = skills2;
                    charactercard.apply(this, arguments);
                    //Object.keys(oldSkill_info).forEach(function(key){
                    //lib.translate[key]=oldSkill_info[key];
                    //});
                    lib.character[name][3] = skills;
                };
            }
            // ---------------------------------------配音函数------------------------------------------//
            game.playJY = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) {
                        game.playAudio(dir, sex, fn);
                    } else if (dir) {
                        game.playAudio(dir, fn);
                    } else {
                        game.playAudio('../extension/金庸群侠传/peiyin', fn);
                    }
                }
            };
            //折叠同名、或新旧武将
            lib.characterReplace.ywhy_zhanzhao = ['ywhy_zhanzhao', 'ywhy_spzhanzhao'];
            lib.characterReplace.xajh_dongfangbubai = ['xajh_dongfangbubai', 'xajh_xindongfang'];
            lib.characterReplace.yttl_zhouzhiruo = ['yttl_zhouzhiruo', 'yttl_spzhouzhiruo'];
            lib.characterReplace.sdyx_xguojing = ['sdyx_xguojing', 'sdyx_guojing'];
            lib.characterReplace.sdyx_huangyaoshi = ['sdyx_huangyaoshi', 'sdyx_sphuangyaoshi'];
            lib.characterReplace.sdyx_huangrong = ['sdyx_huangrong', 'sdyx_sp_huangrong'];
            lib.characterReplace.tlbb_duanyu = ['tlbb_duanyu', 'tlbb_spduanyu'];
            lib.characterReplace.tlbb_xuzhuzi = ['tlbb_xuzhuzi', 'tlbb_spxuzhu'];
            lib.characterReplace.tlbb_tianshantonglao = ['tlbb_tianshantonglao', 'tlbb_sptianshantonglao'];
            lib.characterReplace.tlbb_azhi = ['tlbb_azhi', 'tlbb_spazi'];
            lib.characterReplace.tlbb_wangyuyan = ['tlbb_wangyuyan', 'tlbb_spwangyuyan'];
            lib.characterReplace.yttl_SPguoxiang = ['yttl_SPguoxiang', 'sdxl_guoxiang'];
            lib.characterReplace.tlbb_jiumozhi = ['tlbb_jiumozhi', 'tlbb_spjiumozhi'];
            lib.characterReplace.yttl_luhe = ['yttl_luhe', 'yttl_spxuanmingerlao'];
            lib.characterReplace.sdyx_yinggu = ['sdyx_yinggu', 'sdyx_spyinggu'];
            lib.characterReplace.yttl_songyuanqiao = ['yttl_songyuanqiao', 'yttl_spsongyuanqiao'];
            lib.characterReplace.sdxl_yangguo = ['sdxl_yangguo', 'sdxl_spyangguo'];
            lib.characterReplace.xajh_tianboguang = ['xajh_tianboguang', 'xajh_sp_tianboguang'];
            lib.characterReplace.sdyx_meichaofeng = ['sdyx_meichaofeng', 'sdyx_spmeichaofeng'];
            lib.characterReplace.sdxl_jinlunfawang = ['sdxl_jinlunfawang', 'sdxl_sp_jinlunfawang'];
            lib.characterReplace.sdyx_kezhene = ['sdyx_kezhene', 'sdyx_sp_kezhene'];
            /**************************************************************************/
            //卡牌翻译
            if (['2', '4', '6', '7'].includes(lib.config.extension_金庸群侠传_jychangecardsTranslate)) {
                //此方法适用无名杀原版修改 不适用十周年// 此方法避免污染无名杀配音文件和图片文件//
                lib.arenaReady.push(function () {
                    var translate = {
                        shunshou: '妙手空空',
                        wuxie: '金刚护体',
                        tao: '九花玉露丸',
                        bingliang: '摧筋断骨',
                        lebu: '隔空点穴',
                        guohe: '见招拆招',
                        wuzhong: '无极而生',
                        tiesuo: '玄铁索链',
                        huogong: '硝磷火弹',
                        wugu: '开仓放粮',
                        taoyuan: '歃血为盟',
                        nanman: '鞑虏入侵',
                        wanjian: '漫天花雨',
                        jiedao: '借剑杀人',
                        juedou: '比武',
                    };
                    for (var i in translate) {
                        lib.translate[i] = translate[i];
                        lib.card[i].image = 'ext:金庸群侠传/fix_card/image/' + i + '.png'; //修改图片地址
                        lib.card[i].audio = 'ext:金庸群侠传/fix_card/audio'; //修改配音地址
                    }
                    //var translate_info={
                    //    "hanbing_info":"当你使用【杀】造成伤害时,你可以防止此伤害,改为依次弃置目标角色的两张牌.",
                    //    "hanbing_skill_info":"当你使用【杀】造成伤害时,你可以防止此伤害,改为依次弃置目标角色的两张牌.",
                    //    "renwang_info":"锁定技,黑色的【杀】对你无效",
                    //    "renwang_skill_info":"锁定技,黑色的【杀】对你无效",
                    //    "zhuque_info":"你可以将一张普通【杀】当火【杀】使用.",
                    //};
                    //for(var i in translate_info){
                    //    lib.translate[i]=translate[i];
                    //};
                });
            }
            //切换卡背开始
            if (lib.config.extension_金庸群侠传_jycardback && lib.config.extension_金庸群侠传_jycardback != 'jy_cardback0') {
                var cbcss = document.createElement('style');
                cbcss.innerHTML = ".card:empty,.card.infohidden{background: url('extension/金庸群侠传/image/cardback/" + lib.config.extension_金庸群侠传_jycardback + '.jpg' + "');background-size: 100% 100% !important;}";
                document.head.appendChild(cbcss);
            }
            //切换卡背结束
            window.jyimport = function (func) {
                func(lib, game, ui, get, ai, _status);
            };
            var extList = [
                '0_Cards.js',
                '1_YiWuHuiYou.js',
                '2_QiTaPianZhang.js',
                '3_LuDingJi.js',
                '4_XiaoAoJiangHu.js',
                '5_YiTianTuLong.js',
                '6_ShenDiaoXiaLv.js',
                '7_SheDiaoYingXiong.js',
                '8_TianLongBaBu.js',
                '9_newSha.js',
                '10_BangPai.js',
                'taici.js',
                'update.js',
                '11_changJing.js',
                '12_chongwu.js',
                'pinyin-pro.js',
                'cnchar.all.min.js',
                'prefix.js',
                'voices.js',
                //"13_jymingshou_luandoumoshi.js",
            ];
            if (jyqxz.JYreplacedCard && jyqxz.JYreplacedCard != 'off') extList.push('cardPile.js');
            //if(jyqxz.jy_changjing&&jyqxz.jy_changjing!='off') extList.push('11_changJing.js');
            //if(jyqxz.jy_chongwu&&jyqxz.jy_chongwu!='off') extList.push('12_chongwu.js');
            for (var e of extList) {
                var extURL = 'extension/金庸群侠传/ext/' + e;
                lib.init.js(
                    extURL,
                    null,
                    () => { },
                    () => {
                        alert('error ' + e + '导入失败 !');
                    }
                );
            }
            lib.init.css('extension/金庸群侠传/ext', 'extension');
            lib.init.css('extension/金庸群侠传/ext', 'bangpai');
            lib.init.css('extension/金庸群侠传/ext', 'changjing');
        },
        config: {
            jy_jue_chooseGroup: {
                name: '绝势力武将开局选势力',
                intro: '绝势力武将开局选势力',
                init: true,
            },
            jy_info: {
                name: '<img style=width:260px src=extension/金庸群侠传/image/title/jy_info.png>',
                intro: '',
                init: true,
                clear: true,
            },
            jyqxz_introduce: {
                name: '团队介绍',
                init: '1',
                item: {
                    1: '游戏策划',
                    2: '技能设计',
                    3: '技能编译',
                    4: '技术顾问',
                    5: '美术美工',
                    6: '角色插画',
                    7: '素材来源',
                    8: '台词文案',
                    9: '内测成员',
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.transform = 'translateY(-100px)';
                    node.parentNode.style.height = '500px';
                    node.parentNode.style.width = '400px';
                    //node.style.width="400px";
                    switch (link) {
                        case '1':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/ch.png><br>大熊小猫';
                            break;
                        case '2':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/sj.png><br>大熊小猫、吃饱睡睡醒吃、木木枭等';
                            break;
                        case '3':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/bc.png><br>落影逝尘、霸天、吃朵棉花糖、藏海、SUKINCEN、诗笺、冷雨滂沱、朱阳光、看破一切、美妙的世界、咸鱼、假象、银汉贯苍穹、微尘等<p>帮派技:霸天<p>界限突破:霸天</span>';
                            break;
                        case '4':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/gw.png><br>咸鱼、看破一切、喋血长歌、凉茶、藏海、KeyFrames、西野七濑等';
                            break;
                        case '5':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/cs.png><br>素材美化:大熊小猫、小一、喋血长歌、东海岛主等<p>角色页面:CSS-西野七濑;数据-西野七濑、霸天<p>帮派页面:CSS-西野七濑<p>插画搜集:空白页等<p>高清修复:木木枭等<p>公众号推广:呲牙哥';
                            break;
                        case '6':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/ct.png><br>插画来自互联网,未商用,如不妥请联络作者删除';
                            break;
                        case '7':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/sc.png><br>互通彩色卡牌(阿七)';
                            break;
                        case '8':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/wa.png><br>大熊小猫、木木枭、吃饱睡睡醒吃等';
                            break;
                        case '9':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/mx.png><br>乌合麒麟、沉默善变、小一、超市薯片半价、Srong_Will、光明牛奶、卖报专家、常山赵子龙、7ACE等';
                            break;
                    }
                },
            },
            jyqxz_cv_cast: {
                name: '配音演员',
                init: '1',
                item: {
                    1: '角色配音',
                    2: '卡牌配音',
                    3: '其他信息',
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.transform = 'translateY(-100px)';
                    node.parentNode.style.height = '500px';
                    node.parentNode.style.width = '400px';
                    //node.style.width="400px";
                    switch (link) {
                        case '1':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/py.png><br>稳得高处…………令狐冲、雨化田、张起灵等<br>沃声—风飞语……苏乞儿、岳不群、天门道长等<br>蚩宇………………李小龙、谢逊、金庸、胡八一等<br>仙女桥……………梅超风、黄蓉、小昭、李莫愁等<br>青灯折扇不语……王承恩、郭靖东方不败等<br>草莓味少女………王语嫣、阿紫、仪琳、钟灵等<br>神齐大叔…………韦小宝、周伯通、段誉等<br>李二汪……………楚留香、小鱼儿、桃谷六仙等<br>林三………………洪七公、虚竹、韩千叶、杨莲亭等<br>卿九………………李清露、西施、曾柔等<br>珂里………………康敏、阿青等<br>弈声传媒公司……段天德、玄冥二老、完颜洪烈等<br>临自灵……………霍阿伊、花铁杆、祖千秋等<br>觅阳………………黄药师、SP黄药师、朱由检等<br>清酒遥舟…………杨过<br>白…………………裘千尺<br>涂涂………………柯镇恶、鸠摩智、慕容龙城<br>小林………………花无缺、周淮安、刘正风曲洋等<br>遂非………………蓝凤凰、韦春花、绝天山童姥等<br>水烟箩卜…………任盈盈、袁紫衣<br>强珂………………SP天山童姥<br>林写………………张无忌<br>莫无殇……………殷野王<br>黑兔………………吴三桂、杨过小龙女<br>孑然………………杨过小龙女<br>洛…………………郭破虏、吴邪、田归农等<br>荀冬卿……………红孩儿<br>一叶米粥…………沐剑屏、包惜弱、甘十九妹等<br>泥泥………………建宁公主<br>猴子………………韦小宝建宁<br>阿也………………SP王语嫣<br>炎凉………………绝郭靖黄蓉<br>谢声繁……………宁中则、黄衫女、方怡、李萍等<br>FlORA……………华筝、SP瑛姑<br>大绿_Midori酱……程英、苏荃、乔峰阿朱等<br>无忆CHENG&nbsp;&nbsp;……项少龙、哪吒、博雅、玄烨等<br>千狐………………至尊宝、李寻欢<br>狗子………………风清扬、SP杨过、金轮法王等<br>冰霜墨菊…………吴应熊、段正淳、绝郭靖<br>高丸丸……………韩林儿、陈玄风、孟星魂等<br>兔猪………………赵敏<br>Stella薇&nbsp;&nbsp;…………周芷若<br>地鼠………………双儿、郭芙、SP周芷若等<br>桃子玥……………喀丝丽、SP黄蓉、朱九真武青婴等<br>徐安………………毛东珠、黛绮丝<br>辣鸭………………程灵素、纪晓芙<br>蛋黄酱爆炸………李青萝<br>Yinke.吟可&nbsp;………杨不悔<br>槐生………………岳灵珊<br>白夜………………魏忠贤、斗酒神僧<br>古梁舟……………木婉清<br>只猫………………骆冰<br>冷冷鱼……………穆念慈<br>冷陶………………任我行<br>ILL&nbsp;………………沈炼<br>阿九………………殷离<br>矢北………………余鱼同<br>一壶中……………白素贞<br>浅笑安然…………郭襄、SP郭襄<br>祭黎………………红娘子<br>儒风………………梁发<br>冬赫………………董天宝、绝黄药师等<BR>水蓝………………宋慈、赵盘、狄仁杰等<br>付水东流…………水笙、红拂女等<br>龙龙龙哒…………怜星<br>科学舟自横……完颜康<br>奶诗………………公孙绿萼<br>石头星星…………柳朗月<br>随遇而安…………小虾米、绝欧阳锋、汝阳王等<br>未眠………………苏菲亚<br>末生………………乌老大、枯荣大师等<br>彻君………………邪慕容复、绝张无忌等<br>昭月………………聂隐娘<br>酱子……………嫦娥<br>愛の名で…………绝洪七公、赵钱孙等<br>良沨………………青蛇<br>路边奇石…………铁手、玄苦、邪血老刀祖';
                            break;
                        case '2':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/pycp.png><br>蚩宇、珂里';
                            break;
                        case '3':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/qt.png><br>未完全列出的,将在角色资料后附配音信息.<br>感谢所有参与配音投稿的人员.</span><br><br><br><br>';
                            break;
                    }
                },
            },
            jyqxz_info: {
                name: '扩展介绍',
                init: '1',
                item: {
                    1: '查看信息',
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.transform = 'translateY(-100px)';
                    node.parentNode.style.width = '400px';
                    //node.style.width="400px";
                    switch (link) {
                        case '1':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/intro.png><br>亲爱的玩家、武侠爱好者、金庸书迷,欢迎来到金庸群侠传扩展体验刀光剑影、快意恩仇的武侠世界.本扩展角色素材主要取自金庸先生的小说及其衍生作品(在以武会友系列中亦有其他武侠相关人物登场).作者于二零一七年开始设计角色,二零一九年三月,本扩展的伯乐SUKINCEN与我商议移植到无名杀,相继有多位程序员加盟,为本扩展添砖加瓦,同时亦邀请了多位配音演员出演角色台词,力求原还一个个鲜活的经典角色,感谢大家的无私付出.本扩展技能强度尽量与三国杀挂钩,设计角色时注重兼顾娱乐性、契合性、平衡性,欢迎在体验的过程中为我们提出宝贵的建议,同时欢迎加入我们的玩家交流群(697310426)进行投稿等.扩展插画来自互联网,未经商用,自娱自乐.如有不妥,请联系作者删除.';
                            break;
                    }
                },
            },
            jyqxz_tips: {
                name: '游戏帮助',
                init: '1',
                item: {
                    1: '游戏建议',
                    2: '卡牌翻译表',
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.transform = 'translateY(-100px)';
                    node.parentNode.style.width = '400px';
                    //node.style.width="400px";
                    switch (link) {
                        case '1':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/tips.png><br>大型扩展建议采用防崩溃导入方式:先在游戏内创建名为<金庸群侠传>的扩展,将金庸群侠传完整包解压后,所有素材直接复制到extension/金庸群侠传内.首次安装本扩展,需在武将界面开启小包、在卡牌界面开启金庸包牌堆,重启,即可开启武将并显示插画.建议开启兼容模式.本扩展提供了卡牌武侠化翻译、全卡牌特效(基于十周年UI)、互通版风格卡牌等功能,祝您体验愉快!';
                            break;
                        case '2':
                            node.innerHTML = '<img style=width:225px src=extension/金庸群侠传/image/label/translate.png><br>卡牌翻译对照表<br><br>桃…………………………九花玉露丸<br>决斗………………………比武<br>火攻………………………硝磷火弹<br>无懈可击…………………金刚护体<br>顺手牵羊…………………妙手空空<br>过河拆桥…………………见招拆招<br>五谷丰登…………………开仓放粮<br>桃园结义…………………歃血为盟<br>南蛮入侵…………………鞑虏入侵<br>铁索连环…………………玄铁索链<br>借刀杀人…………………借剑杀人<br>无中生有…………………无极而生<br>乐不思蜀…………………隔空点穴<br>兵粮寸断…………………摧筋断骨<br>万箭齐发…………………漫天花雨<br><br>';
                            break;
                    }
                },
            },
            //播放宣传片开关
            jyqxz_playvideo: {
                name: '播放宣传片',
                init: '1',
                item: {
                    1: '双雕篇',
                    2: '倚天篇',
                    3: '笑傲篇',
                    4: '会友篇',
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.transform = 'translateY(-100px)';
                    node.parentNode.style.width = '300px';
                    //node.style.width="400px";
                    switch (link) {
                        case '1':
                            node.onclick = function () {
                                game.open('https://www.bilibili.com/video/BV1G4411g77R/');
                            };
                            node.addEventListener('touchend', function () {
                                game.open('https://www.bilibili.com/video/BV1G4411g77R/');
                            });
                            node.innerHTML = '<img style=width:120px src=extension/金庸群侠传/image/thumbnail/videos/jy_playshediao.png><br>';
                            break;
                        case '2':
                            node.onclick = function () {
                                game.open('https://www.bilibili.com/video/BV1dJ411X78B/');
                            };
                            node.addEventListener('touchend', function () {
                                game.open('https://www.bilibili.com/video/BV1dJ411X78B/');
                            });
                            node.innerHTML = '<img style=width:120px src=extension/金庸群侠传/image/thumbnail/videos/jy_playyitian.png><br>';
                            break;
                        case '3':
                            node.onclick = function () {
                                game.open('https://www.bilibili.com/video/BV1sJ411z7vr/');
                            };
                            node.addEventListener('touchend', function () {
                                game.open('https://www.bilibili.com/video/BV1sJ411z7vr/');
                            });
                            node.innerHTML = '<img style=width:120px src=extension/金庸群侠传/image/thumbnail/videos/jy_playxiaoao.png><br>';
                            break;
                        case '4':
                            node.onclick = function () {
                                game.open('https://www.bilibili.com/video/BV1kE411P7jD/');
                            };
                            node.addEventListener('touchend', function () {
                                game.open('https://www.bilibili.com/video/BV1kE411P7jD/');
                            });
                            node.innerHTML = '<img style=width:120px src=extension/金庸群侠传/image/thumbnail/videos/play_playyiwuhuiyou.png><br>';
                            break;
                    }
                },
            },
            //宠物系统选项
            jy_chongwu2: {
                name: '<img style=width:260px src=extension/金庸群侠传/image/title/jy_pet.png>',
                intro: '',
                init: true,
                clear: true,
            },
            jy_chongwu3: {
                name: '宠物系统规则',
                intro: '查看宠物系统规则',
                init: 'moren',
                item: {
                    rules: '查看规则',
                    moren: '查看规则',
                },
                onclick(item) {
                    game.saveConfig('extension_金庸群侠传_jy_chongwu', item);
                    //game.reload();
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.transform = 'translateY(-100px)';
                    node.parentNode.style.height = '300px';
                    node.parentNode.style.width = '300px';
                    //node.style.width="400px";
                    switch (link) {
                        case 'rules':
                            node.innerHTML = '开启宠物模式后,游戏开局会洗入四张【百兽精灵】到牌堆中.一名角色的出牌阶段,若其不为双将模式,其可以使用【百兽精灵】随机召唤一只宠物,组成自己的副将.考虑到宠物活泼可爱的个性,它们在当前角色回合结束时,若主将不处于负面状态,会有一定的概率(可以自行设置比例)离开主将,随机寻找另外一名单将模式的角色为主人.';
                            break;
                    }
                },
            },
            jy_chongwu4: {
                name: '是否自主召唤宠物',
                intro: '',
                init: false,
            },
            jy_chongwu: {
                name: '宠物设置',
                intro: '开启后,将增加宠物包',
                init: 'off',
                item: {
                    20: '宠物离开主将概率20%',
                    40: '宠物离开主将概率40%',
                    60: '宠物离开主将概率60%(推荐)',
                    80: '宠物离开主将概率80%',
                    off: '关闭宠物包',
                },
                onclick(item) {
                    game.saveConfig('extension_金庸群侠传_jy_chongwu', item);
                    game.reload();
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.transform = 'translateY(-100px)';
                    node.parentNode.style.height = '300px';
                    node.parentNode.style.width = '300px';
                    //node.style.width="400px";
                    switch (link) {
                        case '20':
                            node.innerHTML = '宠物离开主将概率为20%';
                            break;
                        case '40':
                            node.innerHTML = '宠物离开主将概率为40%';
                            break;
                        case '60':
                            node.innerHTML = '宠物离开主将概率为60%(推荐)';
                            break;
                        case '80':
                            node.innerHTML = '宠物离开主将概率为80%';
                            break;
                        case 'off':
                            node.innerHTML = '关闭宠物包';
                            break;
                    }
                },
            },
            //场景技选项
            jy_changjingIntro: {
                name: '<img style=width:260px src=extension/金庸群侠传/image/title/jy_map.png>',
                intro: '',
                init: true,
                clear: true,
            },
            jy_changjingzizhu: {
                name: '自主选择场景',
                intro: '此选项在优先度在场景设置之上.',
                init: 'off',
                item: {
                    off: '不选择(推荐)',
                },
                onclick(item) {
                    game.saveConfig('extension_金庸群侠传_jy_changjingzizhu', item);
                    if (item != 'off') {
                        _status.locked_jy_changjin = item;
                        var next = game.createEvent('_jy_changjin', false);
                        next.setContent(lib.skill._jy_changjin.content);
                    } else {
                        delete _status.locked_jy_changjin;
                    }
                },
                visualMenu(node, link) {
                    //link是冒号前面的,比如default:经典卡背,link就是default
                    node.style.height = node.offsetWidth * 1.387 + 'px'; //高度设置成宽度的1.3倍
                    node.style.backgroundSize = '100% 100%'; //图片拉伸
                    //if(link=="default")link="经典卡背";//如果选的default,那么图片是经典卡背.jpg
                    node.className = 'button character incardback'; //后面的incardback是我自定义的,不需要
                    node.setBackgroundImage('extension/金庸群侠传/changjing/' + link + '.jpg'); //设置图片
                },
            },
            jy_changjing: {
                name: '场景设置',
                intro: '开启后,增加金庸包场景技能',
                init: 'off',
                item: {
                    0: '不切换场景',
                    1: '每1轮改变',
                    2: '每2轮改变(推荐)',
                    3: '每3轮改变',
                    4: '每4轮改变',
                    5: '间次出现',
                    off: '关闭场景技',
                },
                onclick(item) {
                    game.saveConfig('extension_金庸群侠传_jy_changjing', item);
                    game.reload();
                },
                textMenu(node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.transform = 'translateY(-100px)';
                    node.parentNode.style.height = '300px';
                    node.parentNode.style.width = '300px';
                    //node.style.width="400px";
                    switch (link) {
                        case '0':
                            node.innerHTML = '不切换(开局获得持续全局)';
                            break;
                        case '1':
                            node.innerHTML = '每1轮改变场景';
                            break;
                        case '2':
                            node.innerHTML = '每2轮改变场景(推荐)';
                            break;
                        case '3':
                            node.innerHTML = '每3轮改变场景';
                            break;
                        case '4':
                            node.innerHTML = '每4轮改变场景';
                            break;
                        case '5':
                            node.innerHTML = '间次出现(奇数轮无偶数轮有)';
                            break;
                        case 'off':
                            node.innerHTML = '关闭';
                            break;
                    }
                },
            },
            jyqxz_changjing1: {
                name: '<b><u><i>点击查看场景技介绍</i></u></b>',
                clear: true,
                onclick() {
                    //游戏暂停
                    game.pause2();
                    var layer1 = ui.create.div('.poplayer', ui.window);
                    var changjings = [
                        ////规则/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/image/changjing/jycj_changjing.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_intro.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_intro.png', 'extension/金庸群侠传/image/changjing/jycj_icon_intro_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_intro_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////桃花岛/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_wuyun.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_wuyun.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_wuyun.png', 'extension/金庸群侠传/image/changjing/jycj_icon_wuyun_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_wuyun_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////杏子林/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_mengyuan.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_mengyuan.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_mengyuan.png', 'extension/金庸群侠传/image/changjing/jycj_icon_mengyuan_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_mengyuan_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////雁门关/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_biansheng.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_biansheng.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_biansheng.png', 'extension/金庸群侠传/image/changjing/jycj_icon_biansheng_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_biansheng_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////琅嬛玉洞/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_wanjuan.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_wanjuan.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_wanjuan.png', 'extension/金庸群侠传/image/changjing/jycj_icon_wanjuan_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_wanjuan_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////冰火岛/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_hanshu.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_hanshu.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_hanshu.png', 'extension/金庸群侠传/image/changjing/jycj_icon_hanshu_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_hanshu_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////聚贤庄/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_juejiu.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_juejiu.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_juejiu.png', 'extension/金庸群侠传/image/changjing/jycj_icon_juejiu_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_juejiu_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////凌霄城/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_neihong.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_neihong.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_neihong.png', 'extension/金庸群侠传/image/changjing/jycj_icon_neihong_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_neihong_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////高昌迷宫/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_mishi.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_mishi.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_mishi.png', 'extension/金庸群侠传/image/changjing/jycj_icon_mishi_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_mishi_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////封禅台/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_duoshuai.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_duoshuai.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_duoshuai.png', 'extension/金庸群侠传/image/changjing/jycj_icon_duoshuai_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_duoshuai_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////绿竹巷/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_qingxin.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_qingxin.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_qingxin.png', 'extension/金庸群侠传/image/changjing/jycj_icon_qingxin_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_qingxin_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////剑冢/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_wufeng.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_wufeng.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_wufeng.png', 'extension/金庸群侠传/image/changjing/jycj_icon_wufeng_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_wufeng_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////紫禁城/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_danei.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_danei.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_danei.png', 'extension/金庸群侠传/image/changjing/jycj_icon_danei_over.png', 'extension/金庸群侠传/image/changjing/jycj_icon_danei_pick.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////空白遮瑕1/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_danei.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_kongbai.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_kongbai.png', 'extension/金庸群侠传/image/changjing/jycj_icon_kongbai.png', 'extension/金庸群侠传/image/changjing/jycj_icon_kongbai.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                        ////空白遮瑕2/////
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/changjing/jycj_danei.jpg',
                            lihui: 'extension/金庸群侠传/image/changjing/jycj_jn_kongbai.png',
                            guajian: '',
                            navimgs: ['extension/金庸群侠传/image/changjing/jycj_icon_kongbai.png', 'extension/金庸群侠传/image/changjing/jycj_icon_kongbai.png', 'extension/金庸群侠传/image/changjing/jycj_icon_kongbai.png'],
                            shi: ['', ''],
                            info: '',
                            jineng: '',
                        },
                    ];
                    var activechangjing = 0;
                    var width = document.body.clientWidth;
                    var layer = document.createElement('div');
                    layer.id = 'jyqxz_changjing_infodiv';
                    layer.style.transform = 'scale(' + width / 1920 + ')';
                    window.addEventListener(
                        'resize',
                        function () {
                            var width = document.body.clientWidth;
                            layer.style.transform = 'scale(' + width / 1920 + ')';
                        },
                        false
                    );
                    layer.innerHTML = `
                    <div class="jyqxz_changjing_infodiv_bottom_bg">
                    <img src="extension/金庸群侠传/image/changjing/jycj_goldwave.png" alt="" class="jyqxz_changjing_infodiv_bottom_bgimg">
                    </div>
                    `;
                    var audio = document.createElement('audio');
                    audio.src = 'extension/金庸群侠传/image/changjing/jycj_check.mp3';
                    layer.appendChild(audio);
                    var infodiv = document.createElement('div');
                    infodiv.id = 'jyqxz_changjing_infodiv_infodiv';
                    layer.appendChild(infodiv);
                    //infos
                    var infos = document.createElement('div');
                    infos.className = 'jyqxz_changjing_infodiv_infodiv_infos';
                    infodiv.appendChild(infos);
                    //navs
                    var navs = document.createElement('div');
                    navs.className = 'jyqxz_changjing_infodiv_infodiv_navs jyqxz_changjing_scroll';
                    var changjingnavs = [];
                    changjings.forEach((changjing, i) => {
                        var changjingnav = document.createElement('img');
                        changjingnav.className = 'jyqxz_changjing_infodiv_infodiv_nav';
                        changjingnav.src = i === activechangjing ? changjing.navimgs[2] : changjing.navimgs[0];
                        changjingnav.onmouseover = (function (i) {
                            return function () {
                                this.src = changjings[i].navimgs[1];
                            };
                        })(i);
                        changjingnav.onmouseout = (function (i) {
                            return function () {
                                this.src = i === activechangjing ? changjings[i].navimgs[2] : changjings[i].navimgs[0];
                            };
                        })(i);
                        changjingnav.onclick = (function (i) {
                            return function () {
                                activechangjing = i;
                                audio.src = 'extension/金庸群侠传/image/changjing/jycj_check.mp3';
                                audio.play();
                                renderchangjing();
                            };
                        })(i);
                        changjingnavs.push(changjingnav);
                        navs.appendChild(changjingnav);
                    });
                    infodiv.appendChild(navs);
                    var lihui = document.createElement('img');
                    lihui.className = 'jyqxz_changjing_infodiv_lihui';
                    layer.appendChild(lihui);
                    var tree = document.createElement('img');
                    tree.className = 'jyqxz_changjing_infodiv_tree';
                    tree.src = 'extension/金庸群侠传/image/changjing/jycj_tree.png';
                    layer.appendChild(tree);
                    function renderchangjing() {
                        layer.style.backgroundImage = 'url(' + changjings[activechangjing].bg + ')';
                        tree.src = changjings[activechangjing].guajian;
                        lihui.src = changjings[activechangjing].lihui;
                        changjingnavs.forEach((b, k) => {
                            b.src = k === activechangjing ? changjings[k].navimgs[2] : changjings[k].navimgs[0];
                        });
                        infos.innerHTML = `<p class="jyqxz_changjing_infodiv_infodiv_infos_changjing_title">${changjings[activechangjing].name}</p>
                        <div class="zanshi">
                        <p class="zanship">${changjings[activechangjing].shi[0]}</p>
                        <p class="zanship">${changjings[activechangjing].shi[1]}</p>
                        </div>
                        <img src="extension/金庸群侠传/image/changjing/jycj_intro.png" alt="" class="jyqxz_changjing_infodiv_changjingfenge">
                        <div class="jyqxz_changjing_infodiv_contentdiv jyqxz_changjing_scroll">
                        <p class="jyqxz_changjing_infodiv_contentdiv_changjinginfo">${changjings[activechangjing].info}</p>
                        <p class="jyqxz_changjing_infodiv_contentdiv_jinenginfo">${changjings[activechangjing].jineng}</p>
                        </div>`;
                    }
                    renderchangjing();
                    //backbutton
                    var backbtn = document.createElement('div');
                    backbtn.className = 'jyqxz_changjing_infodiv_backbtn';
                    var backbtnimg = document.createElement('img');
                    backbtnimg.setAttribute('src', 'extension/金庸群侠传/image/changjing/jy_changjing_back.png');
                    backbtn.appendChild(backbtnimg);
                    backbtn.onmouseover = function () {
                        backbtnimg.setAttribute('src', 'extension/金庸群侠传/image/changjing/jy_changjing_back_click.PNG');
                    };
                    backbtn.onmouseout = function () {
                        backbtnimg.setAttribute('src', 'extension/金庸群侠传/image/changjing/jy_changjing_back.png');
                    };
                    layer.appendChild(backbtn);
                    var originalMusic = ui.backgroundMusic.src;
                    backbtn.onclick = function () {
                        audio.src = 'extension/金庸群侠传/image/changjing/changjing_back.mp3';
                        audio.play();
                        //播放原来的音乐
                        setTimeout(() => {
                            game.resume2();
                            layer1.remove();
                        }, 500);
                    };
                    layer1.appendChild(layer);
                    //场景技能背景音乐
                },
            },
            //帮派技选项
            jy_bangpaiIntro: {
                name: '<img style=width:260px src=extension/金庸群侠传/image/title/jy_bangpai.png>',
                intro: '',
                init: true,
                clear: true,
            },
            jyqxz_bangpai1: {
                name: '<b><u><i>点击查看帮派技介绍</i></u></b>',
                clear: true,
                onclick() {
                    //游戏暂停
                    game.pause2();
                    var layer1 = ui.create.div('.poplayer', ui.window);
                    var bangpais = [
                        ////规则说明/////
                        {
                            name: '规则',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_shaolin.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_rule.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_tree.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_rule.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_rule_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_rulechecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>天 下 风 云 出 我 辈 ,一 入 江 湖 岁 月 催', '皇 图 霸 业 谈 笑 间 ,不 胜 人 生 一 场 醉<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            info: '在三国杀角色技能越来越强悍的今天,主公方的生存空间越来越狭窄,为解决反贼方一边倒的优势问题,<金庸群侠传>扩展特别推出帮派技,帮派技是为身份局量身定制的,除非特别约定或特殊角色,其他模式均不会出现帮派技.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>1、何为帮派技？</b><br>&nbsp;&nbsp;&nbsp;&nbsp;帮派技是某个武学门派共同拥有的共用技能,只要某个角色属于某个帮派,他就拥有该帮派的帮派技.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>2、如果一个角色拥有多个帮派归属怎么办,比如黄蓉既属于桃花岛又属于丐帮？</b><br>&nbsp;&nbsp;&nbsp;&nbsp;同一个人物同时归属于多个帮派时,是可以拥有多个帮派技的.其在执行选择时,需从其中选择一个.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>3、游戏中哪些身份可以拥有帮派技,以及如何获得？</b><br>&nbsp;&nbsp;&nbsp;&nbsp;主公开在游戏开始时即获得帮派技;反贼阵亡至只剩下一个时,其获得帮派技;内奸在<主公+忠臣>和<反贼总数>的数量差达到2或以上时,获得帮派技.一名角色在获得帮派技时,需从其帮派技库中选择一个.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>4、游戏中的角色是怎么划分帮派的？有些界线模糊的角色是怎么划分的,比如李萍、包惜弱？</b><br>&nbsp;&nbsp;&nbsp;&nbsp;在金庸先生的原著或影视衍生作品中,如有明确帮派归属的,将遵循原著,例如黄药师属于桃花岛、段誉属大理段氏、张无忌属于武当和明教.对于没有帮派归属,形象偏正面的角色,统一划分为游侠,如李萍、柯镇恶;对于没有帮派归属,形象偏反面的角色统一划分为悍匪,如段天德;长期虎视、侵略中原的少民政权划分为鞑虏(包括为其效力的江湖人士如玄冥二老、安剑清、灵智上人等);来自西藏金刚宗的划分为藏宗;人丁稀少、小门小派的角色统一划分为望族,等.',
                            jineng: '<br><br><br><br><br><br><br><br>',
                        },
                        ////少林/////
                        {
                            name: '少林',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_shaolin.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_shaolin.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_yinxing.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_shaolin.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_shaolin_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_shaolinchecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>天 下 武 功 出 少 林 ,七 二 技 艺 更 绝 伦', '星 汉 灿 烂 称 北 斗 ,十 三 棍 曾 救 唐 宗<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;少林派常见于武侠小说,在金庸武侠小说中,少林派是名门正派,素与<武当派>齐名,同被喻为<武林中的泰山北斗>,两派在武侠小说中均有著相当重要的地位,一直都有<北崇少林,南尊武当>的说法,这两派也常联合起来主持武林正义.<br> &nbsp;&nbsp;&nbsp;&nbsp;1958年出版的卧龙生成名作<飞燕惊龙>中,列九大门派之首,少林弟子大都武功高强,以外功闻名天下.<br> &nbsp;&nbsp;&nbsp;&nbsp;少林僧人以辈分排名,如北宋的灵、玄、慧、虚、空,南宋的苦、天(倚天屠龙记前期剧情),元的渡、空、圆、慧、法、相、庄(倚天屠龙记主要剧情),清康熙年的「大、觉、观、晦、澄、净、华、严」等.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_tongmai.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·少林】</b>每当你失去最后的红色手牌后,你获得一张红色牌;每当你失去最后的黑色手牌后,你获得一张黑色牌.',
                        },
                        ////丐帮/////
                        {
                            name: '丐帮',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_riyue.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_gaibang.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_gaibang.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_gaibang_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_gaibang_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>龙 吟 九 天 观 市 井 , 犬 吠 沙 场 对 囊 空', '蓬 发 敝 衣 君 莫 笑 , 叫 花 亦 敢 论 英 雄<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;丐帮,是一个武林帮派.其在历史上曾真实存在过,亦是武侠小说的著名帮派,成员大多数为乞丐,因人数众多,号称<天下第一大帮>.在金庸武侠小说作品中,帮中绝招为以<降龙十八掌>为首的武功和代代相传的帮主信物打狗棒所延伸出来的武功<打狗棒法>.丐帮号称天下第一大帮会,帮众人数突破千万;帮会发展的最巅峰时会员人数直达数千万且分支机构分布与大江南北、关内关外,而且其所会员持有的官方及私人物业、投资的项目与资产数量成千上万.从所处的位置看过去像一片大海般连绵不绝;由于物业资产在数量上无法统计的关系,故官府及当权者皆采取睁一只眼闭一只眼的态度由其发展.只要其不参与起义活动就不采取取缔,盖天下历朝历代无有不沦为乞丐之人;聚伙为帮会打抱不平,举止介乎正邪之间.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_wugou.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·丐帮】</b>你使用♠️️杀或♠️️普通锦囊牌时,可令所有异族角色(帮派技含南伐、斗转、剑脉、邦交等的角色)也成为目标;你的手牌上限+X(X为当前存活的汉人角色数).',
                        },
                        ////武当/////
                        {
                            name: '武当',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_wudang.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_wudang.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_tree.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_wudang.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_wudang_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_wudangchecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>龟 蛇 神 将 左 右 分 ,武 当 道 术 妙 无 穷', '太 极 两 仪 生 四 象 ,能 将 四 两 拨 千 斤<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;武当派是中土武术门派之一,按照金庸武侠小说<倚天屠龙记>说法,张三丰为少林觉远大师的徒弟、师徒因违犯少林不准擅自学武的禁令,被赶了出来,后来他根据少林功法变通,且自创内家拳,开山立派,武当由此立足于江湖.武当为内家之宗,在武林中与「少林派」齐名,同被誉为「武林中的泰山北斗」.1958年出版的卧龙生成名作<飞燕惊龙>中,即有武当派的描述,并列入「九大门派」之中.<br>&nbsp;&nbsp;&nbsp;&nbsp;武当武术一度在文学作品中被描绘得神乎其技,人们通常把这种练习内功为主的拳法称为「内家拳」;武当道士们所创的武当武术中,蕴含着珍爱生命的传统哲理,小说家们将太极、阴阳、五行、八卦等哲学理论用于拳理、拳技、练功原则和技击战术中,组成一个庞大的武当武系.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_roujing.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·武当】</b>每当你一次性失去至少两张牌后,你可以视为使用一张杀;<b>锁定技,</b>你使用的无点数或点数小于7的杀,不能被抵消.',
                        },
                        ////峨眉////
                        {
                            name: '峨眉',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_emei.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_zhu.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_emei.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_emei_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_emeichecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>峨 眉 山 月 半 轮 秋 , 影 入 平 羌 江 水 流', '夜 发 清 溪 向 三 峡 , 思 君 不 见 下 渝 州<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;南宋末年,襄阳大侠郭靖与妻子女侠黄蓉力拒蒙古,独守襄阳.二女儿郭襄,家学渊源,武功驳杂,而行事纵性,与外祖黄药师相类,遂有「小东邪」之称.十五岁时过黄河风陵渡口偶识神雕大侠杨过,从此芳心可可,独属其人.杨过在她十六岁生日上率江湖群豪以贺,其后杨过与小龙女重逢,并在第三次「华山论剑」后与众人在华山分别,从此郭襄开始了她在江湖中寻找杨过的旅程.<br>&nbsp;&nbsp;&nbsp;&nbsp;三年后,郭襄途经少室山,拜访少林无色禅师.适逢昆仑派何足道来少林挑战.因山间偶遇,郭襄乃奏考磐,而何因此而暗恋郭襄,特意为奏蒹葭相和.少林一战,何足道技惊全场,却又终于被觉远大师之徒张君宝击败,故返回西域,而觉远也因张君宝被指为偷艺而不得不带张与郭襄逃亡.那夜,觉远口颂<九阳真经>圆寂,郭襄、张君宝、无色皆有所悟.无色创「少林九阳功」;张君宝也因此而开创武当,自号「三丰」;郭襄仍然行走江湖,希望能与杨过碰面,却始终没能再见,在四十岁那年,她忽然大彻大悟,在峨眉山出家为尼,从而开创了「峨眉派」.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_chuqiao.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·峨眉派】</b>出牌阶段限一次,若你装备了装备牌,你可以从牌堆或弃牌堆里获得你装备牌的描述中含有的牌名各一张(限基本牌、普通锦囊牌).',
                        },
                        ////中土明教////
                        {
                            name: '中土明教',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_mingjiao.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_mingjiao.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_mingjiao_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_mingjiao_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>光 明 圣 火 洞 地 来 , 燃 尽 人 间 不 平 事', '明 教 专 门 事 灭 魔 , 七 时 功 德 便 如 何<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;明教是金庸武侠小说<倚天屠龙记>中的教派,源于波斯,本名摩尼教.于唐朝武则天延载元年(694年(甲午年))传入中土,768年被允许在长安及各处敕建大云光明寺.<br>&nbsp;&nbsp;&nbsp;&nbsp;明教的教义是惩恶扬善、度化世人,因此如果皇帝昏庸、官员腐败、民不聊生,明教必定会起义造反,与一般的江湖门派渴望称霸,且与朝廷井水不犯河水的态度不同,明教想要建立一个人人都吃得饱、穿得暖的大同社会.因此明教屡屡遭受到朝廷的镇压,而为了躲避官府的围剿,明教中人行事就难免隐秘,故而被江湖中人视为<魔教>.<br>&nbsp;&nbsp;&nbsp;&nbsp;既然与寻常的江湖门派不同,目的是推翻朝廷,其组织架构自然也与寻常门派不同,中土明教以教主、左右光明使者、四大护教法王、五散人、五行旗为主要架构,其中光明左使统御<天><地><风><雷>四门;<锐金><巨木><洪水><烈火><厚土>五旗听从教主指挥.以光明顶为总坛,与光明顶之外天鹰教另设<天微><紫微><天市>三堂;<神蛇><青龙><白虎><朱雀><玄武>五坛于各地.<br>&nbsp;&nbsp;&nbsp;&nbsp;最初明教传入中土时,波斯总教的圣物——六枚圣火令与乾坤大挪移一同传入,为中土明教教主所持.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_tengnuo.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·中土明教】</b>每轮限X次,一名角色回合开始时,你可以令牌堆项的7张牌中的红色牌或黑色牌全部置顶(X为你已失去的体力+1).',
                        },
                        ////波斯明教////
                        {
                            name: '波斯明教',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_bosimingjiao.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_bosimingjiao.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_bosimingjiao_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_bosimingjiao_mouseover.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>焚 我 残 躯 , 熊 熊 烈 火', '为 善 除 恶 , 惟 光 明 故<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;波斯明教是金庸武侠小说<倚天屠龙记>中的教派. 明教本名摩尼教,源于波斯,传至中土后又称大云光明教,教徒自称明教,位于波斯的总教被称为波斯明教. 波斯明教教主由处女担任,<倚天屠龙记>故事中,小昭最终担任了波斯明教的处女教主.<br>&nbsp;&nbsp;&nbsp;&nbsp;<倚天屠龙记>故事发生的两百多年前,波斯大哲野芒设帐授徒,门下有三个杰出的弟子:峨默长于文学,尼若牟擅于政事,霍山武功精强.三人意气相投,相互誓约,他年祸福与共,富贵不忘.后来尼若牟青云得意,做到伊斯兰教教王的首相.他两个旧友前来投奔,尼若牟请于教王,授了霍山官职.峨默不愿居官,只求一笔年金,以便静居研习天文历数,饮酒吟诗.尼若牟一一依从,相待甚厚.<br>&nbsp;&nbsp;&nbsp;&nbsp;不料霍山雄心勃勃,不甘久居人下,阴谋叛变.事败后结党据山,成为一个宗派首领,该派专以杀人为务,名为依斯美良派.当十字军之时,西域提起<山中老人>霍山之名,无不心惊色变,其时西域各国君王丧生于山中老人手下者不计其数.英格兰国王爱德华因得罪了山中老人,为他遣人行刺.国王身中毒刃,幸得王后舍身救夫,吸去伤口中毒液,国王方得不死.霍山不顾旧日恩义,更遣人刺杀波斯首相尼若牟.首相临死时口吟峨默诗句<来如流水兮逝如风,不知何处来兮何所终>.后来山中老人一派武功为波斯明教中人习得.<br>&nbsp;&nbsp;&nbsp;&nbsp;霍山曾铸十二枚圣火令,其中六枚上刻着他毕生武功精要,后来圣火令和明教同时传入中土,向为中土明教教主的令符.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_baihuo.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·波斯明教】锁定技,</b>你造成的火焰伤害+1;一名角色受到火焰伤害时,你摸X张牌(X为伤害数)..',
                        },
                        ////铁掌帮////
                        {
                            name: '铁掌帮',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_tiezhangbang.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_tiezhangbang.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_tiezhangbang_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_tiezhangbang_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>洞 庭 残 阳 映 天 红 , 誓 灭 金 贼 一 扫 空', '厉 兵 袜 马 从 仇 日 , 勒 马 燕 然 第 一 峰<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;韩世忠遭削除兵权后,部下上官剑南领着一批兄弟在荆湖一带落草,辗转入了铁掌帮,老帮主去世后他接任为第十三代帮主,铁掌帮在他的经营下声势大振.后上官剑南被裘千仞救过一命,他便将全部的武功都传授给裘千仞.最后上官剑南痛苦不能施展抱负,数十年后郁郁而终.临终前将帮主传予裘千仞,并将武穆遗书带上铁掌山中指峰洞穴.<br>&nbsp;&nbsp;&nbsp;&nbsp;铁掌帮便由裘千仞当帮主,至于成员有裘千仞双胞胎大哥裘千丈、妹妹裘千尺以及公孙绿萼.裘千仞被称为铁掌水上飘,而妹妹被称为铁掌莲花.铁掌帮上任帮主上官剑南原是韩世忠部下的将领.秦桧当权后岳飞遭害,韩世忠被削除兵权,落职闲住.他部下的官兵大半也是解甲归田.上官剑南愤恨奸臣当道,领着一批兄弟在荆襄一带落草,后来入了铁掌帮.不久老帮主去世,他接任帮主.这铁掌帮本来只是个小小帮会,经他力加整顿,多行侠义之事,两湖之间的英雄好汉、忠义之士闻风来归,不过数年声势大振,帮主铁掌水上漂的名头威震江湖,在江湖上成为与北方的丐帮分庭抗礼的江南第一大帮.<br>&nbsp;&nbsp;&nbsp;&nbsp;上官剑南心存忠义,虽然身在草莽,却是念念不忘卫国杀敌、回复故土,经常派遣部属在临安、汴梁等地打探消息,以待时机. 可想而知,上官剑南成为铁掌帮帮主后,走的是抗金的路线.相比较别的帮派,因为上官剑南特殊的身份、经历,铁掌帮的抗金路线更有号召力,更能够得到江湖中人的认同.而且,从上官剑南一直与韩世忠保持联系这一点看,铁掌帮应该与当时南宋朝廷中的抗金势力关系密切,当然也就会得到这股势力的有力支持.所以,铁掌帮的势力才会迅猛膨胀,不但在数年之间就几乎可以和传统大帮丐帮分庭抗礼,而且还具备了北伐的实力.岂知南宋朝廷只是畏惧金人,对铁掌帮一伙义士非但不加奖助,反而派兵围剿.铁掌帮毕竟人少势弱,终于被打破山寨.上官剑南身受重伤,死在铁掌峰上.<br>&nbsp;&nbsp;&nbsp;&nbsp;上官剑南临终时将铁掌帮帮主传了给裘千仞.裘千仞非但武功惊人,而且极有才略,数年之间,将原来一个受到重创的帮会整顿得好生兴旺,自从<铁掌歼衡山>一役将衡山派打得一蹶不振后,铁掌帮威震整个江湖.铁掌威猛虽不及降龙十八掌,可是掌法精奇巧妙,犹在降龙十八掌之上.当年华山论剑,王重阳等曾邀他参预.裘千仞以铁掌神功尚未大成,自知非王重阳敌手,故而谢绝赴会,十余年来隐居在铁掌峰下闭门苦练,有心要在二次论剑时夺取<武功天下第一>的荣号.<br>&nbsp;&nbsp;&nbsp;&nbsp;由于裘千仞武功极为高强,铁掌帮在江湖上有一定的势力,再加上铁掌峰中藏有武穆遗书,裘千仞等又肯助纣为虐.因此,裘千仞和铁掌帮也就成了大金国赵王爷完颜洪烈拉拢的重要对象.裘千仞也曾经一度投靠完颜洪烈麾下,为对方效力.他曾在第一次华山论剑后潜入大理皇宫,将刘贵妃瑛姑的私生儿子打得奄奄一息,只为让当时的南帝段智兴为救人大耗内力,让他无法在第二次华山论剑中与自己为敌.<br>&nbsp;&nbsp;&nbsp;&nbsp;这段经历给裘千仞也带来了无穷的麻烦,青龙滩上瑛姑从他得意的笑声中认出他就是杀子凶手,便势如疯虎般要抱他拼个同归于尽.后来第二次华山论剑这一幕又再重演,这给了裘千仞以极大的打击,后来终于开始忏悔,受到一灯大师点化,拜入一灯大师门下出家,法号慈恩.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_liezhang.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·铁掌帮】锁定技.</b>你使用有点数的【杀】造成伤害后,目标不能使用比此牌点数更大的黑色牌,直到其回复体力.',
                        },
                        ////桃花岛////
                        {
                            name: '桃花岛',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_taohuadao.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_taohuadao.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_taohuadao.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_taohuadao_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_taohuadaochecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>人 已 老 , 事 皆 非 , 花 间 不 饮 泪 沾 衣', '如 今 但 欲 关 门 睡 , 一 任 梅 花 作 雪 飞<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;在金庸笔下,桃花岛是武氏兄弟和郭芙共度童年的地方,杨过也曾在桃花岛短暂居住过.黄药师、周伯通、洪七公、欧阳锋、江南七怪、杨过、郭靖、黄蓉等一大批主人公都与桃花岛有关系.郭靖初上桃花岛的惊喜、诧异,黄蓉的得意,兴许就是在这时便注定两人有剪不断的情愫了吧.这里是世外仙境,如黄药师这般高人都愿意在此平静度日,足见其好. <br>&nbsp;&nbsp;&nbsp;&nbsp;桃花岛另外,郭靖在与黄蓉成亲后在桃花岛居住,所以曾经在终南山上自称「在下桃花岛郭靖」.而郭靖的女儿郭芙以及徒弟武敦儒、武修文在桃花岛上学武,亦学会很多桃花岛武功.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_dunjia.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·桃花岛】</b>每当桃花岛门徒的判定牌生效后,你可以亮出牌堆顶5张牌,获得其中与判定牌花色相同的牌.',
                        },
                        ////白驼山/////
                        {
                            name: '白驼山',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_baituoshan.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_baituoshan.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_snow.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_baituoshan.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_baituoshan_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_baituoshanchecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>行 到 毒 云 惨 淡 处 , 笑 看 天 地同 寿 时', '诡 奇 异 怪 流 毒 远 , 天 下 至 毒 我 为 尊<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;金庸笔下的白驼山位于西域「双旗镇」北.<射雕英雄传>中,白驼山得欧阳氏建立山庄,名曰「白驼山庄」.它的主人即天下五绝之一,「西毒」欧阳锋.<br>&nbsp;&nbsp;&nbsp;&nbsp;欧阳锋擅长驯养毒蛇,能驱蛇为阵,以西域独门绝学<蛤蟆功>名震一方.射雕后期,欧阳锋以绝世功力,依照郭靖、黄蓉乱背乱解的假<九阴真经>倒逆经脉,练成一门独特的骇世神功:逆练神功.<br>&nbsp;&nbsp;&nbsp;&nbsp;白驼山这门武功也成为白驼山派的秘传绝学.<br>&nbsp;&nbsp;&nbsp;&nbsp;当年第二次【华山论剑】,欧阳锋力克天下高手,若不是黄蓉用计使其致疯,他已夺得<天下第一>的武功称号.白驼一派从此名声大振.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_xidu.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·白驼山庄】</b>每当你不因此技能造成蛊毒伤害后,你可以令一名其他角色(含目标)选择一项:交给你一张♠️️牌;或受到你等量蛊毒伤害.',
                        },
                        ////古墓派////
                        {
                            name: '古墓派',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_gumupai.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_gumupai.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_gumupai_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_gumupai_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>月 华 淡 , 缟 袂 翩 , 舞 风 回 雪 玉 女 剑', '十 六 载 , 相 思 染 , 携 手 归 隐 五 岳 间<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;金庸小说<神雕侠侣>中虚构的门派.因古墓派弟子长期居住在<活死人墓>而得名.当年,全真教创始祖师王重阳举义反抗金兵,建造了一座大型仓库存放军粮物资,为了掩人耳目而设计成古墓形状.古墓其中机关众多.抗金义军失败后,王重阳愤而隐居古墓,自称将其称作<活死人墓>,意思是虽生犹死,与金人不共戴天.<br>&nbsp;&nbsp;&nbsp;&nbsp;当世女侠林朝英对他一往情深,叹惜他一副大好身手埋没在一座坟墓之中,便使激将法将他骗出石墓,盼与王重阳携手同闯江湖.<br>&nbsp;&nbsp;&nbsp;&nbsp;但王重阳于邦国之仇难以忘怀,时刻记着收复山河的家国大事,对林朝英的深情厚意虽然深知,但是只好装痴乔呆.<br>&nbsp;&nbsp;&nbsp;&nbsp;林朝英还以为王重阳瞧她不起,终于在终南山与他比武决胜,以巧计赢得石墓赌注.从此她住在墓中,终身未曾复出,开创了古墓派.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_shuangxiu.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·古墓派】</b>出牌阶段限一次或你受到伤害后,你可以令一名不处于负面状态的角色复制另一名处于负面角色所有的负面状态.',
                        },
                        ////全真教////
                        {
                            name: '全真教',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_quanzhenjiao.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_quanzhenjiao.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_quanzhenjiao_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_quanzhenjiao_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>天 苍 苍 兮 临 下 土 , 胡 为 不 救 万 灵 苦', '万 灵 日 夜 相 凌 迟 , 饮 气 吞 声 死 无 语<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;金庸小说<射雕英雄传>与<神雕侠侣>出现的门派;被誉为天下武学正宗,是当世数一数二的玄门大派.不只全真教的创始人王重阳是抗金英雄,他的弟子也亲宋抗元,但历史中的全真教却依附女真和蒙古的政权.天下五绝之首中神通王重阳因早年与红颜知己林朝英的一个赌注而出家,建立全真教一宗.宋金交战期间,王重阳率领教中道士奋起抗金,继续秉持本教教旨行侠仗义、救苦恤贫.使得全真教在江湖中站稳脚步,名气越来越响,具有了相当的规模.江湖上不论是否武学之士,凡是听到全真教的名头,都是十分尊重.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_liezhen.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·全真教】</b>当你成为黑色【杀】的目标时,你可以亮出牌堆顶7张牌,并用0～2张牌换取其中等量牌.若这7张牌中包含四种花色,视为你使用了【闪】.',
                        },
                        ////绝情谷////
                        {
                            name: '绝情谷',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_jueqinggu.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_jueqinggu.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_jueqinggu_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_jueqinggu_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>终 南 山 古 墓 长 闭 , 万 花 坳 花 落 无 声', '绝 情 谷 空 山 寂 寂 , 风 陵 渡 凝 月 冥 冥<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;绝情谷是<神雕侠侣>中让人印象最深刻的地方之一.绝情谷是一贯以历史真实感著称的金大侠创造的最大、最虚幻的艺术场景了.<神雕侠侣>是一部道学味浓厚的作品.绝情谷正是按道家理想创造的这样一个地方.曲折隐秘的溪流、幽深的竹林、质朴无华的石头房舍,还有与世无争的居民、茹素的饮食.是一个连早餐都是吃花瓣的简朴生活.无一不是说这里是一个世外桃源.<br>&nbsp;&nbsp;&nbsp;&nbsp;绝情谷位于<关洛之间>的山中,杨过、金轮法王等人误入绝情谷,杨过和小龙女身中情花剧毒,为救他二人性命,黄蓉、武三通和一灯大师等人奔赴绝情谷与绝情谷主开展一系列勾心斗角的战斗.由此也揭开了一连串的情节,绝情谷主人裘千尺乃铁掌水上飘裘千仞的妹妹,被公孙止废去手脚困于鳄鱼潭洞中,后幸得杨过及其女公孙绿萼所救,经过众人的努力本以为可以得到绝情丹解救杨过、小龙女二人,因无奈绝情丹只有一颗只能救得一人性命,但二人夫妻情深,最后杨过决绝之下将绝情丹扔下断肠崖.小龙女心知自己性命不久,乘杨过熟睡之际跳下断肠崖,为让杨过坚定生存的信念,让情郎杨过吃下断肠草解其情花之毒,故在断肠崖石壁上刻下十六个字<十六年后在此相聚,夫妻情深莫失信约>……十六年后杨过苦苦等待小龙女不来,绝望之际纵身跳下断肠崖,阴差阳错却使得他二人在绝情谷底相聚.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_jueqing.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·绝情谷】</b>你可以将你区域内的一张♥️️牌当【情花】使用.',
                        },
                        ////日月神教/////
                        {
                            name: '日月神教',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_riyue.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_riyue.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_riyue.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_riyue_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_riyuechecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>提 剑 跨 骑 挥 鬼 雨 , 白 骨 如 山 鸟 惊 飞', '尘 事 如 潮 人 如 水 , 只 叹 江 湖 几 人 回<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;金庸武侠小说<笑傲江湖>中的虚构门派,旧版小说称为朝阳神教,新版小说将其修改为日月神教.日月神教总坛在书中位于河北的黑木崖,因教中之人行事诡异,多造杀孽,故被江湖中人称之为魔教,日月教与所谓的正教五岳剑派格格不入.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_mojiao.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·日月神教】</b>出牌阶段限两次,你可以令一名本阶段未选择过的其他角色选择是否交给你一张锦囊牌,若选择否,你将牌堆顶一张牌当【走火入魔】对其使用.',
                        },
                        ////华山/////
                        {
                            name: '华山',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_huashan.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_huashan.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_songshu.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_huashan.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_huashan_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_huashanchecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>迢 遥 太 华 俯 咸 京 , 天 外 三 峰 削 不 成', '武 帝 祠 前 云 欲 散 , 仙 人 掌 上 雨 初 晴<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;华山派最早可以追溯到秦汉时代,是武侠小说和仙侠小说中门派之一,1958年的卧龙生名作<飞燕惊龙>中,即有华山派描述,并列入「九大门派」之中.<br>&nbsp;&nbsp;&nbsp;&nbsp;历经岁月,华山派已是武林中声名显赫的名门正派,而华山派的武功尤其是剑术经过百多年的发展,已经形成一整套完善的剑术体系,后又经华山派历代的高手的千锤百炼,华山派剑术越发精妙,声震武林,因此华山派又被称为华山剑派.<br>&nbsp;&nbsp;&nbsp;&nbsp;华山派剑术剑意取自西岳华山「奇、险」二字.华山无限风光尽在「奇、险」二字中,「奇,险」往往与秀美相映相衍,因此华山剑术奇拔峻秀,高远绝伦,招式处处透着「正合奇胜,险中求胜」的意境.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_yujian.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·华山派】</b>出牌阶段限一次,你可以从牌堆或弃牌堆里获得一把剑;<b>锁定技,</b>若你装备区里有剑,视为你拥有技能【气宗】.',
                        },
                        ////衡山/////
                        {
                            name: '衡山',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_hengshan.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_jy_bp_bg_hengshan.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_songshu.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_hengshan.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_hengshan_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_hengshanchecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>衡 山 苍 苍 入 紫 冥 , 下 看 南 极 老 人 星', '回 飙 吹 散 五 峰 雪 , 往 往 飞 花 落 洞 庭<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;五岳剑中的一个门派,位于衡山南部40公里处的衡阳城.曾在<射雕英雄传>中被提及,为「铁掌水上飄」裘千仞于铁掌歼衡山一役击败,一度一蹶不振.<br>&nbsp;&nbsp;&nbsp;&nbsp;在<笑傲江湖>中掌门为莫大.第二号人物刘正风与日月神教长老曲洋结为琴箫知音,竟遭灭族灭门.衡山众高手又误中岳不群、左冷禅吞并五岳的野心,莫大却洁身自好,游于方外.<br>&nbsp;&nbsp;&nbsp;&nbsp;衡山派乃五岳剑派之一,当年为对付日月神教,五派联盟,故有「五岳剑派,同气连枝」之约.衡山派现任掌门人莫大先生外号「潇湘夜雨」,一把胡琴不离手,有「琴中藏剑,剑发琴音」八字称号.<br>&nbsp;&nbsp;&nbsp;&nbsp;似乎衡山派的高手都喜欢音乐,莫大的师弟刘正风精通箫技,与日月神教长老曲洋结为「琴萧之交」.后创出<笑傲江湖曲>交与华山派令狐冲,金庸笔下<笑傲江湖>的故事也由此开始.<br>&nbsp;&nbsp;&nbsp;&nbsp;衡山派两大高手,一是现任掌门莫大先生,二则是其师弟刘正风.莫大先生一曲潇湘夜雨,曲调凄凉,其外号便是由此而来.此外,他剑法精湛,出剑速度极快,剑招诡异凌厉,不愧为衡山派掌门.<br>&nbsp;&nbsp;&nbsp;&nbsp;刘正风虽非掌门,但江湖中人认为他剑法已在莫大之上,其擅使的「回风落雁剑」据说能一招刺出九剑,迅猛无比,令人匪夷所思.<br>&nbsp;&nbsp;&nbsp;&nbsp;如果拜师到刘正风处时,可以向他学习弹琴技法及笑傲江湖曲,并且还可以习得他的绝招「回风落雁剑」.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_quwu.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·衡山派】</b>出牌阶段限一次,你展示所有手牌,将你的手牌补齐如下点数:1、2、3、5、6.若你获得了:<br>&nbsp;&nbsp;&nbsp;&nbsp;5张牌,你废除一个装备栏(若已全部废除则翻面);<br>&nbsp;&nbsp;&nbsp;&nbsp;4张牌,你失去1点体力并弃置1张牌;<br>&nbsp;&nbsp;&nbsp;&nbsp;1张牌,你令一名其他角色弃置1张牌;<br>&nbsp;&nbsp;&nbsp;&nbsp;0张牌,你对一名其他角色造成2点伤害并弃置其所有牌.',
                        },
                        ////嵩山/////
                        {
                            name: '嵩山',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_songshan.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_songshan.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_songshu.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_songshan.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_songshan_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_songshanchecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>迢 遥 太 华 俯 咸 京 , 天 外 三 峰 削 不 成', '武 帝 祠 前 云 欲 散 , 仙 人 掌 上 雨 初 晴<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;嵩山派掌门左冷禅身为「五岳剑派」盟主,位望尊崇,仍不甘心,定要把「五岳剑派」合而为一,结果害人又害已,嵩山派终于式微.<br>&nbsp;&nbsp;&nbsp;&nbsp;掌门人左冷禅、「托塔手」丁勉、「仙鹤手」陆柏、「大嵩阳手」费彬、汤英颚、「锦毛狮」高克新、「九曲剑」钟镇、「大阴阳手」乐厚、「神鞭」邓八公、劳德诺、「白头仙翁」卜沉、「秃鹰」沙天翁、「天外寒松」左挺、狄修、「千丈松」史登达(以上两人为嵩山大弟子,被刺瞎后暴怒的左冷禅砍做两段),万大平(史登达师弟).嵩山派高手素有「嵩山十三太保」之称,但原书未说明是哪十三人.华山次徒劳德诺实是嵩山左冷禅的第三徒弟,后拉拢林平之入派.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bingxi.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·嵩山派】锁定技,</b>你的普通杀视为冰杀,你造成寒冰伤害后,若目标无<寒冰>标记,你令其获得之.拥有此标记的角色不能使用♦️️非装备牌,且其成为火杀、硝磷火弹(火攻)的使用者或目标后,移除其<寒冰>.',
                        },
                        ////泰山////
                        {
                            name: '泰山',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_taishanpai.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_taishanpai.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_taishanpai_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_taishanpai_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>岱 宗 夫 如 何 ？ 齐 鲁 青 未 了', '会 当 凌 绝 顶 , 一 览 众 山 小<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;金庸小说<笑傲江湖>中的一个门派,位于天下第一山——泰山,有道教渊源,五岳剑派之一.创始人为东灵道长.天门道长为掌门人时,对左冷禅吞并五岳的野心执意不从,被买通的内奸和左道之士害死.派中高手被岳不群诱进华山思过崖山洞观摩剑法石刻,遭到暗算,无一生还.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_daizong.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·泰山派】</b>你使用有点数的伤害类卡牌指定目标后,你可令其中至多两名目标弃置其所有点数满足以下条件的牌:既不是你使用牌点数的因数、也不是你使用牌点数的倍数的牌.',
                        },
                        ////恒山////
                        {
                            name: '恒山',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_beiyuehengshan.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_beiyuehengshan.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_beiyuehengshan_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_beiyuehengshan_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>天 地 有 五 岳 , 恒 岳 居 其 北', '人 来 不 敢 入 , 祠 宇 白 日 黑<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;五岳剑派(中岳嵩山派、东岳泰山派、西岳华山派、南岳衡山派、北岳恒山派)中的一个门派,位于恒山见性峰,有佛学渊源.嵩山派欲将五岳剑派合而为一,恒山派掌门定闲师太坚决不从,结果在仙霞岭、水月庵两处遭伏击,差点全军覆没.定闲师太被岳不群暗害,弥留之际,请令狐冲接掌恒山.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_jianzhen.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·恒山派】</b>你使用【杀】指定目标后,根据场上剑的数量,你可以执行:至少一把剑,弃置其一张牌;至少两把剑,此杀不能被抵消;至少三把剑,此杀的伤害值基数+1.',
                        },
                        ////五毒教/////
                        {
                            name: '五毒',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_wudu.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_wudu.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_songshu.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_wudu.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_wudu_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_wuduchecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>鸦 头 不 着 未 如 霜 , 语 带 娇 柔 意 带 香', '侠 气 偏 多 苗 寨 女 , 不 教 脂 粉 亚 檀 郎<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            info: '五毒教是指金庸小说中的一个教派,据说他们自称是五仙教,别人称为五毒教包括蛤蟆、蜘蛛、蝎子、毒蛇、蜈蚣五种毒物 .五毒教把青蛇、蜈蚣、蝎子、蜘蛛、蟾蜍称作「五圣」.<br>&nbsp;&nbsp;&nbsp;&nbsp;五毒教地处苗疆「五毒岭」,是个神秘而恐怖的组织.五毒教信奉的原则是「利益决定敌友」,只要有利可图,就可以为人所用,不管是非、对错、正邪.五毒教另一个信条就是「谁得罪了五毒教,谁就会死无全尸」,与五毒教为敌的人都会莫名其妙地死掉.五毒教教徒间可以彼此使毒下毒.所以教徒间防范心奇重,而且每个人都想着怎么研制出比别人强的毒药、怎么在下毒的时候让人毫无察觉,防不胜防.<br><br><br><br><br><br><br><br><br>',
                            jineng: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_xiagu.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·五毒教】</b>出牌阶段限一次,你可以将一张手牌置于一名其他角色的侠客牌上.直到你下个回合开始,其受到与此牌花色相同的牌造成的伤害改为蛊毒伤害且+1.你的回合开始时,你收回此牌.',
                        },
                        ////逍遥派////
                        {
                            name: '逍遥派',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_xiaoyaopai.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_xiaoyaopai.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_xiaoyaopai_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_xiaoyaopai_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>北 冥 鲲 鱼 纳 碧 海 , 南 天 鹏 鸟 负 青 天', '一 朝 闻 道 乘 风 起 , 抟 云 扶 摇 九 万 里<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;逍遥派是金庸作品<天龙八部>中的门派,是行事潇洒,而低调的门派,也因此在江湖上绝少有人知道.逍遥派的武功讲究轻灵飘逸,闲雅清隽,威力无穷,得其一,则能在武林中所向披靡.<br>&nbsp;&nbsp;&nbsp;&nbsp;逍遥派上代掌门有三徒弟:天山童姥、无崖子、李秋水.因无崖子武功最强,掌门之位传位给无崖子, 并授以「七宝指环」.无崖子收有苏星河和丁春秋两名弟子.丁春秋暗自学习邪术,知道没有再当掌门的机会,竟将无崖子打落山崖,并自立「星宿派」.无崖子便借苏星河之手布下了一个「珍珑棋局」希望有人能破解而成为掌门.在苏星河召开的的天下弈棋大会中,「少林寺」的弟子虚竹竟破解了该「珍珑棋局」,于是无崖子化去其少林派内功,并将其自身修炼七十年的内力及「逍遥派」掌门之位传于他,后来虚竹更得无崖子的师姐天山童姥传授逍遥派本门武功.逍遥派本部位于天山缥缈峰的「灵鹫宫」,后来无崖子和李秋水先后离去,天山童姥在此镇守,自创灵鹫宫一派.此外,「逍遥派」有一支派「星宿派」——位于西域星宿海,为无崖子的二弟子丁春秋所创.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_fuyao.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·逍遥派】</b>出牌阶段限一次,你使用牌后,可以获得一张点数更大的牌,你本阶段内使用依此法获得的牌后,都可以获得一张点数更大的牌(依此法获得的【杀】不计入使用次数).',
                        },
                        ////大理段氏////
                        {
                            name: '大理',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_dali.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_dali.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_chunniao.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_dali.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_dali_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_dalichecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>青 衫 磊 落 险 峰 行 , 玉 壁 月 华 明', '谁 家 子 弟 谁 家 院 , 无 计 悔 多 情<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_jianmai.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·大理段氏】</b>你使用奇数/偶数点数的杀指定目标时,可以令任意名坐次号为奇数/偶数的角色成为此杀的额外目标.',
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;大理段氏出自金庸小说<天龙八部>中的武林世家,在<射雕英雄传><神雕侠侣>亦有出场.是地处云南的大理皇室.最先出场的是<天龙八部>中大理国段氏皇族段延庆、段正明、段正淳、段誉等;<射雕英雄传>和<神雕侠侣>中出场的是五绝高手南帝段智兴.六脉神剑和一阳指是大理段氏的世代相传武功,威猛绝伦.<br><br><br><br><br><br><br><br><br>',
                        },
                        ////姑苏慕容////
                        {
                            name: '姑苏慕容',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_murong.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_murong.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_chunniao.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_murong.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_murong_mouseover.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_murongchecked.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>举 世 纷 纷 笑 慕 容 , 谁 知 陈 涉 起 耕 佣', '西 湖 水 浅 何 堪 卧 , 北 漠 缘 悭 恨 未 封<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;姑苏慕容,金庸武侠小说<天龙八部>中的武林世家,燕国皇室后裔,历代致力于燕国的复辟事业.慕容世家多代居于江南姑苏燕子坞参合庄,以擅长众家之武学而闻名中原武林.<br>&nbsp;&nbsp;&nbsp;&nbsp;在五代末期,慕容龙城独创<斗转星移>绝技,纵横江湖,当世无敌,之后慕容氏其世代传承的<以彼之道,还施彼身>的斗转星移武功绝技,威震江湖.<br>&nbsp;&nbsp;&nbsp;&nbsp;南慕容在北宋年间,姑苏慕容成为江南第一大世家,其后世传人慕容博更为顶级武功高手.<br>&nbsp;&nbsp;&nbsp;&nbsp;现任庄主慕容复年少有为,学武有成,在江湖上闯出一番名头,与丐帮帮主乔峰并称中原武林两大高手,名满江湖,人称<北乔峰,南慕容>.所谓<中原英杰,首推此二人>.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_douzhuan.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·姑苏慕容】</b>出牌阶段每项限一次,你可以:1、弃置任意张基本牌,获得等量锦囊牌;2、弃置任意张锦囊牌,获得等量装备牌;3、弃置任意张装备牌,获得等量基本牌.',
                        },
                        ////星宿派////
                        {
                            name: '星宿派',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_murong.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_xingxiupai.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_chunniao.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_xingxiupai.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_xingxiupai_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_xingxiupai_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>星 宿 老 仙 , 法 力 无 边', '神 通 广 大 , 法 驾 中 原<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;星宿派是金庸小说<天龙八部>中的一个虚拟教派,在北宋时期创立,创立人为星宿老怪丁春秋.丁春秋师承逍遥派,但是其武功已和逍遥派不同,主要是用毒为主,亦有令人闻之色变的<化功大法>(以毒性侵入对手经脉使之失去内力).星宿武功以毒为主,对阵之前,对手往往已经中了星宿弟子的道,不得不忍受持续的各种剧毒伤害.星宿弟子的掌法也许不算最强,但绝对最让人胆寒,战斗中对手经常被他们扰乱心智,产生巨大的恐惧.<br>&nbsp;&nbsp;&nbsp;&nbsp;在五代末期,慕容龙城独创<斗转星移>绝技,纵横江湖,当世无敌,之后慕容氏其世代传承的<以彼之道,还施彼身>的斗转星移武功绝技,威震江湖.<br>&nbsp;&nbsp;&nbsp;&nbsp;南慕容在北宋年间,姑苏慕容成为江南第一大世家,其后世传人慕容博更为顶级武功高手.<br>&nbsp;&nbsp;&nbsp;&nbsp;现任庄主慕容复年少有为,学武有成,在江湖上闯出一番名头,与丐帮帮主乔峰并称中原武林两大高手,名满江湖,人称<北乔峰,南慕容>.所谓<中原英杰,首推此二人>.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_sudu.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·星宿派】</b>你造成的蛊毒伤害+1.',
                        },
                        ////药王谷////
                        {
                            name: '药王谷',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_murong.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_yaowanggu.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_chunniao.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_yaowanggu.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_yaowanggu_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_yaowanggu_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>草 庐 闺 中 称 药 王 , 洞 庭 湖 畔 遇 情 郎', '玉 凤 双 飞 托 春 梦 , 芳 华 散 尽 化 海 棠<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;药王谷是金庸小说雪山飞狐中的一个帮派,药王谷用毒之术出神入化,名震工湖,掌门人为无嗔大师,门下代表和程灵素、石万嗔等.<br>&nbsp;&nbsp;&nbsp;&nbsp;在五代末期,慕容龙城独创<斗转星移>绝技,纵横江湖,当世无敌,之后慕容氏其世代传承的<以彼之道,还施彼身>的斗转星移武功绝技,威震江湖.<br>&nbsp;&nbsp;&nbsp;&nbsp;南慕容在北宋年间,姑苏慕容成为江南第一大世家,其后世传人慕容博更为顶级武功高手.<br>&nbsp;&nbsp;&nbsp;&nbsp;现任庄主慕容复年少有为,学武有成,在江湖上闯出一番名头,与丐帮帮主乔峰并称中原武林两大高手,名满江湖,人称<北乔峰,南慕容>.所谓<中原英杰,首推此二人>.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_duzhu.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·药王谷】</b>你造成的蛊毒伤害+1.',
                        },
                        ////异邦////
                        {
                            name: '异邦',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_yibang.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_yibang.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_yibang_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_yibang_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>愿 以 此 心 寄 华 夏 , 且 将 岁 月 赠 山 河<br>', '此 生 无 悔 入 华 夏 , 来 世 还 做 中 国 人<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;同期存在的周边国家,如沙俄(苏菲亚)、欧美国家的角色(泰森等).<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bangjiao.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·异邦】</b>出牌阶段限一次,你可以选择一名与你手牌数量差不超过1的其他角色,你与其将所有手牌置入处理区,由你开始,你与其轮流获得其中一张牌.',
                        },
                        ////血刀门////
                        {
                            name: '血刀门',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_xuedaomen.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_xuedaomen.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_xuedaomen_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_xuedaomen_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>长 风 破 雪 八 万 里 , 一 刀 直 断 九 天 堤', '血 染 红 尘 三 千 丈 , 刀 破 孤 天 寒 鸦 啼<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;血刀门,小说<连城诀>及其衍生作品中的门派.血刀门重杀伐屠戮,不轻易招收弟子.凡想入门者需取<血刀杀伐令>,取令上者人头.令上既可能是江湖闻名之士,也可能是孤零柔弱挚友,天下无不可杀之人.走过第一步的得令者需要自相残杀,最后能站立者方能入得血刀门.属于邪派,几乎是无恶不作,掌门血刀老祖武功水平高强且下手狠毒,门内全部人都使用弯刀,因刀上有条血红色弯条所以叫<血刀>.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_modao.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·血刀门】</b>其他角色只能使用轻功闪来抵消你的【杀】,且抵消你的【杀】后,你可以弃置其一张牌..',
                        },
                        ////游侠/////
                        {
                            name: '游侠',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_baituoshan.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_youxia.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_youxia.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_youxia_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_youxia_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>少 年 骑 白 马 , 执 长 剑 , 快 意 恩 仇', '白 云 满 地 江 湖 阔 , 著 我 逍 遥 自 在 行<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;武侠小说中那些没有明确帮派,独来独往的性情中人.他们侠剑天涯、打包不平,不牵扯武林纷争但又侠义心肠.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_xingxia.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·游侠】</b>出牌阶段限一次,你可以令一名角色摸X张牌(X为攻击范围内包含其的角色数量,该角色除外).',
                        },
                        ////刺客////
                        {
                            name: '刺客',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_cike.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_cike.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_cike_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_cike_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>不 了 一 毫 事 , 空 捐 七 尺 躯', '陶 惜 其 人 没 , 雄 才 以 盗 书 <br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;刺客是人类历史中一种特殊职业,在现代指杀手.常由于政治、私怨等原因(如山上徹也),负责对某个目标人物实施谋杀或暗杀.有的刺客是单独行刺,有的则是多人协作;有的是受过严格训练的专职刺客(如聂隐娘),有的则受客观环境影响偶然成为刺客(如红拂女).刺客行刺或受人指使,或出于私恨,或为钱财名声,或为国家人民;等等,不一而足.世界各国史料均有记载刺客的相关事迹,近现代也同样有刺客活动.许多国家的安全局都设有刺客一职,例如美国的美国中央情报局(CIA),苏联的克格勃(KGB)、以色列的摩萨德(Mossad)等.某些恐怖组织也训练有专门暗杀、谋杀各国领导人和其他要员的刺客.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_xingci.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·刺客】</b>你使用普通【杀】指定目标时,你可以将此牌改为【刺杀】.',
                        },
                        ////悍匪/////
                        {
                            name: '悍匪',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_baituoshan.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_hanfei.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_hanfei.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_hanfei_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_hanfei_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>何 处 难 忘 酒 , 南 州 盗 贼 多', '黄 巾 方 裂 眦 , 白 日 敢 持 戈<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;盘踞一方、鱼肉百姓,或落草为寇、打家劫舍的匪类.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_qianglue.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·悍匪】</b>出牌阶段限一次,你可以声明一种牌名并选择一名其他角色,你获得其区域内所有你声明的牌(每种牌名每局限声明一次).',
                        },
                        ////鞑虏/////
                        {
                            name: '鞑虏',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_baituoshan.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_dalu.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_dalu.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_dalu_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_dalu_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>三 十 功 名 尘 与 土 , 八 千 里 路 云 和 月', '壮 志 饥 餐 胡 虏 肉 , 笑 谈 渴 饮 匈 奴 血<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;侵略中原王朝、或意图侵略中原王朝的周边少民国家,如辽、金、西夏等.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_nanfa.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·鞑虏】</b>出牌阶段限一次,你可以将两张【杀】当一张【鞑虏入侵】(【南蛮入侵】)使用;若其他存活角色均与你势力不同,则发动此技能时不需要转化【杀】.',
                        },
                        ////天地会/////
                        {
                            name: '天地会',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_baituoshan.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_tiandihui.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_tiandihui.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_tiandihui_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_tiandihui_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>地 振 高 岗 , 一 派 溪山 千 古 秀', '门 朝 大 海 , 三 合河 水 万 年 流<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;天地会是金庸武侠小说<鹿鼎记>中出现的江湖门派,总舵主是陈近南.天地会的创始祖师,便是国姓爷郑成功.当初国姓爷率领义师,进攻江南,围困江宁,功败垂成,在退回台湾之前,接纳陈近南的创议,设立了天地会.<br>&nbsp;&nbsp;&nbsp;&nbsp;天地会共有十堂,前五房五堂,后五房五堂.前五房莲花堂、洪顺堂、家后堂、参太堂、宏化堂.后五房青木堂、赤火堂、西金堂、玄水堂、黄土堂.<br>&nbsp;&nbsp;&nbsp;&nbsp;前五房中,长房莲花堂该管福建,二房洪顺堂该管广东,三房家后堂该管广西,四房参太堂该管湖南、湖北,五房宏化堂该管浙江.后五房中,长房青木堂该管江苏,二房赤火堂该管贵州,三房西金堂该管四川,四房玄水堂该管云南,五房黄土堂该管中州河南.天地会为郑成功旧部所组成,主力在福建,因此莲花堂为长房,实力最强,其次为两广、两湖,更其次为浙江、江苏.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_fuming.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·天地会】</b>出牌阶段限一次,若你手牌中没有依此法复制的牌,你可以复制你手牌中的至多三张牌,依此法复制的牌不占用上限,对异族角色额外结算一次.',
                        },
                        ////武林世家/////
                        {
                            name: '武林世家',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_baituoshan.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_wulinshijia.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_wulinshijia.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_wulinshijia_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_wulinshijia_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>身 如 桅 杆 脚 如 船 , 伸 缩 如 鞭 势 如 澜', '神 藏 一 气 运 如  球 , 吞 吐 沾 盖 冷 崩 弹<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;名振当地但又不足以名满江湖的小门小派的集合,比如:聚贤庄、红梅山庄等.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_wangzu.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·武林世家】</b>准备阶段开始时,你可以判定,根据判定结果,你于此回合内视为装备了如下两种秘籍牌.红色:【九阴真经】和【葵花宝典】;黑色:【九阳真经】和【武穆遗书】.',
                        },
                        ////文人墨客/////
                        {
                            name: '文人墨客',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_baituoshan.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_wenrenmoke.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_wenrenmoke.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_wenrenmoke_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_wenrenmoke_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>十 步 杀 一 人 , 千 里 不 留 行', '事 了 拂 衣 去 , 深 藏 身 与 名<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;诗人、词人,如李白、屈原等.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_feihua.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·文人墨客】</b>岀牌阶段限一次,你可以摇骰子,根据点数对应的诗词,从当前游戏环境中列岀牌名与该诗词有相同文字的牌,你从中获得至多三张牌.<br>1:自在飞花轻似梦,无边丝雨细如愁.<br>2:壮志饥餐胡虏肉,笑谈渴饮匈奴血.<br>3:山回路转不见君,雪上空留马行处.<br>4:云想衣裳花想容,春风拂槛露华浓.<br>5:劝君更尽一杯酒,西出阳关无故人.<br>6:须知入骨难消处,莫比人间取次愁.',
                        },
                        ////神话////
                        {
                            name: '神话',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_shenhua.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_shenhua.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_shenhua_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_shenhua_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>云 母 屏 风 烛 影 深 , 长 河 渐 落 晓 星 沉', '嫦 娥 应 悔 偷 灵 药 , 碧 海 青 天 夜 夜 心<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;神话故事是远古人民表现对自然及文化现象的理解与想象的故事,它是人类早期的不自觉的亦或是艺术创作.譬如白蛇传、聊斋志异、西游记等文学名著均属于鬼怪传说.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_xiuzhen.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·神话】</b>出牌阶段限一次,若你手牌中的花色不足四种,你可以摸一张牌并重复此流程,直到你手牌花色数量增加.',
                        },
                        ////浪子////
                        {
                            name: '浪子',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_langzi.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_langzi.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_langzi_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_langzi_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>怅 卧 新 春 白 袷 衣 , 白 门 寥 落 意 多 违', '红 楼 隔 雨 相 望 冷 , 珠 箔 飘 灯 独 自 归<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;古龙生性风浪,是个天生的浪子,他笔下的男主角大多都是浪子类型,比如李寻欢、陆小凤等.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_duoqing.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·浪子】</b>出牌阶段限一次,你可令任意名角色各获得张♥️️牌,你摸X张牌(X为依此法选择的女性角色数).',
                        },
                        ////庙堂////
                        {
                            name: '庙堂',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_emei.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_miaotang.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_miaotang.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_miaotang_mo.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_miaotang_mo.png'],
                            shi: ['<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png><br>官 仓 老 鼠 大 如 斗 , 见 人 开 仓 亦 不 走', '健 儿 无 粮 百 姓 饥 , 谁 遣 朝 朝 入 君 口<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bp_tisi.png>'],
                            jineng: '<img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_bpintro.png><br>&nbsp;&nbsp;&nbsp;&nbsp;在朝为官的人物合集,如狄仁杰、李元芳等.<br><br><br><br><br><br><br><br><br>',
                            info: '<br><img style=width:600px src=extension/金庸群侠传/image/bangpai/jy_baihe.png><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>【帮派技·庙堂】</b>出牌阶段限一次,你可以令两名手牌数量相等的角色交换红色或黑色手牌.',
                        },
                        //空白占位
                        {
                            name: '',
                            bg: 'extension/金庸群侠传/image/bangpai/jy_bp_bg_riyue.jpg',
                            lihui: 'extension/金庸群侠传/image/bangpai/jy_bp_character_gaibang.png',
                            guajian: 'extension/金庸群侠传/image/bangpai/jy_bp_taohua.png',
                            navimgs: ['extension/金庸群侠传/image/bangpai/jy_bp_icon_none.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_none.png', 'extension/金庸群侠传/image/bangpai/jy_bp_icon_none.png'],
                            shi: ['', ''],
                            jineng: '',
                            info: '',
                        },
                    ];
                    var activeBangpai = 0;
                    var width = document.body.clientWidth;
                    var layer = document.createElement('div');
                    layer.id = 'jyqxz_bangpai_infodiv';
                    layer.style.transform = 'scale(' + width / 1920 + ')';
                    window.addEventListener(
                        'resize',
                        function () {
                            var width = document.body.clientWidth;
                            layer.style.transform = 'scale(' + width / 1920 + ')';
                        },
                        false
                    );
                    layer.innerHTML = `
                    <div class="jyqxz_bangpai_infodiv_bottom_bg">
                    <img src="extension/金庸群侠传/image/bangpai/jy_bp_goldwave.png" alt="" class="jyqxz_bangpai_infodiv_bottom_bgimg">
                    </div>
                    `;
                    var audio = document.createElement('audio');
                    audio.src = 'extension/金庸群侠传/image/bangpai/jy_bp_check.mp3';
                    layer.appendChild(audio);
                    var infodiv = document.createElement('div');
                    infodiv.id = 'jyqxz_bangpai_infodiv_infodiv';
                    layer.appendChild(infodiv);
                    //infos
                    var infos = document.createElement('div');
                    infos.className = 'jyqxz_bangpai_infodiv_infodiv_infos';
                    infodiv.appendChild(infos);
                    //navs
                    var navs = document.createElement('div');
                    navs.className = 'jyqxz_bangpai_infodiv_infodiv_navs jyqxz_bangpai_scroll';
                    var bangpainavs = [];
                    bangpais.forEach((bangpai, i) => {
                        var bangpainav = document.createElement('img');
                        bangpainav.className = 'jyqxz_bangpai_infodiv_infodiv_nav';
                        bangpainav.src = i === activeBangpai ? bangpai.navimgs[2] : bangpai.navimgs[0];
                        bangpainav.onmouseover = (function (i) {
                            return function () {
                                this.src = bangpais[i].navimgs[1];
                            };
                        })(i);
                        bangpainav.onmouseout = (function (i) {
                            return function () {
                                this.src = i === activeBangpai ? bangpais[i].navimgs[2] : bangpais[i].navimgs[0];
                            };
                        })(i);
                        bangpainav.onclick = (function (i) {
                            return function () {
                                activeBangpai = i;
                                audio.src = 'extension/金庸群侠传/image/bangpai/jy_bp_check.mp3';
                                audio.play();
                                renderBangpai();
                            };
                        })(i);
                        bangpainavs.push(bangpainav);
                        navs.appendChild(bangpainav);
                    });
                    infodiv.appendChild(navs);
                    var lihui = document.createElement('img');
                    lihui.className = 'jyqxz_bangpai_infodiv_lihui';
                    layer.appendChild(lihui);
                    var tree = document.createElement('img');
                    tree.className = 'jyqxz_bangpai_infodiv_tree';
                    tree.src = 'extension/金庸群侠传/image/bangpai/jy_bp_tree.png';
                    layer.appendChild(tree);
                    function renderBangpai() {
                        layer.style.backgroundImage = 'url(' + bangpais[activeBangpai].bg + ')';
                        tree.src = bangpais[activeBangpai].guajian;
                        lihui.src = bangpais[activeBangpai].lihui;
                        bangpainavs.forEach((b, k) => {
                            b.src = k === activeBangpai ? bangpais[k].navimgs[2] : bangpais[k].navimgs[0];
                        });
                        infos.innerHTML = `<p class="jyqxz_bangpai_infodiv_infodiv_infos_bangpai_title">${bangpais[activeBangpai].name}</p>
                        <div class="zanshi">
                        <p class="zanship">${bangpais[activeBangpai].shi[0]}</p>
                        <p class="zanship">${bangpais[activeBangpai].shi[1]}</p>
                        </div>
                        <img src="extension/金庸群侠传/image/bangpai/jy_bp_intro.png" alt="" class="jyqxz_bangpai_infodiv_bangpaifenge">
                        <div class="jyqxz_bangpai_infodiv_contentdiv jyqxz_bangpai_scroll">
                        <p class="jyqxz_bangpai_infodiv_contentdiv_bangpaiinfo">${bangpais[activeBangpai].info}</p>
                        <p class="jyqxz_bangpai_infodiv_contentdiv_jinenginfo">${bangpais[activeBangpai].jineng}</p>
                        </div>`;
                    }
                    renderBangpai();
                    //backbutton
                    var backbtn = document.createElement('div');
                    backbtn.className = 'jyqxz_bangpai_infodiv_backbtn';
                    var backbtnimg = document.createElement('img');
                    backbtnimg.setAttribute('src', 'extension/金庸群侠传/image/bangpai/jy_bangpai_back.png');
                    backbtn.appendChild(backbtnimg);
                    backbtn.onmouseover = function () {
                        backbtnimg.setAttribute('src', 'extension/金庸群侠传/image/bangpai/jy_bangpai_back_click.PNG');
                    };
                    backbtn.onmouseout = function () {
                        backbtnimg.setAttribute('src', 'extension/金庸群侠传/image/bangpai/jy_bangpai_back.png');
                    };
                    layer.appendChild(backbtn);
                    var originalMusic = ui.backgroundMusic.src;
                    backbtn.onclick = function () {
                        audio.src = 'extension/金庸群侠传/image/bangpai/bangpai_back.mp3';
                        audio.play();
                        //播放原来的音乐
                        game.bangpaiBackgroundMusic(originalMusic);
                        ui.backgroundMusic.autoplay = true;
                        ui.backgroundMusic.addEventListener('ended', game.bangpaiBackgroundMusic);
                        setTimeout(() => {
                            game.resume2();
                            layer1.remove();
                        }, 500);
                    };
                    layer1.appendChild(layer);
                    //帮派技能背景音乐
                    game.bangpaiBackgroundMusic();
                    ui.backgroundMusic.autoplay = true;
                    ui.backgroundMusic.addEventListener('ended', game.bangpaiBackgroundMusic);
                },
            },
            //帮派技相关设置
            jybangpai_zhu: {
                name: '主公启用帮派技',
                intro: '开启后主公开局获得帮派技能',
                init: false,
            },
            jybangpai_nei: {
                name: '内奸启用帮派技',
                intro: '开启时内奸启用帮派技',
                init: false,
            },
            jybangpai_fan: {
                name: '反贼启用帮派技',
                intro: '开启时反贼启用帮派技',
                init: false,
            },
            jybangpai_zhong: {
                name: '忠臣启用帮派技',
                intro: '开启时忠臣启用帮派技',
                init: false,
            },
            jybangpai2: {
                name: '其他扩展启用帮派技',
                intro: '开启后,非金包武将启用帮派技能,并随机从两个帮派技能中挑选一个.',
                init: false,
            },
            //美化类选项
            jy_decoration: {
                name: '<img style=width:260px src=extension/金庸群侠传/image/title/jy_decoration.png>',
                intro: '',
                init: true,
                clear: true,
            },
            //<金庸群侠传>角色页面(CSS作者:西野七濑;数据组作者:霸天、西野七濑;美工作者:大熊小猫)20220225
            //角色页面开关
            huanfu: {
                name: '金庸群侠传角色页面',
                intro: '开启后,启用金庸群侠传页面美化UI.',
                init: true,
                onclick(item) {
                    if (item) {
                        ui.click.charactercard = lib.showjueseFn;
                    } else {
                        ui.click.charactercard = lib.jy_guanfang_huanfu;
                    }
                    game.saveConfig('extension_金庸群侠传_huanfu', item);
                },
            },
            //切换角色页面UI风格
            jy_changeJuesePageUI: {
                name: '切换角色页面UI',
                intro: '一键切换切换角色页面UI,切换后等候数分钟后重启生效.',
                init: '1',
                item: {
                    1: '笑傲江湖',
                    2: '十周年UI',
                    3: '手杀UI',
                    4: '灵魂摆渡',
                    5: '大鱼海棠',
                    6: '神都夜行',
                    7: '迷失之地',
                    8: '英雄杀',
                    9: '盗墓笔记',
                },
                onclick: async function (item) {
                    game.saveConfig('extension_金庸群侠传_jy_changeJuesePageUI', item);
                    let color;
                    switch (item) {
                        case '1':
                            color = '#bf6d3d';
                            break;
                        case '2':
                            color = '#7e563d';
                            break;
                        case '3':
                            color = '#e8cb82';
                            break;
                        case '4':
                            color = '#4382bf';
                            break;
                        case '5':
                            color = '#9f6630';
                            break;
                        case '6':
                            color = '#935b29';
                            break;
                        case '7':
                            color = '#bb9358';
                            break;
                        case '8':
                            color = '#4863ca';
                            break;
                        case '9':
                            color = '#875613';
                            break;
                        default:
                            color = '#c06d3b';
                    }
                    let obj = Object.keys(Object.assign({ ...lib.skill }, { ...lib.card })).filter((name) => {
                        if (/ywhy_|qtpz_|ldj_|jue_|xajh_|yttl_|sdxl_|sdyx_|tlbb_|jy_/.test(name) == true) return true;
                        return false;
                    });
                    for await (let name of obj) {
                        if (lib.translate[name + '_info'] && lib.translate[name + '_info'].length) {
                            let str = lib.translate[name + '_info'];
                            let colorx = game.getExtensionConfig('金庸群侠传', 'jy_changeJuesePageUIColor');
                            let reg = new RegExp(colorx, 'g');
                            if (str.includes("style='color:")) {
                                str = str.replace(colorx ? reg : /"#c06d3b"/g, color);
                            }
                            lib.translate[name + '_info'] = str;
                        }
                    }
                    lib.announce.publish('jy_changeJuesePageColor', {
                        color: color,
                    });
                    await game.saveExtensionConfig('金庸群侠传', 'jy_changeJuesePageUIColor', color);
                },
                visualMenu(node, link) {
                    node.style.height = node.offsetWidth * 0.67 + 'px';
                    node.style.backgroundSize = '100% 100%';
                    node.className = 'button character';
                    node.setBackgroundImage('extension/金庸群侠传/image/thumbnail/characterpage/' + link + '.jpg');
                },
            },
            jy_warn4: {
                name: '<img style=width:260px src=extension/金庸群侠传/image/title/warn4.png>',
                intro: '',
                init: true,
                clear: true,
            },
            //指示线特效
            jy_linexy: {
                name: '切换指示线',
                intro: '根据喜好切换指示线,建议关闭其他扩展的指示线特效.',
                init: 'jy_line_goldendragon',
                item: {
                    jy_line_jianfeng: '剑锋',
                    jy_line_liuxinghudiejian: '流星蝴蝶剑',
                    jy_line_liuxinghudiejian2: '剑蝶',
                    jy_line_luoyinshenjian: '落英神剑',
                    jy_line_lvyujzhang: '绿玉杖',
                    jy_line_shezhang: '蛇杖',
                    jy_line_goldendragon: '降龙吟空',
                    default: '系统默认',
                },
                onclick(item) {
                    game.saveConfig('extension_金庸群侠传_jy_linexy', item);
                },
                visualMenu(node, link) {
                    //link是冒号前面的,比如default:经典卡背,link就是default
                    node.style.height = node.offsetWidth * 1 + 'px'; //高度设置成宽度的1.1倍
                    node.style.backgroundSize = '100% 100%'; //图片拉伸
                    //if(link=="default")link="经典卡背";//如果选的default,那么图片是经典卡背.jpg
                    //node.className='button character';
                    node.setBackgroundImage('extension/金庸群侠传/image/thumbnail/linexy/' + link + '.jpg'); //设置图片
                },
            },
            //自由选择卡背(技术顾问:咸鱼)
            jycardback: {
                name: '切换卡背',
                intro: '可以根据自己的喜好选择卡背样式(切换后重启生效).',
                init: 'jy_cardback1',
                item: {
                    jy_cardback1: '金庸群侠',
                    jy_cardback2: '侠之大者',
                    jy_cardback3: '射雕英雄',
                    jy_cardback4: '神雕侠侣',
                    jy_cardback5: '天龙八部',
                    jy_cardback6: '三国杀1',
                    jy_cardback7: '三国杀2',
                    jy_cardback8: '三国杀3',
                    jy_cardback9: '三国杀4',
                    jy_cardback10: '无名杀',
                    jy_cardback0: '系统默认',
                },
                onclick(item) {
                    game.saveConfig('extension_金庸群侠传_jycardback', item);
                },
                //菜单可视化预览
                visualMenu(node, link) {
                    //link是冒号前面的,比如default:经典卡背,link就是default
                    node.style.height = node.offsetWidth * 1.4 + 'px'; //高度设置成宽度的1.3倍
                    node.style.backgroundSize = '100% 100%'; //图片拉伸
                    //if(link=="default")link="经典卡背";//如果选的default,那么图片是经典卡背.jpg
                    node.className = 'button character incardback'; //后面的incardback是我自定义的,不需要
                    node.setBackgroundImage('extension/金庸群侠传/image/cardback/' + link + '.jpg'); //设置图片
                },
                //菜单可视化预览结束
            },
            //换背景壁纸
            Background_Picture: {
                name: '背景图片',
                intro: '背景图片:可随意切换精美高清的背景图片.',
                init: lib.config.extension_金庸群侠传_Background_Picture === undefined ? '1' : lib.config.extension_金庸群侠传_Background_Picture,
                item: {
                    1: '默认背景',
                    wms_JYBackground: '射雕弯弓',
                    wms_JYBackground_congling: '冲灵剑舞',
                    wms_JYBackground_mingding: '酩酊一醉',
                    wms_JYBackground_yanmen: '雁门一役',
                    wms_JYBackground_heimuya: '黑木崖上',
                    wms_JYBackground_Ensemble: '一曲绝唱',
                    wms_JYBackground_shaolin: '少室山',
                    wms_JYBackground_juezhan: '巅峰决战',
                    wms_JYBackground_juexiang: '笑傲江湖',
                    wms_JYBackground_binghuo: '冰火岛',
                    wms_JYBackground_guangmingding: '光明顶',
                    wms_JYBackground_jinlan: '义结金兰',
                    wms_JYBackground_qiqiechengqun: '妻妾成群',
                    wms_JYBackground_honghuahui: '红花群豪',
                    auto: '自动换背景',
                },
                onclick(item) {
                    game.saveConfig('extension_金庸群侠传_Background_Picture', item);
                    game.jyBackground_Picture();
                },
                visualMenu(node, link) {
                    //link是冒号前面的,比如default:经典卡背,link就是default
                    node.style.height = node.offsetWidth * 0.67 + 'px'; //高度设置成宽度的0.67倍
                    node.style.backgroundSize = '100% 100%'; //图片拉伸
                    node.className = 'button character jybackgroundname';
                    node.setBackgroundImage('extension/金庸群侠传/image/background/' + link + '.jpg'); //设置图片
                },
            },
            Background_Picture_auto: {
                name: '自动换背景时间',
                intro: '设置自动换背景的时间',
                init: lib.config.extension_金庸群侠传_Background_Picture_auto === undefined ? '30000' : lib.config.extension_金庸群侠传_Background_Picture_auto,
                item: {
                    5000: '五秒',
                    10000: '十秒',
                    20000: '二十秒',
                    30000: '半分钟',
                    60000: '一分钟',
                    120000: '两分钟',
                    300000: '五分钟',
                },
                onclick(item) {
                    game.saveConfig('extension_金庸群侠传_Background_Picture_auto', item);
                    if (lib.config.extension_金庸群侠传_Background_Picture == 'auto') {
                        game.jyBackground_Picture();
                    }
                },
            },
            //换音乐
            Background_Music: {
                name: '背景音乐',
                intro: '背景音乐:可随意点播、切换优质动听的背景音乐',
                init: lib.config.extension_金庸群侠传_Background_Music === undefined ? '1' : lib.config.extension_金庸群侠传_Background_Music,
                item: {
                    0: '随机播放',
                    1: '默认音乐',
                    2: '铁血丹心',
                    3: '痴情冢',
                    4: '刀剑如梦',
                    5: '沧海一声笑',
                    6: '阿西达卡战记',
                    7: '英雄的黎明',
                    8: '雨中哭泣',
                    9: '竹林情歌',
                    10: '爱江山更爱美人',
                    11: '男儿当自强',
                    12: '芦苇荡',
                    13: '西天取经路遥迢',
                    14: '天龙八部原声带',
                    15: '雨夜诀别',
                    16: '孤星独吟',
                    17: '天地都在我心中',
                    18: '天龙八部',
                    19: '醉春风',
                    20: '爱上张无忌',
                    21: '痴情冢(邓伦)',
                    22: '龙女之声',
                    23: '万里长城永不倒',
                    24: '问世间',
                    25: '画心(张靓颖)',
                    26: '小刀会序曲',
                    27: "Dragon's Legend",
                    28: '爱上张无忌(配乐)',
                    29: '心爱(配乐)',
                    30: '难念的经(周华健)',
                    31: '是非(窦智孔)',
                    32: '初识太极(胡伟立)',
                    33: '丽春院(胡伟立)',
                    34: '青天变奏',
                    35: '市集(胡伟立)',
                    36: '偷功(胡伟立)',
                    37: '太极拳(胡伟立)',
                    38: '新鸳鸯蝴蝶梦变奏',
                    39: '傲气笑傲万重浪',
                    40: '何为永恒(胡夏)',
                    41: '俩俩相忘(辛晓琪)',
                    42: '随缘(国语)',
                    43: '俩俩相忘(蚱蜢兄弟)',
                    44: '霍元甲(周杰伦)',
                    45: '超越时光的思念',
                    46: '无愧于心(孙楠)',
                    47: '江湖路(罗文)',
                    48: '江湖路(徐日勤)',
                    49: '追梦人(高胜美)',
                    50: '剑魂(李炜)',
                    51: '精忠报国(屠洪纲)',
                    52: '书剑恩仇录(陈燮阳)',
                    53: '雪中情(杨庆煌)',
                    54: '侠客梦(尹相杰)',
                    55: '多情总比无情苦',
                    56: '叹人间(何昶希)',
                    57: '爱江山更爱美人(胡夏)',
                    58: '天地孤影任我行(陈勋奇)',
                    59: '思情(青蛇原声带)',
                    60: '人生如此(辛晓琪)',
                    61: '流光飞舞(辛晓琪)',
                    62: '水漫金山',
                    63: '雪千寻(东方不败2原带声)',
                    64: '铁血丹心(刘俊宇等)',
                    65: '沧海一声笑(肖战)',
                    66: '天下(张杰)',
                    67: '剑心(张杰)',
                    68: '浩瀚(张杰)',
                    69: '痴情冢粤语版(陈艺鹏)',
                    70: '潇湘子(川井宪次)',
                    71: '宽恕(王菲)',
                    72: '归云来(胡兵,希莉娜依)',
                    73: '神话情话(周华健,刘豫)',
                    74: '双骄(金志文)',
                    75: '无缺(阿鲲)',
                    76: '红尘不悔(陆虎)',
                    77: '幽灵公主(周深,郎朗)',
                    78: '刀剑若梦(周华健,粤语)',
                    79: '走天涯(赵季平)',
                    80: '暗夜浮香(陈国栋)',
                    81: '思君黯然(陈国栋)',
                    82: '难念的经变奏(OST)',
                    83: '凌波微步(OST)',
                    84: '思断义绝(OST)',
                },
                onclick(item) {
                    game.saveConfig('extension_金庸群侠传_Background_Music', item);
                    game.jyplayBackgroundMusic();
                    ui.backgroundMusic.addEventListener('ended', game.jyplayBackgroundMusic);
                },
                visualMenu(node, link) {
                    node.style.height = node.offsetWidth * 1.33 + 'px';
                    node.style.backgroundSize = '100% 100%';
                    node.className = 'jymusicname';
                    node.setBackgroundImage('extension/金庸群侠传/image/thumbnail/bgm/' + link + '.png');
                },
            },
            //偏好类选项
            jy_predilection: {
                name: '<img style=width:260px src=extension/金庸群侠传/image/title/jy_predilection.png>',
                intro: '',
                init: true,
                clear: true,
            },
            wujiangpingji: {
                name: '武将评级',
                intro: '开启后,增加金庸包武将评级效果(需开启自带的武将评级按钮:选项-显示-显示武将评级).',
                init: true,
            },
            jyzhenwangpeiyin: {
                name: '阵亡配音',
                intro: '开启后,游戏中会触发角色的阵亡配音.',
                init: true,
            },
            jyUseCardAudioEffect: {
                name: '使用卡牌音效',
                intro: '开启后重启游戏生效.使用牌时,会播放对应音效.',
                init: true,
            },
            changeGroup: {
                name: '切换势力',
                intro: '开启后,替换金庸包武将势力(可在<魏蜀吴群>与<宋元清明列>之间进行切换,方便玩家自由取选择).',
                init: true,
            },
            jiexiantupo: {
                name: '界限突破',
                intro: '开启后,加强某些过于弱鸡的武将',
                init: true,
            },
            JYreplacedCard: {
                name: '切换牌堆',
                intro: '开启后,切换为金庸包专属于牌堆;关闭后,将加入官方牌堆.',
                init: 'off',
                item: {
                    1: '不可混包(推荐)',
                    2: '可混包(衍生牌会加入牌堆)',
                    3: '牌堆添加毒邪杀并平衡牌堆数量',
                    off: '关闭金庸包牌堆',
                },
            },
            jyhideAttackDisdance: {
                name: '隐藏武器坐骑攻击范围',
                intro: '开启后,将隐藏武器和坐骑攻击范围的文字,界面更干净.关闭后会重新显示.',
                init: true,
            },
            jyhideCardName: {
                name: '隐藏卡牌界面卡牌名称',
                //-----原来特效字体改成简单字体
                intro: '开启后,将隐藏卡牌界面卡牌的系统自带名称,卡牌更干净.关闭后会重新显示.',
                init: true,
            },
            markChange: {
                name: '适配金庸的标记图片',
                //-----原来特效字体改成简单字体
                intro: '如果不用金庸的标记请关闭,仅适配金庸的标记图片.',
                init: false,
            },
            jy_warning3: {
                name: '<span style="color: #f9ed89"><font size =2px>提示:开启后主忠内反改为盟主护法奸细刺客,特殊身份模式可能有显示问题.</font></span>',
                intro: '',
                clear: true,
                init: true,
            },
            jy_viewHandCards1: {
                name: '<b><font color="#808080" size="5">测试用开关</font></b>',
                intro: '',
                init: true,
                clear: true,
            },
            jy_viewHandCards2: {
                name: '手牌可视',
                intro: '开启后,玩家可以看到场上所有角色的手牌',
                init: false,
            },
            ////////////////////////
        },
        package: {
            intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br>',
            author: "<br><br><div onclick=window.open('https://jq.qq.com/?_wv=1027&k=4RPsUoAK')><img style=width:100px src=extension/金庸群侠传/image/poster/jy_qqgroup.jpg></div><br><div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5qvkVxl')><img style=width:100px src=extension/金庸群侠传/image/poster/jy_originalgroup.jpg></div><br><br><img style=width:250px src=extension/金庸群侠传/image/poster/jyqxz_poster.jpg><br></span><br><img style=width:250px src=extension/金庸群侠传/image/poster/jyqxz_qqgroup.jpg>",
            version: '1.36',
        },
    };
});

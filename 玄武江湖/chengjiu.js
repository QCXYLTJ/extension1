'use strict';
window.xwImport(function (lib, game, ui, get, ai, _status) {
    if (ui && ui.css && ui.css.fontsheet && ui.css.fontsheet.sheet && ui.css.fontsheet.sheet.insertRule) {
        ui.css.fontsheet.sheet.insertRule("@font-face {font-family: 'xw_longyinshoushu';src: url(extension/玄武江湖/xw_longyinshoushu.ttf);}", 0);
    } else {
        ui.xwjhsheet = lib.init.sheet();
        ui.xwjhsheet.sheet.insertRule("@font-face {font-family: 'xw_longyinshoushu';src: url(extension/玄武江湖/xw_longyinshoushu.ttf);}", 0);
    }
    if (!(lib.config.extensions && lib.config.extensions.includes('千幻聆音') && lib.config.extension_千幻聆音_enable)) {
        if (ui && ui.css && ui.css.fontsheet && ui.css.fontsheet.sheet && ui.css.fontsheet.sheet.insertRule) {
            ui.css.fontsheet.sheet.insertRule("@font-face {font-family: 'qh_songhei';src: url(extension/玄武江湖/qianhuanlingyin/songhei.ttf);}", 0);
        } else {
            ui.xwjhsheet.sheet.insertRule("@font-face {font-family: 'qh_songhei';src: url(extension/玄武江湖/qianhuanlingyin/songhei.ttf);}", 0);
        }
    }
    lib.xwjhAch = {
        狼子野心: {
            type: 'game',
            hard: 3,
            text: '侠魂模式下,身为细作,亲手杀害主公并接过盟主之位.',
            extra: '大丈夫生于天地之间,岂能郁郁久居人下!',
        },
        血溅五步: {
            type: 'game',
            hard: 2,
            text: '侠魂模式下,身为刺客刺杀主公成功.',
            extra: '探虎穴兮入蛟宫,仰天呼气兮成白虹.',
        },
        大脑过载: {
            type: 'game',
            hard: 2,
            count: 10,
            text: '记录你的离谱操作(例如对装备【夜行斗笠】的角色使用黑色杀被防止、对装备【铁磁盔】的角色使用暗器牌被无效等),累计10次获得此成就.',
            extra: '多喝七个核桃.',
        },
        绝境翻盘: {
            type: 'game',
            hard: 4,
            text: '在对局中陷入过无队友且有四名敌人依然存活的困境,然而最终获得胜利.',
            extra: '我们遇到什么困难,都不要怕!微笑着面对他!消除恐惧最好的方法,是面对恐惧!加油!',
        },
        丞相盖饭: {
            type: 'game',
            hard: 3,
            text: '将桃、丹药牌、珍材牌当作别的牌使用并造成伤害.',
            extra: '一介匹夫!!!他哪里来的如此胆识!!!',
        },
        禁止摆烂: {
            type: 'game',
            hard: 3,
            text: '在自己的出牌阶段内结束濒死状态后,依然存活.',
            extra: '你怎么睡得着的？你这个年纪你这个年龄段,睡得着觉？',
        },
        九转大厨: {
            type: 'character',
            hard: 3,
            text: '使用郭一,一局内因发动【别馐】,三次获得其他角色的所有牌.',
            extra: '我保留了大部分铁锈的味道,这样才能让你知道,你吃的是断头饭.',
        },
        冤大头: {
            type: 'character',
            hard: 2,
            text: '花五张牌购买郑所谓的【货】.',
            extra: '理性消费,量力而行.',
        },
        干瞪眼: {
            type: 'game',
            hard: 2,
            count: 20,
            text: '出牌阶段由于被点穴导致无法出牌达到20次.',
            extra: '你为什么只是看着,难道你真的背叛了吗……',
        },
        火云邪神: {
            type: 'character',
            hard: 3,
            count: 10,
            text: '使用五毒童子时,因发动【千手】累计获得过10张暗器牌.',
            extra: '天下武功,无坚不破,唯快不破!',
        },
        明察秋毫: {
            type: 'character',
            hard: 2,
            text: '使用周安夏,发动【激浊】,弃置的三张牌均为♦️️️.',
            extra: '这些小伎俩,逃不过本官的法眼.',
        },
        优待俘虏: {
            type: 'game',
            hard: 2,
            count: 20,
            text: '累计击杀20名横置的角色.',
            extra: '千万别多想,就是枪毙.',
        },
        丢盔弃甲: {
            type: 'game',
            hard: 2,
            text: '弃置牌后,手牌和装备区没有任何牌.',
            extra: '游戏里的你,再强大,也是假的,不是真的.',
        },
        全副武装: {
            type: 'game',
            hard: 2,
            text: '五个装备区全部装满.',
            extra: '黄沙百战穿金甲,不破楼兰终不还.',
        },
        自欺欺人: {
            type: 'card',
            count: 10,
            hard: 2,
            text: '满内力情况下,累计服用益气丹10次.',
            extra: '没说,就是零卡.',
        },
        清君侧: {
            type: 'game',
            hard: 3,
            text: '身为内奸/细作,亲手击杀两名忠臣/护卫并获胜.',
            extra: '不像我,我只会心疼盟主~',
        },
        父慈子孝: {
            type: 'character',
            hard: 2,
            text: '使用以下角色或装备了【储君】牌的角色击杀乾谦德:钱渊龙、乾渊跃&白绫、乾渊图、乾渊苏、乾渊棋、乾兰英&丹心、乾渊禄.',
            extra: '伏惟兴朝以孝治天下.',
        },
        以理服人: {
            type: 'game',
            hard: 3,
            text: '造成一次伤害,击杀一名满血角色.',
            extra: '我在跟你讲道理你有没有听到？',
        },
        最好的防守: {
            type: 'game',
            hard: 5,
            text: '在自己的第一回合内,击杀至少四名角色并获得游戏胜利,且本局游戏中未受到任何伤害,未流失过任何体力.',
            extra: '只要杀光敌人,就没有任何人伤的了我.',
        },
        功成万骨枯: {
            type: 'game',
            hard: 2,
            text: '胜利时,没有任何队友和敌人存活.',
            extra: '谁道沧江总无事,近来长共血争流.',
        },
        大兴海皇: {
            type: 'character',
            hard: 3,
            text: '使用乾渊苏,发动【流连】获得七名女性角色的牌.',
            extra: '万花丛中过,叶叶都沾身.',
        },
        江湖谱: {
            type: 'game',
            hard: 5,
            text: '获得一百名角色的首胜成就.',
            hasAchievement() {
                return (
                    game.xwChengjiu.achievementList(function (cjname) {
                        return game.xwChengjiu.hasType(cjname, 'firstWin') && game.xwChengjiu.hasAchievement(cjname);
                    }).length >= 100
                );
            },
            progress() {
                const oarr = [];
                let str =
                    '已完成' +
                    game.xwChengjiu.achievementList(function (cjname) {
                        const ret = game.xwChengjiu.hasType(cjname, 'firstWin') && game.xwChengjiu.hasAchievement(cjname);
                        if (ret && lib.xwjhAch[cjname] && lib.xwjhAch[cjname].relateName) {
                            oarr.push(lib.xwjhAch[cjname].relateName);
                        }
                        return ret;
                    }).length +
                    '名角色的首胜成就';
                if (oarr.length >= 100) {
                    return ['已完成'];
                }
                oarr.sort();
                if (oarr.length) {
                    str += ",分别为:<font color='black'>";
                    for (const name of oarr) {
                        str += name;
                        str += '、';
                    }
                    str = str.slice(0, str.length - 1);
                    str = str + '</font>';
                }
                str = str + '.';
                return [str];
            },
            extra: '百人百相,正邪无论,共谱江湖曲.',
        },
        先攻传奇: {
            text: '达成以下条件(不懂的地方请阅读角色故事).',
            extra: '剑如漆,发如雪,墨心如铁.',
            hasAchievement() {
                if (game.xwChengjiu.score() < 100) {
                    return false;
                }
                if (!game.xwChengjiu.hasAchievement('非命绽刀')) {
                    return false;
                }
                if (!game.xwChengjiu.hasAchievement('玲珑慧心')) {
                    return false;
                }
                if (!game.xwChengjiu.hasAchievement('丹心墨道')) {
                    return false;
                }
                if (!game.xwChengjiu.hasAchievement('巧器天成')) {
                    return false;
                }
                if (lib.config.xwWinHistory) {
                    if (lib.config.xwWinHistory.xwjh_chenrunyu) {
                        const count = lib.config.xwWinHistory.xwjh_chenrunyu;
                        if (count >= 10) {
                            return true;
                        }
                    }
                }
                return false;
            },
            progress() {
                const ret = [];
                let str = '成就积分达到100点';
                if (game.xwChengjiu.score() >= 100) {
                    str += '(已完成)';
                }
                ret.push(str);
                str = '使用【天机枪弩车的制造者】胜利十场';
                let set = false;
                if (lib.config.xwWinHistory) {
                    if (lib.config.xwWinHistory.xwjh_chenrunyu) {
                        const count = lib.config.xwWinHistory.xwjh_chenrunyu;
                        if (count >= 10) {
                            str += '(已完成)';
                            set = true;
                        } else {
                            str += '(' + count + '/10)';
                            set = true;
                        }
                    }
                }
                if (!set) {
                    str += '(0/10)';
                }
                ret.push(str);
                str = '获得【望天阁锦衣青年】及其SP武将的胜利成就';
                if (game.xwChengjiu.hasAchievement('巧器天成') && game.xwChengjiu.hasAchievement('丹心墨道')) {
                    str += '(已完成)';
                }
                ret.push(str);
                str = '获得【望天阁从苗疆悟刀归来的弟子】的胜利成就';
                if (game.xwChengjiu.hasAchievement('非命绽刀')) {
                    str += '(已完成)';
                }
                ret.push(str);
                str = '获得【望天阁小师妹】的胜利成就';
                if (game.xwChengjiu.hasAchievement('玲珑慧心')) {
                    str += '(已完成)';
                }
                ret.push(str);
                return ret;
            },
            hard: 5,
            type: ['zongshi'],
            reward: '宗师武将·施行',
            rewardGained() {
                return lib.config.xw_zong_shixing_unlock;
            },
            gainReward() {
                game.saveConfig('xw_zong_shixing_unlock', true);
                alert('恭喜您!宗师武将施行已经解锁!重启游戏后生效.');
            },
        },
        执愿复光: {
            text: '使用朱针石,发动【执愿】,额外摸牌数达到六.',
            extra: '光儿……都怪爹让你等的太久了……',
            hard: 4,
            type: ['character'],
        },
        '♣️️️三弄': {
            type: 'card',
            hard: 4,
            text: '连续使用三次实体牌为【梅开二度】的牌.',
            extra: '♣️️️一弄断人肠,♣️️️二弄费思量,♣️️️三弄风波起,云烟深处水茫茫.',
        },
        仁者无敌: {
            type: 'game',
            hard: 2,
            text: '身为盟主,没有击杀过任何角色且取胜.',
            extra: '你发现了鸳鸯刀无敌于天下的秘密.',
        },
        六月飞雪: {
            type: 'game',
            hard: 2,
            text: '身为侠士/护卫/忠臣,被盟主/主公击杀.',
            extra: '不是我冤,是盟主老爷冤!',
        },
        刮痧师傅: {
            type: 'game',
            hard: 2,
            count: 20,
            text: '造成的伤害被取消或减少到零二十次.',
            extra: '或许,你这样这应该叫挠痒.',
        },
        株连九族: {
            type: 'character',
            hard: 5,
            text: '使用许念慈,触发祸殃,用一张牌击杀四名及以上目标角色(此牌不得为倾巢而出或谁与争锋,不计算因为横置状态击杀的角色).',
            extra: '看看,这就是跟咱家作对的下场!',
        },
        梦觅长生: {
            type: 'character',
            hard: 4,
            text: '使用乾渊苏,一局中发动【故梦】复制并获得两次长生丹.',
            extra: '后世有小说家言,这位曾顶撞皇帝的羽阳王并未英年早逝,而是寻仙问道修成正果.因救武帝有功,得列仙班,号羽阳仙人.',
        },
        火药轰鸣: {
            text: '使用宇文星城,发动爆引击杀一名角色.',
            hard: 2,
            extra: '机关术,炸!',
            type: ['character'],
        },
        缉盗神捕: {
            text: '使用【梏手桎足】,将鬼九横置.',
            hard: 4,
            extra: '能抓住盗圣的,可不是一般人.',
            type: ['character'],
        },
        辣手摧花: {
            text: '使用血刀少主,发动【恶胁】在一局内击杀至少两名女性角色.',
            extra: '本少主今日要大开杀戒!',
            hard: 2,
            reward: '血刀少主成就限定皮肤碎片(1/2)',
            rewardGained() {
                return lib.config.xwChengjiu_suipian_辣手摧花;
            },
            gainReward() {
                game.saveConfig('xwChengjiu_suipian_辣手摧花', true);
                alert('获取成功.');
            },
            type: ['character'],
        },
        枪弩凶威: {
            text: '使用陈润玉,在一局中使用【天机枪弩车】转化的牌击杀两名角色.',
            extra: '枪弩之下,众生平等.',
            hard: 2,
            reward: '陈润玉成就限定皮肤碎片(1/2)',
            rewardGained() {
                return lib.config.xwChengjiu_suipian_枪弩凶威;
            },
            gainReward() {
                game.saveConfig('xwChengjiu_suipian_枪弩凶威', true);
                alert('获取成功.');
            },
            type: ['character'],
        },
        以杀止战: {
            hard: 3,
            text: '发动【先攻】,弃置对方所有手牌.',
            extra: '剑名,先攻!',
            type: ['equip'],
        },
        嫦娥奔月: {
            hard: 4,
            text: '一局游戏内,发动【仙宫望月】三次.',
            extra: '可上九天揽月,可下五洋捉鳖,谈笑凯歌还.世上无难事,只要肯登攀.',
            type: ['card'],
        },
        自我了断: {
            hard: 3,
            text: '被自己击杀.',
            extra: '累了,重开吧.',
            type: 'game',
        },
        天下无双: {
            hard: 4,
            count: 120,
            text: '累计击杀一百二十名角色(需为伤害来源).',
            extra: '无数宵小命丧你手,从此再无人敢轻易招惹你.不知为何,你却觉得有些孤独.',
        },
        大杀四方: {
            hard: 3,
            count: 40,
            text: '累计击杀四十名角色(需为伤害来源).',
            extra: '提剑跨骑挥鬼雨,白骨如山鸟惊飞.',
        },
        牛刀小试: {
            hard: 2,
            count: 10,
            text: '累计击杀十名角色(需为伤害来源).',
            extra: '对于充斥着血腥和杀戮的江湖而言,这不过是个开始.',
        },
        孔雀开屏: {
            hard: 4,
            text: '使用孔雀翎亮出五张♣️️️牌且击杀一名角色.',
            extra: '在终结敌手前,让他最后再看一眼这美丽的色彩.',
            type: 'card',
        },
        一代宗师: {
            text: '使用正势力武将达成七杀.',
            hard: 5,
            extra: '殆养吐冠映长河,凛凛银锋诛群魔.',
        },
        一统江湖: {
            text: '使用邪势力武将达成七杀.',
            hard: 5,
            extra: '不问世道心不古,肆意逍遥千冢枯.',
        },
        万邦来贺: {
            text: '使用朝势力武将 达成七杀.',
            hard: 5,
            extra: '虎踞江山今而立,万里河山怀玺央.',
        },
        天地逍遥: {
            text: '使用野势力武将达成七杀.',
            hard: 5,
            extra: '傲峰天峦我独坐,梦里江湖忆愁肠.',
        },
        内力精纯: {
            text: '一局中,内力上限达到六.',
            hard: 2,
            extra: '你感到丹田似有大海翻腾.',
        },
        内力深厚: {
            text: '一局中,内力上限达到八.',
            hard: 3,
            extra: '你的内功已臻化境.',
        },
        内力磅礴: {
            text: '一局中,内力上限达到十.',
            hard: 4,
            extra: '江湖之上,再也无人敢与你比拼内力,因为那是自寻死路.',
        },
        望天异动: {
            text: '不是宇文星城的其他望天阁成员装备了先攻.',
            extra: '墨道分裂,祸起萧墙.',
            hard: 3,
        },
        识时务者: {
            text: '发动【千金裘】防止伤害十次.',
            extra: '孔曰成仁,孟曰取义,全都忘了,只记得:识时务者为俊杰.',
            count: 10,
            hard: 3,
            type: 'card',
        },
        气血畅通: {
            text: '在有玉露效果时服用了活血丹,或在有活血效果时服用了玉露丹.',
            extra: '你感到回复能力大大增强,受点小伤根本不是个事儿.',
            hard: 3,
            type: 'card',
        },
        万寿无疆: {
            text: '被万寿丹扣减了内力上限.',
            hard: 2,
            extra: '紫阴门滋补圣品,一颗就见效.',
            type: 'card',
        },
        朝廷钦犯: {
            text: '被使用海捕文书后,海捕标记达到10个.',
            hard: 3,
            extra: '对于那些江洋大盗来说,这是一种荣耀.',
            type: 'card',
        },
        官民同心: {
            count: 50,
            text: '累计使用50张海捕文书并生效.',
            hard: 4,
            extra: '你对大兴的社会安定作出了贡献.',
            type: 'card',
        },
        巧舌如簧: {
            text: '在雄辩群英中,与至少四名角色拼点并全部取胜.',
            hard: 3,
            extra: '三寸不烂之舌说的就是你吧.',
            type: 'card',
        },
        舍己救人: {
            text: '因为【赴汤蹈火】的效果,代替其他角色承受一次至少三点的伤害.',
            hard: 3,
            extra: '你这辈子,有没有为一个人拼过命.',
            type: 'card',
        },
        一泻千里: {
            text: '对内力上限至少为5的角色使用万寿丹,成功扣减其内力上限.',
            hard: 3,
            extra: '这吃丹,多是一件美事啊!',
            type: 'card',
        },
        哑口无言: {
            text: '在雄辩群英中,与至少四名角色拼点并全部落败.',
            hard: 3,
            extra: '有理走遍天下,无理寸步难行.',
            type: 'card',
        },
        打工人: {
            text: '作为盟主,被细作夺取胜利果实.',
            hard: 3,
            extra: '苦恨年年压金线,为他人作嫁衣裳.',
            type: 'game',
        },
        绝命一击: {
            text: '使用陆鹏进,在濒死状态下通过血滴子击杀角色.',
            hard: 2,
            type: 'character',
            extra: '想拿我的性命？没那么容易!',
        },
        背黑锅: {
            text: '被使用祸水东引,转移了至少六个海捕标记.',
            hard: 4,
            extra: '捕快只管抓人,哪管你委屈不委屈.',
            type: 'card',
        },
        甩黑锅: {
            text: '使用祸水东引,转移了至少六个海捕标记.',
            hard: 4,
            extra: '官爷,都是他干的,和我一点关系也没有!',
            type: 'card',
        },
        夜路难行: {
            count: 10,
            text: '狭路相逢累计失败十次.',
            extra: '看来你不明白江湖的险恶.',
            hard: 2,
            type: 'card',
        },
        以爪制爪: {
            text: '用飞虎爪击落飞虎爪.',
            extra: '不要在我面前耍花招.',
            hard: 2,
            type: 'card',
        },
        鸡毛暗器: {
            text: '使用孔雀翎,亮出的♣️️️牌少于一张.',
            hard: 2,
            extra: '如此厉害的神器,被你打出了废铁的效果……',
            type: 'card',
        },
        高山流水: {
            text: '发动离殇曲,令自己或队友获得四张牌.',
            extra: '东武望余杭,云海天涯两渺茫.何日功成名遂了,还乡,醉笑陪公三万场.不用诉离觞,痛饮从来别有肠.今夜送归灯火冷,河塘,堕泪羊公却姓杨.—— 苏轼',
            hard: 4,
            type: 'miji',
        },
        免死金牌: {
            text: '装备【丹书铁券】,体力值降至-4.',
            extra: '不要过于相信皇帝的恩赐,因为它随时可能会被收回.',
            hard: 3,
            type: 'equip',
        },
        剑斩丹书: {
            text: '发动【尚方宝剑】,弃置对方的【丹书铁券】.',
            extra: '尔等奸佞居功自傲,坏我大兴王法,当有此报!',
            hard: 5,
            type: 'equip',
        },
        金雁横空: {
            text: '使用蒋素素,发动雁横击杀一名角色.',
            hard: 2,
            extra: '门外苍松迟迎客,苍涧金雁横云空.',
            type: 'character',
        },
        真的莽夫: {
            hard: 4,
            text: '使用乾渊图,发动獒莽,将五张牌当决斗,令自己和目标各摸五张牌.',
            extra: '二皇子殿下……你这是……上头了？',
            type: 'character',
        },
        北斗七星: {
            text: '使用狄林,一回合发动七次<七星>.',
            extra: '漫天北斗,倒悬长河!',
            hard: 2,
            type: 'character',
        },
        靖忠侯: {
            text: '发动【忠良驹】交出至少五张牌.',
            extra: '苟利国家生死以,岂因祸福避趋之.<br>——林则徐',
            hard: 3,
            type: 'card',
        },
        商业帝国: {
            text: '使用李傅颖,让所有人都成为天下商会的会众.',
            extra: '上承千秋业,广纳八方财.',
            hard: 3,
            type: 'character',
        },
        一起发财: {
            text: '使用段云,令所有除自己外的角色同时拥有生财标记.',
            hard: 4,
            extra: '收了我白无常的好处,可是要付出代价的!',
            type: 'character',
        },
        血债血偿: {
            hard: 2,
            text: '使用唐海山,发动【缉凶】,击杀一名角色.',
            extra: '善恶终有报,天道有轮回,不信抬头看,苍天饶过谁？',
            type: 'character',
        },
        乾坤一掷: {
            hard: 2,
            text: '使用金钱镖,击杀一名角色.',
            extra: '为什么要花钱买杀手？直接拿钱砸死目标不好吗？',
            type: 'card',
        },
        觿不见血: {
            extra: '你的死活,与我何干？',
            replaceName: '泣不见血',
            hard: 2,
            text: '发动缘泣觿,击杀一名角色.',
            type: 'equip',
        },
        胜之不武: {
            text: '在一局身份局游戏中,开启过控制台作弊,且最终取得胜利.',
            hard: 5,
            extra: '想不到阁下的金钟罩铁面皮神功竟然修炼到如此境界？在下实在佩服!',
        },
        败的丢人: {
            text: '在一局身份局游戏中,开启过控制台作弊,且最终失败.',
            hard: 3,
            extra: '好家伙,开挂都能输？',
        },
        公益天使: {
            text: '成就积分达到100并截图上传群相册.',
            hasAchievement() {
                return game.xwChengjiu.score() >= 100;
            },
            progress() {
                if (game.xwChengjiu.score() >= 100) {
                    return [];
                }
                return '完成进度:' + game.xwChengjiu.score() + '/100';
            },
            hard: 5,
            extra: '感谢您解锁了这个成就,工作室会根据您的成就为山区贫困儿童进行捐款,侠之大者,为国为民!玄武江湖工作室与您共同守护孩子们的笑脸.',
        },
        剑庄大阵: {
            text: '使用叶观澜,发动【剑阵】,有四人响应成功.',
            hard: 4,
            extra: '藏剑山庄果然名不虚传.',
            type: 'character',
        },
        斩草除根: {
            text: '使用乾渊跃白绫,发动【谋害】,击杀一名角色.',
            hard: 2,
            extra: '殿下放心,此事定不会再有人知晓.',
            type: 'character',
        },
        继剑承侠: {
            text: '使用孟独行,对沈移发动【授意】.',
            hard: 3,
            extra: '你这小家伙,倒是挺对老夫的胃口,哈哈哈哈!',
            type: 'character',
        },
        拳怕少壮: {
            count: 10,
            text: '击杀紫阴老祖十次.',
            hard: 3,
            extra: '你们这些年轻人,不讲武德!来,骗!来,偷袭!我两百多岁的老同志!这好吗？这不好.我劝,这位年轻人,好自为之,好好反思,以后不要再犯这样的聪明,小聪明啊!',
            type: 'character',
        },
        蝼蚁之怒: {
            text: '使用荀二荀五获得七杀.',
            hard: 5,
            extra: '有你俩在,还要那少爷干啥？',
        },
        易筋洗髓: {
            text: '在一局中,被使用洗髓丹洗去所学功法两次.',
            hard: 3,
            extra: '少室山林,禅宗祖,千年古刹.寻普渡,颂婆罗密,叩拜菩萨.初祖达摩修顿悟,六世慧能传秘法.心印心,自见性成佛,源华夏.阿罗汉,众生化,狮子吼,降凶煞.大乘如来咒,骨铭心挂.种善因求真去恶,尝人生酸甜苦辣.佛性起,把恩怨嗔痴,皆放下.',
            type: 'card',
        },
        逆墨而兴: {
            text: '使用陈润玉侠士,在盟主为乾谦隆的情况下获得胜利.',
            hard: 2,
            extra: '燕王大业已成,我墨家当为诸子百家之首!',
            type: 'character',
            reward: '陈润玉成就限定皮肤碎片(1/2)',
            rewardGained() {
                return lib.config.xwChengjiu_suipian_逆墨而兴;
            },
            gainReward() {
                game.saveConfig('xwChengjiu_suipian_逆墨而兴', true);
                alert('获取成功.');
            },
        },
        虎刃哮天: {
            text: '使用罗天发动【机刃】,在一局中击杀两名角色.',
            hard: 3,
            extra: '尝尝我虎翼刀法的厉害!',
            type: 'character',
        },
        玲珑机巧: {
            text: '使用陈风铃,将五张【杀】放入玲珑机箭盒.',
            hard: 3,
            extra: '小心点,这可不是玩具哦!',
            type: 'character',
        },
        渔火长天: {
            text: '使用血刀少主作为盟主,在嫁衣为侠士的情况下获得胜利.',
            hard: 2,
            extra: '倘若渔岛的那一切都没有发生,或许那个恶贯满盈的北域魔头,正安然地在海边撒网吧.',
            type: 'character',
            reward: '血刀少主成就限定皮肤碎片(1/2)',
            rewardGained() {
                return lib.config.xwChengjiu_suipian_渔火长天;
            },
            gainReward() {
                game.saveConfig('xwChengjiu_suipian_渔火长天', true);
                alert('获取成功.');
            },
        },
        墨胆蕙心: {
            text: '使用宇文星城或SP宇文星城作为盟主,在苏巧馨为侠士的情况下获得胜利.',
            hard: 2,
            extra: '望天窥世,捭阖承星.',
            type: 'character',
        },
        一拜天地: {
            text: '在一局游戏中,使用水书对暮夜郎君发动冥烛.',
            hard: 3,
            extra: '不行!说的是一辈子!差一年,一个月,一天,一个时辰,都不算一辈子!',
            type: 'character',
        },
        夜暮密云: {
            text: '在一局游戏中,使用暮夜郎君发动【策引】成功标记7个人,并获得游戏胜利.',
            hard: 5,
            extra: '汝等身陷囹圄,尚不自知,还真是一帮可悲的蝼蚁.',
            type: 'character',
        },
        浑水摸鱼: {
            text: '在一局游戏中,未造成任何伤害,获得胜利.',
            hard: 2,
            extra: '据传,在这世间,有一种鱼,不知其名,凡夫俗子只要轻轻的摸它一下,便会心旷神怡,如登仙境.',
        },
        徐福秘方: {
            text: '使用萧康,发动【试丹】,召出【长生丹】.',
            hard: 3,
            extra: '客官福缘深厚,此丹恐是在下此生也再难炼得了.',
            type: 'character',
        },
        丹炉着魔: {
            text: '使用萧康,发动【试丹】,召出【万寿丹】.',
            hard: 3,
            extra: '此丹……怎么看上去有点不对劲？到底放错了什么？',
            type: 'character',
        },
        千载万岁: {
            text: '使用钱渊龙,在觉醒后被使用【长生丹】.',
            hard: 4,
            extra: '帝王皆欲万岁……又谁能真正……千载万岁……',
            type: 'character',
        },
        关王显圣: {
            text: '发动关王刀,成功击杀一名角色.',
            hard: 2,
            extra: '观尔乃插标卖首!',
            type: 'equip',
        },
        不自量力: {
            text: '在一局游戏中使用【虽千万人吾往矣】,在结算期间死亡.',
            hard: 2,
            extra: '没有主角命,一身主角病.',
            type: 'card',
        },
        猫儿吞雀: {
            text: '使用乌圆儿,在一局游戏中发动【兆丧】导致四名角色死亡.',
            hard: 5,
            extra: '小心点,小猫咪的牙齿,可是有毒的哦.',
            type: 'character',
        },
        真小人: {
            count: 20,
            text: '使用闪防止酒杀累积20次.',
            hard: 3,
            extra: '君子坦荡荡,小人长戚戚.',
        },
        轻功大师: {
            count: 50,
            text: '累计使用移50次.',
            hard: 3,
            extra: '三醉岳阳人不识,朗吟飞过洞庭湖.',
            type: 'card',
        },
        将进酒: {
            text: '在装备了五花马,千金裘时,发动了酒葫芦.',
            hard: 3,
            extra: '五花马,千金裘,呼儿将出换美酒.',
            type: 'equip',
        },
        巾帼神威: {
            text: '使用白灵,对一名角色发动慑威,放置了至少三张牌.',
            hard: 3,
            extra: '兴史载,白灵提枪立于城墙之上,燕匪闻其名而丧胆,莫敢前.',
            type: 'character',
        },
        废而不杀: {
            text: '使用范尚节,发动【天机墨莲匣】废除了对方所有的装备栏(对罗弃发动不能获得).',
            hard: 4,
            extra: '据宇文星城回忆,范叔叔有时心慈手软过头了,没意识到可能把来敌杀了更痛快……',
            relationCharacter: 'xwjh_fanshangjie',
            type: 'character',
        },
        冒大不韪: {
            text: '使用姬鸿烈,发动【疯嚣】摸七张牌.',
            hard: 3,
            extra: '为了她,你愿意与天下人为敌.可是你的敌人,究竟是天下之人,还是天？',
            type: 'character',
        },
        贪翳障目: {
            text: '使用乾渊棋,被【篡谋】指定的角色在此状态下杀害.',
            hard: 2,
            extra: '醒醒吧,就你这样,人家凭啥让你当皇帝？自己当不舒坦吗？',
            type: 'character',
        },
        跌落马下: {
            text: '触发【玉骨】,受到伤害而死亡.',
            hard: 2,
            extra: '一代英雄豪杰,就这么从马上掉下来摔死了,说出去都觉得丢人.',
            type: 'equip',
        },
        邪刀血债: {
            text: '使用血刀少主,在一局中击杀七名女性角色并获得胜利.',
            hard: 5,
            extra: '血刀门的存在,始终是江湖上良家妇女挥之不去的梦魇.',
            type: 'character',
        },
        索命夺魂: {
            text: '使用陆寿,一局内发动【索命】击杀四名角色.',
            hard: 5,
            extra: '你堪称阎罗殿的劳模,在把人送去阴间这件事上如此敬业.',
            type: 'character',
        },
        托管大仙: {
            text: '在托管状态下赢得游戏胜利.',
            hard: 3,
            extra: '望天阁的一项娱乐活动是让一群机傀互相打架,据说宇文阁主七岁的时候特别喜欢玩.',
        },
        拜个假堂: {
            text: '使用水书,发动【拜堂】,预计造成的伤害为零.',
            hard: 2,
            extra: '废物!你们这帮红线使就是这么给圣殿效力的？',
            type: 'character',
        },
        喋血红娘: {
            text: '使用水书,发动【拜堂】,预计造成的伤害至少为五.',
            hard: 4,
            extra: '碍我圣殿大事者,死!',
            type: 'character',
        },
        赌博害命: {
            count: 10,
            text: '使用花尽欢,在【命注】状态下发动【嗜赌】失败十次.',
            hard: 3,
            extra: '十赌九输,悔不当初!',
            type: 'character',
        },
        只劫不济: {
            count: 30,
            text: '使用【劫富济贫】,累计有三十次没有交出获得的牌.',
            hard: 3,
            extra: '说好的劫富济贫呢？',
            type: 'card',
        },
        虽死犹荣: {
            count: 10,
            text: '阵亡后获得胜利累计十次.',
            hard: 4,
            extra: '人生自古谁无死,留取丹心照汗青.',
        },
    };
    if (!lib.config.xwChengjiuStorage) {
        lib.config.xwChengjiuStorage = {
            count: {},
            got: {},
            score: {},
        };
        game.saveConfig('xwChengjiuStorage', lib.config.xwChengjiuStorage);
    }
    game.xwChengjiu = {
        init(QQQ) {
            if (this.inited) {
                return;
            }
            for (var name in QQQ.character) {
                if (!QQQ.characterTitle[name]) {
                    continue;
                }
                if (!QQQ.translate[name]) {
                    continue;
                }
                if (name == 'xwjh_jixiangwu_xiaoqian') {
                    continue;
                }
                (function (name) {
                    const extraFunc = function () {
                        return lib.xwWinSay[name];
                    };
                    const info = {
                        text: '使用' + QQQ.translate[name] + '获得一场胜利.',
                        relateName: QQQ.translate[name],
                        hard: 1,
                        extra: extraFunc,
                        type: ['character', 'firstWin'],
                    };
                    lib.xwjhAch[QQQ.characterTitle[name]] = info;
                })(name);
            }
            if (!lib.config.newAchInXwjh) {
                if (lib.config.xwAchievement) {
                    for (var name in lib.xwjhAch) {
                        const info = this.info(name);
                        let tname = name;
                        if (info.count) {
                            tname = 'count_' + info.count + '_' + name;
                        }
                        if (lib.config.xwAchievement['xwache_' + tname]) {
                            this.gainAchievementSilent(name, lib.config.xwAchievement['xwache_' + tname]);
                        }
                    }
                }
                game.saveConfig('newAchInXwjh', true);
            }
            this.inited = true;
        },
        clearAll() {
            lib.config.xwChengjiuStorage = {
                count: {},
                got: {},
                score: {},
            };
            game.saveConfig('xwChengjiuStorage', lib.config.xwChengjiuStorage);
            game.saveConfig('xwjh_chengjiuScore', 0);
        },
        numberOfAchievements() {
            return Object.keys(lib.xwjhAch).length;
        },
        numberOfGainedAchievements() {
            let count = 0;
            for (const name in lib.xwjhAch) {
                if (this.hasAchievement(name)) {
                    count++;
                }
            }
            return count;
        },
        achievementList(filter, sort) {
            if (!filter) {
                filter = function () {
                    return true;
                };
            }
            if (!sort) {
                sort = function (a, b) {
                    return game.xwChengjiu.info(a).hard - game.xwChengjiu.info(b).hard;
                };
            }
            const ret = [];
            for (const name in lib.xwjhAch) {
                if (filter(name)) {
                    ret.push(name);
                }
            }
            ret.sort(sort);
            return ret;
        },
        score() {
            if (!lib.config.xwjh_chengjiuScore) {
                return 0;
            }
            return lib.config.xwjh_chengjiuScore;
        },
        addScore(num) {
            game.saveConfig('xwjh_chengjiuScore', this.score() + num);
        },
        addGot(name, info) {
            if (!info) {
                info = this.info(name);
            }
            if (!info) {
                return;
            }
            if (lib.config.xwChengjiuStorage.got[name]) {
                return;
            }
            lib.config.xwChengjiuStorage.got[name] = true;
            this.saveConfig();
        },
        count(name) {
            if (lib.config.xwChengjiuStorage.count[name]) {
                return lib.config.xwChengjiuStorage.count[name];
            }
            return 0;
        },
        addCount(name, num, info) {
            if (!info) {
                info = this.info(name);
            }
            if (!num) {
                num = 1;
            }
            if (!info) {
                return false;
            }
            if (info.count === undefined) {
                return true;
            }
            if (!lib.config.xwChengjiuStorage.count[name]) {
                lib.config.xwChengjiuStorage.count[name] = 0;
            }
            lib.config.xwChengjiuStorage.count[name] += num;
            this.saveConfig();
            if (this.currentCount(name) >= info.count) {
                return true;
            }
            return false;
        },
        saveConfig() {
            game.saveConfig('xwChengjiuStorage', lib.config.xwChengjiuStorage);
        },
        tempGainAchievement(name, num, player) {
            if (player && player != game.me) {
                return;
            }
            if (this.hasAchievement(name)) {
                return;
            }
            if (!num) {
                num = 1;
            }
            if (!_status.xwTempGainAchievement) {
                _status.xwTempGainAchievement = {};
            }
            const info = this.info(name);
            if (!info) {
                return;
            }
            if (info.count === undefined) {
                if (_status.xwTempGainAchievement[name]) {
                    return;
                }
                _status.xwTempGainAchievement[name] = 1;
                window.xwShowBanner('达成成就:' + (info.replaceName ? info.replaceName : name));
            } else {
                let count = _status.xwTempGainAchievement[name];
                if (count && count + this.currentCount(name) >= info.count) {
                    return;
                }
                if (!count) {
                    count = 0;
                }
                _status.xwTempGainAchievement[name] = count + num;
                if (_status.xwTempGainAchievement[name] >= info.count) {
                    window.xwShowBanner('达成成就:' + (info.replaceName ? info.replaceName : name));
                }
            }
        },
        checkAchievementsInTemp() {
            if (_status.xwTempGainAchievement) {
                for (const name in _status.xwTempGainAchievement) {
                    const info = this.info(name);
                    if (!info) {
                        continue;
                    }
                    this.gainAchievementSilent(name, _status.xwTempGainAchievement[name]);
                }
            }
        },
        gainAchievementDirect(name, player) {
            if (player && player != game.me) {
                return;
            }
            const info = this.info(name);
            if (!info) {
                return;
            }
            if (this.hasAchievement(name)) {
                return;
            }
            this.addGot(name, info);
        },
        gainAchievement(name, num, player) {
            if (player && player != game.me) {
                return;
            }
            const info = this.info(name);
            if (!info) {
                return;
            }
            if (this.hasAchievement(name)) {
                return;
            }
            if (!num) {
                num = 1;
            }
            if (this.addCount(name, num, info)) {
                this.addGot(name, info);
            }
            window.xwShowBanner('达成成就:' + (info.replaceName ? info.replaceName : name));
        },
        info(name) {
            return lib.xwjhAch[name];
        },
        currentCount(name) {
            const count = lib.config.xwChengjiuStorage.count[name];
            if (!count) {
                return 0;
            }
            return count;
        },
        achievementCode() {
            const str = JSON.stringify(lib.config.xwChengjiuStorage);
            return "game.xwChengjiu.importAchievementCode('" + btoa(str) + "')";
        },
        importAchievementCode(str) {
            try {
                const sto = JSON.parse(atob(str));
                game.saveConfig('xwChengjiuStorage', sto);
                alert('成就码输入成功,重启游戏中');
                game.reload();
            } catch (t) {
                alert('失败!你传递的成就码有误.');
            }
        },
        hasAchievement(name) {
            const info = this.info(name);
            if (info && info.hasAchievement) {
                return info.hasAchievement();
            }
            return lib.config.xwChengjiuStorage.got[name] == true;
        },
        rewardCanGain(name) {
            if (this.scoreRewardCanGain(name)) {
                return true;
            }
            const info = this.info(name);
            return info.reward && !info.rewardGained() && this.hasAchievement(name);
        },
        gainAllScore() {
            let sum = 0;
            for (const cj in lib.xwjhAch) {
                if (this.scoreRewardCanGain(cj)) {
                    const info = this.info(cj);
                    sum += info.hard;
                    lib.config.xwChengjiuStorage.score[cj] = true;
                }
            }
            game.xwChengjiu.saveConfig();
            this.addScore(sum);
            return sum;
        },
        clearScore() {
            lib.config.xwChengjiuStorage.score = {};
            game.xwChengjiu.saveConfig();
            game.saveConfig('xwjh_chengjiuScore', 0);
        },
        scoreRewardCanGain(name) {
            if (!this.hasAchievement(name)) {
                return false;
            }
            if (!lib.config.xwChengjiuStorage.score) {
                lib.config.xwChengjiuStorage.score = {};
                game.xwChengjiu.saveConfig();
            }
            if (lib.config.xwChengjiuStorage.score[name]) {
                return false;
            }
            return true;
        },
        gainScoreReward(name) {
            if (!lib.config.xwChengjiuStorage.score) {
                lib.config.xwChengjiuStorage.score = {};
                game.xwChengjiu.saveConfig();
            }
            const info = game.xwChengjiu.info(name);
            if (info.hard) {
                lib.config.xwChengjiuStorage.score[name] = true;
                game.xwChengjiu.saveConfig();
                window.xwShowBanner('获得成就积分' + info.hard + '点.');
                game.xwChengjiu.addScore(info.hard);
            }
        },
        gainAchievementSilent(name, num, player) {
            if (player && player != game.me) {
                return;
            }
            const info = this.info(name);
            if (!info) {
                return;
            }
            if (this.hasAchievement(name)) {
                return;
            }
            if (!num) {
                num = 1;
            }
            if (this.addCount(name, num, info)) {
                this.addGot(name, info);
            }
        },
        gainAllAchievement() {
            for (const name in lib.xwjhAch) {
                this.gainAchievementSilent(name, 999);
            }
        },
        booksPageTranslate: {
            stars: '星级',
        },
        sortBy: {
            reward(a, b) {
                const ar = game.xwChengjiu.rewardCanGain(a);
                const br = game.xwChengjiu.rewardCanGain(b);
                if (ar == br) {
                    return 0;
                }
                if (ar) {
                    return -1;
                }
                return 1;
            },
            name(a, b) {
                const rs = game.xwChengjiu.sortBy.reward(a, b);
                if (rs != 0) {
                    return rs;
                }
                const infoA = game.xwChengjiu.info(a);
                const infoB = game.xwChengjiu.info(b);
                return a < b ? -1 : 1;
            },
            starAsc(a, b) {
                const rs = game.xwChengjiu.sortBy.reward(a, b);
                if (rs != 0) {
                    return rs;
                }
                const infoA = game.xwChengjiu.info(a);
                const infoB = game.xwChengjiu.info(b);
                if (infoA.hard < infoB.hard) {
                    return -1;
                }
                if (infoA.hard > infoB.hard) {
                    return 1;
                }
                return game.xwChengjiu.sortBy.name(a, b);
            },
            starDesc(a, b) {
                var rs = game.xwChengjiu.sortBy.reward(a, b);
                if (rs != 0) {
                    return rs;
                }
                var rs = game.xwChengjiu.sortBy.reward(a, b);
                if (rs != 0) {
                    return rs;
                }
                const infoA = game.xwChengjiu.info(a);
                const infoB = game.xwChengjiu.info(b);
                if (infoA.hard < infoB.hard) {
                    return 1;
                }
                if (infoA.hard > infoB.hard) {
                    return -1;
                }
                return game.xwChengjiu.sortBy.name(a, b);
            },
        },
        booksPage: {
            stars: {
                main: {
                    order: 0,
                    filter(event, player) {
                        return true;
                    },
                },
                star1: {
                    name: '一星成就',
                    order: 1,
                    color: 'blue',
                    filter(name) {
                        return game.xwChengjiu.info(name).hard == 1;
                    },
                },
                star2: {
                    name: '二星成就',
                    order: 2,
                    color: 'green',
                    filter(name) {
                        return game.xwChengjiu.info(name).hard == 2;
                    },
                },
                star3: {
                    order: 3,
                    name: '三星成就',
                    color: 'purple',
                    filter(name) {
                        return game.xwChengjiu.info(name).hard == 3;
                    },
                },
                star4: {
                    order: 4,
                    name: '四星成就',
                    color: 'red',
                    filter(name) {
                        return game.xwChengjiu.info(name).hard == 4;
                    },
                },
                star5: {
                    order: 5,
                    name: '五星成就',
                    color: 'gold',
                    filter(name) {
                        return game.xwChengjiu.info(name).hard == 5;
                    },
                },
            },
            type: {
                main: {
                    order: 0,
                    filter(event, player) {
                        return true;
                    },
                },
                character: {
                    order: 1,
                    name: '角色成就',
                    color: 'red',
                    filter(name) {
                        return game.xwChengjiu.hasType(name, 'character');
                    },
                },
                card: {
                    order: 2,
                    name: '卡牌成就',
                    color: 'blue',
                    filter(name) {
                        return game.xwChengjiu.hasType(name, 'card');
                    },
                },
                equip: {
                    order: 3,
                    name: '装备成就',
                    color: 'green',
                    filter(name) {
                        return game.xwChengjiu.hasType(name, 'equip');
                    },
                },
                game: {
                    order: 4,
                    name: '游戏成就',
                    color: 'orange',
                    filter(name) {
                        return game.xwChengjiu.hasType(name, 'game');
                    },
                },
                zongshi: {
                    order: 5,
                    name: '宗师成就',
                    color: 'purple',
                    filter(name) {
                        return game.xwChengjiu.hasType(name, 'zongshi');
                    },
                },
            },
        },
        hasType(name, type) {
            const info = this.info(name);
            if (!info.type) {
                return type == 'game';
            }
            if (Array.isArray(info.type)) {
                return info.type.includes(type);
            }
            return info.type == type;
        },
        openAchievementView() {
            game.pause2();
            const chengjiuWindow = ui.create.div('.xwjh-xchengjiu');
            const chengjiu = ui.create.div('.xwjh-xchengjiu-bk', chengjiuWindow);
            const cover = ui.create.div('.xwjh-xchengjiu-bk-cover', chengjiu);
            const contentWrapper = ui.create.div('.xwjh-xchengjiu-text', chengjiu);
            const content = ui.create.div('.xwjh-xchengjiu-textinner', contentWrapper);
            const backarrow = ui.create.div('.xwjh-xchengjiu-return', chengjiu);
            const pageButtonBelow = ui.create.div('.xwjh-xchengjiu-bk-otherbook', chengjiu);
            const pageButtonBelowText = ui.create.div('.xwjh-xchengjiu-pagename-inner', ui.create.div('.xwjh-xchengjiu-pagename', pageButtonBelow));
            const pageButton = ui.create.div('.xwjh-xchengjiu-leftbelowbt', chengjiu);
            const leftButtonLight = ui.create.div('.xwjh-xchengjiu-bk-light', chengjiu);
            const leftButtonLightText = ui.create.div('.xwjh-xchengjiu-pagename-inner', ui.create.div('.xwjh-xchengjiu-pagename', leftButtonLight));
            leftButtonLight.hide();
            pageButtonBelow.hide();
            if (lib.config.xwChengjiuSize) {
                pageButtonBelowText.style.fontSize = lib.config.xwChengjiuSize + 'px';
                leftButtonLightText.style.fontSize = lib.config.xwChengjiuSize + 'px';
            }
            const rightButtonLight = ui.create.div('.xwjh-xchengjiu-bk-hideGot');
            rightButtonLight.hide();
            chengjiu.appendChild(rightButtonLight);
            const rightButton = ui.create.div('.xwjh-xchengjiu-righttext', chengjiu);
            rightButton.innerHTML = '隐藏已完成';
            const scoreTitle = ui.create.div('.xwjh-xchengjiu-score', chengjiu);
            const setSize = function () {
                const screenWidth = ui.window.offsetWidth;
                const screenHeight = ui.window.offsetHeight;
                const whr = 1.77778;
                let width;
                let height;
                if (screenWidth / whr > screenHeight) {
                    height = screenHeight;
                    width = height * whr;
                } else {
                    width = screenWidth;
                    height = screenWidth / whr;
                }
                chengjiu.style.height = Math.round(height) + 'px';
                chengjiu.style.width = Math.round(width) + 'px';
            };
            setSize();
            const resize = function () {
                setTimeout(setSize, 500);
            };
            lib.onresize.push(resize);
            backarrow.listen(function () {
                chengjiuWindow.delete();
                game.resume2();
                lib.onresize.remove(resize);
                game.playXwAudio('xwjh_voc_cjdianji', null, true);
            });
            lib.setScroll(content);
            document.body.appendChild(chengjiuWindow);
            let books;
            if (lib.config.xwChengjiuBookKind) {
                books = this.booksPage[lib.config.xwChengjiuBookKind];
            } else {
                books = this.booksPage.stars;
            }
            var state = {
                book: books,
                currentPageIndex: 0,
                gained: true,
                pages() {
                    const pageTitle = Object.keys(this.book);
                    const that = this;
                    pageTitle.sort(function (a, b) {
                        return that.book[a].order - that.book[b].order;
                    });
                    const ret = [];
                    for (const title of pageTitle) {
                        ret.push(this.book[title]);
                    }
                    return ret;
                },
                refreshScoreTitle() {
                    const filter = this.currentPageInfo().filter;
                    let sum = 0;
                    let got = 0;
                    for (const chengjiu in lib.xwjhAch) {
                        if (filter(chengjiu)) {
                            sum++;
                            if (game.xwChengjiu.hasAchievement(chengjiu)) {
                                got++;
                            }
                        }
                    }
                    scoreTitle.innerHTML = '成就积分:' + game.xwChengjiu.score() + '&nbsp;&nbsp;&nbsp;&nbsp;成就达成率:' + got + '/' + sum + '(' + ((got * 100) / sum).toFixed(2) + '%)';
                },
                page(index) {
                    const pageTitle = Object.keys(this.book);
                    const that = this;
                    pageTitle.sort(function (a, b) {
                        return that.book[a].order - that.book[b].order;
                    });
                    return pageTitle[index];
                },
                nextPage(after) {
                    let nextIndex = this.currentPageIndex + 1;
                    if (!after) {
                        nextIndex -= 2;
                    }
                    if (nextIndex >= this.pageCount()) {
                        nextIndex -= this.pageCount();
                    } else if (nextIndex < 0) {
                        nextIndex += this.pageCount();
                    }
                    return this.page(nextIndex);
                },
                pageCount() {
                    return Object.keys(this.book).length;
                },
                currentPageInfo() {
                    return this.pages()[this.currentPageIndex];
                },
                leftButton: {
                    isPressed: false,
                    animationPlaying: false,
                    computeAngle(x, y) {
                        const rect = chengjiu.getBoundingClientRect();
                        const baseX = rect.left;
                        const baseY = rect.top + rect.height;
                        if (x - baseX <= 0) {
                            x = baseX + 1;
                        }
                        if (y - baseY >= 0) {
                            y = baseY - 1;
                        }
                        if (x > baseX && y < baseY) {
                            const deltaX = Math.abs(x - baseX);
                            const deltaY = Math.abs(y - baseY);
                            return Math.atan(deltaY / deltaX);
                        } else {
                            return 0;
                        }
                    },
                    handleMouseLeave() {
                        if (this.animationPlaying) {
                            return;
                        }
                        if (this.isPressed) {
                            this.isPressed = false;
                            delete this.pressedX;
                            delete this.pressedY;
                            if (this.angle) {
                                const beginAngle = this.angle;
                                let endAngle;
                                if (this.angle >= (Math.PI / 180) * 2) {
                                    endAngle = Math.PI / 2;
                                } else if (this.angle <= (-Math.PI / 180) * 2) {
                                    endAngle = -Math.PI / 2;
                                } else {
                                    endAngle = 0;
                                }
                                this.animationPlaying = true;
                                if (endAngle != 0) {
                                    game.playXwAudio('xwjh_voc_cjfanye', null, true);
                                }
                                lib.xwjh_animation_helper(
                                    beginAngle,
                                    endAngle,
                                    300,
                                    10,
                                    function (val) {
                                        leftButtonLight.style.transform = 'rotate(' + val.toFixed(3) + 'rad)';
                                    },
                                    function () {
                                        if (endAngle != 0) {
                                            state.leftButton.handlePageChange(endAngle < 0);
                                        } else {
                                            const nextPage = state.page(state.currentPageIndex);
                                            if (nextPage == 'main') {
                                                pageButtonBelow.hide();
                                                pageButtonBelowText.style.color = 'black';
                                            } else {
                                                pageButtonBelowText.innerHTML = get.verticalStr(state.book[nextPage].name);
                                                let color = state.book[nextPage].color;
                                                if (!color) {
                                                    color = 'black';
                                                }
                                                pageButtonBelowText.style.color = color;
                                                pageButtonBelow.show();
                                            }
                                        }
                                        state.leftButton.animationPlaying = false;
                                        leftButtonLight.hide();
                                        leftButtonLight.style.transform = 'rotate(0rad)';
                                    },
                                );
                            } else {
                                leftButtonLight.hide();
                            }
                        }
                    },
                    handleMouseMove(event) {
                        if (state.leftButton.animationPlaying) {
                            return;
                        }
                        if (state.leftButton.isPressed) {
                            let x = event.clientX;
                            let y = event.clientY;
                            if (['android', 'ios'].includes(lib.device) && event.touches.length) {
                                x = event.touches[0].clientX;
                                y = event.touches[0].clientY;
                            }
                            const angle0 = state.leftButton.computeAngle(state.leftButton.pressedX, state.leftButton.pressedY);
                            const angle1 = state.leftButton.computeAngle(x, y);
                            const da = angle0 - angle1;
                            da.toFixed(3);
                            leftButtonLight.style.transform = 'rotate(' + da + 'rad)';
                            state.leftButton.angle = da;
                            const nextPage = state.nextPage(da < 0);
                            if (nextPage == 'main') {
                                pageButtonBelow.hide();
                                pageButtonBelowText.style.color = 'black';
                            } else {
                                pageButtonBelowText.innerHTML = get.verticalStr(state.book[nextPage].name);
                                let color = state.book[nextPage].color;
                                if (!color) {
                                    color = 'black';
                                }
                                pageButtonBelowText.style.color = color;
                                pageButtonBelow.show();
                            }
                        }
                    },
                    handleMouseDown(event) {
                        if (state.leftButton.animationPlaying) {
                            return;
                        }
                        if (state.page(state.currentPageIndex) == 'main') {
                            leftButtonLightText.innerHTML = '';
                            leftButtonLightText.style.color = 'black';
                            leftButtonLight.setBackgroundImage('extension/玄武江湖/xwjh_pic_xchengjiubk_cover_light1.png');
                        } else {
                            leftButtonLightText.innerHTML = get.verticalStr(state.pages()[state.currentPageIndex].name);
                            let color = state.pages()[state.currentPageIndex].color;
                            if (!color) {
                                color = 'black';
                            }
                            leftButtonLightText.style.color = color;
                            leftButtonLight.setBackgroundImage('extension/玄武江湖/xwjh_pic_xchengjiubk_cover_light2.png');
                        }
                        leftButtonLight.show();
                        state.leftButton.isPressed = true;
                        state.leftButton.pressedX = event.clientX;
                        state.leftButton.pressedY = event.clientY;
                        if (['android', 'ios'].includes(lib.device) && event.touches.length) {
                            state.leftButton.pressedX = event.touches[0].clientX;
                            state.leftButton.pressedY = event.touches[0].clientY;
                        }
                        delete state.leftButton.angle;
                    },
                    handlePageChange(after) {
                        state.changePage(after);
                    },
                },
                changePage(after) {
                    this.currentPageIndex += after ? 1 : -1;
                    if (this.currentPageIndex >= this.pageCount()) {
                        this.currentPageIndex -= this.pageCount();
                    }
                    if (this.currentPageIndex < 0) {
                        this.currentPageIndex += this.pageCount();
                    }
                    this.refreshPage();
                },
                refreshPage() {
                    const pageInfo = this.currentPageInfo();
                    this.refreshScoreTitle();
                    const filter = function (name) {
                        if (state.gained) {
                            const ret = pageInfo.filter(name);
                            return ret;
                        }
                        return pageInfo.filter(name) && !game.xwChengjiu.hasAchievement(name);
                    };
                    let sortBy;
                    if (lib.config.xwChengjiuSortBy) {
                        sortBy = game.xwChengjiu.sortBy[lib.config.xwChengjiuSortBy];
                    } else {
                        sortBy = game.xwChengjiu.sortBy.starDesc;
                    }
                    const ret = [];
                    for (var name in lib.xwjhAch) {
                        if (filter(name)) {
                            ret.push(name);
                        }
                    }
                    ret.sort(sortBy);
                    let text = '';
                    const rewardButtons = {};
                    let isBegin = true;
                    for (var name of ret) {
                        if (isBegin) {
                            isBegin = false;
                        } else {
                            text += "<br><span style='background-color: #DCDCDC;display:block;width:90%;height:1px;margin-left:5%;margin-right:5%;'></span><br>";
                        }
                        const info = game.xwChengjiu.info(name);
                        text += '<p';
                        text += ' style="';
                        const ach = game.xwChengjiu.hasAchievement(name);
                        if (ach) {
                            text += 'min-height:200px;';
                            text += "background-image:url('";
                            text += 'extension/玄武江湖/xwjh_pic_chengjiuok.png';
                            text += "');";
                            text += 'background-position:50% 0%;';
                            text += 'background-repeat:no-repeat;';
                            text += 'background-size:200px 200px;';
                        } else {
                            text += 'min-height:100px;';
                        }
                        text += '">';
                        text += '<span style="';
                        text += 'color:black;';
                        text += 'font-family:xw_longyinshoushu;';
                        text += 'font-size:55px;';
                        text += '">&nbsp;';
                        if (info.replaceName) {
                            text += info.replaceName;
                        } else {
                            text += name;
                        }
                        text += '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                        for (let i = 0; i < info.hard; i++) {
                            text += "<img src='extension/玄武江湖/xwjh_pic_chengjiustar.png' style='height:30px;'/>";
                            text += '&nbsp;&nbsp;&nbsp;&nbsp;';
                        }
                        text += "<br><br><span style='";
                        text += 'font-size:22px;';
                        text += "'>&nbsp;&nbsp;";
                        text += '<b>◆';
                        text += info.text;
                        text += '</b></span>';
                        if (!game.xwChengjiu.hasAchievement(name) || info.progress) {
                            let ppro = '';
                            if (info.progress) {
                                let progress = info.progress();
                                if (typeof progress == 'string') {
                                    progress = [progress];
                                }
                                for (const p of progress) {
                                    ppro += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◆';
                                    ppro += p;
                                    ppro += '<br>';
                                }
                            }
                            text += "<br><br><span style='";
                            text += 'color: #CD0000;font-size:20px;';
                            text += "'>";
                            if (ppro && ppro.length) {
                                text += ppro;
                            } else if (info.count) {
                                text += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◆';
                                text += '完成进度:';
                                text += game.xwChengjiu.count(name);
                                text += '/';
                                text += info.count;
                            }
                            text += '</span>';
                        }
                        text += '<br>';
                        if (info.reward) {
                            text += "<span style='color:purple;font-size:20px;'>";
                            text += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◆包含成就奖励:';
                            text += info.reward;
                            if (info.rewardGained) {
                                if (info.rewardGained()) {
                                    text += '(已领取).';
                                } else if (game.xwChengjiu.hasAchievement(name)) {
                                    text += ".<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img id='reward_" + name + "' src='extension/玄武江湖/xwjh_pic_lingqujiangli.png' style='height:25px;'/>";
                                    rewardButtons['reward_' + name] = name;
                                } else {
                                    text += '.';
                                }
                            } else {
                                text += '.';
                            }
                            text += '</span><br>';
                        } else if (game.xwChengjiu.scoreRewardCanGain(name)) {
                            text += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img id='reward_" + name + "' src='extension/玄武江湖/xwjh_pic_lingqujiangli.png' style='height:25px;'/>";
                            rewardButtons['reward_' + name] = name;
                        }
                        if (ach && info.extra) {
                            text += "<br><br><span style='";
                            text += 'display:block;font-size:20px;';
                            text += 'color:black;width:100%;text-align:right;';
                            text += 'font-family:xingkai;';
                            text += "'>";
                            text += '————';
                            if (typeof info.extra == 'function') {
                                text += info.extra().replaceAll('<br>', '');
                            } else {
                                text += info.extra.replaceAll('<br>', '');
                            }
                            text += '</span><br><br>';
                        }
                        text += '</p>';
                    }
                    text += '<br><br><br><br><br><br><br>';
                    content.innerHTML = text;
                    for (const id in rewardButtons) {
                        const img = document.getElementById(id);
                        (function (img, name) {
                            img.addEventListener('click', function () {
                                if (game.xwChengjiu.scoreRewardCanGain(name)) {
                                    game.xwChengjiu.gainScoreReward(name);
                                }
                                const info = game.xwChengjiu.info(name);
                                if (!(info.rewardGained && info.rewardGained()) && info.gainReward) {
                                    info.gainReward();
                                }
                                state.refreshPage();
                            });
                        })(img, rewardButtons[id]);
                    }
                },
            };
            rightButton.listen(function () {
                state.gained = !state.gained;
                game.playXwAudio('xwjh_voc_cjdianji', null, true);
                state.refreshPage();
                if (!state.gained) {
                    rightButtonLight.show();
                } else {
                    rightButtonLight.hide();
                }
            });
            if (lib.device == 'android' || lib.device == 'ios') {
                pageButton.addEventListener('touchstart', function (event) {
                    state.leftButton.handleMouseDown(event);
                });
                pageButton.addEventListener('touchend', function (event) {
                    state.leftButton.handleMouseLeave(event);
                });
                pageButton.addEventListener('touchcancel', function (event) {
                    state.leftButton.handleMouseLeave(event);
                });
                pageButton.addEventListener('touchmove', function (event) {
                    state.leftButton.handleMouseMove(event);
                });
            } else {
                pageButton.addEventListener('mousedown', function (event) {
                    state.leftButton.handleMouseDown(event);
                });
                pageButton.addEventListener('mouseup', function (event) {
                    state.leftButton.handleMouseLeave(event);
                });
                pageButton.addEventListener('mouseleave', function (event) {
                    state.leftButton.handleMouseLeave(event);
                });
                pageButton.addEventListener('mousemove', function (event) {
                    state.leftButton.handleMouseMove(event);
                });
            }
            state.refreshPage();
        },
    };
    if (!game.xwChengjiu.hasAchievement('♣️️️三弄')) {
        lib.skill._xwchengjiu_meihua = {
            forced: true,
            charlotte: true,
            lastDo: true,
            popup: false,
            trigger: {
                player: 'useCard2',
            },
            filter(event, player) {
                if (player != game.me) {
                    return false;
                }
                if (game.xwChengjiu.hasAchievement('♣️️️三弄')) {
                    return false;
                }
                if (event.cards && event.cards.length == 1 && event.cards[0].name == 'xwjh_card_meikaierdu') {
                    const evts = player.getHistory('useCard', function () {
                        return true;
                    });
                    let count = 0;

                    for (const i of evts) {
                        const evt2 = i;
                        if (evt2.cards && evt2.cards.length == 1 && evt2.cards[0].name == 'xwjh_card_meikaierdu') {
                            count++;
                        } else {
                            count = 0;
                        }
                        if (count >= 3) {
                            return true;
                        }
                    }
                }
                return false;
            },
            content() {
                game.xwChengjiu.tempGainAchievement('♣️️️三弄');
            },
        };
    }
    if (!game.xwChengjiu.hasAchievement('刮痧师傅')) {
        lib.skill._xwchengjiu_guasha = {
            forced: true,
            charlotte: true,
            lastDo: true,
            popup: false,
            trigger: {
                source: ['damageZero', 'damageCancelled'],
            },
            filter(event, player) {
                return player == game.me;
            },
            content() {
                'step 0';
                game.xwChengjiu.tempGainAchievement('刮痧师傅', 1);
            },
        };
    }
    lib.xwjh_characterChengjiuList = function (name) {
        let ret = '';
        const list = game.xwChengjiu.achievementList(function (cjn) {
            const info = game.xwChengjiu.info(cjn);
            if (info) {
                if (info.relationCharacter) {
                    if (Array.isArray(info.relationCharacter)) {
                        return info.relationCharacter.includes(name);
                    }
                    return info.relationCharacter == name;
                }
                if (info.text) {
                    return info.text.indexOf(get.translation(name)) >= 0;
                }
            }
            return false;
        });
        if (list.length == 0) {
            return;
        }
        for (const cj of list) {
            const info = game.xwChengjiu.info(cj);
            ret += "<br><table style='width:200px;height:29.9px;'  border='0' frame='void' rules='none'>";
            ret += "<tr><td style='vertical-align:middle;text-align:left;";
            ret += 'font-family:xingkai;color:white;font-size:24px;text-shadow:none;';
            ret += 'background-image:url(extension/玄武江湖/xwjh_pic_hongmoji.png);';
            ret += "background-size:100% 100%;background-position:center;background-repeat:no-repeat;'>&nbsp;&nbsp;" + (info.replaceName ? info.replaceName : cj);
            ret += '</td></tr>';
            ret += '</table>';
            ret += '<br><font color="#990000">';
            for (let i = 0; i < info.hard; i++) {
                ret += '★';
            }
            for (let i = info.hard; i < 5; i++) {
                ret += '☆';
            }
            ret += '</font>&nbsp;&nbsp;&nbsp;';
            let finished = false;
            if (game.xwChengjiu.hasAchievement(cj)) {
                finished = true;
                ret += "<img src='extension/玄武江湖/xwjh_pic_finished.png' style='width:70px;height:auto;'/>";
            }
            ret += '<p>';
            ret += info.text;
            if (info.count && !finished) {
                ret += '(';
                ret += game.xwChengjiu.currentCount(cj);
                ret += '/' + info.count + ')';
            }
            if (info.extra && game.xwChengjiu.hasAchievement(cj)) {
                let extra = typeof info.extra == 'function' ? info.extra() : info.extra;
                extra = extra.replace('<br>', '');
                ret += '<br><span style=\'display:block;width:100%;text-align:right;\'><font color="#666666" size="2">';
                ret += extra;
                ret += '</font></span>';
            }
            ret += '</p>';
        }
        return ret;
    };
});

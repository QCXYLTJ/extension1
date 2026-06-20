import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '高达宇宙',
        content(config, pack) {
            //平凡武将
            lib.rank.rarity.junk.addArray([]);
            //精品武将
            lib.rank.rarity.rare.addArray([]);
            //史诗武将
            lib.rank.rarity.epic.addArray(['gdxhh', 'gddhh']);
            //传说武将
            lib.rank.rarity.legend.addArray(['gd1h', 'gd2h', 'gd3h', 'gd4h', 'gd5h', 'gd6h', 'gd7h', 'gd8h', 'gd9h', 'gd10h', 'gd11h', 'gd12h', 'gd13h', 'gd14h', 'gd15h', 'gd16h', 'gd17h', 'gd18h', 'gd19h', 'gd20h', 'gd21h', 'gd22h', 'gd23h', 'gd24h', 'gd25h', 'gd26h', 'gd27h', 'gd28h', 'gd29h', 'gd30h', 'gd31h', 'gd32h', 'gd33h', 'gd34h', 'gd35h', 'gd36h', 'gd37h', 'gd38h', 'gd39h', 'gd40h', 'gd41h', 'gd42h', 'gd43h', 'equitable', 'gd44h', 'gd45h', 'gd46h', 'gd47h']);
            lib.skill._equitable = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                },
                firstDo: true,
                fixed: true,
                forceDie: true,
                silent: true,
                charlotte: true,
                _priority: 999,
                filter: (event, player) => game.players.concat(game.dead).some((q) => q.name === 'equitable'),
                async content(event, trigger, player) {
                    let chat = ['兴,百姓苦;亡,百姓苦', '天下苦战久矣,望陛下息兵', '社稷之基,非兵乱也'].randomGet();
                    player.chat(chat);
                    let num = 99;
                    while (num-- > 0) {
                        game.alert('〖息兵〗触发,游戏结束');
                    }
                },
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '高达宇宙',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    character: {
                        gd1h: ['male', 'shu', 1, ['gd1_longhun', 'gd1_juejing', 'gd1_wujin'], ['zhu', 'des:潜龙于渊,涉灵愈伤.']],
                        gd2h: ['male', 'shen', 2, ['gd2_qijin', 'gd2_qichu', 'gd2_longhun', 'gd2_changsheng', 'gd2_tuwei'], ['zhu', 'des:龙战于野,其血玄黄!']],
                        gd3h: ['male', 'shu', 4, ['gd3_paoxiao', 'gd3_zhendan', 'gd3_jiaoheng', 'gd3_kuangao'], ['zhu', 'des:杂鱼们,都去死吧!']],
                        gd4h: ['male', 'shu', 4, ['gd4_zhongyong', 'gd4_xiangwang', 'gd4_menglie', 'gd4_xianghe'], ['zhu', 'des:子龙哥哥助我一臂之力!']],
                        gd5h: ['male', 'wu', '1/4', ['gd5_jiang', 'gd5_hunzi', 'gd5_yingyong', 'gd5_hungui'], ['zhu', 'des:吾乃江东小霸王,孙伯符!']],
                        gd6h: ['male', 'qun', 6, ['gd6_xingluan', 'gd6_fangong', 'gd6_yongmeng', 'gd6_bingzheng', 'gd6_luanshi', 'gd6_beici'], ['zhu', 'des:著名六学家,终后被改造为高达六号.']],
                        gd7h: ['female', 'wu', 3, ['wengua', 'gd7_fuzhu', 'gd7_quanzhi'], ['zhu', 'des:我连做梦都在等这一天呢!']],
                        gd8h: ['male', 'qun', '8/8/8', ['gd8_jiaoxie', 'gd8_kuangfu', 'gd8_pigua', 'gd8_busi'], ['zhu', 'des:末将遵命!取兵器来!']],
                        gd9h: ['male', 'wei', 4, ['gd9_tuxi', 'gd9_dengfeng', 'gd9_xianzhen', 'gd9_dushuai'], ['zhu', 'des:哼!没想到吧!']],
                        gd10h: ['male', 'wei', 3, ['gd10_tiandu', 'gd10_yiji', 'gd10_qizuo', 'gd10_jijiu'], ['zhu', 'des:那,就这样把.']],
                        gd11h: ['male', 'qun', 3, ['gd11_kuangcai', 'gd11_shejian', 'gd11_jigu', 'gd11_yingwu'], ['zhu', 'des:祢鼓吏,26岁而终,后被改造为高达十一号.']],
                        gd12h: ['female', 'qun', '3/3/3', ['gd12_lianzhu', 'xiahui', 'gd12_quansha'], ['zhu', 'des:你们都是一条绳上的蚂蚱.']],
                        gd13h: ['male', 'shen', 13, ['gd13_zhougong', 'gd13_tubu', 'gd13_tianxia', 'gd13_guixin'], ['zhu', 'des:周公吐哺,天下归心.']],
                        gd14h: ['male', 'shen', 14, ['gd14_longnu', 'gd12_jieying', 'gd14_nuhuo', 'gd14_lingti'], ['zhu', 'des:龙怒降临,岂是尔等凡人可抗!']],
                        gd15h: ['male', 'wei', '5/10', ['gd15_luoyi', 'gd15_yongli', 'gd15_huchi'], ['zhu', 'des:过来打一架,对,就是你!']],
                        gd16h: ['male', 'shu', 1600, ['gd16_zaiqi', 'gd16_hanyong', 'gd16_manwang'], ['zhu', 'des:高达零号试做机体(木桩)升级而来.']],
                        gd17h: ['male', 'wu', '7/17', ['gd17_qianjie', 'gd17_weiyan', 'gd17_jueyan', 'gd17_poshi'], ['zhu', 'des:我是没有极限的!']],
                        gd18h: ['male', 'shen', 18, ['gd18_junlue', 'gd18_zhengyu', 'gd18_cuike', 'gd18_zhanhuo'], ['zhu', 'des:业火映东水,吴帜绽敌营!']],
                        gd19h: ['male', 'wei', 9, ['gd19_gongao', 'gd19_feisheng'], ['zhu', 'des:诸葛一氏,定会为我复仇!']],
                        gd20h: ['male', 'wu', 5, ['gd20_pojun', 'ergui_wuchang', 'gd20_ergui'], ['zhu', 'des:犯大吴疆土者,盛必击而破之.']],
                        gd21h: ['male', 'qun', 11, ['gd21_mojiang', 'gd21_weishe', 'gd21_shiyong', 'gd21_zhanfeng'], ['zhu', 'des:潘凤已经被我斩了,谁还来领死!']],
                        gd22h: ['female', 'wei', '1/22', ['gd22_jueqing', 'gd22_shangshi', 'gd22_suixin'], ['zhu', 'des:心随情碎,情随伤逝.']],
                        gd23h: ['male', 'shu', 4, ['gd23_fuman', 'gd23_pingpan'], ['zhu', 'des:抚蛮指南:除了内奸势力,最好不要将所有其他角色变为和你一样的身份,当你为主公时,场上所有其他角色被你变为了忠,胜利方式为击杀一位忠;当你为忠,场上所有角色(包括主公)被你变为忠,胜利方式为击杀一位忠(击杀一号位忠游戏会GG);当你为内奸,场上所有其他角色被你变为内奸时,胜利方式为最后一个击杀一号位内奸;当你为反贼;场上所有角色被你变为反贼时,胜利方式为击杀一号位反贼.']],
                        gd24h: ['male', 'wu', 6, ['gd24_kurou', 'gd24_zhaxiang'], ['zhu', 'des:我这把老骨头,不算什么!']],
                        gd25h: ['male', 'shen', 25, ['gd25_wuhun', 'gd25_wushen'], ['zhu', 'des:取汝狗头,有如探囊取物.']],
                        gd26h: ['female', 'qun', '2/6', ['gd26_tuifan', 'gd26_huaxian'], ['zhu', 'des:仙人之力,昭于世间.']],
                        gd27h: ['male', 'shen', 27, ['gd27_qiangyi', 'gd27_zongshi', 'gd27_bainiao', 'gd27_chaofeng'], ['zhu', 'des:我天性散漫,难有约束,君请回吧!']],
                        gd28h: ['male', 'wei', 8, ['gd28_shuangji', 'gd28_shiji'], ['zhu', 'des:铁戟双提八十斤,威风凛凛震乾坤!']],
                        gd29h: ['female', 'shu', 7, ['gd29_huxiao', 'gd29_xuehen', 'gd29_wuji'], ['zhu', 'des:我也要像父亲那样坚强.']],
                        gd30h: ['female', 'wu', '6/6/30', ['gd30_xingwu', 'gd30_luoyan', 'gd30_shuangfei'], ['zhu', 'des:姐妹蝶双飞(双飞使用桃时要选择目标,酒、桃、延时锦囊牌等无法指定多个目标)']],
                        gd31h: ['male', 'qun', 13, ['gd31_xiongluan', 'gd31_congjian', 'gd31_baizhan', 'gd31_zhenbei'], ['zhu', 'des:贝蒂小熊,乱世不败!']],
                        gd32h: ['male', 'shen', 32, ['gd32_dishi', 'gd32_fanzhi', 'gd32_cangjian', 'gd32_piaomiao'], ['zhu', 'des:十八岁的王越单枪匹马潜入贺兰山的羌人牧场.他趁夜色闯入了羌族首领的大帐,斩下其首级,最终毫发无损的归来,一时间名声大振,成为天下游侠的偶像.']],
                        gd33h: ['male', 'wei', 11, ['gd33_guicai', 'gd33_fankui', 'gd33_tanlang', 'gd33_tuntian'], ['zhu', 'des:贪狼有吞天之力,吞你,还不是易如反掌!']],
                        gd34h: ['female', 'shu', 4, ['gd34_fanghun', 'gd34_fuhan', 'gd34_dunyi', 'gd34_huodi'], ['zhu', 'des:心如寒梅,不惧严霜!']],
                        gddhh: ['female', 'wu', 3, ['gd35_zenhui', 'gd35_jiaojin', 'gd35_xiaohu'], ['zhu', 'des:适婚的年纪,嫁给都督周瑜之子、骑都尉周循.周去世后,再嫁于名将全琮,人称全公主.赤乌年间,参与<南鲁党争>事件,废太子孙和,拥戴孙亮为太子.吴少帝孙亮继位,凭借外戚身份和拥立功勋,排除异己,权倾一时. 太平三年(258年),谋划诛杀权臣孙綝,事情泄漏后,流放于豫章,不知所终.']],
                        gdxhh: ['female', 'wu', 3, ['gd35_meibu', 'gd35_mumu', 'gd35_dahu'], ['zhu', 'des:黄龙元年(229年),下嫁左将军朱据,自此又被称作<朱公主>,育有一女朱皇后,赤乌十三年(250年)朱据去世后,改嫁车骑将军刘纂. 五凤二年(255年),被其胞姐全公主诬陷谋反,因此被杀.永安元年(258年),吴景帝为其平反.']],
                        gd35h: ['female', 'wu', 6, ['gd35_zenhui', 'gd35_jiaojin', 'gd35_meibu', 'gd35_mumu', 'gd35_gongxin'], ['zhu', 'des:怀着美好的祝愿做了这个武将,希望有一种结局是和解并和睦相处吧!']],
                        gd36h: ['male', 'qun', 36, ['gd36_jijun', 'gd36_fangtong', 'gd36_leiji', 'gd36_guishu'], ['zhu', 'des:大数学家']],
                        gd37h: ['male', 'shen', 37, ['gd37_wenji', 'gd37_tunjiang', 'gd37_jijie'], ['zhu', 'des:还望先生不要不识好歹,赶紧交出牌来!希望这位先生,耗子尾汁!']],
                        gd38h: ['male', 'wei', 19, ['gd38_zhenjun', 'gd38_jieyue', 'gd38_yizhong', 'gd38_zhengyi'], ['zhu', 'des:敌人虚张声势,我且将计就计!']],
                        gd39h: ['male', 'shu', 6, ['gd39_tianjiang', 'gd39_zhuren', 'gd39_jiangxin', 'gd39_xiaoren'], ['zhu', 'des:巧夺天工,超凡脱俗!']],
                        gd40h: ['male', 'wu', 10, ['gd40_fenxun', 'gd40_duanbing', 'gd40_bozhan'], ['zhu', 'des:短兵轻甲,也可取汝性命!']],
                        gd41h: ['male', 'wu', '14/41', ['gd41_keji', 'gd41_kongjv', 'gd41_mowang'], ['zhu', 'des:只要我活着就能让对面恐惧']],
                        gd42h: ['male', 'shen', 5, ['gd42_ergui', 'gd42_paimen', 'gd42_jieying', 'ergui_wuchang'], ['zhu', 'des:裹甲衔枚,劫营,如入无人之境!']],
                        gd43h: ['male', 'shen', '3/4', ['gd43_mashu', 'gd43_jishou', 'gd43_huainian', 'gd43_cuihui'], ['zhu', 'des:马超就是神!棘手技能确实有些负面,让局面变得吃力,但这正好反衬出马神摧毁一切的神躯.神助可以获得三国杀目前所有姓马的武将的技能,还可以小过牌.']],
                        equitable: ['male', 'shen', Infinity, ['equit_xibing'], ['zhu', 'des:结束吧,莫让阴间武将横行.详见本扩展<高达平局号>序.']],
                        /*"old_gd44h":["male","shen",4,["gd44_bingwan","gd44_huiwan","old_gd44_jiuyuan"],["zhu","des:生子当如孙仲谋,合肥十万送人头.有兵能使鬼推磨,张辽归我不用愁.召唤江表十二虎臣、五子良将和五虎上将时,每个能在本扩展找到的的武将都上阵,但仍有部分需要召唤的武将不在本扩展武将范围内,故采用官方包武将替代.特别的,请各位玩家打开所有官方武将包,否则极有可能召唤失败."]],*/
                        gd44h: ['male', 'wu', 4, ['gd44_zhiheng', 'gd44_jiuyuan'], ['zhu', 'des:生子当如孙仲谋,合肥十万送人头.']],
                        gd45h: ['male', 'qun', 3, ['gd45_shawo', 'gd45_jiaozhu', 'gd45_dianshan', 'gd45_leiming', 'xinhuangtian'], ['zhu', 'des:张角:杀我.麹义、马超、黄忠、徐盛:？']],
                        gd46h: ['male', 'shu', '4/6', ['gd46_duibai'], ['zhu', 'des:我从未见过有如此厚颜无耻之人!']],
                        gd47h: ['female', 'shu', 3, ['gd43_mashu', 'gd47_fengpo', 'gd47_zhuanda'], ['zhu', 'des:三国杀广告著名剧本:神曹操屯牌数十张,却被马妹妹贯石斧一刀做掉,狗卡美其名曰<本小姐专打屯牌的>']],
                    },
                    characterTitle: {
                        gd1h: '大云妹',
                        gd2h: '小云妹',
                        gd3h: '俺也一样',
                        gd4h: '猛♂烈相合',
                        gd5h: '54320',
                        gd6h: '六六大顺',
                        gd7h: '密谋除敌',
                        gd8h: '上将',
                        gd9h: '张八百',
                        gd10h: '四害之首',
                        gd11h: '狂直骂曹',
                        gd12h: '小萝莉',
                        gd13h: '超世之杰',
                        gd14h: '我要收场了',
                        gd15h: '小几把',
                        gd16h: '南蛮之王',
                        gd17h: '觉醒弑神小元帅',
                        gd18h: '东吴纵火犯',
                        gd19h: '苟住就赢食尸鬼',
                        gd20h: '阳光男孩界徐盛',
                        gd21h: '魔将',
                        gd22h: '春哥',
                        gd23h: '这把稳了',
                        gd24h: '炸翔老将',
                        gd25h: '谁敢杀我',
                        gd26h: '肉身化圣神许劭',
                        gd27h: '万枪之师',
                        gd28h: '十步杀一人',
                        gd29h: '关三小姐',
                        gd30h: '铜雀春深',
                        gd31h: '贝蒂小熊',
                        gd32h: '提携玉龙',
                        gd33h: '吞天知命',
                        gd34h: '觉醒弑神大元帅',
                        gd35h: '虎虎生威',
                        gd36h: '三十六数学家',
                        gd37h: '丐帮帮主',
                        gd38h: '整毅镇军',
                        gd39h: '专铸阴兵打铁匠',
                        gd40h: '短兵相接',
                        gd41h: '恐惧魔王',
                        gd42h: '锦帆游侠',
                        gd43h: '网站发我,不然铁骑你',
                        equitable: '终结者',
                        gd44h: '孙十万',
                        gd45h: '妙脆角',
                        gd46h: '诸葛村夫',
                        gd47h: '一刀999',
                    },
                    characterIntro: {
                    },
                    skill: {
                        gd1_longhun: {
                            charlotte: true,
                            fixed: true,
                            audio: ['longhun', 4],
                            group: ['longhun1', 'longhun2', 'longhun3', 'longhun4'],
                            ai: {
                                skillTagFilter(player, tag) {
                                    switch (tag) {
                                        case 'respondSha': {
                                            if (player.countCards('he', { suit: 'diamond' }) < Math.max(1, player.hp)) return false;
                                            break;
                                        }
                                        case 'respondShan': {
                                            if (player.countCards('he', { suit: 'club' }) < Math.max(1, player.hp)) return false;
                                            break;
                                        }
                                        case 'save': {
                                            if (player.countCards('he', { suit: 'heart' }) < Math.max(1, player.hp)) return false;
                                            break;
                                        }
                                    }
                                },
                                maixie: true,
                                save: true,
                                respondSha: true,
                                respondShan: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'recover') && target.hp >= 1) return [0, 0];
                                        if (!target.hasFriend()) return;
                                        if ((get.tag(card, 'damage') == 1 || get.tag(card, 'loseHp')) && target.hp > 1) return [0, 1];
                                    },
                                },
                                threaten(player, target) {
                                    if (target.hp == 1) return 2;
                                    return 0.5;
                                },
                            },
                        },
                        gd1_wujin: {
                            audio: 'ext:高达宇宙/audio:1',
                            charlotte: true,
                            forced: true,
                            trigger: {
                                player: ['loseAfter', 'chooseToRespondBegin', 'addJudgeAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            fixed: true,
                            _priority: 999,
                            filter(event, player) {
                                if (event.name == 'chooseToRespond' && event.responded) return false;
                                if (event.name == 'lose' && event.cards.length == 0) return false;
                                return true;
                            },
                            content() {
                                if (trigger.name == 'chooseToRespond') {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    var card2 = get.cardPile(function (card) {
                                        return trigger.filterCard({ name: card.name }, player);
                                    });
                                    if (card2) {
                                        trigger.result = {
                                            bool: true,
                                            card: card2,
                                        };
                                    }
                                } else {
                                    for (var i = 0; i < trigger.cards.length; i++) {
                                        var newcard = get.cardPile(function (card) {
                                            return card.name == trigger.cards[i].name && card.name != 'du';
                                        });
                                        if (newcard) {
                                            player.gain(newcard)._triggered = null;
                                        }
                                    }
                                }
                            },
                        },
                        gd2_qijin: {
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            audio: ['longhun4'],
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'dying', 'dyingAfter', 'phaseJieshuBegin'],
                            },
                            content() {
                                player.draw(7);
                                player.recover();
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        gd2_qichu: {
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            audio: 'longhun2',
                            mod: {
                                maxHandcardBase(player, num) {
                                    return 7;
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        gd2_tuwei: {
                            charlotte: true,
                            audio: ['longhun3'],
                            fixed: true,
                            prompt2: '获得当前回合角色至多两张牌',
                            filter(event, player) {
                                var card = event.card;
                                return card.name == 'shan' || card.name == 'wuxie';
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            content() {
                                player.line(_status.currentPhase, 'gold');
                                player.gainPlayerCard(_status.currentPhase, 'he', [1, 2]);
                            },
                            check(event, player) {
                                return get.attitude(player, _status.currentPhase) <= 0;
                            },
                        },
                        gd2_changsheng: {
                            charlotte: true,
                            audio: ['juejing'],
                            forced: true,
                            prompt2: '令此牌基数+1~7',
                            filter(event, player) {
                                var numa = Math.random();
                                if (numa >= 1.0) return false;
                                var card = event.card;
                                return card.name == 'sha' || card.name == 'tao';
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            content() {
                                var numb = [1, 2, 3, 4, 5, 6, 7].randomGet();
                                trigger.baseDamage += numb;
                            },
                            check(event, player, card) {
                                if (event.card.name == 'sha') return get.attitude(player, event.target) <= 0;
                                if (event.card.name == 'tao') return true;
                            },
                        },
                        gd2_longhun: {
                            audio: 'ext:高达宇宙/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
                            fixed: true,
                            charlotte: true,
                            viewAs(cards, player) {
                                var name = false;
                                var nature = null;
                                //根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
                                switch (cards[0]?.suit) {
                                    case 'club':
                                        name = 'shan';
                                        break;
                                    case 'diamond':
                                        name = 'sha';
                                        nature = 'fire';
                                        break;
                                    case 'spade':
                                        name = 'wuxie';
                                        break;
                                    case 'heart':
                                        name = 'tao';
                                        break;
                                }
                                //返回判断结果
                                if (name) return { name: name, nature: nature };
                                return null;
                            },
                            check(card) {
                                if (ui.selected.cards.length) return 0;
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao'];
                                    var map = { sha: 'diamond', tao: 'heart' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (
                                            player.countCards('hes', function (card) {
                                                return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                            }) > 0 &&
                                            player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                        ) {
                                            var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == card.suit) return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                                    return 0;
                                }
                                return 1;
                            },
                            selectCard: [1, 2],
                            complexCard: true,
                            position: 'hes',
                            filterCard(card, player, event) {
                                //如果已经选了一张牌 那么第二张牌和第一张花色相同即可
                                if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
                                event = event || _status.event;
                                //获取当前时机的卡牌选择限制
                                var filter = event._backup.filterCard;
                                //获取卡牌花色
                                var name = card.suit;
                                //如果这张牌是♣️️并且当前时机能够使用/打出闪 那么这张牌可以选择
                                if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                //如果这张牌是♦️️并且当前时机能够使用/打出火杀 那么这张牌可以选择
                                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                                //如果这张牌是♠️️并且当前时机能够使用/打出无懈 那么这张牌可以选择
                                if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
                                //如果这张牌是♥️️并且当前时机能够使用/打出桃 那么这张牌可以选择
                                if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                //上述条件都不满足 那么就不能选择这张牌
                                return false;
                            },
                            filter(event, player) {
                                //获取当前时机的卡牌选择限制
                                var filter = event.filterCard;
                                //如果当前时机能够使用/打出火杀并且角色有♦️️ 那么可以发动技能
                                if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) return true;
                                //如果当前时机能够使用/打出闪并且角色有♣️️ 那么可以发动技能
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) return true;
                                //如果当前时机能够使用/打出桃并且角色有♥️️ 那么可以发动技能
                                if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) return true;
                                //如果当前时机能够使用/打出无懈可击并且角色有♠️️ 那么可以发动技能
                                if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) return true;
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'diamond';
                                            break;
                                        case 'respondShan':
                                            name = 'club';
                                            break;
                                        case 'save':
                                            name = 'heart';
                                            break;
                                    }
                                    if (!player.countCards('hes', { suit: name })) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao'];
                                        var map = { sha: 'diamond', tao: 'heart' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (
                                                player.countCards('hes', function (card) {
                                                    return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                                }) > 0 &&
                                                player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                            ) {
                                                var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                                if (temp > max) max = temp;
                                            }
                                        }
                                        max /= 1.1;
                                        return max;
                                    }
                                    return 2;
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
                                if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
                                if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
                            },
                            group: ['gd2_longhun_num', 'gd2_longhun_discard'],
                            subSkill: {
                                num: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    fixed: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var evt = event;
                                        return ['sha', 'tao'].includes(evt.card.name) && evt.skill == 'gd2_longhun' && evt.cards && evt.cards.length == 2;
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                                discard: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    fixed: true,
                                    charlotte: true,
                                    logTarget() {
                                        return _status.currentPhase;
                                    },
                                    autodelay(event) {
                                        return event.name == 'respond' ? 0.5 : false;
                                    },
                                    filter(evt, player) {
                                        return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'gd2_longhun' && evt.cards && evt.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                                    },
                                    content() {
                                        player.line(_status.currentPhase, 'green');
                                        player.discardPlayerCard(_status.currentPhase, 'he', true);
                                    },
                                },
                            },
                        },
                        gd3_paoxiao: {
                            charlotte: true,
                            fixed: true,
                            audio: 'paoxiao',
                            audioname: ['re_zhangfei', 'guanzhang', 'xiahouba'],
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('olpaoxiao2');
                                player.addMark('olpaoxiao2', 1, false);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        gd3_zhendan: {
                            charlotte: true,
                            fixed: true,
                            audio: ['boss_baonu', 2],
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                } else {
                                    if (!player.countCards('he', { color: 'black' })) return false;
                                }
                            },
                            prompt: '将一张黑色牌当杀使用或打出',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('he')) return false;
                                    } else {
                                        if (!player.countCards('he', { color: 'black' })) return false;
                                    }
                                },
                                respondSha: true,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order(item) {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) return 3.1;
                                    return 3;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        if (!isLink && player.hasSkill('jiu')) {
                                            if (
                                                !target.hasSkillTag('filterDamage', null, {
                                                    player: player,
                                                    card: card,
                                                    jiu: true,
                                                })
                                            ) {
                                                if (get.attitude(player, target) > 0) {
                                                    return -7;
                                                } else {
                                                    return -4;
                                                }
                                            }
                                            return -0.5;
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
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.filter(function (target) {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHaveShan() ||
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )) &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
                                        !player.hasSkillTag(
                                            'directHit_ai',
                                            true,
                                            {
                                                target: target,
                                                card: card,
                                            },
                                            true
                                        )
                                    )
                                        return false;
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                            },
                        },
                        gd3_jiaoheng: {
                            charlotte: true,
                            forced: true,
                            fixed: true,
                            _priority: 10,
                            init(player) {
                                var newcard = get.cardPile(function (card) {
                                    return card.name == 'zhangba';
                                });
                                if (newcard) {
                                    player.equip(newcard)._triggered = null;
                                }
                            },
                            shaRelated: true,
                            audio: 'zhendan',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'black'))) return false;
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'black') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'black') return [1, 1];
                                    },
                                },
                            },
                        },
                        gd3_kuangao: {
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return get.distance(player, event.player) <= 5 && event.num > 0;
                            },
                            forced: true,
                            audio: ['boss_baonu', 2],
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.chooseDrawRecover(get.prompt(event.name))
                                    ('step 2');
                                if (result.control != 'cancel2') {
                                    event.num--;
                                    if (event.num > 0) {
                                        event.goto(1);
                                    }
                                }
                            },
                        },
                        gd4_zhongyong: {
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.countCards('h') > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                trigger.target.showHandcards();
                                ('step 1');
                                var cards = trigger.target.getCards('h');
                                var list = [];
                                for (var i = 0; i < cards.length; i++) {
                                    list.add(get.color(cards[i]));
                                }
                                if (list.length == 1) event._result = { control: list[0] };
                                else {
                                    list.sort();
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '选择弃置一种颜色的所有牌')
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            if (get.value(player.getCards('he', { color: 'black' })) >= get.value(player.getCards('he', { color: 'red' }))) return 'black';
                                            return 'red';
                                        });
                                }
                                ('step 2');
                                trigger.target.discard(trigger.target.getCards('heo', { color: result.control }));
                            },
                        },
                        gd4_xiangwang: {
                            charlotte: true,
                            forced: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:1',
                            init(player) {
                                var newcard = get.cardPile(function (card) {
                                    return card.name == 'zhangba';
                                });
                                if (newcard) {
                                    player.equip(newcard)._triggered = null;
                                }
                            },
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                return player.countCards('h') < 4;
                            },
                            content() {
                                player.draw(4 - player.countCards('h'));
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        gd4_menglie: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (game.online) {
                                        if (!player.countUsed()) return true;
                                    } else {
                                        var evt = _status.event.getParent('phaseUse');
                                        if (
                                            evt &&
                                            evt.name == 'phaseUse' &&
                                            player.getHistory('useCard', function (evt2) {
                                                return evt2.getParent('phaseUse') == evt;
                                            }).length == 0
                                        )
                                            return true;
                                    }
                                },
                            },
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return player.isPhaseUsing() && (event.card.name == 'sha' || get.type(event.card) == 'trick');
                            },
                            check(trigger, player) {
                                return true;
                            },
                            content() {
                                trigger.nowuxie = true;
                                trigger.directHit.addArray(game.players);
                            },
                        },
                        gd4_xianghe: {
                            audio: 'ext:高达宇宙/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
                            charlotte: true,
                            fixed: true,
                            viewAs(cards, player) {
                                var name = false;
                                var nature = null;
                                //根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
                                switch (cards[0]?.suit) {
                                    case 'club':
                                        name = 'shan';
                                        break;
                                    case 'diamond':
                                        name = 'sha';
                                        nature = 'fire';
                                        break;
                                    case 'spade':
                                        name = 'wuxie';
                                        break;
                                    case 'heart':
                                        name = 'tao';
                                        break;
                                }
                                //返回判断结果
                                if (name) return { name: name, nature: nature };
                                return null;
                            },
                            check(card) {
                                if (ui.selected.cards.length) return 0;
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao'];
                                    var map = { sha: 'diamond', tao: 'heart' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (
                                            player.countCards('hes', function (card) {
                                                return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                            }) > 0 &&
                                            player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                        ) {
                                            var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == card.suit) return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                                    return 0;
                                }
                                return 1;
                            },
                            selectCard: [1, 2],
                            complexCard: true,
                            position: 'hes',
                            filterCard(card, player, event) {
                                //如果已经选了一张牌 那么第二张牌和第一张花色相同即可
                                if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
                                event = event || _status.event;
                                //获取当前时机的卡牌选择限制
                                var filter = event._backup.filterCard;
                                //获取卡牌花色
                                var name = card.suit;
                                //如果这张牌是♣️️并且当前时机能够使用/打出闪 那么这张牌可以选择
                                if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                //如果这张牌是♦️️并且当前时机能够使用/打出火杀 那么这张牌可以选择
                                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                                //如果这张牌是♠️️并且当前时机能够使用/打出无懈 那么这张牌可以选择
                                if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
                                //如果这张牌是♥️️并且当前时机能够使用/打出桃 那么这张牌可以选择
                                if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                //上述条件都不满足 那么就不能选择这张牌
                                return false;
                            },
                            filter(event, player) {
                                //获取当前时机的卡牌选择限制
                                var filter = event.filterCard;
                                //如果当前时机能够使用/打出火杀并且角色有♦️️ 那么可以发动技能
                                if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) return true;
                                //如果当前时机能够使用/打出闪并且角色有♣️️ 那么可以发动技能
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) return true;
                                //如果当前时机能够使用/打出桃并且角色有♥️️ 那么可以发动技能
                                if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) return true;
                                //如果当前时机能够使用/打出无懈可击并且角色有♠️️ 那么可以发动技能
                                if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) return true;
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'diamond';
                                            break;
                                        case 'respondShan':
                                            name = 'club';
                                            break;
                                        case 'save':
                                            name = 'heart';
                                            break;
                                    }
                                    if (!player.countCards('hes', { suit: name })) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao'];
                                        var map = { sha: 'diamond', tao: 'heart' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (
                                                player.countCards('hes', function (card) {
                                                    return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                                }) > 0 &&
                                                player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                            ) {
                                                var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                                if (temp > max) max = temp;
                                            }
                                        }
                                        max /= 1.1;
                                        return max;
                                    }
                                    return 2;
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
                                if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
                                if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
                            },
                            group: ['gd4_xianghe_num', 'gd4_xianghe_discard'],
                            subSkill: {
                                num: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        var evt = event;
                                        return ['sha', 'tao'].includes(evt.card.name) && evt.skill == 'gd4_xianghe' && evt.cards && evt.cards.length == 2;
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                                discard: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    logTarget() {
                                        return _status.currentPhase;
                                    },
                                    autodelay(event) {
                                        return event.name == 'respond' ? 0.5 : false;
                                    },
                                    filter(evt, player) {
                                        return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'gd4_xianghe' && evt.cards && evt.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                                    },
                                    content() {
                                        player.line(_status.currentPhase, 'green');
                                        player.discardPlayerCard(_status.currentPhase, 'he', true);
                                    },
                                },
                            },
                        },
                        gd5_jiang: {
                            charlotte: true,
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            fixed: true,
                            content() {
                                player.draw();
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        gd5_hunzi: {
                            fixed: true,
                            charlotte: true,
                            limited: true,
                            inherit: 'hunzi',
                            filter(event, player) {
                                return player.hp <= 2 && !player.storage.rehunzi;
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp <= 2) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 3 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                            audio: ['hunzi', 2],
                            juexingji: true,
                            derivation: ['gd5_yingzi', 'gd5_yinghun', 'gd5_taoni'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp(5);
                                player.recover(3);
                                player.addSkill('gd5_yingzi');
                                player.addSkill('gd5_yinghun');
                                player.addSkill('gd5_taoni');
                                game.log(player, '获得了技能', '#g【英姿】和【英魂】和【讨逆】');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                        },
                        gd5_yingzi: {
                            charlotte: true,
                            audio: ['yingzi', 2],
                            audioname: ['heqi', 'sunce', 'gexuan', 're_sunben', 're_sunce', 're_heqi'],
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            fixed: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.player.draw(3);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return 9 + num;
                                },
                            },
                        },
                        gd5_yinghun: {
                            charlotte: true,
                            audio: 'yinghun',
                            audioname: ['re_sunjian', 'sunce', 're_sunben', 're_sunce', 'ol_sunjian'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.getDamagedHp() > 0;
                            },
                            fixed: true,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('gzyinghun'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player.getDamagedHp() == 1 && target.countCards('he') == 0) {
                                            return 0;
                                        }
                                        if (get.attitude(_status.event.player, target) > 0) {
                                            return 10 + get.attitude(_status.event.player, target);
                                        }
                                        if (player.getDamagedHp() == 1) {
                                            return -1;
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.num = player.getDamagedHp();
                                    event.target = result.targets[0];
                                    if (event.num == 1) {
                                        event.directcontrol = true;
                                    } else {
                                        var str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
                                        var str2 = '摸一弃' + get.cnNumber(event.num, true);
                                        player
                                            .chooseControl(str1, str2, function (event, player) {
                                                return _status.event.choice;
                                            })
                                            .set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                                        event.str = str1;
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.directcontrol || result.control == event.str) {
                                    event.target.draw(event.num);
                                    event.target.chooseToDiscard(true, 'he');
                                } else {
                                    event.target.draw();
                                    event.target.chooseToDiscard(event.num, true, 'he');
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == target.maxHp) return 0.5;
                                    if (target.hp == 1) return 2;
                                    if (target.hp == 2) return 1.5;
                                    return 0.5;
                                },
                                maixie: true,
                            },
                        },
                        gd5_yingyong: {
                            charlotte: true,
                            fixed: true,
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'juedou',
                                suit: 'diamond',
                                number: 10,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 10, name: 'shan', cardid: '8145642277', _transform: 'translateX(224px)', clone: { name: 'shan', suit: 'diamond', number: 10, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 379 }, timeout: 340, original: 'h' }],
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                } else {
                                    if (
                                        !player.countCards('he', {
                                            color: 'red',
                                        })
                                    )
                                        return false;
                                }
                            },
                            prompt: '将一张红色牌当决斗使用或打出',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('he')) return false;
                                    } else {
                                        if (
                                            !player.countCards('he', {
                                                color: 'red',
                                            })
                                        )
                                            return false;
                                    }
                                },
                                respondSha: true,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                    order: 5,
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
                                    player(player, target) {
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
                                    respondSha: 2,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                            },
                        },
                        gd5_taoni: {
                            charlotte: true,
                            trigger: {
                                source: 'dieAfter',
                                player: 'die',
                            },
                            forceDie: true,
                            filter(event, player, name) {
                                return name == 'die' || player.isAlive();
                            },
                            popup: false,
                            forced: true,
                            fixed: true,
                            content() {
                                'step 0';
                                if (!player.storage.repolu) player.storage.repolu = 0;
                                event.num = player.storage.repolu + 1;
                                player.chooseTarget([1, Infinity], get.prompt('repolu'), '令任意名角色摸' + get.cnNumber(event.num) + '张牌').set('forceDie', true).ai = function (target) {
                                    return get.attitude(_status.event.player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.repolu++;
                                    result.targets.sortBySeat();
                                    game.asyncDraw(result.targets, num);
                                } else event.finish();
                                ('step 2');
                            },
                        },
                        gd5_hungui: {
                            charlotte: true,
                            mark: true,
                            marktext: '归',
                            fixed: true,
                            intro: {
                                name: '魂归',
                                content: 'mark',
                            },
                            audio: ['hunzi', 2],
                            trigger: {
                                player: 'dying',
                            },
                            init(player) {
                                player.storage.gd5_hungui = 2;
                            },
                            filter(event, player) {
                                if (player.storage.gd5_hungui > 0) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.recover(2 - player.hp);
                                player.discard(player.getCards('hej'));
                                player.gainMaxHp();
                                player.storage.gd5_hungui -= 1;
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.draw(Math.min(player.maxHp, 20));
                                player.turnOver(false);
                                if (player.storage.gd5_hungui == 0) {
                                    player.unmarkSkill('gd5_hungui');
                                }
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.storage.gd5_hungui) return false;
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
                                    if (!target.storage.gd5_hungui) return 0.6;
                                },
                            },
                        },
                        gd6_beici: {
                            forced: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            filter(event, player) {
                                return game.roundNumber >= 6;
                            },
                            content() {
                                player.loseHp();
                            },
                        },
                        gd7_fuzhu: {
                            charlotte: true,
                            fixed: true,
                            audio: 'fuzhu',
                            trigger: {
                                global: ['phaseJudgeBegin', 'enterGame', 'phaseBefore', 'phaseAfter', 'phaseJudgeEnd', 'phaseDrawBegin', 'phaseDrawEnd', 'phaseUseBegin', 'phaseUseEnd', 'phaseDiscardBefore', 'phaseDiscardAfter', 'turnOverEnd'],
                            },
                            filter(event, player) {
                                return player != event.player && event.player.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0 && get.effect(event.player, { name: 'sha' }, player, player) > 0;
                            },
                            content() {
                                'step 0';
                                event.washed = false;
                                lib.onwash.push(lib.skill.fuzhu.onWash);
                                event.total = game.players.length + game.dead.length;
                                ('step 1');
                                event.total--;
                                var card = get.cardPile2(function (card) {
                                    return card.name == 'sha' && player.canUse(card, trigger.player, false);
                                });
                                if (card) {
                                    card.remove();
                                    game.updateRoundNumber();
                                    player.useCard(card, trigger.player, false);
                                }
                            },
                            ai: {
                                threaten: 3,
                            },
                        },
                        gd7_quanzhi: {
                            charlotte: true,
                            forced: true,
                            fixed: true,
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            ai: {
                                nodamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage')) return [0, 0];
                                    },
                                },
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.update();
                                ('step 1');
                                if (trigger.source) trigger.source.discard(trigger.source.getCards('he')); //QQQ
                            },
                        },
                        gd8_jiaoxie: {
                            charlotte: true,
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            fixed: true,
                            audio: ['kuangfu', 1],
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.countCards('e');
                            },
                            content() {
                                'step 0';
                                var neg = get.attitude(player, trigger.player) <= 0;
                                player
                                    .choosePlayerCard('e', trigger.player)
                                    .set('ai', function (button) {
                                        if (_status.event.neg) {
                                            return get.buttonValue(button);
                                        }
                                        return 0;
                                    })
                                    .set('neg', neg);
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    if (player.isEmpty(get.subtype(event.card))) {
                                        player.chooseBool('是否将' + get.translation(event.card) + '置入自己的装备区？').ai = function () {
                                            return true;
                                        };
                                    } else event._result = { bool: false };
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    trigger.player.$give(event.card, player, false);
                                    player.equip(event.card);
                                } else trigger.player.discard(event.card);
                            },
                        },
                        gd8_kuangfu: {
                            charlotte: true,
                            enable: 'phaseUse',
                            audio: 'ext:高达宇宙/audio:2',
                            delay: false,
                            fixed: true,
                            filterTarget(card, player, target) {
                                if (player == target)
                                    return (
                                        player.countCards('e', function (card) {
                                            return lib.filter.cardDiscardable(card, player);
                                        }) > 0
                                    );
                                return target.countDiscardableCards(player, 'e') > 0;
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('e') > 0;
                                });
                            },
                            content() {
                                'step 0';
                                if (player == target) player.chooseToDiscard('e', true);
                                else player.discardPlayerCard(target, 'e', true);
                                ('step 1');
                                player.chooseUseTarget('sha', true, false, 'nodistance');
                                ('step 2');
                                var bool = game.hasPlayer2(function (current) {
                                    return current.getHistory('damage', function (evt) {
                                        return evt.getParent(4) == event;
                                    }).length;
                                });
                                if (player == target && bool) player.draw(2);
                                else if (player != target && !bool) player.draw(1);
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 0.3;
                                },
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        var max = 0;
                                        var min = 1;
                                        target.countCards('e', function (card) {
                                            var val = get.value(card);
                                            if (val > max) max = val;
                                            if (val < min) min = val;
                                        });
                                        if (att > 0 && min <= 0) return target.hasSkillTag('noe') ? 3 : 1;
                                        if (att < 0 && max > 0) {
                                            if (target.hasSkillTag('noe')) return max > 6 ? -max / 3 : 0;
                                            return -max;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        gd8_pigua: {
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'sha')) return false;
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
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
                        gd8_busi: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: ['dying', 'dieBefore', 'dieAfter'],
                            },
                            mark: true,
                            fixed: true,
                            _priority: 999,
                            forced: true,
                            init(player) {
                                player.storage.pf_swhg = 1;
                            },
                            filter(event, player) {
                                if (player.storage.pf_swhg > 0) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.storage.pf_swhg = true;
                                player.hp = Math.min(Infinity, player.maxHp);
                                player.discard(player.getCards('hej'));
                                player.storage.pf_swhg = 1;
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                player.draw(8);
                                if (player.storage.swhg == 0) {
                                    player.unmarkSkill('pf_swhg');
                                }
                            },
                            ai: {
                                order: Infinity,
                                skillTagFilter(player) {
                                    if (player.storage.pf_swhg) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        gd9_tuxi: {
                            charlotte: true,
                            trigger: {
                                player: ['phaseJudgeBegin', 'phaseJudgeEnd', 'phaseDrawBegin', 'phaseDrawEnd', 'phaseUseBegin', 'phaseUseEnd', 'phaseDiscardBefore', 'phaseDiscardAfter', 'turnOverEnd'],
                            },
                            audio: ['tuxi', 2],
                            forced: true,
                            fixed: true,
                            filter(event, player) {
                                return !event.player.isMad();
                            },
                            content() {
                                'step 0';
                                var check;
                                var i,
                                    num = game.countPlayer(function (current) {
                                        return current != player && current.countCards('he') && get.attitude(player, current) <= 0;
                                    });
                                check = num >= 1;
                                player
                                    .chooseTarget(
                                        get.prompt('gd9_tuxi'),
                                        [1, Infinity],
                                        function (card, player, target) {
                                            return target.countCards('he') > 0 && player != target;
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
                                    player.gainMultiple(result.targets, 'he');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                            },
                            ai: {
                                threaten: 10,
                                expose: 1.3,
                            },
                        },
                        gd9_dengfeng: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if ((card.name == 'sha', 'jiu')) return Infinity;
                                },
                            },
                        },
                        gd9_xianzhen: {
                            charlotte: true,
                            fixed: true,
                            audio: 'drlt_zhiti',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                return event.player != player && !player.isTurnedOver();
                            },
                            check(event, player) {
                                if (
                                    game.roundNumber <= 1 &&
                                    !game.hasPlayer(function (current) {
                                        return get.attitude(player, current) < 0;
                                    })
                                )
                                    return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.phase('疾风');
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        gd9_dushuai: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                        },
                        gd10_tiandu: {
                            charlotte: true,
                            fixed: true,
                            audio: ['tiandu', 2],
                            trigger: {
                                player: 'judgeEnd',
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                if (get.owner(event.result.card)) {
                                    return false;
                                }
                                if (event.nogain && event.nogain(event.result.card)) {
                                    return false;
                                }
                                if (player.countCards('h') >= game.countPlayer() * 10) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                player.damage('', 'nosource');
                                player.gain(trigger.result.card);
                                player.$gain2(trigger.result.card);
                            },
                        },
                        gd10_yiji: {
                            charlotte: true,
                            fixed: true,
                            audio: 'reyiji',
                            trigger: {
                                player: ['damageAfter', 'loseHpAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = 1;
                                ('step 1');
                                player.draw(5);
                                event.given = 0;
                                ('step 2');
                                player.chooseCardTarget({
                                    filterCard: true,
                                    selectCard: [1, 5 - event.given],
                                    filterTarget(card, player, target) {
                                        return player != target && target != event.temp;
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
                                        return att - 4;
                                    },
                                    prompt: '请选择至多五张手牌,分配给任意名其他角色.',
                                });
                                ('step 3');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(result.cards, player, 'giveAuto');
                                    event.given += result.cards.length;
                                    if (event.given < 5) {
                                        event.temp = result.targets[0];
                                        event.goto(2);
                                    } else if (event.count < trigger.num) {
                                        delete event.temp;
                                        event.count++;
                                        player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                    } else event.finish();
                                } else if (event.count < trigger.num) {
                                    delete event.temp;
                                    event.count++;
                                    player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                } else event.finish();
                                ('step 4');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                result: {
                                    effect(card, player, target) {
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
                                            if (player.hp >= 4) return [1, num * 2];
                                            if (target.hp == 3) return [1, num * 1.5];
                                            if (target.hp == 2) return [1, num * 0.5];
                                        }
                                    },
                                },
                                threaten: 0.6,
                            },
                        },
                        gd10_jijiu: {
                            charlotte: true,
                            forced: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'dying',
                            },
                            _priority: 999,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'spade' && card.number > 9 && card.number < 11) return -1;
                                    return 1;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    player.recover(1 - player.hp);
                                }
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        gd11_kuangcai: {
                            charlotte: true,
                            fixed: true,
                            audio: ['kuangcai', 2],
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return !event.player.isMad();
                            },
                            content() {
                                game.broadcastAll(function (player) {
                                    player.forceCountChoose = { phaseUse: 26 };
                                }, player);
                                player.addSkill('kuangcai_use');
                                player.addSkill('kuangcai_cancel');
                                //ui.auto.hide();
                            },
                            subSkill: {
                                use: {
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
                                    charlotte: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (!player.forceCountChoose || !player.forceCountChoose.phaseUse) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        player.draw();
                                        player.draw();
                                        player.draw();
                                        if (player.forceCountChoose.phaseUse == 1) {
                                            var evt = event.getParent('phaseUse');
                                            if (evt && evt.name) {
                                                evt.skipped = true;
                                            }
                                        } else
                                            game.broadcastAll(function (player) {
                                                player.forceCountChoose.phaseUse--;
                                            }, player);
                                    },
                                    ai: {
                                        presha: true,
                                        pretao: true,
                                    },
                                },
                                cancel: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    _priority: 50,
                                    silent: true,
                                    charlotte: true,
                                    content() {
                                        game.broadcastAll(function (player) {
                                            delete player.forceCountChoose;
                                        }, player);
                                        //ui.auto.show();
                                        player.removeSkill('kuangcai_use');
                                        player.removeSkill('kuangcai_cancel');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            ai: {
                                threaten: 4.5,
                            },
                        },
                        gd11_shejian: {
                            charlotte: true,
                            audio: ['shejian', 1],
                            enable: 'phaseUse',
                            usable: 1,
                            fixed: true,
                            ai: {
                                order: 12,
                                result: {
                                    target: -3,
                                    player: 1,
                                },
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('baiban')) {
                                        player.line(current, 'green');
                                        current.addTempSkill('baiban');
                                    }
                                });
                            },
                        },
                        gd11_jigu: {
                            charlotte: true,
                            enable: 'phaseUse',
                            audio: 'ext:高达宇宙/audio:1',
                            filterCard: true,
                            fixed: true,
                            position: 'he',
                            check(card) {
                                var val = get.value(card);
                                if (!_status.event.player.getStorage('refenyin_mark').includes(card.suit)) return 12 - val;
                                return 8 - val;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                target.damage('nocard');
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target: -1.5,
                                },
                                tag: {
                                    damage: 1,
                                },
                            },
                        },
                        gd11_yingwu2: {
                            forced: true,
                            fixed: true,
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            content() {
                                player.loseMaxHp();
                            },
                        },
                        gd12_quansha: {
                            charlotte: true,
                            fixed: true,
                            audio: ['lianzhu', 1],
                            enable: 'phaseUse',
                            usable: 12,
                            forced: true,
                            content() {
                                var num = 1 + player.num('h', { color: 'black' });
                                ('step 0');
                                player
                                    .chooseTarget(get.prompt('gd12_quansha'), '对一名其他角色造成' + num + '点伤害', function (card, player, target) {
                                        return target.hp > 0 && target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    if (get.isLuckyStar(player)) num > 0;
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].damage(num);
                                }
                            },
                            ai: {
                                order: 15,
                                result: {
                                    player: 1,
                                    target: -1,
                                },
                                expose: 0.5,
                                threaten: 7,
                            },
                        },
                        gd12_lianzhu: {
                            charlotte: true,
                            audio: ['lianzhu', 2],
                            enable: 'phaseUse',
                            usable: 12,
                            fixed: true,
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card) {
                                var num = get.value(card);
                                if (get.color(card) == 'black') {
                                    if (num >= 6) return 0;
                                    return 20 - num;
                                } else {
                                    if (_status.event.player.needsToDiscard()) {
                                        return 7 - num;
                                    }
                                }
                                return 0;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                target.gain(cards, player, 'giveAuto');
                                if (get.color(cards[0]) == 'black') {
                                    target
                                        .chooseToDiscard(3, 'he', '弃置三张牌,或令' + get.translation(player) + '摸三张牌')
                                        .set('ai', function (card) {
                                            if (_status.event.goon) return 7 - get.value(card);
                                            return 0;
                                        })
                                        .set('goon', get.attitude(target, player) < 0);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (!result.bool) {
                                    player.draw(3);
                                }
                            },
                            ai: {
                                order: 8,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.cards.length && get.color(ui.selected.cards[0]) == 'red') {
                                            if (target.countCards('h') < player.countCards('h')) return 1;
                                            return 0.5;
                                        }
                                        return -1;
                                    },
                                },
                            },
                        },
                        gd12_xiahui: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.color(card) == 'black') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.color(card) == 'black') return false;
                                },
                            },
                            trigger: {
                                global: 'gainBegin',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (event.source == player && event.player != player) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (get.color(i) == 'black') return true;
                                        }
                                }
                                return false;
                            },
                            content() {
                                trigger.player.addSkill('gd12_xiahui2');
                                if (!trigger.player.storage.gd12_xiahui2) {
                                    trigger.player.storage.gd12_xiahui2 = [];
                                }
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (get.color(trigger.cards[i]) == 'black') {
                                        trigger.player.storage.gd12_xiahui2.add(trigger.cards[i]);
                                    }
                                }
                            },
                        },
                        gd12_xiahui2: {
                            mark: true,
                            intro: {
                                content: '不能使用、打出或弃置获得的黑色牌',
                            },
                            mod: {
                                cardDiscardable(card, player) {
                                    if (card.hasGaintag('gd12_xiahui2')) return false;
                                },
                                cardEnabled2(card, player) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('gd12_xiahui2')) return false;
                                },
                            },
                            trigger: { player: 'changeHp' },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return event.num < 0;
                            },
                            content() {
                                player.removeSkill('gd12_xiahui2');
                            },
                            onremove(player) {
                                player.removeGaintag('gd12_xiahui2');
                            },
                        },
                        gd11_yingwu: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            usable: 1,
                            fixed: true,
                            content() {
                                player.draw(26);
                                player.addTempSkill('gd11_yingwu2');
                            },
                        },
                        gd13_guixin: {
                            charlotte: true,
                            fixed: true,
                            forceDie: true,
                            audio: 'guixin',
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            check(event, player) {
                                if (event.num > 1) return true;
                                var num = game.countPlayer(function (current) {
                                    if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                        return true;
                                    }
                                    if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                        return true;
                                    }
                                });
                                return num >= 2;
                            },
                            content() {
                                'step 0';
                                player.revive();
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.num = 0;
                                player.line(targets, 'green');
                                ('step 2');
                                if (num < event.targets.length) {
                                    if (!get.is.altered('gd13_guixin')) {
                                        if (event.targets[num].countGainableCards(player, 'hej')) {
                                            player.gainPlayerCard(event.targets[num], true, 'hej');
                                        }
                                    } else {
                                        var hej = event.targets[num].getCards('hej');
                                        if (hej.length) {
                                            var card = hej.randomGet();
                                            player.gain(card, event.targets[num]);
                                            if (get.position(card) == 'h') {
                                                event.targets[num].$giveAuto(card, player);
                                            } else {
                                                event.targets[num].$give(card, player);
                                            }
                                        }
                                    }
                                    event.num++;
                                    event.redo();
                                }
                                ('step 3');
                                event.count--;
                                if (event.count) {
                                    player.chooseBool(get.prompt2('gd13_guixin'));
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (event.count && result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten(player, target) {
                                    if (target.hp == 1) return 2.5;
                                    return 1;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            var num = game.countPlayer(function (current) {
                                                if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                                    return true;
                                                }
                                                if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                                    return true;
                                                }
                                            });
                                            if (num > 2) return [0, 1];
                                            if (num == 2) return [0.5, 1];
                                        }
                                    },
                                },
                            },
                        },
                        gd13_tubu: {
                            charlotte: true,
                            forceDie: true,
                            fixed: true,
                            audio: 'guixin',
                            trigger: {
                                player: ['damageAfter', 'loseHpAfter'],
                            },
                            content() {
                                'step 0';
                                player.revive();
                                player.hp = player.maxHp;
                                player.update();
                                ('step 1');
                                player.phase('归心');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten(player, target) {
                                    if (target.hp == 1) return 5.2;
                                    return 2.9;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (target.hp == 1) return 0.8;
                                            if (target.isTurnedOver()) return [0, 3];
                                            var num = game.countPlayer(function (current) {
                                                if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                                    return true;
                                                }
                                                if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                                    return true;
                                                }
                                            });
                                            if (num > 2) return [0, 1];
                                            if (num == 2) return [0.5, 1];
                                        }
                                    },
                                },
                            },
                        },
                        gd13_tianxia: {
                            charlotte: true,
                            forceDie: true,
                            fixed: true,
                            audio: 'guixin',
                            check(event, player) {
                                return get.attitude(player, event.player) >= 0;
                            },
                            filter(event, player, name) {
                                return event.player != player;
                            },
                            trigger: {
                                global: ['damageBegin3', 'loseHpBegin3'],
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.loseHp();
                                player.revive();
                            },
                            ai: {
                                threaten: 2,
                                order: 0.5,
                                result: {
                                    player: -1,
                                    target: 1,
                                },
                            },
                        },
                        gd13_zhougong: {
                            charlotte: true,
                            forced: true,
                            forceDie: true,
                            fixed: true,
                            audio: 'guixin',
                            trigger: {
                                player: ['dieBefore', 'die', 'dieBegin', 'dieAfter'],
                            },
                            content() {
                                trigger.cancel();
                                player.revive();
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return Infinity;
                                },
                            },
                        },
                        gd14_longnu: {
                            charlotte: true,
                            mark: true,
                            marktext: '龙',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.nzry_longnu == true) return '锁定技,出牌阶段开始时,你加三点体力上限并摸三张牌,本回合你的黑色手牌均视为雷杀且无距离和次数限制,且当你造成伤害后,摸一张牌';
                                    return '锁定技,出牌阶段开始时,你回复三点体力并摸三张牌,本回合你的红色手牌均视为火杀且无距离和次数限制,且当你造成伤害后,摸一张牌';
                                },
                            },
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            fixed: true,
                            content() {
                                if (player.storage.nzry_longnu == true) {
                                    player.storage.nzry_longnu = false;
                                    player.gainMaxHp(3);
                                    player.draw(3);
                                    player.addTempSkill('gd14_longnu2', { player: 'phaseAfter' });
                                } else {
                                    player.storage.nzry_longnu = true;
                                    player.recover(3);
                                    player.draw(3);
                                    player.addTempSkill('gd14_longnu1', { player: 'phaseAfter' });
                                }
                            },
                        },
                        gd14_longnu1: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                player.draw();
                            },
                            mod: {
                                cardname(card, player) {
                                    if (get.color(card) == 'red') return 'sha';
                                },
                                cardnature(card, player) {
                                    if (get.color(card) == 'red') return 'fire';
                                },
                                targetInRange(card) {
                                    if (get.color(card) == 'red') return true;
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'sha' && card.nature == 'fire') return Infinity;
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                    },
                                },
                                respondSha: true,
                            },
                        },
                        gd14_longnu2: {
                            charlotte: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                player.draw();
                            },
                            mod: {
                                cardname(card, player) {
                                    if (get.color(card) == 'black') return 'sha';
                                },
                                cardnature(card, player) {
                                    if (get.color(card) == 'black') return 'thunder';
                                },
                                targetInRange(card) {
                                    if (get.color(card) == 'black') return true;
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'sha' && card.nature == 'thunder') return Infinity;
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                    },
                                },
                                respondSha: true,
                            },
                        },
                        gd12_jieying: {
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:2',
                            global: 'g_nzry_jieying',
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'tiesuo') return 'zeroplayertarget';
                                    },
                                },
                            },
                            group: ['nzry_jieying_1', 'nzry_jieying_2'],
                            subSkill: {
                                1: {
                                    audio: 2,
                                    trigger: {
                                        player: ['linkBefore', 'enterGame'],
                                        global: 'gameDrawAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isLinked() == (event.name == 'link');
                                    },
                                    content() {
                                        if (trigger.name != 'link') player.link(true);
                                        else trigger.cancel();
                                    },
                                },
                                2: {
                                    audio: 2,
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && !current.isLinked();
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(true, '请选择【结营】的目标', function (card, player, target) {
                                            return target != player && !target.isLinked();
                                        }).ai = function (target) {
                                            return 1 + Math.random();
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.line(result.targets);
                                            result.targets[0].link(true);
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        gd14_nuhuo: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            mark: true,
                            marktext: '怒',
                            trigger: {
                                source: 'damageSource',
                                player: ['damageEnd', 'enterGame'],
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            fixed: true,
                            filter(event, player) {
                                return event.name != 'damage' || event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.addMark('gd14_nuhuo', trigger.name == 'damage' ? trigger.num : 3);
                                ('step 1');
                                var num = player.storage.gd14_nuhuo;
                                if (num >= 7) return player.addSkill('gd14_wujin');
                                ('step 2');
                                var num = player.storage.gd14_nuhuo;
                                if (num >= 14) return player.addSkill('gd14_shichou');
                            },
                            intro: {
                                name: '怒火',
                                content: 'mark',
                            },
                        },
                        gd14_wujin: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            popup: false,
                            fixed: true,
                            trigger: {
                                player: ['dying', 'dieBefore'],
                            },
                            filter(event, player) {
                                if (player.storage.gd14_nuhuo >= 3) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.recover(7 - player.hp);
                                player.storage.gd14_nuhuo -= 3;
                                ('step 2');
                                player.turnOver(false);
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.storage.gd14_nuhuo >= 3) return false;
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
                                    if (!target.storage.gd14_nuhuo) return 0.6;
                                },
                            },
                        },
                        gd14_shichou: {
                            charlotte: true,
                            popup: false,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:1',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.gd14_nuhuo >= 14;
                            },
                            mark: true,
                            content() {
                                'step 0';
                                player.storage.gd14_nuhuo -= 14;
                                event.targets = game.players.slice(0);
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                event.targets2 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets.length) {
                                    event.targets.shift().damage(Infinity, 'fire')._triggered = null;
                                    event.redo();
                                }
                            },
                            ai: {
                                threaten: 5,
                                order: 10,
                                result: {
                                    player(player) {
                                        var num = 0;
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i] != player) {
                                                if (game.players[i].ai.shown == 0) return 0;
                                                num += get.damageEffect(game.players[i], player, player) > 0 ? 1 : -1;
                                            }
                                        }
                                        return num;
                                    },
                                },
                            },
                        },
                        gd14_lingti: {
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                if (event.nature) return true;
                            },
                            forced: true,
                            ai: {
                                nodamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && get.tag(card, 'thunderDamage')) return [0, 0];
                                        if (get.tag(card, 'damage') && get.tag(card, 'fireDamage')) return [0, 0];
                                    },
                                },
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') return false;
                                },
                            },
                            ai: {
                                noCompareTarget: true,
                                nofire: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage' && 'thunderDamage')) return 'zerotarget';
                                    },
                                },
                            },
                        },
                        gd10_qizuo: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                global: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            fixed: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('gd10_qizuo')).set('ai', function (target) {
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
                                            if (get.color(card) == 'red') return target.gainMaxHp();
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
                                        if (event.target.hp < event.target.maxHp) event.target.recover();
                                    } else {
                                        event.target.draw(trigger.num);
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        gd15_luoyi: {
                            charlotte: true,
                            fixed: true,
                            audio: ['luoyi', 2],
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            check(event, player) {
                                if (player.countCards('h', 'sha')) return true;
                                return Math.random() < 0.5;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('gd15_luoyi2', { player: 'phaseBefore' });
                                trigger.cancel(null, null, 'notrigger');
                                ('step 1');
                                player.draw(player.maxHp - player.hp);
                            },
                        },
                        gd15_luoyi2: {
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
                            },
                            forced: true,
                            content() {
                                var num = player.hp;
                                trigger.num += num;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        gd15_yongli: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            srlose: true,
                            forced: true,
                            fixed: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            content() {
                                'step 0';
                                trigger.target.chooseToDiscard('请弃置一张锦囊牌,否则不能使用闪抵消此杀', 'he', function (card) {
                                    return get.type(card) == 'trick';
                                }).ai = function (card) {
                                    var num = trigger.target.num('h', 'shan');
                                    if (num == 0) return 0;
                                    return 8 - get.value(card);
                                };
                                ('step 1');
                                if (!result.bool) {
                                    trigger.directHit = true;
                                }
                            },
                        },
                        gd15_huchi: {
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                source: 'damageEnd',
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.gainMaxHp(Math.ceil(num / 10));
                                player.draw(Math.ceil(num / 10));
                                player.recover(Math.ceil(num / 10));
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                        },
                        gd16_zaiqi: {
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: 'changeHp',
                            },
                            filter(event, player) {
                                return !event.numFixed && player.hp < player.maxHp;
                            },
                            forced: true,
                            content() {
                                player.hp = player.maxHp;
                                player.update();
                            },
                        },
                        gd16_hanyong: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event.source == player) return false;
                                if (event.source == undefined) return false;
                                return true;
                            },
                            forced: true,
                            fixed: true,
                            content() {
                                var abc = trigger.num;
                                trigger.source.damage(abc);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten: 0.1,
                            },
                        },
                        gd16_manwang2: {
                            charlotte: true,
                            fixed: true,
                            audio: 'huoshou1',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'nanman';
                            },
                            content() {
                                player.draw(7);
                            },
                        },
                        gd16_manwang1: {
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            audio: 'huoshou1',
                            filter(event, player) {
                                return event.card.name == 'nanman';
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        gd16_manwang: {
                            charlotte: true,
                            fixed: true,
                            group: ['gd16_manwang1', 'gd16_manwang2', 'gd16_manwang3', 'gd16_manwang4'],
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'nanman') return [0, 1];
                                    },
                                },
                            },
                        },
                        gd16_manwang3: {
                            charlotte: true,
                            audio: 'huoshou1',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            fixed: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'nanman' && event.player != player;
                            },
                            content() {
                                trigger.customArgs.default.customSource = player;
                            },
                        },
                        gd16_manwang4: {
                            charlotte: true,
                            audio: 'huoshou1',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            fixed: true,
                            filter(event, player) {
                                return event.card.name == 'nanman' && event.player != player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                player.gain(trigger.cards, 'gain2');
                            },
                        },
                        gd17_qianjie: {
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:2',
                            group: ['gd17_qianjie_1', 'gd17_qianjie_2', 'gd17_qianjie_3', 'gd17_qianjie_4', 'gd17_qianjie_5'],
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'tiesuo') return 'zeroplayertarget';
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:高达宇宙/audio:2',
                                    trigger: {
                                        player: 'linkBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isLinked();
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    audio: 'ext:高达宇宙/audio:2',
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '取消了翻面');
                                    },
                                },
                                3: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (get.type(card) == 'delay') return false;
                                        },
                                    },
                                },
                                4: {
                                    mod: {
                                        targetEnabled(card, player, target, now) {
                                            if (card.name == 'shunshou' || card.name == 'huogong' || card.name == 'guohe' || card.name == 'sha' || card.name == 'juedou') return false;
                                        },
                                    },
                                },
                                5: {
                                    ai: {
                                        noCompareTarget: true,
                                    },
                                },
                            },
                        },
                        gd17_jueyan: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            fixed: true,
                            filterCard: true,
                            position: 'he',
                            content() {
                                switch (get.type(cards[0], 'trick', cards[0].original == 'h' ? player : false)) {
                                    case 'basic':
                                        player.addTempSkill('gd17_jueyan_basic');
                                        player.draw(7);
                                        break;
                                    case 'equip':
                                        player.addTempSkill('gd17_jueyan_equip');
                                        player.draw(3);
                                        player.recover();
                                        break;
                                    case 'trick':
                                        player.addTempSkill('gd17_jueyan_trick');
                                        player.draw(4);
                                        break;
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        gd17_jueyan_basic: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            forced: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            fixed: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.distance(player, event.player) <= 1;
                            },
                            content() {
                                player.addTempSkill('unequip', 'shaAfter');
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    if (_status.currentPhase == from) {
                                        return distance - from.countUsed();
                                    }
                                },
                            },
                        },
                        gd17_jueyan_equip: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            fixed: true,
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return type != 'basic';
                            },
                            content() {
                                'step 0';
                                player.draw();
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    var type = get.type(card);
                                    if (type == 'trick' || type == 'delay') return true;
                                },
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        gd17_jueyan_trick: {
                            charlotte: true,
                            enable: 'phaseUse',
                            fixed: true,
                            popup: true,
                            audio: 'ext:高达宇宙/audio:1',
                            selectCard: 4,
                            filterCard(card) {
                                var suit = card.suit;
                                for (var i = 0; i < ui.selected.cards.length; i++) {
                                    if (ui.selected.cards[i].suit == suit) return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                event.delay = false;
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                event.targets2 = event.targets.slice(0);
                                event.targets3 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets2.length) {
                                    event.targets2.shift().loseHp();
                                    event.redo();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                ('step 3');
                                if (event.targets.length) event.goto(2);
                                ('step 4');
                                if (event.targets3.length) {
                                    event.targets3.shift().chooseToDiscard(4, 'h', true).delay = false;
                                }
                                ('step 5');
                                if (event.targets3.length) event.goto(4);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        var num = 0;
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i] != player) {
                                                if (game.players[i].ai.shown == 0) return 0;
                                                num += get.damageEffect(game.players[i], player, player) > 0 ? 1 : -1;
                                            }
                                        }
                                        return num;
                                    },
                                },
                            },
                        },
                        gd17_weiyan: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            fixed: true,
                            juexingji: true,
                            forced: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp <= player.maxHp;
                            },
                            _priority: 10,
                            content() {
                                'step 0';
                                var gd = [1, 2, 3, 4, 5, 6, 7].randomGet();
                                player.recover(gd);
                                var abc = [1, 2, 3, 4, 5, 6, 7].randomGet();
                                player.draw(abc);
                                ('step 1');
                                if (player.isHealthy()) {
                                    player.changeGroup('shen');
                                    player.maxHp = Infinity;
                                    player.hp = player.maxHp;
                                    player.update();
                                    player.awakenSkill(event.name);
                                    player.storage[event.name] = true;
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        gd17_poshi: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            forced: true,
                            fixed: true,
                            trigger: {
                                source: 'dieAfter',
                            },
                            content() {
                                'step 0';
                                var list = [];
                                if (!player.hasSkill('gd16_hanyong')) {
                                    list.push('gd16_hanyong');
                                }
                                if (!player.hasSkill('gd15_yongli')) {
                                    list.push('gd15_yongli');
                                }
                                if (!player.hasSkill('gd14_longnu')) {
                                    list.push('gd14_longnu');
                                }
                                if (!player.hasSkill('gd13_guixin')) {
                                    list.push('gd13_guixin');
                                }
                                if (!player.hasSkill('gd12_quansha')) {
                                    list.push('gd12_quansha');
                                }
                                if (!player.hasSkill('gd11_jigu')) {
                                    list.push('gd11_jigu');
                                }
                                if (!player.hasSkill('gd10_qizuo')) {
                                    list.push('gd10_qizuo');
                                }
                                if (!player.hasSkill('gd9_xianzhen')) {
                                    list.push('gd9_xianzhen');
                                }
                                if (!player.hasSkill('gd8_jiaoxie')) {
                                    list.push('gd8_jiaoxie');
                                }
                                if (!player.hasSkill('gd7_fuzhu')) {
                                    list.push('gd7_fuzhu');
                                }
                                if (!player.hasSkill('gd6_fangong')) {
                                    list.push('gd6_fangong');
                                }
                                if (!player.hasSkill('gd5_yingyong')) {
                                    list.push('gd5_yingyong');
                                }
                                if (!player.hasSkill('gd4_menglie')) {
                                    list.push('gd4_menglie');
                                }
                                if (!player.hasSkill('gd3_kuangao')) {
                                    list.push('gd3_kuangao');
                                }
                                if (!player.hasSkill('gd2_changsheng')) {
                                    list.push('gd2_changsheng');
                                }
                                if (!player.hasSkill('gd1_wujin')) {
                                    list.push('gd1_wujin');
                                }
                                if (list.length) {
                                    player.chooseControl(list).set('prompt', '选择获得一项技能');
                                }
                                ('step 1');
                                player.addSkill(result.control);
                                player.popup(result.control);
                                game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
                            },
                            ai: {
                                threaten: 2.4,
                            },
                            derivation: ['gd16_hanyong', 'gd15_yongli', 'gd14_longnu', 'gd13_guixin', 'gd12_quansha', 'gd11_jigu', 'gd10_qizuo', 'gd9_xianzhen', 'gd8_jiaoxie', 'gd7_fuzhu', 'gd6_fangong', 'gd5_yingyong', 'gd4_menglie', 'gd3_kuangao', 'gd2_changsheng', 'gd1_wujin'],
                        },
                        gd6_luanshi: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            popup: false,
                            fixed: true,
                            prompt2: '令此【杀】额外指定一个随机目标',
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                return game.hasPlayer(function (current) {
                                    return event.targets.includes(current) == false && current != player && lib.filter.targetEnabled(event.card, player, current);
                                });
                            },
                            content() {
                                var list = game.filterPlayer(function (current) {
                                    return trigger.targets.includes(current) == false && current != player && lib.filter.targetEnabled(trigger.card, player, current);
                                });
                                if (list.length) {
                                    event.target = list.randomGet();
                                    player.line(event.target, 'green');
                                    game.log(event.target, '被追加为额外目标');
                                    trigger.targets.push(event.target);
                                }
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return 6;
                                },
                            },
                        },
                        gd6_xingluan: {
                            charlotte: true,
                            fixed: true,
                            audio: ['xinfu_xingluan', 2],
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (!player.isPhaseUsing()) return false;
                                if (get.type(event.card) == undefined) return false;
                                return event.targets && event.targets.length == 1;
                            },
                            content() {
                                player.draw(2);
                                var card = get.cardPile2(function (card) {
                                    return card.number == 6;
                                });
                                if (!card) {
                                    player.chat('无牌可得了吗');
                                    game.log('但是牌堆里面已经没有点数为6的牌了!');
                                    event.finish();
                                    return;
                                }
                                player.gain(card, 'gain2');
                            },
                        },
                        gd6_fangong: {
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                target: 'useCardToAfter',
                            },
                            forced: true,
                            content() {
                                player.draw(3);
                                if (trigger.player != player) {
                                    player
                                        .chooseToUse('是否发动反攻,对' + get.translation(trigger.player) + '使用一张【杀】？', { name: 'sha' })
                                        .set('filterTarget', function (card, player, target) {
                                            return target == _status.event.source;
                                        })
                                        .set('selectTarget', -1)
                                        .set('source', trigger.player); //QQQ
                                }
                            },
                        },
                        gd6_yongmeng: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            firstDo: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            fixed: true,
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                while (!player.isEmpty(event.num)) {
                                    event.num++;
                                    if (event.num > 5) {
                                        event.finish();
                                        return;
                                    }
                                }
                                var card = get.cardPile2(function (card) {
                                    return get.subtype(card) == 'equip' + event.num && player.canUse(card, player);
                                });
                                if (card) {
                                    player.chooseUseTarget(card, true, 'nopopup');
                                }
                                event.num++;
                                if (event.num <= 5) event.redo();
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 5;
                                },
                            },
                        },
                        gd6_bingzheng: {
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 6;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - 6;
                                },
                                canBeDiscarded(card, player, target) {
                                    if (player == target) return false;
                                },
                            },
                            trigger: {
                                player: 'loseBefore',
                                global: 'gainBefore',
                            },
                            _priority: null,
                            filter(event, player, name) {
                                if (name == 'gainBefore') {
                                    if (event.player == player) return false;
                                    if (!event.cards) return false;
                                    if (player.get('he').length == 0) return false;
                                    for (var i of player.get('he')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                } else {
                                    if (event.type != 'discard') return false;
                                    if (!event.cards) return false;
                                    if (player.get('he').length == 0) return false;
                                    for (var i of player.get('he')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                }
                            },
                            content() {
                                trigger.cards.remove(player.get('he'));
                            },
                        },
                        gd18_junlue: {
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:2',
                            intro: {
                                content: '当前有#个标记',
                            },
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addMark('gd18_junlue', trigger.num);
                                player
                                    .chooseTarget(get.prompt('军略'), function (card, player, target) {
                                        if (player == target) return false;
                                        return !target.isLinked();
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                    if (result.targets.length >= 1) {
                                        event.targets[0].link();
                                    }
                                }
                            },
                        },
                        gd18_cuike: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            fixed: true,
                            content() {
                                'step 0';
                                if (player.countMark('gd18_junlue') % 2 == 1) {
                                    player.chooseTarget('是否发动【摧克】,对一名角色造成一点不触发任何其它效果的伤害并回复一点体力？').ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                } else {
                                    player.chooseTarget('是否发动【摧克】,横置一名角色并弃置其区域内的一张牌,你增加一点体力上限？').ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (player.countMark('gd18_junlue') % 2 == 1) {
                                        result.targets[0].damage()._triggered = null;
                                        player.recover();
                                    } else {
                                        result.targets[0].link(true);
                                        player.discardPlayerCard(result.targets[0], 1, 'hej', true);
                                        player.gainMaxHp();
                                    }
                                }
                                ('step 2');
                                if (player.countMark('gd18_junlue') > 7) {
                                    player
                                        .chooseBool()
                                        .set('ai', function () {
                                            return true;
                                        })
                                        .set('prompt', '是否移去7枚<军略>标记并对所有其他角色造成一点伤害？');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    var players = game.players.slice(0).sortBySeat();
                                    player.line(players);
                                    player.removeMark('gd18_junlue', 7);
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i] != player) players[i].damage()._triggered = null;
                                    }
                                }
                            },
                        },
                        gd18_zhengyu: {
                            charlotte: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            fixed: true,
                            content() {
                                var zhanhuo = player.countMark('gd18_junlue');
                                trigger.num += zhanhuo;
                                player.draw();
                            },
                            mod: {
                                globalFrom(from, to, current) {
                                    return current - Math.max(0, from.countMark('gd18_junlue'));
                                },
                                globalTo(from, to, current) {
                                    return current + Math.max(0, to.countMark('gd18_junlue'));
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.countMark('gd18_junlue');
                                },
                            },
                            ai: {
                                damageBonus: true,
                                threaten: 1.4,
                            },
                        },
                        gd18_zhanhuo: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:2',
                            mark: true,
                            fixed: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('gd18_junlue') >= 3;
                            },
                            check(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && current.isLinked();
                                });
                                return (
                                    player.storage.gd18_junlue >= num &&
                                    num ==
                                    game.countPlayer(function (current) {
                                        return get.attitude(player, current) < 0;
                                    })
                                );
                            },
                            filterTarget(card, player, target) {
                                return target.isLinked();
                            },
                            selectTarget() {
                                return [1, _status.event.player.countMark('gd18_junlue')];
                            },
                            multiline: true,
                            multitarget: true,
                            content() {
                                'step 0';
                                player.removeMark('gd18_junlue', 3);
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].discard(targets[i].getCards('e'));
                                }
                                player
                                    .chooseTarget(true, '对一名目标角色造成3点火焰伤害', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('targets', targets).ai = function () {
                                        return 1;
                                    };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage(3, 'fire');
                                    player.gainMaxHp(3);
                                    player.recover(3);
                                }
                            },
                            ai: {
                                order: 10,
                                threaten: 10,
                                result: {
                                    target(player, target) {
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        return get.damageEffect(target, player) - target.countCards('e');
                                    },
                                },
                            },
                        },
                        gd19_tianfa: {
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                target.clearSkills();
                                target.maxHp = 1;
                                target.update();
                                target.damage(9, 'thunder');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        gd19_feisheng: {
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:1',
                            derivation: ['gd19_weizhong', 'gd19_tianfa', 'gd19_yanmie'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.maxHp > 2 * game.players.length && !player.storage.gd19_feisheng;
                            },
                            forced: true,
                            juexingji: true,
                            content() {
                                player.draw(2 * game.players.length);
                                player.changeGroup('shen');
                                player.maxHp = Infinity;
                                player.hp = player.maxHp;
                                player.update();
                                player.addSkill('gd19_weizhong');
                                player.addSkill('gd19_tianfa');
                                player.addSkill('gd19_yanmie');
                                player.storage.gd19_feisheng = true;
                                player.awakenSkill('gd19_feisheng');
                            },
                        },
                        gd19_yanmie: {
                            enable: 'phaseUse',
                            audio: 'ext:高达宇宙/audio:1',
                            usable: 9,
                            fixed: true,
                            popup: false,
                            filterTarget(card, player, target) {
                                return player != target && !target.hasSkill('gd19_yanmie_debuff');
                            },
                            content() {
                                target.goMad();
                                target.addSkill('gd19_yanmie_debuff');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        gd19_yanmie_debuff: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            fixed: true,
                            check() {
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
                                        if (player.hp == player.maxHp) return 'baonue_hp';
                                        if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
                                        return 'baonue_hp';
                                    })
                                    .set('prompt', '崩坏:失去一点体力或减一点体力上限');
                                ('step 1');
                                if (result.control == 'baonue_hp') {
                                    player.loseHp();
                                } else {
                                    player.loseMaxHp(true);
                                }
                            },
                            ai: {
                                threaten: 0.5,
                                neg: true,
                            },
                        },
                        gd19_gongao: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            forceDie: true,
                            fixed: true,
                            content() {
                                'step 0';
                                player.revive();
                                ('step 1');
                                player.gainMaxHp(10);
                                player.recover(10);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        gd19_weizhong: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            popup: false,
                            fixed: true,
                            content() {
                                var num = [1, 2, 3].randomGet();
                                trigger.num *= num;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        gd20_pojun: {
                            charlotte: true,
                            shaRelated: true,
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            fixed: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Infinity], get.prompt('gd20_pojun', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.target;
                                    target.addSkill('gd20_pojun2');
                                    target.storage.gd20_pojun2.addArray(result.cards);
                                    target.lose(result.cards, ui.special, 'toStorage');
                                    game.log(target, '失去了' + get.cnNumber(result.cards.length) + '张牌');
                                    target.markSkill('gd20_pojun2');
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                            group: ['gd20_pojun2', 'gd20_pojun3', 'gd20_pojun4', 'gd20_pojun5', 'gd20_pojun6'],
                        },
                        gd20_pojun2: {
                            charlotte: true,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.gd20_pojun2 && player.storage.gd20_pojun2.length;
                            },
                            content() {
                                var gd = player.storage.gd20_pojun2.length;
                                trigger.num += gd;
                                player.removeSkill('gd20_pojun2');
                            },
                            intro: {
                                onunmark: 'throw',
                                content: 'cardCount',
                            },
                        },
                        gd20_pojun3: {
                            charlotte: true,
                            trigger: {
                                source: 'damageSource',
                            },
                            check(event, player) {
                                if (event.player.isTurnedOver()) return get.attitude(player, event.player) > 0;
                                if (event.player.hp < 3) {
                                    return get.attitude(player, event.player) < 0;
                                }
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.isAlive();
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.draw(Math.min(5, trigger.player.hp));
                                ('step 1');
                                trigger.player.turnOver();
                            },
                        },
                        gd20_pojun4: {
                            charlotte: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.player.isAlive() && event.card && event.card.name == 'sha';
                            },
                            check(event, player) {
                                if (event.player.isAlive()) return get.attitude(player, event.player) < 0;
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                trigger.player.clearSkills();
                            },
                        },
                        gd20_pojun5: {
                            charlotte: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha'; //QQQ
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        gd20_pojun6: {
                            charlotte: true,
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                if (player.getStat('kill') > 0) {
                                    player.phase('nodelay');
                                }
                            },
                        },
                        gd21_mojiang: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'changeHp',
                                source: 'damageEnd',
                            },
                            forced: true,
                            fixed: true,
                            content() {
                                'step 0';
                                player.gainMaxHp(4);
                                ('step 1');
                                player.drawTo(player.maxHp);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                            ai: {
                                threaten: 4,
                                effect: {
                                    player(card, player) {
                                        if (get.type(card) == 'delay') return [1, 5];
                                        if (get.type(card) == 'trick') return [1, 9];
                                        if (get.type(card) == 'equip') return [1, 4];
                                    },
                                },
                            },
                        },
                        gd21_weishe: {
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('gd21_weishe'), function (card, player, target) {
                                        return player != target && target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target) < 0) {
                                            return 3 - get.attitude(_status.event.player, target);
                                        }
                                        return -1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].chooseToDiscard(2, 'he', true);
                                }
                            },
                            ai: {
                                expose: 0.5,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        gd21_shiyong: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 1,
                            ai: {
                                order: 10,
                                result: {
                                    target: -3,
                                },
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                if (!target.hasSkill('baiban')) {
                                    target.addSkill('baiban');
                                }
                                ('step 1');
                                target.damage(8)._triggered = null;
                                ('step 2');
                                if (target.hp > 0) {
                                    target.gainMaxHp(4);
                                }
                                player.loseMaxHp(4);
                            },
                        },
                        gd21_zhanfeng: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 9,
                            fixed: true,
                            filter(event, player) {
                                return event.player != player && event.player.hp <= 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                const next = game.createEvent('diex', false);
                                next.source = player;
                                next.player = trigger.player;
                                next._triggered = null;
                                next.restMap = { type: null, count: null, audio: null };
                                next.excludeMark = [];
                                next.setContent('die');
                                trigger.player.delete();
                                trigger.player.remove();
                                ('step 1');
                                if (!trigger.player.isAlive()) {
                                    trigger.cancel(true);
                                } else {
                                    game.forceOver('潘凤已经被我斩了!');
                                }
                            },
                        },
                        gd22_shangshi: {
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            audio: 'shangshi',
                            trigger: {
                                player: ['loseEnd', 'changeHp', 'gainMaxHpEnd', 'loseMaxHpEnd'],
                                global: ['gameStart'],
                            },
                            filter(event, player) {
                                return player.countCards('h') < 2 * player.getDamagedHp();
                            },
                            content() {
                                var X = player.getDamagedHp();
                                var Y = player.countCards('h');
                                var C = 2 * X - Y;
                                player.draw(C);
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                        },
                        gd22_jueqing: {
                            charlotte: true,
                            fixed: true,
                            audio: 'jueqing',
                            group: 'gd22_jueqing2',
                            trigger: {
                                global: 'gameStart',
                            },
                            check(event) {
                                var numa = Math.random();
                                if (numa >= 1.0) return false;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.clearSkills();
                                    }
                                });
                            },
                        },
                        gd22_jueqing2: {
                            charlotte: true,
                            fixed: true,
                            fixed: true,
                            trigger: {
                                source: 'damageBefore',
                                player: 'damageBefore',
                            },
                            forced: true,
                            audio: 'jueqing',
                            check() {
                                return false;
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                            },
                            ai: {
                                jueqing: true,
                            },
                        },
                        gd22_suixin: {
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            trigger: {
                                global: 'loseHpBegin',
                            },
                            audio: 'ext:高达宇宙/audio:1',
                            content() {
                                player.gainMaxHp(2);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                        },
                        gd23_fuman: {
                            charlotte: true,
                            fixed: true,
                            audio: 'fuman',
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                return !target.hasSkill('gd23_fuman2') && target != player;
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            filterCard: true,
                            position: 'he',
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                target.gain(cards, player, 'giveAuto');
                                target.storage.gd23_fuman2 = player;
                                target.addSkill('gd23_fuman2');
                                target.changeGroup('shu');
                                ('step 1');
                                if (get.mode() == 'identity') {
                                    var myid = player.identity;
                                    if (player.identity == 'zhu') {
                                        myid = 'zhong';
                                    }
                                    target.identity = myid;
                                    target.setIdentity();
                                }
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                order: 10,
                            },
                        },
                        gd23_fuman2: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                aiOrder(player, card, num) {
                                    if (player.storage.gd23_fuman2.isIn()) return num + get.sgn(get.attitude(player, player.storage.gd23_fuman2));
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.gd23_fuman2.isIn();
                            },
                            mark: true,
                            intro: {
                                content: '使用一张牌时,令$摸一张牌',
                            },
                            content() {
                                'step 0';
                                'step 1';
                                player.line(player.storage.gd23_fuman2, 'green');
                                player.storage.gd23_fuman2.draw();
                            },
                        },
                        gd23_manbing: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            popup: false,
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 3,
                            filterTarget(card, player, target) {
                                return target.countCards('hej');
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(target, 'hej', true);
                                ('step 1');
                                player.chooseUseTarget({ name: 'nanman' }, true);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        if (att > 0 && target.countCards('j') > 0) return 2;
                                        return -1;
                                    },
                                },
                            },
                        },
                        gd23_nabing: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            popup: false,
                            fixed: true,
                            trigger: {
                                global: 'respondEnd',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.position(i, true) == 'o') return true;
                                    }
                                return false;
                            },
                            forced: true,
                            content() {
                                var cards = trigger.cards.slice(0);
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.position(cards[i], true) != 'o') {
                                        cards.splice(i--, 1);
                                    }
                                }
                                player.gain(cards, 'gain2');
                            },
                        },
                        gd23_pingpan: {
                            audio: 'ext:高达宇宙/audio:1',
                            charlotte: true,
                            juexingji: true,
                            forced: true,
                            fixed: true,
                            derivation: ['gd23_nabing', 'gd23_manbing'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                if (player.group != 'shu') return false;
                                if (
                                    game.countPlayer(function (current) {
                                        return current.group == 'shu';
                                    }) < 3
                                )
                                    return false;
                                return true;
                            },
                            _priority: 10,
                            content() {
                                var num = game.countPlayer(function (current) {
                                    return current.group == 'shu';
                                });
                                if (num < 3) {
                                    return false;
                                } else {
                                    player.changeGroup('shen');
                                    player.maxHp = Infinity;
                                    player.hp = player.maxHp;
                                    player.update();
                                    player.addSkill('gd23_nabing');
                                    player.addSkill('gd23_manbing');
                                    player.awakenSkill(event.name);
                                    player.storage[event.name] = true;
                                }
                            },
                        },
                        gd24_kurou: {
                            group: ['gd24_kurou_draw'],
                            enable: 'phaseUse',
                            popup: false,
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                player.loseHp();
                            },
                            ai: {
                                basic: {
                                    order: 8,
                                },
                            },
                            subSkill: {
                                draw: {
                                    audio: ['kurou', 4],
                                    trigger: {
                                        player: 'loseHpEnd',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    fixed: true,
                                    content() {
                                        'step 0';
                                        player.draw(trigger.num * 4);
                                        ('step 1');
                                        if (_status.currentPhase == player) {
                                            if (!player.storage.gd24_zhaxiang2) player.storage.gd24_zhaxiang2 = 0;
                                            player.storage.gd24_zhaxiang2 += num;
                                            player.addTempSkill('gd24_zhaxiang2', { player: 'phaseAfter' });
                                        } else {
                                            game.trySkillAudio('zhaxiang', player);
                                        }
                                    },
                                },
                            },
                        },
                        gd24_zhaxiang: {
                            charlotte: true,
                            forced: true,
                            fixed: true,
                            forceDie: true,
                            charlotte: true,
                            forced: true,
                            fixed: true,
                            group: ['gd24_zhaxiang2'],
                            audio: 'zhaxiang',
                            trigger: {
                                player: 'changeHp',
                            },
                            filter(event, player) {
                                return !event.numFixed && player.hp <= 1;
                            },
                            content() {
                                player.hp = player.maxHp;
                                player.update();
                            },
                        },
                        gd24_zhaxiang2: {
                            charlotte: true,
                            forced: true,
                            forceDie: true,
                            charlotte: true,
                            fixed: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                        },
                        gd25_wushen: {
                            charlotte: true,
                            audio: 'wushen',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            fixed: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                                if (trigger.addCount !== false) {
                                    trigger.addCount = false;
                                    if (player.stat[player.stat.length - 1].card.sha > 0) {
                                        player.stat[player.stat.length - 1].card.sha--;
                                    }
                                }
                            },
                            mod: {
                                cardname(card, player) {
                                    if (get.color(card) == 'red') return 'sha';
                                },
                                targetInRange(card) {
                                    if (get.color(card) == 'red') return true;
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'sha' && get.color(card) == 'red') return Infinity;
                                },
                            },
                        },
                        gd25_wuhun: {
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0; //QQQ
                            },
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            content() {
                                var target = trigger.source;
                                ('step 0');
                                trigger.source.clearSkills();
                                ('step 1');
                                const next = game.createEvent('diex', false);
                                next.source = player;
                                next.player = trigger.source;
                                next._triggered = null;
                                next.restMap = { type: null, count: null, audio: null };
                                next.excludeMark = [];
                                next.setContent('die');
                                trigger.source.delete();
                                ('step 2');
                                if (target.isAlive()) {
                                    trigger.source.damage(Infinity)._triggered = null;
                                }
                                ('step 3');
                                if (target.isAlive()) {
                                    game.log('谁来与我同去？!');
                                    game.over('谁来与我同去？!');
                                }
                            },
                            ai: {
                                threaten: 0.01,
                                maixie: true,
                            },
                        },
                        gd26_tuifan: {
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:2',
                            intro: {
                                content: '当前有#个标记',
                            },
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addMark('gd26_tuifan', trigger.num);
                                ('step 1');
                                player.gainMaxHp(trigger.num, true);
                                player.recover(trigger.num);
                                player.draw(trigger.num);
                                ('step 2');
                                var list = get.gainableSkills();
                                list.remove(player.getSkills());
                                list = list.randomGets(2 + trigger.num);
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
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
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
                                ('step 3');
                                _status.imchoosing = false;
                                var link = result;
                                player.addSkill(link, true);
                                player.popup(link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                            },
                        },
                        gd26_huaxian: {
                            audio: 'ext:高达宇宙/audio:1',
                            charlotte: true,
                            fixed: true,
                            juexingji: true,
                            forced: true,
                            derivation: ['gd26_xianti', 'gd26_dusheng', 'gd26_huanshen'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.countMark('gd26_tuifan') >= 13;
                            },
                            _priority: 10,
                            content() {
                                player.changeGroup('shen');
                                player.maxHp = Infinity;
                                player.hp = player.maxHp;//QQQ
                                player.update();
                                player.addSkill('gd26_xianti');
                                player.addSkill('gd26_dusheng');
                                player.addSkill('gd26_huanshen');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        gd26_huanshen: {
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: ['phaseBegin', 'useCard'],
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            content() {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (!game.players[i].name || !lib.character[game.players[i].name]) continue;
                                    var skills = lib.character[game.players[i].name][3];
                                    for (var j = 0; j < skills.length; j++) {
                                        if (!lib.skill[skills[j]].forceunique) {
                                            player.addSkill(skills[j]);
                                        }
                                    }
                                }
                            },
                            ai: {
                                threaten: 8,
                            },
                        },
                        gd26_xianti: {
                            charlotte: true,
                            popup: false,
                            audio: 'ext:高达宇宙/audio:1',
                            group: ['gd26_xianti_1', 'gd26_xianti_2', 'gd26_xianti_3', 'gd26_xianti_4', 'gd26_xianti_5'],
                            subSkill: {
                                1: {
                                    audio: 'ext:高达宇宙/audio:1',
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '取消了翻面');
                                    },
                                },
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (get.type(card) == 'delay') return false;
                                        },
                                    },
                                },
                                3: {
                                    mod: {
                                        targetEnabled(card, player, target, now) {
                                            if (card.name == 'shunshou' || card.name == 'huogong' || card.name == 'guohe') return false;
                                        },
                                    },
                                },
                                4: {
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    audio: 'ext:高达宇宙/audio:1',
                                    filter(event, player) {
                                        return event.card.name == 'nanman';
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                5: {
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    audio: 'ext:高达宇宙/audio:1',
                                    filter(event, player) {
                                        return event.card.name == 'wanjian';
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        gd26_dusheng: {
                            charlotte: true,
                            popup: false,
                            fixed: true,
                            audio: 'ext:高达宇宙/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.dead.length && player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                event.current = player.next;
                                var list = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                player.chooseButton(ui.create.dialog('选择一名已阵亡的角色令其复活', [list, 'character']), function (button) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
                                    return get.attitude(_status.event.player, game.dead[i]);
                                });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
                                    var dead = game.dead[i];
                                    if (get.mode() == 'identity') {
                                        var myid = player.identity;
                                        if (player.identity == 'zhu') {
                                            myid = 'zhong';
                                        }
                                        dead.identity = myid;
                                        dead.setIdentity();
                                    }
                                    dead.revive(dead.maxHp);
                                    dead.draw(4);
                                    dead.addSkill('rexinsheng');
                                    dead.addSkill('rehuashen');
                                }
                            },
                            forced: true,
                            notarget: true,
                            selectCard: 1,
                            filterCard: true,
                            position: 'h',
                            discard: false,
                            prompt: '请选择一张牌',
                            ai: {
                                expose: 0.5,
                                order: 12,
                            },
                        },
                        gd1_juejing: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:1',
                            mod: {
                                cardUsable(card, player, num) {
                                    return Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                            trigger: {
                                player: ['dying', 'dyingAfter'],
                            },
                            forced: true,
                            fixed: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('令一名其他角色弃置四张牌,你摸四张牌;或点取消,你摸四张牌', function (card, player, target) {
                                        return player != target && target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target) < 0) {
                                            return 3 - get.attitude(_status.event.player, target);
                                        }
                                        return -1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].chooseToDiscard(4, 'he', true);
                                }
                                ('step 2');
                                player.draw(4);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        gd27_qiangyi: {
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            forced: true,
                            _priority: 999,
                            forceDie: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: ['phaseJudgeBefore', 'phaseDiscardBefore', 'turnOverBefore', 'linkBefore', 'damageBefore', 'loseHpBefore', 'loseMaxHpBefore', 'dyingBefore', 'dieBefore'],
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.addMark('gd27_qiangyi');
                            },
                            intro: {
                                content: '当前修炼出#道枪意',
                            },
                        },
                        gd27_zongshi: {
                            charlotte: true,
                            forceDie: true,
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            fixed: true,
                            filter(event, player) {
                                return player.countMark('gd27_qiangyi') > 0;
                            },
                            content() {
                                'step 0';
                                var abc = player.countMark('gd27_qiangyi');
                                trigger.num += abc;
                                ('step 1');
                                player.draw();
                            },
                        },
                        gd27_bainiao: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            audio: 'ext:高达宇宙/audio:1',
                            forced: true,
                            charlotte: true,
                            forceDie: true,
                            fixed: true,
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha') range[1] += 99;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                            content() {
                                player.chooseUseTarget('###是否发动【百鸟】？###视为对一名其他角色使用一张杀', { name: 'sha' }, false, 'nodistance');
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        gd27_chaofeng: {
                            mod: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (!player.hasSkill('ollongdan')) return true;
                                if (!player.hasSkill('olyajiao')) return true;
                                if (!player.hasSkill('chongzhen')) return true;
                                if (!player.hasSkill('xinjuejing')) return true;
                                if (!player.hasSkill('xinlonghun')) return true;
                                if (!player.hasSkill('gd31_xiongluan')) return true;
                                if (!player.hasSkill('gd31_congjian')) return true;
                                if (!player.hasSkill('zfengshi')) return true;
                                if (!player.hasSkill('chuanxin')) return true;
                                return false;
                            },
                            audio: 'ext:高达宇宙/audio:1',
                            forced: true,
                            charlotte: true,
                            forceDie: true,
                            fixed: true,
                            content() {
                                'step 0';
                                player.chooseControl('赵云', 'SP赵云', '神赵云', '张绣', '张任');
                                ('step 1');
                                if (result.control == '赵云') {
                                    player.addSkill('ollongdan');
                                    player.addSkill('olyajiao');
                                }
                                if (result.control == 'SP赵云') {
                                    player.addSkill('ollongdan');
                                    player.addSkill('chongzhen');
                                }
                                if (result.control == '神赵云') {
                                    player.addSkill('xinlonghun');
                                    player.addSkill('xinjuejing');
                                }
                                if (result.control == '张绣') {
                                    player.addSkill('gd31_xiongluan');
                                    player.addSkill('gd31_congjian');
                                }
                                if (result.control == '张任') {
                                    player.addSkill('chuanxin');
                                    player.addSkill('zfengshi');
                                }
                                ('step 2');
                                var list = ['longdanliangyinqiang'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        longdan_skill: {
                            equipSkill: true,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard: true,
                            selectCard: 2,
                            position: 'h',
                            viewAs: {
                                name: 'shan',
                            },
                            complexCard: true,
                            filter(event, player) {
                                return player.countCards('h') >= 2;
                            },
                            audio: 'ext:高达宇宙/audio:true',
                            prompt: '将两张手牌当闪使用或打出',
                            check(card) {
                                if ((card.name == 'sha', 'shan')) return 0;
                                return 5 - get.value(card);
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    return player.countCards('h') >= 2;
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order(item) {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) return 3.1;
                                    return 3;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        if (!isLink && player.hasSkill('jiu')) {
                                            if (
                                                !target.hasSkillTag('filterDamage', null, {
                                                    player: player,
                                                    card: card,
                                                    jiu: true,
                                                })
                                            ) {
                                                if (get.attitude(player, target) > 0) {
                                                    return -7;
                                                } else {
                                                    return -4;
                                                }
                                            }
                                            return -0.5;
                                        }
                                        return -1.5;
                                    },
                                    player: 1,
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
                        gd28_shuangji: {
                            charlotte: true,
                            enable: 'phaseUse',
                            usable: 2,
                            audio: 'ext:高达宇宙/audio:2',
                            filterCard: true,
                            fixed: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                var num = [1, 2, 3].randomGet();
                                if (num == 1) {
                                    target.addTempSkill('baiban');
                                    target.damage(3, 'nocard');
                                    player.chat('砸到脚了,淦!');
                                }
                                if (num == 2) {
                                    target.addTempSkill('baiban');
                                    target.damage(4, 'nocard');
                                    player.chat('nice!砸中要害了');
                                }
                                if (num == 3) {
                                    if (target.hp < Infinity) {
                                        var aaa = [2998242135, 1602660195, 2407538329, 1440078720, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 10000, 999, 250, 666, 520, 5201314, 999, 999, 8964, 2333].randomGet();
                                        target.damage(aaa, 'nocard');
                                        player.chat('给爷死!');
                                    } else {
                                        target.die();
                                        player.chat('砸中头了,给爷死!');
                                    }
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target: -1.5,
                                },
                                tag: {
                                    damage: 1,
                                },
                            },
                        },
                        gd28_shiji: {
                            audio: 'ext:高达宇宙/audio:2',
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                return event.player.countCards('hej') >= 0;
                            },
                            content() {
                                'step 0';
                                event.togain = trigger.player.getCards('hej');
                                player.gain(event.togain, trigger.player, 'giveAuto');
                                ('step 1');
                                player.stat.push({ card: {}, skill: {} });
                                ('step 2');
                                var num = game.players.length;
                                player.gainMaxHp(num);
                                player.recover(num);
                            },
                        },
                        gd29_huxiao: {
                            audio: 'huxiao',
                            group: 'gd29_huxiao_buff',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                'step 0';
                                if (!player.storage.gd29_huxiao2) {
                                    player.storage.gd29_huxiao2 = [];
                                }
                                player.storage.gd29_huxiao2.add(trigger.player);
                                trigger.player.clearSkills();
                                ('step 1');
                                trigger.player.addTempSkill('gd29_huxiao3');
                                player.addTempSkill('gd29_huxiao2');
                            },
                            subSkill: {
                                clear: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    _priority: -7,
                                    silent: true,
                                    content() {
                                        delete player.storage.gd29_huxiao;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                buff: {
                                    audio: 'huxiao',
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return event.nature == 'fire';
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        gd29_huxiao2: {
                            mark: true,
                            intro: {
                                content: 'players',
                            },
                            mod: {
                                cardUsableTarget(card, player, target) {
                                    if (player.storage.gd29_huxiao2 && player.storage.gd29_huxiao2.includes(target)) return true;
                                },
                            },
                        },
                        gd29_huxiao3: {
                            charlotte: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            content() {
                                var gd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].randomGet();
                                trigger.num *= gd;
                            },
                        },
                        gd29_xuehen: {
                            audio: 'xueji',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                var player = _status.event.player;
                                return [2, Math.max(2, player.getDamagedHp())];
                            },
                            position: 'he',
                            filterCard: {
                                color: 'red',
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            multitarget: true,
                            multiline: true,
                            fixed: true,
                            charlotte: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                event.delay = false;
                                for (var i = 0; i < targets.length; i++) {
                                    if (!targets[i].isLinked()) {
                                        targets[i].link(true);
                                        event.delay = true;
                                    }
                                }
                                ('step 1');
                                if (event.delay) {
                                }
                                ('step 2');
                                targets[0].damage(2, 'fire', 'nocard');
                            },
                            ai: {
                                damage: true,
                                threaten: 1.5,
                                order: 7,
                                result: {
                                    target(player, target) {
                                        var eff = get.damageEffect(target, player, target, 'fire');
                                        if (target.isLinked()) {
                                            return eff / 10;
                                        } else {
                                            return eff;
                                        }
                                    },
                                },
                            },
                        },
                        gd29_wuji: {
                            audio: 'wuji',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            juexingji: true,
                            derivation: ['gd25_wuhun', 'gd25_wushen'],
                            filter(event, player) {
                                return player.getStat('damage') >= 9 && !player.storage.gd29_wuji;
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp(2);
                                ('step 1');
                                player.recover(2);
                                player.addSkill('gd25_wuhun');
                                player.addSkill('gd25_wushen');
                                ('step 2');
                                player.awakenSkill('gd29_wuji');
                                player.storage.gd29_wuji = true;
                            },
                        },
                        gd30_xingwu: {
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: ['phaseDiscardBegin', 'phaseDrawBegin'],
                                global: 'gameDrawBegin',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                            },
                            init(player) {
                                player.storage.gd30_xingwu = [];
                            },
                            content() {
                                'step 0';
                                player.draw(6);
                                player.chooseCard(5, get.prompt2('gd30_xingwu')).set('ai', function (card) {
                                    var player = _status.event.player;
                                    for (var i = 0; i < player.storage.gd30_xingwu.length; i++) {
                                        if (player.storage.gd30_xingwu[i].suit == card.suit) return 0;
                                    }
                                    if (player.storage.gd30_xingwu.length == 2) {
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return current != player && get.damageEffect(current, player, player) > 0 && get.attitude(player, current) < 0;
                                            })
                                        )
                                            return 0;
                                    }
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (player.storage.gd30_xingwu.length < 2) {
                                        player.$give(result.cards, player, false);
                                    }
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.gd30_xingwu = player.storage.gd30_xingwu.concat(result.cards);
                                    player.markSkill('gd30_xingwu');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var suitlist = [];
                                for (var i = 0; i < player.storage.gd30_xingwu.length; i++) {
                                    if (!suitlist.includes(player.storage.gd30_xingwu[i].suit)) {
                                        suitlist.push(player.storage.gd30_xingwu[i].suit);
                                    }
                                }
                                if (suitlist.length >= 3) {
                                    player
                                        .chooseButton(['请选择要弃置的「星舞」牌', player.storage.gd30_xingwu], true, 3)
                                        .set('filterButton', function (button) {
                                            if (ui.selected.buttons.length) {
                                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                    if (ui.selected.buttons[i].suit == button.link.suit) return false;
                                                }
                                            }
                                            return true;
                                        })
                                        .set('ai', function (button) {
                                            return 1;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.links) {
                                    player.$throw(result.links);
                                    for (var i = 0; i < result.links.length; i++) player.storage.gd30_xingwu.remove(result.links[i]);
                                    game.cardsDiscard(result.links);
                                    if (!player.storage.gd30_xingwu.length) player.unmarkSkill('gd30_xingwu');
                                    player
                                        .chooseTarget(function (card, player, target) {
                                            return target != player;
                                        }, '对一名男/女性角色造成四/两点伤害并弃置其装备区内的牌')
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(player, target) > 0) return -1;
                                            return get.damageEffect(target, player, player) * target.sex == 'male' ? 2 : 1 + target.countCards('e') / 2;
                                        });
                                }
                                ('step 4');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    var num = target.sex == 'male' ? 2 : 1;
                                    var gd = 2 * num;
                                    target.damage(gd);
                                    event.target = target;
                                    player.line(target, 'green');
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (event.target && event.target.isAlive()) {
                                    var es = event.target.getCards('he');
                                    if (es.length) {
                                        event.target.discard(es);
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        gd30_luoyan: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            init(player) {
                                player.storage.gd30_xingwu = []; //QQQ
                            },
                            filter(event, player) {
                                return player.storage.gd30_xingwu.length >= 2;
                            },
                            content() {
                                'step 0';
                                var num = player.storage.gd30_xingwu.length;
                                if (num >= 2) {
                                    return player.addSkill('gd30_luoyan_buff');
                                }
                                ('step 1');
                                var num = player.storage.gd30_xingwu.length;
                                if (num >= 4) {
                                    return player.addSkill('reguose') && player.addSkill('retianxiang') && player.addSkill('yanxiao') && player.addSkill('chujia');
                                }
                                ('step 2');
                                var num = player.storage.gd30_xingwu.length;
                                if (num >= 6) {
                                    return player.addSkill('liuli') && player.addSkill('hongyan') && player.addSkill('anxian') && player.addSkill('zhijie');
                                }
                            },
                            subSkill: {
                                buff: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return Infinity;
                                        },
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        gd30_shuangfei: {
                            audio: 'ext:高达宇宙/audio:2',
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.gd30_xingwu = []; //QQQ
                            },
                            filter(event, player) {
                                return player.storage.gd30_xingwu.length >= 2;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: 2,
                            multitarget: true,
                            multiline: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                var num = player.storage.gd30_xingwu.length;
                                if (num >= 2) {
                                    player
                                        .chooseButton(['请选择要弃置的「星舞」牌', player.storage.gd30_xingwu], true, 2)
                                        .set('filterButton', function (button) {
                                            return true;
                                        })
                                        .set('ai', function (button) {
                                            return 1;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.links) {
                                    player.$throw(result.links);
                                    for (var i = 0; i < result.links.length; i++) player.storage.gd30_xingwu.remove(result.links[i]);
                                    game.cardsDiscard(result.links);
                                    if (!player.storage.gd30_xingwu.length) player.unmarkSkill('gd30_xingwu');
                                }
                                ('step 2');
                                targets[0].clearSkills();
                                targets[0].disableEquip(1);
                                targets[0].disableEquip(2);
                                targets[0].disableEquip(3);
                                targets[0].disableEquip(4);
                                targets[0].disableEquip(5);
                                targets[1].clearSkills();
                                targets[1].disableEquip(1);
                                targets[1].disableEquip(2);
                                targets[1].disableEquip(3);
                                targets[1].disableEquip(4);
                                targets[1].disableEquip(5);
                                ('step 3');
                                if (targets[0].hp == Infinity) {
                                    targets[0].maxHp = 1;
                                    targets[0].update();
                                }
                                if (targets[1].hp == Infinity) {
                                    targets[1].maxHp = 1;
                                    targets[1].update();
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -5,
                                },
                            },
                        },
                        gd31_xiongluan: {
                            audio: 'ext:高达宇宙/audio:2',
                            fixed: true,
                            charlotte: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                if (target.hasSkill('gd31_xiongluan_debuff')) return false;
                                return target != player;
                            },
                            content() {
                                player.disableJudge();
                                player.addTempSkill('gd31_xiongluan_buff');
                                player.storage.gd31_xiongluan_buff = target;
                                target.disableEquip('equip1');
                                target.disableEquip('equip2');
                                target.disableEquip('equip3');
                                target.disableEquip('equip4');
                                target.disableEquip('equip5');
                                target.addTempSkill('gd31_xiongluan_debuff');
                            },
                            subSkill: {
                                buff: {
                                    mod: {
                                        targetInRange(card, player, target) {
                                            if (target.hasSkill('gd31_xiongluan_debuff')) return true;
                                        },
                                        cardUsableTarget(card, player, target) {
                                            if (target.hasSkill('gd31_xiongluan_debuff')) return true;
                                        },
                                    },
                                },
                                debuff: {
                                    mark: true,
                                    firstDo: true,
                                    charlotte: true,
                                    marktext: '雄',
                                    intro: {
                                        content: '不能使用或打出手牌',
                                    },
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
                                },
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -5,
                                },
                            },
                        },
                        gd31_congjian: {
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick' && event.targets.length > 1 && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard: true,
                                    selectCard: 1,
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return player != target && _status.event.targets.includes(target);
                                    },
                                    ai1(card) {
                                        if (card.name == 'du') return 20;
                                        if (_status.event.player.storage.drlt_xiongluan && get.type(card) == 'equip') return 15;
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0.1;
                                            return 1 - att;
                                        }
                                        return att - 3;
                                    },
                                    prompt: get.prompt2('drlt_congjian'),
                                    targets: trigger.targets,
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.line(event.target);
                                    event.target.gain(result.cards[0], player, 'give');
                                    var num = 2;
                                    if (get.type(result.cards[0]) == 'equip') num = 3;
                                    player.draw(num);
                                }
                            },
                        },
                        gd31_baizhan: {
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'shaAfter',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                var list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        gd31_zhenbei: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            forced: true,
                            content() {
                                'step 0';
                                var gd = trigger.num;
                                if (gd <= 2) {
                                    trigger.num--;
                                } else {
                                    trigger.num = 1;
                                }
                                ('step 1');
                                if (event.source == player && event.source == undefined) {
                                    return false;
                                } else {
                                    trigger.source.clearSkills();
                                }
                            },
                        },
                        gd32_dishi: {
                            group: 'gd32_dishi_loseHp',
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'damageBegin',
                            },
                            charlotte: true,
                            forced: true,
                            fixed: true,
                            _priority: 999,
                            content() {
                                var abc = trigger.num;
                                trigger.cancel(abc);
                                player.recover(abc);
                            },
                            subSkill: {
                                loseHp: {
                                    trigger: {
                                        player: 'loseHpBefore',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    fixed: true,
                                    _priority: 999,
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                            },
                        },
                        gd32_fanzhi: {
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                trigger.target = trigger.player;
                                trigger.player = player;
                                trigger.untrigger();
                                trigger.trigger('useCardToBefore');
                            },
                            ai: {
                                result: {
                                    target: -2,
                                    player: 1,
                                },
                            },
                        },
                        gd32_cangjian: {
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return type != 'basic';
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                player.chooseUseTarget('###是否发动〖藏剑〗？###视为使用一张没有距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        gd32_piaomiao: {
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return player.countMark('gd32_piaomiao') >= 0 && event.player != player && event.player.isAlive();
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                player.addMark('gd32_piaomiao');
                                player.chat('年轻人,比武要点到为止');
                                ('step 1');
                                if (trigger.player.hp <= 0) {
                                    event.finish;
                                }
                                ('step 2');
                                if (player.countMark('gd32_piaomiao') >= 3) {
                                    player.removeMark('gd32_piaomiao', 3);
                                    if (trigger.player.hp < Infinity) {
                                        trigger.player.damage(999, 'nocard');
                                        player.chat('意为剑,如箭在弦上,你执意要看,那这一剑,你可看仔细了');
                                    } else {
                                        trigger.player.die();
                                        player.chat('意为剑,如箭在弦上.你执意要看,那这一剑,你可看仔细了');
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            marktext: '剑',
                            intro: {
                                name: '飘渺剑法',
                                content: '已凝聚#道剑意',
                            },
                        },
                        gd33_fankui: {
                            audio: 'ext:高达宇宙/audio:2',
                            fixed: true,
                            charlotte: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event.source == player) return false;
                                if (event.source == undefined) return false;
                                return true;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.draw(3);
                                if (trigger.source) {
                                    var gd = [1, 2, 3].randomGet();
                                    player.line(trigger.source, 'gold');
                                    player.gainPlayerCard('选择获得其至多三张牌', trigger.source, 'hej', [1, 3]);
                                    player.line(trigger.source, 'fire');
                                    trigger.source.damage(gd);
                                }
                                ('step 1');
                                var ab = trigger.num;
                                var abc = 6 * ab;
                                player.addMark('gd33_fankui', abc);
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            ai: {
                                maixie_defend: true,
                                expose: 0.4,
                            },
                            marktext: '馈',
                            intro: {
                                content: '已获得#枚馈',
                            },
                        },
                        gd33_guicai: {
                            audio: 'ext:高达宇宙/audio:2',
                            group: 'gd33_guicai_buff',
                            trigger: {
                                global: 'judge',
                            },
                            fixed: true,
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                return player.num('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.draw(3);
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('gd33_guicai'), 'he')
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
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
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
                                    trigger.player.judging[0] = result.cards[0];
                                    if (!get.owner(result.cards[0], 'judge')) {
                                        trigger.position.appendChild(result.cards[0]);
                                    }
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                            },
                            subSkill: {
                                buff: {
                                    filter(event, player) {
                                        return player.countMark('gd33_fankui') >= 3;
                                    },
                                    enable: 'phaseUse',
                                    content() {
                                        'step 0';
                                        player.removeMark('gd33_fankui', 3);
                                        player.draw();
                                        player.recover();
                                    },
                                },
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        gd33_tanlang: {
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('gd33_tanlang'), lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    var list = [];
                                    if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                                    if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                                    if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                                    list = list.filter(function (i) {
                                        return !player.hasSkill(i);
                                    });
                                    if (!list.length) return 0;
                                    return -2;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.clearSkills();
                                    var list = [];
                                    if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                                    if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                                    if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                                    player.addSkill(list);
                                }
                            },
                        },
                        gd33_tuntian: {
                            audio: 'ext:高达宇宙/audio:2',
                            juexingji: true,
                            derivation: ['rejizhi', 'gd44_zhiheng', 'wansha', 'refangzhu', 'lianpo'],
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'damageBegin'],
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.countMark('gd33_fankui') >= 11;
                            },
                            content() {
                                player.gainMaxHp(3);
                                player.addSkill('rejizhi');
                                player.addSkill('gd44_zhiheng');
                                player.addSkill('wansha');
                                player.addSkill('refangzhu');
                                player.addSkill('lianpo');
                                player.awakenSkill('gd33_tuntian');
                            },
                        },
                        gd34_fanghun: {
                            audio: 'ext:高达宇宙/audio:2',
                            inherit: 'gd34_fanghun',
                            trigger: {
                                player: 'useCardBegin',
                                global: 'useCardBegin',
                            },
                            marktext: '影',
                            intro: {
                                content: 'mark',
                                name: '梅影',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                player.addMark('gd34_fanghun', trigger.num || 1);
                                player.addMark('gd34_fanghun2', trigger.num || 1, false);
                            },
                            group: ['gd34_fanghun_sha', 'gd34_fanghun_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'gd34_fanghun_sha' || event.skill == 'gd34_fanghun_shan';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                sha: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    prompt: '弃置一枚【梅影】标记,将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
                                    viewAs(cards, player) {
                                        var name = false;
                                        switch (cards[0]?.name) {
                                            case 'sha':
                                                name = 'shan';
                                                break;
                                            case 'shan':
                                                name = 'sha';
                                                break;
                                            case 'tao':
                                                name = 'jiu';
                                                break;
                                            case 'jiu':
                                                name = 'tao';
                                                break;
                                        }
                                        if (name) return { name: name };
                                        return null;
                                    },
                                    check(card) {
                                        var player = _status.event.player;
                                        if (_status.event.type == 'phase') {
                                            var max = 0;
                                            var name2;
                                            var list = ['sha', 'tao', 'jiu'];
                                            var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                            for (var i = 0; i < list.length; i++) {
                                                var name = list[i];
                                                if (player.countCards('h', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                    var temp = get.order({ name: name });
                                                    if (temp > max) {
                                                        max = temp;
                                                        name2 = map[name];
                                                    }
                                                }
                                            }
                                            if (name2 == card.name) return 1;
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    filterCard(card, player, event) {
                                        event = event || _status.event;
                                        var filter = event._backup.filterCard;
                                        var name = card.name;
                                        if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                        if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
                                        if (name == 'tao' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                                        if (name == 'jiu' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                        return false;
                                    },
                                    filter(event, player) {
                                        if (!player.storage.gd34_fanghun || player.storage.gd34_fanghun < 0) return false;
                                        var filter = event.filterCard;
                                        if (filter({ name: 'sha' }, player, event) && player.countCards('h', 'shan')) return true;
                                        if (filter({ name: 'shan' }, player, event) && player.countCards('h', 'sha')) return true;
                                        if (filter({ name: 'tao' }, player, event) && player.countCards('h', 'jiu')) return true;
                                        if (filter({ name: 'jiu' }, player, event) && player.countCards('h', 'tao')) return true;
                                        return false;
                                    },
                                    onrespond() {
                                        return this.onuse.apply(this, arguments);
                                    },
                                    onuse(result, player) {
                                        player.removeMark('gd34_fanghun', 1);
                                    },
                                    ai: {
                                        respondSha: true,
                                        respondShan: true,
                                        save: true,
                                        skillTagFilter(player, tag) {
                                            if (!player.storage.gd34_fanghun || player.storage.gd34_fanghun < 0) return false;
                                            var name;
                                            switch (tag) {
                                                case 'respondSha':
                                                    name = 'shan';
                                                    break;
                                                case 'respondShan':
                                                    name = 'sha';
                                                    break;
                                                case 'save':
                                                    name = 'jiu';
                                                    break;
                                            }
                                            if (!player.countCards('h', name)) return false;
                                        },
                                        order(item, player) {
                                            if (player && _status.event.type == 'phase') {
                                                var max = 0;
                                                var list = ['sha', 'tao', 'jiu'];
                                                var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                                for (var i = 0; i < list.length; i++) {
                                                    var name = list[i];
                                                    if (player.countCards('h', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                        var temp = get.order({ name: name });
                                                        if (temp > max) max = temp;
                                                    }
                                                }
                                                if (max > 0) max += 0.3;
                                                return max;
                                            }
                                            return 4;
                                        },
                                    },
                                },
                            },
                        },
                        gd34_fuhan: {
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.countMark('gd34_fanghun') > 0;
                            },
                            content() {
                                'step 0';
                                var gd = player.storage.gd34_fanghun;
                                if (player.storage.gd34_fanghun) player.draw(gd);
                                if (player.storage.gd34_fanghun) player.gainMaxHp(gd);
                                if (player.storage.gd34_fanghun) player.recover(gd);
                                player.removeMark('gd34_fanghun', player.storage.gd34_fanghun);
                                ('step 0');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'shu') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'shu';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'shu';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                // var dialog=ui.create.dialog();
                                // dialog.add([list.randomGets(5),'character']);
                                player
                                    .chooseButton(true)
                                    .set('ai', function (button) {
                                        return get.rank(button.link, true) - lib.character[button.link][2];
                                    })
                                    .set('createDialog', ['获得一张武将牌上的所有技能', [list.randomGets(gd), 'character']]);
                                ('step 1');
                                player.addSkill(lib.character[result.links[0]][3]);
                                player.flashAvatar('refuhan', result.links[0]);
                                game.log(player, '获得了', '#g' + get.translation(result.links[0]), '的所有技能');
                            },
                        },
                        gd34_dunyi: {
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                global: 'phaseDrawBefore',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isAlive();
                            },
                            fixed: true,
                            charlotte: true,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                var num = trigger.player.countCards('h');
                                if (num > 0) {
                                    player.removeMark('gd34_fanghun', num);
                                    trigger.player.damage('nocard');
                                } else {
                                    trigger.player.damage('nocard');
                                }
                            },
                            ai: {
                                order: 4.2,
                                result: {
                                    target: -3,
                                    player: 1,
                                },
                            },
                        },
                        gd34_huodi: {
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            fixed: true,
                            charlotte: true,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isAlive() && !event.player.hasSkill('gd34_huodi_debuff');
                            },
                            content() {
                                var num = trigger.player.countCards('h');
                                if (num > 0) {
                                    player.removeMark('gd34_fanghun', num);
                                    trigger.player.addSkill('nouse_debuff');
                                } else {
                                    trigger.player.addSkill('nouse_debuff');
                                }
                            },
                        },
                        nouse_debuff: {
                            mark: true,
                            intro: {
                                content: '玉玉症犯了,自闭了捏',
                            },
                            forced: true,
                            charlotte: true,
                            popup: false,
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
                            ai: {
                                threaten: 10,
                            },
                        },
                        gd35_zenhui: {
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                if (event.targets.length > 1) return false;
                                var card = event.card;
                                if (card.name == 'wuzhong') return false;
                                if (card.name == 'kaihua') return false;
                                if (card.name == 'sha' || get.type(card) == 'trick') return true;
                                return false;
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                var num = [3, 4, 5].randomGet();
                                player.draw(num);
                                player
                                    .chooseTarget(get.prompt2('gd35_zenhui'), function (card, player, target) {
                                        if (player == target) return false;
                                        var trigger = _status.event;
                                        return player.canUse(trigger.card, target, false) && trigger.targets.includes(target) == false;
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player) + 0.01;
                                    })
                                    .set('targets', trigger.targets)
                                    .set('card', trigger.card);
                                ('step 1');
                                if (result.bool) {
                                    //game.delay(0,200);
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.target.chooseCard('交给' + get.translation(player) + '一张手牌并失去一点体力,或成为' + get.translation(trigger.card) + '的额外目标并受到一点伤害').set('ai', function (card) {
                                    return 5 - get.value(card);
                                });
                                ('step 3');
                                if (result.bool) {
                                    player.gain(result.cards, event.target, 'giveAuto');
                                    target.loseHp();
                                    trigger.untrigger();
                                    trigger.parent.player = event.target;
                                    game.log(event.target, '成为了', trigger.card, '的使用者');
                                } else {
                                    game.log(event.target, '成为了', trigger.card, '的额外目标');
                                    target.damage();
                                    trigger.parent.targets.push(event.target);
                                    player.addTempSkill('rechanhui2');
                                }
                            },
                        },
                        gd35_jiaojin: {
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return (event.card.name == 'sha' || get.type(event.card) == 'trick') && event.player != player && player.countCards('hej') > 0;
                            },
                            fixed: true,
                            charlotte: true,
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('hej', '骄矜:是否弃置一张牌令' + get.translation(trigger.card) + '对你无效？');
                                next.set('ai', function (card) {
                                    if (_status.event.goon2) {
                                        return 3 + _status.event.val - get.value(card);
                                    }
                                    return 0;
                                });
                                next.set('val', get.value(trigger.cards.filterInD()));
                                next.set('goon2', get.effect(player, trigger.card, trigger.player, player) < 0);
                                ('step 1');
                                if (result.bool) {
                                    var cards = trigger.cards.filterInD();
                                    if (cards.length) player.gain(cards, 'gain2', 'log');
                                    trigger.excluded.push(player);
                                }
                            },
                        },
                        gd35_meibu: {
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isAlive() && player.countCards('hej') > 0;
                            },
                            fixed: true,
                            charlotte: true,
                            forced: true,
                            derivation: ['gd35_zhixi'],
                            checkx(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                                var e2 = player.getEquip(2);
                                if (e2) {
                                    if (e2.name == 'tengjia') return true;
                                    if (e2.name == 'bagua') return true;
                                }
                                return event.player.countCards('hej') > event.player.hp;
                            },
                            content() {
                                'step 0';
                                var check = lib.skill.gd35_meibu.checkx(trigger, player);
                                player
                                    .chooseToDiscard(get.prompt2('gd35_meibu', trigger.player), 'hej')
                                    .set('ai', function (card) {
                                        if (_status.event.check) return 6 - get.value(card);
                                        return 0;
                                    })
                                    .set('check', check)
                                    ('step 1');
                                if (result.bool) {
                                    var target = trigger.player;
                                    var card = result.cards[0];
                                    player.line(target, 'green');
                                    target.addTempSkill('gd35_zhixi', 'phaseUseEnd');
                                    var num = [3, 4, 5].randomGet();
                                    player.draw(num);
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        gd35_mumu: {
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('gd35_mumu'), '弃置一名角色装备区内的一张牌,或者获得一名角色装备区内的防具牌', function (card, player, target) {
                                        if (target == player) return target.getEquip(2) != undefined;
                                        return target.countCards('e') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (target.getEquip(2) && player.isEmpty(2)) {
                                            return -2 * att;
                                        }
                                        return -att;
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    event.target = result.targets[0];
                                    player.line(event.target, 'green');
                                    var e = event.target.getEquip(2);
                                    event.e = e;
                                    if (target == player) event.choice = '获得一张防具牌';
                                    else if (e) {
                                        player.chooseControl('弃置一张装备牌', '获得一张防具牌').set('ai', function () {
                                            if (_status.event.player.getEquip(2)) {
                                                return '弃置一张装备牌';
                                            }
                                            return '获得一张防具牌';
                                        });
                                    } else {
                                        event.choice = '弃置一张装备牌';
                                    }
                                } else event.finish();
                                ('step 2');
                                var choice = event.choice || result.control;
                                if (choice == '弃置一张装备牌') {
                                    player.discardPlayerCard(event.target, 'e', true);
                                } else {
                                    if (event.e) {
                                        player.gain(event.e, event.target, 'give');
                                    }
                                }
                            },
                        },
                        gd35_dahu: {
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'dyingBegin',
                            },
                            fixed: true,
                            charlotte: true,
                            forceDie: true,
                            content() {
                                'step 0';
                                player.chooseBool('是否将自己的一张武将牌替换为<高达大虎号>?');
                                ('step 1');
                                if (result.bool) {
                                    if (player != undefined) {
                                        player.chooseControl(player.name1, player.name2).set('prompt', '请选择要更换的武将牌');
                                    } else event._result = { control: player.name1 };
                                } else event.goto(2);
                                ('step 2');
                                player.reinit(result.control, 'gddhh');
                                if (_status.characterlist) {
                                    _status.characterlist.add(result.control);
                                    _status.characterlist.remove('gddhh');
                                }
                                ('step 3');
                                player.draw(4);
                                player.hp = player.maxHp;
                                player.update();
                            },
                        },
                        gd35_xiaohu: {
                            audio: 'ext:高达宇宙/audio:1',
                            trigger: {
                                player: 'dyingBegin',
                            },
                            fixed: true,
                            charlotte: true,
                            forceDie: true,
                            content() {
                                'step 0';
                                player.chooseBool('是否将自己的一张武将牌替换为<高达小虎号>?');
                                ('step 1');
                                if (result.bool) {
                                    if (player != undefined) {
                                        player.chooseControl(player.name1, player.name2).set('prompt', '请选择要更换的武将牌');
                                    } else event._result = { control: player.name1 };
                                } else event.goto(2);
                                ('step 2');
                                player.reinit(result.control, 'gdxhh');
                                if (_status.characterlist) {
                                    _status.characterlist.add(result.control);
                                    _status.characterlist.remove('gdxhh');
                                }
                                ('step 3');
                                player.draw(4);
                                player.hp = player.maxHp;
                                player.update();
                            },
                        },
                        gd35_zhixi: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            charlotte: true,
                            content() {
                                player.chooseToDiscard('h', true);
                                player.loseHp();
                            },
                            ai: { presha: true, pretao: true, nokeep: true },
                        },
                        gd35_gongxin: {
                            audio: 'ext:高达宇宙/audio:4',
                            charlotte: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            fixed: true,
                            filter(event, player) {
                                return event.source != undefined && event.source != player;
                            },
                            content() {
                                'step 0';
                                trigger.source.clearSkills();
                                ('step 1');
                                var num = [3, 4, 5].randomGet();
                                trigger.source.chooseToDiscard(num, 'he', true).delay = false;
                            },
                            group: ['gd35_dahu', 'gd35_xiaohu'],
                        },
                        gd36_jijun: {
                            group: ['gd36_jijun_lei'],
                            audio: 'ext:高达宇宙/audio:2',
                            inherit: 'gd36_jijun',
                            trigger: {
                                player: 'useCardBegin',
                                global: 'useCardBegin',
                            },
                            marktext: '方',
                            intro: {
                                content: 'mark',
                                name: '方统',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                player.addMark('gd36_jijun');
                            },
                            subSkill: {
                                lei: {
                                    audio: 'ext:高达宇宙/audio:1',
                                    trigger: {
                                        player: 'useCardEnd',
                                        global: 'useCardEnd',
                                    },
                                    filter(event, player) {
                                        var numa = Math.random();
                                        return numa < 0.36;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.player.damage(1, 'thunder');
                                        player.chat('三十六方,雷电烁');
                                    },
                                },
                            },
                        },
                        gd36_fangtong: {
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            filter(event, player) {
                                return player.countMark('gd36_jijun') >= 36 && player != event.player && event.player.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            fixed: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                player.removeMark('gd36_jijun', 6);
                                ('step 1');
                                trigger.player.damage(Infinity, 'thunder');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target: -1,
                                    player: 1,
                                },
                            },
                        },
                        gd36_leiji: {
                            audio: 'ext:高达宇宙/audio:2',
                            fixed: true,
                            charlotte: true,
                            group: ['gd36_leiji_player', 'gd36_leiji_source'],
                            subSkill: {
                                player: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return event.nature == 'thunder';
                                    },
                                    forced: true,
                                    content() {
                                        var abc = trigger.num;
                                        trigger.cancel(abc);
                                        player.changeHujia(abc);
                                    },
                                    ai: {
                                        nofire: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'thunderDamage')) return 'zerotarget';
                                            },
                                        },
                                    },
                                },
                                source: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    filter(event, player) {
                                        if (event.nature == 'thunder') return true;
                                    },
                                    forced: true,
                                    content() {
                                        var abc = trigger.num;
                                        player.draw(2);
                                        player.changeHujia(abc);
                                    },
                                },
                            },
                        },
                        gd36_guishu: {
                            audio: 'ext:高达宇宙/audio:1',
                            group: ['gd36_guishu_dying'],
                            trigger: {
                                player: 'phaseEnd',
                            },
                            prompt2: '是否移去全部护甲并获得一个新的回合？',
                            filter(event, player) {
                                return player.hujia > 0;
                            },
                            check(event, player) {
                                return player.hujia >= 1 && player.hp >= 1 && player.hujia <= Infinity;
                            },
                            fixed: true,
                            charlotte: true,
                            content() {
                                player.changeHujia(-player.hujia);
                                player.phase('nodelay');
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                dying: {
                                    trigger: {
                                        global: 'dyingBegin',
                                    },
                                    filter(event, player) {
                                        return player.hujia > 0;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    prompt2: '是否移去一点护甲令其回复其最大体力值的体力？',
                                    charlotte: true,
                                    fixed: true,
                                    content() {
                                        'step 0';
                                        player.changeHujia(-1);
                                        ('step 1');
                                        var num = trigger.player.maxHp;
                                        trigger.player.recover(num);
                                    },
                                },
                            },
                        },
                        gd37_wenji: {
                            audio: 'ext:高达宇宙/audio:2',
                            enable: 'phaseUse',
                            usable: 7,
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('gd37_wenji'), function (card, player, target) {
                                        return (target != player && target.countCards('he')) || !target.hasSkill('gd37_wenji');
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return Math.sqrt(att) / 10;
                                        return 1 - att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.chooseCard('he', '将一张牌交给' + get.translation(player));
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.addTempSkill('gd37_wenji_respond');
                                    player.storage.gd37_wenji_respond = result.cards[0].name;
                                    event.target.give(result.cards, player, true);
                                }
                                ('step 3');
                                var list = target.getStockSkills(true, true).filter(function (skill) {
                                    var info = get.info(skill);
                                    return info;
                                });
                                if (!list.length) event._result = { control: list[0] };
                                else
                                    target
                                        .chooseControl(list)
                                        .set('prompt', '选择令' + get.translation(player) + '获得一个技能')
                                        .set('ai', function () {
                                            return list.randomGet();
                                        });
                                ('step 4');
                                player.addSkillLog(result.control);
                                game.broadcastAll(function (skill) {
                                    var list = [skill];
                                    game.expandSkills(list);
                                    for (var i of list) {
                                        var info = lib.skill[i];
                                        if (!info) continue;
                                    }
                                }, result.control);
                            },
                            subSkill: {
                                respond: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    audio: 'spwenji',
                                    filter(event, player) {
                                        return event.card.name == player.storage.gd37_wenji_respond;
                                    },
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current != player;
                                            })
                                        );
                                    },
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                    target: -1,
                                },
                            },
                        },
                        gd37_tunjiang: {
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            charlotte: true,
                            forced: true,
                            fixed: true,
                            content() {
                                player.draw(game.countGroup());
                            },
                        },
                        gd37_jijie: {
                            forced: true,
                            silent: true,
                            fixed: true,
                            charlotte: true,
                            derivation: ['gd37_jijie2'],
                            trigger: {
                                global: 'phaseUseBefore',
                            },
                            filter(event, player) {
                                return event.player != player && !event.player.hasSkill('gd37_jijie2');
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('刘表', '刘备', '诸葛亮', '蔡夫人', '关羽', '取消').set('prompt', '选择令' + get.translation(trigger.player) + '变更为的武将,或点取消不操作').ai = function () {
                                    if (get.attitude(player, trigger.player) <= 0) return '蔡夫人';
                                    else return '取消';
                                };
                                ('step 1');
                                var target = trigger.player;
                                if (result.control == '取消') {
                                    event.finish();
                                }
                                if (result.control == '刘表') {
                                    target.uninit;
                                    target.init('re_liubiao');
                                    player.draw(game.countGroup());
                                    target.addSkill('gd37_jijie2');
                                }
                                if (result.control == '刘备') {
                                    target.uninit;
                                    target.init('re_liubei');
                                    player.draw(game.countGroup());
                                    target.addSkill('gd37_jijie2');
                                }
                                if (result.control == '诸葛亮') {
                                    target.uninit;
                                    target.init('re_zhugeliang');
                                    player.draw(game.countGroup());
                                    target.addSkill('gd37_jijie2');
                                }
                                if (result.control == '蔡夫人') {
                                    target.uninit;
                                    target.init('re_caifuren');
                                    player.draw(game.countGroup());
                                    target.addSkill('gd37_jijie2');
                                }
                                if (result.control == '关羽') {
                                    target.uninit;
                                    target.init('re_guanyu');
                                    player.draw(game.countGroup());
                                    target.addSkill('gd37_jijie2');
                                }
                            },
                        },
                        gd37_jijie2: {
                            charlotte: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            mark: true,
                            intro: {
                                content: '当你使用牌时,高达卅七号摸一张牌并增加一点护甲',
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current.name != 'gd37h') return false;
                                    current.draw();
                                    current.changeHujia();
                                    return true;
                                });
                            },
                        },
                        gd38_zhenjun: {
                            group: ['gd38_zhenjun_sha', 'gd38_zhenjun_damage'],
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('he') > 0;
                                });
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                player.chooseTarget('你可以弃置一名角色所有牌,你与其各摸一张牌.').ai = function (target) {
                                    return -get.attitude(_status.event.player, target) * (target.countCards('e') + 1);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    var num = target.countCards('he');
                                    player.discardPlayerCard(num, target, true);
                                }
                                ('step 2');
                                player.draw(1);
                                event.target.draw(1);
                            },
                            subSkill: {
                                sha: {
                                    audio: true,
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('he') > 0;
                                    },
                                    prompt2: '你可以将一张牌交给一名其他角色,令其选择是否使用一张不为黑色的【杀】.若其选择是,则你于此【杀】结算完成后摸1+X张牌(X为此【杀】造成的伤害总点数).若其选择否,则你对其或其攻击范围内的一名其他角色造成3点伤害',
                                    content() {
                                        'step 0';
                                        player.chooseCardTarget({
                                            filterCard: true,
                                            filterTarget: lib.filter.notMe,
                                            position: 'he',
                                            prompt: get.prompt2('xinzhenjun'),
                                            ai1(card) {
                                                var player = _status.event.player;
                                                if (card.name == 'sha' && get.color(card) == 'red') {
                                                    for (var i = 0; i < game.players.length; i++) {
                                                        var current = game.players[i];
                                                        if (current != player && get.attitude(player, current) > 0 && current.hasValueTarget(card)) return 7;
                                                    }
                                                    return 0;
                                                }
                                                return 7 - get.value(card);
                                            },
                                            ai2(target) {
                                                var player = _status.event.player;
                                                var card = ui.selected.cards[0];
                                                var att = get.attitude(player, target);
                                                if (get.value(card) < 0) return -att * 2;
                                                if (target.countCards('h', { name: 'sha', color: 'red' }) || target.hasSkill('wusheng') || target.hasSkill('new_rewusheng') || target.hasSkill('wushen') || (card.name == 'sha' && get.color(card) == 'red' && target.hasValueTarget(card))) return att * 2;
                                                var eff = 0;
                                                game.countPlayer(function (current) {
                                                    if (target != current && get.distance(target, current, 'attack') > 1) return;
                                                    var eff2 = get.damageEffect(current, player, player);
                                                    if (eff2 > eff) eff = eff2;
                                                });
                                                if (att > 0 && eff > 0) eff += 2 * att;
                                                return eff;
                                            },
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            event.target = target;
                                            target.gain(result.cards, player, 'giveAuto');
                                        } else event.finish();
                                        ('step 2');
                                        target.chooseToUse({
                                            filterCard(card) {
                                                return card.name == 'sha' && get.color(card) != 'black' && lib.filter.cardEnabled.apply(this, arguments);
                                            },
                                            prompt: '请使用一张不为黑色的【杀】,否则' + get.translation(player) + '可以对你或你攻击范围内的一名其他角色造成3点伤害',
                                        });
                                        ('step 3');
                                        if (result.bool) {
                                            var num = 1;
                                            game.countPlayer2(function (current) {
                                                current.getHistory('damage', function (evt) {
                                                    if (evt.getParent(evt.notLink() ? 4 : 8) == event) num += evt.num;
                                                });
                                            });
                                            player.draw(num);
                                            event.finish();
                                        } else {
                                            player
                                                .chooseTarget('是否对' + get.translation(target) + '或其攻击范围内的一名角色造成3点伤害？', function (card, player, target) {
                                                    return target == _status.event.targetx || _status.event.targetx.inRange(target);
                                                })
                                                .set('targetx', event.target).ai = function (target) {
                                                    var player = _status.event.player;
                                                    return get.damageEffect(target, player, player);
                                                };
                                        }
                                        ('step 4');
                                        if (result.bool) {
                                            player.line(result.targets);
                                            result.targets[0].damage(3, 'nocard');
                                        }
                                    },
                                },
                                damage: {
                                    trigger: {
                                        global: 'damage',
                                    },
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        var evt = event.getParent(event.notLink() ? 4 : 8);
                                        return evt && evt.name == 'gd38_zhenjun' && evt.player == player;
                                    },
                                    content() {
                                        player.draw(trigger.num);
                                    },
                                },
                            },
                        },
                        gd38_yizhong: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            audio: 'ext:高达宇宙/audio:2',
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                if (get.color(event.card) != 'black') return false;
                                return event.player != player;
                            },
                            content() {
                                trigger.parent.excluded.add(player);
                            },
                            ai: {
                                nodamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.color(card, 'red')) return [0, 0];
                                    },
                                },
                            },
                        },
                        gd38_zhengyi: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.num('h') == player.hp && _status.currentPhase == player && !player.hasSkill('gd38_zhengyi_buff');
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:2',
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, true);
                                ('step 1');
                                player.addTempSkill('gd38_zhengyi_buff');
                            },
                            subSkill: {
                                buff: {
                                    mark: true,
                                    marktext: '整',
                                    intro: {
                                        content: '你使用牌无距离和次数限制,且当你造成伤害后,你摸X张牌(X为伤害数值的两倍)',
                                    },
                                    mod: {
                                        targetInRange(card, player, target) {
                                            return true;
                                        },
                                        cardUsableTarget(card, player, target) {
                                            return true;
                                        },
                                    },
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        event.num = Math.min(trigger.num, 9);
                                        var adc = 2 * event.num;
                                        player.draw(adc);
                                    },
                                },
                            },
                        },
                        gd38_jieyue: {
                            group: ['gd38_jieyue_pai', 'gd38_jieyue_wuxie', 'gd38_jieyue_shan'],
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    prompt: get.prompt2('gd38_jieyue'),
                                    filterCard: true,
                                    position: 'he',
                                    filterTarget: lib.filter.notMe,
                                    ai1(card) {
                                        var player = _status.event.player;
                                        if (card.name == 'du') return 20;
                                        if (get.position(card) == 'e' && get.value(card) <= 0) return 14;
                                        if (
                                            get.position(card) == 'h' &&
                                            game.hasPlayer(function (current) {
                                                return current != player && get.attitude(player, current) > 0 && current.getUseValue(card) > player.getUseValue(card) && current.getUseValue(card) > player.getUseValue(card);
                                            })
                                        )
                                            return 12;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && get.attitude(player, current) > 0;
                                            })
                                        ) {
                                            if (card.name == 'wuxie') return 11;
                                            if (card.name == 'shan' && player.countCards('h', 'shan') > 1) return 9;
                                        }
                                        return 6 / Math.max(1, get.value(card));
                                    },
                                    ai2(target) {
                                        var player = _status.event.player;
                                        var card = ui.selected.cards[0];
                                        var att = get.attitude(player, target);
                                        if (card.name == 'du') return -6 * att;
                                        if (att > 0) {
                                            if (get.position(card) == 'h' && target.getUseValue(card) > player.getUseValue(card)) return 4 * att;
                                            if (get.value(card, target) > get.value(card, player)) return 2 * att;
                                            return 1.2 * att;
                                        }
                                        return (-att * Math.min(4, target.countCards('he'))) / 4;
                                    },
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.gain(result.cards, player, 'giveAuto');
                                } else event.finish();
                                ('step 2');
                                var num = 0;
                                if (target.countCards('h')) num++;
                                if (target.countCards('e')) num++;
                                if (num > 0) {
                                    var next = target.chooseCard('he', num, '选择保留每个区域的各一张牌,弃置其余的牌并失去一点体力上限.或点取消,令' + get.translation(player) + '摸三张牌', function (card) {
                                        for (var i = 0; i < ui.selected.cards.length; i++) {
                                            if (get.position(ui.selected.cards[i]) == get.position(card)) return false;
                                        }
                                        return true;
                                    });
                                    next.set('complexCard', true);
                                    next.set('goon', get.attitude(target, player) >= 0);
                                    next.set('maxNum', num);
                                    next.set('ai', function (card) {
                                        if (_status.event.goon) return -1;
                                        var num = _status.event.maxNum;
                                        if (ui.selected.cards.length >= num - 1) {
                                            var val = get.value(
                                                player.getCards('he', function (cardx) {
                                                    return cardx != card && !ui.selected.cards.includes(cardx);
                                                })
                                            );
                                            if (val >= 14) return 0;
                                        }
                                        return get.value(card);
                                    });
                                } else event._result = { bool: false };
                                ('step 3');
                                if (!result.bool) player.draw(4);
                                else {
                                    var cards = target.getCards('he');
                                    cards.removeArray(result.cards);
                                    if (cards.length) target.discard(cards);
                                    target.loseMaxHp();
                                }
                            },
                            subSkill: {
                                pai: {
                                    audio: 'ext:高达宇宙/audio:2',
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.player.countCards('h') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.chooseCard('交给' + get.translation(player) + '一张手牌', true).ai = function (card) {
                                            if (get.attitude(trigger.player, player) > 0) {
                                                return get.value(card);
                                            } else {
                                                return -get.value(card);
                                            }
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(result.cards[0]);
                                            trigger.player.$give(1, player);
                                        }
                                        player.discardPlayerCard(trigger.player, false);
                                    },
                                },
                                wuxie: {
                                    mark: 'card',
                                    intro: {
                                        content: 'card',
                                    },
                                    enable: 'chooseToUse',
                                    filterCard(card) {
                                        return get.color(card) == 'black';
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('h', { color: 'black' }) > 0;
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    prompt: '将一张黑色手牌当无懈可击使用',
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    ai3: {
                                        basic: {
                                            useful: [6, 4],
                                            value: [6, 4],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                        expose: 0.2,
                                    },
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
                                },
                                shan: {
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard(card) {
                                        return get.color(card) == 'red';
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('h', { color: 'red' })) return false;
                                    },
                                    prompt: '将一张红色手牌当闪使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    ai4: {
                                        order: 3,
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                    ai: {
                                        order: 3,
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                            ai: {
                                threaten: 1.3,
                                expose: 0.2,
                            },
                        },
                        gd39_tianjiang: {
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                var i = 0;
                                var list = [];
                                while (i++ < 2) {
                                    var card = get.cardPile(function (card) {
                                        if (get.type(card) != 'equip' || get.cardtag(card, 'gifts')) return false;
                                        return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                    });
                                    if (card) list.push(card);
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                event.list = list;
                                player.gain(event.list, 'gain2');
                                ('step 1');
                                var card = event.list.shift();
                                if (player.getCards('h').includes(card)) {
                                    player.$give(card, player, false);
                                    player.equip(card);
                                }
                                if (event.list.length) event.redo();
                            },
                            group: 'gd39_tianjiang_move',
                            subSkill: {
                                move: {
                                    popup: false,
                                    enable: 'phaseUse',
                                    position: 'e',
                                    filter(event, player) {
                                        return player.countCards('e') > 0;
                                    },
                                    check() {
                                        return 1;
                                    },
                                    filterCard: true,
                                    filterTarget(event, player, target) {
                                        return target != player && target.canEquip(ui.selected.cards[0], true);
                                    },
                                    prepare: 'give',
                                    discard: false,
                                    lose: false,
                                    content() {
                                        target.equip(cards[0]);
                                        if (cards[0].name.indexOf('pyzhuren_') == 0) player.draw(2);
                                    },
                                    ai: {
                                        order: 11,
                                        result: {
                                            target(player, target) {
                                                if (ui.selected.cards.length) {
                                                    var card = ui.selected.cards[0];
                                                    if (target.getEquip(card) || target.countCards('h', { subtype: get.subtype(card) })) return 0;
                                                    return get.effect(target, card, player, target);
                                                }
                                                return 0;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        gd39_zhuren: {
                            audio: 'ext:高达宇宙/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            fixed: true,
                            charlotte: true,
                            selectCard: 1,
                            check(card) {
                                var player = _status.event.player;
                                var name = 'pyzhuren_' + card[card.name == 'shandian' ? 'name' : 'suit'];
                                if (!lib.card[name] || (_status.pyzhuren && _status.pyzhuren[name])) {
                                    if (!player.countCards('h', 'sha')) return 4 - get.value(card);
                                    return 0;
                                }
                                return 7 - get.value(card);
                            },
                            content() {
                                if (!_status.pyzhuren) _status.pyzhuren = {};
                                var rand = 0.85;
                                var num = cards[0].number;
                                if (num > 4) rand = 0.9;
                                if (num > 8) rand = 0.95;
                                if (num > 12 || cards[0].name == 'shandian' || get.isLuckyStar(player)) rand = 1;
                                var name = 'pyzhuren_' + cards[0][cards[0].name == 'shandian' ? 'name' : 'suit'];
                                if (!lib.card[name] || _status.pyzhuren[name] || Math.random() > rand) {
                                    player.popup('杯具');
                                    game.log(player, '锻造失败');
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                } else {
                                    _status.pyzhuren[name] = true;
                                    player.gain(game.createCard(name, cards[0].name == 'shandian' ? 'spade' : cards[0].suit, 1), 'gain2');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        gd39_jiangxin: {
                            trigger: {
                                global: 'equipEnd',
                            },
                            audio: 'ext:高达宇宙/audio:1',
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            logTarget: 'player',
                            filter(event, player) {
                                var card = event.card;
                                if (card.name == 'wufengjian' || card.name == 'nvzhuang' || card.name == 'yinfengjia' || card.name == 'zheji' || card.name == 'muniu' || card.name == 'jinhe' || card.name == 'numa') return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var card = get.cardPile(function (card) {
                                    if (get.type(card) != 'equip' || get.cardtag(card, 'gifts')) return false;
                                    return true;
                                });
                                ('step 1');
                                var info = get.info(trigger.card);
                                if (info.skills) {
                                    player.addAdditionalSkill('gd39_jiangxin', info.skills, true);
                                }
                            },
                            group: ['gd39_jiangxin_clear'],
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'equipAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.stat.push({ card: {}, skill: {} });
                                    },
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip') return 0.1;
                                    },
                                },
                            },
                        },
                        gd39_xiaoren: {
                            audio: 'ext:高达宇宙/audio:1',
                            enable: 'phaseUse',
                            fixed: true,
                            charlotte: true,
                            filterTarget(card, player, target) {
                                return (
                                    player != target &&
                                    target.hasCard(function (card) {
                                        return !get.info(card).unique;
                                    }, 'e')
                                );
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterCard(card) {
                                var info = lib.card[card.name];
                                if (!info) return false;
                                return !info.image && !info.fullimage;
                            },
                            discard: false,
                            lose: false,
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(target, 'e', true);
                                next.ai = get.buttonValue;
                                next.filterButton = function (button) {
                                    return !get.info(button.link).unique;
                                };
                                ('step 1');
                                if (result.links[0]) {
                                    cards[0].init([result.links[0].suit, result.links[0].number, result.links[0].name, result.links[0].nature]);
                                    event.card = cards[0];
                                    player.chooseTarget('选择一个角色装备' + get.translation(result.links), function (card, player, target) {
                                        return !target.isMin();
                                    }).ai = function (target) {
                                        if (!target.countCards('e', { subtype: get.subtype(event.card) })) {
                                            return get.attitude(player, target);
                                        }
                                        return 0;
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.targets && result.targets[0] && event.card) {
                                    player.$give(event.card, result.targets[0]);
                                    event.toequip = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.toequip) {
                                    event.toequip.equip(event.card);
                                }
                            },
                            mod: {
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type(card) == 'equip') return false;
                                },
                            },
                            ai: {
                                order: 9,
                                threaten: 1.5,
                                result: {
                                    player(player) {
                                        if (player.countCards('e') < 3) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        gd40_fenxun: {
                            group: ['gd40_fenxun_1', 'gd40_fenxun_2', 'gd40_fenxun_3'],
                            audio: 'ext:高达宇宙/audio:2',
                            enable: 'chooseCard',
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            popup: false,
                            check(event, player) {
                                var player = _status.event.player;
                                return !player.hasCard(function (card) {
                                    var val = get.value(card);
                                    return val < 0 || (val <= 4 && card.number >= 11);
                                }, 'h')
                                    ? 20
                                    : 0;
                            },
                            filter(event, player) {
                                return event.type == 'compare' && !event.directresult;
                            },
                            onCompare(player) {
                                return game.cardsGotoOrdering(get.cards()).cards;
                            },
                            subSkill: {
                                1: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filterTarget(card, player, target) {
                                        return player.canCompare(target);
                                    },
                                    selectTarget: [1, 10],
                                    multitarget: true,
                                    multiline: true,
                                    prompt: '请选择你拼点的目标',
                                    content() {
                                        player.chooseToCompare(targets).callback = lib.skill.gd40_fenxun_1.callback;
                                    },
                                    callback() {
                                        'step 0';
                                        if (event.num1 > event.num2) {
                                            player.addTempSkill('gd40_fenxun_3');
                                            player.storage.gd40_fenxun_3 = target;
                                            target.addTempSkill('fengyin');
                                            target.addTempSkill('gd40_fenxun_4');
                                        }
                                        ('step 1');
                                        if (event.num1 <= event.num2) {
                                            player.draw(2);
                                            target.chooseToDiscard(1, true);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        return !event.iwhile;
                                    },
                                    forced: true,
                                    content() {
                                        if (player == trigger.player) {
                                            trigger.num1 += 5;
                                            if (trigger.num1 > 13) trigger.num1 = 13;
                                        } else {
                                            trigger.num2 += 5;
                                            if (trigger.num2 > 13) trigger.num2 = 13;
                                        }
                                    },
                                },
                                3: {
                                    mod: {
                                        cardUsableTarget(card, player, target) {
                                            if (target.hasSkill('gd40_fenxun_4')) return true;
                                        },
                                    },
                                },
                                4: {
                                    mark: true,
                                    marktext: '奋',
                                    intro: {
                                        name: '奋迅',
                                        content: '与你计算距离为1,且对你使用牌无次数限制',
                                    },
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return -Infinity;
                                        },
                                    },
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                    target: -1,
                                },
                            },
                        },
                        gd40_duanbing: {
                            charlotte: true,
                            audio: 'ext:高达宇宙/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            popup: false,
                            forced: true,
                            fixed: true,
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                return game.hasPlayer(function (current) {
                                    return !event.targets.includes(current) && get.distance(player, current) <= 1 && player.canUse(event.card, current);
                                });
                            },
                            forced: true,
                            content() {
                                var targets = game.filterPlayer(function (current) {
                                    return get.distance(player, current) <= 1 && current != player;
                                });
                                if (targets.length) game.log(targets, '成为了额外目标');
                                for (var i = 0; i < targets.length; i++) {
                                    trigger.targets.push(targets[i]);
                                }
                            },
                        },
                        gd40_bozhan: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            audio: 'ext:高达宇宙/audio:2',
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            derivation: ['gd40_liqiong'],
                            content() {
                                trigger.player.addSkill('gd40_liqiong');
                                if (!trigger.player.storage.gd40_bozhan_disable) trigger.player.storage.gd40_bozhan_disable = [];
                                trigger.player.storage.gd40_bozhan_disable.push(player);
                                trigger.player.addTempSkill('gd40_bozhan_disable', { player: 'phaseAfter' });
                                trigger.player.addTempSkill('gd40_bozhan_discard', { player: 'phaseAfter' });
                            },
                            group: ['gd40_bozhan_gain'],
                            subSkill: {
                                gain: {
                                    audio: true,
                                    forced: true,
                                    trigger: {
                                        global: 'loseMaxHpBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.gainMaxHp();
                                        player.draw();
                                    },
                                },
                                disable: {
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            if (get.type(card) == 'delay' || (get.type(card) == 'trick' && player.storage.gd40_bozhan_disable && player.storage.gd40_bozhan_disable.includes(target))) return false;
                                        },
                                    },
                                    charlotte: true,
                                    mark: true,
                                    marktext: '搏',
                                    intro: {
                                        content: '不能对$使用锦囊牌或延时锦囊牌',
                                    },
                                },
                                discard: {
                                    trigger: {
                                        global: 'phaseUseAfter',
                                    },
                                    content() {
                                        var num = player.storage.gd40_bozhan_disable.length;
                                        player.chooseToDiscard(num, 'he', true);
                                    },
                                },
                            },
                        },
                        gd40_liqiong: {
                            audio: 'ext:高达宇宙/audio:1',
                            mod: {
                                cardEnabled(card, player) {
                                    if (player.countMark('gd40_liqiong') >= player.hp) return false;
                                },
                                cardUsable(card, player) {
                                    if (player.countMark('gd40_liqiong') >= player.hp) return false;
                                },
                                cardRespondable(card, player) {
                                    if (player.countMark('gd40_liqiong') >= player.hp) return false;
                                },
                            },
                            trigger: {
                                player: 'useCard1',
                            },
                            mark: true,
                            marktext: '穷',
                            intro: {
                                name: '力穷',
                                content(storage, player) {
                                    return '回合结束后,若你的<力穷>标记数量大于0,你减一点体力上限';
                                },
                            },
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                player.addMark('gd40_liqiong');
                            },
                            group: ['gd40_liqiong_maxhp'],
                            subSkill: {
                                maxhp: {
                                    audio: 'ext:高达宇宙/audio:1',
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.countMark('gd40_liqiong') > 0) {
                                            player.removeMark('gd40_liqiong', player.countMark('gd40_liqiong'));
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        player.loseMaxHp();
                                    },
                                },
                            },
                        },
                        gd41_keji: {
                            audio: 2,
                            trigger: {
                                player: ['phaseDiscardBefore', 'phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseJieshuBefore'],
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        gd41_kongjv: {
                            trigger: {
                                global: 'phaseBeginStart',
                            },
                            filter(event, player) {
                                return player != event.player && !event.player._trueMe && event.player.countCards('h' > 0);
                            },
                            audio: 2,
                            charlotte: true,
                            fixed: true,
                            content() {
                                var target = trigger.player;
                                ('step 0');
                                player.viewHandcards(target);
                                game.log(player, '吓唬了一下', target);
                                ('step 1');
                                if (target.countCards('h', { suit: 'heart' })) {
                                    game.log(target, '被吓唬到了');
                                } else player.addTempSkill('qianxing');
                            },
                            ai: {
                                threaten: 1.5,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                            },
                        },
                        gd41_mowang: {
                            audio: 2,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            silent: true,
                            trigger: { player: 'phaseUseAfter' },
                            forced: true,
                            init(player) {
                                player.storage.gd41_mowang = [];
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list2.add(players[i].name);
                                    list2.add(players[i].name1);
                                    list2.add(players[i].name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][1] != 'shen') continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.gd41_mowang.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.gd41_mowang.push(name);
                                player.markSkill('gd41_mowang');
                                var skills = lib.character[name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【魔王】', [[name], 'character']);
                                ('step 1');
                                event.dialog.close();
                            },
                        },
                        ergui_wuchang: {
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.player.hp < 0 && event.player != player;
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            audio: 2,
                            content() {
                                if (trigger.parent.name == 'damage' && get.itemtype(trigger.parent.cards) == 'cards' && get.position(trigger.parent.cards[0], true) == 'o') {
                                    player.gain(trigger.parent.cards, 'gain2');
                                }
                                player.draw(2);
                            },
                            ai: {
                                threaten: 5,
                            },
                        },
                        gd42_paimen: {
                            trigger: {
                                global: ['phaseBegin'],
                            },
                            audio: 2,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                var controls = [];
                                if (ui.cardPile.hasChildNodes()) controls.push('选择牌堆中的一张牌');
                                if (ui.discardPile.hasChildNodes()) controls.push('选择弃牌堆中的一张牌');
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.countCards('hej') > 0;
                                    })
                                )
                                    controls.push('选择一名角色区域内的一张牌');
                                if (!controls.length) {
                                    event.finish();
                                    return;
                                }
                                event.controls = controls;
                                var next = player.chooseControl();
                                next.set('choiceList', controls);
                                next.set('prompt', '请选择要移动的卡牌的来源');
                                next.ai = function () {
                                    return 0;
                                };
                                ('step 1');
                                result.control = event.controls[result.index];
                                var list = ['弃牌堆', '牌堆', '角色'];
                                for (var i = 0; i < list.length; i++) {
                                    if (result.control.includes(list[i])) {
                                        event.index = i;
                                        break;
                                    }
                                }
                                if (event.index == 2) {
                                    player.chooseTarget('请选择要移动的卡牌的来源', true, function (card, kagari, target) {
                                        return target.countCards('hej') > 0;
                                    });
                                } else {
                                    var source = ui[event.index == 0 ? 'discardPile' : 'cardPile'].childNodes;
                                    var list = [];
                                    for (var i = 0; i < source.length; i++) list.push(source[i]);
                                    player.chooseButton(['请选择要移动的卡牌', list], true).ai = get.buttonValue;
                                }
                                ('step 2');
                                if (event.index == 2) {
                                    player.line(result.targets[0]);
                                    event.target1 = result.targets[0];
                                    player.choosePlayerCard(result.targets[0], true, 'hej').set('visible', true);
                                } else {
                                    event.card = result.links[0];
                                }
                                ('step 3');
                                if (event.index == 2) event.card = result.cards[0];
                                var controls = ['将这张牌移动到牌堆的顶部或者底部', '将这张牌移动到弃牌堆的顶部或者底部', '将这张牌移动到一名角色对应的区域里'];
                                event.controls = controls;
                                var next = player.chooseControl();
                                next.set('prompt', '这张牌' + get.translation(event.card) + '的命运,全交付阁下了');
                                next.set('choiceList', controls);
                                next.ai = function () {
                                    return 2;
                                };
                                ('step 4');
                                result.control = event.controls[result.index];
                                var list = ['弃牌堆', '牌堆', '角色'];
                                for (var i = 0; i < list.length; i++) {
                                    if (result.control.includes(list[i])) {
                                        event.index2 = i;
                                        break;
                                    }
                                }
                                if (event.index2 == 2) {
                                    player.chooseTarget('要将' + get.translation(card) + '移动到哪一名角色的对应区域？', true).ai = function (target) {
                                        return target == _status.event.player ? 1 : 0;
                                    };
                                } else {
                                    player.chooseControl('顶部', '底部').set('prompt', '把' + get.translation(card) + '移动到' + (event.index2 == 0 ? '弃' : '') + '牌堆的...');
                                }
                                ('step 5');
                                if (event.index2 != 2) {
                                    //if(event.target1) event.target1.lose(card,ui.special);
                                    //else card.goto(ui.special);
                                    event.way = result.control;
                                } else {
                                    event.target2 = result.targets[0];
                                    var list = ['手牌区'];
                                    if (lib.card[card.name].type == 'equip' && event.target2.isEmpty(lib.card[card.name].subtype)) list.push('装备区');
                                    if (lib.card[card.name].type == 'delay' && !event.target2.storage._disableJudge && !event.target2.hasJudge(card.name)) list.push('判定区');
                                    if (list.length == 1) event._result = { control: list[0] };
                                    else {
                                        player.chooseControl(list).set('prompt', '把' + get.translation(card) + '移动到' + get.translation(event.target2) + '的...').ai = function () {
                                            return 0;
                                        };
                                    }
                                }
                                ('step 6');
                                if (event.index2 != 2) {
                                    var node = ui[event.index == 0 ? 'discardPile' : 'cardPile'];
                                    if (event.target1) {
                                        var next = event.target1.lose(card, event.position);
                                        if (event.way == '顶部') next.insert_card = true;
                                    } else {
                                        if (event.way == '底部') node.appendChild(card);
                                        else node.insertBefore(card, node.firstChild);
                                    }
                                    game.updateRoundNumber();
                                    event.finish();
                                } else {
                                    if (result.control == '手牌区') {
                                        var next = event.target2.gain(card);
                                        if (event.target1) {
                                            next.source = event.target1;
                                            next.animate = 'giveAuto';
                                        } else next.animate = 'draw';
                                    } else if (result.control == '装备区') {
                                        if (event.target1) event.target1.$give(card, event.target2);
                                        event.target2.equip(card);
                                    } else {
                                        if (event.target1) event.target1.$give(card, event.target2);
                                        event.target2.addJudge(card);
                                    }
                                }
                                ('step 7');
                                game.updateRoundNumber();
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        gd42_ergui: {
                            audio: 2,
                            limited: true,
                            charlotte: true,
                            enable: 'chooseToUse',
                            mark: true,
                            init(player) {
                                player.storage.gd42_ergui = false;
                            },
                            filter(event, player) {
                                if (player.storage.gd42_ergui) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                } else if (event.parent.name == 'phaseUse') {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('gd42_ergui');
                                player.storage.gd42_ergui = true;
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                player.hp = player.maxHp;
                                player.update();
                                ('step 4');
                                player.chooseTarget((card, player, current) => current != player, '二鬼:是否令一名其他角色获得〖破军〗并切换身份与你相同？').set('ai', (target) => -get.attitude(player, target));
                                ('step 5');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, 'green');
                                ('step 6');
                                target.addSkill('gd20_pojun');
                                if (get.mode() == 'identity') {
                                    var myid = player.identity;
                                    if (player.identity == 'zhu') {
                                        myid = 'zhong';
                                    }
                                    target.identity = myid;
                                    target.setIdentity();
                                }
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player, arg, target) {
                                    if (player != target || player.storage.gd42_ergui) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.gd42_ergui) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        gd20_ergui: {
                            audio: 2,
                            limited: true,
                            charlotte: true,
                            enable: 'chooseToUse',
                            mark: true,
                            init(player) {
                                player.storage.gd20_ergui = false;
                            },
                            filter(event, player) {
                                if (player.storage.gd20_ergui) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                } else if (event.parent.name == 'phaseUse') {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('gd20_ergui');
                                player.storage.gd20_ergui = true;
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                player.hp = player.maxHp;
                                player.hp = player.maxHp;
                                player.update();
                                ('step 4');
                                player
                                    .chooseTarget(function (card, player, current) {
                                        return current != player;
                                    }, '二鬼:是否令一名其他角色获得〖劫营〗并切换身份与你相同？')
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) <= 0;
                                    });
                                ('step 5');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, 'green');
                                ('step 6');
                                target.addSkill('gd42_jieying');
                                if (get.mode() == 'identity') {
                                    var myid = player.identity;
                                    if (player.identity == 'zhu') {
                                        myid = 'zhong';
                                    }
                                    target.identity = myid;
                                    target.setIdentity();
                                }
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player, arg, target) {
                                    if (player != target || player.storage.gd20_ergui) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.gd20_ergui) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        gd42_jieying: {
                            audio: 'drlt_jieying',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            fixed: true,
                            charlotte: true,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return player != event.player && event.player.isAlive();
                            },
                            logTarget: 'player',
                            content() {
                                var target = trigger.player;
                                var num = Math.max(player.countCards('h') - target.countCards('h'), target.countCards('h') - player.countCards('h'));
                                target.damage(num);
                                trigger.player.give(trigger.player.getCards('heo'), player);
                            },
                        },
                        gd43_jishou: {
                            charlotte: true,
                            forced: true,
                            fixed: true,
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            content() {
                                var jishou = trigger.player.countCards('h');
                                if (trigger.player.countCards('h') > 0) {
                                    trigger.player.gainMaxHp(jishou);
                                    trigger.player.recover(jishou);
                                    trigger.player.draw(jishou);
                                }
                            },
                        },
                        gd43_huainian: {
                            charlotte: true,
                            forced: true,
                            fixed: true,
                            audio: 2,
                            trigger: {
                                global: ['phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
                            },
                            content() {
                                'step 0';
                                var list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                ('step 1');
                                var list = ['shan'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                ('step 2');
                                var list = ['tao'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                ('step 3');
                                var list = ['jiu'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                threaten: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        gd43_cuihui: {
                            charlotte: true,
                            audio: 1,
                            fixed: true,
                            trigger: { player: 'useCardToPlayered' },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            logTarget: 'target',
                            filter(event, player) {
                                return event.target != undefined && event.target != player;
                            },
                            content() {
                                var lose = trigger.player.countCards('hej');
                                ('step 0');
                                trigger.target.clearSkills(true);
                                trigger.target.loseHp(lose)._triggered = null;
                                ('step 1');
                                player.addTempSkill('gd43_shenzhu');
                                ('step 2');
                                if (!result.bool) {
                                    trigger.parent.directHit.add(trigger.target);
                                }
                            },
                            ai: {
                                threaten: 10,
                                ignoreSkill: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'directHit_ai') {
                                        return get.attitude(player, arg.target) <= 0;
                                    }
                                    if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                                    if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
                                },
                                directHit_ai: true,
                            },
                        },
                        gd43_mashu: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                                cardUsable(card, player, num) {
                                    return Infinity;
                                },
                            },
                        },
                        gd43_shenzhu: {
                            enable: 'phaseUse',
                            position: 'he',
                            silent: true,
                            filterCard: true,
                            audio: 1,
                            fixed: true,
                            selectCard: 1,
                            prompt: '弃置一张牌并摸一张牌,获得一个马神的技能',
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                if (!player.hasSkill('qiaosi')) return true;
                                if (!player.hasSkill('xinfu_jingxie1')) return true;
                                if (!player.hasSkill('gd47_fengpo')) return true;
                                if (!player.hasSkill('gd23_fuman')) return true;
                                if (!player.hasSkill('zishu')) return true;
                                if (!player.hasSkill('xinyingyuan')) return true;
                                if (!player.hasSkill('oldqianxi')) return true;
                                if (!player.hasSkill('resanyao')) return true;
                                if (!player.hasSkill('rezhiman')) return true;
                                return false;
                            },
                            charlotte: true,
                            ai: {
                                order: 13,
                                expose: 0.2,
                                threaten: 10,
                            },
                            content() {
                                'step 0';
                                player.draw();
                                var list = [];
                                if (!player.hasSkill('qiaosi')) {
                                    list.push('qiaosi');
                                }
                                if (!player.hasSkill('xinfu_jingxie1')) {
                                    list.push('xinfu_jingxie1');
                                }
                                if (!player.hasSkill('gd47_fengpo')) {
                                    list.push('gd47_fengpo');
                                }
                                if (!player.hasSkill('gd23_fuman')) {
                                    list.push('gd23_fuman');
                                }
                                if (!player.hasSkill('zishu')) {
                                    list.push('zishu');
                                }
                                if (!player.hasSkill('xinyingyuan')) {
                                    list.push('xinyingyuan');
                                }
                                if (!player.hasSkill('oldqianxi')) {
                                    list.push('oldqianxi');
                                }
                                if (!player.hasSkill('resanyao')) {
                                    list.push('resanyao');
                                }
                                if (!player.hasSkill('rezhiman')) {
                                    list.push('rezhiman');
                                }
                                if (list.length) {
                                    player.chooseControl(list).set('prompt', '选择获得一项技能').ai = function () {
                                        return list.randomGet();
                                    };
                                }
                                ('step 1');
                                player.addTempSkill(result.control);
                                player.popup(result.control);
                                game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
                            },
                        },
                        equit_xibing: {},
                        gd44_zhiheng: {
                            group: ['gd44_zhiheng_1', 'gd44_zhiheng_2', 'gd44_zhiheng_3'],
                            charlotte: true,
                            fixed: true,
                            audio: 2,
                            forced: true,
                            trigger: { player: 'phaseBegin' },
                            content() {
                                var zh = game.roundNumber;
                                ('step 0');
                                player
                                    .chooseTarget(function (card, player, current) {
                                        return current != player && !current.hasSkill('gd44_zhiheng_debuff');
                                    }, '请选择〖制衡〗的目标')
                                    .set('ai', function (target) {
                                        if (zh <= 2) return get.attitude(_status.event.player, target) < 0;
                                        else return get.attitude(_status.event.player, target) >= 0;
                                    });
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, 'green');
                                player.chooseControl('手牌数', '体力值', '体力上限', '取消').set('prompt', '请选择〖制衡〗的选项').ai = function () {
                                    if ((zh = 1)) return '体力上限';
                                    if ((zh = 2 && target.hp >= 3)) return '体力上限';
                                    if ((zh = 2 && target.hp < 3 && target.countCards('h') >= 3)) return '手牌数';
                                    if ((zh = 2 && target.maxhp < 2 && target.countCards('h') <= 3)) return '体力值';
                                    if ((zh = 2 && target.maxhp > 2)) return '体力上限';
                                    if (zh <= 2 && target.name == 'jin_simashi') return '体力上限';
                                    if (zh >= 3) return '体力值';
                                    return '手牌数';
                                };
                                ('step 2');
                                target.addTempSkill('gd44_zhiheng_debuff');
                                if (result.control == '手牌数') {
                                    if (target.countCards('h') <= zh) {
                                        target.draw(zh - target.countCards('h'));
                                    } else target.chooseToDiscard(target.countCards('h') - zh, 'h', true);
                                }
                                if (result.control == '体力值') {
                                    if (target.hp <= zh) {
                                        target.recover(zh - target.hp);
                                    } else target.loseHp(target.hp - zh);
                                }
                                if (result.control == '体力上限') {
                                    if (target.maxHp <= zh) {
                                        target.gainMaxHp(zh - target.maxHp);
                                    } else target.loseMaxHp(target.maxHp - zh);
                                }
                                if (result.control == '取消') {
                                    target.removeSkill('gd44_zhiheng_debuff', true);
                                    event.goto(0);
                                } //QQQ
                            },
                            ai: {
                                threaten: 7,
                            },
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    fixed: true,
                                    prompt: '是否发动〖制衡〗,回复等量的体力？',
                                    check(event) {
                                        return true;
                                    },
                                    trigger: {
                                        global: ['damageAfter', 'recoverAfter', 'loseHpAfter'],
                                    },
                                    filter(event, player) {
                                        return event.player != player && !player.isHealthy();
                                    },
                                    content() {
                                        var num = trigger.num;
                                        player.recover(num);
                                    },
                                },
                                //1
                                2: {
                                    charlotte: true,
                                    fixed: true,
                                    check(event) {
                                        return true;
                                    },
                                    trigger: {
                                        global: ['loseAfter', 'chooseToRespondBegin', 'addJudgeAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.cards && event.cards[0]; //QQQ
                                    },
                                    content() {
                                        for (var i = 0; i < trigger.cards.length; i++) {
                                            var newcard = get.cardPile(function (card) {
                                                return card.name == trigger.cards[i].name && card.name != 'du';
                                            });
                                            if (newcard) {
                                                player.gain(newcard)._triggered = null;
                                            }
                                        }
                                    },
                                    prompt: '是否发动〖制衡〗,获得与此牌同名的牌？',
                                },
                                //2
                                3: {
                                    charlotte: true,
                                    fixed: true,
                                    prompt: '是否发动〖制衡〗,增加等量的体力上限？',
                                    trigger: {
                                        global: ['loseMaxHpAfter', 'gainMaxHpAfter'],
                                    },
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    check(event) {
                                        return true;
                                    },
                                    content() {
                                        var num = trigger.num;
                                        player.gainMaxHp(num);
                                    },
                                },
                                //3
                            },
                            //ss
                        },
                        gd44_zhiheng_debuff: {
                            silent: true,
                            popup: false,
                            forced: true,
                            charlotte: true,
                            trigger: { global: 'phaseAfter' },
                            content() {
                                player.removeSkill('gd44_zhiheng_debuff', true);
                            },
                        },
                        gd44_jiuyuan: {
                            trigger: {
                                player: 'dyingBegin',
                            },
                            charlotte: true,
                            fixed: true,
                            audio: 2,
                            forced: true,
                            init(player) {
                                player.storage.jiuyuan = 1;
                            },
                            filter(event, player) {
                                if (
                                    game.countPlayer(function (current) {
                                        return current.group == 'wu' && current.countCards('hej') > 0;
                                    }) > 0
                                )
                                    return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    function (card, player, current) {
                                        return current.group == 'wu' && current.countCards('hej') > 0;
                                    },
                                    '〖救援〗触发,请选择一名区域里有牌的吴势力角色',
                                    true
                                );
                                ('step 1');
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, 'green');
                                ('step 2');
                                player.discardPlayerCard('hej', target, true);
                                player.hp = player.storage.jiuyuan;
                            },
                        },
                        gd45_shawo: {
                            trigger: { global: 'useCardToTarget' },
                            group: ['gd45_shawo_1'],
                            logTarget: 'target',
                            audio: 2,
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && event.player != player && !event.targets.includes(player) && event.target.inRange(player) && event.target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard('he', '是否对自己发动【杀我】？', '弃置一张牌,摸四张牌,将' + get.translation(trigger.card) + '转移给' + get.translation(player))
                                    .set('ai', function (card) {
                                        if (!_status.event.check) return -1;
                                        return get.unuseful(card) + 9;
                                    })
                                    .set(
                                        'check',
                                        (function () {
                                            return 8;
                                        })() > 0
                                    );
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards);
                                    player.draw(4);
                                    var evt = trigger.parent;
                                    evt.triggeredTargets2.remove(trigger.target);
                                    evt.targets.remove(trigger.target);
                                    evt.targets.push(player);
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'gd45_shawo',
                                    audio: 'xinleiji',
                                    enable: 'phaseUse',
                                    prompt: '选择一名攻击范围内包含你的角色,除非该角色对你使用一张【杀】且此【杀】对你造成伤害,否则你弃置其任意张牌',
                                    filterTarget(card, player, target) {
                                        return target != player && target.inRange(player) && target.countCards('he') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        target
                                            .chooseToUse(
                                                function (card, player, event) {
                                                    if (card.name != 'sha') return false;
                                                    return lib.filter.filterCard.apply(this, arguments);
                                                },
                                                '杀我:对' + get.translation(player) + '使用一张杀,或令其弃置你的任意张牌'
                                            )
                                            .set('targetRequired', true)
                                            .set('complexSelect', true)
                                            .set('filterTarget', function (card, player, target) {
                                                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                                return lib.filter.filterTarget.apply(this, arguments);
                                            })
                                            .set('sourcex', player);
                                        ('step 1');
                                        if (
                                            result.bool &&
                                            player.getHistory('damage', function (evt) {
                                                return evt.parent.type == 'card' && evt.getParent(4) == event;
                                            }).length
                                        )
                                            game.log(player, '受到了此【杀】造成的伤害,不能弃置目标的牌');
                                        else if (target.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(target, 'he', [1, Infinity], true).boolline = true;
                                    },
                                    ai: {
                                        order: 4,
                                        expose: 0.2,
                                        result: {
                                            target: -1,
                                            player(player, target) {
                                                if (target.countCards('h') == 0) return 0;
                                                if (target.countCards('h') == 1) return -0.1;
                                                if (player.countCards('h', 'shan') == 0) return -1;
                                                return -0.5;
                                            },
                                        },
                                        threaten: 2.1,
                                    },
                                    //ai结束
                                },
                                //1的结束
                            },
                            //subSkill结束
                        },
                        gd45_jiaozhu: {
                            group: ['gd45_jiaozhu_1'],
                            trigger: {
                                global: 'judge',
                            },
                            charlotte: true,
                            fixed: true,
                            audio: 2,
                            init(player) {
                                var a = window.setInterval(function () {
                                    if (player.hasSkill('gd45_jiaozhu')) {
                                        player.storage.gd45_jiaozhu = true;
                                    } else {
                                        game.addGlobalSkill('gd45_jiaozhu');
                                        game.addGlobalSkill('gd45_jiaozhu');
                                        window.clearInterval(a);
                                    }
                                }, 1000);
                            },
                            audio: 'guidao',
                            prompt: '你可以修改此判定牌的花色和点数',
                            forced: true,
                            lastDo: true,
                            filter(event, player) {
                                if (!player.storage.gd45_jiaozhu) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var card = trigger.player.judging[0];
                                var judge0 = trigger.judge(card);
                                var judge1 = 0;
                                var choice = 'cancel2';
                                event.suitchoice = 'cancel2';
                                var attitude = get.attitude(player, trigger.player);
                                var list = [];
                                event.suitx = ['heart', 'diamond', 'club', 'spade'];
                                for (var x = 0; x < 4; x++) {
                                    for (var i = 1; i < 14; i++) {
                                        list.add(i);
                                        var judge2 =
                                            (trigger.judge({
                                                name: card.name,
                                                suit: event.suitx[x],
                                                number: i,
                                                nature: get.nature(card),
                                            }) -
                                                judge0) *
                                            attitude;
                                        if (judge2 > judge1) {
                                            choice = i;
                                            event.suitchoice = event.suitx[x];
                                            judge1 = judge2;
                                        }
                                    }
                                }
                                list.push('cancel2');
                                event.suitx.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', choice).prompt = get.prompt2(event.name);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (!event.logged) {
                                        event.logged = true;
                                    }
                                    game.log(trigger.player, '判定结果点数为', '#g' + result.control);
                                    player.popup(result.control, 'fire');
                                    if (!trigger.fixedResult) trigger.fixedResult = {};
                                    trigger.fixedResult.number = result.control;
                                }
                                player
                                    .chooseControl(event.suitx)
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', event.suitchoice).prompt = get.prompt2(event.name);
                                ('step 2');
                                if (result.control != 'cancel2') {
                                    if (!event.logged) {
                                        event.logged = true;
                                    }
                                    game.log(trigger.player, '判定结果花色为', '#g' + result.control);
                                    player.popup(result.control, 'fire');
                                    if (!trigger.fixedResult) trigger.fixedResult = {};
                                    trigger.fixedResult.suit = result.control;
                                    if (result.control == 'club' || result.control == 'spade') {
                                        trigger.fixedResult.color = 'black';
                                    } else if (result.control == 'heart' || result.control == 'diamond') {
                                        trigger.fixedResult.color = 'red';
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    audio: 'gd45_jiaozhu',
                                    prompt: '是否获得此判定牌？',
                                    frequent(event) {
                                        if (event.result.card.name == 'du') return false;
                                        return true;
                                    },
                                    audio: ['guidao', 2],
                                    trigger: {
                                        global: 'judgeEnd',
                                    },
                                    check(event) {
                                        if (event.result.card.name == 'du') return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        if (get.owner(event.result.card)) {
                                            return false;
                                        }
                                        if (event.nogain && event.nogain(event.result.card)) {
                                            return false;
                                        }
                                        if (!player.storage.gd45_jiaozhu) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.gain(trigger.result.card);
                                        player.$gain2(trigger.result.card);
                                        player.changeHujia(1);
                                        ('step 1');
                                        var evt = trigger.parent;
                                        if (evt && evt.getParent && !evt.jiaozhu) {
                                            evt.jiaozhu = true;
                                            var next = game.createEvent('jiaozhu_discard', false, evt.parent);
                                            next.player = player;
                                            next.setContent(function () {
                                                var hs = player.getCards('he');
                                                if (hs.length) player.update();
                                            });
                                        }
                                        ('step 2');
                                        var list = [];
                                        var typelist = [];
                                        var getType = function (card) {
                                            var sub = get.subtype(card);
                                            if (sub) return sub;
                                            return card.name;
                                        };
                                        for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                            var node = ui.cardPile.childNodes[i];
                                            var typex = getType(node);
                                            if (!typelist.includes(typex)) {
                                                list.push(node);
                                                typelist.push(typex);
                                                if (list.length >= 4) break;
                                            }
                                        }
                                        if (list.length < 4) {
                                            for (var i = 0; i < ui.discardPile.childElementCount; i++) {
                                                var node = ui.discardPile.childNodes[i];
                                                var typex = getType(node);
                                                if (!typelist.includes(typex)) {
                                                    list.push(node);
                                                    typelist.push(typex);
                                                    if (list.length >= 4) break;
                                                }
                                            }
                                        }
                                        player.gain(list, 'gain2');
                                        ('step 3');
                                        if (player.countCards('h') <= 8) event.goto(1);
                                    },
                                },
                                //1
                            },
                            //ss
                            mod: {
                                maxHandcard(player, num) {
                                    return Infinity;
                                },
                            },
                        },
                        gd45_dianshan: {
                            group: ['gd45_dianshan_1', 'gd45_dianshan_2'],
                            audio: 2,
                            prompt: '你是否进行判定？',
                            trigger: { player: ['useCard', 'respond', 'lose'] },
                            filter(event, player) {
                                return event.card.name == 'shan' || event.card.name == 'shandian';
                            },
                            judgeCheck(card, bool) {
                                var color = get.color(card);
                                if (color == 'black') {
                                    return 4;
                                }
                                if (color == 'red') {
                                    if (player.isHealthy()) return 4;
                                    return 3;
                                }
                                return 0;
                            },
                            content() {
                                player.judge();
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (
                                            get.tag(card, 'respondShan') &&
                                            !player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            var hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            var be = target.countCards('e', { color: 'black' });
                                            if (target.countCards('h', 'shan') && be) {
                                                if (!target.hasSkill('xinguidao')) return 0;
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                if (!target.hasSkill('xinguidao')) return 0;
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
                                            if (!target.hasSkill('xinguidao')) return [1, 0.05];
                                            return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                        }
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: { player: 'judgeAfter' },
                                    forced: true,
                                    audio: 'gd45_dianshan',
                                    content() {
                                        'step 0';
                                        player.chooseTarget('是否发动【电闪】,对一名其他角色随机造成任意点雷电伤害,你加等量的体力上限,回复体力至体力上限？').ai = function (target) {
                                            return -get.attitude(player, target);
                                        };
                                        ('step 1');
                                        /*以下数字,1440078720是复读姬的QQ,2998242135是遗计两个桃QQ,1602660195是遗计两个桃曾经喜欢过的人的QQ,2407538329是遗计两个桃无名杀朋友之一.1-10000无特别意义,其他的为玩梗*/
                                        var aaa = [2998242135, 1602660195, 2407538329, 1440078720, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 10000, 999, 250, 666, 520, 5201314, 999, 999, 8964, 2333, Infinity].randomGet();
                                        result.targets[0].damage(aaa, 'thunder');
                                        player.gainMaxHp(aaa);
                                        ('step 2');
                                        player.hp = player.maxHp;
                                        player.update();
                                    },
                                },
                                //1
                                2: {
                                    audio: 'gd45_dianshan',
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    position: 'hes',
                                    viewAs: { name: 'shan' },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hes')) return false;
                                    },
                                    filterCard(card) {
                                        return true;
                                    },
                                    prompt: '将一张牌当闪使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        order: 8,
                                        respondShan: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
                                    },
                                },
                                //2
                            },
                            //ss
                        },
                        gd45_leiming: {
                            group: ['gd45_leiming_1'],
                            audio: 2,
                            trigger: {
                                global: ['damageBegin'],
                            },
                            filter(event, player) {
                                return event.source && event.nature == 'thunder';
                            },
                            mark: true,
                            marktext: '乱',
                            intro: {
                                name: '黄巾起义',
                                content: 'mark',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0 || player == event.player;
                            },
                            init(player) {
                                player.storage.gd45_leiming = 0;
                            },
                            content() {
                                if (player != trigger.player && trigger.player.isAlive()) {
                                    trigger.player.goMad();
                                    player.storage.gd45_leiming += 1;
                                } else {
                                    trigger.cancel();
                                    game.log(player, '防止了此伤害');
                                }
                                ('step 2');
                                if (result.bool) {
                                }
                            },
                            subSkill: {
                                1: {
                                    silent: true,
                                    charlotte: true,
                                    forced: true,
                                    forceDie: true,
                                    firstDo: true,
                                    fixed: true,
                                    _priority: 999,
                                    trigger: {
                                        global: ['useSkill', 'phaseBegin', 'lose', 'die'],
                                    },
                                    filter(event, player) {
                                        return player.storage.gd45_leiming + 1 >= game.countPlayer();
                                    },
                                    content() {
                                        var bool = false;
                                        if (player == game.me || player.isFriendsOf(game.me)) bool = true;
                                        else
                                            switch (get.mode()) {
                                                case 'identity': {
                                                    game.showIdentity();
                                                    var id1 = player.identity;
                                                    var id2 = game.me.identity;
                                                    if (['zhu', 'zhong', 'mingzhong'].includes(id1)) {
                                                        if (['zhu', 'zhong', 'mingzhong'].includes(id2)) bool = true;
                                                        break;
                                                    } else if (id1 == 'fan') {
                                                        if (id2 == 'fan') bool = true;
                                                        break;
                                                    }
                                                    break;
                                                }
                                            }
                                        game.over(bool);
                                    },
                                },
                                //1
                            },
                            //ss
                        },
                        gd46_duibai: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            audio: 'ext:高达宇宙/audio:9',
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            group: ['gd46_duibai_1', 'gd46_duibai_2'],
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, current) {
                                        return current != player && !current.hasSkill('gd46_pofang');
                                    }, '对白:是否令一名其他角色将其武将牌替换为<王朗>？')
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) < 0;
                                    });
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, 'green');
                                if (target.name2 != undefined) {
                                    target.chooseControl(target.name1, target.name2).set('prompt', '请选择要更换的武将牌');
                                } else event._result = { control: target.name1 };
                                ('step 2');
                                target.reinit(result.control, 'wanglang');
                                target.addSkill('gd46_pofang');
                                target.addSkill('nouse_debuff');
                                target.disableEquip(2);
                                target.maxHp = 3;
                                target.update();
                                target.changeHujia(-target.hujia); //QQQ
                            },
                            subSkill: {
                                1: {
                                    trigger: { player: 'phaseDrawEnd' },
                                    audio: 'ext:高达宇宙/audio:9',
                                    charlotte: true,
                                    fixed: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(function (card, player, current) {
                                                return current != player && !current.hasSkill('gd46_pofang');
                                            }, '对白:是否令一名其他角色将其武将牌替换为<王朗>？')
                                            .set('ai', function (target) {
                                                return get.attitude(_status.event.player, target) < 0;
                                            });
                                        ('step 1');
                                        if (!result.bool) {
                                            event.finish();
                                            return;
                                        }
                                        var target = result.targets[0];
                                        event.target = target;
                                        player.line(target, 'green');
                                        if (target.name2 != undefined) {
                                            target.chooseControl(target.name1, target.name2).set('prompt', '请选择要更换的武将牌');
                                        } else event._result = { control: target.name1 };
                                        ('step 2');
                                        target.reinit(result.control, 'wanglang');
                                        target.addSkill('gd46_pofang');
                                        target.addSkill('nouse_debuff');
                                        target.disableEquip(2);
                                        target.maxHp = 3;
                                        target.update();
                                        target.changeHujia(-target.hujia);
                                    },
                                },
                                //1
                                2: {
                                    trigger: { player: 'compare', target: 'compare' },
                                    forced: true,
                                    charlotte: true,
                                    fixed: true,
                                    forced: true,
                                    audio: 'ext:高达宇宙/audio:9',
                                    content() {
                                        if (player == trigger.player) {
                                            trigger.num1 += Infinity;
                                        } else {
                                            trigger.num2 += Infinity;
                                        }
                                        game.log(player, '的拼点牌点数视为∞');
                                        player.draw(3);
                                        player.recover(2);
                                    },
                                },
                            },
                            //ss
                            ai: {
                                threaten: 6,
                            },
                        },
                        gd46_pofang: {
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            mark: true,
                            group: ['gd46_pofang_1'],
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            skillBlocker(skill, player) {
                                return skill != 'regushe' && skill != 'rejici' && skill != 'regushe2' && !lib.skill[skill].pofang;
                            },
                            ai: {
                                threaten: 10,
                            },
                            mod: {
                                cardname(card, player, name) {
                                    if (card.suit == 'heart') return 'du';
                                },
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var str = '<li>鼠鼠破大防了家人们[流泪][流泪][流泪]';
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.gd46_pofang.skillBlocker(i, player);
                                    });
                                    if (list.length) str += '<br><li>失效技能:' + get.translation(list);
                                    return str;
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: { player: 'die' },
                                    forced: true,
                                    forceDie: true,
                                    lastDo: true,
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current.name != 'gd46h') return false;
                                            current.draw(7);
                                            current.gainMaxHp(7);
                                            current.hp = current.maxHp;
                                            return true;
                                        });
                                    },
                                    //con
                                },
                                //1
                            },
                            //ss
                        },
                        gd47_fengpo: {
                            fixed: true,
                            forced: true,
                            charlotte: true,
                            ruleSkill: true,
                            init(player) {
                                var newcard = get.cardPile(function (card) {
                                    return card.name == 'guanshi';
                                });
                                if (newcard) {
                                    player.equip(newcard)._triggered = null;
                                }
                            },
                            shaRelated: true,
                            audio: 2,
                            trigger: { player: 'useCardToPlayered' },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.card.suit == 'diamond';
                            },
                            logTarget: 'target',
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('确定', 'cancel2').set('prompt', '给' + get.translation(trigger.target) + '点颜色看看？');
                                ('step 1');
                                if (result.control && result.control != 'cancel2') {
                                    trigger.target.uninit();
                                    trigger.target.draw(7);
                                    trigger.target.init('shen_caocao');
                                    trigger.target.damage(999, 'nocard');
                                    player.chat('本小姐专打屯牌的!');
                                }
                            },
                            group: ['gd47_fengpo_1'],
                            subSkill: {
                                1: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    ruleSkill: true,
                                    hiddenCard(player, name) {
                                        return !player.storage.gd47_fengpo.includes(name) && player.countCards('hes') > 0 && lib.inpile.includes(name);
                                    },
                                    init(player) {
                                        if (!player.storage.gd47_fengpo) player.storage.gd47_fengpo = [];
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (var i = 0; i < lib.inpile.length; i++) {
                                                var name = lib.inpile[i];
                                                if (player.storage.gd47_fengpo.includes(name)) continue;
                                                if (name == 'sha') {
                                                    list.push(['基本', '', 'sha']);
                                                    list.push(['基本', '', 'sha', 'fire']);
                                                    list.push(['基本', '', 'sha', 'thunder']);
                                                    list.push(['基本', '', 'sha', 'ice']);
                                                } else if (get.type2(name) == 'trick') list.push(['锦囊', '', name]);
                                                else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                            }
                                            if (list.length == 0) {
                                                return ui.create.dialog('已无牌可用');
                                            }
                                            return ui.create.dialog('凤魄', [list, 'vcard']);
                                        },
                                        filter(button, player) {
                                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                        },
                                        check(button) {
                                            if (_status.event.parent.type != 'phase') return 1;
                                            var player = _status.event.player;
                                            if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                            return player.getUseValue({
                                                name: button.link[2],
                                                nature: button.link[3],
                                            });
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard: true,
                                                selectCard: 1,
                                                popname: true,
                                                check(card) {
                                                    return 6 - get.value(card);
                                                },
                                                position: 'hes',
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                                onuse(result, player) {
                                                    game.log(player, '发动了【凤魄】');
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                        },
                                    },
                                    ai: {
                                        fireAttack: true,
                                        respondSha: true,
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('hes')) return false;
                                        },
                                        order: 10,
                                        basic: {
                                            useful: [6, 4, 3],
                                            value: [6, 4, 3],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                //1
                            },
                            //s
                        },
                        gd47_zhuanda: {
                            audio: 2,
                            trigger: {
                                global: 'roundStart',
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, current) {
                                        return current != player && !current.hasSkill('gd47_zhuanda_debuff');
                                    }, '专打:我没有针对任何人,但是我就是要针对在座的各位')
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) < 0;
                                    });
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, 'green');
                                ('step 2');
                                target.addSkill('gd47_zhuanda_debuff'); //QQQ
                            },
                        },
                        gd47_zhuanda_debuff: {
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            trigger: {
                                player: ['recoverBefore'],
                            },
                            init(player) {
                                var a = window.setInterval(function () {
                                    if (player.hasSkill('gd47_zhuanda_debuff')) {
                                        player.storage.gd47_zhuanda_debuff = true;
                                    } else {
                                        game.addGlobalSkill('gd47_zhuanda_debuff');
                                        game.addGlobalSkill('gd47_zhuanda_debuff');
                                        window.clearInterval(a);
                                    }
                                }, 1000);
                            },
                            content() {
                                var abc = trigger.num;
                                trigger.cancel();
                                player.loseHp(abc);
                            },
                            group: ['gd47_zhuanda_debuff_1'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    charlotte: true,
                                    fixed: true,
                                    forced: true,
                                    trigger: {
                                        player: ['drawBefore'],
                                    },
                                    content() {
                                        var abc = trigger.num;
                                        trigger.cancel();
                                        player.chooseToDiscard(abc, 'he', true);
                                    },
                                },
                                //1
                            },
                            //SS
                        },
                        //结束符号
                    },
                    translate: {
                        gd1h: '高达一号',
                        gd2h: '高达二号',
                        gd3h: '高达三号',
                        gd4h: '高达四号',
                        gd5h: '高达五号',
                        gd6h: '高达六号',
                        gd7h: '高达七号',
                        gd8h: '高达八号',
                        gd9h: '高达九号',
                        gd10h: '高达十号',
                        gd11h: '高达十一号',
                        gd12h: '高达十二号',
                        gd13h: '高达十三号',
                        gd14h: '高达十四号',
                        gd15h: '高达十五号',
                        gd16h: '高达十六号',
                        gd17h: '高达十七号',
                        gd18h: '高达十八号',
                        gd19h: '高达十九号',
                        gd20h: '高达廿号',
                        gd21h: '高达廿一号',
                        gd22h: '高达廿二号',
                        gd23h: '高达廿三号',
                        gd24h: '高达廿四号',
                        gd25h: '高达廿五号',
                        gd26h: '高达廿六号',
                        gd27h: '高达廿七号',
                        gd28h: '高达廿八号',
                        gd29h: '高达廿九号',
                        gd30h: '高达卅号',
                        gd31h: '高达卅一号',
                        gd32h: '高达卅二号',
                        gd33h: '高达卅三号',
                        gd34h: '高达卅四号',
                        gddhh: '高达大虎号',
                        gdxhh: '高达小虎号',
                        gd35h: '高达卅五号',
                        gd36h: '高达卅六号',
                        gd37h: '高达卅七号',
                        gd38h: '高达卅八号',
                        gd39h: '高达卅九号',
                        gd40h: '高达卌号',
                        gd41h: '高达卌一号',
                        gd42h: '高达卌二号',
                        gd43h: '高达卌三号',
                        equitable: '高达平局号',
                        gd44h: '高达卌四号',
                        gd45h: '高达卌五号',
                        gd46h: '高达卌六号',
                        gd47h: '高达卌七号',
                        gd1_longhun: '龙魂',
                        gd1_longhun_info: '你可以将同花色的X张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当【无懈可击】(X为你当前的体力值且至少为1)',
                        gd1_wujin: '无尽',
                        gd1_wujin_info: '锁定技,①当你需要打出牌时,若牌堆有对应的牌,你视为打出此牌;②当你失去牌时,若牌堆中有相同名称的牌,你获得之.(【毒】除外)',
                        gd2_qijin: '七进',
                        gd2_qijin_info: '锁定技,准备阶段、结束阶段、濒死阶段或脱离濒死阶段时,你摸七张牌并回复一点体力;出牌阶段,你使用【杀】无次数限制.',
                        gd2_qichu: '七出',
                        gd2_qichu_info: '锁定技,你使用【杀】无视防具;你的手牌上限视为7.',
                        gd2_tuwei: '突围',
                        gd2_tuwei_info: '当你使用【闪】或【无懈可击】时,你可以获得当前回合角色至多两张牌.',
                        gd2_changsheng: '常胜',
                        gd2_changsheng_info: '锁定技,当你使用【杀】或【桃】时,你令伤害或回复值随机增加1~7.',
                        gd2_longhun: '龙魂',
                        gd2_longhun_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值+1.若你以此法使用了两张黑色牌,则你弃置当前回合角色一张牌.',
                        gd3_paoxiao: '咆哮',
                        gd3_paoxiao_info: '锁定技,你使用【杀】无次数限制;当你使用的【杀】被【闪】抵消时,你获得一枚<咆>,当你因【杀】造成伤害时,你弃置所有<咆>并令伤害值+X.(X为<咆>数)回合结束后,你弃置所有<咆>.',
                        gd3_zhendan: '震胆',
                        gd3_zhendan_info: '你可以将一张黑色牌当做【杀】使用或打出.',
                        gd3_jiaoheng: '骄横',
                        gd3_jiaoheng_info: '锁定技,游戏开始时,你将【丈八蛇矛】置于你的装备区;每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或黑色的【杀】时,你摸一张牌.',
                        gd3_kuangao: '狂傲',
                        gd3_kuangao_info: '①锁定技,当你使用一张带有「伤害」标签的卡牌,你获得一枚<傲>;②锁定技,当一张带有「伤害」标签的牌的伤害基数确定后,若你有<傲>,你移去所有<傲>并摸等同于此伤害基数的牌;③当你对一名角色造成一点伤害后,若你至其的距离不大于5,你可以回复一点体力或摸一张牌.',
                        gd4_zhongyong: '忠勇',
                        gd4_zhongyong_info: '当你使用【杀】指定目标后,你可以令其展示所有手牌,你弃置其一种颜色的牌.',
                        gd4_xiangwang: '相往',
                        gd4_xiangwang_info: '锁定技,你使用【杀】无次数限制;当你的手牌数变化时,若你的手牌数小于4,则你将手牌摸至四张.',
                        gd4_menglie: '猛烈',
                        gd4_menglie_info: '出牌阶段,你使用的第一张牌无距离限制;当你于回合内使用牌时,你可以令此牌不能被响应.',
                        gd4_xianghe: '相合',
                        gd4_xianghe_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值+1.若你以此法使用了两张黑色牌,则你弃置当前回合角色一张牌.',
                        gd5_jiang: '激昂',
                        gd5_jiang_info: '当一名角色使用牌时,你可以摸一张牌;你使用【杀】无次数限制.',
                        gd5_hunzi: '魂姿',
                        gd5_hunzi_info: '觉醒技,准备阶段,若你的体力值不大于2,你加5点体力上限并回复3点体力,并获得技能〖英姿〗、〖英魂〗和〖讨逆〗.',
                        gd5_yingzi: '英姿',
                        gd5_yingzi_info: '锁定技,摸牌阶段,你额外摸三张牌;你的手牌上限+9.',
                        gd5_yinghun: '英魂',
                        gd5_yinghun_info: '准备阶段开始时,若你已受伤,你可令一名其他角色执行一项:1.摸X张牌,弃置一张牌;2.摸一张牌,弃置X张牌.(X为你已损失的体力值)',
                        gd5_yingyong: '英勇',
                        gd5_yingyong_info: '出牌阶段,你可以将一张红色牌当【决斗】使用.',
                        gd5_taoni: '讨逆',
                        gd5_taoni_info: '当你击杀一名角色/死亡时,你可以令任意名角色摸X+1张牌.(X为你此前发动过〖讨逆〗的次数)',
                        gd5_hungui: '魂归',
                        gd5_hungui_info: '每局游戏限两次,当你处于濒死状态时,你可以弃置你区域里的所有牌,并复原你的武将牌,增加一点体力上限并回复到两点体力值,将手牌补至体力上限.',
                        gd6_beici: '背刺',
                        gd6_beici_info: '锁定技,回合结束时,若游戏轮数不小于6,你失去一点体力.',
                        gd7_fuzhu: '伏诛',
                        gd7_fuzhu_info: '其他角色的回合、判定、摸牌、出牌、弃牌阶段开始或结束时,或当一名其他角色翻面后,你可以对其使用牌堆里的一张【杀】.',
                        gd7_quanzhi: '权智',
                        gd7_quanzhi_info: '锁定技,当你受到伤害时,防止此伤害,伤害来源弃置所有牌;你不能失去体力.',
                        gd8_jiaoxie: '缴械',
                        gd8_jiaoxie_info: '当你使用【杀】造成伤害时,你可以选择一项:1.弃置其装备区内的一张牌;2.将其装备区内的一张牌移动到你的装备区内.',
                        gd8_kuangfu: '狂斧',
                        gd8_kuangfu_info: '出牌阶段,你可选择:1,弃置装备区里的一张牌,你使用无对应实体牌的普【杀】.若此【杀】造成伤害,你摸两张牌.2,弃置一名其他角色装备区里的一张牌,你使用无对应实体牌的普【杀】.',
                        gd8_pigua: '披挂',
                        gd8_pigua_info: '当你使用【杀】或成为【杀】的目标时,你可以从牌堆中随机获得一张装备牌.',
                        gd8_busi: '不死',
                        gd8_busi_info: '锁定技,当你处于濒死状态时/当你即将死亡时/当你死亡后,你复活并回复体力至体力上限,弃置你区域内的所有牌并复原你的武将牌,摸八张牌.(潘凤又被华雄斩了？滑稽)',
                        gd9_tuxi: '突袭',
                        gd9_tuxi_info: '当你的判定、摸牌、出牌、弃牌阶段开始或结束时,或当你翻面后,你可以获得任意名其他角色各一张牌.',
                        gd9_dengfeng: '登峰',
                        gd9_dengfeng_info: '锁定技,出牌阶段,你使用【杀】和【酒】无次数限制.',
                        gd9_xianzhen: '陷阵',
                        gd9_xianzhen_info: '其他角色的回合开始前,若你的武将牌正面朝上,你可以执行一个额外的回合.',
                        gd9_dushuai: '督率',
                        gd9_dushuai_info: '锁定技,你的手牌上限和攻击范围均视为∞.',
                        gd10_tiandu: '天妒',
                        gd10_tiandu_info: '当你的判定牌生效后,若你的手牌数不大于全场角色数的十倍,你可以受到一点无来源伤害并获得此牌.',
                        gd10_yiji: '遗计',
                        gd10_yiji_info: '当你受到一点伤害后,或当你失去一点体力后,你可以摸五张牌,可以将至多五张手牌分配给其他角色.',
                        gd10_jijiu: '祭酒',
                        gd10_jijiu_info: '锁定技,当你进入濒死状态时,你进行一次判定,若结果不为♠️️10,你将体力回复至一点.',
                        gd11_kuangcai: '狂才',
                        gd11_kuangcai_info: '出牌阶段开始时,你可以令你此阶段内的主动出牌时间变为26秒.若如此做,你于此阶段内使用牌无距离和次数限制,且每当你于此阶段内使用牌时,你摸一张牌且主动出牌时间-1秒.若主动出牌时间减至0,则你结束出牌阶段.',
                        gd11_shejian: '舌剑',
                        gd11_shejian_info: '出牌阶段限一次,你可以令本回合其他角色所有技能失效.',
                        gd11_jigu: '击鼓',
                        gd11_jigu_info: '出牌阶段,你可以弃置一张牌,对一名角色造成一点伤害.',
                        gd11_yingwu2: '鹦鹉',
                        gd11_yingwu2_info: '锁定技,出牌阶段结束时,你减一点体力上限.',
                        gd12_quansha: '权杀',
                        gd12_quansha_info: '出牌阶段限十二次,你可以对一名其他角色造成X点伤害.(X为你的黑色手牌数+1)',
                        gd12_lianzhu: '连诛',
                        gd12_lianzhu_info: '出牌阶段限十二次,你可以展示并交给一名其他角色一张牌,若此牌为黑色,其选择一项:1.你摸三张牌;2.弃置三张牌.',
                        gd11_yingwu: '鹦鹉',
                        gd11_yingwu_info: '出牌阶段开始时,你可以摸26张牌.若如此做,出牌阶段结束时,你减一点体力上限.',
                        gd13_guixin: '归心',
                        gd13_guixin_info: '当你受到一点伤害时,或当你失去一点体力时,你可以获得每名其他角色区域里的一张牌.',
                        gd13_tubu: '吐哺',
                        gd13_tubu_info: '当你受到一点伤害后,或当你失去一点体力后,你可以回复体力至体力上限,你进行一个额外的回合.',
                        gd13_tianxia: '天下',
                        gd13_tianxia_info: '一名其他角色即将受到伤害时/失去体力时,你可以防止之,你失去一点体力.',
                        gd13_zhougong: '周公',
                        gd13_zhougong_info: '锁定技,你不会死亡;你的手牌上限视为∞.',
                        gd14_longnu: '龙怒',
                        gd14_longnu_info: '转换技,锁定技,出牌阶段开始时,阳:你回复三点体力并摸三张牌,本回合内你的红色手牌均视为火【杀】且你使用火【杀】无距离和次数限制,造成伤害后摸一张牌;阴:你加三点体力上限并摸三张牌,本回合你的黑色手牌均视为雷【杀】且你使用雷【杀】无距离和次数限制、造成伤害后摸一张牌.',
                        gd14_longnu1: '火焰',
                        gd14_longnu1_info: '',
                        gd14_longnu2: '雷霆',
                        gd14_longnu2_info: '',
                        gd12_jieying: '结营',
                        gd12_jieying_info: '锁定技,游戏开始时或当你的武将牌重置时,你横置;所有已横置的角色手牌上限+2;结束阶段,你横置一名其他角色.',
                        gd14_nuhuo: '怒火',
                        gd14_nuhuo_info: '锁定技,游戏开始时,你获得三枚<怒>标记;当你造成或受到一点伤害后,你获得1枚<怒>标记;当你获得<怒>后,若你的<怒>数不少于7,你获得技能〖无尽〗;当你获得<怒>后,若你的<怒>数不少于14,你获得技能〖誓仇〗.',
                        gd14_wujin: '无尽',
                        gd14_wujin_info: '当你处于濒死阶段时,或当你即将死亡时,你可以移去3枚<怒>并复原你的武将牌,你回复体力至7点.',
                        gd14_shichou: '誓仇',
                        gd14_shichou_info: '出牌阶段,你可以移去14枚<怒>标记,对所有其他角色各造成∞点火焰伤害.',
                        gd14_lingti: '灵体',
                        gd14_lingti_info: '锁定技,防止你即将受到的属性伤害;你不能成为其他角色拼点的目标;你不能成为延时锦囊牌的目标.',
                        gd10_qizuo: '奇佐',
                        gd10_qizuo_info: '一名角色受到伤害或失去体力前,你可以令一名角色进行一次判定,若结果为红色,该角色回复一点体力(若其未受伤,则改为该角色加一点体力上限;若该角色不为你,则你令受到伤害/失去体力的角色回复一点体力);若结果为黑色,该角色摸X张牌.(X为此次伤害的伤害点数)',
                        gd15_luoyi: '裸衣',
                        gd15_luoyi_info: '摸牌阶段,你可以改为摸等同于已损失体力值的手牌.若如此做,直到你的下回合开始,你为伤害来源的【杀】或【决斗】造成的伤害+X.(X为你的体力值)',
                        gd15_luoyi2: '裸衣',
                        gd15_luoyi2_info: '',
                        gd15_yongli: '勇力',
                        gd15_yongli_info: '锁定技,你使用【杀】指定一名角色为目标后,除非该角色弃置一张锦囊牌,否则其不能使用【闪】响应此【杀】.',
                        gd15_huchi: '虎痴',
                        gd15_huchi_info: '锁定技,当你造成或受到伤害后,你加X点体力上限并回复等量的体力,摸X张牌(X为你造成或受到的伤害除以10,向上取整);你使用【杀】无距离和次数限制.',
                        gd16_zaiqi: '再起',
                        gd16_zaiqi_info: '锁定技,当你的体力值变化后,你回复体力至体力上限.',
                        gd16_hanyong: '悍勇',
                        gd16_hanyong_info: '锁定技,当你受到伤害后,你对伤害来源造成等量的伤害.',
                        gd16_manwang2: '蛮王',
                        gd16_manwang2_info: '',
                        gd16_manwang1: '蛮王',
                        gd16_manwang1_info: '',
                        gd16_manwang: '蛮王',
                        gd16_manwang_info: '锁定技,【南蛮入侵】对你无效;你视为所有【南蛮入侵】的伤害来源;当有角色受到【南蛮入侵】的伤害后,你摸七张牌;其他角色使用的【南蛮入侵】结算后进入弃牌堆时,你获得之.',
                        gd16_manwang3: '蛮王',
                        gd16_manwang3_info: '',
                        gd16_manwang4: '蛮王',
                        gd16_manwang4_info: '',
                        gd17_qianjie: '谦节',
                        gd17_qianjie_info: '锁定技,你不能成为其他角色拼点、【杀】、【决斗】、【顺手牵羊】、【过河拆桥】、【铁索连环】、【火攻】或【延时锦囊牌】的目标;你不能被翻面.',
                        gd17_jueyan: '决堰',
                        gd17_jueyan_info: '出牌阶段限一次,你可以弃置一张牌,根据你弃置的牌获得以下效果直到回合结束:基本牌,你摸七张牌并获得技能〖缓克〗;装备牌,你摸三张牌并回复一点体力,获得技能〖谦冲〗;锦囊牌,你摸四张牌并获得技能〖毁堰〗.',
                        gd17_jueyan_basic: '缓克',
                        gd17_jueyan_basic_info: '锁定技,你使用【杀】无次数限制;当你于回合内使用牌时,你本回合计算与其他角色的距离-1;你对与你距离为1的角色使用的【杀】无视防具.',
                        gd17_jueyan_equip: '谦冲',
                        gd17_jueyan_equip_info: '当你使用一张非转化的非基本牌结算完后,你可以摸一张牌并展示之;你使用锦囊牌无距离限制.',
                        gd17_jueyan_trick: '毁堰',
                        gd17_jueyan_trick_info: '出牌阶段,你可以弃置四张花色不同的牌,若如此做,所有其他角色先失去一点体力,再弃置装备区里的所有牌,最后弃置七张手牌.',
                        gd17_weiyan: '围堰',
                        gd17_weiyan_info: '准备阶段,你随机回复1~7点体力并摸1~7张牌,若你的体力值等于体力上限,你将势力改为<神>,体力上限和体力改为∞,失去技能〖围堰〗.',
                        gd17_poshi: '破势',
                        gd17_poshi_info: '当你击杀一名角色后,你可以选择一个技能并获得之:〖悍勇〗、〖勇力〗、〖龙怒〗、〖归心〗、〖权杀〗、〖击鼓〗、〖奇佐〗、〖陷阵〗、〖缴械〗、〖伏诛〗、〖反攻〗、〖英勇〗、〖狂傲〗、〖常胜〗、〖无尽〗.',
                        gd6_luanshi: '乱世',
                        gd6_luanshi_info: '你使用【杀】可以额外随机指定一名其他角色为目标;你的手牌上限视为6.',
                        gd6_xingluan: '兴乱',
                        gd6_xingluan_info: '当你于出牌阶段使用的仅指定一个目标的牌结算完成后,你可以摸两张牌,从牌堆中随机获得一张点数为6的牌.',
                        gd6_fangong: '反攻',
                        gd6_fangong_info: '一名角色对你使用的牌结算完毕后,你摸三张牌,你可以对其使用一张无距离限制的【杀】.',
                        gd6_yongmeng: '勇猛',
                        gd6_yongmeng_info: '锁定技,一名角色的回合开始时,系统为你的每个空装备栏选择一张装备牌,你依次使用之.出牌阶段,你使用【杀】的次数上限+6.',
                        gd6_bingzheng: '兵争',
                        gd6_bingzheng_info: '锁定技,你计算至其他角色的距离-6;其他角色计算至你的距离+6;你的牌不能被弃置或获得.',
                        gd18_junlue: '军略',
                        gd18_junlue_info: '当你受到或造成伤害后,你获得X个<军略>标记,你可以将一名其他角色横置.(X为伤害点数)',
                        gd18_cuike: '摧克',
                        gd18_cuike_info: '出牌阶段开始时,若<军略>标记的数量为:奇数,你可以对一名角色造成一点不触发任何其它效果的伤害并回复一点体力;偶数,你可以横置一名角色并弃置其区域内的一张牌,你加一点体力上限.若<军略>标记的数量超过7个,你可以移去7枚<军略>标记并对所有其他角色各造成一点不触发任何其它效果的伤害.',
                        gd18_zhengyu: '征御',
                        gd18_zhengyu_info: '锁定技,你计算至其他角色的距离-X;出牌阶段,你使用【杀】的次数上限+X;当你造成伤害时,你此令伤害+X,摸一张牌;其他角色计算至你的距离+X.(X为<军略>的数量)',
                        gd18_zhanhuo: '绽火',
                        gd18_zhanhuo_info: '出牌阶段,你可以移去三枚<军略>标记并令等同于<军略>标记数量的已横置角色弃置所有装备区内的牌.若如此做,你对其中一名角色造成三点火焰伤害,你加三点体力上限并回复三点体力.',
                        gd19_tianfa: '天罚',
                        gd19_tianfa_info: '出牌阶段限一次,你可以选择一名其他角色令其失去所有技能并将其体力上限改为一点,该角色受到9点雷电伤害.',
                        gd19_feisheng: '飞升',
                        gd19_feisheng_info: '觉醒技,准备阶段开始时,若你的体力上限大于存活角色数的2倍,你摸等同于场上存活角色数2倍数量的牌,将势力改为<神>,将体力上限和体力改为∞,并获得〖威重〗、〖天罚〗和〖湮灭〗.',
                        gd19_yanmie: '湮灭',
                        gd19_yanmie_info: '出牌阶段限九次,你可以令一名其他角色陷入混乱状态,其获得〖崩坏〗.',
                        gd19_yanmie_debuff: '崩坏',
                        gd19_yanmie_debuff_info: '锁定技,结束阶段,你失去一点体力或减一点体力上限.',
                        gd19_gongao: '功獒',
                        gd19_gongao_info: '锁定技,当一名角色死亡后,你增加10点体力上限,回复10点体力.',
                        gd19_weizhong: '威重',
                        gd19_weizhong_info: '锁定技,当你造成伤害时,你随机令伤害值改为原来的1~3倍.',
                        gd20_pojun: '破军',
                        gd20_pojun_info: '①当你使用【杀】指定目标后,你可以将其任意张牌置于其武将牌上.若如此做,当该角色受到伤害时,此伤害+X(X为该角色武将牌上<破军>的数量),其移去所有<破军>牌;②当你因执行【杀】的效果而对一名角色造成伤害时,你可令该角色失去所有技能;③当你使用【杀】造成伤害后,你可以令受到该伤害的角色摸X张牌(X为该角色当前的体力值且最多为5),该角色将其武将牌翻面;④当你使用【杀】造成伤害后,你摸两张牌;⑥一名角色的回合结束后,若你于本回合击杀过其他角色,则你可以进行一个额外的回合;⑦你使用【杀】无次数限制;⑧你计算至其他角色的距离-∞.',
                        gd20_pojun2: '破军',
                        gd20_pojun2_info: '锁定技,当你受到伤害时,此伤害+X.(X为你武将牌上<破军>的数量)',
                        gd20_pojun3: '破军',
                        gd20_pojun3_info: '当你使用【杀】造成伤害后,你可以令受到该伤害的角色摸X张牌(X为该角色当前的体力值且最多为5),该角色将其武将牌翻面.',
                        gd20_pojun4: '破军',
                        gd20_pojun4_info: '当你使用【杀】造成伤害时,你可以令该角色所有技能失效.',
                        gd20_pojun5: '破军',
                        gd20_pojun5_info: '当你使用【杀】造成伤害后,你摸两张牌.',
                        gd20_pojun6: '破军',
                        gd20_pojun6_info: '一名角色的回合结束后,若你于本回合击杀过其他角色,你可以进行一个额外的回合.',
                        gd20_ergui: '二鬼',
                        gd20_ergui_info: '限定技,出牌阶段,或当你处于濒死阶段时,你可以回复体力至体力上限并重置武将牌,你可以令一名其他角色获得〖劫营〗并切换身份与你相同.',
                        gd21_mojiang: '魔将',
                        gd21_mojiang_info: '锁定技,当你造成伤害后,或当你的体力值变化后,你加四点体力上限,将手牌摸至体力上限;你使用【杀】无次数限制;你计算至其他角色的距离-∞.',
                        gd21_weishe: '威慑',
                        gd21_weishe_info: '当你使用的牌结算完毕后,你可以令一名其他角色弃置两张牌.',
                        gd21_shiyong: '恃勇',
                        gd21_shiyong_info: '出牌阶段限一次,你可以选择一名其他角色,令其所有技能失效并对其造成8点不触发任何其它效果的伤害.若如此做,该角色加4点体力上限,你减4点体力上限.',
                        gd21_zhanfeng: '斩凤',
                        gd21_zhanfeng_info: '锁定技,其他角色处于濒死状态时,你令其立即不触发任何其它效果的死亡.',
                        gd22_shangshi: '伤逝',
                        gd22_shangshi_info: '当你的手牌数小于X时,你可以将手牌摸至X张.(X为你已损失的体力值的两倍)',
                        gd22_jueqing: '绝情',
                        gd22_jueqing_info: '游戏开始时,你可令所有其他角色失去所有技能;你即将造成或受到的伤害均视为失去体力.',
                        gd22_jueqing2: '绝情',
                        gd22_jueqing2_info: '锁定技,你即将造成或受到的伤害均视为失去体力.',
                        gd22_suixin: '碎心',
                        gd22_suixin_info: '锁定技,一名角色失去体力时,你增加两点体力上限;你使用【杀】无次数限制;你的攻击范围视为∞.',
                        gd23_fuman: '抚蛮',
                        gd23_fuman_info: '出牌阶段限两次,你可以将一张牌交给一名未获得过<抚蛮>牌的其他角色并将其势力改为<蜀>,该角色切换身份与你相同(仅军争模式有效,若你为主公,则其身份改为忠臣);每当一名获得过<抚蛮>牌的角色使用牌时,你摸一张牌.',
                        gd23_fuman2: '抚蛮',
                        gd23_fuman2_info: '',
                        gd23_manbing: '蛮兵',
                        gd23_manbing_info: '出牌阶段限三次,你可以弃置一名角色的一张牌,你视为使用了一张【南蛮入侵】.',
                        gd23_nabing: '纳兵',
                        gd23_nabing_info: '其他角色打出的牌进入弃牌堆时,你可以获得之.',
                        gd23_pingpan: '平叛',
                        gd23_pingpan_info: '觉醒技,回合开始时,若场上蜀势力角色数大于等于3,你将势力改为<神>,将体力上限和体力改为∞,并获得技能〖纳兵〗、〖蛮兵〗.',
                        gd24_kurou: '苦肉',
                        gd24_kurou_info: '出牌阶段,你可以失去一点体力;当你失去一点体力时,你摸四张牌.',
                        gd24_zhaxiang: '诈降',
                        gd24_zhaxiang_info: '锁定技,你于出牌阶段内使用【杀】无次数限制且不能被【闪】响应;你计算至其他角色的距离-∞;当你的体力值变化后,若你的体力值不大于1,你回复体力至体力值上限.',
                        gd24_zhaxiang2: '诈降',
                        gd24_zhaxiang2_info: '',
                        gd25_wushen: '武神',
                        gd25_wushen_info: '锁定技,你使用【杀】无次数限制且不可被响应;你的红色手牌均视为【杀】;你使用红色【杀】无距离限制.',
                        gd25_wuhun: '武魂',
                        gd25_wuhun_info: '当你受到伤害后,你可以令伤害来源不触发任何其它效果的死亡.',
                        gd26_tuifan: '褪凡',
                        gd26_tuifan_info: '锁定技,当你造成或受到伤害后,你获得X枚<褪凡>标记,你加X点体力上限,回复X点体力并摸X张牌.若如此做,你随机展示(X+2)个武将技能并获得其中之一.(X为伤害值)',
                        gd26_huaxian: '化仙',
                        gd26_huaxian_info: '觉醒技,准备阶段,若你的<褪凡>标记数大于等于13,你将势力改为<神明>,体力上限和体力改为∞,并获得技能,仙体】、【渡生】和【幻身】.',
                        gd26_huanshen: '幻身',
                        gd26_huanshen_info: '锁定技,你视为拥有所有其他角色的所有技能.',
                        gd26_xianti: '仙体',
                        gd26_xianti_info: '锁定技,你的武将始终正面朝上;你不能成为【南蛮入侵】、【万箭齐发】、【顺手牵羊】、【过河拆桥】、【火攻】或延时锦囊牌的目标.',
                        gd26_dusheng: '渡生',
                        gd26_dusheng_info: '出牌阶段,你可以弃置一张手牌并选择一名已死亡的其他角色,该角色复活并将体力回复至体力上限,其摸四张牌并获得技能〖新生〗、〖化身〗.若如此做,该角色切换身份与你相同.',
                        gd1_juejing: '绝境',
                        gd1_juejing_info: '锁定技,你使用牌无次数限制;你计算至其他角色的距离-∞;当你进入或脱离濒死状态时,你选择一项:1.令一名其他角色弃置四张牌,你摸四张牌;2.摸四张牌.',
                        gd27_qiangyi: '枪意',
                        gd27_qiangyi_info: '锁定技,当你的判定阶段或弃牌阶段开始时,或当你即将受到伤害、失去体力、减少体力上限、翻面、横置、进入濒死状态、死亡时,你防止之,获得1枚<枪意>.',
                        gd27_zongshi: '宗师',
                        gd27_zongshi_info: '锁定技,当你造成伤害时,你令此伤害+X,你摸一张牌.(X为<枪意>的数量)',
                        gd27_bainiao: '百鸟',
                        gd27_bainiao_info: '回合结束后,你可以视为使用一张【杀】;你的攻击距离视为∞;你使用【杀】可以额外指定至多99个目标;.',
                        gd27_chaofeng: '朝凤',
                        gd27_chaofeng_info: '锁定技,你使用【杀】无视防具;准备阶段,你声明<赵云>、<SP赵云>、<神赵云>、<张绣>和<张任>中的一名武将并获得其相应的技能,你获得【龙胆亮银枪】.',
                        longdan_skill: '龙胆亮银枪',
                        longdan_skill_info: '你可以将两张手牌当【闪】使用或打出.',
                        gd28_shuangji: '双戟',
                        gd28_shuangji_info: '出牌阶段限两次,你可以弃置一张牌并选择一名其他角色,你随机执行一项:1.令该角色本回合所有技能失效,你对其造成随机3~4点伤害;2.你对该角色随机造成X点伤害(若该角色体力值为∞,则改为令其死亡).(X∈(0,Infinity))',
                        gd28_shiji: '拾戟',
                        gd28_shiji_info: '锁定技,一名角色死亡后,你获得该角色的所有牌,重置你的技能和牌的使用次数,加X点体力上限并回复X点体力.(X为全场存活角色数)',
                        gd29_huxiao: '虎啸',
                        gd29_huxiao_info: '锁定技,当你对一名角色造成火焰伤害时,你于此回合内对其使用牌没有次数限制,且当你对该角色造成伤害时,你令伤害增加1~9倍;当你受到其他角色造成的火焰伤害时,你令伤害来源失去所有技能;你不会受到火焰伤害.',
                        gd29_huxiao2: '虎啸',
                        gd29_huxiao2_info: '',
                        gd29_huxiao3: '虎啸',
                        gd29_huxiao3_info: '',
                        gd29_xuehen: '雪恨',
                        gd29_xuehen_info: '出牌阶段,你可以弃置一张红色牌,选择至多X名其他角色,横置这些角色并对其中一名角色造成2点火焰伤害.(X为你已损失的体力值且至少为2)',
                        gd29_wuji: '武继',
                        gd29_wuji_info: '觉醒技,结束阶段开始时,若你于此回合内造成过9点或更多伤害,你加2点体力上限并回复2点体力,获得技能〖武魂〗、〖武神〗.',
                        gd30_xingwu: '星舞',
                        gd30_xingwu_info: '游戏开始时,或当你的摸牌与弃牌阶段开始时,你可以摸6张牌并将5张手牌置于武将牌上,称之为<舞>,若你的<舞>中包含三种花色,则你须移去三张花色不同的<舞>并选择一名角色,该角色受到4点伤害(若为女性,则改为2点)并弃置所有牌.',
                        gd30_luoyan: '落雁',
                        gd30_luoyan_info: '锁定技,回合结束后,根据你的武将牌上<舞>的数量执行以下效果:不少于2,你的手牌上限改为∞;不少于4,你获得技能〖国色〗、〖天香〗、〖言笑〗和〖知节〗;不少于6,你获得技能〖流离〗、〖红颜〗和〖安娴〗.',
                        gd30_shuangfei: '双飞',
                        gd30_shuangfei_info: '出牌阶段,你可以选择两名其他角色并弃置2枚<舞>,这些角色失去所有技能并废除装备区.若这些角色中有角色体力值为∞,你令其体力上限变为1点.',
                        gd31_xiongluan: '雄乱',
                        gd31_xiongluan_info: '出牌阶段,你可以指定一名其他角色,废除你的判定区和目标的装备区.直到回合结束,你对其使用牌无距离和次数限制,其不能使用和打出手牌.',
                        gd31_congjian: '从谏',
                        gd31_congjian_info: '当你成为锦囊牌的目标时,若此牌的目标数大于1,则你可以交给其中一名其他目标角色一张牌,摸两张牌,若你给出的是装备牌,改为摸三张牌.',
                        gd31_baizhan: '百战',
                        gd31_baizhan_info: '锁定技,当你使用的【杀】结算完毕后,你从牌堆或弃牌堆随机获得一张【杀】.',
                        gd31_zhenbei: '震北',
                        gd31_zhenbei_info: '锁定技,当你受到伤害时,你令伤害来源失去所有技能,若伤害值:不大于2,此伤害-1;大于2,此伤害改为一点.',
                        gd32_dishi: '帝师',
                        gd32_dishi_info: '锁定技,当你受到伤害时,改为你回复等量的体力;你不能失去体力.',
                        gd32_fanzhi: '反制',
                        gd32_fanzhi_info: '锁定技,当你成为其他角色使用的牌的目标后,你令此牌无效,你视为对该角色使用此牌.',
                        gd32_cangjian: '藏剑',
                        gd32_cangjian_info: '当你使用的非基本牌结算完毕后,你可以视为使用一张无距离限制的【杀】.',
                        gd32_piaomiao: '飘渺',
                        gd32_piaomiao_info: '锁定技,当你对一名角色造成伤害后,若该角色仍存活,你获得1枚<剑>标记,若<剑>的数量不小于3,你移去3枚<剑>并对其造成X点伤害.(X→∞)',
                        gd33_fankui: '反馈',
                        gd33_fankui_info: '当你受到伤害后,你可以摸三张牌并获得伤害来源随机1~3张牌,对伤害来源造成随机1~3点伤害.若如此做,你获得X枚<馈>.(X为伤害数值的6倍)',
                        gd33_guicai: '鬼才',
                        gd33_guicai_info: '出牌阶段,你可以移去3枚<馈>标记,摸一张牌并回复一点体力;一名角色的的判定牌生效前,你摸三张牌,你可以打出一张牌代替之.',
                        gd33_tanlang: '贪狼',
                        gd33_tanlang_info: '当你造成伤害后,你可以获得一名其他角色武将牌上的所有技能,该角色所有技能失效.',
                        gd33_tuntian: '吞天',
                        gd33_tuntian_info: '觉醒技,当你受到伤害时,或准备阶段开始时,若你的<馈>标记数不小于11,你加3点体力上限,获得技能〖集智〗、〖制衡〗、〖完杀〗、〖放逐〗和〖连破〗.',
                        gd34_fanghun: '芳魂',
                        gd34_fanghun_info: '锁定技,一名角色使用牌时,你获得1个<梅影>标记;你可以移去1个<梅影>标记来发动〖龙胆〗并摸一张牌.',
                        gd34_fuhan: '扶汉',
                        gd34_fuhan_info: '回合开始时,你可以移去所有"梅影"标记并摸X张牌,加X点体力上限并回复X点体力.若如此做,你随机观看X名未登场的蜀势力角色,获得其中一张武将牌上的所有技能.(限定技、觉醒技、主公技除外).(X为移去的<梅影>的数量)',
                        gd34_dunyi: '遁逸',
                        gd34_dunyi_info: '其他角色的摸牌阶段开始前,你可以弃置X枚<梅影>并对其造成一点伤害.(X为其手牌数,无牌则不弃,不足则全部弃置)',
                        gd34_huodi: '惑敌',
                        gd34_huodi_info: '其他角色的回合结束后,你可以弃置X枚<梅影>使其不能打出或使用手牌.(X为其手牌数,无牌则不弃,不足则全部弃置)',
                        nouse_debuff: '自闭',
                        nouse_debuff_info: '锁定技,你不能使用或打出手牌.',
                        gd35_zenhui: '谮毁',
                        gd35_zenhui_info: '出牌阶段,当你使用【杀】或普通锦囊牌指定唯一目标时,你先摸3~5张牌,你可令可以成为此牌目标(无距离限制)的另一名其他角色选择一项:1.交给你一张牌并失去一点体力,代替你成为此牌的使用者;2.成为此牌的额外目标,该角色受到由你造成的一点伤害.',
                        gd35_jiaojin: '骄矜',
                        gd35_jiaojin_info: '当你成为一名其他角色使用的【杀】或普通锦囊牌的目标后,你可以弃置你区域的一张牌,令此牌对你无效并获得此牌对应的所有实体牌.',
                        gd35_meibu: '魅步',
                        gd35_meibu_info: '其他角色的出牌阶段开始时,你可以弃置一张牌,摸3~5张牌,令该角色获得技能〖止息〗直至本阶段结束.',
                        gd35_mumu: '穆穆',
                        gd35_mumu_info: '出牌阶段开始时,你可以选择一项:1.弃置一名其他角色装备区里的一张牌;2.获得一名角色装备区里的一张防具牌.',
                        gd35_dahu: '衅逝',
                        gd35_dahu_info: '当你进入濒死阶段时,你可以将武将牌替换为【高达大虎号】,你摸四张牌回复体力至体力上限.',
                        gd35_xiaohu: '歉致',
                        gd35_xiaohu_info: '当你进入濒死阶段时,你可以将武将牌替换为【高达小虎号】,你摸四张牌回复体力至体力上限.',
                        gd35_zhixi: '止息',
                        gd35_zhixi_info: '锁定技,当你使用牌时,你弃置一张手牌并失去一点体力.',
                        gd35_gongxin: '宫衅',
                        gd35_gongxin_info: '锁定技,当你受到伤害后,伤害来源失去全部技能并随机弃置3~5张牌;当你进入濒死阶段时,你可以将武将牌替换为【高达大虎号】或【高达小虎号】,回复体力至体力上限并摸4张牌.',
                        gd36_jijun: '集军',
                        gd36_jijun_info: '锁定技,一名角色使用牌时,你获得1个<方统>标记,其有36%的几率受到由你造成的一点雷电伤害.',
                        gd36_fangtong: '方统',
                        gd36_fangtong_info: '一名其他角色的回合结束后,若你的<方统>大于等于36枚,你可以移去6枚<方统>,并对其造成∞点雷电伤害.',
                        gd36_leiji: '雷祭',
                        gd36_leiji_info: '锁定技,防止你即将受到的雷电伤害,你增加X点护甲;当你造成雷电伤害后,你摸两张牌,增加X点护甲.(X为伤害值)',
                        gd36_guishu: '诡术',
                        gd36_guishu_info: '①一名角色进入濒死阶段时,若你有护甲,你可以移去一点护甲令其回复X点体力(X为其体力上限);②回合结束后,若你有护甲,则可以移去所有护甲并获得一个新的回合.',
                        gd37_wenji: '问计',
                        gd37_wenji_info: '出牌阶段限七次,你可以令一名其他角色交给你一张牌,其选择其武将牌上的一个技能并令你获得与此技能同名的技能.你于本回合内使用<问计>牌时不能被其他角色响应.',
                        gd37_tunjiang: '屯江',
                        gd37_tunjiang_info: '一名角色的结束阶段,你可以摸X张牌(X为全场势力数).',
                        gd37_jijie: '羁结',
                        gd37_jijie_info: '每名角色限一次,其他角色的出牌阶段开始前,你可以将其武将牌替换为<刘表>、<刘备>、<蔡夫人>、<诸葛亮>或<关羽>,你摸X张牌并获得技能〖羁结〗(X为场上势力数)',
                        gd37_jijie2: '羁结',
                        gd37_jijie2_info: '锁定技,当你使用牌时,你令高达卅七号摸一张牌并增加一点护甲.',
                        gd38_zhenjun: '镇军',
                        gd38_zhenjun_info: '①准备阶段,你可以弃置一名角色所有牌,你与其各摸一张牌;②出牌阶段开始时,你可以将一张牌交给一名其他角色,令其选择是否使用一张不为黑色的【杀】.若其选择是,则你于此【杀】结算完成后摸X+1张牌(X为此【杀】造成的伤害总点数).若其选择否,则你对其或其攻击范围内的一名其他角色造成3点伤害.',
                        gd38_yizhong: '毅重',
                        gd38_yizhong_info: '锁定技,其他角色使用的黑色牌对你无效.',
                        gd38_zhengyi: '整毅',
                        gd38_zhengyi_info: '当你的手牌数或体力值变化后,若此时处于你的回合内且你的手牌数等于体力值,你可以弃置一张牌.若如此做,本回合内你使用牌无距离和次数限制,且当你造成伤害后,摸X张牌.(X为伤害值的两倍)',
                        gd38_jieyue: '节钺',
                        gd38_jieyue_info: '①结束阶段开始时,你可以将一张牌交给一名其他角色.若如此做,其选择一项:1.令你摸四张牌;2.保留一张手牌和装备区的牌,弃置其余的牌并失去一点体力上限;②其他角色的结束阶段开始时,其须交给你一张牌,你可以弃置其一张牌;③你可以将红色手牌当作【闪】、黑色手牌当作【无懈可击】使用或打出.',
                        gd39_tianjiang: '天匠',
                        gd39_tianjiang_info: '锁定技,游戏开始时,你随机获得两张不同副类别的装备牌(<赠物>除外),并置入你的装备区;出牌阶段,你可以将装备区的牌移动至其他角色的装备区,若你以此法移动了【铸刃】的衍生装备,你摸两张牌.',
                        gd39_zhuren: '铸刃',
                        gd39_zhuren_info: '出牌阶段限一次,你可以弃置一张手牌.根据此牌的花色点数,你有一定概率打造成功并获得一张武器牌(若打造失败或武器已有则改为摸一张【杀】,花色决定武器名称,点数决定成功率).此武器牌进入弃牌堆时,将其移出游戏.',
                        gd39_jiangxin: '匠心',
                        gd39_jiangxin_info: '锁定技,一名角色使用装备牌(坐骑牌、【木牛流马】和<赠物>除外)时,你获得此装备拥有的效果(攻击范围除外);当你使用装备牌后,本回合你的所有技能均视为未发动过,且本回合你使用牌无次数限制.',
                        gd39_xiaoren: '晓刃',
                        gd39_xiaoren_info: '出牌阶段,你可以选择场上一张装备牌,你修改一张手牌的牌面信息与此牌相同.若如此做,你可以将之置入一名角色装备区;你的装备牌不能被主动弃置.',
                        gd40_fenxun: '奋迅',
                        gd40_fenxun_info: '①出牌阶段限一次,你可以与至多十名角色进行拼点,依次结算拼点结果:若你赢,你计算与该角色的距离视为为1,你对其使用牌无次数限制且其非锁定技失效;若你没赢,你摸两张牌,其弃置一张牌.②你可以使用牌堆顶的牌进行拼点,你的拼点牌的点数+5.',
                        gd40_duanbing: '短兵',
                        gd40_duanbing_info: '锁定技,你使用【杀】指定目标后,此【杀】对所有原有目标额外结算一次,你令所有距离为1的角色也成为此【杀】目标.',
                        gd40_bozhan: '搏战',
                        gd40_bozhan_info: '锁定技,当你对其他角色造成伤害后,你令其获得1枚<搏战>标记和〖力穷〗,且该角色不能对你使用锦囊牌或延时锦囊牌直到其回合结束;②一名角色的出牌阶段结束后,有<搏战>标记的角色须弃置X张牌(X为其武将牌上<搏战>的数量);③一名角色的体力上限减少后,你加一点体力上限并摸一张牌.',
                        gd40_liqiong: '力穷',
                        gd40_liqiong_info: '锁定技,你于出牌阶段或回合外至多使用X张牌(X为你的体力值);当你使用牌时,你获得一枚<力穷>标记,当你的回合结束后,你移去所有<力穷>标记并减一点体力上限.',
                        ergui_wuchang: '无常',
                        ergui_wuchang_info: '锁定技,其他角色进入濒死状态时,若其体力值小于0,则你摸两张牌,并获得使其进入濒死状态的牌.',
                        gd41_kongjv: '恐惧',
                        gd41_kongjv_info: '其他角色的回合开始时,你可以观看其手牌,若其中:有♥️️牌,本回合该角色改为由你操控;没有♥️️牌,你获得〖潜行〗直至回合结束.',
                        gd41_kongjv2: '恐惧',
                        gd41_kongjv2_info: '',
                        gd41_mowang: '魔王',
                        gd41_mowang_info: '锁定技,出牌阶段结束时,你随机获得一名神势力武将的所有技能.',
                        gd41_keji: '克己',
                        gd41_keji_info: '锁定技,你跳过准备阶段、判定阶段、弃牌阶段和结束阶段.',
                        gd42_ergui: '二鬼',
                        gd42_ergui_info: '限定技,出牌阶段,或当你处于濒死阶段时,你可以回复体力至体力上限并重置武将牌,你可以令一名其他角色获得〖破军〗并切换身份与你相同.',
                        gd42_paimen: '拍门',
                        gd42_paimen_info: '一名角色的回合开始时,你可以选择一张不在游戏外的牌,将其置于牌堆/弃牌堆的顶部/底部或一名角色的对应区域内.',
                        gd42_jieying: '劫营',
                        gd42_jieying_info: '其他角色回合结束时,你可以对该角色造成X点伤害,你获得其所有牌.(X为你与该角色的手牌数之差的绝对值)',
                        gd43_jishou: '棘手',
                        gd43_jishou_info: '锁定技,一名角色的结束阶段开始时,该角色加X点体力上限,其回复X点体力并摸等量的牌.(X为该角色的手牌数)',
                        gd43_huainian: '怀念',
                        gd43_huainian_info: '一名角色的准备、判定、摸牌、出牌、弃牌、结束阶段开始时,你可以令系统生成【杀】、【闪】、【桃】和【酒】各一张,你依次获得这些牌.',
                        gd43_cuihui: '摧毁',
                        gd43_cuihui_info: '当你使用实体牌指定其他角色为目标后,你可以令该角色所有技能失效并失去X点体力,且其不能响应此牌,你获得〖神助〗直至回合结束.(X为你区域里的牌数)',
                        gd43_mashu: '马术',
                        gd43_mashu_info: '锁定技,你计算至其他角色的距离-∞;你使用牌无次数限制.',
                        gd43_shenzhu: '神助',
                        gd43_shenzhu_info: '出牌阶段限一次,你可以弃置一张牌并摸一张牌,获得一个马神的技能直至回合结束.',
                        equit_xibing: '息兵',
                        equit_xibing_info: '锁定技,当你存在于场上时,游戏结束.',
                        /*"gd44_bingwan":"兵万",
                        "gd44_bingwan_info":"锁定技,游戏开始时,你获得十万枚<兵>标记;你计算至其他角色的距离-X;出牌阶段,你使用【杀】的次数上限+X;其他角色计算至你的距离+X.(X为<兵>的数量)",
                        "gd44_huiwan":"会玩",
                        "gd44_huiwan_info":"遗计两个桃独白:当时做这个旧版的会玩技能,其实我整整花了三周时间才肝出来.但发布后反应较差,许多玩家近期都反馈召唤太多手机卡死、无名杀崩溃的现象.后来,本扩展原作者与我商议之下,重做了高达卌四号.本技能代码不做保留,内心虽然些许遗憾,但玩家们的快乐才是本扩展的初衷,我不能由于自己的偷懒而伤害大家对本扩展的一份深情.故最终修改高达卌四号.",
                        "old_gd44_jiuyuan":"救援",
                        "old_gd44_jiuyuan_info":"主公技,其他吴势力角色使用【桃】时,你可以回复体力至体力上限.",
                        "gd44_guankan":"观看",
                        "gd44_guankan_info":"",
                        "gd44_mopai":"摸牌",
                        "gd44_mopai_info":"",
                        "gd44_jineng":"技能",
                        "gd44_jineng_info":"",
                        "gd44_jiangbiao":"江表",
                        "gd44_jiangbiao_info":"",
                        "gd44_huliang":"虎良",
                        "gd44_huliang_info":"",
                        "gd44_jiangbiao_debuff":"江表",
                        "gd44_jiangbiao_debuff_info":"",
                        "gd44_huliang_debuff":"虎良",
                        "gd44_huliang_debuff_info":"",*/
                        gd44_zhiheng: '制衡',
                        gd44_zhiheng_info: '①回合开始时,你可以选择任意名其他角色,你令这些角色的手牌数或体力值或体力上限调整为X(X为游戏轮数且至少为1);②其他角色失去牌/体力值/体力上限变化后,你可以获得与之同名的牌/回复等量的体力/增加等量的体力上限.',
                        gd44_zhiheng_debuff: '制衡',
                        gd44_zhiheng_debuff_info: '',
                        gd44_jiuyuan: '救援',
                        gd44_jiuyuan_info: '锁定技,当你进入濒死状态时,你选择一名区域里有牌的吴势力角色,你弃置该角色区域的一张牌.若如此做,你回复体力至一点.',
                        gd45_shawo: '杀我',
                        gd45_shawo_info: '①攻击范围内包含你的角色成为【杀】的目标时,若你不是此【杀】的使用者或目标,你可以弃置一张牌,摸四张牌并将此【杀】转移给你.②出牌阶段,你可以选择一名攻击范围内包含你的角色,除非该角色对你使用一张【杀】且此【杀】对你造成伤害,否则你弃置其任意张牌.',
                        gd45_jiaozhu: '教主',
                        gd45_jiaozhu_info: '①当一名角色的判定牌生效前,你可以选择一种点数和花色代替之.②当一名角色的判定牌生效后,你可以获得之并增加一点护甲.若如此做,你从牌堆或弃牌堆中随机获得四张牌名各不相同且副类别不同的牌,若你的手牌数不大于8,你重复此流程.③你的手牌上限视为∞.④〖教主〗不会被无效.',
                        gd45_dianshan: '电闪',
                        gd45_dianshan_info: '①你可以将一张牌当【闪】使用或打出.②当你失去【闪】或【闪电】时,或当你进入濒死状态时,你可以进行判定.③当你的判定牌生效后,你可以对一名其他角色造成X点雷电伤害.若如此做,你加等量的体力上限,回复体力至体力上限.(X∈(0,Infinity))',
                        gd45_leiming: '雷鸣',
                        gd45_leiming_info: '①当一名角色受到伤害时,若此伤害为雷电伤害且该角色:不为你,你可以令其陷入混乱状态,你获得一枚<乱>标记;为你,你可以防止此伤害.②当一名角色回合开始时/失去牌时/发动主动技能时/死亡时,若你的<乱>数+1不小于全场角色数,你所在的身份获得游戏胜利.',
                        gd46_duibai: '对白',
                        gd46_duibai_info: '起始手牌分发完毕后/摸牌阶段结束后,你可以令任意名其他角色用<王朗>替换武将牌,这些角色获得〖破防〗和〖自闭〗.当你的拼点牌亮出后,你令点数视为∞,你摸三张牌并回复两点体力.',
                        gd46_pofang: '破防',
                        gd46_pofang_info: '锁定技,你的♥️️牌均视为【毒】;当你死亡时,高达卌六号摸七张牌,加七点体力上限并回复体力至体力上限.',
                        gd47_fengpo: '凤魄',
                        gd47_fengpo_info: '游戏开始时,你将【贯石斧】置于你的装备区;你可以将一张牌当做任意基本牌或锦囊牌使用或打出;当你使用♦️️【杀】指定一名角色目标后,你可以TA点颜色看看.',
                        gd47_zhuanda: '专打',
                        gd47_zhuanda_info: '每轮游戏开始时,你可以令任意名其他角色于本局游戏中的所有回复体力/摸牌效果改为失去/弃置等量的体力/牌.',
                        gd47_zhuanda_debuff: '',
                        gd47_zhuanda_debuff_info: '',
                    },
                };
                lib.config.all.characters.add('高达宇宙');
                lib.config.characters.add('高达宇宙');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:高达宇宙/image/${i}.jpg`)
                }
                lib.translate['高达宇宙_character_config'] = `高达宇宙`;
                return QQQ;
            });
        },
        package: {
            card: {
                card: {
                    longdanliangyinqiang: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -99,
                        },
                        ai: {
                            equipValue(card, player) {
                                var num = 3.5 + player.countCards('h') / 3;
                                return Math.max(num, 4);
                            },
                            basic: {
                                equipValue: 10,
                                order: 10,
                                useful: 2,
                                value: 10,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        skills: ['longdan_skill', 'zhuge_skill', 'qinggang_skill', 'fangtian_skill', 'qilin_skill'],
                        enable: true,
                        selectTarget: -1,
                        filterTarget(card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content() {
                            if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                        },
                        toself: true,
                    },
                },
                translate: {
                    longdanliangyinqiang: '龙胆亮银枪',
                    longdanliangyinqiang_info: '你使用【杀】无视防具;当你使用【杀】对目标角色造成伤害时,你可以弃置其装备区里的一张坐骑牌;你使用的【杀】若是你最后的手牌,你可以额外选择至多两个目标;你可以将两张手牌当【闪】使用或打出;你于出牌阶段内使用【杀】无次数限制;当此牌不因交换装备或移动至其他装备区而离开你的装备区后,销毁之..',
                },
            },
            intro: "<font color=#S1H223>2020年发布的初版高达宇宙扩展包,得名灵感来源于<高达一号>(初代神赵云),后来发展到了十几号、廿几号……如今已经三年了,虽然谈不上高寿,但也算圈内中流砥柱的扩展年龄.<br><font color=#238412>高达宇宙内的武将无不各具风采,强度偏高,有着自己独特的韵味.如果说,三国杀有八阴,那么高达阴间神将可绝对不逊色,也许高达宇宙武将一杀七,只是他们的冰山一角的实力.<br><font color=#ABCDEF>v46.0版新增武将:修改了一个高达<br>技能修改:暗改了4个技能并修复了几个bug</font><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '原作者:复读姬喵~;后期修订:遗计两个桃',
            forumURL: '原作者QQ:1440078720(复读姬喵~);后期修订者QQ:2998242135(遗计两个桃);',
            version: '49.0',
        },
    };
});
